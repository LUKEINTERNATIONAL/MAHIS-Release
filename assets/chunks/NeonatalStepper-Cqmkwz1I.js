import { f as ref, c as computed, cI as __vitePreload, s as defineComponent, L as IonIcon, M as IonSpinner, af as IonRow, az as IonCol, bc as IonCardContent, bK as IonCard, N as IonButton, cH as arrowForward, fd as download, h as inject, dx as arrowBack, al as closeOutline, bX as chevronBackOutline, eU as provide, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, z as createElementBlock, J as Fragment, R as renderList, S as withDirectives, a4 as normalizeClass, C as createBaseVNode, D as toDisplayString, H as createCommentVNode, c2 as resolveDynamicComponent, a5 as createTextVNode, T as vShow } from './vendor-Wwszy5sF.js';
import { n as icons, F as DynamicButton, t as toastWarning, k as alertConfirmation, u as useDemographicsStore, o as createModal, _ as _export_sfc } from '../index-8Y6Qmz3g.js';
import { S as SaveProgressModal } from './SaveProgressModal-C6GSwTdc.js';
import { d as defineStore } from './pinia-BYnbfcrK.js';
import { u as useNeonatalEnrollmentStore, n as neonatalEnrollmentFormKey } from './useNeonatalEnrollmentStore-CBDnJxvh.js';
import { I as IMAGES } from './images-C26lwgkD.js';

const useNeonatalTriageStore = defineStore("neonatalTriage", () => {
  const activePatientId = ref(null);
  const formValues = ref({});
  const formCache = ref({});
  function initializeForPatient(patientId) {
    if (patientId == null) {
      activePatientId.value = null;
      formValues.value = {};
      return;
    }
    if (activePatientId.value != null && activePatientId.value !== patientId) {
      saveSnapshot();
    }
    activePatientId.value = patientId;
    const cacheKey = String(patientId);
    const cachedForm = formCache.value[cacheKey];
    if (cachedForm) {
      formValues.value = JSON.parse(JSON.stringify(cachedForm));
    } else {
      formValues.value = {};
    }
  }
  function saveSnapshot() {
    if (activePatientId.value == null) return;
    const cacheKey = String(activePatientId.value);
    formCache.value[cacheKey] = JSON.parse(JSON.stringify(formValues.value));
  }
  function setField(key, value) {
    formValues.value = {
      ...formValues.value,
      [key]: value
    };
    saveSnapshot();
  }
  function patchValues(values) {
    formValues.value = {
      ...formValues.value,
      ...values
    };
    saveSnapshot();
  }
  function replaceValues(values) {
    formValues.value = { ...values };
    saveSnapshot();
  }
  function reset() {
    formValues.value = {};
    saveSnapshot();
  }
  function clearPatient(patientId) {
    delete formCache.value[String(patientId)];
    if (activePatientId.value === patientId) {
      formValues.value = {};
    }
  }
  const crying = computed(() => formValues.value.crying ?? null);
  const breathing = computed(() => formValues.value.breathing ?? null);
  return {
    // state
    activePatientId,
    formValues,
    formCache,
    // actions
    initializeForPatient,
    saveSnapshot,
    setField,
    patchValues,
    replaceValues,
    reset,
    clearPatient,
    // getters
    crying,
    breathing
  };
});

const CRITICAL_BREATHING_VALUES = ["not_breathing", "gasping", "hr_low", "floppy"];
const normalizeBreathing = (value) => (value ?? "").toString().trim().toLowerCase();
const hasBreathingValue = (value, targets) => {
  if (!value) return false;
  if (Array.isArray(value)) {
    return value.some((item) => targets.includes(normalizeBreathing(item)));
  }
  return targets.includes(normalizeBreathing(value));
};
const isCriticalBreathing = (value) => hasBreathingValue(value, CRITICAL_BREATHING_VALUES);
const triageConceptMapping = {
  crying: "Baby crying",
  breathing: "Baby breathing status",
  respiratory_rate: "Respiratory rate",
  heart_rate: "Pulse",
  oxygen_saturation_vital: "Oxygen saturation",
  saturation_in_oxygen: "Oxygen saturation in oxygen",
  temperature: "Temperature (C)",
  can_measure_oxygen_saturation: "Can measure oxygen saturation",
  oxygen_facility_available: "Oxygen available at facility",
  central_cyanosis: "Central cyanosis",
  observations: "Clinical observations",
  present_signs: "Danger signs present",
  current_weight: "Weight (kg)",
  birth_weight: "Birth weight",
  head_circumference: "Head circumference",
  can_measure_temp: "Can measure temperature",
  blood_sugar: "Blood sugar",
  bloodSugar_unit: "Blood sugar unit",
  first_name: "First name",
  last_name: "Last name",
  referral_required: "Referral required",
  referral_notes: "Referral notes",
  referral_facility: "Referral facility",
  transport_method: "Transport method"
};
const randomizeFirstName = (inputValue, event, changeValue) => {
  const random4Digit = Math.floor(1e3 + Math.random() * 9e3);
  changeValue(`neonat-${random4Digit}`);
};
const neonatalTriageSections = [
  {
    title: "Emergency Triage",
    subtitle: "Initial assessment",
    formData: [
      {
        componentType: "listSelectionField",
        name: "crying",
        header: "Is the baby crying?",
        // titleStyle: "tonal",
        titleStyle: "tonal",
        type: "single",
        padding: true,
        allowDeselect: false,
        options: [
          { label: "Yes, baby is crying", value: "yes" },
          { label: "No, the baby is not crying", value: "no" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      },
      {
        componentType: "listSelectionField",
        name: "breathing",
        header: "Is the baby breathing?",
        subtitle: "Check the Airway, Heart Rate and Tone",
        helperText: [
          "Briefly check ABCD:",
          "A: Airway - is the airway open?",
          "B: Breathing - is the baby breathing?",
          "C: Circulation - is heart rate over 100?",
          "D: Disability - how is the tone?"
        ],
        titleStyle: "tonal",
        type: "single",
        padding: true,
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "NOT BREATHING!", value: "not_breathing" },
          { label: "GASPING or irregular breathing", value: "gasping" },
          { label: "Normal breathing but HR < 100", value: "hr_low" },
          { label: "VERY FLOPPY (Normal breathing & HR)", value: "floppy" },
          { label: "Stable", value: "stable" }
        ],
        validation: (value) => !value ? "Please select one option" : null,
        condition: (formValues) => {
          return formValues.crying === "no";
        }
      }
    ]
  },
  {
    title: "Emergency Management 1",
    subtitle: "Immediate intervention required",
    description: "Critical breathing status detected - immediate action needed",
    formData: [
      {
        componentType: "infographicField",
        name: "emergency_management_flow",
        header: "",
        displayMode: "visual",
        padding: true,
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("EmergencyManagement"))
      }
    ],
    skipCondition: (triageData) => {
      triageData.crying === "yes";
      const breathingValue = triageData.breathing;
      const hasCriticalBreathing = isCriticalBreathing(breathingValue);
      return !hasCriticalBreathing;
    }
  },
  {
    title: "Emergency Triage 1",
    subtitle: "emergency triage",
    description: "emergency triage",
    formData: [
      {
        componentType: "infographicField",
        name: "emergency_triage",
        header: "",
        helperText: "You may start measuring the vitals while continuing with the triage since the readings takes a while.",
        displayMode: "visual",
        padding: true,
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("StartMeasuringOxygenSaturation"))
      }
    ]
  },
  {
    title: "Emergency Signs",
    subtitle: "Measure oxygen saturation level",
    formData: [
      {
        componentType: "listSelectionField",
        padding: true,
        name: "observations",
        header: "Can you observe any of the following on the baby?",
        subtitle: "Check the Airway, Heart Rate and Tone.",
        titleStyle: "tonal",
        type: "multiple",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Grunting or Severe chest indrawings", value: "grunting" },
          { label: "Central cyanosis", value: "Central_cyanosis" },
          { label: "Convulsions or twitching", value: "Convulsions_twitching" },
          { label: "None", value: "None" }
        ],
        optionsToDiselectOthersSelections: ["None"],
        validation: (value) => !value ? "Please select one option" : null
      }
    ]
  },
  {
    title: "Emergency Management 2",
    subtitle: "Grunting or severe chest indrawings",
    description: "Critical breathing status detected - immediate action needed",
    formData: [
      {
        componentType: "infographicField",
        name: "emergency_management_severe_chest",
        header: "Severe respiratory distress",
        helperText: "If not already on oxygen",
        displayMode: "visual",
        padding: true,
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("GruntingSevereChestIndrawings"))
      }
    ],
    skipCondition: (triageData) => {
      if (triageData.observations || Array.isArray(triageData.observations)) return !triageData.observations.includes("grunting");
      return true;
    }
  },
  {
    title: "Emergency Management 3",
    subtitle: "Central cyanosis",
    description: "",
    formData: [
      {
        componentType: "infographicField",
        name: "emergency_management_central_cyanosis",
        header: "Central cyanosis",
        displayMode: "visual",
        padding: true,
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("CentralCyanosis"))
      }
    ],
    skipCondition: (triageData) => {
      if (triageData.observations || Array.isArray(triageData.observations)) return !triageData.observations.includes("Central_cyanosis");
      return true;
    }
  },
  {
    title: "Emergency Management 4",
    subtitle: "Cunvalsion or twitching",
    description: "",
    formData: [
      {
        componentType: "infographicField",
        name: "emergency_management_central_cyanosis",
        header: "Convulsions or twitching",
        helperText: "Refer to management of convulsions flow chart on wall",
        displayMode: "visual",
        padding: true,
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("ConsulvionsTwitching"))
      }
    ],
    skipCondition: (triageData) => {
      if (triageData.observations || Array.isArray(triageData.observations)) return !triageData.observations.includes("Convulsions_twitching");
      return true;
    }
  },
  {
    title: "Convulsions/Twitching",
    subtitle: "Neurological assessment",
    formData: [
      {
        componentType: "radioButtonField",
        name: "convulsions",
        header: "Are convulsions or twitching present?",
        type: "standard",
        padding: true,
        allowDeselect: false,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please select one option" : null,
        showClearButton: true
      }
    ],
    // Only show if baby is NOT crying AND has critical breathing
    skipCondition: (triageData) => {
      return true;
    }
  },
  {
    title: "Emergency Observations",
    subtitle: "Can you observe any of the following on the baby?",
    description: "Select all those that are present",
    formData: [
      {
        componentType: "checkboxField",
        name: "emergency_observations",
        header: "Select all those that are present",
        type: "multiple",
        padding: true,
        options: [
          { label: "Grunting or Severe chest indrawing's", value: "grunting_indrawing" },
          { label: "Central cyanosis", value: "central_cyanosis" },
          { label: "Convulsions or twitching", value: "convulsions" },
          { label: "NONE", value: "none" }
        ]
      }
    ],
    skipCondition: (triageData) => {
      return true;
    }
  },
  {
    title: "Emergency Management - Grunting/Indrawing",
    subtitle: "Respiratory distress management",
    description: "Immediate intervention for grunting or severe chest indrawing",
    formData: [
      {
        componentType: "infographicField",
        name: "grunting_indrawing_management",
        header: "Respiratory Distress Management",
        displayMode: "cards",
        padding: true,
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("GruntingIndrawingManagement"))
      }
    ],
    skipCondition: (triageData) => {
      const observations = triageData.emergency_observations;
      if (!observations || !Array.isArray(observations)) return true;
      return !observations.includes("grunting_indrawing");
    }
  },
  {
    title: "Emergency Management - Central Cyanosis",
    subtitle: "Oxygenation emergency management",
    description: "Immediate intervention for central cyanosis",
    formData: [
      {
        componentType: "infographicField",
        name: "central_cyanosis_management",
        header: "Central Cyanosis Management",
        displayMode: "cards",
        padding: true,
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("CentralCyanosisManagement"))
      }
    ],
    skipCondition: (triageData) => {
      const observations = triageData.emergency_observations;
      if (!observations || !Array.isArray(observations)) return true;
      return !observations.includes("central_cyanosis");
    }
  },
  {
    title: "Emergency Management - Convulsions",
    subtitle: "Seizure management",
    description: "Immediate intervention for convulsions or twitching",
    formData: [
      {
        componentType: "infographicField",
        name: "convulsions_management",
        header: "Convulsions Management",
        displayMode: "cards",
        padding: true,
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("ConvulsionsManagement"))
      }
    ],
    skipCondition: (triageData) => {
      const observations = triageData.emergency_observations;
      if (!observations || !Array.isArray(observations)) return true;
      return !observations.includes("convulsions");
    }
  },
  {
    title: "Danger Signs",
    subtitle: "Assess for danger signs",
    description: "Perform physical assessments as shown",
    formData: [
      {
        componentType: "infographicField",
        name: "danger_signs_instructions",
        header: "Physical Assessment Instructions",
        subtitle: "Perform physical assessments as shown",
        displayMode: "visual",
        padding: true,
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("DangerSignsAssessment"))
      }
    ]
  },
  {
    title: "Emergency Signs",
    subtitle: "Identify danger signs present",
    formData: [
      {
        componentType: "listSelectionField",
        name: "present_signs",
        header: "",
        subtitle: "select all that apply",
        titleStyle: "tonal",
        type: "multiple",
        padding: true,
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Trunk feels cold", value: "trunk_cold" },
          { label: "Capillary refill time > 3 seconds", value: "capillary_refill" },
          { label: "Weak femoral or fast femoral pulses", value: "weak_pulse" },
          { label: "None", value: "none" }
        ],
        optionsToDiselectOthersSelections: ["none"],
        validation: (value) => !value ? "Please select one option" : null
      }
    ]
  },
  // Index 14: Trunk Cold / Hypothermia - shown when trunk_cold is selected
  // This comes first when multiple selections are made
  {
    title: "Emergency Management",
    subtitle: "Temperature management required",
    description: "Baby's trunk is cold - immediate warming needed",
    formData: [
      {
        componentType: "infographicField",
        name: "trunk_cold_warning",
        header: "",
        subtitle: "",
        helperText: "Mild Hypothermia = 36 - 36.4 degs C\nModerate Hypothermia = 32 - 35.9 degs C\nSevere Hypothermia = 32 degs C",
        displayMode: "cards",
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("WarmTheBody"))
      }
    ],
    skipCondition: (triageData) => {
      return !triageData.present_signs?.includes("trunk_cold");
    }
  },
  // Index 15: SHOCK - shown when capillary_refill OR weak_pulse is selected
  {
    title: "Emmergency Management",
    subtitle: "Temperature management required",
    description: ``,
    formData: [
      {
        componentType: "infographicField",
        name: "keep_the_baby_warm",
        header: "SHOCK",
        helperText: "This baby may be in Shock! See pg 74 COIN (NB. Don't give a bolus to a baby that has not responded to resuscitation)",
        subtitle: "",
        displayMode: "cards",
        padding: true,
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("KeepTheBodyWarm"))
      }
    ],
    skipCondition: (triageData) => {
      const hasShockIndicators = triageData.present_signs?.includes("capillary_refill") || triageData.present_signs?.includes("weak_pulse");
      return !hasShockIndicators;
    }
  },
  {
    title: "Vital Signs",
    subtitle: "Measure and record vital signs",
    formData: [
      {
        componentType: "inputField",
        padding: true,
        name: "respiratory_rate",
        header: "Respiratory Rate (breaths/min)",
        type: "number",
        placeholder: "Count for 60 seconds",
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Respiratory rate is required";
          if (numeric <= 0 || numeric > 200) return "Enter valid respiratory rate (1-200)";
          return null;
        }
      },
      {
        componentType: "inputField",
        padding: true,
        name: "heart_rate",
        header: "Heart Rate (beats/min)",
        type: "number",
        placeholder: "Enter heart rate",
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Heart rate is required";
          if (numeric <= 0 || numeric > 300) return "Enter valid heart rate (1-300)";
          return null;
        }
      },
      {
        componentType: "switchField",
        padding: true,
        name: "can_measure_oxygen_saturation",
        prefixText: "Are you able to measure",
        label: "Oxygen Saturation",
        initialValue: false,
        // validation: (v) => (v === null ? "Required" : null),
        allowClearToNull: true
      },
      {
        componentType: "inputField",
        padding: true,
        name: "oxygen_saturation_vital",
        header: "Oxygen Saturation in Air (%)",
        type: "number",
        placeholder: "Enter SpO2",
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Oxygen saturation is required";
          if (numeric < 0 || numeric > 100) return "Enter valid oxygen saturation (0-100)";
          return null;
        },
        condition: (formValues) => {
          return formValues.can_measure_oxygen_saturation === true || formValues.oxygen_facility_available === "Yes";
        }
      },
      // {
      //     componentType: "inputField",
      //     name: "temperature",
      //     header: "Temperature (°C)",
      //     type: "number",
      //     placeholder: "Enter temperature (e.g., 36.5)",
      //     validation: (value: string) => {
      //         const numeric = Number(value);
      //         if (!value) return "Temperature is required";
      //         if (numeric < 30 || numeric > 45) return "Enter valid temperature (30-45°C)";
      //         return null;
      //     },
      // },
      {
        componentType: "radioButtonField",
        padding: true,
        name: "oxygen_facility_available",
        header: "Is oxygen available at the facility?",
        type: "inline",
        // Styles: 'standard', 'inline', 'list', 'button'
        allowDeselect: true,
        // Clicking the selected button clears selection
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: (value) => !value ? "Please select one option." : null,
        showClearButton: true
      }
    ]
  },
  {
    title: "Emergency Management 6",
    subtitle: "Immediate intervention required",
    description: "Critical breathing status detected - immediate action needed",
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "emergency_management_six",
        header: "",
        displayMode: "visual",
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("EmergencyManagement"))
      }
    ],
    skipCondition: (triageData) => {
      if (triageData.heart_rate && Number(triageData.heart_rate) < 60) return false;
      return true;
    }
  },
  {
    title: "Referral Instructions",
    subtitle: "If oxygen is NOT available CALL referral hospital immediately",
    description: "for guidance and if possible send the baby with accompanying health worker with bag valve mask (BVM) ventilation equipment.\n\nContinue with the Neotree examination.",
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "referral_instructions",
        header: "02 Referral Instructions",
        displayMode: "cards",
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("ReferralInstructions"))
      }
    ],
    skipCondition: (triageData) => {
      const oxygenStatsValue = triageData.oxygen_saturation_vital;
      if (oxygenStatsValue && Number(oxygenStatsValue) < 90) return false;
      return true;
    }
  },
  // {
  //     title: "Emergency Management",
  //     subtitle: "Immediate intervention required",
  //     description: "Critical low heart rate detected - immediate action needed",
  //     formData: [
  //         {
  //             componentType: "infographicField",
  //             name: "emergency_management_flow",
  //             header: "",
  //             displayMode: "visual",
  //             showStepNumber: false,
  //             infographicData: () => import("./infographics").then((m) => m.getInfographicByKey("EmergencyManagement")!),
  //         },
  //     ],
  //     skipCondition: (triageData: Record<string, any>) => {
  //         const heartRateValue = triageData.heart_rate;
  //         if (heartRateValue === undefined || heartRateValue === null || heartRateValue === "") {
  //             return true;
  //         }
  //         const heartRate = Number(heartRateValue);
  //         if (Number.isNaN(heartRate)) {
  //             return true;
  //         }
  //         return heartRate >= 90;
  //     },
  // },
  {
    title: "Emergency Management",
    subtitle: "Severe Respiratory Distress",
    description: "Critical breathing status detected - immediate action needed",
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "emergency_management",
        header: "Severe Respiratory Distress",
        helperText: "If not already on oxygen",
        displayMode: "visual",
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("RespiratoryDistress"))
      }
    ],
    skipCondition: (triageData) => {
      const satsMonAvailable = triageData.can_measure_oxygen_saturation === true;
      const satsAir = Number(triageData.oxygen_saturation_vital);
      const hasSevereRespiratoryDistress = satsMonAvailable && satsAir < 90;
      return !hasSevereRespiratoryDistress;
    }
  },
  {
    title: "Vital Signs 2",
    subtitle: "Measure and record vital signs",
    formData: [
      {
        componentType: "inputField",
        padding: true,
        name: "saturation_in_oxygen",
        header: "saturation in Oxygen (%)",
        type: "number",
        placeholder: "Enter saturation in Oxygen",
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Oxygen saturation is required";
          if (numeric < 0 || numeric > 100) return "Enter valid oxygen saturation (0-100)";
          return null;
        }
      }
    ],
    skipCondition: (formValues) => {
      if (formValues.oxygen_facility_available === "No") {
        return true;
      }
      const satsMonAvailable = formValues.can_measure_oxygen_saturation === true;
      const satsAir = Number(formValues.oxygen_saturation_vital);
      const shouldShow = satsMonAvailable && satsAir < 90;
      return !shouldShow;
    }
  },
  {
    title: "Emergency Management 7",
    subtitle: "Immediate intervention required",
    description: "Critical breathing status detected - immediate action needed",
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "emergency_management_six",
        header: "",
        displayMode: "visual",
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("EmergencyManagement"))
      }
    ],
    skipCondition: (triageData) => {
      const satsO2 = Number(triageData.saturation_in_oxygen);
      if (satsO2 && satsO2 < 80) {
        return false;
      }
      return true;
    }
  },
  {
    title: "Severe Respiratory Distress",
    subtitle: "",
    description: "Baby requires referral for severe respiratory distress",
    formData: [
      {
        componentType: "infographicField",
        name: "severe_respiratory_distress_referral",
        header: "",
        displayMode: "visual",
        helperText: "This baby has severe respiratory distress and requires further support",
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("BabyRecoveredStillSevereRespiratory"))
      }
    ],
    skipCondition: (triageData) => {
      const satsO2 = Number(triageData.saturation_in_oxygen);
      if (satsO2 > 79 && satsO2 < 90) {
        return false;
      }
      return true;
    }
  },
  {
    title: "Respiratory Distress",
    subtitle: "Sats in O2 have recovered but this baby still has Respiratory Distress",
    description: "",
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "baby_recovered_still_severe_respiratory",
        header: "Baby",
        helperText: "Sats in O2 have recovered but this baby still has Respiratory Distress",
        displayMode: "visual",
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("BabyRecoveredStillSevereRespiratory"))
      }
    ],
    skipCondition: (triageData) => {
      const satsO2 = Number(triageData.saturation_in_oxygen);
      if (satsO2 > 89) {
        return false;
      }
      return true;
    }
  },
  {
    title: "Vital Signs 3",
    subtitle: "Measure and record vital signs",
    formData: [
      {
        componentType: "switchField",
        padding: true,
        name: "can_measure_temp",
        prefixText: "Are you able to measure",
        label: "Temperature",
        // validation: (v) => (v === null ? "Required" : null),
        allowClearToNull: true
      },
      {
        componentType: "inputField",
        padding: true,
        name: "temperature",
        header: "temperature (deg C)",
        type: "number",
        placeholder: "Enter temperature",
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Temperature is required";
          if (numeric < 34 || numeric > 39) return "Enter valid temperature (34 - 39°C)";
          return null;
        },
        condition: (formValues) => {
          return formValues.can_measure_temp;
        }
      }
    ]
  },
  {
    title: "Emergency Management",
    subtitle: "Temperature management required",
    description: "Temperature < 36.5°C - immediate warming needed",
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "keep_the_baby_warm",
        header: "",
        subtitle: "",
        helperText: "Mild Hypothermia = 36 - 36.4 degs C\nModerate Hypothermia = 32 - 35.9 degs C\nSevere Hypothermia = 32 degs C",
        displayMode: "cards",
        showStepNumber: true,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("WarmTheBody"))
      }
    ],
    skipCondition: (triageData) => {
      const temp = Number(triageData.temperature);
      if (!Number.isFinite(temp)) return true;
      return temp >= 36.5;
    }
  },
  {
    title: "Temperature High",
    subtitle: "",
    description: ``,
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "keep_the_baby_warm",
        header: "",
        subtitle: "",
        displayMode: "cards",
        showStepNumber: true,
        infographicData: {
          key: "TempHigh",
          sections: [
            {
              title: "Unwrap the body"
            },
            {
              title: "Remove from warmer or skin-skin"
            },
            {
              title: "For baby that is less than 2500 consider paracetamol or tepid sponging."
            }
          ]
        }
      }
    ],
    skipCondition: (triageData) => {
      const temp = Number(triageData.temperature);
      if (!Number.isFinite(temp)) return true;
      return !(temp > 37.5);
    }
  },
  {
    title: "Emergency Triage Blood Sugar",
    subtitle: "",
    description: ``,
    formData: [
      {
        componentType: "switchField",
        padding: true,
        name: "can_measure_blood_sugar",
        prefixText: "Are you able to measure",
        label: "Blood Sugar",
        helperText: "Check Blood Sugar.",
        // validation: (v) => (v === null ? "Required" : null),
        allowClearToNull: true
      },
      {
        componentType: "inputField",
        padding: true,
        header: "Blood Sugar",
        name: "bloodSugar",
        initialUnit: "mg/dL",
        unitOptions: [
          { label: "mg/dL", value: "mg/dL" },
          { label: "mmol/L", value: "mmol/L" }
        ],
        unitValidation: (unitValue) => {
          if (!unitValue || unitValue === "") {
            return "Please select a unit.";
          }
          return null;
        },
        condition: (formValues) => {
          return formValues.can_measure_blood_sugar;
        },
        validation: (value, allValues) => {
          const units = allValues ? allValues.bloodSugar_unit : {};
          const glucose = Number(value);
          if (!value) return "Blood sugar is required";
          if (units === "mg/dL") {
            if (glucose < 0 || glucose > 600) return "Enter valid blood sugar (0-600 mg/dL)";
          } else if (units === "mmol/L") {
            if (glucose < 2 || glucose > 33.3) return "Enter valid blood sugar (2-33.3 mmol/L)";
          }
          return null;
        }
      }
    ]
  },
  {
    title: "Hypoglycemia-Symptomatic",
    subtitle: "",
    description: ``,
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "hypoglycemia Symptomatic",
        header: "",
        subtitle: "",
        displayMode: "cards",
        showStepNumber: true,
        infographicData: {
          key: "hypoglycemia",
          sections: [
            {
              title: "Give dextrose bolus",
              bullets: ["2ml/kg of 10% dextrose IV over 5 minutes.", "If no IV line, give the same IV dextrose by gastric tube."]
            },
            {
              title: "Give maintenance fluids",
              bullets: ["For fluid and rate see wall chart."]
            },
            {
              title: "Monitor blood glucose after 30 minutes",
              bullets: ["For further management refer to the wall chart."]
            }
          ]
        }
      }
    ],
    skipCondition(triageData) {
      const units = triageData.bloodSugar_unit;
      const glucose = Number(triageData.blood_sugar);
      const canMeasure = triageData.can_measure_blood_sugar;
      const triageStore = useNeonatalTriageStore();
      const lowSugar = triageStore.formValues.lowSugar;
      if (lowSugar && lowSugar === "Hypoglycemia-Asymptomatic") {
        return true;
      }
      if (!(units === "mg/dL" && glucose < 45 || units === "mmol/L" && glucose < 2.5)) {
        return true;
      }
      if (!canMeasure) return true;
      return false;
    }
  },
  {
    title: "Hypoglycemia-Asymptomatic",
    subtitle: "",
    description: ``,
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        name: "hypoglycemia Asymptomatic",
        header: "",
        subtitle: "",
        displayMode: "cards",
        showStepNumber: true,
        infographicData: {
          key: "hypoglycemia",
          sections: [
            {
              title: "Continue breast feeding or giving EBM by cup.",
              bullets: ["Monitor blood sugar 30 minutes after feed."]
            },
            {
              title: "Increase frequency of feeds",
              bullets: ["E.g 3 to 2 hourly or from 2 to 1 hourly."]
            },
            {
              title: "Monitor blood glucose before next feed or immediately if any symptoms.",
              bullets: ["If 3 normal blood sugar (2.5 - 8.3 mmol) monitoring can be stopped."]
            }
          ]
        },
        footerNote: "For further management refer to the wall chart."
      }
    ],
    skipCondition(triageData) {
      const units = triageData.bloodSugar_unit;
      const glucose = Number(triageData.blood_sugar);
      const canMeasure = triageData.can_measure_blood_sugar;
      const triageStore = useNeonatalTriageStore();
      const lowSugar = triageStore.formValues.lowSugar;
      if (lowSugar && lowSugar === "Hypoglycemia-Symptomatic") {
        return true;
      }
      if (!(units === "mg/dL" && glucose < 45 || units === "mmol/L" && glucose < 2.5)) {
        return true;
      }
      if (!canMeasure) return true;
      return false;
    }
  },
  {
    title: "Vital Signs Four",
    subtitle: "",
    formData: [
      {
        componentType: "inputField",
        padding: true,
        name: "current_weight",
        header: "Current Weight(g)",
        type: "number",
        placeholder: "",
        validation: (value) => {
          if (!value) return "current weight is required";
          const weight = Number(value);
          if (Number.isNaN(weight)) {
            return "Weight must be a number";
          }
          if (weight < 500 || weight > 6e3) {
            return "Enter a valid neonatal current weight (500–6000 g)";
          }
          return null;
        }
      },
      {
        componentType: "inputField",
        padding: true,
        name: "birth_weight",
        header: "Birth Weight(g)",
        type: "number",
        placeholder: "",
        validation: (value) => {
          if (!value) return "Birth weight is required";
          const birthWeight = Number(value);
          if (!Number.isFinite(birthWeight)) {
            return "Birth weight must be a valid number";
          }
          if (!Number.isInteger(birthWeight)) {
            return "Birth weight must be entered in whole grams";
          }
          if (birthWeight < 500 || birthWeight > 6e3) {
            return "Enter a valid birth weight (500–6000 g)";
          }
          return null;
        }
      },
      {
        componentType: "Slot",
        name: "percentage",
        slotName: "percentage",
        initialValue: [],
        condition: (formValues) => {
          const bw = Number(formValues.birth_weight);
          const cw = Number(formValues.current_weight);
          return Boolean(bw > 0 && cw > 0);
        }
      },
      {
        componentType: "inputField",
        padding: true,
        name: "head_circumference",
        header: "Head Circumference (CM)",
        type: "number",
        placeholder: "",
        validation: (value) => {
          if (!value) return "Head Circumference is required";
          const hc = Number(value);
          if (!Number.isFinite(hc)) {
            return "Head circumference must be a valid number";
          }
          if (hc < 20 || hc > 45) {
            return "Enter a valid head circumference (20–45 cm)";
          }
          return null;
        }
      }
    ]
  },
  {
    title: "Demographics",
    subtitle: "demographics",
    description: "Register patient for triage",
    formData: [
      {
        componentType: "inputField",
        padding: true,
        name: "first_name",
        header: "First Name",
        type: "string",
        placeholder: "Enter First Name",
        onActionClick: randomizeFirstName,
        // actionButton: {
        //     show: true,
        //     text: "Generate",
        // },
        validation: (value) => {
          if (!value) return "First Name is required";
          return null;
        }
      },
      {
        componentType: "inputField",
        padding: true,
        name: "last_name",
        header: "Last Name",
        type: "string",
        placeholder: "Enter Last Name",
        // onActionClick: randomizeLastName,
        // actionButton: {
        //     show: true,
        //     text: "Generate",
        // },
        validation: (value) => {
          if (!value) return "Last Name is required";
          return null;
        }
      }
    ],
    skipCondition(triageData) {
      if (triageData._forceDemographics) {
        return false;
      }
      return Boolean(triageData._hasPatient);
    }
  },
  {
    title: "Respiratory Distress",
    subtitle: "Abnormal vital signs detected",
    description: "Respiratory rate or heart rate outside normal range requires additional assessment",
    formData: [
      {
        componentType: "checkboxField",
        padding: true,
        name: "respiratory_distress_signs",
        header: "Select signs of respiratory distress present",
        type: "multiple",
        options: [
          { label: "Nasal flaring", value: "nasal_flaring" },
          { label: "Grunting", value: "grunting" },
          { label: "Chest retractions", value: "chest_retractions" },
          { label: "Cyanosis", value: "cyanosis" }
        ]
      }
    ],
    skipCondition: (triageData) => {
      const respiratoryRate = Number(triageData.respiratory_rate);
      const heartRate = Number(triageData.heart_rate);
      const hasAbnormalRespiratoryRate = Number.isFinite(respiratoryRate) && (respiratoryRate < 60 || respiratoryRate > 80);
      const hasLowHeartRate = Number.isFinite(heartRate) && heartRate < 100;
      const hasRespiratoryDistress = hasAbnormalRespiratoryRate || hasLowHeartRate;
      return !hasRespiratoryDistress;
    }
  },
  {
    title: "Fever Management",
    subtitle: "Elevated temperature management",
    description: "Temperature >37.5°C requires intervention",
    formData: [
      {
        componentType: "radioButtonField",
        padding: true,
        name: "fever_management",
        header: "Fever management initiated?",
        type: "standard",
        allowDeselect: false,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      }
    ],
    skipCondition: (triageData) => {
      const temp = Number(triageData.temperature);
      return !temp || temp <= 37.5;
    }
  },
  {
    title: "Blood Sugar",
    subtitle: "Blood glucose assessment",
    formData: [
      {
        componentType: "inputField",
        padding: true,
        name: "blood_sugar",
        header: "Blood Glucose (mg/dL)",
        type: "number",
        placeholder: "Enter blood glucose level",
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Blood glucose is required";
          if (numeric < 0 || numeric > 600) return "Enter valid blood glucose (0-600)";
          return null;
        }
      }
    ],
    // This section doesn't have a stepper component - data is collected elsewhere
    skipCondition: () => true
  },
  {
    title: "Referral Instructions",
    subtitle: "Complete triage assessment",
    formData: [
      {
        componentType: "textAreaField",
        padding: true,
        name: "referral_notes",
        header: "Referral Notes",
        placeholder: "Enter any additional notes for referral",
        minHeight: 120
      },
      {
        componentType: "radioButtonField",
        padding: true,
        name: "referral_required",
        header: "Is referral required?",
        type: "standard",
        allowDeselect: false,
        options: [
          { label: "Yes, immediate referral", value: "immediate" },
          { label: "Yes, routine referral", value: "routine" },
          { label: "No referral needed", value: "none" }
        ],
        validation: (value) => !value ? "Please select referral status" : null
      },
      {
        componentType: "inputField",
        padding: true,
        name: "referral_facility",
        header: "Referral Facility Name",
        type: "text",
        placeholder: "Enter the name of the referral facility",
        validation: (value) => !value ? "Facility name is required for referrals" : null
      },
      {
        componentType: "inputField",
        padding: true,
        name: "transport_method",
        header: "Transport Method",
        type: "text",
        placeholder: "How will the baby be transported?"
      }
    ],
    conditionalRules: [
      {
        id: "hide_referral_fields_if_no_referral",
        name: "Hide referral fields when no referral is needed",
        condition: "referral_required === 'none'",
        actions: [
          { type: "hideField", target: ["referral_facility", "transport_method"] },
          { type: "clearValue", target: ["referral_facility", "transport_method"] }
        ]
      },
      {
        id: "require_facility_for_immediate_referral",
        name: "Make facility required for immediate referrals",
        condition: "referral_required === 'immediate'",
        actions: [{ type: "setRequired", target: "referral_facility" }]
      }
    ],
    // This section doesn't have a stepper component - data is collected elsewhere (index 19)
    skipCondition: () => true
  },
  {
    title: "Triage Summary",
    subtitle: "Summary of chest examination findings",
    description: "Review the chest examination findings before proceeding",
    formData: [
      {
        componentType: "summaryField",
        padding: true,
        name: "triageSummaryComputed",
        title: "Triage summary",
        subtitle: "Auto-generated from the respiratory, auscultation, and murmur findings",
        description: "Confirm that the values below match your observations before adding any extra notes.",
        emptyStateMessage: "No triage findings captured yet.",
        builder: (formValues) => {
          const formatYesNo = (value) => value ? `(${value.toLowerCase()})` : void 0;
          const rows = [];
          const pushRow = (section, label, value, detail) => {
            if (!value && !detail && !label) {
              return;
            }
            rows.push({ section, label, value, detail });
          };
          pushRow("Triage", "Is the baby crying?", formatYesNo(formValues.crying));
          pushRow("Triage", "Is the baby breathing?", formatYesNo(formValues.breathing));
          pushRow("Triage", "Trunk feels cold", "Yes");
          pushRow("Triage", "Respiratory Rate", formValues.respiratory_rate);
          pushRow("Triage", "Heart Rate (bpm)", formValues.heart_rate);
          pushRow("Triage", "Oxygen Sats in Air (%)", formValues.oxygen_saturation_vital);
          pushRow("Triage", "Saturations in Oxygen (%)", formValues.saturation_in_oxygen);
          pushRow("Triage", "Temperature (degs C)", formValues.temperature);
          pushRow("Chest Auscultation", "Is a stethoscope available?", formatYesNo(formValues.stethoscopeAvailable));
          return rows;
        }
      }
    ]
  }
];
function getNextSectionIndex$2(currentIndex, allTriageData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalTriageSections.length) {
    return null;
  }
  const nextSection = neonatalTriageSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allTriageData)) {
    return getNextSectionIndex$2(nextIndex, allTriageData);
  }
  return nextIndex;
}
function getPreviousSectionIndex$2(currentIndex, allTriageData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalTriageSections[prevIndex];
  if (prevSection?.skipCondition) {
    try {
      const shouldSkip = prevSection.skipCondition(allTriageData);
      if (shouldSkip) {
        return getPreviousSectionIndex$2(prevIndex, allTriageData);
      }
    } catch (error) {
      console.error(`Error evaluating skipCondition for section ${prevIndex}:`, error);
    }
  }
  return prevIndex;
}

