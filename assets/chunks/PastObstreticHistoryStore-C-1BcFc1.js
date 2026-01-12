import { d as defineStore } from './pinia-C47my0-I.js';
import { n as icons, bO as extractArrayOfNameValue, bP as validateStore, bL as getRadioSelectedValue, a1 as modifyFieldValue } from '../index-xpeKIrss.js';
import { ev as create$3, ew as create$5 } from './vendor-BK8x96Ok.js';

const pastObstreticValidationShema = create$3().shape({
  Gravida: create$5().typeError("Gravida can only be number").min(0).max(30),
  "Abortions/Miscarriages": create$5().typeError("Abortions/Miscarriages can only be number").min(0),
  Stillbirths: create$5().typeError("Stillbirths can only be number").min(0)
});
const useObstreticHistoryStore = defineStore("obstreticHistoryStore", {
  state: () => ({
    prevPregnancies: [
      {
        isFinishBtn: false,
        sectionHeader: "",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Gravida*",
                  value: "",
                  name: "Gravida",
                  icon: icons.editPen,
                  required: true,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Abortions/Miscarriages*",
                  value: "",
                  icon: icons.editPen,
                  name: "Abortions/Miscarriages",
                  required: true,
                  disabled: false,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                },
                {
                  class: "bold",
                  inputHeader: "Stillbirths*",
                  value: "",
                  name: "Stillbirths",
                  disabled: false,
                  required: true,
                  valueType: "text",
                  icon: icons.editPen,
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Live births",
                  value: "",
                  disabled: true,
                  name: "LiveBirths",
                  required: true,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                },
                {
                  class: "bold",
                  inputHeader: "Parity",
                  disabled: true,
                  value: "",
                  name: "Parity",
                  valueType: "text",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      },
      {
        selectedData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Was last live birth preterm?",
            selectedValue: "",
            name: "Was last live birth preterm?",
            displayNone: false
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              colSize: "2.5"
            },
            {
              name: "No",
              value: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Was last live birth full term (8 to 34 weeks)?",
            selectedValue: "",
            name: "Last live birth preterm was full term",
            displayNone: false
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              colSize: "2.5"
            },
            {
              name: "No",
              value: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Last live birth had congenital abnormalities??",
            selectedValue: "",
            name: "Last live birth had congenital abnormalities",
            displayNone: false
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              colSize: "2.5"
            },
            {
              name: "No",
              value: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        selectdData: [],
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            class: "bold",
            title: "Did the woman have any of the complications during the past pregnancies?",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Asphyxia",
              value: "Asphyxia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Pre-eclampsia",
              value: "pre-eclampsia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Eclampsia",
              value: "eclampsia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Puerperal Sepsis",
              value: "puerperal sepsis",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Baby died within 24hrs of birth",
              value: "baby died within 24hrs of birth",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Convulsions",
              value: "convulsions",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Gestational diabetes mellitus",
              value: "gestational diabetes mellitus",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Heavy bleeding",
              value: "heavy bleeding",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Macrosomia",
              value: "macrosomia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Perineal tear (3rd or 4th degree)",
              value: "perineal tear (3rd or 4th degree)",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "None",
              value: "none",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  displayNone: true,
                  inputHeader: "specify",
                  unit: "",
                  icon: icons.editPen,
                  value: "",
                  name: "Other notes",
                  valueType: "text",
                  required: true,
                  eventType: "input",
                  inputWidth: "85%"
                }
              ]
            }
          ]
        }
      }
    ],
    abnormalities: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Last live birth had congenital abnormalities?",
            selectedValue: ""
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "No",
              value: "No",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Dont know",
              value: "Dont know",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      }
    ],
    preterm: [],
    modeOfDelivery: [],
    Complications: []
  }),
  actions: {
    setPrevPregnancies(data) {
      this.prevPregnancies = data;
    },
    setPreterm(data) {
      this.preterm = data;
    },
    setAbnormalities(data) {
      this.abnormalities = data;
    },
    setModeOfDelivery(number) {
      this.modeOfDelivery = [];
      for (let i = 0; i < number; i++) {
        const inputs = getRadioButton(i);
        this.modeOfDelivery.push(inputs[0]);
        this.modeOfDelivery.push(inputs[1]);
      }
    },
    checkChanges() {
      const number = this.modeOfDelivery.length / 2;
      for (let i = 0; i < number; i++) {
        const value = getRadioSelectedValue(this.modeOfDelivery, `Mode of delivery ${i}`);
        if (value == "Other") {
          modifyFieldValue(this.modeOfDelivery, `Specify ${i}`, "displayNone", false);
        } else {
          modifyFieldValue(this.modeOfDelivery, `Specify ${i}`, "displayNone", true);
        }
      }
    },
    setComplications(data) {
      this.Complications = data;
    },
    async validate() {
      const obstetricHistory = extractArrayOfNameValue(this.prevPregnancies);
      const obstetricHistoryValid = await validateStore(this.prevPregnancies, pastObstreticValidationShema, obstetricHistory);
      return obstetricHistoryValid;
    }
  }
  //
});
const getRadioButton = (number) => {
  return [
    {
      sideColSide: 1,
      selectdData: [],
      isFinishBtn: false,
      classDash: "dashed_bottom_border",
      radioBtnContent: {
        header: {
          title: `Specify mode of delivery (child ${number + 1})`,
          selectedValue: "",
          name: `Mode of delivery ${number}`,
          class: "bold"
          //displayNext:"Other"
        },
        data: [
          {
            name: "Caesarean section",
            value: "caesarean section",
            colSize: "4.1"
          },
          {
            name: "Vacuum extraction delivery",
            value: "vacuum extraction delivery",
            colSize: "4.1"
          },
          {
            name: "Breech delivery",
            value: "breech delivery",
            colSize: "4.1"
          },
          {
            name: "SVD",
            value: "svd",
            colSize: "4.1"
          },
          {
            name: "Other",
            value: "Other",
            colSize: "4.1"
          }
        ]
      }
    },
    {
      //childName:`cesareanSec ${number}`,
      data: {
        rowData: [
          {
            colData: [
              {
                displayNone: true,
                inputHeader: `specify  for child ${number + 1}`,
                icon: icons.editPen,
                value: "",
                name: `Specify ${number}`,
                eventType: "input",
                inputWidth: "82%",
                required: true
              }
            ]
          }
        ]
      }
    }
  ];
};

export { pastObstreticValidationShema as p, useObstreticHistoryStore as u };
