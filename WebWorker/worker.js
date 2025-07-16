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
    "opd_stages.js",
    "stages.js",
);
// Constants for stage stores
const STORES = {
    STAGES: "stages",
    UNSAVED_STAGES: "unsavedStages"
};

// Make them available globally in the worker scope
self.STORE_NAME = STORES.STAGES;
self.UNSAVED_STORE_NAME = STORES.UNSAVED_STAGES;
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
                    } else {
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
            case "SET_OFFLINE_VISITS":
                await visitsService.setOfflineVisits();
                console.log("SET_OFFLINE_VISITS ~ storeName:", visitsService.setOfflineVisits());

                break;
            case "SET_OFFLINE_STAGES":
                await stagesService.setOfflineStages();
                break;
            case "ADD_STAGE":
                try {
                    //  Ensure the payload includes both a store name and data
                    if (!payload?.storeName || !payload?.data) {
                        throw new Error("Payload missing storeName or data");
                    }
                    const validStageStores = [self.STORE_NAME, self.UNSAVED_STORE_NAME];
                    if (!validStageStores.includes(payload.storeName)) {
                        throw new Error(`Invalid store name for stage. Valid stores: ${validStageStores.join(', ')}`);
                    }

                    //  Check for required fields in the data object
                    const requiredFields = ['patient_id', 'stage', 'location_id', 'status'];
                    const missingFields = requiredFields.filter(field => payload.data[field] === undefined);
                    if (missingFields.length > 0) {
                        console.error("Missing required fields:", missingFields);
                        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
                    }

                    // Normalize and sanitize the incoming data for storage
                    const normalizedData = {
                        patientId: Number(payload.data.patient_id),
                        stage: String(payload.data.stage),
                        location_id: String(payload.data.location_id),
                        status: payload.data.status === true || payload.data.status === 1 ? 1 : 0,
                        arrivalTime: payload.data.arrivalTime || new Date().toISOString(),
                        fullName: payload.data.fullName || "",
                        created_at: payload.data.created_at || new Date().toISOString(),
                        updated_at: new Date().toISOString(),
                        sync_status: payload.data.sync_status || 'pending'
                    };

                    //  Optionally include visit_id if it's a valid number
                    if (typeof payload.data.visit_id === 'number' && !isNaN(payload.data.visit_id)) {
                        normalizedData.visit_id = payload.data.visit_id;
                    }

                    //  Add the normalized stage entry to the database
                    await DatabaseManager.overrideRecordExplicit('unsavedStages', normalizedData, normalizedData.patientId);

                    //  Notify main thread of success
                    self.postMessage({ success: true });
                } catch (error) {
                    console.error("ADD_STAGE failed:", {
                        error: error.message,
                        payload
                    });
                    self.postMessage({ success: false, error: error.message });
                }
                break;

            case "UPDATE_STAGE":
                try {
                    // Validate payload
                    if (!payload?.storeName || !payload?.whereClause || !payload?.data) {
                        throw new Error("Missing required parameters (storeName, whereClause, data)");
                    }

                    // Validate store
                    const validStageStores = ["stages", "unsavedStages"]; // Explicit names are better than variables
                    if (!validStageStores.includes(payload.storeName)) {
                        throw new Error(`Invalid store name '${payload.storeName}' for stage update`);
                    }

                    // Debug log the incoming payload
                    console.debug("[WORKER] UPDATE_STAGE payload:", {
                        store: payload.storeName,
                        where: payload.whereClause,
                        updateData: payload.data
                    });

                    // Prepare update data
                    const updateData = {
                        ...payload.data,
                        updated_at: new Date().toISOString(),
                        sync_status: 'pending' // Ensure this is always set for offline-first
                    };

                    // Normalize status to number (0 or 1)
                    if ('status' in updateData) {
                        updateData.status = updateData.status === true || updateData.status === 1 ? 1 : 0;
                    }

                    // Perform update
                    const updateResult = await DatabaseManager.updateRecord(
                        payload.storeName,
                        payload.whereClause,
                        updateData
                    );

                    // Verify update
                    const updatedRecord = await DatabaseManager.getOfflineData(
                        payload.storeName,
                        { whereClause: payload.whereClause }
                    );

                    if (!updatedRecord || updatedRecord.length === 0) {
                        throw new Error("Update failed - record not found after update");
                    }

                    // Debug log the result
                    console.debug("[WORKER] UPDATE_STAGE result:", {
                        success: true,
                        previousStatus: updatedRecord[0].status,
                        newStatus: updateData.status
                    });

                    self.postMessage({
                        success: true,
                        updatedStatus: updateData.status
                    });

                } catch (error) {
                    console.error("UPDATE_STAGE failed:", {
                        storeName: payload?.storeName,
                        whereClause: payload?.whereClause,
                        error: error.message,
                        stack: error.stack
                    });
                    self.postMessage({
                        success: false,
                        error: error.message,
                        details: {
                            store: payload?.storeName,
                            where: payload?.whereClause
                        }
                    });
                }
                break;
            case "SYNC_UNSAVED_STAGES":
                await stagesService.syncOfflineStages();
                break;

            case "ADD_VISIT":
                try {
                    // Validate payload
                    if (!payload?.storeName || !payload?.data) {
                        throw new Error("Payload missing storeName or data");
                    }

                    // Validate store
                    const validVisitStores = ["visits", "unsavedVisits"];
                    if (!validVisitStores.includes(payload.storeName)) {
                        throw new Error(`Invalid store name for visit. Valid stores: ${validVisitStores.join(', ')}`);
                    }

                    // Check required fields
                    const requiredFields = ['patientId', 'startDate', 'location_id'];
                    const missingFields = requiredFields.filter(field => payload.data[field] === undefined);
                    if (missingFields.length > 0) {
                        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
                    }

                    // Normalize data
                    const normalizedData = {
                        patientId: Number(payload.data.patientId),
                        startDate: payload.data.startDate || new Date().toISOString(),
                        closedDateTime: payload.data.closedDateTime || null,
                        location_id: String(payload.data.location_id),
                        programId: payload.data.programId || null,
                        sync_status: 'pending',
                        updated_at: new Date().toISOString()
                    };

                    // Add to database
                    await DatabaseManager.overrideRecordExplicit('unsavedVisits', normalizedData, normalizedData.patientId);

                    self.postMessage({ success: true });
                } catch (error) {
                    console.error("ADD_VISIT failed:", {
                        error: error.message,
                        payload
                    });
                    self.postMessage({ success: false, error: error.message });
                }
                break;

            case "UPDATE_VISIT":
                try {
                    // Validate payload
                    if (!payload?.storeName || !payload?.whereClause || !payload?.data) {
                        throw new Error("Missing required parameters");
                    }

                    // Validate store
                    const validVisitStores = ["visits", "unsavedVisits"];
                    if (!validVisitStores.includes(payload.storeName)) {
                        throw new Error(`Invalid store name for visit update`);
                    }

                    // Get existing record
                    const existing = await DatabaseManager.getOfflineData(
                        payload.storeName,
                        { whereClause: payload.whereClause }
                    );

                    if (!existing || existing.length === 0) {
                        return self.postMessage({ success: false, error: "No matching visit found" });
                    }

                    // Prepare update
                    const updateData = {
                        ...payload.data,
                        updated_at: new Date().toISOString()
                    };

                    // Perform update
                    await DatabaseManager.updateRecord(
                        payload.storeName,
                        payload.whereClause,
                        updateData
                    );

                    self.postMessage({ success: true });
                } catch (error) {
                    console.error("UPDATE_VISIT failed:", {
                        storeName: payload?.storeName,
                        error: error.message
                    });
                    self.postMessage({ success: false, error: error.message });
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
