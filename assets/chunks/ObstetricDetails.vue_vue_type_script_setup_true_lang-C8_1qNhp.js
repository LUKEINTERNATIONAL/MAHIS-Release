import { c as computed, eG as create$3, eH as create$5, eI as create$6, i as isRef, s as defineComponent, a3 as onMounted, n as nextTick, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, H as createCommentVNode, F as unref, b0 as personOutline, f as ref, K as modalController, w as watch, z as createElementBlock, be as IonCardContent, a7 as IonLabel, a5 as createTextVNode, D as toDisplayString, J as Fragment, S as renderList, bM as IonCard, Q as normalizeClass, bc as IonCardHeader, bb as IonCardTitle, L as IonIcon, R as alertCircleOutline, bA as IonText, N as IonButton, e4 as createOutline, bI as addOutline, x as resolveComponent } from './vendor-D71W8bKc.js';
import { bW as getAgeInDays, n as icons, P as PatientService, K as ObservationService, b as EncounterTypeId, z as StandardForm, F as DynamicButton, r as StandardModal, t as toastWarning, H as HisDate, G as toastSuccess, M as ConceptService, u as useDemographicsStore, C as useExposeFromStandardForm, b5 as RelationshipService, J as savePatientRecord, _ as _export_sfc, a3 as getFieldValue } from '../index-U6BInm9K.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-ChqyVtHp.js';
import { l as lodashExports } from './lodash-CtwTU3E5.js';
import { u as useBabyDetails } from './useBabyDetails-C-qWoe_0.js';
import { s as storeToRefs, d as defineStore } from './pinia-BqgWZabu.js';
import { V as Validation } from './StandardValidations-5CqxmlZh.js';

