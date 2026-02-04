import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed, w as watch, F as unref, z as createElementBlock, H as createCommentVNode, A as createVNode, B as withCtx, bK as IonCard, J as Fragment, bF as IonModal, I as IonHeader, aD as IonToolbar, aE as IonTitle, C as createBaseVNode, L as IonIcon, eO as eggOutline, a5 as createTextVNode, D as toDisplayString, be as IonButtons, N as IonButton, G as closeCircleOutline, a7 as IonLabel, aG as IonContent, bf as IonFooter, bH as saveOutline, R as renderList, a4 as normalizeClass, cn as checkmarkCircle, e3 as createOutline, bG as addOutline, a2 as onMounted, aL as useRouter, bX as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-BO7XRaEo.js';
import { z as StandardForm, x as toastDanger, K as ObservationService, b as EncounterTypeId, G as toastSuccess, n as icons, u as useDemographicsStore, _ as _export_sfc, F as DynamicButton, C as useExposeFromStandardForm, S as Service, J as savePatientRecord, t as toastWarning, y as StandardValidations, T as Toolbar } from '../index-CZRYL9l5.js';
import { D as DemographicBar } from './DemographicBar-Bdnpqc2M.js';
import { _ as _sfc_main$i } from './Wizard.vue_vue_type_script_setup_true_lang-BgfxEUP5.js';
import { u as useFormWizard } from './useFormWizard-CjJpk2ML.js';
import { V as Vitals } from './Vitals-DkN0mZ3b.js';
import { d as defineStore, s as storeToRefs } from './pinia-BoqbyD4X.js';
import { _ as _sfc_main$h } from './LevelOfConsciousness.vue_vue_type_script_setup_true_lang-BQo_FJ7L.js';

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "breastExaminationsResults",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const breastFindingsKeys = [
      "No breast exam conducted",
      "Normal breast exam result",
      "Bleeding",
      "Nodule",
      "Rapid breathing",
      "Discharge",
      "Flushing",
      "Local pain",
      "Increased temperature",
      "Breast",
      "Tenderness",
      "Other findings"
    ];
    const validateAtLeastOne = (value, allFormValues) => {
      const hasSelection = breastFindingsKeys.some((key) => allFormValues[key] === true);
      return hasSelection ? null : "Please select at least one result";
    };
    const breastExaminationsResults = computed(() => {
      return [
        {
          name: "No breast exam conducted",
          label: "No breast exam conducted",
          type: "single",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          validation: validateAtLeastOne,
          onChange: (value) => {
            if (value) {
              const updates = {};
              breastFindingsKeys.filter((k) => k !== "No breast exam conducted").forEach((k) => updates[k] = false);
              updates["Other general exam findings"] = "";
              return updates;
            }
          }
        },
        {
          name: "Normal breast exam result",
          label: "Normal breast exam result",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (value) => {
            if (value) {
              const updates = { "No breast exam conducted": false };
              breastFindingsKeys.slice(2).forEach((k) => updates[k] = false);
              updates["Other general exam findings"] = "";
              return updates;
            }
          }
        },
        {
          name: "Bleeding",
          label: "Bleeding",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Nodule",
          label: "Nodule",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Rapid breathing",
          label: "Rapid breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Discharge",
          label: "Discharge",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Flushing",
          label: "Flushing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Local pain",
          label: "Local pain",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Increased temperature",
          label: "Increased temperature",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Breast",
          label: "Breast",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Tenderness",
          label: "Tenderness",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (val) => val ? { "No breast exam conducted": false, "Normal breast exam result": false } : {}
        },
        {
          name: "Other findings",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Other findings",
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (value) => {
            const updates = value ? { "No breast exam conducted": false, "Normal breast exam result": false } : { "Other general exam findings": "" };
            return updates;
          }
        },
        {
          header: "Other general exam findings",
          name: "Other general exam findings",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true,
          validation: (val, allVals) => allVals["Other findings"] && !val ? "Please specify other findings" : null
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please select the breast examination results.");
        return;
      }
      const formValues = formRef.value.getFormValues();
      try {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Breast examinations results saved successfully");
      } catch (e) {
        toastDanger("Error saving breast examination results");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Breast examinations results",
        formData: breastExaminationsResults.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const useVaginalInspectionStore = defineStore("vaginalInspectionStore", {
  state: () => ({
    formData: {},
    currentPatientID: null
  }),
  actions: {
    setFormData(data) {
      this.formData = { ...this.formData, ...data };
    },
    setCurrentPatientID(patientID) {
      if (patientID && this.currentPatientID !== patientID) {
        this.resetFormData();
        this.currentPatientID = patientID;
      }
    },
    resetFormData() {
      this.formData = {};
    }
  },
  persist: true
});

const syncChildUIs = (refs, data) => {
  if (!refs || !data) return;
  Object.entries(data).forEach(([key, value]) => {
    const fieldRef = refs.get(key);
    if (fieldRef && typeof fieldRef.setValue === "function") {
      fieldRef.setValue(value);
    }
  });
};

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "vaginalInspection",
  setup(__props, { expose: __expose }) {
    const inspectionStore = useVaginalInspectionStore();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const formKey = ref(0);
    const formRef = ref(null);
    const handleFieldChange = (event) => {
      inspectionStore.setFormData({ [event.fieldName]: event.value });
    };
    const handleFormReady = (refs) => {
      syncChildUIs(refs, inspectionStore.formData);
    };
    watch(
      () => patient.value?.patientID,
      (newID) => {
        if (newID) inspectionStore.setCurrentPatientID(newID);
      },
      { immediate: true }
    );
    const inspectionKeys = [
      "No vaginal inspection done",
      "Nothing abnormal observed",
      "Abnormal discharge",
      "Papules",
      "Ulcers",
      "Warts",
      "Vesicles",
      "Bleeding",
      "Genital pain",
      "Other findings"
    ];
    const validateAtLeastOne = (value, allFormValues) => {
      const hasSelection = inspectionKeys.some((key) => allFormValues[key] === true);
      return hasSelection ? null : "Please select at least one inspection result";
    };
    const vaginalInspection = computed(() => {
      return [
        {
          name: "No vaginal inspection done",
          label: "No vaginal inspection done",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (value) => {
            if (value) {
              const updates = {};
              inspectionKeys.filter((k) => k !== "No vaginal inspection done").forEach((k) => updates[k] = false);
              updates["Amniotic fluid level"] = "";
              return updates;
            }
          }
        },
        {
          name: "Nothing abnormal observed",
          label: "Nothing abnormal observed",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (value) => {
            if (value) {
              const updates = { "No vaginal inspection done": false };
              inspectionKeys.slice(2).forEach((k) => updates[k] = false);
              return updates;
            }
          }
        },
        // Mapping the rest of the keys
        ...inspectionKeys.slice(2, 9).map((key) => ({
          name: key,
          label: key,
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (value) => {
            if (value) return { "No vaginal inspection done": false, "Nothing abnormal observed": false };
          }
        })),
        {
          name: "Other findings",
          label: "Other findings",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOne,
          onChange: (value) => {
            const updates = {};
            if (value) {
              updates["No vaginal inspection done"] = false;
              updates["Nothing abnormal observed"] = false;
            } else {
              updates["Other general exam findings"] = "";
            }
            return updates;
          }
        },
        {
          header: "Other general exam findings",
          name: "Other general exam findings",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true,
          validation: (val, allVals) => allVals["Other findings"] && !val ? "Please specify other findings" : null
        },
        {
          name: "Amniotic fluid level",
          label: "Amniotic fluid level",
          header: "Amniotic fluid level",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          validation: (value, allFormValues) => {
            if (allFormValues["No vaginal inspection done"] === true) return null;
            if (!value || value.trim() === "") return "Amniotic fluid level assessment is required";
            return null;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please complete the required inspection findings.");
        return;
      }
      const formValues = formRef.value.getFormValues();
      try {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.VAGINAL_EXAMINATION);
        formRef.value.resetForm();
        inspectionStore.resetFormData();
        toastSuccess("Vaginal inspection saved successfully");
      } catch (e) {
        toastDanger("An error occurred during save.");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Vaginal inspection",
        formData: vaginalInspection.value,
        allFormValues: unref(inspectionStore).formData,
        onFieldChanged: handleFieldChange,
        onReady: handleFormReady,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData", "allFormValues"]);
    };
  }
});

const _hoisted_1$8 = { key: 0 };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "vaginalExaminationDone",
  setup(__props, { expose: __expose }) {
    const inspectionStore = useVaginalInspectionStore();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const formKey = ref(0);
    const formRef = ref(null);
    const showForm = computed(() => {
      return inspectionStore.formData["No vaginal inspection done"] !== true;
    });
    const handleFieldChange = (event) => {
      inspectionStore.setFormData({ [event.fieldName]: event.value });
    };
    const handleFormReady = (refs) => {
      syncChildUIs(refs, inspectionStore.formData);
    };
    watch(
      () => patient.value?.patientID,
      (newID) => {
        if (newID) inspectionStore.setCurrentPatientID(newID);
      },
      { immediate: true }
    );
    const isPallorPresent = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Is vaginal examination done?",
          header: "Is vaginal examination done?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (value) => !value ? "Please specify if the exam was done" : null,
          onChange: (value) => {
            if (value === "No") {
              return {
                "Digital": false,
                "Speculum": false,
                "Digital examination findings notes": "",
                "Speculum examination findings notes": ""
              };
            }
          }
        },
        {
          name: "Digital",
          label: "Digital",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Is vaginal examination done?"] === "Yes",
          validation: (value, allFormValues) => {
            if (allFormValues["Is vaginal examination done?"] === "Yes" && !allFormValues["Digital"] && !allFormValues["Speculum"]) {
              return "Select at least one exam type";
            }
            return null;
          }
        },
        {
          header: "Digital examination findings notes",
          name: "Digital examination findings notes",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Digital"] === true && allFormValues["Is vaginal examination done?"] === "Yes",
          validation: (value, allFormValues) => {
            if (allFormValues["Digital"] === true && !value) return "Findings are required for digital exam";
            return null;
          }
        },
        {
          name: "Speculum",
          label: "Speculum",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Is vaginal examination done?"] === "Yes"
        },
        {
          header: "Speculum examination findings notes",
          name: "Speculum examination findings notes",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Speculum"] === true && allFormValues["Is vaginal examination done?"] === "Yes",
          validation: (value, allFormValues) => {
            if (allFormValues["Speculum"] === true && !value) return "Findings are required for speculum exam";
            return null;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!showForm.value) return;
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please complete all required fields and findings.");
        return;
      }
      const formValues = formRef.value.getFormValues() || {};
      try {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.VAGINAL_EXAMINATION);
        formRef.value.resetForm();
        inspectionStore.resetFormData();
        toastSuccess("Vaginal examination saved successfully");
      } catch (error) {
        toastDanger("Failed to save data");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return showForm.value ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
        (openBlock(), createBlock(StandardForm, {
          subtitle: "Is vaginal examination done",
          formData: isPallorPresent.value,
          allFormValues: unref(inspectionStore).formData,
          onFieldChanged: handleFieldChange,
          onReady: handleFormReady,
          key: formKey.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "allFormValues"]))
      ])) : createCommentVNode("", true);
    };
  }
});

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MaternalExam",
  setup(__props, { expose: __expose }) {
    const inspectionStore = useVaginalInspectionStore();
    const breastExaminationsResultsRef = ref(null);
    const vaginalInspection2Ref = ref(null);
    const vaginalExaminationDoneRef = ref(null);
    const showVaginalExam = computed(() => {
      return inspectionStore.formData["No vaginal inspection done"] !== true;
    });
    const onSubmit = async () => {
      try {
        const results = [
          await breastExaminationsResultsRef.value?.onSubmit?.(),
          await vaginalInspection2Ref.value?.onSubmit?.()
        ];
        if (showVaginalExam.value) {
          results.push(await vaginalExaminationDoneRef.value?.onSubmit?.());
        }
        const filteredResults = results.filter((result) => result !== void 0);
        return filteredResults.length === 0 || filteredResults.every((result) => result === true);
      } catch (error) {
        console.error("Error in MaternalExam onSubmit:", error);
        return false;
      }
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$g, {
              ref_key: "breastExaminationsResultsRef",
              ref: breastExaminationsResultsRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$f, {
              ref_key: "vaginalInspection2Ref",
              ref: vaginalInspection2Ref
            }, null, 512)
          ]),
          _: 1
        }),
        showVaginalExam.value ? (openBlock(), createBlock(unref(IonCard), {
          key: 0,
          class: "m-card"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$e, {
              ref_key: "vaginalExaminationDoneRef",
              ref: vaginalExaminationDoneRef
            }, null, 512)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});

