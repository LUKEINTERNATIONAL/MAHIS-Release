import { c as computed, s as defineComponent, f as ref, w as watch, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, z as createElementBlock, J as Fragment, R as renderList, C as createBaseVNode, H as createCommentVNode, bd as IonCardContent, P as normalizeStyle, D as toDisplayString, aL as useRouter, ct as useRoute, a2 as onMounted, aG as IonContent, bX as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage, ab as checkmarkOutline } from './vendor-CspD6rXI.js';
import { s as storeToRefs } from './pinia-D87PMWkd.js';
import { n as icons, z as StandardForm, F as DynamicButton, C as useExposeFromStandardForm, _ as _export_sfc, bi as useVitalsStore, u as useDemographicsStore, bj as useInvestigationStore, bk as useDiagnosisStore, b2 as useTreatmentPlanStore, be as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, a2 as getFieldValue, H as HisDate, bl as getOfflineSavedUnsavedData, bm as MedicationSelectionHasValues, J as savePatientRecord, bn as resetNCDPatientData, t as toastWarning, aq as ConceptService, G as toastSuccess, bo as useAllegyStore, a6 as useUserStore, S as Service } from '../index-DaHf5ary.js';
import { D as DemographicBar } from './DemographicBar-BdCPKJxm.js';
import { _ as _sfc_main$4 } from './Medications.vue_vue_type_script_setup_true_lang-DELAJNJo.js';
import { _ as _sfc_main$3, u as useFormWizard } from './useFormWizard-Wd1mC6Hy.js';
import { u as useComplicationsStore } from './ComplicationsStore-Do3MLzKS.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-BT0FNGLQ.js';
import { s as stageAllergies } from './treatment-BMizv0Ch.js';
import { l as lodashExports } from './lodash-DxB12a18.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-Df81axkh.js';
import { u as usePatientProfile } from './usePatientProfile-DnVXRNmI.js';

