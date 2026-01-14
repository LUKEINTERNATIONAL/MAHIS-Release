import { q as defineComponent, an as IonItem, I as IonHeader, aD as IonContent, v as resolveComponent, N as createBlock, G as createCommentVNode, y as openBlock, B as withCtx, A as createBaseVNode, C as toDisplayString } from './vendor-DGIzCW4f.js';
import { _ as _export_sfc } from '../index-D_1ZD1MC.js';

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
