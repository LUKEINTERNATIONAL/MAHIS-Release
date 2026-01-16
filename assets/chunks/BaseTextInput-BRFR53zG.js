import { q as defineComponent, a5 as IonInput, d as computed, v as resolveComponent, N as createBlock, y as openBlock } from './vendor-wM1cIaYi.js';
import { u as usePlatform } from './Export-uhpjaf4e.js';
import { _ as _export_sfc } from '../index-D6b7pLN6.js';

const _sfc_main = defineComponent({
  name: "HisInput",
  components: { IonInput },
  setup() {
    const { activePlatformProfile } = usePlatform();
    const readOnly = computed(() => activePlatformProfile.value.keyboard === "HIS_KEYBOARD_ONLY");
    return {
      readOnly
    };
  },
  data: () => ({
    text: ""
  }),
  watch: {
    value(val) {
      this.text = val;
    },
    text(text) {
      this.$emit("onValue", text);
    }
  },
  props: {
    value: {
      required: false
    },
    type: {
      type: String,
      default: () => "text"
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: () => ""
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_input = resolveComponent("ion-input");
  return openBlock(), createBlock(_component_ion_input, {
    ref: "input",
    class: "input_display",
    modelValue: _ctx.text,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.text = $event),
    type: _ctx.type,
    disabled: _ctx.disabled,
    readonly: _ctx.readOnly,
    autocapitalize: "sentences",
    placeholder: _ctx.placeholder
  }, null, 8, ["modelValue", "type", "disabled", "readonly", "placeholder"]);
}
const BaseInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f905d84d"]]);

export { BaseInput as default };
