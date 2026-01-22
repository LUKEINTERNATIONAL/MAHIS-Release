import { D as DemographicBar } from './DemographicBar-Bg981Mbl.js';
import { T as Toolbar } from '../index-h_ZjCz7k.js';
import { v as defineComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bL as IonCard, bu as IonPage } from './vendor-Cbv9TWZo.js';
import { G as GoBack } from './GoBack-DINLUxZJ.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-BeBYXni0.js';

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
