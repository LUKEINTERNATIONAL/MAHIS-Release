import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aF as IonContent, C as createBaseVNode, bt as IonPage } from './vendor-Wwszy5sF.js';
import { T as Toolbar, _ as _export_sfc } from '../index-8Y6Qmz3g.js';
import { D as DemographicBar } from './DemographicBar-Ceso7Sr9.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalFeeding",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "container" }, [
                createBaseVNode("h1", null, "Neonatal Feeding Management"),
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

const NeonatalFeeding = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-747198be"]]);

export { NeonatalFeeding as default };
