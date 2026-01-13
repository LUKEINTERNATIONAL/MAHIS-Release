import { q as defineComponent, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, br as IonPage, an as IonItem, I as IonHeader, H as IonContent, b8 as checkmark, bW as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-BPW-J91F.js';
import { D as DemographicBar } from './DemographicBar-BoMxU7uv.js';
import { B as BasicInputField, T as Toolbar, n as icons, _ as _export_sfc } from '../index-Be0fRy6M.js';
import { D as end$1, S as Stepper } from './Stepper-BCJKx3gQ.js';
import { B as BasicFooter } from './BasicFooter-DkcBNX1-.js';
import { b as _sfc_main$1 } from './NextAppointment-CA0lArxI.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-BEwNDhRK.js';

const _sfc_main = defineComponent({
  name: "end",
  mixins: [_sfc_main$1, _sfc_main$2],
  components: {
    BasicFooter,
    IonContent,
    IonHeader,
    IonItem,
    IonPage,
    IonList,
    Toolbar,
    DemographicBar,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicInputField,
    Stepper,
    end: end$1
  },
  data() {
    return {
      iconsContent: icons,
      isOpen: false,
      wizardData: [
        {
          title: "End labour",
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
          title: "Labour and delivery end",
          component: "end",
          value: "1"
        }
      ]
    };
  },
  setup() {
    return { chevronBackOutline, checkmark };
  },
  methods: {
    markWizard() {
    },
    getSaveFunction() {
    },
    async saveData() {
      this.$router.push("labourHome");
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
            "stepper-title": "End labour and delivery",
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
const end = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { end as default };
