import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, a3 as onMounted, x as resolveComponent, O as createBlock, B as withCtx, D as toDisplayString, H as createCommentVNode, C as createBaseVNode, cl as onBeforeUnmount, c as computed, L as IonIcon, N as IonButton, aH as IonContent, bw as IonPage, aM as useRouter, bN as useRoute, fk as onIonViewWillEnter, b_ as chevronBackOutline, r as reactive, f1 as provide } from './vendor-OAxQVBFs.js';
import { s as storeToRefs } from './pinia-mn-Ihgn9.js';
import { z as StandardForm, _ as _export_sfc, u as useDemographicsStore, K as ObservationService, T as Toolbar, cn as PatientRegistrationService, t as toastWarning, H as HisDate, ci as saveEncounterData, b as EncounterTypeId, G as toastSuccess, k as alertConfirmation } from '../index-iSqP0Oua.js';
import { D as DemographicBar } from './DemographicBar-DneNoR0h.js';
import { c as neonatalTriageFormKey, N as NeonatalStepper, B as defaultNeonatalTriageForm } from './NeonatalStepper-Bxo1KIIS.js';
import { b as getSectionById, u as useNeonatalTriageStore, c as getSectionIndexById, n as neonatalTriageSections, t as triageConceptMapping } from './triage-BCL_n6yT.js';
import { S as SummarySection } from './SummarySection--vN9C8g-.js';
import { T as TriageConfirmDialog } from './TriageConfirmDialog-_0hhtysI.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-C-uqTzWs.js';

