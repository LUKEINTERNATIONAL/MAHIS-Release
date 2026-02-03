import { D as DemographicBar } from './DemographicBar-BG10rR_u.js';
import { T as Toolbar } from '../index-Cz12Kt3o.js';
import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bK as IonCard, bu as IonPage } from './vendor-D523m2MA.js';
import { G as GoBack } from './GoBack-C2zF9r6Y.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-Dq93BaT7.js';

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
