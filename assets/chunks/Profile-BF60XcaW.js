import { f as ref, c as computed, v as defineComponent, w as watch, a3 as onMounted, n as nextTick, z as openBlock, A as createElementBlock, D as createBaseVNode, B as createVNode, C as withCtx, P as createBlock, G as unref, bc as IonCardContent, ba as IonCardHeader, b9 as IonCardTitle, a6 as createTextVNode, bL as IonCard, bB as createStaticVNode, K as Fragment, S as renderList, a5 as normalizeClass, M as IonIcon, E as toDisplayString, eO as shieldCheckmarkOutline, aR as medicalOutline, H as closeCircleOutline, eP as helpCircleOutline, J as createCommentVNode, c5 as checkmarkCircleOutline, eI as lockClosedOutline, b7 as calendarOutline, R as alertCircleOutline, e4 as createOutline, aK as useRouter, cv as useRoute, aF as IonContent, bY as chevronBackOutline, T as withDirectives, U as vShow, bu as IonPage, ac as checkmarkOutline } from './vendor-Cbv9TWZo.js';
import { s as storeToRefs } from './pinia-C6LE2xz6.js';
import { n as icons, u as useDemographicsStore, z as StandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, e as useGeneralStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, F as DynamicButton, a2 as getFieldValue, H as HisDate, b6 as getOfflineSavedUnsavedData, J as savePatientRecord } from '../index-DIdCIGDg.js';
import { D as DemographicBar } from './DemographicBar-EVtWtbxh.js';
import { _ as _sfc_main$8, u as useFormWizard } from './useFormWizard-BrIrlDIt.js';

