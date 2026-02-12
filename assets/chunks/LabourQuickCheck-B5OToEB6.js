import { y as StandardValidations, n as icons, z as StandardForm, K as ObservationService, H as HisDate, aq as ConceptService, _ as _export_sfc } from '../index-CzDIs3ea.js';
import { c as computed, s as defineComponent, a2 as onMounted, n as nextTick, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, f as ref } from './vendor-DrpjccQs.js';

function useLabourQuickCheckForm() {
  const hasSelected = (value, expected) => Array.isArray(value) && value.includes(expected);
  const dangerSignsOptions = [
    { label: "No danger signs", value: "no danger signs", exclusive: true },
    { label: "Bleeding vaginally", value: "bleeding vaginally" },
    { label: "Central cyanosis", value: "central cyanosis" },
    { label: "Convulsing", value: "convulsing" },
    { label: "Fever", value: "fever" },
    { label: "Severe headache", value: "severe headache" },
    { label: "Severe vomiting", value: "severe vomiting" },
    { label: "Epigastric pains", value: "epigastric pains" },
    { label: "Severe abdominal pain", value: "severe abdominal pain" },
    { label: "Unconscious", value: "unconscious" },
    { label: "Visual disturbance", value: "visual disturbance" },
    { label: "Diminished fetal movements", value: "diminished fetal movements" },
    { label: "Draining liquor", value: "draining liquor" },
    { label: "No fetal movement", value: "no fetal movement" },
    { label: "Jaundice", value: "jaundice" },
    { label: "Difficulties in breathing", value: "difficulties in breathing" },
    { label: "Other danger signs", value: "other danger signs" }
  ];
  const reasonForComingOptions = [
    { label: "In labour", value: "In labour" },
    { label: "Delivered on the way to the facility", value: "Delivered" },
    { label: "Elective CS", value: "Elective CS" },
    { label: "Pre-eclampsia/eclampsia", value: "Pre-eclampsia/eclampsia" },
    { label: "Preterm labour", value: "Preterm labour" },
    { label: "PROM / PPROM", value: "PROM / PPROM" },
    { label: "Maternal infections", value: "Maternal infections" },
    { label: "Fetal distress", value: "Fetal distress" },
    { label: "Antepartum haemorrhage", value: "Antepartum haemorrhage" },
    { label: "Home Delivery ", value: "Home Delivery" },
    { label: "Sick ", value: "Sick" },
    { label: "Other medical/obstetric conditions", value: "Other medical/obstetric conditions" }
  ];
  const quickCheckForm = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "What is the reason for coming to the facility?",
        name: "reason",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: reasonForComingOptions,
        validation: StandardValidations.required
      },
      {
        componentType: "inputField",
        header: "Specify other medical/obstetric condition",
        name: "reasonOther",
        obsValueType: "value_text",
        icon: icons.editPen,
        validation: StandardValidations.required,
        condition: (formValues) => hasSelected(formValues?.reason, "Other medical/obstetric conditions (specify)")
      },
      { componentType: "Dashes" },
      {
        componentType: "checkboxField",
        header: "Danger signs",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: dangerSignsOptions,
        validation: StandardValidations.required
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "otherC",
        obsValueType: "value_text",
        icon: icons.editPen,
        validation: StandardValidations.required,
        condition: (formValues) => Array.isArray(formValues?.["Danger signs"]) && formValues["Danger signs"].includes("other danger signs")
      },
      { componentType: "Dashes" },
      {
        componentType: "radioButtonField",
        header: "Labour onset type",
        name: "Labour onset type",
        obsValueType: "value_coded",
        type: "inline",
        condition: (formValues) => hasSelected(formValues?.reason, "In labour"),
        options: [
          { label: "Spontaneous", value: "well" },
          { label: "Induced", value: "disturbed" }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "timeInputField",
        header: "Time of onset of labour",
        name: "Time",
        obsValueType: "value_text",
        icon: icons.time,
        validation: StandardValidations.required,
        condition: (formValues) => hasSelected(formValues?.reason, "In labour")
      },
      {
        componentType: "dateInputField",
        header: "Date of onset of labour",
        name: "Date",
        obsValueType: "value_date",
        icon: icons.calendar,
        validation: StandardValidations.required,
        condition: (formValues) => hasSelected(formValues?.reason, "In labour")
      },
      {
        componentType: "radioButtonField",
        header: "Membranes ruptured?",
        name: "Membranes ruptured",
        obsValueType: "value_coded",
        type: "inline",
        condition: (formValues) => hasSelected(formValues?.reason, "In labour"),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "timeInputField",
        header: "Time membranes ruptured",
        name: "Time Membrane",
        obsValueType: "value_text",
        icon: icons.time,
        validation: StandardValidations.required,
        condition: (formValues) => hasSelected(formValues?.reason, "In labour") && formValues?.["Membranes ruptured"] === "Yes"
      },
      {
        componentType: "dateInputField",
        header: "Date membranes ruptured",
        name: "Date Membrane",
        obsValueType: "value_date",
        icon: icons.calendar,
        validation: StandardValidations.required,
        condition: (formValues) => hasSelected(formValues?.reason, "In labour") && formValues?.["Membranes ruptured"] === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Has she had food in 4 hours?",
        name: "food in 4 hours",
        obsValueType: "value_coded",
        type: "inline",
        condition: (formValues) => hasSelected(formValues?.reason, "In labour"),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "radioButtonField",
        header: "Homemade medicines taken?",
        name: "Homemade medicines taken",
        obsValueType: "value_coded",
        type: "inline",
        condition: (formValues) => hasSelected(formValues?.reason, "In labour"),
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "radioButtonField",
        header: "Sleep",
        name: "Sleep",
        obsValueType: "value_coded",
        type: "inline",
        condition: (formValues) => hasSelected(formValues?.reason, "In labour"),
        options: [
          { label: "Well", value: "Well" },
          { label: "Disturbed", value: "Disturbed" }
        ],
        validation: StandardValidations.required
      }
    ];
  });
  return { quickCheckForm };
}

