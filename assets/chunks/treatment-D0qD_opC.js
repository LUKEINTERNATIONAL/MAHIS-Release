import { aY as AppEncounterService, u as useDemographicsStore, K as ObservationService, S as Service, E as EncounterService, H as HisDate, aq as ConceptService, bH as DrugOrderService, P as PatientService, ai as ProgramService, G as toastSuccess, t as toastWarning } from '../index-B9nzT5-y.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';
import { g as getFrequencyLabelOrCheckCode } from './drug_prescription_service-gxqtCis_.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-BMOYDyH4.js';

class NotesService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 105, providerID);
  }
}

class DrugAllergyService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 25, providerID);
  }
  static async get_____(filter = "", page = 1, limit = 10) {
  }
}

async function stageAllergies(allergies) {
  try {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const patientData = JSON.parse(JSON.stringify(patient.value));
    (patientData.allergies ??= {}).unsaved ??= [];
    patientData.allergies.unsaved.push(...allergies);
    toastSuccess("Allergies appended to patient record successfully");
    return patientData;
  } catch (error) {
    toastWarning("Unable to save Allegies!");
  }
}
class Treatment {
  async onSubmitNotes(patientID, providerID, treatmentNotesData) {
    const notesService = new NotesService(patientID, providerID);
    await notesService.createEncounter();
    await notesService.saveObservationList(treatmentNotesData);
  }
  async onSubmitAllergies(patientID, providerID, allergiesDataObs) {
    try {
      const drug_allergy_service = new DrugAllergyService(patientID, providerID);
      await drug_allergy_service.createEncounter();
      await drug_allergy_service.saveObservationList(allergiesDataObs);
      toastSuccess("Allergies saved successfully");
    } catch (error) {
      console.error("Error saving allergies:", error);
      toastWarning("Failed to save allergies");
    }
  }
}
class PreviousTreatment {
  programID;
  providerID;
  patientID;
  date;
  demographics;
  previousDrugPrescriptions = [];
  previousClinicalNotes;
  previousDrugAllergies;
  constructor() {
    const store = useDemographicsStore();
    this.demographics = store.patient;
    this.patientID = this.demographics.patientID;
    this.date = ObservationService.getSessionDate();
    this.providerID = Service.getUserID();
    this.programID = ObservationService.getProgramID();
    this.previousClinicalNotes = {};
    this.previousDrugAllergies = {};
  }
  async getPatientEncounters() {
    const patientVisits = await this.getPatientVisitDates();
    const encounterPromises = patientVisits.map(async (patientVisit) => {
      const date = patientVisit.value;
      const encounters = await EncounterService.getEncounters(this.patientID, { date });
      await Promise.all(
        encounters.map(async (encounter) => {
          if (encounter.type.name == "NOTES") {
            const { observations } = encounter;
            if (!lodashExports.isEmpty(observations)) {
              observations.forEach((observation) => {
                if (observation.concept_id == "2688") {
                  const date2 = HisDate.toStandardHisDisplayFormat(observation.obs_datetime);
                  if (lodashExports.isEmpty(this.previousClinicalNotes.hasOwnProperty(date2))) {
                    this.previousClinicalNotes[date2] = [];
                  }
                  this.previousClinicalNotes[date2].push({
                    date: date2,
                    notes: observation.value_text
                  });
                }
              });
            }
          }
          if (encounter.type.name == "TREATMENT") {
            const { observations } = encounter;
            if (!lodashExports.isEmpty(observations)) {
              for (const _index in observations) {
                let concept = "<UNKNOWN CONCEPT>";
                const obs = observations[_index];
                try {
                  if (obs?.concept?.concept_names) {
                    concept = obs.concept.concept_names[0].name;
                  } else {
                    concept = await ConceptService.getConceptName(obs.concept_id);
                  }
                } catch (e) {
                  console.error(obs, e);
                }
                const value = await ObservationService.resolvePrimaryValue(obs);
                const time = HisDate.toStandardHisDisplayFormat(obs.date_created);
                if (concept == "Allergic") {
                  if (!this.previousDrugAllergies.hasOwnProperty(time)) {
                    this.previousDrugAllergies[time] = [];
                  }
                  this.previousDrugAllergies[time].push({ date: time, value });
                }
              }
            }
          }
        })
      );
    });
    await Promise.all(encounterPromises);
    const medicationPromises = patientVisits.map(async (patientVisit) => {
      const medications = await DrugOrderService.getOrderByPatient(this.patientID, {
        start_date: patientVisit.value
      });
      if (!lodashExports.isEmpty(medications)) {
        const previousPrescriptions = medications.map((medication) => ({
          drugName: medication.drug.name,
          value: HisDate.toStandardHisTimeFormat(medication.order.start_date),
          dose: medication.dose,
          frequency: getFrequencyLabelOrCheckCode(medication.frequency),
          prescription: HisDate.toStandardHisFormat(medication.order.auto_expire_date),
          duration: extractNumberBeforeDays(medication.order.instructions),
          other: medication
        }));
        this.previousDrugPrescriptions.push({
          prescriptionDate: HisDate.toStandardHisDisplayFormat(patientVisit.value),
          previousPrescriptions
        });
      }
    });
    await Promise.all(medicationPromises);
    return {
      previousDrugPrescriptions: this.previousDrugPrescriptions,
      previousClinicalNotes: this.previousClinicalNotes,
      previousDrugAllergies: this.previousDrugAllergies
    };
  }
  async getPatientVisitDates() {
    return (await PatientService.getPatientVisits(this.patientID, false)).map((date) => ({
      label: HisDate.toStandardHisDisplayFormat(date),
      value: date,
      other: {
        isActive: date === ProgramService.getSessionDate()
      }
    }));
  }
}
function extractNumberBeforeDays(text) {
  const regex = /(\d+)\s+days/i;
  const match = text.match(regex);
  if (match && match.length > 1) {
    return parseInt(match[1]);
  }
  return null;
}
async function getNCDDiagnosis() {
  const demographicsStore = useDemographicsStore();
  const { patient } = storeToRefs(demographicsStore);
  const patientData = patient.value;
  const ncdConceptIds = [8809, 903, 6410, 6409];
  const value = "";
  let diagnosis;
  if (Service.getLanConnectionStatus() || Service.getPouchDbStatus()) {
    diagnosis = await PatientDiagnosisService.getDiagnosis(value, 1, 15);
  } else {
    diagnosis = await Service.getJson("diagnosis", {
      id: 7409,
      //Qech outpatient diagnosis list
      page_size: 2e3
    });
  }
  const filteredDiagnosis = diagnosis.filter((record) => ncdConceptIds.includes(record.concept_id));
  filteredDiagnosis.push({
    concept_id: 8809,
    concept_name_id: 926,
    concept_name_type: "FULLY_SPECIFIED",
    creator: 1,
    date_created: "2004-06-25T00:00:00.000+02:00",
    date_voided: null,
    id: 72,
    locale: "en",
    locale_preferred: 0,
    name: "Hypertension",
    uuid: "b99faa1e-8d80-11d8-abbb-0024217bb78e",
    void_reason: null,
    voided: 0,
    voided_by: null
  });
  const savedValueCoded = patientData.diagnosis.saved.map((item) => item.value_coded);
  const unsavedValueCoded = patientData.diagnosis.unsaved.map((item) => item.value_coded);
  const allValueCoded = [...savedValueCoded, ...unsavedValueCoded];
  const matchedDiagnoses = filteredDiagnosis.filter((diagnosis2) => allValueCoded.includes(diagnosis2.concept_id));
  const matchedNames = matchedDiagnoses.map((diagnosis2) => diagnosis2.name);
  return matchedNames;
}

export { PreviousTreatment as P, Treatment as T, getNCDDiagnosis as g, stageAllergies as s };
