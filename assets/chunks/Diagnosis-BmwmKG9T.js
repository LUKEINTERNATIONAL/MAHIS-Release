import { _ as _export_sfc, u as useDemographicsStore, ab as useUserStore, G as toastSuccess, x as toastDanger, aY as AppEncounterService, T as Toolbar } from '../index-B2p2mVqz.js';
import { q as defineComponent, ar as script, x as createElementBlock, y as openBlock, G as createCommentVNode, B as createBaseVNode, z as createVNode, D as renderSlot, A as withCtx, a5 as createTextVNode, C as toDisplayString, E as unref, r as ref, w as watch, d as computed, O as createBlock, a4 as normalizeClass, cD as mergeProps, fg as draggable, c0 as resolveDynamicComponent, J as Fragment, R as renderList, bO as withKeys, a8 as withModifiers, aF as useRouter, H as IonContent, bq as IonPage } from './vendor-Cy_N32Zh.js';
import { u as useNeonatalTriageStore, N as NeonatalStepper } from './NeonatalStepper-B2TLCvKK.js';
import { d as defineStore, s as storeToRefs } from './pinia-Bqc2Rgok.js';
import { I as IMAGES } from './images-CXEjlBUX.js';
import { u as useNeonatalVitalsStore } from './useNeonatalVitalsStore-BH92wNUI.js';
import { u as useReviewOfSystemsStore } from './useReviewOfSystemsStore-1nB-SXMQ.js';
import { u as useNeonatalExamStore } from './useNeonatalExamStore-B-2sbeQq.js';
import { u as useSystemicExaminationStore } from './useSystemicExaminationStore-CHRGmGkn.js';
import { u as useSignsSymptomsStore } from './useSignsSymptomsStore-3f6dus9r.js';

const _hoisted_1$5 = { class: "multiselect-header-wrapper" };
const _hoisted_2$5 = {
  key: 0,
  class: "question-header"
};
const _hoisted_3$5 = { class: "selection-instruction" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VueMultiselectStyledHeader",
    components: {
      VueMultiselect: script
    }
  },
  __name: "VueMultiselectStaticList",
  props: {
    options: {
      type: Array,
      required: true,
      // Add type definition to the validator for better TS compatibility
      validator: (value) => value.every((item) => "label" in item && "value" in item)
    },
    modelValue: {
      // Type should be an object (the selected option) or null
      type: [Object, null],
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const clearSelection = () => {
      emit("update:modelValue", null);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          renderSlot(_ctx.$slots, "header", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$5, [
          _cache[1] || (_cache[1] = createBaseVNode("span", null, "Select one.", -1)),
          __props.modelValue ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: clearSelection,
            class: "clear-button",
            type: "button"
          }, "Clear")) : createCommentVNode("", true)
        ]),
        createVNode(unref(script), {
          "model-value": __props.modelValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
          options: __props.options,
          "track-by": "value",
          label: "label",
          searchable: false,
          "allow-empty": true,
          "show-labels": false,
          "close-on-select": true
        }, {
          option: withCtx(({ option }) => [
            createTextVNode(toDisplayString(option.label), 1)
          ]),
          singleLabel: withCtx(({ option }) => [
            createTextVNode(toDisplayString(option.label), 1)
          ]),
          _: 1
        }, 8, ["model-value", "options"])
      ]);
    };
  }
});

const VueMultiselectStaticList = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-349ad15d"]]);

const _hoisted_1$4 = { class: "multiselect-header-wrapper" };
const _hoisted_2$4 = {
  key: 0,
  class: "question-header"
};
const _hoisted_3$4 = { class: "selection-instruction" };
const _hoisted_4$4 = { class: "custom__tag" };
const _hoisted_5$3 = ["onClick"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VueMultiselectStyledMulti",
    components: {
      VueMultiselect: script
    }
  },
  __name: "VueMultiselectStyledMulti",
  props: {
    options: {
      type: Array,
      required: true,
      validator: (value) => value.every((item) => "label" in item && "value" in item)
    },
    modelValue: {
      // KEY CHANGE: Type is an array of selected options, defaulting to an empty array
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const clearSelection = () => {
      emit("update:modelValue", []);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          renderSlot(_ctx.$slots, "header", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$4, [
          _cache[1] || (_cache[1] = createBaseVNode("span", null, "Select one or more.", -1)),
          __props.modelValue.length > 0 ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: clearSelection,
            class: "clear-button",
            type: "button"
          }, "Clear All")) : createCommentVNode("", true)
        ]),
        createVNode(unref(script), {
          "model-value": __props.modelValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
          options: __props.options,
          "track-by": "value",
          label: "label",
          searchable: true,
          multiple: true,
          "close-on-select": false,
          "hide-selected": true
        }, {
          tag: withCtx(({ option, remove }) => [
            createBaseVNode("span", _hoisted_4$4, [
              createBaseVNode("span", null, toDisplayString(option.label), 1),
              createBaseVNode("span", {
                class: "custom__remove",
                onClick: ($event) => remove(option)
              }, "❌", 8, _hoisted_5$3)
            ])
          ]),
          placeholder: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode(" Select the appropriate diagnosis... ", -1)
          ])]),
          _: 1
        }, 8, ["model-value", "options"])
      ]);
    };
  }
});

