import { v as defineComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bL as IonCard, ba as IonCardHeader, b9 as IonCardTitle, a6 as createTextVNode, bc as IonCardContent, D as createBaseVNode, bu as IonPage } from './vendor-B3kX1Pjg.js';
import { T as Toolbar, z as StandardForm, F as DynamicButton, _ as _export_sfc } from '../index-BDC92_36.js';
import { G as GoBack } from './GoBack-w9fPpa2h.js';

const _hoisted_1 = { class: "ion-padding ion-text-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PatientArrival",
  setup(__props) {
    const patientArrivalForm = [
      {
        type: "input",
        header: "First name",
        name: "given_name",
        componentType: "inputField"
      },
      {
        type: "input",
        header: "Last name",
        name: "family_name",
        componentType: "inputField"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(GoBack),
              createVNode(unref(IonCard), { class: "patient-arrival-card" }, {
                default: withCtx(() => [
                  createVNode(unref(IonCardHeader), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardTitle), { class: "ion-text-center" }, {
                        default: withCtx(() => [..._cache[0] || (_cache[0] = [
                          createTextVNode("Patient Arrival", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonCardContent), null, {
                    default: withCtx(() => [
                      createVNode(StandardForm, {
                        formData: patientArrivalForm,
                        ref: "formRef"
                      }, null, 512)
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(DynamicButton, { name: "Submit" })
                  ])
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

const PatientArrival = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b923edaf"]]);

export { PatientArrival as default };
