import { u as useDemographicsStore, z as StandardForm, _ as _export_sfc, E as EncounterService, S as Service, a6 as useUserStore, G as toastSuccess, x as toastDanger, aY as AppEncounterService, T as Toolbar } from '../index-6vvaor6U.js';
import { s as defineComponent, f as ref, w as watch, y as openBlock, z as createElementBlock, A as createVNode, C as createBaseVNode, D as toDisplayString, O as createBlock, B as withCtx, a4 as normalizeClass, F as unref, H as createCommentVNode, cG as mergeProps, fe as draggable, c as computed, a2 as onMounted, a5 as createTextVNode, J as Fragment, R as renderList, bR as withKeys, a8 as withModifiers, aL as useRouter, aG as IonContent, bu as IonPage } from './vendor-DlXvc2CI.js';
import { a as useDiagnosisStore, b as useSuggestedDiagnosisStore, N as NeonatalStepper } from './NeonatalStepper-Zj-ZVhYE.js';
import { s as storeToRefs } from './pinia-DxIh5T-z.js';
import { I as IMAGES } from './images-DT_odrOi.js';

const diagnosisOptions = [
  { label: "Hypoglycaemia (symptomatic)", value: "Hypoglycaemia1" },
  { label: "Abscess", value: "Abscess" },
  { label: "Fever", value: "Fever" },
  { label: "Birth Asphyxia", value: "Asphyxia" },
  { label: "Neonatal Sepsis (Early onset - Symptomatic)", value: "Neonatal Sepsis - Early Onset" },
  { label: "Prematurity with Respiratory Distress", value: "Prematurity with RDS" },
  { label: "Suspected Neonatal Sepsis", value: "Sepsis_Sus" },
  { label: "Possible Meconium Aspiration", value: "Meconium Aspiration" },
  { label: "Possible Meconium Aspiration", value: "MAP" },
  { label: "Suspected neonatal sepsis", value: "NSep" },
  { label: "Difficulty Feeding", value: "DF" },
  { label: "Dehydration", value: "Dhyd" },
  { label: "Congenital Heart Disease", value: "CHD" },
  { label: "Anaemia", value: "An" },
  { label: "Congenital Abnormality", value: "Cong" },
  { label: "Pneumonia / Bronchiolitis", value: "PnBch" },
  { label: "Transient Tachypnoea of Newborn (TTN)", value: "TTN" },
  { label: "Umbilical Hernia", value: "UH" },
  { label: "Meningitis", value: "Mgts" },
  { label: "Ambiguous Genetalia", value: "AG" },
  { label: "Untreated Maternal Syphilis", value: "UMS" },
  { label: "Abdominal obstruction", value: "AbObs" },
  { label: "Risk factors for sepsis (Not symptomatic)", value: "Risk" },
  { label: "Birth Trauma", value: "BT" },
  { label: "Apnoea of prematurity", value: "Apn" },
  { label: "Birth Asphyxia", value: "BA" },
  { label: "Convulsions", value: "Conv" },
  { label: "Low Birth Weight (1500-2499g)", value: "LBW" },
  { label: "Very Low Birth Weight (1000-1499g)", value: "VLBW" },
  { label: "Extremely Low Birth Weight (<1000g)", value: "ExLBW" },
  { label: "High Birth Weight (>4000g at birth)", value: "HBW" },
  { label: "Mild Hypothermia", value: "MiHypo" },
  { label: "Moderate Hypothermia", value: "ModHypo" },
  { label: "Severe Hypothermia", value: "SHypo" },
  { label: "Hyperthermia", value: "Hyperth" },
  { label: "Premature (32-36 weeks)", value: "Prem" },
  { label: "Very Premature (28-31 weeks)", value: "VPrem" },
  { label: "Extremely Premature (<28 weeks)", value: "ExPrem" },
  { label: "Hypoglycaemia (symptomatic)", value: "HypogSy" },
  { label: "Hypoglycaemia (NOT symptomatic)", value: "HypogAs" },
  { label: "At Risk of Hypoglycaemia", value: "RiHypog" },
  { label: "HIV Unknown", value: "HIVU" },
  { label: "HIV Low Risk", value: "HIVLR" },
  { label: "HIV High Risk", value: "HIVHR" },
  { label: "Physiological Jaundice", value: "MJ" },
  { label: "Pathological Jaundice", value: "DJ" },
  { label: "Prolonged Jaundice", value: "PJaundice" },
  { label: "Hypoxic Ischaemic Encephalopathy", value: "HIE" },
  { label: "Suspected Hypoxic Ischaemic Encephalopathy", value: "sHIE" },
  { label: "Prematurity with Respiratory Distress", value: "PremRD" },
  { label: "Term baby with Respiratory Distress", value: "TermRD" },
  { label: "Gastroschisis", value: "GSchis" },
  { label: "Omphalocele", value: "Omph" },
  { label: "Cleft lip and/or palate with RD", value: "CleftRD" },
  { label: "Cleft lip", value: "CleftLip" },
  { label: "Cleft lip and/or palate", value: "CleftLipPalate" },
  { label: "Myelomeningocele", value: "Myelo" },
  { label: "Congenital dislocation of the hip (CDH)", value: "CDH" },
  { label: "Moderate Talipes (club foot)", value: "MoTalipes" },
  { label: "Mild Talipes (club foot)", value: "MiTalipes" }
];
const neonatalDiagnosisSections = [
  {
    title: "Diagnosis Selection",
    subtitle: "Select the diagnoses you think the baby has (you can select more than 1)",
    formData: [
      {
        componentType: "searchableDropdown",
        header: "Primary Diagnosis (Working Diagnosis)",
        name: "workingDiagnosis",
        placeholder: "Search for working diagnosis",
        dropdownHeader: "Select ONE",
        mode: "neonatal",
        bold: true,
        options: diagnosisOptions,
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
        options: diagnosisOptions,
        padding: true
      }
    ]
  }
];

