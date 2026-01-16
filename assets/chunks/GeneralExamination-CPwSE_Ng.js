import { q as defineComponent, r as ref, w as watch, x as createElementBlock, y as openBlock, z as createVNode, E as unref, d as computed, aD as IonContent, bs as IonPage, aI as useRouter, v as resolveComponent, N as createBlock, B as withCtx } from './vendor-wM1cIaYi.js';
import { s as storeToRefs } from './pinia-Czqxf__w.js';
import { u as useDemographicsStore, ab as useUserStore, G as toastSuccess, am as router, x as toastDanger, aY as AppEncounterService, C as StandardForm, _ as _export_sfc, T as Toolbar, t as toastWarning } from '../index-CN2ETx8y.js';
import { D as DemographicBar } from './DemographicBar-DQ6EVoCC.js';
import { u as useNeonatalExamStore, n as neonatalGeneralExaminationSections, N as NeonatalStepper } from './NeonatalStepper-C2LGpn_j.js';

class PhysicalExaminationService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 117, providerID);
  }
}
class NeonatalPhysicalExaminationService extends AppEncounterService {
  physical_examination_service;
  constructor(patientID, providerID) {
    super(patientID, 117, providerID);
    this.physical_examination_service = new PhysicalExaminationService(patientID, providerID);
  }
  /**
   * Ensures an encounter ID is set for the current service instance.
   * It creates a new encounter only if one does not already exist (i.e., this.encounterID is null/undefined).
   */
  async ensureEncounterExists() {
    if (this.encounterID) {
      return;
    }
    const _encounter_ = await this.physical_examination_service.createEncounter();
    if (!_encounter_) throw new Error("Failed to create encounter");
    this.encounterID = _encounter_.encounter_id;
    if (_encounter_.patient_id !== this.patientID) {
      throw new Error("Encounter created for the wrong patient! Context inconsistency detected.");
    }
  }
  async onSubmit(computedData) {
    await this.ensureEncounterExists();
    this.saveObservationList(computedData);
  }
  childObservation = async (conceptNamevalue) => await this.physical_examination_service.buildValueCoded(conceptNamevalue, conceptNamevalue);
  computeParentObservation = async (conceptName) => ({
    tag: conceptName,
    obs: await this.physical_examination_service.buildValueCoded(conceptName, conceptName)
  });
  // Added this helper to the class since it uses the instance methods
  buildValueText = async (conceptName, valueText) => await this.physical_examination_service.buildValueText(conceptName, valueText);
}
const saveSingleAssessmentObservation = async (physical_examination_service, parentConceptName, storeValue, requiredMsgKey) => {
  if (!storeValue) {
    const errorMsg = `${requiredMsgKey} is required`;
    toastDanger(errorMsg);
    throw new Error(errorMsg);
  }
  const parentObservation = await physical_examination_service.computeParentObservation(parentConceptName);
  const Data = {
    // Use a generic key or one derived from the concept name
    [`${parentConceptName.replace(/\s/g, "").toLowerCase()}Observation`]: parentObservation
  };
  const childObservationResult = await physical_examination_service.childObservation(storeValue);
  if (!childObservationResult) {
    const errorMsg = `${requiredMsgKey} observations are required`;
    throw new Error(errorMsg);
  }
  const parentKey = Object.keys(Data)[0];
  Data[parentKey].obs.child = [childObservationResult];
  return Data;
};
const saveNeonatalPhysicalExamination = async (physical_examination_service) => {
  try {
    const store = useNeonatalExamStore();
    const data = await saveSingleAssessmentObservation(physical_examination_service, "Activity", store.activityAssessment, "Activity Assessment");
    await physical_examination_service.onSubmit([data.activityObservation.obs]);
    store.setActivityAssessment(null);
  } catch (error) {
    throw error;
  }
};
const saveNeonatalHeadAssessment = async (physical_examination_service) => {
  try {
    const store = useNeonatalExamStore();
    const data = await saveSingleAssessmentObservation(
      physical_examination_service,
      "Fontanelle",
      store.fontanelleAssessment,
      "Fontanelle Assessment"
    );
    await physical_examination_service.onSubmit([data.fontanelleObservation.obs]);
    store.setFontanelleAssessment(null);
    const data2 = await saveSingleAssessmentObservation(
      physical_examination_service,
      "Head",
      // Concept name "Head" for Mass in Head assessment
      store.massInHeadAssessment,
      "Mass in Head Assessment"
    );
    await physical_examination_service.onSubmit([data2.headObservation.obs]);
    store.setMassInHeadAssessment(null);
    const colorObservation = await physical_examination_service.computeParentObservation("Colour");
    const ColorData = {
      colorObservation
    };
    ColorData.colorObservation.obs.child = [];
    if (store.isBabyYellow !== null && store.isBabyYellow) {
      const obs_child_isBabyYellow = await physical_examination_service.childObservation("Yell");
      ColorData.colorObservation.obs.child.push(obs_child_isBabyYellow);
    }
    if (store.isBabyPallorPink !== null && store.isBabyPallorPink) {
      const obs_child_isBabyPallorPink = await physical_examination_service.childObservation("Pink");
      ColorData.colorObservation.obs.child.push(obs_child_isBabyPallorPink);
    }
    if (store.hasBabyCyanosis !== null && store.hasBabyCyanosis) {
      const obs_child_hasBabyCyanosis = await physical_examination_service.childObservation("Blue");
      ColorData.colorObservation.obs.child.push(obs_child_hasBabyCyanosis);
    }
    if (store.hasBabyOedema !== null && store.hasBabyOedema) {
      const obs_child_hasBabyOedema = await physical_examination_service.childObservation("White");
      ColorData.colorObservation.obs.child.push(obs_child_hasBabyOedema);
    }
    await physical_examination_service.onSubmit([ColorData.colorObservation.obs]);
    store.setIsBabyYellow(null);
    store.setIsBabyPallorPink(null);
    store.setHasBabyCyanosis(null);
    store.setHasBabyOedema(null);
  } catch (error) {
    throw error;
  }
};
const saveCardiovascularAssessment = async (physical_examination_service) => {
  try {
    const store = useNeonatalExamStore();
    const data = await saveSingleAssessmentObservation(
      physical_examination_service,
      "Femorals",
      store.femoralPulses,
      "Femoral Pulses assessment"
    );
    await physical_examination_service.onSubmit([data.femoralsObservation.obs]);
    store.setFemoralPulses(null);
  } catch (error) {
    throw error;
  }
};
const saveGenitalAndAnusAssessment = async (physical_examination_service) => {
  try {
    const store = useNeonatalExamStore();
    const data = await saveSingleAssessmentObservation(
      physical_examination_service,
      "Anus2",
      // Concept name "Anus2"
      store.anusAssessment,
      "Anus assessment"
    );
    await physical_examination_service.onSubmit([data.anus2Observation.obs]);
    store.setAnusAssessment(null);
    const data2 = await saveSingleAssessmentObservation(
      physical_examination_service,
      "Genitalia",
      store.genitaliaAssessment,
      "Genitalia assessment"
    );
    await physical_examination_service.onSubmit([data2.genitaliaObservation.obs]);
    store.setGenitaliaAssessment(null);
  } catch (error) {
    throw error;
  }
};
const savePalateAssessment = async (physical_examination_service) => {
  try {
    const store = useNeonatalExamStore();
    const data = await saveSingleAssessmentObservation(
      physical_examination_service,
      "Palate",
      store.cleftAssessment,
      "Cleft Lip/Palate assessment"
    );
    await physical_examination_service.onSubmit([data.palateObservation.obs]);
    store.setCleftAssessment(null);
  } catch (error) {
    throw error;
  }
};
const saveCongenitalAbnormalities = async (physical_examination_service) => {
  try {
    const store = useNeonatalExamStore();
    const congenitalAbnormalitiesObservation = await physical_examination_service.computeParentObservation("Other congenital abnormality");
    const CongenitalAbnormalitiesData = {
      congenitalAbnormalitiesObservation
    };
    CongenitalAbnormalitiesData.congenitalAbnormalitiesObservation.obs.child = [];
    if (store.hasCongenitalAbnormalities !== null) {
      let conceptValue = store.hasCongenitalAbnormalities ? "Yes" : "No";
      const obs_child_hasCongenitalAbnormalities = await physical_examination_service.childObservation(conceptValue);
      CongenitalAbnormalitiesData.congenitalAbnormalitiesObservation.obs.child.push(obs_child_hasCongenitalAbnormalities);
    }
    if (store.abnormalitiesNotes !== "") {
      const abnormalitiesNotesObservation = await physical_examination_service.buildValueText("Notes", store.abnormalitiesNotes);
      CongenitalAbnormalitiesData.congenitalAbnormalitiesObservation.obs.child.push(abnormalitiesNotesObservation);
    }
    await physical_examination_service.onSubmit([CongenitalAbnormalitiesData.congenitalAbnormalitiesObservation.obs]);
    store.setHasCongenitalAbnormalities(null);
    store.setAbnormalitiesNotes("");
  } catch (error) {
    throw error;
  }
};
const saveGeneralExamination = async () => {
  try {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const userStore = useUserStore();
    const physical_examination_service = new NeonatalPhysicalExaminationService(patient.value.patientID, userStore.user_ID);
    await Promise.all([
      saveNeonatalPhysicalExamination(physical_examination_service),
      saveNeonatalHeadAssessment(physical_examination_service),
      saveCardiovascularAssessment(physical_examination_service),
      saveGenitalAndAnusAssessment(physical_examination_service),
      savePalateAssessment(physical_examination_service),
      saveCongenitalAbnormalities(physical_examination_service)
    ]);
    console.log("SUCCESS: All General Examination sections saved successfully!");
    toastSuccess("General Examination saved successfully");
    router.push({ path: "/neonatal/checkpoint" });
  } catch (error) {
    console.error("FAILED to save General Examination:", error);
    toastDanger("Failed to save General Examination. Please try again.");
    throw error;
  }
};

