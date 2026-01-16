import { d as computed, q as defineComponent, r as ref, N as createBlock, y as openBlock, E as unref, bJ as IonCard, B as withCtx, z as createVNode, ba as IonCardContent, x as createElementBlock, A as createBaseVNode, bz as createStaticVNode, cF as mergeProps, v as resolveComponent, G as createCommentVNode, a4 as createTextVNode, bW as chevronBackOutline, df as chevronForwardOutline, aY as personOutline, cn as checkmarkCircle, C as toDisplayString } from './vendor-wM1cIaYi.js';
import { C as StandardForm, y as StandardValidations, c7 as createPopover, _ as _export_sfc, u as useDemographicsStore } from '../index-Cd3-tqLQ.js';
import { _ as _sfc_main$a, a as _sfc_main$b, L as LungFrontMaleSVG, b as _sfc_main$c } from './DisplaySelectedBodyParts.vue_vue_type_script_setup_true_lang-CVNzKfMw.js';

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
        message: "",
        backgroundColor: "skyblue",
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

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
        componentType: "Alert",
        header: "Use the diagram below to select the abnormal breath sounds area",
        message: "",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["breathing_sounds"] === "Abnormal"
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Slot",
        slotName: "breathingSoundsAbnormality",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["breathing_sounds"] === "Abnormal"
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

