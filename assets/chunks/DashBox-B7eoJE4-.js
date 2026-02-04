import { s as defineComponent, aq as IonItem, I as IonHeader, aG as IonContent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, D as toDisplayString, H as createCommentVNode } from './vendor-CNJ0IVCn.js';
import { _ as _export_sfc } from '../index-CMNG45JS.js';

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem
  },
  data() {
    return {};
  },
  props: {
    status: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ""
    }
  },
  methods: {}
});

const _hoisted_1 = { class: "dash_box" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_row = resolveComponent("ion-row");
  return _ctx.status ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
    default: withCtx(() => [
      createBaseVNode("span", _hoisted_1, toDisplayString(_ctx.content), 1)
    ]),
    _: 1
  })) : createCommentVNode("", true);
}
const DashBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { DashBox as D };
