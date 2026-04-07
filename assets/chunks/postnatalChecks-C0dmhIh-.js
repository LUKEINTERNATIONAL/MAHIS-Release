import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bM as IonCard, a3 as onMounted, w as watch, C as createBaseVNode, J as Fragment, S as renderList, aJ as IonAccordionGroup, aq as IonItem, a7 as IonLabel, a5 as createTextVNode, cG as mergeProps, N as IonButton, a8 as withModifiers, H as createCommentVNode, aI as IonAccordion, L as IonIcon, cH as arrowForward, aM as useRouter, aH as IonContent, b_ as chevronBackOutline, T as withDirectives, U as vShow, bw as IonPage } from './vendor-DEu2hKw1.js';
import { bK as useVitals, z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, n as icons, y as StandardValidations, bO as iconBloodPressure, _ as _export_sfc, u as useDemographicsStore, t as toastWarning, b6 as RelationshipService, T as Toolbar, F as DynamicButton } from '../index-DUhTLRn9.js';
import { D as DemographicBar } from './DemographicBar-Djm_VVGG.js';
import { _ as _sfc_main$l, u as useFormWizard } from './useFormWizard-CwtBF4Xd.js';
import { s as storeToRefs } from './pinia-3T0xmcrW.js';
import { B as BabyCard } from './BabyCard-C3UTtwnX.js';

