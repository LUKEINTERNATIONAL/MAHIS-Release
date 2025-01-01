const LocationService = {
    async setOfflineLocation() {
        let countryData = await DatabaseManager.getOfflineData("countries");
        if (!countryData || countryData.length !== 257) {
            countryData = await this.getCountries();
            await DatabaseManager.overRideCollection("countries", countryData);
        }

        if (countryData.length === 257) {
            self.postMessage({
                payload: {
                    total_countries: 257,
                    total: 257,
                },
            });
        }
        let districtsData = await DatabaseManager.getOfflineData("districts");
        if (!districtsData || districtsData.length !== 32) {
            districtsData = await this.getDistricts();
            await DatabaseManager.overRideCollection("districts", districtsData);
        }

        if (districtsData.length === 32) {
            self.postMessage({
                payload: {
                    total_districts: 32,
                    total: 32,
                },
            });
        }
        let TAsData = await DatabaseManager.getOfflineData("TAs");
        if (!TAsData || TOTALS.total_TA != TAsData.length) {
            TAsData = await this.getTAs();
            await DatabaseManager.overRideCollection("TAs", TAsData);
        }

        if (TAsData.length === TOTALS.total_TA) {
            self.postMessage({
                payload: {
                    total_TAs: TOTALS.total_TA,
                    total: TOTALS.total_TA,
                },
            });
        }
        const villagesData = await DatabaseManager.getOfflineData("villages");
        if (!villagesData || TOTALS.total_village != villagesData.length) {
            await this.getVillages();
        } else {
            self.postMessage({
                payload: {
                    total_village: TOTALS.total_village,
                    total: TOTALS.total_village,
                },
            });
        }
    },
    async getCountries() {
        return await ApiService.getData("/districts", { region_id: 4, paginate: false });
    },
    async getDistricts() {
        let districtList = [];
        for (let i of [1, 2, 3]) {
            const districts = await ApiService.getData("/districts", { region_id: i, page_size: 1000 });
            districtList.push(...districts);
        }
        return districtList;
    },

    async getTAs() {
        return await ApiService.getData("/traditional_authorities", { paginate: false });
    },

    async getVillages() {
        try {
            const allVillage = [];
            let page = 1;
            let pageSize = 500;
            const villagesData = await DatabaseManager.getOfflineData("villages");
            if (villagesData && villagesData.length > 0) {
                page = parseInt(villagesData.length) / 500;
                page = parseInt(page);
                allVillage.push(...villagesData);
            }

            while (true) {
                const newVillages = await ApiService.getData("/villages", { page, page_size: pageSize });
                if (newVillages.length > 0) {
                    allVillage.push(...newVillages);
                    await DatabaseManager.overRideCollection("villages", allVillage);
                    let total_village = allVillage.length;
                    if (allVillage.length > TOTALS.total_village) {
                        total_village = TOTALS.total_village;
                    }
                    self.postMessage({
                        payload: {
                            total_village: total_village,
                            total: TOTALS.total_village,
                        },
                    });
                    page++;
                } else {
                    break;
                }
            }
            return allVillage;
        } catch (error) {
            console.error("Error fetching villages:", error);
            return [];
        }
    },
};
