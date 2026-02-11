import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, bu as IonPage, aG as IonContent, aL as useRouter, f0 as provide, x as resolveComponent, O as createBlock, B as withCtx } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, t as toastWarning, G as toastSuccess, x as toastDanger } from '../index-CLlkGLFm.js';
import { E as getSystemicExaminationSectionById, g as neonatalSystemicExaminationFormKey, N as NeonatalStepper, F as useSystemicExaminationStore, p as neonatalSystemicExaminationSections } from './NeonatalStepper-CPgfvgTq.js';
import { N as NeonatalService } from './neonatal_service-CGtryVUD.js';
import { S as SummarySection } from './SummarySection-H3e3I2yS.js';

const _hoisted_1$c = { class: "examination-section-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SystemicExaminationInfo",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("overview");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (_values) => {
      if (!systemicExaminationForm) return;
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
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
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const SystemicExaminationInfo = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-d36307f0"]]);

const _hoisted_1$b = { class: "examination-section-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RespiratoryExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("respiratory_exam");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const RespiratoryExamination = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-0d413d97"]]);

const _hoisted_1$a = { class: "examination-section-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ChestAuscultation",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("chest_auscultation");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ChestAuscultation = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-bc76de22"]]);

const _hoisted_1$9 = { class: "examination-section-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Murmurs",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("heart_perfusion");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const Murmurs = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-77d45913"]]);

const _hoisted_1$8 = { class: "examination-section-wrapper" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "GastroExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("gastro_jaundice");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const GastroExamination = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-a77d6cbb"]]);

const _hoisted_1$7 = { class: "examination-section-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AbdomenSystemicExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("abdomen_exam");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const AbdomenSystemicExamination = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-36f05e9d"]]);

const _hoisted_1$6 = { class: "examination-section-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AbdomenFindings",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("abdomen_findings");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const AbdomenFindings = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-cd517149"]]);

const _hoisted_1$5 = { class: "examination-section-wrapper" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ToneAssessment",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("neurological_tone");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ToneAssessment = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5f2999c3"]]);

const _hoisted_1$4 = { class: "examination-section-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SuckReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("neurological_suck");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const SuckReflex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-87e20151"]]);

const _hoisted_1$3 = { class: "examination-section-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GraspReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("neurological_grasp");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const GraspReflex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0b365294"]]);

const _hoisted_1$2 = { class: "examination-section-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MoroReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("neurological_moro");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const MoroReflex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-eb2340ee"]]);

const _hoisted_1$1 = { class: "examination-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MusculoskeletalExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("musculoskeletal_exam");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const MusculoskeletalExamination = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-eb4d250b"]]);

