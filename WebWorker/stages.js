const LDBStagesService = {
    async setStages() {
        await this.createStages();
        try {
            let stagesData = await this.getStagesData();

            // console.log("Stages data fetched:", stagesData);

            if (stagesData) {
                for (const stage of stagesData) {
                    DatabaseManager.deleteRecord("stages", { identifier: stage.identifier });
                    if (!stage) return;
                    // await DatabaseManager.deleteRecord("stages", { id: `${stage.id}` });
                    DatabaseManager.addData("stages", stage);
                }
            }
        } catch (error) {
            console.log("Error setting stages:", error);
        }
    },

    async getStagesData() {
        if (USEMODS == "true") {
            const BASE_URL = await getConnectionString();
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
        if (stagesData && stagesData.length > 0 && USEMODS == "false") {
            ApiService.post("/stages", { stages: stagesData });
        }
    },
};
