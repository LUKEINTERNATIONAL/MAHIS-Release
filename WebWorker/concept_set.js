const conceptSetService = {
    async setConceptSet() {
        const conceptSetData = await DatabaseManager.getOfflineData("conceptSets");
        if (conceptSetData && conceptSetData.length == TOTALS.total_concept_set) {
            return conceptSetData;
        }

        const conceptSet = await ApiService.getData("/concept_sets_ids", {
            page_size: TOTALS.total_concept_set,
        });

        if (conceptSet && Object.keys(conceptSet).length > 0) {
            await DatabaseManager.overRideCollection("conceptSets", conceptSet);
        }
    },
};
