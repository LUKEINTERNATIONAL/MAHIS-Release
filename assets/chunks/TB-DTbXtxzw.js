import { C as StandardForm, K as ObservationService, b as EncounterTypeId, bX as toastSuccess, _ as _export_sfc, G as toastSuccess$1 } from '../index-dAcYVh-O.js';
import { d as computed, q as defineComponent, r as ref, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx } from './vendor-BK8x96Ok.js';

const useUltrasoundForm = () => {
  const ultrasoundFormSection = computed(() => {
    return [
      // ========== Question 1: ULTRASOUND SCAN STATUS ==========
      {
        componentType: "radioButtonField",
        header: "What is the status of the ultrasound?",
        name: "Ultrasound scan status",
        obsValueType: "value_coded",
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Ultrasound scan conducted",
            value: "Ultrasound scan conducted"
          },
          {
            label: "Ultrasound scan not done",
            value: "Ultrasound scan not done"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "dateInputField",
        header: "Ultrasound Scan Date",
        name: "Ultrasound Scan Date",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Ultrasound scan status"] == "Ultrasound scan conducted";
        },
        value: "",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Reason ultrasound not done",
        name: "Reason ultrasound not done",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Ultrasound scan status"] == "Ultrasound scan not done";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Machine not functioning",
            value: "Machine not functioning"
          },
          {
            label: "Technician not available",
            value: "Technician not available"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify other reason for ultrasound not done",
        name: "_Reason ultrasound not done",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Reason ultrasound not done"] == "Other";
        },
        value: "",
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Amniotic fluid level detected during ultrasound",
        name: "Evidence of amniotic fluid",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Ultrasound scan status"] == "Ultrasound scan conducted";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Normal amniotic fluid level",
            value: "Normal amniotic fluid level"
          },
          {
            label: "Reduced amniotic fluid level",
            value: "Reduced amniotic fluid level"
          },
          {
            label: "Increased amniotic fluid level",
            value: "Increased amniotic fluid level"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Amniotic fluid level results",
        name: "Amniotic fluid level results",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Ultrasound scan status"] == "Ultrasound scan conducted";
        },
        value: "",
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Location of the placenta detected during ultrasound",
        name: "Location of the placenta detected during ultrasound",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Ultrasound scan status"] == "Ultrasound scan conducted";
        },
        options: [
          { label: "Previa", value: "Placenta previa" },
          { label: "Low", value: "Low" },
          { label: "Anterior", value: "Anterior" },
          { label: "Right side", value: "Right side" },
          { label: "Left side", value: "Left side" },
          { label: "fungal", value: "fungal" }
        ],
        value: "",
        grid: { s: "12" }
      }
    ];
  });
  return {
    ultrasoundFormSection
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UltrasoundScan",
  setup(__props, { expose: __expose }) {
    const composable = useUltrasoundForm();
    const formRef = ref(null);
    const UltrasoundForm = computed(() => {
      return composable.ultrasoundFormSection.value;
    });
    const onSubmit = async () => {
      const formValues = formRef.value?.getFormValues();
      if (Object.keys(formValues || {}).length == 0) return;
      if (await ObservationService.buildSaveObs(formValues, EncounterTypeId.LABOUR_ASSESSMENT)) {
        toastSuccess("Ultrasound Scan data saved successfully");
        formRef.value?.resetForm();
      }
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": UltrasoundForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const UltrasoundScan = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0a22359d"]]);

