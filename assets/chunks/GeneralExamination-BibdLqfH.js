import { s as defineComponent, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, aG as IonContent, bu as IonPage, aL as useRouter, f0 as provide, c as computed, x as resolveComponent, O as createBlock, B as withCtx } from './vendor-CL0dVHZq.js';
import { s as storeToRefs } from './pinia-e5upVPR3.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, t as toastWarning, G as toastSuccess, x as toastDanger } from '../index-NSeNS5TF.js';
import { D as DemographicBar } from './DemographicBar-Dli36Yxm.js';
import { u as useNeonatalExamStore, N as NeonatalStepper } from './NeonatalStepper-CwwrFuno.js';
import { n as neonatalGeneralExaminationSections, a as neonatalGeneralExaminationFormKey } from './neonatal_service-CvStUFnY.js';
import { S as SummarySection } from './SummarySection-C-XL1StK.js';

const _hoisted_1$5 = { class: "activity-assessment-wrapper" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ActivityAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[0].formData;
    const examStore = useNeonatalExamStore();
    watch(
      () => formRef.value?.getFormValues?.()?.activityAssessment,
      (activityValue) => {
        examStore.updateValues({ activityAssessment: activityValue ?? null });
      },
      { immediate: true }
    );
    __expose({
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

const ActivityAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-628ab1fc"]]);

const _hoisted_1$4 = { class: "head-assessment-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeadAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[1].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      examStore.updateValues({
        fontanelleAssessment: values.fontanelleAssessment ?? null,
        massInHeadAssessment: values.massInHeadAssessment ?? null,
        isBabyYellow: values.isBabyYellow ?? null,
        isBabyPallorPink: values.isBabyPallorPink ?? null,
        hasBabyCyanosis: values.hasBabyCyanosis ?? null,
        hasBabyOedema: values.hasBabyOedema ?? null
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
        }
      },
      { immediate: true }
    );
    __expose({
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

const HeadAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-49928da6"]]);

const _hoisted_1$3 = { class: "cardiovascular-assessment-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CardiovascularAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[2].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      examStore.updateValues({
        capillaryRefillTime: values.capillaryRefillTime ?? null,
        femoralPulses: values.femoralPulses ?? null
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
        }
      },
      { immediate: true }
    );
    __expose({
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

const CardiovascularAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1cbb194a"]]);

const _hoisted_1$2 = { class: "genital-anus-assessment-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GenitalAndAnusAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[3].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      examStore.updateValues({
        genitaliaAssessment: values.genitaliaAssessment ?? null,
        anusPatent: values.anusPatent ?? null
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
        }
      },
      { immediate: true }
    );
    __expose({
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

const GenitalAndAnusAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-90a3145e"]]);

const _hoisted_1$1 = { class: "cleft-lip-palate-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CleftLipPalateForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[4].formData;
    const examStore = useNeonatalExamStore();
    watch(
      () => formRef.value?.getFormValues?.()?.cleftLipPalateAssessment,
      (selection) => {
        examStore.updateValues({ cleftLipPalateAssessment: selection ?? null });
      },
      { immediate: true }
    );
    __expose({
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

const CleftLipPalateForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-85f0230b"]]);

const _hoisted_1 = { class: "congenital-abnormalities-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CongenitalAbnormalitiesForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[5].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      examStore.updateValues({
        hasCongenitalAbnormalities: values.hasCongenitalAbnormalities ?? null,
        congenitalAbnormalitiesType: values.congenitalAbnormalitiesType ?? null,
        congenitalAbnormalitiesDescription: values.congenitalAbnormalitiesDescription ?? ""
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
        }
      },
      { immediate: true }
    );
    __expose({
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

const CongenitalAbnormalitiesForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-33f8dc97"]]);

const _sfc_main = defineComponent({
  name: "NeonatalGeneralExamination",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    DemographicBar,
    NeonatalStepper,
    ActivityAssessmentForm,
    HeadAssessmentForm,
    CardiovascularAssessmentForm,
    GenitalAndAnusAssessmentForm,
    CleftLipPalateForm,
    CongenitalAbnormalitiesForm,
    SummarySection
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const examStore = useNeonatalExamStore();
    const isSaving = ref(false);
    const generalExaminationFormData = computed(() => ({ ...examStore.formData }));
    provide(neonatalGeneralExaminationFormKey, generalExaminationFormData);
    const syncExaminationForm = () => {
      const patientId = patient.value?.patientID;
      examStore.initializeExamForm(typeof patientId === "number" ? patientId : null);
    };
    syncExaminationForm();
    watch(
      () => patient.value?.patientID,
      () => syncExaminationForm()
    );
    const wizardData = ref(
      neonatalGeneralExaminationSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalGeneralExaminationSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalGeneralExaminationSections[0].title,
        subtitle: neonatalGeneralExaminationSections[0].subtitle || "",
        value: "1",
        component: ActivityAssessmentForm
      },
      {
        title: neonatalGeneralExaminationSections[1].title,
        subtitle: neonatalGeneralExaminationSections[1].subtitle || "",
        value: "2",
        component: HeadAssessmentForm
      },
      {
        title: neonatalGeneralExaminationSections[2].title,
        subtitle: neonatalGeneralExaminationSections[2].subtitle || "",
        value: "3",
        component: CardiovascularAssessmentForm
      },
      {
        title: neonatalGeneralExaminationSections[3].title,
        subtitle: neonatalGeneralExaminationSections[3].subtitle || "",
        value: "4",
        component: GenitalAndAnusAssessmentForm
      },
      {
        title: neonatalGeneralExaminationSections[4].title,
        subtitle: neonatalGeneralExaminationSections[4].subtitle || "",
        value: "5",
        component: CleftLipPalateForm
      },
      {
        title: neonatalGeneralExaminationSections[5].title,
        subtitle: neonatalGeneralExaminationSections[5].subtitle || "",
        value: "6",
        component: CongenitalAbnormalitiesForm
      },
      {
        title: neonatalGeneralExaminationSections[6].title,
        subtitle: neonatalGeneralExaminationSections[6].subtitle || "",
        value: "7",
        component: SummarySection,
        configIndex: 6
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
            await examStore.saveGeneralExamination(patient.value.patientID);
            toastSuccess("General examination saved successfully");
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("General examination save failed", error);
            toastDanger("Failed to save general examination. Please try again.");
          } finally {
            isSaving.value = false;
          }
        };
      }
      return null;
    };
    return {
      router,
      patient,
      stepperTitle: "General Examination",
      currentOpenStepper: "1",
      wizardData,
      stepperData,
      updateStatus,
      getSaveFunction,
      isSaving
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-general-examination-page" }, {
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
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "general-examination",
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const GeneralExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8bf2361d"]]);

export { GeneralExamination as default };
