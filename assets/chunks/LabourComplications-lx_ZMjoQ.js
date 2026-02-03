import { c as computed, s as defineComponent, w as watch, a2 as onMounted, n as nextTick, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bd as IonCardContent, bL as IonCard, f as ref, O as createBlock, C as createBaseVNode, J as Fragment, R as renderList, D as toDisplayString, H as createCommentVNode, bB as createStaticVNode, a4 as normalizeClass, L as IonIcon, ez as shieldCheckmarkOutline, aS as medicalOutline, G as closeCircleOutline, eA as helpCircleOutline, a5 as createTextVNode, c4 as checkmarkCircleOutline, eB as lockClosedOutline, b8 as calendarOutline, Q as alertCircleOutline, e3 as createOutline } from './vendor-DoVhRvhx.js';
import { u as useDemographicsStore, z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess$1, _ as _export_sfc, n as icons, y as StandardValidations } from '../index-BBTSDIN9.js';
import { s as storeToRefs } from './pinia-CTgeSI8R.js';
import { u as useLocation } from './useLocation-mxueQJhv.js';

const useLabourWomanBehaviourForm = () => {
  const labourWomanBehaviourFormSection = computed(() => {
    return [
      // ========== Question 1: BEHAVIOUR COUNSELLING DONE ==========
      {
        componentType: "radioButtonField",
        header: "Daily caffeine intake",
        name: "Daily caffeine use",
        obsValueType: "value_coded",
        value: [],
        // Initialize as an empty array for multiple checkboxes
        options: [
          {
            label: "More than 2 cups of coffee",
            value: "more than 2 cups of coffee"
          },
          {
            label: "More than 4 cups of tea",
            value: "more than 4 cups of tea"
          },
          {
            label: "More than 12 bars of chocolate",
            value: "more than 12 bars of chocolate"
          },
          {
            label: "More than one bottle of soda, energy, soft drink",
            value: "more than one bottle of soda, energy, soft drink"
          },
          {
            label: "None",
            value: "none"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: REASON NOT DONE ==========
      {
        componentType: "radioButtonField",
        header: "Recently quit tobacco products",
        name: "Recently quit tobacco products",
        obsValueType: "value_coded",
        type: "inline",
        value: [],
        // Initialize as an empty array
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Exposure to second hand smoke",
        name: "Exposure to second hand smoke",
        obsValueType: "value_coded",
        type: "inline",
        value: [],
        // Initialize as an empty array
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Pica",
        name: "Pica",
        obsValueType: "value_coded",
        type: "inline",
        value: [],
        // Initialize as an empty array
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Alcohol Intake",
        name: "Alcohol",
        obsValueType: "value_coded",
        type: "inline",
        value: [],
        // Initialize as an empty array
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    labourWomanBehaviourFormSection
  };
};

const _hoisted_1$6 = { class: "container" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LabourWomanBehaviour",
  setup(__props, { expose: __expose }) {
    const labourWomanBehaviourComposable = useLabourWomanBehaviourForm();
    const formRef = ref(null);
    const labourWomanBehaviourForm = computed(() => {
      return labourWomanBehaviourComposable.labourWomanBehaviourFormSection.value;
    });
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    async function prefillWomanBehaviourFromAnc() {
      if (!formRef.value) return;
      if (!patient.value?.patientID) return;
      const encounters = await ObservationService.getObsByEncounterId(EncounterTypeId.WOMAN_BEHAVIOUR);
      const allObs = (encounters || []).flatMap((encounter) => encounter?.obs || []);
      const caffeineObs = allObs.filter(
        (o) => o?.concept_name && String(o.concept_name).toLowerCase() === "daily caffeine use" && o?.value_text
      );
      const drugsObs = allObs.filter(
        (o) => o?.concept_name && String(o.concept_name).toLowerCase() === "misuse of drugs" && o?.value_text
      );
      if (!caffeineObs.length && !drugsObs.length) {
        return;
      }
      if (caffeineObs.length) {
        const caffeineValues = new Set(
          caffeineObs.map((o) => String(o.value_text).trim())
        );
        const caffeineOrder = [
          "More than 2 cups of coffee",
          "More than 4 cups of tea",
          "More than 12 bars of chocolate",
          "More than one bottle of soda, energy, soft drink",
          "None"
        ];
        let labourCaffeine = null;
        for (const label of caffeineOrder) {
          if (caffeineValues.has(label)) {
            switch (label) {
              case "More than 2 cups of coffee":
                labourCaffeine = "more than 2 cups of coffee";
                break;
              case "More than 4 cups of tea":
                labourCaffeine = "more than 4 cups of tea";
                break;
              case "More than 12 bars of chocolate":
                labourCaffeine = "more than 12 bars of chocolate";
                break;
              case "More than one bottle of soda, energy, soft drink":
                labourCaffeine = "more than one bottle of soda, energy, soft drink";
                break;
              case "None":
                labourCaffeine = "none";
                break;
            }
            if (labourCaffeine) break;
          }
        }
        if (labourCaffeine) {
          formRef.value.setFormValue?.("Daily caffeine use", labourCaffeine);
        }
      }
      if (drugsObs.length) {
        const drugsValues = new Set(
          drugsObs.map((o) => String(o.value_text).trim())
        );
        const hasNone = drugsValues.has("None");
        const DRUG_LABELS = [
          { ancLabel: "Recently quit tobacco products", labourField: "Recently quit tobacco products" },
          { ancLabel: "Exposure to second hand smoke", labourField: "Exposure to second hand smoke" },
          { ancLabel: "Pica", labourField: "Pica" },
          { ancLabel: "Alcohol intake", labourField: "Alcohol" }
        ];
        for (const { ancLabel, labourField } of DRUG_LABELS) {
          let value = "No";
          if (!hasNone && drugsValues.has(ancLabel)) {
            value = "Yes";
          } else if (hasNone) {
            value = "No";
          }
          formRef.value.setFormValue?.(labourField, value);
        }
      }
    }
    watch(
      () => patient.value?.patientID,
      async (newID, oldID) => {
        if (newID && newID !== oldID) {
          await nextTick();
          await prefillWomanBehaviourFromAnc();
        }
      }
    );
    onMounted(async () => {
      await nextTick();
      await prefillWomanBehaviourFromAnc();
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT)) toastSuccess$1("Woman Behaviour data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": labourWomanBehaviourForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabourWomanBehaviour = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-51c8c477"]]);

const useLabourAllergyForm = () => {
  const labourAllergyFormSection = computed(() => {
    return [
      // ========== Question 1: DOES THE WOMAN HAVE ANY ALLERGIES? ==========
      {
        componentType: "checkboxField",
        header: "Does the woman have any allergies?",
        name: "allergies",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_text",
        value: [],
        options: [
          {
            label: "Albendazole",
            value: "albendazole"
          },
          {
            label: "Aluminium-hydroxide",
            value: "aluminium-hydroxide"
          },
          {
            label: "Calcium",
            value: "calcium"
          },
          {
            label: "Chamomile",
            value: "chamomile"
          },
          {
            label: "Folic-acid",
            value: "folic-acid"
          },
          {
            label: "Ginger",
            value: "ginger"
          },
          {
            label: "Fish",
            value: "fish"
          },
          {
            label: "Iron",
            value: "iron"
          },
          {
            label: "Sulfadoxine-Pyrimethamine",
            value: "sulfadoxine-pyrimethamine"
          },
          {
            label: "Mebendazole",
            value: "mebendazole"
          },
          {
            label: "Penicillin",
            value: "penicillin"
          },
          {
            label: "PrEP(TDF)",
            value: "prep-tdf"
          },
          {
            label: "Other",
            value: "Other"
          },
          {
            label: "None",
            value: "None",
            exclusive: true
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: OTHER ALLERGY SPECIFICATION ==========
      {
        componentType: "inputField",
        header: "Other (Specify)",
        name: "_allergies",
        obsValueType: "value_text",
        value: "",
        grid: { s: "12" },
        validation: (value) => {
          return null;
        },
        condition: (allValues) => {
          const allergies = allValues["allergies"];
          return Array.isArray(allergies) && allergies.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    labourAllergyFormSection
  };
};

const _hoisted_1$5 = { class: "container" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "LabourAllergies",
  setup(__props, { expose: __expose }) {
    const labourAllergyComposable = useLabourAllergyForm();
    const formRef = ref(null);
    const labourAllergyForm = computed(() => {
      return labourAllergyComposable.labourAllergyFormSection.value;
    });
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    function normalizeAllergyValue(value) {
      const v = String(value).trim();
      const lower = v.toLowerCase();
      if (lower === "none") return "None";
      if (lower === "other") return "Other";
      if (lower === "sulfadoxine-pyrimethamine") return "sulfadoxine-pyrimethamine";
      if (lower === "prep-tdf" || lower === "prep(tdf)" || lower === "prep tdf") return "prep-tdf";
      return lower;
    }
    async function prefillAllergiesFromAncMedicalHistory() {
      if (!formRef.value) return;
      if (!patient.value?.patientID) return;
      const encounters = await ObservationService.getObsByEncounterId(EncounterTypeId.MEDICAL_HISTORY);
      const allObs = (encounters || []).flatMap((encounter) => encounter?.obs || []);
      const allergiesObs = allObs.filter(
        (o) => o?.concept_name && String(o.concept_name).toLowerCase() === "allergies" && o?.value_text
      );
      const otherNotesObs = allObs.find(
        (o) => o?.concept_name && String(o.concept_name).toLowerCase() === "other allergy notes" && o?.value_text
      );
      if (!allergiesObs.length && !otherNotesObs) {
        return;
      }
      const selections = Array.from(
        new Set(allergiesObs.map((o) => normalizeAllergyValue(o.value_text)).filter((v) => v && v !== ""))
      );
      const finalSelections = selections.includes("None") ? ["None"] : selections;
      formRef.value.setFormValue("allergies", finalSelections);
      if (finalSelections.includes("Other")) {
        formRef.value.setFormValue("Other allergy notes", otherNotesObs?.value_text || "");
      } else {
        formRef.value.setFormValue("Other allergy notes", "");
      }
    }
    watch(
      () => patient.value?.patientID,
      async (newID, oldID) => {
        if (newID && newID !== oldID) {
          await nextTick();
          await prefillAllergiesFromAncMedicalHistory();
        }
      }
    );
    onMounted(async () => {
      await nextTick();
      await prefillAllergiesFromAncMedicalHistory();
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT)) toastSuccess$1("Allergies data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": labourAllergyForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabourAllergies = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9f080782"]]);

const useLabourPastSurgeriesForm = () => {
  const labourPastSurgeriesFormSection = computed(() => {
    return [
      // ========== Question 1: DOES THE WOMAN HAVE ANY PAST SURGERIES? ==========
      {
        componentType: "checkboxField",
        header: "Does the woman have any past surgeries done?",
        name: "Does the woman have any past surgeries done?",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        value: [],
        // Initialize as an empty array for multiple checkboxes
        options: [
          {
            label: "Dilation and currettage",
            value: "dilation and currettage"
          },
          {
            label: "Myomectomy",
            value: "myomectomy"
          },
          {
            label: "Removal of ovarian cyst",
            value: "Removal of ovarian cyst"
          },
          {
            label: "Oophorectomy",
            value: "oophorectomy"
          },
          {
            label: "Salpingectomy",
            value: "salpingectomy"
          },
          {
            label: "Cervical cone",
            value: "cervical cone"
          },
          {
            label: "Other",
            value: "Other"
          },
          {
            label: "None",
            value: "none",
            exclusive: true
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: OTHER SURGERY SPECIFICATION ==========
      {
        componentType: "inputField",
        header: "Other (Specify)",
        name: "_Does the woman have any past surgeries done?",
        obsValueType: "value_text",
        value: "",
        grid: { s: "12" },
        validation: (value) => {
          return null;
        },
        condition: (allValues) => {
          const surgeries = allValues["Does the woman have any past surgeries done?"];
          return Array.isArray(surgeries) && surgeries.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    labourPastSurgeriesFormSection
  };
};

const _hoisted_1$4 = { class: "container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LabourPastSurgeries",
  setup(__props, { expose: __expose }) {
    const labourPastSurgeriesComposable = useLabourPastSurgeriesForm();
    const formRef = ref(null);
    const labourPastSurgeriesForm = computed(() => {
      return labourPastSurgeriesComposable.labourPastSurgeriesFormSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT)) toastSuccess$1("Past Surgeries data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": labourPastSurgeriesForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabourPastSurgeries = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-9c9c2a59"]]);

const useLabourChronicHealthConditionsForm = () => {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const labourChronicHealthConditionsFormSection = computed(() => {
    return [
      // ========== Question 1: DOES THE WOMAN HAVE EXISTING CHRONIC HEALTH CONDITIONS? ==========
      {
        componentType: "checkboxField",
        header: "Does the woman have existing Chronic Health Conditions?",
        name: "chronic conditions",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        value: [],
        // Initialize as an empty array for multiple checkboxes
        options: [
          {
            label: "Auto-immune desease",
            value: "auto immune disease"
          },
          {
            label: "Asthma",
            value: "asthma"
          },
          {
            label: "Sickle cell",
            value: "sickle cell"
          },
          {
            label: "Anemia",
            value: "anemia"
          },
          {
            label: "Thalassemia",
            value: "thalassemia"
          },
          {
            label: "Gynae Cancer",
            value: "gynae cancer"
          },
          {
            label: "CCF",
            value: "ccf"
          },
          {
            label: "RHD",
            value: "rhd"
          },
          {
            label: "Gestational diabetes",
            value: "gestational diabetes"
          },
          {
            label: "Diabetes Type 1",
            value: "diabetes type 1"
          },
          {
            label: "Diabetes Type 2",
            value: "diabetes type 2"
          },
          {
            label: "Epilepsy",
            value: "epilepsy"
          },
          {
            label: "Hypertension",
            value: "hypertension"
          },
          {
            label: "Kidney Disease",
            value: "kidney disease"
          },
          {
            label: "TB",
            value: "tb"
          },
          {
            label: "Mental illness",
            value: "mental illness"
          },
          {
            label: "HIV positive",
            value: "hiv positive"
          },
          {
            label: "Other",
            value: "other"
          },
          {
            label: "None",
            value: "none",
            exclusive: true
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: OTHER CHRONIC CONDITION SPECIFICATION ==========
      {
        componentType: "inputField",
        header: "Other (Specify)",
        name: "Other notes",
        obsValueType: "value_text",
        value: "",
        grid: { s: "12" },
        validation: (value) => {
          return null;
        },
        condition: (allValues) => {
          const conditions = allValues["chronic conditions"];
          return Array.isArray(conditions) && conditions.includes("other");
        }
      },
      {
        componentType: "Dashes",
        condition: (allValues) => {
          const conditions = allValues["chronic conditions"];
          return Array.isArray(conditions) && conditions.includes("other");
        },
        grid: { s: "12" }
      },
      // ========== Question 4: IS THE CLIENT ON ART? (conditional on HIV positive) ==========
      {
        componentType: "radioButtonField",
        header: "Is the client on ART?",
        name: "Is client on ART",
        obsValueType: "value_coded",
        type: "inline",
        value: [],
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "no"
          }
        ],
        grid: { s: "12" },
        condition: (allValues) => {
          const conditions = allValues["chronic conditions"];
          return Array.isArray(conditions) && conditions.includes("hiv positive");
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 5: ART NUMBER (conditional on ART Yes) ==========
      {
        componentType: "inputField",
        header: "ART number",
        name: "Art number",
        obsValueType: "value_text",
        value: "",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allValues) => {
          const conditions = allValues["chronic conditions"];
          const artStatus = allValues["Is client on ART"];
          return Array.isArray(conditions) && conditions.includes("hiv positive") && artStatus === "Yes";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 6: FACILITY FOR ART (conditional on ART Yes) ==========
      {
        componentType: "multiSelectInputField",
        header: "Facility for ART",
        name: "facility for art",
        trackBy: "code",
        openDirection: "auto",
        icon: icons.search,
        placeholder: "Search for facility",
        obsValueType: "value_text",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        condition: (allValues) => {
          const conditions = allValues["chronic conditions"];
          const artStatus = allValues["Is client on ART"];
          return Array.isArray(conditions) && conditions.includes("hiv positive") && artStatus === "Yes";
        },
        options: facilityList.value.facilities || facilityList.value
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    labourChronicHealthConditionsFormSection
  };
};

const _hoisted_1$3 = { class: "container" };
const _hoisted_2$2 = { class: "anc-list" };
const _hoisted_3$2 = {
  key: 0,
  class: "see-more-container"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LabourChronicHealthConditions",
  setup(__props, { expose: __expose }) {
    const labourChronicHealthConditionsComposable = useLabourChronicHealthConditionsForm();
    const formRef = ref(null);
    const labourChronicHealthConditionsForm = computed(() => {
      return labourChronicHealthConditionsComposable.labourChronicHealthConditionsFormSection.value;
    });
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const ancChronicConditions = ref([]);
    const showAll = ref(false);
    const displayedChronicConditions = computed(() => {
      if (showAll.value || ancChronicConditions.value.length <= 3) {
        return ancChronicConditions.value;
      }
      return ancChronicConditions.value.slice(0, 3);
    });
    const toggleSeeMore = () => {
      showAll.value = !showAll.value;
    };
    async function loadAncChronicConditions() {
      if (!patient.value?.patientID) return;
      try {
        const encounters = await ObservationService.getObsByEncounterId(EncounterTypeId.MEDICAL_HISTORY);
        const allObs = (encounters || []).flatMap((encounter) => encounter?.obs || []);
        const chronicConditionsObs = allObs.filter(
          (o) => o?.concept_name && String(o.concept_name).toLowerCase() === "chronic conditions" && o?.value_text
        );
        if (!chronicConditionsObs.length) {
          ancChronicConditions.value = [];
          return;
        }
        const conditionValues = chronicConditionsObs.map((o) => String(o.value_text).trim()).filter((v) => v && v !== "");
        const normalizedConditions = conditionValues.map((value) => {
          const normalized = normalizeChronicConditionValue(value);
          return normalized ? normalized.charAt(0).toUpperCase() + normalized.slice(1) : value;
        });
        ancChronicConditions.value = Array.from(new Set(normalizedConditions.filter((v) => v !== null)));
      } catch (error) {
        console.error("Error loading ANC chronic conditions:", error);
        ancChronicConditions.value = [];
      }
    }
    function normalizeChronicConditionValue(conceptName) {
      const normalized = String(conceptName).trim().toLowerCase();
      const formValueMap = {
        "auto-immune disease": "auto immune disease",
        "auto immune disease": "auto immune disease",
        "autoimmune disease": "auto immune disease",
        "asthma": "asthma",
        "sickle cell": "sickle cell",
        "sickle cell disease": "sickle cell",
        "anemia": "anemia",
        "anaemia": "anemia",
        "thalassemia": "thalassemia",
        "gynae cancer": "gynae cancer",
        "gynecological cancer": "gynae cancer",
        "gynecologic cancer": "gynae cancer",
        "ccf": "ccf",
        "congestive cardiac failure": "ccf",
        "congestive heart failure": "ccf",
        "rhd": "rhd",
        "rheumatic heart disease": "rhd",
        "gestational diabetes": "gestational diabetes",
        "diabetes type 1": "diabetes type 1",
        "type 1 diabetes": "diabetes type 1",
        "diabetes type 2": "diabetes type 2",
        "type 2 diabetes": "diabetes type 2",
        "epilepsy": "epilepsy",
        "hypertension": "hypertension",
        "kidney disease": "kidney disease",
        "renal disease": "kidney disease",
        "tb": "tb",
        "tuberculosis": "tb",
        "mental illness": "mental illness",
        "hiv positive": "hiv positive",
        "hiv": "hiv positive",
        "other": "other",
        "none": "none"
      };
      if (formValueMap[normalized]) {
        return formValueMap[normalized];
      }
      for (const [key, value] of Object.entries(formValueMap)) {
        if (normalized.includes(key) || key.includes(normalized)) {
          return value;
        }
      }
      return normalized;
    }
    watch(
      () => patient.value?.patientID,
      async (newID, oldID) => {
        if (newID && newID !== oldID) {
          ancChronicConditions.value = [];
          await nextTick();
          await loadAncChronicConditions();
        }
      }
    );
    onMounted(async () => {
      await nextTick();
      await loadAncChronicConditions();
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT)) toastSuccess$1("Chronic Health Conditions data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        ancChronicConditions.value.length ? (openBlock(), createBlock(unref(IonCard), {
          key: 0,
          class: "section"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "sub_item_header dashed_bottom_border" }, "Existing chronic health conditions (ANC, NCD and OPD)", -1)),
                createBaseVNode("div", _hoisted_2$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(displayedChronicConditions.value, (condition, idx) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${condition}-${idx}`,
                      class: "anc-item"
                    }, toDisplayString(condition), 1);
                  }), 128))
                ]),
                ancChronicConditions.value.length > 3 ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                  createBaseVNode("span", {
                    class: "see-more-link",
                    onClick: toggleSeeMore
                  }, toDisplayString(showAll.value ? "See less" : "See more"), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": labourChronicHealthConditionsForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabourChronicHealthConditions = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-86b3ebd5"]]);

const _hoisted_1$2 = { class: "tetanus-immunization-wrapper" };
const _hoisted_2$1 = { class: "status-selection" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4 = { class: "status-content" };
const _hoisted_5 = { class: "status-label" };
const _hoisted_6 = { class: "status-desc" };
const _hoisted_7 = {
  key: 0,
  class: "dashed-separator"
};
const _hoisted_8 = {
  key: 1,
  class: "doses-section"
};
const _hoisted_9 = { class: "section-subtitle-header" };
const _hoisted_10 = { class: "progress-badge" };
const _hoisted_11 = { class: "doses-grid" };
const _hoisted_12 = { class: "input-header-row" };
const _hoisted_13 = { class: "input-label" };
const _hoisted_14 = {
  key: 0,
  class: "completed-badge"
};
const _hoisted_15 = { class: "input-wrapper" };
const _hoisted_16 = ["value", "onChange", "max", "min", "disabled"];
const _hoisted_17 = {
  key: 0,
  class: "error-message"
};
const _hoisted_18 = {
  key: 2,
  class: "doses-section"
};
const _hoisted_19 = { class: "field-group" };
const _hoisted_20 = { class: "dose-count-options" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = { class: "count-number" };
const _hoisted_23 = { class: "count-label" };
const _hoisted_24 = {
  key: 0,
  class: "dashed-separator"
};
const _hoisted_25 = { class: "doses-grid" };
const _hoisted_26 = { class: "input-header-row" };
const _hoisted_27 = { class: "input-label" };
const _hoisted_28 = {
  key: 0,
  class: "completed-badge"
};
const _hoisted_29 = { class: "input-wrapper" };
const _hoisted_30 = ["value", "onChange", "max", "min", "disabled"];
const _hoisted_31 = {
  key: 0,
  class: "error-message"
};
const _hoisted_32 = {
  key: 3,
  class: "doses-section"
};
const _hoisted_33 = { class: "field-group" };
const _hoisted_34 = { class: "radio-options" };
const _hoisted_35 = ["onClick"];
const _hoisted_36 = {
  key: 0,
  class: "radio-dot"
};
const _hoisted_37 = {
  key: 0,
  class: "dashed-separator-thin"
};
const _hoisted_38 = {
  key: 1,
  class: "field-group"
};
const _hoisted_39 = { class: "input-label" };
const _hoisted_40 = { class: "input-wrapper" };
const _hoisted_41 = { class: "text-input-container" };
const _hoisted_42 = ["value"];
const _hoisted_43 = {
  key: 4,
  class: "alert-box"
};
const _hoisted_44 = {
  key: 5,
  class: "dashed-separator"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LabourVaccine",
  setup(__props, { expose: __expose }) {
    const statusOptions = [
      { value: "Fully immunised", label: "Fully Immunised", description: "5 doses", icon: shieldCheckmarkOutline },
      { value: "Under immunised", label: "Under Immunised", description: "1-4 doses", icon: medicalOutline },
      { value: "No doses", label: "No Doses", description: "Not immunized", icon: closeCircleOutline },
      { value: "Unknown doses", label: "Unknown", description: "Status unclear", icon: helpCircleOutline }
    ];
    const reasonOptions = [
      { value: "stockout", label: "Stockout" },
      { value: "client is ill", label: "Client is ill" },
      { value: "client refused", label: "Client refused" },
      { value: "allergy", label: "Allergy to vaccine" },
      { value: "other", label: "Other (please specify)" }
    ];
    const immunizationStatus = ref("");
    const fullyDates = ref(Array(5).fill(""));
    const fullyErrors = ref(Array(5).fill(""));
    const underDates = ref(Array(4).fill(""));
    const underErrors = ref(Array(4).fill(""));
    const selectedDoseCount = ref(0);
    const noDosesReason = ref("");
    const otherReason = ref("");
    const completedFullyDoses = computed(() => {
      return fullyDates.value.filter((date) => date !== "").length;
    });
    const selectStatus = (status) => {
      immunizationStatus.value = status;
      fullyDates.value = Array(5).fill("");
      underDates.value = Array(4).fill("");
      fullyErrors.value = Array(5).fill("");
      underErrors.value = Array(4).fill("");
      selectedDoseCount.value = 0;
      noDosesReason.value = "";
      otherReason.value = "";
    };
    const selectDoseCount = (count) => {
      selectedDoseCount.value = count;
      underDates.value = Array(4).fill("");
      underErrors.value = Array(4).fill("");
    };
    const onFullyDateChange = (index, event) => {
      const target = event.target;
      const value = target?.value ?? "";
      handleFullyDateChange(index, value);
    };
    const handleFullyDateChange = (index, value) => {
      fullyDates.value[index] = value;
      fullyErrors.value[index] = "";
      if (index > 0 && fullyDates.value[index - 1]) {
        const currentDate = new Date(value);
        const previousDate = new Date(fullyDates.value[index - 1]);
        if (currentDate <= previousDate) {
          fullyErrors.value[index] = `Date must be after TTV ${index}`;
          return;
        }
      }
      for (let i = index + 1; i < 5; i++) {
        if (fullyDates.value[i]) {
          const subsequentDate = new Date(fullyDates.value[i]);
          const currentDate = new Date(value);
          if (subsequentDate <= currentDate) {
            fullyDates.value[i] = "";
            fullyErrors.value[i] = "";
          }
        }
      }
    };
    const onUnderDateChange = (index, event) => {
      const target = event.target;
      const value = target?.value ?? "";
      handleUnderDateChange(index, value);
    };
    const handleUnderDateChange = (index, value) => {
      underDates.value[index] = value;
      underErrors.value[index] = "";
      if (index > 0 && underDates.value[index - 1]) {
        const currentDate = new Date(value);
        const previousDate = new Date(underDates.value[index - 1]);
        if (currentDate <= previousDate) {
          underErrors.value[index] = `Date must be after TTV ${index}`;
          return;
        }
      }
      for (let i = index + 1; i < selectedDoseCount.value; i++) {
        if (underDates.value[i]) {
          const subsequentDate = new Date(underDates.value[i]);
          const currentDate = new Date(value);
          if (subsequentDate <= currentDate) {
            underDates.value[i] = "";
            underErrors.value[i] = "";
          }
        }
      }
    };
    const handleReasonChange = (value) => {
      noDosesReason.value = value;
      if (value !== "other") {
        otherReason.value = "";
      }
    };
    const handleOtherReasonChange = (value) => {
      otherReason.value = value;
    };
    const getValues = () => {
      const values = {
        "The woman received tetanus doses for immunization?": immunizationStatus.value
      };
      if (immunizationStatus.value === "Fully immunised") {
        for (let i = 0; i < 5; i++) {
          values[`tt1Date${i + 1}`] = fullyDates.value[i];
        }
      }
      if (immunizationStatus.value === "Under immunised") {
        values["Number of tetanus doses"] = selectedDoseCount.value === 1 ? "one dose" : selectedDoseCount.value === 2 ? "two doses" : selectedDoseCount.value === 3 ? "three doses" : "four doses";
        for (let i = 0; i < selectedDoseCount.value; i++) {
          values[`tt2Date${i + 1}`] = underDates.value[i];
        }
      }
      if (immunizationStatus.value === "No doses") {
        values["Reason Tetanus toxoid (TT) was not conducted"] = noDosesReason.value;
        if (noDosesReason.value === "other") {
          values["Other"] = otherReason.value;
        }
      }
      return values;
    };
    const validate = () => {
      if (!immunizationStatus.value) {
        return "Tetanus immunization status is required";
      }
      if (immunizationStatus.value === "Fully immunised") {
        for (let i = 0; i < 5; i++) {
          if (!fullyDates.value[i]) {
            return `TTV Dose ${i + 1} date is required`;
          }
          if (fullyErrors.value[i]) {
            return fullyErrors.value[i];
          }
        }
      }
      if (immunizationStatus.value === "Under immunised") {
        if (!selectedDoseCount.value) {
          return "Please select number of doses";
        }
        for (let i = 0; i < selectedDoseCount.value; i++) {
          if (!underDates.value[i]) {
            return `TTV Dose ${i + 1} date is required`;
          }
          if (underErrors.value[i]) {
            return underErrors.value[i];
          }
        }
      }
      if (immunizationStatus.value === "No doses") {
        if (!noDosesReason.value) {
          return "Please select a reason";
        }
        if (noDosesReason.value === "other" && !otherReason.value) {
          return "Please specify other reason";
        }
      }
      return null;
    };
    watch(getValues, (newValues) => {
      console.log("Current form values:", newValues);
    });
    __expose({
      getValues,
      validate
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[9] || (_cache[9] = createStaticVNode('<div class="dashed-separator" data-v-dd1bd107></div><div class="field-header-container" data-v-dd1bd107><div class="header-with-icon" data-v-dd1bd107><div data-v-dd1bd107><h6 class="field-header" data-v-dd1bd107>The woman received tetanus doses for immunization?<span class="required-asterisk" data-v-dd1bd107>*</span></h6></div></div></div>', 2)),
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(statusOptions, (status) => {
            return createBaseVNode("div", {
              key: status.value,
              class: normalizeClass(["status-option", { selected: immunizationStatus.value === status.value }]),
              onClick: ($event) => selectStatus(status.value)
            }, [
              createVNode(unref(IonIcon), {
                icon: status.icon,
                class: "status-icon"
              }, null, 8, ["icon"]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("span", _hoisted_5, toDisplayString(status.label), 1),
                createBaseVNode("span", _hoisted_6, toDisplayString(status.description), 1)
              ])
            ], 10, _hoisted_3$1);
          }), 64))
        ]),
        immunizationStatus.value ? (openBlock(), createElementBlock("div", _hoisted_7)) : createCommentVNode("", true),
        immunizationStatus.value === "Fully immunised" ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "subtitle-left" }, [
              createBaseVNode("span", null, "Complete all 5 TDV dose dates")
            ], -1)),
            createBaseVNode("span", _hoisted_10, toDisplayString(completedFullyDoses.value) + "/5", 1)
          ]),
          createBaseVNode("div", _hoisted_11, [
            (openBlock(), createElementBlock(Fragment, null, renderList(5, (dose) => {
              return createBaseVNode("div", {
                key: `fully-${dose}`,
                class: "dose-field-group"
              }, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("label", _hoisted_13, [
                    createTextVNode(" Date for TDV " + toDisplayString(dose) + " ", 1),
                    _cache[2] || (_cache[2] = createBaseVNode("span", { class: "required-asterisk" }, "*", -1))
                  ]),
                  fullyDates.value[dose - 1] ? (openBlock(), createElementBlock("span", _hoisted_14, [
                    createVNode(unref(IonIcon), { icon: unref(checkmarkCircleOutline) }, null, 8, ["icon"])
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("input", {
                    type: "date",
                    value: fullyDates.value[dose - 1],
                    onChange: ($event) => onFullyDateChange(dose - 1, $event),
                    max: (/* @__PURE__ */ new Date()).toISOString(),
                    min: dose > 1 && fullyDates.value[dose - 2] ? fullyDates.value[dose - 2] : void 0,
                    disabled: dose > 1 && !fullyDates.value[dose - 2],
                    class: normalizeClass(["date-input", { "has-error": fullyErrors.value[dose - 1], disabled: dose > 1 && !fullyDates.value[dose - 2] }])
                  }, null, 42, _hoisted_16),
                  createVNode(unref(IonIcon), {
                    icon: dose > 1 && !fullyDates.value[dose - 2] ? unref(lockClosedOutline) : unref(calendarOutline),
                    class: "input-icon-readonly"
                  }, null, 8, ["icon"])
                ]),
                fullyErrors.value[dose - 1] ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  createVNode(unref(IonIcon), {
                    icon: unref(alertCircleOutline),
                    class: "error-icon"
                  }, null, 8, ["icon"]),
                  createTextVNode(" " + toDisplayString(fullyErrors.value[dose - 1]), 1)
                ])) : createCommentVNode("", true)
              ]);
            }), 64))
          ])
        ])) : createCommentVNode("", true),
        immunizationStatus.value === "Under immunised" ? (openBlock(), createElementBlock("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, [
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "header-with-icon" }, [
              createBaseVNode("div", null, [
                createBaseVNode("h6", { class: "field-header" }, [
                  createTextVNode("Number of doses received "),
                  createBaseVNode("span", { class: "required-asterisk" }, "*")
                ])
              ])
            ], -1)),
            createBaseVNode("div", _hoisted_20, [
              (openBlock(), createElementBlock(Fragment, null, renderList([1, 2, 3, 4], (count) => {
                return createBaseVNode("button", {
                  key: count,
                  type: "button",
                  class: normalizeClass(["dose-count-btn", { active: selectedDoseCount.value === count }]),
                  onClick: ($event) => selectDoseCount(count)
                }, [
                  createBaseVNode("span", _hoisted_22, toDisplayString(count), 1),
                  createBaseVNode("span", _hoisted_23, "dose" + toDisplayString(count > 1 ? "s" : ""), 1)
                ], 10, _hoisted_21);
              }), 64))
            ])
          ]),
          selectedDoseCount.value ? (openBlock(), createElementBlock("div", _hoisted_24)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_25, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(selectedDoseCount.value, (dose) => {
              return openBlock(), createElementBlock("div", {
                key: `under-${dose}`,
                class: "dose-field-group"
              }, [
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("label", _hoisted_27, [
                    createTextVNode(" Date for TDV " + toDisplayString(dose) + " ", 1),
                    _cache[4] || (_cache[4] = createBaseVNode("span", { class: "required-asterisk" }, "*", -1))
                  ]),
                  underDates.value[dose - 1] ? (openBlock(), createElementBlock("span", _hoisted_28, [
                    createVNode(unref(IonIcon), { icon: unref(checkmarkCircleOutline) }, null, 8, ["icon"])
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("input", {
                    type: "date",
                    value: underDates.value[dose - 1],
                    onChange: ($event) => onUnderDateChange(dose - 1, $event),
                    max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                    min: dose > 1 && underDates.value[dose - 2] ? underDates.value[dose - 2] : void 0,
                    disabled: dose > 1 && !underDates.value[dose - 2],
                    class: normalizeClass(["date-input", { "has-error": underErrors.value[dose - 1], disabled: dose > 1 && !underDates.value[dose - 2] }])
                  }, null, 42, _hoisted_30),
                  createVNode(unref(IonIcon), {
                    icon: dose > 1 && !underDates.value[dose - 2] ? unref(lockClosedOutline) : unref(calendarOutline),
                    class: "input-icon-readonly"
                  }, null, 8, ["icon"])
                ]),
                underErrors.value[dose - 1] ? (openBlock(), createElementBlock("div", _hoisted_31, [
                  createVNode(unref(IonIcon), {
                    icon: unref(alertCircleOutline),
                    class: "error-icon"
                  }, null, 8, ["icon"]),
                  createTextVNode(" " + toDisplayString(underErrors.value[dose - 1]), 1)
                ])) : createCommentVNode("", true)
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        immunizationStatus.value === "No doses" ? (openBlock(), createElementBlock("div", _hoisted_32, [
          createBaseVNode("div", _hoisted_33, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "header-with-icon" }, [
              createBaseVNode("div", null, [
                createBaseVNode("h6", { class: "field-header" }, [
                  createTextVNode("Reason TDV was not conducted "),
                  createBaseVNode("span", { class: "required-asterisk" }, "*")
                ])
              ])
            ], -1)),
            createBaseVNode("div", _hoisted_34, [
              (openBlock(), createElementBlock(Fragment, null, renderList(reasonOptions, (reason) => {
                return createBaseVNode("div", {
                  key: reason.value,
                  class: normalizeClass(["radio-option", { selected: noDosesReason.value === reason.value }]),
                  onClick: ($event) => handleReasonChange(reason.value)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["radio-circle", { checked: noDosesReason.value === reason.value }])
                  }, [
                    noDosesReason.value === reason.value ? (openBlock(), createElementBlock("div", _hoisted_36)) : createCommentVNode("", true)
                  ], 2),
                  createBaseVNode("label", null, toDisplayString(reason.label), 1)
                ], 10, _hoisted_35);
              }), 64))
            ])
          ]),
          noDosesReason.value === "other" ? (openBlock(), createElementBlock("div", _hoisted_37)) : createCommentVNode("", true),
          noDosesReason.value === "other" ? (openBlock(), createElementBlock("div", _hoisted_38, [
            createBaseVNode("label", _hoisted_39, [
              createVNode(unref(IonIcon), {
                icon: unref(createOutline),
                class: "label-icon"
              }, null, 8, ["icon"]),
              _cache[6] || (_cache[6] = createTextVNode(" Specify other reasons ", -1)),
              _cache[7] || (_cache[7] = createBaseVNode("span", { class: "required-asterisk" }, "*", -1))
            ]),
            createBaseVNode("div", _hoisted_40, [
              createBaseVNode("div", _hoisted_41, [
                createBaseVNode("input", {
                  type: "text",
                  value: otherReason.value,
                  onInput: _cache[0] || (_cache[0] = (e) => handleOtherReasonChange(e.target.value)),
                  placeholder: "Please specify the reason...",
                  class: "text-input"
                }, null, 40, _hoisted_42),
                createVNode(unref(IonIcon), {
                  icon: unref(createOutline),
                  class: "input-icon"
                }, null, 8, ["icon"])
              ])
            ])
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        immunizationStatus.value === "Unknown doses" ? (openBlock(), createElementBlock("div", _hoisted_43, [
          createVNode(unref(IonIcon), {
            icon: unref(alertCircleOutline),
            class: "alert-icon"
          }, null, 8, ["icon"]),
          _cache[8] || (_cache[8] = createBaseVNode("div", { class: "alert-content" }, [
            createBaseVNode("div", { class: "alert-title" }, "Unknown Immunization Status"),
            createBaseVNode("div", { class: "alert-text" }, " The woman's tetanus immunization history is not known. Please try to obtain this information from health records or previous documentation. ")
          ], -1))
        ])) : createCommentVNode("", true),
        immunizationStatus.value ? (openBlock(), createElementBlock("div", _hoisted_44)) : createCommentVNode("", true)
      ]);
    };
  }
});

const LabourVaccineHistory = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dd1bd107"]]);

const useLabourMedicationsForm = () => {
  const labourMedicationsFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "Which medications is the woman currently prescribed?",
        name: "Which medications is the woman currently prescribed?",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        value: [],
        options: [
          { label: "Oral PreP for HIV", value: "Oral PreP for HIV" },
          { label: "Analgesic", value: "Analgesic" },
          { label: "Anti-consulsive", value: "Anti-consulsive" },
          { label: "Anti-TB", value: "Anti-TB" },
          { label: "Antihelmintic", value: "Antihelmintic" },
          { label: "Antimarials", value: "Antimarials" },
          { label: "Antitussive", value: "Antitussive" },
          { label: "Aspirin", value: "Aspirin" },
          { label: "Calcium", value: "Calcium" },
          { label: "Doxylamine", value: "Doxylamine" },
          { label: "Hematinic", value: "Hematinic" },
          { label: "Iron", value: "Iron" },
          { label: "Metoclopramide", value: "Metoclopramide" },
          { label: "Thyroid medication", value: "Thyroid medication" },
          { label: "Antiacids", value: "Antiacids" },
          { label: "Anti-psychotics", value: "Anti-psychotics" },
          { label: "Anti-diabetic", value: "Anti-diabetic" },
          { label: "Anti-hypertensive", value: "Anti-hypertensive" },
          { label: "ARVs", value: "ARVs" },
          { label: "Antivirals", value: "Antivirals" },
          { label: "Asthamatic", value: "Asthamatic" },
          { label: "Co-trimoxazole", value: "Co-trimoxazole" },
          { label: "Folic acid", value: "Folic acid" },
          { label: "Hemorrhoidal medication", value: "Hemorrhoidal medication" },
          { label: "Magnesium", value: "Magnesium" },
          { label: "Multivitamin", value: "Multivitamin" },
          { label: "Vitamin A", value: "Vitamin A" },
          { label: "Other", value: "other" },
          { label: "None", value: "none", exclusive: true }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "inputField",
        header: "Other (Specify)",
        name: "_Which medications is the woman currently prescribed?",
        obsValueType: "value_text",
        value: "",
        grid: { s: "12" },
        validation: StandardValidations.required,
        condition: (allValues) => {
          const meds = allValues["Which medications is the woman currently prescribed?"];
          return Array.isArray(meds) && meds.includes("other");
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allValues) => {
          const meds = allValues["Which medications is the woman currently prescribed?"];
          return Array.isArray(meds) && meds.includes("other");
        }
      }
    ];
  });
  return { labourMedicationsFormSection };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabourMedications",
  setup(__props, { expose: __expose }) {
    const labourMedicationsComposable = useLabourMedicationsForm();
    const formRef = ref(null);
    const labourMedicationsForm = computed(() => {
      return labourMedicationsComposable.labourMedicationsFormSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT)) toastSuccess$1("Medications data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": labourMedicationsForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabourMedications = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2dc0ab45"]]);

const useLabourPastPregnancyComplicationsForm = () => {
  const labourPastPregnancyComplicationsFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "Did the woman have any of the complications during the past pregnancies?",
        name: "past pregnancies complications",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        value: [],
        options: [
          { label: "Asphyxia", value: "Asphyxia" },
          { label: "Pre-eclampsia", value: "pre-eclampsia" },
          { label: "Eclampsia", value: "eclampsia" },
          { label: "Puerperal Sepsis", value: "puerperal sepsis" },
          { label: "Baby died within 24hrs of birth", value: "baby died within 24hrs of birth" },
          { label: "Convulsions", value: "convulsions" },
          { label: "Gestational diabetes mellitus", value: "gestational diabetes mellitus" },
          { label: "Heavy bleeding", value: "heavy bleeding" },
          { label: "Macrosomia", value: "macrosomia" },
          { label: "Perineal tear (3rd or 4th degree)", value: "perineal tear (3rd or 4th degree)" },
          { label: "Other", value: "other" },
          { label: "None", value: "none", exclusive: true }
        ],
        grid: { s: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "inputField",
        header: "Other (Specify)",
        name: "_past pregnancies complications",
        obsValueType: "value_text",
        value: "",
        grid: { s: "12" },
        validation: StandardValidations.required,
        condition: (allValues) => {
          const complications = allValues["past pregnancies complications"];
          return Array.isArray(complications) && complications.includes("other");
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allValues) => {
          const complications = allValues["past pregnancies complications"];
          return Array.isArray(complications) && complications.includes("other");
        }
      }
    ];
  });
  return { labourPastPregnancyComplicationsFormSection };
};

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "anc-list" };
const _hoisted_3 = {
  key: 0,
  class: "see-more-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabourComplications",
  setup(__props, { expose: __expose }) {
    const composable = useLabourPastPregnancyComplicationsForm();
    const formRef = ref(null);
    const labourPastPregnancyComplicationsForm = computed(() => {
      return composable.labourPastPregnancyComplicationsFormSection.value;
    });
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const ancComplications = ref([]);
    const showAll = ref(false);
    const displayedComplications = computed(() => {
      if (showAll.value || ancComplications.value.length <= 3) {
        return ancComplications.value;
      }
      return ancComplications.value.slice(0, 3);
    });
    const toggleSeeMore = () => {
      showAll.value = !showAll.value;
    };
    async function loadAncPastPregnancyComplications() {
      if (!patient.value?.patientID) return;
      const encounters = await ObservationService.getObsByEncounterId(EncounterTypeId.OBSTETRIC_HISTORY);
      const allObs = (encounters || []).flatMap((e) => e?.obs || []);
      const values = allObs.filter(
        (o) => o?.concept_name && String(o.concept_name).toLowerCase() === "past pregnancies complications" && o?.value_text
      ).map((o) => String(o.value_text).trim()).filter((v) => v && v !== "");
      ancComplications.value = Array.from(new Set(values));
    }
    watch(
      () => patient.value?.patientID,
      async (newID, oldID) => {
        if (newID && newID !== oldID) {
          ancComplications.value = [];
          await nextTick();
          await loadAncPastPregnancyComplications();
        }
      }
    );
    onMounted(async () => {
      await nextTick();
      await loadAncPastPregnancyComplications();
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT)) toastSuccess("Past Pregnancy Complications data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        ancComplications.value.length ? (openBlock(), createBlock(unref(IonCard), {
          key: 0,
          class: "section"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "sub_item_header dashed_bottom_border" }, "Past pregnancy complications (ANC)", -1)),
                createBaseVNode("div", _hoisted_2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(displayedComplications.value, (c, idx) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${c}-${idx}`,
                      class: "anc-item"
                    }, toDisplayString(c), 1);
                  }), 128))
                ]),
                ancComplications.value.length > 3 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createBaseVNode("span", {
                    class: "see-more-link",
                    onClick: toggleSeeMore
                  }, toDisplayString(showAll.value ? "See less" : "See more"), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": labourPastPregnancyComplicationsForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabourPastPregnancyComplications = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e08a17cc"]]);

export { LabourPastPregnancyComplications as L, LabourAllergies as a, LabourMedications as b, LabourVaccineHistory as c, LabourChronicHealthConditions as d, LabourPastSurgeries as e, LabourWomanBehaviour as f };
