import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bc as IonCardContent, bK as IonCard } from './vendor-Wwszy5sF.js';
import { n as icons, u as useDemographicsStore, z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess } from '../index-DY89AFDi.js';
import { s as storeToRefs } from './pinia-BYnbfcrK.js';

const useLabourPhysicalExamForm = () => {
  const physicalExaminationForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "General condition",
        name: "General condition",
        obsValueType: "value_coded",
        options: [
          {
            label: "Sick",
            value: "sick"
          },
          {
            label: "Stable",
            value: "stable"
          },
          {
            label: "Critical condition",
            value: "critical"
          },
          {
            label: "Distressed",
            value: "distressed"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Height",
        name: "Height",
        obsValueType: "value_numeric",
        icon: icons.height,
        unit: "cm",
        placeholder: "Enter height",
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Mid Upper Arm Circumference",
        name: "Mid Upper Arm Circumference",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unit: "cm",
        placeholder: "Enter MUAC",
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Weight",
        name: "Weight",
        obsValueType: "value_numeric",
        icon: icons.weight,
        unit: "KG",
        placeholder: "Enter weight"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Palmar pallor?",
        name: "Palmar pallor",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Pale Conjunctiva?",
        name: "Pale Conjunctiva",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Haemoglobin level",
        name: "Haemoglobin level",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unit: "g/dL",
        placeholder: "Enter level"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Capillary refill",
        name: "Capillary refill",
        obsValueType: "value_coded",
        options: [
          {
            label: "Less than 3s",
            value: "less_than_3s"
          },
          {
            label: "More than 3s",
            value: "more_than_3s"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Jaundice?",
        name: "Jaundice",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Oedema",
        name: "Oedema",
        obsValueType: "value_coded",
        options: [
          {
            label: "Present",
            value: "present"
          },
          {
            label: "Absent",
            value: "absent"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Oedema severity",
        name: "Oedema severity",
        obsValueType: "value_coded",
        options: [
          {
            label: "+",
            value: "plus_one"
          },
          {
            label: "++",
            value: "plus_two"
          },
          {
            label: "+++",
            value: "plus_three"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Eyes",
        name: "Eyes",
        type: "multiple",
        obsValueType: "value_coded",
        options: [
          {
            label: "Normal",
            value: "normal"
          },
          {
            label: "Visual Disturbances",
            value: "visual_disturbances"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify Eyes Other",
        name: "Eyes Other",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Eyes"]?.includes("other")
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Neck",
        name: "Neck",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "Normal",
            value: "normal"
          },
          {
            label: "Enlarged lymph nodes",
            value: "enlarged_lymph_nodes"
          },
          {
            label: "Enlarged thyroid gland",
            value: "enlarged_thyroid_gland"
          },
          {
            label: "Goitre",
            value: "goitre"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify Neck Other",
        name: "Neck Other",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Neck"]?.includes("other")
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        type: "multiple",
        header: "Breasts Inspection",
        name: "Breasts Inspection",
        obsValueType: "value_coded",
        options: [
          {
            label: "Normal",
            value: "normal"
          },
          {
            label: "Nipple abnormalities",
            value: "nipple_abnormalities"
          },
          {
            label: "Engorgement",
            value: "engorgement"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify Breasts Other",
        name: "Breasts Other",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Breasts Inspection"]?.includes("other")
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        type: "multiple",
        header: "Heart",
        name: "Heart",
        obsValueType: "value_coded",
        options: [
          {
            label: "Normal",
            value: "normal"
          },
          {
            label: "Murmurs",
            value: "murmurs"
          },
          {
            label: "Irregular rhythm",
            value: "irregular_rhythm"
          },
          {
            label: "Signs of heart failure",
            value: "heart_failure"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify Heart Other",
        name: "Heart Other",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Heart"]?.includes("other")
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        type: "multiple",
        header: "Lungs",
        name: "Lungs",
        obsValueType: "value_coded",
        options: [
          {
            label: "Normal",
            value: "normal"
          },
          {
            label: "Decreased breath sounds",
            value: "decreased_breath_sounds"
          },
          {
            label: "Wheezes",
            value: "wheezes"
          },
          {
            label: "Crackles",
            value: "crackles"
          },
          {
            label: "Tachypnoea",
            value: "tachypnoea"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify Lungs Other",
        name: "Lungs Other",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Lungs"]?.includes("other")
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        type: "multiple",
        header: "Liver and Spleen",
        name: "Liver and Spleen",
        obsValueType: "value_coded",
        options: [
          {
            label: "Normal",
            value: "normal"
          },
          {
            label: "Hepatomegaly",
            value: "hepatomegaly"
          },
          {
            label: "Splenomegaly",
            value: "splenomegaly"
          },
          {
            label: "Tenderness",
            value: "tenderness"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify Liver and Spleen Other",
        name: "Liver and Spleen Other",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Liver and Spleen"]?.includes("other")
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Abdominal Size",
        name: "Abdominal Size",
        obsValueType: "value_coded",
        options: [
          {
            label: "Small",
            value: "small"
          },
          {
            label: "Medium",
            value: "medium"
          },
          {
            label: "Big",
            value: "big"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Abdominal Shape",
        name: "Abdominal Shape",
        obsValueType: "value_coded",
        options: [
          {
            label: "Oval",
            value: "oval"
          },
          {
            label: "Pendulous",
            value: "pendulous"
          },
          {
            label: "Broad",
            value: "broad"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify Abdominal Shape Other",
        name: "Abdominal Shape Other",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Abdominal Shape"] == "other"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Presence of surgical scar",
        name: "Surgical scar",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Traditional tattoo",
        name: "Traditional tattoo",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Bladder",
        name: "Bladder",
        obsValueType: "value_coded",
        options: [
          {
            label: "Empty",
            value: "empty"
          },
          {
            label: "Full",
            value: "full"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Fundal Height",
        name: "Fundal Height",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unit: "cm",
        placeholder: "Using tape measure"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Number of fetuses",
        name: "Number of fetuses",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        placeholder: "Enter number (1-7)"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Lie",
        name: "Lie",
        obsValueType: "value_coded",
        options: [
          {
            label: "Longitudinal",
            value: "longitudinal"
          },
          {
            label: "Transverse",
            value: "transverse"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Presentation",
        name: "Presentation",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Cephalic",
            value: "cephalic"
          },
          {
            label: "Breech",
            value: "breech"
          },
          {
            label: "Face/Brow",
            value: "face_brow"
          },
          {
            label: "Footling",
            value: "footling"
          },
          {
            label: "Cord",
            value: "cord"
          },
          {
            label: "Fetal back",
            value: "fetal_back"
          },
          {
            label: "Arms",
            value: "arms"
          },
          {
            label: "Shoulders",
            value: "shoulders"
          },
          {
            label: "Compound",
            value: "compound"
          },
          {
            label: "No palpable fetal part",
            value: "no_palpable_fetal_part"
          }
        ]
      },
      {
        grid: { s: "1" }
      },
      {
        componentType: "radioButtonField",
        header: "Position",
        name: "Position",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presentation"] == "cephalic",
        grid: { s: "11" },
        options: [
          {
            label: "Left occiput anterior (LOA)",
            value: "loa"
          },
          {
            label: "Right occiput anterior (ROA)",
            value: "roa"
          },
          {
            label: "Left occiput transverse (LOT)",
            value: "lot"
          },
          {
            label: "Right occiput transverse (ROT)",
            value: "rot"
          },
          {
            label: "Left occiput posterior (LOP)",
            value: "lop"
          },
          {
            label: "Right occiput posterior (ROP)",
            value: "rop"
          }
        ]
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Descent",
        name: "Descent",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presentation"] == "cephalic",
        grid: { s: "11" },
        options: [
          {
            label: "5/5",
            value: "5/5"
          },
          {
            label: "4/5",
            value: "4/5"
          },
          {
            label: "3/5",
            value: "3/5"
          },
          {
            label: "2/5",
            value: "2/5"
          },
          {
            label: "1/5",
            value: "1/5"
          },
          {
            label: "0/5",
            value: "0/5"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Contractions",
        name: "Contractions",
        obsValueType: "value_coded",
        options: [
          {
            label: "Not felt",
            value: "not_felt"
          },
          {
            label: "Mild",
            value: "mild"
          },
          {
            label: "Moderate",
            value: "moderate"
          },
          {
            label: "Strong",
            value: "strong"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Fetal Heart Rate (beats per minute)",
        name: "Fetal Heart Rate",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unit: "bpm",
        placeholder: "Enter FHR"
      }
    ];
  });
  return {
    physicalExaminationForm
  };
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PhysicalExamination",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { formRef } = useExposeFromStandardForm();
    const { physicalExaminationForm } = useLabourPhysicalExamForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const result = await ObservationService.buildSaveObs(data, EncounterTypeId.TREATMENT);
      if (!result) return;
      toastSuccess("Medications successfully saved.");
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(IonCard), { style: { "contain": "unset" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: unref(physicalExaminationForm),
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const usePelvicAssessmentForm = () => {
  const pelvicAssessmentFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Shape of brim",
        name: "Shape of brim",
        obsValueType: "value_coded",
        options: [
          {
            label: "Followed",
            value: "followed"
          },
          {
            label: "Not followed",
            value: "not_followed"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Sacrum",
        name: "Sacrum",
        obsValueType: "value_coded",
        options: [
          {
            label: "Well curved",
            value: "well_curved"
          },
          {
            label: "Not curved",
            value: "not_curved"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Sacral promontory",
        name: "Sacral promontory",
        obsValueType: "value_coded",
        options: [
          {
            label: "Not tipped",
            value: "not_tipped"
          },
          {
            label: "Tipped",
            value: "tipped"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Sacrospinous ligaments",
        name: "Sacrospinous ligaments",
        obsValueType: "value_coded",
        options: [
          {
            label: "Flexible",
            value: "flexible"
          },
          {
            label: "Not flexible",
            value: "not_flexible"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Ischial spines",
        name: "Ischial spines",
        obsValueType: "value_coded",
        options: [
          {
            label: "Blunt",
            value: "blunt"
          },
          {
            label: "Prominent",
            value: "prominent"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Station",
        name: "Station",
        obsValueType: "value_coded",
        options: [
          {
            label: "-5",
            value: "-5"
          },
          {
            label: "-4",
            value: "-4"
          },
          {
            label: "-3",
            value: "-3"
          },
          {
            label: "-2",
            value: "-2"
          },
          {
            label: "-1",
            value: "-1"
          },
          {
            label: "0",
            value: "0"
          },
          {
            label: "+1",
            value: "+1"
          },
          {
            label: "+2",
            value: "+2"
          },
          {
            label: "+3",
            value: "+3"
          },
          {
            label: "+4",
            value: "+4"
          },
          {
            label: "+5",
            value: "+5"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Sub-pubic arch",
        name: "Sub-pubic arch",
        obsValueType: "value_coded",
        options: [
          {
            label: "Less than 90 degrees",
            value: "less_than_90"
          },
          {
            label: "More than 90 degrees",
            value: "more_than_90"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Intertuberous diameter",
        name: "Intertuberous diameter",
        obsValueType: "value_coded",
        options: [
          {
            label: "Admits 4 knuckles (greater than or equal to 8cm) (Normal)",
            value: "normal"
          },
          {
            label: "Admits less than 4 knuckles (less than 8cm) (Abnormal)",
            value: "abnormal"
          }
        ]
      },
      {
        componentType: "Alert",
        condition: async (formValues) => {
          if (formValues["Intertuberous diameter"] === "abnormal") {
            return {
              backgroundColor: "warning",
              status: "warning",
              icon: icons.warningAlert,
              textColor: "text-warning",
              value: "Warning: Abnormal intertuberous diameter detected - less than 8cm",
              name: "Intertuberous diameter alert"
            };
          }
          return false;
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Conclusion about pelvis",
        name: "Conclusion about pelvis",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Enter conclusion"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Anticipated course of labour and delivery",
        name: "Anticipated course of labour and delivery",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Enter anticipated course"
      }
    ];
  });
  return {
    pelvicAssessmentFormSection
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PelvicAssessment",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { formRef } = useExposeFromStandardForm();
    const { pelvicAssessmentFormSection } = usePelvicAssessmentForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const result = await ObservationService.buildSaveObs(data, EncounterTypeId.TREATMENT);
      if (!result) return;
      toastSuccess("Medications successfully saved.");
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(IonCard), { style: { "contain": "unset" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: unref(pelvicAssessmentFormSection),
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const useFirstVaginalExaminationForm = () => {
  const firstVaginalExaminationFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "Vulval Inspection",
        name: "Vulval Inspection",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        options: [
          {
            label: "Normal",
            value: "normal"
          },
          {
            label: "Swollen",
            value: "swollen"
          },
          {
            label: "Warts",
            value: "warts"
          },
          {
            label: "Presence of show",
            value: "presence_of_show"
          },
          {
            label: "Presence of blood/clots",
            value: "presence_of_blood_clots"
          },
          {
            label: "Presence of liquor",
            value: "presence_of_liquor"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Soft tissues",
        name: "Soft tissues",
        type: "inline",
        obsValueType: "value_coded",
        options: [
          {
            label: "Warm and moist",
            value: "warm_and_moist"
          },
          {
            label: "Hot and dry",
            value: "hot_and_dry"
          },
          {
            label: "Hot and moist",
            value: "hot_and_moist"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "State of Cervix",
        name: "State of Cervix",
        type: "inline",
        obsValueType: "value_coded",
        options: [
          {
            label: "Thick",
            value: "thick"
          },
          {
            label: "Thin",
            value: "thin"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Effacement (%)",
        name: "Effacement",
        type: "inline",
        obsValueType: "value_coded",
        options: [
          {
            label: "0% / Not effaced",
            value: "0"
          },
          {
            label: "25%",
            value: "25"
          },
          {
            label: "50%",
            value: "50"
          },
          {
            label: "75%",
            value: "75"
          },
          {
            label: "100%",
            value: "100"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Cervical Dilation (cm)",
        name: "Cervical Dilation",
        obsValueType: "value_coded",
        options: [
          {
            label: "OS closed (0)",
            value: "0"
          },
          {
            label: "1",
            value: "1"
          },
          {
            label: "2",
            value: "2"
          },
          {
            label: "3",
            value: "3"
          },
          {
            label: "4",
            value: "4"
          },
          {
            label: "5",
            value: "5"
          },
          {
            label: "6",
            value: "6"
          },
          {
            label: "7",
            value: "7"
          },
          {
            label: "8",
            value: "8"
          },
          {
            label: "9",
            value: "9"
          },
          {
            label: "10",
            value: "10"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Application of presenting part",
        name: "Application",
        obsValueType: "value_coded",
        options: [
          {
            label: "Well applied",
            value: "well_applied"
          },
          {
            label: "Loosely applied",
            value: "loosely_applied"
          },
          {
            label: "Not applied",
            value: "not_applied"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "State of membranes",
        name: "State of membranes",
        obsValueType: "value_coded",
        options: [
          {
            label: "Intact",
            value: "intact"
          },
          {
            label: "Ruptured",
            value: "ruptured"
          }
        ]
      },
      {
        componentType: "Dashes",
        condition: (formValues) => formValues["State of membranes"] === "ruptured"
      },
      {
        componentType: "dateInputField",
        header: "Date membranes ruptured",
        name: "Date membranes ruptured",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        placeholder: "Pick date",
        condition: (formValues) => formValues["State of membranes"] === "ruptured",
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Time membranes ruptured",
        name: "Time membranes ruptured",
        type: "time",
        obsValueType: "value_datetime",
        icon: icons.time,
        condition: (formValues) => formValues["State of membranes"] === "ruptured",
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Liquor",
        name: "Liquor",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["State of membranes"] === "ruptured",
        options: [
          {
            label: "Clear",
            value: "clear"
          },
          {
            label: "Meconium stained",
            value: "meconium_stained"
          },
          {
            label: "Blood stained",
            value: "blood_stained"
          },
          {
            label: "Absent",
            value: "absent"
          },
          {
            label: "Offensive smell",
            value: "offensive_smell"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Meconium Grade",
        name: "Meconium Grade",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Liquor"] === "meconium_stained",
        options: [
          {
            label: "1",
            value: "1"
          },
          {
            label: "2",
            value: "2"
          },
          {
            label: "3",
            value: "3"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Cord",
        name: "Cord",
        obsValueType: "value_coded",
        options: [
          {
            label: "Not felt",
            value: "not_felt"
          },
          {
            label: "Prolapsed",
            value: "prolapsed"
          }
        ]
      },
      {
        componentType: "Alert",
        name: "Emergency Alert",
        type: "warning",
        backgroundColor: "#FEDF89",
        textColor: "#B54708",
        removeConditionAlert: true,
        message: "This is an Emergency, change the position of the woman to relieve pressure on the cord and manage accordingly",
        condition: (formValues) => formValues["Cord"] === "prolapsed"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "What part is presenting?",
        name: "What part is presenting",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Head",
            value: "head"
          },
          {
            label: "Face",
            value: "face"
          },
          {
            label: "Shoulders",
            value: "shoulders"
          },
          {
            label: "Brow",
            value: "brow"
          },
          {
            label: "Foot",
            value: "foot"
          },
          {
            label: "Hand",
            value: "hand"
          },
          {
            label: "Back",
            value: "back"
          },
          {
            label: "Cord",
            value: "cord"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        grid: { s: "1" }
      },
      {
        componentType: "inputField",
        header: "Specify presenting part",
        name: "Specify presenting part",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["What part is presenting"] === "other",
        grid: { s: "11" }
      },
      {
        grid: { s: "1" }
      },
      {
        componentType: "inputField",
        header: "Position of sutures and fontanelles",
        name: "Position of sutures and fontanelles",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Describe position",
        condition: (formValues) => formValues["What part is presenting"] === "head",
        grid: { s: "11" }
      },
      { grid: { s: "1" } },
      {
        grid: { s: "11" },
        componentType: "Dashes",
        condition: (formValues) => formValues["What part is presenting"] === "head"
      },
      {
        grid: { s: "1" }
      },
      {
        componentType: "radioButtonField",
        header: "Level in relation to ischial spines",
        name: "Level in relation to ischial spines",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["What part is presenting"] === "head",
        options: [
          {
            label: "Below",
            value: "below"
          },
          {
            label: "Above",
            value: "above"
          },
          {
            label: "On level",
            value: "on_level"
          }
        ],
        grid: { s: "11" }
      },
      { grid: { s: "1" } },
      {
        grid: { s: "11" },
        componentType: "Dashes",
        condition: (formValues) => formValues["What part is presenting"] === "head"
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Caput",
        name: "Caput",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["What part is presenting"] === "head",
        grid: { s: "11" },
        options: [
          {
            label: "Nil",
            value: "nil"
          },
          {
            label: "+",
            value: "plus_one"
          },
          {
            label: "++",
            value: "plus_two"
          },
          {
            label: "+++",
            value: "plus_three"
          }
        ]
      },
      { grid: { s: "1" } },
      {
        grid: { s: "11" },
        componentType: "Dashes",
        condition: (formValues) => formValues["What part is presenting"] === "head"
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Moulding",
        name: "Moulding",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["What part is presenting"] === "head",
        grid: { s: "11" },
        options: [
          {
            label: "Nil",
            value: "nil"
          },
          {
            label: "+",
            value: "plus_one"
          },
          {
            label: "++",
            value: "plus_two"
          },
          {
            label: "+++",
            value: "plus_three"
          }
        ]
      }
    ];
  });
  return {
    firstVaginalExaminationFormSection
  };
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FirstVaginalExamination",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { formRef } = useExposeFromStandardForm();
    const { firstVaginalExaminationFormSection } = useFirstVaginalExaminationForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const result = await ObservationService.buildSaveObs(data, EncounterTypeId.TREATMENT);
      if (!result) return;
      toastSuccess("Medications successfully saved.");
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(IonCard), { style: { "contain": "unset" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: unref(firstVaginalExaminationFormSection),
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

export { _sfc_main as _, _sfc_main$1 as a, _sfc_main$2 as b };
