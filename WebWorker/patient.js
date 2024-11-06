const patientService = {
    async savePatientRecord() {
        const patientRecords = await DatabaseManager.getOfflineData("patientRecords");
        await Promise.all(
            patientRecords.map(async (record) => {
                return await this.saveDemographicsRecord(record);
            })
        );
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
    createEncounter(patientID, encounter_type_id) {
        const data = {
            encounter_type_id: encounter_type_id,
            patient_id: patientID,
            program_id: PROGRAMID,
            encounter_datetime: DATE,
            provider_id: USERID,
        };
        return ApiService.post("/encounters", data);
    },
    saveObs(data) {
        return ApiService.post("/observations", data);
    },
    async createPerson(person) {
        const data = await ApiService.post("/people", person);
        return data;
    },
    async createPatient(personId) {
        return await ApiService.post(`/patients/`, {
            program_id: 32,
            person_id: personId,
        });
    },
    async saveDemographicsRecord(record) {
        if (!(await this.validateID(record.otherPersonInformation))) return;
        const patientID = await this.savePersonInformation(record);
        if (!patientID) return;
        await Promise.all([this.createGuardian(patientID, record), this.saveBirthdayData(patientID, record)]);
        return patientID;
    },
    async validateID({ nationalID, birthID }) {
        return (await this.validateNationalID(nationalID)) && (await this.validateBirthID(birthID));
    },
    async savePersonInformation(record) {
        if (record.personInformation && record.saveStatusPersonInformation === "pending") {
            try {
                const data = await this.createPerson(record.personInformation);
                const patient = await this.createPatient(data.person_id);
                const patientID = data.person_id;
                console.log("🚀 ~ savePersonInformation ~ patientID:", patientID);
                await this.updatePatientInformation(record, patientID);
                await this.updateSaveStatus(record, {
                    saveStatusPersonInformation: "complete",
                    serverPatientID: patientID,
                });
                await this.createIDs(record.otherPersonInformation, patientID);
                await this.enrollProgram(patientID);
                await this.createRegistrationEncounter(patientID);
                return patientID;
            } catch (error) {
                console.error("Failed to save person information", error);
            }
        }
        return record.serverPatientID;
    },
    async updatePatientInformation(record, patientID) {
        const patientData = await this.findByID(patientID);
        await DatabaseManager.updateRecord(
            "patientRecords",
            { offlinePatientID: record.offlinePatientID },
            {
                patientData: patientData,
            }
        );
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
                    const encounter = await this.createEncounter(patientID, 5);
                    const encounterID = encounter.encounter_id;
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
    async enrollProgram(patientId) {
        return await ApiService.post(`/patients/${patientId}/programs`, {
            program_id: PROGRAMID,
            date_enrolled: DATE,
        });
    },
    async createRegistrationEncounter(patientId) {
        const encounter = await this.createEncounter(patientId, 5);
        const encounterID = encounter.encounter_id;
        await this.saveValueCodedObs("Type of patient", "New Patient", encounterID);
    },
    async updateSaveStatus(record, saveStatus) {
        console.log("🚀 ~ updateSaveStatus ~ saveStatus:", saveStatus);
        DatabaseManager.updateRecord("patientRecords", { offlinePatientID: record.offlinePatientID }, saveStatus);
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
