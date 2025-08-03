const visitsService = {
    async setOfflineVisits() {
        try {
            // Get existing visits from both synced and unsynced stores
            const existingVisits = await DatabaseManager.getOfflineData("visits");
            const existingUnsynced = await DatabaseManager.getOfflineData("unsavedVisits", {
                whereClause: { sync_status: "pending" },
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
                    status: "active",
                    program_id: PROGRAMID,
                });
            }

            // Normalize server response
            let serverVisits = [];
            if (Array.isArray(response)) {
                serverVisits = response;
            } else if (response && typeof response === "object") {
                serverVisits = [response];
            }

            // Mark server records as synced
            const syncedVisits = serverVisits.map((visit) => ({
                ...visit,
                sync_status: "synced",
                updated_at: new Date().toISOString(),
            }));

            // Combine synced server visits with active unsynced visits
            const unsyncedVisits = existingUnsynced?.filter((v) => v.status === 1) || [];
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
                    unsynced: unsyncedVisits,
                };
            }

            // Fallback to existing local data if no new records found
            return {
                synced: existingVisits || [],
                unsynced: existingUnsynced || [],
            };
        } catch (error) {
            console.error("[Visits] Error setting offline visits:", error);
            throw error;
        }
    },

    async updateVisit(whereClause, updateData, storeName) {
        try {
            // Validate input
            if (!whereClause || !updateData || !storeName) {
                throw new Error("Missing required parameters");
            }
            // Ensure valid store name
            const validStores = ["visits", "unsavedVisits"];
            if (!validStores.includes(storeName)) {
                throw new Error(`Invalid store name. Valid stores: ${validStores.join(", ")}`);
            }
            // Prepare update data
            const normalizedUpdate = {
                ...updateData,
                updated_at: new Date().toISOString(),
            };
            // Perform update
            await DatabaseManager.updateRecord(storeName, whereClause, normalizedUpdate);

            return true;
        } catch (error) {
            console.error("Failed to update visit:", error);
            throw error;
        }
    },

    async submitUnsavedVisitis() {
        try {
            const unsavedVisits = await DatabaseManager.getOfflineData("unsavedVisits", { sync_status: "pending" });

            if (!unsavedVisits || unsavedVisits.length === 0) {
                self.postMessage({
                    success: true,
                    message: "No unsaved visits to sync",
                    syncedCount: 0,
                });
                return;
            }

            const results = [];
            let syncedCount = 0;

            for (const visit of unsavedVisits) {
                try {
                    const data = await ApiService.post("/visits", visit);

                    if (data) {
                        DatabaseManager.deleteRecord("unsavedVisits", { identifier: data.visit.identifier });
                        DatabaseManager.deleteRecord("visits", { identifier: data.visit.identifier });
                        DatabaseManager.addData("visits", data.visit);

                        syncedCount++;

                        results.push({
                            oldId: data.visit.id,
                            success: true,
                        });
                    } else {
                        throw new Error("Invalid server response");
                    }
                } catch (error) {
                    console.error("Error syncing visit:", visit, error.message);
                    results.push({
                        id: visit.identifier,
                        success: false,
                        error: error.message,
                    });
                }
            }

            self.postMessage({
                success: true,
                syncedCount,
                failedCount: unsavedVisits.length - syncedCount,
                results,
            });
        } catch (error) {
            console.error("SYNC_UNSAVED_VISITS failed:", error);
            self.postMessage({
                success: false,
                error: error.message,
                syncedCount: 0,
            });
        }
    },
};
