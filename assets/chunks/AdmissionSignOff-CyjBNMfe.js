import { v as defineComponent, h as inject, w as watch, z as openBlock, A as createElementBlock, B as createVNode, G as unref, f as ref, aF as IonContent, bu as IonPage, aK as useRouter, eV as provide, y as resolveComponent, P as createBlock, C as withCtx, D as createBaseVNode } from './vendor-Cbv9TWZo.js';
import { s as storeToRefs } from './pinia-C6LE2xz6.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore } from '../index-BHF9kXfk.js';
import { j as neonatalAdmissionSignOffSections, i as neonatalAdmissionOutcomesFormKey, N as NeonatalStepper, B as useNeonatalAdmissionOutcomesStore } from './NeonatalStepper-BuYh_sVB.js';
import { A as AdmissionProgressBar } from './AdmissionProgressBar-CKAkeDyH.js';
import { u as useAdmissionSignOff } from './useAdmissionSignOff-m9IONlcQ.js';
import { P as PrintSummarySection } from './PrintSummarySection-YTRz9Yg0.js';

const _hoisted_1$1 = { class: "admission-signoff-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdmissionSignOffSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalAdmissionSignOffSections[0];
    const formData = sectionConfig.formData;
    const subtitle = sectionConfig.subtitle;
    const admissionOutcomesForm = inject(neonatalAdmissionOutcomesFormKey);
    useAdmissionSignOff(formRef);
    const syncFormValues = (values) => {
      if (!admissionOutcomesForm) return;
      admissionOutcomesForm.healthcareWorkerId = values.healthcareWorkerId || "";
      admissionOutcomesForm.electronicSignature = values.electronicSignature || "";
      admissionOutcomesForm.userRole = values.userRole || "";
      admissionOutcomesForm.signOffDate = values.signOffDate || "";
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

const AdmissionSignOffSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d193646e"]]);

const _sfc_main = defineComponent({
  name: "NeonatalAdmissionSignOff",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    NeonatalStepper,
    AdmissionProgressBar,
    AdmissionSignOffSection,
    PrintSummarySection
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const admissionOutcomesStore = useNeonatalAdmissionOutcomesStore();
    const isSaving = ref(false);
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
    const wizardData = ref(
      neonatalAdmissionSignOffSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalAdmissionSignOffSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalAdmissionSignOffSections[0].title,
        value: "1",
        component: AdmissionSignOffSection,
        configIndex: 0
      },
      {
        title: neonatalAdmissionSignOffSections[1].title,
        value: "2",
        component: PrintSummarySection,
        configIndex: 1
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
          if (isSaving.value) return;
          isSaving.value = true;
          try {
            router.push("/patient-profile");
          } finally {
            isSaving.value = false;
          }
        };
      }
      return null;
    };
    return {
      wizardData,
      stepperData,
      stepperTitle: "Sign Off & Print",
      currentOpenStepper,
      updateStatus,
      getSaveFunction,
      isSaving,
      neonatalAdmissionSignOffSections
    };
  }
});

const _hoisted_1 = { class: "signoff-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-admission-signoff-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, {
        fullscreen: true,
        class: "ion-padding"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_NeonatalStepper, {
              wizardData: _ctx.wizardData,
              StepperData: _ctx.stepperData,
              stepperTitle: _ctx.stepperTitle,
              openStepper: _ctx.currentOpenStepper,
              backUrl: "/patient-profile",
              flowType: "admissionOutcomes",
              sectionsConfig: _ctx.neonatalAdmissionSignOffSections,
              useSkipLogic: true,
              getSaveFunction: _ctx.getSaveFunction,
              onUpdateStatus: _ctx.updateStatus
            }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "sectionsConfig", "getSaveFunction", "onUpdateStatus"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const AdmissionSignOff = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e637924a"]]);

export { AdmissionSignOff as default };
