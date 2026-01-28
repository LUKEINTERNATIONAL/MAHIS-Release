import { s as defineComponent, bF as IonModal, a7 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cE as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bK as IonCard, N as IonButton, aC as IonToolbar, aD as IonTitle, bt as IonPage, cv as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bX as chevronBackOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-BIA1Qh8a.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-BOgnu_0s.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-DJyJhMgX.js';
import { D as DemographicBar } from './DemographicBar-CJtl1XAb.js';
import { S as SaveProgressModal } from './SaveProgressModal-CiOp8jU_.js';
import { S as Stepper, r as useDischargeWomanStore } from './Stepper-DNH3f3n6.js';
import { m as mapState } from './pinia-BgytB2RM.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-D6VlrHlq.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-Bs7fTh6e.js';

class DischargeWomanService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "dischargeWoman",
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
          title: "Discharge woman",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "Discharge woman",
          component: "DischargeWoman",
          value: "1"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  watch: {},
  getFormatedData(data) {
    return data.map((item) => {
      return item?.data;
    });
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useDischargeWomanStore, ["dischargeWoman"])
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
      await this.saveDischargeWoman();
      this.$router.push("/home");
    },
    async saveDischargeWoman() {
      if (this.dischargeWoman.length > 0) {
        const userID = Service.getUserID();
        const dischargeWoman = new DischargeWomanService(this.patient.patientID, userID);
        const encounter = await dischargeWoman.createEncounter();
        if (!encounter) return toastWarning("Unable to create discharge woman encounter");
        const patientStatus = await dischargeWoman.saveObservationList(await this.buildDischargeWoman());
        if (!patientStatus) return toastWarning("Unable to create discharge woman details!");
        toastSuccess("Discharge woman details have been created");
      }
      console.log(await this.buildDischargeWoman());
    },
    async buildDischargeWoman() {
      return [
        ...await formatCheckBoxData(this.dischargeWoman),
        ...await formatRadioButtonData(this.dischargeWoman),
        ...await formatInputFiledData(this.dischargeWoman)
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
            stepperTitle: "Postnatal Ward stay",
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
const dischargeWoman = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { dischargeWoman as default };
