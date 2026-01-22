import { v as defineComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bL as IonCard, ba as IonCardHeader, b9 as IonCardTitle, a6 as createTextVNode, bc as IonCardContent, D as createBaseVNode, bu as IonPage } from './vendor-Cbv9TWZo.js';
import { n as icons, T as Toolbar, z as StandardForm, F as DynamicButton, _ as _export_sfc } from '../index-BlafVMNh.js';
import { G as GoBack } from './GoBack-Bq7XwCdN.js';

const _hoisted_1 = { class: "ion-padding ion-float-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContinuationSheet",
  setup(__props) {
    const patientArrivalForm = [
      {
        componentType: "textAreaField",
        header: "Notes",
        name: "notes",
        icon: icons.editPen
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(GoBack, {
                title: "Diagnosis",
                url: "/patient-profile",
                name: "Back to Profile"
              }),
              createVNode(unref(IonCard), { class: "patient-arrival-card" }, {
                default: withCtx(() => [
                  createVNode(unref(IonCardHeader), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardTitle), null, {
                        default: withCtx(() => [..._cache[0] || (_cache[0] = [
                          createTextVNode("Continuation Sheet", -1)
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

const ContinuationSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16ae3e2e"]]);

export { ContinuationSheet as default };
