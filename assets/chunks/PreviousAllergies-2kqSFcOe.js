import { s as defineComponent, a2 as onMounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, a7 as IonLabel, a5 as createTextVNode, C as createBaseVNode, z as createElementBlock, J as Fragment, R as renderList, D as toDisplayString, ap as IonList, H as createCommentVNode, f as ref } from './vendor-DrpjccQs.js';
import { P as PreviousTreatment } from './treatment-BcG7QmJB.js';
import { _ as _export_sfc } from '../index-BKZG9ta1.js';

const _hoisted_1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "previousSecDrgs" };
const _hoisted_4 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_5 = { class: "previousSecDrgs" };
const __default__ = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const itemWasExpanded = ref(false);
    const itemAllegiesWasExpanded = ref(false);
    const showMoreAllergyMsg = ref("Show more allergies");
    const FirstPreviousAllegies = ref();
    const RestOfPreviousAllegies = ref();
    onMounted(async () => {
      const previousTreatment = new PreviousTreatment();
      const { previousDrugAllergies } = await previousTreatment.getPatientEncounters();
      FirstPreviousAllegies.value = Object.entries(previousDrugAllergies)[0];
      const [, ...restEntriesAllegies] = Object.entries(previousDrugAllergies);
      RestOfPreviousAllegies.value = restEntriesAllegies;
    });
    function accordionGroupChangeForAllergies(ev) {
      const selectedValue = ev.detail.value;
      if (selectedValue !== void 0) {
        if (selectedValue == "fith") {
          showMoreAllergyMsg.value = "Show less allegies";
          itemAllegiesWasExpanded.value = !itemWasExpanded.value;
        }
      } else {
        showMoreAllergyMsg.value = "Show more allegies";
        itemAllegiesWasExpanded.value = !itemWasExpanded.value;
      }
    }
    function removeOuterArray(arr) {
      return arr[1];
    }
    return (_ctx, _cache) => {
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createBlock(_component_ion_card, null, {
        default: withCtx(() => [
          createVNode(unref(IonAccordionGroup), {
            ref: "accordionGroup",
            class: "previousView"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonAccordion), {
                value: "fourth",
                "toggle-icon-slot": "start",
                style: { "border-radius": "10px", "background-color": "#fff" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[0] || (_cache[0] = [
                          createTextVNode("Documented allergies timeline", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(FirstPreviousAllegies.value, (item, index) => {
                      return openBlock(), createElementBlock("div", {
                        class: "ionLbltp",
                        key: index
                      }, [
                        index == 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [
                          createBaseVNode("div", null, [
                            createVNode(unref(IonLabel), { class: "previousLabelDate" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item[0].date), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item, (item1, index1) => {
                            return openBlock(), createElementBlock("div", { key: index1 }, [
                              createBaseVNode("div", _hoisted_3, [
                                createVNode(unref(IonList), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonLabel), { class: "notes_p" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item1.value), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 128)),
                    createVNode(unref(IonAccordionGroup), { onIonChange: accordionGroupChangeForAllergies }, {
                      default: withCtx(() => [
                        createVNode(unref(IonAccordion), {
                          value: "fith",
                          "toggle-icon-slot": "start",
                          style: { "border-radius": "10px", "background-color": "#fff" }
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonItem), {
                              slot: "header",
                              color: "light"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), {
                                  class: "",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(showMoreAllergyMsg.value), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createBaseVNode("div", _hoisted_4, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(RestOfPreviousAllegies.value, (item, index) => {
                                return openBlock(), createElementBlock("div", {
                                  class: "ionLbltp",
                                  key: index
                                }, [
                                  createBaseVNode("div", null, [
                                    createVNode(unref(IonLabel), { class: "previousLabelDate" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item[0]), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(removeOuterArray(item), (item1, index1) => {
                                    return openBlock(), createElementBlock("div", { key: index1 }, [
                                      createBaseVNode("div", _hoisted_5, [
                                        createVNode(unref(IonList), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(IonLabel), { class: "notes_p" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item1.value), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]);
                                  }), 128))
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      });
    };
  }
});

const PreviousAllergies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-358c5959"]]);

export { PreviousAllergies as P };
