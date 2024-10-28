const DatabaseManager = {
    db: null,
    async openDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("MaHis");

            request.onerror = (event) => {
                reject("Database error: " + event.target.error);
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                const objectStores = ["relationship", "districts", "TAs", "villages", "countries", "programs", "patientRecords"];

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
                const addRequest = objectStore.add(data);

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
    async getOfflineData(storeName) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error("Database not initialized."));
                return;
            }
            try {
                const transaction = this.db.transaction([storeName], "readonly");
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.getAll();

                request.onerror = (event) => {
                    const error = event.target.error;
                    reject(new Error(`Error getting data: ${error?.name} - ${error?.message}`));
                };

                request.onsuccess = (event) => {
                    const result = event.target.result;
                    resolve(result.length > 0 ? result : null);
                };
            } catch (error) {
                console.log("failed to get locations", error);
                return null;
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
                    return Object.entries(whereClause).every(([key, value]) => record[key] === value);
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
