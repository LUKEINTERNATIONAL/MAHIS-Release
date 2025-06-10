const BASE_URL = "http://0.0.0.0:3009";

const checkNetworkConnectivity = async (url) => {
    try {
        const response = await fetch(url, {
            method: "HEAD",
            mode: "no-cors",
        });
        return true;
    } catch (error) {
        console.error("Network connectivity check failed:", error);
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
                            DatabaseManager.overRideRecordRecord("patientRecords", data, { patientID: record.patientID });
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
            const isReachable = await checkNetworkConnectivity(BASE_URL);

            if (!isReachable) {
                throw new Error("Server is not reachable");
            }

            // Get remote patient IDs
            const response = await fetch(`${BASE_URL}/patient-ids`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const remotePatientIds = await response.json();

            // Get local patient records
            const localRecords = await DatabaseManager.getOfflineData("patientRecords");
            const localPatientIds = localRecords.map((record) => record.patientID.toString());

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
        } catch (error) {
            console.error("Error syncing patient records:", error);
            return 0; // Return 0 synced records on failure
        }
    },

    async sharePatientRecords(batchSize = 50) {
        const patientRecords = await DatabaseManager.getOfflineData("patientRecords", { encounter_datetime: { $ne: "" } });

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
                                const parsedRecord = JSON.parse(record.record);
                                await DatabaseManager.overRideRecordRecord("patientRecords", parsedRecord, {
                                    patientID: parsedRecord.patientID,
                                });
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
            // console.log("type of : ", typeof response);
            // console.log("Successfully submitted record:", JSON.parse(response.record).patientID);
            // console.log("type of : ", JSON.parse(response.record));
            if (response.hasChanges === true) {
                await DatabaseManager.overRideRecordRecord("patientRecords", JSON.parse(response.record), {
                    patientID: JSON.parse(response.record).patientID,
                });
            }
        }
    },

    async submitPayloadToExternalService(payload) {
        try {
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
