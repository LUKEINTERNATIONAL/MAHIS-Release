// start common code
// import { DatabaseManager } from "./db";
importScripts("db.js", "client.js", "location.js", "patient.js", "program.js", "relationships.js", "sync_patient_data.js", "dde.js", "generics.js");

let APIURL = "";
let APIKEY = "";
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
    const { type, url, apiKey, userId, programId, totals, date, payload } = event.data;
    USERID = userId;
    PROGRAMID = programId;
    DATE = date;
    APIURL = url;
    APIKEY = apiKey;
    TOTALS = JSON.parse(totals);
    await DatabaseManager.openDatabase();
    try {
        switch (type) {
            case "SET_OFFLINE_LOCATION":
                try {
                    await LocationService.setOfflineLocation();

                    console.log("SET_OFFLINE_LOCATION ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_LOCATION ~ error:", error);
                }
                break;

            case "GET_OFFLINE_LOCATION":
                try {
                    const result = await DatabaseManager.getOfflineData("location");
                    console.log("GET_OFFLINE_LOCATION ~ result:", result);
                } catch (error) {
                    console.log("GET_OFFLINE_LOCATION ~ error:", error);
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
            case "DELETE_OBJECT_STORE":
                try {
                    await DatabaseManager.deleteObjectStore(payload.storeName);
                    console.log("DELETE_OBJECT_STORE ~ storeName:", type);
                } catch (error) {
                    console.log("DELETE_OBJECT_STORE ~ error:", error);
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
                    await DatabaseManager.overRideRecord(payload.storeName, payload.data);
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
            case "SYNC_PATIENT_RECORD":
                try {
                    self.postMessage("");
                    await patientService.savePatientRecord();
                    await syncPatientDataService.getPatientData();
                    console.log("SYNC_PATIENT_RECORD ~ storeName:", type);
                    self.postMessage(payload.msg);
                } catch (error) {
                    console.log("SYNC_PATIENT_RECORD ~ error:", error);
                }
                break;
            case "BUILD_PATIENT_RECORD":
                try {
                    const patientData = await syncPatientDataService.buildPatientData(payload.data);
                    console.log("BUILD_PATIENT_RECORD ~ storeName:", type);
                    self.postMessage({ payload: patientData, msg: "done building patient record" });
                } catch (error) {
                    console.log("BUILD_PATIENT_RECORD ~ error:", error);
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
            case "RESET":
                self.postMessage("");
                break;
            default:
                console.log("Unknown type: " + type);
        }
    } catch (error) {
        console.log("Error Offline database initialization: " + error);
    }
};
