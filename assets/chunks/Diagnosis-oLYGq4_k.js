import { D as DemographicBar } from './DemographicBar-C8dvj7k4.js';
import { T as Toolbar } from '../index-CQh6ahck.js';
import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aI as IonContent, bN as IonCard, bx as IonPage } from './vendor-DdMq-dB8.js';
import { G as GoBack } from './GoBack-BN-lZQJD.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-VIbxd-qE.js';

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
