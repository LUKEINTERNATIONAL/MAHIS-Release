const patientService = {
    async savePatientRecord() {
        const patientRecords = await DatabaseManager.getOfflineData("patientRecords", { encounter_datetime: { $ne: "" } });
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
    },
};