const _hoisted_1$5 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "LungFrontFemale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bodyParts = ref([]);
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      const popover = await createPopover(_sfc_main$a, e, {
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
        createBaseVNode("g", _hoisted_1$5, [
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
        _cache[7] || (_cache[7] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-743b0961><path class="cls-lungFrontFemale-3" d="M2063.94,1163.74c.63,9.15-.43,18.25-1.64,27-5.74,28.29-10.35,59-18.84,87.28-5.37,19.46-11.3,39-20.15,57.45a173.59,173.59,0,0,1-18.29,30.16c-5.29,6.84-11,13.92-16.59,20.51-23.11,26.93-47.64,53.54-78.4,72a115.23,115.23,0,0,1-18.15,8.59c-26.4,10.06-53.33,20-80,29.44-18.29,6.57-37.45,12.73-55.44,19.53l-7.06-17.8c9.58-3.77,18.85-6.92,28.16-10.23,32.39-11.33,64.8-23.28,96.83-35.64,2.49-1,8-3.06,10.33-4,18.12-6.74,34.19-19.78,48.52-32.9,21-19.66,40.07-41.73,57.45-64.69,16.42-22.63,25.31-50.71,32.67-78,2.11-8,5.52-20.12,7.14-28.13,3.93-17.51,7.65-42,11-57.11,1-8,1.82-15.3,1.31-22l21.15-1.49Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2338.27,1157.2c2.57,51.33,13.1,102.26,32.32,150,14.53,37.86,34.52,74.2,64.59,101.64a186,186,0,0,0,23.37,18.45c34.07,22.33,76.2,31.15,113.68,47.25,18.54,7.66,37.2,15.5,54.58,25.76l.94.58.46.29a.61.61,0,0,1,.36.49c.29.63-.52,3.14-1,4.38l-.27.68-.4.88c-.55,1.17-1.3,2.83-1.93,4-.41.53-1.12,1.44-1.51,1.91-.81,1-2,2.42-2.82,3.42s-2.22,2.46-2.66,2.54a.45.45,0,0,1-.49,0c-3.63-1.93-7.33-3.6-11.15-5.27-26.35-11.3-73.85-29.55-101.05-40.51-25.27-9.72-50.52-21.77-71.35-39.57-37.93-31.13-63.06-75-80.24-120.2-19.86-49.51-30.63-102.57-33.63-155.67l18.24-1Z" data-v-743b0961></path><path class="cls-lungFrontFemale-4" d="M1852.91,2131.45a13,13,0,0,1,3.11,1.72c4.47,3.36,17.33,14.93,8.72,31.86-10,19.7-30.58,11.52-38,4.31-7-6.83-11.62-19.93-.19-32.75C1835.79,2126.21,1848.42,2129.73,1852.91,2131.45Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2145,2323.67c6.8,68.84-11.12,147.17-52.49,203.27-28.33,38.37-67.1,69.75-111.64,87.15-7.41,2.63-14.93,5.59-22.81,6.23,3.61-1.37,6.87-3.59,10.2-5.55,46.28-29.35,86.75-68.18,116.61-114.1a323.26,323.26,0,0,0,25.67-49.8c16.91-40.72,27.4-83.6,34.46-127.2Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2231.65,2323.67c7,43.59,17.55,86.48,34.45,127.2a325.5,325.5,0,0,0,25.67,49.8c29.86,45.92,70.34,84.75,116.62,114.1,3.33,2,6.58,4.18,10.2,5.55-7.88-.64-15.41-3.61-22.82-6.23-44.54-17.4-83.3-48.78-111.64-87.15-41.37-56.13-59.28-134.39-52.48-203.27Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2033.88,2740.14c-9.8,75.45-24,150.39-34.88,225.61-6.35,45.11-14.44,89.56-15.7,135.28-1.19-3.58-2.52-7.45-3.41-11.14-6.48-26.4-7-54-5.86-81a598,598,0,0,1,7.46-68.85c11.29-68.05,27.78-135.4,52.39-199.9Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2357.24,2740.14c24.61,64.5,41.1,131.85,52.39,199.9a598,598,0,0,1,7.46,68.85c1.16,27,.62,54.6-5.86,81-.89,3.69-2.22,7.55-3.41,11.14-1.26-45.72-9.35-90.17-15.7-135.28-10.87-75.23-25.08-150.16-34.88-225.61Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1857,1558.58c38.92,10.81,79.26,15.24,119.51,14.59,38.38-1.17,78.41-2.84,114.79,11.62,30.55,11.86,53.45,37.34,65.06,67.44-26.46-35-55.2-53.45-99-57.56-26.48-2.85-54-.87-80.68-.41-40.53-.11-87.27-10.41-119.68-35.68Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2527.94,1558.58c-32.42,25.27-79.15,35.56-119.68,35.68-26.72-.46-54.2-2.44-80.69.41-43.85,4.13-72.51,22.56-99,57.56,11.63-30.13,34.48-55.56,65.06-67.44,36.38-14.46,76.41-12.79,114.79-11.62,40.24.65,80.59-3.78,119.51-14.59Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2193.75,2888.47c-14.71-11.24-22-31.21-20.44-49.36.55-8.78,4.13-16.91,7.8-24.8,5.67-14.33,10-29.82,16.61-44.22,16.19,15.38,21.17,41.34,13.58,62.17-1.35,3.67-2.87,7.35-4,11.11-4.53,14.61-7.53,30.49-13.59,45.1Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1956.24,1419.82c6.07-31.5,37.13-89,74.55-86.78,12.16,1,22.47,10.19,27.4,20.75a46.9,46.9,0,0,1,3.4,10c1.24,5.57,2.45,11.14,3.53,16.74a612,612,0,0,1,10.34,76.12c.77,11.37,1.27,22.76,1,34.19-11.33-40.11-22.31-82.22-33.82-122.18-1.54-5.69-5.29-11.78-10.69-14.11-9.71-3.57-23,9.75-30.14,16.33-15.71,15.4-29.66,32.89-45.54,48.93Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2426.16,1418.64c-14.52-9.66-26.82-22-37.9-35.36-2-2.39-4.71-6-6.55-8.47A92.2,92.2,0,0,0,2367.9,1360c-11.48-9.7-20.76-10.17-27.2,4.73-1.33,3.69-2.15,7.55-3.32,11.29-10.62,37.08-20.88,76.49-31.41,113.68-.31-11.38.19-22.74,1-34.06s1.92-22.61,3.39-33.86q3.84-29.54,10.39-58.66c3.91-19.87,21.58-36.17,42.59-29.68,14.73,4.52,25.72,16.16,33.54,28.67,1.58,2.54,4.78,8.45,6.27,11.12,8.19,15,16.28,29.35,23.06,45.44Z" data-v-743b0961></path><path class="cls-lungFrontFemale-4" d="M2556.27,2131.29a14.72,14.72,0,0,0-3.9,2.16c-4.77,3.69-16.74,15.1-8.35,31.58,10,19.7,30.57,11.52,38,4.31,7-6.83,11.61-19.93.18-32.75C2573.24,2126.52,2561.09,2129.53,2556.27,2131.29Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2211.09,2042c11.18,60.16,36,118.81,78,163.89,68.32,73.71,174.89,111.22,274.17,94.33,43.44-7.67,85.62-27.83,113.84-62.19a271.45,271.45,0,0,0,26-36.52c38.84-64.47,44.86-147.06,16.58-216.76-10.81-23.53-21.55-46.9-30-71.54,12.9,16.45,23.37,34.52,33.66,52.58,2.59,4.5,5.17,9.31,7.39,14.07a258,258,0,0,1,21.11,140.75c-5.87,45.44-25.18,88.73-53.5,124.6-73.66,96-217.77,96.52-318.65,46.46C2284,2246,2213.4,2149.5,2211.09,2042Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2173.72,2042c-2.33,107.53-72.85,204-168.61,249.67-100.84,50.06-245,49.54-318.64-46.46-28.32-35.87-47.64-79.16-53.51-124.6a258.06,258.06,0,0,1,21.11-140.75c2.22-4.76,4.8-9.57,7.39-14.07,10.3-18.06,20.76-36.13,33.66-52.58-8.48,24.64-19.22,48-30,71.54-28.28,69.71-22.27,152.29,16.58,216.76a270.74,270.74,0,0,0,26,36.52c28.23,34.36,70.41,54.51,113.85,62.19,99.28,16.89,205.84-20.62,274.17-94.33,42-45.08,66.86-103.73,78-163.89Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1946.8,907c-6-12.16-11.57-26-16.71-38.64-3.95-9.66-7.61-19.76-10.67-29.75-21.85-72.68-30.76-151.29-14.18-226,15.91-68.46,58.7-131.33,119.61-167.46,60.45-36.49,132.53-48.06,202.14-45.39,59.91,3.74,117.19,29.15,163.56,66.57,81.31,65,115.59,169.11,104.45,270.81a407.35,407.35,0,0,1-52.59,160.29c7.14-27,14.58-53.76,20.48-80.94,11.64-53.15,18.77-108.22,11.33-162.42-10.46-80.71-59.92-153.56-130-194.52-34.43-20.43-73.38-34.88-113.36-38.29-125.6-7.62-249.53,37.26-298.4,161.56-27.65,70.25-21.89,149.33-8.39,222.35,3.86,20.52,9.59,40.15,14.4,60.62,3.06,13.21,6.23,27.86,8.34,41.26Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2114.41,1096.76a3.31,3.31,0,0,1,0-6.22,167.89,167.89,0,0,0,42-23.41c18.37-13.86,29.35,5.93,39.15,6.6,8.73,0,26.73-19.86,44.22-5.76,11.48,9.25,24.24,20.3,37.47,25a3.3,3.3,0,0,1,.09,6.18c-16.64,6.5-46.79,10.61-84.69,9.85C2151.47,1108.16,2135.12,1104.05,2114.41,1096.76Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2145,966.71c-8.11,9.58-16.79,23.42-10.61,35.88,1.78,3.45,4.32,6.74,7.66,8.59,7.47,4.18,17.24,1.17,24.57-2.78a8.61,8.61,0,0,1,9.38.71c11.15,7.34,25,9.61,35.88.71a8.59,8.59,0,0,1,9.11-1l.78.33c8,3.39,17.13,6,24.91,1.31,3.87-2.43,6.88-6.2,9.33-10,4.18-6.24,2.19-13.68-1.13-20.31a73.18,73.18,0,0,0-7.66-11.81c11.13,6.82,22.11,20.39,16.76,34.12-9.46,21.23-25.91,23.53-45.58,14.54l-1.25-.53,0,0s.08,0,.1,0l-.31.22c-14,11.34-32.1,8.8-46.19-.84-15.7,9-35.57,9.85-43.29-10.2-6-15.22,5.05-31,17.57-38.89Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1983.71,764.27s42.19-20.71,84.61-1.31,68.87,32.6,77,21.07.3-28.53-38.17-32.56C2056.42,746.15,2016.33,739.84,1983.71,764.27Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2133.3,1130.77c17.84,16.06,40.47,33.07,65.55,30.12a60.89,60.89,0,0,0,25.61-8.39c10-5.79,18.22-14.27,27.21-21.58-3.62,4.65-7.23,9.26-11.18,13.7-12.35,14.21-28.73,23.06-47.86,23.09-12.36.16-24.38-4.82-34.42-11.64a98.78,98.78,0,0,1-25.27-25l.36-.3Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2014.48,846s17.1,27.49,55.11,26.13,53.79-6.83,62.61-4.12,12.13-12.72,3.31-22.9-18.58-38.18-58.29-43.61c-30.26-4.14-59.72,9.5-73.3,25.79,29-14.93,57.35-8.65,57.35-8.65s-20,15.61.51,34.78c11,10.29,30.38.34,33.09-8.48a41.46,41.46,0,0,0,1.25-5.21,23.64,23.64,0,0,0-2.39-14.54c-5.07-10.34,33.74,15.79,35.25,27.55,1.38,10.77-40.22,15.61-53.79,14.93s-35-.5-46.49-14.76c-15.28-9.92-24.78-25.62-24.78-25.62Z" data-v-743b0961></path><path class="cls-lungFrontFemale-2" d="M2075.64,844.94a9.66,9.66,0,0,1-9.9-4.41c-1.85-2.84-3-6.62.26-9.78,6.22-6,16-2.17,15.69,5.41C2081.51,841.37,2079.4,844.15,2075.64,844.94Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2406.24,764.27s-42.2-20.71-84.61-1.31-68.88,32.6-77,21.07-.29-28.53,38.17-32.56C2333.52,746.15,2373.62,739.84,2406.24,764.27Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2375.46,846s-17.1,27.49-55.1,26.13-53.79-6.83-62.62-4.12-12.13-12.72-3.3-22.9,18.58-38.18,58.29-43.61c30.25-4.14,59.72,9.5,73.29,25.79-29-14.93-57.35-8.65-57.35-8.65s20,15.61-.51,34.78c-11,10.29-30.37.34-33.09-8.48a43.28,43.28,0,0,1-1.25-5.21,23.78,23.78,0,0,1,2.39-14.54c5.08-10.34-33.74,15.79-35.24,27.55-1.38,10.77,40.21,15.61,53.79,14.93s34.95-.5,46.49-14.76c15.27-9.92,24.77-25.62,24.77-25.62Z" data-v-743b0961></path><path class="cls-lungFrontFemale-2" d="M2314.3,844.94a9.65,9.65,0,0,0,9.9-4.41c1.86-2.84,3.06-6.62-.25-9.78-6.23-6-16-2.17-15.7,5.41C2308.44,841.37,2310.54,844.15,2314.3,844.94Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1932.64,864.33c-6.52-7.82-10.89-17-15.16-26.17a18,18,0,0,0-6.57-8.13c-6-4.33-14.38-5.54-18.1,2.38-1.37,2.41-2,5.62-2.63,8.39a99.72,99.72,0,0,0-1.49,20.05c.53,20.78,5.09,41.35,11.84,61,4.48,13.79,11.8,26.16,16.52,40a211.94,211.94,0,0,1,6.2,21.71c2.24,8.8,3.28,15.77,7.43,22.1a22.08,22.08,0,0,0,3.38,3.9,11.54,11.54,0,0,0,8.9,1.58c2.92-.77,4.32-3,5.12-5.78a9.27,9.27,0,0,0,.39-2.06,88.94,88.94,0,0,1,5-22.31c.59-1.78,1.44-3.69,2.19-5.43a11,11,0,0,1,20.82,2.43l.13.63.26,1.28a594.07,594.07,0,0,0,24.5,84c9.86,26,21.78,51.73,38.06,74a137.43,137.43,0,0,0,20,22.19c2.09,2,5.79,4.79,8.05,6.75,34.27,27.92,71.61,56.93,116.93,60.69,4.9.46,10.1.78,15,.84,31.73-.87,60.51-19.52,85.42-38.43,21.7-17.2,42.06-36.73,58.76-58.89,16.24-22.5,29.57-47.82,40.75-73.36,9.69-22.5,17.93-45.64,22.67-69.64.73-3.57.68-4.4,1.51-8.07a11.12,11.12,0,0,1,6.75-7.14,11,11,0,0,1,9,.68c2.72,1.19,5,5,5.16,6.15l.83,2.44c2.59,6.92,5.12,14.65,9.82,20a5.32,5.32,0,0,0,1.2,1c.13.06-.05,0,.21.07a5.53,5.53,0,0,0,1.84-.51,32,32,0,0,0,6.61-4.23c6.57-5.8,9.18-14.19,12.24-23.3,2.12-6.62,4.07-13.67,6.57-20.88a124.69,124.69,0,0,1,9.55-20.73c3.12-6.12,6-12.55,8.66-19,5.21-12.81,9.85-26.15,12.42-39.65,1.23-6.62,1.92-13.35,1.23-19.29-1-9-5.39-13.58-14.54-12.85-9.56.68-18.2,7.85-23.56,15.4l-.17.3-.32.59c-1.28,2.38-2.68,4.75-4.09,7a83.59,83.59,0,0,1-6.35,9l-2.27-1a103.94,103.94,0,0,1,6.1-19.88,47.28,47.28,0,0,1,17-18.93c18.15-10.74,38.88-4.07,42.19,18.31,4.18,27-10.73,68.58-22.6,93.1-11.69,23.21-9.63,55.48-34.13,71.43-10.52,7.44-23.14,8.55-32.64-1.21-8.21-8.7-11.95-19.61-15.87-30.32,3,8.93,16.29,9.45,19.44-.4.62-2.76.14-.57.26-1.09-.44,2.32-.71,4.71-1.2,7-10.54,54.56-43.63,128.09-80.48,169.84-34.6,38.45-88.19,84.46-141.72,89.19-63.78,3.21-110.48-31.6-156.83-70.28-51.16-41.88-78.41-131-92.28-193.92l-.56-2.72-.27-1.37-.14-.69a10.41,10.41,0,0,0,4.79,6.78A10.29,10.29,0,0,0,1975,984.3l-.12.24-.22.51a68.26,68.26,0,0,0-5.19,19.05c-1.57,19.75-18.24,31.93-37.4,26.65-14.45-3.55-22.52-18.74-25.45-32.07-3.17-13.92-5.56-27.45-10.85-40.52-10.47-23.65-18.11-48.94-20.8-74.78-1.82-17.5-2.68-50.15,10.45-63.21,12.82-13.07,35.18-4.21,40.44,11.91.27.74.56,2,.78,2.84,2.4,9.7,4.78,19.48,6,29.41Z" data-v-743b0961></path><path class="cls-lungFrontFemale-5" d="M1929.46,902.48c-3.9-7.69-13-31.73-19.71-34.89-.21-.05-.23,0-.27,0a10.86,10.86,0,0,0-2.89,2.59c-5.83,8.22-6.47,20.74-4.2,30.46,1.25,5.57,4.47,10.2,7.5,15a174.65,174.65,0,0,1,8.94,15,51,51,0,0,1,5.23,16.59,48.94,48.94,0,0,0-6.35-16,172.66,172.66,0,0,0-10-14.13c-3.55-4.72-7.51-9.45-9.53-15.12-4.29-11.52-5.11-26,2.53-36.42,17.88-20.69,28.08,24.75,28.73,36.91Z" data-v-743b0961></path><path class="cls-lungFrontFemale-5" d="M1928,920.32c4.84,10,8.5,26.81,1.21,36.32,5.32-11,1.17-24.92-1.21-36.32Z" data-v-743b0961></path><path class="cls-lungFrontFemale-5" d="M2455.07,902.48c.64-12.12,10.84-57.6,28.72-36.91,7.65,10.41,6.83,24.89,2.54,36.42-2,5.67-6,10.4-9.54,15.12s-7,9.21-10,14.13a49.19,49.19,0,0,0-6.36,16,51.23,51.23,0,0,1,5.24-16.59,174.65,174.65,0,0,1,8.94-15c3-4.78,6.25-9.41,7.5-15,2.26-9.72,1.63-22.24-4.2-30.46a10.69,10.69,0,0,0-2.89-2.59c-.05,0-.06-.05-.27,0-6.67,3.15-15.8,27.18-19.71,34.89Z" data-v-743b0961></path><path class="cls-lungFrontFemale-5" d="M2456.57,920.32c-2.38,11.4-6.52,25.36-1.2,36.32-7.29-9.51-3.63-26.32,1.2-36.32Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2720.18,1984c6.23-27.92,19.81-52.89,31.62-78.61,18.69-38.24,39.82-75.35,65.18-109.63a415.92,415.92,0,0,1,42.21-48.66c33.79-34.62,72.59-66.39,103.39-103.14,25.54-29.79,46.31-70.44,65-105.37,37.94-71.14,83.33-149.74,118.43-221.88,2.51-5.34,5.7-12.35,7.21-17.59,12.89-48.4,31.46-97.36,63-137.1,1.28-1.49,2.58-3,4.1-4.52.26-.28-.6.65-.53.62a109.38,109.38,0,0,0,4.37-11c36.17-112.89,63.39-228.81,91.18-344,18.95-81.64,37.24-163.56,51.85-246.08,5.86-34.27,11.48-68.39,13.75-102.85a34.08,34.08,0,0,0-25.81-35.67,179,179,0,0,0-19.2-2.45,427.67,427.67,0,0,0-61.38-.29c-6.44.48-13.05.78-19.34,2.12a74.43,74.43,0,0,0-52.89,43.48c-19.42,45.62-36.3,92.33-51.8,139.43a2415,2415,0,0,0-97.72,425.14c-1.35,8.38-4.31,16.6-7,24.57-13.39,36.62-26.71,73.27-46.83,106.77a99.64,99.64,0,0,1-6.39,9.24l-13.44-8.32c3.23-5.58,6-11.79,8.74-17.72,8.59-19,16.59-38.27,24.32-57.61,7.17-18.44,14.57-36.67,19.83-55.63.16-.62.57-2.43.67-3s.46-3,.54-3.65c23.64-172.42,65.3-342.57,125.62-505.85,7.42-19.8,15.14-39.52,23.42-59a99,99,0,0,1,11.06-20.31,94.87,94.87,0,0,1,57.57-37.77c7.37-1.59,14.8-2,22.27-2.54a448.83,448.83,0,0,1,64.46.25c7.45.7,15,1.34,22.33,2.94,24.42,5.56,42.56,29,41.92,54.05-1.94,36.45-8,72.6-14.05,108.32-24.74,138.22-57.61,274.74-92.33,410.72-16.2,61.24-31.66,122.56-51.79,182.76a119.85,119.85,0,0,1-5.47,13.45,18.09,18.09,0,0,1-3.21,4.58c-5.48,5.73-10.08,12.39-14.63,19.27-18.41,28.65-31.61,60.34-41.63,93-3.24,10-5.41,21.71-9.62,31.08-18.9,41.93-41.62,81.73-63.24,122.13-12.68,23-48,88.06-60.36,110.66-19.24,36.14-40.57,77.29-67.28,108.62-27.16,32.66-59.79,60.13-89.88,89.81-19.83,19.14-39,38.7-55.51,61-37.37,49.8-67.76,104.89-92.47,162a201.74,201.74,0,0,0-6.94,19.48l-13.25-5.18Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M3062.25,1080a707.09,707.09,0,0,1-50.17,65.76c-13.11,15.78-27.86,30-41.29,45.58-47.7,57.31-90.23,119.06-131.09,181.44-50.93,80.56-97,164.91-122.54,257.48,3.78-27.22,10.36-54.1,18.57-80.44,16.51-52.75,39.39-103.34,65.42-152s55.18-95.89,88.37-140.13c12.42-16.64,25.47-32.8,39-48.56,13.84-15.87,27.69-31.13,43.68-45.24,20.57-17.8,40.53-36.59,60.22-55.38,9.9-9.47,19.73-19.05,29.63-28.64l.21.17Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M2802.77,1420c-38.53,2.18-87.59,32.09-119.15,54.39-37.87,26.7-72.83,58-108.65,87.54a489.75,489.75,0,0,1,63.36-73.87c30.34-28.77,63.94-54.88,102.1-72.61,14.16-6.35,28.72-11.65,44.18-14.18a81.5,81.5,0,0,1,18.73-1.17l.78.07,1,.11-2.38,19.72Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M3056.91,1137.35c0,20.13-.5,40,1.85,59.79,1.31,8.94,2.61,18.53,8.08,25.38,3.84,4.5,10,4.73,15.59,3.34,14.83-4,27.48-13.63,40.32-22.18-11.07,17.1-40.6,44.57-61.46,28.09-19.63-17.42-11.21-71.61-4.38-94.42Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1652.57,1987.8c-18.88-40.94-38.8-81.61-62.44-120-21.52-35.1-45.36-69.38-74-98.74-17.08-17.4-34.68-34.17-52.44-50.93-20.53-19.4-41.54-39-59.64-60.87-26.71-31.38-48-72.25-67.34-108.62-38.28-71.63-83.68-150-119.16-222.76-2.31-5-4.6-10-6.59-15.17-3-8.28-4.82-17.48-7.56-25.87-10-32.67-23.15-64.31-41.49-92.94-4.52-6.88-9.12-13.52-14.56-19.27a23.76,23.76,0,0,1-4.74-7.5c-1.65-3.73-2.88-7.1-4.12-10.54-36.7-113.76-64-230-92.18-346.09-19.19-82-37.41-164.24-52-247.23-6-35.15-11.79-70.72-14-106.58-1.8-27.62,18.58-53.45,46.1-57.65,3.6-.59,8.63-1.17,12.33-1.58a434.19,434.19,0,0,1,69.92-.84c5.47.39,11,.72,16.44,1.45a95.13,95.13,0,0,1,74.63,57.52c72.59,176,119.78,362.11,147.31,550.28l2.84,20.31c1.33,6,3.85,12.22,6.11,18.13,14.35,35.1,31.21,69.72,49,103.27l2.47,4.45c.82,1.45,1.67,2.91,2.43,4.12l-12.16,7.53a105.32,105.32,0,0,1-7-8.44c-14.87-19.88-26-42.06-36.39-64.52-8.12-17.79-16.63-35.78-22.73-54.6a60.59,60.59,0,0,1-1.73-7c-.18-1.19-.53-3.53-.69-4.77-27.08-191.7-75.07-381.28-149.09-560.36a74.65,74.65,0,0,0-20.86-28.31A73.74,73.74,0,0,0,1126.7,418c-6.38-1.29-12.91-1.56-19.39-2a425.25,425.25,0,0,0-61.31.32c-4.52.43-10.48,1-15,1.72l-.62.08-.49.09-1,.17c-.65.14-1.29.28-1.93.44-15.94,4-26.79,19.68-25.2,36,4.68,62.15,17.32,123.81,29.36,185.05,34.4,163.93,73.16,327.51,120.72,488.14,3.29,10.14,6.5,21.17,10.84,30.39a5.65,5.65,0,0,0-.47-.59c-.57-.58.16.17.17.19,6.62,6.94,12.07,14.8,17.14,22.54,23.31,36.49,38.82,77.34,49.61,118.92,1.75,5.77,4.67,12,7.28,17.64,28.33,59,67.14,126.77,98.32,184.87,26.23,46.31,50.67,101.56,85,142.32,30.82,36.75,69.57,68.49,103.36,103.14C1569,1792.63,1602.72,1848,1631.5,1905c12.07,25.65,25.76,50.49,32.38,78.37l-11.31,4.42Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1324.59,1074.07c24.6,23.87,49.15,47.65,74.59,70.54l7.6,6.79a399.43,399.43,0,0,1,37.5,36.36c18.68,20.48,36.22,42,52.84,64.13,33.18,44.23,62.22,91.44,88.37,140.13s48.91,99.29,65.42,152c8.2,26.35,14.79,53.23,18.56,80.45-25.53-92.57-71.61-176.92-122.54-257.48-40.86-62.38-83.39-124.13-131.09-181.44-13.42-15.61-28.18-29.8-41.28-45.58q-20.2-23.62-38.39-48.77c-4-5.58-8-11.23-11.78-17l.2-.17Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1577.36,1400.23a76.43,76.43,0,0,1,20.54,1c15.46,2.53,30,7.83,44.18,14.18,35.51,16.42,66.92,40.31,95.65,66.49a513.28,513.28,0,0,1,48.52,51.71c7.45,9.17,14.58,18.57,21.29,28.28-18.12-14.83-35.78-30.29-53.85-45.1-35.51-29.24-71.93-57.33-113.12-77.85-17.1-8.3-35.35-15.75-54.21-18.44a60.49,60.49,0,0,0-6.25-.51h-.45c.26.12-2.38-19.72-2.3-19.75Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1325.61,1137.35c6.8,22.76,15.26,77-4.39,94.42-20.86,16.48-50.36-11-61.46-28.09,12.84,8.55,25.49,18.13,40.33,22.18,5.6,1.38,11.75,1.16,15.58-3.34,5.47-6.85,6.77-16.43,8.09-25.38,2.34-19.79,1.86-39.66,1.85-59.79Z" data-v-743b0961></path><path class="cls-lungFrontFemale-3" d="M1752.15,2283.62a121.8,121.8,0,0,1,4.46,11.36c12.86,37.7,25.27,75.59,34.6,114.37a928.73,928.73,0,0,1,21.39,128.76c5.94,58.11,5.49,117.51-9.16,174.42a342.41,342.41,0,0,1-13.44,42.21c-10.93,27.31-26.17,52.28-40.71,77.44-20.54,35.54-42.22,70.33-60.39,107.11-41.72,94.5,29.2,200.16,132.52,197.73,226.43-.09,579.48-.07,805.75-.11.9,0,1.8,0,2.6,0l4.95-.16c.83,0,1.65-.11,2.47-.19l2.46-.24,2.46-.23a99.69,99.69,0,0,0,39.23-13.85c27.19-16.42,45.54-46.37,48.17-78a100.94,100.94,0,0,0-8.54-49.33c-18.7-42-42.68-85.74-66.2-125.44-20.63-37-46.14-75.44-62.17-114.74-26.91-68.7-30.07-143.95-22.39-216.57,5.58-57.74,16.27-115.17,33.44-170.6,8.54-26.76,17.12-53.47,27.5-79.57l.28-.67.38-.82.8-1.64,11.56,6.28c-.91,2.21-2.44,6.82-3.22,9.2-11.81,37.27-23.7,75.11-32.55,113.13a955.54,955.54,0,0,0-20.6,126.36c-5.68,56.41-5.34,113.31,8.86,168.3a322.78,322.78,0,0,0,12.73,39.9c10.49,26.17,25.42,50.43,39.62,75,10.63,18.6,32.66,56.07,43.34,74.67,16.56,29.09,31.57,59.23,45.46,89.67A138.45,138.45,0,0,1,2743,3001l1.56,5.63a117.55,117.55,0,0,1-1.32,63.49,120.73,120.73,0,0,1-62.46,73.52,118.77,118.77,0,0,1-39.18,11.07,148.19,148.19,0,0,1-17.11.73c-225,0-577.91-.07-803-.11-118.78,2.46-199-121.52-146.7-228.6,18-35.42,38.89-69.4,58.77-103.69,14.17-24.58,29.09-48.88,39.55-75a326,326,0,0,0,12.69-39.9c14.15-55,14.41-111.86,8.69-168.24-5.45-56.64-15.81-112.82-32-167.38-7.75-25.54-15.75-51.16-24.77-76.3l-.89-2.3-.22-.57-.15-.32c-.09-.21-.18-.42-.26-.63l16.05-8.72Z" data-v-743b0961></path></g>', 1))
      ], 16);
    };
  }
});

