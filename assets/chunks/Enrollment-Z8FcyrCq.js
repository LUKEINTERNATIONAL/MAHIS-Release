import { q as defineComponent, ae as IonCheckbox, ay as IonToolbar, az as IonTitle, aA as IonMenu, am as IonList, an as IonItem, I as IonHeader, H as IonContent, v as resolveComponent, O as createBlock, y as openBlock, N as IonButton, L as IonIcon, aw as IonCol, ds as IonImg, af as IonRow, e0 as IonAvatar, a7 as IonLabel, K as modalController, x as createElementBlock, G as createCommentVNode, z as createVNode, B as createBaseVNode, A as withCtx, a5 as createTextVNode, J as Fragment, bC as IonModal, aC as IonAccordionGroup, aB as IonAccordion, b4 as IonCardTitle, cB as IonCardSubtitle, b5 as IonCardHeader, b7 as IonCardContent, bH as IonCard, bq as IonPage, cs as IonMenuButton, es as list, d8 as grid, et as arrowForwardCircle, b6 as checkmark, bV as chevronBackOutline, a4 as normalizeClass } from './vendor-Cy_N32Zh.js';
import { aT as modifyCheckboxInputField, bL as getRadioSelectedValue, a1 as modifyFieldValue, i as useEnrollementStore, o as createModal, n as icons, _ as _export_sfc, F as DynamicButton, a3 as ToolbarSearch, T as Toolbar, K as ObservationService, b as EncounterTypeId, J as savePatientRecord, a2 as getFieldValue, t as toastWarning, y as StandardValidations, aa as GlobalPropertyService, Y as IdentifierService, P as PatientService, bf as resetNCDPatientData, S as Service, bM as resetPatientData, e as useGeneralStore, bc as useDiagnosisStore, bb as useInvestigationStore, b1 as useVitalsStore, u as useDemographicsStore, f as useStatusStore } from '../index-B2p2mVqz.js';
import { D as DemographicBar } from './DemographicBar-ChySBBij.js';
import { S as SaveProgressModal } from './SaveProgressModal-BX3Nlpv8.js';
import { m as mapState } from './pinia-Bqc2Rgok.js';
import { S as Stepper } from './Stepper-DG32i0dE.js';
import { F as FamilyHistoryNCDNumber, S as SubstanceDiagnosis, P as PatientHistory } from './NCDNumber-DoOcLMIe.js';
import { D as DispositionModal } from './OutcomeModal-ZrwSnfD9.js';
import { B as BasicForm } from './BasicForm-CuqSYSue.js';
import { B as BasicCard, u as useConfigurationStore } from './BasicCard-VyQzpsvM.js';
import { _ as _sfc_main$7 } from './RiskAssessment.vue_vue_type_script_setup_true_lang-BBIhWrF-.js';
import { b as formatCheckBoxData, c as formatRadioButtonData } from './formatServerData-vTu6TxbF.js';

const _sfc_main$6 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["patientHistoryHIV"])
  },
  watch: {
    patientHistoryHIV: {
      handler() {
        this.controllFields();
        this.buildCards();
      },
      deep: true
    }
  },
  mounted() {
    this.updateEnrollmentStores();
    this.buildCards();
  },
  methods: {
    buildCards() {
      const enrollment = useEnrollementStore();
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "HIV history  ",
            content: this.patientHistoryHIV,
            initialData: enrollment.getInitialPatientHistoryHIV()
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    updateEnrollmentStores() {
      const enrollmentStore = useEnrollementStore();
      enrollmentStore.setPatientHistoryHIV(this.patientHistoryHIV);
    },
    controllFields() {
      if (getRadioSelectedValue(this.patientHistoryHIV, "HIV") == "R") {
        modifyFieldValue(this.patientHistoryHIV, "ART_start_date", "displayNone", false);
      } else {
        modifyFieldValue(this.patientHistoryHIV, "ART_start_date", "displayNone", true);
      }
    },
    async handleInputData(event) {
      console.log(event.al);
      if (event.al) {
        if (event.value.detail.checked) modifyCheckboxInputField(this.patientHistoryHIV, event.al.name, "displayNone", false);
        else modifyCheckboxInputField(this.patientHistoryHIV, event.al.name, "displayNone", true);
      }
    }
  }
});

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, {
    content: _ctx.cardData,
    "onUpdate:inputValue": _ctx.handleInputData
  }, null, 8, ["content", "onUpdate:inputValue"]);
}
const PatientHistoryHIV = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-965a0906"]]);

