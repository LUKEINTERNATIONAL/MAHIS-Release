/**
 * Handles live sync operations
 */
const LiveSyncManager = {
    syncHandlers: {},

    async startLiveSync(dbName, remoteUrl, options = {}) {
        if (typeof self.PouchDB === "undefined") {
            throw new Error("PouchDB is not available");
        }

        if (!DatabaseManager.isLiveSyncDatabase(dbName)) {
            console.log(`[SYNC] Skipping live sync for ${dbName} - not configured for live sync`);
            return;
        }

        if (this.syncHandlers[dbName]) {
            this.syncHandlers[dbName].cancel();
            delete this.syncHandlers[dbName];
        }

        const localDB = DatabaseManager.getDatabaseInstance(dbName);
        const remoteDB = new self.PouchDB(`${remoteUrl}/${dbName}`, {
            auth: options,
            ajax: {
                timeout: SYNC_CONFIG.TIMEOUTS.LIVE_SYNC,
                cache: false,
            },
        });

        const syncOptions = {
            live: true,
            retry: true,
            heartbeat: SYNC_CONFIG.INTERVALS.HEARTBEAT,
            timeout: SYNC_CONFIG.TIMEOUTS.DEFAULT,
            batch_size: SYNC_BATCH_SIZE,
            batches_limit: 5,
            back_off_function: (delay) => {
                if (delay === 0) return 5000;
                return Math.min(delay * 2, 30000);
            },
        };

        const selector = SyncManager.getLocationSelector(dbName);
        if (selector) {
            syncOptions.pull = { selector };
            console.log(`[LIVE-SYNC] Using location filter for ${dbName}: ${selector.location_id}`);
        }

        const handler = localDB
            .sync(remoteDB, syncOptions)
            .on("change", async (info) => {
                console.log(`[LIVE-SYNC] ${dbName} change: ${info.direction} - docs: ${info.change?.docs_written || 0}`);
                await DatabaseManager.getStats(remoteUrl, options, dbName);
                self.postMessage({
                    type: "syncChange",
                    dbName: dbName,
                    info: info,
                    timestamp: new Date().toISOString(),
                });
            })
            .on("paused", async (err) => {
                await DatabaseManager.runBackgroundCompaction(dbName);
                if (err) {
                    console.warn(`[LIVE-SYNC] ${dbName} paused due to error:`, err);
                } else {
                    console.log(`[LIVE-SYNC] ${dbName} paused (up to date)`);
                }
            })
            .on("active", async () => {
                console.log(`[LIVE-SYNC] ${dbName} resumed`);
                await DatabaseManager.getStats(remoteUrl, options, dbName);
                self.postMessage({
                    type: "liveSyncActive",
                    dbName: dbName,
                    timestamp: new Date().toISOString(),
                });
            })
            .on("denied", (err) => {
                console.error(`[LIVE-SYNC] ${dbName} access denied:`, err);
            })
            .on("complete", (info) => {
                console.log(`[LIVE-SYNC] ${dbName} sync complete:`, info);
                delete this.syncHandlers[dbName];
            })
            .on("error", (err) => {
                console.error(`[LIVE-SYNC] ${dbName} sync error:`, err);
            });

        this.syncHandlers[dbName] = handler;
    },

    stopLiveSync(dbName) {
        if (this.syncHandlers[dbName]) {
            this.syncHandlers[dbName].cancel();
            this.syncHandlers[dbName].destroy();
            delete this.syncHandlers[dbName];
            console.log(`[SYNC] Stopped live sync for ${dbName}`);
            return true;
        }
        return false;
    },

    stopAllLiveSync() {
        for (const dbName of Object.keys(this.syncHandlers)) {
            this.stopLiveSync(dbName);
        }
    },

    isLiveSyncActive(dbName) {
        return !!this.syncHandlers[dbName];
    },

    listenToRemoteChanges(dbName, remoteUrl, options = {}) {
        const remoteDB = new self.PouchDB(`${remoteUrl}/${dbName}`, {
            auth: options,
            ajax: { timeout: 60000, cache: false },
        });
        if (this.syncHandlers[dbName]) {
            this.syncHandlers[dbName].cancel();
            delete this.syncHandlers[dbName];
        }
        const handler = remoteDB
            .changes({
                live: true, // keep listening
                since: "now", // start from current state
                include_docs: true, // include the changed docs
                heartbeat: 30000, // keep the connection alive
            })
            .on("change", async (change) => {
                console.log(`[REMOTE-CHANGE] ${dbName}:`, change);
                await DatabaseManager.getStats(remoteUrl, options);
                self.postMessage({
                    type: "remoteSyncChange",
                    dbName: dbName,
                    timestamp: new Date().toISOString(),
                });
            })
            .on("error", (err) => {
                console.error(`[REMOTE-CHANGE] ${dbName} error:`, err);
            });

        this.syncHandlers[dbName] = handler;
    },
};
