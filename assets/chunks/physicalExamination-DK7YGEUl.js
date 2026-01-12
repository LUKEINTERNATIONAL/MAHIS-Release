import { q as defineComponent, r as ref, d as computed, O as createBlock, y as openBlock, A as withCtx, B as createBaseVNode, z as createVNode, E as unref, N as IonButton, a5 as createTextVNode, C as toDisplayString, a4 as normalizeClass, a2 as onMounted, x as createElementBlock, bH as IonCard, J as Fragment, aF as useRouter, H as IonContent, G as createCommentVNode, S as withDirectives, bV as chevronBackOutline, T as vShow, bq as IonPage } from './vendor-BK8x96Ok.js';
import { n as icons, C as StandardForm, _ as _export_sfc, K as ObservationService, b as EncounterTypeId, G as toastSuccess, t as toastWarning, u as useDemographicsStore, T as Toolbar, F as DynamicButton, J as savePatientRecord } from '../index-dAcYVh-O.js';
import { D as DemographicBar } from './DemographicBar-8WZ9gOOP.js';
import { u as useFormWizard, _ as _sfc_main$8 } from './useFormWizard-B3Ts1D7m.js';
import { V as Vitals } from './Vitals-DAAoJgoJ.js';
import { M as MaternalExam, _ as _sfc_main$9, a as _sfc_main$a } from './AbdominalExamination.vue_vue_type_script_setup_true_lang-CfLkcPxB.js';
import { _ as _sfc_main$7 } from './LevelOfConsciousness.vue_vue_type_script_setup_true_lang-DVnV-GVR.js';
import { s as storeToRefs } from './pinia-C47my0-I.js';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "IsPallorPresent",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const isPallorPresent = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Is pallor present?",
          header: "Is pallor present?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "ny action taken?": "" };
            }
          }
        },
        {
          name: "Any action taken?",
          componentType: "radioButtonField",
          header: "Any action taken?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Specify the action taken": "" };
            }
          },
          condition: (allFormValues) => allFormValues["Is pallor present?"] === "Yes"
        },
        {
          header: "Specify the action taken",
          name: "Specify the action taken",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any action taken?"] === "Yes"
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Is pallor present",
        formData: isPallorPresent.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "oedemaPresent",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const oedemaPresense = computed(() => {
      return [
        {
          name: "Is oedema present?",
          header: "Is oedema present?",
          componentType: "radioButtonField",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Select the type of Oedema the woman has?",
          header: "Select the type of Oedema the woman has?",
          componentType: "radioButtonField",
          options: [
            { label: "pitting ankle oedema", value: "pitting ankle oedema" },
            { label: "leg swelling", value: "leg swelling" },
            { label: "oedema of the hands and feet", value: "oedema of the hands and feet" },
            { label: "pitting lower back oedema", value: "pitting lower back oedema" },
            { label: "Facial oedema", value: "Facial oedema" },
            { label: "General body oedema", value: "General body oedema" }
          ],
          condition: (allFormValues) => allFormValues["Is oedema present?"] === "Yes"
        },
        {
          name: "Severity of Oedema?",
          header: "Severity of Oedema?",
          componentType: "radioButtonField",
          options: [
            // { label: "Mild", value: "Mild" },
            // { label: "Moderate", value: "Moderate" },
            // { label: "Severe", value: "Severe" },
            { label: "+", value: "+" },
            { label: "++", value: "++" },
            { label: "+++", value: "+++" },
            { label: "++++", value: "++++" }
          ],
          condition: (allFormValues) => allFormValues["Is oedema present?"] === "Yes"
        },
        {
          name: "Varicose Veins Present",
          header: "Varicose Veins Present",
          componentType: "radioButtonField",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
          // condition: (allFormValues: any) => allFormValues["Is oedema present?"] === "Yes",
        },
        {
          name: "Any deformities present?",
          header: "Any deformities present?",
          componentType: "radioButtonField",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
          // condition: (allFormValues: any) => allFormValues["Is oedema present?"] === "Yes",
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Any deformities present?"] === "Yes"
        },
        {
          name: "Specify the deformity",
          header: "Specify the deformity",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any deformities present?"] === "Yes"
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Extremities",
        formData: oedemaPresense.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$2 = { class: "tb-button-container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "respiratoryExamFindings",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const handleTBTesting = (values) => {
      console.log("Patient referred for TB testing with values:", values);
      alert("Referral for TB Testing has been recorded.");
    };
    const respiatoryExamFindings = computed(() => {
      return [
        {
          name: "Cough",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Cough",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return {
                "Fever": "",
                "Cough type:": "",
                "Duration of cough:": "",
                "Weight loss": "",
                "Night sweats": ""
              };
            }
          }
        },
        {
          name: "Rapid breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Rapid breathing",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Slow breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Slow breathing",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Wheezing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Wheezing",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Rales",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Rales",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Respiratory distress",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Respiratory distress",
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
          onChange: (value) => {
            if (value === "Yes") {
              return { "Specify other respiratory findings": "" };
            }
          }
        },
        {
          header: "Specify other respiratory findings",
          name: "Specify other respiratory findings",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "TB Screening",
          header: "TB Screening",
          componentType: "Heading",
          grid: { s: "12" },
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          componentType: "inputField",
          name: "Duration of cough",
          header: "Duration of cough",
          icon: icons.edit,
          // grid: { s: "6" },
          unitOptions: [
            { label: "Days", value: "Days" },
            { label: "Weeks", value: "Weeks" },
            { label: "Months", value: "Months" },
            { label: "Years", value: "Years" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "Weight loss",
          label: "Weight loss",
          header: "Weight loss",
          componentType: "radioButtonField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "Fever",
          label: "Fever",
          header: "Fever",
          componentType: "radioButtonField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "Cough type",
          label: "Dry or productive",
          header: "Cough type",
          componentType: "radioButtonField",
          grid: { s: "5" },
          options: [
            { label: "Dry", value: "Dry" },
            { label: "Productive", value: "Productive" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "Night sweats",
          label: "Night sweats",
          header: "Night sweats",
          componentType: "radioButtonField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          componentType: "Dashes",
          // Optional: add a condition if you only want the line to appear 
          // when the TB button is about to appear
          condition: (vals) => {
            return vals["Weight loss"] === "Yes" || vals["Fever"] === "Yes" || vals["Night sweats"] === "Yes";
          }
        },
        // --- THE SLOT CONFIGURATION ---
        {
          name: "tb_referral_slot",
          componentType: "Slot",
          slotName: "tb_button_slot",
          grid: { s: "12" },
          // Button takes full width of the row
          condition: (vals) => {
            return vals["Weight loss"] === "Yes" || vals["Fever"] === "Yes" || vals["Night sweats"] === "Yes" || vals["Cough"] === "Yes";
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Respiratory exam findings",
        formData: respiatoryExamFindings.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, {
        tb_button_slot: withCtx(({ formValues }) => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(unref(IonButton), {
              expand: "block",
              color: "warning",
              onClick: ($event) => handleTBTesting(formValues)
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode(" Send for TB testing ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      }, 8, ["formData"]);
    };
  }
});

const respiratoryExamFindings = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4c6e4f0c"]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Appearance",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const appearanceDataForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Kempt",
          header: "Kempt",
          required: true,
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Gait",
          componentType: "radioButtonField",
          header: "Gait",
          required: true,
          obsValueType: "value_coded",
          options: [
            { label: "Normal", value: "Normal" },
            { label: "Abnormal", value: "Abnormal" }
          ]
        },
        {
          name: "Nutritional status",
          componentType: "radioButtonField",
          header: "Nutritional status",
          obsValueType: "value_coded",
          required: true,
          options: [
            { label: "Well Nourished", value: "Well Nourished" },
            { label: "Malnourished", value: "Malnourished" }
          ]
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["Kempt"] || formValues["Gait"] || formValues["Nutritional status"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Appearance saved successfully");
      } else toastWarning("No appearance data to save");
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Appearance",
        formData: appearanceDataForm.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$1 = { class: "warning-title" };
const _hoisted_2$1 = { class: "warning-message" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MUAC",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const getMuacStatus = (value) => {
      const muac = parseFloat(value);
      if (!muac || isNaN(muac)) return { class: "", label: "", color: "", message: "" };
      if (muac < 18) {
        return {
          class: "status-red",
          label: "Severe (Red)",
          color: "#ffcdd2",
          message: "Refer for nutritional management"
        };
      } else if (muac >= 18 && muac <= 21) {
        return {
          class: "status-yellow",
          label: "Moderate (Yellow)",
          color: "#fff9c4",
          message: "Refer for nutritional management"
        };
      } else {
        return {
          class: "status-green",
          label: "Normal (Green)",
          color: "#c8e6c9",
          message: "Patient is well nourished"
        };
      }
    };
    const MUACFormData = computed(() => {
      return [
        {
          name: "MUAC - Number",
          header: "MUAC - Number",
          componentType: "inputField",
          icon: icons.height,
          unit: "cm",
          eventType: "number",
          onChange: (value) => {
            const status = getMuacStatus(value);
            return { backgroundColor: status.color };
          }
        },
        {
          name: "muac_alert_container",
          componentType: "Slot",
          slotName: "muac_warning_slot",
          grid: { s: "12" },
          // Logic changed: Show for ANY valid number greater than 0
          condition: (vals) => {
            const muac = parseFloat(vals["MUAC - Number"]);
            return !isNaN(muac) && muac > 0;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Mid-Upper Arm Circumference (MUAC)",
        formData: MUACFormData.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, {
        muac_warning_slot: withCtx(({ formValues }) => [
          createBaseVNode("div", {
            class: normalizeClass(["muac-warning-box", getMuacStatus(formValues["MUAC - Number"]).class])
          }, [
            createBaseVNode("div", _hoisted_1$1, " Nutritional Status: " + toDisplayString(getMuacStatus(formValues["MUAC - Number"]).label), 1),
            createBaseVNode("div", _hoisted_2$1, toDisplayString(getMuacStatus(formValues["MUAC - Number"]).message), 1)
          ], 2)
        ]),
        _: 1
      }, 8, ["formData"]);
    };
  }
});

const MUAC = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a0da09fc"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeneralExamination",
  setup(__props, { expose: __expose }) {
    const levelOfConsciousnessRef = ref(null);
    const MUACref = ref(null);
    const apperanceRef = ref(null);
    const respiratoryExamFindingsRef = ref(null);
    const isPallorPresentRef = ref(null);
    const oedemaPresentRef = ref(null);
    onMounted(() => {
    });
    const onSubmit = () => {
      try {
        const results = [
          levelOfConsciousnessRef.value?.onSubmit?.(),
          MUACref.value?.onSubmit?.(),
          apperanceRef.value?.onSubmit?.(),
          respiratoryExamFindingsRef.value?.onSubmit?.(),
          isPallorPresentRef.value?.onSubmit?.(),
          oedemaPresentRef.value?.onSubmit?.()
        ].filter((result) => result !== void 0);
        return results.length === 0 || results.every((result) => result === true);
      } catch (error) {
        console.error("Error in GeneralExamination onSubmit:", error);
        return false;
      }
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$7, {
              ref_key: "levelOfConsciousnessRef",
              ref: levelOfConsciousnessRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              ref_key: "MUACref",
              ref: MUACref
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(MUAC, {
              ref_key: "apperanceRef",
              ref: apperanceRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(respiratoryExamFindings, {
              ref_key: "respiratoryExamFindingsRef",
              ref: respiratoryExamFindingsRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6, {
              ref_key: "isPallorPresentRef",
              ref: isPallorPresentRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$5, {
              ref_key: "oedemaPresentRef",
              ref: oedemaPresentRef
            }, null, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const GeneralExamination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-536cbcf7"]]);

const _hoisted_1 = {
  style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" },
  class: "p-container"
};
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "physicalExamination",
  setup(__props) {
    const router = useRouter();
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    const vitalsRef = ref(null);
    const MaternalExamRef = ref(null);
    const AbdominalExaminationRef = ref(null);
    const PresentingSignsRef = ref(null);
    const GeneralExaminationRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Vital Signs":
          return "Vitals";
        case "General Examination":
          return "GeneralExamination";
        case "Maternal Exam":
          return "MaternalExam";
        case "Abdominal examination":
          return "AbdominalExamination";
        case "Presenting signs for IPV":
          return "PresentingSigns";
        default:
          return null;
      }
    };
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglass-outline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const getActiveTabs = () => {
      return [
        {
          title: "Vital Signs",
          icon: ""
        },
        {
          title: "General Examination",
          icon: ""
        },
        {
          title: "Maternal Exam",
          icon: ""
        },
        {
          title: "Abdominal examination",
          icon: ""
        },
        {
          title: "Presenting signs for IPV",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const openBackController = () => {
      router.push("/contact");
    };
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "General Examination") {
        console.log("General Examination: ", GeneralExaminationRef.value);
        GeneralExaminationRef.value?.onSubmit();
      }
      if (value == "Maternal Exam") {
        MaternalExamRef.value?.onSubmit();
      }
      if (value == "Abdominal examination") {
        AbdominalExaminationRef.value?.onSubmit();
      }
      if (value == "Presenting signs for IPV") {
        PresentingSignsRef.value?.onSubmit();
      }
      await savePatientRecord(patient.value);
    };
    onMounted(async () => {
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
    });
    const saveData = async () => {
      isSaving.value = true;
      try {
        await savePatientRecord(patient.value);
        openBackController();
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$8, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Physical examination",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to Contact",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Vitals, {
                        ref_key: "vitalsRef",
                        ref: vitalsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(MaternalExam, {
                        ref_key: "MaternalExamRef",
                        ref: MaternalExamRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "MaternalExam"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$9, {
                        ref_key: "AbdominalExaminationRef",
                        ref: AbdominalExaminationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "AbdominalExamination"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$a, {
                        ref_key: "PresentingSignsRef",
                        ref: PresentingSignsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingSigns"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(GeneralExamination, {
                        ref_key: "GeneralExaminationRef",
                        ref: GeneralExaminationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "GeneralExamination"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
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

const physicalExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17c1cc7f"]]);

export { physicalExamination as default };
