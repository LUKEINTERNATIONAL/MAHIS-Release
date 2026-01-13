import { y as StandardValidations, C as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, t as toastWarning } from '../index-C6u5KmBv.js';
import { d as computed, q as defineComponent, r as ref, aH as useRouter, x as createElementBlock, y as openBlock, B as createBaseVNode, z as createVNode, E as unref, J as Fragment } from './vendor-BPW-J91F.js';

function useReasonForVisitForm(config = {}) {
  const { isSubsequentVisit = false } = config;
  const dangerSignsOptions = [
    "None",
    "Central cyanosis",
    "Pre-term labour",
    "Unconscious",
    "Fever",
    "Imminent delivery",
    "Severe headache",
    "Severe vomiting",
    "Severe abdominal pain",
    "Draining liquor",
    "Respiratory problems",
    "Convulsion history",
    "Vomiting",
    "Oedema",
    "Epigastric pain",
    "Bleeding vaginally",
    "Sepsis",
    "Pre-eclampsia",
    "Puerperal Psychosis",
    "Breast engorgement",
    "Other",
    "Seizures"
  ].map((x) => {
    if (x === "None") {
      return { label: x, value: x, exclusive: true };
    } else return { label: x, value: x };
  });
  const specificHealthConcernsOptions = [
    "Abnormal vaginal discharge",
    "Change in blood pressure-up",
    "Diarrhoea",
    "Vomiting",
    "Genital ulcers",
    "Change in blood pressure-down",
    "Constipation",
    "Contractions",
    "Vaginal bleeding",
    "Intimate partner violence",
    "Flu symptoms",
    "Painful urination",
    "Headache",
    "Dyspepsia",
    "Frequent urination/Polyuria",
    "Injury",
    "Jaundice",
    "Mental health-Depression",
    "Genital warts",
    "Itchy vulva",
    "Painful intercourse",
    "No health concerns",
    "Other"
  ].map((x) => ({ label: x, value: x }));
  const reasonForVisitOptions = computed(() => {
    const base = [
      {
        label: "Scheduled subsequent ANC visit",
        value: "Scheduled subsequent ANC visit"
      },
      {
        label: "Specific complaint related to antenatal care",
        value: "Specific complaint related to antenatal care"
      }
    ];
    if (!isSubsequentVisit) {
      base.unshift({
        label: "First antenatal care contact",
        value: "First antenatal care contact"
      });
    }
    return base;
  });
  const reasonForVisitForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Reason the woman came to the facility today",
        name: "Reason for visit",
        obsValueType: "value_text",
        type: "inline",
        validation: StandardValidations.required,
        options: reasonForVisitOptions.value
      },
      {
        componentType: "checkboxField",
        header: "What danger signs does the woman have?",
        name: "Danger signs present",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        options: dangerSignsOptions
      },
      {
        componentType: "inputField",
        header: "Specify the danger signs",
        name: "_Danger signs present",
        obsValueType: "value_text",
        type: "text",
        grid: { s: "12" },
        condition: (formValues) => {
          return Array.isArray(formValues["Danger signs present"]) && formValues["Danger signs present"].includes("Other");
        },
        validation: StandardValidations.required
      },
      {
        componentType: "radioButtonField",
        header: "Do you want to refer the woman?",
        name: "Referral required",
        obsValueType: "value_text",
        type: "standard",
        condition: (formValues) => Array.isArray(formValues["Danger signs present"]) && formValues["Danger signs present"].length > 0 && !formValues["Danger signs present"].includes("None"),
        validation: StandardValidations.required,
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "checkboxField",
        header: "What are the specific health concerns for the patient?",
        name: "Specific health concerns",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        options: specificHealthConcernsOptions,
        condition: (formValues) => formValues["Referral required"] === "No"
      },
      {
        componentType: "inputField",
        header: "Other (specify)",
        name: "_Specific health concerns",
        obsValueType: "value_text",
        type: "text",
        condition: (formValues) => formValues["Referral required"] === "No" && Array.isArray(formValues["Specific health concerns"]) && formValues["Specific health concerns"].includes("Other"),
        validation: StandardValidations.required
      },
      {
        componentType: "radioButtonField",
        header: "Does the woman have any previous ANC visit/s done at any facility?",
        name: "Previous visit",
        obsValueType: "value_text",
        type: "standard",
        condition: (formValues) => formValues["Referral required"] === "No",
        validation: StandardValidations.required,
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "inputField",
        header: "Enter number of previous ANC visits",
        name: "Number of previous visits",
        obsValueType: "value_numeric",
        type: "number",
        condition: (formValues) => formValues["Referral required"] === "No" && formValues["Previous visit"] === "Yes",
        validation: (value) => StandardValidations.isWholeNumber(value)
      }
    ];
  });
  return {
    reasonForVisitForm
  };
}

const _hoisted_1 = { class: "custom-card" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReasonForVisit",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const router = useRouter();
    const { reasonForVisitForm } = useReasonForVisitForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() == null) {
        if (await ObservationService.buildSaveObs(data, EncounterTypeId.QUICK_CHECK)) toastSuccess("Reason for Visit saved successfully");
        formRef.value?.resetForm();
        router.push("contact");
      } else {
        toastWarning("Please fix validation errors before submitting");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "ion-text-center" }, "Quick Check", -1)),
        createBaseVNode("div", _hoisted_1, [
          createVNode(StandardForm, {
            "form-data": unref(reasonForVisitForm),
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["form-data"])
        ])
      ], 64);
    };
  }
});

export { _sfc_main as _ };
