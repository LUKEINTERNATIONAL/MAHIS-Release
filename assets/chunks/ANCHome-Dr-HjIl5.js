import { v as defineComponent, f as ref, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, D as createBaseVNode, B as createVNode, a6 as createTextVNode, E as toDisplayString, G as unref, x as documentTextOutline, L as modalController, c as computed, aK as useRouter, a3 as onMounted, aF as IonContent, bY as chevronBackOutline, dt as calendar, eR as paperPlaneOutline, eS as checkmarkDoneOutline, A as createElementBlock, K as Fragment, S as renderList, bu as IonPage, ca as clipboardOutline, eB as bodyOutline, cd as flask, cj as medkit, eT as chatbubbles } from './vendor-Cbv9TWZo.js';
import { S as Service, u as useDemographicsStore, F as DynamicButton, q as StandardModal, K as ObservationService, H as HisDate, b as EncounterTypeId, G as toastSuccess, J as savePatientRecord, _ as _export_sfc, y as StandardValidations, n as icons, z as StandardForm, C as useExposeFromStandardForm, t as toastWarning, T as Toolbar, o as createModal } from '../index-DIdCIGDg.js';
import { D as DemographicBar } from './DemographicBar-CZRB7I3L.js';
import { D as DashboardCards } from './DashboardCards-DcCJbJs7.js';
import { s as storeToRefs } from './pinia-C6LE2xz6.js';
import { u as useLocation } from './useLocation-DjJcgiZw.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-BcntrrNU.js';