const multiSelectOptions = (values) => values.map((value) => ({ value, label: value }));
const rangeOptions = (start, end) => Array.from({ length: end - start + 1 }, (_, index) => {
  const value = (start + index).toString();
  return { value, label: value };
});
const resuscitationOptions = [
  "Stimulation",
  "Suctioning",
  "Oxygen",
  "Bag Valve Mask Ventilation (BVM)",
  "Cardio Pulmonary Resuscitation (CPR)",
  "Unknown",
  "None"
];
const medicalConditionOptions = [
  "Hypoglycaemia (symptomatic)",
  "Abscess",
  "Fever",
  "Birth Asphyxia",
  "Neonatal Sepsis (Early onset - Symptomatic)",
  "Prematurity with Respiratory Distress",
  "Suspected Neonatal Sepsis",
  "Possible Meconium Aspiration",
  "Congenital anomalies",
  "None"
];
const neonatalEnrollmentSections = [
  {
    title: "Birth details",
    subtitle: "Capture the initial arrival information",
    formData: [
      {
        componentType: "radioButtonField",
        header: "Does the baby have a twin?",
        name: "hasTwin",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify whether the neonate has a twin"
      },
      {
        componentType: "multiSelectInputField",
        header: "Place of Birth",
        name: "placeOfBirth",
        placeholder: "Select type",
        icon: icons.search,
        options: multiSelectOptions(["Hospital", "Health Center", "Home", "Other"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select the place of birth"
      },
      {
        componentType: "multiSelectInputField",
        header: "Name of Birth Facility",
        name: "birthFacility",
        placeholder: "Select facility",
        icon: icons.search,
        options: [],
        // Populated via loadFacilityOptions() in component
        trackBy: "name",
        label: "label",
        searchable: true,
        padding: true,
        validation: (value) => value?.name || value ? null : "Select a facility"
      },
      {
        componentType: "multiSelectInputField",
        header: "Type of Birth",
        name: "typeOfBirth",
        placeholder: "Select type",
        icon: icons.search,
        options: multiSelectOptions([
          "Single",
          "1st Twin",
          "2nd Twin",
          "1st Triplet",
          "2nd Triplet",
          "3rd Triplet",
          "1st Quadruplet",
          "2nd Quadruplet",
          "3rd Quadruplet",
          "4th Quadruplet"
        ]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select the type of birth"
      },
      {
        componentType: "inputField",
        header: "Birth weight (grams)",
        name: "birthWeight",
        type: "number",
        placeholder: "Enter weight",
        padding: true,
        validation: (value) => {
          const numeric = Number(value);
          return numeric > 0 ? null : "Provide the birth weight";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time of birth",
        name: "birthTime",
        placeholder: "HH:mm",
        padding: true,
        validation: (value) => value ? null : "Capture the time of birth"
      }
    ]
  },
  {
    title: "Referral information",
    subtitle: "Document how the neonate arrived",
    description: "Required when the baby was referred from another facility.",
    formData: [
      {
        componentType: "radioButtonField",
        header: "Is the baby referred from another facility?",
        name: "referredFromAnotherFacility",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Indicate whether the neonate was referred"
      },
      {
        componentType: "multiSelectInputField",
        header: "Referred from",
        name: "referredFrom",
        placeholder: "Select referee type",
        icon: icons.search,
        options: multiSelectOptions(["District Hospital", "Health Center", "Private Clinic", "Other"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select the referral source",
        condition: (formValues) => formValues.referredFromAnotherFacility === "Yes"
      },
      {
        componentType: "multiSelectInputField",
        header: "Name of facility",
        name: "referringFacilityName",
        placeholder: "Search and select facility",
        icon: icons.search,
        options: [],
        // Populated via loadFacilityOptions() in component
        trackBy: "name",
        label: "label",
        searchable: true,
        padding: true,
        validation: (value, formValues) => {
          if (formValues?.referredFromAnotherFacility !== "Yes") {
            return null;
          }
          return value?.name || value ? null : "Select the referring facility";
        },
        condition: (formValues) => formValues.referredFromAnotherFacility === "Yes"
      },
      {
        componentType: "multiSelectInputField",
        header: "Mode of transport",
        name: "modeOfTransport",
        placeholder: "Select mode",
        icon: icons.search,
        options: multiSelectOptions(["Ambulance", "Private vehicle", "Bicycle", "Other"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select how the neonate arrived",
        condition: (formValues) => formValues.referredFromAnotherFacility === "Yes"
      },
      {
        componentType: "multiSelectInputField",
        header: "Admitted from",
        name: "admittedFrom",
        placeholder: "Select origin",
        icon: icons.search,
        options: multiSelectOptions(["Clinic", "Home", "Maternity Ward", "Other"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select where the baby was admitted from",
        condition: (formValues) => formValues.referredFromAnotherFacility === "Yes"
      }
    ]
  },
  {
    title: "Birth assessment",
    subtitle: "Capture the immediate clinical state",
    formData: [
      {
        componentType: "radioButtonField",
        header: "Did the baby cry straight after birth?",
        name: "criedAfterBirth",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Unknown", value: "Unknown" }
        ],
        padding: true,
        validation: (value) => value ? null : "Indicate whether the baby cried"
      },
      {
        componentType: "multiSelectInputField",
        header: "Apgar score at 1 minute",
        name: "apgar1",
        placeholder: "Select",
        icon: icons.search,
        options: rangeOptions(0, 10),
        trackBy: "value",
        label: "label",
        padding: true,
        condition: (formValues) => formValues?.criedAfterBirth !== "Unknown",
        validation: (value, formValues) => {
          if (formValues?.criedAfterBirth === "Unknown") return null;
          return value?.value || value ? null : "Select the Apgar score at 1 min";
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Apgar score at 5 minutes",
        name: "apgar5",
        placeholder: "Select",
        icon: icons.search,
        options: rangeOptions(0, 10),
        trackBy: "value",
        label: "label",
        padding: true,
        condition: (formValues) => formValues?.criedAfterBirth !== "Unknown",
        validation: (value, formValues) => {
          if (formValues?.criedAfterBirth === "Unknown") return null;
          return value?.value || value ? null : "Select the Apgar score at 5 min";
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Apgar score at 10 minutes",
        name: "apgar10",
        placeholder: "Select",
        icon: icons.search,
        options: rangeOptions(0, 10),
        trackBy: "value",
        label: "label",
        padding: true,
        condition: (formValues) => formValues?.criedAfterBirth !== "Unknown",
        validation: (value, formValues) => {
          if (formValues?.criedAfterBirth === "Unknown") return null;
          return value?.value || value ? null : "Select the Apgar score at 10 min";
        }
      },
      {
        componentType: "searchableDropdown",
        header: "Was resuscitation needed at birth?",
        name: "resuscitationMethods",
        placeholder: "Select the methods",
        icon: icons.search,
        padding: true,
        options: multiSelectOptions(resuscitationOptions),
        multiple: true,
        validation: (value) => value && value.length ? null : "Select at least one method"
      }
    ]
  },
  {
    title: "Mother's Information",
    subtitle: "Search and link the mother's record",
    description: "Find the mother's existing record or register a new mother if not found.",
    formData: [
      // Mother search component will be rendered separately in MotherSearch.vue
      // This section acts as a placeholder for the stepper navigation
    ]
  },
  {
    title: "Pregnancy",
    subtitle: "Pregnancy and delivery history",
    formData: [
      {
        componentType: "inputField",
        header: "Gestation in weeks",
        name: "gestationWeeks",
        type: "number",
        placeholder: "Weeks",
        padding: true,
        validation: (value) => {
          const numeric = Number(value);
          return numeric > 0 && numeric <= 45 ? null : "Enter valid gestation weeks (1-45)";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Were steroids given?",
        name: "steroidsGiven",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify whether steroids were given"
      },
      {
        componentType: "multiSelectInputField",
        header: "Gestation method assessment",
        name: "gestationMethodAssessment",
        placeholder: "Select method",
        icon: icons.search,
        options: multiSelectOptions([
          "Fundal height",
          "Length of pregnancy / Last Menstrual Period (LMP)",
          "Ultra Sound Scanning (USS)",
          "Ballad / Maturity Score"
        ]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select gestation assessment method"
      },
      {
        componentType: "radioButtonField",
        header: "Ultra sound scanning - USS",
        name: "ultraSoundScanning",
        options: [
          { label: "Early", value: "Early" },
          { label: "Late", value: "Late" }
        ],
        padding: true,
        validation: (value) => value ? null : "Select ultrasound timing",
        condition: (formValues) => formValues.gestationMethodAssessment?.value === "Ultra Sound Scanning (USS)"
      },
      {
        componentType: "timeInputField",
        header: "Onset of labor",
        name: "onsetOfLabor",
        placeholder: "HH:mm",
        padding: true,
        validation: (value) => value ? null : "Enter onset of labor time"
      },
      {
        componentType: "radioButtonField",
        header: "Rupture of membranes?",
        name: "ruptureOfMembranes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify rupture of membranes status"
      },
      {
        componentType: "multiSelectInputField",
        header: "Type of Rupture of Membranes",
        name: "typeOfRuptureMembranes",
        placeholder: "Select type",
        icon: icons.search,
        options: multiSelectOptions(["Natural", "Artificial"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value, formValues) => {
          if (formValues?.ruptureOfMembranes !== "Yes") {
            return null;
          }
          return value?.value || value ? null : "Select type of rupture";
        },
        condition: (formValues) => formValues.ruptureOfMembranes === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Duration of Rupture of Membranes",
        name: "durationOfRuptureMembranes",
        options: [
          { label: "< 18 hours", value: "< 18 hours" },
          { label: "18 hours >", value: "18 hours >" }
        ],
        padding: true,
        validation: (value) => value ? null : "Select duration",
        condition: (formValues) => formValues.ruptureOfMembranes === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Offensive Liquor?",
        name: "offensiveLiquor",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify offensive liquor status"
      },
      {
        componentType: "multiSelectInputField",
        header: "Mode of Delivery",
        name: "modeOfDelivery",
        placeholder: "Select mode",
        icon: icons.search,
        options: multiSelectOptions([
          "Spontaneous Vaginal Delivery",
          "Caesarean Section",
          "Vacuum Extraction",
          "Forceps Delivery",
          "Breech Delivery"
        ]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select mode of delivery"
      },
      {
        componentType: "radioButtonField",
        header: "Meconium present?",
        name: "meconiumPresent",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify meconium presence"
      },
      {
        componentType: "radioButtonField",
        header: "Maternal Analgesia?",
        name: "maternalAnalgesia",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify maternal analgesia status"
      },
      {
        componentType: "multiSelectInputField",
        header: "Analgesia Drug",
        name: "analgesiasDrug",
        placeholder: "Select drug",
        icon: icons.search,
        options: multiSelectOptions(["Paracetamol", "Pethidine", "Morphine", "Epidural", "Other"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value, formValues) => {
          if (formValues?.maternalAnalgesia !== "Yes") {
            return null;
          }
          return value?.value || value ? null : "Select analgesia drug";
        },
        condition: (formValues) => formValues.maternalAnalgesia === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Anesthesia used?",
        name: "anesthesiaUsed",
        options: [
          { label: "General", value: "General" },
          { label: "Spinal", value: "Spinal" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify anesthesia used"
      },
      {
        componentType: "radioButtonField",
        header: "TEO?",
        name: "teo",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify TEO status"
      },
      {
        componentType: "radioButtonField",
        header: "Chlorohexidine of cord care?",
        name: "chlorohexidineCordCare",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify chlorohexidine cord care"
      },
      {
        componentType: "radioButtonField",
        header: "Vitamin K given?",
        name: "vitaminKGiven",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify Vitamin K status"
      },
      {
        componentType: "radioButtonField",
        header: "Dextrose 10% given?",
        name: "dextroseGiven",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify Dextrose 10% status"
      }
    ]
  },
  {
    title: "Mother's Profiling Details",
    subtitle: "HIV, VDRL, and Hepatitis status",
    formData: [
      {
        componentType: "radioButtonField",
        header: "Mother's status",
        name: "motherStatus",
        options: [
          { label: "Alive", value: "Alive" },
          { label: "Died", value: "Died" }
        ],
        padding: true,
        validation: (value) => value ? null : "Select mother's status"
      },
      {
        componentType: "multiSelectInputField",
        header: "HIV Status",
        name: "motherHivStatus",
        placeholder: "Select status",
        icon: icons.search,
        options: multiSelectOptions(["Reactive", "Non-Reactive", "Unknown"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select HIV status"
      },
      {
        componentType: "dateInputField",
        header: "Last HIV Test Date",
        name: "lastHivTestDate",
        placeholder: "Select date",
        padding: true,
        validation: (value) => value ? null : "Select the last HIV test date"
      },
      {
        componentType: "radioButtonField",
        header: "Do a HIV re-test?",
        name: "doHivRetest",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify whether to do HIV re-test"
      },
      {
        componentType: "radioButtonField",
        header: "Was baby given NVP?",
        name: "babyGivenNvp",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify whether baby was given NVP"
      },
      {
        componentType: "multiSelectInputField",
        header: "Mother's VDRL/Syphilis result",
        name: "motherVdrlResult",
        placeholder: "Select result",
        icon: icons.search,
        options: multiSelectOptions(["Positive", "Negative", "Unknown"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select VDRL/Syphilis result"
      },
      {
        componentType: "radioButtonField",
        header: "Was the mother treated for VDRL/Syphilis?",
        name: "motherTreatedForVdrl",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value, formValues) => {
          const vdrlResult = formValues?.motherVdrlResult?.value || formValues?.motherVdrlResult;
          if (vdrlResult === "Negative") {
            return null;
          }
          return value ? null : "Specify whether mother was treated";
        },
        condition: (formValues) => {
          const vdrlResult = formValues.motherVdrlResult?.value || formValues.motherVdrlResult;
          return vdrlResult !== "Negative";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Was the baby tested for Hepatitis?",
        name: "babyTestedForHepatitis",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify whether baby was tested"
      },
      {
        componentType: "radioButtonField",
        header: "Were all 3 doses of the treatment completed?",
        name: "allThreeDosesCompleted",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Specify whether all doses were completed"
      },
      {
        componentType: "multiSelectInputField",
        header: "Mother's Hepatitis result",
        name: "motherHepatitisResult",
        placeholder: "Select result",
        icon: icons.search,
        options: multiSelectOptions(["Positive", "Negative", "Unknown"]),
        trackBy: "value",
        label: "label",
        padding: true,
        validation: (value) => value?.value || value ? null : "Select Hepatitis result"
      }
    ]
  },
  {
    title: "Known Medical Conditions",
    subtitle: "Document any known conditions and vaccinations",
    formData: [
      {
        componentType: "searchableDropdown",
        header: "Known Medical Conditions",
        name: "knownMedicalConditions",
        placeholder: "Search and select conditions",
        dropdownHeader: "Select multiple",
        mode: "neonatal",
        multiple: true,
        padding: true,
        options: multiSelectOptions(medicalConditionOptions),
        validation: (value) => value && value.length ? null : "Select at least one option (use 'None' if applicable)"
      },
      {
        componentType: "listSelectionField",
        header: "Tetanus Diphtheria",
        name: "tetanusDiphtheria",
        type: "multiple",
        padding: true,
        options: multiSelectOptions(["Td1", "Td2", "Td3", "Td4", "Td5", "Unknown", "None"]),
        optionsToDiselectOthersSelections: ["None", "Unknown"],
        validation: (value) => value && value.length ? null : "Select Tetanus Diphtheria status"
      }
    ]
  }
];
function getNextEnrollmentSectionIndex(currentIndex, allEnrollmentData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalEnrollmentSections.length) {
    return null;
  }
  const nextSection = neonatalEnrollmentSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allEnrollmentData)) {
    return getNextEnrollmentSectionIndex(nextIndex, allEnrollmentData);
  }
  return nextIndex;
}
function getPreviousEnrollmentSectionIndex(currentIndex, allEnrollmentData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalEnrollmentSections[prevIndex];
  if (prevSection.skipCondition && prevSection.skipCondition(allEnrollmentData)) {
    return getPreviousEnrollmentSectionIndex(prevIndex, allEnrollmentData);
  }
  return prevIndex;
}

const neonatalSignsSymptomsSections = [
  {
    title: "Admission",
    subtitle: "Initial admission assessment",
    formData: [
      {
        componentType: "radioButtonField",
        name: "is_readmission",
        header: "Is this a re-admission?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      }
    ]
  },
  {
    title: "Signs/Symptoms",
    formData: [
      {
        componentType: "Alert",
        name: "presenting_complaints_banner",
        type: "warning",
        backgroundColor: "#FEDF89",
        textColor: "#B54708",
        message: "Reason for Admission / Presenting complaints"
      },
      {
        componentType: "searchableDropdown",
        name: "presenting_complaints",
        header: "Your Selection",
        placeholder: "Search presenting complaints...",
        dropdownHeader: "Select presenting complaints",
        multiple: true,
        padding: true,
        options: [
          { label: "Lethargy", value: "lethargy" },
          { label: "Difficulty in Breathing", value: "difficulty_breathing" },
          { label: "Fever", value: "fever" },
          { label: "Irritability", value: "irritability" },
          { label: "Not tolerating feeds", value: "not_tolerating_feeds" },
          { label: "Vomiting", value: "vomiting" },
          { label: "Vomiting every feeds", value: "vomiting_every_feeds" },
          { label: "Eye Discharge", value: "eye_discharge" },
          { label: "Diarrhoea", value: "diarrhoea" },
          { label: "Jaundice", value: "jaundice" },
          { label: "Convulsions", value: "convulsions" },
          { label: "Hypothermia", value: "hypothermia" },
          { label: "Poor feeding", value: "poor_feeding" },
          { label: "Cyanosis", value: "cyanosis" },
          { label: "Bleeding", value: "bleeding" },
          { label: "Abdominal distension", value: "abdominal_distension" },
          { label: "Umbilical discharge", value: "umbilical_discharge" },
          { label: "Skin rash", value: "skin_rash" },
          { label: "Pallor", value: "pallor" },
          { label: "Apnoea", value: "apnoea" },
          { label: "Birth asphyxia / HIE", value: "birth_asphyxia_hie" },
          { label: "Cord haemorrhage", value: "cord_haemorrhage" },
          { label: "Dehydration", value: "dehydration" },
          { label: "Down syndrome / Trisomy 21", value: "down_syndrome_trisomy_21" },
          { label: "Dumped baby", value: "dumped_baby" },
          { label: "Exomphalos / Omphalocele", value: "exomphalos_omphalocele" },
          { label: "Feeding difficulties / not sucking", value: "feeding_difficulties_not_sucking" },
          { label: "Fastroschisis", value: "fastroschisis" },
          { label: "HIV exposed", value: "hiv_exposed" },
          { label: "Hypoxia", value: "hypoxia" },
          { label: "Imperforated anus", value: "imperforated_anus" },
          { label: "Irritable crying", value: "irritable_crying" },
          { label: "Infected cord stump", value: "infected_cord_stump" },
          { label: "IUGR", value: "iugr" },
          { label: "Low apgars", value: "low_apgars" },
          { label: "Low birth weight", value: "low_birth_weight" },
          { label: "Macrosomia (Large baby)", value: "macrosomia_large_baby" },
          { label: "Myelomenichocele / Spina bifida", value: "myelomenichocele_spina_bifida" },
          { label: "Neural tube defect / Spina bifia", value: "neural_tube_defect_spina_bifia" },
          { label: "Not passing stool", value: "not_passing_stool" },
          { label: "Not passing urine", value: "not_passing_urine" },
          { label: "Oral thrush", value: "oral_thrush" },
          { label: "Pale skin", value: "pale_skin" },
          { label: "Possible meconium aspiration", value: "possible_meconium_aspiration" },
          { label: "Prematurity", value: "prematurity" },
          { label: "Prematurity with Respiratory Distress", value: "prematurity_respiratory_distress" },
          { label: "Risk factors for sepsis", value: "risk_factors_for_sepsis" },
          { label: "Suspected neonatal sepsis", value: "suspected_neonatal_sepsis" },
          { label: "Safe keeping", value: "safe_keeping" },
          { label: "Severe pneumonia", value: "severe_pneumonia" },
          { label: "Staphylococcal skin scalding syndrome (SSS)", value: "staphylococcal_skin_scalding_syndrome_sss" },
          { label: "Syphilis exposed baby", value: "syphilis_exposed_baby" },
          { label: "Trisomy 13", value: "trisomy_13" },
          { label: "Weight loss", value: "weight_loss" },
          { label: "Other congenital abnormality", value: "other_congenital_abnormality" },
          { label: "Other surgical conditions", value: "other_surgical_conditions" },
          { label: "Other", value: "other" }
        ],
        validation: (value) => {
          if (!value || !Array.isArray(value) || value.length === 0) {
            return "Please select at least one presenting complaint";
          }
          return null;
        }
      }
    ]
  }
];
function getNextSignsSymptomsSectionIndex(currentIndex, allSignsData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalSignsSymptomsSections.length) {
    return null;
  }
  const nextSection = neonatalSignsSymptomsSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allSignsData)) {
    return getNextSignsSymptomsSectionIndex(nextIndex, allSignsData);
  }
  return nextIndex;
}
function getPreviousSignsSymptomsSectionIndex(currentIndex, allSignsData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalSignsSymptomsSections[prevIndex];
  if (prevSection.skipCondition && prevSection.skipCondition(allSignsData)) {
    return getPreviousSignsSymptomsSectionIndex(prevIndex, allSignsData);
  }
  return prevIndex;
}

const meconiumTimingLabels = {
  within_24_hours: "Within 24 hours",
  more_than_24_hours: "More than 24 hours"
};
const stoolColorLabels = {
  white: "White",
  yellow: "Yellow",
  yellowish_green: "Yellowish-green",
  green: "Green",
  normal: "Normal"
};
const stoolConsistencyLabels = {
  loose: "Loose",
  soft: "Soft",
  hard: "Hard"
};
const urineColorLabels = {
  clear: "Clear",
  cloudy: "Cloudy",
  bloody: "Bloody",
  dark: "Dark",
  pus: "Pus"
};
const feedingTypeLabels = {
  formula: "Formula",
  breast_milk: "Breast Milk",
  mixed_feeds: "Mixed Feeds"
};
const feedingModeLabels = {
  breastfeeding: "Breastfeeding",
  cup: "Cup",
  ngt: "NGT",
  syringe: "Syringe"
};
const feedingFrequencyLabels = {
  two_hourly: "2 hourly",
  three_hourly: "3 hourly",
  others: "Others"
};
const feedingEffortLabels = {
  fatigue: "Fatigue",
  sweating: "Sweating",
  cyanosis: "Cyanosis",
  relatively_effortless: "Relatively Effortless"
};
const weightTrendLabels = {
  weight_loss_above_10: "Weight loss > 10%",
  weight_loss_below_10: "Weight loss < 10%"
};
const umbilicalConditionLabels = {
  healthy_and_clean: "Health & clean",
  bleeding: "Bleeding",
  red_skin_all_around_umbilicus: "Red skin all around umblicus",
  meconium_stained: "Meconium stained",
  umbilical_hernia: "Umblical hernia",
  abnormal_looking: "Abnormal looking"
};
const neonatalReviewOfSystemsSections = [
  {
    title: "Review Of Systems",
    subtitle: "Feeding History",
    description: "Feeding history assessment",
    formData: [
      {
        componentType: "listSelectionField",
        name: "type_of_feed",
        header: "Type of feed?",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: feedingTypeLabels.formula, value: "formula" },
          { label: feedingTypeLabels.breast_milk, value: "breast_milk" },
          { label: feedingTypeLabels.mixed_feeds, value: "mixed_feeds" }
        ],
        validation: (value) => !value ? "Please select type of feed" : null
      },
      {
        componentType: "listSelectionField",
        name: "mode_of_feeding",
        header: "Mode of feeding?",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: feedingModeLabels.breastfeeding, value: "breastfeeding" },
          { label: feedingModeLabels.cup, value: "cup" },
          { label: feedingModeLabels.ngt, value: "ngt" },
          { label: feedingModeLabels.syringe, value: "syringe" }
        ],
        validation: (value) => !value ? "Please select mode of feeding" : null
      },
      {
        componentType: "listSelectionField",
        name: "frequency_of_feeding",
        header: "Frequency of feeding?",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: feedingFrequencyLabels.two_hourly, value: "two_hourly" },
          { label: feedingFrequencyLabels.three_hourly, value: "three_hourly" },
          { label: feedingFrequencyLabels.others, value: "others" }
        ],
        validation: (value) => !value ? "Please select frequency of feeding" : null
      },
      {
        componentType: "inputField",
        name: "duration_of_feeding",
        header: "Duration of feeding (minutes)",
        placeholder: "Enter duration",
        type: "number",
        padding: true,
        validation: (value) => !value ? "Please enter duration of feeding" : null
      },
      {
        componentType: "listSelectionField",
        name: "effort_during_feeding",
        header: "Effort during feeding?",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: feedingEffortLabels.fatigue, value: "fatigue" },
          { label: feedingEffortLabels.sweating, value: "sweating" },
          { label: feedingEffortLabels.cyanosis, value: "cyanosis" },
          { label: feedingEffortLabels.relatively_effortless, value: "relatively_effortless" }
        ],
        validation: (value) => !value ? "Please select effort during feeding" : null
      }
    ]
  },
  {
    title: "Review Of Systems",
    subtitle: "Bowel Movements",
    description: "Bowel movement assessment",
    formData: [
      {
        componentType: "radioButtonField",
        name: "is_baby_vomiting",
        header: "Is the baby vomiting?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "inputField",
        name: "frequency_of_vomiting",
        header: "Frequency of vomiting",
        placeholder: "Enter frequency",
        type: "number",
        unit: "minutes",
        padding: true,
        condition: (values) => values.is_baby_vomiting === "Yes",
        validation: (value) => !value ? "Please enter frequency of vomiting" : null
      },
      {
        componentType: "listSelectionField",
        name: "passage_of_meconium",
        header: "Passage of meconium?",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: meconiumTimingLabels.within_24_hours, value: "within_24_hours" },
          { label: meconiumTimingLabels.more_than_24_hours, value: "more_than_24_hours" }
        ],
        validation: (value) => !value ? "Please select passage of meconium" : null
      },
      {
        componentType: "inputField",
        name: "frequency_of_stooling",
        header: "Frequency of stooling",
        placeholder: "Enter frequency",
        type: "number",
        unit: "minutes",
        padding: true,
        validation: (value) => !value ? "Please enter frequency of stooling" : null
      },
      {
        componentType: "listSelectionField",
        name: "color_of_stools",
        header: "Color of stools",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: stoolColorLabels.white, value: "white" },
          { label: stoolColorLabels.yellow, value: "yellow" },
          { label: stoolColorLabels.yellowish_green, value: "yellowish_green" },
          { label: stoolColorLabels.green, value: "green" },
          { label: stoolColorLabels.normal, value: "normal" }
        ],
        validation: (value) => !value ? "Please select color of stools" : null
      },
      {
        componentType: "listSelectionField",
        name: "consistency_of_ stools",
        header: "Consistency of stools",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: stoolConsistencyLabels.loose, value: "loose" },
          { label: stoolConsistencyLabels.soft, value: "soft" },
          { label: stoolConsistencyLabels.hard, value: "hard" }
        ],
        validation: (value) => !value ? "Please select consistency of stools" : null
      },
      {
        componentType: "radioButtonField",
        name: "blood_in_stools",
        header: "Any blood in stools?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "radioButtonField",
        name: "mucus_in_stools",
        header: "Any mucus in stools?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      }
    ]
  },
  {
    title: "Review Of Systems",
    subtitle: "Urine Output",
    description: "Urine output assessment",
    formData: [
      {
        componentType: "radioButtonField",
        name: "is_baby_passing_urine",
        header: "Is the baby passing urine?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "inputField",
        name: "number_of_wet_nappies",
        header: "Number of wet nappies per day",
        placeholder: "Enter number",
        type: "number",
        padding: true,
        condition: (values) => values.is_baby_passing_urine === "Yes",
        validation: (value) => !value ? "Please enter number of wet nappies" : null
      },
      {
        componentType: "listSelectionField",
        name: "color_of_urine",
        header: "Color of urine",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: urineColorLabels.clear, value: "clear" },
          { label: urineColorLabels.cloudy, value: "cloudy" },
          { label: urineColorLabels.bloody, value: "bloody" },
          { label: urineColorLabels.dark, value: "dark" },
          { label: urineColorLabels.pus, value: "pus" }
        ],
        validation: (value) => !value ? "Please select color of urine" : null
      },
      {
        componentType: "inputField",
        name: "volume_ml",
        header: "Volume (ml)",
        placeholder: "Enter volume",
        type: "number",
        padding: true,
        validation: (value) => !value ? "Please enter volume" : null
      }
    ]
  },
  {
    title: "Review Of Systems",
    subtitle: "Growth",
    description: "Growth assessment",
    formData: [
      {
        componentType: "listSelectionField",
        name: "weight_trend_since_birth",
        header: "Weight trend since birth",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: weightTrendLabels.weight_loss_above_10, value: "weight_loss_above_10" },
          { label: weightTrendLabels.weight_loss_below_10, value: "weight_loss_below_10" }
        ],
        validation: (value) => !value ? "Please select weight trend" : null
      }
    ]
  },
  {
    title: "Review Of Systems",
    subtitle: "Mouth and Oropharynx",
    description: "Mouth and oropharynx assessment",
    formData: [
      {
        componentType: "radioButtonField",
        name: "does_baby_have_oral_thrush",
        header: "Does the baby have Oral thrush?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "radioButtonField",
        name: "does_baby_have_oral_sores",
        header: "Does the baby have Oral sores?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "radioButtonField",
        name: "does_baby_have_tongue_tie",
        header: "Does the baby have Tongue tie (Ankyloglossia)?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      }
    ]
  },
  {
    title: "Review Of Systems",
    subtitle: "Abdomen",
    description: "Abdominal assessment",
    formData: [
      {
        componentType: "radioButtonField",
        name: "abdominal_distension",
        header: "Abdominal distension?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "radioButtonField",
        name: "abdominal_pain",
        header: "Abdominal pain?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "listSelectionField",
        name: "umbilical_condition",
        header: "Umbilical",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: umbilicalConditionLabels.healthy_and_clean, value: "healthy_and_clean" },
          { label: umbilicalConditionLabels.bleeding, value: "bleeding" },
          { label: umbilicalConditionLabels.red_skin_all_around_umbilicus, value: "red_skin_all_around_umbilicus" },
          { label: umbilicalConditionLabels.meconium_stained, value: "meconium_stained" },
          { label: umbilicalConditionLabels.umbilical_hernia, value: "umbilical_hernia" },
          { label: umbilicalConditionLabels.abnormal_looking, value: "abnormal_looking" }
        ],
        validation: (value) => !value ? "Please select umbilical condition" : null
      }
    ]
  },
  {
    title: "Review Of Systems",
    subtitle: "Musculoskeletal",
    description: "Musculoskeletal system assessment",
    formData: [
      {
        componentType: "radioButtonField",
        name: "skin_rash",
        header: "Does the baby have Skin rash?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "radioButtonField",
        name: "talipes",
        header: "Does the baby have Talipes?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "radioButtonField",
        name: "extra_digits",
        header: "Does the baby have Extra-digits?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      },
      {
        componentType: "radioButtonField",
        name: "spinal_bifida",
        header: "Does the baby have Spinal bifida?",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => !value ? "Please select Yes or No" : null
      }
    ]
  },
  {
    title: "Summary",
    subtitle: "Review of Systems Summary",
    description: "Review all findings before proceeding",
    formData: [
      {
        componentType: "Alert",
        name: "ros_summary_alert",
        type: "warning",
        backgroundColor: "#FEDF89",
        textColor: "#B54708",
        message: "Review all findings carefully. You can go back to edit if needed."
      },
      {
        componentType: "summaryField",
        name: "reviewOfSystemsSummary",
        title: "Review of Systems Summary",
        subtitle: "Auto-generated summary from all systems reviewed",
        description: "Confirm that the values below match your observations before proceeding.",
        emptyStateMessage: "No review of systems data captured yet.",
        builder: (formValues) => {
          const rows = [];
          const formatYesNo = (value) => {
            if (!value || typeof value !== "string") {
              return void 0;
            }
            const normalized = value.trim().toLowerCase();
            if (normalized === "yes") {
              return "Yes";
            }
            if (normalized === "no") {
              return "No";
            }
            return value;
          };
          const formatLabel = (value, labels) => {
            if (!value) {
              return void 0;
            }
            return labels?.[value] || value;
          };
          const withUnit = (value, unit) => {
            if (!value) {
              return void 0;
            }
            return `${value} ${unit}` ;
          };
          const pushRow = (section, label, value) => {
            if (!value) {
              return;
            }
            rows.push({ section, label, value });
          };
          pushRow("Feeding History", "Type of feed", formatLabel(formValues.type_of_feed, feedingTypeLabels));
          pushRow("Feeding History", "Mode of feeding", formatLabel(formValues.mode_of_feeding, feedingModeLabels));
          pushRow("Feeding History", "Frequency of feeding", formatLabel(formValues.frequency_of_feeding, feedingFrequencyLabels));
          pushRow("Feeding History", "Duration of feeding", withUnit(formValues.duration_of_feeding, "minutes"));
          pushRow("Feeding History", "Effort during feeding", formatLabel(formValues.effort_during_feeding, feedingEffortLabels));
          pushRow("Bowel Movements", "Is the baby vomiting?", formatYesNo(formValues.is_baby_vomiting));
          pushRow("Bowel Movements", "Frequency of vomiting", withUnit(formValues.frequency_of_vomiting, "minutes"));
          pushRow("Bowel Movements", "Passage of meconium", formatLabel(formValues.passage_of_meconium, meconiumTimingLabels));
          pushRow("Bowel Movements", "Frequency of stooling", withUnit(formValues.frequency_of_stooling, "minutes"));
          pushRow("Bowel Movements", "Color of stools", formatLabel(formValues.color_of_stools, stoolColorLabels));
          pushRow("Bowel Movements", "Consistency of stools", formatLabel(formValues.consistency_of_stools, stoolConsistencyLabels));
          pushRow("Bowel Movements", "Blood in stools?", formatYesNo(formValues.blood_in_stools));
          pushRow("Bowel Movements", "Mucus in stools?", formatYesNo(formValues.mucus_in_stools));
          pushRow("Urine Output", "Is the baby passing urine?", formatYesNo(formValues.is_baby_passing_urine));
          pushRow("Urine Output", "Number of wet nappies", formValues.number_of_wet_nappies);
          pushRow("Urine Output", "Color of urine", formatLabel(formValues.color_of_urine, urineColorLabels));
          pushRow("Urine Output", "Volume (ml)", formValues.volume_ml);
          pushRow("Growth", "Weight trend since birth", formatLabel(formValues.weight_trend_since_birth, weightTrendLabels));
          pushRow("Mouth and Oropharynx", "Oral thrush?", formatYesNo(formValues.does_baby_have_oral_thrush));
          pushRow("Mouth and Oropharynx", "Oral sores?", formatYesNo(formValues.does_baby_have_oral_sores));
          pushRow("Mouth and Oropharynx", "Tongue tie?", formatYesNo(formValues.does_baby_have_tongue_tie));
          pushRow("Abdomen", "Abdominal distension?", formatYesNo(formValues.abdominal_distension));
          pushRow("Abdomen", "Abdominal pain?", formatYesNo(formValues.abdominal_pain));
          pushRow("Abdomen", "Umbilical findings", formatLabel(formValues.umbilical_condition, umbilicalConditionLabels));
          pushRow("Musculoskeletal", "Skin rash?", formatYesNo(formValues.skin_rash));
          pushRow("Musculoskeletal", "Talipes?", formatYesNo(formValues.talipes));
          pushRow("Musculoskeletal", "Extra digits?", formatYesNo(formValues.extra_digits));
          pushRow("Musculoskeletal", "Spinal bifida?", formatYesNo(formValues.spinal_bifida));
          return rows;
        }
      }
    ]
  }
];
function getNextReviewOfSystemsSectionIndex(currentIndex, allRosData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalReviewOfSystemsSections.length) {
    return null;
  }
  const nextSection = neonatalReviewOfSystemsSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allRosData)) {
    return getNextReviewOfSystemsSectionIndex(nextIndex, allRosData);
  }
  return nextIndex;
}
function getPreviousReviewOfSystemsSectionIndex(currentIndex, allRosData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalReviewOfSystemsSections[prevIndex];
  if (prevSection.skipCondition && prevSection.skipCondition(allRosData)) {
    return getPreviousReviewOfSystemsSectionIndex(prevIndex, allRosData);
  }
  return prevIndex;
}

