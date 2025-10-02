const FacilityService = {
    async setOfflineFacilities() {
        let facilitiesData = await DatabaseManager.getOfflineData("facilities");
        if (!facilitiesData || TOTALS.total_facilities != facilitiesData.length) {
            facilitiesData = await this.getFacilitiesData();

            if (facilitiesData.facilities.length > 0 && facilitiesData.facilities) {
                await DatabaseManager.overRideCollection("facilities", facilitiesData.facilities);
            }
        }

        if (facilitiesData.length === TOTALS.total_facilities) {
            self.postMessage({
                payload: {
                    total_facilities: facilitiesData.length,
                    total: TOTALS.total_facilities,
                },
            });
        }
    },

    async getFacilitiesData() {
        return await ApiService.getData("/facilities");
    },
};
