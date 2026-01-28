import { s as defineComponent, w as watch, a2 as onMounted, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, az as IonCol, bK as IonCard, ba as IonCardHeader, b9 as IonCardTitle, L as IonIcon, b7 as calendarOutline, a5 as createTextVNode, bc as IonCardContent, aA as IonGrid, af as IonRow, C as createBaseVNode, J as Fragment, R as renderList, O as createBlock, N as IonButton, a4 as normalizeClass, D as toDisplayString, a7 as IonLabel, bz as b, b1 as settingsOutline, ef as pencilOutline, H as createCommentVNode, eg as calendarClearOutline, aj as Hn, d$ as statsChartOutline, b6 as listOutline, eh as refreshCircleOutline, ao as IonList, ap as IonItem, bH as saveOutline, f as ref, c as computed, aC as IonToolbar, bt as IonPage, I as IonHeader, aF as IonContent } from './vendor-BIA1Qh8a.js';
import { aK as useClinicalDaysStore, aL as setValueProps, B as BasicInputField, H as HisDate, G as toastSuccess, am as router, a6 as useUserStore, _ as _export_sfc, T as Toolbar, d as _sfc_main$2 } from '../index-Dy9Id4fM.js';
import { N as NavigationMenu } from './NavigationMenu-COiN5fSL.js';
import { E as EIRreportsStore } from './EIRreportsStore-CeIISwHn.js';
import { m as mapState } from './pinia-BgytB2RM.js';

