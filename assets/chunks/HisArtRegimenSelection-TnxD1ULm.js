import { V as ViewPort } from './ReportMixin.vue_vue_type_script_lang-iPvCj7E_.js';
import SelectMixin from './SelectMixin-Dr7-Q2tv.js';
import { s as defineComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, D as toDisplayString, a4 as normalizeClass, aA as IonCol, af as IonRow, x as resolveComponent, O as createBlock, B as withCtx, A as createVNode, J as Fragment, R as renderList } from './vendor-CL0dVHZq.js';
import { _ as _export_sfc } from '../index-NSeNS5TF.js';
import { l as lodashExports } from './lodash-Ba28qa7J.js';

const _sfc_main$1 = defineComponent({
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    enabled: {
      type: Boolean,
      default: true
    },
    color: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    state() {
      if (this.enabled) return `${this.color} clickable`;
      return "disabled-card-color";
    }
  },
  methods: {
    onclick() {
      if (this.enabled) this.$emit("onclick");
    }
  }
});

const _hoisted_1$1 = { class: "title" };
const _hoisted_2 = {
  class: "his-sm-text",
  style: { textAlign: "center" }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`his-card ${_ctx.state}`),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onclick && _ctx.onclick(...args))
  }, [
    createBaseVNode("table", null, [
      createBaseVNode("td", _hoisted_1$1, toDisplayString(_ctx.value) + "  ", 1),
      createBaseVNode("td", _hoisted_2, toDisplayString(_ctx.label), 1)
    ])
  ], 2);
}
const RegimenCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-7146cdca"]]);

const _sfc_main = defineComponent({
  components: {
    ViewPort,
    RegimenCard,
    IonRow,
    IonCol
  },
  mixins: [SelectMixin],
  watch: {
    clear(val) {
      if (val) this.clearSelection();
    }
  },
  computed: {
    leftItems() {
      return !lodashExports.isEmpty(this.listData) ? this.listData[0] : [];
    },
    rightItems() {
      return !lodashExports.isEmpty(this.listData) ? this.listData[1] : [];
    }
  },
  async mounted() {
    this.init();
  },
  activated() {
    this.$emit("onFieldActivated", this);
  },
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      const options = await this.options(this.fdata);
      this.listData = this.buildList(options);
    },
    buildList(options) {
      const turple = [[], []];
      const sort = (items) => items.sort((a, b) => a.value > b.value ? 1 : -1);
      options.forEach((o) => {
        const code = parseInt(o.value.toString());
        code < 10 ? turple[0].push(o) : turple[1].push(o);
      });
      return [sort(turple[0]), sort(turple[1])];
    },
    async onselect(item) {
      this.selected = item.label;
      if (this.onValue) {
        const ok = await this.onValue(item);
        if (!ok) {
          this.selected = "";
          this.$emit("onValue", null);
          return;
        }
      }
      if (this.onValueUpdate) {
        this.listData = await this.onValueUpdate([...this.listData], item);
      }
      this.$emit("onValue", item);
    }
  }
});

const _hoisted_1 = { class: "view-port-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_regimen_card = resolveComponent("regimen-card");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, {
              "size-md": "6",
              "size-sm": "12"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.leftItems, (item, lIndex) => {
                  return openBlock(), createBlock(_component_regimen_card, {
                    class: "regimen-item",
                    key: lIndex,
                    label: item.label,
                    value: item.value,
                    onOnclick: ($event) => _ctx.onselect(item),
                    color: item.label === _ctx.selected ? "active-card-color" : "inactive-card-color"
                  }, null, 8, ["label", "value", "onOnclick", "color"]);
                }), 128))
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, {
              "size-md": "6",
              "size-sm": "12"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rightItems, (item, rIndex) => {
                  return openBlock(), createBlock(_component_regimen_card, {
                    class: "regimen-item",
                    key: rIndex,
                    label: item.label,
                    value: item.value,
                    onOnclick: ($event) => _ctx.onselect(item),
                    color: item.label === _ctx.selected ? "active-card-color" : "inactive-card-color"
                  }, null, 8, ["label", "value", "onOnclick", "color"]);
                }), 128))
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
const HisArtRegimenSelection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-63d39285"]]);

export { HisArtRegimenSelection as default };