const neonatalVitalsSections = [
  {
    title: "Vital Signs",
    subtitle: "Measure and record vital signs",
    formData: [
      {
        componentType: "inputField",
        name: "respiratory_rate",
        header: "Respiratory Rate (breaths/min)",
        type: "number",
        placeholder: "Count for 60 seconds",
        padding: true,
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Respiratory rate is required";
          if (numeric <= 0 || numeric > 200) return "Enter valid respiratory rate (1-200)";
          return null;
        }
      },
      {
        componentType: "inputField",
        name: "heart_rate",
        header: "Heart Rate (beats/min)",
        type: "number",
        placeholder: "Enter heart rate",
        padding: true,
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Heart rate is required";
          if (numeric <= 0 || numeric > 300) return "Enter valid heart rate (1-300)";
          return null;
        }
      },
      {
        componentType: "switchField",
        name: "can_measure_oxygen_saturation",
        prefixText: "Are you able to measure",
        label: "Oxygen Saturation",
        allowClearToNull: true
      },
      {
        componentType: "inputField",
        name: "oxygen_saturation",
        header: "Oxygen Saturation (%)",
        type: "number",
        placeholder: "Enter SpO2",
        padding: true,
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Oxygen saturation is required";
          if (numeric < 0 || numeric > 100) return "Enter valid oxygen saturation (0-100)";
          return null;
        },
        condition: (formValues) => {
          return formValues.can_measure_oxygen_saturation === true;
        }
      },
      {
        componentType: "switchField",
        name: "can_measure_temperature",
        prefixText: "Are you able to measure",
        label: "Temperature",
        allowClearToNull: true
      },
      {
        componentType: "inputField",
        name: "temperature",
        header: "Temperature (°C)",
        type: "number",
        placeholder: "Enter temperature (e.g., 36.5)",
        padding: true,
        validation: (value) => {
          const numeric = Number(value);
          if (!value) return "Temperature is required";
          if (numeric < 34 || numeric > 39) return "Enter valid temperature (34 - 39°C)";
          return null;
        },
        condition: (formValues) => {
          return formValues.can_measure_temperature === true;
        }
      }
    ]
  },
  {
    title: "Weight Measurements",
    subtitle: "Record weight measurements",
    formData: [
      {
        componentType: "inputField",
        name: "current_weight",
        header: "Current Weight (g)",
        type: "number",
        placeholder: "Enter current weight",
        padding: true,
        validation: (value) => {
          if (!value) return "Current weight is required";
          const numeric = Number(value);
          if (numeric <= 0 || numeric > 1e4) return "Enter valid weight (1-10000g)";
          return null;
        }
      },
      {
        componentType: "inputField",
        name: "head_circumference",
        header: "Head Circumference (cm)",
        type: "number",
        placeholder: "Enter head circumference",
        padding: true,
        validation: (value) => {
          if (!value) return "Head circumference is required";
          const numeric = Number(value);
          if (numeric <= 0 || numeric > 60) return "Enter valid head circumference (1-60cm)";
          return null;
        }
      }
    ]
  },
  {
    title: "Blood Sugar",
    subtitle: "Blood glucose assessment",
    formData: [
      {
        componentType: "switchField",
        name: "can_measure_blood_sugar",
        prefixText: "Are you able to measure",
        label: "Blood Sugar",
        allowClearToNull: true
      },
      {
        componentType: "inputField",
        header: "Blood Sugar",
        name: "blood_sugar",
        initialUnit: "mg/dL",
        padding: true,
        unitOptions: [
          { label: "mg/dL", value: "mg/dL" },
          { label: "mmol/L", value: "mmol/L" }
        ],
        unitValidation: (unitValue) => {
          if (!unitValue || unitValue === "") {
            return "Please select a unit.";
          }
          return null;
        },
        condition: (formValues) => {
          return formValues.can_measure_blood_sugar === true;
        }
      }
    ]
  },
  {
    title: "Hypoglycemia-Symptomatic",
    subtitle: "",
    description: ``,
    formData: [
      {
        componentType: "infographicField",
        name: "hypoglycemia_symptomatic",
        header: "",
        subtitle: "",
        displayMode: "cards",
        showStepNumber: true,
        infographicData: {
          key: "hypoglycemia",
          sections: [
            {
              title: "Give dextrose bolus",
              bullets: ["2ml/kg of 10% dextrose IV over 5 minutes.", "If no IV line, give the same IV dextrose by gastric tube."]
            },
            {
              title: "Give maintenance fluids",
              bullets: ["For fluid and rate see wall chart."]
            },
            {
              title: "Monitor blood glucose after 30 minutes",
              bullets: ["For further management refer to the wall chart."]
            }
          ]
        }
      }
    ],
    skipCondition: (vitalsData) => {
      const bloodSugar = Number(vitalsData.blood_sugar);
      const unit = vitalsData.blood_sugar_unit || "mg/dL";
      if (!bloodSugar) return true;
      if (unit === "mmol/L") {
        return bloodSugar >= 2.5;
      } else {
        return bloodSugar >= 45;
      }
    }
  },
  {
    title: "Hypoglycemia-Asymptomatic",
    subtitle: "",
    description: ``,
    formData: [
      {
        componentType: "infographicField",
        name: "hypoglycemia_asymptomatic",
        header: "",
        subtitle: "",
        displayMode: "cards",
        showStepNumber: true,
        infographicData: {
          key: "hypoglycemia",
          sections: [
            {
              title: "Continue breast feeding or giving EBM by cup.",
              bullets: ["Monitor blood sugar 30 minutes after feed."]
            },
            {
              title: "Increase frequency of feeds",
              bullets: ["E.g 3 to 2 hourly or from 2 to 1 hourly."]
            },
            {
              title: "Monitor blood glucose before next feed or immediately if any symptoms.",
              bullets: ["If 3 normal blood sugar (2.5 - 8.3 mmol) monitoring can be stopped."]
            }
          ]
        },
        footerNote: "For further management refer to the wall chart."
      }
    ],
    skipCondition: (vitalsData) => {
      const bloodSugar = Number(vitalsData.blood_sugar);
      const unit = vitalsData.blood_sugar_unit || "mg/dL";
      if (!bloodSugar) return true;
      if (unit === "mmol/L") {
        return bloodSugar >= 2.5;
      } else {
        return bloodSugar >= 45;
      }
    }
  },
  {
    title: "Vitals Summary",
    subtitle: "Summary of vital signs",
    description: "Review the vital signs before proceeding",
    formData: [
      {
        componentType: "summaryField",
        name: "vitalsSummaryComputed",
        title: "Vitals summary",
        subtitle: "Auto-generated from the vital signs measurements",
        description: "Confirm that the values below match your measurements before adding any extra notes.",
        emptyStateMessage: "No vital signs captured yet.",
        builder: (formValues) => {
          const rows = [];
          const pushRow = (section, label, value, detail) => {
            if (!value && !detail && !label) {
              return;
            }
            rows.push({ section, label, value, detail });
          };
          pushRow("Vital Signs", "Respiratory Rate (breaths/min)", formValues.respiratory_rate);
          pushRow("Vital Signs", "Heart Rate (bpm)", formValues.heart_rate);
          pushRow("Vital Signs", "Oxygen Saturation (%)", formValues.oxygen_saturation);
          pushRow("Vital Signs", "Temperature (°C)", formValues.temperature);
          pushRow("Measurements", "Current Weight (g)", formValues.current_weight);
          pushRow("Measurements", "Head Circumference (cm)", formValues.head_circumference);
          if (formValues.blood_sugar) {
            const unit = formValues.blood_sugar_unit || "mg/dL";
            console.log("unit", unit);
            pushRow("Blood Sugar", "Blood Glucose", formValues.blood_sugar + " " + unit);
          }
          return rows;
        }
      }
    ]
  }
];
function getNextSectionIndex$1(currentIndex, allVitalsData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalVitalsSections.length) {
    return null;
  }
  const nextSection = neonatalVitalsSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allVitalsData)) {
    return getNextSectionIndex$1(nextIndex, allVitalsData);
  }
  return nextIndex;
}
function getPreviousSectionIndex$1(currentIndex, allVitalsData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalVitalsSections[prevIndex];
  if (prevSection.skipCondition && prevSection.skipCondition(allVitalsData)) {
    return getPreviousSectionIndex$1(prevIndex, allVitalsData);
  }
  return prevIndex;
}

