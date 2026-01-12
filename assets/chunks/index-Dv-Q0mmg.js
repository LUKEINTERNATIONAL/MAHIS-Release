import { q as defineComponent, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, B as createBaseVNode, E as unref, bq as IonPage } from './vendor-BK8x96Ok.js';
import { T as Toolbar, _ as _export_sfc } from '../index-dAcYVh-O.js';

const _hoisted_1 = { class: "reports-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_router_view)
          ])
        ]),
        _: 1
      });
    };
  }
});

const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93c3569a"]]);

export { index as default };
