import { s as defineComponent, Q as alertCircleOutline, y as openBlock, z as createElementBlock, a8 as withModifiers, C as createBaseVNode, A as createVNode, F as unref, L as IonIcon, ag as close, D as toDisplayString, H as createCommentVNode, N as IonButton, B as withCtx, a5 as createTextVNode } from './vendor-CCA5uLDN.js';
import { _ as _export_sfc } from '../index-CnmunFdC.js';

const _hoisted_1 = {
  class: "triage-dialog-card",
  role: "dialog",
  "aria-modal": "true"
};
const _hoisted_2 = { class: "triage-dialog-header" };
const _hoisted_3 = { class: "triage-dialog-icon" };
const _hoisted_4 = {
  key: 0,
  class: "triage-dialog-subtitle"
};
const _hoisted_5 = {
  key: 1,
  class: "triage-dialog-body"
};
const _hoisted_6 = { class: "triage-dialog-actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TriageConfirmDialog",
  props: {
    isOpen: { type: Boolean, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    body: { type: String, default: "" },
    yesText: { type: String, default: "YES" },
    noText: { type: String, default: "NO" },
    // You can override the header icon if needed
    headerIcon: {
      type: Object,
      default: () => alertCircleOutline
    },
    // Optional: disable buttons while saving, etc.
    disableActions: { type: Boolean, default: false },
    // Optional: prevent closing via backdrop/X
    persistent: { type: Boolean, default: false }
  },
  emits: ["close", "yes", "no"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const emitClose = () => {
      if (props.persistent) return;
      emit("close");
    };
    const emitYes = () => emit("yes");
    const emitNo = () => emit("no");
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "triage-dialog-backdrop",
        onClick: withModifiers(emitClose, ["self"])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("button", {
            class: "triage-dialog-close",
            type: "button",
            onClick: emitClose
          }, [
            createVNode(unref(IonIcon), { icon: unref(close) }, null, 8, ["icon"])
          ]),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(IonIcon), { icon: __props.headerIcon }, null, 8, ["icon"])
            ]),
            createBaseVNode("h2", null, toDisplayString(__props.title), 1)
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "triage-dialog-divider" }, null, -1)),
          __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true),
          __props.body ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(__props.body), 1)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, [
            createVNode(unref(IonButton), {
              class: "triage-dialog-btn secondary",
              expand: "block",
              disabled: __props.disableActions,
              onClick: emitNo
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.noText), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            createVNode(unref(IonButton), {
              class: "triage-dialog-btn primary",
              expand: "block",
              disabled: __props.disableActions,
              onClick: emitYes
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.yesText), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});

const TriageConfirmDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e28844dc"]]);

export { TriageConfirmDialog as T };