const LungFrontFemale = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-743b0961"]]);

const _hoisted_1$4 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "LungBackFemale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      console.log("Clicked:", partName);
      const popover = await createPopover(_sfc_main$b, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      console.log("Popover dismissed:", { data, role });
      emit("value-changed", partName, data);
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
        createBaseVNode("g", _hoisted_1$4, [
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

const LungBackFemale = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2a5c6ff4"]]);

const _hoisted_1$3 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LungBackMale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      console.log("Clicked:", partName);
      const popover = await createPopover(_sfc_main$b, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      console.log("Popover dismissed:", { data, role });
      emit("value-changed", partName, data);
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
        createBaseVNode("g", _hoisted_1$3, [
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
        _cache[8] || (_cache[8] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-885ff869><path class="cls-lungBackMale-3" d="M2188.07,1210.8a359.07,359.07,0,0,1-13.73,59.32c-15.83,48.85-39,101.92-87.45,127a94.05,94.05,0,0,1-13.84,5.4c-43.11,13.49-84.8,32-125.08,52.44-26.26,13.59-52.29,28-75.8,45.65-7.05,5.54-14.19,11.23-19.29,18.43L1836,1508.25c6.14-9.6,14.68-17.09,23.28-24.09,24.35-19.27,51.37-34.49,78.61-48.79,42.85-22,87.49-41,133.94-54.61,19.43-6.91,35-22.42,47.65-38.53,30.6-39.07,51-85,68.58-131.43Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2423.56,1210.8c18.88,50.89,61.76,148.15,113.63,169.3,2.11.83,4.37,1.61,6.53,2.27,44.44,13.21,86.92,31.92,127.8,53.19,31.55,17,63.49,34.68,89.92,59.47a76.7,76.7,0,0,1,11.09,13.3l-16.87,10.74a42,42,0,0,0-3.71-4.75,123,123,0,0,0-15.27-13.92c-23.12-17.93-48.91-32.48-74.88-46.26-40.59-21-82.69-39.72-126.37-53-44.33-15.32-72.23-61.31-88.25-102.47a405.5,405.5,0,0,1-23.62-87.84Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2054.93,1387.58c5.26-3.19,9.9-8,13.94-12.92,15.74-19.87,23.39-45.34,27.53-70.12,3.94-24.17,4.26-48.76,3.3-73.19-.22-8.33-3.09-15.48-7-23.78-6.76-13.63-14.62-27.78-20.18-42.31-12.86-32.52-17.36-67.65-17.66-102.35v-.73a3.78,3.78,0,0,0-1.6-3.45,58.07,58.07,0,0,0-9.31-4.46c-11.12-4.3-22.44-8-33.13-14.53-22-13-36.32-35.88-44.71-59.33-8.21-22.55-12.33-46.34-15-69.94l-.15-2,0-.49,0-.39,0-.76c-.66-19.35.61-39,7.18-57.5,5.91-16,15.62-32.41,31.67-40.35,14-6.94,29.55-2.83,37.85,10.41a46,46,0,0,1,5.24,11.61c2.2,7.53,4.31,14.9,6.12,22.51a57.6,57.6,0,0,1,1.8,10.36,3.49,3.49,0,0,1,0,.53,1.86,1.86,0,0,1-.37,1,1.43,1.43,0,0,1-1.27.54,1.52,1.52,0,0,1-.71-.28,2.76,2.76,0,0,1-.51-.53l1.85-1.44s.07,0,0,0a.77.77,0,0,0-.38-.15,1.15,1.15,0,0,0-1,.4c-.23.35-.15.32-.18.29l0-.19c-1.85-6.8-5.09-13.24-7.81-19.75-3-6.57-5.55-13.85-10.38-19.16-16.5-18-34.42,3.21-40.32,20.13-7.19,19.59-9.36,40.84-8.75,61.64,3.81,34.82,10.86,76.81,34.24,103.67,12.55,14.35,28.26,19.76,45.8,26.42,5,2.12,11.23,4.63,15.61,8.69a22.56,22.56,0,0,1,6.83,17.1c.06,40,6.86,80.38,25.39,116.14,6.9,14.32,16.25,28.74,18.73,45.12.68,4.18.57,8.55.74,12.71.44,11.67.43,23.52-.14,35.24a299.61,299.61,0,0,1-4.67,41.39c-6,31.86-18.61,67.25-45.27,87.63l-1.44,1c-.51.34-1,.66-1.54,1s-1,.6-2,1.13l-8.16-16.55Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2545.23,1403.81a53.39,53.39,0,0,1-11.35-8.47c-33.38-32.72-41.62-87.63-42.74-132.34-.18-7.3-.14-15.57.11-22.83l.37-11.67c.54-8.72,3.36-17.21,6.82-24.9,6.43-14,13.76-26.29,19.49-40.15,8.43-19.86,13.47-40.73,16.05-62.24,1.63-12.86,2.08-25.91,2.45-38.88a28.41,28.41,0,0,1,15.8-22.94c9.39-4.59,20.52-7.8,29.22-12.16a72.65,72.65,0,0,0,29.53-25.47C2628.28,975.53,2634,942,2638.1,911l.33-2.65q.06-.47.09-.93l0-.46a243.38,243.38,0,0,0-.13-27.42c-.94-15.6-5.78-52.52-27.4-48-7.59,1.69-14.55,7-20.21,12.5a250.76,250.76,0,0,0-18,20.9l-2.27-1.14a116.12,116.12,0,0,1,8.94-21.29c6-11.05,14.55-21.3,26.76-26.1a30.69,30.69,0,0,1,29.25,3.76c24,18,25.63,60.31,25,87.61-4,42.46-14.8,95.86-49.1,124.51-12.16,10.52-28.38,16.7-42.72,21.84a72.62,72.62,0,0,0-8.53,3.74,8.43,8.43,0,0,0-3.88,6.93l0,1.36c-.52,35.73-5.79,71.87-19.93,105-3,7.18-6.4,14.18-9.86,20.94-6.84,13.53-14.29,26.15-14.91,37.66-2.07,47.91.66,115.47,36,151a41,41,0,0,0,6.07,4.83c.18.11.65.37.38.23l-8.79,17.93Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2391.83,1530.76c-19.22,25.56-34.76,53-48.45,81.69-5.43,11.53-10.61,23.12-15.91,34.84-2.79,6-5.41,12.08-8.63,18l-1-.18c-4.18-39.75,12-83.43,39.91-111.89,9.66-9.6,20.88-18.39,34-22.47Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2613.3,1647.49c-58.38,27.22-115.35,73.39-125.82,140-4.69,28.08-7.56,62.57-10.46,91.16-7.48,82.27-26.43,159.63-69.36,231a522.55,522.55,0,0,1-30.94,46.36c36.31-64.55,62.26-133.41,73-206.36,7.62-48.54,9-98,15.31-146.92,1.28-9.31,3-20.33,5.12-29.47.61-2.22,1.75-6.07,2.38-8.31.76-2.83,2.33-6.52,3.25-9.32s2.74-6.35,3.85-9.09c13.72-29.47,37.12-53.53,64.37-70.74,21.21-13.3,44.79-23.48,69.32-28.4Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2359,2336.06c4.69,19.15,12.92,37.27,21.9,54.71a427.15,427.15,0,0,0,30.79,49.79,560.8,560.8,0,0,0,36.35,45.77c19.25,22.23,41.09,42.58,61.71,63.59,6.31,6.72,12.81,14.09,19,20.91.28.33,10.17,12.27,10.83,13.09,25.34,31.11,47.7,65.44,62.84,102.71,5.39,13.92,10.43,28.54,12.23,43.39-4.17-11.52-9.94-22.76-15.84-33.46-27.49-49.15-64.4-92.5-103.36-132.87-21.23-21.09-43-41.84-61.74-65.28a409.4,409.4,0,0,1-46.11-69.22c-14.67-29-27.19-60.38-28.64-93.13Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2304.84,2552.15c7.06,84.87,9.08,170.46,9.87,255.6.44,66.23-.12,133.18-9.87,198.81-9.74-65.62-10.3-132.59-9.86-198.81.79-85.14,2.81-170.72,9.86-255.6Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2676.88,1792.36c10.36,5.93,20.51,13.07,30.55,19.18,6.91,4.14,13.51,8.1,20.81,10a19.77,19.77,0,0,0,5.85.46c10.24-.7,21.86-4.16,32.32-6.8,11.74-3,23.34-6.21,35.53-8.2-6.41,6.9-13.92,12.53-21.76,17.67-14.29,9.06-36.39,19.84-54,16.78-22-4.49-41.93-28.82-49.3-49Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2216.71,1530.76c13.17,4.08,24.38,12.87,34,22.47,27.88,28.46,44.09,72.13,39.92,111.89l-1,.18c-3.23-5.93-5.84-12-8.64-18-5.29-11.72-10.47-23.31-15.9-34.84-13.7-28.74-29.24-56.12-48.45-81.69Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M1995.23,1647.49c24.54,4.92,48.11,15.1,69.32,28.4,27.25,17.21,50.66,41.27,64.37,70.74,1.18,2.75,2.86,6.33,3.85,9.09s2.45,6.51,3.25,9.32c.66,2.26,1.76,6.11,2.39,8.31,2.1,9.12,3.84,20.17,5.12,29.47,6.31,48.87,7.68,98.38,15.31,146.92,10.71,72.94,36.66,141.81,73,206.36a522.55,522.55,0,0,1-30.94-46.36c-43-71.46-61.87-148.76-69.36-231-2.92-28.69-5.77-63-10.46-91.16-10.48-66.65-67.46-112.83-125.83-140Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2074.82,953.37c-17.2-25.75-28.69-54.7-38.64-83.86-22.29-65.92-37.72-135.4-33.33-205.47a260.47,260.47,0,0,1,8.8-52.48c20-65.69,60.56-125.92,116.76-166.13,64.19-46.07,147.1-65.5,225.08-53.13,77.76,12.45,153.05,51.61,200.32,115.76,38.09,50.88,55,114.76,56.51,177.63,2.37,93.21-23.69,185.62-66.85,267.68,34.94-127.2,79.74-270.55,18.07-396.22-39.71-80.7-124.05-131.3-211.21-145.06-102.72-16.66-212.79,26.08-274.84,110.15-35.68,47.54-59.18,104.84-57.75,165.31.07,52.86,10.66,105.26,24.41,156.14,10,36.92,23.1,72.52,32.67,109.68Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M2249.54,2336.06c-1.45,32.75-14,64.16-28.65,93.13a408.4,408.4,0,0,1-46.11,69.22c-18.77,23.44-40.51,44.19-61.74,65.28-38.95,40.37-75.86,83.72-103.35,132.87-5.91,10.7-11.67,21.93-15.85,33.46,1.8-14.85,6.84-29.46,12.24-43.39,15.13-37.26,37.5-71.61,62.84-102.71.71-.83,10.56-12.83,10.83-13.09,6.23-6.82,12.72-14.19,19-20.91,20.63-21,42.46-41.36,61.71-63.59a555.27,555.27,0,0,0,36.35-45.77,428.58,428.58,0,0,0,30.8-49.79c9-17.44,17.2-35.56,21.9-54.71Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M1931.66,1792.36c-7.39,20.22-27.27,44.54-49.3,49-17.6,3.06-39.71-7.72-54-16.78-7.83-5.14-15.34-10.77-21.76-17.67,12.19,2,23.8,5.17,35.53,8.2,10.46,2.64,22.09,6.1,32.33,6.8a19.73,19.73,0,0,0,5.84-.46c7.3-1.85,13.9-5.81,20.81-10,10.05-6.11,20.19-13.25,30.56-19.18Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M1158.18,1030.2c-24.75,8.29-56.21,1.18-75.76-16-16.25-15.82-23.39-39.91-27.68-61.4a173,173,0,0,1-3.08-32.27c5,11.53,11.72,27.67,17,38.79,5.66,11.82,12.06,24.4,20.28,34.33a36.81,36.81,0,0,0,11.38,9.64l2.08,1.14c17.49,9.36,37.9,16.48,55.74,25.81Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M3385,888.91c-25.53,48.56-59.65,92.16-98.5,130.84a482.77,482.77,0,0,1-41.34,36.55c-13.82,11.39-27.5,22.94-40.77,34.92-136.75,123.51-191.28,235.49-234.8,411.89-7.8,30.15-19.08,75.19-27.51,105q7.69-53.8,18.23-107.1c39.23-200,110.94-333,271.72-460.93,21.15-16.07,40.83-34.46,59.12-53.73,31.38-32.43,61.31-65.9,93.85-97.41Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M3022.74,1333.47a235.63,235.63,0,0,0-24.09,7.67c-90.38,34.5-166.54,98.84-227.4,173.15-16.19,19.78-32.8,43.14-48.56,63.3-5.51,7.05-11,14.15-16.94,21.05,5.64-17.32,13.63-33.6,22.66-49.23a343,343,0,0,1,22.52-33.86c39.17-55.4,87.15-105.33,143.29-143.88,37-25,77.31-46.33,120.92-57,.92-.21,2.81-.61,3.74-.78l3.86,19.62Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M3449.71,1030.2c17.83-9.32,38.26-16.46,55.75-25.81l2.08-1.14a37,37,0,0,0,11.38-9.64c8.21-9.93,14.61-22.51,20.28-34.33,5.29-11.07,12.12-27.36,17-38.79a173,173,0,0,1-3.09,32.27c-4.28,21.48-11.43,45.58-27.68,61.4-19.55,17.23-51,24.33-75.76,16Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M1300.33,985.38c-2.66-9-4.09-17.59-5.67-26.67-4.34-26.33-7.42-52.71-9.61-79.31-1.91-25.36-3.1-53.8-5.76-79.07l-2.6-26.21-.32-3.28c-.12-1.09-.28-2.18-.41-3.27l-.85-6.53-1.69-13c-10-78-27.37-155.73-53-230.1-10-29-22.21-57.89-33.09-86.51,0-.05,0-.16-.06-.17l0,.14a1.14,1.14,0,0,0,.09.26c.06.16.25.37.21.38s.2.2,0,.08a.34.34,0,0,1-.12-.12,23.09,23.09,0,0,0-5.34-2.95c-15.29-6-32.53-8.42-49-10.42a478.05,478.05,0,0,0-103.42-.45c-21.24,2.47-42,6.28-61.42,14.31a112.86,112.86,0,0,0-10.81,5.3c-6.82,3.93-12.89,8.66-17.07,14.22l2-5.3c-1,16.94-.59,34.3.17,51.4,2.49,52.24,7.89,104.35,13.86,156.37q12.22,104.13,29.24,207.72c6.64,38.42,13,77.24,23.1,114.81,1.53,5.06,2.76,9.81,5,14a3,3,0,0,0-.56-.59,120,120,0,0,1,9.88,10.45c32.49,38.84,65.48,120,75.31,170.52.13.92.42,2.7.54,3.62.09.64.17.8.25,1.23l.22,1.1a58.26,58.26,0,0,0,2,6.72c2,5.94,4.57,11.74,7.08,17.48,33.9,73.25,83.55,159.76,122.31,231.66,42.4,75.19,76.45,157.27,138.12,219.26,39.49,40.61,82.62,79.18,121.13,120.85,3,3.34,6.11,6.9,8.94,10.36,39.38,49.21,64.74,108,82.32,168.15l.45,1.66c.10.41.37,1.34.49,1.94l.73,3.26c2.43,10.49,5,21.26,7.65,31.69,10.59,42.11,22.84,84.2,36.37,125.47,37.07,111.74,87.6,218.67,141,323.49a781.62,781.62,0,0,1,44,96.72c24.77,66.52,46.43,135.54,49.93,207l.22,6.81c0,2.28,0,4.57,0,6.85l0,3.43c0,1.14,0,2.28-.10,3.43l-.39,6.89c-.07,1.15-.10,2.30-.22,3.45l-.38,3.46-.76,6.91-1.18,6.93-.59,3.46c-.24,1.15-.55,2.30-.82,3.45l-1.68,6.91a1384.76,1384.76,0,0,0-36.62,178.37c-.11,1-.25,2-.35,3l-.18,3-.19,3.05-.10,1.52v1.52l0,6.10c1.10,60.22,43.07,114.21,101.20,130.45l5.90,1.49c.50.13,1,.26,1.48.37l1.50.29,3,.59,3,.58,3,.41,3,.43,1.51.20,1.52.13c10.58,1.20,33.64.59,44.89.72,207.71-.46,462.20.55,669.71-.22l6.08-.51,1.52-.12,1.51-.21,3-.42,3-.42,3-.58,3-.58a138.42,138.42,0,0,0,57.34-27.05c33.65-26.37,53.93-68.85,52.67-111.65-.36-14.82-3.41-29.45-5.62-44.08-8.20-49.32-18.34-98.32-31.84-146.44-.84-3.54-1.81-7.24-2.50-10.36-.35-1.95-1.41-8.30-1.77-10.39-.38-3.25-.81-7.49-1.14-10.38-.63-7.94-.83-16.14-.79-24.05.80-38.29,8-75.88,17.46-112.71a995.47,995.47,0,0,1,53-150.31c3.66-8.12,7.41-16.18,11.60-24.30,20-38.64,40-77.93,58.53-117.22,38.29-80.68,73.73-163,100.50-248.18,14.64-46.70,27.87-94.06,38.69-141.79,14.73-53,36.31-104.23,67-150a298.22,298.22,0,0,1,34.43-42c24.08-25,49.82-50.36,74.94-74.34s49.42-48.37,70.58-75.69c42.11-55,70.11-120.26,104.38-180.32,38.43-71.64,88.52-158.22,122.32-231.63,1.33-2.93,2.52-5.85,3.77-8.79l1.15-2.91,1.15-2.90,1-2.85.50-1.43q.27-.72.45-1.38l.79-2.68a7.93,7.93,0,0,0,.29-1.21l.21-1.08c.08-.42.16-.57.25-1.22l.27-1.81.27-1.81.32-1.75c.22-1.16.42-2.34.67-3.47,9-39.56,23.87-77.06,41.68-113.38,8.71-17.23,18.33-34,30.44-49.34l2.27-2.71a103.17,103.17,0,0,1,7.31-8l2.60-2.53c-.89.84-.65.83-.31.13a89.82,89.82,0,0,0,4.70-13.46c18.17-71.60,28.07-145.38,39-218.45,12.72-95,25.55-190.44,28-286.30.08-8.59,0-17.17-.58-25.47l2,5.43c-22.77-28.46-83.12-34.12-117.94-35.74-36.43-1.14-73.76.56-109.26,8.92-6.19,1.71-12.63,3.32-18,6.59a9.75,9.75,0,0,0-1,.75.24.24,0,0,1-.13.11c.14-.09.17-.17.26-.37a2,2,0,0,0,.37-.80c0-.09,0-.05,0,0l-.07.17-.50,1.38-1,2.77c-.68,1.83-1.34,3.72-2,5.50-7.44,18.68-15.46,39-22.27,57.72a1069.25,1069.25,0,0,0-39.80,139.68c-6.47,29.06-11.74,61.44-16.12,90.93-1.26,10.38-3.82,30.87-5.13,41.71-2.73,25-5.51,64.16-7,90-6.30,43-11.86,86.07-21.05,128.58-.36,1.48-.66,2.89-1.08,4.42l-1.31,4.62-18.46-5.91,1-3.66c.35-1.24.64-2.63,1-3.94,8.90-41.73,14.34-84.21,20.47-126.48l-.09.90,2.79-45.35c2.21-22.53,3.72-45.47,6.82-67.82l1.38-11.29.69-5.64.35-2.82.42-2.81,3.43-22.48,1.71-11.24c2.50-13.53,5.43-31.45,8.31-44.74a1096.68,1096.68,0,0,1,54.75-185.41l8.27-21,2-5.20c.67-1.73,1.24-3.39,1.87-5.09l.93-2.54.46-1.27.17-.45a18.33,18.33,0,0,1,5.06-7.24,39.14,39.14,0,0,1,9.85-6.05,112.91,112.91,0,0,1,17.70-5.86c37.74-9,76.46-10.76,115-9.63,42.73,2,106.13,8.80,133.53,43.79l1.82,2.38.20,3c.63,9.19.73,18.15.66,27.08-1.07,61.75-7.77,123.21-14.60,184.46-10.28,87.28-22.41,174.30-38.37,260.75-4.16,21.69-8.40,43.60-14.34,65.09-2.08,6.78-3.78,13.55-7.65,19.79a17.72,17.72,0,0,1-2.65,3.19l-2.10,2.06a108.92,108.92,0,0,0-9.84,11.32c-20.34,27.24-34.38,58.81-46.85,90.39-8.64,23-16.86,46.16-20.68,70.35a71.15,71.15,0,0,1-3.10,11.18c-2.29,6.46-4.94,12.87-7.70,19.09-34.26,74.24-83.80,160.65-122.89,233.31-35,61.57-62.81,126.55-106.18,183.20-21.80,28.18-47.15,53.47-72.66,78-11.08,10.85-26.91,25.84-37.62,36.56-15.40,15.27-30.77,30.68-45.52,46.55-2.86,3.06-5.57,6.36-8.22,9.54-26.89,33.22-46.29,71.85-61.84,111.54a512.40,512.40,0,0,0-17.08,51.55c-3.66,16.07-7.55,32.22-11.73,48.16-8.20,31.86-17.54,63.87-27.39,95.28-37.86,119.77-91.42,233.78-148.26,345.50-32.80,60.77-57.12,126.83-74.91,193.42-10.44,41.29-18.75,83.78-16.24,126.39.08,1,.09,2.08.21,3.11l.34,3.07.67,6.15,1,6,.52,3c.20,1,.47,2,.70,2.94l1.42,5.86,1.77,6.40c15.40,56.51,26.76,114.07,35.16,172l.41,3.49c.14,1.17.29,2.33.40,3.50l.22,3.52.22,3.51.11,1.76v1.76c2.10,72.24-47.27,138.57-116.95,158l-6.84,1.74c-.57.14-1.13.30-1.71.42l-1.73.34-3.46.68-3.46.67c-3.17.41-7.28,1.12-10.48,1.36a203.52,203.52,0,0,1-20.77.84c-81.41,0-258.40,0-341.73,0-83.92-.14-259.51.08-341.74,0a208.49,208.49,0,0,1-22.52-1l-1.75-.23-3.49-.49-3.49-.49-3.46-.66-3.46-.68-1.73-.34c-.57-.13-1.14-.29-1.71-.43l-6.83-1.73c-69.61-19.50-119-85.58-116.93-158v-1.76l.11-1.76.22-3.51c.14-3.37.63-7.19,1-10.51a1495.40,1495.40,0,0,1,38.37-184.23c20.41-89.79-43.08-263-87.65-344.17-56.83-111.72-110.38-225.73-148.23-345.50-12.51-39.88-24-80.32-33.82-120.92-1.73-7.25-3.67-15.20-5.27-22.51a538.85,538.85,0,0,0-37.94-98.67c-14.40-28.36-31.52-55.59-53.46-78.70-19.51-20.32-39.65-40.70-60-60.24-31.43-30.60-64.64-61.27-91.50-96.27-43.35-56.64-71.10-121.64-106.11-183.19-39.85-74.72-91.13-162.38-125.57-239.48-.44-1-.89-2.07-1.32-3.13l-1.26-3.19-1.26-3.21-1.18-3.34-.59-1.67c-.20-.54-.39-1.12-.56-1.74l-1.05-3.61a17.49,17.49,0,0,1-.48-2l-.42-2.13c-.12-.65-.29-1.55-.36-2l-.21-1.44-.22-1.45c-1-5.61-2.28-11.09-3.74-16.69-11.47-41-27.71-81.58-49.12-118.46-6.49-10.78-13.26-21-21.75-30.07-.66-.76-1.36-1.44-2-2.10l-2.11-2.07a17.34,17.34,0,0,1-2.61-3.14c-3.89-6.23-5.53-13-7.61-19.72-18.50-72.77-28.37-147.14-39.36-221.26-12.76-95.91-25.60-192.08-28-289q-.24-14.85.85-30l1.78-2.35c34.36-44.29,132.29-45.92,184.08-42.79,22.63,1.56,45.23,4.12,67.25,10.09,8.22,2.46,17.08,5.06,24,11a17.60,17.60,0,0,1,4.92,7.23c10.61,28.57,22.56,58,32,86.86,36.30,109.45,53.65,224.93,59,339.90,1.89,39.27,5.11,78.74,12.42,117.41.86,4.10,1.81,8.32,3,12.24l-10.91,3.49Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M1222.88,888.91c32.55,31.51,62.47,65,93.85,97.41,18.29,19.27,38,37.65,59.12,53.73,160.84,128,232.53,261.09,271.73,460.93q10.62,53.30,18.23,107.10c-8.46-29.70-19.60-74.51-27.51-105-43.57-176.55-98.10-288.40-234.81-411.88-13.27-12-27-23.54-40.77-34.93a480.67,480.67,0,0,1-41.34-36.55c-38.85-38.68-73-82.28-98.50-130.84Z" data-v-885ff869></path><path class="cls-lungBackMale-3" d="M1589,1313.85c36.10,8,70,24.33,101.54,43.17,66.09,40,121.68,95.89,166.18,158.71a351.09,351.09,0,0,1,22.53,33.83c9.07,15.60,17.11,31.84,22.89,49.08-5.90-6.94-11.32-14.07-16.80-21.14-11.77-15.28-26.23-35-38.07-50.36-46.60-59.77-102.46-113-167.67-151.92-28.92-17-59.33-31.92-91.67-41l-1.48-.39-1.30-.32,3.85-19.62Z" data-v-885ff869></path></g>', 1))
      ], 16);
    };
  }
});

const LungBackMale = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-885ff869"]]);

const _hoisted_1$2 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "LungLeftMale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      console.log("Clicked:", partName);
      const popover = await createPopover(_sfc_main$b, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      console.log("Popover dismissed:", { data, role });
      emit("value-changed", partName, data);
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
        createBaseVNode("g", _hoisted_1$2, [
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
        _cache[5] || (_cache[5] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-98c7650a><path class="cls-lungLeftMale-3" d="M2218.14,720.34s-13-31.26-32.15-29.34-44.31,7.83-49.82-2,4.89-17.34,11.55-18.39c10.69-1.68,34.41-2.57,49.25,7.38C2209.74,686.59,2216.91,697.72,2218.14,720.34Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2413,737.14c4.63-29,24.94-56.71,57.48-51,19.12,3.37,36.11,15.85,45.61,32.75,8.14,14.14,10.16,31.37,7.87,47.33-6.2,41.94-37.66,78.16-70.55,102.69a93.92,93.92,0,0,1-11.15,7.11,30.49,30.49,0,0,1-8,3.14c-10.42,2.37-20.59-3.64-25.9-12.22a34.69,34.69,0,0,1-4.57-10.8c6.3,5.46,13,11.07,21.17,11.93a13.61,13.61,0,0,0,6.84-1.3c1.19-.62,2.51-1.5,3.71-2.26a176.27,176.27,0,0,0,17.62-13.7c29.28-26.46,60.42-65.31,56.68-106.86a55.19,55.19,0,0,0-5.54-18.69,54.36,54.36,0,0,0-35.9-28.27c-27.43-6.54-45.38,17.89-55.35,40.18Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2227.71,1413c10.52-14,26.49-26.17,44.8-26.15,8.17.55,15.94,2.54,23.78,4,12.25,2.41,24.27,5.3,36.37,7.71a260.13,260.13,0,0,0,27.46,4.23c3.1.23,6.21.4,9.4.45-1.5.51-3,1-4.57,1.4-26.08,6-54.57-.57-79.74-7.7-3-.84-6-1.68-8.93-2.4-5.44-1.56-11.31-1.15-17,.25-11.74,3-22.45,10.09-31.53,18.25Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2547.6,1012.94a911.3,911.3,0,0,1-.94,121.88c-2.8,40.71-12.58,81.88-33.79,117.09,9.78-34.11,18.36-67.88,22.51-103,5.19-45.19,7.59-90.68,12.22-136Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2523.21,855.85c8.31,24.46,28.08,42,49.85,54.79,4.14,2.54,9.33,5.42,13.52,7.88,1.86,1,3.72,2.09,5.56,3.27a73.74,73.74,0,0,1-12.88-1.67c-21.38-4.8-41.5-18.55-51.19-38.63-3.72-7.94-6.12-16.87-4.86-25.64Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2298.61,912.78c2.11,9.55-2,19.47-7.28,27.33-7.72,11-19,19-31.32,24.22a78.06,78.06,0,0,1-21.77,5.38c11.43-8.76,23.89-15.61,34.94-24.72a114.56,114.56,0,0,0,11.37-10.32c5.93-6.47,11.18-13.39,14.06-21.89Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2460.36,738.88c2-.36,4,.48,5.76,1.21a59.58,59.58,0,0,1,10.24,6.11c10.3,6.8,15.26,20.24,12.72,32.28-2.14,10.19-9.54,18.43-17.92,24.09a81.35,81.35,0,0,1-10.34,6.24c-4.34,2.34-8.75,3.89-11.74,7.43a35.84,35.84,0,0,1-5.73,7.15c-3.18,3.09-8.66,5.72-12.95,3a14,14,0,0,1-6.08-11.86c.7-7.93,8.21-12.1,13.68-16.58a6.64,6.64,0,0,0,1.8-1.95,12.07,12.07,0,0,0,0-3.12c-.77-6.32-2.25-12.48-3.33-18.8a70.7,70.7,0,0,1,6.1,16.88,21,21,0,0,1,.49,4.81,5.22,5.22,0,0,1-1.72,3.57c-5.54,5.35-17.07,11.14-12.07,20.09,2.84,5.79,7.21,5.16,11.46,1.15,3.07-2.55,4.6-6.59,7.76-9,3.32-2.61,7-4.1,10.66-6,10.11-5.11,20.38-11.83,25.3-22.37,4.85-10.38,2.87-23.32-4.59-32-1.76-2.06-4.52-4-6.59-5.73a53.41,53.41,0,0,0-7.35-4.86c-1.73-.83-3.59-1.84-5.56-1.65Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2105.37,1593.24c-10.83,26.87-21.54,54.31-31,81.69-.37,1.18-1.31,3.59-1.54,4.75-6.61,26-9.85,53.54-4.65,79.78,2.39,12.1,7.43,25.94,14.62,34.6,8.22,9.72,21.4,12,34,11.34,34.47-2.61,74.47-28.59,104.71-45.9,6.93-4.08,13.89-8.22,21.13-12.14-20.3,26.1-45.43,47.94-74.94,63.41-29.87,15.33-72.79,25.7-99.65-1.16a31.45,31.45,0,0,1-3.05-3.76l1.09,1.4c-7.09-8.25-11.82-18.37-15.4-28.48-17.33-51.93-3.14-109.32,17.31-158.11,5.55-12.85,11.71-25.55,19.7-37.12l.33-.47.43-.59.88-1.16,16.06,11.92Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2286.15,1261.31c11-18.23,24.79-46.06,21.95-67.52-4.35-20.34-7.31-49.83.1-65.85a383.1,383.1,0,0,0,10.93-37.11,182,182,0,0,0,5.06-32.46l.06-2.15v-1l0-.67,19.95-1.47a76.21,76.21,0,0,1-.15,8.84,212.6,212.6,0,0,1-5.42,33.48c-2.2,9.63-5.3,20.06-8.29,29.5l-3.24,9.63-.15.44c-2,4.06-2.75,9.25-3.09,14.07-.64,10.7.54,22,2.33,32.77.47,2.83,1.12,5.87,1.66,8.69a56.43,56.43,0,0,1,.7,10.66c-1.14,25.48-12.6,49.27-25.36,70.65l-17-10.49Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2094.76,1824.12c-14.85,47.66-14.8,105.62,19.61,144.75,55,62.81,108.15,126.07,128.37,209.09-16.19-29.87-33.79-59.06-54.06-86.25-27.43-37.27-59.69-71.89-90.65-106.31a133.76,133.76,0,0,1-31.77-61.4c-7.57-34.84-3.56-70.77,8.55-103.88.33-.83,1-2.56,1.37-3.39l18.58,7.39Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2114.86,1979.46c-2.46,24.6-4,50-3,74.58.65,11.47,1.35,23.31,5.53,33.83,6,11.92,12,24.14,14.38,37.8,2.44,14,.19,27.38-2.29,40.92-1.64,11.52-1.33,23.92-.3,35.7,2.39,24,7.33,48.56,18,70.29a22.91,22.91,0,0,1,1.68,7.41,52.3,52.3,0,0,1,.09,5.24c-.38,8.87-1.6,17.21-2.33,25.74-2,21.38-1.77,42.76,3.94,63.31a123.34,123.34,0,0,0,13.36,31l-.05,2.74c-.86,74.33-3.33,148.77.81,223,3,50.81,5.92,101.90,12.76,152.31,3.91,22.17,7.9,46.76,11,69.16,2.48,19.29,5.57,38.77,5.57,58.45-.25,6.59-2.33,13.10-3.88,19.32-6.56,24.07-13.33,47.52-18.55,71.76-8.73,41.71-23.48,122.42,19.74,143.81,8.27,3.93,18.12,5.51,27.44,5.43,67.06.17,324.85-.12,396.24,0,14,.33,80.65-.23,93.23,0h9.32c1.6,0,3,0,4.46,0a137.14,137.14,0,0,0,38.51-6.31c57.53-17.42,98.88-75.43,96-135.57-1.9-50.07-10.91-100.15-29.5-146.75-1.82-4.74-8.52-20.42-10.7-25.57-40.86-99.37-96.38-196.72-104-306.1-2.18-42.18-6.2-83.84-6.63-126.33-.6-50.45,5.42-101.07,16.68-150.25,32-145.13,110.73-278.21,116.27-428.76,5.72-113.82-18.59-227-49.34-336.17-1.24-4.94-3.94-12.45-5.46-17.36a481.16,481.16,0,0,0-20.45-50.65c-24.85-53-62.86-100.75-87.19-154.15-22.8-48.77-36.86-101.46-46.25-154.26l-1.62-9.4-.82-4.7c-.08-.51-.11-.51-.22-1.44l-.14-1.24c-5.19-54.48-5.46-109.8,5.24-163.77a258.23,258.23,0,0,1,10.64-37.55c4.59-12.27,10.43-23.65,16.43-35.10,17-32.27,38.56-63.83,49.54-97.88,11.28-33.76,11.31-70.08,4.93-104.94-10-58.33-36.21-115.74-82.77-153.68-112.87-91.83-323.44-87.81-435.18,4.6a214.77,214.77,0,0,0-53.39,92.67c-3.41,9.16-7.48,18.09-11.33,27-3.72,8.45-7.62,16.86-11,24.95a66,66,0,0,0-3.72,10.64,20.61,20.61,0,0,0,0,4.11c.14,2,.37,4.17.62,6.37,1.78,16.48,4.78,34.34,1.73,51.40-1.52,8.33-6,15.36-10.17,22.29-17.1,27.31-36.36,53-52.64,80.43a157.06,157.06,0,0,0-8.93,17,30.36,30.36,0,0,0-2.16,6.55c.12,15.93,20.36,18,32.92,20.23,9.06,1.87,18.10,4.58,24.63,12.17,9.62,11.09,6,26.64.16,37.76-1.64,3.37-4.86,8.15-4.34,11.79a1.87,1.87,0,0,0,.61.92,11,11,0,0,0,2.83,1.8c2.26,1.17,5.27,1.84,8,2.64a25.57,25.57,0,0,1,6.85,2.56,11.75,11.75,0,0,1,5.51,7.94,12.22,12.22,0,0,1-.85,6.83c-3,6.45-10.38,11.47-12.69,17.67a2.29,2.29,0,0,0-.12-.85,2.38,2.38,0,0,0-.40-.8c-.14-.13.29.30.50.52s.53.51.84.77c4.54,3.87,9,5.71,14,10.13a21.56,21.56,0,0,1,6.89,11.15,23.86,23.86,0,0,1-1.8,14.90l-.72,1.66-1.27,3c-2.38,5.74-4.26,11.08-5,16.91a43.79,43.79,0,0,0,1.59,16.44c10,34.23,44.25,45.42,76.89,41.86A178.71,178.71,0,0,0,2235,1082l3.21-1.11,12.82-4.47c34-12,69.41-24.87,103.72-35.78,17.47-5.6,35-11.22,53-16-51.45,30.82-107.55,52.94-164,72.59-31.62,10.54-68.28,15.81-99.35.47-25.19-12.28-42.94-40.27-40.22-68.66.80-7.56,3.36-15,6.13-21.77l1.39-3.29.35-.81c.12-.28.25-.57.30-.72a11.50,11.50,0,0,0,.85-2.89,2,2,0,0,0-.36-1.64,6.94,6.94,0,0,0-1.12-1.22,39.42,39.42,0,0,0-4.65-3.31c-1.88-1.21-4-2.53-6.09-4.08-3.94-3-8-6.24-9.49-11.34-1.81-5.34.37-11.78,2.81-15.70,3-5.34,7.26-9.15,10.70-13.71-1.48,2.76,0,7,2.83,8.30-.13,0-.55-.19-1-.31l-1.52-.42C2091.12,953,2077.54,945,2080.54,928c1.59-9.72,8.32-16.18,9.56-25.34.29-2.92.20-4.90-1.52-7-1.44-1.75-4.51-3.42-8.19-4.52a73.09,73.09,0,0,0-10.69-2.19,93.38,93.38,0,0,1-16.40-3.86c-10.32-3.29-21.15-11-24.83-22a35.20,35.20,0,0,1-2.11-12.19c.19-4.84,1.93-9.30,3.61-13.45a175.07,175.07,0,0,1,9.94-19.21c14-23.89,30.27-46.54,45.28-69.53,5.09-8.20,10.78-15.92,14.26-24.76,1.85-6.85,1.64-14,1.31-21.23-.54-12.32-3.18-25.31-3.66-38.07,0-.68,0-1.50.05-2.29l.13-1.35c.89-6,3-10.72,5-16,7.20-16.88,16.16-36.52,21.37-49.56A233.39,233.39,0,0,1,2183,492.78c28.87-23.66,62.33-41.62,97.43-54,135-47.44,334.64-24.52,414.59,107,31.28,50.46,49.77,125.39,42.35,184.68a205.71,205.71,0,0,1-8.55,38c-11.71,36.27-33.30,68-50.90,101.20-5.56,10.62-11.15,21.51-15.31,32.64a238,238,0,0,0-9.73,34.48c-10.07,50.78-9.81,103.48-5.11,155,.08,1,.28,2.48.37,3.34l.15.91.79,4.50c7.11,42.24,17,84.21,31.91,124.34a491.27,491.27,0,0,0,30.79,66.28c20.76,37.17,47.44,74.64,66.20,113a490.79,490.79,0,0,1,22.27,52.49c3,8.52,6.40,18.41,8.85,27.13,24.67,87.37,44.57,176.46,49.69,267.46a659.86,659.86,0,0,1-25.57,224.39c-30.35,104.33-77.63,203.20-96.91,310.30a603.19,603.19,0,0,0-10.66,118.66c.26,38.44,4,77.33,6,116l.28,4.55.29,4.55c.59,7.56,1.29,15.12,2.29,22.64,13.15,98.24,62.93,186.39,100,277.15l7.30,17.22q.90,2.13,1.80,4.37l1.78,4.44c20,50.30,29.61,104.40,30.90,158.36,1,67-45.68,130.64-109.82,150a158.35,158.35,0,0,1-48.89,7.27c-69.34-.09-327.10.12-400.90.06-14.12.47-80.58-.32-93.23,0-21.41.66-43.33-4.12-58.58-20.41-10-10.36-15.77-24-18.94-37.58-5.80-25.92-3.94-52.11-.48-77.83,5.49-40.38,17.56-79.59,27.76-118.77a33,33,0,0,0,1-6.11,176.18,176.18,0,0,0-1-18.55c-3.51-35-9.38-70.76-15.40-105.51-3.82-26.50-6-52.95-8.12-79.54-2.85-37.36-5.18-74.66-6.52-112.12-1.56-62.38,0-124.68.83-187l1.36,5.22a141.38,141.38,0,0,1-13.94-33.34c-6.41-22.86-6.77-47.14-4.54-70.38.68-8.23,1.92-16.56,2.26-24.54a28.90,28.90,0,0,0,0-3.15c0-.86-.26-1.45-.08-1l.30.64c-15.82-32.13-24.10-81.80-19.37-117.48,3.58-19.23,5.53-32.32-2.52-50.75-2.52-5.88-5.10-11.07-8-17-5.54-13.09-6.39-27.20-7.21-41-.82-19.65,0-38.86,1.38-58.30.49-6.45,1-12.79,1.73-19.35l19.53,2.17Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2381.23,1386.39c113.18,27.55,244.61,3.44,324.27,108.58a263.62,263.62,0,0,1,17.16,25.24c18.07,28.65,25.87,62.49,29.86,95.75,2.17,17.12,2.70,34.48-.52,51.53a86.50,86.50,0,0,1-4.76,17,173,173,0,0,1-4.89-16.71c-6.69-26.77-8.33-54.54-15.61-81.10-4.75-18-10.85-35.73-20.14-51.87-6.83-11.52-14.16-23.06-22.69-33.41-79.68-98.87-202.08-64.44-302.68-115Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2565.08,1430.42a712.53,712.53,0,0,1-80.88-23.18c-23.38-8.57-47.27-18.07-67.42-33.36A1217.15,1217.15,0,0,0,2114.12,1179c-19-8.89-37.77-18-56.33-27.85-25-13.27-49.53-27.59-71.80-45.41-16.78-13.33-30.91-28.26-46.60-42.16a391.16,391.16,0,0,0-48.24-36.65c-39.43-25.07-84.80-48.74-125.46-72.19-42.34-24.11-82.80-51.54-123.50-78.17-156.07-102.66-308.34-211.14-465.71-311.74-4.32-2.65-8.59-5.21-13-7.63-1.40-.79-2.80-1.52-4-2.13a12.11,12.11,0,0,0-2.61-1c-2.91-.66-5.58-.31-8.93.68a55.37,55.37,0,0,0-15,7.86c-15.40,11.14-28.51,26.29-39,42.21a120.09,120.09,0,0,0-9.09,16.49,36.51,36.51,0,0,0-3.31,10.90c-.07.74.09,1.18-.09.52a4.42,4.42,0,0,0-.56-1.07c0-.10-.36-.47-.21-.30l.44.50c1.12,1.21,2.92,3.05,4.10,4.22,82.37,78.76,167.58,154.87,251.89,231.59,50.93,46.07,103.17,92.93,154.60,138.56,20.79,18.15,41.58,37.35,61.47,56.54,17.32,16.46,34,32.78,53.71,46a183.74,183.74,0,0,1,26.24,19.57c10.68,9.72,19.87,20.64,29.17,31.32a517.85,517.85,0,0,0,42.31,44.06l.75.70.59.79c5.18,6.75,12.23,13.46,18.71,19.45,35.51,31.60,74.47,60.43,114.25,86.34,7.77,5.12,16.79,9.54,24.72,13.73,35.09,18.46,68.12,41.46,96.23,69.60,6.86,6.75,13.39,14.21,20.12,21.07,13.33,13.32,27.67,25.59,42,37.94,11.77,10.06,32.19,27.24,44,37.91a152.51,152.51,0,0,1-28-10.06c-31.71-14.44-59.30-36.58-82.64-62.30a354.27,354.27,0,0,0-76.69-61.83c-8.09-4.88-16.35-9.49-24.79-13.94-8.19-4.26-18.73-9.55-26.09-14.39a1056.92,1056.92,0,0,1-95.09-69c-11.47-9.42-22.87-19-33.42-29.69a118.92,118.92,0,0,1-10.59-12l1.35,1.50c-10.44-9.53-20.52-19.54-30.11-29.91-14.31-15.22-26.53-31.31-41.57-45.06-7-6.38-15.73-12.42-23.76-17.46a270.08,270.08,0,0,1-25.83-19.68c-31.51-27.76-60.18-57-92.15-84.13-134.83-119.56-269-239.87-400.60-363-4.22-4-8.51-8.18-12.53-12.48a20.05,20.05,0,0,1-4.57-7.38,22,22,0,0,1-1.12-5.36c-.49-4.07.32-8.08,1.10-11.64,6.44-23.74,25.72-48.80,42.86-65.86,14.09-13.41,32.14-27.92,53.22-27.81,7,0,14.09,3,20,6.48,10.82,6,21.27,12.74,31.68,19.34C1353,650.78,1509.34,760.32,1655,857.24c45.92,30.42,91.73,61.35,139.94,88,47.67,27.87,99.79,53.18,142.84,88.10,11,8.88,21.53,18.54,31.64,28.28,47.61,49.45,110.84,78.51,172.23,107.55,100.82,48.40,195.09,110,279,184,9.30,9.11,20.53,15.94,32.22,21.84,24.12,12.06,50.21,21,76.16,28.73,13.07,3.86,26.40,7.47,39.61,10.56l-3.56,16.11Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2283.27,1711.05c-26.32-11.19-52-23.61-77.33-36.81-25.72-13.83-51.09-27.56-74.09-46.06-22.43-18.90-41.32-40.50-60.44-62.40-30.62-36.25-60.77-73-86.81-112.68-10.32-15.94-20.18-32.21-28.58-49.53,14.27,12.73,27.37,26.44,40.38,40.32,50.75,54.61,95.47,115.54,151.62,164.56,13.88,11.17,29.93,20.86,45.47,30.09,32.07,18.75,65.43,36.30,98.61,53.55l-8.83,19Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2181.29,1575.35c-26-6.31-46.94-26.13-60.52-48.64-10.39-17.26-16.66-36.82-20-56.61a189.51,189.51,0,0,0-6.39-26.25,225.87,225.87,0,0,0-11.94-29.33c-16-32.25-38-60.61-62.50-87.09,23.67,11.33,43.76,29,60.53,49.09,19,23.16,32.78,51.13,38.19,80.81,1.14,6.33,1.85,12.67,2.84,19a177,177,0,0,0,12.58,43.41c10,22.32,25.90,42.89,47.20,55.62Z" data-v-98c7650a></path><path class="cls-lungLeftMale-4" d="M2594.75,1861.79c-46.43,18.91-99.94,21.07-147.60,5.06-29.25-9.70-55.39-27.30-78-48-30-27-55.36-58.34-77.39-91.85-19.16-29.13-35.83-59.92-48.54-92.40-1.81-4.65-3.50-9.37-5-14.16,12.69,15.50,24.57,31.22,36.39,46.92,34,45,70,96.09,108.94,136.40,13.36,13.53,27.71,25.91,43.85,35.93,49.18,30.75,111.57,36.62,167.33,22.06Z" data-v-98c7650a></path><path class="cls-lungLeftMale-5" d="M2056.41,869.61c13.54.69,26.89,3.94,39.88,7.40,3.86,1,8.24,2.13,12,2.66a9.09,9.09,0,0,0,7.37-2c5.17-4.46,6.33-13.08,6.33-20.22a125.22,125.22,0,0,0-1-13.28,40.82,40.82,0,0,1,7.12,12.09c6.59,16.57-.50,37.43-21,36.51-9.45-.87-18.15-3.69-27.09-6.14l-25.18-7.14,1.55-9.88Z" data-v-98c7650a></path><path class="cls-lungLeftMale-5" d="M2134.62,709.79c10.09.17,19.70,1.78,29.39,3.81a49.06,49.06,0,0,1,17.41,7.38c9.89,6.57,16.63,16.15,26.49,22.50a73.76,73.76,0,0,0,10.25,5.37l0,.17c-1,.10-2,.11-3,.17-11.46.40-21.84-6.38-30.32-13.26-5.87-4.63-11.48-8.78-18.21-11.79-10.92-4.32-21.74-8.09-32-14.35Z" data-v-98c7650a></path><path class="cls-lungLeftMale-5" d="M2162.88,753.60c-14.15-6.61-17.62-25-14.31-39,.13-.49.23-.88.41-1.49l9.73,2.30c-.58,6-1,12.19-.16,18.18a29.06,29.06,0,0,0,7.08,16.08l-2.75,3.92Z" data-v-98c7650a></path><path class="cls-lungLeftMale-5" d="M2196.75,741.72a117.41,117.41,0,0,1-40.41,16l-.15,0a3.14,3.14,0,0,0,1-.51,3.34,3.34,0,0,0,1.26-2.37,2.57,2.57,0,0,0-.13-1c-.08-.19-.07-.10,0,0l.19.39a29,29,0,0,1,4.32,13.88c.09,6.67-2,13.20-4.16,19.46-1.28-6.30-.63-12.68-1.38-19a21.46,21.46,0,0,0-4.16-9.66c-.81-1.20-1.82-2.44-1.92-4a4.11,4.11,0,0,1,1.61-3.51,8.49,8.49,0,0,1,2.84-1.15l2.28-.69a157.70,157.70,0,0,0,33.32-16.20l5.50,8.35Z" data-v-98c7650a></path><path class="cls-lungLeftMale-5" d="M2116.31,962.32c3.68-3.83,16.55-14.71,29.68-10.38a.41.41,0,0,0,.51-.56c-4.17-8.46-12.74-9.62-23.88-10.44-23.27-1.72-23.88-13.15-23.88-13.15s-5.10,1.36-2,7.49c2.65,5.20,14.94,20.59,18.28,25.87C2115.53,961.90,2115.75,963.06,2116.31,962.32Z" data-v-98c7650a></path></g>', 1))
      ], 16);
    };
  }
});

