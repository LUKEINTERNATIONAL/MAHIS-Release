import { c as computed, s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, f as ref, aL as useRouter, a2 as onMounted, O as createBlock, F as unref, aG as IonContent, C as createBaseVNode, bY as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-CL0dVHZq.js';
import { _ as _sfc_main$5, u as useFormWizard } from './useFormWizard-GNH9uDZA.js';
import { z as StandardForm, K as ObservationService, b as EncounterTypeId, c6 as toastSuccess, _ as _export_sfc, G as toastSuccess$1, T as Toolbar, F as DynamicButton } from '../index-yRu5EhmF.js';
import { D as DemographicBar } from './DemographicBar-CT8l_KNM.js';

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

const _hoisted_1$4 = { class: "container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
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

const UltrasoundScan = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0a22359d"]]);

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

const _hoisted_1$3 = { class: "container" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
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

const UrineTest = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a3775a3e"]]);

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

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
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

const TBTest = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2d15322f"]]);

const useLabInvestigationForm = () => {
  const labInvestigationFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Pregnancy Test Result",
        name: "Pregnancy status",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
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
        header: "Urine Protein",
        name: "Urine Protein",
        obsValueType: "value_coded",
        options: [
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
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
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
        header: "Hb(g/dL)",
        name: "Hb(g/dL)",
        obsValueType: "value_coded",
        options: [
          {
            label: "normal range 11-14 g/dL",
            value: "normal range 11-14 g/dL"
          },
          {
            label: "below normal 10.9 g/d is anemia",
            value: "below normal 10.9 g/d is anemia"
          },
          {
            label: "Not Done",
            value: "Not Done"
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
        header: "Malaria Test (Test Type)",
        name: "Malaria Test",
        obsValueType: "value_coded",
        options: [
          {
            label: "mRDT",
            value: "MRDT"
          },
          {
            label: "Malaria Parasite",
            value: "Malaria Parasite"
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
        header: "mRDT results",
        name: "mRDT results",
        condition: (allFormValues) => {
          return allFormValues["Malaria Test"] == "MRDT";
        },
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Inconclusive",
            value: "Inconclusive"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Malaria Parasites Result",
        name: "Malaria Parasites Result",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Malaria Test"] == "Malaria Parasite";
        },
        options: [
          {
            label: "Number of malarial parasites",
            value: "Number of malarial parasites"
          },
          {
            label: "No malarial parasites",
            value: "No malarial parasites"
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
        header: "Syphilis Test Result",
        name: "Syphilis Test Result",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
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
        header: "Hepatitis B",
        name: "Hepatitis B",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "HIV Test",
        name: "HIV Test",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Blood group rhesus factor",
        name: "Blood group rhesus factor",
        obsValueType: "value_coded",
        options: [
          {
            label: "rhesus positive",
            value: "rhesus positive"
          },
          {
            label: "rhesus negative",
            value: "rhesus negative"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Random Blood Sugar (RBS)",
        name: "Random Blood Sugar",
        obsValueType: "value_coded",
        options: [
          {
            label: "> 60 - 125mg/dl (Normal)",
            value: "> 60 - 125mg/dl (Normal)"
          },
          {
            label: "< 59mg/dl (Hypoglycemia)",
            value: "< 59mg/dl (Hypoglycemia)"
          },
          {
            label: "> 126mg/dl (Hyperglycemia)",
            value: "< 126mg/dl (Hyperglycemia)"
          }
        ]
      }
    ];
  });
  return {
    labInvestigationFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabInvestigation",
  setup(__props, { expose: __expose }) {
    const composable = useLabInvestigationForm();
    const formRef = ref(null);
    const labInvestigationForm = computed(() => {
      return composable.labInvestigationFormSection.value;
    });
    const onSubmit = async () => {
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
                  "form-data": labInvestigationForm.value
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

const LabInvestigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0e494707"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ANCLabTests",
  setup(__props) {
    const router = useRouter();
    const UltrasoundScanRef = ref(null);
    const UrineTestRef = ref(null);
    const TBTestRef = ref(null);
    const LabInvestigationRef = ref(null);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const openBackController = () => {
      router.push("/anc/home");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Lab Investigations",
          icon: ""
        },
        {
          title: "Ultrasound Scan",
          icon: ""
        },
        {
          title: "Urine Test",
          icon: ""
        },
        {
          title: "TB Test",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const currentTab = tabs.value[currentTabIndex.value]?.title;
      switch (currentTab) {
        case "Lab Investigations":
          return "LabInvestigation";
        case "Ultrasound Scan":
          return "UltrasoundScan";
        case "Urine Test":
          return "UrineTest";
        case "TB Test":
          return "TBTest";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [
        {
          ref: UltrasoundScanRef
        },
        { ref: UrineTestRef },
        { ref: TBTestRef },
        { ref: LabInvestigationRef }
      ];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error(`Error calling  onSubmit:`, error);
          }
        }
      }
      router.push("/anc/home");
    };
    onMounted(async () => {
      tabs.value = getActiveTabs();
      currentTabIndex.value = 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$5, {
                  ref: "wizard",
                  headingTitle: "Lab test and imaging",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  onChange: unref(onChangeCurrentTab),
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(UltrasoundScan, {
                        ref_key: "UltrasoundScanRef",
                        ref: UltrasoundScanRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "UltrasoundScan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(UrineTest, {
                        ref_key: "UrineTestRef",
                        ref: UrineTestRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "UrineTest"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(TBTest, {
                        ref_key: "TBTestRef",
                        ref: TBTestRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "TBTest"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabInvestigation, {
                        ref_key: "LabInvestigationRef",
                        ref: LabInvestigationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabInvestigation"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "onChange"])
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

export { _sfc_main as default };
