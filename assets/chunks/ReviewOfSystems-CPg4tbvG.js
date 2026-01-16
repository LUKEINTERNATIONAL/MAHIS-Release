import { q as defineComponent, r as ref, h as inject, w as watch, x as createElementBlock, y as openBlock, z as createVNode, E as unref, d as computed, N as createBlock, G as createCommentVNode, bs as IonPage, aD as IonContent, aI as useRouter, eT as provide, v as resolveComponent, B as withCtx } from './vendor-Dvd0YFIr.js';
import { s as storeToRefs } from './pinia-CBckhk5W.js';
import { C as StandardForm, _ as _export_sfc, co as Alert, cp as SummaryField, T as Toolbar, u as useDemographicsStore, t as toastWarning, G as toastSuccess, x as toastDanger } from '../index-BQO1lu0i.js';
import { x as neonatalReviewOfSystemsSections, y as neonatalReviewOfSystemsFormKey, N as NeonatalStepper, z as useReviewOfSystemsStore } from './NeonatalStepper-BCxg80QL.js';
import { N as NeonatalService } from './neonatal_service-C2Kohte0.js';

const _hoisted_1$7 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "FeedingHistorySection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalReviewOfSystemsSections[0];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    const syncFormValues = (values) => {
      if (!rosForm) return;
      rosForm.type_of_feed = values.type_of_feed || "";
      rosForm.mode_of_feeding = values.mode_of_feeding || "";
      rosForm.frequency_of_feeding = values.frequency_of_feeding || "";
      rosForm.duration_of_feeding = values.duration_of_feeding || "";
      rosForm.effort_during_feeding = values.effort_during_feeding || "";
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
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const FeedingHistorySection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a25a2bb1"]]);

