const stockService = {
    async setStock() {
        const stockData = await DatabaseManager.getOfflineData("stock");
        // if (!stockData) {
        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0];
        const stock = await ApiService.getData("pharmacy/items", {
            start_date: "2000-01-01",
            end_date: formattedDate,
            paginate: false,
        });
        await DatabaseManager.overRideRecord("stock", {
            stock: stock,
        });
        return stock;
        // } else {
        //     return stockData[0].stock;
        // }
    },
};
