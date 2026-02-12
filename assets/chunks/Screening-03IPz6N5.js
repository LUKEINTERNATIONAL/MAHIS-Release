import { s as defineComponent, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bL as IonCard, bb as IonCardHeader, ba as IonCardTitle, a5 as createTextVNode, bd as IonCardContent, C as createBaseVNode, bu as IonPage, c as computed } from './vendor-CL0dVHZq.js';
import { T as Toolbar, z as StandardForm, F as DynamicButton, y as StandardValidations, n as icons, _ as _export_sfc } from '../index-yRu5EhmF.js';
import { G as GoBack } from './GoBack-D1rDjmyb.js';
import { u as useLocation } from './useLocation-PXbmW18q.js';

const _hoisted_1 = { class: "ion-padding ion-text-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Screening",
  setup(__props) {
    const { facilityList, getFacilities } = useLocation();
    const screeningForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Is the patient referred?",
          name: "is_referred",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "inline",
          grid: { s: "6" },
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            }
          ]
        },
        {
          componentType: "radioButtonField",
          header: "Is the situation urgent?",
          name: "is_situation_urgent",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "inline",
          grid: { s: "6" },
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            },
            {
              label: "Elective",
              value: "Elective"
            }
          ]
        },
        {
          componentType: "Alert",
          condition: async (allFormValues) => {
            if (allFormValues.is_situation_urgent == "Yes" || allFormValues.is_situation_urgent == "Elective") {
              return {
                icon: "",
                textColor: "rgb(2, 106, 162)",
                index: "",
                backgroundColor: " rgb(185, 230, 254) ",
                value: "Proceed with registration"
              };
            } else {
              return false;
            }
          }
        },
        {
          componentType: "multiSelectInputField",
          header: "Patient Referred to",
          name: "referred_to",
          trackBy: "facility_id",
          openDirection: "auto",
          icon: icons.search,
          validation: (value) => {
            return StandardValidations.required(value);
          },
          options: facilityList.value.facilities || facilityList.value,
          condition: (data) => {
            return data.is_situation_urgent == "No";
          }
        }
      ];
    });
    onMounted(async () => {
      getFacilities();
    });
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
                        default: withCtx(() => [..._cache[1] || (_cache[1] = [
                          createTextVNode("Screening", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonCardContent), null, {
                    default: withCtx(() => [
                      createVNode(StandardForm, {
                        formData: screeningForm.value,
                        ref: "formRef"
                      }, null, 8, ["formData"])
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(DynamicButton, {
                      name: "Submit",
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/home"))
                    })
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

const Screening = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd45f399"]]);

export { Screening as default };
