import { ci as Alert, cj as SummaryField, _ as _export_sfc } from '../index-eygbwbqc.js';
import { b as neonatalReviewOfSystemsFormKey, d as neonatalSignsSymptomsFormKey, e as neonatalAdmissionOutcomesFormKey, f as neonatalTriageFormKey, a as neonatalGeneralExaminationFormKey, g as neonatalSystemicExaminationFormKey, h as neonatalTreatmentPlanFormKey, i as useNeonatalTriageStore, j as neonatalReviewOfSystemsSections, k as neonatalSignsSymptomsSections, l as neonatalEnrollmentSections, m as neonatalAdmissionOutcomesSections, o as neonatalTriageSections, n as neonatalGeneralExaminationSections, p as neonatalSystemicExaminationSections, q as neonatalTreatmentPlanSections } from './NeonatalStepper-BxRGQY5s.js';
import { n as neonatalEnrollmentFormKey } from './useNeonatalEnrollmentStore-BHFF9DKy.js';
import { s as defineComponent, h as inject, i as isRef, y as openBlock, z as createElementBlock, O as createBlock, H as createCommentVNode, c as computed } from './vendor-CHJxKtY0.js';

const normalizeYesNo = (value) => {
  if (value === void 0 || value === null) return void 0;
  if (typeof value === "boolean") return value ? "Yes" : "No";
  const normalized = String(value).trim().toLowerCase();
  if (normalized === "yes") return "Yes";
  if (normalized === "no") return "No";
  return void 0;
};
const toDisplayValue = (value) => {
  if (value === void 0 || value === null) return void 0;
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed ? trimmed : void 0;
  }
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : void 0;
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  if (Array.isArray(value)) {
    const items = value.map((v) => toDisplayValue(v)).filter((v) => Boolean(v));
    return items.length ? items.join("\n") : void 0;
  }
  if (typeof value === "object") {
    const obj = value;
    return toDisplayValue(obj.label ?? obj.name ?? obj.value ?? obj.text);
  }
  return String(value);
};
const deriveLabelFromName = (name) => {
  const cleaned = name.trim().replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return name;
  const tokens = cleaned.split(" ").filter(Boolean);
  return tokens.map((token) => {
    const lower = token.toLowerCase();
    if (lower === "hiv") return "HIV";
    if (lower === "tb") return "TB";
    if (lower === "bp") return "BP";
    if (lower === "rr") return "RR";
    if (lower === "hr") return "HR";
    if (lower === "spo2" || lower === "sp02") return "SpO2";
    return token.charAt(0).toUpperCase() + token.slice(1);
  }).join(" ");
};
const extractHeaderUnit = (header) => {
  const headerString = toDisplayValue(header);
  if (!headerString) return {};
  const trimmed = headerString.trim();
  const match = /^(.*)\(([^()]+)\)\s*$/.exec(trimmed);
  if (!match) return { label: trimmed };
  const label = match[1].trim();
  const unitRaw = match[2].trim();
  const unit = unitRaw.toLowerCase() === "beats/min" ? "bpm" : unitRaw.toLowerCase() === "beat/min" ? "bpm" : unitRaw.toLowerCase() === "deg c" ? "°C" : unitRaw.toLowerCase() === "°c" ? "°C" : unitRaw.toLowerCase() === "breaths/min" ? "breaths/min" : unitRaw;
  return { label, unit };
};
const hasExistingUnit = (displayValue, unit) => {
  const valueLower = displayValue.toLowerCase();
  const unitLower = unit.toLowerCase();
  if (valueLower.includes(unitLower)) return true;
  if (unitLower === "%" && valueLower.includes("%")) return true;
  return /[a-z]/i.test(displayValue);
};
const mapOptionLabel = (field, rawValue) => {
  const type = field.componentType;
  if (!type) return void 0;
  if (type === "drugPrescriptionField") {
    if (!Array.isArray(rawValue)) return void 0;
    const labels = rawValue.map((item) => {
      if (!item || typeof item !== "object") return toDisplayValue(item);
      const name = toDisplayValue(item.name);
      const dosage = toDisplayValue(item.dosage);
      const frequency = toDisplayValue(item.frequency);
      if (!name) return void 0;
      const parts = [dosage, frequency].filter((v) => Boolean(v));
      return parts.length ? `${name} - ${parts.join(", ")}` : name;
    }).filter((v) => Boolean(v));
    return labels.length ? labels.join("\n") : void 0;
  }
  if (type === "listSelectionField" || type === "radioButtonField") {
    const options = field.options;
    if (!options) return void 0;
    if (Array.isArray(rawValue)) {
      const labels = rawValue.map((item) => {
        const normalizedYesNoValue2 = normalizeYesNo(item);
        if (normalizedYesNoValue2) return normalizedYesNoValue2;
        return options.find((opt) => opt.value === item)?.label ?? toDisplayValue(item);
      }).filter((v) => Boolean(v));
      return labels.length ? labels.join("\n") : void 0;
    }
    const normalizedYesNoValue = normalizeYesNo(rawValue);
    if (normalizedYesNoValue) return normalizedYesNoValue;
    return options.find((opt) => opt.value === rawValue)?.label;
  }
  if (type === "checkboxField") {
    const options = field.options;
    if (!options) return void 0;
    if (!Array.isArray(rawValue)) return void 0;
    const labels = rawValue.map((item) => options.find((opt) => opt.value === item)?.label ?? toDisplayValue(item)).filter((v) => Boolean(v));
    return labels.length ? labels.join("\n") : void 0;
  }
  if (type === "multiSelectInputField" || type === "searchableDropdown") {
    if (Array.isArray(rawValue)) {
      const labels = rawValue.map((item) => (item && typeof item === "object" ? item.label : void 0) ?? toDisplayValue(item)).filter((v) => Boolean(v));
      return labels.length ? labels.join("\n") : void 0;
    }
    if (rawValue && typeof rawValue === "object") return rawValue.label ?? toDisplayValue(rawValue);
  }
  if (type === "switchField") {
    const yn = normalizeYesNo(rawValue);
    if (yn) return yn;
  }
  return void 0;
};
const shouldIncludeField = (field, config) => {
  const name = field.name;
  const componentType = field.componentType;
  if (!name || !componentType) return false;
  const defaultExcluded = /* @__PURE__ */ new Set([
    "summaryField",
    "infographicField",
    "illustration",
    "Heading",
    "Alert",
    "scoreField",
    "Dashes",
    "Slot"
  ]);
  if (defaultExcluded.has(componentType)) return false;
  if (config?.excludeComponentTypes?.includes(componentType)) return false;
  if (config?.excludeFieldNames?.includes(name)) return false;
  if (config?.includeFieldNames && config.includeFieldNames.length > 0) {
    return config.includeFieldNames.includes(name);
  }
  return true;
};
const resolveFieldLabelAndUnit = (field) => {
  const header = field.header;
  const label = field.label;
  const helperText = field.helperText;
  const name = field.name;
  const headerParsed = extractHeaderUnit(header);
  const labelParsed = extractHeaderUnit(label);
  const helperParsed = extractHeaderUnit(helperText);
  const unit = headerParsed.unit ?? labelParsed.unit ?? helperParsed.unit ?? field.unit;
  const resolvedLabel = headerParsed.label ?? labelParsed.label ?? helperParsed.label ?? (typeof name === "string" && name.trim() ? deriveLabelFromName(name) : void 0);
  return { label: resolvedLabel, unit };
};
const resolveFieldValueString = (field, rawValue) => {
  const mapped = mapOptionLabel(field, rawValue);
  if (mapped) return mapped;
  const yn = normalizeYesNo(rawValue);
  if (yn) return yn;
  return toDisplayValue(rawValue);
};
const expandSectionFields = (fields) => {
  const expanded = [];
  const visited = /* @__PURE__ */ new Set();
  const nameSeen = /* @__PURE__ */ new Set();
  const visit = (field) => {
    if (!field) return;
    if (visited.has(field)) return;
    visited.add(field);
    const name = field.name;
    if (name) {
      if (nameSeen.has(name)) return;
      nameSeen.add(name);
    }
    expanded.push(field);
    const componentType = field.componentType;
    if (componentType !== "listSelectionField") return;
    const options = field.options;
    if (!Array.isArray(options)) return;
    for (const opt of options) {
      const child = opt?.children;
      if (child) {
        visit(child);
      }
    }
  };
  for (const field of fields) {
    visit(field);
  }
  return expanded;
};
const buildAutoSummaryRows = (params) => {
  const { sections, allFormValues, currentSectionIndex, config } = params;
  const enabled = config?.enabled ?? false;
  if (!enabled) return [];
  const scope = config?.scope ?? "beforeCurrent";
  const showMissingAsDash = config?.showMissingAsDash ?? false;
  const respectSkipCondition = config?.respectSkipCondition ?? true;
  const limit = scope === "all" ? sections.length : typeof currentSectionIndex === "number" ? Math.max(0, currentSectionIndex) : sections.length;
  const rows = [];
  for (let sectionIndex = 0; sectionIndex < limit; sectionIndex += 1) {
    const section = sections[sectionIndex];
    if (!section) continue;
    if (respectSkipCondition && typeof section.skipCondition === "function") {
      try {
        if (section.skipCondition(allFormValues)) {
          continue;
        }
      } catch {
      }
    }
    const sectionTitle = section.subtitle?.trim() || section.title?.trim() || "";
    const sectionFields = expandSectionFields(section.formData);
    for (const field of sectionFields) {
      if (!shouldIncludeField(field, config)) continue;
      const name = field.name;
      const { label, unit } = resolveFieldLabelAndUnit(field);
      if (!label) continue;
      const rawValue = allFormValues?.[name];
      const valueString = resolveFieldValueString(field, rawValue);
      if (!valueString && !showMissingAsDash) continue;
      const display = valueString ?? "-";
      const withUnit = unit && display !== "-" && !hasExistingUnit(display, unit) ? `${display} ${unit}` : display;
      rows.push({
        section: sectionTitle || void 0,
        label,
        value: withUnit,
        alwaysShow: showMissingAsDash
      });
    }
  }
  return rows;
};

