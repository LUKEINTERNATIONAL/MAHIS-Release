const syncPatientDataService = {
    async getOfflineSavedPatientIds() {
        const patientRecords = await DatabaseManager.getOfflineData("patientRecords");
        const ids = [];
        if (patientRecords) {
            await Promise.all(
                patientRecords?.map(async (record) => {
                    ids.push(record.ID);
                })
            );
        }

        return ids;
    },
    async getPatientData() {
        const date = await previousSyncService.getPreviousSyncDate();
        let previous_sync_date = "";
        if (date) {
            const originalDate = new Date(await previousSyncService.getPreviousSyncDate());
            const previousDate = new Date(originalDate);
            previousDate.setDate(originalDate.getDate() - 1);
            previous_sync_date = previousDate.toISOString().slice(0, 19) + previousDate.toISOString().slice(23);
        }
        const patients_sync_data = await ApiService.post("/sync/patients_ids", {
            previous_sync_date: previous_sync_date,
        });
        await Promise.all(
            patients_sync_data.not_synced_ids.map(async (id) => {
                const record = await ApiService.getData(`/patients/${id}`);
                await this.saveSyncedPatientRecord(await this.buildPatientData(record));
            })
        );
        await previousSyncService.setPreviousSyncDate(patients_sync_data.latest_encounter_datetime);
    },
    async saveSyncedPatientRecord(data) {
        if (data) DatabaseManager.deleteRecord("patientRecords", { patientID: data.patientID });
        if (data) DatabaseManager.addData("patientRecords", data);
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
            guardianInformation: "",
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
            vaccineAdministration: [],
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
        return item.person.person_attributes.find((attribute) => attribute.type.name === attribute)?.value;
    },
    async getVitals(patientId) {
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
    },
    async getVaccineAdministration(patientID) {
        return await ApiService.getData("eir/schedule", { patient_id: patientID });
    },
    async getBirthRegistration(patientId) {
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
    },
};
