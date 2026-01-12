import { q as defineComponent, r as ref, d as computed, a2 as onMounted, x as createElementBlock, y as openBlock, B as createBaseVNode, a4 as normalizeClass, z as createVNode, E as unref, d0 as person, L as IonIcon, C as toDisplayString, a5 as createTextVNode, h as inject, w as watch, G as createCommentVNode, a3 as onUnmounted, J as Fragment, R as renderList, ff as closeOutline, a9 as chevronDownOutline, O as createBlock, ab as checkmarkOutline, S as withDirectives, bm as vModelText, bl as addCircleOutline, au as searchOutline, aM as medicalOutline, b2 as calendarOutline, bx as createStaticVNode, T as vShow, cx as E, cy as autoTable, A as withCtx, N as IonButton, aX as printOutline, H as IonContent, bq as IonPage, aF as useRouter, eT as provide, v as resolveComponent } from './vendor-BK8x96Ok.js';
import { s as storeToRefs, d as defineStore } from './pinia-C47my0-I.js';
import { u as useDemographicsStore, H as HisDate, cj as InputField, P as PatientService, _ as _export_sfc, K as ObservationService, C as StandardForm, ck as SearchableDropdown, ab as useUserStore, T as Toolbar, t as toastWarning, ci as saveEncounterData, b as EncounterTypeId, G as toastSuccess, x as toastDanger } from '../index-dAcYVh-O.js';
import { N as NeonatalService } from './neonatal_service-BQBOO1_8.js';
import { D as DemographicBar } from './DemographicBar-8WZ9gOOP.js';
import { g as neonatalDischargeFormKey, h as neonatalDischargeSections, i as defaultNeonatalDischargeForm, j as neonatalAdmissionOutcomesFormKey, k as neonatalAdmissionSignOffSections, N as NeonatalStepper } from './NeonatalStepper-CUsbVBMP.js';
import { u as useAdmissionSignOff } from './useAdmissionSignOff-9CPA8rO1.js';

const _hoisted_1$9 = { class: "profile-card" };
const _hoisted_2$6 = { class: "profile-content" };
const _hoisted_3$6 = { class: "avatar-column" };
const _hoisted_4$5 = { class: "details-column" };
const _hoisted_5$3 = { class: "patient-name" };
const _hoisted_6$3 = { class: "bio-line" };
const _hoisted_7$3 = {
  key: 0,
  class: "info-row"
};
const _hoisted_8$3 = { class: "value" };
const _hoisted_9$2 = { class: "info-row" };
const _hoisted_10$2 = { class: "value" };
const _hoisted_11$2 = { class: "mother-name-section" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ProfileInformation",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const admissionDate = ref("");
    const motherName = ref("");
    const genderClass = computed(() => {
      return patient.value?.personInformation?.gender === "M" ? "male-bg" : "female-bg";
    });
    const genderLabel = computed(() => {
      const g = patient.value?.personInformation?.gender;
      return g === "M" ? "Male" : g === "F" ? "Female" : g;
    });
    const ageLabel = computed(() => {
      const dob = patient.value?.personInformation?.birthdate;
      if (!dob) return "";
      return HisDate.calculateDisplayAge(HisDate.toStandardHisFormat(dob));
    });
    const dobLabel = computed(() => {
      const dob = patient.value?.personInformation?.birthdate;
      if (!dob) return "";
      return HisDate.toStandardHisDisplayFormat(dob);
    });
    const motherInputConfig = computed(() => ({
      header: "Mother's Full Name",
      value: motherName.value,
      disabled: true,
      type: "text",
      placeholder: "Searching..."
    }));
    const fetchAdmissionDate = async () => {
      const patientId = patient.value?.patientID;
      if (!patientId) return;
      try {
        const result = await NeonatalService.checkEnrollment(patientId);
        if (result && result.enrollment_data?.date_enrolled) {
          admissionDate.value = HisDate.toStandardHisDisplayFormat(result.enrollment_data.date_enrolled);
        }
      } catch (error) {
        console.error("Failed to fetch admission date", error);
      }
    };
    const fetchMotherName = async () => {
      try {
        const patientService = new PatientService();
        const relationships = await patientService.getGuardian();
        if (relationships && relationships.length > 0) {
          const motherRel = relationships.find((rel) => {
            const type = rel.type?.b_is_to_a || "";
            return type === "Mother" || type === "Parent";
          });
          if (motherRel && motherRel.relation && motherRel.relation.names && motherRel.relation.names.length > 0) {
            const name = motherRel.relation.names[0];
            motherName.value = [name.given_name, name.middle_name, name.family_name].filter(Boolean).join(" ");
          } else {
            motherName.value = "N/A";
          }
        } else {
          motherName.value = "N/A";
        }
      } catch (error) {
        console.error("Failed to fetch mother's name", error);
        motherName.value = "Unknown";
      }
    };
    onMounted(() => {
      fetchAdmissionDate();
      fetchMotherName();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("div", {
              class: normalizeClass(["avatar-box", genderClass.value])
            }, [
              createVNode(unref(IonIcon), {
                icon: unref(person),
                class: "avatar-icon"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          createBaseVNode("div", _hoisted_4$5, [
            createBaseVNode("div", _hoisted_5$3, [
              createBaseVNode("div", null, toDisplayString(unref(patient)?.personInformation?.given_name), 1),
              createBaseVNode("div", null, toDisplayString(unref(patient)?.personInformation?.family_name), 1)
            ]),
            createBaseVNode("div", _hoisted_6$3, [
              createTextVNode(toDisplayString(genderLabel.value) + " ", 1),
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "bullet" }, "•", -1)),
              createTextVNode(" " + toDisplayString(ageLabel.value) + " ", 1),
              _cache[1] || (_cache[1] = createBaseVNode("span", { class: "bullet" }, "•", -1)),
              createTextVNode(" " + toDisplayString(dobLabel.value), 1)
            ]),
            (openBlock(), createElementBlock("div", _hoisted_7$3, [
              _cache[2] || (_cache[2] = createBaseVNode("span", { class: "label" }, "Admission Date:", -1)),
              createBaseVNode("span", _hoisted_8$3, toDisplayString(admissionDate.value), 1)
            ])) ,
            createBaseVNode("div", _hoisted_9$2, [
              _cache[3] || (_cache[3] = createBaseVNode("span", { class: "label" }, "MRN:", -1)),
              createBaseVNode("span", _hoisted_10$2, toDisplayString(unref(patient)?.ID), 1)
            ])
          ])
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "form-title" }, "DISCHARGE FORM", -1)),
        createBaseVNode("div", _hoisted_11$2, [
          createVNode(InputField, {
            config: motherInputConfig.value,
            allFormValues: {}
          }, null, 8, ["config"])
        ])
      ]);
    };
  }
});