const VueMultiselectStyledMulti = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-bce8dfd3"]]);

const _hoisted_1$3 = { class: "selected-diagnoses-list" };
const _hoisted_2$3 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_3$3 = ["src"];
const _hoisted_4$3 = {
  key: 1,
  class: "rank-number"
};
const _hoisted_5$2 = { class: "item-label" };
const _hoisted_6$2 = ["onClick", "aria-label", "title"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SelectedDiagnosisDisplay",
  props: {
    items: { default: () => [] },
    isDifferential: { type: Boolean, default: false },
    allowDragging: { type: Boolean, default: false }
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        !__props.items || __props.items.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
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
                "draggable-enabled": __props.allowDragging && __props.isDifferential
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
                }, null, 8, _hoisted_3$3)
              ], 2)) : createCommentVNode("", true),
              __props.isDifferential ? (openBlock(), createElementBlock("span", _hoisted_4$3, "#" + toDisplayString(index + 1), 1)) : createCommentVNode("", true),
              createBaseVNode("span", _hoisted_5$2, toDisplayString(item.label), 1),
              createBaseVNode("button", {
                onClick: ($event) => removeItem(item),
                class: "remove-button",
                type: "button",
                "aria-label": "Remove " + item.label,
                title: "Remove " + item.label
              }, [..._cache[1] || (_cache[1] = [
                createBaseVNode("span", { class: "trash-icon" }, "🗑️", -1)
              ])], 8, _hoisted_6$2)
            ], 2)
          ]),
          _: 1
        }, 16, ["modelValue"]))
      ]);
    };
  }
});

const SelectedDiagnosisDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6f381d34"]]);

const useDiagnosisStore = defineStore("diagnosisStore", {
  state: () => ({
    workingDiagnosis: null,
    differentialDiagnoses: [],
    diagnosisNotes: "",
    current_patient_ID: null
  }),
  actions: {
    /**
     * Sets the single selected Working Diagnosis.
     * @param data The selected Option object or null to clear.
     */
    setWorkingDiagnosis(data) {
      this.workingDiagnosis = data;
    },
    /**
     * Sets the array of Differential Diagnoses (replaces the entire list).
     * @param data An array of selected Option objects.
     */
    setDifferentialDiagnoses(data) {
      this.differentialDiagnoses = data;
    },
    /**
     * Adds a single diagnosis to the differential list if it doesn't already exist.
     * @param data The Option object to add.
     */
    addDifferentialDiagnosis(data) {
      if (!this.differentialDiagnoses.some((d) => d.value === data.value)) {
        this.differentialDiagnoses.push(data);
      }
    },
    /**
     * Removes a single diagnosis from the differential list.
     * @param data The Option object to remove.
     */
    removeDifferentialDiagnosis(data) {
      this.differentialDiagnoses = this.differentialDiagnoses.filter((d) => d.value !== data.value);
    },
    /**
     * Sets notes related to the diagnosis.
     * @param notes The diagnostic notes string.
     */
    setDiagnosisNotes(notes) {
      this.diagnosisNotes = notes;
    },
    /**
     * Resets all diagnosis-related data to its initial state.
     */
    resetDiagnosisData() {
      this.$reset();
      console.log("Diagnosis Store Data has been reset.");
    },
    /**
     * Sets the current patient ID and clears all diagnosis selections if the ID changes.
     * @param patientID The new patient ID to set.
     */
    setCurrentPatientID(patientID) {
      if (this.current_patient_ID !== patientID) {
        this.workingDiagnosis = null;
        this.differentialDiagnoses = [];
        this.diagnosisNotes = "";
        this.current_patient_ID = patientID;
        console.log(`Patient ID changed to: ${patientID}. All diagnosis selections have been cleared.`);
      } else {
        console.log(`Patient ID unchanged: ${patientID}. Diagnosis data retained.`);
      }
    }
  },
  // Assuming you want the diagnosis state to persist across sessions/reloads
  // as per the useNeonatalExamStore structure.
  persist: true
});

