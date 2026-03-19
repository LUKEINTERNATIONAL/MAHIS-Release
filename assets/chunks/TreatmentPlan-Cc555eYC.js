import { z as StandardForm, _ as _export_sfc, u as useDemographicsStore, T as Toolbar, t as toastWarning, G as toastSuccess } from '../index-B8ztKi9t.js';
import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, n as nextTick, O as createBlock, aM as useRouter, f1 as provide, B as withCtx, aH as IonContent, H as createCommentVNode, bw as IonPage, c as computed } from './vendor-DvGYa1v4.js';
import { k as neonatalTreatmentPlanSections, e as neonatalTreatmentPlanFormKey, I as useTreatmentPlanStore, N as NeonatalStepper } from './NeonatalStepper-B723xsv1.js';
import { S as SummarySection } from './SummarySection-0yOonqZK.js';
import { s as storeToRefs } from './pinia-C0lBSi-v.js';

const _hoisted_1 = { class: "wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NonPharmacological",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTreatmentPlanSections[0];
    const formData = sectionConfig.formData;
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    let syncInProgress = false;
    const initializeFormFromState = () => {
      if (!formRef.value || !treatmentPlanForm) return;
      const existingValues = formRef.value.getFormValues?.() ?? {};
      if ((treatmentPlanForm.treatments?.length ?? 0) && !(existingValues.treatments?.length ?? 0)) {
        formRef.value.setFormValue?.("treatments", [...treatmentPlanForm.treatments]);
      }
      if (treatmentPlanForm.thermalCareDetails) {
        formRef.value.setFormValue?.("thermalCareDetails", [...treatmentPlanForm.thermalCareDetails]);
      }
      if (treatmentPlanForm.incubator) {
        formRef.value.setFormValue?.("incubator", treatmentPlanForm.incubator);
      }
      if (treatmentPlanForm.feedingSupportDetails) {
        formRef.value.setFormValue?.("feedingSupportDetails", [...treatmentPlanForm.feedingSupportDetails]);
      }
      if (treatmentPlanForm.admissionDetails) {
        formRef.value.setFormValue?.("admissionDetails", treatmentPlanForm.admissionDetails);
      }
    };
    const saveForm = () => {
      if (!treatmentPlanForm || syncInProgress) return;
      const values = formRef.value?.getFormValues?.() ?? {};
      const hasChanges = JSON.stringify(values.treatments || []) !== JSON.stringify(treatmentPlanForm.treatments || []) || JSON.stringify(values.thermalCareDetails || []) !== JSON.stringify(treatmentPlanForm.thermalCareDetails || []) || JSON.stringify(values.feedingSupportDetails || []) !== JSON.stringify(treatmentPlanForm.feedingSupportDetails || []) || (values.admissionDetails || "") !== (treatmentPlanForm.admissionDetails || "") || (values.incubator || "") !== (treatmentPlanForm.incubator || "");
      if (hasChanges) {
        syncInProgress = true;
        nextTick(() => {
          treatmentPlanForm.treatments = values.treatments || [];
          treatmentPlanForm.thermalCareDetails = values.thermalCareDetails || [];
          treatmentPlanForm.feedingSupportDetails = values.feedingSupportDetails || [];
          treatmentPlanForm.admissionDetails = values.admissionDetails || "";
          treatmentPlanForm.incubator = values.incubator || "";
          syncInProgress = false;
        });
      }
    };
    watch(
      () => formRef.value?.formValues?.value,
      () => {
        saveForm();
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance) {
          initializeFormFromState();
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

const NonPharmacological = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8b2eb0b1"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Pharmacological",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTreatmentPlanSections[1];
    const formData = sectionConfig.formData;
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    let syncInProgress = false;
    const syncFormValues = (values) => {
      if (!treatmentPlanForm || syncInProgress) return;
      const newPrescriptions = values.prescriptions || [];
      const currentPrescriptions = treatmentPlanForm.prescriptions || [];
      if (JSON.stringify(newPrescriptions) !== JSON.stringify(currentPrescriptions)) {
        syncInProgress = true;
        nextTick(() => {
          treatmentPlanForm.prescriptions = newPrescriptions;
          syncInProgress = false;
        });
      }
    };
    const initializeFormFromState = () => {
      if (!formRef.value || !treatmentPlanForm) return;
      const existingValues = formRef.value.getFormValues?.() ?? {};
      if ((treatmentPlanForm.prescriptions?.length ?? 0) && !(existingValues.prescriptions?.length ?? 0)) {
        formRef.value.setFormValue?.("prescriptions", [...treatmentPlanForm.prescriptions]);
      }
    };
    watch(
      () => formRef.value?.formValues?.value,
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
        if (instance) {
          initializeFormFromState();
          syncFormValues(instance.getFormValues?.() ?? {});
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => {
        const values = formRef.value?.getFormValues?.() || {};
        syncFormValues(values);
        return formRef.value?.validateForm?.() || null;
      },
      getFormValues: () => {
        const values = formRef.value?.getFormValues?.() || {};
        syncFormValues(values);
        return values;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(formData),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TreatmentPlan",
  setup(__props) {
    const currentOpenStepper = ref("1");
    const treatmentStore = useTreatmentPlanStore();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isReady = ref(false);
    const router = useRouter();
    const patientId = computed(() => Number(patient.value?.patientID || 0));
    let syncPending = null;
    const syncForPatient = async (rawId) => {
      console.log("[TreatmentPlan] syncForPatient called with:", rawId);
      const id = Number(rawId || 0);
      if (!Number.isFinite(id) || id <= 0) {
        console.log("[TreatmentPlan] Invalid patient ID, not ready");
        isReady.value = false;
        treatmentStore.initializeForRawPatientId(null);
        return;
      }
      console.log("[TreatmentPlan] Initializing for patient:", id);
      await nextTick();
      treatmentStore.initializeForRawPatientId(id);
      isReady.value = true;
      console.log("[TreatmentPlan] Ready to render stepper");
    };
    watch(
      patientId,
      (id) => {
        if (syncPending) clearTimeout(syncPending);
        syncPending = setTimeout(() => {
          syncForPatient(id);
        }, 0);
      },
      { immediate: true }
    );
    provide(neonatalTreatmentPlanFormKey, treatmentStore.formData);
    const treatmentPlanComponents = [NonPharmacological, _sfc_main$1, SummarySection];
    const stepperData = neonatalTreatmentPlanSections.map((section, index) => ({
      title: section.title,
      subtitle: section.subtitle,
      value: String(index + 1),
      component: treatmentPlanComponents[index] || _sfc_main$1,
      configIndex: index
    }));
    const wizardData = ref(
      neonatalTreatmentPlanSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalTreatmentPlanSections.length - 1 ? "last_step" : ""
      }))
    );
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
    const getSaveFnForStep = (currentIndex) => {
      if (currentIndex !== stepperData.length - 1) return null;
      return async () => {
        const patientId2 = Number(patient.value?.patientID);
        if (!Number.isFinite(patientId2) || patientId2 <= 0) {
          toastWarning("Patient ID is missing. Cannot save treatment plan.");
          return;
        }
        const saveResult = await treatmentStore.saveAssessment(patientId2);
        if (!saveResult.ok) {
          if (saveResult.reason === "saving") return;
          if (saveResult.reason === "no_data") {
            toastWarning("No treatment details selected to save.");
            return;
          }
          toastWarning("Error saving treatment plan. Please try again.");
          return;
        }
        toastSuccess("Treatment plan saved successfully");
        await new Promise((resolve) => setTimeout(resolve, 2e3));
        router.push({ path: "/neonatal/checkpoint" });
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), { class: "neonatal-enrollment-page" }, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              isReady.value ? (openBlock(), createBlock(NeonatalStepper, {
                key: 0,
                wizardData: wizardData.value,
                StepperData: unref(stepperData),
                stepperTitle: "Treatment Plan",
                openStepper: currentOpenStepper.value,
                backUrl: "/patient-profile",
                getSaveFunction: getSaveFnForStep,
                onUpdateStatus: updateStatus,
                "flow-type": "treatmentPlan",
                "show-componet-title": true,
                sectionsConfig: unref(neonatalTreatmentPlanSections),
                mountAllSteps: false
              }, null, 8, ["wizardData", "StepperData", "openStepper", "sectionsConfig"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
