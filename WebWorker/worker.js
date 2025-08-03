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

let APIURL = "";
let APIKEY = "";
let APISTATUS = "";
let TOTALS = "";
let USERID = "";
let PROGRAMID = "";
let DATE = "";
let USEMODS = "";
let STORE_CACHE_RECORDS = "";

/**********************************************************************
 **********************************************************************
                            Web worker                                                       
 **********************************************************************
 **********************************************************************/
self.onmessage = async (event) => {
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
            case "SYNC":
                try {
                    await syncPatientDataService.syncAllData();
                    console.log("SYNC ~ storeName:", type);
                } catch (error) {
                    console.log("SYNC ~ error:", error);
                }
                break;
            case "SYNC_ALL_DATA":
                try {
                    if (USEMODS == "true") {
                        await patientService.sharePatientRecords();
                        OfflineDataSyncWebsocketService.initWebsocket();
                        await syncPatientDataService.syncAllData();
                        console.log("USEMODS SYNC_ALL_DATA ~ storeName:", type);
                    } if (USEMODS == "false") {
                        await syncPatientDataService.syncAllData();
                        console.log("SYNC_ALL_DATA ~ storeName:", type);
                    }
                    self.postMessage("Done syncing all data");
                } catch (error) {
                    console.log("SYNC_ALL_DATA ~ error:", error);
                }
                break;
            case "SET_OFFLINE_LOCATION":
                try {
                    await LocationService.setOfflineLocation();
                    console.log("SET_OFFLINE_LOCATION ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_LOCATION ~ error:", error);
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
            case "SET_OFFLINE_RELATIONSHIPS":
                try {
                    await relationshipsService.setOfflineRelationship();
                    console.log("SET_OFFLINE_RELATIONSHIPS ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_RELATIONSHIPS ~ error:", error);
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
                    } if (USEMODS == "false") {
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
            case "SYNC_DDE":
                try {
                    await ddeService.setDDEIds();
                    console.log("SYNC_DDE ~ storeName:", type);
                    self.postMessage("Done");
                } catch (error) {
                    console.log("SYNC_DDE ~ error:", error);
                }
                break;
            case "SET_OFFLINE_DRUG":
                try {
                    await DrugService.setOfflineDrugs();
                    console.log("SET_OFFLINE_DRUG ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_DRUG ~ error:", error);
                }
                break;
            case "SET_OFFLINE_FACILITY":
                try {
                    await FacilityService.setOfflineFacilities();
                    console.log("SET_OFFLINE_FACILITY ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_FACILITY ~ error:", error);
                }
                break;
            case "SET_OFFLINE_WARDS":
                try {
                    await WardsService.setOfflineWards();
                    console.log("SET_OFFLINE_WARDS ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_WARDS ~ error:", error);
                }
                break;
            case "SET_OFFLINE_VISITS":
                await visitsService.setOfflineVisits();
                console.log("SET_OFFLINE_VISITS ~ storeName:", visitsService.setOfflineVisits());

                break;
            case "SET_OFFLINE_STAGES":
                await stagesService.setOfflineStages();
                break;
            case "ADD_STAGE":
                try {
                    const success = await stagesService.addStage(payload.data, payload.storeName);
                    self.postMessage({ success });
                } catch (error) {
                    console.error("ADD_STAGE failed:", error);
                    self.postMessage({
                        success: false,
                        error: error.message,
                    });
                }
                break;

            case "UPDATE_STAGE":
                try {
                    const success = await stagesService.updateStage(payload.whereClause, payload.data, payload.storeName);
                    self.postMessage({
                        success,
                        updatedStatus: payload.data.status,
                    });
                } catch (error) {
                    console.error("UPDATE_STAGE failed:", error);
                    self.postMessage({
                        success: false,
                        error: error.message,
                        details: {
                            store: payload?.storeName,
                            where: payload?.whereClause,
                        },
                    });
                }
                break;
            case "SYNC_UNSAVED_STAGES":
                await stagesService.syncOfflineStages();
                break;

            case "UPDATE_VISIT":
                try {
                    const success = await visitsService.updateVisit(payload.whereClause, payload.data, payload.storeName);
                    self.postMessage({ success });
                } catch (error) {
                    console.error("UPDATE_VISIT failed:", error);
                    self.postMessage({
                        success: false,
                        error: error.message,
                        details: {
                            store: payload?.storeName,
                            where: payload?.whereClause,
                        },
                    });
                }
                break;
            case "SYNC_UNSAVED_VISITS":
                await visitsService.submitUnsavedVisitis();
                break;
        }
    } catch (error) {
        console.log("Error Offline database initialization: " + error);
    }
};