const _hoisted_1$2 = { class: "diagnosis-selection-panel" };
const _hoisted_2$2 = { class: "diagnosis-section" };
const _hoisted_3$2 = { class: "diagnosis-section" };
const _hoisted_4$2 = {
  key: 0,
  class: "validation-error"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DiagnosisSelection",
  setup(__props, { expose: __expose }) {
    const VueMultiselectStaticListAny = VueMultiselectStaticList;
    const diagnosisStore = useDiagnosisStore();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const validationError = ref(null);
    const normalizePatientId = (rawId) => {
      if (rawId === null || rawId === void 0) return null;
      return String(rawId);
    };
    watch(
      () => patient.value?.patientID,
      (newPatientId) => {
        const normalizedId = normalizePatientId(newPatientId);
        diagnosisStore.setCurrentPatientID(normalizedId);
      },
      { immediate: true }
      // Run immediately on component mount
    );
    const options = [
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
    const filteredDifferentialOptions = computed(() => {
      if (!diagnosisStore.workingDiagnosis) {
        return options;
      }
      return options.filter((option) => option.value !== diagnosisStore.workingDiagnosis?.value);
    });
    const filteredPrimaryOptions = computed(() => {
      if (diagnosisStore.differentialDiagnoses.length === 0) {
        return options;
      }
      const differentialValues = diagnosisStore.differentialDiagnoses.map((d) => d.value);
      return options.filter((option) => !differentialValues.includes(option.value));
    });
    const workingDiagnosisSelection = computed({
      get: () => diagnosisStore.workingDiagnosis,
      set: (newValue) => {
        validationError.value = null;
        diagnosisStore.setWorkingDiagnosis(newValue);
      }
    });
    const workingDiagnosisModel = computed(() => {
      return diagnosisStore.workingDiagnosis ? [diagnosisStore.workingDiagnosis] : [];
    });
    const clearWorkingDiagnosis = () => {
      diagnosisStore.setWorkingDiagnosis(null);
    };
    const differentialDiagnosesSelection = computed({
      get: () => diagnosisStore.differentialDiagnoses,
      set: (newValue) => {
        validationError.value = null;
        diagnosisStore.setDifferentialDiagnoses(newValue);
      }
    });
    const differentialDiagnosesModel = computed(() => diagnosisStore.differentialDiagnoses);
    const removeDifferentialDiagnosis = (itemToRemove) => {
      diagnosisStore.removeDifferentialDiagnosis(itemToRemove);
    };
    function validateForm() {
      const hasWorkingDiagnosis = !!diagnosisStore.workingDiagnosis;
      const errors = {};
      if (!hasWorkingDiagnosis) {
        validationError.value = "A Primary Diagnosis (Working Diagnosis) is required to proceed to the next step.";
        errors.primaryDiagnosisRequired = validationError.value;
        console.error("Validation Error: Primary Diagnosis is missing.");
      } else {
        validationError.value = null;
        console.log("Validation Success: Diagnosis Selection passed.");
      }
      return Object.keys(errors).length > 0 ? errors : null;
    }
    __expose({
      validateForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "description-box" }, " Select the diagnoses you think the baby has (you can select more than 1) ", -1)),
          _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Your Selected Working Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: workingDiagnosisModel.value,
            onRemoveItem: clearWorkingDiagnosis
          }, null, 8, ["items"]),
          (openBlock(), createBlock(resolveDynamicComponent(unref(VueMultiselectStaticListAny)), {
            modelValue: workingDiagnosisSelection.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => workingDiagnosisSelection.value = $event),
            options: filteredPrimaryOptions.value,
            class: "multiselect-component"
          }, {
            header: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode(" Primary Diagnosis (Select ONE) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue", "options"]))
        ]),
        _cache[7] || (_cache[7] = createBaseVNode("hr", { class: "separator" }, null, -1)),
        createBaseVNode("div", _hoisted_3$2, [
          _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Your Selected Differential Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: differentialDiagnosesModel.value,
            "is-differential": true,
            onRemoveItem: removeDifferentialDiagnosis
          }, null, 8, ["items"]),
          createVNode(VueMultiselectStyledMulti, {
            modelValue: differentialDiagnosesSelection.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => differentialDiagnosesSelection.value = $event),
            options: filteredDifferentialOptions.value,
            class: "multiselect-component"
          }, {
            header: withCtx(() => [..._cache[5] || (_cache[5] = [
              createTextVNode(" Differential Diagnoses ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue", "options"]),
          validationError.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(validationError.value), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});

const DiagnosisSelection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f467a363"]]);

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
  console.log("we here", clinicalData.value);
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
      value: suggestion.value
    });
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
    // Utilities
    isRejected,
    isSuggested
  };
}