const _hoisted_1 = {
  class: "ion-padding",
  style: { "max-width": "90%", "margin-left": "5%" }
};
const _hoisted_2 = { class: "days-container" };
const _hoisted_3 = { class: "mt-30 days-container" };
const _hoisted_4 = { style: { "font-weight": "500", "font-size": "20px" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "clinicalDays",
  setup(__props) {
    const toggle_local = ref(false);
    const disable_weekends = ref(true);
    const totalHolidaysSelected = ref(0);
    const date = ref([]);
    const maximumNumberOfDaysForEachDay = ref(0);
    const isMondayChecked = ref(false);
    const isTuesdayChecked = ref(false);
    const isWednesdayChecked = ref(false);
    const isThursdayChecked = ref(false);
    const isFridayChecked = ref(false);
    const isSaturdayChecked = ref(false);
    const isSundayChecked = ref(false);
    const datePickerKey = ref(0);
    const disabledDates = computed(() => {
      const store = useClinicalDaysStore();
      return store.getDisabledDates2();
    });
    const facilityId = computed(() => {
      const user_store = useUserStore();
      return user_store.getfacilityLocation().location_id;
    });
    const input_properties = [
      {
        placeHolder: "Set Maximum Next Appointments Visits Per Day",
        property_name: "visitsPerDay",
        dataHandler: inputUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required, Only letters allowed"
      }
    ];
    function inputUpDated_fn1(event) {
      const input = event.target.value;
      if (!isNumeric(input)) {
        input_properties[0].show_error.value = true;
        input_properties[0].error_message = "Input required, Only numbers allowed";
        return;
      } else {
        input_properties[0].show_error.value = false;
        maximumNumberOfDaysForEachDay.value = input;
      }
    }
    function isNumeric(str) {
      if (typeof str !== "string" || str.trim() === "") {
        return false;
      }
      return /^\d+$/.test(str);
    }
    const onWeekendToggleChange = () => {
      disable_weekends.value = !toggle_local.value;
      if (disable_weekends.value) {
        isSaturdayChecked.value = false;
        isSundayChecked.value = false;
      }
      saveAndReload();
    };
    watch(() => toggle_local.value, onWeekendToggleChange);
    watch(() => maximumNumberOfDaysForEachDay.value, saveAndReload);
    watch(() => date.value, saveAndReload);
    watch(
      () => router.currentRoute.value.name,
      async (newValue) => {
        if (newValue == "clinicalDays") {
          clearClinicalaysStores();
        }
      }
    );
    watch(
      () => facilityId,
      async (newValue) => {
        clearClinicalaysStores();
      }
    );
    const clinical_Days_Store = computed(() => {
      return mapState(useClinicalDaysStore, ["holidayDates"]);
    });
    onMounted(() => {
      clearClinicalaysStores();
    });
    function clearClinicalaysStores() {
      setNavigation();
      const store = useClinicalDaysStore();
      store.$reset();
      if (setValueProps() == true) {
        loadDataFromStore();
      }
    }
    function setNavigation() {
      const store = EIRreportsStore();
      store.setNavigationPayload("Clinical Days", true, false, "/", "home");
    }
    function loadDataFromStore() {
      const store = useClinicalDaysStore();
      totalHolidaysSelected.value = store.getHolidaydatesDataSize();
      date.value = store.getHolidaydates();
      maximumNumberOfDaysForEachDay.value = store.getMaximumNumberOfDaysForEachDay();
      isMondayChecked.value = store.getAreMondaysDisabled();
      isTuesdayChecked.value = store.getAreTuesdaysDisabled();
      isWednesdayChecked.value = store.getAreWednesdaysDisabled();
      isThursdayChecked.value = store.getAreThursdaysDisabled();
      isFridayChecked.value = store.getAreFridaysDisabled();
      isSaturdayChecked.value = store.getAreSaturdaysDisabled();
      isSundayChecked.value = store.getAreSundaysDisabled();
      if (isSaturdayChecked.value == true || isSundayChecked.value == true) {
        toggle_local.value = true;
      }
    }
    function saveAndReload() {
      saveStateValues();
      const storeClinicalDaysStore = useClinicalDaysStore();
      storeClinicalDaysStore.setMaximumNumberOfDaysForEachDayObj();
      storeClinicalDaysStore.setHolidayDatesObj();
      storeClinicalDaysStore.setWeekDaysPropertiesObj();
      loadDataFromStore();
      toastSuccess("Updated successfully");
    }
    function saveStateValues() {
      const storeClinicalDaysStore = useClinicalDaysStore();
      storeClinicalDaysStore.setHolidayDates(date.value);
      storeClinicalDaysStore.setMaximumNumberOfDaysForEachDay(maximumNumberOfDaysForEachDay.value);
      storeClinicalDaysStore.setAreMondaysDisabled(isMondayChecked.value);
      storeClinicalDaysStore.setAreTuesdaysDisabled(isTuesdayChecked.value);
      storeClinicalDaysStore.setAreWednesdaysDisabled(isWednesdayChecked.value);
      storeClinicalDaysStore.setAreThursdaysDisabled(isThursdayChecked.value);
      storeClinicalDaysStore.setAreFridaysDisabled(isFridayChecked.value);
      storeClinicalDaysStore.setAreSaturdaysDisabled(isSaturdayChecked.value);
      storeClinicalDaysStore.setAreSundaysDisabled(isSundayChecked.value);
    }
    function saveAction(routeHome = true) {
      const storeClinicalDaysStore = useClinicalDaysStore();
      storeClinicalDaysStore.setMaximumNumberOfDaysForEachDayObj();
      storeClinicalDaysStore.setHolidayDatesObj();
      storeClinicalDaysStore.setWeekDaysPropertiesObj();
      setValueProps();
      loadDataFromStore();
      if (routeHome) {
        router.push("/home");
      }
    }
    function callUnoTres() {
      autoGen();
      setTimeout(() => {
        autoGen();
      }, 1e3);
    }
    function autoGen() {
      const storeClinicalDaysStore = useClinicalDaysStore();
      const r = storeClinicalDaysStore.autoGeneratedDates();
      if (r) {
        storeClinicalDaysStore.setHolidayDates(r);
        saveAction(false);
        datePickerKey.value++;
      }
    }
    const weekdays = computed(() => [
      { id: "monday", label: "Monday", checked: isMondayChecked.value },
      { id: "tuesday", label: "Tuesday", checked: isTuesdayChecked.value },
      { id: "wednesday", label: "Wednesday", checked: isWednesdayChecked.value },
      { id: "thursday", label: "Thursday", checked: isThursdayChecked.value },
      { id: "friday", label: "Friday", checked: isFridayChecked.value }
    ]);
    const weekendDays = computed(() => [
      { id: "saturday", label: "Saturday", checked: isSaturdayChecked.value },
      { id: "sunday", label: "Sunday", checked: isSundayChecked.value }
    ]);
    const toggleDay = (day) => {
      switch (day) {
        case "monday":
          isMondayChecked.value = !isMondayChecked.value;
          break;
        case "tuesday":
          isTuesdayChecked.value = !isTuesdayChecked.value;
          break;
        case "wednesday":
          isWednesdayChecked.value = !isWednesdayChecked.value;
          break;
        case "thursday":
          isThursdayChecked.value = !isThursdayChecked.value;
          break;
        case "friday":
          isFridayChecked.value = !isFridayChecked.value;
          break;
        case "saturday":
          if (!disable_weekends.value) {
            isSaturdayChecked.value = !isSaturdayChecked.value;
          }
          break;
        case "sunday":
          if (!disable_weekends.value) {
            isSundayChecked.value = !isSundayChecked.value;
          }
          break;
      }
      saveAndReload();
    };
    return (_ctx, _cache) => {
      const _component_ion_card_subtitle = resolveComponent("ion-card-subtitle");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), {
              size: "12",
              "size-md": "8"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonCard), { style: { "margin-bottom": "10px" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              icon: unref(calendarOutline),
                              style: { "vertical-align": "middle", "margin-right": "5px" }
                            }, null, 8, ["icon"]),
                            _cache[2] || (_cache[2] = createTextVNode(" Clinical Days Settings ", -1))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonGrid), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonRow), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonCol), {
                                  size: "12",
                                  "size-md": "6"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_2, [
                                      (openBlock(true), createElementBlock(Fragment, null, renderList(weekdays.value, (day) => {
                                        return openBlock(), createBlock(unref(IonButton), {
                                          key: day.id,
                                          class: normalizeClass(["day-button", {
                                            "day-active": day.checked,
                                            "day-disabled": !day.checked
                                          }]),
                                          onClick: ($event) => toggleDay(day.id),
                                          fill: "clear",
                                          shape: "round"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(day.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "onClick"]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(IonRow), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonCol), {
                                  size: "12",
                                  "size-md": "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonRow), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", null, [
                                              createVNode(unref(IonLabel), { class: "ilbl2" }, {
                                                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                                  createTextVNode(" Enable or Disable weekends ", -1)
                                                ])]),
                                                _: 1
                                              }),
                                              createVNode(unref(b), {
                                                class: "toggle-green",
                                                classes: {
                                                  container: "inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30"
                                                },
                                                modelValue: toggle_local.value,
                                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => toggle_local.value = $event),
                                                offLabel: "disabled",
                                                onLabel: "enabled",
                                                onChange: onWeekendToggleChange
                                              }, null, 8, ["modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(IonCol), { size: "8" }, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_3, [
                                              (openBlock(true), createElementBlock(Fragment, null, renderList(weekendDays.value, (day) => {
                                                return openBlock(), createBlock(unref(IonButton), {
                                                  key: day.id,
                                                  class: normalizeClass(["day-button", {
                                                    "day-active": day.checked,
                                                    "day-disabled": !day.checked,
                                                    "day-inactive": disable_weekends.value
                                                  }]),
                                                  onClick: ($event) => toggleDay(day.id),
                                                  disabled: disable_weekends.value,
                                                  fill: "clear",
                                                  shape: "round"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(day.label), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class", "onClick", "disabled"]);
                                              }), 128))
                                            ])
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
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), null, {
              default: withCtx(() => [
                createVNode(unref(IonCard), { style: { "margin-bottom": "10px" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardTitle), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              icon: unref(settingsOutline),
                              style: { "vertical-align": "middle", "margin-right": "5px" }
                            }, null, 8, ["icon"]),
                            _cache[4] || (_cache[4] = createTextVNode(" Appointment Settings ", -1))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonRow), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonCol), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey", "font-size": "14px", "font-weight": "600" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(input_properties[0].placeHolder), 1),
                                    _cache[5] || (_cache[5] = createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1))
                                  ]),
                                  _: 1
                                }),
                                createVNode(BasicInputField, {
                                  placeholder: input_properties[0].placeHolder,
                                  icon: unref(pencilOutline),
                                  inputValue: maximumNumberOfDaysForEachDay.value,
                                  "onUpdate:inputValue": input_properties[0].dataHandler,
                                  error: input_properties[0].show_error.value
                                }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue", "error"]),
                                createBaseVNode("div", null, [
                                  input_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                                    key: 0,
                                    class: "error-label"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(input_properties[0].error_message), 1)
                                    ]),
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
        createVNode(unref(IonCard), null, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(calendarClearOutline),
                      style: { "vertical-align": "middle", "margin-right": "5px" }
                    }, null, 8, ["icon"]),
                    _cache[6] || (_cache[6] = createTextVNode(" Set Clinical Holiday(s) ", -1))
                  ]),
                  _: 1
                }),
                createVNode(_component_ion_card_subtitle, { style: { "margin-top": "5px", "font-size": "14px", "color": "#666", "font-weight": "600" } }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createTextVNode(" Set a holiday by selecting a date on the calendar, or by pressing the auto-generate button. ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(unref(IonGrid), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonRow), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCol), {
                          size: "12",
                          "size-md": "7"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(unref(Hn), {
                              modelValue: date.value,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => date.value = $event),
                              "enable-time-picker": false,
                              inline: "",
                              "auto-apply": "",
                              "multi-dates": "",
                              "disabled-dates": disabledDates.value,
                              key: datePickerKey.value
                            }, null, 8, ["modelValue", "disabled-dates"]))
                          ]),
                          _: 1
                        }),
                        createVNode(unref(IonCol), {
                          size: "12",
                          "size-md": "3"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createVNode(unref(IonRow), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonCol), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonLabel), { class: "ilbl2" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(IonIcon), {
                                            icon: unref(statsChartOutline),
                                            style: { "vertical-align": "middle", "margin-right": "5px" }
                                          }, null, 8, ["icon"]),
                                          _cache[8] || (_cache[8] = createTextVNode(" Total Holidays Set ", -1))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonRow), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), { class: "text-22 m-10" }, {
                                    default: withCtx(() => [
                                      createBaseVNode("span", _hoisted_4, toDisplayString(totalHolidaysSelected.value), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonRow), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonCol), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonRow), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(IonCol), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(IonLabel), { class: "ilbl2" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonIcon), {
                                                    icon: unref(listOutline),
                                                    style: { "vertical-align": "middle", "margin-right": "5px" }
                                                  }, null, 8, ["icon"]),
                                                  _cache[9] || (_cache[9] = createTextVNode(" Holiday Date(s) ", -1))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(IonCol), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(IonButton), {
                                                fill: "solid",
                                                onClick: callUnoTres,
                                                class: "btn-cls-2",
                                                style: { "float": "right" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonIcon), {
                                                    icon: unref(refreshCircleOutline),
                                                    slot: "start",
                                                    style: { "margin-right": "5px" }
                                                  }, null, 8, ["icon"]),
                                                  _cache[10] || (_cache[10] = createTextVNode(" " + toDisplayString("Auto Gen."), -1))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(IonList), { class: "holiday-list" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(clinical_Days_Store.value.holidayDates(), (holiday, index) => {
                                            return openBlock(), createBlock(unref(IonItem), { key: index }, {
                                              default: withCtx(() => [
                                                createVNode(unref(IonLabel), null, {
                                                  default: withCtx(() => [
                                                    createBaseVNode("h2", null, [
                                                      createVNode(unref(IonIcon), {
                                                        icon: unref(calendarOutline),
                                                        style: { "vertical-align": "middle", "margin-right": "5px" }
                                                      }, null, 8, ["icon"]),
                                                      createTextVNode(" " + toDisplayString(unref(HisDate).toStandardHisDisplayFormat(holiday)), 1)
                                                    ])
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
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonRow), { style: { "margin-top": "20px" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), null, {
              default: withCtx(() => [
                createVNode(unref(IonButton), {
                  fill: "solid",
                  onClick: saveAction,
                  class: "btn-cls-2",
                  style: { "float": "right" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(saveOutline),
                      slot: "start",
                      style: { "margin-right": "5px" }
                    }, null, 8, ["icon"]),
                    _cache[11] || (_cache[11] = createTextVNode(" " + toDisplayString("Save"), -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const clinicalDays = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-97c5dcd8"]]);

const _sfc_main = defineComponent({
  name: "Home",
  mixins: [_sfc_main$2],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    Toolbar,
    IonRow,
    NavigationMenu,
    clinicalDays
  },
  data() {
    return {};
  },
  computed: {},
  $route: {
    async handler() {
    },
    deep: true
  },
  watch: {},
  async mounted() {
  },
  methods: {}
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavigationMenu = resolveComponent("NavigationMenu");
  const _component_clinicalDays = resolveComponent("clinicalDays");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_NavigationMenu),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_clinicalDays)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const clinicalDaysTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { clinicalDaysTemplate as default };
