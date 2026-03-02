import { c as computed, s as defineComponent, a2 as onMounted, n as nextTick, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, a$ as personOutline, f as ref, K as modalController, w as watch, z as createElementBlock, bd as IonCardContent, a7 as IonLabel, a5 as createTextVNode, J as Fragment, R as renderList, bK as IonCard, a4 as normalizeClass, bb as IonCardHeader, ba as IonCardTitle, L as IonIcon, D as toDisplayString, H as createCommentVNode, Q as alertCircleOutline, by as IonText, N as IonButton, e3 as createOutline, bG as addOutline } from './vendor-DpSS1aB1.js';
import { y as StandardValidations, n as icons, K as ObservationService, b as EncounterTypeId, z as StandardForm, F as DynamicButton, r as StandardModal, t as toastWarning, H as HisDate, G as toastSuccess, u as useDemographicsStore, b5 as RelationshipService, J as savePatientRecord, _ as _export_sfc, a6 as useUserStore } from '../index-BTIUN7gE.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-BRHuDhYE.js';
import { l as lodashExports } from './lodash-D-_KzUJJ.js';
import { u as useLocation } from './useLocation-CE6Z4rJT.js';
import { s as storeToRefs } from './pinia-CbGjwPb6.js';
import { u as useBabyDetails } from './useBabyDetails-3tHApdDX.js';

