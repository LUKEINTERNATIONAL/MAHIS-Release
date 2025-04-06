const testTypeService = {
    async setTestType() {
        const testTypesData = await DatabaseManager.getOfflineData("testTypes");
        if (testTypesData && testTypesData?.length == TOTALS.total_test_types) {
            await this.testIndicators(testTypesData);
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
        await this.testIndicators(allRecords);
    },
    async testIndicators(allRecords) {
        const testTypesData = await DatabaseManager.getOfflineData("testResultIndicators");
        if (testTypesData && testTypesData?.length > 0) {
            return testTypesData;
        } else {
            const allIndicators = [];
            for (let i = 0; i <= allRecords.length; i++) {
                try {
                    const testResultIndicators = await ApiService.getData(`lab/test_result_indicators`, {
                        test_type_id: allRecords[i]?.concept_id,
                    });
                    testResultIndicators.map((data) => {
                        return (data.test_type_id = allRecords[i]?.concept_id);
                    });
                    allIndicators.push(...testResultIndicators);
                } catch (error) {
                    console.log(error);
                }
            }
            if (allIndicators && Object.keys(allIndicators).length > 0) {
                await DatabaseManager.overRideCollection("testResultIndicators", allIndicators);
            }
        }
    },
};