const FIELD_SYSTOLIC_BP = "Systolic blood pressure";
const FIELD_DIASTOLIC_BP = "Diastolic blood pressure";
const FIELD_SYSTOLIC_BP_SECOND_READING = "Systolic blood pressure (2nd reading)";
const FIELD_DIASTOLIC_BP_SECOND_READING = "Diastolic blood pressure (2nd reading)";
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "immidiateMotherCheck",
  setup(__props, { expose: __expose }) {
    const NORMAL_BP_RANGE = {
      systolicMin: 100,
      systolicMax: 130,
      diastolicMin: 60,
      diastolicMax: 90
    };
    const BP_OBS_VALUE_TYPES = {
      [FIELD_SYSTOLIC_BP]: "value_numeric",
      [FIELD_DIASTOLIC_BP]: "value_numeric",
      [FIELD_SYSTOLIC_BP_SECOND_READING]: "value_numeric",
      [FIELD_DIASTOLIC_BP_SECOND_READING]: "value_numeric"
    };
    const formKey = ref(0);
    const formRef = ref(null);
    const { getBloodPressureStatus } = useVitals();
    function getBloodPressureFromForm(values) {
      return {
        systolic: values[FIELD_SYSTOLIC_BP],
        diastolic: values[FIELD_DIASTOLIC_BP]
      };
    }
    function getSecondBloodPressureFromForm(values) {
      return {
        systolic: values[FIELD_SYSTOLIC_BP_SECOND_READING],
        diastolic: values[FIELD_DIASTOLIC_BP_SECOND_READING]
      };
    }
    function areBloodPressureValuesValid(systolic, diastolic) {
      return StandardValidations.vitalsSystolic(systolic) == null && StandardValidations.vitalsDiastolic(diastolic) == null;
    }
    function isBloodPressureFilledForFields(systolic, diastolic) {
      const hasValues = systolic != null && systolic !== "" && diastolic != null && diastolic !== "";
      return hasValues && areBloodPressureValuesValid(systolic, diastolic);
    }
    function isBloodPressureOutsideNormalRange(systolic, diastolic) {
      const systolicNum = Number(systolic);
      const diastolicNum = Number(diastolic);
      if (!Number.isFinite(systolicNum) || !Number.isFinite(diastolicNum)) return false;
      if (!areBloodPressureValuesValid(systolic, diastolic)) return false;
      const { systolicMin, systolicMax, diastolicMin, diastolicMax } = NORMAL_BP_RANGE;
      return systolicNum < systolicMin || systolicNum > systolicMax || diastolicNum < diastolicMin || diastolicNum > diastolicMax;
    }
    function shouldShowSecondReading(values) {
      const first = getBloodPressureFromForm(values);
      if (!isBloodPressureFilledForFields(first.systolic, first.diastolic)) return false;
      return isBloodPressureOutsideNormalRange(first.systolic, first.diastolic);
    }
    function getBloodPressureTriggerAlertConfig(systolic, diastolic) {
      const status = getBloodPressureStatus(Number(systolic), Number(diastolic));
      if (!status?.colors?.length || !status?.value) return null;
      const [backgroundColor, textColor] = status.colors;
      const isLow = status.value.includes("Low");
      const isHigh = status.value.includes("High");
      const triggerLabel = isLow ? "Hypotension trigger" : isHigh ? "Hypertension trigger" : status.value;
      return {
        icon: iconBloodPressure(status.colors),
        textColor,
        index: `${systolic}/${diastolic} mmHg`,
        backgroundColor,
        value: triggerLabel
      };
    }
    const formConfig = computed(() => {
      return [
        {
          header: FIELD_SYSTOLIC_BP,
          name: FIELD_SYSTOLIC_BP,
          label: "Systolic pressure (1st reading)",
          componentType: "inputField",
          icon: icons.systolicPressure,
          suffix: "mmHg",
          obsValueType: "value_numeric",
          validation: (v) => StandardValidations.vitalsSystolic(v),
          grid: { s: "6" }
        },
        {
          header: FIELD_DIASTOLIC_BP,
          name: FIELD_DIASTOLIC_BP,
          label: "Diastolic pressure (1st reading)",
          componentType: "inputField",
          icon: icons.diastolicPressure,
          suffix: "mmHg",
          obsValueType: "value_numeric",
          validation: (v) => StandardValidations.vitalsDiastolic(v),
          grid: { s: "6" }
        },
        {
          header: `${FIELD_SYSTOLIC_BP} (2nd reading)`,
          name: FIELD_SYSTOLIC_BP_SECOND_READING,
          label: "Systolic pressure (last/2nd reading)",
          componentType: "inputField",
          icon: icons.systolicPressure,
          suffix: "mmHg",
          obsValueType: "value_numeric",
          validation: (v) => StandardValidations.vitalsSystolic(v),
          grid: { s: "6" },
          condition: (formValues) => shouldShowSecondReading(formValues)
        },
        {
          header: `${FIELD_DIASTOLIC_BP} (2nd reading)`,
          name: FIELD_DIASTOLIC_BP_SECOND_READING,
          label: "Diastolic pressure (last/2nd reading)",
          componentType: "inputField",
          icon: icons.diastolicPressure,
          suffix: "mmHg",
          obsValueType: "value_numeric",
          validation: (v) => StandardValidations.vitalsDiastolic(v),
          grid: { s: "6" },
          condition: (formValues) => shouldShowSecondReading(formValues)
        },
        {
          componentType: "Alert",
          grid: { xs: "12" },
          condition: async (formValues) => {
            const second = getSecondBloodPressureFromForm(formValues);
            if (isBloodPressureFilledForFields(second.systolic, second.diastolic)) {
              if (!isBloodPressureOutsideNormalRange(second.systolic, second.diastolic)) return null;
              return getBloodPressureTriggerAlertConfig(second.systolic, second.diastolic);
            }
            const first = getBloodPressureFromForm(formValues);
            if (!isBloodPressureFilledForFields(first.systolic, first.diastolic)) return null;
            if (!isBloodPressureOutsideNormalRange(first.systolic, first.diastolic)) return null;
            return getBloodPressureTriggerAlertConfig(first.systolic, first.diastolic);
          }
        },
        { componentType: "Dashes" },
        {
          header: "Pulse Rate",
          name: "Pulse",
          label: "Pulse",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.pulse,
          suffix: "bpm",
          validation: (v) => StandardValidations.vitalsPulseRate(v),
          grid: { s: "6" }
        }
      ];
    });
    async function getValues() {
      const values = await formRef.value?.getFormValues();
      if (!values) return values;
      return {
        ...values,
        obsValueType: {
          ...values.obsValueType,
          ...BP_OBS_VALUE_TYPES
        }
      };
    }
    function resetForm() {
      formKey.value += 1;
    }
    function toNumberOrNaN(v) {
      return v === void 0 || v === null || v === "" ? NaN : Number(v);
    }
    function normalizeImmediateMotherPayload(values) {
      const normalized = { ...values || {} };
      const systolicSecond = normalized?.[FIELD_SYSTOLIC_BP_SECOND_READING];
      const diastolicSecond = normalized?.[FIELD_DIASTOLIC_BP_SECOND_READING];
      if (systolicSecond !== void 0 && systolicSecond !== null && systolicSecond !== "") {
        normalized[FIELD_SYSTOLIC_BP] = systolicSecond;
      }
      if (diastolicSecond !== void 0 && diastolicSecond !== null && diastolicSecond !== "") {
        normalized[FIELD_DIASTOLIC_BP] = diastolicSecond;
      }
      delete normalized[FIELD_SYSTOLIC_BP_SECOND_READING];
      delete normalized[FIELD_DIASTOLIC_BP_SECOND_READING];
      if (normalized.obsValueType) {
        delete normalized.obsValueType[FIELD_SYSTOLIC_BP_SECOND_READING];
        delete normalized.obsValueType[FIELD_DIASTOLIC_BP_SECOND_READING];
      }
      return normalized;
    }
    function buildVitalsPayloadFromImmediateMother(values) {
      const vitalsPayload = {};
      const obsValueType = {};
      const systolic = toNumberOrNaN(values?.[FIELD_SYSTOLIC_BP]);
      const diastolic = toNumberOrNaN(values?.[FIELD_DIASTOLIC_BP]);
      const pulse = toNumberOrNaN(values?.Pulse);
      if (Number.isFinite(systolic)) {
        vitalsPayload[FIELD_SYSTOLIC_BP] = systolic;
        obsValueType[FIELD_SYSTOLIC_BP] = "value_numeric";
      }
      if (Number.isFinite(diastolic)) {
        vitalsPayload[FIELD_DIASTOLIC_BP] = diastolic;
        obsValueType[FIELD_DIASTOLIC_BP] = "value_numeric";
      }
      if (Number.isFinite(pulse)) {
        vitalsPayload.Pulse = pulse;
        obsValueType.Pulse = "value_numeric";
      }
      return Object.keys(vitalsPayload).length > 0 ? { ...vitalsPayload, obsValueType } : null;
    }
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      const normalized = normalizeImmediateMotherPayload(data);
      const saved = await ObservationService.buildSaveObs(normalized, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_MOTHER);
      const vitalsPayload = buildVitalsPayloadFromImmediateMother(normalized);
      if (vitalsPayload) {
        await ObservationService.buildSaveObs(vitalsPayload, EncounterTypeId.VITALS);
      }
      if (saved) {
        toastSuccess("Immediate postnatal check for mother saved successfully");
        resetForm();
      }
    }
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getValues,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Immediate postnatal check for mother",
        formData: formConfig.value,
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
        name: "Systolic blood pressure",
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
        name: "Diastolic blood pressure",
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
        header: "Pulse Rate",
        name: "Pulse",
        label: "Pulse ",
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
        name: "Temperature (c)",
        label: "Temperature",
        componentType: "inputField",
        obsValueType: "value_text",
        icon: icons.temprature,
        suffix: "°C",
        validation: (value) => {
          if (value === "") return null;
          return StandardValidations.vitalsTemperature(value);
        },
        grid: { s: "6" }
      },
      {
        header: "Respiratory Rate",
        name: "Respiratory Rate",
        label: "Respiratory",
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
        componentType: "slot",
        slotName: "uterusSlot",
        grid: { s: "6" }
      },
      {
        header: "Uterus",
        name: "Uterus",
        label: "Uterus",
        type: "inline",
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
        componentType: "radioButtonField",
        header: "Lochia?",
        name: "Lochia",
        label: "Lochia",
        type: "inline",
        obsValueType: "value_text",
        grid: { s: "6" },
        options: [
          { label: "Mild", value: "Mild" },
          { label: "Moderate", value: "Moderate" },
          { label: "Heavy", value: "Heavy" }
        ]
      },
      {
        header: "Urine passed?",
        name: "Has passed urine",
        label: "Urine passed?",
        type: "inline",
        componentType: "radioButtonField",
        obsValueType: "value_coded",
        grid: { s: "6" },
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
        componentType: "timeInputField",
        header: "Time urine passed?",
        name: "time urine passed",
        obsValueType: "value_datetime",
        icon: icons.time,
        showNowButton: true,
        placeholder: "Pick time",
        grid: { s: "6" },
        validation: (value) => {
          return StandardValidations.required(value);
        },
        condition: (allFormValues) => allFormValues["Has passed urine"] === "Yes"
      },
      {
        header: "Amount of Urine",
        name: "amount of Urine",
        label: "Amount of urine (ml)",
        componentType: "inputField",
        unit: "ml",
        type: "number",
        obsValueType: "value_text",
        condition: (allFormValues) => allFormValues["Has passed urine"] === "Yes",
        validation: (value) => {
          return StandardValidations.required(value);
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
    async function onSubmit() {
      const data = await formRef.value?.getFormValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      const saved = await ObservationService.buildSaveObs(data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_MOTHER);
      const vitalsKeys = ["Systolic blood pressure", "Diastolic blood pressure", "Pulse", "Temperature (c)", "Respiratory Rate"];
      const vitalsPayload = {};
      const obsValueType = {};
      for (const key of vitalsKeys) {
        const raw = data?.[key];
        if (raw === void 0 || raw === null || raw === "") continue;
        const n = Number(raw);
        if (!Number.isFinite(n)) continue;
        vitalsPayload[key] = n;
        obsValueType[key] = "value_numeric";
      }
      if (Object.keys(vitalsPayload).length > 0) {
        await ObservationService.buildSaveObs(
          {
            ...vitalsPayload,
            obsValueType
          },
          EncounterTypeId.VITALS
        );
      }
      if (saved) {
        toastSuccess("After 1 hour check for mother saved successfully");
        resetForm();
      }
    }
    __expose({
      onSubmit,
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
    const componentRefs = [
      { ref: immediateMotherRef },
      { ref: afterHourRef }
    ];
    async function onSubmit() {
      for (const { ref: componentRef } of componentRefs) {
        if (componentRef.value && typeof componentRef.value.onSubmit === "function") {
          try {
            await componentRef.value.onSubmit();
          } catch (error) {
            console.error("Error saving postnatal check:", error);
          }
        }
      }
    }
    function resetForms() {
      immediateMotherRef.value?.resetForm();
      afterHourRef.value?.resetForm();
    }
    __expose({
      onSubmit,
      resetForms
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
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
      ]);
    };
  }
});

