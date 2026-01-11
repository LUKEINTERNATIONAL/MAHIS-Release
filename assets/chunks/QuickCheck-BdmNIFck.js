import { q as defineComponent, aF as useRouter, r as ref, d as computed, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, S as withDirectives, bV as chevronBackOutline, T as vShow, bq as IonPage } from './vendor-Cy_N32Zh.js';
import { u as useFormWizard, _ as _sfc_main$1 } from './useFormWizard-t34pEOVg.js';
import { T as Toolbar, F as DynamicButton, _ as _export_sfc } from '../index-B2p2mVqz.js';
import { D as DemographicBar } from './DemographicBar-D4yrFrYp.js';
import { _ as _sfc_main$2 } from './ReasonForVisit.vue_vue_type_script_setup_true_lang-B4jdQHAu.js';

const _hoisted_1 = { class: "wizard-container" };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuickCheck",
  setup(__props) {
    const router = useRouter();
    const reasonForVisitRef = ref(null);
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
      router.push("PatientProfile");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Reason For Visit",
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
        case "Reason For Visit":
          return "ReasonForVisit";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [{ ref: reasonForVisitRef }];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error(`Error calling  onSubmit:`, error);
          }
        }
      }
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
                createVNode(_sfc_main$1, {
                  ref: "wizard",
                  headingTitle: "Quick Check",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  showWizard: false,
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
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$2, {
                        ref_key: "reasonForVisitRef",
                        ref: reasonForVisitRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ReasonForVisit"]
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

const QuickCheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41045d0f"]]);

export { QuickCheck as default };
