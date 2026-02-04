import { D as DemographicBar } from './DemographicBar-bRRJwW2a.js';
import { T as Toolbar } from '../index-HsKX6PK3.js';
import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bK as IonCard, bu as IonPage } from './vendor-CNJ0IVCn.js';
import { G as GoBack } from './GoBack-CTwkayhA.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-Bi7txZE8.js';

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
                url: "/patient-profile",
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
