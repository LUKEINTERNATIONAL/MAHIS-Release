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

        console.log("[SYNC] Starting sequential sync for all databases...");
        const stats = await DatabaseManager.getStats(remoteBaseUrl, options);
        console.log("🚀 ~ syncAll ~ stats:=======", stats);

        // First, sync live sync databases with initial + live sync
        for (const dbName of databaseConfig.liveSyncDatabases) {
            try {
                // Step 1: Initial sync to get existing documents
                await InitialSyncManager.performInitialSync(dbName, remoteBaseUrl, options);

                // Step 2: Start live sync
                await LiveSyncManager.startLiveSync(dbName, remoteBaseUrl, options);

                // Small delay between databases
                await new Promise((resolve) => setTimeout(resolve, 500));
            } catch (error) {
                console.error(`[SYNC] Failed to sync live database ${dbName}:`, error);
            }
        }

        // Wait a bit before starting periodic databases
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Then, sync periodic databases with initial sync + periodic setup
        for (const dbName of databaseConfig.periodicSyncDatabases) {
            try {
                if (dbName === "dde") {
                    console.log(`[SYNC] Processing DDE database with ID claiming...`);
                    // Generate a unique device ID if not provided
                    const deviceId = options.deviceId || `device_not_provided`;
                    if (!USE_LAN_CONNECTION) await DdeManager.claimDdeIds(remoteBaseUrl, options, deviceId, 10); // Always maintain 10 IDs
                } else {
                    // Step 1: Initial sync to get existing documents
                    await InitialSyncManager.performInitialSync(dbName, remoteBaseUrl, options);

                    // Step 2: Setup periodic sync
                    await PeriodicSyncManager.setupPeriodicSync(dbName, remoteBaseUrl, options);
                }

                // Longer delay for periodic databases
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } catch (error) {
                console.error(`[SYNC] Failed to sync periodic database ${dbName}:`, error);
            }
        }

        console.log("[SYNC] Sequential sync initialization complete", {
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