const ProfileInformation = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-de193189"]]);

const _hoisted_1$8 = { class: "vitals-header" };
const _hoisted_2$5 = { class: "detail-row" };
const _hoisted_3$5 = { class: "detail-value status-value" };
const _hoisted_4$4 = { class: "detail-row" };
const _hoisted_5$2 = { class: "weight-box" };
const _hoisted_6$2 = { class: "weight-value" };
const _hoisted_7$2 = { class: "weight-date" };
const _hoisted_8$2 = { class: "section-subtitle" };
const SECTION_INDEX = 0;
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DischargeVitals",
  setup(__props, { expose: __expose }) {
    const sectionConfig = neonatalDischargeSections[SECTION_INDEX];
    const formRef = ref(null);
    const dischargeForm = inject(neonatalDischargeFormKey);
    const demographicsStore = useDemographicsStore();
    const hivStatus = ref("");
    const birthWeight = ref("");
    const birthDate = ref("");
    onMounted(async () => {
      const patientId = demographicsStore.patient?.patientID;
      if (patientId) {
        try {
          const hivObs = await ObservationService.getFirstObs(patientId, "Mother HIV status");
          if (hivObs) {
            let value = hivObs.value_text;
            if (!value && hivObs.value_coded) {
              value = String(hivObs.value_coded);
            }
            hivStatus.value = value || "Unknown";
          } else {
            hivStatus.value = "Unknown";
          }
          const weightObs = await ObservationService.getFirstObs(patientId, "Birth weight");
          if (weightObs) {
            birthWeight.value = weightObs.value_numeric?.toString() || "";
            if (weightObs.obs_datetime) {
              birthDate.value = HisDate.toStandardHisDisplayFormat(weightObs.obs_datetime);
            }
          }
        } catch (e) {
          console.error("Error fetching vitals details", e);
        }
      }
    });
    const syncFormValues = (values) => {
      if (!dischargeForm) return;
      dischargeForm.weight = values.weight;
      dischargeForm.heartRate = values.heartRate;
      dischargeForm.respiratoryRate = values.respiratoryRate;
      dischargeForm.oxygenSaturation = values.oxygenSaturation;
      dischargeForm.temperature = values.temperature;
    };
    watch(
      () => formRef.value?.formValues,
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
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormValues: () => formRef.value?.getFormValues?.() || {},
      validateForm: () => formRef.value?.validateForm?.() || null
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$8, [
          createBaseVNode("div", _hoisted_2$5, [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "detail-label" }, "HIV status", -1)),
            createBaseVNode("span", _hoisted_3$5, toDisplayString(hivStatus.value || "Loading..."), 1)
          ]),
          createBaseVNode("div", _hoisted_4$4, [
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "detail-label" }, "Birth Weight", -1)),
            createBaseVNode("div", _hoisted_5$2, [
              createBaseVNode("span", _hoisted_6$2, toDisplayString(birthWeight.value ? birthWeight.value + " kg" : "..."), 1),
              _cache[1] || (_cache[1] = createBaseVNode("span", { class: "weight-separator" }, "|", -1)),
              createBaseVNode("span", _hoisted_7$2, "Date: " + toDisplayString(birthDate.value || "..."), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_8$2, toDisplayString(unref(sectionConfig).subtitle), 1)
        ]),
        createVNode(StandardForm, {
          formData: unref(sectionConfig).formData,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const DischargeVitals = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c63c7f2d"]]);

const _hoisted_1$7 = { class: "discharge-diagnosis-wrapper" };
const _hoisted_2$4 = { class: "diagnosis-section" };
const _hoisted_3$4 = { class: "diagnosis-section" };
const _hoisted_4$3 = {
  key: 0,
  class: "validation-error"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DischargeDiagnosis",
  setup(__props, { expose: __expose }) {
    const dischargeForm = inject(neonatalDischargeFormKey);
    const validationError = ref(null);
    const mainDiagnosisRef = ref(null);
    const otherProblemsRef = ref(null);
    const options = [
      { label: "Hypoglycaemia (symptomatic)", value: "Hypoglycaemia1" },
      { label: "Abscess", value: "Abscess" },
      { label: "Fever", value: "Fever" },
      { label: "Birth Asphyxia", value: "Asphyxia" },
      { label: "Neonatal Sepsis (Early onset - Symptomatic)", value: "Neonatal Sepsis - Early Onset" },
      { label: "Prematurity with Respiratory Distress", value: "Prematurity with RDS" },
      { label: "Suspected Neonatal Sepsis", value: "Sepsis_Sus" },
      { label: "Possible Meconium Aspiration", value: "Meconium Aspiration" }
    ];
    const mainDiagnosisConfig = computed(() => ({
      componentType: "searchableDropdown",
      header: "Select the Discharge Diagnosis",
      name: "mainDiagnosis",
      placeholder: "Search",
      dropdownHeader: "Select ONE",
      options,
      multiple: false,
      bold: true,
      initialValue: dischargeForm?.mainDiagnosis || null,
      validation: (value) => value ? null : "A main Discharge Diagnosis is required."
    }));
    const otherProblemsConfig = computed(() => ({
      componentType: "searchableDropdown",
      header: "Other problems (If any)",
      name: "otherProblems",
      placeholder: "Search",
      dropdownHeader: "Select problems",
      options,
      multiple: true,
      bold: true,
      initialValue: dischargeForm?.otherProblems || []
    }));
    const handleMainDiagnosisChange = (event) => {
      if (dischargeForm) {
        dischargeForm.mainDiagnosis = event.value;
        validationError.value = null;
      }
    };
    const handleOtherProblemsChange = (event) => {
      if (dischargeForm) {
        dischargeForm.otherProblems = event.value;
      }
    };
    const validateForm = () => {
      if (!dischargeForm?.mainDiagnosis) {
        validationError.value = "A main Discharge Diagnosis is required.";
        return { mainDiagnosis: "Required" };
      }
      validationError.value = null;
      return null;
    };
    __expose({
      validateForm,
      getFormValues: () => ({
        /* No-op, data is synced live */
      })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$4, [
          createVNode(SearchableDropdown, {
            config: mainDiagnosisConfig.value,
            allFormValues: {},
            onFieldChanged: handleMainDiagnosisChange,
            ref_key: "mainDiagnosisRef",
            ref: mainDiagnosisRef
          }, null, 8, ["config"])
        ]),
        createBaseVNode("div", _hoisted_3$4, [
          createVNode(SearchableDropdown, {
            config: otherProblemsConfig.value,
            allFormValues: {},
            onFieldChanged: handleOtherProblemsChange,
            ref_key: "otherProblemsRef",
            ref: otherProblemsRef
          }, null, 8, ["config"])
        ]),
        validationError.value ? (openBlock(), createElementBlock("div", _hoisted_4$3, toDisplayString(validationError.value), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});

const DischargeDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-fe875052"]]);

const _hoisted_1$6 = { class: "discharge-medications-wrapper" };
const _hoisted_2$3 = { class: "section" };
const _hoisted_3$3 = {
  key: 0,
  class: "past-history-list"
};
const _hoisted_4$2 = {
  key: 1,
  class: "empty-message"
};
const _hoisted_5$1 = { class: "section" };
const _hoisted_6$1 = {
  key: 0,
  class: "final-medications-list"
};
const _hoisted_7$1 = { class: "med-name" };
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = {
  key: 1,
  class: "empty-message"
};
const _hoisted_10$1 = {
  key: 0,
  class: "section"
};
const _hoisted_11$1 = { class: "prescription-table" };
const _hoisted_12$1 = { class: "med-name-cell" };
const _hoisted_13$1 = { class: "frequency-cell" };
const _hoisted_14$1 = ["onClick"];
const _hoisted_15$1 = ["value"];
const _hoisted_16$1 = {
  key: 0,
  class: "frequency-dropdown-container"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "dosage-cell" };
const _hoisted_19 = ["onUpdate:modelValue"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "section" };
const _hoisted_22 = { class: "search-wrapper" };
const _hoisted_23 = {
  key: 0,
  class: "dropdown-container"
};
const _hoisted_24 = ["onClick"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DischargeMedications",
  setup(__props, { expose: __expose }) {
    const dischargeForm = inject(neonatalDischargeFormKey);
    const allMedications = [
      "Paracetamol",
      "Gentamicin",
      "Wrapped",
      "KMC",
      "Resuscitaire",
      "BVM Ventilation",
      "Nasal Cannulae Oxygen",
      "Amoxicillin",
      "Ampicillin",
      "Penicillin",
      "Ceftriaxone",
      "Nevirapine",
      "Zidovudine",
      "Multivitamin"
    ];
    const pastMedicalHistory = ref(["Gentamicin"]);
    const prescriptionDetails = ref([]);
    const frequencyOptions = ["once a day", "twice a day", "3 times a day", "4 times a day"];
    const activeFrequencyIndex = ref(null);
    const finalMedications = computed(() => {
      if (!dischargeForm || !dischargeForm.medications) {
        return [];
      }
      return dischargeForm.medications;
    });
    const searchQuery = ref("");
    const showDropdown = ref(false);
    const filteredMedications = ref([...allMedications]);
    const handleSearch = () => {
      const query = searchQuery.value.toLowerCase();
      if (query) {
        filteredMedications.value = allMedications.filter((med) => med.toLowerCase().includes(query));
      } else {
        filteredMedications.value = [...allMedications];
      }
    };
    const isMedicationInPrescription = (name) => {
      return prescriptionDetails.value.some((med) => med.name === name);
    };
    const selectMedication = (name) => {
      if (isMedicationInPrescription(name)) {
        return;
      }
      prescriptionDetails.value.push({
        name,
        frequency: "once a day",
        dosage: ""
      });
      showDropdown.value = false;
      searchQuery.value = "";
      filteredMedications.value = [...allMedications];
    };
    const toggleFrequencyDropdown = (index) => {
      if (activeFrequencyIndex.value === index) {
        activeFrequencyIndex.value = null;
      } else {
        activeFrequencyIndex.value = index;
      }
    };
    const selectFrequency = (index, frequency) => {
      prescriptionDetails.value[index].frequency = frequency;
      activeFrequencyIndex.value = null;
    };
    const addToFinalMedications = (index) => {
      const med = prescriptionDetails.value[index];
      if (!med.dosage || med.dosage.trim() === "") {
        alert("Please enter dosage before adding");
        return;
      }
      if (!dischargeForm) {
        console.error("Discharge form not found");
        return;
      }
      if (!dischargeForm.medications) {
        dischargeForm.medications = [];
      }
      dischargeForm.medications.push({
        name: med.name,
        frequency: med.frequency,
        dosage: med.dosage
      });
      console.log("Added medication:", med.name);
      console.log("Total medications:", dischargeForm.medications.length);
      console.log("Medications array:", dischargeForm.medications);
      prescriptionDetails.value.splice(index, 1);
    };
    const removeFinalMedication = (index) => {
      if (dischargeForm && dischargeForm.medications) {
        dischargeForm.medications.splice(index, 1);
      }
    };
    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest(".search-wrapper") && !target.closest(".dropdown-container")) {
        showDropdown.value = false;
      }
      if (!target.closest(".custom-frequency-wrapper") && !target.closest(".frequency-dropdown-container")) {
        activeFrequencyIndex.value = null;
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    const validateForm = () => {
      return null;
    };
    __expose({
      validateForm,
      getFormValues: () => ({})
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$3, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "section-title" }, "Past Medical History", -1)),
          pastMedicalHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(pastMedicalHistory.value, (med, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "history-item"
              }, toDisplayString(med), 1);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_4$2, "No past medical history"))
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "section-title" }, "Medications given on discharge", -1)),
          finalMedications.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(finalMedications.value, (med, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "final-med-item"
              }, [
                createBaseVNode("span", _hoisted_7$1, toDisplayString(med.name), 1),
                createBaseVNode("button", {
                  onClick: ($event) => removeFinalMedication(index),
                  class: "delete-btn",
                  type: "button"
                }, [
                  createVNode(unref(IonIcon), {
                    icon: unref(closeOutline),
                    class: "trash-icon"
                  }, null, 8, ["icon"])
                ], 8, _hoisted_8$1)
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_9$1, "No medications added yet"))
        ]),
        prescriptionDetails.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
          _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "section-title" }, "Prescription Details", -1)),
          createBaseVNode("div", _hoisted_11$1, [
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "table-header" }, [
              createBaseVNode("span", null, "Name"),
              createBaseVNode("span", null, "Frequency"),
              createBaseVNode("span", null, "Dosage")
            ], -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(prescriptionDetails.value, (med, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "table-row"
              }, [
                createBaseVNode("span", _hoisted_12$1, toDisplayString(med.name), 1),
                createBaseVNode("div", _hoisted_13$1, [
                  createBaseVNode("div", {
                    class: "custom-frequency-wrapper",
                    onClick: ($event) => toggleFrequencyDropdown(index)
                  }, [
                    createBaseVNode("input", {
                      type: "text",
                      value: med.frequency,
                      readonly: "",
                      class: "frequency-select"
                    }, null, 8, _hoisted_15$1),
                    createVNode(unref(IonIcon), {
                      icon: unref(chevronDownOutline),
                      class: "dropdown-icon"
                    }, null, 8, ["icon"])
                  ], 8, _hoisted_14$1),
                  activeFrequencyIndex.value === index ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(frequencyOptions, (option) => {
                      return createBaseVNode("div", {
                        key: option,
                        class: normalizeClass(["frequency-dropdown-item", { selected: med.frequency === option }]),
                        onClick: ($event) => selectFrequency(index, option)
                      }, [
                        createBaseVNode("span", null, toDisplayString(option), 1),
                        med.frequency === option ? (openBlock(), createBlock(unref(IonIcon), {
                          key: 0,
                          icon: unref(checkmarkOutline),
                          class: "check-icon"
                        }, null, 8, ["icon"])) : createCommentVNode("", true)
                      ], 10, _hoisted_17);
                    }), 64))
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_18, [
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => med.dosage = $event,
                    placeholder: "Enter dosage",
                    class: "dosage-input"
                  }, null, 8, _hoisted_19), [
                    [vModelText, med.dosage]
                  ]),
                  createBaseVNode("button", {
                    onClick: ($event) => addToFinalMedications(index),
                    class: "add-btn",
                    type: "button"
                  }, [
                    createVNode(unref(IonIcon), {
                      icon: unref(addCircleOutline),
                      class: "add-icon"
                    }, null, 8, ["icon"])
                  ], 8, _hoisted_20)
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createVNode(unref(IonIcon), {
              icon: unref(searchOutline),
              class: "search-icon"
            }, null, 8, ["icon"]),
            withDirectives(createBaseVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
              placeholder: "Search",
              class: "search-input",
              onInput: handleSearch,
              onFocus: _cache[1] || (_cache[1] = ($event) => showDropdown.value = true)
            }, null, 544), [
              [vModelText, searchQuery.value]
            ])
          ]),
          showDropdown.value && filteredMedications.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(filteredMedications.value, (med) => {
              return openBlock(), createElementBlock("div", {
                key: med,
                class: normalizeClass(["dropdown-item", { selected: isMedicationInPrescription(med) }]),
                onClick: ($event) => selectMedication(med)
              }, [
                createBaseVNode("span", null, toDisplayString(med), 1),
                isMedicationInPrescription(med) ? (openBlock(), createBlock(unref(IonIcon), {
                  key: 0,
                  icon: unref(checkmarkOutline),
                  class: "check-icon"
                }, null, 8, ["icon"])) : createCommentVNode("", true)
              ], 10, _hoisted_24);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});

