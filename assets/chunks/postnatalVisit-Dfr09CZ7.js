import { q as defineComponent, bE as IonModal, a6 as IonLabel, an as IonItem, aF as IonAccordionGroup, aE as IonAccordion, b7 as IonCardTitle, cD as IonCardSubtitle, b8 as IonCardHeader, ba as IonCardContent, bJ as IonCard, M as IonButton, aA as IonToolbar, aB as IonTitle, bs as IonPage, cu as IonMenuButton, I as IonHeader, aD as IonContent, b9 as checkmark, bW as chevronBackOutline, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode } from './vendor-wM1cIaYi.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-CNfplxBq.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-Cd3-tqLQ.js';
import { D as DemographicBar } from './DemographicBar-DWCGN7rU.js';
import { S as SaveProgressModal } from './SaveProgressModal-DYRuc0vx.js';
import { S as Stepper, G as useVisitForBabyStore, H as useVisitForMotherStore } from './Stepper-CFN4YN5I.js';
import { m as mapState } from './pinia-Czqxf__w.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-CfTbA9Vt.js';
import { a as _sfc_main$1 } from './Investigations-wy_ORxH_.js';

class PNCVisitService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "postnatalVisit",
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
          title: "PNC visit for mother",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "PNC visit for baby",
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
          title: "PNC visit for mother",
          component: "VisitForMother",
          value: "1"
        },
        {
          title: "PNC visit for baby",
          component: "VisitForBaby",
          value: "2"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useVisitForMotherStore, ["visitForMother"]),
    ...mapState(useVisitForBabyStore, ["visitForBaby"])
  },
  mounted() {
    this.markWizard();
  },
  watch: {},
  getFormatedData(data) {
    return data.map((item) => {
      return item?.data;
    });
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
      await this.savePNCVisit();
      this.$router.push("home");
    },
    async savePNCVisit() {
      if (this.visitForMother.length > 0 && this.visitForBaby.length > 0) {
        const userID = Service.getUserID();
        const pncVisit = new PNCVisitService(this.patient.patientID, userID);
        const encounter = await pncVisit.createEncounter();
        if (!encounter) return toastWarning("Unable to create PNC visit encounter");
        const patientStatus = await pncVisit.saveObservationList(await this.buildPNCVisit());
        if (!patientStatus) return toastWarning("Unable to create patient PNC visit details!");
        toastSuccess("PNC visit details for mother and baby have been created");
      }
      console.log(await this.buildPNCVisit());
    },
    async buildPNCVisit() {
      return [
        ...await formatCheckBoxData(this.visitForMother),
        ...await formatRadioButtonData(this.visitForMother),
        ...await formatInputFiledData(this.visitForMother),
        ...await formatCheckBoxData(this.visitForBaby),
        ...await formatRadioButtonData(this.visitForBaby),
        ...await formatInputFiledData(this.visitForBaby)
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
            stepperTitle: "Postnatal Visit",
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
const postnatalVisit = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { postnatalVisit as default };
