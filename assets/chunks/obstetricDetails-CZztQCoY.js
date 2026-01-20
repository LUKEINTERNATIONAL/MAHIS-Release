import { v as defineComponent, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bY as chevronBackOutline, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode } from './vendor-B4fW45I4.js';
import { a3 as ToolbarSearch, T as Toolbar, o as createModal, bM as resetPatientData, n as icons, _ as _export_sfc } from '../index-C9DqaTYI.js';
import { D as DemographicBar } from './DemographicBar-BM91eDdR.js';
import { S as SaveProgressModal } from './SaveProgressModal-DMIHwPHp.js';
import { S as Stepper } from './Stepper-5PYD_zod.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-DlcABVQI.js';
import { a as _sfc_main$1 } from './Investigations-bphX5D3V.js';

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
          title: "Obstetric",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "Pregnancy/Labour",
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
          title: "Obstetric",
          component: "Obstetric",
          value: "1"
        },
        {
          title: "Pregnancy/Labour",
          component: "Labour",
          value: "2"
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
  computed: {},
  async saveData() {
  },
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
      await resetPatientData();
      this.$router.push("labourHome");
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
            stepperTitle: "Obstetric Details",
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
const obstetricDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { obstetricDetails as default };