const usePastObstetricHistoryForm = () => {
  const liveBirthsCount = ref(0);
  const resetForm = () => {
    liveBirthsCount.value = 0;
  };
  const modeOfDeliveryOptions = [
    { id: 1, name: "Caesarean section" },
    { id: 2, name: "Vacuum extraction delivery" },
    { id: 3, name: "Breech delivery" },
    { id: 4, name: "SVD" },
    { id: 5, name: "Other" }
  ];
  const pastPregnancyComplicationsOptions = [
    { id: 1, name: "Asphyxia" },
    { id: 2, name: "Pre-eclampsia" },
    { id: 3, name: "Eclampsia" },
    { id: 4, name: "Puerperal Sepsis" },
    { id: 5, name: "Baby died within 24hrs of birth" },
    { id: 6, name: "Convulsions" },
    { id: 7, name: "Gestational diabetes mellitus" },
    { id: 8, name: "Heavy bleeding" },
    { id: 9, name: "Macrosomia" },
    { id: 10, name: "Perineal tear (3rd or 4th degree)" },
    { id: 11, name: "Other" },
    { id: 12, name: "None" }
  ];
  const generateModeOfDeliveryFields = (numberOfChildren) => {
    const fields = [];
    if (numberOfChildren <= 0) return fields;
    for (let index = 0; index < numberOfChildren; index++) {
      fields.push({
        componentType: "multiSelectInputField",
        header: `Specify mode of delivery (child ${index + 1})`,
        name: `Mode of delivery ${index}`,
        trackBy: "id",
        isMultiple: false,
        required: true,
        options: modeOfDeliveryOptions,
        grid: { s: "12", md: "6" },
        validation: (value) => {
          if (!value || value === "") {
            return `Mode of delivery for child ${index + 1} is required`;
          }
          return null;
        },
        onChange: (value, allFormValues) => {
          const updates = {};
          const selectedOption = modeOfDeliveryOptions.find((opt) => opt.id === value);
          const selectedName = selectedOption?.name || "";
          if (selectedName !== "Other" && selectedName !== "Caesarean section") {
            updates[`Specify ${index}`] = "";
          }
          return updates;
        }
      });
    }
    fields.push({
      grid: { s: "12" },
      componentType: "Dashes"
    });
    for (let index = 0; index < numberOfChildren; index++) {
      fields.push({
        componentType: "inputField",
        header: `Specify delivery details (child ${index + 1})`,
        name: `Specify ${index}`,
        icon: icons.editPen,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const modeId = allFormValues?.[`Mode of delivery ${index}`];
          const selectedOption = modeOfDeliveryOptions.find((opt) => opt.id === modeId);
          const modeName = selectedOption?.name || "";
          if (modeName === "Other" || modeName === "Caesarean section") {
            if (!value || value === "") {
              return `Please specify details for child ${index + 1}`;
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const modeId = allFormValues[`Mode of delivery ${index}`];
          const selectedOption = modeOfDeliveryOptions.find((opt) => opt.id === modeId);
          const modeName = selectedOption?.name || "";
          return modeName === "Caesarean section" || modeName === "Other";
        }
      });
    }
    return fields;
  };
  const pastObstetricHistoryFormSection = computed(() => {
    const formElements = [
      // ========== GRAVIDA ==========
      {
        componentType: "inputField",
        header: "Gravida",
        name: "Gravida",
        icon: icons.editPen,
        required: true,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Gravida is required";
          const num = Number(value);
          if (isNaN(num)) return "Gravida can only be number";
          if (num <= 0) return "Gravida must be greater than 0";
          if (num > 30) return "Gravida must be 30 or less";
          return null;
        },
        onChange: (value, allFormValues) => {
          if (!allFormValues) return {};
          const gravida = value ? parseInt(value) : null;
          const updates = {};
          if (gravida === null || gravida === 0 || value === "") {
            updates["Abortions/Miscarriages"] = "";
            updates["Stillbirths"] = "";
            updates["LiveBirths"] = "";
            updates["Parity"] = "";
            liveBirthsCount.value = 0;
          } else if (gravida === 1) {
            updates["Abortions/Miscarriages"] = "";
            updates["Stillbirths"] = "";
            updates["LiveBirths"] = "";
            updates["Parity"] = "";
            updates["Gestational age at last live birth"] = "";
            updates["Last live birth had congenital abnormalities"] = "";
            updates["past pregnancies complications"] = [];
            liveBirthsCount.value = 0;
            for (let i = 0; i < 30; i++) {
              updates[`Mode of delivery ${i}`] = "";
              updates[`Specify ${i}`] = "";
            }
          }
          return updates;
        }
      },
      // ========== ABORTIONS/MISCARRIAGES ==========
      {
        componentType: "inputField",
        header: "Abortions/Miscarriages",
        name: "Abortions/Miscarriages",
        icon: icons.editPen,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gravida = parseInt(allFormValues?.["Gravida"]) || 0;
          if (gravida <= 1) return null;
          if (!value || value === "") return "Abortions/Miscarriages is required";
          const num = Number(value);
          if (isNaN(num)) return "Abortions/Miscarriages can only be number";
          if (num < 0) return "Abortions/Miscarriages must be 0 or greater";
          if (gravida > 0 && num >= gravida) {
            return "Abortions/Miscarriages cannot be equal to or greater than Gravida";
          }
          return null;
        },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        },
        onChange: (value, allFormValues) => {
          if (!allFormValues) return {};
          const gravida = parseInt(allFormValues["Gravida"]) || 0;
          const abortions = value ? parseInt(value) : null;
          const updates = {};
          if (abortions !== null && !isNaN(gravida) && !isNaN(abortions) && gravida > 1) {
            const parity = Math.max(0, gravida - abortions - 1);
            updates["Parity"] = parity;
            const stillbirthsValue = allFormValues["Stillbirths"];
            if (stillbirthsValue !== "" && stillbirthsValue !== void 0 && stillbirthsValue !== null) {
              const stillbirths = parseInt(stillbirthsValue) || 0;
              const births = Math.max(0, parity - stillbirths);
              updates["LiveBirths"] = births;
              liveBirthsCount.value = births;
            }
          } else if (abortions === null || value === "") {
            updates["Parity"] = "";
            updates["LiveBirths"] = "";
            liveBirthsCount.value = 0;
          }
          return updates;
        }
      },
      // ========== STILLBIRTHS ==========
      {
        componentType: "inputField",
        header: "Stillbirths",
        name: "Stillbirths",
        icon: icons.editPen,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gravida = parseInt(allFormValues?.["Gravida"]) || 0;
          if (gravida <= 1) return null;
          if (!value || value === "") return "Stillbirths is required";
          const num = Number(value);
          if (isNaN(num)) return "Stillbirths can only be number";
          if (num < 0) return "Stillbirths must be 0 or greater";
          const parity = parseInt(allFormValues?.["Parity"]) || 0;
          if (parity > 0 && num > parity) {
            return "Stillbirths cannot exceed Parity";
          }
          return null;
        },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        },
        onChange: (value, allFormValues) => {
          if (!allFormValues) return {};
          const parity = parseInt(allFormValues["Parity"]) || 0;
          const stillbirths = value ? parseInt(value) : null;
          if (stillbirths !== null && !isNaN(parity) && !isNaN(stillbirths)) {
            const births = Math.max(0, parity - stillbirths);
            liveBirthsCount.value = births;
            return { LiveBirths: births };
          } else if (stillbirths === null || value === "") {
            liveBirthsCount.value = 0;
            return { LiveBirths: "" };
          }
          return {};
        }
      },
      // ========== LIVE BIRTHS (READ-ONLY) ==========
      {
        componentType: "inputField",
        header: "Live births",
        name: "LiveBirths",
        disabled: true,
        grid: { s: "12", md: "6" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        }
      },
      // ========== PARITY (READ-ONLY) ==========
      {
        componentType: "inputField",
        header: "Parity",
        name: "Parity",
        required: false,
        disabled: true,
        grid: { s: "12", md: "6" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        }
      }
    ];
    if (liveBirthsCount.value > 0) {
      const modeOfDeliveryFields = generateModeOfDeliveryFields(liveBirthsCount.value);
      formElements.push(...modeOfDeliveryFields);
    }
    formElements.push(
      // ========== FIRST PREGNANCY ALERT ==========
      {
        componentType: "Alert",
        name: "FirstPregnancyAlert",
        backgroundColor: "#FFD700",
        status: "info",
        icon: "info-circle",
        textColor: "#000000",
        value: "First pregnancy, proceed.",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida === 1;
        }
      },
      // ========== GESTATIONAL AGE AT LAST LIVE BIRTH ==========
      {
        componentType: "radioButtonField",
        header: "What was the gestational age at last live birth?",
        name: "Gestation age at last live birth",
        options: [
          { value: "<28 weeks", label: "<28 weeks" },
          { value: "28–34 weeks", label: "28–34 weeks" },
          { value: "35–36 weeks", label: "35–36 weeks" },
          { value: "≥37 weeks (Full term)", label: "≥37 weeks (Full term)" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1 && liveBirthsCount.value > 0;
        }
      },
      {
        grid: { s: "12" },
        componentType: "Dashes",
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1 && liveBirthsCount.value > 0;
        }
      },
      // ========== LAST LIVE BIRTH CONGENITAL ABNORMALITIES ==========
      {
        componentType: "radioButtonField",
        header: "Last live birth had congenital abnormalities?",
        name: "Last live birth had congenital abnormalities",
        type: "inline",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1 && liveBirthsCount.value > 0;
        }
      },
      {
        grid: { s: "12" },
        componentType: "Dashes",
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        }
      },
      // ========== PAST PREGNANCY COMPLICATIONS ==========
      {
        componentType: "Heading",
        name: "Past Pregnancy Complications",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Did the woman have any of the complications during the past pregnancies?",
        name: "past pregnancies complications",
        isMultiple: true,
        trackBy: "id",
        grid: { s: "12" },
        options: pastPregnancyComplicationsOptions,
        validation: (value) => {
          if (!value || value.length === 0) {
            return "Please select at least one option or 'None'";
          }
          if (Array.isArray(value)) {
            const hasNone = value.some((item) => item.name === "None");
            const hasOtherComplications = value.some((item) => item.name !== "None");
            if (hasNone && hasOtherComplications) {
              return "'None' cannot be selected with other complications";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        },
        onChange: (value, allFormValues) => {
          if (!allFormValues || !Array.isArray(value)) return {};
          const updates = {};
          if (Array.isArray(value)) {
            const hasNone = value.some((item) => item.name === "None");
            const hasOther = value.some((item) => item.name === "Other");
            if (hasNone) {
              const noneOption = value.find((item) => item.name === "None");
              updates["past pregnancies complications"] = [noneOption];
              updates["Other complications notes"] = "";
            }
            if (!hasOther) {
              updates["Other complications notes"] = "";
            }
          }
          return updates;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== OTHER COMPLICATIONS NOTES ==========
      {
        componentType: "inputField",
        header: "Specify other complications*",
        name: "Other complications notes",
        icon: icons.editPen,
        required: true,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const complications = allFormValues?.["past pregnancies complications"];
          if (Array.isArray(complications)) {
            const hasOther = complications.some((item) => item.name === "Other");
            const hasNone = complications.some((item) => item.name === "None");
            if (hasOther && !hasNone && (!value || value === "")) {
              return "Please specify other complications";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          const complications = allFormValues["past pregnancies complications"];
          if (gravida <= 1 || !Array.isArray(complications)) return false;
          const hasOther = complications.some((item) => item.name === "Other");
          const hasNone = complications.some((item) => item.name === "None");
          return hasOther && !hasNone;
        }
      }
    );
    return formElements;
  });
  return {
    resetForm,
    pastObstetricHistoryFormSection,
    liveBirthsCount
  };
};

const _hoisted_1$7 = { class: "container" };
const _hoisted_2$2 = { class: "custom-card" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PastObstetricHistory",
  setup(__props, { expose: __expose }) {
    const pastObstetricFormComposable = usePastObstetricHistoryForm();
    const formRef = ref(null);
    const formKey = ref(0);
    const formValues = ref({});
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          pastObstetricFormComposable.resetForm();
          formKey.value++;
          await nextTick();
        }
      }
    );
    watch(
      () => formRef.value?.getFormValues(),
      (newValues) => {
        if (newValues) {
          formValues.value = newValues;
        }
      },
      { deep: true }
    );
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return false;
      }
      const validationErrors = formRef.value.validateForm();
      if (validationErrors) {
        toastWarning("Please fix validation errors before submitting");
        console.log("Validation errors:", validationErrors);
        return false;
      }
      const formData = formRef.value.getFormValues();
      try {
        const obstetricHistoryData = await processPastObstetricHistory(formData);
        if (obstetricHistoryData.length === 0) {
          toastWarning("No past obstetric history data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(obstetricHistoryData, EncounterTypeId.OBSTETRIC_HISTORY);
        formKey.value++;
        await nextTick();
        toastSuccess("Past obstetric history saved successfully");
        return true;
      } catch (error) {
        console.error("Error processing past obstetric history:", error);
        toastWarning(error?.message || "Failed to save past obstetric history");
        return false;
      }
    };
    const processPastObstetricHistory = async (data) => {
      const observations = [];
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "") continue;
        if (key === "FirstPregnancyAlert") continue;
        if (Array.isArray(value)) {
          if (key === "past pregnancies complications") {
            for (const item of value) {
              const itemValue = typeof item === "object" && item !== null ? item.name : item;
              if (itemValue && itemValue !== "") {
                observations.push(await ObservationService.buildValueText(key, String(itemValue)));
              }
            }
          } else {
            for (const item of value) {
              const itemValue = typeof item === "object" && item !== null ? item.value || item.name : item;
              if (itemValue && itemValue !== "") {
                observations.push(await ObservationService.buildValueText(key, String(itemValue)));
              }
            }
          }
        } else if (typeof value === "object" && value !== null) {
          if (key.startsWith("Mode of delivery")) {
            const deliveryMode = value.name || "";
            if (deliveryMode) {
              const childIndex = key.replace("Mode of delivery ", "");
              const specifyKey = `Specify ${childIndex}`;
              const specifyValue = data[specifyKey];
              if ((deliveryMode === "Caesarean section" || deliveryMode === "Other") && specifyValue) {
                const parentObs = await ObservationService.buildValueText("Mode of delivery", deliveryMode);
                const childObs = await ObservationService.buildValueText("Mode of delivery details", specifyValue);
                parentObs.child = [childObs];
                observations.push(parentObs);
              } else {
                observations.push(await ObservationService.buildValueText("Mode of delivery", deliveryMode));
              }
            }
          }
        } else if (typeof value === "string" || typeof value === "number") {
          if (key.startsWith("Specify ")) continue;
          observations.push(await ObservationService.buildValueText(key, String(value)));
        } else if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText("Past obstetric finding", key));
        }
      }
      return observations;
    };
    onMounted(async () => {
      pastObstetricFormComposable.resetForm();
      await nextTick();
    });
    const pastObstetricHistoryForm = computed(() => {
      return pastObstetricFormComposable.pastObstetricHistoryFormSection.value;
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      resetForm: () => {
        formKey.value++;
        pastObstetricFormComposable.resetForm();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              (openBlock(), createBlock(StandardForm, {
                formData: pastObstetricHistoryForm.value,
                ref_key: "formRef",
                ref: formRef,
                key: formKey.value
              }, null, 8, ["formData"]))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const PastObstetricHistory = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3ee8e7b8"]]);

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

const _hoisted_1$6 = { class: "container" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
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

const MedicalHistory = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-be233b2a"]]);

const _hoisted_1$5 = { class: "tetanus-immunization-wrapper" };
const _hoisted_2$1 = { class: "status-selection" };
const _hoisted_3 = ["onClick"];
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TetanusImmunizationTable",
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
    __expose({
      getValues,
      validate
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[9] || (_cache[9] = createStaticVNode('<div class="dashed-separator" data-v-65f79954></div><div class="field-header-container" data-v-65f79954><div class="header-with-icon" data-v-65f79954><div data-v-65f79954><h6 class="field-header" data-v-65f79954>Select Tetanus Immunization Status <span class="required-asterisk" data-v-65f79954>*</span></h6></div></div></div>', 2)),
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
            ], 10, _hoisted_3);
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
                    onChange: (e) => handleFullyDateChange(dose - 1, e.target.value),
                    max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
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
                    onChange: (e) => handleUnderDateChange(dose - 1, e.target.value),
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

const TetanusImmunizationTable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-65f79954"]]);

const useCurrentPregnancyForm = () => {
  const resetForm = () => {
  };
  const gestationAgeSection = computed(() => {
    const formElements = [
      // ========== GESTATION AGE SELECTION ==========
      {
        componentType: "radioButtonField",
        header: "Gestation age to be used",
        name: "Gestation age to be used",
        type: "inline",
        required: true,
        options: [
          { value: "GA by LNMP", label: "GA by LNMP" },
          { value: "GA by ultrasound", label: "GA by ultrasound" },
          { value: "GA by palpation", label: "GA by palpation" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Gestation age to be used is required";
          return null;
        },
        onChange: (value, allFormValues) => {
          const updates = {};
          updates["lmnp date"] = "";
          updates["Gestation weeks"] = "";
          updates["Estimated date of delivery"] = "";
          updates["Gestation in Weeks"] = "";
          updates["Date"] = "";
          updates["Estimated date"] = "";
          updates["Date of delivery"] = "";
          updates["Gestation age by palpation"] = "";
          updates["Date"] = "";
          updates["Gestation"] = "";
          updates["Gestation in Weeks"] = "";
          updates["Delivery day"] = "";
          return updates;
        }
      },
      // ========== LNMP SECTION ==========
      {
        componentType: "dateInputField",
        header: "LNMP date",
        name: "lmnp date",
        icon: icons.calenderPrimary,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gestationMethod = allFormValues?.["Gestation age to be used"];
          if (gestationMethod === "GA by LNMP") {
            if (!value || value === "") {
              return "LNMP date is required";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by LNMP";
        },
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value || value === "") {
            updates["Gestation weeks"] = "";
            updates["Estimated date of delivery"] = "";
            return updates;
          }
          const lmnpDateValue = Date.parse(value);
          if (!isNaN(lmnpDateValue)) {
            const currentDate = (/* @__PURE__ */ new Date()).getTime();
            const gestationalAgeInDays = (currentDate - lmnpDateValue) / (1e3 * 60 * 60 * 24);
            const gestationalAgeInWeeks = Math.floor(gestationalAgeInDays / 7);
            updates["Gestation weeks"] = gestationalAgeInWeeks;
            const eddDateValue = new Date(lmnpDateValue + 40 * 7 * 24 * 60 * 60 * 1e3);
            updates["Estimated date of delivery"] = eddDateValue.toISOString().split("T")[0];
          }
          return updates;
        }
      },
      {
        componentType: "inputField",
        header: "Gestation age",
        name: "Gestation weeks",
        unit: "Weeks",
        disabled: true,
        grid: { s: "12", md: "3" },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by LNMP";
        }
      },
      {
        componentType: "dateInputField",
        header: "EDD",
        name: "Estimated date of delivery",
        icon: icons.calenderPrimary,
        disabled: true,
        grid: { s: "12", md: "3" },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by LNMP";
        }
      },
      // ========== ULTRASOUND SECTION ==========
      {
        componentType: "dateInputField",
        header: "Date for ultrasound",
        name: "Date",
        icon: icons.calenderPrimary,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gestationMethod = allFormValues?.["Gestation age to be used"];
          if (gestationMethod === "GA by ultrasound") {
            if (!value || value === "") {
              return "Ultrasound date is required";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by ultrasound";
        }
      },
      {
        componentType: "inputField",
        header: "Gestation age from ultrasound",
        name: "Gestation in weeks",
        icon: icons.editPen,
        unit: "Weeks",
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gestationMethod = allFormValues?.["Gestation age to be used"];
          if (gestationMethod === "GA by ultrasound") {
            if (!value || value === "") {
              return "Gestation age from ultrasound is required";
            }
            const num = Number(value);
            if (isNaN(num)) return "Gestation age must be a number";
            if (num < 0 || num > 42) return "Gestation age must be between 0 and 42 weeks";
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by ultrasound";
        }
      },
      {
        componentType: "dateInputField",
        header: "LMNP date from ultrasound",
        name: "Estimated date",
        icon: icons.calenderPrimary,
        grid: { s: "12", md: "6" },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by ultrasound";
        }
      },
      {
        componentType: "dateInputField",
        header: "EDD from ultrasound",
        name: "Date of delivery",
        icon: icons.calenderPrimary,
        grid: { s: "12", md: "6" },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by ultrasound";
        }
      },
      // ========== PALPATION SECTION ==========
      {
        componentType: "inputField",
        header: "Enter gestation age by palpation (weeks)",
        name: "Gestation",
        icon: icons.editPen,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gestationMethod = allFormValues?.["Gestation age to be used"];
          if (gestationMethod === "GA by palpation") {
            if (!value || value === "") {
              return "Gestation age by palpation is required";
            }
            const num = Number(value);
            if (isNaN(num)) return "Gestation age must be a number";
            if (num < 0 || num > 42) return "Gestation age must be between 0 and 42 weeks";
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by palpation";
        },
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value || value === "") {
            updates["Delivery day"] = "";
            return updates;
          }
          const gestationalAgeInWeeks = parseInt(value);
          if (!isNaN(gestationalAgeInWeeks)) {
            const currentDate = /* @__PURE__ */ new Date();
            const conceptionDate = new Date(currentDate.getTime() - gestationalAgeInWeeks * 7 * 24 * 60 * 60 * 1e3);
            const edd = new Date(conceptionDate.getTime() + 280 * 24 * 60 * 60 * 1e3);
            updates["Delivery day"] = edd.toISOString().split("T")[0];
          }
          return updates;
        }
      },
      {
        componentType: "dateInputField",
        header: "EDD",
        name: "Delivery day",
        icon: icons.calenderPrimary,
        disabled: true,
        grid: { s: "12", md: "6" },
        condition: (allFormValues) => {
          return allFormValues["Gestation age to be used"] === "GA by palpation";
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" }
    ];
    return formElements;
  });
  const tdvSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "TDV started at what gestation age?",
        name: "TDV at gestation age",
        type: "inline",
        grid: { s: "12" },
        options: [
          { label: "None", value: "None" },
          { label: "4 Weeks", value: "4 weeks" },
          { label: "6 Months", value: "6 months" },
          { label: "1 year", value: "1 year" },
          { label: "> 1 yr", value: "> 1 yr" }
        ]
      }
    ];
  });
  return {
    resetForm,
    gestationAgeSection,
    tdvSection
  };
};

