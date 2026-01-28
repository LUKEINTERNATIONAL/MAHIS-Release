import { s as defineComponent, av as IonToggle, bu as IonPage, bf as IonFooter, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, p as dayjs, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, z as createElementBlock, A as createVNode, C as createBaseVNode, H as createCommentVNode, a5 as createTextVNode, D as toDisplayString, a4 as normalizeClass } from './vendor-DlXvc2CI.js';
import { D as DispositionModal } from './OutcomeModal-BoaAe6VJ.js';
import { F as DynamicButton, T as Toolbar, H as HisDate, a2 as getFieldValue, S as Service, G as toastSuccess, t as toastWarning, a1 as modifyFieldValue, a8 as validateField, o as createModal, a9 as PatientDemographicsExchangeService, Q as useGlobalPropertyStore, aa as useConfigStore, n as icons, _ as _export_sfc } from '../index-Di9oihr7.js';
import { m as mapState } from './pinia-DxIh5T-z.js';
import { B as BasicForm } from './BasicForm-DdDrAD0p.js';
import { F as FacilityInformationBar } from './FacilityInformationBar-BYPJxqF5.js';

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicForm,
    Toolbar,
    DynamicButton,
    IonFooter,
    IonPage,
    FacilityInformationBar,
    IonToggle
  },
  data() {
    return {
      cardData: {},
      inputField: "",
      isDDEEnabled: true,
      setName: "",
      initialPersonalData: [],
      iconsContent: icons,
      apiDate: "",
      date: "",
      DDE: {},
      isLoading: false
    };
  },
  computed: {
    ...mapState(useConfigStore, ["sessionDate"]),
    ...mapState(useGlobalPropertyStore, ["globalPropertyStore"])
  },
  watch: {
    globalPropertyStore: {
      async handler() {
        await this.setDDEStatus();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.ddeData();
      },
      deep: true
    }
  },
  async mounted() {
    try {
      this.isLoading = false;
      await useGlobalPropertyStore().loadDDEStatus();
      this.apiDate = await Service.getApiDate();
      await this.ddeData();
      this.date = getFieldValue(this.sessionDate, "sessionDate", "value");
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async setDDEStatus() {
      const dde = useGlobalPropertyStore();
      await dde.setGlobalProperty("dde_enabled", `${this.globalPropertyStore.dde_enabled}`);
      await this.ddeData();
    },
    async ddeData() {
      if (this.globalPropertyStore.dde_enabled === "true") {
        try {
          const data = await PatientDemographicsExchangeService.getRemainingNpids();
          const stats = data["npid_status"][0];
          const unassigned = stats["unassigned"];
          const avg = stats["avg_consumption_rate_per_day"] || 1;
          this.DDE = {
            id: stats["location_id"],
            avg,
            unassigned: stats["unassigned"],
            assigned: stats["assigned"],
            daysLeft: Math.floor(unassigned / avg),
            allocated: stats["allocated"],
            unallocated: stats["unallocated"],
            lastUpdated: dayjs(stats["date_last_updated"]).format("DD/MMM/YYYY HH:mm:ss"),
            title: stats["location_name"] + " DDE NPID Status"
          };
        } catch (error) {
        }
      }
    },
    openModal() {
      createModal(DispositionModal);
    },
    S(event) {
      return validateField(this.sessionDate, event.name, this[event.name]);
    },
    handleInputData() {
    },
    async resetSessionDate() {
      modifyFieldValue(this.sessionDate, "sessionDate", "value", "");
      try {
        await Service.resetSessionDate();
        toastSuccess(`Session date has been reset to ${this.formatDate(this.apiDate)}`);
        this.redirect();
      } catch (e) {
        toastWarning(`${e}`);
      }
    },
    redirect() {
      this.$router.back();
    },
    async onSubmit() {
      this.date = getFieldValue(this.sessionDate, "sessionDate", "value");
      try {
        await Service.setSessionDate(this.date);
        toastSuccess(`Successfully Back dated to ${this.formatDate(this.date)}`);
        this.redirect();
      } catch (e) {
        toastWarning(`${e}`);
      }
    },
    formatDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = {
  key: 0,
  class: "positionCenter"
};
const _hoisted_3 = { class: "card_content" };
const _hoisted_4 = {
  key: 1,
  class: "positionCenter"
};
const _hoisted_5 = { class: "card_content" };
const _hoisted_6 = { class: "card_hearder" };
const _hoisted_7 = { key: 2 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_ion_toggle = resolveComponent("ion-toggle");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, {
    class: normalizeClass({ loading: _ctx.isLoading })
  }, {
    default: withCtx(() => [
      _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_spinner, { name: "bubbles" }),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
      ])) : createCommentVNode("", true),
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          !_ctx.globalPropertyStore.dde_enabled ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(_component_ion_card, { class: "registration_ion_card" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "card_hearder" }, "Set DDE", -1)),
                  createVNode(_component_ion_toggle, {
                    "enable-on-off-labels": true,
                    modelValue: _ctx.globalPropertyStore.dde_enabled,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.globalPropertyStore.dde_enabled = $event)
                  }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode("Enable DDE", -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          _ctx.globalPropertyStore.dde_enabled == "true" ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_component_ion_card, { class: "registration_ion_card" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.DDE.title), 1),
                  createVNode(_component_ion_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[4] || (_cache[4] = [
                              createTextVNode("Location ID", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.id), 1)
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
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[5] || (_cache[5] = [
                              createTextVNode("Estimated days left", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.avg), 1)
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
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[6] || (_cache[6] = [
                              createTextVNode("Unassigned", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.unassigned), 1)
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
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[7] || (_cache[7] = [
                              createTextVNode("Assigned", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.assigned), 1)
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
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[8] || (_cache[8] = [
                              createTextVNode("Unallocated", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.unallocated), 1)
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
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[9] || (_cache[9] = [
                              createTextVNode("Allocated", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.allocated), 1)
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
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[10] || (_cache[10] = [
                              createTextVNode("Average consumption per day", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.daysLeft), 1)
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
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusHeader" }, {
                            default: withCtx(() => [..._cache[11] || (_cache[11] = [
                              createTextVNode("Last update", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ddeStatusContent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.DDE.lastUpdated), 1)
                            ]),
                            _: 1
                          })
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
          ])) : (openBlock(), createElementBlock("div", _hoisted_7, [..._cache[12] || (_cache[12] = [
            createBaseVNode("div", { class: "card_hearder" }, "DDE is disabled", -1)
          ])]))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
const setDDE = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8831d8d6"]]);

export { setDDE as default };
