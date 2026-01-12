import { d as computed, q as defineComponent, r as ref, w as watch, a2 as onMounted, n as nextTick, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx, E as unref, b7 as IonCardHeader, b6 as IonCardTitle, a5 as createTextVNode, b9 as IonCardContent, O as createBlock, bI as IonCard } from './vendor-BPW-J91F.js';
import { n as icons, u as useDemographicsStore, C as StandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc } from '../index-Bam205gA.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';

const useMedicationsForm = () => {
  const resetForm = () => {
  };
  const medicationsFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "Which medications is the woman currently prescribed?",
        name: "Which medications is the woman currently prescribed?",
        type: "multiple",
        twoColumns: true,
        options: [
          { value: "oral prep for hiv", label: "Oral PreP for HIV" },
          { value: "analgesic", label: "Analgesic" },
          { value: "anti-consulsive", label: "Anti-consulsive" },
          { value: "anti-tb", label: "Anti-TB" },
          { value: "antihelmintic", label: "Antihelmintic" },
          { value: "antimarials", label: "Antimarials" },
          { value: "antitussive", label: "Antitussive" },
          { value: "aspirin", label: "Aspirin" },
          { value: "calcium", label: "Calcium" },
          { value: "doxylamine", label: "Doxylamine" },
          { value: "hematinic", label: "Hematinic" },
          { value: "iron", label: "Iron" },
          { value: "metoclopramide", label: "Metoclopramide" },
          { value: "thyroid medication", label: "Thyroid medication" },
          { value: "antiacids", label: "Antiacids" },
          { value: "anti-psychotics", label: "Anti-psychotics" },
          { value: "anti-diabetic", label: "Anti-diabetic" },
          { value: "anti-hypertensive", label: "Anti-hypertensive" },
          { value: "arvs", label: "ARVs" },
          { value: "antivirals", label: "Antivirals" },
          { value: "asthamatic", label: "Asthamatic" },
          { value: "co-trimoxazole", label: "Co-trimoxazole" },
          { value: "folic acid", label: "Folic acid" },
          { value: "hemorrhoidal medication", label: "Hemorrhoidal medication" },
          { value: "magnesium", label: "Magnesium" },
          { value: "multivitamin", label: "Multivitamin" },
          { value: "vitamin a", label: "Vitamin A" },
          { value: "Other", label: "Other" },
          { value: "None", label: "None" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || Array.isArray(value) && value.length === 0) {
            return "Please select at least one medication or 'None'";
          }
          return null;
        },
        onChange: (value, allFormValues) => {
          if (!Array.isArray(value)) return {};
          const updates = {};
          const lastSelected = value[value.length - 1];
          if (lastSelected === "None") {
            updates["Which medications is the woman currently prescribed?"] = ["None"];
            updates["Other medication notes"] = "";
            return updates;
          }
          if (value.includes("None") && lastSelected !== "None") {
            const filteredValue = value.filter((v) => v !== "None");
            updates["Which medications is the woman currently prescribed?"] = filteredValue;
            if (!filteredValue.includes("Other")) {
              updates["Other medication notes"] = "";
            }
            return updates;
          }
          if (!value.includes("Other")) {
            updates["Other medication notes"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "inputField",
        header: "Specify other medications",
        name: "Other medication notes",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const medications = allFormValues?.["Which medications is the woman currently prescribed?"];
          if (Array.isArray(medications) && medications.includes("Other")) {
            if (!value || value === "") {
              return "Please specify other medications";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const medications = allFormValues["Which medications is the woman currently prescribed?"];
          return Array.isArray(medications) && medications.includes("Other");
        }
      }
    ];
  });
  return {
    medicationsFormSection,
    resetForm
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Medications",
  setup(__props, { expose: __expose }) {
    const medicationsComposable = useMedicationsForm();
    const medicationsFormRef = ref(null);
    const medicationsFormKey = ref(0);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          medicationsFormKey.value++;
          await nextTick();
        }
      }
    );
    const onSubmit = async () => {
      const medicationsErrors = medicationsFormRef.value?.validateForm();
      if (medicationsErrors) {
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const medicationsData = medicationsFormRef.value?.getFormValues() || {};
      try {
        const observations = await processMedications(medicationsData);
        if (observations.length === 0) {
          toastWarning("No medications data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(observations, EncounterTypeId.MEDICATIONS);
        medicationsFormKey.value++;
        await nextTick();
        toastSuccess("Medications saved successfully");
        return true;
      } catch (error) {
        toastWarning(error?.message || "Failed to save medications");
        return false;
      }
    };
    const processMedications = async (data) => {
      const observations = [];
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "") continue;
        if (Array.isArray(value)) {
          for (const item of value) {
            const itemValue = typeof item === "object" && item !== null ? item.value || item.name : item;
            if (itemValue && itemValue !== "") {
              observations.push(await ObservationService.buildValueText(key, String(itemValue)));
            }
          }
        } else if (typeof value === "string" || typeof value === "number") {
          observations.push(await ObservationService.buildValueText(key, String(value)));
        } else if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText("Medication finding", key));
        }
      }
      return observations;
    };
    onMounted(async () => {
      await nextTick();
    });
    const medicationsForm = computed(() => {
      return medicationsComposable.medicationsFormSection.value;
    });
    __expose({
      validateForm: () => {
        return medicationsFormRef.value?.validateForm();
      },
      onSubmit,
      resetForm: () => {
        medicationsFormKey.value++;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), { class: "sub_item_header" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Current Medications", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  formData: medicationsForm.value,
                  ref_key: "medicationsFormRef",
                  ref: medicationsFormRef,
                  key: medicationsFormKey.value
                }, null, 8, ["formData"]))
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