const MaternalExam = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-bfa114fe"]]);

const isOpen = ref(false);
const selectedFetusNumber = ref(null);
function useFetalDetails() {
  const openFetalModal = (fetusNum) => {
    selectedFetusNumber.value = fetusNum;
    isOpen.value = true;
  };
  const saveAndClose = async (addFetusRef) => {
    if (addFetusRef && typeof addFetusRef.caputreCurrentFetalAssessment === "function") {
      const data = await addFetusRef.caputreCurrentFetalAssessment();
      if (data) {
        console.log("Data saved successfully");
        isOpen.value = false;
        selectedFetusNumber.value = null;
      }
    }
  };
  const resetModalState = () => {
    isOpen.value = false;
    selectedFetusNumber.value = null;
  };
  return {
    isOpen,
    selectedFetusNumber,
    openFetalModal,
    saveAndClose,
    resetModalState
  };
}

const useFetalAssessmentStore = defineStore("fetalAssessmentStore", {
  state: () => ({
    mainFormData: {},
    totalFetuses: 0,
    fetalData: {},
    validatedFetalObsData: {},
    current_patient_ID: null
  }),
  actions: {
    setMainFormData(data) {
      this.mainFormData = { ...this.mainFormData, ...data };
    },
    setFetusData(fetusNum, data) {
      if (!this.fetalData[fetusNum]) this.fetalData[fetusNum] = {};
      this.fetalData[fetusNum] = { ...this.fetalData[fetusNum], ...data };
    },
    setTotalFetuses(count) {
      this.totalFetuses = count;
      Object.keys(this.fetalData).forEach((key) => {
        if (parseInt(key) > count) delete this.fetalData[parseInt(key)];
      });
      Object.keys(this.validatedFetalObsData).forEach((key) => {
        if (parseInt(key) > count) delete this.validatedFetalObsData[parseInt(key)];
      });
    },
    setValidatedFetalData(fetusNum, obsArray) {
      this.validatedFetalObsData[fetusNum] = obsArray;
    },
    setCurrentPatientID(patientID) {
      if (this.current_patient_ID !== patientID) {
        this.current_patient_ID = patientID;
        this.resetStore();
      }
    },
    resetStore() {
      this.mainFormData = {};
      this.fetalData = {};
      this.validatedFetalObsData = {};
      this.totalFetuses = 0;
    }
  },
  persist: true
});

