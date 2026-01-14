import { q as defineComponent, d as computed, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, bI as IonCard, B as createBaseVNode, b7 as IonCardHeader, b6 as IonCardTitle, a5 as createTextVNode, b9 as IonCardContent, br as IonPage } from './vendor-BizyHS9K.js';
import { y as StandardValidations, n as icons, T as Toolbar, C as StandardForm, F as DynamicButton, _ as _export_sfc } from '../index-B8cwm10e.js';
import { G as GoBack } from './GoBack-kx15nGF1.js';
import { u as useLocation } from './useLocation-kYwX7rx6.js';

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
          type: "standard",
          grid: { s: "4" },
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
          type: "standard",
          grid: { s: "4" },
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
          componentType: "radioButtonField",
          header: "Gender",
          name: "gender",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          grid: { s: "4" },
          options: [
            {
              label: "Male",
              value: "male"
            },
            {
              label: "Female",
              value: "female"
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
      console.log("🚀 ~ screeningForm:", screeningForm);
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

const Screening = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8452033"]]);

export { Screening as default };