const _hoisted_1 = { class: "quick-check-form" };
const _hoisted_2 = { class: "custom-card" };
const QUICK_CHECK_ENCOUNTER_TYPE = 151;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabourQuickCheck",
  setup(__props, { expose: __expose }) {
    const { quickCheckForm } = useLabourQuickCheckForm();
    const formRef = ref(null);
    const normalizeValue = (value) => String(value ?? "").trim().toLowerCase();
    const resolveOptionValue = (fieldName, rawValue) => {
      const fieldConfig = quickCheckForm.value.find((field) => field.name === fieldName);
      const options = fieldConfig?.options || [];
      const normalized = normalizeValue(rawValue);
      const match = options.find((option) => {
        const optionValue = normalizeValue(option.value);
        const optionLabel = normalizeValue(option.label);
        return optionValue === normalized || optionLabel === normalized;
      });
      return match?.value ?? rawValue;
    };
    const resolveObsValue = async (obs) => {
      if (obs?.value_coded != null) {
        return ConceptService.getConceptName(obs.value_coded);
      }
      if (obs?.value_text != null) {
        return obs.value_text;
      }
      if (obs?.value_numeric != null) {
        return obs.value_numeric;
      }
      if (obs?.value_datetime != null) {
        return obs.value_datetime;
      }
      return null;
    };
    const loadExistingValues = async () => {
      const encounters = await ObservationService.getObsByEncounterId(QUICK_CHECK_ENCOUNTER_TYPE);
      if (!encounters?.length || !formRef.value) return;
      const sortedEncounters = [...encounters].sort((a, b) => {
        const aDate = new Date(a?.encounter_datetime || 0).getTime();
        const bDate = new Date(b?.encounter_datetime || 0).getTime();
        return aDate - bDate;
      });
      const latestEncounter = sortedEncounters[sortedEncounters.length - 1] || encounters[encounters.length - 1];
      const obsList = latestEncounter?.obs || [];
      if (!obsList.length) return;
      const checkboxValues = {};
      for (const obs of obsList) {
        if (!obs?.concept_name) continue;
        const rawValue = await resolveObsValue(obs);
        if (rawValue == null) continue;
        const fieldName = obs.concept_name;
        const fieldConfig = quickCheckForm.value.find((field) => field.name === fieldName);
        if (fieldConfig?.componentType === "checkboxField") {
          const mappedValue = resolveOptionValue(fieldName, String(rawValue));
          checkboxValues[fieldName] = [...checkboxValues[fieldName] || [], mappedValue];
          continue;
        }
        let value = rawValue;
        if (fieldConfig?.componentType === "radioButtonField") {
          value = resolveOptionValue(fieldName, String(rawValue));
        }
        if (fieldConfig?.componentType === "dateInputField" && typeof rawValue === "string") {
          value = HisDate.toStandardHisFormat(rawValue);
        }
        if (fieldConfig?.componentType === "timeInputField" && typeof rawValue === "string") {
          value = HisDate.toStandardHisTimeFormat(rawValue);
        }
        formRef.value?.setFormValue(fieldName, value);
      }
      Object.entries(checkboxValues).forEach(([fieldName, values]) => {
        const uniqueValues = Array.from(new Set(values));
        formRef.value?.setFormValue(fieldName, uniqueValues);
      });
    };
    onMounted(async () => {
      await nextTick();
      await loadExistingValues();
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm(),
      setFormValue: (fieldName, value) => formRef.value?.setFormValue(fieldName, value)
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "ion-text-center" }, "Quick Check", -1)),
        createBaseVNode("div", _hoisted_2, [
          createVNode(StandardForm, {
            formData: unref(quickCheckForm),
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])
        ])
      ]);
    };
  }
});

const LabourQuickCheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d40c7ed"]]);

export { LabourQuickCheck as L };
