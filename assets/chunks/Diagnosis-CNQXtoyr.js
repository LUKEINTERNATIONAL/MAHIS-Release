import { u as useDemographicsStore, z as StandardForm, _ as _export_sfc, a8 as useUserStore, G as toastSuccess, x as toastDanger, aZ as AppEncounterService, b as EncounterTypeId, K as ObservationService, J as savePatientRecord, T as Toolbar } from '../index-YhNwblvs.js';
import { s as defineComponent, f as ref, w as watch, y as openBlock, z as createElementBlock, A as createVNode, C as createBaseVNode, D as toDisplayString, O as createBlock, B as withCtx, Q as normalizeClass, H as createCommentVNode, F as unref, L as IonIcon, bW as trashOutline, cG as mergeProps, fv as draggable, c as computed, a3 as onMounted, x as resolveComponent, T as withDirectives, U as vShow, a5 as createTextVNode, R as alertCircleOutline, c5 as checkmarkCircleOutline, J as Fragment, S as renderList, bT as withKeys, a8 as withModifiers, fw as addCircle, G as closeCircleOutline, co as refreshOutline, h as inject, aM as useRouter, aH as IonContent, bw as IonPage, f2 as provide } from './vendor-DEu2hKw1.js';
import { l as neonatalDiagnosisSections, p as useDiagnosisStore, q as useSuggestedDiagnosisStore, e as neonatalDiagnosisFormKey, N as NeonatalStepper } from './NeonatalStepper-j_x2iqvH.js';
import { s as storeToRefs } from './pinia-3T0xmcrW.js';
import { S as SummarySection } from './SummarySection-Dm0c7u2u.js';

const _hoisted_1$3 = { class: "diagnosis-selection-panel" };
const SECTION_INDEX = 0;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DiagnosisSelection",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const sectionConfig = neonatalDiagnosisSections[SECTION_INDEX];
    const diagnosisStore = useDiagnosisStore();
    const formRef = ref(null);
    const mergeDiagnosisOrigin = (params) => {
      const { existing, next, defaultOrigin } = params;
      const byValue = new Map((existing || []).map((item) => [item.value, item]));
      return next.map((item) => {
        const prior = byValue.get(item.value);
        return {
          ...item,
          origin: item.origin ?? prior?.origin ?? defaultOrigin
        };
      });
    };
    const formData = ref(
      sectionConfig.formData.map((field) => {
        if (field.name === "workingDiagnosis") {
          return { ...field, initialValue: diagnosisStore.workingDiagnosis };
        }
        if (field.name === "differentialDiagnoses") {
          return { ...field, initialValue: diagnosisStore.differentialDiagnoses };
        }
        return field;
      })
    );
    const syncStoreValues = (values) => {
      if (values.workingDiagnosis !== void 0) {
        const nextWorking = values.workingDiagnosis ? { ...values.workingDiagnosis, origin: values.workingDiagnosis.origin ?? diagnosisStore.workingDiagnosis?.origin ?? "manual" } : null;
        diagnosisStore.setWorkingDiagnosis(nextWorking);
      }
      if (values.differentialDiagnoses !== void 0) {
        const next = Array.isArray(values.differentialDiagnoses) ? values.differentialDiagnoses : [];
        diagnosisStore.setDifferentialDiagnoses(
          mergeDiagnosisOrigin({
            existing: diagnosisStore.differentialDiagnoses,
            next,
            defaultOrigin: "manual"
          })
        );
      }
    };
    watch(
      () => formRef.value?.formValues,
      (newValues) => {
        if (newValues) {
          syncStoreValues(newValues);
        }
      },
      { deep: true }
    );
    watch(
      () => patient.value,
      (newPatient, oldPatient) => {
        if (newPatient?.patientID !== oldPatient?.patientID) {
          diagnosisStore.setCurrentPatientID(newPatient?.patientID);
        }
      },
      { deep: true, immediate: true }
    );
    const resetForm = () => {
      if (formRef.value?.resetForm) {
        formRef.value.resetForm();
      }
    };
    __expose({
      getFormRef: () => formRef.value,
      getFormValues: () => formRef.value?.getFormValues?.() || {},
      validateForm: () => formRef.value?.validateForm?.() || null,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(StandardForm, {
          formData: formData.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const DiagnosisSelection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7b063f54"]]);

const _hoisted_1$2 = { class: "selected-diagnoses-list" };
const _hoisted_2$1 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_3$1 = { class: "item-label" };
const _hoisted_4$1 = ["onClick", "aria-label", "title"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SelectedDiagnosisDisplay",
  props: {
    items: { default: () => [] },
    isDifferential: { type: Boolean, default: false },
    allowDragging: { type: Boolean, default: false },
    highlightId: { default: null }
  },
  emits: ["remove-item", "update:items"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const draggableItems = ref([]);
    const activeDragItem = ref(null);
    watch(() => props.items, (newItems) => {
      if (newItems) {
        draggableItems.value = [...newItems];
      } else {
        draggableItems.value = [];
      }
    }, { immediate: true, deep: true });
    const dragOptions = computed(() => ({
      animation: 250,
      disabled: !props.allowDragging || !props.isDifferential,
      ghostClass: "ghost",
      dragClass: "dragging-element",
      forceFallback: true,
      // Better touch support
      fallbackTolerance: 5,
      // Sensitivity for touch/mouse
      touchStartThreshold: 5,
      // Minimum pixels before drag starts
      delay: 0,
      // No delay for desktop
      delayOnTouchOnly: true
      // Delay only on touch devices
    }));
    const checkMove = (evt) => {
      return props.allowDragging && props.isDifferential;
    };
    const onDragStart = (event) => {
      if (event.oldIndex !== void 0 && draggableItems.value[event.oldIndex]) {
        activeDragItem.value = draggableItems.value[event.oldIndex].value;
      }
    };
    const onDragEnd = (event) => {
      emit("update:items", draggableItems.value);
      activeDragItem.value = null;
    };
    const removeItem = (item) => {
      emit("remove-item", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        !__props.items || __props.items.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("p", null, "No " + toDisplayString(__props.isDifferential ? "differential" : "working") + " diagnosis selected", 1)
        ])) : (openBlock(), createBlock(unref(draggable), mergeProps({
          key: 1,
          modelValue: draggableItems.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => draggableItems.value = $event),
          "item-key": "value",
          handle: ".drag-handle-wrapper",
          onStart: onDragStart,
          onEnd: onDragEnd
        }, dragOptions.value, { move: checkMove }), {
          item: withCtx(({ element: item, index }) => [
            createBaseVNode("div", {
              class: normalizeClass(["selected-item", {
                "differential": __props.isDifferential,
                "is-dragging": activeDragItem.value === item.value,
                "draggable-enabled": __props.allowDragging && __props.isDifferential,
                "highlight-flash": item.value === __props.highlightId
              }])
            }, [
              __props.allowDragging && __props.isDifferential ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["drag-handle-wrapper", { "is-active": activeDragItem.value === item.value }]),
                title: "Drag to reorder"
              }, [..._cache[1] || (_cache[1] = [
                createBaseVNode("svg", {
                  class: "drag-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("g", {
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2"
                  }, [
                    createBaseVNode("path", { d: "M19 11V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" }),
                    createBaseVNode("path", { d: "m13 13l9 3l-4 2l-2 4zM3 3v.01M7 3v.01M11 3v.01M15 3v.01M3 7v.01M3 11v.01M3 15v.01" })
                  ])
                ], -1)
              ])], 2)) : createCommentVNode("", true),
              createBaseVNode("span", _hoisted_3$1, toDisplayString(item.label), 1),
              createBaseVNode("button", {
                onClick: ($event) => removeItem(item),
                class: "remove-button",
                type: "button",
                "aria-label": "Remove " + item.label,
                title: "Remove " + item.label
              }, [
                createVNode(unref(IonIcon), {
                  icon: unref(trashOutline),
                  class: "trash-icon"
                }, null, 8, ["icon"])
              ], 8, _hoisted_4$1)
            ], 2)
          ]),
          _: 1
        }, 16, ["modelValue"]))
      ]);
    };
  }
});

const SelectedDiagnosisDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-53e25c14"]]);

const hasRespiratoryDistress = (data) => {
  return data.RR > 60 || data.DangerSigns === "Grun" || data.DangerSigns === "Cyan" || data.SatsAIr < 90 || data.SatsO2 < 90 || data.RespSR !== "" || data.SignsRD !== "";
};
const hasMeconiumRisk = (data) => {
  return data.MecPresent === "Yes";
};
function getSuggestedDiagnoses(data) {
  if (!data) return [];
  const suggestions = [];
  const temp = Number(data.Temperature);
  const hasValidTemp = Number.isFinite(temp) && temp > 0;
  const birthWeight = Number(data.BirthWeight);
  const hasValidBirthWeight = Number.isFinite(birthWeight) && birthWeight > 0;
  const gestation = Number(data.Gestation);
  const hasValidGestation = Number.isFinite(gestation) && gestation > 0;
  if (data.EDLIZSummaryTableScore > 0.9) {
    suggestions.push({
      label: "Suspected neonatal sepsis",
      value: "suspected_neonatal_sepsis",
      severity: 1,
      details: `EDLIZ risk score of ${data.EDLIZSummaryTableScore} is high, triggering the sepsis protocol.`
    });
  }
  if (hasRespiratoryDistress(data) && hasMeconiumRisk(data)) {
    suggestions.push({
      label: "Possible Meconium Aspiration",
      value: "possible_meconium_aspiration",
      severity: 1,
      details: `Respiratory distress present with meconium risk factors. Requires urgent stabilization.`
    });
  }
  if (data.DangerSigns === "Conv" || data.SymptomReviewNeurology === "Convulsions" || data.Activity === "Convulsions" || data.AdmReason === "Convulsions") {
    suggestions.push({
      label: "Convulsions",
      value: "convulsions",
      severity: 1,
      details: `Convulsions have been observed on examination or reported in history.`
    });
  }
  const hasValidBloodSugarmmol = data.BloodSugarmmol > 0;
  const hasValidBloodSugarmg = data.BloodSugarmg > 0;
  const isHypoSymp = (hasValidBloodSugarmmol && data.BloodSugarmmol < 2.5 || hasValidBloodSugarmg && data.BloodSugarmg < 45) && data.HypoSymptoms === true;
  if (isHypoSymp) {
    suggestions.push({
      label: "Hypoglycaemia (symptomatic)",
      value: "hypoglycaemia_symptomatic",
      severity: 1,
      details: `Blood sugar is low and the baby is showing symptoms.`
    });
  }
  if (hasValidBirthWeight && birthWeight < 1e3) {
    suggestions.push({
      label: "Extremely Low Birth Weight (<1000g)",
      value: "extremely_low_birth_weight",
      severity: 1,
      details: `Birth weight is critically low at ${birthWeight}g.`
    });
  }
  if (hasValidTemp && temp < 32) {
    suggestions.push({
      label: "Severe Hypothermia",
      value: "severe_hypothermia",
      severity: 1,
      details: `Baby's temperature is critically low (< 32.0°C).`
    });
  }
  if (hasValidGestation && gestation < 28) {
    suggestions.push({
      label: "Extremely Premature (<28 weeks)",
      value: "extremely_premature",
      severity: 1,
      details: `Gestation is ${gestation} weeks, requiring immediate high-level care.`
    });
  }
  if (data.ThompScore >= 11) {
    suggestions.push({
      label: "Hypoxic Ischaemic Encephalopathy",
      value: "hie_birth_asphyxia",
      severity: 1,
      details: `Thompson Score is ${data.ThompScore} or higher, indicating severe encephalopathy.`
    });
  }
  if (hasValidGestation && gestation < 37 && hasRespiratoryDistress(data)) {
    suggestions.push({
      label: "Prematurity with Respiratory Distress",
      value: "prematurity_respiratory_distress",
      severity: 1,
      details: `Preterm infant (${gestation} weeks) showing signs of respiratory distress.`
    });
  }
  if (hasValidGestation && gestation >= 37 && hasRespiratoryDistress(data)) {
    suggestions.push({
      label: "Term baby with Respiratory Distress",
      value: "term_respiratory_distress",
      severity: 1,
      details: `Term infant (${gestation} weeks) showing signs of respiratory distress.`
    });
  }
  if (data.Gestation < 37 && data.RespSR === "Apn") {
    suggestions.push({ label: "Apnoea of prematurity", value: "apnoea_prematurity", severity: 2, details: "Apnoeic episodes observed in a premature infant." });
  }
  if (hasValidBirthWeight && birthWeight > 999 && birthWeight < 1500) {
    suggestions.push({
      label: "Very Low Birth Weight (1000-1499g)",
      value: "very_low_birth_weight",
      severity: 2,
      details: `Birth weight is between 1000g and 1499g.`
    });
  }
  if (hasValidTemp && temp > 31.9 && temp < 36) {
    suggestions.push({
      label: "Moderate Hypothermia",
      value: "moderate_hypothermia",
      severity: 2,
      details: `Baby's temperature is low (32.0°C to 35.9°C).`
    });
  }
  if (hasValidTemp && temp > 37.5) {
    suggestions.push({
      label: "Hyperthermia",
      value: "hyperthermia",
      severity: 2,
      details: `Baby's temperature is high (> 37.5°C).`
    });
  }
  if (hasValidGestation && gestation > 31.9 && gestation < 36.1) {
    suggestions.push({
      label: "Premature (32-36 weeks)",
      value: "premature",
      severity: 2,
      details: `Baby's gestation is ${gestation} weeks.`
    });
  }
  const isHypoAsymp = (hasValidBloodSugarmmol && data.BloodSugarmmol < 2.5 || hasValidBloodSugarmg && data.BloodSugarmg < 45) && data.HypoSymptoms === false;
  if (isHypoAsymp) {
    suggestions.push({
      label: "Hypoglycaemia (NOT symptomatic)",
      value: "hypoglycaemia_not_symptomatic",
      severity: 2,
      details: `Blood sugar is low, but baby is currently asymptomatic.`
    });
  }
  if (data.ThompScore > 0 && data.ThompScore <= 10) {
    suggestions.push({
      label: "Suspected Hypoxic Ischaemic Encephalopathy",
      value: "suspected_hie",
      severity: 2,
      details: `Thompson Score is ${data.ThompScore}, indicating suspected encephalopathy.`
    });
  }
  if (data.GSCvsOM === "GSCH") {
    suggestions.push({ label: "Gastroschisis", value: "gastroschisis", severity: 2, details: "Abdominal wall defect observed." });
  }
  if (data.GSCvsOM === "OMPH") {
    suggestions.push({ label: "Omphalocele", value: "omphalocele", severity: 2, details: "Abdominal wall defect observed." });
  }
  const hasCleft = data.Palate === "Lip" || data.Palate === "Cleft" || data.Palate === "LipPalate";
  if (hasCleft && hasRespiratoryDistress(data)) {
    suggestions.push({
      label: "Cleft lip and/or palate with RD",
      value: "cleft_lip_palate",
      severity: 2,
      details: "Cleft observed; respiratory distress suggests potential airway compromise."
    });
  }
  if (data.EDLIZSummaryTableScore > 0 && data.EDLIZSummaryTableScore <= 0.9) {
    suggestions.push({
      label: "Risk factors for sepsis (Not symptomatic)",
      value: "risk_factors_sepsis",
      severity: 3,
      details: `EDLIZ risk score of ${data.EDLIZSummaryTableScore} indicates risk factors are present.`
    });
  }
  if (data.BirthWeight > 1499 && data.BirthWeight < 2500) {
    suggestions.push({
      label: "Low Birth Weight (1500-2499g)",
      value: "low_birth_weight",
      severity: 3,
      details: `Birth weight is between 1500g and 2499g.`
    });
  }
  if (data.BirthWeight > 4e3) {
    suggestions.push({
      label: "High Birth Weight (>4000g at birth)",
      value: "high_birth_weight",
      severity: 3,
      details: `Birth weight is greater than 4000g.`
    });
  }
  if (hasValidTemp && temp > 35.9 && temp < 36.5) {
    suggestions.push({
      label: "Mild Hypothermia",
      value: "mild_hypothermia",
      severity: 3,
      details: `Baby's temperature is slightly low (36.0°C to 36.4°C).`
    });
  }
  const isAtRiskHypo = data.BirthWeight < 2500 || data.BirthWeight > 4e3 || data.Gestation < 37 || data.PregConditions === "DM" || data.ANSteroids === "Y" || data.AdmReason === "NE";
  if (isAtRiskHypo) {
    suggestions.push({
      label: "At Risk of Hypoglycaemia",
      value: "at_risk_hypoglycaemia",
      severity: 3,
      details: "Risk factors like low birth weight, prematurity, or maternal diabetes present."
    });
  }
  const isHIVUnknown = data.MatHIVtest === false;
  const isHIVLowRisk = data.MatHIVtest === true && (data.HIVtestResult === "R" || data.HIVtestResult === "U") && (data.LengthHAART === "1stTrim" || data.LengthHAART === "2ndTrim" || data.LengthHAART === "3rdTrim");
  const isHIVHighRisk = data.MatHIVtest === true && (data.HIVtestResult === "R" || data.HIVtestResult === "U") && (data.HAART === "N" || data.LengthHAART === "Late");
  if (isHIVUnknown) {
    suggestions.push({ label: "HIV Unknown", value: "hiv_unknown", severity: 3, details: "Maternal HIV status is unknown or untested." });
  }
  if (isHIVLowRisk) {
    suggestions.push({ label: "HIV Low Risk", value: "hiv_low_risk", severity: 3, details: "Maternal HIV reactive/unknown, but HAART started early." });
  }
  if (isHIVHighRisk) {
    suggestions.push({ label: "HIV High Risk", value: "hiv_high_risk", severity: 3, details: "Maternal HIV reactive/unknown, with no/late HAART." });
  }
  if (data.Palate === "Lip") {
    suggestions.push({ label: "Cleft lip", value: "cleft_lip", severity: 3, details: "Cleft lip observed." });
  }
  if (data.Palate === "Cleft") {
    suggestions.push({
      label: "Cleft lip and/or palate",
      value: "cleft_lip_palate",
      severity: 3,
      details: "Cleft palate/lip and palate observed."
    });
  }
  if (data.Spine === "NTD") {
    suggestions.push({
      label: "Myelomeningocele",
      value: "myelomeningocele",
      severity: 3,
      details: "Neural Tube Defect (NTD) observed on the spine or head."
    });
  }
  const isPathoJaundice = data.YColour === "Y" && data.Age < 24 || data.YColour === "Y" && data.Age >= 24 && (data.Age < 336 && data.Gestation > 36.6 || data.Age < 504 && data.Gestation < 37) && (data.Jaundice === "DJ" || data.Temperature > 37 || data.BirthWeight < 2500 || data.Colour === "White");
  if (isPathoJaundice) {
    suggestions.push({
      label: "Pathological Jaundice",
      value: "pathological_jaundice",
      severity: 4,
      details: "Jaundice with signs of pathology (early onset, deep jaundice, or risk factors)."
    });
  }
  const isPhysioJaundice = data.Jaundice === "MJ" && data.Age > 24 && (data.Gestation > 36.6 && data.Age < 336 || data.Gestation < 37 && data.Age < 504) && !isPathoJaundice;
  if (isPhysioJaundice) {
    suggestions.push({
      label: "Physiological Jaundice",
      value: "physiological_jaundice",
      severity: 5,
      details: "Common, non-pathological jaundice (appears > 24 hours, no danger signs)."
    });
  }
  const isProlongedJaundice = data.YColour === "Y" && (data.Age > 336 && data.Gestation > 36.9 || data.Age > 504 && data.Gestation < 36.6);
  if (isProlongedJaundice) {
    suggestions.push({
      label: "Prolonged Jaundice",
      value: "prolonged_jaundice",
      severity: 5,
      details: "Jaundice persisting beyond 14 days term or >21 days preterm infants."
    });
  }
  const isCDH = data.Presentation === "Breech" || data.MatComorbidities === "CDH" || data.MSKproblems === "Legs" || data.Skin === "Folds" || data.Ortolani === "Yes";
  if (isCDH) {
    suggestions.push({
      label: "Congenital dislocation of the hip (CDH)",
      value: "cdh",
      severity: 6,
      details: "Risk factors (e.g., breech) or positive Ortolani/Barlow test."
    });
  }
  if (data.TalipesSev === "No") {
    suggestions.push({
      label: "Moderate Talipes (club foot)",
      value: "moderate_talipes",
      severity: 7,
      details: "Foot held in abnormal position and cannot be passively corrected."
    });
  }
  if (data.TalipesSev === "Yes") {
    suggestions.push({
      label: "Mild Talipes (club foot)",
      value: "mild_talipes",
      severity: 8,
      details: "Foot held in abnormal position and CAN be passively corrected."
    });
  }
  suggestions.sort((a, b) => a.severity - b.severity);
  const uniqueSuggestions = suggestions.filter((suggestion, index, self) => index === self.findIndex((s) => s.value === suggestion.value));
  return uniqueSuggestions;
}