const DischargeMedications = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5243432a"]]);

const _hoisted_1$5 = { class: "clinic-follow-up-wrapper" };
const _hoisted_2$2 = {
  key: 0,
  class: "saved-appointments"
};
const _hoisted_3$2 = { class: "appointment-header" };
const _hoisted_4$1 = { class: "clinic-info" };
const _hoisted_5 = { class: "clinic-name" };
const _hoisted_6 = { class: "appointment-date" };
const _hoisted_7 = { class: "clinic-type" };
const _hoisted_8 = { class: "add-clinic-section" };
const _hoisted_9 = { class: "form-container" };
const _hoisted_10 = { class: "clinic-label" };
const _hoisted_11 = { class: "form-field" };
const _hoisted_12 = ["value"];
const _hoisted_13 = {
  key: 0,
  class: "dropdown-container"
};
const _hoisted_14 = ["onClick"];
const _hoisted_15 = { class: "form-field date-field" };
const _hoisted_16 = ["disabled"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ClinicFollowUp",
  setup(__props, { expose: __expose }) {
    const dischargeForm = inject(neonatalDischargeFormKey);
    const savedAppointments = computed(() => {
      if (!dischargeForm || !dischargeForm.appointments) {
        return [];
      }
      return dischargeForm.appointments;
    });
    const currentClinicNumber = computed(() => {
      return savedAppointments.value.length + 1;
    });
    const currentClinicName = computed(() => {
      return `Clinic ${currentClinicNumber.value}`;
    });
    const clinicTypeOptions = ["Health Center follow up", "Specialist Clinic", "General Outpatient", "Immunization"];
    const showClinicTypeDropdown = ref(false);
    const newAppointment = ref({
      clinicName: "",
      clinicType: "",
      date: ""
    });
    const toggleClinicTypeDropdown = () => {
      showClinicTypeDropdown.value = !showClinicTypeDropdown.value;
    };
    const selectClinicType = (option) => {
      newAppointment.value.clinicType = option;
      showClinicTypeDropdown.value = false;
    };
    const isFormValid = computed(() => {
      return newAppointment.value.clinicType !== "" && newAppointment.value.date !== "";
    });
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };
    const saveAppointment = () => {
      if (!isFormValid.value || !dischargeForm) {
        return;
      }
      if (!dischargeForm.appointments) {
        dischargeForm.appointments = [];
      }
      dischargeForm.appointments.push({
        clinicName: currentClinicName.value,
        clinicType: newAppointment.value.clinicType,
        date: newAppointment.value.date
      });
      newAppointment.value = {
        clinicName: "",
        clinicType: "",
        date: ""
      };
    };
    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest(".custom-select-wrapper") && !target.closest(".dropdown-container")) {
        showClinicTypeDropdown.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    const validateForm = () => {
      return null;
    };
    __expose({
      validateForm,
      getFormValues: () => ({})
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "info-banner" }, "You can assign clinic days for the baby.", -1)),
        savedAppointments.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "section-title" }, "Saved Appointments", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(savedAppointments.value, (appt, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "appointment-item"
            }, [
              createBaseVNode("div", _hoisted_3$2, [
                createBaseVNode("div", _hoisted_4$1, [
                  createVNode(unref(IonIcon), {
                    icon: unref(medicalOutline),
                    class: "clinic-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("span", _hoisted_5, toDisplayString(appt.clinicName), 1)
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("span", null, toDisplayString(formatDate(appt.date)), 1),
                  createVNode(unref(IonIcon), {
                    icon: unref(calendarOutline),
                    class: "calendar-icon"
                  }, null, 8, ["icon"])
                ])
              ]),
              createBaseVNode("div", _hoisted_7, toDisplayString(appt.clinicType), 1)
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_8, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "section-title" }, "Add a clinic day", -1)),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(IonIcon), {
                icon: unref(medicalOutline),
                class: "label-icon"
              }, null, 8, ["icon"]),
              createBaseVNode("span", null, toDisplayString(currentClinicName.value), 1)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", {
                class: "custom-select-wrapper",
                onClick: toggleClinicTypeDropdown
              }, [
                createBaseVNode("input", {
                  type: "text",
                  value: newAppointment.value.clinicType || "Select clinic type",
                  readonly: "",
                  class: normalizeClass(["clinic-select", { placeholder: !newAppointment.value.clinicType }])
                }, null, 10, _hoisted_12),
                createVNode(unref(IonIcon), {
                  icon: unref(chevronDownOutline),
                  class: "dropdown-icon"
                }, null, 8, ["icon"])
              ]),
              showClinicTypeDropdown.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                (openBlock(), createElementBlock(Fragment, null, renderList(clinicTypeOptions, (option) => {
                  return createBaseVNode("div", {
                    key: option,
                    class: normalizeClass(["dropdown-item", { selected: newAppointment.value.clinicType === option }]),
                    onClick: ($event) => selectClinicType(option)
                  }, [
                    createBaseVNode("span", null, toDisplayString(option), 1),
                    newAppointment.value.clinicType === option ? (openBlock(), createBlock(unref(IonIcon), {
                      key: 0,
                      icon: unref(checkmarkOutline),
                      class: "check-icon"
                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                  ], 10, _hoisted_14);
                }), 64))
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15, [
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newAppointment.value.date = $event),
                placeholder: "Clinic date",
                class: "date-input"
              }, null, 512), [
                [vModelText, newAppointment.value.date]
              ]),
              createVNode(unref(IonIcon), {
                icon: unref(calendarOutline),
                class: "date-icon"
              }, null, 8, ["icon"])
            ]),
            createBaseVNode("button", {
              onClick: saveAppointment,
              disabled: !isFormValid.value,
              class: "save-button",
              type: "button"
            }, "save appointment", 8, _hoisted_16)
          ])
        ])
      ]);
    };
  }
});

