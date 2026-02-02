import { V as ViewPort } from './ReportMixin.vue_vue_type_script_lang-C0rMF05m.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-DMsOCYiY.js';
import { s as defineComponent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, z as createElementBlock, J as Fragment, R as renderList, D as toDisplayString } from './vendor-DoVhRvhx.js';
import { _ as _export_sfc } from '../index-BVAFc2zM.js';

const _sfc_main = defineComponent({
  components: { ViewPort },
  mixins: [_sfc_main$1],
  data: () => ({
    listData: []
  }),
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      this.listData = await this.options(this.fdata, this.cdata);
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  }
});

const _hoisted_1 = { class: "f-number f-active-col" };
const _hoisted_2 = { class: "f-number f-inactive-col" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [
      createBaseVNode("table", null, [
        _cache[0] || (_cache[0] = createBaseVNode("tr", null, [
          createBaseVNode("th", null, "   "),
          createBaseVNode("th", null, " Name "),
          createBaseVNode("th", null, " New Number "),
          createBaseVNode("th", null, " Old Number ")
        ], -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item, index) => {
          return openBlock(), createElementBlock("tr", { key: index }, [
            createBaseVNode("td", null, toDisplayString(item.label), 1),
            createBaseVNode("td", null, toDisplayString(item.value), 1),
            createBaseVNode("td", null, [
              createBaseVNode("div", _hoisted_1, toDisplayString(item.other.activeNumber), 1)
            ]),
            createBaseVNode("td", null, [
              createBaseVNode("div", _hoisted_2, toDisplayString(item.other.dormantNumber), 1)
            ])
          ]);
        }), 128))
      ])
    ]),
    _: 1
  });
}
const FilingNumberView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1756a70f"]]);

export { FilingNumberView as default };