const _hoisted_1$6 = { class: "activity-assessment-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ActivityAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[0].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (activityValue) => {
      examStore.setActivityAssessment(activityValue ?? null);
    };
    watch(
      () => formRef.value?.getFormValues?.()?.activityAssessment,
      (activityValue) => {
        syncFormValues(activityValue);
      },
      { immediate: true }
    );
    __expose({
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

const ActivityAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-ac0b0041"]]);

const _hoisted_1$5 = { class: "head-assessment-wrapper" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeadAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[1].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      if (values.fontanelleAssessment) {
        examStore.setFontanelleAssessment(values.fontanelleAssessment);
      }
      if (values.massInHeadAssessment) {
        examStore.setMassInHeadAssessment(values.massInHeadAssessment);
      }
      if (values.isBabyYellow !== void 0) {
        examStore.setIsBabyYellow(values.isBabyYellow === "yes" ? true : values.isBabyYellow === "no" ? false : null);
      }
      if (values.isBabyPallorPink !== void 0) {
        examStore.setIsBabyPallorPink(values.isBabyPallorPink === "yes" ? true : values.isBabyPallorPink === "no" ? false : null);
      }
      if (values.hasBabyCyanosis !== void 0) {
        examStore.setHasBabyCyanosis(values.hasBabyCyanosis === "yes" ? true : values.hasBabyCyanosis === "no" ? false : null);
      }
      if (values.hasBabyOedema !== void 0) {
        examStore.setHasBabyOedema(values.hasBabyOedema === "yes" ? true : values.hasBabyOedema === "no" ? false : null);
      }
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

const HeadAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4aef5988"]]);

const _hoisted_1$4 = { class: "cardiovascular-assessment-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CardiovascularAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[2].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      if (values.heartSoundsAssessment) {
        examStore.setHeartSoundsAssessment(values.heartSoundsAssessment);
      }
      if (values.femoralPulses) {
        examStore.setFemoralPulses(values.femoralPulses);
      }
      if (values.hasCardiacAbnormality !== void 0) {
        examStore.setHasCardiacAbnormality(values.hasCardiacAbnormality === "yes" ? true : values.hasCardiacAbnormality === "no" ? false : null);
      }
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

const CardiovascularAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4929920c"]]);

const _hoisted_1$3 = { class: "genital-anus-assessment-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GenitalAndAnusAssessmentForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[3].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      if (values.genitaliaAssessment) {
        examStore.setGenitaliaAssessment(values.genitaliaAssessment);
      }
      if (values.anusPatent) {
        examStore.setAnusAssessment(values.anusPatent);
      }
      if (values.hasMeconiumPassed !== void 0) {
        examStore.setHasMeconiumPassed(values.hasMeconiumPassed === "yes" ? true : values.hasMeconiumPassed === "no" ? false : null);
      }
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

const GenitalAndAnusAssessmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-94b28256"]]);

const _hoisted_1$2 = { class: "cleft-lip-palate-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CleftLipPalateForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[4].formData;
    const examStore = useNeonatalExamStore();
    const deriveCleftState = (selection) => {
      if (!selection) {
        examStore.setHasCleftLip(null);
        examStore.setHasCleftPalate(null);
        examStore.setCleftAssessment(null);
        return;
      }
      const hasCleftLip = selection === "cleft_lip" || selection === "cleft_lip_and_palate";
      const hasCleftPalate = selection === "cleft_palate" || selection === "cleft_lip_and_palate";
      examStore.setHasCleftLip(hasCleftLip);
      examStore.setHasCleftPalate(hasCleftPalate);
      examStore.setCleftAssessment(hasCleftLip || hasCleftPalate ? "present" : "absent");
    };
    watch(
      () => formRef.value?.getFormValues?.()?.cleftLipPalateAssessment,
      (selection) => {
        console.log("selection: ", selection);
        deriveCleftState(selection ?? null);
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

const CleftLipPalateForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5d6bdac9"]]);

const _hoisted_1$1 = { class: "congenital-abnormalities-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CongenitalAbnormalitiesForm",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[5].formData;
    const examStore = useNeonatalExamStore();
    const syncFormValues = (values) => {
      if (values.hasCongenitalAbnormalities !== void 0) {
        examStore.setHasCongenitalAbnormalities(values.hasCongenitalAbnormalities === "yes" ? true : values.hasCongenitalAbnormalities === "no" ? false : null);
      }
      if (values.congenitalAbnormalitiesDescription) {
        examStore.setAbnormalitiesNotes(values.congenitalAbnormalitiesDescription);
      }
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

const CongenitalAbnormalitiesForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-83d289a0"]]);

const _hoisted_1 = { class: "general-examination-summary-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeneralExaminationSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalGeneralExaminationSections[6].formData;
    const examStore = useNeonatalExamStore();
    const allExamValues = computed(() => ({
      activityAssessment: examStore.activityAssessment,
      fontanelleAssessment: examStore.fontanelleAssessment,
      massInHeadAssessment: examStore.massInHeadAssessment,
      isBabyYellow: examStore.isBabyYellow ? "yes" : examStore.isBabyYellow === false ? "no" : void 0,
      isBabyPallorPink: examStore.isBabyPallorPink ? "yes" : examStore.isBabyPallorPink === false ? "no" : void 0,
      hasBabyCyanosis: examStore.hasBabyCyanosis ? "yes" : examStore.hasBabyCyanosis === false ? "no" : void 0,
      hasBabyOedema: examStore.hasBabyOedema ? "yes" : examStore.hasBabyOedema === false ? "no" : void 0,
      heartSoundsAssessment: examStore.heartSoundsAssessment,
      femoralPulses: examStore.femoralPulses,
      hasCardiacAbnormality: examStore.hasCardiacAbnormality ? "yes" : examStore.hasCardiacAbnormality === false ? "no" : void 0,
      genitaliaAssessment: examStore.genitaliaAssessment,
      anusPatent: examStore.anusAssessment,
      hasMeconiumPassed: examStore.hasMeconiumPassed ? "yes" : examStore.hasMeconiumPassed === false ? "no" : void 0,
      hasCleftLip: examStore.hasCleftLip ? "yes" : examStore.hasCleftLip === false ? "no" : void 0,
      hasCleftPalate: examStore.hasCleftPalate ? "yes" : examStore.hasCleftPalate === false ? "no" : void 0,
      hasCongenitalAbnormalities: examStore.hasCongenitalAbnormalities ? "yes" : examStore.hasCongenitalAbnormalities === false ? "no" : void 0,
      congenitalAbnormalitiesDescription: examStore.abnormalitiesNotes
    }));
    const summaryFieldConfig = formData.find((field) => field.componentType === "summaryField");
    const summaryRows = computed(() => summaryFieldConfig?.builder ? summaryFieldConfig.builder(allExamValues.value) : []);
    const enrichedFormData = computed(() => {
      return formData.map((field) => {
        if (field.componentType === "summaryField") {
          return {
            ...field,
            builder: void 0,
            summaryRows: summaryRows.value
          };
        }
        return field;
      });
    });
    __expose({
      validateForm: () => null,
      // Summary step has no user-input validation
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: enrichedFormData.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const GeneralExaminationSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7475ebc7"]]);

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
    GeneralExaminationSummary
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const examStore = useNeonatalExamStore();
    const isSaving = ref(false);
    const normalizePatientId = (rawId) => {
      if (rawId === null || rawId === void 0) return null;
      return String(rawId);
    };
    const syncExaminationForm = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      if (patientId) {
        examStore.setCurrentPatientID(patientId);
      }
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
        component: GeneralExaminationSummary
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
            console.log("[GeneralExamination] finish clicked, saving exam");
            console.log("[GeneralExamination] store payload", {
              activityAssessment: examStore.activityAssessment,
              fontanelleAssessment: examStore.fontanelleAssessment,
              massInHeadAssessment: examStore.massInHeadAssessment,
              isBabyYellow: examStore.isBabyYellow,
              isBabyPallorPink: examStore.isBabyPallorPink,
              hasBabyCyanosis: examStore.hasBabyCyanosis,
              hasBabyOedema: examStore.hasBabyOedema,
              heartSoundsAssessment: examStore.heartSoundsAssessment,
              femoralPulses: examStore.femoralPulses,
              hasCardiacAbnormality: examStore.hasCardiacAbnormality,
              genitaliaAssessment: examStore.genitaliaAssessment,
              anusAssessment: examStore.anusAssessment,
              hasMeconiumPassed: examStore.hasMeconiumPassed,
              cleftAssessment: examStore.cleftAssessment,
              hasCleftLip: examStore.hasCleftLip,
              hasCleftPalate: examStore.hasCleftPalate,
              hasCongenitalAbnormalities: examStore.hasCongenitalAbnormalities,
              abnormalitiesNotes: examStore.abnormalitiesNotes
            });
            isSaving.value = true;
            await saveGeneralExamination();
            toastSuccess("General examination saved successfully");
            router.push({ path: "/neonatal/checkpoint" });
            examStore.resetExamData();
          } catch (error) {
            console.error("General examination save failed", error);
            toastDanger("Failed to save general examination. Please try again.");
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
            backUrl: "/patientProfile",
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
const GeneralExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dff41fbe"]]);

export { GeneralExamination as default };
