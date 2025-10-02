const conceptNameService = {
    async setConceptName() {
        const conceptNameData = await DatabaseManager.getOfflineData("conceptNames");
        if (conceptNameData && conceptNameData?.length == TOTALS.total_concept_names) {
            return conceptNameData;
        }
        const totalPages = Math.ceil(TOTALS.total_concept_names / 500);
        const allRecords = [];
        for (let i = 1; i <= totalPages; i++) {
            const conceptName = await ApiService.getData("/concept_names", {
                page_size: 500,
                page: i,
            });
            allRecords.push(...conceptName);
        }

        if (allRecords && Object.keys(allRecords).length > 0) {
            await DatabaseManager.overRideCollection("conceptNames", allRecords);
        }
    },
};
