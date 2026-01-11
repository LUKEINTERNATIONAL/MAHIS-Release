import { q as defineComponent, r as ref, h as inject, w as watch, x as createElementBlock, y as openBlock, z as createVNode, E as unref, d as computed, J as Fragment, R as renderList, B as createBaseVNode, C as toDisplayString, v as resolveComponent, O as createBlock, A as withCtx, G as createCommentVNode, ag as close, L as IonIcon, Q as alertCircleOutline, a5 as createTextVNode, N as IonButton, aj as onBeforeUnmount, H as IonContent, bq as IonPage, aF as useRouter, cr as useRoute, a as reactive, bV as chevronBackOutline, eT as provide } from './vendor-Cy_N32Zh.js';
import { s as storeToRefs } from './pinia-Bqc2Rgok.js';
import { C as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, cl as PatientRegistrationService, t as toastWarning, H as HisDate, K as ObservationService, ci as saveEncounterData, b as EncounterTypeId, G as toastSuccess, k as alertConfirmation } from '../index-CZxb0S4T.js';
import { D as DemographicBar } from './DemographicBar-H46mHIVN.js';
import { l as neonatalTriageSections, m as neonatalTriageFormKey, u as useNeonatalTriageStore, N as NeonatalStepper, o as defaultNeonatalTriageForm, t as triageConceptMapping } from './NeonatalStepper-De2iEpYL.js';

const _hoisted_1$x = { class: "triage-section-wrapper" };
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "EmergencyTriageSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[0];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageForm.crying = values.crying || "";
      triageStore.setField("crying", values.crying || "");
      triageStore.setField("breathing", values.breathing || "");
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$x, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyTriageSection = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-4feaf236"]]);

const _hoisted_1$w = { class: "triage-section-wrapper" };
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "BreathingAssessmentSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[0];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageForm.breathing = values.breathing;
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$w, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const BreathingAssessmentSection = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-2d1b12e9"]]);

const _hoisted_1$v = { class: "triage-section-wrapper" };
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Oxygen Saturation");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$v, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyManagementSection = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-3306617f"]]);

const _hoisted_1$u = { class: "triage-section-wrapper" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "OxygenSaturationSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[3];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
      triageStore.setField("observations", values.observations);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const OxygenSaturationSection = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-740aefb2"]]);

const _hoisted_1$t = { class: "triage-section-wrapper" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "CentralCyanosisSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Management 3");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const CentralCyanosisSection = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-0e2784f0"]]);

const _hoisted_1$s = { class: "triage-section-wrapper" };
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "ConvulsionsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Management 4");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const ConvulsionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-78f15785"]]);

const _hoisted_1$r = { class: "triage-section-wrapper" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionTwo",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Vital Signs 2");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageStore.setField("saturation_in_oxygen", values.saturation_in_oxygen);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const VitalSectionTwo = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-18df91a1"]]);

const _hoisted_1$q = { class: "triage-section-wrapper" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionThree",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Vital Signs 3");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageStore.setField("temperature", values.temperature);
      triageStore.setField("can_measure_temp", values.can_measure_temp);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const VitalSectionThree = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-8f1c7b62"]]);

