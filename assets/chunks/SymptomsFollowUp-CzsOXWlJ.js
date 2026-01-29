import { c as computed, s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, f as ref, aL as useRouter, a2 as onMounted, O as createBlock, F as unref, aG as IonContent, C as createBaseVNode, bY as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-CZ_rDZM9.js';
import { _ as _sfc_main$4 } from './Wizard.vue_vue_type_script_setup_true_lang-bKFDLVeB.js';
import { z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, c5 as toastSuccess$1, T as Toolbar, F as DynamicButton } from '../index-OU0RFndh.js';
import { D as DemographicBar } from './DemographicBar-nEEZzjbl.js';
import { u as useFormWizard } from './useFormWizard-65iDpl-s.js';

const useMedicalFollowUpForm = () => {
  const medicalFollowUpForSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "What medication supplements is the woman currently taking?",
        name: "Medical follow up",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "Taking Calcium Supplement",
            value: "Taking Calcium Supplement"
          },
          {
            label: "Taking iron and folic acid (IFA) tablets",
            value: "Taking iron and folic acid (IFA) tablets"
          },
          {
            label: "Taking aspirin tablets",
            value: "Taking aspirin tablets"
          },
          {
            label: "Taking vitamin A supplements",
            value: "Taking vitamin A supplements"
          },
          {
            label: "Taking penicillin treatment for syphilis",
            value: "Taking penicillin treatment for syphilis"
          },
          {
            label: "Taking Albendazole for deworming",
            value: "Taking Albendazole for deworming"
          },
          {
            label: "Other medication",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other reason TB screening not done",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Medical follow up"]?.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Medical follow up"]?.includes("Other");
        },
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "What side effects does the woman have due to medication supplements?",
        name: "side effects",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "No side effects",
            value: "No side effects"
          },
          {
            label: "Side-effects from calcium supplements",
            value: "Side-effects from calcium supplements"
          },
          {
            label: "Side-effects from iron and folic acid supplements",
            value: "Side-effects from iron and folic acid supplements"
          },
          {
            label: "Side-effects from Aspirin supplements",
            value: "Side-effects from Aspirin supplements"
          },
          {
            label: "Side-effects from Vitamin A supplements",
            value: "Side-effects from Vitamin A supplements"
          },
          {
            label: "Side-effects from Penicillin",
            value: "Side-effects from Penicillin"
          },
          {
            label: "Side-effects from Albendazole",
            value: "Side-effects from Albendazole"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other reason TB screening not done",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["side effects"]?.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["side effects"]?.includes("Other");
        },
        grid: { s: "12" }
      }
    ];
  });
  return {
    medicalFollowUpForSection
  };
};