const _hoisted_1$2 = { class: "diagnosis-selection-panel" };
const SECTION_INDEX = 0;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DiagnosisSelection",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const sectionConfig = neonatalDiagnosisSections[SECTION_INDEX];
    const diagnosisStore = useDiagnosisStore();
    const formRef = ref(null);
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
        diagnosisStore.setWorkingDiagnosis(values.workingDiagnosis);
      }
      if (values.differentialDiagnoses !== void 0) {
        diagnosisStore.setDifferentialDiagnoses(Array.isArray(values.differentialDiagnoses) ? values.differentialDiagnoses : []);
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
        console.log("Patient data updated:", newPatient);
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
      validateForm: () => formRef.value?.validateForm?.() || null,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(StandardForm, {
          formData: formData.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const DiagnosisSelection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3518ad66"]]);

const _hoisted_1$1 = { class: "selected-diagnoses-list" };
const _hoisted_2$1 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = {
  key: 1,
  class: "rank-number"
};
const _hoisted_5$1 = { class: "item-label" };
const _hoisted_6$1 = ["onClick", "aria-label", "title"];
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
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
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
              }, [
                createBaseVNode("img", {
                  src: unref(IMAGES).icons.dragIcon,
                  alt: "Drag to reorder",
                  class: "drag-icon"
                }, null, 8, _hoisted_3$1)
              ], 2)) : createCommentVNode("", true),
              __props.isDifferential ? (openBlock(), createElementBlock("span", _hoisted_4$1, "#" + toDisplayString(index + 1), 1)) : createCommentVNode("", true),
              createBaseVNode("span", _hoisted_5$1, toDisplayString(item.label), 1),
              createBaseVNode("button", {
                onClick: ($event) => removeItem(item),
                class: "remove-button",
                type: "button",
                "aria-label": "Remove " + item.label,
                title: "Remove " + item.label
              }, [..._cache[1] || (_cache[1] = [
                createBaseVNode("span", { class: "trash-icon" }, "🗑️", -1)
              ])], 8, _hoisted_6$1)
            ], 2)
          ]),
          _: 1
        }, 16, ["modelValue"]))
      ]);
    };
  }
});

const SelectedDiagnosisDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4d12549a"]]);

