import { s as defineComponent, L as IonIcon, aG as IonContent, N as IonButton, be as IonButtons, aE as IonTitle, aD as IonToolbar, I as IonHeader, bF as IonModal, bf as IonFooter, af as IonRow, aA as IonCol, G as closeCircleOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, a5 as createTextVNode, D as toDisplayString, C as createBaseVNode } from './vendor-D523m2MA.js';
import { F as DynamicButton, _ as _export_sfc } from '../index-6cYhgLOM.js';

const _sfc_main = defineComponent({
  name: "OPDPrintingModal",
  components: {
    DynamicButton,
    IonCol,
    IonRow,
    IonFooter,
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
      required: false
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
  computed: {
    isCheckInPrompt() {
      return this.title === "Do you want to create visit or view profile?";
    }
  },
  methods: {
    closeCircleOutline() {
      return closeCircleOutline;
    }
  }
});

const _hoisted_1 = { style: { "display": "flex" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_buttons = resolveComponent("ion-buttons");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.isOpen,
    "show-backdrop": true
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_buttons, { slot: "start" }, {
        default: withCtx(() => [
          createVNode(_component_ion_title, { style: { "color": "#0c0c0c" } }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }),
          createVNode(_component_ion_button, null, {
            default: withCtx(() => [
              createVNode(_component_ion_icon, {
                slot: "icon-only",
                style: { "color": "#b02a37" }
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
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
                          onClick: _ctx.onNo
                        }, {
                          default: withCtx(() => [..._cache[1] || (_cache[1] = [
                            createTextVNode("No ", -1)
                          ])]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_DynamicButton, {
                          name: "Yes",
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
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open"]);
}
const OPDPrintingModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d26f4605"]]);

export { OPDPrintingModal as O };
