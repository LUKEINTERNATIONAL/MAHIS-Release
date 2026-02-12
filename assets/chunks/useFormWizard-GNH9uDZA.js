import { s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, a4 as normalizeClass, H as createCommentVNode, C as createBaseVNode, E as renderSlot, A as createVNode, D as toDisplayString, c as computed, w as watch, a2 as onMounted, J as Fragment, R as renderList, O as createBlock, F as unref, B as withCtx, f as ref, n as nextTick } from './vendor-CL0dVHZq.js';

const _hoisted_1$2 = { class: "fw-list-wrapper" };
const _hoisted_2$2 = ["id"];
const _hoisted_3$1 = { class: "fw-step-container" };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { key: 1 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WizardStep",
  props: {
    tab: {
      type: Object,
      default: () => {
      }
    },
    index: {
      type: Number,
      default: 0
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    squaredTab: {
      type: Boolean,
      default: false
    },
    showProgress: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const progressActive = computed(() => props.currentIndex > props.index);
    const containerClasses = computed(() => {
      return [
        "fw-list-wrapper-icon",
        {
          "fw-step-active": props.tab.active,
          "fw-step-checked": props.tab.checked,
          "fw-squared-tab": props.squaredTab
        }
      ];
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock("li", null, [
        __props.showProgress ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["fw-list-progress", { "fw-list-progress-active": progressActive.value }])
        }, null, 2)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", {
            id: `step-${__props.tab.id}`,
            role: "tab",
            class: normalizeClass(containerClasses.value)
          }, [
            createBaseVNode("div", _hoisted_3$1, [
              renderSlot(_ctx.$slots, "active-step", {}, () => [
                __props.tab.icon ? (openBlock(), createElementBlock("i", _hoisted_4$1, [
                  createVNode(_component_ion_icon, {
                    icon: __props.tab.icon,
                    style: { "font-size": "16px" }
                  }, null, 8, ["icon"])
                ])) : (openBlock(), createElementBlock("i", _hoisted_5$1, toDisplayString(__props.index + 1), 1))
              ])
            ])
          ], 10, _hoisted_2$2),
          renderSlot(_ctx.$slots, "title", {}, () => [
            createBaseVNode("span", {
              class: normalizeClass(["fw-step-title", {
                active: __props.tab.active
              }])
            }, toDisplayString(__props.tab.title), 3)
          ])
        ])
      ]);
    };
  }
});

const _hoisted_1$1 = ["disabled"];
const _hoisted_2$1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const getIconClass = (iconName) => `pi pi-${iconName}`;
    const getButtonClass = computed(() => {
      return [
        "fw-btn",
        {
          "fw-btn-disabled": props.options.disabled
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(getButtonClass.value),
        disabled: __props.options.disabled
      }, [
        !__props.options.hideText ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(__props.options.text), 1)) : createCommentVNode("", true),
        !__props.options.hideIcon ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(getIconClass(__props.options.icon))
        }, null, 2)) : createCommentVNode("", true)
      ], 10, _hoisted_1$1);
    };
  }
});

