import { q as defineComponent, bC as IonModal, a7 as IonLabel, an as IonItem, aC as IonAccordionGroup, aB as IonAccordion, b4 as IonCardTitle, cB as IonCardSubtitle, b5 as IonCardHeader, b7 as IonCardContent, bH as IonCard, N as IonButton, ay as IonToolbar, az as IonTitle, bq as IonPage, cs as IonMenuButton, I as IonHeader, H as IonContent, b6 as checkmark, bV as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-Cy_N32Zh.js';
import { B as BasicFooter } from './BasicFooter-Dro6db4a.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-CZxb0S4T.js';
import { D as DemographicBar } from './DemographicBar-D9p8idra.js';
import { S as SaveProgressModal } from './SaveProgressModal-BLHlBtzE.js';
import { S as Stepper, N as usePNCEndStore } from './Stepper-D4Dp8cdu.js';
import { m as mapState } from './pinia-Bqc2Rgok.js';
import { c as formatRadioButtonData } from './formatServerData-ChUAtCR4.js';
import { b as _sfc_main$1 } from './NextAppointment-BkZAPRBn.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-dEJCGg7D.js';

class PNCEndService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "pncEnd",
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
          title: "End",
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
          title: "End PNC",
          component: "PNCEnd",
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
    ...mapState(usePNCEndStore, ["pncEnd"])
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
      await this.savePNCEnd();
      this.$router.push("home");
    },
    async savePNCEnd() {
      if (this.pncEnd.length > 0) {
        const userID = Service.getUserID();
        const pncEnd = new PNCEndService(this.patient.patientID, userID);
        const encounter = await pncEnd.createEncounter();
        if (!encounter) return toastWarning("Unable to create PNC end encounter");
        const patientStatus = await pncEnd.saveObservationList(await this.buildPNCEnd());
        if (!patientStatus) return toastWarning("Unable to create PNC program end details!");
        toastSuccess("End details for PNC program have been created");
      }
      console.log(await this.buildPNCEnd());
    },
    async buildPNCEnd() {
      return [...await formatRadioButtonData(this.pncEnd)];
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
            stepperTitle: "Postnatal end",
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
const pncEnd = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { pncEnd as default };
