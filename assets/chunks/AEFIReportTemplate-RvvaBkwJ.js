import { v as defineComponent, N as IonSpinner, M as IonIcon, a8 as IonLabel, ap as IonItem, ao as IonList, cF as IonCardSubtitle, b9 as IonCardTitle, bc as IonCardContent, aD as IonTitle, be as IonFooter, I as IonHeader, bL as IonCard, aF as IonContent, az as IonCol, ag as IonRow, aA as IonGrid, a3 as onMounted, w as watch, R as alertCircleOutline, aw as searchOutline, dk as eyeOutline, a$ as locationOutline, a_ as personOutline, b7 as calendarOutline, f as ref, r as reactive, c as computed, L as modalController, y as resolveComponent, z as openBlock, A as createElementBlock, B as createVNode, C as withCtx, a6 as createTextVNode, E as toDisplayString, D as createBaseVNode, P as createBlock, J as createCommentVNode, K as Fragment, S as renderList, bu as IonPage, Q as normalizeStyle } from './vendor-Cbv9TWZo.js';
import { B as BasicInputField, H as HisDate, _ as _export_sfc, P as PatientService, u as useDemographicsStore, o as createModal, aq as ConceptService } from '../index-DIdCIGDg.js';
import { m as mapState } from './pinia-C6LE2xz6.js';
import { f as getunderfiveImmunizationsDrugs, h as getAefiReport } from './vaccines_service-D-mB0gdI.js';
import { E as EIRreportsStore } from './EIRreportsStore-DKiM9pN2.js';
import { B as BottomNavBar } from './bottomNavBar-l4-CgbHA.js';

const _sfc_main$1 = defineComponent({
  name: "PersonCardComponent",
  components: {
    IonGrid,
    IonRow,
    bottomNavBar: BottomNavBar,
    IonCol,
    BasicInputField,
    IonContent,
    IonCard,
    IonHeader,
    IonFooter,
    IonTitle,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonSpinner
  },
  props: {
    people: {
      type: Array,
      required: true
    },
    headingText: {
      type: String,
      required: true,
      default: "Provide heading text"
    }
  },
  setup(props) {
    const searchText = ref("");
    const searchTextError = ref(false);
    const isLoading = ref(false);
    const error = ref("");
    const pagination = reactive({
      page: 1,
      itemsPerPage: 6
    });
    const displayPeople = computed(() => {
      if (!searchText.value) return props.people;
      const nameRegex = new RegExp(searchText.value, "i");
      return props.people.filter(
        (person) => nameRegex.test(person.given_name) || nameRegex.test(person.family_name)
      );
    });
    const paginatedItems = computed(() => {
      const start = (pagination.page - 1) * pagination.itemsPerPage;
      const end = start + pagination.itemsPerPage;
      return displayPeople.value.slice(start, end);
    });
    const isValidString = (input) => {
      const regex = /^[a-zA-Z\s]*$/;
      return regex.test(input);
    };
    const searchTextUpdated = (event) => {
      const target = event.target;
      searchText.value = target.value;
      searchTextError.value = !isValidString(searchText.value);
      pagination.page = 1;
    };
    const viewPatientProfile = async (clientId) => {
      try {
        const modal = await modalController.getTop();
        if (modal) {
          modal.dispatchEvent(new CustomEvent("view-client", { detail: { client_id: clientId } }));
        }
      } catch (error2) {
        console.error("Error viewing patient profile:", error2);
      }
    };
    const dismiss = async () => {
      try {
        await modalController.dismiss();
      } catch (error2) {
        console.error("Error dismissing modal:", error2);
      }
    };
    const handlePaginationUpdate = ({ page, itemsPerPage }) => {
      pagination.page = page;
      pagination.itemsPerPage = itemsPerPage;
    };
    const fetchData = async () => {
      isLoading.value = true;
      error.value = "";
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        isLoading.value = false;
      } catch (err) {
        isLoading.value = false;
        error.value = "Failed to fetch data. Please try again.";
        console.error("Error fetching data:", err);
      }
    };
    onMounted(() => {
      fetchData();
    });
    watch(searchText, () => {
      pagination.page = 1;
    });
    return {
      calendarOutline,
      personOutline,
      locationOutline,
      eyeOutline,
      searchOutline,
      alertCircleOutline,
      searchText,
      searchTextError,
      isLoading,
      error,
      displayPeople,
      paginatedItems,
      getBirthdateAge: HisDate.getBirthdateAge,
      searchTextUpdated,
      viewPatientProfile,
      dismiss,
      handlePaginationUpdate,
      pagination
    };
  }
});

