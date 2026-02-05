import { s as storeToRefs, d as defineStore } from './pinia-BATJJgGh.js';
import { S as Service, b2 as useTreatmentPlanStore, u as useDemographicsStore, bi as useNCDMedicationsStore, G as toastSuccess, t as toastWarning, H as HisDate, a6 as useUserStore, K as ObservationService, b as EncounterTypeId } from '../index-DjGK15Gi.js';
import { D as DrugPrescriptionService, a as DRUG_FREQUENCIES } from './drug_prescription_service-cvuCaByp.js';

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

export { createOPDDrugOrder as a, createNCDDrugOrder as c, getOPDMedicationRunOutDate as g, useNonPharmaTherapyStore as u };
