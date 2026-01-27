import { v as defineComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bu as IonPage } from './vendor-B3kX1Pjg.js';
import { T as Toolbar, _ as _export_sfc } from '../index-BDC92_36.js';
import { L as LandingPage } from './LandingPage-BGcu19N0.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalHome",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(LandingPage)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const NeonatalHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-052dae1c"]]);

export { NeonatalHome as default };