const nameRegex = /^[\p{L}\p{M}\s''-]+$/u;
const isWithin42Days = (deliveryDate) => {
  if (!deliveryDate) return true;
  return getAgeInDays(deliveryDate) <= 42;
};
create$3().shape({
  "First name": create$6().max(50, "First Name cannot be longer than 50 characters").matches(nameRegex, "First Name can only contain letters, spaces, apostrophes, and hyphens").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required("First Name is required") : schema.notRequired();
  }),
  "Last name": create$6().max(50, "Name cannot be longer than 50 characters").matches(nameRegex, "Last Name can only contain letters, spaces, apostrophes, and hyphens").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required("Last Name is required") : schema.notRequired();
  }),
  "Apgar score at 1 minute": create$5().typeError("Apgar score at 1 minute can only be a number").label("Apgar score at 1 minute"),
  "Apgar score at 5 minutes": create$5().typeError("Apgar score at 5 minutes can only be a number").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Apgar score at 5 minutes"),
  Weight: create$5().typeError("Weight can only be a number").min(2500).when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Weight"),
  "Height (cm)": create$5().typeError("Height can only be a number").min(500).when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Height"),
  Circumference: create$5().typeError("Circumference can only be a number").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Circumference")
});
const useDeliveryDetailsForm = (isFormLockedInput) => {
  const isFormLocked = () => {
    if (!isFormLockedInput) return false;
    if (typeof isFormLockedInput === "boolean") return isFormLockedInput;
    if (typeof isFormLockedInput === "function") return isFormLockedInput();
    if (isRef(isFormLockedInput)) return isFormLockedInput.value;
    return false;
  };
  const isDeliveryBeyond42Days = (allFormValues) => {
    const deliveryDate = allFormValues?.["Date of delivery"];
    if (!deliveryDate) return false;
    return getAgeInDays(deliveryDate) > 42;
  };
  const isBabyCaptureAllowed = (allFormValues) => !isDeliveryBeyond42Days(allFormValues);
  const deliveryDetailsFormSection = computed(() => [
    {
      componentType: "dateInputField",
      header: "Date of delivery",
      name: "Date of delivery",
      icon: icons.calendar,
      obsValueType: "value_date",
      grid: { xs: "12" },
      disabled: isFormLocked
    },
    {
      componentType: "Dashes",
      grid: { s: "12" }
    },
    {
      componentType: "radioButtonField",
      header: "Place of delivery",
      name: "Place of delivery",
      obsValueType: "value_coded",
      disabled: isFormLocked,
      options: [
        { label: "This facility", value: "this facility" },
        { label: "In transit", value: "in transit" },
        { label: "Other facility", value: "other facility" },
        { label: "Home or TBA", value: "home/tba" }
      ],
      grid: { s: "12" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" }
    },
    {
      componentType: "radioButtonField",
      header: "Staff conducting delivery",
      name: "Staff conducting delivery",
      obsValueType: "value_text",
      disabled: isFormLocked,
      options: [
        {
          label: "Skilled health worker (Nurse midwife/ community midwife)",
          value: "Skilled health worker (Nurse midwife/ community midwife)"
        },
        {
          label: "Unskilled (Patient attendant/ ward attendant)",
          value: "Unskilled (Patient attendant/ ward attendant)"
        },
        {
          label: "Traditional birth attendant (TBA)",
          value: "Traditional birth attendant (TBA)"
        }
      ],
      grid: { xs: "12", sm: "12" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" }
    },
    {
      componentType: "radioButtonField",
      header: "What was the outcome of the delivery?",
      name: "Outcome of the delivery",
      obsValueType: "value_coded",
      disabled: isFormLocked,
      options: [
        { label: "Live births", value: "Live births" },
        { label: "Neonatal death", value: "Neonatal death" },
        { label: "Stillbirths", value: "Stillbirths" }
      ],
      grid: { s: "12" }
    },
    {
      componentType: "radioButtonField",
      header: "Type of still birth?",
      name: "Type of still birth",
      obsValueType: "value_coded",
      disabled: isFormLocked,
      options: [
        { label: "Macerated still birth", value: "macerated still birth" },
        { label: "Fresh still birth", value: "fresh still birth" }
      ],
      condition: (allFormValues) => allFormValues["Outcome of the delivery"] === "Stillbirths",
      grid: { s: "12" }
    },
    {
      // Always visible when outcome is Live births — no babies.length guard
      // to avoid the reactive loop. syncBabySlots is guarded in the watcher.
      componentType: "inputField",
      header: "Number of babies",
      name: "Number of babies",
      obsValueType: "value_numeric",
      type: "number",
      disabled: isFormLocked,
      validation: (value, allFormValues) => {
        if (allFormValues["Outcome of the delivery"] !== "Live births") return null;
        if (value === null || value === void 0 || value === "") return "Required";
        const parsedValue = Number(value);
        if (!Number.isInteger(parsedValue)) return "Enter a whole number";
        if (parsedValue < 1 || parsedValue > 20) return "Enter a number between 1 and 20";
        return null;
      },
      condition: (allFormValues) => allFormValues["Outcome of the delivery"] === "Live births",
      grid: { s: "12" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" }
    }
  ]);
  const babyDetailsFormSection = computed(() => [
    {
      componentType: "timeInputField",
      header: "Time of delivery",
      name: "Time of delivery",
      icon: icons.time,
      obsValueType: "value_text",
      grid: { xs: "12" },
      disabled: isFormLocked
    },
    {
      componentType: "Dashes",
      grid: { s: "12" },
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues)
    },
    {
      componentType: "inputField",
      header: "Baby weight",
      name: "Weight",
      obsValueType: "value_numeric",
      unit: "grams",
      validation: (value) => {
        if (value === null || value === void 0 || value === "") return "Required";
        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue) || !Number.isFinite(parsedValue)) return "Baby weight can only be a number";
        if (parsedValue < 2e3 || parsedValue > 6e3) return "Baby weight must be between 2000 and 6000";
        return null;
      },
      disabled: isFormLocked,
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues),
      grid: { s: "6" }
    },
    {
      componentType: "inputField",
      header: "Baby height",
      name: "Height (cm)",
      obsValueType: "value_numeric",
      unit: "cm",
      validation: (value) => {
        if (value === null || value === void 0 || value === "") return "Required";
        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue) || !Number.isFinite(parsedValue)) return "Baby height can only be a number";
        if (parsedValue < 0 || parsedValue > 100) return "Baby height must be between 0 and 100";
        return null;
      },
      disabled: isFormLocked,
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues),
      grid: { s: "6" }
    },
    {
      componentType: "inputField",
      header: "Head circumference",
      name: "Circumference",
      obsValueType: "value_numeric",
      unit: "cm",
      validation: (value) => {
        if (value === null || value === void 0 || value === "") return "Required";
        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue) || !Number.isFinite(parsedValue)) return "Head circumference can only be a number";
        if (parsedValue < 0 || parsedValue > 45) return "Head circumference must be between 0 and 45";
        return null;
      },
      disabled: isFormLocked,
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues),
      grid: { s: "6" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" },
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues)
    },
    {
      componentType: "inputField",
      header: "APGAR score at 5 minute",
      name: "Apgar score at 5 minutes",
      obsValueType: "value_numeric",
      validation: (value) => {
        if (value === null || value === void 0 || value === "") return "Required";
        const parsedValue = Number(value);
        if (Number.isNaN(parsedValue) || !Number.isFinite(parsedValue)) return "APGAR score at 5 minutes can only be a number";
        if (parsedValue < 0 || parsedValue > 10) return "APGAR score at 5 minutes must be between 0 and 10";
        return null;
      },
      disabled: isFormLocked,
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues),
      grid: { s: "12" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" },
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues)
    },
    {
      componentType: "radioButtonField",
      header: "Mode of delivery",
      name: "Mode of delivery",
      obsValueType: "value_coded",
      disabled: isFormLocked,
      options: [
        { label: "Spontaneous Vertex Delivery", value: "Spontaneous vertex delivery" },
        { label: "Vacuum extraction delivery", value: "Vacuum extraction delivery" },
        { label: "Breech delivery", value: "Breech delivery" },
        { label: "Caesarean section", value: "Caesarean section" },
        { label: "Other mode of delivery", value: "Other mode of delivery" }
      ],
      grid: { s: "12" }
    },
    {
      componentType: "inputField",
      header: "Specify",
      name: "Other mode of delivery notes",
      obsValueType: "value_text",
      disabled: isFormLocked,
      condition: (allFormValues) => allFormValues["Mode of delivery"] === "Other mode of delivery",
      grid: { s: "12" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" }
    },
    {
      componentType: "checkboxField",
      header: "Any Newborn complications?",
      name: "Newborn baby complications",
      obsValueType: "value_coded",
      type: "multiple",
      disabled: isFormLocked,
      onChange: (value) => {
        const selected = Array.isArray(value) ? value : [];
        if (selected.includes("none") && selected.length > 1) {
          return { "Newborn baby complications": ["none"] };
        }
        return null;
      },
      options: [
        { label: "None", value: "none", exclusive: true },
        { label: "Prematurity", value: "prematurity" },
        { label: "Asphyxia", value: "Asphyxia" },
        { label: "Sepsis", value: "sepsis" },
        { label: "Congenital abnormalities", value: "Congenital abnormalities" },
        { label: "Low birthweight", value: "Low birthweight" },
        { label: "Other complications", value: "Other complications" }
      ],
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues),
      grid: { s: "12" }
    },
    {
      componentType: "inputField",
      header: "Other complications specify",
      name: "Other complications specify",
      obsValueType: "value_text",
      disabled: isFormLocked,
      condition: (allFormValues) => {
        if (!isBabyCaptureAllowed(allFormValues)) return false;
        return allFormValues["Newborn baby complications"]?.includes("Other complications");
      },
      validation: (value, allFormValues) => {
        if (allFormValues["Newborn baby complications"]?.includes("Other complications")) {
          return value ? null : "Required";
        }
        return null;
      },
      grid: { s: "12" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" },
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues)
    },
    {
      componentType: "radioButtonField",
      header: "Was resuscitation attempted?",
      name: "Resuscitation attempt",
      obsValueType: "value_coded",
      disabled: isFormLocked,
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" }
      ],
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues) && allFormValues["Newborn baby complications"]?.includes("Asphyxia"),
      grid: { s: "12" }
    },
    {
      componentType: "radioButtonField",
      header: "Type of resuscitation?",
      name: "Type of resuscitation",
      obsValueType: "value_coded",
      disabled: isFormLocked,
      options: [
        { label: "Drying only", value: "Drying only" },
        { label: "Clearing airway", value: "Clearing airway" },
        { label: "Bag and mask", value: "Bag and mask" }
      ],
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues) && allFormValues["Newborn baby complications"]?.includes("Asphyxia") && allFormValues["Resuscitation attempt"] === "Yes",
      grid: { s: "12" }
    },
    {
      componentType: "inputField",
      header: "For how long (in minutes)",
      name: "Resuscitation duration (minutes)",
      obsValueType: "value_numeric",
      disabled: isFormLocked,
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues) && allFormValues["Newborn baby complications"]?.includes("Asphyxia") && allFormValues["Resuscitation attempt"] === "Yes",
      grid: { s: "12" }
    },
    {
      componentType: "Dashes",
      grid: { s: "12" },
      condition: (allFormValues) => isBabyCaptureAllowed(allFormValues)
    }
  ]);
  return {
    deliveryDetailsFormSection,
    babyDetailsFormSection
  };
};

