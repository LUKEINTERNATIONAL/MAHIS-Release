import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, a3 as onMounted, x as resolveComponent, O as createBlock, B as withCtx, D as toDisplayString, H as createCommentVNode, C as createBaseVNode, bN as useRoute, bV as IonSearchbar, L as IonIcon, ex as qrCode, N as IonButton, bI as addOutline, a5 as createTextVNode, ey as Transition, M as IonSpinner, bR as IonChip, a7 as IonLabel, J as Fragment, S as renderList, ez as cloudOfflineOutline, eA as callOutline, b_ as chevronBackOutline, dg as chevronForwardOutline, aw as searchOutline, cP as closeCircle, be as IonCardContent, c as computed, cl as onBeforeUnmount, aH as IonContent, bw as IonPage, aM as useRouter, fl as onIonViewWillEnter, r as reactive, f2 as provide } from './vendor-DEu2hKw1.js';
import { s as storeToRefs } from './pinia-3T0xmcrW.js';
import { z as StandardForm, _ as _export_sfc, u as useDemographicsStore, K as ObservationService, V as useGlobalPropertyStore, a as useProgramStore, D as PatientSearchService, n as icons, y as StandardValidations, C as useExposeFromStandardForm, t as toastWarning, S as Service, b9 as scannedData, o as createModal, T as Toolbar, ak as ProgramService, L as ProgramId, H as HisDate, b as EncounterTypeId, J as savePatientRecord, G as toastSuccess, k as alertConfirmation } from '../index-Cg028FlC.js';
import { D as DemographicBar } from './DemographicBar-36yh1wC7.js';
import { c as neonatalTriageFormKey, N as NeonatalStepper, G as defaultNeonatalTriageForm } from './NeonatalStepper-j_qPb8GX.js';
import { b as getSectionById, u as useNeonatalTriageStore, c as getSectionIndexById, n as neonatalTriageSections, t as triageConceptMapping } from './triage-n_9fo4FP.js';
import { R as RegistrationService } from './useSetRegistrationValues-DvlES3mm.js';
import { S as SummarySection } from './SummarySection-BAiaiXPx.js';
import { T as TriageConfirmDialog } from './TriageConfirmDialog-CfVEyAhr.js';
import { R as Registration } from './Registration-DGMjpW2L.js';
import { l as lodashExports } from './lodash-BEEU-9Fk.js';

const _hoisted_1$t = { class: "triage-section-wrapper" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "EmergencyTriageSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const EmergencyTriageSection = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-25876e39"]]);

const _hoisted_1$s = { class: "triage-section-wrapper" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "BreathingAssessmentSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const BreathingAssessmentSection = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-abb1b158"]]);

const _hoisted_1$r = { class: "triage-section-wrapper" };
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const EmergencyManagementSection = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-18e51ce5"]]);

const _hoisted_1$q = { class: "triage-section-wrapper" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "OxygenSaturationSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const OxygenSaturationSection = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-1954c8d6"]]);

const _hoisted_1$p = { class: "triage-section-wrapper" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "CentralCyanosisSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const CentralCyanosisSection = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-c88c68e6"]]);

const _hoisted_1$o = { class: "triage-section-wrapper" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "ConvulsionsSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const ConvulsionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-5cb87016"]]);

const _hoisted_1$n = { class: "triage-section-wrapper" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionTwo",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
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

const VitalSectionTwo = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-95749e97"]]);

const _hoisted_1$m = { class: "triage-section-wrapper" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionThree",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$m, [
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

const VitalSectionThree = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-7cef1bfd"]]);

const _hoisted_1$l = {
  key: 0,
  class: "weight-loss"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VitalSectionFour",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const calculatedWeightPercentage = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    let debounceTimer = null;
    onMounted(async () => {
      await prefillBirthWeightFromRegistration();
    });
    async function prefillBirthWeightFromRegistration() {
      const patientId = patient.value?.patientID;
      if (!patientId) return;
      const currentValue = triageStore.formValues.birth_weight;
      if (currentValue) return;
      try {
        const weightInKg = await ObservationService.getFirstValueNumber(patientId, "Weight");
        if (weightInKg == null) return;
        const weightInGrams = Math.round(weightInKg * 1e3);
        formRef.value?.setFormValue("birth_weight", weightInGrams.toString());
        triageStore.setField("birth_weight", weightInGrams);
      } catch (error) {
        console.error("Failed to prefill birth weight from registration:", error);
      }
    }
    const calculatePercentage = (values) => {
      const birthWeight = Number(values.birth_weight);
      const currentWeight = Number(values.current_weight);
      const config = sectionConfig?.formData || [];
      const birthWeightField = config.find((f) => f.name === "birth_weight");
      const currentWeightField = config.find((f) => f.name === "current_weight");
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
      Object.assign(triageForm, values);
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
              calculatedWeightPercentage.value !== null ? (openBlock(), createElementBlock("div", _hoisted_1$l, toDisplayString(calculatedWeightPercentage.value >= 0 ? "Weight loss percentage:" : "Weight gain percentage:") + " " + toDisplayString(Math.abs(calculatedWeightPercentage.value)) + "% ", 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["formData", "conditionalRules"])
        ]),
        _: 1
      });
    };
  }
});

