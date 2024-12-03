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
        const patients_ids = await ApiService.post("/sync/patients_ids", { ids: await this.getOfflineSavedPatientIds() });
        await Promise.all(
            patients_ids.map(async (id) => {
                const record = await ApiService.getData(`/patients/${id}`);
                await this.savePatientRecord(await this.buildPatientData(record));
            })
        );
    },
    async savePatientRecord(data) {
        await DatabaseManager.addData("patientRecords", data);
    },
    async buildPatientData(record) {
        return {
            patientID: record.patient_id,
            ID: this.patientIdentifier(record, 3),
            NcdID: this.patientIdentifier(record, 31),
            personInformation: {
                given_name: record.person.names[0].given_name,
                middle_name: record.person.names[0].middle_name,
                family_name: record.person.names[0].family_name,
                gender: record.person.gender,
                birthdate: record.person.birthdate,
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
            birthRegistration: "",
            otherPersonInformation: {
                nationalID: "",
                birthID: "",
                relationshipID: "",
            },
            vitals: {
                saved: await this.getVitals(record.patient_id),
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
        return item.person.person_attributes.find((attribute) => attribute.type.name === attribute)?.value;
    },
    async getVitals(patientId) {
        const encounters = await ApiService.getData("/encounters", {
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
};
