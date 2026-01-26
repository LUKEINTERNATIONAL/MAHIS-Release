import { v as defineComponent, aK as useRouter, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, D as createBaseVNode, bY as chevronBackOutline, A as createElementBlock, K as Fragment, S as renderList, T as withDirectives, c3 as resolveDynamicComponent, U as vShow, bu as IonPage, f as ref, c as computed } from './vendor-D3hawxEQ.js';
import { _ as _sfc_main$1, u as useFormWizard } from './useFormWizard-DiAlVtWI.js';
import { T as Toolbar, F as DynamicButton } from '../index-DeiarqPy.js';
import { D as DemographicBar } from './DemographicBar-CUFhGszB.js';
import { _ as _sfc_main$2, b as _sfc_main$3, a as _sfc_main$4 } from './ObstetricDetails.vue_vue_type_script_setup_true_lang-D4SaiD7S.js';

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalDetails",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const TABS = [
      { title: "Obstetric details", icon: "" },
      { title: "Delivery details", icon: "" },
      { title: "HIV status and treatment", icon: "" }
    ];
    const COMPONENTS = [
      { name: "ObstetricDetails", component: _sfc_main$2 },
      { name: "DeliveryDetails", component: _sfc_main$3 },
      { name: "HIVStatusAndTreatment", component: _sfc_main$4 }
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
                createVNode(_sfc_main$1, {
                  ref: "wizard",
                  headingTitle: "Postnatal details",
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