const Medications = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-41854088"]]);

const useWomanBehaviourForm = () => {
  const resetForm = () => {
  };
  const womanBehaviourFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Daily caffeine intake",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        name: "Daily caffeine use",
        type: "multiple",
        required: true,
        options: [
          { value: "More than 2 cups of coffee", label: "More than 2 cups of coffee" },
          { value: "More than 4 cups of tea", label: "More than 4 cups of tea" },
          { value: "More than 12 bars of chocolate", label: "More than 12 bars of chocolate" },
          { value: "More than one bottle of soda, energy, soft drink", label: "More than one bottle of soda, energy, soft drink" },
          { value: "None", label: "None" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || Array.isArray(value) && value.length === 0) {
            return "Please select at least one option for daily caffeine intake";
          }
          return null;
        },
        onChange: (value, allFormValues) => {
          if (!Array.isArray(value)) return {};
          const updates = {};
          const lastSelected = value[value.length - 1];
          if (lastSelected === "None") {
            updates["Daily caffeine use"] = ["None"];
            return updates;
          }
          if (value.includes("None") && lastSelected !== "None") {
            const filteredValue = value.filter((v) => v !== "None");
            updates["Daily caffeine use"] = filteredValue;
            return updates;
          }
          return updates;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== DRUG AND SUBSTANCE ABUSE ==========
      {
        componentType: "Heading",
        name: "Drug and substance abuse",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        name: "Misuse of drugs",
        type: "multiple",
        required: true,
        options: [
          { value: "Recently quit tobacco products", label: "Recently quit tobacco products" },
          { value: "Exposure to second hand smoke", label: "Exposure to second hand smoke" },
          { value: "Pica", label: "Pica" },
          { value: "Alcohol intake", label: "Alcohol intake" },
          { value: "None", label: "None" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || Array.isArray(value) && value.length === 0) {
            return "Please select at least one option for drug and substance abuse";
          }
          return null;
        },
        onChange: (value, allFormValues) => {
          if (!Array.isArray(value)) return {};
          const updates = {};
          const lastSelected = value[value.length - 1];
          if (lastSelected === "None") {
            updates["Misuse of drugs"] = ["None"];
            return updates;
          }
          if (value.includes("None") && lastSelected !== "None") {
            const filteredValue = value.filter((v) => v !== "None");
            updates["Misuse of drugs"] = filteredValue;
            return updates;
          }
          return updates;
        }
      }
    ];
  });
  return {
    resetForm,
    womanBehaviourFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WomanBehaviour",
  setup(__props, { expose: __expose }) {
    const womanBehaviourFormComposable = useWomanBehaviourForm();
    const formRef = ref(null);
    const formKey = ref(0);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          formKey.value++;
          await nextTick();
        }
      }
    );
    const onSubmit = async () => {
      if (!formRef.value) {
        return false;
      }
      const validationErrors = formRef.value.validateForm();
      if (validationErrors) {
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const formData = formRef.value.getFormValues();
      try {
        const observations = await processWomanBehaviour(formData);
        if (observations.length === 0) {
          toastWarning("No woman behaviour data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(observations, EncounterTypeId.WOMAN_BEHAVIOUR);
        formKey.value++;
        await nextTick();
        toastSuccess("Woman behaviour saved successfully");
        return true;
      } catch (error) {
        toastWarning(error?.message || "Failed to save woman behaviour data");
        return false;
      }
    };
    const processWomanBehaviour = async (data) => {
      const observations = [];
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "") continue;
        if (Array.isArray(value)) {
          for (const item of value) {
            const itemValue = typeof item === "object" && item !== null ? item.value || item.name : item;
            if (itemValue && itemValue !== "") {
              observations.push(await ObservationService.buildValueText(key, String(itemValue)));
            }
          }
        } else if (typeof value === "string" || typeof value === "number") {
          observations.push(await ObservationService.buildValueText(key, String(value)));
        } else if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText("Behaviour finding", key));
        }
      }
      return observations;
    };
    onMounted(async () => {
      await nextTick();
    });
    const womanBehaviourForm = computed(() => {
      return womanBehaviourFormComposable.womanBehaviourFormSection.value;
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      resetForm: () => {
        formKey.value++;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  formData: womanBehaviourForm.value,
                  ref_key: "formRef",
                  ref: formRef,
                  key: formKey.value
                }, null, 8, ["formData"]))
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

