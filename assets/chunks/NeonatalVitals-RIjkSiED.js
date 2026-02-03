import { s as defineComponent, h as inject, cj as onBeforeUnmount, w as watch, y as openBlock, z as createElementBlock, C as createBaseVNode, D as toDisplayString, A as createVNode, F as unref, f as ref, c as computed, aG as IonContent, bu as IonPage, aL as useRouter, eT as provide, x as resolveComponent, O as createBlock, B as withCtx } from './vendor-D523m2MA.js';
import { s as storeToRefs } from './pinia-BZkYQmJa.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, b as EncounterTypeId, t as toastWarning, K as ObservationService, ch as saveEncounterData, G as toastSuccess } from '../index-CZ_DHssM.js';
import { e as neonatalVitalsSections, f as neonatalVitalsFormKey, g as useNeonatalTriageStore, N as NeonatalStepper, h as useNeonatalVitalsStore } from './NeonatalStepper-oaO0g1gt.js';
import { T as TriageConfirmDialog } from './TriageConfirmDialog-DNfjmIkM.js';

const _hoisted_1$9 = { class: "neonatal-vitals-section" };
const _hoisted_2 = { class: "respiratory-timer-body" };
const _hoisted_3 = { class: "respiratory-timer-time" };
const _hoisted_4 = { class: "respiratory-timer-instruction" };
const INITIAL_SECONDS = 60;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VitalSignsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Vital Signs");
    if (!sectionConfig) {
      throw new Error("[VitalSignsSection] Missing configuration for Vital Signs section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
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
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      vitalsForm.respiratory_rate = values.respiratory_rate || "";
      vitalsForm.heart_rate = values.heart_rate || "";
      vitalsForm.can_measure_oxygen_saturation = values.can_measure_oxygen_saturation ?? null;
      vitalsForm.oxygen_saturation = values.oxygen_saturation || "";
      vitalsForm.can_measure_temperature = values.can_measure_temperature ?? null;
      vitalsForm.temperature = values.temperature || "";
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
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", {
          class: "respiratory-timer-card",
          onClick: handleTimerTap
        }, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, toDisplayString(formattedTime.value), 1),
            createBaseVNode("div", _hoisted_4, toDisplayString(timerMessage.value), 1)
          ])
        ]),
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const VitalSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-19d42943"]]);

const _hoisted_1$8 = { class: "neonatal-vitals-section" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "EmergencyLowHRSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Emergency Management - Low Heart Rate");
    if (!sectionConfig) {
      throw new Error("[EmergencyLowHRSection] Missing configuration for Emergency Management - Low Heart Rate section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      Object.assign(vitalsForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const EmergencyLowHRSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ce3033a8"]]);

const _hoisted_1$7 = { class: "neonatal-vitals-section" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HypothermiaSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Emergency Management - Hypothermia");
    if (!sectionConfig) {
      throw new Error("[HypothermiaSection] Missing configuration for Emergency Management - Hypothermia section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      Object.assign(vitalsForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const HypothermiaSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-83366c48"]]);

const _hoisted_1$6 = { class: "neonatal-vitals-section" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HyperthermiaSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Emergency Management - High Temperature");
    if (!sectionConfig) {
      throw new Error("[HyperthermiaSection] Missing configuration for Emergency Management - High Temperature section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      Object.assign(vitalsForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const HyperthermiaSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-f0dc0ec0"]]);

const _hoisted_1$5 = { class: "neonatal-vitals-section" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RespiratoryDistressSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Emergency Management - Respiratory Distress");
    if (!sectionConfig) {
      throw new Error("[RespiratoryDistressSection] Missing configuration for Emergency Management - Respiratory Distress section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      Object.assign(vitalsForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const RespiratoryDistressSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bc2339d8"]]);

