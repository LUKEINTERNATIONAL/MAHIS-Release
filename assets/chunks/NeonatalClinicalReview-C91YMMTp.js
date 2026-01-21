import { v as defineComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode, G as unref, aF as IonContent, C as createBaseVNode, bu as IonPage } from './vendor-CJ5LqAxe.js';
import { T as Toolbar, _ as _export_sfc } from '../index-BBSKuWmW.js';
import { D as DemographicBar } from './DemographicBar-ORexdOz6.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalClinicalReview",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "container" }, [
                createBaseVNode("h1", null, "Clinical Review"),
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

const NeonatalClinicalReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a4e7396"]]);

export { NeonatalClinicalReview as default };
