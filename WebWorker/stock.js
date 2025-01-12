const stockService = {
    async setStock() {
        const stockData = await DatabaseManager.getOfflineData("stock");
        const endDate = await previousSyncService.getCurrentDateFormatted();
        let startDate = "2000-01-01";
        let date_changed = "2000-01-01";
        if (stockData) {
            const originalDate = new Date(stockData[0]?.latest_date_changed);
            const previousDate = new Date(originalDate);
            previousDate.setDate(originalDate.getDate() - 1);
            date_changed = previousDate.toISOString().slice(0, 19) + previousDate.toISOString().slice(23);
        }
        let stocks = [];
        try {
            stocks = await ApiService.getData("pharmacy/items", {
                start_date: startDate,
                end_date: endDate,
                date_changed: date_changed,
                paginate: false,
            });
        } catch (error) {}
        if (stocks.length > 0) {
            await Promise.all(
                stocks.map(async (stock) => {
                    this.updateStock(stock);
                })
            );
        }
    },
    updateStock(data) {
        DatabaseManager.deleteRecord("stock", { id: data.id });
        DatabaseManager.addData("stock", data);
    },
};
