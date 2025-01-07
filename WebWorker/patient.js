const patientService = {
    async savePatientRecord() {
        const patientRecords = await DatabaseManager.getOfflineData("patientRecords");
        if (patientRecords) {
            await Promise.all(
                patientRecords.map(async (record) => {
                    return await this.saveDemographicsRecord(record);
                })
            );
        }
    },
    findByOtherID(idType, identifier) {
        return ApiService.getData("search/patients/by_identifier", {
            type_id: idType,
            identifier,
        });
    },
    async findByID(patientId) {
        return await ApiService.getData(`/patients/${patientId}`);
    },
    createRelation(patientA, patientB, relationType) {
        return ApiService.post(`people/${patientA}/relationships`, {
            relationship_type_id: relationType,
            relation_id: patientB,
        });
    },
    async saveValueCodedObs(conceptName, value, encounterID) {
        const obs = await this.buildValueCoded(conceptName, value);
        return this.saveObs({
            encounter_id: encounterID,
            observations: obs,
        });
    },
    async getConceptID(name) {
        const concepts = await ApiService.getData(`concepts`, { name });
        return this.resolveConcept(concepts, name);
    },
    async buildValueCoded(conceptName, valueCoded, date = DATE) {
        const concept = await this.getConceptID(conceptName);
        const coded = typeof valueCoded === "number" ? valueCoded : await this.getConceptID(valueCoded);
        return [
            {
                concept_id: concept,
                value_coded: coded,
                obs_datetime: date,
            },
        ];
    },
    resolveConcept(concepts, conceptName) {
        if (concepts.length >= 1) return concepts[0].concept_id;
        throw `Concept name ${conceptName} was not found or has a duplicates`;
    },
    async createEncounter(patientID, encounter_type_id) {
        const data = {
            encounter_type_id: encounter_type_id,
            patient_id: patientID,
            program_id: PROGRAMID,
            encounter_datetime: DATE,
            provider_id: USERID,
        };

        const encounter = await ApiService.post("/encounters", data);
        return encounter.encounter_id;
    },
    saveObs(data) {
        return ApiService.post("/observations", data);
    },
    async createPerson(person) {
        const data = await ApiService.post("/people", person);
        return data;
    },
    async createPatient(personId, ddeId) {
        return await ApiService.post(`/patients/`, {
            program_id: PROGRAMID,
            person_id: personId,
            npid: ddeId,
        });
    },
    async saveDemographicsRecord(record) {
        if (!(await this.validateID(record.otherPersonInformation))) return;
        const data = await this.savePersonInformation(record);
        const patientID = data.patientID;
        if (!patientID) return;
        await Promise.all([
            await this.createGuardian(patientID, record),
            await this.saveBirthdayData(patientID, record),
            await this.saveVitalsData(patientID, record),
            await this.saveVaccines(patientID, record),
            await this.voidVaccine(patientID, record),
        ]);
        return data.ID;
    },
    async validateID({ nationalID, birthID }) {
        return (await this.validateNationalID(nationalID)) && (await this.validateBirthID(birthID));
    },
    async savePersonInformation(record) {
        if (record.personInformation && record.saveStatusPersonInformation === "pending") {
            try {
                const data = await this.createPerson(record.personInformation);
                const patient = await this.createPatient(data.person_id, record.ID);
                const ID = syncPatientDataService.patientIdentifier(patient, 3);
                const patientID = data.person_id;
                await this.updateSaveStatus(record, {
                    saveStatusPersonInformation: "complete",
                    patientID: patientID,
                    ID,
                });
                await this.createIDs(record.otherPersonInformation, patientID);
                await this.enrollProgram(patientID);
                await this.createRegistrationEncounter(patientID);

                return { patientID, ID };
            } catch (error) {
                console.error("Failed to save person information", error);
            }
        }
        return { patientID: record.patientID, ID: record.ID };
    },
    async create_patient_identifiers(newID, type, patientID) {
        await ApiService.post("patient_identifiers", {
            identifier: newID,
            identifier_type: type,
            patient_id: patientID,
        });
    },
    async createIDs({ nationalID, birthID }, patientID) {
        if (nationalID) await this.create_patient_identifiers(nationalID, 28, patientID);
        if (birthID) await this.create_patient_identifiers(birthID, 23, patientID);
    },
    async createGuardian(patientID, record) {
        if (record.saveStatusGuardianInformation === "pending") {
            if (record.guardianInformation.given_name && record.guardianInformation.family_name && record.otherPersonInformation.relationshipID) {
                try {
                    const data = await this.createPerson(record.guardianInformation);
                    const guardianID = data.person_id;
                    await this.createRelation(patientID, guardianID, record.otherPersonInformation.relationshipID);
                    await this.updateSaveStatus(record, { saveStatusGuardianInformation: "complete" });
                } catch (error) {
                    console.error("Failed to save guardian information");
                }
            } else {
                await this.updateSaveStatus(record, { saveStatusGuardianInformation: "Not recorded" });
            }
        }
    },
    async saveBirthdayData(patientID, record) {
        if (record.saveStatusBirthRegistration === "pending") {
            if (record.birthRegistration.length > 0) {
                try {
                    const encounterID = await this.createEncounter(patientID, 5);
                    await this.saveObs({
                        encounter_id: encounterID,
                        observations: record.birthRegistration,
                    });
                    await this.updateSaveStatus(record, { saveStatusBirthRegistration: "complete" });
                } catch (error) {
                    console.error("Failed to save birth information");
                }
            } else {
                await this.updateSaveStatus(record, { saveStatusBirthRegistration: "Not recorded" });
            }
        }
    },
    async saveVitalsData(patientID, record) {
        if (record.vitals.unsaved.length > 0) {
            try {
                const encounterID = await this.createEncounter(patientID, 6);
                const obs = await this.saveObs({
                    encounter_id: encounterID,
                    observations: record.vitals.unsaved,
                });
                if (obs?.length > 0) {
                    const vitals = record.vitals;
                    vitals.saved = [...record.vitals.unsaved, ...record.vitals.saved];
                    vitals.unsaved = [];
                    await DatabaseManager.updateRecord(
                        "patientRecords",
                        { ID: record.ID },
                        {
                            vitals: vitals,
                        }
                    );
                }
            } catch (error) {
                console.error("Failed to save vitals information");
            }
        }
    },
    async saveVaccines(patientID, record) {
        if (record?.vaccineAdministration?.orders?.length > 0) {
            const encounterID = await this.createEncounter(patientID, 25);
            const data = {
                encounter_id: encounterID,
                drug_orders: record.vaccineAdministration.orders,
                program_id: PROGRAMID,
            };
            await ApiService.post("/immunization/administer_vaccine", data);

            await this.saveObs({
                encounter_id: encounterID,
                observations: record.vaccineAdministration.obs,
            });
            record.vaccineAdministration.orders = [];
            record.vaccineAdministration.obs = [];
            record.vaccineSchedule = await syncPatientDataService.getVaccineAdministration(patientID);
            DatabaseManager.overRideRecordRecord("patientRecords", record, { ID: record.ID });
        }
    },
    async voidVaccine(patientID, record) {
        const data = record.vaccineAdministration.voided;
        if (data?.length > 0) {
            await Promise.all(
                data?.map(async (item) => {
                    try {
                        if (item?.order_id)
                            await ApiService.remove(`orders/${item.order_id}?reason=${item.reason}`, {
                                reason: item.reason,
                            });
                    } catch (error) {
                        console.log(error);
                    }
                })
            );

            record.vaccineAdministration.voided = [];
            record.vaccineSchedule = await syncPatientDataService.getVaccineAdministration(patientID);
            DatabaseManager.overRideRecordRecord("patientRecords", record, { ID: record.ID });
        }
    },
    async enrollProgram(patientId) {
        return await ApiService.post(`/patients/${patientId}/programs`, {
            program_id: PROGRAMID,
            date_enrolled: DATE,
        });
    },
    async createRegistrationEncounter(patientId) {
        const encounterID = await this.createEncounter(patientId, 5);
        await this.saveValueCodedObs("Type of patient", "New Patient", encounterID);
    },
    async updateSaveStatus(record, saveStatus) {
        DatabaseManager.updateRecord("patientRecords", { ID: record.ID }, saveStatus);
    },
    async validateNationalID(nationalID) {
        return (
            nationalID === "" ||
            !(await this.checkIDExistence(28, nationalID)) ||
            (console.log("The national ID is already assigned to another person"), false)
        );
    },
    async validateBirthID(birthID) {
        return (
            birthID === "" ||
            !(await this.checkIDExistence(23, birthID)) ||
            (console.log("The Birth ID is already assigned to another person"), false)
        );
    },
    async checkIDExistence(nid, identifierId) {
        return nid ? (await findByOtherID(nid, identifierId)).length > 0 : false;
    },
};