const _hoisted_1$3 = { class: "ion-padding" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BabyDetailsModal",
  props: {
    babyIndex: {},
    baby: {},
    deliveryDate: {},
    isFormLocked: { type: Boolean }
  },
  emits: ["close", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const babyRecord = ref({});
    const formRef = ref(null);
    const { babyDetailsFormSection } = useDeliveryDetailsForm(() => props.isFormLocked);
    const formFields = computed(() => babyDetailsFormSection.value);
    const getCodedValue = (conceptName, valueCoded) => {
      const codedValueMap = {
        "Delayed cord cutting": { 1065: "Yes", 1066: "No" },
        "Tetracycline eye ointment given?": { 1065: "Yes", 1066: "No" },
        "Vitamin K given?": { 1065: "Yes", 1066: "No" },
        "VItamin K Given?": { 1065: "Yes", 1066: "No" },
        "Chlorhexidine 7.1% applied?": { 1065: "Yes", 1066: "No" },
        "Resuscitation attempt": { 1065: "Yes", 1066: "No" },
        "Resuscitation Type": {
          11384: "Drying only",
          11385: "Clearing airway",
          11386: "Bag and mask"
        },
        "Newborn baby complications": {
          1107: "none",
          8582: "prematurity",
          8584: "sepsis",
          8585: "Congenital abnormalities",
          8586: "Asphyxia",
          8587: "Low birthweight",
          8588: "Nursery",
          8583: "Other complications"
        },
        "Management given to newborn": {
          1107: "None",
          13006: "Routine newborn care",
          13007: "Kangaroo mother care",
          13008: "Antibiotics",
          13009: "Resuscitation",
          13010: "Photo Therapy",
          13011: "Other"
        }
      };
      return codedValueMap[conceptName]?.[valueCoded] ?? valueCoded.toString();
    };
    onMounted(async () => {
      await nextTick();
      const personInformation = props.baby?.personInformation;
      if (!personInformation) return;
      const IDs = {
        ID: personInformation.ID,
        patient_id: personInformation.person_id
      };
      babyRecord.value = await PatientService.getPatient(IDs);
      const data = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.Delivery_Details, babyRecord.value);
      if (!data || !Array.isArray(data)) return;
      await nextTick();
      const conceptToFieldName = {
        "Baby weight (grams)": "Weight",
        "Baby height (cm)": "Height (cm)",
        "Height (cm)": "Height (cm)",
        "Head circumference": "Circumference",
        "Apgar score at 1 minute": "Apgar score at 1 minute",
        "Apgar score at 5 minutes": "Apgar score at 5 minutes",
        "APGAR score at 10 minutes": "APGAR score at 10 minutes",
        "Delayed cord cutting": "Delayed cord cutting",
        "Tetracycline eye ointment given?": "Tetracycline eye ointment given?",
        "Vitamin K given?": "Vitamin K given?",
        "VItamin K Given?": "Vitamin K given?",
        // handle typo variant
        "Chlorhexidine 7.1% applied?": "Chlorhexidine 7.1% applied?",
        "Newborn baby complications": "Newborn baby complications",
        "Management given to newborn": "Management given to newborn",
        "Resuscitation attempt": "Resuscitation attempt",
        "Resuscitation Type": "Type of resuscitation",
        "Resuscitation duration (minutes)": "Resuscitation duration (minutes)"
      };
      const groupedData = {};
      data.forEach((obs) => {
        if (!groupedData[obs.concept_name]) groupedData[obs.concept_name] = [];
        groupedData[obs.concept_name].push(obs);
      });
      Object.entries(groupedData).forEach(([conceptName, observations]) => {
        const fieldName = conceptToFieldName[conceptName];
        if (!fieldName) return;
        if (conceptName === "Newborn baby complications" || conceptName === "Management given to newborn") {
          const values = observations.map((obs2) => getCodedValue(conceptName, obs2.value_coded));
          formRef.value?.setFormValue(fieldName, values);
          return;
        }
        const obs = observations[0];
        let fieldValue;
        if (obs.value_numeric != null) {
          fieldValue = obs.value_numeric.toString();
        } else if (obs.value_text != null && obs.value_text !== "") {
          fieldValue = obs.value_text;
        } else if (obs.value_coded != null) {
          fieldValue = getCodedValue(conceptName, obs.value_coded);
        }
        if (fieldValue !== void 0) {
          formRef.value?.setFormValue(fieldName, fieldValue);
        }
      });
    });
    const setBabyDemographics = (_element, value) => {
      babyRecord.value = value;
    };
    const onSave = async () => {
      if (lodashExports.isEmpty(babyRecord.value)) {
        toastWarning("Please select a baby");
        return;
      }
      if (HisDate.toStandardHisFormat(babyRecord.value.personInformation.birthdate) !== HisDate.toStandardHisFormat(props.deliveryDate)) {
        toastWarning("Delivery and birthdate must be the same");
        return;
      }
      const validationResult = formRef.value?.validateForm();
      const formData = formRef.value?.getFormValues();
      const patientRecord = await ObservationService.buildRelativeObs(babyRecord.value, formData, EncounterTypeId.Delivery_Details);
      if (patientRecord && validationResult == null) {
        modalController.dismiss(babyRecord.value);
        toastSuccess("Baby details saved successfully");
      } else {
        toastWarning("Please fill in the required fields");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: `Baby ${__props.babyIndex + 1} Details`,
        subtitle: "Enter newborn information",
        headerIcon: unref(personOutline)
      }, {
        "top-buttons": withCtx(() => [
          !props.isFormLocked ? (openBlock(), createBlock(DynamicButton, {
            key: 0,
            name: "Save",
            onClick: onSave,
            fill: "solid",
            iconSlot: "end"
          })) : createCommentVNode("", true)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createVNode(FindRegisterPatient, {
              isBaby: true,
              patient: props.baby,
              isFormLocked: props.isFormLocked,
              onValueChanged: _cache[0] || (_cache[0] = (fieldName, value) => setBabyDemographics("", value))
            }, null, 8, ["patient", "isFormLocked"]),
            createVNode(StandardForm, {
              ref_key: "formRef",
              ref: formRef,
              "form-data": formFields.value
            }, null, 8, ["form-data"])
          ])
        ]),
        _: 1
      }, 8, ["title", "headerIcon"]);
    };
  }
});

const emptyToNull = (v) => v == null || v === "" ? null : v;
async function getFirstObsByConcepts(obsArray, conceptNames) {
  for (const name of conceptNames) {
    const obs = obsArray.find((o) => o.concept_name?.toLowerCase() === name.toLowerCase());
    if (!obs) continue;
    const v = obs.value_text ?? obs.value_numeric ?? obs.value_datetime ?? obs.value_date;
    if (v != null && v !== "") return v;
    if (obs.value_coded != null && obs.value_coded !== "") {
      const label = await ConceptService.getConceptName(Number(obs.value_coded));
      if (label) return label;
    }
  }
  return null;
}
async function extractObsValue(obsArray, conceptNames) {
  const raw = await getFirstObsByConcepts(obsArray, conceptNames);
  return emptyToNull(raw);
}
const mapPlace = (place) => {
  const p = String(place).toLowerCase().trim();
  if (p.includes("this facility")) return "this facility";
  if (p.includes("home")) return "home/tba";
  if (p.includes("transit")) return "in transit";
  if (p.includes("other facility")) return "other facility";
  return null;
};
const mapMode = (mode) => {
  const m = String(mode).toLowerCase().trim();
  if (m.includes("spontaneous vertex")) return "Spontaneous vertex delivery";
  if (m.includes("vacuum")) return "Vacuum extraction delivery";
  if (m.includes("breech")) return "Breech delivery";
  if (m.includes("caesarean") || m.includes("cesarean")) return "Caesarean section";
  if (m.includes("other")) return "Other mode of delivery";
  return null;
};
const mapOutcome = (condition) => {
  const c = String(condition).toLowerCase().trim();
  if (c.includes("live full term") || c.includes("live pre-term") || c.includes("live birth")) return { outcome: "Live births" };
  if (c.includes("neonatal death")) return { outcome: "Neonatal death" };
  if (c.includes("macerated")) return { outcome: "Stillbirths", typeOfStillBirth: "macerated still birth" };
  if (c.includes("fresh stillbirth") || c.includes("fresh still birth")) return { outcome: "Stillbirths", typeOfStillBirth: "fresh still birth" };
  return null;
};
const STAFF_OPTIONS = [
  "md/co/ma/nurse midwife/cma",
  "pa/wa/hsa/other/none",
  "skilled birth attendant",
  "unskilled birth attendant",
  "other"
];
function mapStaff(raw) {
  const trimmed = String(raw).trim();
  const match = STAFF_OPTIONS.find((opt) => trimmed.toLowerCase() === opt.toLowerCase());
  return { value: match ?? "other", otherText: match ? void 0 : trimmed };
}
function formatTimeForInput(value) {
  if (value == null || value === "") return null;
  const d = new Date(value);
  if (isNaN(d.getTime())) return null;
  const h = d.getHours().toString().padStart(2, "0");
  const m = d.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}
