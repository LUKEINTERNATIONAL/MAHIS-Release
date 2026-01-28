import { n as icons, F as DynamicButton, _ as _export_sfc } from '../index-BAzlf83c.js';
import { s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, F as unref, C as createBaseVNode, D as toDisplayString } from './vendor-BIA1Qh8a.js';

const _hoisted_1 = { class: "go_back" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoBack",
  props: {
    title: {},
    name: {},
    url: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(DynamicButton, {
          fill: "clear",
          icon: unref(icons).arrowLeft,
          iconSlot: "icon-only",
          "onClicked:btn": _cache[0] || (_cache[0] = ($event) => _ctx.$router.push(__props.url || "/home")),
          name: __props.name || "Go back"
        }, null, 8, ["icon", "name"]),
        createBaseVNode("h4", null, toDisplayString(__props.title), 1),
        _cache[1] || (_cache[1] = createBaseVNode("span", null, null, -1))
      ]);
    };
  }
});

const GoBack = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-908f4fc9"]]);

export { GoBack as G };