const neonatalDiagnosisFormKey = Symbol("neonatalDiagnosisForm");
const neonatalDiagnosisSections = [
  {
    title: "Diagnosis Selection",
    subtitle: "Diagnosis",
    formData: [
      {
        componentType: "searchableDropdown",
        header: "Primary Diagnosis (Working Diagnosis)",
        name: "workingDiagnosis",
        placeholder: "Search for working diagnosis",
        dropdownHeader: "Select ONE",
        mode: "neonatal",
        bold: true,
        options: [],
        validation: (value) => value ? null : "A Primary Diagnosis (Working Diagnosis) is required.",
        padding: true
      },
      {
        componentType: "searchableDropdown",
        header: "Differential Diagnoses",
        name: "differentialDiagnoses",
        placeholder: "Search for differential diagnoses",
        dropdownHeader: "Select problems",
        mode: "neonatal",
        bold: true,
        multiple: true,
        options: [],
        padding: true
      }
    ]
  },
  {
    title: "Differential Diagnosis & System Suggestions",
    subtitle: "Suggestions Review",
    description: "Suggested diagnoses accepted, rejected, and final ordering",
    formData: []
  },
  {
    title: "Summary",
    subtitle: "Diagnosis Summary",
    description: "Review your entries before saving",
    formData: [
      {
        componentType: "Alert",
        name: "diagnosis_summary_alert",
        type: "warning",
        backgroundColor: "#FEDF89",
        textColor: "#B54708",
        message: "Review your entries carefully. You can go back to edit if needed."
      },
      {
        componentType: "summaryField",
        name: "diagnosisSummary",
        title: "Diagnosis Summary",
        subtitle: "Auto-generated summary from diagnosis selections",
        emptyStateMessage: "No diagnosis data captured yet.",
        autoSummary: {
          enabled: true,
          scope: "beforeCurrent",
          showMissingAsDash: false,
          respectSkipCondition: true,
          excludeFieldNames: ["differentialDiagnoses"]
        }
      }
    ]
  }
];

