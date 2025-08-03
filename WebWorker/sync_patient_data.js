const BATCH_SIZE = 50; // Base batch size that will be adjusted dynamically
let dynamicBatchSize = BATCH_SIZE;
let isOnline = true;
let count = [];

// Retry configuration
const MAX_RETRY = 5;
const BASE_DELAY = 1000; // 1 second initial delay
const PROGRESS_UPDATE_INTERVAL = 1000; // ms
let lastProgressUpdate = 0;

// Setup connection monitoring
if (typeof navigator !== "undefined" && navigator.connection) {
    isOnline = navigator.onLine;

    // Listen for connection changes
    self.addEventListener("online", () => {
        isOnline = true;
        console.log("Connection restored, resuming sync");
    });

    self.addEventListener("offline", () => {
        isOnline = false;
        console.log("Connection lost, pausing sync");
    });
}

async function getProgram() {
    const data = await DatabaseManager.getOfflineData("activeProgramInContext");
    return data;
}

// Utility function for retryable API calls with exponential backoff
async function retryableApiCall(apiFunction, ...args) {
    let delay = BASE_DELAY;

    for (let attempt = 0; attempt <= MAX_RETRY; attempt++) {
        try {
            // Check for connectivity before making the request
            if (!isOnline) {
                await waitForConnection();
            }

            // Add a small random offset to prevent all clients hitting at once
            const jitter = Math.random() * 300;
            await new Promise((resolve) => setTimeout(resolve, attempt > 0 ? delay + jitter : 0));

            return await apiFunction(...args);
        } catch (error) {
            if (attempt === MAX_RETRY) throw error;

            // Check if it's a server overload error (status code 429 or 503)
            if (error.status === 429 || error.status === 503) {
                // Exponential backoff with jitter
                delay = Math.min(delay * 2, 30000); // Cap at 30 seconds
                console.warn(`Server busy, retrying in ${delay}ms (attempt ${attempt + 1})`);
            } else {
                throw error; // Other errors should fail immediately
            }
        }
    }
}

// Function to wait for connection restoration
async function waitForConnection() {
    return new Promise((resolve) => {
        const checkConnection = () => {
            if (isOnline) {
                resolve();
            } else {
                setTimeout(checkConnection, 5000);
            }
        };
        checkConnection();
    });
}

// Yield to main thread to prevent blocking
function yieldToMainThread() {
    return new Promise((resolve) => setTimeout(resolve, 0));
}