function useDiagnosisSuggestions(clinicalData) {
  const store = useDiagnosisStore();
  const rejectedDiagnoses = computed(() => store.rejectedSuggestedDiagnoses ?? []);
  const allSuggestions = computed(() => {
    return getSuggestedDiagnoses(clinicalData.value);
  });
  const suggestedDiagnoses = computed(() => {
    return allSuggestions.value.filter((suggestion) => {
      const isWorkingDiagnosis = store.workingDiagnosis?.value === suggestion.value;
      const isInDifferential = store.differentialDiagnoses.some((item) => item.value === suggestion.value);
      const isRejected2 = rejectedDiagnoses.value.some((item) => item.value === suggestion.value);
      return !isWorkingDiagnosis && !isInDifferential && !isRejected2;
    });
  });
  const acceptSuggestion = (suggestion) => {
    store.addDifferentialDiagnosis({
      label: suggestion.label,
      value: suggestion.value,
      severity: suggestion.severity,
      details: suggestion.details,
      origin: "system"
    });
  };
  const reset = () => {
    console.log("Resetting with clinical data:", clinicalData.value);
    store.clearRejectedSuggestedDiagnoses();
    allSuggestions.value;
    suggestedDiagnoses.value;
  };
  const rejectSuggestion = (suggestion) => {
    store.addRejectedSuggestedDiagnosis({
      label: suggestion.label,
      value: suggestion.value,
      severity: suggestion.severity,
      details: suggestion.details
    });
  };
  const undoReject = (rejectedItem) => {
    store.removeRejectedSuggestedDiagnosis({ label: rejectedItem.label, value: rejectedItem.value });
  };
  const clearRejections = () => {
    store.clearRejectedSuggestedDiagnoses();
  };
  const isRejected = (diagnosisValue) => {
    return rejectedDiagnoses.value.some((item) => item.value === diagnosisValue);
  };
  const isSuggested = (diagnosisValue) => {
    return suggestedDiagnoses.value.some((item) => item.value === diagnosisValue);
  };
  const suggestionCount = computed(() => suggestedDiagnoses.value.length);
  const rejectedCount = computed(() => rejectedDiagnoses.value.length);
  return {
    // State
    suggestedDiagnoses,
    rejectedDiagnoses,
    allSuggestions,
    // Computed
    suggestionCount,
    rejectedCount,
    // Actions
    acceptSuggestion,
    rejectSuggestion,
    undoReject,
    clearRejections,
    reset,
    // Utilities
    isRejected,
    isSuggested
  };
}