const _hoisted_1$p = { class: "summary-wrapper" };
const _hoisted_2$2 = { class: "summary-card-body" };
const _hoisted_3$2 = { class: "summary-row-label" };
const _hoisted_4$2 = { class: "summary-row-value" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "TriageSummarySection",
  setup(__props) {
    const triageStore = useNeonatalTriageStore();
    const { formValues } = storeToRefs(triageStore);
    const breathingLabels = {
      not_breathing: "Not breathing",
      hr_low: "Heart rate low",
      hr_fast: "Heart rate fast",
      gasping: "GASPING or irregular breathing",
      chest_indrawing: "Chest indrawing",
      floppy: "VERY FLOPPY (Normal breathing & HR)",
      stable: "stable"
    };
    const observationsLabels = {
      None: "None",
      Convulsions_twitching: "Convulsions or twitching",
      grunting: "Grunting or Severe chest indrawing's",
      Central_cyanosis: "Central cyanosis"
    };
    const presentSignsLabels = {
      none: "None",
      trunk_cold: "Trunk feels cold",
      capillary_refill: "Capillary refill >3 seconds",
      weak_pulse: "Weak femoral pulse"
    };
    const yesNo = (val) => {
      if (val === void 0 || val === null || val === "") return null;
      if (val === true || val === "yes") return "(yes)";
      if (val === false || val === "no") return "(no)";
      return String(val);
    };
    const plain = (val) => {
      if (val === void 0 || val === null || val === "") return null;
      return String(val);
    };
    const formatArray = (val, labels) => {
      if (!Array.isArray(val) || val.length === 0) return null;
      const display = val.map((item) => {
        const key = String(item);
        return labels?.[key] ?? key;
      });
      return display.join("\n");
    };
    const sections = computed(() => {
      const v = formValues.value || {};
      return [
        {
          title: "Triage",
          items: [
            {
              label: "Is the baby crying?",
              value: yesNo(v.crying)
            },
            {
              label: "Is the baby breathing?",
              value: formatArray(v.breathing, breathingLabels)
            },
            {
              label: "Observations",
              value: formatArray(v.observations, observationsLabels)
            },
            {
              label: "Present signs",
              value: formatArray(v.present_signs, presentSignsLabels)
            }
          ]
        },
        {
          title: "Vitals",
          items: [
            {
              label: "Respiratory Rate",
              value: plain(v.respiratory_rate)
            },
            {
              label: "Heart Rate (bpm)",
              value: plain(v.heart_rate)
            },
            {
              label: "Oxygen Sats in Air (%)",
              value: plain(v.oxygen_saturation_vital)
            },
            {
              label: "Saturations in Oxygen (%)",
              value: plain(v.saturation_in_oxygen)
            },
            {
              label: "Temperature (degs C)",
              value: plain(v.temperature)
            },
            {
              label: "Blood Sugar",
              value: v.blood_sugar ? `${v.blood_sugar} ${v.bloodSugar_unit || ""}`.trim() : null
            },
            {
              label: "Admission Weight (kg)",
              value: plain(v.admission_weight)
            },
            {
              label: "Birth Weight (kg)",
              value: plain(v.birth_weight)
            },
            {
              label: "Head Circumference (cm)",
              value: plain(v.head_circumference)
            }
          ]
        }
      ];
    });
    const visibleSections = computed(
      () => sections.value.map((section) => ({
        ...section,
        items: section.items.filter((item) => item.value !== null && item.value !== "")
      })).filter((section) => section.items.length > 0)
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$p, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(visibleSections.value, (section) => {
          return openBlock(), createElementBlock("div", {
            key: section.title,
            class: "summary-card"
          }, [
            createBaseVNode("div", _hoisted_2$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (row) => {
                return openBlock(), createElementBlock("div", {
                  key: row.label,
                  class: "summary-row"
                }, [
                  createBaseVNode("span", _hoisted_3$2, toDisplayString(row.label), 1),
                  createBaseVNode("span", _hoisted_4$2, toDisplayString(row.value), 1)
                ]);
              }), 128))
            ])
          ]);
        }), 128))
      ]);
    };
  }
});

const SummarySection = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-6aeaf1fc"]]);

const _hoisted_1$o = { class: "weight-loss" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionFour",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Vital Signs Four");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const calculatedWeightPercentage = ref(0);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageStore.setField("admission_weight", values.admission_weight);
      triageStore.setField("birth_weight", values.birth_weight);
      triageStore.setField("head_circumference", values.head_circumference);
      const birthWeight = Number(values.birth_weight);
      const admissionWeight = Number(values.admission_weight);
      if (birthWeight > 0) {
        calculatedWeightPercentage.value = parseFloat(((birthWeight - admissionWeight) / birthWeight * 100).toFixed(2));
      } else {
        calculatedWeightPercentage.value = 0;
      }
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createBlock(_component_ion_card, { class: "triage-section-wrapper" }, {
        default: withCtx(() => [
          createVNode(StandardForm, {
            formData: unref(formData),
            conditionalRules: unref(conditionalRules),
            ref_key: "formRef",
            ref: formRef
          }, {
            percentage: withCtx(() => [
              createBaseVNode("div", _hoisted_1$o, "Weight loss percentage: " + toDisplayString(calculatedWeightPercentage.value) + "%", 1)
            ]),
            _: 1
          }, 8, ["formData", "conditionalRules"])
        ]),
        _: 1
      });
    };
  }
});

const VitalSectionFour = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-cd93ef53"]]);