const syncPatientDataService = {
    pendingSyncUpdates: [],
    syncUpdateScheduled: false,

    async syncAllData() {
        try {
            if (USEMODS == "true") {
                // await patientService.setPatientCachedRecord();
                OfflineDataSyncWebsocketService.initWebsocket();
            } else {
                await patientService.savePatientRecord();
            }
            // for future iterlation
            // await patientService.sharePatientRecords();

            const services = [
                ddeService.setDDEIds(),
                testTypeService.setTestType(),
                specimenService.setSpecimen(),
                diagnosisService.setDiagnosis(),
                conceptNameService.setConceptName(),
                conceptSetService.setConceptSet(),
                relationshipsService.setOfflineRelationship(),
                DrugService.setOfflineDrugs(),
                LocationService.setOfflineLocation(),
                FacilityService.setOfflineFacilities(),
                WardsService.setOfflineWards(),
                visitsService.setOfflineVisits(),
                LDBStagesService.setStages(),
                visitsService.submitUnsavedVisitis(),
            ];

            services.push(stockService.setStock(), genericsService.setOfflineGenericVaccineSchedule(), this.getPatientData());

            // Execute services with controlled concurrency to avoid overwhelming resources
            await this.executeWithControlledConcurrency(services, 3);
        } catch (error) {
            console.error("Error in syncAllData:", error);
            throw error;
        }
    },

    // Execute promises with controlled concurrency
    async executeWithControlledConcurrency(promises, concurrency) {
        const results = [];
        let index = 0;

        async function executeNext() {
            if (index >= promises.length) return;
            const currentIndex = index++;
            try {
                results[currentIndex] = await promises[currentIndex];
            } catch (error) {
                console.error(`Error executing task ${currentIndex}:`, error);
                results[currentIndex] = null;
            }
            // Start next task
            await executeNext();
        }

        // Start initial batch of tasks
        const initialBatch = [];
        for (let i = 0; i < Math.min(concurrency, promises.length); i++) {
            initialBatch.push(executeNext());
        }

        // Wait for all tasks to complete
        await Promise.all(initialBatch);
        return results;
    },

    async getPatientData() {
        const latestRecord = await DatabaseManager.getOfflineData(
            "patientRecords",
            { sync_status: "" },
            {
                getLatest: true,
                orderBy: "encounter_datetime",
            }
        );
        try {
            let previousSyncDate = latestRecord?.encounter_datetime || "";
            let patientsData = await this.getPatientIds(previousSyncDate);

            if (!patientsData?.sync_patients) {
                console.warn("No patient data received");
                return;
            }

            // Use a buffer to batch save operations
            await this.processBatchWithBuffer(patientsData);

            // Process remaining pages in optimized batches
            if (patientsData.sync_count > dynamicBatchSize) {
                await this.processRemainingPagesInBatches(previousSyncDate, patientsData.server_patient_count);
            }
        } catch (error) {
            console.error("Error in getPatientData:", error);
            throw error;
        }
    },

    async handleDataReset() {
        await DatabaseManager.emptyCollection("patientRecords");
        this.updateProgressStatus(0, 0);
    },

    async processRemainingPagesInBatches(previousSyncDate, totalPatients, startPage = 2) {
        const initialEstimatedPages = Math.ceil((totalPatients - dynamicBatchSize) / dynamicBatchSize);
        let processedCount = startPage === 2 ? dynamicBatchSize : 0;
        let page = startPage;
        let latestDateOverall = null;

        // Update progress initially
        this.updateProgressStatus(await this.getLocalPatientCount(), totalPatients);

        // Process remaining pages one by one to be more responsive to changing conditions
        while (processedCount < totalPatients) {
            // Add a progressive delay based on server load and current user count
            await this.calculateProgressiveDelay(processedCount, totalPatients);

            try {
                let pageData = await this.getPatientIds(previousSyncDate, dynamicBatchSize, page);

                if (pageData?.sync_patients?.length > 0) {
                    await this.processBatchWithBuffer(pageData);
                    await this.updateSyncStatus(pageData.latest_encounter_datetime);
                    processedCount = await this.getLocalPatientCount();
                    // At the end of the function
                    if (processedCount === totalPatients) this.updateProgressStatus(processedCount, totalPatients, null, true);
                    this.updateProgressStatus(processedCount, totalPatients);
                } else {
                    previousSyncDate = "";
                    page = 0;
                }

                // Yield to main thread
                await yieldToMainThread();
                page++;
            } catch (error) {
                console.error(`Error processing page ${page}:`, error);
                // Wait before retrying
                await new Promise((resolve) => setTimeout(resolve, 5000));
            }
        }
    },

    // Add a progressive delay based on how far along we are in syncing
    async calculateProgressiveDelay(processedCount, totalPatients) {
        // More delay as we approach completion to let urgent requests go first
        const completionPercentage = processedCount / totalPatients;
        const baseDelay = 100; // 100ms base delay

        // Increase delay as we get further along in the process
        // This prioritizes initial data loading over completeness
        let delay = baseDelay;
        if (completionPercentage > 0.5) delay = baseDelay * 2;
        if (completionPercentage > 0.75) delay = baseDelay * 3;
        if (completionPercentage > 0.9) delay = baseDelay * 4;

        await new Promise((resolve) => setTimeout(resolve, delay));
    },

    // Implement a buffered save mechanism with bulk operations
    async processBatchWithBuffer(patientsData) {
        const buffer = [];
        const bufferSize = 20; // Adjust based on your needs

        for (const record of patientsData.sync_patients) {
            if (!record) continue;

            buffer.push({
                record: record,
            });

            if (buffer.length >= bufferSize) {
                await this.flushBuffer(buffer, patientsData);
                buffer.length = 0; // Clear buffer

                // Yield to main thread after each buffer flush
                await yieldToMainThread();
            }
        }

        // Flush remaining records
        if (buffer.length > 0) {
            await this.flushBuffer(buffer, patientsData);
        }
    },

    async flushBuffer(buffer, patientsData) {
        try {
            // Use bulk operations instead of individual operations
            const recordsToAdd = buffer.map((op) => op.record);
            const patientIDs = recordsToAdd.map((record) => record.patientID);

            // Check if DatabaseManager supports bulk operations
            if (typeof DatabaseManager.bulkDelete === "function" && typeof DatabaseManager.bulkAdd === "function") {
                // Use bulk operations
                await DatabaseManager.bulkDelete("patientRecords", patientIDs);
                await DatabaseManager.bulkAdd("patientRecords", recordsToAdd);
            } else {
                // Fallback to transaction-based approach
                await DatabaseManager.transaction("patientRecords", async (store) => {
                    for (const patientID of patientIDs) {
                        await store.delete({ patientID });
                    }
                    for (const record of recordsToAdd) {
                        await store.add(record);
                    }
                });
            }

            // Update progress with throttling
            const currentCount = await this.getLocalPatientCount();
            this.updateProgressStatus(currentCount, patientsData.server_patient_count, patientsData.latest_encounter_datetime);
        } catch (error) {
            console.error("Error in buffer flush:", error);
            throw error;
        }
    },

    updateProgressStatus(offlineCount, serverCount, lastSyncDate = null, forceUpdate = false) {
        const now = Date.now();
        if (forceUpdate || now - lastProgressUpdate > PROGRESS_UPDATE_INTERVAL) {
            lastProgressUpdate = now;
            self.postMessage({
                lastSyncDate,
                offlinePatientsCount: offlineCount,
                serverPatientsCount: serverCount,
            });
        }
    },

    async getLocalPatientCount() {
        const data = await DatabaseManager.getOfflineData("patientRecords", { location_id: LOCATIONID });
        return data?.length || 0;
    },

    async getPatientIds(previous_sync_date, page_size = dynamicBatchSize, page = 1) {
        const startTime = Date.now();
        try {
            const result = await retryableApiCall(ApiService.post.bind(ApiService), "/sync/patients_ids", {
                previous_sync_date,
                page,
                page_size,
            });
            await this.adjustBatchSize(startTime, true);
            return result;
        } catch (error) {
            await this.adjustBatchSize(startTime, false);
            throw error;
        }
    },

    // Adjust batch size based on response time
    async adjustBatchSize(startTime, success) {
        const responseTime = Date.now() - startTime;

        if (!success) {
            // If request failed, reduce batch size
            dynamicBatchSize = Math.max(10, Math.floor(dynamicBatchSize * 0.7));
            return;
        }

        // If response is fast, gradually increase batch size
        if (responseTime < 1000) {
            dynamicBatchSize = dynamicBatchSize >= 50 ? 50 : dynamicBatchSize;
        }
        // If response is slow, decrease batch size
        else if (responseTime > 3000) {
            dynamicBatchSize = dynamicBatchSize >= 50 ? 50 : dynamicBatchSize;
        }
    },

    async updateSyncStatus(latestEncounterDateTime) {
        // Add to pending updates
        this.pendingSyncUpdates.push(latestEncounterDateTime);

        // If no update is scheduled, schedule one
        if (!this.syncUpdateScheduled) {
            this.syncUpdateScheduled = true;
            setTimeout(() => this.processPendingSyncUpdates(), 5000);
        }
    },

    async processPendingSyncUpdates() {
        if (this.pendingSyncUpdates.length === 0) {
            this.syncUpdateScheduled = false;
            return;
        }

        // Get the latest date from all pending updates
        const latestDate = this.pendingSyncUpdates.sort().pop();
        this.pendingSyncUpdates = [];

        // Reset the scheduled flag
        this.syncUpdateScheduled = false;
    },
};

// Export the service
self.syncPatientDataService = syncPatientDataService;