const _hoisted_1$u = { class: "triage-section-wrapper" };
const _sfc_main$v = /* @__PURE__ */ defineComponent({
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

const EmergencyTriageSection = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-25876e39"]]);

const _hoisted_1$t = { class: "triage-section-wrapper" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
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

const BreathingAssessmentSection = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-abb1b158"]]);

const _hoisted_1$s = { class: "triage-section-wrapper" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
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

const EmergencyManagementSection = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-18e51ce5"]]);

const _hoisted_1$r = { class: "triage-section-wrapper" };
const _sfc_main$s = /* @__PURE__ */ defineComponent({
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

const OxygenSaturationSection = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-1954c8d6"]]);

const _hoisted_1$q = { class: "triage-section-wrapper" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
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

const CentralCyanosisSection = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-c88c68e6"]]);

const _hoisted_1$p = { class: "triage-section-wrapper" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
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

const ConvulsionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-5cb87016"]]);

const _hoisted_1$o = { class: "triage-section-wrapper" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
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

const VitalSectionTwo = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-21899b42"]]);

const _hoisted_1$n = { class: "triage-section-wrapper" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
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

const VitalSectionThree = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-09f6eb95"]]);

const _hoisted_1$m = {
  key: 0,
  class: "weight-loss"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
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

const VitalSectionFour = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-d229aa39"]]);

const _hoisted_1$l = { class: "triage-section-wrapper" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
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

const TemperatureHigh = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-1acb9c5a"]]);

const _hoisted_1$k = { class: "triage-section-wrapper" };
const _hoisted_2$1 = {
  key: 0,
  style: { "background-color": "#fedf89", "padding": "10px" }
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
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

const VitalBloodSugar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-f6d81e66"]]);

const _hoisted_1$j = { class: "triage-section-wrapper" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
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

const EmergencyTriage = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-7632fe78"]]);

const _hoisted_1$i = { class: "triage-section-wrapper" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
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

const HypoglycemiaSymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-9b40a890"]]);

const _hoisted_1$h = { class: "triage-section-wrapper" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
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

const HypoglycemiaAsymptomatic = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-4b446079"]]);

const _hoisted_1$g = { class: "triage-section-wrapper" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
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

const EmergencyManagementTwo = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-a8bb06cb"]]);

const _hoisted_1$f = { class: "triage-section-wrapper" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "EmergencyManagementSix",
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

const EmergencyManagementSix = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-9021611e"]]);

const _hoisted_1$e = { class: "triage-section-wrapper" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
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

const EmergencyManagementSeven = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-4bf2c2de"]]);

const _hoisted_1$d = { class: "triage-section-wrapper" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
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

const EmergencyManagementEight = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-c258a84b"]]);

const _hoisted_1$c = { class: "triage-section-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
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

const BabyRecoveredStillSevereRespiratory = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-9b489b98"]]);

const _hoisted_1$b = { class: "triage-section-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ConvulsionsVitalsSection",
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

const ConvulsionsVitalsSection = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-43454467"]]);

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
      { title: "Emergency Management", value: "7", component: ConvulsionsSection, sectionId: "EMERGENCY_MANAGEMENT_CONVULSIONS" },
      // 6
      { title: "Emergency Signs", value: "8", component: DangerSignsSection, sectionId: "GRUNTING_INDRAWING_MANAGEMENT_CARD" },
      // 7
      { title: "Emergency Signs", value: "9", component: SelectPresentSignsSection, sectionId: "CENTRAL_CYANOSIS_MANAGEMENT_CARD" },
      // 8
      { title: "Emergency Signs", value: "10", component: DangerSignsSection, sectionId: "CONVULSIONS_MANAGEMENT_CARD" },
      // 9
      { title: "Emergency Signs", value: "11", component: DangerSignsSection, sectionId: "DANGER_SIGNS_INSTRUCTIONS" },
      // 10
      { title: "Emergency Management", value: "12", component: TrunkFeelsColdSection, sectionId: "EMERGENCY_MANAGEMENT_TRUNK_COLD" },
      // 11
      { title: "Emergency Management", value: "13", component: KeepWarmSection, sectionId: "EMERGENCY_MANAGEMENT_SHOCK" },
      // 12
      { title: "Vital Signs", value: "14", component: VitalSignsSection, sectionId: "VITAL_SIGNS_PRIMARY" },
      // 13
      { title: "Emergency Management", value: "15", component: EmergencyManagementSix, sectionId: "EMERGENCY_MANAGEMENT_HEART_RATE_LOW" },
      // 14
      { title: "Referral Instructions", value: "16", component: ReferralInstructionsSection, sectionId: "REFERRAL_INSTRUCTIONS_INITIAL" },
      // 15
      { title: "Emergency Management", value: "17", component: ConvulsionsVitalsSection, sectionId: "SEVERE_RESPIRATORY_DISTRESS_INITIAL" },
      // 16
      { title: "Vital Signs", value: "18", component: VitalSectionTwo, sectionId: "VITAL_SIGNS_SECONDARY" },
      // 17
      { title: "Emergency Management", value: "19", component: EmergencyManagementSeven, sectionId: "SEVERE_RESPIRATORY_DISTRESS_CRITICAL_AIRWAY" },
      // 18
      { title: "Severe Respiratory Distress", value: "20", component: BabyRecoveredStillSevereRespiratory, sectionId: "SEVERE_RESPIRATORY_DISTRESS_REFERRAL" },
      // 19
      { title: "Respiratory Distress", value: "21", component: BabyRecoveredStillSevereRespiratory, sectionId: "RESPIRATORY_DISTRESS_RECOVERED_OXYGEN" },
      // 20
      { title: "Vital Signs", value: "22", component: VitalSectionThree, sectionId: "VITAL_SIGNS_TERTIARY" },
      // 21
      { title: "Emergency Management", value: "23", component: EmergencyManagementEight, sectionId: "EMERGENCY_MANAGEMENT_HYPOTHERMIA" },
      // 22
      { title: "Temperature High", value: "24", component: TemperatureHigh, sectionId: "TEMPERATURE_HIGH_INFOGRAPHIC" },
      // 23
      { title: "Blood Sugar", value: "25", component: VitalBloodSugar, sectionId: "EMERGENCY_TRIAGE_BLOOD_SUGAR", hasDialog: true },
      // 24
      { title: "Hypoglycemia Symptomatic", value: "26", component: HypoglycemiaSymptomatic, sectionId: "BLOOD_SUGAR_SYMPTOMATIC" },
      // 25
      { title: "Hypoglycemia Asymptomatic", value: "27", component: HypoglycemiaAsymptomatic, sectionId: "BLOOD_SUGAR_ASYMPTOMATIC" },
      // 26
      { title: "Vital Signs", value: "28", component: VitalSectionFour, sectionId: "VITAL_SIGNS_WEIGHTS" },
      // 27
      { title: "Demographics", value: "29", component: FindRegisterPatient, sectionId: "PATIENT_DEMOGRAPHICS" },
      // 28
      { title: "Triage Summary", value: "30", component: SummarySection, sectionId: "TRIAGE_SUMMARY_SECTION" }
      // 29
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
              const birthdateStr = yesterday.toISOString().split("T")[0];
              const tempNeonate = {
                given_name: triageData.first_name,
                family_name: triageData.last_name,
                gender: triageData.gender || "U",
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
            await new Promise((resolve) => setTimeout(resolve, 2e3));
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
const NeonatalTriage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cda42658"]]);

export { NeonatalTriage as default };
