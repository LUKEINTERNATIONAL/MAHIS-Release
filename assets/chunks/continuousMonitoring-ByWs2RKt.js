import { s as defineComponent, bF as IonModal, a7 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cE as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bK as IonCard, N as IonButton, aC as IonToolbar, aD as IonTitle, bt as IonPage, cv as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bX as chevronBackOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-BIA1Qh8a.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-Dhn-D8Ri.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-D4v712uu.js';
import { D as DemographicBar } from './DemographicBar-Bq5BjmG8.js';
import { S as SaveProgressModal } from './SaveProgressModal-Bcx6ydZE.js';
import { S as Stepper, n as useOtherExamsStore, o as useLabourVitalsStore } from './Stepper-ZSrDepdq.js';
import { m as mapState } from './pinia-BgytB2RM.js';
import { c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-ZpBr7uah.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-prAnAArH.js';

class ContinuousMonitoringVitalsService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 6, providerID);
  }
}
class OtherExamsService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 30, providerID);
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
        {
          title: "Vitals",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "Fetal condition",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 2,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "Vitals Signs",
          component: "LabourVitals",
          value: "1"
        },
        {
          title: "Fetal condition",
          component: "OtherExams",
          value: "2"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  watch: {},
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useLabourVitalsStore, ["vitals"]),
    ...mapState(useOtherExamsStore, ["otherExams", "urine"])
  },
  mounted() {
    this.markWizard();
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
      this.saveVitals();
      this.saveOtherExams();
      toastSuccess("Continuous monitoring data saved successfully");
      await resetPatientData();
    },
    async saveVitals() {
      if (this.vitals.length > 0) {
        const userID = Service.getUserID();
        const Monitoring = new ContinuousMonitoringVitalsService(this.patient.patientID, userID);
        const encounter = await Monitoring.createEncounter();
        if (!encounter) return toastWarning("Unable to create Vitals encounter");
        const patientStatus = await Monitoring.saveObservationList(await this.buildVitals());
        if (!patientStatus) return toastWarning("Unable to create Vitals !");
        toastSuccess("Vitals  has been created");
      }
    },
    async saveOtherExams() {
      if (this.otherExams.length > 0) {
        const userID = Service.getUserID();
        const otherExams = new OtherExamsService(this.patient.patientID, userID);
        const encounter = await otherExams.createEncounter();
        if (!encounter) return toastWarning("Unable to create Other Exams encounter");
        const patientStatus = await otherExams.saveObservationList(await this.buildOtherExams());
        if (!patientStatus) return toastWarning("Unable to create Other Exams !");
        toastSuccess("Other Exams  has been created");
      }
    },
    async buildVitals() {
      return [...await formatInputFiledData(this.vitals)];
    },
    async buildOtherExams() {
      return [
        ...await formatRadioButtonData(this.otherExams),
        ...await formatInputFiledData(this.otherExams),
        ...await formatRadioButtonData(this.urine),
        ...await formatInputFiledData(this.urine)
      ];
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
            stepperTitle: "Continuous monitoring",
            wizardData: _ctx.wizardData,
            onUpdateStatus: _ctx.markWizard,
            onFinishBtn: _cache[0] || (_cache[0] = ($event) => _ctx.saveData()),
            StepperData: _ctx.StepperData,
            backUrl: _ctx.userRoleSettings.url,
            backBtn: _ctx.userRoleSettings.btnName,
            getSaveFunction: _ctx.getSaveFunction
          }, null, 8, ["wizardData", "onUpdateStatus", "StepperData", "backUrl", "backBtn", "getSaveFunction"])
        ]),
        _: 1
      }),
      createVNode(_component_BasicFooter, {
        onFinishBtn: _cache[1] || (_cache[1] = ($event) => _ctx.saveData())
      })
    ]),
    _: 1
  });
}
const continuousMonitoring = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { continuousMonitoring as default };
