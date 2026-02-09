import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, C as createBaseVNode, bu as IonPage } from './vendor-CIi-jrCy.js';
import { T as Toolbar, _ as _export_sfc } from '../index-CPakPmy3.js';
import { D as DemographicBar } from './DemographicBar-B3ATVARf.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalAssessment",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "container" }, [
                createBaseVNode("h1", null, "Neonatal Assessment"),
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

const NeonatalAssessment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a25b20e1"]]);

export { NeonatalAssessment as default };
