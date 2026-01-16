import { q as defineComponent, bE as IonModal, a6 as IonLabel, an as IonItem, aF as IonAccordionGroup, aE as IonAccordion, b7 as IonCardTitle, cD as IonCardSubtitle, b8 as IonCardHeader, ba as IonCardContent, bJ as IonCard, M as IonButton, aA as IonToolbar, aB as IonTitle, bs as IonPage, cu as IonMenuButton, I as IonHeader, aD as IonContent, b9 as checkmark, bW as chevronBackOutline, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode } from './vendor-DUNDjU_C.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, G as toastSuccess, t as toastWarning, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-cEgpSt1H.js';
import { D as DemographicBar } from './DemographicBar-DpfntI-d.js';
import { S as SaveProgressModal } from './SaveProgressModal-fo7hTGLh.js';
import { S as Stepper, n as usePelvicAssessmentStore, o as usefirstVaginalExaminationStore, p as useLabourPhysicalExamStore, l as useLabourWomanBehaviourStore, q as useLabourQuickCheckStore } from './Stepper-CNz8LcLK.js';
import { m as mapState } from './pinia-CzgPmrQI.js';
import { f as formatInputFiledData, c as formatRadioButtonData, b as formatCheckBoxData } from './formatServerData-omr1VDVz.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-D607X8AN.js';
import { a as _sfc_main$1 } from './Investigations-02DwOdzn.js';

class LabourAssessmentService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

class QuickCheckInstance {
  async push(patientID, providerID, quickCheckData) {
    const quickCheckService = new LabourAssessmentService(patientID, providerID);
    await quickCheckService.createEncounter();
    await quickCheckService.saveObservationList(quickCheckData);
  }
}
class PhysicalExamInstance {
  async push(patientID, providerID, physicalExamData) {
    const physicalExamService = new LabourAssessmentService(patientID, providerID);
    await physicalExamService.createEncounter();
    await physicalExamService.saveObservationList(physicalExamData);
  }
}
class VaginalExamInstance {
  async push(patientID, providerID, vaginalExamData) {
    const vaginalExamService = new LabourAssessmentService(patientID, providerID);
    await vaginalExamService.createEncounter();
    await vaginalExamService.saveObservationList(vaginalExamData);
  }
}
class PelvicAssessmentInstance {
  async push(patientID, providerID, assessmentData) {
    const pelvicAssessmentService = new LabourAssessmentService(patientID, providerID);
    await pelvicAssessmentService.createEncounter();
    await pelvicAssessmentService.saveObservationList(assessmentData);
  }
}

