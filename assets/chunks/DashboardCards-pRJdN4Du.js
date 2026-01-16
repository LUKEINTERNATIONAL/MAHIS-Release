import { q as defineComponent, x as createElementBlock, y as openBlock, A as createBaseVNode, z as createVNode, N as createBlock, G as createCommentVNode, E as unref, K as IonIcon, cn as checkmarkCircle, C as toDisplayString, a3 as normalizeClass } from './vendor-Dvd0YFIr.js';
import { _ as _export_sfc } from '../index-BQO1lu0i.js';

const _hoisted_1 = { class: "icon-container" };
const _hoisted_2 = { class: "card-title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardCards",
  props: {
    icon: {},
    title: {},
    isSaved: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["card", { "card-saved": _ctx.isSaved }]),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(unref(IonIcon), {
            icon: _ctx.icon,
            class: "card-icon"
          }, null, 8, ["icon"]),
          _ctx.isSaved ? (openBlock(), createBlock(unref(IonIcon), {
            key: 0,
            icon: unref(checkmarkCircle),
            class: "check-icon"
          }, null, 8, ["icon"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.title), 1)
      ], 2);
    };
  }
});

const DashboardCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66232359"]]);

export { DashboardCards as D };
