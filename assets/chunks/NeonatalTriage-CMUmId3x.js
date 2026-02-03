import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, J as Fragment, R as renderList, C as createBaseVNode, D as toDisplayString, c as computed, x as resolveComponent, O as createBlock, B as withCtx, H as createCommentVNode, cj as onBeforeUnmount, a5 as createTextVNode, L as IonIcon, N as IonButton, aG as IonContent, bu as IonPage, aL as useRouter, ct as useRoute, fc as onIonViewWillEnter, bX as chevronBackOutline, r as reactive, eT as provide } from './vendor-D523m2MA.js';
import { s as storeToRefs } from './pinia-BZkYQmJa.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, cl as PatientRegistrationService, t as toastWarning, H as HisDate, K as ObservationService, ch as saveEncounterData, b as EncounterTypeId, G as toastSuccess, k as alertConfirmation } from '../index-Cl_dwGxG.js';
import { D as DemographicBar } from './DemographicBar-BsqtNIqw.js';
import { p as neonatalTriageSections, q as neonatalTriageFormKey, g as useNeonatalTriageStore, N as NeonatalStepper, t as triageConceptMapping, r as defaultNeonatalTriageForm } from './NeonatalStepper-BLAOVqig.js';
import { T as TriageConfirmDialog } from './TriageConfirmDialog-DoWwmlOd.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-BpgNpq09.js';

const _hoisted_1$v = { class: "triage-section-wrapper" };
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "EmergencyTriageSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 0];
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

const EmergencyTriageSection = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-11798278"]]);

const _hoisted_1$u = { class: "triage-section-wrapper" };
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "BreathingAssessmentSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 1];
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

const BreathingAssessmentSection = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-999b720b"]]);

const _hoisted_1$t = { class: "triage-section-wrapper" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[3];
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const EmergencyManagementSection = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-153ad5b0"]]);

const _hoisted_1$s = { class: "triage-section-wrapper" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "OxygenSaturationSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 3];
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

const OxygenSaturationSection = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-6854a46b"]]);

const _hoisted_1$r = { class: "triage-section-wrapper" };
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "CentralCyanosisSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 5];
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

const CentralCyanosisSection = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-55c600f1"]]);

const _hoisted_1$q = { class: "triage-section-wrapper" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ConvulsionsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 6];
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

const ConvulsionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-76dc5068"]]);

const _hoisted_1$p = { class: "triage-section-wrapper" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionTwo",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 21];
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
      return openBlock(), createElementBlock("div", _hoisted_1$p, [
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

const VitalSectionTwo = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-daa0e96c"]]);

const _hoisted_1$o = { class: "triage-section-wrapper" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionThree",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 25];
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
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
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

const VitalSectionThree = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-4c2136cd"]]);

const _hoisted_1$n = { class: "summary-wrapper" };
const _hoisted_2$2 = { class: "summary-card-body" };
const _hoisted_3$1 = { class: "summary-row-label" };
const _hoisted_4$1 = { class: "summary-row-value" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
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
      grunting: "Grunting or Severe chest indrawings",
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
              label: "Current Weight (kg)",
              value: plain(v.current_weight)
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
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
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
                  createBaseVNode("span", _hoisted_3$1, toDisplayString(row.label), 1),
                  createBaseVNode("span", _hoisted_4$1, toDisplayString(row.value), 1)
                ]);
              }), 128))
            ])
          ]);
        }), 128))
      ]);
    };
  }
});

const SummarySection = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-daf4b082"]]);

const _hoisted_1$m = {
  key: 0,
  class: "weight-loss"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionFour",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionIndex = props.configIndex ?? 30;
    const sectionConfig = neonatalTriageSections[sectionIndex];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const calculatedWeightPercentage = ref(null);
    let debounceTimer = null;
    const calculatePercentage = (values) => {
      const birthWeight = Number(values.birth_weight);
      const currentWeight = Number(values.current_weight);
      const config = neonatalTriageSections[sectionIndex].formData;
      const birthWeightField = config?.find((f) => f.name === "birth_weight");
      const currentWeightField = config?.find((f) => f.name === "current_weight");
      const birthWeightError = birthWeightField?.validation?.(values.birth_weight);
      const currentWeightError = currentWeightField?.validation?.(values.current_weight);
      if (birthWeight > 0 && currentWeight > 0 && !birthWeightError && !currentWeightError) {
        calculatedWeightPercentage.value = parseFloat(((birthWeight - currentWeight) / birthWeight * 100).toFixed(2));
      } else {
        calculatedWeightPercentage.value = null;
      }
    };
    const syncFormValues = (values) => {
      if (!triageForm) return;
      triageStore.setField("current_weight", values.current_weight);
      triageStore.setField("birth_weight", values.birth_weight);
      triageStore.setField("head_circumference", values.head_circumference);
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        calculatePercentage(values);
      }, 300);
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
              calculatedWeightPercentage.value !== null ? (openBlock(), createElementBlock("div", _hoisted_1$m, toDisplayString(calculatedWeightPercentage.value >= 0 ? "Weight loss percentage:" : "Weight gain percentage:") + " " + toDisplayString(Math.abs(calculatedWeightPercentage.value)) + "% ", 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["formData", "conditionalRules"])
        ]),
        _: 1
      });
    };
  }
});

