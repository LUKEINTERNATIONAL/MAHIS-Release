import { q as defineComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, br as IonPage } from './vendor-BPW-J91F.js';
import { T as Toolbar, _ as _export_sfc } from '../index-VhmzLedw.js';
import { D as DemographicBar } from './DemographicBar-CY0bSNwj.js';

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