const _hoisted_1$3 = { class: "calendar-container" };
const _hoisted_2$1 = { class: "calendar-selector" };
const _hoisted_3$1 = { class: "calendar-day" };
const _hoisted_4 = { class: "day-wrapper" };
const _hoisted_5 = { class: "count-badge" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NextAppointment",
  setup(__props) {
    const selectedDate = ref(null);
    const minDate = ref(new Date(Service.getSessionDate()));
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const saveAppointment = async () => {
      if (!selectedDate.value) return;
      const obs = await ObservationService.buildValueDate("Appointment date", HisDate.toStandardHisFormat(selectedDate.value));
      if (await ObservationService.addObsToEncounterPatient([obs], EncounterTypeId.APPOINTMENT)) toastSuccess("next Appointment Set Successfully");
      await savePatientRecord(patient.value);
      modalController.dismiss();
    };
    const getCount = (date) => {
      return "";
    };
    const handleDateSelection = async (date) => {
      if (!date) return;
      selectedDate.value = date;
    };
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createBlock(StandardModal, {
        title: "Next Appointment ",
        subtitle: "ANC Next Appointment",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save Appointment",
            onClick: saveAppointment,
            fill: "solid",
            class: "save-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "calendar-title" }, "Set Appointments", -1)),
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_VueDatePicker, {
                class: "calendar",
                onDateUpdate: handleDateSelection,
                inline: "",
                "auto-apply": "",
                "enable-time-picker": false,
                "min-date": minDate.value,
                modelValue: selectedDate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event)
              }, {
                day: withCtx(({ day, date }) => [
                  createBaseVNode("p", _hoisted_3$1, [
                    createBaseVNode("span", _hoisted_4, [
                      createTextVNode(toDisplayString(day) + " ", 1),
                      createBaseVNode("sup", _hoisted_5, toDisplayString(getCount(date)), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["min-date", "modelValue"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const NextAppointmentModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3ca86ed3"]]);

const useANCReferralForm = () => {
  const { facilityList, getFacilities } = useLocation();
  const diagnoses = ref([]);
  const getDiagnosis = async (value) => {
    const searchValue = value.trim().toLowerCase() || "";
    diagnoses.value = await PatientDiagnosisService.getDiagnosis(searchValue, 1, 15);
    return diagnoses.value;
  };
  getDiagnosis("");
  getFacilities();
  const transportOptions = [
    "Walking",
    "Ambulance",
    "Public transport",
    "Private transport",
    "Police vehicle",
    "Other public or company vehicle",
    "Motorcycle",
    "Taxi (car/motorcycle)",
    "Bicycle"
  ].map((label) => ({ label, value: label }));
  const ANCReferralForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Referral for urgent care",
        name: "Referral for urgent care",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "inline",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Reason for referral",
        name: "Reason for referral",
        obsValueType: "value_text",
        type: "inline",
        options: [
          { label: "Referral for screening including diagnostics", value: "Referral for screening including diagnostics" },
          { label: "Referral for other general services", value: "Referral for other general services" }
        ]
      },
      {
        componentType: "textAreaField",
        header: "Other reasons for referral",
        name: "_Reason for referral",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (data) => data?.["Reason for referral"] === "Referral for other general services"
      },
      {
        componentType: "radioButtonField",
        header: "Any treatment given before referral?",
        name: "Any treatment given before referral",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "inline",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "textAreaField",
        header: "Summary of current condition and treatment provided on referral?",
        name: "Summary of current condition and treatment provided on referral?",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (data) => data?.["Any treatment given before referral"] === "Yes"
      },
      { componentType: "Dashes" },
      {
        name: "Provisional Diagnosis",
        header: "Provisional Diagnosis",
        componentType: "multiSelectInputField",
        isMultiple: true,
        trackBy: "name",
        obsValueType: "value_coded",
        options: diagnoses.value,
        icon: icons.search,
        onSearchChange: getDiagnosis,
        validation: StandardValidations.required
      },
      { componentType: "Dashes" },
      {
        componentType: "multiSelectInputField",
        header: "Facility",
        name: "Referral facility",
        trackBy: "code",
        openDirection: "auto",
        icon: icons.search,
        obsValueType: "value_text",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: facilityList.value.facilities || facilityList.value
      },
      {
        componentType: "inputField",
        header: "Department",
        name: "Department",
        obsValueType: "value_text",
        grid: { s: "6" },
        icon: icons.editPen
      },
      {
        componentType: "inputField",
        header: "Contact Person",
        name: "Contact Person",
        obsValueType: "value_text",
        icon: icons.editPen,
        grid: { s: "6" }
      },
      { componentType: "Dashes" },
      {
        componentType: "switchField",
        label: "Accompanying Staff",
        name: "Accompanying Staff",
        obsValueType: "value_text",
        trueValue: "Yes",
        falseValue: "No"
      },
      {
        componentType: "multiSelectInputField",
        header: "Transport Type",
        name: "Mode of transport",
        obsValueType: "value_text",
        isMultiple: false,
        label: "label",
        trackBy: "value",
        options: transportOptions,
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Provider’s phone number",
        name: "Provider’s phone number",
        obsValueType: "value_text",
        grid: { s: "6" },
        icon: icons.phone,
        validation: StandardValidations.isMWPhoneNumber
      },
      {
        componentType: "dateInputField",
        header: "Referral Appointment Date",
        name: "Date referral was made",
        showTodayButton: true,
        validation: StandardValidations.required,
        obsValueType: "value_date",
        icon: icons.calendar,
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Referral Appointment Time",
        name: "Time referral made",
        type: "time",
        validation: StandardValidations.required,
        obsValueType: "value_text",
        icon: icons.time,
        grid: { s: "6" }
      },
      { componentType: "Dashes" },
      {
        componentType: "textAreaField",
        header: "Referral notes",
        name: "Referral notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        validation: StandardValidations.required
      }
    ];
  });
  return {
    ANCReferralForm
  };
};

const _hoisted_1$2 = { class: "content-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ANCreferral",
  setup(__props) {
    const { ANCReferralForm } = useANCReferralForm();
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
              formData: unref(ANCReferralForm),
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

const useANCPregnantOutComeForm = () => {
  const pregnancyOutcomeOptions = [
    { label: "In labour", value: "In labour" },
    { label: "Live birth", value: "Live birth" },
    { label: "Stillbirth", value: "Stillbirth" },
    { label: "Pregnancy, miscarriage", value: "Pregnancy, miscarriage" },
    { label: "Abortion", value: "Abortion" },
    { label: "Death", value: "Death" },
    { label: "Lost to follow up", value: "Lost to follow up" },
    { label: "Moved away", value: "Moved away" },
    { label: "Other outcome", value: "Other outcome" }
  ];
  const placeOfDeliveryOptions = [
    { label: "Home", value: "Home or TBA" },
    { label: "Health-care facility", value: "Health-care facility" },
    { label: "Other", value: "Other" }
  ];
  const modeOfDeliveryOptions = [
    { label: "Normal", value: "Normal" },
    { label: "Forceps", value: "Forceps" },
    { label: "Vacuum", value: "Vacuum" },
    { label: "Caesarean section", value: "Caesarean section" }
  ];
  const pregnantOutComeForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "What is the outcome of the pregnancy?",
        name: "ANC pregnancy outcome",
        obsValueType: "value_coded",
        type: "inline",
        validation: StandardValidations.required,
        options: pregnancyOutcomeOptions
      },
      { grid: { s: "1" } },
      {
        componentType: "textAreaField",
        header: "Specify",
        name: "Pregnancy outcome notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        grid: { s: "11" },
        validation: StandardValidations.required,
        condition: (data) => data?.["ANC pregnancy outcome"] === "Other outcome"
      },
      { grid: { s: "1" } },
      {
        componentType: "dateInputField",
        header: "Date of death",
        name: "Date of death",
        showTodayButton: true,
        grid: { s: "11" },
        validation: StandardValidations.required,
        obsValueType: "value_date",
        icon: icons.calendar,
        condition: (data) => data?.["ANC pregnancy outcome"] === "Death"
      },
      { grid: { s: "1" } },
      {
        componentType: "textAreaField",
        header: "Cause of Death",
        name: "Cause of death",
        obsValueType: "value_text",
        icon: icons.editPen,
        grid: { s: "11" },
        validation: StandardValidations.required,
        condition: (data) => data?.["ANC pregnancy outcome"] === "Death"
      },
      { grid: { s: "1" } },
      // Delivery-related fields (shown for Live birth)
      {
        componentType: "dateInputField",
        header: "Estimated date of delivery",
        name: "Estimated date of delivery",
        showTodayButton: true,
        grid: { s: "11" },
        validation: StandardValidations.required,
        obsValueType: "value_date",
        icon: icons.calendar,
        condition: (data) => data?.["ANC pregnancy outcome"] === "Live birth"
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Place of delivery",
        name: "Place of Delivery",
        obsValueType: "value_coded",
        grid: { s: "11" },
        validation: StandardValidations.required,
        type: "inline",
        options: placeOfDeliveryOptions,
        condition: (data) => data?.["ANC pregnancy outcome"] === "Live birth"
      },
      { grid: { s: "1" } },
      {
        componentType: "inputField",
        header: "Specify",
        name: "_Place of delivery",
        obsValueType: "value_text",
        icon: icons.editPen,
        grid: { s: "11" },
        validation: StandardValidations.required,
        condition: (data) => data?.["Place of Delivery"] === "Other"
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Preterm birth",
        name: "Preterm birth",
        obsValueType: "value_coded",
        grid: { s: "11" },
        validation: StandardValidations.required,
        type: "inline",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        condition: (data) => data?.["ANC pregnancy outcome"] === "Live birth"
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Mode of delivery",
        name: "Mode of delivery",
        obsValueType: "value_coded",
        type: "inline",
        grid: { s: "11" },
        validation: StandardValidations.required,
        options: modeOfDeliveryOptions,
        condition: (data) => data?.["ANC pregnancy outcome"] === "Live birth"
      },
      { grid: { s: "1" } },
      {
        componentType: "inputField",
        header: "Birth weight (grams)",
        name: "Weight",
        obsValueType: "value_numeric",
        type: "number",
        icon: icons.weight,
        grid: { s: "11" },
        validation: (value) => {
          const required = StandardValidations.required(value);
          if (required !== true) return required;
          const numValue = Number(value);
          if (isNaN(numValue)) return "Value should be a number";
          if (numValue < 0) return "Weight must be positive";
          if (numValue > 6e3) return "Weight must be less than 6000g";
          return true;
        },
        condition: (data) => data?.["ANC pregnancy outcome"] === "Live birth"
      }
    ];
  });
  return {
    pregnantOutComeForm
  };
};

const _hoisted_1$1 = { class: "content-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PregnantOutcome",
  setup(__props) {
    const { pregnantOutComeForm } = useANCPregnantOutComeForm();
    const { formRef } = useExposeFromStandardForm();
    const router = useRouter();
    const saveData = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() !== null) return toastWarning("Please fill all the required fields");
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.PREGNANT_OUTCOME)) toastSuccess("ANC referral details have been created");
      formRef.value?.resetForm();
      router.push("patientProfile");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Pregnancy Outcome",
        subtitle: "ANC Pregnancy Outcome",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save Outcome",
            onClick: saveData,
            fill: "solid",
            class: "submit-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(StandardForm, {
              formData: unref(pregnantOutComeForm),
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
  __name: "ANCHome",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const gravida = ref("");
    const cardsData = [
      { title: "Symptoms and Follow Up", path: "/symptomsFollowUp", icon: clipboardOutline, isSaved: false },
      { title: "Physical Examination", path: "/physicalExamination", icon: bodyOutline, isSaved: false },
      { title: "Lab Tests and Imaging", path: "/labTests", icon: flask, isSaved: false },
      { title: "Diagnosis and Treatment", path: "/ANCDiagnosisTreatment", icon: medkit, isSaved: false },
      { title: "Counselling", path: "/counselling", icon: chatbubbles, isSaved: false }
    ];
    const filteredCardsData = computed(() => {
      return gravida.value ? cardsData.filter((card) => card.title !== "Profile") : cardsData;
    });
    const navigateTo = (path) => {
      router.push({ path });
    };
    const nextAppointment = async () => {
      await createModal(NextAppointmentModal, { class: "medium-modal" });
    };
    const referralModal = async () => {
      await createModal(_sfc_main$2, { class: "medium-modal" });
    };
    const pregnancyOutcomeModal = async () => {
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
                    onClick: _cache[0] || (_cache[0] = ($event) => navigateTo("/patientProfile"))
                  }, null, 8, ["icon"]),
                  createBaseVNode("div", null, [
                    createVNode(DynamicButton, {
                      name: "Schedule appointment",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(calendar),
                      onClick: nextAppointment,
                      class: "sub-button"
                    }, null, 8, ["icon"]),
                    createVNode(DynamicButton, {
                      name: "Referral",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(paperPlaneOutline),
                      onClick: referralModal,
                      class: "sub-button"
                    }, null, 8, ["icon"]),
                    createVNode(DynamicButton, {
                      name: "Pregnancy outcome",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(checkmarkDoneOutline),
                      onClick: pregnancyOutcomeModal,
                      class: "sub-button"
                    }, null, 8, ["icon"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(filteredCardsData.value, (card, index) => {
                    return openBlock(), createBlock(DashboardCards, {
                      key: index,
                      icon: card.icon,
                      title: card.title,
                      isSaved: card.isSaved,
                      onClick: ($event) => !card.isSaved && navigateTo(card.path)
                    }, null, 8, ["icon", "title", "isSaved", "onClick"]);
                  }), 128))
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

const ANCHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e98621d5"]]);

export { ANCHome as default };
