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

    async addVisit(data, storeName = 'unsavedVisits') {
        try {
            // Validate input
            if (!data || !storeName) {
                throw new Error("Missing required parameters");
            }

            // Ensure valid store name
            const validStores = ['visits', 'unsavedVisits'];
            if (!validStores.includes(storeName)) {
                throw new Error(`Invalid store name. Valid stores: ${validStores.join(', ')}`);
            }

            // Check required fields
            const requiredFields = ['patientId', 'startDate', 'location_id'];
            const missingFields = requiredFields.filter(field => data[field] === undefined);
            if (missingFields.length > 0) {
                throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
            }

            // Normalize data
            const normalizedData = {
                patientId: Number(data.patientId),
                startDate: data.startDate || new Date().toISOString(),
                closedDateTime: data.closedDateTime || null,
                location_id: String(data.location_id),
                programId: data.programId || null,
                sync_status: 'pending',
                updated_at: new Date().toISOString()
            };

            // Save to database
            await DatabaseManager.overrideRecordExplicit(storeName, normalizedData, normalizedData.patientId);
            return true;
        } catch (error) {
            console.error("Failed to add visit:", error);
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
            const validStores = ['visits', 'unsavedVisits'];
            if (!validStores.includes(storeName)) {
                throw new Error(`Invalid store name. Valid stores: ${validStores.join(', ')}`);
            }
            // Prepare update data
            const normalizedUpdate = {
                ...updateData,
                updated_at: new Date().toISOString()
            };
            // Perform update
            await DatabaseManager.updateRecord(
                storeName,
                whereClause,
                normalizedUpdate
            );

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
