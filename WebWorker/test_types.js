const testTypeService = {
    async setTestType() {
        const testTypesData = await DatabaseManager.getOfflineData("testTypes");
        if (testTypesData && testTypesData?.length == TOTALS.total_test_types) {
            return testTypesData;
        }
        const totalPages = Math.ceil(TOTALS.total_test_types / 500);
        const allRecords = [];
        for (let i = 1; i <= totalPages; i++) {
            const testTypes = await ApiService.getData("/get_test_types", {
                page: i,
                page_size: 500,
            });
            allRecords.push(...testTypes);
        }

        if (allRecords && Object.keys(allRecords).length > 0) {
            await DatabaseManager.overRideCollection("testTypes", allRecords);
        }
    },
};
