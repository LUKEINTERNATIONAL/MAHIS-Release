import { q as defineComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, E as unref, aD as IonContent, A as createBaseVNode, bs as IonPage } from './vendor-DUNDjU_C.js';
import { T as Toolbar, _ as _export_sfc } from '../index-77Br-hAb.js';
import { D as DemographicBar } from './DemographicBar-DKkd57GD.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalOPD",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "container" }, [
                createBaseVNode("h1", null, "Neonatal OPD"),
                createBaseVNode("p", null, "This page is under development.")
              ], -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const NeonatalOPD = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-320174b2"]]);

export { NeonatalOPD as default };
