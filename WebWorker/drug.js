const DrugService = {
    async setOfflineDrugs() {
        let drugData = await DatabaseManager.getOfflineData("drugs");
        if (!drugData || TOTALS.total_OPD_drugs != drugData.length) {
            drugData = await this.getDrugs();

            if (drugData.length > 0 && drugData) {
                await DatabaseManager.overRideCollection("drugs", drugData);
            }
        }

        if (drugData.length === TOTALS.total_OPD_drugs) {
            self.postMessage({
                payload: {
                    total_OPD_drugs: drugData.length,
                    total: TOTALS.total_OPD_drugs,
                },
            });
        }
    },

    async getDrugs() {
        return await ApiService.getData("/OPD_drugslist", { name: "", page: 1, page_size: 40000 });
    },
};