import { q as defineComponent, aH as useRouter, r as ref, d as computed, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, S as withDirectives, bW as chevronBackOutline, T as vShow, br as IonPage } from './vendor-BPW-J91F.js';
import { u as useFormWizard, _ as _sfc_main$1 } from './useFormWizard-BSv7DK6Z.js';
import { T as Toolbar, F as DynamicButton } from '../index-BaBlba8w.js';
import { D as DemographicBar } from './DemographicBar-BDWGIBUX.js';
import { M as MedicalFollowUp, P as PersistentBehaviour, I as Ipv } from './Ipv-Bi0eWwl1.js';

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "symptomsFollowUp",
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
                createVNode(_sfc_main$1, {
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
