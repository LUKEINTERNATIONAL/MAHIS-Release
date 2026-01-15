import { cG as __vitePreload, q as defineComponent, r as ref, h as inject, w as watch, x as createElementBlock, y as openBlock, z as createVNode, E as unref, bs as IonPage, aD as IonContent, aI as useRouter, eS as provide, v as resolveComponent, N as createBlock, B as withCtx } from './vendor-sqYZJ6fK.js';
import { s as storeToRefs } from './pinia-B_NbVBpS.js';
import { C as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, t as toastWarning, G as toastSuccess, x as toastDanger } from '../index-_N7CIn5p.js';
import { q as neonatalSystemicExaminationFormKey, N as NeonatalStepper, r as useSystemicExaminationStore } from './NeonatalStepper-CxQhVATI.js';
import { N as NeonatalService } from './neonatal_service-DfcsuN5C.js';

const warningAlertStyle = {
  type: "warning",
  backgroundColor: "#FEDF89",
  textColor: "#B54708"
};
const respiratoryDistressSymptomLabels = {
  gasping: "Gasping",
  fast_breathing: "Fast Breathing",
  nasal_flaring: "Nasal Flaring",
  chest_indrawing: "Chest Indrawing's",
  stridor: "Stridor",
  grunting: "Grunting"
};
const lungSoundLabels = {
  clear: "Chest is clear",
  unequal_air_entry: "Unequal air entry",
  unilateral_crackles: "Unilateral crackles",
  unilateral_wheeze: "Unilateral wheeze",
  bilateral_crackles_wheeze: "Bilateral crackles/wheeze",
  stridor: "Stridor"
};
const heartSoundLabels = {
  normal: "Normal heart sounds",
  murmur: "Murmur or extra sounds",
  not_confident: "I am not confident auscultating for murmurs"
};
const abdomenFindingsLabels = {
  soft_normal: "Soft and normal",
  distended: "Distended",
  wall_defect: "Abdominal wall defect",
  prune_belly: "Prune Belly Syndrome",
  mass: "Abdominal Mass"
};
const umbilicusFindingsLabels = {
  healthy: "Healthy & clean",
  bleeding: "Bleeding",
  red_skin: "Red skin all around umbilicus",
  meconium: "Meconium stained",
  hernia: "Umbilical Hernia",
  abnormal: "Abnormal looking"
};
const genitaliaFindingsLabels = {
  male_normal: "Normal Male genitalia",
  female_normal: "Normal Female genitalia",
  male_abnormal: "Abnormal Male genitalia",
  female_abnormal: "Abnormal Female genitalia",
  ambiguous: "Ambiguous Genitalia (not sure)"
};
const anusFindingsLabels = {
  patent: "Patent (Normal)",
  imperforate: "Imperforate",
  abnormal: "Abnormal"
};
const colorLabels = {
  pink: "Pink",
  blue: "Blue",
  pale: "White (Pale)",
  yellow: "Yellow"
};
const capillaryRefillTimeLabels = {
  less_than_3: "Less than 3 seconds",
  "3_or_more": "3 or more seconds"
};
const femoralPulseLabels = {
  palpable: "Palpable",
  weak: "Weak or absent",
  not_confident: "Not confident feeling femoral pulses",
  difficult: "Difficult to feel"
};
const toneAssessmentLabels = {
  normal: "Normal tone, movement in all limbs",
  hypertonia: "Increased tone + Hypertonia (stiff)",
  hypotonia: "Reduced tone + Hypotonia (floppy)",
  flaccid: "Flaccid (completely floppy)"
};
const suckReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent +/- Bites"
};
const graspReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent"
};
const MoreReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent"
};
const musculoskeletalDeformityLabels = {
  upper_limb_injury: "Birth injury (upper limbs) e.g Erb's palsy",
  lower_limb_injury: "Birth injury (lower limbs) e.g fracture",
  deformity_talipes: "Musculoskeletal deformities e.g talipes",
  leg_length_difference: "Legs are of different lengths",
  none: "None observed"
};
const skinFindingLabels = {
  pustules: "Pustules all over",
  abscess: "Big boil / Abscess",
  uneven_folds: "Uneven skin folds on thighs",
  mongolian_spot: "Mongolian blue spot",
  bruising: "Bruising",
  petechiae: "Petechiae",
  normal: "Normal skin"
};
const thompsonScoreFieldDefinitions = [
  { key: "thompsonRespirationScore", label: "Respiration" },
  { key: "thompsonSuckScore", label: "Suck Reflex" },
  { key: "thompsonMoroScore", label: "More Reflex" },
  { key: "thompsonGraspScore", label: "Grasp Reflex" },
  { key: "thompsonFontanelleScore", label: "Fontanelle" },
  { key: "thompsonToneScore", label: "Tone" },
  { key: "thompsonConsciousnessScore", label: "Level of consciousness" },
  { key: "thompsonFitsScore", label: "Fits, seizures & convulsions" },
  { key: "thompsonPostureScore", label: "Posture" }
];
const thompsonScoreOptions = [
  { label: "0 - Normal", value: "0" },
  { label: "1 - Mild abnormality", value: "1" },
  { label: "2 - Moderate abnormality", value: "2" },
  { label: "3 - Severe abnormality", value: "3" }
];
const normalizeThompsonScoreValue = (value) => {
  if (value === null || value === void 0) {
    return "";
  }
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  if (typeof value === "object") {
    if ("value" in value && value.value !== void 0) {
      return String(value.value);
    }
    if ("concept_id" in value && value.concept_id !== void 0) {
      return String(value.concept_id);
    }
    if ("name" in value && value.name !== void 0) {
      return String(value.name);
    }
  }
  return "";
};
const getThompsonScoreLabel = (value) => {
  if (value === null || value === void 0) {
    return "";
  }
  if (typeof value === "object" && "label" in value && typeof value.label === "string") {
    return value.label;
  }
  const normalized = normalizeThompsonScoreValue(value);
  const match = thompsonScoreOptions.find((option) => option.value === normalized);
  return match?.label || normalized;
};
const parseThompsonScoreValue = (value) => {
  const normalized = normalizeThompsonScoreValue(value);
  const numeric = parseInt(normalized, 10);
  if (Number.isNaN(numeric)) {
    return 0;
  }
  return numeric;
};
const getThompsonScoreTotal = (formValues) => {
  return thompsonScoreFieldDefinitions.reduce((total, definition) => {
    return total + parseThompsonScoreValue(formValues[definition.key]);
  }, 0);
};
const toLabelList = (values, labels) => {
  if (!values) return [];
  const arrayValues = Array.isArray(values) ? values : [values];
  return arrayValues.map((value) => labels[value] || value).filter(Boolean);
};
const neonatalSystemicExaminationSections = [
  {
    title: "Systemic Examination",
    subtitle: "",
    formData: [
      {
        componentType: "infographicField",
        name: "systemic_examination_overview",
        header: "",
        helperText: "The app will aid you to do a complete head to toe examination",
        displayMode: "cards",
        showStepNumber: false,
        cardVariant: "summary",
        infographicData: {
          key: "systemic_examination_overview",
          sections: [
            {
              title: "Neurological Systemic Examination",
              bullets: [
                "Tone Assessment",
                "Suck Reflex",
                "Grasp Reflex",
                "More Reflex"
              ]
            },
            {
              title: "Chest Systemic Examination",
              bullets: [
                "Respiratory Examination",
                "Chest Auscultation",
                "Murmurs"
              ]
            },
            {
              title: "Abdomen Systemic Examination",
              bullets: [
                "Abdomen",
                "Umbilicus"
              ]
            },
            {
              title: "Musculoskeletal",
              bullets: [
                "Deformities / traumas",
                "Skin"
              ]
            },
            {
              title: "THOMPSON SCORE",
              content: "Complete Thompson scoring for birth asphyxia assessment"
            }
          ]
        }
      }
    ]
  },
  {
    title: "Chest Systemic Examination",
    subtitle: "Respiratory Examination",
    formData: [
      {
        componentType: "radioButtonField",
        header: "Are there signs of respiratory distress?",
        name: "respiratoryDistress",
        type: "inline",
        mode: "neonatal",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => value ? null : "Please indicate if there are signs of respiratory distress"
      },
      {
        componentType: "listSelectionField",
        name: "respiratoryDistressSymptoms",
        header: "",
        subtitle: "Select ALL that are applicable",
        titleStyle: "tonal",
        type: "multiple",
        allowDeselect: true,
        showCheckmark: true,
        options: [
          { label: "Gasping", value: "gasping" },
          { label: "Fast Breathing", value: "fast_breathing" },
          { label: "Nasal Flaring", value: "nasal_flaring" },
          { label: "Chest Indrawing's", value: "chest_indrawing" },
          { label: "Stridor", value: "stridor" },
          { label: "Grunting", value: "grunting" }
        ],
        condition: (formValues) => formValues.respiratoryDistress === "yes",
        validation: (value) => {
          if (!value || Array.isArray(value) && value.length === 0) {
            return "Please select at least one symptom";
          }
          return null;
        }
      }
    ]
  },
  {
    title: "Chest Systemic Examination",
    formData: [
      {
        componentType: "listSelectionField",
        header: "Is a stethoscope available?",
        name: "stethoscopeAvailable",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => value ? null : "Please indicate if a stethoscope is available"
      },
      {
        componentType: "listSelectionField",
        name: "lungSounds",
        header: "Listen to the lungs. What do you hear?",
        subtitle: "",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Chest is clear", value: "clear" },
          { label: "Unequal air entry", value: "unequal_air_entry" },
          { label: "Unilateral crackles", value: "unilateral_crackles" },
          { label: "Unilateral wheeze", value: "unilateral_wheeze" },
          { label: "Bilateral crackles/wheeze", value: "bilateral_crackles_wheeze" },
          { label: "Stridor", value: "stridor" }
        ],
        condition: (formValues) => formValues.stethoscopeAvailable === "yes",
        validation: (value) => !value ? "Please select one option" : null
      }
    ]
  },
  {
    title: "Chest Systemic Examination",
    formData: [
      {
        componentType: "listSelectionField",
        name: "heartSounds",
        header: "Murmurs",
        subtitle: "Place your stethoscope over the left side of the chest and listen for extra sounds",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Normal heart sounds", value: "normal" },
          { label: "Murmur or extra sounds", value: "murmur" },
          { label: "I am not confident auscultating for murmurs", value: "not_confident" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      },
      {
        componentType: "listSelectionField",
        name: "color",
        header: "Color",
        subtitle: "What color is the baby?",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Pink", value: "pink" },
          { label: "Blue", value: "blue" },
          { label: "White (Pale)", value: "pale" },
          { label: "Yellow", value: "yellow" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      },
      {
        componentType: "listSelectionField",
        name: "capillaryRefillTime",
        header: "Capillary Refill Time (CRT)",
        subtitle: "Do this by pressing over the sternum for 5 seconds & release.\n\nHow long does it take for skin to return to original color?",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Less than 3 seconds", value: "less_than_3" },
          { label: "3 or more seconds", value: "3_or_more" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      },
      {
        componentType: "listSelectionField",
        name: "femoralPulses",
        header: "Femoral Pulses",
        subtitle: "Press over the center of the line at the top of the thighs",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Palpable", value: "palpable" },
          { label: "Weak or absent", value: "weak" },
          { label: "I am not confident feeling the femoral pulses", value: "not_confident" },
          { label: "Difficult to feel", value: "difficult" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      }
    ]
  },
  {
    title: "Summary",
    formData: [
      {
        componentType: "summaryField",
        name: "chestSummaryComputed",
        emptyStateMessage: "No chest findings captured yet.",
        builder: (formValues) => {
          const formatYesNo = (value) => value ? `(${value.toLowerCase()})` : void 0;
          const formatLabel = (value, labels) => {
            if (!value) return void 0;
            return labels?.[value] || value;
          };
          const respiratorySymptoms = toLabelList(
            formValues.respiratoryDistressSymptoms,
            respiratoryDistressSymptomLabels
          );
          const rows = [];
          const pushRow = (section, label, value, detail) => {
            if (!value && !detail && !label) {
              return;
            }
            rows.push({ section, label, value, detail });
          };
          pushRow(
            "Chest Examination",
            "Are there signs of respiratory distress?",
            formatYesNo(formValues.respiratoryDistress)
          );
          if (respiratorySymptoms.length) {
            pushRow("Chest Examination", void 0, respiratorySymptoms.join(", "));
          }
          pushRow(
            "Chest Auscultation",
            "Is a stethoscope available?",
            formatYesNo(formValues.stethoscopeAvailable)
          );
          pushRow(
            "Chest Auscultation",
            "Lung sounds",
            formatLabel(formValues.lungSounds, lungSoundLabels)
          );
          pushRow("Murmurs", "Heart sounds", formatLabel(formValues.heartSounds, heartSoundLabels));
          pushRow("Perfusion", "Color", formatLabel(formValues.color, colorLabels));
          pushRow(
            "Perfusion",
            "Capillary refill",
            formatLabel(formValues.capillaryRefillTime, capillaryRefillTimeLabels)
          );
          pushRow("Perfusion", "Femoral pulses", formatLabel(formValues.femoralPulses, femoralPulseLabels));
          return rows;
        }
      }
    ]
  },
  {
    title: "Abdomen Systemic Examination",
    subtitle: "Abdomen",
    formData: [
      {
        componentType: "listSelectionField",
        name: "abdomenFindings",
        header: "Abdomen",
        subtitle: "Lightly palpate the abdomen in all 4 quadrants",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Soft and normal", value: "soft_normal" },
          { label: "Distended", value: "distended" },
          { label: "Abdominal wall defect", value: "wall_defect" },
          { label: "Prune Belly Syndrome", value: "prune_belly" },
          { label: "Abdominal Mass", value: "mass" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      },
      {
        componentType: "listSelectionField",
        name: "umbilicusFindings",
        header: "Umbilicus",
        subtitle: "Describe the umbilicus",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Healthy & clean", value: "healthy" },
          { label: "Bleeding", value: "bleeding" },
          { label: "Red skin all around umbilicus", value: "red_skin" },
          { label: "Meconium stained", value: "meconium" },
          { label: "Umbilical Hernia", value: "hernia" },
          { label: "Abnormal looking", value: "abnormal" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      },
      {
        componentType: "listSelectionField",
        name: "genitaliaFindings",
        header: "Genitalia",
        subtitle: "Check the baby's genitalia",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Normal Male genitalia", value: "male_normal" },
          { label: "Normal Female genitalia", value: "female_normal" },
          { label: "Abnormal Male genitalia", value: "male_abnormal" },
          { label: "Abnormal Female genitalia", value: "female_abnormal" },
          { label: "Ambiguous Genitalia (not sure)", value: "ambiguous" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      },
      {
        componentType: "listSelectionField",
        name: "anusFindings",
        header: "Anus",
        subtitle: "Check the baby's anus",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Patent (Normal)", value: "patent" },
          { label: "Imperforate", value: "imperforate" },
          { label: "Abnormal", value: "abnormal" }
        ],
        validation: (value) => !value ? "Please select one option" : null
      }
    ]
  },
  {
    title: "Abdomen Systemic Examination",
    formData: [
      {
        componentType: "Alert",
        name: "abdomen_findings_instructions",
        ...warningAlertStyle,
        message: "Answer each question regarding abdominal appearance and perfusion."
      },
      {
        componentType: "yesNoQuestion",
        header: "Is the abdomen distended?",
        name: "abdomenDistendedConfirm",
        validation: (value) => value ? null : "Please indicate if the abdomen is distended"
      },
      {
        componentType: "yesNoQuestion",
        header: "Distended veins?",
        name: "abdomenDistendedVeins",
        validation: (value) => value ? null : "Please indicate if there are distended veins"
      },
      {
        componentType: "yesNoQuestion",
        header: "Tender?",
        name: "abdomenTender",
        validation: (value) => value ? null : "Please indicate if abdomen is tender"
      },
      {
        componentType: "yesNoQuestion",
        header: "Is the abdomen shiny?",
        name: "abdomenShiny",
        validation: (value) => value ? null : "Please indicate if the abdomen is shiny"
      },
      {
        componentType: "yesNoQuestion",
        header: "Has the abdomen changed color?",
        name: "abdomenColorChange",
        validation: (value) => value ? null : "Please indicate if the abdomen has changed color"
      },
      {
        componentType: "yesNoQuestion",
        header: "Hepatomegaly?",
        name: "hepatomegaly",
        validation: (value) => value ? null : "Please indicate if there is hepatomegaly"
      },
      {
        componentType: "yesNoQuestion",
        header: "Splenomegaly?",
        name: "splenomegaly",
        validation: (value) => value ? null : "Please indicate if there is splenomegaly"
      },
      {
        componentType: "yesNoQuestion",
        header: "Palpable Kidneys?",
        name: "palpableKidneys",
        validation: (value) => value ? null : "Please indicate if kidneys are palpable"
      },
      {
        componentType: "yesNoQuestion",
        header: "Any other masses?",
        name: "otherMasses",
        validation: (value) => value ? null : "Please indicate if there are any other masses"
      },
      {
        componentType: "textAreaField",
        name: "otherMassesDescription",
        header: "Describe the masses",
        placeholder: "Provide details about location, size, and characteristics",
        minHeight: 120,
        condition: (formValues) => formValues.otherMasses === "yes",
        validation: (value, formValues) => {
          if (formValues?.otherMasses === "yes" && !value) {
            return "Please describe the masses found";
          }
          return null;
        }
      }
    ]
  },
  {
    title: "Summary",
    formData: [
      {
        componentType: "Alert",
        name: "abdomen_summary_info",
        ...warningAlertStyle,
        message: "Review the following abdominal examination findings. You can go back to edit if needed."
      },
      {
        componentType: "summaryField",
        name: "abdomenSummaryComputed",
        title: "Abdomen examination summary",
        subtitle: "Auto-generated from the abdominal examination findings",
        description: "Confirm that the values below match your observations before adding any extra notes.",
        emptyStateMessage: "No abdominal findings captured yet.",
        builder: (formValues) => {
          const formatYesNo = (value) => {
            if (!value) {
              return void 0;
            }
            if (value === "yes") return "Yes";
            if (value === "no") return "No";
            return value;
          };
          const formatLabel = (value, labels) => {
            if (!value) return void 0;
            return labels?.[value] || value;
          };
          const rows = [];
          const pushRow = (section, label, value, detail) => {
            if (!value && !detail && !label) {
              return;
            }
            rows.push({ section, label, value, detail });
          };
          pushRow(
            "Abdomen",
            "Abdomen findings",
            formatLabel(formValues.abdomenFindings, abdomenFindingsLabels)
          );
          pushRow(
            "Abdomen",
            "Is the abdomen distended?",
            formatYesNo(formValues.abdomenDistendedConfirm)
          );
          pushRow(
            "Abdomen",
            "Distended veins?",
            formatYesNo(formValues.abdomenDistendedVeins)
          );
          pushRow(
            "Abdomen",
            "Tender?",
            formatYesNo(formValues.abdomenTender)
          );
          pushRow(
            "Abdomen",
            "Is the abdomen shiny?",
            formatYesNo(formValues.abdomenShiny)
          );
          pushRow(
            "Abdomen",
            "Has the abdomen changed color?",
            formatYesNo(formValues.abdomenColorChange)
          );
          pushRow(
            "Abdomen",
            "Hepatomegaly?",
            formatYesNo(formValues.hepatomegaly)
          );
          pushRow(
            "Abdomen",
            "Splenomegaly?",
            formatYesNo(formValues.splenomegaly)
          );
          pushRow(
            "Abdomen",
            "Palpable Kidneys?",
            formatYesNo(formValues.palpableKidneys)
          );
          pushRow(
            "Abdomen",
            "Any other masses?",
            formatYesNo(formValues.otherMasses)
          );
          if (formValues.otherMassesDescription?.trim()) {
            pushRow("Abdomen", void 0, formValues.otherMassesDescription.trim());
          }
          pushRow(
            "Umbilicus",
            "Umbilicus findings",
            formatLabel(formValues.umbilicusFindings, umbilicusFindingsLabels)
          );
          pushRow(
            "Genitalia",
            "Genitalia findings",
            formatLabel(formValues.genitaliaFindings, genitaliaFindingsLabels)
          );
          pushRow(
            "Anus",
            "Anus findings",
            formatLabel(formValues.anusFindings, anusFindingsLabels)
          );
          return rows;
        }
      }
    ]
  },
  {
    title: "Neurological Systemic Examination",
    subtitle: "Tone Assessment",
    description: "Assess the baby's muscle tone",
    formData: [
      {
        componentType: "infographicField",
        name: "tone_assessment_infographic",
        displayMode: "visual",
        helperText: "Weigh the baby completely naked. What will you do then:\n1. Check the tone as below.\n2. Check the spine for spina bifida.\n3. Check the face for dysmorphism.",
        infographicData: () => __vitePreload(() => import('./infographics-CvsizS9R.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("NeurologicalToneAssessment"))
      },
      {
        componentType: "listSelectionField",
        name: "toneAssessment",
        header: "Tone Assessment",
        subtitle: "Select one",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Normal tone, movement in all limbs", value: "normal" },
          { label: "Increased tone + Hypertonia (stiff)", value: "hypertonia" },
          { label: "Reduced tone + Hypotonia (floppy)", value: "hypotonia" },
          { label: "Flaccid (completely floppy)", value: "flaccid" }
        ],
        validation: (value) => !value ? "Please select a tone assessment" : null
      }
    ]
  },
  {
    title: "Neurological Systemic Examination",
    formData: [
      {
        componentType: "Alert",
        name: "suck_instructions",
        ...warningAlertStyle,
        message: "Stroke the pad of the baby's mouth with you first finger.\nHow would you describe the reflex?"
      },
      {
        componentType: "infographicField",
        name: "suck_reflex_infographic",
        displayMode: "visual",
        infographicData: () => __vitePreload(() => import('./infographics-CvsizS9R.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("NeurologicalSuckReflex"))
      },
      {
        componentType: "listSelectionField",
        name: "suckReflex",
        header: "Suck Reflex",
        subtitle: "Select one",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Present and Strong", value: "present_strong" },
          { label: "Present but Weak", value: "present_weak" },
          { label: "Absent +/- Bites", value: "absent" }
        ],
        validation: (value) => !value ? "Please select suck reflex status" : null
      }
    ]
  },
  {
    title: "Neurological Systemic Examination",
    subtitle: "Grasp Reflex",
    description: "Test the baby's grasp reflex",
    formData: [
      {
        componentType: "Alert",
        name: "grasp_instructions",
        ...warningAlertStyle,
        message: "Place your finger or object in the palm of the baby's.\nHow would you describe the reflex?"
      },
      {
        componentType: "infographicField",
        name: "grasp_reflex_infographic",
        displayMode: "visual",
        infographicData: () => __vitePreload(() => import('./infographics-CvsizS9R.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("NeurologicalGraspReflex"))
      },
      {
        componentType: "listSelectionField",
        name: "graspReflex",
        header: "Grasp Reflex",
        subtitle: "Select one",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Present and Strong", value: "present_strong" },
          { label: "Present but Weak", value: "present_weak" },
          { label: "Absent", value: "absent" }
        ],
        validation: (value) => !value ? "Please select grasp reflex status" : null
      }
    ]
  },
  {
    title: "Neurological Systemic Examination",
    subtitle: "More Reflex",
    description: "Test the baby's More Reflex",
    formData: [
      {
        componentType: "Alert",
        name: "moro_instructions",
        ...warningAlertStyle,
        message: "Startle the baby by making a sudden noise or by gently letting their head fall back a little and catch it straight away while supporting their body.\nHow would you describe the reflex?\n\nStep 1: Sudden Drop\nStep 2: Arms Out & Cry"
      },
      {
        componentType: "infographicField",
        name: "moro_reflex_infographic",
        displayMode: "visual",
        infographicData: () => __vitePreload(() => import('./infographics-CvsizS9R.js'),true              ?[]:void 0).then((m) => m.getInfographicByKey("NeurologicalMoreReflex"))
      },
      {
        componentType: "listSelectionField",
        name: "MoreReflex",
        header: "More Reflex",
        subtitle: "Select one",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        options: [
          { label: "Present and Strong", value: "present_strong" },
          { label: "Present but Weak", value: "present_weak" },
          { label: "Absent", value: "absent" }
        ],
        validation: (value) => !value ? "Please select More Reflex status" : null
      }
    ]
  },
  {
    title: "Neurological Summary",
    subtitle: "Summary of neurological examination findings",
    description: "Review the neurological examination findings",
    formData: [
      {
        componentType: "summaryField",
        name: "neurologicalSummaryComputed",
        title: "Neurological examination summary",
        subtitle: "Auto-generated from tone and reflex findings",
        description: "Confirm that the values below match your observations before adding extra notes.",
        emptyStateMessage: "No neurological findings captured yet.",
        builder: (formValues) => {
          const rows = [];
          const formatLabel = (value, labels) => {
            if (!value) return void 0;
            return labels?.[value] || value;
          };
          const pushRow = (section, label, value) => {
            if (!value) return;
            rows.push({ section, label, value });
          };
          pushRow("Tone", "Tone assessment", formatLabel(formValues.toneAssessment, toneAssessmentLabels));
          pushRow("Reflexes", "Suck reflex", formatLabel(formValues.suckReflex, suckReflexLabels));
          pushRow("Reflexes", "Grasp reflex", formatLabel(formValues.graspReflex, graspReflexLabels));
          pushRow("Reflexes", "More Reflex", formatLabel(formValues.MoreReflex, MoreReflexLabels));
          return rows;
        }
      }
    ]
  },
  {
    title: "Musculoskeletal Examination",
    subtitle: "Deformities or trauma",
    description: "Assess the limbs and skin for deformities, trauma, or other notable findings",
    formData: [
      {
        componentType: "Alert",
        name: "musculoskeletal_instructions",
        ...warningAlertStyle,
        message: "Ask the caregiver about any concerns and examine the limbs for trauma, deformities or asymmetry."
      },
      {
        componentType: "listSelectionField",
        name: "musculoskeletalDeformities",
        header: "Select ALL deformities or trauma that are present",
        helperText: "Tap each option that applies",
        type: "multiple",
        allowDeselect: true,
        showCheckmark: true,
        options: [
          { label: musculoskeletalDeformityLabels.upper_limb_injury, value: "upper_limb_injury" },
          { label: musculoskeletalDeformityLabels.lower_limb_injury, value: "lower_limb_injury" },
          { label: musculoskeletalDeformityLabels.deformity_talipes, value: "deformity_talipes" },
          { label: musculoskeletalDeformityLabels.leg_length_difference, value: "leg_length_difference" },
          { label: musculoskeletalDeformityLabels.none, value: "none" }
        ]
      },
      {
        componentType: "Alert",
        name: "skin_instructions",
        ...warningAlertStyle,
        message: "Examine the baby's skin carefully from head to toe."
      },
      {
        componentType: "listSelectionField",
        name: "skinFindings",
        header: "Select ALL findings that are present",
        helperText: "Include marks, lesions, or anything else notable",
        type: "multiple",
        allowDeselect: true,
        showCheckmark: true,
        options: [
          { label: skinFindingLabels.pustules, value: "pustules" },
          { label: skinFindingLabels.abscess, value: "abscess" },
          { label: skinFindingLabels.uneven_folds, value: "uneven_folds" },
          { label: skinFindingLabels.mongolian_spot, value: "mongolian_spot" },
          { label: skinFindingLabels.bruising, value: "bruising" },
          { label: skinFindingLabels.petechiae, value: "petechiae" },
          { label: skinFindingLabels.normal, value: "normal" }
        ]
      }
    ]
  },
  {
    title: "Thompson Score",
    subtitle: "Birth asphyxia / HIE assessment",
    description: "Complete the Thompson score when birth asphyxia is suspected to guide management",
    formData: [
      {
        componentType: "radioButtonField",
        name: "birthAsphyxiaSuspected",
        header: "Birth asphyxia?",
        type: "inline",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => value ? null : "Please indicate whether birth asphyxia is suspected"
      },
      {
        componentType: "Alert",
        name: "thompson_instructions",
        ...warningAlertStyle,
        message: "Please complete Thompson score for BA / HIE by assessing posture, moro and grasp as shown below",
        condition: (formValues) => formValues?.birthAsphyxiaSuspected === "yes"
      },
      {
        componentType: "scoreField",
        name: "thompsonScoreComputed",
        subtitle: "Thompson Score",
        title: "Final Score",
        padTo: 2,
        variant: "success",
        description: "A score ≥ 7 indicates significant neonatal encephalopathy",
        condition: (formValues) => formValues?.birthAsphyxiaSuspected === "yes",
        computeValue: (formValues) => {
          if (formValues?.birthAsphyxiaSuspected === "yes") {
            return getThompsonScoreTotal(formValues);
          }
          return null;
        }
      },
      {
        componentType: "Alert",
        name: "thompson_instructions_two",
        ...warningAlertStyle,
        message: "A score of > 7 indicates significant neonatal encephalopathy (birth asphyxia)",
        condition: (formValues) => formValues?.birthAsphyxiaSuspected === "yes"
      },
      ...thompsonScoreFieldDefinitions.map((definition) => ({
        componentType: "multiSelectInputField",
        name: definition.key,
        header: definition.label,
        placeholder: "Select",
        isMultiple: false,
        trackBy: "value",
        label: "label",
        options: thompsonScoreOptions,
        condition: (formValues) => formValues?.birthAsphyxiaSuspected === "yes",
        validation: (value, formValues) => {
          if (formValues?.birthAsphyxiaSuspected === "yes" && !normalizeThompsonScoreValue(value)) {
            return `Please provide a score for ${definition.label.toLowerCase()}`;
          }
          return null;
        }
      }))
    ]
  },
  {
    title: "Summary",
    formData: [
      {
        componentType: "summaryField",
        name: "musculoskeletalSummaryComputed",
        title: "Musculoskeletal summary",
        subtitle: "Auto-generated from musculoskeletal and Thompson score entries",
        emptyStateMessage: "Complete the musculoskeletal examination to see the summary.",
        builder: (formValues) => {
          const data = formValues || {};
          const rows = [];
          const deformities = toLabelList(data.musculoskeletalDeformities, musculoskeletalDeformityLabels).join(", ");
          if (deformities) {
            rows.push({
              section: "Deformities or trauma",
              value: deformities
            });
          }
          const skin = toLabelList(data.skinFindings, skinFindingLabels).join(", ");
          if (skin) {
            rows.push({
              section: "Skin",
              value: skin
            });
          }
          if (data.birthAsphyxiaSuspected) {
            rows.push({
              section: "Birth asphyxia",
              label: "Birth asphyxia?",
              value: data.birthAsphyxiaSuspected === "yes" ? "Yes" : "No"
            });
          }
          if (data.birthAsphyxiaSuspected === "yes") {
            const total = getThompsonScoreTotal(data);
            rows.push({
              section: "Thompson Score",
              label: "Final score",
              value: total.toString().padStart(2, "0"),
              detail: total >= 7 ? "≥7 indicates significant neonatal encephalopathy" : void 0
            });
            thompsonScoreFieldDefinitions.forEach((definition) => {
              const value = data[definition.key];
              if (value !== void 0 && value !== null && value !== "") {
                rows.push({
                  section: "Thompson Score",
                  label: definition.label,
                  value: getThompsonScoreLabel(value)
                });
              }
            });
          }
          return rows;
        }
      }
    ]
  }
];

const _hoisted_1$f = { class: "examination-section-wrapper" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SystemicExaminationInfo",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[0];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (_values) => {
      if (!systemicExaminationForm) return;
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
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
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const SystemicExaminationInfo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-8ca4ccc8"]]);

const _hoisted_1$e = { class: "examination-section-wrapper" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "RespiratoryExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[1];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const RespiratoryExamination = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-3118fd4c"]]);

const _hoisted_1$d = { class: "examination-section-wrapper" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ChestAuscultation",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[2];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ChestAuscultation = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-67871e3e"]]);

const _hoisted_1$c = { class: "examination-section-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Murmurs",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[3];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const Murmurs = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-7b35e248"]]);

const _hoisted_1$b = { class: "examination-section-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ChestSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[4];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const summaryFieldNames = [
      "respiratoryDistress",
      "respiratoryDistressSymptoms",
      "stethoscopeAvailable",
      "lungSounds",
      "heartSounds",
      "color",
      "capillaryRefillTime",
      "femoralPulses"
    ];
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
    };
    const syncSummarySectionValues = () => {
      if (!systemicExaminationForm || !formRef.value) return;
      const currentValues = formRef.value.getFormValues?.() || {};
      summaryFieldNames.forEach((field) => {
        const targetValue = systemicExaminationForm[field];
        if (currentValues[field] === targetValue) {
          return;
        }
        formRef.value?.setFormValue(field, targetValue);
      });
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
          syncSummarySectionValues();
        }
      },
      { immediate: true }
    );
    watch(
      () => summaryFieldNames.map((field) => systemicExaminationForm?.[field]),
      () => {
        syncSummarySectionValues();
      },
      { deep: true, immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ChestSummary = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-62a2ac2d"]]);

const _hoisted_1$a = { class: "examination-section-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AbdomenSystemicExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[5];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const AbdomenSystemicExamination = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-c4a4340a"]]);

const _hoisted_1$9 = { class: "examination-section-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AbdomenFindings",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[6];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const AbdomenFindings = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-c4e0b058"]]);

const _hoisted_1$8 = { class: "examination-section-wrapper" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AbdomenSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[7];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const summaryFieldNames = [
      "abdomenFindings",
      "abdomenDistendedConfirm",
      "abdomenDistendedVeins",
      "abdomenTender",
      "abdomenShiny",
      "abdomenColorChange",
      "hepatomegaly",
      "splenomegaly",
      "palpableKidneys",
      "otherMasses",
      "otherMassesDescription",
      "umbilicusFindings",
      "genitaliaFindings",
      "anusFindings"
    ];
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
    };
    const syncSummarySectionValues = () => {
      if (!systemicExaminationForm || !formRef.value) return;
      const currentValues = formRef.value.getFormValues?.() || {};
      summaryFieldNames.forEach((field) => {
        const targetValue = systemicExaminationForm[field];
        if (currentValues[field] === targetValue) {
          return;
        }
        formRef.value?.setFormValue(field, targetValue);
      });
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
          syncSummarySectionValues();
        }
      },
      { immediate: true }
    );
    watch(
      () => summaryFieldNames.map((field) => systemicExaminationForm?.[field]),
      () => {
        syncSummarySectionValues();
      },
      { deep: true, immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const AbdomenSummary = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-9573f3f4"]]);

const _hoisted_1$7 = { class: "examination-section-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ToneAssessment",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[8];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ToneAssessment = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b5c9ee0e"]]);

const _hoisted_1$6 = { class: "examination-section-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SuckReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[9];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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

const SuckReflex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-510077e5"]]);

const _hoisted_1$5 = { class: "examination-section-wrapper" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "GraspReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[10];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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

const GraspReflex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2927642f"]]);

const _hoisted_1$4 = { class: "examination-section-wrapper" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MoreReflex",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[11];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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

const MoreReflex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e6d004b9"]]);

const _hoisted_1$3 = { class: "examination-section-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NeurologicalSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[12];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
    };
    const summaryFieldNames = [
      "toneAssessment",
      "suckReflex",
      "graspReflex",
      "MoreReflex"
    ];
    const syncSummarySectionValues = () => {
      if (!systemicExaminationForm || !formRef.value) return;
      const currentValues = formRef.value.getFormValues?.() || {};
      summaryFieldNames.forEach((field) => {
        const targetValue = systemicExaminationForm[field];
        if (currentValues[field] === targetValue) {
          return;
        }
        formRef.value?.setFormValue(field, targetValue);
      });
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
          syncSummarySectionValues();
        }
      },
      { immediate: true }
    );
    watch(
      () => summaryFieldNames.map((field) => systemicExaminationForm?.[field]),
      () => {
        syncSummarySectionValues();
      },
      { deep: false, immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
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

const NeurologicalSummary = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b55cd7f2"]]);

const _hoisted_1$2 = { class: "examination-section-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MusculoskeletalExamination",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[13];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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

const MusculoskeletalExamination = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2e4168a6"]]);

const _hoisted_1$1 = { class: "examination-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ThompsonScore",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[14];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const ThompsonScore = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2a0ef7ab"]]);

const _hoisted_1 = { class: "examination-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MusculoskeletalSummary",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSystemicExaminationSections[15];
    const formData = sectionConfig.formData;
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
    };
    const summaryFieldNames = [
      "musculoskeletalDeformities",
      "skinFindings",
      "birthAsphyxiaSuspected",
      "thompsonRespirationScore",
      "thompsonSuckScore",
      "thompsonMoroScore",
      "thompsonGraspScore",
      "thompsonFontanelleScore",
      "thompsonToneScore",
      "thompsonConsciousnessScore",
      "thompsonFitsScore",
      "thompsonPostureScore"
    ];
    const syncSummarySectionValues = () => {
      if (!systemicExaminationForm || !formRef.value) return;
      summaryFieldNames.forEach((field) => {
        formRef.value?.setFormValue(field, systemicExaminationForm[field]);
      });
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
          syncSummarySectionValues();
        }
      },
      { immediate: true }
    );
    watch(
      () => summaryFieldNames.map((field) => systemicExaminationForm?.[field]),
      () => {
        syncSummarySectionValues();
      },
      { deep: false, immediate: true }
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

const MusculoskeletalSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e807c5b6"]]);

const _sfc_main = defineComponent({
  name: "SystemicExamination",
  components: {
    IonContent,
    IonPage,
    Toolbar,
    NeonatalStepper,
    SystemicExaminationInfo,
    RespiratoryExamination,
    ChestAuscultation,
    Murmurs,
    ChestSummary,
    AbdomenSystemicExamination,
    AbdomenFindings,
    AbdomenSummary,
    ToneAssessment,
    SuckReflex,
    GraspReflex,
    MoreReflex,
    NeurologicalSummary,
    MusculoskeletalExamination,
    ThompsonScore,
    MusculoskeletalSummary
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const stepperTitle = "Systemic Examination";
    const currentOpenStepper = ref("1");
    const isSaving = ref(false);
    const systemicExaminationStore = useSystemicExaminationStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncFormWithPatient = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      systemicExaminationStore.initializeForPatient(patientId);
    };
    syncFormWithPatient();
    watch(
      () => patient.value?.patientID,
      () => syncFormWithPatient()
    );
    const systemicExaminationFormData = systemicExaminationStore.formData;
    provide(neonatalSystemicExaminationFormKey, systemicExaminationFormData);
    watch(
      () => systemicExaminationStore.formData,
      () => systemicExaminationStore.saveSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalSystemicExaminationSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalSystemicExaminationSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalSystemicExaminationSections[0].title,
        value: "1",
        subtitle: neonatalSystemicExaminationSections[0].subtitle,
        component: SystemicExaminationInfo,
        configIndex: 0
      },
      {
        title: neonatalSystemicExaminationSections[1].title,
        value: "2",
        subtitle: neonatalSystemicExaminationSections[1].subtitle,
        component: RespiratoryExamination,
        configIndex: 1
      },
      {
        title: neonatalSystemicExaminationSections[2].title,
        value: "3",
        subtitle: neonatalSystemicExaminationSections[2].subtitle,
        component: ChestAuscultation,
        configIndex: 2
      },
      {
        title: neonatalSystemicExaminationSections[3].title,
        value: "4",
        subtitle: neonatalSystemicExaminationSections[3].subtitle,
        component: Murmurs,
        configIndex: 3
      },
      {
        title: neonatalSystemicExaminationSections[4].title,
        value: "5",
        subtitle: neonatalSystemicExaminationSections[4].subtitle,
        component: ChestSummary,
        configIndex: 4
      },
      {
        title: neonatalSystemicExaminationSections[5].title,
        value: "6",
        subtitle: neonatalSystemicExaminationSections[5].subtitle,
        component: AbdomenSystemicExamination,
        configIndex: 5
      },
      {
        title: neonatalSystemicExaminationSections[6].title,
        value: "7",
        subtitle: neonatalSystemicExaminationSections[6].subtitle,
        component: AbdomenFindings,
        configIndex: 6
      },
      {
        title: neonatalSystemicExaminationSections[7].title,
        value: "8",
        subtitle: neonatalSystemicExaminationSections[7].subtitle,
        component: AbdomenSummary,
        configIndex: 7
      },
      {
        title: neonatalSystemicExaminationSections[8].title,
        value: "9",
        subtitle: neonatalSystemicExaminationSections[8].subtitle,
        component: ToneAssessment,
        configIndex: 8
      },
      {
        title: neonatalSystemicExaminationSections[9].title,
        value: "10",
        subtitle: neonatalSystemicExaminationSections[9].subtitle,
        component: SuckReflex,
        configIndex: 9
      },
      {
        title: neonatalSystemicExaminationSections[10].title,
        value: "11",
        subtitle: neonatalSystemicExaminationSections[10].subtitle,
        component: GraspReflex,
        configIndex: 10
      },
      {
        title: neonatalSystemicExaminationSections[11].title,
        value: "12",
        subtitle: neonatalSystemicExaminationSections[11].subtitle,
        component: MoreReflex,
        configIndex: 11
      },
      {
        title: neonatalSystemicExaminationSections[12].title,
        value: "13",
        subtitle: neonatalSystemicExaminationSections[12].subtitle,
        component: NeurologicalSummary,
        configIndex: 12
      },
      {
        title: neonatalSystemicExaminationSections[13].title,
        value: "14",
        subtitle: neonatalSystemicExaminationSections[13].subtitle,
        component: MusculoskeletalExamination,
        configIndex: 13
      },
      {
        title: neonatalSystemicExaminationSections[14].title,
        value: "15",
        subtitle: neonatalSystemicExaminationSections[13].subtitle,
        component: ThompsonScore,
        configIndex: 14
      },
      {
        title: neonatalSystemicExaminationSections[15].title,
        value: "16",
        subtitle: neonatalSystemicExaminationSections[14].subtitle,
        component: MusculoskeletalSummary,
        configIndex: 15
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
            isSaving.value = true;
            const hasData = Object.values(systemicExaminationFormData).some((value) => {
              if (Array.isArray(value)) return value.length > 0;
              if (typeof value === "boolean") return value === true;
              return value !== void 0 && value !== null && value !== "";
            });
            if (!hasData) {
              toastWarning("Please complete at least one section of the examination");
              isSaving.value = false;
              return;
            }
            await NeonatalService.saveSystemicExaminationAssessment(
              patient.value.patientID,
              systemicExaminationFormData
            );
            toastSuccess("Systemic examination saved successfully");
            systemicExaminationStore.clearPatient(patient.value.patientID);
            await new Promise((resolve) => setTimeout(resolve, 500));
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("Failed to save systemic examination", error);
            toastDanger("Failed to save systemic examination. Please try again.");
            isSaving.value = false;
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
      neonatalSystemicExaminationSections,
      isSaving
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "systemic-examination-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/NeonatalHome",
            useSkipLogic: false,
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "systemicExamination",
            sectionsConfig: _ctx.neonatalSystemicExaminationSections,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const SystemicExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a70beeee"]]);

export { SystemicExamination as default };
