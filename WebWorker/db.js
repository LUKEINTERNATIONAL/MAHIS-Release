// Initialize PouchDB instances
importScripts("../script/pouchdb.min.js", "../script/pouchdb.find.min.js");

/**
 * Core DatabaseManager - handles database operations only
 * Sync functionality moved to separate SyncManager
 */
const DatabaseManager = {
    databases: {},
    lastRemoteStats: {},
    lastLocalStats: {},
    indexCache: new Set(),
    isInitialized: false,

    // Get all database names in order
    get databaseNames() {
        return [...databaseConfig.liveSyncDatabases, ...databaseConfig.periodicSyncDatabases];
    },

    // Check if database should use live sync
    isLiveSyncDatabase(dbName) {
        return databaseConfig.liveSyncDatabases.includes(dbName);
    },

    // Check if database should use periodic sync
    isPeriodicSyncDatabase(dbName) {
        return databaseConfig.periodicSyncDatabases.includes(dbName);
    },
    getDatabaseHandle(remoteBaseUrl, useLocalStorage, auth, name) {
        const PouchDB = self.PouchDB;
        if (useLocalStorage) {
            // Local IndexedDB (default PouchDB)
            return new PouchDB(name);
        } else {
            // Remote-only CouchDB (no IndexedDB)
            return new PouchDB(`${remoteBaseUrl}/${name}`, {
                skip_setup: false,
                auth,
            });
        }
    },
    async init(remoteBaseUrl, useLocalStorage, auth) {
        if (this.isInitialized) return;

        try {
            // Ensure PouchDB is available
            if (typeof self.PouchDB === "undefined") {
                throw new Error("PouchDB is not loaded. Make sure to import PouchDB scripts before initializing.");
            }

            for (const name of this.databaseNames) {
                const db = this.getDatabaseHandle(remoteBaseUrl, useLocalStorage, auth, name);
                this.databases[name] = db;

                // only makes sense for local stores
                if (useLocalStorage && typeof db.revsLimit === "function") {
                    await db.revsLimit(1);
                }
            }
            if (useLocalStorage) {
                // Background compaction only in local mode
                await DatabaseManager.autoCompactAll();
            }

            this.isInitialized = true;
            console.log("DatabaseManager initialized successfully", {
                liveSyncDbs: databaseConfig.liveSyncDatabases,
                periodicSyncDbs: databaseConfig.periodicSyncDatabases.length,
                totalDbs: this.databaseNames.length,
            });
        } catch (error) {
            console.error("Failed to initialize databases:", error);
            throw new Error("Database initialization failed: " + error.message);
        }
    },
    async runBackgroundCompaction() {
        console.log("[DB] Starting background compaction...");
        try {
            const dbEntries = Object.entries(this.databases);

            const compactionPromises = dbEntries.map(async ([name, db]) => {
                console.log(`[Compact] Starting compaction for ${name}...`);
                await db.compact();
                console.log(`[Compact] Successfully compacted ${name}`);
            });

            await Promise.allSettled(compactionPromises);
        } finally {
        }
    },

    validateDatabase(storeName) {
        if (!this.isInitialized) {
            throw new Error("DatabaseManager not initialized. Call init() first.");
        }
        if (!this.databases[storeName]) {
            throw new Error(`Database "${storeName}" not found. Available databases: ${Object.keys(this.databases).join(", ")}`);
        }
    },

    validateDocumentData(data) {
        if (!data || typeof data !== "object") {
            throw new Error("Document data must be a valid object");
        }
        if (!data._id) {
            throw new Error("Document must have an _id property");
        }
    },

    async ensureIndex(db, fields, storeName) {
        const indexKey = `${storeName}:${fields.sort().join(",")}`;

        if (!this.indexCache.has(indexKey)) {
            try {
                await db.createIndex({
                    index: {
                        fields: fields,
                        name: `idx_${fields.join("_")}`,
                    },
                });
                this.indexCache.add(indexKey);
            } catch (error) {
                if (!error.message.includes("exists")) {
                    console.warn(`Failed to create index for ${indexKey}:`, error);
                }
            }
        }
    },

    /**
     * Advanced record retrieval function with pagination support
     * @param {string} dbName - Database name
     * @param {Object} options - Query options
     * @param {number} options.currentPage - Current page number (default: 1)
     * @param {number} options.itemsPerPage - Items per page (0 = no pagination, default: 0)
     * @param {Object} options.selector - PouchDB selector object for filtering
     * @param {Array} options.sort - Sort array for ordering results
     * @param {Array} options.fields - Fields to return (projection)
     * @param {string} options.docType - Document type filter
     * @returns {Promise<Object|Array>} Records with pagination info or array of records
     */
    async get(dbName, options = {}) {
        try {
            this.validateDatabase(dbName);

            const { currentPage = 1, itemsPerPage = 0, selector = {}, sort, fields, docType } = options;

            // Use the already initialized database from DatabaseManager
            const db = this.databases[dbName];

            // Build final selector with docType if provided
            const finalSelector = docType ? { ...selector, $or: [{ docType }, { type: docType }] } : selector;

            // Ensure index exists for selector fields
            const selectorFields = Object.keys(finalSelector);
            if (selectorFields.length > 0) {
                await this.ensureIndex(db, selectorFields, dbName);
            }

            // Get total count for pagination
            const countResult = await db.find({
                selector: finalSelector,
                fields: ["_id"],
            });
            const totalCount = countResult.docs.length;

            // Build find options
            const findOptions = {
                selector: finalSelector,
                ...(sort && { sort }),
                ...(fields && { fields }),
            };

            // Add pagination if requested
            if (itemsPerPage !== 0) {
                findOptions.skip = (currentPage - 1) * itemsPerPage;
                findOptions.limit = itemsPerPage;
            }

            const result = await db.find(findOptions);

            // Return with pagination info or just records
            if (itemsPerPage !== 0) {
                return {
                    records: result.docs,
                    totalCount,
                    currentPage,
                    itemsPerPage,
                    totalPages: Math.ceil(totalCount / itemsPerPage),
                };
            }

            return result.docs;
        } catch (error) {
            console.error(`Error retrieving records from ${dbName}:`, error);
            throw new Error(`Failed to retrieve records from ${dbName}: ${error.message}`);
        }
    },

    async upsertDocument(storeName, data, options = {}) {
        try {
            this.validateDatabase(storeName);
            this.validateDocumentData(data);

            const db = this.databases[storeName];
            const { upsert = true } = options;

            let result;
            if (upsert) {
                try {
                    const existingDoc = await db.get(data._id);
                    const updatedDoc = { ...existingDoc, ...data, _rev: existingDoc._rev };
                    result = await db.put(updatedDoc);
                } catch (err) {
                    if (err.name === "not_found") {
                        result = await db.put(data);
                    } else {
                        throw err;
                    }
                }
            } else {
                result = await db.put(data);
            }

            return result;
        } catch (error) {
            console.error(`Error adding data to ${storeName}:`, error);
            throw new Error(`Failed to add data to ${storeName}: ${error.message}`);
        }
    },
    async deleteData(storeName, obj) {
        try {
            this.validateDatabase(storeName);

            if (!obj) {
                console.error("Document identifier is required for deletion");
                return;
            }

            const db = this.databases[storeName];

            let doc;
            if (typeof obj === "object") {
                const result = await db.find({ selector: obj });

                if (result.docs.length === 0) {
                    console.error(`Document  not found in ${storeName}`);
                    return;
                }

                doc = result.docs[0];
            } else {
                // assume it's an _id
                doc = await db.get(obj);
            }

            const deleted = await db.remove(doc);

            console.log(`[DB] Document deleted from ${storeName}`);
            return deleted;
        } catch (error) {
            if (error.name === "not_found") {
                throw new Error(`Document not found in ${storeName}`);
            }
            console.error(`Error deleting data from ${storeName}:`, error);
            throw new Error(`Failed to delete data from ${storeName}: ${error.message}`);
        }
    },

    async getCount(storeName, selector = null) {
        try {
            this.validateDatabase(storeName);
            const db = this.databases[storeName];

            if (selector) {
                const result = await db.find({
                    selector,
                    fields: ["_id"],
                    limit: Number.MAX_SAFE_INTEGER,
                });
                return result.docs.length;
            } else {
                const info = await db.info();
                return info.doc_count;
            }
        } catch (error) {
            console.error(`Error getting count from ${storeName}:`, error);
            throw new Error(`Failed to get count from ${storeName}: ${error.message}`);
        }
    },

    async bulkOperation(storeName, docs, operation = "insert") {
        try {
            this.validateDatabase(storeName);
            if (!Array.isArray(docs) || docs.length === 0) {
                throw new Error("Documents must be a non-empty array");
            }

            const db = this.databases[storeName];

            if (operation === "delete") {
                docs = docs.map((doc) => ({ ...doc, _deleted: true }));
            }

            const result = await db.bulkDocs(docs);
            console.log(`[DB] Bulk ${operation} completed for ${storeName}:`, {
                totalDocs: docs.length,
                successful: result.filter((r) => !r.error).length,
                errors: result.filter((r) => r.error).length,
            });

            return result;
        } catch (error) {
            console.error(`Error in bulk ${operation} for ${storeName}:`, error);
            throw new Error(`Failed bulk ${operation} in ${storeName}: ${error.message}`);
        }
    },

    getDatabaseInstance(storeName) {
        this.validateDatabase(storeName);
        return this.databases[storeName];
    },

    async closeAllDatabases() {
        const closePromises = Object.values(this.databases).map((db) => {
            try {
                return db.close();
            } catch (error) {
                console.warn("Error closing database:", error);
                return Promise.resolve();
            }
        });

        await Promise.allSettled(closePromises);
        this.indexCache.clear();
        this.databases = {};
        this.isInitialized = false;
        console.log("[DB] All databases closed");
    },

    async getLocalStats(databaseName = null) {
        if (!this.isInitialized) {
            throw new Error("DatabaseManager not initialized");
        }

        const stats = {};

        // If databaseName is specified, only process that database
        const databasesToProcess = databaseName ? { [databaseName]: this.databases[databaseName] } : this.databases;

        // Validate that the specified database exists
        if (databaseName && !this.databases[databaseName]) {
            throw new Error(`Database '${databaseName}' not found`);
        }

        for (const [name, db] of Object.entries(databasesToProcess)) {
            try {
                let docCount;

                const info = await db.info();

                if (USE_LOCAL_STORAGE) {
                    // Count design documents to subtract from total
                    const designDocs = await db.allDocs({
                        startkey: "_design/",
                        endkey: "_design/\ufff0",
                        include_docs: false,
                    });
                    docCount = info.doc_count - designDocs.rows.length;
                } else {
                    docCount = 0;
                }

                stats[name] = { docCount, syncType: this.isLiveSyncDatabase(name) ? "live" : "periodic" };
            } catch (error) {
                stats[name] = {
                    error: error.message,
                    ...(location_id && { location_id: location_id }),
                };
            }
        }
        return stats;
    },

    async getRemoteStats(remoteBaseUrl, options = {}, databaseName = null) {
        const stats = {};
        const auth = btoa(`${options.username}:${options.password}`);

        // If databaseName is specified, only process that database
        const databasesToProcess = databaseName ? [databaseName] : this.databaseNames;

        // Validate that the specified database exists in databaseNames
        if (databaseName && !this.databaseNames.includes(databaseName)) {
            throw new Error(`Database '${databaseName}' not found in databaseNames`);
        }

        for (const dbName of databasesToProcess) {
            try {
                let docCount;
                const selector = SyncManager.getLocationSelector(dbName);

                if (selector) {
                    // Add filter to exclude design documents and index records
                    const enhancedSelector = {
                        $and: [
                            selector,
                            {
                                _id: {
                                    $not: { $regex: "^_design/" }, // Exclude design documents
                                },
                            },
                        ],
                    };

                    // Use find endpoint to count documents matching location_id, excluding design docs
                    const findResponse = await fetch(`${remoteBaseUrl}/${dbName}/_find`, {
                        method: "POST",
                        headers: {
                            Authorization: `Basic ${auth}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            selector: enhancedSelector,
                            fields: ["_id"], // Only return _id to minimize data transfer
                            limit: 25000, // CouchDB default max, adjust as needed
                        }),
                    });

                    if (!findResponse.ok) {
                        throw new Error(`Find request failed: ${findResponse.status}`);
                    }

                    const findResult = await findResponse.json();
                    docCount = findResult.docs.length;

                    // Check if there might be more documents (handle pagination if needed)
                    if (findResult.bookmark) {
                        // You might want to implement pagination here if you expect large result sets
                        console.warn(`Potential pagination needed for ${dbName} with location_id ${selector}`);
                    }
                } else {
                    // Get total document count from database info, then subtract design docs
                    const infoResponse = await fetch(`${remoteBaseUrl}/${dbName}`, {
                        headers: {
                            Authorization: `Basic ${auth}`,
                        },
                    });

                    if (!infoResponse.ok) {
                        throw new Error(`Info request failed: ${infoResponse.status}`);
                    }

                    const info = await infoResponse.json();

                    // Count design documents to subtract from total
                    const designDocsResponse = await fetch(`${remoteBaseUrl}/${dbName}/_all_docs?startkey="_design/"&endkey="_design/\ufff0"`, {
                        headers: {
                            Authorization: `Basic ${auth}`,
                        },
                    });

                    if (designDocsResponse.ok) {
                        const designDocsResult = await designDocsResponse.json();
                        docCount = info.doc_count - designDocsResult.rows.length;
                    } else {
                        // Fallback: use total count if design doc query fails
                        docCount = info.doc_count;
                        console.warn(`Could not count design docs for ${dbName}, using total count`);
                    }
                }

                stats[dbName] = { docCount };
            } catch (error) {
                stats[dbName] = { error: error.message, source: "remote" };
            }
        }
        return stats;
    },

    async getStats(remoteBaseUrl, options = {}, databaseName = null) {
        // Initialize state preservation properties if they don't exist
        if (!this.lastRemoteStats) this.lastRemoteStats = {};
        if (!this.lastLocalStats) this.lastLocalStats = {};

        // Get the new stats for the specified database(s)
        let newRemoteStats = await this.getRemoteStats(remoteBaseUrl, options, databaseName);

        // Apply the hardcoded override for dde database if it exists in the results
        if (newRemoteStats.dde) {
            newRemoteStats.dde.docCount = 10;
        }

        const newLocalStats = await this.getLocalStats(databaseName);

        // Merge with existing stats to preserve other databases' information
        let finalRemoteStats = { ...this.lastRemoteStats, ...newRemoteStats };
        let finalLocalStats = { ...this.lastLocalStats, ...newLocalStats };

        // Store the current complete stats for future partial updates
        this.lastRemoteStats = finalRemoteStats;
        this.lastLocalStats = finalLocalStats;

        self.postMessage({
            type: "db_stats",
            local: finalLocalStats,
            remote: finalRemoteStats,
            updatedDatabase: databaseName, // Include info about which DB was updated
            isPartialUpdate: !!databaseName, // Flag to indicate if this was a partial update
        });

        console.log(`🚀 ~ getStats ~ { local, remote }:`, {
            local: finalLocalStats,
            remote: finalRemoteStats,
            ...(databaseName && { updatedDatabase: databaseName, isPartialUpdate: true }),
        });

        return {
            local: finalLocalStats,
            remote: finalRemoteStats,
            ...(databaseName && { updatedDatabase: databaseName, isPartialUpdate: true }),
        };
    },
    async autoCompactAll(intervalHours = 3) {
        const intervalId = setInterval(async () => {
            console.log("[DB] Running automatic database compaction...");
            this.runBackgroundCompaction();
        }, intervalHours * 60 * 60 * 1000);

        // Return the interval ID so it can be cleared if needed
        return intervalId;
    },
};
