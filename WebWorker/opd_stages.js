const stagesService = {
    async setOfflineStages() {
        try {
            // Get existing stages from IndexedDB
            const existingStages = await DatabaseManager.getOfflineData("stages");
            const existingUnsynced = await DatabaseManager.getOfflineData("unsavedStages", {
                whereClause: { sync_status: 'pending' }
            });

            // Define all possible stages
            const allStages = ["VITALS", "CONSULTATION", "LAB", "DISPENSATION"];
            const allRecords = [];

            // Fetch each stage type from the server
            for (const stage of allStages) {
                try {
                    const response = await ApiService.getData("stages", {
                        location_id: LOCATIONID,
                        stage: stage,
                        status: 1, // Only active stages
                        paginate: false
                    });

                    if (response && Array.isArray(response)) {
                        // Mark all server records as synced
                        const syncedRecords = response.map(record => ({
                            ...record,
                            sync_status: 'synced',
                            updated_at: new Date().toISOString()
                        }));
                        allRecords.push(...syncedRecords);
                    }
                } catch (error) {
                    console.error(`Failed to fetch ${stage} stages:`, error);
                }
            }

            // Preserve unsynced local changes
            const unsavedChanges = existingUnsynced || [];

            // Combine server records with unsynced local changes
            const combinedRecords = [
                ...allRecords,
                ...unsavedChanges.filter(record => record.status === 1) // Only active unsynced records
            ];

            if (combinedRecords.length > 0) {
                // Update both stores
                await DatabaseManager.overRideCollection("stages", allRecords);
                console.log("[Stages] Synced data saved to IndexedDB");

                // Only update unsaved stages if we have changes
                if (unsavedChanges.length > 0) {
                    await DatabaseManager.overRideCollection("unsavedStages", unsavedChanges);
                }

                return {
                    synced: allRecords,
                    unsynced: unsavedChanges
                };
            }

            return {
                synced: existingStages || [],
                unsynced: existingUnsynced || []
            };

        } catch (error) {
            console.error("[Stages] Error setting offline stages:", error);
            throw error;
        }
    },

    async addStage() {

    },

    async updateStage() {
        try {
            //  Ensure required components are present
            if (!payload?.storeName || !payload?.whereClause || !payload?.data) {
                throw new Error("Missing required parameters");
            }
            const validStageStores = [self.STORE_NAME, self.UNSAVED_STORE_NAME];
            if (!validStageStores.includes(payload.storeName)) {
                throw new Error(`Invalid store name for stage update`);
            }

            //  Load all records from the specified store
            const all = await DatabaseManager.getOfflineData(payload.storeName);
            const existing = all.find(record => record.id === payload.whereClause.id);
            if (!existing) {
                return self.postMessage({ success: false, error: "No matching records found" });
            }
            const updateData = {
                ...payload.data,
                updated_at: new Date().toISOString()
            };
            if (typeof updateData.status !== 'undefined') {
                updateData.status = updateData.status === true || updateData.status === 1 ? 1 : 0;
            }
            const result = await DatabaseManager.updateRecord(
                payload.storeName,
                payload.whereClause,
                updateData
            );
            self.postMessage({ success: true });

        } catch (error) {
            console.error("UPDATE_STAGE failed:", {
                storeName: payload?.storeName,
                error: error.message
            });
            self.postMessage({ success: false, error: error.message });
        }
    },

    async syncLocalChanges() {
        try {
            const unsavedStages = await DatabaseManager.getOfflineData(
                self.UNSAVED_STORE_NAME,
                { whereClause: { sync_status: 'pending' } }
            );

            if (!unsavedStages || unsavedStages.length === 0) {
                self.postMessage({
                    success: true,
                    message: "No unsaved stages to sync",
                    syncedCount: 0
                });
                return;
            }

            const results = [];
            let syncedCount = 0;

            for (const stage of unsavedStages) {
                try {
                    // Prepare clean payload without internal fields
                    const { id, sync_status, ...cleanStage } = stage;

                    const response = await ApiService.postData("stages", cleanStage);

                    if (response?.id) {
                        // Add to synced store
                        await DatabaseManager.addData(self.STORE_NAME, {
                            ...response,
                            sync_status: 'synced',
                            updated_at: new Date().toISOString()
                        });

                        // Remove from unsaved
                        await DatabaseManager.deleteRecord(self.UNSAVED_STORE_NAME, stage.id);
                        syncedCount++;

                        results.push({
                            oldId: stage.id,
                            newId: response.id,
                            success: true
                        });
                    } else {
                        throw new Error("Invalid server response");
                    }
                } catch (error) {
                    await DatabaseManager.updateRecord(
                        self.UNSAVED_STORE_NAME,
                        { id: stage.id },
                        {
                            sync_status: 'failed',
                            error: error.message,
                            updated_at: new Date().toISOString()
                        }
                    );
                    results.push({
                        id: stage.id,
                        success: false,
                        error: error.message
                    });
                }
            }

            self.postMessage({
                success: true,
                syncedCount,
                failedCount: unsavedStages.length - syncedCount,
                results
            });
        } catch (error) {
            console.error("SYNC_UNSAVED_STAGES failed:", error);
            self.postMessage({
                success: false,
                error: error.message,
                syncedCount: 0
            });
        }
    },

    async syncOfflineStages() {
        try {
            const unsavedStages = await DatabaseManager.getOfflineData("unsavedStages", { sync_status: "pending" });

            if (!unsavedStages || unsavedStages.length === 0) {
                self.postMessage({
                    success: true,
                    message: "No unsaved stages to sync",
                    syncedCount: 0
                });
                return;
            }

            const results = [];
            let syncedCount = 0;

            for (const stage of unsavedStages) {
                try {
                    const { id, sync_status, ...cleanStage } = stage;
                    cleanStage.patient_id = cleanStage.patientId;
                    cleanStage.visit_id = 0

                    const payload = {
                        stage: {
                          ...cleanStage,
                        },
                    };
                      
                    const data = await  ApiService.post("stages", payload);

                    if (data?.stage) {
                        // Add to synced store
                        await DatabaseManager.overrideRecordExplicit('stages', data.stage, data.stage.patient_id);

                        await DatabaseManager.updateRecord(
                            "unsavedStages",
                            { patientId: data.stage.patient_id },
                            {
                                sync_status: "synced",
                            }
                        );

                        // Remove from unsaved
                        await DatabaseManager.deleteRecordExplicit("unsavedStages", data.stage.patient_id);
                        syncedCount++;

                        results.push({
                            oldId: stage.id,
                            newId: response.id,
                            success: true
                        });
                    } else {
                        throw new Error("Invalid server response");
                    }
                } catch (error) {
                    results.push({
                        id: stage.id,
                        success: false,
                        error: error.message
                    });
                }
            }

            self.postMessage({
                success: true,
                syncedCount,
                failedCount: unsavedStages.length - syncedCount,
                results
            });
        } catch (error) {
            console.error("SYNC_UNSAVED_STAGES failed:", error);
            self.postMessage({
                success: false,
                error: error.message,
                syncedCount: 0
            });
        }
    }
};