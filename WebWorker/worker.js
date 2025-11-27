// Updated worker.js with separated DatabaseManager and SyncManager
importScripts("db.js", "sync_manager.js", "../databaseConfig.js");

// Global vars
let LOCATION_ID = "";
let USE_LOCAL_STORAGE = "";
let USE_LAN_CONNECTION = "";
let SYNC_BATCH_SIZE = "";

// Enhanced Web Worker Message Handler
self.onmessage = async (event) => {
    const { command, location_id, remoteUrl, auth, storeName, data, useLocalStorage, useLanConnection, sync_batch_size } = event.data;

    LOCATION_ID = location_id;
    USE_LOCAL_STORAGE = useLocalStorage;
    USE_LAN_CONNECTION = useLanConnection;
    SYNC_BATCH_SIZE = sync_batch_size;

    // Helper function to send response
    const sendResponse = (response) => {
        self.postMessage({
            ...response,
            command,
            storeName,
        });
    };

    try {
        // Ensure DatabaseManager is initialized
        if (!DatabaseManager.isInitialized) {
            // Check PouchDB availability before trying to initialize
            if (typeof self.PouchDB === "undefined") {
                throw new Error("PouchDB is not available in worker context");
            }

            await DatabaseManager.init(remoteUrl, useLocalStorage, auth);
        }
        let result;

        switch (command) {
            case "upsertDocument":
                result = await DatabaseManager.upsertDocument(storeName, data, auth);
                if (!USE_LOCAL_STORAGE) await DatabaseManager.getStats(remoteUrl, auth, storeName);
                break;

            case "get":
                result = await DatabaseManager.get(storeName, data || {});
                break;

            case "deleteData":
                result = await DatabaseManager.deleteData(storeName, data);
                break;

            case "getCount":
                result = await DatabaseManager.getCount(storeName, data);
                break;

            case "bulkOperation":
                const { docs, operation = "insert" } = data;
                result = await DatabaseManager.bulkOperation(storeName, docs, operation);
                break;

            case "getStats":
                result = await DatabaseManager.getStats(remoteUrl, auth);
                break;

            case "closeAllDatabases":
                // Stop all sync processes first
                SyncManager.stopAllSync();
                // Then close databases
                await DatabaseManager.closeAllDatabases();
                result = { success: true, message: "All sync processes stopped and databases closed" };
                break;

            case "ping":
                result = {
                    initialized: {
                        database: DatabaseManager.isInitialized,
                        sync: SyncManager.isInitialized,
                    },
                    timestamp: new Date().toISOString(),
                    syncStatus: SyncManager.getSyncStatus(),
                };
                break;

            case "startSync":
                if (remoteUrl) {
                    try {
                        if (useLocalStorage) {
                            // Stop sync processes
                            SyncManager.stopAllSync();
                            // Close and reinitialize databases
                            await DatabaseManager.closeAllDatabases();
                        }

                        await DatabaseManager.init(remoteUrl, useLocalStorage, auth);
                        // Reinitialize sync manager
                        if (useLocalStorage) {
                            SyncManager.init();
                            await SyncManager.syncAll(remoteUrl, auth);
                        } else {
                            for (const dbName of databaseConfig.liveSyncDatabases) {
                                LiveSyncManager.listenToRemoteChanges(dbName, remoteUrl, auth);
                            }
                        }

                        await DatabaseManager.getStats(remoteUrl, auth);
                        result = {
                            success: true,
                            message: "Selective sync started for all databases",
                            syncConfiguration: {
                                liveSyncDatabases: databaseConfig.liveSyncDatabases,
                                periodicSyncDatabases: databaseConfig.periodicSyncDatabases,
                                periodicInterval: "30 minutes",
                            },
                            // syncStatus: SyncManager.getSyncStatus(),
                        };
                    } catch (error) {
                        throw new Error(`Failed to start sync: ${error.message}`);
                    }
                } else {
                    throw new Error("remoteUrl is required to start synchronization.");
                }
                break;

            case "stopSync":
                if (storeName) {
                    const stopped = SyncManager.stopSync(storeName);
                    result = {
                        success: stopped,
                        message: stopped ? `Sync stopped for ${storeName}` : `No active sync found for ${storeName}`,
                        syncType: DatabaseManager.isLiveSyncDatabase(storeName) ? "live" : "periodic",
                    };
                } else {
                    SyncManager.stopAllSync();
                    result = { success: true, message: "All sync processes stopped" };
                }
                break;

            case "testConnection":
                if (remoteUrl) {
                    try {
                        // Test connection to a specific database
                        const testDb = storeName;
                        const remoteDB = new self.PouchDB(`${remoteUrl}/${testDb}`, {
                            auth: auth || undefined,
                            ajax: { timeout: 10000 },
                        });
                        const info = await remoteDB.info();
                        result = {
                            success: true,
                            message: `Connection successful to ${testDb}`,
                            info: info,
                            syncType: DatabaseManager.isLiveSyncDatabase(testDb) ? "live" : "periodic",
                        };
                    } catch (error) {
                        throw new Error(`Connection test failed: ${error.message}`);
                    }
                } else {
                    throw new Error("remoteUrl is required for connection test");
                }
                break;

            case "getSyncConfiguration":
                result = {
                    liveSyncDatabases: databaseConfig.liveSyncDatabases,
                    periodicSyncDatabases: databaseConfig.periodicSyncDatabases,
                    periodicInterval: "30 minutes",
                    totalDatabases: DatabaseManager.databaseNames.length,
                };
                break;

            default:
                sendResponse({
                    error: `Unknown command: ${command}. Available commands: upsertDocument, get, deleteData, getCount, bulkOperation, getStats, closeAllDatabases, ping, reinitialize, startSync, stopSync, getSyncStatus, testConnection, getSyncConfiguration`,
                });
                return;
        }

        sendResponse({
            success: true,
            result,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error(`Error executing command ${command}:`, error);

        sendResponse({
            error: error.message,
            errorType: error.name || "Error",
            stack: error.stack,
            timestamp: new Date().toISOString(),
        });
    }
};

// Handle worker errors
self.onerror = (error) => {
    console.error("Worker error:", error);
    self.postMessage({
        error: "Worker error occurred",
        details: error.message,
        filename: error.filename,
        lineno: error.lineno,
        timestamp: new Date().toISOString(),
    });
};

// Handle unhandled promise rejections
self.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection in worker:", event.reason);
    self.postMessage({
        error: "Unhandled promise rejection",
        details: event.reason?.message || event.reason,
        timestamp: new Date().toISOString(),
    });
});
