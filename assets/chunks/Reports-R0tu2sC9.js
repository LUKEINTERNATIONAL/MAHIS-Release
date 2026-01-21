import { v as defineComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode, G as unref, aF as IonContent, C as createBaseVNode, bu as IonPage } from './vendor-CJ5LqAxe.js';
import { G as GoBack } from './GoBack-C2Yc6Vuo.js';
import { T as Toolbar } from '../index-DihysMBN.js';

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
