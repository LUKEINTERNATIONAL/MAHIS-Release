import { f as ref, s as defineComponent, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, C as createBaseVNode, z as createElementBlock, J as Fragment, R as renderList, D as toDisplayString, a5 as createTextVNode, H as createCommentVNode, N as IonButton, L as IonIcon, af as IonRow, bd as IonCardContent, c as computed, a2 as onMounted, aL as useRouter, ct as useRoute, w as watch, aG as IonContent, bX as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage, ab as checkmarkOutline } from './vendor-DfJM8N3R.js';
import { s as storeToRefs } from './pinia-BkjdyICH.js';
import { z as StandardForm, F as DynamicButton, C as useExposeFromStandardForm, S as Service, n as icons, y as StandardValidations, _ as _export_sfc, c8 as RegimenService, a0 as DrugService, u as useDemographicsStore, bi as useVitalsStore, bj as useInvestigationStore, bk as useDiagnosisStore, b2 as useTreatmentPlanStore, be as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, a2 as getFieldValue, H as HisDate, bl as getOfflineSavedUnsavedData, bm as MedicationSelectionHasValues, J as savePatientRecord, bn as resetNCDPatientData, t as toastWarning, ar as ConceptService, G as toastSuccess, bo as useAllegyStore, a6 as useUserStore } from '../index-DS-pfcMr.js';
import { D as DemographicBar } from './DemographicBar-BQ3f5kgl.js';
import { _ as _sfc_main$g, u as useFormWizard } from './useFormWizard-Bd4oXaWi.js';
import { u as useComplicationsStore } from './ComplicationsStore-D8OWB0ct.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore--oWw6R_I.js';
import { s as stageAllergies } from './treatment-DoUD7smQ.js';
import { l as lodashExports } from './lodash-Ci0zrWoS.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-DFjVMlLO.js';
import { u as usePatientProfile } from './usePatientProfile-BB3xcRJI.js';
import { D as DashBox } from './DashBox-D4NB70-p.js';
import { u as useLocation } from './useLocation-BIY79WiL.js';
import { s as searchHealthcareEquipmentAllergies } from './AllergyStore-y0BayYD3.js';
import { b as LungFrontMaleSVG, L as LungBackMale, c as LungFrontFemale, a as LungBackFemale } from './LungBackMale-DrTpb8dz.js';
import { A as AbdomenMaleSVG, a as AbdomenFemaleSVG } from './AbdomenFemaleSVG-3-RsSybD.js';
import { B as BedsidePlan, _ as _sfc_main$f } from './LabOrderPlan.vue_vue_type_script_setup_true_lang-C5hg0rDj.js';

const usePresentingComplaintsForm = () => {
  const presentingComplaintsOptions = ref([
    { id: "feeling-of-mass", label: "Feeling of a mass" },
    { id: "difficulty-pain-stools", label: "Difficulty/Pain on passing stools" },
    { id: "pain", label: "Pain" },
    { id: "not-passing-flatus", label: "Not passing flatus" },
    { id: "bloody-stools", label: "Passing bloody stools" },
    { id: "melena", label: "Passing melena" },
    { id: "not-passing-urine", label: "Not passing urine" },
    { id: "difficulty-passing-urine", label: "Difficulty passing urine" },
    { id: "deep-yellow-urine", label: "Passing deep yellow urine" },
    { id: "pus-in-urine", label: "Passing pus in urine" },
    { id: "not-passing-stools", label: "Not passing stools" },
    { id: "vomiting", label: "Vomiting" },
    { id: "vomiting-blood", label: "Vomiting Blood" },
    { id: "dysphagia", label: "Dysphagia" },
    { id: "odynophagia", label: "Odynophagia" },
    { id: "ulcer-wound", label: "Ulcer" },
    { id: "yellowing-eyes", label: "Yellowing of the eyes" },
    { id: "bleeding", label: "Bleeding" },
    { id: "shortness-breath", label: "Shortness of breath" },
    { id: "other", label: "Other (Specify)" }
  ]);
  const durationOptions = ref([
    { value: "minutes", label: "Minutes" },
    { value: "hours", label: "Hours" },
    { value: "days", label: "Days" },
    { value: "weeks", label: "Weeks" },
    { value: "months", label: "Months" },
    { value: "years", label: "Years" }
  ]);
  const complaintTemplate = {
    complaint: "",
    duration: 0,
    duration_unit: "",
    otherComplaintSpecify: ""
  };
  return {
    presentingComplaintsOptions,
    durationOptions,
    complaintTemplate
  };
};