const _hoisted_1$4 = { class: "container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CurrentPregnancy",
  setup(__props, { expose: __expose }) {
    const currentPregnancyComposable = useCurrentPregnancyForm();
    const gestationFormRef = ref(null);
    const tdvFormRef = ref(null);
    const tetanusRef = ref(null);
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
      const gestationErrors = gestationFormRef.value?.validateForm();
      const tetanusError = tetanusRef.value?.validate();
      const tdvErrors = tdvFormRef.value?.validateForm();
      if (gestationErrors || tetanusError || tdvErrors) {
        if (tetanusError) {
          toastWarning(tetanusError);
        } else {
          toastWarning("Please fix validation errors before submitting");
        }
        return false;
      }
      const gestationData = gestationFormRef.value?.getFormValues() || {};
      const tetanusData = tetanusRef.value?.getValues() || {};
      const tdvData = tdvFormRef.value?.getFormValues() || {};
      const formData = { ...gestationData, ...tetanusData, ...tdvData };
      try {
        const currentPregnancyData = await processCurrentPregnancy(formData);
        if (currentPregnancyData.length === 0) {
          toastWarning("No current pregnancy data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(currentPregnancyData, EncounterTypeId.CURRENT_PREGNANCY);
        formKey.value++;
        await nextTick();
        toastSuccess("Current pregnancy data saved successfully");
        return true;
      } catch (error) {
        console.error("Error details:", error);
        toastWarning(error?.message || "Failed to save current pregnancy data");
        return false;
      }
    };
    const processCurrentPregnancy = async (data) => {
      const observations = [];
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "") continue;
        if (key.startsWith("tt1Date") || key.startsWith("tt2Date")) {
          continue;
        }
        if (Array.isArray(value)) {
          for (const item of value) {
            const itemValue = typeof item === "object" && item !== null ? item.value || item.name : item;
            if (itemValue && itemValue !== "") {
              observations.push(await ObservationService.buildValueText(key, String(itemValue)));
            }
          }
        } else if (typeof value === "object" && value !== null) {
          const objectValue = value.value || value.name || String(value);
          if (objectValue && objectValue !== "") {
            observations.push(await ObservationService.buildValueText(key, String(objectValue)));
          }
        } else if (typeof value === "string" || typeof value === "number") {
          observations.push(await ObservationService.buildValueText(key, String(value)));
        } else if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText("Current pregnancy finding", key));
        }
      }
      const immunizationStatus = data["The woman received tetanus doses for immunization?"];
      if (immunizationStatus === "Fully immunised") {
        for (let i = 1; i <= 5; i++) {
          const dateValue = data[`tt1Date${i}`];
          if (dateValue && dateValue !== "") {
            observations.push(await ObservationService.buildValueText("tt1Date", String(dateValue)));
          }
        }
      }
      if (immunizationStatus === "Under immunised") {
        const numberOfDoses = data["Number of tetanus doses"];
        let maxDoses = 0;
        if (numberOfDoses === "one dose") maxDoses = 1;
        else if (numberOfDoses === "two doses") maxDoses = 2;
        else if (numberOfDoses === "three doses") maxDoses = 3;
        else if (numberOfDoses === "four doses") maxDoses = 4;
        for (let i = 1; i <= maxDoses; i++) {
          const dateValue = data[`tt2Date${i}`];
          if (dateValue && dateValue !== "") {
            observations.push(await ObservationService.buildValueText("tt2Date", String(dateValue)));
          }
        }
      }
      return observations;
    };
    onMounted(async () => {
      await nextTick();
    });
    const gestationAgeForm = computed(() => {
      return currentPregnancyComposable.gestationAgeSection.value;
    });
    const tdvForm = computed(() => {
      return currentPregnancyComposable.tdvSection.value;
    });
    __expose({
      validateForm: () => {
        const gestationErrors = gestationFormRef.value?.validateForm();
        const tetanusError = tetanusRef.value?.validate();
        const tdvErrors = tdvFormRef.value?.validateForm();
        return gestationErrors || tetanusError || tdvErrors;
      },
      onSubmit,
      getFormValues: () => {
        const gestationData = gestationFormRef.value?.getFormValues() || {};
        const tetanusData = tetanusRef.value?.getValues() || {};
        const tdvData = tdvFormRef.value?.getFormValues() || {};
        return { ...gestationData, ...tetanusData, ...tdvData };
      },
      resetForm: () => {
        formKey.value++;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  formData: gestationAgeForm.value,
                  ref_key: "gestationFormRef",
                  ref: gestationFormRef,
                  key: formKey.value
                }, null, 8, ["formData"])),
                createVNode(TetanusImmunizationTable, {
                  ref_key: "tetanusRef",
                  ref: tetanusRef
                }, null, 512),
                (openBlock(), createBlock(StandardForm, {
                  formData: tdvForm.value,
                  ref_key: "tdvFormRef",
                  ref: tdvFormRef,
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

const CurrentPregnancy = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e88315ec"]]);

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

const _hoisted_1$3 = { class: "container" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Medications",
  setup(__props, { expose: __expose }) {
    const medicationsComposable = useMedicationsForm();
    const medicationsFormRef = ref(null);
    const shouldShowValidation = ref(false);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          shouldShowValidation.value = false;
          await nextTick();
        }
      }
    );
    const markAllAsTouched = () => {
      shouldShowValidation.value = true;
    };
    const validateForm = async () => {
      if (!shouldShowValidation.value) {
        shouldShowValidation.value = true;
        await nextTick();
      }
      const errors = medicationsFormRef.value?.validateForm();
      return errors;
    };
    const getFormValues = () => {
      return medicationsFormRef.value?.getFormValues() || {};
    };
    const onSubmit = async () => {
      shouldShowValidation.value = true;
      await nextTick();
      const medicationsErrors = medicationsFormRef.value?.validateForm();
      if (medicationsErrors) {
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const medicationsData = medicationsFormRef.value?.getFormValues() || {};
      const hasData = Object.values(medicationsData).some(
        (val) => val !== "" && val !== null && val !== void 0 && !(Array.isArray(val) && val.length === 0)
      );
      if (!hasData) {
        return true;
      }
      try {
        const observations = await processMedications(medicationsData);
        if (observations.length === 0) {
          return true;
        }
        await ObservationService.addObsToEncounterPatient(observations, EncounterTypeId.MEDICATIONS);
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
      shouldShowValidation.value = false;
      await nextTick();
    });
    const medicationsForm = computed(() => {
      const formData = medicationsComposable.medicationsFormSection.value;
      if (!shouldShowValidation.value) {
        return formData.map((field) => {
          const { validation, ...rest } = field;
          return rest;
        });
      }
      return formData;
    });
    __expose({
      validateForm,
      onSubmit,
      resetForm: () => {
        shouldShowValidation.value = false;
      },
      markAllAsTouched,
      getFormValues
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
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
                createVNode(StandardForm, {
                  formData: medicationsForm.value,
                  ref_key: "medicationsFormRef",
                  ref: medicationsFormRef
                }, null, 8, ["formData"])
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

const Medications = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8b54b6b8"]]);

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

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
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

const WomanBehaviour = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-434b6dcd"]]);

const useGynaecologyForm = () => {
  const resetForm = () => {
  };
  const gynaecologyFormSection = computed(() => {
    return [
      // ========== AGE AT MENARCHE ==========
      {
        componentType: "inputField",
        header: "Age at menarche",
        name: "Age at menarche",
        unit: "Years",
        icon: icons.editPen,
        required: true,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Age at menarche is required";
          const num = Number(value);
          if (isNaN(num)) return "Age at menarche must be a number";
          if (num < 8) return "Age at menarche must be at least 8 years";
          if (num > 20) return "Age at menarche cannot exceed 20 years";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== LENGTH OF MENSTRUAL FLOW ==========
      {
        componentType: "inputField",
        header: "Length of menstrual flow",
        name: "Length of menstrual flow days",
        unit: "Days",
        icon: icons.editPen,
        required: true,
        grid: { s: "12", md: "6" },
        validation: (value) => {
          if (!value || value === "") return "Length of menstrual flow is required";
          const num = Number(value);
          if (isNaN(num)) return "Length of menstrual flow must be a number";
          if (num < 1) return "Length of menstrual flow must be at least 1 day";
          if (num > 15) return "Length of menstrual flow cannot exceed 15 days";
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Length of menstrual flow",
        name: "Length of menstrual flow weeks",
        icon: icons.editPen,
        unit: "Weeks",
        required: false,
        grid: { s: "12", md: "6" },
        validation: (value) => {
          if (!value || value === "") return null;
          const num = Number(value);
          if (isNaN(num)) return "Length of menstrual flow must be a number";
          if (num < 0) return "Length of menstrual flow cannot be negative";
          if (num > 4) return "Length of menstrual flow cannot exceed 4 weeks";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== REGULARITY OF MENSTRUAL FLOW ==========
      {
        componentType: "radioButtonField",
        header: "Regularity of menstrual flow",
        name: "Regularity of menstrual flow",
        required: true,
        type: "inline",
        options: [
          { value: "Regular", label: "Regular" },
          { value: "Irregular", label: "Irregular" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Regularity of menstrual flow is required";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== AMOUNT OF FLOW ==========
      {
        componentType: "radioButtonField",
        header: "Amount of menstrual flow",
        name: "Amount of menstrual flow",
        required: true,
        type: "inline",
        options: [
          { value: "Light", label: "Light" },
          { value: "Moderate", label: "Moderate" },
          { value: "Heavy", label: "Heavy" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Amount of flow is required";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== DYSMENORRHEA ==========
      {
        componentType: "radioButtonField",
        header: "Dysmenorrhea",
        name: "Dysmenorrhea",
        required: true,
        type: "inline",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Dysmenorrhea is required";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== ABORTIONS ==========
      // {
      //     componentType: "radioButtonField",
      //     header: "Abortions*",
      //     name: "Abortions",
      //     required: true,
      //     options: [
      //         { value: "0", label: "0" },
      //         { value: "1", label: "1" },
      //         { value: "2", label: "2" },
      //         { value: "3+", label: "3+" },
      //     ],
      //     grid: { s: "12" },
      //     validation: (value: any) => {
      //         if (value === null || value === undefined || value === "") return "Abortions is required";
      //         return null;
      //     },
      // },
      //
      // { grid: { s: "12" }, componentType: "Dashes" },
      //
      // // ========== STIs ==========
      // {
      //     componentType: "radioButtonField",
      //     header: "STIs*",
      //     name: "STIs",
      //     required: true,
      //     options: [
      //         { value: "Yes", label: "Yes" },
      //         { value: "No", label: "No" },
      //     ],
      //     grid: { s: "12" },
      //     validation: (value: any) => {
      //         if (!value || value === "") return "STIs is required";
      //         return null;
      //     },
      // },
      // ========== GYNAECOLOGICAL SURGERY ==========
      {
        componentType: "inputField",
        header: "Gynaecological surgery",
        name: "Gynaecological surgery",
        icon: icons.editPen,
        required: false,
        grid: { s: "12" }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== OTHER ==========
      {
        componentType: "inputField",
        header: "Other",
        name: "Other notes",
        required: false,
        grid: { s: "12" },
        rows: 4
      }
    ];
  });
  return {
    resetForm,
    gynaecologyFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Gynaecology",
  setup(__props, { expose: __expose }) {
    const gynaecologyFormComposable = useGynaecologyForm();
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
        console.log("Validation errors:", validationErrors);
        return false;
      }
      const formData = formRef.value.getFormValues();
      try {
        const observations = await processGynaecology(formData);
        if (observations.length === 0) {
          toastWarning("No gynaecological history data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(observations, EncounterTypeId.Obstetrics_and_Gynecology);
        formKey.value++;
        await nextTick();
        toastSuccess("Gynaecological history saved successfully");
        return true;
      } catch (error) {
        console.error("Error details:", error);
        toastWarning(error?.message || "Failed to save gynaecological history");
        return false;
      }
    };
    const processGynaecology = async (data) => {
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
          observations.push(await ObservationService.buildValueText("Gynaecological finding", key));
        }
      }
      return observations;
    };
    onMounted(async () => {
      await nextTick();
    });
    const gynaecologyForm = computed(() => {
      return gynaecologyFormComposable.gynaecologyFormSection.value;
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
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), null, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Gynaecological History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  formData: gynaecologyForm.value,
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

const Gynaecology = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7161ce7a"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  setup(__props, { expose: __expose }) {
    const { currentTabIndex } = useFormWizard();
    const router = useRouter();
    const route = useRoute();
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const pastObstetricHistoryRef = ref(null);
    const medicalHistoryRef = ref(null);
    const currentPregnancyRef = ref(null);
    const gynaecologyRef = ref(null);
    const medicationsRef = ref(null);
    const womanBehaviourRef = ref(null);
    const wizard = ref(null);
    const doneButtonOptions = computed(() => ({
      text: isSaving.value ? "Saving..." : "Finish",
      icon: isSaving.value ? "hourglassOutline" : "checkmark",
      hideText: false,
      hideIcon: false,
      disabled: isDoneButtonDisabled.value || isSaving.value
    }));
    const demographicsStore = useDemographicsStore();
    const generalStore = useGeneralStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { sessionDate } = storeToRefs(configStore);
    const { apiStatus } = storeToRefs(useStatusStore());
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const openBackController = () => {
      router.push("/patientProfile");
    };
    const getActiveTabs = () => {
      return [
        { title: "Past Obstetric History", icon: "" },
        { title: "Medical History", icon: "" },
        { title: "Current Pregnancy", icon: "" },
        { title: "Gynaecology", icon: "" },
        { title: "Medications", icon: "" },
        { title: "Woman Behaviour", icon: "" }
      ];
    };
    const tabs = ref(getActiveTabs());
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      const componentMap = {
        "Past Obstetric History": "PastObstetricHistory",
        "Medical History": "MedicalHistory",
        "Current Pregnancy": "CurrentPregnancy",
        Gynaecology: "Gynaecology",
        Medications: "Medications",
        "Woman Behaviour": "WomanBehaviour"
      };
      return componentMap[currentTab] || null;
    };
    const getComponentRef = (title) => {
      const componentRefs = {
        "Past Obstetric History": pastObstetricHistoryRef,
        "Medical History": medicalHistoryRef,
        "Current Pregnancy": currentPregnancyRef,
        Gynaecology: gynaecologyRef,
        Medications: medicationsRef,
        "Woman Behaviour": womanBehaviourRef
      };
      return componentRefs[title]?.value || null;
    };
    const onTabBeforeChange = async () => {
      const currentTab = tabs.value[currentTabIndex.value]?.title;
      if (!currentTab) return true;
      const componentRef = getComponentRef(currentTab);
      if (!componentRef || !componentRef.validateForm) {
        return true;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const markWizard = async () => {
      const sessionD = getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      for (let i = 0; i < tabs.value.length; i++) {
        const tab = tabs.value[i];
        if (tab.title === "Past Obstetric History") {
          const obstetricData = getOfflineSavedUnsavedData("pastObstetricHistory");
          tabs.value[i].icon = isDateInArray(sessionD, obstetricData) ? checkmarkOutline : "";
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, dataArray) => {
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return dataArray?.some((item) => {
        const obsDate = new Date(item.obs_datetime);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const onChangeCurrentTab = async (index, oldIndex) => {
      if (index % 1 === 0) {
        currentTabIndex.value = index;
      }
    };
    const saveAllData = async () => {
      isSaving.value = true;
      try {
        let hasValidationErrors = false;
        let firstErrorTabIndex = -1;
        for (let i = 0; i < tabs.value.length; i++) {
          const tab = tabs.value[i];
          const componentRef = getComponentRef(tab.title);
          if (componentRef && componentRef.validateForm) {
            const validationErrors = await componentRef.validateForm();
            if (validationErrors !== null && validationErrors !== void 0) {
              hasValidationErrors = true;
              if (firstErrorTabIndex === -1) {
                firstErrorTabIndex = i;
              }
            }
          }
        }
        if (hasValidationErrors && firstErrorTabIndex !== -1) {
          currentTabIndex.value = firstErrorTabIndex;
          if (wizard.value?.changeTab) {
            await wizard.value.changeTab(firstErrorTabIndex);
          }
          await nextTick();
          toastWarning("Please fix all validation errors before saving");
          isSaving.value = false;
          return;
        }
        let savedCount = 0;
        for (let i = 0; i < tabs.value.length; i++) {
          const tab = tabs.value[i];
          const componentRef = getComponentRef(tab.title);
          if (componentRef?.onSubmit) {
            try {
              const result = await componentRef.onSubmit();
              if (result !== false) {
                savedCount++;
              }
            } catch (error) {
              console.error(`Error saving ${tab.title}:`, error);
              toastWarning(`Error saving ${tab.title}. Please try again.`);
              currentTabIndex.value = i;
              if (wizard.value?.changeTab) {
                await wizard.value.changeTab(i);
              }
              await nextTick();
              isSaving.value = false;
              return;
            }
          }
        }
        await savePatientRecord(patient.value);
        await markWizard();
        if (savedCount > 0) {
          toastSuccess(`Successfully saved ${savedCount} section(s)`);
        } else {
          toastSuccess("Profile completed");
        }
        router.push("/quickCheck");
      } catch (error) {
        console.error("Error in saveAllData:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    onMounted(async () => {
      if (generalStore.NCDActivities.length === 0) {
        router.push("patientProfile");
        return;
      }
      tabs.value = getActiveTabs();
      await markWizard();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      patient,
      async () => {
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
      route,
      async () => {
        refreshWizard();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (newData, old) => {
        if (old.ID != newData.ID) {
          refreshWizard();
        }
      },
      { deep: true }
    );
    __expose({
      saveAllData,
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
                showWizard.value ? (openBlock(), createBlock(_sfc_main$8, {
                  key: 0,
                  ref_key: "wizard",
                  ref: wizard,
                  headingTitle: "ANC Profile",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: onTabBeforeChange,
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveAllData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to Profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PastObstetricHistory, {
                        ref_key: "pastObstetricHistoryRef",
                        ref: pastObstetricHistoryRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PastObstetricHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(MedicalHistory, {
                        ref_key: "medicalHistoryRef",
                        ref: medicalHistoryRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "MedicalHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(CurrentPregnancy, {
                        ref_key: "currentPregnancyRef",
                        ref: currentPregnancyRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "CurrentPregnancy"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Gynaecology, {
                        ref_key: "gynaecologyRef",
                        ref: gynaecologyRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Gynaecology"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Medications, {
                        ref_key: "medicationsRef",
                        ref: medicationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Medications"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(WomanBehaviour, {
                        ref_key: "womanBehaviourRef",
                        ref: womanBehaviourRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "WomanBehaviour"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs"])) : createCommentVNode("", true)
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

const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3aac7d88"]]);

export { Profile as default };