const airwayOptions = [
  { id: "POSITIONING", name: "Positioning" },
  { id: "C_SPINE_STABILIZATION", name: "C-Spine Stabilization" },
  { id: "SUCTIONING", name: "Suctioning" },
  { id: "FOREIGN_BODY_REMOVAL", name: "Foreign body removal" },
  { id: "INSERTION_OF_GUEDEL", name: 'Insertion of airway "Guedel"' },
  { id: "OTHER_AIRWAY_INTERVENTION", name: "Other" }
];
const breathingOptions = [
  { id: "OXYGEN_GIVEN", name: "Oxygen therapy" },
  { id: "BAG_AND_MASK", name: "Bag and mask" },
  { id: "INTERCOSTAL_DRAINAGE", name: "Intercostal drainage" }
];
const circulationOptions = [
  { id: "INTAKE_FLUIDS", name: "IV fluids" },
  { id: "HEMORRHAGE_CONTROL", name: "Hemorrhage control" },
  { id: "BLOOD_SAMPLE", name: "Blood sample" },
  { id: "CATHETER", name: "Catheter" },
  { id: "TRANSFUSION", name: "Transfusion" },
  { id: "NG_INSERTION", name: "NG Insertion" },
  { id: "SUTURING", name: "Suturing" },
  { id: "KEEP_WARM", name: "Keep warm" }
];
const disabilityOptions = [
  { id: "GLUCOSE_ADMINISTRATION", name: "Blood glucose administration" },
  { id: "SEIZURE_MANAGEMENT", name: "Seizure management" },
  { id: "PAIN_MANAGEMENT", name: "Pain management" },
  { id: "DISABILITY_OTHER", name: "Other (free text)" }
];
const exposureOptions = [
  { id: "WARMING_MEASURES", name: "Warming measures" },
  { id: "COOLING_MEASURES", name: "Cooling measures" },
  { id: "THERMAL_PROTECTION", name: "Thermal protection" },
  { id: "ELECTRICAL_PROTECTION", name: "Electrical protection" },
  { id: "EXPOSURE_OTHER", name: "Other" }
];
const intakeFluidOptions = [
  { id: "IV_FLUID_RL", name: "IV Fluids - Ringers Lactate" },
  { id: "IV_FLUID_SALINE_5", name: "IV Fluids - Saline 5%" },
  { id: "IV_FLUID_SALINE_3", name: "IV Fluids - Saline 3%" },
  { id: "IV_FLUID_SALINE_09", name: "IV Fluids - Saline 0.9%" },
  { id: "IV_FLUID_SALINE_045", name: "IV Fluids - Saline 0.45%" },
  { id: "IV_FLUID_DEXTROSE_10", name: "IV Fluids - Dextrose 10%" },
  { id: "IV_FLUID_DEXTROSE_5", name: "IV Fluids - Dextrose 5%" },
  { id: "IV_FLUID_HAEMACEL", name: "IV Fluids - Haemacel" },
  { id: "BLOOD_WHOLE", name: "Blood products - Whole blood" },
  { id: "BLOOD_PACKED", name: "Blood products - Packed Red cells" },
  { id: "BLOOD_PLATELETS", name: "Blood products - Platelets" },
  { id: "BLOOD_FFP", name: "Blood products - Fresh frozen plasma" },
  { id: "ORAL_WATER", name: "Oral products - Water" },
  { id: "ORAL_JUICE", name: "Oral products - Juice" },
  { id: "ORAL_ORS", name: "Oral products - ORS" }
];
const outputFluidOptions = [
  { id: "Urine", name: "Urine" },
  { id: "Stool", name: "Stool" },
  { id: "Nasal gastric tube drainage", name: "Nasal gastric tube drainage" },
  { id: "Vomitting", name: "Vomitting" },
  { id: "Insensible loss", name: "Insensible loss" }
];
const calculateBalance = (allValues) => {
  const intake = parseFloat(allValues?.intake_fluid_amount) || 0;
  const output = parseFloat(allValues?.output_fluid_amount) || 0;
  return (intake - output).toString();
};
const useInterventionsForm = () => {
  const interventionsFormSection = computed(() => {
    return [
      {
        componentType: "multiSelectInputField",
        header: "Airway intervention(s)",
        name: "airway_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: airwayOptions,
        onChange: (value) => {
          const hasOther = Array.isArray(value) && value.some((item) => item?.id === "OTHER_AIRWAY_INTERVENTION");
          if (!hasOther) {
            return { airway_interventions_other: "" };
          }
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Please specify",
        name: "airway_interventions_other",
        placeholder: "Please specify",
        condition: (values) => {
          const selected = values?.airway_interventions || [];
          return Array.isArray(selected) && selected.some((item) => item?.id === "OTHER_AIRWAY_INTERVENTION");
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Breathing intervention(s)",
        name: "breathing_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: breathingOptions
      },
      {
        componentType: "multiSelectInputField",
        header: "Circulation intervention(s)",
        name: "circulation_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: circulationOptions
      },
      {
        componentType: "multiSelectInputField",
        header: "Disability intervention(s)",
        name: "disability_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: disabilityOptions,
        onChange: (value) => {
          const hasOther = Array.isArray(value) && value.some((item) => item?.name === "Other (free text)");
          if (!hasOther) {
            return { disability_interventions_other: "" };
          }
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Please specify",
        name: "disability_interventions_other",
        placeholder: "Please specify",
        condition: (values) => {
          const selected = values?.disability_interventions || [];
          return Array.isArray(selected) && selected.some((item) => item?.name === "Other (free text)");
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Exposure intervention(s)",
        name: "exposure_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: exposureOptions,
        onChange: (value) => {
          const hasOther = Array.isArray(value) && value.some((item) => item?.name === "Other");
          if (!hasOther) {
            return { exposure_interventions_other: "" };
          }
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Please specify",
        name: "exposure_interventions_other",
        placeholder: "Please specify",
        condition: (values) => {
          const selected = values?.exposure_interventions || [];
          return Array.isArray(selected) && selected.some((item) => item?.name === "Other");
        }
      }
    ];
  });
  const createFluidEntryForm = () => {
    return [
      {
        componentType: "multiSelectInputField",
        header: "Intake Fluid Type",
        name: "intake_fluid_type",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        grid: { s: "12", m: "4" },
        options: intakeFluidOptions
      },
      {
        componentType: "inputField",
        header: "Intake Fluid Amount",
        name: "intake_fluid_amount",
        type: "number",
        unit: "ml",
        grid: { s: "12", m: "4" },
        onChange: (_value, allValues) => {
          return { fluid_balance: calculateBalance(allValues) };
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Output Fluid Type",
        name: "output_fluid_type",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        grid: { s: "12", m: "4" },
        options: outputFluidOptions
      },
      {
        componentType: "inputField",
        header: "Output Fluid Amount",
        name: "output_fluid_amount",
        type: "number",
        unit: "ml",
        grid: { s: "12", m: "4" },
        onChange: (_value, allValues) => {
          return { fluid_balance: calculateBalance(allValues) };
        }
      },
      {
        componentType: "inputField",
        header: "Fluid Balance",
        name: "fluid_balance",
        type: "number",
        unit: "ml",
        disabled: true,
        grid: { s: "12", m: "4" }
      }
    ];
  };
  return {
    interventionsFormSection,
    createFluidEntryForm,
    circulationOptions
  };
};

const _hoisted_1$2 = {
  key: 0,
  class: "fluids-section"
};
const _hoisted_2$1 = { class: "fluid-actions" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Interventions",
  setup(__props) {
    const { interventionsFormSection, createFluidEntryForm } = useInterventionsForm();
    const interventionsForm = interventionsFormSection;
    const { formRef, currentFormValues } = useExposeFromStandardForm();
    const fluidEntries = ref([
      { id: 0, form: createFluidEntryForm() }
    ]);
    const nextFluidId = ref(1);
    const showFluids = computed(() => {
      const selected = currentFormValues.value?.circulation_interventions || [];
      return Array.isArray(selected) && selected.some((item) => item?.name === "IV fluids");
    });
    watch(
      showFluids,
      (isShown) => {
        if (!isShown) {
          fluidEntries.value = [{ id: 0, form: createFluidEntryForm() }];
          nextFluidId.value = 1;
        }
      },
      { immediate: true }
    );
    const addFluidEntry = () => {
      fluidEntries.value.push({ id: nextFluidId.value++, form: createFluidEntryForm() });
    };
    const removeFluidEntry = (index) => {
      if (fluidEntries.value.length > 1) {
        fluidEntries.value.splice(index, 1);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(interventionsForm),
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"]),
              showFluids.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(fluidEntries.value, (entry, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: entry.id,
                    class: "fluid-entry"
                  }, [
                    createVNode(StandardForm, {
                      formData: entry.form
                    }, null, 8, ["formData"]),
                    createBaseVNode("div", _hoisted_2$1, [
                      createVNode(DynamicButton, {
                        onClick: ($event) => removeFluidEntry(index),
                        fill: "clear",
                        icon: unref(icons).minus,
                        disabled: fluidEntries.value.length === 1
                      }, null, 8, ["onClick", "icon", "disabled"]),
                      index === fluidEntries.value.length - 1 ? (openBlock(), createBlock(DynamicButton, {
                        key: 0,
                        onClick: _cache[0] || (_cache[0] = ($event) => addFluidEntry()),
                        fill: "clear",
                        icon: unref(icons).plus
                      }, null, 8, ["icon"])) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Interventions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7161c4ab"]]);

const useObservationsForm = () => {
  const observationFormSection = computed(() => {
    return [
      {
        componentType: "inputField",
        header: "Oxygen Saturation (O2 Sat)",
        name: "oxygen_saturation",
        type: "number",
        unit: "%",
        grid: { s: "12", m: "6" }
      },
      {
        componentType: "inputField",
        header: "Respiratory Rate (RR)",
        name: "respiratory_rate",
        type: "number",
        unit: "bs/m",
        grid: { s: "12", m: "6" }
      },
      {
        componentType: "inputField",
        header: "Heart Rate (HR)",
        name: "heart_rate",
        type: "number",
        unit: "bpm",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Blood Pressure Systolic",
        name: "blood_pressure_systolic",
        type: "number",
        unit: "mmHg",
        grid: { s: "12", m: "6" }
      },
      {
        componentType: "inputField",
        header: "Blood Pressure Diastolic",
        name: "blood_pressure_diastolic",
        type: "number",
        unit: "mmHg",
        grid: { s: "12", m: "6" }
      },
      {
        componentType: "inputField",
        header: "Temperature (Temp)",
        name: "temperature",
        type: "number",
        unit: "°C",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Random Blood Glucose (RBG)",
        name: "random_blood_glucose",
        type: "number",
        placeholder: "e.g., 50",
        unitOptions: [
          { label: "mmol/l", value: "mmol/l" },
          { label: "mg/dl", value: "mg/dl" }
        ],
        unitPlaceholder: "Unit",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Urine Dipstick - Ketones",
        name: "urine_dipstick_ketones",
        grid: { s: "12" }
      },
      {
        componentType: "multiSelectInputField",
        header: "AVPU Scale",
        name: "avpu_scale",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        options: [
          { id: "Alert", name: "Alert" },
          { id: "Verbal", name: "Verbal" },
          { id: "Pain", name: "Pain" },
          { id: "Unresponsive", name: "Unresponsive" }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Peak Expiratory Flow Rate (PEFR)",
        name: "peak_expiratory_flow_rate",
        type: "number",
        unit: "L/min",
        grid: { s: "12" }
      }
    ];
  });
  return {
    observationFormSection
  };
};

const _hoisted_1$1 = { class: "triage-score" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Observations",
  setup(__props) {
    const { observationFormSection } = useObservationsForm();
    const observationForm = observationFormSection;
    const { formRef, currentFormValues } = useExposeFromStandardForm();
    const triageScores = ["Emergency", "Priority", "Queue"];
    const triageDisplay = ref("No Score");
    const triageBackground = computed(() => {
      switch (triageDisplay.value) {
        case triageScores[0]:
          return "#FECDCA";
        case triageScores[1]:
          return "#FEDF89";
        case triageScores[2]:
          return "#DDEEDD";
        default:
          return "#FFFFFF";
      }
    });
    const parseNumeric = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      const numericValue = parseFloat(String(value));
      return Number.isNaN(numericValue) ? null : numericValue;
    };
    const calculateTriageScore = (value, type, allValues) => {
      const numericalValue = parseNumeric(value) ?? 0;
      let score = triageScores[2];
      switch (type) {
        case "oxygen_saturation":
          if (numericalValue < 90) score = triageScores[0];
          if (numericalValue >= 90 && numericalValue < 94) score = triageScores[1];
          if (numericalValue >= 94) score = triageScores[2];
          break;
        case "heart_rate":
          if (numericalValue < 40 || numericalValue > 129) score = triageScores[0];
          if (numericalValue >= 40 && numericalValue <= 59 || numericalValue >= 101 && numericalValue <= 129) {
            score = triageScores[1];
          }
          if (numericalValue >= 60 && numericalValue <= 100) score = triageScores[2];
          break;
        case "blood_pressure_systolic":
          if (numericalValue > 200 || numericalValue < 80) return triageScores[0];
          if (numericalValue >= 80 && numericalValue <= 89 || numericalValue >= 150 && numericalValue <= 200) {
            return triageScores[1];
          }
          if (numericalValue >= 90 || numericalValue > 89 && numericalValue <= 149) return triageScores[2];
          break;
        case "blood_pressure_diastolic":
          if (numericalValue > 119) score = triageScores[0];
          if (numericalValue >= 100 && numericalValue <= 119) score = triageScores[1];
          if (numericalValue < 100) score = triageScores[2];
          break;
        case "respiratory_rate":
          if (numericalValue > 30) return triageScores[0];
          if (numericalValue < 8) return triageScores[0];
          if (numericalValue >= 21 && numericalValue <= 30) return triageScores[1];
          if (numericalValue >= 8 && numericalValue <= 11) return triageScores[1];
          if (numericalValue >= 12 && numericalValue <= 20) return triageScores[2];
          break;
        case "temperature":
          if (numericalValue < 34) return triageScores[0];
          if (numericalValue > 39.9) return triageScores[0];
          if (numericalValue >= 37.5 && numericalValue <= 39.9) return triageScores[1];
          if (numericalValue >= 34.1 && numericalValue <= 35.4) return triageScores[1];
          if (numericalValue >= 35.5 && numericalValue <= 37.4) return triageScores[2];
          break;
        case "random_blood_glucose": {
          const m = 18.018;
          const unit = allValues["random_blood_glucose_unit"];
          if (unit === "mg/dl") {
            if (numericalValue < 3 * m || numericalValue > 30 * m) return triageScores[0];
            if (numericalValue >= 3.1 * m && numericalValue <= 3.8 * m || numericalValue > 11.1 * m && numericalValue <= 29.9 * m) {
              return triageScores[1];
            }
            if (numericalValue >= 3.9 * m && numericalValue <= 11.1 * m) return triageScores[2];
          }
          if (unit === "mmol/l") {
            if (numericalValue < 3 || numericalValue > 30) return triageScores[0];
            if (numericalValue >= 3.1 && numericalValue <= 3.8 || numericalValue > 11.1 && numericalValue <= 29.9) {
              return triageScores[1];
            }
            if (numericalValue >= 3.9 && numericalValue <= 11.1) return triageScores[2];
          }
          break;
        }
        default:
          score = triageScores[2];
      }
      return score;
    };
    watch(
      currentFormValues,
      (values) => {
        let maxScore = "No Score";
        const newScores = {};
        const trackFields = [
          "oxygen_saturation",
          "respiratory_rate",
          "heart_rate",
          "blood_pressure_systolic",
          "blood_pressure_diastolic",
          "temperature",
          "random_blood_glucose"
        ];
        trackFields.forEach((key) => {
          const value = values?.[key];
          if (value !== void 0 && value !== null && value !== "") {
            const score = calculateTriageScore(value, key, values || {});
            newScores[key] = score;
            maxScore = score;
          }
        });
        Object.keys(newScores).forEach((key) => {
          if (newScores[key] === triageScores[0]) {
            maxScore = triageScores[0];
          }
          if (newScores[key] === triageScores[1] && maxScore !== triageScores[0]) {
            maxScore = triageScores[1];
          }
        });
        triageDisplay.value = maxScore;
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                _cache[0] || (_cache[0] = createBaseVNode("p", { class: "triage-label" }, "Triage Score", -1)),
                createBaseVNode("div", {
                  class: "triage-value",
                  style: normalizeStyle({ backgroundColor: triageBackground.value })
                }, toDisplayString(triageDisplay.value), 5)
              ]),
              createVNode(StandardForm, {
                formData: unref(observationForm),
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Observations = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69182d1d"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MonitoringChart",
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    usePatientProfile();
    const router = useRouter();
    const route = useRoute();
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
    const vitalsStore = useVitalsStore();
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useDiagnosisStore();
    useTreatmentPlanStore();
    const ncdMedicationsStore = useNCDMedicationsStore();
    const generalStore = useGeneralStore();
    useOutcomeStore();
    const enrollmentStore = useEnrollementStore();
    const complicationsStore = useComplicationsStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { diagnosis } = storeToRefs(diagnosisStore);
    const { substance } = storeToRefs(enrollmentStore);
    const { selectedNCDMedicationList } = storeToRefs(ncdMedicationsStore);
    const { FootScreening, visualScreening, cvScreening } = storeToRefs(complicationsStore);
    const { sessionDate } = storeToRefs(configStore);
    const { apiStatus } = storeToRefs(useStatusStore());
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
        if (newOptions.disabled !== oldOptions?.disabled) {
          console.log(`Done button ${newOptions.disabled ? "disabled" : "enabled"}`);
        }
        if (newOptions.text !== oldOptions?.text) {
          console.log(`Done button text changed from "${oldOptions?.text}" to "${newOptions.text}"`);
        }
      },
      { deep: true }
    );
    watch(isSaving, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        console.log(`Saving state changed: ${oldValue} -> ${newValue}`);
        if (newValue) {
          console.log("Starting save process...");
        } else {
          console.log("Save process completed");
        }
      }
    });
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const openBackController = () => {
      router.push("/patient-profile");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Observations",
          icon: ""
        },
        {
          title: "Interventions",
          icon: ""
        },
        {
          title: "Medications",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const vitalsRef = ref(null);
    const riskAssessmentRef = ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Observations":
          return "Observations";
        case "Interventions":
          return "Interventions";
        case "Medications":
          return "Medications";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Observations":
                return "Observations";
              case "Interventions":
                return "Interventions";
              case "Medications":
                return "Medications";
            }
          }
          return null;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const cleanVitalForm = () => {
      const vitals2 = useVitalsStore();
      vitals2.setVitals(vitals2.getInitialVitals(patient.value.ID));
    };
    const markWizard = async () => {
      const sessionD = getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      const vitalsData = getOfflineSavedUnsavedData("vitals");
      for (let i = 0; i < tabs.value.length; i++) {
        const tab = tabs.value[i];
        if (tab.title === "Vital Signs") {
          tabs.value[i].icon = isDateInArray(sessionD, vitalsData) ? checkmarkOutline : "";
        } else if (tab.title === "Risk Assessment") {
          const substanceAbuseData = getOfflineSavedUnsavedData("substanceAbuse");
          tabs.value[i].icon = isDateInArray(sessionD, substanceAbuseData) ? checkmarkOutline : "";
        } else if (tab.title === "Investigations") {
          const labOrders = patient?.value?.labOrders?.saved;
          const filteredArray = labOrders?.filter((obj) => {
            return HisDate.toStandardHisFormat(sessionD) === HisDate.toStandardHisFormat(obj.order_date);
          });
          tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
        } else if (tab.title === "Diagnosis") {
          const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
          tabs.value[i].icon = isDateInArray(sessionD, diagnosisData) ? checkmarkOutline : "";
        } else if (tab.title === "Complications Screening") {
          const screeningData = getOfflineSavedUnsavedData("screening");
          tabs.value[i].icon = isDateInArray(sessionD, screeningData) ? checkmarkOutline : "";
        } else if (tab.title === "Treatment Plan") {
          if (selectedNCDMedicationList.value.length > 0) {
            tabs.value[i].icon = MedicationSelectionHasValues() ? checkmarkOutline : "";
          } else {
            tabs.value[i].icon = "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, diagnosisArray) => {
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return diagnosisArray.some((diagnosis2) => {
        const obsDate = new Date(diagnosis2.obs_datetime);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveComplications = async () => {
      const data = [];
      const childDataVisualScreening = await formatInputFiledData(visualScreening.value);
      const childDataFootScreening = await formatGroupRadioButtonData(FootScreening.value);
      const childDataCVRisk = await formatInputFiledData(cvScreening.value);
      if (childDataVisualScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Visual acuity", true),
          value_text: "visual acuity test",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataVisualScreening
        });
      }
      if (childDataFootScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Foot check", true),
          value_text: "foot screening",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataFootScreening
        });
      }
      if (childDataCVRisk.length > 0) {
        data.push(...childDataCVRisk);
      }
      if (data.length > 0) {
        (patient.value.screening ??= {}).unsaved ??= [];
        patient.value.screening.unsaved.push(...data);
        toastSuccess("Complications saved successfully");
      } else {
        toastWarning("No complications data to save");
      }
    };
    const saveTreatmentPlan = async () => {
      const allergyStore = useAllegyStore();
      if (!lodashExports.isEmpty(allergyStore.selectedMedicalAllergiesList)) {
        const userStore = useUserStore();
        const allergies = allergyStore.selectedMedicalAllergiesList.map((allergy) => ({
          concept_id: allergy.concept_id,
          obs_datetime: Service.getSessionDate(),
          value_coded: allergy.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: allergy.name
        }));
        const patientData2 = await stageAllergies(allergies);
        patient.value = Object.assign(patient.value, patientData2);
        console.log("Allergies staged successfully:", patient.value);
        allergyStore.clearSelectedMedicalAllergiesList();
      }
      const m_patientData = await createNCDDrugOrder();
      patient.value = Object.assign(patient.value, m_patientData);
      const patientData = await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      patient.value = Object.assign(patient.value, patientData);
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "Risk Assessment") {
        riskAssessmentRef.value?.onSubmit();
      }
      if (value == "Complications Screening") {
        await saveComplications();
      }
      if (value == "Treatment Plan") {
        await saveTreatmentPlan();
      }
      await savePatientRecord(patient.value);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await resetNCDPatientData();
        await savePatientRecord(patient.value);
        router.push("/aetc/triage-list");
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    onMounted(async () => {
      if (generalStore.NCDActivities.length === 0) {
        router.push("/patient-profile");
        return;
      }
      const data = useComplicationsStore();
      data.resetScreening();
      tabs.value = getActiveTabs();
      await markWizard();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      vitals,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        const data = useComplicationsStore();
        data.resetScreening();
        await markWizard();
      },
      { deep: true }
    );
    watch(
      sessionDate,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      investigations,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      diagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      substance,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedNCDMedicationList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        refreshWizard();
        cleanVitalForm();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (old, newData) => {
        if (old.ID != newData.ID) {
          refreshWizard();
          cleanVitalForm();
        }
      },
      { deep: true }
    );
    __expose({
      saveData,
      markWizard,
      refreshWizard,
      validateDoneButtonState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Monitoring Chart",
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
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Observations, { ref: "observationsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Observations"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Interventions, { ref: "interventionsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Interventions"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$4, { ref: "medicationsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Medications"]
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

export { _sfc_main as default };