const useNewbornDetailsForm = () => {
  const newbornDetailsFormSection = computed(() => {
    return [
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Delayed cord cutting? (1-3 minutes)",
        name: "Delayed cord cutting",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "timeInputField",
        header: "Time of delivery",
        name: "Time of delivery",
        icon: icons.time,
        obsValueType: "value_datetime",
        showNowButton: true,
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "APGAR score at 1 minute",
        name: "APGAR score at 1 minute",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" },
        validation: (value) => {
          if (value === void 0 || value === null || value === "") {
            return "Value is required";
          }
          if (isNaN(value)) {
            return "Value must be a number";
          }
          if (value < 1 || value > 10) {
            return "Value must be between 1 and 10";
          }
        }
      },
      {
        componentType: "inputField",
        header: "APGAR score at 5 minutes",
        name: "APGAR score at 5 minutes",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" },
        validation: (value) => {
          if (value === void 0 || value === null || value === "") {
            return "Value is required";
          }
          if (isNaN(value)) {
            return "Value must be a number";
          }
          if (value < 1 || value > 10) {
            return "Value must be between 1 and 10";
          }
        }
      },
      {
        componentType: "inputField",
        header: "APGAR score at 10 minutes",
        name: "APGAR score at 10 minutes",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" },
        validation: (value) => {
          if (value === void 0 || value === null || value === "") {
            return "Value is required";
          }
          if (isNaN(value)) {
            return "Value must be a number";
          }
          if (value < 1 || value > 10) {
            return "Value must be between 1 and 10";
          }
        }
      },
      {
        componentType: "Dashes"
      },
      //Vitals
      {
        componentType: "Heading",
        position: "left",
        name: "Newborn Vitals"
      },
      {
        componentType: "inputField",
        header: "Baby weight (grams)",
        name: "Baby weight (grams)",
        obsValueType: "value_numeric",
        grid: { xs: "6" },
        validation: (value) => {
          if (value === void 0 || value === null || value === "") {
            return "Value is required";
          }
          if (isNaN(value)) {
            return "Value must be a number";
          }
          if (value < 500 || value > 6e3) {
            return "Value must be between 500 and 6000";
          }
        }
      },
      {
        componentType: "Alert",
        name: "LowBirthWeightAlert",
        backgroundColor: "#FFD700",
        icon: "info-circle",
        textColor: "#000000",
        value: "Warning: Low birth weight",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const birthWeight = parseInt(allFormValues["Baby weight (grams)"]);
          return birthWeight >= 500 && birthWeight < 2500;
        }
      },
      {
        componentType: "inputField",
        header: "Baby height (cm)",
        name: "Baby height (cm)",
        obsValueType: "value_numeric",
        grid: { xs: "6" },
        validation: (value) => {
          if (value === void 0 || value === null || value === "") {
            return "Value is required";
          }
          if (isNaN(value)) {
            return "Value must be a number";
          }
          if (value < 30 || value > 100) {
            return "Value must be between 30 and 100";
          }
        }
      },
      {
        componentType: "inputField",
        header: "Head circumference (cm)",
        name: "Head circumference",
        obsValueType: "value_numeric",
        grid: { xs: "6" },
        validation: (value) => {
          if (value === void 0 || value === null || value === "") {
            return "Value is required";
          }
          if (isNaN(value)) {
            return "Value must be a number";
          }
          if (value < 20 || value > 45) {
            return "Value must be between 20 and 45";
          }
        }
      },
      {
        componentType: "Alert",
        name: "MicrosomniaAlert",
        backgroundColor: "#FFD700",
        icon: "info-circle",
        textColor: "#000000",
        value: "Warning: Microsomnia",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const birthWeight = parseInt(allFormValues["Baby weight (grams)"]);
          return birthWeight >= 4e3 && birthWeight <= 6e3;
        }
      },
      {
        componentType: "Alert",
        name: "HeadCircumferenceAlert",
        backgroundColor: "#FFD700",
        icon: "info-circle",
        textColor: "#000000",
        value: "Warning: Anacephaly",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const headCircumference = parseInt(allFormValues["Head circumference"]);
          return headCircumference >= 20 && headCircumference <= 33;
        }
      },
      {
        componentType: "Alert",
        name: "HeadCircumferenceAlert",
        backgroundColor: "#FFD700",
        icon: "info-circle",
        textColor: "#000000",
        value: "Warning: Hydrocephalus",
        grid: { s: "12" },
        condition: (allFormValues) => {
          const headCircumference = parseInt(allFormValues["Head circumference"]);
          return headCircumference > 35 && headCircumference <= 45;
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Mode of delivery",
        name: "Mode of delivery",
        obsValueType: "value_coded",
        validation: StandardValidations.required,
        options: [
          { label: "Spontaneous vertex delivery", value: "Spontaneous vertex delivery" },
          { label: "Vacuum extraction delivery", value: "Vacuum extraction delivery" },
          { label: "Breech (BR)", value: "Breech (BR)" },
          { label: "Caesarean section", value: "Caesarean section" },
          { label: "Other mode of delivery", value: "Other mode of delivery" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify other mode of delivery",
        name: "Specify other mode of delivery",
        obsValueType: "value_text",
        grid: { xs: "12" },
        condition: (formValues) => formValues["Mode of delivery"] == "Other mode of delivery"
      },
      {
        componentType: "Dashes",
        grid: { xs: "12" },
        condition: (formValues) => formValues["Mode of delivery"] == "Other mode of delivery"
      },
      // ========== Section: Medication & Care ==========
      {
        componentType: "radioButtonField",
        header: "Tetracycline eye ointment given?",
        name: "Tetracycline eye ointment given?",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes"
      },
      // ========== Section: Complications ==========
      {
        componentType: "checkboxField",
        header: "Newborn baby complications",
        name: "Newborn baby complications",
        type: "multiple",
        obsValueType: "value_coded",
        value: [],
        options: [
          { label: "None", value: "None", exclusive: true },
          { label: "Prematurity", value: "Prematurity" },
          { label: "Sepsis", value: "Sepsis" },
          { label: "Congenital abnormalities", value: "Congenital abnormalities" },
          { label: "Asphyxia", value: "Asphyxia" },
          { label: "Low birth weight", value: "Low birth weight" },
          { label: "Nursery", value: "Nursery" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      // Conditional: Other Notes
      {
        componentType: "inputField",
        header: "Other complications notes",
        name: "Other complications notes",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Other");
        }
      },
      // Conditional: Specify Congenital Abnormalities
      {
        componentType: "inputField",
        header: "Specify Congenital Abnormalities",
        name: "Specify Congenital Abnormalities",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Congenital abnormalities");
        }
      },
      // Conditional: Asphyxia -> Resuscitation
      {
        componentType: "radioButtonField",
        header: "Was resuscitation attempted?",
        name: "Resuscitation attempt",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        offset: "1",
        grid: { s: "11" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Asphyxia");
        }
      },
      // Conditional: Type of Resuscitation
      {
        componentType: "radioButtonField",
        header: "Type of resuscitation?",
        name: "Resuscitation Type",
        obsValueType: "value_coded",
        options: [
          { label: "Drying only", value: "Drying only" },
          { label: "Clearing airway", value: "Clearing airway" },
          { label: "Bag and mask", value: "Bag and mask" }
        ],
        offset: "2",
        grid: { s: "10" },
        condition: (formValues) => {
          return formValues["Resuscitation attempt"] == "Yes";
        }
      },
      // ========== Section: Management ==========
      {
        componentType: "checkboxField",
        header: "Management given to newborn",
        name: "Management given to newborn",
        type: "multiple",
        obsValueType: "value_coded",
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.length > 0 && !formValues["Newborn baby complications"]?.includes("None");
        },
        options: [
          { label: "None", value: "None", exclusive: true },
          { label: "Routine newborn care", value: "Routine newborn care" },
          { label: "Kangaroo mother care", value: "Kangaroo mother care" },
          { label: "Antibiotics", value: "Antibiotics" },
          { label: "Resuscitation", value: "Resuscitation" },
          { label: "Oxygen Therapy", value: "Oxygen Therapy" },
          { label: "Photo Therapy", value: "Photo Therapy" },
          {
            label: "CPAP(Continuous Positive  Airway Pressure)",
            value: "CPAP(Continuous Positive  Airway Pressure)"
          },
          { label: "Other", value: "Other" }
        ],
        offset: "1",
        grid: { s: "11" }
      },
      {
        componentType: "inputField",
        header: "Other management given to newborn",
        name: "Other management given to newborn",
        obsValueType: "value_text",
        offset: "1",
        condition: (formValues) => {
          return formValues["Management given to newborn"]?.includes("Other");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Vitamin K given?",
        name: "Vitamin K given?",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Chlorhexidine 7.1% applied?",
        name: "Chlorhexidine 7.1% applied?",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      }
    ];
  });
  return {
    newbornDetailsFormSection
  };
};

