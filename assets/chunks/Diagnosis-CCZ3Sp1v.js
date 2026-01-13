import { D as DemographicBar } from './DemographicBar-DA8a_nW9.js';
import { T as Toolbar } from '../index-NXBj2cdM.js';
import { q as defineComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, bI as IonCard, br as IonPage } from './vendor-BPW-J91F.js';
import { G as GoBack } from './GoBack-PkR4j-ek.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-DTERmpXQ.js';

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