const _hoisted_1$7 = { class: "add-fetus-container" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "addFetus",
  props: {
    fetus_number: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const fetalStore = useFetalAssessmentStore();
    const subtitle = computed(() => {
      return `Capturing clinical data for Fetus #${props.fetus_number}`;
    });
    const currentFetusValues = computed(() => {
      return fetalStore.fetalData[props.fetus_number] || {};
    });
    const handleFieldChange = (event) => {
      fetalStore.setFetusData(props.fetus_number, { [event.fieldName]: event.value });
    };
    const handleFormReady = (refs) => {
      syncChildUIs(refs, currentFetusValues.value);
    };
    const validateFetalRate = (val) => {
      const num = parseFloat(val);
      if (isNaN(num)) return "Must be a valid number";
      if (num < 110 || num > 160) return "Warning: Rate is outside normal range (110-160 BPM)";
      return null;
    };
    const fetusDataForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Fetal heartbeat present?",
          name: "Fetal heartbeat present?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "Fetal heartbeat status is required" : null,
          onChange: (value) => {
            if (value === "No") {
              return {
                "Fetal rate": "",
                "Repeated fetal rate": "",
                "Fetal heart rate regularity": "",
                "Select fetal presentation": "",
                "specify the Fetal presentation": ""
              };
            }
          }
        },
        {
          name: "Fetal rate",
          header: "Fetal rate",
          componentType: "inputField",
          obsValueType: "value_numeric",
          icon: icons.pulse,
          unit: "BPM",
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes",
          validation: (val, allVals) => {
            if (allVals["Fetal heartbeat present?"] === "Yes") {
              if (!val) return "Initial fetal rate is required";
              return validateFetalRate(val);
            }
            return null;
          }
        },
        {
          name: "Repeated fetal rate",
          header: "Repeated fetal rate",
          componentType: "inputField",
          obsValueType: "value_numeric",
          unit: "BPM",
          icon: icons.pulse,
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes",
          validation: (val) => {
            if (val && val.trim() !== "") {
              return validateFetalRate(val);
            }
            return null;
          }
        },
        {
          componentType: "radioButtonField",
          header: "Fetal heart rate regularity",
          name: "Fetal heart rate regularity",
          obsValueType: "value_coded",
          options: [
            { label: "Regular", value: "Regular" },
            { label: "Irregular", value: "Irregular" }
          ],
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes",
          validation: (val, allVals) => allVals["Fetal heartbeat present?"] === "Yes" && !val ? "Regularity is required" : null
        },
        {
          componentType: "radioButtonField",
          header: "Select fetal presentation",
          name: "Select fetal presentation",
          grid: { s: "12" },
          obsValueType: "value_coded",
          options: [
            { label: "Unknown presentation", value: "Unknown presentation" },
            { label: "Cephalic", value: "Cephalic" },
            { label: "Pelvic", value: "Pelvic" },
            { label: "Transverse", value: "Transverse" },
            { label: "Breech", value: "Breech" },
            { label: "Other", value: "Other" }
          ],
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes",
          validation: (val, allVals) => allVals["Fetal heartbeat present?"] === "Yes" && !val ? "Presentation is required" : null
        },
        {
          name: "specify the Fetal presentation",
          header: "Specify Other Presentation",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Select fetal presentation"] === "Other" && allFormValues["Fetal heartbeat present?"] === "Yes",
          validation: (val, allVals) => allVals["Select fetal presentation"] === "Other" && !val ? "Please specify presentation" : null
        }
      ];
    });
    const caputreCurrentFetalAssessment = async () => {
      try {
        const errors = formRef.value?.validateForm();
        if (errors) {
          toastDanger(`Validation failed for Fetus #${props.fetus_number}.`);
          return false;
        }
        const formValues = formRef.value?.getFormValues() || {};
        if (formValues["Fetal heartbeat present?"]) {
          const assessmentObs = await ObservationService.buildObsValues(formValues);
          fetalStore.setValidatedFetalData(props.fetus_number, assessmentObs);
          return true;
        }
        return false;
      } catch (error) {
        toastDanger("Error capturing fetal assessment data");
        return false;
      }
    };
    __expose({
      caputreCurrentFetalAssessment
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        (openBlock(), createBlock(StandardForm, {
          subtitle: subtitle.value,
          formData: fetusDataForm.value,
          allFormValues: currentFetusValues.value,
          onFieldChanged: handleFieldChange,
          onReady: handleFormReady,
          key: __props.fetus_number,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["subtitle", "formData", "allFormValues"]))
      ]);
    };
  }
});

