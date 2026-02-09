import { d as defineStore } from './pinia-DG0V88rF.js';
import { l as lodashExports } from './lodash-ClZFDeT4.js';

const initialAdministerOtherVaccine = [
  {
    isFinishBtn: false,
    validationStatus: "",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Batch Number",
              value: "",
              name: "Height",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false,
              colSize: 12
            },
            {
              inputHeader: "Vaccine Name",
              value: "",
              name: "Height",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false,
              colSize: 12
            }
          ]
        }
      ]
    }
  }
];
const useAdministerOtherVaccineStore = defineStore("administerOtherVaccineStore", {
  state: () => ({
    administerOtherVaccine: [...initialAdministerOtherVaccine]
  }),
  actions: {
    setAdministerOtherVaccine(data) {
      this.administerOtherVaccine = data;
    },
    getInitialSocialHistory() {
      const data = lodashExports.cloneDeep(initialAdministerOtherVaccine);
      return [...data];
    }
  }
  // persist: true,
});

export { useAdministerOtherVaccineStore as u };
