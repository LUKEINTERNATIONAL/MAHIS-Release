import { H as HisTable, V as ViewPort } from './ReportMixin.vue_vue_type_script_lang-7GKffwkO.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-DMsOCYiY.js';
import { s as defineComponent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, P as normalizeStyle } from './vendor-DoVhRvhx.js';
import { _ as _export_sfc } from '../index-Bf-C6EIe.js';

const _sfc_main = defineComponent({
  components: { ViewPort, HisTable },
  mixins: [_sfc_main$1],
  data: () => ({
    columns: [],
    rows: []
  }),
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      if (typeof this.config.columns === "function") {
        this.columns = await this.config.columns(this.fdata, this.cdata);
      }
      if (typeof this.config.rows === "function") {
        this.rows = await this.config.rows(this.fdata, this.cdata);
      }
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  }
});

const _hoisted_1 = { class: "view-port-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_his_table = resolveComponent("his-table");
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, {
    style: normalizeStyle(_ctx.config.viewPortStyle)
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_his_table, {
          columns: _ctx.columns,
          rows: _ctx.rows,
          config: _ctx.config.dataTableConfig
        }, null, 8, ["columns", "rows", "config"])
      ])
    ]),
    _: 1
  }, 8, ["style"]);
}
const HisDataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f63a389c"]]);

export { HisDataTable as default };