const ClinicFollowUp = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-ed7c5ffd"]]);

const _hoisted_1$4 = { class: "health-education-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HealthEducation",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalDischargeSections[4].formData;
    const dischargeForm = inject(neonatalDischargeFormKey);
    const syncFormValues = (values) => {
      if (!dischargeForm) return;
      dischargeForm.healthEducationGiven = values.healthEducationGiven || "";
      dischargeForm.insecticideTreatedNetGiven = values.insecticideTreatedNetGiven || "";
    };
    watch(
      () => formRef.value?.formValues,
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
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[0] || (_cache[0] = createStaticVNode('<div class="info-banner" data-v-ab0717a9>Please educate the mother on the following:</div><div class="education-section" data-v-ab0717a9><h3 class="section-title" data-v-ab0717a9>1. Danger Signs</h3><ul class="education-list" data-v-ab0717a9><li data-v-ab0717a9>Jaundice</li><li data-v-ab0717a9>Convulsions</li><li data-v-ab0717a9>Not able to breast feed</li><li data-v-ab0717a9>Difficulties in breathing</li><li data-v-ab0717a9>Lethargic</li><li data-v-ab0717a9>Fever</li><li data-v-ab0717a9>Hypothermia</li><li data-v-ab0717a9>Abdominal distention</li><li data-v-ab0717a9>Bleeding from the cord and what to do if any</li></ul></div><div class="education-section" data-v-ab0717a9><h3 class="section-title" data-v-ab0717a9>1. GENERAL EDUCATION</h3><ul class="education-list" data-v-ab0717a9><li data-v-ab0717a9>Immunization</li><li data-v-ab0717a9>Family planning</li><li data-v-ab0717a9>Hygiene</li><li data-v-ab0717a9>Keeping baby warm</li><li data-v-ab0717a9>Malaria Prevention</li></ul></div>', 3)),
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const HealthEducation = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ab0717a9"]]);

const _hoisted_1$3 = { class: "discharge-outcome-wrapper" };
const _hoisted_2$1 = { class: "outcome-list padding" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4 = { class: "option-text" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DischargeOutcome",
  setup(__props, { expose: __expose }) {
    const dischargeForm = inject(neonatalDischargeFormKey);
    const outcomeOptions = [
      "Discharged",
      "Death (at LESS than 24 hours of age)",
      "Death (at MORE than 24 hours of age)",
      "Died during Admission",
      "Absconded",
      "Transferred to another ward",
      "Transferred to another hospital",
      "Discharged on request",
      "Discharged on palliative care",
      "Brought in dead - BID",
      "Stillbirth"
    ];
    const selectedOutcome = ref("");
    if (dischargeForm) {
      selectedOutcome.value = dischargeForm.outcome || "";
    }
    const selectOutcome = (option) => {
      selectedOutcome.value = option;
    };
    watch(selectedOutcome, (newValue) => {
      if (dischargeForm) {
        dischargeForm.outcome = newValue;
      }
    });
    const validateForm = () => {
      if (!selectedOutcome.value) {
        return { outcome: "Please select an outcome" };
      }
      return null;
    };
    __expose({
      validateForm,
      getFormValues: () => ({
        outcome: selectedOutcome.value
      })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "question-banner" }, "What happened to the baby?", -1)),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "select-label padding" }, "Select one", -1)),
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(outcomeOptions, (option) => {
            return createBaseVNode("div", {
              key: option,
              class: normalizeClass(["outcome-option", { selected: selectedOutcome.value === option }]),
              onClick: ($event) => selectOutcome(option)
            }, [
              createBaseVNode("span", _hoisted_4, toDisplayString(option), 1),
              selectedOutcome.value === option ? (openBlock(), createBlock(unref(IonIcon), {
                key: 0,
                icon: unref(checkmarkOutline),
                class: "check-icon"
              }, null, 8, ["icon"])) : createCommentVNode("", true)
            ], 10, _hoisted_3$1);
          }), 64))
        ])
      ]);
    };
  }
});

