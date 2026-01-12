import { O as OrderService, bq as LabOrderService, t as toastWarning, b as EncounterTypeId, n as icons, _ as _export_sfc, br as getCheckboxSelectedValue, aV as modifyRadioValue, a1 as modifyFieldValue, aX as modifyCheckboxValue, K as ObservationService, G as toastSuccess, S as Service, F as DynamicButton, a_ as List, B as BasicInputField, bh as SelectionPopover, g as getPouchDBRecords, aq as ConceptService, bb as useInvestigationStore, H as HisDate, u as useDemographicsStore, y as StandardValidations, z as useExposeFromStandardForm, C as StandardForm, aY as AppEncounterService, W as LocationService, bs as CONTRADICTING_STAGE_DEFINITIONS_ALERTS, bt as ADULT_WHO_STAGE_CRITERIA, bu as CHILD_WHO_STAGE_CRITERIA, bv as ADULT_ART_ELIGIBILITY, bw as CHILD_ART_ELIGIBILITY, bx as RECOMMENDED_ADULT_STAGING_CONDITIONS, by as RECOMMENDED_CHILD_STAGING_CONDITIONS, P as PatientService, bz as BasicYesNoSelect, bA as BasicDateInput, bB as BasicSelect, bC as BasicInput, bD as BasicFacilitySelector, x as toastDanger, e as useGeneralStore, a9 as useConfigStore, q as StandardModal, a2 as getFieldValue, b5 as getOfflineSavedUnsavedData, k as alertConfirmation, o as createModal, J as savePatientRecord, a4 as popoverConfirmation, bg as useAllegyStore, ab as useUserStore, bE as searchHealthcareEquipmentAllergies, bF as concatenateArrays, aC as ListPicker, bG as useNextAppointmentStore, A as AppointmentService, bH as DrugOrderService, b9 as confirmModal, f as useStatusStore, aK as useClinicalDaysStore, U as useGlobalPropertyStore, aL as setValueProps, a as useProgramStore } from '../index-Bam205gA.js';
import { s as storeToRefs, d as defineStore, m as mapState } from './pinia-D-q2_lrU.js';
import LabOrdersList from './LabOrdersList-H4vsM21J.js';
import { v as validateInputFiledData } from './group_validation-BrzgXy1G.js';
import { u as useRadiologyStore } from './RadiologyStore-bzRznvdU.js';
import { B as BasicForm } from './BasicForm-BfCLDZu1.js';
import { q as defineComponent, r as ref, a2 as onMounted, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, B as createBaseVNode, x as createElementBlock, J as Fragment, R as renderList, G as createCommentVNode, E as unref, w as watch, bl as IonPopover, a6 as IonInput, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, H as IonContent, bo as pulseOutline, b8 as checkmark, a5 as createTextVNode, d as computed, a as reactive, bI as IonCard, ax as IonGrid, af as IonRow, ay as IonCol, aE as IonAccordionGroup, aD as IonAccordion, a7 as IonLabel, C as toDisplayString, bN as IonChip, ae as IonCheckbox, bv as IonText, b9 as IonCardContent, l as dayjs, aH as useRouter, cs as useRoute, S as withDirectives, T as vShow, K as modalController, L as IonIcon, a4 as normalizeClass, b7 as IonCardHeader, Q as alertCircleOutline, N as IonButton, F as closeCircleOutline, bG as IonBadge, b$ as IonDatetime, b4 as calendarOutline } from './vendor-BPW-J91F.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-daiNFegY.js';
import { D as DashBox } from './DashBox-BD18kW6K.js';
import { u as usePresentingComplaintsStore, p as previousComplaints } from './previousComplaints-D6rztK1r.js';
import { P as PatientComplaintsService } from './patient_complaints_service-BaU_doq3.js';
import { u as useFormWizard, _ as _sfc_main$c } from './useFormWizard-BSv7DK6Z.js';
import { a as isClinician } from './user_role_management-C9aCL_12.js';
import { u as useUserActivities } from './useUserActivities-_HGGWfP8.js';
import { u as useNonPharmaTherapyStore, a as getOPDMedicationRunOutDate } from './nonPharmaTherapyStore-DH2CrNjM.js';
import { A as Appointment } from './ncd_appointment_service-C94bdf9x.js';
import { D as DateInputField } from './DateInputField-D5EEJIv2.js';

class LabOrder extends OrderService {
  constructor() {
    super();
  }
  async postActivities(patientID, finalOrders) {
    const locationID = finalOrders.location_id;
    const orders = new LabOrderService(parseInt(patientID), -1, locationID);
    const encounter = await orders.createEncounter();
    if (encounter) {
      const formattedOrders = await OrderService.buildLabOrders(encounter, finalOrders.orders || finalOrders);
      const d = await OrderService.saveOrdersArray(encounter.encounter_id, formattedOrders);
      if (!d) return toastWarning("Unable to save lab orders");
    }
  }
  async postAHDActivities(patientID, finalOrders) {
    const locationID = finalOrders.location_id;
    const orders = new LabOrderService(parseInt(patientID), -1, locationID);
    const encounter = await orders.createEncounter(EncounterTypeId.AHD_LAB_ORDERS);
    if (encounter) {
      const formattedOrders = await OrderService.buildLabOrders(encounter, finalOrders.orders || finalOrders);
      const d = await OrderService.saveOrdersArray(encounter.encounter_id, formattedOrders);
      if (!d) return toastWarning("Unable to save lab orders");
    }
  }
  // async postLabResults(patientID: any,measures: any){
  //   const patientLabResultService = new PatientLabResultService(patientID);
  //   patientLabResultService.setTestID(this.selectedTest.value)
  //   patientLabResultService.setResultDate(c.result_date)
  //   await patientLabResultService.createEncounter()
  //   await patientLabResultService.createLabResult(measures)
  // }
}

