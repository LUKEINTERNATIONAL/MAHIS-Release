import { q as defineComponent, I as IonHeader, bc as IonFooter, e$ as IonItemOptions, f0 as IonItemOption, f1 as IonItemSliding, bR as IonSearchbar, cD as IonCardSubtitle, bH as IonBadge, e1 as IonAvatar, K as IonIcon, M as IonButton, ad as IonCheckbox, ba as IonCardContent, b7 as IonCardTitle, bs as IonPage, b8 as IonCardHeader, bJ as IonCard, a6 as IonLabel, an as IonItem, am as IonList, ay as IonCol, ae as IonRow, ax as IonGrid, aD as IonContent, f as ref, c as computed, bZ as chevronUp, bY as chevronDown, f2 as linkOutline, f3 as location, f4 as fingerPrint, dr as calendar, cd as personCircle, f5 as male, f6 as female, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, x as createElementBlock, H as Fragment, Q as renderList, A as createBaseVNode, G as createCommentVNode, a3 as normalizeClass, C as toDisplayString, a4 as createTextVNode } from './vendor-xvx_X2hj.js';
import { N as NavigationMenu } from './NavigationMenu-BqLc-B7O.js';
import { B as BottomNavBar } from './bottomNavBar-CHXJrGC0.js';
import { P as PatientService, G as toastSuccess, t as toastWarning, _ as _export_sfc } from '../index-D5ZuGc-h.js';
import { E as EIRreportsStore } from './EIRreportsStore-D_Q0RxBh.js';