const _hoisted_1$n = { class: "triage-section-wrapper" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TemperatureHight",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Temperature High");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageForm.crying = values.crying || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, [
          createBaseVNode("p", null, "The temperature is too high!")
        ], -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const TemperatureHigh = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-2f9d8428"]]);

const _hoisted_1$m = { class: "triage-section-wrapper" };
const _hoisted_2$1 = {
  key: 0,
  class: "triage-dialog-backdrop"
};
const _hoisted_3$1 = { class: "triage-dialog-card" };
const _hoisted_4$1 = { class: "triage-dialog-header" };
const _hoisted_5 = { class: "triage-dialog-icon" };
const _hoisted_6 = { class: "triage-dialog-actions" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VitalBloodSugar",
  props: {
    stepIndex: {},
    goToNext: { type: Function },
    goToPrevious: { type: Function },
    goToStep: { type: Function }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Triage Blood Sugar");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const showDialog = ref(false);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageStore.setField("can_measure_blood_sugar", values.can_measure_blood_sugar);
      triageStore.setField("blood_sugar", values.bloodSugar);
      triageStore.setField("bloodSugar_unit", values.bloodSugar_unit);
    };
    function openDialog() {
      const units = triageStore.formValues.bloodSugar_unit;
      const glucose = Number(triageStore.formValues.blood_sugar);
      if (units === "mg/dL" && glucose < 45 || units === "mmol/L" && glucose < 2.5) {
        showDialog.value = true;
        return;
      }
      props.goToNext && props.goToNext();
    }
    function handleClose() {
      showDialog.value = false;
    }
    function handleNo() {
      triageStore.setField("lowSugar", "Hypoglycemia-Asymptomatic");
      const index = neonatalTriageSections.findIndex((section) => section.title === "Hypoglycemia-Asymptomatic");
      props.goToStep && props.goToStep(index);
      showDialog.value = false;
    }
    function handleYes() {
      triageStore.setField("lowSugar", "Hypoglycemia-Symptomatic");
      const index = neonatalTriageSections.findIndex((section) => section.title === "Hypoglycemia-Symptomatic");
      props.goToStep && props.goToStep(index);
      showDialog.value = false;
    }
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {},
      openDialog
      // called from the stepper via ref
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$m, [
        _cache[6] || (_cache[6] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, "Check Blood Sugar.", -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"]),
        showDialog.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("button", {
              class: "triage-dialog-close",
              type: "button",
              onClick: handleClose
            }, [
              createVNode(unref(IonIcon), { icon: unref(close) }, null, 8, ["icon"])
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(IonIcon), { icon: unref(alertCircleOutline) }, null, 8, ["icon"])
              ]),
              _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Hypoglycemia?", -1))
            ]),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "triage-dialog-divider" }, null, -1)),
            _cache[4] || (_cache[4] = createBaseVNode("p", { class: "triage-dialog-subtitle" }, "The baby’s blood sugar is low.", -1)),
            _cache[5] || (_cache[5] = createBaseVNode("p", { class: "triage-dialog-body" }, "Is the baby symptomatic? e.g Jittery, lethargic or not responding.", -1)),
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(IonButton), {
                class: "triage-dialog-btn secondary",
                expand: "block",
                onClick: handleNo
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" NO ", -1)
                ])]),
                _: 1
              }),
              createVNode(unref(IonButton), {
                class: "triage-dialog-btn primary",
                expand: "block",
                onClick: handleYes
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode(" YES ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});

const VitalBloodSugar = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-37bf7ce2"]]);

const _hoisted_1$l = { class: "triage-section-wrapper" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "EmergencyTriage",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Triage 1");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, " You may start measuring the vitals while continuing with the triage since the readings takes a while. ", -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyTriage = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-ef810f36"]]);

const _hoisted_1$k = { class: "triage-section-wrapper" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "BabyDemographics",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Demographics");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
      triageStore.setField("first_name", values.first_name);
      triageStore.setField("last_name", values.last_name);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const BabyDemographics = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-f14b7f8a"]]);

const _hoisted_1$j = { class: "triage-section-wrapper" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaSymptomatic",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Hypoglycemia-Symptomatic");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageForm.crying = values.crying || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, "Hypoglycemia - Symptomatic", -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const HypoglycemiaSymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-84bba3cb"]]);

const _hoisted_1$i = { class: "triage-section-wrapper" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaAsymptomatic",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Hypoglycemia-Asymptomatic");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageForm.crying = values.crying || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, "Hypoglycemia - Asymptomatic", -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const HypoglycemiaAsymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-d3132015"]]);

const _hoisted_1$h = { class: "triage-section-wrapper" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementTwo",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Management 2");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyManagementTwo = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-3f603ae7"]]);

const _hoisted_1$g = { class: "triage-section-wrapper" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSix",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Management 6");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyManagementSix = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-574bb0b2"]]);

const _hoisted_1$f = { class: "triage-section-wrapper" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSeven",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Management 7");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyManagementSeven = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-bda3a435"]]);

const _hoisted_1$e = { class: "triage-section-wrapper" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementEight",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Temperature Low - Warm The Baby");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, [
          createBaseVNode("p", null, "Mild Hypothermia = 36 - 36.4 degs C"),
          createBaseVNode("p", null, "Moderate Hypothermia = 32 - 35.9 degs C"),
          createBaseVNode("p", null, "Severe Hypothermia = 32 degs C")
        ], -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyManagementEight = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-708783bf"]]);

const _hoisted_1$d = { class: "triage-section-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BabyRecoveredStillSevereRespiratory",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Baby Recovered");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, [
          createBaseVNode("p", null, [
            createBaseVNode("b", null, "The baby has recovered but still has severe respiratory distress and WILL require referral.")
          ])
        ], -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const BabyRecoveredStillSevereRespiratory = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-5f09a4b0"]]);

const _hoisted_1$c = { class: "triage-section-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ConvulsionsVitalsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emergency Management");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const ConvulsionsVitalsSection = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-00517c43"]]);

const _hoisted_1$b = { class: "triage-section-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ObservationsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[9];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const ObservationsSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-8636a51d"]]);

