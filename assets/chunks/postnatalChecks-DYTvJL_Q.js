import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed, a2 as onMounted, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bK as IonCard, J as Fragment, a4 as normalizeClass, C as createBaseVNode, D as toDisplayString, H as createCommentVNode, w as watch, R as renderList, aI as IonAccordionGroup, aq as IonItem, a7 as IonLabel, a5 as createTextVNode, N as IonButton, a8 as withModifiers, aH as IonAccordion, L as IonIcon, cG as arrowForward, aL as useRouter, aG as IonContent, bX as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-DrpjccQs.js';
import { z as StandardForm, n as icons, y as StandardValidations, K as ObservationService, b as EncounterTypeId, _ as _export_sfc, t as toastWarning, u as useDemographicsStore, b5 as RelationshipService, T as Toolbar, F as DynamicButton, G as toastSuccess } from '../index-PMl5GQCx.js';
import { D as DemographicBar } from './DemographicBar-C_dpPXB7.js';
import { _ as _sfc_main$l, u as useFormWizard } from './useFormWizard-qhHmCyMh.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "immidiateMotherCheck",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const immidiateChecksForMother = computed(() => [
      {
        header: "Systolic blood pressure",
        name: "Systolic blood pressure",
        label: "Systolic pressure",
        componentType: "inputField",
        icon: icons.systolicPressure,
        suffix: "mmHg",
        validation: (value) => {
          return StandardValidations.vitalsSystolic(value);
        },
        grid: { s: "6" }
      },
      {
        header: "Diastolic blood pressure",
        name: "Diastolic blood pressure",
        label: "Diastolic pressure",
        componentType: "inputField",
        icon: icons.diastolicPressure,
        suffix: "mmHg",
        validation: (value) => {
          return StandardValidations.vitalsDiastolic(value);
        },
        grid: { s: "6" }
      }
    ]);
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formKey.value += 1;
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Immediate postnatal check for mother",
        formData: immidiateChecksForMother.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "afterHour",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const afterHourChecksForMother = computed(() => [
      {
        header: "Systolic blood pressure",
        name: "Repeated systolic blood pressure",
        label: "pressure",
        componentType: "inputField",
        icon: icons.systolicPressure,
        obsValueType: "value_text",
        suffix: "mmHg",
        validation: (value) => {
          return StandardValidations.vitalsSystolic(value);
        },
        grid: { s: "6" }
      },
      {
        header: "Diastolic blood pressure",
        name: "Repeated diastolic blood pressure",
        label: "Diastolic pressure",
        componentType: "inputField",
        obsValueType: "value_text",
        icon: icons.diastolicPressure,
        suffix: "mmHg",
        validation: (value) => {
          return StandardValidations.vitalsDiastolic(value);
        },
        grid: { s: "6" }
      },
      {
        header: "Pulse",
        name: "Pulse",
        label: "Pulse",
        componentType: "inputField",
        obsValueType: "value_text",
        icon: icons.pulse,
        suffix: "bpm",
        validation: (value) => {
          return StandardValidations.vitalsPulseRate(value);
        },
        grid: { s: "6" }
      },
      {
        header: "Temperature",
        name: "Temperature",
        label: "Temperature",
        componentType: "inputField",
        obsValueType: "value_text",
        icon: icons.temprature,
        suffix: "°C",
        validation: (value) => {
          return StandardValidations.vitalsTemperature(value);
        },
        grid: { s: "6" }
      },
      {
        header: "Respiratory Rate",
        name: "Respiratory Rate",
        label: "Respiratory Rate",
        componentType: "inputField",
        obsValueType: "value_text",
        icon: icons.respiratory,
        suffix: "bpm",
        validation: (value) => {
          return StandardValidations.vitalsRespiratoryRate(value);
        },
        grid: { s: "6" }
      },
      {
        header: "Uterus",
        name: "Uterus",
        label: "Uterus",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: [
          { label: "Involuted", value: "Involuted" },
          { label: "Sub-involuted", value: "Sub-involuted" }
        ]
      },
      {
        header: "Urine passed?",
        name: "Has passed urine",
        label: "Urine passed?",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return { "Amount of Urine": "" };
          }
        }
      },
      {
        header: "Amount of Urine",
        name: "amount of Urine",
        label: "Amount of Urine",
        componentType: "inputField",
        suffix: "bpm",
        obsValueType: "value_text",
        condition: (allFormValues) => allFormValues["Urine passed"] === "Yes",
        //validation: PostnatalValidationSchema.fields["Temperature"],
        grid: { s: "6" }
      }
    ]);
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formKey.value += 1;
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "After 1 hour",
        formData: afterHourChecksForMother.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "forMother",
  setup(__props, { expose: __expose }) {
    const immediateMotherRef = ref(null);
    const afterHourRef = ref(null);
    onMounted(() => {
    });
    const onSubmit = async () => {
      const immediateValid = await immediateMotherRef.value?.validateForm();
      const afterHrValid = await afterHourRef.value?.validateForm();
      if (immediateValid && afterHrValid) {
        return false;
      }
      const immVal = await immediateMotherRef.value?.getValues();
      const aftHrVal = await afterHourRef.value?.getValues();
      await ObservationService.buildAddObsToEncounterPatient({ ...immVal, ...aftHrVal }, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_MOTHER);
    };
    const resetForms = () => {
      immediateMotherRef.value?.resetForm();
      afterHourRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      resetForms
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$k, {
              ref_key: "immediateMotherRef",
              ref: immediateMotherRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$j, {
              ref_key: "afterHourRef",
              ref: afterHourRef
            }, null, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const ForMother = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0371d0f5"]]);

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "immidiateChildCheck",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const formRef = ref(null);
    const props = __props;
    const emit = __emit;
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseFormConfig = [
      {
        header: "Immediate vital signs for Child",
        name: "header_slot",
        label: "Respiration rate",
        obsValueType: "value_text",
        componentType: "Slot"
      },
      {
        header: "Respiration rate",
        name: "Respiration rate",
        label: "Respiration rate",
        componentType: "inputField",
        obsValueType: "value_text",
        icon: icons.respiratory,
        validation: (value) => StandardValidations.vitalsRespiratoryRate(value),
        suffix: "BMP",
        grid: { s: "5" }
      },
      {
        header: "Temperature ",
        name: "Temperature",
        label: "Temperature",
        componentType: "inputField",
        obsValueType: "value_text",
        validation: (value) => StandardValidations.vitalsTemperature(value),
        icon: icons.temprature,
        suffix: "°C",
        grid: { s: "5" }
      },
      {
        header: "Cord bleeding?",
        name: "Cord bleeding",
        label: "Cord bleeding?",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "5" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Breast feeding in the first hour of birth?",
        name: "Breast feeding in the first hour of birth",
        label: "Breast feeding in the first hour of birth?",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Skin to skin contact with the mother (Immediate KMC)",
        name: "skin to skin contact with the mother",
        label: "Skin to skin contact with the mother",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "5" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Delayed bathing?",
        name: "Delayed bathing",
        label: "Delayed bathing?",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "5" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Delayed cord cutting?",
        name: "Delayed cord cutting",
        label: "Delayed cord cutting?",
        type: "standard",
        obsValueType: "value_coded",
        componentType: "radioButtonField",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "5" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseFormConfig.map((field) => {
        if (field.name && props.initialData && props.initialData[field.name] !== void 0) {
          return { ...field, value: props.initialData[field.name] };
        }
        return field;
      });
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Immediate postnatal check for child",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "hivStatusChild",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const formRef = ref(null);
    const props = __props;
    const emit = __emit;
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseFormConfig = [
      {
        header: "Maternal HIV Status",
        name: "Mother HIV Status",
        label: "Maternal HIV Status",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "5" },
        options: [
          { label: "Positive", value: "Positive" },
          { label: "Negative", value: "Negative" },
          { label: "Unknown", value: "Unknown" }
        ],
        onChange: (value, allFormValues) => {
          if (value === "Negative" || value === "Unknown") {
            return { "Maternal HIV Test results": "" };
          } else if (value === "Positive") {
            return { "Pre-pregnant ART": "", "During pregnant ART": "", "Last viral load test date": "" };
          }
        }
      },
      {
        header: "Maternal HIV Test results",
        name: "Mother HIV Test results",
        label: "Maternal HIV Test results",
        type: "standard",
        obsValueType: "value_coded",
        componentType: "radioButtonField",
        grid: { s: "5" },
        options: [
          { label: "Positive", value: "Positive" },
          { label: "Negative", value: "Negative" },
          { label: "Indeterminate", value: "Indeterminate" }
        ],
        condition: (allFormValues) => allFormValues["Mother HIV Status"] === "Negative" || allFormValues["Mother HIV Status"] === "Unknown",
        onChange: (value, allFormValues) => {
          if (value) {
            return { "HIV Test Date": "" };
          }
        }
      },
      {
        header: "HIV Test Date",
        name: "HIV test date",
        label: "HIV Test Date",
        componentType: "dateInputField",
        obsValueType: "value_date",
        icon: icons.today_date,
        grid: { s: "5" },
        condition: (allFormValues) => !!allFormValues["Maternal HIV Test results"]
      },
      {
        header: "Pre-pregnant ART",
        name: "Pre-pregnant ART",
        label: "Pre-pregnant ART",
        type: "standard",
        obsValueType: "value_coded",
        componentType: "radioButtonField",
        grid: { s: "5" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Unknown", value: "Unknown" }
        ],
        condition: (allFormValues) => allFormValues["Mother HIV Status"] === "Positive"
      },
      {
        header: "During pregnant ART",
        name: "During pregnant ART",
        label: "During pregnant ART",
        type: "standard",
        obsValueType: "value_coded",
        componentType: "radioButtonField",
        grid: { s: "5" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Unknown", value: "Unknown" }
        ],
        condition: (allFormValues) => allFormValues["Mother HIV Status"] === "Positive",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return { "Which regimen": "" };
          }
        }
      },
      {
        header: "Which regimen",
        name: "Type of regimen",
        label: "Which regimen",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "5" },
        condition: (allFormValues) => allFormValues["During pregnant ART"] === "Yes",
        componentType: "inputField"
      },
      {
        header: "Last viral load test date",
        name: "Last viral load test date",
        label: "Last viral load test date",
        obsValueType: "value_date",
        componentType: "dateInputField",
        icon: icons.today_date,
        grid: { s: "5" },
        onChange: (value, allFormValues) => {
          if (value) {
            return { "Viral load result copies/ml": "" };
          }
        },
        condition: (allFormValues) => allFormValues["Mother HIV Status"] === "Positive" || allFormValues["Maternal HIV Test results"] === "Positive"
      },
      {
        header: "Viral load result ",
        name: "Viral load result copies",
        label: "Viral load result copies/ml",
        type: "standard",
        obsValueType: "value_text",
        grid: { s: "5" },
        suffix: "copies/ml",
        componentType: "inputField",
        condition: (allFormValues) => !!allFormValues["Last viral load test date"]
      },
      {
        header: "ART Prophylaxis",
        name: "ART Prophylaxis",
        label: "ART Prophylaxis",
        type: "standard",
        obsValueType: "value_coded",
        componentType: "radioButtonField",
        grid: { s: "5" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        condition: (allFormValues) => allFormValues["Mother HIV Status"] === "Positive" || allFormValues["Maternal HIV Test results"] === "Positive",
        onChange: (value, allFormValues) => {
          if (value) {
            return { "Which regimen": "" };
          }
        }
      },
      {
        header: "Which regimen",
        name: "Which regimen",
        label: "Which regimen",
        type: "standard",
        obsValueType: "value_coded",
        componentType: "radioButtonField",
        grid: { s: "5" },
        options: [
          { label: "NVP", value: "NVP" },
          { label: "AZT/3TC/NVP", value: "AZT/3TC/NVP" }
        ],
        condition: (allFormValues) => allFormValues["ART Prophylaxis"] === "Yes"
      }
    ];
    const formDataWithValues = computed(() => {
      return baseFormConfig.map((field) => {
        if (props.initialData && field.name && props.initialData[field.name] !== void 0) {
          return { ...field, value: props.initialData[field.name] };
        }
        return field;
      });
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "HIV status",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "childInitialExamination",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const formRef = ref(null);
    const props = __props;
    const emit = __emit;
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseFormConfig = [
      {
        header: "Airway",
        name: "Airway",
        label: "Airway",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        header: "Breathing",
        name: "Breathing",
        label: "Breathing",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        header: "Circulation",
        name: "Circulation",
        label: "Circulation",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        header: "Convulsion",
        name: "Convulsion",
        label: "Convulsion",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Coma",
        name: "Coma",
        label: "Coma",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Dehydration",
        name: "Dehydration",
        label: "Dehydration",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Respiration",
        name: "Respiration",
        label: "Respiration",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        header: "Heart rate",
        name: "Initial exam Heart rate",
        label: "Heart rate",
        type: "standard",
        validation: (value) => StandardValidations.required(value),
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        header: "Temperature",
        name: "Initial exam Temperature",
        label: "Temperature",
        type: "standard",
        validation: (value) => StandardValidations.vitalsTemperature(value),
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { s: "6" }
      }
    ];
    const formDataWithValues = computed(() => {
      return baseFormConfig.map((field) => {
        if (props.initialData && field.name && props.initialData[field.name] !== void 0) {
          return { ...field, value: props.initialData[field.name] };
        }
        return field;
      });
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Initial Child examination",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "childHeadExam",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const formRef = ref(null);
    const props = __props;
    const emit = __emit;
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseFormConfig = [
      {
        header: "Head Circumference",
        name: "Head Circumference",
        label: "Head Circumference",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_text",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" }
      },
      {
        header: "Fontanelles",
        name: "Fontanelles",
        label: "Fontanelles",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Sunken", value: "Sunken" },
          { label: "Bulged", value: "Bulged" }
        ]
      },
      {
        header: "Molding",
        name: "Molding",
        label: "Molding",
        type: "standard",
        validation: (value) => StandardValidations.required(value),
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "+", value: "+" },
          { label: "++", value: "++" },
          { label: "+++", value: "+++" }
        ]
      },
      {
        header: "Birth trauma(Open tissue)",
        name: "Birth trauma",
        label: "Birth trauma",
        type: "standard",
        validation: (value) => StandardValidations.required(value),
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Lump",
        name: "Lump",
        label: "Lump",
        type: "standard",
        validation: (value) => StandardValidations.required(value),
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseFormConfig.map((field) => {
        if (props.initialData && field.name && props.initialData[field.name] !== void 0) {
          return { ...field, value: props.initialData[field.name] };
        }
        return field;
      });
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Head",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "childEyesAsessment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const formRef = ref(null);
    const props = __props;
    const emit = __emit;
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseFormConfig = [
      {
        header: "Jaundice",
        name: "Jaundice",
        label: "Jaundice",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Discharges",
        name: "Discharges",
        label: "Discharges",
        type: "standard",
        componentType: "radioButtonField",
        validation: (value) => StandardValidations.required(value),
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Presence of eye ball",
        name: "Presence of eye ball",
        label: "Presence of eye ball",
        type: "standard",
        componentType: "radioButtonField",
        validation: (value) => StandardValidations.required(value),
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Level of eyes to the ears (down or turner syndrome)",
        name: "Level of eyes to the ears",
        label: "Level of eyes to the ears",
        type: "standard",
        componentType: "radioButtonField",
        validation: (value) => StandardValidations.required(value),
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseFormConfig.map((field) => {
        if (props.initialData && field.name && props.initialData[field.name] !== void 0) {
          return { ...field, value: props.initialData[field.name] };
        }
        return field;
      });
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Eyes",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "childEarsAsessment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const formRef = ref(null);
    const props = __props;
    const emit = __emit;
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseFormConfig = [
      {
        header: "Symmetry",
        name: "Symmetry",
        label: "Symmetry",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Shape",
        name: "Shape",
        label: "Shape",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        header: "Discharges",
        name: "Ear Discharges",
        label: "Discharges",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Growth",
        name: "Growth",
        label: "Growth",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Blockage",
        name: "Blockage",
        label: "Blockage",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Deformities",
        name: "Deformities",
        label: "Deformities",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        validation: (value) => StandardValidations.required(value),
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseFormConfig.map((field) => {
        if (field.name && props.initialData?.[field.name] !== void 0) {
          return { ...field, value: props.initialData[field.name] };
        }
        return field;
      });
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Ears",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "childNoseAss",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const formRef = ref(null);
    const props = __props;
    const emit = __emit;
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseNoseConfig = [
      {
        header: "Shape",
        name: "Nose Shape",
        label: "Shape",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        header: "Discharges",
        name: "Nose Discharges",
        label: "Discharges",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Growth",
        name: "Growth",
        label: "Growth",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Blockage",
        name: "Nasal Blockage",
        label: "Blockage",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Prolapse",
        name: "Prolapse",
        label: "Prolapse",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Absence of the septum",
        name: "Absence of the septum",
        label: "Absence of the septum",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Deformities",
        name: "Deformities",
        label: "Deformities",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseNoseConfig.map((field) => ({
        ...field,
        value: props.initialData?.[field.name] ?? ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Nose",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "childLipAssesment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseLipsConfig = [
      {
        header: "Cyanosis",
        name: "Cyanosis",
        label: "Cyanosis",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Normal", value: "Normal" },
          { label: "Abnormal", value: "Abnormal" }
        ]
      },
      {
        header: "Pallor",
        name: "Pallor",
        label: "Pallor",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Cleft lip/palate",
        name: "cleft lip and palate",
        label: "cleft lip/palate",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Sucking reflex",
        name: "Suck reflex",
        label: "sucking reflex",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Present", value: "Present" },
          { label: "Absent", value: "Absent" }
        ]
      },
      {
        header: "Tongue",
        name: "Tongue",
        label: "Tongue",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Present", value: "Present" },
          { label: "Absent", value: "Absent" }
        ]
      },
      {
        header: "False teeth",
        name: "False teeth",
        label: "False teeth",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Present", value: "Present" },
          { label: "Absent", value: "Absent" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseLipsConfig.map((field) => ({
        ...field,
        value: props.initialData?.[field.name] ?? ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Lips/Mouth",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "childChestAsessment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseChestConfig = [
      {
        header: "Chest in drawing",
        name: "Chest in-drawing",
        label: "Chest in drawing",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Grunting",
        name: "Grunting",
        label: "Grunting",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Murmurs",
        name: "Murmurs",
        label: "Murmurs",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Respiratory rate",
        name: "Chest assesment Respiratory rate",
        label: "Respiratory rate",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { s: "6" },
        validation: (value) => StandardValidations.vitalsRespiratoryRate(value)
      },
      {
        header: "Respiratory signs",
        name: "Respiratory signs",
        label: "Respiratory signs",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { s: "6" }
      }
    ];
    const formDataWithValues = computed(() => {
      return baseChestConfig.map((field) => ({
        ...field,
        value: props.initialData?.[field.name] ?? ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Chest",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "childNeckAssesment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseNeckConfig = [
      {
        header: "Webbing",
        name: "Webbing",
        label: "Webbing",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Short neck",
        name: "Short neck",
        label: "Short neck",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseNeckConfig.map((field) => ({
        ...field,
        value: field.name ? props.initialData?.[field.name] ?? "" : ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Neck",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "childGenAssesment",
  props: {
    childId: {},
    initialData: {},
    gender: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseGenitaliaConfig = [
      {
        header: "Femoral pulse",
        name: "Femoral pulses",
        label: "Femoral pulse",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Patent anus",
        name: "Patent anus",
        label: "Patent anus",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Presence of all required orifices according to sex",
        name: "Presence of all required orifices according to sex",
        label: "Presence of all required orifices according to sex",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Descended testicles",
        name: "Descended testicles",
        label: "Descended testicles",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Discharges on female",
        name: "Vaginal discharge",
        label: "Discharges on female",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      const currentGender = props.gender ? props.gender.toUpperCase() : "";
      return baseGenitaliaConfig.filter((field) => {
        if (field.name === "Descended testicles") {
          return currentGender === "M";
        }
        if (field.name === "Vaginal discharge") {
          return currentGender === "F";
        }
        return true;
      }).map((field) => ({
        ...field,
        value: props.initialData?.[field.name] ?? ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Genitalia",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "childExtrAssesment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseExtremitiesConfig = [
      {
        header: "Capillary refill less than 3 seconds",
        name: "Capillary refill less than 3 seconds",
        label: "Capillary refill less than 3 seconds",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Pallor",
        name: "Extra assesment Pallor",
        label: "Pallor",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Cyanosis",
        name: "Cyanosis",
        label: "Cyanosis",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Extra digits",
        name: "Extra digits",
        label: "Extra digits",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Talipes",
        name: "Talipes",
        label: "Talipes",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Missing digits",
        name: "Missing digits",
        label: "Missing digits",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Coldness",
        name: "Coldness",
        label: "Coldness",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Erb's palsy",
        name: "Erbs palsy",
        label: "Erb's palsy",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Fractures",
        name: "Fractures",
        label: "Fractures",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseExtremitiesConfig.map((field) => ({
        ...field,
        value: props.initialData?.[field.name] ?? ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Extremities",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChildBackAssesment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseBackConfig = [
      {
        header: "Spina bifida",
        name: "Neural Tube Defect / Spina Bifida",
        label: "Spina bifida",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        onChange: (value) => {
          if (value) {
            return { open: "", closed: "" };
          }
        }
      },
      {
        header: "Open",
        name: "open",
        label: "Open",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        condition: (allFormValues) => allFormValues["Neural Tube Defect / Spina Bifida"] === "Yes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Close",
        name: "closed",
        label: "Close",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        condition: (allFormValues) => allFormValues["Neural Tube Defect / Spina Bifida"] === "Yes",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseBackConfig.map((field) => ({
        ...field,
        value: field.name ? props.initialData?.[field.name] ?? "" : ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Back",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChildReflexAssesment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseReflexConfig = [
      {
        header: "Suckling",
        name: "Suckling",
        label: "Suckling",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Rooting",
        name: "Rooting",
        label: "Rooting",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Grasping (palmer planter)",
        name: "Grasping",
        label: "Grasping",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Moro",
        name: "Moro reflex",
        label: "Moro",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Stepping",
        name: "Stepping",
        label: "Stepping",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        header: "Babinski",
        name: "Babinski",
        label: "Babinski",
        type: "standard",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      }
    ];
    const formDataWithValues = computed(() => {
      return baseReflexConfig.map((field) => ({
        ...field,
        value: props.initialData?.[field.name] ?? ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Check for reflexes",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChildLenAssesment",
  props: {
    childId: {},
    initialData: {}
  },
  emits: ["form-update"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = ref(null);
    const emitUpdate = (updatedValues) => {
      emit("form-update", updatedValues);
    };
    const baseLengthConfig = [
      {
        header: "Length",
        name: "Length",
        label: "Length (cm)",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_numeric",
        grid: { s: "6" },
        validation: (value) => StandardValidations.required(value)
      }
    ];
    const formDataWithValues = computed(() => {
      return baseLengthConfig.map((field) => ({
        ...field,
        value: props.initialData?.[field.name] ?? ""
      }));
    });
    const validateForm = async () => {
      return formRef.value?.validateForm();
    };
    const getValues = async () => {
      return formRef.value?.getFormValues();
    };
    const resetForm = () => {
      formRef.value?.resetForm();
    };
    __expose({
      validateForm,
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Length",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$2 = {
  key: 0,
  class: "icon-container check-icon"
};
const _hoisted_2$2 = {
  key: 1,
  class: "icon-container avatar-icon"
};
const _hoisted_3$1 = { class: "info-wrapper" };
const _hoisted_4$1 = { class: "info-group" };
const _hoisted_5$1 = { class: "child-name" };
const _hoisted_6$1 = { class: "info-group" };
const _hoisted_7$1 = { class: "child-dob" };
const _hoisted_8$1 = {
  key: 0,
  class: "info-group mt-2"
};
const _hoisted_9$1 = { class: "child-location" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "childrenCard",
  props: {
    data: {},
    isSelected: { type: Boolean, default: false }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const fullName = computed(() => {
      const names = [props.data.given_name, props.data.middle_name, props.data.family_name];
      return names.filter((n) => n && n.trim() !== "").join(" ");
    });
    const alignClass = computed(() => props.isSelected ? "text-left" : "text-center");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["child-card", { "is-selected": __props.isSelected, "is-unselected": !__props.isSelected }]),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle", __props.data))
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["card-content", alignClass.value])
        }, [
          __props.isSelected ? (openBlock(), createElementBlock("div", _hoisted_1$2, [..._cache[1] || (_cache[1] = [
            createBaseVNode("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createBaseVNode("polyline", { points: "20 6 9 17 4 12" })
            ], -1)
          ])])) : (openBlock(), createElementBlock("div", _hoisted_2$2, [..._cache[2] || (_cache[2] = [
            createBaseVNode("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              createBaseVNode("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
            ], -1)
          ])])),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("h3", _hoisted_5$1, toDisplayString(fullName.value), 1),
              _cache[3] || (_cache[3] = createBaseVNode("span", { class: "label" }, "Name", -1))
            ]),
            createBaseVNode("div", _hoisted_6$1, [
              createBaseVNode("p", _hoisted_7$1, toDisplayString(__props.data.birthdate), 1),
              _cache[4] || (_cache[4] = createBaseVNode("span", { class: "label" }, "Date of Birth", -1))
            ]),
            __props.isSelected ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
              createBaseVNode("p", _hoisted_9$1, toDisplayString(__props.data.home_district), 1),
              _cache[5] || (_cache[5] = createBaseVNode("span", { class: "label" }, "District", -1))
            ])) : createCommentVNode("", true)
          ])
        ], 2)
      ], 2);
    };
  }
});

const childrenCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5e98cee3"]]);

const _hoisted_1$1 = { class: "page-container" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3 = { class: "child-context-container" };
const _hoisted_4 = { class: "card-grid" };
const _hoisted_5 = { slot: "content" };
const _hoisted_6 = { class: "nav-buttons" };
const _hoisted_7 = { slot: "content" };
const _hoisted_8 = { class: "nav-buttons" };
const _hoisted_9 = { slot: "content" };
const _hoisted_10 = { class: "nav-buttons" };
const _hoisted_11 = { slot: "content" };
const _hoisted_12 = { class: "nav-buttons" };
const _hoisted_13 = { slot: "content" };
const _hoisted_14 = { class: "nav-buttons" };
const _hoisted_15 = { slot: "content" };
const _hoisted_16 = { class: "nav-buttons" };
const _hoisted_17 = { slot: "content" };
const _hoisted_18 = { class: "nav-buttons" };
const _hoisted_19 = { slot: "content" };
const _hoisted_20 = { class: "nav-buttons" };
const _hoisted_21 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_22 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "forChild",
  props: {
    children: {}
  },
  setup(__props, { expose: __expose }) {
    const immidiateChildCheck = ref(null);
    const hivStatusChildInstance = ref(null);
    const childInitialExamination = ref(null);
    const childHeadExam = ref(null);
    const childEyesAsessment = ref(null);
    const childEarsAsessment = ref(null);
    const childNoseAss = ref(null);
    const childLipAssesment = ref(null);
    const childNeckAssesment = ref(null);
    const childChestAsessment = ref(null);
    const childBackAssesment = ref(null);
    const childGenAssesment = ref(null);
    const childExtrAssesment = ref(null);
    const childReflexAssesment = ref(null);
    const childLenAssesment = ref(null);
    const activeAccordion = ref("immediate");
    const selectedChild = ref(null);
    const allChildrenAnswers = ref({});
    const props = __props;
    const childrenList = computed(() => props.children ?? []);
    const hasChildren = computed(() => childrenList.value.length > 0);
    const sections = [
      { id: "immediate", label: "Immediate Child Check" },
      { id: "hiv", label: "HIV Status" },
      { id: "initial", label: "Initial Examination" },
      { id: "head_neck", label: "Head & Neck Assessment" },
      { id: "chest_back", label: "Chest & Back Assessment" },
      { id: "genital", label: "Genital Assessment" },
      { id: "extremities_neuro", label: "Extremities & Reflexes" },
      { id: "length", label: "Length Assessment" }
    ];
    const currentIndex = computed(() => sections.findIndex((s) => s.id === activeAccordion.value));
    const isLast = computed(() => currentIndex.value === sections.length - 1);
    const isFirst = computed(() => currentIndex.value === 0);
    const currentChildIndex = computed(
      () => childrenList.value.findIndex((child) => child.person_id === selectedChild.value?.person_id)
    );
    const hasNextChild = computed(
      () => currentChildIndex.value !== -1 && currentChildIndex.value < childrenList.value.length - 1
    );
    const currentChildAnswers = computed(() => {
      if (!selectedChild.value) return {};
      return allChildrenAnswers.value[selectedChild.value.person_id] || {};
    });
    const onChildSelect = (child) => {
      activeAccordion.value = "immediate";
      selectedChild.value = child;
    };
    const handleFormUpdate = (updatedValues) => {
      if (selectedChild.value) {
        const id = selectedChild.value.person_id;
        const existingData = allChildrenAnswers.value[id] || {};
        allChildrenAnswers.value[id] = {
          ...existingData,
          ...updatedValues
        };
      }
    };
    const validateRef = async () => {
      const validateComponent = async (componentRef) => {
        if (componentRef?.value?.validateForm) {
          const isValid = await componentRef.value.validateForm();
          return isValid === null;
        }
        return true;
      };
      switch (activeAccordion.value) {
        case "immediate":
          return await validateComponent(immidiateChildCheck);
        case "hiv":
          return await validateComponent(hivStatusChildInstance);
        case "initial":
          return await validateComponent(childInitialExamination);
        case "head_neck":
          const hnResults = await Promise.all([
            validateComponent(childHeadExam),
            validateComponent(childEyesAsessment),
            validateComponent(childEarsAsessment),
            validateComponent(childNoseAss),
            validateComponent(childLipAssesment),
            validateComponent(childNeckAssesment)
          ]);
          return hnResults.every((r) => r === true);
        case "chest_back":
          const cbResults = await Promise.all([validateComponent(childChestAsessment), validateComponent(childBackAssesment)]);
          return cbResults.every((r) => r === true);
        case "genital":
          return await validateComponent(childGenAssesment);
        case "extremities_neuro":
          const enResults = await Promise.all([validateComponent(childExtrAssesment), validateComponent(childReflexAssesment)]);
          return enResults.every((r) => r === true);
        case "length":
          return await validateComponent(childLenAssesment);
        default:
          return true;
      }
    };
    const next = async () => {
      const isValid = await validateRef();
      if (!isValid) return;
      await saveDataForCurrentStep();
      if (isLast.value) {
        if (hasNextChild.value) {
          const nextIndex = currentChildIndex.value + 1;
          selectedChild.value = childrenList.value[nextIndex];
          activeAccordion.value = "immediate";
        } else {
          toastWarning("click on finish to submit");
        }
      } else {
        activeAccordion.value = sections[currentIndex.value + 1].id;
      }
    };
    const saveDataForCurrentStep = async () => {
      if (!selectedChild.value) return;
      let dataToSave = {};
      const getCompValues = async (ref2) => ref2.value ? await ref2.value.getValues() || {} : {};
      switch (activeAccordion.value) {
        case "immediate":
          dataToSave = await getCompValues(immidiateChildCheck);
          break;
        case "hiv":
          dataToSave = await getCompValues(hivStatusChildInstance);
          break;
        case "initial":
          dataToSave = await getCompValues(childInitialExamination);
          break;
        case "head_neck":
          dataToSave = {
            ...await getCompValues(childHeadExam),
            ...await getCompValues(childEyesAsessment),
            ...await getCompValues(childEarsAsessment),
            ...await getCompValues(childNoseAss),
            ...await getCompValues(childLipAssesment),
            ...await getCompValues(childNeckAssesment)
          };
          break;
        case "chest_back":
          dataToSave = { ...await getCompValues(childChestAsessment), ...await getCompValues(childBackAssesment) };
          break;
        case "genital":
          dataToSave = await getCompValues(childGenAssesment);
          break;
        case "extremities_neuro":
          dataToSave = { ...await getCompValues(childExtrAssesment), ...await getCompValues(childReflexAssesment) };
          break;
        case "length":
          dataToSave = await getCompValues(childLenAssesment);
          break;
      }
      const id = selectedChild.value.person_id;
      allChildrenAnswers.value[id] = {
        ...allChildrenAnswers.value[id] || {},
        ...dataToSave
      };
    };
    const back = () => {
      if (!isFirst.value) {
        activeAccordion.value = sections[currentIndex.value - 1].id;
      }
    };
    const onSubmit = async () => {
      const children = childrenList.value;
      if (children.length === 0) {
        return;
      }
      for (const child of children) {
        const id = child.person_id;
        const data = allChildrenAnswers.value[id];
        await ObservationService.buildRelativeObs(child, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
      }
    };
    watch(() => childrenList.value, (list) => {
      if (list.length > 0 && !selectedChild.value) {
        selectedChild.value = list[0];
      }
    }, { immediate: true });
    const resetForm = () => {
      allChildrenAnswers.value = {};
      immidiateChildCheck.value?.resetForm();
      hivStatusChildInstance.value?.resetForm();
      childInitialExamination.value?.resetForm();
      childHeadExam.value?.resetForm();
      childEyesAsessment.value?.resetForm();
      childEarsAsessment.value?.resetForm();
      childNoseAss.value?.resetForm();
      childLipAssesment.value?.resetForm();
      childNeckAssesment.value?.resetForm();
      childChestAsessment.value?.resetForm();
      childBackAssesment.value?.resetForm();
      childGenAssesment.value?.resetForm();
      childExtrAssesment.value?.resetForm();
      childReflexAssesment.value?.resetForm();
      childLenAssesment.value?.resetForm();
    };
    __expose({
      onSubmit,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        hasChildren.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3, [
            _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "context-title" }, "Who are we assessing?", -1)),
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(childrenList.value, (child) => {
                return openBlock(), createBlock(childrenCard, {
                  key: child.person_id,
                  data: child,
                  "is-selected": selectedChild.value?.person_id === child.person_id,
                  onToggle: onChildSelect
                }, null, 8, ["data", "is-selected"]);
              }), 128))
            ])
          ]),
          selectedChild.value ? (openBlock(), createBlock(unref(IonAccordionGroup), {
            key: 0,
            modelValue: activeAccordion.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeAccordion.value = $event),
            class: "previousView"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonAccordion), {
                value: "immediate",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[2] || (_cache[2] = [
                          createTextVNode("Immediate Child Check", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$h, {
                          ref_key: "immidiateChildCheck",
                          ref: immidiateChildCheck,
                          key: selectedChild.value.person_id,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        createBaseVNode("div", _hoisted_6, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[3] || (_cache[3] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[4] || (_cache[4] = [
                              createTextVNode(" Next ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(IonAccordion), {
                value: "hiv",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[5] || (_cache[5] = [
                          createTextVNode("HIV Status", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$g, {
                          ref_key: "hivStatusChildInstance",
                          ref: hivStatusChildInstance,
                          key: selectedChild.value.person_id,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        createBaseVNode("div", _hoisted_8, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[6] || (_cache[6] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[7] || (_cache[7] = [
                              createTextVNode(" Next ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(IonAccordion), {
                value: "initial",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[8] || (_cache[8] = [
                          createTextVNode("Initial Examination", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$f, {
                          ref_key: "childInitialExamination",
                          ref: childInitialExamination,
                          key: selectedChild.value.person_id,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        createBaseVNode("div", _hoisted_10, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[9] || (_cache[9] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[10] || (_cache[10] = [
                              createTextVNode(" Next ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(IonAccordion), {
                value: "head_neck",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[11] || (_cache[11] = [
                          createTextVNode("Head & Neck Assessment", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        _cache[14] || (_cache[14] = createBaseVNode("h5", { class: "section-title" }, "Head", -1)),
                        (openBlock(), createBlock(_sfc_main$e, {
                          ref_key: "childHeadExam",
                          ref: childHeadExam,
                          key: `head-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        _cache[15] || (_cache[15] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        _cache[16] || (_cache[16] = createBaseVNode("h5", { class: "section-title" }, "Eyes", -1)),
                        (openBlock(), createBlock(_sfc_main$d, {
                          ref_key: "childEyesAsessment",
                          ref: childEyesAsessment,
                          key: `eyes-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        _cache[17] || (_cache[17] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        _cache[18] || (_cache[18] = createBaseVNode("h5", { class: "section-title" }, "Ears", -1)),
                        (openBlock(), createBlock(_sfc_main$c, {
                          ref_key: "childEarsAsessment",
                          ref: childEarsAsessment,
                          key: `ears-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        _cache[19] || (_cache[19] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        _cache[20] || (_cache[20] = createBaseVNode("h5", { class: "section-title" }, "Nose", -1)),
                        (openBlock(), createBlock(_sfc_main$b, {
                          ref_key: "childNoseAss",
                          ref: childNoseAss,
                          key: `nose-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        _cache[21] || (_cache[21] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        _cache[22] || (_cache[22] = createBaseVNode("h5", { class: "section-title" }, "Lips & Mouth", -1)),
                        (openBlock(), createBlock(_sfc_main$a, {
                          ref_key: "childLipAssesment",
                          ref: childLipAssesment,
                          key: `lips-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        _cache[23] || (_cache[23] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        _cache[24] || (_cache[24] = createBaseVNode("h5", { class: "section-title" }, "Neck", -1)),
                        (openBlock(), createBlock(_sfc_main$8, {
                          ref_key: "childNeckAssesment",
                          ref: childNeckAssesment,
                          key: `neck-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        createBaseVNode("div", _hoisted_12, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[12] || (_cache[12] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[13] || (_cache[13] = [
                              createTextVNode(" Next ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(IonAccordion), {
                value: "chest_back",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[25] || (_cache[25] = [
                          createTextVNode("Chest & Back Assessment", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        _cache[28] || (_cache[28] = createBaseVNode("h5", { class: "section-title" }, "Chest", -1)),
                        (openBlock(), createBlock(_sfc_main$9, {
                          ref_key: "childChestAsessment",
                          ref: childChestAsessment,
                          key: `chest-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        _cache[29] || (_cache[29] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        _cache[30] || (_cache[30] = createBaseVNode("h5", { class: "section-title" }, "Back", -1)),
                        (openBlock(), createBlock(_sfc_main$5, {
                          ref_key: "childBackAssesment",
                          ref: childBackAssesment,
                          key: `back-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        createBaseVNode("div", _hoisted_14, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[26] || (_cache[26] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[27] || (_cache[27] = [
                              createTextVNode(" Next ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(IonAccordion), {
                value: "genital",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[31] || (_cache[31] = [
                          createTextVNode("Genital Assessment", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$7, {
                          ref_key: "childGenAssesment",
                          ref: childGenAssesment,
                          key: selectedChild.value.person_id,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          gender: selectedChild.value.gender,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data", "gender"])),
                        createBaseVNode("div", _hoisted_16, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[32] || (_cache[32] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[33] || (_cache[33] = [
                              createTextVNode(" Next ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(IonAccordion), {
                value: "extremities_neuro",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[34] || (_cache[34] = [
                          createTextVNode("Extremities & Reflexes", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        _cache[37] || (_cache[37] = createBaseVNode("h5", { class: "section-title" }, "Extremities", -1)),
                        (openBlock(), createBlock(_sfc_main$6, {
                          ref_key: "childExtrAssesment",
                          ref: childExtrAssesment,
                          key: `extr-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        _cache[38] || (_cache[38] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        _cache[39] || (_cache[39] = createBaseVNode("h5", { class: "section-title" }, "Reflexes", -1)),
                        (openBlock(), createBlock(_sfc_main$4, {
                          ref_key: "childReflexAssesment",
                          ref: childReflexAssesment,
                          key: `ref-${selectedChild.value.person_id}`,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        createBaseVNode("div", _hoisted_18, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[35] || (_cache[35] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[36] || (_cache[36] = [
                              createTextVNode(" Next ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(IonAccordion), {
                value: "length",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[40] || (_cache[40] = [
                          createTextVNode("Length Assessment", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_19, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$3, {
                          ref_key: "childLenAssesment",
                          ref: childLenAssesment,
                          key: selectedChild.value.person_id,
                          "child-id": selectedChild.value.person_id,
                          "initial-data": currentChildAnswers.value,
                          onFormUpdate: handleFormUpdate
                        }, null, 8, ["child-id", "initial-data"])),
                        createBaseVNode("div", _hoisted_20, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[41] || (_cache[41] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          isLast.value && hasNextChild.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            color: "secondary",
                            fill: "solid",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [
                              _cache[42] || (_cache[42] = createTextVNode(" Next Child ", -1)),
                              createVNode(unref(IonIcon), {
                                slot: "end",
                                icon: unref(arrowForward)
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          isLast.value && !hasNextChild.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 2,
                            color: "success",
                            fill: "solid",
                            onClick: withModifiers(onSubmit, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[43] || (_cache[43] = [
                              createTextVNode(" Finish ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", _hoisted_21, [..._cache[44] || (_cache[44] = [
            createBaseVNode("div", { class: "empty-content" }, [
              createBaseVNode("p", null, "Please select a child above to begin the assessment.")
            ], -1)
          ])]))
        ])) : (openBlock(), createElementBlock("div", _hoisted_22, [..._cache[45] || (_cache[45] = [
          createBaseVNode("div", { class: "empty-content" }, [
            createBaseVNode("p", null, "No children were found for the latest delivery."),
            createBaseVNode("p", null, "Please confirm delivery details or register the child.")
          ], -1)
        ])]))
      ]);
    };
  }
});

const ForChild = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fb2d90b4"]]);

const _hoisted_1 = {
  style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" },
  class: "p-container"
};
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalChecks",
  setup(__props) {
    const router = useRouter();
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    const forMotherRef = ref(null);
    const forChildRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const children = ref([]);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "For Mother":
          return "ForMother";
        case "For Child":
          return "ForChild";
        default:
          return null;
      }
    };
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglass-outline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const getActiveTabs = () => {
      return [
        {
          title: "For Mother",
          icon: ""
        },
        {
          title: "For Child",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const openBackController = () => {
      router.push("/labour/home");
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
    };
    onMounted(async () => {
      const result = await RelationshipService.children_from_latest_delivery();
      if (result) {
        const uniqueChildren = result.filter(
          (child, index, self) => index === self.findIndex((c) => c.person_id === child.person_id)
        );
        children.value = uniqueChildren;
      } else {
        children.value = [];
      }
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
    });
    const saveData = async () => {
      isSaving.value = true;
      try {
        forMotherRef.value?.onSubmit().then((m) => {
          forMotherRef.value?.resetForms();
          forChildRef.value?.onSubmit().then((c) => {
            forChildRef.value?.resetForm();
            toastSuccess("Postnatal checks data saved");
            router.push("/labour/home");
          });
        });
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$l, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Immediate postnatal checks",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to Contact",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ForMother, {
                        ref_key: "forMotherRef",
                        ref: forMotherRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ForMother"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ForChild, {
                        ref_key: "forChildRef",
                        ref: forChildRef,
                        children: children.value
                      }, null, 8, ["children"])
                    ], 512), [
                      [vShow, getActiveComponent() === "ForChild"]
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

const postnatalChecks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4d477391"]]);

export { postnatalChecks as default };
