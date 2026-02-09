import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bu as IonPage } from './vendor-CIi-jrCy.js';
import { T as Toolbar, _ as _export_sfc } from '../index-U74EcRLP.js';
import { L as LandingPage } from './LandingPage--DBBhEu3.js';

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
