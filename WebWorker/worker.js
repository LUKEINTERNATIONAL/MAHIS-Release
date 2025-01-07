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
            case "SYNC_CONCEPTS":
                try {
                    await conceptSetService.setConceptSet();
                    await conceptNameService.setConceptName();
                    console.log("SYNC_CONCEPTS ~ storeName:", type);
                } catch (error) {
                    console.log("SYNC_CONCEPTS ~ error:", error);
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
            case "SET_GENERIC_VACCINE_SCHEDULE":
                try {
                    await genericsService.setOfflineGenericVaccineSchedule();

                    console.log("SET_OFFLINE_LOCATION ~ storeName:", type);
                } catch (error) {
                    console.log("SET_OFFLINE_LOCATION ~ error:", error);
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
            case "SYNC_PATIENT_RECORD":
                // try {
                self.postMessage("");
                await patientService.savePatientRecord();
                await syncPatientDataService.getPatientData();
                self.postMessage({ payload: payload.data, msg: "Done Syncing" });
                console.log("SYNC_PATIENT_RECORD ~ storeName:", type);
                // } catch (error) {
                //     console.log("SYNC_PATIENT_RECORD ~ error:", error);
                // }
                break;
            case "SAVE_PATIENT_RECORD":
                try {
                    self.postMessage("");
                    const ID = await patientService.saveDemographicsRecord(payload.data);
                    console.log("SAVE_PATIENT_RECORD ~ storeName:", type);
                    self.postMessage({ ID, msg: "saved successfully" });
                } catch (error) {
                    console.log("SAVE_PATIENT_RECORD ~ error:", error);
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
            case "SYNC_STOCK_RECORD":
                try {
                    await stockService.setStock();
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
