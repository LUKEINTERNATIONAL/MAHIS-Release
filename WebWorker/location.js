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
        const totalOfflineVillages = villagesData?.length || 0;
        if (!villagesData || TOTALS.total_village != totalOfflineVillages) {
            await this.getVillages(totalOfflineVillages);
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

    async getVillages(totalOfflineVillages) {
        const pageSize = 1000;
        const batchSize = 50;
        let totalFetched = 0;
        let pages = Math.ceil(TOTALS.total_village / 1000);
        let page = 1;
        if (totalOfflineVillages >= 1000) {
            page = Math.floor(totalOfflineVillages / 1000) + 1;
        }
        try {
            for (page; page <= pages; page++) {
                const response = await ApiService.getData("/villages", {
                    page,
                    page_size: pageSize,
                });

                if (!response || response.length === 0) {
                    break;
                }

                // Process records in batches
                for (let i = 0; i < response.length; i += batchSize) {
                    const batch = response.slice(i, i + batchSize);

                    // Process batch concurrently
                    try {
                        await Promise.all(batch.map((village) => DatabaseManager.addData("villages", village)));
                    } catch (error) {}

                    totalFetched += batch.length;

                    // Send progress update
                    self.postMessage({
                        type: "progress",
                        payload: {
                            status: "processing",
                            total_village: totalOfflineVillages + totalFetched,
                            total: TOTALS.total_village,
                            current_page: page,
                            percentage: Math.round((totalFetched / TOTALS.total_village) * 100),
                        },
                    });
                }
            }

            return totalFetched;
        } catch (error) {
            console.error("Error fetching villages:", error);
        }
    },
};