const _hoisted_1$1 = { class: "systems-suggestions-panel" };
const _hoisted_2 = { class: "diagnosis-section" };
const _hoisted_3 = { class: "diagnosis-section" };
const _hoisted_4 = { class: "suggestion-instruction" };
const _hoisted_5 = { class: "pending-review-notice" };
const _hoisted_6 = { class: "suggested-diagnosis-section" };
const _hoisted_7 = { class: "suggested-title" };
const _hoisted_8 = { class: "empty-suggestions" };
const _hoisted_9 = ["onClick", "aria-label", "onKeydown"];
const _hoisted_10 = { class: "suggestion-content" };
const _hoisted_11 = { class: "suggestion-label" };
const _hoisted_12 = { class: "suggestion-details" };
const _hoisted_13 = ["onClick", "title", "aria-label"];
const _hoisted_14 = { class: "rejected-diagnosis-section" };
const _hoisted_15 = { class: "rejected-content" };
const _hoisted_16 = { class: "rejected-label" };
const _hoisted_17 = { class: "rejected-details" };
const _hoisted_18 = ["onClick", "title", "aria-label"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SystemsSuggestions",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const store = useDiagnosisStore();
    const suggestedDiagnosisStore = useSuggestedDiagnosisStore();
    suggestedDiagnosisStore.resetPatientData();
    suggestedDiagnosisStore.setPatientData();
    const patientData = computed(() => suggestedDiagnosisStore.patientData);
    const { suggestedDiagnoses, rejectedDiagnoses, acceptSuggestion, rejectSuggestion, undoReject, reset } = useDiagnosisSuggestions(patientData);
    const validationError = ref(null);
    const workingDiagnosisModel = computed(() => {
      return store.workingDiagnosis ? [store.workingDiagnosis] : [];
    });
    const applyWhen = (condition, fn) => {
      condition && fn();
    };
    const extractClinicalDataFromJSON = (observations) => {
      const data = {
        Temperature: 0,
        RR: 0,
        SatsAIr: 0,
        BirthWeight: 0,
        Gestation: 0,
        BloodSugarmg: 0,
        BloodSugarmmol: 0,
        DangerSigns: "",
        SignsRD: ""
      };
      const numericNameMap = /* @__PURE__ */ new Map([
        ["Respiratory rate", (value) => data.RR = value ?? 0],
        ["Pulse", (value) => data.RR = value ?? 0],
        ["RR", (value) => data.RR = value ?? 0],
        ["Oxygen saturation", (value) => data.SatsAIr = value ?? 0],
        ["Temperature (C)", (value) => data.Temperature = value ?? 0],
        ["Temperature", (value) => data.Temperature = value ?? 0],
        ["Weight (kg)", (value) => {
          const weightInGrams = value ? value * 1e3 : 0;
          data.BirthWeight = weightInGrams;
          data.AdmissionWeight = weightInGrams;
        }],
        ["Birth weight", (value) => data.BirthWeight = value ? value * 1e3 : 0],
        ["Current weight", (value) => data.AdmissionWeight = value ? value * 1e3 : 0],
        ["Admission weight", (value) => data.AdmissionWeight = value ? value * 1e3 : 0],
        ["Gestation in weeks", (value) => data.Gestation = value ?? 0],
        ["Gestation", (value) => data.Gestation = value ?? 0],
        [
          "Blood sugar",
          (value) => applyWhen(!!value, () => {
            data.BloodSugarmg = value;
            data.BloodSugarmmol = Number((value / 18.018).toFixed(2));
          })
        ]
      ]);
      const textNameMap = /* @__PURE__ */ new Map([
        [
          "Danger signs present",
          (value) => applyWhen(value.includes("capillary_refill"), () => data.DangerSigns = "Shock")
        ],
        [
          "Baby breathing status",
          (value) => {
            applyWhen(value.includes("not_breathing"), () => data.RespSR = "Apn");
            applyWhen(value.includes("gasping"), () => data.SignsRD = "Gasp");
            applyWhen(value.includes("hr_low"), () => data.DangerSigns = "Conv");
            applyWhen(value.includes("floppy"), () => data.Activity = "Lethargy");
            applyWhen(!data.RespSR && value.includes("difficulty_breathing"), () => data.RespSR = "DIB");
          }
        ],
        [
          "Signs of Respiratory Distress",
          (value) => {
            applyWhen(value.includes("Grunting"), () => data.SignsRD = "GR");
            applyWhen(value.includes("Nasal Flaring"), () => data.SignsRD = "NFL");
          }
        ]
      ]);
      observations.forEach((obs) => {
        const conceptNames = obs.concept?.concept_names || [];
        const primaryName = conceptNames.find((n) => n.name)?.name || obs.concept_name || "";
        const valNum = obs.value_numeric !== null && obs.value_numeric !== void 0 ? Number(obs.value_numeric) : null;
        const valText = obs.value_text || "";
        const numericHandler = numericNameMap.get(primaryName);
        const textHandler = textNameMap.get(primaryName);
        if (numericHandler && valNum !== null) {
          numericHandler(valNum);
        }
        if (textHandler && valText) {
          textHandler(valText);
        }
      });
      return data;
    };
    const getAllObservationsFromDemographicsStore = () => {
      if (!patient.value) {
        return [];
      }
      const allObservations = [];
      if (Array.isArray(patient.value.observations)) {
        allObservations.push(...patient.value.observations);
      }
      return allObservations;
    };
    const loadPatientClinicalData = async () => {
      try {
        let mergedData = {
          Temperature: null,
          RR: null,
          SatsAIr: null,
          Gestation: null,
          AdmissionWeight: null,
          BloodSugarmmol: null,
          SignsRD: "",
          DangerSigns: "",
          RespSR: "",
          Activity: "",
          ThompScore: 0,
          YColour: "N",
          Jaundice: "",
          Spine: ""
        };
        const allObservations = getAllObservationsFromDemographicsStore();
        if (allObservations.length > 0) {
          const extracted = extractClinicalDataFromJSON(allObservations);
          Object.keys(extracted).forEach((key) => {
            const newVal = extracted[key];
            const isValid = newVal !== null && newVal !== void 0 && newVal !== "";
            applyWhen(isValid, () => {
              mergedData[key] = newVal;
            });
          });
        }
        reset();
        return mergedData;
      } catch (error) {
        console.error("Error loading patient clinical data:", error);
      }
    };
    onMounted(() => {
      loadPatientClinicalData();
    });
    const clearWorkingDiagnosis = () => {
      store.setWorkingDiagnosis(null);
      validationError.value = null;
    };
    const removeDifferentialDiagnosis = (itemToRemove) => {
      store.removeDifferentialDiagnosis(itemToRemove);
      validationError.value = null;
    };
    const updateDifferentialOrder = (newOrder) => {
      store.setDifferentialDiagnoses(newOrder);
      validationError.value = null;
    };
    const handleAcceptSuggestion = (suggestion) => {
      acceptSuggestion(suggestion);
      validationError.value = null;
    };
    function validateForm() {
      const errors = {};
      const requiresWorkingDiagnosis = !store.workingDiagnosis;
      applyWhen(requiresWorkingDiagnosis, () => {
        const message = "A Primary Diagnosis (Working Diagnosis) must be confirmed before reviewing and submitting the final diagnosis.";
        validationError.value = message;
        errors.primaryDiagnosisRequired = message;
      });
      const unreviewedCount = suggestedDiagnoses.value.length;
      applyWhen(unreviewedCount > 0, () => {
        const suggestionList = suggestedDiagnoses.value.map((s) => s.label).join(", ");
        const message = `You have ${unreviewedCount} unreviewed suggestion${unreviewedCount > 1 ? "s" : ""}: ${suggestionList}. Please either add ${unreviewedCount > 1 ? "them" : "it"} to your differential diagnosis or reject ${unreviewedCount > 1 ? "them" : "it"} before proceeding.`;
        validationError.value = message;
        errors.unreviewedSuggestions = message;
      });
      applyWhen(Object.keys(errors).length === 0, () => {
        validationError.value = null;
      });
      return Object.keys(errors).length > 0 ? errors : null;
    }
    function resetForm() {
    }
    __expose({
      validateForm,
      resetForm
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Selected Working Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: workingDiagnosisModel.value,
            "allow-dragging": false,
            onRemoveItem: clearWorkingDiagnosis
          }, null, 8, ["items"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Selected Differential Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: unref(store).differentialDiagnoses,
            "is-differential": true,
            "allow-dragging": true,
            "highlight-id": unref(store).lastAddedValue,
            onRemoveItem: removeDifferentialDiagnosis,
            "onUpdate:items": updateDifferentialOrder
          }, null, 8, ["items", "highlight-id"]),
          withDirectives(createBaseVNode("div", { class: "validation-error" }, toDisplayString(validationError.value), 513), [
            [vShow, validationError.value]
          ])
        ]),
        createBaseVNode("p", _hoisted_4, [
          _cache[2] || (_cache[2] = createTextVNode(" Please consider the suggested diagnoses below. ", -1)),
          _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Click on a suggestion to add it to your differential diagnosis", -1)),
          _cache[4] || (_cache[4] = createTextVNode(", or click the reject button to reject it. ", -1)),
          withDirectives(createBaseVNode("span", _hoisted_5, [
            createVNode(_component_ion_icon, {
              icon: unref(alertCircleOutline),
              class: "warning-icon"
            }, null, 8, ["icon"]),
            createTextVNode(" You must review all " + toDisplayString(unref(suggestedDiagnoses).length) + " suggestion(s) before proceeding ", 1)
          ], 512), [
            [vShow, unref(suggestedDiagnoses).length > 0]
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("h3", _hoisted_7, [
            _cache[5] || (_cache[5] = createTextVNode(" Suggested Diagnosis ", -1)),
            withDirectives(createBaseVNode("span", { class: "suggestion-count-badge" }, toDisplayString(unref(suggestedDiagnoses).length) + " pending ", 513), [
              [vShow, unref(suggestedDiagnoses).length > 0]
            ])
          ]),
          withDirectives(createBaseVNode("div", _hoisted_8, [
            createBaseVNode("p", null, [
              createVNode(_component_ion_icon, {
                icon: unref(checkmarkCircleOutline),
                class: "success-icon"
              }, null, 8, ["icon"]),
              _cache[6] || (_cache[6] = createTextVNode(" All suggestions have been reviewed ", -1))
            ])
          ], 512), [
            [vShow, unref(suggestedDiagnoses).length === 0]
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(suggestedDiagnoses), (suggestion) => {
            return openBlock(), createElementBlock("div", {
              key: suggestion.value,
              class: "suggestion-item",
              onClick: ($event) => handleAcceptSuggestion(suggestion),
              role: "button",
              tabindex: "0",
              "aria-label": `Add ${suggestion.label} to differential diagnosis`,
              onKeydown: [
                withKeys(($event) => handleAcceptSuggestion(suggestion), ["enter"]),
                withKeys(withModifiers(($event) => handleAcceptSuggestion(suggestion), ["prevent"]), ["space"])
              ]
            }, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("p", _hoisted_11, [
                  createVNode(_component_ion_icon, {
                    icon: unref(addCircle),
                    class: "add-indicator-icon"
                  }, null, 8, ["icon"]),
                  createTextVNode(" " + toDisplayString(suggestion.label), 1)
                ]),
                createBaseVNode("p", _hoisted_12, toDisplayString(suggestion.details), 1)
              ]),
              createBaseVNode("button", {
                onClick: withModifiers(($event) => unref(rejectSuggestion)(suggestion), ["stop"]),
                class: "suggestion-action-button reject-button",
                title: `Reject ${suggestion.label}`,
                "aria-label": `Reject ${suggestion.label}`
              }, [
                createVNode(_component_ion_icon, {
                  icon: unref(closeCircleOutline),
                  class: "reject-icon"
                }, null, 8, ["icon"])
              ], 8, _hoisted_13)
            ], 40, _hoisted_9);
          }), 128))
        ]),
        withDirectives(createBaseVNode("div", _hoisted_14, [
          _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "rejected-title" }, "Rejected Diagnosis", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rejectedDiagnoses), (rejected) => {
            return openBlock(), createElementBlock("div", {
              key: rejected.value,
              class: "rejected-item"
            }, [
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("p", _hoisted_16, toDisplayString(rejected.label), 1),
                createBaseVNode("p", _hoisted_17, toDisplayString(rejected.details), 1)
              ]),
              createBaseVNode("button", {
                onClick: ($event) => unref(undoReject)(rejected),
                class: "suggestion-action-button undo-button",
                title: `Restore ${rejected.label}`,
                "aria-label": `Restore ${rejected.label} to suggestions`
              }, [
                createVNode(_component_ion_icon, {
                  icon: unref(refreshOutline),
                  class: "undo-icon"
                }, null, 8, ["icon"])
              ], 8, _hoisted_18)
            ]);
          }), 128))
        ], 512), [
          [vShow, unref(rejectedDiagnoses).length > 0]
        ])
      ]);
    };
  }
});

