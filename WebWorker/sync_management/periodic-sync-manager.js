/**
 * Handles periodic sync operations
 */
const PeriodicSyncManager = {
    periodicSyncIntervals: {},

    async setupPeriodicSync(dbName, remoteUrl, options = {}) {
        if (typeof self.PouchDB === "undefined") {
            throw new Error("PouchDB is not available");
        }

        if (!DatabaseManager.isPeriodicSyncDatabase(dbName)) {
            console.log(`[SYNC] Skipping periodic sync for ${dbName} - not configured for periodic sync`);
            return;
        }

        if (this.periodicSyncIntervals[dbName]) {
            clearInterval(this.periodicSyncIntervals[dbName]);
        }

        const selector = SyncManager.getLocationSelector(dbName);

        const performSync = async () => {
            try {
                const localDB = DatabaseManager.getDatabaseInstance(dbName);
                const remoteDB = new self.PouchDB(`${remoteUrl}/${dbName}`, {
                    auth: options,
                    ajax: {
                        timeout: SYNC_CONFIG.TIMEOUTS.LIVE_SYNC,
                        cache: false,
                    },
                });

                const syncOptions = {
                    batch_size: SYNC_BATCH_SIZE,
                    batches_limit: 10,
                    timeout: SYNC_CONFIG.TIMEOUTS.PERIODIC_SYNC,
                    retry: false,
                };

                if (selector) {
                    syncOptions.pull = { selector };
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

                self.postMessage({
                    type: "periodicSyncComplete",
                    dbName: dbName,
                    result: result,
                    timestamp: new Date().toISOString(),
                });
            } catch (error) {
                console.error(`[PERIODIC-SYNC] Sync failed for ${dbName}:`, error);
            }
        };

        const intervalId = setInterval(performSync, SYNC_CONFIG.INTERVALS.PERIODIC_SYNC);
        this.periodicSyncIntervals[dbName] = intervalId;
    },

    stopPeriodicSync(dbName) {
        if (this.periodicSyncIntervals[dbName]) {
            clearInterval(this.periodicSyncIntervals[dbName]);
            delete this.periodicSyncIntervals[dbName];
            console.log(`[SYNC] Stopped periodic sync for ${dbName}`);
            return true;
        }
        return false;
    },

    stopAllPeriodicSync() {
        for (const dbName of Object.keys(this.periodicSyncIntervals)) {
            this.stopPeriodicSync(dbName);
        }
    },

    isPeriodicSyncActive(dbName) {
        return !!this.periodicSyncIntervals[dbName];
    },
};
