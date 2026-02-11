import { f as ref, c as computed, s as defineComponent, a2 as onMounted, n as nextTick, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bb as IonCardHeader, ba as IonCardTitle, a5 as createTextVNode, bd as IonCardContent, bK as IonCard } from './vendor-DrpjccQs.js';
import { n as icons, y as StandardValidations, z as StandardForm, P as PatientService, K as ObservationService, b as EncounterTypeId, t as toastWarning, G as toastSuccess, H as HisDate, aq as ConceptService, _ as _export_sfc } from '../index-BgFAo788.js';

const useLabourObstetricHistoryForm = () => {
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
  const hasCaesareanSection = (formValues) => {
    if (!formValues) return false;
    const deliveryKeys = Object.keys(formValues).filter((key) => key.startsWith("Mode of delivery "));
    return deliveryKeys.some((key) => {
      const modeId = formValues[key];
      return modeId === 1;
    });
  };
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
        options: modeOfDeliveryOptions,
        grid: { s: "12", md: "6" },
        validation: (value) => {
          const required = StandardValidations.required(value);
          if (required) return `Mode of delivery (child ${index + 1}) is required`;
          return null;
        },
        onChange: (value) => {
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
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const modeId = allFormValues?.[`Mode of delivery ${index}`];
          const selectedOption = modeOfDeliveryOptions.find((opt) => opt.id === modeId);
          const modeName = selectedOption?.name || "";
          if (modeName === "Other" || modeName === "Caesarean section") {
            const required = StandardValidations.required(value);
            if (required) return `Specify delivery details (child ${index + 1}) is required`;
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
  const labourObstetricHistoryFormSection = computed(() => {
    const formElements = [
      {
        componentType: "inputField",
        header: "Gravida",
        name: "Gravida",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value) => {
          const required = StandardValidations.required(value);
          if (required) return "Gravida is required";
          const num = Number(value);
          if (isNaN(num)) return "Value must be a number";
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
            updates["Gestation age at last live birth"] = "";
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
      {
        componentType: "inputField",
        header: "Abortions/Miscarriages",
        name: "Abortions/Miscarriages",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gravida = parseInt(allFormValues?.["Gravida"]) || 0;
          if (gravida <= 1) return null;
          const required = StandardValidations.required(value);
          if (required) return "Abortions/Miscarriages is required";
          const num = Number(value);
          if (isNaN(num)) return "Value must be a number";
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
      {
        componentType: "inputField",
        header: "Stillbirths",
        name: "Stillbirths",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const gravida = parseInt(allFormValues?.["Gravida"]) || 0;
          if (gravida <= 1) return null;
          const required = StandardValidations.required(value);
          if (required) return "Stillbirths is required";
          const num = Number(value);
          if (isNaN(num)) return "Value must be a number";
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
      {
        componentType: "dateInputField",
        header: "Last Normal Menstrual Period (LNMP)",
        name: "lmnp date",
        icon: icons.calenderPrimary,
        grid: { s: "12", md: "6" },
        validation: (value) => {
          const required = StandardValidations.required(value);
          if (required) return "Last Normal Menstrual Period (LNMP) is required";
          return null;
        },
        onChange: (value) => {
          const updates = {};
          if (!value || value === "") {
            updates["Estimated date of delivery"] = "";
            return updates;
          }
          const lmnpDateValue = Date.parse(value);
          if (!isNaN(lmnpDateValue)) {
            const eddDateValue = new Date(lmnpDateValue + 40 * 7 * 24 * 60 * 60 * 1e3);
            updates["Estimated date of delivery"] = eddDateValue.toISOString().split("T")[0];
          }
          return updates;
        }
      },
      {
        componentType: "inputField",
        header: "Gestational age in weeks",
        name: "Gestation weeks",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value) => {
          const required = StandardValidations.required(value);
          if (required) return "Gestational age in weeks is required";
          const num = Number(value);
          if (isNaN(num)) return "Value must be a number";
          if (num < 0 || num > 42) return "Gestational age must be between 0 and 42 weeks";
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Total number of ANC contacts",
        name: "Number of previous anc contacts",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value) => {
          const required = StandardValidations.required(value);
          if (required) return "Total number of ANC contacts is required";
          const num = Number(value);
          if (isNaN(num)) return "Value must be a number";
          if (num < 0) return "ANC contacts must be 0 or greater";
          return null;
        }
      },
      {
        componentType: "dateInputField",
        header: "Estimated Date of Delivery (EDD)",
        name: "Estimated date of delivery",
        icon: icons.calenderPrimary,
        disabled: true,
        grid: { s: "12", md: "6" }
      },
      {
        componentType: "inputField",
        header: "Live Births",
        name: "LiveBirths",
        disabled: true,
        grid: { s: "12", md: "6" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida > 1;
        }
      },
      {
        componentType: "inputField",
        header: "Parity",
        name: "Parity",
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
      {
        componentType: "Alert",
        name: "FirstPregnancyAlert",
        backgroundColor: "#FFD700",
        icon: "info-circle",
        textColor: "#000000",
        value: "First pregnancy, proceed.",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const gravida = parseInt(allFormValues["Gravida"]);
          return gravida === 1;
        }
      },
      {
        componentType: "radioButtonField",
        header: "What was the gestational age at last live birth?",
        name: "Gestation age at last live birth",
        options: [
          { value: "<28 weeks", label: "<28 weeks" },
          { value: "28-34 weeks", label: "28-34 weeks" },
          { value: "35-36 weeks", label: "35-36 weeks" },
          { value: ">=37 weeks (Full term)", label: ">=37 weeks (Full term)" }
        ],
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const gravida = parseInt(allFormValues?.["Gravida"]) || 0;
          if (gravida > 1 && liveBirthsCount.value > 0) {
            const required = StandardValidations.required(value);
            if (required) return "Gestational age at last live birth is required";
          }
          return null;
        },
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
      {
        componentType: "radioButtonField",
        header: "Last live birth had congenital abnormalities",
        name: "Last live birth had congenital abnormalities",
        type: "inline",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const gravida = parseInt(allFormValues?.["Gravida"]) || 0;
          if (gravida > 1 && liveBirthsCount.value > 0) {
            const required = StandardValidations.required(value);
            if (required) return "Last live birth had congenital abnormalities is required";
          }
          return null;
        },
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
      {
        componentType: "Heading",
        name: "Previous caesarean section details",
        grid: { s: "12" },
        condition: (allFormValues) => hasCaesareanSection(allFormValues)
      },
      {
        componentType: "inputField",
        header: "Caesarean section date or year",
        name: "Caesarean section date or year",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (hasCaesareanSection(allFormValues) && (!value || value === "")) {
            return "Caesarean section date or year is required";
          }
          return null;
        },
        condition: (allFormValues) => hasCaesareanSection(allFormValues)
      },
      {
        componentType: "textAreaField",
        header: "Indication for the caesarean section",
        name: "Indication for the caesarean section",
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (hasCaesareanSection(allFormValues) && (!value || value === "")) {
            return "Indication for the caesarean section is required";
          }
          return null;
        },
        condition: (allFormValues) => hasCaesareanSection(allFormValues)
      },
      {
        componentType: "inputField",
        header: "Outcome of baby at birth",
        name: "Outcome of baby at birth",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (hasCaesareanSection(allFormValues) && (!value || value === "")) {
            return "Outcome of baby at birth is required";
          }
          return null;
        },
        condition: (allFormValues) => hasCaesareanSection(allFormValues)
      },
      {
        componentType: "inputField",
        header: "Baby Birthweight",
        name: "Baby Birthweight",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (hasCaesareanSection(allFormValues) && (!value || value === "")) {
            return "Baby Birthweight is required";
          }
          return null;
        },
        condition: (allFormValues) => hasCaesareanSection(allFormValues)
      },
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
            return "Past pregnancy complications is required";
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
        onChange: (value) => {
          if (!Array.isArray(value)) return {};
          const updates = {};
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
          return updates;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "inputField",
        header: "Specify other complications*",
        name: "Other complications notes",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          const complications = allFormValues?.["past pregnancies complications"];
          if (Array.isArray(complications)) {
            const hasOther = complications.some((item) => item.name === "Other");
            const hasNone = complications.some((item) => item.name === "None");
            if (hasOther && !hasNone) {
              const required = StandardValidations.required(value);
              if (required) return "Specify other complications is required";
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
    labourObstetricHistoryFormSection,
    liveBirthsCount
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Obstetric",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const obstetricFormComposable = useLabourObstetricHistoryForm();
    const obstetricHistoryForm = computed(() => {
      return obstetricFormComposable.labourObstetricHistoryFormSection.value;
    });
    const resolveObsValue = async (obs) => {
      if (obs?.value_datetime != null) {
        return HisDate.toStandardHisFormat(obs.value_datetime);
      }
      if (obs?.value_text != null) {
        return obs.value_text;
      }
      if (obs?.value_numeric != null) {
        return obs.value_numeric;
      }
      if (obs?.value_coded != null) {
        return ConceptService.getConceptName(obs.value_coded);
      }
      return null;
    };
    const getLatestObsMap = async (obsList) => {
      const map = /* @__PURE__ */ new Map();
      for (const obs of obsList) {
        const conceptName = obs?.concept_name;
        if (!conceptName) continue;
        const obsDatetime = new Date(obs?.obs_datetime || 0).getTime();
        const existing = map.get(conceptName);
        if (!existing) {
          map.set(conceptName, obs);
          continue;
        }
        const existingDatetime = new Date(existing?.obs_datetime || 0).getTime();
        if (obsDatetime >= existingDatetime) {
          map.set(conceptName, obs);
        }
      }
      return map;
    };
    const getObsByConcept = (obsList, conceptName) => {
      return obsList.filter((obs) => obs?.concept_name === conceptName).sort((a, b) => new Date(a?.obs_datetime || 0).getTime() - new Date(b?.obs_datetime || 0).getTime());
    };
    const getLatestObsByNames = async (obsList, conceptNames) => {
      const latestByName = await getLatestObsMap(obsList);
      for (const name of conceptNames) {
        const obs = latestByName.get(name);
        if (obs) return obs;
      }
      return null;
    };
    const findFieldOptions = (fieldName) => {
      const field = obstetricHistoryForm.value.find((item) => item?.name === fieldName);
      if (field && typeof field === "object" && "options" in field && Array.isArray(field.options)) {
        return field.options;
      }
      return [];
    };
    const calculateEddFromLnmp = (lnmpValue) => {
      const lmnpDateValue = Date.parse(lnmpValue);
      if (isNaN(lmnpDateValue)) return "";
      const eddDateValue = new Date(lmnpDateValue + 40 * 7 * 24 * 60 * 60 * 1e3);
      return eddDateValue.toISOString().split("T")[0];
    };
    const prefillFromAncObs = async () => {
      if (!formRef.value) return;
      const patientId = new PatientService().getID();
      const currentPregnancyEncounters = await ObservationService.getObsByEncounterId(EncounterTypeId.CURRENT_PREGNANCY);
      const ancEnrollmentEncounters = await ObservationService.getObsByEncounterId(EncounterTypeId.ANC_ENROLLMENT);
      const obstetricHistoryEncounters = await ObservationService.getObsByEncounterId(EncounterTypeId.OBSTETRIC_HISTORY);
      const currentPregnancyObs = currentPregnancyEncounters.flatMap((e) => e.obs || []);
      const ancEnrollmentObs = ancEnrollmentEncounters.flatMap((e) => e.obs || []);
      const obstetricHistoryObs = obstetricHistoryEncounters.flatMap((e) => e.obs || []);
      const latestObstetricHistory = await getLatestObsMap(obstetricHistoryObs);
      const lnmpObs = await getLatestObsByNames(currentPregnancyObs, ["lmnp date", "lmnpDate", "LNMP date"]);
      const eddObs = await getLatestObsByNames(currentPregnancyObs, [
        "Estimated date of delivery",
        "Estimated date of delivery from ultrasound"
      ]);
      const gestationWeeksObs = await getLatestObsByNames(currentPregnancyObs, ["Gestation weeks", "Gestation age", "lmnpGestationAge"]);
      const ancContactsObs = await getLatestObsByNames(ancEnrollmentObs, [
        "Number of previous anc contacts",
        "Number of ANC visits",
        "number of anc visits"
      ]);
      const gravidaObs = latestObstetricHistory.get("Gravida");
      const abortionsObs = latestObstetricHistory.get("Abortions/Miscarriages");
      const stillbirthsObs = latestObstetricHistory.get("Stillbirths");
      const liveBirthsObs = latestObstetricHistory.get("LiveBirths");
      const parityObs = latestObstetricHistory.get("Parity");
      const gestationAgeLastObs = latestObstetricHistory.get("Gestation age at last live birth");
      const congenitalObs = latestObstetricHistory.get("Last live birth had congenital abnormalities");
      const lnmpValue = lnmpObs ? await resolveObsValue(lnmpObs) : null;
      const eddValue = eddObs ? await resolveObsValue(eddObs) : null;
      const gestationWeeksValue = gestationWeeksObs ? await resolveObsValue(gestationWeeksObs) : null;
      let ancContactsValue = ancContactsObs ? await resolveObsValue(ancContactsObs) : null;
      let gravidaValue = gravidaObs ? await resolveObsValue(gravidaObs) : null;
      const abortionsValue = abortionsObs ? await resolveObsValue(abortionsObs) : null;
      const stillbirthsValue = stillbirthsObs ? await resolveObsValue(stillbirthsObs) : null;
      const liveBirthsValue = liveBirthsObs ? await resolveObsValue(liveBirthsObs) : null;
      const parityValue = parityObs ? await resolveObsValue(parityObs) : null;
      const gestationAgeLastValue = gestationAgeLastObs ? await resolveObsValue(gestationAgeLastObs) : null;
      const congenitalValue = congenitalObs ? await resolveObsValue(congenitalObs) : null;
      if ((gravidaValue === null || gravidaValue === void 0) && patientId) {
        const apiGravidaText = await ObservationService.getFirstObsValue(patientId, "Gravida", "value_text");
        const apiGravidaNumber = await ObservationService.getFirstObsValue(patientId, "Gravida", "value_numeric");
        gravidaValue = apiGravidaText ?? apiGravidaNumber ?? null;
      }
      if ((ancContactsValue === null || ancContactsValue === void 0) && patientId) {
        const apiContactsText = await ObservationService.getFirstObsValue(
          patientId,
          "Number of previous anc contacts",
          "value_text"
        );
        const apiContactsNumber = await ObservationService.getFirstObsValue(
          patientId,
          "Number of previous anc contacts",
          "value_numeric"
        );
        ancContactsValue = apiContactsText ?? apiContactsNumber ?? null;
      }
      if (lnmpValue) {
        formRef.value.setFormValue("lmnp date", lnmpValue);
      }
      if (eddValue) {
        formRef.value.setFormValue("Estimated date of delivery", eddValue);
      } else if (lnmpValue) {
        formRef.value.setFormValue("Estimated date of delivery", calculateEddFromLnmp(String(lnmpValue)));
      }
      if (gestationWeeksValue !== null && gestationWeeksValue !== void 0) {
        formRef.value.setFormValue("Gestation weeks", gestationWeeksValue);
      }
      if (ancContactsValue !== null && ancContactsValue !== void 0) {
        formRef.value.setFormValue("Number of previous anc contacts", ancContactsValue);
      }
      if (gravidaValue !== null && gravidaValue !== void 0) {
        formRef.value.setFormValue("Gravida", gravidaValue);
      }
      if (abortionsValue !== null && abortionsValue !== void 0) {
        formRef.value.setFormValue("Abortions/Miscarriages", abortionsValue);
      }
      if (stillbirthsValue !== null && stillbirthsValue !== void 0) {
        formRef.value.setFormValue("Stillbirths", stillbirthsValue);
      }
      if (liveBirthsValue !== null && liveBirthsValue !== void 0) {
        formRef.value.setFormValue("LiveBirths", liveBirthsValue);
      }
      if (parityValue !== null && parityValue !== void 0) {
        formRef.value.setFormValue("Parity", parityValue);
      }
      if (gestationAgeLastValue !== null && gestationAgeLastValue !== void 0) {
        formRef.value.setFormValue("Gestation age at last live birth", gestationAgeLastValue);
      }
      if (congenitalValue !== null && congenitalValue !== void 0) {
        formRef.value.setFormValue("Last live birth had congenital abnormalities", congenitalValue);
      }
      const complicationsObs = getObsByConcept(obstetricHistoryObs, "past pregnancies complications");
      if (complicationsObs.length > 0) {
        const complicationValues = /* @__PURE__ */ new Set();
        for (const obs of complicationsObs) {
          const value = await resolveObsValue(obs);
          if (value) complicationValues.add(String(value));
        }
        const options = findFieldOptions("past pregnancies complications");
        const selectedOptions = options.filter((opt) => complicationValues.has(opt?.name));
        if (selectedOptions.length > 0) {
          formRef.value.setFormValue("past pregnancies complications", selectedOptions);
        }
      }
      const liveBirthsCount = Number(liveBirthsValue || 0);
      if (liveBirthsCount > 0) {
        obstetricFormComposable.liveBirthsCount.value = liveBirthsCount;
        await nextTick();
      }
      const modeOfDeliveryObs = getObsByConcept(obstetricHistoryObs, "Mode of delivery");
      if (modeOfDeliveryObs.length > 0) {
        const modeOptions = findFieldOptions("Mode of delivery 0");
        for (let index = 0; index < modeOfDeliveryObs.length; index++) {
          const obs = modeOfDeliveryObs[index];
          const modeValue = await resolveObsValue(obs);
          const matchedOption = modeOptions.find((opt) => opt?.name === modeValue);
          if (matchedOption) {
            formRef.value.setFormValue(`Mode of delivery ${index}`, matchedOption.id);
          }
          const childDetail = obs?.child?.find((child) => child?.concept_name === "Mode of delivery details");
          if (childDetail) {
            const detailValue = await resolveObsValue(childDetail);
            if (detailValue) {
              formRef.value.setFormValue(`Specify ${index}`, detailValue);
            }
          }
        }
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
          toastWarning("No obstetric history data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(obstetricHistoryData, EncounterTypeId.OBSTETRIC_HISTORY);
        formRef.value.resetForm();
        obstetricFormComposable.resetForm();
        await nextTick();
        toastSuccess("Obstetric history saved successfully");
        return true;
      } catch (error) {
        console.error("Error processing obstetric history:", error);
        toastWarning(error?.message || "Failed to save obstetric history");
        return false;
      }
    };
    onMounted(async () => {
      obstetricFormComposable.resetForm();
      await nextTick();
      await prefillFromAncObs();
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => {
        formRef.value?.resetForm();
        obstetricFormComposable.resetForm();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), { class: "dashed_bottom_border sub_item_header" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("History on previous pregnancies", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: obstetricHistoryForm.value,
                  ref_key: "formRef",
                  ref: formRef
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

const Obstetric = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-45e81aa4"]]);

const useLabourDetailsForm = () => {
  const hasSelected = (value, expected) => Array.isArray(value) && value.includes(expected);
  const todayDateString = () => (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const validateNotFutureDate = (value) => {
    if (!value || value === "") return null;
    const selectedDate = Date.parse(value);
    if (isNaN(selectedDate)) return "Invalid date";
    const today = Date.parse(todayDateString());
    if (selectedDate > today) return "Date cannot be in the future";
    return null;
  };
  const validateNotFutureTime = (value, allFormValues, dateKey) => {
    if (!value || value === "") return null;
    const selectedDate = allFormValues?.[dateKey];
    if (!selectedDate) return null;
    const today = todayDateString();
    if (selectedDate !== today) return null;
    const [hourStr, minuteStr] = String(value).split(":");
    const hour = Number(hourStr);
    const minute = Number(minuteStr);
    if (Number.isNaN(hour) || Number.isNaN(minute)) return null;
    const now = /* @__PURE__ */ new Date();
    const selected = /* @__PURE__ */ new Date();
    selected.setHours(hour, minute, 0, 0);
    if (selected.getTime() > now.getTime()) {
      return "Time cannot be in the future";
    }
    return null;
  };
  const labourDetailsFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Quick Check",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Any of the danger signs present?",
        name: "Danger signs",
        type: "multiple",
        twoColumns: true,
        options: [
          { label: "No danger sign", value: "No danger sign" },
          { label: "Bleeding vaginally", value: "Bleeding vaginally" },
          { label: "Central cyanosis", value: "Central cyanosis" },
          { label: "Convulsing", value: "Convulsing" },
          { label: "Fever", value: "Fever" },
          { label: "Severe headache", value: "Severe headache" },
          { label: "Severe vomiting", value: "Severe vomiting" },
          { label: "Epigastric pains", value: "Epigastric pains" },
          { label: "Severe abdominal pain", value: "Severe abdominal pain" },
          { label: "Unconscious", value: "Unconscious" },
          { label: "Visual disturbance", value: "Visual disturbance" },
          { label: "Diminished fetal movements", value: "Diminished fetal movements" },
          { label: "Draining liquor", value: "Draining liquor" },
          { label: "Other (specify)", value: "Other (specify)" }
        ],
        validation: (value) => {
          if (!value || value.length === 0) return "Please select at least one option";
          const hasNone = value.includes("No danger sign");
          const hasOther = value.some((item) => item !== "No danger sign");
          if (hasNone && hasOther) return "'No danger sign' cannot be selected with other danger signs";
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify other danger signs",
        name: "Other danger signs",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (hasSelected(allFormValues?.["Danger signs"], "Other (specify)")) {
            const required = StandardValidations.required(value);
            if (required) return "Specify other danger signs is required";
          }
          return null;
        },
        condition: (formValues) => hasSelected(formValues?.["Danger signs"], "Other (specify)")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "checkboxField",
        header: "What is the reason for coming to the facility?",
        name: "What is the reason for coming to the facility",
        type: "multiple",
        twoColumns: true,
        options: [
          { value: "In labour", label: "In labour" },
          { value: "Delivered on the way to the facility", label: "Delivered on the way to the facility" },
          { value: "Elective CS", label: "Elective CS" },
          { value: "Pre-eclampsia/eclampsia", label: "Pre-eclampsia/eclampsia" },
          { value: "Preterm labour", label: "Preterm labour" },
          { value: "PROM/PPROM", label: "Premature Rupture of Membranes/PPROM" },
          { value: "Maternal infections", label: "Maternal infections" },
          { value: "Fetal distress", label: "Fetal distress" },
          { value: "Antepartum haemorrhage", label: "Antepartum haemorrhage" },
          { value: "Other medical/obstetric conditions", label: "Other medical/obstetric conditions (specify)" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value.length === 0) return "Please select at least one option";
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Specify other medical/obstetric conditions",
        name: "Other medical/obstetric conditions (specify)",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (hasSelected(allFormValues?.["Reason for coming to the facility"], "Other medical/obstetric conditions")) {
            const required = StandardValidations.required(value);
            if (required) return "Specify other medical/obstetric conditions is required";
          }
          return null;
        },
        condition: (formValues) => hasSelected(formValues?.["Reason for coming to the facility"], "Other medical/obstetric conditions")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "radioButtonField",
        header: "Admitted from?",
        name: "Admitted from",
        type: "inline",
        options: [
          { value: "Waiting Home", label: "Waiting Home" },
          { value: "Home", label: "Home" },
          { value: "Antenatal Clinic/Ward", label: "Antenatal Clinic/Ward" },
          { value: "Other facility", label: "Other facility (specify)" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          const required = StandardValidations.required(value);
          if (required) return "Admitted from is required";
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Specify other facility",
        name: "Admitted from (specify)",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Admitted from"] === "Other facility") {
            const required = StandardValidations.required(value);
            if (required) return "Specify other facility is required";
          }
          return null;
        },
        condition: (formValues) => formValues?.["Admitted from"] === "Other facility"
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "radioButtonField",
        header: "Labour onset type?",
        name: "Labour onset type",
        type: "inline",
        options: [
          { value: "Induced", label: "Induced" },
          { value: "Spontaneous", label: "Spontaneous" }
        ],
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (hasSelected(allFormValues?.["Reason for coming to the facility"], "In labour")) {
            const required = StandardValidations.required(value);
            if (required) return "Labour onset type is required";
          }
          return null;
        },
        condition: (formValues) => hasSelected(formValues?.["Reason for coming to the facility"], "In labour")
      },
      {
        componentType: "dateInputField",
        header: "Date of labour onset",
        name: "Date of labour onset",
        icon: icons.calenderPrimary,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (hasSelected(allFormValues?.["Reason for coming to the facility"], "In labour")) {
            const required = StandardValidations.required(value);
            if (required) return "Date of labour onset is required";
          }
          return validateNotFutureDate(value);
        },
        condition: (formValues) => hasSelected(formValues?.["Reason for coming to the facility"], "In labour")
      },
      {
        componentType: "timeInputField",
        header: "Time of labour onset",
        name: "Time of labour onset",
        icon: icons.time,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (hasSelected(allFormValues?.["Reason for coming to the facility"], "In labour")) {
            const required = StandardValidations.required(value);
            if (required) return "Time of labour onset is required";
          }
          return validateNotFutureTime(value, allFormValues, "Date of labour onset");
        },
        condition: (formValues) => hasSelected(formValues?.["Reason for coming to the facility"], "In labour")
      },
      {
        componentType: "radioButtonField",
        header: "Membranes ruptured?",
        name: "Membranes ruptured",
        type: "inline",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (hasSelected(allFormValues?.["Reason for coming to the facility"], "In labour")) {
            const required = StandardValidations.required(value);
            if (required) return "Membranes ruptured is required";
          }
          return null;
        },
        condition: (formValues) => hasSelected(formValues?.["Reason for coming to the facility"], "In labour")
      },
      {
        componentType: "dateInputField",
        header: "Date membranes ruptured",
        name: "Date membranes ruptured",
        icon: icons.calenderPrimary,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const required = hasSelected(allFormValues?.["Reason for coming to the facility"], "In labour") && allFormValues?.["Membranes ruptured"] === "Yes";
          if (required) {
            const req = StandardValidations.required(value);
            if (req) return "Date membranes ruptured is required";
          }
          return validateNotFutureDate(value);
        },
        condition: (formValues) => hasSelected(formValues?.["Reason for coming to the facility"], "In labour") && formValues?.["Membranes ruptured"] === "Yes"
      },
      {
        componentType: "timeInputField",
        header: "Time membranes ruptured",
        name: "Time membranes ruptured",
        icon: icons.time,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          const required = hasSelected(allFormValues?.["Reason for coming to the facility"], "In labour") && allFormValues?.["Membranes ruptured"] === "Yes";
          if (required) {
            const req = StandardValidations.required(value);
            if (req) return "Time membranes ruptured is required";
          }
          return validateNotFutureTime(value, allFormValues, "Date membranes ruptured");
        },
        condition: (formValues) => hasSelected(formValues?.["Reason for coming to the facility"], "In labour") && formValues?.["Membranes ruptured"] === "Yes"
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "radioButtonField",
        header: "Has the woman had food in 4 hrs?",
        name: "Has she had food in 4 hrs",
        type: "inline",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: () => null
      },
      {
        componentType: "radioButtonField",
        header: "Homemade medicines taken?",
        name: "Homemade medicines taken",
        type: "inline",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: () => null
      },
      {
        componentType: "inputField",
        header: "Specify homemade medicines",
        name: "Homemade medicines (specify)",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Has the woman had homemade medicines"] === "Yes") {
            return null;
          }
          return null;
        },
        condition: (formValues) => formValues?.["Has the woman had homemade medicines"] === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Sleep?",
        name: "Sleeping",
        type: "inline",
        options: [
          { value: "Well", label: "Well" },
          { value: "Disturbed", label: "Disturbed" }
        ],
        grid: { s: "12" },
        validation: () => null
      },
      {
        componentType: "radioButtonField",
        header: "Bleeding?",
        name: "Bleeding",
        type: "inline",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: () => null
      },
      {
        componentType: "inputField",
        header: "Amount of bleeding",
        name: "Amount of bleeding",
        icon: icons.editPen,
        grid: { s: "12", md: "6" },
        validation: (value, allFormValues) => {
          if (allFormValues?.Bleeding === "Yes") {
            return null;
          }
          return null;
        },
        condition: (formValues) => formValues?.Bleeding === "Yes"
      }
    ];
  });
  return {
    labourDetailsFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Labour",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const labourDetailsComposable = useLabourDetailsForm();
    const labourDetailsForm = computed(() => {
      return labourDetailsComposable.labourDetailsFormSection.value;
    });
    const dateFields = /* @__PURE__ */ new Set(["Date of labour onset", "Date membranes ruptured"]);
    const timeFields = /* @__PURE__ */ new Set(["Time of labour onset", "Time membranes ruptured"]);
    const processLabourDetails = async (data) => {
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
          continue;
        }
        if (typeof value === "object" && value !== null) {
          const objectValue = value.value || value.name || String(value);
          if (objectValue && objectValue !== "") {
            observations.push(await ObservationService.buildValueText(key, String(objectValue)));
          }
          continue;
        }
        if (typeof value === "string" || typeof value === "number") {
          if (dateFields.has(key)) {
            observations.push(await ObservationService.buildValueDate(key, String(value)));
          } else if (timeFields.has(key)) {
            observations.push(await ObservationService.buildValueText(key, String(value)));
          } else {
            observations.push(await ObservationService.buildValueText(key, String(value)));
          }
          continue;
        }
        if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText("Labour details finding", key));
        }
      }
      return observations;
    };
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
        const labourDetailsData = await processLabourDetails(formData);
        if (labourDetailsData.length === 0) {
          toastWarning("No labour details data to save");
          return false;
        }
        await ObservationService.addObsToEncounterPatient(labourDetailsData, EncounterTypeId.LABOUR_ASSESSMENT);
        formRef.value.resetForm();
        await nextTick();
        toastSuccess("Labour details saved successfully");
        return true;
      } catch (error) {
        console.error("Error processing labour details:", error);
        toastWarning(error?.message || "Failed to save labour details");
        return false;
      }
    };
    onMounted(async () => {
      await nextTick();
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), { class: "dashed_bottom_border sub_item_header" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Labour details", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: labourDetailsForm.value,
                  ref_key: "formRef",
                  ref: formRef
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

const Labour = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be9d913d"]]);

export { Labour as L, Obstetric as O };
