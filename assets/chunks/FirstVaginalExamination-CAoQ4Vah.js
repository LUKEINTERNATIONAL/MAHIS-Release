import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bd as IonCardContent, C as createBaseVNode, bL as IonCard } from './vendor-DOib3KBh.js';
import { n as icons, u as useDemographicsStore, z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc } from '../index-BGjJ8ee-.js';
import { s as storeToRefs } from './pinia-X75jUKgt.js';

const useLabourPhysicalExamForm = () => {
  const physicalExaminationForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "General condition",
        name: "General condition",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Sick",
            value: "Sick"
          },
          {
            label: "Stable",
            value: "Stable"
          },
          {
            label: "Critical condition",
            value: "Critical"
          },
          {
            label: "Distressed",
            value: "Distressed"
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
        type: "inline",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
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
        type: "inline",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
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
        type: "inline",
        options: [
          {
            label: "Less than 3s",
            value: "Less than 3s"
          },
          {
            label: "More than 3s",
            value: "More than 3s"
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
        type: "inline",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
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
        type: "inline",
        options: [
          {
            label: "Present",
            value: "Present"
          },
          {
            label: "Absent",
            value: "Absent"
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
        type: "inline",
        options: [
          {
            label: "+",
            value: "+"
          },
          {
            label: "++",
            value: "++"
          },
          {
            label: "+++",
            value: "+++"
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
            value: "Normal"
          },
          {
            label: "Visual Disturbances",
            value: "Visual disturbances"
          },
          {
            label: "Other",
            value: "Other"
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
        condition: (formValues) => formValues["Eyes"]?.includes("other"),
        grid: { s: "11" },
        offset: "1"
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
            value: "Normal"
          },
          {
            label: "Enlarged lymph nodes",
            value: "Enlarged_lymph_nodes"
          },
          {
            label: "Enlarged thyroid gland",
            value: "Enlarged_thyroid_gland"
          },
          {
            label: "Goitre",
            value: "Goitre"
          },
          {
            label: "Other",
            value: "Other"
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
        condition: (formValues) => formValues["Neck"]?.includes("other"),
        grid: { s: "11" },
        offset: "1"
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
            value: "Nipple abnormalities"
          },
          {
            label: "Engorgement",
            value: "Engorgement"
          },
          {
            label: "Other",
            value: "Other"
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
        condition: (formValues) => formValues["Breasts Inspection"]?.includes("other"),
        grid: { s: "11" },
        offset: "1"
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
            value: "Normal"
          },
          {
            label: "Murmurs",
            value: "Murmurs"
          },
          {
            label: "Irregular rhythm",
            value: "Irregular rhythm"
          },
          {
            label: "Signs of heart failure",
            value: "Signs of heart failure"
          },
          {
            label: "Other",
            value: "Other"
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
        condition: (formValues) => formValues["Heart"]?.includes("other"),
        grid: { s: "11" },
        offset: "1"
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
            value: "Normal"
          },
          {
            label: "Decreased breath sounds",
            value: "Decreased breath sounds"
          },
          {
            label: "Wheezes",
            value: "Wheezes"
          },
          {
            label: "Crackles",
            value: "Crackles"
          },
          {
            label: "Tachypnoea",
            value: "Tachypnoea"
          },
          {
            label: "Other",
            value: "Other"
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
        condition: (formValues) => formValues["Lungs"]?.includes("other"),
        grid: { s: "11" },
        offset: "1"
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
            value: "Normal"
          },
          {
            label: "Hepatomegaly",
            value: "Hepatomegaly"
          },
          {
            label: "Splenomegaly",
            value: "Splenomegaly"
          },
          {
            label: "Tenderness",
            value: "Tenderness"
          },
          {
            label: "Other",
            value: "Other"
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
        condition: (formValues) => formValues["Liver and Spleen"]?.includes("other"),
        grid: { s: "11" },
        offset: "1"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Slot",
        slotName: "abdomen_examination"
      },
      {
        componentType: "radioButtonField",
        header: "Abdominal Size",
        name: "Abdominal Size",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Small",
            value: "Small"
          },
          {
            label: "Medium",
            value: "Medium"
          },
          {
            label: "Big",
            value: "Big"
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
        type: "inline",
        options: [
          {
            label: "Oval",
            value: "Oval"
          },
          {
            label: "Pendulous",
            value: "Pendulous"
          },
          {
            label: "Broad",
            value: "Broad"
          },
          {
            label: "Other",
            value: "Other"
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
        condition: (formValues) => formValues["Abdominal Shape"] == "other",
        grid: { s: "11" },
        offset: "1"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Presence of surgical scar",
        name: "Surgical scar",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
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
        type: "inline",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
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
        type: "inline",
        options: [
          {
            label: "Empty",
            value: "Empty"
          },
          {
            label: "Full",
            value: "Full"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Slot",
        slotName: "palpation"
      },
      {
        componentType: "inputField",
        header: "Fundal Height",
        name: "Fundal Height",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        grid: { s: "12", md: "12" },
        unit: "cm",
        placeholder: "Using tape measure"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Lie",
        name: "Lie",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Longitudinal",
            value: "Longitudinal"
          },
          {
            label: "Transverse",
            value: "Transverse"
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
            value: "Cephalic"
          },
          {
            label: "Breech",
            value: "Breech"
          },
          {
            label: "Face/Brow",
            value: "Face_brow"
          },
          {
            label: "Footling",
            value: "Footling"
          },
          {
            label: "Cord",
            value: "Cord"
          },
          {
            label: "Fetal back",
            value: "Fetal_back"
          },
          {
            label: "Arms",
            value: "Arms"
          },
          {
            label: "Shoulders",
            value: "Shoulders"
          },
          {
            label: "Compound",
            value: "Compound"
          },
          {
            label: "No palpable fetal part",
            value: "No palpable fetal part"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Position",
        name: "Position",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presentation"] == "cephalic",
        grid: { s: "11" },
        offset: "1",
        type: "inline",
        options: [
          {
            label: "Left occiput anterior (LOA)",
            value: "Left occiput anterior (LOA)"
          },
          {
            label: "Right occiput anterior (ROA)",
            value: "Right occiput anterior (ROA)"
          },
          {
            label: "Left occiput transverse (LOT)",
            value: "Left occiput transverse (LOT)"
          },
          {
            label: "Right occiput transverse (ROT)",
            value: "Right occiput transverse (ROT)"
          },
          {
            label: "Left occiput posterior (LOP)",
            value: "Left occiput posterior (LOP)"
          },
          {
            label: "Right occiput posterior (ROP)",
            value: "Right occiput posterior (ROP)"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Descent",
        name: "Descent",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presentation"] == "cephalic",
        grid: { s: "11" },
        offset: "1",
        type: "inline",
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
        type: "inline",
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
        placeholder: "Enter FHR",
        grid: { s: "12", md: "6" },
        validation: (value) => {
          const numericValue = Number(value);
          if (isNaN(numericValue)) {
            return "Fetal Heart Rate must be a number";
          }
          if (numericValue < 30 || numericValue > 240) {
            return "Fetal Heart Rate must be between 30 and 240 bpm";
          }
        }
      },
      {
        componentType: "inputField",
        header: "Number of fetuses",
        name: "Number of fetuses",
        icon: icons.editPen,
        obsValueType: "value_numeric",
        placeholder: "Enter number of fetuses",
        grid: { s: "12", md: "6" },
        validation: (value) => {
          const numericValue = Number(value);
          if (isNaN(numericValue)) {
            return "Number of fetuses must be a number";
          }
          if (numericValue < 1 || numericValue > 7) {
            return "Number of fetuses must be between 1 and 7";
          }
        }
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
                  subtitle: "General Observation",
                  formData: unref(physicalExaminationForm),
                  ref_key: "formRef",
                  ref: formRef
                }, {
                  abdomen_examination: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createBaseVNode("div", { class: "section-subtitle" }, "Abdomen Examination", -1)
                  ])]),
                  palpation: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createBaseVNode("div", { class: "section-subtitle" }, "Palpation", -1)
                  ])]),
                  _: 1
                }, 8, ["formData"])
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

const PhysicalExamination = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-54e369b7"]]);

const usePelvicAssessmentForm = () => {
  const pelvicAssessmentFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Shape of brim",
        name: "Shape of brim",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Followed",
            value: "Followed"
          },
          {
            label: "Not followed",
            value: "Not followed"
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
        type: "inline",
        options: [
          {
            label: "Well curved",
            value: "Well Curved"
          },
          {
            label: "Not curved",
            value: "Not curved"
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
        type: "inline",
        options: [
          {
            label: "Not tipped",
            value: "Not tipped"
          },
          {
            label: "Tipped",
            value: "Tipped"
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
        type: "inline",
        options: [
          {
            label: "Flexible",
            value: "flexible"
          },
          {
            label: "Not flexible",
            value: "Not flexible"
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
        type: "inline",
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
        type: "inline",
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
        type: "inline",
        options: [
          {
            label: "Less than 90 degrees",
            value: "less than 90 degrees"
          },
          {
            label: "More than 90 degrees",
            value: "More than 90"
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
        type: "inline",
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
                  subtitle: "Pelvic Assessment",
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
            value: "Presence of show"
          },
          {
            label: "Presence of blood/clots",
            value: "Presence of blood_clots"
          },
          {
            label: "Presence of liquor",
            value: "Presence of liquor"
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
            value: "Warm and moist"
          },
          {
            label: "Hot and dry",
            value: "Hot and dry"
          },
          {
            label: "Hot and moist",
            value: "Hot and moist"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Slot",
        name: "Cervix",
        slotName: "cervix"
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
            value: "0%"
          },
          {
            label: "25%",
            value: "25%"
          },
          {
            label: "50%",
            value: "50%"
          },
          {
            label: "75%",
            value: "75%"
          },
          {
            label: "100%",
            value: "100%"
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
        type: "inline",
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
        type: "inline",
        obsValueType: "value_coded",
        options: [
          {
            label: "Well applied",
            value: "Well applied"
          },
          {
            label: "Loosely applied",
            value: "Loosely applied"
          },
          {
            label: "Not applied",
            value: "Not applied"
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
        type: "inline",
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
        componentType: "timeInputField",
        header: "Time membranes ruptured",
        name: "Time membranes ruptured",
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
            value: "Meconium stained"
          },
          {
            label: "Blood stained",
            value: "Blood stained"
          },
          {
            label: "Absent",
            value: "Absent"
          },
          {
            label: "Offensive smell",
            value: "Offensive smell"
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
        type: "inline",
        obsValueType: "value_coded",
        options: [
          {
            label: "Not felt",
            value: "Not felt"
          },
          {
            label: "Prolapsed",
            value: "Prolapsed"
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
                  subtitle: "First Vaginal Examination",
                  formData: unref(firstVaginalExaminationFormSection),
                  ref_key: "formRef",
                  ref: formRef
                }, {
                  cervix: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createBaseVNode("div", { class: "section-subtitle" }, "Cervix", -1)
                  ])]),
                  _: 1
                }, 8, ["formData"])
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

const FirstVaginalExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b8b9e57d"]]);

export { FirstVaginalExamination as F, PhysicalExamination as P, _sfc_main$1 as _ };
