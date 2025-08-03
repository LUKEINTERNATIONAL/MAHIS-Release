const DatabaseManager = {
    db: null,
    async openDatabase() {
        return new Promise((resolve, reject) => {
            const DB_NAME = "MaHis";
            const DB_VERSION = 12; // Increment this when changing schema

            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = (event) => {
                reject(`Database error: ${event.target.error}`);
            };

            request.onblocked = () => {
                reject("Database upgrade blocked by existing connection. Close other tabs using this database.");
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;

                // Add version change listener for future upgrades
                this.db.onversionchange = () => {
                    this.db.close();
                    console.log("Database is being upgraded elsewhere. Closing connection...");
                };

                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                const transaction = event.target.transaction;

                // Corrected object store configurations
                const schema = {
                    relationship: {
                        keyPath: "relationship_type_id",
                        indexes: [
                            { name: "a_is_to_b", keyPath: "a_is_to_b" },
                            { name: "b_is_to_a", keyPath: "b_is_to_a" },
                        ],
                    },
                    districts: {
                        keyPath: "district_id",
                        indexes: [
                            { name: "name", keyPath: "name" },
                            { name: "region_id", keyPath: "region_id" },
                        ],
                    },
                    TAs: {
                        keyPath: "traditional_authority_id",
                        indexes: [
                            { name: "name", keyPath: "name" },
                            { name: "district_id", keyPath: "district_id" },
                        ],
                    },
                    villages: {
                        keyPath: "village_id",
                        autoIncrement: true,
                        indexes: [
                            { name: "name", keyPath: "name" },
                            { name: "traditional_authority_id", keyPath: "traditional_authority_id" },
                        ],
                    },
                    countries: {
                        keyPath: "district_id",
                        indexes: [
                            { name: "name", keyPath: "name" },
                            { name: "region_id", keyPath: "region_id" },
                        ],
                    },
                    programs: { keyPath: "program_id", indexes: [{ name: "concept_id", keyPath: "concept_id" }] },
                    patientRecords: {
                        keyPath: "patientID",
                        indexes: [
                            { name: "given_name", keyPath: "personInformation.given_name" },
                            { name: "family_name", keyPath: "personInformation.family_name" },
                            { name: "ID", keyPath: "ID" },
                            { name: "encounter_datetime", keyPath: "encounter_datetime" },
                        ],
                    },
                    dde: { keyPath: "id", autoIncrement: true },
                    generics: { keyPath: "id", autoIncrement: true },
                    stock: { keyPath: "id", autoIncrement: true, indexes: [{ name: "pharmacy_batch_id", keyPath: "pharmacy_batch_id" }] },
                    genericVaccineSchedule: { keyPath: "id", autoIncrement: true },
                    conceptNames: {
                        keyPath: "id",
                        autoIncrement: true,
                        indexes: [
                            { name: "concept_id", keyPath: "concept_id" },
                            { name: "name", keyPath: "name" },
                        ],
                    },
                    conceptSets: {
                        keyPath: "id",
                        autoIncrement: true,
                        indexes: [
                            { name: "concept_set_name", keyPath: "concept_set_name" },
                            { name: "member_ids", keyPath: "member_ids" },
                        ],
                    },
                    bookedAppointments: { keyPath: "id", autoIncrement: true, indexes: [{ name: "name", keyPath: "name" }] },
                    testTypes: { keyPath: "id", autoIncrement: true, indexes: [{ name: "name", keyPath: "name" }] },
                    specimens: { keyPath: "id", autoIncrement: true, indexes: [{ name: "name", keyPath: "name" }] },
                    diagnosis: { keyPath: "id", autoIncrement: true, indexes: [{ name: "name", keyPath: "name" }] },
                    testResultIndicators: { keyPath: "id", autoIncrement: true, indexes: [{ name: "name", keyPath: "name" }] },
                    drugs: {
                        keyPath: "drug_id",
                        indexes: [
                            { name: "name", keyPath: "name" },
                            { name: "concept_id", keyPath: "concept_id" },
                        ],
                    },
                    activeProgramInContext: { keyPath: "program_id" },
                    offlineConnectionString: { keyPath: "connection_string_id" },
                    facilities: { keyPath: "code" },
                    wards: { keyPath: "location_id" },
                    visits: {
                        keyPath: "id",
                        autoIncrement: true,
                    },
                    unsavedVisits: {
                        keyPath: "id",
                        autoIncrement: true,
                    },
                    stages: {
                        keyPath: "id",
                        autoIncrement: true,
                        indexes: [
                            { name: "stage", keyPath: "stage" },
                            { name: "location_id", keyPath: "location_id" },
                        ],
                    },
                };

                Object.entries(schema).forEach(([storeName, config]) => {
                    let store;
                    const indexes = config.indexes || []; // Handle missing indexes array

                    if (!database.objectStoreNames.contains(storeName)) {
                        store = database.createObjectStore(storeName, {
                            keyPath: config.keyPath,
                            autoIncrement: config.autoIncrement || false,
                        });
                    } else {
                        store = transaction.objectStore(storeName); // Now using valid transaction
                    }

                    indexes.forEach((index) => {
                        try {
                            // Recreate indexes safely
                            if (store.indexNames.contains(index.name)) {
                                store.deleteIndex(index.name);
                            }
                            store.createIndex(index.name, index.keyPath, {
                                unique: !!index.unique,
                                multiEntry: !!index.multiEntry,
                            });
                        } catch (error) {
                            console.error(`Index error in ${storeName}:`, error);
                            transaction.abort(); // Explicitly abort on error
                            reject(error);
                        }
                    });
                });
            };
        });
    },
    async overRideRecordRecord(storeName, data, whereClause) {
        if (data) this.deleteRecord(storeName, whereClause);
        if (data) this.addData(storeName, data);
    },
    async overRideCollection(storeName, data) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);

            // Clear all existing data
            const clearRequest = objectStore.clear();

            clearRequest.onerror = (event) => {
                reject(new Error(`Clear operation failed: ${event.target.error}`));
            };

            clearRequest.onsuccess = () => {
                // After clearing, add the new data
                if (data.length > 0) {
                    const addPromises = data.map((item) => {
                        return new Promise((resolve, reject) => {
                            const addRequest = objectStore.add(item);
                            addRequest.onerror = (event) => reject(event.target.error);
                            addRequest.onsuccess = () => resolve();
                        });
                    });

                    Promise.all(addPromises)
                        .then(() => resolve())
                        .catch((error) => reject(new Error(`Add operation failed: ${error}`)));
                } else {
                    const addRequest = objectStore.add(data);
                    addRequest.onerror = (event) => {
                        reject(event.target.error);
                    };

                    addRequest.onsuccess = () => {
                        resolve();
                    };
                }
            };

            // Handle transaction errors
            transaction.onerror = (event) => {
                reject(new Error(`Transaction failed: ${event.target.error}`));
            };

            transaction.oncomplete = () => {};
        });
    },

    /**
     * Alternative override method that explicitly deletes then adds
     * Use this if you need to ensure a complete replacement
     * @param {string} storeName - Name of the object store
     * @param {*} newData - New data to insert
     * @param {string|number} keyValue - The key value to delete first
     * @param {boolean} debug - Enable detailed debugging output
     * @returns {Promise<boolean>} - Success status
     */
    async overrideRecordExplicit(storeName, newData, keyValue, debug = false) {
        if (!this.db) {
            const error = "Database not initialized. Call openDatabase() first.";
            if (debug) console.error("[DEBUG] overrideRecordExplicit:", error);
            throw new Error(error);
        }

        if (debug) {
            console.log("[DEBUG] overrideRecordExplicit: Starting operation");
            console.log("[DEBUG] Parameters:", {
                storeName,
                keyValue,
                newDataKeys: Object.keys(newData || {}),
                newDataSize: JSON.stringify(newData).length + " characters",
            });
        }

        return new Promise((resolve, reject) => {
            if (debug) console.log("[DEBUG] Creating transaction for store:", storeName);

            const transaction = this.db.transaction([storeName], "readwrite");
            const store = transaction.objectStore(storeName);

            // Transaction event handlers
            transaction.oncomplete = () => {
                if (debug) console.log("[DEBUG] Transaction completed successfully");
            };

            transaction.onabort = (event) => {
                if (debug) console.error("[DEBUG] Transaction aborted:", event.target.error);
            };

            transaction.onerror = (event) => {
                const error = `Transaction error: ${event.target.error}`;
                if (debug) console.error("[DEBUG]", error);
                console.error(error);
                reject(event.target.error);
            };

            if (debug) console.log("[DEBUG] Attempting to delete record with key:", keyValue);

            // First delete the existing record
            const deleteRequest = store.delete(keyValue);

            deleteRequest.onsuccess = () => {
                if (debug) {
                    console.log("[DEBUG] Delete operation successful for key:", keyValue);
                    console.log("[DEBUG] Now attempting to add new record");
                }

                // Then add the new record
                const addRequest = store.add(newData);

                addRequest.onsuccess = () => {
                    const successMsg = `Record with key ${keyValue} successfully overridden in ${storeName}`;
                    if (debug) {
                        console.log("[DEBUG] Add operation successful");
                        console.log("[DEBUG] Override operation completed successfully");
                    }
                    console.log(successMsg);
                    resolve(true);
                };

                addRequest.onerror = (event) => {
                    const error = `Error adding new record in ${storeName}: ${event.target.error}`;
                    if (debug) {
                        console.error("[DEBUG] Add operation failed:", event.target.error);
                        console.error("[DEBUG] Add request error details:", {
                            errorName: event.target.error?.name,
                            errorMessage: event.target.error?.message,
                            errorCode: event.target.error?.code,
                            keyValue: keyValue,
                            storeName: storeName,
                        });
                    }
                    console.error(error);
                    reject(event.target.error);
                };
            };

            deleteRequest.onerror = (event) => {
                if (debug) {
                    console.log("[DEBUG] Delete operation failed (likely record not found):", event.target.error);
                    console.log("[DEBUG] Attempting to add record anyway (fallback to insert)");
                }

                // If delete fails (record doesn't exist), try to add anyway
                console.log(`Record ${keyValue} not found for deletion, adding new record`);
                const addRequest = store.add(newData);

                addRequest.onsuccess = () => {
                    if (debug) {
                        console.log("[DEBUG] Fallback add operation successful");
                        console.log("[DEBUG] Override operation completed (via fallback insert)");
                    }
                    console.log(`New record with key ${keyValue} added to ${storeName}`);
                    resolve(true);
                };

                addRequest.onerror = (event) => {
                    const error = `Error adding record in ${storeName}: ${event.target.error}`;
                    if (debug) {
                        console.error("[DEBUG] Fallback add operation also failed:", event.target.error);
                        console.error("[DEBUG] Fallback add error details:", {
                            errorName: event.target.error?.name,
                            errorMessage: event.target.error?.message,
                            errorCode: event.target.error?.code,
                            keyValue: keyValue,
                            storeName: storeName,
                            operation: "fallback_add_after_delete_failed",
                        });
                    }
                    console.error(error);
                    reject(event.target.error);
                };
            };
        });
    },

    /**
     * Delete a record from the object store
     * @param {string} storeName - Name of the object store
     * @param {string|number} keyValue - The key value to delete
     * @param {boolean} debug - Enable detailed debugging output
     * @returns {Promise<boolean>} - Success status
     */
    async deleteRecordExplicit(storeName, keyValue, debug = false) {
        if (!this.db) {
            const error = "Database not initialized. Call openDatabase() first.";
            if (debug) console.error("[DEBUG] deleteRecord:", error);
            throw new Error(error);
        }

        if (debug) {
            console.log("[DEBUG] deleteRecord: Starting operation");
            console.log("[DEBUG] Parameters:", {
                storeName,
                keyValue,
            });
        }

        return new Promise((resolve, reject) => {
            if (debug) console.log("[DEBUG] Creating transaction for store:", storeName);

            const transaction = this.db.transaction([storeName], "readwrite");
            const store = transaction.objectStore(storeName);

            // Transaction event handlers
            transaction.oncomplete = () => {
                if (debug) console.log("[DEBUG] Delete transaction completed successfully");
            };

            transaction.onabort = (event) => {
                if (debug) console.error("[DEBUG] Delete transaction aborted:", event.target.error);
            };

            transaction.onerror = (event) => {
                const error = `Delete transaction error: ${event.target.error}`;
                if (debug) console.error("[DEBUG]", error);
                console.error(error);
                reject(event.target.error);
            };

            if (debug) console.log("[DEBUG] Attempting to delete record with key:", keyValue);

            // Delete the record
            const deleteRequest = store.delete(keyValue);

            deleteRequest.onsuccess = () => {
                const successMsg = `Record with key ${keyValue} successfully deleted from ${storeName}`;
                if (debug) {
                    console.log("[DEBUG] Delete operation successful");
                    console.log("[DEBUG] Delete operation completed successfully");
                }
                console.log(successMsg);
                resolve(true);
            };

            deleteRequest.onerror = (event) => {
                const error = `Error deleting record in ${storeName}: ${event.target.error}`;
                if (debug) {
                    console.error("[DEBUG] Delete operation failed:", event.target.error);
                    console.error("[DEBUG] Delete error details:", {
                        errorName: event.target.error?.name,
                        errorMessage: event.target.error?.message,
                        errorCode: event.target.error?.code,
                        keyValue,
                        storeName,
                    });
                }
                console.error(error);
                reject(event.target.error);
            };
        });
    },

    addData(storeName, data) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);

            const request = objectStore.add(data);
            request.onerror = (event) => {
                const error = event.target.error;
                // console.log("🚀 ~ addData ~ storeName:", storeName, data, `Error adding data: ${error?.name} - ${error?.message}`);
                reject(new Error(`Error adding data: ${error?.name} - ${error?.message}`));
            };

            request.onsuccess = () => {
                resolve();
            };
        });
    },
    async deleteRecord(storeName, whereCondition = null) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            // Create a single readwrite transaction
            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);

            // Handle transaction-level errors
            transaction.onerror = (event) => {
                reject(new Error(`Transaction error: ${event.target.error}`));
            };

            // If no where condition, clear all records
            if (!whereCondition) {
                const clearRequest = objectStore.clear();

                clearRequest.onerror = (event) => {
                    reject(event.target.error);
                };

                clearRequest.onsuccess = () => {
                    resolve();
                };
            } else {
                // Find and delete matching records
                const getAllRequest = objectStore.getAll();

                getAllRequest.onerror = (event) => {
                    reject(event.target.error);
                };

                getAllRequest.onsuccess = (event) => {
                    const allRecords = event.target.result;

                    // Find records to delete based on where condition
                    const recordsToDelete = allRecords.filter((record) =>
                        Object.entries(whereCondition).every(([key, value]) => record[key] === value)
                    );

                    // If no records match, resolve immediately
                    if (recordsToDelete.length === 0) {
                        resolve();
                        return;
                    }

                    // Track deletion progress
                    let deletedCount = 0;
                    let errorOccurred = false;

                    recordsToDelete.forEach((record) => {
                        // Prioritize deletion keys
                        const deletionKeys = ["id", "_id", "key", "primaryKey", ...Object.keys(whereCondition)];

                        // Find the first valid deletion key
                        const deleteKey = deletionKeys.find((key) => record[key] !== undefined);

                        if (deleteKey) {
                            const deleteRequest = objectStore.delete(record[deleteKey]);

                            deleteRequest.onerror = (event) => {
                                if (!errorOccurred) {
                                    errorOccurred = true;
                                    reject(new Error(`Failed to delete record: ${event.target.error}`));
                                }
                            };

                            deleteRequest.onsuccess = () => {
                                deletedCount++;

                                // If all records processed, resolve
                                if (deletedCount === recordsToDelete.length && !errorOccurred) {
                                    resolve(deletedCount);
                                }
                            };
                        } else {
                            // If no valid key found, log an error
                            console.error("No valid key found for deletion", record);
                            deletedCount++;
                        }
                    });
                };
            }
        });
    },
    async getOfflineData(storeName, whereCondition = null, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized."));
                return;
            }

            try {
                const transaction = this.db.transaction([storeName], "readonly");
                const objectStore = transaction.objectStore(storeName);

                let request;

                // Handle special case for getting latest record WITHOUT where condition
                if (options.getLatest && options.orderBy && !whereCondition) {
                    if (objectStore.indexNames.contains(options.orderBy)) {
                        const index = objectStore.index(options.orderBy);
                        request = index.openCursor(null, "prev");

                        request.onsuccess = (event) => {
                            const cursor = event.target.result;
                            if (cursor) {
                                resolve(cursor.value);
                            } else {
                                resolve(null);
                            }
                        };
                    } else {
                        // Fallback to get all and find latest
                        request = objectStore.getAll();
                        request.onsuccess = (event) => {
                            const allResults = event.target.result;
                            if (allResults.length === 0) {
                                resolve(null);
                                return;
                            }

                            const latestRecord = allResults.reduce((latest, current) => {
                                const currentDate = new Date(current[options.orderBy]);
                                const latestDate = new Date(latest[options.orderBy]);
                                return currentDate > latestDate ? current : latest;
                            });

                            resolve(latestRecord);
                        };
                    }

                    request.onerror = (event) => {
                        reject(new Error(`Error getting latest record: ${event.target.error}`));
                    };
                    return;
                }

                // Handle where conditions (with or without getLatest)
                if (whereCondition) {
                    // Separate equality and inequality conditions
                    const conditions = Object.entries(whereCondition).reduce(
                        (acc, [key, value]) => {
                            if (typeof value === "object" && value !== null) {
                                if ("$ne" in value) {
                                    acc.inequality[key] = value.$ne;
                                } else {
                                    acc.equality[key] = value;
                                }
                            } else {
                                acc.equality[key] = value;
                            }
                            return acc;
                        },
                        { equality: {}, inequality: {} }
                    );

                    // Check if we have any equality conditions to use with index
                    const equalityKeys = Object.keys(conditions.equality);
                    if (equalityKeys.length > 0) {
                        const indexName = equalityKeys[0];

                        if (objectStore.indexNames.contains(indexName)) {
                            const index = objectStore.index(indexName);
                            const keyRange = IDBKeyRange.only(conditions.equality[indexName]);

                            const results = [];
                            request = index.openCursor(keyRange);

                            request.onsuccess = (event) => {
                                const cursor = event.target.result;
                                if (cursor) {
                                    const item = cursor.value;
                                    // Check both equality and inequality conditions
                                    const matchesAllConditions =
                                        // Check remaining equality conditions
                                        Object.entries(conditions.equality).every(([key, value]) => item[key] === value) &&
                                        // Check inequality conditions
                                        Object.entries(conditions.inequality).every(([key, value]) => item[key] !== value);

                                    if (matchesAllConditions) {
                                        results.push(item);
                                    }
                                    cursor.continue();
                                } else {
                                    // Apply getLatest logic to filtered results
                                    if (options.getLatest && options.orderBy && results.length > 0) {
                                        const latestRecord = results.reduce((latest, current) => {
                                            const currentDate = new Date(current[options.orderBy]);
                                            const latestDate = new Date(latest[options.orderBy]);
                                            return currentDate > latestDate ? current : latest;
                                        });
                                        resolve(latestRecord);
                                    } else {
                                        resolve(results.length > 0 ? results : null);
                                    }
                                }
                            };
                        } else {
                            // Fallback to manual filtering if no index exists
                            request = objectStore.getAll();
                            request.onsuccess = (event) => {
                                const allResults = event.target.result;
                                const filteredResults = allResults.filter((item) => {
                                    return (
                                        // Check equality conditions
                                        Object.entries(conditions.equality).every(([key, value]) => item[key] === value) &&
                                        // Check inequality conditions
                                        Object.entries(conditions.inequality).every(([key, value]) => item[key] !== value)
                                    );
                                });

                                // Apply getLatest logic to filtered results
                                if (options.getLatest && options.orderBy && filteredResults.length > 0) {
                                    const latestRecord = filteredResults.reduce((latest, current) => {
                                        const currentDate = new Date(current[options.orderBy]);
                                        const latestDate = new Date(latest[options.orderBy]);
                                        return currentDate > latestDate ? current : latest;
                                    });
                                    resolve(latestRecord);
                                } else {
                                    resolve(filteredResults.length > 0 ? filteredResults : null);
                                }
                            };
                        }
                    } else {
                        // If we only have inequality conditions
                        request = objectStore.getAll();
                        request.onsuccess = (event) => {
                            const allResults = event.target.result;
                            const filteredResults = allResults.filter((item) =>
                                Object.entries(conditions.inequality).every(([key, value]) => item[key] !== value)
                            );

                            // Apply getLatest logic to filtered results
                            if (options.getLatest && options.orderBy && filteredResults.length > 0) {
                                const latestRecord = filteredResults.reduce((latest, current) => {
                                    const currentDate = new Date(current[options.orderBy]);
                                    const latestDate = new Date(latest[options.orderBy]);
                                    return currentDate > latestDate ? current : latest;
                                });
                                resolve(latestRecord);
                            } else {
                                resolve(filteredResults.length > 0 ? filteredResults : null);
                            }
                        };
                    }
                } else {
                    // If no condition, get all records
                    request = objectStore.getAll();
                    request.onsuccess = (event) => {
                        const result = event.target.result;
                        resolve(result.length > 0 ? result : null);
                    };
                }

                request.onerror = (event) => {
                    const error = event.target.error;
                    reject(new Error(`Error getting data: ${error?.name} - ${error?.message}`));
                };
            } catch (error) {
                console.log("Failed to get data", error);
                reject(error);
            }
        });
    },
    async emptyCollection(storeName) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);

            const clearRequest = objectStore.clear();

            clearRequest.onerror = (event) => {
                reject(new Error(`Failed to empty collection: ${event.target.error}`));
            };

            clearRequest.onsuccess = () => {
                resolve();
            };
        });
    },
    async updateRecord(storeName, whereClause, updateData) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);

            // Get all records to find matching ones
            const getAllRequest = objectStore.getAll();

            getAllRequest.onerror = (event) => {
                reject(event.target.error);
            };

            getAllRequest.onsuccess = (event) => {
                const records = event.target.result;

                // Find records that match all conditions in whereClause
                const matchingRecords = records.filter((record) => {
                    return Object.entries(whereClause).every(([key, value]) => record[key] == value);
                });

                if (matchingRecords.length === 0) {
                    reject(new Error("No matching records found", storeName));
                    return;
                }

                // Update each matching record
                let updateCount = 0;
                matchingRecords.forEach((record) => {
                    // Merge the existing record with the update data
                    const updatedRecord = { ...record, ...updateData };

                    const updateRequest = objectStore.put(updatedRecord);

                    updateRequest.onerror = (event) => {
                        reject(event.target.error);
                    };

                    updateRequest.onsuccess = () => {
                        updateCount++;
                        if (updateCount === matchingRecords.length) {
                            // Return updated records to the caller
                            resolve(matchingRecords.map((record) => ({ ...record, ...updateData })));
                        }
                    };
                });
            };
        });
    },
    async bulkAdd(storeName, records) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);
            let completedCount = 0;
            let errorOccurred = false;

            transaction.onerror = (event) => {
                errorOccurred = true;
                reject(new Error(`Transaction failed: ${event.target.error}`));
            };

            // Use chunking for very large arrays to prevent memory issues
            const chunkSize = 100;
            const chunks = [];
            for (let i = 0; i < records.length; i += chunkSize) {
                chunks.push(records.slice(i, i + chunkSize));
            }

            let currentChunk = 0;

            const processNextChunk = () => {
                if (currentChunk >= chunks.length) {
                    if (!errorOccurred) {
                        resolve(completedCount);
                    }
                    return;
                }

                const chunk = chunks[currentChunk++];

                chunk.forEach((record) => {
                    const request = objectStore.add(record);

                    request.onsuccess = () => {
                        completedCount++;
                        if (completedCount === records.length && !errorOccurred) {
                            resolve(completedCount);
                        }
                    };

                    request.onerror = (event) => {
                        console.warn(`Error adding record: ${event.target.error}`);
                        // Continue processing despite errors
                        completedCount++;
                        if (completedCount === records.length && !errorOccurred) {
                            resolve(completedCount);
                        }
                    };
                });

                // Process next chunk after a small delay to give main thread breathing room
                setTimeout(processNextChunk, 0);
            };

            processNextChunk();
        });
    },

    async bulkDelete(storeName, keys) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);
            let completedCount = 0;
            let errorOccurred = false;

            transaction.onerror = (event) => {
                errorOccurred = true;
                reject(new Error(`Transaction failed: ${event.target.error}`));
            };

            // Use chunking for very large arrays
            const chunkSize = 100;
            const chunks = [];
            for (let i = 0; i < keys.length; i += chunkSize) {
                chunks.push(keys.slice(i, i + chunkSize));
            }

            let currentChunk = 0;

            const processNextChunk = () => {
                if (currentChunk >= chunks.length) {
                    if (!errorOccurred) {
                        resolve(completedCount);
                    }
                    return;
                }

                const chunk = chunks[currentChunk++];

                chunk.forEach((key) => {
                    const request = objectStore.delete(key);

                    request.onsuccess = () => {
                        completedCount++;
                        if (completedCount === keys.length && !errorOccurred) {
                            resolve(completedCount);
                        }
                    };

                    request.onerror = (event) => {
                        console.warn(`Error deleting record: ${event.target.error}`);
                        // Continue processing despite errors
                        completedCount++;
                        if (completedCount === keys.length && !errorOccurred) {
                            resolve(completedCount);
                        }
                    };
                });

                // Process next chunk after a small delay
                setTimeout(processNextChunk, 0);
            };

            processNextChunk();
        });
    },

    async transaction(storeName, callback) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);

            transaction.onerror = (event) => {
                reject(new Error(`Transaction failed: ${event.target.error}`));
            };

            transaction.oncomplete = () => {
                resolve();
            };

            try {
                callback(objectStore);
            } catch (error) {
                reject(error);
            }
        });
    },
};
