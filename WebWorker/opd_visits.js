const visitsService = {
    async setOfflineVisits() {
        try {
            // Get existing visits from both synced and unsynced stores
            const existingVisits = await DatabaseManager.getOfflineData("visits");
            const existingUnsynced = await DatabaseManager.getOfflineData("unsavedVisits", {
                whereClause: { sync_status: 'pending' }
            });

            let response = null;

            if (USEMODS == "true") {
                const BASE_URL = await getConnectonString();
                const _response_ = await fetch(`${BASE_URL}/visits`);
                    if (!_response_.ok) {
                        throw new Error(`HTTP error! status: ${_response_.status}`);
                    }
                response = await _response_.json();
            } else {
                // Fetch today's visits from the server
                response = await ApiService.getData("visits", {
                    location_id: LOCATIONID,
                    program_id: PROGRAMID,
                    date: new Date().toISOString().split('T')[0]
                });
            }

            // Normalize server response
            let serverVisits = [];
            if (Array.isArray(response)) {
                serverVisits = response;
            } else if (response && typeof response === 'object') {
                serverVisits = [response];
            }

            // Mark server records as synced
            const syncedVisits = serverVisits.map(visit => ({
                ...visit,
                sync_status: 'synced',
                updated_at: new Date().toISOString()
            }));

            // Combine synced server visits with active unsynced visits
            const unsyncedVisits = existingUnsynced?.filter(v => v.status === 1) || [];
            const combinedVisits = [...syncedVisits, ...unsyncedVisits];

            if (combinedVisits.length > 0) {
                // Overwrite synced store
                await DatabaseManager.overRideCollection("visits", syncedVisits);
                console.log("[Visits] Synced data saved to IndexedDB");

                // Optionally update unsaved store if unsynced records exist
                if (unsyncedVisits.length > 0) {
                    await DatabaseManager.overRideCollection("unsavedVisits", unsyncedVisits);
                }

                return {
                    synced: syncedVisits,
                    unsynced: unsyncedVisits
                };
            }

            // Fallback to existing local data if no new records found
            return {
                synced: existingVisits || [],
                unsynced: existingUnsynced || []
            };

        } catch (error) {
            console.error("[Visits] Error setting offline visits:", error);
            throw error;
        }
    },

    createVisit() {

    },

    updateVisit() {

    },
    async syncLocalChanges() {
        try {
            const unsavedVisits = await DatabaseManager.getOfflineData("unsavedVisits", {
                whereClause: { sync_status: 'pending' }
            });

            if (!unsavedVisits || unsavedVisits.length === 0) {
                return { success: true, synced: 0 };
            }

            let syncedCount = 0;
            const results = [];

            for (const visit of unsavedVisits) {
                try {
                    const response = await ApiService.postData("visits", visit);

                    if (response?.id) {
                        // Add to synced store
                        await DatabaseManager.addData("visits", {
                            ...response,
                            sync_status: 'synced'
                        });

                        // Remove from unsynced store
                        await DatabaseManager.deleteRecord("unsavedVisits", visit.id);
                        syncedCount++;

                        results.push({
                            id: visit.id,
                            success: true,
                            newId: response.id
                        });
                    } else {
                        // Server returned an invalid response
                        await DatabaseManager.updateRecord(
                            "unsavedVisits",
                            { id: visit.id },
                            {
                                sync_status: 'failed',
                                error: "Invalid server response",
                                updated_at: new Date().toISOString()
                            }
                        );
                        results.push({
                            id: visit.id,
                            success: false,
                            error: "Invalid server response"
                        });
                    }
                } catch (error) {
                    // On failure, mark record as failed
                    await DatabaseManager.updateRecord(
                        "unsavedVisits",
                        { id: visit.id },
                        {
                            sync_status: 'failed',
                            error: error.message,
                            updated_at: new Date().toISOString()
                        }
                    );
                    results.push({
                        id: visit.id,
                        success: false,
                        error: error.message
                    });
                }
            }

            return {
                success: true,
                synced: syncedCount,
                failed: unsavedVisits.length - syncedCount,
                results
            };

        } catch (error) {
            console.error("[Visits] Error syncing local changes:", error);
            return {
                success: false,
                error: error.message
            };
        }
    },

    async submitUnsavedVisitis() {
        try {     
            const unsavedVisits = await DatabaseManager.getOfflineData("unsavedVisits", { sync_status: "pending" });

            if (!unsavedVisits || unsavedVisits.length === 0) {
                self.postMessage({
                    success: true,
                    message: "No unsaved visits to sync",
                    syncedCount: 0
                });
                return;
            }

            const results = [];
            let syncedCount = 0;

            for (const visit of unsavedVisits) {
                try {
                    const { id, sync_status, ...cleanVisit } = visit;
                    const data = await  ApiService.post("/visits", cleanVisit);

                    if (data) {
                        data.visit.sync_status = 'synced';
                        await DatabaseManager.overrideRecordExplicit('visits', data.visit, data.visit.patientId);

                        await DatabaseManager.updateRecord(
                            "unsavedVisits",
                            { patientId: data.visit.patientId },
                            {
                                sync_status: "synced",
                            }
                        );

                        await DatabaseManager.deleteRecordExplicit("unsavedVisits", data.visit.patientId);
                        syncedCount++;

                        results.push({
                            oldId: data.visit.id,
                            success: true
                        });
                    } else {
                        throw new Error("Invalid server response");
                    }
                } catch (error) {
                    console.error("Error syncing visit:", visit, error.message,);
                    results.push({
                        id: visit.patientId,
                        success: false,
                        error: error.message
                    });
                }
            }

            self.postMessage({
                success: true,
                syncedCount,
                failedCount: unsavedVisits.length - syncedCount,
                results
            });
        } catch (error) {
            console.error("SYNC_UNSAVED_VISITS failed:", error);
            self.postMessage({
                success: false,
                error: error.message,
                syncedCount: 0
            });
        }
    }
};