const VitalSectionFour = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-fb75529c"]]);

const _hoisted_1$l = { class: "triage-section-wrapper" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "TemperatureHight",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 26];
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
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
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

const TemperatureHigh = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-1edcce9d"]]);

const _hoisted_1$k = { class: "triage-section-wrapper" };
const _hoisted_2$1 = {
  key: 0,
  style: { "background-color": "#fedf89", "padding": "10px" }
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VitalBloodSugar",
  props: {
    stepIndex: {},
    configIndex: {},
    goToNext: { type: Function },
    goToPrevious: { type: Function },
    goToStep: { type: Function }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 27];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const helperText = sectionConfig.formData[0]?.helperText || null;
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
      if (props.goToStep) {
        const targetConfigIndex = 29;
        props.goToStep(targetConfigIndex);
      }
      showDialog.value = false;
    }
    function handleYes() {
      triageStore.setField("lowSugar", "Hypoglycemia-Symptomatic");
      if (props.goToStep) {
        const targetConfigIndex = 28;
        props.goToStep(targetConfigIndex);
      }
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
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        unref(helperText) ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(unref(helperText)), 1)) : createCommentVNode("", true),
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"]),
        createVNode(TriageConfirmDialog, {
          isOpen: showDialog.value,
          title: "Hypoglycemia?",
          subtitle: "The baby’s blood sugar is low.",
          body: "Is the baby symptomatic? e.g Jittery, lethargic or not responding.",
          onClose: handleClose,
          onNo: handleNo,
          onYes: handleYes
        }, null, 8, ["isOpen"])
      ]);
    };
  }
});

const VitalBloodSugar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-abe12eda"]]);

const _hoisted_1$j = { class: "triage-section-wrapper" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "EmergencyTriage",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 2];
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
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
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

const EmergencyTriage = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-3cd8efdf"]]);

