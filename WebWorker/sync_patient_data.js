const BATCH_SIZE = 50; // Increased batch size for better performance
let count = [];

const syncPatientDataService = {
    async syncAllData() {
        await patientService.savePatientRecord();
        await Promise.all([
            ddeService.setDDEIds(),
            stockService.setStock(),
            conceptNameService.setConceptName(),
            conceptSetService.setConceptSet(),
            relationshipsService.setOfflineRelationship(),
            genericsService.setOfflineGenericVaccineSchedule(),
            LocationService.setOfflineLocation(),
            this.getPatientData(),
        ]);
    },
    async getPatientData() {
        try {
            let previousSyncDate = await previousSyncService.getPreviousSyncDate();
            let patientsData = await this.getPatientIds(previousSyncDate);

            if (!patientsData?.sync_patients) {
                console.warn("No patient data received");
                return;
            }

            // Use a buffer to batch save operations
            await this.processBatchWithBuffer(patientsData);
            await this.updateSyncStatus(patientsData.latest_encounter_datetime);
            // Process remaining pages in optimized batches
            if (patientsData.sync_count > BATCH_SIZE) {
                await this.processRemainingPagesInBatches(previousSyncDate, patientsData.sync_count);
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

    async processRemainingPagesInBatches(previousSyncDate, totalPatients) {
        const totalPages = Math.ceil((totalPatients - BATCH_SIZE) / BATCH_SIZE);
        const batchSize = 5; // Number of concurrent page requests

        for (let i = 0; i < totalPages; i += batchSize) {
            const pagePromises = [];
            for (let j = 0; j < batchSize && i + j < totalPages; j++) {
                const page = i + j + 2; // +2 because we already processed page 1
                pagePromises.push(this.processPage(previousSyncDate, page));
            }
            const dates = await Promise.all(pagePromises);
            const latestDate = dates.sort().pop();
            if (latestDate) await this.updateSyncStatus(latestDate);
        }
    },

    async processPage(previousSyncDate, page) {
        try {
            const pageData = await this.getPatientIds(previousSyncDate, BATCH_SIZE, page);
            if (pageData?.sync_patients?.length) {
                await this.processBatchWithBuffer(pageData);
                return pageData.latest_encounter_datetime;
            }
        } catch (error) {
            console.error(`Error processing page ${page}:`, error);
            // Consider implementing retry logic here
        }
    },

    // Implement a buffered save mechanism
    async processBatchWithBuffer(patientsData) {
        const buffer = [];
        const bufferSize = 20; // Adjust based on your needs

        for (const record of patientsData.sync_patients) {
            if (!record) continue;

            buffer.push({
                delete: () => DatabaseManager.deleteRecord("patientRecords", { patientID: record.patientID }),
                add: () => DatabaseManager.addData("patientRecords", record),
            });

            if (buffer.length >= bufferSize) {
                await this.flushBuffer(buffer, patientsData);
                buffer.length = 0; // Clear buffer
            }
        }

        // Flush remaining records
        if (buffer.length > 0) {
            await this.flushBuffer(buffer, patientsData);
        }
    },

    async flushBuffer(buffer, patientsData) {
        try {
            // Execute all deletes first
            await Promise.all(buffer.map((op) => op.delete()));
            // Then execute all adds
            await Promise.all(buffer.map((op) => op.add()));
            // Update progress after each buffer flush
            const currentCount = await this.getLocalPatientCount();
            this.updateProgressStatus(currentCount, patientsData.server_patient_count, patientsData.latest_encounter_datetime);
        } catch (error) {
            console.error("Error in buffer flush:", error);
            throw error;
        }
    },

    updateProgressStatus(offlineCount, serverCount, lastSyncDate = null) {
        self.postMessage({
            lastSyncDate,
            offlinePatientsCount: offlineCount,
            serverPatientsCount: serverCount,
        });
    },

    async getLocalPatientCount() {
        const data = await DatabaseManager.getOfflineData("patientRecords");
        return data?.length || 0;
    },

    async getPatientIds(previous_sync_date, page_size = BATCH_SIZE, page = 1) {
        return await ApiService.post("/sync/patients_ids", {
            previous_sync_date,
            page,
            page_size,
        });
    },

    async updateSyncStatus(latestEncounterDateTime) {
        console.log("🚀 ~ updateSyncStatus ~ latestEncounterDateTime:", latestEncounterDateTime);
        await previousSyncService.setPreviousSyncDate(latestEncounterDateTime);
    },
};
