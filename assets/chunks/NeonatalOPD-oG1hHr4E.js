import { q as defineComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, bq as IonPage } from './vendor-BK8x96Ok.js';
import { T as Toolbar, _ as _export_sfc } from '../index-dAcYVh-O.js';
import { D as DemographicBar } from './DemographicBar-8WZ9gOOP.js';

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
