import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bd as IonCardContent, C as createBaseVNode, D as toDisplayString, bK as IonCard, aL as useRouter, O as createBlock, aG as IonContent, bX as chevronBackOutline, J as Fragment, R as renderList, S as withDirectives, c1 as resolveDynamicComponent, T as vShow, bu as IonPage, f as ref } from './vendor-C-pvji42.js';
import { _ as _sfc_main$2, u as useFormWizard } from './useFormWizard-B09TT7Ov.js';
import { n as icons, u as useDemographicsStore, z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-Bs77YW3d.js';
import { D as DemographicBar } from './DemographicBar-D3n-h3Qm.js';
import { P as PhysicalExamination, F as FirstVaginalExamination, _ as _sfc_main$3 } from './FirstVaginalExamination-ClWJDUii.js';
import { s as storeToRefs } from './pinia-DuETIfNk.js';

const usePresentationForm = () => {
  const presentationFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "What is the Presenting Part?",
        name: "Presenting Part",
        obsValueType: "value_coded",
        options: [
          {
            label: "Cephalic",
            value: "cephalic"
          },
          {
            label: "Breech",
            value: "breech"
          },
          {
            label: "Face",
            value: "face"
          },
          {
            label: "Shoulders",
            value: "shoulders"
          },
          {
            label: "Brow",
            value: "brow"
          },
          {
            label: "Foot",
            value: "foot"
          },
          {
            label: "Hand",
            value: "hand"
          },
          {
            label: "Back",
            value: "back"
          },
          {
            label: "Cord",
            value: "cord"
          },
          {
            label: "Compound",
            value: "compound"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        componentType: "Slot",
        slotName: "presentation_Part",
        name: "Presentation Part Image",
        condition: (formValues) => {
          const presenting = formValues["Presenting Part"];
          return ["cephalic", "breech", "other"].includes(presenting);
        }
      },
      {
        componentType: "inputField",
        header: "Specify Other Presenting Part",
        name: "Other Presenting Part",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Presenting Part"] === "other",
        grid: { s: "6", md: "12" }
      },
      { grid: { s: "1" } },
      {
        componentType: "Alert",
        header: "Multidisciplinary Team Alert",
        message: "Prepare and involve a multidisciplinary team on mode of delivery",
        removeConditionAlert: true,
        backgroundColor: "#FEDF89",
        textColor: "#B54708",
        condition: (formValues) => {
          const presenting = formValues["Presenting Part"];
          return ["breech", "face", "shoulders", "brow", "foot", "hand", "back"].includes(presenting);
        },
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Position (Cephalic)",
        name: "Cephalic Position",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presenting Part"] === "cephalic",
        grid: { s: "11" },
        options: [
          {
            label: "Left occiput anterior (LOA)",
            value: "loa"
          },
          {
            label: "Right occiput anterior (ROA)",
            value: "roa"
          },
          {
            label: "Left occiput transverse (LOT)",
            value: "lot"
          },
          {
            label: "Right occiput transverse (ROT)",
            value: "rot"
          },
          {
            label: "Left occiput posterior (LOP)",
            value: "lop"
          },
          {
            label: "Right occiput posterior (ROP)",
            value: "rop"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Level in relation to ischial spines",
        name: "Level in relation to ischial spines",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presenting Part"] === "cephalic",
        grid: { s: "11" },
        options: [
          {
            label: "Below",
            value: "below"
          },
          {
            label: "Above",
            value: "above"
          },
          {
            label: "On level",
            value: "on_level"
          }
        ]
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Caput",
        name: "Caput",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presenting Part"] === "cephalic",
        grid: { s: "11" },
        options: [
          {
            label: "Nil",
            value: "nil"
          },
          {
            label: "Mild",
            value: "mild"
          },
          {
            label: "Moderate",
            value: "moderate"
          },
          {
            label: "Severe",
            value: "severe"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Moulding",
        name: "Moulding",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presenting Part"] === "cephalic",
        grid: { s: "11" },
        options: [
          {
            label: "+",
            value: "plus_one"
          },
          {
            label: "++",
            value: "plus_two"
          },
          {
            label: "+++",
            value: "plus_three"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Position (Breech)",
        name: "Breech Position",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presenting Part"] === "breech",
        options: [
          {
            label: "Left Sacral anterior (LSA)",
            value: "lsa"
          },
          {
            label: "Right Sacral anterior (RSA)",
            value: "rsa"
          },
          {
            label: "Left Sacral Transverse (LST)",
            value: "lst"
          },
          {
            label: "Right Sacral Transverse (RST)",
            value: "rst"
          },
          {
            label: "Left Sacral Posterior (LSP)",
            value: "lsp"
          },
          {
            label: "Right Sacral Posterior (RSP)",
            value: "rsp"
          }
        ]
      }
    ];
  });
  return {
    presentationFormSection
  };
};

const _hoisted_1$1 = { class: "section-subtitle" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Presentation",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const capitalizeWords = (str) => {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    const { formRef } = useExposeFromStandardForm();
    const { presentationFormSection } = usePresentationForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const result = await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT);
      if (!result) return;
      toastSuccess("Presentation successfully saved.");
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(IonCard), { style: { "contain": "unset" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Presentation",
                  formData: unref(presentationFormSection),
                  ref_key: "formRef",
                  ref: formRef
                }, {
                  presentation_Part: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, toDisplayString(capitalizeWords(unref(formRef).getFormValues()?.["Presenting Part"] || "")), 1)
                  ]),
                  _: 1
                }, 8, ["formData"])
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

const Presentation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9477e935"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labourAssessment",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const TABS = [
      { title: "Physical Examination", icon: "" },
      { title: "First Vaginal Examination", icon: "" },
      { title: "Presentation", icon: "" },
      { title: "Pelvic Assessment", icon: "" }
    ];
    const COMPONENTS = [
      { name: "PhysicalExamination", component: PhysicalExamination },
      { name: "FirstVaginalExamination", component: FirstVaginalExamination },
      { name: "Presentation", component: Presentation },
      { name: "PelvicAssessment", component: _sfc_main$3 }
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
        router.push("/anc/home");
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
                createVNode(_sfc_main$2, {
                  ref: "wizard",
                  headingTitle: "Labour assessment",
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
                          name: "Back to Labour Home",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/labour/home"))
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
