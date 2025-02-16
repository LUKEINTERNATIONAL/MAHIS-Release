const specimenService = {
    async setSpecimen() {
        const specimenData = await DatabaseManager.getOfflineData("specimens");
        if (specimenData && specimenData?.length == TOTALS.total_specimens) {
            return specimenData;
        }
        const totalPages = Math.ceil(TOTALS.total_specimens / 500);
        const allRecords = [];
        for (let i = 1; i <= totalPages; i++) {
            const specimens = await ApiService.getData("/lab/specimen_types", {
                page: i,
                page_size: 500,
            });
            allRecords.push(...specimens);
        }

        if (allRecords && Object.keys(allRecords).length > 0) {
            await DatabaseManager.overRideCollection("specimens", allRecords);
        }
    },
};
