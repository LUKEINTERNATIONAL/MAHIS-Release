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
    getCurrentDateFormatted(timeZone = "+02:00") {
        const now = new Date();

        // Pad single-digit values with leading zero
        const pad = (n) => n.toString().padStart(2, "0");

        // Extract date and time components
        const year = now.getFullYear();
        const month = pad(now.getMonth() + 1);
        const day = pad(now.getDate());
        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        const seconds = pad(now.getSeconds());

        // Construct the formatted date string
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timeZone}`;
    },
};