const _hoisted_1$2 = { class: "ion-padding" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BabyDetailsModal",
  props: {
    babyIndex: {},
    baby: {},
    deliveryDate: {}
  },
  emits: ["close", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { newbornDetailsFormSection } = useNewbornDetailsForm();
    const formFields = computed(() => newbornDetailsFormSection.value);
    const babyRecord = ref({});
    const formRef = ref(null);
    const getCodedValue = (conceptName, valueCoded) => {
      const codedValueMap = {
        "Delayed cord cutting": { 1065: "Yes", 1066: "No" },
        "Tetracycline eye ointment given?": { 1065: "Yes", 1066: "No" },
        "Vitamin K given?": { 1065: "Yes", 1066: "No" },
        "Chlorhexidine 7.1% applied?": { 1065: "Yes", 1066: "No" },
        "Resuscitation attempt": { 1065: "Yes", 1066: "No" },
        "Resuscitation Type": {
          11384: "Drying only",
          11385: "Clearing airway",
          11386: "Bag and mask"
        },
        "Newborn baby complications": {
          1107: "None",
          8582: "Prematurity",
          8584: "Sepsis",
          8585: "Congenital abnormalities",
          8586: "Asphyxia",
          8587: "Low birth weight",
          8588: "Nursery",
          8583: "Other"
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
      return codedValueMap[conceptName]?.[valueCoded] || valueCoded.toString();
    };
    onMounted(async () => {
      await nextTick();
      const data = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.Delivery_Details, props.baby);
      if (data && Array.isArray(data)) {
        await nextTick();
        const groupedData = {};
        data.forEach((obs) => {
          if (!groupedData[obs.concept_name]) {
            groupedData[obs.concept_name] = [];
          }
          groupedData[obs.concept_name].push(obs);
        });
        Object.entries(groupedData).forEach(([fieldName, observations]) => {
          if (fieldName === "Newborn baby complications" || fieldName === "Management given to newborn") {
            const values = observations.map((obs) => getCodedValue(fieldName, obs.value_coded));
            formRef.value?.setFormValue(fieldName, values);
          } else {
            const obs = observations[0];
            let fieldValue;
            if (obs.value_numeric !== void 0 && obs.value_numeric !== null) {
              fieldValue = obs.value_numeric.toString();
            } else if (obs.value_text !== void 0 && obs.value_text !== null) {
              fieldValue = obs.value_text;
            } else if (obs.value_coded !== void 0 && obs.value_coded !== null) {
              fieldValue = getCodedValue(fieldName, obs.value_coded);
            }
            if (fieldValue !== void 0) {
              formRef.value?.setFormValue(fieldName, fieldValue);
            }
          }
        });
      }
    });
    const setBabyDemographics = (element, value) => {
      babyRecord.value = value;
    };
    const onSave = async () => {
      if (lodashExports.isEmpty(babyRecord.value)) {
        toastWarning("Please select a baby");
        return;
      }
      if (HisDate.toStandardHisFormat(babyRecord.value.personInformation.birthdate) != HisDate.toStandardHisFormat(props.deliveryDate)) {
        toastWarning("Delivery and birthdate must be the same");
        return;
      }
      const validationResult = formRef.value?.validateForm();
      const formData = formRef.value?.getFormValues();
      const patientRecord = await ObservationService.buildRelativeObs(babyRecord.value, formData, EncounterTypeId.Delivery_Details);
      if (patientRecord && validationResult == null) {
        modalController.dismiss(babyRecord.value);
        toastSuccess("Baby details saved successfully");
      } else toastWarning("Please fill in the required fields");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: `Baby ${__props.babyIndex + 1} Details`,
        subtitle: "Enter newborn information",
        headerIcon: unref(personOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save",
            onClick: onSave,
            fill: "solid",
            iconSlot: "end"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(FindRegisterPatient, {
              isBaby: true,
              patient: props.baby,
              onValueChanged: _cache[0] || (_cache[0] = (fieldName, value) => setBabyDemographics("", value))
            }, null, 8, ["patient"]),
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

const useDeliveryNewbornDetailsForm = () => {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const isStillbirth = (formValues) => {
    return formValues["Baby general condition at birth"] === "Macerated stillbirth" || formValues["Baby general condition at birth"] === "Fresh stillbirth";
  };
  const isNeonatalDeath = (formValues) => {
    return formValues["Baby general condition at birth"] === "Neonatal Death";
  };
  const deliveryNewbornDetailsFormSection = computed(() => {
    return [
      {
        componentType: "dateInputField",
        header: "Date of delivery",
        name: "Date of delivery",
        obsValueType: "value_date",
        showTodayButton: true,
        onChange: (value) => {
          sessionStorage.setItem("DeliveryDate", value);
        },
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        name: "Baby general condition at birth",
        header: "Baby general condition at birth",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Live full term",
            value: "Live full term"
          },
          {
            label: "Live pre-term",
            value: "Live preterm"
          },
          {
            label: "Macerated stillbirth",
            value: "Macerated stillbirth"
          },
          {
            label: "Fresh stillbirth",
            value: "Fresh stillbirth"
          },
          {
            label: "Neonatal Death",
            value: "Neonatal Death"
          }
        ]
      },
      {
        componentType: "Alert",
        backgroundColor: "#fedf89",
        textColor: "#B54708",
        value: "Please proceed to the third stage of labour",
        condition: (formValues) => isStillbirth(formValues) || isNeonatalDeath(formValues)
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Banner",
        message: "Other Delivery Details",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      {
        componentType: "inputField",
        name: "Number of babies",
        header: "Number of babies",
        obsValueType: "value_numeric",
        condition: (formValues) => {
          return formValues["Date of delivery"] && (formValues["Baby general condition at birth"] == "Live preterm" || formValues["Baby general condition at birth"] == "Live full term");
        },
        validation: (value) => {
          if (isNaN(value)) {
            return "Number of babies must be a number";
          }
        },
        grid: { s: "11" },
        offset: "1"
      },
      {
        componentType: "radioButtonField",
        header: "Place of delivery",
        name: "Place of delivery",
        obsValueType: "value_coded",
        type: "inline",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues),
        options: [
          { label: "This facility", value: "This facility" },
          { label: "Home", value: "Home" },
          { label: "In transit", value: "In transit" },
          { label: "Other facility", value: " Other facility" }
        ],
        grid: { s: "11" },
        offset: "1"
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify other facility",
        name: "Specify other facility",
        placeholder: "Search for facility",
        openDirection: "auto",
        obsValueType: "value_text",
        options: facilityList.value.facilities || facilityList.value,
        grid: { s: "11" },
        offset: "1",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Place of delivery"] === " Other facility";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        offset: "1",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      {
        componentType: "radioButtonField",
        header: "Staff conducting delivery",
        name: "Staff conducting delivery",
        obsValueType: "value_text",
        type: "inline",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues),
        options: [
          {
            label: "Skilled health worker (Nurse midwife/ community midwife)",
            value: "Skilled health worker (Nurse midwife/community midwife assistant/medical assistant/clinical technician/medical doctor"
          },
          {
            label: "Unskilled (Patient attendant/ ward attendant)",
            value: "Unskilled (Patient attendant/ ward attendant/ health surveillance assistant/other/none"
          },
          { label: "Traditional birth attendant (TBA)", value: "Traditional birth attendant (TBA)" }
        ],
        grid: { s: "11" },
        offset: "1"
      },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        offset: "1",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      {
        componentType: "inputField",
        header: "Estimated blood loss",
        name: "Estimated blood loss",
        obsValueType: "value_numeric",
        unit: "ml",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues),
        validation: (value) => {
          if (isNaN(value)) return "Estimated blood loss must be a number";
          if (value < 0) return "Estimated blood loss must be greater than 0";
          return null;
        },
        grid: { s: "11" },
        offset: "1"
      },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        offset: "1",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      //Obstetric complications
      {
        componentType: "radioButtonField",
        header: "Obstetric complications",
        name: "Obstetric complications",
        obsValueType: "value_coded",
        grid: { s: "11" },
        offset: "1",
        type: "inline",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues),
        options: [
          { label: "None", value: "None" },
          { label: "Postpartum haemorrhage", value: "Postpartum haemorrhage" },
          { label: "Pre-Eclampsia", value: "Pre-Eclampsia" },
          { label: "Eclampsia", value: "Eclampsia" },
          { label: "Sepsis", value: "Sepsis" },
          { label: "Retained placenta", value: "Retained placenta" },
          {
            label: "Perineal tear (2nd, 3rd or 4th degree)",
            value: "Perineal tear (2nd, 3rd or 4th degree)"
          },
          { label: "Other", value: "Other" }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify other complications",
        name: "Specify other complications",
        obsValueType: "value_text",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Obstetric complications"] == "Other";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        offset: "1",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      {
        componentType: "checkboxField",
        header: "Obstetric care provided",
        name: "Obstetric care provided",
        type: "multiple",
        obsValueType: "value_coded",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Obstetric complications"] != "None" && formValues["Obstetric complications"].length > 0;
        },
        options: [
          { label: "None", value: "None", exclusive: true },
          { label: "Suturing", value: "Suturing" },
          { label: "Oxytocin/cabitocin", value: "Oxytocin/cabitocin/tranexamic acid" },
          { label: "Tranexamic acid", value: "Tranexamic acid" },
          { label: "Anticonvulsants", value: "Anticonvulsants" },
          { label: "Antibiotics", value: "Antibiotics" },
          { label: "Misoprostol", value: "Misoprostol" },
          { label: "Manual removal of placenta (MRP)", value: "Manual removal of placenta (MRP)" },
          {
            label: "Non-pneumatic Anti-shock Garment (NASG)",
            value: "Non-pneumatic Anti-shock Garment (NASG)"
          },
          { label: "Evacuation", value: "Evacuation" },
          { label: "Other", value: "Other" }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        offset: "1",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      //Evacuation
      {
        componentType: "radioButtonField",
        header: "IV Fluids",
        name: "IV Fluids",
        obsValueType: "value_coded",
        grid: { s: "10" },
        offset: "2",
        type: "inline",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Obstetric care provided"]?.includes("Evacuation");
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      {
        componentType: "dateInputField",
        header: "Date IV fluids were started",
        name: "Date IV fluids were started",
        obsValueType: "value_date",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["IV Fluids"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time started",
        name: "Time started",
        obsValueType: "value_datetime",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["IV Fluids"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time finished",
        name: "Time finished",
        obsValueType: "value_datetime",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["IV Fluids"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Type of fluids",
        name: "Type of fluids",
        obsValueType: "value_coded",
        grid: { s: "10" },
        offset: "2",
        type: "inline",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["IV Fluids"] === "Yes";
        },
        options: [
          { label: "Normal Saline", value: "Normal Saline" },
          { label: "Ringers Lactate", value: "Ringers Lactate" },
          { label: "Glucose", value: "Glucose" },
          { label: "Haemacel", value: "Haemacel" },
          { label: "Other, specify", value: "Other, specify" }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify other type of fluids",
        name: "Specify other type of fluids",
        obsValueType: "value_text",
        grid: { s: "11" },
        offset: "1",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Type of fluids"] === "Other, specify";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Blood transfusion",
        name: "Blood transfusion",
        obsValueType: "value_coded",
        type: "inline",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Obstetric care provided"]?.includes("Evacuation");
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "dateInputField",
        header: "Date of Transfusion",
        name: "Date of Transfusion",
        obsValueType: "value_date",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time transfusion started",
        name: "Time transfusion started",
        obsValueType: "value_datetime",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time transfusion finished",
        name: "Time transfusion finished",
        obsValueType: "value_datetime",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Type of Blood",
        name: "Type of Blood",
        obsValueType: "value_coded",
        type: "inline",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Blood transfusion"] === "Yes";
        },
        options: [
          { label: "Whole Blood", value: "Whole Blood" },
          { label: "Packed Red Blood Cells", value: "Packed Red Blood Cells" },
          { label: "Plasma", value: "Plasma" },
          { label: "Platelets", value: "Platelets" }
        ]
      },
      {
        componentType: "inputField",
        header: "Volume (mls)",
        name: "Volume (mls)",
        obsValueType: "value_numeric",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "10" },
        offset: "2",
        condition: (formValues) => !isStillbirth(formValues) && !isNeonatalDeath(formValues)
      },
      {
        componentType: "inputField",
        header: "Other evacuations",
        name: "Other evacuations",
        obsValueType: "value_text",
        condition: (formValues) => {
          return !isStillbirth(formValues) && !isNeonatalDeath(formValues) && formValues["Obstetric care provided"]?.includes("Evacuation");
        },
        grid: { s: "10" },
        offset: "2"
      }
    ];
  });
  return {
    deliveryNewbornDetailsFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
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
  key: 3,
  class: "detail-row"
};
const _hoisted_13 = { class: "detail-value" };
const _hoisted_14 = {
  key: 4,
  class: "detail-row"
};
const _hoisted_15 = { class: "detail-value" };
const _hoisted_16 = {
  key: 5,
  class: "detail-row"
};
const _hoisted_17 = { class: "detail-value" };
const _hoisted_18 = {
  key: 1,
  class: "no-data"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SecondStageDelivery",
  setup(__props, { expose: __expose }) {
    const deliveryNewbornDetailsComposable = useDeliveryNewbornDetailsForm();
    const demographicsStore = useDemographicsStore();
    const formRef = ref(null);
    const { patient } = storeToRefs(demographicsStore);
    const deliveryDetailsNewbornDetailsForm = computed(() => deliveryNewbornDetailsComposable.deliveryNewbornDetailsFormSection.value);
    const formValues = computed(() => formRef.value?.getFormValues());
    const {
      babies,
      existingBabies,
      newBabies,
      isFormLocked,
      getBabyName,
      getBabyGender,
      getBabyBirthdate,
      getBabyID,
      getBabyDistrict,
      getBabyVillage,
      hasBabyData,
      formatDate,
      syncBabySlots,
      openBabyModal,
      resetBabies,
      resetNewBabies
    } = useBabyDetails(_sfc_main$2);
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
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const activeBabies = isFormLocked.value ? existingBabies.value : newBabies.value;
      if (activeBabies.length > 0) {
        for (const baby of activeBabies) {
          if (!baby) return;
          await RelationshipService.createRelationship(baby, patient.value, 32);
          await savePatientRecord(baby, true);
        }
      }
      if (Object.keys(data || {}).length > 0) {
        const success = await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit);
        if (success) toastSuccess("Delivery Newborn details saved successfully");
      }
      sessionStorage.setItem("DeliveryDate", "");
      formRef.value?.resetForm();
      resetNewBabies();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => ({
        ...formRef.value?.getFormValues(),
        babies: babies.value
      }),
      resetForm: () => {
        formRef.value?.resetForm();
        resetBabies();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Delivery Newborn Details",
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": deliveryDetailsNewbornDetailsForm.value
                }, null, 8, ["form-data"]),
                unref(babies).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(unref(IonLabel), { class: "section-title" }, {
                      default: withCtx(() => [..._cache[0] || (_cache[0] = [
                        createTextVNode("Baby Details", -1)
                      ])]),
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
                                  _cache[1] || (_cache[1] = createBaseVNode("span", { class: "detail-label" }, "Name:", -1)),
                                  createBaseVNode("span", _hoisted_7, toDisplayString(unref(getBabyName)(baby)), 1)
                                ])) : createCommentVNode("", true),
                                unref(getBabyGender)(baby) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                  _cache[2] || (_cache[2] = createBaseVNode("span", { class: "detail-label" }, "Gender:", -1)),
                                  createBaseVNode("span", _hoisted_9, toDisplayString(unref(getBabyGender)(baby)), 1)
                                ])) : createCommentVNode("", true),
                                unref(getBabyBirthdate)(baby) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                  _cache[3] || (_cache[3] = createBaseVNode("span", { class: "detail-label" }, "Birth Date:", -1)),
                                  createBaseVNode("span", _hoisted_11, toDisplayString(unref(formatDate)(unref(getBabyBirthdate)(baby))), 1)
                                ])) : createCommentVNode("", true),
                                unref(getBabyID)(baby) ? (openBlock(), createElementBlock("div", _hoisted_12, [
                                  _cache[4] || (_cache[4] = createBaseVNode("span", { class: "detail-label" }, "ID:", -1)),
                                  createBaseVNode("span", _hoisted_13, toDisplayString(unref(getBabyID)(baby)), 1)
                                ])) : createCommentVNode("", true),
                                unref(getBabyDistrict)(baby) ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                  _cache[5] || (_cache[5] = createBaseVNode("span", { class: "detail-label" }, "District:", -1)),
                                  createBaseVNode("span", _hoisted_15, toDisplayString(unref(getBabyDistrict)(baby)), 1)
                                ])) : createCommentVNode("", true),
                                unref(getBabyVillage)(baby) ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                  _cache[6] || (_cache[6] = createBaseVNode("span", { class: "detail-label" }, "Village:", -1)),
                                  createBaseVNode("span", _hoisted_17, toDisplayString(unref(getBabyVillage)(baby)), 1)
                                ])) : createCommentVNode("", true)
                              ])) : (openBlock(), createElementBlock("div", _hoisted_18, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(alertCircleOutline),
                                  class: "no-data-icon"
                                }, null, 8, ["icon"]),
                                createVNode(unref(IonText), { class: "no-data-text" }, {
                                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
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

const SecondStageDelivery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8c153053"]]);

const useThirdStageDeliveryForm = () => {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const thirdStageDeliveryFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Oxytocin 10 IU given",
        name: "Oxytocin 10 IU given",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Misoprostol (400/600mcg orally)",
        name: "Misoprostol (400/600mcg orally)",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Heat stable Cabitocin (100mcg IM/IV)",
        name: "Heat stable Cabitocin (100mcg IM/IV)",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Ellavi drape used",
        name: "Ellavi drape used",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "Slot",
        slotName: "delivery_date_time",
        grid: { xs: "12" }
      },
      {
        componentType: "dateInputField",
        header: "Date of delivery",
        name: "Date of delivery",
        obsValueType: "value_date",
        showTodayButton: true,
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "timeInputField",
        header: "Time of delivery",
        name: "Time of delivery",
        obsValueType: "value_datetime",
        showNowButton: true,
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        header: "Delivery done by",
        name: "Staff conducting delivery",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        header: "Cadre",
        name: "Cadre",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Mode of delivery",
        header: "Mode of delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "Controlled cord traction",
            value: "Controlled cord traction"
          },
          {
            label: "Manual removal",
            value: "Manual removal"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Other mode of delivery",
        header: "Specify other mode of delivery",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Mode of delivery"] == "Other";
        }
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
        options: [
          { label: "This facility", value: "This facility" },
          { label: "Home", value: "Home" },
          { label: "In transit", value: "In transit" },
          { label: "Other facility", value: " Other facility" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify other facility",
        name: "Other facility",
        placeholder: "Search for facility",
        openDirection: "auto",
        obsValueType: "value_text",
        options: facilityList.value.facilities || facilityList.value,
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Place of delivery"] === " Other facility";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Placenta",
        header: "Placenta",
        obsValueType: "value_coded",
        options: [
          { label: "Complete", value: "Complete" },
          { label: "Incomplete", value: "Incomplete" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Membranes",
        header: "Membranes",
        obsValueType: "value_coded",
        options: [
          { label: "Complete", value: "Complete" },
          { label: "Incomplete", value: "Incomplete" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "Slot",
        slotName: "placenta_weight_length",
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        name: "Placenta weight",
        header: "Placenta (weight)",
        obsValueType: "value_numeric",
        unit: "g",
        validation: (value) => {
          if (isNaN(value)) return "Placenta weight must be a number";
          if (value < 100 || value > 3e3) return "Placenta weight must be between 100 and 3000";
          return null;
        },
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        name: "Placenta length",
        header: "Placenta length",
        obsValueType: "value_numeric",
        unit: "cm",
        validation: (value) => {
          if (isNaN(value)) return "Placenta length must be a number";
          if (value < 1 || value > 50) return "Placenta length must be between 1 and 50";
          return null;
        },
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Cord length",
        header: "Cord length",
        obsValueType: "value_numeric",
        unit: "cm",
        validation: (value) => {
          if (isNaN(value)) return "Cord length must be a number";
          if (value < 1 || value > 200) return "Cord length must be between 1 and 200";
          return null;
        },
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Cord insertion",
        header: "Cord insertion",
        obsValueType: "value_coded",
        options: [
          { label: "Central", value: "Central" },
          { label: "Lateral", value: "Lateral" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        name: "Specify other cord insertion",
        header: "Specify other cord insertion",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Cord insertion"] == "Other";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Number of vessels",
        header: "Number of vessels",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (isNaN(value)) return "Number of vessels must be a number";
          if (value < 1 || value > 5) return "Number of vessels must be between 1 and 5";
          return null;
        },
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Placenta condition",
        header: "Placenta condition",
        obsValueType: "value_coded",
        options: [
          { label: "Healthy", value: "Healthy" },
          { label: "Unhealthy", value: "Unhealthy" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Placenta Abnormalities",
        header: "Placenta abnormalities",
        obsValueType: "value_text",
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Estimated blood loss",
        header: "Estimated blood loss",
        obsValueType: "value_numeric",
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "Slot",
        slotName: "cervix",
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Cervix",
        obsValueType: "value_coded",
        options: [
          { label: "Intact", value: "Intact" },
          { label: "Tears", value: "Tears" },
          { label: "Lacerations", value: "Lacerations" }
        ],
        grid: { xs: "12" }
      },
      {
        grid: { s: "1", xs: "1" }
      },
      {
        componentType: "radioButtonField",
        header: "Examination under anaesthesia done?",
        name: "examination under anaesthesia done",
        obsValueType: "value_coded",
        condition: (formValues) => {
          return formValues["Cervix"] == "Tears";
        },
        grid: { s: "11" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "Slot",
        slotName: "perineum",
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Perineum",
        obsValueType: "value_coded",
        options: [
          { label: "Intact", value: "Intact" },
          { label: "Tears", value: "Tears" },
          { label: "Episiotomy", value: "Episiotomy" },
          { label: "Lacerations", value: "Lacerations" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        name: "Other perineum condition",
        header: "Specify other perineum",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Perineum"] == "Other";
        }
      },
      {
        grid: { s: "1", xs: "1" }
      },
      {
        componentType: "radioButtonField",
        name: "Degree of tear",
        header: "Degree of tear",
        obsValueType: "value_coded",
        options: [
          { label: "First degree", value: "First degree" },
          { label: "Second degree", value: "Second degree" },
          { label: "Third degree", value: "Third degree" },
          { label: "Fourth degree", value: "Fourth degree" }
        ],
        grid: { s: "11" },
        condition: (formValues) => {
          return formValues["Perineum"] == "Tears";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Repair done for Tears/Episiotomy",
        header: "Repair done for Tears/ Episiotomy",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" },
        condition: (formValues) => {
          return formValues["Perineum"] === "Tears" || formValues["Perineum"] === "Episiotomy";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    thirdStageDeliveryFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThirdStageDelivery",
  setup(__props, { expose: __expose }) {
    const thirdStageDeliveryComposable = useThirdStageDeliveryForm();
    const formRef = ref(null);
    const thirdStageDeliveryForm = computed(() => {
      return thirdStageDeliveryComposable.thirdStageDeliveryFormSection.value;
    });
    function getCurrentUserDisplayName() {
      const userStore = useUserStore();
      const user = userStore.getUser();
      if (!user?.person?.names?.length) return "";
      const name = user.person.names[0];
      return [name.given_name, name.middle_name, name.family_name].filter(Boolean).join(" ").trim();
    }
    onMounted(() => {
      nextTick(() => {
        const displayName = getCurrentUserDisplayName();
        if (displayName) formRef.value?.setFormValue?.("Staff conducting delivery", displayName);
      });
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit)) {
        toastSuccess("Third stage delivery data saved successfully");
        await formRef.value?.resetForm();
        const displayName = getCurrentUserDisplayName();
        if (displayName) formRef.value?.setFormValue?.("Staff conducting delivery", displayName);
      }
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Placenta Examination",
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": thirdStageDeliveryForm.value
                }, {
                  delivery_date_time: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createBaseVNode("div", { class: "section-subtitle" }, "Date and time of placenta delivery", -1)
                  ])]),
                  placenta_weight_length: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createBaseVNode("div", { class: "section-subtitle" }, "Placenta Weight and Length", -1)
                  ])]),
                  cervix: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createBaseVNode("div", { class: "section-subtitle" }, "Cervix", -1)
                  ])]),
                  perineum: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createBaseVNode("div", { class: "section-subtitle" }, "Perineum", -1)
                  ])]),
                  _: 1
                }, 8, ["form-data"])
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

const ThirdStageDelivery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-900a34dc"]]);

export { SecondStageDelivery as S, ThirdStageDelivery as T };
