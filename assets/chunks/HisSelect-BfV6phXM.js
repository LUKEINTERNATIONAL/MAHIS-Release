import SelectMixin from './SelectMixin-BwfUA_aH.js';
import { l as lodashExports } from './lodash-CxXqq_k7.js';
import { v as defineComponent, y as resolveComponent, z as openBlock, A as createElementBlock, B as createVNode, C as withCtx, K as Fragment, S as renderList, P as createBlock, a6 as createTextVNode, E as toDisplayString, J as createCommentVNode } from './vendor-Cbv9TWZo.js';
import { _ as _export_sfc } from '../index-DIdCIGDg.js';

const _sfc_main = defineComponent({
  name: "HisSelect",
  mixins: [SelectMixin],
  data: () => ({
    isInit: false
  }),
  watch: {
    clear() {
      this.clearSelection();
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      this.listData = await this.options(this.fdata);
      if (!this.isInit) {
        await this.setDefaultValue();
      }
      this.isInit = true;
    },
    async setDefaultValue() {
      if (this.defaultValue) {
        const defaults = await this.defaultValue(this.fdata, this.cdata, this.selected);
        if (defaults) {
          const found = lodashExports.find(this.listData, { label: defaults }) || lodashExports.find(this.listData, { value: defaults });
          if (found) {
            this.onselect(found);
          } else {
            this.selected = defaults;
            this.filter = defaults;
          }
        }
      }
    },
    async onselect(item) {
      this.selected = item.label;
      if (this.onValue) {
        const ok = await this.onValue(item, this);
        if (!ok) {
          this.selected = "";
          return;
        }
      }
      this.$emit("onValue", item);
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_his_text_input = resolveComponent("his-text-input");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_view_port = resolveComponent("view-port");
  const _component_his_keyboard = resolveComponent("his-keyboard");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_view_port, {
      showFull: !_ctx.showKeyboard
    }, {
      default: withCtx(() => [
        createVNode(_component_his_text_input, {
          readonly: !_ctx.showKeyboard,
          value: _ctx.selected,
          onOnValue: _cache[0] || (_cache[0] = (value) => _ctx.onKbValue(value, _ctx.showKeyboard))
        }, null, 8, ["readonly", "value"]),
        createVNode(_component_ion_list, { class: "view-port-content" }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filtered, (item, index) => {
              return openBlock(), createBlock(_component_ion_item, {
                class: "his-md-text",
                button: "",
                color: item.label === _ctx.selected ? "lightblue" : "",
                lines: item.isChecked ? "none" : "",
                key: index,
                disabled: "disabled" in item && item.disabled ? true : false,
                onClick: ($event) => _ctx.onselect(item)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.label), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["color", "lines", "disabled", "onClick"]);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["showFull"]),
    _ctx.showKeyboard ? (openBlock(), createBlock(_component_his_keyboard, {
      key: 0,
      kbConfig: _ctx.keyboard,
      onKeyPress: _ctx.keypress
    }, null, 8, ["kbConfig", "onKeyPress"])) : createCommentVNode("", true)
  ], 64);
}
const HisSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99e4c817"]]);

export { HisSelect as default };
