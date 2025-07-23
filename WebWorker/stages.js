const LDBStagesService = {
    async setStages() {
        try {
            let stagesData = await this.getStagesData();

            if (stagesData) {
                stagesData.forEach(async (stage) => {
                    if (stage) return;
                    DatabaseManager.deleteRecord("stages", { id: stage.id });
                    DatabaseManager.addData("stages", data);
                });
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
            return await ApiService.getData("/stages/active_stages");
        }
    },
};
