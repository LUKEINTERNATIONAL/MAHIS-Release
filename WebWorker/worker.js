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
    const { type, url, apiKey, userId, locationId, programId, totals, date, payload, apiStatus, useMODS, storeCachedRecords} = event.data;
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
                    } else {
                        await syncPatientDataService.syncAllData();
                    }
                    self.postMessage("Done syncing all data");
                    console.log("SYNC_ALL_DATA ~ storeName:", type);
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
                    console.log("DELETE_RECORD ~ storeName:", type);
                } catch (error) {
                    console.log("DELETE_RECORD ~ error:", error);
                }
                break;
            case "ADD_OBJECT_STORE":
                try {
                    await DatabaseManager.addData(payload.storeName, payload.data);
                    console.log("ADD_OBJECT_STORE ~ payload:", payload.storeName);
                } catch (error) {
                    console.log("ADD_OBJECT_STORE ~ error:", error);
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
        }
    } catch (error) {
        console.log("Error Offline database initialization: " + error);
    }
};
