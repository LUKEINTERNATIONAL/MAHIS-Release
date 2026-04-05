import { s as defineComponent, y as openBlock, O as createBlock, F as unref, bM as IonCard, Q as normalizeClass, B as withCtx, A as createVNode, C as createBaseVNode, D as toDisplayString, z as createElementBlock, a5 as createTextVNode, H as createCommentVNode, L as IonIcon, cp as checkmarkCircle, be as IonCardContent, c as computed } from './vendor-BcieWP-_.js';
import { _ as _export_sfc } from '../index-BQBxfUAX.js';

const _hoisted_1 = { class: "info-wrapper" };
const _hoisted_2 = { class: "avatar-section" };
const _hoisted_3 = { class: "initials-avatar child-bg" };
const _hoisted_4 = { class: "text-section" };
const _hoisted_5 = { class: "rel-name" };
const _hoisted_6 = {
  key: 0,
  class: "rel-meta"
};
const _hoisted_7 = { class: "rel-meta" };
const _hoisted_8 = { class: "rel-meta" };
const _hoisted_9 = {
  key: 0,
  class: "action-section"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BabyCard",
  props: {
    data: {},
    isSelected: { type: Boolean, default: false }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const initials = computed(() => {
      if (!props.data?.name) return "?";
      const parts = props.data.name.trim().split(/\s+/);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return props.data.name.slice(0, 2).toUpperCase() || "?";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), {
        class: normalizeClass(["rel-card child-card ion-no-margin", { "is-selected": __props.isSelected }]),
        onClick: _cache[0] || (_cache[0] = ($event) => __props.data.mrn && emit("toggle", __props.data.mrn))
      }, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), { class: "rel-content" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["status-accent accent-child", { "accent-selected": __props.isSelected }])
              }, null, 2),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, toDisplayString(initials.value), 1)
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, toDisplayString(__props.data.name), 1),
                  __props.data.mrn ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    createBaseVNode("span", null, [
                      _cache[1] || (_cache[1] = createBaseVNode("strong", null, "MRN:", -1)),
                      createTextVNode(" " + toDisplayString(__props.data.mrn), 1)
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("span", null, [
                      _cache[2] || (_cache[2] = createBaseVNode("strong", null, "Gender:", -1)),
                      createTextVNode(" " + toDisplayString(__props.data.sex || "N/A"), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("span", null, [
                      _cache[3] || (_cache[3] = createBaseVNode("strong", null, "DOB:", -1)),
                      createTextVNode(" " + toDisplayString(__props.data.dob || "N/A"), 1)
                    ])
                  ])
                ]),
                __props.isSelected ? (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(unref(IonIcon), {
                    icon: unref(checkmarkCircle),
                    class: "selected-icon"
                  }, null, 8, ["icon"])
                ])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});

const BabyCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be53d2c4"]]);

export { BabyCard as B };
