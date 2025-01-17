// Connection state management
let healthCheckInterval = null;
let isReconnecting = false;
const HEALTH_CHECK_INTERVAL = 2500;
const INITIAL_RETRY_DELAY = 1000; // Start with 1 second
const MAX_RETRY_DELAY = 30000; // Max 30 seconds between retries

const ApiService = {
    headers() {
        return {
            Authorization: APIKEY,
            "Content-Type": "application/json",
        };
    },

    stopHealthCheck() {
        if (healthCheckInterval) {
            clearInterval(healthCheckInterval);
            healthCheckInterval = null;
            isReconnecting = false;
        }
    },

    async startHealthCheck() {
        if (!healthCheckInterval && !isReconnecting) {
            isReconnecting = true;
            let retryDelay = INITIAL_RETRY_DELAY;

            const attemptReconnection = async () => {
                try {
                    await this.healthCheck();
                    console.log("Connection restored!");
                    this.stopHealthCheck();
                    await syncPatientDataService.syncAllData();
                    return true;
                } catch (error) {
                    console.warn("Health check failed, retrying...", error);
                    // Increase delay exponentially but cap it
                    retryDelay = Math.min(retryDelay * 1.5, MAX_RETRY_DELAY);
                    return false;
                }
            };

            // Initial attempt
            if (!(await attemptReconnection())) {
                // If initial attempt fails, start interval
                healthCheckInterval = setInterval(async () => {
                    await attemptReconnection();
                }, retryDelay);
            }
        }
    },

    async execFetch(url, params = {}) {
        const fullUrl = `${APIURL}${url}`;

        params = { mode: "cors", ...params };
        if (!params.headers) {
            params.headers = this.headers();
        }

        try {
            const response = await fetch(fullUrl, params);
            const responseText = await response.text();

            this.handleUnauthorized(response.statusText);

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // Stop health check if request succeeds
            this.stopHealthCheck();

            if (!responseText) {
                return null;
            }

            return JSON.parse(responseText);
        } catch (error) {
            const isNetworkError = error.message.match(/NetworkError|Failed to fetch/i);
            if (isNetworkError) {
                console.warn("Network error occurred, starting continuous retry...");
                await this.startHealthCheck();
            }

            throw error;
        }
    },

    handleUnauthorized(response) {
        if (response === "Unauthorized") {
            localStorage.setItem("apiKey", "");
            this.stopHealthCheck(); // Stop health check on unauthorized
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
