import { f as ref, c as computed, cH as __vitePreload } from './vendor-DpSS1aB1.js';
import { d as defineStore } from './pinia-CbGjwPb6.js';

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
  gender: "Gender",
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("EmergencyManagement"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("StartMeasuringOxygenSaturation"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("GruntingSevereChestIndrawings"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("CentralCyanosis"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("ConsulvionsTwitching"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("GruntingIndrawingManagement"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("CentralCyanosisManagement"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("ConvulsionsManagement"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("DangerSignsAssessment"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("WarmTheBody"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("KeepTheBodyWarm"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("EmergencyManagement"))
      }
    ],
    skipCondition: (triageData) => {
      if (triageData.heart_rate && Number(triageData.heart_rate) < 60) return false;
      return true;
    }
  },
  {
    title: "Referral Instructions",
    formData: [
      {
        componentType: "infographicField",
        padding: true,
        helperText: "If oxygen is NOT available CALL referral hospital immediately \n for guidance and if possible send the baby with accompanying health worker with bag valve mask (BVM) ventilation equipment.\n\nContinue with the Neonatal examination.",
        name: "referral_instructions",
        header: "02 Referral Instructions",
        displayMode: "cards",
        showStepNumber: false,
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("ReferralInstructions"))
      }
    ],
    skipCondition: (triageData) => {
      const oxygenStatsValue = triageData.oxygen_saturation_vital;
      if (oxygenStatsValue && Number(oxygenStatsValue) < 90) return false;
      return true;
    }
  },
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("RespiratoryDistress"))
      }
    ],
    skipCondition: (triageData) => {
      const satsMonAvailable = triageData.can_measure_oxygen_saturation === true || triageData.oxygen_facility_available === "Yes";
      const satsAir = Number(triageData.oxygen_saturation_vital);
      const respiratoryRateValue = Number(triageData.respiratory_rate);
      const hasAbnormalRespiratoryRate = respiratoryRateValue && (respiratoryRateValue > 80 || respiratoryRateValue < 30);
      const hasSevereRespiratoryDistress = satsMonAvailable && satsAir < 90;
      return !(hasAbnormalRespiratoryRate || hasSevereRespiratoryDistress);
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
      if (formValues.oxygen_facility_available === "Yes") return false;
      if (formValues.oxygen_facility_available === "No") return true;
      const satsMonAvailable = formValues.can_measure_oxygen_saturation === true;
      const satsAir = Number(formValues.oxygen_saturation_vital);
      return !(satsMonAvailable && satsAir < 90);
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("EmergencyManagement"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("BabyRecoveredStillSevereRespiratory"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("BabyRecoveredStillSevereRespiratory"))
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
        infographicData: () => __vitePreload(() => import('./infographics-D7H9eIsM.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("WarmTheBody"))
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
        validation: (value) => {
          if (!value) return "Last Name is required";
          return null;
        }
      },
      {
        componentType: "listSelectionField",
        padding: true,
        name: "gender",
        header: "Gender",
        subtitle: "Select gender",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Male", value: "M" },
          { label: "Female", value: "F" },
          { label: "Unknown", value: "U" }
        ],
        validation: (value) => {
          if (!value) return "Gender is required";
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
        autoSummary: {
          enabled: true,
          scope: "beforeCurrent",
          showMissingAsDash: true,
          respectSkipCondition: false,
          includeFieldNames: [
            "crying",
            "breathing",
            "present_signs",
            "respiratory_rate",
            "heart_rate",
            "oxygen_saturation_vital",
            "oxygen_facility_available",
            "saturation_in_oxygen",
            "temperature"
          ]
        }
      }
    ],
    skipCondition: (triageData) => {
      return Boolean(triageData._forceDemographics);
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
      const hasAbnormalRespiratoryRate = Number.isFinite(respiratoryRate) && respiratoryRate > 60;
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
  }
];
function getNextSectionIndex(currentIndex, allTriageData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalTriageSections.length) {
    return null;
  }
  const nextSection = neonatalTriageSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allTriageData)) {
    return getNextSectionIndex(nextIndex, allTriageData);
  }
  return nextIndex;
}
function getPreviousSectionIndex(currentIndex, allTriageData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalTriageSections[prevIndex];
  if (prevSection?.skipCondition) {
    try {
      const shouldSkip = prevSection.skipCondition(allTriageData);
      if (shouldSkip) {
        return getPreviousSectionIndex(prevIndex, allTriageData);
      }
    } catch (error) {
      console.error(`Error evaluating skipCondition for section ${prevIndex}:`, error);
    }
  }
  return prevIndex;
}

export { getNextSectionIndex as a, getPreviousSectionIndex as g, neonatalTriageSections as n, triageConceptMapping as t, useNeonatalTriageStore as u };
