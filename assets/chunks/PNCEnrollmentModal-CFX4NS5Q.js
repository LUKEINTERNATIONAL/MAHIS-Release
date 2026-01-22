import { v as defineComponent, M as IonIcon, aF as IonContent, O as IonButton, bd as IonButtons, aD as IonTitle, aC as IonToolbar, I as IonHeader, bG as IonModal, be as IonFooter, a8 as IonLabel, ag as IonRow, az as IonCol, H as closeCircleOutline, L as modalController, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, a6 as createTextVNode, E as toDisplayString, D as createBaseVNode } from './vendor-Cbv9TWZo.js';
import { F as DynamicButton, _ as _export_sfc } from '../index-BWK4lXtd.js';
import { f as _sfc_main$1, e as _sfc_main$2, _ as _sfc_main$4, c as _sfc_main$5 } from './useSetRegistrationValues-DamwQaLb.js';
import { _ as _sfc_main$3 } from './Registration-5rPYpAHj.js';
import { B as BasicForm } from './BasicForm-DnBjMUp2.js';

const _sfc_main = defineComponent({
  name: "AncEnrollmentModal",
  components: {
    BasicForm,
    IonCol,
    IonRow,
    IonLabel,
    IonFooter,
    SocialHistory: _sfc_main$5,
    PersonalInformation: _sfc_main$4,
    GuardianInformation: _sfc_main$3,
    CurrentLocation: _sfc_main$2,
    HomeLocation: _sfc_main$1,
    DynamicButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    closeModalFunc: {
      type: Function,
      required: true
    },
    onYes: {
      type: Function,
      required: true
    },
    onNo: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    handleCancel() {
      modalController.dismiss();
    },
    closeCircleOutline() {
      return closeCircleOutline;
    },
    closeModal() {
      this.closeModalFunc();
    },
    confirm(test) {
      this.closeModal();
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.isOpen,
    "show-backdrop": true,
    onDidDismiss: _ctx.closeModal
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_header, null, {
        default: withCtx(() => [
          createVNode(_component_ion_title, { class: "modalTitle" }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Enroll client in PNC program", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_content, {
        fullscreen: true,
        class: "ion-padding",
        style: { "--background": "#fff" }
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_title, { style: { "color": "black", "font-size": "15px" } }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }),
          _cache[2] || (_cache[2] = createBaseVNode("hr", {
            class: "dashed-hr",
            style: { "margin-bottom": "0px !important" }
          }, null, -1))
        ]),
        _: 1
      }),
      createVNode(_component_ion_footer, {
        collapse: "fade",
        class: "ion-no-border"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(_component_ion_col, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_button, {
                    id: "cbtn",
                    class: "btnText cbtn",
                    fill: "solid",
                    style: { "width": "130px" },
                    onClick: _ctx.handleCancel
                  }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode(" Cancel ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_ion_col, null, {
                default: withCtx(() => [
                  createVNode(_component_DynamicButton, {
                    name: "Submit",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onYes()),
                    fill: "solid",
                    style: { "float": "right", "margin": "2%", "width": "130px" }
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open", "onDidDismiss"]);
}
const PNCEnrollmentModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cbbb3f83"]]);

export { PNCEnrollmentModal as default };
