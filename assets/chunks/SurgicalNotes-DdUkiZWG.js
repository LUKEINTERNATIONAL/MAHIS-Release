import { s as defineComponent, w as watch, y as openBlock, O as createBlock, F as unref, bL as IonCard, B as withCtx, A as createVNode, C as createBaseVNode, z as createElementBlock, J as Fragment, S as renderList, D as toDisplayString, a5 as createTextVNode, H as createCommentVNode, N as IonButton, L as IonIcon, af as IonRow, bb as IonCardHeader, ba as IonCardTitle, bd as IonCardContent, f as ref, c as computed, aq as IonItem, ae as IonCheckbox, a7 as IonLabel, Q as normalizeClass, a6 as IonInput, r as reactive, a3 as onMounted, ap as IonList, T as withDirectives, U as vShow, cS as defineAsyncComponent, cI as __vitePreload, aL as useRouter, bM as useRoute, aG as IonContent, bZ as chevronBackOutline, bv as IonPage, ab as checkmarkOutline } from './vendor-BRtiyW5a.js';
import { s as storeToRefs } from './pinia-BGmPTYET.js';
import { z as StandardForm, F as DynamicButton, C as useExposeFromStandardForm, n as icons, y as StandardValidations, _ as _export_sfc, a_ as List, u as useDemographicsStore, bi as useVitalsStore, bj as useInvestigationStore, bk as useDiagnosisStore, b2 as useTreatmentPlanStore, be as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, a2 as getFieldValue, H as HisDate, bl as getOfflineSavedUnsavedData, bm as MedicationSelectionHasValues, J as savePatientRecord, bn as resetNCDPatientData, t as toastWarning, ar as ConceptService, G as toastSuccess, bo as useAllegyStore, a6 as useUserStore, S as Service } from '../index-DokYH-dt.js';
import { D as DemographicBar } from './DemographicBar-6oXu7Ex1.js';
import { _ as _sfc_main$d, u as useFormWizard } from './useFormWizard-DvyjItF1.js';
import { u as useComplicationsStore } from './ComplicationsStore-QoR3h2-i.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-CiNwxby8.js';
import { s as stageAllergies } from './treatment-Dsfq-zOv.js';
import { l as lodashExports } from './lodash-g92VkwM8.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-DeAnXmZj.js';
import { u as usePatientProfile } from './usePatientProfile-BdH2PPkl.js';
import { D as DashBox } from './DashBox-DPh8j3IF.js';
import { _ as _sfc_main$e, C as CirculationAssessment, D as DisabilityAssessment, E as ExposureAssessment } from './ExposureAssessment-hzHvmqhJ.js';

