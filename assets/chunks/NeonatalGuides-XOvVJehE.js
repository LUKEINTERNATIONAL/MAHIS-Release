import { s as defineComponent, a2 as onMounted, a3 as onUnmounted, y as openBlock, z as createElementBlock, O as createBlock, F as unref, N as IonButton, B as withCtx, A as createVNode, fo as menu, L as IonIcon, a5 as createTextVNode, H as createCommentVNode, C as createBaseVNode, bT as IonSearchbar, J as Fragment, R as renderList, b_ as chevronDown, bm as chevronForward, D as toDisplayString, a4 as normalizeClass, f as ref, c as computed, aG as IonContent, fp as book, bu as IonPage } from './vendor-CL0dVHZq.js';
import { _ as _export_sfc, T as Toolbar, co as InfographicDisplay } from '../index-yRu5EhmF.js';
import { neonatalInfographics } from './infographics-c_0oATqD.js';

const _hoisted_1$1 = { class: "toc-search" };
const _hoisted_2$1 = { class: "toc-list" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "category-name" };
const _hoisted_5$1 = { class: "category-count" };
const _hoisted_6$1 = {
  key: 0,
  class: "category-items"
};
const _hoisted_7$1 = ["href", "onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableOfContents",
  props: {
    categories: {},
    activeGuide: {}
  },
  emits: ["guide-selected"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const menuIcon = menu;
    const chevronDownIcon = chevronDown;
    const chevronForwardIcon = chevronForward;
    const isMobile = ref(false);
    const isMobileOpen = ref(false);
    const searchQuery = ref("");
    const expandedCategories = ref(/* @__PURE__ */ new Set());
    onMounted(() => {
      props.categories.forEach((cat) => {
        expandedCategories.value.add(cat.name);
      });
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      window.addEventListener("scroll", updateActiveGuide);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", updateActiveGuide);
    });
    const checkIfMobile = () => {
      isMobile.value = window.innerWidth < 1024;
      if (!isMobile.value) {
        isMobileOpen.value = false;
      }
    };
    const toggleMobileToc = () => {
      isMobileOpen.value = !isMobileOpen.value;
    };
    const toggleCategory = (categoryName) => {
      if (expandedCategories.value.has(categoryName)) {
        expandedCategories.value.delete(categoryName);
      } else {
        expandedCategories.value.add(categoryName);
      }
    };
    const filteredCategories = computed(() => {
      if (!searchQuery.value.trim()) {
        return props.categories.map((cat) => ({
          ...cat,
          expanded: expandedCategories.value.has(cat.name)
        }));
      }
      const query = searchQuery.value.toLowerCase();
      return props.categories.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) => item.title.toLowerCase().includes(query)
        ),
        expanded: true
      })).filter((cat) => cat.items.length > 0);
    });
    const handleSearch = () => {
    };
    const handleItemClick = (key) => {
      emit("guide-selected", key);
      if (isMobile.value) {
        isMobileOpen.value = false;
      }
    };
    const updateActiveGuide = () => {
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["toc-container", { "toc-mobile-open": isMobileOpen.value }])
      }, [
        isMobile.value ? (openBlock(), createBlock(unref(IonButton), {
          key: 0,
          class: "toc-toggle",
          fill: "clear",
          onClick: toggleMobileToc
        }, {
          default: withCtx(() => [
            createVNode(unref(IonIcon), {
              icon: unref(menuIcon),
              slot: "start"
            }, null, 8, ["icon"]),
            _cache[1] || (_cache[1] = createTextVNode(" Table of Contents ", -1))
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["toc-content", { "toc-hidden": isMobile.value && !isMobileOpen.value }])
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(unref(IonSearchbar), {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
              placeholder: "Search guides...",
              onIonInput: handleSearch
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_2$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
              return openBlock(), createElementBlock("div", {
                key: category.name,
                class: "toc-category"
              }, [
                createBaseVNode("div", {
                  class: "category-header",
                  onClick: ($event) => toggleCategory(category.name)
                }, [
                  createVNode(unref(IonIcon), {
                    icon: category.expanded ? unref(chevronDownIcon) : unref(chevronForwardIcon),
                    class: "expand-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("span", _hoisted_4$1, toDisplayString(category.name), 1),
                  createBaseVNode("span", _hoisted_5$1, toDisplayString(category.items.length), 1)
                ], 8, _hoisted_3$1),
                category.expanded ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(category.items, (item) => {
                    return openBlock(), createElementBlock("a", {
                      key: item.key,
                      href: `#guide-${item.key}`,
                      class: normalizeClass(["toc-item", { active: __props.activeGuide === item.key }]),
                      onClick: ($event) => handleItemClick(item.key)
                    }, [
                      _cache[2] || (_cache[2] = createBaseVNode("span", { class: "item-dot" }, null, -1)),
                      createTextVNode(" " + toDisplayString(item.title), 1)
                    ], 10, _hoisted_7$1);
                  }), 128))
                ])) : createCommentVNode("", true)
              ]);
            }), 128))
          ])
        ], 2),
        isMobile.value && isMobileOpen.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "toc-overlay",
          onClick: toggleMobileToc
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});

