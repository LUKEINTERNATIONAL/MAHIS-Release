import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, be as IonCardContent, bM as IonCard, aM as useRouter, O as createBlock, aH as IonContent, C as createBaseVNode, b_ as chevronBackOutline, bw as IonPage, f as ref } from './vendor-D71W8bKc.js';
import { n as icons, y as StandardValidations, z as StandardForm, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-U6BInm9K.js';
import { D as DemographicBar } from './DemographicBar-CXvoA5K3.js';
import { B as BasicFooter } from './BasicFooter-CGC6ksza.js';

const requiredField = (value, label) => {
  const required = StandardValidations.required(value);
  return required ? `${label} is required` : null;
};
const positiveNumber = (value, label) => {
  if (value === "" || value === null || value === void 0) return null;
  const numericValidation = StandardValidations.isNotEmptyandNumber(value);
  if (numericValidation) return `${label} must be a valid number`;
  return Number(value) > 0 ? null : `${label} must be greater than 0`;
};
const useLabourLabInvestigationsForm = () => {
  const labourLabInvestigationsFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Maternal Blood Group",
        name: "Blood Group",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Blood Group"),
        options: [
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "AB", value: "AB" },
          { label: "O", value: "O" },
          { label: "Unknown", value: "Unknown" }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Maternal Rhesus Factor",
        name: "Rhesus Factor",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Rhesus Factor"),
        options: [
          { label: "Rh-Positive", value: "Rh-Positive" },
          { label: "Rh-Negative", value: "Rh-Negative" },
          { label: "Unknown", value: "Unknown" }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Haemoglobin Status",
        name: "Haemoglobin Status",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Haemoglobin Status"),
        options: [
          { label: "Known", value: "Known" },
          { label: "Unknown", value: "Unknown" }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Haemoglobin (g/dL)",
        name: "Haemoglobin (g/dL)",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unit: "g/dL",
        placeholder: "Enter haemoglobin value",
        condition: (allFormValues) => allFormValues["Haemoglobin Status"] === "Known",
        validation: (value, allFormValues) => {
          if (allFormValues["Haemoglobin Status"] !== "Known") return null;
          const required = requiredField(value, "Haemoglobin (g/dL)");
          if (required) return required;
          return positiveNumber(value, "Haemoglobin (g/dL)");
        },
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "inputField",
        header: "Random Blood Sugar (mg/dL)",
        name: "Random Blood Sugar (mg/dL)",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unit: "mg/dL",
        placeholder: "Enter random blood sugar",
        validation: (value) => positiveNumber(value, "Random Blood Sugar (mg/dL)"),
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Protein",
        name: "Urinalysis Protein",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Protein"),
        options: [
          { label: "Negative", value: "Negative" },
          { label: "Trace", value: "Trace" },
          { label: "+", value: "+" },
          { label: "++", value: "++" },
          { label: "+++", value: "+++" },
          { label: "++++", value: "++++" },
          { label: "Unknown", value: "Unknown" },
          { label: "Not Applicable", value: "Not Applicable" }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Glucose",
        name: "Urinalysis Glucose",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Glucose"),
        options: [
          { label: "Positive", value: "Positive" },
          { label: "Negative", value: "Negative" },
          { label: "Unknown", value: "Unknown" },
          { label: "Not Applicable", value: "Not Applicable" }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Ketones / Acetone",
        name: "Urinalysis Ketones or Acetone",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Ketones / Acetone"),
        options: [
          { label: "Negative", value: "Negative" },
          { label: "Trace", value: "Trace" },
          { label: "+", value: "+" },
          { label: "++", value: "++" },
          { label: "+++", value: "+++" },
          { label: "Unknown", value: "Unknown" },
          { label: "Not Applicable", value: "Not Applicable" }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Leucocytes",
        name: "Urinalysis Leucocytes",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Leucocytes"),
        options: [
          { label: "Negative", value: "Negative" },
          { label: "Trace", value: "Trace" },
          { label: "+25", value: "+25" },
          { label: "++75", value: "++75" },
          { label: "+++500", value: "+++500" },
          { label: "Unknown", value: "Unknown" },
          { label: "Not Applicable", value: "Not Applicable" }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Nitrates",
        name: "Urinalysis Nitrates",
        type: "inline",
        obsValueType: "value_coded",
        validation: (value) => requiredField(value, "Nitrates"),
        options: [
          { label: "Negative", value: "Negative" },
          { label: "Trace", value: "Trace" },
          { label: "Positive", value: "Positive" },
          { label: "Unknown", value: "Unknown" },
          { label: "Not Applicable", value: "Not Applicable" }
        ],
        grid: { s: "12" }
      }
    ];
  });
  return {
    labourLabInvestigationsFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabInvestigations",
  setup(__props, { expose: __expose }) {
    const { formRef, validateForm, getFormValues, resetForm } = useExposeFromStandardForm();
    const { labourLabInvestigationsFormSection } = useLabourLabInvestigationsForm();
    const labourLabInvestigationsForm = computed(() => labourLabInvestigationsFormSection.value);
    const onSubmit = async () => {
      const validationErrors = validateForm();
      if (validationErrors) {
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const formValues = getFormValues();
      if (!formValues) {
        toastWarning("Could not find form data");
        return false;
      }
      const patient = await ObservationService.buildSaveObs(formValues, EncounterTypeId.LABOUR_ASSESSMENT);
      if (!patient) return false;
      toastSuccess("Lab investigations saved successfully");
      return true;
    };
    __expose({
      onSubmit,
      validateForm,
      getFormValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Lab Investigations",
                  formData: labourLabInvestigationsForm.value,
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

const LabInvestigations = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-efed1bb1"]]);

const _hoisted_1 = { class: "lab-investigations-container" };
const _hoisted_2 = { class: "back-profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labInvestigations",
  setup(__props) {
    const router = useRouter();
    const labInvestigationsRef = ref(null);
    const navigateToHome = () => {
      router.push("/labour/home");
    };
    const saveData = async () => {
      const hasSaved = await labInvestigationsRef.value?.onSubmit?.();
      if (hasSaved) {
        navigateToHome();
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
                createBaseVNode("div", _hoisted_2, [
                  createVNode(DynamicButton, {
                    name: "Back to Labour Home",
                    iconSlot: "start",
                    fill: "clear",
                    icon: unref(chevronBackOutline),
                    "font-weight": "600",
                    onClick: navigateToHome
                  }, null, 8, ["icon"])
                ]),
                createVNode(LabInvestigations, {
                  ref_key: "labInvestigationsRef",
                  ref: labInvestigationsRef
                }, null, 512)
              ])
            ]),
            _: 1
          }),
          createVNode(BasicFooter, {
            onFinishBtn: _cache[0] || (_cache[0] = ($event) => saveData())
          })
        ]),
        _: 1
      });
    };
  }
});

const labInvestigations = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76a3b51a"]]);

export { labInvestigations as default };