const _hoisted_1 = { class: "examination-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThompsonScore",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getSystemicExaminationSectionById("thompson_score");
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ThompsonScore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-78e74af5"]]);

const _sfc_main = defineComponent({
  name: "SystemicExamination",
  components: {
    IonContent,
    IonPage,
    Toolbar,
    NeonatalStepper,
    SummarySection,
    SystemicExaminationInfo,
    RespiratoryExamination,
    ChestAuscultation,
    Murmurs,
    GastroExamination,
    AbdomenSystemicExamination,
    AbdomenFindings,
    ToneAssessment,
    SuckReflex,
    GraspReflex,
    MoroReflex,
    MusculoskeletalExamination,
    ThompsonScore
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const stepperTitle = "Systemic Examination";
    const currentOpenStepper = ref("1");
    const isSaving = ref(false);
    const systemicExaminationStore = useSystemicExaminationStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncFormWithPatient = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      systemicExaminationStore.initializeForPatient(patientId);
    };
    syncFormWithPatient();
    watch(
      () => patient.value?.patientID,
      () => syncFormWithPatient()
    );
    const systemicExaminationFormData = systemicExaminationStore.formData;
    provide(neonatalSystemicExaminationFormKey, systemicExaminationFormData);
    watch(
      () => systemicExaminationStore.formData,
      () => systemicExaminationStore.saveSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalSystemicExaminationSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalSystemicExaminationSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: getSystemicExaminationSectionById("overview")?.title,
        value: "1",
        subtitle: getSystemicExaminationSectionById("overview")?.subtitle,
        component: SystemicExaminationInfo,
        sectionId: "overview"
      },
      {
        title: getSystemicExaminationSectionById("respiratory_exam")?.title,
        value: "2",
        subtitle: getSystemicExaminationSectionById("respiratory_exam")?.subtitle,
        component: RespiratoryExamination,
        sectionId: "respiratory_exam"
      },
      {
        title: getSystemicExaminationSectionById("chest_auscultation")?.title,
        value: "3",
        subtitle: getSystemicExaminationSectionById("chest_auscultation")?.subtitle,
        component: ChestAuscultation,
        sectionId: "chest_auscultation"
      },
      {
        title: getSystemicExaminationSectionById("heart_perfusion")?.title,
        value: "4",
        subtitle: getSystemicExaminationSectionById("heart_perfusion")?.subtitle,
        component: Murmurs,
        sectionId: "heart_perfusion"
      },
      {
        title: getSystemicExaminationSectionById("gastro_jaundice")?.title,
        value: "5",
        subtitle: getSystemicExaminationSectionById("gastro_jaundice")?.subtitle,
        component: GastroExamination,
        sectionId: "gastro_jaundice"
      },
      {
        title: getSystemicExaminationSectionById("chest_summary")?.title,
        value: "6",
        subtitle: getSystemicExaminationSectionById("chest_summary")?.subtitle,
        component: SummarySection,
        sectionId: "chest_summary"
      },
      {
        title: getSystemicExaminationSectionById("abdomen_exam")?.title,
        value: "7",
        subtitle: getSystemicExaminationSectionById("abdomen_exam")?.subtitle,
        component: AbdomenSystemicExamination,
        sectionId: "abdomen_exam"
      },
      {
        title: getSystemicExaminationSectionById("abdomen_findings")?.title,
        value: "8",
        subtitle: getSystemicExaminationSectionById("abdomen_findings")?.subtitle,
        component: AbdomenFindings,
        sectionId: "abdomen_findings"
      },
      {
        title: getSystemicExaminationSectionById("abdomen_summary")?.title,
        value: "9",
        subtitle: getSystemicExaminationSectionById("abdomen_summary")?.subtitle,
        component: SummarySection,
        sectionId: "abdomen_summary"
      },
      {
        title: getSystemicExaminationSectionById("neurological_tone")?.title,
        value: "10",
        subtitle: getSystemicExaminationSectionById("neurological_tone")?.subtitle,
        component: ToneAssessment,
        sectionId: "neurological_tone"
      },
      {
        title: getSystemicExaminationSectionById("neurological_suck")?.title,
        value: "11",
        subtitle: getSystemicExaminationSectionById("neurological_suck")?.subtitle,
        component: SuckReflex,
        sectionId: "neurological_suck"
      },
      {
        title: getSystemicExaminationSectionById("neurological_grasp")?.title,
        value: "12",
        subtitle: getSystemicExaminationSectionById("neurological_grasp")?.subtitle,
        component: GraspReflex,
        sectionId: "neurological_grasp"
      },
      {
        title: getSystemicExaminationSectionById("neurological_moro")?.title,
        value: "13",
        subtitle: getSystemicExaminationSectionById("neurological_moro")?.subtitle,
        component: MoroReflex,
        sectionId: "neurological_moro"
      },
      {
        title: getSystemicExaminationSectionById("neurological_summary")?.title,
        value: "14",
        subtitle: getSystemicExaminationSectionById("neurological_summary")?.subtitle,
        component: SummarySection,
        sectionId: "neurological_summary"
      },
      {
        title: getSystemicExaminationSectionById("musculoskeletal_exam")?.title,
        value: "15",
        subtitle: getSystemicExaminationSectionById("musculoskeletal_exam")?.subtitle,
        component: MusculoskeletalExamination,
        sectionId: "musculoskeletal_exam"
      },
      {
        title: getSystemicExaminationSectionById("thompson_score")?.title,
        value: "16",
        subtitle: getSystemicExaminationSectionById("thompson_score")?.subtitle,
        component: ThompsonScore,
        sectionId: "thompson_score"
      },
      {
        title: getSystemicExaminationSectionById("musculoskeletal_summary")?.title,
        value: "17",
        subtitle: getSystemicExaminationSectionById("musculoskeletal_summary")?.subtitle,
        component: SummarySection,
        sectionId: "musculoskeletal_summary"
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
            const hasData = Object.values(systemicExaminationFormData).some((value) => {
              if (Array.isArray(value)) return value.length > 0;
              if (typeof value === "boolean") return value === true;
              return value !== void 0 && value !== null && value !== "";
            });
            if (!hasData) {
              toastWarning("Please complete at least one section of the examination");
              isSaving.value = false;
              return;
            }
            await NeonatalService.saveSystemicExaminationAssessment(patient.value.patientID, systemicExaminationFormData);
            toastSuccess("Systemic examination saved successfully");
            systemicExaminationStore.clearPatient(patient.value.patientID);
            await new Promise((resolve) => setTimeout(resolve, 500));
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("Failed to save systemic examination", error);
            toastDanger("Failed to save systemic examination. Please try again.");
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
      neonatalSystemicExaminationSections,
      isSaving
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "systemic-examination-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/neonatal/home",
            useSkipLogic: true,
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "systemicExamination",
            sectionsConfig: _ctx.neonatalSystemicExaminationSections,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const SystemicExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c82d879a"]]);

export { SystemicExamination as default };