const DischargeOutcome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-da5e6123"]]);

const cloneDefaultDischargeForm = () => JSON.parse(JSON.stringify(defaultNeonatalDischargeForm));
const useNeonatalDischargeStore = defineStore("neonatalDischargeStore", {
  state: () => ({
    activePatientId: null,
    dischargeForm: cloneDefaultDischargeForm(),
    dischargeFormCache: {}
  }),
  actions: {
    initializeDischargeForm(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.dischargeForm, cloneDefaultDischargeForm());
        return;
      }
      this.activePatientId = patientId;
      const cachedForm = this.dischargeFormCache[String(patientId)];
      if (cachedForm) {
        Object.assign(this.dischargeForm, cachedForm);
      } else {
        Object.assign(this.dischargeForm, cloneDefaultDischargeForm());
      }
      this.saveDischargeSnapshot();
    },
    saveDischargeSnapshot() {
      if (this.activePatientId == null) return;
      this.dischargeFormCache[String(this.activePatientId)] = JSON.parse(JSON.stringify(this.dischargeForm));
    },
    resetDischargeForm() {
      Object.assign(this.dischargeForm, cloneDefaultDischargeForm());
      this.saveDischargeSnapshot();
    },
    clearDischargeForm(patientId) {
      delete this.dischargeFormCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetDischargeForm();
      }
    }
  },
  persist: {
    paths: ["activePatientId", "dischargeForm", "dischargeFormCache"]
  }
});

