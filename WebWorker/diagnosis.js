const diagnosisService = {
    async setDiagnosis() {
        const diagnosisData = await DatabaseManager.getOfflineData("diagnosis");
        if (diagnosisData && diagnosisData?.length == TOTALS.total_diagnosis) {
            return diagnosisData;
        }
        const totalPages = Math.ceil(TOTALS.total_diagnosis / 500);
        const allRecords = [];
        for (let i = 1; i <= totalPages; i++) {
            const diagnosis = await ApiService.getData("diagnosis", {
                id: 7409, //Qech outpatient diagnosis list
                page: i,
                page_size: 500,
            });
            allRecords.push(...diagnosis);
        }
        console.log("🚀 ~ setDiagnosis ~ allRecords:", allRecords);

        if (allRecords && Object.keys(allRecords).length > 0) {
            await DatabaseManager.overRideCollection("diagnosis", allRecords);
        }
    },
};
