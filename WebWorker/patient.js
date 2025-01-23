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
            this.createGuardian(patientID, record),
            this.saveBirthdayData(patientID, record),
            this.saveVitalsData(patientID, record),
            this.saveVaccines(patientID, record),
            this.saveAppointments(patientID, record),
            this.sendSMS(patientID, record),
            this.voidVaccine(patientID, record),
        ]);
        return { ID: data.ID, patientID };
    },
    async validateID({ nationalID, birthID }) {
        return (await this.validateNationalID(nationalID)) && (await this.validateBirthID(birthID));
    },
    async savePersonInformation(record) {
        if (record.personInformation && record.saveStatusPersonInformation === "pending") {
            try {
                const data = await this.createPerson(record.personInformation);
                const patient = await this.createPatient(data.person_id, record.ID);
                const ID = this.patientIdentifier(patient, 3);
                const patientID = data.person_id;
                await this.updateSaveStatus(record, {
                    saveStatusPersonInformation: "complete",
                    patientID: patientID,
                    ID,
                });
                await Promise.all([
                    this.createIDs(record.otherPersonInformation, patientID),
                    this.enrollProgram(patientID),
                    this.createRegistrationEncounter(patientID),
                ]);

                return { patientID, ID };
            } catch (error) {
                console.error("Failed to save person information", error);
            }
        }
        return { patientID: record.patientID, ID: record.ID };
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
            if (
                record.guardianInformation.unsaved[0].given_name &&
                record.guardianInformation.unsaved[0].family_name &&
                record.otherPersonInformation.relationshipID
            ) {
                try {
                    const data = await this.createPerson(record.guardianInformation.unsaved[0]);
                    const guardianID = data.person_id;
                    await this.createRelation(patientID, guardianID, record.otherPersonInformation.relationshipID);
                    await this.updateSaveStatus(record, { saveStatusGuardianInformation: "complete" });
                } catch (error) {
                    console.error("Failed to save guardian information", error);
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
            } catch (error) {
                console.error("Failed to save vitals information", error);
            }
        }
    },
    async saveVaccines(patientID, record) {
        if (record?.vaccineAdministration?.orders?.length > 0) {
            Promise.all(
                record?.vaccineAdministration?.orders.map(async (order) => {
                    const encounterID = await this.createEncounter(patientID, 25);
                    const obs = record.vaccineAdministration.obs.find((item) => item.value_text === order.drug_name);
                    const data = {
                        encounter_id: encounterID,
                        drug_orders: [order],
                        program_id: PROGRAMID,
                        observations: [obs],
                    };
                    await ApiService.post("/immunization/administer_vaccine", data);
                })
            );

            // await this.saveObs({
            //     encounter_id: encounterID,
            //     observations: record.vaccineAdministration.obs,
            // });
        }
    },
    async saveAppointments(patientID, record) {
        if (record?.appointments?.unsaved?.length > 0) {
            const encounterID = await this.createEncounter(patientID, 7);
            const data = await this.saveObs({
                encounter_id: encounterID,
                observations: record?.appointments?.unsaved,
            });
        }
    },
    async sendSMS(patientID, record) {
        if (record?.sms?.appointment_date) {
            await ApiService.post("send_sms", {
                person_id: patientID,
                appointment_date: record.sms.appointment_date,
            });
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
        return nid ? (await this.findByOtherID(nid, identifierId)).length > 0 : false;
    },
};