const outcomeSections = [
  {
    title: "Outcome",
    formData: [
      {
        componentType: "listSelectionField",
        header: "What happened to the baby?",
        helperText: "Select one",
        titleStyle: "tonal",
        name: "admissionOutcome",
        type: "single",
        options: [
          { label: "Admit to Ward", value: "Admit to Ward" },
          { label: "Referrer to main hospital", value: "Referrer to main hospital" },
          { label: "Died During Admission", value: "Died During Admission" },
          { label: "Absconded", value: "Absconded" },
          { label: "Discharged home (Well Baby)", value: "Discharged home (Well Baby)" },
          { label: "Other", value: "Other" }
        ],
        padding: true,
        validation: (value) => value ? null : "Please select an admission outcome"
      },
      {
        componentType: "textAreaField",
        header: "Please specify other outcome",
        name: "admissionOutcomeOther",
        placeholder: "Enter outcome",
        condition: (formValues) => formValues.admissionOutcome === "Other",
        validation: (value, formValues) => {
          if (formValues?.admissionOutcome === "Other" && !value) {
            return "Please specify the other outcome";
          }
          return null;
        },
        padding: true
      }
    ]
  },
  {
    title: "Safeguard Concerns",
    subtitle: "Do you have any safeguarding concerns about this family? Or is this an abandoned baby?",
    formData: [
      {
        componentType: "infographicField",
        name: "safeguardConcernsInfo",
        header: "Do you think the mother or child might be at risk for physical, sexual, emotional abuse or neglect?",
        infographicData: {
          key: "safeguard-concerns",
          sections: [
            {
              title: "Do you think the mother or child might be at risk for physical, sexual, emotional abuse or neglect?",
              content: "If so, please speak to your seniors and consider referral to one of the social workers at KCH."
            }
          ],
          footerNote: "Other points of contact: One Stop Centre and Victim Support Unit.",
          footerNoteType: "info"
        }
      }
    ]
  }
];
const signoffSections = [
  {
    title: "Admission Sign-Off",
    subtitle: "Your details will be auto populated. Please confirm.",
    formData: [
      {
        componentType: "inputField",
        header: "Healthcare Worker/Student ID",
        name: "healthcareWorkerId",
        placeholder: "Enter your ID",
        validation: (value) => value ? null : "Healthcare Worker/Student ID is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Electronic Signature",
        name: "electronicSignature",
        placeholder: "Certified User Name",
        validation: (value) => value ? null : "Electronic signature is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Role/Cadre",
        name: "userRole",
        placeholder: "Your role",
        validation: (value) => value ? null : "Role/Cadre is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "dateInputField",
        header: "Date & Time",
        name: "signOffDate",
        validation: (value) => value ? null : "Date & Time is required",
        disabled: true,
        padding: true
      }
    ]
  },
  {
    title: "Print Summary",
    subtitle: "Print admission summary for your records.",
    formData: [
      {
        componentType: "Slot",
        name: "printSlot",
        slotName: "printSection"
      }
    ]
  }
];
const neonatalAdmissionOutcomeSections = outcomeSections;
const neonatalAdmissionSignOffSections = signoffSections;
const neonatalAdmissionOutcomesSections = [...outcomeSections, ...signoffSections];
function getNextSectionIndex(currentIndex, allOutcomeData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalAdmissionOutcomesSections.length) {
    return null;
  }
  const nextSection = neonatalAdmissionOutcomesSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allOutcomeData)) {
    return getNextSectionIndex(nextIndex, allOutcomeData);
  }
  return nextIndex;
}
function getPreviousSectionIndex(currentIndex, allOutcomeData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalAdmissionOutcomesSections[prevIndex];
  if (prevSection.skipCondition && prevSection.skipCondition(allOutcomeData)) {
    return getPreviousSectionIndex(prevIndex, allOutcomeData);
  }
  return prevIndex;
}

const defaultNeonatalTriageForm = {
  crying: "",
  breathing: void 0,
  oxygen_saturation: "",
  central_cyanosis: "",
  convulsions: "",
  present_signs: [],
  respiratory_rate: "",
  heart_rate: "",
  oxygen_saturation_vital: "",
  temperature: "",
  respiratory_distress_signs: [],
  fever_management: "",
  respiratory_rate_2: "",
  heart_rate_2: "",
  oxygen_saturation_2: "",
  blood_sugar: "",
  referral_notes: "",
  referral_required: "",
  lowSugar: ""
};
const neonatalTriageFormKey = Symbol("neonatalTriageForm");

const defaultNeonatalVitalsForm = {
  respiratory_rate: "",
  heart_rate: "",
  can_measure_oxygen_saturation: null,
  oxygen_saturation: "",
  can_measure_temperature: null,
  temperature: "",
  current_weight: "",
  head_circumference: "",
  can_measure_blood_sugar: null,
  blood_sugar: "",
  blood_sugar_unit: "mg/dL"
};
const neonatalVitalsFormKey = Symbol("neonatalVitalsForm");

const defaultNeonatalSignsSymptomsForm = {
  is_readmission: "",
  presenting_complaints: [],
  detailed_assessment_notes: "",
  symptom_onset_time: "",
  symptom_severity: ""
};
const neonatalSignsSymptomsFormKey = Symbol("neonatalSignsSymptomsForm");

const defaultNeonatalReviewOfSystemsForm = {
  // Feeding History
  type_of_feed: "",
  mode_of_feeding: "",
  frequency_of_feeding: "",
  duration_of_feeding: "",
  effort_during_feeding: "",
  // Bowel Movements
  is_baby_vomiting: "",
  frequency_of_vomiting: "",
  passage_of_meconium: "",
  frequency_of_stooling: "",
  color_of_stools: "",
  consistency_of_stools: "",
  blood_in_stools: "",
  mucus_in_stools: "",
  // Urine Output
  is_baby_passing_urine: "",
  number_of_wet_nappies: "",
  color_of_urine: "",
  volume_ml: "",
  // Growth
  weight_trend_since_birth: "",
  // Mouth and Oropharynx
  does_baby_have_oral_thrush: "",
  does_baby_have_oral_sores: "",
  does_baby_have_tongue_tie: "",
  // Major Organs
  activity: "",
  hydration_urination: "",
  stool_passed_meconium: "",
  stool_passed_transitional: "",
  vomiting: "",
  vomiting_bile_stained: "",
  difficulty_breathing: "",
  bleeding: "",
  jaundice: "",
  convulsions: "",
  // Respiratory
  baby_grunting: "",
  color_of_vomit: "",
  gasping: "",
  nasal_flaring: "",
  cyanosis: "",
  // Major Organs - Continued
  size_of_uterus: "",
  oxygen_level_2: "",
  oxygen_level_value: "",
  // Skin/Scalp and Subcutaneous
  birthmark_abnormalities: "",
  pustules: "",
  peeling: "",
  umbilical_discharge: "",
  swelling: "",
  // Abdomen
  abdominal_distension: "",
  abdominal_pain: "",
  umbilical_condition: "",
  mass: "",
  tenderness: "",
  organomegaly: "",
  // Musculoskeletal
  skin_rash: "",
  talipes: "",
  extra_digits: "",
  spinal_bifida: "",
  reduced_movement: "",
  fracture: "",
  deformity: "",
  club_foot: "",
  other_abnormalities: ""
};
const neonatalReviewOfSystemsFormKey = Symbol("neonatalReviewOfSystemsForm");

const defaultNeonatalAdmissionOutcomesForm = {
  /* Admission Outcome */
  admissionOutcome: "",
  admissionOutcomeOther: "",
  /* Safeguard Concerns */
  safeguardConcerns: "",
  /* Admission Sign-Off */
  healthcareWorkerId: "",
  electronicSignature: "",
  userRole: "",
  signOffDate: ""
};
const neonatalAdmissionOutcomesFormKey = Symbol("neonatal-admission-outcomes-form");