const _hoisted_1$1 = {
  key: 0,
  class: "loading-spinner"
};
const _hoisted_2$1 = {
  key: 1,
  class: "error-message"
};
const _hoisted_3 = {
  key: 2,
  class: "no-results"
};
const _hoisted_4 = {
  key: 3,
  style: { "overflow-y": "auto" }
};
const _hoisted_5 = { class: "card-header" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_BasicInputField = resolveComponent("BasicInputField");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_bottomNavBar = resolveComponent("bottomNavBar");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, null, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, { style: { "padding": "1px" } }, {
              default: withCtx(() => [
                createVNode(_component_ion_title, { class: "modalTitle" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.headingText), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, { style: { "margin-left": "10px", "margin-right": "10px" } }, {
              default: withCtx(() => [
                createVNode(_component_BasicInputField, {
                  placeholder: "Find client",
                  icon: _ctx.searchOutline,
                  inputValue: _ctx.searchText,
                  "onUpdate:inputValue": _ctx.searchTextUpdated,
                  minHeight: 40
                }, null, 8, ["icon", "inputValue", "onUpdate:inputValue"]),
                createBaseVNode("div", null, [
                  _ctx.searchTextError ? (openBlock(), createBlock(_component_ion_label, {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode(" Only letters allowed ", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding"
    }, {
      default: withCtx(() => [
        _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(_component_ion_spinner, { name: "crescent" })
        ])) : _ctx.error ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createVNode(_component_ion_icon, { icon: _ctx.alertCircleOutline }, null, 8, ["icon"]),
          createBaseVNode("p", null, toDisplayString(_ctx.error), 1)
        ])) : _ctx.paginatedItems.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [..._cache[2] || (_cache[2] = [
          createBaseVNode("p", null, "No results found", -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.paginatedItems, (person) => {
                return openBlock(), createBlock(_component_ion_col, {
                  style: { "width": "900px" },
                  key: person.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_card, { class: "person-card" }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_content, { class: "person-card-23" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_5, [
                              createBaseVNode("div", null, [
                                createVNode(_component_ion_card_title, { style: { "font-size": "16px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(person.given_name) + " " + toDisplayString(person.family_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ion_label, { style: { "font-size": "17px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.getBirthdateAge(person.birthdate)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(_component_ion_icon, {
                                icon: _ctx.eyeOutline,
                                onClick: ($event) => _ctx.viewPatientProfile(person.patient_id),
                                class: "eye-icon",
                                "aria-label": "View patient profile"
                              }, null, 8, ["icon", "onClick"])
                            ]),
                            createVNode(_component_ion_list, {
                              lines: "none",
                              style: { "border-radius": "6px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_item, { class: "p-inf" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      class: "eye-icon",
                                      icon: _ctx.personOutline,
                                      slot: "start",
                                      "aria-hidden": "true"
                                    }, null, 8, ["icon"]),
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        _cache[3] || (_cache[3] = createBaseVNode("span", { class: "s-inf" }, "Gender:", -1)),
                                        createTextVNode(" " + toDisplayString(person.gender), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                _cache[5] || (_cache[5] = createBaseVNode("hr", { class: "solid-line" }, null, -1)),
                                createVNode(_component_ion_item, { class: "p-inf" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      class: "eye-icon",
                                      icon: _ctx.locationOutline,
                                      slot: "start",
                                      "aria-hidden": "true"
                                    }, null, 8, ["icon"]),
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        _cache[4] || (_cache[4] = createBaseVNode("span", { class: "s-inf" }, "Village:", -1)),
                                        createTextVNode(" " + toDisplayString(person.city_village), 1)
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
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ]))
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, {
      collapse: "fade",
      class: "ion-no-border"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                _ctx.displayPeople.length > 0 ? (openBlock(), createBlock(_component_bottomNavBar, {
                  key: 0,
                  style: { "margin-left": "20px", "margin-right": "20px" },
                  totalItems: _ctx.displayPeople.length,
                  currentPage: _ctx.pagination.page,
                  itemsPerPage: _ctx.pagination.itemsPerPage,
                  "onUpdate:pagination": _ctx.handlePaginationUpdate
                }, null, 8, ["totalItems", "currentPage", "itemsPerPage", "onUpdate:pagination"])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  id: "cbtn",
                  class: "btnText cbtn",
                  fill: "solid",
                  style: { "width": "130px", "margin-left": "20px" },
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss())
                }, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createTextVNode(" Cancel ", -1)
                  ])]),
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
  ], 64);
}
const PersonCardComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4ec49661"]]);

const _sfc_main = defineComponent({
  name: "TableComponent",
  components: { IonContent, IonPage, IonRow, IonCol },
  data() {
    const personsDemoData = ref([]);
    return {
      route: "",
      vaccines: [],
      categories: [
        {
          name: "Minor AEFIs",
          cases: []
        },
        {
          name: "Serious AEFIs",
          cases: []
        }
      ],
      personsDemoData
    };
  },
  watch: {
    $route: {
      async handler(data) {
        if (data.name == "EIRReport") await this.initReport();
      },
      deep: true
    }
  },
  computed: {
    ...mapState(EIRreportsStore, ["start_date", "end_date", "navigationPayload"])
  },
  async mounted() {
    await this.initReport();
  },
  methods: {
    async initReport() {
      this.vaccines = await this.UnderFiveImmunizations();
      this.categories[0].cases = await this.getAEFIKnownList(this.categories[0].name, this.vaccines);
      this.categories[1].cases = await this.getAEFIKnownList(this.categories[1].name, this.vaccines);
      await this.initAefiReport(this.categories);
    },
    async initAefiReport(categories) {
      try {
        const data = await getAefiReport(this.start_date, this.end_date);
        const conceptDrugCountMap = /* @__PURE__ */ new Map();
        data.data.forEach((item) => {
          const drugCountMap = conceptDrugCountMap.get(item.concept_id) || /* @__PURE__ */ new Map();
          item.drugs.forEach((drug) => {
            const existingData = drugCountMap.get(drug.drug_inventory_id) || { count: 0, personIds: /* @__PURE__ */ new Set() };
            drugCountMap.set(drug.drug_inventory_id, {
              count: existingData.count + 1,
              personIds: new Set(existingData.personIds).add(item.person_id)
            });
          });
          conceptDrugCountMap.set(item.concept_id, drugCountMap);
        });
        categories.forEach((category) => {
          category.cases.forEach((caseItem) => {
            const drugCountMap = conceptDrugCountMap.get(caseItem.concept_id);
            if (drugCountMap) {
              caseItem.data.forEach((d_d) => {
                const drugData = drugCountMap.get(d_d.drug_id);
                if (drugData) {
                  d_d.count += drugData.count;
                  d_d.personIds = /* @__PURE__ */ new Set([...d_d.personIds || [], ...drugData.personIds]);
                }
              });
            }
          });
        });
        const store = EIRreportsStore();
        store.setAEFIReportData({ vaccines: this.vaccines, categories: this.categories });
      } catch (error) {
        console.error("Error in initAefiReport:", error);
      }
    },
    async UnderFiveImmunizations() {
      const data = [];
      const UFIs = await getunderfiveImmunizationsDrugs();
      UFIs.forEach((item) => {
        data.push(item);
      });
      return data;
    },
    async getAEFIKnownList(concept_set_name, vaccines) {
      const data = [];
      const vaccineEffect = await ConceptService.getConceptSet(concept_set_name);
      vaccineEffect.forEach((item) => {
        const updatedVaccines = vaccines.map((vaccine) => ({
          ...vaccine,
          count: 0
        }));
        data.push({
          concept_id: item.concept_id,
          name: item.name,
          data: updatedVaccines
        });
      });
      data.sort((a, b) => a.name.localeCompare(b.name));
      return data;
    },
    async openPersonCardComponent(clientIds) {
      this.personsDemoData.value = await this.getClientsDemoGraphicData(clientIds);
      const iPersonObj = [];
      this.personsDemoData.value.forEach((person) => {
        const iPerson = {
          ...person[0].person,
          ...person[0].person.addresses[0],
          ...person[0].person.names[0],
          patient_id: person[0].patient_id
        };
        iPersonObj.push(iPerson);
      });
      const handleModalAction = (event) => {
        this.openPatientProfile(event.detail.client_id);
      };
      const dataToPass = { people: iPersonObj, headingText: `Immunization (Client Drill Down | ${this.navigationPayload.subTxt})` };
      createModal(PersonCardComponent, { class: "large-modal" }, true, dataToPass, { "view-client": handleModalAction });
    },
    async openPatientProfile(client_id) {
      this.personsDemoData.value.forEach(async (person) => {
        if (person[0].patient_id == client_id) {
          await useDemographicsStore().setPatientRecord(person[0]);
          this.$router.push("patientProfile");
          return;
        }
      });
    },
    async getClientsDemoGraphicData(clientIds) {
      try {
        const clientIdArray = Array.from(clientIds);
        const patientDataPromises = clientIdArray.map(async (clientId) => {
          try {
            const patientData = await PatientService.findByID(clientId);
            if (!patientData || !patientData.patient_identifiers || patientData.patient_identifiers.length === 0) {
              console.warn(`No patient data or identifiers found for client ID: ${clientId}`);
              return null;
            }
            const patientData2 = await PatientService.findByNpid(patientData.patient_identifiers[0].identifier);
            return patientData2;
          } catch (error) {
            console.error(`Error processing client ID ${clientId}:`, error);
            return null;
          }
        });
        const results = await Promise.all(patientDataPromises);
        return results.filter((result) => result !== null);
      } catch (error) {
        console.error("Error in getClientsDemoGraphicData:", error);
        throw error;
      }
    }
  }
});

const _hoisted_1 = ["colspan"];
const _hoisted_2 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, null, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createBaseVNode("h1", { style: { "width": "100%", "text-align": "left", "font-weight": "400" } }, "Adverse Events Following Immunization - AEFI", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("table", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vaccines, (vaccine, index) => {
        return openBlock(), createElementBlock("colgroup", { key: index }, [
          createBaseVNode("col", {
            style: normalizeStyle({ width: 100 / _ctx.vaccines.length + "%" })
          }, null, 4)
        ]);
      }), 128)),
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          _cache[1] || (_cache[1] = createBaseVNode("th", null, "Cases", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vaccines, (vaccine) => {
            return openBlock(), createElementBlock("th", { key: vaccine }, toDisplayString(vaccine.name), 1);
          }), 128))
        ])
      ]),
      createBaseVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.categories, (category) => {
          return openBlock(), createElementBlock(Fragment, {
            key: category.name
          }, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", {
                colspan: _ctx.vaccines.length + 1,
                id: "hugo"
              }, [
                createBaseVNode("strong", null, toDisplayString(category.name), 1)
              ], 8, _hoisted_1)
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(category.cases, (case_) => {
              return openBlock(), createElementBlock("tr", {
                key: case_.name
              }, [
                createBaseVNode("td", null, toDisplayString(case_.name), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(case_.data, (vaccine) => {
                  return openBlock(), createElementBlock("td", { key: vaccine }, [
                    createBaseVNode("div", {
                      style: { "cursor": "pointer" },
                      onClick: ($event) => _ctx.openPersonCardComponent(vaccine.personIds)
                    }, toDisplayString(vaccine.count), 9, _hoisted_2)
                  ]);
                }), 128))
              ]);
            }), 128))
          ], 64);
        }), 128))
      ])
    ])
  ], 64);
}
const AEFIReportTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-704cfbc0"]]);

const AEFIReportTemplate$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: AEFIReportTemplate
}, Symbol.toStringTag, { value: 'Module' }));

export { AEFIReportTemplate as A, PersonCardComponent as P, AEFIReportTemplate$1 as a };