async function extractLabourPrefillValues(obsArray) {
  const [dateOfDelivery, timeOfDelivery, modeOfDelivery, placeOfDelivery, staffConductingDelivery, babyCondition, numberOfBabies] = await Promise.all([
    extractObsValue(obsArray, ["Date of delivery"]),
    extractObsValue(obsArray, ["Time of delivery"]),
    extractObsValue(obsArray, ["Mode of delivery"]),
    extractObsValue(obsArray, ["Place of delivery"]),
    extractObsValue(obsArray, ["Staff conducting delivery"]),
    extractObsValue(obsArray, ["Baby general condition at birth"])
  ]);
  return {
    dateOfDelivery,
    timeOfDelivery,
    modeOfDelivery,
    placeOfDelivery,
    staffConductingDelivery,
    babyCondition,
    numberOfBabies
  };
}
function applyLabourPrefillToForm(formRef, values) {
  const set = (key, val) => {
    if (val != null && val !== "") formRef.setFormValue(key, val);
  };
  set("Date of delivery", values.dateOfDelivery);
  const timeVal = values.timeOfDelivery != null ? formatTimeForInput(String(values.timeOfDelivery)) ?? values.timeOfDelivery : null;
  set("Time of delivery", timeVal);
  const mappedMode = values.modeOfDelivery != null ? mapMode(String(values.modeOfDelivery)) : null;
  set("Mode of delivery", mappedMode);
  const mappedPlace = values.placeOfDelivery != null ? mapPlace(String(values.placeOfDelivery)) : null;
  set("Place of delivery", mappedPlace);
  if (values.staffConductingDelivery != null) {
    const { value, otherText } = mapStaff(String(values.staffConductingDelivery));
    formRef.setFormValue("Staff conducting delivery", value);
    if (otherText) formRef.setFormValue("otherStaff", otherText);
  }
  if (values.babyCondition != null) {
    const outcome = mapOutcome(String(values.babyCondition));
    if (outcome) {
      formRef.setFormValue("Outcome of the delivery", outcome.outcome);
      if (outcome.typeOfStillBirth) formRef.setFormValue("Type of still birth", outcome.typeOfStillBirth);
    }
  }
  const hasNumberOfBabies = values.numberOfBabies != null && values.numberOfBabies !== "";
  if (hasNumberOfBabies && values.babyCondition == null) {
    formRef.setFormValue("Outcome of the delivery", "Live births");
  }
  if (hasNumberOfBabies) {
    const num = Number(values.numberOfBabies);
    formRef.setFormValue("Number of babies", Number.isFinite(num) ? num : String(values.numberOfBabies));
  }
  return { setNumberOfBabies: hasNumberOfBabies };
}
function applyNumberOfBabiesFallback(formRef, existingChildrenCount, labourAlreadySetNumberOfBabies) {
  if (labourAlreadySetNumberOfBabies || existingChildrenCount <= 0) return;
  formRef.setFormValue("Outcome of the delivery", "Live births");
  formRef.setFormValue("Number of babies", existingChildrenCount);
}
function getPrefilledNumberOfBabies(formRef) {
  const raw = formRef.getFormValues?.()?.["Number of babies"];
  if (raw == null || raw === "") return 0;
  const n = Number(raw);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}
async function runDeliveryDetailsPrefill(formRef) {
  const result = { setNumberOfBabies: false };
  if (!formRef) return result;
  const labourObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.Labour_and_delivery_visit);
  if (!labourObs?.length) return result;
  const values = await extractLabourPrefillValues(labourObs);
  Object.assign(result, applyLabourPrefillToForm(formRef, values));
  return result;
}

