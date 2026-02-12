import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, aG as IonContent, bu as IonPage, aL as useRouter, f0 as provide, x as resolveComponent, O as createBlock, B as withCtx } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, t as toastWarning, H as HisDate, G as toastSuccess, x as toastDanger } from '../index-PMl5GQCx.js';
import { F as neonatalClinicalReviewOutcomeSections, b as neonatalClinicalReviewOutcomesFormKey, N as NeonatalStepper, G as useNeonatalClinicalReviewOutcomesStore, j as neonatalClinicalReviewOutcomesSections } from './NeonatalStepper-CDuygvRM.js';
import { N as NeonatalService } from './neonatal_service-COEmOVsO.js';
import { S as SummarySection } from './SummarySection-h6FQH7ET.js';

const _hoisted_1$1 = { class: "clinical-review-outcome-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ClinicalReviewOutcomeSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalClinicalReviewOutcomeSections[0];
    const formData = sectionConfig.formData;
    const subtitle = sectionConfig.subtitle;
    const clinicalReviewOutcomesForm = inject(neonatalClinicalReviewOutcomesFormKey);
    const syncFormValues = (values) => {
      if (!clinicalReviewOutcomesForm) return;
      clinicalReviewOutcomesForm.clinicalReviewOutcome = values.clinicalReviewOutcome || "";
      clinicalReviewOutcomesForm.clinicalReviewOutcomeOther = values.clinicalReviewOutcomeOther || "";
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

const ClinicalReviewOutcomeSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3533f1b5"]]);

const _hoisted_1 = { class: "safeguard-concerns-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SafeguardConcernsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalClinicalReviewOutcomeSections[1];
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

const SafeguardConcernsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8bc3ef16"]]);

const _sfc_main = defineComponent({
  name: "NeonatalClinicalReviewOutcomes",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    NeonatalStepper,
    ClinicalReviewOutcomeSection,
    SafeguardConcernsSection,
    SummarySection
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isSaving = ref(false);
    const clinicalReviewOutcomesStore = useNeonatalClinicalReviewOutcomesStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncClinicalReviewOutcomesForm = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      clinicalReviewOutcomesStore.initializeClinicalReviewOutcomesForm(patientId);
    };
    syncClinicalReviewOutcomesForm();
    watch(
      () => patient.value?.patientID,
      () => syncClinicalReviewOutcomesForm()
    );
    const clinicalReviewOutcomesFormData = clinicalReviewOutcomesStore.clinicalReviewOutcomesForm;
    provide(neonatalClinicalReviewOutcomesFormKey, clinicalReviewOutcomesFormData);
    watch(
      () => clinicalReviewOutcomesStore.clinicalReviewOutcomesForm,
      () => clinicalReviewOutcomesStore.saveClinicalReviewOutcomesSnapshot(),
      { deep: true }
    );
    const currentOpenStepper = ref("1");
    const wizardData = ref(
      neonatalClinicalReviewOutcomeSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalClinicalReviewOutcomeSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalClinicalReviewOutcomeSections[0].title,
        value: "1",
        component: ClinicalReviewOutcomeSection,
        configIndex: 0
      },
      {
        title: neonatalClinicalReviewOutcomeSections[1].title,
        value: "2",
        component: SafeguardConcernsSection,
        configIndex: 1
      },
      {
        title: neonatalClinicalReviewOutcomeSections[2].title,
        subtitle: neonatalClinicalReviewOutcomeSections[2].subtitle || "",
        value: "3",
        component: SummarySection,
        configIndex: 2
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
            if (!clinicalReviewOutcomesFormData.clinicalReviewOutcome) {
              toastWarning("Please select an outcome");
              isSaving.value = false;
              return;
            }
            await NeonatalService.saveClinicalReviewOutcomes(
              patient.value.patientID,
              clinicalReviewOutcomesFormData,
              HisDate.sessionDate()
            );
            toastSuccess("Clinical review outcomes saved successfully");
            clinicalReviewOutcomesStore.clearClinicalReviewOutcomesForm(patient.value.patientID);
            router.push({ name: "neonatalCheckpoint" });
          } catch (error) {
            console.error("Failed to save clinical review outcomes", error);
            toastDanger("Failed to save clinical review outcomes. Please try again.");
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
      clinicalReviewOutcomesFormData,
      stepperTitle: "Clinical Review Outcomes",
      currentOpenStepper,
      wizardData,
      stepperData,
      updateStatus,
      getSaveFunction,
      isSaving,
      neonatalClinicalReviewOutcomesSections
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-clinical-review-outcomes-page" }, {
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
            flowType: "clinicalReview",
            sectionsConfig: _ctx.neonatalClinicalReviewOutcomesSections,
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
const ClinicalReviewOutcomes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7b4a65c6"]]);

export { ClinicalReviewOutcomes as default };
