import { q as defineComponent, r as ref, d as computed, O as createBlock, y as openBlock, a2 as onMounted, x as createElementBlock, z as createVNode, A as withCtx, E as unref, bH as IonCard, J as Fragment, aF as useRouter, B as createBaseVNode, bC as IonModal, I as IonHeader, ay as IonToolbar, az as IonTitle, L as IonIcon, eG as eggOutline, a5 as createTextVNode, C as toDisplayString, b8 as IonButtons, N as IonButton, F as closeCircleOutline, a7 as IonLabel, H as IonContent, G as createCommentVNode, b9 as IonFooter, bE as saveOutline, an as IonItem, bL as IonSelect, R as renderList, bK as IonSelectOption } from './vendor-Cy_N32Zh.js';
import { n as icons, C as StandardForm, _ as _export_sfc, F as DynamicButton, z as useExposeFromStandardForm } from '../index-CZxb0S4T.js';
import { d as defineStore, s as storeToRefs } from './pinia-Bqc2Rgok.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "breastExaminationsResults",
  setup(__props) {
    const formKey = ref(0);
    const breastExaminationsResults = computed(() => {
      return [
        {
          name: "No breast exam conducted",
          label: "No breast exam conducted",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Normal breast exam result",
          label: "Normal breast exam result",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Bleeding",
          label: "Bleeding",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Nodule",
          label: "Nodule",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Rapid breathing",
          label: "Rapid breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Discharge",
          label: "Discharge",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Flushing",
          label: "Flushing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Local pain",
          label: "Local pain",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Increased temperature",
          label: "Increased temperature",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Breast",
          label: "Breast",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Tenderness",
          label: "Tenderness",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Other findings",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Other findings",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Other general exam findings": "" };
            }
          }
        },
        {
          header: "Other general exam findings",
          name: "Other general exam findings",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Breast examinations results",
        formData: breastExaminationsResults.value,
        key: formKey.value,
        ref: "formRef"
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "vaginalInspection",
  setup(__props) {
    const formKey = ref(0);
    const vaginalInspection = computed(() => {
      return [
        {
          name: "No vaginal inspection done",
          label: "No vaginal inspection done",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Nothing abnormal observed",
          label: "Nothing abnormal observed",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Abnormal discharge",
          label: "Abnormal discharge",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Papules",
          label: "Papules",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Ulcers",
          label: "Ulcers",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Warts",
          label: "Warts",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Vesicles",
          label: "Vesicles",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Bleeding",
          label: "Bleeding",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Genital pain",
          label: "Genital pain",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Other findings",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Other findings",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Other general exam findings": "" };
            }
          }
        },
        {
          header: "Other general exam findings",
          name: "Other general exam findings",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true
        },
        {
          name: "Amniotic fluid level",
          label: "Amniotic fluid level",
          header: "Amniotic fluid level",
          componentType: "inputField",
          icon: icons.editPen
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Vaginal inspection",
        formData: vaginalInspection.value,
        key: formKey.value,
        ref: "formRef"
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "vaginalExaminationDone",
  setup(__props) {
    const formKey = ref(0);
    const isPallorPresent = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Is vaginal examination done?",
          header: "Is vaginal examination done?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Digital": "", "Speculum": "" };
            }
          }
        },
        //     name: "Type of vaginal examination done?",
        {
          name: "Digital",
          label: "Digital",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Is vaginal examination done?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Digital examination findings notes": "" };
            }
          }
        },
        {
          header: "Digital examination findings notes",
          name: "Digital examination findings notes",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Digital"] === true && allFormValues["Is vaginal examination done?"] === "Yes"
        },
        {
          name: "Speculum",
          label: "Speculum",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Is vaginal examination done?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "peculum examination findings notes": "" };
            }
          }
        },
        {
          header: "peculum examination findings notes",
          name: "peculum examination findings notes",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Speculum"] === true && allFormValues["Is vaginal examination done?"] === "Yes"
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Is vaginal examination done",
        formData: isPallorPresent.value,
        key: formKey.value,
        ref: "formRef"
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MaternalExam",
  setup(__props, { expose: __expose }) {
    onMounted(() => {
    });
    const onSubmit = async () => {
      return true;
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
      // resetForm: () => {
      //     formKey.value++;
      //     nextTick(() => {
      //         heightWeightForm.loadHeight();
      //     });
      // },
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$8)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$7)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const MaternalExam = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f6adadd7"]]);

const initialPresentingSigns = [
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Any injury present?",
        selectedValue: "",
        name: "Injury present",
        class: "bold",
        displayNext: "Yes"
      },
      data: [
        {
          value: "Yes",
          name: "Yes",
          colSize: "2.5"
        },
        {
          value: "No",
          name: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Injury present",
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Is there traumatic injury to abdomen?",
        selectedValue: "",
        name: "Traumatic injury",
        class: "bold",
        displayNone: "true",
        displayNext: "Yes"
      },
      data: [
        {
          value: "Yes",
          name: "Yes",
          colSize: "2.5"
        },
        {
          value: "No",
          name: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Traumatic injury",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    header: {
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Specify the injury",
              unit: "",
              icon: icons.editPen,
              value: "",
              name: "Other (specify)",
              valueType: "text",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              displayNone: true
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Any other clinical enquiry done?",
        selectedValue: "",
        name: "Clinical enquiry",
        class: "bold",
        displayNext: "Yes"
      },
      data: [
        {
          value: "Yes",
          name: "Yes",
          colSize: "2.5"
        },
        {
          value: "No",
          name: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Clinical enquiry",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border",
    header: {
      title: "Any other clinical enquiry done?",
      selectedValue: "",
      name: "Clinical enquiry notes",
      class: "bold"
    },
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify the clinical enquiry provided",
              unit: "",
              icon: icons.editPen,
              value: "",
              name: "Clinical enquiry notes",
              valueType: "text",
              required: true,
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "",
    checkboxBtnContent: {
      header: {
        title: "Reason clinical enquiry was not done",
        selectedValue: "",
        displayNone: true,
        name: "Reason not done",
        class: "bold"
      },
      data: [
        {
          value: "Client referred",
          name: "Client was referred",
          colSize: "7"
        },
        {
          value: "Trained provider unavailable",
          name: "Trained provider unavailable",
          colSize: "7"
        },
        {
          value: "Safe space unavailable",
          name: "Private or safe space unavailable",
          colSize: "7"
        },
        {
          value: "Confidentiality not assured",
          name: "Confidentiality could not be assured",
          colSize: "7"
        },
        {
          value: "Other reason",
          name: "Other reason",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Other reason'",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    header: {
      title: "",
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Specify ",
              unit: "",
              icon: icons.editPen,
              value: "",
              name: "Other (specify)",
              valueType: "text",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              displayNone: true
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Has the woman been subjected to any form of violence?",
        selectedValue: "",
        name: "Woman subjected to IPV",
        class: "bold",
        displayNext: "Yes"
      },
      data: [
        {
          value: "Yes",
          name: "Yes",
          colSize: "2.5"
        },
        {
          value: "no",
          name: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Woman subjected to IPV",
    selectdData: [],
    classDash: "",
    checkboxBtnContent: {
      header: {
        title: "What type of Intimate Partner Violence the woman has been subjected to?",
        selectedValue: "",
        name: "Type of IPV the woman has been subjected to",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          value: "Physical violence (IPV)",
          name: "Physical violence",
          colSize: "7"
        },
        {
          value: "Sexual violence",
          name: "Sexual violence",
          colSize: "7"
        },
        {
          value: "Psychological abuse",
          name: "Psychological/emotional abuse",
          colSize: "7"
        },
        {
          value: "Physiological violence",
          name: "Physiological violence",
          colSize: "7"
        },
        {
          value: "Stalking",
          name: "Stalking",
          colSize: "7"
        },
        {
          value: "Other",
          name: "Other",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Other",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    header: {
      title: "Types of IPV",
      selectedValue: "",
      name: "Other"
    },
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Violence by other family members (specify)",
              unit: "",
              icon: icons.editPen,
              value: "",
              name: "Other (specify)",
              required: true,
              eventType: "input",
              valueType: "text",
              inputWidth: "100%",
              displayNone: true
            }
          ]
        }
      ]
    }
  }
];
const usePresentingSigns = defineStore("presentingSigns", {
  state: () => ({
    presentingSigns: [...initialPresentingSigns]
  }),
  actions: {
    setClinicalEnquiry(data) {
      this.presentingSigns = data;
    },
    getInitialPresentingSigns() {
      const data = lodashExports.cloneDeep(initialPresentingSigns);
      return [...data];
    }
  }
  //
});

const _hoisted_1$3 = { style: { "padding": "20px" } };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PresentingSigns",
  setup(__props, { expose: __expose }) {
    const presentingSignsOrConditionsForIPV = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Is the abdomen shiny?",
          name: "Is the abdomen shiny?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Is there traumatic injury to abdomen": "" };
            }
          }
        },
        {
          componentType: "radioButtonField",
          header: "Is there traumatic injury to abdomen?",
          name: "Is there traumatic injury to abdomen",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Is the abdomen shiny?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Specify the injury": "" };
            }
          }
        },
        {
          header: "Specify the injury",
          name: "Specify the injury",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Is there traumatic injury to abdomen"] === "Yes" && allFormValues["Is the abdomen shiny?"] === "Yes"
        },
        {
          name: "Any other clinical enquiry done?",
          componentType: "radioButtonField",
          header: "Any other clinical enquiry done?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Specify the clinical enquiry provided": "" };
            }
          }
        },
        {
          header: "Specify the clinical enquiry provided",
          name: "Specify the clinical enquiry provided",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any other clinical enquiry done?"] === "Yes"
        },
        {
          name: "Has the woman been subjected to any form of violence?",
          componentType: "radioButtonField",
          header: "Has the woman been subjected to any form of violence?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Physical violence (IPV)",
          name: "Physical violence",
          grid: { s: "5" },
          label: "Physical violence",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Sexual violence",
          name: "Sexual violence",
          grid: { s: "5" },
          label: "Sexual violence",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Psychological abuse",
          name: "Psychological/emotional abuse",
          grid: { s: "5" },
          label: "Psychological/emotional abuse",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Physiological violence",
          name: "Physiological violence",
          grid: { s: "5" },
          label: "Physiological violence",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Stalking",
          name: "Stalking",
          grid: { s: "5" },
          label: "Stalking",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Other",
          name: "Other",
          grid: { s: "5" },
          label: "Other",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Violence by other family members (specify)": "" };
            }
          }
        },
        {
          header: "Violence by other family members (specify)",
          name: "Violence by other family members (specify)",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other"] === true
        }
      ];
    });
    const initialData = ref([]);
    const formKey = ref(0);
    const presentingSignsStore = usePresentingSigns();
    const { presentingSigns } = storeToRefs(presentingSignsStore);
    useRouter();
    onMounted(() => {
      initialData.value = presentingSignsStore.getInitialPresentingSigns();
    });
    const onSubmit = async () => {
      return true;
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            (openBlock(), createBlock(StandardForm, {
              formData: presentingSignsOrConditionsForIPV.value,
              key: formKey.value,
              ref: "formRef"
            }, null, 8, ["formData"]))
          ])
        ]),
        _: 1
      });
    };
  }
});

