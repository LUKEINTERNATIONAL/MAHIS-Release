import { q as defineComponent, bC as IonModal, a7 as IonLabel, an as IonItem, aC as IonAccordionGroup, aB as IonAccordion, b4 as IonCardTitle, cB as IonCardSubtitle, b5 as IonCardHeader, b7 as IonCardContent, bH as IonCard, N as IonButton, ay as IonToolbar, az as IonTitle, bq as IonPage, cs as IonMenuButton, I as IonHeader, H as IonContent, b6 as checkmark, bV as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-Cy_N32Zh.js';
import { B as BasicFooter } from './BasicFooter-ChSd9D_n.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-B2p2mVqz.js';
import { D as DemographicBar } from './DemographicBar-COm4hee1.js';
import { S as SaveProgressModal } from './SaveProgressModal-BX3Nlpv8.js';
import { S as Stepper, M as useDischargeWomanStore } from './Stepper-DG32i0dE.js';
import { m as mapState } from './pinia-Bqc2Rgok.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-vTu6TxbF.js';
import { b as _sfc_main$1 } from './NextAppointment-DsXm4RNQ.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-Ck4MC7WF.js';

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
      this.$router.push("home");
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
