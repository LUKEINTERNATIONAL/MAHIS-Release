const previousSyncService = {
    async setPreviousSyncDate(date) {
        const data = {
            name: "previousSyncDate",
            previousSyncDate: date,
        };
        DatabaseManager.deleteRecord("generics", { name: "previousSyncDate" });
        DatabaseManager.addData("generics", data);
    },
    async getPreviousSyncDate() {
        const data = await DatabaseManager.getOfflineData("generics", { name: "previousSyncDate" }).then((data) => data?.[0]);
        if (data) return data.previousSyncDate;
        else return "";
    },
};