const _hoisted_1$a = { class: "triage-section-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DangerSignsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[13];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const DangerSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-e181448d"]]);

const _hoisted_1$9 = { class: "triage-section-wrapper" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SelectPresentSignsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[14];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const SelectPresentSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e5765fc2"]]);

const _hoisted_1$8 = { class: "triage-section-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TrunkFeelsColdSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[15];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const TrunkFeelsColdSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b2a7358c"]]);

const _hoisted_1$7 = { class: "triage-section-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "KeepWarmSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[16];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const KeepWarmSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3dff9401"]]);

const _hoisted_1$6 = { class: "triage-section-wrapper" };
const _hoisted_2 = { class: "respiratory-timer-body" };
const _hoisted_3 = { class: "respiratory-timer-time" };
const _hoisted_4 = { class: "respiratory-timer-instruction" };
const INITIAL_SECONDS = 60;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VitalSignsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Vital Signs");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const secondsLeft = ref(INITIAL_SECONDS);
    const isRunning = ref(false);
    const isCompleted = ref(false);
    let timerId = null;
    const formattedTime = computed(() => {
      const m = Math.floor(secondsLeft.value / 60).toString().padStart(2, "0");
      const s = (secondsLeft.value % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    });
    const timerMessage = computed(() => {
      if (isRunning.value) return "TAP TO PAUSE COUNTDOWN";
      if (secondsLeft.value === INITIAL_SECONDS) return "TAP TO START COUNTDOWN";
      if (secondsLeft.value === 0) return "TAP TO RESTART COUNTDOWN";
      return "TAP TO RESUME COUNTDOWN";
    });
    const startTimer = () => {
      if (timerId !== null) return;
      isRunning.value = true;
      isCompleted.value = false;
      timerId = window.setInterval(() => {
        if (secondsLeft.value > 0) {
          secondsLeft.value -= 1;
        } else {
          isRunning.value = false;
          isCompleted.value = true;
          if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
          }
        }
      }, 1e3);
    };
    const pauseTimer = () => {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
      isRunning.value = false;
    };
    const resetTimer = () => {
      pauseTimer();
      secondsLeft.value = INITIAL_SECONDS;
      isCompleted.value = false;
    };
    const handleTimerTap = () => {
      if (isRunning.value) {
        pauseTimer();
      } else if (secondsLeft.value === 0) {
        resetTimer();
        startTimer();
      } else {
        startTimer();
      }
    };
    onBeforeUnmount(() => {
      if (timerId !== null) {
        clearInterval(timerId);
      }
    });
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
      triageStore.setField("respiratory_rate", values.respiratory_rate);
      triageStore.setField("heart_rate", values.heart_rate);
      triageStore.setField("can_measure_oxygen_saturation", values.can_measure_oxygen_saturation);
      triageStore.setField("oxygen_saturation_vital", values.oxygen_saturation_vital);
      triageStore.setField("oxygen_facility_available", values.oxygen_facility_available);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", {
          class: "respiratory-timer-card",
          onClick: handleTimerTap
        }, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "respiratory-timer-header" }, "Respiratory  Rate Timer", -1)),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, toDisplayString(formattedTime.value), 1),
            createBaseVNode("div", _hoisted_4, toDisplayString(timerMessage.value), 1)
          ])
        ]),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const VitalsSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-54fa99a2"]]);

