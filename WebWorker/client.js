const ApiService = {
    headers() {
        return {
            Authorization: APIKEY,
            "Content-Type": "application/json",
        };
    },
    async execFetch(url, params = {}) {
        const fullUrl = `${APIURL}${url}`;

        params = { mode: "cors", ...params };
        if (!params.headers) {
            params.headers = this.headers();
        }

        try {
            const response = await fetch(fullUrl, params);

            const responseText = await response.text(); // Get raw response text

            this.handleUnauthorized(response.statusText);

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // Only try to parse if we have content
            if (!responseText) {
                return null; // or whatever default value makes sense
            }

            // Now try to parse the text as JSON
            const jsonData = JSON.parse(responseText);
            return jsonData;
        } catch (error) {
            console.error(`Fetch Error: ${error.message}`);
            console.error("Full error:", error);

            if (error.message.match(/NetworkError|Failed to fetch/i)) {
                console.warn("Network error occurred.");
            }

            throw error;
        }
    },
    handleUnauthorized(response) {
        if (response == "Unauthorized") {
            localStorage.setItem("apiKey", "");
        }
    },

    async get(uri) {
        return await this.execFetch(uri, { method: "GET" });
    },

    async post(uri, data) {
        return this.execFetch(uri, {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    async remove(uri, data) {
        return this.execFetch(uri, {
            method: "DELETE",
            body: JSON.stringify(data),
        });
    },

    async put(uri, data) {
        return this.execFetch(uri, {
            method: "PUT",
            body: JSON.stringify(data),
        });
    },

    async healthCheck() {
        return this.get("_health");
    },

    buildUrl(url, params) {
        return `${url}?${this.parameterizeObjToString(params)}`;
    },

    parameterizeObjToString(obj) {
        return Object.entries(obj)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&");
    },
    async getTotals() {
        return await this.getData("/totals", { paginate: false });
    },
    async getData(url, params = {}) {
        return await this.get(this.buildUrl(url, params));
    },
};