const _hoisted_1$4 = { class: "complaints-section" };
const _hoisted_2$4 = {
  key: 0,
  class: "complaints-list"
};
const _hoisted_3$3 = { class: "complaint-header" };
const _hoisted_4$1 = { class: "complaint-number" };
const _hoisted_5$1 = { class: "complaint-name" };
const _hoisted_6$1 = {
  key: 0,
  class: "other-specify"
};
const _hoisted_7$1 = { class: "complaint-duration" };
const _hoisted_8 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_9 = { class: "add-complaint-section" };
const _hoisted_10 = { class: "history-section" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "PresentingComplaints",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      PRESENTING_COMPLAINTS: "presenting_complaints",
      PRESENTING_HISTORY: "presenting_history",
      DURATION: "duration",
      OTHER: "other"
    };
    const iconsContent = ref(icons);
    const complaints = ref([]);
    const { presentingComplaintsOptions, durationOptions } = usePresentingComplaintsForm();
    const presentingComplaintsOptionsMapped = computed(() => {
      return presentingComplaintsOptions.value.map((option) => ({
        id: option.id,
        name: option.label
      }));
    });
    const complaintForm = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Presenting Complaint",
          name: "complaint",
          trackBy: "id",
          label: "name",
          icon: icons.search,
          hideSelected: true,
          placeholder: "Select or search complaint...",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          options: presentingComplaintsOptionsMapped.value,
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Specify Other Complaint",
          name: "otherComplaintSpecify",
          placeholder: "Specify the complaint",
          validation: (value, allValues) => {
            if (allValues?.complaint?.id === CONCEPTS.OTHER) {
              return StandardValidations.required(value);
            }
            return null;
          },
          condition: (data) => {
            return data?.complaint?.id === CONCEPTS.OTHER;
          },
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Duration",
          name: "duration",
          type: "number",
          placeholder: "e.g., 3",
          validation: (value) => {
            if (!value || Number(value) <= 0) {
              return "Duration must be greater than 0";
            }
            return null;
          },
          unitOptions: durationOptions.value,
          unitValidation: (unitValue) => {
            return StandardValidations.required(unitValue);
          },
          grid: { s: "12", md: "6" }
        }
      ];
      return form;
    });
    const historyForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "History of Presenting Complaints",
          name: "historyOfPresentingComplaint",
          placeholder: "Describe the history of the presenting complaint in detail...",
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const { formRef: historyFormRef } = useExposeFromStandardForm();
    const addComplaint = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) return;
      if (!data?.complaint) {
        alert("Please select a complaint");
        return;
      }
      if (!data?.duration || Number(data.duration) <= 0) {
        alert("Please enter a valid duration");
        return;
      }
      if (!data?.duration_unit) {
        alert("Please select a duration unit");
        return;
      }
      if (data.complaint.id === CONCEPTS.OTHER && !data.otherComplaintSpecify) {
        alert("Please specify the other complaint");
        return;
      }
      complaints.value.push({
        complaintId: data.complaint.id,
        complaintLabel: data.complaint.name,
        duration: data.duration,
        durationUnit: data.duration_unit,
        otherComplaintSpecify: data.otherComplaintSpecify || ""
      });
      formRef.value?.resetForm();
    };
    const removeComplaint = (index) => {
      const complaint = complaints.value[index];
      const confirmRemove = confirm(`Remove "${complaint.complaintLabel}"?`);
      if (confirmRemove) {
        complaints.value.splice(index, 1);
      }
    };
    const formatDataForAPI = (complaintsList, history) => {
      const obsDatetime = Service.getSessionDate();
      const complaintObservations = complaintsList.map((complaint) => {
        const isOther = complaint.complaintId === CONCEPTS.OTHER;
        return {
          concept: complaint.complaintId,
          value: isOther ? complaint.otherComplaintSpecify : complaint.complaintId,
          obsDatetime,
          groupMembers: [
            {
              concept: CONCEPTS.DURATION,
              value: `${complaint.duration} ${complaint.durationUnit}`,
              obsDatetime
            }
          ]
        };
      });
      const obs = [
        {
          concept: CONCEPTS.PRESENTING_COMPLAINTS,
          value: CONCEPTS.PRESENTING_COMPLAINTS,
          obsDatetime,
          groupMembers: complaintObservations
        }
      ];
      if (history) {
        obs.push({
          concept: CONCEPTS.PRESENTING_HISTORY,
          value: history,
          obsDatetime
        });
      }
      return {
        presentingComplaints: {
          complaints: complaintsList,
          historyOfPresentingComplaint: history
        },
        obs
      };
    };
    const getData = () => {
      const historyData = historyFormRef.value?.getFormValues();
      const history = historyData?.historyOfPresentingComplaint || "";
      if (complaints.value.length === 0) return null;
      return formatDataForAPI(complaints.value, history);
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "form-title" }, "Presenting Complaints", -1)),
              _cache[3] || (_cache[3] = createBaseVNode("p", { class: "subtitle" }, "Document patient's chief complaints and their history", -1)),
              createBaseVNode("div", _hoisted_1$4, [
                complaints.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(complaints.value, (complaint, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "complaint-item"
                    }, [
                      createBaseVNode("div", _hoisted_3$3, [
                        createBaseVNode("span", _hoisted_4$1, toDisplayString(index + 1) + ".", 1),
                        createBaseVNode("span", _hoisted_5$1, [
                          createTextVNode(toDisplayString(complaint.complaintLabel) + " ", 1),
                          complaint.otherComplaintSpecify ? (openBlock(), createElementBlock("span", _hoisted_6$1, " (" + toDisplayString(complaint.otherComplaintSpecify) + ") ", 1)) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("span", _hoisted_7$1, toDisplayString(complaint.duration) + " " + toDisplayString(complaint.durationUnit), 1),
                        createVNode(unref(IonButton), {
                          size: "small",
                          fill: "clear",
                          color: "danger",
                          onClick: ($event) => removeComplaint(index)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              icon: iconsContent.value.trash,
                              slot: "icon-only"
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
                  createVNode(DashBox, {
                    status: true,
                    content: "No complaints added yet"
                  })
                ])),
                createBaseVNode("div", _hoisted_9, [
                  _cache[0] || (_cache[0] = createBaseVNode("h5", null, "Add New Complaint", -1)),
                  createVNode(StandardForm, {
                    formData: complaintForm.value,
                    ref_key: "formRef",
                    ref: formRef
                  }, null, 8, ["formData"]),
                  createVNode(unref(IonRow), { style: { "margin-top": "15px" } }, {
                    default: withCtx(() => [
                      createVNode(DynamicButton, {
                        fill: "clear",
                        icon: iconsContent.value.plus,
                        iconSlot: "start",
                        "onClicked:btn": addComplaint,
                        name: "Add Complaint",
                        color: "primary"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                _cache[1] || (_cache[1] = createBaseVNode("h4", null, "History of Presenting Complaint", -1)),
                createVNode(StandardForm, {
                  formData: historyForm.value,
                  ref_key: "historyFormRef",
                  ref: historyFormRef
                }, null, 8, ["formData"])
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

const PresentingComplaints = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-f7af9fa5"]]);

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "PastMedicalHistory",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      HIV: "HIV",
      ARV: "ARV",
      DRUG_ADMINISTRATION: "DRUG_ADMINISTRATION",
      DRUG_START_DATE: "DRUG_START_DATE",
      HEALTH_CENTER: "HEALTH_CENTER",
      OTHER_MEDICATION: "OTHER_MEDICATION",
      POSITIVE: "POSITIVE",
      NEGATIVE: "NEGATIVE",
      UNKNOWN: "UNKNOWN",
      YES: "YES",
      NO: "NO"
    };
    const { facilityList, getFacilities } = useLocation();
    const regimenNames = ref([]);
    const hivOptions = [
      { value: CONCEPTS.POSITIVE, label: "Positive" },
      { value: CONCEPTS.NEGATIVE, label: "Negative" },
      { value: CONCEPTS.UNKNOWN, label: "Unknown" }
    ];
    const radioOptions = [
      { value: CONCEPTS.YES, label: "YES" },
      { value: CONCEPTS.NO, label: "NO" }
    ];
    const pastMedicalHistoryForm = computed(() => {
      const form = [
        {
          componentType: "radioButtonField",
          header: "HIV status",
          name: CONCEPTS.HIV,
          type: "inline",
          options: hivOptions,
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "on antiretrovirals (ARVs)",
          name: CONCEPTS.ARV,
          type: "inline",
          options: radioOptions,
          condition: (data) => data?.[CONCEPTS.HIV] === CONCEPTS.POSITIVE,
          grid: { s: "12" }
        },
        {
          componentType: "multiSelectInputField",
          header: "ARVs given",
          name: CONCEPTS.DRUG_ADMINISTRATION,
          trackBy: "id",
          label: "name",
          hideSelected: true,
          isMultiple: true,
          placeholder: "Select ARVs",
          condition: (data) => data?.[CONCEPTS.HIV] === CONCEPTS.POSITIVE && data?.[CONCEPTS.ARV] === CONCEPTS.YES,
          options: regimenNames.value.map((item) => ({
            id: item?.id ?? item?.name ?? item?.regimen_name ?? item?.value ?? item,
            name: item?.name ?? item?.regimen_name ?? item?.label ?? item?.value ?? String(item)
          })),
          grid: { s: "12" }
        },
        {
          componentType: "dateInputField",
          header: "Since When",
          name: CONCEPTS.DRUG_START_DATE,
          condition: (data) => data?.[CONCEPTS.HIV] === CONCEPTS.POSITIVE && data?.[CONCEPTS.ARV] === CONCEPTS.YES,
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "multiSelectInputField",
          header: "Which Clinic",
          name: CONCEPTS.HEALTH_CENTER,
          trackBy: "id",
          label: "name",
          hideSelected: true,
          isMultiple: false,
          placeholder: "Select clinic",
          condition: (data) => data?.[CONCEPTS.HIV] === CONCEPTS.POSITIVE && data?.[CONCEPTS.ARV] === CONCEPTS.YES,
          options: facilityList.value.map((facility) => ({
            id: facility?.facility_name ?? facility?.name ?? facility?.label ?? facility?.id ?? facility,
            name: facility?.facility_name ?? facility?.name ?? facility?.label ?? String(facility)
          })),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "textAreaField",
          header: "Other (Past Medical History)",
          name: CONCEPTS.OTHER_MEDICATION,
          placeholder: "Add any other past medical history...",
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const mapSearchComboOptionsToConcepts = (selected, obsDatetime) => {
      if (!selected) return [];
      const items = Array.isArray(selected) ? selected : [selected];
      return items.filter(Boolean).map((item) => {
        const conceptValue = item?.id ?? item?.value ?? item?.name ?? item?.label ?? item;
        return {
          concept: conceptValue,
          value: conceptValue,
          obsDatetime
        };
      });
    };
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const drugSelections = values[CONCEPTS.DRUG_ADMINISTRATION];
      const drugGivenObs = mapSearchComboOptionsToConcepts(drugSelections, obsDatetime);
      const obs = [];
      Object.keys(values).forEach((key) => {
        if (key === CONCEPTS.DRUG_ADMINISTRATION) return;
        const normalized = normalizeValue(values[key]);
        if (normalized === null) return;
        obs.push({
          concept: key,
          value: normalized,
          obsDatetime
        });
      });
      if (drugGivenObs.length > 0) {
        obs.push({
          concept: CONCEPTS.DRUG_ADMINISTRATION,
          value: CONCEPTS.DRUG_ADMINISTRATION,
          groupMembers: drugGivenObs,
          obsDatetime
        });
      }
      return {
        obs
      };
    };
    onMounted(async () => {
      await getFacilities();
      try {
        const regimens = await RegimenService.getAllArvRegimens();
        regimenNames.value = Array.isArray(regimens) ? regimens : [];
      } catch (error) {
        console.warn("Failed to load regimen names", error);
        regimenNames.value = [];
      }
    });
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Past Medical History", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document HIV status, ARV details, and other medical history", -1)),
              createVNode(StandardForm, {
                formData: pastMedicalHistoryForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PastMedicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-e3cff6f6"]]);

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DrugList",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      MEDICATION: "MEDICATION",
      OTHER: "OTHER",
      NONE: "NONE"
    };
    const medicationOptions = ref([]);
    const isLoading = ref(false);
    const baseOptions = computed(() => [
      { id: CONCEPTS.NONE, label: "None" },
      ...medicationOptions.value,
      { id: CONCEPTS.OTHER, label: "Other" }
    ]);
    const drugListForm = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Drug",
          name: CONCEPTS.MEDICATION,
          trackBy: "id",
          label: "label",
          hideSelected: true,
          isMultiple: true,
          placeholder: "Select medications",
          loading: isLoading.value,
          validation: (value) => {
            if (!value || Array.isArray(value) && value.length === 0) {
              return StandardValidations.required(value);
            }
            return null;
          },
          options: baseOptions.value,
          onSearchChange: (searchText) => {
            fetchMedications(searchText);
          },
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Other Medications",
          name: CONCEPTS.OTHER,
          placeholder: "Specify other medications",
          condition: (data) => {
            const selected = data?.[CONCEPTS.MEDICATION] || [];
            const hasNone = selected.some((item) => item?.id === CONCEPTS.NONE);
            const hasOther = selected.some((item) => item?.id === CONCEPTS.OTHER);
            return hasOther && !hasNone;
          },
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const fetchMedications = async (searchText = "") => {
      try {
        isLoading.value = true;
        const drugs = await DrugService.getOfflineOPDDrugs({
          name: searchText,
          page: 1,
          page_size: 200
        });
        medicationOptions.value = (drugs || []).map((drug) => ({
          id: drug?.drug_id ?? drug?.id ?? drug?.uuid ?? drug?.name,
          label: drug?.name ?? drug?.label ?? String(drug)
        }));
      } catch (error) {
        console.warn("Failed to load medications", error);
        medicationOptions.value = [];
      } finally {
        isLoading.value = false;
      }
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const selectedDrugs = values[CONCEPTS.MEDICATION] || [];
      if (!selectedDrugs || selectedDrugs.length === 0) return null;
      if (selectedDrugs.some((d) => d?.id === CONCEPTS.NONE)) {
        return {
          obs: [
            {
              concept: CONCEPTS.MEDICATION,
              value: "No medications",
              obsDatetime
            }
          ]
        };
      }
      const otherValue = values[CONCEPTS.OTHER];
      const drugObs = selectedDrugs.map((drug) => {
        if (drug?.id === CONCEPTS.OTHER) {
          return {
            concept: CONCEPTS.MEDICATION,
            value: otherValue || "Other drug specified",
            obsDatetime
          };
        }
        return {
          concept: CONCEPTS.MEDICATION,
          value: drug?.label ?? drug?.name ?? drug?.id,
          obsDatetime
        };
      });
      return {
        obs: [
          {
            concept: CONCEPTS.MEDICATION,
            value: "Medication",
            groupMembers: drugObs,
            obsDatetime
          }
        ]
      };
    };
    onMounted(async () => {
      await fetchMedications();
    });
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Drug List", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document current medications", -1)),
              createVNode(StandardForm, {
                formData: drugListForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const DrugList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-6e91336f"]]);

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "PastSurgicalHistory",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      SURGICAL_HISTORY: "SURGICAL_HISTORY"
    };
    const pastSurgicalHistoryForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Surgical History",
          name: CONCEPTS.SURGICAL_HISTORY,
          placeholder: "Describe any past surgeries...",
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const obs = [];
      Object.keys(values).forEach((key) => {
        const normalized = normalizeValue(values[key]);
        if (normalized === null) return;
        obs.push({
          concept: key,
          value: normalized,
          obsDatetime
        });
      });
      return { obs };
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Past Surgical History", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document any previous surgeries", -1)),
              createVNode(StandardForm, {
                formData: pastSurgicalHistoryForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PastSurgicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d3e1edd7"]]);

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Allergy",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      ALLERGY: "ALLERGY",
      ALLERGY_DETAILS: "ALLERGY_DETAILS",
      OTHER: "OTHER"
    };
    const medicationAllergens = [
      { id: 2001, label: "Aspirin" },
      { id: 2002, label: "Ibuprofen" },
      { id: 2003, label: "Amoxicillin" },
      { id: 2004, label: "Penicillin" },
      { id: 2005, label: "Sulfa drugs" },
      { id: 2006, label: "Codeine" },
      { id: 2007, label: "Morphine" },
      { id: 2008, label: "Cephalosporins" },
      { id: 2009, label: "Erythromycin" },
      { id: 2010, label: "Tetracycline" }
    ];
    const otherAllergenOptions = [
      { id: "OTHER_MEDICATION_ALLERGEN", label: "Other Medication Allergen" },
      { id: "OTHER_MEDICAL_SUBSTANCE_ALLERGEN", label: "Other Medical Substance Allergen" },
      { id: "OTHER_SUBSTANCE_ALLERGEN", label: "Other Substance Allergen" },
      { id: "OTHER_FOOD_ALLERGEN", label: "Other Food Allergen" },
      { id: CONCEPTS.OTHER, label: "Other" }
    ];
    const allergyOptions = computed(() => {
      const hcAllergies = searchHealthcareEquipmentAllergies("").filter((a) => a?.name).map((a) => ({ id: a.concept_id ?? a.concept_name_id ?? a.uuid ?? a.name, label: a.name }));
      return [...medicationAllergens, ...hcAllergies, ...otherAllergenOptions];
    });
    const isOtherSelected = (selected) => {
      return selected.some(
        (allergy) => allergy?.label === "Other Medication Allergen" || allergy?.label === "Other Medical Substance Allergen" || allergy?.label === "Other Substance Allergen" || allergy?.label === "Other Food Allergen" || allergy?.id === CONCEPTS.OTHER
      );
    };
    const allergyForm = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Allergy",
          name: CONCEPTS.ALLERGY,
          trackBy: "id",
          label: "label",
          hideSelected: true,
          isMultiple: true,
          placeholder: "Select allergies",
          options: allergyOptions.value,
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Other",
          name: CONCEPTS.ALLERGY_DETAILS,
          placeholder: "Specify other allergy details",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          condition: (data) => {
            const selected = data?.[CONCEPTS.ALLERGY] || [];
            return isOtherSelected(selected);
          },
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const selectedAllergies = values[CONCEPTS.ALLERGY] || [];
      if (!selectedAllergies || selectedAllergies.length === 0) return null;
      const details = values[CONCEPTS.ALLERGY_DETAILS];
      const allergyObservations = selectedAllergies.map((allergy) => {
        const isOther = allergy?.label === "Other Medication Allergen" || allergy?.label === "Other Medical Substance Allergen" || allergy?.label === "Other Substance Allergen" || allergy?.label === "Other Food Allergen" || allergy?.id === CONCEPTS.OTHER;
        return {
          concept: CONCEPTS.ALLERGY,
          value: isOther ? details || "Other allergy specified" : allergy?.label,
          obsDatetime
        };
      });
      const obs = [
        {
          concept: CONCEPTS.ALLERGY,
          value: "Allergic reaction",
          groupMembers: allergyObservations,
          obsDatetime
        }
      ];
      return { obs };
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Allergy History", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document allergies and any other details", -1)),
              createVNode(StandardForm, {
                formData: allergyForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Allergy = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b29a98b4"]]);

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Intoxication",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      INTOXICATION: "INTOXICATION",
      INTOXICATION_DESCRIPTION: "INTOXICATION_DESCRIPTION",
      OTHER: "OTHER"
    };
    const intoxications = [
      { id: "none", label: "None" },
      { id: "ethanol", label: "Ethanol (Beer, Wine, Spirits)" },
      { id: "methanol", label: "Methanol" },
      { id: "isopropanol", label: "Isopropanol (Rubbing alcohol)" },
      { id: "cannabis", label: "Cannabis (Marijuana, THC products)" },
      { id: "cocaine", label: "Cocaine" },
      { id: "heroin", label: "Heroin" },
      { id: "methamphetamine", label: "Methamphetamine" },
      { id: "mdma", label: "MDMA (Ecstasy)" },
      { id: "lsd", label: "LSD (Acid)" },
      { id: "pcp", label: "PCP (Phencyclidine)" },
      { id: "ketamine", label: "Ketamine" },
      { id: "opioids", label: "Opioids (Morphine, Codeine, Oxycodone, Fentanyl, Tramadol)" },
      { id: "benzodiazepines", label: "Benzodiazepines (Diazepam, Lorazepam, Alprazolam)" },
      { id: "barbiturates", label: "Barbiturates (Phenobarbital, Secobarbital)" },
      { id: "antidepressants", label: "Antidepressants (Amitriptyline, Fluoxetine, Sertraline)" },
      { id: "antipsychotics", label: "Antipsychotics (Haloperidol, Olanzapine)" },
      { id: "acetaminophen", label: "Acetaminophen (Paracetamol)" },
      { id: "nsaids", label: "NSAIDs (Ibuprofen, Diclofenac)" },
      { id: "carbon_monoxide", label: "Carbon Monoxide" },
      { id: "cyanide", label: "Cyanide" },
      { id: "pesticides", label: "Pesticides (Organophosphates, Carbamates)" },
      { id: "heavy_metals", label: "Heavy Metals (Lead, Mercury, Arsenic)" },
      { id: "antifreeze", label: "Antifreeze (Ethylene glycol)" },
      { id: "paint_thinners", label: "Paint thinners, Glue (Toluene, Xylene)" },
      { id: "mushrooms", label: "Mushrooms (Amanita, Psilocybin)" },
      { id: "aflatoxins", label: "Aflatoxins (Contaminated grains, nuts)" },
      { id: "strychnine", label: "Strychnine" },
      { id: "poisonous_plants", label: "Poisonous berries or plants" },
      { id: "synthetic_cannabinoids", label: "Synthetic Cannabinoids (Spice, K2)" },
      { id: "bath_salts", label: "Bath salts (Synthetic cathinones)" },
      { id: "inhalants", label: "Inhalants (Nitrous oxide, Butane, Freon)" },
      { id: CONCEPTS.OTHER, label: "Other" }
    ];
    const hasOtherSelected = (selected) => {
      return selected.some((opt) => opt?.id === CONCEPTS.OTHER);
    };
    const intoxicationForm = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Intoxication",
          name: CONCEPTS.INTOXICATION,
          trackBy: "id",
          label: "label",
          hideSelected: true,
          isMultiple: true,
          placeholder: "Select intoxication",
          options: intoxications,
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Intoxication description",
          name: CONCEPTS.INTOXICATION_DESCRIPTION,
          placeholder: "Specify intoxication details",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          condition: (data) => {
            const selected = data?.[CONCEPTS.INTOXICATION] || [];
            return hasOtherSelected(selected);
          },
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const selectedIntoxications = values[CONCEPTS.INTOXICATION] || [];
      const filtered = selectedIntoxications.filter((intoxication) => intoxication?.id !== "none");
      if (!filtered || filtered.length === 0) return null;
      const details = values[CONCEPTS.INTOXICATION_DESCRIPTION];
      const intoxicationObs = filtered.map((intoxication) => {
        if (intoxication?.id === CONCEPTS.OTHER) {
          return {
            concept: CONCEPTS.INTOXICATION,
            value: details || "Other intoxication specified",
            obsDatetime
          };
        }
        return {
          concept: CONCEPTS.INTOXICATION,
          value: intoxication?.label,
          obsDatetime
        };
      });
      return {
        obs: [
          {
            concept: CONCEPTS.INTOXICATION,
            value: "Intoxication",
            groupMembers: intoxicationObs,
            obsDatetime
          }
        ]
      };
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Intoxication History", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document suspected intoxication and any details", -1)),
              createVNode(StandardForm, {
                formData: intoxicationForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Intoxication = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ac878091"]]);

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SocialHistory",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      SOCIAL_HISTORY: "SOCIAL_HISTORY"
    };
    const socialHistoryForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Social History",
          name: CONCEPTS.SOCIAL_HISTORY,
          placeholder: "Describe social history...",
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const obs = [];
      Object.keys(values).forEach((key) => {
        const normalized = normalizeValue(values[key]);
        if (normalized === null) return;
        obs.push({
          concept: key,
          value: normalized,
          obsDatetime
        });
      });
      return { obs };
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Social History", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document social history details", -1)),
              createVNode(StandardForm, {
                formData: socialHistoryForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const SocialHistory = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-0343b5f2"]]);

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FamilyHistory",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      FAMILY_HISTORY: "FAMILY_HISTORY"
    };
    const familyHistoryForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Family History",
          name: CONCEPTS.FAMILY_HISTORY,
          placeholder: "Describe family history...",
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const obs = [];
      Object.keys(values).forEach((key) => {
        const normalized = normalizeValue(values[key]);
        if (normalized === null) return;
        obs.push({
          concept: key,
          value: normalized,
          obsDatetime
        });
      });
      return { obs };
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Family History", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document relevant family history", -1)),
              createVNode(StandardForm, {
                formData: familyHistoryForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const FamilyHistory = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6f2bf839"]]);

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ReviewOfSystems",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      OTHER: "OTHER",
      REVIEW_OF_SYSTEMS_GENERAL: "REVIEW_OF_SYSTEMS_GENERAL",
      REVIEW_OF_SYSTEMS_ENT: "REVIEW_OF_SYSTEMS_ENT",
      REVIEW_OF_SYSTEMS__ENDOCRINE: "REVIEW_OF_SYSTEMS__ENDOCRINE",
      REVIEW_OF_SYSTEMS_CARDIAC: "REVIEW_OF_SYSTEMS_CARDIAC",
      SEVERE_RESPIRATORY: "SEVERE_RESPIRATORY",
      REVIEW_OF_SYSTEMS_GASTROINTESTINAL: "REVIEW_OF_SYSTEMS_GASTROINTESTINAL",
      REVIEW_OF_SYSTEMS_GENITOURINARY: "REVIEW_OF_SYSTEMS_GENITOURINARY",
      REVIEW_OF_SYSTEMS_MUSCULOSKELETAL: "REVIEW_OF_SYSTEMS_MUSCULOSKELETAL",
      REVIEW_OF_SYSTEMS_NEUROLOGIC: "REVIEW_OF_SYSTEMS_NEUROLOGIC",
      REVIEW_OF_SYSTEMS_PSYCHIATRIC: "REVIEW_OF_SYSTEMS_PSYCHIATRIC",
      SKIN_INFECTION: "SKIN_INFECTION"
    };
    const reviewOfSystemsOptions = {
      general: [
        { value: "FEVER", label: "Fever" },
        { value: "LYMPHADENOPATHY", label: "Lymphadenopathy" },
        { value: "NIGHT_SWEATS", label: "Night sweats" },
        { value: "FATIGUE", label: "Fatigue" },
        { value: "WEIGHT_LOSS", label: "Weight loss" },
        { value: CONCEPTS.OTHER, label: "Other" }
      ],
      HEENT: [
        { value: "HEADACHE", label: "Headache" },
        { value: "VISION_CHANGES", label: "Vision changes" },
        { value: "EYE_PAIN", label: "Eye pain" },
        { value: "LOSS_OF_HEARING", label: "Loss Of Hearing" },
        { value: "TINNITUS", label: "Tinnitus" },
        { value: "OTORRHOEA", label: "Otorrhoea" },
        { value: "RHINORRHEA", label: "Rhinorrhea" },
        { value: "EPISTAXIS", label: "Epistaxis" },
        { value: "SINUS_PAIN", label: "Sinus pain" },
        { value: "NASAL_STUFFINESS", label: "Nasal Stuffiness" },
        { value: "ORAL_LESIONS", label: "Oral lesions" },
        { value: "SORE_THROAT", label: "Sore Throat" },
        { value: "DYSPHAGIA", label: "Dysphagia" },
        { value: "ODYNOPHAGIA", label: "Odynophagia" }
      ],
      endocrine: [
        { value: "HEAT_TOLERANCE", label: "Heat tolerance" },
        { value: "ABNORMAL_HAIR_GROWTH", label: "Abnormal hair growth" },
        { value: "COLD_TOLERANCE", label: "Cold tolerance" },
        { value: "POLYURIA", label: "Polyuria" },
        { value: "POLYDIPSIA", label: "Polydipsia" }
      ],
      cardiovascular: [
        { value: "SHORTNESS_OF_BREATH", label: "Shortness Of Breath" },
        { value: "DYSPNOEA_ON_EXERTION", label: "Dyspnoea on exertion" },
        { value: "DYSPNOEA_AT_REST", label: "Dyspnoea at rest" },
        { value: "BLEEDING_TENDENCIES", label: "Bleeding tendencies" },
        { value: "CHEST_PAIN", label: "Chest pain" },
        { value: "HEART_PALPITATIONS", label: "Palpitations" },
        { value: "OEDEMA", label: "Oedema" },
        { value: "CYANOSIS", label: "Cyanosis" },
        { value: "CLAUDICATION", label: "Claudication" },
        { value: "ORTHOPNOEA", label: "Orthopnoea" },
        { value: "PAROXYSMAL_NOCTURNAL_DYSPNOEA", label: "Paroxysmal nocturnal dyspnoea" }
      ],
      respiratory: [
        { value: "SHORTNESS_OF_BREATH", label: "Shortness Of Breath" },
        { value: "COUGH", label: "Cough" },
        { value: "HAEMOPTYSIS", label: "Haemoptysis" },
        { value: "WHEEZING", label: "Wheezing" }
      ],
      gastrointestinal: [
        { value: "NAUSEA", label: "Nausea" },
        { value: "VOMITING", label: "Vomiting" },
        { value: "MELENA", label: "Melena" },
        { value: "HAEMATOCHEZIA", label: "Haematochezia" },
        { value: "CHANGE_IN_APPETITE", label: "Change in appetite" },
        { value: "ABDOMINALPAINS", label: "Abdominal pain" },
        { value: "CHANGE_IN_BOWEL_HABIT", label: "Change in bowel habit" },
        { value: "HEARTBURN", label: "Heartburn" }
      ],
      genitourinary: [
        { value: "DYSURIA", label: "Dysuria" },
        { value: "URGENCY", label: "Urgency" },
        { value: "INCONTINENCE", label: "Incontinence" },
        { value: "HAEMATURIA", label: "Haematuria" },
        { value: "PYURIA", label: "Pyuria" },
        { value: "SEXUALLY_TRANSMITTED_INFECTION", label: "Sexually Transmitted Infection (STI)" },
        { value: "ABNORMAL_VAGINAL_DISCHARGE", label: "Abnormal Vaginal Discharge" },
        { value: "DYSMENORRHEA", label: "Dysmenorrhea" },
        { value: "PELVIC_PAIN", label: "Pelvic pain" },
        { value: "INCREASE_URINARY_FREQUENCY", label: "Increased Urinary frequency" },
        { value: "REDUCED_URINARY_FREQUENCY", label: "Reduced urinary frequency" }
      ],
      musculoskeletal: [
        { value: "JOINT_PAIN", label: "Joint Pain" },
        { value: "SWELLING_JOINT", label: "Joint Swelling" },
        { value: "PAIN_BACK", label: "Back Pain" },
        { value: "STIFFNESS", label: "Stiffness" }
      ],
      neurological: [
        { value: "DIZZINESS", label: "Dizziness" },
        { value: "HEADACHE", label: "Headache" },
        { value: "CHANGE_IN_SMELL", label: "Change in smell" },
        { value: "CHANGE_IN_TASTE", label: "Change in taste" },
        { value: "PARAESTHESIAS", label: "Paraesthesias" },
        { value: "MUSCLE_WEAKNESS", label: "Muscle weakness" },
        { value: "ATAXIA", label: "Ataxia" },
        { value: "CHANGE_IN_SPEECH", label: "Change in speech" }
      ],
      psychiatric: [
        { value: "DEPRESSION", label: "Depression" },
        { value: "ANXIETY", label: "Anxiety" },
        { value: "HALLUCINATIONS", label: "Hallucinations" },
        { value: "MANIA", label: "Mania" },
        { value: "SUICIDAL_THOUGHTS", label: "Suicidal thoughts" },
        { value: "MOOD_CHANGES", label: "Mood Changes" }
      ],
      integumentary: [
        { value: "SKIN_RASH", label: "Skin Rash" },
        { value: "ITCHING", label: "Itching" },
        { value: "CHANGES_IN_MOLES", label: "Changes in moles" }
      ]
    };
    const categoryConceptMap = {
      general: CONCEPTS.REVIEW_OF_SYSTEMS_GENERAL,
      HEENT: CONCEPTS.REVIEW_OF_SYSTEMS_ENT,
      endocrine: CONCEPTS.REVIEW_OF_SYSTEMS__ENDOCRINE,
      cardiovascular: CONCEPTS.REVIEW_OF_SYSTEMS_CARDIAC,
      respiratory: CONCEPTS.SEVERE_RESPIRATORY,
      gastrointestinal: CONCEPTS.REVIEW_OF_SYSTEMS_GASTROINTESTINAL,
      genitourinary: CONCEPTS.REVIEW_OF_SYSTEMS_GENITOURINARY,
      musculoskeletal: CONCEPTS.REVIEW_OF_SYSTEMS_MUSCULOSKELETAL,
      neurological: CONCEPTS.REVIEW_OF_SYSTEMS_NEUROLOGIC,
      psychiatric: CONCEPTS.REVIEW_OF_SYSTEMS_PSYCHIATRIC,
      integumentary: CONCEPTS.SKIN_INFECTION
    };
    const reviewOfSystemsForm = computed(() => {
      const form = [];
      form.push({ componentType: "Heading", name: "General (Constitutional)", grid: { s: "12" } });
      form.push({
        componentType: "listSelectionField",
        name: "general",
        type: "multiple",
        options: reviewOfSystemsOptions.general,
        grid: { s: "12" }
      });
      form.push({
        componentType: "textAreaField",
        header: "Please specify other symptom",
        name: "generalOtherText",
        placeholder: "Enter other symptom...",
        validation: (value) => StandardValidations.required(value),
        condition: (data) => Array.isArray(data?.general) && data.general.includes(CONCEPTS.OTHER),
        grid: { s: "12" }
      });
      form.push({ componentType: "Dashes" });
      Object.entries(reviewOfSystemsOptions).filter(([category]) => category !== "general").forEach(([category, options]) => {
        form.push({
          componentType: "Heading",
          name: category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          grid: { s: "12" }
        });
        form.push({
          componentType: "listSelectionField",
          name: category,
          type: "multiple",
          options,
          grid: { s: "12" }
        });
        form.push({ componentType: "Dashes" });
      });
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const obs = [];
      Object.keys(reviewOfSystemsOptions).forEach((category) => {
        const selectedValues = values[category] || [];
        if (!Array.isArray(selectedValues) || selectedValues.length === 0) return;
        const categoryConcept = categoryConceptMap[category];
        if (!categoryConcept) return;
        const groupMembers = selectedValues.map((symptomConcept) => {
          if (symptomConcept === CONCEPTS.OTHER && category === "general" && values.generalOtherText) {
            return {
              concept: symptomConcept,
              value: values.generalOtherText,
              obsDatetime
            };
          }
          const option = reviewOfSystemsOptions[category].find((opt) => opt.value === symptomConcept);
          return {
            concept: symptomConcept,
            value: option?.label || symptomConcept,
            obsDatetime
          };
        });
        if (groupMembers.length > 0) {
          obs.push({
            concept: categoryConcept,
            value: categoryConcept,
            obsDatetime,
            groupMembers
          });
        }
      });
      return obs.length > 0 ? { obs } : null;
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Review of Systems", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Select all applicable symptoms by system", -1)),
              createVNode(StandardForm, {
                formData: reviewOfSystemsForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ReviewOfSystems = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5a688963"]]);

const _hoisted_1$3 = { class: "lung-image-grid" };
const _hoisted_2$3 = { class: "abdomen-image" };
const _hoisted_3$2 = { class: "gcs-summary" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PhysicalExamination",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      GENERAL: "GENERAL",
      SYSTOLIC_BLOOD_PRESSURE: "SYSTOLIC_BLOOD_PRESSURE",
      DIASTOLIC_BLOOD_PRESSURE: "DIASTOLIC_BLOOD_PRESSURE",
      PULSE_RATE: "PULSE_RATE",
      RESPIRATORY_RATE: "RESPIRATORY_RATE",
      TEMPERATURE: "TEMPERATURE",
      OXYGEN_SATURATION: "OXYGEN_SATURATION",
      PUPIL_SYMMETRICAL: "PUPIL_SYMMETRICAL",
      CONJUNCTIVA: "CONJUNCTIVA",
      ORAL_KS: "ORAL_KS",
      ORAL_THRUSH: "ORAL_THRUSH",
      JVP_RAISED: "JVP_RAISED",
      LYMPHADENOPATHY: "LYMPHADENOPATHY",
      TRACHEA_DEVIATED: "TRACHEA_DEVIATED",
      IS_TRACHEA_CENTRAL: "IS_TRACHEA_CENTRAL",
      SYMMETRICAL_EXPANSION: "SYMMETRICAL_EXPANSION",
      DESCRIPTION: "DESCRIPTION",
      LUNG_CONDITION: "CONDITION",
      APEX_BEAT: "APEX_BEAT",
      POSITIONING: "POSITIONING",
      THRILL_HEAVES: "THRILL_HEAVES",
      SPECIFY: "SPECIFY",
      AUSCULTATION: "AUSCULTATION",
      OTHER: "OTHER",
      OEDEMA: "OEDEMA",
      RASH: "RASH",
      HERPES_ZOSTER_SCAR: "HERPES_ZOSTER_SCAR",
      NECK_STIFFNESS: "NECK_STIFFNESS",
      MOTOR_RESPONSE: "MOTOR_RESPONSE",
      VERBAL_RESPONSE: "VERBAL_RESPONSE",
      EYE_OPENING_RESPONSE: "EYE_OPENING_RESPONSE",
      PUPIL: "PUPIL",
      VISUAL_FIELD_ACUITY: "VISUAL_FIELD_ACUITY",
      EYE_MOVEMENTS_NYSTAGMUS: "EYE_MOVEMENTS_NYSTAGMUS",
      EYE_MOVEMENTS_SENSATION: "EYE_MOVEMENTS_SENSATION",
      HEARING: "HEARING",
      TONGUE_MOVEMENTS_TASTES: "TONGUE_MOVEMENTS_TASTES",
      COUGH_GAG_REFLEX: "COUGH_GAG_REFLEX",
      POWER: "POWER",
      TONE: "TONE",
      REFLEXES: "REFLEXES",
      PLANTARS: "PLANTARS",
      SENSATION: "SENSATION",
      COORDINATION: "COORDINATION",
      GAIT: "GAIT",
      AUSCULTATION_LUNG: "AUSCULTATION_LUNG",
      YES: "YES",
      NO: "NO",
      PALE: "PALE",
      PINK: "PINK",
      NORMAL: "NORMAL",
      ABNORMAL: "ABNORMAL",
      DISPLACED: "DISPLACED",
      NOT_DISPLACED: "NOT_DISPLACED",
      ABSENT: "ABSENT",
      PRESENT: "PRESENT",
      SITE: "SITE"
    };
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const patientGender = computed(() => patient.value?.personInformation?.gender);
    const resolvedGender = computed(() => patientGender.value === "F" ? "F" : "M");
    const yesNoOptions = [
      { value: CONCEPTS.YES, label: "YES" },
      { value: CONCEPTS.NO, label: "NO" }
    ];
    const conjunctivaOptions = [
      { value: CONCEPTS.PALE, label: "Pale" },
      { value: CONCEPTS.PINK, label: "Pink" }
    ];
    const tracheaOptions = [
      { value: CONCEPTS.TRACHEA_DEVIATED, label: "Deviated" },
      { value: CONCEPTS.IS_TRACHEA_CENTRAL, label: "Central" }
    ];
    const normalAbnormalOptions = [
      { value: CONCEPTS.NORMAL, label: "Normal" },
      { value: CONCEPTS.ABNORMAL, label: "Abnormal" }
    ];
    const apexBeatOptions = [
      { value: CONCEPTS.DISPLACED, label: "Displaced" },
      { value: CONCEPTS.NOT_DISPLACED, label: "Not Displaced" }
    ];
    const thrillOptions = [
      { value: CONCEPTS.ABSENT, label: "Absent" },
      { value: CONCEPTS.PRESENT, label: "Present" }
    ];
    const eyeOpeningResponses = [
      { label: "Spontaneous", value: "Spontaneous", weight: 4 },
      { label: "To Speech", value: "To Speech", weight: 3 },
      { label: "To Pain", value: "To Pain", weight: 2 },
      { label: "No Response", value: "No Response", weight: 1 }
    ];
    const motorResponses = [
      { label: "Obeying Commands", value: "Obeying Commands", weight: 6 },
      { label: "Localising", value: "Localising", weight: 5 },
      { label: "Withdraw", value: "Withdraw", weight: 4 },
      { label: "Normal Flexion", value: "Normal Flexion", weight: 3 },
      { label: "Extension", value: "Extension", weight: 2 },
      { label: "None", value: "None", weight: 1 }
    ];
    const verbalResponses = [
      { label: "Oriented", value: "Oriented", weight: 5 },
      { label: "Confused", value: "Confused", weight: 4 },
      { label: "Inappropriate Words", value: "Inappropriate Words", weight: 3 },
      { label: "Incomprehensible sounds", value: "Incomprehensible sounds", weight: 2 },
      { label: "None", value: "None", weight: 1 }
    ];
    const numberValidation = (min, max) => {
      return (value) => StandardValidations.validateSeries([
        () => StandardValidations.required(value),
        () => StandardValidations.isNotEmptyandNumber(value),
        () => StandardValidations.checkMinMax(value, min, max)
      ]);
    };
    const physicalExaminationForm = computed(() => {
      const form = [
        { componentType: "Heading", name: "General", grid: { s: "12" } },
        {
          componentType: "textAreaField",
          header: "General Impression",
          name: CONCEPTS.GENERAL,
          rows: 5,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Vital Signs", grid: { s: "12" } },
        {
          componentType: "inputField",
          header: "Systolic",
          name: CONCEPTS.SYSTOLIC_BLOOD_PRESSURE,
          unit: "mmHg",
          type: "number",
          validation: numberValidation(0, 300),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "inputField",
          header: "Diastolic",
          name: CONCEPTS.DIASTOLIC_BLOOD_PRESSURE,
          unit: "mmHg",
          type: "number",
          validation: numberValidation(0, 300),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "inputField",
          header: "Pulse Rate",
          name: CONCEPTS.PULSE_RATE,
          unit: "bpm",
          type: "number",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "inputField",
          header: "Respiratory Rate",
          name: CONCEPTS.RESPIRATORY_RATE,
          unit: "bs/m",
          type: "number",
          validation: numberValidation(0, 90),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "inputField",
          header: "Temperature",
          name: CONCEPTS.TEMPERATURE,
          unit: "°C",
          type: "number",
          validation: numberValidation(20, 45),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "inputField",
          header: "Oxygen Saturation",
          name: CONCEPTS.OXYGEN_SATURATION,
          unit: "%",
          type: "number",
          validation: numberValidation(0, 100),
          grid: { s: "12", md: "6" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Head and Neck", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Pupils symmetrical",
          name: CONCEPTS.PUPIL_SYMMETRICAL,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "radioButtonField",
          header: "Conjunctiva",
          name: CONCEPTS.CONJUNCTIVA,
          type: "inline",
          options: conjunctivaOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "radioButtonField",
          header: "Oral KS",
          name: CONCEPTS.ORAL_KS,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "radioButtonField",
          header: "Oral thrush",
          name: CONCEPTS.ORAL_THRUSH,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "inputField",
          header: "JVP raised",
          name: CONCEPTS.JVP_RAISED,
          unit: "cm",
          type: "number",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "radioButtonField",
          header: "Lymphadenopathy",
          name: CONCEPTS.LYMPHADENOPATHY,
          type: "inline",
          options: yesNoOptions,
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "radioButtonField",
          header: "Trachea",
          name: CONCEPTS.TRACHEA_DEVIATED,
          type: "inline",
          options: tracheaOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Other",
          name: CONCEPTS.OTHER,
          rows: 4,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Chest", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Symmetrical expansion",
          name: CONCEPTS.SYMMETRICAL_EXPANSION,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Description",
          name: CONCEPTS.DESCRIPTION,
          rows: 4,
          validation: (value, allValues) => {
            if (allValues?.[CONCEPTS.SYMMETRICAL_EXPANSION] === CONCEPTS.NO) {
              return StandardValidations.required(value);
            }
            return null;
          },
          condition: (data) => data?.[CONCEPTS.SYMMETRICAL_EXPANSION] === CONCEPTS.NO,
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Heart", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Apex Beat",
          name: CONCEPTS.APEX_BEAT,
          type: "inline",
          options: apexBeatOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Position",
          name: CONCEPTS.POSITIONING,
          rows: 4,
          condition: (data) => data?.[CONCEPTS.APEX_BEAT] === CONCEPTS.DISPLACED,
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "Thrill/Heaves",
          name: CONCEPTS.THRILL_HEAVES,
          type: "inline",
          options: thrillOptions,
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Specify",
          name: CONCEPTS.SPECIFY,
          rows: 4,
          condition: (data) => data?.[CONCEPTS.THRILL_HEAVES] === CONCEPTS.PRESENT,
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Auscultations",
          name: CONCEPTS.AUSCULTATION,
          rows: 4,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Lungs", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Lung Condition",
          name: CONCEPTS.LUNG_CONDITION,
          type: "inline",
          options: normalAbnormalOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "Slot",
          name: "lungImages",
          slotName: "lungImages",
          condition: (data) => data?.[CONCEPTS.LUNG_CONDITION] === CONCEPTS.ABNORMAL,
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Auscultation",
          name: CONCEPTS.AUSCULTATION_LUNG,
          rows: 4,
          validation: (value, allValues) => {
            if (allValues?.[CONCEPTS.LUNG_CONDITION] === CONCEPTS.ABNORMAL) {
              return StandardValidations.required(value);
            }
            return null;
          },
          condition: (data) => data?.[CONCEPTS.LUNG_CONDITION] === CONCEPTS.ABNORMAL,
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Abdomen", grid: { s: "12" } },
        {
          componentType: "Slot",
          name: "abdomenImage",
          slotName: "abdomenImage",
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Extremities", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Oedema",
          name: CONCEPTS.OEDEMA,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Skin", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Rash",
          name: CONCEPTS.RASH,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        {
          componentType: "radioButtonField",
          header: "Herpes zoster scar",
          name: CONCEPTS.HERPES_ZOSTER_SCAR,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", md: "6" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Neurological", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Neck Stiffness",
          name: CONCEPTS.NECK_STIFFNESS,
          type: "inline",
          options: yesNoOptions,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        { componentType: "Heading", name: "Glasgow Coma Scale (GCS)", grid: { s: "12" } },
        {
          componentType: "radioButtonField",
          header: "Motor Response",
          name: CONCEPTS.MOTOR_RESPONSE,
          options: motorResponses,
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "Eye Opening Response",
          name: CONCEPTS.EYE_OPENING_RESPONSE,
          options: eyeOpeningResponses,
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "Verbal Response",
          name: CONCEPTS.VERBAL_RESPONSE,
          options: verbalResponses,
          grid: { s: "12" }
        },
        {
          componentType: "Slot",
          name: "gcsScore",
          slotName: "gcsScore",
          grid: { s: "12" }
        },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Cranial Nerves", grid: { s: "12" } },
        { componentType: "textAreaField", header: "Pupil", name: CONCEPTS.PUPIL, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Visual Field/Acuity", name: CONCEPTS.VISUAL_FIELD_ACUITY, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Eye Movements/Nystagmus", name: CONCEPTS.EYE_MOVEMENTS_NYSTAGMUS, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Facial Movements / Sensation", name: CONCEPTS.EYE_MOVEMENTS_SENSATION, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Hearing", name: CONCEPTS.HEARING, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Tongue Movement/Tastes", name: CONCEPTS.TONGUE_MOVEMENTS_TASTES, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Cough/Gag Reflex", name: CONCEPTS.COUGH_GAG_REFLEX, grid: { s: "12" } },
        { componentType: "Dashes" },
        { componentType: "Heading", name: "Peripheral nerves", grid: { s: "12" } },
        { componentType: "textAreaField", header: "Power", name: CONCEPTS.POWER, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Tone", name: CONCEPTS.TONE, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Reflexes", name: CONCEPTS.REFLEXES, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Plantars", name: CONCEPTS.PLANTARS, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Sensation", name: CONCEPTS.SENSATION, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Coordination", name: CONCEPTS.COORDINATION, grid: { s: "12" } },
        { componentType: "textAreaField", header: "Gait", name: CONCEPTS.GAIT, grid: { s: "12" } }
      ];
      return form;
    });
    const getWeight = (value, lists) => {
      const found = lists.find((l) => l.value === value);
      return found ? found.weight : 0;
    };
    const { formRef } = useExposeFromStandardForm();
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const mapBodyPartsObs = (entries, obsDatetime) => {
      if (!Array.isArray(entries) || entries.length === 0) return [];
      return entries.map((entry) => {
        const label = entry?.["Body Part"] ?? entry?.bodyPart ?? entry?.part ?? "Body Part";
        const value = entry?.notes ?? entry?.description ?? label;
        return {
          concept: label,
          value,
          obsDatetime
        };
      });
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const obs = [];
      Object.keys(values).forEach((key) => {
        if (["bodyPartsDataAnterior", "bodyPartsDataPosterior", "bodyPartsDataAbdomen"].includes(key)) return;
        const normalized = normalizeValue(values[key]);
        if (normalized === null) return;
        obs.push({
          concept: key,
          value: normalized,
          obsDatetime
        });
      });
      const anteriorObs = mapBodyPartsObs(values.bodyPartsDataAnterior || [], obsDatetime);
      if (anteriorObs.length > 0) {
        obs.push({
          concept: CONCEPTS.SITE,
          value: "Lung Anterior",
          groupMembers: anteriorObs,
          obsDatetime
        });
      }
      const posteriorObs = mapBodyPartsObs(values.bodyPartsDataPosterior || [], obsDatetime);
      if (posteriorObs.length > 0) {
        obs.push({
          concept: CONCEPTS.SITE,
          value: "Lung Posterior",
          groupMembers: posteriorObs,
          obsDatetime
        });
      }
      const abdomenObs = mapBodyPartsObs(values.bodyPartsDataAbdomen || [], obsDatetime);
      if (abdomenObs.length > 0) {
        obs.push({
          concept: CONCEPTS.SITE,
          value: "Abdomen",
          groupMembers: abdomenObs,
          obsDatetime
        });
      }
      return obs.length > 0 ? { obs } : null;
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Physical Examination", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Comprehensive clinical examination findings", -1)),
              createVNode(StandardForm, {
                formData: physicalExaminationForm.value,
                ref_key: "formRef",
                ref: formRef
              }, {
                lungImages: withCtx(({ formValues, updateValue }) => [
                  createBaseVNode("div", _hoisted_1$3, [
                    resolvedGender.value === "M" && formValues?.[CONCEPTS.LUNG_CONDITION] === CONCEPTS.ABNORMAL ? (openBlock(), createBlock(LungFrontMaleSVG, {
                      key: 0,
                      currentValues: formValues,
                      onValueChanged: (_fieldName, value) => updateValue("bodyPartsDataAnterior", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                    resolvedGender.value === "M" && formValues?.[CONCEPTS.LUNG_CONDITION] === CONCEPTS.ABNORMAL ? (openBlock(), createBlock(LungBackMale, {
                      key: 1,
                      currentValues: formValues,
                      onValueChanged: (_fieldName, value) => updateValue("bodyPartsDataPosterior", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                    resolvedGender.value === "F" && formValues?.[CONCEPTS.LUNG_CONDITION] === CONCEPTS.ABNORMAL ? (openBlock(), createBlock(LungFrontFemale, {
                      key: 2,
                      currentValues: formValues,
                      onValueChanged: (_fieldName, value) => updateValue("bodyPartsDataAnterior", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true),
                    resolvedGender.value === "F" && formValues?.[CONCEPTS.LUNG_CONDITION] === CONCEPTS.ABNORMAL ? (openBlock(), createBlock(LungBackFemale, {
                      key: 3,
                      currentValues: formValues,
                      onValueChanged: (_fieldName, value) => updateValue("bodyPartsDataPosterior", value)
                    }, null, 8, ["currentValues", "onValueChanged"])) : createCommentVNode("", true)
                  ])
                ]),
                abdomenImage: withCtx(({ updateValue }) => [
                  createBaseVNode("div", _hoisted_2$3, [
                    resolvedGender.value === "M" ? (openBlock(), createBlock(AbdomenMaleSVG, {
                      key: 0,
                      onValueChanged: (_fieldName, value) => updateValue("bodyPartsDataAbdomen", value)
                    }, null, 8, ["onValueChanged"])) : createCommentVNode("", true),
                    resolvedGender.value === "F" ? (openBlock(), createBlock(AbdomenFemaleSVG, {
                      key: 1,
                      onValueChanged: (_fieldName, value) => updateValue("bodyPartsDataAbdomen", value)
                    }, null, 8, ["onValueChanged"])) : createCommentVNode("", true)
                  ])
                ]),
                gcsScore: withCtx(({ formValues }) => [
                  createBaseVNode("div", _hoisted_3$2, [
                    createBaseVNode("strong", null, "(V " + toDisplayString(getWeight(formValues?.[CONCEPTS.VERBAL_RESPONSE], verbalResponses)) + " + E " + toDisplayString(getWeight(formValues?.[CONCEPTS.EYE_OPENING_RESPONSE], eyeOpeningResponses)) + " + M " + toDisplayString(getWeight(formValues?.[CONCEPTS.MOTOR_RESPONSE], motorResponses)) + ")", 1),
                    createTextVNode(" = " + toDisplayString(getWeight(formValues?.[CONCEPTS.MOTOR_RESPONSE], motorResponses) + getWeight(formValues?.[CONCEPTS.VERBAL_RESPONSE], verbalResponses) + getWeight(formValues?.[CONCEPTS.EYE_OPENING_RESPONSE], eyeOpeningResponses)) + "/15 ", 1)
                  ])
                ]),
                _: 1
              }, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PhysicalExamination = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8e06de61"]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Summary",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      SUMMARY: "SUMMARY"
    };
    const summaryForm = computed(() => {
      const form = [
        {
          componentType: "Heading",
          name: "Summary",
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Summary",
          name: CONCEPTS.SUMMARY,
          rows: 5,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const normalized = normalizeValue(values[CONCEPTS.SUMMARY]);
      if (!normalized) return null;
      return {
        obs: [
          {
            concept: CONCEPTS.SUMMARY,
            value: normalized,
            obsDatetime
          }
        ]
      };
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Summary", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Provide a concise summary of findings", -1)),
              createVNode(StandardForm, {
                formData: summaryForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Summary = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ea6d67f8"]]);

const _hoisted_1$2 = {
  key: 0,
  class: "diagnoses-table"
};
const _hoisted_2$2 = { class: "table-wrapper" };
const _hoisted_3$1 = { class: "code-cell" };
const _hoisted_4 = { class: "diagnosis-cell" };
const _hoisted_5 = { class: "action-cell" };
const _hoisted_6 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_7 = { class: "search-section" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DifferentialDiagnosis",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      DIFFERENTIAL_DIAGNOSIS: "DIFFERENTIAL_DIAGNOSIS"
    };
    const iconsContent = ref(icons);
    const selectedDiagnoses = ref([]);
    const savedDiagnoses = ref([]);
    const icd11Diagnoses = ref([
      { concept_id: "1A00", name: "Cholera" },
      { concept_id: "1A01", name: "Typhoid fever" },
      { concept_id: "1A02", name: "Paratyphoid fever" },
      { concept_id: "1A03", name: "Shigellosis" },
      { concept_id: "1C62", name: "Malaria" },
      { concept_id: "1E50", name: "Acute myocardial infarction" },
      { concept_id: "1E51", name: "Angina pectoris" },
      { concept_id: "2A00", name: "Type 1 diabetes mellitus" },
      { concept_id: "2A01", name: "Type 2 diabetes mellitus" },
      { concept_id: "8A80", name: "Essential hypertension" },
      { concept_id: "CA40", name: "Acute appendicitis" },
      { concept_id: "DA14", name: "Pneumonia" },
      { concept_id: "DB10", name: "Asthma" },
      { concept_id: "DD70", name: "Gastroenteritis" },
      { concept_id: "FA01", name: "Urinary tract infection" },
      { concept_id: "6A70", name: "Depression" },
      { concept_id: "6A71", name: "Anxiety disorder" },
      { concept_id: "8A62", name: "Anaemia" },
      { concept_id: "9B71", name: "Fracture of femur" },
      { concept_id: "2E85", name: "Hypothyroidism" }
    ]);
    const diagnosisSearchForm = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Diagnosis",
          name: "diagnosis",
          trackBy: "concept_id",
          label: "name",
          icon: icons.search,
          hideSelected: true,
          placeholder: "Start typing to search diagnoses...",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          options: icd11Diagnoses.value,
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const addDiagnosis = () => {
      const data = formRef.value?.getFormValues?.();
      const validation = formRef.value?.validateForm?.();
      if (validation != null) {
        return;
      }
      const selected = data?.diagnosis;
      if (!selected) return;
      const isDuplicate = selectedDiagnoses.value.some((item) => item.code === selected.concept_id);
      if (isDuplicate) {
        return;
      }
      selectedDiagnoses.value.push({
        code: selected.concept_id,
        diagnosis: selected.name
      });
      formRef.value?.resetForm?.();
    };
    const removeDiagnosis = (index) => {
      selectedDiagnoses.value.splice(index, 1);
    };
    const saveDiagnoses = () => {
      savedDiagnoses.value = [...selectedDiagnoses.value];
    };
    const buildObs = (diagnoses) => {
      const obsDatetime = Service.getSessionDate();
      const diagnosisObs = diagnoses.map((diagnosis) => ({
        concept: CONCEPTS.DIFFERENTIAL_DIAGNOSIS,
        value: `${diagnosis.code}-${diagnosis.diagnosis}`,
        obsDatetime
      }));
      return {
        obs: [
          {
            concept: CONCEPTS.DIFFERENTIAL_DIAGNOSIS,
            value: CONCEPTS.DIFFERENTIAL_DIAGNOSIS,
            obsDatetime,
            groupMembers: diagnosisObs
          }
        ]
      };
    };
    const getData = () => {
      const diagnoses = savedDiagnoses.value.length > 0 ? savedDiagnoses.value : selectedDiagnoses.value;
      if (!diagnoses || diagnoses.length === 0) return null;
      return buildObs(diagnoses);
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "form-title" }, "Differential Diagnosis", -1)),
              _cache[6] || (_cache[6] = createBaseVNode("p", { class: "subtitle" }, "Add possible diagnoses based on clinical findings", -1)),
              selectedDiagnoses.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
                _cache[3] || (_cache[3] = createBaseVNode("h4", null, "Selected Diagnoses", -1)),
                createBaseVNode("div", _hoisted_2$2, [
                  createBaseVNode("table", null, [
                    _cache[2] || (_cache[2] = createBaseVNode("thead", null, [
                      createBaseVNode("tr", null, [
                        createBaseVNode("th", null, "Code"),
                        createBaseVNode("th", null, "Diagnosis"),
                        createBaseVNode("th", null, "Actions")
                      ])
                    ], -1)),
                    createBaseVNode("tbody", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(selectedDiagnoses.value, (diagnosis, index) => {
                        return openBlock(), createElementBlock("tr", { key: index }, [
                          createBaseVNode("td", _hoisted_3$1, toDisplayString(diagnosis.code), 1),
                          createBaseVNode("td", _hoisted_4, toDisplayString(diagnosis.diagnosis), 1),
                          createBaseVNode("td", _hoisted_5, [
                            createVNode(unref(IonButton), {
                              size: "small",
                              fill: "clear",
                              color: "danger",
                              onClick: ($event) => removeDiagnosis(index)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonIcon), {
                                  icon: iconsContent.value.trash,
                                  slot: "icon-only"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
                createVNode(DashBox, {
                  status: true,
                  content: "No diagnoses added yet"
                })
              ])),
              createBaseVNode("div", _hoisted_7, [
                _cache[4] || (_cache[4] = createBaseVNode("h4", null, "Add Diagnosis", -1)),
                createVNode(StandardForm, {
                  formData: diagnosisSearchForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"]),
                createVNode(unref(IonRow), { style: { "margin-top": "15px" } }, {
                  default: withCtx(() => [
                    createVNode(DynamicButton, {
                      fill: "clear",
                      icon: iconsContent.value.plus,
                      iconSlot: "start",
                      "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addDiagnosis()),
                      name: "Add Diagnosis",
                      color: "primary"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              selectedDiagnoses.value.length > 0 ? (openBlock(), createBlock(unref(IonRow), {
                key: 2,
                style: { "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[1] || (_cache[1] = ($event) => saveDiagnoses()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const DifferentialDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8cea1166"]]);

const _hoisted_1$1 = { class: "section" };
const _hoisted_2$1 = { class: "section" };
const _hoisted_3 = { class: "section" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Investigations",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      ASSESSMENT: "ASSESSMENT",
      ADDITIONAL_NOTES: "ADDITIONAL_NOTES"
    };
    const investigationsForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Radiological",
          name: CONCEPTS.ASSESSMENT,
          rows: 6,
          placeholder: "Enter radiological findings, imaging results, or interpretations...",
          grid: { s: "12" }
        },
        {
          componentType: "Heading",
          name: "Other Tests",
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Other Tests",
          name: CONCEPTS.ADDITIONAL_NOTES,
          rows: 6,
          placeholder: "Enter any additional investigation notes, observations, or recommendations...",
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const obs = [];
      Object.keys(values).forEach((key) => {
        const normalized = normalizeValue(values[key]);
        if (normalized === null) return;
        obs.push({
          concept: key,
          value: normalized,
          obsDatetime
        });
      });
      return obs.length > 0 ? { obs } : null;
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "form-title" }, "Investigations", -1)),
              _cache[4] || (_cache[4] = createBaseVNode("p", { class: "subtitle" }, "Record bedside, laboratory, and radiological findings", -1)),
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "notice-banner" }, " Only record here if samples have been obtained/X-ray forms completed ", -1)),
              createBaseVNode("div", _hoisted_1$1, [
                _cache[0] || (_cache[0] = createBaseVNode("h4", { class: "section-title" }, "Bedside", -1)),
                createVNode(BedsidePlan)
              ]),
              createBaseVNode("div", _hoisted_2$1, [
                _cache[1] || (_cache[1] = createBaseVNode("h4", { class: "section-title" }, "Laboratory", -1)),
                createVNode(_sfc_main$f)
              ]),
              createBaseVNode("div", _hoisted_3, [
                _cache[2] || (_cache[2] = createBaseVNode("h4", { class: "section-title" }, "Radiological", -1)),
                createVNode(StandardForm, {
                  formData: investigationsForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
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

const Investigation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c62a0a1d"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ManagementPlan",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      PLAN: "PLAN"
    };
    const managementPlanForm = computed(() => {
      const form = [
        {
          componentType: "Heading",
          name: "Management Plan",
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Management Plan",
          name: CONCEPTS.PLAN,
          rows: 8,
          placeholder: "Enter the management plan including medications, interventions, and follow-up care...",
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const normalizeValue = (value) => {
      if (value === null || value === void 0 || value === "") return null;
      if (Array.isArray(value)) return value.length > 0 ? value : null;
      if (typeof value === "object") {
        return value.id ?? value.value ?? value.name ?? value.label ?? null;
      }
      return value;
    };
    const getData = () => {
      const values = formRef.value?.getFormValues?.() || {};
      const obsDatetime = Service.getSessionDate();
      const normalized = normalizeValue(values[CONCEPTS.PLAN]);
      if (!normalized) return null;
      return {
        obs: [
          {
            concept: CONCEPTS.PLAN,
            value: normalized,
            obsDatetime
          }
        ]
      };
    };
    __expose({
      getData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "form-title" }, "Management Plan", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "subtitle" }, "Document medications, interventions, and follow-up care", -1)),
              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "notice-banner" }, " Document the comprehensive management plan including medications, interventions, and follow-up care ", -1)),
              createVNode(StandardForm, {
                formData: managementPlanForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ManagementPlan = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-351ce2df"]]);

const _hoisted_1 = { style: { "width": "88vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MedicalAdmission",
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    usePatientProfile();
    const router = useRouter();
    const route = useRoute();
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const vitalsStore = useVitalsStore();
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useDiagnosisStore();
    useTreatmentPlanStore();
    const ncdMedicationsStore = useNCDMedicationsStore();
    const generalStore = useGeneralStore();
    useOutcomeStore();
    const enrollmentStore = useEnrollementStore();
    const complicationsStore = useComplicationsStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { diagnosis } = storeToRefs(diagnosisStore);
    const { substance } = storeToRefs(enrollmentStore);
    const { selectedNCDMedicationList } = storeToRefs(ncdMedicationsStore);
    const { FootScreening, visualScreening, cvScreening } = storeToRefs(complicationsStore);
    const { sessionDate } = storeToRefs(configStore);
    const { apiStatus } = storeToRefs(useStatusStore());
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
        if (newOptions.disabled !== oldOptions?.disabled) {
          console.log(`Done button ${newOptions.disabled ? "disabled" : "enabled"}`);
        }
        if (newOptions.text !== oldOptions?.text) {
          console.log(`Done button text changed from "${oldOptions?.text}" to "${newOptions.text}"`);
        }
      },
      { deep: true }
    );
    watch(isSaving, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        console.log(`Saving state changed: ${oldValue} -> ${newValue}`);
        if (newValue) {
          console.log("Starting save process...");
        } else {
          console.log("Save process completed");
        }
      }
    });
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const openBackController = () => {
      router.push("/patient-profile");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Presenting Complaints",
          icon: ""
        },
        {
          title: "Drug History",
          icon: ""
        },
        {
          title: "Past Medical History",
          icon: ""
        },
        {
          title: "Past Surgical History",
          icon: ""
        },
        {
          title: "Allergy",
          icon: ""
        },
        {
          title: "Intoxication",
          icon: ""
        },
        {
          title: "Social History",
          icon: ""
        },
        {
          title: "Family History",
          icon: ""
        },
        {
          title: "Review of Systems",
          icon: ""
        },
        {
          title: "Physical Examination",
          icon: ""
        },
        {
          title: "Summary",
          icon: ""
        },
        {
          title: "Differential Diagnosis",
          icon: ""
        },
        {
          title: "Investigation",
          icon: ""
        },
        {
          title: "Management Plan",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const vitalsRef = ref(null);
    const riskAssessmentRef = ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Presenting Complaints":
          return "PresentingComplaints";
        case "Drug History":
          return "DrugList";
        case "Past Medical History":
          return "PastMedicalHistory";
        case "Past Surgical History":
          return "PastSurgicalHistory";
        case "Allergy":
          return "Allergy";
        case "Intoxication":
          return "Intoxication";
        case "Social History":
          return "SocialHistory";
        case "Family History":
          return "FamilyHistory";
        case "Review of Systems":
          return "ReviewOfSystems";
        case "Physical Examination":
          return "PhysicalExamination";
        case "Summary":
          return "Summary";
        case "Differential Diagnosis":
          return "DifferentialDiagnosis";
        case "Investigation":
          return "Investigation";
        case "Management Plan":
          return "ManagementPlan";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Presenting Complaints":
                return "PresentingComplaints";
              case "Drug History":
                return "DrugList";
              case "Past Medical History":
                return "PastMedicalHistory";
              case "Past Surgical History":
                return "PastSurgicalHistory";
              case "Allergy":
                return "Allergy";
              case "Intoxication":
                return "Intoxication";
              case "Social History":
                return "SocialHistory";
              case "Family History":
                return "FamilyHistory";
              case "Review of Systems":
                return "ReviewOfSystems";
              case "Physical Examination":
                return "PhysicalExamination";
              case "Summary":
                return "Summary";
              case "Differential Diagnosis":
                return "DifferentialDiagnosis";
              case "Investigation":
                return "Investigation";
              case "Management Plan":
                return "ManagementPlan";
            }
          }
          return null;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const cleanVitalForm = () => {
      const vitals2 = useVitalsStore();
      vitals2.setVitals(vitals2.getInitialVitals(patient.value.ID));
    };
    const markWizard = async () => {
      const sessionD = getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      const vitalsData = getOfflineSavedUnsavedData("vitals");
      for (let i = 0; i < tabs.value.length; i++) {
        const tab = tabs.value[i];
        if (tab.title === "Vital Signs") {
          tabs.value[i].icon = isDateInArray(sessionD, vitalsData) ? checkmarkOutline : "";
        } else if (tab.title === "Risk Assessment") {
          const substanceAbuseData = getOfflineSavedUnsavedData("substanceAbuse");
          tabs.value[i].icon = isDateInArray(sessionD, substanceAbuseData) ? checkmarkOutline : "";
        } else if (tab.title === "Investigations") {
          const labOrders = patient?.value?.labOrders?.saved;
          const filteredArray = labOrders?.filter((obj) => {
            return HisDate.toStandardHisFormat(sessionD) === HisDate.toStandardHisFormat(obj.order_date);
          });
          tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
        } else if (tab.title === "Diagnosis") {
          const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
          tabs.value[i].icon = isDateInArray(sessionD, diagnosisData) ? checkmarkOutline : "";
        } else if (tab.title === "Complications Screening") {
          const screeningData = getOfflineSavedUnsavedData("screening");
          tabs.value[i].icon = isDateInArray(sessionD, screeningData) ? checkmarkOutline : "";
        } else if (tab.title === "Treatment Plan") {
          if (selectedNCDMedicationList.value.length > 0) {
            tabs.value[i].icon = MedicationSelectionHasValues() ? checkmarkOutline : "";
          } else {
            tabs.value[i].icon = "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, diagnosisArray) => {
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return diagnosisArray.some((diagnosis2) => {
        const obsDate = new Date(diagnosis2.obs_datetime);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveComplications = async () => {
      const data = [];
      const childDataVisualScreening = await formatInputFiledData(visualScreening.value);
      const childDataFootScreening = await formatGroupRadioButtonData(FootScreening.value);
      const childDataCVRisk = await formatInputFiledData(cvScreening.value);
      if (childDataVisualScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Visual acuity", true),
          value_text: "visual acuity test",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataVisualScreening
        });
      }
      if (childDataFootScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Foot check", true),
          value_text: "foot screening",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataFootScreening
        });
      }
      if (childDataCVRisk.length > 0) {
        data.push(...childDataCVRisk);
      }
      if (data.length > 0) {
        (patient.value.screening ??= {}).unsaved ??= [];
        patient.value.screening.unsaved.push(...data);
        toastSuccess("Complications saved successfully");
      } else {
        toastWarning("No complications data to save");
      }
    };
    const saveTreatmentPlan = async () => {
      const allergyStore = useAllegyStore();
      if (!lodashExports.isEmpty(allergyStore.selectedMedicalAllergiesList)) {
        const userStore = useUserStore();
        const allergies = allergyStore.selectedMedicalAllergiesList.map((allergy) => ({
          concept_id: allergy.concept_id,
          obs_datetime: Service.getSessionDate(),
          value_coded: allergy.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: allergy.name
        }));
        const patientData2 = await stageAllergies(allergies);
        patient.value = Object.assign(patient.value, patientData2);
        console.log("Allergies staged successfully:", patient.value);
        allergyStore.clearSelectedMedicalAllergiesList();
      }
      const m_patientData = await createNCDDrugOrder();
      patient.value = Object.assign(patient.value, m_patientData);
      const patientData = await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      patient.value = Object.assign(patient.value, patientData);
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "Risk Assessment") {
        riskAssessmentRef.value?.onSubmit();
      }
      if (value == "Complications Screening") {
        await saveComplications();
      }
      if (value == "Treatment Plan") {
        await saveTreatmentPlan();
      }
      await savePatientRecord(patient.value);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await resetNCDPatientData();
        await savePatientRecord(patient.value);
        router.push("/aetc/triage-list");
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    onMounted(async () => {
      if (generalStore.NCDActivities.length === 0) {
        router.push("/patient-profile");
        return;
      }
      const data = useComplicationsStore();
      data.resetScreening();
      tabs.value = getActiveTabs();
      await markWizard();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      vitals,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        const data = useComplicationsStore();
        data.resetScreening();
        await markWizard();
      },
      { deep: true }
    );
    watch(
      sessionDate,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      investigations,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      diagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      substance,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedNCDMedicationList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        refreshWizard();
        cleanVitalForm();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (old, newData) => {
        if (old.ID != newData.ID) {
          refreshWizard();
          cleanVitalForm();
        }
      },
      { deep: true }
    );
    __expose({
      saveData,
      markWizard,
      refreshWizard,
      validateDoneButtonState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$g, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Medical Inpatient Admission Sheet",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PresentingComplaints, { ref: "presentingComplaintsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingComplaints"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(DrugList, { ref: "drugListRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DrugList"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PastMedicalHistory, { ref: "pastMedicalHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PastMedicalHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PastSurgicalHistory, { ref: "pastSurgicalHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PastSurgicalHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Allergy, { ref: "allergyRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Allergy"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Intoxication, { ref: "IntoxicationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Intoxication"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(SocialHistory, { ref: "socialHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "SocialHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(FamilyHistory, { ref: "familyHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "FamilyHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ReviewOfSystems, { ref: "reviewOfSystemsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ReviewOfSystems"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PhysicalExamination, { ref: "physicalExaminationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PhysicalExamination"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Summary, { ref: "summaryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Summary"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(DifferentialDiagnosis, { ref: "differentialDiagnosisRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DifferentialDiagnosis"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Investigation, { ref: "investigationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Investigation"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ManagementPlan, { ref: "managementPlanRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ManagementPlan"]
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

export { _sfc_main as default };
