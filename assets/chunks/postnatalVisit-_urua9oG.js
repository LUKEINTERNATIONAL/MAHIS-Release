import { c as computed, s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, aK as useRouter, O as createBlock, aF as IonContent, C as createBaseVNode, bX as chevronBackOutline, J as Fragment, R as renderList, S as withDirectives, c2 as resolveDynamicComponent, T as vShow, bt as IonPage, f as ref } from './vendor-Wwszy5sF.js';
import { _ as _sfc_main$3 } from './Wizard.vue_vue_type_script_setup_true_lang-BZFuESOB.js';
import { z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, T as Toolbar, F as DynamicButton } from '../index-8Y6Qmz3g.js';
import { D as DemographicBar } from './DemographicBar-BCi9Zzy7.js';
import { u as useFormWizard } from './useFormWizard-BvRDETn8.js';

const useVisitForMotherForm = () => {
  const visitForMotherFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "What is the status of the mother?",
        name: "Status of the mother",
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
        componentType: "radioButtonField",
        header: "Is the postnatal check within?",
        name: "Postnatal check period",
        obsValueType: "value_coded",
        options: [
          {
            label: "Up to 48 hrs or before discharge",
            value: "up to 48 hrs or before discharge"
          },
          {
            label: "3-7 days",
            value: "3-7 days"
          },
          {
            label: "8-42 days",
            value: "8-42 days"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Does the woman have any of the danger signs?",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "None",
            value: "none"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Anemia",
            value: "anemia"
          },
          {
            label: "Postpartum hemorrhage",
            value: "postpartum hemorrhage"
          },
          {
            label: "Severe pre-eclampsia",
            value: "severe pre-eclampsia"
          },
          {
            label: "Pre-eclampsia",
            value: "pre-eclampsia"
          },
          {
            label: "Breast engorgement",
            value: "breast engorgement"
          },
          {
            label: "Other danger signs",
            value: "Other danger signs"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other danger signs notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Danger signs"]?.includes("Other danger signs");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Status of uterus",
        name: "Status of Uterus",
        obsValueType: "value_coded",
        options: [
          {
            label: "Involuted",
            value: "involuted"
          },
          {
            label: "Sub-involuted",
            value: "sub-involuted"
          },
          {
            label: "Other status",
            value: "Other status"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Status of uterus notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Status of Uterus"] === "Other status";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Was the intervention given?",
        name: "Intervention on uterus problem",
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
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Status of Uterus"] === "sub-involuted";
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention given?",
        name: "Intervention provided notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Status of Uterus"] === "sub-involuted" && allFormValues["Intervention on uterus problem"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Status of lochia",
        name: "Status of lochia",
        obsValueType: "value_coded",
        options: [
          {
            label: "Mild",
            value: "mild"
          },
          {
            label: "Moderate",
            value: "moderate"
          },
          {
            label: "Heavy",
            value: "heavy"
          },
          {
            label: "Offensive smell",
            value: "offensive smell"
          },
          {
            label: "Other status",
            value: "Other status"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Status of lochia notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Status of lochia"] === "Other status";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Was the intervention given?",
        name: "Intervention on lochia",
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
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention given?",
        name: "Intervention on lochia notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Intervention on lochia"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Episiotomy/tear present?",
        name: "Episiotomy/tear",
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
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Condition of episiotomy/tear?",
        name: "Condition of episiotomy/tear",
        obsValueType: "value_coded",
        options: [
          {
            label: "Intact",
            value: "intact"
          },
          {
            label: "Gaped",
            value: "gaped"
          },
          {
            label: "Infected",
            value: "infected"
          },
          {
            label: "Infected and gaped",
            value: "infected and gaped"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Episiotomy/tear"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Was the intervention given?",
        name: "Intervention on condition of episiotomy/tear",
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
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Episiotomy/tear"] === "Yes";
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention given?",
        name: "Other notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Episiotomy/tear"] === "Yes" && allFormValues["Intervention on condition of episiotomy/tear"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Counselling on family planning done?",
        name: "Counselling on family planning",
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
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Postpartum family planning method chosen",
        name: "Postpartum family planning method",
        obsValueType: "value_coded",
        options: [
          {
            label: "Intrauterine contraceptive device",
            value: "IUCD"
          },
          {
            label: "Bilateral tubal ligation",
            value: "BTL"
          },
          {
            label: "Oral contraception",
            value: "Oral contraception"
          },
          {
            label: "Injectable contraceptives",
            value: "Injectable contraceptives"
          },
          {
            label: "Contraceptive implant",
            value: "Contraceptive implant"
          },
          {
            label: "Intrauterine device (IUD)",
            value: "Intrauterine device (IUD)"
          },
          {
            label: "Implants",
            value: "Implants"
          },
          {
            label: "iucd-hormonal",
            value: "iucd-hormonal"
          },
          {
            label: "iucd-cooper t",
            value: "iucd-cooper t"
          },
          {
            label: "None",
            value: "none"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive" && allFormValues["Counselling on family planning"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Breast feeding?",
        name: "Breast feeding",
        obsValueType: "value_coded",
        options: [
          {
            label: "Breastfed exclusively",
            value: "Breastfed exclusively"
          },
          {
            label: "Non exclusive",
            value: "Non exclusive"
          },
          {
            label: "Not breastfeeding",
            value: "Not breastfeeding"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of the mother"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      }
    ];
  });
  return {
    visitForMotherFormSection
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VisitForMother",
  setup(__props, { expose: __expose }) {
    const { visitForMotherFormSection } = useVisitForMotherForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
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
                  "form-data": unref(visitForMotherFormSection)
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

const useVisitForBabyForm = () => {
  const visitForBabyFormSection = computed(() => {
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
        componentType: "inputField",
        header: "Current weight",
        name: "Current weight",
        obsValueType: "value_numeric",
        unit: "kg",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Current Temperature",
        name: "Temperature",
        obsValueType: "value_numeric",
        unit: "C",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Respiratory rate",
        name: "Respiratory Rate",
        obsValueType: "value_numeric",
        unit: "BMP",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Heart rate",
        name: "Heart Rate",
        obsValueType: "value_numeric",
        unit: "BMP",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Oxygen Saturation Rate",
        name: "Oxygen Saturation Rate",
        obsValueType: "value_numeric",
        unit: "%",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Is the postnatal visit within",
        name: "Postnatal visit period",
        obsValueType: "value_coded",
        options: [
          {
            label: "Up to 48 hrs or before discharge",
            value: "Up to 48 hrs or before discharge"
          },
          {
            label: "3-7 days",
            value: "3-7 days"
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
        header: "Has the baby received the following immunisations?",
        name: "Type of immunisation the baby received",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "BCG",
            value: "BCG"
          },
          {
            label: "Polio",
            value: "Polio"
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
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Type of immunisation the baby received"]?.includes("BCG");
        }
      },
      {
        componentType: "dateInputField",
        header: "Date polio given",
        name: "Date polio given",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Type of immunisation the baby received"]?.includes("Polio");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Danger signs for the child",
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
            value: "Eye discharge"
          },
          {
            label: "Signs of cord infection",
            value: "Signs of cord infection"
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
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Was an intervention given?",
        name: "Intervention on danger signs",
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
        componentType: "inputField",
        header: "Describe the intervention",
        name: "Intervention on danger signs notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Intervention on danger signs"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Has the baby started nevirapine?",
        name: "Nevirapine started",
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
        componentType: "inputField",
        header: "Why the baby is not on neverapine?",
        name: "Neverapine not started notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Nevirapine started"] === "No";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "dateInputField",
        header: "Date of Death",
        name: "Date of Death",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        grid: { s: "6" }
      },
      {
        componentType: "timeInputField",
        header: "Time of Death",
        name: "Time of Death",
        obsValueType: "value_time",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Cause of Death",
        name: "Cause of Death",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Colour of the Skin",
        name: "Colour of the Skin",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Condition of the Umbilical Cord",
        name: "Condition of the Umbilical Cord",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        }
      },
      {
        componentType: "Dashes"
      }
    ];
  });
  return {
    visitForBabyFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VisitForBaby",
  setup(__props, { expose: __expose }) {
    const { visitForBabyFormSection } = useVisitForBabyForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
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
                  "form-data": unref(visitForBabyFormSection)
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

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalVisit",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const TABS = [
      { title: "Visit For Baby", icon: "" },
      { title: "Visit For Mother", icon: "" }
    ];
    const COMPONENTS = [
      { name: "VisitForBaby", component: _sfc_main$1 },
      { name: "VisitForMother", component: _sfc_main$2 }
    ];
    const componentRefs = ref([]);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => ({
      text: isSaving.value ? "Saving..." : "Finish",
      icon: isSaving.value ? "hourglassOutline" : "checkmark",
      hideText: false,
      hideIcon: false,
      disabled: isSaving.value
    }));
    const saveData = async () => {
      isSaving.value = true;
      try {
        for (const compRef of componentRefs.value) {
          if (compRef?.onSubmit) {
            await compRef.onSubmit();
          }
        }
        router.push("/pnc/home");
      } catch (error) {
        console.error("Error saving data:", error);
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$3, {
                  ref: "wizard",
                  headingTitle: "Postnatal visit details",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": TABS,
                  onChange: unref(onChangeCurrentTab),
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("patient-profile"))
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    (openBlock(), createElementBlock(Fragment, null, renderList(COMPONENTS, (comp, index) => {
                      return withDirectives(createVNode(resolveDynamicComponent(comp.component), {
                        key: comp.name,
                        ref_for: true,
                        ref: (el) => componentRefs.value[index] = el
                      }), [
                        [vShow, unref(currentTabIndex) === index]
                      ]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["doneButton", "onChange"])
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
