import { aY as AppEncounterService, u as useDemographicsStore, K as ObservationService, S as Service, E as EncounterService, H as HisDate, aq as ConceptService, bH as DrugOrderService, P as PatientService, ai as ProgramService, G as toastSuccess, t as toastWarning, b2 as useTreatmentPlanStore, bd as useNCDMedicationsStore, ab as useUserStore, b as EncounterTypeId } from '../index-Be0fRy6M.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { g as getFrequencyLabelOrCheckCode, D as DrugPrescriptionService, a as DRUG_FREQUENCIES } from './drug_prescription_service-ByFtBmIX.js';
import { s as storeToRefs, d as defineStore } from './pinia-D-q2_lrU.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-fmrvVEDD.js';

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

async function createNCDDrugOrder() {
  try {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const drugOrders = mapToOrders();
    const patientData = JSON.parse(JSON.stringify(patient.value));
    if (drugOrders.length > 0) {
      (patientData.MedicationOrder ??= {}).unsaved ??= [];
      patientData.MedicationOrder.unsaved = [...patientData.MedicationOrder.unsaved, ...drugOrders];
      const NCDMedicationsStore = useNCDMedicationsStore();
      NCDMedicationsStore.setMedicationRunOutDate(getNCDMedicationRunOutDate());
      NCDMedicationsStore.clearMedicationDataStores();
      toastSuccess("Drug order(s) has been created");
      return patientData;
    } else {
      toastWarning("Unable to create drug orders!");
    }
  } catch (error) {
    toastWarning("Unable to create drug orders!");
  }
}
function getOPDMedicationRunOutDate() {
  try {
    const sessionDate = new Date(Service.getSessionDate());
    const OPDMedicationsStore = useTreatmentPlanStore();
    const selectedOPDMedicationList = OPDMedicationsStore.selectedMedicalDrugsList;
    let highestDuration = 0;
    selectedOPDMedicationList.forEach((OPDMedication) => {
      const medicationDuration = parseInt(OPDMedication.duration, 10);
      if (!isNaN(medicationDuration) && medicationDuration > highestDuration) {
        highestDuration = medicationDuration;
      }
    });
    if (highestDuration <= 0) {
      return {
        date: null,
        formattedDate: null
      };
    }
    const runOutDate = new Date(sessionDate);
    runOutDate.setDate(sessionDate.getDate() + highestDuration);
    const day = String(runOutDate.getDate()).padStart(2, "0");
    const month = String(runOutDate.getMonth() + 1).padStart(2, "0");
    const year = runOutDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return {
      date: runOutDate,
      formattedDate
    };
  } catch (error) {
    console.error("Error calculating OPD medication run out date:", error);
    return {
      date: null,
      formattedDate: null
    };
  }
}
function getNCDMedicationRunOutDate() {
  try {
    const sessionDate = new Date(Service.getSessionDate());
    const NCDMedicationsStore = useNCDMedicationsStore();
    const selectedNCDMedicationList = NCDMedicationsStore.selectedNCDMedicationList;
    let highestDuration = 0;
    selectedNCDMedicationList.forEach((NCDMedication) => {
      const medicationDuration = parseInt(NCDMedication.duration, 10);
      if (!isNaN(medicationDuration) && medicationDuration > highestDuration) {
        highestDuration = medicationDuration;
      }
    });
    if (highestDuration <= 0) {
      return {
        date: null,
        formattedDate: null
      };
    }
    const runOutDate = new Date(sessionDate);
    runOutDate.setDate(sessionDate.getDate() + highestDuration);
    const day = String(runOutDate.getDate()).padStart(2, "0");
    const month = String(runOutDate.getMonth() + 1).padStart(2, "0");
    const year = runOutDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return {
      date: runOutDate,
      formattedDate
    };
  } catch (error) {
    console.error("Error calculating medication run out date:", error);
    return {
      date: null,
      formattedDate: null
    };
  }
}
const mapToOrders = () => {
  const NCDMedicationsStore = useNCDMedicationsStore();
  return NCDMedicationsStore.selectedNCDMedicationList.map((drug) => {
    drug.frequency = NCDMedicationsStore.frequency_selections[drug.drug_id] || "";
    drug.totalDosage = Object.values(drug.dosage).reduce((sum, value) => sum + Number(value), 0);
    const startDate = DrugPrescriptionService.getSessionDate();
    const frequency = determineFrequency(drug.drug_id);
    return {
      drug_inventory_id: drug.drug_id,
      equivalent_daily_dose: drug.totalDosage == "Unknown" ? 0 : drug.totalDosage * frequency?.value || 0,
      start_date: startDate,
      auto_expire_date: calculateExpireDate(startDate, drug.duration),
      units: drug.units,
      instructions: `${drug.name} ${drug.totalDosage} ${drug.units} ${frequency?.code || ""} for ${drug.duration} days`,
      // dose: drug.totalDosage,
      dose: getDose(drug),
      frequency: frequency?.code || "",
      drug_name: drug.drugName,
      offline_id: Service.generateId(Service.getUserName()),
      program_id: Service.getProgramID()
    };
  });
};
const getDose = (currentDrugOb) => {
  if (currentDrugOb.dose_strength != null && currentDrugOb.dose_strength) {
    return Math.trunc(currentDrugOb.dose_strength);
  } else {
    return 1;
  }
};
async function createOPDDrugOrder() {
  try {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const drugOrders = mapOPDSelectedMedicationToOrders();
    const patientData = JSON.parse(JSON.stringify(patient.value));
    if (drugOrders.length > 0) {
      (patientData.MedicationOrder ??= {}).unsaved ??= [];
      patientData.MedicationOrder.unsaved = [...patientData.MedicationOrder.unsaved, ...drugOrders];
      toastSuccess("Drug order(s) has been created");
      return patientData;
    } else {
    }
  } catch (error) {
    toastWarning("Unable to create drug orders!");
  }
}
const mapOPDSelectedMedicationToOrders = () => {
  const OPDMedicationsStore = useTreatmentPlanStore();
  return OPDMedicationsStore.selectedMedicalDrugsList.map((drug) => {
    const startDate = DrugPrescriptionService.getSessionDate();
    const frequency = DRUG_FREQUENCIES.find((f) => f.label === drug.frequency) || {};
    return {
      drug_inventory_id: drug.drug_id,
      equivalent_daily_dose: drug.dose == "Unknown" ? 0 : drug.dose * frequency?.value || 0,
      start_date: startDate,
      auto_expire_date: calculateExpireDate(startDate, drug.duration),
      units: drug.units,
      instructions: `${drug.drugName}: ${drug.dose} ${drug.units} ${frequency?.code || ""} for ${drug.duration} days`,
      dose: drug.dose,
      frequency: frequency?.code || "",
      drug_name: drug.drugName,
      offline_id: Service.generateId(Service.getUserName()),
      program_id: Service.getProgramID()
    };
  });
};
const determineFrequency = (drug_id) => {
  const NCDMedicationsStore = useNCDMedicationsStore();
  const medication = NCDMedicationsStore.selectedNCDMedicationList.find((med) => med.drug_id === drug_id);
  if (!medication || !medication.dosage) return null;
  const dosesPerDay = ["morning", "afternoon", "evening"].reduce((count, timeOfDay) => {
    return count + (medication.dosage[timeOfDay] ? 1 : 0);
  }, 0);
  switch (dosesPerDay) {
    case 1:
      if (medication.dosage.morning) return DRUG_FREQUENCIES.find((f) => f.code === "QAM");
      if (medication.dosage.afternoon) return DRUG_FREQUENCIES.find((f) => f.code === "QNOON");
      if (medication.dosage.evening) return DRUG_FREQUENCIES.find((f) => f.code === "QPM");
      return DRUG_FREQUENCIES.find((f) => f.code === "OD");
    case 2:
      return DRUG_FREQUENCIES.find((f) => f.code === "BD");
    case 3:
      return DRUG_FREQUENCIES.find((f) => f.code === "TDS");
    default:
      return DRUG_FREQUENCIES.find((f) => f.code === "Unknown");
  }
};
const calculateExpireDate = (startDate, duration) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + parseInt(duration));
  return HisDate.toStandardHisFormat(date);
};
const getNCDTypedNotes = () => {
  const treatmentPlanStore = useTreatmentPlanStore();
  return treatmentPlanStore.nonPharmalogicalTherapyAndOtherNotes;
};

