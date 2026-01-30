import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, aG as IonContent, bu as IonPage, aL as useRouter, eT as provide, x as resolveComponent, O as createBlock, B as withCtx } from './vendor-D7CYpxMc.js';
import { s as storeToRefs } from './pinia-L6vL2rFe.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, t as toastWarning, H as HisDate, G as toastSuccess } from '../index-DLDoA2KE.js';
import { N as NeonatalService } from './neonatal_service-1GyEJ7to.js';
import { D as DemographicBar } from './DemographicBar-DwnPT1XF.js';
import { x as neonatalSignsSymptomsSections, y as neonatalSignsSymptomsFormKey, N as NeonatalStepper, z as useSignsSymptomsStore } from './NeonatalStepper-G1daY2WZ.js';

const _hoisted_1$1 = { class: "signs-symptoms-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdmissionSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSignsSymptomsSections[0];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const signsForm = inject(neonatalSignsSymptomsFormKey);
    const syncFormValues = (values) => {
      if (!signsForm) return;
      signsForm.is_readmission = values.is_readmission || "";
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

const AdmissionSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-312c3ac7"]]);

const _hoisted_1 = { class: "signs-symptoms-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PresentingComplaintsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSignsSymptomsSections[1];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const signsForm = inject(neonatalSignsSymptomsFormKey);
    const syncFormValues = (values) => {
      if (!signsForm) return;
      signsForm.presenting_complaints = values.presenting_complaints || [];
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

const PresentingComplaintsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2ad14f66"]]);

const _sfc_main = defineComponent({
  name: "NeonatalSignsSymptoms",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    DemographicBar,
    NeonatalStepper,
    AdmissionSection,
    PresentingComplaintsSection
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const signsSymptomsStore = useSignsSymptomsStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncFormWithPatient = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      signsSymptomsStore.initializeForPatient(patientId);
    };
    syncFormWithPatient();
    watch(
      () => patient.value?.patientID,
      () => syncFormWithPatient()
    );
    const signsFormData = signsSymptomsStore.formData;
    provide(neonatalSignsSymptomsFormKey, signsFormData);
    watch(
      () => signsSymptomsStore.formData,
      () => signsSymptomsStore.saveSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalSignsSymptomsSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalSignsSymptomsSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalSignsSymptomsSections[0].title,
        value: "1",
        component: AdmissionSection,
        configIndex: 0
      },
      {
        title: neonatalSignsSymptomsSections[1].title,
        value: "2",
        component: PresentingComplaintsSection,
        configIndex: 1
      }
    ];
    const stepperTitle = "Signs & Symptoms Assessment";
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
      if (currentIndex === stepperData.length - 1) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          try {
            const date = HisDate.sessionDate();
            await NeonatalService.saveSignsSymptomsAssessment(patient.value.patientID, signsFormData, date);
            toastSuccess("Signs & symptoms assessment saved successfully");
            signsSymptomsStore.clearPatient(patient.value.patientID);
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("Failed to save signs/symptoms assessment", error);
            toastWarning("Failed to save signs/symptoms assessment");
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
      neonatalSignsSymptomsSections
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-signs-symptoms-page" }, {
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
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "signsSymptoms",
            sectionsConfig: _ctx.neonatalSignsSymptomsSections,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalSignsSymptoms = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f3f91c55"]]);

export { NeonatalSignsSymptoms as default };