const defaultNeonatalDischargeForm = {
  mainDiagnosis: null,
  otherProblems: [],
  medications: [],
  appointments: []
};
const neonatalDischargeFormKey = Symbol("neonatalDischargeForm");

const medicationPrescriptionField = {
  componentType: "drugPrescriptionField",
  name: "prescriptions",
  header: "Medications given on discharge",
  placeholder: "Search for medication",
  padding: true,
  frequencies: ["once a day", "twice a day", "3 times a day", "4 times a day"]
};
const neonatalDischargeSections = [
  {
    name: "Vitals",
    title: "Neonates Discharge Vitals Details",
    subtitle: "Record these vital signs",
    formData: [
      {
        componentType: "inputField",
        header: "Current Weight (g)",
        name: "weight",
        type: "number",
        padding: true,
        validation: (value) => value ? null : "Required"
      },
      {
        componentType: "inputField",
        header: "HR (bpm)",
        name: "heartRate",
        type: "number",
        padding: true,
        validation: (value) => value ? null : "Required"
      },
      {
        componentType: "inputField",
        header: "Respiratory rate (bpm)",
        name: "respiratoryRate",
        type: "number",
        padding: true,
        validation: (value) => value ? null : "Required"
      },
      {
        componentType: "inputField",
        header: "Saturation in Air (%)",
        name: "oxygenSaturation",
        type: "number",
        padding: true,
        validation: (value) => value ? null : "Required"
      },
      {
        componentType: "inputField",
        header: "Temperature (deg C)",
        name: "temperature",
        type: "number",
        padding: true,
        validation: (value) => value ? null : "Required"
      }
    ]
  },
  {
    name: "ReconsiderDischarge",
    title: "Reconsider Discharge",
    subtitle: "The entered vital signs are outside normal ranges! Cancel the Discharge and do the following",
    formData: [
      {
        componentType: "infographicField",
        name: "reconsider_discharge_infographic",
        displayMode: "visual",
        padding: true,
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-DM5pynbQ.js'),true              ?[]:void 0,import.meta.url).then((m) => m.getInfographicByKey("ReconsiderDischarge"))
      }
    ],
    skipCondition: (dischargeData) => {
      const hr = Number(dischargeData.heartRate);
      const rr = Number(dischargeData.respiratoryRate);
      const sat = Number(dischargeData.oxygenSaturation);
      const temp = Number(dischargeData.temperature);
      if (!hr && !rr && !sat && !temp) return true;
      const isHrNormal = hr >= 120 && hr <= 160;
      const isSatNormal = sat >= 90 && sat <= 95;
      const isTempNormal = temp >= 36.5 && temp <= 37.5;
      const isRrNormal = rr >= 30 && rr <= 60;
      const allNormal = isHrNormal && isSatNormal && isTempNormal && isRrNormal;
      return allNormal;
    }
  },
  {
    name: "Diagnosis",
    title: "Neonates Discharge Diagnoses Details",
    subtitle: "Select diagnoses",
    formData: [
      {
        componentType: "searchableDropdown",
        header: "Select the Discharge Diagnosis",
        name: "mainDiagnosis",
        placeholder: "Search",
        dropdownHeader: "Select ONE",
        mode: "neonatal",
        bold: true,
        options: [
          { label: "Hypoglycaemia (symptomatic)", value: "Hypoglycaemia1" },
          { label: "Abscess", value: "Abscess" },
          { label: "Fever", value: "Fever" },
          { label: "Birth Asphyxia", value: "Asphyxia" },
          { label: "Neonatal Sepsis (Early onset - Symptomatic)", value: "Neonatal Sepsis - Early Onset" },
          { label: "Prematurity with Respiratory Distress", value: "Prematurity with RDS" },
          { label: "Suspected Neonatal Sepsis", value: "Sepsis_Sus" },
          { label: "Possible Meconium Aspiration", value: "Meconium Aspiration" }
        ],
        validation: (value) => value ? null : "A main Discharge Diagnosis is required.",
        padding: true
      },
      {
        componentType: "searchableDropdown",
        header: "Other problems (If any)",
        name: "otherProblems",
        placeholder: "Search",
        dropdownHeader: "Select problems",
        mode: "neonatal",
        bold: true,
        multiple: true,
        options: [
          { label: "Hypoglycaemia (symptomatic)", value: "Hypoglycaemia1" },
          { label: "Abscess", value: "Abscess" },
          { label: "Fever", value: "Fever" },
          { label: "Birth Asphyxia", value: "Asphyxia" },
          { label: "Neonatal Sepsis (Early onset - Symptomatic)", value: "Neonatal Sepsis - Early Onset" },
          { label: "Prematurity with Respiratory Distress", value: "Prematurity with RDS" },
          { label: "Suspected Neonatal Sepsis", value: "Sepsis_Sus" },
          { label: "Possible Meconium Aspiration", value: "Meconium Aspiration" }
        ],
        padding: true
      }
    ]
  },
  {
    name: "Medications",
    title: "Neonates Discharge Prescriptions Details",
    subtitle: "Prescriptions given on discharge",
    formData: [
      {
        ...medicationPrescriptionField,
        initialValue: []
      }
    ]
  },
  {
    name: "ClinicFollowUp",
    title: "Neonates Discharge Clinic Follow-up Details",
    subtitle: "Assign clinic days",
    formData: []
    // Custom component handles this
  },
  {
    name: "HealthEducation",
    title: "Health Education",
    subtitle: "Education given to mother",
    formData: [
      {
        componentType: "radioButtonField",
        header: "Has health education been given to the mother?",
        name: "healthEducationGiven",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Required"
      },
      {
        componentType: "radioButtonField",
        header: "Has the mother been given an insecticide treated net?",
        name: "insecticideTreatedNetGiven",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        padding: true,
        validation: (value) => value ? null : "Required"
      }
    ]
  },
  {
    name: "Outcome",
    title: "Outcome",
    subtitle: "What happened to the baby?",
    formData: [
      {
        componentType: "select",
        header: "Select one",
        name: "outcome",
        options: [
          { label: "Discharged", value: "Discharged" },
          { label: "Death (at LESS than 24 hours of age)", value: "Death < 24hrs" },
          { label: "Death (at MORE than 24 hours of age)", value: "Death > 24hrs" },
          { label: "Died during Admission", value: "Died during Admission" },
          { label: "Absconded", value: "Absconded" },
          { label: "Transferred to another ward", value: "Transferred to another ward" },
          { label: "Transferred to another hospital", value: "Transferred to another hospital" },
          { label: "Discharged on request", value: "Discharged on request" },
          { label: "Discharged on palliative care", value: "Discharged on palliative care" },
          { label: "Brought in dead - BID", value: "Brought in dead" },
          { label: "Stillbirth", value: "Stillbirth" }
        ],
        padding: true,
        validation: (value) => value ? null : "Required"
      }
    ]
  },
  {
    name: "SignOff",
    title: "Discharge Sign-Off",
    subtitle: "Your details will be auto populated. Please confirm.",
    formData: [
      {
        componentType: "inputField",
        header: "Healthcare Worker/Student ID",
        name: "healthcareWorkerId",
        placeholder: "Enter your ID",
        validation: (value) => value ? null : "Healthcare Worker/Student ID is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Electronic Signature",
        name: "electronicSignature",
        placeholder: "Certified User Name",
        validation: (value) => value ? null : "Electronic signature is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Role/Cadre",
        name: "userRole",
        placeholder: "Your role",
        validation: (value) => value ? null : "Role/Cadre is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "dateInputField",
        header: "Date & Time",
        name: "signOffDate",
        validation: (value) => value ? null : "Date & Time is required",
        disabled: true,
        padding: true
      }
    ]
  },
  {
    name: "Summary",
    title: "Summary",
    subtitle: "Review discharge details",
    formData: []
    // Custom component handles this
  }
];
function getNextDischargeSectionIndex(currentIndex, dischargeData) {
  let nextIndex = currentIndex + 1;
  while (nextIndex < neonatalDischargeSections.length) {
    const section = neonatalDischargeSections[nextIndex];
    if (!section.skipCondition || !section.skipCondition(dischargeData)) {
      return nextIndex;
    }
    nextIndex++;
  }
  return null;
}
function getPreviousDischargeSectionIndex(currentIndex, dischargeData) {
  let prevIndex = currentIndex - 1;
  while (prevIndex >= 0) {
    const section = neonatalDischargeSections[prevIndex];
    if (!section.skipCondition || !section.skipCondition(dischargeData)) {
      return prevIndex;
    }
    prevIndex--;
  }
  return null;
}
function getDischargeSectionByName(name) {
  return neonatalDischargeSections.find((section) => section.name === name);
}
function getDischargeSectionIndexByName(name) {
  return neonatalDischargeSections.findIndex((section) => section.name === name);
}

const genitaliaAssessmentLabels = {
  male_normal: "Normal Male genitalia",
  female_normal: "Normal Female genitalia",
  ambiguous: "Ambiguous Genitalia (not sure)",
  hypospadias: "Hypospadias",
  undescended_testes: "Undescended testes",
  other_abnormality: "Other abnormality"
};
const neonatalGeneralExaminationSections = [
  {
    title: "General Examination",
    subtitle: "",
    formData: [
      {
        componentType: "listSelectionField",
        name: "activityAssessment",
        header: "How is the baby's activity?",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Alert, active, appropriate (normal)", value: "Alert" },
          { label: "Irritable, hyperalert or inconsolable", value: "Irrit" },
          { label: "Lethargic, quiet, decreased activity", value: "Leth" },
          { label: "Seizures, convulsions, or twitchings", value: "Convulsions" },
          { label: "Coma (unresponsive)", value: "Coma" }
        ],
        validation: (value) => !value ? "Activity assessment is required. Please select an option." : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Fontanelle",
    formData: [
      {
        componentType: "listSelectionField",
        name: "fontanelleAssessment",
        header: "FEEL the fontanelle",
        subtitle: "Assess the fontanelle condition",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Flat, Not Tense (normal)", value: "Flat" },
          { label: "Sunken", value: "Sunk" },
          { label: "Bulging/Tense", value: "Bulg" }
        ],
        validation: (value) => !value ? "Fontanelle assessment is required" : null
      },
      {
        componentType: "listSelectionField",
        name: "massInHeadAssessment",
        header: "Mass in the head",
        subtitle: "Check for any masses in the head",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Caput", value: "caput" },
          { label: "Cephalohematoma", value: "cephalohematoma" },
          { label: "Subgalea hemorrhage", value: "subgalea" },
          { label: "Normal", value: "normal" }
        ],
        validation: (value) => !value ? "Mass in the head assessment is required" : null
      },
      {
        componentType: "radioButtonField",
        name: "isBabyYellow",
        header: "Is the baby yellow?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby is yellow" : null,
        showClearButton: true
      },
      {
        componentType: "radioButtonField",
        name: "isBabyPallorPink",
        header: "Is the baby Pallor Pink?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby is pallor pink" : null,
        showClearButton: true
      },
      {
        componentType: "radioButtonField",
        name: "hasBabyCyanosis",
        header: "Does the baby have cyanosis?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby has cyanosis" : null,
        showClearButton: true
      },
      {
        componentType: "radioButtonField",
        name: "hasBabyOedema",
        header: "Does the baby have oedema?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby has oedema" : null,
        showClearButton: true
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Capillary Refill Time (CRT)",
    formData: [
      {
        componentType: "listSelectionField",
        name: "heartSoundsAssessment",
        header: "",
        subtitle: "Do this by pressing over the sternum for 5 seconds & release. \n How long does it ake for skin to return to original color?",
        titleStyle: "tonal",
        helperText: "Select one",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Less than 3 seconds", value: "Less than 3 seconds" },
          { label: "3 or more seconds", value: "3 or more seconds" }
        ],
        validation: (value) => !value ? "Heart sounds assessment is required" : null
      },
      {
        componentType: "listSelectionField",
        name: "femoralPulses",
        header: "Femoral pulse",
        subtitle: "Press over the center of the line at the top of the thighs",
        helperText: "Select one",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Palpable", value: "palpable" },
          { label: "Weak or absent", value: "weak" },
          { label: "I am not confident feeling the femoral pulses", value: "I am not confident feeling the femoral pulses" },
          { label: "Difficult to feel", value: "Difficult to feel" }
        ],
        validation: (value) => !value ? "Pulse assessment is required" : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Genitalia",
    formData: [
      {
        componentType: "listSelectionField",
        name: "genitaliaAssessment",
        header: "Genitalia examination",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Normal male genitalia", value: "Normal male" },
          { label: "Normal female genitalia", value: "Normal female" },
          { label: "Abnormal Male genitalia", value: "Abnormal Male genitalia" },
          { label: "Abnormal Female genitalia", value: "Abnormal Female genitalia" },
          { label: "Ambiguous Genitalia (not sure)", value: "Ambiguous Genitalia (not sure)" }
        ],
        validation: (value) => !value ? "Genitalia assessment is required" : null
      },
      {
        componentType: "listSelectionField",
        name: "anusPatent",
        header: "Anus",
        subtitle: "Check the babies anus",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Patent (Normal)", value: "Patent (Normal)" },
          { label: "Imperforate", value: "Imperforate" },
          { label: "Abnormal", value: "Abnormal" }
        ],
        validation: (value) => !value ? "Genitalia assessment is required" : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Cleft Lip & Palate",
    formData: [
      {
        componentType: "illustration",
        name: "cleftIllustration",
        category: "Cleft Lip & Palate",
        title: "Look at the lip and palate, is it intact?",
        imageSrc: IMAGES.banners.cleft,
        imageAlt: "Example of cleft lip and palate",
        caption: "Select one."
      },
      {
        componentType: "listSelectionField",
        name: "cleftLipPalateAssessment",
        header: "",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Palate and lip intact (normal)", value: "normal" },
          { label: "Cleft palate", value: "cleft_palate" },
          { label: "Cleft lip", value: "cleft_lip" },
          { label: "Cleft lip and palate", value: "cleft_lip_and_palate" }
        ],
        validation: (value) => !value ? "Cleft lip and palate assessment is required" : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "",
    formData: [
      {
        componentType: "radioButtonField",
        name: "hasCongenitalAbnormalities",
        header: "Are there any congenital abnormalities?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if there are congenital abnormalities" : null,
        showClearButton: true
      },
      {
        componentType: "textAreaField",
        name: "congenitalAbnormalitiesDescription",
        header: "Describe the congenital abnormalities",
        placeholder: "Enter detailed description of abnormalities",
        minHeight: 120,
        padding: true,
        validation: (value, formValues) => {
          if (formValues?.hasCongenitalAbnormalities === "yes" && !value) {
            return "Please describe the congenital abnormalities";
          }
          return null;
        },
        condition: (formValues) => formValues.hasCongenitalAbnormalities === "yes"
      }
    ]
  },
  {
    title: "Summary",
    subtitle: "Review general examination findings",
    description: "Review all examination findings before proceeding",
    formData: [
      {
        componentType: "summaryField",
        name: "generalExaminationSummary",
        title: "General Examination Summary",
        subtitle: "Auto-generated from the examination findings",
        description: "Confirm that the values below match your observations before proceeding.",
        emptyStateMessage: "No examination findings captured yet.",
        builder: (formValues) => {
          const rows = [];
          const pushRow = (section, label, value, detail) => {
            if (!value && !detail && !label) {
              return;
            }
            rows.push({ section, label, value, detail });
          };
          if (formValues.activityAssessment) {
            const activityLabels = {
              Alert: "Alert, active, appropriate (normal)",
              Irrit: "Irritable, hyperalert or inconsolable",
              Leth: "Lethargic, quiet, decreased activity",
              Convulsions: "Seizures, convulsions, or twitchings",
              Coma: "Coma (unresponsive)"
            };
            pushRow("Activity", "Activity Level", activityLabels[formValues.activityAssessment] || formValues.activityAssessment);
          }
          if (formValues.fontanelleAssessment || formValues.massInHeadAssessment) {
            const fontanelleLabels = {
              Flat: "Flat, Not Tense (normal)",
              Sunk: "Sunken",
              Bulg: "Bulging/Tense"
            };
            const massLabels = {
              caput: "Caput",
              cephalohematoma: "Cephalohematoma",
              subgalea: "Subgalea hemorrhage",
              normal: "Normal"
            };
            if (formValues.fontanelleAssessment) {
              pushRow("Head", "Fontanelle", fontanelleLabels[formValues.fontanelleAssessment] || formValues.fontanelleAssessment);
            }
            if (formValues.massInHeadAssessment) {
              pushRow("Head", "Mass in Head", massLabels[formValues.massInHeadAssessment] || formValues.massInHeadAssessment);
            }
          }
          pushRow("Color", "Baby Yellow", formValues.isBabyYellow === "yes" ? "Yes" : formValues.isBabyYellow === "no" ? "No" : void 0);
          pushRow(
            "Color",
            "Pallor Pink",
            formValues.isBabyPallorPink === "yes" ? "Yes" : formValues.isBabyPallorPink === "no" ? "No" : void 0
          );
          pushRow(
            "Color",
            "Cyanosis",
            formValues.hasBabyCyanosis === "yes" ? "Yes" : formValues.hasBabyCyanosis === "no" ? "No" : void 0
          );
          pushRow("Color", "Oedema", formValues.hasBabyOedema === "yes" ? "Yes" : formValues.hasBabyOedema === "no" ? "No" : void 0);
          if (formValues.heartSoundsAssessment) {
            pushRow("Cardiovascular", "Heart Sounds", formValues.heartSoundsAssessment);
          }
          if (formValues.femoralPulses) {
            pushRow("Cardiovascular", "Femoral Pulse", formValues.femoralPulses);
          }
          pushRow(
            "Cardiovascular",
            "Cardiac Abnormality",
            formValues.hasCardiacAbnormality === "yes" ? "Yes" : formValues.hasCardiacAbnormality === "no" ? "No" : void 0
          );
          if (formValues.genitaliaAssessment) {
            const genitaliaLabel = genitaliaAssessmentLabels[formValues.genitaliaAssessment] || formValues.genitaliaAssessment;
            pushRow("Genital & Anus", "Genitalia", genitaliaLabel);
          }
          pushRow(
            "Genital & Anus",
            "Anus Patent",
            formValues.anusPatent === "yes" ? "Yes" : formValues.anusPatent === "no" ? "No" : void 0
          );
          pushRow(
            "Genital & Anus",
            "Meconium Passed",
            formValues.hasMeconiumPassed === "yes" ? "Yes" : formValues.hasMeconiumPassed === "no" ? "No" : void 0
          );
          pushRow(
            "Oral Cavity",
            "Cleft Lip",
            formValues.hasCleftLip === "yes" ? "Yes" : formValues.hasCleftLip === "no" ? "No" : void 0
          );
          pushRow(
            "Oral Cavity",
            "Cleft Palate",
            formValues.hasCleftPalate === "yes" ? "Yes" : formValues.hasCleftPalate === "no" ? "No" : void 0
          );
          pushRow(
            "Abnormalities",
            "Congenital Abnormalities",
            formValues.hasCongenitalAbnormalities === "yes" ? "Yes" : formValues.hasCongenitalAbnormalities === "no" ? "No" : void 0
          );
          if (formValues.hasCongenitalAbnormalities === "yes" && formValues.congenitalAbnormalitiesDescription) {
            pushRow("Abnormalities", "Description", formValues.congenitalAbnormalitiesDescription);
          }
          return rows;
        }
      }
    ]
  }
];
function getNextGeneralExaminationSectionIndex(currentIndex, allExamData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalGeneralExaminationSections.length) {
    return null;
  }
  const nextSection = neonatalGeneralExaminationSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allExamData)) {
    return getNextGeneralExaminationSectionIndex(nextIndex, allExamData);
  }
  return nextIndex;
}
function getPreviousGeneralExaminationSectionIndex(currentIndex, allExamData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalGeneralExaminationSections[prevIndex];
  if (prevSection.skipCondition && prevSection.skipCondition(allExamData)) {
    return getPreviousGeneralExaminationSectionIndex(prevIndex, allExamData);
  }
  return prevIndex;
}

const neonatalInvestigationSections = [
  {
    title: "Investigations",
    subtitle: "Laboratory investigations and test orders",
    formData: [
      {
        componentType: "Slot",
        name: "investigationComponent",
        slotName: "investigationComponent"
      }
    ]
  },
  {
    title: "Summary",
    subtitle: "Review all investigations",
    formData: [
      {
        componentType: "Slot",
        name: "investigationSummary",
        slotName: "investigationSummary"
      }
    ]
  }
];
function getNextInvestigationSectionIndex(currentIndex, _investigationData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalInvestigationSections.length) {
    return null;
  }
  return nextIndex;
}
function getPreviousInvestigationSectionIndex(currentIndex, _investigationData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  return prevIndex;
}

const cloneDefaultForm$3 = () => JSON.parse(JSON.stringify(defaultNeonatalVitalsForm));
const useNeonatalVitalsStore = defineStore("neonatalVitalsStore", {
  state: () => ({
    activePatientId: null,
    formData: cloneDefaultForm$3(),
    formCache: {}
  }),
  actions: {
    initializeForPatient(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.formData, cloneDefaultForm$3());
        return;
      }
      this.activePatientId = patientId;
      const cacheKey = String(patientId);
      const cachedForm = this.formCache[cacheKey];
      if (cachedForm) {
        Object.assign(this.formData, cachedForm);
      } else {
        Object.assign(this.formData, cloneDefaultForm$3());
      }
      this.saveSnapshot();
    },
    saveSnapshot() {
      if (this.activePatientId == null) return;
      const cacheKey = String(this.activePatientId);
      this.formCache[cacheKey] = JSON.parse(JSON.stringify(this.formData));
    },
    resetActiveForm() {
      Object.assign(this.formData, cloneDefaultForm$3());
      this.saveSnapshot();
    },
    clearPatient(patientId) {
      delete this.formCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetActiveForm();
      }
    }
  },
  persist: {
    paths: ["activePatientId", "formData", "formCache"]
  }
});

const cloneDefaultForm$2 = () => JSON.parse(JSON.stringify(defaultNeonatalSignsSymptomsForm));
const useSignsSymptomsStore = defineStore("neonatalSignsSymptomsStore", {
  state: () => ({
    activePatientId: null,
    formData: cloneDefaultForm$2(),
    formCache: {}
  }),
  actions: {
    initializeForPatient(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.formData, cloneDefaultForm$2());
        return;
      }
      this.activePatientId = patientId;
      const cacheKey = String(patientId);
      const cachedForm = this.formCache[cacheKey];
      if (cachedForm) {
        Object.assign(this.formData, cachedForm);
      } else {
        Object.assign(this.formData, cloneDefaultForm$2());
      }
      this.saveSnapshot();
    },
    saveSnapshot() {
      if (this.activePatientId == null) return;
      const cacheKey = String(this.activePatientId);
      this.formCache[cacheKey] = JSON.parse(JSON.stringify(this.formData));
    },
    resetActiveForm() {
      Object.assign(this.formData, cloneDefaultForm$2());
      this.saveSnapshot();
    },
    clearPatient(patientId) {
      delete this.formCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetActiveForm();
      }
    }
  },
  persist: {
    paths: ["activePatientId", "formData", "formCache"]
  }
});

