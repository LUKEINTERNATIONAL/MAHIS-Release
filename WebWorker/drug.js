const DrugService = {
    async setOfflineDrugs() {
        let drugData = await DatabaseManager.getOfflineData("drugs");
        if (!drugData) {
            drugData = await this.getDrugs();
            await DatabaseManager.overRideCollection("drugs", drugData);
        }
    },

    async getDrugs() {
        return await ApiService.getData("/OPD_drugslist", { name: "", page: 1, page_size: 40000 });
    },
};