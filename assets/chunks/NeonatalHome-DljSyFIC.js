import { q as defineComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, E as unref, aD as IonContent, bs as IonPage } from './vendor-Dvd0YFIr.js';
import { T as Toolbar, _ as _export_sfc } from '../index-BQO1lu0i.js';
import { L as LandingPage } from './LandingPage-C_8AgS7T.js';

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