const cloneDefaultForm$1 = () => JSON.parse(JSON.stringify(defaultNeonatalReviewOfSystemsForm));
const useReviewOfSystemsStore = defineStore("neonatalReviewOfSystemsStore", {
  state: () => ({
    activePatientId: null,
    formData: cloneDefaultForm$1(),
    storedForms: {}
  }),
  actions: {
    initializeForPatient(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.formData, cloneDefaultForm$1());
        return;
      }
      this.activePatientId = patientId;
      const key = String(patientId);
      const existingForm = this.storedForms[key];
      if (existingForm) {
        Object.assign(this.formData, existingForm);
      } else {
        Object.assign(this.formData, cloneDefaultForm$1());
      }
      this.saveSnapshot();
    },
    saveSnapshot() {
      if (this.activePatientId == null) return;
      const key = String(this.activePatientId);
      this.storedForms[key] = JSON.parse(JSON.stringify(this.formData));
    },
    resetActiveForm() {
      Object.assign(this.formData, cloneDefaultForm$1());
      this.saveSnapshot();
    },
    clearPatient(patientId) {
      delete this.storedForms[String(patientId)];
    }
  },
  persist: {
    paths: ["activePatientId", "formData", "storedForms"]
  }
});

const cloneDefaultAdmissionOutcomesForm = () => JSON.parse(JSON.stringify(defaultNeonatalAdmissionOutcomesForm));
const useNeonatalAdmissionOutcomesStore = defineStore("neonatalAdmissionOutcomesStore", {
  state: () => ({
    activePatientId: null,
    admissionOutcomesForm: cloneDefaultAdmissionOutcomesForm(),
    admissionOutcomesFormCache: {}
  }),
  getters: {
    getActivePatientId() {
      return this.activePatientId;
    }
  },
  actions: {
    initializeAdmissionOutcomesForm(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.admissionOutcomesForm, cloneDefaultAdmissionOutcomesForm());
        return;
      }
      this.activePatientId = patientId;
      const cachedForm = this.admissionOutcomesFormCache[String(patientId)];
      if (cachedForm) {
        Object.assign(this.admissionOutcomesForm, cachedForm);
      } else {
        Object.assign(this.admissionOutcomesForm, cloneDefaultAdmissionOutcomesForm());
      }
      this.saveAdmissionOutcomesSnapshot();
    },
    saveAdmissionOutcomesSnapshot() {
      if (this.activePatientId == null) return;
      this.admissionOutcomesFormCache[String(this.activePatientId)] = JSON.parse(JSON.stringify(this.admissionOutcomesForm));
    },
    resetAdmissionOutcomesForm() {
      Object.assign(this.admissionOutcomesForm, cloneDefaultAdmissionOutcomesForm());
      this.saveAdmissionOutcomesSnapshot();
    },
    clearAdmissionOutcomesForm(patientId) {
      delete this.admissionOutcomesFormCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetAdmissionOutcomesForm();
      }
    }
  },
  persist: {
    paths: [
      "activePatientId",
      "admissionOutcomesForm",
      "admissionOutcomesFormCache"
    ]
  }
});

const cloneDefaultDischargeForm = () => JSON.parse(JSON.stringify(defaultNeonatalDischargeForm));
const useNeonatalDischargeStore = defineStore("neonatalDischargeStore", {
  state: () => ({
    activePatientId: null,
    dischargeForm: cloneDefaultDischargeForm(),
    dischargeFormCache: {}
  }),
  actions: {
    initializeDischargeForm(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.dischargeForm, cloneDefaultDischargeForm());
        return;
      }
      this.activePatientId = patientId;
      const cachedForm = this.dischargeFormCache[String(patientId)];
      if (cachedForm && !cachedForm.submitted) {
        Object.assign(this.dischargeForm, cachedForm);
      } else {
        Object.assign(this.dischargeForm, cloneDefaultDischargeForm());
      }
      this.saveDischargeSnapshot();
    },
    saveDischargeSnapshot() {
      if (this.activePatientId == null) return;
      this.dischargeFormCache[String(this.activePatientId)] = JSON.parse(JSON.stringify(this.dischargeForm));
    },
    resetDischargeForm() {
      Object.assign(this.dischargeForm, cloneDefaultDischargeForm());
      this.saveDischargeSnapshot();
    },
    clearDischargeForm(patientId) {
      delete this.dischargeFormCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetDischargeForm();
      }
    }
  },
  persist: {
    paths: ["activePatientId", "dischargeForm", "dischargeFormCache"]
  }
});

const defaultNeonatalSystemicExaminationForm = {
  respiratoryDistress: "",
  gasping: false,
  fastBreathing: false,
  nasalFlaring: false,
  chestIndrawing: false,
  stridor: false,
  grunting: false,
  stethoscopeAvailable: "",
  chestClear: false,
  unequalAirEntry: false,
  unilateralCrackles: false,
  unilateralWheeze: false,
  bilateralCracklesWheeze: false,
  stridorAuscultation: false,
  normalHeartSounds: false,
  murmurExtraSounds: false,
  notConfidentMurmurs: false,
  colorPink: false,
  colorBlue: false,
  colorPale: false,
  colorYellow: false,
  crtLessThan3: false,
  crt3OrMore: false,
  femoralPulsePalpable: false,
  femoralPulseWeak: false,
  notConfidentFemoralPulses: false,
  femoralPulseDifficult: false,
  chestSummaryNotes: "",
  abdomenSoftNormal: false,
  abdomenDistended: false,
  abdomenWallDefect: false,
  pruneBellySyndrome: false,
  abdomenMass: false,
  abdomenDistendedConfirm: "",
  abdomenShiny: "",
  abdomenColorChange: "",
  abdomenDistendedVeins: "",
  abdomenTender: "",
  hepatomegaly: "",
  splenomegaly: "",
  palpableKidneys: "",
  otherMasses: "",
  otherMassesDescription: "",
  umbilicusHealthy: false,
  umbilicusBleeding: false,
  umbilicusRedSkin: false,
  umbilicusMeconium: false,
  umbilicalHernia: false,
  umbilicusAbnormal: false,
  genitaliaMaleNormal: false,
  genitaliaFemaleNormal: false,
  genitaliaMaleAbnormal: false,
  genitaliaFemaleAbnormal: false,
  genitaliaAmbiguous: false,
  anusPatent: false,
  anusImperforate: false,
  anusAbnormal: false,
  abdomenSummaryNotes: "",
  toneAssessment: "",
  suckReflex: "",
  graspReflex: "",
  MoreReflex: "",
  neurologicalSummaryNotes: "",
  musculoskeletalDeformities: [],
  skinFindings: [],
  birthAsphyxiaSuspected: "",
  thompsonRespirationScore: "",
  thompsonSuckScore: "",
  thompsonMoroScore: "",
  thompsonGraspScore: "",
  thompsonFontanelleScore: "",
  thompsonToneScore: "",
  thompsonConsciousnessScore: "",
  thompsonFitsScore: "",
  thompsonPostureScore: ""
};
const neonatalSystemicExaminationFormKey = Symbol("neonatalSystemicExaminationForm");

const cloneDefaultForm = () => JSON.parse(JSON.stringify(defaultNeonatalSystemicExaminationForm));
const useSystemicExaminationStore = defineStore("neonatalSystemicExaminationStore", {
  state: () => ({
    activePatientId: null,
    formData: cloneDefaultForm(),
    formCache: {}
  }),
  actions: {
    initializeForPatient(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.formData, cloneDefaultForm());
        return;
      }
      this.activePatientId = patientId;
      const cacheKey = String(patientId);
      const cachedForm = this.formCache[cacheKey];
      if (cachedForm) {
        Object.assign(this.formData, cachedForm);
      } else {
        Object.assign(this.formData, cloneDefaultForm());
      }
      this.saveSnapshot();
    },
    saveSnapshot() {
      if (this.activePatientId == null) return;
      const cacheKey = String(this.activePatientId);
      this.formCache[cacheKey] = JSON.parse(JSON.stringify(this.formData));
    },
    resetActiveForm() {
      Object.assign(this.formData, cloneDefaultForm());
      this.saveSnapshot();
    },
    clearPatient(patientId) {
      delete this.formCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetActiveForm();
      }
    }
  },
  persist: {
    paths: ["activePatientId", "formData", "formCache"]
  }
});

const useDiagnosisStore = defineStore("diagnosisStore", {
  state: () => ({
    workingDiagnosis: null,
    differentialDiagnoses: [],
    diagnosisNotes: "",
    current_patient_ID: null
  }),
  actions: {
    /**
     * Sets the single selected Working Diagnosis.
     * @param data The selected Option object or null to clear.
     */
    setWorkingDiagnosis(data) {
      this.workingDiagnosis = data;
    },
    /**
     * Sets the array of Differential Diagnoses (replaces the entire list).
     * @param data An array of selected Option objects.
     */
    setDifferentialDiagnoses(data) {
      this.differentialDiagnoses = data;
    },
    /**
     * Adds a single diagnosis to the differential list if it doesn't already exist.
     * @param data The Option object to add.
     */
    addDifferentialDiagnosis(data) {
      if (!this.differentialDiagnoses.some((d) => d.value === data.value)) {
        this.differentialDiagnoses.push(data);
      }
    },
    /**
     * Removes a single diagnosis from the differential list.
     * @param data The Option object to remove.
     */
    removeDifferentialDiagnosis(data) {
      this.differentialDiagnoses = this.differentialDiagnoses.filter((d) => d.value !== data.value);
    },
    /**
     * Sets notes related to the diagnosis.
     * @param notes The diagnostic notes string.
     */
    setDiagnosisNotes(notes) {
      this.diagnosisNotes = notes;
    },
    /**
     * Resets all diagnosis-related data to its initial state.
     */
    resetDiagnosisData() {
      this.$reset();
      console.log("Diagnosis Store Data has been reset.");
    },
    /**
     * Sets the current patient ID and clears all diagnosis selections if the ID changes.
     * @param patientID The new patient ID to set.
     */
    setCurrentPatientID(patientID) {
      if (this.current_patient_ID !== patientID) {
        this.workingDiagnosis = null;
        this.differentialDiagnoses = [];
        this.diagnosisNotes = "";
        this.current_patient_ID = patientID;
        console.log(`Patient ID changed to: ${patientID}. All diagnosis selections have been cleared.`);
      } else {
        console.log(`Patient ID unchanged: ${patientID}. Diagnosis data retained.`);
      }
    }
  }
});

const useNeonatalExamStore = defineStore("neonatalExamStore", {
  state: () => ({
    // Activity
    activityAssessment: null,
    // Head/Color
    fontanelleAssessment: null,
    massInHeadAssessment: null,
    isBabyYellow: null,
    isBabyPallorPink: null,
    hasBabyCyanosis: null,
    hasBabyOedema: null,
    // Cardiovascular Assessment
    heartSoundsAssessment: null,
    hasCardiacAbnormality: null,
    capillaryRefillTime: null,
    femoralPulses: null,
    // Genital and Anus Assessment
    genitaliaAssessment: null,
    anusAssessment: null,
    hasMeconiumPassed: null,
    // Cleft Lip/Palate
    cleftAssessment: null,
    hasCleftLip: null,
    hasCleftPalate: null,
    // Other Congenital Abnormalities
    hasCongenitalAbnormalities: null,
    abnormalitiesNotes: "",
    current_patient_ID: null
  }),
  actions: {
    // --- Activity Actions ---
    setActivityAssessment(data) {
      this.activityAssessment = data;
    },
    // --- Head/Color Actions ---
    setFontanelleAssessment(data) {
      this.fontanelleAssessment = data;
    },
    setMassInHeadAssessment(data) {
      this.massInHeadAssessment = data;
    },
    setIsBabyYellow(value) {
      this.isBabyYellow = value;
    },
    setIsBabyPallorPink(value) {
      this.isBabyPallorPink = value;
    },
    setHasBabyCyanosis(value) {
      this.hasBabyCyanosis = value;
    },
    setHasBabyOedema(value) {
      this.hasBabyOedema = value;
    },
    // --- Cleft Lip/Palate Actions ---
    setCleftAssessment(data) {
      this.cleftAssessment = data;
    },
    // --- Congenital Abnormalities Actions ---
    setHasCongenitalAbnormalities(value) {
      this.hasCongenitalAbnormalities = value;
    },
    setAbnormalitiesNotes(notes) {
      this.abnormalitiesNotes = notes;
    },
    // --- Cardiovascular Actions ---
    setHeartSoundsAssessment(data) {
      this.heartSoundsAssessment = data;
    },
    setHasCardiacAbnormality(value) {
      this.hasCardiacAbnormality = value;
    },
    setCapillaryRefillTime(data) {
      this.capillaryRefillTime = data;
    },
    setFemoralPulses(data) {
      this.femoralPulses = data;
    },
    // --- Genital and Anus Actions ---
    setGenitaliaAssessment(data) {
      this.genitaliaAssessment = data;
    },
    setAnusAssessment(data) {
      this.anusAssessment = data;
    },
    setHasMeconiumPassed(value) {
      this.hasMeconiumPassed = value;
    },
    // --- Cleft Lip/Palate Actions ---
    setHasCleftLip(value) {
      this.hasCleftLip = value;
    },
    setHasCleftPalate(value) {
      this.hasCleftPalate = value;
    },
    // --- Utility Action ---
    /**
     * Sets the current patient ID. If the new ID is different from the current one,
     * all neonatal exam data is reset to ensure data consistency for the new patient.
     * @param patientID The new patient ID to set.
     */
    setCurrentPatientID(patientID) {
      if (this.current_patient_ID !== patientID) {
        this.$reset();
        this.current_patient_ID = patientID;
        console.log(`Switched patient context. Exam data reset and new patient ID set: ${patientID}`);
      } else {
        this.current_patient_ID = patientID;
        console.log(`Patient ID is already set to: ${patientID}`);
      }
    },
    // --- Utility Action ---
    resetExamData() {
      this.$reset();
      console.log("Neonatal Exam Data has been reset.");
    }
  },
  persist: true
});