const LungLeftMale = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-98c7650a"]]);

const _hoisted_1$1 = {
  id: "BODY_PART",
  "data-label": "BODY PART"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LungLeftFemale",
  props: {
    width: {},
    height: {},
    fill: {},
    stroke: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const svgRef = ref(null);
    const emit = __emit;
    const handleBodyPartClick = async (partName, e) => {
      console.log("Clicked:", partName);
      const popover = await createPopover(_sfc_main$b, e, {
        title: partName
      });
      const { data, role } = await popover.onDidDismiss();
      console.log("Popover dismissed:", { data, role });
      emit("value-changed", partName, data);
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
        createBaseVNode("g", _hoisted_1$1, [
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
        _cache[5] || (_cache[5] = createStaticVNode('<g id="BODY_OUTLINE" data-label="BODY OUTLINE" data-v-8c015b29><path class="cls-lungLeftFemale-3" d="M2180.09,1561.92c-14,10.62-27.15,23.2-40,35.34-45.08,43.77-89.39,89.14-128.22,138.46-5,6.65-10.39,14-14.07,21.15a20.48,20.48,0,0,0-1.81,4.82c-1.76,5.21-4.85,9.08-8.86,12.66-2.57,2.23-6.24,4.46-10.45,4.64a56.33,56.33,0,0,1-13.92-1.52c-.92-.16-4.45-1-5.24-.94-.23,0-.29,0-.28,0a1.86,1.86,0,0,0,.54-.13,3.67,3.67,0,0,0,1-.55,3.11,3.11,0,0,0,.71-.69,11.62,11.62,0,0,0-.88,1.47c-1.23,2.27-2.14,6-1.28,8.2a1,1,0,0,0,.51.59c4.42,2.46,9.53,2.44,14.31,4.75a11.28,11.28,0,0,1,6.53,11.38,21.25,21.25,0,0,1-1.06,4.06c-12.41,36.39-15.11,77.39-1.14,113.64,17.7,48,65.09,83.53,116.5,85.42,25.95,1.21,51.64-5.56,75-16.57,40.5-19,74.4-49.65,105.74-81.23A327.37,327.37,0,0,1,2240,1950c-37.76,40.86-90.19,73.28-147.65,71.21-58.27-1.34-112.77-40.82-133.13-95.33-16-40.75-13.48-86.69.67-127.46a8.2,8.2,0,0,0,3.35,8.57,4.3,4.3,0,0,0,.52.28c-.81-.29-2.17-.58-3.46-.91-5.88-1.47-12.62-3.53-17-8.53-8.44-9.81-6-24.24.81-33.93,3.05-4.5,9.14-6.93,14.39-6.42,6.14.38,11.42,2.65,17.28,2.45h.12l-.36,0a4.2,4.2,0,0,0-1.37.34c-.22.11.19-.1.59-.46a15.44,15.44,0,0,0,3-3.65l0,.12s0,.18,0,0c2-7.57,6.77-14.55,10.86-20.66,18.7-26.3,40.61-50,62.53-73.5,25.08-26.51,50.88-52.2,77.78-76.87,13.74-12.44,27.23-24.55,42.42-35.53l8.77,12.14Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-4" d="M2333.68,1310.32c27.37-54.15,25.36-42.29,31.51-80,5.47-115-144.51-75.54-144.51-75.54s-71.16,18.61-96.35-13.14-6.56-64.59-6.56-64.59" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2093.08,2008.62c-1.43,11.42-1.91,23.45-2.4,35-1.64,59.13,4,118.49,15.45,176.51,3.15,16.56,7.47,36.28,10.59,52.79,10.88,53.26,15.32,108.41,10.1,162.64-5.27,59-16.18,119.75-26.59,178.06-14.95,81.67-25.36,164.85-23.75,248,1.86,95.27,18.95,189.42,35.32,283.24l-7.75-6.51h746.14l-7.57,5.74c.29-1.08.61-2.33.91-3.53,17.85-77.25,19.87-159.05,2.22-236.5-22.59-100.48-87.28-182.69-145.56-265.12-29.48-42.72-58.64-90.11-61.52-143.47-.79-18-1.16-36.51-.35-54.55,0-4.79,1.15-18.32,1.45-23.39.8-6.82,1.69-17.11,2.65-23.29.6-3.9,1.67-11.56,2.26-15.44s2.09-11.39,2.79-15.34c.75-4.33,3.75-18.16,4.78-22.85,9.28-40.18,21.47-79.75,34.28-118.89,12.66-38.15,26.39-78.74,40-116.65,23.83-65.79,56.67-133.68,77.7-200.39,15.22-48.24,24.66-98.34,26.95-148.89.59-13.79.68-27.92.53-41.75-.41-10.36-.79-23.92-1.69-34.17-4.21-60.87-16.31-121-31.56-180.07-2.57-9.1-6.43-24-9.18-33l-3.49-10.75a480.5,480.5,0,0,0-35.16-79.45c-25.77-45.88-57.36-88.87-77.82-137.84-21.41-49.56-34.05-102.42-42.82-155.5a639.65,639.65,0,0,1-3.41-87.76c1.63-44.38,6.47-89.71,25.87-130.57,7.73-16.38,16.81-32.3,25.75-47.94,15.2-26.48,29.73-52.42,37-81.8,11.57-46,4.09-94.75-10.09-139.41a277,277,0,0,0-13.91-34.64,224.94,224.94,0,0,0-76.65-89c-26.85-18.26-57.28-30.82-88.48-39.63a363.07,363.07,0,0,0-44.12-9.46c-81.6-12-168.33-2.47-241.82,36.33a296.17,296.17,0,0,0-109.32,99.83c-34.31,55.3-47.53,137.94-39.59,202.21,1.89,15.06,7,29.4,10.08,44.41,1.69,8,3.28,16.57,2.68,25.17a42.47,42.47,0,0,1-5.56,17.9c-4.07,7-9.12,13.42-13.72,19.74-2.82,3.77-6.27,8.86-9.11,12.52-6.25,8.38-12.92,16.37-18.71,24.27-6.63,8.9-12.26,18.69-11,29.8,1,9.94,5,19.84,15.09,23.58,6.27,2.74,14.28,3.3,21.53,5.51,20.41,5.69,21.2,24.65,16.4,41.73-1.42,5.34-3.19,10.37-5,15.29l-8.2-2.92a151.07,151.07,0,0,1,1.23-15.46,90.36,90.36,0,0,0,.8-13.93c-.27-3.84-.95-7-3.92-9.23a16.49,16.49,0,0,0-5.2-2.34c-2.13-.63-4.52-1.13-7-1.64-5-1-10.42-2.07-15.84-4.3a35.48,35.48,0,0,1-14.54-10.64c-5.55-7-8.09-15.64-9-24.37a46.42,46.42,0,0,1,5-25.38c7.27-14.22,18.39-25.78,27.45-38.3,3.83-5.27,5.5-7.47,9-12.39,5.31-7.89,12.58-15.56,15.42-24.29a32.85,32.85,0,0,0,1.08-13c-.84-9.59-3.52-19.62-5.9-29.13-19.23-64.53-6.84-153.76,19.79-214.62a214.67,214.67,0,0,1,17-31.29l2.26-3.2,4.55-6.39a308.93,308.93,0,0,1,105.6-92c69.3-36.83,150-48.27,227.61-41a390.14,390.14,0,0,1,76.68,14.83c112.78,33.48,175.85,108.69,194.94,224,7.14,41.48,4.31,85.67-12.36,124.74-11.95,29.24-28.79,54.87-43.39,82.25-4.71,8.83-9.34,17.86-13.33,27-15.56,36.66-19.75,77.77-21.11,117.55a663.07,663.07,0,0,0,2.37,75.89c.38,3.68.59,7.38,1.29,11,9,53.54,22,107,44.48,156.48,2.87,6.43,6.64,14.24,9.83,20.46,19,37.62,43.76,72.06,64.3,109a495.78,495.78,0,0,1,41.13,97c26.65,94.27,45.91,192.3,41.56,290.72-2.33,51.9-12,103.48-27.63,153-21,67-54,135.14-77.85,201.1-13.52,37.7-27.16,78.18-39.76,116.15-12.66,38.58-24.78,77.91-33.92,117.43l-3.22,14.85c-.57,2.47-1,4.95-1.46,7.44l-1.36,7.46-1.36,7.46-1.1,7.49-1.1,7.48-.55,3.75-.41,3.76-1.62,15-1,15.09c-.22,2.51-.28,5-.36,7.55-.8,17.5-.44,35.53.32,53,1.58,29.6,12.35,57.87,26.4,83.8,29.69,53.48,69.73,100.8,102.88,152.31,46.66,70.37,80.11,146.39,87.22,231.43a573.63,573.63,0,0,1-9.9,170.72c-.56,2.55-1.13,5.1-1.73,7.65l-.94,3.84c-.33,1.31-.65,2.55-1,4l-1.58,5.74H2097.44l-1.13-6.51c-16.47-94.42-33.69-189.37-35.55-285.66-1.08-55.7,3.25-111.47,10.39-166.6,4-28.23,8.55-56.45,13.6-84.46,9.28-52,19.07-106.62,24.68-158.89,3.18-29.34,4.72-59,3.34-88.31-1.6-35.07-8-70.7-14.95-105.25-12.83-58.83-22-118.68-23-179-.24-12-.22-24.42.15-36.28.39-12.26,1.13-24.41,2.53-36.57l15.59,2.09Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-5" d="M2213.5,772.4s-23.08-24.76-40.39-16.24-38.77,22.82-47.35,15.58-8.86-21-3-24.36c9.42-5.31,38.71-11.36,56.08-7.22C2193.82,743.72,2204.43,751.64,2213.5,772.4Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-5" d="M2122.29,831.31s-5.71,10.28,8.46,17.78c12.28,6.5,39,1.56,51.76-6.83s2.18-9.49,15-11,31.07.69,31-10.21c0-10.71-21.17-4-35.77-13.51S2174.83,788,2152,785.83s-42.15,18.84-35.94,28.7,11.36-.8,19-3.72-3.56,14.34-.64,20.55,18.31,7.84,20.93-.13c4.38-13.29-3.25-19.34,3-20.8s20.86,6.29,22.32,11.76-4,15.33-17.15,18.25-28.31,1.51-33.42-4.33S2125.94,831,2122.29,831.31Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2621.35,1509.23c-23-33.36-47.82-67.11-83.63-87.21-35.35-21-74.9-33.46-112.14-50.9-37.43-17.48-73.21-40-108.55-61.22-63.34-39-127.3-76.92-189.54-118.3-1.68-1.1-10.8-7.28-12.11-8.14a4.76,4.76,0,0,0-1-.48,22,22,0,0,1-5.19-2.34c-10.69-7.37-22.68-15-33.79-21.86-3-1.77-7.67-5-10.6-6.91-48.72-32.33-97.68-65.62-141.9-104.18a22.05,22.05,0,0,1-4.06-4.4l-.42-.62a4.17,4.17,0,0,0-.69-.75c-1.81-1.48-5.24-4.34-7-5.83-1.36-1.16-2.76-2.12-4.08-3.41-3.35-3.53-6.56-7-9.85-10.5-39.2-42.59-73.41-88.88-116.59-127.15a24.61,24.61,0,0,1-4.59-5l-.33-.5-.16-.21a5,5,0,0,0-.37-.42,7.5,7.5,0,0,0-.65-.57C1594.75,742.43,1409.56,600,1228.08,456.47a5,5,0,0,0-4.57-.56,91.22,91.22,0,0,0-10.43,4.55c-21.47,10.88-38.62,29.57-48.7,51.41a5.33,5.33,0,0,0,.33,6.1l3.88,4.48c62.37,71.31,134.61,151.49,196.87,223,48.25,55.73,109.27,126.92,158.17,182.41,54.55,59.14,106.79,120.76,161.2,180,7.76,8.28,17.13,19.32,24.77,27.82,20.47,23.1,41.91,45.69,62.73,68.5,20.49,22.64,43.52,43.3,66.21,63.83,9,7.79,18.39,17,27.57,24.67,6.19,5.31,12.52,10.54,18.88,15.79,29.36,24.62,67.3,53.06,96.71,77.37,23.94,19.18,51,40.49,75.16,59.44,55.92,42.69,120.68,94,169.62,150.32l6.71,7.59,3.35,3.81,1.7,2,.57.67.41.51a147.25,147.25,0,0,1,13.28,21.94c22.1,39.65,47.41,78.33,79.75,110.26a308.46,308.46,0,0,0,29.67,25.94c53.06,40.39,115.44,67.75,181.84,77-61.49,1.27-122.5-19.86-173.65-53.57-40.51-26.11-73.8-62.54-100.66-102.15-9.61-14.11-18.6-28.67-27.15-43.4-1.24-2.19-2.88-4.83-3.88-6.86a132.19,132.19,0,0,0-11.94-19.49c-7.22-8.09-19.46-21.76-27.09-30-3.77-3.83-8.48-8.73-12.33-12.5-45-45.31-101.36-88.56-148.07-124.1-17.91-14-40.62-31.92-58.46-46-16.18-12.88-32.1-26-48.4-38.66-23-17.72-55.81-43.78-77.45-62.47-24.74-22-49.74-44.27-73.48-67.41-6.7-6.55-13.36-13.35-19.78-20.35-4-4.52-10.43-11.55-14.57-15.94-19.67-21.16-39.35-42.68-58.45-64.41-4.34-5.06-11.8-13.53-16.38-18.44-54.33-59.42-106.41-121.11-160.83-180.39-48.89-55.73-109.83-127-158.18-183-62.91-72.43-135.42-153.3-198.55-225.51l-1-1.17-.51-.59a21.2,21.2,0,0,1-3.08-23.8l1.42-3a132.37,132.37,0,0,1,14-22.33,119.77,119.77,0,0,1,52.77-39,21.38,21.38,0,0,1,20.85,3.66c4.58,3.63,13.46,10.61,18.22,14.36,156.5,123,331.85,259.29,487.11,383.12,13.47,10.88,29.74,23.8,42.68,34.91a22.84,22.84,0,0,1,3,3.7,4.05,4.05,0,0,0,.68.8l1.06,1c43.67,38.58,78.79,85.89,117.84,128.34,3,3.31,6.14,6.57,9.22,9.85,2.43,1.92,6.44,5.4,8.89,7.41a22.66,22.66,0,0,1,4.91,5.05c.57.83.44.66.59.86a4.26,4.26,0,0,0,.36.39l.21.2q19.33,16.85,39.64,32.55c34.54,26.78,71.91,51.72,108.41,76.1,12.46,7.6,24.68,15.68,36.76,23.87l.24.11.36.12.77.27a25.8,25.8,0,0,1,6.63,3.64l10.22,6.93c58.08,39.21,118.45,75,177.76,112.46,38.34,23.27,76.85,48.41,117.3,67.71,35.54,16.88,73.34,29.23,107.07,50.09,1.82,1.07,3.53,2.3,5.28,3.45l5.29,3.56c33.39,22.84,55.35,58,72,94Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2398.4,797.46c5.87-27.84,25.44-54.87,57.13-49.23,18.59,3.27,35.13,15.36,44.4,31.79,8,13.83,10,30.6,7.88,46.26-3.85,29-20.11,54.7-39.45,76-11.75,12.65-24.59,24.26-39.34,33.39a51.3,51.3,0,0,1-6.46,3.37c-11.39,4.65-23.52-1.17-29.41-11.22a29,29,0,0,1-4-11.36c6.76,4.66,13.05,9.85,20.89,11a14.12,14.12,0,0,0,9.72-2.14c12.76-7.74,24-18.12,34.44-28.74,19.19-20.2,36.62-44.2,41.79-72,2.38-13.41,1.49-27.52-4.79-39.79a56.14,56.14,0,0,0-37.12-29.24c-28.3-6.55-46.63,18.48-55.71,42Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2381.28,972.26c5.79,44.75-12.35,90.93-42.59,123.76l-6,6.09c-2.93,2.86-6.44,5.84-9.49,8.57a244.6,244.6,0,0,1-24,17.45c-23.67,15.13-49.9,26.46-76.64,34.42l-4.57-15.43c41.15-11.95,79.69-30.78,110-61.49,30.44-29.87,51-70.4,53.35-113.37Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2523.21,855.85c8.31,24.46,28.08,42,49.85,54.79,4.14,2.54,9.33,5.42,13.52,7.88,1.86,1,3.72,2.09,5.56,3.27a73.74,73.74,0,0,1-12.88-1.67c-21.38-4.8-41.5-18.55-51.19-38.63-3.72-7.94-6.12-16.87-4.86-25.64Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M1709.49,1013.41c9.15,16.15,19.55,31.61,32.6,44.74,15,14.53,34.42,23.55,51.75,36.16a92.12,92.12,0,0,1-15.88-1.76c-18.51-3.73-37-11.56-49.89-26.41-12.32-14.11-20.73-33.81-18.58-52.73Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2298.61,912.78c2.11,9.55-2,19.47-7.28,27.33-7.72,11-19,19-31.32,24.22a78.06,78.06,0,0,1-21.77,5.38c11.43-8.76,23.89-15.61,34.94-24.72a114.56,114.56,0,0,0,11.37-10.32c5.93-6.47,11.18-13.39,14.06-21.89Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2439,807c5.65-1.18,14.39,5.31,18.78,8.62,10.44,8.74,13.84,24.62,8.39,37-3.28,7.65-9.44,13.74-16.14,18.37a81.09,81.09,0,0,1-10.38,6.3c-4.68,2.56-9.5,4-12.29,8.28-3.31,5-8,10.57-14.69,10.51-3.94-.19-7-3.37-8.56-6.64a12.61,12.61,0,0,1,.77-13.59c2.46-3.56,5.85-6.06,9.13-8.58a20.32,20.32,0,0,0,3.77-3.33.94.94,0,0,0,.1-.44c.1-3.18-.65-6.41-1.1-9.61-.63-3.86-1.25-7.77-1.68-11.78A53.84,53.84,0,0,1,2420.2,853a41,41,0,0,1,2.15,9,10.35,10.35,0,0,1-.11,2.87,6.46,6.46,0,0,1-1.78,2.9c-4.47,4.44-12.7,8.41-13.26,15a10.23,10.23,0,0,0,4.09,7.92c2.63,1.53,5.64-.49,7.8-2.43,3.09-2.53,4.61-6.62,7.78-9,6.55-4.79,14.26-7,20.74-11.77,7.88-5.14,14.74-12.32,17-21.62,2.64-10.92-1.56-23.4-10.75-30a86.45,86.45,0,0,0-9.45-6.82c-1.67-.92-3.4-2-5.37-2Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2653.69,2461.36a1646.18,1646.18,0,0,0,26.14,228.43c2,10.86,4.17,21.7,6.06,32.63-1.85-5.21-3.71-10.43-5.5-15.68-3.65-10.35-7-21.22-10.13-31.69-4.61-15.28-9.22-32.76-12.83-48.29-9.6-40.6-16.65-82-19.28-123.66-.2-4.59-.64-12.16-.69-16.76-.2-8.53-.23-16.84.3-25.42l15.93.44Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-3" d="M2110,929.39c7.36,15.13,11.58,40.17-7.25,48.69-7.71,3-15.59-1.11-22.39-3.56a39.41,39.41,0,0,0-13.61-2.91,23.83,23.83,0,0,1-3.24.08c-14.28-.69-25.38-12.32-27.34-26.1l9.14-2.16a26.33,26.33,0,0,0,5.43,11.38c3.83,4.45,9.82,7.39,15.74,6.86a37.12,37.12,0,0,1,9.59,1.34c7.69,1.94,13.71,6.49,20.86,7.7a8.44,8.44,0,0,0,5.32-1.35c12-7.11,9.31-27.94,7.75-40Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-5" d="M2170.53,1046.23s-6.58-2.3-11.71,6-22.2,37.56-45.86,36-30.12-13.16-24.54-24.54,14.06-12.72,11.16-15-29.23-13.17-25.44-30.79,41.8-4.4,55.11,4.24c11,7.14,22.23,16.46,26.47,16.91s11,1.42,13.69,3.84C2171.73,1045,2171.17,1046.19,2170.53,1046.23Z" data-v-8c015b29></path><path class="cls-lungLeftFemale-5" d="M2040.21,1702.89s-15.54,21.21-10.38,57.79c5.29,37.63-12.65,64.1-35,77.19-19.28,11.28-31.11,26-28.81,44.94s-7.62-26.08-10.94-56.75c-.66-6.07.45-15.9,3.44-26.59,1.8-6.48-12.91-17.59-9.71-24,2.57-5.18,22.66-6.11,25.74-11.33,18.76-31.81,44.93-62.53,53.23-70.5,10.8-10.37,20.45-9.14,19.94-2.1C2047.54,1693.67,2043.78,1695,2040.21,1702.89Z" data-v-8c015b29></path></g>', 1))
      ], 16);
    };
  }
});

