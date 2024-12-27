const relationshipsService = {
    async setOfflineRelationship() {
        let relationshipsData = await DatabaseManager.getOfflineData("relationship");
        if (!relationshipsData || TOTALS.total_relationships > relationshipsData.length) {
            relationshipsData = await ApiService.getData("/types/relationships", { paginate: false });
            if (relationshipsData && relationshipsData.length > 0) {
                await DatabaseManager.overRideCollection("relationship", relationshipsData);
            }
        }

        if (relationshipsData.length === TOTALS.total_relationships) {
            self.postMessage({
                payload: {
                    total_relationships: relationshipsData.length,
                    total: TOTALS.total_relationships,
                },
            });
        }
    },
};
