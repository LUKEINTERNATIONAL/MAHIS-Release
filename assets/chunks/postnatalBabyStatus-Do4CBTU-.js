import { c as computed, s as defineComponent, aL as useRouter, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, C as createBaseVNode, bf as IonFooter, bu as IonPage, f as ref } from './vendor-DoVhRvhx.js';
import { T as Toolbar, z as StandardForm, F as DynamicButton, _ as _export_sfc } from '../index-Dh01XRoO.js';
import { D as DemographicBar } from './DemographicBar-DnUX-7zM.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-DAWuxDrW.js';
import { u as useFormWizard } from './useFormWizard-EXvNEIAn.js';

const useBabyStatusDetailsForm = () => {
  const babyStatusDetailsFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "What is the status of the baby?",
        name: "Status of baby",
        obsValueType: "value_coded",
        options: [
          {
            label: "Alive",
            value: "Alive"
          },
          {
            label: "Dead",
            value: "Dead"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Slot",
        slotName: "findBabyPatient"
      },
      {
        componentType: "inputField",
        header: "Full name of the baby",
        name: "Full name of the baby",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Baby sex?",
        name: "Sex",
        obsValueType: "value_coded",
        options: [
          {
            label: "Male",
            value: "Male"
          },
          {
            label: "Female",
            value: "Female"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Birth weight",
        name: "Weight",
        obsValueType: "value_numeric",
        unit: "Grams",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Current weight",
        name: "Current weight",
        obsValueType: "value_numeric",
        unit: "Grams",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Is the birth weight low?",
        name: "Low birth weight",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Prematurity/Kangaroo?",
        name: "Prematurity/Kangaroo",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "What is the condition at birth?",
        name: "Birth condition",
        obsValueType: "value_coded",
        options: [
          {
            label: "Very well",
            value: "Very well"
          },
          {
            label: "Asphyxia",
            value: "Asphyxia"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Resuscitation tempted",
        name: "Resuscitation attempt",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Birth condition"] === "Asphyxia";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Is the visit within",
        name: "Is the visit within",
        obsValueType: "value_coded",
        options: [
          {
            label: "Up to 48 hrs or before discharge",
            value: "Up to 48 hrs or before discharge"
          },
          {
            label: "2-7 days",
            value: "2-7 days"
          },
          {
            label: "8-42 days",
            value: "8-42 days"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "What type immunisation has been given?",
        name: "Immunisation given",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "BCG",
            value: "bcg"
          },
          {
            label: "Polio",
            value: "polio"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "dateInputField",
        header: "Date BCG given",
        name: "Date BCG given",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Immunisation given"]?.includes("bcg");
        }
      },
      {
        componentType: "dateInputField",
        header: "Date polio given",
        name: "Date polio given",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Immunisation given"]?.includes("polio");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Tetracycline eye ointment given?",
        name: "Tetracycline eye ointment",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Cord care (Chlorhexidine) used?",
        name: "Cord care",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Vitamin K given?",
        name: "Vitamin K given",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Danger signs",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "None",
            value: "none"
          },
          {
            label: "Not able to feed",
            value: "not able to feed"
          },
          {
            label: "Fever (>37.5C)",
            value: "fever"
          },
          {
            label: "Hypothermia",
            value: "Hypothermia"
          },
          {
            label: "Convulsions",
            value: "convulsions"
          },
          {
            label: "Lethargic",
            value: "lethargic"
          },
          {
            label: "Chest in-drawing",
            value: "chest in-drawing"
          },
          {
            label: "Fast breathing",
            value: "fast breathing"
          },
          {
            label: "Eye discharge",
            value: "eye discharge"
          },
          {
            label: "Signs of cord infection",
            value: "signs of cord infection"
          },
          {
            label: "Jaundice",
            value: "jaundice"
          },
          {
            label: "Skin rashes",
            value: "skin rashes"
          },
          {
            label: "Other danger signs",
            value: "Other danger signs"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other danger signs notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Danger signs"]?.includes("Other danger signs");
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention",
        name: "Intervention notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Danger signs"]?.includes("none");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Nevirapine given?",
        name: "Nevirapine given",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Cotrimoxazole prophylaxis?",
        name: "Cotrimoxazole prophylaxis",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      }
    ];
  });
  return {
    babyStatusDetailsFormSection
  };
};

const _hoisted_1 = {
  class: "custom-card",
  style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px" }
};
const _hoisted_2 = { class: "ion-padding ion-float-start" };
const _hoisted_3 = { class: "ion-padding ion-float-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalBabyStatus",
  setup(__props) {
    useRouter();
    const postnatalBabyStatusRef = ref(null);
    const { babyStatusDetailsFormSection } = useBabyStatusDetailsForm();
    const { currentTabIndex } = useFormWizard();
    const getActiveTabs = () => {
      return [
        {
          title: "Reason For Visit",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    onMounted(async () => {
      tabs.value = getActiveTabs();
      currentTabIndex.value = 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px", "text-align": "center" } }, "Monitor Baby", -1)),
              createBaseVNode("div", _hoisted_1, [
                createVNode(StandardForm, {
                  ref_key: "postnatalBabyStatusRef",
                  ref: postnatalBabyStatusRef,
                  "form-data": unref(babyStatusDetailsFormSection)
                }, {
                  findBabyPatient: withCtx(({ formValues, updateValue }) => [
                    createVNode(FindRegisterPatient)
                  ]),
                  _: 1
                }, 8, ["form-data"])
              ])
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(DynamicButton, {
                  color: "dark",
                  name: "back"
                })
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(DynamicButton, { name: "Next ->" })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const postnatalBabyStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31d8ab3e"]]);

export { postnatalBabyStatus as default };
