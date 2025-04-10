const WardsService = {
    async setOfflineWards() {
        let WardsData = await DatabaseManager.getOfflineData("wards");

        if (!WardsData) {
            WardsData = await this.getWardsData();

            if (WardsData.length > 0 && WardsData) {
                await DatabaseManager.overRideCollection("wards", WardsData);
            }
        }


        // if (!WardsData || TOTALS.total_facilities != WardsData.length) {
        //     WardsData = await this.getWardsData();

        //     if (WardsData.Wards.length > 0 && WardsData.Wards) {
        //         await DatabaseManager.overRideCollection("Wards", WardsData.Wards);
        //     }
        // }

        // if (WardsData.length === TOTALS.total_facilities) {
        //     self.postMessage({
        //         payload: {
        //             total_facilities: WardsData.length,
        //             total: TOTALS.total_facilities,
        //         },
        //     });
        // }
    },

    async getWardsData() {
        return await ApiService.getData("/locations?name=&tag=Facility adult sections&=");
    },
};