const _hoisted_1 = { class: "review-of-systems-section-wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SummarySection",
  props: {
    configIndex: {},
    sectionId: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const rosForm = inject(neonatalReviewOfSystemsFormKey, void 0);
    const signsSymptomsForm = inject(neonatalSignsSymptomsFormKey, void 0);
    const enrollmentForm = inject(neonatalEnrollmentFormKey, void 0);
    const admissionOutcomesForm = inject(neonatalAdmissionOutcomesFormKey, void 0);
    const triageForm = inject(neonatalTriageFormKey, void 0);
    const generalExaminationForm = inject(neonatalGeneralExaminationFormKey, void 0);
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey, void 0);
    const diagnosisForm = inject(neonatalDiagnosisFormKey, void 0);
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey, void 0);
    const triageStore = useNeonatalTriageStore();
    const sectionsConfig = computed(() => {
      if (rosForm) {
        return neonatalReviewOfSystemsSections;
      }
      if (signsSymptomsForm) {
        return neonatalSignsSymptomsSections;
      }
      if (enrollmentForm) {
        return neonatalEnrollmentSections;
      }
      if (admissionOutcomesForm) {
        return neonatalAdmissionOutcomesSections;
      }
      if (triageForm) {
        return neonatalTriageSections;
      }
      if (generalExaminationForm) {
        return neonatalGeneralExaminationSections;
      }
      if (systemicExaminationForm) {
        return neonatalSystemicExaminationSections;
      }
      if (diagnosisForm) {
        return neonatalDiagnosisSections;
      }
      if (treatmentPlanForm) {
        return neonatalTreatmentPlanSections;
      }
      return [];
    });
    const sectionConfig = computed(() => {
      if (props.sectionId) {
        const config2 = sectionsConfig.value.find((s) => s.id === props.sectionId);
        if (config2) return config2;
      }
      const index = typeof props.configIndex === "number" ? props.configIndex : 0;
      const config = sectionsConfig.value[index];
      if (!config) {
        throw new Error(`[SummarySection] Missing section configuration for index ${index} or id ${props.sectionId}`);
      }
      return config;
    });
    const alertConfig = computed(
      () => sectionConfig.value.formData.find((field) => field.componentType === "Alert")
    );
    const rawSummaryFieldConfig = computed(
      () => sectionConfig.value.formData.find((field) => field.componentType === "summaryField")
    );
    const allFormValues = computed(() => {
      if (triageForm) {
        return { ...triageForm, ...triageStore.formValues };
      }
      if (generalExaminationForm) {
        const resolved = isRef(generalExaminationForm) ? generalExaminationForm.value : generalExaminationForm;
        return { ...resolved || {} };
      }
      if (systemicExaminationForm) {
        const resolved = isRef(systemicExaminationForm) ? systemicExaminationForm.value : systemicExaminationForm;
        return { ...resolved || {} };
      }
      if (diagnosisForm) {
        const resolved = isRef(diagnosisForm) ? diagnosisForm.value : diagnosisForm;
        return { ...resolved || {} };
      }
      if (treatmentPlanForm) {
        const resolved = isRef(treatmentPlanForm) ? treatmentPlanForm.value : treatmentPlanForm;
        return { ...resolved || {} };
      }
      return { ...rosForm || signsSymptomsForm || enrollmentForm || admissionOutcomesForm || {} };
    });
    const diagnosisSystemsSuggestionRows = computed(() => {
      if (!diagnosisForm) return [];
      if (typeof props.configIndex !== "number") return [];
      if (props.configIndex < 2) return [];
      const items = allFormValues.value.differentialDiagnosesFinal ?? allFormValues.value.differentialDiagnoses ?? [];
      if (!Array.isArray(items) || items.length === 0) return [];
      return items.map((item, index) => {
        const value = item?.label ?? item?.value;
        if (!value) return null;
        const isSystemSuggestion = item?.origin === "system";
        return {
          section: "Differential Diagnosis & Systems Suggestions",
          label: `${index + 1}. ${isSystemSuggestion ? "System Suggestion" : "Differential Diagnosis"}`,
          value
        };
      }).filter((row) => Boolean(row));
    });
    const summaryFieldConfig = computed(() => {
      const config = rawSummaryFieldConfig.value;
      if (!config) return void 0;
      const autoRows = buildAutoSummaryRows({
        sections: sectionsConfig.value,
        allFormValues: allFormValues.value,
        currentSectionIndex: typeof props.configIndex === "number" ? props.configIndex : void 0,
        config: config.autoSummary
      });
      const mergedRows = [...autoRows, ...diagnosisSystemsSuggestionRows.value];
      if (treatmentPlanForm) {
        const rawPrescriptions = allFormValues.value.prescriptions;
        const alreadyHasPrescriptionRow = mergedRows.some(
          (row) => typeof row?.label === "string" && (row.label === "Your Selected Medications" || row.label.toLowerCase().includes("medication"))
        );
        if (!alreadyHasPrescriptionRow && Array.isArray(rawPrescriptions) && rawPrescriptions.length > 0) {
          const value = rawPrescriptions.map((item) => {
            if (!item || typeof item !== "object") return void 0;
            const name = String(item.name ?? "").trim();
            const dosage = String(item.dosage ?? "").trim();
            const frequency = String(item.frequency ?? "").trim();
            if (!name) return void 0;
            const parts = [dosage, frequency].filter((v) => Boolean(v));
            return parts.length ? `${name} - ${parts.join(", ")}` : name;
          }).filter((v) => Boolean(v)).join("\n");
          if (value) {
            mergedRows.push({
              section: "Pharmacological",
              label: "Your Selected Medications",
              value
            });
          }
        }
      }
      if (mergedRows.length === 0) {
        return config;
      }
      return {
        ...config,
        builder: void 0,
        summaryRows: mergedRows
      };
    });
    __expose({
      getFormRef: () => null,
      validateForm: () => null,
      getFormValues: () => {
        if (triageForm) {
          return { ...triageForm, ...triageStore.formValues };
        }
        if (generalExaminationForm) {
          return isRef(generalExaminationForm) ? generalExaminationForm.value : generalExaminationForm;
        }
        if (systemicExaminationForm) {
          return isRef(systemicExaminationForm) ? systemicExaminationForm.value : systemicExaminationForm;
        }
        if (diagnosisForm) {
          return isRef(diagnosisForm) ? diagnosisForm.value : diagnosisForm;
        }
        if (treatmentPlanForm) {
          return isRef(treatmentPlanForm) ? treatmentPlanForm.value : treatmentPlanForm;
        }
        return { ...rosForm || signsSymptomsForm || enrollmentForm || admissionOutcomesForm || {} };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        alertConfig.value ? (openBlock(), createBlock(Alert, {
          key: 0,
          config: alertConfig.value,
          allFormValues: allFormValues.value
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true),
        summaryFieldConfig.value ? (openBlock(), createBlock(SummaryField, {
          key: 1,
          config: summaryFieldConfig.value,
          allFormValues: allFormValues.value
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true)
      ]);
    };
  }
});

const SummarySection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93529995"]]);

export { SummarySection as S, neonatalDiagnosisFormKey as a, neonatalDiagnosisSections as n };
