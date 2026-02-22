import { d as defineStore } from './pinia-0qOk99TR.js';

function concatenateArrays(...arrays) {
  return arrays.reduce((acc, arr) => acc.concat(arr), []);
}
const healthcareEquipmentAllergies = [
  {
    concept_id: 985,
    name: "Latex",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T08:00:00.000Z",
    concept_name_id: 166,
    uuid: "a3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Nickel",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 163,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Sulfur",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 162,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Adhesive Tape",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T10:00:00.000Z",
    concept_name_id: 155,
    uuid: "c3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Surgical Gloves",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T11:00:00.000Z",
    concept_name_id: 158,
    uuid: "d3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Medical Implants",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 104,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Injera Delight",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T08:00:00.000Z",
    concept_name_id: 100,
    uuid: "a3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Ugali Feast",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 164,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Mursik Smoothie",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T10:00:00.000Z",
    concept_name_id: 156,
    uuid: "c3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Sukuma Wiki Surprise",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T11:00:00.000Z",
    concept_name_id: 103,
    uuid: "d3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Mahamri Mix",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 160,
    voided: 0,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Chapati Charm",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T13:00:00.000Z",
    concept_name_id: 105,
    uuid: "f3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Nyama Choma Delight",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T14:00:00.000Z",
    concept_name_id: 106,
    uuid: "g3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Pollen",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T08:00:00.000Z",
    concept_name_id: 165,
    uuid: "a3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Dust Mites",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 101,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Mold",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T10:00:00.000Z",
    concept_name_id: 102,
    uuid: "c3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Pet Danger",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T11:00:00.000Z",
    concept_name_id: 157,
    uuid: "d3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Cockroach Droppings",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 161,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 6408,
    name: "Other",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 161,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  }
];
function searchHealthcareEquipmentAllergies(searchString) {
  searchString = searchString ? searchString.toString() : "";
  const hcea = healthcareEquipmentAllergies.filter((allergy) => allergy.name.toLowerCase().includes(searchString.toLowerCase()));
  return hcea;
}
const useAllergyStore = defineStore("AllergyStore", {
  state: () => ({
    current_patient: {},
    medicalAllergiesList: [],
    selectedMedicalAllergiesList: []
  }),
  actions: {
    setMedicalAllergiesList(data) {
      this.medicalAllergiesList = data;
    },
    setSelectedMedicalAllergiesList(data_obj) {
      let data = data_obj;
      if (Array.isArray(data)) {
        this.selectedMedicalAllergiesList.length = 0;
      }
      if (Array.isArray(data) == false) {
        data = [data_obj];
      }
      this.selectedMedicalAllergiesList.forEach((allergy, index) => {
        data.forEach((item) => {
          if (allergy?.concept_name_id == item?.concept_name_id && item?.selected == false) {
            this.selectedMedicalAllergiesList.splice(index, 1);
          }
        });
      });
      data.forEach((item) => {
        if (item?.selected == true) {
          this.selectedMedicalAllergiesList.push(item);
        }
      });
    },
    removeSelectedAllergy(allergyToRemove) {
      this.selectedMedicalAllergiesList.forEach((allergy, index) => {
        if (allergy?.concept_name_id == allergyToRemove?.concept_name_id) {
          this.selectedMedicalAllergiesList.splice(index, 1);
        }
      });
      this.changeSelectionToFalse(allergyToRemove);
    },
    findSelectedAllergyByName(name) {
      return this.selectedMedicalAllergiesList.find((allergy) => allergy?.name === name);
    },
    unselectOther(itemToUnselect) {
      const index = this.medicalAllergiesList.indexOf(itemToUnselect);
      if (index !== -1) {
        this.medicalAllergiesList[index].selected = false;
      } else {
        console.warn("Item not found in medicalAllergiesList.");
      }
    },
    changeSelectionToFalse(allergy) {
      this.medicalAllergiesList.forEach((allergy_, index) => {
        if (allergy_?.concept_name_id == allergy?.concept_name_id) {
          this.medicalAllergiesList[index].selected = false;
        }
      });
    },
    clearSelectedMedicalAllergiesList() {
      this.selectedMedicalAllergiesList.forEach((allergy) => {
        this.changeSelectionToFalse(allergy);
      });
      this.medicalAllergiesList.forEach((allergie) => {
        allergie.selected = false;
      });
      this.selectedMedicalAllergiesList = [];
    },
    setCurrentPatient(patient) {
      this.current_patient = patient;
    }
  },
  persist: true
});

export { concatenateArrays as c, searchHealthcareEquipmentAllergies as s, useAllergyStore as u };
