import { C as StandardForm, _ as _export_sfc, a0 as DrugService, cn as Alert, co as SummaryField, u as useDemographicsStore, T as Toolbar, t as toastWarning, K as ObservationService, ci as saveEncounterData, S as Service, bH as DrugOrderService, G as toastSuccess } from '../index-xpeKIrss.js';
import { q as defineComponent, r as ref, h as inject, w as watch, x as createElementBlock, y as openBlock, z as createVNode, E as unref, d as computed, a as reactive, a2 as onMounted, G as createCommentVNode, B as createBaseVNode, O as createBlock, a4 as normalizeClass, a5 as createTextVNode, C as toDisplayString, J as Fragment, R as renderList, L as IonIcon, at as trash, S as withDirectives, eh as vModelSelect, bm as vModelText, a6 as IonInput, A as withCtx, a7 as IonLabel, au as searchOutline, ac as IonNote, aF as useRouter, H as IonContent, bq as IonPage, eT as provide } from './vendor-BK8x96Ok.js';
import { z as neonatalTreatmentPlanSections, A as neonatalTreatmentPlanFormKey, B as treatmentPlanPrescriptionFieldConfig, C as defaultNeonatalTreatmentPlanForm, N as NeonatalStepper } from './NeonatalStepper-DVqIYm9a.js';
import { d as defineStore, s as storeToRefs } from './pinia-C47my0-I.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';