const hasRespiratoryDistress = (data) => {
  return data.RR > 60 || data.DangerSigns === "Grun" || data.DangerSigns === "Cyan" || data.SatsAIr < 90 || data.SatsO2 < 90 || data.RespSR !== "" || data.SignsRD !== "";
};
const hasMeconiumRisk = (data) => {
  return data.MecPresent === "Yes";
};
function getSuggestedDiagnoses(data) {
  if (!data) return [];
  const suggestions = [];
  if (data.EDLIZSummaryTableScore > 0.9) {
    suggestions.push({
      label: "Suspected neonatal sepsis",
      value: "NSep",
      severity: 1,
      details: `EDLIZ risk score of ${data.EDLIZSummaryTableScore} is high, triggering the sepsis protocol.`
    });
  }
  if (hasRespiratoryDistress(data) && hasMeconiumRisk(data)) {
    suggestions.push({
      label: "Possible Meconium Aspiration",
      value: "MA",
      severity: 1,
      details: `Respiratory distress present with meconium risk factors. Requires urgent stabilization.`
    });
  }
  if (data.DangerSigns === "Conv" || data.SymptomReviewNeurology === "Convulsions" || data.Activity === "Convulsions" || data.AdmReason === "Convulsions") {
    suggestions.push({
      label: "Convulsions",
      value: "Conv",
      severity: 1,
      details: `Convulsions have been observed on examination or reported in history.`
    });
  }
  const isHypoSymp = (data.BloodSugarmmol < 2.5 || data.BloodSugarmg < 45) && data.HypoSymptoms === true;
  if (isHypoSymp) {
    suggestions.push({
      label: "Hypoglycaemia (symptomatic)",
      value: "HypogSy",
      severity: 1,
      details: `Blood sugar is low and the baby is showing symptoms.`
    });
  }
  if (data.BirthWeight < 1e3) {
    suggestions.push({
      label: "Extremely Low Birth Weight (<1000g)",
      value: "ExLBW",
      severity: 1,
      details: `Birth weight is critically low at ${data.BirthWeight}g.`
    });
  }
  if (data.Temperature < 32) {
    suggestions.push({
      label: "Severe Hypothermia",
      value: "SHypo",
      severity: 1,
      details: `Baby's temperature is critically low (< 32.0°C).`
    });
  }
  if (data.Gestation < 28) {
    suggestions.push({
      label: "Extremely Premature (<28 weeks)",
      value: "ExPrem",
      severity: 1,
      details: `Gestation is ${data.Gestation} weeks, requiring immediate high-level care.`
    });
  }
  if (data.ThompScore >= 11) {
    suggestions.push({
      label: "Hypoxic Ischaemic Encephalopathy",
      value: "HIE",
      severity: 1,
      details: `Thompson Score is ${data.ThompScore} or higher, indicating severe encephalopathy.`
    });
  }
  if (data.Gestation < 37 && hasRespiratoryDistress(data)) {
    suggestions.push({
      label: "Prematurity with Respiratory Distress",
      value: "PremRD",
      severity: 1,
      details: `Preterm infant (${data.Gestation} weeks) showing signs of respiratory distress.`
    });
  }
  if (data.Gestation >= 37 && hasRespiratoryDistress(data)) {
    suggestions.push({
      label: "Term baby with Respiratory Distress",
      value: "TermRD",
      severity: 1,
      details: `Term infant (${data.Gestation} weeks) showing signs of respiratory distress.`
    });
  }
  if (data.Gestation < 37 && data.RespSR === "Apn") {
    suggestions.push({ label: "Apnoea of prematurity", value: "Apn", severity: 2, details: "Apnoeic episodes observed in a premature infant." });
  }
  if (data.BirthWeight > 999 && data.BirthWeight < 1500) {
    suggestions.push({
      label: "Very Low Birth Weight (1000-1499g)",
      value: "VLBW",
      severity: 2,
      details: `Birth weight is between 1000g and 1499g.`
    });
  }
  if (data.Temperature > 31.9 && data.Temperature < 36) {
    suggestions.push({
      label: "Moderate Hypothermia",
      value: "ModHypo",
      severity: 2,
      details: `Baby's temperature is low (32.0°C to 35.9°C).`
    });
  }
  if (data.Temperature > 37.5) {
    suggestions.push({
      label: "Hyperthermia",
      value: "Hyperth",
      severity: 2,
      details: `Baby's temperature is high (> 37.5°C).`
    });
  }
  if (data.Gestation > 31.9 && data.Gestation < 36.1) {
    suggestions.push({
      label: "Premature (32-36 weeks)",
      value: "Prem",
      severity: 2,
      details: `Baby's gestation is ${data.Gestation} weeks.`
    });
  }
  const isHypoAsymp = (data.BloodSugarmmol < 2.5 || data.BloodSugarmg < 45) && data.HypoSymptoms === false;
  if (isHypoAsymp) {
    suggestions.push({
      label: "Hypoglycaemia (NOT symptomatic)",
      value: "HypogAs",
      severity: 2,
      details: `Blood sugar is low, but baby is currently asymptomatic.`
    });
  }
  if (data.ThompScore > 0 && data.ThompScore <= 10) {
    suggestions.push({
      label: "Suspected Hypoxic Ischaemic Encephalopathy",
      value: "sHIE",
      severity: 2,
      details: `Thompson Score is ${data.ThompScore}, indicating suspected encephalopathy.`
    });
  }
  if (data.GSCvsOM === "GSCH") {
    suggestions.push({ label: "Gastroschisis", value: "GSchis", severity: 2, details: "Abdominal wall defect observed." });
  }
  if (data.GSCvsOM === "OMPH") {
    suggestions.push({ label: "Omphalocele", value: "Omph", severity: 2, details: "Abdominal wall defect observed." });
  }
  const hasCleft = data.Palate === "Lip" || data.Palate === "Cleft" || data.Palate === "LipPalate";
  if (hasCleft && hasRespiratoryDistress(data)) {
    suggestions.push({
      label: "Cleft lip and/or palate with RD",
      value: "CleftRD",
      severity: 2,
      details: "Cleft observed; respiratory distress suggests potential airway compromise."
    });
  }
  if (data.EDLIZSummaryTableScore > 0 && data.EDLIZSummaryTableScore <= 0.9) {
    suggestions.push({
      label: "Risk factors for sepsis (Not symptomatic)",
      value: "Risk",
      severity: 3,
      details: `EDLIZ risk score of ${data.EDLIZSummaryTableScore} indicates risk factors are present.`
    });
  }
  if (data.BirthWeight > 1499 && data.BirthWeight < 2500) {
    suggestions.push({
      label: "Low Birth Weight (1500-2499g)",
      value: "LBW",
      severity: 3,
      details: `Birth weight is between 1500g and 2499g.`
    });
  }
  if (data.BirthWeight > 4e3) {
    suggestions.push({
      label: "High Birth Weight (>4000g at birth)",
      value: "HBW",
      severity: 3,
      details: `Birth weight is greater than 4000g.`
    });
  }
  if (data.Temperature > 35.9 && data.Temperature < 36.5) {
    suggestions.push({
      label: "Mild Hypothermia",
      value: "MiHypo",
      severity: 3,
      details: `Baby's temperature is slightly low (36.0°C to 36.4°C).`
    });
  }
  const isAtRiskHypo = data.BirthWeight < 2500 || data.BirthWeight > 4e3 || data.Gestation < 37 || data.PregConditions === "DM" || data.ANSteroids === "Y" || data.AdmReason === "NE";
  if (isAtRiskHypo) {
    suggestions.push({
      label: "At Risk of Hypoglycaemia",
      value: "RiHypog",
      severity: 3,
      details: "Risk factors like low birth weight, prematurity, or maternal diabetes present."
    });
  }
  const isHIVUnknown = data.MatHIVtest === false;
  const isHIVLowRisk = data.MatHIVtest === true && (data.HIVtestResult === "R" || data.HIVtestResult === "U") && (data.LengthHAART === "1stTrim" || data.LengthHAART === "2ndTrim" || data.LengthHAART === "3rdTrim");
  const isHIVHighRisk = data.MatHIVtest === true && (data.HIVtestResult === "R" || data.HIVtestResult === "U") && (data.HAART === "N" || data.LengthHAART === "Late");
  if (isHIVUnknown) {
    suggestions.push({ label: "HIV Unknown", value: "HIVU", severity: 3, details: "Maternal HIV status is unknown or untested." });
  }
  if (isHIVLowRisk) {
    suggestions.push({ label: "HIV Low Risk", value: "HIVLR", severity: 3, details: "Maternal HIV reactive/unknown, but HAART started early." });
  }
  if (isHIVHighRisk) {
    suggestions.push({ label: "HIV High Risk", value: "HIVHR", severity: 3, details: "Maternal HIV reactive/unknown, with no/late HAART." });
  }
  if (data.Palate === "Lip") {
    suggestions.push({ label: "Cleft lip", value: "CleftLip", severity: 3, details: "Cleft lip observed." });
  }
  if (data.Palate === "Cleft") {
    suggestions.push({
      label: "Cleft lip and/or palate",
      value: "CleftLipPalate",
      severity: 3,
      details: "Cleft palate/lip and palate observed."
    });
  }
  if (data.Spine === "NTD") {
    suggestions.push({
      label: "Myelomeningocele",
      value: "Myelo",
      severity: 3,
      details: "Neural Tube Defect (NTD) observed on the spine or head."
    });
  }
  const isPathoJaundice = data.YColour === "Y" && data.Age < 24 || data.YColour === "Y" && data.Age >= 24 && (data.Age < 336 && data.Gestation > 36.6 || data.Age < 504 && data.Gestation < 37) && (data.Jaundice === "DJ" || data.Temperature > 37 || data.BirthWeight < 2500 || data.Colour === "White");
  if (isPathoJaundice) {
    suggestions.push({
      label: "Pathological Jaundice",
      value: "DJ",
      severity: 4,
      details: "Jaundice with signs of pathology (early onset, deep jaundice, or risk factors)."
    });
  }
  const isPhysioJaundice = data.Jaundice === "MJ" && data.Age > 24 && (data.Gestation > 36.6 && data.Age < 336 || data.Gestation < 37 && data.Age < 504) && !isPathoJaundice;
  if (isPhysioJaundice) {
    suggestions.push({
      label: "Physiological Jaundice",
      value: "MJ",
      severity: 5,
      details: "Common, non-pathological jaundice (appears > 24 hours, no danger signs)."
    });
  }
  const isProlongedJaundice = data.YColour === "Y" && (data.Age > 336 && data.Gestation > 36.9 || data.Age > 504 && data.Gestation < 36.6);
  if (isProlongedJaundice) {
    suggestions.push({
      label: "Prolonged Jaundice",
      value: "PJaundice",
      severity: 5,
      details: "Jaundice persisting beyond 14 days term or >21 days preterm infants."
    });
  }
  const isCDH = data.Presentation === "Breech" || data.MatComorbidities === "CDH" || data.MSKproblems === "Legs" || data.Skin === "Folds" || data.Ortolani === "Yes";
  if (isCDH) {
    suggestions.push({
      label: "Congenital dislocation of the hip (CDH)",
      value: "CDH",
      severity: 6,
      details: "Risk factors (e.g., breech) or positive Ortolani/Barlow test."
    });
  }
  if (data.TalipesSev === "No") {
    suggestions.push({
      label: "Moderate Talipes (club foot)",
      value: "MoTalipes",
      severity: 7,
      details: "Foot held in abnormal position and cannot be passively corrected."
    });
  }
  if (data.TalipesSev === "Yes") {
    suggestions.push({
      label: "Mild Talipes (club foot)",
      value: "MiTalipes",
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
  const rejectedDiagnoses = ref([]);
  const allSuggestions = computed(() => {
    return getSuggestedDiagnoses(clinicalData.value);
  });
  const suggestedDiagnoses = computed(() => {
    return allSuggestions.value.filter((suggestion) => {
      const isInDifferential = store.differentialDiagnoses.some((item) => item.value === suggestion.value);
      const isRejected2 = rejectedDiagnoses.value.some((item) => item.value === suggestion.value);
      return !isInDifferential && !isRejected2;
    });
  });
  const acceptSuggestion = (suggestion) => {
    store.addDifferentialDiagnosis({
      label: suggestion.label,
      value: suggestion.value,
      severity: suggestion.severity
    });
  };
  const reset = () => {
    console.log("Resetting with clinical data:", clinicalData.value);
    rejectedDiagnoses.value = [];
    allSuggestions.value;
    suggestedDiagnoses.value;
  };
  const rejectSuggestion = (suggestion) => {
    rejectedDiagnoses.value.push(suggestion);
  };
  const undoReject = (rejectedItem) => {
    rejectedDiagnoses.value = rejectedDiagnoses.value.filter((item) => item.value !== rejectedItem.value);
  };
  const clearRejections = () => {
    rejectedDiagnoses.value = [];
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

const _hoisted_1 = { class: "systems-suggestions-panel" };
const _hoisted_2 = { class: "diagnosis-section" };
const _hoisted_3 = { class: "diagnosis-section" };
const _hoisted_4 = {
  key: 0,
  class: "validation-error"
};
const _hoisted_5 = { class: "suggestion-instruction" };
const _hoisted_6 = {
  key: 0,
  class: "pending-review-notice"
};
const _hoisted_7 = { class: "suggested-diagnosis-section" };
const _hoisted_8 = { class: "suggested-title" };
const _hoisted_9 = {
  key: 0,
  class: "suggestion-count-badge"
};
const _hoisted_10 = {
  key: 0,
  class: "empty-suggestions"
};
const _hoisted_11 = ["onClick", "aria-label", "onKeydown"];
const _hoisted_12 = { class: "suggestion-content" };
const _hoisted_13 = { class: "suggestion-label" };
const _hoisted_14 = { class: "suggestion-details" };
const _hoisted_15 = ["onClick", "title", "aria-label"];
const _hoisted_16 = {
  key: 0,
  class: "rejected-diagnosis-section"
};
const _hoisted_17 = { class: "rejected-content" };
const _hoisted_18 = { class: "rejected-label" };
const _hoisted_19 = { class: "rejected-details" };
const _hoisted_20 = ["onClick", "title", "aria-label"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SystemsSuggestions",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const store = useDiagnosisStore();
    const suggestedDiagnosisStore = useSuggestedDiagnosisStore();
    suggestedDiagnosisStore.resetPatientData();
    suggestedDiagnosisStore.setPatientData();
    const patientData = ref({
      Temperature: null,
      RR: null,
      SatsAIr: null,
      BirthWeight: null,
      BloodSugarmmol: null,
      SignsRD: "",
      DangerSigns: "",
      RespSR: "",
      Activity: "",
      ThompScore: 0,
      YColour: "N",
      Jaundice: "",
      Spine: ""
    });
    const { suggestedDiagnoses, rejectedDiagnoses, acceptSuggestion, rejectSuggestion, undoReject, reset } = useDiagnosisSuggestions(patientData);
    const validationError = ref(null);
    const workingDiagnosisModel = computed(() => {
      return store.workingDiagnosis ? [store.workingDiagnosis] : [];
    });
    const extractClinicalDataFromJSON = (observations) => {
      const data = {
        Temperature: 0,
        RR: 0,
        SatsAIr: 0,
        BirthWeight: 0,
        BloodSugarmg: 0,
        BloodSugarmmol: 0,
        DangerSigns: "",
        SignsRD: ""
      };
      observations.forEach((obs) => {
        const conceptNames = obs.concept?.concept_names || [];
        const primaryName = conceptNames.find((n) => n.name)?.name || "";
        const valNum = obs.value_numeric !== null ? Number(obs.value_numeric) : null;
        const valText = obs.value_text || "";
        switch (primaryName) {
          case "Respiratory rate":
          case "Pulse":
          case "RR":
            data.RR = valNum ?? 0;
            break;
          case "Oxygen saturation":
            data.SatsAIr = valNum ?? 0;
            break;
          case "Temperature (C)":
            data.Temperature = valNum ?? 0;
            break;
          case "Weight (kg)":
          case "Birth weight":
            console.log("Processing weight:", valNum);
            data.BirthWeight = valNum ? valNum * 1e3 : 0;
            break;
          case "Danger signs present":
            if (valText.includes("capillary_refill")) {
              data.DangerSigns = "Shock";
            }
            break;
          case "Baby breathing status":
            if (valText.includes("not_breathing")) data.RespSR = "Apn";
            if (valText.includes("gasping")) data.SignsRD = "Gasp";
            if (valText.includes("hr_low")) data.DangerSigns = "Conv";
            if (valText.includes("floppy")) data.Activity = "Lethargy";
            if (!data.RespSR && valText.includes("difficulty_breathing")) data.RespSR = "DIB";
            break;
          case "Blood sugar":
            if (valNum) {
              data.BloodSugarmg = valNum;
              data.BloodSugarmmol = Number((valNum / 18.018).toFixed(2));
            }
            break;
          case "Signs of Respiratory Distress":
            if (valText.includes("Grunting")) data.SignsRD = "GR";
            if (valText.includes("Nasal Flaring")) data.SignsRD = "NFL";
            break;
        }
      });
      return data;
    };
    const loadPatientClinicalData = async () => {
      try {
        const encounters = await EncounterService.getAllEncounters({
          patient_id: patient.value?.patientID,
          program_id: Service.getProgramID()
        });
        let mergedData = {
          Temperature: null,
          RR: null,
          SatsAIr: null,
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
        encounters.forEach((encounter) => {
          console.log("Processing encounter:", encounter);
          const extracted = extractClinicalDataFromJSON(encounter.observations);
          Object.keys(extracted).forEach((key) => {
            const newVal = extracted[key];
            if (newVal !== null && newVal !== void 0 && newVal !== "" && newVal !== 0) {
              mergedData[key] = newVal;
            }
          });
        });
        console.log("Loading new patient data:", mergedData);
        patientData.value = mergedData;
        await new Promise((resolve) => setTimeout(resolve, 0));
        reset();
        console.log("Patient data loaded and suggestions reset");
        return patientData.value;
      } catch (error) {
        console.error("Error fetching or merging encounters:", error);
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
      const hasWorkingDiagnosis = !!store.workingDiagnosis;
      if (!hasWorkingDiagnosis) {
        const message = "A Primary Diagnosis (Working Diagnosis) must be confirmed before reviewing and submitting the final diagnosis.";
        validationError.value = message;
        errors.primaryDiagnosisRequired = message;
        console.error("Validation Error: Primary Diagnosis removed or missing at review stage.");
      }
      const hasUnreviewedSuggestions = suggestedDiagnoses.value.length > 0;
      if (hasUnreviewedSuggestions) {
        const count = suggestedDiagnoses.value.length;
        const suggestionList = suggestedDiagnoses.value.map((s) => s.label).join(", ");
        const message = `You have ${count} unreviewed suggestion${count > 1 ? "s" : ""}: ${suggestionList}. Please either add ${count > 1 ? "them" : "it"} to your differential diagnosis or reject ${count > 1 ? "them" : "it"} before proceeding.`;
        validationError.value = message;
        errors.unreviewedSuggestions = message;
        console.error(`Validation Error: ${count} unreviewed suggestion(s) remaining.`, suggestedDiagnoses.value);
      }
      if (Object.keys(errors).length === 0) {
        validationError.value = null;
        console.log("Validation Success: All suggestions reviewed and working diagnosis confirmed.");
      }
      return Object.keys(errors).length > 0 ? errors : null;
    }
    function resetForm() {
    }
    __expose({
      validateForm,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Your Selected Working Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: workingDiagnosisModel.value,
            "allow-dragging": false,
            onRemoveItem: clearWorkingDiagnosis
          }, null, 8, ["items"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Your Selected Differential Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: unref(store).differentialDiagnoses,
            "is-differential": true,
            "allow-dragging": true,
            "highlight-id": unref(store).lastAddedValue,
            onRemoveItem: removeDifferentialDiagnosis,
            "onUpdate:items": updateDifferentialOrder
          }, null, 8, ["items", "highlight-id"]),
          validationError.value ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(validationError.value), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("p", _hoisted_5, [
          _cache[2] || (_cache[2] = createTextVNode(" Please consider the suggested diagnoses below. ", -1)),
          _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Click on a suggestion to add it to your differential diagnosis", -1)),
          _cache[4] || (_cache[4] = createTextVNode(", or click the ❌ button to reject it. ", -1)),
          unref(suggestedDiagnoses).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_6, " ⚠️ You must review all " + toDisplayString(unref(suggestedDiagnoses).length) + " suggestion(s) before proceeding. ", 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("h3", _hoisted_8, [
            _cache[5] || (_cache[5] = createTextVNode(" Suggested Diagnosis ", -1)),
            unref(suggestedDiagnoses).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(unref(suggestedDiagnoses).length) + " pending ", 1)) : createCommentVNode("", true)
          ]),
          unref(suggestedDiagnoses).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [..._cache[6] || (_cache[6] = [
            createBaseVNode("p", null, "✓ All suggestions have been reviewed", -1)
          ])])) : createCommentVNode("", true),
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
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("p", _hoisted_13, [
                  _cache[7] || (_cache[7] = createBaseVNode("span", { class: "add-indicator" }, "+", -1)),
                  createTextVNode(" " + toDisplayString(suggestion.label), 1)
                ]),
                createBaseVNode("p", _hoisted_14, toDisplayString(suggestion.details), 1)
              ]),
              createBaseVNode("button", {
                onClick: withModifiers(($event) => unref(rejectSuggestion)(suggestion), ["stop"]),
                class: "suggestion-action-button reject-button",
                title: `Reject ${suggestion.label}`,
                "aria-label": `Reject ${suggestion.label}`
              }, [..._cache[8] || (_cache[8] = [
                createBaseVNode("span", { class: "cross-icon" }, "❌", -1)
              ])], 8, _hoisted_15)
            ], 40, _hoisted_11);
          }), 128))
        ]),
        unref(rejectedDiagnoses).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
          _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "rejected-title" }, "Rejected Diagnosis", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rejectedDiagnoses), (rejected) => {
            return openBlock(), createElementBlock("div", {
              key: rejected.value,
              class: "rejected-item"
            }, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("p", _hoisted_18, toDisplayString(rejected.label), 1),
                createBaseVNode("p", _hoisted_19, toDisplayString(rejected.details), 1)
              ]),
              createBaseVNode("button", {
                onClick: ($event) => unref(undoReject)(rejected),
                class: "suggestion-action-button undo-button",
                title: `Restore ${rejected.label}`,
                "aria-label": `Restore ${rejected.label} to suggestions`
              }, [..._cache[9] || (_cache[9] = [
                createBaseVNode("span", { class: "undo-icon" }, "↻", -1)
              ])], 8, _hoisted_20)
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});