const TableOfContents = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-351bbb11"]]);

const _hoisted_1 = { class: "guides-container" };
const _hoisted_2 = { class: "toc-sidebar" };
const _hoisted_3 = { class: "guides-main" };
const _hoisted_4 = { class: "guides-scroll-area" };
const _hoisted_5 = {
  key: 0,
  class: "guides-list"
};
const _hoisted_6 = { class: "guide-header" };
const _hoisted_7 = {
  key: 1,
  class: "guides-placeholder"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalGuides",
  setup(__props) {
    const bookIcon = book;
    const activeGuide = ref("");
    const selectedGuide = ref(null);
    const infographicConfig = computed(() => {
      if (!selectedGuide.value?.data) {
        return {
          componentType: "infographicField",
          infographicData: { key: "empty", sections: [] },
          displayMode: "list",
          showStepNumber: false
        };
      }
      return {
        componentType: "infographicField",
        infographicData: selectedGuide.value.data,
        displayMode: "list",
        showStepNumber: false
      };
    });
    const guideCategories = computed(() => {
      const categories = [
        {
          name: "Emergency Management",
          keys: ["EmergencyManagement", "EmergencyTriage", "EmergencyTriageObservations"]
        },
        {
          name: "Respiratory Assessment & Management",
          keys: [
            "RespiratoryDistressSigns",
            "ListenForBreathingSounds",
            "RespiratoryRate",
            "GruntingSevereChestIndrawings",
            "GruntingIndrawingManagement",
            "BabyRecoveredStillSevereRespiratory",
            "BagValveMaskUsage"
          ]
        },
        {
          name: "Oxygenation & Monitoring",
          keys: ["StartMeasuringOxygenSaturation", "CentralCyanosis", "CentralCyanosisManagement"]
        },
        {
          name: "Temperature & Thermal Regulation",
          keys: ["KeepWarmDryCovered", "WarmTheBody", "KeepTheBodyWarm"]
        },
        {
          name: "Neurological Assessment",
          keys: [
            "ConsulvionsTwitching",
            "ConvulsionsManagement",
            "NeurologicalToneAssessment",
            "NeurologicalSuckReflex",
            "NeurologicalGraspReflex",
            "NeurologicalMoroReflex"
          ]
        },
        {
          name: "Referral & Transport",
          keys: ["ReferralInstructions"]
        }
      ];
      return categories.map((category) => ({
        name: category.name,
        expanded: true,
        items: category.keys.map((key) => {
          const infographic = neonatalInfographics.find((inf) => inf.key === key);
          if (!infographic) return null;
          return {
            key,
            title: formatTitle(key),
            data: infographic
          };
        }).filter((item) => item !== null)
      }));
    });
    const formatTitle = (key) => {
      return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
    };
    const scrollToGuide = (key) => {
      activeGuide.value = key;
      for (const category of guideCategories.value) {
        const guide = category.items.find((item) => item.key === key);
        if (guide) {
          selectedGuide.value = guide;
          break;
        }
      }
    };
    onMounted(() => {
      if (guideCategories.value.length > 0 && guideCategories.value[0].items.length > 0) {
        const firstGuide = guideCategories.value[0].items[0];
        selectedGuide.value = firstGuide;
        activeGuide.value = firstGuide.key;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), {
            fullscreen: true,
            class: "guides-content",
            "scroll-y": false
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("aside", _hoisted_2, [
                  createVNode(TableOfContents, {
                    categories: guideCategories.value,
                    "active-guide": activeGuide.value,
                    onGuideSelected: scrollToGuide
                  }, null, 8, ["categories", "active-guide"])
                ]),
                createBaseVNode("main", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    selectedGuide.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("h1", null, toDisplayString(selectedGuide.value.title), 1)
                      ]),
                      (openBlock(), createBlock(InfographicDisplay, {
                        key: selectedGuide.value.key,
                        config: infographicConfig.value,
                        "all-form-values": {}
                      }, null, 8, ["config"]))
                    ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
                      createVNode(unref(IonIcon), {
                        icon: unref(bookIcon),
                        class: "placeholder-icon"
                      }, null, 8, ["icon"]),
                      _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Select a guide to view", -1)),
                      _cache[1] || (_cache[1] = createBaseVNode("p", null, "Choose an instruction guide from the menu to display its content", -1))
                    ]))
                  ])
                ])
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

const NeonatalGuides = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f11ab10c"]]);

export { NeonatalGuides as default };