const SystemsSuggestions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-640839d5"]]);

const _hoisted_1 = { class: "diagnosis-infographic-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DiagnosisInfographicSection",
  props: {
    sectionId: {},
    configIndex: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    inject(neonatalDiagnosisFormKey);
    const sectionConfig = computed(() => {
      if (props.sectionId) {
        return neonatalDiagnosisSections.find((s) => s.id === props.sectionId);
      }
      if (typeof props.configIndex === "number") {
        return neonatalDiagnosisSections[props.configIndex];
      }
      return null;
    });
    const formData = computed(() => sectionConfig.value?.formData || []);
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: formData.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const DiagnosisInfographicSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f6f55066"]]);

class DiagnosisService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, EncounterTypeId.DIAGNOSIS, providerID);
  }
}
class NeonatalDiagnosisService extends AppEncounterService {
  diagnosis_service;
  constructor(patientID, providerID) {
    super(patientID, EncounterTypeId.DIAGNOSIS, providerID);
    this.diagnosis_service = new DiagnosisService(patientID, providerID);
  }
  computeParentObservation = async (conceptName) => ({
    tag: conceptName,
    obs: await this.diagnosis_service.buildValueCoded(conceptName, conceptName)
  });
  childObservation = async (conceptNamevalue) => await this.diagnosis_service.buildValueCoded(conceptNamevalue, conceptNamevalue);
}
const savePrimaryDiagnosis = async (service) => {
  try {
    const store = useDiagnosisStore();
    if (!store.workingDiagnosis) {
      toastDanger("Diagnosis is required");
      throw new Error("Diagnosis is required");
    }
    const primaryDiagnosisObservation = await service.computeParentObservation("Primary diagnosis");
    const primaryDiagnosisData = {
      primaryDiagnosisObservation
    };
    const obs_child_primary_diagnosis = await service.childObservation(store.workingDiagnosis.value);
    if (!obs_child_primary_diagnosis) {
      toastDanger("Primary diagnosis observations are required");
      throw new Error("Primary diagnosis observations are required");
    }
    if (obs_child_primary_diagnosis) {
      primaryDiagnosisData.primaryDiagnosisObservation.obs.child = [obs_child_primary_diagnosis];
    }
    const data = await ObservationService.addObsToEncounterPatient([primaryDiagnosisData.primaryDiagnosisObservation.obs], EncounterTypeId.DIAGNOSIS);
    await savePatientRecord(data);
    store.setWorkingDiagnosis(null);
    console.log("PrimaryDiagnosisData", primaryDiagnosisData);
  } catch (error) {
    throw error;
  }
};
const saveSecondaryDiagnoses = async (service) => {
  try {
    const store = useDiagnosisStore();
    const secondaryDiagnosisObservation = await service.computeParentObservation("Secondary diagnosis");
    const secondaryDiagnosisData = {
      secondaryDiagnosisObservation
    };
    const obs_children_secondary_diagnoses = store.differentialDiagnoses.map(async (diag) => {
      return await service.childObservation(diag.value);
    });
    const resolvedObsChildren = await Promise.all(obs_children_secondary_diagnoses);
    if (resolvedObsChildren.length > 0) {
      secondaryDiagnosisData.secondaryDiagnosisObservation.obs.child = resolvedObsChildren;
    } else {
      console.log("No secondary diagnoses to save.");
      return;
    }
    const data = await ObservationService.addObsToEncounterPatient([secondaryDiagnosisData.secondaryDiagnosisObservation.obs], EncounterTypeId.DIAGNOSIS);
    await savePatientRecord(data);
    store.setDifferentialDiagnoses([]);
    console.log("SecondaryDiagnosisData", secondaryDiagnosisData);
  } catch (error) {
    throw error;
  }
};
const saveDiagnosis = async () => {
  try {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const userStore = useUserStore();
    const neonatal_diagnosis_service = new NeonatalDiagnosisService(patient.value.patientID, userStore.user_ID);
    await Promise.all([
      savePrimaryDiagnosis(neonatal_diagnosis_service),
      saveSecondaryDiagnoses(neonatal_diagnosis_service)
    ]);
    toastSuccess("Diagnosis saved successfully");
  } catch (error) {
    console.error("FAILED to save diagnosis:", error);
    toastDanger("Failed to save diagnosis. Please try again.");
  }
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Diagnosis",
  setup(__props) {
    const currentOpenStepper = ref("1");
    const router = useRouter();
    const diagnosisStore = useDiagnosisStore();
    const diagnosisFormData = computed(() => ({
      workingDiagnosis: diagnosisStore.workingDiagnosis,
      differentialDiagnoses: diagnosisStore.differentialDiagnoses,
      differentialDiagnosesFinal: diagnosisStore.differentialDiagnoses,
      acceptedDiagnosesOrdered: diagnosisStore.differentialDiagnoses,
      diagnosisNotes: diagnosisStore.diagnosisNotes,
      rejectedSuggestedDiagnoses: diagnosisStore.rejectedSuggestedDiagnoses
    }));
    provide(neonatalDiagnosisFormKey, diagnosisFormData);
    const buildStepperData = () => {
      return neonatalDiagnosisSections.map((section, index) => {
        if (section.id === "DIAGNOSIS_SELECTION") {
          return {
            title: section.title,
            value: String(index + 1),
            component: DiagnosisSelection,
            sectionId: section.id
          };
        }
        if (section.id === "DIAGNOSIS_SUGGESTIONS") {
          return {
            title: section.title,
            value: String(index + 1),
            component: SystemsSuggestions,
            sectionId: section.id
          };
        }
        if (section.id === "DIAGNOSIS_SUMMARY") {
          return {
            title: section.title,
            value: String(index + 1),
            component: SummarySection,
            sectionId: section.id
          };
        }
        return {
          title: section.title,
          value: String(index + 1),
          component: DiagnosisInfographicSection,
          sectionId: section.id
        };
      });
    };
    const stepperData = buildStepperData();
    const wizardData = ref(
      stepperData.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === stepperData.length - 1 ? "last_step" : ""
      }))
    );
    const updateStatus = (event) => {
      if (event && event.value) {
        wizardData.value.forEach((item, index) => {
          if (event.value === (index + 1).toString()) {
            item.class = "open_step common_step";
            item.checked = false;
          } else if (index < parseInt(event.value) - 1) {
            item.class = "common_step color_white";
            item.checked = true;
          } else {
            item.class = "common_step";
            item.checked = false;
          }
        });
      }
    };
    const getSaveFnForStep = (stepIndex) => {
      const summaryIndex = stepperData.length - 1;
      if (stepIndex === summaryIndex) {
        return async () => {
          await saveDiagnosis();
          setTimeout(() => {
            router.push("/neonatal/checkpoint");
          }, 800);
        };
      }
      return () => Promise.resolve();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), { class: "neonatal-enrollment-page" }, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(NeonatalStepper, {
                wizardData: wizardData.value,
                StepperData: unref(stepperData),
                stepperTitle: "Diagnosis",
                openStepper: currentOpenStepper.value,
                backUrl: "/patient-profile",
                getSaveFunction: getSaveFnForStep,
                onUpdateStatus: updateStatus,
                "flow-type": "diagnosis",
                "show-componet-title": true,
                sectionsConfig: unref(neonatalDiagnosisSections)
              }, null, 8, ["wizardData", "StepperData", "openStepper", "sectionsConfig"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