const _hoisted_1$6 = { class: "header-content" };
const _hoisted_2$3 = { class: "header-text" };
const _hoisted_3$1 = {
  key: 0,
  class: "details-container"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "FetusModal",
  setup(__props) {
    const { isOpen, selectedFetusNumber, saveAndClose, resetModalState } = useFetalDetails();
    const addFetusRef = ref(null);
    const handleSave = () => {
      saveAndClose(addFetusRef.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonModal), {
        "is-open": unref(isOpen),
        "show-backdrop": true,
        onDidDismiss: unref(resetModalState),
        "keyboard-close": false,
        class: "fetal-details-modal"
      }, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), { color: "light" }, {
                default: withCtx(() => [
                  createVNode(unref(IonTitle), { slot: "start" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1$6, [
                        createVNode(unref(IonIcon), {
                          icon: unref(eggOutline),
                          class: "header-icon"
                        }, null, 8, ["icon"]),
                        createBaseVNode("span", _hoisted_2$3, [
                          _cache[0] || (_cache[0] = createTextVNode("Fetal Details: ", -1)),
                          createBaseVNode("b", null, "Fetus " + toDisplayString(unref(selectedFetusNumber)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonButtons), {
                    slot: "end",
                    style: { "margin-right": "18px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        onClick: unref(resetModalState),
                        color: "danger",
                        fill: "solid"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(closeCircleOutline),
                            slot: "start"
                          }, null, 8, ["icon"]),
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[1] || (_cache[1] = [
                              createTextVNode("Close", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              unref(selectedFetusNumber) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createVNode(_sfc_main$c, {
                  fetus_number: unref(selectedFetusNumber),
                  ref_key: "addFetusRef",
                  ref: addFetusRef
                }, null, 8, ["fetus_number"])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), { class: "ion-no-border" }, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonButtons), {
                    slot: "end",
                    style: { "margin-right": "18px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        expand: "block",
                        onClick: handleSave,
                        color: "primary",
                        fill: "solid"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(saveOutline),
                            slot: "start"
                          }, null, 8, ["icon"]),
                          _cache[2] || (_cache[2] = createTextVNode(" Save Details ", -1))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["is-open", "onDidDismiss"]);
    };
  }
});

const FetusModal = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-a2a0422e"]]);

const _hoisted_1$5 = {
  key: 0,
  class: "selector-wrapper"
};
const _hoisted_2$2 = { class: "chips-container" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  key: 0,
  class: "button-list-grid"
};
const _hoisted_5 = { class: "fetus-status-icon" };
const _hoisted_6 = { class: "fetus-info" };
const _hoisted_7 = { class: "fetus-number" };
const _hoisted_8 = { class: "status-text" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FetusSelector",
  props: {
    showSelector: { type: Boolean }
  },
  setup(__props) {
    const fetalStore = useFetalAssessmentStore();
    const { openFetalModal } = useFetalDetails();
    const numFetuses = computed({
      get: () => fetalStore.totalFetuses,
      set: (val) => {
        if (val !== null) {
          fetalStore.setTotalFetuses(val);
        }
      }
    });
    const handleSelection = (num) => {
      numFetuses.value = num;
    };
    const hasData = (fetusNum) => {
      const validatedData = fetalStore.validatedFetalObsData[fetusNum];
      return Array.isArray(validatedData) && validatedData.length > 0;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.showSelector ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "fetal-header" }, "Number of Fetuses *", -1)),
          createBaseVNode("div", _hoisted_2$2, [
            (openBlock(), createElementBlock(Fragment, null, renderList(8, (num) => {
              return createBaseVNode("div", {
                key: num,
                class: normalizeClass(["fetal-chip", { "active-chip": numFetuses.value === num }]),
                onClick: ($event) => handleSelection(num)
              }, toDisplayString(num), 11, _hoisted_3);
            }), 64))
          ]),
          numFetuses.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(numFetuses.value, (fetusNum) => {
              return openBlock(), createElementBlock("div", {
                key: fetusNum,
                class: normalizeClass(["fetus-action-item", { "has-data": hasData(fetusNum) }])
              }, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(unref(IonIcon), {
                    icon: hasData(fetusNum) ? unref(checkmarkCircle) : unref(eggOutline)
                  }, null, 8, ["icon"])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("span", _hoisted_7, "Fetus " + toDisplayString(fetusNum), 1),
                  createBaseVNode("span", _hoisted_8, toDisplayString(hasData(fetusNum) ? "Assessment Saved" : "Needs Assessment"), 1)
                ]),
                createVNode(DynamicButton, {
                  name: hasData(fetusNum) ? "Update" : "Add",
                  icon: hasData(fetusNum) ? unref(createOutline) : unref(addOutline),
                  iconSlot: "start",
                  iconFont: "18px",
                  fill: "solid",
                  size: "small",
                  color: hasData(fetusNum) ? "success" : "primary",
                  "onClicked:btn": ($event) => unref(openFetalModal)(fetusNum),
                  style: { "height": "33px" }
                }, null, 8, ["name", "icon", "color", "onClicked:btn"])
              ], 2);
            }), 128))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(FetusModal)
      ], 64);
    };
  }
});

const FetusSelector = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-10b5a9e9"]]);