const WomanBehaviour = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-434b6dcd"]]);

const useMedicalHistoryForm = () => {
  const resetForm = () => {
  };
  const pastSurgeriesFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        // header: "Does the woman have any past medical and surgical?",
        name: "past surgeries",
        type: "multiple",
        twoColumns: true,
        options: [
          { value: "dilation and currettage", label: "Dilation and currettage" },
          { value: "myomectomy", label: "Myomectomy" },
          { value: "removal of ovarian cyst", label: "Removal of ovarian cyst" },
          { value: "oophorectomy", label: "Oophorectomy" },
          { value: "salpingectomy", label: "Salpingectomy" },
          { value: "cervical cone", label: "Cervical cone" },
          { value: "Other", label: "Other" },
          { value: "None", label: "None" }
        ],
        grid: { s: "12", md: "6" },
        onChange: (value, allFormValues) => {
          if (!Array.isArray(value)) return {};
          const updates = {};
          const lastSelected = value[value.length - 1];
          if (lastSelected === "None") {
            updates["past surgeries"] = ["None"];
            updates["Other surgery notes"] = "";
            return updates;
          }
          if (value.includes("None") && lastSelected !== "None") {
            const filteredValue = value.filter((v) => v !== "None");
            updates["past surgeries"] = filteredValue;
            if (!filteredValue.includes("Other")) {
              updates["Other surgery notes"] = "";
            }
            return updates;
          }
          if (!value.includes("Other")) {
            updates["Other surgery notes"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "inputField",
        header: "Specify other surgery",
        name: "Other surgery notes",
        icon: icons.editPen,
        required: true,
        twoColumns: true,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const surgeries = allFormValues?.["past surgeries"];
          if (Array.isArray(surgeries) && surgeries.includes("Other")) {
            if (!value || value === "") {
              return "Please specify other surgery";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const surgeries = allFormValues["past surgeries"];
          return Array.isArray(surgeries) && surgeries.includes("Other");
        }
      }
    ];
  });
  const allergiesFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        // header: "Does the woman have any allergies?",
        name: "allergies",
        type: "multiple",
        twoColumns: true,
        options: [
          { value: "albendazole", label: "Albendazole" },
          { value: "aluminium-hydroxide", label: "Aluminium-hydroxide" },
          { value: "calcium", label: "Calcium" },
          { value: "chamomile", label: "Chamomile" },
          { value: "folic-acid", label: "Folic-acid" },
          { value: "ginger", label: "Ginger" },
          { value: "fish", label: "Fish" },
          { value: "iron", label: "Iron" },
          { value: "sulfadoxine-pyrimethamine", label: "Sulfadoxine-Pyrimethamine" },
          { value: "mebendazole", label: "Mebendazole" },
          { value: "penicillin", label: "Penicillin" },
          { value: "prep-tdf", label: "PrEP(TDF)" },
          { value: "Other", label: "Other" },
          { value: "None", label: "None" }
        ],
        grid: { s: "12" },
        onChange: (value, allFormValues) => {
          if (!Array.isArray(value)) return {};
          const updates = {};
          const lastSelected = value[value.length - 1];
          if (lastSelected === "None") {
            updates["allergies"] = ["None"];
            updates["Other allergy notes"] = "";
            return updates;
          }
          if (value.includes("None") && lastSelected !== "None") {
            const filteredValue = value.filter((v) => v !== "None");
            updates["allergies"] = filteredValue;
            if (!filteredValue.includes("Other")) {
              updates["Other allergy notes"] = "";
            }
            return updates;
          }
          if (!value.includes("Other")) {
            updates["Other allergy notes"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "inputField",
        header: "Specify other allergy",
        name: "Other allergy notes",
        icon: icons.editPen,
        required: true,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const allergies = allFormValues?.["allergies"];
          if (Array.isArray(allergies) && allergies.includes("Other")) {
            if (!value || value === "") {
              return "Please specify other allergy";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const allergies = allFormValues["allergies"];
          return Array.isArray(allergies) && allergies.includes("Other");
        }
      }
    ];
  });
  const chronicConditionsFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        // header: "Does the woman have existing Chronic Health Conditions? *",
        name: "chronic conditions",
        type: "multiple",
        twoColumns: true,
        options: [
          { value: "auto immune disease", label: "Auto-immune desease" },
          { value: "asthma", label: "Asthma" },
          { value: "sickle cell", label: "Sickle cell" },
          { value: "anemia", label: "Anemia" },
          { value: "hiv positive", label: "HIV positive" },
          { value: "thalassemia", label: "Thalassemia" },
          { value: "gynae cancer", label: "Gynae Cancer" },
          { value: "ccf", label: "CCF" },
          { value: "rhd", label: "RHD" },
          { value: "gestational diabetes", label: "Gestational diabetes" },
          { value: "diabetes type 1", label: "Diabetes Type 1" },
          { value: "diabetes type 2", label: "Diabetes Type 2" },
          { value: "epilepsy", label: "Epilepsy" },
          { value: "hypertension", label: "Hypertension" },
          { value: "kidney disease", label: "Kidney Disease" },
          { value: "tb", label: "TB" },
          { value: "mental illness", label: "Mental illness" },
          { value: "Other", label: "Other" },
          { value: "None", label: "None" }
        ],
        grid: { s: "12", md: "6" },
        onChange: (value, allFormValues) => {
          if (!Array.isArray(value)) return {};
          const updates = {};
          const lastSelected = value[value.length - 1];
          if (lastSelected === "None") {
            updates["chronic conditions"] = ["None"];
            updates["Other chronic notes"] = "";
            updates["HIV test date"] = "";
            updates["Is client on ART?"] = "";
            updates["Art number"] = "";
            updates["facility for art"] = "";
            return updates;
          }
          if (value.includes("None") && lastSelected !== "None") {
            const filteredValue = value.filter((v) => v !== "None");
            updates["chronic conditions"] = filteredValue;
            if (!filteredValue.includes("hiv positive")) {
              updates["HIV test date"] = "";
              updates["Is client on ART?"] = "";
              updates["Art number"] = "";
              updates["facility for art"] = "";
            }
            if (!filteredValue.includes("Other")) {
              updates["Other chronic notes"] = "";
            }
            return updates;
          }
          if (!value.includes("hiv positive")) {
            updates["HIV test date"] = "";
            updates["Is client on ART?"] = "";
            updates["Art number"] = "";
            updates["facility for art"] = "";
          }
          if (!value.includes("Other")) {
            updates["Other chronic notes"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "inputField",
        header: "Specify other chronic conditions",
        name: "Other chronic notes",
        icon: icons.editPen,
        required: true,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const conditions = allFormValues?.["chronic conditions"];
          if (Array.isArray(conditions) && conditions.includes("Other")) {
            if (!value || value === "") {
              return "Please specify other chronic conditions";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const conditions = allFormValues["chronic conditions"];
          return Array.isArray(conditions) && conditions.includes("Other");
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // HIV POSITIVE RELATED FIELDS
      {
        componentType: "dateInputField",
        header: "HIV test date*",
        name: "HIV test date",
        icon: icons.calenderPrimary,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const conditions = allFormValues?.["chronic conditions"];
          if (Array.isArray(conditions) && conditions.includes("hiv positive")) {
            if (!value || value === "") {
              return "HIV test date is required";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const conditions = allFormValues["chronic conditions"];
          return Array.isArray(conditions) && conditions.includes("hiv positive");
        }
      },
      {
        componentType: "radioButtonField",
        header: "Is the client on ART?*",
        name: "Is client on ART?",
        required: true,
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const conditions = allFormValues?.["chronic conditions"];
          if (Array.isArray(conditions) && conditions.includes("hiv positive")) {
            if (!value || value === "") {
              return "Please specify if client is on ART";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const conditions = allFormValues["chronic conditions"];
          return Array.isArray(conditions) && conditions.includes("hiv positive");
        },
        onChange: (value, allFormValues) => {
          const updates = {};
          if (value === "No") {
            updates["Art number"] = "";
            updates["facility for art"] = "";
          }
          return updates;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "inputField",
        header: "ART number*",
        name: "Art number",
        icon: icons.editPen,
        required: true,
        grid: { s: "6" },
        validation: (value, allFormValues) => {
          const conditions = allFormValues?.["chronic conditions"];
          const onART = allFormValues?.["Is client on ART"];
          if (Array.isArray(conditions) && conditions.includes("hiv positive") && onART === "Yes") {
            if (!value || value === "") {
              return "ART number is required";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const conditions = allFormValues["chronic conditions"];
          const onART = allFormValues["Is client on ART?"];
          return Array.isArray(conditions) && conditions.includes("hiv positive") && onART === "Yes";
        }
      },
      {
        componentType: "inputField",
        header: "Facility for ART*",
        name: "facility for art",
        icon: icons.search,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const conditions = allFormValues?.["chronic conditions"];
          const onART = allFormValues?.["Is client on ART?"];
          if (Array.isArray(conditions) && conditions.includes("hiv positive") && onART === "Yes") {
            if (!value || value === "") {
              return "Facility for ART is required";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const conditions = allFormValues["chronic conditions"];
          const onART = allFormValues["Is client on ART?"];
          return Array.isArray(conditions) && conditions.includes("hiv positive") && onART === "Yes";
        }
      }
    ];
  });
  return {
    resetForm,
    pastSurgeriesFormSection,
    allergiesFormSection,
    chronicConditionsFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MedicalHistory",
  setup(__props, { expose: __expose }) {
    const medicalHistoryComposable = useMedicalHistoryForm();
    const surgeriesFormRef = ref(null);
    const allergiesFormRef = ref(null);
    const chronicFormRef = ref(null);
    const surgeriesFormKey = ref(0);
    const allergiesFormKey = ref(0);
    const chronicFormKey = ref(0);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          surgeriesFormKey.value++;
          allergiesFormKey.value++;
          chronicFormKey.value++;
          await nextTick();
        }
      }
    );
    const onSubmit = async () => {
      const surgeriesErrors = surgeriesFormRef.value?.validateForm();
      const allergiesErrors = allergiesFormRef.value?.validateForm();
      const chronicErrors = chronicFormRef.value?.validateForm();
      if (surgeriesErrors || allergiesErrors || chronicErrors) {
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const surgeriesData = surgeriesFormRef.value?.getFormValues() || {};
      const allergiesData = allergiesFormRef.value?.getFormValues() || {};
      const chronicData = chronicFormRef.value?.getFormValues() || {};
      try {
        const observations = await processMedicalHistory(surgeriesData, allergiesData, chronicData);
        if (observations.length === 0) {
          toastWarning("No medical history data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(observations, EncounterTypeId.MEDICAL_HISTORY);
        surgeriesFormKey.value++;
        allergiesFormKey.value++;
        chronicFormKey.value++;
        await nextTick();
        toastSuccess("Medical history saved successfully");
        return true;
      } catch (error) {
        console.error("Error details:", error);
        toastWarning(error?.message || "Failed to save medical history");
        return false;
      }
    };
    const processMedicalHistory = async (surgeriesData, allergiesData, chronicData) => {
      const observations = [];
      const allData = { ...surgeriesData, ...allergiesData, ...chronicData };
      for (const [key, value] of Object.entries(allData)) {
        if (!value || value === false || value === "") continue;
        if (Array.isArray(value)) {
          for (const item of value) {
            const itemValue = typeof item === "object" && item !== null ? item.value || item.name : item;
            if (itemValue && itemValue !== "" && itemValue !== "None") {
              observations.push(await ObservationService.buildValueText(key, String(itemValue)));
            }
          }
        } else if (typeof value === "string" || typeof value === "number") {
          observations.push(await ObservationService.buildValueText(key, String(value)));
        } else if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText("Medical history finding", key));
        }
      }
      return observations;
    };
    onMounted(async () => {
      await nextTick();
    });
    const pastSurgeriesForm = computed(() => {
      return medicalHistoryComposable.pastSurgeriesFormSection.value;
    });
    const allergiesForm = computed(() => {
      return medicalHistoryComposable.allergiesFormSection.value;
    });
    const chronicConditionsForm = computed(() => {
      return medicalHistoryComposable.chronicConditionsFormSection.value;
    });
    __expose({
      validateForm: () => {
        const surgeriesErrors = surgeriesFormRef.value?.validateForm();
        const allergiesErrors = allergiesFormRef.value?.validateForm();
        const chronicErrors = chronicFormRef.value?.validateForm();
        return surgeriesErrors || allergiesErrors || chronicErrors;
      },
      onSubmit,
      resetForm: () => {
        surgeriesFormKey.value++;
        allergiesFormKey.value++;
        chronicFormKey.value++;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), { class: "sub_item_header" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Past Medical and Surgical History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  formData: pastSurgeriesForm.value,
                  ref_key: "surgeriesFormRef",
                  ref: surgeriesFormRef,
                  key: surgeriesFormKey.value
                }, null, 8, ["formData"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), { class: "sub_item_header" }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Allergies", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  formData: allergiesForm.value,
                  ref_key: "allergiesFormRef",
                  ref: allergiesFormRef,
                  key: allergiesFormKey.value
                }, null, 8, ["formData"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), { class: "sub_item_header" }, {
                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createTextVNode("Existing Chronic Health Conditions", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  formData: chronicConditionsForm.value,
                  ref_key: "chronicFormRef",
                  ref: chronicFormRef,
                  key: chronicFormKey.value
                }, null, 8, ["formData"]))
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

const MedicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be233b2a"]]);

export { MedicalHistory as M, WomanBehaviour as W, Medications as a };
