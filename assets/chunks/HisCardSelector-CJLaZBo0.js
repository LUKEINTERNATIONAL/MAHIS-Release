import SelectMixin from './SelectMixin-DIoNtGM3.js';
import { l as lodashExports } from './lodash-CuxQuz9v.js';
import { s as defineComponent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, z as createElementBlock, J as Fragment, R as renderList, C as createBaseVNode, a4 as normalizeClass, D as toDisplayString, P as normalizeStyle } from './vendor-6OQ3r7Vr.js';
import { _ as _export_sfc } from '../index-DjGK15Gi.js';

const _sfc_main = defineComponent({
  name: "HisSelect",
  mixins: [SelectMixin],
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
      await this.setDefaultValue();
    },
    async setDefaultValue() {
      if (this.defaultValue) {
        const defaults = await this.defaultValue(this.fdata, this.cdata, this.selected);
        if (defaults) {
          const found = lodashExports.find(this.listData, { label: defaults }) || lodashExports.find(this.listData, { value: defaults });
          if (found) {
            this.onselect(found);
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
      if (this.onValueUpdate) {
        this.listData = await this.onValueUpdate(item, this.listData);
      }
      this.$emit("onValue", item);
    }
  }
});

const _hoisted_1 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [
      createVNode(_component_ion_list, { class: "view-port-content" }, {
        default: withCtx(() => [
          createVNode(_component_ion_grid, null, {
            default: withCtx(() => [
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filtered, (item, index) => {
                    return openBlock(), createBlock(_component_ion_col, {
                      size: "4",
                      key: index
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          class: normalizeClass(["his-card clickable", { "active-card-color": _ctx.selected === item.label }]),
                          onClick: ($event) => _ctx.onselect(item)
                        }, [
                          createVNode(_component_ion_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(item.other.list, (l, lIndex) => {
                                return openBlock(), createBlock(_component_ion_item, { key: lIndex }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createBaseVNode("b", null, toDisplayString(l.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createBaseVNode("span", {
                                      style: normalizeStyle(l.style || {})
                                    }, toDisplayString(l.value), 5)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ], 10, _hoisted_1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const HisCardSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c5476f74"]]);

export { HisCardSelector as default };