const useNonPharmaTherapyStore = defineStore("nonPharmaTherapyStore", {
  state: () => ({
    items: [
      { id: "wound-dressing", label: "Wound dressing", checked: false },
      { id: "patient-education", label: "Patient education", checked: false },
      { id: "counseling", label: "Counseling", checked: false },
      { id: "minor-surgery", label: "Minor Surgery", checked: false }
    ],
    current_patient: {}
  }),
  actions: {
    async saveNonPharmaTherapyPatientData() {
      const userStore = useUserStore();
      const payload = [];
      this.items.forEach((data) => {
        if (data.checked == true) {
          payload.push({
            concept_id: 11023,
            value_text: data.label,
            obs_datetime: HisDate.toStandardHisFormat(Service.getSessionDate()),
            location_id: userStore.facilityLocation.code
          });
        }
      });
      const _notes_ = getNCDTypedNotes();
      if (_notes_) {
        payload.push({
          concept_id: 2592,
          obs_datetime: Service.getSessionDate(),
          value_text: _notes_,
          location_id: userStore.facilityLocation.code
        });
      }
      try {
        if (payload.length > 0) {
          this.clearSelectednonPharmaTherapyStore();
          toastSuccess("Non Pharma Therapy staged successfully!");
          return await stageNotes(payload);
        }
      } catch (error) {
        toastWarning("Unable to update Non Pharma Therapy!");
      }
    },
    clearSelectednonPharmaTherapyStore() {
      this.items.forEach((data) => {
        data.checked = false;
      });
    },
    setCurrentPatient(patient) {
      this.current_patient = patient;
    }
  },
  persist: true
});
async function stageNotes(notes) {
  try {
    await ObservationService.addObsToEncounterPatient(notes, EncounterTypeId.NOTES);
  } catch (error) {
    toastWarning("Unable to create non pharmalogical notes!");
  }
}

export { PreviousTreatment as P, Treatment as T, getOPDMedicationRunOutDate as a, createOPDDrugOrder as b, createNCDDrugOrder as c, getNCDDiagnosis as g, stageAllergies as s, useNonPharmaTherapyStore as u };