const useSuggestedDiagnosisStore = defineStore("suggestedDiagnosisStore", {
  state: () => ({
    patientData: {}
  }),
  actions: {
    setPatientData() {
      const vitalsStore = useNeonatalVitalsStore();
      const formData = vitalsStore.formData;
      if (formData.temperature) this.patientData.Temperature = formData.temperature;
      if (formData.blood_sugar) this.patientData.BloodSugarmg = formData.blood_sugar;
      if (formData.respiratory_rate) this.patientData.RR = formData.respiratory_rate;
      if (formData.oxygen_saturation) this.patientData.SatsAIr = formData.oxygen_saturation;
      const triageStore = useNeonatalTriageStore();
      const formValues = triageStore.formValues;
      if (formValues.oxygen_saturation) this.patientData.SatsAIr = formValues.oxygen_saturation;
      if (formValues.respiratory_rate) this.patientData.RR = formValues.respiratory_rate;
      if (formValues.temperature) this.patientData.Temperature = formValues.temperature;
      if (formValues.birth_weight) this.patientData.BirthWeight = formValues.birth_weight;
      if (formValues.current_weight) this.patientData.AdmissionWeight = formValues.current_weight;
      if (formValues.saturation_in_oxygen) this.patientData.SatsO2 = formValues.saturation_in_oxygen;
      if (formValues.convulsions) {
        this.patientData.DangerSigns = "Conv";
      }
      if (formValues.central_cyanosis) {
        this.patientData.DangerSigns = "Cyan";
      }
      if (formValues.blood_sugar) {
        if (formValues.bloodSugar_unit === "mmol/L") {
          this.patientData.BloodSugarmmol = formValues.blood_sugar;
        } else {
          this.patientData.BloodSugarmg = formValues.blood_sugar;
        }
      }
      const reviewOfSystemsStore = useReviewOfSystemsStore();
      const reviewOfSystemsForm = reviewOfSystemsStore.formData;
      if (reviewOfSystemsForm.convulsions === "Yes") {
        this.patientData.Activity = "Convulsions";
        this.patientData.SymptomReviewNeurology = "Convulsions";
      }
      if (reviewOfSystemsForm.jaundice === "Yes") {
        this.patientData.Jaundice = "MJ";
        this.patientData.YColour = "Y";
      }
      if (reviewOfSystemsForm.baby_grunting === "Yes") {
        this.patientData.SignsRD = "GR";
        this.patientData.DangerSigns = "Grun";
      }
      if (reviewOfSystemsForm.nasal_flaring === "Yes") {
        this.patientData.SignsRD = "NFL";
      }
      if (reviewOfSystemsForm.cyanosis === "Yes") {
        this.patientData.DangerSigns = "Cyan";
      }
      if (reviewOfSystemsForm.gasping === "Yes") {
        this.patientData.SignsRD = "Gasp";
      }
      if (reviewOfSystemsForm.difficulty_breathing === "Yes") {
        this.patientData.RespSR = "DIB";
      }
      if (reviewOfSystemsForm.color_of_stools === "White" || reviewOfSystemsForm.color_of_stools === "Clay-colored" || reviewOfSystemsForm.color_of_stools === "Pale") {
        this.patientData.Colour = "White";
        this.patientData.Jaundice = "DJ";
      }
      if (reviewOfSystemsForm.vomiting === "Yes" || reviewOfSystemsForm.is_baby_vomiting === "Yes") ;
      if (reviewOfSystemsForm.vomiting_bile_stained === "Yes" || reviewOfSystemsForm.color_of_vomit === "Green" || reviewOfSystemsForm.color_of_vomit === "Bile-stained") ;
      if (reviewOfSystemsForm.talipes === "Yes" || reviewOfSystemsForm.club_foot === "Yes") {
        this.patientData.TalipesSev = "Yes";
      }
      if (reviewOfSystemsForm.spinal_bifida === "Yes") {
        this.patientData.Spine = "NTD";
      }
      if (reviewOfSystemsForm.skin_rash === "Yes" || reviewOfSystemsForm.pustules === "Yes" || reviewOfSystemsForm.peeling === "Yes") {
        this.patientData.Skin = reviewOfSystemsForm.skin_rash || reviewOfSystemsForm.pustules || reviewOfSystemsForm.peeling || "";
      }
      if (reviewOfSystemsForm.activity) {
        if (reviewOfSystemsForm.activity.toLowerCase().includes("convuls") || reviewOfSystemsForm.activity.toLowerCase().includes("seizure")) {
          this.patientData.Activity = "Convulsions";
        }
      }
      if (reviewOfSystemsForm.is_baby_passing_urine === "No" || reviewOfSystemsForm.number_of_wet_nappies === "0" || reviewOfSystemsForm.hydration_urination === "Poor") ;
      if (reviewOfSystemsForm.passage_of_meconium === "Yes" || reviewOfSystemsForm.stool_passed_meconium === "Yes") {
        this.patientData.MecPresent = "Yes";
      }
      if (reviewOfSystemsForm.abdominal_distension === "Yes") ;
      if (reviewOfSystemsForm.bleeding === "Yes" || reviewOfSystemsForm.blood_in_stools === "Yes") ;
      if (reviewOfSystemsForm.does_baby_have_tongue_tie === "Yes") ;
      const neonatalExamStore = useNeonatalExamStore();
      const examForm = neonatalExamStore;
      if (examForm.activityAssessment) {
        const activity = examForm.activityAssessment.toLowerCase();
        if (activity.includes("convuls") || activity.includes("seizure") || activity.includes("fitting")) {
          this.patientData.Activity = "Convulsions";
          this.patientData.DangerSigns = "Conv";
        }
      }
      if (examForm.isBabyYellow === true) {
        this.patientData.YColour = "Y";
        if (!this.patientData.Jaundice) {
          this.patientData.Jaundice = "MJ";
        }
      }
      if (examForm.hasBabyCyanosis === true) {
        this.patientData.DangerSigns = "Cyan";
      }
      if (examForm.isBabyPallorPink === false) ;
      if (examForm.hasBabyOedema === true) ;
      if (examForm.fontanelleAssessment) {
        const fontanelle = examForm.fontanelleAssessment.toLowerCase();
        if (fontanelle.includes("bulging") || fontanelle.includes("tense")) ;
        if (fontanelle.includes("sunken") || fontanelle.includes("depressed")) ;
      }
      if (examForm.massInHeadAssessment) {
        const mass = examForm.massInHeadAssessment.toLowerCase();
        if (mass.includes("caput") || mass.includes("cephalohematoma") || mass.includes("subgaleal")) ;
      }
      if (examForm.hasCardiacAbnormality === true) ;
      if (examForm.heartSoundsAssessment) {
        const heartSounds = examForm.heartSoundsAssessment.toLowerCase();
        if (heartSounds.includes("murmur")) ;
      }
      if (examForm.capillaryRefillTime) {
        const crt = examForm.capillaryRefillTime.toLowerCase();
        if (crt.includes("prolonged") || crt.includes(">3") || crt.includes("delayed")) ;
      }
      if (examForm.femoralPulses) {
        const pulses = examForm.femoralPulses.toLowerCase();
        if (pulses.includes("absent") || pulses.includes("weak") || pulses.includes("decreased")) ;
      }
      if (examForm.hasCleftLip === true && examForm.hasCleftPalate === true) {
        this.patientData.Palate = "LipPalate";
      } else if (examForm.hasCleftLip === true) {
        this.patientData.Palate = "Lip";
      } else if (examForm.hasCleftPalate === true) {
        this.patientData.Palate = "Cleft";
      } else if (examForm.cleftAssessment) {
        const cleft = examForm.cleftAssessment.toLowerCase();
        if (cleft.includes("lip") && cleft.includes("palate")) {
          this.patientData.Palate = "LipPalate";
        } else if (cleft.includes("lip")) {
          this.patientData.Palate = "Lip";
        } else if (cleft.includes("palate")) {
          this.patientData.Palate = "Cleft";
        }
      }
      if (examForm.genitaliaAssessment) {
        const genitalia = examForm.genitaliaAssessment.toLowerCase();
        if (genitalia.includes("ambiguous")) {
          if (this.patientData.MSKproblems) {
            this.patientData.MSKproblems += "; Ambiguous genitalia";
          } else {
            this.patientData.MSKproblems = "Ambiguous genitalia";
          }
        }
        if (genitalia.includes("hypospadias") || genitalia.includes("undescended")) ;
      }
      if (examForm.anusAssessment) {
        const anus = examForm.anusAssessment.toLowerCase();
        if (anus.includes("imperforate") || anus.includes("absent") || anus.includes("atresia")) ;
      }
      if (examForm.hasMeconiumPassed === true) ; else if (examForm.hasMeconiumPassed === false) ;
      if (examForm.hasCongenitalAbnormalities === true) {
        if (examForm.abnormalitiesNotes) {
          const notes = examForm.abnormalitiesNotes.toLowerCase();
          if (notes.includes("gastroschisis")) {
            this.patientData.GSCvsOM = "GSCH";
          } else if (notes.includes("omphalocele") || notes.includes("omphalo")) {
            this.patientData.GSCvsOM = "OMPH";
          }
          if (notes.includes("spina bifida") || notes.includes("myelomeningocele") || notes.includes("meningocele")) {
            this.patientData.Spine = "NTD";
          }
          if (notes.includes("talipes") || notes.includes("club foot") || notes.includes("clubfoot")) {
            this.patientData.TalipesSev = "Yes";
          }
          if (notes.includes("skin") || notes.includes("nevus") || notes.includes("birthmark")) {
            this.patientData.Skin = examForm.abnormalitiesNotes;
          }
          if (notes.includes("limb") || notes.includes("digit") || notes.includes("polydactyly") || notes.includes("syndactyly")) {
            this.patientData.MSKproblems = examForm.abnormalitiesNotes;
          }
        }
      }
      const systemicExaminationStore = useSystemicExaminationStore();
      const systemicEexamForm = systemicExaminationStore.formData;
      if (systemicEexamForm.grunting === true) {
        this.patientData.SignsRD = "GR";
        this.patientData.DangerSigns = "Grun";
      }
      if (systemicEexamForm.nasalFlaring === true) {
        this.patientData.SignsRD = "NFL";
      }
      if (systemicEexamForm.chestIndrawing === true) {
        this.patientData.SignsRD = "CHI";
      }
      if (systemicEexamForm.stridor === true) {
        this.patientData.SignsRD = "ST";
      }
      if (systemicEexamForm.gasping === true) {
        this.patientData.SignsRD = "Gasp";
      }
      if (systemicEexamForm.respiratoryDistress === "Yes" || systemicEexamForm.respiratoryDistress === "Severe") {
        this.patientData.RespSR = "DIB";
      }
      if (systemicEexamForm.colorBlue === true) {
        this.patientData.DangerSigns = "Cyan";
      }
      if (systemicEexamForm.colorYellow === true) {
        this.patientData.YColour = "Y";
        if (!this.patientData.Jaundice) {
          this.patientData.Jaundice = "MJ";
        }
      }
      if (systemicEexamForm.colorPale === true) ;
      if (systemicEexamForm.crt3OrMore === true) ;
      if (systemicEexamForm.femoralPulseWeak === true || systemicEexamForm.femoralPulseDifficult === true) ;
      if (systemicEexamForm.murmurExtraSounds === true) ;
      if (systemicEexamForm.abdomenWallDefect === true) {
        if (systemicEexamForm.abdomenSummaryNotes) {
          const notes = systemicEexamForm.abdomenSummaryNotes.toLowerCase();
          if (notes.includes("gastroschisis")) {
            this.patientData.GSCvsOM = "GSCH";
          } else if (notes.includes("omphalocele") || notes.includes("omphalo")) {
            this.patientData.GSCvsOM = "OMPH";
          } else ;
        }
      }
      if (systemicEexamForm.pruneBellySyndrome === true) ;
      if (systemicEexamForm.abdomenDistended === true) ;
      if (systemicEexamForm.hepatomegaly === "Yes") ;
      if (systemicEexamForm.splenomegaly === "Yes") ;
      if (systemicEexamForm.umbilicusBleeding === true || systemicEexamForm.umbilicusRedSkin === true) ;
      if (systemicEexamForm.umbilicalHernia === true) ;
      if (systemicEexamForm.genitaliaAmbiguous === true) {
        if (this.patientData.MSKproblems) {
          this.patientData.MSKproblems += "; Ambiguous genitalia";
        } else {
          this.patientData.MSKproblems = "Ambiguous genitalia";
        }
      }
      if (systemicEexamForm.genitaliaMaleAbnormal === true || systemicEexamForm.genitaliaFemaleAbnormal === true) ;
      if (systemicEexamForm.anusImperforate === true) ;
      if (systemicEexamForm.toneAssessment) {
        const tone = systemicEexamForm.toneAssessment.toLowerCase();
        if (tone.includes("hypotonic") || tone.includes("floppy") || tone.includes("decreased")) ;
        if (tone.includes("hypertonic") || tone.includes("increased") || tone.includes("rigid")) ;
      }
      if (systemicEexamForm.suckReflex === "Absent" || systemicEexamForm.suckReflex === "Weak") ;
      if (systemicEexamForm.MoreReflex === "Absent" || systemicEexamForm.MoreReflex === "Asymmetric") ;
      if (systemicEexamForm.birthAsphyxiaSuspected === "Yes") {
        const thompsonScores = {
          thompsonRespirationScore: parseInt(systemicEexamForm.thompsonRespirationScore || "0"),
          thompsonSuckScore: parseInt(systemicEexamForm.thompsonSuckScore || "0"),
          thompsonMoroScore: parseInt(systemicEexamForm.thompsonMoroScore || "0"),
          thompsonGraspScore: parseInt(systemicEexamForm.thompsonGraspScore || "0"),
          thompsonFontanelleScore: parseInt(systemicEexamForm.thompsonFontanelleScore || "0"),
          thompsonToneScore: parseInt(systemicEexamForm.thompsonToneScore || "0"),
          thompsonConsciousnessScore: parseInt(systemicEexamForm.thompsonConsciousnessScore || "0"),
          thompsonFitsScore: parseInt(systemicEexamForm.thompsonFitsScore || "0"),
          thompsonPostureScore: parseInt(systemicEexamForm.thompsonPostureScore || "0")
        };
        this.patientData.ThompScore = thompsonScores.thompsonRespirationScore + thompsonScores.thompsonSuckScore + thompsonScores.thompsonMoroScore + thompsonScores.thompsonGraspScore + thompsonScores.thompsonFontanelleScore + thompsonScores.thompsonToneScore + thompsonScores.thompsonConsciousnessScore + thompsonScores.thompsonFitsScore + thompsonScores.thompsonPostureScore;
        if (this.patientData.ThompScore >= 6) {
          this.patientData.AdmReason = "NE";
        }
      }
      if (systemicEexamForm.musculoskeletalDeformities && systemicEexamForm.musculoskeletalDeformities.length > 0) {
        systemicEexamForm.musculoskeletalDeformities.forEach((deformity) => {
          const d = deformity.toLowerCase();
          if (d.includes("talipes") || d.includes("club foot") || d.includes("clubfoot")) {
            if (d.includes("correctable") || d.includes("mild") || d.includes("flexible")) {
              this.patientData.TalipesSev = "Yes";
            } else if (d.includes("rigid") || d.includes("severe") || d.includes("fixed")) {
              this.patientData.TalipesSev = "No";
            } else {
              this.patientData.TalipesSev = "Yes";
            }
          }
          if (d.includes("spina bifida") || d.includes("myelomeningocele") || d.includes("meningocele") || d.includes("neural tube")) {
            this.patientData.Spine = "NTD";
          }
          if (d.includes("hip") && (d.includes("clunk") || d.includes("disloc"))) {
            this.patientData.Ortolani = "Yes";
          }
          if (d.includes("limb") || d.includes("digit") || d.includes("polydactyly") || d.includes("syndactyly") || d.includes("fracture") || d.includes("erb") || // Erb's palsy
          d.includes("brachial plexus")) {
            if (this.patientData.MSKproblems) {
              this.patientData.MSKproblems += `; ${deformity}`;
            } else {
              this.patientData.MSKproblems = deformity;
            }
          }
        });
      }
      if (systemicEexamForm.skinFindings && systemicEexamForm.skinFindings.length > 0) {
        this.patientData.Skin = systemicEexamForm.skinFindings.join("; ");
      }
      if (systemicEexamForm.unequalAirEntry === true || systemicEexamForm.unilateralCrackles === true) ;
      if (systemicEexamForm.bilateralCracklesWheeze === true) ;
      const signsSymptomsStore = useSignsSymptomsStore();
      const signsSymptomsForm = signsSymptomsStore.formData;
      if (signsSymptomsForm.presenting_complaints && signsSymptomsForm.presenting_complaints.length > 0) {
        signsSymptomsForm.presenting_complaints.forEach((complaint) => {
          switch (complaint) {
            // ===== CONVULSIONS =====
            case "convulsions":
              this.patientData.Activity = "Convulsions";
              this.patientData.SymptomReviewNeurology = "Convulsions";
              this.patientData.DangerSigns = "Conv";
              this.patientData.AdmReason = "Convulsions";
              break;
            // ===== CYANOSIS =====
            case "cyanosis":
              this.patientData.DangerSigns = "Cyan";
              break;
            // ===== JAUNDICE =====
            case "jaundice":
              this.patientData.YColour = "Y";
              if (!this.patientData.Jaundice) {
                this.patientData.Jaundice = "MJ";
              }
              if (signsSymptomsForm.symptom_severity?.toLowerCase().includes("severe")) {
                this.patientData.Jaundice = "DJ";
              }
              break;
            // ===== RESPIRATORY =====
            case "apnoea":
              this.patientData.RespSR = "Apn";
              break;
            case "difficulty_breathing":
              this.patientData.RespSR = "DIB";
              break;
            // ===== TEMPERATURE ISSUES =====
            case "fever":
              break;
            case "hypothermia":
              break;
            // ===== ACTIVITY/NEUROLOGICAL =====
            case "lethargy":
              if (!this.patientData.Activity || this.patientData.Activity !== "Convulsions") {
                this.patientData.Activity = "Lethargy";
              }
              break;
            case "irritability":
              if (!this.patientData.Activity || this.patientData.Activity !== "Convulsions") {
                this.patientData.Activity = "Irritable";
              }
              break;
            // ===== FEEDING ISSUES =====
            case "poor_feeding":
            case "not_tolerating_feeds":
              break;
            // ===== GI SYMPTOMS =====
            case "vomiting":
              break;
            case "abdominal_distension":
              break;
            case "diarrhoea":
              break;
            // ===== INFECTION SIGNS =====
            case "umbilical_discharge":
              break;
            case "eye_discharge":
              break;
            case "skin_rash":
              if (this.patientData.Skin) {
                this.patientData.Skin += "; Rash noted on presentation";
              } else {
                this.patientData.Skin = "Rash noted on presentation";
              }
              break;
            // ===== HEMATOLOGICAL =====
            case "bleeding":
              break;
            case "pallor":
              break;
            default:
              console.warn(`Unhandled presenting complaint: ${complaint}`);
              break;
          }
        });
      }
      if (signsSymptomsForm.detailed_assessment_notes) {
        const notes = signsSymptomsForm.detailed_assessment_notes.toLowerCase();
        if (notes.includes("orange") || notes.includes("deep yellow")) {
          if (this.patientData.Jaundice === "MJ") ;
        }
        if ((notes.includes("bile") || notes.includes("green") || notes.includes("bilious")) && signsSymptomsForm.presenting_complaints?.includes("vomiting")) ;
        if (notes.includes("status epilepticus") || notes.includes("continuous")) ;
        if (notes.includes("grunting") && !this.patientData.SignsRD) {
          this.patientData.SignsRD = "GR";
          this.patientData.DangerSigns = "Grun";
        }
        if (notes.includes("nasal flaring") && !this.patientData.SignsRD) {
          this.patientData.SignsRD = "NFL";
        }
        if (notes.includes("chest indrawing") && !this.patientData.SignsRD) {
          this.patientData.SignsRD = "CHI";
        }
        if (notes.includes("maternal diabetes") || notes.includes("diabetic mother")) {
          this.patientData.PregConditions = "DM";
        }
        if (notes.includes("maternal hiv") || notes.includes("hiv positive mother")) {
          this.patientData.MatHIVtest = true;
          this.patientData.HIVtestResult = "R";
        }
        if (notes.includes("prom") || notes.includes("prolonged rupture")) ;
        if (notes.includes("meconium") && notes.includes("stained")) {
          this.patientData.MecPresent = "Yes";
        }
        if (notes.includes("birth asphyxia") || notes.includes("poor apgar") || notes.includes("resuscitation")) {
          this.patientData.AdmReason = "NE";
        }
        if (notes.includes("gastroschisis")) {
          this.patientData.GSCvsOM = "GSCH";
        }
        if (notes.includes("omphalocele")) {
          this.patientData.GSCvsOM = "OMPH";
        }
        if (notes.includes("spina bifida") || notes.includes("myelomeningocele")) {
          this.patientData.Spine = "NTD";
        }
        if (notes.includes("talipes") || notes.includes("club foot")) {
          this.patientData.TalipesSev = "Yes";
        }
        if (notes.includes("cleft lip")) {
          if (notes.includes("palate")) {
            this.patientData.Palate = "LipPalate";
          } else {
            this.patientData.Palate = "Lip";
          }
        } else if (notes.includes("cleft palate")) {
          this.patientData.Palate = "Cleft";
        }
      }
      if (signsSymptomsForm.symptom_onset_time) {
        const onset = signsSymptomsForm.symptom_onset_time.toLowerCase();
        if (onset.includes("birth") || onset.includes("delivery") || onset.includes("immediately")) ;
      }
      if (signsSymptomsForm.symptom_severity) {
        const severity = signsSymptomsForm.symptom_severity.toLowerCase();
        if (severity.includes("severe") || severity.includes("critical")) {
          if (this.patientData.Jaundice === "MJ") {
            this.patientData.Jaundice = "DJ";
          }
        }
        if (severity.includes("mild")) ;
        if (severity.includes("moderate")) ;
      }
      if (signsSymptomsForm.is_readmission === "Yes") ;
    },
    resetPatientData() {
      this.patientData = {};
    }
  }
});

const useTreatmentPlanStore = defineStore("treatmentPlan", () => {
  const pharmacological = ref({
    incubator: "",
    treatments: [],
    thermalCareDetails: [],
    oxygenTherapyDetails: [],
    feedingSupportDetails: [],
    admissionDetails: ""
  });
  const nonPharmacological = ref({
    prescription: []
  });
  function setPharmacological(data) {
    pharmacological.value = data;
  }
  function updatePharmacologicalField(key, value) {
    pharmacological.value[key] = value;
  }
  function resetPharmacological() {
    pharmacological.value = {
      incubator: "",
      treatments: [],
      thermalCareDetails: [],
      oxygenTherapyDetails: [],
      feedingSupportDetails: [],
      admissionDetails: ""
    };
  }
  function addPrescription(prescription) {
    nonPharmacological.value.prescription.push(prescription);
  }
  function removePrescription(index) {
    nonPharmacological.value.prescription.splice(index, 1);
  }
  function resetNonPharmacological() {
    nonPharmacological.value.prescription = [];
  }
  function resetTreatmentPlan() {
    resetPharmacological();
    resetNonPharmacological();
  }
  return {
    // state
    pharmacological,
    nonPharmacological,
    // actions
    setPharmacological,
    updatePharmacologicalField,
    resetPharmacological,
    addPrescription,
    removePrescription,
    resetNonPharmacological,
    resetTreatmentPlan
  };
});

const treatmentPlanPrescriptionFieldConfig = {
  componentType: "drugPrescriptionField",
  name: "prescriptions",
  header: "Your Selected Medications",
  placeholder: "Search",
  padding: true,
  frequencies: ["once a day", "twice a day", "three times a day", "every 6 hours", "every 8 hours"]
};
const neonatalTreatmentPlanSections = [
  {
    title: "Treatment Plan",
    subtitle: "Non-Pharmacological",
    description: "Document supportive care provided",
    formData: [
      {
        componentType: "listSelectionField",
        name: "treatments",
        helperText: "Select ALL those given",
        type: "multiple",
        titleStyle: "tonal",
        subtitle: "Please click all that apply including.",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          {
            label: "Thermal Care",
            value: "Thermal Care",
            children: {
              componentType: "listSelectionField",
              name: "thermalCareDetails",
              header: "Select all Thermal Care interventions",
              type: "multiple",
              allowDeselect: false,
              showCheckmark: true,
              padding: true,
              options: [
                { label: "Dry and wrap", value: "Dry and wrap" },
                { label: "Wrapped in plastic bag", value: "Wrapped in plastic bag" },
                { label: "Immediate Kangaroo Mother Care", value: "Immediate Kangaroo Mother Care" },
                { label: "Intermittent KMC", value: "Intermittent KMC" },
                { label: "Continuous KMC", value: "Continuous KMC" },
                { label: "Baby cot", value: "Baby cot" },
                { label: "Incubator", value: "Incubator" },
                { label: "Radiant warmer", value: "Radiant warmer" }
              ]
            }
          },
          {
            label: "Oxygen Therapy (Supportive, Non-Drug)",
            value: "Oxygen Therapy (Supportive, Non-Drug)",
            children: {
              componentType: "listSelectionField",
              name: "oxygenTherapyDetails",
              header: "Select all Oxygen Therapy interventions",
              type: "multiple",
              allowDeselect: false,
              showCheckmark: true,
              padding: true,
              options: [
                { label: "Nasal Cannulae Oxygen", value: "Nasal Cannulae Oxygen" },
                { label: "Face mask", value: "Face mask" },
                { label: "CPAP", value: "CPAP" },
                { label: "Ventilator", value: "Ventilator" },
                { label: "BMV ventilation", value: "BMV ventilation" }
              ]
            }
          },
          {
            label: "Feeding Support",
            value: "Feeding Support",
            children: {
              componentType: "listSelectionField",
              name: "feedingSupportDetails",
              header: "Select all Feeding Support provided",
              type: "multiple",
              allowDeselect: false,
              showCheckmark: true,
              padding: true,
              options: [
                { label: "Breast milk – breast feeding", value: "Breast milk – breast feeding" },
                { label: "Breast milk – cup feeding", value: "Breast milk – cup feeding" },
                { label: "Formula – cup feeding", value: "Formula – cup feeding" },
                { label: "Formula – NGT / OGT", value: "Formula – NGT / OGT" },
                { label: "NPO + IV 10% Dextrose", value: "NPO + IV 10% Dextrose" },
                { label: "Mixed – Breast + cup feeding", value: "Mixed – Breast + cup feeding" },
                { label: "Mixed – Cup feeding", value: "Mixed – Cup feeding" },
                { label: "NGT / OGT", value: "NGT / OGT" }
              ]
            }
          },
          { label: "Eye care – TEO", value: "Eye care – TEO" },
          { label: "Cord care - Chlorhexidine", value: "Cord care - Chlorhexidine" },
          { label: "Referral (less than 24 hrs – phc)", value: "Referral (less than 24 hrs – phc)" },
          // TODO: if jaudice is less than 24 hours and facility is district, show the below options
          {
            label: "Blood grouping for mother and baby",
            value: "Blood grouping for mother and baby"
          },
          {
            label: "Full Blood Count and Liver Function Test",
            value: "Full Blood Count and Liver Function Test"
          },
          { label: " Check bilirubin", value: "Check bilirubin" },
          {
            label: "if above exchange level of bilirubin refer to tertiary",
            value: "if above exchange level of bilirubin refer to tertiary"
          },
          {
            label: "if within phototherapy level of bilirubin – phototherapy",
            value: "if within phototherapy level of bilirubin – phototherapy"
          },
          {
            label: "Admission",
            value: "Admission",
            children: {
              componentType: "listSelectionField",
              name: "admissionDetails",
              header: "Select admission destination",
              type: "single",
              allowDeselect: false,
              showCheckmark: true,
              padding: true,
              options: [
                { label: "Admit to high risk", value: "Admit to high risk" },
                { label: "Admit to low risk", value: "Admit to low risk" },
                { label: "Admit to isolation", value: "Admit to isolation" },
                { label: "Admit to KMC", value: "Admit to KMC" },
                { label: "Admit to Postnatal ward", value: "Admit to Postnatal ward" }
              ]
            }
          },
          { label: "Other", value: "Other" }
        ]
      },
      {
        componentType: "textAreaField",
        header: "Other",
        name: "incubator",
        type: "string",
        condition: (values) => {
          return (values.treatments ?? []).includes("Other");
        },
        placeholder: "Add notes about other interventions",
        padding: true
      }
    ]
  },
  {
    title: "Summary",
    subtitle: "Review treatment plan",
    description: "Review treatments and notes",
    formData: [
      {
        componentType: "Alert",
        name: "treatment_summary_alert",
        type: "warning",
        backgroundColor: "#FEDF89",
        textColor: "#B54708",
        message: "Review all findings carefully. You can go back to edit if needed."
      },
      {
        componentType: "summaryField",
        name: "treatmentPlanSummary",
        emptyStateMessage: "No data",
        builder: (formValues) => {
          const rows = [];
          const treatments = Array.isArray(formValues.treatments) ? formValues.treatments : [];
          const methodOfFeeding = String(formValues.methodOfFeeding || "").trim();
          if (treatments.length) {
            treatments.forEach((treatment) => {
              if (!treatment) return;
              const normalized = String(treatment);
              const value = normalized.includes("Feeding") && methodOfFeeding ? `${normalized} - ${methodOfFeeding}` : normalized;
              rows.push({ section: "Non-Pharmacological Treatment Plan", value });
            });
          } else {
            rows.push({
              section: "Non-Pharmacological Treatment Plan",
              detail: "No non-pharmacological treatments selected.",
              alwaysShow: true
            });
          }
          const notes = String(formValues.incubator || "").trim();
          if (notes) {
            rows.push({ section: "Notes", detail: notes, alwaysShow: true });
          } else {
            rows.push({ section: "Notes", detail: "No notes captured.", alwaysShow: true });
          }
          return rows;
        }
      }
    ]
  },
  {
    title: "Treatment Plan",
    subtitle: "Pharmacological",
    description: "Capture medications provided",
    formData: [
      {
        componentType: "Alert",
        name: "pharmacological_banner",
        type: "warning",
        backgroundColor: "#FEDF89",
        textColor: "#00190E",
        noMargin: true,
        noPadding: true,
        message: "Include medications given on admission and any given prior to admission, at home or another facility."
      },
      {
        ...treatmentPlanPrescriptionFieldConfig,
        initialValue: []
      }
    ]
  }
];
function getNextTreatmentPlanSectionIndex(currentIndex, _formData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalTreatmentPlanSections.length) {
    return null;
  }
  return nextIndex;
}
function getPreviousTreatmentPlanSectionIndex(currentIndex, _formData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  return prevIndex;
}