const _hoisted_1$2 = { class: "container" };
const _hoisted_2 = {
  key: 0,
  class: "baby-list-container"
};
const _hoisted_3 = { class: "divider" };
const _hoisted_4 = { class: "baby-cards-grid" };
const _hoisted_5 = {
  key: 0,
  class: "baby-details"
};
const _hoisted_6 = {
  key: 0,
  class: "detail-row"
};
const _hoisted_7 = { class: "detail-value" };
const _hoisted_8 = {
  key: 1,
  class: "detail-row"
};
const _hoisted_9 = { class: "detail-value" };
const _hoisted_10 = {
  key: 2,
  class: "detail-row"
};
const _hoisted_11 = { class: "detail-value" };
const _hoisted_12 = {
  key: 1,
  class: "no-data"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DeliveryDetails",
  setup(__props, { expose: __expose }) {
    const { formRef } = useExposeFromStandardForm();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const formValues = computed(() => formRef.value?.getFormValues());
    const {
      babies,
      existingBabies,
      newBabies,
      isFormLocked,
      getBabyName,
      getBabyGender,
      getBabyBirthdate,
      hasBabyData,
      formatDate,
      mapChildToBaby,
      openBabyModal,
      resetBabies,
      resetNewBabies,
      syncBabySlots
    } = useBabyDetails(_sfc_main$3);
    const { deliveryDetailsFormSection } = useDeliveryDetailsForm(() => isFormLocked.value);
    const loadData = async () => {
      await nextTick();
      resetBabies();
      formRef.value?.resetForm();
      const children = await RelationshipService.children_from_latest_delivery();
      if (children?.length > 0) {
        existingBabies.value = children.map(mapChildToBaby);
      }
      const { setNumberOfBabies } = await runDeliveryDetailsPrefill(formRef.value);
      if (formRef.value) {
        applyNumberOfBabiesFallback(formRef.value, existingBabies.value.length, setNumberOfBabies);
      }
      await nextTick();
      const count = formRef.value ? getPrefilledNumberOfBabies(formRef.value) : 0;
      if (count > 0 && !isFormLocked.value) syncBabySlots(count);
    };
    watch(
      () => formValues.value?.["Number of babies"],
      (newCount, oldCount) => {
        if (isFormLocked.value) return;
        if (newCount === oldCount) return;
        const count = parseInt(newCount) || 0;
        syncBabySlots(count);
      },
      { flush: "post" }
    );
    watch(
      () => patient.value,
      async () => {
        await loadData();
      },
      { deep: true }
    );
    onMounted(async () => {
      await loadData();
    });
    const onSubmit = async () => {
      const activeBabies = isFormLocked.value ? existingBabies.value : newBabies.value;
      if (activeBabies.length > 0) {
        for (const baby of activeBabies) {
          if (!baby?.ID) return;
          await RelationshipService.createRelationship(baby, patient.value, 32);
          await savePatientRecord(baby, true);
        }
      }
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit)) {
        toastSuccess("Delivery details data saved successfully");
      }
      formRef.value?.resetForm();
      resetNewBabies();
    };
    __expose({ onSubmit });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Delivery Details",
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(deliveryDetailsFormSection)
                }, null, 8, ["form-data"]),
                unref(babies).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(unref(IonLabel), { class: "section-title" }, {
                      default: withCtx(() => [
                        createTextVNode("Baby Details (" + toDisplayString(unref(babies).length) + ")", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(babies), (baby, index) => {
                      return openBlock(), createBlock(unref(IonCard), {
                        key: index,
                        class: normalizeClass(["baby-card", { "has-data": unref(hasBabyData)(baby) }])
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCardHeader), null, {
                            default: withCtx(() => [
                              createVNode(unref(IonCardTitle), { class: "baby-title" }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonIcon), {
                                    icon: unref(personOutline),
                                    class: "baby-icon"
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" Baby " + toDisplayString(index + 1), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(IonCardContent), { class: "baby-content" }, {
                            default: withCtx(() => [
                              unref(hasBabyData)(baby) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                unref(getBabyName)(baby) ? (openBlock(), createElementBlock("div", _hoisted_6, [
                                  _cache[0] || (_cache[0] = createBaseVNode("span", { class: "detail-label" }, "Name:", -1)),
                                  createBaseVNode("span", _hoisted_7, toDisplayString(unref(getBabyName)(baby)), 1)
                                ])) : createCommentVNode("", true),
                                unref(getBabyGender)(baby) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                  _cache[1] || (_cache[1] = createBaseVNode("span", { class: "detail-label" }, "Gender:", -1)),
                                  createBaseVNode("span", _hoisted_9, toDisplayString(unref(getBabyGender)(baby)), 1)
                                ])) : createCommentVNode("", true),
                                unref(getBabyBirthdate)(baby) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                  _cache[2] || (_cache[2] = createBaseVNode("span", { class: "detail-label" }, "Birth Date:", -1)),
                                  createBaseVNode("span", _hoisted_11, toDisplayString(unref(formatDate)(unref(getBabyBirthdate)(baby))), 1)
                                ])) : createCommentVNode("", true)
                              ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(alertCircleOutline),
                                  class: "no-data-icon"
                                }, null, 8, ["icon"]),
                                createVNode(unref(IonText), { class: "no-data-text" }, {
                                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                    createTextVNode("No details captured", -1)
                                  ])]),
                                  _: 1
                                })
                              ])),
                              createVNode(unref(IonButton), {
                                expand: "block",
                                fill: unref(hasBabyData)(baby) ? "outline" : "solid",
                                onClick: ($event) => unref(openBabyModal)(index, formValues.value?.["Date of delivery"]),
                                class: "action-button",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonIcon), {
                                    icon: unref(hasBabyData)(baby) ? unref(createOutline) : unref(addOutline),
                                    slot: "start"
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" " + toDisplayString(unref(hasBabyData)(baby) ? "Edit Details" : "Add Details"), 1)
                                ]),
                                _: 2
                              }, 1032, ["fill", "onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
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

const DeliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ae5d7314"]]);

const babyDetails = [
  {
    sideColSize: 1,
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "First name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "First name",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Last name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Last name",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "Baby weight",
              unit: "grams",
              icon: icons.weight,
              valueType: "text",
              value: "",
              name: "Weight",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Baby height",
              unit: "cm",
              icon: icons.height,
              value: "",
              valueType: "text",
              name: "Height (cm)",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "APGAR score at 5 minute",
              unit: "",
              icon: icons.editPen,
              valueType: "text",
              value: "",
              name: "Apgar score at 5 minutes",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Baby general condition at birth",
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "Any Newborn complications?",
        selectedValue: "",
        class: "bold",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Prematurity",
          value: "prematurity",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Sepsis",
          value: "sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Congenital abnormalities",
          value: "Congenital abnormalities",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Asphyxia",
          value: "Asphyxia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Low birthweight",
          value: "Low birthweight",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Asphyxia",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was resuscitation attempted?",
        selectedValue: "",
        name: "Resuscitation attempt",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Resuscitation attempt",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Type of resuscitation?",
        selectedValue: "",
        displayNone: true,
        class: "bold",
        name: "Type of resuscitation"
      },
      data: [
        {
          name: "Drying only",
          value: "Drying only",
          colSize: "7"
        },
        {
          name: "Clearing airway",
          value: "Clearing airway",
          colSize: "7"
        },
        {
          name: "Bag and mask",
          value: "Bag and mask",
          colSize: "7"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    classDash: "dashed_bottom_border _padding",
    childName: "Baby general condition at birth",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: true
      },
      data: [
        {
          name: "Other complications",
          value: "Other complications",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  }
];
create$3().shape({
  "First name": create$6().required("First Name is required").max(50, "First Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Last name": create$6().required("first name is required").max(50, "Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Apgar score at 1 minute": create$5().typeError("Apgar score at 1 minute can only be a number").required("Apgar score at 1 minute is required").label("Apgar score at 1 minute"),
  "Apgar score at 5 minutes": create$5().typeError("Apgar score at 5 minutes can only be a number").required().label("Apgar score at 5 minutes"),
  Weight: create$5().typeError("Weight can only be a number").min(2500).required().label("Weight"),
  "Height (cm)": create$5().typeError("Height can only be a number").min(500).required().label("Height"),
  Circumference: create$5().typeError("Circimference can only be a number").required().label("Circumference")
});
const initialDeliveryDetails = [
  {
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Date of delivery*",
              value: "",
              name: "Date of delivery",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date"
            },
            {
              inputHeader: "Time of delivery*",
              value: "",
              name: "Time of delivery",
              icon: icons.timePicker,
              required: true,
              valueType: "text",
              eventType: "input",
              isTimePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick time"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Mode of delivery*",
        selectedValue: "",
        class: "bold",
        name: "Mode of delivery",
        displayNext: "Other mode of delivery"
      },
      data: [
        {
          name: "Spontaneous Vertex Delivery",
          value: "Spontaneous vertex delivery",
          colSize: "5"
        },
        {
          name: "Vacuum extraction delivery",
          value: "Vacuum extraction delivery",
          colSize: "5"
        },
        {
          name: "Breech delivery",
          value: "Breech delivery",
          colSize: "5"
        },
        {
          name: "Caesarean section",
          value: "Caesarean section",
          colSize: "5"
        },
        {
          name: "Other mode of delivery",
          value: "Other mode of delivery",
          colSize: "5"
        }
      ]
    }
  },
  {
    childName: "Mode of delivery",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other mode of delivery notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Place of delivery*",
        selectedValue: "",
        name: "Place of delivery",
        class: "bold"
      },
      data: [
        {
          name: "This facility",
          value: "this facility",
          colSize: "5"
        },
        {
          name: "In transit",
          value: "in transit",
          colSize: "5"
        },
        {
          name: "Other facility",
          value: "other facility",
          colSize: "5"
        },
        {
          name: "Home or TBA",
          value: "home/tba",
          colSize: "5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Staff conducting delivery*",
        selectedValue: "",
        class: "bold",
        name: "Staff conducting delivery",
        displayNext: "other"
      },
      data: [
        {
          name: "MD/CO/MA/Nurse midwife/CMA",
          value: "md/co/ma/nurse midwife/cma",
          colSize: "7"
        },
        {
          name: "PA/WA/HSA/None",
          value: "pa/wa/hsa/other/none",
          colSize: "7"
        },
        {
          name: "Other",
          value: "other",
          colSize: "7"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    childName: "Staff conducting delivery",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Other staff conducting delivery",
              value: "",
              name: "otherStaff",
              icon: icons.editPen,
              required: true,
              valueType: "text",
              eventType: "input",
              placeholder: "Enter staff name",
              alertsErrorMassage: "Please specify the staff name",
              showField: false
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What was the outcome of the delivery?*",
        selectedValue: "",
        class: "bold",
        name: "Outcome of the delivery",
        displayNext: "Live births"
      },
      data: [
        {
          name: "Live births",
          value: "Live births",
          colSize: "7"
        },
        {
          name: "Neonatal death",
          value: "Neonatal death",
          colSize: "7"
        },
        {
          name: "Stillbirths",
          value: "Stillbirths",
          colSize: "7"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Type of still birth?*",
        selectedValue: "",
        class: "bold",
        name: "Type of still birth",
        displayNone: true
      },
      data: [
        {
          name: "Macerated still birth",
          value: "macerated still birth",
          colSize: "7"
        },
        {
          name: "Fresh still birth",
          value: "fresh still birth",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Outcome of the delivery",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Total number of babies*",
              unit: "baby",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Number of babies",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  }
];
const useDeliveryDetailsStore = defineStore("deliveryDetailsStore", {
  state: () => ({
    deliveryDetails: [...initialDeliveryDetails],
    babyDetails: [...lodashExports.cloneDeep(babyDetails)]
  }),
  actions: {
    setDeliveryDetails(data) {
      this.deliveryDetails = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialDeliveryDetails);
      return [...data];
    },
    setBabyDetails(details = babyDetails) {
      this.babyDetails = [...lodashExports.cloneDeep(details)];
    }
  }
  //
});

const useHIVStatusAndTreatmentForm = () => {
  const deliveryDetailsStore = useDeliveryDetailsStore();
  const hivStatusAndTreatmentFormSection = computed(() => {
    const isMotherUnknown = (allFormValues) => allFormValues["Mother HIV Status"] === "unknown";
    const isMotherPositive = (allFormValues) => allFormValues["Mother HIV Status"] === "positive";
    const isNewHivPositive = (allFormValues) => allFormValues["New HIV status"] === "Positive";
    const isMotherHivPositivePath = (allFormValues) => isMotherPositive(allFormValues) || isNewHivPositive(allFormValues);
    const isArtInitiated = (allFormValues) => isMotherPositive(allFormValues) && allFormValues["ART treatment"] === "yes" || isNewHivPositive(allFormValues) && allFormValues["Has the woman started ART treatment"] === "Yes";
    const isBabySectionAllowed = (allFormValues) => {
      const deliveryDetails = deliveryDetailsStore.deliveryDetails;
      const babyCountValue = allFormValues["Number of babies"] ?? getFieldValue(deliveryDetails, "Number of babies", "value");
      const babyCount = Number(babyCountValue);
      if (!Number.isFinite(babyCount) || babyCount <= 0) {
        return false;
      }
      const deliveryDate = allFormValues["Date of delivery"] ?? getFieldValue(deliveryDetails, "Date of delivery", "value");
      if (deliveryDate && getAgeInDays(deliveryDate) > 42) {
        return false;
      }
      return true;
    };
    return [
      {
        componentType: "radioButtonField",
        header: "HIV status of woman",
        name: "Mother HIV Status",
        obsValueType: "value_coded",
        validation: Validation.required,
        options: [
          {
            label: "Positive",
            value: "positive"
          },
          {
            label: "Negative",
            value: "negative"
          },
          {
            label: "Unknown",
            value: "unknown"
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
        header: "Is the woman started on ART",
        name: "ART treatment",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ],
        condition: (allFormValues) => {
          return isMotherPositive(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isMotherPositive(allFormValues);
        }
      },
      {
        componentType: "inputField",
        header: "ART Clinic number",
        name: "ART Number",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isMotherPositive(allFormValues) && allFormValues["ART treatment"] === "yes";
        },
        validation: (value) => {
          if (value.length < 3) {
            return "ART Clinic number must be at least 3 characters";
          }
          if (value.length > 25) {
            return "ART Clinic number must be less than 25 characters";
          }
          if (!/^[a-zA-Z0-9]+$/.test(value)) {
            return "ART Clinic number must be alphanumeric";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isMotherPositive(allFormValues) && allFormValues["ART treatment"] === "yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "New HIV test result in postnatal",
        name: "New HIV status",
        validation: Validation.required,
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "HIV test not done",
            value: "HIV test not done"
          }
        ],
        condition: (allFormValues) => {
          return isMotherUnknown(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Reason (if HIV test not done)",
        name: "HIV test not done reason",
        icon: icons.editPen,
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["New HIV status"] === "HIV test not done";
        },
        validation: (value, allFormValues) => {
          if (allFormValues["New HIV status"] === "HIV test not done") {
            return value ? null : "Required";
          }
          if (value.length < 3) {
            return "Reason (if HIV test not done) must be at least 3 characters";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Has the woman started ART treatment?",
        name: "Has the woman started ART treatment",
        validation: Validation.required,
        obsValueType: "value_coded",
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
        condition: (allFormValues) => {
          return isNewHivPositive(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "ART clinic number",
        name: "ART clinic registration number",
        obsValueType: "value_text",
        icon: icons.editPen,
        validation: (value) => Validation.required(value),
        condition: (allFormValues) => isNewHivPositive(allFormValues) && allFormValues["Has the woman started ART treatment"] === "Yes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "ART regimen",
        name: "ART regimen",
        obsValueType: "value_coded",
        options: [
          { label: "TDF/3TC/DTG", value: "tdf/3tc/dtg" },
          { label: "TDF/3TC/EFV", value: "tdf/3tc/efv" },
          { label: "Other", value: "other" }
        ],
        condition: (allFormValues) => {
          return isArtInitiated(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isArtInitiated(allFormValues) && allFormValues["ART regimen"] === "other";
        }
      },
      {
        componentType: "inputField",
        header: "Specify regimen",
        name: "ART regimen specify",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isArtInitiated(allFormValues) && allFormValues["ART regimen"] === "other";
        },
        validation: (value, allFormValues) => {
          if (isArtInitiated(allFormValues) && allFormValues["ART regimen"] === "other") {
            return value ? null : "Required";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Baby HIV prophylaxis type",
        name: "Baby prophylaxis type",
        obsValueType: "value_coded",
        options: [
          { label: "NVP (low risk)", value: "nvp" },
          { label: "2P (3TC/AZT/NVP) (high risk)", value: "2p" }
        ],
        condition: (allFormValues) => {
          return isBabySectionAllowed(allFormValues) && isMotherHivPositivePath(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isBabySectionAllowed(allFormValues) && isMotherHivPositivePath(allFormValues);
        }
      },
      {
        componentType: "dateInputField",
        header: "Date baby initiated on Nevirapine / 2P",
        name: "Baby prophylaxis start date",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        condition: (allFormValues) => {
          return isBabySectionAllowed(allFormValues) && isMotherHivPositivePath(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isBabySectionAllowed(allFormValues) && isMotherHivPositivePath(allFormValues);
        }
      },
      {
        componentType: "dateInputField",
        header: "Appointment date",
        name: "Appointment date",
        icon: icons.calenderPrimary,
        obsValueType: "value_date",
        maxDate: HisDate.toStandardHisFormat(HisDate.add(HisDate.sessionDate(), "years", 10).toDate()),
        grid: { s: "12" }
      }
    ];
  });
  return {
    hivStatusAndTreatmentFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HIVStatusAndTreatment",
  setup(__props, { expose: __expose }) {
    const { hivStatusAndTreatmentFormSection } = useHIVStatusAndTreatmentForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("HIV status and treatment data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "HIV status and treatment",
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(hivStatusAndTreatmentFormSection)
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

const useObstetricDetailsForm = () => {
  const obstetricDetailsFormSection = computed(() => {
    return [
      {
        componentType: "inputField",
        header: "Gravida",
        name: "Gravida",
        icon: icons.editPen,
        obsValueType: "value_numeric",
        validation: (value) => {
          const requiredError = Validation.required(value);
          if (requiredError) return requiredError;
          if (isNaN(Number(value))) {
            return "Gravida must be a number";
          }
          if (Number(value) < 0) {
            return "Gravida must be greater than 0";
          }
          if (Number(value) > 50) {
            return "Gravida must be 50 or less";
          }
          if (Number(value) % 1 !== 0) {
            return "Gravida must be an integer";
          }
          return null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Parity",
        name: "Parity",
        icon: icons.editPen,
        obsValueType: "value_numeric",
        validation: (value, allFormValues) => {
          const requiredError = Validation.required(value);
          if (requiredError) return requiredError;
          const gravida = Number(allFormValues?.["Gravida"]);
          if (isNaN(Number(value))) {
            return "Parity must be a number";
          }
          if (Number(value) < 0) {
            return "Parity must be greater than 0";
          }
          if (Number(value) > 50) {
            return "Parity must be 50 or less";
          }
          if (Number(value) % 1 !== 0) {
            return "Parity must be an integer";
          }
          if (!isNaN(gravida) && gravida > 0 && Number(value) > gravida) {
            return "Parity cannot be more than Gravida";
          }
          return null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "radioButtonField",
        header: "Place of delivery",
        name: "Place of delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "This facility",
            value: "this facility"
          },
          {
            label: "In Transit (TR)",
            value: "in transit (tr)"
          },
          {
            label: "Home/TBA",
            value: "home/tba"
          },
          {
            label: "Other Facility",
            value: "other facility"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify other facility",
        name: "Specify other facility",
        obsValueType: "value_text",
        grid: { s: "12" },
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["Place of delivery"] === "other facility";
        },
        validation: (value, allFormValues) => {
          if (value.length < 3) {
            return "Specify other facility must be at least 3 characters";
          }
          return null;
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return allFormValues["Place of delivery"] === "other facility";
        }
      },
      {
        componentType: "checkboxField",
        header: "Past modes of delivery",
        name: "Mode of delivery",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Spontaneous Vertex Delivery (SVD)",
            value: "SVD"
          },
          {
            label: "Vacuum extraction delivery",
            value: "Vacuum extraction delivery"
          },
          {
            label: "Breech (BR)",
            value: "Breech delivery"
          },
          {
            label: "Caesarean Section (CS)",
            value: "Caesarean section"
          },
          {
            label: "Other (Specify)",
            value: "Other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return allFormValues["Mode of delivery"]?.includes("Other");
        }
      },
      {
        componentType: "inputField",
        header: "Specify other mode of delivery",
        name: "Past modes of delivery other specify",
        icon: icons.editPen,
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Mode of delivery"]?.includes("Other");
        },
        validation: (value, allFormValues) => {
          if (value.length < 3) {
            return "Specify other mode of delivery must be at least 3 characters";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Any past pregnancy problems",
        name: "past pregnancy problems",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        validation: (value) => {
          if (value.length === 0) {
            return "Any past pregnancy problems are required";
          }
          return null;
        },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "Cord prolapse",
            value: "cord prolapse"
          },
          {
            label: "Asphyxia",
            value: "Asphyxia"
          },
          {
            label: "Antepartum haemorrhage",
            value: "antepartum haemorrhage"
          },
          {
            label: "Pre-eclampsia",
            value: "Pre-eclampsia"
          },
          {
            label: "Puerperal Sepsis",
            value: "Puerperal Sepsis"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Retained placenta",
            value: "retained placenta"
          },
          {
            label: "Perineal tear",
            value: "perineal tear"
          },
          {
            label: "Postpartum haemorrhage",
            value: "postpartum haemorrhage"
          },
          {
            label: "Obstructed or prolonged labour",
            value: "Obstructed or prolonged labour"
          },
          {
            label: "Premature labour",
            value: "premature labour"
          },
          {
            label: "Placenta previa",
            value: "placenta previa"
          },
          {
            label: "Severe anaemia",
            value: "severe anaemia"
          },
          {
            label: "Placenta abruption",
            value: "placenta abruption"
          },
          {
            label: "Fetal distress",
            value: "fetal distress"
          },
          {
            label: "Eclampsia",
            value: "eclampsia"
          },
          {
            label: "Haemorrhage",
            value: "haemorrhage"
          },
          {
            label: "Heavy bleeding",
            value: "Heavy bleeding"
          },
          {
            label: "Ruptured uterus",
            value: "Ruptured uterus"
          },
          {
            label: "Symphysiotomy",
            value: "symphysiotomy"
          },
          {
            label: "Other problems",
            value: "Other problems"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return allFormValues["past pregnancy problems"]?.includes("Other problems");
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other problems notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        validation: (value, allFormValues) => {
          if (value.length < 3) {
            return "Specify other pregnancy problems must be at least 3 characters";
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["past pregnancy problems"]?.includes("Other problems");
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Maternal conditions",
        name: "Maternal conditions",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        validation: (value) => {
          if (value.length === 0) {
            return "Maternal conditions are required";
          }
          return null;
        },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "Antepartum haemorrhage",
            value: "antepartum haemorrhage"
          },
          {
            label: "Postpartum haemorrhage",
            value: "postpartum haemorrhage"
          },
          {
            label: "Ruptured uterus",
            value: "ruptured uterus"
          },
          {
            label: "Obstructed/prolonged labour",
            value: "obstructed/prolonged labour"
          },
          {
            label: "Eclampsia",
            value: "eclampsia"
          },
          {
            label: "Pre-eclampsia",
            value: "pre-eclampsia"
          },
          {
            label: "Perineal tear",
            value: "perineal tear"
          },
          {
            label: "Premature labour",
            value: "premature labour"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Severe anaemia",
            value: "severe anaemia"
          },
          {
            label: "Other (Specify)",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return allFormValues["Maternal conditions"]?.includes("perineal tear") || allFormValues["Maternal conditions"]?.includes("other");
        }
      },
      {
        componentType: "radioButtonField",
        header: "Degree of tear",
        name: "Degree of tear",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Maternal conditions"]?.includes("perineal tear");
        },
        options: [
          {
            label: "2nd degree",
            value: "2nd degree"
          },
          {
            label: "3rd degree",
            value: "3rd degree"
          },
          {
            label: "4th degree",
            value: "4th degree"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify other maternal condition",
        name: "other maternal condition",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["Maternal conditions"]?.includes("other");
        },
        validation: (value, allFormValues) => {
          return allFormValues["Maternal conditions"]?.includes("other") && !value ? "Required" : null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Fetal conditions",
        name: "Fetal conditions",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Fetal distress",
            value: "fetal distress"
          },
          {
            label: "Intrauterine Growth Restriction",
            value: "intrauterine growth restriction"
          },
          {
            label: "Other (Specify)",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "fetal_other_specify",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["Fetal conditions"]?.includes("other");
        },
        validation: (value, allFormValues) => {
          if (value.length < 3) {
            return "Specify other fetal condition must be at least 3 characters";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Placenta conditions",
        name: "Placenta conditions",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Retained placenta",
            value: "retained placenta"
          },
          {
            label: "Placenta previa",
            value: "placenta previa"
          },
          {
            label: "Placenta abruption",
            value: "placenta abruption"
          },
          {
            label: "Other (Specify)",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "placenta_other_specify",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["Placenta conditions"]?.includes("other");
        },
        validation: (value, allFormValues) => {
          if (value.length < 3) {
            return "Specify other placenta condition must be at least 3 characters";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Cord prolapse",
        name: "Cord prolapse",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ],
        grid: { s: "12" }
      }
    ];
  });
  return {
    obstetricDetailsFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ObstetricDetails",
  setup(__props, { expose: __expose }) {
    const { obstetricDetailsFormSection } = useObstetricDetailsForm();
    const { formRef } = useExposeFromStandardForm();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const fetchAndPrefillObstetricDetails = async () => {
      if (!formRef.value) return;
      if (!patient.value?.patientID) return;
      const ancObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.OBSTETRIC_HISTORY);
      const gravidaObs = getObsValueByConceptName(ancObs, "gravida");
      const parityObs = getObsValueByConceptName(ancObs, "Parity");
      const modeOfDeliveryObs = getObsValueByConceptName(ancObs, "Mode of delivery 0");
      const obstetricEncounters = await ObservationService.getObsByEncounterId(EncounterTypeId.OBSTETRIC_HISTORY);
      const allObstetricObs = obstetricEncounters.flatMap((e) => e.obs || []);
      const complicationsObs = allObstetricObs.filter((o) => String(o.concept_name || "").toLowerCase() === "past pregnancies complications");
      let pastPregnanciesProblemObs = null;
      if (complicationsObs.length > 0) {
        const complicationValues = /* @__PURE__ */ new Set();
        for (const obs of complicationsObs) {
          const value = await ObservationService.resolvePrimaryValue(obs);
          if (value != null && value !== "") complicationValues.add(String(value));
        }
        pastPregnanciesProblemObs = Array.from(complicationValues);
      } else {
        pastPregnanciesProblemObs = getObsValueByConceptName(ancObs, "past pregnancies complications");
      }
      console.log("ANC", complicationsObs);
      if (gravidaObs) {
        const val = Array.isArray(gravidaObs) ? gravidaObs[0] : gravidaObs;
        formRef.value.setFormValue("Gravida", String(val));
      }
      if (parityObs) {
        const val = Array.isArray(parityObs) ? parityObs[0] : parityObs;
        formRef.value.setFormValue("Parity", String(val));
      }
      if (modeOfDeliveryObs && modeOfDeliveryObs.length > 0) {
        const selections = Array.from(
          new Set(
            (Array.isArray(modeOfDeliveryObs) ? modeOfDeliveryObs : [modeOfDeliveryObs]).map((v) => normalizeDeliveryModeValue(String(v))).filter((v) => v !== "")
          )
        );
        formRef.value.setFormValue("Mode of delivery", selections);
      }
      if (pastPregnanciesProblemObs && pastPregnanciesProblemObs.length > 0) {
        const problems = Array.isArray(pastPregnanciesProblemObs) ? pastPregnanciesProblemObs : [pastPregnanciesProblemObs];
        if (problems.includes("Other") || problems.includes("Other problems")) {
          const otherProblem = getObsValueByConceptName(ancObs, "Other complications notes");
          formRef.value.setFormValue("Past pregnancy problems", problems);
          formRef.value.setFormValue("Other problems notes", otherProblem ? Array.isArray(otherProblem) ? otherProblem[0] : otherProblem : "");
        } else {
          formRef.value.setFormValue("past pregnancy problems", problems);
        }
      }
      const labourObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.Labour_and_delivery_visit);
      const placeObs = getObsValueByConceptName(labourObs, "Place of delivery");
      if (placeObs && placeObs.length > 0) {
        const place = Array.isArray(placeObs) ? placeObs[0] : placeObs;
        const mapped = mapLabourPlaceToPnc(String(place));
        if (mapped) formRef.value.setFormValue("Place of delivery", mapped);
      }
    };
    const getObsValueByConceptName = (obsArray, conceptName) => {
      const obs = obsArray.filter((o) => o.concept_name.toLowerCase() === conceptName.toLowerCase());
      if (obs.length === 0) return null;
      return obs.map((o) => o.value_text || o.value_numeric).filter((v) => v !== null && v !== void 0);
    };
    const normalizeDeliveryModeValue = (value) => {
      const val = String(value).toLowerCase().trim();
      if (val === "svd" || val.includes("spontaneous vertex")) return "SVD";
      if (val.includes("vacuum")) return "Vacuum extraction delivery";
      if (val.includes("breech") || val === "br") return "Breech delivery";
      if (val.includes("caesarean") || val.includes("cesarean")) return "Caesarean section";
      if (val === "other") return "Other";
      return "";
    };
    const mapLabourPlaceToPnc = (place) => {
      const p = place.toLowerCase().trim();
      if (p.includes("this facility")) return "this facility";
      if (p.includes("home")) return "home/tba";
      if (p.includes("transit")) return "in transit";
      if (p.includes("other facility")) return "other facility";
      return null;
    };
    watch(
      () => patient.value,
      async (newVal) => {
        if (newVal) {
          await fetchAndPrefillObstetricDetails();
        }
      },
      { immediate: true }
    );
    onMounted(async () => {
      await fetchAndPrefillObstetricDetails();
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.OBSTETRIC_HISTORY)) toastSuccess("Obstetric details data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Obstetric Details",
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(obstetricDetailsFormSection)
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

export { DeliveryDetails as D, _sfc_main as _, _sfc_main$1 as a };
