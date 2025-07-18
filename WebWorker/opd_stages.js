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

    async addStage(data, storeName = UNSAVED_STORE_NAME) {
        try {
            // Validate input
            if (!data || !storeName) {
                throw new Error("Missing required parameters");
            }

            // Ensure valid store name
            const validStores = [STORE_NAME, UNSAVED_STORE_NAME];
            if (!validStores.includes(storeName)) {
                throw new Error(`Invalid store name. Valid stores: ${validStores.join(', ')}`);
            }

            // Normalize data
            const normalizedData = {
                patient_id: Number(data.patient_id),
                stage: String(data.stage),
                location_id: String(data.location_id),
                status: data.status === true || data.status === 1 ? 1 : 0,
                arrivalTime: data.arrivalTime || new Date().toISOString(),
                fullName: data.fullName || "",
                created_at: data.created_at || new Date().toISOString(),
                updated_at: new Date().toISOString(),
                sync_status: data.sync_status || 'pending'
            };

            // Add visit_id if provided
            if (typeof data.visit_id === 'number') {
                normalizedData.visit_id = data.visit_id;
            }

            // Save to database
            await DatabaseManager.overrideRecordExplicit(storeName, normalizedData, normalizedData.patient_id);
            return true;
        } catch (error) {
            console.error("Failed to add stage:", error);
            throw error;
        }
    },


    async updateStage(whereClause, updateData, storeName) {
        try {
            // Validate input
            if (!whereClause || !updateData || !storeName) {
                throw new Error("Missing required parameters");
            }

            // Ensure valid store name
            const validStores = [STORE_NAME, UNSAVED_STORE_NAME];
            if (!validStores.includes(storeName)) {
                throw new Error(`Invalid store name. Valid stores: ${validStores.join(', ')}`);
            }

            // Prepare update data
            const normalizedUpdate = {
                ...updateData,
                updated_at: new Date().toISOString(),
                sync_status: 'pending'
            };

            // Normalize status if provided
            if ('status' in normalizedUpdate) {
                normalizedUpdate.status = normalizedUpdate.status === true || normalizedUpdate.status === 1 ? 1 : 0;
            }

            // Perform update
            await DatabaseManager.updateRecord(
                storeName,
                whereClause,
                normalizedUpdate
            );

            return true;
        } catch (error) {
            console.error("Failed to update stage:", error);
            throw error;
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
                            { patient_id: data.stage.patient_id },
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