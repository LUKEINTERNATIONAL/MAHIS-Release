import { d as computed, q as defineComponent, r as ref, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx, aH as useRouter, a2 as onMounted, O as createBlock, E as unref, H as IonContent, B as createBaseVNode, S as withDirectives, bW as chevronBackOutline, T as vShow, br as IonPage } from './vendor-BPW-J91F.js';
import { u as useFormWizard, _ as _sfc_main$2 } from './useFormWizard-BSv7DK6Z.js';
import { C as StandardForm, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-D7kYL7Nj.js';
import { D as DemographicBar } from './DemographicBar-BztRNJUy.js';
import { a as UltrasoundScan, U as UrineTest, T as TBTest } from './TB-BsXZHGi6.js';

const useLabInvestigationForm = () => {
  const labInvestigationFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Pregnancy Test Result",
        name: "Pregnancy status",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Urine Protein",
        name: "Urine Protein",
        obsValueType: "value_coded",
        options: [
          {
            label: "+",
            value: "+"
          },
          {
            label: "++",
            value: "++"
          },
          {
            label: "+++",
            value: "+++"
          },
          {
            label: "++++",
            value: "++++"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Hb(g/dL)",
        name: "Hb(g/dL)",
        obsValueType: "value_coded",
        options: [
          {
            label: "normal range 11-14 g/dL",
            value: "normal range 11-14 g/dL"
          },
          {
            label: "below normal 10.9 g/d is anemia",
            value: "below normal 10.9 g/d is anemia"
          },
          {
            label: "Not Done",
            value: "Not Done"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Malaria Test (Test Type)",
        name: "Malaria Test",
        obsValueType: "value_coded",
        options: [
          {
            label: "mRDT",
            value: "MRDT"
          },
          {
            label: "Malaria Parasite",
            value: "Malaria Parasite"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "mRDT results",
        name: "mRDT results",
        condition: (allFormValues) => {
          return allFormValues["Malaria Test"] == "MRDT";
        },
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Inconclusive",
            value: "Inconclusive"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Malaria Parasites Result",
        name: "Malaria Parasites Result",
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Malaria Test"] == "Malaria Parasite";
        },
        options: [
          {
            label: "Number of malarial parasites",
            value: "Number of malarial parasites"
          },
          {
            label: "No malarial parasites",
            value: "No malarial parasites"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Syphilis Test Result",
        name: "Syphilis Test Result",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Hepatitis B",
        name: "Hepatitis B",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "HIV Test",
        name: "HIV Test",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "Not Done",
            value: "Not Done"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Blood group rhesus factor",
        name: "Blood group rhesus factor",
        obsValueType: "value_coded",
        options: [
          {
            label: "rhesus positive",
            value: "rhesus positive"
          },
          {
            label: "rhesus negative",
            value: "rhesus negative"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Random Blood Sugar (RBS)",
        name: "Random Blood Sugar",
        obsValueType: "value_coded",
        options: [
          {
            label: "> 60 - 125mg/dl (Normal)",
            value: "> 60 - 125mg/dl (Normal)"
          },
          {
            label: "< 59mg/dl (Hypoglycemia)",
            value: "< 59mg/dl (Hypoglycemia)"
          },
          {
            label: "> 126mg/dl (Hyperglycemia)",
            value: "< 126mg/dl (Hyperglycemia)"
          }
        ]
      }
    ];
  });
  return {
    labInvestigationFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabInvestigation",
  setup(__props, { expose: __expose }) {
    const composable = useLabInvestigationForm();
    const formRef = ref(null);
    const labInvestigationForm = computed(() => {
      return composable.labInvestigationFormSection.value;
    });
    const onSubmit = async () => {
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": labInvestigationForm.value
                }, null, 8, ["form-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabInvestigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0e494707"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ANCLabTests",
  setup(__props) {
    const router = useRouter();
    const UltrasoundScanRef = ref(null);
    const UrineTestRef = ref(null);
    const TBTestRef = ref(null);
    const LabInvestigationRef = ref(null);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglass-outline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const openBackController = () => {
      router.push("contact");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Lab Investigations",
          icon: ""
        },
        {
          title: "Ultrasound Scan",
          icon: ""
        },
        {
          title: "Urine Test",
          icon: ""
        },
        {
          title: "TB Test",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const currentTab = tabs.value[currentTabIndex.value]?.title;
      switch (currentTab) {
        case "Lab Investigations":
          return "LabInvestigation";
        case "Ultrasound Scan":
          return "UltrasoundScan";
        case "Urine Test":
          return "UrineTest";
        case "TB Test":
          return "TBTest";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [
        {
          ref: UltrasoundScanRef
        },
        { ref: UrineTestRef },
        { ref: TBTestRef },
        { ref: LabInvestigationRef }
      ];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error(`Error calling  onSubmit:`, error);
          }
        }
      }
      router.push("contact");
    };
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
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$2, {
                  ref: "wizard",
                  headingTitle: "Lab test and imaging",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  onChange: unref(onChangeCurrentTab),
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(UltrasoundScan, {
                        ref_key: "UltrasoundScanRef",
                        ref: UltrasoundScanRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "UltrasoundScan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(UrineTest, {
                        ref_key: "UrineTestRef",
                        ref: UrineTestRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "UrineTest"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(TBTest, {
                        ref_key: "TBTestRef",
                        ref: TBTestRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "TBTest"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabInvestigation, {
                        ref_key: "LabInvestigationRef",
                        ref: LabInvestigationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabInvestigation"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "onChange"])
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

export { _sfc_main as default };
