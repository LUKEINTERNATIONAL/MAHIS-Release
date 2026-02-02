import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, c as computed, bu as IonPage, aG as IonContent, aL as useRouter, eT as provide, x as resolveComponent, O as createBlock, B as withCtx } from './vendor-DoVhRvhx.js';
import { s as storeToRefs } from './pinia-CTgeSI8R.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, t as toastWarning, G as toastSuccess, x as toastDanger } from '../index-BVAFc2zM.js';
import { s as neonatalSystemicExaminationSections, v as neonatalSystemicExaminationFormKey, N as NeonatalStepper, w as useSystemicExaminationStore } from './NeonatalStepper-BxTg-GXh.js';
import { N as NeonatalService } from './neonatal_service-smMTnqE9.js';

const _hoisted_1$g = { class: "examination-section-wrapper" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SystemicExaminationInfo",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[0];
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
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const SystemicExaminationInfo = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-8ca4ccc8"]]);

const _hoisted_1$f = { class: "examination-section-wrapper" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "RespiratoryExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[1];
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
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const RespiratoryExamination = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-3118fd4c"]]);

const _hoisted_1$e = { class: "examination-section-wrapper" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ChestAuscultation",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[2];
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
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ChestAuscultation = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-67871e3e"]]);

const _hoisted_1$d = { class: "examination-section-wrapper" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Murmurs",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[3];
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
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const Murmurs = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-7b35e248"]]);

const _hoisted_1$c = { class: "examination-section-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ChestSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[4];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const summaryFormValues = computed(() => systemicExaminationForm ?? {});
    const summaryFieldNames = [
      "respiratoryDistress",
      "respiratoryDistressSymptoms",
      "stethoscopeAvailable",
      "lungSounds",
      "heartSounds",
      "color",
      "capillaryRefillTime",
      "femoralPulses",
      "jaundiceSeverity"
    ];
    const syncSummarySectionValues = () => {
      if (!formRef.value) return;
      const values = summaryFormValues.value;
      if (!values) return;
      summaryFieldNames.forEach((field) => {
        formRef.value?.setFormValue(field, values[field]);
      });
    };
    watch(
      summaryFormValues,
      () => {
        syncSummarySectionValues();
      },
      { deep: true, immediate: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance) {
          syncSummarySectionValues();
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
          allFormValues: summaryFormValues.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "allFormValues"])
      ]);
    };
  }
});

const ChestSummary = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-85ca9d67"]]);

const _hoisted_1$b = { class: "examination-section-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ChestSummaryDisplay",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[5];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const summaryFormValues = computed(() => systemicExaminationForm ?? {});
    const summaryFieldNames = [
      "respiratoryDistress",
      "respiratoryDistressSymptoms",
      "stethoscopeAvailable",
      "lungSounds",
      "heartSounds",
      "color",
      "capillaryRefillTime",
      "femoralPulses",
      "jaundiceSeverity"
    ];
    const syncSummarySectionValues = () => {
      if (!formRef.value) return;
      const values = summaryFormValues.value;
      if (!values) return;
      summaryFieldNames.forEach((field) => {
        formRef.value?.setFormValue(field, values[field]);
      });
    };
    watch(
      summaryFormValues,
      () => {
        syncSummarySectionValues();
      },
      { deep: true, immediate: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance) {
          syncSummarySectionValues();
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
          allFormValues: summaryFormValues.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "allFormValues"])
      ]);
    };
  }
});

const ChestSummaryDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-ed0d5abd"]]);

