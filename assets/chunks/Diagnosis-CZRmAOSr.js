import { D as DemographicBar } from './DemographicBar-CGNAiHZ7.js';
import { T as Toolbar } from '../index-Chdvo7Z7.js';
import { v as defineComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bL as IonCard, bu as IonPage } from './vendor-B3kX1Pjg.js';
import { G as GoBack } from './GoBack-DTI2k5wT.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-AdncICYZ.js';

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
