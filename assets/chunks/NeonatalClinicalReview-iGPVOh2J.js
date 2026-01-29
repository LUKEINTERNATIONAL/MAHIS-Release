import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, C as createBaseVNode, bu as IonPage } from './vendor-CZ_rDZM9.js';
import { T as Toolbar, _ as _export_sfc } from '../index-OU0RFndh.js';
import { D as DemographicBar } from './DemographicBar-D5wQZjc2.js';

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