const _hoisted_1$a = { class: "examination-section-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AbdomenSystemicExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[5];
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

const AbdomenSystemicExamination = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-c4a4340a"]]);

const _hoisted_1$9 = { class: "examination-section-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AbdomenFindings",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[6];
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

const AbdomenFindings = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-c4e0b058"]]);

const _hoisted_1$8 = { class: "examination-section-wrapper" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AbdomenSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[7];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const summaryFieldNames = [
      "abdomenFindings",
      "abdomenDistendedConfirm",
      "abdomenDistendedVeins",
      "abdomenTender",
      "abdomenShiny",
      "abdomenColorChange",
      "hepatomegaly",
      "splenomegaly",
      "palpableKidneys",
      "otherMasses",
      "otherMassesDescription",
      "umbilicusFindings",
      "genitaliaFindings",
      "anusFindings"
    ];
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
    };
    const syncSummarySectionValues = () => {
      if (!systemicExaminationForm || !formRef.value) return;
      const currentValues = formRef.value.getFormValues?.() || {};
      summaryFieldNames.forEach((field) => {
        const targetValue = systemicExaminationForm[field];
        if (currentValues[field] === targetValue) {
          return;
        }
        formRef.value?.setFormValue(field, targetValue);
      });
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
          syncSummarySectionValues();
        }
      },
      { immediate: true }
    );
    watch(
      () => summaryFieldNames.map((field) => systemicExaminationForm?.[field]),
      () => {
        syncSummarySectionValues();
      },
      { deep: true, immediate: true }
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

const AbdomenSummary = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-9573f3f4"]]);

const _hoisted_1$7 = { class: "examination-section-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ToneAssessment",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[8];
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

const ToneAssessment = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b5c9ee0e"]]);

const _hoisted_1$6 = { class: "examination-section-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SuckReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[9];
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

const SuckReflex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-510077e5"]]);

const _hoisted_1$5 = { class: "examination-section-wrapper" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "GraspReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[10];
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

const GraspReflex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2927642f"]]);

const _hoisted_1$4 = { class: "examination-section-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MoreReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[11];
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

const MoreReflex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e6d004b9"]]);

const _hoisted_1$3 = { class: "examination-section-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NeurologicalSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[12];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
    };
    const summaryFieldNames = [
      "toneAssessment",
      "suckReflex",
      "graspReflex",
      "MoreReflex"
    ];
    const syncSummarySectionValues = () => {
      if (!systemicExaminationForm || !formRef.value) return;
      const currentValues = formRef.value.getFormValues?.() || {};
      summaryFieldNames.forEach((field) => {
        const targetValue = systemicExaminationForm[field];
        if (currentValues[field] === targetValue) {
          return;
        }
        formRef.value?.setFormValue(field, targetValue);
      });
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
          syncSummarySectionValues();
        }
      },
      { immediate: true }
    );
    watch(
      () => summaryFieldNames.map((field) => systemicExaminationForm?.[field]),
      () => {
        syncSummarySectionValues();
      },
      { deep: false, immediate: true }
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

const NeurologicalSummary = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b55cd7f2"]]);

const _hoisted_1$2 = { class: "examination-section-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MusculoskeletalExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[13];
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

const MusculoskeletalExamination = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2e4168a6"]]);

const _hoisted_1$1 = { class: "examination-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ThompsonScore",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[14];
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

const ThompsonScore = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2a0ef7ab"]]);

const _hoisted_1 = { class: "examination-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MusculoskeletalSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[15];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
    };
    const summaryFieldNames = [
      "musculoskeletalDeformities",
      "skinFindings",
      "birthAsphyxiaSuspected",
      "thompsonRespirationScore",
      "thompsonSuckScore",
      "thompsonMoroScore",
      "thompsonGraspScore",
      "thompsonFontanelleScore",
      "thompsonToneScore",
      "thompsonConsciousnessScore",
      "thompsonFitsScore",
      "thompsonPostureScore"
    ];
    const syncSummarySectionValues = () => {
      if (!systemicExaminationForm || !formRef.value) return;
      summaryFieldNames.forEach((field) => {
        formRef.value?.setFormValue(field, systemicExaminationForm[field]);
      });
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
          syncSummarySectionValues();
        }
      },
      { immediate: true }
    );
    watch(
      () => summaryFieldNames.map((field) => systemicExaminationForm?.[field]),
      () => {
        syncSummarySectionValues();
      },
      { deep: false, immediate: true }
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

const MusculoskeletalSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e807c5b6"]]);

const _sfc_main = defineComponent({
  name: "SystemicExamination",
  components: {
    IonContent,
    IonPage,
    Toolbar,
    NeonatalStepper,
    SystemicExaminationInfo,
    RespiratoryExamination,
    ChestAuscultation,
    Murmurs,
    ChestSummary,
    ChestSummaryDisplay,
    AbdomenSystemicExamination,
    AbdomenFindings,
    AbdomenSummary,
    ToneAssessment,
    SuckReflex,
    GraspReflex,
    MoreReflex,
    NeurologicalSummary,
    MusculoskeletalExamination,
    ThompsonScore,
    MusculoskeletalSummary
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
        title: neonatalSystemicExaminationSections[0].title,
        value: "1",
        subtitle: neonatalSystemicExaminationSections[0].subtitle,
        component: SystemicExaminationInfo,
        configIndex: 0
      },
      {
        title: neonatalSystemicExaminationSections[1].title,
        value: "2",
        subtitle: neonatalSystemicExaminationSections[1].subtitle,
        component: RespiratoryExamination,
        configIndex: 1
      },
      {
        title: neonatalSystemicExaminationSections[2].title,
        value: "3",
        subtitle: neonatalSystemicExaminationSections[2].subtitle,
        component: ChestAuscultation,
        configIndex: 2
      },
      {
        title: neonatalSystemicExaminationSections[3].title,
        value: "4",
        subtitle: neonatalSystemicExaminationSections[3].subtitle,
        component: Murmurs,
        configIndex: 3
      },
      {
        title: neonatalSystemicExaminationSections[4].title,
        value: "5",
        subtitle: neonatalSystemicExaminationSections[4].subtitle,
        component: ChestSummary,
        configIndex: 4
      },
      {
        title: neonatalSystemicExaminationSections[5].title,
        value: "6",
        subtitle: neonatalSystemicExaminationSections[5].subtitle,
        component: ChestSummaryDisplay,
        configIndex: 5
      },
      {
        title: neonatalSystemicExaminationSections[6].title,
        value: "7",
        subtitle: neonatalSystemicExaminationSections[6].subtitle,
        component: AbdomenSystemicExamination,
        configIndex: 6
      },
      {
        title: neonatalSystemicExaminationSections[7].title,
        value: "8",
        subtitle: neonatalSystemicExaminationSections[7].subtitle,
        component: AbdomenFindings,
        configIndex: 7
      },
      {
        title: neonatalSystemicExaminationSections[8].title,
        value: "9",
        subtitle: neonatalSystemicExaminationSections[8].subtitle,
        component: AbdomenSummary,
        configIndex: 8
      },
      {
        title: neonatalSystemicExaminationSections[9].title,
        value: "10",
        subtitle: neonatalSystemicExaminationSections[9].subtitle,
        component: ToneAssessment,
        configIndex: 9
      },
      {
        title: neonatalSystemicExaminationSections[10].title,
        value: "11",
        subtitle: neonatalSystemicExaminationSections[10].subtitle,
        component: SuckReflex,
        configIndex: 10
      },
      {
        title: neonatalSystemicExaminationSections[11].title,
        value: "12",
        subtitle: neonatalSystemicExaminationSections[11].subtitle,
        component: GraspReflex,
        configIndex: 11
      },
      {
        title: neonatalSystemicExaminationSections[12].title,
        value: "13",
        subtitle: neonatalSystemicExaminationSections[12].subtitle,
        component: MoreReflex,
        configIndex: 12
      },
      {
        title: neonatalSystemicExaminationSections[13].title,
        value: "14",
        subtitle: neonatalSystemicExaminationSections[13].subtitle,
        component: NeurologicalSummary,
        configIndex: 13
      },
      {
        title: neonatalSystemicExaminationSections[14].title,
        value: "15",
        subtitle: neonatalSystemicExaminationSections[14].subtitle,
        component: MusculoskeletalExamination,
        configIndex: 14
      },
      {
        title: neonatalSystemicExaminationSections[15].title,
        value: "16",
        subtitle: neonatalSystemicExaminationSections[15].subtitle,
        component: ThompsonScore,
        configIndex: 15
      },
      {
        title: neonatalSystemicExaminationSections[16].title,
        value: "17",
        subtitle: neonatalSystemicExaminationSections[16].subtitle,
        component: MusculoskeletalSummary,
        configIndex: 16
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
const SystemicExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1699b43a"]]);

export { SystemicExamination as default };
