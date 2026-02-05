import { c as computed, s as defineComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, v as documentTextOutline, K as modalController, aL as useRouter, a2 as onMounted, aG as IonContent, bX as chevronBackOutline, eP as paperPlaneOutline, eQ as checkmarkDoneOutline, z as createElementBlock, J as Fragment, R as renderList, c8 as clipboardOutline, eU as notificationsOutline, eV as documentText, cn as checkmarkCircle, bu as IonPage, f as ref } from './vendor-CCA5uLDN.js';
import { y as StandardValidations, n as icons, z as StandardForm, F as DynamicButton, r as StandardModal, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, T as Toolbar, o as createModal, _ as _export_sfc } from '../index-Bpb3_0mI.js';
import { D as DemographicBar } from './DemographicBar-BzirZBzv.js';
import { D as DashboardCards } from './DashboardCards-EdbYYuNB.js';
import { s as storeToRefs } from './pinia-D-2CL6iz.js';

function useLabourReferralForm() {
  const reasonForReferringMotherOptions = [
    { value: "Intensive Care/Advanced Monitoring", label: "Intensive Care/Advanced Monitoring" },
    { value: "Need for Surgical Intervention", label: "Need for Surgical Intervention" },
    { value: "Need for blood transfusion", label: "Need for blood transfusion" },
    { value: "Specialist Consultation", label: "Specialist Consultation" },
    { value: "danger sign present", label: "Danger sign present" },
    { value: "antepartum haemorrhage", label: "Antepartum haemorrhage" },
    { value: "postpartum haemorrhage", label: "Postpartum haemorrhage" },
    { value: "obstructed/Prolonged labour", label: "Obstructed/Prolonged labour" },
    { value: "pre-Eclampsia", label: "Pre-Eclampsia" },
    { value: "sepsis", label: "Sepsis" },
    { value: "ruptured uterus", label: "Ruptured uterus" },
    { value: "retained placenta", label: "Retained placenta" },
    { value: "premature labour", label: "Premature labour" },
    { value: "fetal distress", label: "Fetal distress" },
    { value: "perineal tear (2nd, 3rd or 4th degree)", label: "Perineal tear (2nd, 3rd or 4th degree)" },
    { value: "placenta Previa", label: "Placenta Previa" },
    { value: "placenta abruption", label: "Placenta abruption" },
    { value: "severe anaemia", label: "Severe anaemia" },
    { value: "symphysiotomy", label: "Symphysiotomy" },
    { value: "other", label: "Other" }
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
    { value: "asphyxia", label: "Asphyxia" },
    { value: "preterm", label: "Preterm" },
    { value: "under weight", label: "Under weight" },
    { value: "congenital abnormalities", label: "Congenital abnormalities" },
    { value: "sepsi", label: "Sepsi" },
    { value: "other reason", label: "Other reason" }
  ];
  const labourReferralForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Who is being referred",
        name: "referred",
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
        name: "referring mother",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: reasonForReferringMotherOptions,
        condition: (formValues) => formValues["referred"] === "mother"
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "_referring mother",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => formValues["referred"] === "mother" && Array.isArray(formValues["referring mother"]) && formValues["referring mother"].includes("other"),
        validation: StandardValidations.required
      },
      {
        componentType: "inputField",
        header: "Any other treatment given before referral?",
        name: "treatment given before referral",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => formValues["referred"] === "mother"
      },
      // BABY REFERRAL SECTION
      {
        componentType: "checkboxField",
        header: "Reason for referring baby",
        name: "Baby identifier",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: reasonForReferringBabyOptions,
        condition: (formValues) => formValues["referred"] === "baby"
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "_Baby identifier",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => formValues["referred"] === "baby" && Array.isArray(formValues["Baby identifier"]) && formValues["Baby identifier"].includes("other reason"),
        validation: StandardValidations.required
      },
      {
        componentType: "inputField",
        header: "Any other treatment given to baby before referral?",
        name: "treatment given to baby before referral",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => formValues["referred"] === "baby"
      },
      { componentType: "Dashes" },
      // COMMON REFERRAL FIELDS
      {
        componentType: "dateInputField",
        header: "Date of referral",
        name: "Date of referral",
        obsValueType: "value_datetime",
        icon: icons.calenderPrimary,
        placeholder: "Pick date",
        showTodayButton: true,
        validation: StandardValidations.required,
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Time of referral",
        type: "time",
        name: "Time of referral",
        obsValueType: "value_text",
        icon: icons.time,
        placeholder: "Pick time",
        validation: StandardValidations.required,
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Provider who made referral",
        name: "Provider who made referral",
        obsValueType: "value_text",
        type: "text",
        validation: StandardValidations.required,
        grid: { s: "6" }
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
        grid: { s: "6" }
      },
      { componentType: "Dashes" },
      {
        componentType: "radioButtonField",
        header: "Syphillis test",
        name: "Syphillis",
        obsValueType: "value_text",
        type: "standard",
        options: [
          { label: "Positive", value: "positive" },
          { label: "Negative", value: "negative" }
        ]
      },
      {
        componentType: "dateInputField",
        header: "Date the test was conducted",
        name: "Test",
        obsValueType: "value_datetime",
        icon: icons.calenderPrimary,
        condition: (formValues) => formValues["Syphillis"]
      },
      { componentType: "Dashes" },
      {
        componentType: "radioButtonField",
        header: "HIV test",
        name: "HIV",
        obsValueType: "value_text",
        type: "standard",
        value: "negative",
        options: [
          { label: "Positive", value: "positive" },
          { label: "Negative", value: "negative" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Is the client on ART?",
        name: "chronic conditions",
        obsValueType: "value_text",
        type: "standard",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "no" }
        ],
        condition: (formValues) => formValues["HIV"] === "positive",
        onChange: (value, allFormValues) => {
          const updates = {};
          if (value === "no") {
            updates["Art number"] = "";
            updates["facility for art"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "inputField",
        header: "ART number",
        name: "Art number",
        obsValueType: "value_text",
        type: "text",
        condition: (formValues) => formValues["HIV"] === "positive" && formValues["chronic conditions"] === "Yes"
      },
      {
        componentType: "inputField",
        header: "Facility for ART",
        name: "facility for art",
        obsValueType: "value_text",
        type: "text",
        icon: icons.search,
        placeholder: "Search for facility",
        condition: (formValues) => formValues["HIV"] === "positive" && formValues["chronic conditions"] === "Yes"
      },
      { componentType: "Dashes" },
      {
        componentType: "inputField",
        header: "Last HB result",
        name: "HB",
        obsValueType: "value_numeric",
        type: "number",
        validation: (value) => {
          if (value && isNaN(Number(value))) return "HB can only be a number";
          if (value && Number(value) < 0) return "HB must be positive";
          return null;
        }
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
    const saveReferral = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() !== null) return toastWarning("Please fill all the required fields");
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.REFERRAL)) toastSuccess("ANC referral details have been created");
      formRef.value?.resetForm();
      modalController.dismiss();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Referral Form",
        subtitle: "ANC Patient Referral",
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

function useEndLabourForm() {
  const reasonForClosingOptions = [
    { label: "Death", value: "death" },
    { label: "Absconded", value: "absconded" },
    { label: "Wrong entry", value: "wrong entry" },
    { label: "Other", value: "other" }
  ];
  const endLabourForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Reason for closing labour and delivery record",
        name: "closing labour and delivery",
        obsValueType: "value_text",
        type: "standard",
        validation: StandardValidations.required,
        options: reasonForClosingOptions
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "_closing labour and delivery",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => {
          return formValues["closing labour and delivery"] === "other";
        },
        validation: StandardValidations.required
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
    const router = useRouter();
    const saveData = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() !== null) return toastWarning("Please fill all the required fields");
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.END_LABOUR_PROGRAM)) toastSuccess("ANC referral details have been created");
      formRef.value?.resetForm();
      router.push("/patient-profile");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "End Labour",
        subtitle: "Reason for ending labour",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save End Labour",
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
      { title: "Labour Assessment", path: "/labour/assessment", icon: clipboardOutline, isSaved: false },
      { title: "Continuous Monitoring", path: "/labour/continuous-monitoring", icon: notificationsOutline, isSaved: false },
      { title: "Delivery Details", path: "/labour/delivery-details", icon: documentText, isSaved: false },
      { title: "Immediate Postnatal Checks", path: "/labour/postnatal-checks", icon: checkmarkCircle, isSaved: false },
      { title: "Quick Check", path: "/labour/labour-quick-check", icon: clipboardOutline, isSaved: false }
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
                      name: "Labour outcome",
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

const labourHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fe50bf0f"]]);

export { labourHome as default };
