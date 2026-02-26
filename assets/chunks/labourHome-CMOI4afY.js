import { t as toRaw, c as computed, s as defineComponent, w as watch, a2 as onMounted, n as nextTick, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, v as documentTextOutline, K as modalController, aL as useRouter, aG as IonContent, bX as chevronBackOutline, eY as paperPlaneOutline, eZ as checkmarkDoneOutline, z as createElementBlock, J as Fragment, R as renderList, c8 as clipboardOutline, f1 as notificationsOutline, cb as flask, f2 as documentText, cn as checkmarkCircle, bu as IonPage, f as ref } from './vendor-BFWX6OWQ.js';
import { a6 as useUserStore, y as StandardValidations, n as icons, z as StandardForm, F as DynamicButton, r as StandardModal, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, T as Toolbar, o as createModal, _ as _export_sfc } from '../index-DJqGAImg.js';
import { D as DemographicBar } from './DemographicBar-CIz5Ngl8.js';
import { D as DashboardCards } from './DashboardCards-DBa42hKy.js';
import { s as storeToRefs } from './pinia-CjkeFwdd.js';
import { u as useLocation } from './useLocation-Cnjhq_s-.js';

function prefillServiceProviderFromUserStore(userData) {
  if (!userData?.user) return;
  if (!userData?.rawUser?.person?.names?.length) return;
  const person = userData?.rawUser.person.names[0];
  const serviceProvider = `${person.given_name} ${person.family_name}`;
  return serviceProvider;
}
function useLabourReferralForm() {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);
  const rawUser = toRaw(user.value);
  const provider = prefillServiceProviderFromUserStore({ user: user?.value, rawUser });
  const reasonForReferringMotherOptions = [
    { value: "Intensive Care/Advanced Monitoring", label: "Intensive Care/Advanced Monitoring" },
    { value: "Need for Surgical Intervention", label: "Need for Surgical Intervention" },
    { value: "Need for blood transfusion", label: "Need for blood transfusion" },
    { value: "Specialist Consultation", label: "Specialist Consultation" },
    { value: "other (specify)", label: "Other (Specify)" }
  ];
  const reasonForReferringBabyOptions = [
    { value: "Lack of Neonatal Intensive Care Unit", label: "Lack of Neonatal Intensive Care Unit" },
    { value: "Need for Advanced Respiratory Life Support", label: "Need for Advanced Respiratory Life Support" },
    { value: "Need for Surgical Intervention", label: "Need for Surgical Intervention" },
    { value: "Need for Specialist Review", label: "Need for Specialist Review" },
    { value: "Need for Exchange Transfusion", label: "Need for Exchange Transfusion" },
    { value: "Severe Complication Requiring Higher Level Care", label: "Severe Complication Requiring Higher Level Care" },
    { value: "Parent Request", label: "Parent Request" },
    { value: "Overcrowding", label: "Overcrowding" },
    { value: "other (specify)", label: "Other (Specify)" }
  ];
  const shouldShowReferralSections = (formValues) => formValues["who is being referred"] === "mother" || formValues["who is being referred"] === "baby";
  const labourReferralForm = computed(() => {
    return [
      {
        componentType: "dateInputField",
        header: "Date of referral",
        name: "Date of referral",
        obsValueType: "value_datetime",
        icon: icons.calenderPrimary,
        placeholder: "Pick date",
        showTodayButton: true,
        validation: StandardValidations.required
      },
      {
        componentType: "inputField",
        header: "Time of referral",
        type: "time",
        name: "Time of referral",
        obsValueType: "value_text",
        icon: icons.time,
        placeholder: "Pick time",
        validation: StandardValidations.required
      },
      {
        componentType: "radioButtonField",
        header: "Who is being referred",
        name: "who is being referred",
        obsValueType: "value_text",
        type: "standard",
        validation: StandardValidations.required,
        options: [
          { label: "Mother", value: "mother" },
          { label: "Baby", value: "baby" }
        ]
      },
      // MOTHER REFERRAL SECTION
      {
        componentType: "checkboxField",
        header: "Reason for referring mother",
        name: "reason for referring mother",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: reasonForReferringMotherOptions,
        condition: (formValues) => formValues["who is being referred"] === "mother"
      },
      {
        componentType: "inputField",
        header: "Other Specify",
        name: "referring mother other specify",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => formValues["who is being referred"] === "mother" && Array.isArray(formValues["reason for referring mother"]) && formValues["reason for referring mother"].includes("other (specify)"),
        validation: StandardValidations.required
      },
      // BABY REFERRAL SECTION
      {
        componentType: "checkboxField",
        header: "Reason for referring baby",
        name: "reason for referring baby",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: reasonForReferringBabyOptions,
        condition: (formValues) => formValues["who is being referred"] === "baby"
      },
      {
        componentType: "inputField",
        header: "Other Specify",
        name: "reffering baby other specify",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => formValues["who is being referred"] === "baby" && Array.isArray(formValues["reason for referring baby"]) && formValues["reason for referring baby"].includes("other (specify)"),
        validation: StandardValidations.required
      },
      { componentType: "Dashes", condition: shouldShowReferralSections },
      // COMMON REFERRAL FIELDS
      {
        componentType: "multiSelectInputField",
        header: "Facility referred",
        name: "referral facility",
        trackBy: "code",
        openDirection: "auto",
        icon: icons.search,
        obsValueType: "value_text",
        placeholder: "Search facility by name",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: facilityList.value.facilities || facilityList.value,
        condition: shouldShowReferralSections
      },
      {
        componentType: "inputField",
        header: "Provider name making referral",
        name: "provider name making referral",
        placeholder: "Provider name",
        obsValueType: "value_text",
        type: "text",
        value: provider || "",
        validation: StandardValidations.required,
        condition: shouldShowReferralSections
      },
      {
        componentType: "phoneInputField",
        header: "Phone number for provider",
        name: "Phone number",
        obsValueType: "value_numeric",
        validation: (value) => {
          if (!value?.phoneNumber) return "Phone number is required";
          if (isNaN(Number(value?.phoneNumber))) return "Phone number can only be a number";
          if (Number(value?.phoneNumber) < 0) return "Phone number must be positive";
          const valueStr = String(value?.phoneNumber);
          if (valueStr.length > 10) return "Phone number cannot exceed 10 digits";
          return null;
        },
        condition: shouldShowReferralSections
      },
      { componentType: "Dashes", condition: shouldShowReferralSections },
      {
        componentType: "dateInputField",
        header: "Date patient departed",
        name: "date patient departed",
        obsValueType: "value_datetime",
        icon: icons.calenderPrimary,
        placeholder: "Pick date",
        showTodayButton: true,
        condition: shouldShowReferralSections
      },
      {
        componentType: "inputField",
        header: "Time patient departed",
        name: "time patient departed",
        type: "time",
        obsValueType: "value_text",
        icon: icons.time,
        placeholder: "Pick time",
        condition: shouldShowReferralSections
      },
      { componentType: "Dashes", condition: shouldShowReferralSections },
      {
        componentType: "inputField",
        header: "Any pre-referral treatment given?",
        name: "any pre-referral treatment given",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: shouldShowReferralSections
      }
    ];
  });
  return {
    labourReferralForm
  };
}

