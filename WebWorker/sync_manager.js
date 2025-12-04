importScripts(
    "./sync_management/sync-config.js",
    "./sync_management/sync-utils.js",
    "./sync_management/initial-sync-manager.js",
    "./sync_management/live-sync-manager.js",
    "./sync_management/periodic-sync-manager.js",
    "./sync_management/dde-manager.js"
);
/**
 * Main SyncManager - coordinates all sync operations
 */
const SyncManager = {
    isInitialized: false,
    locationFilterManager: null,
    initialSyncManager: null,
    liveSyncManager: null,
    periodicSyncManager: null,

    init() {
        if (this.isInitialized) return;

        if (typeof DatabaseManager === "undefined") {
            throw new Error("DatabaseManager is required. Make sure it's loaded before SyncManager.");
        }

        this.isInitialized = true;
        console.log("[SYNC] SyncManager initialized successfully");
    },

    getLocationSelector(dbName) {
        const filterByLocation = databaseConfig.locationFilters[dbName];
        if (!filterByLocation) return null;

        return {
            location_id: LOCATION_ID,
        };
    },

    // Main sync orchestration
    async syncAll(remoteBaseUrl, options = {}) {
        if (!DatabaseManager.isInitialized) {
            throw new Error("DatabaseManager not initialized. Call DatabaseManager.init() first.");
        }

        console.log("[SYNC] Starting optimized parallel sync for all databases...");

        const stats = await DatabaseManager.getStats(remoteBaseUrl, options);
        console.log("🚀 ~ syncAll ~ stats:=======", stats);

        // ================================
        // 1. LIVE SYNC DATABASES
        // ================================

        const livePromises = databaseConfig.liveSyncDatabases.map(async (dbName) => {
            try {
                // Initial sync in parallel
                await InitialSyncManager.performInitialSync(dbName, remoteBaseUrl, options);

                // Start live sync immediately when that DB is ready
                LiveSyncManager.startLiveSync(dbName, remoteBaseUrl, options);

                console.log(`[SYNC] Live sync active for ${dbName}`);
            } catch (error) {
                console.error(`[SYNC] Live database failed to sync ${dbName}:`, error);
            }
        });

        // ================================
        // 2. PERIODIC SYNC DATABASES
        // ================================

        const periodicPromises = databaseConfig.periodicSyncDatabases.map(async (dbName) => {
            try {
                if (dbName === "dde") {
                    const deviceId = options.deviceId || `device_not_provided`;
                    if (!USE_LAN_CONNECTION) {
                        await DdeManager.claimDdeIds(remoteBaseUrl, options, deviceId, 10);
                    }
                    return;
                }

                // Initial sync in parallel
                await InitialSyncManager.performInitialSync(dbName, remoteBaseUrl, options);

                // Start periodic sync
                PeriodicSyncManager.setupPeriodicSync(dbName, remoteBaseUrl, options);

                console.log(`[SYNC] Periodic sync active for ${dbName}`);
            } catch (error) {
                console.error(`[SYNC] Failed to sync periodic database ${dbName}:`, error);
            }
        });

        // Start ALL live DB initial syncs simultaneously
        await Promise.all(livePromises);
        // Only wait for periodic sync setup, not live sync
        await Promise.all(periodicPromises);

        console.log("[SYNC] Parallel sync initialization complete", {
            liveSyncDatabases: databaseConfig.liveSyncDatabases.length,
            periodicSyncDatabases: databaseConfig.periodicSyncDatabases.length,
        });
    },
    // Stop sync methods
    stopSync(dbName) {
        let stopped = false;

        stopped = LiveSyncManager.stopLiveSync(dbName) || stopped;
        stopped = PeriodicSyncManager.stopPeriodicSync(dbName) || stopped;

        if (stopped) {
            InitialSyncManager.resetInitialSyncStatus(dbName);
        }

        return stopped;
    },

    stopAllSync() {
        LiveSyncManager.stopAllLiveSync();
        PeriodicSyncManager.stopAllPeriodicSync();
        console.log("[SYNC] All sync processes stopped");
    },

    // Status methods
    getSyncStatus() {
        const status = {};
        for (const dbName of DatabaseManager.databaseNames) {
            status[dbName] = {
                syncType: DatabaseManager.isLiveSyncDatabase(dbName) ? "live" : "periodic",
                isLiveSyncActive: LiveSyncManager.isLiveSyncActive(dbName),
                isPeriodicSyncActive: PeriodicSyncManager.isPeriodicSyncActive(dbName),
                initialSyncComplete: InitialSyncManager.isInitialSyncComplete(dbName),
                handler: LiveSyncManager.isLiveSyncActive(dbName)
                    ? "live-active"
                    : PeriodicSyncManager.isPeriodicSyncActive(dbName)
                    ? "periodic-active"
                    : "inactive",
            };
        }
        return status;
    },
};
