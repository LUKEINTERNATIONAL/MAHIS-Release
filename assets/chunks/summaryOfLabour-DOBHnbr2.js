import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, be as IonCardContent, bM as IonCard, aM as useRouter, O as createBlock, aH as IonContent, C as createBaseVNode, b_ as chevronBackOutline, bw as IonPage, f as ref } from './vendor-D71W8bKc.js';
import { n as icons, y as StandardValidations, z as StandardForm, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-wKSAITHM.js';
import { D as DemographicBar } from './DemographicBar-hnxw3Y7I.js';
import { B as BasicFooter } from './BasicFooter-D8B7oo1s.js';

const SUMMARY_LABOUR_STAGE_KEYS = {
  first: { hours: "1st stage duration (hours)", minutes: "1st stage duration (minutes)" },
  second: { hours: "2nd stage duration (hours)", minutes: "2nd stage duration (minutes)" },
  third: { hours: "3rd stage duration (hours)", minutes: "3rd stage duration (minutes)" }
};
const toNum = (v) => {
  if (v === "" || v === null || v === void 0) return 0;
  const n = Number(v);
  return Number.isNaN(n) ? 0 : n;
};
const computeTotalDuration = (formValues) => {
  const totalMinutes = toNum(formValues[SUMMARY_LABOUR_STAGE_KEYS.first.hours]) * 60 + toNum(formValues[SUMMARY_LABOUR_STAGE_KEYS.first.minutes]) + toNum(formValues[SUMMARY_LABOUR_STAGE_KEYS.second.hours]) * 60 + toNum(formValues[SUMMARY_LABOUR_STAGE_KEYS.second.minutes]) + toNum(formValues[SUMMARY_LABOUR_STAGE_KEYS.third.hours]) * 60 + toNum(formValues[SUMMARY_LABOUR_STAGE_KEYS.third.minutes]);
  return { hours: Math.floor(totalMinutes / 60), minutes: totalMinutes % 60 };
};
const padTwo = (n) => n < 10 ? `0${n}` : String(n);
const getUpdateTotalDurationOnChange = () => {
  return (_value, formValues) => {
    const { hours, minutes } = computeTotalDuration(formValues ?? {});
    return {
      "Total labour duration (hours)": padTwo(hours),
      "Total labour duration (minutes)": padTwo(minutes)
    };
  };
};

const updateTotalDurationOnChange = getUpdateTotalDurationOnChange();
const validateNumericOnly = (value, label) => {
  if (value === "" || value === null || value === void 0) return null;
  const s = String(value).trim();
  if (s === "") return null;
  if (/--|\+\+|\.\.|[eE+]|[^\d]/.test(s)) return `${label} must be digits only (no --, +, e or other characters)`;
  return null;
};
const requiredField = (value, label) => {
  const required = StandardValidations.required(value);
  return required ? `${label} is required` : null;
};
const validateMinutes = (value, label) => {
  if (value === "" || value === null || value === void 0) return null;
  const invalidChars = validateNumericOnly(value, label);
  if (invalidChars) return invalidChars;
  const n = Number(value);
  if (Number.isNaN(n)) return `${label} must be a number`;
  if (n < 0) return `${label} must be between 0 and 59`;
  if (n > 59) return `${label} must be between 0 and 59`;
  return null;
};
const validateMinutesWithMax = (value, label, max) => {
  if (value === "" || value === null || value === void 0) return null;
  const invalidChars = validateNumericOnly(value, label);
  if (invalidChars) return invalidChars;
  const n = Number(value);
  if (Number.isNaN(n)) return `${label} must be a number`;
  if (n < 0 || n > max) return `${label} must be between 0 and ${max}`;
  return null;
};
const validateHours = (value, label, maxHours = 24) => {
  if (value === "" || value === null || value === void 0) return null;
  const invalidChars = validateNumericOnly(value, label);
  if (invalidChars) return invalidChars;
  const n = Number(value);
  if (Number.isNaN(n)) return `${label} must be a number`;
  if (n < 0) return `${label} cannot be negative`;
  if (n > maxHours) {
    if (maxHours === 0) return `${label} must be 0`;
    return `${label} cannot be greater than ${maxHours}`;
  }
  return null;
};
const useSummaryOfLabourForm = () => {
  const summaryOfLabourFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Was a partograph used?",
        name: "Was a partograph used",
        type: "inline",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { s: "12" },
        validation: (value) => requiredField(value, "Was a partograph used")
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "Heading",
        name: "1st stage — from onset of regular uterine contractions until cervix fully dilated",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "1st stage duration (hours)",
        header: "1st stage duration (hours)",
        icon: icons.time,
        type: "number",
        obsValueType: "value_numeric",
        placeholder: "Hours",
        grid: { s: "12", md: "6" },
        validation: (value) => validateHours(value, "1st stage (hours)"),
        onChange: updateTotalDurationOnChange
      },
      {
        componentType: "inputField",
        header: "1st stage (minutes)",
        name: "1st stage duration (minutes)",
        icon: icons.time,
        type: "number",
        obsValueType: "value_numeric",
        placeholder: "Minutes (0–59)",
        grid: { s: "12", md: "6" },
        validation: (value) => validateMinutes(value, "1st stage (minutes)"),
        onChange: updateTotalDurationOnChange
      },
      {
        componentType: "Heading",
        name: "2nd stage — from fully dilated until baby was born",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "2nd stage (minutes)",
        name: "2nd stage duration (minutes)",
        icon: icons.time,
        type: "number",
        obsValueType: "value_numeric",
        placeholder: "Minutes (0–59)",
        grid: { s: "12", md: "6" },
        validation: (value) => validateMinutes(value, "2nd stage (minutes)"),
        onChange: updateTotalDurationOnChange
      },
      {
        componentType: "Heading",
        name: "3rd stage — from birth of baby until placenta delivered",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "3rd stage (minutes)",
        name: "3rd stage duration (minutes)",
        icon: icons.time,
        type: "number",
        obsValueType: "value_numeric",
        placeholder: "Minutes (0–30)",
        grid: { s: "12", md: "6" },
        validation: (value) => validateMinutesWithMax(value, "3rd stage (minutes)", 30),
        onChange: updateTotalDurationOnChange
      },
      {
        componentType: "Heading",
        name: "Total — from onset of regular uterine contractions until placenta delivered",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Total duration (hours)",
        name: "Total labour duration (hours)",
        icon: icons.time,
        type: "number",
        obsValueType: "value_numeric",
        placeholder: "Hours",
        grid: { s: "12", md: "6" },
        validation: (value) => validateHours(value, "Total duration (hours)"),
        disabled: true
      },
      {
        componentType: "inputField",
        header: "Total duration (minutes)",
        name: "Total labour duration (minutes)",
        icon: icons.time,
        type: "number",
        obsValueType: "value_numeric",
        placeholder: "Minutes (0–59)",
        grid: { s: "12", md: "6" },
        validation: (value) => validateMinutes(value, "Total duration (minutes)"),
        disabled: true
      }
    ];
  });
  return {
    summaryOfLabourFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SummaryOfLabour",
  setup(__props, { expose: __expose }) {
    const { formRef, validateForm, getFormValues, resetForm } = useExposeFromStandardForm();
    const { summaryOfLabourFormSection } = useSummaryOfLabourForm();
    const summaryOfLabourForm = computed(() => summaryOfLabourFormSection.value);
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
      const dataKeys = Object.keys(formValues).filter((k) => k !== "obsValueType");
      if (dataKeys.length === 0) {
        toastWarning("Please fill in at least one field to save");
        return false;
      }
      try {
        const patient = await ObservationService.buildSaveObs(formValues, EncounterTypeId.LABOUR_ASSESSMENT);
        if (!patient) {
          toastWarning("No observations could be saved. Please try again.");
          return false;
        }
        toastSuccess("Summary of labour saved successfully");
        return true;
      } catch (error) {
        console.error("Error saving summary of labour:", error);
        toastWarning(error?.message || "Failed to save summary of labour");
        return false;
      }
    };
    __expose({
      onSubmit,
      validateForm,
      getFormValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "custom-card" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Summary of Labour",
                  formData: summaryOfLabourForm.value,
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

const SummaryOfLabour = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4c230e7d"]]);

const _hoisted_1 = { class: "summary-page-container" };
const _hoisted_2 = { class: "back-profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "summaryOfLabour",
  setup(__props) {
    const router = useRouter();
    const summaryOfLabourRef = ref(null);
    const isSaving = ref(false);
    const navigateToHome = () => {
      router.push("/labour/home");
    };
    const saveData = async () => {
      if (isSaving.value) return;
      isSaving.value = true;
      try {
        const hasSaved = await summaryOfLabourRef.value?.onSubmit?.();
        if (hasSaved) {
          navigateToHome();
        }
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
                createVNode(SummaryOfLabour, {
                  ref_key: "summaryOfLabourRef",
                  ref: summaryOfLabourRef
                }, null, 512)
              ]),
              createVNode(BasicFooter, {
                name: isSaving.value ? "Saving..." : "Finish and Save",
                onFinishBtn: _cache[0] || (_cache[0] = ($event) => saveData())
              }, null, 8, ["name"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const summaryOfLabour = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c98ef2a7"]]);

export { summaryOfLabour as default };