const _hoisted_1$a = ["innerHTML"];
const _hoisted_2$8 = { class: "scrollable-container" };
const _hoisted_3$5 = {
  key: 0,
  class: "form-section"
};
const _hoisted_4$4 = {
  key: 1,
  class: "form-section"
};
const _hoisted_5$4 = {
  key: 2,
  class: "form-section"
};
const _hoisted_6$4 = {
  key: 3,
  class: "form-section"
};
const _hoisted_7$4 = {
  key: 4,
  class: "form-section"
};
const _hoisted_8$4 = {
  key: 5,
  class: "form-section"
};
const _hoisted_9$2 = {
  key: 6,
  class: "form-section"
};
const _hoisted_10$1 = {
  key: 7,
  class: "form-section"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "RadiologyInvestigation",
  setup(__props) {
    const radiologyStore = useRadiologyStore();
    const { head, neck, chest, abdomen, upper_extremity, spine, pelvis, lower_extremity } = storeToRefs(radiologyStore);
    const iconsContent = ref(icons);
    const activeParts = ref([]);
    const toggleBodyPart = (partId, labelId, bodyPartId) => {
      document.querySelectorAll(`#${partId} path`).forEach((path) => {
        path.classList.toggle("white-fill");
      });
      document.querySelectorAll(`#${labelId} line`).forEach((element) => {
        element.classList.toggle("dark-green-stroke");
      });
      document.querySelectorAll(`#${labelId} rect`).forEach((element) => {
        element.classList.toggle("bright-green-fill");
        element.classList.toggle("dark-green-stroke");
      });
      document.querySelectorAll(`#${labelId} path`).forEach((element) => {
        element.classList.toggle("dark-green-fill");
      });
      document.querySelectorAll(`#${labelId} circle`).forEach((element) => {
        element.classList.toggle("bright-green-fill");
      });
      const existingIndex = activeParts.value.findIndex((part) => part.id === bodyPartId);
      if (existingIndex >= 0) {
        activeParts.value.splice(existingIndex, 1);
      } else {
        activeParts.value.unshift({ id: bodyPartId, active: true });
      }
    };
    const setSpine = () => {
      const spine2 = document.getElementById("SPINE");
      if (spine2.style.display === "none" || spine2.style.display == "") {
        spine2.style.display = "block";
      } else {
        spine2.style.display = "none";
      }
      toggleBodyPart("SPINE", "SPINE_LABEL-2", "spine");
    };
    onMounted(() => {
      const headGroup = document.getElementById("HEAD");
      if (headGroup) {
        headGroup.addEventListener("click", () => {
          toggleBodyPart("HEAD", "LABEL-6", "head");
        });
      }
      const neckGroup = document.getElementById("NECK");
      if (neckGroup) {
        neckGroup.addEventListener("click", () => {
          toggleBodyPart("NECK", "LABEL-5", "neck");
        });
      }
      const chestGroup = document.getElementById("CHEST");
      if (chestGroup) {
        chestGroup.addEventListener("click", () => {
          toggleBodyPart("CHEST", "LABEL-4", "chest");
        });
      }
      const abdomenGroup = document.getElementById("ABDOMEN_LABEL");
      if (abdomenGroup) {
        abdomenGroup.addEventListener("click", () => {
          const abdomen2 = document.getElementById("ABDOMEN-2");
          if (abdomen2.style.display === "none" || abdomen2.style.display == "") {
            abdomen2.style.display = "block";
          } else {
            abdomen2.style.display = "none";
          }
          toggleBodyPart("ABDOMEN", "ABDOMEN_LABEL-2", "abdomen");
        });
      }
      const upperExtremityGroup = document.getElementById("UPPER_EXTRMITY");
      if (upperExtremityGroup) {
        upperExtremityGroup.addEventListener("click", () => {
          toggleBodyPart("UPPER_EXTRMITY", "LABEL-3", "upper_extremity");
        });
      }
      const spineGroup = document.getElementById("SPINE");
      const spineLabelGroup = document.getElementById("SPINE_LABEL");
      const lowerSpineGroup = document.getElementById("LOWER_SPINE_INACTIVE");
      if (spineGroup) {
        spineGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      if (spineLabelGroup) {
        spineLabelGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      if (lowerSpineGroup) {
        lowerSpineGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      const pelvisGroup = document.getElementById("PELVIS");
      if (pelvisGroup) {
        pelvisGroup.addEventListener("click", () => {
          toggleBodyPart("PELVIS", "LABEL-2", "pelvis");
        });
      }
      const lowerExtremityGroup = document.getElementById("LOWER_EXTREMITY");
      if (lowerExtremityGroup) {
        lowerExtremityGroup.addEventListener("click", () => {
          toggleBodyPart("LOWER_EXTREMITY", "LABEL", "lower_extremity");
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_ion_col = resolveComponent("ion-col");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createBlock(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { size: "7" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                innerHTML: iconsContent.value.full_body_sk
              }, null, 8, _hoisted_1$a)
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, {
            size: "5",
            class: "form-column"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(activeParts.value, (bodyPart) => {
                  return openBlock(), createElementBlock(Fragment, null, [
                    bodyPart.id === "head" ? (openBlock(), createElementBlock("div", _hoisted_3$5, [
                      _cache[0] || (_cache[0] = createBaseVNode("h6", null, "Body Part: Head", -1)),
                      createVNode(BasicForm, { contentData: unref(head) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "neck" ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
                      _cache[1] || (_cache[1] = createBaseVNode("h6", null, "Body Part: Neck", -1)),
                      createVNode(BasicForm, { contentData: unref(neck) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "chest" ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
                      _cache[2] || (_cache[2] = createBaseVNode("h6", null, "Body Part: Chest", -1)),
                      createVNode(BasicForm, { contentData: unref(chest) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "abdomen" ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
                      _cache[3] || (_cache[3] = createBaseVNode("h6", null, "Body Part: Abdomen", -1)),
                      createVNode(BasicForm, { contentData: unref(abdomen) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "upper_extremity" ? (openBlock(), createElementBlock("div", _hoisted_7$4, [
                      _cache[4] || (_cache[4] = createBaseVNode("h6", null, "Body Part: Upper Extremity", -1)),
                      createVNode(BasicForm, { contentData: unref(upper_extremity) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "spine" ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
                      _cache[5] || (_cache[5] = createBaseVNode("h6", null, "Body Part: Spine", -1)),
                      createVNode(BasicForm, { contentData: unref(spine) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "pelvis" ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
                      _cache[6] || (_cache[6] = createBaseVNode("h6", null, "Body Part: Pelvis", -1)),
                      createVNode(BasicForm, { contentData: unref(pelvis) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "lower_extremity" ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                      _cache[7] || (_cache[7] = createBaseVNode("h6", null, "Body Part: Lower Extremity", -1)),
                      createVNode(BasicForm, { contentData: unref(lower_extremity) }, null, 8, ["contentData"])
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 256))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const RadiologyInvestigation = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-5ab54fe8"]]);

const initialPastMedicalHistory = [
  {
    selectedData: [],
    initial: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Existing Chronic Health Conditions",
        class: "bold",
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "TB",
          value: "TB",
          checked: false
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "TB",
    radioBtnContent: {
      header: {
        title: "On TB medication",
        name: "TB treatment",
        selectedValue: "",
        displayNext: "Yes",
        displayNone: true,
        class: "bold"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: 3
        },
        {
          name: "No",
          value: "No",
          colSize: 3
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "TB treatment",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Select medication",
              class: "bold",
              icon: icons.search,
              popOver: true,
              value: "",
              valueType: "text",
              name: "TB drugs",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              popOverData: {
                filterData: true,
                data: []
              },
              id: "",
              idName: "medication"
            },
            {
              inputHeader: "Start date",
              class: "bold",
              icon: icons.calendar,
              popOver: true,
              value: "",
              valueType: "text",
              name: "TB drug start date",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              id: "",
              idName: "startDate",
              placeholder: "Pick the date",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Chronic Obstructive Pulmonary Disease (COPD)",
          value: "Chronic obstructive pulmonary disease",
          checked: false
          // disabled: false,
        }
      ]
    }
  },
  {
    selectedData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Asthma",
          value: "Asthma",
          checked: false
          // disabled: false,
        }
      ]
    }
  },
  {
    selectedData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Epilepsy",
          value: "Epilepsy",
          checked: false
          // disabled: false,
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Previous stroke",
          value: "Stroke",
          checked: false
          //disabled: false,
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Peptic Ulcer Disease (PUD)",
          value: "Peptic ulcer disease",
          checked: false
          //disabled: false,
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Mental disorder",
          value: "Mental disorders",
          checked: false
          //disabled: false,
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          colSize: 4.8,
          name: "Bleeding disorders",
          value: "Bleeding disorders",
          checked: false
          // disabled: false,
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Hypertension",
          value: "Hypertension",
          checked: false
          // disabled: false,
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "Hypertension",
    radioBtnContent: {
      header: {
        title: "On medication",
        name: "Hypertension medication",
        class: "bold",
        selectedValue: "",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: 3
        },
        {
          name: "No",
          value: "No",
          colSize: 3
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "Hypertension medication",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Select medication",
              icon: icons.search,
              class: "bold",
              popOver: true,
              displayNone: true,
              value: "",
              valueType: "text",
              name: "Current hypertension treatment regimen",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              popOverData: {
                filterData: false,
                data: []
              },
              id: "",
              idName: "medication"
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "HIV Positive",
          value: "HIV pos",
          checked: false
          //disabled: false,
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "HIV Positive",
    radioBtnContent: {
      header: {
        title: "Is the patient on ART",
        name: "HIV status",
        selectedValue: "",
        class: "bold",
        displayNone: true,
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: 3
        },
        {
          name: "No",
          value: "No",
          colSize: 3
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "HIV status",
    data: {
      rowData: [
        {
          colData: [
            {
              class: "bold",
              inputHeader: "Enter ARV start date",
              icon: icons.calendar,
              popOver: true,
              displayNone: true,
              value: "",
              valueType: "text",
              name: "ARV start date",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              idName: "medication",
              placeholder: "Pick the date",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "Diabetes Mellitus",
          value: "Diabetes Mellitus",
          checked: false
          // disabled: false,
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "Diabetes Mellitus",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Type",
        name: "Diabetes",
        selectedValue: "",
        displayNone: true
      },
      data: [
        {
          name: "Type I",
          value: "Type 1 diabetes",
          colSize: 4
        },
        {
          name: "Type II",
          value: "Type 2 diabetes",
          colSize: 4
        },
        {
          name: "Unsure",
          value: "Unknown",
          colSize: 4
        }
      ]
    }
  },
  {
    selectedData: [],
    isFinishBtn: false,
    sideColSize: 1,
    childName: "Diabetes Mellitus",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Controlled by",
        name: "Controlled by",
        selectedValue: "",
        displayNone: true
      },
      data: [
        {
          name: "Diet",
          value: "Diet",
          colSize: 4
        },
        {
          name: "Tablets",
          value: "Tablets",
          colSize: 4
        },
        {
          name: "Insulin",
          value: "Insulin",
          colSize: 4
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Chronic disease"
      },
      data: [
        {
          name: "None",
          value: "None"
        }
      ]
    }
  }
];
const usePastMedicalHistoryStore = defineStore("pastMedicalHistoryStore", {
  state: () => ({
    pastMedicalHistory: [...initialPastMedicalHistory]
  }),
  actions: {
    setPastMedicalHistory(data) {
      this.pastMedicalHistory = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialPastMedicalHistory);
      return [...data];
    }
  },
  persist: true
});

const _hoisted_1$9 = { class: "modal_wrapper" };
const _hoisted_2$7 = { class: "uniform_columns" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AHDPastMedicalHistory",
  setup(__props, { expose: __expose }) {
    const medicationHistoryStore = usePastMedicalHistoryStore();
    const { pastMedicalHistory } = storeToRefs(medicationHistoryStore);
    const initialData = ref([]);
    onMounted(() => {
      initialData.value = medicationHistoryStore.getInitial();
      handleChronicConditions();
    });
    watch(
      pastMedicalHistory,
      () => {
        handleChronicConditions();
      },
      { deep: true }
    );
    const handleChronicConditions = () => {
      const checkBoxes = [
        "TB",
        "Chronic Obstructive Pulmonary Disease (COPD)",
        "Asthma",
        "Epilepsy",
        "Previous stroke",
        "Peptic Ulcer Disease (PUD)",
        "Mental disorder",
        "Bleeding disorders",
        "Hypertension",
        "HIV Positive",
        "Diabetes Mellitus"
      ];
      if (getCheckboxSelectedValue(pastMedicalHistory.value, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyRadioValue(pastMedicalHistory.value, "TB treatment", "displayNone", true);
          modifyFieldValue(pastMedicalHistory.value, "TB drugs", "displayNone", true);
          modifyFieldValue(pastMedicalHistory.value, "TB drug start date", "displayNone", true);
          modifyRadioValue(pastMedicalHistory.value, "Hypertension medication", "displayNone", true);
          modifyFieldValue(pastMedicalHistory.value, "Current hypertension treatment regimen", "displayNone", true);
          modifyRadioValue(pastMedicalHistory.value, "HIV status", "displayNone", true);
          modifyFieldValue(pastMedicalHistory.value, "ARV start date", "displayNone", true);
          modifyRadioValue(pastMedicalHistory.value, "Diabetes", "displayNone", true);
          modifyRadioValue(pastMedicalHistory.value, "Controlled by", "displayNone", true);
          modifyCheckboxValue(pastMedicalHistory.value, checkbox, "checked", false);
          modifyCheckboxValue(pastMedicalHistory.value, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(pastMedicalHistory.value, checkbox, "disabled", false);
        });
      }
    };
    const handleInputData = (event) => {
      modifyFieldValue(pastMedicalHistory.value, "TB drugs", "popOverData", {
        filterData: true,
        data: [
          { name: "Auramine 'O' (C.I. 41000) 50g" },
          { name: "Bedaquilline 100mg" },
          { name: "Clofazimine 100mg" },
          { name: "Clofazimine 50mg" },
          { name: "Cycloserine 125mg" },
          { name: "Cycloserine 250mg" },
          { name: "Delamanid 50mg" },
          { name: "Ethambutol 100mg" },
          { name: "Ethambutol 400mg" },
          { name: "Ethionamide 250mg" },
          { name: "Isoniazid 100mg " },
          { name: "Isoniazid 300mg" },
          { name: "Isoniazid / Rifapentine 300mg / 300mg" },
          { name: "Levofloxacin 100mg" },
          { name: "Levofloxacin 250mg" },
          { name: "Linezolid 600mg" },
          { name: "Moxifloxacin 400mg" },
          { name: "Pyrazinamide 400mg" },
          { name: "Rifabutin 150mg Capsules" },
          { name: "Rifampicin 150mg/isoniazid 75mg" },
          { name: "Rifampicin 75mg+INH 50mg dispersible" },
          { name: "Rifampicin 75mg+INH 50mg+Pyrazinamide 150mg dispersible" },
          { name: "Rifampicin150mg/Isoniazid75mg/Pyrazinamide 400mg/Ethambutol" }
        ]
      });
      modifyFieldValue(pastMedicalHistory.value, "Current hypertension treatment regimen", "popOverData", {
        filterData: true,
        data: [
          { name: "Captopril 12.5mg" },
          { name: "Aspirin 75mg" },
          { name: "Hydrochlorothiazide 25mg" },
          { name: "Enalapril Meleate 5mg" },
          { name: "Enalapril Maleate 10mg" }
        ]
      });
    };
    const buildPastMedicalHistory = async () => {
      return [
        ...await formatCheckBoxData(pastMedicalHistory.value),
        ...await formatRadioButtonData(pastMedicalHistory.value),
        ...await formatInputFiledData(pastMedicalHistory.value)
      ];
    };
    const onSubmit = async () => {
      const physicalData = await buildPastMedicalHistory();
      if (physicalData.length === 0) {
        toastWarning("No past medical history data to save");
        return;
      }
      await ObservationService.addObsToEncounterPatient(physicalData, EncounterTypeId.AHD_PAST_MEDICAL_HISTORY);
      toastSuccess("Past medical history saved successful");
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$7, [
          createVNode(BasicForm, {
            contentData: unref(pastMedicalHistory),
            initialData: initialData.value,
            "onUpdate:inputValue": handleInputData,
            "onUpdate:selected": handleInputData
          }, null, 8, ["contentData", "initialData"])
        ])
      ]);
    };
  }
});

const AHDPastMedicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-e5153372"]]);

const _sfc_main$9 = defineComponent({
  data: () => ({
    userRole: "",
    ready: false,
    userRoleSettings: {}
  }),
  watch: {
    $route: {
      async handler(route) {
        this.userRole = Service.getUserRoles();
        const programID = Service.getProgramID();
        const programName = Service.getProgramName();
        if (this.userRole == "Lab" && programID == 14) {
          this.userRoleSettings = {
            url: "home",
            btnName: "Back to home",
            stepperTitle: "Laboratory"
          };
        }
        if (programID == 14 && this.userRole != "Lab") {
          this.userRoleSettings = {
            url: "home",
            btnName: "Go to waiting list",
            stepperTitle: "Consultation Plan"
          };
        }
        if (programID == 12) {
          this.userRoleSettings = {
            url: "contact",
            btnName: "Back"
          };
        }
        if (programName == "LABOUR AND DELIVERY PROGRAM") {
          this.userRoleSettings = {
            url: "labour/labourHome",
            btnName: "Back to home"
          };
        }
        if (programName == "PNC PROGRAM") {
          this.userRoleSettings = {
            url: "pnc/home",
            btnName: "Back to home"
          };
        }
      },
      immediate: true,
      deep: true
    }
  }
});

const _sfc_main$8 = defineComponent({
  name: "Menu",
  mixins: [_sfc_main$9],
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    IonPopover,
    DashBox,
    SelectionPopover,
    BasicInputField,
    BasicForm,
    List,
    DynamicButton,
    LabOrdersList,
    RadiologyInvestigation
  },
  data() {
    return {
      segmentContent: "Lab Investigations",
      iconsContent: icons,
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      testResult: "",
      test: "",
      labOrders: "",
      filteredSpecimen: "",
      testData: [],
      popoverOpen: false,
      labOrderStatus: false,
      event: "",
      specimen: "",
      radiologyOrdersStatus: false,
      otherOrdersStatus: false
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient"]),
    inputFields() {
      return this.investigations[0].data.rowData[0].colData;
    }
  },
  watch: {
    investigations: {
      handler() {
        this.setDashedBox();
      },
      deep: true
    },
    patient: {
      async handler() {
        if (!this.patient?.labOrders) return;
        this.labOrders = [...this.patient.labOrders.saved, ...this.patient.labOrders.unsaved];
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.getTests();
      },
      deep: true
    }
  },
  async mounted() {
    await this.getTests();
    this.updateInvestigationsStores();
    this.setDashedBox();
    this.updateInvestigationWizard();
  },
  methods: {
    setSegmentContent(name) {
      this.segmentContent = name;
    },
    async getTests() {
      let tests;
      if (Service.getPouchDbStatus() && Service.getLanConnectionStatus()) {
        tests = await getPouchDBRecords("test_types");
      } else {
        tests = await OrderService.getTestTypes();
      }
      modifyFieldValue(this.investigations, "test", "multiSelectData", tests);
    },
    toggleLabOrderStatus() {
      this.labOrderStatus = !this.labOrderStatus;
    },
    async updateInvestigationWizard() {
      if (!this.patient?.labOrders) return;
      this.labOrders = [...this.patient.labOrders.saved, ...this.patient.labOrders.unsaved];
      const filteredArray = await this.labOrders.filter((obj) => {
        return HisDate.toStandardHisFormat(HisDate.sessionDate()) === HisDate.toStandardHisFormat(obj.order_date);
      });
      if (filteredArray.length > 0) {
        this.investigations[0].selectedData = filteredArray;
      } else {
        this.investigations[0].selectedData = "";
      }
    },
    async updateInvestigationsStores() {
      await this.updateInvestigationWizard();
      const investigationsStore = useInvestigationStore();
      investigationsStore.setInvestigations(this.investigations);
    },
    displayInputFields() {
      this.testResult = "";
      this.selectedText = "";
      this.no_item = false;
      this.addItemButton = false;
      this.search_item = true;
    },
    async validateRowData() {
      return validateInputFiledData(this.investigations);
    },
    async checkTest() {
      if (await this.isNameInData(this.inputFields[0].value.name, await this.investigations[0].selectedData)) {
        modifyFieldValue(this.investigations, "test", "alertsErrorMassage", "Lab order already selected");
        return false;
      } else {
        modifyFieldValue(this.investigations, "test", "alertsErrorMassage", "");
        return true;
      }
    },
    async addNewRow() {
      if (validateInputFiledData(this.investigations) && await this.checkTest()) {
        await this.saveTest();
        this.investigations[0].data.rowData[0].colData[0].value = "";
        this.investigations[0].data.rowData[0].colData[1].value = "";
        this.search_item = false;
        this.display_item = true;
        this.addItemButton = true;
      }
      this.updateInvestigationWizard();
    },
    isNameInData(name, dataArray) {
      for (let item of dataArray) {
        for (let test of item.tests) {
          if (test.name === name) {
            return true;
          }
        }
      }
      return false;
    },
    async saveTest() {
      const investigationInstance = new LabOrder();
      await investigationInstance.postAHDActivities(this.patient.patientID, [
        {
          concept_id: this.inputFields[0].value.concept_id,
          name: this.inputFields[0].value.name,
          specimen: this.inputFields[1].value.name,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(this.inputFields[1].value.name, true)
        }
      ]);
      modifyFieldValue(this.investigations, "specimen", "disabled", true);
      this.labOrders = [...this.patient.labOrders.saved, ...this.patient.labOrders.unsaved];
    },
    async handleInputData(col) {
      if (col.inputHeader == "Test") {
        this.checkTest();
      }
      modifyFieldValue(this.investigations, "specimen", "alertsErrorMassage", "");
      if (col.inputHeader == "Test" && col.value) {
        let specimens;
        if (Service.getPouchDbStatus() && Service.getLanConnectionStatus()) {
          specimens = await getPouchDBRecords("specimens");
        } else {
          specimens = await OrderService.getSpecimens("", 1e3);
        }
        this.specimen = await ConceptService.getConceptSet(col.value.name, "", { names: specimens.map((item) => item.name) });
        if (this.specimen.length == 1) {
          modifyFieldValue(this.investigations, "specimen", "value", this.specimen[0]);
          modifyFieldValue(this.investigations, "specimen", "disabled", true);
        } else {
          modifyFieldValue(this.investigations, "specimen", "value", "");
          modifyFieldValue(this.investigations, "specimen", "disabled", false);
        }
        modifyFieldValue(this.investigations, "specimen", "multiSelectData", this.specimen);
      }
    },
    async filterTest(name) {
      return await this.labOrders.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    },
    async filterSpecimen(name) {
      if (this.specimen[0]?.name && name) {
        return await this.specimen.filter((item) => item?.name.toLowerCase().includes(name.toLowerCase()));
      } else {
        return [];
      }
    },
    setTest(value) {
      this.selectedText = value.name;
      if (this.inputFields[1].inputHeader == "Test") {
        this.investigations[0].data.rowData[0].colData[0].value = value.name;
      } else {
        this.investigations[0].data.rowData[0].colData[1].value = value.name;
      }
      this.updateInvestigationsStores();
    },
    setDashedBox() {
      if (this.inputFields[1].value || this.inputFields[0].value) {
        this.addItemButton = false;
        this.search_item = true;
        this.no_item = false;
      }
      if (this.investigations[0].selectedData.length > 0) {
        this.display_item = true;
        this.no_item = false;
      } else if (!this.search_item) {
        this.no_item = true;
      }
    }
  }
});

const _hoisted_1$8 = { class: "background" };
const _hoisted_2$6 = { key: 0 };
const _hoisted_3$4 = { key: 1 };
const _hoisted_4$3 = { key: 2 };
const _hoisted_5$3 = {
  class: "",
  slot: "content",
  style: { "margin-bottom": "125px", "margin-top": "2px" }
};
const _hoisted_6$3 = { key: 3 };
const _hoisted_7$3 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_8$3 = { key: 4 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_segment_button = resolveComponent("ion-segment-button");
  const _component_ion_segment = resolveComponent("ion-segment");
  const _component_VisitsHistory = resolveComponent("VisitsHistory");
  const _component_LabOrdersList = resolveComponent("LabOrdersList");
  const _component_RadiologyInvestigation = resolveComponent("RadiologyInvestigation");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_ion_segment, {
      value: _ctx.segmentContent,
      style: { "margin-top": "5px" }
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_segment_button, {
          value: "Lab Investigations",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setSegmentContent("Lab Investigations"))
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, null, {
              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                createTextVNode("Lab Investigations", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_segment_button, {
          value: "Radiology Investigation",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setSegmentContent("Radiology Investigation"))
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, null, {
              default: withCtx(() => [..._cache[4] || (_cache[4] = [
                createTextVNode("Radiology Investigation", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_segment_button, {
          value: "Other Investigation",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.setSegmentContent("Other Investigation"))
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, null, {
              default: withCtx(() => [..._cache[5] || (_cache[5] = [
                createTextVNode("Other Investigation", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["value"]),
    _ctx.segmentContent == "Radiology Investigation" ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
      createVNode(_component_VisitsHistory)
    ])) : createCommentVNode("", true),
    _ctx.segmentContent == "Other Investigation" ? (openBlock(), createElementBlock("div", _hoisted_3$4)) : createCommentVNode("", true),
    _ctx.segmentContent == "Lab Investigations" ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
      createBaseVNode("div", _hoisted_5$3, [
        createBaseVNode("span", null, [
          createVNode(_component_LabOrdersList, { propOrders: _ctx.labOrders }, null, 8, ["propOrders"])
        ])
      ])
    ])) : createCommentVNode("", true),
    _ctx.segmentContent == "Radiology Investigation" ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
      createBaseVNode("div", _hoisted_7$3, [
        createVNode(_component_RadiologyInvestigation)
      ])
    ])) : createCommentVNode("", true),
    _ctx.segmentContent == "Other Investigation" ? (openBlock(), createElementBlock("div", _hoisted_8$3)) : createCommentVNode("", true)
  ]);
}
const AHDInvestigations = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-67ff1a61"]]);

const _hoisted_1$7 = { key: 0 };
const _hoisted_2$5 = { style: { "align-content": "center" } };
const _hoisted_3$3 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AHDPresentingComplaints",
  setup(__props, { expose: __expose }) {
    const presentingComplaintsStore = usePresentingComplaintsStore();
    const { presentingComplaints } = storeToRefs(presentingComplaintsStore);
    const iconsContent = ref(icons);
    const no_item = ref(true);
    const search_item = ref(false);
    const show_btn = ref(true);
    const display_item = ref(false);
    const presentingComplaintsList = ref([]);
    const complaints = ref([]);
    const accordionGroup = ref();
    const presentingComplaintsForm = computed(() => {
      return [
        {
          componentType: "multiSelectInputField",
          header: "Presenting Complaints",
          name: "PresentingComplaints",
          trackBy: "concept_id",
          icon: icons.search,
          hideSelected: true,
          validation: (value) => {
            if (isNameInData(value?.name, presentingComplaintsList.value)) {
              return "Presenting complaint already added";
            }
            return StandardValidations.required(value);
          },
          options: complaints.value,
          grid: { s: "6" }
        },
        {
          componentType: "inputField",
          header: "Duration",
          name: "duration",
          icon: icons.time,
          validation: (value) => {
            return StandardValidations.isNotEmptyandNumber(value);
          },
          grid: { s: "6" },
          unitOptions: [
            { label: "Hours", value: "Hours" },
            { label: "Days", value: "Days" },
            { label: "Weeks", value: "Weeks" },
            { label: "Months", value: "Months" },
            { label: "Years", value: "Years" }
          ],
          unitValidation: (unitValue) => {
            if (!unitValue || unitValue === "") {
              return "Please select a unit.";
            }
            return null;
          }
        },
        {
          componentType: "inputField",
          header: "Specify the presenting complaint(s)",
          name: "Other (specify)",
          icon: icons.editPen,
          validation: (value) => {
            if (isNameInData(value, presentingComplaintsList.value)) {
              return "Presenting complaint already added";
            }
            return StandardValidations.required(value);
          },
          condition: (data) => {
            return data?.PresentingComplaints?.name === "Other";
          }
        },
        {
          componentType: "Alert",
          condition: (allFormValues) => {
            return !!(StandardValidations.required(allFormValues?.PresentingComplaints?.name) != null);
          },
          backgroundColor: "lightyellow",
          textColor: "black",
          value: "Please search thoroughly for the complaint. If it is not listed, search and select the 'Other' option to specify the complaint.",
          name: "noMatchAlert"
        }
      ];
    });
    const { formRef } = useExposeFromStandardForm();
    const getPresentingDataLIst = async () => {
      complaints.value = await PatientComplaintsService.getComplaintsList("Presenting complaint");
      modifyFieldValue(presentingComplaints.value, "PresentingComplaints", "multiSelectData", complaints.value);
    };
    const displayInputFields = () => {
      no_item.value = false;
      show_btn.value = false;
      search_item.value = true;
    };
    const addNewRow = async () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) return;
      buildPresentingComplaintsList(data);
      search_item.value = false;
      show_btn.value = true;
    };
    const buildPresentingComplaintsList = (data) => {
      const duration = data.duration + " " + data.duration_unit;
      const presentingComplainData = data.PresentingComplaints;
      const complaintName = presentingComplainData.name === "Other" ? data["Other (specify)"] : presentingComplainData.name;
      presentingComplaintsList.value.push({
        actionBtn: true,
        btn: ["delete"],
        name: complaintName,
        concept_id: presentingComplainData.concept_id,
        duration: presentingComplainData.duration,
        durationUnits: presentingComplainData.duration_unit,
        display: [complaintName, duration],
        data: [
          {
            concept_id: 8578,
            value_coded: presentingComplainData.concept_id,
            obs_datetime: Service.getSessionDate(),
            child: [
              {
                concept_id: presentingComplainData.concept_id,
                value_text: duration,
                obs_datetime: Service.getSessionDate()
              }
            ]
          }
        ]
      });
      formRef.value?.resetForm();
      display_item.value = true;
    };
    const isNameInData = (name, dataArray) => {
      return dataArray.some((item) => item.name === name);
    };
    const deletePresentingComplaintsList = (presentingComplaintsItem) => {
      presentingComplaintsList.value = presentingComplaintsList.value.filter((item) => item.display[0] !== presentingComplaintsItem.name);
    };
    const onSubmit = async () => {
      const presentingComplaints2 = presentingComplaintsList.value.flatMap((item) => item.data);
      if (presentingComplaints2.length <= 0) return toastWarning("Presenting complaints is required");
      if (presentingComplaints2.length <= 0) return;
      await ObservationService.addObsToEncounterPatient(presentingComplaints2, EncounterTypeId.AHD_PRESENTING_COMPLAINTS);
      toastSuccess("Presenting complaints saved successful");
      presentingComplaintsList.value = [];
    };
    onMounted(async () => {
      await getPresentingDataLIst();
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_accordion = resolveComponent("ion-accordion");
      const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(DashBox, {
          status: no_item.value,
          content: "No presenting complaints added"
        }, null, 8, ["status"]),
        display_item.value ? (openBlock(), createElementBlock("span", _hoisted_1$7, [
          createVNode(List, {
            listData: presentingComplaintsList.value,
            "onClicked:delete": deletePresentingComplaintsList
          }, null, 8, ["listData"])
        ])) : createCommentVNode("", true),
        search_item.value ? (openBlock(), createBlock(_component_ion_row, { key: 1 }, {
          default: withCtx(() => [
            createVNode(StandardForm, {
              formData: presentingComplaintsForm.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"]),
            createBaseVNode("div", _hoisted_2$5, [
              createVNode(DynamicButton, {
                fill: "clear",
                icon: iconsContent.value.plus,
                iconSlot: "icon-only",
                "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addNewRow()),
                name: "Save"
              }, null, 8, ["icon"])
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        show_btn.value ? (openBlock(), createBlock(_component_ion_row, {
          key: 2,
          style: { "margin-top": "10px" }
        }, {
          default: withCtx(() => [
            createVNode(DynamicButton, {
              fill: "clear",
              icon: iconsContent.value.plus,
              iconSlot: "icon-only",
              "onClicked:btn": _cache[1] || (_cache[1] = ($event) => displayInputFields()),
              name: "Add new presenting complaints"
            }, null, 8, ["icon"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion_group, {
              ref_key: "accordionGroup",
              ref: accordionGroup,
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_accordion, {
                  value: "first",
                  "toggle-icon-slot": "start",
                  style: { "border-radius": "10px", "background-color": "#fff" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_label, { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode("Previous presenting complaints", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_3$3, [
                      createVNode(previousComplaints)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const AHDPresentingComplaints = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-04755951"]]);

class StagingService extends AppEncounterService {
  age;
  confirmatoryTest;
  constructor(patientID, age, providerID) {
    super(patientID, EncounterTypeId.AHD_HIV_STAGING, providerID);
    this.age = age;
    this.confirmatoryTest = null;
  }
  isAdult() {
    return this.age >= 15;
  }
  isPedaid() {
    return this.age <= 14;
  }
  setAge(age) {
    this.age = age;
  }
  getFacilities(filter = "") {
    return LocationService.getFacilities({ name: filter });
  }
  getConfirmatoryTestType() {
    return this.confirmatoryTest;
  }
  cd4CountIsValid(value) {
    try {
      return value.match(/^(=|<|>)([0-9]*)$/m) ? true : false;
    } catch (e) {
      return false;
    }
  }
  getAlertGuidelines() {
    return CONTRADICTING_STAGE_DEFINITIONS_ALERTS;
  }
  getWhoStageGuidelines() {
    return this.isAdult() ? ADULT_WHO_STAGE_CRITERIA : CHILD_WHO_STAGE_CRITERIA;
  }
  getProgramEligibilityGuidelines() {
    return this.isAdult() ? ADULT_ART_ELIGIBILITY : CHILD_ART_ELIGIBILITY;
  }
  getRecommendedConditionGuidelines() {
    return this.isAdult() ? RECOMMENDED_ADULT_STAGING_CONDITIONS : RECOMMENDED_CHILD_STAGING_CONDITIONS;
  }
  getStagingConditions(stage) {
    const category = this.getStagingCategoryByNum(stage);
    return AppEncounterService.getConceptsByCategory(category);
  }
  buildWhoStageObs(stage) {
    return this.buildValueCoded("Who stage", stage);
  }
  buildWhoCriteriaObs(condition) {
    return this.buildValueCoded("Who stages criteria present", condition);
  }
  buildReasonForArtObs(reason) {
    return this.buildValueCoded("Reason for ART eligibility", reason);
  }
  getStagingCategoryByNum(stageNumber) {
    switch (stageNumber) {
      case 1:
        return this.isAdult() ? "stage_1_conditions_adults" /* ADULT_STAGE_1 */ : "stage_1_conditions_pedaids" /* PEDAID_STAGE_1 */;
      case 2:
        return this.isAdult() ? "stage_2_conditions_adults" /* ADULT_STAGE_2 */ : "stage_2_conditions_pedaids" /* PEDAID_STAGE_2 */;
      case 3:
        return this.isAdult() ? "stage_3_conditions_adults" /* ADULT_STAGE_3 */ : "stage_3_conditions_pedaids" /* PEDAID_STAGE_3 */;
      case 4:
        return this.isAdult() ? "stage_4_conditions_adults" /* ADULT_STAGE_4 */ : "stage_4_conditions_pedaids" /* PEDAID_STAGE_4 */;
      default:
        return "";
    }
  }
  async loadHivConfirmatoryTestType() {
    const test = await AppEncounterService.getFirstValueCoded(this.patientID, "Confirmatory hiv test type");
    if (test) this.confirmatoryTest = test;
  }
}

const _hoisted_1$6 = {
  key: 0,
  class: "ion-padding"
};
const _hoisted_2$4 = { class: "accordion_group ion-padding" };
const _hoisted_3$2 = { style: { "font-weight": "bold" } };
const _hoisted_4$2 = { class: "error" };
const _hoisted_5$2 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_6$2 = { class: "ion-padding" };
const _hoisted_7$2 = { class: "ion-padding" };
const _hoisted_8$2 = {
  key: 0,
  class: "ion-padding"
};
const _hoisted_9$1 = {
  class: "ion-padding",
  style: { "border-bottom": "dashed #ccc" }
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AHDStaging",
  props: {
    hideSubmit: { type: Boolean, default: false },
    date: { default: StagingService.getSessionDate() }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const patientService = new PatientService();
    const validationMessages = ref({});
    const stagingService = new StagingService(patientService.getID(), patientService.getAge(), -1);
    watch(
      () => props.date,
      (val) => {
        const date = val?.standardDate ?? StagingService.getSessionDate();
        const age = dayjs(date).diff(patientService.getBirthdate(), "years");
        stagingService.setAge(age);
        stagingService.setDate(date);
      },
      { deep: true, immediate: true }
    );
    const stagingConditions = reactive({
      stage_4_conditions: {
        title: "Stage 4 Conditions",
        options: []
      },
      stage_3_conditions: {
        title: "Stage 3 Conditions",
        options: []
      },
      stage_2_conditions: {
        title: "Stage 2 Conditions",
        options: []
      },
      stage_1_conditions: {
        title: "Stage 1 Conditions",
        options: []
      }
    });
    const formData = reactive({
      cd4: "",
      cd4Date: "",
      isChildBearing: false,
      reasonForArt: "",
      pregnant: "",
      breastFeeding: "",
      cd4Available: "",
      cd4Modifier: "",
      cd4Location: "",
      whoStage: "",
      staging: [],
      confirmatoryTest: ""
    });
    const formHandlers = {
      reasonForArt: {
        buildObs: () => stagingService.buildReasonForArtObs(formData.reasonForArt),
        suggestAvalue: () => ({
          "PRESUMED SEVERE HIV": {
            priority: 1,
            condition: () => {
              return patientService.getAgeInMonths() < 12 && formData.confirmatoryTest === "HIV rapid test" && ConceptService.getConceptsByCategory("pshd_condition").some((c) => getSelectedConditionNames().includes(c.name));
            }
          },
          "WHO STAGE IV PEDS": {
            priority: 2,
            condition: () => {
              return stagingService.isPedaid() && hasStagesIn(["stage_4_conditions"]);
            }
          },
          "WHO STAGE III PEDS": {
            priority: 3,
            condition: () => {
              return stagingService.isPedaid() && hasStagesIn(["stage_3_conditions"]);
            }
          },
          "HIV DNA polymerase chain reaction": {
            priority: 4,
            condition: () => {
              return patientService.getAgeInMonths() < 12 && formData.confirmatoryTest === "HIV DNA polymerase chain reaction";
            }
          },
          "CD4 COUNT LESS THAN OR EQUAL TO 750": {
            priority: 5,
            condition: () => {
              return cd4EqualTo(750) && hasStageOneOrStageTwo() && cd4DateAlignsWithOldArtGuidelines() && patientService.ageInMonths() >= 24 && patientService.ageInMonths() <= 56;
            }
          },
          "CD4 COUNT LESS THAN OR EQUAL TO 500": {
            priority: 6,
            condition: () => {
              return stagingService.isPedaid() && cd4EqualTo(500) && hasStageOneOrStageTwo() && cd4DateAlignsWithOldArtGuidelines();
            }
          },
          "HIV infected": {
            priority: 7,
            condition: () => {
              return patientService.getAgeInMonths() < 24 || patientService.getAge() <= 5;
            }
          },
          "WHO STAGE IV ADULT": {
            priority: 1,
            condition: () => {
              const severeSymp = ConceptService.getConceptsByCategory("severe_hiv_wasting_syndrome");
              return stagingService.isAdult() && (hasStagesIn(["stage_4_conditions"]) || severeSymp.filter((c) => getSelectedConditionNames().includes(c.name)).length >= 2);
            }
          },
          "WHO STAGE III ADULT": {
            priority: 2,
            condition: () => {
              return stagingService.isAdult() && hasStagesIn(["stage_3_conditions"]);
            }
          },
          "cd4 less than or equal to 350": {
            priority: 3,
            condition: () => {
              return stagingService.isAdult() && cd4EqualTo(350) && cd4DateAlignsWithOldArtGuidelines();
            }
          },
          "cd4 less than or equal to 250": {
            priority: 4,
            condition: () => {
              return stagingService.isAdult() && cd4EqualTo(250) && cd4DateAlignsWithOldArtGuidelines();
            }
          },
          "cd4 less than or equal to 500": {
            priority: 4,
            condition: () => {
              return stagingService.isAdult() && cd4EqualTo(500) && cd4DateAlignsWithOldArtGuidelines();
            }
          },
          BREASTFEEDING: {
            priority: 5,
            condition: () => {
              return stagingService.isAdult() && formData.breastFeeding === "Yes" && hasStageOneOrStageTwo();
            }
          },
          "PATIENT PREGNANT": {
            priority: 6,
            condition: () => {
              return stagingService.isAdult() && formData.pregnant === "Yes" && hasStageOneOrStageTwo();
            }
          },
          Asymptomatic: {
            priority: 7,
            condition: () => {
              return hasStageOneOrStageTwo();
            }
          }
        })
      },
      whoStage: {
        buildObs: () => stagingService.buildWhoStageObs(formData.whoStage),
        suggestAvalue: () => ({
          "WHO STAGE IV ADULT": {
            priority: 1,
            condition: () => {
              return stagingService.isAdult() && hasStagesIn(["stage_4_conditions"]);
            }
          },
          "WHO STAGE III ADULT": {
            priority: 2,
            condition: () => {
              return stagingService.isAdult() && hasStagesIn(["stage_3_conditions"]);
            }
          },
          "WHO STAGE II ADULT": {
            priority: 3,
            condition: () => {
              return stagingService.isAdult() && hasStagesIn(["stage_2_conditions"]);
            }
          },
          "WHO STAGE I ADULT": {
            priority: 4,
            condition: () => {
              return stagingService.isAdult() && hasStagesIn(["stage_1_conditions"]);
            }
          },
          "WHO STAGE IV PEDS": {
            priority: 1,
            condition: () => {
              return stagingService.isPedaid() && (hasStagesIn(["stage_4_conditions"]) || formData.reasonForArt === "WHO STAGE IV PEDS");
            }
          },
          "WHO STAGE III PEDS": {
            priority: 2,
            condition: () => {
              return stagingService.isPedaid() && hasStagesIn(["stage_3_conditions"]);
            }
          },
          "WHO STAGE II PEDS": {
            priority: 3,
            condition: () => {
              return stagingService.isPedaid() && hasStagesIn(["stage_2_conditions"]);
            }
          },
          "WHO STAGE I PEDS": {
            priority: 4,
            condition: () => {
              return stagingService.isPedaid() && hasStagesIn(["stage_1_conditions"]);
            }
          }
        })
      },
      cd4Available: {
        required: () => true,
        dataHandler: (val) => {
          if (val != "Yes") {
            formData.cd4 = "";
            formData.cd4Date = "";
          }
          validationMessages.value["cd4"] = "";
          validationMessages.value["cd4Modifier"] = "";
          validationMessages.value["cd4Date"] = "";
          validationMessages.value["cd4Location"] = "";
        }
      },
      pregnant: {
        required: () => formData.isChildBearing,
        buildObs: () => {
          return stagingService.buildValueCoded("Is patient pregnant?", formData.pregnant);
        }
      },
      breastFeeding: {
        required: () => formData.isChildBearing,
        buildObs: () => {
          return stagingService.buildValueCoded("Is patient breast feeding?", formData.breastFeeding);
        }
      },
      cd4: {
        required: () => formData.cd4Available === "Yes",
        validation: () => {
          if (!isValidCd4String()) {
            validationMessages.value["cd4"] = "A number is required";
            return;
          }
          if (getCd4Value() > 1e4) {
            validationMessages.value["cd4"] = "CD4 value cannot exceed 10,000";
          }
        },
        buildObs: () => {
          return stagingService.buildValueNumber("CD4 count", getCd4Value(), getCd4Modifier());
        }
      },
      cd4Modifier: {
        required: () => formData.cd4Available === "Yes",
        validation: () => {
          if (!formData.cd4Modifier) {
            validationMessages.value["cd4Modifier"] = "Please select modifier";
          }
        },
        dataHandler: (val) => formData.cd4Modifier = val,
        options: [
          { label: "=", value: "=" },
          { label: ">", value: ">" },
          { label: "<", value: "<" }
        ]
      },
      cd4Date: {
        required: () => formData.cd4Available === "Yes",
        dataHandler: (val) => {
          if (val) {
            formData.cd4Date = dayjs(val).format("YYYY-MM-DD");
          }
        },
        validation: () => {
          if (isNaN(new Date(formData.cd4Date).getTime())) {
            validationMessages.value["cd4Date"] = "Invalid CD4 date";
            return;
          }
          const cd4Date = dayjs(formData.cd4Date);
          if (cd4Date.isAfter(dayjs(stagingService.getDate()))) {
            validationMessages.value["cd4Date"] = `Cd4 result date can't be greater than ${stagingService.getDate()}`;
            return;
          }
          if (cd4Date.isBefore(dayjs(patientService.getBirthdate()))) {
            validationMessages.value["cd4Date"] = "CD4 date must not be earlier than birthdate";
          }
        },
        buildObs: () => {
          return stagingService.buildValueDate("Cd4 count datetime", formData.cd4Date);
        }
      },
      cd4Location: {
        required: () => formData.cd4Available === "Yes",
        dataHandler: (val) => formData.cd4Location = val,
        buildObs: () => stagingService.buildValueText("Cd4 count location", formData.cd4Location)
      },
      staging: {
        validation: () => {
          const noStagingSelected = Object.keys(stagingConditions).every((stage) => getStageCount(stage) <= 0);
          if (noStagingSelected) {
            validationMessages.value["staging"] = "Please select one or more staging conditions";
            return;
          }
          const otherStagingCondition = ["stage_4_conditions", "stage_3_conditions", "stage_2_conditions"].some(
            (stage) => getStageCount(stage) > 0
          );
          const isAsymptomatic = stagingConditions["stage_1_conditions"].options.some((o) => /asymptomatic/i.test(o.name) && o.checked);
          if (isAsymptomatic && otherStagingCondition) {
            validationMessages.value["staging"] = "Asymptomatic cannot be selected with other staging conditions";
          }
        },
        buildObs: () => {
          const conditions = Object.keys(stagingConditions).reduce((a, c) => {
            stagingConditions[c].options.forEach((i) => {
              if (i.checked) a.push(i.name);
            });
            return a;
          }, []);
          return conditions.map((s) => stagingService.buildWhoCriteriaObs(s));
        }
      }
    };
    function resetForm() {
      Object.keys(formData).forEach((key) => {
        if (typeof formData[key] === "boolean") {
          formData[key] = false;
        } else if (Array.isArray(formData[key])) {
          formData[key] = [];
        } else {
          formData[key] = "";
        }
      });
      Object.keys(validationMessages.value).forEach((key) => validationMessages.value[key] = "");
      initStagingConditions();
    }
    function hasStagesIn(stages) {
      return stages.some((stage) => getStageCount(stage) > 0);
    }
    function cd4DateAlignsWithOldArtGuidelines() {
      return new Date(formData.cd4Date) <= /* @__PURE__ */ new Date("2016-04-30");
    }
    function getCd4Modifier() {
      return formData.cd4Modifier;
    }
    function getCd4Value() {
      return parseInt(`${formData.cd4}`);
    }
    function isValidCd4String() {
      return /^\d+$/i.test(`${formData.cd4}`);
    }
    function cd4EqualTo(cd4) {
      if (!isValidCd4String()) {
        return false;
      }
      const modifier = getCd4Modifier();
      const val = getCd4Value();
      if (modifier === "=" && cd4 === val) {
        return true;
      }
      if (modifier === "<" && val <= cd4) {
        return true;
      }
      if (modifier === ">" && val >= cd4) {
        return true;
      }
      return false;
    }
    function hasStageOneOrStageTwo() {
      return hasStagesIn(["stage_2_conditions", "stage_1_conditions"]);
    }
    function getSelectedConditionNames() {
      return Object.keys(stagingConditions).reduce((a, c) => {
        stagingConditions[c].options.forEach((i) => i.checked && a.push(i.name));
        return a;
      }, []);
    }
    function runValidation(field) {
      validationMessages.value[field] = "";
      if (typeof formHandlers[field].required === "function") {
        const required = formHandlers[field].required();
        if (required && !formData[field]) {
          validationMessages.value[field] = "This field is required";
          return;
        }
      }
      if (formData[field] && typeof formHandlers[field].validation === "function") {
        formHandlers[field].validation();
      }
    }
    function runSuggestions(field) {
      if (formHandlers[field] && "suggestAvalue" in formHandlers[field]) {
        formData[field] = "";
        const suggestions = formHandlers[field].suggestAvalue();
        const matchedSuggestions = Object.keys(suggestions).reduce((a, c) => {
          const config = suggestions[c];
          if (typeof config.condition === "function" && config.condition()) {
            return [...a, { value: c, priority: config.priority }];
          }
          return a;
        }, []);
        formData[field] = matchedSuggestions.sort((a, b) => a.priority - b.priority)?.[0]?.value ?? "";
      }
    }
    function buildPayload() {
      return Object.keys(formData).reduce((a, c) => {
        if (c in formHandlers && formData[c] && typeof formHandlers[c].buildObs === "function") {
          const obs = formHandlers[c].buildObs();
          if (Array.isArray(obs)) {
            return [...a, ...obs];
          }
          return [...a, obs];
        }
        return a;
      }, []);
    }
    function getStageCount(stage) {
      return stagingConditions[stage].options.filter((o) => o.checked).length;
    }
    async function setStagingFacts() {
      await stagingService.loadHivConfirmatoryTestType();
      formData.confirmatoryTest = stagingService.getConfirmatoryTestType();
      formData.isChildBearing = patientService.isChildBearing();
    }
    function dataHandler(field, value) {
      if (field in formHandlers && typeof formHandlers[field].dataHandler === "function") {
        formHandlers[field].dataHandler(value);
      }
      runValidation(field);
      Object.keys(formHandlers).forEach((key) => runSuggestions(key));
    }
    function initStagingConditions() {
      Object.keys(stagingConditions).forEach((key) => {
        const stageNumber = Number(key.match(/\d+/)?.[0] ?? 0);
        const data = stagingService.getStagingConditions(stageNumber);
        stagingConditions[key].options = data.map((option) => {
          return {
            checked: false,
            name: option.name,
            concept_id: option.concept_id
          };
        });
      });
    }
    function validateStagingForm() {
      Object.keys(formHandlers).forEach((key) => runValidation(key));
      return Object.keys(validationMessages.value).every((key) => `${validationMessages.value[key]}`.length <= 0);
    }
    async function onSubmit() {
      console.log("Submitting staging");
      if (!validateStagingForm()) {
        toastWarning("Please review form for errors");
        return false;
      }
      try {
        const payload = await Promise.all(buildPayload());
        await ObservationService.addObsToEncounterPatient(payload, EncounterTypeId.AHD_HIV_STAGING);
        toastSuccess("Staging Observations saved!");
        return true;
      } catch (e) {
        console.error(e);
        toastDanger("Error has occured while saving observations");
        return false;
      }
    }
    watch(
      () => props.date,
      (date) => {
        stagingService.setDate(date);
        patientService.date = date;
        resetForm();
      }
    );
    onMounted(async () => {
      await setStagingFacts();
      initStagingConditions();
    });
    __expose({
      validateStagingForm,
      buildPayload,
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              formData.isChildBearing ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
                createVNode(unref(IonGrid), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonRow), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCol), null, {
                          default: withCtx(() => [
                            createVNode(BasicYesNoSelect, {
                              label: "Pregnant?",
                              modelValue: formData.pregnant,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.pregnant = $event),
                              onIonChange: _cache[1] || (_cache[1] = (val) => dataHandler("pregnant", val)),
                              "error-message": validationMessages.value["pregnant"]
                            }, null, 8, ["modelValue", "error-message"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(IonCol), null, {
                          default: withCtx(() => [
                            createVNode(BasicYesNoSelect, {
                              label: "Breastfeeding?",
                              modelValue: formData.breastFeeding,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.breastFeeding = $event),
                              onOnChange: _cache[3] || (_cache[3] = (val) => dataHandler("breastFeeding", val)),
                              "error-message": validationMessages.value["breastFeeding"]
                            }, null, 8, ["modelValue", "error-message"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_2$4, [
                createVNode(unref(IonAccordionGroup), { color: "light" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(stagingConditions, (item, sIndex) => {
                      return openBlock(), createBlock(unref(IonAccordion), { key: sIndex }, {
                        default: withCtx(() => [
                          createVNode(unref(IonItem), {
                            color: "light",
                            slot: "header"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonLabel), {
                                style: { "color": "grey", "font-size": "17px" },
                                class: "ion-padding"
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("b", _hoisted_3$2, [
                                    createTextVNode(toDisplayString(item.title) + " ", 1),
                                    createVNode(unref(IonChip), {
                                      color: getStageCount(`${sIndex}`) > 0 ? "primary" : void 0
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Selected: " + toDisplayString(getStageCount(`${sIndex}`)), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  createBaseVNode("p", _hoisted_4$2, toDisplayString(validationMessages.value["staging"]), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createBaseVNode("div", _hoisted_5$2, [
                            createVNode(unref(IonList), null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option, index) => {
                                  return openBlock(), createBlock(unref(IonItem), { key: index }, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonCheckbox), {
                                        modelValue: option.checked,
                                        "onUpdate:modelValue": ($event) => option.checked = $event,
                                        onIonChange: (e) => dataHandler("staging", { stage_type: sIndex, raw: e, option })
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onIonChange"]),
                                      createVNode(unref(IonLabel), { style: { "margin": "13px" } }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(option.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      _cache[15] || (_cache[15] = createBaseVNode("p", null, null, -1)),
                                      option.description ? (openBlock(), createBlock(unref(IonText), {
                                        key: 0,
                                        color: option.color
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(option.text), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_6$2, [
                createBaseVNode("div", _hoisted_7$2, [
                  createVNode(BasicYesNoSelect, {
                    label: "Recent CD4 count results available?",
                    modelValue: formData.cd4Available,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.cd4Available = $event),
                    onOnChange: _cache[5] || (_cache[5] = (val) => dataHandler("cd4Available", val)),
                    "error-message": validationMessages.value["cd4Available"]
                  }, null, 8, ["modelValue", "error-message"])
                ]),
                formData.cd4Available === "Yes" ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
                  createVNode(unref(IonGrid), { class: "ion-padding" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonRow), null, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), null, {
                            default: withCtx(() => [
                              createVNode(BasicDateInput, {
                                label: "CD4 Count Date",
                                modelValue: formData.cd4Date,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.cd4Date = $event),
                                required: formData.cd4Available === "Yes",
                                "error-message": validationMessages.value["cd4Date"],
                                onOnChange: _cache[7] || (_cache[7] = (val) => dataHandler("cd4Date", val))
                              }, null, 8, ["modelValue", "required", "error-message"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(IonRow), null, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { size: "2" }, {
                            default: withCtx(() => [
                              createVNode(BasicSelect, {
                                label: "CD4 Result Modifier",
                                required: formData.cd4Available === "Yes",
                                "error-message": validationMessages.value["cd4Modifier"],
                                options: formHandlers.cd4Modifier.options,
                                onOnChange: _cache[8] || (_cache[8] = (val) => dataHandler("cd4Modifier", val.value))
                              }, null, 8, ["required", "error-message", "options"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(IonCol), { size: "10" }, {
                            default: withCtx(() => [
                              createVNode(BasicInput, {
                                label: "CD4 Count",
                                modelValue: formData.cd4,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData.cd4 = $event),
                                type: "number",
                                onOnChange: _cache[10] || (_cache[10] = (val) => dataHandler("cd4", val)),
                                placeholder: "Enter CD4 Count",
                                "error-message": validationMessages.value["cd4"]
                              }, null, 8, ["modelValue", "error-message"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(IonRow), { style: { "margin-top": "15px" } }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), null, {
                            default: withCtx(() => [
                              createVNode(BasicFacilitySelector, {
                                label: "CD4 Count Location",
                                modelValue: formData.cd4Location,
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => formData.cd4Location = $event),
                                required: formData.cd4Available === "Yes",
                                "error-message": validationMessages.value["cd4Location"],
                                show_error: false,
                                selected_district_ids: [],
                                selected_location: formData.cd4Location,
                                onOnChange: _cache[12] || (_cache[12] = (value) => {
                                  dataHandler("cd4Location", value);
                                })
                              }, null, 8, ["modelValue", "required", "error-message", "selected_location"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_9$1, [
                createVNode(unref(IonGrid), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonRow), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCol), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonInput), {
                              readonly: "",
                              placeholder: "N/A",
                              label: "REASON FOR ART:",
                              modelValue: formData.reasonForArt,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => formData.reasonForArt = $event)
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(IonCol), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonInput), {
                              readonly: "",
                              placeholder: "N/A",
                              label: "WHO STAGE:",
                              modelValue: formData.whoStage,
                              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => formData.whoStage = $event)
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const AHDStaging = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f482cf99"]]);

const _hoisted_1$5 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AHDWorkflow",
  props: {
    closeModalOnFinish: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    useRouter();
    const route = useRoute();
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const AHDPresentingComplaintsRef = ref(null);
    const AHDPastMedicalHistoryRef = ref(null);
    const AHDStagingRef = ref(null);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglass-outline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const demographicsStore = useDemographicsStore();
    const generalStore = useGeneralStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { sessionDate } = storeToRefs(configStore);
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
        if (newOptions.disabled !== oldOptions?.disabled) {
          console.log(`Done button ${newOptions.disabled ? "disabled" : "enabled"}`);
        }
        if (newOptions.text !== oldOptions?.text) {
          console.log(`Done button text changed from "${oldOptions?.text}" to "${newOptions.text}"`);
        }
      },
      { deep: true }
    );
    watch(isSaving, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        console.log(`Saving state changed: ${oldValue} -> ${newValue}`);
        if (newValue) {
          console.log("Starting save process...");
        } else {
          console.log("Save process completed");
        }
      }
    });
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Presenting Complaints",
          icon: ""
        },
        {
          title: "Past Medical History",
          icon: ""
        },
        {
          title: "WHO",
          icon: ""
        },
        {
          title: "Investigation",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    ref(null);
    ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Presenting Complaints":
          return "Presenting Complaints";
        case "Past Medical History":
          return "Past Medical History";
        case "WHO":
          return "WHO";
        case "Investigation":
          return "Investigation";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Presenting Complaints":
                return "Presenting Complaints";
              case "Past Medical History":
                return "Past Medical History";
              case "WHO":
                return "WHO";
              case "Investigation":
                return "Investigation";
            }
          }
          return null;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const markWizard = async () => {
      getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      getOfflineSavedUnsavedData("vitals");
      for (let i = 0; i < tabs.value.length; i++) {
        tabs.value[i];
      }
      validateDoneButtonState();
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        AHDPresentingComplaintsRef.value?.onSubmit();
        AHDPastMedicalHistoryRef.value?.onSubmit();
        AHDStagingRef.value?.onSubmit();
        modalController.dismiss();
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    onMounted(async () => {
      tabs.value = getActiveTabs();
      await markWizard();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      sessionDate,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        refreshWizard();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (old, newData) => {
        await markWizard();
        if (old.ID != newData.ID) {
          refreshWizard();
        }
      },
      { deep: true }
    );
    __expose({
      saveData,
      markWizard,
      refreshWizard,
      validateDoneButtonState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Advance HIV Disease",
        subtitle: "",
        headerIcon: unref(icons).demographics
      }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$5, [
            showWizard.value ? (openBlock(), createBlock(_sfc_main$c, {
              key: 0,
              ref: "wizard",
              headingTitle: "AHD Screening",
              "vertical-tabs": "",
              "navigable-tabs": "",
              "scrollable-tabs": "",
              startIndex: 0,
              doneButton: doneButtonOptions.value,
              "custom-tabs": tabs.value,
              beforeChange: unref(onTabBeforeChange),
              onChange: onChangeCurrentTab,
              "onComplete:wizard": _cache[0] || (_cache[0] = ($event) => saveData()),
              onDoneButtonChanged: handleDoneButtonChange
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("div", null, [
                  createVNode(AHDPresentingComplaints, {
                    ref_key: "AHDPresentingComplaintsRef",
                    ref: AHDPresentingComplaintsRef
                  }, null, 512)
                ], 512), [
                  [vShow, getActiveComponent() == "Presenting Complaints"]
                ]),
                withDirectives(createBaseVNode("div", null, [
                  createVNode(AHDPastMedicalHistory, {
                    ref_key: "AHDPastMedicalHistoryRef",
                    ref: AHDPastMedicalHistoryRef
                  }, null, 512)
                ], 512), [
                  [vShow, getActiveComponent() == "Past Medical History"]
                ]),
                withDirectives(createBaseVNode("div", null, [
                  createVNode(AHDStaging, {
                    ref_key: "AHDStagingRef",
                    ref: AHDStagingRef
                  }, null, 512)
                ], 512), [
                  [vShow, getActiveComponent() == "WHO"]
                ]),
                withDirectives(createBaseVNode("div", null, [
                  createVNode(AHDInvestigations, { ref: "investigationRef" }, null, 512)
                ], 512), [
                  [vShow, getActiveComponent() == "Investigation"]
                ])
              ]),
              _: 1
            }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const isQualifiedAHD = async () => {
  const { hasWaitingList } = useUserActivities();
  const presentingComplaintObs = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PRESENTING_COMPLAINTS);
  const hivClinicRegistrationObs = await ObservationService.getObsByEncounterId(EncounterTypeId.HIV_CLINIC_REGISTRATION);
  const pastMedicalHistoryObs = await ObservationService.getObsByEncounterId(EncounterTypeId.PAST_MEDICAL_HISTORY);
  const hivStatusAtEnrollmentObs = await ObservationService.getObsByEncounterId(EncounterTypeId.HIV_STATUS_AT_ENROLLMENT);
  const patientOutcomeObs = await ObservationService.getObsByEncounterId(EncounterTypeId.PATIENT_OUTCOME);
  const headacheConceptId = await ConceptService.getConceptID("Slow onset severe headache");
  const confusionConceptId = await ConceptService.getConceptID("Confusion");
  const feverConceptId = await ConceptService.getConceptID("Fever");
  const neckConceptId = await ConceptService.getConceptID("Neck stiffness");
  const sweatsConceptId = await ConceptService.getConceptID("Persistent fever/drenching night sweats");
  const weightConceptId = await ConceptService.getConceptID("Weight loss or failure to thrive");
  const anaemiaConceptId = await ConceptService.getConceptID("Anaemia<8gdl");
  const enlargedConceptId = await ConceptService.getConceptID("Enlarged nodes");
  const meningitsConceptId = await ConceptService.getConceptID("Meningits signs");
  const coughConceptId = await ConceptService.getConceptID("Cough");
  const yesConceptId = await ConceptService.getConceptID("Yes");
  const reactiveConceptId = await ConceptService.getConceptID("Reactive");
  const newPositiveConceptId = await ConceptService.getConceptID("New Positive");
  const hivStatusConceptId = await ConceptService.getConceptID("HIV status");
  const presentingComplaintConceptId = await ConceptService.getConceptID("Presenting complaint");
  const hasCoughComplaint = ObservationService.isValueCodedAvailable(
    presentingComplaintObs,
    [
      headacheConceptId,
      confusionConceptId,
      feverConceptId,
      neckConceptId,
      sweatsConceptId,
      weightConceptId,
      anaemiaConceptId,
      enlargedConceptId,
      meningitsConceptId,
      coughConceptId
    ],
    presentingComplaintConceptId
  );
  const hasHIVHistory = ObservationService.isValueCodedAvailable(pastMedicalHistoryObs, [yesConceptId], hivStatusConceptId);
  const hasReactiveStatus = ObservationService.isValueCodedAvailable(hivStatusAtEnrollmentObs, [reactiveConceptId], hivStatusConceptId);
  const hasNewPositiveOutcome = ObservationService.isValueCodedAvailable(patientOutcomeObs, [yesConceptId], newPositiveConceptId);
  console.log("🚀 ~ isQualifiedAHD ~ hasCoughComplaint:", hasCoughComplaint);
  console.log("🚀 ~ isQualifiedAHD ~ isClinician():", isClinician());
  console.log(`🚀 ~ isQualifiedAHD ~ hasWaitingList("Waiting for Consultation")) :`, hasWaitingList("Waiting for Consultation"));
  console.log("🚀 ~ isQualifiedAHD ~ hasHIVHistory:", hasHIVHistory);
  return (isClinician() || hasWaitingList("Waiting for Consultation")) && hasCoughComplaint && (hasHIVHistory || hasNewPositiveOutcome || hasReactiveStatus || hivClinicRegistrationObs.length > 0);
};

const _hoisted_1$4 = { class: "background" };
const _hoisted_2$3 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = { key: 2 };
const _hoisted_5$1 = {
  class: "",
  slot: "content",
  style: { "margin-bottom": "125px", "margin-top": "2px" }
};
const _hoisted_6$1 = { key: 3 };
const _hoisted_7$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_8$1 = { key: 4 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Investigations",
  setup(__props, { expose: __expose }) {
    const segmentContent = ref("Lab Investigations");
    const no_item = ref(false);
    ref(true);
    const search_item = ref(false);
    const display_item = ref(false);
    const addItemButton = ref(true);
    const selectedText = ref("");
    const testResult = ref("");
    ref("");
    const labOrders = ref("");
    ref("");
    ref([]);
    ref(false);
    const labOrderStatus = ref(false);
    ref("");
    const specimen = ref("");
    ref(false);
    ref(false);
    const investigationStore = useInvestigationStore();
    const demographicsStore = useDemographicsStore();
    const { investigations } = storeToRefs(investigationStore);
    const { patient } = storeToRefs(demographicsStore);
    const route = useRoute();
    const router = useRouter();
    const inputFields = computed(() => {
      return investigations.value[0].data.rowData[0].colData;
    });
    const setSegmentContent = (name) => {
      segmentContent.value = name;
    };
    const getTests = async () => {
      let tests;
      if (Service.getPouchDbStatus() && Service.getLanConnectionStatus()) {
        tests = await getPouchDBRecords("test_types");
      } else {
        tests = await OrderService.getTestTypes();
      }
      modifyFieldValue(investigations.value, "test", "multiSelectData", tests);
    };
    const toggleLabOrderStatus = () => {
      labOrderStatus.value = !labOrderStatus.value;
    };
    const updateInvestigationWizard = async () => {
      if (!patient.value?.labOrders) return;
      labOrders.value = [...patient.value.labOrders.saved, ...patient.value.labOrders.unsaved];
      const filteredArray = await labOrders.value.filter((obj) => {
        return HisDate.toStandardHisFormat(HisDate.sessionDate()) === HisDate.toStandardHisFormat(obj.order_date);
      });
      if (filteredArray.length > 0) {
        investigations.value[0].selectedData = filteredArray;
      } else {
        investigations.value[0].selectedData = "";
      }
    };
    const updateInvestigationsStores = async () => {
      await updateInvestigationWizard();
      investigationStore.setInvestigations(investigations.value);
    };
    const displayInputFields = () => {
      testResult.value = "";
      selectedText.value = "";
      no_item.value = false;
      addItemButton.value = false;
      search_item.value = true;
    };
    const validateRowData = async () => {
      return validateInputFiledData(investigations.value);
    };
    const checkTest = async () => {
      if (await isNameInData(inputFields.value[0].value.name, await investigations.value[0].selectedData)) {
        modifyFieldValue(investigations.value, "test", "alertsErrorMassage", "Lab order already selected");
        return false;
      } else {
        modifyFieldValue(investigations.value, "test", "alertsErrorMassage", "");
        return true;
      }
    };
    const addNewRow = async () => {
      if (validateInputFiledData(investigations.value) && await checkTest()) {
        await saveTest();
        investigations.value[0].data.rowData[0].colData[0].value = "";
        investigations.value[0].data.rowData[0].colData[1].value = "";
        search_item.value = false;
        display_item.value = true;
        addItemButton.value = true;
      }
      updateInvestigationWizard();
    };
    const isNameInData = (name, dataArray) => {
      for (let item of dataArray) {
        for (let test2 of item.tests) {
          if (test2.name === name) {
            return true;
          }
        }
      }
      return false;
    };
    const saveTest = async () => {
      const investigationInstance = new LabOrder();
      await investigationInstance.postActivities(patient.value.patientID, [
        {
          concept_id: inputFields.value[0].value.concept_id,
          name: inputFields.value[0].value.name,
          specimen: inputFields.value[1].value.name,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(inputFields.value[1].value.name, true)
        }
      ]);
      modifyFieldValue(investigations.value, "specimen", "disabled", true);
      labOrders.value = [...patient.value.labOrders.saved, ...patient.value.labOrders.unsaved];
    };
    const handleInputData = async (col) => {
      if (col.inputHeader == "Test") {
        checkTest();
      }
      modifyFieldValue(investigations.value, "specimen", "alertsErrorMassage", "");
      if (col.inputHeader == "Test" && col.value) {
        let specimens;
        if (Service.getPouchDbStatus() && Service.getLanConnectionStatus()) {
          specimens = await getPouchDBRecords("specimens");
        } else {
          specimens = await OrderService.getSpecimens("", 1e3);
        }
        specimen.value = await ConceptService.getConceptSet(col.value.name, "", { names: specimens.map((item) => item.name) });
        if (specimen.value.length == 1) {
          modifyFieldValue(investigations.value, "specimen", "value", specimen.value[0]);
          modifyFieldValue(investigations.value, "specimen", "disabled", true);
        } else {
          modifyFieldValue(investigations.value, "specimen", "value", "");
          modifyFieldValue(investigations.value, "specimen", "disabled", false);
        }
        modifyFieldValue(investigations.value, "specimen", "multiSelectData", specimen.value);
      }
    };
    const filterTest = async (name) => {
      return await labOrders.value.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    };
    const filterSpecimen = async (name) => {
      if (specimen.value[0]?.name && name) {
        return await specimen.value.filter((item) => item?.name.toLowerCase().includes(name.toLowerCase()));
      } else {
        return [];
      }
    };
    const setTest = (value) => {
      selectedText.value = value.name;
      if (inputFields.value[1].inputHeader == "Test") {
        investigations.value[0].data.rowData[0].colData[0].value = value.name;
      } else {
        investigations.value[0].data.rowData[0].colData[1].value = value.name;
      }
      updateInvestigationsStores();
    };
    const setDashedBox = () => {
      if (inputFields.value[1].value || inputFields.value[0].value) {
        addItemButton.value = false;
        search_item.value = true;
        no_item.value = false;
      }
      if (investigations.value[0].selectedData.length > 0) {
        display_item.value = true;
        no_item.value = false;
      } else if (!search_item.value) {
        no_item.value = true;
      }
    };
    const openAHDModal = async () => {
      if (await isQualifiedAHD() && router.currentRoute.value.name == "OPDConsultationPlan") {
        const confirmed = await alertConfirmation(`Do you want to do AHD screening?`);
        if (confirmed) {
          await createModal(_sfc_main$5, { class: "fullScreenModal" });
          await savePatientRecord(patient.value);
        }
      }
    };
    watch(
      investigations,
      () => {
        setDashedBox();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        if (!patient.value?.labOrders) return;
        labOrders.value = [...patient.value.labOrders.saved, ...patient.value.labOrders.unsaved];
      },
      { deep: true }
    );
    watch(
      route,
      async () => {
        await getTests();
      },
      { deep: true }
    );
    onMounted(async () => {
      await getTests();
      updateInvestigationsStores();
      setDashedBox();
      updateInvestigationWizard();
    });
    __expose({
      openAHDModal,
      setSegmentContent,
      getTests,
      toggleLabOrderStatus,
      updateInvestigationWizard,
      updateInvestigationsStores,
      displayInputFields,
      validateRowData,
      checkTest,
      addNewRow,
      isNameInData,
      saveTest,
      handleInputData,
      filterTest,
      filterSpecimen,
      setTest,
      setDashedBox
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_segment_button = resolveComponent("ion-segment-button");
      const _component_ion_segment = resolveComponent("ion-segment");
      const _component_VisitsHistory = resolveComponent("VisitsHistory");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_component_ion_segment, {
          value: segmentContent.value,
          style: { "margin-top": "5px" }
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_segment_button, {
              value: "Lab Investigations",
              onClick: _cache[0] || (_cache[0] = ($event) => setSegmentContent("Lab Investigations"))
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, null, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode("Lab Investigations", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_segment_button, {
              value: "Radiology Investigation",
              onClick: _cache[1] || (_cache[1] = ($event) => setSegmentContent("Radiology Investigation"))
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, null, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("Radiology Investigation", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_segment_button, {
              value: "Other Investigation",
              onClick: _cache[2] || (_cache[2] = ($event) => setSegmentContent("Other Investigation"))
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, null, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode("Other Investigation", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        segmentContent.value == "Radiology Investigation" ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createVNode(_component_VisitsHistory)
        ])) : createCommentVNode("", true),
        segmentContent.value == "Other Investigation" ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : createCommentVNode("", true),
        segmentContent.value == "Lab Investigations" ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("span", null, [
              createVNode(LabOrdersList, { propOrders: labOrders.value }, null, 8, ["propOrders"])
            ])
          ])
        ])) : createCommentVNode("", true),
        segmentContent.value == "Radiology Investigation" ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(RadiologyInvestigation)
          ])
        ])) : createCommentVNode("", true),
        segmentContent.value == "Other Investigation" ? (openBlock(), createElementBlock("div", _hoisted_8$1)) : createCommentVNode("", true)
      ]);
    };
  }
});

const Investigations = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-9ab30198"]]);

const _sfc_main$3 = defineComponent({
  created() {
  },
  components: {
    IonItem,
    IonCol,
    IonLabel,
    IonIcon
  },
  data() {
    return {
      iconsContent: icons,
      localMedicalDrugsList: [...this.$props._selectedMedicalDrugsList]
    };
  },
  props: {
    _selectedMedicalDrugsList: {
      type: Array,
      default: []
    },
    show_actions_buttons: {
      type: Boolean,
      default: true
    },
    highLightBackground: {
      type: String,
      default: "item-native"
    }
  },
  watch: {},
  methods: {
    highlightItem(item) {
      const el = document.getElementById(item + "_lbl");
      if (el) {
        el.style.color = "#006401";
      }
      this.highlightActionBtns(item);
    },
    undoHighlightItem(item) {
      const el = document.getElementById(item + "_lbl");
      if (el) {
        el.style.color = "#636363";
      }
      this.undohighlightActionBtns(item);
    },
    highlightActionBtns(item) {
      const elements = document.getElementsByClassName(item + "_spanlbl");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline-block";
      }
    },
    undohighlightActionBtns(item) {
      const elements = document.getElementsByClassName(item + "_spanlbl");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    },
    asignLblID(num) {
      return num + "_lbl";
    },
    asignSpanLblID(num) {
      return num + "_spanlbl";
    },
    async removeItemAtIndex(index, e) {
      const deleteConfirmed = await popoverConfirmation("Do you want to delete it?", e);
      if (deleteConfirmed) {
        this.$emit("remove-item", index);
      }
    },
    editItemAtIndex(index) {
      this.$emit("edit-item", index);
    },
    highLightBnd(item) {
      if (item) {
        if (item.highlightbackground !== void 0 && item.highlightbackground == true) {
          return this.$props.highLightBackground;
        }
      } else {
        return false;
      }
    }
  }
});

const _hoisted_1$3 = ["onMousemove", "onMouseout"];
const _hoisted_2$2 = { class: "route-label" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.localMedicalDrugsList, (item, index) => {
    return openBlock(), createElementBlock("div", {
      id: "df",
      class: "medication-item",
      key: index,
      onMousemove: ($event) => _ctx.highlightItem(index),
      onMouseout: ($event) => _ctx.undoHighlightItem(index)
    }, [
      createVNode(_component_ion_row, { class: "medication-header" }, {
        default: withCtx(() => [
          createVNode(_component_ion_col, {
            class: normalizeClass(["ion-text-wrap", _ctx.highLightBnd(item)])
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, {
                id: _ctx.asignLblID(index),
                class: "medication-name"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.drugName), 1)
                ]),
                _: 2
              }, 1032, ["id"])
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        _: 2
      }, 1024),
      createVNode(_component_ion_row, { class: "medication-details" }, {
        default: withCtx(() => [
          createVNode(_component_ion_col, {
            size: "10",
            class: normalizeClass(["ion-text-wrap details-col", _ctx.highLightBnd(item)])
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, { class: "details-text" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.dose) + " / " + toDisplayString(item.frequency) + " / daily / " + toDisplayString(item.duration) + " / until " + toDisplayString(item.prescription) + " ", 1),
                  createBaseVNode("span", _hoisted_2$2, toDisplayString(item.route_name), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["class"]),
          _ctx.show_actions_buttons ? (openBlock(), createBlock(_component_ion_col, {
            key: 0,
            class: normalizeClass([_ctx.highLightBnd(item), "actions-col"]),
            size: "2"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, {
                class: normalizeClass(["action-button", _ctx.asignSpanLblID(index)]),
                onClick: ($event) => _ctx.editItemAtIndex(index)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.iconsContent.edit
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["class", "onClick"]),
              createVNode(_component_ion_label, {
                class: normalizeClass(["action-button", _ctx.asignSpanLblID(index)]),
                onClick: ($event) => _ctx.removeItemAtIndex(index, $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.iconsContent.delete
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["class", "onClick"])
            ]),
            _: 2
          }, 1032, ["class"])) : createCommentVNode("", true)
        ]),
        _: 2
      }, 1024)
    ], 40, _hoisted_1$3);
  }), 128);
}
const DynamicList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-01c693a3"]]);

const _hoisted_1$2 = {
  key: 0,
  class: "custom-allergy-container"
};
const _hoisted_2$1 = { class: "button-group" };
const __default__$1 = defineComponent({
  watch: {},
  name: "AllergiesComponent"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props, { expose: __expose }) {
    const allergyStore = useAllegyStore();
    const DemographicsStore = useDemographicsStore();
    const userStore = useUserStore();
    const selectedAllergiesList = computed(() => allergyStore.selectedMedicalAllergiesList);
    const patient = computed(() => DemographicsStore.patient);
    const allergiesList = computed(() => allergyStore.medicalAllergiesList);
    const uniqueId = ref(generateUniqueId(8, "item-"));
    const selectedAllergiesList2 = computed(() => allergyStore.selectedMedicalAllergiesList);
    const allergyToAdd = ref("");
    const showOtherInput = ref(false);
    const list_picker_prperties = [
      {
        multi_Selection: true,
        show_list_label: true,
        unqueId: uniqueId.value,
        name_of_list: "Add/Remove allergies",
        placeHolder: "Search for an allergy",
        items: [],
        listUpdatedFN: listUpdated1,
        listFilteredFN: () => {
        },
        searchTextFN: FindAllegicDrugName,
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "please select a User",
        disabled: ref(false)
      }
    ];
    const addingCustomAllergy = ref(false);
    onMounted(async () => {
      checkIfSamePatientInContext();
    });
    const checkIfSamePatientInContext = () => {
      if (allergyStore.current_patient.ID != patient.value.ID) {
        allergyStore.clearSelectedMedicalAllergiesList();
        allergyStore.setCurrentPatient(patient.value);
      }
    };
    function listUpdated1(data) {
      data.forEach((item) => {
        if (item.selected == true && item.name === "Other") {
          showOtherInput.value = item.name === "Other";
        }
        if (item.selected == false && item.name === "Other") {
          cancelCustomAllergy();
        }
      });
      allergyStore.setSelectedMedicalAllergiesList(data);
      setCommonAllergiesList();
    }
    async function FindAllegicDrugName(text) {
      const searchText = text;
      const drugs = await ConceptService.getConceptSet("OPD Medication", searchText);
      if (!drugs) return;
      drugs.map((drug) => ({
        label: drug.name,
        value: drug.name,
        other: drug
      }));
      const temp_data_1 = searchHealthcareEquipmentAllergies(searchText);
      const temp_data_2 = concatenateArrays(temp_data_1, drugs);
      const sortedList = temp_data_2.sort((a, b) => a.name.localeCompare(b.name));
      allergyStore.setMedicalAllergiesList(sortedList);
      setCommonAllergiesList();
    }
    function setCommonAllergiesList() {
      const temp_data_2 = allergiesList.value;
      selectedAllergiesList.value.forEach((selected_alle) => {
        let found = false;
        temp_data_2.forEach((alle_dat_itm, index) => {
          if (alle_dat_itm.concept_id == selected_alle.concept_id && selected_alle.selected === true) {
            temp_data_2[index] = selected_alle;
            found = true;
          }
        });
        if (!found && selected_alle.selected === true) {
          temp_data_2.push(selected_alle);
        }
      });
      const op_ = temp_data_2.filter(
        (item, index, self) => index === self.findIndex((t) => t?.concept_id === item?.concept_id)
      );
      allergyStore.setMedicalAllergiesList(op_);
    }
    function generateUniqueId(length = 8, prefix = "") {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = prefix;
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result += `-${Date.now()}`;
      return result;
    }
    async function addCustomAllergy(allergyName) {
      try {
        const customAllergy = allergyName.trim();
        if (customAllergy) {
          const newAllergy = {
            name: customAllergy,
            selected: true,
            concept_id: generateUniqueId(8, "12"),
            concept_name_id: generateUniqueId(8, "34")
          };
          allergyStore.setMedicalAllergiesList([...allergiesList.value, newAllergy]);
          allergyStore.setSelectedMedicalAllergiesList(newAllergy);
          showOtherInput.value = false;
          addingCustomAllergy.value = true;
          allergyToAdd.value = "";
          const Other = allergyStore.findSelectedAllergyByName("Other");
          allergyStore.unselectOther(Other);
        }
      } catch (error) {
        console.error(error);
      }
    }
    const cancelCustomAllergy = () => {
      showOtherInput.value = false;
      allergyToAdd.value = "";
      addingCustomAllergy.value = false;
      const Other = allergyStore.findSelectedAllergyByName("Other");
      if (Other) {
        allergyStore.unselectOther(Other);
      }
    };
    const onSubmit = async () => {
      try {
        if (lodashExports.isEmpty(selectedAllergiesList2.value)) return;
        const allergicConceptId = await ConceptService.getConceptID("Allergic");
        const allergies = selectedAllergiesList2.value.map((a) => ({
          concept_id: allergicConceptId,
          obs_datetime: Service.getSessionDate(),
          value_coded: a.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: a.name
        }));
        await ObservationService.addObsToEncounterPatient(allergies, EncounterTypeId.MEDICAL_HISTORY);
        toastSuccess("Allergies appended to patient record successfully");
      } catch {
        toastWarning("Failed to save allergies");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonLabel), { class: "header-container" }, {
                default: withCtx(() => [
                  createVNode(unref(IonIcon), {
                    icon: unref(alertCircleOutline),
                    class: "allergy-icon"
                  }, null, 8, ["icon"]),
                  _cache[3] || (_cache[3] = createBaseVNode("span", { style: { "font-size": "16px", "font-weight": "600" } }, " Allergies (Medication, Healthcare items, Environment and Food) ", -1))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(ListPicker, {
                multiSelection: list_picker_prperties[0].multi_Selection,
                show_label: list_picker_prperties[0].show_list_label,
                uniqueId: list_picker_prperties[0].unqueId,
                name_of_list: list_picker_prperties[0].name_of_list,
                choose_place_holder: list_picker_prperties[0].placeHolder,
                "items_-list": allergiesList.value,
                use_internal_filter: list_picker_prperties[0].use_internal_filter,
                disabled: list_picker_prperties[0].disabled.value,
                onItemListUpDated: list_picker_prperties[0].listUpdatedFN,
                onItemListFiltered: list_picker_prperties[0].listFilteredFN,
                onItemSearchText: list_picker_prperties[0].searchTextFN
              }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered", "onItemSearchText"]),
              showOtherInput.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
                createVNode(unref(IonInput), {
                  modelValue: allergyToAdd.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allergyToAdd.value = $event),
                  placeholder: "Please specify the allergy",
                  fill: "outline",
                  class: "custom-input"
                }, null, 8, ["modelValue"]),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(unref(IonButton), {
                    onClick: _cache[1] || (_cache[1] = ($event) => addCustomAllergy(allergyToAdd.value)),
                    class: "addCustomAllergyBtn"
                  }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createTextVNode(" Add Allergy ", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(IonButton), {
                    onClick: _cache[2] || (_cache[2] = ($event) => cancelCustomAllergy()),
                    fill: "clear",
                    class: "cancelBtn"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonIcon), {
                        icon: unref(closeCircleOutline),
                        slot: "icon-only"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Allergies = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d63cacc6"]]);

const _hoisted_1$1 = { class: "checklist-container" };
const __default__ = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const DemographicsStore = useDemographicsStore();
    const patient = computed(() => DemographicsStore.patient);
    const nonPharmaTherapyStore = useNonPharmaTherapyStore();
    const items = nonPharmaTherapyStore.items;
    onMounted(async () => {
      checkIfSamePatientInContext();
    });
    const checkIfSamePatientInContext = () => {
      if (nonPharmaTherapyStore.current_patient.ID != patient.value.ID) {
        nonPharmaTherapyStore.clearSelectednonPharmaTherapyStore();
        nonPharmaTherapyStore.setCurrentPatient(patient.value);
      }
    };
    watch(
      () => patient.value,
      async (newValue) => {
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item) => {
          return openBlock(), createBlock(unref(IonItem), {
            key: item.id,
            class: "no-border"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonCheckbox), {
                id: item.id,
                modelValue: item.checked,
                "onUpdate:modelValue": ($event) => item.checked = $event,
                slot: "start"
              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"]),
              createVNode(unref(IonLabel), { style: { "font-size": "16px", "font-weight": "600" } }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.label), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]);
    };
  }
});

const NonPharmacologicalIntervention = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-371e920f"]]);

const _sfc_main = defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicInputField,
    IonDatetime,
    IonBadge,
    DateInputField,
    DynamicButton
  },
  props: {
    showPeripheral: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const clinicalDaysStore = useClinicalDaysStore();
    const appointment_count = ref(0);
    const disabledDates = computed(() => clinicalDaysStore.getDisabledDates());
    const datesCounts = computed(() => clinicalDaysStore.getAssignedAppointments());
    const inputPRDate = ref();
    const show_peripheral = computed(() => props.showPeripheral);
    return {
      disabledDates,
      datesCounts,
      appointment_count,
      calendarOutline,
      inputPRDate,
      show_peripheral
    };
  },
  data() {
    useNextAppointmentStore();
    useProgramStore();
    return {
      iconsContent: icons,
      date: new Date(Service.getSessionDate()),
      tomorrow: new Date(Service.getSessionDate()).getDate() + 1,
      appointment: "",
      drugRunoutDate: "",
      nextAppointmentDate: "",
      minDate: new Date(Service.getSessionDate())
    };
  },
  computed: {
    ...mapState(useNextAppointmentStore, ["nextAppointment", "appointmentCountsCache", "currentSelectedNextAppointmentDate"]),
    ...mapState(useClinicalDaysStore, ["maximumNumberOfDaysForEachDay", "assignedAppointmentsDates"]),
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useProgramStore, ["activeProgram"]),
    calendarDate() {
      const nextAppointmentStore = useNextAppointmentStore();
      return nextAppointmentStore.currentSelectedNextAppointmentDate ? HisDate.toStandardHisDisplayFormat(nextAppointmentStore.currentSelectedNextAppointmentDate) : "";
    },
    runOutDate() {
      const nextAppointmentStore = useNextAppointmentStore();
      return this.activeProgram?.program_id === 14 ? getOPDMedicationRunOutDate() : nextAppointmentStore.getAppointmentMedicationRunOutDate();
    }
  },
  watch: {
    calendarDate: {
      handler() {
        this.updateNextAppointment();
      },
      deep: true
    },
    "$service.sessionDate": {
      handler() {
        this.updateMinDate();
      },
      immediate: true
    },
    "patient.ID": {
      async handler(newID, oldID) {
        if (newID !== oldID) {
          this.cleanCurrentNextAppointmentDate();
          this.checkIfSamePatientInContext();
          this.clearNextAppointment();
        }
      }
    }
  },
  async mounted() {
    this.checkIfSamePatientInContext();
    await this.getAppointmentMents(this.runOutDate.date);
    await useGlobalPropertyStore().loadGlobalProperty();
    this.validateAppointmentCountsCache();
    await this.preloadAppointmentCounts();
    setValueProps();
    const userID = Service.getUserID();
    const patient = new PatientService();
    this.appointment = new AppointmentService(patient.getID(), userID);
    this.nextAppointmentDate = this.appointment.date;
    this.supposedRunOutDate();
    window.addEventListener("storage", this.handleStorageChange);
    getOPDMedicationRunOutDate();
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.handleStorageChange);
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === "sessionDate") {
        this.updateMinDate();
      }
    },
    updateMinDate() {
      this.date = new Date(Service.getSessionDate());
      this.minDate = new Date(Service.getSessionDate());
    },
    updateNextAppointment() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.setNextAppointment(this.calendarDate);
    },
    async handleDateUpdate(date) {
      if (date) {
        const storeClinicalDaysStore = useClinicalDaysStore();
        storeClinicalDaysStore.setAssignedAppointmentsDates(date, true);
        this.calendarDate = HisDate.toStandardHisDisplayFormat(date);
        await this.save();
        await this.getAppointmentMents(date);
        await this.updateAppointmentCache(date);
        const nextAppointmentStore = useNextAppointmentStore();
        nextAppointmentStore.setCurrentSelectedNextAppointmentDate(date, this.patient.ID);
      }
    },
    async getAppointmentMents(date) {
      const statusStore = useStatusStore();
      if (statusStore.apiStatus) {
        try {
          const res = await AppointmentService.getDailyAppointments(HisDate.toStandardHisFormat(date), HisDate.toStandardHisFormat(date));
          this.appointment_count = res.length;
        } catch (error) {
        }
      }
    },
    getCounter(date) {
      const dateKey = HisDate.toStandardHisFormat(date);
      return this.appointmentCountsCache[dateKey] || "";
    },
    async save() {
      if (this.assignedAppointmentsDates.length > 0) {
        try {
          const appointment_service = new Appointment();
          const appointmentDetails = await appointment_service.createOfflineAppointment();
        } catch (error) {
        }
      }
    },
    async openCornfirmModal(date) {
      this.calendarDate = HisDate.toStandardHisDisplayFormat(date);
      await this.getAppointmentMents(date);
      const handleCancel = (event) => {
      };
      const handleConfirm = async (event) => {
        if (event.detail == true) {
          await this.handleDateUpdate(date);
        }
      };
      const dataToPass = { message: "Are you sure you want to add this Appointment?" };
      createModal(confirmModal, { class: "otherVitalsModal" }, true, dataToPass, { cancel: handleCancel, confirm: handleConfirm });
    },
    async handleInput(date) {
      this.inputPRDate = HisDate.toStandardHisDisplayFormat(date);
      await this.openCornfirmModal(date);
    },
    async supposedRunOutDate() {
      await DrugOrderService.getLastDrugsReceived(this.patient.patientID);
    },
    async preloadAppointmentCounts() {
      try {
        const startDate = new Date(Service.getSessionDate());
        startDate.setDate(1);
        const endDate = new Date(Service.getSessionDate());
        endDate.setMonth(endDate.getMonth() + 2);
        endDate.setDate(0);
        try {
          const appointments = await AppointmentService.getDailyAppointments(
            HisDate.toStandardHisFormat(startDate),
            HisDate.toStandardHisFormat(endDate)
          );
          if (!appointments) return;
          const uniqueAppointments = this.filterUniqueAppointments(appointments);
          const appointmentsByDate = {};
          uniqueAppointments.forEach((appointment) => {
            const appointmentDate = new Date(appointment.appointment_date);
            const dateKey = HisDate.toStandardHisFormat(appointmentDate);
            if (!appointmentsByDate[dateKey]) {
              appointmentsByDate[dateKey] = 0;
            }
            appointmentsByDate[dateKey]++;
          });
          Object.keys(appointmentsByDate).forEach((dateKey) => {
            this.appointmentCountsCache[dateKey] = appointmentsByDate[dateKey];
          });
        } catch (error) {
          console.error(`Error fetching appointments for date range:`, error);
        }
      } catch (error) {
        console.error("Error in preload process:", error);
      }
    },
    // Helper method to filter unique appointments
    filterUniqueAppointments(appointments) {
      const uniqueMap = /* @__PURE__ */ new Map();
      appointments.forEach((appointment) => {
        const key = `${appointment.given_name}_${appointment.family_name}_${appointment.birthdate}_${appointment.appointment_date}`;
        if (!uniqueMap.has(key)) {
          uniqueMap.set(key, appointment);
        }
      });
      return Array.from(uniqueMap.values());
    },
    async updateAppointmentCache(date) {
      try {
        const dateKey = HisDate.toStandardHisFormat(date);
        const appointments = await AppointmentService.getDailyAppointments(
          HisDate.toStandardHisFormat(date),
          HisDate.toStandardHisFormat(date)
        );
        if (!appointments) return;
        this.appointmentCountsCache[dateKey] = appointments.length;
      } catch (error) {
        console.error("Error updating appointment cache:", error);
      }
    },
    validateAppointmentCountsCache() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.checkCurrentLocationIfInContext();
    },
    isRunOutDate(date) {
      if (!this.runOutDate || !this.runOutDate.date) return false;
      return HisDate.toStandardHisFormat(date) === HisDate.toStandardHisFormat(this.runOutDate.date);
    },
    cleanCurrentNextAppointmentDate() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.cleanCurrentSelectedNextAppointmentDate();
    },
    checkIfSamePatientInContext() {
      const nextAppointmentStore = useNextAppointmentStore();
      if (nextAppointmentStore.current_patient.ID != this.patient.ID) {
        this.cleanCurrentNextAppointmentDate();
        nextAppointmentStore.setCurrentPatient(this.patient);
      }
    },
    clearNextAppointment() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.clearAppointmentMedicationRunOutDate();
    }
  }
});

const _hoisted_1 = { class: "card_content" };
const _hoisted_2 = { class: "count-badge" };
const _hoisted_3 = { class: "dates_title" };
const _hoisted_4 = { class: "sub_data" };
const _hoisted_5 = { class: "dates_title" };
const _hoisted_6 = { class: "sub_data" };
const _hoisted_7 = { class: "dates_title" };
const _hoisted_8 = { class: "sub_data" };
const _hoisted_9 = { class: "dates_title" };
const _hoisted_10 = { class: "sub_data" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueDatePicker = resolveComponent("VueDatePicker");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_DateInputField = resolveComponent("DateInputField");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          "size-sm": "12",
          "size-md": "12",
          "size-lg": "12",
          "size-xl": "8"
        }, {
          default: withCtx(() => [
            createVNode(_component_VueDatePicker, {
              class: "calender",
              onDateUpdate: _ctx.openCornfirmModal,
              inline: "",
              "auto-apply": "",
              "enable-time-picker": false,
              "disabled-dates": _ctx.disabledDates,
              "min-date": _ctx.minDate,
              modelValue: _ctx.runOutDate.date,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.runOutDate.date = $event)
            }, {
              day: withCtx(({ day, date }) => [
                true ? (openBlock(), createElementBlock("p", {
                  key: 0,
                  class: normalizeClass({ "run-out-date": _ctx.isRunOutDate(date) }),
                  style: { "font-weight": "600", "font-size": "20px" }
                }, [
                  createBaseVNode("span", null, [
                    createTextVNode(toDisplayString(day), 1),
                    createBaseVNode("sup", _hoisted_2, toDisplayString(_ctx.getCounter(date)), 1)
                  ])
                ], 2)) : (openBlock(), createElementBlock(_Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(day), 1)
                ], 64))
              ]),
              _: 1
            }, 8, ["onDateUpdate", "disabled-dates", "min-date", "modelValue"])
          ]),
          _: 1
        }),
        _ctx.show_peripheral ? (openBlock(), createBlock(_component_ion_col, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", null, [
                    createTextVNode("Suggested Next Appointment Date "),
                    createBaseVNode("span", { style: { "font-size": "16px" } }, "(Medication run out date)")
                  ], -1)),
                  createBaseVNode("div", _hoisted_4, [
                    createTextVNode(toDisplayString(_ctx.runOutDate.formattedDate || "No run out date available") + " ", 1),
                    _ctx.runOutDate.formattedDate ? (openBlock(), createBlock(_component_DynamicButton, {
                      key: 0,
                      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleDateUpdate(_ctx.runOutDate.date)),
                      name: "Set Next Appt.",
                      fill: "solid",
                      iconSlot: "icon-only",
                      style: { "float": "right" }
                    })) : createCommentVNode("", true)
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5, [
                  _cache[4] || (_cache[4] = createBaseVNode("div", null, "User set appointment date", -1)),
                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.calendarDate), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  _cache[5] || (_cache[5] = createBaseVNode("div", null, "Appointments", -1)),
                  createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.appointment_count), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  _cache[6] || (_cache[6] = createBaseVNode("div", null, "Appointment limit (per/day)", -1)),
                  createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.appointment_count) + "/" + toDisplayString(_ctx.maximumNumberOfDaysForEachDay), 1)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    _ctx.show_peripheral ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { size: "4" }, {
          default: withCtx(() => [
            createVNode(_component_DateInputField, {
              inputHeader: "Preferred Next Appointment Date",
              bold: "600",
              fontSize: "17px",
              placeholderFontSize: "17px",
              placeholderFontWeight: "600",
              unit: "",
              icon: _ctx.calendarOutline,
              placeholder: "press to select date",
              iconRight: "",
              inputWidth: "100%",
              inputValue: _ctx.inputPRDate,
              eventType: "",
              minDate: _ctx.minDate,
              maxDate: "",
              disabled: false,
              "onUpdate:rawDateValue": _cache[2] || (_cache[2] = ($event) => _ctx.handleInput($event))
            }, null, 8, ["icon", "inputValue", "minDate"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const NextAppointment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4e58e0bc"]]);

export { Allergies as A, DynamicList as D, Investigations as I, LabOrder as L, NextAppointment as N, _sfc_main$5 as _, NonPharmacologicalIntervention as a, _sfc_main$9 as b, isQualifiedAHD as i };
