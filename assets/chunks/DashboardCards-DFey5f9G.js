import { v as defineComponent, z as openBlock, A as createElementBlock, D as createBaseVNode, B as createVNode, G as unref, M as IonIcon, P as createBlock, cp as checkmarkCircle, J as createCommentVNode, E as toDisplayString, a5 as normalizeClass } from './vendor-D3hawxEQ.js';
import { _ as _export_sfc } from '../index-DeiarqPy.js';

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
        class: normalizeClass(["card", { "card-saved": __props.isSaved }]),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(unref(IonIcon), {
            icon: __props.icon,
            class: "card-icon"
          }, null, 8, ["icon"]),
          __props.isSaved ? (openBlock(), createBlock(unref(IonIcon), {
            key: 0,
            icon: unref(checkmarkCircle),
            class: "check-icon"
          }, null, 8, ["icon"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_2, toDisplayString(__props.title), 1)
      ], 2);
    };
  }
});

const DashboardCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66232359"]]);

export { DashboardCards as D };
