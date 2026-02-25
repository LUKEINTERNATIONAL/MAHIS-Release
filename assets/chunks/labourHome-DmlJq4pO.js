import { t as toRaw, c as computed, s as defineComponent, w as watch, a2 as onMounted, n as nextTick, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, v as documentTextOutline, K as modalController, aL as useRouter, aG as IonContent, bX as chevronBackOutline, eY as paperPlaneOutline, eZ as checkmarkDoneOutline, z as createElementBlock, J as Fragment, R as renderList, c8 as clipboardOutline, f1 as notificationsOutline, cb as flask, f2 as documentText, cn as checkmarkCircle, bu as IonPage, f as ref } from './vendor-C-pvji42.js';
import { a6 as useUserStore, y as StandardValidations, n as icons, z as StandardForm, F as DynamicButton, r as StandardModal, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, T as Toolbar, o as createModal, _ as _export_sfc } from '../index-CjSYiJZL.js';
import { D as DemographicBar } from './DemographicBar-BaB8s4FO.js';
import { D as DashboardCards } from './DashboardCards-D1YHTsn6.js';
import { s as storeToRefs } from './pinia-DuETIfNk.js';
import { u as useLocation } from './useLocation-WycnqbQ9.js';

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
      { componentType: "Dashes" },
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
        condition: (formValues) => formValues["who is being referred"] === "mother" || formValues["who is being referred"] === "baby"
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
        condition: (formValues) => formValues["who is being referred"] === "mother" || formValues["who is being referred"] === "baby"
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
        condition: (formValues) => formValues["who is being referred"] === "mother" || formValues["who is being referred"] === "baby"
      },
      { componentType: "Dashes" },
      {
        componentType: "dateInputField",
        header: "Date patient departed",
        name: "date patient departed",
        obsValueType: "value_datetime",
        icon: icons.calenderPrimary,
        placeholder: "Pick date",
        showTodayButton: true,
        condition: (formValues) => formValues["who is being referred"] === "mother" || formValues["who is being referred"] === "baby"
      },
      {
        componentType: "inputField",
        header: "Time patient departed",
        name: "time patient departed",
        type: "time",
        obsValueType: "value_text",
        icon: icons.time,
        placeholder: "Pick time",
        condition: (formValues) => formValues["who is being referred"] === "mother" || formValues["who is being referred"] === "baby"
      },
      { componentType: "Dashes" },
      {
        componentType: "inputField",
        header: "Any pre-referral treatment given?",
        name: "any pre-referral treatment given",
        obsValueType: "value_text",
        type: "text",
        icon: icons.editPen,
        condition: (formValues) => formValues["who is being referred"] === "mother" || formValues["who is being referred"] === "baby"
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
      { title: "Quick Check", path: "/labour/labour-quick-check", icon: clipboardOutline, isSaved: false },
      { title: "Labour Assessment", path: "/labour/assessment", icon: clipboardOutline, isSaved: false },
      { title: "Continuous Monitoring", path: "/labour/continuous-monitoring", icon: notificationsOutline, isSaved: false },
      { title: "Lab Investigations", path: "/labour/lab-investigations", icon: flask, isSaved: false },
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

const labourHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16e547aa"]]);

export { labourHome as default };
