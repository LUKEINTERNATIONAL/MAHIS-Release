const DatabaseManager = {
    db: null,
    async openDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("MaHis", 1);

            request.onerror = (event) => {
                reject("Database error: " + event.target.error);
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                const objectStores = [
                    "relationship",
                    "districts",
                    "TAs",
                    "villages",
                    "countries",
                    "programs",
                    "patientRecords",
                    "dde",
                    "generics",
                    "stock",
                    "genericVaccineSchedule",
                ];

                objectStores.forEach((storeName) => {
                    if (!database.objectStoreNames.contains(storeName)) {
                        database.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
                    }
                });
            };
        });
    },

    async overRideRecord(storeName, data) {
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
                reject(event.target.error);
            };

            clearRequest.onsuccess = () => {
                // After clearing, add the new data
                let addRequest = "";
                if (data.length > 0) {
                    Promise.all(
                        data.map(async (item) => {
                            addRequest = objectStore.add(item);
                        })
                    );
                } else {
                    addRequest = objectStore.add(data);
                }

                addRequest.onerror = (event) => {
                    reject(event.target.error);
                };

                addRequest.onsuccess = () => {
                    resolve();
                };
            };
        });
    },
    upsertSingleRecord(storeName, data) {
        if (!this.db) {
            throw new Error("Database not initialized. Call openDatabase() first.");
        }

        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }
            const transaction = this.db.transaction([storeName], "readwrite");
            const objectStore = transaction.objectStore(storeName);

            // Get all records (should be only one or none)
            const getAllRequest = objectStore.getAll();

            getAllRequest.onsuccess = (event) => {
                const existingRecords = event.target.result;

                if (existingRecords.length > 0) {
                    // Update existing record
                    const updateRequest = objectStore.put([...existingRecords[0], ...data]);
                    updateRequest.onsuccess = () => resolve();
                    updateRequest.onerror = (event) => reject(event.target.error);
                } else {
                    // Add new record
                    const addRequest = objectStore.add(data);
                    addRequest.onsuccess = () => resolve();
                    addRequest.onerror = (event) => reject(event.target.error);
                }
            };

            getAllRequest.onerror = (event) => reject(event.target.error);
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
    async getOfflineData(storeName, whereCondition = null) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized."));
                return;
            }

            try {
                const transaction = this.db.transaction([storeName], "readonly");
                const objectStore = transaction.objectStore(storeName);

                let request;

                // If a where condition is provided, use a cursor
                if (whereCondition) {
                    // Determine if an index exists for the filtering field
                    const indexName = Object.keys(whereCondition)[0];

                    if (objectStore.indexNames.contains(indexName)) {
                        const index = objectStore.index(indexName);
                        const keyRange = IDBKeyRange.only(whereCondition[indexName]);

                        const results = [];
                        request = index.openCursor(keyRange);

                        request.onsuccess = (event) => {
                            const cursor = event.target.result;
                            if (cursor) {
                                results.push(cursor.value);
                                cursor.continue();
                            } else {
                                resolve(results.length > 0 ? results : null);
                            }
                        };
                    } else {
                        // Fallback to manual filtering if no index exists
                        request = objectStore.getAll();
                        request.onsuccess = (event) => {
                            const allResults = event.target.result;
                            const filteredResults = allResults.filter((item) => {
                                return Object.entries(whereCondition).every(([key, value]) => item[key] === value);
                            });
                            resolve(filteredResults.length > 0 ? filteredResults : null);
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
    deleteObjectStore(storeName) {
        return new Promise((resolve, reject) => {
            if (!db) {
                reject(new Error("Database not initialized. Call openDatabase() first."));
                return;
            }

            if (!DatabaseManager.objectStoreNames.contains(storeName)) {
                reject(new Error(`Object store "${storeName}" does not exist.`));
                return;
            }

            const version = DatabaseManager.version + 1;
            DatabaseManager.close();

            const request = indexedDB.open("MaHis", version);

            request.onerror = (event) => {
                reject("Database error: " + event.target.error);
            };

            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                database.deleteObjectStore(storeName);
            };

            request.onsuccess = (event) => {
                db = event.target.result;
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
                    reject(new Error("No matching records found"));
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
                            resolve();
                        }
                    };
                });
            };
        });
    },
};
