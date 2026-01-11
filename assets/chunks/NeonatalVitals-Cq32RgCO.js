import { q as defineComponent, r as ref, h as inject, d as computed, aj as onBeforeUnmount, w as watch, x as createElementBlock, y as openBlock, B as createBaseVNode, z as createVNode, C as toDisplayString, E as unref, H as IonContent, bq as IonPage, aF as useRouter, eT as provide, v as resolveComponent, O as createBlock, A as withCtx } from './vendor-Cy_N32Zh.js';
import { s as storeToRefs } from './pinia-Bqc2Rgok.js';
import { C as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, b as EncounterTypeId, t as toastWarning, K as ObservationService, ci as saveEncounterData, G as toastSuccess } from '../index-CZxb0S4T.js';
import { e as neonatalVitalsSections, f as neonatalVitalsFormKey, N as NeonatalStepper } from './NeonatalStepper-De2iEpYL.js';
import { u as useNeonatalVitalsStore } from './useNeonatalVitalsStore-Cmwiqygv.js';

const _hoisted_1$5 = { class: "neonatal-vitals-section" };
const _hoisted_2 = { class: "respiratory-timer-body" };
const _hoisted_3 = { class: "respiratory-timer-time" };
const _hoisted_4 = { class: "respiratory-timer-instruction" };
const INITIAL_SECONDS = 60;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
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

const VitalSignsSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-19d42943"]]);

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
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalVitalsSections.find((section) => section.title === "Blood Sugar");
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
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

const BloodSugarSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-bfd75302"]]);

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
        title: "Weight Measurements",
        value: "2",
        component: WeightMeasurementsSection,
        configIndex: getIndex("Weight Measurements")
      },
      { title: "Blood Sugar", value: "3", component: BloodSugarSection, configIndex: getIndex("Blood Sugar") },
      {
        title: "Hypoglycemia-Symptomatic",
        value: "4",
        component: HypoglycemiaSymptomaticSection,
        configIndex: getIndex("Hypoglycemia-Symptomatic")
      },
      {
        title: "Hypoglycemia-Asymptomatic",
        value: "5",
        component: HypoglycemiaAsymptomaticSection,
        configIndex: getIndex("Hypoglycemia-Asymptomatic")
      },
      { title: "Vitals Summary", value: "6", component: VitalsSummarySection, configIndex: getIndex("Vitals Summary") }
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
        route: "/neonatal/SystemicExamination",
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
              observations.push(
                await ObservationService.buildValueNumber(
                  "Respiratory rate",
                  Number(vitalsFormData.respiratory_rate)
                )
              );
            }
            if (vitalsFormData.heart_rate) {
              observations.push(
                await ObservationService.buildValueNumber("Pulse", Number(vitalsFormData.heart_rate))
              );
            }
            if (vitalsFormData.oxygen_saturation) {
              observations.push(
                await ObservationService.buildValueNumber(
                  "Oxygen saturation",
                  Number(vitalsFormData.oxygen_saturation)
                )
              );
            }
            if (vitalsFormData.temperature) {
              observations.push(
                await ObservationService.buildValueNumber(
                  "Temperature (C)",
                  Number(vitalsFormData.temperature)
                )
              );
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
                await ObservationService.buildValueNumber(
                  "Head circumference",
                  Number(vitalsFormData.head_circumference)
                )
              );
            }
            if (vitalsFormData.blood_sugar) {
              let bloodSugarValue = Number(vitalsFormData.blood_sugar);
              const unit = vitalsFormData.blood_sugar_unit || "mg/dL";
              if (unit === "mmol/L") {
                bloodSugarValue = bloodSugarValue * 18.018;
              }
              observations.push(
                await ObservationService.buildValueNumber(
                  "Blood sugar",
                  bloodSugarValue
                )
              );
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
            backUrl: "/patientProfile",
            flowType: "vitals",
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
const NeonatalVitals = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b43aa617"]]);

export { NeonatalVitals as default };
