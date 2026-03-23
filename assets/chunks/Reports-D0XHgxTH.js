import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aH as IonContent, C as createBaseVNode, bw as IonPage } from './vendor-CZkQjgFf.js';
import { G as GoBack } from './GoBack-C-Uybwus.js';
import { T as Toolbar } from '../index-BM8B4uT5.js';

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