const isOpen = ref(false);
const selectedFetusNumber = ref(null);
function useFetalDetails() {
  const openFetalModal = (fetusNum) => {
    selectedFetusNumber.value = fetusNum;
    isOpen.value = true;
  };
  const closeFetalModal = () => {
    isOpen.value = false;
    selectedFetusNumber.value = null;
  };
  return {
    isOpen,
    selectedFetusNumber,
    openFetalModal,
    closeFetalModal
  };
}

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "addFeatus",
  props: {
    featus_number: {}
  },
  setup(__props) {
    const formRef = ref(null);
    const props = __props;
    const subtitle = computed(() => {
      return `Capturing clinical data for Fetus #${props.featus_number}`;
    });
    const featusDataForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Fetal heartbeat present?",
          name: "Fetal heartbeat present?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return {
                "Fetal rate": "",
                "Repeated fetal rate": "",
                "specify the Fetal presentation": "",
                "Select fetal presentation": ""
              };
            }
          }
        },
        {
          name: "Fetal rate",
          header: "Fetal rate",
          label: "Fetal rate",
          componentType: "inputField",
          icon: icons.pulse,
          unit: "BMP",
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes"
        },
        {
          name: "Repeated fetal rate",
          header: "Repeated fetal rate",
          label: "Repeated fetal rate",
          componentType: "inputField",
          unit: "BMP",
          icon: icons.pulse,
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes"
        },
        {
          componentType: "radioButtonField",
          header: "Fetal heart rate regularity",
          name: "Fetal heart rate regularity",
          options: [
            { label: "Regular", value: "Regular" },
            { label: "Irregular", value: "Irregular" }
          ]
        },
        {
          componentType: "radioButtonField",
          header: "Select fetal presentation",
          name: "Select fetal presentation",
          grid: { s: "5" },
          options: [
            { label: "Unknown presentation", value: "Unknown presentation" },
            { label: "Cephalic", value: "Cephalic" },
            { label: "Pelvic", value: "Pelvic" },
            { label: "Transverse", value: "Transverse" },
            { label: "Breech", value: "Breech" },
            { label: "Other", value: "Other" }
          ],
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Other") {
              return { "specify the Fetal presentation": "" };
            }
          }
        },
        {
          name: "specify the Fetal presentation",
          header: "specify the Fetal presentation",
          label: "specify the Fetal presentation",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Select fetal presentation"] === "Other" && allFormValues["Fetal heartbeat present?"] === "Yes"
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: subtitle.value,
        formData: featusDataForm.value,
        key: __props.featus_number,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["subtitle", "formData"]);
    };
  }
});