const _hoisted_1$3 = { class: "container" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MedicalFollowUp",
  setup(__props, { expose: __expose }) {
    const composable = useMedicalFollowUpForm();
    const formRef = ref(null);
    const medicalFollowUpForm = computed(() => {
      return composable.medicalFollowUpForSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.FOLLOW_UP)) toastSuccess("Medical Follow Up data saved successfully");
      formRef.value?.resetForm();
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": medicalFollowUpForm.value
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

const MedicalFollowUp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bddc28d2"]]);

const usePersistentbehavioursForm = () => {
  const persistentbehavioursForm = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "What persistent behaviour does the woman has?",
        name: "Abnormal bizzarre behaviour",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "No persistent behaviours",
            value: "No persistent behaviours"
          },
          {
            label: "High caffeine intake",
            value: "High caffeine intake"
          },
          {
            label: "Tobacco use",
            value: "Tobacco use"
          },
          {
            label: "Recently quit tobacco products",
            value: "Recently quit tobacco products"
          },
          {
            label: "Exposure to second-hand smoke",
            value: "Exposure to second-hand smoke"
          },
          {
            label: "Condom use",
            value: "Condom use"
          },
          {
            label: "Alcohol use",
            value: "Alcohol use"
          },
          {
            label: "Substance use",
            value: "Substance use"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other reason TB screening not done",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Abnormal bizzarre behaviour"]?.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Abnormal bizzarre behaviour"]?.includes("Other");
        },
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "What persistent and Physiological symptoms does the woman has?",
        name: "Persistent Symptom",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "Leg cramps",
            value: "Leg cramps"
          },
          {
            label: "Visual disturbance",
            value: "Visual disturbance"
          },
          {
            label: "Constipation",
            value: "Constipation"
          },
          {
            label: "Headache",
            value: "Headache"
          },
          {
            label: "Heartburn",
            value: "Heartburn"
          },
          {
            label: "Pain-Leg",
            value: "Pain-Leg"
          },
          {
            label: "Breathing difficulty",
            value: "Breathing difficulty"
          },
          {
            label: "Cough lasting more than 3 weeks",
            value: "Cough lasting more than 3 weeks"
          },
          {
            label: "Pelvic pain",
            value: "Pelvic pain"
          },
          {
            label: "Pain - Low back",
            value: "Pain - Low back"
          },
          {
            label: "Abnormal pulse rate",
            value: "Abnormal pulse rate"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other reason TB screening not done",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Persistent Symptom"]?.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Persistent Symptom"]?.includes("Other");
        },
        grid: { s: "12" }
      }
    ];
  });
  return {
    persistentbehavioursForm
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PersistentBehaviour",
  setup(__props, { expose: __expose }) {
    const composable = usePersistentbehavioursForm();
    const formRef = ref(null);
    const persistentbehavioursForm = computed(() => {
      return composable.persistentbehavioursForm.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.FOLLOW_UP))
        toastSuccess("Persistent Behaviour and Symptoms data saved successfully");
      formRef.value?.resetForm();
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": persistentbehavioursForm.value
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

const PersistentBehaviour = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f751d0fa"]]);

const useIpvForm = () => {
  const ipvForm = computed(() => {
    return [
      {
        componentType: "checkboxField",
        name: "IPV Status",
        type: "multiple",
        value: [],
        twoColumns: true,
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "8" },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "Injury to abdomen",
            value: "Injury to abdomen"
          },
          {
            label: "Partner's intrusive during consultations",
            value: "Partner's intrusive during consultations"
          },
          {
            label: "Misuse of alcohol",
            value: "Misuse of alcohol"
          },
          {
            label: "Unspecified Harmful Behaviours",
            value: "Unspecified Harmful Behaviours"
          },
          {
            label: "Thoughts of self-harm",
            value: "Thoughts of self-harm"
          },
          {
            label: "Unwanted pregnancies",
            value: "Unwanted pregnancies"
          },
          {
            label: "Misuse of drugs",
            value: "Misuse of drugs"
          },
          {
            label: "Ongoing stress",
            value: "Ongoing stress"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Intimate partner firstline support provided?",
        name: "intimateInfo",
        value: [],
        type: "inline",
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "What additional care provided?",
        name: "additional care provided",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "No action necessary",
            value: "no action necessary"
          },
          {
            label: "Safety assessment conducted",
            value: "safety assessment conducted"
          },
          {
            label: "Mental health care",
            value: "mental health care"
          },
          {
            label: "Care for other presenting signs and symptoms",
            value: "care for other presenting signs and symptoms"
          },
          {
            label: "Client was referred",
            value: "client was referred"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Safety assessment conducted?",
        name: "Safety assessment",
        value: [],
        type: "inline",
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Has the physical violence happened more often or gotten worse over the past 6 months?",
        name: "physical violence",
        value: [],
        type: "inline",
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Has he ever beaten you when you were pregnant?",
        name: "beaten when pregnant",
        value: [],
        type: "inline",
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Has he ever threatened you with a weapon?",
        name: "threatened with a weapon",
        value: [],
        type: "inline",
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Is he violently and constantly jealous of you?",
        name: "violently and constantly jealous",
        value: [],
        type: "inline",
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Has he ever tried to strangle you?",
        name: "tried to strangle",
        type: "inline",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Do you believe he could kill you?",
        name: "he could kill you",
        value: [],
        obsValueType: "value_coded",
        type: "inline",
        grid: { xs: "12", sm: "12" },
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
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Referrals made as part of first-line support?",
        name: "first-line support",
        type: "multiple",
        twoColumns: true,
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "None",
            value: "None",
            exclusive: true
          },
          {
            label: "Care at another facility",
            value: "care at another facility"
          },
          {
            label: "Police",
            value: "police"
          },
          {
            label: "Shelter or housing",
            value: "shelter or housing"
          },
          {
            label: "Child protection",
            value: "child protection"
          },
          {
            label: "Livelihood support",
            value: "livelihood support"
          },
          {
            label: "Crisis intervention or counselling",
            value: "crisis intervention or counselling"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    ipvForm
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Ipv",
  setup(__props, { expose: __expose }) {
    const composable = useIpvForm();
    const formRef = ref(null);
    const ipvForm = computed(() => {
      return composable.ipvForm.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.FOLLOW_UP))
        toastSuccess$1("Intimate partner violence (IPV) data saved successfully");
      formRef.value?.resetForm();
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
                  "form-data": ipvForm.value
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

const Ipv = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7fb9fd98"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SymptomsFollowUp",
  setup(__props) {
    const router = useRouter();
    const medicalFollowUpRef = ref(null);
    const persistentBehaviourRef = ref(null);
    const ipvRef = ref(null);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const openBackController = () => {
      router.push("/anc/home");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Medical Follow-up",
          icon: ""
        },
        {
          title: "Persistent Behaviour and Symptoms",
          icon: ""
        },
        {
          title: "Intimate partner violence (IPV)",
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
        case "Medical Follow-up":
          return "MedicalFollowUp";
        case "Persistent Behaviour and Symptoms":
          return "PersistentBehaviour";
        case "Intimate partner violence (IPV)":
          return "Ipv";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [{ ref: medicalFollowUpRef }, { ref: persistentBehaviourRef }, { ref: ipvRef }];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error(`Error calling  onSubmit:`, error);
          }
        }
      }
      router.push("/anc/home");
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
                createVNode(_sfc_main$4, {
                  ref: "wizard",
                  headingTitle: "Symptoms and Follow Up",
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
                      createVNode(MedicalFollowUp, {
                        ref_key: "medicalFollowUpRef",
                        ref: medicalFollowUpRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "MedicalFollowUp"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PersistentBehaviour, {
                        ref_key: "persistentBehaviourRef",
                        ref: persistentBehaviourRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PersistentBehaviour"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Ipv, {
                        ref_key: "ipvRef",
                        ref: ipvRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Ipv"]
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
