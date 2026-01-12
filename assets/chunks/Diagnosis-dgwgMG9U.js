import { D as DemographicBar } from './DemographicBar-DZF9AwiS.js';
import { T as Toolbar } from '../index-xpeKIrss.js';
import { q as defineComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, bH as IonCard, bq as IonPage } from './vendor-BK8x96Ok.js';
import { G as GoBack } from './GoBack-Du0bj3Bd.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-FGdKVFws.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Diagnosis",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createVNode(GoBack, {
                title: "Diagnosis",
                url: "/patientProfile",
                name: "Back to Profile"
              }),
              createVNode(unref(IonCard), { style: { "max-width": "80vw", "margin": "0 auto", "margin-top": "10px" } }, {
                default: withCtx(() => [
                  createVNode(OPDDiagnosis)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