const _hoisted_1$3 = { class: "wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NonPharmacological",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTreatmentPlanSections[0];
    const formData = sectionConfig.formData;
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    const initializeFormFromState = () => {
      if (!formRef.value || !treatmentPlanForm) return;
      const existingValues = formRef.value.getFormValues?.() ?? {};
      if ((treatmentPlanForm.treatments?.length ?? 0) && !(existingValues.treatments?.length ?? 0)) {
        formRef.value.setFormValue?.("treatments", [...treatmentPlanForm.treatments]);
      }
      if (treatmentPlanForm.thermalCareDetails) {
        formRef.value.setFormValue?.("thermalCareDetails", [...treatmentPlanForm.thermalCareDetails]);
      }
      if (treatmentPlanForm.incubator) {
        formRef.value.setFormValue?.("incubator", treatmentPlanForm.incubator);
      }
      if (treatmentPlanForm.feedingSupportDetails) {
        formRef.value.setFormValue?.("feedingSupportDetails", [...treatmentPlanForm.feedingSupportDetails]);
      }
      if (treatmentPlanForm.admissionDetails) {
        formRef.value.setFormValue?.("admissionDetails", treatmentPlanForm.admissionDetails);
      }
    };
    const saveForm = () => {
      if (!treatmentPlanForm) return;
      const values = formRef.value?.getFormValues?.() ?? {};
      treatmentPlanForm.treatments = values.treatments || [];
      treatmentPlanForm.thermalCareDetails = values.thermalCareDetails || [];
      treatmentPlanForm.feedingSupportDetails = values.feedingSupportDetails || [];
      treatmentPlanForm.admissionDetails = values.admissionDetails || "";
      treatmentPlanForm.incubator = values.incubator || "";
    };
    watch(
      () => formRef.value?.formValues?.value,
      () => {
        saveForm();
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance) {
          initializeFormFromState();
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const NonPharmacological = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-85366be5"]]);

const _hoisted_1$2 = {
  key: 0,
  class: "required"
};
const _hoisted_2 = {
  key: 1,
  class: "pill-list"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "tp-section" };
const _hoisted_5 = { class: "prescription-row" };
const _hoisted_6 = { class: "prescription-name" };
const _hoisted_7 = ["onUpdate:modelValue", "onChange"];
const _hoisted_8 = ["value"];
const _hoisted_9 = ["onUpdate:modelValue", "onInput"];
const _hoisted_10 = ["onClick", "disabled", "title"];
const _hoisted_11 = {
  key: 0,
  class: "field-error"
};
const _hoisted_12 = {
  key: 1,
  class: "empty-hint"
};
const _hoisted_13 = { class: "search-wrapper" };
const _hoisted_14 = { class: "med-list" };
const _hoisted_15 = {
  key: 0,
  class: "loader-row"
};
const _hoisted_16 = {
  key: 1,
  class: "error-row"
};
const _hoisted_17 = ["onClick", "disabled"];
const _hoisted_18 = {
  key: 0,
  slot: "end",
  class: "checkmark"
};
const _hoisted_19 = {
  key: 2,
  class: "loader-row"
};
const _hoisted_20 = ["disabled"];
const _hoisted_21 = {
  key: 4,
  class: "no-results"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DrugPrescriptionField",
  props: {
    config: {},
    allFormValues: {},
    modelValue: { default: () => [] }
  },
  emits: ["update:modelValue", "update:value", "field-changed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isTouched = ref(false);
    const isDisabled = computed(() => {
      if (typeof props.config.disabled === "boolean") {
        return props.config.disabled;
      }
      if (typeof props.config.disabled === "function") {
        try {
          return props.config.disabled(props.allFormValues);
        } catch (error) {
          console.warn("[DrugPrescriptionField] Disabled function error:", error);
          return false;
        }
      }
      return false;
    });
    const frequencies = computed(() => props.config.frequencies || ["once a day", "twice a day", "three times a day", "every 6 hours", "every 8 hours"]);
    const selectedMeds = reactive([]);
    const rowErrors = reactive({});
    const addedRows = ref(/* @__PURE__ */ new Set());
    const searchQuery = ref("");
    const debouncedQuery = ref("");
    let searchTimeout = null;
    const drugs = ref([]);
    const isLoading = ref(false);
    const fetchError = ref(null);
    const currentPage = ref(1);
    const pageSize = computed(() => props.config.pageSize || 40);
    const hasMore = ref(true);
    const markTouched = () => {
      isTouched.value = true;
    };
    const errorMessage = computed(() => {
      if (isDisabled.value) return null;
      const value = getValue();
      return props.config.validation?.(value) || null;
    });
    watch(
      searchQuery,
      (val) => {
        if (searchTimeout) clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          debouncedQuery.value = val.toLowerCase().trim();
        }, 250);
      },
      { immediate: true }
    );
    const fetchDrugs = async (opts) => {
      try {
        if (opts?.reset) {
          currentPage.value = 1;
          drugs.value = [];
          hasMore.value = true;
          fetchError.value = null;
        }
        if (!hasMore.value) return;
        isLoading.value = true;
        fetchError.value = null;
        const response = await DrugService.getDrugs({
          name: debouncedQuery.value || "",
          page: currentPage.value,
          page_size: pageSize.value
        });
        let results = [];
        if (Array.isArray(response)) {
          results = response;
        } else if (Array.isArray(response?.results)) {
          results = response.results;
        } else if (Array.isArray(response?.data)) {
          results = response.data;
        } else {
          console.warn("[DrugPrescriptionField] Unexpected drugs response shape:", response);
          results = [];
        }
        if (results.length < pageSize.value) hasMore.value = false;
        drugs.value = [...drugs.value, ...results];
      } catch (e) {
        console.error(e);
        fetchError.value = "Failed to load medications.";
        hasMore.value = false;
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(() => {
      fetchDrugs({ reset: true });
    });
    watch(debouncedQuery, () => {
      fetchDrugs({ reset: true });
    });
    const canShowMore = computed(() => hasMore.value && !fetchError.value);
    const loadMore = () => {
      if (!hasMore.value || isLoading.value) return;
      currentPage.value += 1;
      fetchDrugs();
    };
    const isSelected = (name) => selectedMeds.some((m) => m.name === name);
    const clearRowError = (medName) => {
      if (rowErrors[medName]) delete rowErrors[medName];
    };
    let lastEmittedValue = null;
    const emitValue = () => {
      const value = getValue();
      lastEmittedValue = value;
      emit("update:modelValue", value);
      emit("update:value", value);
      emit("field-changed", {
        fieldName: props.config.name || props.config.header || "",
        value,
        config: props.config
      });
    };
    const toggleMedication = (drug) => {
      if (isDisabled.value) return;
      markTouched();
      const idx = selectedMeds.findIndex((m) => m.name === drug.name);
      if (idx >= 0) {
        removeMedication(drug.name);
        return;
      }
      selectedMeds.push({
        name: drug.name,
        frequency: frequencies.value[0] || "once a day",
        dosage: "",
        drug_id: String(drug.drug_id),
        isAdded: false
      });
    };
    const removeMedication = (name) => {
      const idx = selectedMeds.findIndex((m) => m.name === name);
      if (idx >= 0) selectedMeds.splice(idx, 1);
      clearRowError(name);
      if (addedRows.value.has(name)) {
        const next = new Set(addedRows.value);
        next.delete(name);
        addedRows.value = next;
      }
      emitValue();
    };
    const onDosageInput = (name) => {
      markTouched();
      clearRowError(name);
      onRowChanged(name);
    };
    const onRowChanged = (name) => {
      if (!addedRows.value.has(name)) return;
      const row = selectedMeds.find((m) => m.name === name);
      if (!row) return;
      row.isAdded = true;
      emitValue();
    };
    const onAddPrescription = (med) => {
      markTouched();
      const dosage = (med.dosage ?? "").toString().trim();
      if (!dosage) {
        rowErrors[med.name] = "Dosage is required.";
        return;
      }
      if (!med.drug_id) {
        rowErrors[med.name] = "Drug ID not found for this medication.";
        return;
      }
      med.isAdded = true;
      const next = new Set(addedRows.value);
      next.add(med.name);
      addedRows.value = next;
      clearRowError(med.name);
      emitValue();
    };
    const getValue = () => {
      return selectedMeds.filter((m) => m.isAdded).map((m) => ({
        name: m.name,
        frequency: m.frequency,
        dosage: m.dosage,
        drug_id: m.drug_id
      }));
    };
    const applyIncomingValue = (incoming = []) => {
      selectedMeds.splice(0, selectedMeds.length);
      incoming.forEach((p) => {
        selectedMeds.push({
          name: p.name,
          frequency: p.frequency || frequencies.value[0] || "once a day",
          dosage: p.dosage || "",
          drug_id: p.drug_id || "",
          isAdded: true
        });
      });
      addedRows.value = new Set(incoming.map((p) => p.name));
      Object.keys(rowErrors).forEach((key) => delete rowErrors[key]);
    };
    const setValue = (value) => {
      const incoming = Array.isArray(value) ? value : [];
      lastEmittedValue = null;
      applyIncomingValue(incoming);
    };
    watch(
      () => props.modelValue,
      (newValue) => {
        if (lastEmittedValue && newValue === lastEmittedValue) {
          lastEmittedValue = null;
          return;
        }
        applyIncomingValue(Array.isArray(newValue) ? newValue : []);
      },
      { immediate: true, deep: true }
    );
    __expose({
      getValue,
      setValue,
      validate: () => {
        if (isDisabled.value) return null;
        isTouched.value = true;
        return errorMessage.value;
      },
      shouldShow: computed(() => true),
      markAsTouched: () => {
        isTouched.value = true;
      },
      resetTouched: () => {
        isTouched.value = false;
      },
      clearError: () => {
        isTouched.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        __props.config.header ? (openBlock(), createElementBlock("h6", {
          key: 0,
          class: normalizeClass([{ "is-bold": __props.config.bold }, "header"])
        }, [
          createTextVNode(toDisplayString(__props.config.header) + " ", 1),
          __props.config.validation?.([]) != null ? (openBlock(), createElementBlock("span", _hoisted_1$2, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        selectedMeds.length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(selectedMeds, (med) => {
            return openBlock(), createElementBlock("div", {
              key: med.name,
              class: "pill"
            }, [
              createBaseVNode("span", null, toDisplayString(med.name), 1),
              createBaseVNode("button", {
                class: "pill-remove",
                type: "button",
                onClick: ($event) => removeMedication(med.name),
                "aria-label": "Remove medication"
              }, [
                createVNode(unref(IonIcon), {
                  icon: unref(trash),
                  class: "remove-icon"
                }, null, 8, ["icon"])
              ], 8, _hoisted_3)
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "tp-section-title" }, "Prescription Details", -1)),
          selectedMeds.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "prescription-header" }, [
              createBaseVNode("span", null, "Name"),
              createBaseVNode("span", null, "Frequency"),
              createBaseVNode("span", null, "Dosage"),
              createBaseVNode("span")
            ], -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(selectedMeds, (med) => {
              return openBlock(), createElementBlock("div", {
                key: med.name,
                class: "prescription-row-wrap"
              }, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("span", _hoisted_6, toDisplayString(med.name), 1),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": ($event) => med.frequency = $event,
                    class: "prescription-select",
                    onChange: ($event) => onRowChanged(med.name)
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(frequencies.value, (freq) => {
                      return openBlock(), createElementBlock("option", {
                        key: freq,
                        value: freq
                      }, toDisplayString(freq), 9, _hoisted_8);
                    }), 128))
                  ], 40, _hoisted_7), [
                    [vModelSelect, med.frequency]
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": ($event) => med.dosage = $event,
                    type: "text",
                    class: normalizeClass(["prescription-input", { "input-error": !!rowErrors[med.name] }]),
                    placeholder: "e.g. 40mg",
                    onInput: ($event) => onDosageInput(med.name)
                  }, null, 42, _hoisted_9), [
                    [vModelText, med.dosage]
                  ]),
                  createBaseVNode("button", {
                    class: "prescription-add",
                    type: "button",
                    onClick: ($event) => onAddPrescription(med),
                    disabled: addedRows.value.has(med.name),
                    title: addedRows.value.has(med.name) ? "Added" : "Add prescription"
                  }, toDisplayString(addedRows.value.has(med.name) ? "✓" : "+"), 9, _hoisted_10)
                ]),
                rowErrors[med.name] ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(rowErrors[med.name]), 1)) : createCommentVNode("", true)
              ]);
            }), 128))
          ], 64)) : (openBlock(), createElementBlock("div", _hoisted_12, "Select a medication to add prescription details."))
        ]),
        createBaseVNode("div", _hoisted_13, [
          createVNode(unref(IonInput), {
            modelValue: searchQuery.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
            placeholder: __props.config.placeholder || "Search",
            type: "text",
            class: "search-input",
            onIonFocus: markTouched,
            onClick: markTouched,
            fill: "outline",
            disabled: isDisabled.value
          }, {
            default: withCtx(() => [
              createVNode(unref(IonLabel), {
                slot: "start",
                class: "start-content"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "search-icon"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        createBaseVNode("div", _hoisted_14, [
          isLoading.value && !drugs.value.length ? (openBlock(), createElementBlock("div", _hoisted_15, "Loading medications...")) : createCommentVNode("", true),
          fetchError.value ? (openBlock(), createElementBlock("div", _hoisted_16, toDisplayString(fetchError.value), 1)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(drugs.value, (drug) => {
            return openBlock(), createElementBlock("button", {
              key: drug.drug_id,
              type: "button",
              class: normalizeClass(["med-list-item", { "med-list-item--selected": isSelected(drug.name) }]),
              onClick: ($event) => toggleMedication(drug),
              disabled: isDisabled.value
            }, [
              createBaseVNode("span", null, toDisplayString(drug.name), 1),
              isSelected(drug.name) ? (openBlock(), createElementBlock("span", _hoisted_18, "✔")) : createCommentVNode("", true)
            ], 10, _hoisted_17);
          }), 128)),
          isLoading.value && drugs.value.length ? (openBlock(), createElementBlock("div", _hoisted_19, "Loading more...")) : createCommentVNode("", true),
          canShowMore.value && !isLoading.value ? (openBlock(), createElementBlock("button", {
            key: 3,
            type: "button",
            class: "med-list-more",
            onClick: loadMore,
            disabled: isDisabled.value
          }, " Show more… ", 8, _hoisted_20)) : createCommentVNode("", true),
          !isLoading.value && !drugs.value.length && !fetchError.value ? (openBlock(), createElementBlock("div", _hoisted_21, "No medications found.")) : createCommentVNode("", true)
        ]),
        errorMessage.value && isTouched.value ? (openBlock(), createBlock(unref(IonNote), {
          key: 2,
          class: "error-note"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(errorMessage.value), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});

const DrugPrescriptionField = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9e350060"]]);

const _hoisted_1$1 = { class: "treatment-plan-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Pharmacological",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalTreatmentPlanSections[2];
    const formData = sectionConfig.formData;
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    const syncFormValues = (values) => {
      if (!treatmentPlanForm) return;
      treatmentPlanForm.prescriptions = values.prescriptions || [];
    };
    const initializeFormFromState = () => {
      if (!formRef.value || !treatmentPlanForm) return;
      const existingValues = formRef.value.getFormValues?.() ?? {};
      if ((treatmentPlanForm.prescriptions?.length ?? 0) && !(existingValues.prescriptions?.length ?? 0)) {
        formRef.value.setFormValue?.("prescriptions", [...treatmentPlanForm.prescriptions]);
      }
    };
    watch(
      () => formRef.value?.formValues?.value,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance) {
          initializeFormFromState();
          syncFormValues(instance.getFormValues?.() ?? {});
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, {
          prescriptions: withCtx(({ formValues, updateValue }) => [
            createVNode(DrugPrescriptionField, {
              config: unref(treatmentPlanPrescriptionFieldConfig),
              allFormValues: formValues,
              modelValue: formValues.prescriptions || [],
              "onUpdate:modelValue": ($event) => updateValue("prescriptions", $event)
            }, null, 8, ["config", "allFormValues", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }, 8, ["formData"])
      ]);
    };
  }
});

const Pharmacological = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-452decb0"]]);

const _hoisted_1 = { class: "summary-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NonPharmacologicalSummary",
  setup(__props, { expose: __expose }) {
    const treatmentPlanForm = inject(neonatalTreatmentPlanFormKey);
    const sectionConfig = neonatalTreatmentPlanSections[1];
    const alertConfig = computed(
      () => sectionConfig.formData.find((field) => field.componentType === "Alert")
    );
    const summaryFieldConfig = computed(
      () => sectionConfig.formData.find((field) => field.componentType === "summaryField")
    );
    __expose({
      getFormRef: () => null,
      validateForm: () => null,
      getFormValues: () => ({ ...treatmentPlanForm || {} })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        alertConfig.value ? (openBlock(), createBlock(Alert, {
          key: 0,
          config: alertConfig.value,
          allFormValues: unref(treatmentPlanForm) || {}
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true),
        summaryFieldConfig.value ? (openBlock(), createBlock(SummaryField, {
          key: 1,
          config: summaryFieldConfig.value,
          allFormValues: unref(treatmentPlanForm) || {}
        }, null, 8, ["config", "allFormValues"])) : createCommentVNode("", true)
      ]);
    };
  }
});

const NonPharmacologicalSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a82d4ab"]]);

const useTreatmentPlanStore = defineStore("treatmentPlan", () => {
  const pharmacological = ref({
    incubator: "",
    treatments: [],
    thermalCareDetails: [],
    oxygenTherapyDetails: [],
    feedingSupportDetails: [],
    admissionDetails: ""
  });
  const nonPharmacological = ref({
    prescription: []
  });
  function setPharmacological(data) {
    pharmacological.value = data;
  }
  function updatePharmacologicalField(key, value) {
    pharmacological.value[key] = value;
  }
  function resetPharmacological() {
    pharmacological.value = {
      incubator: "",
      treatments: [],
      thermalCareDetails: [],
      oxygenTherapyDetails: [],
      feedingSupportDetails: [],
      admissionDetails: ""
    };
  }
  function addPrescription(prescription) {
    nonPharmacological.value.prescription.push(prescription);
  }
  function removePrescription(index) {
    nonPharmacological.value.prescription.splice(index, 1);
  }
  function resetNonPharmacological() {
    nonPharmacological.value.prescription = [];
  }
  function resetTreatmentPlan() {
    resetPharmacological();
    resetNonPharmacological();
  }
  return {
    // state
    pharmacological,
    nonPharmacological,
    // actions
    setPharmacological,
    updatePharmacologicalField,
    resetPharmacological,
    addPrescription,
    removePrescription,
    resetNonPharmacological,
    resetTreatmentPlan
  };
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TreatmentPlan",
  setup(__props) {
    const currentOpenStepper = ref("1");
    const treatmentStore = useTreatmentPlanStore();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const router = useRouter();
    const treatmentPlanForm = reactive({
      ...defaultNeonatalTreatmentPlanForm,
      treatments: [...treatmentStore.pharmacological.treatments],
      thermalCareDetails: treatmentStore.pharmacological.thermalCareDetails,
      oxygenTherapyDetails: treatmentStore.pharmacological.oxygenTherapyDetails,
      feedingSupportDetails: treatmentStore.pharmacological.feedingSupportDetails,
      admissionDetails: treatmentStore.pharmacological.admissionDetails,
      incubator: treatmentStore.pharmacological.incubator,
      prescriptions: treatmentStore.nonPharmacological.prescription
    });
    provide(neonatalTreatmentPlanFormKey, treatmentPlanForm);
    watch(
      () => ({
        treatments: treatmentPlanForm.treatments,
        thermalCareDetails: treatmentPlanForm.thermalCareDetails,
        oxygenTherapyDetails: treatmentPlanForm.oxygenTherapyDetails,
        feedingSupportDetails: treatmentPlanForm.feedingSupportDetails,
        admissionDetails: treatmentPlanForm.admissionDetails,
        incubator: treatmentPlanForm.incubator
      }),
      (values) => {
        treatmentStore.setPharmacological({
          incubator: values.incubator || "",
          treatments: Array.isArray(values.treatments) ? values.treatments : [],
          thermalCareDetails: Array.isArray(values.thermalCareDetails) ? values.thermalCareDetails : [],
          oxygenTherapyDetails: Array.isArray(values.oxygenTherapyDetails) ? values.oxygenTherapyDetails : [],
          feedingSupportDetails: Array.isArray(values.feedingSupportDetails) ? values.feedingSupportDetails : [],
          admissionDetails: values.admissionDetails || ""
        });
      },
      { deep: true }
    );
    watch(
      () => treatmentPlanForm.prescriptions,
      (prescriptions) => {
        treatmentStore.nonPharmacological.prescription = prescriptions || [];
      },
      { deep: true }
    );
    const treatmentPlanComponents = [NonPharmacological, NonPharmacologicalSummary, Pharmacological];
    const stepperData = neonatalTreatmentPlanSections.map((section, index) => ({
      title: section.title,
      subtitle: section.subtitle,
      value: String(index + 1),
      component: treatmentPlanComponents[index] || Pharmacological,
      configIndex: index
    }));
    const wizardData = ref(
      neonatalTreatmentPlanSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalTreatmentPlanSections.length - 1 ? "last_step" : ""
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
    const getSaveFnForStep = async (index) => {
      if (index === 0) return;
      if (index === stepperData.length - 1) {
        try {
          const patientId = patient.value?.patientID;
          if (!patientId) {
            toastWarning("Patient ID is missing. Cannot save treatment plan.");
            return;
          }
          const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;
          const isNonEmptyArray = (v) => Array.isArray(v) && v.length > 0;
          const treatments = treatmentPlanForm.treatments;
          const thermalCareDetails = treatmentPlanForm.thermalCareDetails;
          const oxygenTherapyDetails = treatmentPlanForm.oxygenTherapyDetails;
          const feedingSupportDetails = treatmentPlanForm.feedingSupportDetails;
          const admissionDetails = treatmentPlanForm.admissionDetails;
          console.log({
            treatments,
            thermalCareDetails,
            oxygenTherapyDetails,
            feedingSupportDetails,
            admissionDetails
          });
          const observations = [];
          if (isNonEmptyString(treatmentPlanForm.incubator)) {
            observations.push(await ObservationService.buildValueText("notes", treatmentPlanForm.incubator.trim()));
          }
          if (isNonEmptyArray(thermalCareDetails)) {
            for (const detail of thermalCareDetails) {
              if (isNonEmptyString(detail)) {
                observations.push(await ObservationService.buildValueCoded("thermal care", detail.trim()));
              }
            }
          }
          if (isNonEmptyArray(oxygenTherapyDetails)) {
            for (const detail of oxygenTherapyDetails) {
              if (isNonEmptyString(detail)) {
                observations.push(await ObservationService.buildValueCoded("Oxygen Therapy (Supportive, Non-Drug)", detail.trim()));
              }
            }
          }
          if (isNonEmptyArray(feedingSupportDetails)) {
            for (const detail of feedingSupportDetails) {
              if (isNonEmptyString(detail)) {
                observations.push(await ObservationService.buildValueCoded("feeding support", detail.trim()));
              }
            }
          }
          if (isNonEmptyString(admissionDetails)) {
            observations.push(await ObservationService.buildValueCoded("admission", admissionDetails.trim()));
          }
          if (isNonEmptyArray(treatments)) {
            for (const treatment of treatments) {
              if (isNonEmptyString(treatment)) {
                observations.push(await ObservationService.buildValueText("treatment", treatment.trim()));
              }
            }
          }
          if (observations.length === 0) {
            toastWarning("No treatment details selected to save.");
            return;
          }
          const encounter = await saveEncounterData(patientId, 25, observations);
          let encounter_id;
          if (encounter && lodashExports.isArray(encounter) && encounter.length > 0) {
            encounter_id = encounter[0].encounter_id;
          }
          const prescriptions = treatmentStore.nonPharmacological?.prescription || [];
          const drug_orders = prescriptions.filter((p) => p && p.drug_id && p.name).map((prescription) => ({
            dose: Number(prescription.dosage),
            frequency: prescription.frequency,
            drug: prescription.name,
            start_date: Service.getSessionDate(),
            auto_expire_date: "",
            drug_inventory_id: Number(prescription.drug_id),
            equivalent_daily_dose: 6,
            units: "",
            instructions: ""
          }));
          if (encounter_id && drug_orders.length > 0) {
            await DrugOrderService.create({ encounter_id, drug_orders });
          }
          toastSuccess("Treatment plan saved successfully.");
          await new Promise((resolve) => setTimeout(resolve, 800));
          toastSuccess("Treatment plan saved successfully.");
          await new Promise((resolve) => setTimeout(resolve, 800));
          router.push({ path: "/neonatal/checkpoint" });
        } catch (error) {
          toastWarning("Error saving treatment plan. Please try again.");
        }
      }
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
                stepperTitle: "Treatment Plan",
                openStepper: currentOpenStepper.value,
                backUrl: "/patientProfile",
                getSaveFunction: getSaveFnForStep,
                onUpdateStatus: updateStatus,
                "flow-type": "treatmentPlan",
                "show-componet-title": true,
                sectionsConfig: unref(neonatalTreatmentPlanSections)
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
