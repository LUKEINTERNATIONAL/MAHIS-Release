/**
 * Sync utility functions
 */
const SyncUtils = {
    async clearSyncCheckpoints(localDB, dbName) {
        try {
            const allDocs = await localDB.allDocs({
                startkey: "_local/",
                endkey: "_local0",
                include_docs: true,
            });

            const checkpointDocs = allDocs.rows.filter((row) => row.id.includes("_local/")).map((row) => ({ ...row.doc, _deleted: true }));

            if (checkpointDocs.length > 0) {
                await localDB.bulkDocs(checkpointDocs);
                console.log(`[SYNC] Cleared ${checkpointDocs.length} checkpoint docs for ${dbName}`);
            }
        } catch (error) {
            console.warn(`[SYNC] Failed to clear checkpoints for ${dbName}:`, error);
        }
    },

    async ensureDatabaseExists(remoteUrl, dbName, options = {}) {
        try {
            const remoteDB = new self.PouchDB(`${remoteUrl}/${dbName}`, {
                auth: options,
                ajax: { timeout: 30000 },
            });

            await remoteDB.info();
            console.log(`[SYNC] Database ${dbName} exists or was created on remote server`);

            const localDB = DatabaseManager.getDatabaseInstance(dbName);
            const localInfo = await localDB.info();
            console.log(`[SYNC] Local database ${dbName} verified - docs: ${localInfo.doc_count}`);

            return remoteDB;
        } catch (error) {
            console.error(`[SYNC] Failed to ensure database ${dbName} exists:`, error);
            throw error;
        }
    },
};