const _hoisted_1$i = { class: "triage-section-wrapper" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaSymptomatic",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 28];
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

const HypoglycemiaSymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-d2a11aa9"]]);

const _hoisted_1$h = { class: "triage-section-wrapper" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaAsymptomatic",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 29];
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
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
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

const HypoglycemiaAsymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-8d063de8"]]);

const _hoisted_1$g = { class: "triage-section-wrapper" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementTwo",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 4];
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

const EmergencyManagementTwo = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-3c6046ea"]]);

const _hoisted_1$f = { class: "triage-section-wrapper" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSix",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 18];
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

const EmergencyManagementSix = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-744be771"]]);

const _hoisted_1$e = { class: "triage-section-wrapper" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSeven",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 22];
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

const EmergencyManagementSeven = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-63876483"]]);

const _hoisted_1$d = { class: "triage-section-wrapper" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementEight",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 25];
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

const EmergencyManagementEight = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-b74d6bb1"]]);

const _hoisted_1$c = { class: "triage-section-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BabyRecoveredStillSevereRespiratory",
  props: {
    stepIndex: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? props.stepIndex];
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const BabyRecoveredStillSevereRespiratory = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-d8a3061c"]]);

const _hoisted_1$b = { class: "triage-section-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ConvulsionsVitalsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 20];
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

const ConvulsionsVitalsSection = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1c4cd36f"]]);

const _hoisted_1$a = { class: "triage-section-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ObservationsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 7];
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

const ObservationsSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-2f9638aa"]]);

const _hoisted_1$9 = { class: "triage-section-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DangerSignsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 8];
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

const DangerSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-9311216a"]]);

const _hoisted_1$8 = { class: "triage-section-wrapper" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SelectPresentSignsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 13];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
      triageStore.patchValues(values);
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

const SelectPresentSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-37674e17"]]);

const _hoisted_1$7 = { class: "triage-section-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TrunkFeelsColdSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 14];
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

const TrunkFeelsColdSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-21f24688"]]);

const _hoisted_1$6 = { class: "triage-section-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "KeepWarmSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 15];
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
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
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

const KeepWarmSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-fd97bcca"]]);

const _hoisted_1$5 = { class: "triage-section-wrapper" };
const _hoisted_2 = { class: "respiratory-timer-body" };
const _hoisted_3 = { class: "respiratory-timer-time" };
const _hoisted_4 = { class: "respiratory-timer-instruction" };
const INITIAL_SECONDS = 60;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VitalSignsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 17];
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
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
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

const VitalsSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5a15fb56"]]);

const _hoisted_1$4 = { class: "triage-section-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RespiratoryDistressSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 13];
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

const RespiratoryDistressSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8e4870c5"]]);

const _hoisted_1$3 = { class: "triage-section-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TemperatureHighSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 27];
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
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

const TemperatureHighSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c5d99db2"]]);

const _hoisted_1$2 = { class: "triage-section-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SecondVitalSignsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 16];
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

const SecondVitalSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f97e38b1"]]);

const _hoisted_1$1 = { class: "triage-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BloodSugarSection",
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
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
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

const BloodSugarSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c6554e0b"]]);

const _hoisted_1 = { class: "triage-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReferralInstructionsSection",
  props: {
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = neonatalTriageSections[props.configIndex ?? 19];
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
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

const ReferralInstructionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bfcae9ae"]]);

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
    const hasPatient = Boolean(patient.value?.patientID);
    if (source === "dashboard") {
      if (hasPatient) {
        triageStore.clearPatient(patient.value.patientID);
      } else {
        triageStore.reset();
      }
      triageStore.initializeForPatient(hasPatient ? patient.value.patientID : null);
    } else if (hasPatient) {
      triageStore.initializeForPatient(patient.value.patientID);
    }
    const forceDemographics = source === "dashboard" && !hasPatient;
    const triageFormData = reactive({
      ...defaultNeonatalTriageForm,
      _hasPatient: hasPatient,
      _forceDemographics: forceDemographics
    });
    provide(neonatalTriageFormKey, triageFormData);
    const stepperKey = ref(0);
    onIonViewWillEnter(() => {
      stepperKey.value++;
      const currentPatientId = demographicsStore.patient?.patientID;
      const currentSource = getTriageRouteSource();
      if (currentSource === "dashboard") {
        if (currentPatientId) {
          triageStore.clearPatient(currentPatientId);
        } else {
          triageStore.reset();
        }
      } else if (currentPatientId) {
        triageStore.initializeForPatient(currentPatientId);
      }
      wizardData.value.forEach((item, index) => {
        item.checked = false;
        item.class = index === 0 ? "open_step common_step" : "common_step";
      });
    });
    watch(
      () => patient.value?.patientID,
      (newPatientId, oldPatientId) => {
        if (newPatientId !== oldPatientId) {
          triageStore.initializeForPatient(newPatientId || null);
        }
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
    const yesNoFields = /* @__PURE__ */ new Set(["crying", "can_measure_oxygen_saturation", "oxygen_facility_available", "can_measure_temp", "central_cyanosis"]);
    const numericFields = /* @__PURE__ */ new Set([
      "respiratory_rate",
      "heart_rate",
      "oxygen_saturation_vital",
      "saturation_in_oxygen",
      "temperature",
      "head_circumference"
    ]);
    const weightInGramsFields = /* @__PURE__ */ new Set(["current_weight", "birth_weight"]);
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
      { title: "Emergency Triage", value: "1", component: EmergencyTriageSection, configIndex: 0 },
      // Index 0
      { title: "Emergency Management", value: "2", component: BreathingAssessmentSection, configIndex: 1 },
      // Index 1: Emergency Management 1
      { title: "Emergency Triage", value: "3", component: EmergencyTriage, configIndex: 2 },
      // Index 2: Emergency Triage 1
      { title: "Danger Signs", value: "4", component: OxygenSaturationSection, configIndex: 3 },
      // Index 3
      { title: "Emergency Management", value: "5", component: EmergencyManagementTwo, configIndex: 4 },
      // Index 4: Emergency Management 2
      { title: "Emergency Management", value: "6", component: CentralCyanosisSection, configIndex: 5 },
      // Index 5: Emergency Management 3
      { title: "Emergency Management", value: "7", component: ConvulsionsSection, configIndex: 6 },
      // Index 6: Emergency Management 4
      { title: "Convulsions/Twitching", value: "8", component: DangerSignsSection, configIndex: 8 },
      // Index 8
      // Danger Signs physical assessment (feel trunk, measure CRT, feel femoral pulse)
      { title: "Emergency Signs", value: "9", component: DangerSignsSection, configIndex: 12 },
      // Index 12: DangerSignsAssessment
      // Selection page: Trunk feels cold, Capillary refill time > 3 seconds, Weak femoral pulses
      { title: "Emergency Signs", value: "10", component: SelectPresentSignsSection, configIndex: 13 },
      // Index 13
      // Trunk Cold infographic - shown when trunk_cold is selected (prioritized first)
      // Uses WarmTheBody infographic
      {
        title: "Emergency Management - Hypothermia",
        value: "11",
        component: TrunkFeelsColdSection,
        configIndex: 14
        // Index 14: Hypothermia management (trunk_cold)
      },
      // SHOCK infographic - shown when capillary_refill OR weak_pulse is selected
      // Uses KeepTheBodyWarm infographic
      {
        title: "Emergency Management - Shock",
        value: "12",
        component: KeepWarmSection,
        configIndex: 15
        // Index 15: Shock management (capillary_refill or weak_pulse)
      },
      // Vital Signs section (continues after danger signs infographics)
      { title: "Vital Signs", value: "13", component: VitalsSignsSection, configIndex: 16 },
      // Index 16
      {
        title: "Emergency Management",
        value: "14",
        component: EmergencyManagementSix,
        configIndex: 17
        // Index 17
      },
      { title: "Referral Instructions", value: "15", component: ReferralInstructionsSection, configIndex: 19 },
      // Index 19
      {
        title: "Emergency Management",
        value: "16",
        component: ConvulsionsVitalsSection,
        configIndex: 20
        // Index 20
      },
      { title: "Vital Signs", value: "17", component: VitalSectionTwo, configIndex: 21 },
      // Index 21: Vital Signs 2
      { title: "Emergency Management", value: "18", component: EmergencyManagementSeven, configIndex: 22 },
      // Index 22: Emergency Management 7
      {
        title: "Severe Respiratory Distress",
        value: "19",
        component: BabyRecoveredStillSevereRespiratory,
        configIndex: 23
        // Index 23: "Severe Respiratory Distress - Referral Required"
      },
      { title: "Respiratory Distress", value: "20", component: BabyRecoveredStillSevereRespiratory, configIndex: 23 },
      // Index 23: Respiratory Distress
      { title: "Vital Signs", value: "21", component: VitalSectionThree, configIndex: 24 },
      // Index 24: Vital Signs 3
      {
        title: "Temperature Low",
        value: "22",
        component: EmergencyManagementEight,
        configIndex: 25
        // Index 25: Temperature Low - Warm The Baby
      },
      { title: "Temperature High", value: "23", component: TemperatureHigh, configIndex: 26 },
      // Index 26: Temperature High
      {
        title: "Blood Sugar",
        value: "24",
        component: VitalBloodSugar,
        configIndex: 27,
        // Index 27: Emergency Triage Blood Sugar
        hasDialog: true
      },
      { title: "Hypoglycemia Symptomatic", value: "25", component: HypoglycemiaSymptomatic, configIndex: 28 },
      // Index 28
      {
        title: "Hypoglycemia-Asymptomatic",
        value: "26",
        component: HypoglycemiaAsymptomatic,
        configIndex: 29
        // Index 29
      },
      { title: "Vital Signs", value: "27", component: VitalSectionFour, configIndex: 30 },
      // Index 30: Vital Signs Four
      { title: "Triage Summary", value: "28", component: SummarySection, configIndex: 36 },
      // Index 36
      { title: "Demographics", value: "29", component: FindRegisterPatient, configIndex: 31 }
      // Index 31
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
            if (patientId) {
              triageStore.clearPatient(patientId);
            }
            toastSuccess("Emergency triage saved successfully");
            await new Promise((resolve) => setTimeout(resolve, 800));
            const source2 = getTriageRouteSource();
            router.push("/neonatal/checkpoint");
          } catch (error) {
            console.error("Failed to save triage assessment", error);
            toastWarning("Failed to save triage assessment");
          }
        };
      }
    };
    const handleCancelTriage = async () => {
      const confirmed = await alertConfirmation("Are you sure you want to cancel this triage? All unsaved data will be lost.", {
        header: "Cancel Triage",
        confirmBtnLabel: "Yes, Cancel"});
      if (confirmed) {
        if (patient.value?.patientID) {
          triageStore.clearPatient(patient.value.patientID);
        } else {
          triageStore.reset();
        }
        const source2 = getTriageRouteSource();
        if (source2 === "profile") {
          router.push("/patient-profile");
        } else {
          router.push("/neonatal/home");
        }
        toastSuccess("Triage cancelled successfully");
      }
    };
    return {
      wizardData,
      stepperData,
      stepperTitle,
      currentOpenStepper,
      stepperKey,
      updateStatus,
      getSaveFunction,
      handleCancelTriage,
      chevronBackOutline
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-triage-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          (openBlock(), createBlock(_component_NeonatalStepper, {
            key: _ctx.stepperKey,
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/neonatal/home",
            getSaveFunction: _ctx.getSaveFunction,
            "flow-type": "triage",
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "onUpdateStatus"]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalTriage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e24cd234"]]);

export { NeonatalTriage as default };
