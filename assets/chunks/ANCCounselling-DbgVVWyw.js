import { q as defineComponent, aH as useRouter, r as ref, d as computed, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, S as withDirectives, bW as chevronBackOutline, T as vShow, br as IonPage } from './vendor-BPW-J91F.js';
import { u as useFormWizard, _ as _sfc_main$1 } from './useFormWizard-BSv7DK6Z.js';
import { T as Toolbar, F as DynamicButton } from '../index-D7kYL7Nj.js';
import { D as DemographicBar } from './DemographicBar-BztRNJUy.js';
import { B as BehaviourCounselling, a as PhysiologicalCounseling, D as DietCounselling, C as ClinicalCounselling, P as PreventativeCounselling } from './ClinicalCounselling-cPJlrQoT.js';

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ANCCounselling",
  setup(__props) {
    const router = useRouter();
    const behaviourCounsellingRef = ref(null);
    const physiologicalCounselingRef = ref(null);
    const dietCounsellingRef = ref(null);
    const clinicalCounsellingRef = ref(null);
    const preventativeCounsellingRef = ref(null);
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
          title: "Behaviour Counselling",
          icon: ""
        },
        {
          title: "Physiological Counseling",
          icon: ""
        },
        {
          title: "Diet Counselling",
          icon: ""
        },
        {
          title: "Clinical Counselling",
          icon: ""
        },
        {
          title: "Preventative Counselling",
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
        case "Behaviour Counselling":
          return "BehaviourCounselling";
        case "Physiological Counseling":
          return "PhysiologicalCounseling";
        case "Diet Counselling":
          return "DietCounselling";
        case "Clinical Counselling":
          return "ClinicalCounselling";
        case "Preventative Counselling":
          return "PreventativeCounselling";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [
        { ref: behaviourCounsellingRef },
        { ref: physiologicalCounselingRef },
        { ref: dietCounsellingRef },
        { ref: clinicalCounsellingRef },
        { ref: preventativeCounsellingRef }
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
                createVNode(_sfc_main$1, {
                  ref: "wizard",
                  headingTitle: "Counselling",
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
                      createVNode(BehaviourCounselling, {
                        ref_key: "behaviourCounsellingRef",
                        ref: behaviourCounsellingRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "BehaviourCounselling"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PhysiologicalCounseling, {
                        ref_key: "physiologicalCounselingRef",
                        ref: physiologicalCounselingRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PhysiologicalCounseling"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(DietCounselling, {
                        ref_key: "dietCounsellingRef",
                        ref: dietCounsellingRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DietCounselling"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ClinicalCounselling, {
                        ref_key: "clinicalCounsellingRef",
                        ref: clinicalCounsellingRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ClinicalCounselling"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PreventativeCounselling, {
                        ref_key: "preventativeCounsellingRef",
                        ref: preventativeCounsellingRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PreventativeCounselling"]
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