const useSuggestedDiagnosisStore = defineStore("suggestedDiagnosisStore", {
  state: () => ({
    patientData: {}
  }),
  actions: {
    setPatientData() {
      const vitalsStore = useNeonatalVitalsStore();
      const formData = vitalsStore.formData;
      if (formData.temperature) this.patientData.Temperature = formData.temperature;
      if (formData.blood_sugar) this.patientData.BloodSugarmg = formData.blood_sugar;
      if (formData.respiratory_rate) this.patientData.RR = formData.respiratory_rate;
      if (formData.oxygen_saturation) this.patientData.SatsAIr = formData.oxygen_saturation;
      const triageStore = useNeonatalTriageStore();
      const formValues = triageStore.formValues;
      if (formValues.oxygen_saturation) this.patientData.SatsAIr = formValues.oxygen_saturation;
      if (formValues.respiratory_rate) this.patientData.RR = formValues.respiratory_rate;
      if (formValues.temperature) this.patientData.Temperature = formValues.temperature;
      if (formValues.birth_weight) this.patientData.BirthWeight = formValues.birth_weight;
      if (formValues.admission_weight) this.patientData.AdmissionWeight = formValues.admission_weight;
      if (formValues.saturation_in_oxygen) this.patientData.SatsO2 = formValues.saturation_in_oxygen;
      if (formValues.convulsions) {
        this.patientData.DangerSigns = "Conv";
      }
      if (formValues.central_cyanosis) {
        this.patientData.DangerSigns = "Cyan";
      }
      if (formValues.blood_sugar) {
        if (formValues.bloodSugar_unit === "mmol/L") {
          this.patientData.BloodSugarmmol = formValues.blood_sugar;
        } else {
          this.patientData.BloodSugarmg = formValues.blood_sugar;
        }
      }
      const reviewOfSystemsStore = useReviewOfSystemsStore();
      const reviewOfSystemsForm = reviewOfSystemsStore.formData;
      if (reviewOfSystemsForm.convulsions === "Yes") {
        this.patientData.Activity = "Convulsions";
        this.patientData.SymptomReviewNeurology = "Convulsions";
      }
      if (reviewOfSystemsForm.jaundice === "Yes") {
        this.patientData.Jaundice = "MJ";
        this.patientData.YColour = "Y";
      }
      if (reviewOfSystemsForm.baby_grunting === "Yes") {
        this.patientData.SignsRD = "GR";
        this.patientData.DangerSigns = "Grun";
      }
      if (reviewOfSystemsForm.nasal_flaring === "Yes") {
        this.patientData.SignsRD = "NFL";
      }
      if (reviewOfSystemsForm.cyanosis === "Yes") {
        this.patientData.DangerSigns = "Cyan";
      }
      if (reviewOfSystemsForm.gasping === "Yes") {
        this.patientData.SignsRD = "Gasp";
      }
      if (reviewOfSystemsForm.difficulty_breathing === "Yes") {
        this.patientData.RespSR = "DIB";
      }
      if (reviewOfSystemsForm.color_of_stools === "White" || reviewOfSystemsForm.color_of_stools === "Clay-colored" || reviewOfSystemsForm.color_of_stools === "Pale") {
        this.patientData.Colour = "White";
        this.patientData.Jaundice = "DJ";
      }
      if (reviewOfSystemsForm.vomiting === "Yes" || reviewOfSystemsForm.is_baby_vomiting === "Yes") ;
      if (reviewOfSystemsForm.vomiting_bile_stained === "Yes" || reviewOfSystemsForm.color_of_vomit === "Green" || reviewOfSystemsForm.color_of_vomit === "Bile-stained") ;
      if (reviewOfSystemsForm.talipes === "Yes" || reviewOfSystemsForm.club_foot === "Yes") {
        this.patientData.TalipesSev = "Yes";
      }
      if (reviewOfSystemsForm.spinal_bifida === "Yes") {
        this.patientData.Spine = "NTD";
      }
      if (reviewOfSystemsForm.skin_rash === "Yes" || reviewOfSystemsForm.pustules === "Yes" || reviewOfSystemsForm.peeling === "Yes") {
        this.patientData.Skin = reviewOfSystemsForm.skin_rash || reviewOfSystemsForm.pustules || reviewOfSystemsForm.peeling || "";
      }
      if (reviewOfSystemsForm.activity) {
        if (reviewOfSystemsForm.activity.toLowerCase().includes("convuls") || reviewOfSystemsForm.activity.toLowerCase().includes("seizure")) {
          this.patientData.Activity = "Convulsions";
        }
      }
      if (reviewOfSystemsForm.is_baby_passing_urine === "No" || reviewOfSystemsForm.number_of_wet_nappies === "0" || reviewOfSystemsForm.hydration_urination === "Poor") ;
      if (reviewOfSystemsForm.passage_of_meconium === "Yes" || reviewOfSystemsForm.stool_passed_meconium === "Yes") {
        this.patientData.MecPresent = "Yes";
      }
      if (reviewOfSystemsForm.abdominal_distension === "Yes") ;
      if (reviewOfSystemsForm.bleeding === "Yes" || reviewOfSystemsForm.blood_in_stools === "Yes") ;
      if (reviewOfSystemsForm.does_baby_have_tongue_tie === "Yes") ;
      const neonatalExamStore = useNeonatalExamStore();
      const examForm = neonatalExamStore;
      if (examForm.activityAssessment) {
        const activity = examForm.activityAssessment.toLowerCase();
        if (activity.includes("convuls") || activity.includes("seizure") || activity.includes("fitting")) {
          this.patientData.Activity = "Convulsions";
          this.patientData.DangerSigns = "Conv";
        }
      }
      if (examForm.isBabyYellow === true) {
        this.patientData.YColour = "Y";
        if (!this.patientData.Jaundice) {
          this.patientData.Jaundice = "MJ";
        }
      }
      if (examForm.hasBabyCyanosis === true) {
        this.patientData.DangerSigns = "Cyan";
      }
      if (examForm.isBabyPallorPink === false) ;
      if (examForm.hasBabyOedema === true) ;
      if (examForm.fontanelleAssessment) {
        const fontanelle = examForm.fontanelleAssessment.toLowerCase();
        if (fontanelle.includes("bulging") || fontanelle.includes("tense")) ;
        if (fontanelle.includes("sunken") || fontanelle.includes("depressed")) ;
      }
      if (examForm.massInHeadAssessment) {
        const mass = examForm.massInHeadAssessment.toLowerCase();
        if (mass.includes("caput") || mass.includes("cephalohematoma") || mass.includes("subgaleal")) ;
      }
      if (examForm.hasCardiacAbnormality === true) ;
      if (examForm.heartSoundsAssessment) {
        const heartSounds = examForm.heartSoundsAssessment.toLowerCase();
        if (heartSounds.includes("murmur")) ;
      }
      if (examForm.capillaryRefillTime) {
        const crt = examForm.capillaryRefillTime.toLowerCase();
        if (crt.includes("prolonged") || crt.includes(">3") || crt.includes("delayed")) ;
      }
      if (examForm.femoralPulses) {
        const pulses = examForm.femoralPulses.toLowerCase();
        if (pulses.includes("absent") || pulses.includes("weak") || pulses.includes("decreased")) ;
      }
      if (examForm.hasCleftLip === true && examForm.hasCleftPalate === true) {
        this.patientData.Palate = "LipPalate";
      } else if (examForm.hasCleftLip === true) {
        this.patientData.Palate = "Lip";
      } else if (examForm.hasCleftPalate === true) {
        this.patientData.Palate = "Cleft";
      } else if (examForm.cleftAssessment) {
        const cleft = examForm.cleftAssessment.toLowerCase();
        if (cleft.includes("lip") && cleft.includes("palate")) {
          this.patientData.Palate = "LipPalate";
        } else if (cleft.includes("lip")) {
          this.patientData.Palate = "Lip";
        } else if (cleft.includes("palate")) {
          this.patientData.Palate = "Cleft";
        }
      }
      if (examForm.genitaliaAssessment) {
        const genitalia = examForm.genitaliaAssessment.toLowerCase();
        if (genitalia.includes("ambiguous")) {
          if (this.patientData.MSKproblems) {
            this.patientData.MSKproblems += "; Ambiguous genitalia";
          } else {
            this.patientData.MSKproblems = "Ambiguous genitalia";
          }
        }
        if (genitalia.includes("hypospadias") || genitalia.includes("undescended")) ;
      }
      if (examForm.anusAssessment) {
        const anus = examForm.anusAssessment.toLowerCase();
        if (anus.includes("imperforate") || anus.includes("absent") || anus.includes("atresia")) ;
      }
      if (examForm.hasMeconiumPassed === true) ; else if (examForm.hasMeconiumPassed === false) ;
      if (examForm.hasCongenitalAbnormalities === true) {
        if (examForm.abnormalitiesNotes) {
          const notes = examForm.abnormalitiesNotes.toLowerCase();
          if (notes.includes("gastroschisis")) {
            this.patientData.GSCvsOM = "GSCH";
          } else if (notes.includes("omphalocele") || notes.includes("omphalo")) {
            this.patientData.GSCvsOM = "OMPH";
          }
          if (notes.includes("spina bifida") || notes.includes("myelomeningocele") || notes.includes("meningocele")) {
            this.patientData.Spine = "NTD";
          }
          if (notes.includes("talipes") || notes.includes("club foot") || notes.includes("clubfoot")) {
            this.patientData.TalipesSev = "Yes";
          }
          if (notes.includes("skin") || notes.includes("nevus") || notes.includes("birthmark")) {
            this.patientData.Skin = examForm.abnormalitiesNotes;
          }
          if (notes.includes("limb") || notes.includes("digit") || notes.includes("polydactyly") || notes.includes("syndactyly")) {
            this.patientData.MSKproblems = examForm.abnormalitiesNotes;
          }
        }
      }
      const systemicExaminationStore = useSystemicExaminationStore();
      const systemicEexamForm = systemicExaminationStore.formData;
      if (systemicEexamForm.grunting === true) {
        this.patientData.SignsRD = "GR";
        this.patientData.DangerSigns = "Grun";
      }
      if (systemicEexamForm.nasalFlaring === true) {
        this.patientData.SignsRD = "NFL";
      }
      if (systemicEexamForm.chestIndrawing === true) {
        this.patientData.SignsRD = "CHI";
      }
      if (systemicEexamForm.stridor === true) {
        this.patientData.SignsRD = "ST";
      }
      if (systemicEexamForm.gasping === true) {
        this.patientData.SignsRD = "Gasp";
      }
      if (systemicEexamForm.respiratoryDistress === "Yes" || systemicEexamForm.respiratoryDistress === "Severe") {
        this.patientData.RespSR = "DIB";
      }
      if (systemicEexamForm.colorBlue === true) {
        this.patientData.DangerSigns = "Cyan";
      }
      if (systemicEexamForm.colorYellow === true) {
        this.patientData.YColour = "Y";
        if (!this.patientData.Jaundice) {
          this.patientData.Jaundice = "MJ";
        }
      }
      if (systemicEexamForm.colorPale === true) ;
      if (systemicEexamForm.crt3OrMore === true) ;
      if (systemicEexamForm.femoralPulseWeak === true || systemicEexamForm.femoralPulseDifficult === true) ;
      if (systemicEexamForm.murmurExtraSounds === true) ;
      if (systemicEexamForm.abdomenWallDefect === true) {
        if (systemicEexamForm.abdomenSummaryNotes) {
          const notes = systemicEexamForm.abdomenSummaryNotes.toLowerCase();
          if (notes.includes("gastroschisis")) {
            this.patientData.GSCvsOM = "GSCH";
          } else if (notes.includes("omphalocele") || notes.includes("omphalo")) {
            this.patientData.GSCvsOM = "OMPH";
          } else ;
        }
      }
      if (systemicEexamForm.pruneBellySyndrome === true) ;
      if (systemicEexamForm.abdomenDistended === true) ;
      if (systemicEexamForm.hepatomegaly === "Yes") ;
      if (systemicEexamForm.splenomegaly === "Yes") ;
      if (systemicEexamForm.umbilicusBleeding === true || systemicEexamForm.umbilicusRedSkin === true) ;
      if (systemicEexamForm.umbilicalHernia === true) ;
      if (systemicEexamForm.genitaliaAmbiguous === true) {
        if (this.patientData.MSKproblems) {
          this.patientData.MSKproblems += "; Ambiguous genitalia";
        } else {
          this.patientData.MSKproblems = "Ambiguous genitalia";
        }
      }
      if (systemicEexamForm.genitaliaMaleAbnormal === true || systemicEexamForm.genitaliaFemaleAbnormal === true) ;
      if (systemicEexamForm.anusImperforate === true) ;
      if (systemicEexamForm.toneAssessment) {
        const tone = systemicEexamForm.toneAssessment.toLowerCase();
        if (tone.includes("hypotonic") || tone.includes("floppy") || tone.includes("decreased")) ;
        if (tone.includes("hypertonic") || tone.includes("increased") || tone.includes("rigid")) ;
      }
      if (systemicEexamForm.suckReflex === "Absent" || systemicEexamForm.suckReflex === "Weak") ;
      if (systemicEexamForm.MoreReflex === "Absent" || systemicEexamForm.MoreReflex === "Asymmetric") ;
      if (systemicEexamForm.birthAsphyxiaSuspected === "Yes") {
        const thompsonScores = {
          thompsonRespirationScore: parseInt(systemicEexamForm.thompsonRespirationScore || "0"),
          thompsonSuckScore: parseInt(systemicEexamForm.thompsonSuckScore || "0"),
          thompsonMoroScore: parseInt(systemicEexamForm.thompsonMoroScore || "0"),
          thompsonGraspScore: parseInt(systemicEexamForm.thompsonGraspScore || "0"),
          thompsonFontanelleScore: parseInt(systemicEexamForm.thompsonFontanelleScore || "0"),
          thompsonToneScore: parseInt(systemicEexamForm.thompsonToneScore || "0"),
          thompsonConsciousnessScore: parseInt(systemicEexamForm.thompsonConsciousnessScore || "0"),
          thompsonFitsScore: parseInt(systemicEexamForm.thompsonFitsScore || "0"),
          thompsonPostureScore: parseInt(systemicEexamForm.thompsonPostureScore || "0")
        };
        this.patientData.ThompScore = thompsonScores.thompsonRespirationScore + thompsonScores.thompsonSuckScore + thompsonScores.thompsonMoroScore + thompsonScores.thompsonGraspScore + thompsonScores.thompsonFontanelleScore + thompsonScores.thompsonToneScore + thompsonScores.thompsonConsciousnessScore + thompsonScores.thompsonFitsScore + thompsonScores.thompsonPostureScore;
        if (this.patientData.ThompScore >= 6) {
          this.patientData.AdmReason = "NE";
        }
      }
      if (systemicEexamForm.musculoskeletalDeformities && systemicEexamForm.musculoskeletalDeformities.length > 0) {
        systemicEexamForm.musculoskeletalDeformities.forEach((deformity) => {
          const d = deformity.toLowerCase();
          if (d.includes("talipes") || d.includes("club foot") || d.includes("clubfoot")) {
            if (d.includes("correctable") || d.includes("mild") || d.includes("flexible")) {
              this.patientData.TalipesSev = "Yes";
            } else if (d.includes("rigid") || d.includes("severe") || d.includes("fixed")) {
              this.patientData.TalipesSev = "No";
            } else {
              this.patientData.TalipesSev = "Yes";
            }
          }
          if (d.includes("spina bifida") || d.includes("myelomeningocele") || d.includes("meningocele") || d.includes("neural tube")) {
            this.patientData.Spine = "NTD";
          }
          if (d.includes("hip") && (d.includes("clunk") || d.includes("disloc"))) {
            this.patientData.Ortolani = "Yes";
          }
          if (d.includes("limb") || d.includes("digit") || d.includes("polydactyly") || d.includes("syndactyly") || d.includes("fracture") || d.includes("erb") || // Erb's palsy
          d.includes("brachial plexus")) {
            if (this.patientData.MSKproblems) {
              this.patientData.MSKproblems += `; ${deformity}`;
            } else {
              this.patientData.MSKproblems = deformity;
            }
          }
        });
      }
      if (systemicEexamForm.skinFindings && systemicEexamForm.skinFindings.length > 0) {
        this.patientData.Skin = systemicEexamForm.skinFindings.join("; ");
      }
      if (systemicEexamForm.unequalAirEntry === true || systemicEexamForm.unilateralCrackles === true) ;
      if (systemicEexamForm.bilateralCracklesWheeze === true) ;
      const signsSymptomsStore = useSignsSymptomsStore();
      const signsSymptomsForm = signsSymptomsStore.formData;
      if (signsSymptomsForm.presenting_complaints && signsSymptomsForm.presenting_complaints.length > 0) {
        signsSymptomsForm.presenting_complaints.forEach((complaint) => {
          switch (complaint) {
            // ===== CONVULSIONS =====
            case "convulsions":
              this.patientData.Activity = "Convulsions";
              this.patientData.SymptomReviewNeurology = "Convulsions";
              this.patientData.DangerSigns = "Conv";
              this.patientData.AdmReason = "Convulsions";
              break;
            // ===== CYANOSIS =====
            case "cyanosis":
              this.patientData.DangerSigns = "Cyan";
              break;
            // ===== JAUNDICE =====
            case "jaundice":
              this.patientData.YColour = "Y";
              if (!this.patientData.Jaundice) {
                this.patientData.Jaundice = "MJ";
              }
              if (signsSymptomsForm.symptom_severity?.toLowerCase().includes("severe")) {
                this.patientData.Jaundice = "DJ";
              }
              break;
            // ===== RESPIRATORY =====
            case "apnoea":
              this.patientData.RespSR = "Apn";
              break;
            case "difficulty_breathing":
              this.patientData.RespSR = "DIB";
              break;
            // ===== TEMPERATURE ISSUES =====
            case "fever":
              break;
            case "hypothermia":
              break;
            // ===== ACTIVITY/NEUROLOGICAL =====
            case "lethargy":
              if (!this.patientData.Activity || this.patientData.Activity !== "Convulsions") {
                this.patientData.Activity = "Lethargy";
              }
              break;
            case "irritability":
              if (!this.patientData.Activity || this.patientData.Activity !== "Convulsions") {
                this.patientData.Activity = "Irritable";
              }
              break;
            // ===== FEEDING ISSUES =====
            case "poor_feeding":
            case "not_tolerating_feeds":
              break;
            // ===== GI SYMPTOMS =====
            case "vomiting":
              break;
            case "abdominal_distension":
              break;
            case "diarrhoea":
              break;
            // ===== INFECTION SIGNS =====
            case "umbilical_discharge":
              break;
            case "eye_discharge":
              break;
            case "skin_rash":
              if (this.patientData.Skin) {
                this.patientData.Skin += "; Rash noted on presentation";
              } else {
                this.patientData.Skin = "Rash noted on presentation";
              }
              break;
            // ===== HEMATOLOGICAL =====
            case "bleeding":
              break;
            case "pallor":
              break;
            default:
              console.warn(`Unhandled presenting complaint: ${complaint}`);
              break;
          }
        });
      }
      if (signsSymptomsForm.detailed_assessment_notes) {
        const notes = signsSymptomsForm.detailed_assessment_notes.toLowerCase();
        if (notes.includes("orange") || notes.includes("deep yellow")) {
          if (this.patientData.Jaundice === "MJ") ;
        }
        if ((notes.includes("bile") || notes.includes("green") || notes.includes("bilious")) && signsSymptomsForm.presenting_complaints?.includes("vomiting")) ;
        if (notes.includes("status epilepticus") || notes.includes("continuous")) ;
        if (notes.includes("grunting") && !this.patientData.SignsRD) {
          this.patientData.SignsRD = "GR";
          this.patientData.DangerSigns = "Grun";
        }
        if (notes.includes("nasal flaring") && !this.patientData.SignsRD) {
          this.patientData.SignsRD = "NFL";
        }
        if (notes.includes("chest indrawing") && !this.patientData.SignsRD) {
          this.patientData.SignsRD = "CHI";
        }
        if (notes.includes("maternal diabetes") || notes.includes("diabetic mother")) {
          this.patientData.PregConditions = "DM";
        }
        if (notes.includes("maternal hiv") || notes.includes("hiv positive mother")) {
          this.patientData.MatHIVtest = true;
          this.patientData.HIVtestResult = "R";
        }
        if (notes.includes("prom") || notes.includes("prolonged rupture")) ;
        if (notes.includes("meconium") && notes.includes("stained")) {
          this.patientData.MecPresent = "Yes";
        }
        if (notes.includes("birth asphyxia") || notes.includes("poor apgar") || notes.includes("resuscitation")) {
          this.patientData.AdmReason = "NE";
        }
        if (notes.includes("gastroschisis")) {
          this.patientData.GSCvsOM = "GSCH";
        }
        if (notes.includes("omphalocele")) {
          this.patientData.GSCvsOM = "OMPH";
        }
        if (notes.includes("spina bifida") || notes.includes("myelomeningocele")) {
          this.patientData.Spine = "NTD";
        }
        if (notes.includes("talipes") || notes.includes("club foot")) {
          this.patientData.TalipesSev = "Yes";
        }
        if (notes.includes("cleft lip")) {
          if (notes.includes("palate")) {
            this.patientData.Palate = "LipPalate";
          } else {
            this.patientData.Palate = "Lip";
          }
        } else if (notes.includes("cleft palate")) {
          this.patientData.Palate = "Cleft";
        }
      }
      if (signsSymptomsForm.symptom_onset_time) {
        const onset = signsSymptomsForm.symptom_onset_time.toLowerCase();
        if (onset.includes("birth") || onset.includes("delivery") || onset.includes("immediately")) ;
      }
      if (signsSymptomsForm.symptom_severity) {
        const severity = signsSymptomsForm.symptom_severity.toLowerCase();
        if (severity.includes("severe") || severity.includes("critical")) {
          if (this.patientData.Jaundice === "MJ") {
            this.patientData.Jaundice = "DJ";
          }
        }
        if (severity.includes("mild")) ;
        if (severity.includes("moderate")) ;
      }
      if (signsSymptomsForm.is_readmission === "Yes") ;
    },
    resetPatientData() {
      this.patientData = {};
    }
  },
  persist: true
});

