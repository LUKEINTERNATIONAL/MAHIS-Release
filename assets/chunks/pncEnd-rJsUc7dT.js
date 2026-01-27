import { s as defineComponent, bF as IonModal, a7 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cE as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bK as IonCard, N as IonButton, aC as IonToolbar, aD as IonTitle, bt as IonPage, cv as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bX as chevronBackOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-Wwszy5sF.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-JLnlw4ed.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-DTh6TpA9.js';
import { D as DemographicBar } from './DemographicBar-C8-VWGOQ.js';
import { S as SaveProgressModal } from './SaveProgressModal-D6pIr6MY.js';
import { S as Stepper, w as usePNCEndStore } from './Stepper-CpK_LOsc.js';
import { m as mapState } from './pinia-BYnbfcrK.js';
import { c as formatRadioButtonData } from './formatServerData-B6_MBT_Q.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-Dx0lN0z7.js';

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
      this.$router.push("/home");
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