const _hoisted_1$2 = { class: "content-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LabourReferral",
  setup(__props) {
    const { labourReferralForm } = useLabourReferralForm();
    const { formRef } = useExposeFromStandardForm();
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    const rawUser = toRaw(user.value);
    async function prefillServiceProviderFromUserStore() {
      if (!user?.value) return;
      if (!rawUser?.person?.names?.length) return;
      const person = rawUser.person.names[0];
      const serviceProvider = `${person.given_name} ${person.family_name}`;
      formRef.value?.setFormValue?.("provider name making referral", serviceProvider);
    }
    watch(
      () => rawUser,
      async (newID, oldID) => {
        if (newID && newID !== oldID) {
          await nextTick();
          await prefillServiceProviderFromUserStore();
        }
      }
    );
    onMounted(async () => {
      await nextTick();
      await prefillServiceProviderFromUserStore();
    });
    const saveReferral = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() !== null) return toastWarning("Please fill all the required fields");
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.REFERRAL)) toastSuccess("Labour referral details have been created");
      formRef.value?.resetForm();
      modalController.dismiss();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Referral Form",
        subtitle: "Labour Referral",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save Referral",
            onClick: saveReferral,
            fill: "solid",
            class: "save-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(StandardForm, {
              formData: unref(labourReferralForm),
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"])
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const DEATH_STATUSES = /* @__PURE__ */ new Set(["DIED", "BID"]);
const isDeathOutcome = (values) => DEATH_STATUSES.has(values?.maternal_outcome_status);
const hasOtherDeathCause = (values) => values?.maternal_death_cause === "OTHER";
const isReferral = (values) => values?.is_referral === true;
const isDischarged = (values) => values?.discharged_from_laborward === true;
const required = (value, label) => {
  if (value === void 0 || value === null || value === "") return `${label} is required`;
  if (Array.isArray(value) && value.length === 0) return `${label} is required`;
  return null;
};
const normalizePhone = (value) => value.replace(/\s+/g, "").replace(/-/g, "");
const validReferralPhone = (value) => {
  const phone = normalizePhone(String(value?.phoneNumber || ""));
  if (!phone) return "Provider's Phone Number is required";
  const isInternational = /^\+265\d{9}$/.test(phone);
  const isLocal = /^0\d{9}$/.test(phone);
  if (!isInternational && !isLocal) {
    return "Use +265XXXXXXXXX or 0XXXXXXXXX";
  }
  return null;
};
const toDateTime = (date, time) => {
  if (!date || !time) return null;
  const dt = /* @__PURE__ */ new Date(`${date}T${time}`);
  return Number.isNaN(dt.getTime()) ? null : dt;
};
const validateDepartureAfterDecision = (allValues) => {
  if (!isReferral(allValues)) return null;
  const decisionDate = allValues?.referral_decision_date;
  const decisionTime = allValues?.referral_decision_time;
  const departureDate = allValues?.patient_departure_date;
  const departureTime = allValues?.patient_departure_time;
  const decisionDt = toDateTime(decisionDate, decisionTime);
  const departureDt = toDateTime(departureDate, departureTime);
  if (!decisionDt || !departureDt) return null;
  if (departureDt.getTime() < decisionDt.getTime()) {
    return "Patient departure date/time must be after or equal to referral decision date/time";
  }
  return null;
};
function useEndLabourForm() {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const outcomeStatusOptions = [
    { label: "Alive & Stable", value: "ALIVE_STABLE" },
    { label: "Alive & Unstable", value: "ALIVE_UNSTABLE" },
    { label: "Died", value: "DIED" },
    { label: "Brought In Dead", value: "BID" }
  ];
  const maternalDeathCauseOptions = [
    { label: "Haemorrhage", value: "HAEMORRHAGE" },
    { label: "Obstructed labour", value: "OBSTRUCTED_LABOUR" },
    { label: "Pre-eclampsia", value: "PRE_ECLAMPSIA" },
    { label: "Eclampsia", value: "ECLAMPSIA" },
    { label: "Anemia", value: "ANEMIA" },
    { label: "Sepsis", value: "SEPSIS" },
    { label: "Other", value: "OTHER" }
  ];
  const referralReasonOptions = [
    { label: "ICU advanced monitoring", value: "ICU_ADVANCED_MONITORING" },
    { label: "Surgical intervention", value: "SURGICAL_INTERVENTION" },
    { label: "Blood transfusion", value: "BLOOD_TRANSFUSION" },
    { label: "Specialist consultation", value: "SPECIALIST_CONSULTATION" },
    { label: "Other", value: "OTHER" }
  ];
  const endLabourForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Section A - Maternal Outcome",
        position: "left"
      },
      {
        componentType: "radioButtonField",
        header: "Outcome Status",
        name: "maternal_outcome_status",
        obsValueType: "value_text",
        type: "inline",
        validation: (value) => required(value, "Outcome Status"),
        options: outcomeStatusOptions
      },
      {
        componentType: "dateInputField",
        header: "Outcome Date",
        name: "maternal_outcome_date",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        validation: (value) => required(value, "Outcome Date")
      },
      {
        componentType: "timeInputField",
        header: "Outcome Time",
        name: "maternal_outcome_time",
        obsValueType: "value_text",
        icon: icons.time,
        showNowButton: true,
        validation: (value) => required(value, "Outcome Time")
      },
      { componentType: "Dashes" },
      {
        componentType: "Heading",
        name: "Section B - Death Details",
        position: "left",
        condition: (allValues) => isDeathOutcome(allValues)
      },
      {
        componentType: "radioButtonField",
        header: "Primary Diagnosis / Cause of Death",
        name: "maternal_death_cause",
        obsValueType: "value_text",
        type: "inline",
        condition: (allValues) => isDeathOutcome(allValues),
        validation: (value, allValues) => {
          if (!isDeathOutcome(allValues)) return null;
          return required(value, "Primary Diagnosis / Cause of Death");
        },
        options: maternalDeathCauseOptions
      },
      {
        componentType: "inputField",
        header: "Other Cause (Specify)",
        name: "maternal_death_cause_other",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allValues) => isDeathOutcome(allValues) && hasOtherDeathCause(allValues),
        validation: (value, allValues) => {
          if (!isDeathOutcome(allValues) || !hasOtherDeathCause(allValues)) return null;
          return required(value, "Other Cause (Specify)");
        }
      },
      { componentType: "Dashes" },
      {
        componentType: "Heading",
        name: "Section C - Discharged from Labor Ward",
        position: "left"
      },
      {
        componentType: "switchField",
        header: "Discharged from Laborward",
        name: "discharged_from_laborward",
        obsValueType: "value_text",
        trueValue: true,
        falseValue: false,
        value: false
      },
      {
        componentType: "dateInputField",
        header: "Discharge Date",
        name: "laborward_discharge_date",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        condition: (allValues) => isDischarged(allValues),
        validation: (value, allValues) => {
          if (!isDischarged(allValues)) return null;
          return required(value, "Discharge Date");
        }
      },
      {
        componentType: "timeInputField",
        header: "Discharge Time",
        name: "laborward_discharge_time",
        obsValueType: "value_text",
        icon: icons.time,
        showNowButton: true,
        condition: (allValues) => isDischarged(allValues),
        validation: (value, allValues) => {
          if (!isDischarged(allValues)) return null;
          return required(value, "Discharge Time");
        }
      },
      { componentType: "Dashes" },
      {
        componentType: "Heading",
        name: "Section D - Referral Details",
        position: "left"
      },
      {
        componentType: "switchField",
        header: "If Referral",
        name: "is_referral",
        obsValueType: "value_text",
        trueValue: true,
        falseValue: false,
        value: false
      },
      {
        componentType: "dateInputField",
        header: "Date decision made",
        name: "referral_decision_date",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          return required(value, "Date decision made");
        }
      },
      {
        componentType: "timeInputField",
        header: "Time decision made",
        name: "referral_decision_time",
        obsValueType: "value_text",
        icon: icons.time,
        showNowButton: true,
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          return required(value, "Time decision made");
        }
      },
      {
        componentType: "checkboxField",
        header: "Reason for Referral",
        name: "referral_reasons",
        obsValueType: "value_text",
        type: "multiple",
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          return required(value, "Reason for Referral");
        },
        options: referralReasonOptions
      },
      {
        componentType: "inputField",
        header: "Other Reason (Specify)",
        name: "referral_reason_other",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allValues) => isReferral(allValues) && Array.isArray(allValues?.referral_reasons) && allValues.referral_reasons.includes("OTHER"),
        validation: (value, allValues) => {
          if (!isReferral(allValues) || !Array.isArray(allValues?.referral_reasons) || !allValues.referral_reasons.includes("OTHER")) {
            return null;
          }
          return required(value, "Other Reason (Specify)");
        }
      },
      {
        componentType: "dateInputField",
        header: "Date patient departed",
        name: "patient_departure_date",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          const missing = required(value, "Date patient departed");
          if (missing) return missing;
          return validateDepartureAfterDecision(allValues);
        }
      },
      {
        componentType: "timeInputField",
        header: "Time patient departed",
        name: "patient_departure_time",
        obsValueType: "value_text",
        icon: icons.time,
        showNowButton: true,
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          const missing = required(value, "Time patient departed");
          if (missing) return missing;
          return validateDepartureAfterDecision(allValues);
        }
      },
      {
        componentType: "textAreaField",
        header: "Any pre-referral treatment given",
        name: "pre_referral_treatment",
        obsValueType: "value_text",
        condition: (allValues) => isReferral(allValues)
      },
      {
        componentType: "multiSelectInputField",
        header: "Referring Facility – Name (Specify)",
        name: "referring_facility_name",
        obsValueType: "value_text",
        trackBy: "code",
        openDirection: "auto",
        icon: icons.search,
        placeholder: "Search facility by name",
        options: facilityList.value.facilities || facilityList.value,
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          return required(value, "Referring Facility - Name (Specify)");
        }
      },
      {
        componentType: "inputField",
        header: "Provider’s Name making referral",
        name: "referring_provider_name",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          return required(value, "Provider's Name making referral");
        }
      },
      {
        componentType: "phoneInputField",
        header: "Provider’s Phone Number",
        name: "referring_provider_phone",
        obsValueType: "value_text",
        condition: (allValues) => isReferral(allValues),
        validation: (value, allValues) => {
          if (!isReferral(allValues)) return null;
          return validReferralPhone(value);
        }
      }
    ];
  });
  return {
    endLabourForm
  };
}