const _sfc_main$5 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["familyHistory"])
  },
  watch: {
    familyHistory: {
      handler() {
        this.buildCards();
      },
      deep: true
    }
  },
  async mounted() {
    this.buildCards();
  },
  methods: {
    buildCards() {
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "Family history",
            content: this.familyHistory
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    updateEnrollmentStores() {
      const enrollmentStore = useEnrollementStore();
      enrollmentStore.setFamilyHistory(this.familyHistory);
    },
    testF(data) {
      console.log(data);
    }
  }
});

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, { content: _ctx.cardData }, null, 8, ["content"]);
}
const FamilyHistory = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-4c6d7db7"]]);

const _sfc_main$4 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["traditionalMedicine"])
  },
  watch: {
    traditionalMedicine: {
      handler() {
        this.buildCards();
      },
      deep: true
    }
  },
  mounted() {
    this.updateEnrollmentStores();
    this.buildCards();
  },
  methods: {
    buildCards() {
      const enrollment = useEnrollementStore();
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "Traditional Medicine",
            content: this.traditionalMedicine,
            initialData: enrollment.getInitialTraditionalMedicine()
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    updateEnrollmentStores() {
      const enrollmentStore = useEnrollementStore();
      enrollmentStore.setTraditionalMedicine(this.traditionalMedicine);
    },
    async handleInputData(event) {
      console.log(event.al);
      if (event.al) {
        if (event.value.detail.checked) modifyCheckboxInputField(this.traditionalMedicine, event.al.name, "displayNone", false);
        else modifyCheckboxInputField(this.traditionalMedicine, event.al.name, "displayNone", true);
      }
    }
  }
});

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, {
    content: _ctx.cardData,
    "onUpdate:inputValue": _ctx.handleInputData
  }, null, 8, ["content", "onUpdate:inputValue"]);
}
const PatientHistoryTraditionalMedicine = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-efb5c045"]]);

const _sfc_main$3 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["patientTB"])
  },
  watch: {
    patientTB: {
      handler() {
        this.buildCards();
      },
      deep: true
    }
  },
  mounted() {
    this.updateEnrollmentStores();
    this.buildCards();
  },
  methods: {
    buildCards() {
      const enrollment = useEnrollementStore();
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "TB History",
            content: this.patientTB,
            initialData: enrollment.getInitialPatientTB()
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    updateEnrollmentStores() {
      const enrollmentStore = useEnrollementStore();
      enrollmentStore.setPatientTB(this.patientTB);
    },
    async handleInputData(event) {
      console.log(event.al);
      if (event.al) {
        if (event.value.detail.checked) modifyCheckboxInputField(this.patientTB, event.al.name, "displayNone", false);
        else modifyCheckboxInputField(this.patientTB, event.al.name, "displayNone", true);
      }
    }
  }
});

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, {
    content: _ctx.cardData,
    "onUpdate:inputValue": _ctx.handleInputData
  }, null, 8, ["content", "onUpdate:inputValue"]);
}
const PatientHistoryTB = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-b58010a4"]]);

const _sfc_main$2 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["patientType"])
  },
  watch: {
    patientType: {
      handler() {
        this.buildCards();
      },
      deep: true
    }
  },
  async mounted() {
    this.buildCards();
  },
  methods: {
    buildCards() {
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "",
            content: this.patientType
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    testF(data) {
      console.log(data);
    }
  }
});

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, { content: _ctx.cardData }, null, 8, ["content"]);
}
const PatientType = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-b8beb3da"]]);

