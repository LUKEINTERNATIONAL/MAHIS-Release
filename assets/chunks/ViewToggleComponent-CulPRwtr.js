import { s as defineComponent, L as IonIcon, N as IonButton, be as IonButtons, de as gridOutline, b7 as listOutline, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, J as Fragment, R as renderList, O as createBlock, a4 as normalizeClass, P as normalizeStyle } from './vendor-D_Iz0VZ7.js';
import { F as DynamicButton, _ as _export_sfc } from '../index-DR39kxWD.js';

const _sfc_main = defineComponent({
  name: "ViewToggle",
  components: {
    IonButtons,
    IonButton,
    IonIcon,
    DynamicButton
  },
  props: {
    initialView: {
      type: String,
      default: "list",
      validator: (value) => ["list", "card"].includes(value)
    },
    dynamicButtons: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentView: this.initialView,
      listOutline,
      gridOutline,
      dynamicButtonStyle: {
        "--padding-start": "0.5rem",
        "--padding-end": "0.5rem",
        "height": "2rem",
        "margin-right": "0.5rem"
      }
    };
  },
  methods: {
    switchView(view) {
      this.currentView = view;
      this.$emit("view-changed", view);
    },
    handleDynamicButtonClick(button, index) {
      if (button.onClick) {
        button.onClick();
      }
      this.$emit("dynamic-button-click", { button, index });
    }
  }
});

const _hoisted_1 = { class: "view-toggle-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_buttons = resolveComponent("ion-buttons");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ion_buttons, {
      slot: "end",
      class: "toggle-buttons"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dynamicButtons, (button, index) => {
          return openBlock(), createBlock(_component_DynamicButton, {
            key: `dynamic-${index}`,
            name: button.name,
            "sub-name": button.subName,
            fill: button.fill || "clear",
            icon: button.icon,
            size: button.size || "default",
            expand: button.expand,
            "icon-slot": button.iconSlot || "icon-only",
            "icon-font": button.iconFont || "large",
            color: button.color,
            "show-name": button.showName ?? false,
            "disabled-value": button.disabled || false,
            "font-weight": button.fontWeight,
            id: button.id,
            style: normalizeStyle(button.style || _ctx.dynamicButtonStyle),
            loading: button.loading || false,
            "onClicked:btn": ($event) => _ctx.handleDynamicButtonClick(button, index),
            class: normalizeClass(["dynamic-button-wrapper", { "active-dynamic": button.active }])
          }, null, 8, ["name", "sub-name", "fill", "icon", "size", "expand", "icon-slot", "icon-font", "color", "show-name", "disabled-value", "font-weight", "id", "style", "loading", "onClicked:btn", "class"]);
        }), 128)),
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
const ViewToggleComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-63c97419"]]);

export { ViewToggleComponent as V };
