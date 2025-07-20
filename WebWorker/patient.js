const getConnectonString = async () => {
    const connection_strings = await DatabaseManager.getOfflineData("offlineConnectionString");
    return connection_strings[0].connection_string
}

const checkNetworkConnectivity = async (url, timeout = 3000) => {
    try {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
            method: "GET",
            headers: { "Accept": "application/json" },
            signal: controller.signal
        });

        clearTimeout(id);
        return response.ok;
    } catch (error) {
        console.error("Connectivity check failed:", error.message);
        return false;
    }
};

const patientService = {
    async savePatientRecord() {
        try {
            const patientRecords = await DatabaseManager.getOfflineData("patientRecords", { sync_status: "unsynced" });
            if (patientRecords) {
                await Promise.all(
                    patientRecords.map(async (record) => {
                        const data = await ApiService.post("/save_patient_record", { record: record });
                        if (data) {
                            await DatabaseManager.overrideRecordExplicit('patientRecords', data, record.patientID);
                        }
                    })
                );
            }
        } catch (error) {
            console.error("Error saving patient record:", error);
            // Handle offline state
            return false;
        }
    },

    async setPatientCachedRecord(batchSize = 16) {
        try {
            if (STORE_CACHE_RECORDS == "true" && USEMODS == "true") {
                const BASE_URL = await getConnectonString();
                // const isReachable = await checkNetworkConnectivity(BASE_URL);
    
                // if (!isReachable) {
                //     throw new Error("Server is not reachable");
                // }
    
                // Get remote patient IDs
                const response = await fetch(`${BASE_URL}/patient-ids`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const remotePatientIds = await response.json();
    
                // Get local patient records
                const localRecords = await DatabaseManager.getOfflineData("patientRecords");
    
                if (localRecords) {
                    const localPatientIds = localRecords.map((record) => record.ID.toString());
    
        
                    // Find missing patient IDs
                    const missingPatientIds = remotePatientIds.filter((id) => !localPatientIds.includes(id));
        
                    // Process missing IDs in batches
                    for (let i = 0; i < missingPatientIds.length; i += batchSize) {
                        const batch = missingPatientIds.slice(i, i + batchSize);
        
                        await Promise.all(
                            batch.map(async (patientId) => {
                                const patientResponse = await fetch(`${BASE_URL}/patient/${patientId}/payload`);
                                if (patientResponse.ok) {
                                    const patientRecord = await patientResponse.json();
                                    await DatabaseManager.addData("patientRecords", patientRecord);
                                }
                            })
                        );
        
                        console.log(`Processed batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(missingPatientIds.length / batchSize)}`);
                    }
        
                    return missingPatientIds.length; // Returns number of synced records
                } else {
                    await Promise.all(
                        remotePatientIds.map(async (patientId) => {
                            const patientResponse = await fetch(`${BASE_URL}/patient/${patientId}/payload`);
                            if (patientResponse.ok) {
                                const patientRecord = await patientResponse.json();
                                await DatabaseManager.addData("patientRecords", patientRecord);
                            }
                        })
                    );
                }
            }
        } catch (error) {
            console.error("Error syncing patient records:", error);
            return 0; // Return 0 synced records on failure
        }
    },

    async sharePatientRecords(batchSize = 50) {
        if (USEMODS == "false") {
            return
        }
        
        const patientRecords = await DatabaseManager.getOfflineData("patientRecords", { sync_status: "unsynced" });

        console.log("patientRecords", patientRecords);

        if (patientRecords) {
            // Process records in batches
            for (let i = 0; i < patientRecords.length; i += batchSize) {
                const batch = patientRecords.slice(i, i + batchSize);
                try {
                    // Send the entire batch as one payload
                    const response = await this.submitPayloadToExternalService(batch);

                    if (response) {
                        // Process the batch response
                        for (const record of response) {
                            if (record.hasChanges === true) {
                                const parsedRecord = record.record;
                                await DatabaseManager.overrideRecordExplicit('patientRecords', parsedRecord, parsedRecord.patientID);
                                if (record.id_to_remove) {
                                    await DatabaseManager.deleteRecord("patientRecords", { patientID: record.id_to_remove });
                                    self.postMessage({message:"update_stale_record", payload: parsedRecord, IDTR: record.id_to_remove});
                                }
                                
                                if (record.id_to_update == null) {
                                    self.postMessage({message:"update_stale_record", payload: record.record, IDTR: record.record.patientID, update: true});
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error processing batch ${Math.floor(i / batchSize) + 1}:`, error);
                }
            }
        }
    },

    async submitPatientRecord(record) {
        const response = await this.submitPayloadToExternalService(record);
        if (response) {
            if (response.hasChanges === true) {
                await DatabaseManager.overrideRecordExplicit('patientRecords', response.record, response.record.patientID);
            }
        }
    },


    async submitPayloadToExternalService(payload) {
        try {
            const BASE_URL = await getConnectonString();
            const isReachable = await checkNetworkConnectivity(BASE_URL);

            if (!isReachable) {
                throw new Error("Server is not reachable");
            }

            const response = await fetch(`${BASE_URL}/receive-payload`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error submitting payload:", error);
            // throw error;
        }
    },
};
