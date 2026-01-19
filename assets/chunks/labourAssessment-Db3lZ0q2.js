import { q as defineComponent, aI as useRouter, N as createBlock, y as openBlock, B as withCtx, z as createVNode, E as unref, aD as IonContent, A as createBaseVNode, c as computed, x as createElementBlock, bW as chevronBackOutline, H as Fragment, Q as renderList, R as withDirectives, c1 as resolveDynamicComponent, f as ref, S as vShow, bs as IonPage } from './vendor-xvx_X2hj.js';
import { _ as _sfc_main$1, u as useFormWizard } from './useFormWizard-BGxF4GvH.js';
import { T as Toolbar, F as DynamicButton } from '../index-D5ZuGc-h.js';
import { D as DemographicBar } from './DemographicBar-DBFbs5JO.js';
import { c as _sfc_main$2, b as _sfc_main$3, _ as _sfc_main$4, a as _sfc_main$5 } from './FirstVaginalExamination.vue_vue_type_script_setup_true_lang-sflwb-hq.js';

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labourAssessment",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const TABS = [
      { title: "Quick Check", icon: "" },
      { title: "Physical Examination", icon: "" },
      { title: "First Vaginal Examination", icon: "" },
      { title: "Pelvic Assessment", icon: "" }
    ];
    const COMPONENTS = [
      { name: "QuickCheck", component: _sfc_main$2 },
      { name: "PhysicalExamination", component: _sfc_main$3 },
      { name: "FirstVaginalExamination", component: _sfc_main$4 },
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
        router.push("ANChome");
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
                createVNode(_sfc_main$1, {
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
                          onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("ANChome"))
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
