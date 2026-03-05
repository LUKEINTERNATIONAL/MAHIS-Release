import { d as defineStore } from './pinia-CQqO6Z-U.js';
import { l as lodashExports } from './lodash-C-9xf6AG.js';

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