const ForMother = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-fdfdd077"]]);

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "immidiateChildCheck",
  props: {
    childId: {},
    childRecord: {},
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
        obsValueType: "value_numeric",
        icon: icons.respiratory,
        validation: (value) => StandardValidations.vitalsRespiratoryRate(value),
        suffix: "BMP",
        grid: { s: "5" }
      },
      {
        header: "Temperature ",
        name: "Temperature (c)",
        label: "Temperature",
        componentType: "inputField",
        obsValueType: "value_numeric",
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
        header: "Breast feeding in the first 30 minutes of birth?",
        name: "Breast feeding in the first hour of birth",
        label: "Breast feeding in the first 30 minutes of birth?",
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
    function toNumberOrNaN(v) {
      return v === void 0 || v === null || v === "" ? NaN : Number(v);
    }
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      const childRecord = props.childRecord;
      if (!childRecord) return;
      const vitalsNumericKeys = ["Temperature (c)", "Respiration rate", "Heart rate"];
      const vitalsPayload = {};
      const obsValueType = {};
      for (const key of vitalsNumericKeys) {
        const n = toNumberOrNaN(data?.[key]);
        if (!Number.isFinite(n)) continue;
        vitalsPayload[key] = n;
        obsValueType[key] = "value_numeric";
      }
      if (Object.keys(vitalsPayload).length > 0) {
        await ObservationService.buildSaveRelativeObs(
          childRecord,
          {
            ...vitalsPayload,
            obsValueType
          },
          EncounterTypeId.VITALS
        );
      }
      await ObservationService.buildSaveRelativeObs(childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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

const indentedPositiveFlowOffset = "0";
const FIELD_MOTHER_HIV_STATUS = "Mother HIV Status";
const FIELD_MOTHER_HIV_TEST_RESULTS = "Mother HIV Test results";
const FIELD_HIV_TEST_DATE = "HIV test date";
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "hivStatusChild",
  props: {
    childId: {},
    childRecord: {},
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
    const indentedPositiveFlowGrid = { s: "5" };
    const isNegativeWithPositiveTest = (allFormValues) => {
      const maternalStatus = String(allFormValues?.["Mother HIV Status"] || "").toUpperCase();
      const maternalTestResult = String(allFormValues?.["Mother HIV Test results"] || "").toUpperCase();
      return maternalStatus === "NEGATIVE" && maternalTestResult === "POSITIVE";
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
        noMargin: true,
        options: [
          { label: "Positive", value: "Positive" },
          { label: "Negative", value: "Negative" },
          { label: "Unknown", value: "Unknown" }
        ],
        onChange: (value, allFormValues) => {
          if (value === "Negative" || value === "Unknown") {
            return {
              [FIELD_MOTHER_HIV_TEST_RESULTS]: "",
              [FIELD_HIV_TEST_DATE]: "",
              baby_art_prophylaxis_given: "",
              baby_art_prophylaxis_regimen: ""
            };
          } else if (value === "Positive") {
            return {
              "Pre-pregnant ART": "",
              "During pregnant ART": "",
              "Last viral load test date": "",
              baby_art_prophylaxis_given: "",
              baby_art_prophylaxis_regimen: ""
            };
          }
          if (!isNegativeWithPositiveTest(allFormValues)) {
            return {
              baby_art_prophylaxis_given: "",
              baby_art_prophylaxis_regimen: ""
            };
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
        condition: (allFormValues) => allFormValues[FIELD_MOTHER_HIV_STATUS] === "Negative" || allFormValues[FIELD_MOTHER_HIV_STATUS] === "Unknown",
        onChange: (value, allFormValues) => {
          if (value) {
            const nextValues = { [FIELD_HIV_TEST_DATE]: "" };
            if (!isNegativeWithPositiveTest(allFormValues)) {
              nextValues.baby_art_prophylaxis_given = "";
              nextValues.baby_art_prophylaxis_regimen = "";
            }
            return nextValues;
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
        condition: (allFormValues) => !!allFormValues[FIELD_MOTHER_HIV_TEST_RESULTS]
      },
      {
        header: "Pre-pregnant ART",
        name: "Pre-pregnant ART",
        label: "Pre-pregnant ART",
        type: "standard",
        obsValueType: "value_coded",
        componentType: "radioButtonField",
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
        grid: indentedPositiveFlowGrid,
        offset: indentedPositiveFlowOffset,
        noMargin: true,
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
        grid: indentedPositiveFlowGrid,
        offset: indentedPositiveFlowOffset,
        noMargin: true,
        condition: (allFormValues) => allFormValues["During pregnant ART"] === "Yes",
        componentType: "inputField"
      },
      {
        header: "Last viral load test date",
        name: "Last viral load test date",
        label: "Last viral load test date",
        obsValueType: "value_date",
        componentType: "dateInputField",
        icon: icons.calendar,
        grid: indentedPositiveFlowGrid,
        offset: indentedPositiveFlowOffset,
        noMargin: true,
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
        grid: indentedPositiveFlowGrid,
        offset: indentedPositiveFlowOffset,
        noMargin: true,
        suffix: "copies/ml",
        componentType: "inputField",
        condition: (allFormValues) => !!allFormValues["Last viral load test date"]
      },
      {
        header: "Was ART prophylaxis given to the baby?",
        name: "baby_art_prophylaxis_given",
        label: "Was ART prophylaxis given to the baby?",
        componentType: "switchField",
        grid: indentedPositiveFlowGrid,
        offset: indentedPositiveFlowOffset,
        noMargin: true,
        trueValue: true,
        falseValue: false,
        value: "",
        condition: (allFormValues) => isNegativeWithPositiveTest(allFormValues),
        validation: (value, allFormValues) => {
          if (!isNegativeWithPositiveTest(allFormValues)) return null;
          if (value === true || value === false) return null;
          return "Was ART prophylaxis given to the baby? is required";
        },
        onChange: (value, allFormValues) => {
          if (value === false || !isNegativeWithPositiveTest(allFormValues)) {
            return { baby_art_prophylaxis_regimen: "" };
          }
        }
      },
      {
        header: "Which regimen?",
        name: "baby_art_prophylaxis_regimen",
        label: "Which regimen?",
        type: "standard",
        componentType: "radioButtonField",
        grid: indentedPositiveFlowGrid,
        offset: indentedPositiveFlowOffset,
        options: [
          { label: "NVP", value: "NVP" },
          { label: "AZT/3TC/NVP", value: "AZT_3TC_NVP" }
        ],
        condition: (allFormValues) => allFormValues["baby_art_prophylaxis_given"] === true,
        validation: (value, allFormValues) => {
          if (allFormValues["baby_art_prophylaxis_given"] !== true) return null;
          return StandardValidations.required(value);
        }
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
    const validateInitialHeartRate = (value) => {
      if (value === null || value === void 0 || value === "") return "Heart rate is required";
      const numeric = Number(value);
      if (Number.isNaN(numeric)) return "Heart rate must be a valid number";
      if (numeric < 50 || numeric > 200) return "Enter valid heart rate (50-200)";
      return null;
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
        name: "Respiration rate",
        label: "Respiration",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_text",
        validation: (value) => StandardValidations.vitalsRespiratoryRate(value),
        grid: { s: "6" }
      },
      {
        header: "Heart rate",
        name: "Heart rate",
        label: "Heart rate",
        type: "standard",
        validation: (value) => validateInitialHeartRate(value),
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        header: "Temperature",
        name: "Temperature (c)",
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
    function toNumberOrNaN(v) {
      return v === void 0 || v === null || v === "" ? NaN : Number(v);
    }
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      const childRecord = props.childRecord;
      if (!childRecord) return;
      const vitalsNumericKeys = ["Temperature (c)", "Respiration rate", "Heart rate"];
      const vitalsPayload = {};
      const obsValueType = {};
      for (const key of vitalsNumericKeys) {
        const n = toNumberOrNaN(data?.[key]);
        if (!Number.isFinite(n)) continue;
        vitalsPayload[key] = n;
        obsValueType[key] = "value_numeric";
      }
      if (Object.keys(vitalsPayload).length > 0) {
        await ObservationService.buildSaveRelativeObs(
          childRecord,
          {
            ...vitalsPayload,
            obsValueType
          },
          EncounterTypeId.VITALS
        );
      }
      await ObservationService.buildSaveRelativeObs(childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
    const validateHeadCircumference = (value) => {
      const required = StandardValidations.required(value);
      if (required) return "Head Circumference is required";
      const numericValue = Number(value);
      if (Number.isNaN(numericValue)) return "Head Circumference must be a valid number";
      if (numericValue < 34.5 || numericValue > 37) return "Head Circumference must be between 34.5 and 37.0 cm";
      return null;
    };
    const baseFormConfig = [
      {
        header: "Head Circumference",
        name: "Head Circumference",
        label: "Head Circumference",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_text",
        validation: (value) => validateHeadCircumference(value),
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
        header: "Lumps",
        name: "Lump",
        label: "Lumps",
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
        name: "Discharge",
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
        name: "ears growth",
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
        name: "ears deformities",
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
        if (field.name === "ears_deformities" && props.initialData?.["Deformities"] !== void 0) {
          return { ...field, value: props.initialData["Deformities"] };
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
        name: "nose growth",
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
        name: "nose deformities",
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
        value: props.initialData?.[field.name] ?? (field.name === "nose_deformities" ? props.initialData?.["Deformities"] ?? "" : "")
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
        name: "lips cyanosis",
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
        header: "Tongue Tie",
        name: "Tongue",
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
    const validateRespiratoryRate = (value) => {
      const requiredError = StandardValidations.required(value);
      if (requiredError) return "Respiratory rate is required.";
      const raw = String(value).trim();
      const wholeNumberError = StandardValidations.isWholeNumber(raw);
      if (wholeNumberError) return "Respiratory rate must be a number.";
      const numeric = Number(raw);
      if (numeric < 5 || numeric > 80) return "Respiratory rate must be between 5 and 80 breaths/min.";
      return null;
    };
    const baseChestConfig = [
      {
        header: "Chest-in drawing",
        name: "Chest in-drawing",
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
        header: "Check respiratory rate",
        name: "Chest assesment Respiratory rate",
        label: "Check respiratory rate",
        type: "standard",
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { s: "6" },
        validation: (value) => validateRespiratoryRate(value)
      },
      {
        header: "Respiratory signs",
        name: "Respiratory signs",
        label: "Respiratory signs",
        type: "standard",
        componentType: "inputField",
        icon: icons.editPen,
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
    childRecord: {},
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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
  __name: "childAbdomentAssesment",
  props: {
    childId: {},
    childRecord: {},
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
    const baseAbdomenConfig = [
      {
        header: "Check if umbilicus is red",
        name: "abdomen_umbilicus_red",
        label: "Check if umbilicus is red",
        type: "standard",
        componentType: "radioButtonField",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: (value) => StandardValidations.required(value)
      },
      {
        header: "Bleeding from cord",
        name: "abdomen_bleeding_from_cord",
        label: "Bleeding from cord",
        type: "standard",
        componentType: "radioButtonField",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: (value) => StandardValidations.required(value)
      },
      {
        header: "Abdominal wall defects (omphalocele, gastroschisis)",
        name: "abdomen_abdominal_wall_defects",
        label: "Abdominal wall defects (omphalocele, gastroschisis)",
        type: "standard",
        componentType: "radioButtonField",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: (value) => StandardValidations.required(value)
      },
      {
        header: "Organomegaly",
        name: "abdomen_organomegaly",
        label: "Organomegaly",
        type: "standard",
        componentType: "radioButtonField",
        grid: { s: "6" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: (value) => StandardValidations.required(value)
      },
      {
        header: "Number of blood vessels (2 arteries, 1 vein)",
        name: "abdomen_number_of_blood_vessels",
        label: "Number of blood vessels (2 arteries, 1 vein)",
        type: "standard",
        componentType: "radioButtonField",
        grid: { s: "6" },
        options: [
          { label: "2 arteries, 1 vein", value: "TWO_ARTERIES_ONE_VEIN" },
          { label: "Other", value: "OTHER" }
        ],
        validation: (value) => StandardValidations.required(value),
        onChange: (value) => {
          if (value !== "OTHER") {
            return { abdomen_number_of_blood_vessels_other: "" };
          }
        }
      },
      {
        header: "Specify number of blood vessels",
        name: "abdomen_number_of_blood_vessels_other",
        label: "Specify number of blood vessels",
        type: "standard",
        componentType: "inputField",
        grid: { s: "6" },
        condition: (allFormValues) => allFormValues["abdomen_number_of_blood_vessels"] === "OTHER",
        validation: (value, allFormValues) => {
          if (allFormValues["abdomen_number_of_blood_vessels"] !== "OTHER") return null;
          if (value > 10) return "Number of blood vessels must be less than 10";
          if (value < 1) return "Number of blood vessels must be greater than 1";
          return StandardValidations.required(value);
        }
      }
    ];
    const formDataWithValues = computed(() => {
      return baseAbdomenConfig.map((field) => ({
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Abdomen",
        formData: formDataWithValues.value,
        ref_key: "formRef",
        ref: formRef,
        "onUpdate:modelValue": emitUpdate
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "childGenAssesment",
  props: {
    childId: {},
    childRecord: {},
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "childExtrAssesment",
  props: {
    childId: {},
    childRecord: {},
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
        header: "Erb's palsy (Bronchial nerve injury)",
        name: "Erbs palsy",
        label: "Erb's palsy (Bronchial nerve injury)",
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChildBackAssesment",
  props: {
    childId: {},
    childRecord: {},
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChildReflexAssesment",
  props: {
    childId: {},
    childRecord: {},
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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

const LENGTH_NORMAL_MIN = 49;
const LENGTH_NORMAL_MAX = 50;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChildLenAssesment",
  props: {
    childId: {},
    childRecord: {},
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
        validation: (value) => {
          if (value === void 0 || value === null || value === "") {
            return "Value is required";
          }
          if (isNaN(Number(value))) {
            return "Value must be a number";
          }
          const num = Number(value);
          if (num < 35 || num > 60) {
            return "Value must be between 35 and 60 cm";
          }
          return null;
        }
      },
      {
        componentType: "Alert",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const raw = allFormValues?.Length;
          if (raw === void 0 || raw === null || raw === "") return null;
          const num = Number(raw);
          if (Number.isNaN(num)) return null;
          if (num >= LENGTH_NORMAL_MIN && num <= LENGTH_NORMAL_MAX) {
            return {
              value: "Normal ranges (49-50 cms)",
              backgroundColor: "#D1FAE5",
              textColor: "#065F46"
            };
          }
          return {
            value: "Abnormal ranges (<49 or >50 cms)",
            backgroundColor: "#FEE2E2",
            textColor: "#991B1B"
          };
        }
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
    async function onSubmit() {
      const data = await getValues();
      if (!data || Object.keys(data).filter((k) => k !== "obsValueType").length === 0) return;
      if (!props.childRecord) return;
      await ObservationService.buildSaveRelativeObs(props.childRecord, data, EncounterTypeId.IMMEDIATE_POSTNATAL_CHECKS_CHILD);
    }
    __expose({
      validateForm,
      getValues,
      resetForm,
      onSubmit
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

const _hoisted_1$1 = { class: "page-container" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3 = { class: "child-context-container" };
const _hoisted_4 = { class: "baby-cards-container" };
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
const _hoisted_21 = { slot: "content" };
const _hoisted_22 = { class: "nav-buttons" };
const _hoisted_23 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_24 = {
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
    const childAbdomentAssesment = ref(null);
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
    const demographicsStore = useDemographicsStore();
    const babies = ref([]);
    const childByMrn = ref(/* @__PURE__ */ new Map());
    const selectedBabyMrn = ref(null);
    const selectedChildPatientRecord = ref(null);
    async function loadFullChildPatientRecord(child) {
      if (!child) {
        selectedChildPatientRecord.value = null;
        return;
      }
      const patientId = child.patient_id ?? child.person_id ?? child.ID;
      if (patientId == null) {
        selectedChildPatientRecord.value = child;
        return;
      }
      try {
        const fullRecord = await demographicsStore.getPatientData(patientId);
        selectedChildPatientRecord.value = fullRecord ?? child;
      } catch (e) {
        selectedChildPatientRecord.value = child;
      }
    }
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString();
    };
    const mrnCacheByPatientId = /* @__PURE__ */ new Map();
    async function resolveMrnByPatientId(patientId) {
      if (patientId == null) return;
      const key = String(patientId);
      const cached = mrnCacheByPatientId.get(key);
      if (cached) return cached;
      try {
        const fullRecord = await demographicsStore.getPatientData(patientId);
        const extractedMrn = demographicsStore.getPatientIdentifier(fullRecord, 3);
        const mrn = extractedMrn ? String(extractedMrn) : key;
        mrnCacheByPatientId.set(key, mrn);
        return mrn;
      } catch (e) {
        mrnCacheByPatientId.set(key, key);
        return key;
      }
    }
    async function resolveMrnsForPatientIds(patientIds, concurrency = 6) {
      const unique = Array.from(new Set(patientIds.filter((x) => x != null).map((x) => String(x))));
      const out = /* @__PURE__ */ new Map();
      let idx = 0;
      async function worker() {
        while (idx < unique.length) {
          const current = unique[idx++];
          const mrn = await resolveMrnByPatientId(current);
          if (mrn) out.set(current, mrn);
        }
      }
      await Promise.all(Array.from({ length: Math.min(concurrency, unique.length) }, () => worker()));
      return out;
    }
    async function buildBabyCards(list) {
      if (!Array.isArray(list) || list.length === 0) {
        babies.value = [];
        childByMrn.value = /* @__PURE__ */ new Map();
        selectedBabyMrn.value = null;
        selectedChild.value = null;
        return;
      }
      const patientIds = list.map((c) => c.patient_id ?? c.person_id ?? c.ID);
      const mrnByPatientId = await resolveMrnsForPatientIds(patientIds, 6);
      const byMrn = /* @__PURE__ */ new Map();
      const mapped = list.map((child, index) => {
        const id = Number(child.relationship_id || child.person_id || index + 1);
        const nameParts = [child.given_name, child.middle_name, child.family_name].filter(Boolean);
        const fullName = nameParts.join(" ") || "Baby";
        const genderSource = child.gender || child.personInformation?.gender;
        let sexValue = "";
        if (genderSource) {
          const normalizedGender = String(genderSource).toUpperCase();
          if (normalizedGender === "M" || normalizedGender === "MALE") sexValue = "Male";
          else if (normalizedGender === "F" || normalizedGender === "FEMALE") sexValue = "Female";
          else sexValue = String(genderSource);
        } else {
          sexValue = "-";
        }
        const dobRaw = child.birthdate || child.personInformation?.birthdate;
        const dobDisplay = dobRaw ? formatDate(dobRaw) : "-";
        const patientId = child.patient_id ?? child.person_id ?? child.ID;
        const mrnStr = (patientId != null ? mrnByPatientId.get(String(patientId)) : void 0) || (patientId != null ? String(patientId) : void 0) || String(id);
        byMrn.set(mrnStr, child);
        return {
          id,
          mrn: mrnStr,
          name: fullName,
          sex: sexValue,
          dob: dobDisplay
        };
      });
      const uniqueByMrn = /* @__PURE__ */ new Map();
      for (const b of mapped) uniqueByMrn.set(b.mrn, b);
      babies.value = Array.from(uniqueByMrn.values());
      childByMrn.value = byMrn;
      if (selectedBabyMrn.value && byMrn.has(selectedBabyMrn.value)) {
        selectedChild.value = byMrn.get(selectedBabyMrn.value) ?? null;
        return;
      }
      if (babies.value.length > 0) {
        selectedBabyMrn.value = babies.value[0].mrn;
        selectedChild.value = byMrn.get(babies.value[0].mrn) ?? list[0];
        activeAccordion.value = "immediate";
      } else {
        selectedBabyMrn.value = null;
        selectedChild.value = null;
      }
    }
    onMounted(() => {
      buildBabyCards(childrenList.value);
    });
    const sections = [
      { id: "immediate", label: "Immediate Child Check" },
      { id: "hiv", label: "HIV Status" },
      { id: "initial", label: "Initial Examination" },
      { id: "head_neck", label: "Head & Neck Assessment" },
      { id: "chest_back", label: "Chest & Back Assessment" },
      { id: "abdomen", label: "Abdomen Assessment" },
      { id: "genital", label: "Genital Assessment" },
      { id: "extremities_neuro", label: "Extremities & Reflexes" },
      { id: "length", label: "Length Assessment" }
    ];
    const sectionRefs = {
      immediate: [immidiateChildCheck],
      hiv: [hivStatusChildInstance],
      initial: [childInitialExamination],
      head_neck: [childHeadExam, childEyesAsessment, childEarsAsessment, childNoseAss, childLipAssesment, childNeckAssesment],
      chest_back: [childChestAsessment, childBackAssesment],
      abdomen: [childAbdomentAssesment],
      genital: [childGenAssesment],
      extremities_neuro: [childExtrAssesment, childReflexAssesment],
      length: [childLenAssesment]
    };
    const currentIndex = computed(() => sections.findIndex((s) => s.id === activeAccordion.value));
    const isLast = computed(() => currentIndex.value === sections.length - 1);
    const isFirst = computed(() => currentIndex.value === 0);
    const currentChildIndex = computed(() => childrenList.value.findIndex((child) => child.person_id === selectedChild.value?.person_id));
    const hasNextChild = computed(() => currentChildIndex.value !== -1 && currentChildIndex.value < childrenList.value.length - 1);
    const currentChildAnswers = computed(() => {
      if (!selectedChild.value) return {};
      return allChildrenAnswers.value[selectedChild.value.person_id] || {};
    });
    const childFormProps = computed(() => {
      if (!selectedChild.value) return {};
      return {
        childId: selectedChild.value.person_id,
        // Always prefer a full patient record when saving (same pattern as `postnatalBabyStatus.vue`)
        childRecord: selectedChildPatientRecord.value ?? selectedChild.value,
        initialData: currentChildAnswers.value
      };
    });
    const toggleBaby = (mrn) => {
      const isSame = selectedBabyMrn.value === mrn;
      selectedBabyMrn.value = isSame ? null : mrn;
      selectedChild.value = !isSame ? childByMrn.value.get(mrn) ?? null : null;
      activeAccordion.value = "immediate";
    };
    watch(
      () => selectedChild.value,
      async (child) => {
        await loadFullChildPatientRecord(child);
      },
      { immediate: true }
    );
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
    const validateComponent = async (componentRef) => {
      if (componentRef?.value?.validateForm) {
        const result = await componentRef.value.validateForm();
        return result === null;
      }
      return true;
    };
    const validateRef = async () => {
      const sectionId = activeAccordion.value;
      const refs = sectionRefs[sectionId] ?? [];
      const results = await Promise.all(refs.map(validateComponent));
      return results.every(Boolean);
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
      const getCompValues = async (componentRef) => componentRef.value ? await componentRef.value.getValues() || {} : {};
      const submitIfSupported = async (componentRef) => {
        if (componentRef?.value && typeof componentRef.value.onSubmit === "function") {
          await componentRef.value.onSubmit();
        }
      };
      const sectionId = activeAccordion.value;
      const refs = sectionRefs[sectionId] ?? [];
      const valuesList = await Promise.all(refs.map(getCompValues));
      const dataToSave = valuesList.reduce((acc, values) => ({ ...acc, ...values || {} }), {});
      await Promise.all(refs.map(submitIfSupported));
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
      await saveDataForCurrentStep();
    };
    watch(
      () => childrenList.value,
      (list) => {
        buildBabyCards(list);
      },
      { immediate: true }
    );
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
      childAbdomentAssesment.value?.resetForm();
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
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "section-title" }, "Who are we assessing?", -1)),
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(babies.value, (baby) => {
                return openBlock(), createBlock(BabyCard, {
                  key: baby.mrn,
                  data: baby,
                  isSelected: selectedBabyMrn.value === baby.mrn,
                  onToggle: toggleBaby
                }, null, 8, ["data", "isSelected"]);
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
                        (openBlock(), createBlock(_sfc_main$h, mergeProps({
                          ref_key: "immidiateChildCheck",
                          ref: immidiateChildCheck,
                          key: selectedChild.value.person_id
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
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
                        (openBlock(), createBlock(_sfc_main$g, mergeProps({
                          ref_key: "hivStatusChildInstance",
                          ref: hivStatusChildInstance,
                          key: selectedChild.value.person_id
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
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
                        (openBlock(), createBlock(_sfc_main$f, mergeProps({
                          ref_key: "childInitialExamination",
                          ref: childInitialExamination,
                          key: selectedChild.value.person_id
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
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
                        (openBlock(), createBlock(_sfc_main$e, mergeProps({
                          ref_key: "childHeadExam",
                          ref: childHeadExam,
                          key: `head-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        _cache[14] || (_cache[14] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        (openBlock(), createBlock(_sfc_main$d, mergeProps({
                          ref_key: "childEyesAsessment",
                          ref: childEyesAsessment,
                          key: `eyes-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        _cache[15] || (_cache[15] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        (openBlock(), createBlock(_sfc_main$c, mergeProps({
                          ref_key: "childEarsAsessment",
                          ref: childEarsAsessment,
                          key: `ears-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        _cache[16] || (_cache[16] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        (openBlock(), createBlock(_sfc_main$b, mergeProps({
                          ref_key: "childNoseAss",
                          ref: childNoseAss,
                          key: `nose-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        _cache[17] || (_cache[17] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        (openBlock(), createBlock(_sfc_main$a, mergeProps({
                          ref_key: "childLipAssesment",
                          ref: childLipAssesment,
                          key: `lips-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        _cache[18] || (_cache[18] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        (openBlock(), createBlock(_sfc_main$8, mergeProps({
                          ref_key: "childNeckAssesment",
                          ref: childNeckAssesment,
                          key: `neck-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
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
                        default: withCtx(() => [..._cache[19] || (_cache[19] = [
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
                        (openBlock(), createBlock(_sfc_main$9, mergeProps({
                          ref_key: "childChestAsessment",
                          ref: childChestAsessment,
                          key: `chest-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        _cache[22] || (_cache[22] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        (openBlock(), createBlock(_sfc_main$4, mergeProps({
                          ref_key: "childBackAssesment",
                          ref: childBackAssesment,
                          key: `back-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        createBaseVNode("div", _hoisted_14, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[20] || (_cache[20] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[21] || (_cache[21] = [
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
                value: "abdomen",
                class: "_card"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[23] || (_cache[23] = [
                          createTextVNode("Abdomen Assessment", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$7, mergeProps({
                          ref_key: "childAbdomentAssesment",
                          ref: childAbdomentAssesment,
                          key: `abd-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        createBaseVNode("div", _hoisted_16, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[24] || (_cache[24] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[25] || (_cache[25] = [
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
                        default: withCtx(() => [..._cache[26] || (_cache[26] = [
                          createTextVNode("Genital Assessment", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$6, mergeProps({
                          ref_key: "childGenAssesment",
                          ref: childGenAssesment,
                          key: selectedChild.value.person_id
                        }, childFormProps.value, {
                          gender: selectedChild.value.gender,
                          onFormUpdate: handleFormUpdate
                        }), null, 16, ["gender"])),
                        createBaseVNode("div", _hoisted_18, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[27] || (_cache[27] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[28] || (_cache[28] = [
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
                        default: withCtx(() => [..._cache[29] || (_cache[29] = [
                          createTextVNode("Extremities & Reflexes", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_19, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$5, mergeProps({
                          ref_key: "childExtrAssesment",
                          ref: childExtrAssesment,
                          key: `extr-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        _cache[32] || (_cache[32] = createBaseVNode("hr", { class: "dashed-hr" }, null, -1)),
                        (openBlock(), createBlock(_sfc_main$3, mergeProps({
                          ref_key: "childReflexAssesment",
                          ref: childReflexAssesment,
                          key: `ref-${selectedChild.value.person_id}`
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        createBaseVNode("div", _hoisted_20, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[30] || (_cache[30] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !isLast.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            fill: "outline",
                            onClick: withModifiers(next, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[31] || (_cache[31] = [
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
                        default: withCtx(() => [..._cache[33] || (_cache[33] = [
                          createTextVNode("Length Assessment", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(unref(IonCard), { class: "m-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_sfc_main$2, mergeProps({
                          ref_key: "childLenAssesment",
                          ref: childLenAssesment,
                          key: selectedChild.value.person_id
                        }, childFormProps.value, { onFormUpdate: handleFormUpdate }), null, 16)),
                        createBaseVNode("div", _hoisted_22, [
                          !isFirst.value ? (openBlock(), createBlock(unref(IonButton), {
                            key: 0,
                            fill: "outline",
                            onClick: withModifiers(back, ["stop"])
                          }, {
                            default: withCtx(() => [..._cache[34] || (_cache[34] = [
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
                              _cache[35] || (_cache[35] = createTextVNode(" Next Child ", -1)),
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
                            default: withCtx(() => [..._cache[36] || (_cache[36] = [
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
          }, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", _hoisted_23, [..._cache[37] || (_cache[37] = [
            createBaseVNode("div", { class: "empty-content" }, [
              createBaseVNode("p", null, "Please select a child above to begin the assessment.")
            ], -1)
          ])]))
        ])) : (openBlock(), createElementBlock("div", _hoisted_24, [..._cache[38] || (_cache[38] = [
          createBaseVNode("div", { class: "empty-content" }, [
            createBaseVNode("p", null, "No children were found for the latest delivery."),
            createBaseVNode("p", null, "Please confirm delivery details or register the child.")
          ], -1)
        ])]))
      ]);
    };
  }
});

const ForChild = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-981f866a"]]);

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