const _hoisted_1$6 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BowelMovementsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalReviewOfSystemsSections[1];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    const syncFormValues = (values) => {
      if (!rosForm) return;
      rosForm.is_baby_vomiting = values.is_baby_vomiting || "";
      rosForm.frequency_of_vomiting = values.frequency_of_vomiting || "";
      rosForm.passage_of_meconium = values.passage_of_meconium || "";
      rosForm.frequency_of_stooling = values.frequency_of_stooling || "";
      rosForm.color_of_stools = values.color_of_stools || "";
      rosForm.consistency_of_stools = values.consistency_of_stools || "";
      rosForm.blood_in_stools = values.blood_in_stools || "";
      rosForm.mucus_in_stools = values.mucus_in_stools || "";
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
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const BowelMovementsSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-f45bb653"]]);

const _hoisted_1$5 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "UrineOutputSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalReviewOfSystemsSections[2];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    const syncFormValues = (values) => {
      if (!rosForm) return;
      rosForm.is_baby_passing_urine = values.is_baby_passing_urine || "";
      rosForm.number_of_wet_nappies = values.number_of_wet_nappies || "";
      rosForm.color_of_urine = values.color_of_urine || "";
      rosForm.volume_ml = values.volume_ml || "";
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
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const UrineOutputSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-26cddab2"]]);

const _hoisted_1$4 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GrowthSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalReviewOfSystemsSections[3];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    const syncFormValues = (values) => {
      if (!rosForm) return;
      rosForm.weight_trend_since_birth = values.weight_trend_since_birth || "";
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
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const GrowthSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-206bac1f"]]);

const _hoisted_1$3 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MouthOropharynxSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalReviewOfSystemsSections[4];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    const syncFormValues = (values) => {
      if (!rosForm) return;
      rosForm.does_baby_have_oral_thrush = values.does_baby_have_oral_thrush || "";
      rosForm.does_baby_have_oral_sores = values.does_baby_have_oral_sores || "";
      rosForm.does_baby_have_tongue_tie = values.does_baby_have_tongue_tie || "";
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
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const MouthOropharynxSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fc5c83d3"]]);

const _hoisted_1$2 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AbdomenSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalReviewOfSystemsSections[5];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    const syncFormValues = (values) => {
      if (!rosForm) return;
      rosForm.abdominal_distension = values.abdominal_distension || "";
      rosForm.abdominal_pain = values.abdominal_pain || "";
      rosForm.umbilical_condition = values.umbilical_condition || "";
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
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const AbdomenSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f83dc14b"]]);

const _hoisted_1$1 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MusculoskeletalSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalReviewOfSystemsSections[6];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    const syncFormValues = (values) => {
      if (!rosForm) return;
      rosForm.skin_rash = values.skin_rash || "";
      rosForm.talipes = values.talipes || "";
      rosForm.extra_digits = values.extra_digits || "";
      rosForm.spinal_bifida = values.spinal_bifida || "";
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
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const MusculoskeletalSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fcac21c8"]]);

const _hoisted_1 = { class: "review-of-systems-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SummarySection",
  setup(__props, { expose: __expose }) {
    const sectionConfig = neonatalReviewOfSystemsSections[7];
    const alertConfig = computed(() => sectionConfig.formData.find((field) => field.componentType === "Alert"));
    const summaryFieldConfig = computed(
      () => sectionConfig.formData.find((field) => field.componentType === "summaryField")
    );
    const rosForm = inject(neonatalReviewOfSystemsFormKey);
    __expose({
      getFormRef: () => null,
      validateForm: () => null,
      getFormValues: () => ({ ...rosForm || {} })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        alertConfig.value ? (openBlock(), createBlock(Alert, {
          key: 0,
          config: alertConfig.value,
          allFormValues: unref(rosForm) || {}
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true),
        summaryFieldConfig.value ? (openBlock(), createBlock(SummaryField, {
          key: 1,
          config: summaryFieldConfig.value,
          allFormValues: unref(rosForm) || {}
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true)
      ]);
    };
  }
});

const SummarySection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-786f47e0"]]);

const _sfc_main = defineComponent({
  name: "ReviewOfSystems",
  components: {
    IonContent,
    IonPage,
    Toolbar,
    NeonatalStepper,
    FeedingHistorySection,
    BowelMovementsSection,
    UrineOutputSection,
    GrowthSection,
    MouthOropharynxSection,
    AbdomenSection,
    MusculoskeletalSection,
    SummarySection
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const stepperTitle = "Review Of Systems";
    const currentOpenStepper = ref("1");
    const isSaving = ref(false);
    const reviewOfSystemsStore = useReviewOfSystemsStore();
    const normalizePatientId = (rawId) => {
      const patientId = Number(rawId);
      return Number.isFinite(patientId) ? patientId : null;
    };
    const syncFormWithPatient = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      reviewOfSystemsStore.initializeForPatient(patientId);
    };
    syncFormWithPatient();
    watch(
      () => patient.value?.patientID,
      () => syncFormWithPatient()
    );
    const reviewOfSystemsFormData = reviewOfSystemsStore.formData;
    provide(neonatalReviewOfSystemsFormKey, reviewOfSystemsFormData);
    watch(
      () => reviewOfSystemsStore.formData,
      () => reviewOfSystemsStore.saveSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalReviewOfSystemsSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalReviewOfSystemsSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalReviewOfSystemsSections[0].title,
        subtitle: neonatalReviewOfSystemsSections[0].subtitle,
        value: "1",
        component: FeedingHistorySection,
        configIndex: 0
      },
      {
        title: neonatalReviewOfSystemsSections[1].title,
        subtitle: neonatalReviewOfSystemsSections[1].subtitle,
        value: "2",
        component: BowelMovementsSection,
        configIndex: 1
      },
      {
        title: neonatalReviewOfSystemsSections[2].title,
        subtitle: neonatalReviewOfSystemsSections[2].subtitle,
        value: "3",
        component: UrineOutputSection,
        configIndex: 2
      },
      {
        title: neonatalReviewOfSystemsSections[3].title,
        subtitle: neonatalReviewOfSystemsSections[3].subtitle,
        value: "4",
        component: GrowthSection,
        configIndex: 3
      },
      {
        title: neonatalReviewOfSystemsSections[4].title,
        subtitle: neonatalReviewOfSystemsSections[4].subtitle,
        value: "5",
        component: MouthOropharynxSection,
        configIndex: 4
      },
      {
        title: neonatalReviewOfSystemsSections[5].title,
        subtitle: neonatalReviewOfSystemsSections[5].subtitle,
        value: "6",
        component: AbdomenSection,
        configIndex: 5
      },
      {
        title: neonatalReviewOfSystemsSections[6].title,
        subtitle: neonatalReviewOfSystemsSections[6].subtitle,
        value: "7",
        component: MusculoskeletalSection,
        configIndex: 6
      },
      {
        title: neonatalReviewOfSystemsSections[7].title,
        subtitle: neonatalReviewOfSystemsSections[7].subtitle,
        value: "8",
        component: SummarySection,
        configIndex: 7
      }
    ];
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
      if (currentIndex === stepperData.length - 1) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          if (isSaving.value) {
            return;
          }
          try {
            isSaving.value = true;
            const hasData = Object.values(reviewOfSystemsFormData).some((value) => {
              if (Array.isArray(value)) return value.length > 0;
              if (typeof value === "boolean") return value === true;
              return value !== void 0 && value !== null && value !== "";
            });
            if (!hasData) {
              toastWarning("Please complete at least one section of the review");
              isSaving.value = false;
              return;
            }
            await NeonatalService.saveReviewOfSystemsAssessment(
              patient.value.patientID,
              reviewOfSystemsFormData
            );
            toastSuccess("Review of systems saved successfully");
            await new Promise((resolve) => setTimeout(resolve, 500));
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("Failed to save review of systems", error);
            toastDanger("Failed to save review of systems. Please try again.");
            isSaving.value = false;
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
      neonatalReviewOfSystemsSections,
      isSaving
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "review-of-systems-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/NeonatalHome",
            getSaveFunction: _ctx.getSaveFunction,
            sectionsConfig: _ctx.neonatalReviewOfSystemsSections,
            flowType: "reviewOfSystems",
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const ReviewOfSystems = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f28f858"]]);

export { ReviewOfSystems as default };
