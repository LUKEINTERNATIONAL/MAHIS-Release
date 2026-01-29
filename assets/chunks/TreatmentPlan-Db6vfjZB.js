import { z as StandardForm, _ as _export_sfc, cn as Alert, co as SummaryField, u as useDemographicsStore, T as Toolbar, t as toastWarning, K as ObservationService, ch as saveEncounterData, S as Service, bH as DrugOrderService, G as toastSuccess } from '../index-BiecqvPL.js';
import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, O as createBlock, H as createCommentVNode, c as computed, aL as useRouter, r as reactive, B as withCtx, aG as IonContent, bu as IonPage, eU as provide } from './vendor-DlXvc2CI.js';
import { F as neonatalTreatmentPlanSections, G as neonatalTreatmentPlanFormKey, H as useTreatmentPlanStore, I as defaultNeonatalTreatmentPlanForm, N as NeonatalStepper } from './NeonatalStepper-BmrvjUd-.js';
import { s as storeToRefs } from './pinia-DxIh5T-z.js';
import { l as lodashExports } from './lodash-DXsj9-B5.js';

const _hoisted_1$1 = { class: "wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NonPharmacological",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTreatmentPlanSections[0];
    const formData = sectionConfig.formData;
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
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
      if (!treatmentPlanForm) return;
      const values = formRef.value?.getFormValues?.() ?? {};
      treatmentPlanForm.treatments = values.treatments || [];
      treatmentPlanForm.thermalCareDetails = values.thermalCareDetails || [];
      treatmentPlanForm.feedingSupportDetails = values.feedingSupportDetails || [];
      treatmentPlanForm.admissionDetails = values.admissionDetails || "";
      treatmentPlanForm.incubator = values.incubator || "";
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

const NonPharmacological = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-85366be5"]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Pharmacological",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTreatmentPlanSections[2];
    const formData = sectionConfig.formData;
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    const syncFormValues = (values) => {
      if (!treatmentPlanForm) return;
      treatmentPlanForm.prescriptions = values.prescriptions || [];
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
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
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

const _hoisted_1 = { class: "summary-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NonPharmacologicalSummary",
  setup(__props, { expose: __expose }) {
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    const sectionConfig = neonatalTreatmentPlanSections[1];
    const alertConfig = computed(
      () => sectionConfig.formData.find((field) => field.componentType === "Alert")
    );
    const summaryFieldConfig = computed(
      () => sectionConfig.formData.find((field) => field.componentType === "summaryField")
    );
    __expose({
      getFormRef: () => null,
      validateForm: () => null,
      getFormValues: () => ({ ...treatmentPlanForm || {} })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        alertConfig.value ? (openBlock(), createBlock(Alert, {
          key: 0,
          config: alertConfig.value,
          allFormValues: unref(treatmentPlanForm) || {}
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true),
        summaryFieldConfig.value ? (openBlock(), createBlock(SummaryField, {
          key: 1,
          config: summaryFieldConfig.value,
          allFormValues: unref(treatmentPlanForm) || {}
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true)
      ]);
    };
  }
});

const NonPharmacologicalSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a82d4ab"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TreatmentPlan",
  setup(__props) {
    const currentOpenStepper = ref("1");
    const treatmentStore = useTreatmentPlanStore();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const router = useRouter();
    const treatmentPlanForm = reactive({
      ...defaultNeonatalTreatmentPlanForm,
      treatments: [...treatmentStore.pharmacological.treatments],
      thermalCareDetails: treatmentStore.pharmacological.thermalCareDetails,
      oxygenTherapyDetails: treatmentStore.pharmacological.oxygenTherapyDetails,
      feedingSupportDetails: treatmentStore.pharmacological.feedingSupportDetails,
      admissionDetails: treatmentStore.pharmacological.admissionDetails,
      incubator: treatmentStore.pharmacological.incubator,
      prescriptions: treatmentStore.nonPharmacological.prescription
    });
    provide(neonatalTreatmentPlanFormKey, treatmentPlanForm);
    watch(
      () => ({
        treatments: treatmentPlanForm.treatments,
        thermalCareDetails: treatmentPlanForm.thermalCareDetails,
        oxygenTherapyDetails: treatmentPlanForm.oxygenTherapyDetails,
        feedingSupportDetails: treatmentPlanForm.feedingSupportDetails,
        admissionDetails: treatmentPlanForm.admissionDetails,
        incubator: treatmentPlanForm.incubator
      }),
      (values) => {
        treatmentStore.setPharmacological({
          incubator: values.incubator || "",
          treatments: Array.isArray(values.treatments) ? values.treatments : [],
          thermalCareDetails: Array.isArray(values.thermalCareDetails) ? values.thermalCareDetails : [],
          oxygenTherapyDetails: Array.isArray(values.oxygenTherapyDetails) ? values.oxygenTherapyDetails : [],
          feedingSupportDetails: Array.isArray(values.feedingSupportDetails) ? values.feedingSupportDetails : [],
          admissionDetails: values.admissionDetails || ""
        });
      },
      { deep: true }
    );
    watch(
      () => treatmentPlanForm.prescriptions,
      (prescriptions) => {
        treatmentStore.nonPharmacological.prescription = prescriptions || [];
      },
      { deep: true }
    );
    const treatmentPlanComponents = [NonPharmacological, NonPharmacologicalSummary, _sfc_main$2];
    const stepperData = neonatalTreatmentPlanSections.map((section, index) => ({
      title: section.title,
      subtitle: section.subtitle,
      value: String(index + 1),
      component: treatmentPlanComponents[index] || _sfc_main$2,
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
    const getSaveFnForStep = async (index) => {
      if (index === 0) return;
      if (index === stepperData.length - 1) {
        try {
          const patientId = patient.value?.patientID;
          if (!patientId) {
            toastWarning("Patient ID is missing. Cannot save treatment plan.");
            return;
          }
          const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;
          const isNonEmptyArray = (v) => Array.isArray(v) && v.length > 0;
          const treatments = treatmentPlanForm.treatments;
          const thermalCareDetails = treatmentPlanForm.thermalCareDetails;
          const oxygenTherapyDetails = treatmentPlanForm.oxygenTherapyDetails;
          const feedingSupportDetails = treatmentPlanForm.feedingSupportDetails;
          const admissionDetails = treatmentPlanForm.admissionDetails;
          console.log({
            treatments,
            thermalCareDetails,
            oxygenTherapyDetails,
            feedingSupportDetails,
            admissionDetails
          });
          const observations = [];
          if (isNonEmptyString(treatmentPlanForm.incubator)) {
            observations.push(await ObservationService.buildValueText("notes", treatmentPlanForm.incubator.trim()));
          }
          if (isNonEmptyArray(thermalCareDetails)) {
            for (const detail of thermalCareDetails) {
              if (isNonEmptyString(detail)) {
                observations.push(await ObservationService.buildValueCoded("thermal care", detail.trim()));
              }
            }
          }
          if (isNonEmptyArray(oxygenTherapyDetails)) {
            for (const detail of oxygenTherapyDetails) {
              if (isNonEmptyString(detail)) {
                observations.push(await ObservationService.buildValueCoded("Oxygen Therapy (Supportive, Non-Drug)", detail.trim()));
              }
            }
          }
          if (isNonEmptyArray(feedingSupportDetails)) {
            for (const detail of feedingSupportDetails) {
              if (isNonEmptyString(detail)) {
                observations.push(await ObservationService.buildValueCoded("feeding support", detail.trim()));
              }
            }
          }
          if (isNonEmptyString(admissionDetails)) {
            observations.push(await ObservationService.buildValueCoded("admission", admissionDetails.trim()));
          }
          if (isNonEmptyArray(treatments)) {
            for (const treatment of treatments) {
              if (isNonEmptyString(treatment)) {
                observations.push(await ObservationService.buildValueText("treatment", treatment.trim()));
              }
            }
          }
          if (observations.length === 0) {
            toastWarning("No treatment details selected to save.");
            return;
          }
          const encounter = await saveEncounterData(patientId, 25, observations);
          let encounter_id;
          if (encounter && lodashExports.isArray(encounter) && encounter.length > 0) {
            encounter_id = encounter[0].encounter_id;
          }
          const prescriptions = treatmentStore.nonPharmacological?.prescription || [];
          const drug_orders = prescriptions.filter((p) => p && p.drug_id && p.name).map((prescription) => ({
            dose: Number(prescription.dosage),
            frequency: prescription.frequency,
            drug: prescription.name,
            start_date: Service.getSessionDate(),
            auto_expire_date: "",
            drug_inventory_id: Number(prescription.drug_id),
            equivalent_daily_dose: 6,
            units: "",
            instructions: ""
          }));
          if (encounter_id && drug_orders.length > 0) {
            await DrugOrderService.create({ encounter_id, drug_orders });
          }
          toastSuccess("Treatment plan saved successfully.");
          await new Promise((resolve) => setTimeout(resolve, 800));
          toastSuccess("Treatment plan saved successfully.");
          await new Promise((resolve) => setTimeout(resolve, 800));
          router.push({ path: "/neonatal/checkpoint" });
        } catch (error) {
          toastWarning("Error saving treatment plan. Please try again.");
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), { class: "neonatal-enrollment-page" }, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(NeonatalStepper, {
                wizardData: wizardData.value,
                StepperData: unref(stepperData),
                stepperTitle: "Treatment Plan",
                openStepper: currentOpenStepper.value,
                backUrl: "/patient-profile",
                getSaveFunction: getSaveFnForStep,
                onUpdateStatus: updateStatus,
                "flow-type": "treatmentPlan",
                "show-componet-title": true,
                sectionsConfig: unref(neonatalTreatmentPlanSections)
              }, null, 8, ["wizardData", "StepperData", "openStepper", "sectionsConfig"])
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
