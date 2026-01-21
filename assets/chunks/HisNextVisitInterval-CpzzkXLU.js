import { v as defineComponent, z as createElementBlock, A as openBlock, J as createCommentVNode, E as toDisplayString, a5 as normalizeClass, bc as IonCardContent, bL as IonCard, az as IonGrid, y as resolveComponent, P as createBlock, D as withCtx, C as createBaseVNode, B as createVNode, K as Fragment, S as renderList, a6 as createTextVNode } from './vendor-CJ5LqAxe.js';
import { _ as _export_sfc } from '../index-DihysMBN.js';
import { V as ViewPort, T as Transformer } from './ReportMixin.vue_vue_type_script_lang-jAhU7XbP.js';
import SelectMixin from './SelectMixin-DIbiQ933.js';

const _sfc_main$1 = defineComponent({
  props: {
    color: {
      type: String
    },
    enabled: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    state() {
      return this.enabled ? `clickable ${this.color}` : "disabled-card-color";
    }
  }
});

const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = {
  key: 1,
  class: "his-md-text"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`his-card ${_ctx.state}`),
    onClick: _cache[0] || (_cache[0] = () => _ctx.enabled ? _ctx.$emit("onclick") : null)
  }, [
    !_ctx.enabled ? (openBlock(), createElementBlock("s", _hoisted_1$1, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
    _ctx.enabled ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true)
  ], 2);
}
const IntervalCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ed18ba7a"]]);

const _sfc_main = defineComponent({
  components: {
    IntervalCard,
    ViewPort,
    IonGrid,
    IonCard,
    IonCardContent
  },
  mixins: [SelectMixin],
  data: () => ({
    active: {}
  }),
  watch: {
    clear() {
      this.active = {};
      this.clearSelection();
    }
  },
  activated() {
    this.init();
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      if (this.activationState === "next") {
        this.active = {};
        this.clearSelection();
      }
      const options = await this.options(this.fdata);
      this.listData = Transformer.convertArrayToTurples(options);
    },
    onselect(item) {
      this.selected = item.label;
      this.active = item;
      this.$emit("onValue", item);
    }
  }
});

const _hoisted_1 = { class: "view-port-content" };
const _hoisted_2 = { class: "his-md-text" };
const _hoisted_3 = { class: "his-md-text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_interval_card = resolveComponent("interval-card");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_chip = resolveComponent("ion-chip");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_ion_grid, null, {
          default: withCtx(() => [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, { size: "4" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (row, rowIndex) => {
                      return openBlock(), createBlock(_component_ion_row, { key: rowIndex }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item, itemIndex) => {
                            return openBlock(), createBlock(_component_ion_col, {
                              "size-md": "6",
                              "size-sm": "12",
                              key: itemIndex
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_interval_card, {
                                  showTitle: _ctx.config.showRegimenCardTitle,
                                  label: item.label,
                                  onOnclick: ($event) => _ctx.onselect(item),
                                  enabled: item.other.enabled,
                                  color: item.label === _ctx.selected ? "active-card-color" : "inactive-card-color"
                                }, null, 8, ["showTitle", "label", "onOnclick", "enabled", "color"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode(_component_ion_col, { size: "8" }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_card, { style: { height: "65vh" } }, {
                      default: withCtx(() => [
                        _ctx.active?.label ? (openBlock(), createBlock(_component_ion_card_content, { key: 0 }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.active?.other?.label), 1),
                            createVNode(_component_ion_item, { class: "his-sm-text" }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.active?.other?.value), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.active?.other?.other?.label), 1),
                            createVNode(_component_ion_list, null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.active?.other?.other?.value, (item, index) => {
                                  return openBlock(), createBlock(_component_ion_item, {
                                    class: "his-sm-text",
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_label, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_ion_chip, {
                                        class: "his-md-text",
                                        color: "primary",
                                        slot: "end"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.value), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
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
        })
      ])
    ]),
    _: 1
  });
}
const HisNextVisitInterval = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57be4294"]]);

export { HisNextVisitInterval as default };