const SystemsSuggestions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1f9a3148"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DiagnosisSummary",
  setup(__props, { expose: __expose }) {
    const store = useDiagnosisStore();
    const formRef = ref(null);
    const formData = computed(() => {
      return [
        {
          componentType: "summaryField",
          name: "diagnosisSummary",
          builder: () => {
            const rows = [];
            if (store.workingDiagnosis) {
              rows.push({
                label: "Working Diagnosis",
                value: store.workingDiagnosis.label,
                section: "Primary Diagnosis"
              });
            } else {
              rows.push({
                label: "Working Diagnosis",
                value: "None selected",
                section: "Primary Diagnosis"
              });
            }
            if (store.differentialDiagnoses && store.differentialDiagnoses.length > 0) {
              store.differentialDiagnoses.forEach((p, index) => {
                rows.push({
                  label: `Differential Diagnosis ${index + 1}`,
                  value: p.label,
                  section: "Differential Diagnosis"
                });
              });
            } else {
              rows.push({
                label: "Differential Diagnoses",
                value: "None selected",
                section: "Differential Diagnosis"
              });
            }
            if (store.diagnosisNotes) {
              rows.push({
                label: "Notes",
                value: store.diagnosisNotes,
                section: "Additional Information"
              });
            }
            return rows;
          }
        }
      ];
    });
    __expose({
      getFormValues: () => ({})
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: formData.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const DiagnosisSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c302c6e9"]]);

class DiagnosisService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 41, providerID);
  }
}
class NeonatalDiagnosisService extends AppEncounterService {
  diagnosis_service;
  constructor(patientID, providerID) {
    super(patientID, 41, providerID);
    this.diagnosis_service = new DiagnosisService(patientID, providerID);
  }
  /**
   * Ensures an encounter ID is set for the current service instance.
   * It creates a new encounter only if one does not already exist (i.e., this.encounterID is null/undefined).
   */
  async ensureEncounterExists() {
    if (this.encounterID) {
      return;
    }
    const _encounter_ = await this.diagnosis_service.createEncounter();
    if (!_encounter_) throw new Error("Failed to create encounter");
    this.encounterID = _encounter_.encounter_id;
    if (_encounter_.patient_id !== this.patientID) {
      throw new Error("Encounter created for the wrong patient! Context inconsistency detected.");
    }
  }
  async onSubmit(computedData) {
    await this.ensureEncounterExists();
    this.saveObservationList(computedData);
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
    await service.onSubmit([primaryDiagnosisData.primaryDiagnosisObservation.obs]);
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
    await service.onSubmit([secondaryDiagnosisData.secondaryDiagnosisObservation.obs]);
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
    console.log("SUCCESS: All Diagnosis sections saved successfully!");
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
    const stepperData = [
      {
        title: "Diagnosis",
        value: "1",
        component: DiagnosisSelection
      },
      {
        title: "Systems Suggestions",
        value: "2",
        component: SystemsSuggestions
      },
      {
        title: "Summary",
        value: "3",
        component: DiagnosisSummary
      }
    ];
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
          router.push("/neonatal/checkpoint");
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
                StepperData: stepperData,
                stepperTitle: "Diagnosis",
                openStepper: currentOpenStepper.value,
                backUrl: "/patient-profile",
                getSaveFunction: getSaveFnForStep,
                onUpdateStatus: updateStatus,
                "flow-type": "enrollment",
                "show-componet-title": true
              }, null, 8, ["wizardData", "openStepper"])
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