const _sfc_main = defineComponent({
  name: "obstetricDetails",
  mixins: [_sfc_main$1, _sfc_main$2],
  components: {
    BasicFooter,
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
    Stepper
  },
  data() {
    return {
      wizardData: [
        // {
        //     title: "Labour Profile",
        //     class: "common_step",
        //     checked: "",
        //     icon: false,
        //     disabled: false,
        //     number: 1,
        //     last_step: "",
        // },
        {
          title: "Quick Check",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "Physical examination",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 2,
          last_step: ""
        },
        {
          title: "First vaginal assessment",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 3,
          last_step: ""
        },
        {
          title: "Pelvis assessment",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 4,
          last_step: "last_step"
        }
      ],
      StepperData: [
        // {
        //     title: "Labour Profile",
        //     component: "LabourWomanBehaviour",
        //     value: "1",
        // },
        {
          title: "Quick check",
          component: "QuickCheck",
          value: "1"
        },
        {
          title: "Physical examination",
          component: "PhysicalExamination",
          value: "2"
        },
        {
          title: "First vaginal examination",
          component: "FirstVaginalExamination",
          value: "3"
        },
        {
          title: "Pelvic assessment",
          component: "PelvicAssessment",
          value: "4"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  watch: {
    medicalHistory(change) {
      console.log(change);
    }
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useLabourQuickCheckStore, ["pastProblems"]),
    ...mapState(useLabourWomanBehaviourStore, ["dailyCaffeineIntake"]),
    ...mapState(useLabourPhysicalExamStore, ["vitals"]),
    ...mapState(useLabourPhysicalExamStore, ["anaemia"]),
    ...mapState(useLabourPhysicalExamStore, ["otherphysicalExams"]),
    ...mapState(usefirstVaginalExaminationStore, ["firstVaginalExamination"]),
    ...mapState(usePelvicAssessmentStore, ["pelvicAssessment"])
  },
  // saveData() {
  //     const medicalConditions = [
  //         "Auto immune desease",
  //         "Asthma",
  //         "Diabetes",
  //         "Sickle cell",
  //         "Anaemia",
  //         "Thalassemia",
  //         "Gynaecological",
  //         "CCF",
  //         "RHD",
  //         "Gestational diabetes",
  //         "pre-existing type 1",
  //         "pre-existing type 2",
  //         "Epilepsy",
  //         "Hypertension",
  //         "Kidney",
  //         "TB",
  //         "Mental  illiness",
  //     ];
  // },
  mounted() {
  },
  setup() {
    return { chevronBackOutline, checkmark };
  },
  methods: {
    markWizard() {
    },
    getSaveFunction() {
    },
    deleteDisplayData(data) {
      return data.map((item) => {
        delete item?.display;
        return item?.data;
      });
    },
    async saveData() {
      this.saveQuickCheck();
      this.saveVaginalExamInstance();
      this.savePhysicalExamInstance();
      this.savePelvicAssessmentInstance();
      await resetPatientData();
      this.$router.push("labourHome");
    },
    async buildQuickCheck() {
      return [
        ...await formatInputFiledData(this.pastProblems),
        ...await formatRadioButtonData(this.pastProblems),
        ...await formatCheckBoxData(this.pastProblems)
      ];
    },
    async buildPhysicalExamination() {
      return [
        ...await formatInputFiledData(this.vitals),
        ...await formatRadioButtonData(this.vitals),
        ...await formatRadioButtonData(this.anaemia),
        ...await formatRadioButtonData(this.otherphysicalExams)
      ];
    },
    async buildFirstVaginalExamination() {
      return [...await formatInputFiledData(this.firstVaginalExamination), ...await formatRadioButtonData(this.firstVaginalExamination)];
    },
    async buildPelvicAssessment() {
      return [...await formatInputFiledData(this.pelvicAssessment), ...await formatRadioButtonData(this.pelvicAssessment)];
    },
    async saveQuickCheck() {
      const data = await this.buildQuickCheck();
      if (data.length > 0) {
        const userID = Service.getUserID();
        const quickCheckInstance = new QuickCheckInstance();
        quickCheckInstance.push(this.patient.patientID, userID, data);
        toastSuccess("Quick check data saved successfully");
      } else {
        toastWarning("Could not find concepts");
      }
    },
    async savePhysicalExamInstance() {
      const data = await this.buildPhysicalExamination();
      if (data.length > 0) {
        const userID = Service.getUserID();
        const physicalExamInstance = new PhysicalExamInstance();
        physicalExamInstance.push(this.patient.patientID, userID, data);
        toastSuccess("Physical examination data saved successfully");
      } else {
        toastWarning("Could not find concepts");
      }
    },
    async saveVaginalExamInstance() {
      const data = await this.buildFirstVaginalExamination();
      if (data.length > 0) {
        const userID = Service.getUserID();
        const vaginalExamInstance = new VaginalExamInstance();
        vaginalExamInstance.push(this.patient.patientID, userID, data);
        toastSuccess("First Vaginal Examination data saved successfully");
      } else {
        toastWarning("Could not find concepts");
      }
    },
    async savePelvicAssessmentInstance() {
      const data = await this.buildPelvicAssessment();
      if (data.length > 0) {
        const userID = Service.getUserID();
        const pelvicAssessmentInstance = new PelvicAssessmentInstance();
        pelvicAssessmentInstance.push(this.patient.patientID, userID, data);
        toastSuccess("Pelvic Assessment data saved successfully");
      } else {
        toastWarning("Could not find concepts");
      }
    },
    openModal() {
      createModal(SaveProgressModal);
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DemographicBar = resolveComponent("DemographicBar");
  const _component_Stepper = resolveComponent("Stepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_BasicFooter = resolveComponent("BasicFooter");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_DemographicBar),
          createVNode(_component_Stepper, {
            stepperTitle: "Labour assessment",
            wizardData: _ctx.wizardData,
            onUpdateStatus: _ctx.markWizard,
            StepperData: _ctx.StepperData,
            backUrl: _ctx.userRoleSettings.url,
            backBtn: _ctx.userRoleSettings.btnName,
            getSaveFunction: _ctx.getSaveFunction
          }, null, 8, ["wizardData", "onUpdateStatus", "StepperData", "backUrl", "backBtn", "getSaveFunction"])
        ]),
        _: 1
      }),
      createVNode(_component_BasicFooter, {
        onFinishBtn: _cache[0] || (_cache[0] = ($event) => _ctx.saveData())
      })
    ]),
    _: 1
  });
}
const labourAssessment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { labourAssessment as default };
