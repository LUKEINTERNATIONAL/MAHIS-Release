import { s as defineComponent, L as IonIcon, N as IonButton, aE as IonTitle, ep as IonBackButton, be as IonButtons, aD as IonToolbar, I as IonHeader, cG as arrowForward, dw as arrowBack, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, H as createCommentVNode, C as createBaseVNode, D as toDisplayString, a5 as createTextVNode } from './vendor-D523m2MA.js';
import { E as EIRreportsStore } from './EIRreportsStore-D7D4qIKZ.js';
import { m as mapState } from './pinia-BZkYQmJa.js';
import { _ as _export_sfc } from '../index-Cz12Kt3o.js';

const _sfc_main = defineComponent({
  name: "NavigationMenu",
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonButton,
    IonIcon
  },
  data() {
    return {
      backwardsPath: this.backHref,
      comp_title: "",
      can_GoBack: true,
      can_GoForward: false,
      back_Href: "/",
      navSubTitle: ""
    };
  },
  props: {
    title: {
      type: String,
      default: "Months List"
    },
    titleIcon: {
      type: String,
      default: ""
    },
    canGoBack: {
      type: Boolean,
      default: true
    },
    canGoForward: {
      type: Boolean,
      default: false
    },
    backHref: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState(EIRreportsStore, ["navigationPayload"])
  },
  async mounted() {
    this.initNavData();
    this.comp_title = this.title;
  },
  watch: {
    navigationPayload: {
      handler() {
        this.initNavData();
      },
      deep: true
    }
  },
  setup() {
    const goForward = () => {
      console.log("Navigate forward");
    };
    return {
      arrowBack,
      arrowForward,
      goForward
    };
  },
  methods: {
    goto(url) {
      this.$router.push(url);
    },
    initNavData() {
      this.comp_title = this.navigationPayload.title;
      this.can_GoBack = this.navigationPayload.canGoBack;
      this.can_GoForward = this.navigationPayload.canGoForward;
      this.back_Href = this.navigationPayload.backHref;
      this.backwardsPath = this.navigationPayload.backHref;
      this.navSubTitle = this.navigationPayload.subTxt;
    },
    goBackwards() {
      this.goto(this.backwardsPath);
    }
  }
});

const _hoisted_1 = { style: { "display": "flex", "align-items": "left", "justify-content": "left", "gap": "8px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_buttons = resolveComponent("ion-buttons");
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  return openBlock(), createBlock(_component_ion_header, null, {
    default: withCtx(() => [
      createVNode(_component_ion_toolbar, null, {
        default: withCtx(() => [
          _ctx.canGoBack ? (openBlock(), createBlock(_component_ion_buttons, {
            key: 0,
            slot: "start"
          }, {
            default: withCtx(() => [
              _ctx.can_GoBack ? (openBlock(), createBlock(_component_ion_button, {
                key: 0,
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.goto(_ctx.backwardsPath))
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, { icon: _ctx.arrowBack }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_ion_title, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                _ctx.titleIcon ? (openBlock(), createBlock(_component_ion_icon, {
                  key: 0,
                  icon: _ctx.titleIcon,
                  style: { "font-size": "24px" }
                }, null, 8, ["icon"])) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(_ctx.comp_title), 1)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_ion_title, { style: { "font-size": "17px" } }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.navSubTitle), 1)
            ]),
            _: 1
          }),
          createVNode(_component_ion_buttons, { slot: "end" }, {
            default: withCtx(() => [
              _ctx.can_GoForward ? (openBlock(), createBlock(_component_ion_button, {
                key: 0,
                onClick: _ctx.goForward
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, { icon: _ctx.arrowForward }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NavigationMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { NavigationMenu as N };