const _hoisted_1$5 = { class: "triage-section-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RespiratoryDistressSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Danger Signs");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, "Feel for 3 danger signs.", -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const RespiratoryDistressSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e75e77c9"]]);

const _hoisted_1$4 = { class: "triage-section-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TemperatureHighSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[26];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
      triageStore.setField("present_signs", values.present_signs);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const TemperatureHighSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-81461ba7"]]);

const _hoisted_1$3 = { class: "triage-section-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SecondVitalSignsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Trunk Feels Cold");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, [
          createBaseVNode("p", null, "Mild Hypothermia = 36 - 36.4 degs C"),
          createBaseVNode("p", null, "Moderate Hypothermia = 32 - 35.9 degs C"),
          createBaseVNode("p", null, "Severe Hypothermia = 32 degs C")
        ], -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const SecondVitalSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4a384fc4"]]);

const _hoisted_1$2 = { class: "triage-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BloodSugarSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Emmergency Management 4");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, " This baby may be in Shock! See pg 74 COIN (NB. Don't give a bolus to a baby that has not responded to resuscitation) ", -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const BloodSugarSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-eec9c993"]]);

const _hoisted_1$1 = { class: "triage-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReferralInstructionsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections.find((section) => section.title === "Referral Instructions");
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageForm.crying = values.crying || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "background-color": "#fedf89", "padding": "10px" } }, [
          createBaseVNode("p", null, [
            createBaseVNode("b", null, "If oxygen is NOT available CALL referral hospital immediately "),
            createTextVNode(" for guidance and if possible send the baby with accompanying health worker with bag valve mask (BVM) ventilation equipment. "),
            createBaseVNode("br"),
            createBaseVNode("br"),
            createTextVNode(" Continue with the Neotree examination. ")
          ])
        ], -1)),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const ReferralInstructionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4742399"]]);