const _hoisted_1$2 = { class: "signoff-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SignOff",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const admissionOutcomesForm = inject(neonatalAdmissionOutcomesFormKey, null);
    const dischargeForm = inject(neonatalDischargeFormKey, null);
    const activeContext = computed(() => {
      if (dischargeForm) {
        return {
          form: dischargeForm,
          config: neonatalDischargeSections[6]
          // Discharge Sign-Off section
        };
      }
      return {
        form: admissionOutcomesForm,
        config: neonatalAdmissionSignOffSections[0]
        // Admission Sign-Off section
      };
    });
    const formData = computed(() => activeContext.value.config?.formData || []);
    const subtitle = computed(() => activeContext.value.config?.subtitle || "");
    useAdmissionSignOff(formRef);
    const syncFormValues = (values) => {
      const targetForm = activeContext.value.form;
      if (!targetForm) return;
      targetForm.healthcareWorkerId = values.healthcareWorkerId || "";
      targetForm.electronicSignature = values.electronicSignature || "";
      targetForm.userRole = values.userRole || "";
      targetForm.signOffDate = values.signOffDate || "";
    };
    watch(
      () => formRef.value?.formValues,
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
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => {
        return formRef.value?.validateForm?.() || null;
      },
      getFormValues: () => {
        return formRef.value?.getFormValues?.() || {};
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(StandardForm, {
          formData: formData.value,
          subtitle: subtitle.value,
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, null, 8, ["formData", "subtitle"])
      ]);
    };
  }
});