const UserUrineTestForm = () => {
  const urineTestFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Select Wether",
        name: "Urine test status",
        obsValueType: "value_coded",
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Urine Test Conducted",
            value: "Urine Test Conducted"
          },
          {
            label: "Urine Test Not Done",
            value: "Urine Test Not Done"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Select the urine test conducted",
        name: "Urine Test Conducted",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Urine test status"] == "Urine Test Conducted";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Midstream urine culture (recommended)",
            value: "Midstream urine culture"
          },
          {
            label: "Midstream urine gram-staining",
            value: "Midstream urine gram-staining"
          },
          {
            label: "Urine dipstick test",
            value: "Urine dipstick"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Midstream urine culture result",
        name: "Midstream urine culture result",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Urine Test Conducted"] == "Midstream urine culture";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Positive-any agent",
            value: "Positive-any agent"
          },
          {
            label: "Positive-Group B Streptococcus(GBS)",
            value: "Positive-Group B Streptococcus(GBS)"
          },
          {
            label: "Negative",
            value: "Negative"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Dipstick test result - nitrites",
        name: "Nitrites dipstick test result",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Urine Test Conducted"] == "Urine dipstick";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "None",
            value: "None"
          },
          {
            label: "+",
            value: "+"
          },
          {
            label: "++",
            value: "++"
          },
          {
            label: "+++",
            value: "+++"
          },
          {
            label: "++++",
            value: "++++"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Dipstick test result - leukocytes",
        name: "Leukocytes dipstick test result",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Urine Test Conducted"] == "Urine dipstick";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "+",
            value: "+"
          },
          {
            label: "++",
            value: "++"
          },
          {
            label: "+++",
            value: "+++"
          },
          {
            label: "++++",
            value: "++++"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Dipstick test result - protein",
        name: "Leukocytes dipstick test result",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Urine Test Conducted"] == "Urine dipstick";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "+",
            value: "+"
          },
          {
            label: "++",
            value: "++"
          },
          {
            label: "+++",
            value: "+++"
          },
          {
            label: "++++",
            value: "++++"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Dipstick test result - glucose",
        name: "Leukocytes dipstick test result",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Urine Test Conducted"] == "Urine dipstick";
        },
        value: "",
        // Initialize as an empty string for single radio button
        options: [
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "+",
            value: "+"
          },
          {
            label: "++",
            value: "++"
          },
          {
            label: "+++",
            value: "+++"
          },
          {
            label: "++++",
            value: "++++"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Reason urine test not done",
        name: "Reason urine test not done",
        obsValueType: "value_coded",
        type: "multiple",
        condition: (allFormValues) => {
          return allFormValues["Urine test status"] == "Urine Test Not Done";
        },
        options: [
          {
            label: "Machine not functioning",
            value: "Machine not functioning"
          },
          {
            label: "Technician not available",
            value: "Technician not available"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Other (specify) reason urine test not done",
        name: "_Reason urine test not done",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Urine test status"] == "Urine Test Not Done" && allFormValues["Reason urine test not done"]?.includes("Other");
        }
      }
    ];
  });
  return {
    urineTestFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UrineTest",
  setup(__props, { expose: __expose }) {
    const composable = UserUrineTestForm();
    const formRef = ref(null);
    const UrineTestForm = computed(() => {
      return composable.urineTestFormSection.value;
    });
    const onSubmit = async () => {
      const formValues = formRef.value?.getFormValues();
      if (Object.keys(formValues || {}).length == 0) return;
      if (await ObservationService.buildSaveObs(formValues, EncounterTypeId.LABOUR_ASSESSMENT)) {
        toastSuccess$1("Urine Test data saved successfully");
        formRef.value?.resetForm();
      }
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": UrineTestForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const UrineTest = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a3775a3e"]]);

const useTBScreeningForm = () => {
  const tbScreeningFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "TB Screening",
        name: "TB screening status",
        obsValueType: "value_coded",
        options: [
          {
            label: "TB Screening Conducted",
            value: "TB Screening Conducted"
          },
          {
            label: "TB Screening Not Conducted",
            value: "TB Screening Not Conducted"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "TB Screening Result",
        name: "TB Screening Result",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive for TB",
            value: "Positive"
          },
          {
            label: "Negative for TB",
            value: "Negative"
          },
          {
            label: "Inconclusive",
            value: "Inconclusive"
          },
          {
            label: "Incomplete (sysmptom only)",
            value: "Incomplete"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["TB screening status"] == "TB Screening Conducted";
        },
        grid: { s: "12" }
      },
      {
        componentType: "dateInputField",
        header: "TB Screening Date",
        name: "TB Screening Date",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["TB screening status"] == "TB Screening Conducted";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Reason TB_Screening not done",
        name: "Reason TB Screening not done",
        obsValueType: "value_coded",
        type: "multiple",
        condition: (allFormValues) => {
          return allFormValues["TB Screening"] == "TB Screening Not Conducted";
        },
        options: [
          {
            label: "Spetum smear not available",
            value: "Spetum smear not available"
          },
          {
            label: "Spetum culture not available",
            value: "Spetum culture not available"
          },
          {
            label: "GeneXpert machine not available",
            value: "GeneXpert machine not available"
          },
          {
            label: "x-ray machine not available",
            value: "x-ray machine not available"
          },
          {
            label: "No spetum testing supplies available",
            value: "No spetum testing supplies available"
          },
          {
            label: "Machine not functioning",
            value: "Machine not functioning"
          },
          {
            label: "Technician not available",
            value: "Technician not available"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "_Reason TB Test not done",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Reason TB Test not done"]?.includes("Other");
        }
      }
    ];
  });
  return {
    tbScreeningFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TB",
  setup(__props, { expose: __expose }) {
    const composable = useTBScreeningForm();
    const formRef = ref(null);
    const TBscreeningForm = computed(() => {
      return composable.tbScreeningFormSection.value;
    });
    const onSubmit = async () => {
      const formValues = formRef.value?.getFormValues();
      if (Object.keys(formValues || {}).length == 0) return;
      if (await ObservationService.buildSaveObs(formValues, EncounterTypeId.LABOUR_ASSESSMENT)) {
        toastSuccess$1("TB Screening data saved successfully");
        formRef.value?.resetForm();
      }
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": TBscreeningForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const TBTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d15322f"]]);

export { TBTest as T, UrineTest as U, UltrasoundScan as a };
