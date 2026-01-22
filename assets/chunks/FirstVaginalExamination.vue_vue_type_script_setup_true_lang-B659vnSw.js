import { c as computed, v as defineComponent, z as openBlock, A as createElementBlock, B as createVNode, C as withCtx, G as unref, bc as IonCardContent, bL as IonCard } from './vendor-Cbv9TWZo.js';
import { n as icons, u as useDemographicsStore, z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess } from '../index-DIdCIGDg.js';
import { s as storeToRefs } from './pinia-C6LE2xz6.js';

const useLabourQuickCheckForm = () => {
  const labourQuickCheckFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "What is the reason for coming to the facility?",
        name: "reason",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "In labour",
            value: "In labour"
          },
          {
            label: "Delivered on the way to the facility",
            value: "Delivered"
          },
          {
            label: "Home Delivery",
            value: "Home Delivery"
          },
          {
            label: "Sick",
            value: "Sick"
          }
        ]
      },
      {
        grid: { s: "1" }
      },
      {
        componentType: "radioButtonField",
        header: "Labour onset type",
        name: "Labour onset type",
        obsValueType: "value_coded",
        type: "inline",
        condition: (allFormValues) => {
          return allFormValues["reason"] === "In labour";
        },
        options: [
          {
            label: "Spontaneous",
            value: "Spontaneous"
          },
          {
            label: "Induced",
            value: "Induced"
          }
        ],
        grid: { s: "11" }
      },
      {
        grid: { s: "1" }
      },
      {
        componentType: "dateInputField",
        header: "Date of onset of labour",
        name: "Date of onset of labour",
        obsValueType: "value_date",
        icon: icons.calendar,
        condition: (allFormValues) => {
          return allFormValues["reason"] === "In labour";
        },
        grid: { s: "5.5" }
      },
      {
        componentType: "inputField",
        header: "Time of onset of labour",
        name: "Time of onset of labour",
        type: "time",
        obsValueType: "value_datetime",
        icon: icons.time,
        condition: (allFormValues) => {
          return allFormValues["reason"] === "In labour";
        },
        grid: { s: "5.5" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Danger signs",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Bleeding vaginally",
            value: "bleeding vaginally"
          },
          {
            label: "Central cyanosis",
            value: "central cyanosis"
          },
          {
            label: "Pre-term labour",
            value: "pre-term labour"
          },
          {
            label: "Severe vomiting",
            value: "severe vomiting"
          },
          {
            label: "Fever",
            value: "fever"
          },
          {
            label: "Visual disturbance",
            value: "visual disturbance"
          },
          {
            label: "Severe abdominal pain",
            value: "severe abdominal pain"
          },
          {
            label: "Unconscious",
            value: "unconscious"
          },
          {
            label: "No fetal movement",
            value: "no fetal movement"
          },
          {
            label: "Jaundice",
            value: "jaundice"
          },
          {
            label: "Difficulties in breathing",
            value: "difficulties in breathing"
          },
          {
            label: "No danger signs",
            value: "no danger signs",
            exclusive: true
          },
          {
            label: "Other danger signs",
            value: "other danger signs"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify other danger signs",
        name: "other danger signs specify",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Danger signs"]?.includes("other danger signs");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Membranes ruptured?",
        name: "Membranes ruptured",
        obsValueType: "value_coded",
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
        grid: { s: "1" }
      },
      {
        componentType: "dateInputField",
        header: "Date membranes ruptured",
        name: "Date membranes ruptured",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Membranes ruptured"] === "Yes";
        },
        grid: { s: "5.5" }
      },
      {
        componentType: "inputField",
        header: "Time membranes ruptured",
        name: "Time membranes ruptured",
        type: "time",
        obsValueType: "value_datetime",
        condition: (allFormValues) => {
          return allFormValues["Membranes ruptured"] === "Yes";
        },
        grid: { s: "5.5" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Has she had food in 4 hours?",
        name: "food in 4 hours",
        obsValueType: "value_coded",
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
        header: "Homemade medicines taken?",
        name: "Homemade medicines taken",
        obsValueType: "value_coded",
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
        header: "Sleep",
        name: "Sleep",
        obsValueType: "value_coded",
        options: [
          {
            label: "Well",
            value: "Well"
          },
          {
            label: "Disturbed",
            value: "Disturbed"
          }
        ]
      }
    ];
  });
  return {
    labourQuickCheckFormSection
  };
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LabourQuickCheck",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { formRef } = useExposeFromStandardForm();
    const { labourQuickCheckFormSection } = useLabourQuickCheckForm();
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
                  formData: unref(labourQuickCheckFormSection),
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
            label: "Well",
            value: "well"
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
        header: "Weight",
        name: "Weight",
        obsValueType: "value_numeric",
        icon: icons.weight,
        unit: "KG",
        placeholder: "Enter weight",
        grid: { s: "6" }
      },
      {
        componentType: "radioButtonField",
        header: "Conjunctiva pale?",
        name: "Conjunctiva pale",
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
        header: "Palmer pallor?",
        name: "Palmer pallor",
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
        header: "Haemoglobin low?",
        name: "Haemoglobin low",
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
        componentType: "inputField",
        header: "Specify",
        name: "Other oedema",
        obsValueType: "value_text",
        icon: icons.editPen
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Number of fetuses",
        name: "fetuse",
        obsValueType: "value_numeric",
        icon: icons.editPen
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
          },
          {
            label: "Oblique",
            value: "oblique"
          },
          {
            label: "Undefined",
            value: "undefined"
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
            value: "face"
          },
          {
            label: "Footling",
            value: "footling"
          },
          {
            label: "Cord",
            value: "Cord"
          },
          {
            label: "Fetal back/arms/shoulders",
            value: "Fetal"
          },
          {
            label: "No palpable fetal part",
            value: "no palpable fetal part"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Specify Presentation",
        name: "Other",
        obsValueType: "value_text",
        icon: icons.editPen
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Choose position",
        name: "Position",
        obsValueType: "value_coded",
        options: [
          {
            label: "Right occiput anterior (ROA)",
            value: "roa"
          },
          {
            label: "Left occiput anterior (LOA)",
            value: "loa"
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
          },
          {
            label: "Breech Position",
            value: "Breech"
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
            label: "No Contraction felt",
            value: "no Contraction Felt"
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
        header: "Fetal Heart Rate (beats per minute)",
        name: "Fetal Heart Rate",
        obsValueType: "value_numeric",
        unit: "bpm"
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
            value: "not followed"
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
            value: "well curved"
          },
          {
            label: "Not curved",
            value: "not curved"
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
            value: "not tipped"
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
            label: "Thick",
            value: "thick"
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
        header: "Moulding (checked every four hours)",
        name: "Moulding",
        obsValueType: "value_coded",
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
        componentType: "radioButtonField",
        header: "Caput (checked every four hours)",
        name: "Caput",
        obsValueType: "value_coded",
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
        componentType: "radioButtonField",
        header: "Fetal Descent/Station",
        name: "Fetal Descent Station",
        obsValueType: "value_coded",
        options: [
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
            label: "1",
            value: "1"
          },
          {
            label: "2",
            value: "2"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Descent/Station",
        name: "Descent Station",
        obsValueType: "value_coded",
        options: [
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
            value: "less than 90 degrees"
          },
          {
            label: "More than 90 degrees",
            value: "more than 90 degrees"
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
            label: "more than or equal to 8.5cm",
            value: "more than or equal to 8.5cm"
          },
          {
            label: "less than 8.5cm",
            value: "less than 8.5cm"
          }
        ]
      },
      {
        componentType: "Alert",
        condition: async (allFormValues) => {
          if (allFormValues["Intertuberous diameter"] === "less than 8.5cm") {
            return {
              backgroundColor: "warning",
              status: "warning",
              icon: icons.warning,
              textColor: "text-warning",
              value: "Warning: Small intertuberous diameter detected",
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
        name: "conclusion about pelvis",
        obsValueType: "value_text",
        icon: icons.editPen
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Anticipated course of labour and delivery",
        name: "anticipated course of labour and delivery",
        obsValueType: "value_text",
        icon: icons.editPen
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
        componentType: "radioButtonField",
        header: "Show",
        name: "Show",
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
        header: "Soft tissues",
        name: "Soft tissues",
        obsValueType: "value_coded",
        options: [
          {
            label: "Warm and moist",
            value: "warm and moist"
          },
          {
            label: "Hot and dry",
            value: "hot and dry"
          },
          {
            label: "Hot and moist",
            value: "hot and moist"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "State of Cervical",
        name: "state of cervical",
        obsValueType: "value_text",
        icon: icons.editPen
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Percentage of effacement",
        name: "Percentage of effacement",
        obsValueType: "value_coded",
        options: [
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
          },
          {
            label: "Not effaced",
            value: "not effaced"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Cervical dilation",
        name: "cervical dilation",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unit: "cm",
        placeholder: "Enter the number between 1-10"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Application",
        name: "Application",
        obsValueType: "value_coded",
        options: [
          {
            label: "Well applied",
            value: "well applied"
          },
          {
            label: "Loosely applied",
            value: "loosely applied"
          },
          {
            label: "Not applied",
            value: "not applied"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "State of membranes?",
        name: "State of membranes",
        obsValueType: "value_coded",
        options: [
          {
            label: "Ruptured",
            value: "ruptured"
          },
          {
            label: "Intact",
            value: "intact"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Time membranes ruptured",
        name: "time membranes ruptured",
        type: "time",
        obsValueType: "value_datetime",
        icon: icons.time,
        condition: (allFormValues) => {
          return allFormValues["State of membranes"] === "ruptured";
        },
        grid: { s: "6" }
      },
      {
        componentType: "dateInputField",
        header: "Date membranes ruptured",
        name: "date membranes ruptured",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        placeholder: "Pick date",
        condition: (allFormValues) => {
          return allFormValues["State of membranes"] === "ruptured";
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Color",
        name: "Color",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["State of membranes"] === "ruptured";
        },
        options: [
          {
            label: "Clear",
            value: "clear"
          },
          {
            label: "Blood Stained",
            value: "blood Stained"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Liquor",
        name: "Liquor",
        obsValueType: "value_coded",
        options: [
          {
            label: "Clear",
            value: "clear"
          },
          {
            label: "Meconium stained",
            value: "meconium stained"
          },
          {
            label: "Blood stained",
            value: "blood stained"
          },
          {
            label: "Absent",
            value: "absent"
          },
          {
            label: "Offensive smell",
            value: "offensive smell"
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
        condition: (allFormValues) => {
          return allFormValues["Liquor"] === "meconium stained";
        },
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
            value: "not felt"
          },
          {
            label: "Felt/Presenting",
            value: "felt"
          },
          {
            label: "Prolapsed",
            value: "prolapsed"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Color",
        name: "cold felt color",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Cord"] === "felt" || allFormValues["Cord"] === "prolapsed";
        },
        options: [
          {
            label: "Clear",
            value: "clear"
          },
          {
            label: "Meconium stained",
            value: "meconium stained"
          },
          {
            label: "Blood stained",
            value: "blood stained"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "What part is presenting?",
        name: "What part is presenting",
        obsValueType: "value_coded",
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
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "specify",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["What part is presenting"] === "other";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Position of sutures and fontanelles",
        name: "Position of sutures and fontanelles",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["What part is presenting"] === "head";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Level in relation to ischial spines *",
        name: "Level in relation to ischial spines",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["What part is presenting"] === "head";
        },
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
            value: "on level"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Caput",
        name: "Caput",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["What part is presenting"] === "head";
        },
        options: [
          {
            label: "Nil",
            value: "nil"
          },
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
        componentType: "radioButtonField",
        header: "Moulding",
        name: "Moulding",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["What part is presenting"] === "head";
        },
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
        componentType: "radioButtonField",
        header: "Is the Cord Pulsating",
        name: "Is Cord Pulsating",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Cord"] === "felt" || allFormValues["Cord"] === "prolapsed";
        },
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

export { _sfc_main as _, _sfc_main$1 as a, _sfc_main$2 as b, _sfc_main$3 as c };
