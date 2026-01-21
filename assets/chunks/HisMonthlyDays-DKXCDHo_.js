import BaseInput from './BaseTextInput-DsgFWCe7.js';
import { H as HisKeyboard, k as kbHandler } from './KbHandler-CoHELf2A.js';
import { V as ViewPort, c as MONTHLY_DAYS_LO, d as MONTHLY_DAYS } from './ReportMixin.vue_vue_type_script_lang-jAhU7XbP.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-DeYlLfnz.js';
import { v as defineComponent, y as resolveComponent, z as createElementBlock, A as openBlock, B as createVNode, D as withCtx, J as createCommentVNode, E as toDisplayString, K as Fragment } from './vendor-CJ5LqAxe.js';
import { _ as _export_sfc } from '../index-DihysMBN.js';

const _sfc_main = defineComponent({
  components: { BaseInput, HisKeyboard, ViewPort },
  mixins: [_sfc_main$1],
  data: () => ({
    value: "",
    errors: "",
    minDays: 1,
    maxDays: 30,
    keyboard: []
  }),
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      let keypad = MONTHLY_DAYS_LO;
      if (this.config) {
        if (this.config.year && this.config.month) {
          keypad = this.generateKeypad(
            this.config.year(this.fdata),
            this.config.month(this.fdata)
          );
        }
        if (this.config.keyboardActions) {
          this.keyboard = [
            keypad,
            this.config.keyboardActions
          ];
        } else {
          this.keyboard = [
            keypad,
            [
              ["Unknown"]
            ]
          ];
        }
      } else {
        this.keyboard = MONTHLY_DAYS;
      }
      await this.setDefaultValue();
    },
    onKbValue(value) {
      this.value = value;
      this.emitValue();
    },
    keypress(text) {
      this.value = kbHandler(text, "");
      this.emitValue();
    },
    emitValue() {
      this.errors = "";
      let num = this.value;
      if (!num) {
        this.$emit("onValue", null);
        return;
      }
      if (num.toString().match(/unknown/i)) {
        this.$emit("onValue", { label: "Unknown", value: "Unknown" });
        return;
      }
      if (isNaN(num)) {
        this.errors = "Invalid number";
        this.$emit("onValue", null);
        return;
      }
      num = parseInt(num);
      if (num < this.minDays || num > this.maxDays) {
        this.errors = "Value number is out of range";
        this.$emit("onValue", null);
      } else {
        this.$emit("onValue", { label: num, value: num });
      }
    },
    generateKeypad(year, month) {
      const days = [[]];
      this.maxDays = new Date(year, month, 0).getDate();
      let row = 0;
      let counter = 0;
      for (let i = 0; i < this.maxDays; ++i) {
        if (counter > 7) {
          ++row;
          days[row] = [];
          counter = 0;
        }
        days[row].push(`${i + 1}`);
        ++counter;
      }
      return days;
    },
    async setDefaultValue() {
      if (this.defaultValue && !this.value) {
        const defaults = await this.defaultValue(this.fdata, this.cdata);
        if (defaults) {
          this.value = defaults;
          this.emitValue();
        }
      }
    }
  },
  watch: {
    clear() {
      this.value = "";
    }
  }
});

const _hoisted_1 = {
  key: 0,
  style: { "color": "red", "font-weight": "bold" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_base_input = resolveComponent("base-input");
  const _component_view_port = resolveComponent("view-port");
  const _component_his_keyboard = resolveComponent("his-keyboard");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_view_port, null, {
      default: withCtx(() => [
        createVNode(_component_base_input, {
          value: _ctx.value,
          onOnValue: _ctx.onKbValue
        }, null, 8, ["value", "onOnValue"]),
        _ctx.errors ? (openBlock(), createElementBlock("span", _hoisted_1, " **" + toDisplayString(_ctx.errors) + "** ", 1)) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(_component_his_keyboard, {
      kbConfig: _ctx.keyboard,
      onKeyPress: _ctx.keypress,
      disabled: false
    }, null, 8, ["kbConfig", "onKeyPress"])
  ], 64);
}
const HisMonthlyDays = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { HisMonthlyDays as default };
