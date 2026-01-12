import { q as defineComponent, bC as IonModal, a7 as IonLabel, an as IonItem, aC as IonAccordionGroup, aB as IonAccordion, b4 as IonCardTitle, cB as IonCardSubtitle, b5 as IonCardHeader, b7 as IonCardContent, bH as IonCard, N as IonButton, ay as IonToolbar, az as IonTitle, bq as IonPage, cs as IonMenuButton, I as IonHeader, H as IonContent, b6 as checkmark, bV as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-BK8x96Ok.js';
import { a3 as ToolbarSearch, T as Toolbar, o as createModal, bM as resetPatientData, n as icons, _ as _export_sfc } from '../index-dAcYVh-O.js';
import { D as DemographicBar } from './DemographicBar-CLYiHOHY.js';
import { S as SaveProgressModal } from './SaveProgressModal-ByT-Guwg.js';
import { S as Stepper } from './Stepper-CU5tZBf4.js';
import { B as BasicFooter } from './BasicFooter-zbzGOX17.js';
import { b as _sfc_main$1 } from './NextAppointment-BdU3gg65.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-XZRIFKKc.js';

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