const _hoisted_1$4 = { style: { "padding": "20px" } };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FetalAssessmentResults",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const { formRef } = useExposeFromStandardForm();
    const fetalStore = useFetalAssessmentStore();
    const handleFieldChange = (event) => {
      fetalStore.setMainFormData({ [event.fieldName]: event.value });
    };
    const handleFormReady = (refs) => {
      syncChildUIs(refs, fetalStore.mainFormData);
    };
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value,
      (newPatient, oldPatient) => {
        if (newPatient?.patientID !== oldPatient?.patientID) {
          fetalStore.setCurrentPatientID(newPatient?.patientID);
        }
      },
      { deep: true, immediate: true }
    );
    const isNumberKnown = computed(() => {
      return fetalStore.mainFormData?.["Number of fetuses known"] === "Yes";
    });
    const fetalAssessmentSchema = computed(() => {
      return [
        {
          name: "Symphysis-fundal height",
          header: "Symphysis-fundal height (SFH)",
          componentType: "inputField",
          obsValueType: "value_numeric",
          icon: icons.height,
          unit: "cm",
          eventType: "number",
          validation: (value) => {
            if (!value) return "SFH is required";
            const sfh = parseFloat(value);
            if (isNaN(sfh)) return "Invalid number";
            if (sfh < 10 || sfh > 50) return "Value out of physiological range (10-50cm)";
            return null;
          }
        },
        {
          name: "Number of fetuses known",
          header: "Is number of fetuses known?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value) => {
            if (value === "No") {
              fetalStore.setTotalFetuses(0);
              return { "Number of fetuses": "" };
            }
          },
          validation: (value) => {
            if (!value) return "Please select an option";
            return null;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please correct the highlighted errors before saving.");
        return;
      }
      if (isNumberKnown.value && fetalStore.totalFetuses > 0) {
        const completed = Object.keys(fetalStore.fetalData).length;
        if (completed < fetalStore.totalFetuses) {
          toastDanger(`Please complete assessment for all ${fetalStore.totalFetuses} fetuses.`);
          return;
        }
      }
      const allFetuses = fetalStore.validatedFetalObsData;
      const formValues = fetalStore.mainFormData;
      try {
        const assessmentObs = await ObservationService.buildObsValues(formValues);
        const knownFetusCountObsversation = {
          "concept_name": "Number of fetuses",
          "value_numeric": fetalStore.totalFetuses,
          "obs_datetime": Service.getSessionDate(),
          "location_id": Service.getUserLocationId()
        };
        Object.entries(allFetuses || {}).forEach(([key, fetus]) => {
          const fetusObs = {
            "concept_name": "Register Number",
            "value_text": key,
            "obs_datetime": Service.getSessionDate(),
            "location_id": Service.getUserLocationId(),
            child: fetus
          };
          assessmentObs?.push(fetusObs);
        });
        assessmentObs?.push(knownFetusCountObsversation);
        const savedEncounter = await ObservationService.addObsToEncounterPatient(assessmentObs, EncounterTypeId.ASSESSMENT);
        await savePatientRecord(savedEncounter);
        fetalStore.resetStore();
        formRef.value.resetForm();
        toastSuccess("Fetal Assessment saved successfully");
      } catch (e) {
        console.error(e);
        toastDanger("An error occurred while saving the record.");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        (openBlock(), createBlock(StandardForm, {
          subtitle: "Fetal assessment results",
          formData: fetalAssessmentSchema.value,
          allFormValues: unref(fetalStore).mainFormData,
          onFieldChanged: handleFieldChange,
          onReady: handleFormReady,
          key: formKey.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "allFormValues"])),
        isNumberKnown.value ? (openBlock(), createBlock(FetusSelector, {
          key: 0,
          showSelector: isNumberKnown.value,
          style: { "margin-top": "20px" }
        }, null, 8, ["showSelector"])) : createCommentVNode("", true)
      ]);
    };
  }
});

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AbdominalExamination",
  setup(__props, { expose: __expose }) {
    const fetalAssessmentRef = ref(null);
    const onSubmit = async () => {
      await fetalAssessmentRef.value?.onSubmit();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), { class: "m-card" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$9, {
            ref_key: "fetalAssessmentRef",
            ref: fetalAssessmentRef
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
});

const useIPVStore = defineStore("ipvStore", {
  state: () => ({
    // Stores all form field values
    formData: {},
    // Track the specific patient this data belongs to
    current_patient_ID: null
  }),
  actions: {
    /**
     * Updates specific fields in the store without overwriting
     * existing unrelated fields.
     */
    setFormData(data) {
      this.formData = { ...this.formData, ...data };
    },
    /**
     * Updates the patient ID context for the IPV assessment.
     */
    setCurrentPatientID(patientID) {
      if (this.current_patient_ID !== patientID) {
        this.current_patient_ID = patientID;
        this.resetFormData();
      }
    },
    /**
     * Clears all stored IPV data (useful after successful submission)
     */
    resetFormData() {
      this.formData = {};
      this.current_patient_ID = null;
    },
    /**
     * Returns the current form data
     */
    getFormData() {
      return this.formData;
    }
  },
  // Enables automatic persistence
  persist: true
});

const _hoisted_1$3 = { style: { "padding": "20px" } };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PresentingSigns",
  setup(__props, { expose: __expose }) {
    const ipvStore = useIPVStore();
    const formKey = ref(0);
    const formRef = ref(null);
    const handleFieldChange = (event) => {
      ipvStore.setFormData({ [event.fieldName]: event.value });
    };
    const handleFormReady = (refs) => {
      syncChildUIs(refs, ipvStore.formData);
    };
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value,
      (newPatient, oldPatient) => {
        if (newPatient?.patientID !== oldPatient?.patientID) {
          ipvStore.setCurrentPatientID(newPatient?.patientID);
        }
      },
      { deep: true, immediate: true }
    );
    const violenceKeys = [
      "Physical violence",
      "Sexual violence",
      "Psychological/emotional abuse",
      "Physiological violence",
      "Stalking",
      "Other"
    ];
    const validateViolenceType = (value, allFormValues) => {
      if (allFormValues["Has the woman been subjected to any form of violence?"] === "Yes") {
        const hasSelection = violenceKeys.some((key) => allFormValues[key] === true);
        return hasSelection ? null : "Please select at least one type of violence";
      }
      return null;
    };
    const presentingSignsOrConditionsForIPV = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Is the abdomen shiny?",
          name: "Is the abdomen shiny?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "This field is required" : null,
          onChange: (value) => {
            if (value === "No") {
              return { "Is there traumatic injury to abdomen": "", "Specify the injury": "" };
            }
          }
        },
        {
          componentType: "radioButtonField",
          header: "Is there traumatic injury to abdomen?",
          name: "Is there traumatic injury to abdomen",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Is the abdomen shiny?"] === "Yes",
          validation: (val, allVals) => allVals["Is the abdomen shiny?"] === "Yes" && !val ? "Required" : null,
          onChange: (value) => {
            if (value === "No") {
              return { "Specify the injury": "" };
            }
          }
        },
        {
          header: "Specify the injury",
          name: "Specify the injury",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Is there traumatic injury to abdomen"] === "Yes" && allFormValues["Is the abdomen shiny?"] === "Yes",
          validation: (val, allVals) => allVals["Is there traumatic injury to abdomen"] === "Yes" && !val ? "Please specify the injury" : null
        },
        {
          name: "Any other clinical enquiry done?",
          componentType: "radioButtonField",
          header: "Any other clinical enquiry done?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "This field is required" : null,
          onChange: (value) => {
            if (value === "No") {
              return { "Specify the clinical enquiry provided": "" };
            }
          }
        },
        {
          header: "Specify the clinical enquiry provided",
          name: "Specify the clinical enquiry provided",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any other clinical enquiry done?"] === "Yes",
          validation: (val, allVals) => allVals["Any other clinical enquiry done?"] === "Yes" && !val ? "Please specify details" : null
        },
        {
          name: "Has the woman been subjected to any form of violence?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          header: "Has the woman been subjected to any form of violence?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "Violence screening is required" : null,
          onChange: (value) => {
            if (value === "No") {
              const updates = {};
              violenceKeys.forEach((k) => updates[k] = false);
              updates["Violence by other family members (specify)"] = "";
              return updates;
            }
          }
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          name: "Physical violence",
          grid: { s: "5" },
          label: "Physical violence",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          validation: validateViolenceType
        },
        {
          name: "Sexual violence",
          grid: { s: "5" },
          label: "Sexual violence",
          obsValueType: "value_coded",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          validation: validateViolenceType
        },
        {
          name: "Psychological/emotional abuse",
          grid: { s: "5" },
          label: "Psychological/emotional abuse",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          validation: validateViolenceType
        },
        {
          name: "Physiological violence",
          grid: { s: "5" },
          label: "Physiological violence",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          validation: validateViolenceType
        },
        {
          name: "Stalking",
          grid: { s: "5" },
          label: "Stalking",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          validation: validateViolenceType
        },
        {
          name: "Other",
          grid: { s: "5" },
          label: "Other",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          validation: validateViolenceType,
          onChange: (value) => {
            if (!value) {
              return { "Violence by other family members (specify)": "" };
            }
          }
        },
        {
          header: "Violence by other family members (specify)",
          name: "Violence by other family members (specify)",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other"] === true,
          validation: (val, allVals) => allVals["Other"] === true && !val ? "Please specify other family members" : null
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please complete the required screening and IPV fields.");
        return;
      }
      const formValues = formRef.value.getFormValues() || {};
      try {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        ipvStore.resetFormData();
        toastSuccess("Presenting Signs and IPV screening saved successfully");
      } catch (e) {
        toastDanger("An error occurred while saving the examination results.");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            (openBlock(), createBlock(StandardForm, {
              formData: presentingSignsOrConditionsForIPV.value,
              allFormValues: unref(ipvStore).formData,
              onFieldChanged: handleFieldChange,
              onReady: handleFormReady,
              key: formKey.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData", "allFormValues"]))
          ])
        ]),
        _: 1
      });
    };
  }
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "IsPallorPresent",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const isPallorPresent = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Is pallor present?",
          header: "Is pallor present?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "Please specify if pallor is present" : null,
          onChange: (value) => {
            if (value === "No") {
              return { "Any action taken?": "", "Action on pallor": "" };
            }
          }
        },
        {
          name: "Any action taken?",
          componentType: "radioButtonField",
          header: "Any action taken?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Is pallor present?"] === "Yes",
          validation: (val, allFormValues) => {
            if (allFormValues["Is pallor present?"] === "Yes" && !val) {
              return "Please specify if any action was taken";
            }
            return null;
          },
          onChange: (value) => {
            if (value === "No") {
              return { "Action on pallor": "" };
            }
          }
        },
        {
          header: "Specify the action taken",
          name: "Action on pallor",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any action taken?"] === "Yes" && allFormValues["Is pallor present?"] === "Yes",
          validation: (val, allFormValues) => {
            if (allFormValues["Any action taken?"] === "Yes" && !val) {
              return "Please describe the action taken";
            }
            return null;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const errors = formRef.value?.validateForm();
      if (errors) {
        toastDanger("Please complete the required fields for pallor assessment.");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      if (formValues["Is pallor present?"]) {
        try {
          await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
          formRef.value.resetForm();
          toastSuccess("Pallor assessment saved successfully");
        } catch (e) {
          toastDanger("An error occurred while saving");
        }
      } else {
        toastWarning("No pallor assessment data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Is pallor present",
        formData: isPallorPresent.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "oedemaPresent",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const oedemaPresense = computed(() => {
      return [
        {
          name: "Is oedema present?",
          header: "Is oedema present?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "Oedema assessment is required" : null,
          onChange: (value) => {
            if (value === "No") {
              return {
                "Select the type of Oedema the woman has?": "",
                "Severity of Oedema?": ""
              };
            }
          }
        },
        {
          name: "Select the type of Oedema the woman has?",
          header: "Select the type of Oedema the woman has?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "pitting ankle oedema", value: "pitting ankle oedema" },
            { label: "leg swelling", value: "leg swelling" },
            { label: "oedema of the hands and feet", value: "oedema of the hands and feet" },
            { label: "pitting lower back oedema", value: "pitting lower back oedema" },
            { label: "Facial oedema", value: "Facial oedema" },
            { label: "General body oedema", value: "General body oedema" }
          ],
          condition: (allFormValues) => allFormValues["Is oedema present?"] === "Yes",
          validation: (val, allVals) => allVals["Is oedema present?"] === "Yes" && !val ? "Please select the type" : null
        },
        {
          name: "Severity of Oedema?",
          header: "Severity of Oedema?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "+", value: "+" },
            { label: "++", value: "++" },
            { label: "+++", value: "+++" },
            { label: "++++", value: "++++" }
          ],
          condition: (allFormValues) => allFormValues["Is oedema present?"] === "Yes",
          validation: (val, allVals) => allVals["Is oedema present?"] === "Yes" && !val ? "Please select severity" : null
        },
        {
          name: "Varicose Veins Present",
          header: "Varicose Veins Present",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "Varicose veins assessment is required" : null
        },
        {
          name: "Any deformities present?",
          header: "Any deformities present?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "Deformity assessment is required" : null,
          onChange: (value) => {
            if (value === "No") return { "Specify the deformity": "" };
          }
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Any deformities present?"] === "Yes"
        },
        {
          name: "Specify the deformity",
          header: "Specify the deformity",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any deformities present?"] === "Yes",
          validation: (val, allVals) => allVals["Any deformities present?"] === "Yes" && !val ? "Specification is required" : null
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please complete all required extremity findings.");
        return;
      }
      const formValues = formRef.value.getFormValues() || {};
      try {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Extremities data saved successfully");
      } catch (e) {
        toastDanger("An error occurred while saving extremities data");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Extremities",
        formData: oedemaPresense.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$2 = { class: "tb-button-container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "respiratoryExamFindings",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const primaryFindingKeys = [
      "Cough",
      "Rapid breathing",
      "Slow breathing",
      "Wheezing",
      "Rales",
      "Respiratory distress",
      "Other findings"
    ];
    const validateAtLeastOneFinding = (value, allFormValues) => {
      const hasSelection = primaryFindingKeys.some((key) => allFormValues[key] === true);
      return hasSelection ? null : "Please select at least one respiratory finding";
    };
    const handleTBTesting = (values) => {
      console.log("Patient referred for TB testing with values:", values);
      alert("Referral for TB Testing has been recorded.");
    };
    const respiatoryExamFindings = computed(() => {
      return [
        {
          name: "Cough",
          label: "Cough",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOneFinding,
          onChange: (value) => {
            if (!value) {
              return {
                "Duration of cough": "",
                "Weight loss": "",
                "Fever": "",
                "Cough type": "",
                "Night sweats": ""
              };
            }
          }
        },
        {
          name: "Rapid breathing",
          label: "Rapid breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOneFinding
        },
        {
          name: "Slow breathing",
          label: "Slow breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOneFinding
        },
        {
          name: "Wheezing",
          label: "Wheezing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOneFinding
        },
        {
          name: "Rales",
          label: "Rales",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOneFinding
        },
        {
          name: "Respiratory distress",
          label: "Respiratory distress",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOneFinding
        },
        {
          name: "Other findings",
          label: "Other findings",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          validation: validateAtLeastOneFinding,
          onChange: (value) => {
            if (!value) return { "Specify other respiratory findings": "" };
          }
        },
        {
          header: "Specify other respiratory findings",
          name: "Specify other respiratory findings",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true,
          validation: (val, allVals) => allVals["Other findings"] && !val ? "Please specify other findings" : null
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "TB Screening",
          header: "TB Screening",
          componentType: "Heading",
          grid: { s: "12" },
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          componentType: "inputField",
          name: "Duration of cough",
          header: "Duration of cough",
          obsValueType: "value_coded",
          icon: icons.edit,
          unitOptions: [
            { label: "Days", value: "Days" },
            { label: "Weeks", value: "Weeks" },
            { label: "Months", value: "Months" },
            { label: "Years", value: "Years" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true,
          validation: (val, allVals) => {
            if (allVals["Cough"] === true) {
              return StandardValidations.isNotEmptyandNumber(val);
            }
            return null;
          }
        },
        {
          name: "Weight loss",
          header: "Weight loss",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [{ label: "Yes", value: "Yes" }, { label: "No", value: "No" }],
          condition: (allFormValues) => allFormValues["Cough"] === true,
          validation: (val, allVals) => allVals["Cough"] === true && !val ? "Required" : null
        },
        {
          name: "Fever",
          header: "Fever",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [{ label: "Yes", value: "Yes" }, { label: "No", value: "No" }],
          condition: (allFormValues) => allFormValues["Cough"] === true,
          validation: (val, allVals) => allVals["Cough"] === true && !val ? "Required" : null
        },
        {
          name: "Cough type",
          header: "Cough type",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [{ label: "Dry", value: "Dry" }, { label: "Productive", value: "Productive" }],
          condition: (allFormValues) => allFormValues["Cough"] === true,
          validation: (val, allVals) => allVals["Cough"] === true && !val ? "Required" : null
        },
        {
          name: "Night sweats",
          header: "Night sweats",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [{ label: "Yes", value: "Yes" }, { label: "No", value: "No" }],
          condition: (allFormValues) => allFormValues["Cough"] === true,
          validation: (val, allVals) => allVals["Cough"] === true && !val ? "Required" : null
        },
        {
          componentType: "Dashes",
          condition: (vals) => vals["Cough"] === true
        },
        {
          name: "tb_referral_slot",
          componentType: "Slot",
          slotName: "tb_button_slot",
          grid: { s: "12" },
          condition: (vals) => {
            return vals["Weight loss"] === "Yes" || vals["Fever"] === "Yes" || vals["Night sweats"] === "Yes" || vals["Cough"] === true;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please complete all required respiratory findings and TB screening.");
        return;
      }
      const formValues = formRef.value.getFormValues() || {};
      try {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Respiratory Exam Findings saved successfully");
      } catch (e) {
        toastDanger("Failed to save respiratory exam data");
      }
    };
    __expose({ onSubmit });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Respiratory exam findings",
        formData: respiatoryExamFindings.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, {
        tb_button_slot: withCtx(({ formValues }) => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(unref(IonButton), {
              expand: "block",
              color: "warning",
              onClick: ($event) => handleTBTesting(formValues)
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode(" Send for TB testing ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      }, 8, ["formData"]);
    };
  }
});

const respiratoryExamFindings = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-9cd61362"]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Appearance",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const appearanceDataForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Kempt",
          header: "Kempt",
          required: true,
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: (val) => !val ? "Kempt status is required" : null
        },
        {
          name: "Gait",
          componentType: "radioButtonField",
          header: "Gait",
          required: true,
          obsValueType: "value_coded",
          options: [
            { label: "Normal", value: "Normal" },
            { label: "Abnormal", value: "Abnormal" }
          ],
          validation: (val) => !val ? "Gait assessment is required" : null
        },
        {
          name: "Nutritional status",
          componentType: "radioButtonField",
          header: "Nutritional status",
          obsValueType: "value_coded",
          required: true,
          options: [
            { label: "Well Nourished", value: "Well Nourished" },
            { label: "Malnourished", value: "Malnourished" }
          ],
          validation: (val) => !val ? "Nutritional status is required" : null
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const errors = formRef.value.validateForm();
      if (errors) {
        toastDanger("Please complete all appearance assessment fields.");
        return;
      }
      const formValues = formRef.value.getFormValues();
      if (Object.keys(formValues).length > 0) {
        try {
          await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
          formRef.value.resetForm();
          toastSuccess("Appearance saved successfully");
        } catch (e) {
          toastDanger("Failed to save appearance data");
        }
      } else {
        toastWarning("No appearance data to save");
      }
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Appearance",
        formData: appearanceDataForm.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$1 = { class: "warning-title" };
const _hoisted_2$1 = { class: "warning-message" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MUAC",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const getMuacStatus = (value) => {
      const muac = parseFloat(value);
      if (!muac || isNaN(muac)) return { class: "", label: "", color: "", message: "" };
      if (muac < 18) {
        return {
          class: "status-red",
          label: "Severe (Red)",
          color: "#ffcdd2",
          message: "Refer for nutritional management"
        };
      } else if (muac >= 18 && muac <= 21) {
        return {
          class: "status-yellow",
          label: "Moderate (Yellow)",
          color: "#fff9c4",
          message: "Refer for nutritional management"
        };
      } else {
        return {
          class: "status-green",
          label: "Normal (Green)",
          color: "#c8e6c9",
          message: "Patient is well nourished"
        };
      }
    };
    const MUACFormData = computed(() => {
      return [
        {
          name: "MUAC",
          header: "MUAC - Number",
          componentType: "inputField",
          icon: icons.height,
          obsValueType: "value_numeric",
          unit: "cm",
          eventType: "number",
          // Integrated validation function
          validation: (value) => {
            if (!value) return "MUAC value is required";
            const muac = parseFloat(value);
            if (isNaN(muac)) return "Please enter a valid number";
            if (muac < 5 || muac > 60) return "Value outside physiological range";
            return null;
          },
          onChange: (value) => {
            if (value && isNaN(Number(value))) {
              toastWarning("Invalid input: Please enter a numeric value only", 1500);
              return { "MUAC": "", backgroundColor: "" };
            }
            const status = getMuacStatus(value);
            return { backgroundColor: status.color };
          }
        },
        {
          name: "muac_alert_container",
          componentType: "Slot",
          slotName: "muac_warning_slot",
          grid: { s: "12" },
          condition: (vals) => {
            const muac = parseFloat(vals["MUAC"]);
            return !isNaN(muac) && muac > 0;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const errors = formRef.value.validateForm();
      const formValues = formRef.value.getFormValues();
      if (!errors && formValues["MUAC"]) {
        try {
          await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
          toastSuccess("MUAC assessment saved successfully");
          formRef.value.resetForm();
        } catch (e) {
          toastDanger("An error occurred while saving");
        }
      } else {
        toastDanger("Please enter a valid MUAC measurement before saving");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Mid-Upper Arm Circumference (MUAC)",
        formData: MUACFormData.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, {
        muac_warning_slot: withCtx(({ formValues }) => [
          createBaseVNode("div", {
            class: normalizeClass(["muac-warning-box", getMuacStatus(formValues["MUAC"]).class])
          }, [
            createBaseVNode("div", _hoisted_1$1, " Nutritional Status: " + toDisplayString(getMuacStatus(formValues["MUAC"]).label), 1),
            createBaseVNode("div", _hoisted_2$1, toDisplayString(getMuacStatus(formValues["MUAC"]).message), 1)
          ], 2)
        ]),
        _: 1
      }, 8, ["formData"]);
    };
  }
});

const MUAC = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-48844676"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeneralExamination",
  setup(__props, { expose: __expose }) {
    const levelOfConsciousnessRef = ref(null);
    const MUACref = ref(null);
    const apperanceRef = ref(null);
    const respiratoryExamFindingsRef = ref(null);
    const isPallorPresentRef = ref(null);
    const oedemaPresentRef = ref(null);
    onMounted(() => {
    });
    const onSubmit = () => {
      try {
        const results = [
          levelOfConsciousnessRef.value?.onSubmit?.(),
          MUACref.value?.onSubmit?.(),
          apperanceRef.value?.onSubmit?.(),
          respiratoryExamFindingsRef.value?.onSubmit?.(),
          isPallorPresentRef.value?.onSubmit?.(),
          oedemaPresentRef.value?.onSubmit?.()
        ].filter((result) => result !== void 0);
        return results.length === 0 || results.every((result) => result === true);
      } catch (error) {
        console.error("Error in GeneralExamination onSubmit:", error);
        return false;
      }
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$h, {
              ref_key: "levelOfConsciousnessRef",
              ref: levelOfConsciousnessRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              ref_key: "apperanceRef",
              ref: apperanceRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(MUAC, {
              ref_key: "MUACref",
              ref: MUACref
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(respiratoryExamFindings, {
              ref_key: "respiratoryExamFindingsRef",
              ref: respiratoryExamFindingsRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6, {
              ref_key: "isPallorPresentRef",
              ref: isPallorPresentRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$5, {
              ref_key: "oedemaPresentRef",
              ref: oedemaPresentRef
            }, null, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const GeneralExamination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7feebc28"]]);

const _hoisted_1 = {
  style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" },
  class: "p-container"
};
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PhysicalExamination",
  setup(__props) {
    const router = useRouter();
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    const vitalsRef = ref(null);
    const MaternalExamRef = ref(null);
    const AbdominalExaminationRef = ref(null);
    const PresentingSignsRef = ref(null);
    const GeneralExaminationRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Vital Signs":
          return "Vitals";
        case "General Examination":
          return "GeneralExamination";
        case "Maternal Exam":
          return "MaternalExam";
        case "Abdominal examination":
          return "AbdominalExamination";
        case "Presenting signs for IPV":
          return "PresentingSigns";
        default:
          return null;
      }
    };
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const getActiveTabs = () => {
      return [
        {
          title: "Vital Signs",
          icon: ""
        },
        {
          title: "General Examination",
          icon: ""
        },
        {
          title: "Maternal Exam",
          icon: ""
        },
        {
          title: "Abdominal examination",
          icon: ""
        },
        {
          title: "Presenting signs for IPV",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const openBackController = () => {
      router.push("/anc/home");
    };
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        await vitalsRef.value?.onSubmit();
      }
      if (value == "General Examination") {
        console.log("General Examination: ", GeneralExaminationRef.value);
        await GeneralExaminationRef.value?.onSubmit();
      }
      if (value == "Maternal Exam") {
        MaternalExamRef.value?.onSubmit();
      }
      if (value == "Abdominal examination") {
        AbdominalExaminationRef.value?.onSubmit();
      }
      if (value == "Presenting signs for IPV") {
        PresentingSignsRef.value?.onSubmit();
      }
      await savePatientRecord(patient.value);
    };
    onMounted(async () => {
      tabs.value = getActiveTabs();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await savePatientRecord(patient.value);
        openBackController();
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
      await savePatientRecord(patient.value);
      openBackController();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$i, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Physical examination",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to Contact",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Vitals, {
                        ref_key: "vitalsRef",
                        ref: vitalsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(MaternalExam, {
                        ref_key: "MaternalExamRef",
                        ref: MaternalExamRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "MaternalExam"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$8, {
                        ref_key: "AbdominalExaminationRef",
                        ref: AbdominalExaminationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "AbdominalExamination"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$7, {
                        ref_key: "PresentingSignsRef",
                        ref: PresentingSignsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingSigns"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(GeneralExamination, {
                        ref_key: "GeneralExaminationRef",
                        ref: GeneralExaminationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "GeneralExamination"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PhysicalExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82559350"]]);

export { PhysicalExamination as default };
