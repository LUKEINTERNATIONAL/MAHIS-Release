import { s as defineComponent, bF as IonModal, a7 as IonLabel, aq as IonItem, aI as IonAccordionGroup, aH as IonAccordion, ba as IonCardTitle, cD as IonCardSubtitle, bb as IonCardHeader, bd as IonCardContent, bK as IonCard, N as IonButton, aD as IonToolbar, aE as IonTitle, bu as IonPage, cu as IonMenuButton, I as IonHeader, aG as IonContent, eu as list, da as grid, ev as arrowForwardCircle, bc as checkmark, bX as chevronBackOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, a4 as normalizeClass } from './vendor-CCA5uLDN.js';
import { t as toastWarning, G as toastSuccess, F as DynamicButton, a3 as ToolbarSearch, T as Toolbar, S as Service, o as createModal, i as useEnrollementStore, bb as useDiagnosisStore, bm as useInvestigationStore, b1 as useVitalsStore, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-CFJWTLPI.js';
import { D as DemographicBar } from './DemographicBar-B_RTQ9Zp.js';
import { S as SaveProgressModal } from './SaveProgressModal-DBj28vxF.js';
import { m as mapState } from './pinia-D-2CL6iz.js';
import { S as Stepper } from './Stepper-Dk15Mmmx.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-DBEuAucQ.js';
import { F as FamilyHistoryNCDNumber, S as SubstanceDiagnosis, P as PatientHistory } from './NCDNumber-BOepunR6.js';
import { u as useConfigurationStore } from './BasicCard-DNo-Njkn.js';
import { c as formatRadioButtonData, b as formatCheckBoxData } from './formatServerData-KGTEdR-C.js';

class Diagnosis {
  async onSubmit(patientID, providerID, diagnosisData) {
    const diagnosisService = new PatientDiagnosisService(patientID, providerID);
    const encounter = await diagnosisService.createEncounter();
    if (!encounter) return toastWarning("Unable to create diagnosis encounter");
    const saveDiagnosis = await diagnosisService.saveObservationList(diagnosisData);
    if (!saveDiagnosis) return toastWarning("Unable to create diagnosis !");
    toastSuccess("Diagnosis has been created");
  }
}

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
    SubstanceDiagnosis,
    FamilyHistoryNCDNumber,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      demographic: true,
      currentStep: "",
      scanner: false,
      steps: "",
      isOpen: false,
      iconListStatus: "active_icon",
      iconGridStatus: "inactive_icon"
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useVitalsStore, ["vitals"]),
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDiagnosisStore, ["diagnosis"]),
    ...mapState(useConfigurationStore, ["enrollmentDisplayType"]),
    ...mapState(useEnrollementStore, ["NCDNumber", "enrollmentDiagnosis", "substance", "patientHistoryHIV", "patientHistory"])
  },
  async mounted() {
    this.setDisplayType(this.enrollmentDisplayType);
  },
  setup() {
    return { chevronBackOutline, checkmark, arrowForwardCircle, grid, list };
  },
  methods: {
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
      this.$router.push("/opd/consultation-plan");
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
        this.currentStep = "Substance & Diagnosis";
        this.steps = ["Substance & Diagnosis", "Patient History", "Family History and NCDNumber"];
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
    async buildEnrollmentData() {
      return [
        ...await formatRadioButtonData(this.patientHistoryHIV),
        ...await formatRadioButtonData(this.substance),
        ...await formatRadioButtonData(this.patientHistory),
        ...await formatCheckBoxData(this.enrollmentDiagnosis),
        ...await formatCheckBoxData(this.patientHistory),
        ...await formatCheckBoxData(this.patientHistoryHIV)
      ];
    },
    async saveEnrollment() {
      const data = await this.buildEnrollmentData();
      if (data.length > 0) {
        const userID = Service.getUserID();
        const diagnosisInstance = new Diagnosis();
        diagnosisInstance.onSubmit(this.patient.patientID, userID, data);
      }
    }
  }
});

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "icon_div" };
const _hoisted_3 = { class: "footer2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_SubstanceDiagnosis = resolveComponent("SubstanceDiagnosis");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "title" }, [
              createBaseVNode("div", { class: "demographics_title" }, "Enrollment")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_ion_icon, {
                class: normalizeClass(_ctx.iconListStatus),
                icon: _ctx.list,
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setDisplayType("list"))
              }, null, 8, ["class", "icon"]),
              createVNode(_component_ion_icon, {
                class: normalizeClass(_ctx.iconGridStatus),
                style: { "font-size": "21px", "margin-top": "1.5px" },
                icon: _ctx.grid,
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setDisplayType("grid"))
              }, null, 8, ["class", "icon"])
            ])
          ]),
          createBaseVNode("div", null, [
            createBaseVNode("div", null, [
              createVNode(_component_SubstanceDiagnosis)
            ])
          ])
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_DynamicButton, {
          name: "Save",
          iconSlot: "end",
          icon: _ctx.iconsContent.saveWhite,
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.saveData())
        }, null, 8, ["icon"])
      ])
    ]),
    _: 1
  });
}
const Enrollment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-08fe7563"]]);

export { Enrollment as default };
