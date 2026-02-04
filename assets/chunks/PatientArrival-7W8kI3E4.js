import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bK as IonCard, bb as IonCardHeader, ba as IonCardTitle, a5 as createTextVNode, bd as IonCardContent, C as createBaseVNode, bu as IonPage } from './vendor-D523m2MA.js';
import { T as Toolbar, z as StandardForm, F as DynamicButton, _ as _export_sfc } from '../index-BC57Ea8s.js';
import { G as GoBack } from './GoBack-Ai9SkIlY.js';

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
