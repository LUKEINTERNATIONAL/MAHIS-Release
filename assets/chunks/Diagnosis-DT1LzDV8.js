import { D as DemographicBar } from './DemographicBar-45092v_o.js';
import { T as Toolbar } from '../index-DihysMBN.js';
import { v as defineComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode, G as unref, aF as IonContent, bL as IonCard, bu as IonPage } from './vendor-CJ5LqAxe.js';
import { G as GoBack } from './GoBack-C2Yc6Vuo.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-B6no9GVW.js';

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
