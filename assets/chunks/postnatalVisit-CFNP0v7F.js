import { v as defineComponent, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bY as chevronBackOutline, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode } from './vendor-CJ5LqAxe.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-gZ0yd2ON.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-DihysMBN.js';
import { D as DemographicBar } from './DemographicBar-D-T1-sj1.js';
import { S as SaveProgressModal } from './SaveProgressModal-Be0vhiz2.js';
import { S as Stepper, C as useVisitForBabyStore, D as useVisitForMotherStore } from './Stepper-DfjRDAax.js';
import { m as mapState } from './pinia-BmV_6_tV.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-peDQBuey.js';
import { a as _sfc_main$1 } from './Investigations-BFmvUs2t.js';

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
