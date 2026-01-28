import { K as KEY_BTN_NAV } from './ReportMixin.vue_vue_type_script_lang-Cdxis35H.js';
import { s as defineComponent, N as IonButton, x as resolveComponent, y as openBlock, z as createElementBlock, J as Fragment, R as renderList, O as createBlock, B as withCtx, a5 as createTextVNode, D as toDisplayString, a4 as normalizeClass, P as normalizeStyle, H as createCommentVNode, C as createBaseVNode, A as createVNode } from './vendor-BIA1Qh8a.js';
import { _ as _export_sfc } from '../index-CoTAfgAo.js';

const _sfc_main$1 = defineComponent({
  components: { IonButton },
  props: {
    btnSize: {
      type: String,
      default: "90%"
    },
    layout: {
      type: Array,
      required: true,
      default: () => []
    },
    onKeyPress: {
      type: Function,
      required: true
    }
  },
  methods: {
    keyPress(key) {
      this.onKeyPress(key);
    },
    dynamicClass(row) {
      if (row.length == 3 && row[0] == "Unknown")
        return "Keypad";
      return row[0];
    }
  }
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("table", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.layout, (row, rowIndex) => {
      return openBlock(), createElementBlock("tr", { key: rowIndex }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(row, (btnKey, btnIndex) => {
          return openBlock(), createElementBlock("td", {
            class: "his-keyboard-margin",
            key: `btn-${btnIndex}`
          }, [
            btnKey ? (openBlock(), createBlock(_component_ion_button, {
              key: 0,
              style: normalizeStyle({ width: _ctx.btnSize }),
              class: normalizeClass(`his-keyboard-btn btn-${btnKey}-${_ctx.dynamicClass(row)}`),
              onClick: () => _ctx.keyPress(btnKey)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(btnKey), 1)
              ]),
              _: 2
            }, 1032, ["style", "class", "onClick"])) : createCommentVNode("", true)
          ]);
        }), 128))
      ]);
    }), 128))
  ]);
}
const BaseKeyboard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);

const _sfc_main = defineComponent({
  components: { BaseKeyboard },
  props: {
    initalKeyboardName: {
      type: String
    },
    kbConfig: {
      type: Array,
      required: true
    },
    onKeyPress: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    activeLayout: {}
  }),
  watch: {
    initalKeyboardName: {
      handler(name) {
        if (name) {
          this.$nextTick(() => this.switchKeyboard(name));
        }
      },
      immediate: true
    },
    kbConfig: {
      handler(keyboard) {
        if (keyboard) {
          this.activeLayout = keyboard;
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    keypress(key) {
      if (!this.isFunctionKey(key)) {
        this.onKeyPress(key);
      }
    },
    isFunctionKey(key) {
      if (this.switchKeyboard(key)) {
        return true;
      }
      return false;
    },
    switchKeyboard(key) {
      const kbIndex = KEY_BTN_NAV.map((item) => item.btn).indexOf(key);
      if (kbIndex >= 0) {
        this.activeLayout = KEY_BTN_NAV[kbIndex].keyboard;
        return true;
      }
      return false;
    }
  }
});

const _hoisted_1 = { class: "his-floating-keyboard" };
const _hoisted_2 = { class: "his-floating-keyboard-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_base_keyboard = resolveComponent("base-keyboard");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.activeLayout, (layout, index) => {
        return openBlock(), createElementBlock("div", { key: index }, [
          createVNode(_component_base_keyboard, {
            layout,
            onKeyPress: _ctx.keypress
          }, null, 8, ["layout", "onKeyPress"])
        ]);
      }), 128))
    ])
  ]);
}
const HisKeyboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

function kbHandler(newInput, accumulator, casing) {
  let output = accumulator;
  if (newInput.match(/enter/i)) {
    return `${output}\r
`;
  }
  if (newInput.match(/clear/i)) {
    return "";
  } else if (newInput.match(/delete|del/i)) {
    if (output.match(/unknown/i) || output.match(/n\/a/i)) {
      output = "";
    } else {
      output = output.substring(0, output.length - 1);
    }
  } else if (newInput.match(/space/i)) {
    output = `${accumulator} `;
  } else if (newInput.match(/unknown/i)) {
    output = "Unknown";
  } else if (newInput.match(/n\/a/i)) {
    output = "N/A";
  } else {
    if (output.match(/unknown/i) || output.match(/n\/a/i)) {
      output = newInput;
    } else {
      output = `${accumulator}${newInput}`;
    }
  }
  if (typeof output === "string" && output) {
    switch (casing) {
      case "lowercase":
        output = output.toLowerCase();
        break;
      case "uppercase":
        output = output.toUpperCase();
        break;
      default:
        output = output.charAt(0).toUpperCase() + output.slice(1);
        break;
    }
  }
  return output;
}

export { HisKeyboard as H, kbHandler as k };