const LungLeftFemale = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8c015b29"]]);

const _hoisted_1 = { class: "lung-view-selector" };
const _hoisted_2 = { class: "view-buttons" };
const _hoisted_3 = { class: "current-view-indicator" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BreathingAssessment",
  setup(__props) {
    const formRef = ref(null);
    const formatViewName = (view) => {
      const names = {
        left: "Left Lateral Lung View",
        right: "Right Lateral Lung View",
        anterior: "Anterior Lung View",
        posterior: "Posterior Lung View"
      };
      return names[view] || "Select a view";
    };
    const selectedView = ref("left");
    const breathingAssessmentForm = useBreathingAssessmentForm().breathingAssessmentFormSection;
    const patientStore = useDemographicsStore();
    const patientGender = computed(() => patientStore.patient?.personInformation?.gender);
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      const _component_ion_button = resolveComponent("ion-button");
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_chip = resolveComponent("ion-chip");
      const _component_LungRightMale = resolveComponent("LungRightMale");
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
                  patientGender.value === "M" && formValues.chest_wall_abnormality === "Yes" ? (openBlock(), createBlock(LungFrontMaleSVG, {
                    key: 0,
                    currentValues: formValues,
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataChestwallAbnormality", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" && formValues.chest_wall_abnormality === "Yes" ? (openBlock(), createBlock(LungFrontFemale, {
                    key: 1,
                    currentValues: formValues,
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataChestwallAbnormality", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayChestWallAbnormalityBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$c, {
                    currentValues: formValues["bodyPartsDataChestwallAbnormality"]
                  }, null, 8, ["currentValues"])
                ]),
                chestExpansionAbnormality: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "M" && formValues.chest_expansion === "Reduced" ? (openBlock(), createBlock(LungFrontMaleSVG, {
                    key: 0,
                    currentValues: formValues,
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataExpansionBodyParts", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" && formValues.chest_expansion === "Reduced" ? (openBlock(), createBlock(LungFrontFemale, {
                    key: 1,
                    currentValues: formValues,
                    onValueChanged: (fieldName, value) => updateValue("bodyPartsDataExpansionBodyParts", value)
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                displayChestExpansionBodyParts: withCtx(({ formValues }) => [
                  createVNode(_sfc_main$c, {
                    currentValues: formValues["bodyPartsDataExpansionBodyParts"]
                  }, null, 8, ["currentValues"])
                ]),
                percussionAbnormality: withCtx(({ formValues, updateValue }) => [
                  patientGender.value === "F" && formValues.percussion === "Abnormal" ? (openBlock(), createBlock(LungBackFemale, {
                    key: 0,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "M" && formValues.percussion === "Abnormal" ? (openBlock(), createBlock(LungBackMale, {
                    key: 1,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                ]),
                breathingSoundsAbnormality: withCtx(({ formValues, updateValue }) => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_component_ion_button, {
                        fill: selectedView.value === "left" ? "solid" : "inline",
                        color: selectedView.value === "left" ? "primary" : "medium",
                        class: "view-button",
                        onClick: _cache[0] || (_cache[0] = ($event) => selectedView.value = "left")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            slot: "start",
                            icon: unref(chevronBackOutline)
                          }, null, 8, ["icon"]),
                          _cache[4] || (_cache[4] = createTextVNode(" Left Lateral ", -1))
                        ]),
                        _: 1
                      }, 8, ["fill", "color"]),
                      createVNode(_component_ion_button, {
                        fill: selectedView.value === "right" ? "solid" : "inline",
                        color: selectedView.value === "right" ? "primary" : "medium",
                        class: "view-button",
                        onClick: _cache[1] || (_cache[1] = ($event) => selectedView.value = "right")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            slot: "end",
                            icon: unref(chevronForwardOutline)
                          }, null, 8, ["icon"]),
                          _cache[5] || (_cache[5] = createTextVNode(" Right Lateral ", -1))
                        ]),
                        _: 1
                      }, 8, ["fill", "color"]),
                      createVNode(_component_ion_button, {
                        fill: selectedView.value === "anterior" ? "solid" : "inline",
                        color: selectedView.value === "anterior" ? "primary" : "medium",
                        class: "view-button",
                        onClick: _cache[2] || (_cache[2] = ($event) => selectedView.value = "anterior")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            slot: "start",
                            icon: unref(personOutline)
                          }, null, 8, ["icon"]),
                          _cache[6] || (_cache[6] = createTextVNode(" Anterior ", -1))
                        ]),
                        _: 1
                      }, 8, ["fill", "color"]),
                      createVNode(_component_ion_button, {
                        fill: selectedView.value === "posterior" ? "solid" : "inline",
                        color: selectedView.value === "posterior" ? "primary" : "medium",
                        class: "view-button",
                        onClick: _cache[3] || (_cache[3] = ($event) => selectedView.value = "posterior")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            slot: "start",
                            icon: unref(personOutline)
                          }, null, 8, ["icon"]),
                          _cache[7] || (_cache[7] = createTextVNode(" Posterior ", -1))
                        ]),
                        _: 1
                      }, 8, ["fill", "color"])
                    ]),
                    createBaseVNode("div", _hoisted_3, [
                      createVNode(_component_ion_chip, {
                        color: "primary",
                        class: "view-chip"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, { icon: unref(checkmarkCircle) }, null, 8, ["icon"]),
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatViewName(selectedView.value)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  patientGender.value === "M" && formValues.breathing_sounds === "Abnormal" && selectedView.value === "left" ? (openBlock(), createBlock(LungLeftMale, {
                    key: 0,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "M" && formValues.breathing_sounds === "Abnormal" && selectedView.value === "right" ? (openBlock(), createBlock(_component_LungRightMale, {
                    key: 1,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "M" && formValues.breathing_sounds === "Abnormal" && selectedView.value === "anterior" ? (openBlock(), createBlock(LungFrontMaleSVG, {
                    key: 2,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "M" && formValues.breathing_sounds === "Abnormal" && selectedView.value === "posterior" ? (openBlock(), createBlock(LungBackMale, {
                    key: 3,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" && formValues.breathing_sounds === "Abnormal" && selectedView.value === "left" ? (openBlock(), createBlock(LungLeftFemale, {
                    key: 4,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" && formValues.breathing_sounds === "Abnormal" && selectedView.value === "anterior" ? (openBlock(), createBlock(LungFrontFemale, {
                    key: 5,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                  patientGender.value === "F" && formValues.breathing_sounds === "Abnormal" && selectedView.value === "posterior" ? (openBlock(), createBlock(LungBackFemale, {
                    key: 6,
                    currentValues: formValues,
                    onValueChanged: updateValue
                  }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
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

const BreathingAssessment = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-96ec75bd"]]);

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
        header: "Select affected area for femur and tibia on diagram",
        message: "",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_patient_traumatized"] === "Yes" && allFormValues["is_femur_tibia_normal"] === "No"
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
        header: "Select affected area on abdomen diagram",
        message: "",
        backgroundColor: "lightyellow",
        grid: { s: "8" },
        condition: (allFormValues) => allFormValues["is_there_any_other_abnormalities"] === "Yes"
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CirculationAssessment",
  setup(__props) {
    const formRef = ref(null);
    const circulationAssessmentForm = useCirculationAssessmentForm().circulationAssessmentFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(circulationAssessmentForm),
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

const useDisabilityAssessmentForm = () => {
  const sizeOfEyeOpeningResponse = [
    { label: "Spontaneously", value: "4" },
    { label: "To Speech", value: "3" },
    { label: "To Pain", value: "2" },
    { label: "No Response", value: "1" }
  ];
  const sizeOfVerbalResponse = [
    { label: "Oriented To Time, Place and Person", value: "5" },
    { label: "Confused", value: "4" },
    { label: "Inappropriate Words", value: "3" },
    { label: "Incomprehensible Words", value: "2" },
    { label: "No Response", value: "1" }
  ];
  const sizeOfMotorResponse = [
    { label: "Obey Commands", value: "6" },
    { label: "Moves to Localized Pain", value: "5" },
    { label: "Flexion Withdrawal from Pain", value: "4" },
    { label: "Abnormal Flexion (Decorticate)", value: "3" },
    { label: "Abnormal Extension (Decerbrate)", value: "2" },
    { label: "No Response", value: "1" }
  ];
  const unitOptions = [
    { id: 1, name: "mmol/l" },
    { id: 2, name: "mg/dl" }
  ];
  const disabilityAssessmentFormSection = computed(() => {
    return [
      // GCS Section
      {
        componentType: "Heading",
        name: "Glasgow Coma Scale (GCS)",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Eye Opening Response",
        name: "eye_opening_response",
        obsValueType: "value_numeric",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        options: sizeOfEyeOpeningResponse
      },
      {
        componentType: "Alert",
        header: "Eye Opening Score",
        message: "{eye_opening_response}",
        backgroundColor: "skyblue",
        grid: { s: "4" },
        condition: (allFormValues) => !!allFormValues["eye_opening_response"]
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
        type: "standard",
        grid: { s: "4" },
        options: sizeOfVerbalResponse
      },
      {
        componentType: "Alert",
        header: "Verbal Response Score",
        message: "{verbal_response}",
        backgroundColor: "skyblue",
        grid: { s: "4" },
        condition: (allFormValues) => !!allFormValues["verbal_response"]
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
        type: "standard",
        grid: { s: "4" },
        options: sizeOfMotorResponse
      },
      {
        componentType: "Alert",
        header: "Motor Response Score",
        message: "{motor_response}",
        backgroundColor: "skyblue",
        grid: { s: "4" },
        condition: (allFormValues) => !!allFormValues["motor_response"]
      },
      {
        grid: { s: "8" }
      },
      {
        componentType: "Alert",
        header: "Total GCS Score",
        message: (allFormValues) => {
          const eye = Number(allFormValues["eye_opening_response"]) || 0;
          const verbal = Number(allFormValues["verbal_response"]) || 0;
          const motor = Number(allFormValues["motor_response"]) || 0;
          return `${eye + verbal + motor}`;
        },
        backgroundColor: "skyblue",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const eye = Number(allFormValues["eye_opening_response"]) || 0;
          const verbal = Number(allFormValues["verbal_response"]) || 0;
          const motor = Number(allFormValues["motor_response"]) || 0;
          return eye + verbal + motor > 0;
        }
      },
      // Pupillary Response Section
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Pupillary Response-Right Eye",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Right Pupil Size (mm)",
        name: "right_pupil_size",
        obsValueType: "value_numeric",
        type: "number",
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
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Pupillary Response-Left Eye",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Left Pupil Size (mm)",
        name: "left_pupil_size",
        obsValueType: "value_numeric",
        type: "number",
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
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
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
        // rows: 5,
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
        initialValue: "mmol/l",
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
    disabilityAssessmentFormSection
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DisabilityAssessment",
  setup(__props) {
    const formRef = ref(null);
    const disabilityAssessmentForm = useDisabilityAssessmentForm().disabilityAssessmentFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(disabilityAssessmentForm),
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
        backgroundColor: "lightyellow",
        grid: { s: "8" }
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExposureAssessment",
  setup(__props) {
    const formRef = ref(null);
    const exposureAssessmentForm = useExposureAssessmentForm().exposureAssessmentFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(exposureAssessmentForm),
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

export { BreathingAssessment as B, _sfc_main$9 as _, _sfc_main$2 as a, _sfc_main$1 as b, _sfc_main as c };
