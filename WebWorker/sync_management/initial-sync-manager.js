/**
 * Handles initial one-time sync operations
 */
const InitialSyncManager = {
    initialSyncComplete: {},

    async performInitialSync(dbName, remoteUrl, options = {}) {
        if (typeof self.PouchDB === "undefined") {
            throw new Error("PouchDB is not available");
        }

        const localDB = DatabaseManager.getDatabaseInstance(dbName);
        const remoteDB = new self.PouchDB(`${remoteUrl}/${dbName}`, {
            auth: options,
            ajax: {
                timeout: SYNC_CONFIG.TIMEOUTS.INITIAL_SYNC,
                cache: false,
            },
        });

        try {
            const selector = SyncManager.getLocationSelector(dbName);

            // await SyncUtils.clearSyncCheckpoints(localDB, dbName);

            console.log("🚀 ~ performInitialSync ~ SYNC_BATCH_SIZE:", SYNC_BATCH_SIZE);
            const syncOptions = {
                batch_size: SYNC_BATCH_SIZE,
                batches_limit: 20,
                timeout: SYNC_CONFIG.TIMEOUTS.DEFAULT,
                live: false,
                retry: true,
                auto_compaction: true,
            };

            if (selector) {
                syncOptions.selector = {
                    $or: [selector, { _deleted: true }],
                };
                console.log(`[SYNC] Using location filter for ${dbName}: ${selector.location_id}`);
            }

            const result = await localDB.sync(remoteDB, syncOptions).on("change", async (info) => {
                await DatabaseManager.getStats(remoteUrl, options, dbName);
                self.postMessage({
                    type: "syncChange",
                    dbName: dbName,
                    info: info,
                    timestamp: new Date().toISOString(),
                });
            });

            console.log(`[SYNC] Initial sync complete for ${dbName}:`, {
                push: result.push?.docs_written || 0,
                pull: result.pull?.docs_written || 0,
                locationFilter: selector ? selector.location_id : "none",
            });

            this.initialSyncComplete[dbName] = true;
            return result;
        } catch (error) {
            console.error(`[SYNC] Initial sync failed for ${dbName}:`, error);
            throw error;
        }
    },

    isInitialSyncComplete(dbName) {
        return this.initialSyncComplete[dbName] || false;
    },

    resetInitialSyncStatus(dbName) {
        this.initialSyncComplete[dbName] = false;
    },
};
