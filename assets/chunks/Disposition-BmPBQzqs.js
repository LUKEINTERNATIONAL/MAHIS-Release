import { s as defineComponent, w as watch, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, C as createBaseVNode, af as IonRow, aA as IonCol, z as createElementBlock, H as createCommentVNode, bb as IonCardHeader, ba as IonCardTitle, a5 as createTextVNode, bd as IonCardContent, D as toDisplayString, N as IonButton, L as IonIcon, f as ref, c as computed, aG as IonContent, bu as IonPage } from './vendor-DpSS1aB1.js';
import { D as DemographicBar } from './DemographicBar-C6FKW6HF.js';
import { z as StandardForm, F as DynamicButton, C as useExposeFromStandardForm, n as icons, y as StandardValidations, _ as _export_sfc, u as useDemographicsStore, T as Toolbar } from '../index-CQm7NtNq.js';
import { G as GoBack } from './GoBack-p7gLL_QW.js';
import { s as storeToRefs } from './pinia-CbGjwPb6.js';

const _hoisted_1$7 = { class: "discharge-form" };
const _hoisted_2$7 = {
  key: 0,
  class: "followup-details"
};
const _hoisted_3$7 = {
  key: 1,
  class: "saved-discharge"
};
const _hoisted_4$7 = { class: "discharge-content" };
const _hoisted_5$6 = {
  key: 0,
  class: "summary-section"
};
const _hoisted_6$6 = { class: "detail-text" };
const _hoisted_7$6 = {
  key: 1,
  class: "summary-section"
};
const _hoisted_8$5 = { class: "detail-text" };
const _hoisted_9$5 = {
  key: 2,
  class: "summary-section"
};
const _hoisted_10$3 = { class: "detail-text" };
const _hoisted_11$3 = { class: "summary-section" };
const _hoisted_12$3 = { class: "detail-text" };
const _hoisted_13$3 = {
  key: 3,
  class: "summary-section followup-section"
};
const _hoisted_14$1 = { class: "followup-grid" };
const _hoisted_15$1 = {
  key: 0,
  class: "followup-item"
};
const _hoisted_16$1 = { class: "value" };
const _hoisted_17$1 = {
  key: 1,
  class: "followup-item"
};
const _hoisted_18$1 = { class: "value" };
const _hoisted_19$1 = {
  key: 2,
  class: "followup-item"
};
const _hoisted_20$1 = { class: "value" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DischargeHomeForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      DISCHARGE_HOME: "discharge_home",
      DISCHARGE_PLAN: "discharge_plan",
      FOLLOWUP_PLAN: "followup_plan",
      HOME_CARE_INSTRUCTIONS: "home_care_instructions",
      FOLLOWUP_DETAILS: "followup_details",
      DISCHARGE_NOTES: "discharge_notes",
      SPECIALIST_CLINIC: "specialist_clinic",
      YES: "yes",
      NO: "no"
    };
    const facilities = ref([
      { facility_name: "Central Hospital" },
      { facility_name: "District Health Center" },
      { facility_name: "Community Clinic" },
      { facility_name: "Regional Medical Center" }
    ]);
    const serviceAreas = ref([
      { id: "general", label: "General Medicine" },
      { id: "surgical", label: "Surgical Clinic" },
      { id: "pediatrics", label: "Pediatrics" },
      { id: "orthopedics", label: "Orthopedics" },
      { id: "cardiology", label: "Cardiology" },
      { id: "other", label: "Other" }
    ]);
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedDischarge = ref(false);
    const savedData = ref({
      dischargeNotes: "",
      dischargePlan: "",
      homeCareInstructions: "",
      followUpPlan: "",
      followUpDetails: "",
      specialistClinic: "",
      otherServiceArea: ""
    });
    const currentDischargeData = ref(null);
    const currentFollowUpData = ref(null);
    const currentFollowUpDetailsData = ref(null);
    const showFollowUpDetails = computed(() => {
      return currentFollowUpData.value?.followUpPlan === CONCEPTS.YES;
    });
    const dischargeInfoForm = computed(() => {
      const form = [
        {
          componentType: "Heading",
          name: "Discharge Information",
          position: "left"
        },
        {
          componentType: "textAreaField",
          header: "Discharge Notes",
          name: "dischargeNotes",
          placeholder: "Write discharge notes",
          // rows: 3,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Discharge Plan (apart from the medications)",
          name: "dischargePlan",
          placeholder: "Write the discharge plan",
          // rows: 3,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Home Care Instructions",
          name: "homeCareInstructions",
          placeholder: "Write specific home care instructions",
          // rows: 3,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const followUpForm = computed(() => {
      const form = [
        {
          componentType: "Heading",
          name: "Follow-Up Information",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Follow-Up Plan",
          name: "followUpPlan",
          type: "inline",
          options: [
            { value: CONCEPTS.YES, label: "Yes" },
            { value: CONCEPTS.NO, label: "No" }
          ],
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const followUpDetailsForm = computed(() => {
      const facilityOptions = facilities.value.map((f) => ({
        concept_id: f.facility_name,
        name: f.facility_name
      }));
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Follow-Up Facility",
          name: "followUpDetails",
          trackBy: "concept_id",
          hideSelected: true,
          placeholder: "Select follow-up facility",
          validation: (value) => StandardValidations.required(value),
          options: facilityOptions,
          grid: { s: "12" }
        },
        {
          componentType: "multiSelectInputField",
          header: "Clinics (If applicable)",
          name: "specialistClinic",
          trackBy: "id",
          hideSelected: true,
          placeholder: "Select clinic",
          options: serviceAreas.value,
          grid: { s: "12" }
        },
        {
          componentType: "inputField",
          header: "Other Service Area",
          name: "otherServiceArea",
          placeholder: "Specify other service area",
          validation: (value) => StandardValidations.required(value),
          condition: (data) => {
            return data?.specialistClinic?.id === "other";
          },
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef: dischargeFormRef } = useExposeFromStandardForm();
    const { formRef: followUpFormRef } = useExposeFromStandardForm();
    const { formRef: followUpDetailsFormRef } = useExposeFromStandardForm();
    watch(
      () => dischargeFormRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentDischargeData.value = newValues;
          showSaveButton.value = true;
        }
      },
      { deep: true }
    );
    watch(
      () => followUpFormRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFollowUpData.value = newValues;
        }
      },
      { deep: true }
    );
    watch(
      () => followUpDetailsFormRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          currentFollowUpDetailsData.value = newValues;
        }
      },
      { deep: true }
    );
    const getClinicLabel = (clinicId) => {
      const clinic = serviceAreas.value.find((sa) => sa.id === clinicId);
      return clinic?.label || clinicId;
    };
    const saveDischarge = () => {
      const dischargeValidate = dischargeFormRef.value?.validateForm();
      if (dischargeValidate != null) {
        alert("Please fill in all required discharge information fields");
        return;
      }
      const followUpValidate = followUpFormRef.value?.validateForm();
      if (followUpValidate != null) {
        alert("Please select a follow-up plan");
        return;
      }
      const dischargeData = dischargeFormRef.value?.getFormValues();
      const followUpData = followUpFormRef.value?.getFormValues();
      let followUpDetailsData = {};
      if (followUpData?.followUpPlan === CONCEPTS.YES) {
        const followUpDetailsValidate = followUpDetailsFormRef.value?.validateForm();
        if (followUpDetailsValidate != null) {
          alert("Please fill in all required follow-up details");
          return;
        }
        followUpDetailsData = followUpDetailsFormRef.value?.getFormValues();
      }
      savedData.value = {
        dischargeNotes: dischargeData?.dischargeNotes || "",
        dischargePlan: dischargeData?.dischargePlan || "",
        homeCareInstructions: dischargeData?.homeCareInstructions || "",
        followUpPlan: followUpData?.followUpPlan || "",
        followUpDetails: followUpDetailsData?.followUpDetails?.name || "",
        specialistClinic: followUpDetailsData?.specialistClinic?.id || "",
        otherServiceArea: followUpDetailsData?.otherServiceArea || ""
      };
      hasSavedDischarge.value = true;
      showSaveButton.value = false;
      console.log("Discharge home saved:", savedData.value);
    };
    const editDischarge = () => {
      dischargeFormRef.value?.resetForm();
      followUpFormRef.value?.resetForm();
      followUpDetailsFormRef.value?.resetForm();
      setTimeout(() => {
        if (dischargeFormRef.value) {
          currentDischargeData.value = {
            dischargeNotes: savedData.value.dischargeNotes,
            dischargePlan: savedData.value.dischargePlan,
            homeCareInstructions: savedData.value.homeCareInstructions
          };
        }
        if (followUpFormRef.value) {
          currentFollowUpData.value = {
            followUpPlan: savedData.value.followUpPlan
          };
        }
        if (savedData.value.followUpPlan === CONCEPTS.YES && followUpDetailsFormRef.value) {
          const facility = facilities.value.find((f) => f.facility_name === savedData.value.followUpDetails);
          const clinic = serviceAreas.value.find((sa) => sa.id === savedData.value.specialistClinic);
          currentFollowUpDetailsData.value = {
            followUpDetails: facility ? { concept_id: facility.facility_name, name: facility.facility_name } : null,
            specialistClinic: clinic || null,
            otherServiceArea: savedData.value.otherServiceArea
          };
        }
      }, 100);
      hasSavedDischarge.value = false;
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedDischarge.value) {
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const groupMembers = [
        {
          concept: CONCEPTS.DISCHARGE_PLAN,
          value: data.dischargePlan
        },
        {
          concept: CONCEPTS.FOLLOWUP_PLAN,
          value: data.followUpPlan
        },
        {
          concept: CONCEPTS.HOME_CARE_INSTRUCTIONS,
          value: data.homeCareInstructions
        },
        {
          concept: CONCEPTS.FOLLOWUP_DETAILS,
          value: data.followUpDetails
        },
        {
          concept: CONCEPTS.DISCHARGE_NOTES,
          value: data.dischargeNotes
        },
        {
          concept: CONCEPTS.SPECIALIST_CLINIC,
          value: data.specialistClinic === "other" ? data.otherServiceArea : data.specialistClinic
        }
      ];
      return {
        dischargeHome: data,
        obs: {
          concept: CONCEPTS.DISCHARGE_HOME,
          value: CONCEPTS.DISCHARGE_HOME,
          groupMembers
        }
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
              _cache[12] || (_cache[12] = createBaseVNode("h3", { class: "form-title" }, "Discharge Home", -1)),
              _cache[13] || (_cache[13] = createBaseVNode("p", { class: "subtitle" }, "Document discharge plan and follow-up arrangements", -1)),
              createBaseVNode("div", _hoisted_1$7, [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), {
                      size: "12",
                      "size-md": "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(StandardForm, {
                          formData: dischargeInfoForm.value,
                          ref_key: "dischargeFormRef",
                          ref: dischargeFormRef
                        }, null, 8, ["formData"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCol), {
                      size: "12",
                      "size-md": "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(StandardForm, {
                          formData: followUpForm.value,
                          ref_key: "followUpFormRef",
                          ref: followUpFormRef
                        }, null, 8, ["formData"]),
                        showFollowUpDetails.value ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
                          createVNode(StandardForm, {
                            formData: followUpDetailsForm.value,
                            ref_key: "followUpDetailsFormRef",
                            ref: followUpDetailsFormRef
                          }, null, 8, ["formData"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveDischarge()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedDischarge.value ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e8f5e9" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#2e7d32" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Discharge Home Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4$7, [
                          savedData.value.dischargeNotes ? (openBlock(), createElementBlock("div", _hoisted_5$6, [
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Discharge Notes:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_6$6, toDisplayString(savedData.value.dischargeNotes), 1)
                          ])) : createCommentVNode("", true),
                          savedData.value.dischargePlan ? (openBlock(), createElementBlock("div", _hoisted_7$6, [
                            _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Discharge Plan:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_8$5, toDisplayString(savedData.value.dischargePlan), 1)
                          ])) : createCommentVNode("", true),
                          savedData.value.homeCareInstructions ? (openBlock(), createElementBlock("div", _hoisted_9$5, [
                            _cache[5] || (_cache[5] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Home Care Instructions:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_10$3, toDisplayString(savedData.value.homeCareInstructions), 1)
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_11$3, [
                            _cache[6] || (_cache[6] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Follow-Up Plan:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_12$3, toDisplayString(savedData.value.followUpPlan === "yes" ? "Yes" : "No"), 1)
                          ]),
                          savedData.value.followUpPlan === "yes" ? (openBlock(), createElementBlock("div", _hoisted_13$3, [
                            _cache[10] || (_cache[10] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Follow-Up Arrangements:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_14$1, [
                              savedData.value.followUpDetails ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
                                _cache[7] || (_cache[7] = createBaseVNode("span", { class: "label" }, "Facility:", -1)),
                                createBaseVNode("span", _hoisted_16$1, toDisplayString(savedData.value.followUpDetails), 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.specialistClinic ? (openBlock(), createElementBlock("div", _hoisted_17$1, [
                                _cache[8] || (_cache[8] = createBaseVNode("span", { class: "label" }, "Clinic:", -1)),
                                createBaseVNode("span", _hoisted_18$1, toDisplayString(getClinicLabel(savedData.value.specialistClinic)), 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.otherServiceArea ? (openBlock(), createElementBlock("div", _hoisted_19$1, [
                                _cache[9] || (_cache[9] = createBaseVNode("span", { class: "label" }, "Other Service Area:", -1)),
                                createBaseVNode("span", _hoisted_20$1, toDisplayString(savedData.value.otherServiceArea), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editDischarge()),
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

const DischargeHomeForm = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3c64e621"]]);

const _hoisted_1$6 = { class: "admission-form" };
const _hoisted_2$6 = {
  key: 1,
  class: "saved-admission"
};
const _hoisted_3$6 = { class: "admission-content" };
const _hoisted_4$6 = { class: "summary-section" };
const _hoisted_5$5 = { class: "location-grid" };
const _hoisted_6$5 = { class: "location-item" };
const _hoisted_7$5 = { class: "value" };
const _hoisted_8$4 = {
  key: 0,
  class: "location-item"
};
const _hoisted_9$4 = { class: "value" };
const _hoisted_10$2 = { class: "summary-section" };
const _hoisted_11$2 = { class: "detail-text" };
const _hoisted_12$2 = { class: "summary-section" };
const _hoisted_13$2 = { class: "specialty-badge" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AdmissionForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      ADMISSION: "admission",
      WARD: "ward",
      BED_NUMBER: "bed_number",
      REASON_FOR_ADMISSION: "reason_for_admission",
      SPECIALITY_DEPARTMENT: "speciality_department",
      // Ward options
      ONE_A_LABOUR_WARD: "1a_labour_ward",
      MAIN_LABOUR_WARD: "main_labour_ward",
      ANTENATAL_WARD: "antenatal_ward",
      POST_NATAL_WARD: "post_natal_ward",
      GYNAECOLOGY_WARD_MAIN: "gynae_ward_main",
      THREE_B_MALE_MEDICAL: "3b_male_medical",
      THREE_B_HDU: "3b_hdu",
      MSF_WARD_GYNAECOLOGY: "msf_gynae",
      THREE_C_COMBINED_MALE_AND_FEMALE_MEDICAL: "3c_combined",
      SIX_A_ORTHOPAEDIC_MALE: "6a_ortho_male",
      TWO_A_ONCOLOGY_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "2a_oncology",
      TWO_B_RENAL_AND_DERMATOLOGY_WARD: "2b_renal_derm",
      SIX_A_FEMALE_ORTHOPAEDIC_WARD: "6a_female_ortho",
      FOUR_A_FEMALE_MEDICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "4a_female_medical",
      GYNECOLOGY_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "gynae_ward_hdu",
      LABOUR_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "labour_ward_hdu",
      THREE_B_FEMALE_MEDICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "3b_female_medical",
      THREE_A_TB_WARD: "3a_tb_ward",
      THREE_A_HDRU_HIGH_DEPENDENCY_RESPIRATORY_UNIT: "3a_hdru",
      FIVE_A_MALE_SURGICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "5a_male_surgical",
      FIVE_B_FEMALE_SURGICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "5b_female_surgical",
      FIVE_B_ORTHOPAEDIC_WARD: "5b_ortho",
      FIVE_B_NEUROSURGICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT: "5b_neurosurgical",
      INTENSIVE_CARE_UNIT_ICU: "icu",
      THEATRE: "theatre",
      ENT: "ent",
      OPHTHALMOLOGY: "ophthalmology",
      // Specialty options
      MEDICINE: "medicine",
      GENERAL_SURGERY: "general_surgery",
      ORTHOPEDICS: "orthopedics",
      NEUROSURGERY: "neurosurgery",
      EAR_NOSE_AND_THROAT_ENT: "ent_specialty",
      DENTAL_AND_MAXILLOFACIAL_SURGERY: "dental_maxillofacial",
      PSYCHIATRY: "psychiatry",
      GYNAECOLOGY_AND_OBSTETRICS: "gynae_obs",
      CRITICAL_CARE: "critical_care",
      ONCOLOGY: "oncology"
    };
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isPatientMale = computed(() => {
      return patient.value?.gender?.toLowerCase() === "male" || patient.value?.gender?.toLowerCase() === "m";
    });
    const allWardOptions = ref([
      { concept_id: CONCEPTS.ONE_A_LABOUR_WARD, name: "1A Labour ward", femaleOnly: false },
      { concept_id: CONCEPTS.MAIN_LABOUR_WARD, name: "Main Labour ward", femaleOnly: false },
      { concept_id: CONCEPTS.ANTENATAL_WARD, name: "Antenatal ward", femaleOnly: false },
      { concept_id: CONCEPTS.POST_NATAL_WARD, name: "Post natal ward", femaleOnly: false },
      { concept_id: CONCEPTS.GYNAECOLOGY_WARD_MAIN, name: "Gynaecology ward- Main", femaleOnly: false },
      { concept_id: CONCEPTS.THREE_B_MALE_MEDICAL, name: "3B Male medical", femaleOnly: false },
      { concept_id: CONCEPTS.THREE_B_HDU, name: "3B High Dependency Unit", femaleOnly: false },
      { concept_id: CONCEPTS.MSF_WARD_GYNAECOLOGY, name: "MSF ward - Gynaecology", femaleOnly: false },
      { concept_id: CONCEPTS.THREE_C_COMBINED_MALE_AND_FEMALE_MEDICAL, name: "3C Combined male and female medical", femaleOnly: false },
      { concept_id: CONCEPTS.SIX_A_ORTHOPAEDIC_MALE, name: "6A Orthopaedic male", femaleOnly: false },
      {
        concept_id: CONCEPTS.TWO_A_ONCOLOGY_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT,
        name: "2A Oncology Ward (General ward/High Dependency Unit)",
        femaleOnly: false
      },
      { concept_id: CONCEPTS.TWO_B_RENAL_AND_DERMATOLOGY_WARD, name: "2B Renal and Dermatology Ward", femaleOnly: false },
      { concept_id: CONCEPTS.SIX_A_FEMALE_ORTHOPAEDIC_WARD, name: "6A Female Orthopaedic Ward", femaleOnly: true },
      {
        concept_id: CONCEPTS.FOUR_A_FEMALE_MEDICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT,
        name: "4A Female Medical Ward (General ward/High Dependency Unit)",
        femaleOnly: true
      },
      {
        concept_id: CONCEPTS.GYNECOLOGY_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT,
        name: "Gynecology Ward (General ward/High Dependency Unit)",
        femaleOnly: true
      },
      { concept_id: CONCEPTS.LABOUR_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT, name: "Labour Ward (General ward/High Dependency Unit)", femaleOnly: true },
      {
        concept_id: CONCEPTS.THREE_B_FEMALE_MEDICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT,
        name: "3B Female Medical Ward (General ward/High Dependency Unit)",
        femaleOnly: true
      },
      { concept_id: CONCEPTS.THREE_A_TB_WARD, name: "3A TB Ward", femaleOnly: false },
      { concept_id: CONCEPTS.THREE_A_HDRU_HIGH_DEPENDENCY_RESPIRATORY_UNIT, name: "3A HDRU (High Dependency Respiratory Unit)", femaleOnly: false },
      {
        concept_id: CONCEPTS.FIVE_A_MALE_SURGICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT,
        name: "5A Male Surgical Ward (General ward/High Dependency Unit)",
        femaleOnly: false
      },
      {
        concept_id: CONCEPTS.FIVE_B_FEMALE_SURGICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT,
        name: "5B Female Surgical Ward (General ward/High Dependency Unit)",
        femaleOnly: true
      },
      { concept_id: CONCEPTS.FIVE_B_ORTHOPAEDIC_WARD, name: "5B Orthopaedic Ward", femaleOnly: false },
      {
        concept_id: CONCEPTS.FIVE_B_NEUROSURGICAL_WARD_GENERAL_WARD_HIGH_DEPENDENCY_UNIT,
        name: "5B Neurosurgical Ward (General ward/High Dependency Unit)",
        femaleOnly: false
      },
      { concept_id: CONCEPTS.INTENSIVE_CARE_UNIT_ICU, name: "Intensive Care Unit (ICU)", femaleOnly: false },
      { concept_id: CONCEPTS.THEATRE, name: "Theatre", femaleOnly: false },
      { concept_id: CONCEPTS.ENT, name: "ENT", femaleOnly: false },
      { concept_id: CONCEPTS.OPHTHALMOLOGY, name: "Ophthalmology", femaleOnly: false }
    ]);
    const wardOptions = computed(() => {
      if (isPatientMale.value) {
        return allWardOptions.value.filter((ward) => !ward.femaleOnly);
      }
      return allWardOptions.value;
    });
    const specialtyOptions = ref([
      { concept_id: CONCEPTS.MEDICINE, name: "Medicine" },
      { concept_id: CONCEPTS.GENERAL_SURGERY, name: "General Surgery" },
      { concept_id: CONCEPTS.ORTHOPEDICS, name: "Orthopedics" },
      { concept_id: CONCEPTS.NEUROSURGERY, name: "Neurosurgery" },
      { concept_id: CONCEPTS.EAR_NOSE_AND_THROAT_ENT, name: "Ear, Nose, and Throat (ENT)" },
      { concept_id: CONCEPTS.DENTAL_AND_MAXILLOFACIAL_SURGERY, name: "Dental and Maxillofacial Surgery" },
      { concept_id: CONCEPTS.OPHTHALMOLOGY, name: "Ophthalmology" },
      { concept_id: CONCEPTS.PSYCHIATRY, name: "Psychiatry" },
      { concept_id: CONCEPTS.GYNAECOLOGY_AND_OBSTETRICS, name: "Gynecology and Obstetrics" },
      { concept_id: CONCEPTS.CRITICAL_CARE, name: "Critical Care" },
      { concept_id: CONCEPTS.ONCOLOGY, name: "Oncology" }
    ]);
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedAdmission = ref(false);
    const savedData = ref({
      wardName: "",
      bedNumber: "",
      reasonForAdmission: "",
      specialtyInvolved: ""
    });
    const currentFormData = ref(null);
    const admissionFormConfig = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Ward Name",
          name: "wardName",
          trackBy: "concept_id",
          hideSelected: true,
          placeholder: "Select ward",
          validation: (value) => StandardValidations.required(value),
          options: wardOptions.value,
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Bed Number",
          name: "bedNumber",
          placeholder: "Enter bed number",
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "textAreaField",
          header: "Reason for Admission",
          name: "reasonForAdmission",
          placeholder: "Provide reason for admission",
          // rows: 4,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "multiSelectInputField",
          header: "Specialty Involved",
          name: "specialtyInvolved",
          trackBy: "concept_id",
          hideSelected: true,
          placeholder: "Select specialty",
          validation: (value) => StandardValidations.required(value),
          options: specialtyOptions.value,
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
          if (newValues.wardName || newValues.reasonForAdmission || newValues.specialtyInvolved) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const getWardLabel = (wardId) => {
      const ward = allWardOptions.value.find((w) => w.concept_id === wardId);
      return ward?.name || wardId;
    };
    const getSpecialtyLabel = (specialtyId) => {
      const specialty = specialtyOptions.value.find((s) => s.concept_id === specialtyId);
      return specialty?.name || specialtyId;
    };
    const saveAdmission = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        alert("Please fill in all required fields");
        return;
      }
      if (!data.wardName || !data.reasonForAdmission || !data.specialtyInvolved) {
        alert("Please fill in Ward Name, Reason for Admission, and Specialty");
        return;
      }
      savedData.value = {
        wardName: data.wardName.concept_id,
        bedNumber: data.bedNumber || "",
        reasonForAdmission: data.reasonForAdmission,
        specialtyInvolved: data.specialtyInvolved.concept_id
      };
      hasSavedAdmission.value = true;
      showSaveButton.value = false;
      console.log("Admission saved:", savedData.value);
    };
    const editAdmission = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          const ward = allWardOptions.value.find((w) => w.concept_id === savedData.value.wardName);
          const specialty = specialtyOptions.value.find((s) => s.concept_id === savedData.value.specialtyInvolved);
          currentFormData.value = {
            wardName: ward || null,
            bedNumber: savedData.value.bedNumber,
            reasonForAdmission: savedData.value.reasonForAdmission,
            specialtyInvolved: specialty || null
          };
        }
      }, 100);
      hasSavedAdmission.value = false;
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedAdmission.value) {
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: CONCEPTS.ADMISSION,
          value: CONCEPTS.ADMISSION,
          groupMembers: [
            {
              concept: CONCEPTS.WARD,
              value: data.wardName
            },
            {
              concept: CONCEPTS.BED_NUMBER,
              value: data.bedNumber
            },
            {
              concept: CONCEPTS.REASON_FOR_ADMISSION,
              value: data.reasonForAdmission
            },
            {
              concept: CONCEPTS.SPECIALITY_DEPARTMENT,
              value: data.specialtyInvolved
            }
          ]
        }
      ];
      return {
        admission: data,
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
              _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "form-title" }, "Admission", -1)),
              _cache[10] || (_cache[10] = createBaseVNode("p", { class: "subtitle" }, "Admit patient to inpatient ward", -1)),
              createBaseVNode("div", _hoisted_1$6, [
                createVNode(StandardForm, {
                  formData: admissionFormConfig.value,
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
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveAdmission()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedAdmission.value ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e3f2fd" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#1565c0" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Admission Summary ", -1)
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
                            _cache[5] || (_cache[5] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Ward Location:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_5$5, [
                              createBaseVNode("div", _hoisted_6$5, [
                                _cache[3] || (_cache[3] = createBaseVNode("span", { class: "label" }, "Ward:", -1)),
                                createBaseVNode("span", _hoisted_7$5, toDisplayString(getWardLabel(savedData.value.wardName)), 1)
                              ]),
                              savedData.value.bedNumber ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
                                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "label" }, "Bed:", -1)),
                                createBaseVNode("span", _hoisted_9$4, toDisplayString(savedData.value.bedNumber), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_10$2, [
                            _cache[6] || (_cache[6] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Reason for Admission:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_11$2, toDisplayString(savedData.value.reasonForAdmission), 1)
                          ]),
                          createBaseVNode("div", _hoisted_12$2, [
                            _cache[7] || (_cache[7] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Specialty Department:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_13$2, toDisplayString(getSpecialtyLabel(savedData.value.specialtyInvolved)), 1)
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editAdmission()),
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

const AdmissionForm = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bd9949b0"]]);

const _hoisted_1$5 = { class: "review-form" };
const _hoisted_2$5 = {
  key: 1,
  class: "saved-review"
};
const _hoisted_3$5 = { class: "review-content" };
const _hoisted_4$5 = { class: "summary-section" };
const _hoisted_5$4 = { class: "specialty-badge" };
const _hoisted_6$4 = { class: "summary-section" };
const _hoisted_7$4 = { class: "detail-text" };
const _hoisted_8$3 = { class: "summary-section" };
const _hoisted_9$3 = { class: "date-display" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AwaitingSpecialtyForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      AWAITING_SPECIALITY_REVIEW: "awaiting_speciality_review",
      SPECIALITY_DEPARTMENT: "speciality_department",
      REASON_FOR_REQUEST: "reason_for_request",
      DATE: "date",
      // Specialty options
      MEDICINE: "medicine",
      GENERAL_SURGERY: "general_surgery",
      ORTHOPEDICS: "orthopedics",
      NEUROSURGERY: "neurosurgery",
      EAR_NOSE_AND_THROAT_ENT: "ent_specialty",
      DENTAL_AND_MAXILLOFACIAL_SURGERY: "dental_maxillofacial",
      OPHTHALMOLOGY: "ophthalmology",
      PSYCHIATRY: "psychiatry",
      GYNAECOLOGY_AND_OBSTETRICS: "gynae_obs",
      CRITICAL_CARE: "critical_care",
      ONCOLOGY: "oncology"
    };
    const specialtyOptions = ref([
      { concept_id: CONCEPTS.MEDICINE, name: "Medicine" },
      { concept_id: CONCEPTS.GENERAL_SURGERY, name: "General Surgery" },
      { concept_id: CONCEPTS.ORTHOPEDICS, name: "Orthopedics" },
      { concept_id: CONCEPTS.NEUROSURGERY, name: "Neurosurgery" },
      { concept_id: CONCEPTS.EAR_NOSE_AND_THROAT_ENT, name: "Ear, Nose, and Throat (ENT)" },
      { concept_id: CONCEPTS.DENTAL_AND_MAXILLOFACIAL_SURGERY, name: "Dental and Maxillofacial Surgery" },
      { concept_id: CONCEPTS.OPHTHALMOLOGY, name: "Ophthalmology" },
      { concept_id: CONCEPTS.PSYCHIATRY, name: "Psychiatry" },
      { concept_id: CONCEPTS.GYNAECOLOGY_AND_OBSTETRICS, name: "Gynecology and Obstetrics" },
      { concept_id: CONCEPTS.CRITICAL_CARE, name: "Critical Care" },
      { concept_id: CONCEPTS.ONCOLOGY, name: "Oncology" }
    ]);
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedReview = ref(false);
    const savedData = ref({
      specialtyDepartment: "",
      reasonForReview: "",
      reviewDate: ""
    });
    const currentFormData = ref(null);
    const reviewFormConfig = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Specialty Department",
          name: "specialtyDepartment",
          trackBy: "concept_id",
          hideSelected: true,
          placeholder: "Select specialty department",
          validation: (value) => StandardValidations.required(value),
          options: specialtyOptions.value,
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Reason for Review",
          name: "reasonForReview",
          placeholder: "Provide reason for review",
          // rows: 4,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "dateInputField",
          header: "Date Scheduled for Review",
          name: "reviewDate",
          placeholder: "Select review date",
          validation: (value) => StandardValidations.required(value),
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
          if (newValues.specialtyDepartment || newValues.reasonForReview || newValues.reviewDate) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const getSpecialtyLabel = (specialtyId) => {
      const specialty = specialtyOptions.value.find((s) => s.concept_id === specialtyId);
      return specialty?.name || specialtyId;
    };
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const saveReview = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        alert("Please fill in all required fields");
        return;
      }
      if (!data.specialtyDepartment || !data.reasonForReview || !data.reviewDate) {
        alert("Please fill in all required fields: Specialty Department, Reason for Review, and Review Date");
        return;
      }
      savedData.value = {
        specialtyDepartment: data.specialtyDepartment.concept_id,
        reasonForReview: data.reasonForReview,
        reviewDate: data.reviewDate
      };
      hasSavedReview.value = true;
      showSaveButton.value = false;
      console.log("Awaiting specialty review saved:", savedData.value);
    };
    const editReview = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          const specialty = specialtyOptions.value.find(
            (s) => s.concept_id === savedData.value.specialtyDepartment
          );
          currentFormData.value = {
            specialtyDepartment: specialty || null,
            reasonForReview: savedData.value.reasonForReview,
            reviewDate: savedData.value.reviewDate
          };
        }
      }, 100);
      hasSavedReview.value = false;
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedReview.value) {
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: CONCEPTS.AWAITING_SPECIALITY_REVIEW,
          value: CONCEPTS.AWAITING_SPECIALITY_REVIEW,
          groupMembers: [
            {
              concept: CONCEPTS.SPECIALITY_DEPARTMENT,
              value: data.specialtyDepartment
            },
            {
              concept: CONCEPTS.REASON_FOR_REQUEST,
              value: data.reasonForReview
            },
            {
              concept: CONCEPTS.DATE,
              value: data.reviewDate
            }
          ]
        }
      ];
      return {
        awaitingSpecialtyReview: data,
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
              _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "form-title" }, "Awaiting Specialty Review", -1)),
              _cache[8] || (_cache[8] = createBaseVNode("p", { class: "subtitle" }, "Request consultation from specialty department", -1)),
              createBaseVNode("div", _hoisted_1$5, [
                createVNode(StandardForm, {
                  formData: reviewFormConfig.value,
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
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveReview()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedReview.value ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#fff3e0" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#e65100" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Specialty Review Request Summary ", -1)
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
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Specialty Department:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_5$4, toDisplayString(getSpecialtyLabel(savedData.value.specialtyDepartment)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_6$4, [
                            _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Reason for Review:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_7$4, toDisplayString(savedData.value.reasonForReview), 1)
                          ]),
                          createBaseVNode("div", _hoisted_8$3, [
                            _cache[5] || (_cache[5] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Date Scheduled for Review:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_9$3, [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.calendar,
                                style: { "margin-right": "8px" }
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(formatDate(savedData.value.reviewDate)), 1)
                            ])
                          ]),
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

const AwaitingSpecialtyForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c8df97b8"]]);

const _hoisted_1$4 = { class: "death-form" };
const _hoisted_2$4 = {
  key: 1,
  class: "saved-death-form"
};
const _hoisted_3$4 = { class: "death-content" };
const _hoisted_4$4 = { class: "summary-section" };
const _hoisted_5$3 = { class: "detail-text" };
const _hoisted_6$3 = { class: "summary-section" };
const _hoisted_7$3 = { class: "info-grid" };
const _hoisted_8$2 = { class: "info-item" };
const _hoisted_9$2 = { class: "value" };
const _hoisted_10$1 = {
  key: 0,
  class: "info-item"
};
const _hoisted_11$1 = { class: "value" };
const _hoisted_12$1 = { class: "summary-section" };
const _hoisted_13$1 = { class: "mortuary-badge" };
const _hoisted_14 = { class: "summary-section" };
const _hoisted_15 = { class: "info-grid" };
const _hoisted_16 = { class: "info-item" };
const _hoisted_17 = { class: "value" };
const _hoisted_18 = {
  key: 0,
  class: "info-item"
};
const _hoisted_19 = { class: "value" };
const _hoisted_20 = {
  key: 1,
  class: "info-item"
};
const _hoisted_21 = { class: "value" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DeathForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      DEATH: "death",
      CAUSE_OF_DEATH: "cause_of_death",
      FAMILY_INFORMED: "family_informed",
      RELATIONSHIP_TO_DECEASED: "relationship_to_deceased",
      MORTUARY: "mortuary",
      LAST_OFFICE_CONDUCTED: "last_office_conducted",
      NAME_OF_HEALTH_WORKER_WHO_CONDUCTED_LAST_OFFICE: "health_worker_name",
      DATE_OF_LAST_OFFICE: "date_of_last_office",
      YES: "yes",
      NO: "no",
      // Mortuary options
      QECH: "qech",
      COM: "com",
      MTHUNZI: "mthunzi",
      OTHER: "other",
      // Relationship options
      RELATIONSHIP_SPOUSE: "spouse",
      RELATIONSHIP_PARENT: "parent",
      RELATIONSHIP_SIBLING: "sibling",
      RELATIONSHIP_UNCLE: "uncle",
      RELATIONSHIP_COUSIN: "cousin",
      RELATIONSHIP_OTHER: "other_relationship"
    };
    const mortuaryOptions = ref([
      { concept_id: CONCEPTS.QECH, name: "QECH" },
      { concept_id: CONCEPTS.COM, name: "COM" },
      { concept_id: CONCEPTS.MTHUNZI, name: "Mthunzi" },
      { concept_id: CONCEPTS.OTHER, name: "Other (Specify)" }
    ]);
    const relationshipOptions = ref([
      { concept_id: CONCEPTS.RELATIONSHIP_SPOUSE, name: "Spouse" },
      { concept_id: CONCEPTS.RELATIONSHIP_PARENT, name: "Parent" },
      { concept_id: CONCEPTS.RELATIONSHIP_SIBLING, name: "Sibling" },
      { concept_id: CONCEPTS.RELATIONSHIP_UNCLE, name: "Uncle" },
      { concept_id: CONCEPTS.RELATIONSHIP_COUSIN, name: "Cousin" },
      { concept_id: CONCEPTS.RELATIONSHIP_OTHER, name: "Other" }
    ]);
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedDeathForm = ref(false);
    const savedData = ref({
      causeOfDeath: "",
      familyInformed: "",
      relationshipToDeceased: "",
      mortuary: "",
      lastOfficeConducted: "",
      healthWorkerName: "",
      lastOfficeDate: ""
    });
    const currentFormData = ref(null);
    const deathFormConfig = computed(() => {
      const form = [
        {
          componentType: "Heading",
          name: "Death Information",
          position: "left"
        },
        {
          componentType: "textAreaField",
          header: "Cause of Death",
          name: "causeOfDeath",
          placeholder: "Enter the cause of death",
          // rows: 4,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "Heading",
          name: "Family Notification",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Has the family been informed?",
          name: "familyInformed",
          type: "inline",
          options: [
            { value: CONCEPTS.YES, label: "Yes" },
            { value: CONCEPTS.NO, label: "No" }
          ],
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "multiSelectInputField",
          header: "If yes, relationship to deceased",
          name: "relationshipToDeceased",
          trackBy: "concept_id",
          hideSelected: true,
          placeholder: "Select relationship",
          validation: (value) => StandardValidations.required(value),
          options: relationshipOptions.value,
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "Heading",
          name: "Mortuary Arrangements",
          position: "left"
        },
        {
          componentType: "multiSelectInputField",
          header: "Mortuary to take the deceased",
          name: "mortuary",
          trackBy: "concept_id",
          hideSelected: true,
          placeholder: "Select mortuary",
          validation: (value) => StandardValidations.required(value),
          options: mortuaryOptions.value,
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "Heading",
          name: "Last Office Procedures",
          position: "left"
        },
        {
          componentType: "radioButtonField",
          header: "Was the last office conducted?",
          name: "lastOfficeConducted",
          type: "inline",
          options: [
            { value: CONCEPTS.YES, label: "Yes" },
            { value: CONCEPTS.NO, label: "No" }
          ],
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Name of Health Worker who conducted the last office",
          name: "healthWorkerName",
          placeholder: "Enter health worker's name",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "dateInputField",
          header: "Date of Last Office",
          name: "lastOfficeDate",
          placeholder: "Select date",
          validation: (value) => StandardValidations.required(value),
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
          if (newValues.causeOfDeath || newValues.familyInformed) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const getMortuaryLabel = (mortuaryId) => {
      const mortuary = mortuaryOptions.value.find((m) => m.concept_id === mortuaryId);
      return mortuary?.name || mortuaryId;
    };
    const getRelationshipLabel = (relationshipId) => {
      const relationship = relationshipOptions.value.find((r) => r.concept_id === relationshipId);
      return relationship?.name || relationshipId;
    };
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const saveDeathForm = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        alert("Please fill in all required fields");
        return;
      }
      if (!data.causeOfDeath || !data.familyInformed || !data.relationshipToDeceased || !data.mortuary || !data.lastOfficeConducted || !data.healthWorkerName || !data.lastOfficeDate) {
        alert("Please fill in all required fields");
        return;
      }
      savedData.value = {
        causeOfDeath: data.causeOfDeath,
        familyInformed: data.familyInformed,
        relationshipToDeceased: data.relationshipToDeceased.concept_id,
        mortuary: data.mortuary.concept_id,
        lastOfficeConducted: data.lastOfficeConducted,
        healthWorkerName: data.healthWorkerName,
        lastOfficeDate: data.lastOfficeDate
      };
      hasSavedDeathForm.value = true;
      showSaveButton.value = false;
      console.log("Death form saved:", savedData.value);
    };
    const editDeathForm = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          const relationship = relationshipOptions.value.find((r) => r.concept_id === savedData.value.relationshipToDeceased);
          const mortuary = mortuaryOptions.value.find((m) => m.concept_id === savedData.value.mortuary);
          currentFormData.value = {
            causeOfDeath: savedData.value.causeOfDeath,
            familyInformed: savedData.value.familyInformed,
            relationshipToDeceased: relationship || null,
            mortuary: mortuary || null,
            lastOfficeConducted: savedData.value.lastOfficeConducted,
            healthWorkerName: savedData.value.healthWorkerName,
            lastOfficeDate: savedData.value.lastOfficeDate
          };
        }
      }, 100);
      hasSavedDeathForm.value = false;
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedDeathForm.value) {
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: CONCEPTS.DEATH,
          value: CONCEPTS.DEATH,
          groupMembers: [
            {
              concept: CONCEPTS.CAUSE_OF_DEATH,
              value: data.causeOfDeath
            },
            {
              concept: CONCEPTS.FAMILY_INFORMED,
              value: data.familyInformed
            },
            {
              concept: CONCEPTS.RELATIONSHIP_TO_DECEASED,
              value: data.relationshipToDeceased
            },
            {
              concept: CONCEPTS.MORTUARY,
              value: data.mortuary
            },
            {
              concept: CONCEPTS.LAST_OFFICE_CONDUCTED,
              value: data.lastOfficeConducted
            },
            {
              concept: CONCEPTS.NAME_OF_HEALTH_WORKER_WHO_CONDUCTED_LAST_OFFICE,
              value: data.healthWorkerName
            },
            {
              concept: CONCEPTS.DATE_OF_LAST_OFFICE,
              value: data.lastOfficeDate
            }
          ]
        }
      ];
      return {
        death: data,
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
              _cache[13] || (_cache[13] = createBaseVNode("h3", { class: "form-title" }, "Death Form", -1)),
              _cache[14] || (_cache[14] = createBaseVNode("p", { class: "subtitle" }, "Document patient death and final arrangements", -1)),
              createBaseVNode("div", _hoisted_1$4, [
                createVNode(StandardForm, {
                  formData: deathFormConfig.value,
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
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveDeathForm()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedDeathForm.value ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#fce4ec" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#c62828" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Death Form Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$4, [
                          createBaseVNode("div", _hoisted_4$4, [
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Cause of Death:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_5$3, toDisplayString(savedData.value.causeOfDeath), 1)
                          ]),
                          createBaseVNode("div", _hoisted_6$3, [
                            _cache[6] || (_cache[6] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Family Notification:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_7$3, [
                              createBaseVNode("div", _hoisted_8$2, [
                                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "label" }, "Family Informed:", -1)),
                                createBaseVNode("span", _hoisted_9$2, toDisplayString(savedData.value.familyInformed === "yes" ? "Yes" : "No"), 1)
                              ]),
                              savedData.value.relationshipToDeceased ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                                _cache[5] || (_cache[5] = createBaseVNode("span", { class: "label" }, "Relationship:", -1)),
                                createBaseVNode("span", _hoisted_11$1, toDisplayString(getRelationshipLabel(savedData.value.relationshipToDeceased)), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_12$1, [
                            _cache[7] || (_cache[7] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Mortuary Arrangements:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_13$1, toDisplayString(getMortuaryLabel(savedData.value.mortuary)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_14, [
                            _cache[11] || (_cache[11] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Last Office Details:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_15, [
                              createBaseVNode("div", _hoisted_16, [
                                _cache[8] || (_cache[8] = createBaseVNode("span", { class: "label" }, "Last Office Conducted:", -1)),
                                createBaseVNode("span", _hoisted_17, toDisplayString(savedData.value.lastOfficeConducted === "yes" ? "Yes" : "No"), 1)
                              ]),
                              savedData.value.healthWorkerName ? (openBlock(), createElementBlock("div", _hoisted_18, [
                                _cache[9] || (_cache[9] = createBaseVNode("span", { class: "label" }, "Conducted By:", -1)),
                                createBaseVNode("span", _hoisted_19, toDisplayString(savedData.value.healthWorkerName), 1)
                              ])) : createCommentVNode("", true),
                              savedData.value.lastOfficeDate ? (openBlock(), createElementBlock("div", _hoisted_20, [
                                _cache[10] || (_cache[10] = createBaseVNode("span", { class: "label" }, "Date:", -1)),
                                createBaseVNode("span", _hoisted_21, toDisplayString(formatDate(savedData.value.lastOfficeDate)), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editDeathForm()),
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.editPen,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[12] || (_cache[12] = createTextVNode(" Edit ", -1))
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

const DeathForm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c2d2261e"]]);

const _hoisted_1$3 = { class: "absconded-form" };
const _hoisted_2$3 = {
  key: 1,
  class: "saved-absconded"
};
const _hoisted_3$3 = { class: "absconded-content" };
const _hoisted_4$3 = { class: "summary-section" };
const _hoisted_5$2 = { class: "location-display" };
const _hoisted_6$2 = { class: "summary-section" };
const _hoisted_7$2 = { class: "datetime-grid" };
const _hoisted_8$1 = { class: "datetime-item" };
const _hoisted_9$1 = { class: "datetime-item" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AbscondedForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      ABSCONDED: "absconded",
      LAST_SEEN_LOCATION: "last_seen_location",
      DATE_OF_ABSCONDING: "date_of_absconding",
      TIME_OF_ABSCONDING: "time_of_absconding"
    };
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedAbsconded = ref(false);
    const savedData = ref({
      lastSeenLocation: "",
      dateAbsconded: "",
      timeAbsconded: ""
    });
    const currentFormData = ref(null);
    const abscondedFormConfig = computed(() => {
      const form = [
        {
          componentType: "inputField",
          header: "Last Seen Location",
          name: "lastSeenLocation",
          placeholder: "Enter the last known location (e.g., Ward 3B, Emergency Room, Corridor)",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "dateInputField",
          header: "Date of Absconding",
          name: "dateAbsconded",
          placeholder: "Select date",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "timeInputField",
          header: "Time of Absconding",
          name: "timeAbsconded",
          placeholder: "Select time",
          validation: (value) => StandardValidations.required(value),
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
          if (newValues.lastSeenLocation || newValues.dateAbsconded || newValues.timeAbsconded) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const saveAbsconded = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        alert("Please fill in all required fields");
        return;
      }
      if (!data.lastSeenLocation || !data.dateAbsconded || !data.timeAbsconded) {
        alert("Please fill in all required fields: Last Seen Location, Date, and Time");
        return;
      }
      savedData.value = {
        lastSeenLocation: data.lastSeenLocation,
        dateAbsconded: data.dateAbsconded,
        timeAbsconded: data.timeAbsconded
      };
      hasSavedAbsconded.value = true;
      showSaveButton.value = false;
      console.log("Absconded form saved:", savedData.value);
    };
    const editAbsconded = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          currentFormData.value = {
            lastSeenLocation: savedData.value.lastSeenLocation,
            dateAbsconded: savedData.value.dateAbsconded,
            timeAbsconded: savedData.value.timeAbsconded
          };
        }
      }, 100);
      hasSavedAbsconded.value = false;
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedAbsconded.value) {
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: CONCEPTS.ABSCONDED,
          value: CONCEPTS.ABSCONDED,
          groupMembers: [
            {
              concept: CONCEPTS.LAST_SEEN_LOCATION,
              value: data.lastSeenLocation
            },
            {
              concept: CONCEPTS.DATE_OF_ABSCONDING,
              value: data.dateAbsconded
            },
            {
              concept: CONCEPTS.TIME_OF_ABSCONDING,
              value: data.timeAbsconded
            }
          ]
        }
      ];
      return {
        absconded: data,
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
              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "form-title" }, "Absconded Form", -1)),
              _cache[7] || (_cache[7] = createBaseVNode("p", { class: "subtitle" }, "Document patient leaving without proper discharge", -1)),
              createBaseVNode("div", _hoisted_1$3, [
                createVNode(StandardForm, {
                  formData: abscondedFormConfig.value,
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
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveAbsconded()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedAbsconded.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#fff8e1" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#f57f17" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Absconded Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$3, [
                          createBaseVNode("div", _hoisted_4$3, [
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Last Seen Location:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_5$2, [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.location,
                                style: { "margin-right": "8px", "color": "#f57f17" }
                              }, null, 8, ["icon"]),
                              createBaseVNode("span", null, toDisplayString(savedData.value.lastSeenLocation), 1)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_6$2, [
                            _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Date and Time of Absconding:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_7$2, [
                              createBaseVNode("div", _hoisted_8$1, [
                                createVNode(unref(IonIcon), {
                                  icon: iconsContent.value.calendar,
                                  style: { "margin-right": "8px" }
                                }, null, 8, ["icon"]),
                                createBaseVNode("span", null, toDisplayString(formatDate(savedData.value.dateAbsconded)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_9$1, [
                                createVNode(unref(IonIcon), {
                                  icon: iconsContent.value.time,
                                  style: { "margin-right": "8px" }
                                }, null, 8, ["icon"]),
                                createBaseVNode("span", null, toDisplayString(savedData.value.timeAbsconded), 1)
                              ])
                            ])
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editAbsconded()),
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

const AbscondedForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cd142307"]]);

const _hoisted_1$2 = { class: "refused-form" };
const _hoisted_2$2 = {
  key: 1,
  class: "saved-refusal"
};
const _hoisted_3$2 = { class: "refused-content" };
const _hoisted_4$2 = { class: "summary-section" };
const _hoisted_5$1 = { class: "detail-text" };
const _hoisted_6$1 = { class: "summary-section" };
const _hoisted_7$1 = { class: "info-grid" };
const _hoisted_8 = { class: "info-item" };
const _hoisted_9 = { class: "value" };
const _hoisted_10 = { class: "summary-section" };
const _hoisted_11 = { class: "date-display" };
const _hoisted_12 = { class: "summary-section" };
const _hoisted_13 = { class: "detail-text" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RefusedTreatmentForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      REFUSED_HOSPITAL_TREATMENT: "refused_hospital_treatment",
      REASON_FOR_REFUSAL: "reason_for_refusal",
      PLANS_TO_RETURN: "plans_to_return",
      DATE_OF_REFUSAL: "date_of_refusal",
      WITNESS_NAME: "witness_name",
      YES: "yes",
      NO: "no"
    };
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedRefusal = ref(false);
    const savedData = ref({
      reasonForRefusal: "",
      plansToReturn: "",
      dateOfRefusal: "",
      witnessName: ""
    });
    const currentFormData = ref(null);
    const refusedFormConfig = computed(() => {
      const form = [
        {
          componentType: "textAreaField",
          header: "Reason for Refusal",
          name: "reasonForRefusal",
          placeholder: "Enter the reason for refusal",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "radioButtonField",
          header: "Plans to Return for Treatment",
          name: "plansToReturn",
          type: "inline",
          options: [
            { value: CONCEPTS.YES, label: "Yes" },
            { value: CONCEPTS.NO, label: "No" }
          ],
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "dateInputField",
          header: "Date of Refusal",
          name: "dateOfRefusal",
          placeholder: "Select date",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12", m: "6" }
        },
        {
          componentType: "inputField",
          header: "Witness Name",
          name: "witnessName",
          placeholder: "Enter name of witness",
          validation: (value) => StandardValidations.required(value),
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
          if (newValues.reasonForRefusal || newValues.plansToReturn || newValues.dateOfRefusal || newValues.witnessName) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const saveRefusal = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        alert("Please fill in all required fields");
        return;
      }
      if (!data.reasonForRefusal || !data.plansToReturn || !data.dateOfRefusal || !data.witnessName) {
        alert("Please fill in all required fields: Reason, Plans to Return, Date, and Witness Name");
        return;
      }
      savedData.value = {
        reasonForRefusal: data.reasonForRefusal,
        plansToReturn: data.plansToReturn,
        dateOfRefusal: data.dateOfRefusal,
        witnessName: data.witnessName
      };
      hasSavedRefusal.value = true;
      showSaveButton.value = false;
      console.log("Refused hospital treatment saved:", savedData.value);
    };
    const editRefusal = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          formRef.value.setFormValue("reasonForRefusal", savedData.value.reasonForRefusal);
          formRef.value.setFormValue("plansToReturn", savedData.value.plansToReturn);
          formRef.value.setFormValue("dateOfRefusal", savedData.value.dateOfRefusal);
          formRef.value.setFormValue("witnessName", savedData.value.witnessName);
          currentFormData.value = {
            reasonForRefusal: savedData.value.reasonForRefusal,
            plansToReturn: savedData.value.plansToReturn,
            dateOfRefusal: savedData.value.dateOfRefusal,
            witnessName: savedData.value.witnessName
          };
        }
      }, 100);
      hasSavedRefusal.value = false;
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedRefusal.value) {
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: CONCEPTS.REFUSED_HOSPITAL_TREATMENT,
          value: CONCEPTS.REFUSED_HOSPITAL_TREATMENT,
          groupMembers: [
            {
              concept: CONCEPTS.REASON_FOR_REFUSAL,
              value: data.reasonForRefusal
            },
            {
              concept: CONCEPTS.PLANS_TO_RETURN,
              value: data.plansToReturn
            },
            {
              concept: CONCEPTS.DATE_OF_REFUSAL,
              value: data.dateOfRefusal
            },
            {
              concept: CONCEPTS.WITNESS_NAME,
              value: data.witnessName
            }
          ]
        }
      ];
      return {
        refusedHospitalTreatment: data,
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
              _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "form-title" }, "Refused Hospital Treatment", -1)),
              _cache[10] || (_cache[10] = createBaseVNode("p", { class: "subtitle" }, "Capture refusal details and witness confirmation", -1)),
              createBaseVNode("div", _hoisted_1$2, [
                createVNode(StandardForm, {
                  formData: refusedFormConfig.value,
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
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveRefusal()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedRefusal.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#ffebee" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#c62828" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Refused Treatment Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$2, [
                          createBaseVNode("div", _hoisted_4$2, [
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Reason for Refusal:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_5$1, toDisplayString(savedData.value.reasonForRefusal), 1)
                          ]),
                          createBaseVNode("div", _hoisted_6$1, [
                            _cache[5] || (_cache[5] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Plans to Return for Treatment:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_7$1, [
                              createBaseVNode("div", _hoisted_8, [
                                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "label" }, "Plans to Return:", -1)),
                                createBaseVNode("span", _hoisted_9, toDisplayString(savedData.value.plansToReturn === "yes" ? "Yes" : "No"), 1)
                              ])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_10, [
                            _cache[6] || (_cache[6] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Date of Refusal:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_11, [
                              createVNode(unref(IonIcon), {
                                icon: iconsContent.value.calendar,
                                style: { "margin-right": "8px" }
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(formatDate(savedData.value.dateOfRefusal)), 1)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_12, [
                            _cache[7] || (_cache[7] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Witness Name:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_13, toDisplayString(savedData.value.witnessName), 1)
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editRefusal()),
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

const RefusedTreatmentForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e316017b"]]);

const _hoisted_1$1 = { class: "transfer-form" };
const _hoisted_2$1 = {
  key: 1,
  class: "saved-transfer"
};
const _hoisted_3$1 = { class: "transfer-content" };
const _hoisted_4$1 = { class: "summary-section" };
const _hoisted_5 = { class: "facility-badge" };
const _hoisted_6 = { class: "summary-section" };
const _hoisted_7 = { class: "detail-text" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TransferOutForm",
  setup(__props, { expose: __expose }) {
    const CONCEPTS = {
      TRANSFER_OUT: "transfer_out",
      FACILITY_NAME: "facility_name",
      REASON_FOR_TRANSFER: "reason_for_transfer"
    };
    const iconsContent = ref(icons);
    const showSaveButton = ref(false);
    const hasSavedTransfer = ref(false);
    const savedData = ref({
      facilityName: "",
      reasonForTransfer: ""
    });
    const currentFormData = ref(null);
    const transferFormConfig = computed(() => {
      const form = [
        {
          componentType: "inputField",
          header: "Facility Name",
          name: "facilityName",
          placeholder: "Enter Facility Name",
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Reason for Transfer",
          name: "reasonForTransfer",
          placeholder: "Provide reason for transfer",
          validation: (value) => StandardValidations.required(value),
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
          if (newValues.facilityName || newValues.reasonForTransfer) {
            showSaveButton.value = true;
          }
        }
      },
      { deep: true }
    );
    const saveTransfer = () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        alert("Please fill in all required fields");
        return;
      }
      if (!data.facilityName || !data.reasonForTransfer) {
        alert("Please fill in all required fields: Facility Name and Reason for Transfer");
        return;
      }
      savedData.value = {
        facilityName: data.facilityName,
        reasonForTransfer: data.reasonForTransfer
      };
      hasSavedTransfer.value = true;
      showSaveButton.value = false;
      console.log("Transfer out saved:", savedData.value);
    };
    const editTransfer = () => {
      formRef.value?.resetForm();
      setTimeout(() => {
        if (formRef.value) {
          formRef.value.setFormValue("facilityName", savedData.value.facilityName);
          formRef.value.setFormValue("reasonForTransfer", savedData.value.reasonForTransfer);
          currentFormData.value = {
            facilityName: savedData.value.facilityName,
            reasonForTransfer: savedData.value.reasonForTransfer
          };
        }
      }, 100);
      hasSavedTransfer.value = false;
      showSaveButton.value = true;
    };
    const getData = () => {
      if (!hasSavedTransfer.value) {
        return null;
      }
      return formatDataForAPI(savedData.value);
    };
    const formatDataForAPI = (data) => {
      const obs = [
        {
          concept: CONCEPTS.TRANSFER_OUT,
          value: CONCEPTS.TRANSFER_OUT,
          groupMembers: [
            {
              concept: CONCEPTS.FACILITY_NAME,
              value: data.facilityName
            },
            {
              concept: CONCEPTS.REASON_FOR_TRANSFER,
              value: data.reasonForTransfer
            }
          ]
        }
      ];
      return {
        transferOut: data,
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
              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "form-title" }, "Transfer Out", -1)),
              _cache[7] || (_cache[7] = createBaseVNode("p", { class: "subtitle" }, "Document transfer destination and rationale", -1)),
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(StandardForm, {
                  formData: transferFormConfig.value,
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
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => saveTransfer()),
                    name: "Submit",
                    color: "primary"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasSavedTransfer.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                createVNode(unref(IonCard), { style: { "margin-top": "20px", "background": "#e3f2fd" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), { style: { "font-size": "1rem", "color": "#1565c0" } }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(" Transfer Out Summary ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$1, [
                          createBaseVNode("div", _hoisted_4$1, [
                            _cache[3] || (_cache[3] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Facility Name:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_5, toDisplayString(savedData.value.facilityName), 1)
                          ]),
                          createBaseVNode("div", _hoisted_6, [
                            _cache[4] || (_cache[4] = createBaseVNode("p", null, [
                              createBaseVNode("strong", null, "Reason for Transfer:")
                            ], -1)),
                            createBaseVNode("div", _hoisted_7, toDisplayString(savedData.value.reasonForTransfer), 1)
                          ]),
                          createVNode(unref(IonButton), {
                            size: "small",
                            fill: "clear",
                            onClick: _cache[1] || (_cache[1] = ($event) => editTransfer()),
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

const TransferOutForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ab9fb92c"]]);

const _hoisted_1 = { class: "disposition-container" };
const _hoisted_2 = { class: "custom-card selection-card" };
const _hoisted_3 = { class: "selection-form" };
const _hoisted_4 = {
  key: 0,
  class: "disposition-form-wrapper"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Disposition",
  setup(__props) {
    const iconsContent = ref(icons);
    const selectedDisposition = ref(null);
    const dispositionOptions = [
      {
        id: "discharge-home",
        label: "Discharge Home",
        description: "Discharge patient to home with follow-up care instructions"
      },
      {
        id: "admission",
        label: "Admission",
        description: "Admit patient to hospital ward"
      },
      {
        id: "awaiting-specialty",
        label: "Awaiting Specialty Review",
        description: "Patient awaiting specialist consultation"
      },
      {
        id: "death",
        label: "Death",
        description: "Record patient death and related information"
      },
      {
        id: "absconded",
        label: "Absconded",
        description: "Patient left without authorization"
      },
      {
        id: "refused-treatment",
        label: "Refused Hospital Treatment",
        description: "Patient declined recommended treatment"
      },
      {
        id: "transfer-out",
        label: "Transfer Out",
        description: "Transfer patient to another facility"
      }
    ];
    const dispositionSelectOptions = computed(
      () => dispositionOptions.map((option) => ({
        id: option.id,
        name: option.label,
        description: option.description
      }))
    );
    const dispositionSelectForm = computed(() => {
      const form = [
        {
          componentType: "multiSelectInputField",
          header: "Disposition Options",
          name: "disposition",
          isMultiple: false,
          trackBy: "id",
          placeholder: "Select a disposition option",
          icon: icons.search,
          options: dispositionSelectOptions.value,
          validation: (value) => StandardValidations.required(value),
          grid: { s: "12" }
        }
      ];
      return form;
    });
    const { formRef, currentFormValues } = useExposeFromStandardForm();
    watch(
      currentFormValues,
      (newValues) => {
        const selection = newValues?.disposition;
        const nextId = selection?.id || selection?.concept_id || selection?.value || selection || null;
        selectedDisposition.value = typeof nextId === "string" ? nextId : null;
      },
      { deep: true }
    );
    const resetSelection = () => {
      selectedDisposition.value = null;
      formRef.value?.resetForm();
    };
    const handleSubmit = (data) => {
      console.log("Form submitted:", data);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createVNode(GoBack, {
                title: "Disposition",
                url: "/patient-profile",
                name: "Back to Profile"
              }),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(unref(IonCardContent), null, {
                    default: withCtx(() => [
                      _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "form-title" }, "Disposition", -1)),
                      _cache[2] || (_cache[2] = createBaseVNode("p", { class: "subtitle" }, "Select a disposition option to continue", -1)),
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(StandardForm, {
                          formData: dispositionSelectForm.value,
                          ref_key: "formRef",
                          ref: formRef
                        }, null, 8, ["formData"])
                      ]),
                      selectedDisposition.value ? (openBlock(), createBlock(unref(IonRow), {
                        key: 0,
                        style: { "margin-top": "16px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(DynamicButton, {
                            fill: "clear",
                            icon: iconsContent.value.editPen,
                            iconSlot: "start",
                            "onClicked:btn": _cache[0] || (_cache[0] = ($event) => resetSelection()),
                            name: "Change selection"
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                selectedDisposition.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  selectedDisposition.value === "discharge-home" ? (openBlock(), createBlock(DischargeHomeForm, {
                    key: 0,
                    onSubmit: handleSubmit
                  })) : selectedDisposition.value === "admission" ? (openBlock(), createBlock(AdmissionForm, {
                    key: 1,
                    onSubmit: handleSubmit
                  })) : selectedDisposition.value === "awaiting-specialty" ? (openBlock(), createBlock(AwaitingSpecialtyForm, {
                    key: 2,
                    onSubmit: handleSubmit
                  })) : selectedDisposition.value === "death" ? (openBlock(), createBlock(DeathForm, {
                    key: 3,
                    onSubmit: handleSubmit
                  })) : selectedDisposition.value === "absconded" ? (openBlock(), createBlock(AbscondedForm, {
                    key: 4,
                    onSubmit: handleSubmit
                  })) : selectedDisposition.value === "refused-treatment" ? (openBlock(), createBlock(RefusedTreatmentForm, {
                    key: 5,
                    onSubmit: handleSubmit
                  })) : selectedDisposition.value === "transfer-out" ? (openBlock(), createBlock(TransferOutForm, {
                    key: 6,
                    onSubmit: handleSubmit
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
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

const Disposition = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8bddc55"]]);

export { Disposition as default };
