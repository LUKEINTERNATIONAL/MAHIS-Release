import { z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess } from '../index-Bbe_kZm7.js';
import { c as computed, ex as create$3, ey as create$5, ez as create$6, v as defineComponent, y as resolveComponent, z as openBlock, A as createElementBlock, B as createVNode, C as withCtx, G as unref } from './vendor-D3hawxEQ.js';

create$3().shape({
  "First name": create$6().required("First Name is required").max(50, "First Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Last name": create$6().required("first name is required").max(50, "Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Apgar score at 1 minute": create$5().typeError("Apgar score at 1 minute can only be a number").required("Apgar score at 1 minute is required").label("Apgar score at 1 minute"),
  "Apgar score at 5 minute": create$5().typeError("Apgar score at 5 minute can only be a number").required().label("Apgar score at 5 minute"),
  Weight: create$5().typeError("Weight can only be a number").min(2500).required().label("Weight"),
  Height: create$5().typeError("Height can only be a number").min(500).required().label("Height"),
  Circumference: create$5().typeError("Circimference can only be a number").required().label("Circumference")
});
const useDeliveryDetailsForm = () => {
  const deliveryDetailsFormSection = computed(() => {
    return [
      {
        componentType: "dateInputField",
        header: "Date of delivery",
        name: "Date of delivery",
        obsValueType: "value_date",
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Time of delivery",
        name: "Time of delivery",
        type: "time",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Mode of delivery",
        name: "Mode of delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "Spontaneous Vertex Delivery",
            value: "Spontaneous vertex delivery"
          },
          {
            label: "Vacuum extraction delivery",
            value: "Vacuum extraction delivery"
          },
          {
            label: "Breech delivery",
            value: "Breech delivery"
          },
          {
            label: "Caesarean section",
            value: "Caesarean section"
          },
          {
            label: "Other mode of delivery",
            value: "Other mode of delivery"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other mode of delivery notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Mode of delivery"] === "Other mode of delivery";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Place of delivery",
        name: "Place of delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "This facility",
            value: "this facility"
          },
          {
            label: "In transit",
            value: "in transit"
          },
          {
            label: "Other facility",
            value: "other facility"
          },
          {
            label: "Home or TBA",
            value: "home/tba"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Staff conducting delivery",
        name: "Staff conducting delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "MD/CO/MA/Nurse midwife/CMA",
            value: "md/co/ma/nurse midwife/cma"
          },
          {
            label: "PA/WA/HSA/None",
            value: "pa/wa/hsa/other/none"
          },
          {
            label: "Other",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Other staff conducting delivery",
        name: "otherStaff",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Staff conducting delivery"] === "other";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "What was the outcome of the delivery?",
        name: "Outcome of the delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "Live births",
            value: "Live births"
          },
          {
            label: "Neonatal death",
            value: "Neonatal death"
          },
          {
            label: "Stillbirths",
            value: "Stillbirths"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Type of still birth?",
        name: "Type of still birth",
        obsValueType: "value_coded",
        options: [
          {
            label: "Macerated still birth",
            value: "macerated still birth"
          },
          {
            label: "Fresh still birth",
            value: "fresh still birth"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Outcome of the delivery"] === "Stillbirths";
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Total number of babies",
        name: "Number of babies",
        obsValueType: "value_numeric",
        condition: (allFormValues) => {
          return allFormValues["Outcome of the delivery"] === "Live births";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  const babyDetailsFormSection = computed(() => {
    return [
      {
        componentType: "inputField",
        header: "First name",
        name: "First name",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Last name",
        name: "Last name",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Baby weight",
        name: "Weight",
        obsValueType: "value_numeric",
        unit: "grams",
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Baby height",
        name: "Height",
        obsValueType: "value_numeric",
        unit: "cm",
        grid: { s: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "APGAR score at 5 minute",
        name: "Apgar score at 5 minute",
        obsValueType: "value_numeric",
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Any Newborn complications?",
        name: "Newborn baby complications",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "None",
            value: "none"
          },
          {
            label: "Prematurity",
            value: "prematurity"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Congenital abnormalities",
            value: "Congenital abnormalities"
          },
          {
            label: "Asphyxia",
            value: "Asphyxia"
          },
          {
            label: "Low birthweight",
            value: "Low birthweight"
          },
          {
            label: "Other complications",
            value: "Other complications"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Was resuscitation attempted?",
        name: "Resuscitation attempt",
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
        ],
        condition: (allFormValues) => {
          return allFormValues["Newborn baby complications"]?.includes("Asphyxia");
        },
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Type of resuscitation?",
        name: "Type of resuscitation",
        obsValueType: "value_coded",
        options: [
          {
            label: "Drying only",
            value: "Drying only"
          },
          {
            label: "Clearing airway",
            value: "Clearing airway"
          },
          {
            label: "Bag and mask",
            value: "Bag and mask"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Newborn baby complications"]?.includes("Asphyxia") && allFormValues["Resuscitation attempt"] === "Yes";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    deliveryDetailsFormSection,
    babyDetailsFormSection
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DeliveryDetails",
  setup(__props, { expose: __expose }) {
    const { deliveryDetailsFormSection } = useDeliveryDetailsForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(deliveryDetailsFormSection)
                }, null, 8, ["form-data"])
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

const useHIVStatusAndTreatmentForm = () => {
  const hivStatusAndTreatmentFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "HIV status of woman*",
        name: "Mother HIV Status",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "positive"
          },
          {
            label: "Negative",
            value: "negative"
          },
          {
            label: "Unknown",
            value: "unknown"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Is the woman started on ART",
        name: "ART treatment",
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
        ],
        condition: (allFormValues) => {
          return allFormValues["Mother HIV Status"] === "positive";
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "ART Clinic number",
        name: "ART Number",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Mother HIV Status"] === "positive" && allFormValues["ART treatment"] === "yes";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "New HIV test result in postnatal*",
        name: "New HIV status",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "HIV test not done",
            value: "HIV test not done"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Has the woman started ART treatment?*",
        name: "Has the woman started ART treatment",
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
        ],
        condition: (allFormValues) => {
          return allFormValues["New HIV status"] === "Positive";
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "ART clinic number*",
        name: "ART clinic registration number",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["New HIV status"] === "Positive" && allFormValues["Has the woman started ART treatment"] === "Yes";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    hivStatusAndTreatmentFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HIVStatusAndTreatment",
  setup(__props, { expose: __expose }) {
    const { hivStatusAndTreatmentFormSection } = useHIVStatusAndTreatmentForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(hivStatusAndTreatmentFormSection)
                }, null, 8, ["form-data"])
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

const useObstetricDetailsForm = () => {
  const obstetricDetailsFormSection = computed(() => {
    return [
      {
        componentType: "inputField",
        header: "Gravida",
        name: "Gravida",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Parity",
        name: "Parity",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Any past pregnancy problems",
        name: "Past pregnancy problems",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Cord prolapse",
            value: "cord prolapse"
          },
          {
            label: "Antepartum haemorrhage",
            value: "antepartum haemorrhage"
          },
          {
            label: "Pre-Eclampsia",
            value: "pre-eclampsia"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Retained placenta",
            value: "retained placenta"
          },
          {
            label: "Perineal tear",
            value: "perineal tear"
          },
          {
            label: "Postpartum haemorrhage",
            value: "postpartum haemorrhage"
          },
          {
            label: "Obstructed or prolonged labour",
            value: "Obstructed or prolonged labour"
          },
          {
            label: "Premature labour",
            value: "premature labour"
          },
          {
            label: "Placenta previa",
            value: "placenta previa"
          },
          {
            label: "Severe anaemia",
            value: "severe anaemia"
          },
          {
            label: "Placenta abruption",
            value: "placenta abruption"
          },
          {
            label: "Fetal distress",
            value: "fetal distress"
          },
          {
            label: "Eclampsia",
            value: "eclampsia"
          },
          {
            label: "Haemorrhage",
            value: "haemorrhage"
          },
          {
            label: "Ruptured uterus",
            value: "Ruptured uterus"
          },
          {
            label: "Symphysiotomy",
            value: "symphysiotomy"
          },
          {
            label: "Other problems",
            value: "Other problems"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other problems notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Past pregnancy problems"]?.includes("Other problems");
        },
        grid: { s: "12" }
      }
    ];
  });
  return {
    obstetricDetailsFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ObstetricDetails",
  setup(__props, { expose: __expose }) {
    const { obstetricDetailsFormSection } = useObstetricDetailsForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(obstetricDetailsFormSection)
                }, null, 8, ["form-data"])
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
