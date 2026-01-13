import { q as defineComponent, L as IonIcon, N as IonButton, ay as IonCol, af as IonRow, ax as IonGrid, b9 as IonCardContent, b6 as IonCardTitle, b7 as IonCardHeader, bI as IonCard, aA as IonToolbar, aB as IonTitle, br as IonPage, I as IonHeader, H as IonContent, cM as openOutline, dU as ribbonOutline, dV as schoolOutline, dW as briefcaseOutline, aS as heartOutline, b4 as calendarOutline, s as documentTextOutline, al as informationCircleOutline, aY as locationOutline, aX as personOutline, v as resolveComponent, x as createElementBlock, y as openBlock, B as createBaseVNode, z as createVNode, A as withCtx, J as Fragment, R as renderList, a5 as createTextVNode, C as toDisplayString, G as createCommentVNode, P as normalizeStyle, O as createBlock, a4 as normalizeClass, cs as useRoute, r as ref, a as reactive, a2 as onMounted, w as watch, S as withDirectives, E as unref, au as searchOutline, T as vShow, bb as IonFooter } from './vendor-BPW-J91F.js';
import { N as NavigationMenu } from './NavigationMenu-CVoLr4K3.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';
import { E as EIRreportsStore } from './EIRreportsStore-PmhL0zMd.js';
import { P as PatientService, u as useDemographicsStore, _ as _export_sfc, ab as useUserStore, B as BasicInputField } from '../index-D7kYL7Nj.js';
import { B as BottomNavBar } from './bottomNavBar-DYupvnoh.js';

const _sfc_main$2 = defineComponent({
  name: "ClientDetailsCard",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon
  },
  props: {
    clients: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      personOutline,
      locationOutline,
      informationCircleOutline,
      documentTextOutline,
      calendarOutline,
      heartOutline,
      briefcaseOutline,
      schoolOutline,
      ribbonOutline,
      openOutline
    };
  },
  methods: {
    calculateAge(birthdate) {
      const today = /* @__PURE__ */ new Date();
      const birthdateObj = new Date(birthdate);
      let age = today.getFullYear() - birthdateObj.getFullYear();
      const monthDiff = today.getMonth() - birthdateObj.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthdateObj.getDate()) {
        age--;
      }
      return age;
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    },
    findPersonAttribute(client, attributeName) {
      const attribute = client.person.person_attributes.find((attr) => attr.type.name === attributeName);
      return attribute ? attribute.value : "N/A";
    },
    toggleDetails(client) {
      client.showDetails = !client.showDetails;
    },
    async openClientProfile(patient_identifiers) {
      patient_identifiers.forEach(async (identifier) => {
        if (identifier.type.patient_identifier_type_id == 3) {
          const patientData = await PatientService.findByNpid(identifier.identifier);
          useDemographicsStore().setPatientRecord(patientData[0]);
          this.redirectUser();
        }
      });
    },
    redirectUser() {
      const roleData = JSON.parse(localStorage.getItem("userRoles"));
      const roles = roleData ? roleData : [];
      if (roles.some((role) => roles.some((role2) => role2.role === "Pharmacist"))) {
        this.$router.push("NCDDispensations");
      } else {
        this.$router.push("patientProfile");
      }
    }
  },
  mounted() {
    this.clients.forEach((client) => {
      client.showDetails = false;
    });
  },
  emits: ["view-profile"]
});