const SignOff = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0462b6f8"]]);

const _hoisted_1$1 = { class: "printable-discharge-form" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PrintableDischargeForm",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const userStore = useUserStore();
    const dischargeData = inject(neonatalDischargeFormKey, {});
    const patientFullName = computed(() => {
      const person = patient.value?.personInformation;
      if (!person) return "N/A";
      return `${person.given_name || ""} ${person.family_name || ""}`.trim() || "N/A";
    });
    const patientNPID = computed(() => {
      return patient.value?.nationalId || patient.value?.patientID || "N/A";
    });
    const facilityName = computed(() => {
      return userStore.userFacilityName || localStorage.getItem("facilityName") || "Healthcare Facility";
    });
    const formatValue = (value) => {
      if (value === void 0 || value === null || value === "") return "-";
      if (Array.isArray(value)) return value.length ? value.join(", ") : "-";
      if (typeof value === "object" && value.label) return value.label;
      if (typeof value === "object" && value.value) return value.value;
      return String(value);
    };
    const exportPdf = async () => {
      const doc = new E({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 28;
      let cursorY = margin + 20;
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Neonatal Discharge Summary", pageWidth / 2, cursorY, { align: "center" });
      cursorY += 20;
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(String(facilityName.value), pageWidth / 2, cursorY, { align: "center" });
      cursorY += 30;
      const patientDetails = [
        ["Patient Name", patientFullName.value],
        ["NPID", patientNPID.value],
        ["Date of Discharge", dischargeData.signOffDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]]
      ];
      autoTable(doc, {
        startY: cursorY,
        head: [["Patient Details", ""]],
        body: patientDetails,
        theme: "grid",
        headStyles: { fillColor: [1, 99, 2], textColor: 255 },
        margin: { left: margin, right: margin }
      });
      cursorY = doc.lastAutoTable.finalY + 20;
      const diagnosisData = [
        ["Main Diagnosis", formatValue(dischargeData.mainDiagnosis)],
        ["Other Problems", dischargeData.otherProblems?.map((p) => formatValue(p)).join(", ")]
      ];
      autoTable(doc, {
        startY: cursorY,
        head: [["Diagnosis", ""]],
        body: diagnosisData,
        theme: "grid",
        headStyles: { fillColor: [230, 230, 230], textColor: 0 },
        margin: { left: margin, right: margin }
      });
      cursorY = doc.lastAutoTable.finalY + 20;
      const vitalsData = [
        ["Weight (g)", formatValue(dischargeData.weight)],
        ["Heart Rate", formatValue(dischargeData.heartRate)],
        ["Resp Rate", formatValue(dischargeData.respiratoryRate)],
        ["O2 Sat", formatValue(dischargeData.oxygenSaturation)],
        ["Temp", formatValue(dischargeData.temperature)]
      ];
      autoTable(doc, {
        startY: cursorY,
        head: [["Discharge Vitals", ""]],
        body: vitalsData,
        theme: "grid",
        headStyles: { fillColor: [230, 230, 230], textColor: 0 },
        margin: { left: margin, right: margin }
      });
      cursorY = doc.lastAutoTable.finalY + 20;
      const outcomeData = [["Outcome", formatValue(dischargeData.outcome)]];
      autoTable(doc, {
        startY: cursorY,
        head: [["Outcome", ""]],
        body: outcomeData,
        theme: "grid",
        headStyles: { fillColor: [230, 230, 230], textColor: 0 },
        margin: { left: margin, right: margin }
      });
      cursorY = doc.lastAutoTable.finalY + 20;
      const healthEduData = [
        ["Health Education Given", formatValue(dischargeData.healthEducationGiven)],
        ["Insecticide Treated Net Given", formatValue(dischargeData.insecticideTreatedNetGiven)]
      ];
      autoTable(doc, {
        startY: cursorY,
        head: [["Health Education", ""]],
        body: healthEduData,
        theme: "grid",
        headStyles: { fillColor: [230, 230, 230], textColor: 0 },
        margin: { left: margin, right: margin }
      });
      cursorY = doc.lastAutoTable.finalY + 20;
      const signOffData = [
        ["Healthcare Worker ID", formatValue(dischargeData.healthcareWorkerId)],
        ["Signature", formatValue(dischargeData.electronicSignature)],
        ["Role", formatValue(dischargeData.userRole)],
        ["Sign Off Date", formatValue(dischargeData.signOffDate)]
      ];
      autoTable(doc, {
        startY: cursorY,
        head: [["Sign Off", ""]],
        body: signOffData,
        theme: "grid",
        headStyles: { fillColor: [230, 230, 230], textColor: 0 },
        margin: { left: margin, right: margin }
      });
      const filename = `discharge-summary-${patientNPID.value}.pdf`;
      doc.save(filename);
    };
    __expose({
      exportPdf
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, null, 512)), [
        [vShow, false]
      ]);
    };
  }
});

