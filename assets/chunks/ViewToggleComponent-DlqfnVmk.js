import { q as defineComponent, L as IonIcon, N as IonButton, ba as IonButtons, dd as gridOutline, b3 as listOutline, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx, a4 as normalizeClass } from './vendor-BPW-J91F.js';
import { _ as _export_sfc } from '../index-VhmzLedw.js';

const _sfc_main = defineComponent({
  name: "ViewToggle",
  components: {
    IonButtons,
    IonButton,
    IonIcon
  },
  props: {
    initialView: {
      type: String,
      default: "list",
      validator: (value) => ["list", "card"].includes(value)
    }
  },
  data() {
    return {
      currentView: this.initialView,
      listOutline,
      gridOutline
    };
  },
  methods: {
    switchView(view) {
      this.currentView = view;
      this.$emit("view-changed", view);
    }
  }
});

const _hoisted_1 = { class: "view-toggle-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_buttons = resolveComponent("ion-buttons");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ion_buttons, {
      slot: "end",
      class: "toggle-buttons"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_button, {
          fill: "clear",
          class: normalizeClass([{ "active": _ctx.currentView === "list" }, "toggle-button"]),
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.switchView("list"))
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_icon, {
              icon: _ctx.listOutline,
              size: "large"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(_component_ion_button, {
          fill: "clear",
          class: normalizeClass([{ "active": _ctx.currentView === "card" }, "toggle-button"]),
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.switchView("card"))
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_icon, {
              icon: _ctx.gridOutline,
              size: "large"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    })
  ]);
}
const ViewToggleComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fd18aee5"]]);

export { ViewToggleComponent as V };