const VitalSectionFour = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-1216f557"]]);

const _hoisted_1$k = { class: "triage-section-wrapper" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "TemperatureHight",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
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

const TemperatureHigh = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-1acb9c5a"]]);

const _hoisted_1$j = { class: "triage-section-wrapper" };
const _hoisted_2$2 = {
  key: 0,
  style: { "background-color": "#fedf89", "padding": "10px" }
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VitalBloodSugar",
  props: {
    sectionId: {},
    stepIndex: {},
    configIndex: {},
    goToNext: { type: Function },
    goToPrevious: { type: Function },
    goToStep: { type: Function }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
    const triageForm = inject(neonatalTriageFormKey);
    const triageStore = useNeonatalTriageStore();
    const helperText = sectionConfig?.formData?.[0]?.helperText || null;
    const showDialog = ref(false);
    const syncFormValues = (values) => {
      if (!triageForm) return;
      Object.assign(triageForm, values);
      triageStore.setField("can_measure_blood_sugar", values.can_measure_blood_sugar);
      triageStore.setField("blood_sugar", values.blood_sugar);
      triageStore.setField("blood_sugar_unit", values.blood_sugar_unit);
    };
    function openDialog() {
      const units = triageStore.formValues.blood_sugar_unit;
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
        const targetIndex = getSectionIndexById("BLOOD_SUGAR_ASYMPTOMATIC");
        if (targetIndex !== -1) props.goToStep(targetIndex);
      }
      showDialog.value = false;
    }
    function handleYes() {
      triageStore.setField("lowSugar", "Hypoglycemia-Symptomatic");
      if (props.goToStep) {
        const targetIndex = getSectionIndexById("BLOOD_SUGAR_SYMPTOMATIC");
        if (targetIndex !== -1) props.goToStep(targetIndex);
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
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        unref(helperText) ? (openBlock(), createElementBlock("div", _hoisted_2$2, toDisplayString(unref(helperText)), 1)) : createCommentVNode("", true),
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

const VitalBloodSugar = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-030a8fb4"]]);

const _hoisted_1$i = { class: "triage-section-wrapper" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "EmergencyTriage",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
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

const EmergencyTriage = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-7632fe78"]]);

const _hoisted_1$h = { class: "patient-search-container" };
const _hoisted_2$1 = {
  class: "custom-card",
  style: { "border": "1px dotted #ececec", "border-radius": "8px" }
};
const _hoisted_3$1 = {
  key: 0,
  class: "search-with-button"
};
const _hoisted_4$1 = { class: "search-wrapper" };
const _hoisted_5 = {
  key: 0,
  class: "inline-reg-container"
};
const _hoisted_6 = { class: "inline-reg-card" };
const _hoisted_7 = { class: "inline-reg-body" };
const _hoisted_8 = { class: "inline-reg-footer" };
const _hoisted_9 = {
  key: 1,
  class: "filter-chips"
};
const _hoisted_10 = {
  key: 2,
  class: "search-results"
};
const _hoisted_11 = {
  key: 0,
  class: "search-loading"
};
const _hoisted_12 = {
  key: 1,
  class: "results-list"
};
const _hoisted_13 = { class: "results-info" };
const _hoisted_14 = { class: "results-count" };
const _hoisted_15 = {
  key: 0,
  class: "offline-badge"
};
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "result-header" };
const _hoisted_18 = { class: "patient-name" };
const _hoisted_19 = { class: "patient-dob" };
const _hoisted_20 = { class: "patient-gender" };
const _hoisted_21 = { class: "result-details" };
const _hoisted_22 = { class: "patient-mrn" };
const _hoisted_23 = {
  key: 0,
  class: "patient-address"
};
const _hoisted_24 = {
  key: 1,
  class: "patient-phone"
};
const _hoisted_25 = {
  key: 0,
  class: "pagination"
};
const _hoisted_26 = { class: "page-info" };
const _hoisted_27 = {
  key: 2,
  class: "no-results"
};
const _hoisted_28 = {
  key: 3,
  class: "selected-patient"
};
const _hoisted_29 = { class: "selected-card" };
const _hoisted_30 = { class: "selected-card-header" };
const _hoisted_31 = { class: "selected-header-with-button" };
const _hoisted_32 = { class: "selected-card-content" };
const _hoisted_33 = { class: "selected-info" };
const _hoisted_34 = { key: 0 };
const _hoisted_35 = { key: 1 };
const itemsPerPage = 10;
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "FindRegisterPatient",
  props: {
    patient: {},
    isBaby: {},
    isMinimalRegistration: {},
    isFormLocked: { type: Boolean }
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const searchQuery = ref("");
    const isSearching = ref(false);
    const searchResults = ref([]);
    const selectedPatient = ref(null);
    const activeFilter = ref("All");
    const currentPage = ref(1);
    const globalPropertyStore = useGlobalPropertyStore();
    const programStore = useProgramStore();
    const patientSearchService = new PatientSearchService();
    const totalResults = computed(() => searchResults.value.length);
    const totalPages = computed(() => Math.ceil(searchResults.value.length / itemsPerPage));
    const hasOfflineResults = computed(() => searchResults.value.some((p) => p.isOffline));
    const activeProgramId = computed(() => programStore?.activeProgram?.program_id);
    const paginatedResults = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return searchResults.value.slice(start, end);
    });
    const route = useRoute();
    const emit = __emit;
    const props = __props;
    const { formRef } = useExposeFromStandardForm();
    const showInlineForm = ref(false);
    const isSaving = ref(false);
    const regForm = ref([
      {
        componentType: "inputField",
        header: "First name",
        name: "firstname",
        icon: icons.fullName,
        validation: (value) => StandardValidations.isName(value)
      },
      {
        componentType: "inputField",
        header: "Last name",
        name: "lastname",
        icon: icons.fullName,
        validation: (value) => StandardValidations.isName(value)
      },
      {
        componentType: "multiSelectInputField",
        header: "Gender",
        name: "gender",
        placeholder: "Select gender",
        icon: icons.search,
        options: [
          { label: "Male", value: "M" },
          { label: "Female", value: "F" }
        ],
        trackBy: "value",
        label: "label",
        mode: "standard",
        validation: (value) => value?.value || value ? null : "Select gender"
      }
    ]);
    const cancelInlineForm = () => {
      showInlineForm.value = false;
      formRef.value?.resetForm();
    };
    const saveInlinePatient = async () => {
      const error = formRef.value?.validateForm();
      if (error) {
        toastWarning("Please fill all required fields correctly.");
        return;
      }
      isSaving.value = true;
      try {
        const formData = formRef.value?.getFormValues();
        const data = {
          personalInformation: formData
        };
        const patientData = await new RegistrationService().saveRegistrationData(data, true);
        if (patientData?.ID) {
          showInlineForm.value = false;
          selectedPatient.value = mapPatientDemographic(patientData);
          emitPatientRecord(patientData);
        } else {
          console.error("Save failed: No ID returned");
        }
      } catch (e) {
        console.error("Inline Registration Error:", e);
      } finally {
        isSaving.value = false;
      }
    };
    const handleSearchInput = async () => {
      if (showInlineForm.value) cancelInlineForm();
      if (!searchQuery.value || searchQuery.value.trim().length < 2) {
        searchResults.value = [];
        return;
      }
      isSearching.value = true;
      currentPage.value = 1;
      try {
        const query = searchQuery.value.trim();
        const globalProperty = globalPropertyStore.globalPropertyStore;
        const searchOptions = {
          searchText: query,
          page: currentPage.value,
          paginationSize: 50,
          sitePrefix: await globalProperty.sitePrefix,
          ddeEnabled: globalProperty.dde_enabled,
          programId: Service.getProgramID(),
          activeFilter: activeFilter.value
        };
        const results = await patientSearchService.searchPatients(searchOptions);
        const combinedResults = [
          ...results.onlinePatients.map((p) => ({ ...p, isOffline: false })),
          ...results.offlinePatients.map((p) => ({ ...p, isOffline: true }))
        ];
        searchResults.value = combinedResults.filter((p) => {
          if (Service.getProgramID() != 38) return p;
          const birthdate = p.person?.birthdate || p.birthdate || p.personInformation?.birthdate;
          if (!birthdate) return false;
          const today = /* @__PURE__ */ new Date();
          const birth = new Date(birthdate);
          const daysDifference = Math.floor((today.getTime() - birth.getTime()) / (1e3 * 60 * 60 * 24));
          return daysDifference < 28;
        }).map((patient) => mapPatientDemographic(patient));
        if (results.shouldNavigateToRegistration && results.extractedData) {
          await goToRegistration();
        }
      } catch (error) {
        searchResults.value = [];
      } finally {
        isSearching.value = false;
      }
    };
    const selectFilter = (filterType) => {
      activeFilter.value = filterType;
      if (searchQuery.value) {
        handleSearchInput();
      }
    };
    const scanCode = async () => {
      try {
        const dataScanned = await scannedData();
        if (dataScanned) {
          searchQuery.value = dataScanned;
          await handleSearchInput();
        }
      } catch (error) {
      }
    };
    const mapPatientDemographic = (patient) => {
      if (patient.person) {
        const person = patient.person;
        const name = person.names?.[0] || {};
        const address = person.addresses?.[0] || {};
        const phoneAttribute = person.person_attributes?.find(
          (attr) => attr.person_attribute_type?.name === "Cell Phone Number" || attr.type?.name === "Cell Phone Number"
        );
        return {
          personID: person.person_id,
          patientID: useDemographicsStore().getPatientIdentifier(patient, 3),
          firstName: name.given_name || "",
          middleName: name.middle_name || "",
          lastName: name.family_name || "",
          gender: person.gender,
          birthdate: person.birthdate,
          nationalId: patient.national_id || "",
          address,
          phone: phoneAttribute?.value || "",
          isOffline: patient.isOffline || false
        };
      } else if (patient.personInformation) {
        const info = patient.personInformation;
        return {
          patientID: patient.ID || info.ID,
          firstName: info.given_name || "",
          middleName: info.middle_name || "",
          lastName: info.family_name || "",
          gender: info.gender || "",
          birthdate: info.birthdate || "",
          nationalId: patient.otherPersonInformation?.nationalID || "",
          address: {
            city_village: info.home_village || info.current_village || "",
            township_division: info.home_traditional_authority || info.current_traditional_authority || "",
            state_province: info.home_district || info.current_district || ""
          },
          phone: info.cell_phone_number || "",
          isOffline: patient.isOffline || false
        };
      }
      return patient;
    };
    const selectPatient = async (patientData) => {
      const patient = await useDemographicsStore().getPatientData(patientData.personID || patientData.patientID);
      selectedPatient.value = patientData;
      searchQuery.value = "";
      emitPatientRecord(patient);
    };
    const clearSelection = () => {
      selectedPatient.value = null;
    };
    const goToRegistration = async () => {
      if (Service.getProgramID() == 38 || props.isMinimalRegistration) {
        showInlineForm.value = true;
        return;
      }
      let patientData = "";
      patientData = await createModal(Registration, { class: "fullScreenModal" }, false, { relativeRegistration: true, isBaby: props.isBaby });
      if (patientData?.ID) {
        selectedPatient.value = mapPatientDemographic(patientData);
        await emitPatientRecord(patientData);
      }
    };
    const emitPatientRecord = async (patientData) => {
      if (route.name == "neonatalTriage") {
        await useDemographicsStore().setRecord(patientData);
      } else {
        emit("value-changed", "findRegisterPatient", patientData);
      }
    };
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };
    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    const formatAddress = (address) => {
      if (!address) return "";
      if (typeof address === "string") return address;
      const parts = [];
      if (address.city_village) parts.push(address.city_village);
      if (address.township_division) parts.push(address.township_division);
      if (address.state_province) parts.push(address.state_province);
      return parts.join(", ");
    };
    onMounted(() => {
      if (!lodashExports.isEmpty(props.patient)) {
        const patientData = mapPatientDemographic(props.patient);
        if (lodashExports.isEmpty(patientData)) return;
        selectedPatient.value = patientData;
        emitPatientRecord(props.patient);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              !__props.isFormLocked ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  createVNode(unref(IonSearchbar), {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    placeholder: "Search by Name, MRN, Gender, or scan MRN",
                    onIonInput: handleSearchInput,
                    debounce: 300,
                    "show-clear-button": "focus",
                    class: "search-input"
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", {
                    class: "barcode-btn",
                    "aria-label": "Scan MRN",
                    onClick: scanCode
                  }, [
                    createVNode(unref(IonIcon), {
                      color: "primary",
                      size: "small",
                      icon: unref(qrCode),
                      slot: "icon-only"
                    }, null, 8, ["icon"])
                  ])
                ]),
                createVNode(unref(IonButton), {
                  color: "success",
                  onClick: goToRegistration,
                  class: "new-registration-btn"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(addOutline),
                      slot: "icon-only"
                    }, null, 8, ["icon"]),
                    _cache[7] || (_cache[7] = createTextVNode("New Registration ", -1))
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              createVNode(Transition, { name: "slide-down" }, {
                default: withCtx(() => [
                  showInlineForm.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      _cache[10] || (_cache[10] = createBaseVNode("div", { class: "inline-reg-header" }, [
                        createBaseVNode("span", { class: "header-title-text" }, "New Patient Registration")
                      ], -1)),
                      createBaseVNode("div", _hoisted_7, [
                        createVNode(StandardForm, {
                          formData: regForm.value,
                          ref_key: "formRef",
                          ref: formRef
                        }, null, 8, ["formData"])
                      ]),
                      createBaseVNode("div", _hoisted_8, [
                        createVNode(unref(IonButton), {
                          fill: "outline",
                          class: "cancel-btn",
                          onClick: cancelInlineForm
                        }, {
                          default: withCtx(() => [..._cache[8] || (_cache[8] = [
                            createTextVNode("Cancel", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(unref(IonButton), {
                          color: "primary",
                          disabled: isSaving.value,
                          onClick: saveInlinePatient
                        }, {
                          default: withCtx(() => [
                            isSaving.value ? (openBlock(), createBlock(unref(IonSpinner), {
                              key: 0,
                              name: "crescent",
                              slot: "start"
                            })) : createCommentVNode("", true),
                            _cache[9] || (_cache[9] = createTextVNode(" Save ", -1))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              searchQuery.value && searchQuery.value.length > 0 && !showInlineForm.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "All",
                  color: activeFilter.value === "All" ? "primary" : "medium",
                  onClick: _cache[1] || (_cache[1] = ($event) => selectFilter("All"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[11] || (_cache[11] = [
                        createTextVNode("All", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "Names",
                  color: activeFilter.value === "Names" ? "primary" : "medium",
                  onClick: _cache[2] || (_cache[2] = ($event) => selectFilter("Names"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[12] || (_cache[12] = [
                        createTextVNode("Names", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "MRN",
                  color: activeFilter.value === "MRN" ? "primary" : "medium",
                  onClick: _cache[3] || (_cache[3] = ($event) => selectFilter("MRN"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[13] || (_cache[13] = [
                        createTextVNode("MRN", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "Malawi National ID",
                  color: activeFilter.value === "Malawi National ID" ? "primary" : "medium",
                  onClick: _cache[4] || (_cache[4] = ($event) => selectFilter("Malawi National ID"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[14] || (_cache[14] = [
                        createTextVNode("National ID", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                activeProgramId.value == 1 ? (openBlock(), createBlock(unref(IonChip), {
                  key: 0,
                  outline: activeFilter.value !== "ARV Number",
                  color: activeFilter.value === "ARV Number" ? "primary" : "medium",
                  onClick: _cache[5] || (_cache[5] = ($event) => selectFilter("ARV Number"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[15] || (_cache[15] = [
                        createTextVNode("ARV Number", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"])) : createCommentVNode("", true),
                activeProgramId.value == 32 ? (openBlock(), createBlock(unref(IonChip), {
                  key: 1,
                  outline: activeFilter.value !== "NCD Number",
                  color: activeFilter.value === "NCD Number" ? "primary" : "medium",
                  onClick: _cache[6] || (_cache[6] = ($event) => selectFilter("NCD Number"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[16] || (_cache[16] = [
                        createTextVNode("NCD Number", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              searchQuery.value && searchQuery.value.length > 0 && !selectedPatient.value && !showInlineForm.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(3, (n) => {
                    return createBaseVNode("div", {
                      key: `skeleton-${n}`,
                      class: "result-item-skeleton"
                    }, [..._cache[17] || (_cache[17] = [
                      createBaseVNode("div", { class: "skeleton-header" }, [
                        createBaseVNode("div", { class: "skeleton-name" }),
                        createBaseVNode("div", { class: "skeleton-dob" }),
                        createBaseVNode("div", { class: "skeleton-gender" })
                      ], -1),
                      createBaseVNode("div", { class: "skeleton-details" }, [
                        createBaseVNode("div", { class: "skeleton-address" }),
                        createBaseVNode("div", { class: "skeleton-phone" })
                      ], -1)
                    ])]);
                  }), 64))
                ])) : searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("span", _hoisted_14, "Found " + toDisplayString(totalResults.value) + " patient(s)", 1),
                    hasOfflineResults.value ? (openBlock(), createElementBlock("span", _hoisted_15, [
                      createVNode(unref(IonIcon), { icon: unref(cloudOfflineOutline) }, null, 8, ["icon"]),
                      _cache[18] || (_cache[18] = createTextVNode(" Includes offline results ", -1))
                    ])) : createCommentVNode("", true)
                  ]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedResults.value, (patient, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: patient.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectPatient(patient)
                    }, [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("span", _hoisted_18, toDisplayString(patient.firstName) + " " + toDisplayString(patient.middleName ? patient.middleName + " " : "") + toDisplayString(patient.lastName), 1),
                        createBaseVNode("span", _hoisted_19, "DOB: " + toDisplayString(formatDate(patient.birthdate)), 1),
                        createBaseVNode("span", _hoisted_20, toDisplayString(patient.gender === "F" ? "Female" : patient.gender === "M" ? "Male" : patient.gender), 1)
                      ]),
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("p", _hoisted_22, [
                          _cache[19] || (_cache[19] = createBaseVNode("strong", null, "MRN:", -1)),
                          createTextVNode(" " + toDisplayString(patient.patientID), 1)
                        ]),
                        patient.address ? (openBlock(), createElementBlock("p", _hoisted_23, [
                          _cache[20] || (_cache[20] = createBaseVNode("strong", null, "Current Address:", -1)),
                          createTextVNode(" " + toDisplayString(formatAddress(patient.address)), 1)
                        ])) : createCommentVNode("", true),
                        patient.phone ? (openBlock(), createElementBlock("p", _hoisted_24, [
                          createVNode(unref(IonIcon), { icon: unref(callOutline) }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(patient.phone), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_16);
                  }), 128)),
                  totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_25, [
                    createVNode(unref(IonButton), {
                      fill: "outline",
                      size: "small",
                      onClick: previousPage,
                      disabled: currentPage.value === 1
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), { icon: unref(chevronBackOutline) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createBaseVNode("span", _hoisted_26, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
                    createVNode(unref(IonButton), {
                      fill: "outline",
                      size: "small",
                      onClick: nextPage,
                      disabled: currentPage.value === totalPages.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), { icon: unref(chevronForwardOutline) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "no-results-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("p", null, 'No patient found matching "' + toDisplayString(searchQuery.value) + '"', 1),
                  createVNode(unref(IonButton), {
                    expand: "block",
                    onClick: goToRegistration
                  }, {
                    default: withCtx(() => [..._cache[21] || (_cache[21] = [
                      createTextVNode("Register new patient", -1)
                    ])]),
                    _: 1
                  })
                ]))
              ])) : createCommentVNode("", true),
              selectedPatient.value ? (openBlock(), createElementBlock("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("div", _hoisted_30, [
                    createBaseVNode("div", _hoisted_31, [
                      _cache[22] || (_cache[22] = createBaseVNode("span", { class: "selected-subtitle" }, "Selected Patient", -1)),
                      createVNode(unref(IonButton), {
                        fill: "clear",
                        size: "small",
                        color: "danger",
                        onClick: clearSelection,
                        class: "clear-selection-btn"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(closeCircle),
                            slot: "icon-only"
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("div", _hoisted_33, [
                      createBaseVNode("h3", null, toDisplayString(selectedPatient.value.firstName) + " " + toDisplayString(selectedPatient.value.middleName ? selectedPatient.value.middleName + " " : "") + toDisplayString(selectedPatient.value.lastName), 1),
                      createBaseVNode("p", null, [
                        _cache[23] || (_cache[23] = createBaseVNode("strong", null, "MRN:", -1)),
                        createTextVNode(" " + toDisplayString(selectedPatient.value.patientID), 1)
                      ]),
                      selectedPatient.value.birthdate ? (openBlock(), createElementBlock("p", _hoisted_34, [
                        _cache[24] || (_cache[24] = createBaseVNode("strong", null, "DOB:", -1)),
                        createTextVNode(" " + toDisplayString(formatDate(selectedPatient.value.birthdate)), 1)
                      ])) : createCommentVNode("", true),
                      selectedPatient.value.address ? (openBlock(), createElementBlock("p", _hoisted_35, [
                        _cache[25] || (_cache[25] = createBaseVNode("strong", null, "Address:", -1)),
                        createTextVNode(" " + toDisplayString(formatAddress(selectedPatient.value.address)), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const FindRegisterPatient = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-4c0e5516"]]);

const _hoisted_1$g = { class: "triage-section-wrapper" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaSymptomatic",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
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

const HypoglycemiaSymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-9b40a890"]]);

const _hoisted_1$f = { class: "triage-section-wrapper" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaAsymptomatic",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
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

const HypoglycemiaAsymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-4b446079"]]);

const _hoisted_1$e = { class: "triage-section-wrapper" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementTwo",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const EmergencyManagementTwo = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a8bb06cb"]]);

const _hoisted_1$d = { class: "triage-section-wrapper" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSeven",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const EmergencyManagementSeven = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-4bf2c2de"]]);

const _hoisted_1$c = { class: "triage-section-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementEight",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const EmergencyManagementEight = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-c258a84b"]]);

const _hoisted_1$b = { class: "triage-section-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BabyRecoveredStillSevereRespiratory",
  props: {
    sectionId: {},
    stepIndex: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const BabyRecoveredStillSevereRespiratory = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-9b489b98"]]);

const _hoisted_1$a = { class: "triage-section-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ObservationsSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const ObservationsSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-5f845c6c"]]);

const _hoisted_1$9 = { class: "triage-section-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DangerSignsSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const DangerSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-fbdaec90"]]);

const _hoisted_1$8 = { class: "triage-section-wrapper" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SelectPresentSignsSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const SelectPresentSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-fb7178f4"]]);

const _hoisted_1$7 = { class: "triage-section-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TrunkFeelsColdSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const TrunkFeelsColdSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-41ecc0b5"]]);

const _hoisted_1$6 = { class: "triage-section-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "KeepWarmSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const KeepWarmSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3fda550a"]]);

const _hoisted_1$5 = { class: "triage-section-wrapper" };
const _hoisted_2 = { class: "respiratory-timer-body" };
const _hoisted_3 = { class: "respiratory-timer-time" };
const _hoisted_4 = { class: "respiratory-timer-instruction" };
const INITIAL_SECONDS = 60;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VitalSignsSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const VitalSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5ca3c3f2"]]);

const _hoisted_1$4 = { class: "triage-section-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RespiratoryDistressSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const RespiratoryDistressSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a1fc75a1"]]);

const _hoisted_1$3 = { class: "triage-section-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TemperatureHighSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const TemperatureHighSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-03826a03"]]);

const _hoisted_1$2 = { class: "triage-section-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SecondVitalSignsSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
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

const SecondVitalSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c032e02e"]]);

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
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const sectionConfig = props.sectionId ? getSectionById(props.sectionId) : null;
    const formData = sectionConfig?.formData || [];
    const conditionalRules = sectionConfig?.conditionalRules || [];
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

const ReferralInstructionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-686f8cc4"]]);

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
    VitalSignsSection,
    RespiratoryDistressSection,
    TemperatureHighSection,
    SecondVitalSignsSection,
    BloodSugarSection,
    VitalsSignsSection: VitalSignsSection,
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
      const currentPatientId = demographicsStore.patient?.patientID;
      const currentSource = getTriageRouteSource();
      if (currentSource === "dashboard") {
        if (currentPatientId) {
          triageStore.clearPatient(currentPatientId);
        } else {
          triageStore.reset();
        }
        triageStore.initializeForPatient(currentPatientId || null);
      }
      stepperKey.value++;
      currentOpenStepper.value = "1";
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
      if (Array.isArray(rawValue) && rawValue.length === 0) return null;
      if (yesNoFields.has(fieldName)) {
        const yesNo = normalizeYesNoValue(rawValue);
        if (!yesNo) return null;
        return ObservationService.buildValueCoded(conceptName, yesNo, obsDate);
      }
      if (fieldName === "blood_sugar") {
        const unit = context.blood_sugar_unit || "mg/dL";
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
      if (!textValue || textValue.trim() === "") return null;
      return ObservationService.buildValueText(conceptName, textValue, obsDate);
    };
    const allStepperData = [
      { title: "Emergency Triage", value: "1", component: EmergencyTriageSection, sectionId: "EMERGENCY_TRIAGE_INITIAL" },
      // 0
      { title: "Emergency Management", value: "2", component: BreathingAssessmentSection, sectionId: "EMERGENCY_MANAGEMENT_RESUSCITATE" },
      // 1
      { title: "Emergency Triage", value: "3", component: EmergencyTriage, sectionId: "EMERGENCY_TRIAGE_MEASURING" },
      // 2
      { title: "Emergency Signs", value: "4", component: OxygenSaturationSection, sectionId: "EMERGENCY_SIGNS_SCREENING" },
      // 3
      { title: "Emergency Management", value: "5", component: EmergencyManagementTwo, sectionId: "EMERGENCY_MANAGEMENT_GRUNTING" },
      // 4
      { title: "Emergency Management", value: "6", component: CentralCyanosisSection, sectionId: "EMERGENCY_MANAGEMENT_CYANOSIS" },
      // 5
      { title: "Emergency Management", value: "7", component: TrunkFeelsColdSection, sectionId: "EMERGENCY_MANAGEMENT_TRUNK_COLD" },
      // 6
      { title: "Emergency Management", value: "8", component: KeepWarmSection, sectionId: "EMERGENCY_MANAGEMENT_CAP_REFILL" },
      // 7
      { title: "Emergency Management", value: "9", component: EmergencyManagementTwo, sectionId: "EMERGENCY_MANAGEMENT_FEMORAL" },
      // 8
      { title: "Emergency Management", value: "10", component: EmergencyManagementTwo, sectionId: "EMERGENCY_MANAGEMENT_VERY_FLOPPY" },
      // 9
      { title: "Emergency Management", value: "11", component: ConvulsionsSection, sectionId: "EMERGENCY_MANAGEMENT_CONVULSIONS" },
      // 10
      { title: "Emergency Signs", value: "12", component: DangerSignsSection, sectionId: "DANGER_SIGNS_INSTRUCTIONS" },
      // 11
      { title: "Emergency Triage", value: "13", component: EmergencyManagementTwo, sectionId: "START_MEASURING_VITALS" },
      // 12
      { title: "Vital Signs", value: "14", component: VitalSignsSection, sectionId: "VITAL_SIGNS_PRIMARY" },
      // 13
      { title: "Emergency Management", value: "15", component: EmergencyManagementTwo, sectionId: "EMERGENCY_MANAGEMENT_HEART_RATE_LOW" },
      // 14
      { title: "Emergency Management", value: "16", component: EmergencyManagementTwo, sectionId: "SEVERE_RESPIRATORY_DISTRESS_INITIAL" },
      // 15
      { title: "Emergency Management", value: "17", component: EmergencyManagementTwo, sectionId: "EMERGENCY_MANAGEMENT_HEART_RATE_MEDIUM" },
      // 16
      { title: "Referral Instructions", value: "18", component: ReferralInstructionsSection, sectionId: "REFERRAL_INSTRUCTIONS_INITIAL" },
      // 17
      { title: "Vital Signs", value: "19", component: VitalSectionTwo, sectionId: "VITAL_SIGNS_SECONDARY" },
      // 18
      { title: "Emergency Management", value: "20", component: EmergencyManagementSeven, sectionId: "SEVERE_RESPIRATORY_DISTRESS_CRITICAL_AIRWAY" },
      // 19
      { title: "Severe Respiratory Distress", value: "21", component: BabyRecoveredStillSevereRespiratory, sectionId: "SEVERE_RESPIRATORY_DISTRESS_REFERRAL" },
      // 20
      { title: "Respiratory Distress", value: "22", component: BabyRecoveredStillSevereRespiratory, sectionId: "RESPIRATORY_DISTRESS_RECOVERED_OXYGEN" },
      // 21
      { title: "Vital Signs", value: "23", component: VitalSectionThree, sectionId: "VITAL_SIGNS_TERTIARY" },
      // 22
      { title: "Emergency Management", value: "24", component: EmergencyManagementEight, sectionId: "EMERGENCY_MANAGEMENT_HYPOTHERMIA" },
      // 23
      { title: "Temperature High", value: "25", component: TemperatureHigh, sectionId: "TEMPERATURE_HIGH_INFOGRAPHIC" },
      // 24
      { title: "Blood Sugar", value: "26", component: VitalBloodSugar, sectionId: "EMERGENCY_TRIAGE_BLOOD_SUGAR", hasDialog: true },
      // 25
      { title: "Hypoglycemia Symptomatic", value: "27", component: HypoglycemiaSymptomatic, sectionId: "BLOOD_SUGAR_SYMPTOMATIC" },
      // 26
      { title: "Hypoglycemia Asymptomatic", value: "28", component: HypoglycemiaAsymptomatic, sectionId: "BLOOD_SUGAR_ASYMPTOMATIC" },
      // 27
      { title: "Vital Signs", value: "29", component: VitalSectionFour, sectionId: "VITAL_SIGNS_WEIGHTS" },
      // 28
      { title: "Demographics", value: "30", component: FindRegisterPatient, sectionId: "PATIENT_DEMOGRAPHICS" },
      // 29
      { title: "Triage Summary", value: "31", component: SummarySection, sectionId: "TRIAGE_SUMMARY_SECTION" }
      // 30
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
              const registrationResult = await new RegistrationService().saveRegistrationData(
                {
                  personalInformation: {
                    firstname: triageData.first_name,
                    lastname: triageData.last_name,
                    gender: triageData.gender || "U"
                  }
                },
                false
              );
              const createdId = registrationResult?.patient_id || registrationResult?.patientID || registrationResult?.ID || "";
              if (!createdId) {
                toastWarning("Failed to create temporary patient record");
                return;
              }
              patientId = createdId;
              try {
                await ProgramService.enrollProgram(
                  patientId,
                  ProgramId.NEONATAL_PROGRAM,
                  HisDate.sessionDate()
                );
              } catch (enrollError) {
              }
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
            const data = await ObservationService.addObsToEncounterPatient(observations, EncounterTypeId.NEONATAL_TRIAGE);
            await savePatientRecord(data);
            if (patientId) {
              triageStore.clearPatient(patientId);
            }
            toastSuccess("Emergency triage saved successfully");
            await new Promise((resolve) => setTimeout(resolve, 2e3));
            router.push("/neonatal/checkpoint");
          } catch (error) {
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
      neonatalTriageSections,
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
            sectionsConfig: _ctx.neonatalTriageSections,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalTriage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f56af1d3"]]);

export { NeonatalTriage as default };