const _hoisted_1$2 = { class: "cards-container" };
const _hoisted_2$2 = { class: "flex items-center mb-3 ion-align-items-center" };
const _hoisted_3$1 = { class: "flex flex-col overflow-hidden" };
const _hoisted_4 = { class: "font-semibold text-gray-800 truncate" };
const _hoisted_5 = { class: "flex items-center mb-3 ion-align-items-center" };
const _hoisted_6 = { class: "flex flex-col overflow-hidden" };
const _hoisted_7 = { class: "font-semibold text-gray-800 truncate" };
const _hoisted_8 = { class: "mt-4" };
const _hoisted_9 = { class: "flex items-center mb-3 p-2 hover:bg-indigo-100 rounded transition-colors duration-200" };
const _hoisted_10 = { class: "flex flex-col" };
const _hoisted_11 = { class: "font-semibold text-gray-800" };
const _hoisted_12 = { class: "flex items-center mb-3 p-2 hover:bg-indigo-100 rounded transition-colors duration-200" };
const _hoisted_13 = { class: "flex flex-col" };
const _hoisted_14 = { class: "font-semibold text-gray-800" };
const _hoisted_15 = { class: "flex items-center mb-3 p-2 hover:bg-indigo-100 rounded transition-colors duration-200" };
const _hoisted_16 = { class: "flex flex-col" };
const _hoisted_17 = { class: "font-semibold text-gray-800" };
const _hoisted_18 = { class: "flex items-center mb-3 p-2 hover:bg-indigo-100 rounded transition-colors duration-200" };
const _hoisted_19 = { class: "flex flex-col" };
const _hoisted_20 = { class: "font-semibold text-gray-800" };
const _hoisted_21 = { class: "flex items-center mb-3 p-2 hover:bg-indigo-100 rounded transition-colors duration-200" };
const _hoisted_22 = { class: "flex flex-col" };
const _hoisted_23 = { class: "font-semibold text-gray-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$2, [
      createVNode(_component_ion_row, { class: "responsive-row" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.clients, (client) => {
            return openBlock(), createElementBlock("div", {
              key: client.patient_id,
              class: "card-wrapper"
            }, [
              createVNode(_component_ion_card, { class: "shadow-md hover:shadow-lg transition-shadow client-card" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_header, { class: "relative" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_row, { class: "ion-align-items-start" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, {
                            size: "10",
                            class: "ion-text-left"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_title, { class: "text-indigo-800 client-name-title" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_button, {
                                    fill: "clear",
                                    style: { "font-size": "1.4rem" },
                                    onClick: ($event) => _ctx.openClientProfile(client.patient_identifiers)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(client.person.names[0].given_name) + " " + toDisplayString(client.person.names[0].family_name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_ion_col, {
                            size: "2",
                            class: "ion-text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_button, {
                                fill: "clear",
                                class: "absolute top-0 right-0 z-10 text-indigo-600 open-icon-button",
                                onClick: ($event) => _ctx.openClientProfile(client.patient_identifiers),
                                style: { "font-size": "1.4rem" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_icon, {
                                    icon: _ctx.openOutline,
                                    style: { "font-size": "2rem" }
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_card_content, { class: "card-content" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2$2, [
                        createVNode(_component_ion_icon, {
                          icon: _ctx.personOutline,
                          class: "mr-2 flex-shrink-0 text-indigo-600"
                        }, null, 8, ["icon"]),
                        createBaseVNode("div", _hoisted_3$1, [
                          createBaseVNode("span", _hoisted_4, toDisplayString(client.person.gender) + " | " + toDisplayString(_ctx.calculateAge(client.person.birthdate)) + " years", 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(_component_ion_icon, {
                          icon: _ctx.locationOutline,
                          class: "mr-2 flex-shrink-0 text-indigo-600"
                        }, null, 8, ["icon"]),
                        createBaseVNode("div", _hoisted_6, [
                          createBaseVNode("span", _hoisted_7, toDisplayString(client.person.addresses[0]?.city_village) + ", " + toDisplayString(client.person.addresses[0]?.state_province), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_8, [
                        createVNode(_component_ion_button, {
                          onClick: ($event) => _ctx.toggleDetails(client),
                          fill: "outline",
                          size: "small",
                          class: "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: _ctx.informationCircleOutline,
                              class: "mr-2"
                            }, null, 8, ["icon"]),
                            createTextVNode(" " + toDisplayString(client.showDetails ? "Hide Details" : "Show More Details"), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        client.showDetails ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "mt-4 bg-indigo-50 p-4 rounded-lg border border-indigo-100 shadow-inner",
                          style: normalizeStyle({ maxHeight: client.showDetails ? "1000px" : "0" })
                        }, [
                          _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "text-lg font-semibold mb-3 flex items-center text-indigo-800 border-b border-indigo-200 pb-2" }, " Personal Information ", -1)),
                          createVNode(_component_ion_grid, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_col, { size: "auto" }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_9, [
                                        createVNode(_component_ion_icon, {
                                          icon: _ctx.calendarOutline,
                                          class: "mr-2 flex-shrink-0 text-indigo-600"
                                        }, null, 8, ["icon"]),
                                        createBaseVNode("div", _hoisted_10, [
                                          createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.formatDate(client.person.birthdate)), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ion_col, { size: "auto" }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_12, [
                                        createVNode(_component_ion_icon, {
                                          icon: _ctx.heartOutline,
                                          class: "mr-2 flex-shrink-0 text-indigo-600"
                                        }, null, 8, ["icon"]),
                                        createBaseVNode("div", _hoisted_13, [
                                          createBaseVNode("span", _hoisted_14, toDisplayString(_ctx.findPersonAttribute(client, "Civil Status")), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ion_col, { size: "auto" }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_15, [
                                        createVNode(_component_ion_icon, {
                                          icon: _ctx.briefcaseOutline,
                                          class: "mr-2 flex-shrink-0 text-indigo-600"
                                        }, null, 8, ["icon"]),
                                        createBaseVNode("div", _hoisted_16, [
                                          createBaseVNode("span", _hoisted_17, toDisplayString(_ctx.findPersonAttribute(client, "Occupation")), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ion_col, { size: "auto" }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_18, [
                                        createVNode(_component_ion_icon, {
                                          icon: _ctx.schoolOutline,
                                          class: "mr-2 flex-shrink-0 text-indigo-600"
                                        }, null, 8, ["icon"]),
                                        createBaseVNode("div", _hoisted_19, [
                                          createBaseVNode("span", _hoisted_20, toDisplayString(_ctx.findPersonAttribute(client, "EDUCATION LEVEL")), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ion_col, {
                                    size: "12",
                                    "size-md": "6"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_21, [
                                        createVNode(_component_ion_icon, {
                                          icon: _ctx.ribbonOutline,
                                          class: "mr-2 flex-shrink-0 text-indigo-600"
                                        }, null, 8, ["icon"]),
                                        createBaseVNode("div", _hoisted_22, [
                                          createBaseVNode("span", _hoisted_23, toDisplayString(_ctx.findPersonAttribute(client, "Religion")), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "text-lg font-semibold mt-3 mb-2" }, "Identifiers", -1)),
                          createVNode(_component_ion_grid, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(client.patient_identifiers, (identifier) => {
                                    return openBlock(), createBlock(_component_ion_col, {
                                      key: identifier.uuid,
                                      size: "auto"
                                    }, {
                                      default: withCtx(() => [
                                        createBaseVNode("p", null, [
                                          createBaseVNode("strong", null, toDisplayString(identifier.type.name) + ":", 1),
                                          createTextVNode(" " + toDisplayString(identifier.identifier), 1)
                                        ])
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
                        ], 4)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]);
          }), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const NCDActivePatientsTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-82a37352"]]);

const _hoisted_1$1 = { class: "loader-content" };
const _hoisted_2$1 = {
  key: 0,
  class: "loader-message"
};
const __default__$1 = defineComponent({
  name: "ModernLoader"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    message: {
      type: String,
      default: "Loading..."
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["loader-container", { fullscreen: __props.fullscreen, inline: !__props.fullscreen }])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "spinner" }, [
            createBaseVNode("div", { class: "spinner-ring" }),
            createBaseVNode("div", { class: "spinner-core" })
          ], -1)),
          __props.message ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(__props.message), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});

const ModernLoader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-17c24025"]]);

const _hoisted_1 = { class: "container" };
const _hoisted_2 = {
  key: 1,
  class: "scrollable-content"
};
const _hoisted_3 = { class: "centered-content" };
const __default__ = defineComponent({
  name: "xxxComponent"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const route = useRoute();
    const userStore = useUserStore();
    const { userFacilityName, user_ID } = storeToRefs(userStore);
    const searchValue = ref("");
    const totalCount = ref(0);
    const clients = ref([]);
    const given_name = ref("");
    const family_name = ref("");
    const gender = ref("");
    const pagination = reactive({
      page: 1,
      itemsPerPage: 10
    });
    const isLoading = ref(false);
    const isInitialLoading = ref(true);
    const handlePaginationUpdate = ({ page, itemsPerPage }) => {
      pagination.page = page;
      pagination.itemsPerPage = itemsPerPage;
      getClients();
    };
    const getClients = async (showLoaders = true) => {
      if (showLoaders) {
        isLoading.value = true;
      }
      try {
        const response = await PatientService.getNCDClients(
          pagination.page,
          pagination.itemsPerPage,
          given_name.value,
          family_name.value,
          gender.value
        );
        totalCount.value = response.count;
        clients.value = response.results;
      } catch (error) {
      } finally {
        if (showLoaders) {
          isLoading.value = false;
          isInitialLoading.value = false;
        }
      }
    };
    const search_properties = [
      {
        placeHolder: "Search for client",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Please provide a reason"
      }
    ];
    async function notesUpDated_fn1(event) {
      try {
        searchValue.value = event.target.value;
        given_name.value = "";
        family_name.value = "";
        gender.value = "";
        if (searchValue.value.length > 0) {
          splitSearchText(searchValue.value);
          pagination.page = 1;
          await getClients();
        } else {
          await getClients(false);
        }
      } catch (error) {
        await getClients(false);
      }
    }
    function splitSearchText(searchText) {
      search_properties[0].dataValue.value = searchText;
      const splittedArray = searchText.split(" ");
      given_name.value = splittedArray[0];
      family_name.value = splittedArray.length >= 2 ? splittedArray[1] : "";
      gender.value = splittedArray.length >= 3 ? splittedArray[2] : "";
    }
    const initNavData = () => {
      const store = EIRreportsStore();
      store.setNavigationPayload(`NCD Active Patients (${userFacilityName.value})`, true, false, "/", "home", "");
      getClients();
    };
    onMounted(async () => {
      initNavData();
    });
    watch(
      () => route.name,
      (newRouteName) => {
        if (newRouteName === "NCDActivePatients") {
          initNavData();
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(NavigationMenu),
          isInitialLoading.value ? (openBlock(), createBlock(ModernLoader, {
            key: 0,
            fullscreen: true,
            message: "Loading patient data..."
          })) : createCommentVNode("", true),
          withDirectives(createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(unref(IonRow), { class: "search-container" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), {
                      class: "input-col",
                      size: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(BasicInputField, {
                          placeholder: search_properties[0].placeHolder,
                          icon: unref(searchOutline),
                          inputValue: search_properties[0].dataValue.value,
                          "onUpdate:inputValue": search_properties[0].dataHandler,
                          minHeight: 50,
                          "-inner-action-btn-propeties": ""
                        }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                isLoading.value && !isInitialLoading.value ? (openBlock(), createBlock(ModernLoader, {
                  key: 0,
                  message: "Fetching patients..."
                })) : createCommentVNode("", true),
                !isLoading.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    !isLoading.value || clients.value.length > 0 ? (openBlock(), createBlock(unref(IonRow), { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(NCDActivePatientsTemplate, { clients: clients.value }, null, 8, ["clients"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ], 512)), [
                  [vShow, !isInitialLoading.value]
                ]) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 512), [
            [vShow, !isInitialLoading.value]
          ]),
          withDirectives(createVNode(unref(IonFooter), { class: "sticky-footer" }, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), { size: "12" }, {
                    default: withCtx(() => [
                      createVNode(BottomNavBar, {
                        totalItems: totalCount.value,
                        currentPage: pagination.page,
                        itemsPerPage: pagination.itemsPerPage,
                        "onUpdate:pagination": handlePaginationUpdate
                      }, null, 8, ["totalItems", "currentPage", "itemsPerPage"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512), [
            [vShow, !isInitialLoading.value]
          ])
        ]),
        _: 1
      });
    };
  }
});

const NCDActivePatients = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5fa53b7"]]);

export { NCDActivePatients as default };