const _hoisted_1$2 = { class: "header-content" };
const _hoisted_2$1 = { class: "header-text" };
const _hoisted_3$1 = {
  key: 0,
  class: "details-container"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FeatusModal",
  setup(__props) {
    const { isOpen, selectedFetusNumber, closeFetalModal } = useFetalDetails();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonModal), {
        "is-open": unref(isOpen),
        "show-backdrop": true,
        onDidDismiss: unref(closeFetalModal),
        "keyboard-close": false,
        class: "fetal-details-modal"
      }, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), { color: "light" }, {
                default: withCtx(() => [
                  createVNode(unref(IonTitle), { slot: "start" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1$2, [
                        createVNode(unref(IonIcon), {
                          icon: unref(eggOutline),
                          class: "header-icon"
                        }, null, 8, ["icon"]),
                        createBaseVNode("span", _hoisted_2$1, [
                          _cache[0] || (_cache[0] = createTextVNode("Fetal Details: ", -1)),
                          createBaseVNode("b", null, "Fetus " + toDisplayString(unref(selectedFetusNumber)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonButtons), {
                    slot: "end",
                    style: { "margin-right": "18px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        onClick: unref(closeFetalModal),
                        color: "danger",
                        fill: "solid"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(closeCircleOutline),
                            slot: "start"
                          }, null, 8, ["icon"]),
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[1] || (_cache[1] = [
                              createTextVNode("Close", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              unref(selectedFetusNumber) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createVNode(_sfc_main$4, { featus_number: unref(selectedFetusNumber) }, null, 8, ["featus_number"])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), { class: "ion-no-border" }, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonButtons), {
                    slot: "end",
                    style: { "margin-right": "18px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        expand: "block",
                        onClick: unref(closeFetalModal),
                        color: "primary",
                        fill: "solid"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(saveOutline),
                            slot: "start"
                          }, null, 8, ["icon"]),
                          _cache[2] || (_cache[2] = createTextVNode(" Save Details ", -1))
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["is-open", "onDidDismiss"]);
    };
  }
});

const FetusModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-62089c71"]]);

const _hoisted_1$1 = {
  key: 0,
  class: "selector-wrapper"
};
const _hoisted_2 = { class: "select-box-container" };
const _hoisted_3 = {
  key: 0,
  class: "button-list-wrap"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FetusSelector",
  props: {
    showSelector: { type: Boolean, default: false }
  },
  setup(__props) {
    const numFetuses = ref(null);
    const { openFetalModal } = useFetalDetails();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.showSelector ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(unref(IonItem), {
              lines: "outline",
              class: "narrow-select-item"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), { position: "stacked" }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Number of Fetuses", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonSelect), {
                  modelValue: numFetuses.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => numFetuses.value = $event),
                  interface: "popover",
                  placeholder: "Select",
                  class: "custom-select"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(8, (num) => {
                      return createVNode(unref(IonSelectOption), {
                        key: num,
                        value: num
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(num), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          numFetuses.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(numFetuses.value, (fetusNum) => {
              return openBlock(), createBlock(DynamicButton, {
                key: fetusNum,
                name: "add Fetus " + fetusNum,
                size: "small",
                fill: "solid",
                color: "primary",
                "onClicked:btn": ($event) => unref(openFetalModal)(fetusNum),
                class: "small-wrap-button"
              }, null, 8, ["name", "onClicked:btn"]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(FetusModal)
      ], 64);
    };
  }
});

const FetusSelector = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e532bb2c"]]);

const _hoisted_1 = { style: { "padding": "20px" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FetalAssessmentResults",
  setup(__props) {
    const formKey = ref(0);
    const { formRef } = useExposeFromStandardForm();
    const NumberOfFetusesKnown = (allFormValues) => {
      return allFormValues?.["Is number of fetuses known?"] === "Yes";
    };
    const showFetusSelector = () => {
      if (!formRef.value) return false;
      const x = formRef.value?.getFormValues();
      if (!x) return false;
      return NumberOfFetusesKnown(x);
    };
    const showSelector = computed(() => showFetusSelector());
    const isPallorPresent = computed(() => {
      return [
        {
          name: "Symphysis-fundal height (SFH) *",
          header: "Symphysis-fundal height (SFH) *",
          componentType: "inputField",
          icon: icons.height,
          unit: "cm"
        },
        {
          name: "Is number of fetuses known?",
          header: "Is number of fetuses known?",
          componentType: "radioButtonField",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Number of fetuses": "" };
            }
          }
          // condition: (allFormValues: any) => {
          //     return NumberOfFetusesKnown(allFormValues);
          // },
        }
        // {
        //     name: "Number of fetuses",
        //     header: "Number of fetuses",
        //     componentType: "inputField",
        //     icon: icons.editPen,
        // },
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(StandardForm, {
          subtitle: "Fetal assessment results",
          formData: isPallorPresent.value,
          key: formKey.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])),
        createVNode(FetusSelector, {
          showSelector: showSelector.value,
          style: { "margin-top": "20px" }
        }, null, 8, ["showSelector"])
      ]);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AbdominalExamination",
  setup(__props, { expose: __expose }) {
    onMounted(() => {
    });
    const onSubmit = async () => {
      return true;
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
      // resetForm: () => {
      //     formKey.value++;
      //     nextTick(() => {
      //         heightWeightForm.loadHeight();
      //     });
      // },
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), { class: "m-card" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1)
        ]),
        _: 1
      });
    };
  }
});

export { MaternalExam as M, _sfc_main as _, _sfc_main$5 as a };
