import { q as defineComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, E as unref, aD as IonContent, A as createBaseVNode, bs as IonPage } from './vendor-DUNDjU_C.js';
import { G as GoBack } from './GoBack-DVRjcL5x.js';
import { T as Toolbar } from '../index-DGbW3xS3.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Reports",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createVNode(GoBack),
              _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "ion-text-center" }, "Report", -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