const _hoisted_1$c = { class: "complaints-section" };
const _hoisted_2$c = {
  key: 0,
  class: "complaints-list"
};
const _hoisted_3$b = { class: "complaint-header" };
const _hoisted_4$a = { class: "complaint-number" };
const _hoisted_5$a = { class: "complaint-name" };
const _hoisted_6$9 = {
  key: 0,
  class: "other-specify"
};
const _hoisted_7$8 = { class: "complaint-duration" };
const _hoisted_8$7 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_9$6 = { class: "add-complaint-section" };
const _hoisted_10$4 = { class: "history-section" };
const _hoisted_11$4 = {
  key: 1,
  class: "saved-complaints"
};
const _hoisted_12$3 = { class: "summary-content" };
const _hoisted_13$3 = { class: "summary-section" };
const _hoisted_14$2 = { class: "saved-complaints-list" };
const _hoisted_15$2 = { class: "saved-complaint-name" };
const _hoisted_16$2 = {
  key: 0,
  class: "saved-other"
};
const _hoisted_17$1 = { class: "saved-duration" };
const _hoisted_18$1 = { class: "summary-section" };
const _hoisted_19$1 = { class: "history-text" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "PresentingComplaintsForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      PRESENTING_COMPLAINTS: "presenting_complaints",
      PRESENTING_HISTORY: "presenting_history",
      DURATION: "duration",
      OTHER: "other",
      // Complaint options
      FEELING_OF_A_MASS: "feeling_of_mass",
      DIFFICULTY_PAIN_ON_PASSING_STOOLS: "difficulty_pain_stools",
      PAIN: "pain",
      NOT_PASSING_FLATUS: "not_passing_flatus",
      PASSING_BLOODY_STOOLS: "passing_bloody_stools",
      PASSING_MELENA: "passing_melena",
      NOT_PASSING_URINE: "not_passing_urine",
      DIFFICULTY_PASSING_URINE: "difficulty_passing_urine",
      PASSING_DEEP_YELLOW_URINE: "passing_deep_yellow_urine",
      PASSING_PUS_IN_URINE: "passing_pus_in_urine",
      NOT_PASSING_STOOLS: "not_passing_stools",
      VOMITING: "vomiting",
      VOMITING_BLOOD: "vomiting_blood",
      DYSPHAGIA: "dysphagia",
      ODYNOPHAGIA: "odynophagia",
      ULCER_OR_WOUND: "ulcer_wound",
      YELLOWINGOFEYESORSKIN: "yellowing_eyes",
      BLEEDING: "bleeding",
      SHORTNESS_OF_BREATH: "shortness_of_breath"
    };
    const presentingComplaintsConfig = ref([
      { concept_id: CONCEPTS.FEELING_OF_A_MASS, name: "Feeling of a mass" },
      { concept_id: CONCEPTS.DIFFICULTY_PAIN_ON_PASSING_STOOLS, name: "Difficulty/Pain on passing stools" },
      { concept_id: CONCEPTS.PAIN, name: "Pain" },
      { concept_id: CONCEPTS.NOT_PASSING_FLATUS, name: "Not passing flatus" },
      { concept_id: CONCEPTS.PASSING_BLOODY_STOOLS, name: "Passing bloody stools" },
      { concept_id: CONCEPTS.PASSING_MELENA, name: "Passing melena" },
      { concept_id: CONCEPTS.NOT_PASSING_URINE, name: "Not passing urine" },
      { concept_id: CONCEPTS.DIFFICULTY_PASSING_URINE, name: "Difficulty passing urine" },
      { concept_id: CONCEPTS.PASSING_DEEP_YELLOW_URINE, name: "Passing deep yellow urine" },
      { concept_id: CONCEPTS.PASSING_PUS_IN_URINE, name: "Passing pus in urine" },
      { concept_id: CONCEPTS.NOT_PASSING_STOOLS, name: "Not passing stools" },
      { concept_id: CONCEPTS.VOMITING, name: "Vomiting" },
      { concept_id: CONCEPTS.VOMITING_BLOOD, name: "Vomiting Blood" },
      { concept_id: CONCEPTS.DYSPHAGIA, name: "Dysphagia" },
      { concept_id: CONCEPTS.ODYNOPHAGIA, name: "Odynophagia" },
      { concept_id: CONCEPTS.ULCER_OR_WOUND, name: "Ulcer" },
      { concept_id: CONCEPTS.YELLOWINGOFEYESORSKIN, name: "Yellowing of the eyes" },
      { concept_id: CONCEPTS.BLEEDING, name: "Bleeding" },
      { concept_id: CONCEPTS.SHORTNESS_OF_BREATH, name: "Shortness of breath" },
      { concept_id: CONCEPTS.OTHER, name: "Other (Specify)" }
    ]);
    const durationOptions = ref([
      { value: "hours", label: "Hours" },
      { value: "days", label: "Days" },
      { value: "weeks", label: "Weeks" },
      { value: "months", label: "Months" },
      { value: "years", label: "Years" }
    ]);
    const iconsContent = ref(icons);
    const complaints = ref([]);
    const hasSavedComplaints = ref(false);
    const savedData = ref({
      complaints: [],
      historyOfPresentingComplaint: ""
    });
    const currentComplaintData = ref(null);
    const currentHistoryData = ref(null);
    const complaintForm = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Presenting Complaint",
          name: "complaint",
          trackBy: "concept_id",
          icon: icons.search,
          hideSelected: true,
          placeholder: "Select or search complaint...",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          options: presentingComplaintsConfig.value,
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Specify Other Complaint",
          name: "otherComplaintSpecify",
          placeholder: "Specify the complaint",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          condition: (data) => {
            return data?.complaint?.concept_id === CONCEPTS.OTHER;
          },
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Duration",
          name: "duration",
          placeholder: "e.g., 3",
          // inputType: "number",
          validation: (value) => {
            if (!value || value <= 0) {
              return "Duration must be greater than 0";
            }
            return null;
          },
          grid: { s: "6" }
        },
        {
          componentType: "radioButtonField",
          header: "Duration Unit",
          name: "durationUnit",
          type: "inline",
          options: durationOptions.value,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "6" }
        }
      ];
      return form;
    });
    const historyForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Describe the history of the presenting complaint",
          name: "historyOfPresentingComplaint",
          placeholder: "Describe the history of the presenting complaint in detail...",
          // rows: 5,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    const { formRef: historyFormRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentComplaintData.value = newValues;
        }
      },
      { deep: true }
    );
    watch(
      () => historyFormRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentHistoryData.value = newValues;
        }
      },
      { deep: true }
    );
    const canSave = computed(() => {
      return complaints.value.length > 0 && currentHistoryData.value?.historyOfPresentingComplaint;
    });
    const addComplaint = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        return;
      }
      if (!data?.complaint) {
        alert("Please select a complaint");
        return;
      }
      if (!data?.duration || data.duration <= 0) {
        alert("Please enter a valid duration");
        return;
      }
      if (!data?.durationUnit) {
        alert("Please select a duration unit");
        return;
      }
      if (data.complaint.concept_id === CONCEPTS.OTHER && !data.otherComplaintSpecify) {
        alert("Please specify the other complaint");
        return;
      }
      complaints.value.push({
        complaintId: data.complaint.concept_id,
        complaintLabel: data.complaint.name,
        duration: data.duration,
        durationUnit: data.durationUnit,
        otherComplaintSpecify: data.otherComplaintSpecify || ""
      });
      formRef.value?.resetForm();
      currentComplaintData.value = null;
      console.log("Complaint added:", complaints.value);
    };
    const removeComplaint = (index) => {
      const complaint = complaints.value[index];
      const confirmRemove = confirm(`Remove "${complaint.complaintLabel}"?`);
      if (confirmRemove) {
        complaints.value.splice(index, 1);
      }
    };
    const saveComplaints = () => {
      const historyData = historyFormRef.value?.getFormValues();
      const historyValidate = historyFormRef.value?.validateForm();
      if (complaints.value.length === 0) {
        alert("Please add at least one complaint");
        return;
      }
      if (historyValidate != null || !historyData?.historyOfPresentingComplaint) {
        alert("Please provide the history of presenting complaint");
        return;
      }
      savedData.value = {
        complaints: [...complaints.value],
        historyOfPresentingComplaint: historyData.historyOfPresentingComplaint
      };
      hasSavedComplaints.value = true;
      console.log("Presenting complaints saved:", savedData.value);
    };
    const editComplaints = () => {
      complaints.value = [...savedData.value.complaints];
      historyFormRef.value?.resetForm();
      setTimeout(() => {
        if (historyFormRef.value) {
          currentHistoryData.value = {
            historyOfPresentingComplaint: savedData.value.historyOfPresentingComplaint
          };
        }
      }, 100);
      hasSavedComplaints.value = false;
    };
    const getData = () => {
      if (!hasSavedComplaints.value) {
        const historyData = historyFormRef.value?.getFormValues();
        if (complaints.value.length > 0 && historyData?.historyOfPresentingComplaint) {
          return formatDataForAPI(complaints.value, historyData.historyOfPresentingComplaint);
        }
        return null;
      }
      return formatDataForAPI(savedData.value.complaints, savedData.value.historyOfPresentingComplaint);
    };
    const formatDataForAPI = (complaintsList, history) => {
      const complaintObservations = complaintsList.map((complaint) => {
        const isOther = complaint.complaintId === CONCEPTS.OTHER;
        return {
          concept: complaint.complaintId,
          value: isOther ? complaint.otherComplaintSpecify : complaint.complaintId,
          groupMembers: [
            {
              concept: CONCEPTS.DURATION,
              value: `${complaint.duration} ${complaint.durationUnit}`
            }
          ]
        };
      });
      const obs = [
        {
          concept: CONCEPTS.PRESENTING_COMPLAINTS,
          value: CONCEPTS.PRESENTING_COMPLAINTS,
          groupMembers: complaintObservations
        },
        {
          concept: CONCEPTS.PRESENTING_HISTORY,
          value: history
        }
      ];
      return {
        presentingComplaints: {
          complaints: complaintsList,
          historyOfPresentingComplaint: history
        },
        obs
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
              _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "form-title" }, "Presenting Complaints", -1)),
              _cache[9] || (_cache[9] = createBaseVNode("p", { class: "subtitle" }, "Document patient's chief complaints and their history", -1)),
              createBaseVNode("div", _hoisted_1$c, [
                complaints.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$c, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(complaints.value, (complaint, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "complaint-item"
                    }, [
                      createBaseVNode("div", _hoisted_3$b, [
                        createBaseVNode("span", _hoisted_4$a, toDisplayString(index + 1) + ".", 1),
                        createBaseVNode("span", _hoisted_5$a, [
                          createTextVNode(toDisplayString(complaint.complaintLabel) + " ", 1),
                          complaint.otherComplaintSpecify ? (openBlock(), createElementBlock("span", _hoisted_6$9, " (" + toDisplayString(complaint.otherComplaintSpecify) + ") ", 1)) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("span", _hoisted_7$8, toDisplayString(complaint.duration) + " " + toDisplayString(complaint.durationUnit), 1),
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
                ])) : (openBlock(), createElementBlock("div", _hoisted_8$7, [
                  createVNode(DashBox, {
                    status: true,
                    content: "No complaints added yet"
                  })
                ])),
                createBaseVNode("div", _hoisted_9$6, [
                  _cache[3] || (_cache[3] = createBaseVNode("h5", null, "Add New Complaint", -1)),
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
                        "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addComplaint()),
                        name: "Add Complaint",
                        color: "primary"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_10$4, [
                _cache[4] || (_cache[4] = createBaseVNode("h4", null, "History of Presenting Complaint", -1)),
                createVNode(StandardForm, {
                  formData: historyForm.value,
                  ref_key: "historyFormRef",
                  ref: historyFormRef
                }, null, 8, ["formData"])
              ]),
              canSave.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[1] || (_cache[1] = ($event) => saveComplaints()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedComplaints.value ? (openBlock(), createElementBlock("div", _hoisted_11$4, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#fce4ec" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#c62828" } }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode(" Presenting Complaints Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_12$3, [
                          createBaseVNode("div", _hoisted_13$3, [
                            createBaseVNode("ol", _hoisted_14$2, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(savedData.value.complaints, (complaint, index) => {
                                return openBlock(), createElementBlock("li", { key: index }, [
                                  createBaseVNode("span", _hoisted_15$2, toDisplayString(complaint.complaintLabel), 1),
                                  complaint.otherComplaintSpecify ? (openBlock(), createElementBlock("span", _hoisted_16$2, " (" + toDisplayString(complaint.otherComplaintSpecify) + ") ", 1)) : createCommentVNode("", true),
                                  createBaseVNode("span", _hoisted_17$1, " - " + toDisplayString(complaint.duration) + " " + toDisplayString(complaint.durationUnit), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_18$1, [
                            _cache[6] || (_cache[6] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "History of Presenting Complaint:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_19$1, toDisplayString(savedData.value.historyOfPresentingComplaint), 1)
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[2] || (_cache[2] = ($event) => editComplaints()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[7] || (_cache[7] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PresentingComplaints = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-6a2677cf"]]);

const _hoisted_1$b = { class: "allergies-section" };
const _hoisted_2$b = {
  key: 0,
  class: "allergy-details"
};
const _hoisted_3$a = {
  key: 1,
  class: "saved-allergies"
};
const _hoisted_4$9 = { class: "allergies-content" };
const _hoisted_5$9 = {
  key: 0,
  class: "no-allergies"
};
const _hoisted_6$8 = {
  key: 1,
  class: "allergy-list"
};
const _hoisted_7$7 = { class: "allergy-type" };
const _hoisted_8$6 = { class: "allergy-detail" };
const NONE_ALLERGY = "NONE";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AllergiesForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      ALLERGIC_REACTION: "allergic_reaction",
      RECREATIONAL_DRUG: "drug_allergy",
      FOOD_ALLERGY: "food_allergy",
      SKIN_PREP: "skin_prep_allergy",
      LATEX_ALLERGY: "latex_allergy",
      MEDICATION_ALLERGY: "medication_allergy",
      OTHER_CONDITION: "other_allergy"
    };
    const allergyOptions = ref([
      { value: NONE_ALLERGY, label: "None", hasDetails: false },
      { value: CONCEPTS.RECREATIONAL_DRUG, label: "Drugs", hasDetails: true },
      { value: CONCEPTS.FOOD_ALLERGY, label: "Food", hasDetails: true },
      { value: CONCEPTS.SKIN_PREP, label: "Skin prep", hasDetails: true },
      { value: CONCEPTS.LATEX_ALLERGY, label: "Latex", hasDetails: true },
      { value: CONCEPTS.MEDICATION_ALLERGY, label: "Medications", hasDetails: true },
      { value: CONCEPTS.OTHER_CONDITION, label: "Other (Specify)", hasDetails: true }
    ]);
    const iconsContent = ref(icons);
    const selectedAllergies = reactive({});
    const allergyDetails = reactive({});
    const hasSavedAllergies = ref(false);
    const savedData = ref({
      isNone: false,
      allergies: []
    });
    allergyOptions.value.forEach((allergy) => {
      selectedAllergies[allergy.value] = false;
      allergyDetails[allergy.value] = "";
    });
    const showSaveButton = computed(() => {
      return Object.values(selectedAllergies).some((val) => val === true);
    });
    const isNoneSelected = computed(() => {
      return selectedAllergies[NONE_ALLERGY] === true;
    });
    const isAllergySelected = (allergyValue) => {
      return selectedAllergies[allergyValue] === true;
    };
    const isAllergyDisabled = (allergyValue) => {
      if (isNoneSelected.value && allergyValue !== NONE_ALLERGY) {
        return true;
      }
      return false;
    };
    const handleAllergyToggle = (allergyValue, event) => {
      const isChecked = event.detail.checked;
      selectedAllergies[allergyValue] = isChecked;
      if (allergyValue === NONE_ALLERGY && isChecked) {
        allergyOptions.value.forEach((allergy) => {
          if (allergy.value !== NONE_ALLERGY) {
            selectedAllergies[allergy.value] = false;
            allergyDetails[allergy.value] = "";
          }
        });
      } else if (allergyValue !== NONE_ALLERGY && isChecked) {
        selectedAllergies[NONE_ALLERGY] = false;
      }
      if (!isChecked) {
        allergyDetails[allergyValue] = "";
      }
    };
    const handleDetailChange = (allergyValue, event) => {
      allergyDetails[allergyValue] = event.target.value;
    };
    const saveAllergies = () => {
      const hasSelection = Object.values(selectedAllergies).some((val) => val === true);
      if (!hasSelection) {
        alert("Please select at least one option");
        return;
      }
      if (selectedAllergies[NONE_ALLERGY]) {
        savedData.value = {
          isNone: true,
          allergies: []
        };
        hasSavedAllergies.value = true;
        console.log("No allergies saved");
        return;
      }
      const allergies = [];
      let validationError = false;
      allergyOptions.value.forEach((allergy) => {
        if (selectedAllergies[allergy.value] && allergy.hasDetails) {
          const detailValue = allergyDetails[allergy.value];
          if (!detailValue || detailValue.trim() === "") {
            alert(`Please specify ${allergy.label.toLowerCase()} allergy details`);
            validationError = true;
            return;
          }
          allergies.push({
            type: allergy.label,
            details: detailValue,
            conceptId: allergy.value
          });
        }
      });
      if (validationError) return;
      if (allergies.length === 0) {
        alert("Please add details for selected allergies");
        return;
      }
      savedData.value = {
        isNone: false,
        allergies
      };
      hasSavedAllergies.value = true;
      console.log("Allergies saved:", savedData.value);
    };
    const editAllergies = () => {
      allergyOptions.value.forEach((allergy) => {
        selectedAllergies[allergy.value] = false;
        allergyDetails[allergy.value] = "";
      });
      if (savedData.value.isNone) {
        selectedAllergies[NONE_ALLERGY] = true;
      } else {
        savedData.value.allergies.forEach((allergy) => {
          selectedAllergies[allergy.conceptId] = true;
          allergyDetails[allergy.conceptId] = allergy.details;
        });
      }
      hasSavedAllergies.value = false;
    };
    const getData = () => {
      if (!hasSavedAllergies.value) {
        const hasSelection = Object.values(selectedAllergies).some((val) => val === true);
        if (!hasSelection) {
          return null;
        }
        if (selectedAllergies[NONE_ALLERGY]) {
          return formatDataForAPI(true, []);
        }
        const currentAllergies = [];
        allergyOptions.value.forEach((allergy) => {
          if (selectedAllergies[allergy.value] && allergy.hasDetails) {
            const details = allergyDetails[allergy.value] || "";
            if (details) {
              currentAllergies.push({
                type: allergy.label,
                details,
                conceptId: allergy.value
              });
            }
          }
        });
        return formatDataForAPI(false, currentAllergies);
      }
      return formatDataForAPI(savedData.value.isNone, savedData.value.allergies);
    };
    const formatDataForAPI = (isNone, allergies) => {
      const obs = [];
      if (isNone) {
        obs.push({
          concept: CONCEPTS.ALLERGIC_REACTION,
          value: "None"
        });
      } else {
        allergies.forEach((allergy) => {
          obs.push({
            concept: CONCEPTS.ALLERGIC_REACTION,
            value: `${allergy.type}: ${allergy.details}`
          });
        });
      }
      return {
        allergies: {
          isNone,
          allergies
        },
        obs
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
              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "form-title" }, "Allergies and Adverse Reactions", -1)),
              _cache[7] || (_cache[7] = createBaseVNode("p", { class: "subtitle" }, "Document all known allergies and adverse reactions", -1)),
              createBaseVNode("div", _hoisted_1$b, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(allergyOptions.value, (allergy) => {
                  return openBlock(), createElementBlock("div", {
                    key: allergy.value,
                    class: "allergy-item"
                  }, [
                    createVNode(unref(IonItem), {
                      lines: "none",
                      class: "checkbox-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCheckbox), {
                          checked: isAllergySelected(allergy.value),
                          onIonChange: ($event) => handleAllergyToggle(allergy.value, $event),
                          disabled: isAllergyDisabled(allergy.value)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), {
                              class: normalizeClass({ "none-label": allergy.value === NONE_ALLERGY })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(allergy.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["checked", "onIonChange", "disabled"])
                      ]),
                      _: 2
                    }, 1024),
                    isAllergySelected(allergy.value) && allergy.hasDetails ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
                      createVNode(unref(IonInput), {
                        value: allergyDetails[allergy.value],
                        onIonInput: ($event) => handleDetailChange(allergy.value, $event),
                        placeholder: `Enter ${allergy.label.toLowerCase()} allergy details`,
                        class: "detail-input"
                      }, null, 8, ["value", "onIonInput", "placeholder"])
                    ])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveAllergies()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedAllergies.value ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#fff3e0" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#e65100" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Allergies Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4$9, [
                          savedData.value.isNone ? (openBlock(), createElementBlock("div", _hoisted_5$9, [
                            createVNode(unref(IonIcon), {
                              icon: iconsContent.value.checkmarkCircle,
                              style: { "color": "#2e7d32", "font-size": "24px", "margin-right": "10px" }
                            }, null, 8, ["icon"]),
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "No known allergies")
                            ], -1))
                          ])) : (openBlock(), createElementBlock("div", _hoisted_6$8, [
                            _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Known Allergies:")
                            ], -1)),
                            createBaseVNode("ul", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(savedData.value.allergies, (allergy, index) => {
                                return openBlock(), createElementBlock("li", { key: index }, [
                                  createBaseVNode("span", _hoisted_7$7, toDisplayString(allergy.type) + ":", 1),
                                  createBaseVNode("span", _hoisted_8$6, toDisplayString(allergy.details), 1)
                                ]);
                              }), 128))
                            ])
                          ])),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editAllergies()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[5] || (_cache[5] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Allergies = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-7fdbf56e"]]);

const _hoisted_1$a = {
  key: 1,
  class: "selected-conditions"
};
const _hoisted_2$a = {
  key: 2,
  class: "condition-form"
};
const _hoisted_3$9 = { style: { "align-content": "center", "margin-top": "10px" } };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "PastMedicalHistory",
  setup(__props, { expose: __expose }) {
    const iconsContent = ref(icons);
    const showForm = ref(false);
    const showAddButton = ref(true);
    const noneSelected = ref(false);
    const selectedConditionsList = ref([]);
    const currentConditionData = ref(null);
    const conditionsOptions = ref([
      { concept_id: "hiv", name: "HIV" },
      { concept_id: "tuberculosis", name: "Tuberculosis (TB)" },
      { concept_id: "copd", name: "Chronic Obstructive Pulmonary Disease (COPD)" },
      { concept_id: "diabetes", name: "Diabetes Mellitus" },
      { concept_id: "asthma", name: "Asthma" },
      { concept_id: "epilepsy", name: "Epilepsy" },
      { concept_id: "stroke", name: "Previous stroke" },
      { concept_id: "bleeding-disorders", name: "Bleeding disorders" },
      { concept_id: "other", name: "Other (Specify)" }
    ]);
    const treatmentOptions = ref([
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ]);
    const conditionForm = computed(() => {
      const baseForm = [
        {
          componentType: "multiSelectInputField",
          header: "Past Medical Condition",
          name: "condition",
          trackBy: "concept_id",
          icon: icons.search,
          hideSelected: true,
          validation: (value) => {
            if (isNameInData(value?.name, selectedConditionsList.value)) {
              return "Condition already added";
            }
            return StandardValidations.required(value);
          },
          options: conditionsOptions.value,
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Specify the condition",
          name: "otherCondition",
          icon: icons.editPen,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          condition: (data) => {
            return data?.condition?.name === "Other (Specify)";
          },
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "Are you on treatment?",
          name: "onTreatment",
          type: "inline",
          options: treatmentOptions.value.map((opt) => ({
            label: opt.label,
            value: opt.value
          })),
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        }
      ];
      if (currentConditionData.value?.onTreatment === "yes") {
        baseForm.push(
          {
            componentType: "Heading",
            name: "Medication Details",
            position: "left"
          },
          {
            componentType: "inputField",
            header: "Current Medication",
            name: "currentMedication",
            placeholder: "Enter medication name",
            validation: (value) => {
              return StandardValidations.required(value);
            },
            grid: { s: "6" }
          },
          {
            componentType: "inputField",
            header: "Dose",
            name: "dose",
            placeholder: "e.g., 500mg",
            validation: (value) => {
              return StandardValidations.required(value);
            },
            grid: { s: "6" }
          },
          {
            componentType: "inputField",
            header: "Reason for Taking",
            name: "reason",
            placeholder: "Enter reason",
            grid: { s: "6" }
          },
          {
            componentType: "inputField",
            header: "Duration (How long have you been taking it?)",
            name: "duration",
            placeholder: "e.g., 3 months",
            grid: { s: "6" }
          }
        );
      }
      return baseForm;
    });
    const { formRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentConditionData.value = newValues;
        }
      },
      { deep: true }
    );
    const hasSelectedConditions = computed(() => {
      return selectedConditionsList.value.length > 0 && !noneSelected.value;
    });
    const displayForm = () => {
      if (noneSelected.value) {
        alert("Please uncheck 'None' first to add conditions");
        return;
      }
      showForm.value = true;
      showAddButton.value = false;
    };
    const addCondition = async () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) return;
      buildConditionList(data);
      showForm.value = false;
      showAddButton.value = true;
    };
    const buildConditionList = (data) => {
      const conditionData = data.condition;
      const conditionName = conditionData.name === "Other (Specify)" ? data.otherCondition : conditionData.name;
      const displayInfo = [conditionName];
      if (data.onTreatment === "yes") {
        displayInfo.push(`On Treatment: ${data.currentMedication || "N/A"}`);
      } else {
        displayInfo.push("Not on treatment");
      }
      selectedConditionsList.value.push({
        actionBtn: true,
        btn: ["delete"],
        name: conditionName,
        concept_id: conditionData.concept_id,
        display: displayInfo,
        data: {
          condition: conditionName,
          concept_id: conditionData.concept_id,
          onTreatment: data.onTreatment,
          ...data.onTreatment === "yes" && {
            medication: {
              currentMedication: data.currentMedication || "",
              dose: data.dose || "",
              reason: data.reason || "",
              duration: data.duration || ""
            }
          }
        }
      });
      formRef.value?.resetForm();
      currentConditionData.value = null;
    };
    const isNameInData = (name, dataArray) => {
      return dataArray.some((item) => item.name === name);
    };
    const removeCondition = (index) => {
      selectedConditionsList.value.splice(index, 1);
    };
    const handleNoneChange = (event) => {
      const isChecked = event.detail.checked;
      if (isChecked) {
        if (selectedConditionsList.value.length > 0) {
          const confirmClear = confirm("Selecting 'None' will clear all added conditions. Continue?");
          if (!confirmClear) {
            noneSelected.value = false;
            return;
          }
        }
        selectedConditionsList.value = [];
        showForm.value = false;
        showAddButton.value = false;
      } else {
        showAddButton.value = true;
      }
    };
    const getData = () => {
      if (noneSelected.value) {
        return {
          conditions: [],
          hasNone: true
        };
      }
      return {
        conditions: selectedConditionsList.value.map((item) => item.data),
        hasNone: false
      };
    };
    __expose({
      getData
    });
    onMounted(async () => {
      console.log("Past Medical History component mounted");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              !hasSelectedConditions.value ? (openBlock(), createBlock(DashBox, {
                key: 0,
                status: true,
                content: "No past medical history conditions added"
              })) : createCommentVNode("", true),
              hasSelectedConditions.value ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
                createVNode(List, {
                  listData: selectedConditionsList.value,
                  "onClicked:delete": removeCondition
                }, null, 8, ["listData"])
              ])) : createCommentVNode("", true),
              showForm.value ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
                createVNode(StandardForm, {
                  formData: conditionForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"]),
                createBaseVNode("div", _hoisted_3$9, [
                  createVNode(DynamicButton, {
                    fill: "clear",
                    icon: iconsContent.value.plus,
                    iconSlot: "icon-only",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addCondition()),
                    name: "Save"
                  }, null, 8, ["icon"])
                ])
              ])) : createCommentVNode("", true),
              showAddButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 3,
                style: { "margin-top": "10px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "clear",
                    icon: iconsContent.value.plus,
                    iconSlot: "icon-only",
                    "onClicked:btn": _cache[1] || (_cache[1] = ($event) => displayForm()),
                    name: "Add past medical history condition"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(IonRow), { style: { "margin-top": "20px" } }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), { lines: "none" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonCheckbox), {
                        modelValue: noneSelected.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => noneSelected.value = $event),
                        onIonChange: handleNoneChange
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[3] || (_cache[3] = [
                              createTextVNode("None (No past medical history)", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PastMedicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-5d58ce48"]]);

const _hoisted_1$9 = { class: "radio-section" };
const _hoisted_2$9 = {
  key: 1,
  class: "saved-history"
};
const _hoisted_3$8 = { class: "history-content" };
const _hoisted_4$8 = { key: 0 };
const _hoisted_5$8 = { class: "surgical-details" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PastSurgicalHistory",
  setup(__props, { expose: __expose }) {
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedHistory = ref(false);
    const savedData = ref({
      hasSurgicalHistory: "",
      surgicalDetails: ""
    });
    const currentFormData = ref(null);
    const surgicalHistoryForm = computed(() => {
      const baseForm = [
        {
          componentType: "radioButtonField",
          header: "Has Surgical History",
          name: "hasSurgicalHistory",
          type: "inline",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" }
          ],
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        }
      ];
      if (currentFormData.value?.hasSurgicalHistory === "yes") {
        baseForm.push({
          componentType: "textAreaField",
          header: "Enter previous procedures and surgeries (Month & Year)",
          name: "surgicalDetails",
          placeholder: "E.g., Appendectomy - January 2020",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        });
      }
      return baseForm;
    });
    const { formRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFormData.value = newValues;
          if (newValues.hasSurgicalHistory) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const saveHistory = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        return;
      }
      if (data.hasSurgicalHistory === "yes" && !data.surgicalDetails?.trim()) {
        alert("Please enter surgical details");
        return;
      }
      savedData.value = {
        hasSurgicalHistory: data.hasSurgicalHistory,
        surgicalDetails: data.surgicalDetails || ""
      };
      hasSavedHistory.value = true;
      showSaveButton.value = false;
      console.log("Surgical history saved:", savedData.value);
    };
    const editHistory = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          const formValues = {
            hasSurgicalHistory: savedData.value.hasSurgicalHistory,
            surgicalDetails: savedData.value.surgicalDetails
          };
          currentFormData.value = formValues;
        }
      }, 100);
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedHistory.value) {
        const formData = formRef.value?.getFormValues();
        if (formData?.hasSurgicalHistory) {
          return {
            hasSurgicalHistory: formData.hasSurgicalHistory,
            surgicalDetails: formData.hasSurgicalHistory === "yes" ? formData.surgicalDetails : ""
          };
        }
        return null;
      }
      return {
        hasSurgicalHistory: savedData.value.hasSurgicalHistory,
        surgicalDetails: savedData.value.surgicalDetails
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
              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "form-title" }, "Any history of previous surgery or procedures?", -1)),
              createBaseVNode("div", _hoisted_1$9, [
                createVNode(StandardForm, {
                  formData: surgicalHistoryForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "15px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveHistory()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedHistory.value ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e3f2fd" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#1976d2" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Surgical History Status ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$8, [
                          createBaseVNode("p", null, [
                            _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Has Surgical History:", -1)),
                            createTextVNode(" " + toDisplayString(savedData.value.hasSurgicalHistory === "yes" ? "Yes" : "No"), 1)
                          ]),
                          savedData.value.hasSurgicalHistory === "yes" && savedData.value.surgicalDetails ? (openBlock(), createElementBlock("div", _hoisted_4$8, [
                            _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Procedures/Surgeries:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_5$8, toDisplayString(savedData.value.surgicalDetails), 1)
                          ])) : createCommentVNode("", true),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editHistory()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[5] || (_cache[5] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PastSurgicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-9ab124f9"]]);

const _hoisted_1$8 = { class: "checkbox-section" };
const _hoisted_2$8 = {
  key: 0,
  class: "cancer-type-field"
};
const _hoisted_3$7 = {
  key: 2,
  class: "saved-history"
};
const _hoisted_4$7 = { class: "history-content" };
const _hoisted_5$7 = { class: "history-list" };
const _hoisted_6$7 = {
  key: 0,
  class: "cancer-details"
};
const _hoisted_7$6 = { key: 0 };
const FAMILY_HISTORY_ASTHMA = "family_history_asthma";
const FAMILY_HISTORY_DIABETES = "family_history_diabetes";
const FAMILY_HISTORY_EPILEPSY = "family_history_epilepsy";
const FAMILY_HISTORY_HYPERTENSION = "family_history_hypertension";
const FAMILY_HISTORY_CANCER = "family_history_cancer";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "FamilyHistory",
  setup(__props, { expose: __expose }) {
    const familyHistoryOptions = [
      { value: FAMILY_HISTORY_ASTHMA, label: "Asthma" },
      { value: FAMILY_HISTORY_DIABETES, label: "Diabetes" },
      { value: FAMILY_HISTORY_EPILEPSY, label: "Epilepsy" },
      { value: FAMILY_HISTORY_HYPERTENSION, label: "Hypertension" },
      { value: FAMILY_HISTORY_CANCER, label: "Cancer" }
    ];
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedHistory = ref(false);
    const selectedConditions = reactive({});
    const savedData = ref([]);
    const cancerTypeValue = ref("");
    const cancerTypeForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Type of Cancer",
          name: "cancerType",
          placeholder: "Specify the type of cancer",
          validation: (value) => {
            if (selectedConditions[FAMILY_HISTORY_CANCER]) {
              return StandardValidations.required(value);
            }
            return null;
          },
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef: cancerFormRef } = useExposeFromStandardForm();
    const displaySavedConditions = computed(() => {
      return savedData.value.map((item) => {
        const option = familyHistoryOptions.find((opt) => opt.value === item.concept);
        return {
          concept: item.concept,
          label: option?.label || "Unknown",
          cancerType: item.cancerType
        };
      });
    });
    watch(
      selectedConditions,
      (newVal) => {
        const hasSelection = Object.values(newVal).some((val) => val === true);
        if (hasSelection) {
          showSaveButton.value = true;
        }
      },
      { deep: true }
    );
    watch(
      () => cancerFormRef.value?.getFormValues(),
      (newValues) => {
        if (newValues?.cancerType) {
          cancerTypeValue.value = newValues.cancerType;
          showSaveButton.value = true;
        }
      },
      { deep: true }
    );
    const handleCheckboxChange = (conceptId) => {
      showSaveButton.value = true;
      if (conceptId === FAMILY_HISTORY_CANCER && !selectedConditions[conceptId]) {
        cancerFormRef.value?.resetForm();
        cancerTypeValue.value = "";
      }
    };
    const saveHistory = () => {
      const hasSelection = Object.values(selectedConditions).some((val) => val === true);
      if (!hasSelection) {
        alert("Please select at least one family history condition");
        return;
      }
      if (selectedConditions[FAMILY_HISTORY_CANCER]) {
        const cancerData = cancerFormRef.value?.getFormValues();
        const validate = cancerFormRef.value?.validateForm();
        if (validate != null || !cancerData?.cancerType?.trim()) {
          alert("Please specify the type of cancer");
          return;
        }
        cancerTypeValue.value = cancerData.cancerType;
      }
      const historyData = [];
      Object.keys(selectedConditions).forEach((conceptId) => {
        if (selectedConditions[conceptId]) {
          const option = familyHistoryOptions.find((opt) => opt.value === conceptId);
          if (conceptId === FAMILY_HISTORY_CANCER) {
            historyData.push({
              concept: conceptId,
              value: cancerTypeValue.value,
              label: option?.label,
              cancerType: cancerTypeValue.value
            });
          } else {
            historyData.push({
              concept: conceptId,
              value: option?.label || "Unknown",
              label: option?.label
            });
          }
        }
      });
      savedData.value = historyData;
      hasSavedHistory.value = true;
      showSaveButton.value = false;
      console.log("Family history saved:", savedData.value);
    };
    const editHistory = () => {
      Object.keys(selectedConditions).forEach((key) => {
        selectedConditions[key] = false;
      });
      savedData.value.forEach((item) => {
        selectedConditions[item.concept] = true;
        if (item.concept === FAMILY_HISTORY_CANCER && item.cancerType) {
          setTimeout(() => {
            cancerFormRef.value?.resetForm();
          }, 50);
        }
      });
      showSaveButton.value = true;
      hasSavedHistory.value = false;
    };
    const getData = () => {
      if (!hasSavedHistory.value) {
        const hasSelection = Object.values(selectedConditions).some((val) => val === true);
        if (!hasSelection) {
          return null;
        }
        const currentData = [];
        Object.keys(selectedConditions).forEach((conceptId) => {
          if (selectedConditions[conceptId]) {
            const option = familyHistoryOptions.find((opt) => opt.value === conceptId);
            if (conceptId === FAMILY_HISTORY_CANCER) {
              const cancerData = cancerFormRef.value?.getFormValues();
              currentData.push({
                concept: conceptId,
                value: cancerData?.cancerType || "",
                label: option?.label,
                cancerType: cancerData?.cancerType || ""
              });
            } else {
              currentData.push({
                concept: conceptId,
                value: option?.label || "Unknown",
                label: option?.label
              });
            }
          }
        });
        return {
          familyHistory: currentData
        };
      }
      return {
        familyHistory: savedData.value
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
              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "form-title" }, "Family History", -1)),
              createBaseVNode("div", _hoisted_1$8, [
                createVNode(unref(IonList), null, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(familyHistoryOptions, (option) => {
                      return createVNode(unref(IonItem), {
                        key: option.value,
                        lines: "none"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCheckbox), {
                            modelValue: selectedConditions[option.value],
                            "onUpdate:modelValue": ($event) => selectedConditions[option.value] = $event,
                            onIonChange: ($event) => handleCheckboxChange(option.value)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonLabel), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(option.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "onIonChange"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                })
              ]),
              selectedConditions["family_history_cancer"] ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
                createVNode(StandardForm, {
                  formData: cancerTypeForm.value,
                  ref_key: "cancerFormRef",
                  ref: cancerFormRef
                }, null, 8, ["formData"])
              ])) : createCommentVNode("", true),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 1,
                style: { "margin-top": "15px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveHistory()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedHistory.value ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e3f2fd" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#1976d2" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Family History Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4$7, [
                          _cache[5] || (_cache[5] = createBaseVNode("p", null, [
                            createBaseVNode("strong", null, "Family Medical History:")
                          ], -1)),
                          createBaseVNode("div", _hoisted_5$7, [
                            createBaseVNode("ul", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(displaySavedConditions.value, (condition) => {
                                return openBlock(), createElementBlock("li", {
                                  key: condition.concept
                                }, [
                                  createTextVNode(toDisplayString(condition.label) + " ", 1),
                                  condition.cancerType ? (openBlock(), createElementBlock("span", _hoisted_6$7, " - " + toDisplayString(condition.cancerType), 1)) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ]),
                            displaySavedConditions.value.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_7$6, [..._cache[3] || (_cache[3] = [
                              createBaseVNode("em", null, "No family history recorded", -1)
                            ])])) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editHistory()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[4] || (_cache[4] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const FamilyHistory = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-831afa2a"]]);

const _hoisted_1$7 = { class: "form-section" };
const _hoisted_2$7 = {
  key: 1,
  class: "saved-history"
};
const _hoisted_3$6 = { class: "history-content" };
const _hoisted_4$6 = { class: "history-item" };
const _hoisted_5$6 = {
  key: 0,
  class: "detail-text"
};
const _hoisted_6$6 = {
  key: 1,
  class: "detail-text"
};
const _hoisted_7$5 = { class: "history-item" };
const _hoisted_8$5 = { class: "detail-text" };
const _hoisted_9$5 = { class: "history-item" };
const PATIENT_SMOKES = "patient_smokes";
const EXPECTED_DURATION = "expected_duration";
const ALCOHOL_INTAKE = "alcohol_intake";
const RECREATIONAL_DRUG = "recreational_drug";
const YES = "Yes";
const NO = "No";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SocialHistory",
  setup(__props, { expose: __expose }) {
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedHistory = ref(false);
    const savedData = ref({
      doYouSmoke: "",
      cigarettesPerDay: "",
      smokingHistory: "",
      alcoholIntake: "",
      recreationalDrugs: ""
    });
    const currentFormData = ref(null);
    const smokingHistoryOptions = ref([
      { value: "Quit over a month ago", label: "Quit over a month ago" },
      { value: "Never smoked", label: "Never smoked" }
    ]);
    const yesNoOptions = ref([
      { value: YES, label: "Yes" },
      { value: NO, label: "No" }
    ]);
    const socialHistoryForm = computed(() => {
      const baseForm = [
        {
          componentType: "Heading",
          name: "Smoking",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Do you smoke?",
          name: "doYouSmoke",
          type: "inline",
          options: yesNoOptions.value,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        }
      ];
      if (currentFormData.value?.doYouSmoke === YES) {
        baseForm.push({
          componentType: "inputField",
          header: "How many cigarettes per day?",
          name: "cigarettesPerDay",
          placeholder: "e.g., 10",
          // inputType: "number",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        });
      }
      if (currentFormData.value?.doYouSmoke === NO) {
        baseForm.push({
          componentType: "radioButtonField",
          header: "If not, did you quit over a month ago or never smoked?",
          name: "smokingHistory",
          // type: "block",
          options: smokingHistoryOptions.value,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        });
      }
      baseForm.push(
        {
          componentType: "Heading",
          name: "Alcohol Consumption",
          position: "left"
        },
        {
          componentType: "textAreaField",
          header: "What is your daily alcohol intake?",
          name: "alcoholIntake",
          placeholder: "e.g., 2 beers, 1 glass of wine, None",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        }
      );
      baseForm.push(
        {
          componentType: "Heading",
          name: "Substance Use",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Do you use recreational drugs?",
          name: "recreationalDrugs",
          type: "inline",
          options: yesNoOptions.value,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        }
      );
      return baseForm;
    });
    const { formRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFormData.value = newValues;
          const hasAnyValue = Object.values(newValues).some((value) => value !== "" && value !== null && value !== void 0);
          if (hasAnyValue) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const saveHistory = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        return;
      }
      if (!data.doYouSmoke) {
        alert("Please indicate if you smoke");
        return;
      }
      if (data.doYouSmoke === YES && !data.cigarettesPerDay) {
        alert("Please enter how many cigarettes per day");
        return;
      }
      if (data.doYouSmoke === NO && !data.smokingHistory) {
        alert("Please select your smoking history");
        return;
      }
      if (!data.alcoholIntake?.trim()) {
        alert("Please enter your daily alcohol intake");
        return;
      }
      if (!data.recreationalDrugs) {
        alert("Please indicate if you use recreational drugs");
        return;
      }
      savedData.value = {
        doYouSmoke: data.doYouSmoke,
        cigarettesPerDay: data.cigarettesPerDay || "",
        smokingHistory: data.smokingHistory || "",
        alcoholIntake: data.alcoholIntake,
        recreationalDrugs: data.recreationalDrugs
      };
      hasSavedHistory.value = true;
      showSaveButton.value = false;
      console.log("Social history saved:", savedData.value);
    };
    const editHistory = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          currentFormData.value = {
            doYouSmoke: savedData.value.doYouSmoke,
            cigarettesPerDay: savedData.value.cigarettesPerDay,
            smokingHistory: savedData.value.smokingHistory,
            alcoholIntake: savedData.value.alcoholIntake,
            recreationalDrugs: savedData.value.recreationalDrugs
          };
        }
      }, 100);
      showSaveButton.value = true;
      hasSavedHistory.value = false;
    };
    const getData = () => {
      if (!hasSavedHistory.value) {
        const formData = formRef.value?.getFormValues();
        if (formData?.doYouSmoke) {
          return formatDataForAPI(formData);
        }
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: PATIENT_SMOKES,
          value: data.doYouSmoke,
          groupMembers: data.doYouSmoke === YES && data.cigarettesPerDay ? [
            {
              concept: EXPECTED_DURATION,
              value: data.cigarettesPerDay
            }
          ] : []
        },
        {
          concept: ALCOHOL_INTAKE,
          value: data.alcoholIntake
        },
        {
          concept: RECREATIONAL_DRUG,
          value: data.recreationalDrugs
        }
      ];
      return {
        socialHistory: {
          doYouSmoke: data.doYouSmoke,
          cigarettesPerDay: data.cigarettesPerDay,
          smokingHistory: data.smokingHistory,
          alcoholIntake: data.alcoholIntake,
          recreationalDrugs: data.recreationalDrugs
        },
        obs
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
              _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "form-title" }, "Social History", -1)),
              createBaseVNode("div", _hoisted_1$7, [
                createVNode(StandardForm, {
                  formData: socialHistoryForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "15px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveHistory()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedHistory.value ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e3f2fd" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#1976d2" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Social History Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$6, [
                          createBaseVNode("div", _hoisted_4$6, [
                            createBaseVNode("p", null, [
                              _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Smoking Status:", -1)),
                              createTextVNode(" " + toDisplayString(savedData.value.doYouSmoke), 1)
                            ]),
                            savedData.value.doYouSmoke === "Yes" ? (openBlock(), createElementBlock("p", _hoisted_5$6, [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.cigarette,
                                style: { "margin-right": "5px" }
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(savedData.value.cigarettesPerDay) + " cigarettes per day ", 1)
                            ])) : createCommentVNode("", true),
                            savedData.value.doYouSmoke === "No" && savedData.value.smokingHistory ? (openBlock(), createElementBlock("p", _hoisted_6$6, toDisplayString(savedData.value.smokingHistory), 1)) : createCommentVNode("", true)
                          ]),
                          createBaseVNode("div", _hoisted_7$5, [
                            _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Daily Alcohol Intake:")
                            ], -1)),
                            createBaseVNode("p", _hoisted_8$5, toDisplayString(savedData.value.alcoholIntake), 1)
                          ]),
                          createBaseVNode("div", _hoisted_9$5, [
                            createBaseVNode("p", null, [
                              _cache[5] || (_cache[5] = createBaseVNode("strong", null, "Recreational Drug Use:", -1)),
                              createTextVNode(" " + toDisplayString(savedData.value.recreationalDrugs), 1)
                            ])
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editHistory()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[6] || (_cache[6] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const SocialHistory = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-328758ea"]]);

const _hoisted_1$6 = { class: "form-section" };
const _hoisted_2$6 = {
  key: 1,
  class: "saved-history"
};
const _hoisted_3$5 = { class: "history-content" };
const _hoisted_4$5 = { class: "history-item" };
const _hoisted_5$5 = {
  key: 0,
  class: "pregnancy-details"
};
const _hoisted_6$5 = { class: "history-item" };
const _hoisted_7$4 = { class: "detail-text" };
const _hoisted_8$4 = { class: "history-item" };
const _hoisted_9$4 = { class: "detail-text" };
const _hoisted_10$3 = { class: "history-item" };
const _hoisted_11$3 = { class: "detail-text" };
const PREGNANCY_TEST = "pregnancy_test";
const LNMP = "lnmp";
const GESTATIONAL_AGE = "gestational_age";
const PARITY = "parity";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "GynecologicalHistory",
  setup(__props, { expose: __expose }) {
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedHistory = ref(false);
    const savedData = ref({
      areYouPregnant: "",
      lnmp: "",
      gestationalAge: "",
      parity: ""
    });
    const currentFormData = ref(null);
    const yesNoOptions = ref([
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" }
    ]);
    const gynecologicalForm = computed(() => {
      const baseForm = [
        {
          componentType: "radioButtonField",
          header: "Are you pregnant?",
          name: "areYouPregnant",
          type: "inline",
          options: yesNoOptions.value,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12" }
        }
      ];
      if (currentFormData.value?.areYouPregnant === "Yes") {
        baseForm.push(
          {
            componentType: "Heading",
            name: "Pregnancy Details",
            position: "left"
          },
          {
            componentType: "dateInputField",
            header: "Last Normal Menstrual Period (LNMP)",
            name: "lnmp",
            validation: (value) => {
              return StandardValidations.required(value);
            },
            grid: { s: "12" }
          },
          {
            componentType: "inputField",
            header: "Gestational Age (weeks)",
            name: "gestationalAge",
            placeholder: "e.g., 12",
            inputType: "number",
            validation: (value) => {
              if (!value) {
                return StandardValidations.required(value);
              }
              const weeks = parseInt(value);
              if (weeks < 1 || weeks > 42) {
                return "Gestational age should be between 1 and 42 weeks";
              }
              return null;
            },
            grid: { s: "12", m: "6" }
          },
          {
            componentType: "inputField",
            header: "Parity",
            name: "parity",
            placeholder: "e.g., G2P1 or 0-0-1-0",
            validation: (value) => {
              return StandardValidations.required(value);
            },
            grid: { s: "12", m: "6" }
          }
        );
      }
      return baseForm;
    });
    const { formRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFormData.value = newValues;
          if (newValues.areYouPregnant) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      } catch (error) {
        return dateString;
      }
    };
    const saveHistory = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        return;
      }
      if (!data.areYouPregnant) {
        alert("Please indicate pregnancy status");
        return;
      }
      if (data.areYouPregnant === "Yes") {
        if (!data.lnmp) {
          alert("Please enter Last Normal Menstrual Period");
          return;
        }
        if (!data.gestationalAge) {
          alert("Please enter gestational age");
          return;
        }
        if (!data.parity) {
          alert("Please enter parity");
          return;
        }
      }
      savedData.value = {
        areYouPregnant: data.areYouPregnant,
        lnmp: data.lnmp || "",
        gestationalAge: data.gestationalAge || "",
        parity: data.parity || ""
      };
      hasSavedHistory.value = true;
      showSaveButton.value = false;
      console.log("Gynecological history saved:", savedData.value);
    };
    const editHistory = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          currentFormData.value = {
            areYouPregnant: savedData.value.areYouPregnant,
            lnmp: savedData.value.lnmp,
            gestationalAge: savedData.value.gestationalAge,
            parity: savedData.value.parity
          };
        }
      }, 100);
      showSaveButton.value = true;
      hasSavedHistory.value = false;
    };
    const getData = () => {
      if (!hasSavedHistory.value) {
        const formData = formRef.value?.getFormValues();
        if (formData?.areYouPregnant) {
          return formatDataForAPI(formData);
        }
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: PREGNANCY_TEST,
          value: data.areYouPregnant
        }
      ];
      if (data.areYouPregnant === "Yes") {
        obs.push(
          {
            concept: LNMP,
            value: data.lnmp
          },
          {
            concept: GESTATIONAL_AGE,
            value: data.gestationalAge
          },
          {
            concept: PARITY,
            value: data.parity
          }
        );
      }
      return {
        gynecologicalHistory: {
          areYouPregnant: data.areYouPregnant,
          lnmp: data.lnmp,
          gestationalAge: data.gestationalAge,
          parity: data.parity
        },
        obs
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
              _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "form-title" }, "Gynecological/Obstetric History", -1)),
              _cache[9] || (_cache[9] = createBaseVNode("p", { class: "subtitle" }, "(Only for Female Patients)", -1)),
              createBaseVNode("div", _hoisted_1$6, [
                createVNode(StandardForm, {
                  formData: gynecologicalForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "15px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveHistory()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedHistory.value ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#f3e5f5" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#7b1fa2" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Gynecological History Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$5, [
                          createBaseVNode("div", _hoisted_4$5, [
                            createBaseVNode("p", null, [
                              _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Pregnancy Status:", -1)),
                              createTextVNode(" " + toDisplayString(savedData.value.areYouPregnant), 1)
                            ])
                          ]),
                          savedData.value.areYouPregnant === "Yes" ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
                            createBaseVNode("div", _hoisted_6$5, [
                              _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                                createBaseVNode("strong", null, "Last Normal Menstrual Period (LNMP):")
                              ], -1)),
                              createBaseVNode("p", _hoisted_7$4, toDisplayString(formatDate(savedData.value.lnmp)), 1)
                            ]),
                            createBaseVNode("div", _hoisted_8$4, [
                              _cache[5] || (_cache[5] = createBaseVNode("p", null, [
                                createBaseVNode("strong", null, "Gestational Age:")
                              ], -1)),
                              createBaseVNode("p", _hoisted_9$4, toDisplayString(savedData.value.gestationalAge) + " weeks", 1)
                            ]),
                            createBaseVNode("div", _hoisted_10$3, [
                              _cache[6] || (_cache[6] = createBaseVNode("p", null, [
                                createBaseVNode("strong", null, "Parity:")
                              ], -1)),
                              createBaseVNode("p", _hoisted_11$3, toDisplayString(savedData.value.parity), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editHistory()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[7] || (_cache[7] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const GynecologicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4cf48886"]]);

const _hoisted_1$5 = { class: "systems-container" };
const _hoisted_2$5 = ["onClick"];
const _hoisted_3$4 = { class: "system-content" };
const _hoisted_4$4 = {
  key: 1,
  class: "saved-review"
};
const _hoisted_5$4 = { class: "review-content" };
const _hoisted_6$4 = {
  key: 0,
  class: "no-symptoms"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ReviewOfSystems",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      // General
      FEVER: "fever",
      LYMPHADENOPATHY: "lymphadenopathy",
      NIGHT_SWEATS: "night_sweats",
      FATIGUE: "fatigue",
      WEIGHT_LOSS: "weight_loss",
      // ENT
      EYE_PAIN: "eye_pain",
      RHINORRHEA: "rhinorrhea",
      TINNITUS: "tinnitus",
      EPISTAXIS: "epistaxis",
      SINUS_PAIN: "sinus_pain",
      ORAL_LESIONS: "oral_lesions",
      DYSPHAGIA: "dysphagia",
      ODYNOPHAGIA: "odynophagia",
      // Endocrine
      HEAT_TOLERANCE: "heat_tolerance",
      ABNORMAL_HAIR_GROWTH: "abnormal_hair_growth",
      COLD_TOLERANCE: "cold_tolerance",
      POLYURIA: "polyuria",
      POLYDIPSIA: "polydipsia",
      // Cardiac
      BLEEDING_TENDENCIES: "bleeding_tendencies",
      CHEST_PAIN: "chest_pain",
      HEART_PALPITATIONS: "heart_palpitations",
      OEDEMA: "oedema",
      CYANOSIS: "cyanosis",
      CLAUDICATION: "claudication",
      ORTHOPNOEA: "orthopnoea",
      PAROXYSMAL_NOCTURNAL_DYSPNOEA: "paroxysmal_nocturnal_dyspnoea",
      // Respiratory
      SHORTNESS_OF_BREATH: "shortness_of_breath",
      DYSPNOEA_ON_EXERTION: "dyspnoea_on_exertion",
      DYSPNOEA_AT_REST: "dyspnoea_at_rest",
      COUGH: "cough",
      HAEMOPTYSIS: "haemoptysis",
      WHEEZING: "wheezing",
      // Gastrointestinal
      NAUSEA: "nausea",
      VOMITING: "vomiting",
      MELENA: "melena",
      HAEMATOCHEZIA: "haematochezia",
      CHANGE_IN_APPETITE: "change_in_appetite",
      ABDOMINALPAINS: "abdominal_pain",
      CHANGE_IN_BOWEL_HABIT: "change_in_bowel_habit",
      HEARTBURN: "heartburn",
      // Genitourinary
      DYSURIA: "dysuria",
      URGENCY: "urgency",
      INCONTINENCE: "incontinence",
      HAEMATURIA: "haematuria",
      PYURIA: "pyuria",
      SEXUALLY_TRANSMITTED_INFECTION: "sti",
      ABNORMAL_VAGINAL_DISCHARGE: "abnormal_vaginal_discharge",
      DYSMENORRHEA: "dysmenorrhea",
      PELVIC_PAIN: "pelvic_pain",
      // Musculoskeletal
      JOINT_PAIN: "joint_pain",
      SWELLING_JOINT: "joint_swelling",
      PAIN_BACK: "back_pain",
      // Neurologic
      HEADACHE: "headache",
      CHANGE_IN_SMELL: "change_in_smell",
      CHANGE_IN_TASTE: "change_in_taste",
      PARAESTHESIAS: "paraesthesias",
      MUSCLE_WEAKNESS: "muscle_weakness",
      ATAXIA: "ataxia",
      CHANGE_IN_SPEECH: "change_in_speech",
      // Psychiatric
      DEPRESSION: "depression",
      ANXIETY: "anxiety",
      HALLUCINATIONS: "hallucinations",
      MANIA: "mania",
      SUICIDAL_THOUGHTS: "suicidal_thoughts",
      // Category Concepts
      REVIEW_OF_SYSTEMS_GENERAL: "ros_general",
      REVIEW_OF_SYSTEMS_ENT: "ros_ent",
      REVIEW_OF_SYSTEMS__ENDOCRINE: "ros_endocrine",
      REVIEW_OF_SYSTEMS_CARDIAC: "ros_cardiac",
      SEVERE_RESPIRATORY: "ros_respiratory",
      REVIEW_OF_SYSTEMS_GASTROINTESTINAL: "ros_gastrointestinal",
      REVIEW_OF_SYSTEMS_GENITOURINARY: "ros_genitourinary",
      REVIEW_OF_SYSTEMS_MUSCULOSKELETAL: "ros_musculoskeletal",
      REVIEW_OF_SYSTEMS_NEUROLOGIC: "ros_neurologic",
      REVIEW_OF_SYSTEMS_PSYCHIATRIC: "ros_psychiatric"
    };
    const systemCategories = ref([
      {
        key: "general",
        title: "General",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_GENERAL,
        symptoms: [
          { value: CONCEPTS.FEVER, label: "Fever" },
          { value: CONCEPTS.LYMPHADENOPATHY, label: "Lymphadenopathy" },
          { value: CONCEPTS.NIGHT_SWEATS, label: "Night sweats" },
          { value: CONCEPTS.FATIGUE, label: "Fatigue" },
          { value: CONCEPTS.WEIGHT_LOSS, label: "Weight loss" }
        ]
      },
      {
        key: "ent",
        title: "ENT (Ear, Nose, Throat)",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_ENT,
        symptoms: [
          { value: CONCEPTS.EYE_PAIN, label: "Eye pain" },
          { value: CONCEPTS.RHINORRHEA, label: "Rhinorrhea" },
          { value: CONCEPTS.TINNITUS, label: "Tinnitus" },
          { value: CONCEPTS.EPISTAXIS, label: "Epistaxis" },
          { value: CONCEPTS.SINUS_PAIN, label: "Sinus pain" },
          { value: CONCEPTS.ORAL_LESIONS, label: "Oral lesions" },
          { value: CONCEPTS.DYSPHAGIA, label: "Dysphagia" },
          { value: CONCEPTS.ODYNOPHAGIA, label: "Odynophagia" }
        ]
      },
      {
        key: "endocrine",
        title: "Endocrine",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS__ENDOCRINE,
        symptoms: [
          { value: CONCEPTS.HEAT_TOLERANCE, label: "Heat tolerance" },
          { value: CONCEPTS.ABNORMAL_HAIR_GROWTH, label: "Abnormal hair growth" },
          { value: CONCEPTS.COLD_TOLERANCE, label: "Cold tolerance" },
          { value: CONCEPTS.POLYURIA, label: "Polyuria" },
          { value: CONCEPTS.POLYDIPSIA, label: "Polydipsia" }
        ]
      },
      {
        key: "cardiac",
        title: "Cardiac",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_CARDIAC,
        symptoms: [
          { value: CONCEPTS.BLEEDING_TENDENCIES, label: "Bleeding tendencies" },
          { value: CONCEPTS.CHEST_PAIN, label: "Chest pain" },
          { value: CONCEPTS.HEART_PALPITATIONS, label: "Palpitations" },
          { value: CONCEPTS.OEDEMA, label: "Oedema" },
          { value: CONCEPTS.CYANOSIS, label: "Cyanosis" },
          { value: CONCEPTS.CLAUDICATION, label: "Claudication" },
          { value: CONCEPTS.ORTHOPNOEA, label: "Orthopnoea" },
          { value: CONCEPTS.PAROXYSMAL_NOCTURNAL_DYSPNOEA, label: "Paroxysmal nocturnal dyspnoea" }
        ]
      },
      {
        key: "respiratory",
        title: "Respiratory",
        conceptId: CONCEPTS.SEVERE_RESPIRATORY,
        symptoms: [
          { value: CONCEPTS.SHORTNESS_OF_BREATH, label: "Shortness Of Breath" },
          { value: CONCEPTS.DYSPNOEA_ON_EXERTION, label: "Dyspnoea on exertion" },
          { value: CONCEPTS.DYSPNOEA_AT_REST, label: "Dyspnoea at rest" },
          { value: CONCEPTS.COUGH, label: "Cough" },
          { value: CONCEPTS.HAEMOPTYSIS, label: "Haemoptysis" },
          { value: CONCEPTS.WHEEZING, label: "Wheezing" }
        ]
      },
      {
        key: "gastrointestinal",
        title: "Gastrointestinal",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_GASTROINTESTINAL,
        symptoms: [
          { value: CONCEPTS.NAUSEA, label: "Nausea" },
          { value: CONCEPTS.VOMITING, label: "Vomiting" },
          { value: CONCEPTS.MELENA, label: "Melena" },
          { value: CONCEPTS.HAEMATOCHEZIA, label: "Haematochezia" },
          { value: CONCEPTS.CHANGE_IN_APPETITE, label: "Change in appetite" },
          { value: CONCEPTS.ABDOMINALPAINS, label: "Abdominal pain" },
          { value: CONCEPTS.CHANGE_IN_BOWEL_HABIT, label: "Change in bowel habit" },
          { value: CONCEPTS.HEARTBURN, label: "Heartburn" }
        ]
      },
      {
        key: "genitourinary",
        title: "Genitourinary",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_GENITOURINARY,
        symptoms: [
          { value: CONCEPTS.DYSURIA, label: "Dysuria" },
          { value: CONCEPTS.URGENCY, label: "Urgency" },
          { value: CONCEPTS.INCONTINENCE, label: "Incontinence" },
          { value: CONCEPTS.HAEMATURIA, label: "Haematuria" },
          { value: CONCEPTS.PYURIA, label: "Pyuria" },
          { value: CONCEPTS.SEXUALLY_TRANSMITTED_INFECTION, label: "Sexually Transmitted Infection (STI)" },
          { value: CONCEPTS.ABNORMAL_VAGINAL_DISCHARGE, label: "Abnormal Vaginal Discharge" },
          { value: CONCEPTS.DYSMENORRHEA, label: "Dysmenorrhea" },
          { value: CONCEPTS.PELVIC_PAIN, label: "Pelvic pain" }
        ]
      },
      {
        key: "musculoskeletal",
        title: "Musculoskeletal",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_MUSCULOSKELETAL,
        symptoms: [
          { value: CONCEPTS.JOINT_PAIN, label: "Joint Pain" },
          { value: CONCEPTS.SWELLING_JOINT, label: "Joint Swelling" },
          { value: CONCEPTS.PAIN_BACK, label: "Back Pain" }
        ]
      },
      {
        key: "neurologic",
        title: "Neurologic",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_NEUROLOGIC,
        symptoms: [
          { value: CONCEPTS.HEADACHE, label: "Headache" },
          { value: CONCEPTS.CHANGE_IN_SMELL, label: "Change in smell" },
          { value: CONCEPTS.CHANGE_IN_TASTE, label: "Change in taste" },
          { value: CONCEPTS.PARAESTHESIAS, label: "Paraesthesias" },
          { value: CONCEPTS.MUSCLE_WEAKNESS, label: "Muscle weakness" },
          { value: CONCEPTS.ATAXIA, label: "Ataxia" },
          { value: CONCEPTS.CHANGE_IN_SPEECH, label: "Change in speech" }
        ]
      },
      {
        key: "psychiatric",
        title: "Psychiatric",
        conceptId: CONCEPTS.REVIEW_OF_SYSTEMS_PSYCHIATRIC,
        symptoms: [
          { value: CONCEPTS.DEPRESSION, label: "Depression" },
          { value: CONCEPTS.ANXIETY, label: "Anxiety" },
          { value: CONCEPTS.HALLUCINATIONS, label: "Hallucinations" },
          { value: CONCEPTS.MANIA, label: "Mania" },
          { value: CONCEPTS.SUICIDAL_THOUGHTS, label: "Suicidal thoughts" }
        ]
      }
    ]);
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedReview = ref(false);
    const expandedSections = reactive({});
    const selectedSymptoms = reactive({});
    const savedData = ref({});
    systemCategories.value.forEach((system) => {
      expandedSections[system.key] = true;
      selectedSymptoms[system.key] = {};
      system.symptoms.forEach((symptom) => {
        selectedSymptoms[system.key][symptom.value] = false;
      });
    });
    const toggleSection = (systemKey) => {
      expandedSections[systemKey] = !expandedSections[systemKey];
    };
    const handleSymptomChange = (systemKey) => {
      showSaveButton.value = true;
    };
    const saveReview = () => {
      savedData.value = JSON.parse(JSON.stringify(selectedSymptoms));
      hasSavedReview.value = true;
      showSaveButton.value = false;
      console.log("Review of Systems saved:", savedData.value);
    };
    const editReview = () => {
      Object.keys(savedData.value).forEach((systemKey) => {
        Object.keys(savedData.value[systemKey]).forEach((symptomKey) => {
          selectedSymptoms[systemKey][symptomKey] = savedData.value[systemKey][symptomKey];
        });
      });
      showSaveButton.value = true;
      hasSavedReview.value = false;
    };
    const getSavedSystemsWithSymptoms = () => {
      const systemsWithSymptoms = [];
      systemCategories.value.forEach((system) => {
        const symptoms = savedData.value[system.key] || {};
        const selectedSymptomLabels = [];
        Object.keys(symptoms).forEach((symptomKey) => {
          if (symptoms[symptomKey]) {
            const symptom = system.symptoms.find((s) => s.value === symptomKey);
            if (symptom) {
              selectedSymptomLabels.push(symptom.label);
            }
          }
        });
        if (selectedSymptomLabels.length > 0) {
          systemsWithSymptoms.push({
            key: system.key,
            title: system.title,
            selectedSymptoms: selectedSymptomLabels
          });
        }
      });
      return systemsWithSymptoms;
    };
    const getData = () => {
      if (!hasSavedReview.value) {
        const hasAnySelection = Object.values(selectedSymptoms).some(
          (systemSymptoms) => Object.values(systemSymptoms).some((isSelected) => isSelected)
        );
        if (!hasAnySelection) {
          return null;
        }
        return formatDataForAPI(selectedSymptoms);
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [];
      systemCategories.value.forEach((system) => {
        const systemSymptoms = data[system.key] || {};
        const selectedSymptomsList = [];
        Object.keys(systemSymptoms).forEach((symptomKey) => {
          if (systemSymptoms[symptomKey]) {
            const symptom = system.symptoms.find((s) => s.value === symptomKey);
            if (symptom) {
              selectedSymptomsList.push({
                concept: symptomKey,
                value: symptom.label
              });
            }
          }
        });
        if (selectedSymptomsList.length > 0) {
          obs.push({
            concept: system.conceptId,
            value: system.conceptId,
            groupMembers: selectedSymptomsList
          });
        }
      });
      return {
        reviewOfSystems: data,
        obs
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
              _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "form-title" }, "Review of Systems", -1)),
              _cache[6] || (_cache[6] = createBaseVNode("p", { class: "subtitle" }, "Select all symptoms that apply", -1)),
              createBaseVNode("div", _hoisted_1$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(systemCategories.value, (system, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: system.key,
                    class: "system-section"
                  }, [
                    createBaseVNode("div", {
                      class: "system-header",
                      onClick: ($event) => toggleSection(system.key)
                    }, [
                      createBaseVNode("h4", null, toDisplayString(system.title), 1),
                      createVNode(unref(IonIcon), {
                        icon: expandedSections[system.key] ? iconsContent.value.chevronDown : iconsContent.value.chevronForward
                      }, null, 8, ["icon"])
                    ], 8, _hoisted_2$5),
                    withDirectives(createBaseVNode("div", _hoisted_3$4, [
                      createVNode(unref(IonList), null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(system.symptoms, (symptom) => {
                            return openBlock(), createBlock(unref(IonItem), {
                              key: symptom.value,
                              lines: "none"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonCheckbox), {
                                  modelValue: selectedSymptoms[system.key][symptom.value],
                                  "onUpdate:modelValue": ($event) => selectedSymptoms[system.key][symptom.value] = $event,
                                  onIonChange: ($event) => handleSymptomChange(system.key)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonLabel), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(symptom.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "onIonChange"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ], 512), [
                      [vShow, expandedSections[system.key]]
                    ])
                  ]);
                }), 128))
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveReview()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedReview.value ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e8f5e9" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#2e7d32" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Review of Systems Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_5$4, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(getSavedSystemsWithSymptoms(), (system) => {
                            return openBlock(), createElementBlock("div", {
                              key: system.key,
                              class: "system-summary"
                            }, [
                              createBaseVNode("p", null, [
                                createBaseVNode("strong", null, toDisplayString(system.title) + ":", 1)
                              ]),
                              createBaseVNode("ul", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(system.selectedSymptoms, (symptom) => {
                                  return openBlock(), createElementBlock("li", { key: symptom }, toDisplayString(symptom), 1);
                                }), 128))
                              ])
                            ]);
                          }), 128)),
                          getSavedSystemsWithSymptoms().length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6$4, [..._cache[3] || (_cache[3] = [
                            createBaseVNode("p", null, [
                              createBaseVNode("em", null, "No symptoms reported in any system")
                            ], -1)
                          ])])) : createCommentVNode("", true),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editReview()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[4] || (_cache[4] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ReviewOfSystems = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c054d13f"]]);

const _hoisted_1$4 = { class: "form-section" };
const _hoisted_2$4 = {
  key: 1,
  class: "saved-examination"
};
const _hoisted_3$3 = { class: "examination-content" };
const _hoisted_4$3 = {
  key: 0,
  class: "exam-section"
};
const _hoisted_5$3 = { class: "detail-text" };
const _hoisted_6$3 = { class: "exam-section vitals-section" };
const _hoisted_7$3 = { class: "vitals-grid" };
const _hoisted_8$3 = {
  key: 0,
  class: "vital-item"
};
const _hoisted_9$3 = { class: "vital-value" };
const _hoisted_10$2 = {
  key: 1,
  class: "vital-item"
};
const _hoisted_11$2 = { class: "vital-value" };
const _hoisted_12$2 = {
  key: 2,
  class: "vital-item"
};
const _hoisted_13$2 = { class: "vital-value" };
const _hoisted_14$1 = {
  key: 3,
  class: "vital-item"
};
const _hoisted_15$1 = { class: "vital-value" };
const _hoisted_16$1 = {
  key: 1,
  class: "exam-section"
};
const _hoisted_17 = {
  key: 2,
  class: "exam-section"
};
const _hoisted_18 = {
  key: 3,
  class: "exam-section"
};
const _hoisted_19 = {
  key: 4,
  class: "exam-section"
};
const _hoisted_20 = { class: "detail-text" };
const _hoisted_21 = {
  key: 5,
  class: "exam-section"
};
const _hoisted_22 = {
  key: 6,
  class: "exam-section"
};
const _hoisted_23 = { class: "detail-text" };
const _hoisted_24 = {
  key: 7,
  class: "exam-section gcs-section"
};
const _hoisted_25 = { key: 0 };
const _hoisted_26 = { key: 1 };
const _hoisted_27 = { key: 2 };
const _hoisted_28 = {
  key: 8,
  class: "exam-section"
};
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _hoisted_31 = { key: 2 };
const _hoisted_32 = {
  key: 9,
  class: "exam-section"
};
const _hoisted_33 = { key: 0 };
const _hoisted_34 = { key: 1 };
const _hoisted_35 = { key: 2 };
const _hoisted_36 = { key: 3 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PhysicalExamination",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      // General
      GENERAL_CONDITION: "general_condition",
      SEVERE_PAIN: "severe_pain",
      COMFORTABLE: "comfortable",
      ILL: "ill",
      FIT_FOR_AGE: "fit_for_age",
      // Vitals
      TEMPERATURE: "temperature",
      PULSE_RATE: "pulse_rate",
      BLOOD_PRESSURE_MEASURED: "blood_pressure_measured",
      RESPIRATORY_RATE: "respiratory_rate",
      // Eyes
      EYES: "eyes",
      PALLOR: "pallor",
      JAUNDICE: "jaundice",
      NONE: "none",
      // Mouth
      MOUTH: "mouth",
      CANDIDA: "candida",
      KAPOSI_SARCOMA: "kaposi_sarcoma",
      HYDRATION: "hydration",
      // Neck
      NECK: "neck",
      NODES: "nodes",
      SUBMENTAL: "submental",
      EPITHROCHLEAR: "epithrochlear",
      // Examinations
      CHEST_EXAMINATION: "chest_examination",
      ENDOCRINE_EXAMINATION: "endocrine_examination",
      BREAST: "breast",
      THYROID: "thyroid",
      ABDOMINAL_EXAMINATION: "abdominal_examination",
      // GCS
      MOTOR_RESPONSE: "motor_response",
      NO_MOVEMENT: "no_movement",
      ABNORMAL_EXTENSION: "abnormal_extension",
      ABNORMAL_FLEXION: "abnormal_flexion",
      FLEXION_WITHDRAWAL_FROM_PAINFUL_STIMULI: "flexion_withdrawal",
      MOVES_TO_LOCALIZE_PAIN: "moves_to_localize_pain",
      OBEYS_COMMANDS: "obeys_commands",
      VERBAL_RESPONSE: "verbal_response",
      NO_SOUND: "no_sound",
      INCOMPREHENSIBLE_SOUNDS: "incomprehensible_sounds",
      INAPPROPRIATE_WORDS: "inappropriate_words",
      CONFUSED_AND_DISORIENTED: "confused_disoriented",
      ORIENTED_TO_TIME: "oriented",
      EYE_OPENING_RESPONSE: "eye_opening_response",
      DOES_NOT_OPEN_EYES: "does_not_open_eyes",
      OPENS_EYES_IN_RESPONSE_TO_PAIN: "opens_eyes_to_pain",
      OPENS_EYES_IN_RESPONSE_TO_VOICE: "opens_eyes_to_voice",
      OPENS_EYES_SPONTANEOUSLY: "opens_eyes_spontaneously",
      // Additional
      CRANIAL_ERVES: "cranial_nerves",
      GROSS_MOTOR: "gross_motor",
      SENSATION: "sensation",
      PULSATIONS: "pulsations",
      RECTAL_EXAMINATION: "rectal_examination",
      EXTREMITIES: "extremities",
      VAGINAL_EXAMINATION: "vaginal_examination"
    };
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isPatientFemale = computed(() => {
      return patient.value?.gender?.toLowerCase() === "female" || patient.value?.gender?.toLowerCase() === "f";
    });
    const generalConditionOptions = ref([
      { value: CONCEPTS.SEVERE_PAIN, label: "In Pain" },
      { value: CONCEPTS.COMFORTABLE, label: "Comfortable" },
      { value: CONCEPTS.ILL, label: "Ill" },
      { value: CONCEPTS.FIT_FOR_AGE, label: "Fit for age" }
    ]);
    const eyesOptions = ref([
      { value: CONCEPTS.PALLOR, label: "Pallor" },
      { value: CONCEPTS.JAUNDICE, label: "Jaundice" },
      { value: CONCEPTS.NONE, label: "None" }
    ]);
    const mouthOptions = ref([
      { value: CONCEPTS.CANDIDA, label: "Candida" },
      { value: CONCEPTS.KAPOSI_SARCOMA, label: "Kaposi's Sarcoma (KS)" },
      { value: CONCEPTS.HYDRATION, label: "Hydration" }
    ]);
    const neckOptions = ref([
      { value: CONCEPTS.NODES, label: "Nodes" },
      { value: CONCEPTS.SUBMENTAL, label: "Submental" },
      { value: CONCEPTS.EPITHROCHLEAR, label: "Epithrochlear" }
    ]);
    const endocrineOptions = ref([
      { value: CONCEPTS.BREAST, label: "Breast" },
      { value: CONCEPTS.THYROID, label: "Thyroid" }
    ]);
    const motorResponseOptions = ref([
      { value: CONCEPTS.NO_MOVEMENT, label: "No movement" },
      { value: CONCEPTS.ABNORMAL_EXTENSION, label: "Abnormal extension (decerebrate posture)" },
      { value: CONCEPTS.ABNORMAL_FLEXION, label: "Abnormal flexion (decorticate posture)" },
      {
        value: CONCEPTS.FLEXION_WITHDRAWAL_FROM_PAINFUL_STIMULI,
        label: "Flexion/Withdrawal from painful stimuli"
      },
      { value: CONCEPTS.MOVES_TO_LOCALIZE_PAIN, label: "Moves to localize pain" },
      { value: CONCEPTS.OBEYS_COMMANDS, label: "Obeys commands" }
    ]);
    const verbalResponseOptions = ref([
      { value: CONCEPTS.NO_SOUND, label: "No sound" },
      { value: CONCEPTS.INCOMPREHENSIBLE_SOUNDS, label: "Incomprehensible sounds" },
      { value: CONCEPTS.INAPPROPRIATE_WORDS, label: "Inappropriate words" },
      { value: CONCEPTS.CONFUSED_AND_DISORIENTED, label: "Confused and disoriented, but able to answer questions" },
      { value: CONCEPTS.ORIENTED_TO_TIME, label: "Oriented to time, person, and place, converses normally" }
    ]);
    const eyeResponseOptions = ref([
      { value: CONCEPTS.DOES_NOT_OPEN_EYES, label: "Does not open eyes" },
      { value: CONCEPTS.OPENS_EYES_IN_RESPONSE_TO_PAIN, label: "Opens eyes in response to pain" },
      { value: CONCEPTS.OPENS_EYES_IN_RESPONSE_TO_VOICE, label: "Opens eyes in response to voice" },
      { value: CONCEPTS.OPENS_EYES_SPONTANEOUSLY, label: "Opens eyes spontaneously" }
    ]);
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedExamination = ref(false);
    const savedData = ref({});
    const currentFormData = ref(null);
    const physicalExaminationForm = computed(() => {
      const form = [
        // General Condition Section
        {
          componentType: "Heading",
          name: "General Condition",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "General Appearance",
          name: "general",
          // type: "block",
          options: generalConditionOptions.value,
          grid: { s: "12" }
        },
        // Vitals Section
        {
          componentType: "Heading",
          name: "Vital Signs",
          position: "left"
        },
        {
          componentType: "inputField",
          header: "Temperature (°C)",
          name: "temperature",
          placeholder: "e.g., 37.5",
          inputType: "number",
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Pulse (bpm)",
          name: "pulse",
          placeholder: "e.g., 72",
          inputType: "number",
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Blood Pressure (mmHg)",
          name: "bloodPressure",
          placeholder: "e.g., 120/80",
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Respiratory Rate (bs/m)",
          name: "respiratoryRate",
          placeholder: "e.g., 16",
          inputType: "number",
          grid: { s: "12", m: "6" }
        },
        // Eyes
        {
          componentType: "Heading",
          name: "Eyes",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Eye Examination",
          name: "eyes",
          type: "inline",
          options: eyesOptions.value,
          grid: { s: "12" }
        },
        // Mouth
        {
          componentType: "Heading",
          name: "Mouth",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Mouth Examination",
          name: "mouth",
          // type: "block",
          options: mouthOptions.value,
          grid: { s: "12" }
        },
        // Neck
        {
          componentType: "Heading",
          name: "Neck",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Neck Examination",
          name: "neck",
          // type: "block",
          options: neckOptions.value,
          grid: { s: "12" }
        },
        // Chest
        {
          componentType: "Heading",
          name: "Chest Examination",
          position: "left"
        },
        {
          componentType: "textAreaField",
          header: "Chest Findings",
          name: "chest",
          placeholder: "Describe chest examination findings",
          grid: { s: "12" }
        },
        // Endocrine
        {
          componentType: "Heading",
          name: "Endocrine Examination",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Endocrine Findings",
          name: "endocrine",
          type: "inline",
          options: endocrineOptions.value,
          grid: { s: "12" }
        },
        // Abdomen
        {
          componentType: "Heading",
          name: "Abdominal Examination",
          position: "left"
        },
        {
          componentType: "textAreaField",
          header: "Abdominal Findings",
          name: "abdomen",
          placeholder: "Describe abdominal examination findings",
          grid: { s: "12" }
        },
        // Glasgow Coma Scale
        {
          componentType: "Heading",
          name: "Glasgow Coma Scale (GCS)",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Motor Response",
          name: "motorResponse",
          // type: "block",
          options: motorResponseOptions.value,
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "Verbal Response",
          name: "verbalResponse",
          // type: "block",
          options: verbalResponseOptions.value,
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "Eye Response",
          name: "eyeResponse",
          // type: "block",
          options: eyeResponseOptions.value,
          grid: { s: "12" }
        },
        // Additional Examinations
        {
          componentType: "Heading",
          name: "Additional Examinations",
          position: "left"
        },
        {
          componentType: "inputField",
          header: "Cranial Nerves",
          name: "cranialNerves",
          placeholder: "Cranial nerve examination findings",
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Gross Motor",
          name: "grossMotor",
          placeholder: "Gross motor examination findings",
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Sensation",
          name: "sensation",
          placeholder: "Sensation examination findings",
          grid: { s: "12" }
        },
        // Extremities
        {
          componentType: "Heading",
          name: "Extremities",
          position: "left"
        },
        {
          componentType: "inputField",
          header: "Pulsations",
          name: "pulsations",
          placeholder: "Peripheral pulse findings",
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Extremities Examination",
          name: "extremities",
          placeholder: "Extremities examination findings",
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Rectal Examination",
          name: "rectalExamination",
          placeholder: "Rectal examination findings",
          grid: { s: "12" }
        }
      ];
      if (isPatientFemale.value) {
        form.push({
          componentType: "inputField",
          header: "Vaginal Examination (For Females Only)",
          name: "vaginalExamination",
          placeholder: "Vaginal examination findings",
          grid: { s: "12" }
        });
      }
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFormData.value = newValues;
          const hasAnyValue = Object.values(newValues).some((value) => value !== "" && value !== null && value !== void 0);
          if (hasAnyValue) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const hasGCSData = computed(() => {
      return savedData.value.motorResponse || savedData.value.verbalResponse || savedData.value.eyeResponse;
    });
    const hasAdditionalExams = computed(() => {
      return savedData.value.cranialNerves || savedData.value.grossMotor || savedData.value.sensation;
    });
    const hasExtremitiesData = computed(() => {
      return savedData.value.pulsations || savedData.value.extremities || savedData.value.rectalExamination || savedData.value.vaginalExamination;
    });
    const getLabel = (field, value) => {
      const optionsMap = {
        general: generalConditionOptions.value,
        eyes: eyesOptions.value,
        mouth: mouthOptions.value,
        neck: neckOptions.value,
        endocrine: endocrineOptions.value,
        motorResponse: motorResponseOptions.value,
        verbalResponse: verbalResponseOptions.value,
        eyeResponse: eyeResponseOptions.value
      };
      const options = optionsMap[field];
      if (!options) return value;
      const option = options.find((opt) => opt.value === value);
      return option?.label || value;
    };
    const saveExamination = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        return;
      }
      savedData.value = { ...data };
      hasSavedExamination.value = true;
      showSaveButton.value = false;
      console.log("Physical examination saved:", savedData.value);
    };
    const editExamination = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          currentFormData.value = { ...savedData.value };
        }
      }, 100);
      showSaveButton.value = true;
      hasSavedExamination.value = false;
    };
    const getData = () => {
      if (!hasSavedExamination.value) {
        const formData = formRef.value?.getFormValues();
        const hasAnyData = formData && Object.values(formData).some((value) => value !== "" && value !== null);
        if (hasAnyData) {
          return formatDataForAPI(formData);
        }
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [];
      const addObs = (concept, value) => {
        if (value && value !== "") {
          obs.push({
            concept,
            value
          });
        }
      };
      addObs(CONCEPTS.GENERAL_CONDITION, data.general);
      addObs(CONCEPTS.TEMPERATURE, data.temperature);
      addObs(CONCEPTS.PULSE_RATE, data.pulse);
      addObs(CONCEPTS.BLOOD_PRESSURE_MEASURED, data.bloodPressure);
      addObs(CONCEPTS.RESPIRATORY_RATE, data.respiratoryRate);
      addObs(CONCEPTS.EYES, data.eyes);
      addObs(CONCEPTS.MOUTH, data.mouth);
      addObs(CONCEPTS.NECK, data.neck);
      addObs(CONCEPTS.CHEST_EXAMINATION, data.chest);
      addObs(CONCEPTS.ENDOCRINE_EXAMINATION, data.endocrine);
      addObs(CONCEPTS.ABDOMINAL_EXAMINATION, data.abdomen);
      addObs(CONCEPTS.MOTOR_RESPONSE, data.motorResponse);
      addObs(CONCEPTS.VERBAL_RESPONSE, data.verbalResponse);
      addObs(CONCEPTS.EYE_OPENING_RESPONSE, data.eyeResponse);
      addObs(CONCEPTS.CRANIAL_ERVES, data.cranialNerves);
      addObs(CONCEPTS.GROSS_MOTOR, data.grossMotor);
      addObs(CONCEPTS.SENSATION, data.sensation);
      addObs(CONCEPTS.PULSATIONS, data.pulsations);
      addObs(CONCEPTS.RECTAL_EXAMINATION, data.rectalExamination);
      addObs(CONCEPTS.EXTREMITIES, data.extremities);
      addObs(CONCEPTS.VAGINAL_EXAMINATION, data.vaginalExamination);
      return {
        physicalExamination: data,
        obs
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
              _cache[19] || (_cache[19] = createBaseVNode("h3", { class: "form-title" }, "Physical Examination", -1)),
              _cache[20] || (_cache[20] = createBaseVNode("p", { class: "subtitle" }, "Comprehensive clinical examination findings", -1)),
              createBaseVNode("div", _hoisted_1$4, [
                createVNode(StandardForm, {
                  formData: physicalExaminationForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveExamination()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedExamination.value ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e1f5fe" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#0277bd" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Physical Examination Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$3, [
                          savedData.value.general ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "General Condition:")
                            ], -1)),
                            createBaseVNode("p", _hoisted_5$3, toDisplayString(getLabel("general", savedData.value.general)), 1)
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_6$3, [
                            _cache[8] || (_cache[8] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Vital Signs:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_7$3, [
                              savedData.value.temperature ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
                                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "vital-label" }, "Temperature:", -1)),
                                createBaseVNode("span", _hoisted_9$3, toDisplayString(savedData.value.temperature) + "°C", 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.pulse ? (openBlock(), createElementBlock("div", _hoisted_10$2, [
                                _cache[5] || (_cache[5] = createBaseVNode("span", { class: "vital-label" }, "Pulse:", -1)),
                                createBaseVNode("span", _hoisted_11$2, toDisplayString(savedData.value.pulse) + " bpm", 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.bloodPressure ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
                                _cache[6] || (_cache[6] = createBaseVNode("span", { class: "vital-label" }, "Blood Pressure:", -1)),
                                createBaseVNode("span", _hoisted_13$2, toDisplayString(savedData.value.bloodPressure) + " mmHg", 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.respiratoryRate ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
                                _cache[7] || (_cache[7] = createBaseVNode("span", { class: "vital-label" }, "Respiratory Rate:", -1)),
                                createBaseVNode("span", _hoisted_15$1, toDisplayString(savedData.value.respiratoryRate) + " bs/m", 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          savedData.value.eyes ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
                            createBaseVNode("p", null, [
                              _cache[9] || (_cache[9] = createBaseVNode("strong", null, "Eyes:", -1)),
                              createTextVNode(" " + toDisplayString(getLabel("eyes", savedData.value.eyes)), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          savedData.value.mouth ? (openBlock(), createElementBlock("div", _hoisted_17, [
                            createBaseVNode("p", null, [
                              _cache[10] || (_cache[10] = createBaseVNode("strong", null, "Mouth:", -1)),
                              createTextVNode(" " + toDisplayString(getLabel("mouth", savedData.value.mouth)), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          savedData.value.neck ? (openBlock(), createElementBlock("div", _hoisted_18, [
                            createBaseVNode("p", null, [
                              _cache[11] || (_cache[11] = createBaseVNode("strong", null, "Neck:", -1)),
                              createTextVNode(" " + toDisplayString(getLabel("neck", savedData.value.neck)), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          savedData.value.chest ? (openBlock(), createElementBlock("div", _hoisted_19, [
                            _cache[12] || (_cache[12] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Chest:")
                            ], -1)),
                            createBaseVNode("p", _hoisted_20, toDisplayString(savedData.value.chest), 1)
                          ])) : createCommentVNode("", true),
                          savedData.value.endocrine ? (openBlock(), createElementBlock("div", _hoisted_21, [
                            createBaseVNode("p", null, [
                              _cache[13] || (_cache[13] = createBaseVNode("strong", null, "Endocrine:", -1)),
                              createTextVNode(" " + toDisplayString(getLabel("endocrine", savedData.value.endocrine)), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          savedData.value.abdomen ? (openBlock(), createElementBlock("div", _hoisted_22, [
                            _cache[14] || (_cache[14] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Abdomen:")
                            ], -1)),
                            createBaseVNode("p", _hoisted_23, toDisplayString(savedData.value.abdomen), 1)
                          ])) : createCommentVNode("", true),
                          hasGCSData.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
                            _cache[15] || (_cache[15] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Glasgow Coma Scale (GCS):")
                            ], -1)),
                            createBaseVNode("ul", null, [
                              savedData.value.motorResponse ? (openBlock(), createElementBlock("li", _hoisted_25, "Motor Response: " + toDisplayString(getLabel("motorResponse", savedData.value.motorResponse)), 1)) : createCommentVNode("", true),
                              savedData.value.verbalResponse ? (openBlock(), createElementBlock("li", _hoisted_26, " Verbal Response: " + toDisplayString(getLabel("verbalResponse", savedData.value.verbalResponse)), 1)) : createCommentVNode("", true),
                              savedData.value.eyeResponse ? (openBlock(), createElementBlock("li", _hoisted_27, "Eye Response: " + toDisplayString(getLabel("eyeResponse", savedData.value.eyeResponse)), 1)) : createCommentVNode("", true)
                            ])
                          ])) : createCommentVNode("", true),
                          hasAdditionalExams.value ? (openBlock(), createElementBlock("div", _hoisted_28, [
                            _cache[16] || (_cache[16] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Additional Examinations:")
                            ], -1)),
                            createBaseVNode("ul", null, [
                              savedData.value.cranialNerves ? (openBlock(), createElementBlock("li", _hoisted_29, "Cranial Nerves: " + toDisplayString(savedData.value.cranialNerves), 1)) : createCommentVNode("", true),
                              savedData.value.grossMotor ? (openBlock(), createElementBlock("li", _hoisted_30, "Gross Motor: " + toDisplayString(savedData.value.grossMotor), 1)) : createCommentVNode("", true),
                              savedData.value.sensation ? (openBlock(), createElementBlock("li", _hoisted_31, "Sensation: " + toDisplayString(savedData.value.sensation), 1)) : createCommentVNode("", true)
                            ])
                          ])) : createCommentVNode("", true),
                          hasExtremitiesData.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                            _cache[17] || (_cache[17] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Extremities:")
                            ], -1)),
                            createBaseVNode("ul", null, [
                              savedData.value.pulsations ? (openBlock(), createElementBlock("li", _hoisted_33, "Pulsations: " + toDisplayString(savedData.value.pulsations), 1)) : createCommentVNode("", true),
                              savedData.value.extremities ? (openBlock(), createElementBlock("li", _hoisted_34, "Extremities: " + toDisplayString(savedData.value.extremities), 1)) : createCommentVNode("", true),
                              savedData.value.rectalExamination ? (openBlock(), createElementBlock("li", _hoisted_35, "Rectal Examination: " + toDisplayString(savedData.value.rectalExamination), 1)) : createCommentVNode("", true),
                              savedData.value.vaginalExamination ? (openBlock(), createElementBlock("li", _hoisted_36, "Vaginal Examination: " + toDisplayString(savedData.value.vaginalExamination), 1)) : createCommentVNode("", true)
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editExamination()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[18] || (_cache[18] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PhysicalExamination = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cbf6a228"]]);

const _hoisted_1$3 = {
  key: 0,
  class: "diagnoses-table"
};
const _hoisted_2$3 = { class: "table-wrapper" };
const _hoisted_3$2 = { class: "code-cell" };
const _hoisted_4$2 = { class: "diagnosis-cell" };
const _hoisted_5$2 = { class: "action-cell" };
const _hoisted_6$2 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_7$2 = { class: "search-section" };
const _hoisted_8$2 = {
  key: 3,
  class: "saved-diagnoses"
};
const _hoisted_9$2 = { class: "diagnosis-content" };
const _hoisted_10$1 = { class: "diagnosis-list" };
const _hoisted_11$1 = { class: "diagnosis-number" };
const _hoisted_12$1 = { class: "diagnosis-code" };
const _hoisted_13$1 = { class: "diagnosis-name" };
const DIFFERENTIAL_DIAGNOSIS = "differential_diagnosis";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WorkingDifferentialDiagnosis",
  setup(__props, { expose: __expose }) {
    const iconsContent = ref(icons);
    const selectedDiagnoses = ref([]);
    const hasSavedDiagnoses = ref(false);
    const savedData = ref([]);
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
          header: "Search ICD-11 Diagnosis",
          name: "diagnosis",
          trackBy: "concept_id",
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
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        return;
      }
      if (!data?.diagnosis) {
        alert("Please select a diagnosis");
        return;
      }
      const isDuplicate = selectedDiagnoses.value.some((item) => item.code === data.diagnosis.concept_id);
      if (isDuplicate) {
        alert("This diagnosis has already been added");
        return;
      }
      selectedDiagnoses.value.push({
        code: data.diagnosis.concept_id,
        diagnosis: data.diagnosis.name
      });
      formRef.value?.resetForm();
      console.log("Diagnosis added:", selectedDiagnoses.value);
    };
    const removeDiagnosis = (index) => {
      const diagnosis = selectedDiagnoses.value[index];
      const confirmRemove = confirm(`Remove "${diagnosis.diagnosis}"?`);
      if (confirmRemove) {
        selectedDiagnoses.value.splice(index, 1);
      }
    };
    const saveDiagnoses = () => {
      if (selectedDiagnoses.value.length === 0) {
        alert("Please add at least one diagnosis");
        return;
      }
      savedData.value = [...selectedDiagnoses.value];
      hasSavedDiagnoses.value = true;
      console.log("Differential diagnoses saved:", savedData.value);
    };
    const editDiagnoses = () => {
      selectedDiagnoses.value = [...savedData.value];
      hasSavedDiagnoses.value = false;
    };
    const getData = () => {
      if (!hasSavedDiagnoses.value) {
        if (selectedDiagnoses.value.length > 0) {
          return formatDataForAPI(selectedDiagnoses.value);
        }
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (diagnoses) => {
      const obs = diagnoses.map((item) => ({
        concept: DIFFERENTIAL_DIAGNOSIS,
        value: `${item.code}-${item.diagnosis}`
      }));
      return {
        differentialDiagnoses: diagnoses,
        obs
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
              _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "form-title" }, "Working Differential Diagnosis", -1)),
              _cache[10] || (_cache[10] = createBaseVNode("p", { class: "subtitle" }, "Add possible diagnoses based on clinical findings", -1)),
              selectedDiagnoses.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
                _cache[4] || (_cache[4] = createBaseVNode("h4", null, "Selected Diagnoses", -1)),
                createBaseVNode("div", _hoisted_2$3, [
                  createBaseVNode("table", null, [
                    _cache[3] || (_cache[3] = createBaseVNode("thead", null, [
                      createBaseVNode("tr", null, [
                        createBaseVNode("th", null, "Code"),
                        createBaseVNode("th", null, "Diagnosis"),
                        createBaseVNode("th", null, "Actions")
                      ])
                    ], -1)),
                    createBaseVNode("tbody", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(selectedDiagnoses.value, (diagnosis, index) => {
                        return openBlock(), createElementBlock("tr", { key: index }, [
                          createBaseVNode("td", _hoisted_3$2, toDisplayString(diagnosis.code), 1),
                          createBaseVNode("td", _hoisted_4$2, toDisplayString(diagnosis.diagnosis), 1),
                          createBaseVNode("td", _hoisted_5$2, [
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
              ])) : (openBlock(), createElementBlock("div", _hoisted_6$2, [
                createVNode(DashBox, {
                  status: true,
                  content: "No diagnoses added yet"
                })
              ])),
              createBaseVNode("div", _hoisted_7$2, [
                _cache[5] || (_cache[5] = createBaseVNode("h4", null, "Add Diagnosis", -1)),
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
                    name: "Save Diagnoses",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedDiagnoses.value ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#fff8e1" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#f57f17" } }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode(" Differential Diagnosis Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_9$2, [
                          createBaseVNode("p", null, [
                            _cache[7] || (_cache[7] = createBaseVNode("strong", null, "Total Diagnoses:", -1)),
                            createTextVNode(" " + toDisplayString(savedData.value.length), 1)
                          ]),
                          createBaseVNode("div", _hoisted_10$1, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(savedData.value, (diagnosis, index) => {
                              return openBlock(), createElementBlock("div", {
                                key: index,
                                class: "diagnosis-item"
                              }, [
                                createBaseVNode("span", _hoisted_11$1, toDisplayString(index + 1) + ".", 1),
                                createBaseVNode("span", _hoisted_12$1, toDisplayString(diagnosis.code), 1),
                                createBaseVNode("span", _hoisted_13$1, toDisplayString(diagnosis.diagnosis), 1)
                              ]);
                            }), 128))
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[2] || (_cache[2] = ($event) => editDiagnoses()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[8] || (_cache[8] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const WorkingDifferentialDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-09d54743"]]);

const _hoisted_1$2 = { class: "lab-order-section" };
const _hoisted_2$2 = { class: "lab-order-placeholder" };
const _hoisted_3$1 = { style: { "text-align": "center", "padding": "20px" } };
const _hoisted_4$1 = { class: "additional-notes-section" };
const _hoisted_5$1 = {
  key: 1,
  class: "saved-investigations"
};
const _hoisted_6$1 = { class: "investigations-content" };
const _hoisted_7$1 = {
  key: 0,
  class: "notes-summary"
};
const _hoisted_8$1 = { class: "notes-text" };
const _hoisted_9$1 = {
  key: 1,
  class: "no-notes"
};
const NOTES = "notes";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Investigations",
  setup(__props, { expose: __expose }) {
    const LabOrdersList = defineAsyncComponent(() => __vitePreload(() => import('./LabOrdersList-2sxaYY9k.js'),true              ?[]:void 0));
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedInvestigations = ref(false);
    const savedData = ref({
      additionalNotes: ""
    });
    const currentFormData = ref(null);
    const investigationsForm = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Additional Investigation Notes",
          name: "additionalNotes",
          placeholder: "Enter external lab orders, radiology investigations, or other diagnostic tests not performed at your facility...",
          // rows: 6,
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFormData.value = newValues;
          if (newValues.additionalNotes) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const saveInvestigations = () => {
      const data = formRef.value?.getFormValues();
      savedData.value = {
        additionalNotes: data?.additionalNotes || ""
      };
      hasSavedInvestigations.value = true;
      showSaveButton.value = false;
      console.log("Investigations saved:", savedData.value);
    };
    const editInvestigations = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          currentFormData.value = {
            additionalNotes: savedData.value.additionalNotes
          };
        }
      }, 100);
      showSaveButton.value = true;
      hasSavedInvestigations.value = false;
    };
    const getData = () => {
      if (!hasSavedInvestigations.value) {
        const formData = formRef.value?.getFormValues();
        if (formData?.additionalNotes) {
          return formatDataForAPI(formData);
        }
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [];
      if (data.additionalNotes?.trim()) {
        obs.push({
          concept: NOTES,
          value: data.additionalNotes
        });
      }
      return {
        investigations: {
          additionalNotes: data.additionalNotes
        },
        obs
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
              _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "form-title" }, "Investigations", -1)),
              _cache[11] || (_cache[11] = createBaseVNode("p", { class: "subtitle" }, "Order laboratory tests and investigations", -1)),
              createBaseVNode("div", _hoisted_1$2, [
                _cache[2] || (_cache[2] = createBaseVNode("h4", null, "Laboratory Orders", -1)),
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "section-description" }, "Select tests to be performed at the facility", -1)),
                createBaseVNode("div", _hoisted_2$2, [
                  createVNode(unref(IonCard), { style: { "background": "#f0f4ff", "border": "2px dashed #3b82f6" } }, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardContent), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_3$1, [
                            createVNode(unref(IonIcon), {
                              icon: iconsContent.value.flask,
                              style: { "font-size": "48px", "color": "#3b82f6", "margin-bottom": "10px" }
                            }, null, 8, ["icon"]),
                            createVNode(unref(LabOrdersList))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_4$1, [
                _cache[4] || (_cache[4] = createBaseVNode("h4", { class: "notes-header" }, "Additional Investigation Notes", -1)),
                _cache[5] || (_cache[5] = createBaseVNode("p", { class: "notes-description" }, " Include other radiology investigations and lab orders that your facility doesn't perform (e.g., external diagnostic laboratories, specialized imaging). ", -1)),
                createVNode(StandardForm, {
                  formData: investigationsForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveInvestigations()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedInvestigations.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e3f2fd" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#1565c0" } }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode(" Investigations Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_6$1, [
                          savedData.value.additionalNotes ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                            _cache[7] || (_cache[7] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Additional Investigation Notes:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_8$1, toDisplayString(savedData.value.additionalNotes), 1)
                          ])) : (openBlock(), createElementBlock("div", _hoisted_9$1, [..._cache[8] || (_cache[8] = [
                            createBaseVNode("p", null, [
                              createBaseVNode("em", null, "No additional investigation notes provided")
                            ], -1)
                          ])])),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editInvestigations()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[9] || (_cache[9] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Investigations = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b01c1979"]]);

const _hoisted_1$1 = { class: "medications-section" };
const _hoisted_2$1 = { class: "medication-placeholder" };
const _hoisted_3 = { style: { "text-align": "center", "padding": "20px" } };
const _hoisted_4 = { class: "form-section" };
const _hoisted_5 = {
  key: 1,
  class: "saved-management"
};
const _hoisted_6 = { class: "management-content" };
const _hoisted_7 = {
  key: 0,
  class: "summary-section"
};
const _hoisted_8 = { class: "notes-text" };
const _hoisted_9 = { class: "summary-section clerk-info" };
const _hoisted_10 = { class: "clerk-details" };
const _hoisted_11 = {
  key: 0,
  class: "clerk-item"
};
const _hoisted_12 = { class: "clerk-value" };
const _hoisted_13 = {
  key: 1,
  class: "clerk-item"
};
const _hoisted_14 = { class: "clerk-value" };
const _hoisted_15 = {
  key: 2,
  class: "clerk-item"
};
const _hoisted_16 = { class: "clerk-value" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InitialManagement",
  setup(__props, { expose: __expose }) {
    const PrescribedMedicationList = defineAsyncComponent(() => __vitePreload(() => import('./Medications-CX4wl7xe.js'),true              ?[]:void 0));
    const CONCEPTS = {
      ADDITIONAL_NOTES: "notes",
      CLERK_NAME: "clerk_name",
      DESIGNATION: "designation",
      SIGNATURE: "signature"
    };
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedManagement = ref(false);
    const savedData = ref({
      additionalNotes: "",
      clerkName: "",
      designation: "",
      signature: ""
    });
    const currentFormData = ref(null);
    const managementForm = computed(() => {
      const form = [
        // Additional Information Section
        {
          componentType: "Heading",
          name: "Additional Information",
          position: "left"
        },
        {
          componentType: "textAreaField",
          header: "Additional Notes",
          name: "additionalNotes",
          placeholder: "Enter any additional information, special instructions, follow-up plans, or clinical notes...",
          // rows: 5,
          grid: { s: "12" }
        },
        // Clerk Information Section
        {
          componentType: "Heading",
          name: "Clerk Information",
          position: "left"
        },
        {
          componentType: "inputField",
          header: "Clerked by (Name)",
          name: "clerkName",
          placeholder: "Enter your full name",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Designation",
          name: "designation",
          placeholder: "E.g., Medical Officer, Registrar, Consultant",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Signature",
          name: "signature",
          placeholder: "E.g., J.Smith",
          validation: (value) => {
            return StandardValidations.required(value);
          },
          grid: { s: "12", m: "6" }
        }
      ];
      return form;
    });
    const { formRef } = useExposeFromStandardForm();
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFormData.value = newValues;
          if (newValues.clerkName || newValues.designation || newValues.signature) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const saveManagement = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        return;
      }
      if (!data.clerkName || !data.designation || !data.signature) {
        alert("Please fill in all clerk information fields (Name, Designation, Signature)");
        return;
      }
      savedData.value = {
        additionalNotes: data.additionalNotes || "",
        clerkName: data.clerkName,
        designation: data.designation,
        signature: data.signature
      };
      hasSavedManagement.value = true;
      showSaveButton.value = false;
      console.log("Initial management saved:", savedData.value);
    };
    const editManagement = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          currentFormData.value = { ...savedData.value };
        }
      }, 100);
      showSaveButton.value = true;
      hasSavedManagement.value = false;
    };
    const printSummary = () => {
      console.log("Print summary requested");
      window.print();
    };
    const getData = () => {
      if (!hasSavedManagement.value) {
        const formData = formRef.value?.getFormValues();
        if (formData?.clerkName) {
          return formatDataForAPI(formData);
        }
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [];
      if (data.additionalNotes?.trim()) {
        obs.push({
          concept: CONCEPTS.ADDITIONAL_NOTES,
          value: data.additionalNotes
        });
      }
      if (data.clerkName?.trim()) {
        obs.push({
          concept: CONCEPTS.CLERK_NAME,
          value: data.clerkName
        });
      }
      if (data.designation?.trim()) {
        obs.push({
          concept: CONCEPTS.DESIGNATION,
          value: data.designation
        });
      }
      if (data.signature?.trim()) {
        obs.push({
          concept: CONCEPTS.SIGNATURE,
          value: data.signature
        });
      }
      return {
        initialManagement: {
          additionalNotes: data.additionalNotes,
          clerkName: data.clerkName,
          designation: data.designation,
          signature: data.signature
        },
        obs
      };
    };
    __expose({
      getData,
      printSummary
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              _cache[12] || (_cache[12] = createBaseVNode("h3", { class: "form-title" }, "Initial Management", -1)),
              _cache[13] || (_cache[13] = createBaseVNode("p", { class: "subtitle" }, "Document treatment plan, medications, and clerk information", -1)),
              createBaseVNode("div", _hoisted_1$1, [
                _cache[3] || (_cache[3] = createBaseVNode("h4", null, "Prescribed Medications", -1)),
                _cache[4] || (_cache[4] = createBaseVNode("p", { class: "section-description" }, "Medications ordered for the patient", -1)),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(unref(IonCard), { style: { "background": "#f0fdf4", "border": "2px dashed #22c55e" } }, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardContent), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_3, [
                            createVNode(unref(IonIcon), {
                              icon: iconsContent.value.medkit,
                              style: { "font-size": "48px", "color": "#16a34a", "margin-bottom": "10px" }
                            }, null, 8, ["icon"]),
                            createVNode(unref(PrescribedMedicationList))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(StandardForm, {
                  formData: managementForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              showSaveButton.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "solid",
                    icon: iconsContent.value.checkmark,
                    iconSlot: "start",
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveManagement()),
                    name: "Save",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedManagement.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#f3e5f5" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#7b1fa2" } }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode(" Management Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_6, [
                          savedData.value.additionalNotes ? (openBlock(), createElementBlock("div", _hoisted_7, [
                            _cache[6] || (_cache[6] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Additional Notes:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_8, toDisplayString(savedData.value.additionalNotes), 1)
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_9, [
                            _cache[10] || (_cache[10] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Clerk Information:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_10, [
                              savedData.value.clerkName ? (openBlock(), createElementBlock("div", _hoisted_11, [
                                _cache[7] || (_cache[7] = createBaseVNode("span", { class: "clerk-label" }, "Clerked by:", -1)),
                                createBaseVNode("span", _hoisted_12, toDisplayString(savedData.value.clerkName), 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.designation ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                _cache[8] || (_cache[8] = createBaseVNode("span", { class: "clerk-label" }, "Designation:", -1)),
                                createBaseVNode("span", _hoisted_14, toDisplayString(savedData.value.designation), 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.signature ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                _cache[9] || (_cache[9] = createBaseVNode("span", { class: "clerk-label" }, "Signature:", -1)),
                                createBaseVNode("span", _hoisted_16, toDisplayString(savedData.value.signature), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editManagement()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[11] || (_cache[11] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              hasSavedManagement.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 2,
                style: { "margin-top": "15px" }
              }, {
                default: withCtx(() => [
                  createVNode(DynamicButton, {
                    fill: "outline",
                    icon: iconsContent.value.print,
                    iconSlot: "start",
                    "onClicked:btn": _cache[2] || (_cache[2] = ($event) => printSummary()),
                    name: "Print Surgical Notes Summary",
                    color: "secondary"
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

const InitialManagement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-094f43d7"]]);

const _hoisted_1 = { style: { "width": "88vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SurgicalNotes",
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
          title: "Past Medical History",
          icon: ""
        },
        {
          title: "Past Surgical History",
          icon: ""
        },
        {
          title: "Family History",
          icon: ""
        },
        {
          title: "Allergies",
          icon: ""
        },
        {
          title: "Social History",
          icon: ""
        },
        {
          title: "Gynecological History",
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
          title: "Working Differential Diagnosis",
          icon: ""
        },
        {
          title: "Investigations",
          icon: ""
        },
        {
          title: "Initial Management",
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
        case "Allergies":
          return "Allergies";
        case "Past Medical History":
          return "PastMedicalHistory";
        case "Past Surgical History":
          return "PastSurgicalHistory";
        case "Family History":
          return "FamilyHistory";
        case "Social History":
          return "SocialHistory";
        case "Gynecological History":
          return "GynecologicalHistory";
        case "Review of Systems":
          return "ReviewOfSystems";
        case "Physical Examination":
          return "PhysicalExamination";
        case "Working Differential Diagnosis":
          return "WorkingDifferentialDiagnosis";
        case "Investigations":
          return "Investigations";
        case "Initial Management":
          return "InitialManagement";
        case "Disability Assessment":
          return "DisabilityAssessment";
        case "Exposure Assessment":
          return "ExposureAssessment";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Airway Assessment":
                return "AirwayAssessment";
              case "Breathing Assessment":
                return "BreathingAssessment";
              case "Circulation Assessment":
                return "CirculationAssessment";
              case "Disability Assessment":
                return "DisabilityAssessment";
              case "Exposure Assessment":
                return "ExposureAssessment";
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
                showWizard.value ? (openBlock(), createBlock(_sfc_main$d, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Surgical Notes",
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
                      createVNode(_sfc_main$e, { ref: "breathingAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "BreathingAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(CirculationAssessment, { ref: "circulationAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "CirculationAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(DisabilityAssessment, { ref: "disabilityAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DisabilityAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ExposureAssessment, { ref: "exposureAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ExposureAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Allergies, { ref: "allergiesRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Allergies"]
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
                      createVNode(FamilyHistory, { ref: "familyHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "FamilyHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(SocialHistory, { ref: "socialHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "SocialHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(GynecologicalHistory, { ref: "gynecologicalHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "GynecologicalHistory"]
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
                      createVNode(WorkingDifferentialDiagnosis, { ref: "workingDifferentialDiagnosisRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "WorkingDifferentialDiagnosis"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Investigations, { ref: "investigationsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Investigations"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(InitialManagement, { ref: "initialManagementRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "InitialManagement"]
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