const _hoisted_1 = { class: "print-summary-wrapper" };
const _hoisted_2 = { class: "print-content" };
const _hoisted_3 = { class: "print-actions" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DischargePrint",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const printablePrintRef = ref(null);
    const sectionConfig = neonatalDischargeSections[7];
    const formData = sectionConfig.formData;
    const subtitle = sectionConfig.subtitle;
    const handlePrint = async () => {
      if (printablePrintRef.value?.exportPdf) {
        await printablePrintRef.value.exportPdf();
      }
    };
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => {
        return null;
      },
      getFormValues: () => {
        return {};
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: unref(formData),
          subtitle: unref(subtitle),
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, {
          printSection: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(IonButton), {
                  expand: "block",
                  color: "primary",
                  onClick: handlePrint,
                  class: "print-button"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(printOutline),
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[0] || (_cache[0] = createTextVNode(" Print Discharge Summary ", -1))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["formData", "subtitle"]),
        createVNode(_sfc_main$2, {
          ref_key: "printablePrintRef",
          ref: printablePrintRef
        }, null, 512)
      ]);
    };
  }
});

const DischargePrint = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e4ae595a"]]);

const _sfc_main = defineComponent({
  name: "NeonatalDischarge",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    DemographicBar,
    ProfileInformation,
    NeonatalStepper,
    DischargeVitals,
    DischargeDiagnosis,
    DischargeMedications,
    ClinicFollowUp,
    HealthEducation,
    DischargeOutcome,
    SignOff,
    DischargePrint
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isDischarging = ref(false);
    const dischargeStore = useNeonatalDischargeStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncDischargeForm = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      dischargeStore.initializeDischargeForm(patientId);
    };
    syncDischargeForm();
    watch(
      () => patient.value?.patientID,
      () => syncDischargeForm()
    );
    const dischargeFormData = dischargeStore.dischargeForm;
    provide(neonatalDischargeFormKey, dischargeFormData);
    watch(
      () => dischargeStore.dischargeForm,
      () => dischargeStore.saveDischargeSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalDischargeSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalDischargeSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalDischargeSections[0].title,
        value: "1",
        component: DischargeVitals
      },
      {
        title: neonatalDischargeSections[1].title,
        value: "2",
        component: DischargeDiagnosis
      },
      {
        title: neonatalDischargeSections[2].title,
        value: "3",
        component: DischargeMedications
      },
      {
        title: neonatalDischargeSections[3].title,
        value: "4",
        component: ClinicFollowUp
      },
      {
        title: neonatalDischargeSections[4].title,
        value: "5",
        component: HealthEducation
      },
      {
        title: neonatalDischargeSections[5].title,
        value: "6",
        component: DischargeOutcome
      },
      {
        title: neonatalDischargeSections[6].title,
        value: "7",
        component: SignOff
      },
      {
        title: neonatalDischargeSections[7].title,
        value: "8",
        component: DischargePrint
      }
    ];
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
    const getSaveFunction = (currentIndex) => {
      if (currentIndex === 6) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          if (isDischarging.value) {
            return;
          }
          try {
            isDischarging.value = true;
            if (!dischargeFormData.mainDiagnosis) {
              toastWarning("Please select a discharge diagnosis");
              isDischarging.value = false;
              return;
            }
            if (!dischargeFormData.outcome) {
              toastWarning("Please select a discharge outcome");
              isDischarging.value = false;
              return;
            }
            const obs = await NeonatalService.buildDischargeObservations(dischargeFormData, HisDate.sessionDate());
            await saveEncounterData(patient.value.patientID, EncounterTypeId.DISCHARGE_PATIENT, obs);
            toastSuccess("Neonate discharged successfully");
            isDischarging.value = false;
          } catch (error) {
            console.error("Neonatal discharge failed", error);
            toastDanger("Failed to discharge neonate. Please try again.");
            isDischarging.value = false;
            throw error;
          }
        };
      }
      if (currentIndex === 7) {
        return async () => {
          dischargeStore.clearDischargeForm(patient.value.patientID);
          router.push("/patientProfile");
        };
      }
      return null;
    };
    return {
      router,
      patient,
      dischargeFormData,
      stepperTitle: "Neonatal Discharge",
      currentOpenStepper: "1",
      wizardData,
      stepperData,
      updateStatus,
      getSaveFunction,
      isDischarging
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_ProfileInformation = resolveComponent("ProfileInformation");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-discharge-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_ProfileInformation),
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/patientProfile",
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "discharge",
            headerStyle: "discharge-header",
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalDischarge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fe55d434"]]);

export { NeonatalDischarge as default };
