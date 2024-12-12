const stockService = {
    async setStock() {
        const stockData = await DatabaseManager.getOfflineData("stock");
        const endDate = await previousSyncService.getCurrentDateFormatted();
        let startDate = "2000-01-01";
        if (stockData) {
            startDate = stockData[0]?.latest_date_changed;
        }
        let stocks = [];
        try {
            stocks = await ApiService.getData("pharmacy/items", {
                start_date: startDate,
                end_date: endDate,
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