const _hoisted_1$1 = { class: "systems-suggestions-panel" };
const _hoisted_2$1 = { class: "diagnosis-section" };
const _hoisted_3$1 = { class: "diagnosis-section" };
const _hoisted_4$1 = {
  key: 0,
  class: "validation-error"
};
const _hoisted_5$1 = { class: "suggestion-instruction" };
const _hoisted_6$1 = {
  key: 0,
  class: "pending-review-notice"
};
const _hoisted_7$1 = { class: "suggested-diagnosis-section" };
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
    const store = useDiagnosisStore();
    const suggestedDiagnosisStore = useSuggestedDiagnosisStore();
    suggestedDiagnosisStore.resetPatientData();
    suggestedDiagnosisStore.setPatientData();
    const patientData_ = computed(() => suggestedDiagnosisStore.patientData);
    ref({
      Gestation: 30.5,
      // Premature
      BirthWeight: 1200,
      // VLBW (used in logic)
      AdmissionWeight: 1200,
      // Actual input field
      Age: 5,
      Temperature: 31.5,
      // Severe Hypothermia (<32)
      RR: 65,
      // Respiratory Distress (>60)
      SatsAIr: 95,
      SatsO2: 98,
      DangerSigns: "Cyan",
      // Respiratory Distress sign
      SignsRD: "GR",
      // Respiratory Distress sign
      RespSR: "",
      SymptomReviewNeurology: "",
      Activity: "",
      AdmReason: "",
      EDLIZSummaryTableScore: 0.95,
      // Suspected neonatal sepsis (>0.9)
      BloodSugarmmol: 2,
      // Low sugar
      BloodSugarmg: 36,
      // Low sugar
      HypoSymptoms: true,
      // Symptomatic Hypoglycaemia
      PregConditions: "",
      ANSteroids: "N",
      ThompScore: 0,
      Jaundice: "",
      YColour: "N",
      Colour: "",
      GSCvsOM: "",
      Palate: "",
      Spine: "",
      Presentation: "",
      MatComorbidities: "",
      MSKproblems: "",
      Skin: "",
      Ortolani: "No",
      TalipesSev: "",
      MecPresent: "No",
      MatHIVtest: true,
      HIVtestResult: "N",
      HAART: "N",
      LengthHAART: ""
    });
    const {
      suggestedDiagnoses,
      rejectedDiagnoses,
      acceptSuggestion,
      rejectSuggestion,
      undoReject
    } = useDiagnosisSuggestions(patientData_);
    const validationError = ref(null);
    const workingDiagnosisModel = computed(() => {
      return store.workingDiagnosis ? [store.workingDiagnosis] : [];
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
    __expose({
      validateForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Your Selected Working Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: workingDiagnosisModel.value,
            "allow-dragging": false,
            onRemoveItem: clearWorkingDiagnosis
          }, null, 8, ["items"])
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "diagnosis-section-title" }, "Your Selected Differential Diagnosis", -1)),
          createVNode(SelectedDiagnosisDisplay, {
            items: unref(store).differentialDiagnoses,
            "is-differential": true,
            "allow-dragging": true,
            onRemoveItem: removeDifferentialDiagnosis,
            "onUpdate:items": updateDifferentialOrder
          }, null, 8, ["items"]),
          validationError.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(validationError.value), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("p", _hoisted_5$1, [
          _cache[2] || (_cache[2] = createTextVNode(" Please consider the suggested diagnoses below. ", -1)),
          _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Click on a suggestion to add it to your differential diagnosis", -1)),
          _cache[4] || (_cache[4] = createTextVNode(", or click the ❌ button to reject it. ", -1)),
          unref(suggestedDiagnoses).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_6$1, " ⚠️ You must review all " + toDisplayString(unref(suggestedDiagnoses).length) + " suggestion(s) before proceeding. ", 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
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

const SystemsSuggestions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-61bed52f"]]);

const _hoisted_1 = { class: "diagnosis-summary-panel" };
const _hoisted_2 = { class: "summary-section" };
const _hoisted_3 = { class: "diagnosis-list" };
const _hoisted_4 = { class: "diagnosis-item primary-item" };
const _hoisted_5 = { class: "summary-section" };
const _hoisted_6 = { class: "diagnosis-list" };
const _hoisted_7 = {
  key: 0,
  class: "no-data-item"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DiagnosisSummary",
  setup(__props) {
    const store = useDiagnosisStore();
    const primaryDiagnosisLabel = computed(() => {
      return store.workingDiagnosis?.label || "(None selected)";
    });
    const differentialDiagnosesModel = computed(() => store.differentialDiagnoses);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("h2", { class: "section-title" }, "Primary Diagnosis", -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("p", _hoisted_4, toDisplayString(primaryDiagnosisLabel.value), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "section-title" }, "Differential Diagnosis", -1)),
          createBaseVNode("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(differentialDiagnosesModel.value, (diagnosis) => {
              return openBlock(), createElementBlock("p", {
                key: diagnosis.value,
                class: "diagnosis-item differential-item"
              }, toDisplayString(diagnosis.label), 1);
            }), 128)),
            !differentialDiagnosesModel.value.length ? (openBlock(), createElementBlock("p", _hoisted_7, " (None selected) ")) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});

const DiagnosisSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-60387580"]]);

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
                stepperTitle: "General Examination",
                openStepper: currentOpenStepper.value,
                backUrl: "/patientProfile",
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