const _hoisted_1$1 = { class: "content-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EndLabour",
  setup(__props) {
    const { endLabourForm } = useEndLabourForm();
    const { formRef } = useExposeFromStandardForm();
    const BASE_PAYLOAD = {
      maternal_outcome_status: null,
      maternal_outcome_date: null,
      maternal_outcome_time: null,
      maternal_death_cause: null,
      maternal_death_cause_other: null,
      discharged_from_laborward: false,
      laborward_discharge_date: null,
      laborward_discharge_time: null,
      is_referral: false,
      referral_decision_date: null,
      referral_decision_time: null,
      referral_reasons: null,
      referral_reason_other: null,
      patient_departure_date: null,
      patient_departure_time: null,
      pre_referral_treatment: null,
      referring_facility_name: null,
      referring_provider_name: null,
      referring_provider_phone: null
    };
    const mapFormValuesToPayload = (values) => {
      const payload = {
        ...BASE_PAYLOAD,
        ...values
      };
      if (Array.isArray(payload.referral_reasons) && payload.referral_reasons.length === 0) {
        payload.referral_reasons = null;
      }
      if (payload.referring_provider_phone && typeof payload.referring_provider_phone === "object") {
        payload.referring_provider_phone = payload.referring_provider_phone.phoneNumber || null;
      }
      return payload;
    };
    const mapPayloadToObservationData = (payload, obsValueType) => {
      const mapped = {
        ...payload,
        obsValueType
      };
      mapped.discharged_from_laborward = payload.discharged_from_laborward ? "true" : "false";
      mapped.is_referral = payload.is_referral ? "true" : "false";
      if (!payload.is_referral) {
        mapped.referral_reasons = null;
      }
      return mapped;
    };
    const saveData = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() !== null) return toastWarning("Please fill all the required fields");
      const payload = mapFormValuesToPayload(data || {});
      const observationData = mapPayloadToObservationData(payload, data?.obsValueType || {});
      if (await ObservationService.buildSaveObs(observationData, EncounterTypeId.END_LABOUR_PROGRAM)) {
        toastSuccess("Maternal outcome details have been saved");
      }
      formRef.value?.resetForm();
      modalController.dismiss(payload);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Referral Outcome",
        subtitle: "Maternal Outcomes",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save Maternal Outcome",
            onClick: saveData,
            fill: "solid",
            class: "submit-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(StandardForm, {
              formData: unref(endLabourForm),
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"])
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const _hoisted_1 = { class: "dashboard-container" };
const _hoisted_2 = { class: "back-profile" };
const _hoisted_3 = { class: "dashboard-grid" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labourHome",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const gravida = ref("");
    const cardsData = [
      { title: "Quick Check", path: "/labour/labour-quick-check", icon: clipboardOutline, isSaved: false },
      { title: "Labour Assessment", path: "/labour/assessment", icon: clipboardOutline, isSaved: false },
      { title: "Continuous Monitoring", path: "/labour/continuous-monitoring", icon: notificationsOutline, isSaved: false },
      { title: "Lab Investigations", path: "/labour/lab-investigations", icon: flask, isSaved: false },
      { title: "Summary of Labour", path: "/labour/summary-of-labour", icon: clipboardOutline, isSaved: false },
      { title: "Delivery Details", path: "/labour/delivery-details", icon: documentText, isSaved: false },
      { title: "Immediate Postnatal Checks", path: "/labour/postnatal-checks", icon: checkmarkCircle, isSaved: false }
    ];
    const navigateTo = (path) => {
      router.push({ path });
    };
    const referralModal = async () => {
      await createModal(_sfc_main$2, { class: "medium-modal" });
    };
    const labourOutcomeModal = async () => {
      await createModal(_sfc_main$1, { class: "medium-modal" });
    };
    const handleProfile = async () => {
      try {
        const gravidaValue = await ObservationService.getFirstObsValue(patient.value.patientID, "Gravida", "value_text");
        gravida.value = gravidaValue;
      } catch (error) {
        console.error("Error fetching gravida:", error);
      }
    };
    onMounted(() => {
      handleProfile();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(DynamicButton, {
                    name: "Back to profile",
                    iconSlot: "start",
                    fill: "clear",
                    icon: unref(chevronBackOutline),
                    onClick: _cache[0] || (_cache[0] = ($event) => navigateTo("/patient-profile"))
                  }, null, 8, ["icon"]),
                  createBaseVNode("div", null, [
                    createVNode(DynamicButton, {
                      name: "Referral",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(paperPlaneOutline),
                      onClick: referralModal,
                      class: "sub-button"
                    }, null, 8, ["icon"]),
                    createVNode(DynamicButton, {
                      name: "Maternal Outcome",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(checkmarkDoneOutline),
                      onClick: labourOutcomeModal,
                      class: "sub-button"
                    }, null, 8, ["icon"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_3, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(cardsData, (card, index) => {
                    return createVNode(DashboardCards, {
                      key: index,
                      icon: card.icon,
                      title: card.title,
                      isSaved: card.isSaved,
                      onClick: ($event) => !card.isSaved && navigateTo(card.path)
                    }, null, 8, ["icon", "title", "isSaved", "onClick"]);
                  }), 64))
                ])
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

const labourHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-290be76f"]]);

export { labourHome as default };
