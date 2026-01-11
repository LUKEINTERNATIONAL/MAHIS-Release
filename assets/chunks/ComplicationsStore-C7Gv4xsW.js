import { d as defineStore } from './pinia-Bqc2Rgok.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';

const visualScreening = [
  {
    isFinishBtn: false,
    validationStatus: "",
    sectionHeader: "Visual acuity test",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Left Eye",
              value: "",
              name: "Left eye visual acuity",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false,
              validationFunctionName: "",
              valueType: "text"
            },
            {
              inputHeader: "Right Eye",
              value: "",
              name: "Right eye visual acuity",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false,
              validationFunctionName: "",
              valueType: "text"
            }
          ]
        }
      ]
    }
  }
];
const footScreening = [
  {
    selectedData: [],
    classDash: "dashed_bottom_border",
    groupedRadioBtnContent: {
      groupedData: [
        {
          header: {
            selectedValue: "",
            name: "Peripheral neuropathy"
          },
          data: [
            {
              name: "Neuropathy/PVO",
              labelPlacement: "start",
              colSize: "3",
              justify: "space-between",
              header: true,
              headClassName: "bold"
            },
            {
              name: "Yes",
              value: "Yes",
              checked: false,
              colSize: "3",
              justify: "end"
            },
            {
              name: "No",
              value: "No",
              checked: false,
              colSize: "3",
              justify: "end"
            }
          ]
        }
      ]
    }
  },
  {
    selectedData: [],
    classDash: "dashed_bottom_border",
    groupedRadioBtnContent: {
      groupedData: [
        {
          header: {
            selectedValue: "",
            name: "Deformity"
          },
          data: [
            {
              name: "Deformities",
              labelPlacement: "start",
              colSize: "3",
              justify: "space-between",
              header: true,
              headClassName: "bold"
            },
            {
              name: "Yes",
              value: "Yes",
              checked: false,
              colSize: "3",
              justify: "end"
            },
            {
              name: "No",
              value: "No",
              checked: false,
              colSize: "3",
              justify: "end"
            }
          ]
        }
      ]
    }
  },
  {
    selectedData: [],
    classDash: "dashed_bottom_border",
    groupedRadioBtnContent: {
      groupedData: [
        {
          header: {
            selectedValue: "",
            name: "Ulcers"
          },
          data: [
            {
              name: "Ulcers",
              labelPlacement: "start",
              colSize: "3",
              justify: "space-between",
              header: true,
              headClassName: "bold"
            },
            {
              name: "Yes",
              value: "Yes",
              checked: false,
              colSize: "3",
              justify: "end"
            },
            {
              name: "No",
              value: "No",
              checked: false,
              colSize: "3",
              justify: "end"
            }
          ]
        }
      ]
    }
  }
];
const cvScreening = [
  {
    isFinishBtn: false,
    validationStatus: "",
    sectionHeader: "CV Risk %",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              value: "",
              name: "CVD",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false,
              valueType: "text",
              validationFunctionName: "isNumber"
            }
          ]
        }
      ]
    }
  }
];
const useComplicationsStore = defineStore("complicationsStore", {
  state: () => ({
    visualScreening: [...visualScreening],
    FootScreening: [...footScreening],
    cvScreening: [...cvScreening]
  }),
  actions: {
    setCvScreening(data) {
      this.cvScreening = data;
    },
    setVisualScreening(data) {
      this.visualScreening = data;
    },
    setFootScreening(data) {
      this.FootScreening = data;
    },
    getInitialCvScreening() {
      const data = lodashExports.cloneDeep(cvScreening);
      return [...data];
    },
    getInitialVisualScreening() {
      const data = lodashExports.cloneDeep(visualScreening);
      return [...data];
    },
    getInitialFootScreening() {
      const data = lodashExports.cloneDeep(footScreening);
      return [...data];
    },
    resetScreening() {
      this.setCvScreening(this.getInitialCvScreening());
      this.setFootScreening(this.getInitialFootScreening());
      this.setVisualScreening(this.getInitialVisualScreening());
    }
  },
  persist: true
});

export { useComplicationsStore as u };