const _sfc_main = defineComponent({
  name: "ClientDeduplication",
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonPage,
    IonCardTitle,
    IonCardContent,
    IonCheckbox,
    IonButton,
    IonIcon,
    IonAvatar,
    IonBadge,
    NavigationMenu,
    IonCardSubtitle,
    IonSearchbar,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonFooter,
    bottomNavBar: BottomNavBar,
    IonHeader
  },
  setup() {
    const clients = ref([]);
    const filteredClients = ref([]);
    const selectedPrimaryClient = ref(null);
    const programId = ref(33);
    const searchQuery = ref("");
    const totalCount = ref(0);
    const currentPage = ref(1);
    const itemsPer_Page = ref(10);
    const showNavBar = computed(() => true);
    const handlePaginationUpdate = async ({ page, itemsPerPage }) => {
      currentPage.value = page;
      itemsPer_Page.value = itemsPerPage;
      await initNavData();
    };
    const toggleClientDetails = (client) => {
      if (selectedPrimaryClient.value === client) {
        selectedPrimaryClient.value = null;
      } else {
        selectedPrimaryClient.value = client;
      }
    };
    const hasSelectedDuplicates = (client) => {
      return client.duplicates.some((d) => d.selected);
    };
    const mergeSelected = async (client) => {
      const selectedDuplicates = client.duplicates.filter((d) => d.selected);
      const mergePayload = {
        primary: {
          patient_id: client.primary_patient_id
        },
        secondary: selectedDuplicates.map((d) => ({ patient_id: d.secondary_patient_id })),
        program_id: programId.value
      };
      try {
        console.log("Merge Payload:", mergePayload);
        await PatientService.mergePatients(mergePayload);
        selectedPrimaryClient.value = null;
        toastSuccess("Clients merged successfully");
        await initNavData();
      } catch (error) {
        console.error("Error merging clients:", error);
        toastWarning("Failed to merge clients. Please try again.");
      }
    };
    const initNavData = async () => {
      try {
        const store = EIRreportsStore();
        store.setNavigationPayload("Client De-Duplication", true, false, "/", "home", "");
        const duplicateClients = await PatientService.getCachedClientProfileDuplicates(currentPage.value, itemsPer_Page.value);
        clients.value = duplicateClients.results;
        totalCount.value = duplicateClients.count;
        filteredClients.value = clients.value;
      } catch (error) {
        console.error("Error fetching duplicate clients:", error);
      }
    };
    const getGenderIcon = (gender) => {
      return gender.toUpperCase() === "M" ? male : female;
    };
    const filterClients = () => {
      if (!searchQuery.value) {
        filteredClients.value = clients.value;
      } else {
        filteredClients.value = clients.value.filter((client) => {
          const fullName = `${client.primary_given_name} ${client.primary_family_name}`.toLowerCase();
          const query = searchQuery.value.toLowerCase();
          const patientId = String(client.primary_patient_id);
          return fullName.includes(query) || patientId.includes(query);
        });
      }
    };
    const viewDetails = (duplicate) => {
      console.log("View details for:", duplicate);
    };
    return {
      clients,
      filteredClients,
      selectedPrimaryClient,
      toggleClientDetails,
      hasSelectedDuplicates,
      mergeSelected,
      programId,
      initNavData,
      getGenderIcon,
      searchQuery,
      filterClients,
      viewDetails,
      personCircle,
      calendar,
      fingerPrint,
      location,
      linkOutline,
      chevronDown,
      chevronUp,
      showNavBar,
      totalCount,
      currentPage,
      itemsPer_Page,
      handlePaginationUpdate
    };
  },
  watch: {
    $route: {
      handler(to) {
        if (to.name === "Deduplicateclients") {
          this.initNavData();
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.initNavData();
  }
});

const _hoisted_1 = { class: "sticky-header" };
const _hoisted_2 = {
  key: 0,
  class: "client-details"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavigationMenu = resolveComponent("NavigationMenu");
  const _component_ion_searchbar = resolveComponent("ion-searchbar");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_avatar = resolveComponent("ion-avatar");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_badge = resolveComponent("ion-badge");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_card_subtitle = resolveComponent("ion-card-subtitle");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_checkbox = resolveComponent("ion-checkbox");
  const _component_ion_item_option = resolveComponent("ion-item-option");
  const _component_ion_item_options = resolveComponent("ion-item-options");
  const _component_ion_item_sliding = resolveComponent("ion-item-sliding");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_bottomNavBar = resolveComponent("bottomNavBar");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_NavigationMenu),
      createVNode(_component_ion_header, {
        style: { "background-color": "transparent" },
        class: "ion-no-border"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(_component_ion_col, {
                size: "12",
                "size-md": "10",
                "size-lg": "8",
                "offset-md": "1",
                "offset-lg": "2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_searchbar, {
                    placeholder: "Search clients",
                    modelValue: _ctx.searchQuery,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchQuery = $event),
                    onIonInput: _ctx.filterClients
                  }, null, 8, ["modelValue", "onIonInput"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createVNode(_component_ion_grid, null, {
            default: withCtx(() => [
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, {
                    size: "12",
                    "size-md": "10",
                    "size-lg": "8",
                    "offset-md": "1",
                    "offset-lg": "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_content, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_list, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filteredClients, (client) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: client.primary_patient_id,
                                      class: "client-container"
                                    }, [
                                      createBaseVNode("div", _hoisted_1, [
                                        createVNode(_component_ion_item, {
                                          button: "",
                                          onClick: ($event) => _ctx.toggleClientDetails(client),
                                          class: normalizeClass({ "selected-client": _ctx.selectedPrimaryClient === client })
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_avatar, { slot: "start" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_icon, {
                                                  icon: _ctx.personCircle,
                                                  size: "large",
                                                  color: _ctx.selectedPrimaryClient === client ? "primary" : "medium"
                                                }, null, 8, ["icon", "color"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_ion_label, null, {
                                              default: withCtx(() => [
                                                createBaseVNode("h2", null, toDisplayString(client.primary_given_name) + " " + toDisplayString(client.primary_family_name), 1),
                                                createBaseVNode("p", null, "ID: " + toDisplayString(client.primary_patient_id), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_ion_badge, {
                                              color: "warning",
                                              slot: "end"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(client.duplicates.length), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_ion_icon, {
                                              icon: _ctx.selectedPrimaryClient === client ? _ctx.chevronUp : _ctx.chevronDown,
                                              slot: "end"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick", "class"])
                                      ]),
                                      _ctx.selectedPrimaryClient === client ? (openBlock(), createElementBlock("div", _hoisted_2, [
                                        createVNode(_component_ion_card, { style: { "margin-bottom": "10px", "margin-top": "5px" } }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_card_header, { color: "light" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_card_subtitle, null, {
                                                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                                                    createTextVNode("Primary Client Details", -1)
                                                  ])]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_ion_card_content, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_grid, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ion_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_ion_col, {
                                                          size: "12",
                                                          "size-md": "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_ion_item, { lines: "none" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_ion_icon, {
                                                                  icon: _ctx.calendar,
                                                                  slot: "start",
                                                                  color: "primary"
                                                                }, null, 8, ["icon"]),
                                                                createVNode(_component_ion_label, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Birth Date: " + toDisplayString(client.primary_birthdate), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_ion_col, {
                                                          size: "12",
                                                          "size-md": "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_ion_item, { lines: "none" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_ion_icon, {
                                                                  icon: _ctx.getGenderIcon(client.primary_gender),
                                                                  slot: "start",
                                                                  color: "primary"
                                                                }, null, 8, ["icon"]),
                                                                createVNode(_component_ion_label, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Gender: " + toDisplayString(client.primary_gender), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_ion_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_ion_col, { size: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_ion_item, { lines: "none" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_ion_icon, {
                                                                  icon: _ctx.location,
                                                                  slot: "start",
                                                                  color: "primary"
                                                                }, null, 8, ["icon"]),
                                                                createVNode(_component_ion_label, { class: "ion-text-wrap" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Address: " + toDisplayString(client.primary_home_village) + ", " + toDisplayString(client.primary_home_ta) + ", " + toDisplayString(client.primary_home_district), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_ion_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_card_header, { color: "light" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_card_subtitle, null, {
                                                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                                                    createTextVNode("Potential Duplicates", -1)
                                                  ])]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_ion_card_content, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_ion_list, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createElementBlock(Fragment, null, renderList(client.duplicates, (duplicate) => {
                                                      return openBlock(), createBlock(_component_ion_item_sliding, {
                                                        key: duplicate.secondary_patient_id
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_ion_item, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_ion_checkbox, {
                                                                slot: "start",
                                                                modelValue: duplicate.selected,
                                                                "onUpdate:modelValue": ($event) => duplicate.selected = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_ion_label, null, {
                                                                default: withCtx(() => [
                                                                  createBaseVNode("h2", null, toDisplayString(duplicate.secondary_given_name) + " " + toDisplayString(duplicate.secondary_family_name), 1),
                                                                  createVNode(_component_ion_badge, { color: "primary" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Match: " + toDisplayString(duplicate.match_percentage) + "%", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createBaseVNode("p", null, "ID: " + toDisplayString(duplicate.secondary_patient_id), 1),
                                                                  createBaseVNode("p", null, " Birth Date: " + toDisplayString(duplicate.secondary_birthdate) + " | Gender: " + toDisplayString(duplicate.secondary_gender), 1),
                                                                  createBaseVNode("p", null, " Address: " + toDisplayString(duplicate.secondary_home_village) + ", " + toDisplayString(duplicate.secondary_home_ta) + ", " + toDisplayString(duplicate.secondary_home_district), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_ion_item_options, { side: "end" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_ion_item_option, {
                                                                color: "primary",
                                                                onClick: ($event) => _ctx.viewDetails(duplicate)
                                                              }, {
                                                                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                                                  createTextVNode("View", -1)
                                                                ])]),
                                                                _: 1
                                                              }, 8, ["onClick"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_ion_button, {
                                          expand: "block",
                                          onClick: ($event) => _ctx.mergeSelected(client),
                                          disabled: !_ctx.hasSelectedDuplicates(client),
                                          class: "ion-margin-top"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_icon, {
                                              icon: _ctx.linkOutline,
                                              slot: "start"
                                            }, null, 8, ["icon"]),
                                            _cache[4] || (_cache[4] = createTextVNode(" Merge Selected ", -1))
                                          ]),
                                          _: 1
                                        }, 8, ["onClick", "disabled"])
                                      ])) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_footer, { class: "sticky-footer" }, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(_component_ion_col, {
                size: "12",
                style: { "max-width": "100%" }
              }, {
                default: withCtx(() => [
                  _ctx.showNavBar ? (openBlock(), createBlock(_component_bottomNavBar, {
                    key: 0,
                    totalItems: _ctx.totalCount,
                    currentPage: _ctx.currentPage,
                    itemsPerPage: _ctx.itemsPer_Page,
                    "onUpdate:pagination": _ctx.handlePaginationUpdate
                  }, null, 8, ["totalItems", "currentPage", "itemsPerPage", "onUpdate:pagination"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const deduplicateClients = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4495dd33"]]);

export { deduplicateClients as default };
