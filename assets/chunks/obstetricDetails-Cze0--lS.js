import { s as defineComponent, aL as useRouter, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, C as createBaseVNode, bX as chevronBackOutline, z as createElementBlock, J as Fragment, R as renderList, S as withDirectives, c1 as resolveDynamicComponent, T as vShow, bu as IonPage, f as ref, c as computed } from './vendor-DrpjccQs.js';
import { _ as _sfc_main$1, u as useFormWizard } from './useFormWizard-qhHmCyMh.js';
import { T as Toolbar, F as DynamicButton, t as toastWarning } from '../index-BKZG9ta1.js';
import { D as DemographicBar } from './DemographicBar-B-KbQXRh.js';
import { O as Obstetric, L as Labour } from './Labour-CwRimyvc.js';

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "obstetricDetails",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const TABS = [
      { title: "Obstetric", icon: "" },
      { title: "Pregnancy/Labour", icon: "" }
    ];
    const COMPONENTS = [
      { name: "Obstetric", component: Obstetric },
      { name: "Labour", component: Labour }
    ];
    const componentRefs = ref([]);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => ({
      text: isSaving.value ? "Saving..." : "Finish",
      icon: isSaving.value ? "hourglass-outline" : "checkmark",
      hideText: false,
      hideIcon: false,
      disabled: isSaving.value
    }));
    const handleTabChange = async (index, oldIndex) => {
      const previousRef = componentRefs.value[oldIndex];
      if (previousRef && typeof previousRef.validateForm === "function") {
        const errors = previousRef.validateForm();
        if (errors && Object.keys(errors).length > 0) {
          const errorMessages = Object.values(errors).join(", ");
          toastWarning(`Please fix the validation errors: ${errorMessages}`);
        }
      }
      onChangeCurrentTab(index);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        let firstInvalidTabIndex = null;
        for (let i = 0; i < componentRefs.value.length; i++) {
          const compRef = componentRefs.value[i];
          if (!compRef) continue;
          if (typeof compRef.validateForm === "function") {
            const errors = compRef.validateForm();
            if (errors != null && Object.keys(errors).length > 0) {
              firstInvalidTabIndex = i;
              break;
            }
          }
        }
        if (firstInvalidTabIndex !== null) {
          toastWarning("Please fix the validation errors before continuing.");
          currentTabIndex.value = firstInvalidTabIndex;
          isSaving.value = false;
          return;
        }
        for (const compRef of componentRefs.value) {
          if (compRef?.onSubmit) {
            await compRef.onSubmit();
          }
        }
        router.push("/labour/home");
      } catch (error) {
        console.error("Error saving obstetric details:", error);
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
                  headingTitle: "Obstetric Details",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": TABS,
                  onChange: handleTabChange,
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
                }, 8, ["doneButton"])
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