const _sfc_main = defineComponent({
  name: "NeonatalTriage",
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    Toolbar,
    DemographicBar,
    NeonatalStepper,
    EmergencyTriageSection,
    BreathingAssessmentSection,
    EmergencyManagementSection,
    OxygenSaturationSection,
    CentralCyanosisSection,
    ConvulsionsSection,
    ObservationsSection,
    DangerSignsSection,
    SelectPresentSignsSection,
    TrunkFeelsColdSection,
    KeepWarmSection,
    VitalSignsSection: VitalsSignsSection,
    RespiratoryDistressSection,
    TemperatureHighSection,
    SecondVitalSignsSection,
    BloodSugarSection,
    VitalsSignsSection,
    ReferralInstructionsSection,
    VitalSectionThree,
    VitalSectionTwo,
    TemperatureHigh,
    EmergencyTriage,
    EmergencyManagementSeven
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const demographicsStore = useDemographicsStore();
    const triageStore = useNeonatalTriageStore();
    const { patient } = storeToRefs(demographicsStore);
    const getTriageRouteSource = () => {
      const sourceParam = route.query.source;
      return Array.isArray(sourceParam) ? sourceParam[0] : sourceParam;
    };
    const source = getTriageRouteSource();
    if (source === "dashboard") {
      triageStore.reset();
    }
    const hasPatient = Boolean(patient.value?.patientID);
    const forceDemographics = source === "dashboard" && !hasPatient;
    const triageFormData = reactive({
      ...defaultNeonatalTriageForm,
      _hasPatient: hasPatient,
      _forceDemographics: forceDemographics
    });
    provide(neonatalTriageFormKey, triageFormData);
    watch(
      () => patient.value?.patientID,
      (newPatientId) => {
        const hasPatient2 = Boolean(newPatientId);
        triageFormData._hasPatient = hasPatient2;
        if (getTriageRouteSource() === "dashboard") {
          triageFormData._forceDemographics = !hasPatient2;
        }
      }
    );
    watch(
      () => getTriageRouteSource(),
      (newSource) => {
        triageFormData._forceDemographics = newSource === "dashboard" && !Boolean(patient.value?.patientID);
      }
    );
    const wizardData = ref(
      neonatalTriageSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalTriageSections.length - 1 ? "last_step" : ""
      }))
    );
    const getIndex = (title) => {
      return neonatalTriageSections.findIndex((section) => section.title == title);
    };
    const yesNoFields = /* @__PURE__ */ new Set(["crying", "can_measure_oxygen_saturation", "oxygen_facility_available", "can_measure_temp", "central_cyanosis"]);
    const numericFields = /* @__PURE__ */ new Set([
      "respiratory_rate",
      "heart_rate",
      "oxygen_saturation_vital",
      "saturation_in_oxygen",
      "temperature",
      "head_circumference"
    ]);
    const weightInGramsFields = /* @__PURE__ */ new Set(["admission_weight", "birth_weight"]);
    const normalizeYesNoValue = (value) => {
      if (value === void 0 || value === null || value === "") return null;
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (["yes", "y", "true", "1"].includes(lower)) return "Yes";
        if (["no", "n", "false", "0"].includes(lower)) return "No";
      }
      if (value === true || value === 1) return "Yes";
      if (value === false || value === 0 || value === 2) return "No";
      return null;
    };
    const buildObservationPayload = async (fieldName, conceptName, rawValue, obsDate, context) => {
      if (rawValue === void 0 || rawValue === null || rawValue === "") return null;
      if (yesNoFields.has(fieldName)) {
        const yesNo = normalizeYesNoValue(rawValue);
        if (!yesNo) return null;
        return ObservationService.buildValueCoded(conceptName, yesNo, obsDate);
      }
      if (fieldName === "blood_sugar") {
        const unit = context.bloodSugar_unit || "mg/dL";
        const numericValue = Number(rawValue);
        if (Number.isNaN(numericValue)) return null;
        const normalizedValue = unit === "mmol/L" ? numericValue * 18.018 : numericValue;
        return ObservationService.buildValueNumber(conceptName, normalizedValue, null, null, obsDate);
      }
      if (numericFields.has(fieldName) || weightInGramsFields.has(fieldName)) {
        let numericValue = Number(rawValue);
        if (Number.isNaN(numericValue)) return null;
        if (weightInGramsFields.has(fieldName)) {
          numericValue = numericValue / 1e3;
        }
        return ObservationService.buildValueNumber(conceptName, numericValue, null, null, obsDate);
      }
      const textValue = Array.isArray(rawValue) ? rawValue.join(", ") : String(rawValue);
      return ObservationService.buildValueText(conceptName, textValue, obsDate);
    };
    const allStepperData = [
      { title: "Emergency Triage", value: "1", component: EmergencyTriageSection, configIndex: getIndex("Emergency Triage") },
      { title: "Emergency Management", value: "2", component: BreathingAssessmentSection, configIndex: getIndex("Emergency Management 1") },
      { title: "Emergency Triage", value: "3", component: EmergencyTriage, configIndex: getIndex("Emergency Triage 1") },
      { title: "Danger Signs", value: "4", component: OxygenSaturationSection, configIndex: getIndex("Danger Signs") },
      { title: "Emergency Management", value: "5", component: EmergencyManagementTwo, configIndex: getIndex("Emergency Management 2") },
      { title: "Emergency Management", value: "6", component: CentralCyanosisSection, configIndex: getIndex("Emergency Management 3") },
      { title: "Emergency Management", value: "7", component: ConvulsionsSection, configIndex: getIndex("Emergency Management 4") },
      { title: "Central Cyanosis", value: "8", component: ObservationsSection, configIndex: getIndex("Central Cyanosis") },
      { title: "Convulsions/Twitching", value: "9", component: DangerSignsSection, configIndex: getIndex("Convulsions/Twitching") },
      { title: "Danger Signs 2", value: "10", component: SelectPresentSignsSection, configIndex: getIndex("Danger Signs 2") },
      {
        title: "Emergency Management - Grunting/Indrawing",
        value: "11",
        component: TrunkFeelsColdSection,
        configIndex: getIndex("Emergency Management - Grunting/Indrawing")
      },
      {
        title: "Emergency Management - Central Cyanosis",
        value: "12",
        component: KeepWarmSection,
        configIndex: getIndex("Emergency Management - Central Cyanosis")
      },
      {
        title: "Emergency Management - Convulsions",
        value: "13",
        component: VitalsSignsSection,
        configIndex: getIndex("Emergency Management - Convulsions")
      },
      { title: "Danger Signs", value: "14", component: RespiratoryDistressSection, configIndex: getIndex("Danger Signs") },
      { title: "Temperature High", value: "15", component: TemperatureHighSection, configIndex: getIndex("Temperature High") },
      { title: "Trunk Feels Cold", value: "16", component: SecondVitalSignsSection, configIndex: getIndex("Trunk Feels Cold") },
      {
        title: "Emmergency Management 4",
        value: "17",
        component: BloodSugarSection,
        configIndex: getIndex("Emmergency Management 4")
      },
      { title: "Vital Signs", value: "18", component: VitalsSignsSection, configIndex: getIndex("Vital Signs") },
      { title: "Emergency Management 6", value: "19", component: EmergencyManagementSix, configIndex: getIndex("Emergency Management 6") },
      { title: "Referral Instructions", value: "19", component: ReferralInstructionsSection, configIndex: getIndex("Referral Instructions") },
      {
        title: "Emergency Management",
        value: "20",
        component: ConvulsionsVitalsSection,
        configIndex: getIndex("Emergency Management")
      },
      // { title: "Convulsions", value: "20", component: ConvulsionsVitalsSection, configIndex: getIndex("Convulsions") },
      { title: "Vital Signs", value: "21", component: VitalSectionTwo, configIndex: getIndex("Vital Signs 2") },
      { title: "Emergency Management", value: "21", component: EmergencyManagementSeven, configIndex: getIndex("Emergency Management 7") },
      {
        title: "Severe Respiratory Distress - Referral Required",
        value: "22",
        component: BabyRecoveredStillSevereRespiratory,
        configIndex: getIndex("Severe Respiratory Distress - Referral Required")
      },
      { title: "Baby Recovered", value: "23", component: BabyRecoveredStillSevereRespiratory, configIndex: getIndex("Baby Recovered") },
      { title: "Vital Signs", value: "24", component: VitalSectionThree, configIndex: getIndex("Vital Signs 3") },
      {
        title: "Temperature Low - Warm The Baby",
        value: "25",
        component: EmergencyManagementEight,
        configIndex: getIndex("Temperature Low - Warm The Baby")
      },
      { title: "Temperature High", value: "26", component: TemperatureHigh, configIndex: getIndex("Temperature High") },
      {
        title: "Emergency Triage",
        value: "27",
        component: VitalBloodSugar,
        configIndex: getIndex("Emergency Triage Blood Sugar"),
        hasDialog: true
      },
      { title: "Hypoglycemia Symptomatic", value: "28", component: HypoglycemiaSymptomatic, configIndex: getIndex("Hypoglycemia-Symptomatic") },
      {
        title: "Hypoglycemia-Asymptomatic",
        value: "29",
        component: HypoglycemiaAsymptomatic,
        configIndex: getIndex("Hypoglycemia-Asymptomatic")
      },
      { title: "Vital Signs", value: "30", component: VitalSectionFour, configIndex: getIndex("Vital Signs Four") },
      { title: "Triage Summary", value: "31", component: SummarySection, configIndex: getIndex("Triage Summary") },
      { title: "Demographics", value: "32", component: BabyDemographics, configIndex: getIndex("Demographics") }
    ];
    const stepperData = allStepperData;
    const stepperTitle = "Emergency Triage Assessment";
    const currentOpenStepper = ref("1");
    const updateStatus = (event) => {
      if (event && event.value) {
        wizardData.value.forEach((item, index) => {
          if (event.value === (index + 1).toString()) {
            item.class = "open_step common_step";
            item.checked = false;
          } else if (index < parseInt(event.value) - 1) {
            item.class = "common_step color_white";
            item.checked = true;
          } else {
            item.class = "common_step";
            item.checked = false;
          }
        });
      }
    };
    const getSaveFunction = (currentIndex) => {
      const summaryStepIndex = stepperData.findIndex((step) => step.title === "Triage Summary");
      const demographicsStepIndex = stepperData.findIndex((step) => step.title === "Demographics");
      const lastStepIndex = stepperData.length - 1;
      const hasPatient2 = Boolean(patient.value?.patientID);
      getTriageRouteSource() === "dashboard" && !hasPatient2;
      const shouldSaveOnDemographics = currentIndex === demographicsStepIndex && !hasPatient2;
      const isFinalStep = currentIndex === lastStepIndex;
      if (currentIndex === summaryStepIndex && hasPatient2 || shouldSaveOnDemographics || isFinalStep && hasPatient2) {
        return async () => {
          try {
            const triageData = { ...triageFormData, ...triageStore.formValues };
            let patientId = patient.value?.patientID;
            if (!patientId && triageData.first_name && triageData.last_name) {
              const yesterday = /* @__PURE__ */ new Date();
              yesterday.setDate(yesterday.getDate() - 1);
              const birthdateStr = yesterday.toISOString().split("T")[0];
              const tempNeonate = {
                given_name: triageData.first_name,
                family_name: triageData.last_name,
                gender: "U",
                birthdate: birthdateStr,
                birthdate_estimated: 1
              };
              const registrationService = new PatientRegistrationService();
              const createdPatient = await registrationService.registerPatient(tempNeonate, []);
              if (!createdPatient?.patient_id) {
                toastWarning("Failed to create temporary patient record");
                return;
              }
              patientId = createdPatient.patient_id;
              await demographicsStore.setPatientRecord({ patient_id: patientId });
            }
            if (!patientId) {
              toastWarning("No patient available to save triage data");
              return;
            }
            const observations = [];
            const obsDate = HisDate.sessionDate();
            const hasTriageData = Object.keys(triageData).some(
              (key) => key !== "first_name" && key !== "last_name" && key !== "_hasPatient" && key !== "_forceDemographics" && triageData[key] !== void 0 && triageData[key] !== null && triageData[key] !== ""
            );
            if (hasTriageData) {
              for (const [fieldName, conceptName] of Object.entries(triageConceptMapping)) {
                const rawValue = triageData[fieldName];
                const obs = await buildObservationPayload(fieldName, conceptName, rawValue, obsDate, triageData);
                if (obs) observations.push(obs);
              }
            } else {
              const firstName = await ObservationService.buildValueText("First name", triageData.first_name || "Unknown", obsDate);
              const lastName = await ObservationService.buildValueText("Last name", triageData.last_name || "Unknown", obsDate);
              if (firstName) observations.push(firstName);
              if (lastName) observations.push(lastName);
            }
            await saveEncounterData(patientId, EncounterTypeId.NEONATAL_TRIAGE, observations);
            toastSuccess("Emergency triage saved successfully");
            await new Promise((resolve) => setTimeout(resolve, 800));
            router.push("/neonatal/checkpoint");
          } catch (error) {
            console.error("Failed to save triage assessment", error);
            toastWarning("Failed to save triage assessment");
          }
        };
      }
    };
    const handleCancelTriage = async () => {
      const confirmed = await alertConfirmation(
        "Are you sure you want to cancel this triage? All unsaved data will be lost.",
        {
          header: "Cancel Triage",
          confirmBtnLabel: "Yes, Cancel"}
      );
      if (confirmed) {
        triageStore.reset();
        const source2 = getTriageRouteSource();
        if (source2 === "profile") {
          router.push("/patientProfile");
        } else {
          router.push("/NeonatalHome");
        }
        toastSuccess("Triage cancelled successfully");
      }
    };
    return {
      wizardData,
      stepperData,
      stepperTitle,
      currentOpenStepper,
      updateStatus,
      getSaveFunction,
      handleCancelTriage,
      chevronBackOutline
    };
  }
});

const _hoisted_1 = { class: "cancel-button-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-triage-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ion_button, {
              class: "cancel-triage-button",
              fill: "clear",
              onClick: _ctx.handleCancelTriage
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_icon, {
                  slot: "start",
                  icon: _ctx.chevronBackOutline
                }, null, 8, ["icon"]),
                _cache[0] || (_cache[0] = createTextVNode(" Cancel Triage ", -1))
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/NeonatalHome",
            getSaveFunction: _ctx.getSaveFunction,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalTriage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ef1f8058"]]);

export { NeonatalTriage as default };
