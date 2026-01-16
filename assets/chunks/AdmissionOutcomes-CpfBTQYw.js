import { q as defineComponent, r as ref, h as inject, w as watch, x as createElementBlock, y as openBlock, z as createVNode, E as unref, aD as IonContent, bs as IonPage, aI as useRouter, eT as provide, v as resolveComponent, N as createBlock, B as withCtx } from './vendor-wM1cIaYi.js';
import { s as storeToRefs } from './pinia-Czqxf__w.js';
import { C as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, t as toastWarning, H as HisDate, G as toastSuccess, x as toastDanger } from '../index-BFnAVsh7.js';
import { i as neonatalAdmissionOutcomesFormKey, A as neonatalAdmissionOutcomeSections, N as NeonatalStepper, B as useNeonatalAdmissionOutcomesStore, j as neonatalAdmissionSignOffSections, C as neonatalAdmissionOutcomesSections } from './NeonatalStepper-DjSl1gRc.js';
import { P as PrintSummarySection } from './PrintSummarySection-CVc3cFD-.js';
import { N as NeonatalService } from './neonatal_service-BRgy0F49.js';

const _hoisted_1$1 = { class: "admission-outcome-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdmissionOutcomeSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalAdmissionOutcomeSections[0];
    const formData = sectionConfig.formData;
    const subtitle = sectionConfig.subtitle;
    const admissionOutcomesForm = inject(neonatalAdmissionOutcomesFormKey);
    const syncFormValues = (values) => {
      if (!admissionOutcomesForm) return;
      admissionOutcomesForm.admissionOutcome = values.admissionOutcome || "";
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
      validateForm: () => {
        return formRef.value?.validateForm?.() || null;
      },
      getFormValues: () => {
        return formRef.value?.getFormValues?.() || {};
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(StandardForm, {
          formData: unref(formData),
          subtitle: unref(subtitle),
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, null, 8, ["formData", "subtitle"])
      ]);
    };
  }
});

const AdmissionOutcomeSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e078a6a9"]]);

const _hoisted_1 = { class: "safeguard-concerns-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SafeguardConcernsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalAdmissionOutcomeSections[1];
    const formData = sectionConfig.formData;
    const subtitle = sectionConfig.subtitle;
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => {
        return null;
      },
      getFormValues: () => {
        return {};
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: unref(formData),
          subtitle: unref(subtitle),
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, null, 8, ["formData", "subtitle"])
      ]);
    };
  }
});

const SafeguardConcernsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d06dc727"]]);

const _sfc_main = defineComponent({
  name: "NeonatalAdmissionOutcomes",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    NeonatalStepper,
    AdmissionOutcomeSection,
    SafeguardConcernsSection,
    PrintSummarySection
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isSaving = ref(false);
    const admissionOutcomesStore = useNeonatalAdmissionOutcomesStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncAdmissionOutcomesForm = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      admissionOutcomesStore.initializeAdmissionOutcomesForm(patientId);
    };
    syncAdmissionOutcomesForm();
    watch(
      () => patient.value?.patientID,
      () => syncAdmissionOutcomesForm()
    );
    const admissionOutcomesFormData = admissionOutcomesStore.admissionOutcomesForm;
    provide(neonatalAdmissionOutcomesFormKey, admissionOutcomesFormData);
    watch(
      () => admissionOutcomesStore.admissionOutcomesForm,
      () => admissionOutcomesStore.saveAdmissionOutcomesSnapshot(),
      { deep: true }
    );
    const currentOpenStepper = ref("1");
    const wizardSections = [
      ...neonatalAdmissionOutcomeSections,
      neonatalAdmissionSignOffSections[1]
    ];
    const wizardData = ref(
      wizardSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === wizardSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalAdmissionOutcomeSections[0].title,
        value: "1",
        component: AdmissionOutcomeSection,
        configIndex: 0
      },
      {
        title: neonatalAdmissionOutcomeSections[1].title,
        value: "2",
        component: SafeguardConcernsSection,
        configIndex: 1
      },
      {
        title: neonatalAdmissionSignOffSections[1].title,
        value: "3",
        component: PrintSummarySection,
        configIndex: 3,
        buttonText: "SAVE & PRINT"
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
    const finalStepIndex = stepperData.length - 1;
    const getSaveFunction = (currentIndex) => {
      if (currentIndex === finalStepIndex) {
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
            if (!admissionOutcomesFormData.admissionOutcome) {
              toastWarning("Please select an admission outcome");
              isSaving.value = false;
              return;
            }
            await NeonatalService.saveAdmissionOutcomes(
              patient.value.patientID,
              admissionOutcomesFormData,
              HisDate.sessionDate()
            );
            toastSuccess("Admission outcomes saved successfully");
            admissionOutcomesStore.clearAdmissionOutcomesForm(patient.value.patientID);
            router.push({ name: "neonatalAdmissionSignOff" });
          } catch (error) {
            console.error("Failed to save admission outcomes", error);
            toastDanger("Failed to save admission outcomes. Please try again.");
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
      admissionOutcomesFormData,
      stepperTitle: "Admission Outcomes",
      currentOpenStepper,
      wizardData,
      stepperData,
      updateStatus,
      getSaveFunction,
      isSaving,
      neonatalAdmissionOutcomesSections
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-admission-outcomes-page" }, {
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
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "admissionOutcomes",
            sectionsConfig: _ctx.neonatalAdmissionOutcomesSections,
            useSkipLogic: true,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const AdmissionOutcomes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-61c78177"]]);

export { AdmissionOutcomes as default };
