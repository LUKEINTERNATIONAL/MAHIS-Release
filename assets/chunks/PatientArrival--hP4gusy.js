import { q as defineComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, bI as IonCard, B as createBaseVNode, b7 as IonCardHeader, b6 as IonCardTitle, a5 as createTextVNode, b9 as IonCardContent, br as IonPage } from './vendor-BPW-J91F.js';
import { T as Toolbar, C as StandardForm, F as DynamicButton, _ as _export_sfc } from '../index-D7kYL7Nj.js';
import { G as GoBack } from './GoBack-Cwcfaaz1.js';

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
