// start common code
// import { DatabaseManager } from "./db";
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
    "concept_set.js"
);

let APIURL = "";
let APIKEY = "";
let APISTATUS = "";
let TOTALS = "";
let USERID = "";
let PROGRAMID = "";
let DATE = "";

/**********************************************************************
 **********************************************************************
                            Web worker                                                       
 **********************************************************************
 **********************************************************************/
self.onmessage = async (event) => {
    const { type, url, apiKey, userId, programId, totals, date, payload, apiStatus } = event.data;
    USERID = userId;
    PROGRAMID = programId;
    DATE = date;
    APIURL = url;
    APIKEY = apiKey;
    APISTATUS = apiStatus;
    TOTALS = JSON.parse(totals);
    await DatabaseManager.openDatabase();
    try {
        switch (type) {
            case "SYNC_ALL_DATA":
                try {
                    await syncPatientDataService.syncAllData();
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
                    const { ID, patientID } = await patientService.saveDemographicsRecord(payload.data);
                    console.log("SAVE_PATIENT_RECORD ~ storeName:", type);
                    self.postMessage({ ID, msg: "Patient record saved successfully" });
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
        }
    } catch (error) {
        console.log("Error Offline database initialization: " + error);
    }
};
