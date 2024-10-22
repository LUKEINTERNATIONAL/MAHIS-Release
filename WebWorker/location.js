const LocationService = {
    async setOfflineLocation() {
        let districtsData = await DatabaseManager.getOfflineData("districts").then((data) => data?.[0]);
        if (!districtsData || districtsData.length !== 32) {
            districtsData = await this.getDistricts();
            await DatabaseManager.overRideRecord("districts", districtsData);
        }

        if (districtsData.length === 32) {
            self.postMessage({
                payload: {
                    total_districts: 32,
                    total: 32,
                },
            });
        }
        let TAsData = await DatabaseManager.getOfflineData("TAs").then((data) => data?.[0]);
        if (!TAsData || TOTALS.total_TA > TAsData.length) {
            TAsData = await this.getTAs();
            await DatabaseManager.overRideRecord("TAs", TAsData);
        }

        if (TAsData.length === TOTALS.total_TA) {
            self.postMessage({
                payload: {
                    total_TAs: TOTALS.total_TA,
                    total: TOTALS.total_TA,
                },
            });
        }
        const villagesData = await DatabaseManager.getOfflineData("villages").then((data) => data?.[0]);
        if (!villagesData || TOTALS.total_village > villagesData.length) {
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
            const villagesData = await DatabaseManager.getOfflineData("villages").then((data) => data?.[0]);
            if (villagesData && villagesData.length > 0) {
                page = parseInt(villagesData.length) / 500;
                page = parseInt(page);
                allVillage.push(...villagesData);
            }

            while (true) {
                const newVillages = await ApiService.getData("/villages", { page, page_size: pageSize });
                if (newVillages.length > 0) {
                    allVillage.push(...newVillages);
                    await DatabaseManager.overRideRecord("villages", allVillage);
                    self.postMessage({
                        payload: {
                            total_village: allVillage.length,
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
