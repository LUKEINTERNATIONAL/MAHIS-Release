import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { s as defineComponent, y as openBlock, z as createElementBlock, bQ as withKeys, a8 as withModifiers, a4 as normalizeClass, C as createBaseVNode, J as Fragment, R as renderList, P as normalizeStyle, A as createVNode, B as withCtx, F as unref, aA as IonCol, L as IonIcon, a7 as IonLabel, D as toDisplayString, af as IonRow, f as ref, c as computed, x as resolveComponent, O as createBlock, a5 as createTextVNode, N as IonButton, bm as chevronForward, bO as IonChip, aq as IonItem, d3 as add, bC as modalController, aL as useRouter, w as watch, a2 as onMounted, d2 as person, H as createCommentVNode, e0 as ellipsisVerticalSharp, aI as IonAccordionGroup, aH as IonAccordion, ap as IonList, dE as IonToggle, al as IonPopover } from './vendor-DrpjccQs.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';
import { n as icons, _ as _export_sfc, r as StandardModal, o as createModal, u as useDemographicsStore, z as StandardForm, S as Service, t as toastWarning, bp as LabOrderService, y as StandardValidations, l as PreviousVitals, H as HisDate, P as PatientService } from '../index-CLlkGLFm.js';
import { S as SelectTestDateModal } from './SelectTestDateModal-44fSlF7Z.js';
import { u as usePatientProfile } from './usePatientProfile-DjtM0LOu.js';
import WeightHeightChart from './WeightHeightChart-DjjJ2bI6.js';
import { O as OtherVitals, w as weightAndHeight } from './weightAndHeight-sgNgVbX2.js';

const _hoisted_1$5 = ["onKeydown"];
const _hoisted_2$5 = { class: "ripple-container" };
const _hoisted_3$3 = ["onAnimationend"];
const _hoisted_4$3 = { class: "status-badge" };
const _hoisted_5$2 = { class: "ion-text-wrap" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ReferralCard",
  props: {
    status: {
      type: String,
      default: "Referred OPD"
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "default"
      // 'hiv', 'hepatitis', 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["pressed", "click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isPressed = ref(false);
    const timelineElement = ref(null);
    const ripples = ref([]);
    let rippleId = 0;
    const backgroundClass = computed(() => {
      if (props.disabled) return "timeline-item-disabled";
      switch (props.type) {
        case "hiv":
          return "timeline-item-hiv";
        case "hepatitis":
          return "timeline-item-hepatitis";
        default:
          return "timeline-item-default";
      }
    });
    const iconClass = computed(() => {
      if (props.disabled) return "icon-container-disabled";
      switch (props.type) {
        case "hiv":
          return "icon-container-hiv";
        case "hepatitis":
          return "icon-container-hepatitis";
        default:
          return "icon-container-default";
      }
    });
    const createRipple = (event) => {
      if (props.disabled || !timelineElement.value) return;
      const rect = timelineElement.value.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      let x, y;
      if (event.type === "keydown") {
        x = rect.width / 2 - size / 2;
        y = rect.height / 2 - size / 2;
      } else {
        const clientX = event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
        const clientY = event.type.includes("touch") ? event.touches[0].clientY : event.clientY;
        x = clientX - rect.left - size / 2;
        y = clientY - rect.top - size / 2;
      }
      const ripple = {
        id: rippleId++,
        x,
        y,
        size,
        duration: 600
      };
      ripples.value.push(ripple);
    };
    const removeRipple = (id) => {
      const index = ripples.value.findIndex((ripple) => ripple.id === id);
      if (index > -1) {
        ripples.value.splice(index, 1);
      }
    };
    const handleClick = (event) => {
      if (props.disabled) return;
      createRipple(event);
      emit("pressed", {
        type: props.type,
        title: props.title,
        status: props.status,
        event
      });
      emit("click", event);
    };
    const handleMouseDown = (event) => {
      if (props.disabled) return;
      isPressed.value = true;
      createRipple(event);
    };
    const handleMouseUp = () => {
      isPressed.value = false;
    };
    const handleMouseLeave = () => {
      isPressed.value = false;
    };
    const handleTouchStart = (event) => {
      if (props.disabled) return;
      isPressed.value = true;
      createRipple(event);
    };
    const handleTouchEnd = () => {
      isPressed.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["timeline-item", backgroundClass.value, { "timeline-item-pressed": isPressed.value }]),
        onClick: handleClick,
        onMousedown: handleMouseDown,
        onMouseup: handleMouseUp,
        onMouseleave: handleMouseLeave,
        onTouchstart: handleTouchStart,
        onTouchend: handleTouchEnd,
        role: "button",
        tabindex: "0",
        onKeydown: [
          withKeys(handleClick, ["enter"]),
          withKeys(withModifiers(handleClick, ["prevent"]), ["space"])
        ],
        ref_key: "timelineElement",
        ref: timelineElement
      }, [
        createBaseVNode("div", _hoisted_2$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(ripples.value, (ripple) => {
            return openBlock(), createElementBlock("div", {
              key: ripple.id,
              class: "ripple",
              style: normalizeStyle({
                left: ripple.x + "px",
                top: ripple.y + "px",
                width: ripple.size + "px",
                height: ripple.size + "px",
                animationDuration: ripple.duration + "ms"
              }),
              onAnimationend: ($event) => removeRipple(ripple.id)
            }, null, 44, _hoisted_3$3);
          }), 128))
        ]),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { class: "ion-text-center" }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  createVNode(unref(IonIcon), {
                    class: normalizeClass(["icon-container", iconClass.value]),
                    icon: unref(icons).greenInjection,
                    "aria-hidden": "true"
                  }, null, 8, ["class", "icon"])
                ])
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), { class: "ion-text-center" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_4$3, toDisplayString(__props.status), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), { class: "ion-text-center" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createBaseVNode("h2", _hoisted_5$2, toDisplayString(__props.title), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 42, _hoisted_1$5);
    };
  }
});

const ReferralCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3af6644b"]]);

const _hoisted_1$4 = { class: "modal-test-results-list" };
const _hoisted_2$4 = { class: "test-info" };
const _hoisted_3$2 = { class: "test-name" };
const _hoisted_4$2 = { class: "test-date" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FullTestHistoryModal",
  props: {
    results: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const testResults = computed(() => props.results || []);
    const getResultClass = (result) => {
      const lowerResult = result.toLowerCase();
      if (lowerResult.includes("new positive") || lowerResult.includes("known positive") || lowerResult === "yes") {
        return "reactive";
      }
      if (lowerResult.includes("recent negative") || lowerResult.includes("new negative") || lowerResult === "no") {
        return "non-reactive";
      }
      if (lowerResult.includes("indeterminate") || lowerResult.includes("unknown") || lowerResult.includes("not done")) {
        return "default";
      }
      return "default";
    };
    return (_ctx, _cache) => {
      const _component_ion_chip = resolveComponent("ion-chip");
      const _component_ion_item = resolveComponent("ion-item");
      return openBlock(), createBlock(StandardModal, {
        title: "Full Test History (" + testResults.value.length + ")"
      }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(testResults.value, (test, index) => {
              return openBlock(), createBlock(_component_ion_item, {
                key: `modal-${index}`,
                class: "test-result-item",
                lines: "none"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$4, [
                    createBaseVNode("h3", _hoisted_3$2, toDisplayString(test.name), 1),
                    createBaseVNode("p", _hoisted_4$2, toDisplayString(test.date), 1)
                  ]),
                  createVNode(_component_ion_chip, {
                    class: normalizeClass(["result-chip", getResultClass(test.value)]),
                    slot: "end"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(test.value), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const FullTestHistoryModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d7fe6bed"]]);

const _hoisted_1$3 = { class: "past-test-results" };
const _hoisted_2$3 = { class: "header" };
const _hoisted_3$1 = { class: "test-results-list" };
const _hoisted_4$1 = { class: "test-info" };
const _hoisted_5$1 = { class: "test-name" };
const _hoisted_6$1 = { class: "test-date" };
const _hoisted_7$1 = { class: "add-results-section" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PastTestResults",
  props: {
    results: { default: () => [] }
  },
  emits: ["seeFullHistory", "enterKnownResults"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const testResults = computed(() => props.results || []);
    const limitedTestResults = computed(() => testResults.value.slice(0, 3));
    const getResultClass = (result) => {
      const lowerResult = result.toLowerCase();
      if (lowerResult.includes("new positive") || lowerResult.includes("known positive") || lowerResult === "yes") {
        return "reactive";
      }
      if (lowerResult.includes("recent negative") || lowerResult.includes("new negative") || lowerResult === "no") {
        return "non-reactive";
      }
      if (lowerResult.includes("indeterminate") || lowerResult.includes("unknown") || lowerResult.includes("not done")) {
        return "default";
      }
      return "default";
    };
    const openWhichTestModal = async () => {
      await createModal(SelectTestDateModal, { class: "medium-modal" }, true);
    };
    const openModal = async () => {
      await createModal(FullTestHistoryModal, { class: "otherVitalsModal" }, true, { results: testResults.value });
      emit("seeFullHistory");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "header-title" }, "PAST TEST RESULTS", -1)),
          createVNode(unref(IonButton), {
            fill: "clear",
            size: "small",
            class: "see-history-btn",
            onClick: openModal
          }, {
            default: withCtx(() => [
              _cache[1] || (_cache[1] = createTextVNode(" See full History ", -1)),
              createVNode(unref(IonIcon), {
                icon: unref(chevronForward),
                slot: "end"
              }, null, 8, ["icon"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(limitedTestResults.value, (test, index) => {
            return openBlock(), createBlock(unref(IonItem), {
              key: index,
              class: "test-result-item",
              lines: "none"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("h3", _hoisted_5$1, toDisplayString(test.name), 1),
                  createBaseVNode("p", _hoisted_6$1, toDisplayString(test.date), 1)
                ]),
                createVNode(unref(IonChip), {
                  class: normalizeClass(["result-chip", getResultClass(test.value)]),
                  slot: "end"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(test.value), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createVNode(unref(IonButton), {
            fill: "clear",
            size: "default",
            class: "add-results-btn",
            onClick: _cache[0] || (_cache[0] = ($event) => openWhichTestModal())
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), {
                icon: unref(add),
                slot: "start"
              }, null, 8, ["icon"]),
              _cache[3] || (_cache[3] = createTextVNode(" Enter Known Past Results ", -1))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const PastTestResults = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-be805837"]]);

const _hoisted_1$2 = { style: { "max-width": "750px" } };
const _hoisted_2$2 = { style: { "text-align": "center", "padding": "15px" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HIVTestingModal",
  props: {
    order: {}
  },
  setup(__props) {
    const formRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const props = __props;
    const HIVTestingForm = computed(() => {
      return [
        {
          componentType: "inputField",
          header: "ScanForm Link ID",
          name: "form_link_id",
          obsValueType: "value_text",
          icon: icons.scanner
        },
        {
          componentType: "radioButtonField",
          header: "Outcome Summary",
          name: "test_results",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          options: [
            {
              label: "Unknown, new test NOT done",
              value: "Unknown, new test NOT done"
            },
            {
              label: "Recent negative",
              value: "Recent negative"
            },
            {
              label: "New negative",
              value: "New negative"
            },
            {
              label: "New positive",
              value: "New positive"
            },
            {
              label: "New indeterminate",
              value: "New indeterminate"
            },
            {
              label: "Known positive, not on ART",
              value: "Known positive, not on ART"
            },
            {
              label: "Known positive, on ART",
              value: "Known positive, on ART"
            }
          ]
        }
      ];
    });
    const save = async () => {
      if (formRef.value?.validateForm() != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      const result = formRef.value?.getFormValues();
      try {
        await LabOrderService.saveLabTest(
          patient.value,
          [
            {
              name: "HIV test",
              value: result.test_results,
              specimen: "Blood"
            }
          ],
          props.order
        );
        modalController.dismiss();
      } catch (error) {
        toastWarning("Failed to save HIV test results");
      }
    };
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createBlock(StandardModal, {
        title: "HIV Testing",
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Complete", -1)
            ])]),
            _: 1
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(StandardForm, {
              formData: HIVTestingForm.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"]),
            createBaseVNode("div", _hoisted_2$2, [
              _cache[2] || (_cache[2] = createBaseVNode("span", null, "Reported by: ", -1)),
              createBaseVNode("span", null, toDisplayString(unref(Service).getUserName()), 1)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

const HIVTestingModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f4f7d354"]]);

const _hoisted_1$1 = { style: { "width": "50vw", "max-width": "600px", "height": "25vh" } };
const _hoisted_2$1 = { style: { "text-align": "center", "padding": "15px" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HepatitisModal",
  props: {
    order: {},
    testName: {}
  },
  setup(__props) {
    const formRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const props = __props;
    const testingForm = computed(() => {
      return [
        {
          componentType: "inputField",
          header: "ScanForm Link ID",
          name: "form_link_id",
          obsValueType: "value_text",
          icon: icons.scanner
        },
        {
          componentType: "radioButtonField",
          header: "Outcome Summary",
          name: "test_results",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            },
            {
              label: "ND (NotDone)",
              value: "Not Done"
            }
          ]
        }
      ];
    });
    const save = async () => {
      if (formRef.value?.validateForm() != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      const result = formRef.value?.getFormValues();
      try {
        await LabOrderService.saveLabTest(
          patient.value,
          [
            {
              name: props.testName,
              value: result.test_results,
              specimen: "Blood"
            }
          ],
          props.order
        );
        await modalController.dismiss();
      } catch (error) {
        toastWarning("Failed to save test results");
      }
    };
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createBlock(StandardModal, {
        title: __props.testName + " Testing",
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Complete", -1)
            ])]),
            _: 1
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(StandardForm, {
              formData: testingForm.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"]),
            createBaseVNode("div", _hoisted_2$1, [
              _cache[2] || (_cache[2] = createBaseVNode("span", null, "Reported by: ", -1)),
              createBaseVNode("span", null, toDisplayString(unref(Service).getUserName()), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const HepatitisModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a983ba4"]]);

const _hoisted_1 = { style: { "max-width": "900px", "margin": "auto" } };
const _hoisted_2 = { style: { "--background": "#fff", "margin-bottom": "30px" } };
const _hoisted_3 = { class: "demographics" };
const _hoisted_4 = { style: { "text-overflow": "ellipsis" } };
const _hoisted_5 = { style: { "display": "flex", "justify-content": "space-between", "align-content": "center", "padding-bottom": "5px", "padding-top": "5px", "padding-left": "5px" } };
const _hoisted_6 = { style: { "margin-right": "5px" } };
const _hoisted_7 = { style: { "margin-top": "5px" } };
const _hoisted_8 = { class: "demographicsFirstRow" };
const _hoisted_9 = { class: "name custom-name-container" };
const _hoisted_10 = {
  class: "demographicsOtherRow",
  style: { "margin-top": "10px" }
};
const _hoisted_11 = {
  class: "demographicsText",
  style: { "display": "flex", "flex-wrap": "wrap" }
};
const _hoisted_12 = { style: { "flex-shrink": "0" } };
const _hoisted_13 = { style: { "flex-shrink": "0" } };
const _hoisted_14 = {
  key: 0,
  class: "demographicsOtherRow"
};
const _hoisted_15 = { class: "demographicsText mediumFontColor" };
const _hoisted_16 = {
  key: 1,
  class: "demographicsOtherRow"
};
const _hoisted_17 = { class: "demographicsText mediumFontColor" };
const _hoisted_18 = { class: "demographicsOtherRow" };
const _hoisted_19 = { class: "demographicsText smallFont" };
const _hoisted_20 = { class: "mediumFontColor" };
const _hoisted_21 = { style: { "background": "transparent" } };
const _hoisted_22 = { class: "graphSection" };
const _hoisted_23 = {
  class: "graphBtn",
  style: { "margin-bottom": "5px" }
};
const _hoisted_24 = { class: "weightHeightGraphBtns" };
const _hoisted_25 = { key: 0 };
const _hoisted_26 = { key: 1 };
const _hoisted_27 = { style: { "margin-top": "20px" } };
const _hoisted_28 = { class: "test-results-container" };
const _hoisted_29 = { class: "test-buttons-container" };
const _hoisted_30 = { style: { "margin-left": "10px", "margin-right": "10px", "margin-top": "10px" } };
const _hoisted_31 = {
  key: 0,
  class: "pagination-dots"
};
const _hoisted_32 = ["onClick"];
const _hoisted_33 = {
  class: "ion-padding",
  slot: "content"
};
const ITEMS_PER_PAGE = 3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HTSPatientProfile",
  setup(__props) {
    const { event, popoverOpen, openPopover, openPIM, printVisitSummary, printID, formatCurrentAddress } = usePatientProfile();
    const router = useRouter();
    const iconsContent = icons;
    const checkUnderSixWeeks = ref(false);
    const selectedStatus = ref(7);
    const orders = ref([]);
    const results = ref([]);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const currentOrdersPage = ref(0);
    const ordersScrollContainer = ref(null);
    const totalPages = computed(() => Math.ceil(orders.value.length / ITEMS_PER_PAGE));
    const getPageOrders = (pageIndex) => {
      const start = pageIndex * ITEMS_PER_PAGE;
      return orders.value.slice(start, start + ITEMS_PER_PAGE);
    };
    const handleOrdersScroll = (event2) => {
      const target = event2.target;
      const scrollLeft = target.scrollLeft;
      const itemWidth = target.offsetWidth;
      const newPage = Math.round(scrollLeft / itemWidth);
      currentOrdersPage.value = newPage;
    };
    const scrollToPage = (pageIndex) => {
      if (ordersScrollContainer.value) {
        const itemWidth = ordersScrollContainer.value.offsetWidth;
        ordersScrollContainer.value.scrollTo({
          left: pageIndex * itemWidth,
          behavior: "smooth"
        });
      }
    };
    const updateState = async (state) => {
      selectedStatus.value = state;
    };
    const getLabResults = async () => {
      const lab = LabOrderService.getLabResults(patient.value, 9);
      results.value = lab?.results;
    };
    const getReferralTests = async () => {
      if (!patient.value?.labOrders) return;
      const data = [...patient.value?.labOrders?.saved, ...patient.value?.labOrders?.unsaved];
      orders.value = data.filter((item) => item.order_type_id === 9 && !item.tests[0].result);
    };
    const getAge = (dateOfBirth) => {
      return HisDate.calculateDisplayAge(HisDate.toStandardHisFormat(dateOfBirth));
    };
    const checkAge = () => {
      if (!lodashExports.isEmpty(patient.value?.personInformation?.birthdate)) {
        checkUnderSixWeeks.value = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.value?.personInformation?.birthdate) < 42 ? true : false;
      }
    };
    const openVitalsModal = () => {
      createModal(OtherVitals, { class: "base-content-modal" });
    };
    const openWH = () => {
      createModal(weightAndHeight, { class: "base-content-modal" });
    };
    const getTestName = (order) => {
      if (!order?.tests) return;
      return order?.tests[0]?.name;
    };
    const openTestModal = async (order) => {
      const testName = getTestName(order) || order.value_text;
      if (testName == "HIV test") {
        await createModal(HIVTestingModal, { class: "base-content-modal" }, true, { order });
      }
      if (testName == "Syphilis" || testName == "Hepatitis B Test") {
        await createModal(HepatitisModal, { class: "base-content-modal" }, true, { order, testName });
      }
    };
    const isChild = () => {
      const patientService = new PatientService();
      return patientService.isUnderFive();
    };
    const handleSeeHistory = () => {
      console.log("Navigate to full history");
    };
    const handleEnterResults = () => {
      console.log("Enter known results");
    };
    const formatBirthdate = () => {
      return HisDate.toStandardHisDisplayFormat(patient.value?.personInformation?.birthdate);
    };
    watch(
      () => router.currentRoute.value,
      async (data) => {
        if (data.name == "patientProfile" && patient.value.patientID) ;
      }
    );
    watch(patient, async () => {
      if (patient) {
        checkAge();
        await getLabResults();
        await getReferralTests();
      }
    });
    onMounted(async () => {
      checkAge();
      await getReferralTests();
      await getLabResults();
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: normalizeClass(unref(patient)?.personInformation?.gender == "M" ? "initialsBox maleColor" : "initialsBox femaleColor"),
                            style: { "display": "flex", "flex-direction": "column", "align-items": "center" }
                          }, [
                            createVNode(_component_ion_icon, {
                              style: { "color": "#fff", "font-size": "100px" },
                              icon: unref(person)
                            }, null, 8, ["icon"])
                          ], 2)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), null, {
                        default: withCtx(() => [..._cache[14] || (_cache[14] = [
                          createBaseVNode("span", { class: "pill-text" }, "Returning Client", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      unref(patient)?.personInformation?.given_name ? (openBlock(), createBlock(unref(IonRow), {
                        key: 0,
                        class: "custom-name-row"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { class: "custom-name-col" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(patient)?.personInformation?.given_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(patient)?.personInformation?.middle_name ? (openBlock(), createBlock(unref(IonRow), {
                        key: 1,
                        class: "custom-name-row"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { class: "custom-name-col" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(patient)?.personInformation?.middle_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(patient)?.personInformation?.family_name ? (openBlock(), createBlock(unref(IonRow), {
                        key: 2,
                        class: "custom-name-row"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { class: "custom-name-col" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(patient)?.personInformation?.family_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("span", _hoisted_12, toDisplayString(unref(patient)?.personInformation?.gender == "M" ? "Male" : "Female"), 1),
                      _cache[15] || (_cache[15] = createBaseVNode("span", { style: { "flex-shrink": "0" } }, ".", -1)),
                      createBaseVNode("span", _hoisted_13, toDisplayString(getAge(unref(patient)?.personInformation?.birthdate)) + " (" + toDisplayString(formatBirthdate()) + ")", 1)
                    ])
                  ]),
                  unref(patient)?.personInformation?.current_district ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "demographicsText" }, "Current Address:", -1)),
                    createBaseVNode("div", _hoisted_15, toDisplayString(unref(formatCurrentAddress)(unref(patient))), 1)
                  ])) : createCommentVNode("", true),
                  unref(patient)?.personInformation?.country ? (openBlock(), createElementBlock("div", _hoisted_16, [
                    _cache[17] || (_cache[17] = createBaseVNode("div", { class: "demographicsText" }, "Country:", -1)),
                    createBaseVNode("div", _hoisted_17, toDisplayString(unref(patient)?.personInformation?.country), 1)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      _cache[18] || (_cache[18] = createTextVNode(" MRN: ", -1)),
                      createBaseVNode("span", _hoisted_20, toDisplayString(unref(patient).ID), 1)
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createVNode(unref(IonRow), {
                class: "no-wrap-row",
                style: { "align-items": "center" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), { style: { "flex": "1", "min-width": "0" } }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        class: "deactivate-button",
                        fill: "solid",
                        shape: "round"
                      }, {
                        default: withCtx(() => [..._cache[19] || (_cache[19] = [
                          createTextVNode(" Deactivate Visit ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonCol), {
                    size: "auto",
                    style: { "flex-shrink": "0" }
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: "name",
                        style: { "color": "var(--ion-color-primary)", "margin-top": "10px" },
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(openPopover)($event))
                      }, [
                        createVNode(_component_ion_icon, { icon: unref(ellipsisVerticalSharp) }, null, 8, ["icon"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", null, [
              isChild() ? (openBlock(), createBlock(WeightHeightChart, {
                key: 0,
                checkUnderSixWeeks: checkUnderSixWeeks.value,
                showHeightWeight: true
              }, null, 8, ["checkUnderSixWeeks"])) : createCommentVNode("", true),
              !isChild() ? (openBlock(), createBlock(PreviousVitals, { key: 1 })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", null, [
                  createVNode(unref(IonButton), {
                    class: "btnText",
                    fill: "solid",
                    onClick: _cache[1] || (_cache[1] = ($event) => openWH())
                  }, {
                    default: withCtx(() => [
                      !checkUnderSixWeeks.value ? (openBlock(), createElementBlock("span", _hoisted_25, " Enter Weight/Height")) : (openBlock(), createElementBlock("span", _hoisted_26, " Enter Weight")),
                      createVNode(_component_ion_icon, {
                        slot: "end",
                        size: "small",
                        icon: unref(iconsContent).whiteHeightWeight
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", null, [
                  createVNode(unref(IonButton), {
                    class: "btnText",
                    fill: "solid",
                    onClick: _cache[2] || (_cache[2] = ($event) => openVitalsModal())
                  }, {
                    default: withCtx(() => [
                      _cache[20] || (_cache[20] = createTextVNode(" Enter Other Vitals ", -1)),
                      createVNode(_component_ion_icon, {
                        slot: "end",
                        size: "small",
                        icon: unref(iconsContent).whiteVitals
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_27, [
            createVNode(unref(IonItem), { class: "new-orders-header" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), { class: "new-orders-label" }, {
                  default: withCtx(() => [..._cache[21] || (_cache[21] = [
                    createTextVNode(" NEW ORDERS ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_28, [
              createBaseVNode("div", _hoisted_29, [
                createVNode(unref(IonButton), {
                  class: "test-button",
                  fill: "outline",
                  shape: "round",
                  onClick: _cache[3] || (_cache[3] = ($event) => openTestModal({ value_text: "HIV test", new_order: true }))
                }, {
                  default: withCtx(() => [..._cache[22] || (_cache[22] = [
                    createTextVNode(" HIV ", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButton), {
                  class: "test-button",
                  fill: "outline",
                  shape: "round",
                  onClick: _cache[4] || (_cache[4] = ($event) => openTestModal({ value_text: "Syphilis", new_order: true }))
                }, {
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
                    createTextVNode(" Syphilis ", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButton), {
                  class: "test-button",
                  fill: "outline",
                  shape: "round",
                  onClick: _cache[5] || (_cache[5] = ($event) => openTestModal({ value_text: "Hepatitis B Test", new_order: true }))
                }, {
                  default: withCtx(() => [..._cache[24] || (_cache[24] = [
                    createTextVNode(" Hepatitis B ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createVNode(PastTestResults, {
                results: results.value,
                onSeeFullHistory: handleSeeHistory,
                onEnterKnownResults: handleEnterResults
              }, null, 8, ["results"])
            ]),
            createVNode(unref(IonItem), {
              class: "new-orders-header",
              style: { "margin-top": "10px" }
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), { class: "new-orders-label" }, {
                  default: withCtx(() => [..._cache[25] || (_cache[25] = [
                    createTextVNode(" ORDERS FROM OTHER CLINICS ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", {
                ref_key: "ordersScrollContainer",
                ref: ordersScrollContainer,
                class: "orders-scroll-container",
                onScroll: handleOrdersScroll
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(totalPages.value, (pageIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: pageIndex,
                    class: "orders-page"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getPageOrders(pageIndex - 1), (test, index) => {
                      return openBlock(), createBlock(unref(IonRow), {
                        key: index,
                        style: { "margin-bottom": "10px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), null, {
                            default: withCtx(() => [
                              createVNode(ReferralCard, {
                                title: getTestName(test),
                                status: `Referred ${test.program_name}`,
                                type: "hiv",
                                onPressed: ($event) => openTestModal(test)
                              }, null, 8, ["title", "status", "onPressed"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]);
                }), 128))
              ], 544),
              totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_31, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(totalPages.value, (pageIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: pageIndex,
                    class: normalizeClass(["dot", { active: currentOrdersPage.value === pageIndex - 1 }]),
                    onClick: ($event) => scrollToPage(pageIndex - 1)
                  }, null, 10, _hoisted_32);
                }), 128))
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        createVNode(unref(IonPopover), {
          style: { "--offset-x": "-10px" },
          "is-open": unref(popoverOpen),
          "show-backdrop": false,
          event: unref(event),
          onDidDismiss: _cache[13] || (_cache[13] = ($event) => popoverOpen.value = false)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(unref(IonAccordionGroup), { multiple: true }, {
                default: withCtx(() => [
                  createVNode(unref(IonAccordion), {
                    value: "first",
                    "toggle-icon": "",
                    onClick: _cache[6] || (_cache[6] = ($event) => unref(openPIM)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[26] || (_cache[26] = [
                              createTextVNode("Update demographics", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), {
                    value: "first",
                    "toggle-icon": "",
                    onClick: _cache[7] || (_cache[7] = () => {
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[27] || (_cache[27] = [
                              createTextVNode("Follow up visits", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), {
                    value: "second",
                    "toggle-icon": "",
                    onClick: _cache[8] || (_cache[8] = ($event) => unref(printVisitSummary)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[28] || (_cache[28] = [
                              createTextVNode("Print visit summary", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), {
                    value: "third",
                    "toggle-icon": "",
                    onClick: _cache[9] || (_cache[9] = ($event) => unref(printID)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[29] || (_cache[29] = [
                              createTextVNode("Print client identifier", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), { value: "fourth" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[30] || (_cache[30] = [
                              createTextVNode("Update outcome", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_33, [
                        createVNode(unref(IonList), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonToggle), {
                                  checked: selectedStatus.value == 7,
                                  value: "active",
                                  onIonChange: _cache[10] || (_cache[10] = ($event) => updateState(7))
                                }, {
                                  default: withCtx(() => [..._cache[31] || (_cache[31] = [
                                    createTextVNode(" Active ", -1)
                                  ])]),
                                  _: 1
                                }, 8, ["checked"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(IonItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonToggle), {
                                  checked: selectedStatus.value == 6,
                                  value: "inactive",
                                  onIonChange: _cache[11] || (_cache[11] = ($event) => updateState(6))
                                }, {
                                  default: withCtx(() => [..._cache[32] || (_cache[32] = [
                                    createTextVNode(" Inactive ", -1)
                                  ])]),
                                  _: 1
                                }, 8, ["checked"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(IonItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonToggle), {
                                  checked: selectedStatus.value == 3,
                                  value: "died",
                                  onIonChange: _cache[12] || (_cache[12] = ($event) => updateState(3))
                                }, {
                                  default: withCtx(() => [..._cache[33] || (_cache[33] = [
                                    createTextVNode(" Died ", -1)
                                  ])]),
                                  _: 1
                                }, 8, ["checked"])
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
              })
            ])
          ]),
          _: 1
        }, 8, ["is-open", "event"])
      ]);
    };
  }
});

const HTSPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90908710"]]);

export { HTSPatientProfile as default };
