import { io } from "socket.io-client";

class PatientWebSocketTest {
    constructor(serverUrl = "http://0.0.0.0:3009") {
        this.socket = io(serverUrl, {
            query: {
                deviceId: "device-" + Math.random().toString(36).substr(2, 9),
            },
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: 5,
        });

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.socket.on("connect", () => {
            console.log("Connected to WebSocket server");
            console.log("Socket ID:", this.socket.id);
        });

        this.socket.on("disconnect", () => {
            console.log("Disconnected from WebSocket server");
        });

        this.socket.on("patientDataChanged", (data) => {
            console.log("Received patient data update:", data);
        });

        this.socket.on("error", (error) => {
            console.error("WebSocket error:", error);
        });
    }

    async sendPatientUpdate(patientId, data) {
        return new Promise((resolve, reject) => {
            this.socket.emit(
                "syncPatientData",
                {
                    patientId,
                    updatedFields: data,
                    timestamp: new Date().toISOString(),
                },
                (acknowledgement) => {
                    if (acknowledgement?.success) {
                        resolve(acknowledgement);
                    } else {
                        reject(new Error("Failed to sync patient data"));
                    }
                }
            );
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

// Test usage example
async function runTest() {
    const wsTest = new PatientWebSocketTest();

    // Sample patient data
    const testPatient = {
        patientId: "12345",
        data: {
            name: "John Doe",
            age: 30,
            lastUpdate: new Date().toISOString(),
        },
    };

    try {
        // Wait for connection
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Send test data
        console.log("Sending patient update...");
        const result = await wsTest.sendPatientUpdate(testPatient.patientId, testPatient.data);
        console.log("Update sent successfully:", result);

        // Keep connection alive for a while to receive any responses
        await new Promise((resolve) => setTimeout(resolve, 5000));
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        wsTest.disconnect();
    }
}

// Run the test
runTest();
