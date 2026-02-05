import BaseInput from './BaseTextInput-4F59zGRN.js';
import { H as HisKeyboard, k as kbHandler } from './KbHandler-6iuZeKJb.js';
import { e as NUMBERS_ONLY, V as ViewPort, f as NUMBERS_WITH_ESTIMATE } from './ReportMixin.vue_vue_type_script_lang-DtUw95Ie.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-DR2IdMvI.js';
import { s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, J as Fragment } from './vendor-CCA5uLDN.js';
import { _ as _export_sfc } from '../index-4BtwP8vl.js';

const _sfc_main = defineComponent({
  components: { BaseInput, HisKeyboard, ViewPort },
  mixins: [_sfc_main$1],
  data: () => ({
    value: "",
    keyboard: NUMBERS_ONLY
  }),
  activated() {
    this.init();
  },
  async mounted() {
    await this.init();
    await this.setDefaultValue();
  },
  methods: {
    init() {
      this.$emit("onFieldActivated", this);
      if (typeof this.config.noChars === "boolean") {
        this.keyboard = this.config.noChars ? NUMBERS_ONLY : NUMBERS_WITH_ESTIMATE;
      } else if (this.config.keypad) {
        this.keyboard = this.config.keypad;
      }
    },
    async setDefaultValue() {
      if (typeof this.defaultValue === "function") {
        const defaults = await this.defaultValue(this.fdata, this.cdata);
        if (defaults) this.value = `${defaults}`;
      }
    },
    onKbValue(text) {
      this.value = text;
    },
    keypress(text) {
      this.value = kbHandler(text, this.value);
    }
  },
  watch: {
    value(value) {
      this.$emit("onValue", !value ? null : { label: value, value });
    },
    clear() {
      this.value = "";
    }
  }
});

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
        }, null, 8, ["value", "onOnValue"])
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
const HisNumberInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { HisNumberInput as default };