const _sfc_main$1 = defineComponent({
  components: {
    IonLabel,
    IonAvatar,
    IonRow,
    IonImg,
    IonCol,
    IonList,
    IonItem,
    IonIcon,
    IonButton,
    DynamicButton
  },
  data: () => ({
    selectedResult: {},
    iconsContent: icons,
    isAnyAccordionOpen: true,
    isLoading: false
  }),
  methods: {
    dismiss(dismiss) {
      modalController.dismiss(dismiss);
    }
  }
});

const _hoisted_1$1 = {
  key: 0,
  class: "spinner-overlay"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_center = resolveComponent("center");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      createVNode(_component_ion_spinner, { name: "bubbles" }),
      _cache[3] || (_cache[3] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
    ])) : createCommentVNode("", true),
    createVNode(_component_ion_header, { style: { "display": "flex", "justify-content": "space-between" } }, {
      default: withCtx(() => [
        createVNode(_component_ion_title, { class: "modalTitle" }, {
          default: withCtx(() => [..._cache[4] || (_cache[4] = [
            createTextVNode("Enrollment", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_ion_icon, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss("dismiss")),
          style: { "padding-top": "10px", "padding-right": "10px" },
          icon: _ctx.iconsContent.cancel
        }, null, 8, ["icon"])
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding",
      style: { "--background": "#fff" }
    }, {
      default: withCtx(() => [
        createVNode(_component_center, null, {
          default: withCtx(() => [..._cache[5] || (_cache[5] = [
            createBaseVNode("h3", { class: "ion-padding" }, "Do you want to enroll this patient in NCD Program?", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, null, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_DynamicButton, {
                  color: "danger",
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.dismiss("dismiss")),
                  name: "No",
                  fill: "solid",
                  style: { "float": "right", "margin-right": "2%", "width": "100px" }
                }),
                createVNode(_component_DynamicButton, {
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.dismiss("Yes")),
                  name: "Yes",
                  fill: "solid",
                  style: { "float": "right", "margin-right": "2%", "width": "100px" }
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
const ConfirmNCDEnrolment = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);

const _sfc_main = defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    DemographicBar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonModal,
    Stepper,
    PatientHistory,
    PatientHistoryHIV,
    EnrollmentDiagnosis: SubstanceDiagnosis,
    Substance: _sfc_main$7,
    NCDNumber: FamilyHistoryNCDNumber,
    FamilyHistory,
    PatientHistoryTraditionalMedicine,
    PatientHistoryTB,
    PatientType,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      demographic: true,
      currentStep: "NCD Number, Patient Type & Family History",
      scanner: false,
      steps: "",
      isOpen: false,
      iconListStatus: "active_icon",
      iconGridStatus: "inactive_icon"
    };
  },
  watch: {
    $route: {
      async handler(route) {
        await resetPatientData();
        if (route.name == "NCDEnrollment") await this.checkEnrollment();
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useStatusStore, ["apiStatus"]),
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useVitalsStore, ["vitals"]),
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDiagnosisStore, ["diagnosis"]),
    ...mapState(useConfigurationStore, ["enrollmentDisplayType"]),
    ...mapState(useGeneralStore, ["NCDActivities"]),
    ...mapState(useEnrollementStore, [
      "NCDNumber",
      "enrollmentDiagnosis",
      "substance",
      "patientHistoryHIV",
      "patientHistory",
      "patientType",
      "familyHistory",
      "traditionalMedicine",
      "patientTB"
    ])
  },
  async mounted() {
    await resetPatientData();
    await this.checkEnrollment();
    this.setDisplayType(this.enrollmentDisplayType);
  },
  setup() {
    return { chevronBackOutline, checkmark, arrowForwardCircle, grid, list };
  },
  methods: {
    async checkEnrollment() {
      const response = await createModal(ConfirmNCDEnrolment, { class: "small-confirm-modal " });
      if (response != "Yes") this.nav("/consultationPlan");
    },
    setCurrentStep(name) {
      this.currentStep = name;
    },
    nextStep() {
      const currentIndex = this.steps.indexOf(this.currentStep);
      if (currentIndex < this.steps.length - 1) {
        this.currentStep = this.steps[currentIndex + 1];
      }
    },
    previousStep() {
      const currentIndex = this.steps.indexOf(this.currentStep);
      if (currentIndex > 0) {
        this.currentStep = this.steps[currentIndex - 1];
      }
    },
    async saveData() {
      await this.saveNcdNumber();
    },
    async saveNcdNumber() {
      const roleData = JSON.parse(localStorage.getItem("userRoles"));
      const roles = roleData ? roleData : [];
      const NCDNumber2 = getFieldValue(this.NCDNumber, "NCDNumber", "value");
      if (this.apiStatus) {
        if (!NCDNumber2) {
          toastWarning("NCD number is blank", 5e3);
          return;
        }
        if (NCDNumber2 && StandardValidations.isNumber(NCDNumber2) == null) {
          localStorage.getItem("locationID");
          const sitePrefix = await GlobalPropertyService.get(`site_prefix`);
          const formattedNCDNumber = sitePrefix + "-NCD-" + NCDNumber2;
          const exists = await IdentifierService.ncdNumberExists(formattedNCDNumber);
          if (exists) toastWarning("NCD number already exists", 5e3);
          else {
            const patient = new PatientService();
            this.patient.NcdID = formattedNCDNumber;
            patient.createNcdNumber(formattedNCDNumber);
            await this.saveEnrollment();
            await resetNCDPatientData();
            let url = "";
            if (roles.some(
              (role) => role.role === "General Registration Clerk" || roles.some(
                (role2) => role2.role === "Vitals Clerk" || roles.some((role3) => role3.role === "Registration Clerk")
              )
            ) && Service.getProgramID() == 32) {
              url = "home";
            } else if (this.NCDActivities.length == 0) {
              url = "home";
            } else {
              url = "consultationPlan";
            }
            this.$router.push(url);
          }
        } else {
          toastWarning("Invalid NCD number", 5e3);
        }
      } else {
        this.patient.NcdID = "-";
        await this.saveEnrollment();
        let url = "";
        if (roles.some(
          (role) => role.role === "General Registration Clerk" || roles.some((role2) => role2.role === "Vitals Clerk" || roles.some((role3) => role3.role === "Registration Clerk"))
        ) && Service.getProgramID() == 32) {
          url = "home";
        } else if (this.NCDActivities.length == 0) {
          url = "home";
        } else {
          url = "consultationPlan";
        }
        this.$router.push(url);
      }
    },
    openModal() {
      createModal(SaveProgressModal);
    },
    nav(url) {
      this.$router.push(url);
    },
    setDisplayType(type) {
      if (type == "grid") {
        this.currentStep = "Enrollment";
      } else {
        this.currentStep = "NCD Number, Patient Type & Family History";
        this.steps = ["NCD Number, Patient Type & Family History", "Patient History", "HIV & TB History & Diagnosis"];
      }
      const demographicsStore = useConfigurationStore();
      demographicsStore.setEnrollmentDisplayType(type);
      this.setIconClass();
    },
    setIconClass() {
      this.iconListStatus = "inactive_icon";
      this.iconGridStatus = "inactive_icon";
      if (this.enrollmentDisplayType == "list") {
        this.iconListStatus = "active_icon";
      } else if (this.enrollmentDisplayType == "grid") {
        this.iconGridStatus = "active_icon";
      }
    },
    async saveEnrollment() {
      const formattedData = await formatCheckBoxData(this.enrollmentDiagnosis);
      const familyMedicalHistory = await formatRadioButtonData(this.familyHistory);
      const patientRegistration = await formatRadioButtonData(this.patientType);
      const complications = await formatCheckBoxData(this.patientHistory);
      const hivStatusAtEnrollment = await formatRadioButtonData(this.patientHistoryHIV);
      const tbReception = await formatCheckBoxData(this.patientTB);
      const medicalHistory = await formatCheckBoxData(this.traditionalMedicine);
      await ObservationService.addObsToEncounterPatient(familyMedicalHistory, EncounterTypeId.FAMILY_MEDICAL_HISTORY);
      await ObservationService.addObsToEncounterPatient(patientRegistration, EncounterTypeId.PATIENT_REGISTRATION);
      await ObservationService.addObsToEncounterPatient(complications, EncounterTypeId.COMPLICATIONS);
      await ObservationService.addObsToEncounterPatient(hivStatusAtEnrollment, EncounterTypeId.HIV_STATUS_AT_ENROLLMENT);
      await ObservationService.addObsToEncounterPatient(tbReception, EncounterTypeId.TB_RECEPTION);
      await ObservationService.addObsToEncounterPatient(medicalHistory, EncounterTypeId.MEDICAL_HISTORY);
      const patientData = await ObservationService.addObsToEncounterPatient(formattedData, EncounterTypeId.DIAGNOSIS);
      await savePatientRecord(patientData);
    }
  }
});

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "icon_div" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { style: { "display": "flex", "justify-content": "center" } };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = {
  key: 0,
  class: "footer2"
};
const _hoisted_10 = { class: "footer position_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_NCDNumber = resolveComponent("NCDNumber");
  const _component_PatientType = resolveComponent("PatientType");
  const _component_FamilyHistory = resolveComponent("FamilyHistory");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_PatientHistory = resolveComponent("PatientHistory");
  const _component_PatientHistoryTraditionalMedicine = resolveComponent("PatientHistoryTraditionalMedicine");
  const _component_PatientHistoryHIV = resolveComponent("PatientHistoryHIV");
  const _component_PatientHistoryTB = resolveComponent("PatientHistoryTB");
  const _component_EnrollmentDiagnosis = resolveComponent("EnrollmentDiagnosis");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_breadcrumb = resolveComponent("ion-breadcrumb");
  const _component_ion_breadcrumbs = resolveComponent("ion-breadcrumbs");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", {
              style: { "display": "flex", "align-items": "center" },
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.nav("patientProfile"))
            }, [
              createVNode(_component_DynamicButton, {
                fill: "clear",
                name: "Back to profile",
                iconSlot: "start",
                icon: _ctx.iconsContent.arrowLeft
              }, null, 8, ["icon"])
            ]),
            _cache[9] || (_cache[9] = createBaseVNode("div", { class: "title" }, [
              createBaseVNode("div", { class: "demographics_title" }, "Enrollment")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_ion_icon, {
                class: normalizeClass(_ctx.iconListStatus),
                icon: _ctx.list,
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setDisplayType("list"))
              }, null, 8, ["class", "icon"]),
              createVNode(_component_ion_icon, {
                class: normalizeClass(_ctx.iconGridStatus),
                style: { "font-size": "21px", "margin-top": "1.5px" },
                icon: _ctx.grid,
                onClick: _cache[2] || (_cache[2] = ($event) => _ctx.setDisplayType("grid"))
              }, null, 8, ["class", "icon"])
            ])
          ]),
          _ctx.enrollmentDisplayType == "grid" ? (openBlock(), createElementBlock("div", _hoisted_3, [
            _ctx.enrollmentDisplayType == "grid" ? (openBlock(), createBlock(_component_ion_row, {
              key: 0,
              class: "card_row"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_col, {
                  "size-sm": "12",
                  "size-md": "12",
                  "size-lg": "6",
                  "size-xl": "4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NCDNumber),
                    createVNode(_component_PatientType),
                    createVNode(_component_FamilyHistory)
                  ]),
                  _: 1
                }),
                createVNode(_component_ion_col, {
                  "size-sm": "12",
                  "size-md": "12",
                  "size-lg": "6",
                  "size-xl": "4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PatientHistory),
                    createVNode(_component_PatientHistoryTraditionalMedicine)
                  ]),
                  _: 1
                }),
                createVNode(_component_ion_col, {
                  "size-sm": "12",
                  "size-md": "12",
                  "size-lg": "6",
                  "size-xl": "4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PatientHistoryHIV),
                    createVNode(_component_PatientHistoryTB),
                    createVNode(_component_EnrollmentDiagnosis)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          _ctx.enrollmentDisplayType == "list" ? (openBlock(), createElementBlock("div", _hoisted_4, [
            _ctx.currentStep == "NCD Number, Patient Type & Family History" ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createVNode(_component_NCDNumber),
              createVNode(_component_PatientType),
              createVNode(_component_FamilyHistory)
            ])) : createCommentVNode("", true),
            _ctx.currentStep == "Patient History" ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_PatientHistory)
              ])
            ])) : createCommentVNode("", true),
            _ctx.currentStep == "HIV & TB History & Diagnosis" ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createVNode(_component_PatientHistoryHIV),
              createVNode(_component_EnrollmentDiagnosis)
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      _ctx.enrollmentDisplayType == "grid" ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createVNode(_component_DynamicButton, {
          name: "Save",
          iconSlot: "end",
          icon: _ctx.iconsContent.saveWhite,
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.saveData())
        }, null, 8, ["icon"])
      ])) : createCommentVNode("", true),
      _ctx.enrollmentDisplayType == "list" ? (openBlock(), createBlock(_component_ion_footer, { key: 1 }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_10, [
            _ctx.currentStep == "NCD Number, Patient Type & Family History" ? (openBlock(), createBlock(_component_DynamicButton, {
              key: 0,
              name: "Cancel",
              color: "danger",
              onClick: _cache[4] || (_cache[4] = ($event) => _ctx.nav("/patientProfile"))
            })) : (openBlock(), createBlock(_component_DynamicButton, {
              key: 1,
              name: "Previous",
              icon: _ctx.iconsContent.arrowLeftWhite,
              color: "medium",
              onClick: _ctx.previousStep
            }, null, 8, ["icon", "onClick"])),
            createVNode(_component_ion_breadcrumbs, { class: "breadcrumbs displayNoneMobile" }, {
              default: withCtx(() => [
                createVNode(_component_ion_breadcrumb, {
                  onClick: _cache[5] || (_cache[5] = ($event) => _ctx.setCurrentStep("NCD Number, Patient Type & Family History")),
                  class: normalizeClass({ active: _ctx.currentStep === "NCD Number, Patient Type & Family History" })
                }, {
                  default: withCtx(() => [
                    _cache[10] || (_cache[10] = createBaseVNode("span", { class: "breadcrumb-text" }, "NCD Number, Patient Type & Family History", -1)),
                    createVNode(_component_ion_icon, {
                      slot: "separator",
                      size: "large",
                      icon: _ctx.iconsContent.arrowRight
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_ion_breadcrumb, {
                  onClick: _cache[6] || (_cache[6] = ($event) => _ctx.setCurrentStep("Patient History")),
                  class: normalizeClass({ active: _ctx.currentStep === "Patient History" })
                }, {
                  default: withCtx(() => [
                    _cache[11] || (_cache[11] = createBaseVNode("span", { class: "breadcrumb-text" }, "Patient History", -1)),
                    createVNode(_component_ion_icon, {
                      slot: "separator",
                      size: "large",
                      icon: _ctx.iconsContent.arrowRight
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_ion_breadcrumb, {
                  onClick: _cache[7] || (_cache[7] = ($event) => _ctx.setCurrentStep("HIV & TB History & Diagnosis")),
                  class: normalizeClass({ active: _ctx.currentStep === "HIV & TB History & Diagnosis" })
                }, {
                  default: withCtx(() => [
                    _cache[12] || (_cache[12] = createBaseVNode("span", { class: "breadcrumb-text" }, "HIV & TB History & Diagnosis", -1)),
                    createVNode(_component_ion_icon, {
                      slot: "separator",
                      size: "large",
                      icon: _ctx.iconsContent.arrowRight
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            }),
            _ctx.currentStep == "HIV & TB History & Diagnosis" ? (openBlock(), createBlock(_component_DynamicButton, {
              key: 2,
              name: "Save",
              iconSlot: "end",
              icon: _ctx.iconsContent.saveWhite,
              onClick: _cache[8] || (_cache[8] = ($event) => _ctx.saveData())
            }, null, 8, ["icon"])) : (openBlock(), createBlock(_component_DynamicButton, {
              key: 3,
              name: "Next",
              iconSlot: "end",
              icon: _ctx.iconsContent.arrowRightWhite,
              onClick: _ctx.nextStep
            }, null, 8, ["icon", "onClick"]))
          ])
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const Enrollment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cc9e0828"]]);

export { Enrollment as default };