const defaultNeonatalTreatmentPlanForm = {
  treatments: [],
  methodOfFeeding: "",
  incubator: "",
  prescriptions: []
};
const neonatalTreatmentPlanFormKey = Symbol("neonatalTreatmentPlanForm");

const _sfc_main = defineComponent({
  name: "NeonatalStepper",
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonCol,
    IonRow,
    IonSpinner,
    IonIcon,
    DynamicButton
  },
  data() {
    return {
      currentStepIndex: 0,
      stepRefs: /* @__PURE__ */ new Map(),
      isProcessing: false
    };
  },
  props: {
    wizardData: {
      default: []
    },
    StepperData: {
      type: Array,
      default: () => []
    },
    stepperTitle: {
      type: String,
      default: ""
    },
    openStepper: {
      type: String,
      default: "1"
    },
    backBtn: {
      type: String,
      default: "Back to profile"
    },
    backUrl: {
      type: String,
      default: ""
    },
    getSaveFunction: {
      type: Function,
      required: true
    },
    useSkipLogic: {
      type: Boolean,
      default: true
    },
    showComponetTitle: {
      type: Boolean,
      default: true
    },
    flowType: {
      type: String,
      default: "triage"
    },
    sectionsConfig: {
      type: Array,
      default: () => []
    },
    headerStyle: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    provide("formMode", "neonatal");
    const dischargeForm = inject(neonatalDischargeFormKey);
    const triageForm = inject(neonatalTriageFormKey, void 0);
    const enrollmentForm = inject(neonatalEnrollmentFormKey, void 0);
    const vitalsForm = inject(neonatalVitalsFormKey, void 0);
    const signsSymptomsForm = inject(neonatalSignsSymptomsFormKey, void 0);
    const reviewOfSystemsForm = inject(neonatalReviewOfSystemsFormKey, void 0);
    const admissionOutcomesForm = inject(neonatalAdmissionOutcomesFormKey, void 0);
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    let getNextSectionIndex$3 = getNextSectionIndex$2;
    let getPreviousSectionIndex$3 = getPreviousSectionIndex$2;
    let formData = triageForm;
    if (props.flowType === "enrollment") {
      getNextSectionIndex$3 = getNextEnrollmentSectionIndex;
      getPreviousSectionIndex$3 = getPreviousEnrollmentSectionIndex;
      formData = enrollmentForm;
    } else if (props.flowType === "vitals") {
      getNextSectionIndex$3 = getNextSectionIndex$1;
      getPreviousSectionIndex$3 = getPreviousSectionIndex$1;
      formData = vitalsForm;
    } else if (props.flowType === "signsSymptoms") {
      getNextSectionIndex$3 = getNextSignsSymptomsSectionIndex;
      getPreviousSectionIndex$3 = getPreviousSignsSymptomsSectionIndex;
      formData = signsSymptomsForm;
    } else if (props.flowType === "reviewOfSystems") {
      getNextSectionIndex$3 = getNextReviewOfSystemsSectionIndex;
      getPreviousSectionIndex$3 = getPreviousReviewOfSystemsSectionIndex;
      formData = reviewOfSystemsForm;
    } else if (props.flowType === "admissionOutcomes") {
      getNextSectionIndex$3 = getNextSectionIndex;
      getPreviousSectionIndex$3 = getPreviousSectionIndex;
      formData = admissionOutcomesForm;
    } else if (props.flowType === "discharge") {
      getNextSectionIndex$3 = getNextDischargeSectionIndex;
      getPreviousSectionIndex$3 = getPreviousDischargeSectionIndex;
      formData = dischargeForm;
    } else if (props.flowType === "systemicExamination") {
      getNextSectionIndex$3 = getNextSectionIndex$2;
      getPreviousSectionIndex$3 = getPreviousSectionIndex$2;
      formData = void 0;
    } else if (props.flowType === "general-examination") {
      getNextSectionIndex$3 = getNextGeneralExaminationSectionIndex;
      getPreviousSectionIndex$3 = getPreviousGeneralExaminationSectionIndex;
      formData = void 0;
    } else if (props.flowType === "investigation") {
      getNextSectionIndex$3 = getNextInvestigationSectionIndex;
      getPreviousSectionIndex$3 = getPreviousInvestigationSectionIndex;
      formData = void 0;
    } else if (props.flowType === "treatmentPlan") {
      getNextSectionIndex$3 = getNextTreatmentPlanSectionIndex;
      getPreviousSectionIndex$3 = getPreviousTreatmentPlanSectionIndex;
      formData = treatmentPlanForm;
    } else if (props.flowType === "diagnosis") {
      getNextSectionIndex$3 = (index) => index < props.StepperData.length - 1 ? index + 1 : null;
      getPreviousSectionIndex$3 = (index) => index > 0 ? index - 1 : null;
      formData = void 0;
    }
    return {
      chevronBackOutline,
      closeOutline,
      arrowBack,
      arrowForward,
      triageForm,
      download,
      enrollmentForm,
      vitalsForm,
      signsSymptomsForm,
      reviewOfSystemsForm,
      dischargeForm,
      formData,
      getNextSectionIndex: getNextSectionIndex$3,
      getPreviousSectionIndex: getPreviousSectionIndex$3
    };
  },
  mounted() {
    const initialStep = parseInt(this.openStepper) - 1;
    this.currentStepIndex = initialStep >= 0 ? initialStep : 0;
  },
  methods: {
    setStepRef(el, index) {
      if (el) {
        this.stepRefs.set(index, el);
      }
    },
    buildTriageSnapshot(stepIndex) {
      if (this.flowType === "triage") {
        const triageStore = useNeonatalTriageStore();
        const formData2 = { ...triageStore.formValues };
        if (this.triageForm) {
          const triageFormData = this.triageForm;
          Object.assign(formData2, {
            _hasPatient: triageFormData._hasPatient,
            _forceDemographics: triageFormData._forceDemographics
          });
        }
        const componentInstance2 = this.stepRefs.get(stepIndex);
        if (componentInstance2?.getFormValues) {
          Object.assign(formData2, componentInstance2.getFormValues());
        }
        return formData2;
      }
      const formData = { ...this.formData || {} };
      const componentInstance = this.stepRefs.get(stepIndex);
      if (componentInstance?.getFormValues) {
        Object.assign(formData, componentInstance.getFormValues());
      }
      return formData;
    },
    getStepConfigIndices(stepIndex) {
      const step = this.StepperData[stepIndex];
      if (!step) return [stepIndex];
      if (Array.isArray(step.configIndices) && step.configIndices.length) {
        return step.configIndices;
      }
      if (typeof step.configIndex === "number") {
        return [step.configIndex];
      }
      return [stepIndex];
    },
    isFinalStep(stepIndex) {
      if (!this.useSkipLogic) {
        return stepIndex === this.StepperData.length - 1;
      }
      const configIndexes = this.getStepConfigIndices(stepIndex);
      const maxConfigIndex = Math.max(...configIndexes);
      const snapshot = this.buildTriageSnapshot(stepIndex);
      const nextConfigIndex = this.getNextSectionIndex(maxConfigIndex, snapshot || {});
      if (nextConfigIndex === null) {
        return true;
      }
      const nextStepperIndex = this.findStepperIndexForConfig(nextConfigIndex);
      return nextStepperIndex === -1;
    },
    findStepperIndexForConfig(targetConfigIndex) {
      return this.StepperData.findIndex((step, index) => {
        const indices = Array.isArray(step.configIndices) && step.configIndices.length ? step.configIndices : [typeof step.configIndex === "number" ? step.configIndex : index];
        return indices.includes(targetConfigIndex);
      });
    },
    openBackController() {
      if (this.backUrl) {
        this.$router.push(this.backUrl);
      } else {
        createModal(SaveProgressModal);
      }
    },
    async nextStep(currentIndex) {
      if (this.isProcessing) {
        return;
      }
      const validationErrors = await this.validateCurrentStep(currentIndex);
      if (validationErrors) {
        const errorMessages = Object.values(validationErrors).join(", ");
        toastWarning(`Please fix the following errors: ${errorMessages}`);
        return;
      }
      const saveFunction = this.getSaveFunction(currentIndex);
      if (saveFunction && typeof saveFunction === "function") {
        try {
          this.isProcessing = true;
          await saveFunction();
          this.isProcessing = false;
        } catch (error) {
          this.isProcessing = false;
          console.error("Error in save function:", error);
          return;
        }
      }
      if (!this.useSkipLogic) {
        const nextIndex = currentIndex + 1;
        if (nextIndex < this.StepperData.length) {
          this.currentStepIndex = nextIndex;
          this.updateWizardStatus(nextIndex);
          this.$emit("updateStatus", { value: this.StepperData[nextIndex].value });
          this.scrollToTop();
        }
        return;
      }
      const formData = this.buildTriageSnapshot(currentIndex);
      const currentStepConfigIndexes = this.getStepConfigIndices(currentIndex);
      const maxCurrentConfigIndex = Math.max(...currentStepConfigIndexes);
      let nextConfigIndex = this.getNextSectionIndex(maxCurrentConfigIndex, formData);
      let nextStepperIndex = -1;
      let searchAttempts = 0;
      const maxAttempts = 50;
      while (nextConfigIndex !== null && nextStepperIndex === -1 && searchAttempts < maxAttempts) {
        nextStepperIndex = this.findStepperIndexForConfig(nextConfigIndex);
        if (nextStepperIndex === -1) {
          nextConfigIndex = this.getNextSectionIndex(nextConfigIndex, formData);
          searchAttempts++;
        }
      }
      if (nextStepperIndex !== -1 && nextStepperIndex < this.StepperData.length) {
        this.currentStepIndex = nextStepperIndex;
        this.updateWizardStatus(nextStepperIndex);
        this.$emit("updateStatus", { value: this.StepperData[nextStepperIndex].value });
        this.scrollToTop();
      }
    },
    async validateCurrentStep(currentIndex) {
      const componentInstance = this.stepRefs.get(currentIndex);
      if (!componentInstance) {
        console.warn(`No component instance found for step ${currentIndex}`);
        return null;
      }
      if (this.sectionsConfig && this.sectionsConfig.length > 0) {
        const configIndex = this.getStepConfigIndices(currentIndex)[0];
        const sectionConfig = this.sectionsConfig[configIndex];
        if (sectionConfig && typeof sectionConfig.validateSection === "function") {
          const formValues = componentInstance.getFormValues ? componentInstance.getFormValues() : {};
          const sectionError = sectionConfig.validateSection(formValues);
          if (sectionError) {
            return { _section: sectionError };
          }
        }
      }
      if (typeof componentInstance.validateForm === "function") {
        const errors = componentInstance.validateForm();
        return errors;
      }
      return null;
    },
    previousStep(currentIndex) {
      if (!this.useSkipLogic) {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          this.currentStepIndex = prevIndex;
          this.updateWizardStatus(prevIndex);
          this.$emit("updateStatus", { value: this.StepperData[prevIndex].value });
          this.scrollToTop();
        }
        return;
      }
      const formData = this.buildTriageSnapshot(currentIndex);
      const currentStepConfigIndexes = this.getStepConfigIndices(currentIndex);
      const minCurrentConfigIndex = Math.min(...currentStepConfigIndexes);
      let prevConfigIndex = this.getPreviousSectionIndex(minCurrentConfigIndex, formData);
      let prevStepperIndex = -1;
      let searchAttempts = 0;
      const maxAttempts = 50;
      while (prevConfigIndex !== null && prevStepperIndex === -1 && searchAttempts < maxAttempts) {
        prevStepperIndex = this.findStepperIndexForConfig(prevConfigIndex);
        if (prevStepperIndex === -1) {
          prevConfigIndex = this.getPreviousSectionIndex(prevConfigIndex, formData);
          searchAttempts++;
        }
      }
      if (prevStepperIndex !== -1 && prevStepperIndex >= 0) {
        this.currentStepIndex = prevStepperIndex;
        this.updateWizardStatus(prevStepperIndex);
        this.$emit("updateStatus", { value: this.StepperData[prevStepperIndex].value });
        this.scrollToTop();
      }
    },
    scrollToTop() {
      this.$nextTick(() => {
        const wrapper = this.$el?.querySelector(".stepper_content_wrapper");
        if (wrapper && typeof wrapper.scrollTo === "function") {
          wrapper.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const ionContent = document.querySelector("ion-content");
        if (ionContent) {
          ionContent.scrollToTop(300);
        }
      });
    },
    async handleCancel() {
      const confirmed = await alertConfirmation("Are you sure you want to cancel? All unsaved progress will be lost.", {
        header: `Cancel ${this.stepperTitle}`,
        confirmBtnLabel: "Yes, Cancel"});
      if (confirmed) {
        this.currentStepIndex = 0;
        if (this.wizardData) {
          this.updateWizardStatus(0);
        }
        this.stepRefs.forEach((stepInstance) => {
          try {
            if (stepInstance?.getFormRef) {
              const formRef = stepInstance.getFormRef();
              if (formRef?.resetForm) {
                formRef.resetForm();
              }
            } else if (stepInstance?.resetForm) {
              stepInstance.resetForm();
            }
          } catch (e) {
            console.warn("Failed to reset step form", e);
          }
        });
        if (this.formData) {
          const metadataKeys = ["_hasPatient", "_forceDemographics"];
          const metadata = {};
          metadataKeys.forEach((key) => {
            if (this.formData[key] !== void 0) {
              metadata[key] = this.formData[key];
            }
          });
          Object.keys(this.formData).forEach((key) => {
            if (!metadataKeys.includes(key)) {
              const val = this.formData[key];
              if (Array.isArray(val)) {
                this.formData[key] = [];
              } else if (typeof val === "boolean" || val === null) {
                this.formData[key] = null;
              } else {
                this.formData[key] = "";
              }
            }
          });
          Object.assign(this.formData, metadata);
        }
        if (this.flowType === "triage") {
          useNeonatalTriageStore().reset();
        } else if (this.flowType === "enrollment") {
          useNeonatalEnrollmentStore().resetEnrollmentForm();
        } else if (this.flowType === "vitals") {
          useNeonatalVitalsStore().resetActiveForm();
        } else if (this.flowType === "signsSymptoms") {
          useSignsSymptomsStore().resetActiveForm();
        } else if (this.flowType === "reviewOfSystems") {
          useReviewOfSystemsStore().resetActiveForm();
        } else if (this.flowType === "admissionOutcomes") {
          useNeonatalAdmissionOutcomesStore().resetAdmissionOutcomesForm();
        } else if (this.flowType === "discharge") {
          useNeonatalDischargeStore().resetDischargeForm();
        } else if (this.flowType === "systemicExamination") {
          useSystemicExaminationStore().resetActiveForm();
        } else if (this.flowType === "diagnosis") {
          useDiagnosisStore().resetDiagnosisData();
          useSuggestedDiagnosisStore().$reset();
        } else if (this.flowType === "treatmentPlan") {
          useTreatmentPlanStore().resetTreatmentPlan();
        } else if (this.flowType === "general-examination") {
          useNeonatalExamStore().resetExamData();
        }
        const demographicsStore = useDemographicsStore();
        const hasPatient = this.formData?._hasPatient || demographicsStore.patient?.patientID || demographicsStore.patient?.ID;
        if (hasPatient) {
          this.$router.push("/patient-profile");
        } else if (this.backUrl) {
          this.$router.push(this.backUrl);
        } else {
          createModal(SaveProgressModal);
        }
      }
    },
    updateWizardStatus(activeIndex) {
      this.wizardData.forEach((item, index) => {
        if (index === activeIndex) {
          item.class = "open_step common_step";
          item.checked = false;
        } else if (index < activeIndex) {
          item.class = "common_step color_white";
          item.checked = true;
        } else {
          item.class = "common_step";
          item.checked = false;
        }
      });
    },
    goToStep(targetIndex) {
      if (typeof targetIndex !== "number" || targetIndex < 0 || targetIndex >= this.StepperData.length) {
        console.warn("[NeonatalStepper] Invalid step index:", targetIndex);
        return;
      }
      this.currentStepIndex = targetIndex;
      this.updateWizardStatus(targetIndex);
      this.$emit("updateStatus", { value: this.StepperData[targetIndex].value });
    },
    goToConfigStep(configIndex) {
      const stepperIndex = this.findStepperIndexForConfig(configIndex);
      if (stepperIndex !== -1) {
        this.goToStep(stepperIndex);
      } else {
        console.warn("[NeonatalStepper] Could not find stepper index for config index:", configIndex);
      }
    },
    async handleNextClick(index) {
      const step = this.StepperData[index];
      if (this.isProcessing) {
        return;
      }
      const validationErrors = await this.validateCurrentStep(index);
      if (validationErrors) {
        const errorMessages = Object.values(validationErrors).join(", ");
        toastWarning(`Please fix the following errors: ${errorMessages}`);
        return;
      }
      if (step?.hasDialog) {
        this.triggerStepDialog(index);
        return;
      }
      this.nextStep(index);
    },
    triggerStepDialog(index) {
      const componentInstance = this.stepRefs.get(index);
      if (componentInstance?.openDialog) {
        componentInstance.openDialog();
      } else {
        console.warn("Dialog requested but child component has no openDialog() method");
      }
    },
    getButtonText(index) {
      const step = this.StepperData[index];
      if (step?.buttonText) {
        return step.buttonText;
      }
      if (this.isFinalStep(index)) {
        return this.isProcessing ? "Saving..." : "Finish";
      }
      return "Next";
    },
    getButtonIcon(index) {
      const step = this.StepperData[index];
      if (step?.buttonText) {
        return arrowForward;
      }
      return this.isFinalStep(index) ? download : arrowForward;
    }
  }
});

const _hoisted_1 = { class: "section_content" };
const _hoisted_2 = { class: "button-row" };
const _hoisted_3 = { class: "left-button-group" };
const _hoisted_4 = { class: "right-button-group" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, { class: "ion-justify-content-center" }, {
    default: withCtx(() => [
      createVNode(_component_ion_col, {
        class: "stepper-col",
        "size-sm": "12",
        "size-xl": "8",
        "size-md": "10",
        "size-lg": "8"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card, { class: "stepper_content_wrapper" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.StepperData, (item, index) => {
                return withDirectives((openBlock(), createElementBlock("div", {
                  key: index,
                  class: "step_section"
                }, [
                  _ctx.showComponetTitle ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["section_header", _ctx.headerStyle])
                  }, [
                    createBaseVNode("h2", null, toDisplayString(item.title), 1),
                    createBaseVNode("h3", null, toDisplayString(item.subtitle), 1)
                  ], 2)) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_1, [
                    (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                      ref_for: true,
                      ref: (el) => _ctx.setStepRef(el, Number(index)),
                      stepIndex: Number(index),
                      configIndex: item.configIndex,
                      goToNext: () => _ctx.nextStep(Number(index)),
                      goToPrevious: () => _ctx.previousStep(Number(index)),
                      goToStep: _ctx.goToConfigStep
                    }, null, 8, ["stepIndex", "configIndex", "goToNext", "goToPrevious", "goToStep"]))
                  ]),
                  createBaseVNode("div", _hoisted_2, [
                    Number(index) > 0 ? (openBlock(), createBlock(_component_ion_button, {
                      key: 0,
                      class: "cancel-button",
                      onClick: _ctx.handleCancel
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          icon: _ctx.closeOutline,
                          slot: "start"
                        }, null, 8, ["icon"]),
                        _cache[0] || (_cache[0] = createTextVNode(" Cancel ", -1))
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_3, [
                      Number(index) === 0 ? (openBlock(), createBlock(_component_ion_button, {
                        key: 0,
                        class: "cancel-button",
                        onClick: _ctx.handleCancel
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: _ctx.closeOutline,
                            slot: "start"
                          }, null, 8, ["icon"]),
                          _cache[1] || (_cache[1] = createTextVNode(" Cancel ", -1))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : (openBlock(), createBlock(_component_ion_button, {
                        key: 1,
                        class: "previous-button",
                        onClick: ($event) => _ctx.previousStep(Number(index))
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: _ctx.arrowBack,
                            slot: "start"
                          }, null, 8, ["icon"]),
                          _cache[2] || (_cache[2] = createTextVNode(" Back ", -1))
                        ]),
                        _: 1
                      }, 8, ["onClick"]))
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(_component_ion_button, {
                        class: "next-button",
                        onClick: ($event) => _ctx.handleNextClick(Number(index)),
                        disabled: _ctx.isProcessing
                      }, {
                        default: withCtx(() => [
                          _ctx.isProcessing && Number(index) === _ctx.StepperData.length - 1 ? (openBlock(), createBlock(_component_ion_spinner, {
                            key: 0,
                            name: "crescent",
                            slot: "start",
                            class: "button-spinner"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(_ctx.getButtonText(Number(index))) + " ", 1),
                          !_ctx.isProcessing ? (openBlock(), createBlock(_component_ion_icon, {
                            key: 1,
                            icon: _ctx.getButtonIcon(Number(index)),
                            slot: "end"
                          }, null, 8, ["icon"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["onClick", "disabled"])
                    ])
                  ])
                ])), [
                  [vShow, _ctx.currentStepIndex === index]
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalStepper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2de6c703"]]);

export { neonatalReviewOfSystemsFormKey as A, useReviewOfSystemsStore as B, neonatalAdmissionOutcomeSections as C, useNeonatalAdmissionOutcomesStore as D, neonatalAdmissionOutcomesSections as E, neonatalInvestigationSections as F, neonatalTreatmentPlanSections as G, neonatalTreatmentPlanFormKey as H, useTreatmentPlanStore as I, defaultNeonatalTreatmentPlanForm as J, NeonatalStepper as N, useDiagnosisStore as a, useSuggestedDiagnosisStore as b, neonatalEnrollmentSections as c, neonatalVitalsSections as d, neonatalVitalsFormKey as e, useNeonatalVitalsStore as f, getDischargeSectionByName as g, neonatalDischargeFormKey as h, neonatalAdmissionOutcomesFormKey as i, neonatalAdmissionSignOffSections as j, useNeonatalDischargeStore as k, neonatalDischargeSections as l, getDischargeSectionIndexByName as m, neonatalGeneralExaminationSections as n, neonatalTriageSections as o, neonatalTriageFormKey as p, useNeonatalTriageStore as q, defaultNeonatalTriageForm as r, neonatalSystemicExaminationFormKey as s, triageConceptMapping as t, useNeonatalExamStore as u, useSystemicExaminationStore as v, neonatalSignsSymptomsSections as w, neonatalSignsSymptomsFormKey as x, useSignsSymptomsStore as y, neonatalReviewOfSystemsSections as z };