const _hoisted_1$4 = { class: "neonatal-vitals-section" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WeightMeasurementsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Weight Measurements");
    if (!sectionConfig) {
      throw new Error("[WeightMeasurementsSection] Missing configuration for Weight Measurements section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        return {
          ...field,
          initialValue: fieldValue ?? field.initialValue ?? field.value ?? ""
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      vitalsForm.current_weight = values.current_weight || "";
      vitalsForm.head_circumference = values.head_circumference || "";
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const WeightMeasurementsSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7a8515ce"]]);

const _hoisted_1$3 = { class: "neonatal-vitals-section" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BloodSugarSection",
  props: {
    stepIndex: {},
    configIndex: {},
    goToNext: { type: Function },
    goToPrevious: { type: Function },
    goToStep: { type: Function }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const triageStore = useNeonatalTriageStore();
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Blood Sugar");
    const showDialog = ref(false);
    if (!sectionConfig) {
      throw new Error("[BloodSugarSection] Missing configuration for Blood Sugar section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        if (field.name === "blood_sugar") {
          return {
            ...field,
            initialValue: fieldValue ?? field.initialValue ?? field.value ?? "",
            initialUnit: vitalsForm.blood_sugar_unit || field.initialUnit || "mg/dL"
          };
        }
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      vitalsForm.can_measure_blood_sugar = values.can_measure_blood_sugar ?? null;
      vitalsForm.blood_sugar = values.blood_sugar || "";
      vitalsForm.blood_sugar_unit = values.blood_sugar_unit || vitalsForm.blood_sugar_unit || "mg/dL";
    };
    function handleClose() {
      showDialog.value = false;
    }
    function handleNo() {
      triageStore.setField("lowSugar", "Hypoglycemia-Asymptomatic");
      if (props.goToStep) {
        const targetConfigIndex = neonatalVitalsSections.findIndex((section) => section.title === "Hypoglycemia-Asymptomatic");
        props.goToStep(targetConfigIndex);
      }
      showDialog.value = false;
    }
    function openDialog() {
      const values = formRef.value?.formValues;
      const units = values?.blood_sugar_unit;
      const glucose = Number(values?.blood_sugar);
      if (units === "mg/dL" && glucose < 45 || units === "mmol/L" && glucose < 2.5) {
        showDialog.value = true;
        return;
      }
      props.goToNext && props.goToNext();
    }
    function handleYes() {
      triageStore.setField("lowSugar", "Hypoglycemia-Symptomatic");
      if (props.goToStep) {
        const targetConfigIndex = neonatalVitalsSections.findIndex((section) => section.title === "Hypoglycemia-Symptomatic");
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
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(StandardForm, {
          formData: formData.value,
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

const BloodSugarSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-738835fb"]]);

const _hoisted_1$2 = { class: "neonatal-vitals-section" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaSymptomaticSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Hypoglycemia-Symptomatic");
    if (!sectionConfig) {
      throw new Error("[HypoglycemiaSymptomaticSection] Missing configuration for Hypoglycemia-Symptomatic section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      Object.assign(vitalsForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const HypoglycemiaSymptomaticSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-34b36eb5"]]);

const _hoisted_1$1 = { class: "neonatal-vitals-section" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HypoglycemiaAsymptomaticSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Hypoglycemia-Asymptomatic");
    if (!sectionConfig) {
      throw new Error("[HypoglycemiaAsymptomaticSection] Missing configuration for Hypoglycemia-Asymptomatic section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (!field.name || !vitalsForm) {
          return { ...field };
        }
        const fieldValue = vitalsForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = sectionConfig.conditionalRules || [];
    const syncFormValues = (values) => {
      if (!vitalsForm) return;
      Object.assign(vitalsForm, values);
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
        createVNode(StandardForm, {
          formData: formData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const HypoglycemiaAsymptomaticSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a5dcc574"]]);

const _hoisted_1 = { class: "neonatal-vitals-section" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VitalsSummarySection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Vitals Summary");
    if (!sectionConfig) {
      throw new Error("[VitalsSummarySection] Missing configuration for Vitals Summary section");
    }
    const vitalsForm = inject(neonatalVitalsFormKey);
    const formData = computed(() => {
      return sectionConfig.formData.map((field) => {
        if (field.componentType !== "summaryField" || !vitalsForm) {
          return { ...field };
        }
        const originalBuilder = field.builder;
        return {
          ...field,
          builder: (formValues) => {
            if (typeof originalBuilder !== "function") {
              return [];
            }
            const currentValues = {
              ...vitalsForm || {},
              ...formValues
            };
            return originalBuilder(currentValues);
          }
        };
      });
    });
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => null,
      getFormValues: () => ({ ...vitalsForm || {} })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: formData.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const VitalsSummarySection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fbe7c51f"]]);

const _sfc_main = defineComponent({
  name: "NeonatalVitals",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    NeonatalStepper
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const vitalsStore = useNeonatalVitalsStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncFormWithPatient = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      vitalsStore.initializeForPatient(patientId);
    };
    syncFormWithPatient();
    watch(
      () => patient.value?.patientID,
      () => syncFormWithPatient()
    );
    const vitalsFormData = vitalsStore.formData;
    provide(neonatalVitalsFormKey, vitalsFormData);
    watch(
      () => vitalsStore.formData,
      () => vitalsStore.saveSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalVitalsSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalVitalsSections.length - 1 ? "last_step" : ""
      }))
    );
    const getIndex = (title) => {
      return neonatalVitalsSections.findIndex((section) => section.title === title);
    };
    const stepperData = [
      { title: "Vital Signs", value: "1", component: VitalSignsSection, configIndex: getIndex("Vital Signs") },
      {
        title: "Emergency Management - Low Heart Rate",
        value: "2",
        component: EmergencyLowHRSection,
        configIndex: getIndex("Emergency Management - Low Heart Rate")
      },
      {
        title: "Emergency Management - Hypothermia",
        value: "3",
        component: HypothermiaSection,
        configIndex: getIndex("Emergency Management - Hypothermia")
      },
      {
        title: "Emergency Management - High Temperature",
        value: "4",
        component: HyperthermiaSection,
        configIndex: getIndex("Emergency Management - High Temperature")
      },
      {
        title: "Emergency Management - Respiratory Distress",
        value: "5",
        component: RespiratoryDistressSection,
        configIndex: getIndex("Emergency Management - Respiratory Distress")
      },
      {
        title: "Weight Measurements",
        value: "6",
        component: WeightMeasurementsSection,
        configIndex: getIndex("Weight Measurements")
      },
      { title: "Blood Sugar", value: "7", component: BloodSugarSection, configIndex: getIndex("Blood Sugar"), hasDialog: true },
      {
        title: "Hypoglycemia-Symptomatic",
        value: "8",
        component: HypoglycemiaSymptomaticSection,
        configIndex: getIndex("Hypoglycemia-Symptomatic")
      },
      {
        title: "Hypoglycemia-Asymptomatic",
        value: "9",
        component: HypoglycemiaAsymptomaticSection,
        configIndex: getIndex("Hypoglycemia-Asymptomatic")
      },
      { title: "Vitals Summary", value: "10", component: VitalsSummarySection, configIndex: getIndex("Vitals Summary") }
    ];
    const stepperTitle = "Neonatal Vital Signs";
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
    const ADMISSION_WORKFLOW_STEPS = [
      {
        encounterType: EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS,
        route: "/neonatal/signs-symptoms",
        encounterNames: ["NEONATAL SIGNS & SYMPTOMS"]
      },
      {
        encounterType: EncounterTypeId.NEONATAL_REVIEW_OF_SYSTEMS,
        route: "/neonatal/review-of-systems",
        encounterNames: ["NEONATAL REVIEW OF SYSTEMS"]
      },
      {
        encounterType: EncounterTypeId.PHYSICAL_EXAMINATION_BABY,
        route: "/neonatal/general-examination",
        encounterNames: ["PHYSICAL EXAMINATION BABY", "NEONATAL GENERAL EXAMINATION"]
      },
      {
        encounterType: EncounterTypeId.VITALS,
        route: "/neonatal/vitals",
        encounterNames: ["VITALS", "NEONATAL VITALS"]
      },
      {
        encounterType: EncounterTypeId.NEONATAL_SYSTEMIC_EXAMINATION,
        route: "/neonatal/systemic-examination",
        encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"]
      }
    ];
    ADMISSION_WORKFLOW_STEPS[ADMISSION_WORKFLOW_STEPS.length - 1].route;
    const getSaveFunction = (currentIndex) => {
      if (currentIndex === stepperData.length - 1) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          try {
            const observations = [];
            if (vitalsFormData.respiratory_rate) {
              observations.push(await ObservationService.buildValueNumber("Respiratory rate", Number(vitalsFormData.respiratory_rate)));
            }
            if (vitalsFormData.heart_rate) {
              observations.push(await ObservationService.buildValueNumber("Pulse", Number(vitalsFormData.heart_rate)));
            }
            if (vitalsFormData.oxygen_saturation) {
              observations.push(
                await ObservationService.buildValueNumber("Oxygen saturation", Number(vitalsFormData.oxygen_saturation))
              );
            }
            if (vitalsFormData.temperature) {
              observations.push(await ObservationService.buildValueNumber("Temperature (C)", Number(vitalsFormData.temperature)));
            }
            if (vitalsFormData.current_weight) {
              observations.push(
                await ObservationService.buildValueNumber(
                  "Weight (kg)",
                  Number(vitalsFormData.current_weight) / 1e3
                  // Convert grams to kg
                )
              );
            }
            if (vitalsFormData.head_circumference) {
              observations.push(
                await ObservationService.buildValueNumber("Head circumference", Number(vitalsFormData.head_circumference))
              );
            }
            if (vitalsFormData.blood_sugar) {
              let bloodSugarValue = Number(vitalsFormData.blood_sugar);
              const unit = vitalsFormData.blood_sugar_unit || "mg/dL";
              if (unit === "mmol/L") {
                bloodSugarValue = bloodSugarValue * 18.018;
              }
              observations.push(await ObservationService.buildValueNumber("Blood sugar", bloodSugarValue));
            }
            await saveEncounterData(patient.value.patientID, EncounterTypeId.VITALS, observations);
            toastSuccess("Vital signs recorded successfully");
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("Failed to save vital signs", error);
            toastWarning("Failed to save vital signs");
          }
        };
      }
      return null;
    };
    return {
      wizardData,
      stepperData,
      stepperTitle,
      currentOpenStepper,
      updateStatus,
      getSaveFunction,
      neonatalVitalsSections
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-vitals-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/patient-profile",
            flowType: "vitals",
            useSkipLogic: true,
            getSaveFunction: _ctx.getSaveFunction,
            sectionsConfig: _ctx.neonatalVitalsSections,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalVitals = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3332da7f"]]);

export { NeonatalVitals as default };
