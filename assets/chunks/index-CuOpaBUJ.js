import { q as defineComponent, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, A as createBaseVNode, E as unref, bs as IonPage } from './vendor-DUNDjU_C.js';
import { T as Toolbar, _ as _export_sfc } from '../index-cEgpSt1H.js';

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
