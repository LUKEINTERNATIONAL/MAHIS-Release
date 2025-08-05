// start common code
importScripts(
    "db.js",
    "client.js",
    "location.js",
    "patient.js",
    "program.js",
    "relationships.js",
    "sync_patient_data.js",
    "dde.js",
    "generics.js",
    "generic_vaccine_schedule.js",
    "stock.js",
    "concept_name.js",
    "concept_set.js",
    "diagnosis.js",
    "specimens.js",
    "test_types.js",
    "drug.js",
    "facility.js",
    "wards.js",
    "socket.io.min.js",
    "websocket-listerner.js",
    "opd_visits.js",
    "stages.js"
);

// Global vars
let APIURL = "";
let APIKEY = "";
let APISTATUS = "";
let TOTALS = "";
let USERID = "";
let PROGRAMID = "";
let DATE = "";
let USEMODS = "";
let STORE_CACHE_RECORDS = "";

// Queue only for SYNC_ALL_DATA
const syncQueue = [];
let isSyncing = false;

function enqueueSync(event) {
    syncQueue.push(event);
    processSyncQueue();
}

async function processSyncQueue() {
    if (isSyncing || syncQueue.length === 0) return;

    isSyncing = true;
    const event = syncQueue.shift();
    await handleMessage(event);
    isSyncing = false;

    processSyncQueue(); // Process next in queue
}

// Message handler
self.onmessage = (event) => {
    if (event.data.type === "SYNC_ALL_DATA") {
        enqueueSync(event);
    } else {
        handleMessage(event); // Run other messages immediately
    }
};

// Main handler
async function handleMessage(event) {
    const { type, url, apiKey, userId, locationId, programId, totals, date, payload, apiStatus, useMODS, storeCachedRecords } = event.data;

    USERID = userId;
    LOCATIONID = locationId;
    PROGRAMID = programId;
    DATE = date;
    APIURL = url;
    APIKEY = apiKey;
    APISTATUS = apiStatus;
    TOTALS = JSON.parse(totals);
    USEMODS = useMODS;
    STORE_CACHE_RECORDS = storeCachedRecords;

    await DatabaseManager.openDatabase();

    try {
        switch (type) {
            case "SYNC_ALL_DATA":
                try {
                    if (USEMODS == "true") {
                        await patientService.sharePatientRecords();
                        OfflineDataSyncWebsocketService.initWebsocket();
                    }

                    await syncPatientDataService.syncAllData();
                    console.log("SYNC_ALL_DATA ~ storeName:", type);
                    self.postMessage("Done syncing all data");
                } catch (error) {
                    console.log("SYNC_ALL_DATA ~ error:", error);
                }
                break;

            case "SET_OFFLINE_PROGRAMS":
                try {
                    self.postMessage({ payload: await programService.setOfflinePrograms() });
                    console.log("SET_OFFLINE_PROGRAMS ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_PROGRAMS ~ error:", error);
                }
                break;

            case "DELETE_RECORD":
                try {
                    await DatabaseManager.deleteRecord(payload.storeName, payload.whereClause);
                    console.log("DELETE_RECORD ~ storeName:", payload.storeName);
                } catch (error) {
                    console.log("DELETE_RECORD ~ error:" + payload.storeName, error);
                }
                break;

            case "ADD_OBJECT_STORE":
                try {
                    await DatabaseManager.addData(payload.storeName, payload.data);
                    console.log("ADD_OBJECT_STORE ~ payload:", payload.storeName);
                    self.postMessage("ADD-" + payload.storeName);
                } catch (error) {
                    console.log("ADD_OBJECT_STORE ~ error:" + payload.storeName, error);
                }
                break;

            case "OVERRIDE_OBJECT_STORE":
                try {
                    await DatabaseManager.overRideCollection(payload.storeName, payload.data);
                    console.log("OVERRIDE_OBJECT_STORE ~ payload:", payload.storeName);
                } catch (error) {
                    console.log("OVERRIDE_OBJECT_STORE ~ error:", error);
                }
                break;

            case "UPDATE_RECORD":
                try {
                    await DatabaseManager.updateRecord(payload.storeName, payload.whereClause, payload.data);
                    console.log("UPDATE_RECORD ~ storeName:", type);
                } catch (error) {
                    console.log("UPDATE_RECORD ~ error:", error);
                }
                break;

            case "SAVE_PATIENT_RECORD":
                try {
                    self.postMessage("");
                    if (USEMODS == "true") {
                        await patientService.sharePatientRecords();
                    } else {
                        await patientService.savePatientRecord();
                    }
                    self.postMessage("Done saving data");
                    console.log("SAVE_PATIENT_RECORD ~ storeName:", type);
                } catch (error) {
                    console.log("SAVE_PATIENT_RECORD ~ error:", error);
                }
                break;

            case "SYNC_STOCK_RECORD":
                try {
                    await stockService.setStock();
                    const stockData = await DatabaseManager.getOfflineData("stock");
                    self.postMessage({ payload: stockData });
                    console.log("SYNC_STOCK_RECORD ~ storeName:", type);
                } catch (error) {
                    console.log("SYNC_STOCK_RECORD ~ error:", error);
                }
                break;
        }
    } catch (error) {
        console.log("Error Offline database initialization: " + error);
    }
}
