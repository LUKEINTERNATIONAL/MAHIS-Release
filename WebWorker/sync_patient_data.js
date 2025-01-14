const syncPatientDataService = {
    async getPatientData() {
        try {
            // Get the previous sync date
            let previous_sync_date = await previousSyncService.getPreviousSyncDate();
            let patients_sync_data = await this.getPatientIds(previous_sync_date);
            if (patients_sync_data.not_synced_ids) {
                const patientCount = await DatabaseManager.getOfflineData("patientRecords").then((data) => data?.length);
                if (patientCount != patients_sync_data.server_patient_count) {
                    await DatabaseManager.emptyCollection("patientRecords");
                    self.postMessage({
                        syncedCount: patients_sync_data.not_synced_ids.length,
                        lastSyncDate: patients_sync_data.latest_encounter_datetime,
                        offlinePatientsCount: 0,
                        serverPatientsCount: patients_sync_data.server_patient_count,
                    });
                    patients_sync_data = await this.getPatientIds("");
                }
                // Sync all patient records in parallel

                await Promise.all(
                    patients_sync_data.not_synced_ids.map(async (id) => {
                        try {
                            const record = await ApiService.getData(`/patients/${id}`);
                            const patientData = await this.buildPatientData(record);
                            await this.saveSyncedPatientRecord(patientData, patients_sync_data);
                        } catch (error) {
                            console.error(`Failed to sync patient ID ${id}:`, error);
                            // You might want to add the failed ID to a retry queue
                            throw error; // Re-throw to mark this promise as failed
                        }
                    })
                );
                // Update the sync timestamp only if all operations succeeded
                await previousSyncService.setPreviousSyncDate(patients_sync_data.latest_encounter_datetime);
            }
        } catch (error) {
            console.error("Error in getPatientData:", error);
            return {
                success: false,
                error: error.message,
                lastAttemptDate: new Date().toISOString(),
            };
        }
    },
    async getPatientIds(previous_sync_date) {
        // Get IDs of patients that need syncing
        return await ApiService.post("/sync/patients_ids", {
            previous_sync_date: previous_sync_date,
        });
    },
    async findSaveByID(id) {
        const record = await ApiService.getData(`/patients/${id}`);
        const patientData = await this.buildPatientData(record);
        // await this.saveSyncedPatientRecord(patientData);
    },
    async saveSyncedPatientRecord(data, patients_sync_data = "") {
        if (data) {
            await DatabaseManager.deleteRecord("patientRecords", { patientID: data.patientID });
            await DatabaseManager.addData("patientRecords", data);
            if (patients_sync_data) {
                const patientCount = await DatabaseManager.getOfflineData("patientRecords").then((data) => data.length);
                self.postMessage({
                    syncedCount: patients_sync_data.not_synced_ids.length,
                    lastSyncDate: patients_sync_data.latest_encounter_datetime,
                    offlinePatientsCount: patientCount,
                    serverPatientsCount: patients_sync_data.server_patient_count,
                });
            }
        }
    },
    async buildPatientData(record) {
        if (!record?.person) return "";
        return {
            patientID: record.patient_id,
            ID: this.patientIdentifier(record, 3),
            NcdID: this.patientIdentifier(record, 31),
            personInformation: {
                given_name: record?.person?.names[0]?.given_name,
                middle_name: record?.person?.names[0]?.middle_name,
                family_name: record?.person?.names[0]?.family_name,
                gender: record?.person?.gender,
                birthdate: record?.person?.birthdate,
                birthdate_estimated: "false",
                home_region: "",
                home_district: record?.person?.addresses[0]?.address2,
                home_traditional_authority: record?.person?.addresses[0]?.county_district,
                home_village: record?.person?.addresses[0]?.neighborhood_cell,
                current_region: "",
                current_district: record?.person?.addresses[0]?.state_province,
                current_traditional_authority: record?.person?.addresses[0]?.township_division,
                current_village: record?.person?.addresses[0]?.city_village,
                country: record?.person?.addresses[0]?.country,
                landmark: "",
                cell_phone_number: this.getAttribute(record, "Cell Phone Number"),
                occupation: this.getAttribute(record, "Occupation"),
                marital_status: this.getAttribute(record, "Civil Status"),
                religion: "",
                education_level: this.getAttribute(record, "EDUCATION LEVEL"),
            },
            guardianInformation: {
                saved: await this.getGuardianData(record.patient_id),
                unsaved: [],
            },
            birthRegistration: await this.getBirthRegistration(record.patient_id),
            otherPersonInformation: {
                nationalID: "",
                birthID: "",
                relationshipID: "",
            },
            vitals: {
                saved: await this.getVitals(record.patient_id),
                unsaved: [],
            },
            vaccineSchedule: await this.getVaccineAdministration(record.patient_id),
            vaccineAdministration: {
                orders: [],
                obs: [],
                voided: [],
            },
            appointments: {
                saved: [],
                unsaved: [],
            },
            saveStatusPersonInformation: "complete",
            saveStatusGuardianInformation: "complete",
            saveStatusBirthRegistration: "complete",
            date_created: "",
            creator: "",
        };
    },
    patientIdentifier(identifiers, identifier_type_id) {
        if (identifiers) {
            return identifiers.patient_identifiers
                .filter((identifier) => identifier.identifier_type === identifier_type_id)
                .map((identifier) => identifier.identifier)
                .join(", ");
        } else {
            return "";
        }
    },
    getAttribute(item, name) {
        return item.person.person_attributes.find((attribute) => attribute.type.name === name)?.value;
    },
    async getGuardianData(patientId) {
        try {
            const data = await ApiService.getData(`/people/${patientId}/relationships`);
            return this.transformPersonData(data);
        } catch (error) {
            return [];
        }
    },
    transformPersonData(jsonData) {
        // Ensure we have data
        if (!jsonData || !Array.isArray(jsonData) || jsonData.length === 0) {
            return [];
        }
        return jsonData.map((record) => {
            const person = record.relation;
            const name = person.names[0];
            const address = person.addresses[0];

            // Helper function to safely get person attribute value
            const getAttributeValue = (attributes, attributeName) => {
                const attribute = attributes.find((attr) => attr.type.name === attributeName);
                return attribute ? attribute.value : "";
            };

            return {
                given_name: name?.given_name || "",
                middle_name: name?.middle_name || "",
                family_name: name?.family_name || "",
                gender: person?.gender || "",
                birthdate: person?.birthdate || "",
                birthdate_estimated: person?.birthdate_estimated?.toString() || "",

                home_region: address?.region || "",
                home_district: address?.county_district || "",
                home_traditional_authority: address?.township_division || "",
                home_village: address?.city_village || "",

                current_region: address?.region || "",
                current_district: address?.county_district || "",
                current_traditional_authority: address?.township_division || "",
                current_village: address?.city_village || "",

                landmark: getAttributeValue(person?.person_attributes, "Landmark Or Plot Number"),
                cell_phone_number: getAttributeValue(person?.person_attributes, "Cell Phone Number"),
                national_id: "",

                relationship_id: record?.relationship_id?.toString() || "",
                relationship_type: {
                    a_is_to_b: record?.type?.a_is_to_b || "",
                    b_is_to_a: record?.type?.b_is_to_a || "",
                    relationship_type_id: record?.type?.relationship_type_id?.toString() || "",
                },
            };
        });
    },
    async getVitals(patientId) {
        try {
            const encounters = await ApiService.getData("/encounters", {
                encounter_type_id: 6,
                patient_id: patientId,
                paginate: false,
            });
            return encounters.flatMap((encounter) => {
                return encounter.observations
                    .filter((observation) => [5089, 5088, 5087, 5086, 5085, 5090, 5092, 5242, 2137].includes(observation.concept_id))
                    .map((observation) => ({
                        concept_id: observation.concept_id,
                        obs_datetime: observation.obs_datetime,
                        value_numeric: observation.value_numeric,
                        obs_id: observation.obs_id,
                    }));
            });
        } catch (error) {
            return [];
        }
    },
    async getVaccineAdministration(patientID) {
        try {
            return await ApiService.getData("eir/schedule", { patient_id: patientID });
        } catch (error) {
            return [];
        }
    },
    async getBirthRegistration(patientId) {
        try {
            const encounters = await ApiService.getData("/encounters", {
                encounter_type_id: 5,
                patient_id: patientId,
                paginate: false,
            });
            return encounters.flatMap((encounter) => {
                return encounter.observations
                    .filter((observation) => [11764, 11759, 3753].includes(observation.concept_id))
                    .map((observation) => ({
                        concept_id: observation.concept_id,
                        obs_datetime: observation.obs_datetime,
                        value_text: observation.value_text,
                    }));
            });
        } catch (error) {
            return [];
        }
    },
};