const _hoisted_1 = ["id"];
const _hoisted_2 = {
  key: 0,
  class: "fw-body-list",
  role: "tablist"
};
const _hoisted_3 = { style: { "margin-left": "10px", "margin-right": "10px" } };
const _hoisted_4 = { class: "fw-body" };
const _hoisted_5 = { class: "fw-body-content" };
const _hoisted_6 = { class: "fw-body-container" };
const _hoisted_7 = {
  key: 0,
  class: "fw-footer"
};
const _hoisted_8 = { class: "fw-footer-left" };
const _hoisted_9 = { class: "fw-footer-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Wizard",
  props: {
    id: {
      type: String,
      default: "fw-" + (/* @__PURE__ */ new Date()).valueOf()
    },
    headingTitle: {
      type: String,
      default: ""
    },
    customTabs: {
      type: Array,
      default: () => [
        {
          id: 0,
          title: "Step 1",
          icon: "map"
        },
        {
          id: 1,
          title: "Step 2",
          icon: "check"
        },
        {
          id: 2,
          title: "Step 3",
          icon: "pencil"
        }
      ]
    },
    nextButton: {
      type: Object,
      default: function() {
        return {};
      }
    },
    backButton: {
      type: Object,
      default: function() {
        return {};
      }
    },
    doneButton: {
      type: Object,
      default: function() {
        return {};
      }
    },
    hideButtons: {
      type: Boolean,
      default: false
    },
    startIndex: {
      type: Number,
      default: 0,
      validator: (value) => {
        return value >= 0;
      }
    },
    verticalTabs: {
      type: Boolean,
      default: false
    },
    beforeChange: {
      type: Function,
      default: () => {
      }
    },
    beforeMount: {
      type: Function,
      default: () => {
      }
    },
    navigableTabs: {
      type: Boolean,
      default: false
    },
    scrollableTabs: {
      type: Boolean,
      default: false
    },
    cardBackground: {
      type: Boolean,
      default: false
    },
    squaredTabs: {
      type: Boolean,
      default: false
    },
    showProgress: {
      type: Boolean,
      default: true
    },
    showWizard: {
      type: Boolean,
      default: true
    }
  },
  emits: ["change", "complete:wizard", "updated:tabs", "onValidateTabs", "done-button-changed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const props = __props;
    let currentTabIndex = ref(0);
    const tabs = computed(() => {
      const tabsArray = [...props.customTabs];
      return tabsArray.map((tab, index) => ({
        ...tab,
        checked: index < currentTabIndex.value,
        active: index === currentTabIndex.value
      }));
    });
    const maxTabIndex = computed(() => tabs.value.length - 1);
    const backButtonOptions = computed(() => {
      return Object.assign(
        {
          text: "Back",
          icon: "arrow-left",
          hideText: false,
          hideIcon: false,
          disabled: false
        },
        props.backButton
      );
    });
    const nextButtonOptions = computed(() => {
      return Object.assign(
        {
          text: "Next",
          icon: "arrow-right",
          hideText: false,
          hideIcon: false,
          disabled: false
        },
        props.nextButton
      );
    });
    const doneButtonOptions = computed(() => {
      return Object.assign(
        {
          text: "Done",
          icon: "check",
          hideText: false,
          hideIcon: false,
          disabled: false
        },
        props.doneButton
      );
    });
    watch(
      () => props.doneButton,
      (newDoneButton, oldDoneButton) => {
        emit("done-button-changed", {
          newOptions: doneButtonOptions.value,
          oldOptions: oldDoneButton ? Object.assign(
            {
              text: "Done",
              icon: "check",
              hideText: false,
              hideIcon: false,
              disabled: false
            },
            oldDoneButton
          ) : null,
          currentTabIndex: currentTabIndex.value,
          isLastStep: isLastStep.value
        });
      },
      {
        deep: true,
        // Watch for deep changes in the object
        immediate: false
        // Don't trigger on initial mount
      }
    );
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          new: newOptions,
          old: oldOptions,
          currentStep: currentTabIndex.value
        });
      },
      { deep: true }
    );
    onMounted(() => {
      currentTabIndex.value = props.startIndex;
      setActiveIndex();
      emit("change", currentTabIndex.value);
    });
    const displayPrevTab = computed(() => {
      return currentTabIndex.value !== 0;
    });
    const isLastStep = computed(() => {
      return currentTabIndex.value === maxTabIndex.value;
    });
    const containerClasses = computed(() => {
      return [
        "form-wizard-vue",
        { "fw-vertical": props.verticalTabs },
        { "fw-overflow-scroll": props.scrollableTabs },
        { "fw-card": props.cardBackground }
      ];
    });
    const setActiveIndex = () => {
      emit("updated:tabs", tabs.value, currentTabIndex.value);
    };
    const nextTab = async () => {
      if (currentTabIndex.value === maxTabIndex.value) {
        if (!doneButtonOptions.value.disabled) completeWizard();
        return;
      }
      if (nextButtonOptions.value.disabled) return;
      const newTabIndex = currentTabIndex.value + 1;
      const oldTabIndex = currentTabIndex.value;
      if (!props.navigableTabs) {
        emit("change", newTabIndex, oldTabIndex, true);
        return;
      }
      emit("change", newTabIndex, oldTabIndex);
      await props.beforeChange();
      changeTab(newTabIndex);
    };
    const prevTab = async () => {
      if (currentTabIndex.value === 0 || backButtonOptions.value.disabled) return;
      const newTabIndex = currentTabIndex.value - 1;
      const oldTabIndex = currentTabIndex.value;
      emit("change", newTabIndex, oldTabIndex);
      await props.beforeChange();
      changeTab(newTabIndex);
    };
    const completeWizard = () => {
      const newTabIndex = currentTabIndex.value;
      const oldTabIndex = currentTabIndex.value - 1;
      emit("complete:wizard", newTabIndex, oldTabIndex);
    };
    const navigateToTab = async (index) => {
      if (!props.navigableTabs) return;
      const newTabIndex = index;
      const oldTabIndex = currentTabIndex.value;
      emit("change", newTabIndex, oldTabIndex);
      await props.beforeChange();
      changeTab(newTabIndex);
    };
    const changeTab = async (newTabIndex) => {
      currentTabIndex.value = newTabIndex;
      setActiveIndex();
      await nextTick();
      await props.beforeMount();
    };
    __expose({
      changeTab
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        class: normalizeClass(containerClasses.value)
      }, [
        __props.showWizard ? (openBlock(), createElementBlock("ul", _hoisted_2, [
          createBaseVNode("h4", _hoisted_3, toDisplayString(__props.headingTitle), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab, index) => {
            return renderSlot(_ctx.$slots, "wizard-step", {
              tab,
              index,
              navigateToTab
            }, () => [
              (openBlock(), createBlock(_sfc_main$2, {
                key: tab.id,
                tab,
                index,
                currentIndex: unref(currentTabIndex),
                squaredTab: __props.squaredTabs,
                showProgress: __props.showProgress,
                onClick: ($event) => navigateToTab(index)
              }, {
                "active-step": withCtx(() => [
                  renderSlot(_ctx.$slots, "active-step")
                ]),
                title: withCtx(() => [
                  renderSlot(_ctx.$slots, "title")
                ]),
                _: 3
              }, 8, ["tab", "index", "currentIndex", "squaredTab", "showProgress", "onClick"]))
            ]);
          }), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              renderSlot(_ctx.$slots, "default")
            ])
          ]),
          !__props.hideButtons ? (openBlock(), createElementBlock("div", _hoisted_7, [
            renderSlot(_ctx.$slots, "footer", {}, () => [
              createBaseVNode("div", _hoisted_8, [
                displayPrevTab.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  role: "button",
                  onClick: prevTab
                }, [
                  renderSlot(_ctx.$slots, "back", {}, () => [
                    createVNode(_sfc_main$1, { options: backButtonOptions.value }, null, 8, ["options"])
                  ])
                ])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "custom-buttons-left")
              ]),
              createBaseVNode("div", _hoisted_9, [
                renderSlot(_ctx.$slots, "custom-buttons-right"),
                isLastStep.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  role: "button",
                  onClick: nextTab
                }, [
                  renderSlot(_ctx.$slots, "done", {}, () => [
                    createVNode(_sfc_main$1, { options: doneButtonOptions.value }, null, 8, ["options"])
                  ])
                ])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  role: "button",
                  onClick: nextTab
                }, [
                  renderSlot(_ctx.$slots, "next", {}, () => [
                    createVNode(_sfc_main$1, { options: nextButtonOptions.value }, null, 8, ["options"])
                  ])
                ]))
              ])
            ])
          ])) : createCommentVNode("", true)
        ])
      ], 10, _hoisted_1);
    };
  }
});

const useFormWizard = () => {
  const currentTabIndex = ref("");
  const onChangeCurrentTab = (index) => {
    if (index % 1 === 0) currentTabIndex.value = index;
  };
  const onTabBeforeChange = (index) => {
    if (currentTabIndex.value === 0) {
      console.log("First Tab");
    }
    onChangeCurrentTab(index);
  };
  const changeBtnIconPosition = () => {
    nextTick(() => {
      const button = document.querySelector(".fw-footer-left .fw-btn");
      if (!button) return;
      const span = button.querySelector("span");
      const icon = button.querySelector("i");
      if (!span || !icon) return;
      button.removeChild(span);
      button.removeChild(icon);
      button.appendChild(icon);
      button.appendChild(span);
    });
  };
  return {
    currentTabIndex,
    onChangeCurrentTab,
    onTabBeforeChange,
    changeBtnIconPosition
  };
};

export { _sfc_main as _, useFormWizard as u };
