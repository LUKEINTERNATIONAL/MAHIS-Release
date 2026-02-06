import { c as computed, s as defineComponent, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, bd as IonCardContent, f as ref, z as createElementBlock, C as createBaseVNode, bA as createStaticVNode, cF as mergeProps, H as createCommentVNode, x as resolveComponent, D as toDisplayString, a5 as createTextVNode, J as Fragment, V as popoverController, w as watch, K as modalController } from './vendor-6OQ3r7Vr.js';
import { z as StandardForm, y as StandardValidations, c8 as createPopover, _ as _export_sfc, u as useDemographicsStore, G as toastSuccess, H as HisDate } from '../index-zZBkpFP3.js';
import { _ as _sfc_main$n, a as _sfc_main$o, b as _sfc_main$p, c as _sfc_main$q, d as _sfc_main$r, e as _sfc_main$s, L as LungFrontMaleSVG } from './DisplaySelectedBodyParts.vue_vue_type_script_setup_true_lang-BRsxIlfZ.js';
import { C as CPR } from './CPR-CC97AxQV.js';

const useAirwayAssessmentForm = () => {
  const airwayThreatenedReasons = [
    { id: 1, name: "Secretions - blood, vomit, other" },
    { id: 2, name: "Tongue swelling" },
    { id: 3, name: "Neck swelling" },
    { id: 4, name: "Neck haematoma" },
    { id: 5, name: "Tongue falling back" },
    { id: 6, name: "Other" }
  ];
  const airwayInterventionsList = [
    { id: 1, name: "Suctioning Done" },
    { id: 2, name: "Jaw thrust manoeuver" },
    { id: 3, name: "Head tilt/chin lift" },
    { id: 4, name: "Airway adjunct (Oropharyngeal airway and size / nasopharyngeal airway)" },
    { id: 5, name: "Laryngeal mask airway (LMA) insertion" },
    { id: 6, name: "Endotracheal intubation" },
    { id: 7, name: "Performed Cricothyroidotomy(Surgical Airway)" },
    { id: 8, name: "Performed tracheostomy" }
  ];
  const airwayAssessmentFormSection = computed(() => {
    return [
      // Airway Patent Section
      {
        componentType: "Heading",
        name: "Airway Patent",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is Airway Patent?",
        name: "is_airway_patent",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Threatened", value: "Threatened" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Is Patient Injured?",
        name: "is_patient_injured",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4", md: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // Airway Threatened Reason (conditional)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No";
        }
      },
      {
        componentType: "Heading",
        name: "Airway Threatened Details",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No";
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Reason for Airway Threat",
        isMultiple: true,
        trackBy: "id",
        name: "airway_threatened_reason",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: airwayThreatenedReasons,
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No";
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Specify Other Reason",
        name: "other_reason",
        obsValueType: "value_text",
        grid: { s: "8" },
        condition: (allFormValues) => {
          const reasons = allFormValues["airway_threatened_reason"];
          return (allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No") && Array.isArray(reasons) && reasons.some((r) => r.id === 6);
        }
      },
      // Neck Collar and Head Blocks (conditional on patient injured)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Please stabilize the C-Spine",
        backgroundColor: "skyblue",
        value: "Please stabilize the C-Spine",
        grid: { s: "8" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Neck Collar and Head Blocks",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Neck Collar Applied",
        name: "neck_collar_applied",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Not Indicated", value: "Not Indicated" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Head Blocks Applied",
        name: "head_blocks_applied",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // Interventions Section (conditional)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened";
        }
      },
      {
        componentType: "Heading",
        name: "Interventions",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened";
        }
      },
      {
        componentType: "multiSelectInputField",
        isMultiple: true,
        trackBy: "id",
        header: "Airway Opening Intervention",
        name: "airway_opening_intervention",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: airwayInterventionsList,
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened";
        }
      },
      // Airway Size Fields (conditional on oropharyngeal intervention)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        }
      },
      {
        componentType: "Heading",
        name: "Airway Size",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Nasopharyngeal Airway Size (CM)",
        name: "nasopharyngeal_airway_size",
        obsValueType: "value_numeric",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        },
        options: [
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "7", value: "7" },
          { label: "8", value: "8" },
          { label: "9", value: "9" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Oropharyngeal Airway Size (MM)",
        name: "oropharyngeal_airway_size",
        obsValueType: "value_numeric",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        },
        options: [
          { label: "80", value: "80" },
          { label: "90", value: "90" },
          { label: "100", value: "100" },
          { label: "110", value: "110" },
          { label: "120", value: "120" }
        ]
      }
    ];
  });
  return {
    airwayAssessmentFormSection
  };
};

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "AirwayAssessment",
  setup(__props) {
    const formRef = ref(null);
    const airwayBreathingForm = useAirwayAssessmentForm().airwayAssessmentFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(airwayBreathingForm),
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

const useBreathingAssessmentForm = () => {
  const sourceOxygen = [
    { label: "Concentrator", value: "concentrator" },
    { label: "Cylinder", value: "cylinder" },
    { label: "Piped Oxygen", value: "piped_oxygen" }
  ];
  const deviceUsedOptions = [
    { id: 1, name: "Nasal Prongs" },
    { id: 2, name: "Simple face mask" },
    { id: 3, name: "Venturi face mask" },
    { id: 4, name: "Face mask with nebulising chamber" },
    { id: 5, name: "Nonrebreather face mask" },
    { id: 6, name: "Noninvasive ventilation mask" },
    { id: 7, name: "Laryngeal mask airway" },
    { id: 8, name: "Endotracheal tube" }
  ];
  const interventionDevices = [
    { id: 1, name: "Bag and mask" },
    { id: 2, name: "Laryngeal Mask Airway and bag" },
    { id: 3, name: "Endotracheal tube (ETT)" }
  ];
  const breathingAssessmentFormSection = computed(() => {
    return [
      // Main Breathing Question
      {
        componentType: "Heading",
        name: "Breathing Assessment",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is Patient Breathing?",
        name: "is_breathing_abnormal",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "8" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // If NOT Breathing - Intervention Section
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "No"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Assist with ventilation. Manually assist patient breathing",
        message: "",
        value: "Assist with ventilation. Manually assist patient breathing",
        backgroundColor: "skyblue",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "No"
      },
      {
        componentType: "Heading",
        name: "Ventilation Intervention",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "No"
      },
      {
        componentType: "inputField",
        header: "Start Time",
        name: "start_time",
        obsValueType: "value_text",
        type: "time",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "No"
      },
      {
        componentType: "inputField",
        header: "End Time",
        name: "end_time",
        obsValueType: "value_text",
        type: "time",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "No"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Device used for intervention",
        name: "device_used_for_intervention",
        isMultiple: true,
        trackBy: "id",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        grid: { s: "8" },
        options: interventionDevices,
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "No"
      },
      // If Breathing - Full Assessment
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes"
      },
      {
        componentType: "Heading",
        name: "Respiratory and Oxygen",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes"
      },
      {
        componentType: "inputField",
        header: "Respiratory Rate (bpm)",
        name: "respiratory_rate",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value) return "Respiratory rate is required";
          const num = Number(value);
          if (num < 1 || num > 70) return "Must be between 1 and 70";
          return null;
        },
        type: "number",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes"
      },
      {
        componentType: "inputField",
        header: "Oxygen Saturation (%)",
        name: "oxygen_saturation",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value) return "Oxygen saturation is required";
          const num = Number(value);
          if (num < 10 || num > 100) return "Must be between 10 and 100";
          return null;
        },
        type: "number",
        grid: { s: "6", md: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Patient Need Oxygen?",
        name: "patient_need_oxygen",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // Oxygen Details (if needed)
      {
        componentType: "radioButtonField",
        header: "Oxygen Source",
        name: "oxygen_source",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        options: sourceOxygen,
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes" && allFormValues["patient_need_oxygen"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Oxygen Given (L/min)",
        name: "oxygen_given",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value) return "Oxygen amount is required";
          const num = Number(value);
          if (num < 1 || num > 15) return "Must be between 1 and 15";
          return null;
        },
        type: "number",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes" && allFormValues["patient_need_oxygen"] === "Yes"
      },
      {
        componentType: "multiSelectInputField",
        header: "Device Used",
        name: "device_used",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        grid: { s: "4" },
        options: deviceUsedOptions,
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes" && allFormValues["patient_need_oxygen"] === "Yes"
      },
      // Trachea and Chest Section
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes"
      },
      {
        componentType: "Heading",
        name: "Trachea and Chest",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Is Trachea Central?",
        name: "is_trachea_central",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Which side is it deviated to?",
        name: "side_deviated",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes" && allFormValues["is_trachea_central"] === "No",
        options: [
          { label: "Left", value: "Left" },
          { label: "Right", value: "Right" }
        ]
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Chest Wall Abnormality?",
        name: "chest_wall_abnormality",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // Chest Expansion
      {
        componentType: "radioButtonField",
        header: "Chest Expansion",
        name: "chest_expansion",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes",
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Reduced", value: "Reduced" }
        ]
      },
      {
        grid: { s: "4" }
      },
      // Chest Wall Abnormality Details
      {
        componentType: "Alert",
        header: "Use the diagram below to select the chest wall abnormality area",
        message: "",
        backgroundColor: "lightyellow",
        value: "Use the diagram below to select the chest wall abnormality area",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["chest_wall_abnormality"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "chestWallAbnormality",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["chest_wall_abnormality"] === "Yes"
      },
      // Display for Chest Wall Abnormality
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayChestWallAbnormalityBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["chest_wall_abnormality"] === "Yes" && formValues["bodyPartsDataChestwallAbnormality"]?.length > 0;
        }
      },
      {
        grid: { s: "4" }
      },
      //chest expansion image
      {
        componentType: "Alert",
        header: "Use the diagram below to select the reduced chest expansion area",
        message: "",
        value: "Use the diagram below to select the reduced chest expansion area",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["chest_expansion"] === "Reduced"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "chestExpansionAbnormality",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["chest_expansion"] === "Reduced"
      },
      // Display for Chest Expansion Abnormality
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayExpansionBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["chest_expansion"] === "Yes" && formValues["bodyPartsDataExpansionBodyParts"]?.length > 0;
        }
      },
      {
        grid: { s: "4" }
      },
      // Percussion
      {
        componentType: "radioButtonField",
        header: "Percussion",
        name: "percussion",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes",
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      // Breath Sounds
      {
        componentType: "radioButtonField",
        header: "Breath Sounds",
        name: "breathing_sounds",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes",
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Use the diagram below to select the abnormal percussion area",
        message: "",
        value: "Use the diagram below to select the abnormal percussion area",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["percussion"] === "Abnormal"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "percussionAbnormality",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["percussion"] === "Abnormal"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayPercussionBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["percussion"] === "Abnormal" && formValues["bodyPartsDataPercussion"]?.length > 0;
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Use the diagrams to select the abnormal breath sounds area. Switch between different lung views using the buttons below.",
        message: "",
        value: "Use the diagrams to select the abnormal breath sounds area",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["breathing_sounds"] === "Abnormal"
      },
      {
        grid: { s: "4" }
      },
      // View selector buttons
      {
        componentType: "radioButtonField",
        type: "button",
        grid: { s: "8" },
        name: "lungBodyPartPosition",
        value: "Left Lateral",
        initialValue: "Left Lateral",
        options: [
          { label: "Left Lateral", value: "Left Lateral" },
          { label: "Right Lateral", value: "Right Lateral" },
          { label: "Anterior", value: "Anterior" },
          { label: "Posterior", value: "Posterior" }
        ],
        condition: (allFormValues) => allFormValues["breathing_sounds"] === "Abnormal"
      },
      {
        grid: { s: "4" }
      },
      // Left Lateral View
      {
        componentType: "Slot",
        slotName: "breathingSoundsLeftLateral",
        grid: { s: "8" },
        condition: (allFormValues) => {
          return allFormValues["breathing_sounds"] === "Abnormal" && (!allFormValues["lungBodyPartPosition"] || allFormValues["lungBodyPartPosition"] === "Left Lateral");
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayLeftLateralBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["breathing_sounds"] === "Abnormal" && (!formValues["lungBodyPartPosition"] || formValues["lungBodyPartPosition"] === "Left Lateral") && formValues["bodyPartsDataLeftLateral"]?.length > 0;
        }
      },
      // Right Lateral View
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "breathingSoundsRightLateral",
        grid: { s: "8" },
        condition: (allFormValues) => {
          return allFormValues["breathing_sounds"] === "Abnormal" && allFormValues["lungBodyPartPosition"] === "Right Lateral";
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayRightLateralBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["breathing_sounds"] === "Abnormal" && formValues["lungBodyPartPosition"] === "Right Lateral" && formValues["bodyPartsDataRightLateral"]?.length > 0;
        }
      },
      // Anterior View
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "breathingSoundsAnterior",
        grid: { s: "8" },
        condition: (allFormValues) => {
          return allFormValues["breathing_sounds"] === "Abnormal" && allFormValues["lungBodyPartPosition"] === "Anterior";
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayAnteriorBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["breathing_sounds"] === "Abnormal" && formValues["lungBodyPartPosition"] === "Anterior" && formValues["bodyPartsDataAnterior"]?.length > 0;
        }
      },
      // Posterior View
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "breathingSoundsPosterior",
        grid: { s: "8" },
        condition: (allFormValues) => {
          return allFormValues["breathing_sounds"] === "Abnormal" && allFormValues["lungBodyPartPosition"] === "Posterior";
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayPosteriorBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["breathing_sounds"] === "Abnormal" && formValues["lungBodyPartPosition"] === "Posterior" && formValues["bodyPartsDataPosterior"]?.length > 0;
        }
      },
      {
        grid: { s: "4" }
      },
      // Additional Notes
      {
        componentType: "textAreaField",
        header: "Additional Notes",
        name: "additional_notes",
        obsValueType: "value_text",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_breathing_abnormal"] === "Yes"
      }
    ];
  });
  return {
    breathingAssessmentFormSection
  };
};

const _hoisted_1$j = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "LungFrontFemale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "chestAbnormality":
          popoverComponent = _sfc_main$r;
          break;
        case "chestExpansion":
          popoverComponent = _sfc_main$q;
          break;
        case "breathSounds":
          popoverComponent = _sfc_main$p;
          break;
        case "percussion":
          popoverComponent = _sfc_main$o;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LungFrontFemale", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[6] || (_cache[6] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lungFrontFemale-1",
            d: "M2739.09,3013.13c-6.64-16.34-102.23-199.66-128.8-243-14.24-23.23-39.8-150.62-33.17-212.47s49.94-261.44,64.65-275.39,54-42.77,75.45-84.9,32.32-89,25.47-154.22c-7.86-32.2-15.17-43.16-15.21-65.42,14.63-30.67,46.76-116.58,115.37-198,79.34-94.19,143-121,185.82-221.07,7.28-17,38-84.55,84.49-161.32,50.71-83.67,54.33-125.75,76.07-171.92,19.75-41.93,36.58-58.36,39.36-70.12,1.14-4.83,47.76-138,69.17-236.19,17.24-79.12,112.39-441.58,92-480.95-26.59-51.39-138.89-30.27-162.38-20.78-18.7,7.54-55.4,47.32-129.22,324.92-26.39,97.52-35,192.26-53.48,273.16-24.31,73.86-38.52,108.18-57.15,148-67.6,38.18-112.59,146.16-191.35,249.83-98.64,21-161.68,89.08-177,98.3-33-21.87-75.51-40.76-95.43-45.87-57.29-14.7-109-56-137.86-103.4-42.4-69.7-47.79-152.88-50.16-185.79.35-18.79,25.61-51.62,26.18-52.52s56.74-114.49,56.24-137.67c11.15,18.87,24.92,43.28,38.4,20s29.89-64.59,37.39-86,16.1-33,17.54-48.16.86-19.42-8.23-29.2-21.94-10.06-25-6.51-16.4,8.67-16.4,8.67,33.57-131.29,23.18-183.08-25-154.12-152.32-221-273.51-10.51-308.2,15.81S1903,544.47,1904.83,708.32c13.29,100.9,20.13,128.15,20.13,128.15s-16.27-23.28-29.2-16.53-18.85,25.51-10.11,75.32,23.88,64.24,26,75.06,6,52.5,24,50.79,28.73-34.19,28.73-34.19,26.71,93.84,46.19,126.32,43.3,63.24,43.3,63.24-15.71,92.76-36.9,141.59-46.34,94.76-97.82,123.25c-9.31,5.14-102.26,36.07-163.41,61.6-4.6,1.92-80.94-60.56-160.27-89.43-15.53-15.68-96.36-133.34-109.23-156.17-37.06-65.72-90.44-93-122.24-171.67-36-89.08-46.39-200.42-68.22-297.31-47.4-169-69.08-245.31-112.87-344.51-34.44-56.8-173.9-39-184.7-22.48-32.82,34.65,34.12,302.43,108.17,572,18.21,49.17,18.57,106.95,44.18,163.72,17.18,38.09,43.61,62.29,57.58,101.07,41.76,128,78.27,183.27,113.67,241,24.45,38.65,65,142.11,189.81,250.86,49.92,55.82,83.85,99.18,146.7,230-47.33,133.87,9.41,218.11,9.41,218.11s29.72,47.64,81.56,96c10.1,21.65,44,124.87,50.52,197.77s16.81,168.43-3.5,223.39-100.26,195.7-106.3,207.83-11.65,18.38-22.47,45.81l5.13,65.75s11.94,80.11,119.68,111.54h857.36S2746.23,3119.85,2739.09,3013.13Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$j, [
          createBaseVNode("path", {
            id: "Right_Lower_Zone",
            "data-label": "Right Lower Zone",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Right Lower Zone", $event)),
            class: "cls-lungFrontFemale-2",
            d: "M2183.82,2104.52a3.4,3.4,0,0,1,3.74,3.72c-3.79,38.16-3.68,71.37-5.76,93.21-3.49,36.58-14.72,66.33-34.23,92.14-57.75,76.39-184.41,156.08-194.81,164.28-28,22.1-108.9,66.81-133.62,60.32a9.33,9.33,0,0,1-6.58-6.69c-5-18.73-10.57-95.7-48.57-201.54-7.94-22.11-23.09-89.21-36.17-152.78a3.39,3.39,0,0,1,3-4Z"
          }),
          createBaseVNode("path", {
            id: "Right_Middle_Zone",
            "data-label": "Right Middle Zone",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Right Middle Zone", $event)),
            class: "cls-lungFrontFemale-2",
            d: "M2187.52,1859.42a3.39,3.39,0,0,1,3.79,3.33c.14,10.57.22,19.53.22,26.16,0,162.61,1.94,161.32-3.26,211a3.4,3.4,0,0,1-3,3c-35.9,3.82-415.85,44.3-455.26,48.57a3.38,3.38,0,0,1-3.68-2.66c-5.62-26.68-36.21-147-55.11-227.93Z"
          }),
          createBaseVNode("path", {
            id: "Right_Upper_Zone",
            "data-label": "Right Upper Zone",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Right Upper Zone", $event)),
            class: "cls-lungFrontFemale-2",
            d: "M2188.24,1857.5a3.38,3.38,0,0,0,3-3.4c-.8-58.89-2.72-158-.73-192.43,3.22-55.57-68.35-107.67-166.22-110.09-125.18-3.09-260-39.57-342.62,23.51-41.51,28.4-45.14,162.64-24.11,284,2.74,12.82,7.25,34.45,13.25,60.14Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lower_Zone",
            "data-label": "Left Lower Zone",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Left Lower Zone", $event)),
            class: "cls-lungFrontFemale-2",
            d: "M2202,2104.52a3.39,3.39,0,0,0-3.73,3.72c3.79,38.16,3.67,71.37,5.75,93.21,3.49,36.58,14.72,66.33,34.24,92.14,57.75,76.39,184.4,156.08,194.8,164.28,28.05,22.1,108.91,66.81,133.62,60.32a9.36,9.36,0,0,0,6.59-6.69c5-18.73,10.56-95.7,48.57-201.54,7.94-22.11,23.08-89.21,36.16-152.78a3.38,3.38,0,0,0-3-4Z"
          }),
          createBaseVNode("path", {
            id: "Left_Middle_Zone",
            "data-label": "Left Middle Zone",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Left Middle Zone", $event)),
            class: "cls-lungFrontFemale-2",
            d: "M2198.34,1859.42a3.39,3.39,0,0,0-3.79,3.33c-.13,10.57-.21,19.53-.21,26.16,0,162.61-2,161.32,3.25,211a3.4,3.4,0,0,0,3,3c35.91,3.82,415.86,44.3,455.27,48.57a3.38,3.38,0,0,0,3.67-2.66c5.54-26.27,35.3-143.38,54.25-224.25a3.38,3.38,0,0,0-2.9-4.13Z"
          }),
          createBaseVNode("path", {
            id: "Left_Upper_Zone",
            "data-label": "Left Upper Zone",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Left Upper Zone", $event)),
            class: "cls-lungFrontFemale-2",
            d: "M2197.63,1857.5a3.38,3.38,0,0,1-3-3.4c.79-58.89,2.72-158,.72-192.43-3.22-55.57,68.35-107.67,166.22-110.09,125.18-3.09,260-39.57,342.62,23.51,41.51,28.4,44.07,159.68,24.11,284-2.74,12.82-7.25,34.45-13.24,60.14h0Z"
          })
        ]),
        _cache[7] || (_cache[7] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-6a48e669><path class="cls-lungFrontFemale-3" d="M2063.94,1163.74c.63,9.15-.43,18.25-1.64,27-5.74,28.29-10.35,59-18.84,87.28-5.37,19.46-11.3,39-20.15,57.45a173.59,173.59,0,0,1-18.29,30.16c-5.29,6.84-11,13.92-16.59,20.51-23.11,26.93-47.64,53.54-78.4,72a115.23,115.23,0,0,1-18.15,8.59c-26.4,10.06-53.33,20-80,29.44-18.29,6.57-37.45,12.73-55.44,19.53l-7.06-17.8c9.58-3.77,18.85-6.92,28.16-10.23,32.39-11.33,64.8-23.28,96.83-35.64,2.49-1,8-3.06,10.33-4,18.12-6.74,34.19-19.78,48.52-32.9,21-19.66,40.07-41.73,57.45-64.69,16.42-22.63,25.31-50.71,32.67-78,2.11-8,5.52-20.12,7.14-28.13,3.93-17.51,7.65-42,11-57.11,1-8,1.82-15.3,1.31-22l21.15-1.49Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2338.27,1157.2c2.57,51.33,13.1,102.26,32.32,150,14.53,37.86,34.52,74.2,64.59,101.64a186,186,0,0,0,23.37,18.45c34.07,22.33,76.2,31.15,113.68,47.25,18.54,7.66,37.2,15.5,54.58,25.76l.94.58.46.29a.61.61,0,0,1,.36.49c.29.63-.52,3.14-1,4.38l-.27.68-.4.88c-.55,1.17-1.3,2.83-1.93,4-.41.53-1.12,1.44-1.51,1.91-.81,1-2,2.42-2.82,3.42s-2.22,2.46-2.66,2.54a.45.45,0,0,1-.49,0c-3.63-1.93-7.33-3.6-11.15-5.27-26.35-11.3-73.85-29.55-101.05-40.51-25.27-9.72-50.52-21.77-71.35-39.57-37.93-31.13-63.06-75-80.24-120.2-19.86-49.51-30.63-102.57-33.63-155.67l18.24-1Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-4" d="M1852.91,2131.45a13,13,0,0,1,3.11,1.72c4.47,3.36,17.33,14.93,8.72,31.86-10,19.7-30.58,11.52-38,4.31-7-6.83-11.62-19.93-.19-32.75C1835.79,2126.21,1848.42,2129.73,1852.91,2131.45Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2145,2323.67c6.8,68.84-11.12,147.17-52.49,203.27-28.33,38.37-67.1,69.75-111.64,87.15-7.41,2.63-14.93,5.59-22.81,6.23,3.61-1.37,6.87-3.59,10.2-5.55,46.28-29.35,86.75-68.18,116.61-114.1a323.26,323.26,0,0,0,25.67-49.8c16.91-40.72,27.4-83.6,34.46-127.2Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2231.65,2323.67c7,43.59,17.55,86.48,34.45,127.2a325.5,325.5,0,0,0,25.67,49.8c29.86,45.92,70.34,84.75,116.62,114.1,3.33,2,6.58,4.18,10.2,5.55-7.88-.64-15.41-3.61-22.82-6.23-44.54-17.4-83.3-48.78-111.64-87.15-41.37-56.13-59.28-134.39-52.48-203.27Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2033.88,2740.14c-9.8,75.45-24,150.39-34.88,225.61-6.35,45.11-14.44,89.56-15.7,135.28-1.19-3.58-2.52-7.45-3.41-11.14-6.48-26.4-7-54-5.86-81a598,598,0,0,1,7.46-68.85c11.29-68.05,27.78-135.4,52.39-199.9Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2357.24,2740.14c24.61,64.5,41.1,131.85,52.39,199.9a598,598,0,0,1,7.46,68.85c1.16,27,.62,54.6-5.86,81-.89,3.69-2.22,7.55-3.41,11.14-1.26-45.72-9.35-90.17-15.7-135.28-10.87-75.23-25.08-150.16-34.88-225.61Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1857,1558.58c38.92,10.81,79.26,15.24,119.51,14.59,38.38-1.17,78.41-2.84,114.79,11.62,30.55,11.86,53.45,37.34,65.06,67.44-26.46-35-55.2-53.45-99-57.56-26.48-2.85-54-.87-80.68-.41-40.53-.11-87.27-10.41-119.68-35.68Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2527.94,1558.58c-32.42,25.27-79.15,35.56-119.68,35.68-26.72-.46-54.2-2.44-80.69.41-43.85,4.13-72.51,22.56-99,57.56,11.63-30.13,34.48-55.56,65.06-67.44,36.38-14.46,76.41-12.79,114.79-11.62,40.24.65,80.59-3.78,119.51-14.59Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2193.75,2888.47c-14.71-11.24-22-31.21-20.44-49.36.55-8.78,4.13-16.91,7.8-24.8,5.67-14.33,10-29.82,16.61-44.22,16.19,15.38,21.17,41.34,13.58,62.17-1.35,3.67-2.87,7.35-4,11.11-4.53,14.61-7.53,30.49-13.59,45.1Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1956.24,1419.82c6.07-31.5,37.13-89,74.55-86.78,12.16,1,22.47,10.19,27.4,20.75a46.9,46.9,0,0,1,3.4,10c1.24,5.57,2.45,11.14,3.53,16.74a612,612,0,0,1,10.34,76.12c.77,11.37,1.27,22.76,1,34.19-11.33-40.11-22.31-82.22-33.82-122.18-1.54-5.69-5.29-11.78-10.69-14.11-9.71-3.57-23,9.75-30.14,16.33-15.71,15.4-29.66,32.89-45.54,48.93Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2426.16,1418.64c-14.52-9.66-26.82-22-37.9-35.36-2-2.39-4.71-6-6.55-8.47A92.2,92.2,0,0,0,2367.9,1360c-11.48-9.7-20.76-10.17-27.2,4.73-1.33,3.69-2.15,7.55-3.32,11.29-10.62,37.08-20.88,76.49-31.41,113.68-.31-11.38.19-22.74,1-34.06s1.92-22.61,3.39-33.86q3.84-29.54,10.39-58.66c3.91-19.87,21.58-36.17,42.59-29.68,14.73,4.52,25.72,16.16,33.54,28.67,1.58,2.54,4.78,8.45,6.27,11.12,8.19,15,16.28,29.35,23.06,45.44Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-4" d="M2556.27,2131.29a14.72,14.72,0,0,0-3.9,2.16c-4.77,3.69-16.74,15.1-8.35,31.58,10,19.7,30.57,11.52,38,4.31,7-6.83,11.61-19.93.18-32.75C2573.24,2126.52,2561.09,2129.53,2556.27,2131.29Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2211.09,2042c11.18,60.16,36,118.81,78,163.89,68.32,73.71,174.89,111.22,274.17,94.33,43.44-7.67,85.62-27.83,113.84-62.19a271.45,271.45,0,0,0,26-36.52c38.84-64.47,44.86-147.06,16.58-216.76-10.81-23.53-21.55-46.9-30-71.54,12.9,16.45,23.37,34.52,33.66,52.58,2.59,4.5,5.17,9.31,7.39,14.07a258,258,0,0,1,21.11,140.75c-5.87,45.44-25.18,88.73-53.5,124.6-73.66,96-217.77,96.52-318.65,46.46C2284,2246,2213.4,2149.5,2211.09,2042Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2173.72,2042c-2.33,107.53-72.85,204-168.61,249.67-100.84,50.06-245,49.54-318.64-46.46-28.32-35.87-47.64-79.16-53.51-124.6a258.06,258.06,0,0,1,21.11-140.75c2.22-4.76,4.8-9.57,7.39-14.07,10.3-18.06,20.76-36.13,33.66-52.58-8.48,24.64-19.22,48-30,71.54-28.28,69.71-22.27,152.29,16.58,216.76a270.74,270.74,0,0,0,26,36.52c28.23,34.36,70.41,54.51,113.85,62.19,99.28,16.89,205.84-20.62,274.17-94.33,42-45.08,66.86-103.73,78-163.89Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1946.8,907c-6-12.16-11.57-26-16.71-38.64-3.95-9.66-7.61-19.76-10.67-29.75-21.85-72.68-30.76-151.29-14.18-226,15.91-68.46,58.7-131.33,119.61-167.46,60.45-36.49,132.53-48.06,202.14-45.39,59.91,3.74,117.19,29.15,163.56,66.57,81.31,65,115.59,169.11,104.45,270.81a407.35,407.35,0,0,1-52.59,160.29c7.14-27,14.58-53.76,20.48-80.94,11.64-53.15,18.77-108.22,11.33-162.42-10.46-80.71-59.92-153.56-130-194.52-34.43-20.43-73.38-34.88-113.36-38.29-125.6-7.62-249.53,37.26-298.4,161.56-27.65,70.25-21.89,149.33-8.39,222.35,3.86,20.52,9.59,40.15,14.4,60.62,3.06,13.21,6.23,27.86,8.34,41.26Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2114.41,1096.76a3.31,3.31,0,0,1,0-6.22,167.89,167.89,0,0,0,42-23.41c18.37-13.86,29.35,5.93,39.15,6.6,8.73,0,26.73-19.86,44.22-5.76,11.48,9.25,24.24,20.3,37.47,25a3.3,3.3,0,0,1,.09,6.18c-16.64,6.5-46.79,10.61-84.69,9.85C2151.47,1108.16,2135.12,1104.05,2114.41,1096.76Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2145,966.71c-8.11,9.58-16.79,23.42-10.61,35.88,1.78,3.45,4.32,6.74,7.66,8.59,7.47,4.18,17.24,1.17,24.57-2.78a8.61,8.61,0,0,1,9.38.71c11.15,7.34,25,9.61,35.88.71a8.59,8.59,0,0,1,9.11-1l.78.33c8,3.39,17.13,6,24.91,1.31,3.87-2.43,6.88-6.2,9.33-10,4.18-6.24,2.19-13.68-1.13-20.31a73.18,73.18,0,0,0-7.66-11.81c11.13,6.82,22.11,20.39,16.76,34.12-9.46,21.23-25.91,23.53-45.58,14.54l-1.25-.53,0,0s.08,0,.1,0l-.31.22c-14,11.34-32.1,8.8-46.19-.84-15.7,9-35.57,9.85-43.29-10.2-6-15.22,5.05-31,17.57-38.89Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1983.71,764.27s42.19-20.71,84.61-1.31,68.87,32.6,77,21.07.3-28.53-38.17-32.56C2056.42,746.15,2016.33,739.84,1983.71,764.27Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2133.3,1130.77c17.84,16.06,40.47,33.07,65.55,30.12a60.89,60.89,0,0,0,25.61-8.39c10-5.79,18.22-14.27,27.21-21.58-3.62,4.65-7.23,9.26-11.18,13.7-12.35,14.21-28.73,23.06-47.86,23.09-12.36.16-24.38-4.82-34.42-11.64a98.78,98.78,0,0,1-25.27-25l.36-.3Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2014.48,846s17.1,27.49,55.11,26.13,53.79-6.83,62.61-4.12,12.13-12.72,3.31-22.9-18.58-38.18-58.29-43.61c-30.26-4.14-59.72,9.5-73.3,25.79,29-14.93,57.35-8.65,57.35-8.65s-20,15.61.51,34.78c11,10.29,30.38.34,33.09-8.48a41.46,41.46,0,0,0,1.25-5.21,23.64,23.64,0,0,0-2.39-14.54c-5.07-10.34,33.74,15.79,35.25,27.55,1.38,10.77-40.22,15.61-53.79,14.93s-35-.5-46.49-14.76c-15.28-9.92-24.78-25.62-24.78-25.62Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-2" d="M2075.64,844.94a9.66,9.66,0,0,1-9.9-4.41c-1.85-2.84-3-6.62.26-9.78,6.22-6,16-2.17,15.69,5.41C2081.51,841.37,2079.4,844.15,2075.64,844.94Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2406.24,764.27s-42.2-20.71-84.61-1.31-68.88,32.6-77,21.07-.29-28.53,38.17-32.56C2333.52,746.15,2373.62,739.84,2406.24,764.27Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2375.46,846s-17.1,27.49-55.1,26.13-53.79-6.83-62.62-4.12-12.13-12.72-3.3-22.9,18.58-38.18,58.29-43.61c30.25-4.14,59.72,9.5,73.29,25.79-29-14.93-57.35-8.65-57.35-8.65s20,15.61-.51,34.78c-11,10.29-30.37.34-33.09-8.48a43.28,43.28,0,0,1-1.25-5.21,23.78,23.78,0,0,1,2.39-14.54c5.08-10.34-33.74,15.79-35.24,27.55-1.38,10.77,40.21,15.61,53.79,14.93s34.95-.5,46.49-14.76c15.27-9.92,24.77-25.62,24.77-25.62Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-2" d="M2314.3,844.94a9.65,9.65,0,0,0,9.9-4.41c1.86-2.84,3.06-6.62-.25-9.78-6.23-6-16-2.17-15.7,5.41C2308.44,841.37,2310.54,844.15,2314.3,844.94Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1932.64,864.33c-6.52-7.82-10.89-17-15.16-26.17a18,18,0,0,0-6.57-8.13c-6-4.33-14.38-5.54-18.1,2.38-1.37,2.41-2,5.62-2.63,8.39a99.72,99.72,0,0,0-1.49,20.05c.53,20.78,5.09,41.35,11.84,61,4.48,13.79,11.8,26.16,16.52,40a211.94,211.94,0,0,1,6.2,21.71c2.24,8.8,3.28,15.77,7.43,22.1a22.08,22.08,0,0,0,3.38,3.9,11.54,11.54,0,0,0,8.9,1.58c2.92-.77,4.32-3,5.12-5.78a9.27,9.27,0,0,0,.39-2.06,88.94,88.94,0,0,1,5-22.31c.59-1.78,1.44-3.69,2.19-5.43a11,11,0,0,1,20.82,2.43l.13.63.26,1.28a594.07,594.07,0,0,0,24.5,84c9.86,26,21.78,51.73,38.06,74a137.43,137.43,0,0,0,20,22.19c2.09,2,5.79,4.79,8.05,6.75,34.27,27.92,71.61,56.93,116.93,60.69,4.9.46,10.1.78,15,.84,31.73-.87,60.51-19.52,85.42-38.43,21.7-17.2,42.06-36.73,58.76-58.89,16.24-22.5,29.57-47.82,40.75-73.36,9.69-22.5,17.93-45.64,22.67-69.64.73-3.57.68-4.4,1.51-8.07a11.12,11.12,0,0,1,6.75-7.14,11,11,0,0,1,9,.68c2.72,1.19,5,5,5.16,6.15l.83,2.44c2.59,6.92,5.12,14.65,9.82,20a5.32,5.32,0,0,0,1.2,1c.13.06-.05,0,.21.07a5.53,5.53,0,0,0,1.84-.51,32,32,0,0,0,6.61-4.23c6.57-5.8,9.18-14.19,12.24-23.3,2.12-6.62,4.07-13.67,6.57-20.88a124.69,124.69,0,0,1,9.55-20.73c3.12-6.12,6-12.55,8.66-19,5.21-12.81,9.85-26.15,12.42-39.65,1.23-6.62,1.92-13.35,1.23-19.29-1-9-5.39-13.58-14.54-12.85-9.56.68-18.2,7.85-23.56,15.4l-.17.3-.32.59c-1.28,2.38-2.68,4.75-4.09,7a83.59,83.59,0,0,1-6.35,9l-2.27-1a103.94,103.94,0,0,1,6.1-19.88,47.28,47.28,0,0,1,17-18.93c18.15-10.74,38.88-4.07,42.19,18.31,4.18,27-10.73,68.58-22.6,93.1-11.69,23.21-9.63,55.48-34.13,71.43-10.52,7.44-23.14,8.55-32.64-1.21-8.21-8.7-11.95-19.61-15.87-30.32,3,8.93,16.29,9.45,19.44-.4.62-2.76.14-.57.26-1.09-.44,2.32-.71,4.71-1.2,7-10.54,54.56-43.63,128.09-80.48,169.84-34.6,38.45-88.19,84.46-141.72,89.19-63.78,3.21-110.48-31.6-156.83-70.28-51.16-41.88-78.41-131-92.28-193.92l-.56-2.72-.27-1.37-.14-.69a10.41,10.41,0,0,0,4.79,6.78A10.29,10.29,0,0,0,1975,984.3l-.12.24-.22.51a68.26,68.26,0,0,0-5.19,19.05c-1.57,19.75-18.24,31.93-37.4,26.65-14.45-3.55-22.52-18.74-25.45-32.07-3.17-13.92-5.56-27.45-10.85-40.52-10.47-23.65-18.11-48.94-20.8-74.78-1.82-17.5-2.68-50.15,10.45-63.21,12.82-13.07,35.18-4.21,40.44,11.91.27.74.56,2,.78,2.84,2.4,9.7,4.78,19.48,6,29.41Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-5" d="M1929.46,902.48c-3.9-7.69-13-31.73-19.71-34.89-.21-.05-.23,0-.27,0a10.86,10.86,0,0,0-2.89,2.59c-5.83,8.22-6.47,20.74-4.2,30.46,1.25,5.57,4.47,10.2,7.5,15a174.65,174.65,0,0,1,8.94,15,51,51,0,0,1,5.23,16.59,48.94,48.94,0,0,0-6.35-16,172.66,172.66,0,0,0-10-14.13c-3.55-4.72-7.51-9.45-9.53-15.12-4.29-11.52-5.11-26,2.53-36.42,17.88-20.69,28.08,24.75,28.73,36.91Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-5" d="M1928,920.32c4.84,10,8.5,26.81,1.21,36.32,5.32-11,1.17-24.92-1.21-36.32Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-5" d="M2455.07,902.48c.64-12.12,10.84-57.6,28.72-36.91,7.65,10.41,6.83,24.89,2.54,36.42-2,5.67-6,10.4-9.54,15.12s-7,9.21-10,14.13a49.19,49.19,0,0,0-6.36,16,51.23,51.23,0,0,1,5.24-16.59,174.65,174.65,0,0,1,8.94-15c3-4.78,6.25-9.41,7.5-15,2.26-9.72,1.63-22.24-4.2-30.46a10.69,10.69,0,0,0-2.89-2.59c-.05,0-.06-.05-.27,0-6.67,3.15-15.8,27.18-19.71,34.89Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-5" d="M2456.57,920.32c-2.38,11.4-6.52,25.36-1.2,36.32-7.29-9.51-3.63-26.32,1.2-36.32Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2720.18,1984c6.23-27.92,19.81-52.89,31.62-78.61,18.69-38.24,39.82-75.35,65.18-109.63a415.92,415.92,0,0,1,42.21-48.66c33.79-34.62,72.59-66.39,103.39-103.14,25.54-29.79,46.31-70.44,65-105.37,37.94-71.14,83.33-149.74,118.43-221.88,2.51-5.34,5.7-12.35,7.21-17.59,12.89-48.4,31.46-97.36,63-137.1,1.28-1.49,2.58-3,4.1-4.52.26-.28-.6.65-.53.62a109.38,109.38,0,0,0,4.37-11c36.17-112.89,63.39-228.81,91.18-344,18.95-81.64,37.24-163.56,51.85-246.08,5.86-34.27,11.48-68.39,13.75-102.85a34.08,34.08,0,0,0-25.81-35.67,179,179,0,0,0-19.2-2.45,427.67,427.67,0,0,0-61.38-.29c-6.44.48-13.05.78-19.34,2.12a74.43,74.43,0,0,0-52.89,43.48c-19.42,45.62-36.3,92.33-51.8,139.43a2415,2415,0,0,0-97.72,425.14c-1.35,8.38-4.31,16.6-7,24.57-13.39,36.62-26.71,73.27-46.83,106.77a99.64,99.64,0,0,1-6.39,9.24l-13.44-8.32c3.23-5.58,6-11.79,8.74-17.72,8.59-19,16.59-38.27,24.32-57.61,7.17-18.44,14.57-36.67,19.83-55.63.16-.62.57-2.43.67-3s.46-3,.54-3.65c23.64-172.42,65.3-342.57,125.62-505.85,7.42-19.8,15.14-39.52,23.42-59a99,99,0,0,1,11.06-20.31,94.87,94.87,0,0,1,57.57-37.77c7.37-1.59,14.8-2,22.27-2.54a448.83,448.83,0,0,1,64.46.25c7.45.7,15,1.34,22.33,2.94,24.42,5.56,42.56,29,41.92,54.05-1.94,36.45-8,72.6-14.05,108.32-24.74,138.22-57.61,274.74-92.33,410.72-16.2,61.24-31.66,122.56-51.79,182.76a119.85,119.85,0,0,1-5.47,13.45,18.09,18.09,0,0,1-3.21,4.58c-5.48,5.73-10.08,12.39-14.63,19.27-18.41,28.65-31.61,60.34-41.63,93-3.24,10-5.41,21.71-9.62,31.08-18.9,41.93-41.62,81.73-63.24,122.13-12.68,23-48,88.06-60.36,110.66-19.24,36.14-40.57,77.29-67.28,108.62-27.16,32.66-59.79,60.13-89.88,89.81-19.83,19.14-39,38.7-55.51,61-37.37,49.8-67.76,104.89-92.47,162a201.74,201.74,0,0,0-6.94,19.48l-13.25-5.18Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M3062.25,1080a707.09,707.09,0,0,1-50.17,65.76c-13.11,15.78-27.86,30-41.29,45.58-47.7,57.31-90.23,119.06-131.09,181.44-50.93,80.56-97,164.91-122.54,257.48,3.78-27.22,10.36-54.1,18.57-80.44,16.51-52.75,39.39-103.34,65.42-152s55.18-95.89,88.37-140.13c12.42-16.64,25.47-32.8,39-48.56,13.84-15.87,27.69-31.13,43.68-45.24,20.57-17.8,40.53-36.59,60.22-55.38,9.9-9.47,19.73-19.05,29.63-28.64l.21.17Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M2802.77,1420c-38.53,2.18-87.59,32.09-119.15,54.39-37.87,26.7-72.83,58-108.65,87.54a489.75,489.75,0,0,1,63.36-73.87c30.34-28.77,63.94-54.88,102.1-72.61,14.16-6.35,28.72-11.65,44.18-14.18a81.5,81.5,0,0,1,18.73-1.17l.78.07,1,.11-2.38,19.72Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M3056.91,1137.35c0,20.13-.5,40,1.85,59.79,1.31,8.94,2.61,18.53,8.08,25.38,3.84,4.5,10,4.73,15.59,3.34,14.83-4,27.48-13.63,40.32-22.18-11.07,17.1-40.6,44.57-61.46,28.09-19.63-17.42-11.21-71.61-4.38-94.42Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1652.57,1987.8c-18.88-40.94-38.8-81.61-62.44-120-21.52-35.1-45.36-69.38-74-98.74-17.08-17.4-34.68-34.17-52.44-50.93-20.53-19.4-41.54-39-59.64-60.87-26.71-31.38-48-72.25-67.34-108.62-38.28-71.63-83.68-150-119.16-222.76-2.31-5-4.6-10-6.59-15.17-3-8.28-4.82-17.48-7.56-25.87-10-32.67-23.15-64.31-41.49-92.94-4.52-6.88-9.12-13.52-14.56-19.27a23.76,23.76,0,0,1-4.74-7.5c-1.65-3.73-2.88-7.1-4.12-10.54-36.7-113.76-64-230-92.18-346.09-19.19-82-37.41-164.24-52-247.23-6-35.15-11.79-70.72-14-106.58-1.8-27.62,18.58-53.45,46.1-57.65,3.6-.59,8.63-1.17,12.33-1.58a434.19,434.19,0,0,1,69.92-.84c5.47.39,11,.72,16.44,1.45a95.13,95.13,0,0,1,74.63,57.52c72.59,176,119.78,362.11,147.31,550.28l2.84,20.31c1.33,6,3.85,12.22,6.11,18.13,14.35,35.1,31.21,69.72,49,103.27l2.47,4.45c.82,1.45,1.67,2.91,2.43,4.12l-12.16,7.53a105.32,105.32,0,0,1-7-8.44c-14.87-19.88-26-42.06-36.39-64.52-8.12-17.79-16.63-35.78-22.73-54.6a60.59,60.59,0,0,1-1.73-7c-.18-1.19-.53-3.53-.69-4.77-27.08-191.7-75.07-381.28-149.09-560.36a74.65,74.65,0,0,0-20.86-28.31A73.74,73.74,0,0,0,1126.7,418c-6.38-1.29-12.91-1.56-19.39-2a425.25,425.25,0,0,0-61.31.32c-4.52.43-10.48,1-15,1.72l-.62.08-.49.09-1,.17c-.65.14-1.29.28-1.93.44-15.94,4-26.79,19.68-25.2,36,4.68,62.15,17.32,123.81,29.36,185.05,34.4,163.93,73.16,327.51,120.72,488.14,3.29,10.14,6.5,21.17,10.84,30.39a5.65,5.65,0,0,0-.47-.59c-.57-.58.16.17.17.19,6.62,6.94,12.07,14.8,17.14,22.54,23.31,36.49,38.82,77.34,49.61,118.92,1.75,5.77,4.67,12,7.28,17.64,28.33,59,67.14,126.77,98.32,184.87,26.23,46.31,50.67,101.56,85,142.32,30.82,36.75,69.57,68.49,103.36,103.14C1569,1792.63,1602.72,1848,1631.5,1905c12.07,25.65,25.76,50.49,32.38,78.37l-11.31,4.42Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1324.59,1074.07c24.6,23.87,49.15,47.65,74.59,70.54l7.6,6.79a399.43,399.43,0,0,1,37.5,36.36c18.68,20.48,36.22,42,52.84,64.13,33.18,44.23,62.22,91.44,88.37,140.13s48.91,99.29,65.42,152c8.2,26.35,14.79,53.23,18.56,80.45-25.53-92.57-71.61-176.92-122.54-257.48-40.86-62.38-83.39-124.13-131.09-181.44-13.42-15.61-28.18-29.8-41.28-45.58q-20.2-23.62-38.39-48.77c-4-5.58-8-11.23-11.78-17l.2-.17Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1577.36,1400.23a76.43,76.43,0,0,1,20.54,1c15.46,2.53,30,7.83,44.18,14.18,35.51,16.42,66.92,40.31,95.65,66.49a513.28,513.28,0,0,1,48.52,51.71c7.45,9.17,14.58,18.57,21.29,28.28-18.12-14.83-35.78-30.29-53.85-45.1-35.51-29.24-71.93-57.33-113.12-77.85-17.1-8.3-35.35-15.75-54.21-18.44a60.49,60.49,0,0,0-6.25-.51h-.45c.26.12-2.38-19.72-2.3-19.75Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1325.61,1137.35c6.8,22.76,15.26,77-4.39,94.42-20.86,16.48-50.36-11-61.46-28.09,12.84,8.55,25.49,18.13,40.33,22.18,5.6,1.38,11.75,1.16,15.58-3.34,5.47-6.85,6.77-16.43,8.09-25.38,2.34-19.79,1.86-39.66,1.85-59.79Z" data-v-6a48e669></path><path class="cls-lungFrontFemale-3" d="M1752.15,2283.62a121.8,121.8,0,0,1,4.46,11.36c12.86,37.7,25.27,75.59,34.6,114.37a928.73,928.73,0,0,1,21.39,128.76c5.94,58.11,5.49,117.51-9.16,174.42a342.41,342.41,0,0,1-13.44,42.21c-10.93,27.31-26.17,52.28-40.71,77.44-20.54,35.54-42.22,70.33-60.39,107.11-41.72,94.5,29.2,200.16,132.52,197.73,226.43-.09,579.48-.07,805.75-.11.9,0,1.8,0,2.6,0l4.95-.16c.83,0,1.65-.11,2.47-.19l2.46-.24,2.46-.23a99.69,99.69,0,0,0,39.23-13.85c27.19-16.42,45.54-46.37,48.17-78a100.94,100.94,0,0,0-8.54-49.33c-18.7-42-42.68-85.74-66.2-125.44-20.63-37-46.14-75.44-62.17-114.74-26.91-68.7-30.07-143.95-22.39-216.57,5.58-57.74,16.27-115.17,33.44-170.6,8.54-26.76,17.12-53.47,27.5-79.57l.28-.67.38-.82.8-1.64,11.56,6.28c-.91,2.21-2.44,6.82-3.22,9.2-11.81,37.27-23.7,75.11-32.55,113.13a955.54,955.54,0,0,0-20.6,126.36c-5.68,56.41-5.34,113.31,8.86,168.3a322.78,322.78,0,0,0,12.73,39.9c10.49,26.17,25.42,50.43,39.62,75,10.63,18.6,32.66,56.07,43.34,74.67,16.56,29.09,31.57,59.23,45.46,89.67A138.45,138.45,0,0,1,2743,3001l1.56,5.63a117.55,117.55,0,0,1-1.32,63.49,120.73,120.73,0,0,1-62.46,73.52,118.77,118.77,0,0,1-39.18,11.07,148.19,148.19,0,0,1-17.11.73c-225,0-577.91-.07-803-.11-118.78,2.46-199-121.52-146.7-228.6,18-35.42,38.89-69.4,58.77-103.69,14.17-24.58,29.09-48.88,39.55-75a326,326,0,0,0,12.69-39.9c14.15-55,14.41-111.86,8.69-168.24-5.45-56.64-15.81-112.82-32-167.38-7.75-25.54-15.75-51.16-24.77-76.3l-.89-2.3-.22-.57-.15-.32c-.09-.21-.18-.42-.26-.63l16.05-8.72Z" data-v-6a48e669></path></g>', 1))
      ], 16);
    };
  }
});

const LungFrontFemale = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-6a48e669"]]);

const _hoisted_1$i = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "LungBackFemale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "breathSounds":
          popoverComponent = _sfc_main$p;
          break;
        case "percussion":
          popoverComponent = _sfc_main$o;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LungBackFemale", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[6] || (_cache[6] = createBaseVNode("defs", null, null, -1)),
        _cache[7] || (_cache[7] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lungBackFemale-1",
            d: "M2697.61,1931.56a12.48,12.48,0,0,0-.73,2c-21.61,74.29-50.41,176.69-50.41,176.69s-40.63,163.2-78.91,305.93-30.08,154-27.62,207.66c1.95,42.53,91.15,207.65,132.68,297.17,23.57,50.8,6.38,116.24-4.85,128.75-1.65,1.84-49.88,81.62-117.28,81.62-193.63,2.3-806.78,4.25-807.15,4.22-52.17-4-101.25-78.87-103.66-84.65-32.68-78.37-3.25-123.68-3.09-124,5.88-11.89,73.63-154.89,98.94-211.42,26-58.17,36.41-110.35,23.38-203.8-6.38-38.55-34.31-124.29-60.63-226.36-25.44-98.67-54.38-218.28-56.29-226.16-.06-.28-.14-.55-.22-.82-2.68-8.68-47.67-154.06-58.83-174.05-11.51-20.61-54.41-97.2-110.24-138.4-52.93-39.05-102.18-107.74-107.16-114.78a13.24,13.24,0,0,1-.75-1.19c-8.66-15.39-180.18-320.4-187.45-348.83-7.45-29.15-40.64-89.55-55.19-115s-28.64-89.27-28.64-89.27l-64.85-252s-83.54-351.9-60.19-379.36,33.9-62.52,140.59-33c.38.11.76.23,1.13.36,65,23.49,98.44,177.69,98.44,177.69l71.17,274.88s21.84,99.07,28.73,145.28,33.45,96.77,42.64,128.43,117.48,106.35,133.55,140.49c7.29,15.5,27.08,48.28,62,112.94a13.84,13.84,0,0,0,6.9,6.19c42.45,17.64,136.46,85.62,160.29,103.08a13.77,13.77,0,0,0,12.22,2c74.55-23.06,74.29-19,120.29-34.28a12.63,12.63,0,0,1,1.81-.46c50.81-9.34,81.3-58.8,115.58-105.4,31.1-42.27,56.36-165.5,61.53-203a13.71,13.71,0,0,0-5.81-13.2c-40.74-27.84-55.72-83.81-55.72-83.81S1942,966,1932.87,992s-30.87,9.46-33.48,6.63-18.59-55.77-20.62-60.7-38.4-114.77-14.18-126.65a20.25,20.25,0,0,1,14-1.91c9.45,2.29,18.12-6.06,16.7-15.68-4.94-33.55-11.06-80.38-12.11-112.69-1.81-55.56,92.63-341.42,353.76-265.35s208.12,326,208.12,326-19.63,86.87-14.79,92.76-14.26-2.74,18.09-9.09,21.48,19.06,21,36c-.48,16.25-25.34,73.23-27.46,78-.09.22-.18.43-.26.65-1.56,4.12-18,46.93-30,56.63-5,4-10.68,1.41-15.76-3.22a13.76,13.76,0,0,0-22.3,6.06c-8.41,26.23-21.08,66.85-26.71,90.77-7.72,32.8-33.06,52.69-43.68,65.48a13.6,13.6,0,0,0-3,10.11c23,216.77,100.69,258.32,150.92,295.07,25,18.31,73.91,27.39,130.91,41.83a13.73,13.73,0,0,0,10.93-1.83c46.3-30.48,92.08-78.79,154.5-96.43a13.77,13.77,0,0,0,7.72-5.64c38.74-58.35,48.1-118.8,102.17-153.39a12.73,12.73,0,0,0,1.39-1c7.22-6.06,71.32-60,80-69.4,9.23-10,50.2-110.16,59.4-155.33s45.63-233.78,67.75-313.1S3131,478.94,3152.9,450,3216,405,3265.72,406.68s75,23.43,77.67,62.26-40.32,241.23-40.32,241.23-105.06,427-118.2,450.15-54.51,110.21-63.86,132.8-44.22,97.57-76.22,150.57-89.61,179.08-121.74,210.34-100.42,93.73-147.81,152.37C2731.18,1860.93,2701.55,1923.1,2697.61,1931.56Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$i, [
          createBaseVNode("path", {
            id: "Left_Lower_Zone",
            "data-label": "Left Lower Zone",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Left Lower Zone", $event)),
            class: "cls-lungBackFemale-2",
            d: "M2142,2099.78a1.41,1.41,0,0,1,1.56,1.55c-4,39.18-3.88,73.34-6,95.63-3.49,36.58-12.16,107.63-31.68,133.44-57.74,76.39-161.24,128-188,140.56s-118.28,49.27-143,42.74a9.42,9.42,0,0,1-6.58-6.77c-5-18.93-27.37-113.34-48.55-201.46-5.49-22.83-23.08-89.2-36.16-152.78a3.39,3.39,0,0,1,3-4.05Z"
          }),
          createBaseVNode("path", {
            id: "Left_Middle_Zone",
            "data-label": "Left Middle Zone",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Left Middle Zone", $event)),
            class: "cls-lungBackFemale-2",
            d: "M2145.47,1854.67a1.42,1.42,0,0,1,1.58,1.4c.15,11.52.25,21.27.25,28.36,0,164.33-.56,169.59-3.43,212.61a1.4,1.4,0,0,1-1.25,1.26c-23.76,2.53-416.77,44.39-456.86,48.74a3.37,3.37,0,0,1-3.67-2.66c-5.62-26.67-36.22-147-55.12-227.94Z"
          }),
          createBaseVNode("path", {
            id: "Left_Upper_Zone",
            "data-label": "Left Upper Zone",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Upper Zone", $event)),
            class: "cls-lungBackFemale-2",
            d: "M2145.77,1852.81a1.41,1.41,0,0,0,1.25-1.42c-.78-58.65-2.77-159.39-.75-194.2,3.22-55.57-10.93-141.13-108.8-143.55-125.18-3.1-321.09,8.42-400,57-41.51,28.4-45.14,162.63-24.11,284,2.74,12.82,7.25,34.45,13.24,60.14Z"
          }),
          createBaseVNode("path", {
            id: "Right_Lower_Zone",
            "data-label": "Right Lower Zone",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Right Lower Zone", $event)),
            class: "cls-lungBackFemale-2",
            d: "M2165.51,2093.48A1.41,1.41,0,0,0,2164,2095c4,39.18,3.87,73.33,6,95.63,3.48,36.57,12.16,107.62,31.67,133.44,57.75,76.39,161.24,128,188,140.55s118.28,49.27,143,42.74a9.42,9.42,0,0,0,6.58-6.77c5-18.93,27.38-113.34,48.55-201.46,5.49-22.83,23.09-89.2,36.17-152.78a3.39,3.39,0,0,0-3-4Z"
          }),
          createBaseVNode("path", {
            id: "Right_Middle_Zone",
            "data-label": "Right Middle Zone",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Right Middle Zone", $event)),
            class: "cls-lungBackFemale-2",
            d: "M2162.05,1848.38a1.42,1.42,0,0,0-1.58,1.39c-.15,11.53-.24,21.28-.24,28.36,0,164.33.55,169.59,3.42,212.61a1.4,1.4,0,0,0,1.25,1.26c23.76,2.53,416.78,44.39,456.86,48.74a3.37,3.37,0,0,0,3.67-2.66c5.62-26.66,36.22-147,55.12-227.93Z"
          }),
          createBaseVNode("path", {
            id: "Right_Upper_Zone",
            "data-label": "Right Upper Zone",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Right Upper Zone", $event)),
            class: "cls-lungBackFemale-2",
            d: "M2161.76,1846.51a1.4,1.4,0,0,1-1.25-1.41c.77-58.66,2.76-159.4.74-194.21-3.22-55.57,10.93-141.13,108.8-143.55,125.18-3.09,321.09,8.43,400,57,41.51,28.4,45.13,162.64,24.11,284-2.75,12.82-7.25,34.45-13.25,60.14Z"
          })
        ]),
        _cache[8] || (_cache[8] = createBaseVNode("g", {
          id: "BODY_OUTLINE",
          "data-label": "BODY OUTLINE"
        }, [
          createBaseVNode("path", {
            class: "cls-lungBackFemale-3",
            d: "M2041.71,1148c-12,87.83-32.27,178.81-87.11,250.67-30.91,40.92-74.51,72.73-123.78,87.7-3.93,1.24-12,3.7-16,4.83-20.92,6.39-43.57,9.31-64.45,14.62-10.29,2.67-20.55,5.9-30.8,9.36l-6.31-18.56c10.55-3.56,21.24-6.94,32.21-9.78,21.67-5.55,42.82-8.07,64-14.5,3.91-1.1,11.63-3.44,15.5-4.66,114-34.79,165.71-149.33,186.81-258.07,4.31-21.44,7.4-42.8,10.59-64.55l19.38,2.94Z"
          })
        ], -1))
      ], 16);
    };
  }
});

const LungBackFemale = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-4b0f3ae5"]]);

const _hoisted_1$h = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "LungBackMale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "breathSounds":
          popoverComponent = _sfc_main$p;
          break;
        case "percussion":
          popoverComponent = _sfc_main$o;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LungBackMale", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "MALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[6] || (_cache[6] = createBaseVNode("defs", null, null, -1)),
        _cache[7] || (_cache[7] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lungBackMale-1",
            d: "M1810.55,2979.72c10.4-83.42,25.36-171.75,40.07-206.69.45-32.71-12.87-150.08-86.28-318.13-27.67-68.57-45.85-94.39-60.83-122.67-20.42-38.1-34-77.55-47.19-107-22.85-50.91-27.7-61.1-42.51-115.57-22.6-83.17-74.47-249-94.19-277.62l-201.43-223.92c-53.21-93.5-151.1-267-223.35-401.86-31.67-163.16-85.82-193-88.51-208.3-9.66-54.86-102.3-472.46-73.88-552,48-61.11,227-31.2,255.86-25.86,12.8,2.38,49.72,108.39,78.3,239.49,34.61,158.8,31.34,282.14,40.7,316.33.47,2,2.54,8.76,6.16,19.06,54,35.22,188.34,160.93,273.62,328.68,127.65,23.23,257.36,185.11,257.36,185.11s57.79-54.89,223.63-119.74c23.73-35.14,57-94,41.27-167s-42.89-52.61-45.32-160.41c-11.48-13.77-48-16.35-61-39.49s-64.46-95.7-32.83-178.23c12.18-27.64,30.33-43.74,58.43-17.28-14.27-77.37-34.28-173.92,8.37-257.51s94.4-150,236.32-168.57,253.18,79.34,288.23,136.7,61,176.13,21.46,296.12c35.5-10.44,36.11-19.36,52.64.18s28.59,105-5.23,155-79.44,64.08-79.44,64.08,2.37,87.15-44.79,158.16c-4.5,16.75-21.94,129.82,34.23,176.49,19.93,11.12,57.19,14.24,223.64,119.94,76-79.26,138.17-154.85,256.72-183.57,19.55-29.87,34.44-116.54,150.91-215.23,110.78-93.88,135.19-111.83,132.05-155.06,9.27-32.88,5.06-157.9,41.08-311.45,27.52-117.28,51.19-197.54,76.49-223.13,121-35,244.15,5.08,254.11,27.17,2,4.42.64,124.51-31.22,340.81-9.62,65.27-7.63,148.26-47,215.41-19.37,33.05-65.66,89.56-72.08,159.78-5,55.23-44.47,102.39-71.28,151.74-43.19,79.5-65.17,130.79-99.75,191.75-56.25,99.16-123.51,178.58-197.36,246.89-35.29,32.64-64.83,61.81-80.41,101.26-46.88,118.69-73.51,214.46-81.16,252.48-40.13,125.49-79.42,215.31-127,301.1-74.71,134.61-98.55,251.13-108.13,299.42-8.2,114.51,16.31,156.89,30.29,219.34,3.79,16.94,6.85,33.51,9.32,49.56,14,90.84-56.36,172.75-148.27,172.75h-692C1869.2,3148.25,1799.39,3069.22,1810.55,2979.72Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$h, [
          createBaseVNode("path", {
            id: "Left_Lower_Zone",
            "data-label": "Left Lower Zone",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Left Lower Zone", $event)),
            class: "cls-lungBackMale-2",
            d: "M2291.85,2182.24a1.62,1.62,0,0,1,1.78,1.78c-4.62,44.82-4.43,83.9-6.87,109.41-4,41.85-13.91,123.13-36.23,152.66-66.07,87.4-184.47,146.5-215.14,160.81s-135.32,56.37-163.57,48.9a10.79,10.79,0,0,1-7.53-7.75c-5.73-21.66-31.32-129.67-55.54-230.48-6.28-26.12-26.41-102.06-41.38-174.79a3.88,3.88,0,0,1,3.39-4.63Z"
          }),
          createBaseVNode("path", {
            id: "Left_Middle_Zone",
            "data-label": "Left Middle Zone",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Left Middle Zone", $event)),
            class: "cls-lungBackMale-2",
            d: "M2295.8,1901.82a1.64,1.64,0,0,1,1.82,1.6c.17,13.18.27,24.34.27,32.45,0,188-.63,194-3.92,243.23a1.57,1.57,0,0,1-1.42,1.44c-27.19,2.9-476.83,50.79-522.69,55.77a3.87,3.87,0,0,1-4.2-3c-6.43-30.51-41.43-168.17-63.05-260.78Z"
          }),
          createBaseVNode("path", {
            id: "Left_Upper_Zone",
            "data-label": "Left Upper Zone",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Upper Zone", $event)),
            class: "cls-lungBackMale-2",
            d: "M2296.15,1899.69a1.61,1.61,0,0,0,1.42-1.62c-.88-67.1-3.16-182.36-.85-222.19,3.68-63.57-12.51-161.46-124.48-164.23-143.21-3.54-367.35,9.64-457.68,65.17-47.49,32.5-51.64,186.08-27.58,324.94,3.14,14.67,8.29,39.41,15.16,68.8Z"
          }),
          createBaseVNode("path", {
            id: "Right_Lower_Zone",
            "data-label": "Right Lower Zone",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Right Lower Zone", $event)),
            class: "cls-lungBackMale-2",
            d: "M2318.74,2175a1.62,1.62,0,0,0-1.78,1.78c4.62,44.83,4.43,83.91,6.86,109.41,4,41.85,13.91,123.14,36.24,152.67,66.07,87.4,184.47,146.49,215.13,160.8s135.33,56.37,163.57,48.9a10.76,10.76,0,0,0,7.53-7.74c5.73-21.66,31.32-129.67,55.55-230.48,6.27-26.13,26.41-102.06,41.37-174.8a3.88,3.88,0,0,0-3.39-4.63Z"
          }),
          createBaseVNode("path", {
            id: "Right_Middle_Zone",
            "data-label": "Right Middle Zone",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Right Middle Zone", $event)),
            class: "cls-lungBackMale-2",
            d: "M2314.78,1894.61a1.63,1.63,0,0,0-1.81,1.6c-.17,13.19-.28,24.34-.28,32.45,0,188,.63,194,3.92,243.24a1.59,1.59,0,0,0,1.42,1.44c27.19,2.89,476.83,50.79,522.69,55.76a3.85,3.85,0,0,0,4.2-3c6.43-30.51,41.44-168.16,63.06-260.78Z"
          }),
          createBaseVNode("path", {
            id: "Right_Upper_Zone",
            "data-label": "Right Upper Zone",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Right Upper Zone", $event)),
            class: "cls-lungBackMale-2",
            d: "M2314.44,1892.48a1.61,1.61,0,0,1-1.43-1.62c.89-67.1,3.16-182.35.85-222.18-3.68-63.58,12.51-161.47,124.48-164.24,143.21-3.54,367.35,9.64,457.68,65.18,47.49,32.49,51.64,186.07,27.58,324.93-3.13,14.67-8.29,39.42-15.15,68.81Z"
          })
        ]),
        _cache[8] || (_cache[8] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-b95041a5><path class="cls-lungBackMale-3" d="M2188.07,1210.8a359.07,359.07,0,0,1-13.73,59.32c-15.83,48.85-39,101.92-87.45,127a94.05,94.05,0,0,1-13.84,5.4c-43.11,13.49-84.8,32-125.08,52.44-26.26,13.59-52.29,28-75.8,45.65-7.05,5.54-14.19,11.23-19.29,18.43L1836,1508.25c6.14-9.6,14.68-17.09,23.28-24.09,24.35-19.27,51.37-34.49,78.61-48.79,42.85-22,87.49-41,133.94-54.61,19.43-6.91,35-22.42,47.65-38.53,30.6-39.07,51-85,68.58-131.43Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2423.56,1210.8c18.88,50.89,61.76,148.15,113.63,169.3,2.11.83,4.37,1.61,6.53,2.27,44.44,13.21,86.92,31.92,127.8,53.19,31.55,17,63.49,34.68,89.92,59.47a76.7,76.7,0,0,1,11.09,13.3l-16.87,10.74a42,42,0,0,0-3.71-4.75,123,123,0,0,0-15.27-13.92c-23.12-17.93-48.91-32.48-74.88-46.26-40.59-21-82.69-39.72-126.37-53-44.33-15.32-72.23-61.31-88.25-102.47a405.5,405.5,0,0,1-23.62-87.84Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2054.93,1387.58c5.26-3.19,9.9-8,13.94-12.92,15.74-19.87,23.39-45.34,27.53-70.12,3.94-24.17,4.26-48.76,3.3-73.19-.22-8.33-3.09-15.48-7-23.78-6.76-13.63-14.62-27.78-20.18-42.31-12.86-32.52-17.36-67.65-17.66-102.35v-.73a3.78,3.78,0,0,0-1.6-3.45,58.07,58.07,0,0,0-9.31-4.46c-11.12-4.3-22.44-8-33.13-14.53-22-13-36.32-35.88-44.71-59.33-8.21-22.55-12.33-46.34-15-69.94l-.15-2,0-.49,0-.39,0-.76c-.66-19.35.61-39,7.18-57.5,5.91-16,15.62-32.41,31.67-40.35,14-6.94,29.55-2.83,37.85,10.41a46,46,0,0,1,5.24,11.61c2.2,7.53,4.31,14.9,6.12,22.51a57.6,57.6,0,0,1,1.8,10.36,3.49,3.49,0,0,1,0,.53,1.86,1.86,0,0,1-.37,1,1.43,1.43,0,0,1-1.27.54,1.52,1.52,0,0,1-.71-.28,2.76,2.76,0,0,1-.51-.53l1.85-1.44s.07,0,0,0a.77.77,0,0,0-.38-.15,1.15,1.15,0,0,0-1,.4c-.23.35-.15.32-.18.29l0-.19c-1.85-6.8-5.09-13.24-7.81-19.75-3-6.57-5.55-13.85-10.38-19.16-16.5-18-34.42,3.21-40.32,20.13-7.19,19.59-9.36,40.84-8.75,61.64,3.81,34.82,10.86,76.81,34.24,103.67,12.55,14.35,28.26,19.76,45.8,26.42,5,2.12,11.23,4.63,15.61,8.69a22.56,22.56,0,0,1,6.83,17.1c.06,40,6.86,80.38,25.39,116.14,6.9,14.32,16.25,28.74,18.73,45.12.68,4.18.57,8.55.74,12.71.44,11.67.43,23.52-.14,35.24a299.61,299.61,0,0,1-4.67,41.39c-6,31.86-18.61,67.25-45.27,87.63l-1.44,1c-.51.34-1,.66-1.54,1s-1,.6-2,1.13l-8.16-16.55Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2545.23,1403.81a53.39,53.39,0,0,1-11.35-8.47c-33.38-32.72-41.62-87.63-42.74-132.34-.18-7.3-.14-15.57.11-22.83l.37-11.67c.54-8.72,3.36-17.21,6.82-24.9,6.43-14,13.76-26.29,19.49-40.15,8.43-19.86,13.47-40.73,16.05-62.24,1.63-12.86,2.08-25.91,2.45-38.88a28.41,28.41,0,0,1,15.8-22.94c9.39-4.59,20.52-7.8,29.22-12.16a72.65,72.65,0,0,0,29.53-25.47C2628.28,975.53,2634,942,2638.1,911l.33-2.65q.06-.47.09-.93l0-.46a243.38,243.38,0,0,0-.13-27.42c-.94-15.6-5.78-52.52-27.4-48-7.59,1.69-14.55,7-20.21,12.5a250.76,250.76,0,0,0-18,20.9l-2.27-1.14a116.12,116.12,0,0,1,8.94-21.29c6-11.05,14.55-21.3,26.76-26.1a30.69,30.69,0,0,1,29.25,3.76c24,18,25.63,60.31,25,87.61-4,42.46-14.8,95.86-49.1,124.51-12.16,10.52-28.38,16.7-42.72,21.84a72.62,72.62,0,0,0-8.53,3.74,8.43,8.43,0,0,0-3.88,6.93l0,1.36c-.52,35.73-5.79,71.87-19.93,105-3,7.18-6.4,14.18-9.86,20.94-6.84,13.53-14.29,26.15-14.91,37.66-2.07,47.91.66,115.47,36,151a41,41,0,0,0,6.07,4.83c.18.11.65.37.38.23l-8.79,17.93Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2391.83,1530.76c-19.22,25.56-34.76,53-48.45,81.69-5.43,11.53-10.61,23.12-15.91,34.84-2.79,6-5.41,12.08-8.63,18l-1-.18c-4.18-39.75,12-83.43,39.91-111.89,9.66-9.6,20.88-18.39,34-22.47Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2613.3,1647.49c-58.38,27.22-115.35,73.39-125.82,140-4.69,28.08-7.56,62.57-10.46,91.16-7.48,82.27-26.43,159.63-69.36,231a522.55,522.55,0,0,1-30.94,46.36c36.31-64.55,62.26-133.41,73-206.36,7.62-48.54,9-98,15.31-146.92,1.28-9.31,3-20.33,5.12-29.47.61-2.22,1.75-6.07,2.38-8.31.76-2.83,2.33-6.52,3.25-9.32s2.74-6.35,3.85-9.09c13.72-29.47,37.12-53.53,64.37-70.74,21.21-13.3,44.79-23.48,69.32-28.4Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2359,2336.06c4.69,19.15,12.92,37.27,21.9,54.71a427.15,427.15,0,0,0,30.79,49.79,560.8,560.8,0,0,0,36.35,45.77c19.25,22.23,41.09,42.58,61.71,63.59,6.31,6.72,12.81,14.09,19,20.91.28.33,10.17,12.27,10.83,13.09,25.34,31.11,47.7,65.44,62.84,102.71,5.39,13.92,10.43,28.54,12.23,43.39-4.17-11.52-9.94-22.76-15.84-33.46-27.49-49.15-64.4-92.5-103.36-132.87-21.23-21.09-43-41.84-61.74-65.28a409.4,409.4,0,0,1-46.11-69.22c-14.67-29-27.19-60.38-28.64-93.13Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2304.84,2552.15c7.06,84.87,9.08,170.46,9.87,255.6.44,66.23-.12,133.18-9.87,198.81-9.74-65.62-10.3-132.59-9.86-198.81.79-85.14,2.81-170.72,9.86-255.6Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2676.88,1792.36c10.36,5.93,20.51,13.07,30.55,19.18,6.91,4.14,13.51,8.1,20.81,10a19.77,19.77,0,0,0,5.85.46c10.24-.7,21.86-4.16,32.32-6.8,11.74-3,23.34-6.21,35.53-8.2-6.41,6.9-13.92,12.53-21.76,17.67-14.29,9.06-36.39,19.84-54,16.78-22-4.49-41.93-28.82-49.3-49Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2216.71,1530.76c13.17,4.08,24.38,12.87,34,22.47,27.88,28.46,44.09,72.13,39.92,111.89l-1,.18c-3.23-5.93-5.84-12-8.64-18-5.29-11.72-10.47-23.31-15.9-34.84-13.7-28.74-29.24-56.12-48.45-81.69Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M1995.23,1647.49c24.54,4.92,48.11,15.1,69.32,28.4,27.25,17.21,50.66,41.27,64.37,70.74,1.18,2.75,2.86,6.33,3.85,9.09s2.45,6.51,3.25,9.32c.66,2.26,1.76,6.11,2.39,8.31,2.1,9.12,3.84,20.17,5.12,29.47,6.31,48.87,7.68,98.38,15.31,146.92,10.71,72.94,36.66,141.81,73,206.36a522.55,522.55,0,0,1-30.94-46.36c-43-71.46-61.87-148.76-69.36-231-2.92-28.69-5.77-63-10.46-91.16-10.48-66.65-67.46-112.83-125.83-140Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2074.82,953.37c-17.2-25.75-28.69-54.7-38.64-83.86-22.29-65.92-37.72-135.4-33.33-205.47a260.47,260.47,0,0,1,8.8-52.48c20-65.69,60.56-125.92,116.76-166.13,64.19-46.07,147.1-65.5,225.08-53.13,77.76,12.45,153.05,51.61,200.32,115.76,38.09,50.88,55,114.76,56.51,177.63,2.37,93.21-23.69,185.62-66.85,267.68,34.94-127.2,79.74-270.55,18.07-396.22-39.71-80.7-124.05-131.3-211.21-145.06-102.72-16.66-212.79,26.08-274.84,110.15-35.68,47.54-59.18,104.84-57.75,165.31.07,52.86,10.66,105.26,24.41,156.14,10,36.92,23.1,72.52,32.67,109.68Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M2249.54,2336.06c-1.45,32.75-14,64.16-28.65,93.13a408.4,408.4,0,0,1-46.11,69.22c-18.77,23.44-40.51,44.19-61.74,65.28-38.95,40.37-75.86,83.72-103.35,132.87-5.91,10.7-11.67,21.93-15.85,33.46,1.8-14.85,6.84-29.46,12.24-43.39,15.13-37.26,37.5-71.61,62.84-102.71.71-.83,10.56-12.83,10.83-13.09,6.23-6.82,12.72-14.19,19-20.91,20.63-21,42.46-41.36,61.71-63.59a555.27,555.27,0,0,0,36.35-45.77,428.58,428.58,0,0,0,30.8-49.79c9-17.44,17.2-35.56,21.9-54.71Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M1931.66,1792.36c-7.39,20.22-27.27,44.54-49.3,49-17.6,3.06-39.71-7.72-54-16.78-7.83-5.14-15.34-10.77-21.76-17.67,12.19,2,23.8,5.17,35.53,8.2,10.46,2.64,22.09,6.1,32.33,6.8a19.73,19.73,0,0,0,5.84-.46c7.3-1.85,13.9-5.81,20.81-10,10.05-6.11,20.19-13.25,30.56-19.18Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M1158.18,1030.2c-24.75,8.29-56.21,1.18-75.76-16-16.25-15.82-23.39-39.91-27.68-61.4a173,173,0,0,1-3.08-32.27c5,11.53,11.72,27.67,17,38.79,5.66,11.82,12.06,24.4,20.28,34.33a36.81,36.81,0,0,0,11.38,9.64l2.08,1.14c17.49,9.36,37.9,16.48,55.74,25.81Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M3385,888.91c-25.53,48.56-59.65,92.16-98.5,130.84a482.77,482.77,0,0,1-41.34,36.55c-13.82,11.39-27.5,22.94-40.77,34.92-136.75,123.51-191.28,235.49-234.8,411.89-7.8,30.15-19.08,75.19-27.51,105q7.69-53.8,18.23-107.1c39.23-200,110.94-333,271.72-460.93,21.15-16.07,40.83-34.46,59.12-53.73,31.38-32.43,61.31-65.9,93.85-97.41Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M3022.74,1333.47a235.63,235.63,0,0,0-24.09,7.67c-90.38,34.5-166.54,98.84-227.4,173.15-16.19,19.78-32.8,43.14-48.56,63.3-5.51,7.05-11,14.15-16.94,21.05,5.64-17.32,13.63-33.6,22.66-49.23a343,343,0,0,1,22.52-33.86c39.17-55.4,87.15-105.33,143.29-143.88,37-25,77.31-46.33,120.92-57,.92-.21,2.81-.61,3.74-.78l3.86,19.62Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M3449.71,1030.2c17.83-9.32,38.26-16.46,55.75-25.81l2.08-1.14a37,37,0,0,0,11.38-9.64c8.21-9.93,14.61-22.51,20.28-34.33,5.29-11.07,12.12-27.36,17-38.79a173,173,0,0,1-3.09,32.27c-4.28,21.48-11.43,45.58-27.68,61.4-19.55,17.23-51,24.33-75.76,16Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M1300.33,985.38c-2.66-9-4.09-17.59-5.67-26.67-4.34-26.33-7.42-52.71-9.61-79.31-1.91-25.36-3.1-53.8-5.76-79.07l-2.6-26.21-.32-3.28c-.12-1.09-.28-2.18-.41-3.27l-.85-6.53-1.69-13c-10-78-27.37-155.73-53-230.1-10-29-22.21-57.89-33.09-86.51,0-.05,0-.16-.06-.17l0,.14a1.14,1.14,0,0,0,.09.26c.06.16.25.37.21.38s.2.2,0,.08a.34.34,0,0,1-.12-.12,23.09,23.09,0,0,0-5.34-2.95c-15.29-6-32.53-8.42-49-10.42a478.05,478.05,0,0,0-103.42-.45c-21.24,2.47-42,6.28-61.42,14.31a112.86,112.86,0,0,0-10.81,5.3c-6.82,3.93-12.89,8.66-17.07,14.22l2-5.3c-1,16.94-.59,34.3.17,51.4,2.49,52.24,7.89,104.35,13.86,156.37q12.22,104.13,29.24,207.72c6.64,38.42,13,77.24,23.1,114.81,1.53,5.06,2.76,9.81,5,14a3,3,0,0,0-.56-.59,120,120,0,0,1,9.88,10.45c32.49,38.84,65.48,120,75.31,170.52.13.92.42,2.7.54,3.62.09.64.17.8.25,1.23l.22,1.1a58.26,58.26,0,0,0,2,6.72c2,5.94,4.57,11.74,7.08,17.48,33.9,73.25,83.55,159.76,122.31,231.66,42.4,75.19,76.45,157.27,138.12,219.26,39.49,40.61,82.62,79.18,121.13,120.85,3,3.34,6.11,6.9,8.94,10.36,39.38,49.21,64.74,108,82.32,168.15l.45,1.66c.10.41.37,1.34.49,1.94l.73,3.26c2.43,10.49,5,21.26,7.65,31.69,10.59,42.11,22.84,84.2,36.37,125.47,37.07,111.74,87.6,218.67,141,323.49a781.62,781.62,0,0,1,44,96.72c24.77,66.52,46.43,135.54,49.93,207l.22,6.81c0,2.28,0,4.57,0,6.85l0,3.43c0,1.14,0,2.28-.10,3.43l-.39,6.89c-.07,1.15-.10,2.30-.22,3.45l-.38,3.46-.76,6.91-1.18,6.93-.59,3.46c-.24,1.15-.55,2.30-.82,3.45l-1.68,6.91a1384.76,1384.76,0,0,0-36.62,178.37c-.11,1-.25,2-.35,3l-.18,3-.19,3.05-.10,1.52v1.52l0,6.10c1.10,60.22,43.07,114.21,101.20,130.45l5.90,1.49c.50.13,1,.26,1.48.37l1.50.29,3,.59,3,.58,3,.41,3,.43,1.51.20,1.52.13c10.58,1.20,33.64.59,44.89.72,207.71-.46,462.20.55,669.71-.22l6.08-.51,1.52-.12,1.51-.21,3-.42,3-.42,3-.58,3-.58a138.42,138.42,0,0,0,57.34-27.05c33.65-26.37,53.93-68.85,52.67-111.65-.36-14.82-3.41-29.45-5.62-44.08-8.20-49.32-18.34-98.32-31.84-146.44-.84-3.54-1.81-7.24-2.50-10.36-.35-1.95-1.41-8.30-1.77-10.39-.38-3.25-.81-7.49-1.14-10.38-.63-7.94-.83-16.14-.79-24.05.80-38.29,8-75.88,17.46-112.71a995.47,995.47,0,0,1,53-150.31c3.66-8.12,7.41-16.18,11.60-24.30,20-38.64,40-77.93,58.53-117.22,38.29-80.68,73.73-163,100.50-248.18,14.64-46.70,27.87-94.06,38.69-141.79,14.73-53,36.31-104.23,67-150a298.22,298.22,0,0,1,34.43-42c24.08-25,49.82-50.36,74.94-74.34s49.42-48.37,70.58-75.69c42.11-55,70.11-120.26,104.38-180.32,38.43-71.64,88.52-158.22,122.32-231.63,1.33-2.93,2.52-5.85,3.77-8.79l1.15-2.91,1.15-2.90,1-2.85.50-1.43q.27-.72.45-1.38l.79-2.68a7.93,7.93,0,0,0,.29-1.21l.21-1.08c.08-.42.16-.57.25-1.22l.27-1.81.27-1.81.32-1.75c.22-1.16.42-2.34.67-3.47,9-39.56,23.87-77.06,41.68-113.38,8.71-17.23,18.33-34,30.44-49.34l2.27-2.71a103.17,103.17,0,0,1,7.31-8l2.60-2.53c-.89.84-.65.83-.31.13a89.82,89.82,0,0,0,4.70-13.46c18.17-71.60,28.07-145.38,39-218.45,12.72-95,25.55-190.44,28-286.30.08-8.59,0-17.17-.58-25.47l2,5.43c-22.77-28.46-83.12-34.12-117.94-35.74-36.43-1.14-73.76.56-109.26,8.92-6.19,1.71-12.63,3.32-18,6.59a9.75,9.75,0,0,0-1,.75.24.24,0,0,1-.13.11c.14-.09.17-.17.26-.37a2,2,0,0,0,.37-.80c0-.09,0-.05,0,0l-.07.17-.50,1.38-1,2.77c-.68,1.83-1.34,3.72-2,5.50-7.44,18.68-15.46,39-22.27,57.72a1069.25,1069.25,0,0,0-39.80,139.68c-6.47,29.06-11.74,61.44-16.12,90.93-1.26,10.38-3.82,30.87-5.13,41.71-2.73,25-5.51,64.16-7,90-6.30,43-11.86,86.07-21.05,128.58-.36,1.48-.66,2.89-1.08,4.42l-1.31,4.62-18.46-5.91,1-3.66c.35-1.24.64-2.63,1-3.94,8.90-41.73,14.34-84.21,20.47-126.48l-.09.90,2.79-45.35c2.21-22.53,3.72-45.47,6.82-67.82l1.38-11.29.69-5.64.35-2.82.42-2.81,3.43-22.48,1.71-11.24c2.50-13.53,5.43-31.45,8.31-44.74a1096.68,1096.68,0,0,1,54.75-185.41l8.27-21,2-5.20c.67-1.73,1.24-3.39,1.87-5.09l.93-2.54.46-1.27.17-.45a18.33,18.33,0,0,1,5.06-7.24,39.14,39.14,0,0,1,9.85-6.05,112.91,112.91,0,0,1,17.70-5.86c37.74-9,76.46-10.76,115-9.63,42.73,2,106.13,8.80,133.53,43.79l1.82,2.38.20,3c.63,9.19.73,18.15.66,27.08-1.07,61.75-7.77,123.21-14.60,184.46-10.28,87.28-22.41,174.30-38.37,260.75-4.16,21.69-8.40,43.60-14.34,65.09-2.08,6.78-3.78,13.55-7.65,19.79a17.72,17.72,0,0,1-2.65,3.19l-2.10,2.06a108.92,108.92,0,0,0-9.84,11.32c-20.34,27.24-34.38,58.81-46.85,90.39-8.64,23-16.86,46.16-20.68,70.35a71.15,71.15,0,0,1-3.10,11.18c-2.29,6.46-4.94,12.87-7.70,19.09-34.26,74.24-83.80,160.65-122.89,233.31-35,61.57-62.81,126.55-106.18,183.20-21.80,28.18-47.15,53.47-72.66,78-11.08,10.85-26.91,25.84-37.62,36.56-15.40,15.27-30.77,30.68-45.52,46.55-2.86,3.06-5.57,6.36-8.22,9.54-26.89,33.22-46.29,71.85-61.84,111.54a512.40,512.40,0,0,0-17.08,51.55c-3.66,16.07-7.55,32.22-11.73,48.16-8.20,31.86-17.54,63.87-27.39,95.28-37.86,119.77-91.42,233.78-148.26,345.50-32.80,60.77-57.12,126.83-74.91,193.42-10.44,41.29-18.75,83.78-16.24,126.39.08,1,.09,2.08.21,3.11l.34,3.07.67,6.15,1,6,.52,3c.20,1,.47,2,.70,2.94l1.42,5.86,1.77,6.40c15.40,56.51,26.76,114.07,35.16,172l.41,3.49c.14,1.17.29,2.33.40,3.50l.22,3.52.22,3.51.11,1.76v1.76c2.10,72.24-47.27,138.57-116.95,158l-6.84,1.74c-.57.14-1.13.30-1.71.42l-1.73.34-3.46.68-3.46.67c-3.17.41-7.28,1.12-10.48,1.36a203.52,203.52,0,0,1-20.77.84c-81.41,0-258.40,0-341.73,0-83.92-.14-259.51.08-341.74,0a208.49,208.49,0,0,1-22.52-1l-1.75-.23-3.49-.49-3.49-.49-3.46-.66-3.46-.68-1.73-.34c-.57-.13-1.14-.29-1.71-.43l-6.83-1.73c-69.61-19.50-119-85.58-116.93-158v-1.76l.11-1.76.22-3.51c.14-3.37.63-7.19,1-10.51a1495.40,1495.40,0,0,1,38.37-184.23c20.41-89.79-43.08-263-87.65-344.17-56.83-111.72-110.38-225.73-148.23-345.50-12.51-39.88-24-80.32-33.82-120.92-1.73-7.25-3.67-15.20-5.27-22.51a538.85,538.85,0,0,0-37.94-98.67c-14.40-28.36-31.52-55.59-53.46-78.70-19.51-20.32-39.65-40.70-60-60.24-31.43-30.60-64.64-61.27-91.50-96.27-43.35-56.64-71.10-121.64-106.11-183.19-39.85-74.72-91.13-162.38-125.57-239.48-.44-1-.89-2.07-1.32-3.13l-1.26-3.19-1.26-3.21-1.18-3.34-.59-1.67c-.20-.54-.39-1.12-.56-1.74l-1.05-3.61a17.49,17.49,0,0,1-.48-2l-.42-2.13c-.12-.65-.29-1.55-.36-2l-.21-1.44-.22-1.45c-1-5.61-2.28-11.09-3.74-16.69-11.47-41-27.71-81.58-49.12-118.46-6.49-10.78-13.26-21-21.75-30.07-.66-.76-1.36-1.44-2-2.10l-2.11-2.07a17.34,17.34,0,0,1-2.61-3.14c-3.89-6.23-5.53-13-7.61-19.72-18.50-72.77-28.37-147.14-39.36-221.26-12.76-95.91-25.60-192.08-28-289q-.24-14.85.85-30l1.78-2.35c34.36-44.29,132.29-45.92,184.08-42.79,22.63,1.56,45.23,4.12,67.25,10.09,8.22,2.46,17.08,5.06,24,11a17.60,17.60,0,0,1,4.92,7.23c10.61,28.57,22.56,58,32,86.86,36.30,109.45,53.65,224.93,59,339.90,1.89,39.27,5.11,78.74,12.42,117.41.86,4.10,1.81,8.32,3,12.24l-10.91,3.49Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M1222.88,888.91c32.55,31.51,62.47,65,93.85,97.41,18.29,19.27,38,37.65,59.12,53.73,160.84,128,232.53,261.09,271.73,460.93q10.62,53.30,18.23,107.10c-8.46-29.70-19.60-74.51-27.51-105-43.57-176.55-98.10-288.40-234.81-411.88-13.27-12-27-23.54-40.77-34.93a480.67,480.67,0,0,1-41.34-36.55c-38.85-38.68-73-82.28-98.50-130.84Z" data-v-b95041a5></path><path class="cls-lungBackMale-3" d="M1589,1313.85c36.10,8,70,24.33,101.54,43.17,66.09,40,121.68,95.89,166.18,158.71a351.09,351.09,0,0,1,22.53,33.83c9.07,15.60,17.11,31.84,22.89,49.08-5.90-6.94-11.32-14.07-16.80-21.14-11.77-15.28-26.23-35-38.07-50.36-46.60-59.77-102.46-113-167.67-151.92-28.92-17-59.33-31.92-91.67-41l-1.48-.39-1.30-.32,3.85-19.62Z" data-v-b95041a5></path></g>', 1))
      ], 16);
    };
  }
});

const LungBackMale = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-b95041a5"]]);

const _hoisted_1$g = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "LungLeftMale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "breathSounds":
          popoverComponent = _sfc_main$p;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LungLeftMale", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[3] || (_cache[3] = createBaseVNode("defs", null, null, -1)),
        _cache[4] || (_cache[4] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lungLeftMale-1",
            d: "M2183,2889.11s2.43,41.41-8.07,78.28-75.18,193,72.9,193c113,.76,493.28,0,493.28,0s129.15-29.81,125.34-146.23c-30.36-206.3-33.71-137.07-118.85-366.49-14.35-48.74-29-89.2-30.24-200.42s11.14-193.09,34-260.87,77.06-217.22,85.14-263.48,27-110.66-2.25-292.51-83.27-256.51-100.7-284.72-93.06-142.84-96.86-273.52,10.44-156.24,26.8-194.77,78.36-105.65,66-207.16-78.7-183.6-160.17-216.85-199-37.65-296-2.77S2150,551.65,2150,551.65,2105.36,656.8,2105.32,662s8.36,51.27,2.11,63.76-70.58,111.65-73.08,123.08,3.3,22.64,26.53,26.65,42,15.29,35.19,34.33-11,36.74,17,39c-4.22,6.78-22.25,23.06-12.59,30.5s22.12,15.79,13.78,49,7.83,46.33,55,69.46c24.09,11.82,138.37-26.52,167.49-45.46,3.37,1.63-8.35,35.9-8.35,35.9s-10.54,41.46-15.82,65.2c-1.77,8,5.75,84.77-16,118-59.57-41.9-143-86.59-210.38-115.58-27.68-11.9-94.59-58-108.6-69.44S1816.82,960.81,1752,926.13,1157,542,1157,542c-9.82-3.42-69.15,30.73-85.35,89.2,10.55,20.77,99.49,101.45,99.49,101.45l88.09,81.7s89.65,90.32,192.53,171.67c49.51,39.16,80.35,81,109.51,99.75,43.15,27.81,48.73,44.74,78.38,70.19,64.85,55.66,96.41,98,126.16,116.26,12,7.36,57.18,39.87,98,66.72s65.88,35.91,95.46,69.1,55.52,63.5,55.52,63.5,14.58,18.72,43.32,56.94c27.27,36.26,40.92,44.15,42,59.23-21.8,40-47.27,81.73-47.59,122.3-.56,71.23,11.29,95.44,35.62,107-12.2,41.53-28.35,98.22,15.08,182.28-1.24,54.40-5.56,77.39,10.78,104.2s.72,50.13,5,94.65,21.93,70.54,19.73,93-10.88,72,15.41,120c-4.35,38.81.46,293.33,17.46,396.24,8.75,58.82,11.4,81.81,11.4,81.81"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$g, [
          createBaseVNode("path", {
            id: "Left_Lateral_Lower_Zone",
            "data-label": "Left Lateral Lower Zone",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Left Lateral Lower Zone", $event)),
            class: "cls-lungLeftMale-2",
            d: "M2754.83,2017.55a2.67,2.67,0,0,1,2.71,3.22c-31.67,148.67-67.23,310.6-115.76,350.93a51.25,51.25,0,0,1-27.72,11.49c-187.2,18.71-350.58-152.79-420.37-239.41-23-28.48-58.7-66.31-65.61-102.61a2.68,2.68,0,0,1,2.56-3.17Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lateral_Middle_Zone",
            "data-label": "Left Lateral Middle Zone",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Left Lateral Middle Zone", $event)),
            class: "cls-lungLeftMale-2",
            d: "M2127.1,2035.32c-14.55-100.85-23-179.72-25.85-243.12a2.68,2.68,0,0,1,2.44-2.78L2808.27,1726a2.67,2.67,0,0,1,2.91,2.92c-7.72,77.32-29.4,177-52.62,286a2.67,2.67,0,0,1-2.52,2.12l-626.2,20.52A2.68,2.68,0,0,1,2127.1,2035.32Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lateral_Upper_Zone",
            "data-label": "Left Lateral Upper Zone",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Lateral Upper Zone", $event)),
            class: "cls-lungLeftMale-2",
            d: "M2101,1786.07c-4.94-122.68,11.71-186.53,46.38-240.69a188.44,188.44,0,0,1,66.43-62.54c112.35-63.21,428.55-203.33,533.82-69.66,52.14,66.21,65.15,193.68,66.43,254.13a492.26,492.26,0,0,1-2.38,55.44,2.68,2.68,0,0,1-2.43,2.42l-705.33,63.46A2.68,2.68,0,0,1,2101,1786.07Z"
          })
        ]),
        _cache[5] || (_cache[5] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-517e5a97><path class="cls-lungLeftMale-3" d="M2218.14,720.34s-13-31.26-32.15-29.34-44.31,7.83-49.82-2,4.89-17.34,11.55-18.39c10.69-1.68,34.41-2.57,49.25,7.38C2209.74,686.59,2216.91,697.72,2218.14,720.34Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2413,737.14c4.63-29,24.94-56.71,57.48-51,19.12,3.37,36.11,15.85,45.61,32.75,8.14,14.14,10.16,31.37,7.87,47.33-6.2,41.94-37.66,78.16-70.55,102.69a93.92,93.92,0,0,1-11.15,7.11,30.49,30.49,0,0,1-8,3.14c-10.42,2.37-20.59-3.64-25.9-12.22a34.69,34.69,0,0,1-4.57-10.8c6.3,5.46,13,11.07,21.17,11.93a13.61,13.61,0,0,0,6.84-1.3c1.19-.62,2.51-1.5,3.71-2.26a176.27,176.27,0,0,0,17.62-13.7c29.28-26.46,60.42-65.31,56.68-106.86a55.19,55.19,0,0,0-5.54-18.69,54.36,54.36,0,0,0-35.9-28.27c-27.43-6.54-45.38,17.89-55.35,40.18Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2227.71,1413c10.52-14,26.49-26.17,44.8-26.15,8.17.55,15.94,2.54,23.78,4,12.25,2.41,24.27,5.3,36.37,7.71a260.13,260.13,0,0,0,27.46,4.23c3.1.23,6.21.4,9.4.45-1.5.51-3,1-4.57,1.4-26.08,6-54.57-.57-79.74-7.7-3-.84-6-1.68-8.93-2.4-5.44-1.56-11.31-1.15-17,.25-11.74,3-22.45,10.09-31.53,18.25Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2547.6,1012.94a911.3,911.3,0,0,1-.94,121.88c-2.8,40.71-12.58,81.88-33.79,117.09,9.78-34.11,18.36-67.88,22.51-103,5.19-45.19,7.59-90.68,12.22-136Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2523.21,855.85c8.31,24.46,28.08,42,49.85,54.79,4.14,2.54,9.33,5.42,13.52,7.88,1.86,1,3.72,2.09,5.56,3.27a73.74,73.74,0,0,1-12.88-1.67c-21.38-4.8-41.5-18.55-51.19-38.63-3.72-7.94-6.12-16.87-4.86-25.64Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2298.61,912.78c2.11,9.55-2,19.47-7.28,27.33-7.72,11-19,19-31.32,24.22a78.06,78.06,0,0,1-21.77,5.38c11.43-8.76,23.89-15.61,34.94-24.72a114.56,114.56,0,0,0,11.37-10.32c5.93-6.47,11.18-13.39,14.06-21.89Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2460.36,738.88c2-.36,4,.48,5.76,1.21a59.58,59.58,0,0,1,10.24,6.11c10.3,6.8,15.26,20.24,12.72,32.28-2.14,10.19-9.54,18.43-17.92,24.09a81.35,81.35,0,0,1-10.34,6.24c-4.34,2.34-8.75,3.89-11.74,7.43a35.84,35.84,0,0,1-5.73,7.15c-3.18,3.09-8.66,5.72-12.95,3a14,14,0,0,1-6.08-11.86c.7-7.93,8.21-12.1,13.68-16.58a6.64,6.64,0,0,0,1.8-1.95,12.07,12.07,0,0,0,0-3.12c-.77-6.32-2.25-12.48-3.33-18.8a70.7,70.7,0,0,1,6.1,16.88,21,21,0,0,1,.49,4.81,5.22,5.22,0,0,1-1.72,3.57c-5.54,5.35-17.07,11.14-12.07,20.09,2.84,5.79,7.21,5.16,11.46,1.15,3.07-2.55,4.6-6.59,7.76-9,3.32-2.61,7-4.1,10.66-6,10.11-5.11,20.38-11.83,25.3-22.37,4.85-10.38,2.87-23.32-4.59-32-1.76-2.06-4.52-4-6.59-5.73a53.41,53.41,0,0,0-7.35-4.86c-1.73-.83-3.59-1.84-5.56-1.65Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2105.37,1593.24c-10.83,26.87-21.54,54.31-31,81.69-.37,1.18-1.31,3.59-1.54,4.75-6.61,26-9.85,53.54-4.65,79.78,2.39,12.1,7.43,25.94,14.62,34.6,8.22,9.72,21.4,12,34,11.34,34.47-2.61,74.47-28.59,104.71-45.9,6.93-4.08,13.89-8.22,21.13-12.14-20.3,26.1-45.43,47.94-74.94,63.41-29.87,15.33-72.79,25.7-99.65-1.16a31.45,31.45,0,0,1-3.05-3.76l1.09,1.4c-7.09-8.25-11.82-18.37-15.4-28.48-17.33-51.93-3.14-109.32,17.31-158.11,5.55-12.85,11.71-25.55,19.7-37.12l.33-.47.43-.59.88-1.16,16.06,11.92Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2286.15,1261.31c11-18.23,24.79-46.06,21.95-67.52-4.35-20.34-7.31-49.83.1-65.85a383.1,383.1,0,0,0,10.93-37.11,182,182,0,0,0,5.06-32.46l.06-2.15v-1l0-.67,19.95-1.47a76.21,76.21,0,0,1-.15,8.84,212.6,212.6,0,0,1-5.42,33.48c-2.2,9.63-5.3,20.06-8.29,29.5l-3.24,9.63-.15.44c-2,4.06-2.75,9.25-3.09,14.07-.64,10.7.54,22,2.33,32.77.47,2.83,1.12,5.87,1.66,8.69a56.43,56.43,0,0,1,.7,10.66c-1.14,25.48-12.6,49.27-25.36,70.65l-17-10.49Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2094.76,1824.12c-14.85,47.66-14.8,105.62,19.61,144.75,55,62.81,108.15,126.07,128.37,209.09-16.19-29.87-33.79-59.06-54.06-86.25-27.43-37.27-59.69-71.89-90.65-106.31a133.76,133.76,0,0,1-31.77-61.4c-7.57-34.84-3.56-70.77,8.55-103.88.33-.83,1-2.56,1.37-3.39l18.58,7.39Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2114.86,1979.46c-2.46,24.6-4,50-3,74.58.65,11.47,1.35,23.31,5.53,33.83,6,11.92,12,24.14,14.38,37.8,2.44,14,.19,27.38-2.29,40.92-1.64,11.52-1.33,23.92-.3,35.7,2.39,24,7.33,48.56,18,70.29a22.91,22.91,0,0,1,1.68,7.41,52.3,52.3,0,0,1,.09,5.24c-.38,8.87-1.6,17.21-2.33,25.74-2,21.38-1.77,42.76,3.94,63.31a123.34,123.34,0,0,0,13.36,31l-.05,2.74c-.86,74.33-3.33,148.77.81,223,3,50.81,5.92,101.90,12.76,152.31,3.91,22.17,7.9,46.76,11,69.16,2.48,19.29,5.57,38.77,5.57,58.45-.25,6.59-2.33,13.10-3.88,19.32-6.56,24.07-13.33,47.52-18.55,71.76-8.73,41.71-23.48,122.42,19.74,143.81,8.27,3.93,18.12,5.51,27.44,5.43,67.06.17,324.85-.12,396.24,0,14,.33,80.65-.23,93.23,0h9.32c1.6,0,3,0,4.46,0a137.14,137.14,0,0,0,38.51-6.31c57.53-17.42,98.88-75.43,96-135.57-1.9-50.07-10.91-100.15-29.5-146.75-1.82-4.74-8.52-20.42-10.7-25.57-40.86-99.37-96.38-196.72-104-306.1-2.18-42.18-6.2-83.84-6.63-126.33-.6-50.45,5.42-101.07,16.68-150.25,32-145.13,110.73-278.21,116.27-428.76,5.72-113.82-18.59-227-49.34-336.17-1.24-4.94-3.94-12.45-5.46-17.36a481.16,481.16,0,0,0-20.45-50.65c-24.85-53-62.86-100.75-87.19-154.15-22.8-48.77-36.86-101.46-46.25-154.26l-1.62-9.4-.82-4.7c-.08-.51-.11-.51-.22-1.44l-.14-1.24c-5.19-54.48-5.46-109.8,5.24-163.77a258.23,258.23,0,0,1,10.64-37.55c4.59-12.27,10.43-23.65,16.43-35.10,17-32.27,38.56-63.83,49.54-97.88,11.28-33.76,11.31-70.08,4.93-104.94-10-58.33-36.21-115.74-82.77-153.68-112.87-91.83-323.44-87.81-435.18,4.6a214.77,214.77,0,0,0-53.39,92.67c-3.41,9.16-7.48,18.09-11.33,27-3.72,8.45-7.62,16.86-11,24.95a66,66,0,0,0-3.72,10.64,20.61,20.61,0,0,0,0,4.11c.14,2,.37,4.17.62,6.37,1.78,16.48,4.78,34.34,1.73,51.40-1.52,8.33-6,15.36-10.17,22.29-17.1,27.31-36.36,53-52.64,80.43a157.06,157.06,0,0,0-8.93,17,30.36,30.36,0,0,0-2.16,6.55c.12,15.93,20.36,18,32.92,20.23,9.06,1.87,18.10,4.58,24.63,12.17,9.62,11.09,6,26.64.16,37.76-1.64,3.37-4.86,8.15-4.34,11.79a1.87,1.87,0,0,0,.61.92,11,11,0,0,0,2.83,1.8c2.26,1.17,5.27,1.84,8,2.64a25.57,25.57,0,0,1,6.85,2.56,11.75,11.75,0,0,1,5.51,7.94,12.22,12.22,0,0,1-.85,6.83c-3,6.45-10.38,11.47-12.69,17.67a2.29,2.29,0,0,0-.12-.85,2.38,2.38,0,0,0-.40-.8c-.14-.13.29.30.50.52s.53.51.84.77c4.54,3.87,9,5.71,14,10.13a21.56,21.56,0,0,1,6.89,11.15,23.86,23.86,0,0,1-1.8,14.90l-.72,1.66-1.27,3c-2.38,5.74-4.26,11.08-5,16.91a43.79,43.79,0,0,0,1.59,16.44c10,34.23,44.25,45.42,76.89,41.86A178.71,178.71,0,0,0,2235,1082l3.21-1.11,12.82-4.47c34-12,69.41-24.87,103.72-35.78,17.47-5.6,35-11.22,53-16-51.45,30.82-107.55,52.94-164,72.59-31.62,10.54-68.28,15.81-99.35.47-25.19-12.28-42.94-40.27-40.22-68.66.80-7.56,3.36-15,6.13-21.77l1.39-3.29.35-.81c.12-.28.25-.57.30-.72a11.50,11.50,0,0,0,.85-2.89,2,2,0,0,0-.36-1.64,6.94,6.94,0,0,0-1.12-1.22,39.42,39.42,0,0,0-4.65-3.31c-1.88-1.21-4-2.53-6.09-4.08-3.94-3-8-6.24-9.49-11.34-1.81-5.34.37-11.78,2.81-15.70,3-5.34,7.26-9.15,10.70-13.71-1.48,2.76,0,7,2.83,8.30-.13,0-.55-.19-1-.31l-1.52-.42C2091.12,953,2077.54,945,2080.54,928c1.59-9.72,8.32-16.18,9.56-25.34.29-2.92.20-4.90-1.52-7-1.44-1.75-4.51-3.42-8.19-4.52a73.09,73.09,0,0,0-10.69-2.19,93.38,93.38,0,0,1-16.40-3.86c-10.32-3.29-21.15-11-24.83-22a35.20,35.20,0,0,1-2.11-12.19c.19-4.84,1.93-9.30,3.61-13.45a175.07,175.07,0,0,1,9.94-19.21c14-23.89,30.27-46.54,45.28-69.53,5.09-8.20,10.78-15.92,14.26-24.76,1.85-6.85,1.64-14,1.31-21.23-.54-12.32-3.18-25.31-3.66-38.07,0-.68,0-1.50.05-2.29l.13-1.35c.89-6,3-10.72,5-16,7.20-16.88,16.16-36.52,21.37-49.56A233.39,233.39,0,0,1,2183,492.78c28.87-23.66,62.33-41.62,97.43-54,135-47.44,334.64-24.52,414.59,107,31.28,50.46,49.77,125.39,42.35,184.68a205.71,205.71,0,0,1-8.55,38c-11.71,36.27-33.30,68-50.90,101.20-5.56,10.62-11.15,21.51-15.31,32.64a238,238,0,0,0-9.73,34.48c-10.07,50.78-9.81,103.48-5.11,155,.08,1,.28,2.48.37,3.34l.15.91.79,4.50c7.11,42.24,17,84.21,31.91,124.34a491.27,491.27,0,0,0,30.79,66.28c20.76,37.17,47.44,74.64,66.20,113a490.79,490.79,0,0,1,22.27,52.49c3,8.52,6.40,18.41,8.85,27.13,24.67,87.37,44.57,176.46,49.69,267.46a659.86,659.86,0,0,1-25.57,224.39c-30.35,104.33-77.63,203.20-96.91,310.30a603.19,603.19,0,0,0-10.66,118.66c.26,38.44,4,77.33,6,116l.28,4.55.29,4.55c.59,7.56,1.29,15.12,2.29,22.64,13.15,98.24,62.93,186.39,100,277.15l7.30,17.22q.90,2.13,1.80,4.37l1.78,4.44c20,50.30,29.61,104.40,30.90,158.36,1,67-45.68,130.64-109.82,150a158.35,158.35,0,0,1-48.89,7.27c-69.34-.09-327.10.12-400.90.06-14.12.47-80.58-.32-93.23,0-21.41.66-43.33-4.12-58.58-20.41-10-10.36-15.77-24-18.94-37.58-5.80-25.92-3.94-52.11-.48-77.83,5.49-40.38,17.56-79.59,27.76-118.77a33,33,0,0,0,1-6.11,176.18,176.18,0,0,0-1-18.55c-3.51-35-9.38-70.76-15.40-105.51-3.82-26.50-6-52.95-8.12-79.54-2.85-37.36-5.18-74.66-6.52-112.12-1.56-62.38,0-124.68.83-187l1.36,5.22a141.38,141.38,0,0,1-13.94-33.34c-6.41-22.86-6.77-47.14-4.54-70.38.68-8.23,1.92-16.56,2.26-24.54a28.90,28.90,0,0,0,0-3.15c0-.86-.26-1.45-.08-1l.30.64c-15.82-32.13-24.10-81.80-19.37-117.48,3.58-19.23,5.53-32.32-2.52-50.75-2.52-5.88-5.10-11.07-8-17-5.54-13.09-6.39-27.20-7.21-41-.82-19.65,0-38.86,1.38-58.30.49-6.45,1-12.79,1.73-19.35l19.53,2.17Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2381.23,1386.39c113.18,27.55,244.61,3.44,324.27,108.58a263.62,263.62,0,0,1,17.16,25.24c18.07,28.65,25.87,62.49,29.86,95.75,2.17,17.12,2.70,34.48-.52,51.53a86.50,86.50,0,0,1-4.76,17,173,173,0,0,1-4.89-16.71c-6.69-26.77-8.33-54.54-15.61-81.10-4.75-18-10.85-35.73-20.14-51.87-6.83-11.52-14.16-23.06-22.69-33.41-79.68-98.87-202.08-64.44-302.68-115Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2565.08,1430.42a712.53,712.53,0,0,1-80.88-23.18c-23.38-8.57-47.27-18.07-67.42-33.36A1217.15,1217.15,0,0,0,2114.12,1179c-19-8.89-37.77-18-56.33-27.85-25-13.27-49.53-27.59-71.80-45.41-16.78-13.33-30.91-28.26-46.60-42.16a391.16,391.16,0,0,0-48.24-36.65c-39.43-25.07-84.80-48.74-125.46-72.19-42.34-24.11-82.80-51.54-123.50-78.17-156.07-102.66-308.34-211.14-465.71-311.74-4.32-2.65-8.59-5.21-13-7.63-1.40-.79-2.80-1.52-4-2.13a12.11,12.11,0,0,0-2.61-1c-2.91-.66-5.58-.31-8.93.68a55.37,55.37,0,0,0-15,7.86c-15.40,11.14-28.51,26.29-39,42.21a120.09,120.09,0,0,0-9.09,16.49,36.51,36.51,0,0,0-3.31,10.90c-.07.74.09,1.18-.09.52a4.42,4.42,0,0,0-.56-1.07c0-.10-.36-.47-.21-.30l.44.50c1.12,1.21,2.92,3.05,4.10,4.22,82.37,78.76,167.58,154.87,251.89,231.59,50.93,46.07,103.17,92.93,154.60,138.56,20.79,18.15,41.58,37.35,61.47,56.54,17.32,16.46,34,32.78,53.71,46a183.74,183.74,0,0,1,26.24,19.57c10.68,9.72,19.87,20.64,29.17,31.32a517.85,517.85,0,0,0,42.31,44.06l.75.70.59.79c5.18,6.75,12.23,13.46,18.71,19.45,35.51,31.60,74.47,60.43,114.25,86.34,7.77,5.12,16.79,9.54,24.72,13.73,35.09,18.46,68.12,41.46,96.23,69.60,6.86,6.75,13.39,14.21,20.12,21.07,13.33,13.32,27.67,25.59,42,37.94,11.77,10.06,32.19,27.24,44,37.91a152.51,152.51,0,0,1-28-10.06c-31.71-14.44-59.30-36.58-82.64-62.30a354.27,354.27,0,0,0-76.69-61.83c-8.09-4.88-16.35-9.49-24.79-13.94-8.19-4.26-18.73-9.55-26.09-14.39a1056.92,1056.92,0,0,1-95.09-69c-11.47-9.42-22.87-19-33.42-29.69a118.92,118.92,0,0,1-10.59-12l1.35,1.50c-10.44-9.53-20.52-19.54-30.11-29.91-14.31-15.22-26.53-31.31-41.57-45.06-7-6.38-15.73-12.42-23.76-17.46a270.08,270.08,0,0,1-25.83-19.68c-31.51-27.76-60.18-57-92.15-84.13-134.83-119.56-269-239.87-400.60-363-4.22-4-8.51-8.18-12.53-12.48a20.05,20.05,0,0,1-4.57-7.38,22,22,0,0,1-1.12-5.36c-.49-4.07.32-8.08,1.10-11.64,6.44-23.74,25.72-48.80,42.86-65.86,14.09-13.41,32.14-27.92,53.22-27.81,7,0,14.09,3,20,6.48,10.82,6,21.27,12.74,31.68,19.34C1353,650.78,1509.34,760.32,1655,857.24c45.92,30.42,91.73,61.35,139.94,88,47.67,27.87,99.79,53.18,142.84,88.10,11,8.88,21.53,18.54,31.64,28.28,47.61,49.45,110.84,78.51,172.23,107.55,100.82,48.40,195.09,110,279,184,9.30,9.11,20.53,15.94,32.22,21.84,24.12,12.06,50.21,21,76.16,28.73,13.07,3.86,26.40,7.47,39.61,10.56l-3.56,16.11Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2283.27,1711.05c-26.32-11.19-52-23.61-77.33-36.81-25.72-13.83-51.09-27.56-74.09-46.06-22.43-18.90-41.32-40.50-60.44-62.40-30.62-36.25-60.77-73-86.81-112.68-10.32-15.94-20.18-32.21-28.58-49.53,14.27,12.73,27.37,26.44,40.38,40.32,50.75,54.61,95.47,115.54,151.62,164.56,13.88,11.17,29.93,20.86,45.47,30.09,32.07,18.75,65.43,36.30,98.61,53.55l-8.83,19Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2181.29,1575.35c-26-6.31-46.94-26.13-60.52-48.64-10.39-17.26-16.66-36.82-20-56.61a189.51,189.51,0,0,0-6.39-26.25,225.87,225.87,0,0,0-11.94-29.33c-16-32.25-38-60.61-62.50-87.09,23.67,11.33,43.76,29,60.53,49.09,19,23.16,32.78,51.13,38.19,80.81,1.14,6.33,1.85,12.67,2.84,19a177,177,0,0,0,12.58,43.41c10,22.32,25.90,42.89,47.20,55.62Z" data-v-517e5a97></path><path class="cls-lungLeftMale-4" d="M2594.75,1861.79c-46.43,18.91-99.94,21.07-147.60,5.06-29.25-9.70-55.39-27.30-78-48-30-27-55.36-58.34-77.39-91.85-19.16-29.13-35.83-59.92-48.54-92.40-1.81-4.65-3.50-9.37-5-14.16,12.69,15.50,24.57,31.22,36.39,46.92,34,45,70,96.09,108.94,136.40,13.36,13.53,27.71,25.91,43.85,35.93,49.18,30.75,111.57,36.62,167.33,22.06Z" data-v-517e5a97></path><path class="cls-lungLeftMale-5" d="M2056.41,869.61c13.54.69,26.89,3.94,39.88,7.40,3.86,1,8.24,2.13,12,2.66a9.09,9.09,0,0,0,7.37-2c5.17-4.46,6.33-13.08,6.33-20.22a125.22,125.22,0,0,0-1-13.28,40.82,40.82,0,0,1,7.12,12.09c6.59,16.57-.50,37.43-21,36.51-9.45-.87-18.15-3.69-27.09-6.14l-25.18-7.14,1.55-9.88Z" data-v-517e5a97></path><path class="cls-lungLeftMale-5" d="M2134.62,709.79c10.09.17,19.70,1.78,29.39,3.81a49.06,49.06,0,0,1,17.41,7.38c9.89,6.57,16.63,16.15,26.49,22.50a73.76,73.76,0,0,0,10.25,5.37l0,.17c-1,.10-2,.11-3,.17-11.46.40-21.84-6.38-30.32-13.26-5.87-4.63-11.48-8.78-18.21-11.79-10.92-4.32-21.74-8.09-32-14.35Z" data-v-517e5a97></path><path class="cls-lungLeftMale-5" d="M2162.88,753.60c-14.15-6.61-17.62-25-14.31-39,.13-.49.23-.88.41-1.49l9.73,2.30c-.58,6-1,12.19-.16,18.18a29.06,29.06,0,0,0,7.08,16.08l-2.75,3.92Z" data-v-517e5a97></path><path class="cls-lungLeftMale-5" d="M2196.75,741.72a117.41,117.41,0,0,1-40.41,16l-.15,0a3.14,3.14,0,0,0,1-.51,3.34,3.34,0,0,0,1.26-2.37,2.57,2.57,0,0,0-.13-1c-.08-.19-.07-.10,0,0l.19.39a29,29,0,0,1,4.32,13.88c.09,6.67-2,13.20-4.16,19.46-1.28-6.30-.63-12.68-1.38-19a21.46,21.46,0,0,0-4.16-9.66c-.81-1.20-1.82-2.44-1.92-4a4.11,4.11,0,0,1,1.61-3.51,8.49,8.49,0,0,1,2.84-1.15l2.28-.69a157.70,157.70,0,0,0,33.32-16.20l5.50,8.35Z" data-v-517e5a97></path><path class="cls-lungLeftMale-5" d="M2116.31,962.32c3.68-3.83,16.55-14.71,29.68-10.38a.41.41,0,0,0,.51-.56c-4.17-8.46-12.74-9.62-23.88-10.44-23.27-1.72-23.88-13.15-23.88-13.15s-5.10,1.36-2,7.49c2.65,5.20,14.94,20.59,18.28,25.87C2115.53,961.90,2115.75,963.06,2116.31,962.32Z" data-v-517e5a97></path></g>', 1))
      ], 16);
    };
  }
});

const LungLeftMale = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-517e5a97"]]);

const _hoisted_1$f = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "LungLeftFemale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "breathSounds":
          popoverComponent = _sfc_main$p;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LungLeftFemale", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[3] || (_cache[3] = createBaseVNode("defs", null, null, -1)),
        _cache[4] || (_cache[4] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lungLeftFemale-1",
            d: "M2863.35,2958.14c-5.31-31.39-18.92-172.93-148.38-311.88s-29.08-404.73-29.08-404.73,104.86-285.71,120.2-317.11,55.51-135.5,15.5-361.11S2719.14,1350.14,2670.33,1211s-44-266.34-20.75-317.36,125.64-170.28,58.74-313.12-160.83-168.16-319.14-169.67-269.2,115.5-287,188.93-38.15,103.13-6.82,219.06c4.51,24-39.55,74.35-39.55,74.35s-34.48,33-16,57,35,16.28,42.72,22.37,10.36,7,4.08,38.84c-3.57,18.13,27.83,15.07,28.34,43.66s-11.85,47-1.23,66.79,13.74,42,64,39.43,95.75-23.87,136.09-9,58.31,43.19,49.32,90.18-29.49,67.86-29.49,67.86S1991.24,1106.54,1932,1044.26s-112.42-130.78-167.62-175.14-527.65-414.78-537.27-422.33-82.21,37.64-71.57,69c20.26,27,377.1,434.36,377.1,434.36s221.79,254.48,280.47,306.65,362.59,299,362.59,299-95.26,82.52-148.1,145.9-79.52,126.29-68.35,187.51,30.68,99.3,125.49,123.15c-1.87,29.15-.24,187.67,25.07,266.23s-2.11,263.05-23.26,367.27-35.33,274.23,15.81,498.29h742.8S2874.78,3068.77,2863.35,2958.14Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$f, [
          createBaseVNode("path", {
            id: "Left_Lateral_Lower_Zone",
            "data-label": "Left Lateral Lower Zone",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Left Lateral Lower Zone", $event)),
            class: "cls-lungLeftFemale-2",
            d: "M2707.54,2129.28a2.62,2.62,0,0,1,2.12,3.54c-53.88,138.77-113.6,289.75-166.83,321.15a50.23,50.23,0,0,1-28.6,6.77c-183.91-11.22-315-202.58-368.93-297.25-17.73-31.12-46.38-73.29-47.37-109.46a2.63,2.63,0,0,1,3-2.67Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lateral_Middle_Zone",
            "data-label": "Left Lateral Middle Zone",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Left Lateral Middle Zone", $event)),
            class: "cls-lungLeftFemale-2",
            d: "M2098,2048.62c1.71-99.77,5.88-177.34,13.06-239.08a2.61,2.61,0,0,1,2.79-2.3l691.09,49a2.63,2.63,0,0,1,2.36,3.28c-19.57,73.54-56.13,166.52-95.64,268.29a2.6,2.6,0,0,1-2.77,1.65l-608.6-78.16A2.63,2.63,0,0,1,2098,2048.62Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lateral_Upper_Zone",
            "data-label": "Left Lateral Upper Zone",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Lateral Upper Zone", $event)),
            class: "cls-lungLeftFemale-2",
            d: "M2111.63,1804.32c14.42-119.38,40.51-178.5,82.51-225.43a184.55,184.55,0,0,1,74-50.07c118.51-43.52,446.13-129.5,527,16.2,40.05,72.17,32.68,197.44,24.46,256.08a484,484,0,0,1-11,53.22,2.62,2.62,0,0,1-2.73,2l-691.82-49A2.62,2.62,0,0,1,2111.63,1804.32Z"
          })
        ]),
        _cache[5] || (_cache[5] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-c191f4b1><path class="cls-lungLeftFemale-3" d="M2180.09,1561.92c-14,10.62-27.15,23.2-40,35.34-45.08,43.77-89.39,89.14-128.22,138.46-5,6.65-10.39,14-14.07,21.15a20.48,20.48,0,0,0-1.81,4.82c-1.76,5.21-4.85,9.08-8.86,12.66-2.57,2.23-6.24,4.46-10.45,4.64a56.33,56.33,0,0,1-13.92-1.52c-.92-.16-4.45-1-5.24-.94-.23,0-.29,0-.28,0a1.86,1.86,0,0,0,.54-.13,3.67,3.67,0,0,0,1-.55,3.11,3.11,0,0,0,.71-.69,11.62,11.62,0,0,0-.88,1.47c-1.23,2.27-2.14,6-1.28,8.2a1,1,0,0,0,.51.59c4.42,2.46,9.53,2.44,14.31,4.75a11.28,11.28,0,0,1,6.53,11.38,21.25,21.25,0,0,1-1.06,4.06c-12.41,36.39-15.11,77.39-1.14,113.64,17.7,48,65.09,83.53,116.5,85.42,25.95,1.21,51.64-5.56,75-16.57,40.5-19,74.4-49.65,105.74-81.23A327.37,327.37,0,0,1,2240,1950c-37.76,40.86-90.19,73.28-147.65,71.21-58.27-1.34-112.77-40.82-133.13-95.33-16-40.75-13.48-86.69.67-127.46a8.2,8.2,0,0,0,3.35,8.57,4.3,4.3,0,0,0,.52.28c-.81-.29-2.17-.58-3.46-.91-5.88-1.47-12.62-3.53-17-8.53-8.44-9.81-6-24.24.81-33.93,3.05-4.5,9.14-6.93,14.39-6.42,6.14.38,11.42,2.65,17.28,2.45h.12l-.36,0a4.2,4.2,0,0,0-1.37.34c-.22.11.19-.1.59-.46a15.44,15.44,0,0,0,3-3.65l0,.12s0,.18,0,0c2-7.57,6.77-14.55,10.86-20.66,18.7-26.3,40.61-50,62.53-73.5,25.08-26.51,50.88-52.2,77.78-76.87,13.74-12.44,27.23-24.55,42.42-35.53l8.77,12.14Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-4" d="M2333.68,1310.32c27.37-54.15,25.36-42.29,31.51-80,5.47-115-144.51-75.54-144.51-75.54s-71.16,18.61-96.35-13.14-6.56-64.59-6.56-64.59" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2093.08,2008.62c-1.43,11.42-1.91,23.45-2.4,35-1.64,59.13,4,118.49,15.45,176.51,3.15,16.56,7.47,36.28,10.59,52.79,10.88,53.26,15.32,108.41,10.1,162.64-5.27,59-16.18,119.75-26.59,178.06-14.95,81.67-25.36,164.85-23.75,248,1.86,95.27,18.95,189.42,35.32,283.24l-7.75-6.51h746.14l-7.57,5.74c.29-1.08.61-2.33.91-3.53,17.85-77.25,19.87-159.05,2.22-236.5-22.59-100.48-87.28-182.69-145.56-265.12-29.48-42.72-58.64-90.11-61.52-143.47-.79-18-1.16-36.51-.35-54.55,0-4.79,1.15-18.32,1.45-23.39.8-6.82,1.69-17.11,2.65-23.29.6-3.9,1.67-11.56,2.26-15.44s2.09-11.39,2.79-15.34c.75-4.33,3.75-18.16,4.78-22.85,9.28-40.18,21.47-79.75,34.28-118.89,12.66-38.15,26.39-78.74,40-116.65,23.83-65.79,56.67-133.68,77.7-200.39,15.22-48.24,24.66-98.34,26.95-148.89.59-13.79.68-27.92.53-41.75-.41-10.36-.79-23.92-1.69-34.17-4.21-60.87-16.31-121-31.56-180.07-2.57-9.1-6.43-24-9.18-33l-3.49-10.75a480.5,480.5,0,0,0-35.16-79.45c-25.77-45.88-57.36-88.87-77.82-137.84-21.41-49.56-34.05-102.42-42.82-155.5a639.65,639.65,0,0,1-3.41-87.76c1.63-44.38,6.47-89.71,25.87-130.57,7.73-16.38,16.81-32.3,25.75-47.94,15.2-26.48,29.73-52.42,37-81.8,11.57-46,4.09-94.75-10.09-139.41a277,277,0,0,0-13.91-34.64,224.94,224.94,0,0,0-76.65-89c-26.85-18.26-57.28-30.82-88.48-39.63a363.07,363.07,0,0,0-44.12-9.46c-81.6-12-168.33-2.47-241.82,36.33a296.17,296.17,0,0,0-109.32,99.83c-34.31,55.3-47.53,137.94-39.59,202.21,1.89,15.06,7,29.4,10.08,44.41,1.69,8,3.28,16.57,2.68,25.17a42.47,42.47,0,0,1-5.56,17.9c-4.07,7-9.12,13.42-13.72,19.74-2.82,3.77-6.27,8.86-9.11,12.52-6.25,8.38-12.92,16.37-18.71,24.27-6.63,8.9-12.26,18.69-11,29.8,1,9.94,5,19.84,15.09,23.58,6.27,2.74,14.28,3.3,21.53,5.51,20.41,5.69,21.2,24.65,16.4,41.73-1.42,5.34-3.19,10.37-5,15.29l-8.2-2.92a151.07,151.07,0,0,1,1.23-15.46,90.36,90.36,0,0,0,.8-13.93c-.27-3.84-.95-7-3.92-9.23a16.49,16.49,0,0,0-5.2-2.34c-2.13-.63-4.52-1.13-7-1.64-5-1-10.42-2.07-15.84-4.3a35.48,35.48,0,0,1-14.54-10.64c-5.55-7-8.09-15.64-9-24.37a46.42,46.42,0,0,1,5-25.38c7.27-14.22,18.39-25.78,27.45-38.3,3.83-5.27,5.5-7.47,9-12.39,5.31-7.89,12.58-15.56,15.42-24.29a32.85,32.85,0,0,0,1.08-13c-.84-9.59-3.52-19.62-5.9-29.13-19.23-64.53-6.84-153.76,19.79-214.62a214.67,214.67,0,0,1,17-31.29l2.26-3.2,4.55-6.39a308.93,308.93,0,0,1,105.6-92c69.3-36.83,150-48.27,227.61-41a390.14,390.14,0,0,1,76.68,14.83c112.78,33.48,175.85,108.69,194.94,224,7.14,41.48,4.31,85.67-12.36,124.74-11.95,29.24-28.79,54.87-43.39,82.25-4.71,8.83-9.34,17.86-13.33,27-15.56,36.66-19.75,77.77-21.11,117.55a663.07,663.07,0,0,0,2.37,75.89c.38,3.68.59,7.38,1.29,11,9,53.54,22,107,44.48,156.48,2.87,6.43,6.64,14.24,9.83,20.46,19,37.62,43.76,72.06,64.3,109a495.78,495.78,0,0,1,41.13,97c26.65,94.27,45.91,192.3,41.56,290.72-2.33,51.9-12,103.48-27.63,153-21,67-54,135.14-77.85,201.1-13.52,37.7-27.16,78.18-39.76,116.15-12.66,38.58-24.78,77.91-33.92,117.43l-3.22,14.85c-.57,2.47-1,4.95-1.46,7.44l-1.36,7.46-1.36,7.46-1.1,7.49-1.1,7.48-.55,3.75-.41,3.76-1.62,15-1,15.09c-.22,2.51-.28,5-.36,7.55-.8,17.5-.44,35.53.32,53,1.58,29.6,12.35,57.87,26.4,83.8,29.69,53.48,69.73,100.8,102.88,152.31,46.66,70.37,80.11,146.39,87.22,231.43a573.63,573.63,0,0,1-9.9,170.72c-.56,2.55-1.13,5.1-1.73,7.65l-.94,3.84c-.33,1.31-.65,2.55-1,4l-1.58,5.74H2097.44l-1.13-6.51c-16.47-94.42-33.69-189.37-35.55-285.66-1.08-55.7,3.25-111.47,10.39-166.6,4-28.23,8.55-56.45,13.6-84.46,9.28-52,19.07-106.62,24.68-158.89,3.18-29.34,4.72-59,3.34-88.31-1.6-35.07-8-70.7-14.95-105.25-12.83-58.83-22-118.68-23-179-.24-12-.22-24.42.15-36.28.39-12.26,1.13-24.41,2.53-36.57l15.59,2.09Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-5" d="M2213.5,772.4s-23.08-24.76-40.39-16.24-38.77,22.82-47.35,15.58-8.86-21-3-24.36c9.42-5.31,38.71-11.36,56.08-7.22C2193.82,743.72,2204.43,751.64,2213.5,772.4Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-5" d="M2122.29,831.31s-5.71,10.28,8.46,17.78c12.28,6.5,39,1.56,51.76-6.83s2.18-9.49,15-11,31.07.69,31-10.21c0-10.71-21.17-4-35.77-13.51S2174.83,788,2152,785.83s-42.15,18.84-35.94,28.7,11.36-.8,19-3.72-3.56,14.34-.64,20.55,18.31,7.84,20.93-.13c4.38-13.29-3.25-19.34,3-20.8s20.86,6.29,22.32,11.76-4,15.33-17.15,18.25-28.31,1.51-33.42-4.33S2125.94,831,2122.29,831.31Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2621.35,1509.23c-23-33.36-47.82-67.11-83.63-87.21-35.35-21-74.9-33.46-112.14-50.9-37.43-17.48-73.21-40-108.55-61.22-63.34-39-127.3-76.92-189.54-118.3-1.68-1.1-10.8-7.28-12.11-8.14a4.76,4.76,0,0,0-1-.48,22,22,0,0,1-5.19-2.34c-10.69-7.37-22.68-15-33.79-21.86-3-1.77-7.67-5-10.6-6.91-48.72-32.33-97.68-65.62-141.9-104.18a22.05,22.05,0,0,1-4.06-4.4l-.42-.62a4.17,4.17,0,0,0-.69-.75c-1.81-1.48-5.24-4.34-7-5.83-1.36-1.16-2.76-2.12-4.08-3.41-3.35-3.53-6.56-7-9.85-10.5-39.2-42.59-73.41-88.88-116.59-127.15a24.61,24.61,0,0,1-4.59-5l-.33-.5-.16-.21a5,5,0,0,0-.37-.42,7.5,7.5,0,0,0-.65-.57C1594.75,742.43,1409.56,600,1228.08,456.47a5,5,0,0,0-4.57-.56,91.22,91.22,0,0,0-10.43,4.55c-21.47,10.88-38.62,29.57-48.7,51.41a5.33,5.33,0,0,0,.33,6.1l3.88,4.48c62.37,71.31,134.61,151.49,196.87,223,48.25,55.73,109.27,126.92,158.17,182.41,54.55,59.14,106.79,120.76,161.2,180,7.76,8.28,17.13,19.32,24.77,27.82,20.47,23.1,41.91,45.69,62.73,68.5,20.49,22.64,43.52,43.3,66.21,63.83,9,7.79,18.39,17,27.57,24.67,6.19,5.31,12.52,10.54,18.88,15.79,29.36,24.62,67.3,53.06,96.71,77.37,23.94,19.18,51,40.49,75.16,59.44,55.92,42.69,120.68,94,169.62,150.32l6.71,7.59,3.35,3.81,1.7,2,.57.67.41.51a147.25,147.25,0,0,1,13.28,21.94c22.1,39.65,47.41,78.33,79.75,110.26a308.46,308.46,0,0,0,29.67,25.94c53.06,40.39,115.44,67.75,181.84,77-61.49,1.27-122.5-19.86-173.65-53.57-40.51-26.11-73.8-62.54-100.66-102.15-9.61-14.11-18.6-28.67-27.15-43.4-1.24-2.19-2.88-4.83-3.88-6.86a132.19,132.19,0,0,0-11.94-19.49c-7.22-8.09-19.46-21.76-27.09-30-3.77-3.83-8.48-8.73-12.33-12.5-45-45.31-101.36-88.56-148.07-124.1-17.91-14-40.62-31.92-58.46-46-16.18-12.88-32.1-26-48.4-38.66-23-17.72-55.81-43.78-77.45-62.47-24.74-22-49.74-44.27-73.48-67.41-6.7-6.55-13.36-13.35-19.78-20.35-4-4.52-10.43-11.55-14.57-15.94-19.67-21.16-39.35-42.68-58.45-64.41-4.34-5.06-11.8-13.53-16.38-18.44-54.33-59.42-106.41-121.11-160.83-180.39-48.89-55.73-109.83-127-158.18-183-62.91-72.43-135.42-153.3-198.55-225.51l-1-1.17-.51-.59a21.2,21.2,0,0,1-3.08-23.8l1.42-3a132.37,132.37,0,0,1,14-22.33,119.77,119.77,0,0,1,52.77-39,21.38,21.38,0,0,1,20.85,3.66c4.58,3.63,13.46,10.61,18.22,14.36,156.5,123,331.85,259.29,487.11,383.12,13.47,10.88,29.74,23.8,42.68,34.91a22.84,22.84,0,0,1,3,3.7,4.05,4.05,0,0,0,.68.8l1.06,1c43.67,38.58,78.79,85.89,117.84,128.34,3,3.31,6.14,6.57,9.22,9.85,2.43,1.92,6.44,5.4,8.89,7.41a22.66,22.66,0,0,1,4.91,5.05c.57.83.44.66.59.86a4.26,4.26,0,0,0,.36.39l.21.2q19.33,16.85,39.64,32.55c34.54,26.78,71.91,51.72,108.41,76.1,12.46,7.6,24.68,15.68,36.76,23.87l.24.11.36.12.77.27a25.8,25.8,0,0,1,6.63,3.64l10.22,6.93c58.08,39.21,118.45,75,177.76,112.46,38.34,23.27,76.85,48.41,117.3,67.71,35.54,16.88,73.34,29.23,107.07,50.09,1.82,1.07,3.53,2.3,5.28,3.45l5.29,3.56c33.39,22.84,55.35,58,72,94Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2398.4,797.46c5.87-27.84,25.44-54.87,57.13-49.23,18.59,3.27,35.13,15.36,44.4,31.79,8,13.83,10,30.6,7.88,46.26-3.85,29-20.11,54.7-39.45,76-11.75,12.65-24.59,24.26-39.34,33.39a51.3,51.3,0,0,1-6.46,3.37c-11.39,4.65-23.52-1.17-29.41-11.22a29,29,0,0,1-4-11.36c6.76,4.66,13.05,9.85,20.89,11a14.12,14.12,0,0,0,9.72-2.14c12.76-7.74,24-18.12,34.44-28.74,19.19-20.2,36.62-44.2,41.79-72,2.38-13.41,1.49-27.52-4.79-39.79a56.14,56.14,0,0,0-37.12-29.24c-28.3-6.55-46.63,18.48-55.71,42Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2381.28,972.26c5.79,44.75-12.35,90.93-42.59,123.76l-6,6.09c-2.93,2.86-6.44,5.84-9.49,8.57a244.6,244.6,0,0,1-24,17.45c-23.67,15.13-49.9,26.46-76.64,34.42l-4.57-15.43c41.15-11.95,79.69-30.78,110-61.49,30.44-29.87,51-70.4,53.35-113.37Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2523.21,855.85c8.31,24.46,28.08,42,49.85,54.79,4.14,2.54,9.33,5.42,13.52,7.88,1.86,1,3.72,2.09,5.56,3.27a73.74,73.74,0,0,1-12.88-1.67c-21.38-4.8-41.5-18.55-51.19-38.63-3.72-7.94-6.12-16.87-4.86-25.64Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M1709.49,1013.41c9.15,16.15,19.55,31.61,32.6,44.74,15,14.53,34.42,23.55,51.75,36.16a92.12,92.12,0,0,1-15.88-1.76c-18.51-3.73-37-11.56-49.89-26.41-12.32-14.11-20.73-33.81-18.58-52.73Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2298.61,912.78c2.11,9.55-2,19.47-7.28,27.33-7.72,11-19,19-31.32,24.22a78.06,78.06,0,0,1-21.77,5.38c11.43-8.76,23.89-15.61,34.94-24.72a114.56,114.56,0,0,0,11.37-10.32c5.93-6.47,11.18-13.39,14.06-21.89Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2439,807c5.65-1.18,14.39,5.31,18.78,8.62,10.44,8.74,13.84,24.62,8.39,37-3.28,7.65-9.44,13.74-16.14,18.37a81.09,81.09,0,0,1-10.38,6.3c-4.68,2.56-9.5,4-12.29,8.28-3.31,5-8,10.57-14.69,10.51-3.94-.19-7-3.37-8.56-6.64a12.61,12.61,0,0,1,.77-13.59c2.46-3.56,5.85-6.06,9.13-8.58a20.32,20.32,0,0,0,3.77-3.33.94.94,0,0,0,.1-.44c.1-3.18-.65-6.41-1.1-9.61-.63-3.86-1.25-7.77-1.68-11.78A53.84,53.84,0,0,1,2420.2,853a41,41,0,0,1,2.15,9,10.35,10.35,0,0,1-.11,2.87,6.46,6.46,0,0,1-1.78,2.9c-4.47,4.44-12.7,8.41-13.26,15a10.23,10.23,0,0,0,4.09,7.92c2.63,1.53,5.64-.49,7.8-2.43,3.09-2.53,4.61-6.62,7.78-9,6.55-4.79,14.26-7,20.74-11.77,7.88-5.14,14.74-12.32,17-21.62,2.64-10.92-1.56-23.4-10.75-30a86.45,86.45,0,0,0-9.45-6.82c-1.67-.92-3.4-2-5.37-2Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2653.69,2461.36a1646.18,1646.18,0,0,0,26.14,228.43c2,10.86,4.17,21.7,6.06,32.63-1.85-5.21-3.71-10.43-5.5-15.68-3.65-10.35-7-21.22-10.13-31.69-4.61-15.28-9.22-32.76-12.83-48.29-9.6-40.6-16.65-82-19.28-123.66-.2-4.59-.64-12.16-.69-16.76-.2-8.53-.23-16.84.3-25.42l15.93.44Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-3" d="M2110,929.39c7.36,15.13,11.58,40.17-7.25,48.69-7.71,3-15.59-1.11-22.39-3.56a39.41,39.41,0,0,0-13.61-2.91,23.83,23.83,0,0,1-3.24.08c-14.28-.69-25.38-12.32-27.34-26.1l9.14-2.16a26.33,26.33,0,0,0,5.43,11.38c3.83,4.45,9.82,7.39,15.74,6.86a37.12,37.12,0,0,1,9.59,1.34c7.69,1.94,13.71,6.49,20.86,7.7a8.44,8.44,0,0,0,5.32-1.35c12-7.11,9.31-27.94,7.75-40Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-5" d="M2170.53,1046.23s-6.58-2.3-11.71,6-22.2,37.56-45.86,36-30.12-13.16-24.54-24.54,14.06-12.72,11.16-15-29.23-13.17-25.44-30.79,41.8-4.4,55.11,4.24c11,7.14,22.23,16.46,26.47,16.91s11,1.42,13.69,3.84C2171.73,1045,2171.17,1046.19,2170.53,1046.23Z" data-v-c191f4b1></path><path class="cls-lungLeftFemale-5" d="M2040.21,1702.89s-15.54,21.21-10.38,57.79c5.29,37.63-12.65,64.1-35,77.19-19.28,11.28-31.11,26-28.81,44.94s-7.62-26.08-10.94-56.75c-.66-6.07.45-15.9,3.44-26.59,1.8-6.48-12.91-17.59-9.71-24,2.57-5.18,22.66-6.11,25.74-11.33,18.76-31.81,44.93-62.53,53.23-70.5,10.8-10.37,20.45-9.14,19.94-2.1C2047.54,1693.67,2043.78,1695,2040.21,1702.89Z" data-v-c191f4b1></path></g>', 1))
      ], 16);
    };
  }
});

const LungLeftFemale = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-c191f4b1"]]);

const _hoisted_1$e = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "LungRightMale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "breathSounds":
          popoverComponent = _sfc_main$p;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LungRightMale", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[3] || (_cache[3] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lungRightMale-1",
            d: "M2027.64,2889.11s-2.43,41.41,8.07,78.28,75.19,193-72.9,193c-113,.76-493.27,0-493.27,0s-129.15-29.81-125.34-146.23c30.36-206.3,33.71-137.07,118.84-366.49,14.35-48.74,29-89.2,30.24-200.42s-11.13-193.09-34-260.87-77.07-217.22-85.15-263.48-27-110.66,2.26-292.51,83.26-256.51,100.7-284.72,93-142.84,96.86-273.52-10.44-156.24-26.81-194.77-78.35-105.65-66-207.16,78.71-183.6,160.17-216.85,199-37.65,296-2.77,123.34,101.08,123.34,101.08S2105.3,656.8,2105.34,662s-8.36,51.27-2.1,63.76,70.58,111.65,73.07,123.08-3.3,22.64-26.52,26.65-42.06,15.29-35.2,34.33,10.95,36.74-17,39c4.23,6.78,22.25,23.06,12.6,30.5s-22.13,15.79-13.79,49-7.83,46.33-55,69.46c-24.08,11.82-138.37-26.52-167.49-45.46-3.36,1.63,8.36,35.9,8.36,35.9s10.54,41.46,15.81,65.2c1.78,8-5.74,84.77,16,118,59.57-41.9,143-86.59,210.38-115.58,27.68-11.9,94.6-58,108.6-69.44s160.73-125.49,225.53-160.17,595-384.18,595-384.18c9.81-3.42,69.15,30.73,85.34,89.2-10.54,20.77-99.49,101.45-99.49,101.45l-88.08,81.7S2861.75,904.62,2758.87,986c-49.51,39.16-80.34,81-109.51,99.75-43.14,27.81-48.72,44.74-78.38,70.19-64.85,55.66-96.41,98-126.16,116.26-12,7.36-57.18,39.87-98,66.72s-65.88,35.91-95.46,69.1-55.52,63.5-55.52,63.5-14.58,18.72-43.32,56.94c-27.27,36.26-40.92,44.15-42,59.23,21.79,40,47.26,81.73,47.58,122.3.56,71.23-11.29,95.44-35.62,107,12.2,41.53,28.36,98.22-15.08,182.28,1.25,54.4,5.56,77.39-10.78,104.2s-.72,50.13-4.95,94.65-21.94,70.54-19.74,93,10.88,72-15.41,120c4.36,38.81-.45,293.33-17.45,396.24-8.76,58.82-11.41,81.81-11.41,81.81"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$e, [
          createBaseVNode("path", {
            id: "Right_Lateral_Lower_Zone",
            "data-label": "Right Lateral Lower Zone",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Right Lateral Lower Zone", $event)),
            class: "cls-lungRightMale-2",
            d: "M1455.83,2017.55a2.67,2.67,0,0,0-2.71,3.22c31.67,148.67,67.23,310.6,115.76,350.93a51.31,51.31,0,0,0,27.72,11.49c187.21,18.71,350.58-152.79,420.37-239.41,23-28.48,58.71-66.31,65.61-102.61A2.68,2.68,0,0,0,2080,2038Z"
          }),
          createBaseVNode("path", {
            id: "Right_Lateral_Middle_Zone",
            "data-label": "Right Lateral Middle Zone",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Right Lateral Middle Zone", $event)),
            class: "cls-lungRightMale-2",
            d: "M2083.57,2035.32c14.55-100.85,23-179.72,25.84-243.12a2.67,2.67,0,0,0-2.43-2.78L1402.39,1726a2.68,2.68,0,0,0-2.91,2.92c7.72,77.32,29.4,177,52.62,286a2.69,2.69,0,0,0,2.53,2.12l626.2,20.52A2.7,2.7,0,0,0,2083.57,2035.32Z"
          }),
          createBaseVNode("path", {
            id: "Right_Lateral_Upper_Zone",
            "data-label": "Right Lateral Upper Zone",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Right Lateral Upper Zone", $event)),
            class: "cls-lungRightMale-2",
            d: "M2109.64,1786.07c4.94-122.68-11.71-186.53-46.38-240.69a188.41,188.41,0,0,0-66.42-62.54c-112.36-63.21-428.56-203.33-533.82-69.66-52.14,66.21-65.16,193.68-66.44,254.13a497,497,0,0,0,2.38,55.44,2.68,2.68,0,0,0,2.43,2.42l705.33,63.46A2.68,2.68,0,0,0,2109.64,1786.07Z"
          })
        ]),
        _cache[4] || (_cache[4] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-7048a583><path class="cls-lungRightMale-3" d="M1992.52,720.34s13-31.26,32.16-29.34,44.31,7.83,49.81-2-4.89-17.34-11.55-18.39c-10.69-1.68-34.41-2.57-49.24,7.38C2000.93,686.59,1993.76,697.72,1992.52,720.34Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1797.71,737.14c-10-22.29-27.92-46.73-55.36-40.18a54.41,54.41,0,0,0-35.9,28.27,55.18,55.18,0,0,0-5.53,18.69c-3.75,41.55,27.38,80.39,56.67,106.86a176.27,176.27,0,0,0,17.62,13.7c1.2.73,2.52,1.64,3.72,2.26a13.57,13.57,0,0,0,6.83,1.3c8.21-.86,14.87-6.48,21.17-11.93a34.69,34.69,0,0,1-4.57,10.8c-5.3,8.56-15.47,14.59-25.89,12.22a30.69,30.69,0,0,1-8-3.14,95.08,95.08,0,0,1-11.14-7.11c-32.89-24.52-64.35-60.75-70.56-102.69-2.29-16-.27-33.19,7.87-47.33,9.5-16.9,26.49-29.38,45.61-32.75,32.53-5.69,52.86,22,57.49,51Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1983,1413c-9.08-8.16-19.8-15.2-31.54-18.25-5.73-1.4-11.59-1.81-17-.25-2.93.72-5.93,1.56-8.93,2.4-25.17,7.13-53.65,13.67-79.74,7.7-1.55-.36-3.07-.89-4.57-1.4,3.19,0,6.31-.22,9.4-.45a259.73,259.73,0,0,0,27.46-4.23c12.1-2.41,24.13-5.3,36.38-7.71,7.83-1.42,15.6-3.41,23.78-4,18.31,0,34.27,12.13,44.8,26.15Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1663.07,1012.94c4.63,45.32,7,90.81,12.21,136,4.16,35.09,12.73,68.86,22.51,103-21.2-35.21-31-76.38-33.78-117.09a911.3,911.3,0,0,1-.94-121.88Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1687.46,855.85c1.26,8.77-1.15,17.7-4.86,25.64-9.7,20.08-29.82,33.83-51.2,38.63a73.62,73.62,0,0,1-12.88,1.67q2.77-1.77,5.56-3.27c4.18-2.46,9.39-5.34,13.53-7.88,21.76-12.75,41.54-30.33,49.85-54.79Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1912.05,912.78c3.45,10.12,10.23,18.16,17.65,25.52a165.3,165.3,0,0,0,16,13c8.77,6.41,18,11.72,26.67,18.45-20.64-2-40.92-12.59-53.09-29.6-5.28-7.85-9.39-17.78-7.28-27.33Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1750.3,738.88c-2-.19-3.83.82-5.55,1.65a52.23,52.23,0,0,0-7.35,4.86c-2.07,1.75-4.83,3.67-6.59,5.73-7.46,8.73-9.45,21.67-4.6,32,4.93,10.54,15.19,17.26,25.3,22.37,3.63,1.86,7.34,3.35,10.67,6,3.15,2.44,4.69,6.48,7.76,9,4.21,4,8.62,4.66,11.46-1.15,5-9-6.54-14.74-12.08-20.09a5.22,5.22,0,0,1-1.72-3.57,22.19,22.19,0,0,1,.49-4.81A70.3,70.3,0,0,1,1774.2,774c-1.09,6.32-2.56,12.48-3.34,18.8a12.07,12.07,0,0,0,0,3.12,6.92,6.92,0,0,0,1.8,1.95c5.47,4.48,13,8.66,13.68,16.58a14,14,0,0,1-6.08,11.86c-4.29,2.76-9.76.15-13-3a35.17,35.17,0,0,1-5.72-7.15c-3-3.54-7.4-5.09-11.75-7.43a80.55,80.55,0,0,1-10.33-6.24c-8.39-5.66-15.79-13.9-17.92-24.09-2.54-12,2.41-25.48,12.72-32.28a60.14,60.14,0,0,1,10.23-6.11c1.79-.73,3.8-1.57,5.76-1.21Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M2121.35,1581.32c1.57,1.94,3.53,5,4.92,7.12a269.89,269.89,0,0,1,21.81,45.52c15.41,41.21,25.43,86.06,16.06,130.07-3.45,15.15-9,30.33-19,42.58-9.88,13.17-30.28,21.36-52.77,19.3-42.57-4.33-79.32-30.29-108.36-59.92a209.35,209.35,0,0,1-16-18.63c7.24,3.92,14.2,8.06,21.14,12.14,20.29,11.93,41,24.31,62.2,33.74,19.25,8.49,41.84,16.35,62.41,10,5.43-1.83,10.46-4.65,14-9,7.23-8.73,12.28-22.53,14.68-34.69,5.26-26.76,1.93-54.9-5.11-81.37-6.9-20.27-14.74-40.9-22.53-60.88-3.05-7.77-6.14-15.54-9.32-23.24l-.12-.28-.05-.15c0-.1-.06-.2-.08-.3l16.06-11.92Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1907.49,1271.8c-13.62-22.65-28.65-54.11-24.65-81.31,2.76-13.5,4.77-27.8,4-41.46-.34-4.82-1.09-10-3.09-14.07l-.15-.44-3.24-9.63c-6.21-19.59-11.61-39.72-13.5-60.3a86.28,86.28,0,0,1-.35-11.52l19.94,1.47v1.68a123,123,0,0,0,1.47,15.91c2.33,15.63,6.67,31.47,11.49,46.6l3.1,9.21-.4-1a47.74,47.74,0,0,1,3.41,10.68c3,15.92,1.21,31.85-1.27,47.51-.82,5.16-2.35,10.18-2.08,15.55,1.1,21.35,11.5,42.34,22.39,60.61l-17,10.49Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M2134.49,1816.73c13.31,33.8,17.68,71.4,9.91,107.27a133.7,133.7,0,0,1-30.69,60.21c-19.71,22-41.37,45.36-60.33,67.92-27.35,32.26-52,66.54-72.92,103.37-4.25,7.4-8.37,14.91-12.54,22.46,12.42-50.31,38.2-97.31,69.72-138.4,17.74-23.32,38.39-47.29,57.61-69.48,30-33.19,34.72-80.1,26.47-122.76a203.38,203.38,0,0,0-5-20.57l-.82-2.63,18.58-7.39Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M2115.34,1977.29c2.58,26,4.1,51.48,3.07,77.64-.83,13.77-1.69,27.85-7.22,41-5.23,10.79-11,21.47-12.94,33-2.05,11.23.35,23.46,2.34,34.75,2,13.65,1.58,26.87.44,40.36-2.64,26.51-8,52.9-19.84,77l.29-.62c.18-.45-.06.16-.09,1a29.28,29.28,0,0,0,0,3.17c1.38,19.65,4.53,39.48,3.23,59.55-1.1,23.79-7.34,47.87-19.48,68.6l1.33-5.12c.82,62.35,2.37,124.58.82,187-1.34,37.46-3.65,74.76-6.5,112.12-2.13,26.57-4.3,53-8.11,79.53l-.75,4.76c-.29,1.59-.56,3.23-.87,4.79l-.46,2.32c-.11.51-.14.64-.18.93l-.19,1.14c-5.39,33-11.07,67.27-13.64,100.56-.2,3-.3,5.9-.29,8.6l0,1c0,.36,0,.69,0,.73,0,.31.1.85.2,1.44,3.42,16.29,8.69,32.3,12.84,48.66,13,50.58,30.62,123.44,8.54,171.47-11.8,25.21-35.77,38.67-66,38.28-112.51,0-357.84,0-470.83,0-10.57,0-27.2.16-37.8-.21a157.74,157.74,0,0,1-39-7c-64.11-19.45-110.82-82.92-109.83-150a481.45,481.45,0,0,1,15.81-113.08c6.2-24,15.91-48.58,25.84-71.36,39.18-96.18,93-190.06,101.68-295.24,1.39-18.51,2.11-37.2,3.46-55.65,5-64.45,5.32-129-7.4-192.45-1.53-8.12-3.72-18.89-5.61-27-21.39-97-63.81-187.63-91.53-283.18-47.2-154.28-25.26-312.53,16-465.28,2.89-10.53,7-26,10.24-36.3a521.08,521.08,0,0,1,18.33-49.17c15-35.17,37.18-70.6,57.44-103.06,21-33.66,39.41-68.81,52.38-106.35,11.16-31.66,19.17-64.36,25.39-97.45,1.41-7.49,2.69-15.08,4-22.45,0-.26.17-1,.15-.85l.12-1.08c4-40,4.54-80.94.47-120.87-2.55-23.75-6.86-47.6-15.14-69.85-8.78-22.56-21.28-43.4-33.28-64.61-12.62-22-25.15-44.76-33.11-69.29-14.67-43.51-12.35-90.92-1.93-135,12.75-56.85,41.26-111.38,86.85-148.68,96.71-79,251.62-89.51,366.66-49.45,35.47,12.51,69.37,30.66,98.55,54.61a218.15,218.15,0,0,1,27.46,33.32c13.53,19.23,28.37,51.29,32.38,69.53,6.77,17.22,14.41,33.19,21.72,50.45,2.17,5.54,4.33,10.34,5.28,16.77.57,5.22-.16,10.57-.68,15.57-1,8.75-2.28,18.43-2.75,26.73-.30,6.55-.45,12.86.91,19,1.28,4.69,4.45,9.29,7,13.67,16.9,27.18,36.19,53.12,52.55,81a182.82,182.82,0,0,1,10.13,19.59,47.47,47.47,0,0,1,3.76,13,36.41,36.41,0,0,1-6.91,23.77c-8.86,12-23.71,16.58-37.25,18.86-5.39.91-11.69,1.57-16.4,4.12-1.79,1.07-2.59,1.59-3.08,3.23-.62,4.1,1.21,8,3.32,12.59l.67,1.3c.94,1.8,1.86,3.39,2.67,5.28,4.78,10.19,5,22.9-4,31.29-6.22,6.09-15.22,8.32-22.15,10.16a5.56,5.56,0,0,0,.7-.38,8,8,0,0,0,.71-.48,9.69,9.69,0,0,0,2.72-3.23,10,10,0,0,0,1-3,10.23,10.23,0,0,0,.13-2.24,10.1,10.1,0,0,0-.20-1.45c-.08-.38-.20-.74-.25-.91s-.18-.47-.22-.57a5.59,5.59,0,0,0-.39-.77c5.74,7.13,13.42,14.33,14.55,24.43a19.19,19.19,0,0,1-4.40,14.44c-4.59,5.56-12.24,9.38-17.45,13.43a3.59,3.59,0,0,0-.61.63,1.49,1.49,0,0,0,.15-.41c.06-.20,0-.34,0-.14a5.09,5.09,0,0,0,.27,1.11c.06.24.22.57.33.87,0,.10.17.41.29.68l.36.82,1.41,3.35c6.69,15.58,8.88,30.55,4,47.08-8.86,31.77-37.22,52.54-69.19,56.36-23.48,3.08-46.78-1.12-69-8l-3.30-1.15-13.15-4.64c-34.72-12.15-69.21-26.07-101.94-42.93a438.86,438.86,0,0,1-47.93-28.09c17.56,5.76,34.86,11.87,52.15,18,30.81,10.84,73.18,26.16,103.45,36.88,7.55,2.61,18,6.47,25.62,8.30,31.87,8.47,72,9.50,94.94-18,10.15-12.29,16-29.24,12-45-1.31-5.50-3.81-11.27-6.12-16.65a20.58,20.58,0,0,1-1.63-12.89,18.40,18.40,0,0,1,5.90-9.47c5.50-5,11-6.67,15.69-11.73a1.18,1.18,0,0,0,.23-.37,1.33,1.33,0,0,0,0-.45,9.88,9.88,0,0,0-1.43-3.45c-2.41-3.83-5.92-7.55-9.05-11.27a21.54,21.54,0,0,1-1.48-2.05,11.76,11.76,0,0,1-1-1.81,7.34,7.34,0,0,1-.28-.74,8.32,8.32,0,0,1-.28-1,8.59,8.59,0,0,1-.09-3.28,8.39,8.39,0,0,1,.82-2.41,8.24,8.24,0,0,1,1.33-1.83,8.45,8.45,0,0,1,1.06-.94,8.16,8.16,0,0,1,.79-.54,12.65,12.65,0,0,1,1.94-.94c.94-.36,1.62-.56,2.27-.75l1.79-.50a53.57,53.57,0,0,0,8.55-2.84,14,14,0,0,0,3.71-2.40,5.08,5.08,0,0,0,1.49-2.41,7.94,7.94,0,0,0,0-3.50,26.43,26.43,0,0,0-2.86-7.38l-.84-1.55-.87-1.68c-9.47-18-7.81-36.52,15-43.42,4.86-1.58,9.54-2.19,14.46-3,12.65-2.09,28.41-7,28.67-21.92a11.73,11.73,0,0,0-.48-2.73,44.68,44.68,0,0,0-2-5.46,163,163,0,0,0-9.12-17.39c-17.42-29.61-38.66-57-56.32-86.65-2.22-4-4.58-8.30-5.66-13l-.44-2c-3-16.74,0-34.11,1.73-50.40.25-2.23.48-4.44.62-6.52a22.27,22.27,0,0,0,0-4.88,36.57,36.57,0,0,0-1.55-5.30c-.71-2-1.52-4-2.37-6-3.45-8.19-7.34-16.58-11.06-25-3.82-8.77-7.77-17.55-11.19-26.52a217.78,217.78,0,0,0-54.31-94c-85.10-68.45-203.35-84.06-308.38-63.51-101.69,21.38-177,76.19-205.91,179-11.33,40.17-17.19,83.24-7.81,124.33,6.59,29.63,21,56.27,36.17,82.54,12.43,21.92,25.54,43.89,34.72,67.61,9,24.21,13.65,49.54,16.39,75,4.19,41,3.67,82-.19,123-.09,1-.29,2.65-.38,3.61s-.15.90-.22,1.40l-.81,4.68c-9.33,55.87-23.50,111.66-47.53,163.21-23,50.57-58.42,96.36-83,146a480.48,480.48,0,0,0-27.22,67.72c-5,16-10.43,37.11-14.77,53.46-37.49,143.54-55.87,292.21-11.81,436.47,20.59,71.69,49.87,139.88,72,211.59,11.13,35.89,20.63,72.65,27.09,109.75a623.06,623.06,0,0,1,9.33,113.08c-.40,42.46-4.38,84.14-6.54,126.31-3.82,58.58-22.11,115.29-44.51,169-22.57,54.63-47.56,108-69.89,162.64-19,48-28.18,99.61-29.46,151.14-.75,73.60,60.66,136.73,134.59,137.50,1.47,0,2.86,0,4.46,0h9.32c124.75-.12,369.08.14,493.68-.18,44-1.42,53-39.50,52.39-77.15-.78-36.42-9.07-72.41-18.29-107.63-3.15-11.94-6.55-23.78-9.84-36-1.54-6.23-3.63-12.73-3.88-19.36a189.43,189.43,0,0,1,1-21c2.44-25.10,6.18-49.74,10.08-74.55l3-18.49.20-1.17c.76-3.89,1.63-8.48,2.20-12.43,2-13.62,3.44-27.29,4.77-41.13,4.55-49.27,7.76-98.79,9.60-148.22,1.51-61.90,0-124-.82-185.94l0-2.80a123.78,123.78,0,0,0,13.39-31c5.71-20.54,6-41.88,4-63.24-.49-5.46-1.12-10.95-1.68-16.69a88.87,88.87,0,0,1-.55-14.32,23.31,23.31,0,0,1,1.61-7.23l.09-.22.20-.41c14-28.41,21.60-73.94,17.53-105.51-1.11-6.51-2.37-12.76-2.92-19.42-1.60-13.88,1.16-29.23,6.80-41.88,2.25-5.67,5.67-12.12,8.25-17.46,4.17-10.53,4.87-22.35,5.53-33.80a491.44,491.44,0,0,0-1.29-56c-.46-6.22-1-12.55-1.64-18.62l19.54-2.17Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1829.43,1386.39c-100.55,50.53-223,16.11-302.68,115-8.53,10.35-15.86,21.89-22.69,33.41-9.29,16.14-15.38,33.88-20.14,51.87-7.28,26.56-8.92,54.33-15.60,81.10a173.05,173.05,0,0,1-4.90,16.71,86.50,86.50,0,0,1-4.76-17c-3.22-17-2.68-34.41-.52-51.53,4-33.26,11.79-67.10,29.86-95.75a265.48,265.48,0,0,1,17.16-25.24c79.66-105.14,211.09-81,324.27-108.58Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1642.09,1414.57a697.89,697.89,0,0,0,78.54-23.40c18.90-7.07,37.63-14.85,54.44-25.72a103.36,103.36,0,0,0,15.11-12.07c83.86-74,178.12-135.60,278.91-184,11.72-5.50,26.11-12.29,37.37-17.83,49.14-24,96.85-50.24,134.91-89.78,7.54-7.25,15.40-14.59,23.44-21.43a396.09,396.09,0,0,1,42.67-31.95c46-29.42,97.17-55.63,144-83.60,147.44-92.91,303.27-203.36,448.30-300.17,43.40-28.93,86.36-58.61,131.08-85.59,7.52-4.42,15.72-9.18,24.74-9.17,21.10-.12,39.05,14.42,53.13,27.77,17.17,16.87,41.74,48.57,44,73,.48,5.15-.87,11.44-4.43,15.63l-.65.76-.62.70c-1.39,1.50-3.48,3.65-4.94,5.08-82.89,79.06-168.29,155.07-253.08,232-61.21,55.43-124.19,111-186,165.87-26,23.32-49.89,49.06-78.14,70.14-5,3.73-12.29,8.42-17.58,11.87-10.89,7.26-20.13,16-29,25.82-18.14,20.51-37.08,42.47-57.79,61l1.35-1.49a123.43,123.43,0,0,1-10.58,12c-10.56,10.64-22,20.26-33.43,29.69a1055.35,1055.35,0,0,1-95.08,69c-7.71,5.06-17.84,10.11-26.08,14.40-8.44,4.44-16.70,9-24.79,13.94a354.07,354.07,0,0,0-76.69,61.84c-16.76,18.30-35.44,35.06-56.55,48.17-16.88,10.38-34.72,19.37-54.08,24.19,29.85-27,63-52,90.88-80.91,5-5.38,10.09-10.92,15.25-16,28.11-28.15,61.14-51.15,96.23-69.61,7.86-4.18,17.34-8.86,24.71-13.74,39.78-25.91,78.74-54.74,114.25-86.35,6.47-6,13.52-12.68,18.69-19.44l.60-.79.76-.70a522.37,522.37,0,0,0,42.30-44.06c9.30-10.69,18.48-21.61,29.16-31.33,7.74-7.16,17.30-13.89,26.25-19.57,19.69-13.21,36.38-29.52,53.70-46,19.88-19.19,40.67-38.39,61.47-56.54,51.42-45.66,103.64-92.49,154.58-138.57C2957.75,790.83,3043,714.70,3125.31,636l1.75-1.76,1.63-1.69.73-.78.43-.49c.15-.17-.18.21-.22.31a5.20,5.20,0,0,0-.57,1.09c-.19.68,0,.26-.09-.47a18.74,18.74,0,0,0-.52-3,50.08,50.08,0,0,0-2.79-7.84,119.91,119.91,0,0,0-9.08-16.48,178.81,178.81,0,0,0-24.55-30c-8.89-8.57-25.72-23-38.19-20.66-3.60,1.19-7.42,3.65-10.91,5.58-8.80,5.15-17.44,10.60-26.10,16.11-186.08,120.44-365.61,250.86-553.55,368.51-34.34,20.20-74.15,41.70-108.61,61.56-29.57,16.82-58,35.07-83.26,57.82-15.68,13.91-29.82,28.84-46.61,42.18-22.28,17.82-46.84,32.16-71.82,45.44-18.57,9.83-37.36,19-56.34,27.85-106.18,48-206.20,111.39-294.27,187.74-10.59,10.11-23.54,17.89-36.52,24.25-31.94,15.44-65.58,25.65-99.69,34.58-6.81,1.74-13.53,3.39-20.52,4.93l-3.55-16.11Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1918.57,1692.09c41.36-21.67,83-43.07,122.20-68a249.53,249.53,0,0,0,21.87-15.60c42-36.54,77.50-80.10,114.11-122.25,24.66-28.67,49.79-57.14,77.89-82.63-25.45,51.37-61,96.23-97,140.36-18.27,22.10-36.89,43.80-57.12,64.22a246.77,246.77,0,0,1-45.83,37.36c-24.27,15.56-49.64,28.91-75.40,41.66q-19.18,9.48-38.72,18.17c-4.36,1.93-8.68,3.84-13.13,5.71l-8.83-19Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M2029.38,1575.35c21.29-12.73,37.21-33.31,47.19-55.62a176.56,176.56,0,0,0,12.58-43.41c1-6.32,1.70-12.66,2.85-19,5.41-29.68,19.15-57.65,38.19-80.81,16.77-20.11,36.86-37.76,60.52-49.09-24.53,26.48-46.53,54.84-62.50,87.09a225.87,225.87,0,0,0-11.94,29.33,189.16,189.16,0,0,0-6.39,26.25c-3.33,19.79-9.59,39.35-20,56.61-13.58,22.51-34.54,42.33-60.51,48.64Z" data-v-7048a583></path><path class="cls-lungRightMale-4" d="M1615.92,1861.79c55.75,14.56,118.15,8.69,167.33-22.06,16.13-10,30.48-22.40,43.85-35.93,38.91-40.23,75-91.53,108.93-136.40,11.82-15.70,23.70-31.42,36.39-46.92-1.50,4.79-3.18,9.51-5,14.16-12.72,32.48-29.39,63.27-48.55,92.40-22,33.51-47.42,64.87-77.39,91.85-22.59,20.66-48.72,38.26-78,48-47.65,16-101.16,13.85-147.59-5.06Z" data-v-7048a583></path><path class="cls-lungRightMale-5" d="M2155.80,879.49c-9.18,2.49-29.12,8.45-38.09,10.67-7.51,1.69-15.60,4.21-23.36,1.35-14.31-5.30-16.83-22.72-11.81-35.25a40.63,40.63,0,0,1,7.13-12.09c-1,8.49-1.78,17.27.48,25.18,1.88,6.31,5.61,11.18,12.26,10.32,8.23-1.34,16.56-4,24.86-5.93a156.35,156.35,0,0,1,27-4.13l1.55,9.88Z" data-v-7048a583></path><path class="cls-lungRightMale-5" d="M2076.05,709.79c-10.21,6.26-21,10-32,14.35a64.23,64.23,0,0,0-9.28,5.17c-9.61,6.44-18.38,15.68-30.08,18.72a32.44,32.44,0,0,1-9.18,1.16c-1-.06-2-.07-3-.17l0-.17a73.76,73.76,0,0,0,10.25-5.37c6.43-4.14,11.33-9.47,17-14.75,5.88-5.64,13-10.77,20.90-13.49,1.70-.46,4.31-1.36,6-1.64,9.69-2,19.31-3.64,29.40-3.81Z" data-v-7048a583></path><path class="cls-lungRightMale-5" d="M2045,749.68c8-8.74,8.15-21,7.11-32.10l-.20-2.16,9.73-2.30c.19.61.29,1,.42,1.49a42.29,42.29,0,0,1,1.15,9.77c.08,9.50-3,19.90-10.54,26.16a22.24,22.24,0,0,1-4.93,3.06l-2.74-3.92Z" data-v-7048a583></path><path class="cls-lungRightMale-5" d="M2019.42,733.37c11.11,6.94,23,13.07,35.59,16.89l1.14.34.14,0a4.25,4.25,0,0,1,2.37,6.64c-.25.49-.83,1.22-1.12,1.68a21.68,21.68,0,0,0-4.16,9.66c-.50,3-.30,6.07-.43,9.17a69.46,69.46,0,0,1-.95,9.78,79.93,79.93,0,0,1-3.84-14.20,27.59,27.59,0,0,1,3.43-18.12c.13-.25.67-1.17.76-1.41,0-.08.06-.17,0,0a3,3,0,0,0,.40,2.62,3.15,3.15,0,0,0,1.74,1.29l-.15,0a117.57,117.57,0,0,1-36-13.39c-1.48-.82-2.84-1.65-4.38-2.63l5.51-8.35Z" data-v-7048a583></path><path class="cls-lungRightMale-5" d="M2094.35,962.32c-3.68-3.83-16.55-14.71-29.67-10.38a.41.41,0,0,1-.52-.56c4.18-8.46,12.74-9.62,23.89-10.44,23.26-1.72,23.87-13.15,23.87-13.15s5.11,1.36,2,7.49c-2.66,5.20-15,20.59-18.29,25.87C2095.14,961.90,2094.91,963.06,2094.35,962.32Z" data-v-7048a583></path></g>', 1))
      ], 16);
    };
  }
});

const LungRightMale = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-7048a583"]]);

const _hoisted_1$d = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "LungRightFemale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "breathSounds":
          popoverComponent = _sfc_main$p;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LungRightFemale", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[3] || (_cache[3] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lungRightFemale-1",
            d: "M1657.75,2958.14c5.32-31.39,18.92-172.93,148.38-311.88s29.08-404.73,29.08-404.73S1730.35,1955.82,1715,1924.42s-55.51-135.5-15.51-361.11S1802,1350.14,1850.78,1211s44-266.34,20.74-317.36-125.64-170.28-58.74-313.12s160.84-168.16,319.15-169.67s269.19,115.5,287,188.93s38.15,103.13,6.83,219.06c-4.52,24,39.54,74.35,39.54,74.35s34.49,33,16,57-34.95,16.28-42.72,22.37-10.36,7-4.08,38.84c3.57,18.13-27.83,15.07-28.34,43.66s11.85,47,1.23,66.79-13.74,42-64,39.43-95.74-23.87-136.08-9-58.32,43.19-49.33,90.18s29.49,67.86,29.49,67.86s342.45-203.78,401.68-266.06s112.42-130.78,167.61-175.14S3284.37,454.34,3294,446.79s82.21,37.64,71.57,69c-20.25,27-377.1,434.36-377.1,434.36S2766.66,1204.67,2708,1256.84s-362.59,299-362.59,299s95.25,82.52,148.09,145.9S2573,1828,2561.84,1889.26s-30.68,99.3-125.48,123.15c1.86,29.15.23,187.67-25.07,266.23s2.11,263.05,23.25,367.27s35.33,274.23-15.81,498.29H1675.94S1646.32,3068.77,1657.75,2958.14Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$d, [
          createBaseVNode("path", {
            id: "Left_Lateral_Lower_Zone",
            "data-label": "Left Lateral Lower Zone",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Left Lateral Lower Zone", $event)),
            class: "cls-lungRightFemale-2",
            d: "M1813.56,2129.28a2.62,2.62,0,0,0-2.12,3.54c53.88,138.77,113.61,289.75,166.84,321.15a50.18,50.18,0,0,0,28.59,6.77c183.91-11.22,315-202.58,368.93-297.25,17.73-31.12,46.38-73.29,47.37-109.46a2.62,2.62,0,0,0-3-2.67Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lateral_Middle_Zone",
            "data-label": "Left Lateral Middle Zone",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Left Lateral Middle Zone", $event)),
            class: "cls-lungRightFemale-2",
            d: "M2423.15,2048.62c-1.71-99.77-5.88-177.34-13.06-239.08a2.61,2.61,0,0,0-2.79-2.3l-691.09,49a2.61,2.61,0,0,0-2.35,3.28c19.56,73.54,56.12,166.52,95.63,268.29a2.61,2.61,0,0,0,2.77,1.65l608.6-78.16A2.63,2.63,0,0,0,2423.15,2048.62Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lateral_Upper_Zone",
            "data-label": "Left Lateral Upper Zone",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Lateral Upper Zone", $event)),
            class: "cls-lungRightFemale-2",
            d: "M2409.47,1804.32c-14.42-119.38-40.51-178.5-82.51-225.43a184.48,184.48,0,0,0-74-50.07c-118.51-43.52-446.13-129.5-527,16.2-40,72.17-32.68,197.44-24.46,256.08a486.37,486.37,0,0,0,11,53.22,2.63,2.63,0,0,0,2.73,2l691.82-49A2.62,2.62,0,0,0,2409.47,1804.32Z"
          })
        ]),
        _cache[4] || (_cache[4] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-a27600ba><path class="cls-lungRightFemale-3" d="M2349.78,1549.78c15.19,11,28.68,23.09,42.42,35.53,26.9,24.67,52.7,50.36,77.78,76.87,18.82,20,37.28,40.37,54.2,62.14,5.9,7.8,11.4,15.08,16.08,24a39.34,39.34,0,0,1,3.11,8l0-.12c-.06-.21,0-.11,0,0a13.94,13.94,0,0,0,3,3.61c.41.36.81.57.59.46a4.2,4.2,0,0,0-1.37-.34l-.36,0h.12c5.86.2,11.13-2.07,17.28-2.45,5.06-.47,11,1.75,14.09,6,7.09,9.69,9.65,24.4,1.11,34.33-5,5.89-14.24,7.83-20.32,9.37,3.06-1.54,4.52-5.8,3.72-8.78,7.79,22.84,12.27,46.85,11.65,71.17-.86,80.66-62.4,148.82-144.11,151.62-57.46,2.06-109.89-30.35-147.65-71.21a328.21,328.21,0,0,1-33.76-43.15c31.34,31.58,65.25,62.22,105.74,81.23,23.39,11,49.08,17.78,75,16.58,51.41-1.91,98.8-37.38,116.5-85.43,14-36.26,11.27-77.25-1.14-113.64a22.23,22.23,0,0,1-1.06-4.06,11.28,11.28,0,0,1,6.53-11.38c4.78-2.31,9.9-2.29,14.32-4.75a1,1,0,0,0,.5-.59c1-2.7-.32-7-2-9.48l-.13-.2c0-.06,0,0,0,0a3.88,3.88,0,0,0,1.76,1.24,1.89,1.89,0,0,0,.55.13,13.94,13.94,0,0,0-2.4.31c-4.8,1-9.91,2.17-15.08,2.18-.63,0-1.34,0-2,0a14.91,14.91,0,0,1-5.4-1.34,25.36,25.36,0,0,1-8.48-6.72,26.68,26.68,0,0,1-5.43-9.24,21.11,21.11,0,0,0-1.81-4.82c-3.68-7.16-9.06-14.5-14.07-21.15-38.82-49.32-83.14-94.69-128.22-138.46-12.88-12.14-26.08-24.72-40-35.34l8.77-12.14Z" data-v-a27600ba></path><path class="cls-lungRightFemale-4" d="M2187.42,1310.32c-27.37-54.15-25.36-42.29-31.51-80-5.47-115,144.51-75.54,144.51-75.54s71.17,18.61,96.35-13.14,6.57-64.59,6.57-64.59" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M2443.61,2006.53c5,48.21,3,97-2.17,145.1-6.93,71.12-29.92,140.48-33.11,212-2.3,47.09,3.36,94.74,10.2,141.34,8.86,61.17,22.29,124.65,30.77,185.86,7.67,56.56,12.09,113.87,11,171.06-1.86,96.29-19.07,191.24-35.55,285.66l-1.13,6.51H1664.92c-2-7.11-3.76-14.08-5.26-21.2a573.1,573.1,0,0,1-9.73-170.7c7.23-85,40.58-160.85,87.29-231.27,33.17-51.5,73.23-98.82,102.94-152.3,14.08-26,24.88-54.29,26.47-84,.59-15,1.12-30.45.58-45.51-.11-8.14-1-21.87-1.65-30.22-.45-4.3-1.65-15.18-2-18.81-.75-5.3-2-13.4-2.74-18.74-.72-3.77-2-11.18-2.72-14.93-.72-4.2-3.67-17.75-4.67-22.31-9.13-39.53-21.26-78.86-33.9-117.48-12.6-37.92-26.3-78.42-39.82-116.14-23.93-66-56.88-134-78-201-15.64-49.51-25.34-101-27.69-152.93-4.4-98.41,14.79-196.42,41.39-290.69a495.77,495.77,0,0,1,41.08-97c23.06-41.36,51-79.75,70.92-122.65,24.24-51.5,38.22-107.33,47.51-163.36.72-3.6.91-7.34,1.29-11a655.83,655.83,0,0,0,2.28-75.87c-1.42-39.72-5.66-80.8-21.25-117.37-4-9.16-8.63-18.17-13.35-27-14.65-27.38-31.51-53-43.54-82.24-16.76-39.14-19.67-83.53-12.57-125.1,19-115.55,82.11-191.31,195.38-225.09a390.81,390.81,0,0,1,76.91-15c77.85-7.38,158.9,4,228.52,40.9a310.85,310.85,0,0,1,106.33,92.35l4.57,6.43A204,204,0,0,1,2419,578.54c26.94,61.29,39.43,151,20.19,216-2.31,9.32-5,19.39-5.79,28.75a31,31,0,0,0,1,12.1c2.9,8.11,9.78,16.15,15.12,23.61,2.63,3.75,6.3,8.7,9,12.35,9,12.39,20.49,24.48,27.73,38.64a48.86,48.86,0,0,1,5.22,26.69c-1,9.22-3.68,18.27-9.54,25.69a37.91,37.91,0,0,1-15.54,11.42c-5.71,2.36-11.31,3.42-16.28,4.46-2.49.51-4.82,1-6.8,1.6-2.14.61-4.24,1.42-5.55,3.08s-1.55,3.51-1.69,6.12c-.15,3.79.7,8.35,1.81,12.91s2.63,9.3,4.22,14l-8.19,2.92a56.12,56.12,0,0,1-8-13.86c-6.33-14.92-5-33.43,13.51-38.35,7.31-2.22,15.25-2.82,21.76-5.62a23.77,23.77,0,0,0,13.27-12.67,40.66,40.66,0,0,0,3.29-19.61c-.77-8.68-5.66-16.86-11.52-24.86-8.92-11.92-19.21-24.25-27.89-36.75-17.64-23.36-22.89-30.76-16.28-61,3.09-15,8.17-29.43,10-44.57,7.94-64.92-5.55-147.89-40.17-203.54a298.08,298.08,0,0,0-110.12-100.29C2208,419,2120.89,409.53,2039,421.67a356.14,356.14,0,0,0-44.25,9.55c-31.31,8.9-61.83,21.54-88.76,39.92a225.87,225.87,0,0,0-76.87,89.5A283.09,283.09,0,0,0,1814,599c-13.28,43.81-20.17,91.41-8.74,136.27,7.31,29.43,21.92,55.44,37.17,81.9,9,15.63,18,31.52,25.8,47.88,19.43,40.76,24.32,86.05,26,130.38a632.82,632.82,0,0,1-3.32,87.72c-8.73,53.08-21.34,105.93-42.72,155.5-20.43,49-52,92-77.75,137.87a481.78,481.78,0,0,0-35.11,79.47c-.78,2.32-2.72,8.48-3.48,10.75-2.77,9-6.59,24-9.17,33-15.9,61.53-28.16,124.2-32,187.65-.56,7.26-.78,19.32-1.12,26.57-.12,13.82-.06,28,.54,41.74,2.32,50.52,11.77,100.61,27,148.81,21,66.71,54,134.57,77.8,200.34,13.62,37.89,27.38,78.44,40,116.64,12.81,39.14,25,78.74,34.25,118.95l3.28,15.21c.58,2.53,1,5.09,1.5,7.65l1.4,7.67,1.39,7.68,1.13,7.73,1.13,7.73.56,3.86.42,3.89,1.66,15.55,1.08,15.6c.22,2.6.29,5.21.37,7.81l.24,7.81c.55,15.47,0,31.32-.61,46.78-2.89,53.42-32.1,100.88-61.62,143.65-73.73,103.44-143.82,192.41-155.41,324.59-5.57,60.18-1.72,121.61,12.7,180.36l-7.57-5.74h746.13l-7.75,6.51c16.37-93.81,33.47-188,35.32-283.24,1-53.27-2.93-106.87-9.71-159.8-3.06-23.06-6.88-47.53-11-70.54-10.22-58.29-21.62-118.92-27.92-177.67-3.25-30.11-4.83-60.4-3.41-90.71s6.12-60.24,11.76-89.94c3.1-16.53,7.48-36.42,10.59-52.79,12-60.9,17.74-123.3,15.09-185.35-.41-8.62-1-17.63-2-26.15l15.59-2.09Z" data-v-a27600ba></path><path class="cls-lungRightFemale-5" d="M2307.6,772.4s23.08-24.76,40.39-16.24s38.78,22.82,47.35,15.58,8.86-21,3-24.36c-9.43-5.31-38.72-11.36-56.09-7.22C2327.28,743.72,2316.67,751.64,2307.6,772.4Z" data-v-a27600ba></path><path class="cls-lungRightFemale-5" d="M2398.81,831.31s5.71,10.28-8.46,17.78c-12.28,6.5-39,1.56-51.75-6.83s-2.19-9.49-15-11-31.06.69-31-10.21c0-10.71,21.16-4,35.76-13.51s17.89-19.57,40.69-21.76,42.15,18.84,35.94,28.7-11.36-.8-19-3.72,3.56,14.34.64,20.55-18.31,7.84-20.93-.13c-4.38-13.29,3.25-19.34-3-20.8s-20.86,6.29-22.32,11.76,4,15.33,17.15,18.25,28.32,1.51,33.43-4.33S2395.16,831,2398.81,831.31Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M1899.75,1509.23c16.64-36,38.59-71.19,72-94,5.3-3.59,10.51-7.15,16-10.26,32.38-19,68-30.84,101.64-46.84,36.69-17.47,72-40,106.77-61.27,35.06-21.74,70.2-43.68,105.22-65.33,31.9-19.88,63.58-40.18,94.56-61.36a22.25,22.25,0,0,1,6.13-3.05l.36-.12a4.36,4.36,0,0,0,.74-.39c11.85-8.21,24-16,36.27-23.59,36.51-24.38,73.85-49.31,108.4-76.1q20.31-15.71,39.64-32.55l.21-.2a3.2,3.2,0,0,0,.36-.39c.15-.2,0,0,.59-.86a22.27,22.27,0,0,1,4.92-5.05c2.42-2,6.44-5.49,8.89-7.41,3.07-3.28,6.17-6.54,9.22-9.85,39-42.45,74.17-89.76,117.83-128.34l1.06-1a4.1,4.1,0,0,0,.68-.8l.54-.78a20.78,20.78,0,0,1,2.46-2.92,20.47,20.47,0,0,1,1.65-1.49c168.8-137,357.15-281.66,528.13-416.54l9.73-7.65,4.85-3.83,2.43-1.92,1.21-1c.3-.23,1.06-.83,1.73-1.29a21.23,21.23,0,0,1,19.12-2.37,110.2,110.2,0,0,1,12.27,5.36c23.73,12.06,42.8,32.25,54.48,56l1.42,3,.35.74a21.18,21.18,0,0,1-3.43,23.06l-.51.59-1,1.17C3303.58,602.78,3231,683.75,3168.1,756.14c-48.29,55.94-109.3,127.27-158.18,183-54.42,59.27-106.51,121-160.84,180.39-4.74,5-11.77,13.19-16.38,18.44-19.11,21.73-38.77,43.25-58.45,64.41-4.11,4.52-10.7,11.38-14.56,15.94-6.43,7-13.08,13.79-19.79,20.35-23.73,23.14-48.74,45.46-73.47,67.41-21.54,18.63-54.68,44.87-77.46,62.47-16.3,12.68-32.22,25.78-48.39,38.66-17.84,14.07-40.56,32-58.47,46-46.72,35.53-103,78.76-148.07,124.1l-3.55,3.53-3.52,3.6-3.52,3.6-1.74,1.77c-7,7.59-20.17,22.29-27.09,30a132.71,132.71,0,0,0-11.94,19.49l-.63,1.23c-.21.41-.43.76-.65,1.14l-2.6,4.49c-8.54,14.72-17.54,29.29-27.15,43.4-26.85,39.61-60.15,76-100.65,102.15-51.16,33.71-112.18,54.85-173.66,53.57a382.44,382.44,0,0,0,149.11-54.5c62.77-37.79,103-89.37,138.61-152.33,1.21-2.18,2.59-4.39,3.54-6.35a149.13,149.13,0,0,1,13-21.63c3.23-4,9.51-10.84,13-14.84,48.9-56.3,113.7-107.62,169.61-150.32,24.13-18.95,51.22-40.26,75.16-59.44,29.36-24.25,67.39-52.77,96.71-77.37,6.37-5.25,12.69-10.48,18.88-15.79,9.16-7.66,18.58-16.85,27.57-24.67,22.69-20.54,45.72-41.19,66.21-63.82,20.82-22.82,42.26-45.41,62.73-68.51,7.57-8.46,17-19.54,24.78-27.82,54.4-59.26,106.64-120.87,161.19-180,48.9-55.51,109.85-126.61,158.17-182.41,62.31-71.6,134.43-151.69,196.87-223l3.88-4.48a5.14,5.14,0,0,0,.77-5.14l-.12-.3-.32-.66c-11.63-25.28-32.89-46.38-59.13-56a5,5,0,0,0-4.57.56C3111.51,600,2926.38,742.41,2747,888.31a6.82,6.82,0,0,0-.66.57,5,5,0,0,0-.37.42l-.16.21a24.61,24.61,0,0,1-4.92,5.52c-43.17,38.27-77.39,84.56-116.59,127.15-3.29,3.55-6.5,7-9.85,10.5-1.32,1.29-2.72,2.25-4.08,3.41-1.65,1.35-5.36,4.61-7,5.83a6.68,6.68,0,0,0-1.11,1.37,22.33,22.33,0,0,1-4.06,4.4c-44.21,38.56-93.19,71.85-141.9,104.18-6,4.12-14.82,9.55-21,13.41-7.91,5-15.63,10.12-23.36,15.36a22.18,22.18,0,0,1-5.19,2.34,5.32,5.32,0,0,0-1,.48c-3.47,2.29-9.09,6.14-12.11,8.14-62.24,41.38-126.2,79.31-189.54,118.3-35.3,21.25-71.11,43.73-108.55,61.22-37.24,17.44-76.78,30-112.14,50.9-35.8,20.1-60.62,53.85-83.63,87.21Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M2122.7,797.46c-9.07-23.5-27.41-48.54-55.71-42a56.12,56.12,0,0,0-37.11,29.24c-6.29,12.27-7.18,26.38-4.8,39.79,5.18,27.85,22.6,51.85,41.79,72,10.47,10.62,21.69,21,34.44,28.74a14.13,14.13,0,0,0,9.72,2.14c7.84-1.16,14.13-6.34,20.9-11a29.15,29.15,0,0,1-4,11.36c-5.88,10-18,15.87-29.41,11.21a48,48,0,0,1-6.45-3.36c-14.76-9.13-27.6-20.74-39.35-33.39-19.34-21.26-35.59-47-39.45-76-2.09-15.66-.1-32.43,7.88-46.26,9.27-16.43,25.81-28.52,44.4-31.79,31.69-5.63,51.25,21.37,57.13,49.23Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M2139.82,972.26c2.37,43,22.92,83.5,53.36,113.37,30.26,30.71,68.82,49.54,110,61.49l-4.57,15.43c-26.74-8-53-19.29-76.63-34.42a244.74,244.74,0,0,1-24.06-17.45c-3.05-2.73-6.56-5.71-9.49-8.57l-6-6.09c-30.24-32.83-48.38-79-42.59-123.76Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M1997.9,855.85c1.25,8.77-1.15,17.7-4.87,25.64-9.69,20.08-29.81,33.83-51.19,38.63a73.62,73.62,0,0,1-12.88,1.67q2.77-1.77,5.56-3.27c4.18-2.46,9.39-5.34,13.53-7.88,21.76-12.75,41.54-30.33,49.85-54.79Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M2811.61,1013.41c2.15,18.92-6.26,38.62-18.58,52.73-12.88,14.85-31.38,22.68-49.89,26.41a92.12,92.12,0,0,1-15.87,1.76c18.27-13.36,39-22.53,54.18-38.71,12-12.51,21.56-27.09,30.16-42.19Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M2222.49,912.78c3.45,10.12,10.23,18.16,17.65,25.52a166.39,166.39,0,0,0,16,13c8.78,6.41,18,11.72,26.68,18.45-20.64-2-40.93-12.59-53.09-29.6-5.28-7.85-9.39-17.78-7.28-27.33Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M2082.07,807c-2,0-3.7,1.11-5.37,2a85.38,85.38,0,0,0-9.44,6.82c-9.2,6.64-13.4,19.12-10.76,30,2.26,9.3,9.11,16.47,17,21.62,6.48,4.77,14.19,7,20.74,11.77,3.18,2.42,4.69,6.51,7.78,9,2.16,1.94,5.17,4,7.8,2.43a10.2,10.2,0,0,0,4.09-7.92c-.56-6.58-8.79-10.54-13.25-15a6.39,6.39,0,0,1-1.79-2.9,10.75,10.75,0,0,1-.11-2.87,40.29,40.29,0,0,1,2.16-9A53.27,53.27,0,0,1,2106,842.1c-.42,4-1,7.92-1.68,11.78-.45,3.2-1.2,6.43-1.1,9.61a.94.94,0,0,0,.1.44,20.69,20.69,0,0,0,3.77,3.33c3.28,2.52,6.67,5,9.13,8.58a12.61,12.61,0,0,1,.77,13.59c-1.6,3.27-4.61,6.46-8.55,6.64-6.66.06-11.39-5.49-14.7-10.51-2.79-4.25-7.61-5.72-12.29-8.28A81.79,81.79,0,0,1,2071,871c-8.41-5.74-15.91-14.07-18.05-24.35-2.33-11.17,1.49-23.69,10.3-31.06,4.4-3.32,13.13-9.8,18.78-8.62Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M1883.34,2460.92c1.54,30.79-1.39,61.63-5.53,92.1a887.55,887.55,0,0,1-33.08,141.91c-3,8.92-6.35,18.64-9.52,27.49,6-32.26,12.19-65.35,16.82-97.88,5.26-35.23,9-70.75,11.9-106.24,1.28-16.07,2.41-32.87,3.15-49,.09-1.89.27-6.06.33-8l15.93-.44Z" data-v-a27600ba></path><path class="cls-lungRightFemale-3" d="M2411.07,929.39c-.25,11.21-1.84,25.23,4.59,34.82a12.37,12.37,0,0,0,6.25,4.65c2.63.65,4.9-.40,7.92-1.53,5.39-2.27,12.49-5.58,19.2-6.38a39.28,39.28,0,0,1,8.06-.23c9.65-.49,16.66-8,19.41-17.12l9.14,2.16c-2.52,11.67-11.35,22.14-23.54,24.41a23,23,0,0,1-7.51.39,26.35,26.35,0,0,0-4.31.19c-6,.57-11,2.81-17.32,5-4.53,1.63-10.94,2.92-15.56,0-16.16-9.47-11.43-31.67-6.33-46.33Z" data-v-a27600ba></path><path class="cls-lungRightFemale-5" d="M2350.57,1046.23s6.58-2.3,11.71,6,22.21,37.56,45.86,36,30.12-13.16,24.54-24.54-14.06-12.72-11.16-15,29.23-13.17,25.44-30.79-41.8-4.4-55.11,4.24c-11,7.14-22.23,16.46-26.47,16.91s-11,1.42-13.69,3.84C2349.37,1045,2349.93,1046.19,2350.57,1046.23Z" data-v-a27600ba></path><path class="cls-lungRightFemale-5" d="M2480.89,1702.89s15.54,21.21,10.39,57.79c-5.3,37.63,12.64,64.1,35,77.19,19.28,11.28,31.1,26,28.81,44.94s7.61-26.08,10.94-56.75c.65-6.07-.46-15.9-3.44-26.59-1.81-6.48,12.90-17.59,9.70-24-2.57-5.18-22.65-6.11-25.74-11.33-18.76-31.81-44.93-62.53-53.23-70.5-10.8-10.37-20.45-9.14-19.94-2.1C2473.56,1693.67,2477.32,1695,2480.89,1702.89Z" data-v-a27600ba></path></g>', 1))
      ], 16);
    };
  }
});

const LungRightFemale = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a27600ba"]]);

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BreathingAssessment",
  setup(__props) {
    const formRef = ref(null);
    const breathingAssessmentForm = useBreathingAssessmentForm().breathingAssessmentFormSection;
    const patientStore = useDemographicsStore();
    const patientGender = computed(() => patientStore.patient?.personInformation?.gender);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(breathingAssessmentForm),
                ref_key: "formRef",
                ref: formRef
              }, {
                chestWallAbnormality: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LungFrontMaleSVG, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "chestAbnormality",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataChestwallAbnormality", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LungFrontFemale, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "chestAbnormality",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataChestwallAbnormality", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayChestWallAbnormalityBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataChestwallAbnormality"]
                  }, null, 8, ["currentValues"])
                ]),
                chestExpansionAbnormality: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LungFrontMaleSVG, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "chestExpansion",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataExpansionBodyParts", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LungFrontFemale, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "chestExpansion",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataExpansionBodyParts", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayExpansionBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataExpansionBodyParts"]
                  }, null, 8, ["currentValues"])
                ]),
                percussionAbnormality: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LungBackMale, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "percussion",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataPercussion", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LungBackFemale, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "percussion",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataPercussion", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayPercussionBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataPercussion"]
                  }, null, 8, ["currentValues"])
                ]),
                breathingSoundsLeftLateral: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LungLeftMale, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataLeftLateral", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LungLeftFemale, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataLeftLateral", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayLeftLateralBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataLeftLateral"]
                  }, null, 8, ["currentValues"])
                ]),
                breathingSoundsRightLateral: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LungRightMale, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataRightLateral", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LungRightFemale, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataRightLateral", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayRightLateralBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataRightLateral"]
                  }, null, 8, ["currentValues"])
                ]),
                breathingSoundsAnterior: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LungFrontMaleSVG, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataAnterior", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LungFrontFemale, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataAnterior", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayAnteriorBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataAnterior"]
                  }, null, 8, ["currentValues"])
                ]),
                breathingSoundsPosterior: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LungBackMale, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataPosterior", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LungBackFemale, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "breathSounds",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataPosterior", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayPosteriorBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataPosterior"]
                  }, null, 8, ["currentValues"])
                ]),
                _: 1
              }, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const useCirculationAssessmentForm = () => {
  const sizeOfCatheter = [
    { id: 1, name: "14G" },
    { id: 2, name: "16G" },
    { id: 3, name: "18G" },
    { id: 4, name: "20G" },
    { id: 5, name: "22G" },
    { id: 6, name: "Central Line" }
  ];
  const mucousAbnormal = [
    { id: 1, name: "Pale" },
    { id: 2, name: "Dry" },
    { id: 3, name: "Cyanosis" },
    { id: 4, name: "Jaundice" }
  ];
  const pulseStrengthOptions = [
    { label: "Weak", value: "weak" },
    { label: "Strong", value: "strong_regular" }
  ];
  const pulseRhythmOptions = [
    { label: "Regular", value: "regular_rhythm" },
    { label: "Irregular", value: "irregular" }
  ];
  const capillaryRefillTimes = [
    { label: "Less than 3 seconds", value: "less_than_3_seconds" },
    { label: "3 seconds", value: "three_seconds" },
    { label: "More than 3 seconds", value: "more_than_three_seconds" }
  ];
  const notDoneReasons = [
    { id: 1, name: "Patient uncooperative" },
    { id: 2, name: "Machine not available" },
    { id: 3, name: "Batteries not available" },
    { id: 4, name: "No inappropriately sized cuff" },
    { id: 5, name: "No power supply" },
    { id: 6, name: "Other" }
  ];
  const sitesOfCannulation = [
    { id: 1, name: "Left" },
    { id: 2, name: "Right" }
  ];
  const diagramSitesOfCannulation = [
    { id: 1, name: "Antecubital fossa" },
    { id: 2, name: "Hand" },
    { id: 3, name: "Wrist" },
    { id: 4, name: "Forearm" },
    { id: 5, name: "Foot" },
    { id: 6, name: "External Jugular" }
  ];
  const centralLineCannulationSites = [
    { id: 1, name: "Femoral" },
    { id: 2, name: "Subclavian" },
    { id: 3, name: "Internal Jugular" }
  ];
  const circulationAssessmentFormSection = computed(() => {
    return [
      // Bleeding and Pulse Rate Section
      {
        componentType: "Heading",
        name: "Bleeding and Pulse Rate",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is the patient actively bleeding?",
        name: "is_patient_actively_bleeding",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Does the patient have a pulse?",
        name: "is_the_patient_have_pulse",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        grid: { s: "4" }
      },
      // If Bleeding - Action Done
      {
        componentType: "Alert",
        header: "Apply pressure",
        message: "",
        value: "Apply pressure",
        backgroundColor: "skyblue",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_patient_actively_bleeding"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "textAreaField",
        header: "Action Done",
        name: "action_done",
        obsValueType: "value_text",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_patient_actively_bleeding"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      // If No Pulse - CPR Alert
      {
        componentType: "Alert",
        header: "Start cardiopulmonary resuscitation immediately",
        message: "",
        value: "Start cardiopulmonary resuscitation immediately",
        backgroundColor: "red",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_the_patient_have_pulse"] === "No"
      },
      // If Pulse Present - Pulse Details
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues["is_the_patient_have_pulse"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Pulse Rate (bpm)",
        name: "pulse_rate",
        obsValueType: "value_numeric",
        validation: StandardValidations.required,
        type: "number",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_the_patient_have_pulse"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Pulse Strength",
        name: "pulse_strength",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: pulseStrengthOptions,
        condition: (allFormValues) => allFormValues["is_the_patient_have_pulse"] === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Pulse Rhythm",
        name: "pulse_rhythm",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: pulseRhythmOptions,
        condition: (allFormValues) => allFormValues["is_the_patient_have_pulse"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Capillary Refill Time",
        name: "capillary_refill_time",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "8" },
        options: capillaryRefillTimes,
        condition: (allFormValues) => allFormValues["is_the_patient_have_pulse"] === "Yes"
      },
      // Mucous and Peripherals Section
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Mucous and Peripherals",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Mucous Membranes",
        name: "mucous_membranes",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Assess Peripheries",
        name: "assess_peripheries",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Cold and clammy", value: "cold and clammy" },
          { label: "Warm", value: "warm" }
        ]
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Mucous Abnormal",
        name: "mucous_abnormal",
        isMultiple: true,
        trackBy: "id",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: mucousAbnormal,
        condition: (allFormValues) => allFormValues["mucous_membranes"] === "Abnormal"
      },
      // Blood Pressure Section
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Blood Pressure",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Blood Pressure Measured",
        name: "blood_pressure_measured",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "8" },
        options: [
          { label: "Done", value: "Done" },
          { label: "Not Done", value: "Not Done" },
          { label: "BP Unrecordable", value: "BP Unrecordable" }
        ]
      },
      {
        grid: { s: "4" }
      },
      // If BP Done - Enter Values
      {
        componentType: "inputField",
        header: "Blood Pressure Systolic (mmHg)",
        name: "systolic_blood_pressure",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value) return "Systolic BP is required";
          const num = Number(value);
          if (num < 0 || num > 300) return "Must be between 0 and 300";
          return null;
        },
        type: "number",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["blood_pressure_measured"] === "Done"
      },
      {
        componentType: "inputField",
        header: "Blood Pressure Diastolic (mmHg)",
        name: "diastolic_blood_pressure",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value) return "Diastolic BP is required";
          const num = Number(value);
          if (num < 0 || num > 300) return "Must be between 0 and 300";
          return null;
        },
        type: "number",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["blood_pressure_measured"] === "Done"
      },
      {
        grid: { s: "4" }
      },
      // If BP Not Done - Reason
      {
        componentType: "multiSelectInputField",
        header: "Reason Not Done",
        name: "reason_not_done",
        trackBy: "id",
        isMultiple: false,
        obsValueType: "value_text",
        grid: { s: "8" },
        options: notDoneReasons,
        condition: (allFormValues) => allFormValues["blood_pressure_measured"] === "Not Done"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "textAreaField",
        header: "Specify Other Reason",
        name: "bp_not_done_other",
        obsValueType: "value_text",
        grid: { s: "8" },
        condition: (allFormValues) => {
          const reasons = allFormValues["reason_not_done"];
          return allFormValues["blood_pressure_measured"] === "Not Done" && Array.isArray(reasons) && reasons.some((r) => r.id === 6);
        }
      },
      {
        grid: { s: "4" }
      },
      // If BP Unrecordable - Reason
      {
        componentType: "inputField",
        header: "Reason BP Is Unrecordable",
        name: "reason_not_recorded",
        obsValueType: "value_text",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["blood_pressure_measured"] === "BP Unrecordable"
      },
      // Circulation Specific Trauma Section
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Circulation Specific Trauma",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is the patient injured?",
        name: "is_patient_traumatized",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // If Traumatized - Pelvis and Femur/Tibia
      {
        componentType: "radioButtonField",
        header: "Is the pelvis unstable?",
        name: "is_pelvis_stable",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => allFormValues["is_patient_traumatized"] === "Yes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Apply pelvic binder",
        message: "",
        value: "Apply pelvic binder",
        backgroundColor: "skyblue",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_patient_traumatized"] === "Yes" && allFormValues["is_pelvis_stable"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is the femur and tibia normal?",
        name: "is_femur_tibia_normal",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_patient_traumatized"] === "Yes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Use the diagram below to select the affected femur and tibia area",
        message: "",
        value: "Use the diagram below to select the affected femur and tibia area",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_patient_traumatized"] === "Yes" && allFormValues["is_femur_tibia_normal"] === "No"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "femurTibiaAbnormality",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_patient_traumatized"] === "Yes" && allFormValues["is_femur_tibia_normal"] === "No"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayFemurTibiaBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["is_patient_traumatized"] === "Yes" && formValues["is_femur_tibia_normal"] === "No" && formValues["bodyPartsDataFemurTibia"]?.length > 0;
        }
      },
      // Intravenous Section
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Intravenous Access",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Does the patient need intravenous access?",
        name: "patient_intravenous",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "8" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        grid: { s: "4" }
      },
      // If IV Access Needed
      {
        componentType: "multiSelectInputField",
        header: "Size of Intravenous Catheter",
        trackBy: "id",
        isMultiple: true,
        name: "size_of_catheter",
        obsValueType: "value_text",
        grid: { s: "4" },
        options: sizeOfCatheter,
        condition: (allFormValues) => allFormValues["patient_intravenous"] === "Yes"
      },
      // Peripheral Line Details
      {
        componentType: "multiSelectInputField",
        header: "Cannulation Site (Left/Right)",
        name: "cannulation_site",
        trackBy: "id",
        isMultiple: true,
        obsValueType: "value_text",
        grid: { s: "4" },
        options: sitesOfCannulation,
        condition: (allFormValues) => allFormValues["patient_intravenous"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      // Central Line Details
      {
        componentType: "multiSelectInputField",
        header: "Cannulation Site (Central Line)",
        name: "central_line_cannulation_site",
        trackBy: "id",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: centralLineCannulationSites,
        condition: (allFormValues) => {
          const catheters = allFormValues["size_of_catheter"];
          return allFormValues["patient_intravenous"] === "Yes" && Array.isArray(catheters) && catheters.some((c) => c.id === 6);
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Left Cannulation Site",
        name: "diagram_cannulation_site",
        isMultiple: true,
        trackBy: "id",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: diagramSitesOfCannulation,
        condition: (allFormValues) => {
          const sites = allFormValues["cannulation_site"];
          return allFormValues["patient_intravenous"] === "Yes" && Array.isArray(sites) && sites.length > 0 && sites.some((s) => s.id === 1);
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Right Cannulation Site",
        name: "diagram_cannulation_site",
        isMultiple: true,
        trackBy: "id",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: diagramSitesOfCannulation,
        condition: (allFormValues) => {
          const sites = allFormValues["cannulation_site"];
          return allFormValues["patient_intravenous"] === "Yes" && Array.isArray(sites) && sites.length > 0 && sites.some((s) => s.id === 2);
        }
      },
      // Circulation Specific Abdominal Findings
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Circulation Specific Abdominal Findings",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is there abdominal distention?",
        name: "abdominal_distention",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Is there any other abnormalities?",
        name: "is_there_any_other_abnormalities",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Use the diagram below to select the affected abdominal area",
        message: "",
        value: "Use the diagram below to select the affected abdominal area",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_there_any_other_abnormalities"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "abdominalAbnormality",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_there_any_other_abnormalities"] === "Yes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "displayAbdominalBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          return formValues["is_there_any_other_abnormalities"] === "Yes" && formValues["bodyPartsDataAbdominal"]?.length > 0;
        }
      },
      {
        grid: { s: "4" }
      },
      // Additional Notes
      {
        componentType: "textAreaField",
        header: "Additional Notes",
        name: "additional_notes",
        obsValueType: "value_text",
        grid: { s: "8" }
      }
    ];
  });
  return {
    circulationAssessmentFormSection
  };
};

const _hoisted_1$c = { style: { "text-align": "center" } };
const _hoisted_2$4 = {
  class: "ion-padding",
  style: { "display": "flex", "justify-content": "space-between" }
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "FemurAndTibiaPopover",
  props: {
    title: {}
  },
  setup(__props) {
    const props = __props;
    const formRef = ref(null);
    const descriptionNotesForm = [
      {
        componentType: "multiSelectInputField",
        name: "description",
        header: "Description",
        validation: StandardValidations.required,
        isMultiple: true,
        trackBy: "id",
        options: [
          {
            id: 1,
            name: "Deformity"
          },
          {
            id: 2,
            name: "Crepitus"
          },
          {
            id: 3,
            name: "Tenderness"
          }
        ]
      }
    ];
    const closePopover = (result) => {
      if (result === "save") {
        let formData = formRef.value?.getFormValues();
        formData.description = formData.description.map((d) => d.name).join(", ");
        popoverController.dismiss({ "Body Part": props.title, ...formData });
      } else {
        popoverController.dismiss();
      }
    };
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h4", _hoisted_1$c, toDisplayString(__props.title), 1),
        createVNode(StandardForm, {
          formData: descriptionNotesForm,
          ref_key: "formRef",
          ref: formRef
        }, null, 512),
        createBaseVNode("div", _hoisted_2$4, [
          createVNode(_component_ion_button, {
            color: "danger",
            onClick: _cache[0] || (_cache[0] = ($event) => closePopover("close"))
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode("Close", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_ion_button, {
            onClick: _cache[1] || (_cache[1] = ($event) => closePopover("save"))
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createTextVNode("Save", -1)
            ])]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});

const _hoisted_1$b = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "LowerLimbMaleAnteriorSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "femurAndTibia":
          popoverComponent = _sfc_main$d;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LowerLimbMalePosteriorSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "MALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[14] || (_cache[14] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-lower-1",
            d: "M2579.51,403.11c17.32,62.86,15.09,25.63,33.71,154.25s6.31,277.37-8.11,450.16-84.94,345.89-113.43,415.88-17.54,49.42-18.53,119.66-17.63,77.23-38.78,127.88,10.41,143.36,32.94,232.23,19.92,156.66,15.65,193.56-101.66,548.79-108.85,589.87-4.39,50.09,9.16,90.29-2.62,89-11.12,121.94c49.7,44.54,76.09,130.25,76.09,130.25s17.23,7.26,26.5,42.17-21.87,38.14-38.83,40.15c-14.77,24.23-54.16,15.39-61.8,15.54-25.75,23.23-45.35,10.84-65.15,3.37-44.79,31.91-64.12-17.14-64.12-17.14s-31.74,43.74-71.13,29.21-32.28-53.31-27.6-69,17.41-46.2,21.48-71.43,16.2-79.75,19.61-91.16,7.58-21-1.59-64.77,8-60.83,16-83.87,10.2-39,13.57-96.35-9.47-184-9.47-184-57-284.1-61.54-362.12,17-163.11,22.2-170.74,28.44-78.07,32.57-115.31-11.23-131.8-23-169-4.28-212.86-6.63-290.29-30.64-323.85-40.47-410.82-17.92-202-17.92-202-5.56,45.22-7.69,66.2c-5,48.91-29,261.61-35,313.69s-21.87,282.65-22.18,298-.83,180.81-3.73,219.53-16.1,68.27-18.72,80.39-15.53,71.84-1.42,115.87,48.38,183.38,53.14,229.62-25.65,206.31-54.76,341.61-17.64,259-15.29,292.94,17.27,55,27.9,75.86-3.82,78.6-6.53,97.07,24.73,120,30.57,147.78c16.73,20.54,21.19,51.25,16.17,72.07-30.74,64.85-84.81,22.92-98.16,2.48-21.52,43.53-54.7,21.26-66.73,15.71-35.17,16.25-59.4.59-69.45-3.55-49.06,13.3-51.42-21.57-60.3-17.81s-30.72-2.87-35.3-28,23.35-42,28.41-55.25,28.62-67,43.77-91.47,37.06-21.9,26.24-48-14.94-91.35-6.07-113.26,10-46.39,9.66-72.81-108.07-541.81-114.46-631.3,23.78-184.76,33.78-232.35,39.8-113.54,14.52-177.62-33.1-86.22-34.81-109.19-2.49-86.25-5.77-97.22c-136.08-324.66-125.65-439.28-141.38-629.25-13.21-159.56,13.89-320,38-412.43,4.58-17.62,111.25-7.71,151-7.71h793.27"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$b, [
          createBaseVNode("path", {
            id: "Right_Anterior_Region_of_Knee",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Right Anterior Region of Knee", $event)),
            "data-label": "Right Anterior Region of Knee",
            class: "cls-lower-2",
            d: "M2033.72,1470c-.57-34.76,1.32-68.81,3-102.77-119.08,13-212.7,9.15-320.61-3.45,6.54,14.5,19.74,49,40.6,101.78,1.29,3.24-8.54,93.3,8.84,134.14,27.83,50.55,38,88.82,34.81,119.15-1.59,15.08,3.36,18.91-9.91,80,133.08,12.81,216.38-5.12,216.38-5.12-1.53-38.42,13-86.13,21.45-120.17s5.08-140.35,5.1-145.7C2033.13,1515.7,2033.72,1470,2033.72,1470Z"
          }),
          createBaseVNode("path", {
            id: "Right_Femoral_Region_Scarpa",
            onClick: _cache[1] || (_cache[1] = ($event) => {
              handleBodyPartClick("Right Femoral Region; Scarpa", $event);
            }),
            "data-label": "Right Femoral Region; Scarpa",
            class: "cls-lower-2",
            d: "M2012,436c7.85,113.76,6,124.17,19.08,167.14,9.19,30.13,33.36,105.18,38.43,124.76-52.55,7-425.31-.77-462.94-4.08-.67-93.19,8.13-201.45,36.21-287.7C1739.09,434.78,1961.79,436,2012,436Z"
          }),
          createBaseVNode("path", {
            id: "Right_Anterior_Region_of_Thigh",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Right Anterior Region of Thigh", $event)),
            "data-label": "Right Anterior Region of Thigh",
            class: "cls-lower-2",
            d: "M2036.72,1365.28c1.43-42.22,9.43-145,9.43-145,3.77-49.57,17.56-158.81,23.06-207.08,12.17-107,21.55-198.71,22.82-256.67-.94-1.36-17.71-8-21.75-25.7-96.26,7.15-439.88-2-463.75-3.87,5.07,183.36,16.83,356,68.38,517.83,0,0,20.51,61.25,39.95,115.33C1806.05,1372.2,1909.13,1377.7,2036.72,1365.28Z"
          }),
          createBaseVNode("path", {
            id: "Right_Anterior_Region_of_Leg",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Right Anterior Region of Leg", $event)),
            "data-label": "Right Anterior Region of Leg",
            class: "cls-lower-2",
            d: "M2006,2450.13c-5.92,35.42-12.35,63.26-13.47,124.17-.37,20.25-3.25,53.4-2.38,80,1.26,38.52,2.38,75.91,10.3,104.25-14.8-1.18-34.47-4.34-72.64-3-55,1.94-67.58,6.78-73.79,6.06-1-.7,6.75-30.91,3.7-54.64-1.45-14.38-2.86-37.86-9.53-69.36-10.38-51.66-21.48-110-33.7-175.66,0,0-37.88-194.05-48.86-264.3-17-108.5-31.82-138.09-13.54-235.45,0,0,12-68.42,37.78-161.87,0,0,118.93,14.57,216.58-4.47-.85,12.92-.26,18,0,29.53.65,24.85,10.8,56.13,10.8,56.13,12.76,40.34,45.7,143,45.7,197.11-.44,28.81-3.62,94-20.43,179.23C2021.13,2366.64,2006,2450.13,2006,2450.13Z"
          }),
          createBaseVNode("path", {
            id: "Right_Anterior_Talocrural_Region_Anterior_Ankle_Region",
            onClick: _cache[4] || (_cache[4] = ($event) => {
              handleBodyPartClick("Right Anterior Talocrural Region; Anterior Ankle Region", $event);
            }),
            "data-label": "Right Anterior Talocrural Region; Anterior Ankle Region",
            class: "cls-lower-2",
            d: "M1845.21,2783.57c2.79-8.85,6-17.71,9.35-19.1,12.55-4.15,61.28-7.13,76.44-7.19,20.93-.09,50.51.62,70.4,3.63,6.9,6.84,10.88,16.41,15.5,25,1.5,2.79,6.27,18.19,7.29,31.34-3.74,41.61-13.28,50.81-8.93,76.34-25,10.22-61.28-15.58-97.54-8.17-16.69,3.41-60.63,15.88-62.29,9.19C1850.54,2875.54,1836.53,2811.15,1845.21,2783.57Z"
          }),
          createBaseVNode("path", {
            id: "Right_Dorsum_of_Foot_Dorsal_Region_of_Foot",
            onClick: _cache[5] || (_cache[5] = ($event) => {
              handleBodyPartClick("Right Dorsum of Foot; Dorsal Region of Foot", $event);
            }),
            "data-label": "Right Dorsum of Foot; Dorsal Region of Foot",
            class: "cls-lower-2",
            d: "M1855.34,2902.47c-3.56,5.83-11.9,17.3-27.9,37-12.14,15-20.4,29.95-30.31,52.83-3.64,9.16-7,20.6-11.49,32.17-3.84,9.84-8.21,11.45-17.79,21.83.23,5,16.29,12.26,40.33,11.07,38.12-1.9,42.65,7.1,64.69,12,9.17,2.05,30.39,2.94,52.26,1.53,15.28-1,39.45-5.8,53.31-5.3,20.75.75,16.89,6.86,31,9.73,21.34,4.34,24.31,0,33.36-4.28,7.39-3.49,14.1-4.89,13.72-6.39-1.51-5.89-10.1-14.55-13.15-32.48-1.28-7.52-4.15-28.5-6.72-44.17-2-12.43-4.09-31.83-12.56-58.35-4.85-15.19-6.34-28.89-8.63-34-27.83,10.09-69.37-16.55-98.64-7.21C1895.22,2895.41,1856.36,2899.23,1855.34,2902.47Z"
          }),
          createBaseVNode("path", {
            id: "Right_Digits_of_Foot_Toes",
            onClick: _cache[6] || (_cache[6] = ($event) => {
              handleBodyPartClick("Right Digits of Foot; Toes", $event);
            }),
            "data-label": "Right Digits of Foot; Toes",
            class: "cls-lower-2",
            d: "M1933.62,3139.54c-21.25-5.83-26.87-5.89-49-4.19a60.94,60.94,0,0,1-24.16-3c-10.33-3.49-21.82-6.72-30.78-6.34-10.29.43-39.24-2.43-47.23-15.34-4.55-7.34-26.5-8.55-29.83-13.34,0,0-22.64-18.18-2.66-48.83,11-9.25,18.67,14.63,56.37,12.39s37.27,7.44,77.28,12.83c29.26,4,84.15-6.57,99.85-4.58,15,2.2,20.5,10.45,39.11,11.05s19.75-7.62,34.36-13.36c11.53-3.17,14.09,7.64,14.46,22.13s2.8,45.18-28,53.55c-21.16,5.75-44.94-3-69.91-27C1973.47,3115.53,1958.45,3146.35,1933.62,3139.54Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Region_of_Knee",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Left Anterior Region of Knee", $event)),
            "data-label": "Left Anterior Region of Knee",
            class: "cls-lower-2",
            d: "M2182.64,1470c.57-34.76-1.32-68.81-3-102.77,119.08,13,212.7,9.15,320.61-3.45-6.54,14.5-19.74,49-40.6,101.78-1.29,3.24,8.54,93.3-8.84,134.14-27.83,50.55-38,88.82-34.81,119.15,1.59,15.08-3.36,18.91,9.92,80-133.09,12.81-216.39-5.12-216.39-5.12,1.53-38.42-13-86.13-21.45-120.17s-5.08-140.35-5.1-145.7C2183.23,1515.7,2182.64,1470,2182.64,1470Z"
          }),
          createBaseVNode("path", {
            id: "Left_Femoral_Region_Scarpa",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Left Femoral Region Scarpa", $event)),
            "data-label": "Left Femoral Region Scarpa",
            class: "cls-lower-2",
            d: "M2204.4,436c-7.85,113.76-6,124.17-19.08,167.14-9.19,30.13-33.36,105.18-38.43,124.76,52.55,7,425.31-.77,462.94-4.08.67-93.19-8.13-201.45-36.21-287.7C2477.27,434.78,2254.58,436,2204.4,436Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Region_of_Thigh",
            onClick: _cache[9] || (_cache[9] = ($event) => handleBodyPartClick("Left Anterior Region of Thigh", $event)),
            "data-label": "Left Anterior Region of Thigh",
            class: "cls-lower-2",
            d: "M2179.64,1365.28c-1.43-42.22-9.43-145-9.43-145-3.77-49.57-17.56-158.81-23.06-207.08-12.17-107-21.55-198.71-22.82-256.67.94-1.36,17.71-8,21.75-25.7,96.26,7.15,439.88-2,463.75-3.87-5.07,183.36-16.83,356-68.38,517.83,0,0-20.51,61.25-39.95,115.33C2410.31,1372.2,2307.23,1377.7,2179.64,1365.28Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Region_of_Leg",
            onClick: _cache[10] || (_cache[10] = ($event) => handleBodyPartClick("Left Anterior Region of Leg", $event)),
            "data-label": "Left Anterior Region of Leg",
            class: "cls-lower-2",
            d: "M2210.36,2450.13c5.92,35.42,12.35,63.26,13.47,124.17.37,20.25,3.25,53.4,2.38,80-1.26,38.52-2.38,75.91-10.3,104.25,14.8-1.18,34.47-4.34,72.64-3,55,1.94,67.58,6.78,73.79,6.06,1-.7-6.75-30.91-3.7-54.64,1.45-14.38,2.86-37.86,9.53-69.36,10.38-51.66,21.48-110,33.7-175.66,0,0,37.88-194.05,48.86-264.3,17-108.5,31.82-138.09,13.54-235.45,0,0-12-68.42-37.78-161.87,0,0-118.93,14.57-216.58-4.47.85,12.92.26,18,0,29.53-.65,24.85-10.8,56.13-10.8,56.13-12.76,40.34-45.7,143-45.7,197.11.44,28.81,3.62,94,20.43,179.23C2195.23,2366.64,2210.36,2450.13,2210.36,2450.13Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Talocrural_Region_Anterior_Ankle_Region",
            onClick: _cache[11] || (_cache[11] = ($event) => {
              handleBodyPartClick("Left Anterior Talocrural Region; Anterior Ankle Region", $event);
            }),
            "data-label": "Left Anterior Talocrural Region; Anterior Ankle Region",
            class: "cls-lower-2",
            d: "M2371.15,2783.57c-2.79-8.85-6-17.71-9.35-19.1-12.55-4.15-61.28-7.13-76.44-7.19-20.93-.09-50.51.62-70.4,3.63-6.9,6.84-10.88,16.41-15.5,25-1.5,2.79-6.27,18.19-7.29,31.34,3.74,41.61,13.28,50.81,8.93,76.34,25,10.22,61.28-15.58,97.54-8.17,16.69,3.41,60.63,15.88,62.29,9.19C2365.82,2875.54,2379.83,2811.15,2371.15,2783.57Z"
          }),
          createBaseVNode("path", {
            id: "Left_Dorsum_of_Foot_Dorsal_Region_of_Foot",
            onClick: _cache[12] || (_cache[12] = ($event) => {
              handleBodyPartClick("Left Dorsum of Foot; Dorsal Region of Foot", $event);
            }),
            "data-label": "Left Dorsum of Foot; Dorsal Region of Foot",
            class: "cls-lower-2",
            d: "M2361,2902.47c3.56,5.83,11.9,17.3,27.9,37,12.14,15,20.4,29.95,30.31,52.83,3.64,9.16,7,20.6,11.49,32.17,3.84,9.84,8.21,11.45,17.79,21.83-.23,5-16.29,12.26-40.33,11.07-38.12-1.9-42.65,7.1-64.69,12-9.17,2.05-30.39,2.94-52.26,1.53-15.28-1-39.45-5.8-53.31-5.3-20.75.75-16.89,6.86-31,9.73-21.34,4.34-24.31,0-33.36-4.28-7.39-3.49-14.1-4.89-13.72-6.39,1.51-5.89,10.1-14.55,13.15-32.48,1.28-7.52,4.15-28.5,6.72-44.17,2.05-12.43,4.09-31.83,12.56-58.35,4.85-15.19,6.34-28.89,8.63-34,27.83,10.09,69.37-16.55,98.64-7.21C2321.15,2895.41,2360,2899.23,2361,2902.47Z"
          }),
          createBaseVNode("path", {
            id: "Left_Digits_of_Foot_Toes",
            onClick: _cache[13] || (_cache[13] = ($event) => {
              handleBodyPartClick("Left Digits of Foot; Toes", $event);
            }),
            "data-label": "Left Digits of Foot; Toes",
            class: "cls-lower-2",
            d: "M2282.74,3139.54c21.25-5.83,26.87-5.89,49-4.19a60.94,60.94,0,0,0,24.16-3c10.33-3.49,21.82-6.72,30.78-6.34,10.29.43,39.24-2.43,47.23-15.34,4.55-7.34,26.5-8.55,29.83-13.34,0,0,22.64-18.18,2.66-48.83-11-9.25-18.67,14.63-56.37,12.39s-37.27,7.44-77.28,12.83c-29.26,4-84.15-6.57-99.85-4.58-14.95,2.2-20.5,10.45-39.11,11.05s-19.75-7.62-34.36-13.36c-11.53-3.17-14.09,7.64-14.46,22.13s-2.8,45.18,28,53.55c21.16,5.75,44.94-3,69.91-27C2242.89,3115.53,2257.91,3146.35,2282.74,3139.54Z"
          })
        ]),
        _cache[15] || (_cache[15] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-fbd959a3><path class="cls-lower-3" d="M2079.32,731c-15.42,6.57-33.58,14.8-50.36,7.52-12.49-5.61-20.18-20.58-22.82-33.37-3.23-20,6-39.14,15.27-56.23.72-1.55,1.77-3.59,2.36-5.17,14.71-38-7.07-78.75-28-110.32-4.59-6.78-9.57-13.65-13.93-20.63-8.93-14-17.24-28.34-25.52-42.71s-16.34-28.84-22.44-44.51c16.67,18.83,29.6,39.89,43.78,60.38,6.35,9.39,12.75,18.74,19,28.2,7.74,11.14,15.49,22.32,22.14,34.23,17.17,30.22,30.07,69.1,14.43,102.79-3.1,6.43-7,12.7-9.78,19.26-4.57,10.6-8.3,21.62-6.64,32.92,2,9.95,7.42,22.26,16.21,27.32,13.39,7.38,31.66,1.83,46.38.32Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2151.55,733.43c9,.69,20.37,3.1,29.11.63,5.19-1.44,9.22-4.58,12.89-8.65a78.49,78.49,0,0,0,6.84-9,32,32,0,0,0,4.83-9.21c3.81-13.91-2.92-29.48-9.14-42.35-1.25-2.52-2.75-5.31-4.14-7.78-11.54-19.79-12.33-44.28-6.5-66,7.42-28.42,23.16-53,39.78-76.6,11.09-16.77,22.49-33.37,33.82-50.05,9-13.38,18.24-26.66,29.17-38.91-5.95,15.3-13.77,29.48-21.85,43.49-10.12,17.54-20.24,35.1-31.5,52-21.67,31.05-45.22,67.46-40.78,106.78a65.47,65.47,0,0,0,6.6,21.15c1.72,3.19,4.1,7.58,5.66,10.81,5.52,11.36,10.35,23.82,10.85,36.84a37.55,37.55,0,0,1-8.44,25.77c-5.25,6.87-11.67,13.83-20.05,17-12.7,4.76-25.7-.77-37.15-6Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M1810,1444.3c1.33,48.88,2,98.14,11,146.25,2.39,11.39,5.25,23.46,11.06,33.41,3,5.17,7.57,8.3,11.82,12.15a159.68,159.68,0,0,0,14,11.11c12.93,9.28,25.82,10.31,41.08,6.48,8.92-2.09,17.51-5.21,26.2-8.27l.12.24c-10.69,6.48-21.77,12.32-34.09,15.26-17.36,4.39-32.09-1.67-45.61-12.37-5-3.79-9.65-7.88-14.33-12a34.63,34.63,0,0,1-6.59-8.16c-22-38.42-18.85-138.71-14.69-184.12Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M1935.91,1456.71c32.8,45.5,45.48,117.27,8.86,164,1.28-3.23,3-6.66,4.1-10l1.86-5,1.59-5.07c14.53-48,1.65-98.67-16.41-144Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2405.37,1444.3c4.14,45.25,7.35,145.64-14.69,184.12a34.63,34.63,0,0,1-6.59,8.16c-4.68,4.1-9.34,8.19-14.33,12-13.49,10.69-28.28,16.76-45.61,12.37-12.32-2.94-23.4-8.78-34.09-15.26l.12-.24c8.69,3.06,17.29,6.18,26.2,8.27,15.26,3.83,28.16,2.8,41.08-6.48a161.29,161.29,0,0,0,14-11.11c4.24-3.85,8.85-7,11.81-12.15,5.81-10,8.67-22,11.06-33.41,9-48.11,9.69-97.37,11-146.25Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2279.48,1456.71c-18.05,45.32-30.94,96-16.4,144l1.58,5.07,1.86,5c1.14,3.28,2.82,6.72,4.1,10-36.61-46.74-23.95-118.5,8.86-164Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2067.22,551.57c.75,25.06-2,115.09,13.44,130.7l3.57,3.17-3.88,2.47c-11.32,6.83-9.62,15.57-6.18,26.76,3.06,10.44,7.38,21.5,15.81,28.33,8.42,7.12,20,8.15,30.6,7,7.18-.71,14.35-2,20.14-6.35,12.29-9.26,17.6-35.73,22.09-50.6l-.11.68a2.77,2.77,0,0,0-.39-1.83c-2.37-2.5-6.59-2.71-9.84-4.52l-1.85-.92c0-1.4-.3-3,.53-4.4a4.84,4.84,0,0,1,1.1-1.3c3.74-2.77,4.85-7.65,6.26-12,4.24-16.1,5.67-32.94,7.15-49.59,2.05-22.47,2-45,4.15-67.52a336.6,336.6,0,0,1,1.34,33.89c-.05,22.68-.39,45.31-3.17,67.91-1.39,9.22-3.32,26.73-11.21,32.6a1.77,1.77,0,0,0,.4-.51,2.58,2.58,0,0,0,.34-1.35l-1.89-3c6.48,2.68,14.66,4,14,13.33-2.1,7.63-4.2,15.27-6.64,22.89-3.9,11.5-8,24-18.06,31.76-6.83,5.23-15.47,7-23.68,7.73s-16.63.74-24.55-2.18c-16.59-5.79-24.73-22.16-29.16-38-4.59-14.18-5-26,9.11-34.65l-.31,5.64c-12.33-10.66-12.16-52-12.54-68.25.22-22.54.18-45.88,3.44-67.87Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2113.67,729.56s.73,6.11-1,8.67-3.67,8.47,1.32,8.27,4.4-3.54,3.23-7.29S2114.78,729.36,2113.67,729.56Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M1771.79,3103s0,.06,0,.05a12,12,0,0,0,2.84-.36,26.17,26.17,0,0,0,9.54-4.14,25.4,25.4,0,0,0,9.22-12.09l.8.1a30.35,30.35,0,0,1-3.42,17.44,37.54,37.54,0,0,1-13.24,14.2,5.21,5.21,0,0,1-.47.23l-5.28-15.43Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M1823.68,3119.7a27.31,27.31,0,0,0,13.08-11.6,27.91,27.91,0,0,0,3.28-11.21l.81-.07c3.11,11.61-1.8,24.3-10.62,32.22-.17.14-.33.29-.61.49l-5.94-9.83Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M1891.16,3126.55a27.22,27.22,0,0,0,14.44-9.85,28,28,0,0,0,4.68-10.71l.81,0c1.62,11.91-4.86,23.88-14.61,30.62a6.77,6.77,0,0,1-.66.41l-4.66-10.5Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M1962.59,3120.22l0,.09s0,0,0,0a3,3,0,0,0,.33-.24,62.44,62.44,0,0,0,12.1-17c1.21-2.39,2.3-4.85,3.33-7.35l1,.06c2.82,11,4.12,23.54.18,34.56a8.39,8.39,0,0,1-.41.86l-16.58-11Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2439,3118.45c-10.93-6.36-18.61-19.14-17.13-31.87l.8-.1a25.41,25.41,0,0,0,15.48,15.31,20.64,20.64,0,0,0,6.12,1.28c.1-.34-5.3,15.45-5.27,15.38Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2386.46,3129.53c-9.25-7.81-14.39-20.87-11.23-32.71l.81.07a26.46,26.46,0,0,0,5.37,14.32,26.77,26.77,0,0,0,11,8.49l-5.94,9.83Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2320.26,3137.05c-10.16-6.58-16.91-18.88-15.27-31l.81,0a26.66,26.66,0,0,0,19.12,20.56l-4.66,10.5Z" data-v-fbd959a3></path><path class="cls-lower-3" d="M2236.91,3131.22a21.42,21.42,0,0,1-1.71-5.12,61.78,61.78,0,0,1-.27-22.11,77.73,77.73,0,0,1,1.75-8.19l1-.06c3.71,9,8.56,17.88,15.67,24.51l.09.05s.05,0,0,0c.11-.35-16.59,11-16.6,10.91Z" data-v-fbd959a3></path><path class="cls-lower-4" d="M2105.91,753.4S2059,1198.13,2053.39,1281s-5.1,233.94-8.37,304.07-6.49,95.18-19.82,142.19-19.29,76.55-5.72,121.32,70.79,171.83,49.33,310.74-56.16,278.15-61.13,344.87-13.93,168.38-1.42,230.51c6.73,24.05,33.53,55.59,26.4,97.89s-12.37,60.67,2.57,97.85,13.88,83,17.89,97.56,37.64,66.67,10.84,102.34-77.65,10.59-89.38-10.19c-4.25,0-25.52,40.61-64,12.22-11.85-7.76-29.72,21.15-73.07-10.09-7.9-.2-18.08,21.68-56.89-11.79-27.65,5.92-54.61-30.6-35.86-57.2s30.92-28.06,35.72-46.84,27.81-70.36,59.89-102.59c10.64-13.85-22.92-60.32-6.4-128.23s13.42-64.84-1.45-144.59-100.34-486.23-101.46-550.93c-5.67-111.29,27.56-210.14,54.22-329.23,11.35-116-33.55-103.3-41.36-192s11.28-61.13-18.62-134.49-128.73-296-129.17-662.4C1592.88,522.21,1637,403.08,1637,403.08h942.42s44.06,119.13,40.81,358.94c-.45,366.44-99.27,589-129.17,662.4s-10.82,45.79-18.63,134.49-52.7,76-41.36,192c26.67,119.09,59.89,217.94,54.23,329.23-1.12,64.7-86.6,471.19-101.47,550.93s-18,76.67-1.44,144.59-17,114.38-6.4,128.23c32.08,32.23,55.08,83.81,59.88,102.59s17,20.24,35.72,46.84-8.2,63.12-35.85,57.2c-38.81,33.47-49,11.59-56.89,11.79-43.35,31.24-61.22,2.33-73.08,10.09-38.46,28.39-59.73-12.22-64-12.22-11.73,20.78-62.57,45.86-89.38,10.19s6.83-87.79,10.84-102.34,3-60.37,17.89-97.56,9.71-55.56,2.57-97.85,19.67-73.84,26.4-97.89c12.51-62.13,3.55-163.8-1.42-230.51s-39.68-206-61.13-344.87,35.76-266,49.33-310.74,7.61-74.31-5.72-121.32-16.55-72.06-19.82-142.19-2.74-221.16-8.37-304.07-52.09-527.17-52.09-527.17" data-v-fbd959a3></path></g>', 1))
      ], 16);
    };
  }
});

const LowerLimbMaleAnteriorSVG = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-fbd959a3"]]);

const _hoisted_1$a = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "LowerLimbFemaleAnteriorSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "femurAndTibia":
          popoverComponent = _sfc_main$d;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "LowerLimbFemaleAnteriorSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[14] || (_cache[14] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            className: "cls-lowerLimbFemaleAnterior-1",
            d: "M2665.66,416.58c7.14,17.49,11.18,40.56,14.73,59.25,27.22,129.41,23.72,194.55,19.62,266.56-10.74,188.82-106.27,461.26-110,472.08s-88.67,225.37-129.17,402.92c-13.84,60.68-2,179.2,16.69,305.73,23,200.74-4.82,337.9-7.77,358.91s-43.71,273.21-50.93,305.43-31.33,127.8-27.33,187.44c2.71,40.4,14.93,68.77,1.46,121.15,7.35,25.57,34.45,92.26,50,115.26s28.9,30.42,32.27,57.08-10.91,30.55-20.09,33.36-24.66,11.27-37.45,18.05-31.57,2.69-46.44,5-22.13,13-32.74,12.8-27.3-.54-42.85-3.28-29.59-1.32-49,3.13c-24.79,6.1-33.41-1.34-44.21-8.5-17.76-11.75-26.21-39.16-26.68-51.32-.76-19.56,26.88-105.73,41.93-145.72-2.34-91.95,6.07-136.55,12.92-153s4-139.5,5.93-191.12-36.92-363.14-46.22-448.29,11.52-230.38,17.58-269,6.17-270.82,9.5-358-14.91-277.58-23.87-404.37-7.44-248.85,4.78-332.16,23.53-113.86,23.53-113.86-32.36-1.53-52.21-24.59c-11.79,18.16-32.26,21-53.53,23,25,40.94,36.33,294.48,36.22,322s-11.91,243.52-16.38,287.39c-17.65,173.49-11.89,274.29-11.89,274.29s.27,232.86,8.1,318.65c1.94,21.31,9.45,60.17,13.58,99.74,3.39,32.53,4.45,63.65,5.23,89.31,1.87,61.22-7.41,140.24-10.69,167.43-1.64,13.68-14.67,107-22.94,197-8.17,88.85-14.36,154.16-14.94,185-.38,20.9.33,154.76,4.92,172.76s15.9,50.18,13.82,107.7c-1.56,43.17-2.55,44.81,3.12,57.2s37.83,110.21,38.26,132.17c1.41,30.59-2.06,38.12-8.9,50.85-8.88,16.49-42.92,31.29-64.72,18.11-17.5-10.58-23.57-2.94-41-2.09-7.67.37-17.13-5.07-30.43-3.66-12.92,1.37-20.41,4.77-25.74,3-12.64-4.19-15.8-13.54-28.13-12.8-23.9,6.74-49-10.12-56.68-12.38s-23.63,2.05-35.07-14.6c-17-24.77.2-52.68.2-52.68s15.24-23.12,26.08-34.23,16.08-28.42,22.46-44.81,28.92-55.35,26.71-71.43c-1.89-13.75-2.82-35.19-5.55-58.27-2.11-17.87,9.06-65,7.35-86.72s-28.84-171.06-47.16-265.48-48-325.63-50.16-386,23.5-315.48,31.56-341.14-5.29-136.53-5.29-148.56c0-5.56-14.67-82.61-58.66-201.58-45.76-123.79-99.76-277.92-129.62-381.23-53.83-206.19-52.82-308.88-52.29-401s19.45-149.27,30.24-183.27c6.86-21.63,5.46-18.13,10.1-27.46Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$a, [
          createBaseVNode("path", {
            id: "Right_Anterior_Region_of_Knee",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Right Anterior Region of Knee", $event)),
            "data-label": "Right Anterior Region of Knee",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2112.79,1627c-.57-34.76-1-69.28-1-101.37-114.45,24.5-237.15,14.49-237.15,14.49,11.81,42.51,21,106.92,23.9,140.45.63,7.37-1.31,58.58-7.38,116-1.6,15.08-3.33,30.63-5.09,46,133.08,12.81,233.08-3.44,233.08-3.44-5.52-71.89-6.16-147.44-6.12-157.84C2112.79,1669.08,2112.79,1627,2112.79,1627Z"
          }),
          createBaseVNode("path", {
            id: "Right_Femoral_Region_Scarpa",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Right Femoral Region Scarpa", $event)),
            "data-label": "Right Femoral Region Scarpa",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2032.36,438.42C2051.45,586.32,2081.89,588,2095,631c9.19,30.13,18.76,77.43,23.83,97-52.13,3.07-427.43.24-465.06-3.06-3.73-91.83,1.72-201,31.76-286.42C1781.87,437.19,1982.19,438.42,2032.36,438.42Z"
          }),
          createBaseVNode("path", {
            id: "Right_Anterior_Region_of_Thigh",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Right Anterior Region of Thigh", $event)),
            "data-label": "Right Anterior Region of Thigh",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2111.77,1523.89c0-27.14-.59-52.75,0-75.1-1.15-44.67,12.76-225.66,12.76-225.66,3.77-49.57,12-158.07,14-206.6,5.47-129.4-5.8-202.44-18.63-283.4-96.26,7.15-441.9-1.92-465.76-3.79,7.81,169.32,68.18,358.27,116.19,506.58l7.09,20.95c28.72,83.08,53.93,149.33,73.37,203.41,9.43,30.56,17,56.12,23,77.9C1873.85,1538.18,2007.32,1547.05,2111.77,1523.89Z"
          }),
          createBaseVNode("path", {
            id: "Right_Anterior_Region_of_Leg",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Right Anterior Region of Leg", $event)),
            "data-label": "Right Anterior Region of Leg",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2100,2496.3c-5.88,64.48-8.58,210.16-1.13,277.1a3.58,3.58,0,0,1-3.94,4.1c-17.55-1.24-53.88-3.16-62.85-3-18.41.35-70.67,5.32-71.87,2.65-1.91-1.29,8-25.88-6.49-94.07-12.34-51.49-21.8-111.37-34-177.06,0,0-33.69-192.4-42.57-262.94-13.6-107.93-16.69-165.41-10.47-239.75,0,0,13.13-106.6,18.89-156.61,0,0,136.34,14.19,234-4.85,19.12,110.83,20.09,170.75,20.09,170.75,1.28,27.93,1.52,55.89,1.52,87C2140.2,2161.28,2100,2496.3,2100,2496.3Z"
          }),
          createBaseVNode("path", {
            id: "Right_Anterior_Talocrural_Region_Anterior_Ankle_Region",
            onClick: _cache[4] || (_cache[4] = ($event) => {
              handleBodyPartClick("Right Anterior Talocrural Region; Anterior Ankle Region", $event);
            }),
            "data-label": "Right Anterior Talocrural Region; Anterior Ankle Region",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M1956.24,2797c2.06-9-.43-13.86,8.55-16.19,9.22-2.38,52.13-4.06,67.29-4.13,20.93-.09,43,0,62.87,3,7.66,2.53,6.56,2.72,10.28,15.46.89,3,2,6.55,3.36,10.57,6.53,28.36,6,74.86-5.24,82-25,10.22-52.13-22.09-90.68-11.25-16.4,4.61-51.62,19.59-57.51-3.44C1950.28,2853.91,1949.53,2826.59,1956.24,2797Z"
          }),
          createBaseVNode("path", {
            id: "Right_Dorsum_of_Foot_Dorsal_Region_of_Foot",
            onClick: _cache[5] || (_cache[5] = ($event) => {
              handleBodyPartClick("Right Dorsum of Foot; Dorsal Region of Foot", $event);
            }),
            "data-label": "Right Dorsum of Foot; Dorsal Region of Foot",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M1960.27,2893.91c-3.56,5.84-4.78,18.35-16.43,43.31-8.15,17.48-15.06,35-25,57.85-6.08,15.3-26.42,35.12-31.43,41.24-12.35,14.58,3.21,17.09,16.8,24.19,8.15,4.26,30.64-1,42.32,2.7a334.53,334.53,0,0,0,49.71,11.43c17,2.61,42.44-2.86,58-1.12,21.06,2.35,36-9.19,48.78-4.78,43.29,14.91,46.4-9.52,40-47.27-1.28-7.52-8-26.49-12.66-41.67-5.21-16.93-12-34.15-14.93-41.51-3.53-8.81-2.52-18.42-2.32-28.28.34-17.1.7-27.72-1.56-26.52-21.36,26.9-68.2-16.7-94.43-5C1995.93,2886.4,1964.72,2886.61,1960.27,2893.91Z"
          }),
          createBaseVNode("path", {
            id: "Right_Digits_of_Foot_Toes",
            onClick: _cache[6] || (_cache[6] = ($event) => {
              handleBodyPartClick("Right Digits of Foot; Toes", $event);
            }),
            "data-label": "Right Digits of Foot; Toes",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2047.76,3135.74c-9-.51-13.73-3.35-30.29-1.77-11.45,1.1-23.3,1-32.4-3-11-4.42-11.14-8.44-22.29-7.92-9.21.43-32.69,2.43-50-9.63-6.89-4.8-36.53-11.18-39.51-16,0,0-15.15-13.36,2.73-44,9.86-9.25,14.85,13.65,48.58,11.41s31.33,7.83,67.12,13.22c26.19,3.95,37.89-3.26,72.27-.2,0,0,16.86,1,26.41-4.44,4.83-2.74,28,1.78,32.3,2.88,9.22,2.39,19.6-.46,24.55-14.6,10.44-28.63,14.12,10.42,14.45,24.91s-1.73,39.33-23.22,49.72c-18.94,5.75-33.09,7.55-41.63,3.42,0,0-16.7-7.15-23.5-9.39S2056.71,3136.25,2047.76,3135.74Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Region_of_Knee",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Left Anterior Region of Knee", $event)),
            "data-label": "Left Anterior Region of Knee",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2230.09,1627c.57-34.76,1-69.28,1-101.37,114.45,24.5,237.14,14.49,237.14,14.49-11.81,42.51-21,106.92-23.89,140.45-.63,7.37,1.3,58.58,7.37,116,1.6,15.08,3.33,30.63,5.1,46-133.09,12.81-233.09-3.44-233.09-3.44,5.52-71.89,6.17-147.44,6.12-157.84C2230.09,1669.08,2230.09,1627,2230.09,1627Z"
          }),
          createBaseVNode("path", {
            id: "Left_Femoral_Region_Scarpa",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Left Femoral Region Scarpa", $event)),
            "data-label": "Left Femoral Region Scarpa",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2310.52,438.42C2291.44,586.32,2261,588,2247.88,631c-9.19,30.13-18.76,77.43-23.83,97,52.14,3.07,427.43.24,465.06-3.06,3.74-91.83-1.71-201-31.75-286.42C2561,437.19,2360.69,438.42,2310.52,438.42Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Region_of_Thigh",
            onClick: _cache[9] || (_cache[9] = ($event) => handleBodyPartClick("Left Anterior Region of Thigh", $event)),
            "data-label": "Left Anterior Region of Thigh",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2231.11,1523.89c0-27.14.59-52.75,0-75.1,1.14-44.67-12.76-225.66-12.76-225.66-3.77-49.57-12-158.07-14.05-206.6-5.46-129.4,5.8-202.44,18.64-283.4,96.25,7.15,441.89-1.92,465.76-3.79-7.81,169.32-68.18,358.27-116.19,506.58l-7.09,20.95c-28.73,83.08-53.94,149.33-73.38,203.41-9.43,30.56-17,56.12-23,77.9C2469,1538.18,2335.56,1547.05,2231.11,1523.89Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Region_of_Leg",
            onClick: _cache[10] || (_cache[10] = ($event) => handleBodyPartClick("Left Anterior Region of Leg", $event)),
            "data-label": "Left Anterior Region of Leg",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2242.88,2496.3c5.88,64.48,8.59,210.16,1.13,277.1a3.58,3.58,0,0,0,3.95,4.1c17.54-1.24,53.88-3.16,62.85-3,18.4.35,70.66,5.32,71.86,2.65,1.91-1.29-8-25.88,6.49-94.07,12.35-51.49,21.81-111.37,34-177.06,0,0,33.69-192.4,42.58-262.94,13.59-107.93,16.68-165.41,10.46-239.75,0,0-13.13-106.6-18.88-156.61,0,0-136.35,14.19-234-4.85-19.12,110.83-20.09,170.75-20.09,170.75-1.27,27.93-1.51,55.89-1.51,87C2202.68,2161.28,2242.88,2496.3,2242.88,2496.3Z"
          }),
          createBaseVNode("path", {
            id: "Left_Anterior_Talocrural_Region_Anterior_Ankle_Region",
            onClick: _cache[11] || (_cache[11] = ($event) => {
              handleBodyPartClick("Left Anterior Talocrural Region; Anterior Ankle Region", $event);
            }),
            "data-label": "Left Anterior Talocrural Region; Anterior Ankle Region",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2386.64,2797c-2-9,.44-13.86-8.55-16.19-9.22-2.38-52.12-4.06-67.28-4.13-20.94-.09-43,0-62.87,3-7.66,2.53-6.56,2.72-10.29,15.46-.88,3-2,6.55-3.35,10.57-6.54,28.36-6,74.86,5.24,82,25,10.22,52.12-22.09,90.68-11.25,16.4,4.61,51.61,19.59,57.5-3.44C2392.61,2853.91,2393.36,2826.59,2386.64,2797Z"
          }),
          createBaseVNode("path", {
            id: "Left_Dorsum_of_Foot_Dorsal_Region_of_Foot",
            onClick: _cache[12] || (_cache[12] = ($event) => {
              handleBodyPartClick("Left Dorsum of Foot; Dorsal Region of Foot", $event);
            }),
            "data-label": "Left Dorsum of Foot; Dorsal Region of Foot",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2382.61,2893.91c3.56,5.84,4.78,18.35,16.43,43.31,8.16,17.48,15.07,35,25,57.85,6.08,15.3,26.43,35.12,31.43,41.24,12.35,14.58-3.21,17.09-16.79,24.19-8.15,4.26-30.65-1-42.33,2.7a334.24,334.24,0,0,1-49.71,11.43c-17,2.61-42.43-2.86-58-1.12-21.07,2.35-36-9.19-48.79-4.78-43.29,14.91-46.39-9.52-40-47.27,1.28-7.52,8-26.49,12.67-41.67,5.2-16.93,12-34.15,14.93-41.51,3.52-8.81,2.51-18.42,2.31-28.28-.34-17.1-.7-27.72,1.57-26.52,21.35,26.9,68.19-16.7,94.43-5C2347,2886.4,2378.16,2886.61,2382.61,2893.91Z"
          }),
          createBaseVNode("path", {
            id: "Left_Digits_of_Foot_Toes",
            onClick: _cache[13] || (_cache[13] = ($event) => {
              handleBodyPartClick("Left Digits of Foot; Toes", $event);
            }),
            "data-label": "Left Digits of Foot; Toes",
            class: "cls-lowerLimbFemaleAnterior-2",
            d: "M2255,3135.27c-8.54,4.13-22.23,3.12-41.17-2.63-27.55-8.37-36.61-30.81-36.28-45.29s7.66-54.32,18.1-25.69c5,14.14,15.33,17,24.55,14.6,4.28-1.1,24.29-7.65,29.12-4.92,9.55,5.41,29.59,6.48,29.59,6.48,34.38-3.06,46.09,4.15,72.27.2,35.79-5.39,33.39-15.46,67.12-13.22s38.73-20.66,48.59-11.41c17.87,30.65,3.87,35.71,1.24,44.5s-35,6.08-39.07,13.42c-7.15,12.91-22.52,13.94-31.59,12.31-20.23-3.65-28.63,2.88-39.67,7.3-12.53,5.59-27.46,1.24-40.47.4-10.1-.65-19.33,2.6-23.5,3-7.43.67-27.35-4.05-38.83,1"
          })
        ]),
        _cache[15] || (_cache[15] = createBaseVNode("g", {
          id: "BODY_OUTLINE",
          "data-label": "BODY OUTLINE"
        }, [
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M2333.11,488.82c-125.52,100.3-138.63,312.51-139.33,462.3.3,142.15,16.46,283.79,25.46,425.56,1.79,25.13,2.6,50.49,2.85,75.51.89,125.63.56,251.34-6,376.83-.9,12.71-1.61,25.4-3.81,38.07-.73,4.18-1.32,8.21-2,12.33-1.93,11.58-3.78,25.43-5.35,37-4.06,32.9-7.12,66.51-8.68,99.59-1.44,28.92-1.94,58.53-1.29,87.44.33,13.57,1,30,2.28,43.49,14.62,122.22,29,245.46,41.3,367.92,4.68,46,4,92.33,4.31,138.45-.43,38.93.24,77.92-4.07,116.74a28.1,28.1,0,0,1-3.49,10.71,35.41,35.41,0,0,0-2.64,5c-4.89,13.14-5.83,27.49-7.06,41.49-2.15,31-1.78,62.45-1.21,93.6l.06,3.13,0,.89a27.51,27.51,0,0,1-3.7,13.81c-9.24,19.34-14.49,40.51-20.7,61.18-3.87,13.85-7.86,28.39-11.49,42.3l-.81,3-.42,1.54c-.14.53-.26,1-.51,1.79-5.17,14.53-7.11,31.18-2.15,45.9,7.89,24.8,45.46,48.1,69.53,35.28a28.7,28.7,0,0,1,19.63-4.8c4.42.32,8.23,2.78,12.52,3.73,7,1.67,14.86,1,22.44-.8,1.23-.21,2.48-.71,3.71-1a26.88,26.88,0,0,1,14.4.35,51.6,51.6,0,0,0,8.42,2.47c9.21,1.7,18.15-2,25.72-7.22a31.2,31.2,0,0,1,6.46-3.59,27.47,27.47,0,0,1,15.2-1.32,70.77,70.77,0,0,0,8.77,1.72c11.22,1.19,22.6-2.75,31.28-9.85a27.84,27.84,0,0,1,13.9-5.76c9.94-1.46,26-7.62,31.12-16.46a17.33,17.33,0,0,0,1.8-4.62c3.66-13.14,1.1-26.67-5.57-38.6-7.88-14.58-19.72-25.8-30.09-39.08a63.46,63.46,0,0,1-7.23-11.49c-2-4.16-3.36-8.18-4.83-12.08-8.47-23.8-20.12-45.8-29.09-69.5-2.22-6.29-4.33-12.94-4.5-19.9a23.76,23.76,0,0,1,1.09-7.87l-.14.48c6.57-29.54,8.37-60.82,1.25-90.37-2.52-8.3-3.14-16.83-3.59-25.34-.75-20.16-.17-40.18,3.47-60.09,29.29-148,56.72-296.67,78.46-445.92,9.09-64.74,17.79-129.82,15.67-195.33-2.31-118.29-24.87-234.87-33.38-352.75-3.57-92.94,23.16-183.79,53.19-270.73,30.42-84.3,64-174.94,93.09-259.56,14.71-43.41,30-86.73,40.74-131.28,14.22-57.16,29-114.61,40.26-172.4a1260.7,1260.7,0,0,0,21.43-175.25c6.4-98-10-196.14-37.44-290.11l4.11,3.08-991.09-.66,4.1-3.07c-25.77,87.75-42,179-39,270.64,2.65,65.41,9.58,130.72,22.16,195,10,51.52,22.75,102.47,35.4,153.41,11.79,51.17,28.27,100.93,45.43,150.54,29,84.56,62.62,175.35,93.08,259.74,26.15,74.58,48.49,151.61,53.31,230.91,1.67,26.43-.27,53.08-2.89,79.36-10.93,104.48-27.88,208.36-30.46,313.47-.54,26-.31,52.42,1.8,78.35,1,12.87,2.28,26.31,3.72,39.11,21.15,175.91,54.46,350.44,88.3,524.32,3.65,19.84,4.23,39.85,3.49,60-.44,7.69-.9,15.38-2.93,22.94a114.61,114.61,0,0,0-3.22,16.28,225.87,225.87,0,0,0,3.76,76.84l-.11-.41a23.27,23.27,0,0,1,1,7.64c-.19,6.89-2.28,13.45-4.49,19.7-5.93,16-13.36,30.9-19.94,46.46-5.23,11.63-8.91,23.42-14.07,35.22-3.91,8.05-9.75,14.59-15.4,21.21-12.94,15-27.2,31.23-29,51.54a49.23,49.23,0,0,0,1.65,17.16,18.35,18.35,0,0,0,5.14,8.71c7.32,6.27,16.6,10.19,26,12.14,4.63.71,9.36,1.61,13.36,4.25,2.69,1.71,5,3.84,7.68,5.43a42.25,42.25,0,0,0,32.9,5.24l1.64-.4c.61-.14,1.22-.25,1.83-.36a26.5,26.5,0,0,1,14.72,1.78,36.79,36.79,0,0,1,6.07,3.56,43,43,0,0,0,15.58,6.89,30.1,30.1,0,0,0,16.25-1.59,26.47,26.47,0,0,1,16.47-1.14c8.83,2.51,18.71,3.85,27.28,1.56a38.19,38.19,0,0,0,5.45-2,26.85,26.85,0,0,1,21.81,1.16c.55.29,1.11.57,1.64.9l1.4.86c12.4,7.45,28.31,8.17,41.83,3.44a51.1,51.1,0,0,0,23.15-16.5,42.85,42.85,0,0,0,6.53-15.7c3.49-17.12,1.68-35.51-2.21-52.53-1.21-4.29-4.08-15.2-5.28-19.73-6.5-24.14-13.13-48.5-21.18-72.09-2.38-6.72-4.72-13.45-8.1-19.67a26.55,26.55,0,0,1-3.16-14.3l.06-3.14c.43-20.88.64-41.92.16-62.7-.64-20.76-1.27-41.51-5.44-61.73-1.12-4.84-2.3-9.4-4.64-13.49A28.78,28.78,0,0,1,2104,2773c-.37-2.14-.64-4.39-.88-6.53-3.36-35.76-3.14-71.49-3.48-107.3,0-37.83.15-75.62,1.83-113.43,8.07-96.13,20.11-192.07,30.75-287.93,3.55-29.13,8.12-71.19,12-100l.72-6.12c.22-2.05.37-4.13.56-6.19,2.35-29.09,2.63-58.34,2.14-87.54a1303.29,1303.29,0,0,0-13.06-162.34c-1.68-12.06-4.23-25.32-5.81-37.4-3.52-33.55-4.37-67.17-5.59-100.82-3-117.49-5-235-1.64-352.5,9.17-167.26,31-334.19,25.91-501.92-5.86-140.37-24.7-318.09-139-413.24,61.93,31.72,93.33,99.88,113.76,163.15,29.63,97.1,35.18,199.4,35,300.28-.61,151.13-18.52,301.42-27,452.14-3.33,117.18-1.37,234.63,1.63,351.81,1.21,33.36,2.06,66.9,5.54,100.08,1.56,11.88,4.12,25.28,5.77,37.17a1311.24,1311.24,0,0,1,13.15,163.44c.46,33.7.34,67.61-3.5,101.15-15.11,124.49-29.69,250-41.77,374.82-.68,8.29-1.18,16.57-1.43,24.9-1.51,50.17-1.69,100.49-.71,150.68.57,19.81.87,39.59,3.21,59.15l.21,1.49a17.4,17.4,0,0,0,1.87,6.18c6,9.46,7.71,20.55,9.3,31.26,4.68,37.72,3.79,75.86,3.25,113.75l-.06,3.15a18.23,18.23,0,0,0,2.09,10,80.24,80.24,0,0,1,4.21,9c7.78,19.72,13.43,40.15,19.21,60.39,4,14.21,7.82,29,11.67,43.18l.25.9.41,1.64c.25,1.07.48,2.13.69,3.19,4.47,23.85,7.18,57.77-11.37,75.93-17.46,17.82-46.53,23.22-68.92,11.8-1.85-.83-3.6-2.22-5.42-3.11a18.51,18.51,0,0,0-9.88-2c-2.79.14-5.35,1.34-7.9,2.33-10.85,3.89-22.72,2.83-33.57-.1a17.86,17.86,0,0,0-10.19-.35q-.63.17-1.23.36l-1.35.48a38.77,38.77,0,0,1-20.84,2c-6.93-1.31-13-4.41-18.74-8.17a18.4,18.4,0,0,0-15.91-3.78,51.17,51.17,0,0,1-41-5.9c-2.71-1.56-5.14-3.73-7.72-5.45a18,18,0,0,0-7.15-2.54c-12.23-1.89-24.2-6.76-33.6-14.93-5.43-5.05-7.93-12.12-8.94-19.29a56.6,56.6,0,0,1-.5-13.58c2.26-27,23.17-46.32,39-65.94,5.28-6.48,8-13.25,10.8-21.13,5.75-15.81,12.72-31.31,19.58-46.63,4.87-11.26,10.33-22.5,12.91-34.35.81-4,.92-7.61-.09-10.66a234.22,234.22,0,0,1-3.9-79.89,121.24,121.24,0,0,1,3.49-17.52c.15-.53.41-1.58.53-2.12a124.25,124.25,0,0,0,2.07-18.85c.71-19.22.16-39-3.33-57.87-29.28-148.26-56.68-297.16-78.38-446.73-7.6-55.42-15.43-111.18-15.84-167.24-.52-115.31,18.84-229.49,30.76-343.8,2.58-26,4.51-52,2.87-78-3.85-65.29-20.24-129.19-40.17-191.3-42.11-123.34-91.31-247.72-130.61-372-15.69-50.24-26.86-101.85-39.5-153-22-89.61-35.83-181.26-39.08-273.54-3-93.6,13.71-187,40.23-276.4h3.2c3.24.06,991.32.61,994.29.65,26.41,89.41,43,182.77,39.79,276.31-1.68,39.51-4.82,78.92-9.84,118.16-10.72,84.92-32.33,168-52.93,250.91-4.64,19.31-10,38.35-16,57.14-31.48,98.38-69.23,200.12-104.48,297.55-27.16,73.48-51.86,148.64-62.23,226.51-7.92,52-2.71,104.11,3.68,155.9,13.5,117.3,32.68,235.62,24.4,354.08-3.11,39.36-8.28,78.61-13.74,117.68-21.65,149.48-49,298.32-78.18,446.5-3.86,22-4.4,45-2.54,67.23a69.26,69.26,0,0,0,2.59,13.73,139,139,0,0,1,3,15.05c3.77,26.95,1.83,54.32-4.19,80.58-1.89,5.94,1.19,14.89,3.35,21.14,2.76,7.6,6.15,15.2,9.53,22.82,6.85,15.28,13.84,30.78,19.59,46.56,1.47,3.93,2.85,7.81,4.48,11.22,5.4,10.83,14.4,19,22.17,28.75,14.17,16.65,26.64,37.9,22.84,60.77-.75,4.76-1.77,9.52-4.16,13.73a30.24,30.24,0,0,1-10.31,10.6,70.74,70.74,0,0,1-29.63,11.23,17,17,0,0,0-7.6,3.41c-13,10.68-31,15.14-47.25,10.49a17.2,17.2,0,0,0-15.13,3.08c-5.74,3.84-11.81,7.09-18.81,8.57a39.38,39.38,0,0,1-21.32-1.5,18.12,18.12,0,0,0-11-1.34c-10.27,2.85-21.07,4.49-31.72,2-3.92-.71-7.45-3-11.44-3.53a17.6,17.6,0,0,0-11.58,2.59c-26.93,16.45-64.79-3.64-80.25-27.61-12.35-19.42-11.27-44.09-3.84-65,8.62-32.32,17-65,28.16-96.52a135.5,135.5,0,0,1,7.62-17.42c1.41-3.06,1.29-6.89,1.16-10.21l-.12-6.29c-.4-37.9-1.39-76.06,4.14-113.72a92,92,0,0,1,5-19.37c1.31-3.55,4.16-6.9,5-10.6a172.05,172.05,0,0,0,2-17.8c3-49.86,2.56-100.13,2.12-150.11-.46-25-.52-49.94-2.84-74.83-10.37-107.85-23.22-216.5-35.71-324.2-1.66-14-4.36-35.87-6.11-49.84-.54-4.41-.82-8.49-1.21-12.71-2.36-33.31-2.46-67.57-1.44-100.92a1291.27,1291.27,0,0,1,17.26-175.53c2.11-12.07,2.81-24.52,3.68-36.83,5.17-91.78,5.81-183.79,6.46-275.7-.1-58.44.82-117-3.12-175.3-12.54-208.48-42.76-418.95-11.17-627.12,15.87-94.08,46.57-211.87,135.39-261.41Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-4",
            d: "M2115.54,657.92s39.41,3.65,55-22.69c11.38,18.88,27.64,23.42,52.21,23"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M1953.12,1712.68c10.89,7.71,22.3,15.16,34.79,19.79,14.85,5.41,27,3.73,33.51-11.89,14.19-32.86,11.69-89.38,10.43-125.79a269.63,269.63,0,0,1,5.08,26.88c4.39,31.67,6.42,73.24-6.4,103-5.43,13-17,21.59-31.51,19.26-18.24-3-34.77-17.35-45.9-31.26Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M2393.7,1709.06c-15.67,20.61-53.43,48.26-73.78,18.68-13.53-21.85-14.22-57.25-12.83-82.4a316,316,0,0,1,7.88-54.17c-1.15,27.18-1.74,54.17.61,81.14,1.37,14.27,3.46,28.42,8.56,41.75,2.41,6.08,6,12.76,11.94,15.61,16.6,8.07,44-11.12,57.62-20.61Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M1905.41,3106.49a28.21,28.21,0,0,0,18.46-11.62,29.41,29.41,0,0,0,3.53-7.15l.44.09c-.79,10.2-7.36,19.31-16.18,24.34a28.22,28.22,0,0,1-4.27,2.09l-2-7.75Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M1954.12,3120.44a28.21,28.21,0,0,0,17.05-13.57,29,29,0,0,0,2.72-7.48l.56.05c.3,10.23-5.26,20-13.49,25.95a27.45,27.45,0,0,1-4,2.54l-2.82-7.49Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M2013.89,3129.23a28.71,28.71,0,0,0,11.16-9.27,27.31,27.31,0,0,0,5-14.65l.5,0a30.87,30.87,0,0,1-6.24,24.37,33.83,33.83,0,0,1-6.5,6.54l-4-6.95Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M2064,3127.5a28.77,28.77,0,0,0,11.82-8.43,27.18,27.18,0,0,0,6.1-14.24h.52a30.86,30.86,0,0,1-8,23.84,34.14,34.14,0,0,1-7,6l-3.45-7.22Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M2434.71,3112.64c-10.89-4.35-19.53-14.6-20.45-26.43l.44-.08a27.27,27.27,0,0,0,8.76,12.79,28.71,28.71,0,0,0,13.23,6l-2,7.75Z"
          }),
          createBaseVNode("path", {
            class: "cls-lowerLimbFemaleAnterior-3",
            d: "M2385.16,3126.33c-10.36-5.5-17.86-16.62-17.51-28.48l.56,0a27.17,27.17,0,0,0,7.29,13.65,28.58,28.58,0,0,0,12.48,7.39l-2.82,7.49Z"
          }),
          createBaseVNode("path", {
            className: "cls-lowerLimbFemaleAnterior-3",
            d: "M2324.24,3134.58c-9.35-7.08-15-19.25-12.74-30.9l.5,0a27.22,27.22,0,0,0,5.05,14.65,28.82,28.82,0,0,0,11.16,9.28l-4,6.94Z"
          }),
          createBaseVNode("path", {
            className: "cls-lowerLimbFemaleAnterior-3",
            d: "M2274.67,3133.12c-9.85-6.37-16.36-18.09-15-29.88h.51a27.24,27.24,0,0,0,6.11,14.23,28.74,28.74,0,0,0,11.81,8.43l-3.44,7.22Z"
          })
        ], -1))
      ], 16);
    };
  }
});

const LowerLimbFemaleAnteriorSVG = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-54b14d8c"]]);

const _hoisted_1$9 = { style: { "text-align": "center" } };
const _hoisted_2$3 = {
  class: "ion-padding",
  style: { "display": "flex", "justify-content": "space-between" }
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AbdomenAbnormalityPopover",
  props: {
    title: {}
  },
  setup(__props) {
    const props = __props;
    const formRef = ref(null);
    const descriptionNotesForm = [
      {
        componentType: "multiSelectInputField",
        name: "description",
        header: "Description",
        validation: StandardValidations.required,
        isMultiple: true,
        trackBy: "id",
        options: [
          {
            id: 1,
            name: "Tenderness"
          },
          {
            id: 2,
            name: "Laceration"
          },
          {
            id: 3,
            name: "Burns"
          },
          {
            id: 4,
            name: "Stab/Puncture"
          },
          {
            id: 5,
            name: "Bruise"
          },
          {
            id: 6,
            name: "Other"
          }
        ]
      },
      {
        componentType: "textAreaField",
        name: "otherDescription",
        header: "If Other, please specify",
        condition: (formValues) => {
          return formValues.description?.some((d) => d.name === "Other");
        }
      }
    ];
    const closePopover = (result) => {
      if (result === "save") {
        let formData = formRef.value?.getFormValues();
        formData.description = formData.description.map((d) => d.name).join(", ");
        popoverController.dismiss({ "Body Part": props.title, ...formData });
      } else {
        popoverController.dismiss();
      }
    };
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h4", _hoisted_1$9, toDisplayString(__props.title), 1),
        createVNode(StandardForm, {
          formData: descriptionNotesForm,
          ref_key: "formRef",
          ref: formRef
        }, null, 512),
        createBaseVNode("div", _hoisted_2$3, [
          createVNode(_component_ion_button, {
            color: "danger",
            onClick: _cache[0] || (_cache[0] = ($event) => closePopover("close"))
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode("Close", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_ion_button, {
            onClick: _cache[1] || (_cache[1] = ($event) => closePopover("save"))
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createTextVNode("Save", -1)
            ])]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});

const _hoisted_1$8 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AbdomenMaleSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "abdomenAbnormality":
          popoverComponent = _sfc_main$a;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "AbdomenMaleSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "MALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[9] || (_cache[9] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-abdomen-male-1",
            d: "M1458.15,2569.87s-50.73-43.91-51.93-125.61,80.91-300.26,88.16-405.45-90.61-454.47-88.18-613.79-198-631.43-249.17-701.68c-55.13-75.61-21.85-174.7,72.07-214.46,84.16-35.64,183.07-85.12,271.89-149.27,32.51-23.48,73.73-36.56,116.48-36.56H3066.76c51.88,0,101,19.21,135.1,52.28C3258.14,430,3329,473.26,3394.14,505.67c85,42.27,113.77,134.49,64.08,206.51-49.41,71.62-187.23,369.08-194.48,663.52s-85.75,449.66-72.46,640.64,137.68,364.6,65.22,508.6c-32.61,56.17-192.41,152.21-330.09,289.06s-412.94,335.52-593.85,335.52c-196.64,0-497.59-221.18-599-333.52S1458.15,2569.87,1458.15,2569.87Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$8, [
          createBaseVNode("path", {
            id: "Right_Iliac_Region",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Right Iliac Region", $event)),
            "data-label": "Right Iliac Region",
            class: "cls-abdomen-male-2",
            d: "M2015.07,3039.79c-122.32-72-234.14-163.53-288.55-223.79-101.45-112.34-261.37-246.13-261.37-246.13s-50.73-43.91-51.93-125.61c-.31-20.43,4.6-49.41,12.24-83l587.65-.36Z"
          }),
          createBaseVNode("path", {
            id: "Hypogastric_Region",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Hypogastric Region", $event)),
            "data-label": "Hypogastric Region",
            class: "cls-abdomen-male-2",
            d: "M2630.17,3042.48c-103.9,62-211.45,107-297.61,107-91.16,0-204.75-47.54-310.49-109.73l-2-678.92,608.68-.36Z"
          }),
          createBaseVNode("path", {
            id: "Left_Iliac_Region",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Iliac Region", $event)),
            "data-label": "Left Iliac Region",
            class: "cls-abdomen-male-2",
            d: "M2635.79,2360.51l637.09-.38c10.26,58.33,9.46,113.45-16.38,164.81-32.61,56.17-192.41,152.21-330.09,289.06-72.11,71.68-175,160.31-289.24,228.48Z"
          }),
          createBaseVNode("path", {
            id: "Right_Lumbar_Region",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Right Lumbar Region", $event)),
            "data-label": "Right Lumbar Region",
            class: "cls-abdomen-male-2",
            d: "M2016.68,2353.87l-591.22.36c22.93-100.87,70.49-243.53,75.92-322.42,3.6-52.26-20.88-163.76-45.07-288.83h556.8Z"
          }),
          createBaseVNode("polygon", {
            id: "Umbilical_Region",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Umbilical Region", $event)),
            "data-label": "Umbilical Region",
            class: "cls-abdomen-male-2",
            points: "2628.79 2353.51 2023.68 2353.87 2020.11 1742.98 2628.79 1742.98 2628.79 2353.51"
          }),
          createBaseVNode("path", {
            id: "Left_Lumbar_Region",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Left Lumbar Region", $event)),
            "data-label": "Left Lumbar Region",
            class: "cls-abdomen-male-2",
            d: "M2635.79,1743h570.14c-11.76,100.24-19.32,199.27-14.65,266.36,8.54,122.87,63.09,238.56,81.6,343.79l-637.09.38Z"
          }),
          createBaseVNode("path", {
            id: "Right_Hypochondriac_Region",
            onClick: _cache[6] || (_cache[6] = ($event) => handleBodyPartClick("Right Hypochondriac Region", $event)),
            "data-label": "Right Hypochondriac Region",
            class: "cls-abdomen-male-2",
            d: "M2013.11,1736h-556.8c-24.5-126.66-48.7-267.24-43.11-374.28,0,0,281.11,36.39,599.91-18Z"
          }),
          createBaseVNode("path", {
            id: "Epigastric_Region",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Epigastric Region", $event)),
            "data-label": "Epigastric Region",
            class: "cls-abdomen-male-2",
            d: "M2628.79,1736H2020.11V1343.72c77.62-13.24,156.65-31.86,233.16-57.7a266.54,266.54,0,0,1,151.22-5.73c75,19.16,150.6,34.07,224.3,45.63Z"
          }),
          createBaseVNode("path", {
            id: "Left_Hypochondriac_Region",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Left Hypochondriac Region", $event)),
            "data-label": "Left Hypochondriac Region",
            class: "cls-abdomen-male-2",
            d: "M2635.79,1325.92c338,53,620.95,35.78,620.95,35.78s-29.08,189.21-50.81,374.28H2635.79Z"
          })
        ]),
        _cache[10] || (_cache[10] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-549798e1><path class="cls-abdomen-male-3" d="M3194.38,967c-20.15,2.4-39.37,10.44-56.93,20.32-35.16,20.13-63.47,50.38-85.86,83.84-11.23,17.08-20.94,35.2-31.71,52.63-22,35.71-46.65,70.84-79.4,97.57-70.8,58.73-168.27,64.24-256.23,59.81-57-3.25-114.55-8.66-169.29-26.05-40.49-12.94-78-34.28-103-69.41-12.19-16.9-21.26-35.68-28.63-55,13.8,27.17,30.79,53.42,54.59,72.76,31.37,25.61,71.12,38,110.38,45.72,50,9.42,101.18,12.35,152,13.58,54.43.94,108.9-1.75,160.32-19.2,68.11-23.22,107.37-70,145.69-128.35,10-14.91,19.22-30.65,29.5-45.43a310.38,310.38,0,0,1,40.69-47.93c24.71-23.3,54.08-42.5,86.95-51.85,10.09-2.78,20.33-4.88,30.86-5l0,2Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M1457.05,965c18.34.36,36.22,5.76,53,12.93,43.46,19,78.75,53.22,105.53,91.81,4.33,6.09,8.9,13.32,12.88,19.61,42.86,67.65,83,127.2,162.3,154.17,51.43,17.45,105.9,20.14,160.33,19.2,50.84-1.23,102-4.16,152-13.58,39.27-7.68,79-20.11,110.39-45.72,23.8-19.35,40.79-45.59,54.59-72.76-7.37,19.35-16.45,38.13-28.63,55-25,35.12-62.49,56.47-103,69.41-54.74,17.39-112.28,22.8-169.29,26.05-97.1,5-201.9-2.71-274.05-75.9-31.64-31.46-55.11-69.89-77.43-108.17-5.12-8.78-10.29-17.51-15.87-25.94-31.86-47.66-77.72-90.8-135.29-103A69.88,69.88,0,0,0,1457,967l0-2Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2391.76,1395.78c14.37,85.91,44.43,172,102.17,238.33,8.17,9.29,21.75,22.35,30.64,31.27,52.36,52.8,103.63,107.32,146.2,168.5,31.92,46,57.61,96.88,71,151.4q1.32,5.42,2.53,10.85l-.23.07c-3.82-10-8.29-21.06-12.54-30.83-30.79-71-78.65-132.43-130.07-189.66-34.17-38.24-70.56-75.64-106.36-112.4-67.09-68-102-173.83-103.35-267.53Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2266,1395.8c-2.74,94.28-34.15,193.6-99.66,263.43-2.22,2.34-16.75,17.23-19.39,20-83.25,87-171.93,174.29-221,286.19-4.26,9.79-8.71,20.86-12.53,30.83l-.24-.07c.82-3.62,1.65-7.24,2.53-10.85,13.41-54.52,39.09-105.42,71-151.4,42.57-61.18,93.84-115.7,146.21-168.5,8.84-8.87,22.42-21.94,30.63-31.27,58-66.19,87.48-153,102.42-238.31Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2554.59,1953.92c28.77,44.2,43.83,125.69-18.37,148.49a97.62,97.62,0,0,1-29.32,5.32c-10.71.34-21.43.56-32.15.52-26.42-.09-53-1.07-79.16-5.19-6.53-1.14-13.16-2.27-19.39-4.6a179.24,179.24,0,0,0,19.67-.29c34.05-2,73.3-6,107.47-8.81,2.87-.23,6.29-.57,9.14-1,16.66-2.34,32.65-9.55,41-24.73,16.44-30,7.1-76.82,1.08-109.67Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2592.1,2155.14c16,35.08,27.26,82.44,19.6,120.86-3.23,17.18-12.13,31-25.69,41.8-38,29.87-95.92,35.71-142.33,28.4a194,194,0,0,1-42.78-11.75c52.62,5.57,118.8,1.55,164.61-26.47,10.54-6.8,20.37-15.58,25.09-27.05,13.69-35.33,6.28-88.15,1.5-125.79Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2360.85,1839.48c37.31,24.74,88.6,27.49,132.28,29.76,11.06.55,22.08.87,33.18,2.1a142.91,142.91,0,0,1-21.15,8c-36.34,10.2-77.57,10.12-111.71-7.65-13.3-7.2-26.81-17.79-32.6-32.16Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2107,1953.92c-6,32.8-15.36,79.7,1.08,109.67,8.39,15.19,24.37,22.39,41,24.73,2.84.47,6.26.81,9.14,1,34.21,2.81,73.35,6.84,107.46,8.81a179.46,179.46,0,0,0,19.68.29c-7.75,2.86-16.2,4.06-24.33,5.37-24.59,3.4-49.45,4.37-74.23,4.42-10.72,0-21.43-.18-32.14-.52a97.37,97.37,0,0,1-29.33-5.32c-62.2-22.8-47.14-104.28-18.37-148.49Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2069.46,2155.14c-4.77,37.57-12.19,90.49,1.51,125.79,4.71,11.47,14.54,20.25,25.08,27.05,45.8,28,112,32,164.61,26.47a193.87,193.87,0,0,1-42.78,11.75c-46.38,7.31-104.37,1.46-142.33-28.4-13.55-10.8-22.46-24.63-25.68-41.8-7.67-38.42,3.62-85.75,19.59-120.86Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2300.71,1839.48c-5.78,14.36-19.31,25-32.59,32.16-34.15,17.77-75.38,17.85-111.72,7.65a142.79,142.79,0,0,1-21.14-8c11.09-1.23,22.11-1.55,33.18-2.1,43.64-2.27,95-5,132.27-29.76Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M1858.3,1102.94a35.6,35.6,0,0,1,18.87-13.93c12.59-4.09,26,1.73,34,11.47,7.27,8.06,11.67,20.47,8,31.59-3.5,11.66-14.84,20.16-26.64,21.39-17.86,2.2-34.53-8.65-37.87-26.59-1.52-8.12-1-16.71,3.59-23.93Zm13.66,9.11c-1.47,2.25-1,7.09.44,9.72,2.66,6,10.13,8.32,16.13,6.64,4.19-1.17,7-4.12,5.76-8.53s-4.86-9.77-8.82-12.07c-4.37-2.59-10.87.26-13.51,4.24Z" data-v-549798e1></path><path class="cls-abdomen-male-3" d="M2777.54,1113.06c-2.19-3.22-7.45-6.06-11.32-4.47-4.06,1.56-8,6.81-9.19,11-1.24,4.48,1.83,7.54,5.86,8.74,5,1.35,10.88-.51,13.49-5,1.72-2.57,2.53-7.75,1.16-10.17Zm17.55-11.7c7.15,11.39,5.33,26.37-1.93,37.19-7.51,11-21.3,16.1-34.27,14.48-14.69-1.51-27.57-13.52-27.88-28.79-.27-9.23,3.83-17.53,9.2-24.06,8.08-10.24,21.17-16.7,34.45-13.15a35.3,35.3,0,0,1,20.43,14.33Z" data-v-549798e1></path><path class="cls-abdomen-male-4" d="M1458.15,2569.87s-50.73-43.91-51.93-125.61,80.91-300.26,88.16-405.45-90.61-454.47-88.18-613.79-198-631.43-249.17-701.68c-55.13-75.61-21.85-174.7,72.07-214.46,84.16-35.64,183.07-85.12,271.89-149.27,32.51-23.48,73.73-36.56,116.48-36.56H3066.76c51.88,0,101,19.21,135.1,52.28C3258.14,430,3329,473.26,3394.14,505.67c85,42.27,113.77,134.49,64.08,206.51-49.41,71.62-187.23,369.08-194.48,663.52s-85.75,449.66-72.46,640.64,137.68,364.6,65.22,508.6c-32.61,56.17-192.41,152.21-330.09,289.06s-412.94,335.52-593.85,335.52c-196.64,0-497.59-221.18-599-333.52S1458.15,2569.87,1458.15,2569.87Z" data-v-549798e1></path></g>', 1))
      ], 16);
    };
  }
});

const AbdomenMaleSVG = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-549798e1"]]);

const _hoisted_1$7 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AbdomenFemaleSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "abdomenAbnormality":
          popoverComponent = _sfc_main$a;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "AbdomenFemaleSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[9] || (_cache[9] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-abdomen-female",
            d: "M1268,819.68c-82,232,16.3,378,16.3,378s51.5,82.55,141.33,166.35c17.51,37.52,76.3,216.38,87.56,342.71s22.06,298.69-13.14,393.92-175,337.5-185.5,358.52-11.82,26.66-30.58,74.19c0,0-8.74,40.22,21.09,102.2s89.75,91.39,235.88,163.36c21.87,9.82,170.35,67.18,320.57,155.08,141.21,106.14,227.39,174.63,363.86,178.83,198.08,0,304.13-167.59,576.2-301.58,102.75-50.14,341.94-144.66,323.77-236.63,9.13-91.33-152-294.73-207.73-405.73-24.66-40.26-69-261-57.48-368.19s86.55-453,112-477.21,93.65-74.11,130.75-147.12,56-154.31,44.13-267.24c-13.62-55.8-43.64-84.2-26.56-124.2S3176.13,704,3183,615.17c0,0-3.69-75-101.3-127.9s-130.87-116.84-168.9-142.42-76.67-24-123.52-24-1197-4.75-1208.85,0-40.7,12-83.61,45.46-153,111.41-219.35,140.39-96,110.52-80.35,165.92S1266.33,803.36,1268,819.68Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$7, [
          createBaseVNode("path", {
            id: "Right_Hypochodrium",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Right Hypochodrium", $event)),
            "data-label": "Right Hypochodrium",
            class: "cls-2-abdomen-female",
            d: "M1905.5,1407.5c-240.25,46.51-426.64,39.11-442.55,38.66a.2.2,0,0,0-.19.27c14.61,38,55.81,176.85,67,302.84,3.53,39.57,8.1,78,9.8,115.07h365.92V1407.5Z"
          }),
          createBaseVNode("path", {
            id: "Left_Hypochodrium",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Left Hypochodrium", $event)),
            "data-label": "Left Hypochodrium",
            class: "cls-3-abdomen-female",
            d: "M2491,1864.34h348.52c-.7-21.66,17-172.23,28.65-232.32,20.46-105.67,25.14-91.06,52.71-207.25-35,1.84-215.51,10.26-429.88-24.07Z"
          }),
          createBaseVNode("path", {
            id: "Epigastric_Region",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Epigastric Region", $event)),
            "data-label": "Epigastric Region",
            class: "cls-3-abdomen-female",
            d: "M2483.48,1400.7c-90.59-14.51-183.75-36.65-268.12-70.14a56.07,56.07,0,0,0-15.49-3,44.08,44.08,0,0,0-15.57,2.69c-91.45,33.53-184.82,57.45-272.92,74.51l1.65,459.61h570.45Z"
          }),
          createBaseVNode("path", {
            id: "Left_Iliac_Region",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Left Iliac Region", $event)),
            "data-label": "Left Iliac Region",
            class: "cls-3-abdomen-female",
            d: "M2493.24,3007.51c85.29-58.65,173.13-132.16,309.16-199.15,296.69-115.91,313.47-177.71,304.34-244.22-5.69-41.53-34.52-77.55-74.55-145.56L2491,2420.77Z"
          }),
          createBaseVNode("path", {
            id: "Hypogastrium",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Hypogastrium", $event)),
            "data-label": "Hypogastrium",
            class: "cls-3-abdomen-female",
            d: "M2483.47,2420.77l-572.09,2.2v540.88c134.26,97.28,188.72,143.89,308.39,147.58,99,0,180.68-41.19,266-99.84Z"
          }),
          createBaseVNode("path", {
            id: "Right_Iliac_Region",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Right Iliac Region", $event)),
            "data-label": "Right Iliac Region",
            class: "cls-3-abdomen-female",
            d: "M1903.87,2423,1355,2425.11c-9.88,17.72-88.55,101.75-39.23,198.74,45.61,70.89,84.59,88.54,230.72,160.51,267,99.73,341.75,164.51,357.38,176.17Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lumbar_Region",
            onClick: _cache[6] || (_cache[6] = ($event) => handleBodyPartClick("Left Lumbar", $event)),
            "data-label": "Left Lumbar",
            class: "cls-3-abdomen-female",
            d: "M2491.1,2413.27l535.81-2.2c-48.19-81.87-115.65-167.86-143.06-247.26-46-133.15-40.67-178-44.34-292H2491.1Z"
          }),
          createBaseVNode("polygon", {
            id: "Umbilical_Region",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Umbilical Region", $event)),
            "data-label": "Umbilical Region",
            class: "cls-3-abdomen-female",
            points: "1911.38 1870.15 1911.38 2415.34 2196.94 2415.34 2482.49 2415.34 2482.49 1870.15 2205.05 1870.15 1911.38 1870.15"
          }),
          createBaseVNode("path", {
            id: "Right_Lumbar_Region",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Right Lumbar", $event)),
            "data-label": "Right Lumbar",
            class: "cls-3-abdomen-female",
            d: "M1503.34,2142.75c19.18-67,43.39-164.68,36.45-271.92l365.73,1-1.65,543.6-547.08,2.15S1486.38,2202,1503.34,2142.75Z"
          })
        ]),
        _cache[10] || (_cache[10] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-d3635320><path class="cls-4-abdomen-female" d="M1605.19,1082.18a22.07,22.07,0,0,1,5.38,3c7.75,5.81,30,25.88,15.11,55.2-17.39,34.16-53,20-65.86,7.48-12.22-11.84-20.13-34.53-.33-56.76C1575.52,1073.1,1597.41,1079.19,1605.19,1082.18Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M2133.93,1415.26c2.39,40.46-.92,81.25-7.2,121.26-10.93,67.27-32,133.42-67.14,192.16-51.93,86.65-139.16,163.19-234.84,197-4.84,1.47-9.7,3.29-14.77,3.69,6.4-1.93,12.26-5.42,18.18-8.5s11.66-6.55,17.38-10c89.28-55,167.35-133.76,214.9-227.59,7.11-14.39,14.4-30.14,20.26-45.08,28.38-71.21,45.12-146.64,53.23-222.9Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M2284,1415.26c8.1,76.26,24.85,151.69,53.23,222.9,5.86,14.95,13.14,30.69,20.26,45.08,47.54,93.81,125.64,172.63,214.9,227.59,5.72,3.44,11.5,6.83,17.38,10s11.77,6.57,18.18,8.5c-5.07-.4-9.93-2.22-14.77-3.69-95.69-33.77-182.88-110.27-234.84-197-35.12-58.74-56.21-124.89-67.14-192.16-6.28-40-9.59-80.79-7.2-121.26Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M2562.83,2767.83A749.56,749.56,0,0,0,2448.11,2833c-7,4.82-15.18,10.95-22,16-38.75,30.51-75.32,63.88-111.25,97.81-6.66,6.37-13.34,12.78-19.84,19.34-2.61,2.62-5.2,5.28-7.68,8-1.17,1.41-2.59,2.71-3.29,4.41a7.91,7.91,0,0,1,.66-2.77,73.27,73.27,0,0,1,3.6-7.73,263.13,263.13,0,0,1,18.13-28.59c22-30.46,47.88-57.94,76.18-82.57a403.68,403.68,0,0,1,74.21-51.88c10-5.23,20.22-10.3,30.58-14.73,24.12-10.18,49.43-18.74,75.38-22.5Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M1893,2767.83c26,3.76,51.26,12.32,75.38,22.5,10.36,4.44,20.6,9.5,30.57,14.73a404.23,404.23,0,0,1,74.22,51.88c28.29,24.63,54.21,52.11,76.17,82.57a261.61,261.61,0,0,1,18.13,28.59c1.6,3.37,3.81,6.79,4.27,10.5-.7-1.7-2.13-3-3.3-4.41-2.47-2.75-5.06-5.41-7.68-8-6.49-6.56-13.18-13-19.84-19.34-35.93-33.93-72.5-67.3-111.24-97.81-6.76-5-15-11.21-22-16A749.56,749.56,0,0,0,1893,2767.83Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M2195.82,2380.77c-18.34-19.42-25.92-50.86-18.1-76.65a71.35,71.35,0,0,1,7.39-16.25,103.13,103.13,0,0,0,8-20.29c4.38-14.86,7-34.51,9.57-50.11,9.32,12.15,14,27,15.51,42.21a79.24,79.24,0,0,1-9.58,46.32c-7.66,14.45-9.69,35.36-11.07,53.12-.53,6.42-1.07,15.16-1.74,21.65Z" data-v-d3635320></path><path class="cls-4-abdomen-female" d="M2824,1081.9a25.13,25.13,0,0,0-6.76,3.74c-8.26,6.39-29,26.16-14.47,54.71,17.39,34.16,53,20,65.87,7.48,12.22-11.84,20.13-34.53.32-56.76C2853.43,1073.64,2832.36,1078.85,2824,1081.9Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M2161.11,927.15a469.31,469.31,0,0,1-9.75,80.63c-.68,3.58-2.12,9.61-3,13.26-1.92,8.85-5.52,20.8-8,29.58-1.91,6-4.54,13.46-6.5,19.41-2.43,6.09-6.08,16.36-8.72,22.27-4.06,9.64-9.58,21.6-14.3,31.06-39.51,77.42-100.4,143.19-172.38,191.56-85.54,57.18-186.82,90.92-289.73,95.08-71.2,2.77-143.59-8.8-208.29-39.73a325,325,0,0,1-98-71.54,481,481,0,0,1-44.15-57.39c-4.7-6.57-10.26-16.53-14.55-23.41-3.37-5.83-6.65-12.24-9.94-18.14-6-11.8-12.27-25.35-17.34-37.57-2.16-5.89-5.24-13.45-7.27-19.39l-4.32-13.1-1.07-3.28c-2-7.34-4.68-15.88-6.33-23.31-24.83-101.47-12.73-215.34,36.84-307.62,17.15-31.61,34.89-63.35,57.48-91.55-2.84,8.68-6,17.13-9.28,25.55q-14.64,37.76-32.63,74c-4.09,8.16-8,15.75-11.46,23.78-24.25,56.44-34.94,118.56-33.41,179.83a417.2,417.2,0,0,0,20,116.15l4.22,12.43c2,5.62,4.9,12.74,7.07,18.37,2.63,6,5.26,12,7.94,18,3.52,7,8.08,16.75,11.95,23.38,4.64,9,11.38,19.59,16.71,28.28,2.1,3.24,8.8,12.92,11,16.35,7.55,10.42,16,21.41,24.19,31.21,67.22,81.89,176.57,116.69,280,116.82,165,.26,330-78.3,428.66-211.43a549.6,549.6,0,0,0,57.05-96.75c22.43-48.7,37.15-100,47.32-152.86Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M2220.53,927.15c10.17,52.91,24.88,104.16,47.31,152.86a549.24,549.24,0,0,0,57,96.75c98.63,133.13,263.71,211.69,428.67,211.43,103.44-.12,212.81-34.93,280-116.82,8.33-9.67,16.56-20.92,24.18-31.21,2.14-3.24,8.91-13.13,11-16.35,5.33-8.7,12-19.24,16.71-28.28,3.91-6.69,8.47-16.46,11.95-23.38,2.68-6,5.31-12,7.94-18,1.07-3,3.65-9.23,4.76-12.23,2.18-5.16,4.72-13.48,6.53-18.57a417.57,417.57,0,0,0,20-116.15c1.53-61.27-9.17-123.39-33.41-179.83-3.5-8-7.37-15.62-11.47-23.78q-18-36.27-32.62-74c-3.24-8.42-6.44-16.87-9.28-25.55,22.59,28.2,40.33,59.94,57.48,91.55,49.57,92.26,61.67,206.17,36.84,307.62-1.68,7.42-4.28,15.95-6.33,23.31l-1.07,3.28-4.32,13.1c-2.1,5.94-5,13.44-7.27,19.39a463.05,463.05,0,0,1-20.64,43.63c-3.58,6.92-9.59,17.11-13.77,23.88-1.86,3.33-5.25,8.36-7.42,11.61a482,482,0,0,1-44.15,57.39,325,325,0,0,1-98,71.54c-64.7,30.93-137.09,42.5-208.29,39.73-102.91-4.16-204.2-37.9-289.74-95.08-72-48.37-132.87-114.14-172.37-191.56-4.56-9.28-10.36-21.47-14.31-31.06-2.78-6.26-6.24-16-8.71-22.27-1.93-6-4.59-13.45-6.5-19.41-2.48-8.64-6.13-20.77-8-29.58l-1.6-6.62c-.26-1.1-.55-2.2-.78-3.3l-.66-3.34a472.16,472.16,0,0,1-9.74-80.63Z" data-v-d3635320></path><path class="cls-5-abdomen-female" d="M1428.85,1348.76c18.69,57.62,37.59,116.7,54,175A1593.69,1593.69,0,0,1,1530,1785.07c6,63.14,9.27,126.93,3.45,190.3-6.06,63.57-19,126.77-42.59,186.31-19.08,47.4-45.84,90.79-71.08,134.65-31.1,53.74-67.08,118.12-98.16,172-22.14,38.12-36,84-23,127.1,24.2,79.11,116.44,129.25,185.81,165.38,67.22,33.82,136.8,62.07,206,92.08,46.41,20.16,93.29,40.32,136.9,66.2,52.24,30.48,101.1,66,147.38,104.68l7.27,6.13,7.17,6,3.52,2.94c121,100.47,300.52,111.26,431.74,24,5.09-3.37,10.14-6.81,15.07-10.42,55.27-41.74,114.1-79.35,171.55-117.49,31.76-20.59,62.43-42.73,94.24-63.16,75.54-46.8,158.38-78.76,237.8-117.09,44.13-21.48,89-44.54,125.6-77,50.68-45.19,60.43-96.36,31.23-157.45a271.47,271.47,0,0,0-15.26-27.78c-54-86.44-110.08-173.13-159.66-262.33-44.77-77.72-67.71-166.53-75.74-255.45-5.75-63.4-2.49-127.12,3.57-190.31A1594,1594,0,0,1,2900.25,1523c13.66-48.74,29.15-96.69,45.16-144.66,3.75-11,7.44-22,11.72-32.81l.54-1.28c.2-.46.3-.76.59-1.36l.83-1.67,1-2,2.23-1.67,1.6-1.19,1.69-1.3,3.41-2.69c65.67-54.19,118.5-125.36,147.5-205.64,30.14-83.33,23.22-175.92-.58-260.07-3.21-11.22-6.82-22.34-11-33.22l-1.08-2.78.36-2.58.23-1.66.23-1.45.5-2.81c.35-1.85.73-3.66,1.12-5.46,8.91-38.62,25.53-75,45.08-109.27,39.22-63.16,21.05-148.29-41-189.71-4.18-2.91-12.78-7.87-17.4-10.67-54.52-33.17-106.14-72.21-149.12-119.62-28.43-34.77-67-55.53-112.45-55.68-388.46,0-835.18-.1-1223.82-.29A141.43,141.43,0,0,0,1517.15,363c-15.69,13.11-33.05,27.46-49.39,39.54-56.46,42.29-117,78.77-179.93,110.6l-9.14,4.67c-2.85,1.56-5.7,3.15-8.45,4.9-67,41.56-86,131.71-42.41,197.29,5.62,9.19,10.88,18.32,16,27.63,13.58,25.36,26.73,51.57,34.2,79.56l.68,3.06-1.27,3.1-.76,1.88-.79,2-1.55,4.09c-30.36,85.91-39.47,181.82-14.2,270.11,26.48,89.47,84.05,169,157.53,226,1,.75,2.19,1.62,3.15,2.3,1.22.47,7,7.82,8.07,9Zm-18.1,2.5a5.71,5.71,0,0,0,.77.86,5.07,5.07,0,0,0,.47.37l-.12-.09-.51-.34-1-.69c-39.31-28.45-73.34-63.84-102.09-102.87-36.27-49.65-63.47-107.08-75.19-167.85-15-79.06-6.12-161.52,19-237.57,1.94-6,4.23-11.94,6.55-17.73l-.58,6.16A171.77,171.77,0,0,0,1252,813c-12.26-32.1-29.54-62.22-47.33-91.59-46.91-82.33-12.63-187.38,73.76-226.9,67.92-34.45,133.22-74.45,193.2-121.42,5.4-4.31,10.8-8.62,16.15-13,9.8-8.23,23.35-20,34.48-26.35a162,162,0,0,1,85.28-23.44c387.73-.09,833.64-.35,1221.2-.29,46.87-.9,93.44,19.81,124.25,55.08,2.48,2.89,7.91,8.78,10.35,11.51a539.16,539.16,0,0,0,40.59,39.27c33.67,29.45,70.65,55.09,109.15,77.85,3,1.89,6.5,3.87,9.43,6,63.89,42.18,89.36,129,57.87,198.89a182.11,182.11,0,0,1-10.17,19.67c-16.88,29.48-31.32,60.66-40.29,93.42a171,171,0,0,0-4.11,18.92l-.72-5.36c.48,1.08,1.28,3.42,1.73,4.53,24.13,68.13,35.72,141.21,29.85,213.49-5.82,74.17-37.26,144.94-79.91,205-28.28,39.4-61.48,75.52-99.74,105.42l-2,1.51,3.2-3.62-.21.45c-.06.1-.23.54-.35.8-.18.46-.61,1.43-.78,1.91-3.92,10-7.34,20.32-10.85,30.56-15.84,47.43-31.31,95.26-44.8,143.38a1578.93,1578.93,0,0,0-49.88,295.07c-9.14,110.88-.28,225,40.49,329.23,18.25,45.44,45,89.37,69.65,131.86,39.25,65.66,80.94,131.27,121.58,196.09,27.36,43.31,46.42,97.7,26.93,148-33.51,88.27-165.86,138.87-246.13,176.92-68.46,31.16-136.83,61.28-198.06,104.79-67.25,46.31-136.89,89.53-203.2,136.82-12.61,9.24-18.74,13.56-30.33,22.29a383.76,383.76,0,0,1-84.72,46.73c-128.1,51.92-282.19,27.39-388.33-61-12.89-10.92-26.66-22.46-39.85-33-58.36-46.56-120.9-88-188.62-119.36-68.5-31.6-138.33-59.52-207.29-90.62-150.17-68.74-354.4-169-235.65-363,29.22-51.17,64.28-113.09,93.46-163.84,31.18-53.88,64-107,82.18-166.72,18.58-59,28.57-120.74,31.08-182.55,2.93-99.66-9-199.62-27.15-297.51-17.62-95.28-48.18-188-77.83-280.18l-1.46-4.44-.34-1a5.5,5.5,0,0,0,.52-.27l2.52-1.65Z" data-v-d3635320></path></g>', 1))
      ], 16);
    };
  }
});

const AbdomenFemaleSVG = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d3635320"]]);

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CirculationAssessment",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const circulationAssessmentForm = useCirculationAssessmentForm().circulationAssessmentFormSection;
    const patientStore = useDemographicsStore();
    const patientGender = computed(() => patientStore.patient?.personInformation?.gender);
    watch(
      () => formRef.value?.getFormValues()?.is_the_patient_have_pulse,
      async (newValue, oldValue) => {
        if (newValue === "No" && oldValue !== "No") {
          await openCPRModal();
        }
      }
    );
    const openCPRModal = async () => {
      const modal = await modalController.create({
        component: CPR,
        cssClass: "cpr-modal",
        backdropDismiss: false
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
      if (data) {
        console.log("CPR completed with data:", data);
        toastSuccess("CPR protocol completed");
      }
    };
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const validation = await formRef.value.validateForm();
      if (!validation?.isValid) {
        return;
      }
      return formRef.value.getFormValues();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(circulationAssessmentForm),
                ref_key: "formRef",
                ref: formRef
              }, {
                femurTibiaAbnormality: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(LowerLimbMaleAnteriorSVG, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "femurAndTibia",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataFemurTibia", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(LowerLimbFemaleAnteriorSVG, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "femurAndTibia",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataFemurTibia", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayFemurTibiaBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataFemurTibia"]
                  }, null, 8, ["currentValues"])
                ]),
                abdominalAbnormality: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" ? (openBlock(), createBlock(AbdomenMaleSVG, {
                    key: 0,
                    currentValues: formValues,
                    popoverType: "abdomenAbnormality",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataAbdominal", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" ? (openBlock(), createBlock(AbdomenFemaleSVG, {
                    key: 1,
                    currentValues: formValues,
                    popoverType: "abdomenAbnormality",
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataAbdominal", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayAbdominalBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$s, {
                    currentValues: formValues["bodyPartsDataAbdominal"]
                  }, null, 8, ["currentValues"])
                ]),
                _: 1
              }, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const CirculationAssessment = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e506d6d9"]]);

const useDisabilityAssessmentForm = () => {
  const demographicsStore = useDemographicsStore();
  const patient = computed(() => demographicsStore.patient);
  const patientAge = computed(() => HisDate.getAgeInYears(patient?.value?.personInformation?.birthdate));
  const adultEyeOpeningResponse = [
    { label: "Spontaneously", value: "4" },
    { label: "To Speech", value: "3" },
    { label: "To Pain", value: "2" },
    { label: "No Response", value: "1" }
  ];
  const adultVerbalResponse = [
    { label: "Oriented To Time, Place and Person", value: "5" },
    { label: "Confused", value: "4" },
    { label: "Inappropriate Words", value: "3" },
    { label: "Incomprehensible Sounds", value: "2" },
    { label: "No Response", value: "1" }
  ];
  const adultMotorResponse = [
    { label: "Obeys Commands", value: "6" },
    { label: "Moves to Localized Pain", value: "5" },
    { label: "Flexion Withdrawal from Pain", value: "4" },
    { label: "Abnormal Flexion (Decorticate)", value: "3" },
    { label: "Abnormal Extension (Decerebrate)", value: "2" },
    { label: "No Response", value: "1" }
  ];
  const minorEyeOpeningResponse = [
    { label: "Directed Eye Movements", value: "1" },
    { label: "Not Directed", value: "0" }
  ];
  const minorVerbalResponse = [
    { label: "Appropriate Cry", value: "2" },
    { label: "Inappropriate Cry or Moan", value: "1" },
    { label: "No Cry", value: "0" }
  ];
  const minorMotorResponse = [
    { label: "Localizes Pain", value: "2" },
    { label: "Withdraws from Pain", value: "1" },
    { label: "Non Specific or No Response", value: "0" }
  ];
  const unitOptions = [
    { id: 1, name: "mmol/l" },
    { id: 2, name: "mg/dl" }
  ];
  const disabilityAssessmentFormSection = computed(() => {
    const isMinor = patientAge.value < 18;
    return [
      // GCS Section
      {
        componentType: "Heading",
        name: `Glasgow Coma Scale (GCS) - ${isMinor ? "Pediatric" : "Adult"}`,
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Eye Opening Response",
        name: "eye_opening_response",
        obsValueType: "value_numeric",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "4" },
        options: isMinor ? minorEyeOpeningResponse : adultEyeOpeningResponse,
        onChange: (value, allFormValues) => {
          if (!allFormValues) return {};
          const eye = Number(value) || 0;
          const verbal = Number(allFormValues["verbal_response"]) || 0;
          const motor = Number(allFormValues["motor_response"]) || 0;
          const total = eye + verbal + motor;
          const max = patientAge.value < 18 ? 5 : 15;
          return {
            computed_gcs_score: `(M ${motor} V ${verbal} E ${eye}) ${total}/${max}`
          };
        }
      },
      {
        componentType: "Dashes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Best Verbal Response",
        name: "verbal_response",
        obsValueType: "value_numeric",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "4" },
        options: isMinor ? minorVerbalResponse : adultVerbalResponse,
        onChange: (value, allFormValues) => {
          if (!allFormValues) return {};
          const eye = Number(allFormValues["eye_opening_response"]) || 0;
          const verbal = Number(value) || 0;
          const motor = Number(allFormValues["motor_response"]) || 0;
          const total = eye + verbal + motor;
          const max = patientAge.value < 18 ? 5 : 15;
          return {
            computed_gcs_score: `(M ${motor} V ${verbal} E ${eye}) ${total}/${max}`
          };
        }
      },
      {
        componentType: "Dashes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Best Motor Response",
        name: "motor_response",
        obsValueType: "value_numeric",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "4" },
        options: isMinor ? minorMotorResponse : adultMotorResponse,
        onChange: (value, allFormValues) => {
          if (!allFormValues) return {};
          const eye = Number(allFormValues["eye_opening_response"]) || 0;
          const verbal = Number(allFormValues["verbal_response"]) || 0;
          const motor = Number(value) || 0;
          const total = eye + verbal + motor;
          const max = patientAge.value < 18 ? 5 : 15;
          return {
            computed_gcs_score: `(M ${motor} V ${verbal} E ${eye}) ${total}/${max}`
          };
        }
      },
      {
        grid: { s: "8" }
      },
      {
        componentType: "Slot",
        slotName: "gcsScoreDisplay",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const eye = Number(allFormValues["eye_opening_response"]) || 0;
          const verbal = Number(allFormValues["verbal_response"]) || 0;
          const motor = Number(allFormValues["motor_response"]) || 0;
          return eye + verbal + motor > 0;
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Pupillary Response - Right Eye",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Right Pupil Size (mm)",
        name: "right_pupil_size",
        obsValueType: "value_numeric",
        type: "number",
        validation: (value) => {
          if (!value) return null;
          const num = Number(value);
          if (num < 1 || num > 10) return "Pupil size must be between 1 and 10 mm";
          return null;
        },
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Right Pupil Reaction",
        name: "right_pupil_reaction",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Reactive", value: "Reactive" },
          { label: "Non-Reactive", value: "Non-Reactive" }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Pupillary Response - Left Eye",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Left Pupil Size (mm)",
        name: "left_pupil_size",
        obsValueType: "value_numeric",
        type: "number",
        validation: (value) => {
          if (!value) return null;
          const num = Number(value);
          if (num < 1 || num > 10) return "Pupil size must be between 1 and 10 mm";
          return null;
        },
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Left Pupil Reaction",
        name: "left_pupil_reaction",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Reactive", value: "Reactive" },
          { label: "Non-Reactive", value: "Non-Reactive" }
        ]
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "textAreaField",
        header: "Focal Neurology",
        name: "focal_neurology",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        grid: { s: "8" }
      },
      {
        componentType: "Dashes"
      },
      // Additional Findings and Glucose Section
      {
        componentType: "Heading",
        name: "Additional Findings and Glucose",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Posture",
        name: "posture",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        grid: { s: "8" }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Blood Glucose Units",
        name: "blood_glucose_units",
        trackBy: "id",
        icon: "search",
        obsValueType: "value_text",
        initialValue: unitOptions[0],
        grid: { s: "2" },
        options: unitOptions
      },
      {
        componentType: "inputField",
        header: "Patient's Random Blood Glucose",
        name: "blood_glucose",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value) return null;
          const num = Number(value);
          if (num < 0 || num > 1e3) return "Must be between 0 and 1000";
          return null;
        },
        type: "number",
        grid: { s: "6" }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is the patient having Seizures?",
        name: "active_seizures",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "8" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
  });
  return {
    disabilityAssessmentFormSection,
    patientAge
  };
};

const _hoisted_1$6 = { class: "gcs-score-display" };
const _hoisted_2$2 = { class: "gcs-score-value" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DisabilityAssessment",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const { disabilityAssessmentFormSection, patientAge } = useDisabilityAssessmentForm();
    const disabilityAssessmentForm = disabilityAssessmentFormSection;
    const calculateGCS = (formValues) => {
      const eye = Number(formValues["eye_opening_response"]) || 0;
      const verbal = Number(formValues["verbal_response"]) || 0;
      const motor = Number(formValues["motor_response"]) || 0;
      const total = eye + verbal + motor;
      const max = patientAge.value < 18 ? 5 : 15;
      return `(M ${motor} V ${verbal} E ${eye}) ${total}/${max}`;
    };
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const validation = await formRef.value.validateForm();
      if (!validation?.isValid) {
        return;
      }
      return formRef.value.getFormValues();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(disabilityAssessmentForm),
                ref_key: "formRef",
                ref: formRef
              }, {
                gcsScoreDisplay: withCtx(({ formValues }) => [
                  createBaseVNode("div", _hoisted_1$6, [
                    createBaseVNode("div", _hoisted_2$2, toDisplayString(calculateGCS(formValues)), 1)
                  ])
                ]),
                _: 1
              }, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const DisabilityAssessment = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a3b4621c"]]);

const useExposureAssessmentForm = () => {
  const exposureAssessmentFormSection = computed(() => {
    return [
      // Temperature Section
      {
        componentType: "Heading",
        name: "Exposure Assessment",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Temperature (°C)",
        name: "temperature",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value) return "Temperature is required";
          const num = Number(value);
          if (num < 20 || num > 45) return "Temperature must be between 20 and 45";
          return null;
        },
        type: "number",
        grid: { s: "8" }
      },
      // Body Examination Section
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Full Body Assessment",
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Select areas with rash, injuries and other abnormalities on the body diagrams below",
        message: "",
        value: "Select areas with rash, injuries and other abnormalities on the body diagrams below",
        backgroundColor: "lightyellow",
        grid: { s: "8" }
      },
      {
        grid: { s: "4" }
      },
      // Front Body
      {
        componentType: "Slot",
        slotName: "fullBodyFront",
        grid: { s: "4" }
      },
      // Back Body
      {
        componentType: "Slot",
        slotName: "fullBodyBack",
        grid: { s: "4" }
      },
      {
        grid: { s: "4" }
      },
      // Display selected body parts
      {
        componentType: "Slot",
        slotName: "displayFullBodyParts",
        grid: { s: "8" },
        condition: (formValues) => {
          const frontParts = formValues["bodyPartsDataFront"]?.length > 0;
          const backParts = formValues["bodyPartsDataBack"]?.length > 0;
          return frontParts || backParts;
        }
      },
      // Additional Notes
      {
        componentType: "Dashes"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "textAreaField",
        header: "Additional Notes",
        name: "additional_notes",
        obsValueType: "value_text",
        grid: { s: "8" }
      }
    ];
  });
  return {
    exposureAssessmentFormSection
  };
};

const _hoisted_1$5 = { style: { "text-align": "center" } };
const _hoisted_2$1 = {
  class: "ion-padding",
  style: { "display": "flex", "justify-content": "space-between" }
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ExposureAssessmentFullBodyPopover",
  props: {
    title: {}
  },
  setup(__props) {
    const props = __props;
    const formRef = ref(null);
    const descriptionNotesForm = [
      {
        componentType: "radioButtonField",
        header: "Is there Rash on this region?",
        name: "Is there Rash on this region",
        obsValueType: "value_text",
        type: "inline",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "multiSelectInputField",
        name: "description",
        header: "Description",
        validation: StandardValidations.required,
        isMultiple: true,
        trackBy: "id",
        condition: (formValues) => {
          return formValues["Is there Rash on this region"] === "Yes";
        },
        options: [
          {
            id: 1,
            name: "Bruise"
          },
          {
            id: 2,
            name: "Petechiae"
          },
          {
            id: 3,
            name: "Urtcaria"
          },
          {
            id: 4,
            name: "Burns"
          },
          {
            id: 5,
            name: "Bite"
          },
          {
            id: 6,
            name: "Sting"
          },
          {
            id: 7,
            name: "Macule"
          },
          {
            id: 8,
            name: "Papule"
          },
          {
            id: 9,
            name: "Vesicle"
          },
          {
            id: 10,
            name: "Pustule"
          },
          {
            id: 11,
            name: "Scale"
          }
        ]
      },
      {
        componentType: "textAreaField",
        name: "Additional notes",
        header: "Additional notes",
        condition: (formValues) => {
          return formValues["Is there Rash on this region"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Are there Other skin abnormalities",
        name: "Are there Other skin abnormalities",
        obsValueType: "value_text",
        type: "inline",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "textAreaField",
        name: "Description of Other skin Abnormalities",
        header: "Description of Other skin Abnormalities",
        condition: (formValues) => {
          return formValues["Are there Other skin abnormalities"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Is there an injury on this region?",
        name: "Is there an injury on this region",
        obsValueType: "value_text",
        type: "inline",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "textAreaField",
        name: "Description of Injury",
        header: "Description of Injury",
        condition: (formValues) => {
          return formValues["Is there an injury on this region"] === "Yes";
        }
      }
    ];
    const closePopover = (result) => {
      if (result === "save") {
        let formData = formRef.value?.getFormValues();
        formData.description = formData.description.map((d) => d.name).join(", ");
        popoverController.dismiss({ "Body Part": props.title, ...formData });
      } else {
        popoverController.dismiss();
      }
    };
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h4", _hoisted_1$5, toDisplayString(__props.title), 1),
        createVNode(StandardForm, {
          formData: descriptionNotesForm,
          ref_key: "formRef",
          ref: formRef
        }, null, 512),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_ion_button, {
            color: "danger",
            onClick: _cache[0] || (_cache[0] = ($event) => closePopover("close"))
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode("Close", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_ion_button, {
            onClick: _cache[1] || (_cache[1] = ($event) => closePopover("save"))
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createTextVNode("Save", -1)
            ])]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});

const _hoisted_1$4 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FullBodyMaleFrontSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "fullBody":
          popoverComponent = _sfc_main$5;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "FullBodyMaleFrontSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "MALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[52] || (_cache[52] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-fullbody-male-front-1",
            d: "M2151,217.32s-98.55,21.57-109.21,116.24c-3.34,29.84-3.52,64.64,9.59,103.29-11.54-7.61-19.17-14.73-27-3.36s1.53,70.53,19,82.69c11.14,6.54,15.72,5.3,19.81,3.5s15.92,33.86,24.69,59.94,12.85,20,11.32,36.55-7.68,80.94-18.14,85.41-93.48,27.81-115.42,60.82c-4,2.88-11.44,4.65-20.9,3.38s-93.19,3.24-122.15,38.91-54.39,62.47-57.06,114.17-1.69,96-3.86,102.41-30.19,57.23-33.86,99.27,1.33,140.12-5.07,155.54-47.72,95-53.74,145.5-10.5,291.36-11.83,296.57-1.8,10.82-44,45.48c-7.1,8.82-13.23,13-19.93,44.75-1.5,10.76-15.76,25.56-17.18,35.44s-2,50.08-4.7,65-4.54,21.32,5.39,17,18.91-14.36,26.37-35.24.13,42.34-1.8,55.82-2.8,59.85,3.2,59.77,30.25-73.39,30.77-63-5.61,85.43.26,90.28,24.69-21.73,31-59.23c.22,35.23-.67,54,3.16,50.86s17.92-37.23,24.33-60.24-1.19,26.62,6.13,31.66,13.71-2.63,17-16.67,16.22-81.16,16.22-81.16,19.69-52.06,20.8-57.48,2.74-63.94-1.18-76.27-7.7-35-3.62-51.37,28-86.21,36.2-107.54,45.32-131.51,51.51-158.29,3.57-50.28,4.68-70.7,3.73-55.41,18.25-96,45.61-131.47,45.61-131.47.76,27.38,9.7,50.25,62.26,110.81,57.66,157.28-20.91,62.44-25.89,108.58-2.67,93.69-3.83,116.57-2.83,63.94-17.45,107.82-38.47,154-29.42,263.45,3.06,175.44,81.44,362.45c1.89,6.31,2.33,42.76,3.32,56s5.49,26,20,62.9-2.61,74.9-8.36,102.31-23.15,82.28-19.46,133.83,65.73,348.41,65.93,363.62-.46,29.32-5.56,41.94-2.74,50.22,3.49,65.23-6.39,13.52-15.11,27.64-22.3,45-25.21,52.68-19,17.35-16.37,31.83,15.22,18.29,20.34,16.13,6.47,17.92,34.73,10.26c5.78,2.38,19.74,11.4,40,2,6.93,3.2,26,16,38.44-9,7.69,11.77,38.83,35.92,56.53-1.43,2.9-12,.33-29.68-9.31-41.51-3.36-16-19.16-74.49-17.6-85.12s9.88-43.93,3.76-55.92-14.72-24.12-16.08-43.69-8-90.8,8.81-168.73,34.29-170.14,31.55-196.77-22.49-106.9-30.62-132.26-.68-59.75.83-66.74,9.1-24,10.77-46.3,2-117.6,2.15-126.45,9.31-141.66,12.78-171.65,19.11-176.57,20.15-188.67,4.43-30.14,4.43-30.14,4.65,66.28,10.32,116.38,22,192,23.31,236.63-3,145.8,3.82,167.2,15.66,75.87,13.28,97.32-15.75,62-18.77,66.41-15.4,53.41-12.78,98.35,35.45,208.58,35.45,208.58,7.39,73,5.45,106-3.22,42.23-7.82,55.5-14.48,23.09-9.2,48.31,2.88,30.73.92,37.31-8.95,38-11.3,52.51-9.67,32.08-12.37,41.14-6.79,31.4,15.9,39.77,41-16.83,41-16.83,11.13,28.26,36.94,9.87c11.4,4.31,22.69,11.44,37.52-1.94,4.4-.08,27.09,5,35.6-9,9.76-1.15,27.7-3,22.36-23.12s-15.26-24.29-15.26-24.29-15.2-49.37-43.83-75c4.9-19,14.21-47.09,6.4-70.24s-9.41-28.35-5.27-52,60.24-318.51,62.7-339.76,4-60.3-9-111.49-31.16-104.59-19-133.76,21.77-33.2,22.33-73.66-5.73-28.61,10.68-68.93,57-140,65.33-239.54,15.4-185.2,4.68-259.29-37.76-146.59-40.29-180.81.24-100.65-2.09-121.46-17.71-82.23-22.85-106.29-12.38-63.11,10.11-108,41.75-76.28,46.31-103,3.37-32.12,3.37-32.12l27.64,81.68s34.24,71.93,33.85,110.29-.11,60.83,10,124.66,58.28,165.25,58.28,165.25,25.73,60.45,28.59,90.58.68,27-6.4,57.44-1,60.56.18,64.17,21,42.47,22.87,67.24,14.64,83.17,26,88.61,5.54-60,5.54-60,27.06,110,29.7,84.46,0-77.76,0-77.76,15.89,89.24,31.22,88.53,0-96.7,0-96.7,29.24,87,34,69-6.86-131-6.86-131,10.52,38,22.05,44.18,18,15,20.69.91-8.29-51.23-6.14-69.53-11.73-14.14-15.71-33.83-4.16-39-28.88-59.75-33.07-24.06-37.6-36.18-3.53-94.83-3.53-94.83,1.55-139.2-4.69-178.09-25.27-101.1-57.56-172.05c2-39,1.27-146.1-9.07-175.15s-29.74-74.37-29.86-79.66,6.36-98.33-9.14-134-46.22-82.61-74.14-100.24-112-20.82-112-20.82-2.7-1.83-15.87-12.8-78.46-48.57-109.51-52.54c-3.86-9.22-20.65-83.52-16.92-92s21.4-34,23.81-61.41,16.06-32.69,25.06-23.86,36.24-63.6,29-80.53-7.09-25.67-19.19-12.88-22.59,28.61-17.31,12.71,12.08-47.8,12.74-53.06,16.64-99-50.56-144.68S2151,217.32,2151,217.32"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$4, [
          createBaseVNode("path", {
            id: "Cephalic_Frontal",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Cephalic Frontal", $event)),
            "data-label": "Cephalic Frontal",
            class: "cls-fullbody-male-front-2",
            d: "M2087.21,386.43a27.77,27.77,0,0,1-37-29.44c6.31-52.35,33.37-130.16,138.58-130.16C2294.67,226.83,2320,303.64,2325,356a28.4,28.4,0,0,1-38.11,29.29c-23.85-8.76-56-15.71-87.2-7.3a34.82,34.82,0,0,1-18.86-.25C2149.72,368.57,2113.7,376.88,2087.21,386.43Z"
          }),
          _cache[50] || (_cache[50] = createBaseVNode("path", {
            id: "Nasal",
            class: "cls-fullbody-male-front-2",
            d: "M2176.28,410.83s5.63,57.34-2.3,69.49-10.23,12.65-15.84,17.58-6.22,8.32-3.3,11.29c2.47,2.5,11.26,1.7,17-.37a6.84,6.84,0,0,1,5.55.34c5,2.63,15.85,6.81,25.4.06a6.81,6.81,0,0,1,6.25-.79c7.66,2.76,19.71,5.66,20.14-7.64,0-3.19-7.16-3.32-11.63-8.43s-12.13-10.08-13.15-32.68,2.54-47.64,2.63-49.52l0-.49c.27-4.29,6.14-16.48,1.93-15.61-10.72,2.24-24.89,2.17-34,0-4.25-1,.86,12.34,1.37,16.68Z"
          }, null, -1)),
          createBaseVNode("path", {
            id: "Right_Cephalic_Orbital",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Right Cephalic Orbital", $event)),
            "data-label": "Right Cephalic Orbital",
            class: "cls-fullbody-male-front-2",
            d: "M2064.19,422.67c6.32-11.74,14.59-25.6,42.22-31.16,28.77-5.78,53.91-3.8,63.4,14.15s6.77,74.32-17.06,70.23-62.94,14.26-73.5,7.79S2057.74,440.69,2064.19,422.67Z"
          }),
          createBaseVNode("path", {
            id: "Left_Cephalic_Orbital",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Cephalic Orbital", $event)),
            "data-label": "Left Cephalic Orbital",
            class: "cls-fullbody-male-front-2",
            d: "M2318,422.67c-6.32-11.74-14.59-25.6-42.23-31.16-28.76-5.78-53.9-3.8-63.39,14.15s-6.77,74.32,17.06,70.23,62.94,14.26,73.49,7.79S2324.45,440.69,2318,422.67Z"
          }),
          createBaseVNode("path", {
            id: "Oral",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Oral", $event)),
            "data-label": "Oral",
            class: "cls-fullbody-male-front-2",
            d: "M2133.1,545.22s17.13-21.2,38.07-16.6,30.17,2.56,39.84.51c18.13-4.09,49.24,15.08,47.75,34.41-1.55,20.23-51.85,28.4-69.21,27.37S2098.91,584,2133.1,545.22Z"
          }),
          createBaseVNode("path", {
            id: "Mental",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Mental", $event)),
            "data-label": "Mental",
            class: "cls-fullbody-male-front-2",
            d: "M2248.1,615.33a26.54,26.54,0,0,1-12.45,13.61,87.46,87.46,0,0,1-24.25,8.44,113.33,113.33,0,0,1-35.87,1.17c-15.9-2-42.46-13-41.18-29.67,1.34-17.45,41.78-10.17,56.76-9.28C2204.68,600.39,2258.42,589.26,2248.1,615.33Z"
          }),
          createBaseVNode("path", {
            id: "Right_Cephalic_Buccal",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Right Cephalic Buccal", $event)),
            "data-label": "Right Cephalic Buccal",
            class: "cls-fullbody-male-front-2",
            d: "M2071.08,508.36s20.06,41.2,23.48,72.8c.69,11.63,29.23,38.14,35.12,40.52,3,1.22-3-13.13-2.17-20.42.83-7,9.41-10.52.76-20.17-17.68-19.75-6.93-40.05,2.66-45.49s24.35-32.09,1.15-43.26-34.44,4.1-53.17-2.37S2071.08,508.36,2071.08,508.36Z"
          }),
          createBaseVNode("path", {
            id: "Left_Cephalic_Buccal",
            onClick: _cache[6] || (_cache[6] = ($event) => handleBodyPartClick("Left Cephalic Buccal", $event)),
            "data-label": "Left Cephalic Buccal",
            class: "cls-fullbody-male-front-2",
            d: "M2313.55,508.36s-13.34,47.32-19.33,72.8c-4.66,14-24.06,38.14-28.91,40.52-2.48,1.22,2.5-13.13,1.79-20.42-.69-7-7.75-10.52-.63-20.17,14.55-19.75,5.7-40.05-2.19-45.49s-20.05-32.09-1-43.26,28.36,4.1,43.77-2.37S2313.55,508.36,2313.55,508.36Z"
          }),
          createBaseVNode("path", {
            id: "Cervical",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Cervical", $event)),
            "data-label": "Cervical",
            class: "cls-fullbody-male-front-2",
            d: "M1980.19,757.75h0s25.28-28.34,103.4-44.43c9.38-2.6,16.46-37.8,20-60.06a10.06,10.06,0,0,1,15.69-6.67c12.9,9,35.57,20,69.18,20a142.25,142.25,0,0,0,75-20.82,10.07,10.07,0,0,1,15.33,7.55,147.24,147.24,0,0,0,5.53,28.18,52,52,0,0,0,34.2,33.86c17.56,5.5,43.37,14.32,77.36,41.61.63.51,1.51.76,2,1.42,10.33,14.24-31.67,35.86-80.74,32.46h0c-82.82-16.23-97.15-.78-123.47,6a10.07,10.07,0,0,1-6.91-.71c-20.55-10-76.87-19.14-109.87-6.62C2041.46,802.94,1967.68,775.37,1980.19,757.75Z"
          }),
          createBaseVNode("path", {
            id: "Thoracic_Sternal",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Thoracic Sternal", $event)),
            "data-label": "Thoracic Sternal",
            class: "cls-fullbody-male-front-2",
            d: "M2197.46,816.31a8.06,8.06,0,0,0-10.88-.16c-7.31,6.39-19.19,20.44-18.48,43.87,1,33.7,13.59,171.36,0,205.28-14.7,36.7-8.79,57.25,17.09,76.16a8.47,8.47,0,0,0,8.71.78c27.17-13.32,34.36-33.84,20.46-75.92-11-36.68-2.71-165.8,0-207,0-.21,0-.42,0-.63C2214.27,835.93,2204,822.55,2197.46,816.31Z"
          }),
          createBaseVNode("path", {
            id: "Right_Thoracic_Mammary",
            onClick: _cache[9] || (_cache[9] = ($event) => handleBodyPartClick("Right Thoracic Mammary", $event)),
            "data-label": "Right Thoracic Mammary",
            class: "cls-fullbody-male-front-2",
            d: "M2170.15,824.28c13.78-37.79-48.18-30.24-82.22-22-59.49,14.47-78.12-5.19-106.72-18.89-18.65-8.94-91.85-13.91-118,8.17-28.08,23.74,25.52,91.68,58.29,99.64,41.8,10.14,45.27,22.27,52.53,100.72s22.46,128,35.74,139-47.68-12-71.74-40.17a12.22,12.22,0,0,1-1.14-1.63c-6.22-10.41-17.65,43.94-12.27,81.69,3.86,27.09,18.41,57.62,29.89,75.47a17.16,17.16,0,0,0,26.31,3.15c28.88-27.57,86.19-94.92,140.74-116.3l.67-.25c2.86-1,29.71-11.31,34.09-40.51,7-46.81,19.79-79.76,7-171.68-.06-.44-.1-.88-.13-1.32C2158.43,840.35,2162.51,845.21,2170.15,824.28Z"
          }),
          createBaseVNode("path", {
            id: "Left_Thoracic_Mammary",
            onClick: _cache[10] || (_cache[10] = ($event) => handleBodyPartClick("Left Thoracic Mammary", $event)),
            "data-label": "Left Thoracic Mammary",
            class: "cls-fullbody-male-front-2",
            d: "M2213.24,824.28c-13.78-37.79,48.18-30.24,82.22-22,59.48,14.47,78.12-5.19,106.72-18.89,18.65-8.94,92.63-5,118.73,17.1,28.09,23.75-14.3,83.24-59.06,90.71-41.8,10.14-45.28,22.27-52.54,100.72s-22.45,128-35.73,139c-13.13,10.86,47.68-12,71.73-40.17a11.43,11.43,0,0,0,1.15-1.63c6.22-10.41,17.65,43.94,12.27,81.69-3.86,27.09-18.41,57.62-29.89,75.47a17.16,17.16,0,0,1-26.31,3.15c-28.88-27.57-86.19-94.92-140.74-116.3l-.67-.25c-2.86-1-29.71-11.31-34.09-40.51-7-46.81-19.79-79.76-7-171.68.06-.44.11-.88.14-1.32C2225,840.35,2220.88,845.21,2213.24,824.28Z"
          }),
          createBaseVNode("path", {
            id: "Right_Thoracic_Axillary",
            onClick: _cache[11] || (_cache[11] = ($event) => handleBodyPartClick("Right Thoracic Axillary", $event)),
            "data-label": "Right Thoracic Axillary",
            class: "cls-fullbody-male-front-2",
            d: "M1871.85,879.5a6.34,6.34,0,0,1,10.41-4.83c9.58,8.06,32.6,22.69,49.42,26.08,32.76,6.61,31.93,50.16,39.45,127.78s32,93.45,24.38,91.92-52.85-28.09-59.75-50.3,5.53-46.47-15.15-89.62C1903,943.72,1871.64,904.13,1871.85,879.5Z"
          }),
          createBaseVNode("path", {
            id: "Left_Thoracic_Axillary",
            onClick: _cache[12] || (_cache[12] = ($event) => handleBodyPartClick("Left Thoracic Axillary", $event)),
            "data-label": "Left Thoracic Axillary",
            class: "cls-fullbody-male-front-2",
            d: "M2513.06,879.5a6.33,6.33,0,0,0-10.4-4.83c-9.59,8.06-32.6,22.69-49.43,26.08-32.76,6.61-31.93,50.16-39.45,127.78s-26.82,92-19.16,90.47,47.63-26.64,54.53-48.85-5.53-46.47,15.15-89.62C2481.94,943.72,2513.27,904.13,2513.06,879.5Z"
          }),
          createBaseVNode("path", {
            id: "Right_Acromial",
            onClick: _cache[13] || (_cache[13] = ($event) => handleBodyPartClick("Right Acromial", $event)),
            "data-label": "Right Acromial",
            class: "cls-fullbody-male-front-2",
            d: "M1842.33,807.45a3.35,3.35,0,0,0-2.82,1.12c-6.84,7.25-57.22,61.63-57.33,89.24-.12,29.62,42.77,7.15,61.16,24.51s64.34,55.55,34.72-3.38C1850.09,863.29,1853.09,808.88,1842.33,807.45Z"
          }),
          createBaseVNode("path", {
            id: "Right_Brachial",
            onClick: _cache[14] || (_cache[14] = ($event) => handleBodyPartClick("Right Brachial", $event)),
            "data-label": "Right Brachial",
            class: "cls-fullbody-male-front-2",
            d: "M1778.82,921.3a15,15,0,0,0-2.34,4.69c-1.84,5.91-6.24,24-2.79,53,4.29,36,4.48,38.3-11.32,72s-39.54,80.43-20.39,150.13c5.74,17.61,24.37-10.73,40.9-13.79s22.67,20.68,44.12,31.4,28.38-18.51,44.5-16.74c10.43,1.14,37.45-105.08,40.52-182.81s-17.88-51.68-39.58-65.47-27.77-27.57-48.86-29.87C1803.8,921.7,1787.42,910.12,1778.82,921.3Z"
          }),
          createBaseVNode("path", {
            id: "Left_Acromial",
            onClick: _cache[15] || (_cache[15] = ($event) => handleBodyPartClick("Left Acromial", $event)),
            "data-label": "Left Acromial",
            class: "cls-fullbody-male-front-2",
            d: "M2539.5,807.84a3.34,3.34,0,0,1,2.82,1.12c6.83,7.25,57.22,61.63,57.33,89.24.11,29.61-42.78,7.15-61.16,24.51-17.25,16.29-54.89,45.73-38.64,5.48a88,88,0,0,1,7.21-13.9C2539.65,862.17,2529.07,809.22,2539.5,807.84Z"
          }),
          createBaseVNode("path", {
            id: "Left_Brachial",
            onClick: _cache[16] || (_cache[16] = ($event) => handleBodyPartClick("Left Brachial", $event)),
            "data-label": "Left Brachial",
            class: "cls-fullbody-male-front-2",
            d: "M2601.66,921.3A15,15,0,0,1,2604,926c1.84,5.91,6.24,24,2.79,53-4.29,36-4.48,38.3,11.32,72s39.54,80.43,20.39,150.13c-5.74,17.61-24.37-10.73-40.91-13.79s-22.66,20.68-44.11,31.4-28.38-18.51-44.5-16.74c-10.43,1.14-37.45-105.08-40.52-182.81s17.88-51.68,39.58-65.47,27.77-27.57,48.86-29.87C2576.67,921.7,2593.06,910.12,2601.66,921.3Z"
          }),
          createBaseVNode("path", {
            id: "Right_Antecubital",
            onClick: _cache[17] || (_cache[17] = ($event) => handleBodyPartClick("Right Antecubital", $event)),
            "data-label": "Right Antecubital",
            class: "cls-fullbody-male-front-2",
            d: "M1734.84,1221.12s-2.28,27,0,46.39,28.58-4.77,39.82,14.64c5.61,9.7,11.1,16.06,14.55,16.25s8.68-7.31,18.38-16.25c19.41-17.87,30.13,21.12,42.39-7s18.89-51.07,28.08-66.39c2.55-9.19-19.84,7.74-28.81,14.3-11.53,8.42-31.49,4.13-42.7-12.24s-20.29-20.45-28.46-14.57c-4.48,3.22-15.94,14.55-33.82,15.06C1735.09,1211.6,1734.84,1221.12,1734.84,1221.12Z"
          }),
          createBaseVNode("path", {
            id: "Right_Antebrachial",
            onClick: _cache[18] || (_cache[18] = ($event) => handleBodyPartClick("Right Antebrachial", $event)),
            "data-label": "Right Antebrachial",
            class: "cls-fullbody-male-front-2",
            d: "M1725.52,1295.53c-.14.3-21.08,54.24-34.35,87.94-12.7,32.22-19.61,159.37-20.77,261.4-.08,7.26-4.24,41.14,2,44.77,15.15,8.75,53.11,13.1,70.64,8.34,6.47-1.76,11.46-34.22,13.79-40.51,21.43-58,69.17-189.72,70.13-225.83,1-38.64-.3-93.84,15.17-131.42,2.95-8.58-8.79-3-19-11.65s-24.53,21.2-36.91,19.92-13.27-19-24.22-23.33-13.94,3.23-21.09,0S1727.2,1292,1725.52,1295.53Z"
          }),
          createBaseVNode("path", {
            id: "Left_Antecubital",
            onClick: _cache[19] || (_cache[19] = ($event) => handleBodyPartClick("Left Antecubital", $event)),
            "data-label": "Left Antecubital",
            class: "cls-fullbody-male-front-2",
            d: "M2649.26,1221.12s2.28,27,0,46.39-28.58-4.77-39.81,14.64c-5.62,9.7-11.11,16.06-14.55,16.25s-8.69-7.31-18.39-16.25c-19.4-17.87-30.13,21.12-42.38-7s-18.89-51.07-28.09-66.39c-2.55-9.19,19.84,7.74,28.81,14.3,11.53,8.42,31.49,4.13,42.71-12.24s20.28-20.45,28.45-14.57c4.49,3.22,15.95,14.55,33.82,15.06C2649,1211.6,2649.26,1221.12,2649.26,1221.12Z"
          }),
          createBaseVNode("path", {
            id: "Left_Antecubital-2",
            onClick: _cache[20] || (_cache[20] = ($event) => handleBodyPartClick("Left Antecubital-2", $event)),
            "data-label": "Left Antecubital",
            class: "cls-fullbody-male-front-2",
            d: "M2658.58,1295.53c.15.3,21.08,54.24,34.36,87.94,12.69,32.22,19.6,159.37,20.76,261.4.09,7.26,4.25,41.14-2,44.77-15.15,8.75-53.11,13.1-70.64,8.34-6.47-1.76-11.46-34.22-13.78-40.51-21.43-58-69.18-189.72-70.13-225.83-1-38.64.3-93.84-15.17-131.42-3-8.58,8.78-3,19-11.65s24.53,21.2,36.9,19.92,13.28-19,24.23-23.33,13.93,3.23,21.08,0S2656.91,1292,2658.58,1295.53Z"
          }),
          createBaseVNode("path", {
            id: "Right_Carpal",
            onClick: _cache[21] || (_cache[21] = ($event) => handleBodyPartClick("Right Carpal", $event)),
            "data-label": "Right Carpal",
            class: "cls-fullbody-male-front-2",
            d: "M1674.31,1695a5.7,5.7,0,0,0-7.17,5.19c-.23,4.25-.48,9.6-.52,13.83-1.47,13.38,52.25,18.23,68.09,15.45a6.53,6.53,0,0,0,5.07-4.38c1.93-5.78,3.44-11.21,4.81-16.49.85-3.28-3.27-6-6.91-5.53C1712.12,1706.49,1696.05,1700.78,1674.31,1695Z"
          }),
          createBaseVNode("path", {
            id: "Left_Carpal",
            onClick: _cache[22] || (_cache[22] = ($event) => handleBodyPartClick("Left Carpal", $event)),
            "data-label": "Left Carpal",
            class: "cls-fullbody-male-front-2",
            d: "M2708.51,1694.05a5.7,5.7,0,0,1,7.15,5.21c.22,4.26.46,9.6.49,13.84,1.43,13.38-52.31,18.07-68.14,15.25a6.53,6.53,0,0,1-5.05-4.4c-1.92-5.79-3.42-11.23-4.77-16.51-.84-3.28,3.29-6,6.92-5.5C2670.66,1705.47,2686.75,1699.81,2708.51,1694.05Z"
          }),
          createBaseVNode("path", {
            id: "Right_Manus_Palmar",
            onClick: _cache[23] || (_cache[23] = ($event) => handleBodyPartClick("Right Manus Palmar", $event)),
            "data-label": "Right Manus Palmar",
            class: "cls-fullbody-male-front-2",
            d: "M1674.86,1727.66c9.08,4.19,25.41,8.89,51.36,7.13a12.42,12.42,0,0,1,13.14,10.41c4,24.68,10.18,79.79,4.4,94.23-7.15,17.87-16.34,31.14-18.38,54.63s-25.7-6.63-58-6.63-60.36,9.88-49-25.12-23.17-63.74,5.42-92.84c20.67-21,29.86-29.81,35.88-37.87A12.46,12.46,0,0,1,1674.86,1727.66Z"
          }),
          createBaseVNode("path", {
            id: "Right_Manus_Pollex",
            onClick: _cache[24] || (_cache[24] = ($event) => handleBodyPartClick("Right Manus Pollex", $event)),
            "data-label": "Right Manus Pollex",
            class: "cls-fullbody-male-front-2",
            d: "M1602.57,1784.79c-1.22,1.35-3.31,10.7-3.57,12.51-.82,5.61-5.28,19.64-8.94,24.51-5.58,7.43-12.68,20.93-12.42,24.76s-2.13,63-6,72.17,24.47-3.23,29.58-29.53,16.89-43.4,13.06-56.42C1610.79,1820.78,1609.51,1777.13,1602.57,1784.79Z"
          }),
          createBaseVNode("path", {
            id: "Right_Manus_Digital",
            onClick: _cache[25] || (_cache[25] = ($event) => handleBodyPartClick("Right Manus Digital", $event)),
            "data-label": "Right Manus Digital",
            class: "cls-fullbody-male-front-2",
            d: "M1610.73,1887.75c4.34.78,5.63,6.82,21.71,7.08,22.47-2.3,35-5.87,51.58.26s37.25,15.2,45.06,9.82c6.79-2.56,2,16.86-3,35.69s-7.14,48.52-19.09,55.63-9.83-12.29-9.87-19.7-7.83,2.6-9.81,14.19-14.85,42.74-19,32.4-1.61-37.68-2.62-44.55-8.3,27.85-12.35,35.75-9.61,25.36-16.25,19.57-6-37.14-4.71-48.33,8-52.69,4.45-45.79-21,55.23-26.44,60.42-7.34,10.16-9-1.41-3.64-45,0-65.14S1606.38,1887,1610.73,1887.75Z"
          }),
          createBaseVNode("path", {
            id: "Left_Manus_Palmar",
            onClick: _cache[26] || (_cache[26] = ($event) => handleBodyPartClick("Left Manus Palmar", $event)),
            "data-label": "Left Manus Palmar",
            class: "cls-fullbody-male-front-2",
            d: "M2705.76,1724.66c-9.08,4.19-25.41,8.89-51.36,7.13a12.43,12.43,0,0,0-13.14,10.41c-4,24.68-10.17,79.79-4.4,94.23,7.15,17.87,16.34,31.14,18.39,54.63s25.7-6.63,58-6.63,61.21,12.81,49.84-22.19,22.33-66.67-6.27-95.77c-20.66-21-29.86-29.81-35.88-37.87a12.54,12.54,0,0,0-7.76-4.87A12.34,12.34,0,0,0,2705.76,1724.66Z"
          }),
          createBaseVNode("path", {
            id: "Left_Manus_Pollex",
            onClick: _cache[27] || (_cache[27] = ($event) => handleBodyPartClick("Left Manus Pollex", $event)),
            "data-label": "Left Manus Pollex",
            class: "cls-fullbody-male-front-2",
            d: "M2781.3,1788.36c1.22,1.35,6.07,7.13,6.33,8.94.82,5.61,5.28,19.64,8.94,24.51,5.58,7.43,12.68,20.93,12.42,24.76s6.27,63.32,10.1,72.52-30.18,9.31-35.16-22.09c-4.19-26.46-19.06-47.62-15.23-60.64C2772.23,1824.36,2774.36,1780.7,2781.3,1788.36Z"
          }),
          createBaseVNode("path", {
            id: "Left_Manus_Digital",
            onClick: _cache[28] || (_cache[28] = ($event) => handleBodyPartClick("Left Manus Digital", $event)),
            "data-label": "Left Manus Digital",
            class: "cls-fullbody-male-front-2",
            d: "M2769.9,1887.75c-4.34.78-5.63,6.82-21.72,7.08-22.46-2.3-35-5.87-51.57.26s-37.26,15.2-45.06,9.82c-6.79-2.56-2,16.86,3,35.69s7.14,48.52,19.09,55.63,9.82-12.29,9.86-19.7,7.84,2.6,9.81,14.19,14.86,42.74,19,32.4,1.61-37.68,2.62-44.55,8.3,27.85,12.34,35.75,9.62,25.36,16.26,19.57,6-37.14,4.71-48.33-8-52.69-4.46-45.79,21,55.23,26.45,60.42,7.34,10.16,9-1.41,3.63-45,0-65.14S2774.24,1887,2769.9,1887.75Z"
          }),
          createBaseVNode("path", {
            id: "Abdominal",
            onClick: _cache[29] || (_cache[29] = ($event) => handleBodyPartClick("Abdominal", $event)),
            "data-label": "Abdominal",
            class: "cls-fullbody-male-front-2",
            d: "M2109.38,1143.43c-35.23,23-70.53,53-95.63,80.68s-37.17,42.54-49.42,46.62,43.66,40.86,10.55,134.7c-32,90.77-22.05,122.08-16.69,141,4,15.95,20.1,27.26,38.44,33.95,19.25,7,37.73,2.82,50.45-.32,24.85-6.13,142.47-28.84,279.32,1,88.85,25.78,125.87-58.3,92.68-143.23-29.62-47.83-17.62-121.93,13.53-166.72,8.1-24.08-19.89,2-50.94-34.33-3.33-3.89-6.75-7.72-10.37-11.35-85.52-85.87-120.41-91.71-137.61-91.69-16.36,0-17.2,12.44-43,13.28C2169.92,1147.68,2155.85,1116.87,2109.38,1143.43Z"
          }),
          createBaseVNode("path", {
            id: "Right_Coxal",
            onClick: _cache[30] || (_cache[30] = ($event) => handleBodyPartClick("Right Coxal", $event)),
            "data-label": "Right Coxal",
            class: "cls-fullbody-male-front-2",
            d: "M1961.15,1573.38s42.19,37.6,60.91,47.47c26.57,14-39.81,119-48.23,216.13-2.3,19.81-68.14,57.63-69.9,32.06-2-29.61,9.93-100.18,27.55-157.63S1952.21,1561.89,1961.15,1573.38Z"
          }),
          createBaseVNode("path", {
            id: "Right_Femoral",
            onClick: _cache[31] || (_cache[31] = ($event) => handleBodyPartClick("Right Femoral", $event)),
            "data-label": "Right Femoral",
            class: "cls-fullbody-male-front-2",
            d: "M2049.79,1655.09c13.46,29.78,14.14,33.87,35.59,72,4.11,7.29,30.29,49.88,32.6,57.93,3.9,13.6,3.56,23.55,2.27,51.74-2.19,47.6,43.91,59.58,45.37,85s1.46,118.87-7.73,194.44-14.3,155.24-13.28,195.07,1,67.91-14.29,40.34-28.09-71.32-80.68-50.22-51.09,48.68-81.72-41.7c-30.17-89-55.14-107.23-61.76-362.45a14.17,14.17,0,0,1,7.31-11.12c15.68-8.43,45.87-16.16,62.45-40.71a29.47,29.47,0,0,0,3.91-11.59c3.39-29.21,2.56-42.35,51.42-178.47C2037.92,1636,2046.32,1647.41,2049.79,1655.09Z"
          }),
          createBaseVNode("path", {
            id: "Left_Coxal",
            onClick: _cache[32] || (_cache[32] = ($event) => handleBodyPartClick("Left Coxal", $event)),
            "data-label": "Left Coxal",
            class: "cls-fullbody-male-front-2",
            d: "M2418.35,1573.38s-42.19,37.6-60.92,47.47c-26.57,14,39.82,119,48.24,216.13,2.3,19.81,68.13,57.63,69.9,32.06,2-29.61-9.93-100.18-27.55-157.63S2427.29,1561.89,2418.35,1573.38Z"
          }),
          createBaseVNode("path", {
            id: "Left_Femoral",
            onClick: _cache[33] || (_cache[33] = ($event) => handleBodyPartClick("Left Femoral", $event)),
            "data-label": "Left Femoral",
            class: "cls-fullbody-male-front-2",
            d: "M2329.71,1655.09c-13.46,29.78-6.37,30.3-27.82,68.43-4.11,7.3-37.23,63.4-39.53,71.45-3.91,13.61-1.6,23.92-.3,52.12,2.19,47.6-49.6,54.75-51.06,80.17s1.42,113.36,10.61,188.93,14.29,155.24,13.27,195.07-1,67.91,14.3,40.34,28.09-71.32,80.68-50.22,51.09,48.68,81.72-41.7c30.17-89,41.89-101.53,61.76-362.45a14.19,14.19,0,0,0-7.31-11.12c-15.68-8.43-45.88-16.16-62.45-40.71a29.65,29.65,0,0,1-3.92-11.59c-3.38-29.21-2.56-42.35-51.41-178.47C2341.58,1636,2333.18,1647.41,2329.71,1655.09Z"
          }),
          createBaseVNode("path", {
            id: "Right_Patellar",
            onClick: _cache[34] || (_cache[34] = ($event) => handleBodyPartClick("Right Patellar", $event)),
            "data-label": "Right Patellar",
            class: "cls-fullbody-male-front-2",
            d: "M1992.71,2352.8a32.83,32.83,0,0,1,14-20.64c15.49-10.29,45.65-28,69.73-28.27,33.93-.29,50.78,59.06,61,70.23s9.71,33.65.52,44.88-49,19.4-70,22.47-54.64-15.83-66.38-34.73C1992,2391.23,1988.55,2373,1992.71,2352.8Z"
          }),
          createBaseVNode("path", {
            id: "Left_Patellar",
            onClick: _cache[35] || (_cache[35] = ($event) => handleBodyPartClick("Left Patellar", $event)),
            "data-label": "Left Patellar",
            class: "cls-fullbody-male-front-2",
            d: "M2388.37,2352.8a32.88,32.88,0,0,0-14-20.64c-15.48-10.29-45.64-28-69.72-28.27-33.94-.29-50.79,59.06-61,70.23s-9.7,33.65-.51,44.88,49,19.4,70,22.47,54.63-15.83,66.38-34.73C2389.08,2391.23,2392.53,2373,2388.37,2352.8Z"
          }),
          createBaseVNode("path", {
            id: "Right_Peroneal",
            onClick: _cache[36] || (_cache[36] = ($event) => handleBodyPartClick("Right Peroneal", $event)),
            "data-label": "Right Peroneal",
            class: "cls-fullbody-male-front-2",
            d: "M2014.66,2435c1-1.16,26.6,10.31,47.75,14.31a10.58,10.58,0,0,1,8.68,10.27c.68,64.19,5.55,423.64,13.9,597.83a10.52,10.52,0,0,1-12.64,10.84c-11-2.36-24.66-11.51-24.25-22.14.64-16.34-33.19-205.78-49.53-300.76s-17.91-124.66,5.79-209C2025.81,2458,2010.15,2439.94,2014.66,2435Z"
          }),
          createBaseVNode("path", {
            id: "Right_Crural",
            onClick: _cache[37] || (_cache[37] = ($event) => handleBodyPartClick("Right Crural", $event)),
            "data-label": "Right Crural",
            class: "cls-fullbody-male-front-2",
            d: "M2075.41,2459a14.61,14.61,0,0,1,9.75-13.08c15.23-5.34,44.72-14.77,57.69-20,9.25-3.73-13.21,51.8-14.07,83.21-.17,63.23,36.31,120.75,30.64,190.66-10.72,103.72-45.32,144.92-36.89,347.13,1.53,13.79-33.07,32.68-34.34,13.95C2087.13,3045.29,2071.56,2536.67,2075.41,2459Z"
          }),
          createBaseVNode("path", {
            id: "Left_Peroneal",
            onClick: _cache[38] || (_cache[38] = ($event) => handleBodyPartClick("Left Peroneal", $event)),
            "data-label": "Left Peroneal",
            class: "cls-fullbody-male-front-2",
            d: "M2370.83,2430.74c-1-1.15-31.79,14.52-52.94,18.52a10.59,10.59,0,0,0-8.68,10.27c-.67,64.19-5.55,423.64-13.9,597.83A10.52,10.52,0,0,0,2308,3068.2c11.05-2.36,24.66-11.51,24.25-22.14-.64-16.34,34.54-188.93,50.88-283.91s16.85-115.92-7.14-225.87C2358.64,2457,2375.34,2435.73,2370.83,2430.74Z"
          }),
          createBaseVNode("path", {
            id: "Left_Crural",
            onClick: _cache[39] || (_cache[39] = ($event) => handleBodyPartClick("Left Crural", $event)),
            "data-label": "Left Crural",
            class: "cls-fullbody-male-front-2",
            d: "M2304.89,2459a14.61,14.61,0,0,0-9.75-13.08c-15.22-5.34-41.3-14.95-54.27-20.19-9.25-3.73,9.8,52,10.65,83.39.17,63.23-36.3,120.75-30.64,190.66,10.72,103.72,45.32,144.92,36.9,347.13-1.53,13.79,33.06,32.68,34.33,13.95C2293.18,3045.29,2308.75,2536.67,2304.89,2459Z"
          }),
          createBaseVNode("path", {
            id: "Right_Tarsal",
            onClick: _cache[40] || (_cache[40] = ($event) => handleBodyPartClick("Right Tarsal", $event)),
            "data-label": "Right Tarsal",
            class: "cls-fullbody-male-front-2",
            d: "M2043.15,3073.48c2.09-5.52,7.2-10.36,12.61-8,7.06,3.06,16.08,7.18,25.37,5.53a45.67,45.67,0,0,1,13.76-.1c8.52,1.64,13.26,2.4,24.7-9.52,4.43-3.81,14,14.13,18.56,27.41,5.45,15.74-.69,43.06-8.09,43.41-17.17.82-27.06-14.39-51.57-7.5-10.43,2.93-33.92,13.87-37.66-.77C2037.72,3111.79,2036.53,3090.93,2043.15,3073.48Z"
          }),
          createBaseVNode("path", {
            id: "Right_Pedal",
            onClick: _cache[41] || (_cache[41] = ($event) => handleBodyPartClick("Right Pedal", $event)),
            "data-label": "Right Pedal",
            class: "cls-fullbody-male-front-2",
            d: "M2049.54,3135.5a6.73,6.73,0,0,0-3.69,7.75c1.1,4.2,3.43,9.05-9.49,22-15.49,15.55-26.64,40.17-29,58.13a16.42,16.42,0,0,0-.15,2.71c.78,20.59,45.42-6.1,79.68,5.14,30.64,10,69.12,12.76,65-11.24s-3.59-31.59-9.72-46.91-4.41-33.72-9.38-34.87c-18.39-4.26-30.28-14-48-9.82C2071.72,3131.55,2055.82,3132.56,2049.54,3135.5Z"
          }),
          createBaseVNode("path", {
            id: "Left_Tarsal",
            onClick: _cache[42] || (_cache[42] = ($event) => handleBodyPartClick("Left Tarsal", $event)),
            "data-label": "Left Tarsal",
            class: "cls-fullbody-male-front-2",
            d: "M2339.09,3073.48c-2.09-5.52-5.06-13.25-10.48-10.91-7.06,3.07-18.21,10.08-27.5,8.43a45.67,45.67,0,0,0-13.76-.1c-8.52,1.64-13.26,2.4-24.7-9.52-4.43-3.81-13,14.49-18.56,27.41-7.05,16.51,2.57,41.35,10,41.7,17.18.82,25.19-11.49,49.7-4.6,10.43,2.94,33.91,12.68,37.65-2C2344.52,3111.79,2345.71,3090.93,2339.09,3073.48Z"
          }),
          createBaseVNode("path", {
            id: "Left_Pedal",
            onClick: _cache[43] || (_cache[43] = ($event) => handleBodyPartClick("Left Pedal", $event)),
            "data-label": "Left Pedal",
            class: "cls-fullbody-male-front-2",
            d: "M2335.91,3136c2.92,1.37.5,3.94-.32,7.06-1.1,4.21-.49,13.15,8.32,21.71a88.13,88.13,0,0,1,14.83,18.19c2,3.12,18.28,37.3,17.53,42.91-2.7,20.43-46.68-5.85-80.94,5.39-30.64,10-69.13,12.76-65-11.24s3.72-27.26,9.47-42.72c10-27,7.92-38.74,12.89-39.89,18.38-4.26,27-13.22,44.76-9,5.15,1.23,12.75,4.56,18.61,5.47C2325.08,3135.31,2332.1,3134.22,2335.91,3136Z"
          }),
          createBaseVNode("path", {
            id: "Right_Pedal_Digital",
            onClick: _cache[44] || (_cache[44] = ($event) => handleBodyPartClick("Right Pedal Digital", $event)),
            "data-label": "Right Pedal Digital",
            class: "cls-fullbody-male-front-2",
            d: "M1987.25,3268.25s-19.22-24,6.81-38.47c15.66-4.94,4.26,12.63,25.7,11.21s39.32-8.32,56.17-5.76,18.21,11.3,40.68,8.93c9.62-1,5,10.61.17,23.12s-13.12,23.86-18.85,21.82-.57.2-14.72-6.12c-7-2.81-12-3.07-18.54,2.66-3.77,3.3-15.32,4.29-24.91-4.25-4.81-4.28-6.41.1-13.5.43-5.86.28-14.94,2.24-19.49-6a11.22,11.22,0,0,0-13.06-5.44C1991.21,3271.17,1989.15,3271.29,1987.25,3268.25Z"
          }),
          createBaseVNode("path", {
            id: "Left_Pedal_Digital",
            onClick: _cache[45] || (_cache[45] = ($event) => handleBodyPartClick("Left Pedal Digital", $event)),
            "data-label": "Left Pedal Digital",
            class: "cls-fullbody-male-front-2",
            d: "M2393.58,3268.25s19.22-24-6.81-38.47c-15.66-4.94-4.25,12.63-25.7,11.21s-39.32-8.32-56.17-5.76-18.21,11.3-40.68,8.93c-9.62-1-5,10.61-.17,23.12s13.12,23.86,18.86,21.82.57.2,14.71-6.12c7-2.81,12-3.07,18.54,2.66,3.78,3.3,15.32,4.29,24.91-4.25,4.81-4.28,6.42.1,13.51.43,5.85.28,14.93,2.24,19.48-6a11.22,11.22,0,0,1,13.06-5.44C2389.62,3271.17,2391.68,3271.29,2393.58,3268.25Z"
          }),
          createBaseVNode("path", {
            id: "Right_Hallux",
            onClick: _cache[46] || (_cache[46] = ($event) => handleBodyPartClick("Right Hallux", $event)),
            "data-label": "Right Hallux",
            class: "cls-fullbody-male-front-2",
            d: "M2125.21,3282.49s-4.44-13.51,1-33.37a11.79,11.79,0,0,1,13.1-8.52c6,.89,12.62,1.3,15.82-7.57,5.54-15.39,14.21,10.28,15.4,19.41s3.93,27.24-12.92,34.39S2125,3287.85,2125.21,3282.49Z"
          }),
          createBaseVNode("path", {
            id: "Left_Hallux",
            onClick: _cache[47] || (_cache[47] = ($event) => handleBodyPartClick("Left Hallux", $event)),
            "data-label": "Left Hallux",
            class: "cls-fullbody-male-front-2",
            d: "M2255.94,3282.49s4.44-13.51-1-33.37a11.78,11.78,0,0,0-13.1-8.52c-6,.89-12.62,1.3-15.81-7.57-5.55-15.39-14.22,10.28-15.4,19.41s-3.93,27.24,12.92,34.39S2256.2,3287.85,2255.94,3282.49Z"
          }),
          _cache[51] || (_cache[51] = createBaseVNode("path", {
            id: "Pelvic",
            class: "cls-fullbody-male-front-2",
            d: "M2032.43,1595.05c-.12,11.51,36.85,79,62.48,113.73a10.94,10.94,0,0,0,8.05,4.42c64.63,4.35,126.76,3.4,181.57.63,5.82-.29,16.57-22.56,34.44-50.72,13.87-21.87,5.89-13.32,33.15-61,1.92-3.36.52-7.48-3.17-9.31-25.51-12.64-132.19-20.84-155.74-20.84C2172.07,1571.91,2027.51,1572.79,2032.43,1595.05Z"
          }, null, -1)),
          createBaseVNode("path", {
            id: "Inguinal",
            onClick: _cache[48] || (_cache[48] = ($event) => handleBodyPartClick("Inguinal", $event)),
            "data-label": "Inguinal",
            class: "cls-fullbody-male-front-2",
            d: "M2108.57,1718.72a2.14,2.14,0,0,0-2.32,2.08,2.32,2.32,0,0,0,.15.72A177.76,177.76,0,0,0,2119,1746c6.06,9.94,26.17,42.62,33,51.42a4.3,4.3,0,0,0,2.84,1.6c10.67,1.35,62.7,2,74.11-.11a3.66,3.66,0,0,0,2.11-1.23c7.46-8.68,22.81-29.54,32-44.62,6.47-10.6,16.88-28,19.71-33.14a1.21,1.21,0,0,0-1.06-1.8c-12.48.28-66.24,3.29-91.9,3C2162.3,1720.88,2127.82,1719.91,2108.57,1718.72Z"
          }),
          createBaseVNode("path", {
            id: "Pubic",
            onClick: _cache[49] || (_cache[49] = ($event) => handleBodyPartClick("Pubic", $event)),
            "data-label": "Pubic",
            class: "cls-fullbody-male-front-2",
            d: "M2158,1804.43a2.71,2.71,0,0,0-2.87,3.19c1.09,8.11,5.45,32.43-3.73,51.75-19.57,41.2,18.36,35,18.36,35h0c3.77,4.29,6.83,21.17,26.07,19.54s20.88-20.15,24-19.23,24.13,1.11,20.45-18.83-15.93-26.45-10.37-60.94c.28-2.72.81-8.8,1.13-10.17.26-1.09-.59-1.47-1.68-1.22-6.89,1.58-26.42,3.32-37.49,3.19C2179.57,1806.55,2167.53,1804.93,2158,1804.43Z"
          })
        ]),
        _cache[53] || (_cache[53] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-9e1f2597><path class="cls-fullbody-male-front-3" d="M2063.42,467.34c-18.7-37.81-31.72-83.26-28.37-125.71a130.86,130.86,0,0,1,11.1-42.82c23.9-56.95,79.53-92.27,141.09-91.41a189.17,189.17,0,0,1,85.41,21.65c51.79,27.65,74.41,78.14,70.81,135.47-2,34.37-11.91,67.89-25.48,99.3,8.78-30.79,15.75-62.29,16.6-94.29.76-30.89-5-63-22.6-88.92-27.25-40.43-77.4-60-124.86-61.2-65.49-1-119.81,40.9-139.37,102.84-13.28,45.82-.82,101.29,15.67,145.09Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2063.42,467.34c-5.45-7.62-9.59-15.76-13.78-24-2.68-4.72-6.39-9.3-11.37-11.37-4.65-2-9.44-.74-11.63,3.95-2.4,4.88-1.78,11.17-1.57,16.56a157.35,157.35,0,0,0,3.48,26.87c3.25,13.46,8.69,29,20.85,36.53,3.28,1.81,7.06,2.92,10.13,1a9.49,9.49,0,0,1,1.57-.92c9.71-3.82,14.75,10.09,17.56,16.82,6.83,17.87,10.82,38.51,16.35,56.77,2.59,6.93,7.75,12.38,13,18a223.57,223.57,0,0,0,27.53,23.47c4.64,3.34,9.83,7.09,14.8,9.52a66.22,66.22,0,0,0,16.58,4.62c21.45,3.23,50.17,2.63,70.09-6.09,28.16-14.1,58.69-49.69,63.15-81.44,1-6.17,2.22-12.34,3.85-18.51,1.87-6.57,3.64-12.72,8-18.53,5.87-7.35,12.59-6.43,19.78-1.54a6.07,6.07,0,0,0,.61.33c.1.06.12,0-.34,0l-2.1.39c4.94-2.77,8.27-8.37,11.2-13.27a128.33,128.33,0,0,0,15.38-56.25c.16-5.59-.22-12.89-2.82-17.52-.86-1.21-1.11-1.52-2-1.55a9.18,9.18,0,0,0-4.07,1.42c-5.12,2.94-9.78,7.31-13.89,11.68a28.17,28.17,0,0,0-2.76,3.57,152.71,152.71,0,0,1-13,16.1,153.39,153.39,0,0,1,7.2-21.28,49.41,49.41,0,0,1,12.41-15.89c5-4.34,12.86-8.3,19.49-4.49,9,5.47,8,19.42,8,28.21a139.75,139.75,0,0,1-8.08,40.94c-4.25,11.63-12.43,31.41-24.42,36.71l-1.12-.09c-2.53-.25-4.18-1.52-6.06-2.61-2.89-1.71-4.34-2.16-6.43.64-3.09,4.15-4.76,10.18-6.2,15.38-2.47,8.82-3.31,18.19-5.56,27.17A104.8,104.8,0,0,1,2295.58,595c-11.63,19-27.25,35.63-46.07,47.68a75.61,75.61,0,0,1-27.28,10.45c-22.68,4.18-54.3,4.63-75.69-4.6-11.4-6-21.14-14-31-22.13a161,161,0,0,1-20.21-20.07c-3.36-4.2-6.68-8.89-8.43-14.19-4.46-15-8.08-33.11-12.8-48a100,100,0,0,0-6.41-16.48c-1.06-1.73-2-3.69-3.59-4.62,0,0,.27,0,.2,0l-.08,0c-5.49,4.07-13.47,2.63-18.65-.59-8.77-5.25-14.4-14.37-18.25-23.33-7-16.92-8.91-35.3-9.08-53.42-.42-20.12,16.63-28.16,30.87-13.34a35.15,35.15,0,0,1,7.43,12.72,157.09,157.09,0,0,1,6.86,22.26Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-4" d="M2098.92,605s-8.69,88.47-16.6,95.88c-7.56,7.06-92.78,24.83-115.64,60.17a11.21,11.21,0,0,1-9.74,5.17c-27.19-.8-100.88-6.34-145.26,50.06-49,62.26-47,73.52-50,205a1.39,1.39,0,0,1-.08.46c-31.58,91.59-39.75,55.13-38.73,253.78a1.42,1.42,0,0,1-.12.57c-38.74,95.75-62.18,108.14-62.18,275.47,0,167.49,0,172.6-12.26,181.79s-39.83,29.61-47.49,48.51-5.61,31.15-17.36,48.51-8.17,18.89-8.68,38.3-5.62,50.55-6.13,55.15,23.49,5.1,32.17-23.49c4.13-13.59,5.47-20.73,6.74-25.9a2,2,0,0,1,3.82.83c-6.91,36.78-18.61,120-6.86,131a1.35,1.35,0,0,0,1.3.31c10.66-3.37,41.18-108.52,40.11-105.34-10.21,54.64-23.15,130.3-8.85,133.87s28.94-58.81,40.17-129.79c.17-1.61-17.19,115.24-7.49,119.83s29.11-68.76,33.7-114.72c.09-.68-9.7,86-1.53,88.51s19.92-21.45,26.55-73.53,26-73.53,27.07-91.41,1.53-52.59-7.15-84.25,24.51-109.79,37.79-145,52.08-127.15,54.12-184.34,2-86.3,11.75-115.92,46.47-128.68,51.57-146,21.49-120.41,23-147.22c-10.73,107.23-26.86,148.24-13.07,188.07s73.53,109.53,54.38,183.83-28.34,95.74-25.27,158.55-3.07,95.75-14.56,140.17-38.29,115.66-32.93,243.58,15.32,242.81,82.72,390.64c7.66,16.85-2.3,63.57,9.19,88.08s26,43.66,16.85,91.92-37.53,124.08-29.87,181.53,65.87,347.74,65.87,362.3-2.29,29.87-6.12,36.76-4.6,33.7,1.53,57.45c5.62,21.79,3.7,13.41-9.66,30.49-4,5.11-16.85,25-21,37.42-4.43,13.28-4.45,19.12-14.3,26.9-16.17,12.76-9.7,32.85-4.08,37.78,8.23,7.24,14,2.65,16,3.52,3,1.27,5.7,8.65,17.19,10.7s13.36-2.88,15.66-2.19c3.57,2,10.21,7,19.91,8,11.36,1.19,15.1-5.3,20.6-4.26,6.91,1.32,5.31,5.4,18.64,5.34,11.25,0,14-7.26,18.29-15.21,1.88-3.46.45,8.54,17,16.23,18.72,8.69,60.42-4.08,33.1-55-4.82-9-5.87-34.64-10.72-56.08s-12.26-29.11-6.38-54.64,1.27-36.51-9.2-54.64-7.4-124.34-1.27-159.57,39.57-175.41,35.74-236.68-32.17-120.26-32.17-137.11-2.3-41.36,9.19-76.6,4.6-97.27,7.66-174.63,12.77-152.71,19.46-209.88c12.8-109.49,11.33-130.52,12.79-161.54" data-v-9e1f2597></path><path class="cls-fullbody-male-front-4" d="M2283.14,605s8.69,88.47,16.61,95.88c7.55,7.06,92.77,24.83,115.63,60.17a11.23,11.23,0,0,0,9.75,5.17c27.18-.8,100.87-6.34,145.26,50.06,49,62.26,47,73.52,50,205a1.39,1.39,0,0,0,.09.46c31.58,91.59,39.74,55.13,38.73,253.78a1.6,1.6,0,0,0,.11.57c38.74,95.75,62.18,108.14,62.18,275.47,0,167.49,0,172.6,12.26,181.79s39.83,29.61,47.49,48.51,5.62,31.15,17.36,48.51,8.17,18.89,8.68,38.3,5.62,50.55,6.13,55.15-23.49,5.1-32.17-23.49c-4.12-13.59-5.47-20.73-6.74-25.9a2,2,0,0,0-3.82.83c6.91,36.78,18.61,120,6.86,131a1.35,1.35,0,0,1-1.3.31c-10.66-3.37-41.18-108.52-40.11-105.34,10.22,54.64,23.15,130.3,8.85,133.87s-28.93-58.81-40.17-129.79c-.17-1.61,17.2,115.24,7.49,119.83s-29.1-68.76-33.7-114.72c-.08-.68,9.7,86,1.53,88.51s-19.91-21.45-26.55-73.53-26-73.53-27.06-91.41-1.54-52.59,7.14-84.25-24.51-109.79-37.78-145-52.09-127.15-54.13-184.34-2-86.3-11.74-115.92-46.47-128.68-51.58-146-21.49-120.41-23-147.22c10.72,107.23,26.85,148.24,13.06,188.07S2395,1308.74,2414.13,1383s28.34,95.74,25.28,158.55,3.06,95.75,14.55,140.17,38.3,115.66,32.94,243.58-15.32,242.81-82.73,390.64c-7.66,16.85,2.3,63.57-9.19,88.08s-26,43.66-16.85,91.92,37.53,124.08,29.87,181.53-65.87,347.74-65.87,362.3,2.3,29.87,6.13,36.76,4.59,33.7-1.53,57.45c-5.63,21.79-3.71,13.41,9.65,30.49,4,5.11,16.85,25,21,37.42,4.43,13.28,4.45,19.12,14.3,26.9,16.17,12.76,9.7,32.85,4.09,37.78-8.24,7.24-14,2.65-16,3.52-3,1.27-5.7,8.65-17.19,10.7s-13.37-2.88-15.66-2.19c-3.58,2-10.22,7-19.92,8-11.36,1.19-15.09-5.3-20.59-4.26-6.92,1.32-5.31,5.4-18.64,5.34-11.25,0-14-7.26-18.3-15.21-1.87-3.46-.45,8.54-17,16.23-18.73,8.69-60.43-4.08-33.11-55,4.83-9,5.87-34.64,10.73-56.08s12.25-29.11,6.38-54.64-1.28-36.51,9.19-54.64,7.4-124.34,1.28-159.57-39.58-175.41-35.75-236.68,32.17-120.26,32.17-137.11,2.3-41.36-9.19-76.6-4.6-97.27-7.66-174.63S2213.7,2131.1,2207,2073.93c-12.8-109.49-11.34-130.52-12.79-161.54" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M1868.37,967.22c21.47.53,41.49,15.29,54.59,31.45l3.7,4.62,3.38,4.84c11.3,16.9,22.47,35.53,38.3,47.83,23.56,18.65,54.62,20.85,83.81,20.49a423.91,423.91,0,0,0,45.21-2.91c21.81-2.84,45.14-8.32,60.07-25.64a101.26,101.26,0,0,0,12.72-18.86,108.69,108.69,0,0,1-4.4,10.69c-12.36,27.1-39.46,37.58-67,42.5-36,5.79-82.3,9.56-116.27-5.33-26.44-11.18-42.75-35.53-56.22-59.65-5.49-9.7-11.76-19.13-19.61-27.08-10.37-10.48-23.47-19.46-38.28-21.85l0-1.1Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2513.07,968.32c-14.81,2.39-27.92,11.37-38.28,21.85-7.85,8-14.12,17.38-19.61,27.08-13.47,24.12-29.78,48.47-56.22,59.64-33.95,14.9-80.25,11.13-116.27,5.34-27.55-4.92-54.66-15.39-67-42.5a108.69,108.69,0,0,1-4.4-10.69A101.26,101.26,0,0,0,2224,1047.9c14.94,17.32,38.25,22.8,60.07,25.64a423.91,423.91,0,0,0,45.21,2.91c22.31.27,44.81-.91,65.33-9.53,20.73-8.6,34.88-25.69,47.27-44.41,4.22-6.3,8.42-13,12.89-19.22,1-1.25,4.55-5.65,5.55-6.92,10.94-12.53,24.9-23.16,41.14-27.52a44,44,0,0,1,11.6-1.63l0,1.1Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2214.41,1130.91c4.72,26.66,13.69,53.07,28.77,75.62,5.89,8.86,13.55,16.8,21.19,24.17,34.44,35,71.12,73.78,81.23,123.6a227.71,227.71,0,0,0-32.65-56.53c-20-26-44.13-48.94-66.36-73.13-21-24.94-32.27-61.64-32.18-93.73Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2167.62,1130.92c-.53,33.24-10.8,67.82-32.29,93.72-22.23,24.19-46.33,47.15-66.36,73.13a227.71,227.71,0,0,0-32.65,56.53c10.13-49.82,46.79-88.55,81.23-123.6,3.34-3.35,8.32-8.11,11.38-11.6,21.6-24.43,32.69-56.72,38.69-88.18Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2394.18,774.1c-22.8,15.46-52.77,26.73-80.65,22-27.36-4.06-68.05-13.34-94.15-4.14a36.07,36.07,0,0,0-10.79,6c-3.3,2.55-5.87,6.24-8,9.77,2.64-8.58,9.35-15.3,17.37-19.1,23.29-10.67,53.12-6.52,77.7-2.85,12.55,1.84,24.84,5.38,37.53,4.74,21.22-.86,41.79-8,61-16.44Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M1986.85,774c19.28,8.71,39.74,15.56,61,16.52,12.69.64,25-2.9,37.53-4.74,24.55-3.67,54.42-7.81,77.69,2.85,8,3.8,14.74,10.53,17.37,19.1-6.43-11.8-17.94-16.93-30.86-18.69-16.74-2.23-33.72-.28-50.39,2-12.26,1.6-26,4.49-38.32,5.89-25.22,2-53.77-8.7-74-23Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2275,1307.34c11.67,16.45,17,47.37-6.58,56a38.9,38.9,0,0,1-12.06,2c-6.1.14-12.32.15-18.43-.09-9.81-.55-19.93-.94-29.32-4.1,4.92.06,9.76-.52,14.61-.93l29-2.85c2-.17,5-.43,7-.75a26.84,26.84,0,0,0,8.13-2.5,16.61,16.61,0,0,0,6.56-6.32c6.08-11.47,2.8-27.9,1.09-40.44Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2289,1374.4c7.45,14.23,12.6,34.09,7.51,49.88-6.73,17.44-29.25,23.11-46,23.47-11.21.11-22.56-1.81-32.67-6.62,16.28.74,31.79-.35,47-5.12,8.45-2.83,18.49-7.29,22.18-15.34,1.75-4.1,2.53-9.1,2.93-14.2.73-10.56-.16-21.33-1-32.07Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2202.9,1275.18c5.41,3.92,11.7,6.07,18,7.75,11.4,2.85,23.54,3.21,35.26,3.67,2.72,0,5.45.12,8.27.43a78.58,78.58,0,0,1-7.89,2.79c-12.23,3.21-25.58,3.44-37.51-1.13-6.52-2.7-13.17-6.89-16.17-13.51Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2108.43,1307.34c-1.71,12.53-5,29,1.08,40.44a16.63,16.63,0,0,0,6.57,6.32,26.84,26.84,0,0,0,8.13,2.5c1.94.32,5,.58,7,.75l29,2.85c4.85.41,9.7,1,14.61.93-9.39,3.16-19.51,3.55-29.31,4.1-6.11.24-12.33.24-18.43.09a39,39,0,0,1-12.07-2c-23.58-8.6-18.24-39.51-6.57-56Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2094.47,1374.4c-.78,10.73-1.67,21.51-.94,32.07.4,5.1,1.18,10.1,2.93,14.2,3.69,8,13.72,12.51,22.18,15.34,15.19,4.77,30.7,5.86,47,5.12-10.11,4.81-21.46,6.73-32.67,6.62-16.73-.35-39.26-6-46-23.47-5.09-15.8.06-35.64,7.5-49.88Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2180.53,1275.18c-3,6.62-9.66,10.81-16.17,13.51-11.93,4.57-25.28,4.34-37.51,1.13A77.71,77.71,0,0,1,2119,1287c2.81-.31,5.55-.39,8.27-.43,11.72-.46,23.85-.82,35.26-3.67,6.34-1.68,12.63-3.83,18-7.75Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M1758.71,1277.72c17.79,17.32,22.26,45.92,14.12,68.89a33.82,33.82,0,0,1-2,4.48c1.53-26.5-2-48.84-12.12-73.37Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M1786.26,1340.7c3.36-24.83,25.81-47.55,47.91-57.68a24.7,24.7,0,0,1,2.36-.87c-2.45,2.25-4.77,4.57-7.1,6.85-16.31,15.74-31.45,32.12-43.17,51.7Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2625.47,1277.72c-10.17,24.54-13.65,46.88-12.12,73.37a33.82,33.82,0,0,1-2-4.48c-8.14-23-3.67-51.57,14.12-68.89Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2597.92,1340.7c-11.72-19.58-26.86-36-43.17-51.7-2.33-2.28-4.65-4.6-7.1-6.85a24.7,24.7,0,0,1,2.36.87c22.07,10.1,44.57,32.87,47.91,57.68Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2216.36,1901.1c.81-1.32,1.2-1.27,1.58-1.21,1.8.17,4,.36,5.8.68,3.41.63,7.38,1.54,10.5,1.17,3.87-.3,6.55-2.5,8.77-5.47a26.21,26.21,0,0,0,5.17-10.66c1.51-8.64-3.36-15.54-7.11-23.78-9.08-17.7-8.93-38.84-.75-56.82,7.62-17.29,19.72-31.8,30.07-47.37,20.77-30.34,40.05-62.3,49.86-98-6.23,36.85-24.51,70.49-44.48,101.62-15.25,24.62-38.75,49.65-33.09,80.78a58.55,58.55,0,0,0,5.46,16.47c2.72,5.77,6,11.3,7.51,17.81,1.79,6.82.1,14.73-3.51,20.63-2.44,4.51-6.69,9.21-12,10.79-5.13,1.68-11,.37-15.61-1.17a39.25,39.25,0,0,1-4.38-1.83c-1-.45-2.1-1.19-3.12-1.71-.35-.16-.7-.33-.62-1.89Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2062.92,1659.6a408.5,408.5,0,0,0,58.87,110.52c1.67,2.17,4.2,5.3,5.72,7.53,10.21,14.24,19.65,29.58,23.08,47.06,1.9,9.68,1.37,20.37-2.79,29.55-2.65,5.45-5.86,10.85-7.63,16.63-1.71,5.27-2.63,10.88-.9,16.12,2.61,7.71,7.43,14.14,16.43,13.57,4.21-.13,8.83-1.19,13.26-1.31a6.8,6.8,0,0,1,5.15,1.11,6.69,6.69,0,0,1-3.86,3.63,35,35,0,0,1-4.42,2c-10.32,3.58-22.79,3-29.16-7.31-3.64-5.92-6.27-13.05-5.52-20.07.82-10,5.68-18.62,10.22-27.24,3.68-7.93,4.18-16.79,2.64-25.44-3-16.44-12-31.21-21.41-44.85-1.43-2.22-3.89-5.35-5.45-7.48-24.74-34.26-43.61-73.07-54.23-114Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2767.48,1881.62c-1.67-8.41-7.11-16.33-13.6-22.2-7.32-6.7-16.39-11.24-25.44-15.59-21.47-10-40.16-18-42.8-44.57,3,9.77,8.76,19.07,17.67,24.29a72.76,72.76,0,0,0,13.79,6.35c10,3.57,20.33,6.53,30.19,11,15.69,7,30.34,20.61,33,38.34,0,.48.13.94.15,1.56l-13,.82Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M1603.51,1876.53c0-13.4,7.5-26.18,18.36-33.77a52.4,52.4,0,0,1,5.85-3.48,65.87,65.87,0,0,1,9.25-3.76c1.77-.54,5-1.41,6.8-2,12.28-3.58,25.9-6.6,36.1-13.79,8.68-5.84,14-15.29,17.21-25.21-3.3,33-28.92,40.5-55.5,51.16-1.14.43-3.86,1.74-5,2.25a47.46,47.46,0,0,0-6,3.66,36.3,36.3,0,0,0-15,24.34l0,.34,0,.16v0Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2019,2311.26c.45,21.21,1.09,42.38,3.3,63.45.72,7,1.65,13.95,3,20.78,1.37,6.56,3,13.52,6.36,19.25,1.72,3,4.36,4.78,6.8,7a97.19,97.19,0,0,0,8.09,6.39,31.08,31.08,0,0,0,6.5,3.5,24.74,24.74,0,0,0,12.11,1.16c6.74-.92,13.47-3.31,20.15-5.69l.06.14a100.31,100.31,0,0,1-9.4,5.11c-.85.4-2.89,1.25-3.71,1.62s-3,1.05-3.86,1.34c-12.59,3.86-21.37-.09-31.06-8.1-2-1.67-4.19-3.51-6.13-5.21-4.37-4-6.42-9.74-8.08-15.05a101.18,101.18,0,0,1-2.49-10.57c-4.6-28.13-4-56.83-1.68-85.12Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2091.51,2318.4c18.95,26.59,26.22,67.11,5.1,94.47,14.4-30.32,7-64.66-5.1-94.47Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2361.92,2311.26c2.31,28.29,2.91,57-1.69,85.12a101.18,101.18,0,0,1-2.49,10.57c-1.66,5.31-3.71,11.08-8.08,15.05-1.93,1.69-4.13,3.55-6.13,5.21-9.71,8-18.45,12-31.06,8.1-.83-.31-3-1-3.86-1.34s-2.85-1.26-3.71-1.62a100.31,100.31,0,0,1-9.4-5.11l.07-.14c6.68,2.38,13.4,4.77,20.14,5.69a24.79,24.79,0,0,0,12.12-1.16,31.33,31.33,0,0,0,6.5-3.5,97.06,97.06,0,0,0,8.08-6.39c2.44-2.22,5.08-4,6.8-7,3.37-5.73,5-12.69,6.36-19.25,1.39-6.83,2.32-13.79,3-20.78,2.21-21.07,2.85-42.24,3.31-63.45Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2289.4,2318.4c-12.09,29.81-19.5,64.15-5.1,94.47-21.12-27.37-13.85-67.87,5.1-94.47Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2016.1,1018.85c4.75-6.88,13.93-7.35,19.19-.82,6.48,7.12,3,17.83-6.7,19.1-4.65.59-9.66-1.37-12.13-5.47a12.5,12.5,0,0,1-.36-12.81Zm4.68,3.12c-.92,1.59-.09,4.33,1.32,5.48a5.63,5.63,0,0,0,6.5.49,2.38,2.38,0,0,0,1.14-1.71c.24-1.65-1.1-3.61-2.26-4.9-1.81-2.28-5.19-1.56-6.7.64Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2358.22,1022.31c-1.3-1.85-4.18-2.78-5.94-1-1.19,1-2.68,3.15-2.38,4.78a2.6,2.6,0,0,0,1.15,1.72,4.75,4.75,0,0,0,7.17-5.54Zm6-4c2.63,4.35,1.9,9.43-.74,13.45a13.09,13.09,0,0,1-12.41,5.22,10.89,10.89,0,0,1-9-15.31c4.27-9.62,15.61-12.42,22.2-3.36Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2167.14,1797.05c.49,15-1.34,65.56,7.74,75.28L2177,1874l-2.31,1.58c-6.44,3.76-5.57,9.13-3.57,15.41,1.77,6,4.25,12.39,9.11,16.32s11.54,4.71,17.63,4c4.1-.39,8.33-1.17,11.6-3.66,5-4,6.93-10.31,9-16.33,1.22-3.54,2.93-10.27,3.66-12.41a1.33,1.33,0,0,0-.32-.91c-1.14-1.37-3.37-2.14-5.09-2.58l1.24-3.78a1.17,1.17,0,0,0-.92-.08c1.39-1.51,2.18-4.4,2.82-6.65.78-3.06,1.34-6.23,1.85-9.42,1.91-12.83,2.69-25.89,3.33-38.87.28-6.52.53-13,1.18-19.58,1.18,13.07.8,26.17.45,39.27-.42,6.31-1,40.38-9.86,39.13a2.21,2.21,0,0,1-.48-.15l1.23-3.78c3.82,1,8.87,3.11,8.54,7.87-1.2,4.39-2.41,8.78-3.82,13.17-5.48,17.73-12.08,23.4-31.06,22.94-10.46-.48-18.07-7.41-21.66-16.8-3.49-9.59-7.83-20,3-26.49l-.18,3.25c-7.27-6.66-6.87-29.57-7.18-39.31.1-13,.05-26.43,1.94-39.09Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-5" d="M2193.9,1899.57s.42,3.52-.56,5-2.12,4.88.76,4.77,2.54-2,1.86-4.2S2194.54,1899.46,2193.9,1899.57Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2051.34,467.68c-1.87-3.59-7.66-18.44-11.51-18.49-3.07,1.72-4.14,5.54-4.65,8.88-1.55,11.11,5.18,15.59,10,24.33a25.11,25.11,0,0,1,3.07,8.76,25.23,25.23,0,0,0-3.6-8.45c-3.24-5.32-8.36-9.49-10.88-15.28-2.77-6.69-2.78-17.69,4.65-21.41,7.9-2.71,12.26,16.21,12.89,21.66Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2050.49,477c2.66,5.62,4.73,13.64.68,19.07,3.1-6,.81-12.94-.68-19.07Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2331.12,467.68c.62-5.42,5-24.38,12.89-21.66,7.43,3.72,7.42,14.72,4.64,21.41-2.52,5.79-7.63,10-10.87,15.28a25.23,25.23,0,0,0-3.6,8.45,25.29,25.29,0,0,1,3.06-8.76c4.85-8.73,11.6-13.24,10-24.33-.52-3.32-1.59-7.29-4.73-8.89-3.89.35-9.49,14.76-11.43,18.5Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-3" d="M2332,477c-1.49,6.13-3.79,13.1-.68,19.07-4.05-5.43-2-13.44.68-19.07Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2093.13,426.82a3.57,3.57,0,0,1,1.35-2.57,40.68,40.68,0,0,1,7.74-5.24c10.62-5.69,22.56-10.61,35-9.24,8.93,1.43,16.63,6.72,22.95,12.86,2.9,3,10,10.23,8.25,14.77a3.07,3.07,0,0,1-1.88,1.65c-7.94,2.12-16.15,2.84-24.32,3.23-10.21.67-20.3-1.83-29.93-4.95-3.75-1.33-19.37-6.28-19.17-10.51Zm4.24,0a1.19,1.19,0,0,0-.22-.79h0a1.16,1.16,0,0,0,.19.22c4.73,3.64,10.47,5.94,16,8.24a73,73,0,0,0,19,4.93,95.93,95.93,0,0,0,32.66-4.06l.26-.09.06,0a.39.39,0,0,0-.14.05,1,1,0,0,0-.41.44c-.13.3,0,.22-.12,0-1.53-3.77-4.76-6.7-7.78-9.51-6.38-5.4-14-10.44-22.56-10.74-11.46,0-27.47,5.23-36.82,11.88l-.25.23s0,0,0-.05a1.55,1.55,0,0,0,.16-.74Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2207.75,475.89c.53,7,5.49,12.64,11.74,15.13a.36.36,0,0,0-.09,0h0a23.52,23.52,0,0,1,3.3,1.16c5.66,2.25,10.3,7.81,8.16,14.24-3.34,11.1-17.25,8.18-25.44,5.1a3.18,3.18,0,0,0,2.64-.34c-10.58,8.85-24.93,7-35.37-.23a5.19,5.19,0,0,0,.68.3,3.64,3.64,0,0,0,2,.06s.11,0,0,0l-.45.16c-7.84,3.14-20.46,6.26-24.93-3.5-2.83-8.52,8.8-13.14,14-17.29,3.95-2.82,6.81-6.47,9.91-10.33a34.25,34.25,0,0,1-10.93,16.75c-1.75,1.69-5.19,4.44-6.41,6.4-.45.67-.82,1.37-.64,1.9,3.45,4.64,12.28.53,16.86-1.3a5.35,5.35,0,0,1,1.47-.34,4.35,4.35,0,0,1,2.26.55c8,5.07,18.62,6.31,26.59.58a5.07,5.07,0,0,1,4.74-.86c4.62,1.95,15.11,6.82,17.68.57a5.47,5.47,0,0,0-1.26-6.34,19.82,19.82,0,0,0-6.59-4.33c-6.26-3.64-10.82-10.65-10-18Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2094.06,401c8.38-9.26,21.21-13.14,33.39-14.17,12.45-1.05,25,1.72,37,4.41l-3.63,11.43c-10.85-4.38-21.68-8.85-33.37-9.84-11.47-1-24.1.78-33.38,8.17Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2286.37,401c-10.49-8.3-24.9-9.5-37.68-7.66-10.11,1.62-19.55,5.47-29.07,9.33L2216,391.24c12-2.69,24.54-5.46,37-4.41,12.18,1,25,4.91,33.39,14.17Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2232.41,557a.31.31,0,0,0,.06-.59c-19.79-9.55-27.15-12-31.18-11s-6.12,3.57-12.76,1.27-10-1.53-14.81,0c-4.14,1.31-26,8.2-26.13,9.45C2147.5,557.69,2197,563.24,2232.41,557Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2161.29,566.11c13,7.42,27.9,11.89,42.46,7.08a92.9,92.9,0,0,0,14.06-6.06,33.66,33.66,0,0,1-12.22,10.54c-15,7.85-34.76,1.86-44.3-11.56Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2122.59,417.38c5.37-6.85,15.46-7.87,21.47-1.27a10.45,10.45,0,0,1-2.68,17.08c-5.5,2.92-13,2.09-17.28-2.55-3.21-3.57-4.35-9.07-1.51-13.26Zm4.2,3.11a3.11,3.11,0,0,0,.52,3.4c2.22,2.47,7.37,2,9.79.23.09-.13.26-.23.26-.31s.1-.09.11-.12a1,1,0,0,0-.16-.72,10,10,0,0,0-2.49-3.12,5.72,5.72,0,0,0-8,.64Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2284.69,426.82a1.7,1.7,0,0,0,.18.79l-.25-.23c-9.36-6.65-25.34-11.89-36.82-11.88-8.52.3-16.17,5.34-22.56,10.74-3,2.81-6.25,5.74-7.78,9.51-.07.21,0,.29-.12,0a1,1,0,0,0-.5-.48h-.05l.06,0,.26.09a95.93,95.93,0,0,0,32.66,4.06,73,73,0,0,0,19-4.93c5.5-2.3,11.24-4.6,16-8.24a1.16,1.16,0,0,0,.19-.22h0l0,.07a1.35,1.35,0,0,0-.17.72Zm4.24,0c.22,4.22-15.47,9.2-19.16,10.51-9.63,3.12-19.73,5.62-29.94,4.95-8.17-.39-16.38-1.11-24.32-3.23a3.07,3.07,0,0,1-1.88-1.65c-1.74-4.54,5.38-11.78,8.25-14.77,6.32-6.14,14-11.43,22.95-12.86,12.45-1.37,24.38,3.55,35,9.24,2.93,1.72,6,3.33,8.36,5.91a3,3,0,0,1,.73,1.9Z" data-v-9e1f2597></path><path class="cls-fullbody-male-front-6" d="M2255.27,420.49a5.72,5.72,0,0,0-8-.64,10,10,0,0,0-2.49,3.12,1,1,0,0,0-.16.72s0,0,.11.12.17.18.26.31c2.42,1.8,7.57,2.24,9.79-.23a3.11,3.11,0,0,0,.52-3.4Zm4.2-3.11c2.84,4.19,1.69,9.69-1.51,13.26-4.31,4.64-11.78,5.47-17.28,2.55a10.45,10.45,0,0,1-2.68-17.08c6-6.6,16.11-5.58,21.47,1.27Z" data-v-9e1f2597></path></g>', 1))
      ], 16);
    };
  }
});

const FullBodyMaleFrontSVG = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-9e1f2597"]]);

const _hoisted_1$3 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FullBodyMaleBackSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "fullBody":
          popoverComponent = _sfc_main$5;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "FullBodyMaleBackSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "MALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[28] || (_cache[28] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-fullbody-male-back-1",
            d: "M1996.77,3287.34s-81.67,5.81-88.84-12.17-4.86-24.79,4.48-38.7,48.4-57.89,46.17-65.78-14.58-34.34-7.43-55.79,9.37-60.64,7.32-76-58.18-271.44-59.65-323.39-7.93-90.15,25.1-212c7.74-33.75.2-57-2.62-67.85s-28.69-56.34-26-132.91c-28.72-67.69-58.83-157.59-69.29-315.52-10.31-113.52-15.84-188.09,4.83-260.43s29.69-111.51,29.22-182.66c-1.14-27.91,13-135.35,26.55-167.42.21-16-6.31-73.53-42.28-155.86-13.55-33.6-18.06-62.71-22.4-57.44s-30,81.3-38.84,107.16-26.28,64.23-24.76,106.42,2.25,79.24-7.18,109.61-82.53,211.62-83.21,227.17-7.12,29.56,7.67,96.26c3.9,18-5,48.72-9.65,57.5s-36.1,117-38.2,121.53-7.69,12.09-12,7.41-3.3-22.38-3.3-22.38-17,56.85-21.45,49.36-10.83-21-7.19-41.2c-8.4,8.85-19.48,55.61-28.1,55.89s0-75.29,0-75.29-19,32-27.06,40.67-15.6-4.79-9.82-35.32S1531.5,1891,1531.5,1891s-16.43,12.36-24.26,22.91-22.66,9.19-19.28-4.52,4.72-21.09,5.36-46.92,11.87-32.64,20-51.37-2.44-32.67,16.93-46.71,47.07-47,47.58-66.1-8-241.67,12-297.18,53.55-114.57,52.19-133,2.18-150,16.1-188.91,24.56-58.05,24.56-58.05S1679,906,1693.46,878.39s45.59-108,150.11-115.32c39.36-.8,40.18,0,40.18,0s28.12-32.63,109.38-64.4c11.62-17.22,27.95-46.07,20.22-81.82s-21-25.78-22.2-78.59c-5.63-6.75-23.5-8-29.88-19.35s-31.58-46.89-16.08-87.33c6-13.54,14.86-21.43,28.62-8.46-7-37.91-16.79-85.21,4.11-126.17s46.25-73.5,115.78-82.59,124,38.87,141.22,67,29.9,86.29,10.51,145.08c17.39-5.12,17.69-9.49,25.79.09s14,51.43-2.56,75.95-38.92,31.39-38.92,31.39,1.16,42.7-21.95,77.49c-2.2,8.21-10.74,63.61,16.78,86.47s25.46,5.58,115.34,66c32.67-.84,112.92-3.42,156,63.89s38.72,74.5,40.54,193.46c8.82,15.53,37.36,64.72,40.26,174.22,1.51,40.53-2.5,67.77,2.37,78.59s11.25,38.11,33.09,76.9,28.72,124.93,29.83,162-2,182.07-2,182.07,3.89,27.64,21.75,47.2,26.78,20.57,30.37,25.08,11.46,25.24,12.07,35,18.84,29.06,19.81,38.16,1.38,46,4.09,56.64,3.72,23.81-4.3,22.35-27.28-18.09-30.63-28.84-3.67,7.78-.24,26.62,11.81,72,6.9,83-13.1-.83-16.92-8.85-14.87-30.87-14.87-30.87-4,3.44-2.08,22.65,4.07,52.8-.84,54.9-23.6-37.66-29.42-72c-3.86,16.62-.34,56.78-6.47,59.5s-25-52.76-25-52.76,1.3,32.32-4.77,26.48-12.49-19.06-26.59-75.2-29.56-75.49-29.38-95,14.36-75.08,10.56-96.89-41.74-121.58-44-127.29-51-126.38-49.17-145.45.86-86.39-1.07-102.11-15.3-73.84-25.66-98.12-34.95-98.69-34.95-98.69l-14.6,37.2s-53.07,104.93-52.51,172.19c.27,17.7,18,77.55,22.06,114.73s4.62,98.23,5.63,109.6,13,87.28,24.6,130.79,24.26,78.51,17.16,176.9-15,176.07-15,176.07-10,124.13-62,220c-2.39,25-3.35,105.79-28.89,142.54-2.09,23.79-4.93,56.88,3.05,83.05s38.86,112.93,17.42,227.73-54.91,281.61-54.91,281.61.72,59.18,3.78,67,10.63,40.78-4.39,68.73c4,12,16.3,27.76,32,50s28.93,47.71,14.13,59.82-54.3,10.89-55.66,10.48-26.81.53-58-1.48-56.13-11.87-52.85-36.72,18.74-39,16.16-60-12.69-62.69-5-81,18.68-53.38,18.21-79.6-1.88-93.17-14.17-147.22-32.37-143-26.35-194.5,26.28-151.23,39.57-182.21c-4.31-14.19-6.35-14.44-9.9-28.68s-15.91-77.81-12.71-135-2.09-128.26-7.12-164.15-18.21-144.62-16.94-198.44,6.33-153.36,8.21-157.1c-14.13-24.68-22.2-31.83-21.66-38.81s-18.37,46.84-18.37,46.84,4.62,64.67,5,73.69,4.45,130.36-5.36,203-18.18,130.37-17.05,159.23,2.5,117.74-2.19,152.23-11.8,74-19.69,83.69c1.05,6.64,14.65,61.58,21.89,83.26s21.15,91,17.88,135-27.13,162-29.43,174.32-10.54,75.56-11,102.46-2.43,55.26,12.76,96c8.72,27.51,8.8,39.74,4.63,59.93s-10,36.47-1.32,57.44,17.68,42.06,9.33,54.74-31.07,25.34-54,23-24.76-1.59-24.76-1.59"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$3, [
          createBaseVNode("path", {
            id: "Occiput",
            class: "cls-fullbody-male-back-2",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Occiput", $event)),
            "data-label": "Occiput",
            d: "M2020.26,538.47c-3.32-.93-11.88-5.07-13.28-8.22-7.74-17.47-34-124.23-25.91-155.91.11-.45.06-.91.2-1.35,22.55-71.27,168.21-150.5,257.69-3.07,1.72,2.82,1.9,6.15,2.71,9.34,4.55,17.83-8,107.54-23.27,142.31-3.84,8.74-23,16.9-32.22,19.26C2147.51,550.76,2056.07,548.5,2020.26,538.47Z"
          }),
          createBaseVNode("path", {
            id: "Vertebral",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Vertebral", $event)),
            "data-label": "Vertebral",
            class: "cls-fullbody-male-back-2",
            d: "M2077.47,713s41.88,10.72,68.6-1.53c-1.37,12.42-7.13,129.93-13.65,392.68-1.23,49.6.07,275.74,11.43,448.68-.51,15.32-21.06,1.06-30.69,1.23-10.5.17-35,12-36,.47s11.57-311.49,11.57-452.43C2088.7,942.74,2078.75,723.94,2077.47,713Z"
          }),
          createBaseVNode("path", {
            id: "Left_Dorsal_Scapular",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left Dorsal Scapular", $event)),
            "data-label": "Left Dorsal Scapular",
            class: "cls-fullbody-male-back-2",
            d: "M1761.32,804.27a15.67,15.67,0,0,0-2.48,11.58c5.93,33.7,31.25,211.46,60.76,328.32,2.31,9.17,9.85,5.67,12.59,14,16.34,48.68,65.54,144.59,65.54,207.91s-21.38,72.51-26.81,150.13c-3.39,44.94,11.78,74.06,30,67.43s78.47-28,79.12-50.23c.8-27.56-4.71-158.63,9.59-186.2s87.82-62.24,89.87-126.61c2-61.71.14-434.06-10.8-498a15.71,15.71,0,0,0-6.66-10.31c-26.17-17.83-43.66-10.21-43.66-10.21s-98.45,40.82-125,67.37c-13.28,14.3-34.81-6-79.75,8.26C1776.1,789.58,1767.43,795.35,1761.32,804.27Z"
          }),
          createBaseVNode("path", {
            id: "Right_Dorsal_Scapular",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Right Dorsal Scapular", $event)),
            "data-label": "Right Dorsal Scapular",
            class: "cls-fullbody-male-back-2",
            d: "M2458.22,804.27a15.67,15.67,0,0,1,2.49,11.58c-5.93,33.7-31.26,211.46-60.77,328.32-2.31,9.17-9.84,5.67-12.59,14-16.34,48.68-66.3,141.27-66.3,204.59s20.1,75.07,25.53,152.68c3.38,44.94-9.74,74.83-28,68.2s-78.47-28-79.11-50.23c-.8-27.56,4.7-158.63-9.6-186.2s-87.82-62.24-89.87-126.61c-2-61.71-.14-434.06,10.8-498a15.75,15.75,0,0,1,6.66-10.31c26.17-17.83,43.66-10.21,43.66-10.21s98.45,40.82,125,67.37c13.27,14.3,34.8-6,79.74,8.26C2443.44,789.58,2452.12,795.35,2458.22,804.27Z"
          }),
          createBaseVNode("path", {
            id: "Sacral",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Sacral", $event)),
            "data-label": "Sacral",
            class: "cls-fullbody-male-back-2",
            d: "M2065.54,1581.15c9.61,7.69,31.18,25.65,40.05,38.67a3.9,3.9,0,0,0,6.8-.35c9.43-16.65,38.39-36.1,43.51-41.83,7-7.82-28.31-18-46.18-17.75-13.88.16-32.35,6-43.89,13.66A4.84,4.84,0,0,0,2065.54,1581.15Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lumbar",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Left Lumbar", $event)),
            "data-label": "Left Lumbar",
            class: "cls-fullbody-male-back-2",
            d: "M2078.07,1259.17s-37.22,53.17-75.68,79.32c-21.91,14.88-15.15,187.91-13.45,195.23,3.06,11.49,50.92,41.19,69.11,38.64,7-.8,12.27-1.5,17.87-157.79C2079,1329.21,2087.59,1247.36,2078.07,1259.17Z"
          }),
          createBaseVNode("path", {
            id: "Left_Gluteal",
            onClick: _cache[6] || (_cache[6] = ($event) => handleBodyPartClick("Left Gluteal", $event)),
            "data-label": "Left Gluteal",
            class: "cls-fullbody-male-back-2",
            d: "M1870.14,1618.62a40.72,40.72,0,0,1,29.65-26.83c10.53-2.46,29-8.26,52.34-21.64,31.83-18.21,55-13,83.14,2.91s74.18,25.68,78.92,148.58c4.3,111.21-46.66,138.09-56.39,142.2-1.07.45-2.13.94-3.17,1.48-6.11,3.2-29.61,14-64.29,11.38-40.59-3.06-90.81-36.83-117.17-38.36-29.64-1.72-45.62-11.94-41.79-48.7s34.14-130.07,36-156.7A59.94,59.94,0,0,1,1870.14,1618.62Z"
          }),
          createBaseVNode("path", {
            id: "Left_Rear_Femoral",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Left Rear Femoral", $event)),
            "data-label": "Left Rear Femoral",
            class: "cls-fullbody-male-back-2",
            d: "M1828.82,1831.94a44.87,44.87,0,0,0,33.14,13.27c20.77-.68,78.3,25.53,90.55,30s90.65,24.37,127.66-22.81c4.43-3.74,7.83,205.11-1.79,254.13s-19.31,153.7-16.25,183.32-85.64-1-117.88,1-37.38-3.06-46-19.4-45-79.33-60.54-263.84C1828.26,1896.62,1819.51,1820.7,1828.82,1831.94Z"
          }),
          createBaseVNode("path", {
            id: "Left_Popliteal",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Left Popliteal", $event)),
            "data-label": "Left Popliteal",
            class: "cls-fullbody-male-back-2",
            d: "M1915.6,2299.25a10.3,10.3,0,0,0-6.11,8.17c-1.47,11.37-3.73,42.45,8.38,79.41,15.32,46.72,13.18,43,19.15,55.15s46-12.74,66.78-7.85a10.24,10.24,0,0,1,6.13,4.24c7.44,10.93,37.49,51.85,43.52,9,6.22-44.2,11.19-99.61,8.17-126.37a10.43,10.43,0,0,0-8.75-9.15c-13-2-38.89-4.86-72.95-11.59C1946.32,2293.59,1925.6,2295,1915.6,2299.25Z"
          }),
          createBaseVNode("path", {
            id: "Rear_Cervical",
            onClick: _cache[9] || (_cache[9] = ($event) => handleBodyPartClick("Rear Cervical", $event)),
            "data-label": "Rear Cervical",
            class: "cls-fullbody-male-back-2",
            d: "M2215.59,547.86a2.24,2.24,0,0,0-2.31-1c-19.2,3.25-137,21.57-208.14-5.12-9.43-3.84,5.11,31,12.6,51.75s9.19,46.64,0,87.49c3.06,18,72.7,28.25,91.42,28.25s95.14-16.25,92.92-31.61-7.66-63.37,1.53-84.81C2212.36,572.38,2219.38,554.23,2215.59,547.86Z"
          }),
          createBaseVNode("path", {
            id: "Right_Lumbar",
            onClick: _cache[10] || (_cache[10] = ($event) => handleBodyPartClick("Right Lumbar", $event)),
            "data-label": "Right Lumbar",
            class: "cls-fullbody-male-back-2",
            d: "M2142.39,1259.17s37.22,53.17,75.69,79.32c21.9,14.88,15.15,187.91,13.44,195.23-3.06,11.49-50.92,41.19-69.1,38.64-7.06-.8-12.28-1.5-17.87-157.79C2141.49,1329.21,2132.87,1247.36,2142.39,1259.17Z"
          }),
          createBaseVNode("path", {
            id: "Right_Gluteal",
            onClick: _cache[11] || (_cache[11] = ($event) => handleBodyPartClick("Right Gluteal", $event)),
            "data-label": "Right Gluteal",
            class: "cls-fullbody-male-back-2",
            d: "M2350.33,1618.62a40.73,40.73,0,0,0-29.66-26.83c-10.52-2.46-28.94-8.26-52.34-21.64-31.83-18.21-55-13-83.13,2.91s-74.19,25.68-78.93,148.58c-4.29,111.21,46.67,138.09,56.39,142.2,1.08.45,2.13.94,3.17,1.48,6.12,3.2,29.61,14,64.29,11.38,40.6-3.06,90.81-36.83,117.18-38.36,29.63-1.72,45.61-11.94,41.78-48.7s-34.13-130.07-36-156.7A60.45,60.45,0,0,0,2350.33,1618.62Z"
          }),
          createBaseVNode("path", {
            id: "Right_Rear_Femoral",
            onClick: _cache[12] || (_cache[12] = ($event) => handleBodyPartClick("Right Rear Femoral", $event)),
            "data-label": "Right Rear Femoral",
            class: "cls-fullbody-male-back-2",
            d: "M2391.64,1831.94a44.87,44.87,0,0,1-33.14,13.27c-20.76-.68-78.29,25.53-90.55,30s-90.65,24.37-127.66-22.81c-4.43-3.74-7.83,205.11,1.79,254.13s19.32,153.7,16.25,183.32,85.65-1,117.89,1,37.37-3.06,46-19.4,45-79.33,60.55-263.84C2392.21,1896.62,2401,1820.7,2391.64,1831.94Z"
          }),
          createBaseVNode("path", {
            id: "Right_Popliteal",
            onClick: _cache[13] || (_cache[13] = ($event) => handleBodyPartClick("Right Popliteal", $event)),
            "data-label": "Right Popliteal",
            class: "cls-fullbody-male-back-2",
            d: "M2304.86,2299.25a10.3,10.3,0,0,1,6.11,8.17c1.48,11.37,3.74,42.45-8.38,79.41-15.32,46.72-15.32,42.13-19.15,55.15-3.55,12.07-46-12.74-66.78-7.85a10.19,10.19,0,0,0-6.12,4.24c-7.44,10.93-37.5,51.85-43.53,9-6.21-44.2-11.18-99.61-8.17-126.37a10.43,10.43,0,0,1,8.76-9.15c13-2,38.88-4.86,73-11.59C2274.14,2293.59,2294.87,2295,2304.86,2299.25Z"
          }),
          createBaseVNode("path", {
            id: "Left_Sural",
            onClick: _cache[14] || (_cache[14] = ($event) => handleBodyPartClick("Left Sural", $event)),
            "data-label": "Left Sural",
            class: "cls-fullbody-male-back-2",
            d: "M1941.11,2450.21s55.83-16,62.3-11.53,3.57,20.21,45.78,39.62c3.75,1.36-13.61,16.34-6.12,40.51s38.46,126.64,38,178.72-4.59,73.53-4.59,73.53l-15.4,79.46a14.13,14.13,0,0,1-13.87,11.44h-99.92a13.73,13.73,0,0,1-13.28-10.2c-8.94-33.55-35.53-142.66-25.27-217.89,12.25-89.87,29.87-127.66,27.48-145.7S1938,2451.07,1941.11,2450.21Z"
          }),
          createBaseVNode("path", {
            id: "Left_Fibular",
            onClick: _cache[15] || (_cache[15] = ($event) => handleBodyPartClick("Left Fibular", $event)),
            "data-label": "Left Fibular",
            class: "cls-fullbody-male-back-2",
            d: "M1942.1,2868.29a3.29,3.29,0,0,0-3.08,3.91c4.54,23.7,29.15,152.53,29.15,161.33,0,9.7-3.57,36.26-2.55,43.92s.51,22.46-2,30.12-4.13,31.91-2.48,38.65c2,8,6.11,20.23,14.67,23.3s74.45,7.52,79-1.18c6.47-12.25,7.32-36.94,3.75-55.15-1.68-8.56-17.2-47.15-17.37-74.55-.17-28.13-3.57-72.77,2.56-114.64,5.35-36.56,13.05-54.57,12.08-56.09C2054.05,2865.11,1961.71,2867.38,1942.1,2868.29Z"
          }),
          createBaseVNode("path", {
            id: "Left_Calcaneal",
            onClick: _cache[16] || (_cache[16] = ($event) => handleBodyPartClick("Left Calcaneal", $event)),
            "data-label": "Left Calcaneal",
            class: "cls-fullbody-male-back-2",
            d: "M1974.38,3173.9a5.83,5.83,0,0,0-4.85,2.3c-6.88,9.06-30.63,40.44-38.83,49.51-9.53,10.56-28.17,46.55-3.38,48.33,28.34,2.05,137.67,12.22,140.09-17.7,2-24.43-14.48-38.18-12.13-58.81,3.53-27.4-5.41-23.83-14.47-21.79C2032.73,3177.57,1988,3174.44,1974.38,3173.9Z"
          }),
          createBaseVNode("path", {
            id: "Right_Sural",
            onClick: _cache[17] || (_cache[17] = ($event) => handleBodyPartClick("Right Sural", $event)),
            "data-label": "Right Sural",
            class: "cls-fullbody-male-back-2",
            d: "M2278.82,2450.21s-55.83-16-62.29-11.53-3.58,20.21-45.79,39.62c-3.75,1.36,13.62,16.34,6.13,40.51s-38.47,126.64-38,178.72,4.59,73.53,4.59,73.53l15.41,79.46a14.12,14.12,0,0,0,13.86,11.44h99.92a13.73,13.73,0,0,0,13.28-10.2c8.94-33.55,35.53-142.66,25.27-217.89-12.25-89.87-29.86-127.66-27.48-145.7S2281.93,2451.07,2278.82,2450.21Z"
          }),
          createBaseVNode("path", {
            id: "Right_Fibular",
            onClick: _cache[18] || (_cache[18] = ($event) => handleBodyPartClick("Right Fibular", $event)),
            "data-label": "Right Fibular",
            class: "cls-fullbody-male-back-2",
            d: "M2277.83,2868.29a3.3,3.3,0,0,1,3.09,3.91c-4.55,23.7-29.16,152.53-29.16,161.33,0,9.7,3.57,36.26,2.55,43.92s-.51,22.46,2.05,30.12,4.12,31.91,2.47,38.65c-2,8-6.11,20.23-14.67,23.3s-74.45,7.52-79-1.18c-6.47-12.25-7.32-36.94-3.74-55.15,1.68-8.56,17.19-47.15,17.36-74.55.17-28.13,3.57-72.77-2.55-114.64-5.36-36.56-13.05-54.57-12.09-56.09C2165.89,2865.11,2258.23,2867.38,2277.83,2868.29Z"
          }),
          createBaseVNode("path", {
            id: "Right_Calcaneal",
            onClick: _cache[19] || (_cache[19] = ($event) => handleBodyPartClick("Right Calcaneal", $event)),
            "data-label": "Right Calcaneal",
            class: "cls-fullbody-male-back-2",
            d: "M2245.55,3173.9a5.82,5.82,0,0,1,4.85,2.3c6.88,9.06,30.64,40.44,38.83,49.51,9.53,10.56,28.17,46.55,3.38,48.33-28.34,2.05-137.67,12.22-140.08-17.7-2-24.43,14.48-38.18,12.12-58.81-3.53-27.4,5.42-23.83,14.47-21.79C2187.21,3177.57,2232,3174.44,2245.55,3173.9Z"
          }),
          createBaseVNode("path", {
            id: "Left_Rear_Acromial",
            onClick: _cache[20] || (_cache[20] = ($event) => handleBodyPartClick("Left Rear Acromial", $event)),
            "data-label": "Left Rear Acromial",
            class: "cls-fullbody-male-back-2",
            d: "M1756.24,816.21c-.85-2.91-8.18,1.58-10.84,3.63-16.15,12.46-34,30.34-45.26,69.91a256.14,256.14,0,0,0-9.5,77.93c.13,3.36,4.89,5.29,8.3,3.36a194.18,194.18,0,0,1,70.32-23.47c2.75-.36,5.36-4.41,5-6.63C1769,906.16,1762.14,836.55,1756.24,816.21Z"
          }),
          createBaseVNode("path", {
            id: "Left_Rear_Brachial",
            onClick: _cache[21] || (_cache[21] = ($event) => handleBodyPartClick("Left Rear Brachial", $event)),
            "data-label": "Left Rear Brachial",
            class: "cls-fullbody-male-back-2",
            d: "M1691.53,987.64c-.11,8.35-.15,20.86.37,30.07a15.06,15.06,0,0,1-1.89,8.18,254.93,254.93,0,0,0-29,78.2c-11.2,56.92-11.46,129.63-11.16,155.12a8,8,0,0,0,9.28,7.85c14.93-2.29,44.17-6.32,56.37-4.66,16.74,2.28,43.44,27.81,47.89,26.79,3.66-.84,32.45-76.64,45.76-122.89,6.47-22.47,1.71-37.19-2.38-58.9-3.92-20.81-29.74-151-30.76-155.61-.94-4.21-35.55,5.71-41.38,7.41a15.39,15.39,0,0,0-1.61.57c-3.93,1.66-21.85,9.22-32.78,14.32A15.15,15.15,0,0,0,1691.53,987.64Z"
          }),
          createBaseVNode("path", {
            id: "Left_Olecranal",
            onClick: _cache[22] || (_cache[22] = ($event) => handleBodyPartClick("Left Olecranal", $event)),
            "data-label": "Left Olecranal",
            class: "cls-fullbody-male-back-2",
            d: "M1651,1274.62a3.82,3.82,0,0,1,2.84-2c9.85-1.45,49-6.74,60-5.25,9.37,1.26,34.72,17.3,42.24,25.48a3.45,3.45,0,0,0,.28.26,50.93,50.93,0,0,1,4.64,4.53,3.78,3.78,0,0,1,.74,3.92c-2.38,6.15-9.13,24.89-11.08,43.85-1.18,11.51-1.36,18.14-1.24,21.89a3.78,3.78,0,0,1-4.39,3.85c-19-3.08-87.93-14-123.65-16.44a3.78,3.78,0,0,1-3-5.72c7-11.84,13.82-24,20.62-44.09C1644.84,1287.53,1649.17,1278.22,1651,1274.62Z"
          }),
          createBaseVNode("path", {
            id: "Left_Posterior_Antebrachial",
            onClick: _cache[23] || (_cache[23] = ($event) => handleBodyPartClick("Left Posterior Antebrachial", $event)),
            "data-label": "Left Posterior Antebrachial",
            class: "cls-fullbody-male-back-2",
            d: "M1624.41,1359.45a14.64,14.64,0,0,0-14.89,8.81c-5.28,12.39-13.63,37-18,76-6.5,58.43-8.54,181.07-3.3,245.92.24,3,.47,11.19,3.32,12.08,12.1,3.78,47.75,8.33,63.15,9.88,3.31.33,7-6.16,8.17-9.28,15.53-41.84,51.8-133.3,59.63-158.77,8.17-26.55,23.49-63.32,25.54-83.74,1.65-16.54,2-60.85,2-77.13a7.33,7.33,0,0,0-6-7.25C1728.19,1373,1682.36,1365,1624.41,1359.45Z"
          }),
          createBaseVNode("path", {
            id: "Right_Rear_Acromial",
            onClick: _cache[24] || (_cache[24] = ($event) => handleBodyPartClick("Right Rear Acromial", $event)),
            "data-label": "Right Rear Acromial",
            class: "cls-fullbody-male-back-2",
            d: "M2464.4,816.21c.84-2.91,8.18,1.58,10.84,3.63,16.14,12.46,34,30.34,45.25,69.91a255.82,255.82,0,0,1,9.5,77.93c-.13,3.36-4.88,5.29-8.29,3.36a194.25,194.25,0,0,0-70.32-23.47c-2.75-.36-5.36-4.41-5-6.63C2451.66,906.16,2458.5,836.55,2464.4,816.21Z"
          }),
          createBaseVNode("path", {
            id: "Right_Rear_Brachial",
            onClick: _cache[25] || (_cache[25] = ($event) => handleBodyPartClick("Right Rear Brachial", $event)),
            "data-label": "Right Rear Brachial",
            class: "cls-fullbody-male-back-2",
            d: "M2528.11,987.64c.11,8.35.14,20.86-.37,30.07a15,15,0,0,0,1.89,8.18,255.2,255.2,0,0,1,29,78.2c11.19,56.92,11.45,129.63,11.15,155.12a8,8,0,0,1-9.28,7.85c-14.93-2.29-44.16-6.32-56.37-4.66-16.73,2.28-43.44,27.81-47.88,26.79-3.67-.84-32.45-76.64-45.77-122.89-6.47-22.47-1.7-37.19,2.38-58.9,3.92-20.81,29.75-151,30.77-155.61.93-4.21,35.54,5.71,41.37,7.41a15.39,15.39,0,0,1,1.61.57c3.94,1.66,21.85,9.22,32.78,14.32A15.18,15.18,0,0,1,2528.11,987.64Z"
          }),
          createBaseVNode("path", {
            id: "Right_Olecranal",
            onClick: _cache[26] || (_cache[26] = ($event) => handleBodyPartClick("Right Olecranal", $event)),
            "data-label": "Right Olecranal",
            class: "cls-fullbody-male-back-2",
            d: "M2567.65,1274.62a3.81,3.81,0,0,0-2.84-2c-9.84-1.45-48.94-6.74-60-5.25-9.37,1.26-34.72,17.3-42.25,25.48a3.45,3.45,0,0,1-.28.26,52.28,52.28,0,0,0-4.64,4.53,3.8,3.8,0,0,0-.74,3.92c2.38,6.15,9.13,24.89,11.08,43.85,1.19,11.51,1.36,18.14,1.24,21.89a3.78,3.78,0,0,0,4.4,3.85c19-3.08,87.93-14,123.65-16.44a3.79,3.79,0,0,0,3-5.72c-7-11.84-13.83-24-20.63-44.09C2573.8,1287.53,2569.46,1278.22,2567.65,1274.62Z"
          }),
          createBaseVNode("path", {
            id: "Right_Posterior_Antebrachial",
            onClick: _cache[27] || (_cache[27] = ($event) => handleBodyPartClick("Right Posterior Antebrachial", $event)),
            "data-label": "Right Posterior Antebrachial",
            class: "cls-fullbody-male-back-2",
            d: "M2595.23,1359.45a14.65,14.65,0,0,1,14.89,8.81c5.28,12.39,13.63,37,18,76,6.49,58.43,8.54,181.07,3.3,245.92-.24,3-.47,11.19-3.32,12.08-12.11,3.78-47.75,8.33-63.15,9.88-3.32.33-7-6.16-8.17-9.28-15.53-41.84-51.81-133.3-59.64-158.77-8.17-26.55-23.49-63.32-25.53-83.74-1.66-16.54-2-60.85-2-77.13a7.35,7.35,0,0,1,6-7.25C2491.44,1373,2537.27,1365,2595.23,1359.45Z"
          })
        ]),
        _cache[29] || (_cache[29] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-4bb3a0e6><path class="cls-fullbody-male-back-3" d="M2051.92,611.34c-4.16,30.07-22.65,83.17-55.16,93.34-22.37,6.87-43.74,17-64.26,28.27-13.85,7.78-27.65,16-39.68,26.33-.7.59-1.92,1.74-2.56,2.37a31.52,31.52,0,0,0-5.58,7.05,138.81,138.81,0,0,1-15-.35c-73.58-5.39-126.27,27-160.84,91.34-27,50.64-21.44,107.34-21,162.74-2.33,4.43-5,8.64-7.43,12.94a177,177,0,0,0-14.83,36.6c-1.78,5.4-4,15-5.37,20.66l-2.1,10.51c-10.4,54.75-11.86,111.12-12.39,166.79-1.58,17.16-8.76,32.86-15.94,48.1-4.41,9.07-9,17.8-13.5,26.73-9.57,16-15.64,33.45-20,51.81-9.67,42-12.56,85.16-14.26,128.24-2,58-.09,116.1,2.53,174.13-3.08,20.13-14.42,37.71-28.21,52.15-6,6.18-12.91,12.1-20.82,16.2a8.89,8.89,0,0,0-.79.45c-.38.21-1.16.78-1.52,1-6.48,5.1-9.6,13.13-11.42,21.33a55.25,55.25,0,0,0-1.29,11c-.88,6.52-4.33,11.89-7.28,17.38-4.09,7.37-9,14.39-12.56,21.92-1.47,6-1.25,13-1.55,19.45-.58,13.8,0,27.94-3.73,41.51-1.47,4-3.54,9.46-2.6,13.35a3.59,3.59,0,0,0,.75,1.68,1.14,1.14,0,0,0,.86.38c4.47-.17,8.55-4.11,11.79-7.31a68.13,68.13,0,0,0,10.29-14.09c6.3-12.47,10-26.48,16.27-39.17l1.06-2.21a5.56,5.56,0,0,1,10.55,2.88c-2.77,12.73-5.8,26.17-8.45,39.26-4.25,21.56-9,42.95-11,64.82-.77,8.81-2.19,19.35-2.21,27.83.06,3.34.21,9.31,3.15,10.12,0,0,0,.06,0,0s0,.06.1,0a.18.18,0,0,1,.1,0h.06c3.23-2.16,5-6.08,6.91-9.76a168.71,168.71,0,0,0,6.84-17c7.18-20.42,15.6-51.18,21.79-72.33l10.45,2.41-6.11,34.32c-3.91,22.73-7.76,45.64-9.9,68.55-.5,5.68-.87,11.37-.87,16.91,0,3.94.07,8.28,1.43,11.63,0,0,0-.07-.08-.09s-.09,0-.21-.18a2.27,2.27,0,0,0-.93-.43l.75.26a2.76,2.76,0,0,0-1.28-.24,2.36,2.36,0,0,0-.88.2c-.27.13-.07,0,.17-.21,2.43-2.68,3.87-6.51,5.46-10.07,2.18-5.32,4.06-11,5.81-16.62,10.29-34.4,17.54-69.91,24.35-105.18l10.71,1.79c-4.24,29.69-8.27,59.62-10.26,89.52-.29,5-.5,9.9-.47,14.72a40.75,40.75,0,0,0,.9,9.89c0,.06,0,.14,0,.12s0,.09.07.14.18.19-.15-.08a3.16,3.16,0,0,0-2.18-.54,2.58,2.58,0,0,0-.87.27,7.81,7.81,0,0,0,1.3-1.53,38.71,38.71,0,0,0,3.15-5.77,140.21,140.21,0,0,0,5.19-13.54c9.19-28.44,15.12-58,20.86-87.37l10.74,2.16c-2,9.72-3.72,19.65-5.18,29.52-1.81,13.27-6,43-.85,54.5.1.23.15.06-.41-.31a2.33,2.33,0,0,0-.61-.31,3.37,3.37,0,0,0-3.06.18h0l0,0a10.79,10.79,0,0,0,1.43-2.05c3.37-6.13,5.51-13.21,7.71-20,7.42-23.92,12.53-48.81,19.19-73.25,6.11-19.41,15.21-37.47,20.71-56.88,2.55-9.19,4.33-18.27,2.88-27.75-3.55-25.07-11.17-49.15-11.18-75.51a100.23,100.23,0,0,1,4.61-31.53c16.33-48.07,36.65-94.36,54.25-141.88,11.89-32.31,24.5-64.51,31.72-98.16l.3-1.78.61-3.56.39-3.5c1-12.36,1.28-24.86,1.33-37.34.13-29.28-1.6-63.07,5.4-91.87,2.76-11.54,5.76-18.82,9.14-29.43,6.94-20.76,22.46-65.43,29.49-86.06,4.88-14.32,9.78-28.63,14.38-43,1.33-4.34,2.77-8.59,3.75-13-.09.15,10.76-2.21,10.79-2.2l.53,1.35.42,1.15c3.71,10.6,7.43,21.81,11.36,32.26,4.19,11.15,8.58,22.51,13.94,33a366.42,366.42,0,0,1,15,34c13.12,34.74,24.61,70.62,25.78,108.1a98.63,98.63,0,0,1-3.51,28.7c-4.07,14.53-7.51,29.23-10.54,44-7.58,38.35-13.62,77.41-12.7,116.52.28,9.25.36,18.78-.13,27.87-1.94,36.91-7.92,73.37-16.16,109.35-5.28,23.69-13.87,46.92-19.28,70.49-1.91,8-3.88,18.29-5.14,26.48-5,32.63-5.31,66.14-2.91,99,7.2,96.72,11.22,194.59,33.56,289.22a583.44,583.44,0,0,0,17.73,60.77,368.26,368.26,0,0,0,26.54,58.22c2.37,16,2.78,31.83,3.84,47.64.54,8.3,1.57,18.85,2.9,27.15,3.6,23.95,11.76,46.86,22.49,68.54l.5,1c1.07,15.66,2.33,31.48,1.34,47.69-.77,15.63-4.77,31-8.92,46.05-3.89,14.71-7.32,29.47-10.1,44.38a508.49,508.49,0,0,0-5.75,155.42c13.68,91.6,34.68,182,52.6,272.92,1.86,10.1,4.19,20.17,5.14,30.55a44.76,44.76,0,0,1-.44,5c-.31,3.53-.44,7.35-.57,11.12l-.56,22.93c-.3,7.43-.24,15-1.51,22.4-1.62,7.27-3.9,13.68-5.14,20.77a64.34,64.34,0,0,0,0,23.68,76.65,76.65,0,0,0,7,20.09,15.49,15.49,0,0,1,1.12,8.31c-1.33,8.69-7.26,15.51-12.11,22-5.61,7-11.9,14.33-17.52,21.33-12.22,15.42-34.35,45.25-23.83,55.77,5.38,4.58,12.26,6.7,19.28,8.21a120,120,0,0,0,13,1.92c13.36,1.27,27.13,1.07,40.69.8,22.14-.42,45.64,2.79,67-3.73,15.23-4.58,23.47-13.28,22.92-29.54-.89-12.85-9.13-24.62-13.06-37.71a59.17,59.17,0,0,1-2.28-22.3c1.09-21.49,6.05-41,6.18-61.42a68.58,68.58,0,0,0-2.55-19c-5.13-17.76-12.73-34.82-15.57-53.37a147.83,147.83,0,0,1-2-28.48c.4-18.27.46-36.79,1.62-55.32,2.65-55.54,18-109.26,29.13-163.35,7.13-35.71,11.3-72,10.25-108.36a449.23,449.23,0,0,0-10.31-81c-5.79-26.77-12.81-53.35-21.05-79.44l-4.24-13.1a117.37,117.37,0,0,1-3.86-14,28.65,28.65,0,0,1,1.77-16.32c1.33-3.43,2.94-6.38,4.31-9.65,3.9-9,6-18.78,8-28.69,5-26.77,7.39-54.13,8.3-81.35.61-18.33-.48-36.57-.75-54.89-.79-46.14.29-92.59,7.06-138.33,7.58-54.27,16-109.14,17.44-163.81.75-54.92-.92-110-4.52-164.82-.66-9-1.4-18-2.83-26.86l9.82-1.84c.82,4.65,1.34,9.44,1.83,14.09,4.88,59.77,6.48,119.72,5.87,179.67-1.51,62.15-12.2,123.93-20,185.37-4.29,38.58-4.91,77.53-4.23,116.34.78,27.71,1.76,55.49-.68,83.15a493,493,0,0,1-7,55.28c-2.11,10.9-4.66,22.21-9.4,32.66l-.37.86c-1.11,2.15-2.17,4.56-3,6.64-3.51,7.9-.07,15.21,2.32,23.24a896.57,896.57,0,0,1,28.43,107.16c7.76,41,10.08,83.43,5.7,125-5,55.23-22.13,108.25-31.09,162.7-6.27,36.17-7.28,72.4-7.69,109.15-.56,17.92,2.68,35.31,8.48,52.31,3.62,11.07,8.12,22,10.4,33.59,4.23,25.57-3.82,51.38-4.91,76.66a58,58,0,0,0,.38,12.57,60.25,60.25,0,0,0,3.62,12.08c3.42,8.49,8,17.1,10.21,26.47a42.83,42.83,0,0,1-1.5,25.14c-8.2,22.13-35.88,26.64-56.45,27.7-14.17.77-27.45-.62-41.51-.22-22.72.17-69,2.73-83.77-17.45-12.28-19.31,14-52,25.76-67.13,8.08-10.48,18.13-20.63,24.92-31.86a20.7,20.7,0,0,0,2.15-4.93,5.5,5.5,0,0,0,0-3.39l.23.51a87.77,87.77,0,0,1-8.08-23.1,76.1,76.1,0,0,1,.55-30.66c1.19-6.08,3.33-12.29,4.58-18,1.07-6.77,1-13.63,1.3-20.52l.56-23a145.06,145.06,0,0,1,1-15.11l0-.21c0-.14,0-.1,0-.08s0,0,0,.05l-.1-1.15c-1.12-9.23-3.1-18.42-4.85-27.69-17.85-90.11-38.46-180-52.39-270.85-6.61-51.85-4.68-104.61,4.41-156,3.11-17.09,6.9-34.11,11.36-50.84,1.77-7.06,4.21-15.11,5.59-22,4.85-22.16,3.37-44.28,1.71-67.06l.58,2.09a291.16,291.16,0,0,1-14.57-34.92c-7.13-20.89-10.58-43-12-65-1-15.25-1.46-31-3.6-45.75l.69,2c-13.75-24.14-24.38-50.14-32.71-76.59-32-102.62-37.08-210.8-44.73-317.2-1.19-15.1-2.33-30.68-2.71-45.88-.23-10.54-.09-21.81.3-32.36.23-3.77.62-10.24.85-13.87.78-8.71,1.84-19,3.22-27.63,1.28-8.33,3.34-19.12,5.3-27.33,4.11-18,9.94-35.36,14.87-53a662.29,662.29,0,0,0,17.11-88.86c2.57-20.87,4.13-41.92,3.3-62.91-1-40.11,5.17-80,12.91-119.18,3.07-15,6.59-30,10.73-44.81.62-2.28,1.06-4.06,1.54-6.24l.35-2.09c6.85-43.39-19-115.25-38.31-154.27-10.34-20.78-17.58-42.71-25.15-64.54l-.74-2.1-.36-1-.29-.77,10.76-2.27c-.19,3.12-1.25,6-2,8.95-5.18,17-11,33.78-16.72,50.59-7,20.6-22.93,66.48-29.48,86-2.91,9.15-6.81,19.48-8.85,28.45-4.58,19.2-5.12,39.15-5.18,59,0,21.77.58,47.32-1.32,68.68l-.46,4c-.44,2.58-.85,5.36-1.39,7.78-7.44,33.65-20,65.9-31.88,98.08-17.52,47.22-37.87,93.63-54.1,141.23-9.11,28.62-1.12,58.36,4.4,87.07,2,10.27,4.15,21.19,2.65,31.82-3.65,25.53-16.47,48.47-24.1,72.63-6.61,24.31-11.71,49-19.26,73.36-2.42,7.58-4.75,15.12-8.7,22.29-1.27,2.29-3.67,5.58-6.61,6.57-4.42,1.69-8.69-1.33-10.28-5.27-6.52-14.43-2-44.6.09-60.45,1.5-10.13,3.24-20.11,5.31-30.2l10.74,2.16c-5.84,29.84-11.86,59.72-21.27,88.78a147.47,147.47,0,0,1-5.63,14.64c-2.51,5-5.48,12.16-12.13,13.29-4.3.68-8.24-3-9.4-6.76-1.51-4.53-1.42-9-1.55-13.5,0-5.24.2-10.36.5-15.46,2-30.37,6.08-60.39,10.39-90.48l10.71,1.79c-2.24,12-4.64,23.79-7.15,35.65-5.11,23.78-10.44,47.41-17.55,70.76-2.86,9-5.67,18-10.44,26.39-3.79,6.78-9.69,10.31-15.55,6.1-5.43-4.35-5.18-13.84-5.37-19.91.17-17.83,2.78-35.33,5.3-52.81,3-20.06,8.2-48.63,11.79-68.86l10.45,2.42c-6.34,21.63-14.61,51.86-22,72.92-3.78,9.84-9.9,29.86-20.79,33.46-4,1.4-8.82-.09-11.81-3-8.49-8.17-4.69-26.34-4-36.67l.92-9.38c.76-9.46,2.32-19.29,4-28.61,4.55-25.44,9.84-50.56,15.55-75.76l.06-.29a5.07,5.07,0,0,0,8.63,4.56,4.69,4.69,0,0,0,.85-1.2l-1,2.07c-4.78,10-8.1,20.08-12.31,30.5a76.29,76.29,0,0,1-9.69,17.73c-5.32,7-11.39,14.08-20,17.36-7.6,3-16.09-.58-17.85-9.3-1.37-6.3.34-12.28,2.53-18a50.78,50.78,0,0,0,2.23-11.47c1.28-12.44,1-25,1.68-37.6.33-5,.45-11.25,3.12-16,3.74-7.13,8.13-13.76,12-20.7,2.22-4.18,4.85-8.27,5.92-12.71a70.59,70.59,0,0,1,1.52-12.66c2.32-10.94,7.58-23,17.78-29.16,2-1.17,4-2.14,6-3.49,18.27-12.69,35.46-35.42,38.9-57.73-3.92-81.48-6.66-175.17,4.26-260.14.38-3.63,1-7.24,1.6-10.84l1.77-10.83c.51-3.62,1.39-7.2,2.11-10.79,4.05-19.91,9.56-39.67,19.32-57.86,1.45-2.78,3-5.31,4.44-8.06l.62-1.26c.81-1.7,1.64-3.31,2.47-5,6.56-12.8,13.21-25.41,18.31-38.74,2.79-7.35,5.16-14.7,6.12-22.23l.26-2.34a10.61,10.61,0,0,0,.06-1.3v-1.36c.17-10.4.19-24.57.45-35.24,1.95-56.29,5-113.52,21.41-167.84a200.51,200.51,0,0,1,10.28-25.9c.76-1.7,1.69-3.33,2.56-5l1.32-2.47,1.39-2.41,1.39-2.41,1.38-2.32c1-1.59,1.7-3,2.51-4.41l-.54,2.29c-.27-47.88-4.73-97.67,12.39-143.62a202.82,202.82,0,0,1,54.53-80.36,156.34,156.34,0,0,1,89.12-38.38,227.77,227.77,0,0,1,36.56-.46c3.25.06,8.36.6,11.43.43l-4,2.33a39.94,39.94,0,0,1,5.58-6.59l1.47-1.4,1.48-1.33c1-.9,2-1.71,3-2.55,12-9.68,25.14-17.55,38.47-25,21.58-11.91,44-22.29,67.63-29.56,29-11.83,45.77-55.85,56.65-83.28Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2129.76,1826.15c.95,64-3.73,128-2.5,192,1.5,56.79,10.39,113.81,18.26,170.15,6,43.42,6.95,87.38,6.26,131.11-.66,27.35-1.81,54.67.56,82,1.94,24.72,4.59,49.63,11.14,73.57a82,82,0,0,0,4.33,12.16c2.11,4.45,4.32,8.79,5.46,13.87,1.22,5.29.25,11-1.15,16-3.38,11.47-3.24,10.3-6.27,19.89-10.91,34.56-20.26,70.1-26.41,105.87-9.29,53.63-6.72,108.87,4,162.14,6.43,33.66,15.67,67,21.69,100.85a569.49,569.49,0,0,1,7.69,61.91c1.29,20.25,1.56,42.1,1.83,62.11v3.57c0,1.18,0,2.37-.09,3.56a157.17,157.17,0,0,1-7.78,41.73c-4,13.2-9.64,25.3-11.61,38.59-3,27.29,6.81,54.35,5.54,81.81-1,16.51-12.21,30.74-15,46-1.28,7.72,0,15.9,4.61,22.35,3.6,4.7,8.72,7.78,14.45,9.94,18,6.42,38.35,5.89,57.49,5,3-.21,6.1,0,9,.11,18.87.66,61.7,6.38,73.94-10a14.57,14.57,0,0,0,1.44-4.65l.09-1.37.05-.68,0-.71,0-1.44-.16-1.47c-2.46-16.54-13.15-33.14-22.44-47-3.84-5.56-7.84-10.94-12.12-16.17-4.54-5.68-8.89-10.74-12.68-17.28a26.26,26.26,0,0,1-3.76-11,15.32,15.32,0,0,1,1.2-6.77,77,77,0,0,0,7.1-20.23,64.61,64.61,0,0,0,0-23.89c-1.15-6.76-3.14-12.38-4.79-19.25a68.84,68.84,0,0,1-1.4-12.23c-.89-14.15-.35-34.1-1.85-48.14-.44-3.33.36-7,.8-10.19,18.1-97.8,41.57-194.59,56.46-292.9.75-5.94,1.67-16.45,2.34-22.61a515.07,515.07,0,0,0-7.75-135.81c-3.92-22.45-10.52-44.74-15.82-66.93-5.13-23.06-3.61-47.38-1.89-70.44l.13-.47v0l.12-.45.23-.46c12.19-24.43,20.76-50.56,23.79-77.72,2.62-21.55,2.25-43.1,5.35-64.77l.13-.91.48-.85a353.56,353.56,0,0,0,16.08-32.18c4.59-10.62,9.22-22.7,12.9-33.73,5.73-16.92,10.71-34.89,14.82-52.29,23.41-100.6,27.44-204.63,34.6-307.4.62-13.26.52-27.42,0-40.69-.26-4-.6-9.73-.84-13.51-1-11.58-2.55-24.3-4.59-35.75-3.72-20.72-9.77-41.15-15.92-61.35a590.57,590.57,0,0,1-14.44-62.84c-6.14-34.74-10.34-70.09-8.77-105.46.28-37.67-5.48-75.26-12.82-112.2-3-14.82-6.48-29.53-10.55-44.08a87.68,87.68,0,0,1-2.14-9.42c-3.82-25,1.23-50.19,7.2-74.32,8-29.82,18.34-58.84,32.13-86.54,5.39-10.59,9.83-21.92,14.06-33.1,4.81-13,8.56-24,12.83-36.63,0,0,8.94,3.85,8.91,3.93,2.27,9.27,5.53,18.29,8.46,27.39,10.88,32.31,28.16,82.31,39.19,114.74,3,9.48,7,20,9.12,29.37,9.17,39.3,3.48,81.88,6.19,121.73.19,3.53.48,7.48.93,10.92l.61,3.58c.14,1,.47,2.67.68,3.6,2.78,13.43,6.82,26.47,11.08,39.57,19,57.47,42.72,113.29,64.31,169.88,5.2,14.44,11.58,28.93,13.84,44.38,3.52,25.83-2.86,52.18-7.71,76.66-1.54,8.35-3.31,16.6-2.9,25a94.08,94.08,0,0,0,3.37,17.57c5.5,19.41,14.61,37.49,20.73,56.88,8.08,29.16,13.43,59,24,87.18,1.15,2.83,2.92,6.7,4.36,8.34a3.05,3.05,0,0,0-3,.19c-.46.3-.37.41-.26.14l.1-.15.12-.3.26-.6a9.64,9.64,0,0,0,.47-1.35c2-7.29,1.65-15.11,1.38-22.78-.5-9.84-1.68-19.77-3.12-29.67s-3.19-19.81-5.19-29.54l9.77-1.69c4.19,30.07,9,60.28,18.13,89.2a121.26,121.26,0,0,0,5.27,13.73c1.43,2.8,2.63,5.52,4.76,7.43a2.58,2.58,0,0,0-2.28.33c-.25.21-.14.16,0-.06s0-.1.09-.17c.94-3.25,1-7,1.14-10.61.1-4.93,0-10-.22-15-.41-10.1-1.15-20.25-2-30.39-1.73-20.29-3.91-40.61-6.36-60.83l9.8-1.51c6.41,33.33,13.31,66.76,22.4,99.45a244.47,244.47,0,0,0,7.84,23.8c1.5,3.35,2.87,7,5.11,9.57.22.25.41.31.09.16a2.85,2.85,0,0,0-2.25.14c-.52.3-.45.39-.35.2a14.43,14.43,0,0,0,1.22-4.22,91.36,91.36,0,0,0,.61-16.08c-1.6-33.77-7.62-67.38-13.28-100.8l9.64-2.23c3.42,11.82,7,23.59,10.75,35.25s7.83,23.22,12.61,34.28c2.91,6.17,5.68,13.2,10.47,17.92a5.73,5.73,0,0,0,.47.37c.14.1.23.12.32.19s0,0-.33,0a.69.69,0,0,0-.2,0l-.06,0a2.78,2.78,0,0,0,.49-.23c1-.57,1.18-1.22,1.7-2.59,1.25-4.81.81-11.2.36-16.51-.85-9-1.74-18.36-2.69-27.43-4.17-30.1-11-60.62-17.48-90.36l-1-4.46-.26-1.1-.07-.27,0-.14c-.07-.74.1,1.46-.16-1.7a5,5,0,0,1,7-4.25c3.24,2.19,1,.68,1.71,1.2a55.65,55.65,0,0,1,12.25,19.45c3.36,8.12,4.49,18.37,7.83,26.35a47.57,47.57,0,0,0,9.9,13,19.41,19.41,0,0,0,6,4.06c1.66.52,2.87.79,4.17-.1a6.43,6.43,0,0,0,2.12-4.53,12,12,0,0,0-.09-3.26,15.88,15.88,0,0,0-1-3.43,47.32,47.32,0,0,1-2.43-10.06c-2.47-17-1-33.84-3-50.65l-.18-.9-.19-.75c0-.1-.06-.15-.08-.23s0-.12-.11-.29c-2.24-4.93-6.74-11.69-9.5-16.55-1.59-2.68-3.17-5.4-4.69-8.2-2.1-4.06-4.67-8.53-5.46-13.39a9.72,9.72,0,0,1-.09-1l0-.51a56.55,56.55,0,0,0-1.84-12.76c-2.26-8.51-6.1-16.81-13.9-20.88l-2.27-1.26c-1.21-.58-3.08-2-4.27-2.72-13.22-9.56-23.74-22.06-31.88-36a81.51,81.51,0,0,1-9.88-27.77c2.62-58,4.46-116.14,2.5-174.11-1.41-36-3.72-71.9-10-107.29-4.51-25.32-11.09-50.77-24.35-72.84-7.73-15.48-16.15-30.69-22.39-47-3.35-8.85-6.32-18.35-7.07-28.07a2,2,0,0,1,0-.33v-.85l0-1.35c-.45-58.32-2.41-117.35-14.46-174.49l-2.54-10.39c-.44-1.72-.79-3.48-1.32-5.17l-1.51-5.11-1.51-5.1a178,178,0,0,0-13.35-31.52l-1.32-2.3-1.33-2.29-1.4-2.34c-1.08-1.84-2.27-4-3.36-6,0-16.45.61-32.83.73-49.06,1.16-58.06-8.75-106.91-48-152.14-37.33-43.37-84.45-57.36-140.75-52.59-2.05.09-4.08.2-6.44.12l-2.54-.09-1.41-2.2a30.53,30.53,0,0,0-4.16-4.83c-12.49-11.6-27.43-20.28-42.26-28.7-20-10.93-40.7-20.89-62.42-27.65l-.87-.27-1-.34c-6.62-2-12.78-6-17.83-10.43-15.76-14.36-25-33.25-32.75-52.5a251.2,251.2,0,0,1-9.41-29.22l9.65-2.3c1.14,4.6,2.57,9.4,4.07,14a208.43,208.43,0,0,0,17.47,40.26c7.79,12.76,17.34,25.9,31.81,30.7,23.1,7.1,45,17.44,66.08,29,14.42,8.12,28.81,16.68,41.46,27.57a47.17,47.17,0,0,1,8.51,9.3l-4-2.29c1.63.06,3.58,0,5.5-.11l5.94-.32c77.31-5.71,134.06,29,170.29,96.71,19.18,36.22,23.61,78,22.89,118.32-.13,16-.73,31.92-.73,47.72l-.53-2.22c2,3.66,4.6,7.85,6.68,11.55a187.44,187.44,0,0,1,15.7,38.64c1.8,5.68,4.12,15.39,5.55,21.34l2.16,10.77c10.34,54.71,12.09,110.26,12.54,165.7v2.21c0,.2,0-.08,0,0l0,.3.27,2.41c2,14.56,8.37,28.44,14.68,41.78,4.29,8.83,9,17.69,13.42,26.57,10,16.7,16.42,35.42,20.85,54,2.29,10.18,4.65,21.94,6.17,32.37,13,88.41,9.78,185.65,5.81,271,1.42,9.79,5.67,19.58,11,28,7.45,11.59,16.94,22.57,28.44,30.18l.88.59c.29.18.59.33.88.5l1.78,1c10.46,5.18,16.4,16.7,19,27.27a67.57,67.57,0,0,1,2.18,15.44c1.63,6.23,5.64,12.1,8.85,17.84l4.74,7.95c2,3.49,4.45,7.24,5.9,11.27,1.52,5.68,1.49,11.65,1.76,17.38.45,12.13.26,24.53,1.92,36.38a45,45,0,0,0,2.75,10.48,20.8,20.8,0,0,1-.88,14.88c-6.33,12.12-19.3,8.45-27.21.71a56.64,56.64,0,0,1-12.26-16.35c-4.4-10.53-5.13-22.6-10.61-32.58a44.55,44.55,0,0,0-7.46-10.26c.69.45-1.65-1.15,1.51,1a4.87,4.87,0,0,0,6.76-4.13c-.25-3.06-.05-.77-.1-1.41l0,.14.06.29.28,1.16c6.34,28.47,12.72,57.76,17.35,86.55,1,6.14,1.76,12.48,2.28,18.68.78,9.27,2.17,18.61,2.29,28.1.08,6.34-.88,15.32-7.6,19a11.62,11.62,0,0,1-2.76,1.13,9.53,9.53,0,0,1-7.83-1.58c-15.4-10.85-32-72.91-38.29-93.3l9.64-2.23c3.94,22.47,7.65,45,10.45,67.75,1.67,14.25,3.29,28.75,3,43.28-.33,6.93-.56,20.45-10,21.17-9.08.21-14-17.11-16.66-24-5.52-16.37-9.66-33.12-13.64-49.86-5.21-22.27-9.85-44.58-14.1-67.06l9.79-1.51c4,35.81,8.6,71.57,8.65,107.69-.26,5.1-.08,10.8-2.6,15.6-3.36,5.89-10,5.59-14.09.88-16.48-20.24-26.22-87.57-30.13-115.24l9.76-1.69c4,20.18,7.34,40.17,8.51,60.78.3,8.3,1.79,36-11.21,34.9a8.55,8.55,0,0,1-4.85-2.64c-3.21-3.56-4.79-7.5-6.49-11.54-9.08-23.95-14.35-49.11-20.59-73.62-5.23-24.84-17.58-47-24.53-71.46-2.88-10.13-4.85-21.3-3.21-31.86,3.45-24.9,11.12-49.19,11.09-74.28a89.32,89.32,0,0,0-4.13-28.39c-16.23-47.63-36.57-94-54.08-141.27-11.86-32.16-24.41-64.38-31.84-98l-.4-1.91-.33-1.94-.65-3.89-.46-4c-1.09-12.74-1.33-25.6-1.39-38.31-.14-33.6,2.23-71.48-9.21-103.6-12.79-38.77-31.08-90.37-44-129.12-2.79-8.48-5.67-17-8.06-25.6a24,24,0,0,1-.94-5l9.61,1.7c-8,23.15-15.68,46.81-26.64,68.67-19.36,39.11-45.26,111.16-38.37,154.69.94,5.82,2.88,11.54,4.32,17.29,12,47.62,20.68,96.33,21.36,145.57-.1,12-.75,24.38,0,36.31,2.35,42.15,9.57,84.16,20.31,125,5.8,20.54,12.62,41,16.86,62a373.61,373.61,0,0,1,7.08,55.05c.89,15.11.88,31,.25,46.14-1.08,24.43-3.48,48.67-4.93,73.07-7.08,100.28-14.66,202.45-48,298.13a380.2,380.2,0,0,1-26.79,59l.61-1.75c-2.15,14.83-2.59,30.58-3.61,45.8-1.39,21.91-4.83,44-11.94,64.85-3.71,11.18-10.46,27-14.19,33.92-.34,8.76-2.27,31.89-1.1,44.28.73,14.95,4.64,29.66,8.59,44,3.94,14.87,7.44,29.93,10.27,45.11,9.67,51.2,12.22,103.93,6.14,155.75-12.14,85.36-31.69,169.63-48.5,254.09l-4.53,22.47c-1.79,9.69-4,19.32-5,29l0,0s0,0,0,.11l0,.21.25,1.7c.48,4.48.6,9,.76,13.32l.57,23c.23,6.55.28,13,1.12,19.45,1.36,7.26,4.15,14.65,5.37,22.17,3.34,17-.09,35.18-8.05,50.42l.21-.45a6.16,6.16,0,0,0,0,3.71,21.06,21.06,0,0,0,2.2,5.05c3.12,5.32,7.64,10.9,11.73,15.89,15,18.79,36.46,49.57,37,72.31l0,1c0,.34,0,.68-.06,1l-.15,2.06a24.12,24.12,0,0,1-2.68,8.38c-5.85,9.49-17.08,12.89-27.12,14.89-18.61,3.21-37.44,1.15-56,.26a95.65,95.65,0,0,0-9.87,0c-31.59,1.46-85,1.76-85.82-41.37-.5-20.37,15.61-36.39,15.56-55.88.08-30.9-12.47-63-2.38-93.49,6.29-19.56,14-38.19,15.61-58.62.41-4.34.55-8.85.52-13.22-.45-29.07-.72-59.92-4.36-88.63a668.16,668.16,0,0,0-11.88-67.12c-9.26-40.33-19.24-80.73-22.95-122.13a431.91,431.91,0,0,1,.58-86.8c.62-4.87,1.6-12.31,2.25-17.24.5-3.87,2.84-16.32,3.51-20.54l2.9-13.58c5.94-27,13-53.74,21.47-80.09,2.27-7.59,6.41-18.16,7.37-25.37.79-6.08-2.5-11.34-4.92-16.8-4-8.77-6.26-18.06-8.31-27.4a481.54,481.54,0,0,1-8.14-62c-2.37-27.58-1.23-55.27-.52-82.88.66-41-.09-82.1-5.19-122.76-6.74-49.83-14.63-100.12-17.88-150.42-2.38-36.75-1.35-73.64-.44-110.4.76-27.55,1.84-55.14,5.91-82.46,1.41-9.12,3-18.31,5.87-27.1Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M1986.64,697.87c20.17-14.32,22.9-50.65,22-73.66-.08-1.57,0-3.61-.27-5.06-.9-6-5-12.48-8.34-19.39a122.37,122.37,0,0,1-12.64-44.93c-.53-5.28-.74-10.65-.81-15.94a2,2,0,0,0-.9-2c-6-3.32-14.35-5.14-20.65-9.21a47.94,47.94,0,0,1-17-18.13,92.19,92.19,0,0,1-8.37-22.35c-4.62-19.24-7.15-40.29,1.89-58.62,2.89-5.61,7.12-11.23,13.12-14.1,9.6-4.71,18.56,1.15,21.18,10.83l1.55,5.51c.87,3.51,2,7,2.31,10.61a1.11,1.11,0,0,1-.22.76.69.69,0,0,1-.61.26.88.88,0,0,1-.62-.4l.93-.72s0,0,0,0a.37.37,0,0,0-.2-.07.57.57,0,0,0-.46.18c-.13.2-.08.16-.1.16a79,79,0,0,0-3.84-9.76c-2-4.5-4-10-8.74-12.07-7.78-2.88-13.56,6.07-16,12.58-3.3,9-4.43,18.86-4.31,28.47a139,139,0,0,0,3.69,24.06,82.8,82.8,0,0,0,7.29,20c4.91,9.44,12.82,15.69,22.86,19.19,3.75,1.47,7.48,2.67,11.13,4.9a11.09,11.09,0,0,1,5.28,9.9c0,.92,0,3.22.06,4.15.46,18.28,3.93,36.38,12.36,52.72,3.83,8,9.24,15.93,9.46,25.45,1,26.84-1.12,60.84-21.33,80.85a27.73,27.73,0,0,1-5.61,4.17l-4.08-8.28Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2227.69,706.48a23.58,23.58,0,0,1-3.1-2,50.2,50.2,0,0,1-13.21-16.68,72.87,72.87,0,0,1-3.62-8.06c-.36-.89-.74-1.85-1-2.73l-1.76-5.54-1.35-5.6c-.44-1.51-.83-4-1.1-5.63l-.92-5.65-.57-5.66c-.56-5.38-.77-11.54-.77-16.93.18-4.62-.17-13.45,1.24-17.77,1.58-5.7,4.61-11,7.13-16a118.53,118.53,0,0,0,8.21-19.48c3.69-11.82,5.21-24.25,5.5-36.62l.08-2.87a14,14,0,0,1,7.61-11.83c4.56-2.26,10-3.86,14.25-5.94,12.54-5.54,19.21-18.16,22.87-30.8a170.08,170.08,0,0,0,5.26-27.34,93.49,93.49,0,0,0-1.28-24.18c-1.78-8.08-6-17.69-16-11.94-6,3.53-10.3,9.33-14.73,14.73l-1.14-.57c2.37-7.37,5.75-14.77,11.82-19.92,5.5-4.79,14-6.17,20.16-1.44,8.73,6.78,10.65,18.29,11.83,28.38a91.58,91.58,0,0,1-.58,23.16c-2.29,15.38-5.81,30.58-15,43.66a46.69,46.69,0,0,1-18.87,15.49c-4.92,2.3-9.41,3.47-13.94,5.62a4,4,0,0,0-2.28,3.41l-.08,2.63c-.29,20.84-4.83,42.07-14.8,60.4-3,6.16-6.69,11.66-7.06,18.43,0,3.49-.39,12.7-.12,16.13.06,5,.61,11,1.15,16,.19,1,1.08,6.71,1.29,7.83.45,2.32,1.32,5.46,1.8,7.66,2.84,9.56,6.95,19.33,14.29,26.29a21.9,21.9,0,0,0,3.21,2.49l-4.42,9Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2151.75,768.11A361.15,361.15,0,0,0,2129,808.55c-2.82,5.56-5.36,11.24-8.25,16.79A82.06,82.06,0,0,1,2116,834l-.58-.1c-3.06-20,4.65-41.17,18.95-55.34,4.9-4.67,10.65-8.84,17.34-10.48Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2260.26,825.3c-25.49,12.75-50.76,32.4-58.76,60.65-1.38,4.61-2.41,12-3.1,16.9-1.32,9.9-2.84,25.76-3.87,35.83-3,30.32-9,61.11-21.94,88.91-2.8,6.55-7,14.15-10.44,20.41-1.67,2.79-5.52,8.89-7.24,11.65-3.25,5-7.08,10-10.57,14.84,1.94-3.87,4.19-8.26,6.2-12.13,2.4-4.48,5.46-11.75,7.72-16.33,1-2.51,4-9.84,5.1-12.49,2-5.52,4.18-11.29,5.86-16.92,8.22-25.63,11.74-52.24,13.8-79,1.17-14.09,2.5-31.62,4.92-45.49,5.79-35.41,38.53-60.62,72.32-66.79Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2135.66,1162.66c10.92,35.79,37.85,67.71,64.23,93.55,22.93,22.31,43.69,48,55.45,78,.63,1.8,1.91,5.15,2.43,7a69.7,69.7,0,0,1,3.17,14.43,136.17,136.17,0,0,0-9.93-19.34c-16.27-26.6-37.17-49.79-59.45-71.54-26.38-25.81-54.19-64.1-55.9-102.14Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2109.13,1268.53c4.23,41.61,5.45,83.46,5.92,125.24.27,32.47-.08,65.36-5.92,97.4-5.83-32-6.19-64.94-5.92-97.4.47-41.78,1.69-83.63,5.92-125.24Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2291.41,896.28c5.76,2.81,10.69,6,15.52,8.71,3.38,1.86,6.49,3.67,9.92,4.5a6.12,6.12,0,0,0,1.81.18,43.6,43.6,0,0,0,8.09-1.14c8.65-1.86,16.69-4.16,25.93-5.1-7.88,9.23-21.69,17.87-34.11,18.23-12.77-.16-23.87-14.1-27.16-25.38Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2352.17,1636.19c-2.77,9.56-6.36,19.5-9,29-2,7.11-3.62,13.58-4.14,20.92-1.18,12.56-1.79,25-2.56,37.72-.65,10.16-1.26,20.42-2.79,30.7l-.8,0a257.33,257.33,0,0,1-6.1-61.56,130.91,130.91,0,0,1,1.27-15.94c2.69-15.7,11.45-31.18,24.12-40.82Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2158.64,1587.68c-19.36,13.89-35.75,33.3-41.07,56.83-1.69,6.91-1.78,14.08-1.88,21.17-.07,4.48-.6,17.42-.74,22.12-.93,37.74-5.78,109.41,21.15,137.68,15.89,16.51,38.61,27.36,60.81,32.31,39,8.69,76-2.57,104.28-30.68.67-.71,3.21-3.14,3.92-3.87,1.36-1.43,4.9-5.41,6.21-6.79-1.6,2.58-3.36,5.2-5,7.78l-3.36,4.44c-29.31,38.88-77.5,51.31-123.26,36.79-18.37-5.81-36-15.12-50-28.5-34.48-31.6-26.8-106.56-24.11-149.67.39-4.45,1.25-17.58,1.56-22,.37-7.55.84-15.33,2.92-22.64,6.59-24.52,25.62-44.77,48.57-55Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2481.62,1325.21c5.69,2,10.7,4.19,15.6,5.88,3.93,1.37,8.77,2.93,12.44,2.24a8.16,8.16,0,0,0,2.59-1.07c6.81-4,11.22-12.74,15.58-19.3a19.89,19.89,0,0,1,1,4.45c1.35,10.53-3.58,22.7-14,26.89-13.64,4.71-28-7.45-33.21-19.09Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2189.79,3062a337.21,337.21,0,0,1,3.21,70.35c-.66,9.81-1.47,20-3.79,29.72-5.4,20.49-13.84,40.34-16.66,61.33-3,20.51-.58,41.46,19,52.39a21.8,21.8,0,0,0,8.79,2.9,41.31,41.31,0,0,0,12.51-.12c30.12-4.9,29.89-39.78,25.3-63.63-1.69-9.48-4.48-19-7.23-28.18-5-24.21-8.19-49.49-7.76-74.33a407.08,407.08,0,0,1,3.41-46.44q1.84-13.81,4.55-27.48c-.64,24.6-1.18,49.2.46,73.7,1.13,23.33,6.18,51.38,10.8,71.5a254.35,254.35,0,0,1,7.31,25.93c4.55,21.35,6.72,47.22-7.2,65.82-9.81,12.88-26.77,18.19-42.45,16.18a41,41,0,0,1-12.63-3.53,61.41,61.41,0,0,1-7.69-4.91c-33.93-26-17.26-73.91-5.21-107.26,2.56-7.18,5.24-14.21,6.7-21.64,3-14.89,3.77-30.48,5-45.71,1.1-15.51,2-31.09,3.59-46.59Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2258.22,2385.3c12.69,25,12,65.73-2.56,89.87-.92-15.38-.51-29.76-.52-44.9.24-15.12.48-29.75,3.08-45Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2066,768.11c6.68,1.64,12.44,5.81,17.33,10.48,14.3,14.17,22,35.33,19,55.34l-.58.1a82.18,82.18,0,0,1-4.75-8.69c-2.89-5.55-5.42-11.23-8.24-16.79A363.64,363.64,0,0,0,2066,768.11Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M1957.44,825.3c33.78,6.17,66.53,31.38,72.31,66.79,2.42,13.84,3.76,31.41,4.92,45.49,2.07,26.8,5.59,53.42,13.81,79,1.67,5.63,3.88,11.39,5.86,16.92,1,2.44,4.09,10.06,5.09,12.49,2.27,4.59,5.31,11.82,7.72,16.33,2,3.83,4.26,8.25,6.2,12.13-3.49-4.82-7.32-9.85-10.56-14.84-1.73-2.77-5.66-9-7.25-11.65-3.41-6.27-7.62-13.87-10.44-20.41-13-27.8-19-58.59-21.94-88.91-1-10.08-2.55-25.88-3.86-35.83-.68-4.79-1.73-12.28-3.1-16.9-8-28.25-33.27-47.9-58.76-60.65Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M1959.48,2385.3c2.59,15.21,2.84,29.85,3.07,45,0,15.14.4,29.52-.52,44.9-14.58-24.13-15.25-64.83-2.55-89.87Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M1996.43,485.21c-11.15-15.52-17.35-33.65-23.18-51.64-10-32.72-16.54-67.42-11.71-101.74,3.6-23.06,14.09-44.57,27.62-63.5,27.32-38.29,73.79-60.76,120.58-60.91,46.56.36,94.11,21.16,122.22,59,25.87,34.72,31.4,80.15,26.18,122.11a269.51,269.51,0,0,1-32.09,96.7c10.9-43.07,23.59-86.17,22.72-130.86-.56-43.86-19.89-86.15-57.37-110.17-48.71-32.31-114.66-33.56-162.83.47-34.89,24.62-60,66.87-59.24,110.33.07,29.46,6.69,58.71,14.82,87,4.3,14.25,9,28.31,12.28,43.21Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2027.9,3062c1.49,15.56,1.63,31.26,1.84,46.82a195.28,195.28,0,0,0,1.28,22.76c3.23,22.92,12.72,44.39,19.67,66.43,5.85,19.41,10.67,40.75,4.49,60.91-3.8,12.54-13.13,23.1-24.73,29.11-8.68,4.08-18.24,4.74-27.58,3.38-19.19-2.91-32.61-16.8-36.56-35.55-5.11-24.45,1.53-49.38,9-72.15l-.18.68c1.33-6,2.6-12,3.84-18,6.19-29.89,8.31-60.38,8.21-90.92.13-12.3-.4-24.6-.62-37,1.79,9.11,3.33,18.27,4.55,27.48,3.56,27.75,4.74,56,1.61,83.88-1.33,12.55-3.62,25-6,37.17-4.63,14.65-8.4,29.67-9.29,44.54-1.5,20.74,4.17,43.42,27.52,47,6.43,1,13.71.68,19.68-1.93,12.38-6.29,19.79-17.74,21.16-31.72,2.54-26.49-8.32-52.22-15.81-77.31-3.2-11.67-6.2-22.89-7.52-35.08-1.45-16,.5-31.55,2.23-47.31.88-7.51,1.95-15.81,3.24-23.26Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2082,1162.66c-1.68,38-29.53,76.36-55.9,102.14-22.27,21.75-43.17,44.94-59.44,71.54a135.14,135.14,0,0,0-9.93,19.34,70.33,70.33,0,0,1,3.16-14.43c.55-1.94,1.75-5.09,2.43-7,11.76-30.06,32.52-55.7,55.46-78,26.37-25.83,53.31-57.76,64.22-93.55Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M1736.07,1325.21c-5.22,11.63-19.57,23.8-33.2,19.09-10.43-4.2-15.37-16.36-14-26.89a19.89,19.89,0,0,1,1-4.45c4.37,6.57,8.77,15.28,15.58,19.3a8.16,8.16,0,0,0,2.59,1.07c3.68.69,8.51-.87,12.45-2.24,4.89-1.69,9.91-3.93,15.59-5.88Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M2059.05,1587.68c22.95,10.21,42,30.47,48.57,55,2.08,7.31,2.56,15.08,2.93,22.64.22,4.44,1.24,17.32,1.55,22,2.69,43.07,10.38,118.07-24.1,149.67-14,13.38-31.62,22.68-50,28.5-45.74,14.53-94,2.08-123.25-36.79-.67-.87-2.7-3.56-3.36-4.44-1.64-2.59-3.41-5.2-5-7.78,1,1.13,5.37,5.8,6.22,6.79.7.74,3.15,3.08,3.91,3.87,28.27,28.11,65.33,39.37,104.28,30.68,22.21-5,44.92-15.79,60.81-32.31,26.92-28.27,22.09-99.86,21.16-137.68-.22-4.49-.6-17.68-.74-22.12-.11-7.08-.19-14.27-1.88-21.17-5.33-23.53-21.72-42.93-41.08-56.83Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M1865.52,1636.19c12.67,9.64,21.44,25.13,24.12,40.82,2.14,15.9,1.56,31.25,0,47a266.9,266.9,0,0,1-4.88,30.54l-.79,0c-1.54-10.28-2.15-20.54-2.8-30.7-.76-12.71-1.38-25.16-2.55-37.72-.52-7.34-2.13-13.81-4.14-20.92-2.64-9.46-6.24-19.4-9-29Z" data-v-4bb3a0e6></path><path class="cls-fullbody-male-back-3" d="M1926.29,896.28c-3.29,11.27-14.4,25.23-27.17,25.38-12.43-.37-26.21-9-34.11-18.23,9.25.94,17.29,3.24,25.94,5.1a43.62,43.62,0,0,0,8.08,1.14,6.19,6.19,0,0,0,1.82-.18c3.43-.83,6.54-2.64,9.92-4.5,4.82-2.74,9.76-5.9,15.52-8.71Z" data-v-4bb3a0e6></path></g>', 1))
      ], 16);
    };
  }
});

const FullBodyMaleBackSVG = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4bb3a0e6"]]);

const _hoisted_1$2 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FullBodyFemaleFrontSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "fullBody":
          popoverComponent = _sfc_main$5;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "FullBodyFemaleFrontSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[52] || (_cache[52] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-fullbody-female-front-1",
            d: "M2010.66,3250.06s-10,21.26-2.23,30.9a50.55,50.55,0,0,0,23.34,15.69c4.71,1.38,20.05,11.72,34.71,7.59s9.16,9.78,35.84,7,26-6.28,40.34,0,32.6,5.45,38.22-4,14.15-29.85,10-42.36-19.52-61.54-23-69.13-1.17-21.55-3.32-47.8-5.15-43.6-8-54.63-6.26-104.44-4.39-116.95,21.57-220.05,23.58-236.71,8.32-64,5.31-98.76-10.13-93-11.78-116.87-5-197.45-5-197.45,3.7-139.19,7.33-166,10-159.3,10-176.15-3-162.83-18.32-187.92c24.16-8.47,28.93-19,40.17-8.44s19.53,11,19.53,11-3.53,6.72-11,57.78-10.6,126.86-5.11,204.58,16.68,194.4,14.64,247.85-2.11,195.76-5.82,219.43-16.48,112.7-10.78,164.89,29.5,243.12,28.33,274.76,2.08,109-2.12,119-12.6,70.33-8.89,97c-9.23,24.51-28,77.65-27.5,89.64s6.35,48.36,46.52,38.48c11.92-2.73,21.79-3,31.32-1.35s16.65-1.18,23.15-1,10-2.3,19.08-3.74,18.7-.62,26.54-4.77a206.16,206.16,0,0,1,27.4-11.22c5.62-1.72,14.52-4.78,12.45-21.12s-15.63-27-25.19-41.05-21.88-41.63-23.17-60.74-3.46-59.69-4.62-84.48,16.19-95.6,20.62-115.35,27.44-176.06,29.24-188.94,17.18-107.28.61-218.57c-8.38-86.68-14.41-148.86-6.18-186.11s78.38-240.79,80.68-247.41,66.07-206.32,65.65-290.56-4.07-173.16-46.26-266.6-74.13-156.53-82.94-165.89-18.77-71-15.64-100.22,14-96.83,36-129,30.43-38.84,30.43-38.84l28.64,171.6s13.8,108.31,19.15,130.5,48.32,149.91,57.84,176.19,35.57,94.57,37.5,108.18.06,49.08-2.77,61.73-9.9,26.3-3.45,52.08,18,42.29,23.46,65.86,9.37,73.27,20.18,76.5,10.5-15.87,10.5-15.87,5.59,37.83,18.26,38.17,7-34.73,7-34.73,4.32,35.71,15.55,43.56,21-5.74,14.93-42.69c9.42,16.59,16.17,24.95,19.45,19.9s4.43-41.19-1.36-56.85a66.56,66.56,0,0,1-3.74-29.61s14,26.21,17.7,26.21,10.9-3.06,10.21-12.6-4.81-61.42-6.29-65.65-10.88-18.53-15.45-34.74-4.17-22.17-12.23-31.14-43.67-44.2-45.93-58.15-19-212.09-19-212.09-10.69-99-20.23-130.12-36.6-72.15-37.66-75.33-27.22-208.57-27.22-208.57-19.28-153.09-19.75-168.39S2512,877.34,2495,861.92s-79.31-56.43-146-73.55S2262.15,678.06,2260.28,652c.16-8.87,12.08-24.35,12.34-24.77s26.77-54,26.53-64.94c5.26,8.9,11.75,20.42,18.11,9.43s14.1-30.46,17.64-40.54,7.59-15.56,8.27-22.71.4-9.16-3.88-13.77-10.35-4.75-11.78-3.08-7.73,4.09-7.73,4.09,15.83-61.92,10.93-86.34-11.81-72.7-71.84-104.25-129-5-145.36,7.46-57.33,41.33-56.47,118.61c6.27,47.59,9.49,60.44,9.49,60.44s-7.67-11-13.77-7.79-8.89,12-4.77,35.52,11.27,30.3,12.29,35.4,2.85,24.76,11.3,24,13.55-16.13,13.55-16.13,12.59,44.26,21.78,59.58A353,353,0,0,0,2127.34,652s-7.42,43.75-17.41,66.78-21.85,44.69-46.14,58.13-138,44.75-167.62,80.15-34.8,60.2-39,94.91-41,349.44-44.11,355.1-42.58,70.55-48.31,117.3-18.43,198.38-18.43,198.38S1738,1722,1735,1726.91s-39.12,51.09-45.68,56.83-16.09,46.24-18.47,48.62-9.49,18.5-10,33.61-8.82,54.75-1.73,56.92,15.51,1,21.3-13.25-1.17,29.59-2.38,35.06-8,42.32,2.13,42.27S1697,1971.6,1697,1971.6s-.28,45.41,8.61,39.78,20.74-46.77,22.23-37.15-2.24,32.77,5.59,27.66,15.42-19,17.75-30.45,4.22-11.71,5.15-3.24,7.64,20.63,11.6,7.25,12.85-35.84,14.2-51.67,7.47-43.42,13.94-57,17-48.68,13.61-66.72-15.66-47.32-4.08-85.45,79-227.4,79-227.4,19.23-80.34,21.87-108.6,38.72-244.76,38.72-244.76,33.7,35.06,38.47,45.28,20.77,58.89,23.83,93.27,7.93,79.44-1.65,105.36-47.29,92.3-50.14,98-38.42,78.15-43.53,91.09-45.68,141.69-46,198.15-2,128,32,245.76,115.41,349.85,115.41,357.23,8.19,75.32,3.24,91.05-20.64,172.08-19.34,209.09,19.5,178.72,30.74,236.59,27.85,149.45,28.9,162.73-6.48,42.3-4.5,53.15,3.68,28.16,4.7,38.06-11.91,34.57-15.83,44.62-6.64,20.42-13.27,27.23S2010.66,3250.06,2010.66,3250.06Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$2, [
          createBaseVNode("path", {
            id: "Cephalic_Frontal",
            "data-label": "Cephalic Frontal",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Cephalic Frontal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2101.45,452.22c-17.93,6.61-36.34-8.36-34.06-27.73,5.8-49.31,30.7-122.6,127.49-122.6,97.44,0,120.77,72.35,125.36,121.64,1.82,19.6-17,34.37-35.06,27.59-21.95-8.26-51.49-14.8-80.23-6.88a31.43,31.43,0,0,1-17.36-.23C2159,435.4,2125.82,443.23,2101.45,452.22Z"
          }),
          createBaseVNode("path", {
            id: "Nasal",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Nasal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2181.56,461.64c-.81-4.58,29-4.13,27.91,0-2,7.27-3.94,30.6-4.17,34.05,0,.14-1.11,30.51,6.73,47,5.1,10.72,6.75,8.59,9.64,14.43,2.42,4.91,3.67,6.8,3.12,10.17-2.27,9.19-10.32,10.07-16.48,7.9a5.78,5.78,0,0,0-5.23.64c-7.69,5.38-16.36,2-20.41-.1a5.53,5.53,0,0,0-4.47-.27c-4.6,1.67-11.25.21-13.24-1.81-2.35-2.39-3.57-9.6.2-14.3,4.71-5.88,7.08-7.72,11.8-15.51,4.94-7.55,6.82-30.47,7.42-40.58a68.58,68.58,0,0,0-.08-9.18C2183.62,485,2182.05,464.44,2181.56,461.64Z"
          }),
          createBaseVNode("path", {
            id: "Right_Cephalic_Orbital",
            "data-label": "Right Cephalic Orbital",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Right Cephalic Orbital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2082.84,481.31c5.58-11.07,12.88-24.13,37.27-29.36,25.4-5.45,47.59-3.59,56,13.33s6,70.05-15.06,66.2-55.56,13.44-64.87,7.34S2077.15,498.3,2082.84,481.31Z"
          }),
          createBaseVNode("path", {
            id: "Left_Cephalic_Orbital",
            "data-label": "Left Cephalic Orbital",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Left Cephalic Orbital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2306.88,481.31c-5.58-11.07-12.88-24.13-37.27-29.36-25.4-5.45-47.59-3.59-56,13.33s-6,70.05,15.06,66.2,55.56,13.44,64.87,7.34S2312.57,498.3,2306.88,481.31Z"
          }),
          createBaseVNode("path", {
            id: "Oral",
            "data-label": "Oral",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Oral", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2151.72,598.29s12.51-13.85,27.8-10.84,22,1.67,29.1.33c13.24-2.67,36,9.86,34.88,22.48-1.14,13.22-37.87,18.56-50.56,17.89S2126.74,623.65,2151.72,598.29Z"
          }),
          createBaseVNode("path", {
            id: "Mental",
            "data-label": "Mental",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Mental", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2235.71,643.11a18.31,18.31,0,0,1-9.09,8.89,69,69,0,0,1-17.72,5.52,92.55,92.55,0,0,1-26.19.76c-11.62-1.33-31-8.5-30.09-19.39,1-11.4,30.52-6.64,41.46-6.06C2204,633.35,2243.25,626.07,2235.71,643.11Z"
          }),
          createBaseVNode("path", {
            id: "Right_Cephalic_Buccal",
            "data-label": "Right Cephalic Buccal",
            onClick: _cache[6] || (_cache[6] = ($event) => handleBodyPartClick("Right Cephalic Buccal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2095.6,563.94s9.08,35.47,20.94,58.23c7.2,13.54,25.74,27.88,30.53,29.75,2.45,1-2.47-10.28-1.76-16,.67-5.47,7.65-8.24.62-15.8-14.37-15.47-5.64-31.37,2.16-35.64s21.18-31.18,2.32-39.93-31.15,6.52-44.61,4.19C2090,546,2095.6,563.94,2095.6,563.94Z"
          }),
          createBaseVNode("path", {
            id: "Left_Cephalic_Buccal",
            "data-label": "Left Cephalic Buccal",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Left Cephalic Buccal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2290,563.41s-5,25.7-23.15,57.44c-5.64,11.48-22.66,29.2-26.82,31.07-2.13,1,2.15-10.28,1.54-16-.59-5.47-6.66-8.24-.55-15.8,12.51-15.47,4.91-31.37-1.88-35.64s-17-33.91-.55-42.66,29.57,7.93,40.5,7.12C2295.2,547.74,2290,563.41,2290,563.41Z"
          }),
          createBaseVNode("path", {
            id: "Cervical",
            "data-label": "Cervical",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Cervical", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2387.12,811.7c-20.33-9.46-74.55-20.07-103.67-60.1l-.12-.18c-9.35-14.67-25.18-66.76-29.61-81.68a2.53,2.53,0,0,0-4.13-1.14c-7.66,7-29.68,24.49-58.66,23.68-21.26-.6-45.08-15.33-53.34-20.89a2.53,2.53,0,0,0-3.87,1.49c-3.14,12.53-15.12,55.38-39.07,88.16-20.56,28.56-70.77,44.2-87.2,48.68a2.53,2.53,0,0,0-.69,4.57c11.51,7.31,44.7,24.35,100.59,21.65,37.94-1.84,71.56,19.87,85.71,28.54a2.51,2.51,0,0,0,2.65,0c8.17-5.14,34.44-32,94.72-28.31l.22,0c2.32.33,42.36,5.54,96.49-19.88A2.54,2.54,0,0,0,2387.12,811.7Z"
          }),
          createBaseVNode("path", {
            id: "Thoracic_Sternal",
            "data-label": "Thoracic Sternal",
            onClick: _cache[9] || (_cache[9] = ($event) => handleBodyPartClick("Thoracic Sternal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2196.82,879.12a5.12,5.12,0,0,0-8.15-.18c-5.49,6.12-14.44,19.62-13.9,42.16.77,32.36,13.94,168.82.92,200.37-17.91,43.38-7.1,77,7,91.15,2.13,2.12,6,5.43,9.45,5.36,4.07-.09,7.79-3.82,9.29-4.94,19.42-14.46,27.22-39,11.9-91.57-8.26-35.22-5.9-161.5-3.88-201.07,0-.19,0-.38,0-.57C2209.45,898,2201.74,885.12,2196.82,879.12Z"
          }),
          createBaseVNode("path", {
            id: "Right_Thoracic_Mammary",
            "data-label": "Right Thoracic Mammary",
            onClick: _cache[10] || (_cache[10] = ($event) => handleBodyPartClick("Right Thoracic Mammary", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2173.35,897.77c8-35-41.44-50.59-78.9-43.72a6.55,6.55,0,0,1-.89.1c-37.42,1.87-65.29-20.84-89.63-35.46-14.94-9-54,9.22-91.13,40.7-23.79,20.19,25.48,78.93,52.28,87.55,32.85,12.24,63.09,1.68,69.42,127.29,6,68.4,29.61,78.4,29.29,93-.23,10.69-60.86,4.68-80.11-3.14-.57-.24,22,29.06,27.08,68.14,5.09,39.43,7.81,47.09,10.2,57a9.16,9.16,0,0,0,11.48,4.92c1.44-.54,14-5.66,27.2-17.51,37.23-33.36,55.72-48.12,82.05-67.36,5-3.64,11.58-5.72,14.63-11.58,7.08-13.56,6.44-32.73,8-50.59.94-11.07,4.15-21.73,6.17-30,.06-.23.1-.47.14-.7,3.4-25.58,5.1-34.81,5.1-115.73C2175.69,979.76,2167.48,923.29,2173.35,897.77Z"
          }),
          createBaseVNode("path", {
            id: "Right_Thoracic_Axillary",
            "data-label": "Right Thoracic Axillary",
            onClick: _cache[11] || (_cache[11] = ($event) => handleBodyPartClick("Right Thoracic Axillary", $event)),
            class: "cls-fullbody-female-front-3",
            d: "M1933,941.36a3.21,3.21,0,0,1,5-3.24c11.26,7.87,32.76,14.18,49.55,19.91,36.66,12.9,37.18,49.92,44.4,124.42s32.75,78.67,26.85,83.3c-10.39,8.14-79.51,2.67-96-20.31-21.09-29.45-24.85-67.26-10.4-105C1974.81,982.08,1938.36,971.69,1933,941.36Z"
          }),
          createBaseVNode("path", {
            id: "Right_Acromial",
            "data-label": "Right Acromial",
            onClick: _cache[12] || (_cache[12] = ($event) => handleBodyPartClick("Right Acromial", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1899.77,879.28a5.47,5.47,0,0,0-8.66-.77c-7.49,8.27-21.54,25.63-25.22,79.57-2.14,31.47,23.08,7.77,38.88,26.28s50.66,23.85,33.89-13.92c-7.16-16.12-11.62-26.8-16.4-38.65C1911.83,906,1905.32,888,1899.77,879.28Z"
          }),
          createBaseVNode("path", {
            id: "Right_Brachial",
            "data-label": "Right Brachial",
            onClick: _cache[13] || (_cache[13] = ($event) => handleBodyPartClick("Right Brachial", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1860.91,983.85c-.25,1.73-7,42.21-9,76.26-3.08,53-26.66,201-24,209.19,1.57,4.85,6.88-3.49,14.46-3.75,11.75-.39,12.32,9.57,32.34,16.85,17.17,6.25,23.59-11.88,34.67-11a3.92,3.92,0,0,0,4.08-3.15c4.61-21.37,16.91-91.67,24.12-146.49-4.14-18,1.47-56.22,4.88-74.12,24.77-68.9-2-38-23-47.74-18.64-13.77-15.51-17.41-33.63-19.71C1868.89,978.08,1862.36,974.13,1860.91,983.85Z"
          }),
          createBaseVNode("path", {
            id: "Right_Antecubital",
            "data-label": "Right Antecubital",
            onClick: _cache[14] || (_cache[14] = ($event) => handleBodyPartClick("Right Antecubital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1816.87,1318.66c-4.73,12.18,17.35-.76,25.11,12.2,3.88,6.48,7.17,8.94,9.55,9.07s6.5-3.1,13.2-9.07c13.41-11.94,32.31,9.07,40.65-5.67,5.84-16.31,5.29-28.31,7.15-43.64.24-1.94-1-7-7.15-5.61-4.15.92-7.12,4.92-11.23,7.83-8,5.62-19.54,6.34-30.47-2.22-10.65-8.33-16-12.11-22.81-11-3.06.49-5.49-.23-12.76,5.39-4.26,2.55-3.58,14.19-5.79,24.51A104.56,104.56,0,0,1,1816.87,1318.66Z"
          }),
          createBaseVNode("path", {
            id: "Left_Antecubital",
            "data-label": "Left Antecubital",
            onClick: _cache[15] || (_cache[15] = ($event) => handleBodyPartClick("Left Antecubital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2569.56,1318.66c4.73,12.18-17.34-.76-25.1,12.2-3.88,6.48-7.18,8.94-9.56,9.07s-6.5-3.1-13.2-9.07c-13.41-11.94-32.31,9.07-40.65-5.67-5.84-16.31-5.29-28.31-7.15-43.64-.23-1.94,1-7,7.15-5.61,4.15.92,7.12,4.92,11.23,7.83,8,5.62,19.54,6.34,30.47-2.22,10.65-8.33,15.95-12.11,22.81-11,3.06.49,5.49-.23,12.77,5.39,4.25,2.55,3.58,14.19,5.78,24.51A104.56,104.56,0,0,0,2569.56,1318.66Z"
          }),
          createBaseVNode("path", {
            id: "Right_Antebrachial",
            "data-label": "Right Antebrachial",
            onClick: _cache[16] || (_cache[16] = ($event) => handleBodyPartClick("Right Antebrachial", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1773.21,1423.26c-8.2,33-11,134-21.19,226.46-.73,6.61-5.37,44.7-2.3,48.26,10,11.57,33.81,10.51,48.88,6.15,6.53-14.83,12.7-32.82,14.7-38.58,18.41-53,67.56-185.68,74.81-221.1,7-34.37,9.63-64.53,16.46-105.32,2.55-7.86-10.34-.26-26.68-6.77-11-4.38-17.07,12-27.7,10.85s-7.57-11.26-17-15.19-10.58.27-16.72-2.68S1788.26,1362.67,1773.21,1423.26Z"
          }),
          createBaseVNode("path", {
            id: "Left_Antebrachial",
            "data-label": "Left Antebrachial",
            onClick: _cache[17] || (_cache[17] = ($event) => handleBodyPartClick("Left Antebrachial", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2612.93,1423.26c8.21,33,11,134,21.19,226.46.73,6.61,5.92,45.26,2.3,48.26-12.4,10.26-34.53,12.1-49.59,7.74-6.53-14.83-12-34.41-14-40.17-18.41-53-67.57-185.68-74.81-221.1-7-34.37-9.64-64.53-16.47-105.32-2.54-7.86,10.34-.26,26.68-6.77,11-4.38,17.07,12,27.7,10.85s7.57-11.26,17-15.19,10.58.27,16.72-2.68S2597.89,1362.67,2612.93,1423.26Z"
          }),
          createBaseVNode("path", {
            id: "Right_Carpal",
            "data-label": "Right Carpal",
            onClick: _cache[18] || (_cache[18] = ($event) => handleBodyPartClick("Right Carpal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1748.6,1702.56c-2.48-.8-4,.61-4.11,3.72-.17,3.65-.6,10.34-.57,13.91-1.05,11.49,36.33,14.37,47.58,12a5,5,0,0,0,3.6-3.77c1.37-5,2.44-9.63,3.42-14.16.6-2.82-2.33-5.17-4.91-4.75C1775.46,1712.47,1764,1707.56,1748.6,1702.56Z"
          }),
          createBaseVNode("path", {
            id: "Right_Manus_Palmar",
            "data-label": "Right Manus Palmar",
            onClick: _cache[19] || (_cache[19] = ($event) => handleBodyPartClick("Right Manus Palmar", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1749.22,1730.48c5.3,3.26,16.64,6.91,40.26,4.72a5.71,5.71,0,0,1,6.21,6.11c-.68,9.08-2.11,24.58-1,30.71,3.84,21.41,8.53,56.19,4.15,67.15-6.14,15.35-13.52,28.21-19.4,50.38-5.2,19.58-15.1-3-42.89-3s-51.85,8.49-42.09-21.58-19.91-54.75,4.66-79.76c20.66-21,34.88-40.58,42.28-52.79A5.68,5.68,0,0,1,1749.22,1730.48Z"
          }),
          createBaseVNode("path", {
            id: "Left_Carpal",
            "data-label": "Left Carpal",
            onClick: _cache[20] || (_cache[20] = ($event) => handleBodyPartClick("Left Carpal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2636.82,1702.56c2.48-.8,4,.61,4.12,3.72.17,3.65.59,10.34.57,13.91,1,11.49-36.33,14.37-47.58,12a5,5,0,0,1-3.6-3.77c-1.37-5-2.45-9.63-3.42-14.16-.6-2.82,2.32-5.17,4.91-4.75C2610,1712.47,2621.38,1707.56,2636.82,1702.56Z"
          }),
          createBaseVNode("path", {
            id: "Left_Manus_Palmar",
            "data-label": "Left Manus Palmar",
            onClick: _cache[21] || (_cache[21] = ($event) => handleBodyPartClick("Left Manus Palmar", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2638.33,1730.42c-5.53,3.16-17.31,6.6-41.64,4a5.8,5.8,0,0,0-6.52,6c.55,9.1,1.75,24.62.5,30.72-4.34,21.35-9.79,56-5.45,67.07,6.07,15.47,13.46,28.45,19.15,50.73,5,19.67,15.64-2.73,44.32-2.23s53.38,9.42,43.82-20.82,21.51-54.38-3.41-79.83c-21-21.4-35.3-41.2-42.72-53.54A6,6,0,0,0,2638.33,1730.42Z"
          }),
          createBaseVNode("path", {
            id: "Right_Manus_Pollex",
            "data-label": "Right Manus Pollex",
            onClick: _cache[22] || (_cache[22] = ($event) => handleBodyPartClick("Right Manus Pollex", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1682.26,1808.93c-1,1.16-5.92,10-6.15,11.6-.7,4.83-4.52,12.67-7.67,16.85-4.79,6.38-7.82,21.34-7.6,24.63s-2.06,49.09-1.75,58.86c.26,8.55,20.34-2.38,24.73-25s11.82-34.55,8.53-45.74C1689.32,1839.85,1688.22,1802.35,1682.26,1808.93Z"
          }),
          createBaseVNode("path", {
            id: "Right_Manus_Digital",
            "data-label": "Right Manus Digital",
            onClick: _cache[23] || (_cache[23] = ($event) => handleBodyPartClick("Right Manus Digital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1690.61,1890.17c.52-1.76,2.05-.71,9.82,2.36a11.78,11.78,0,0,0,5.63.75c17.51-2,27.88-4.46,41.41.53,9.42,3.48,18.75,7.57,25.94,8.62a11.69,11.69,0,0,1,10,12.52,101.37,101.37,0,0,1-3.16,17c-4.3,16.17-5.22,40.19-15.49,46.29s-8.25-9.69-8.29-16-4.54,3.83-6.24,13.79-7.72,24-14.24,24.56c-9.53.81-3.47-29.09-4.34-35s-7.13,23.92-10.61,30.71S1710.41,2013,1704.7,2008s-2.76-26.87-1.64-36.48,6.9-45.27,3.83-39.34-11.78,42.59-16.49,47.06-9.7,10.55-13.94,3.63c-5.24-8.55,1.8-41.16,4.92-58.44S1689.54,1893.81,1690.61,1890.17Z"
          }),
          createBaseVNode("path", {
            id: "Left_Manus_Pollex",
            "data-label": "Left Manus Pollex",
            onClick: _cache[24] || (_cache[24] = ($event) => handleBodyPartClick("Left Manus Pollex", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2704.57,1808.93c1.49-.49,5.93,10,6.15,11.6.7,4.83,4.53,12.67,7.67,16.85,4.8,6.38,7.82,21.34,7.6,24.63s5.25,49.73,1.76,58.86c-3.22,8.43-20.35-2.38-24.73-25s-12-41.63-8.72-52.81C2697.33,1832.77,2700.87,1810.12,2704.57,1808.93Z"
          }),
          createBaseVNode("path", {
            id: "Left_Manus_Digital",
            "data-label": "Left Manus Digital",
            onClick: _cache[25] || (_cache[25] = ($event) => handleBodyPartClick("Left Manus Digital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2695.22,1890.17c-.52-1.76-2-.71-9.82,2.36a11.75,11.75,0,0,1-5.63.75c-17.51-2-27.88-4.46-41.4.53-9.43,3.48-18.76,7.57-25.94,8.62a11.69,11.69,0,0,0-10,12.52,100.36,100.36,0,0,0,3.16,17c4.29,16.17,5.22,40.19,15.49,46.29s8.24-9.69,8.28-16,4.54,3.83,6.24,13.79,7.73,24,14.24,24.56c9.54.81,3.48-29.09,4.35-35s7.13,23.92,10.6,30.71,10.67,16.74,16.37,11.77,7.33-25.82,6.21-35.43-11.47-46.32-8.39-40.39,11.78,42.59,16.48,47.06,9.7,10.55,13.94,3.63c5.25-8.55-1.8-41.16-4.92-58.44S2696.3,1893.81,2695.22,1890.17Z"
          }),
          createBaseVNode("path", {
            id: "Abdominal",
            "data-label": "Abdominal",
            onClick: _cache[26] || (_cache[26] = ($event) => handleBodyPartClick("Abdominal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2132.34,1219.24c-.56.33-1.11.7-1.64,1.08-25.56,18.27-47.84,41.38-69.4,59.91-19.4,16.69-27.75,21.49-36.17,17.62-8.69-4,10.17,74.22-42.3,143.58-44.43,58.72-22.44,141.44,63,136.11,15.15-1,30.68-6.74,40-9.25,18.13-4.87,103.61-22.85,203.31.48,1,.22,1.89.54,2.82.84,106.53,34.16,159.12-30.27,129.64-93.5-.54-1.16-10.15-15.5-16.22-27.58-3.47-6.91-11.21-19.27-16.67-27.23-34.83-50.75-22-125.1-22.31-126.13-4.84-5.08-10.06,13.66-52.34-28.47-63.6-54.45-78.84-54.71-91.45-54.69-12,0-12.61,9.93-31.48,10.6C2176,1223.15,2165.73,1199,2132.34,1219.24Z"
          }),
          createBaseVNode("path", {
            id: "Right_Coxal",
            "data-label": "Right Coxal",
            onClick: _cache[27] || (_cache[27] = ($event) => handleBodyPartClick("Right Coxal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M1951.68,1520.6a91.32,91.32,0,0,0,23.75,42c11.6,11.55,31.68,22.05,39.06,25.94,27.7,14.6-37.16,99.15-45.94,200.44-2.39,20.64-90.1,73.83-91.93,47.18-2.13-30.87.47-115.52,18.83-175.4S1942.37,1508.62,1951.68,1520.6Z"
          }),
          createBaseVNode("path", {
            id: "Right_Femoral",
            "data-label": "Right Femoral",
            onClick: _cache[28] || (_cache[28] = ($event) => handleBodyPartClick("Right Femoral", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2051.91,1595.34c19.4,22,42.86,58,65.22,97.79,4.28,7.61,17.76,35.88,20.17,44.27,4.07,14.18,10.28,18.76,8.93,48.15-2.28,49.62,16.34,74.72,21.21,100.8,4.63,24.82,6.9,60.91,3.55,140.22-4.07,96.52-14.77,179.42-13.71,220.94-1,38.64,1.6,176.49-14.37,147.75s-31.12-43.2-85.95-21.2-14.39,20-67.56-118.28c-36.6-90.91-98.62-272.62-111-393.63,0-13.11,22.17-15.21,26.5-17.53,16.34-8.78,58.22-26.83,67.55-52.43,1.65-38.49,16.45-77,55.83-191C2035.23,1581.09,2047.42,1586.28,2051.91,1595.34Z"
          }),
          createBaseVNode("path", {
            id: "Left_Coxal",
            "data-label": "Left Coxal",
            onClick: _cache[29] || (_cache[29] = ($event) => handleBodyPartClick("Left Coxal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2434.68,1520.6a91.35,91.35,0,0,1-23.74,42c-11.6,11.55-31.69,22.05-39.06,25.94-27.7,14.6,37.15,99.15,45.93,200.44,2.4,20.64,90.1,73.83,91.94,47.18,2.13-30.87-.47-115.52-18.84-175.4S2444,1508.62,2434.68,1520.6Z"
          }),
          createBaseVNode("path", {
            id: "Left_Femoral",
            "data-label": "Left Femoral",
            onClick: _cache[30] || (_cache[30] = ($event) => handleBodyPartClick("Left Femoral", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2334.46,1595.34c-19.4,22-42.87,58-65.22,97.79-4.28,7.61-17.77,35.88-20.17,44.27-4.07,14.18-10.29,18.76-8.94,48.15,2.28,49.62-16.33,74.72-21.2,100.8-4.63,24.82-6.9,60.91-3.56,140.22,4.08,96.52,14.78,179.42,13.71,220.94,1,38.64-1.6,176.49,14.37,147.75s31.13-43.2,86-21.2,14.39,20,67.57-118.28c36.59-90.91,98.62-272.62,111-393.63,0-13.11-22.16-15.21-26.49-17.53-16.34-8.78-58.23-26.83-67.55-52.43-1.66-38.49-16.45-77-55.83-191C2351.14,1581.09,2339,1586.28,2334.46,1595.34Z"
          }),
          createBaseVNode("path", {
            id: "Right_Patellar",
            "data-label": "Right Patellar",
            onClick: _cache[31] || (_cache[31] = ($event) => handleBodyPartClick("Right Patellar", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2029.65,2391.44c2.14-6.08,10-7.38,16.11-10.22,13.12-6.11,39.65-15.09,58.64-12.93,26.77,3.05,25.38,22.42,43.65,37.63,13,12.57,10.69,44.74-5.57,53.25-9.83,5.14-40.37,9.6-57.14,9.84s-51.7-8.31-55.28-25.24C2027.2,2430.22,2024.56,2405.92,2029.65,2391.44Z"
          }),
          createBaseVNode("path", {
            id: "Left_Patellar",
            "data-label": "Left Patellar",
            onClick: _cache[32] || (_cache[32] = ($event) => handleBodyPartClick("Left Patellar", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2356.37,2391.44c-2.14-6.08-10-7.38-16.1-10.22-13.13-6.11-39.66-15.09-58.65-12.93-26.76,3.05-25.38,22.42-43.65,37.63-13,12.57-10.69,44.74,5.58,53.25,9.82,5.14,40.37,9.6,57.14,9.84s51.69-8.31,55.27-25.24C2358.82,2430.22,2361.47,2405.92,2356.37,2391.44Z"
          }),
          createBaseVNode("path", {
            id: "Right_Peroneal",
            "data-label": "Right Peroneal",
            onClick: _cache[33] || (_cache[33] = ($event) => handleBodyPartClick("Right Peroneal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2028,2454.29c3.07-3.89,24.77,17.53,48.26,18.84,4.88.27,9.39,2.26,9.44,7.15.65,62,5.07,415.55,13.13,583.7.31,6.62,3.47,27.53-2.4,28.87-10.64,2.42-28.34-2.58-29.88-12.72-.69-4.62-1.48-17-4.08-32.28-11-64.65-36.68-209.15-47.06-285.1-12.61-92.17-9.26-122.45-1.2-206.64C2020.62,2489.47,2024,2459.38,2028,2454.29Z"
          }),
          createBaseVNode("path", {
            id: "Right_Crural",
            "data-label": "Right Crural",
            onClick: _cache[34] || (_cache[34] = ($event) => handleBodyPartClick("Right Crural", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2089.6,2486.4a14.09,14.09,0,0,1,9.41-12.63c14.7-5.15,41.84-6.13,55.14-14.43,8.17-5.1.94,51.32,13.7,112.6,3.3,19.54,10.21,46.46,2.89,146.36-11.74,121.21-31.65,166.66-24.51,357.13-.76,10-42.12,25.53-43.07,10C2102.25,3070.39,2085.88,2561.36,2089.6,2486.4Z"
          }),
          createBaseVNode("path", {
            id: "Right_Tarsal",
            "data-label": "Right Tarsal",
            onClick: _cache[35] || (_cache[35] = ($event) => handleBodyPartClick("Right Tarsal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2065.21,3100.7c2-5.32,5.33-10,10.55-7.71a42.4,42.4,0,0,0,24.22,2.61c3.62-.65,9.19-2,12.81-1.28,8.22,1.58,19.72.65,30.76-10.85,4.28-3.69,5.06,16.5,9.5,29.32,5.26,15.19,2.29,41.41-5.57,44.62-15.37,6.27-26.12-13.9-49.78-7.24-10.07,2.83-32.74,13.38-36.36-.75C2058.35,3137.7,2058.82,3117.54,2065.21,3100.7Z"
          }),
          createBaseVNode("path", {
            id: "Right_Pedal",
            "data-label": "Right Pedal",
            onClick: _cache[36] || (_cache[36] = ($event) => handleBodyPartClick("Right Pedal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2062.91,3164.55c-1.16,4-.42,9.43-7.57,24.75-5,10.72-9.32,20-14,34.59-2.89,8.9-13.28,15.13-13.66,19.79-1.63,19.82,40.68-2,73.75,8.88,29.58,9.69,77.21,10.63,73.27-12.54-.79-4.61-5-16-7.89-25.35-3.19-10.39-7.75-19.06-9.56-23.58-5.91-14.79-.59-39-3.66-35.15-13.1,16.51-38.07-10.34-54.17-3.15C2086.36,3157.64,2064.4,3159.3,2062.91,3164.55Z"
          }),
          createBaseVNode("path", {
            id: "Right_Pedal_Digital",
            "data-label": "Right Pedal Digital",
            onClick: _cache[37] || (_cache[37] = ($event) => handleBodyPartClick("Right Pedal Digital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2014.55,3287.2s-21.18-10.53,0-34.35c6-5.68,11,5.05,31.75,3.68s29.79-4.78,51.75-1.47c16.27,2.45,19.64,6.82,41.35,8.89,6.13.58-8.72,9.17-7.48,26.47.92,12.92-3.32,18.29-8.85,16.32s-28.22,8.64-41.88,2.53c-6.77-2.71-17.5-4.8-24.34-4.47-5.65.26-21.55-1.5-25.94-9.42C2028.43,3290.88,2016.38,3290.13,2014.55,3287.2Z"
          }),
          createBaseVNode("path", {
            id: "Right_Hallux",
            "data-label": "Right Hallux",
            onClick: _cache[38] || (_cache[38] = ($event) => handleBodyPartClick("Right Hallux", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2141.47,3304.67s-7.85-12.82,1.36-30.44c3.91-7.49,10.93-9.76,16.5-8.32s12,2.54,16-5.64c6.9-14.21,12.59,11.32,12.8,20.21s1,26.54-15.93,31.68S2145.53,3313.14,2141.47,3304.67Z"
          }),
          createBaseVNode("path", {
            id: "Left_Peroneal",
            "data-label": "Left Peroneal",
            onClick: _cache[39] || (_cache[39] = ($event) => handleBodyPartClick("Left Peroneal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2358.45,2454.29c-3.07-3.89-24.77,17.53-48.26,18.84-4.88.27-9.4,2.26-9.45,7.15-.65,62-5.06,415.55-13.12,583.7-.32,6.62-3.47,27.53,2.4,28.87,10.64,2.42,28.34-2.58,29.87-12.72.7-4.62,1.48-17,4.09-32.28,11-64.65,36.67-209.15,47.06-285.1,12.61-92.17,9.26-122.45,1.19-206.64C2365.85,2489.47,2362.47,2459.38,2358.45,2454.29Z"
          }),
          createBaseVNode("path", {
            id: "Left_Crural",
            "data-label": "Left Crural",
            onClick: _cache[40] || (_cache[40] = ($event) => handleBodyPartClick("Left Crural", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2296.87,2486.4a14.11,14.11,0,0,0-9.41-12.63c-14.7-5.15-41.84-6.13-55.14-14.43-8.17-5.1-.94,51.32-13.7,112.6-3.3,19.54-10.22,46.46-2.9,146.36,11.75,121.21,31.66,166.66,24.51,357.13.77,10,42.13,25.53,43.07,10C2284.22,3070.39,2300.59,2561.36,2296.87,2486.4Z"
          }),
          createBaseVNode("path", {
            id: "Left_Tarsal",
            "data-label": "Left Tarsal",
            onClick: _cache[41] || (_cache[41] = ($event) => handleBodyPartClick("Left Tarsal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2319.17,3092c-1-2.18-5.53-.91-7.67.15a41.94,41.94,0,0,1-26.4,3.37,78.52,78.52,0,0,0-12.52-1.2c-11.48.13-16.34,0-30.67-10.85-3.87-3.34-.77,2.52-5.77,11.45a26.83,26.83,0,0,0-2.87,8.1c-5.77,30.68-2.73,51.35,4.72,54.39,15.36,6.27,26.12-13.9,49.78-7.24,10.07,2.83,31.36,12.41,35-1.72C2326.14,3135.16,2327.85,3111.34,2319.17,3092Z"
          }),
          createBaseVNode("path", {
            id: "Left_Pedal",
            "data-label": "Left Pedal",
            onClick: _cache[42] || (_cache[42] = ($event) => handleBodyPartClick("Left Pedal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2322.56,3164.55c1.15,4,.42,9.43,7.57,24.75,5,10.72,9.32,20,14,34.59,2.89,8.9,13.28,15.13,13.66,19.79,1.63,19.82-40.68-2-73.75,8.88-29.58,9.69-75.24,12.33-71.29-10.84.78-4.61,5.3-18.42,8.17-27.74,3.19-10.39,6.7-18.29,8.51-22.81,5.91-14.79-.62-39.09,2.44-35.23,13.11,16.51,38.08-10.34,54.17-3.15C2299.11,3157.64,2321.06,3159.3,2322.56,3164.55Z"
          }),
          createBaseVNode("path", {
            id: "Left_Pedal_Digital",
            "data-label": "Left Pedal Digital",
            onClick: _cache[43] || (_cache[43] = ($event) => handleBodyPartClick("Left Pedal Digital", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2371.92,3287.2s21.17-10.53,0-34.35c-6.05-5.68-11.05,5.05-31.75,3.68s-29.79-4.78-51.75-1.47c-16.27,2.45-19.64,6.82-41.35,8.89-6.14.58,8.72,9.17,7.48,26.47-.92,12.92,3.31,18.29,8.85,16.32s28.22,8.64,41.87,2.53c6.78-2.71,17.51-4.8,24.35-4.47,5.65.26,21.55-1.5,25.94-9.42C2358,3290.88,2370.08,3290.13,2371.92,3287.2Z"
          }),
          createBaseVNode("path", {
            id: "Left_Hallux",
            "data-label": "Left Hallux",
            onClick: _cache[44] || (_cache[44] = ($event) => handleBodyPartClick("Left Hallux", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2245,3304.67s7.85-12.82-1.36-30.44c-3.92-7.49-10.93-9.76-16.5-8.32s-12,2.54-16-5.64c-6.89-14.21-12.58,11.32-12.79,20.21s-1,26.54,15.93,31.68S2240.94,3313.14,2245,3304.67Z"
          }),
          createBaseVNode("path", {
            id: "Pelvic",
            "data-label": "Pelvic",
            onClick: _cache[45] || (_cache[45] = ($event) => handleBodyPartClick("Pelvic", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2057.61,1587.33c-.1,8.16,31.1,53.61,53,78.24a10,10,0,0,0,6.9,3.13c55.33,3.08,108.52,2.41,155.44.45,5-.21,14.19-16,29.49-35.94,11.87-15.48,5-9.43,28.38-43.24,1.64-2.38.45-5.3-2.71-6.59-21.85-9-112-21-132.16-21C2177.89,1562.4,2053.4,1571.57,2057.61,1587.33Z"
          }),
          createBaseVNode("path", {
            id: "Inguinal",
            "data-label": "Inguinal",
            onClick: _cache[46] || (_cache[46] = ($event) => handleBodyPartClick("Inguinal", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2118.84,1671.81c-1.1-.06-2.13.67-2.09,1.62a1.38,1.38,0,0,0,.13.55c1.47,3.31,8.23,10.72,13.73,19.06,7.34,10.26,22.86,32.43,27.48,40a3.34,3.34,0,0,0,2.56,1.24c9.65,1.06,56.67,1.56,67-.08a2.82,2.82,0,0,0,1.91-1c6.71-9.66,18.83-23.48,27.14-35.2,5.84-8.24,17-21.26,19.59-25.26a.94.94,0,0,0-1-1.39c-11.28.21-59.86,2.55-83,2.34C2167.4,1673.49,2136.24,1672.74,2118.84,1671.81Z"
          }),
          createBaseVNode("path", {
            id: "Pubic",
            "data-label": "Pubic",
            onClick: _cache[47] || (_cache[47] = ($event) => handleBodyPartClick("Pubic", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2160.76,1736.68c-.46,0,15.17,22.93,17.81,29.21,3.92,9.32,4.44,16.85,4.92,21.83.06.6,16.77.3,22.83.13.33,0-.72-9.57,3.36-22.72,3.62-11.65,17.8-29.23,17.46-29.18-6.49.93-22.39,2.86-33.14,2.88C2183.54,1738.85,2168.08,1737.41,2160.76,1736.68Z"
          }),
          createBaseVNode("path", {
            id: "Left_Thoracic_Mammary",
            "data-label": "Left Thoracic Mammary",
            onClick: _cache[48] || (_cache[48] = ($event) => handleBodyPartClick("Left Thoracic Mammary", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2212.27,898.28c-6.29-56.9,91.45-47,91.75-47,37.42,1.86,56.09-16.2,80.43-30.81,14.93-9,53.73,7.46,90.82,38.94,23.79,20.19-25.48,78.93-52.28,87.55-32.85,12.24-63.09,1.68-69.42,127.29-5.8,81.2-31.51,78.56-29.29,93,1.42,9.28,60.86,4.68,80.11-3.14.57-.24-21,28.93-30.18,63.66-10.17,38.43-8.85,51.4-11.23,61.27-1.87,4.6-6.94,5-11.08,3.45-1.43-.55-10.24-4-23.47-15.87-37.24-33.36-55.73-48.12-82-67.36-5-3.64-11.58-5.72-14.64-11.58-7.07-13.56-6.43-32.73-7.95-50.59-.94-11.07-4.15-21.73-6.18-30-.05-.23-.1-.47-.13-.7-3.4-25.58-7.75-40.94-7.75-121.86C2209.73,973.63,2215.18,924.64,2212.27,898.28Z"
          }),
          createBaseVNode("path", {
            id: "Left_Thoracic_Axillary",
            "data-label": "Left Thoracic Axillary",
            onClick: _cache[49] || (_cache[49] = ($event) => handleBodyPartClick("Left Thoracic Axillary", $event)),
            class: "cls-fullbody-female-front-3",
            d: "M2456.05,941.36a3.2,3.2,0,0,0-4.94-3.24c-11.27,7.87-32.77,14.18-49.56,19.91-36.65,12.9-37.18,49.92-44.4,124.42s-29.14,76.16-26.85,83.3c2.49,7.72,75.75,4.73,91.18-19.06,24.47-37.73,24.36-67.52,9.9-105.21C2409,983.07,2450.7,971.69,2456.05,941.36Z"
          }),
          createBaseVNode("path", {
            id: "Left_Acromial",
            "data-label": "Left Acromial",
            onClick: _cache[50] || (_cache[50] = ($event) => handleBodyPartClick("Left Acromial", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2486.85,881.89c1.94-3,7.21-4.32,9.64-1.64,7.5,8.26,20,23.89,23.68,77.83,2.15,31.47-26.38,9.81-42.17,28.32s-52.06,20.46-30.59-16c9-15.19,10.77-24.71,15.55-36.56C2473.39,908.05,2481.3,890.62,2486.85,881.89Z"
          }),
          createBaseVNode("path", {
            id: "Left_Brachial",
            "data-label": "Left Brachial",
            onClick: _cache[51] || (_cache[51] = ($event) => handleBodyPartClick("Left Brachial", $event)),
            class: "cls-fullbody-female-front-2",
            d: "M2524.15,983.85c.26,1.73,7,42.21,9,76.26,3.07,53,26.66,201,24,209.19-1.57,4.85-6.89-3.49-14.47-3.75-11.74-.39-12.31,9.57-32.34,16.85-17.16,6.25-23.58-11.88-34.66-11a3.92,3.92,0,0,1-4.08-3.15c-4.62-21.37-16.92-91.67-24.12-146.49,4.14-18-1.47-56.22-4.88-74.12-24.77-68.9,2-38,23-47.74,18.64-13.77,15.51-17.41,33.63-19.71C2516.18,978.08,2522.7,974.13,2524.15,983.85Z"
          })
        ]),
        _cache[53] || (_cache[53] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-43db0593><path class="cls-fullbody-female-front-4" d="M2132.09,646.56c-4.4,52.41-24.56,115.44-75.45,139.9-69.8,29.28-171.16,45.73-189.76,132.39-2.27,11.93-3.51,24.22-5.13,36.32-11.63,95-22.19,200.16-34.17,294.8-2.19,16.52-4.23,32.78-7.37,49.24-.8,3.43-1.2,6.64-2.79,10.11-6.3,12-14.22,23-20.44,34.86-24.88,44.55-29.92,91.28-34.42,141.08-7,73.71-11.26,148-18.86,221.83-.45,4.11-1,8.24-1.44,12.36a21.6,21.6,0,0,1-1.79,7.41c-4.86,9.72-11.66,17.93-18.28,26.35-9.15,11.27-18.73,22.24-28.5,33l-.52.58-.27.28-.13.18a16.7,16.7,0,0,0-1.85,3c-5.07,10.79-8.1,22.9-12,34.29-2.11,5.86-4,12.54-7.92,17.77-.82,1-1.23,3-1.66,4.48-3.35,15.36-3.6,32.58-5.12,48.39-.68,6.59-.89,13.18-3,19.69l-.11.27a3.15,3.15,0,0,0-.2,1c0,2.32,2.13,4.58,4.49,4.16a6.43,6.43,0,0,0,3.09-1.6c3.87-3.37,5.94-9,7.62-13.79,7.75-22.88,5.76-40.65,27.92-56.53,9.2-6.66,19.2-12.76,27-21.09.13-.15.21-.26.28-.35l0-.07c0,.08.06-.2-.24.55l8.19,4.85c-4,4.4-7.94,8.61-12.14,12.76-4.68,4.51-8.81,8.82-14.82,11.91-1.8.75-2.83,2.55-4.07,4.18-4.47,6.79-7.62,14.53-10.35,22.29-3.89,10.7-5.82,21.9-8.36,33-3.8,16.72-8.16,33.26-9.68,50.18-.42,4.53-.53,10.75,1.1,14.62.44.88.72,1.18,1.09,1.33.62,0,1.15-.41,2.07-1.09,4.48-4.08,7.1-10.28,8.57-16.16,5-19.87,12.32-47,17.53-67l9.39,2.24c-5.73,28.31-12.18,56.69-16.59,85.22-.57,7.19-.56,17.21,5.09,21.49a3.51,3.51,0,0,0-1.17-.39,2.57,2.57,0,0,0-1,0l-.09,0c2.66-1.74,4.41-4.85,6.14-7.66a65.31,65.31,0,0,0,6.79-19.14c3.26-15.47,13.83-62.26,17.24-78.23l9.47,2c-3.27,16.38-6.23,32.94-8.59,49.46-1.62,12.13-3.44,24.61-2.94,36.69a17.38,17.38,0,0,0,.82,4.65s0-.07,0-.05a4.75,4.75,0,0,0,.63.68c.28.23.28.16.15.15s0,0,.32-.16c1.88-1,3.14-3.12,4.47-5.12a39.26,39.26,0,0,0,4.86-12.2c2.59-16,8.75-56,11.21-72.4l9.54,1.7a402.36,402.36,0,0,0-6.35,43.56,116.06,116.06,0,0,0-.37,14.25c.26,3.13.29,5.89,1.7,8.39.36.62.75.79.43.62a1.27,1.27,0,0,0-.6-.08c-.14,0-.1,0,0,0a6.47,6.47,0,0,0,1.54-1.34c4.13-4.88,6.53-11.74,8.21-18,1.19-4.68,1.42-9.53,2.19-14.24,2.27-14.93,5.12-29.62,8.75-44.26,1.94-7.44,3.85-15,7.1-22.11,10.59-21.07,20.44-44.4,16.21-68.31-.2-1.14-.43-2.27-.67-3.4l-.84-3.44c-8.1-29.49-7.44-61.23-.25-90.69,4.54-19.6,11.64-38.34,18.31-57.2,22.79-63.76,49-131.71,67.5-196.65a168.57,168.57,0,0,0,4.55-21.12c13.49-105.31,31.69-210.29,47.9-315.17l6.9,11.61a182.18,182.18,0,0,0,29.75,37.5c1.87,1.81,4.18,4,6,5.82,18.14,18.92,21.19,46.71,25.39,71.28,9.37,59.32,17.06,126-18.34,178.75-9.37,13.29-16.81,27.71-24.33,42.21-19.45,38.8-39.08,78.08-53.27,119.1-17.61,51.23-33.89,104.08-40,157.94a439.59,439.59,0,0,0-2.36,81.09c.41,7.68,1.1,16.8,1.7,24.45,5.15,67.76,22.67,134.57,39.37,200.28,20,68.09,45.64,134.49,69.56,201.34,15.3,41.3,29.36,83.23,36.9,126.8,3.75,21.89,5.94,44.23,4.61,66.49-.62,11.1-1.74,22-2.91,33-8.25,75.79-21.56,151.77-16.46,228,1.67,21.64,4.44,43.32,7.39,64.95,13.47,94.73,30.93,189,49.42,282.9a172.62,172.62,0,0,1,1.25,42.31,53.26,53.26,0,0,1-1.13,6.74l-.55,2a102.76,102.76,0,0,0-2.57,23.21,138.34,138.34,0,0,0,3.28,31.45l-.13-.47a17,17,0,0,1,.76,5.45c-.1,4.56-1.49,8.79-2.89,12.82-3.67,10-8.23,19-12.28,28.62-2,4.67-3.86,9.31-5.62,14.1-.9,2.4-1.78,4.91-3.06,7.59a42.09,42.09,0,0,1-4.67,7.35c-9.05,11.72-20.77,21.36-22.31,36.46-.23,4,.06,8.38,1.93,12,2.24,3.43,6.26,5.2,9.91,6.84,5,2.32,10.82,1.77,15.47,4.89,2,1.31,3.89,3,6.08,4.1a23.77,23.77,0,0,0,18.1,1.81,18.63,18.63,0,0,1,11.58,1.09c2.42,1.09,4.6,2.91,6.93,4.1a16.62,16.62,0,0,0,14.54,1.19l.51-.18a17.34,17.34,0,0,1,1.86-.57,18.23,18.23,0,0,1,9.19.06c5,1.37,10.89,2.24,15.47.89q.72-.19,1.41-.45l1.76-.71a18.77,18.77,0,0,1,15.24,1c2,1.07,3.94,2.44,6.19,3.07,10.67,3.41,22.75-.22,31-7.7,11.76-10.39,9-28,3.88-41.26a10.23,10.23,0,0,1-.43-1.32l-.27-1-.5-1.88c-5.31-19.65-10.28-39.57-17.43-58.54a46.06,46.06,0,0,0-2.62-5.64,19.84,19.84,0,0,1-2.06-10.85c.34-22.77.87-46.06-1.82-68.58-.72-5-1.52-10.63-3.69-15.07a21.68,21.68,0,0,1-2.85-6.38,41.27,41.27,0,0,1-.7-4.41c-2.16-22.08-2-44-2.23-66.08,0-23.21.09-46.43,1.09-69.67,5.86-69.05,14.62-138.49,22.41-207.39,1.22-10.23,2.41-20.4,3.76-30.71,2.3-20,2.43-40.66,2.15-60.86a813.45,813.45,0,0,0-11.51-122.25c-3.89-41.17-3.95-82.52-4.87-123.81-.44-61.78-2.3-123.77,2.3-185.48,7.81-122.36,25.12-246.08,5.18-368-7.53-43.86-19-88.38-44.3-125.41a280.75,280.75,0,0,0-19.4-25.23c-3.4-3.89-6.92-7.68-10.41-11.5a70.32,70.32,0,0,1,14.23,7c13.46,8.64,24.27,21.06,32.58,34.58,51.28,83.41,48.49,209,45.11,304.51-3.74,72-10.72,143.58-15,215.44-1.67,51.23-.94,102.66-.36,153.95.92,40.92,1,82,4.79,122.77,8.55,51,12.81,102.66,11.43,154.34-.31,10.45-.79,20.9-2.1,31.31-9.26,76.26-18.21,153.26-25.57,229.71-1.75,25.49-1.5,51.1-1.62,76.68.31,22.5-.1,45.31,2.52,67.59.37,2.41,2.31,4.54,3.11,6.83,2.17,5.55,2.94,10.6,3.75,16.24,2.81,23.46,2.24,46.65,1.9,70.1l0,1.92a8.43,8.43,0,0,0,1,4.09l.43.8.53,1a113.68,113.68,0,0,1,4.84,12.25c5.83,17.32,10.4,34.65,15.07,52.21l.49,1.85.24.88a75.87,75.87,0,0,1,5,20.52c.78,8.44-.59,18-5.48,25.34-8.27,12.07-23.22,19.14-37.83,18.2a34.4,34.4,0,0,1-13-3.45c-.69-.35-1.37-.71-2-1.13l-.83-.5a9,9,0,0,0-5.35-1.31,8.23,8.23,0,0,0-2.37.52l-1.81.73a37.06,37.06,0,0,1-22,.09,8.86,8.86,0,0,0-6,0c-9.26,3.64-18.71,1.81-26.76-3.78l-.87-.58-.42-.29a8.78,8.78,0,0,0-7.46-1c-10.91,2.92-22.28-.26-30.87-7.39-1.65-1.15-3.7-1.23-5.61-1.61a45,45,0,0,1-16-6.49,19.74,19.74,0,0,1-9-11.67c-2.94-9.84-1-21,3.88-29.73,5-9.32,12.83-17.24,19.16-25.13,3.18-3.94,4.57-7.54,6.31-12.34,3.52-9.72,7.84-19.33,12.06-28.73,2.07-4.68,4.14-9.33,5.8-13.9,1.24-3.37,3-8.91,2-12-4.3-20.16-5.35-41.46-.16-61.57,1.5-6.91,1.52-14,1.55-21.21a144,144,0,0,0-3.38-31.66c-21.47-113.08-44.2-226.15-55.34-340.86-4.54-66,4.92-132.08,12.66-197.3,2.6-21.61,5.41-43.35,6.71-65,1.27-21.39-.82-42.95-4.48-64.27-7.41-42.85-21.34-84.35-36.44-125.11-24-67.09-49.71-133.69-69.8-202.15-16.86-66.29-34.46-133.59-39.66-202-1-13.49-2.06-27.7-2.5-41.25-2.42-77.46,18.27-153.67,43.65-226.06,3.39-10.56,7.53-20.88,11.8-31.08,17.43-40.5,36.17-80.2,57.87-118.6,2.07-3.62,4.41-7.14,6.82-10.63l2.23-3.34a144.09,144.09,0,0,0,8-13.73c24.78-48.85,16.82-106,8.9-158.21-4-22.9-6.44-48.65-22.75-66l-1.34-1.33L1974,1177a195.83,195.83,0,0,1-34.28-42.38l9-1.72c-15.52,100.33-32.89,200.74-45.75,301.44-2.56,17.55-8.2,34.41-13.32,51.25-20.56,64.49-46.8,132.59-69.09,196.67-12.85,36.55-18.57,76.42-8,114.13a80.43,80.43,0,0,1,2.62,15.57c1.11,15.62-2.7,31.42-8.49,45.65-2.66,6.78-6.3,14-9.42,20.52-4.71,10.94-7.11,22.86-9.78,34.69-2,9.61-3.81,19.31-5.26,29-.82,5.07-1.08,10.2-2.38,15.16-2.12,8-4.91,15.63-10.41,22.17-4.78,5.77-12.54,6.48-16.78-.39-2.5-3.82-3-9-3.23-13.15-.48-20.44,3.24-40.26,6.91-60.24l9.54,1.69-7.64,49.94c-.91,6.16-2.52,16-3.49,21.92-1.51,8.89-9,27-20.23,26.21a11.14,11.14,0,0,1-8-5.3c-1.72-3-2-6-2.26-9.11-.59-13.17,1.34-25.87,3-38.71,2.41-16.81,5.38-33.41,8.7-50l9.46,2c-2.74,11.18-13.3,61.25-15.67,71.09-.53,2.65-1.86,8.26-2.39,10.76a71.17,71.17,0,0,1-7,18.19c-3.11,5.19-9.15,14.83-16.58,11.89-10.55-6-11.38-20.5-10.44-31.08,4.41-29,11-57.57,16.76-86.3l9.4,2.24c-5.31,20-12.5,47.22-17.49,66.82a45.91,45.91,0,0,1-8.08,17.41c-5.93,8.22-16.58,10.76-21.76.35a27.4,27.4,0,0,1-2.2-10.23c-.33-20.72,5.77-41,10.08-60.88,1.38-5.7,2.36-11.11,3.69-16.91a159,159,0,0,1,11.81-33.63c2.9-5.43,5.92-11.55,11.47-15a17,17,0,0,0,4.08-2.36,101.11,101.11,0,0,0,9.18-8.21c8.13-8.17,22.64-24.41,30.41-33.12l-10.53,25.67a13.56,13.56,0,0,1-2.9,4.12c-6.79,6.92-14.72,12.4-22.57,17.93-7.87,5.2-15.45,11.37-19.25,20.17-2.75,5.6-4.93,16.61-6.58,22.92a135.16,135.16,0,0,1-5.92,18.38c-3.1,6.9-7.75,14.19-16,15.7-6.41,1.19-13-3.18-15-9.26a13.3,13.3,0,0,1,.25-9.42,14.67,14.67,0,0,0,.59-2.18,143.35,143.35,0,0,0,1.8-14.74c1-11.8,1.74-25.26,3.2-37.13a109.57,109.57,0,0,1,2.16-12.77,21,21,0,0,1,3.83-8.65c4.56-7.88,6.75-17.32,9.72-26,3.11-9.2,5.43-18.6,10.65-27.13l.56-.82c.22-.28.46-.58.7-.86l.36-.42.25-.29.52-.56,4.13-4.56c10.88-12.17,21.65-24.53,31.46-37.56,2.41-3.23,4.76-6.51,6.81-9.81,1.36-2.27,2.73-4.3,3.33-6.73,1.58-12.53,3.06-26.85,4.21-39.43,7.64-82,11.75-164.58,21.79-246.51,4.23-33.21,14-66,30.11-95.49,4-7.38,8.33-14.56,12.69-21.56,2.69-4.33,5.34-8.5,7.53-12.89a13.61,13.61,0,0,0,.71-2.09c.48-1.77.9-3.73,1.29-5.68,3-15.93,5.11-32.42,7.25-48.58,9.6-77.32,19.44-167.76,28.25-245.61,2.86-24.59,5.73-49.19,9.07-73.74,2-16.85,7.06-33.83,15.79-48.53,36.71-60.9,114.46-76.73,176.09-101,36-13.88,56.4-50.67,66.53-86.25a242.84,242.84,0,0,0,8.08-41.56c.2-2,.38-4,.49-5.89l10,.48Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2264.75,643c3.24,48.43,20.38,110.28,67,133.86,10.9,5.22,22.77,8.82,34.18,13,46.55,16.67,97,32.27,132.15,69.09,17.72,18.56,28.74,43.18,31.73,68.63,3.37,24.56,6.24,49.19,9.11,73.8,9.53,82,17.94,164.05,28.29,245.9,2.14,16.21,4.21,32.68,7.21,48.7a56.52,56.52,0,0,0,2.18,8.68c2.09,4.15,4.58,8.17,7.15,12.3a274.48,274.48,0,0,1,43.1,116.81c10.09,82,14.2,164.68,21.85,246.77.52,6.3,1.81,18.32,2.44,24.56.5,4.59,1.07,9.18,1.61,13.76.18,3.13,1.83,5.46,3.43,8.21,12.22,18.7,27.59,35.43,42.45,52.1a23.93,23.93,0,0,1,2.88,3.6,76.76,76.76,0,0,1,6.26,14.35c4.11,11.46,7.07,23.67,11.86,34.76a19.74,19.74,0,0,0,2.71,4.62,16.28,16.28,0,0,1,1.89,3.8c1.81,5.27,2.5,10.83,3.2,16.1,1,8.35,1.61,16.62,2.24,24.85.52,7.5,1.28,17.18,2.27,24.33a33.21,33.21,0,0,0,1.11,5.15,13,13,0,0,1,1,4.33c.06,12.43-13.56,18.08-22.55,10.12-4.64-4-7.28-9.27-9.37-14.8a156.86,156.86,0,0,1-4.67-15.22c-2.78-10.6-4.78-24.1-12.61-32.35-3.68-4.34-8.69-7.88-13.44-11.13-5.2-3.58-10.25-7.24-15.2-11.24-3.24-2.69-6.59-5.43-9.17-8.88a6.29,6.29,0,0,1-.36-.54,5.85,5.85,0,0,1-.57-1.13l-9.38-22.83c7.87,8.37,20.31,23.17,28.4,30.86,3.75,3.37,7.61,7.74,12,10,3.52,1.38,6,4.58,8,7.48a70.78,70.78,0,0,1,4.61,8c6.58,13.35,10.77,27.59,13.58,42.14,4.25,19.88,10,39.56,11.73,60,.35,6.46.74,13.19-2.18,19.34-2.09,4.52-7.38,7.24-12,5.75-8.2-2.63-13.39-11.28-16.44-18.73a40,40,0,0,1-1.44-4.67l-16.25-67.37,8.38-2c4.48,19.19,8.88,38.37,13,57.65,2,9.81,4.46,19.62,5.52,29.61,1,11.68-2.43,34.7-19.37,28.78-13.81-6-17.39-25.19-20-38.27-4.75-24-9.15-48.6-13.52-72.62l8.46-1.62c3.32,16.61,6.28,33.21,8.69,50,1.7,13.85,4.21,28,2.61,42.15-.78,7.24-7.83,13-14.87,9.21-7.64-4.35-12.72-16.29-14.21-24.6-2.51-15.72-8.72-55.76-11.12-71.84,0,0,8.48-1.5,8.48-1.52,3.67,19.84,7.38,39.57,7,59.87-.21,4.06-.66,9.09-3,12.85-4,6.86-11.32,6.36-16,1-5.55-6.39-8.35-14-10.51-21.85-1.34-4.87-1.64-10-2.43-15.08-1.45-9.64-3.25-19.31-5.27-28.89-2.64-11.81-5.1-23.69-9.69-34.68-3.15-6.66-6.58-13.4-9.41-20.33-5.84-14.11-9.77-29.75-8.93-45.28a79.16,79.16,0,0,1,2.41-15.58,173.58,173.58,0,0,0,5.11-28.37c1.83-19.2-.14-38.56-4.47-57.35-2.18-9.29-5-19-8-28-25.42-73.66-56-149.56-77.67-224.38-2.29-8.57-4.66-17.29-5.65-26.2-13.06-98.88-30.11-197.71-47.15-296l9.92,1.88c-2.93,4.72-6,9.39-9.4,14a71.19,71.19,0,0,1-10.27,11.29c-.23.21-.39.38-.57.54l-.62.67c-7,7.54-12.52,16.59-17.18,25.86-14.2,28.8-21.41,60.72-25.43,92.48-5.05,41.79-4.36,86.78,16.55,124.24,3.17,5.75,7,11.41,10.79,16.91,13.79,22.32,25.07,45.93,36.6,69.41,11.8,24.74,23.43,49.68,33.16,75.41,5.46,15.5,10.54,31.14,15.74,46.79,20.48,62.7,34.27,128.61,31.77,194.91q-1.38,33-5.22,65.75c-7.15,59.63-22.84,118.83-37.61,176.92-23.56,78.58-53.64,155-80.82,232.25-10.49,30.64-19.48,62-24.85,93.91-8.44,43-2.56,85.63,2.88,128.62,5.33,43.32,10.78,86.82,12.91,130.77,2.76,43.85-1.87,88.25-8.1,131.62-13.13,92-29.91,183.37-47.83,274.55a142.74,142.74,0,0,0-3.3,31.35,112.15,112.15,0,0,0,1.2,19.23,123.16,123.16,0,0,1,2.63,12.21c2.53,17,1.29,34.32-2.43,51l-.07.34-.09.23a10.31,10.31,0,0,0,.13,4.57,46,46,0,0,0,1.91,6.52c3.46,9.24,8.09,18.76,12,28,2,4.8,4,9.74,5.82,14.61.9,2.42,1.74,4.75,2.64,6.63,3.3,6.27,8.54,11.2,13.3,17.1,7.14,8.53,13.78,18.8,14.73,30.56.57,8.77-1,18.58-8.45,24.15a45.67,45.67,0,0,1-18.65,8.27c-1.08.24-2.24.31-3.31.6a7.47,7.47,0,0,0-2.4,1.18l-.62.47a35,35,0,0,1-28.31,7.24c-.78-.13-1.53-.34-2.29-.52l-.71-.17a7.57,7.57,0,0,0-5.72.9c-6.93,5-15.5,8.26-24.16,6.37-3.2-.31-6.2-2.77-9.48-1.72-6.81,2-13.63,2.76-21.19.89-2.14-.48-4.06-1.74-6.27-1.94a8.13,8.13,0,0,0-4.3.89c-.16.09-.33.18-.48.28l-.82.5c-.69.43-1.4.8-2.11,1.17a35.17,35.17,0,0,1-13.35,3.54c-12,.9-23.84-3.79-32.61-11.65-15.48-13.3-13.63-36-6.83-53.18,5.06-18.66,9.75-37,16-55.42a115.78,115.78,0,0,1,4.89-12.36l.55-1,.42-.8c1-1.66.89-3.71.82-5.57-.33-23.53-.9-46.69,1.93-70.23.83-5.78,1.6-10.81,3.81-16.46.89-2.52,3-4.77,3.18-7.5,1.48-11.78,1.66-23.79,2-35.85.62-33.24.61-66.65-.69-99.83-1.18-17.84-3.26-35.63-5.07-53.43-6.6-60.92-13.37-122.92-20.9-183.77-1.3-10.43-1.77-20.91-2.08-31.38-1.34-51.73,2.95-103.44,11.55-154.44,3.84-40.72,3.93-81.81,4.87-122.7.62-51.29,1.38-102.71-.25-153.92-1.64-30.72-4.2-61.47-6.45-92.19-7.55-102.63-17.18-206.61-1.38-309,8.2-49.07,22.85-106.8,58.57-143.34,7.67-7.3,16.6-13.47,26.59-17.06-3.55,4-7.12,7.61-10.47,11.42a306.19,306.19,0,0,0-19.85,24.95c-26,36.73-37.64,81.59-44.78,125.62-18.32,122.17-1.46,245.77,6.52,368.19,1.58,20.51,2.62,41.38,2.74,61.94.61,72.14.19,144.2-2.84,216.27-.53,10.43-1.06,20.71-2.25,31.17-2.3,15.13-4.89,30.52-6.48,45.78a774.24,774.24,0,0,0-4.79,107c.3,10.09.79,20.19,2,30.17,9.35,76.53,18.35,153.54,25.75,230.28,1.79,25.83,1.55,51.76,1.67,77.59-.22,22.11-.05,44-2.21,66.18a43.36,43.36,0,0,1-.72,4.52c-.64,3-2.26,5.16-3.49,7.8-1.56,3.91-2.43,9.13-3,13.55a292.26,292.26,0,0,0-1.93,30.13c-.31,12.75-.1,25.54.14,38.32l0,1.94a19.56,19.56,0,0,1-2.69,10.25c-6,13-9.4,27-13.47,40.82-1.38,4.93-2.71,9.87-4,14.83l-2,7.44-.5,1.89-.27,1c-2.19,6.05-4.15,12.2-4.62,18.5-.78,8.77,1.1,17.33,7.8,23.11,8,7.28,19.69,10.83,30,7.5a20,20,0,0,0,4.86-2.34,20,20,0,0,1,19-1c4.56,1.85,10.19,1.05,15.39-.23,13.11-4,15.55,7,29.63-2.37a23.69,23.69,0,0,1,4.16-2.44,19.45,19.45,0,0,1,10.85-1.4c2.33.35,4.6,1.22,7,1.22a22.67,22.67,0,0,0,11.78-2.69c2.16-1.07,4-2.75,6-4.07,4.69-3.22,10.57-2.65,15.62-5a29.56,29.56,0,0,0,8-4.7c2-1.77,2.51-4.4,2.93-6.91,1.94-11.51-4.63-21.48-11.81-30.2-4.84-6.07-11.18-12-14.85-19.48-3.26-7.46-5.45-14.45-8.71-21.74-4-9.69-8.61-18.64-12.31-28.67-1.42-4.17-2.86-8.45-2.95-13.16a17.69,17.69,0,0,1,.81-5.8l-.16.57a153.42,153.42,0,0,0,2.62-15.48,121,121,0,0,0-.37-31.07c-.52-4-1.72-7.89-2.57-11.77-2.07-12.88-1.64-25.58-.6-38.45a138.4,138.4,0,0,1,2.7-16.77l3.16-16c20-106.93,41.37-214.19,52-322.5,6.26-87.11-12.33-173.26-19.14-260.05-1.5-22.2.44-44.69,4.12-66.58,7.36-43.7,21.19-85.82,36.41-126.77,23.94-66.63,49.24-132.87,69.64-200.63,14.67-57.51,30.29-116.17,37.41-175.11q2.86-24.22,4.35-48.58c6.47-81.43-13.67-161.82-40.52-238.15-3.09-9.75-7.1-20.82-11.13-30.36a1255.67,1255.67,0,0,0-56.44-117.35c-2.62-4.67-5.29-9.15-8.34-13.51a152.55,152.55,0,0,1-21.91-45.71c-14.41-50.41-6.17-115.38,9.32-164.66,7.16-21.28,16.27-42.67,31.67-59.51l.78-.82c.31-.31.64-.63.91-.87l1.54-1.4c10.13-9.88,16.2-21.85,23.75-33.55,14.89,82.49,28,165.21,40.72,248.06,3,20.6,6.7,44.09,8.79,64.36,2.75,17.37,8.35,34.17,13.5,51,17.38,54,39.43,114,58.78,167.7,5,14,10.1,28.09,14.28,42.44,10.08,34.34,12.55,70.19,2.79,104.9-7.11,26.28,3.54,51.66,15.17,75,5,11.82,7.49,24.36,10.2,36.61,2,9.77,3.82,19.55,5.27,29.46.75,4.72,1,9.47,2.21,14.18,1.72,6.27,4.13,13.15,8.33,18a6,6,0,0,0,1.57,1.3c.16.08.18.06.07,0a.73.73,0,0,0-.37.08,3.48,3.48,0,0,0,.76-1c1.42-2.66,1.44-5.47,1.7-8.67a120.17,120.17,0,0,0-.37-14.26,403.39,403.39,0,0,0-6.28-43.47s8.5-1.53,8.48-1.49c2.69,16.67,8.46,56.55,11.21,72.4,1.3,5.82,4,12.22,8.09,16.54.78.64,1.41,1.31,2.14,1.38,0,0,.11,0,.45-.28a3.92,3.92,0,0,0,.55-.58l.16-.19s0,0,0,0a7.69,7.69,0,0,0,.59-2.18,27.25,27.25,0,0,0,.3-2.72,95.57,95.57,0,0,0-.18-12c-1.95-24.88-6.59-49.73-11.36-74.26l8.46-1.62c4.35,24,8.77,48.52,13.48,72.46,1.7,8.85,3.62,18.83,8.54,26.28,2.15,3,4.93,6.43,8.75,5.91,2.39-1.13,3.24-4.34,4-7.11a45.42,45.42,0,0,0,1-13.34c-.42-4.72-1.46-9.31-2.35-14-4.9-24-10.47-48-16-71.87l8.38-2,16.25,67.37c1.43,5.82,6,14.76,11.75,17.1a1.19,1.19,0,0,0,1,0,3.15,3.15,0,0,0,1.12-1.34c1.73-3.89,1.65-10.14,1.26-14.77a162.59,162.59,0,0,0-2.29-16.71c-2.54-14-6.22-28.09-9.27-42.18-3.26-16.29-8-33-16.88-47.08-1.44-2.12-3.17-4.13-4.25-4.4a22.65,22.65,0,0,1-4.59-2.79c-8.25-6.46-15.23-14.1-22.27-21.78l7.27-4.31c-.26-.66-.18-.39-.19-.46a.33.33,0,0,0,.07.1,4.24,4.24,0,0,0,.29.39c7,7.58,16,13.34,24.44,19.32,19.31,13.1,22,25.31,27,46.68,2,7.38,4,15.31,8,21.82,1.7,2.3,3.81,5.08,6.55,5.41s5.2-2.2,5.07-4.81a4.23,4.23,0,0,0-.2-1.06l-.23-.6c-2-6.45-2.28-13-2.94-19.5-1.5-15.78-1.81-33.11-5.16-48.49-.24-.91-.49-1.78-.77-2.56a8.72,8.72,0,0,0-.81-1.75,28,28,0,0,1-3.53-6c-6.59-15.13-9.57-31.59-16.58-46.36-.21-.39-.42-.81-.65-1.16l-.32-.54-.33-.48c-.22-.35-.42-.55-.61-.81l-1-1.13c-9.78-10.7-19.35-21.7-28.49-33a212.79,212.79,0,0,1-14.94-20.41c-1.73-2.95-3.87-6.33-4.41-9.91-11.12-95.4-14.24-191.58-26.12-286.76-4.2-32.26-13.7-63.78-29.4-92.32-5.81-10.9-12.82-21.06-18.94-32a25.54,25.54,0,0,1-2.62-6.69c-2.45-10.27-3.82-20.64-5.36-31-15.58-114.5-25.57-229.67-40.71-344.21C2511.13,839,2411,816.28,2339.73,789.54a99,99,0,0,1-42.17-28.74c-25-29.11-35.84-67.52-40.39-104.87-.46-4.2-.84-8.3-1-12.68l8.61-.27Z" data-v-43db0593></path><path class="cls-fullbody-female-front-5" d="M2028.56,1101.48a11.7,11.7,0,0,1,8.06,4.17,10.78,10.78,0,0,1,1.51,12.57c-4.74,9.29-14.42,5.43-17.93,2-3.33-3.22-5.48-9.39-.09-15.44A9.89,9.89,0,0,1,2028.56,1101.48Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2170.33,1193c2.41,23.59-1.71,49.26-10.84,71.14a123,123,0,0,1-37.49,49.06,115.3,115.3,0,0,1-29.09,16.77c-3.51,1.21-7,2.63-10.75,3a33.33,33.33,0,0,0,4.8-2.63c22.54-14.32,42.26-33.39,56.36-56.07,14.9-24.77,22.25-52.72,27-81.22Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2211.18,1193c4.75,28.49,12.11,56.46,27,81.22,14.11,22.68,33.83,41.75,56.36,56.07a33.44,33.44,0,0,0,4.81,2.63c-3.72-.32-7.25-1.74-10.76-3a115.48,115.48,0,0,1-29.09-16.77,122.86,122.86,0,0,1-37.48-49.06c-9.14-21.89-13.25-47.53-10.84-71.14Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2117.9,1389.47c-7.12,41.62-15,83.29-18.89,125.22a264.87,264.87,0,0,0-1.24,31.08,102.49,102.49,0,0,0,1.18,13.13,169.85,169.85,0,0,0,14.54,45.77,152.66,152.66,0,0,0,16.33,26.84,56.32,56.32,0,0,1-6.23-5.1,100.46,100.46,0,0,1-10.88-12,125,125,0,0,1-23.54-53.82c-2.56-15.5-1.27-31.51.29-46.87,5.1-42.38,15.15-83.83,28.44-124.27Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2270.42,1389.47c13.28,40.44,23.34,81.89,28.43,124.27,1.57,15.36,2.86,31.38.29,46.87a125.15,125.15,0,0,1-23.53,53.82,101.31,101.31,0,0,1-10.88,12,57.26,57.26,0,0,1-6.23,5.1,153.27,153.27,0,0,0,16.33-26.84,170.2,170.2,0,0,0,14.54-45.77,102.48,102.48,0,0,0,1.17-13.13,264.86,264.86,0,0,0-1.23-31.08c-3.94-41.94-11.78-83.6-18.89-125.22Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2034.5,832.19a198.69,198.69,0,0,0,56.36,6.89c35.15-1.57,69.71-.2,84.83,37.28-2-2.57-4.07-5.06-6.22-7.43-21.1-23.89-49.5-20.55-78.53-19.92-19.74-.19-40.51-4.68-56.44-16.82Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2350.92,832.19c-15.93,12.14-36.7,16.63-56.44,16.82-29-.63-57.45-4-78.53,19.92-2.15,2.37-4.2,4.86-6.22,7.43,15.1-37.47,49.71-38.85,84.83-37.28a198.73,198.73,0,0,0,56.36-6.89Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2193.3,1459.43c-8.48-6.62-11.71-18.72-8.51-28.91a51.59,51.59,0,0,1,2-4.87c3.08-7.25,4.91-14.61,8.36-22.05,8.18,7.83,10.16,20.86,5.71,31.16-2.71,7-4.38,17.11-7.59,24.67Z" data-v-43db0593></path><path class="cls-fullbody-female-front-6" d="M2160.81,1795.54s24.15,2.24,33.69-13.9c7,11.57,12.76,17,32,14.12" data-v-43db0593></path><path class="cls-fullbody-female-front-7" d="M2160.81,1795.54s24.15,2.24,33.69-13.9c7,11.57,16.94,14.35,32,14.12" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2057,2446.32c8.51,4.71,25.26,15.63,34.52,10.93a12.36,12.36,0,0,0,4.45-4.59c.62-1.16,1.35-2.73,1.87-4,4.87-13.12,5.72-27.06,6.57-41.3.54-11,.65-22.06.85-33.31,6.68,22.58,10,53.46,2.63,76.11-9.95,30-38.26,15.7-50.89-3.85Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2327,2444.1c-12.64,19.56-40.94,33.85-50.89,3.85-7.37-22.64-4-53.52,2.63-76.11.2,11.25.31,22.33.85,33.31.85,14.24,1.7,28.18,6.57,41.3.52,1.26,1.25,2.82,1.87,4a12.36,12.36,0,0,0,4.45,4.59c9.24,4.7,26-6.21,34.52-10.93Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2083.65,766.19c2.95-13.23,10.2-26.9,20.78-35.69,7.37-6,17.46-8,24.42.15,3.29,3.54,4.46,8.47,5.34,13.06.57,2.63,1.07,5.27,1.58,7.91,2.82,15.87,4.81,31.91,4.56,48.07-5-17.59-9.84-36.27-14.87-53.82-.57-1.8-1.23-5-2.19-6.58-1.15-2-2.95-4-5.28-4.17-4.86.09-9.23,4.7-12.87,8-7.41,7.27-14,15.51-21.47,23.08Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2302.92,766.19c-7.49-7.56-14.07-15.81-21.48-23.08-3.63-3.29-8-7.9-12.87-8-2.33.13-4.13,2.17-5.28,4.17-1,1.59-1.63,4.79-2.19,6.58-5,17.56-9.88,36.21-14.87,53.82-.25-16.16,1.74-32.2,4.56-48.07.52-2.64,1-5.28,1.58-7.91.89-4.59,2.05-9.52,5.35-13.06,6.94-8.11,17.05-6.18,24.41-.15,10.57,8.77,17.84,22.47,20.79,35.69Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2025.86,3290.65a15.12,15.12,0,0,0,10.88-5.86,16.93,16.93,0,0,0,2.36-4.27l.49.06c.91,7.8-3.79,15.63-10.5,19.53l-3.23-9.46Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2059,3299.56a15.07,15.07,0,0,0,10.7-6.19,17,17,0,0,0,2.24-4.34l.5,0c1.13,7.77-3.33,15.74-9.92,19.84l-3.52-9.36Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2095,3305.31a15.08,15.08,0,0,0,8.44-9,17,17,0,0,0,.88-4.81l.48-.1c3.35,7.11,1.41,16-3.7,21.87l-6.1-7.93Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2122.65,3305.31a15.09,15.09,0,0,0,8.43-9,17,17,0,0,0,.88-4.81l.49-.1c3.35,7.11,1.4,16-3.71,21.87l-6.09-7.93Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2358.25,3297.11c-6.71-3.9-11.41-11.73-10.5-19.53l.49-.06a15.63,15.63,0,0,0,11.5,9.95,8.49,8.49,0,0,0,1.65.22c.07,0,.14,0,.1,0l-3.24,9.46Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2325.18,3307.79c-6.7-3.9-11.4-11.73-10.5-19.53l.49-.06a15.66,15.66,0,0,0,11.51,10,8.49,8.49,0,0,0,1.65.22c.06,0,.13,0,.09,0l-3.24,9.46Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2286.22,3312.24c-5.1-5.84-7-14.76-3.7-21.87l.48.1a15.65,15.65,0,0,0,8.6,13.58,4.06,4.06,0,0,0,.61.27c.07,0,.13,0,.11,0l-6.1,7.93Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2258.6,3312.24c-5.1-5.84-7-14.76-3.7-21.87l.48.1a15.65,15.65,0,0,0,8.6,13.58,4.06,4.06,0,0,0,.61.27c.06,0,.13,0,.11,0l-6.1,7.93Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2183.86,1060.19c-1.49,63.92-52.49,116.58-113.69,129.7-35.49,7.94-76.35,3.42-104.51-21.34a107.23,107.23,0,0,1-19.88-24.7c-22.14-36.82-17.08-81.39,3-117.84a28.09,28.09,0,0,0-1.27-28.35c-2.75-4.17-6.37-7.67-9.84-11.26a69.71,69.71,0,0,1,9.29,6.76c9.38,8.1,12.33,22.05,7.63,33.47-2.06,4.58-4.29,9.14-6,13.85-10.6,27.19-12.85,58.42-1.12,85.55a109,109,0,0,0,15,24.69c38.47,47,113.57,39.2,159.93,7.83,33.7-21.91,54.57-59.17,61.47-98.36Z" data-v-43db0593></path><path class="cls-fullbody-female-front-5" d="M2368.07,1101.48a11.66,11.66,0,0,0-8.05,4.17,10.75,10.75,0,0,0-1.51,12.57c4.73,9.29,14.42,5.43,17.92,2,3.33-3.22,5.48-9.39.09-15.44A9.89,9.89,0,0,0,2368.07,1101.48Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2201.48,1060.19c6.9,39.18,27.77,76.45,61.47,98.36,46.33,31.38,121.48,39.21,159.93-7.83a109,109,0,0,0,15-24.69c11.73-27.13,9.48-58.36-1.11-85.55-1.74-4.71-4-9.28-6-13.85-4.71-11.41-1.74-25.38,7.63-33.47a69.71,69.71,0,0,1,9.29-6.76c-3.46,3.59-7.09,7.09-9.84,11.26a28.09,28.09,0,0,0-1.27,28.35c19.4,35.13,25,78.2,5,114.4a119.91,119.91,0,0,1-16.09,22.52,87,87,0,0,1-18.67,15.11c-32,19-72,19.06-106.63,7.72-54.42-17.63-97.36-67.39-98.66-125.57Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2076.83,524.9c-7.4-11.25-11.09-24.08-14.88-36.9a247.52,247.52,0,0,1-7.5-39.3c-11.19-93.29,41.87-159.61,136.82-163a191.08,191.08,0,0,1,20.3.16c34.07,3.2,66.36,20.19,89.38,45.31,32.81,35.33,41.6,87.5,31.21,133.53a194.27,194.27,0,0,1-21.58,55.71c5.11-19.18,10.21-37.83,13.35-57.27,5.13-31.39,4.85-64.84-9.08-94-16-34.68-48.83-60.41-85.5-70.14-12.35-3.41-25-3.91-37.71-3.47-69.48,1.68-123.87,41.85-130,113.68-2.09,25.83,1.13,51.89,7.1,77.05,2.87,12.6,8,24.94,8.12,38.65Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2155.88,614.38a1.56,1.56,0,0,1,0-2.93,79,79,0,0,0,19.8-11.05c8.67-6.53,13.84,2.8,18.46,3.12,4.12,0,12.61-9.37,20.86-2.72,5.41,4.36,11.44,9.57,17.67,11.79a1.55,1.55,0,0,1,0,2.91c-7.84,3.07-22.06,5-39.94,4.64C2173.36,619.76,2165.65,617.82,2155.88,614.38Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2170.33,553c-2.78,3.26-5.3,7.15-5.91,11.34A9.94,9.94,0,0,0,2169,574c3.5,2,8.13.54,11.58-1.31a4.08,4.08,0,0,1,4.42.34c4.07,2.69,9.43,4.2,14,2.11a18.47,18.47,0,0,0,3.34-2.09,4.1,4.1,0,0,1,3.86-.14c5.94,2.69,11.63,3.26,15.66-2.68a8.23,8.23,0,0,0,2-5c-.11-4.09-2.73-8.07-5.25-11.38a21.5,21.5,0,0,1,5.22,4.51,13.5,13.5,0,0,1,3.31,7.57c.15,4.74-3.2,9.6-7.41,11.94-4.76,2.54-10.26.9-14.72-1.06l-.58-.25s0,0,0,0a16.07,16.07,0,0,1-11.28,3.6,22.43,22.43,0,0,1-10.62-3.88c-4.64,2.5-10.59,4.29-15.6,1.3a12.58,12.58,0,0,1-5.37-8c-1.37-6.75,3.49-13,8.83-16.47Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2094.24,457.56s19.9-9.77,39.9-.62,32.49,15.38,36.33,9.94.14-13.45-18-15.36C2128.53,449,2109.62,446,2094.24,457.56Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2164.79,630.42c12.43,11.4,26.77,19.7,43,10.25,4.62-2.68,8.53-6.66,12.83-10.18-3.44,4.41-6.89,8.88-11.55,12.15a27.65,27.65,0,0,1-32.52-.3,46.84,46.84,0,0,1-11.92-11.78l.16-.14Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2108.75,496.1s8.07,13,26,12.33,25.37-3.23,29.53-1.95,5.73-6,1.57-10.8-8.77-18-27.5-20.57c-14.27-1.95-28.16,4.48-34.57,12.16a43.86,43.86,0,0,1,27.05-4.08s-9.44,7.37.24,16.41c5.2,4.85,14.33.16,15.61-4a18.9,18.9,0,0,0,.59-2.46,11.21,11.21,0,0,0-1.13-6.86c-2.39-4.87,15.91,7.45,16.62,13,.65,5.08-19,7.36-25.36,7s-16.49-.24-21.93-7a42.51,42.51,0,0,1-11.69-12.09Z" data-v-43db0593></path><path class="cls-fullbody-female-front-2" d="M2137.6,495.61a4.56,4.56,0,0,1-4.67-2.08c-.87-1.34-1.44-3.12.12-4.62,2.94-2.8,7.53-1,7.4,2.56C2140.37,493.93,2139.37,495.24,2137.6,495.61Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2293.52,457.56s-19.9-9.77-39.9-.62-32.49,15.38-36.33,9.94-.14-13.45,18-15.36C2259.23,449,2278.14,446,2293.52,457.56Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2279,496.1s-8.07,13-26,12.33-25.37-3.23-29.53-1.95-5.73-6-1.56-10.8,8.76-18,27.49-20.57c14.27-1.95,28.17,4.48,34.57,12.16a43.86,43.86,0,0,0-27-4.08s9.44,7.37-.24,16.41c-5.2,4.85-14.33.16-15.61-4a22.83,22.83,0,0,1-.59-2.46,11.21,11.21,0,0,1,1.13-6.86c2.39-4.87-15.91,7.45-16.62,13-.65,5.08,19,7.36,25.37,7s16.48-.24,21.92-7A42.51,42.51,0,0,0,2284,487.27Z" data-v-43db0593></path><path class="cls-fullbody-female-front-2" d="M2250.16,495.61a4.56,4.56,0,0,0,4.67-2.08c.88-1.34,1.44-3.12-.12-4.62-2.93-2.8-7.53-1-7.4,2.56C2247.4,493.93,2248.39,495.24,2250.16,495.61Z" data-v-43db0593></path><path class="cls-fullbody-female-front-4" d="M2070.15,504.76c-3.3-4-5.39-8.59-7.53-13.2-1.63-2.95-5.87-5.68-9.14-4.16-2,1.2-2.91,3.7-3.36,6.26-2.11,12.57.8,26.15,4.88,38.22,2.12,6.51,5.58,12.34,7.79,18.85,2.25,6,3.23,13.66,5.53,19.08a10.89,10.89,0,0,0,2.5,3.42c1.64,1.15,4.54,1.38,5.83-.28a5.43,5.43,0,0,0,.94-2.29,45.72,45.72,0,0,1,.8-5.37,41.88,41.88,0,0,1,2.63-8.1,5.2,5.2,0,0,1,9.81,1.15l.06.3.13.6c6.1,27.13,16.43,61.25,35.53,81.86a76.19,76.19,0,0,0,7.16,6.38c10.19,8.31,20.82,16.57,32.57,22.24a67.69,67.69,0,0,0,31.9,6.65c14.12-1.28,26.92-9.46,38.14-18a154.17,154.17,0,0,0,27.74-27.77,194.54,194.54,0,0,0,28.82-62.72c.72-2.92,1.18-5.65,1.71-8.47a5.2,5.2,0,0,1,9.91-.26,44.64,44.64,0,0,0,4,9.34,5.34,5.34,0,0,0,1.55,1.75c.07,0,0,0,.11,0a2.42,2.42,0,0,0,.87-.25c5.21-2.31,7.16-7.47,8.9-13,1-3.13,1.91-6.45,3.09-9.85a58,58,0,0,1,4.51-9.78,127.69,127.69,0,0,0,7.51-18.25c1.85-5.89,3.59-12.51,3-18.52-.47-6.32-5.76-7.26-10.8-5a18.85,18.85,0,0,0-6.84,5.77l-.32.44s.06-.12,0,0l-.08.14a50.52,50.52,0,0,1-5.07,7.82l-1.08-.48a51.11,51.11,0,0,1,2.76-9.1,22.13,22.13,0,0,1,8.14-9.2c5.41-3.51,14-3.37,17.69,2.63,4.79,8,1.91,19.33-.14,27.66a134.49,134.49,0,0,1-7.14,19.8,53.72,53.72,0,0,0-3.68,8.88c-2.2,6.76-3.1,13.63-6.91,20.27a21.64,21.64,0,0,1-9.63,8.64c-8.59,3.92-14.46-3-17.45-10.18-.94-2.13-1.74-4.21-2.48-6.34a5,5,0,0,0,2.35,2.71,4.88,4.88,0,0,0,6.85-3c.23-1.09.05-.21.09-.41l-.11.66c-4.72,26.06-16.74,52.64-31.76,74.37-8.54,11.48-18.54,21.12-29.61,30-12.77,9.84-27.23,18.93-43.88,20.44a77.08,77.08,0,0,1-37.31-7.77c-12.79-6.24-23.81-14.89-34.63-23.78a87.11,87.11,0,0,1-8-7.23c-20.64-22.36-31.37-57.86-37.8-87.1l-.13-.65-.07-.33a4.84,4.84,0,0,0,9.12,1.06,32.45,32.45,0,0,0-2.63,9.34c-1.5,16.34-21.94,17.5-27.76,3.08-2.95-7.21-3-13.38-5.37-20.21-2.07-6.41-5.29-12.58-7.12-19.13-4-13.67-6.46-27.84-3.5-42.13,1.91-10.21,11.13-15.15,19.67-8a12.12,12.12,0,0,1,3.89,6.6l.31,1.24a110.25,110.25,0,0,1,2.53,12.63Z" data-v-43db0593></path><path class="cls-fullbody-female-front-8" d="M2068.65,522.75c-1.22-2.58-3.88-8.67-5.21-11.07-1.09-1.88-2.19-4.37-4.07-5.38,0,0-.07,0-.1,0s0,0,0,0a5.65,5.65,0,0,0-1.37,1.21c-2.7,3.84-3.05,9.72-2,14.37.61,2.62,2.1,4.82,3.53,7.07,2.94,4.55,6.09,9.39,6.69,14.9-1.32-6.87-6.24-12-10.17-17.51a21.26,21.26,0,0,1-3.53-12.34c.12-3.95,1.59-9.74,6.15-11.08,6.79-.84,9.63,14.86,10.09,19.83Z" data-v-43db0593></path><path class="cls-fullbody-female-front-8" d="M2067.94,531.16c2.32,5.17,4,12.11.57,17.13,2.5-5.44.57-11.57-.57-17.13Z" data-v-43db0593></path><path class="cls-fullbody-female-front-8" d="M2316.55,522.75c.46-5,3.3-20.67,10.1-19.83,4.56,1.34,6,7.13,6.15,11.08a21.41,21.41,0,0,1-3.53,12.34c-3.93,5.52-8.86,10.65-10.17,17.51.6-5.52,3.74-10.35,6.68-14.9,1.44-2.25,2.93-4.45,3.54-7.07,1.08-4.65.72-10.53-2-14.37a5.45,5.45,0,0,0-1.37-1.21s0,0,0,0-.07,0-.1,0c-1.89,1-3,3.49-4.07,5.38-1.33,2.37-4,8.53-5.22,11.07Z" data-v-43db0593></path><path class="cls-fullbody-female-front-8" d="M2317.26,531.16c-1.13,5.56-3.07,11.69-.56,17.13-3.46-5-1.76-12,.56-17.13Z" data-v-43db0593></path></g>', 1))
      ], 16);
    };
  }
});

const FullBodyFemaleFrontSVG = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-43db0593"]]);

const _hoisted_1$1 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FullBodyFemaleBackSVG",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {},
    popoverType: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      let popoverComponent;
      switch (props.popoverType) {
        case "fullBody":
          popoverComponent = _sfc_main$5;
          break;
        default:
          popoverComponent = _sfc_main$n;
          break;
      }
      const popover = await createPopover(popoverComponent, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      if (data) bodyParts.value.push(data);
      emit("value-changed", "FullBodyFemaleBackSVG", bodyParts);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({
        id: "FEMALE",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4388 3509",
        ref_key: "svgRef",
        ref: svgRef
      }, props), [
        _cache[28] || (_cache[28] = createBaseVNode("g", { id: "SKIN" }, [
          createBaseVNode("path", {
            class: "cls-fullbody-female-1",
            d: "M2022.52,3242.52s-41,26.44-30.75,56.31,11.49,31.6,83.49,35.58,104.35,5.78,107.83-34.3-28.69-82.51-28.69-82.51,10.76-65.37-.49-91.52-.73-141.86,10.25-240.91,16.3-219.65,11.66-242.51-15.16-82.84-12.93-131.75.25-108.5-.48-123.06,1-135.74,7.14-215.63,29-127.5-5.6-310.7c-2-8.35,1.69-15.88,6.8-26.52s29.21-64.78,27.76-77.79,5.84,52.86,21.72,73,17.18,25.46,17.18,25.46-14.17,16.3-20.25,64.3-8.69,78.84-2.55,170.35,14.91,250.77,11.64,287.54,0,138.88-.17,156.76-.56,50.33-10.58,85.17-6.9,130,8.89,267.79,18,205.78,11.79,228.58-10.2,43.24-4.25,81.13c-1.09,20.12-3.13,29-6.41,37.48s-33.46,61.29,9,89.85,124.46,5.57,142.43-1.57,28.86-33.38,18.62-48.28-58.77-57.35-62.13-67.34,13.25-38.63,9.91-53.91-12.87-51.37-4.14-97.32,65.13-283.19,67.19-315.48-1-115.31-9.15-156.26-26.69-120.76-11.32-174.53,48.37-110.68,58.34-137.36,63.42-192.24,76.87-323.94,15.8-222.53-14.87-301-123.84-262.26-124.57-288.16-5.14-31.33,13.34-100.21,38.07-147.63,38.07-147.63,12.64,101.28,19,136.14,26.43,124.88,26,148.64.9,63.11,13.18,95.86,92.19,218.09,95.32,242.25,4.24,42.73-3.24,71.76,0,48,10.83,74.06,23.9,99.84,27.11,104.2,10.78,5.86,11.79.16,3.83-26.28,3.83-26.28,7.75,47.79,10.64,51.65,8.05,12.68,12.14,5.22,5.24-38.51,9.77-20.66,11.35,37.95,20,33.9-3.45-62.18-3.45-62.18,14.56,40,24.32,35.78,3.71-35.83,0-52.61-4.87-41.13-4.87-41.13,5.53,23.84,17.15,27.67,22.52,6.11,19.5-10.12-7.88-41.82-5.76-52.57-13.61-29.94-17.08-46.45-17.31-44.64-40.16-64.47c-10.95-15.15-17.61-35.82-22-81.19s-23.08-234.08-23.08-234.08-9.64-58.24-25.54-89.89-27.39-51.79-37.4-125.76-21.75-216.19-24.32-244.68-.58-91.73-56.37-131.39-127.28-39.3-151.71-57.17-62.34-38.1-73.08-144.84c3.19-6,18.53-16,22.79-34s16.83-55.9,16.83-55.9,8.33,15.64,14.43,10.72,14.52-27.48,14.52-27.48,13.07-29.63,13.32-37.82,5.49-20.45-10.12-17.38-6.4,7.23-8.73,4.38,7.14-44.76,7.14-44.76,25.57-120.59-100.44-157.3S2063.9,395.16,2064.77,422s9,74.37,9,74.37-6.27-17.24-17.95-11.5,5.85,58.74,6.83,61.12,8.7,27.92,10,29.29,11.77,9.34,16.15-3.2,14.92,34.6,14.92,34.6,8,30,30.15,42.48c-.33,9-13.51,79.67-30.15,102.29s-31.43,46.65-56.22,50.94-136.77,37.82-168.6,72.89-46.36,230.06-46.36,230.06-15.53,167-31.61,205.37-37.55,79.21-43.08,114.69-31.52,301.45-31.8,303.72-1.66,14.78-7,22.38-35,42.51-38.92,48.26-10.07,14.09-10.87,23.67-1.6,14.86-3,18.12-12.36,18.45-13.63,23.68,1,27.39,0,32.18-9.68,34.65-5.06,41.16,20.72,6.7,33.61-19.1c-.73,12.67-13.71,78.46-8.62,82.09s10.15,5.58,22.81-19.5c-.62,15.44-7.13,48,3.45,49.91s23.16-37.54,23.16-37.54-1.15,25,9,25.08,20-47.88,20-47.88.51,29.92,8.65,22,17.68-34.39,19.15-58.47,12.61-41.24,19.74-59.69,11.73-29.62,7.24-58.24-14.77-45.33-.9-92.34,82.34-203.72,82.34-203.72,19-47,20.32-61.89,9.71-109.54,12.78-125,35.28-203.81,35.28-203.81,7.41,16.51,20.11,65.77,30.92,122.57,31.33,137.85-.79,41.66-13.35,69.73-66,135.88-66,135.88-46.27,90.35-56.28,146.59-23.42,123.37-1.64,280.12,54.46,275.87,122.88,418c9.55,28.61,13.29,60.68,13.22,80.48s-2.07,58.29-7.66,85.86-25.79,108.43-16.18,195.82,65.72,304.08,65.72,304.08,8.7,44.59,5.14,64.15-10.55,40.19-.85,73.81c3.4,16.07,2.69,24.52-4.47,31.06S2022.52,3242.52,2022.52,3242.52Z"
          })
        ], -1)),
        createBaseVNode("g", _hoisted_1$1, [
          createBaseVNode("path", {
            id: "Occiput",
            onClick: _cache[0] || (_cache[0] = ($event) => handleBodyPartClick("Occiput", $event)),
            class: "cls-fullbody-female-2",
            d: "M2113.77,574.28c-3.15-.88-11.29-4.81-12.62-7.8-7.36-16.6-32.27-118-24.62-148.15.11-.42.06-.87.19-1.28,21.43-67.72,159.83-143,244.86-2.92,1.63,2.68,1.8,5.84,2.57,8.88,4.32,16.93-7.57,102.18-22.11,135.22-3.65,8.3-21.85,16-30.61,18.3C2234.68,586,2147.79,583.82,2113.77,574.28Z"
          }),
          createBaseVNode("path", {
            id: "Vertebral",
            onClick: _cache[1] || (_cache[1] = ($event) => handleBodyPartClick("Vertebral", $event)),
            "data-label": "Vertebral",
            class: "cls-fullbody-female-2",
            d: "M2173.21,791.19c8.25,2.2,27.62,6.4,45-.08,1.78-.66,2.56,1,2.43,3.17-1.51,24.61-11.48,110.42-7.65,353.18.73,46.25,0,257,9.1,418.27a2.67,2.67,0,0,1,0,.4c-.55,14-18.93,1-26.56,1.17-8.37.16-25.79,10.93-26.59.22s9.22-290.51,9.22-422c0-139-6.52-320-8.19-351.16C2169.87,792.33,2171.49,790.73,2173.21,791.19Z"
          }),
          createBaseVNode("path", {
            id: "Left_Dorsal_Scapular",
            onClick: _cache[2] || (_cache[2] = ($event) => handleBodyPartClick("Left_Dorsal", $event)),
            "data-label": "Left Dorsal Scapular",
            class: "cls-fullbody-female-2",
            d: "M1921.3,894c3.11,31.42,27.9,161.93,54,270.72,7.25,30.16,17.42,57,31.15,113.79,11,45.31,10.61,39.67,12.6,76.25,2.4,21.37-37.54,100-52.86,129.28-17,32.54-37.85,71-51.79,107-12,29.29,25.77,3.77,40.3-2.38,5.63-2.38,45.29-15.43,57.37-17.82,10.84-2.15,45.67-20.34,64.26-21.19a6.15,6.15,0,0,0,5.92-6c1.08-41.59-2.77-146.27,8-170.45,22.74-15.85,78.61-72.17,80.45-87.88,1.56-57.18,1.71-432.48-7-491.75-.57-3.89-3.71-3.58-7.09-3.91-21.3-2.06-44.49-9.24-53.41-12.21a6.18,6.18,0,0,0-6.43,1.65c-6.59,7-25.17,25-51.79,35.84a6.41,6.41,0,0,1-.81.27c-9.93,2.57-52.82,11.62-88.19,24.41C1906.74,857.41,1918.74,868.19,1921.3,894Z"
          }),
          createBaseVNode("path", {
            id: "Sacral",
            onClick: _cache[3] || (_cache[3] = ($event) => handleBodyPartClick("Sacral", $event)),
            "data-label": "Sacral",
            class: "cls-fullbody-female-2",
            d: "M2164.37,1606c7.71,10.43,23.43,33.86,30.4,51.71,1.38,3.53,4.11,3.28,5.31-.46,7.3-22.74,27.08-51.41,33.81-57,20-16.69-23.85-24.67-37.8-24.46-10.84.16-38.05,2.2-43.55,14.77C2150.73,1594.69,2158.72,1598.38,2164.37,1606Z"
          }),
          createBaseVNode("path", {
            id: "Left_Lumbar",
            onClick: _cache[4] || (_cache[4] = ($event) => handleBodyPartClick("Left_Lumbar", $event)),
            "data-label": "Left Lumbar",
            class: "cls-fullbody-female-2",
            d: "M2166.37,1299.77s-33.06,47.53-67.79,71.32c-19.77,13.55-10.14,165.56-8.44,172,3,10,47.49,35.16,64.1,32.55,6.45-.85,11.22-1.58,13.24-139.13C2168.59,1361.35,2174.86,1289.19,2166.37,1299.77Z"
          }),
          createBaseVNode("path", {
            id: "Right_Dorsal_Scapular",
            onClick: _cache[5] || (_cache[5] = ($event) => handleBodyPartClick("Right_Dorsal", $event)),
            "data-label": "Right Dorsal Scapular",
            class: "cls-fullbody-female-2",
            d: "M2467.06,894c-3.12,31.42-31,160.66-57.17,269.45-7.24,30.15-14.29,58.24-28,115.06-11,45.31-10.6,39.67-12.59,76.25-2.41,21.37,37.53,100,52.85,129.28,17,32.54,37.85,71,51.79,107,12,29.29-25.77,3.77-40.3-2.38-5.62-2.38-45.29-15.43-57.37-17.82-10.84-2.15-45.66-20.34-64.26-21.19a6.17,6.17,0,0,1-5.92-6c-1.08-41.59,2.77-146.27-8-170.45-22.74-15.85-78.61-72.17-80.44-87.88-1.57-57.18-1.72-432.48,7-491.75.57-3.89,5.56-2.26,8.94-2.59,21.3-2.06,44.87-6.52,53.79-9.49,2.28-.76,7.75-4,11.57,0,6.67,7,17.8,22.62,44.43,33.45a5.5,5.5,0,0,0,.81.27c9.93,2.57,52.81,11.62,88.18,24.41C2481.61,857.41,2469.61,868.19,2467.06,894Z"
          }),
          createBaseVNode("path", {
            id: "Right_Lumbar",
            onClick: _cache[6] || (_cache[6] = ($event) => handleBodyPartClick("Right_Lumbar", $event)),
            "data-label": "Right Lumbar",
            class: "cls-fullbody-female-2",
            d: "M2222,1299.77s33.05,47.53,67.78,71.32c19.78,13.55,10.15,165.56,8.44,172-3,10-47.48,35.16-64.1,32.55-6.45-.85-11.22-1.58-13.24-139.13C2219.77,1361.35,2213.5,1289.19,2222,1299.77Z"
          }),
          createBaseVNode("path", {
            id: "Left_Gluteal",
            onClick: _cache[7] || (_cache[7] = ($event) => handleBodyPartClick("Left_Gluteal", $event)),
            "data-label": "Left Gluteal",
            class: "cls-fullbody-female-2",
            d: "M1891.17,1653.87c5.23-13.9,23.27-59.81,114.35-76.63,41.62-7.68,59-34.37,92.54-18s91.07,44.27,96.73,170.4c5.12,114.14-43.19,138.64-63.21,149-1.21.63-2.54,1-3.78,1.52-7.3,3.29-38.75,17.78-80.12,15.1-48.43-3.15-104.72-47.4-136.17-49-35.35-1.77-39.88-51.85-41.79-89.81C1868.22,1726.53,1889.56,1658.17,1891.17,1653.87Z"
          }),
          createBaseVNode("path", {
            id: "Right_Gluteal",
            onClick: _cache[8] || (_cache[8] = ($event) => handleBodyPartClick("Right_Gluteal", $event)),
            "data-label": "Right Gluteal",
            class: "cls-fullbody-female-2",
            d: "M2495.52,1652.36c-5.05-13.69-22.47-58.9-110.42-75.47-40.19-7.57-57-33.85-89.36-17.73s-87.93,43.6-93.4,167.82c-5,112.42,41.71,136.55,61,146.78,1.17.62,2.46,1,3.65,1.5,7.05,3.24,37.42,17.52,77.37,14.87,46.76-3.1,101.12-46.68,131.48-48.23,34.14-1.74,38.51-51.06,40.35-88.45C2517.68,1723.92,2497.07,1656.59,2495.52,1652.36Z"
          }),
          createBaseVNode("path", {
            id: "Left_Rear_Femoral",
            onClick: _cache[9] || (_cache[9] = ($event) => handleBodyPartClick("Left_Rear_Femoral", $event)),
            "data-label": "Left Rear Femoral",
            class: "cls-fullbody-female-2",
            d: "M1878.15,1836.11s17.81,23.15,40.43,22.41,85.9,34.81,99.25,39.63,94.13,27.65,134.45-23.75c4.8-4.06,27.65,95.73,17.06,153.26a13.23,13.23,0,0,0-.17,1.41c-3.09,53.18-27.55,291.27-19.8,340.27.79,5-1.52,14.09-5.94,16.47-12.14,6.51-28.21,7.74-49.79,6.59-23.88-1.28-53.49-5.14-69.51-.44a9.37,9.37,0,0,1-1.57.35c-20,2.38-31.69-47.66-41-65.22-9.43-17.79-58.29-109.28-89.36-291.19-.06-.33-.1-.67-.13-1C1881.83,1914.26,1868,1823.89,1878.15,1836.11Z"
          }),
          createBaseVNode("path", {
            id: "Right_Rear_Femoral",
            onClick: _cache[10] || (_cache[10] = ($event) => handleBodyPartClick("Right_Rear_Femoral", $event)),
            "data-label": "Right Rear Femoral",
            class: "cls-fullbody-female-2",
            d: "M2515.3,1826.4s-13.15,18.9-40.63,21.45c-22.53,2.1-84.28,37.78-97.63,42.61s-86.3,24.8-139.41-16.06c-4.81-4.06-19.83,86.81-17.07,153.26,0,.48.15.93.17,1.41,3.1,53.18,27.55,291.27,19.8,340.27-.78,5,1.52,14.09,5.95,16.47,12.14,6.51,28.2,7.74,49.79,6.59,23.87-1.28,53.49-5.14,69.51-.44a9.48,9.48,0,0,0,1.56.35c20,2.38,31.7-47.66,41-65.22,9.44-17.79,58.3-109.28,89.37-291.19.05-.33.1-.67.13-1C2508.08,1914.26,2525.43,1814.18,2515.3,1826.4Z"
          }),
          createBaseVNode("path", {
            id: "Left_Popliteal",
            onClick: _cache[11] || (_cache[11] = ($event) => handleBodyPartClick("Left_Poplite", $event)),
            "data-label": "Left Popliteal",
            class: "cls-fullbody-female-2",
            d: "M2026.73,2397.06c-2.66,1.14-8-.61-11.39,6.54-3.93,8.25,3.43,20.75,2.83,51.74-.79,40.85-4.19,43.4.57,53.11s60.66-8.71,75.41,2.08c13,9.49,50.89,39.47,56.34,5.41,6.81-42.56,7.49-123.54-8.85-121.76-10.45,1.15-36.52,9-63.66,3.66C2051.21,2392.55,2034.69,2393.65,2026.73,2397.06Z"
          }),
          createBaseVNode("path", {
            id: "Right_Popliteal",
            onClick: _cache[12] || (_cache[12] = ($event) => handleBodyPartClick("Right_Poplite", $event)),
            "data-label": "Right Popliteal",
            class: "cls-fullbody-female-2",
            d: "M2361.71,2397.06c2.67,1.14,8-.61,11.4,6.54,3.92,8.25-3.43,20.75-2.83,51.74.78,40.85,4.18,43.4-.58,53.11s-60.65-8.71-75.41,2.08c-13,9.49-50.88,39.47-56.33,5.41-6.81-42.56-7.49-123.54,8.85-121.76,10.45,1.15,36.52,9,63.66,3.66C2337.24,2392.55,2353.75,2393.65,2361.71,2397.06Z"
          }),
          createBaseVNode("path", {
            id: "Rear_Cervical",
            onClick: _cache[13] || (_cache[13] = ($event) => handleBodyPartClick("Rear_Cervical", $event)),
            "data-label": "Rear Cervical",
            class: "cls-fullbody-female-2",
            d: "M2284.3,608.85c4.18-10.19,13.81-35.3,11.28-34.38-57.19,20.77-136.22,19.42-189.72,0-8-3.25,6.73,41.41,28.33,64.7a7.21,7.21,0,0,1,1.48,2.38c5.66,15.51,4.42,29.21-.67,50.36-4.75,21.65-4.93,35.39-29.45,70.62a7.12,7.12,0,0,0,2.38,10.28c18.54,10.49,78.37,13.1,92.14,13.1,13.5,0,71.92-2.27,89.25-11.76a7.1,7.1,0,0,0,2.69-9.85c-36.26-61.3-31.3-98.85-27.31-119.11a6.93,6.93,0,0,1,.56-1.72C2271.9,629.59,2281.23,617.15,2284.3,608.85Z"
          }),
          createBaseVNode("path", {
            id: "Left_Sural",
            onClick: _cache[14] || (_cache[14] = ($event) => handleBodyPartClick("Left_Sural", $event)),
            "data-label": "Left Sural",
            class: "cls-fullbody-female-2",
            d: "M2015,2521.07a8.74,8.74,0,0,1,7.86-5.78c14.77-.64,58.74-2.26,63.93,1,6.26,3.88,16.38,10.17,57,26.91,3.59,1.16,2.07,25.33,9.7,47.15s14.11,84.36,14.69,131.74c.56,45.11-6.89,88.55-7.6,92.63,0,.21-.07.43-.09.65l-6.95,70.28a8.48,8.48,0,0,1-.13.88c-1.17,5.88-4.47,10.91-10.76,11.05l-110.19,1.94c-5.93.14-5.11-1.89-6.58-7.38-9.19-34.39-39.49-131.75-35.4-199.66,5.27-87.55,13.8-105.55,15.32-122C2007.31,2550.26,2011.66,2530.43,2015,2521.07Z"
          }),
          createBaseVNode("path", {
            id: "Left_Fibular",
            onClick: _cache[15] || (_cache[15] = ($event) => handleBodyPartClick("Left_Fibular", $event)),
            "data-label": "Left Fibular",
            class: "cls-fullbody-female-2",
            d: "M2029,2904.36c-2,.09-1.56,4-1.19,6,4.41,23,30.8,139.35,30.8,147.91,3.07,17.37,4.77,27.24,4.09,45.56,1,7.45-1.35,25.44-3.83,32.89s-4,31-2.4,37.56c1.9,7.77,5.94,19.67,14.25,22.65s64.32,5.68,70.45-3.51c7.47-11.21,12.26-33.25,7.15-50.55-10-33.7-8.52-47.06-8.68-73.7-.17-27.34,2.18-71.64,8.13-112.34,5.21-35.55,6.42-52.85,5.48-54.33C2151.47,2899.73,2048,2903.48,2029,2904.36Z"
          }),
          createBaseVNode("path", {
            id: "Left_Calcaneal",
            onClick: _cache[16] || (_cache[16] = ($event) => handleBodyPartClick("Left_Calcaneal", $event)),
            "data-label": "Left Calcaneal",
            class: "cls-fullbody-female-2",
            d: "M2068.57,3205.94c-5.7,3.66,7.13,3.16-12.58,22.06-9.29,8.91-43.71,36.36-49.84,48.11-7.45,14.27-9.33,42.91,18.72,44.93,32.08,2.31,129.71,17.52,141.62-14.3,15.39-41.09-18.21-62.64-18.21-86.14,0-11.39-1.5-18.81-11.75-16.49C2127.38,3206.17,2074.05,3202.42,2068.57,3205.94Z"
          }),
          createBaseVNode("path", {
            id: "RIght_Calcaneal",
            onClick: _cache[17] || (_cache[17] = ($event) => handleBodyPartClick("Right_Calcaneal", $event)),
            "data-label": "RIght Calcaneal",
            class: "cls-fullbody-female-2",
            d: "M2320.88,3205.94c5.71,3.66-7.12,3.16,12.58,22.06,9.3,8.91,39.86,30.87,46,42.62,7.45,14.26,9.16,45.75-18.89,47.77-32.08,2.31-120.19,13.53-132.1-18.28-15.39-41.1,12.73-56,12.73-79.51,0-11.39,1.5-18.81,11.75-16.49C2262.08,3206.17,2315.41,3202.42,2320.88,3205.94Z"
          }),
          createBaseVNode("path", {
            id: "Right_Sural",
            onClick: _cache[18] || (_cache[18] = ($event) => handleBodyPartClick("Right_Sural", $event)),
            "data-label": "Right Sural",
            class: "cls-fullbody-female-2",
            d: "M2373,2521.07a8.73,8.73,0,0,0-7.86-5.78c-14.76-.64-58.74-2.26-63.93,1-6.26,3.88-16.38,10.17-57,26.91-3.59,1.16-2.07,25.33-9.7,47.15s-14.1,84.36-14.69,131.74c-.56,45.11,6.89,88.55,7.6,92.63,0,.21.07.43.09.65l7,70.28a6.42,6.42,0,0,0,.12.88c1.17,5.88,4.47,10.91,10.76,11.05l110.19,1.94c5.93.14,5.11-1.89,6.58-7.38,9.19-34.39,39.49-131.75,35.4-199.66-5.26-87.55-13.79-105.55-15.32-122C2380.7,2550.26,2376.35,2530.43,2373,2521.07Z"
          }),
          createBaseVNode("path", {
            id: "Right_Fibular",
            onClick: _cache[19] || (_cache[19] = ($event) => handleBodyPartClick("Right_Fibular", $event)),
            "data-label": "Right Fibular",
            class: "cls-fullbody-female-2",
            d: "M2359.05,2904.36c2,.09,1.56,4,1.2,6-4.42,23-30.81,139.35-30.81,147.91-3.07,17.37-4.77,27.24-4.09,45.56-1,7.45,1.35,25.44,3.83,32.89s4,31,2.41,37.56c-1.91,7.77-6,19.67-14.26,22.65s-64.32,5.68-70.45-3.51c-7.47-11.21-12.26-33.25-7.15-50.55,10-33.7,8.52-47.06,8.69-73.7.17-27.34-2.19-71.64-8.14-112.34-5.21-35.55-6.42-52.85-5.48-54.33C2236.54,2899.73,2340,2903.48,2359.05,2904.36Z"
          }),
          createBaseVNode("path", {
            id: "Left_Rear_Acromial",
            onClick: _cache[20] || (_cache[20] = ($event) => handleBodyPartClick("Left_Rear_Acromial", $event)),
            "data-label": "Left Rear Acromial",
            class: "cls-fullbody-female-2",
            d: "M1914.44,863.94c-.93-6.9-13.06,3-15.18,4.68-12.87,9.93-31,26-40,57.53-7.88,27.74-13,62-8.69,66.13,2,1.83,14.65-4.34,17.37-5.88,11-6.21,28.83-12.18,54.7-15.57,2.19-.29,6.52-3.76,6.23-5.53C1923.77,934,1916.69,880.66,1914.44,863.94Z"
          }),
          createBaseVNode("path", {
            id: "Left_Rear_Brachial",
            onClick: _cache[21] || (_cache[21] = ($event) => handleBodyPartClick("Left_Rear_Brachial", $event)),
            "data-label": "Left Rear Brachial",
            class: "cls-fullbody-female-2",
            d: "M1851.77,999.77c-2.61,5.76-4.6,11-6.13,25.78-.51,7.92-1.21,32.23-6,73.79-5.61,49.05-3.74,85.87-28.14,202.46-.77,3.68,2.74,6.87,6.44,6.16,12.83-2.47,38.44-7,48.25-5.64,13.34,1.81,41.4,30.09,44.94,29.28,2.92-.67,25.65-147.15,34.79-188.67,4.2-17.94,9.67-39.92,6.42-57.21-3.12-16.59-21-109.82-21.76-113.49-.77-3.46-37.19,7.19-37.41,7.28C1887.1,982.09,1854.43,993,1851.77,999.77Z"
          }),
          createBaseVNode("path", {
            id: "Right_Rear_Acromial",
            onClick: _cache[22] || (_cache[22] = ($event) => handleBodyPartClick("Right_Rear_Acromial", $event)),
            "data-label": "Right Rear Acromial",
            class: "cls-fullbody-female-2",
            d: "M2474.88,863.94c.93-6.9,13.06,3,15.18,4.68,12.87,9.93,31.05,26,40,57.53,7.88,27.74,9.79,58.89,5.45,63-2,1.83-10.64.94-13.36-.6-11-6.21-29.6-14.31-55.47-17.7-2.19-.29-6.41-3.75-6.23-5.53C2463.24,937.4,2472.63,880.66,2474.88,863.94Z"
          }),
          createBaseVNode("path", {
            id: "Right_Rear_Brachial",
            onClick: _cache[23] || (_cache[23] = ($event) => handleBodyPartClick("Right_Rear_Brachial", $event)),
            "data-label": "Right Rear Brachial",
            class: "cls-fullbody-female-2",
            d: "M2534.55,999.77c2.61,5.76,4.6,11,6.13,25.78.51,7.92,1.21,32.23,6,73.79,5.61,49.05,3.74,85.87,28.14,202.46.77,3.68-2.74,6.87-6.44,6.16-12.84-2.47-34.69-7.21-44.51-5.88-13.33,1.82-40.61,26.24-44.15,25.43-2.92-.67-28.64-146.39-37.79-187.91-4.19-17.94-11.21-36.59-7.95-53.88,3.12-16.59,22.8-108.93,23.61-112.59.77-3.47,35,5.62,38.87,6.71a4.12,4.12,0,0,1,.67.24C2503.2,982.66,2531.89,993,2534.55,999.77Z"
          }),
          createBaseVNode("path", {
            id: "Left_Olecranal",
            onClick: _cache[24] || (_cache[24] = ($event) => handleBodyPartClick("Left_Olecranal", $event)),
            "data-label": "Left Olecranal",
            class: "cls-fullbody-female-2",
            d: "M1808.41,1313.77a3.45,3.45,0,0,1,2.6-1.88c9-1.3,44.77-6.06,54.87-4.67,8.56,1.17,34.31,19.69,43.07,27.77a3.28,3.28,0,0,1,.66,3.59c-2.18,5.62-3.93,21.64-5.76,39-1.11,10.52-1.76,30.48-3.91,30.13-17.37-2.86-86.13-18.51-118.78-20.79-2.58-.18-3.58-2.79-2.74-5.24,9.35-27.05,15.4-29.55,21.66-47.92C1805.47,1317.9,1806.75,1317.05,1808.41,1313.77Z"
          }),
          createBaseVNode("path", {
            id: "Left_Posterior_Antebrachial",
            onClick: _cache[25] || (_cache[25] = ($event) => handleBodyPartClick("Left_Posterior_Antebrachial", $event)),
            "data-label": "Left Posterior Antebrachial",
            class: "cls-fullbody-female-2",
            d: "M1780.21,1391a3.88,3.88,0,0,0-4.23,2.63c-2.51,7.66-9.06,29.67-15,66.94-7.44,46.24-28.26,270.92-26.78,275.94,1.28,4.34,38.86,7.66,51,9.27a3.87,3.87,0,0,0,4.23-2.8c10.5-36.5,67.19-167.75,74.79-188.77,7.53-20.81,23.66-56.34,30.81-87.57,3-13.1,4.34-40.35,4.73-49.66a3.85,3.85,0,0,0-3-3.92C1883.78,1410.06,1832.31,1398.41,1780.21,1391Z"
          }),
          createBaseVNode("path", {
            id: "Right_Olecranal",
            onClick: _cache[26] || (_cache[26] = ($event) => handleBodyPartClick("Right_Olecranal", $event)),
            "data-label": "Right Olecranal",
            class: "cls-fullbody-female-2",
            d: "M2579.61,1313.77a3.45,3.45,0,0,0-2.6-1.88c-9-1.3-44.77-6.06-54.87-4.67-8.56,1.17-34.31,19.69-43.06,27.77a3.28,3.28,0,0,0-.67,3.59c2.19,5.62,3.94,21.64,5.76,39,1.11,10.52,1.77,30.48,3.92,30.13,17.37-2.86,86.12-18.51,118.78-20.79,2.58-.18,3.58-2.79,2.73-5.24-9.34-27.05-15.39-29.55-21.65-47.92C2582.56,1317.9,2581.28,1317.05,2579.61,1313.77Z"
          }),
          createBaseVNode("path", {
            id: "Right_Posterior_Antebrachial",
            onClick: _cache[27] || (_cache[27] = ($event) => handleBodyPartClick("Right_Posterior_Antebrachial", $event)),
            "data-label": "Right Posterior Antebrachial",
            class: "cls-fullbody-female-2",
            d: "M2607.81,1391a3.88,3.88,0,0,1,4.23,2.63c2.51,7.66,9.07,29.67,15.06,66.94,7.43,46.24,27.62,270.07,25.24,274.81-1.85,5.73-35.39,8.55-47.54,10.15-1.91.25-4.84-3.85-5.37-5.7-10.5-36.5-65.68-164.81-73.28-185.83-7.53-20.81-25-59.45-32.17-90.68-3-13.1-5.3-37-5.68-46.34a3.85,3.85,0,0,1,3-3.92C2504.25,1410.06,2555.72,1398.41,2607.81,1391Z"
          })
        ]),
        _cache[29] || (_cache[29] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-ea10dcbd><path class="cls-fullbody-female-3" d="M2139.83,647.55c-9.31,72-33.88,147.3-112.47,166.51-64.91,19.12-141.25,30.88-168.4,102.13-12.7,32.36-12.54,67.54-15,101.87-.77,13.1-1.52,26.26-2.67,39.37-6.42,74.14-13,148.51-28,221.54a436.06,436.06,0,0,1-13.76,51.48c-3.58,7-7.27,13.88-10.71,20.8-13.87,27.14-22.66,56.49-28.15,86.44-2.78,15-4.87,30.2-6.5,45.41-7.41,76.61-13.75,153.59-21.73,230.22-1.16,9.78-1.88,19.59-3.85,29.37-2,6.26-5.65,11.34-9.22,16.46-6.91,9.6-14.36,18.46-22,27.33-11.34,12.79-24.33,26.43-24.06,44.42a39.53,39.53,0,0,1-4.2,15.65c-3.31,6.94-8.52,13.45-11.92,19.83-.94,2.08-1.31,3.06-1.16,4.76.36,9.37,1.4,18.46.69,28-.64,7.85-4,15.36-5.27,23-.75,4.43-2.44,13.63,2,15.91,5.16,1.93,10.88-3.69,14.27-7.56a52.58,52.58,0,0,0,11.15-23.84c1.19-5.36,2.28-11.66,3.6-17.08,2.16-8.21,4.39-20,13.92-23l4.91-1.31.88,5a6.42,6.42,0,0,1-.4,3.46c-1.07,2.59-3,4-4.28,6.22a33.43,33.43,0,0,0-4.48,12.53,70.43,70.43,0,0,0-.81,7.15c-2.24,25.79-10.08,50.12-14.15,75.45-1.16,7.07-2.71,14.45-2.18,21.36a5.1,5.1,0,0,0,1.41,3.49,3.92,3.92,0,0,0,1.16.57l.27.08.12,0-.18,0a1.81,1.81,0,0,0-.82,0,3,3,0,0,0,.49-.35c4.73-4.88,7.22-11.61,10.1-17.94a321.41,321.41,0,0,0,14-42.84c2-8.75,4.89-20.79,6.9-29.66l9.22,2q-6.35,30.27-12.31,60.62c-2.45,12.62-4.9,25.22-6.9,37.88a65.58,65.58,0,0,0-1.11,10.64c.14,2.1.46,5.11,2.12,6.34a.79.79,0,0,0,.6.12,3.43,3.43,0,0,0,1.42-.64c5.07-3.87,6.56-11.64,8.58-17.63,8.32-29.63,14.45-59.93,20.89-90.12l9.72,1.58c-1.88,17.38-4.62,34.68-7.8,51.77-1.84,10.62-4.26,20.9-4.87,31.38-.16,3.44,0,6.78,1.79,9.55a3.29,3.29,0,0,0,.86,1c.2.11.16.11.26.11a6.35,6.35,0,0,0,3.6-2.69,2.94,2.94,0,0,0,.33-.57l.21-.8c6.5-29.45,11.77-59.31,17.46-89l10.47,1.7c-1.41,10.91-2.62,22-3.52,32.92-.44,5.49-.8,11-1,16.39-.08,5.2-.37,10.8.82,15.78a1.12,1.12,0,0,0,.09.25,1.9,1.9,0,0,0-.39-.52c-.14-.14-.17-.16-.1-.11a1.16,1.16,0,0,0,.22.18c.17.14.23.11.14.1a1.56,1.56,0,0,0-.5,0c2-1.88,3.78-6.15,4.82-9.54,2.23-7.43,3.45-16,4.6-23.77,2.66-16.68,5.26-33.09,9.14-49.69a99.18,99.18,0,0,1,3.8-12.79c1.6-4.14,4.7-8.08,6.78-11.66a89.77,89.77,0,0,0,10.15-21.17,54.76,54.76,0,0,0,2.41-14.93c.43-16-2-32.6-4.78-48.54l-1.5-8.14-1.58-8.23c-2.08-11.89-1.22-23.57.56-35.26a128.23,128.23,0,0,1,8-29.47c32-78.22,65.61-156.55,93.84-236.17,1.89-5.88,4-11.84,5.07-17.83l.1-1,.43-4.06c.25-2.73.52-5.46.73-8.22,2.37-29.17,3.72-58.3,7.23-87.59.89-6.87,2-14.32,3.47-21.11q14.19-69.33,25.72-139.25c2.32-14.92,5.71-34.2,8.61-49.12,1.3-8,3.3-15.94,2.69-24.07l-.14-2-.22-2c-3.54-28.92-11.83-57.09-19.8-85.06l5.35-1.52c10,30,20.12,60,28.61,90.51,5.6,20.51,11,40.8,15.32,61.69l1.52,7.71c1.58,7.61,3.59,15.08,5.68,22.61,11.28,40.67,25.34,81.83,26.61,124.6a119.39,119.39,0,0,1-3.46,32.85c-1.49,5.34-3.14,10.44-5,15.49-9.2,25-21.11,48.85-32.76,72.52-37.07,73.93-77.44,150.79-96.54,231.47-6.94,30.39-10.21,61.74-11.15,92.87-1.5,52.28,2.72,104.79,9,156.69,7.72,62.46,17.71,124.82,32.33,186,19,81.86,48.11,160.71,85.72,235.83,6.64,14.55,14.83,29.7,17.16,46,4.52,37.05,5.17,74.69.77,111.8-1.27,10.58-3.59,21.17-5.74,31.55-13,61.17-21.93,123.82-15.54,186.3.76,7.46,1.86,15.71,3.13,23.09,5.84,33.59,13.23,66.91,20.79,100.18,13.67,61.78,30.8,122.86,42.28,185.22l.59,4,.48,4.11c1.54,17.66,4.54,37.71,3.95,56a70.87,70.87,0,0,1-2.77,17c-2.6,9.2-3.23,19.77-3.05,29.48.27,7.35.81,14.61,3.18,21.35,3.22,8.25,6,16.78,4.92,25.94a19.12,19.12,0,0,1-4.5,10.36c-1.14,1.24-2.1,2.15-3.11,3.12-15.86,14.7-33.63,29.85-47.64,46.28-1.61,1.92-3.13,3.88-4.5,5.84a32.42,32.42,0,0,0-3.3,5.69l-.23.62a37.57,37.57,0,0,0,1.32,25.6,35.7,35.7,0,0,0,14.27,16.3c5.39,3.25,12.2,4.1,18.48,5.17,25.71,3.52,51.93,3.9,77.88,3.83,10.34-.09,20.87-.36,31.11-1.16a42.59,42.59,0,0,0,6.76-1,38.84,38.84,0,0,0,16.87-11c8.4-9,12.49-21.73,12.68-34.11.31-17.35-9.62-31-17.66-46.38-4.76-8.94-9.78-19.42-9-30.14l.06-1,.14-2c1.42-20.54,3.79-41.7,1.61-62a47.42,47.42,0,0,0-3.3-13.53c-.47-1-1-2.19-1.37-3.25a69.49,69.49,0,0,1-2.72-13.83c-3.09-34.66-1.31-69.1.8-103.69.23-2.74.45-5.94.9-8.49,4-33.77,14.05-139.65,17.86-172.4,1.07-8.93,1.81-17.86,3.48-26.77,1.62-11.74,2.18-23.76,3-35.75,1.7-31.33,2.93-62.88,2.08-94.23a182.89,182.89,0,0,0-3.17-30.57c-3.94-20.59-9.36-41.42-11.49-62.51a340.47,340.47,0,0,1-1.61-48.11c1.52-46.65,6.7-94.82.43-141.12-.2-1.92-.49-3.43-.65-5.42v-1l0-2c-.37-60.67-1.44-121.69,5-182.1,4.79-52.06,9.75-105.15,12.63-157.26,1.21-23.5,2.32-47.09,1.46-70.57-2.11-33.86-7.63-67.53-14.66-100.69-1.11-5.09-2.29-10.23-3.55-15.19l9.15-2.41a739.27,739.27,0,0,1,18.37,109.8c1.21,15.92.93,32,.53,47.9-1.64,52.76-6.15,105.35-10.77,157.89-1.65,18.41-4.16,44.74-5.62,62.86-1.46,20.84-1.84,41.9-2.12,62.83-.32,29.68-.16,59.9.23,89.63,6.35,41.57,3.11,88.61,1.08,131.47-1,20.71-1.36,41.65,1,62.26,2.57,26.22,10.85,51.5,13.89,77.79,2.78,37.14.8,74.26-.93,111.37-.78,12.29-1.33,24.67-3,37-1.6,8.54-2.3,17.4-3.34,26.09-4,36-13.93,140.37-18.23,176.69-1.21,14.11-1.77,28.82-2.24,43-.47,20.7-.94,41.83,1.17,62.29a59.12,59.12,0,0,0,2.16,11.33l.24.65.7,1.55c4.63,10.67,5,22.15,5.27,33.42.16,16.62-1.48,33.33-2.6,49.72-.78,8.87,3.51,16.88,7.63,24.82,4.84,9,10.58,18.24,14.66,28.77,2.82,7.24,4.76,15.45,4.44,23.47-.26,15.17-5.31,30.56-15.78,41.84-8.06,8.73-19.13,15.34-31.33,15.74-21.31,1.61-42.52,1.44-63.85.92-16-.54-32-1.31-47.94-3.62-5.62-.95-11-1.74-16.5-3.69-11.32-4.3-20.67-13.74-25.46-24.85a49,49,0,0,1-1.18-35.51c2.46-5.81,6-10,9.68-14.65,10.43-12.3,22.32-23.25,34.09-34,4.53-4.35,13.3-11.71,17.2-16,1.8-3,1.57-6.21,1.12-9.87a56.49,56.49,0,0,0-3.37-12,52.23,52.23,0,0,1-3.06-10.51,125,125,0,0,1-1.08-33.16,91.82,91.82,0,0,1,3-16.65l.48-1.77a43.48,43.48,0,0,0,1.09-5.19c1.83-12.4.25-24.93-.84-37.87-.84-8.23-1.87-19.51-2.79-27.29-3.26-21.81-8.63-43.54-13.57-65.13-17.88-77-38.25-153.74-51.34-231.8a434.08,434.08,0,0,1-3.68-79.91c1.65-42.46,8.76-84.59,17.53-126,1.8-8.95,3.84-17.76,5.07-26.76,4.29-32.14,4.28-64.86,1.46-97.16-.34-3.91-1.2-11.62-1.67-15.5a64.92,64.92,0,0,0-3.63-14c-3.45-9.45-8-18.92-12.44-28.39-18.44-37.9-36.13-76.66-50.36-116.46-41.32-114.59-61.79-235.54-73.52-356.41-4.75-55.39-6.79-111.54.54-166.81,7-55.61,27.18-108.39,49.22-159.49,24.38-55.62,58.32-114.93,82.21-170.65a257.1,257.1,0,0,0,10.41-29c11.21-46-10.85-106.49-23-151.68-3-10.88-5.36-20.19-7.36-31.14-4.11-20.39-9.68-40.79-15-61-8-30.09-15.63-61.6-23.62-91.72l5.35-1.51c4.48,19.34,16.19,70.07,20.13,87.74,2.07,9.15,1.35,18.73,1,27.94q-.84,16.82-3.21,33.46c-7.6,49.61-16.68,99-26.32,148.2-.75,3.68-1.85,9-2.47,12.24-1,5.22-1.77,10.75-2.45,16.07-4,33.28-5,67.3-8.43,100.83-1.09,7.08-3.47,13.63-5.61,20.31-28.31,80-62.16,158.4-94.54,236.82-3.68,8.53-5.79,17.6-7.35,26.76-1.64,10.22-2.46,21.12-.72,31.21l1.54,8.17c1.49,8.21,3,16.79,4.09,25,2,16.93,4.38,35.37-.83,52.19a100.29,100.29,0,0,1-11.48,23.84c-1,1.56-4.94,7.59-5.61,9.12-5.24,14.17-7.25,29.35-10.11,44.31-1.44,7.77-2.73,16.74-4,24.62-1.79,10.09-4.94,31.42-17.08,34.09-3.56.75-7.25-.88-9.64-3.31-2.78-3.07-2.91-6.76-3.35-10.29-.7-10.07.15-20.13.93-30.09,1-11.22,2.23-22.3,3.72-33.46l10.48,1.7c-5.36,27.69-10.64,55.41-16.46,83-.71,2.82-1.16,6-2.25,8.86a17.16,17.16,0,0,1-8.22,8.21c-7.37,3.53-14.23-1.3-16.68-8.43-2.23-6.06-1.54-12.48-.85-18.56,4-25.9,9.79-51,12.38-76.93l9.73,1.58c-4.31,20.16-8.65,40.4-13.44,60.55-2.41,10.08-4.88,20.14-7.82,30.22-3,9.44-6.41,23-18.09,25.09-6.64,1-11.87-5-12.91-11-1-4.71-.52-8.82.07-13.24.57-3.68,1.21-8,1.87-11.63,5.47-30.57,11.83-60.89,18.15-91.27l9.22,2-3.45,14.88c-4.42,20.11-10.07,40.07-18,59.13-3.33,7.43-6.48,15.58-12.68,21.46a8.9,8.9,0,0,1-7.22,2.41,12.48,12.48,0,0,1-9.33-7.28c-1.92-4.46-1.56-9.24-1.27-13.58.48-5.38,1.37-10.45,2.24-15.52,4-24.92,11.87-49.52,14.07-74.55a62.94,62.94,0,0,1,3-16.15,38.73,38.73,0,0,1,7.26-12.49,3,3,0,0,0-.14,1.59l5.79,3.71c-2.18,1-3.15,3.32-4.18,5.7a72,72,0,0,0-3.09,10.37c-1.81,7.43-3,15.37-5,22.84-3.76,12-10.61,23.8-21.67,30.52-10.67,6.37-22.69,1.08-23.46-11.88-.85-11.48,3.57-21.47,5.82-32.23,1.1-8.19.19-16.64-.2-25l-.15-2.94-.06-1.49,0-.75c0-.1,0-.29,0-.48a18.07,18.07,0,0,1,2.13-7.89c3.69-7.33,8.62-12.73,11.9-19.77a32.7,32.7,0,0,0,3.09-9.62c.42-3.91.28-7.89,1.17-11.74,2.32-12.21,10-23.1,17.74-32,10.07-11.52,20.28-23,29.17-35.34,3.39-5.09,7.44-9.94,8.3-15.93,9.48-77.25,15.19-155.18,22.72-232.67,4.51-53.81,12.68-109.32,37.74-158,3.47-7,7.13-13.8,10.61-20.6,10-29.26,17.21-67.86,22.34-100.88,7.94-51.69,13-103.87,17.49-156,3.47-34.78,4-69.84,7.6-104.71,8-86.27,55.15-123.33,135.59-145.64,21-6.2,42.12-11.41,62.83-18.11a103.18,103.18,0,0,0,11.69-4.61c39.47-17.84,61.4-59.18,72-99.55,4.54-16.71,7.25-33.73,9.7-51l9.35,1.43Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2196.53,1184.19c2.54,27.21,3.78,54.67,4.62,82,2,82,1.19,164.08-5,245.87-4.41-54.53-5.6-109.24-6-163.91-.2-47.83.61-95.69,3.87-143.43.43-5.79,1.09-14.72,1.69-20.49Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2100.89,1506c.67,5.47,1,10.73,1.69,16,1.23,9,2.8,16.91,10.49,21.75a54.63,54.63,0,0,0,10,4.42c1.3.44,2.65.9,4.07,1.51a26.28,26.28,0,0,1-3.92,2.16c-11.41,4.82-24.24-.24-28.53-12.06-4.12-11.3-1.14-24.56,6.15-33.78Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2023,1100.79c16.26,6.52,44.17,19.7,60.65,12.83,5.14-2.12,7.84-6.83,10.72-11.48,15.46-26.74,24.58-56.07,35.86-84.84-2.93,30.88-11.21,66.55-27.19,93.38-18.06,32.27-61,9.78-80-9.89Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M1840.89,1361.21c3.17,4.34,6,8.9,9.58,12.46,2.91,2.69,4.74,3.87,8.35,3,9.39-3.12,16-8.35,21.9-17.14a17.77,17.77,0,0,1,.28,9c-1.9,9.49-10,17.19-19.22,19.77-15.87,4-24.43-13.74-20.89-27.06Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2059.78,2418.74c10.45,13.88,15.29,32.09,14.26,49.46-.5,7.25-2.7,14.25-5.14,21a122.72,122.72,0,0,1-7.25,16.5,48.62,48.62,0,0,1-3.23,5.24,179,179,0,0,1,1.36-23.91c.92-7.47,2.39-14.79,2.4-22.27.37-15.3-1.76-30.29-2.4-46Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2114.17,2387.85c.66,20.61-1,41.27-1.07,61.72.09,20.5,1.94,40.68,3.88,61.35a86.13,86.13,0,0,1-6.86-14.38c-13-34.72-12-75.12,4.05-108.69Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2095,3100.79c7.49,40.23,9.14,81.25,6.47,122.1a96.86,96.86,0,0,1-2.55,16c-5.06,19.23-12.1,38.12-13.51,57.82-.42,8.11.15,17.44,5.87,23,2.74,2.74,6.76,4,10.49,5.06,54.63,15.79,39.14-41.15,31.88-73.23-7.38-29.61-15.71-60.31-12.78-91.21a158.11,158.11,0,0,1,5.28-30.39c2,20,3.24,40.17,6.51,59.94,5,35.3,19.61,68.73,22.4,104.54,1.74,27.57-10.44,49.15-40.83,46.91a78.84,78.84,0,0,1-16.35-3.1c-6-1.67-11.76-4.09-16.26-8.62-19.23-19.37-5.57-57.13,1.27-79.55,2.58-8.24,5.55-16.16,6.6-24.67,1.46-11,2-22.2,2.32-33.49.71-30.4.59-60.58,3.19-91.07Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2147.87,1594.06c47.11,52.18,65.83,128.61,48.25,196.77-10.53,42.46-37.34,83.73-79.35,100.21-33.31,13.58-71,9.86-104.35-1.54-22.79-7.78-44.32-18.89-64.46-32,19,9.46,38.49,18,58.64,24,38.7,12,84.1,14.85,119.5-7.34,53.21-33.67,69.86-103.77,64.82-163.32a247.37,247.37,0,0,0-43.05-116.85Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2270.46,653.2c4.26,45.93,19.8,105,58.66,133.76a81.11,81.11,0,0,0,24.43,12.15c40,12.73,81.84,20.21,119.46,40,41.38,21.18,66.55,58.73,73.8,104.25,5.47,34.11,5.64,68.62,8.39,102.89,6.53,76.57,13.13,153.53,28.67,228.87,3.29,15.28,8.52,36.06,12.9,48.53,7.14,13.81,14.64,27.73,20.48,42.26a311.49,311.49,0,0,1,14.35,45c7.39,30.55,11,61.82,13.66,92.77,7.49,77.1,13.15,154.68,22.63,231.54l.23,1.31a11.81,11.81,0,0,0,1.06,3.11c2.33,4.91,5.65,9.4,8.91,13.89,6.84,9.17,14.37,18,22,26.68,8,9.08,16.13,18.1,20.67,30,2.33,5.43,3.22,12.67,3.33,18.37.77,9.06,6.21,16.47,11.16,24.07,2.84,4.4,6.13,9.22,6.13,15-.21,6.9-.92,14.38-1,21.19a52.25,52.25,0,0,0,.77,10.58c.74,3.53,2.13,7.41,3,11.07,2.43,10.08,6.35,25.65-4.49,32.44-11.85,6.38-23.56-4.84-29.75-13.89a61.93,61.93,0,0,1-9.67-23c-1.64-7.48-3.47-14.93-5.73-22.14-1.65-5.19-3.43-10.43-6.2-14.91a9.64,9.64,0,0,0-1.21-1.55c-.33-.38-.62-.4-.13-.26l5.38-6.11a66.39,66.39,0,0,1,7.9,13.11,61.23,61.23,0,0,1,4.41,16.3c.59,5.12.88,10.42,1.67,15.51,4,25.76,11.59,50.9,14.86,76.91.56,6.05,1.54,12.62-1.78,18.37a12.57,12.57,0,0,1-8.22,5.6c-5.32,1-9.22-3.66-11.79-7.4-6.05-9.44-9.66-19.25-13.42-29.52a372.27,372.27,0,0,1-12.87-45.67l-3.53-15.24,9.22-2c7,34.23,14.54,68.35,20,102.89.58,4.43,1.12,8.53.08,13.25-1.11,6-6.14,11.92-12.92,11-11.69-2.17-15.11-15.59-18.09-25.09-2.94-10.08-5.41-20.13-7.82-30.22-4.79-20.14-9.14-40.39-13.44-60.55l9.73-1.58c1.9,17.1,4.64,34.05,7.86,51,1.57,8.51,3.33,17,4.52,25.9.9,7.4,1.6,15.67-2.76,22.39a11.33,11.33,0,0,1-14.77,4.61c-4.3-2.15-7.83-5.74-9-10.53-6.69-29.74-12.1-59.67-18-89.56l10.48-1.71c1.49,11.16,2.76,22.25,3.73,33.46.77,10,1.62,20,.92,30.09-.43,3.53-.59,7.26-3.34,10.3-7.07,6.93-15.45,2.63-19.33-5-5.55-10.58-6.81-22.51-8.71-34-2.65-16.26-5.38-32.85-9.18-48.76-1.1-4.32-2.11-8.65-4-12.59-2.83-4.7-7.08-11-9.71-15.94-5-9.06-8.82-19.31-9.78-29.78-1.34-18.84,1.44-37.19,4.48-55.5l1.5-8.29,1.54-8.17a74.12,74.12,0,0,0,.9-15.37c-.71-14.45-3.39-29.18-9-42.59-32.38-78.42-66.22-156.8-94.53-236.82-2.22-7-4.83-13.94-5.73-21.39-3.19-31.79-4.28-64.11-7.84-95.66a292.67,292.67,0,0,0-5.39-32.4c-2.19-11-4.28-21.9-6.34-32.86-6.17-32.86-12.08-65.78-17.41-98.8-3.8-23.58-6.64-47.48-5.64-71.44.34-3.08.91-5.62,1.49-8.55l.87-4.13c5.74-26.22,12.6-55.5,18.51-81.6l5.58,1.58c-8,30.44-15.46,61-23.63,91.4-5.34,20.12-10.85,40.45-15,60.78-1.07,5.33-2,10.64-3.26,15.63-11.3,45.42-28.58,89.87-30.25,136.92a108.73,108.73,0,0,0,7.44,44.26c8.93,24.42,20.55,47.68,32.11,71.14,25,50.12,54.12,105.18,73.48,157.36,13.54,34.52,24.92,70.17,30.42,107,11.18,73.33,5.8,148-2.6,221.36-16.9,146.39-50.17,292.57-117.37,424.59-6.45,13.94-13.77,27.65-17.3,42.35l-.33,1.71-.26,1.69-.45,3.85q-.48,3.86-.84,7.72c-3.8,41.12-3.87,83.07,5.07,123.55,13.32,61.89,23,125.72,17.36,189.2-1.73,21.14-5.89,42.06-10,62.83-16.31,82.39-39.12,163.35-55.76,245.57-2.65,14.79-3.76,31.46-5.21,46.35-.78,10-1.52,20.15.11,29.88.21,1.16.45,2.31.73,3.44l1,3.68a110.33,110.33,0,0,1,3.2,24.79,114.79,114.79,0,0,1-1.82,24.86c-1.31,7.27-5.66,15-6.34,22.23-.35,3.46-.46,6.39,1.2,9.15-.06-.06.32.39.68.76,1.58,1.62,3.54,3.43,5.42,5.17l5.79,5.27c11.72,10.64,23.6,21.42,34.41,33.16a122.69,122.69,0,0,1,10.47,12.86c2.42,3.54,5,8.13,5.76,12.73a47.86,47.86,0,0,1-24,53.34c-20.59,11.2-120.69,13.46-139,3.49-11-5.8-22.06-13.7-27.33-25.68-7.06-15.82-5.61-34.17-1.4-50.39,4.47-17.84,14.79-33,15-51-1.26-23.78-4.67-47.78-1.4-71.69a55.21,55.21,0,0,1,4.76-16.2c1.42-4.05,2.06-9.44,2.52-14,1.83-20.5,1.39-41.52.85-62.2-.55-14.5-1-29.1-2.48-43.52-4.33-35.54-14.07-140.6-18.09-175.47-.75-6.37-1.42-13-2.3-19.39-.65-4-1.37-7.9-1.71-11.89a1168.77,1168.77,0,0,1-4.1-126.64c.55-31.82,12-62.16,14.93-93.57,3.52-29.52.65-63.7-.57-93.53-1.83-32.52-2-68.27,2.59-99.61,0-6.15.25-20.06.27-26.46.22-31.44.23-62.88-.67-94.28-3.39-73.36-11.19-146.5-13.52-220-.93-29-2.17-58.2.21-87.22,3.51-34.32,9.84-68.51,21-101.22l8.87,3.28c-1.66,4.75-3.23,9.79-4.62,14.69a468.3,468.3,0,0,0-14.72,76.42,302.66,302.66,0,0,0-1.91,31c-.73,94.41,10.51,188.5,15.12,282.74,1.1,36.73,1,73.7.73,110.45l-.09,7.94,0,2v1c-.09,1.48-.09,1-.14,1.55-6.92,47.37-1.79,96.79-.1,144.52a341.5,341.5,0,0,1-1.5,48c-2.26,23.67-8.88,46.72-12.71,69.95-2.75,17.87-2.29,36-2.26,54.08.59,32.5,1.64,65.3,4.94,97.6,6.38,42.68,14.89,140.65,19.73,184.11.7,6.11,1.17,12.31,2.1,18.3.58,4.44.82,8.83,1.14,13.24,1.75,31.83,3.21,63.46.66,95.36-.27,2.7-.59,5.42-1,8.19a49.38,49.38,0,0,1-2.14,8.73c-.16.4-.29.78-.49,1.22l-.5,1.1a41.49,41.49,0,0,0-3.16,11.55c-2.83,21.64,0,43.69,1.38,65.51,1,9.91-1.43,20.29-4.73,29.33-3.57,10-7.75,19.21-10.45,29.22a81.64,81.64,0,0,0-2.7,29c.89,9.32,4.41,17.72,11.37,24,3.95,3.77,9.28,6.69,14.35,9.54.3.16.34.16.52.25a17.87,17.87,0,0,0,2.78.94,133.45,133.45,0,0,0,22.22,2.88c15.48.92,31.07.87,46.59.24,10.36-.44,20.72-1.16,30.91-2.4,5.09-.64,10.15-1.4,15-2.45a37.12,37.12,0,0,0,10.37-3.45,36.06,36.06,0,0,0,17.87-36.45,33.78,33.78,0,0,0-1.42-6.32c-2.72-6.38-7.85-11.73-12.57-17.15-10.53-11.46-22-21.83-33.62-32.37l-5.86-5.32c-3.14-3.17-7.29-6.06-9.32-10.49-4.52-10.28-.8-22,2.85-31.51,3.23-8.6,3.6-19.25,3.45-28.67a98.45,98.45,0,0,0-2.8-22,80.58,80.58,0,0,1-2-8.17c-2.62-16.35-.19-32.54,1.2-48.73.82-7.47,1.55-17,2.58-23.77,2-13.15,4.91-26.15,7.74-39,16.27-71.67,34.81-142.75,49.32-214.73,4.05-20.41,8.14-40.75,9.84-61.5,5.54-62.42-4-124.71-17.07-185.72-9.17-41.64-9.15-84.89-5.21-127.18.47-4.56,1-9.55,1.67-14.1a96.27,96.27,0,0,1,5.5-18.09c4-10.07,8.62-19.57,13.15-29.07,18.37-37.68,35.41-75.68,49.41-115.15,35.31-98.48,54.5-202,67.1-305.68,5.25-44.07,8.93-88.41,8.94-132.78,0-38.9-3.07-78-12-115.93-5.8-25.34-14.44-49.9-23.79-74.17-5.54-14.68-11.38-29.1-17.78-43.44-24.39-55.53-58.13-114.52-81.86-170.44a253,253,0,0,1-10.69-30.45c-11.31-49.31,10.79-109.32,23.62-156.89,2.07-7.51,4.07-15,5.62-22.54,10.76-54.34,27.51-107.09,45.24-159.45l5.58,1.58c-8.2,28.62-16.76,57.45-20.34,87.06a44.31,44.31,0,0,0-.05,9.9c1.24,10.78,3.64,21.7,5.69,32.56,4.22,21.79,7.35,43.78,11.31,65.63,6.69,38.37,14.08,76.67,21.76,114.85,4.17,25.46,5.84,57.67,7.82,83.68.69,9.6,1.36,19.3,2.41,28.85l.1,1,.12.74c.08.51.22,1.12.34,1.7,2.59,10.48,6.47,20.77,10.08,31,23.08,62.5,48.67,124.17,74,185.84l12.76,30.85a122.07,122.07,0,0,1,5.93,16.36c4.47,17,7.12,34.6,4.24,52.23-2,10.63-4.23,22-5.67,32.64-1.83,15.79-4.28,31.93.22,47.21,2.94,9.9,9,19.53,14.61,28.27,3.23,5.19,4.64,11.55,6.11,17.34,3.89,16.6,6.49,33,9.15,49.7,1.24,7.74,2.26,16.38,4.59,23.76,1.25,3.46,2.31,7.23,4.89,9.53.11.06.09,0-.07,0a1.56,1.56,0,0,0-.5,0c-.09,0,0,0,.14-.1s.09-.07.14-.11l.08-.06-.1.1a1.9,1.9,0,0,0-.39.52c1.33-5,.95-10.74.9-16s-.53-10.91-1-16.39c-.9-11-2.11-22-3.52-32.92l10.49-1.71q4.79,25.55,9.71,51.06c2.57,12.82,4.9,26,8,38.69.71,1.31,2.43,3.12,3.93,3.26.1,0,.06,0,.25-.1a3.23,3.23,0,0,0,.86-1c2.75-4.51,1.77-10.39,1.27-15.59-3.93-25.47-9.64-51.25-12.14-77.1l9.73-1.58c7.1,32.58,13.24,65.49,23.15,97.25,1.44,3.84,3.16,8.32,6.31,10.5a3.48,3.48,0,0,0,1.43.63.78.78,0,0,0,.59-.11,3,3,0,0,0,.93-1.08,15.6,15.6,0,0,0,1.06-8.55c-.14-2.26-.69-5.1-1-7.35-5.47-33-12.45-65.75-19.21-98.5l9.22-2c2.2,9.07,4.86,21.58,7.08,30.38A315,315,0,0,0,2700.4,1981c2.74,5.86,5.13,12.08,9.57,16.4.23.18.4.23.24.18a1.82,1.82,0,0,0-.84,0c-.22.06,0,0,.08,0a3,3,0,0,0,2-1.28,10.89,10.89,0,0,0,1-5.15,55,55,0,0,0-.48-7.19c-.6-5-1.51-10.07-2.42-15.18-4.48-25.68-12.26-50.91-14.05-77.12a49.4,49.4,0,0,0-10.29-24.74,11.44,11.44,0,0,1-1.54-2.76l-3-8,8.4,1.88c3.34.68,5.44,3.35,7.14,5.79,3.44,5.4,5.37,11.37,7.29,17.23,2.52,8.1,4.48,16.21,6.23,24.4,2,10.2,11.47,28.18,22.48,30,10.56.54,3-22.55,1.59-28.23-4.31-12.75-2-26.61-1.58-39.71v-.42a3.93,3.93,0,0,0-.09-.73,15.63,15.63,0,0,0-1.67-4.07c-4.9-8.56-11.36-15.82-14.29-26.45-1.18-3.76-1.26-8.7-1.5-12.29a39.71,39.71,0,0,0-2.43-10.13c-3.83-10.11-11.63-18.92-19-27.15-7.78-8.87-15.34-17.78-22.44-27.29-4.45-6.39-9.75-12.82-11.58-20.68-.84-4.44-1.32-9-1.88-13.32-10.17-88.67-15.74-178-26-266.59-5.23-38-14.36-75.7-31.9-110-3.46-7-7.18-13.89-10.79-21A433,433,0,0,1,2575,1277c-15.66-75.84-22.3-153-28.87-230.07-2-25.6-2.81-51.42-5.17-76.88-5.81-79.9-42.77-118.75-119.18-141.5-23.85-7.46-48.63-13.34-72.59-21-53.27-17.48-75.45-77.27-84.76-127.75-1.51-8.62-2.74-17.2-3.4-26l9.44-.57Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2283.75,1506c7.29,9.22,10.27,22.49,6.15,33.78-4.29,11.82-17.12,16.88-28.53,12.06a26.28,26.28,0,0,1-3.92-2.16c1.42-.61,2.77-1.07,4.07-1.51a54.93,54.93,0,0,0,10.05-4.42c7.69-4.84,9.26-12.76,10.49-21.75.67-5.27,1-10.53,1.69-16Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2361.62,1100.79c-19,19.67-62,42.16-80,9.89a133.09,133.09,0,0,1-8.13-15.68c-10.54-24.65-16.59-51.09-19.06-77.7,11.27,28.77,20.4,58.1,35.86,84.84,2.88,4.64,5.58,9.36,10.72,11.48,16.48,6.87,44.36-6.3,60.65-12.83Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2543.75,1361.21c3.54,13.32-5,31.06-20.89,27.06-9.21-2.58-17.33-10.28-19.22-19.77a17.77,17.77,0,0,1,.28-9c5.92,8.79,12.52,14,21.9,17.14,3.61.89,5.44-.29,8.35-3,3.56-3.56,6.4-8.12,9.58-12.46Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2324.85,2418.74c-.63,15.7-2.76,30.71-2.39,46,0,7.48,1.48,14.8,2.4,22.27a179,179,0,0,1,1.36,23.91,47.08,47.08,0,0,1-3.23-5.24,122.72,122.72,0,0,1-7.25-16.5c-2.44-6.73-4.64-13.73-5.14-21-1-17.37,3.81-35.57,14.25-49.46Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2270.47,2387.85c16.06,33.57,17,74,4.05,108.69a86.13,86.13,0,0,1-6.86,14.38c1.94-20.67,3.79-40.86,3.88-61.35-.09-20.46-1.73-41.11-1.07-61.72Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2295.62,3099.79c2.6,30.49,2.48,60.67,3.19,91.07.36,11.29.86,22.47,2.32,33.49,1,8.51,4,16.43,6.59,24.67,6.85,22.41,20.51,60.2,1.28,79.55-4.5,4.53-10.29,6.95-16.26,8.62a78.84,78.84,0,0,1-16.35,3.1c-30.32,2.26-42.6-19.32-40.83-46.91,2.79-35.81,17.42-69.24,22.4-104.54,3.27-19.78,4.46-39.94,6.51-59.94a158.11,158.11,0,0,1,5.28,30.39c1.77,20.59-.91,41.56-5.6,61.59-5.39,24.39-13.18,48.27-14.79,73.15-1.3,29,12.44,37.33,39.49,29.7,3.73-1,7.75-2.32,10.49-5.06,5.72-5.57,6.29-14.89,5.86-23-1.4-19.7-8.44-38.59-13.5-57.82a97,97,0,0,1-2.55-16c-2.67-40.85-1-81.87,6.47-122.1Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2246.77,1594.06c-41.37,59.08-56.21,137.55-33,206.48,27.73,81.5,94.38,100,171.6,75,19.87-6.24,39.09-14.75,57.94-24.09a316.59,316.59,0,0,1-56.1,29.29c-51.55,20.69-111,22.68-152-20.15-22.83-23.7-35.32-55.87-40.44-87.74-10.5-63.24,9.05-131.16,52-178.77Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2243.11,721.41c-2.8-6.59-.5-13.7.59-20.39a282.63,282.63,0,0,1,10.74-39c1.09-3.25,2.47-7.42,4.35-10.16,3.39-5.53,7.84-9.22,12.2-13.67,6.75-7.61,11.42-17,15.54-26.3a231.92,231.92,0,0,0,15.28-51.73,4.24,4.24,0,0,1,8.27-.53,53.08,53.08,0,0,0,3.19,7.76c.9,1.57,1.68,2.94,2.92,3.59,1,.28,2.8-.94,4-1.87,4.27-3.43,5.27-8.79,6.81-14.1.83-3.17,1.64-6.51,2.8-9.93a55.61,55.61,0,0,1,3.18-7.36,114.52,114.52,0,0,0,7.17-20.25,65.08,65.08,0,0,0,1.57-9.09c.24-3.68.48-7.32-1.09-9.87a1.36,1.36,0,0,0-.74-.47,7.08,7.08,0,0,0-4.84.69c-2.15,1.23-4.59,2.55-6.88,3.94-.11.12,0-.2-.12,0-2.4,2.24-4.47,4.72-6.72,7.12l-1.11-.5c.27-2.63.78-5.2,1-7.85l.12-1.34.05-.68a27.69,27.69,0,0,1,1.28-4c3.19-7.58,12.75-11.71,20.69-9.59,10.84,3,11.87,15.38,10,24.17a128.33,128.33,0,0,1-12.19,33.27c-4.36,7.58-5.29,16.17-9.28,24.25-2.87,6.27-11.37,13.91-18.8,10.94-6.2-2.78-8.53-10.51-10.72-16.22a3.88,3.88,0,0,0,7.27-.38c.18-.7.1-.48.11-.47-.27,1.74-.55,3.47-.87,5.19-4.83,25.08-13.27,59-30.32,78.58-4.65,4.86-10.5,9.4-13.07,15.66-5.35,13.85-11,27.53-15.09,41.78-2,6.17-2.69,13.91-7.35,18.76Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2076.57,504.76a28.93,28.93,0,0,1-7.2-8.14c-.89-1.39-1.71-2.95-2.47-4.37a6.81,6.81,0,0,0-4.42-2.81,1.71,1.71,0,0,0-1.41.28,3.9,3.9,0,0,0-.82,1.15,12.12,12.12,0,0,0-.89,3.05c-2.67,15.73,1.82,33,7.37,47.94a89.26,89.26,0,0,1,4.87,18c1.07,5.34,1.25,10.35,5.08,14,1.72,1.33,4.91,1.61,6.57.15a6,6,0,0,0,1.68-4.21c.23-4.45,5.39-7.33,9.35-5.47,4.13,1.64,4,6.3,4.9,9.9,5.52,24.57,15.42,53.22,36.19,68.58a15,15,0,0,1,2.92,2.35,109.27,109.27,0,0,1,9.76,12.69c9.49,14.09,11.91,29.07,12.65,45.53.22,3.22.09,6.91.1,10.09a13.52,13.52,0,0,1-.75,5.22l-1.38.26c-2.43-2.85-2.89-6.3-4-9.67-.82-2.75-1.6-7-2.17-9.92a97.48,97.48,0,0,0-5-18.62,83.39,83.39,0,0,0-10.51-18.23c-2.43-3.27-5-6.44-7.67-9.5l.17.19a3.71,3.71,0,0,0,.54.44l-.15-.11a69.27,69.27,0,0,1-18.31-18.92c-12.58-19-18.08-41.78-21.6-63.82a1.86,1.86,0,0,0,1,1.17,1.65,1.65,0,0,0,2.15-1.29c-.87,11.13-12.85,16-21.51,9.18-5.23-4.42-6.73-12.17-8.38-18a73.3,73.3,0,0,0-3.18-9.06c-2.8-6.2-6.33-12.1-8.38-18.61a111.29,111.29,0,0,1-4.8-20.77c-1.19-10.56-2-29.21,9.83-34.1,7.89-2.92,16.26,2.14,18.84,9.64a46.52,46.52,0,0,1,1.07,15.83Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2150.68,617.21s36.22-16.34,49.51-16.34,44.45,16.34,44.45,16.34-31.66-5.61-44.43-5.61S2153.74,615.68,2150.68,617.21Z" data-v-ea10dcbd></path><path class="cls-fullbody-female-3" d="M2082.68,524.9c-5.14-6.65-8.2-14.43-10.95-22.22a183.5,183.5,0,0,1-8.55-33.83c-9.66-59.09,6.44-127.5,59.39-161.48,28.69-18.55,63.84-24.9,97.52-22.32,27.2,3.1,53,15,73.94,32.41,26.34,21.77,43.32,53.93,47.54,87.71,5.42,39.79-4.43,81.36-25.14,115.19,3-12.87,6.29-25.43,8.93-38.05a315.6,315.6,0,0,0,5.81-37.86c3.88-37.67-5.2-76.66-31.24-104.94-20.9-22.91-50.16-39-81.08-42.53-31-2.39-63.7,3.08-90.3,19.75C2084,344.42,2067,398.1,2070.28,448.46a226.24,226.24,0,0,0,7.44,47.26c2.6,9.51,5.44,19.13,5,29.18Z" data-v-ea10dcbd></path></g>', 1))
      ], 16);
    };
  }
});

const FullBodyFemaleBackSVG = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ea10dcbd"]]);

const _hoisted_1 = { class: "body-diagram-container" };
const _hoisted_2 = { class: "body-diagram-container" };
const _hoisted_3 = { class: "selected-parts-container" };
const _hoisted_4 = {
  key: 0,
  class: "parts-section"
};
const _hoisted_5 = {
  key: 1,
  class: "parts-section"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExposureAssessment",
  setup(__props) {
    const formRef = ref(null);
    const exposureAssessmentForm = useExposureAssessmentForm().exposureAssessmentFormSection;
    const patientStore = useDemographicsStore();
    const patientGender = computed(() => patientStore.patient?.personInformation?.gender);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(exposureAssessmentForm),
                ref_key: "formRef",
                ref: formRef
              }, {
                fullBodyFront: withCtx(({ formValues, updateValue }) => [
                  createBaseVNode("div", _hoisted_1, [
                    _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "diagram-title" }, "Front View", -1)),
                    patientGender.value === "M" ? (openBlock(), createBlock(FullBodyMaleFrontSVG, {
                      key: 0,
                      currentValues: formValues,
                      popoverType: "fullBody",
                      onValueChanged: (fieldName, value) => updateValue("bodyPartsDataFront", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                    patientGender.value === "F" ? (openBlock(), createBlock(FullBodyFemaleFrontSVG, {
                      key: 1,
                      currentValues: formValues,
                      popoverType: "fullBody",
                      onValueChanged: (fieldName, value) => updateValue("bodyPartsDataFront", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                  ])
                ]),
                fullBodyBack: withCtx(({ formValues, updateValue }) => [
                  createBaseVNode("div", _hoisted_2, [
                    _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "diagram-title" }, "Back View", -1)),
                    patientGender.value === "M" ? (openBlock(), createBlock(FullBodyMaleBackSVG, {
                      key: 0,
                      currentValues: formValues,
                      popoverType: "fullBody",
                      onValueChanged: (fieldName, value) => updateValue("bodyPartsDataBack", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                    patientGender.value === "F" ? (openBlock(), createBlock(FullBodyFemaleBackSVG, {
                      key: 1,
                      currentValues: formValues,
                      popoverType: "fullBody",
                      onValueChanged: (fieldName, value) => updateValue("bodyPartsDataBack", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                  ])
                ]),
                displayFullBodyParts: withCtx(({ formValues }) => [
                  createBaseVNode("div", _hoisted_3, [
                    formValues["bodyPartsDataFront"]?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      _cache[2] || (_cache[2] = createBaseVNode("h4", null, "Front View - Selected Areas:", -1)),
                      createVNode(_sfc_main$s, {
                        currentValues: formValues["bodyPartsDataFront"]
                      }, null, 8, ["currentValues"])
                    ])) : createCommentVNode("", true),
                    formValues["bodyPartsDataBack"]?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      _cache[3] || (_cache[3] = createBaseVNode("h4", null, "Back View - Selected Areas:", -1)),
                      createVNode(_sfc_main$s, {
                        currentValues: formValues["bodyPartsDataBack"]
                      }, null, 8, ["currentValues"])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ExposureAssessment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-949c7859"]]);

export { CirculationAssessment as C, DisabilityAssessment as D, ExposureAssessment as E, _sfc_main$m as _, _sfc_main$e as a };
