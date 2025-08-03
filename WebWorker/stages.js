const LDBStagesService = {
    async setStages() {
        await this.createStages();
        try {
            let stagesData = await this.getStagesData();

            if (stagesData) {
                for (const stage of stagesData) {
                    if (!stage) return;
                    await DatabaseManager.deleteRecord("stages", { identifier: `${stage.identifier}` });
                    DatabaseManager.addData("stages", stage);
                }
            }
        } catch (error) {
            console.log("Error setting stages:", error);
        }
    },

    async getStagesData() {
        if (USEMODS == "true") {
            const BASE_URL = await getConnectonString();
            const response = await fetch(`${BASE_URL}/stages`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } else {
            return await ApiService.getData("/stages");
        }
    },

    async createStages() {
        const stagesData = await DatabaseManager.getOfflineData("stages", { sync_status: "pending" });
        if (stagesData && stagesData.length > 0) {
            ApiService.post("/stages", { stages: stagesData });
        }
    },
};
