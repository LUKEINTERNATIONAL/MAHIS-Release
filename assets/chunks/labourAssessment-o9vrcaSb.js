import { c as computed, v as defineComponent, z as openBlock, A as createElementBlock, B as createVNode, C as withCtx, G as unref, bc as IonCardContent, bL as IonCard, aK as useRouter, P as createBlock, aF as IonContent, D as createBaseVNode, bY as chevronBackOutline, K as Fragment, S as renderList, T as withDirectives, c3 as resolveDynamicComponent, U as vShow, bu as IonPage, f as ref } from './vendor-B3kX1Pjg.js';
import { _ as _sfc_main$2 } from './Wizard.vue_vue_type_script_setup_true_lang-CxCJzlsh.js';
import { n as icons, u as useDemographicsStore, z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, T as Toolbar, F as DynamicButton } from '../index-Chdvo7Z7.js';
import { D as DemographicBar } from './DemographicBar-BMmZa5FH.js';
import { b as _sfc_main$3, _ as _sfc_main$4, a as _sfc_main$5 } from './FirstVaginalExamination.vue_vue_type_script_setup_true_lang-DFjosZsd.js';
import { s as storeToRefs } from './pinia-DWumH6Ru.js';
import { u as useFormWizard } from './useFormWizard-tFv_fd8M.js';

const usePresentationForm = () => {
  const presentationFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "What is the Presenting Part?",
        name: "Presenting Part",
        obsValueType: "value_coded",
        type: "inline",
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
      { grid: { s: "1" } },
      {
        componentType: "inputField",
        header: "Specify Other Presenting Part",
        name: "Other Presenting Part",
        obsValueType: "value_text",
        icon: icons.editPen,
        placeholder: "Specify",
        condition: (formValues) => formValues["Presenting Part"] === "other",
        grid: { s: "11" }
      },
      { grid: { s: "1" } },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        condition: (formValues) => {
          const presenting = formValues["Presenting Part"];
          return ["breech", "face", "shoulders", "brow", "foot", "hand", "back"].includes(presenting);
        }
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
        grid: { s: "11" }
      },
      { grid: { s: "1" } },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        condition: (formValues) => formValues["Presenting Part"] === "cephalic"
      },
      { grid: { s: "1" } },
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
      { grid: { s: "1" } },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        condition: (formValues) => formValues["Presenting Part"] === "cephalic"
      },
      { grid: { s: "1" } },
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
        componentType: "Dashes",
        grid: { s: "11" },
        condition: (formValues) => formValues["Presenting Part"] === "cephalic"
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
      { grid: { s: "1" } },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        condition: (formValues) => formValues["Presenting Part"] === "cephalic"
      },
      { grid: { s: "1" } },
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
      { grid: { s: "1" } },
      {
        componentType: "Dashes",
        grid: { s: "11" },
        condition: (formValues) => formValues["Presenting Part"] === "breech"
      },
      { grid: { s: "1" } },
      {
        componentType: "radioButtonField",
        header: "Position (Breech)",
        name: "Breech Position",
        obsValueType: "value_coded",
        condition: (formValues) => formValues["Presenting Part"] === "breech",
        grid: { s: "11" },
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Presentation",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
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
                  formData: unref(presentationFormSection),
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
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
      { name: "PhysicalExamination", component: _sfc_main$3 },
      { name: "FirstVaginalExamination", component: _sfc_main$4 },
      { name: "Presentation", component: _sfc_main$1 },
      { name: "PelvicAssessment", component: _sfc_main$5 }
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
                          name: "Back",
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
