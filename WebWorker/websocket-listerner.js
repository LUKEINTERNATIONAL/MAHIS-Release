const getConnectionString = async () => {
    const connection_strings = await DatabaseManager.getOfflineData("offlineConnectionString");
    return connection_strings[0].connection_string;
};

// APPROACH 1: Simple Connection Manager (Recommended for most cases)
class SocketManager {
    constructor() {
        this.socket = null;
        this.BASE_URL = null;
        this.connectionPromise = null;
        this.isConnecting = false;
    }

    async ensureConnection() {
        // If already connected, return immediately
        if (this.socket && this.socket.connected) {
            return this.socket;
        }

        // If currently connecting, wait for that promise
        if (this.isConnecting && this.connectionPromise) {
            return this.connectionPromise;
        }

        // Start new connection
        this.connectionPromise = this.initializeConnection();
        return this.connectionPromise;
    }

    async initializeConnection() {
        try {
            this.isConnecting = true;

            // Clean up existing socket
            if (this.socket) {
                this.socket.removeAllListeners();
                this.socket.disconnect();
            }

            this.BASE_URL = await getConnectionString();
            const finalServerUrl = this.BASE_URL || "http://0.0.0.0:3002";
                         
            this.socket = io(`${finalServerUrl}`, {
                query: {
                    deviceId: "device-" + Math.random().toString(36).substr(2, 9),
                },
                reconnection: true,
                reconnectionDelay: 1000,
                reconnectionAttempts: 5,
                autoConnect: true,
            });

            this.setupEventListeners();
            
            // Wait for connection to be established
            await new Promise((resolve, reject) => {
                this.socket.on('connect', resolve);
                this.socket.on('connect_error', reject);
                
                // Timeout after 10 seconds
                setTimeout(() => reject(new Error('Connection timeout')), 10000);
            });


            console.log('Socket connected successfully');
            return this.socket;

        } catch (error) {
            console.error("Failed to initialize connection:", error);
            throw error;
        } finally {
            this.isConnecting = false;
        }
    }

    setupEventListeners() {
        this.socket.on("connect", () => {
            console.log("Connected to WebSocket server");
            console.log("Socket ID:", this.socket.id);
        });

        this.socket.on("disconnect", () => {
            console.log("Disconnected from WebSocket server");
        });

        this.socket.on("patientDataChanged", async (record) => {
            console.log("Received patient data update from MODS:", record);

            try {
                const parsedRecord = record.payload;
                await DatabaseManager.overrideRecordExplicit('patientRecords', parsedRecord, parsedRecord.patientID);  
            } catch (error) {
                console.error("Error processing patient data update:", error);
            }
        });

        this.socket.on("error", (error) => {
            console.error("WebSocket error:", error);
        });
    }

    // Usage: await socketManager.ensureConnection() before any socket operation
}

const OfflineDataSyncWebsocketService = { 
    initWebsocket() {
        const robustManager = new SocketManager();
        robustManager.ensureConnection()
            .then(() => {
                console.log("WebSocket connection established successfully");
            })
            .catch((error) => {
                console.error("Failed to establish WebSocket connection:", error);
            });
    }
}