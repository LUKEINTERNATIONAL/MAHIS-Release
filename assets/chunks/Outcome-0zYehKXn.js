import { q as defineComponent, a7 as IonLabel, ay as IonCol, an as IonItem, v as resolveComponent, x as createElementBlock, y as openBlock, R as renderList, O as createBlock, A as withCtx, z as createVNode, a5 as createTextVNode, C as toDisplayString, B as createBaseVNode, a4 as normalizeClass, J as Fragment, r as ref, w as watch, E as unref, ea as time, G as createCommentVNode, b$ as IonDatetime, a2 as onMounted, bI as IonCard, b6 as IonCardTitle, b7 as IonCardHeader, af as IonRow, ar as script, ee as pencilOutline, bF as saveOutline, F as closeCircleOutline, b9 as IonCardContent, N as IonButton, d as computed, am as IonList } from './vendor-BPW-J91F.js';
import { k as alertConfirmation, a4 as popoverConfirmation, n as icons, _ as _export_sfc, B as BasicInputField, b3 as useOutcomeStore, t as toastWarning, g as getPouchDBRecords, aI as _sfc_main$8, F as DynamicButton, $ as SelectFacility, W as LocationService, aY as AppEncounterService, a as useProgramStore, aK as useClinicalDaysStore, aL as setValueProps, aC as ListPicker, ai as ProgramService, o as createModal, b9 as confirmModal, S as Service, H as HisDate, G as toastSuccess } from '../index-BlgLb150.js';
import { u as useWardsStore } from './wardsStore-DU8cU16E.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';

const _sfc_main$7 = defineComponent({
  components: {
    IonItem,
    IonCol,
    IonLabel
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  props: {
    displayData: {
      type: Array,
      default: []
    }
  },
  methods: {
    highlightItem(item) {
      const el = document.getElementById(item + "_lbl");
      if (el) {
        el.style.color = "#006401";
      }
      this.highlightActionBtns(item);
    },
    undoHighlightItem(item) {
      const el = document.getElementById(item + "_lbl");
      if (el) {
        el.style.color = "rgb(0,0,0)";
      }
      this.undohighlightActionBtns(item);
    },
    highlightActionBtns(item) {
      const elements = document.getElementsByClassName(item + "_spanlbl");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    },
    undohighlightActionBtns(item) {
      const elements = document.getElementsByClassName(item + "_spanlbl");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    },
    asignLblID(num) {
      return num + "_lbl";
    },
    asignSpanLblID(num) {
      return num + "_spanlbl";
    },
    async removeItemAtIndex(index, e) {
      const deleteConfirmed = await popoverConfirmation("Do you want to delete it?", e);
      if (deleteConfirmed) {
        this.$emit("update:removeItem", index);
      }
    },
    async editItemAtIndex(index, item, e) {
      const editConfirmed = await alertConfirmation("Do you want to edit it?", e);
      if (editConfirmed) {
        this.$emit("update:editItem", {
          index,
          item
        });
      }
    },
    fomartDate(date) {
      const year = date.year;
      const month = (date.month < 10 ? "0" : "") + date.month;
      const day = (date.day < 10 ? "0" : "") + date.day;
      return year + "-" + month + "-" + day;
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_item = resolveComponent("ion-item");
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.displayData, (item, index) => {
    return openBlock(), createBlock(_component_ion_item, {
      displayData: _ctx.displayData,
      class: "ionLbltp",
      key: index,
      onMousemove: ($event) => _ctx.highlightItem(index),
      onMouseout: ($event) => _ctx.undoHighlightItem(index)
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { class: "col-st1" }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              id: _ctx.asignLblID(index),
              class: "truncate-text",
              style: { "color": "#00190E", "font-weight": "400", "font": "inter", "line-height": "21px" }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.type), 1)
              ]),
              _: 2
            }, 1032, ["id"])
          ]),
          _: 2
        }, 1024),
        createVNode(_component_ion_col, { class: "col-st2" }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              class: "truncate-text",
              style: { "color": "#636363", "font-weight": "400", "font": "inter", "line-height": "21px" }
            }, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "spaceBetween" }, null, -1)),
                createTextVNode(" " + toDisplayString(item.name) + " ", 1),
                _cache[1] || (_cache[1] = createBaseVNode("span", { class: "spaceBetween" }, null, -1)),
                createTextVNode(toDisplayString(item.reason), 1),
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "spaceBetween" }, null, -1)),
                createTextVNode(toDisplayString(_ctx.fomartDate(item.date)), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024),
        createVNode(_component_ion_col, { class: "action_buttons" }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              class: normalizeClass(_ctx.asignSpanLblID(index)),
              style: { "cursor": "pointer", "display": "none", "text-align": "end" },
              onClick: ($event) => _ctx.editItemAtIndex(index, item, $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_icon, {
                  icon: _ctx.iconsContent.edit
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["class", "onClick"]),
            createVNode(_component_ion_label, {
              class: normalizeClass(_ctx.asignSpanLblID(index)),
              style: { "cursor": "pointer", "display": "none", "text-align": "end" },
              onClick: ($event) => _ctx.removeItemAtIndex(index, $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_icon, {
                  icon: _ctx.iconsContent.delete
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["class", "onClick"])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, 1032, ["displayData", "onMousemove", "onMouseout"]);
  }), 128);
}
const DynamicDispositionList = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render], ["__scopeId", "data-v-4346bf77"]]);

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TimePicker",
  props: {
    place_holder: {},
    time_prop: {}
  },
  emits: ["timeUpDated"],
  setup(__props, { emit: __emit }) {
    const refTime = ref();
    const popoverProperties = ref({
      title: "Set Time",
      popoverOpen: false,
      isOpen: false,
      event: {},
      keyboardClose: false,
      popoverData: {}
    });
    const timeObject = ref();
    const InnerActionBtnPropeties = {
      name: "Now",
      show: true,
      fn: setTimeNow
    };
    const showPicker = ref(true);
    const isSetTimeNowPressed = ref(false);
    const componentKey = ref(0);
    const props = __props;
    watch(
      () => props.time_prop,
      (newValue) => {
        if (!newValue) return;
        refTime.value = newValue.time;
      },
      {
        immediate: true,
        deep: true
      }
    );
    const emit = __emit;
    function timeUpDated() {
      emit("timeUpDated", timeObject.value);
    }
    function openDatePopOver(event) {
      if (isSetTimeNowPressed.value == true) {
        showPicker.value = false;
        isSetTimeNowPressed.value = false;
      } else {
        showPicker.value = true;
      }
      popoverProperties.value.isOpen = true;
      popoverProperties.value.event = event;
    }
    function saveTime(event) {
      refTime.value = event.detail.value;
      const time2 = formatTime(refTime.value);
      if (containsNaN(time2) == true) {
        setTimeNow();
        return;
      }
      refTime.value = time2;
    }
    function containsNaN(str) {
      return str.indexOf("NaN") !== -1;
    }
    function formatTime(date) {
      let theDate = new Date(date);
      let hours = theDate.getHours();
      let minutes = theDate.getMinutes();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      let formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + " " + ampm;
      timeObject.value = {
        time: formattedTime,
        meridian: ampm
      };
      timeUpDated();
      return formattedTime;
    }
    function setTimeNow() {
      isSetTimeNowPressed.value = true;
      refTime.value = formatTime(/* @__PURE__ */ new Date());
      showPicker.value = false;
      componentKey.value++;
    }
    return (_ctx, _cache) => {
      const _component_ion_popover = resolveComponent("ion-popover");
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(BasicInputField, {
          placeholder: props.place_holder.default,
          inputValue: refTime.value,
          icon: unref(time),
          "-inner-action-btn-propeties": InnerActionBtnPropeties,
          "onClicked:inputValue": openDatePopOver,
          "onUpdate:InnerActionBtnPropetiesAction": InnerActionBtnPropeties.fn,
          key: componentKey.value
        }, null, 8, ["placeholder", "inputValue", "icon", "onUpdate:InnerActionBtnPropetiesAction"])),
        createVNode(_component_ion_popover, {
          "show-backdrop": false,
          "keep-contents-mounted": true,
          "is-open": popoverProperties.value.isOpen,
          event: popoverProperties.value.event,
          side: "top",
          onDidDismiss: _cache[0] || (_cache[0] = ($event) => popoverProperties.value.isOpen = false)
        }, {
          default: withCtx(() => [
            showPicker.value ? (openBlock(), createBlock(unref(IonDatetime), {
              key: 0,
              onIonChange: saveTime,
              id: "datetime",
              presentation: "time",
              "show-default-buttons": true
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["is-open", "event"])
      ], 64);
    };
  }
});

const __default__$3 = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    selected_ward_prop: {},
    admitted_other_props: {}
  },
  emits: ["dataSaved"],
  setup(__props, { emit: __emit }) {
    const WardsData = ref([]);
    const store = useOutcomeStore();
    const editIndex = ref(NaN);
    const ward_show_error = ref(false);
    const selected_ward = ref();
    const show_alert_for_saving = ref(false);
    onMounted(async () => {
      findWardName();
      resetShowAlertForSaving();
    });
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    const note_properties = [
      {
        placeHolder: "Reason",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide a reason"
      }
    ];
    const date_properties = [
      {
        placeHolder: { default: "Enter date" },
        dataHandler: dateUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide date"
      }
    ];
    const time_properties = [
      {
        placeHolder: { default: "Enter time of admission" },
        dataHandler: timeUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "error"
      }
    ];
    const props = __props;
    watch(
      () => props.selected_ward_prop,
      (newValue) => {
        if (!newValue) return;
        selected_ward.value = newValue;
      },
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => props.admitted_other_props,
      (newValue) => {
        if (!newValue) return;
        note_properties[0].dataValue.value = newValue.reason;
        time_properties[0].dataValue.value = newValue.time;
        date_properties[0].dataValue.value = newValue.date;
      },
      {
        immediate: true,
        deep: true
      }
    );
    function resetShowAlertForSaving(value = true) {
      show_alert_for_saving.value = value;
    }
    function timeUpdate_fn1(data) {
      time_properties[0].dataValue.value = data;
      validateForm(false);
    }
    function dateUpdate_fn1(data) {
      const date_data = {
        day: data.value.day,
        month: data.value.month,
        year: data.value.year,
        formattedDate: data.value.formattedDate
      };
      date_properties[0].dataValue.value = date_data;
      validateForm(false);
    }
    function notesUpDated_fn1(event) {
      const reason = event.target.value;
      note_properties[0].dataValue.value = reason;
      showReminderForSaving();
      resetShowAlertForSaving(false);
    }
    function showReminderForSaving() {
      if (show_alert_for_saving.value == true) {
        toastWarning("Remember to press the SAVE button", 1e4);
      }
    }
    async function findWardName(data) {
      try {
        WardsData.value = await getPouchDBRecords("wards");
        if (WardsData.value.length == 0) {
          WardsData.value = useWardsStore().wards;
        }
        WardsData.value.forEach((item) => {
          const _item_ = {
            name: item.name,
            selected: false,
            other: item,
            location_ward_id: item.other.location_id
          };
          WardsData.value.push(_item_);
        });
      } catch (error) {
        console.error("err: ", error);
      }
    }
    function validateForm(showToast = true) {
      validateWard();
      validateNotes();
      validateDate();
      validateTime();
      if (date_properties[0].show_error.value == false && time_properties[0].show_error.value == false && note_properties[0].show_error.value == false && ward_show_error.value == false) {
        saveDataToStores();
      } else {
        if (showToast) {
          toastWarning("Please enter correct data values", 4e3);
        }
      }
    }
    function validateWard() {
      if (selected_ward.value === void 0 || selected_ward.value == "") {
        ward_show_error.value = true;
      } else {
        ward_show_error.value = false;
      }
    }
    function validateNotes() {
      if (note_properties[0].dataValue.value == "" || note_properties[0].dataValue.value === void 0) {
        note_properties[0].show_error.value = true;
      } else {
        note_properties[0].show_error.value = false;
      }
    }
    async function saveDataToStores() {
      const referralData = {
        name: selected_ward.value.name,
        type: "Admitted for short stay",
        ward_name: selected_ward.value.name,
        date: date_properties[0].dataValue,
        time: time_properties[0].dataValue,
        reason: note_properties[0].dataValue,
        other: selected_ward.value,
        selected: true
      };
      const isSaved = await store.addOutcomeData(referralData, editIndex.value);
      if (isSaved) {
        dataSaved({ dataSaved: false });
      }
    }
    const emit = __emit;
    function dataSaved(data = { dataSaved: true }) {
      emit("dataSaved", data);
    }
    function cancelE() {
      dataSaved();
    }
    function validateDate() {
      if (date_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        date_properties[0].show_error.value = true;
      } else {
        date_properties[0].show_error.value = false;
      }
    }
    function validateTime() {
      if (time_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        time_properties[0].show_error.value = true;
      } else {
        time_properties[0].show_error.value = false;
      }
    }
    const selectedWard = (data) => {
      selected_ward.value = data;
      resetShowAlertForSaving();
      validateForm(false);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), {
                onClick: _cache[0] || (_cache[0] = ($event) => findWardName("dd"))
              }, {
                default: withCtx(() => [..._cache[4] || (_cache[4] = [
                  createTextVNode("Admitted for Short Stay", -1)
                ])]),
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
                      createVNode(unref(script), {
                        modelValue: selected_ward.value,
                        "onUpdate:modelValue": [
                          _cache[1] || (_cache[1] = ($event) => selected_ward.value = $event),
                          _cache[2] || (_cache[2] = ($event) => selectedWard($event))
                        ],
                        multiple: false,
                        taggable: false,
                        "hide-selected": true,
                        "close-on-select": true,
                        openDirection: "bottom",
                        "tag-placeholder": "Find and select a ward",
                        placeholder: "Find and select a ward",
                        selectLabel: "",
                        label: "name",
                        searchable: true,
                        disabled: false,
                        onSearchChange: _cache[3] || (_cache[3] = ($event) => $event = {}),
                        "track-by": "location_ward_id",
                        options: WardsData.value
                      }, null, 8, ["modelValue", "options"]),
                      createBaseVNode("div", null, [
                        ward_show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode(toDisplayString("Please select a ward"), -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
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
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$8, {
                          place_holder: date_properties[0].placeHolder,
                          onDateUpDated: date_properties[0].dataHandler,
                          date_prop: date_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onDateUpDated", "date_prop"]),
                        createBaseVNode("div", null, [
                          date_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(date_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
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
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$6, {
                          place_holder: time_properties[0].placeHolder,
                          onTimeUpDated: time_properties[0].dataHandler,
                          time_prop: time_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onTimeUpDated", "time_prop"]),
                        createBaseVNode("div", null, [
                          time_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(time_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
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
                      createVNode(BasicInputField, {
                        placeholder: note_properties[0].placeHolder,
                        icon: unref(pencilOutline),
                        inputValue: note_properties[0].dataValue.value,
                        "onUpdate:inputValue": note_properties[0].dataHandler
                      }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                      createBaseVNode("div", null, [
                        note_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(note_properties[0].error_message), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              dynamic_button_properties[0].showAddItemButton ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                class: "action-buttons-row"
              }, {
                default: withCtx(() => [
                  dynamic_button_properties[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties[0].name,
                    fill: dynamic_button_properties[0].btnFill,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties[0].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties[1].name,
                    fill: dynamic_button_properties[1].btnFill,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties[1].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const AdmittedforShortStayOutcomef = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2508fb5d"]]);

const __default__$2 = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    selected_referral_data: {},
    selected_other_referral_data: {}
  },
  emits: ["dataSaved"],
  setup(__props, { emit: __emit }) {
    const editIndex = ref(NaN);
    const FacilityData = ref(null);
    const store = useOutcomeStore();
    const show_location_error = ref(false);
    const selectedDistrictIds = ref([]);
    const selected_location = ref({});
    const show_alert_for_saving = ref(true);
    const other_store_data = {
      location_data: {}
    };
    const note_properties = [
      {
        placeHolder: "Reason",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide a reason"
      }
    ];
    const date_properties = [
      {
        placeHolder: { default: "Enter date" },
        dataHandler: dateUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide date"
      }
    ];
    const time_properties = [
      {
        placeHolder: { default: "Enter time of referral" },
        dataHandler: timeUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "error"
      }
    ];
    const props = __props;
    watch(
      () => props.selected_other_referral_data,
      (newValue) => {
        if (!newValue) return;
        note_properties[0].dataValue.value = newValue.reason;
        date_properties[0].dataValue.value = newValue.date;
        time_properties[0].dataValue.value = newValue.time;
      },
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => props.selected_referral_data,
      (newValue) => {
        if (!newValue) return;
        FacilityData.value = newValue.selected_location;
        other_store_data.location_data = newValue;
        const districtIds = Array.isArray(newValue.selected_district_ids) ? [...newValue.selected_district_ids] : [];
        const location = newValue.selected_location ? { ...newValue.selected_location } : null;
        selectedDistrictIds.value = districtIds;
        selected_location.value = location;
      },
      {
        immediate: true,
        deep: true
      }
    );
    onMounted(() => {
      resetShowAlertForSaving();
    });
    function dateUpdate_fn1(data) {
      const date_data = {
        day: data.value.day,
        month: data.value.month,
        year: data.value.year,
        formattedDate: data.value.formattedDate
      };
      date_properties[0].dataValue.value = date_data;
      validateForm(false);
    }
    function notesUpDated_fn1(event) {
      const reason = event.target.value;
      note_properties[0].dataValue.value = reason;
      showReminderForSaving();
      resetShowAlertForSaving(false);
    }
    function showReminderForSaving() {
      if (show_alert_for_saving.value == true) {
        toastWarning("Remember to press the SAVE button", 1e4);
      }
    }
    function timeUpdate_fn1(data) {
      time_properties[0].dataValue.value = data;
      validateForm(false);
    }
    function validateForm(showToast = true) {
      validateFacility();
      validateNotes();
      validateDate();
      validateTime();
      if (date_properties[0].show_error.value == false && time_properties[0].show_error.value == false && note_properties[0].show_error.value == false && show_location_error.value == false) {
        saveDataToStores();
      } else {
        if (showToast) {
          toastWarning("Please enter correct data values", 4e3);
        }
      }
    }
    function validateNotes() {
      if (note_properties[0].dataValue.value == "" || note_properties[0].dataValue.value === void 0) {
        note_properties[0].show_error.value = true;
      } else {
        note_properties[0].show_error.value = false;
      }
    }
    function validateDate() {
      if (date_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        date_properties[0].show_error.value = true;
      } else {
        date_properties[0].show_error.value = false;
      }
    }
    function validateTime() {
      if (time_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        time_properties[0].show_error.value = true;
      } else {
        time_properties[0].show_error.value = false;
      }
    }
    function validateFacility() {
      if (FacilityData.value) {
        show_location_error.value = false;
      } else {
        show_location_error.value = true;
      }
    }
    function resetShowAlertForSaving(value = true) {
      show_alert_for_saving.value = value;
    }
    const facilitySelected = (data) => {
      FacilityData.value = data.selected_location;
      validateFacility();
      other_store_data.location_data = data;
      resetShowAlertForSaving();
      validateForm(false);
    };
    const saveDataToStores = async () => {
      const referralInfo = {
        name: FacilityData.value.name,
        facility_code: FacilityData.value.code,
        facility_name: FacilityData.value.name,
        facility_district: FacilityData.value.district,
        type: "Referred out",
        selected: true,
        date: date_properties[0].dataValue,
        time: time_properties[0].dataValue,
        reason: note_properties[0].dataValue
      };
      const referralData = {
        ...referralInfo,
        other: {
          ref_data: referralInfo,
          location_data: other_store_data.location_data
        }
      };
      const isSaved = await store.addOutcomeData(referralData, editIndex.value);
      if (isSaved) {
        dataSaved({ dataSaved: false });
      }
    };
    const cancelE = () => {
      dataSaved();
    };
    const emit = __emit;
    function dataSaved(data = { "dataSaved": true }) {
      emit("dataSaved", data);
    }
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: " save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Referred Out", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(SelectFacility, {
                    show_error: show_location_error.value,
                    onFacilitySelected: facilitySelected,
                    selected_district_ids: selectedDistrictIds.value,
                    selected_location: selected_location.value
                  }, null, 8, ["show_error", "selected_district_ids", "selected_location"])
                ]),
                _: 1
              }),
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$8, {
                          place_holder: date_properties[0].placeHolder,
                          onDateUpDated: date_properties[0].dataHandler,
                          date_prop: date_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onDateUpDated", "date_prop"]),
                        createBaseVNode("div", null, [
                          date_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(date_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
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
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$6, {
                          place_holder: time_properties[0].placeHolder,
                          onTimeUpDated: time_properties[0].dataHandler,
                          time_prop: time_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onTimeUpDated", "time_prop"]),
                        createBaseVNode("div", null, [
                          time_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(time_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
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
                      createVNode(BasicInputField, {
                        placeholder: note_properties[0].placeHolder,
                        icon: unref(pencilOutline),
                        inputValue: note_properties[0].dataValue.value,
                        "onUpdate:inputValue": note_properties[0].dataHandler
                      }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                      createBaseVNode("div", null, [
                        note_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(note_properties[0].error_message), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              dynamic_button_properties[0].showAddItemButton ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                class: "action-buttons-row"
              }, {
                default: withCtx(() => [
                  dynamic_button_properties[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties[0].name,
                    fill: dynamic_button_properties[0].btnFill,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties[0].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties[1].name,
                    fill: dynamic_button_properties[1].btnFill,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties[1].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ReferredOutCome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7b6ec0cf"]]);

const __default__$1 = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    selected_discharged_prop: {},
    selected_discharged_data: {}
  },
  emits: ["dataSaved"],
  setup(__props, { emit: __emit }) {
    const editIndex = ref(NaN);
    const FacilityData = ref([]);
    const store = useOutcomeStore();
    const selected_discharged = ref();
    onMounted(async () => {
      findWardName("");
    });
    const note_properties = [
      {
        placeHolder: "Reason",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide a reason"
      }
    ];
    const date_properties = [
      {
        placeHolder: { default: "Enter date" },
        dataHandler: dateUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide date"
      }
    ];
    const props = __props;
    watch(
      () => props.selected_discharged_prop,
      (newValue) => {
        if (!newValue) return;
        selected_discharged.value = newValue;
      },
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => props.selected_discharged_data,
      (newValue) => {
        if (!newValue) return;
        date_properties[0].dataValue.value = newValue.date || "";
        if (newValue.reason) {
          note_properties[0].dataValue.value = newValue.reason;
        }
      },
      {
        immediate: true,
        deep: true
      }
    );
    function dateUpdate_fn1(data) {
      const date_data = {
        day: data.value.day,
        month: data.value.month,
        year: data.value.year,
        formattedDate: data.value.formattedDate
      };
      date_properties[0].dataValue.value = date_data;
      validateForm(false);
    }
    function notesUpDated_fn1(event) {
      const reason = event.target.value;
      note_properties[0].dataValue.value = reason;
    }
    [
      {
        multi_Selection: false,
        show_list_label: true,
        unqueId: "qwerty4",
        name_of_list: "Choose Facility",
        placeHolder: "Choose one",
        items: FacilityData.value,
        listUpdatedFN: listUpdated1,
        listFilteredFN: () => {
        },
        searchTextFN: findWardName,
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "please select a Facility",
        disabled: ref(false)
      }
    ];
    const time_properties = [
      {
        placeHolder: { default: "Enter time of referral" },
        dataHandler: timeUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "error"
      }
    ];
    function timeUpdate_fn1(data) {
      time_properties[0].dataValue.value = data;
    }
    const uniqueLocations = /* @__PURE__ */ new Set();
    async function findWardName(data) {
      const srch_text = data;
      const temp_data1 = await LocationService.getFacilities({ name: srch_text });
      if (temp_data1) return;
      temp_data1.forEach((item) => {
        if (!uniqueLocations.has(item.location_id)) {
          uniqueLocations.add(item.location_id);
          if (lodashExports.isEmpty(item.name) == false) {
            FacilityData.value.push({ name: item.name, selected: false, other: item });
          }
        }
      });
    }
    function listUpdated1(data) {
      FacilityData.value = data;
    }
    function validateForm(showToast = true) {
      validateDate();
      if (!date_properties[0].show_error.value) {
        saveDataToStores();
      } else {
        if (showToast) {
          toastWarning("Please enter a valid date", 4e3);
        }
      }
    }
    function validateDate() {
      if (date_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        date_properties[0].show_error.value = true;
      } else {
        date_properties[0].show_error.value = false;
      }
    }
    async function saveDataToStores() {
      const dischargeData = {
        type: "Discharged Home",
        date: date_properties[0].dataValue,
        reason: note_properties[0].dataValue.value,
        // Include the reason field
        selected: true
      };
      const isSaved = await store.addOutcomeData(dischargeData, editIndex.value);
      if (isSaved) {
        dataSaved({ dataSaved: false });
      }
    }
    function cancelE() {
      dataSaved();
    }
    const emit = __emit;
    function dataSaved(data = { dataSaved: true }) {
      emit("dataSaved", data);
    }
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Discharged Home", -1)
                ])]),
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
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$8, {
                          place_holder: date_properties[0].placeHolder,
                          onDateUpDated: date_properties[0].dataHandler,
                          date_prop: date_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onDateUpDated", "date_prop"]),
                        createBaseVNode("div", null, [
                          date_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(date_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              dynamic_button_properties[0].showAddItemButton ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                class: "action-buttons-row"
              }, {
                default: withCtx(() => [
                  dynamic_button_properties[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties[0].name,
                    fill: dynamic_button_properties[0].btnFill,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties[0].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties[1].name,
                    fill: dynamic_button_properties[1].btnFill,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties[1].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const DischargedHome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e39df163"]]);

const _hoisted_1$1 = { class: "date-results-container" };
const _hoisted_2$1 = { class: "date-buttons-container" };
const _hoisted_3 = {
  key: 0,
  class: "validation-message"
};


const _sfc_main$2 = {
  __name: 'DatePillSelector',
  props: {
  availableDates: {
    type: Array,
    required: true,
    default: () => []
  }
},
  emits: ['dateSelected'],
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;

const emit = __emit;

const selectedIndex = ref(null);
const validationError = ref(false); 

const selectDate = (index) => {
  selectedIndex.value = index;
  validationError.value = false; 
  emit('dateSelected', {
    date: props.availableDates[index],
    index: index
  });
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric'
  };
  // Ensure the date object is valid before formatting
  if (isNaN(date)) {
      return dateString; // Fallback to original string if invalid date
  }
  return date.toLocaleDateString('en-US', options);
};

// Expose a validation function for the parent component to call
const validateSelection = () => {
    if (selectedIndex.value === null) {
        validationError.value = true;
        return false; // Validation failed
    }
    validationError.value = false;
    return true; // Validation passed
};

/**
 * @description Exposes the currently selected date object.
 * This is crucial for the parent component to collect the final referral data.
 * @returns {any | null} The selected date object/string from availableDates, or null.
 */
const getSelectedDate = () => {
    if (selectedIndex.value !== null) {
        return props.availableDates[selectedIndex.value];
    }
    return null;
};

// Expose the validation function and selected date getter for external use
__expose({
    validateSelection,
    getSelectedDate // 👈 ADDED for the parent component to retrieve the selected date
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(__props.availableDates, (date, index) => {
        return (openBlock(), createBlock(unref(IonButton), {
          key: index,
          class: normalizeClass(["date-button", { 
                'selected': selectedIndex.value === index,
                'error-border': validationError.value && selectedIndex.value !== index
            }]),
          fill: "outline",
          shape: "round",
          onClick: $event => (selectDate(index))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(formatDate(date)), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))
      }), 128))
    ]),
    (validationError.value)
      ? (openBlock(), createElementBlock("p", _hoisted_3, " ⚠️ Please select an available date to proceed. "))
      : createCommentVNode("", true)
  ]))
}
}

};
const DatePillSelector = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-1e34f199"]]);

class PatientReferralService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 114, providerID);
  }
}

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReferToAnotherClinic",
  emits: ["programDateSelected", "referralDataReady", "dataSaved"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const user_programs = ref([]);
    const selectedProgramsWithDates = ref([]);
    const finalSelectedDates = ref([]);
    const programStore = useProgramStore();
    const clinicalDaysStore = useClinicalDaysStore();
    const { activeProgram } = storeToRefs(programStore);
    const dateValidationFailed = ref(false);
    const list_picker_prperties = [
      {
        multi_Selection: true,
        show_list_label: true,
        unqueId: "qwerty_8_562",
        name_of_list: "Clinics",
        placeHolder: "Search for programs",
        items: [],
        listUpdatedFN: listUpdated2,
        listFilteredFN: () => {
        },
        searchTextFN: () => {
        },
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "Please select one or more clinics/programs to refer to.",
        disabled: ref(false)
      }
    ];
    const validateForm = async () => {
      dateValidationFailed.value = false;
      const programSelected = selectedProgramsWithDates.value.length > 0;
      list_picker_prperties[0].show_error.value = !programSelected;
      if (!programSelected) {
        console.log("Validation Failed: No programs selected.");
        return;
      }
      let allDatesSelected = true;
      finalSelectedDates.value = [];
      for (const program of selectedProgramsWithDates.value) {
        if (program.dateSelectorRef) {
          const isValid = program.dateSelectorRef.validateSelection();
          if (!isValid) {
            allDatesSelected = false;
          } else {
            const selectedDate = program.dateSelectorRef.getSelectedDate();
            if (selectedDate) {
              finalSelectedDates.value.push({
                programId: program.id,
                programName: program.name,
                date: selectedDate
              });
            } else {
              allDatesSelected = false;
            }
          }
        } else {
          allDatesSelected = false;
          console.error(`Date Selector ref is missing for program ${program.name}`);
        }
      }
      if (!allDatesSelected) {
        dateValidationFailed.value = true;
        console.log("Validation Failed: Not all dates selected.");
        return;
      }
      console.log("Validation Passed! Ready to refer patient with data:", finalSelectedDates.value);
      emits("referralDataReady", finalSelectedDates.value);
      await openCornfirmModal(finalSelectedDates.value, sub_refferal_data);
    };
    const sub_refferal_data = async (programDates) => {
      try {
        const providerID = Service.getUserID();
        const patientID = Service.getPatientID();
        const referralService = new PatientReferralService(patientID, providerID);
        await referralService.createEncounter();
        const referralData = programDates.map((referral) => ({
          concept_id: 2227,
          value_numeric: referral.programId,
          obs_datetime: HisDate.sessionDate(),
          child: [
            {
              concept_id: 11242,
              value_text: HisDate.toStandardHisFormat(referral.date),
              obs_datetime: HisDate.sessionDate()
            }
          ]
        }));
        await referralService.saveObservationList(referralData);
        toastSuccess("Patient referral saved successfully");
        dataSaved();
      } catch (error) {
        toastWarning("Error saving referral data. Please try again.", 4e3);
        console.error("Error in sub_refferal_data:", error);
      }
    };
    const cancelE = () => {
      dataSaved();
    };
    function dataSaved(data = { dataSaved: true }) {
      emits("dataSaved", data);
    }
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    const handleDateSelected = (dateData, programId, programName) => {
      emits("programDateSelected", {
        programId,
        programName,
        date: dateData
      });
      dateValidationFailed.value = false;
      const index = finalSelectedDates.value.findIndex((item) => item.programId === programId);
      const newDateData = {
        programId,
        programName,
        date: dateData
      };
      if (index > -1) {
        finalSelectedDates.value[index] = newDateData;
      } else {
        finalSelectedDates.value.push(newDateData);
      }
    };
    async function listUpdated2(data) {
      user_programs.value = data;
      updateSelectedProgramsStructure();
      dateValidationFailed.value = false;
      await getAvailableDatesForAllSelectedPrograms();
    }
    function updateSelectedProgramsStructure() {
      const newlySelectedPrograms = [];
      user_programs.value.forEach((program) => {
        if (program.selected == true) {
          newlySelectedPrograms.push(program.other);
        }
      });
      const newSelectedProgramIds = newlySelectedPrograms.map((p) => p.program_id);
      selectedProgramsWithDates.value = selectedProgramsWithDates.value.filter(
        (item) => newSelectedProgramIds.includes(item.id)
      );
      finalSelectedDates.value = finalSelectedDates.value.filter(
        (item) => newSelectedProgramIds.includes(item.programId)
      );
      newlySelectedPrograms.forEach((program) => {
        if (!selectedProgramsWithDates.value.some((item) => item.id === program.program_id)) {
          selectedProgramsWithDates.value.push({
            id: program.program_id,
            name: program.name,
            dates: [],
            dateSelectorRef: null
            // Initialize the ref storage
          });
        }
      });
      list_picker_prperties[0].show_error.value = newlySelectedPrograms.length === 0;
    }
    const getAvailableDatesForAllSelectedPrograms = async () => {
      const dateFetchingPromises = selectedProgramsWithDates.value.map(async (program) => {
        try {
          const dates = clinicalDaysStore.getAvailableDatesByProgramId(program.id, 90, true, 4);
          program.dates = dates;
        } catch (error) {
          console.error(`Error fetching dates for program ${program.name}:`, error);
          program.dates = [];
        }
      });
      await Promise.all(dateFetchingPromises);
    };
    async function getUserPrograms() {
      const programId = activeProgram.value.program_id;
      const all_programs = await ProgramService.getAllPrograms();
      const temp_array = [];
      all_programs.forEach((item) => {
        if (item.program_id !== programId) {
          temp_array.push({
            name: item.name,
            other: item,
            selected: false
          });
        }
      });
      user_programs.value = temp_array;
    }
    const openCornfirmModal = async (param, callBackFn) => {
      const handleCancel = (event) => {
      };
      const handleConfirm = async (event) => {
        if (event.detail == true) {
          await callBackFn(param);
        }
      };
      const dataToPass = { message: "Are you sure you want to add this Referral(s)?" };
      createModal(confirmModal, { class: "otherVitalsModal" }, true, dataToPass, { cancel: handleCancel, confirm: handleConfirm });
    };
    onMounted(async () => {
      await getUserPrograms();
      setValueProps();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Refer to another clinic", -1)
                ])]),
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
                      createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "color": "grey" } }, {
                        default: withCtx(() => [..._cache[1] || (_cache[1] = [
                          createTextVNode(" Program(s)", -1),
                          createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(ListPicker, {
                        multiSelection: list_picker_prperties[0].multi_Selection,
                        show_label: list_picker_prperties[0].show_list_label,
                        uniqueId: list_picker_prperties[0].unqueId,
                        name_of_list: list_picker_prperties[0].name_of_list,
                        choose_place_holder: list_picker_prperties[0].placeHolder,
                        "items_-list": user_programs.value,
                        use_internal_filter: list_picker_prperties[0].use_internal_filter,
                        disabled: list_picker_prperties[0].disabled.value,
                        onItemListUpDated: list_picker_prperties[0].listUpdatedFN,
                        onItemListFiltered: list_picker_prperties[0].listFilteredFN,
                        onItemSearchText: list_picker_prperties[0].searchTextFN
                      }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered", "onItemSearchText"]),
                      createBaseVNode("div", null, [
                        list_picker_prperties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(list_picker_prperties[0].error_message), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(selectedProgramsWithDates.value, (program, index) => {
                return openBlock(), createBlock(unref(IonRow), {
                  key: program.id
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-top": "20px", "font-weight": "bold", "display": "block" } }, {
                          default: withCtx(() => [
                            _cache[2] || (_cache[2] = createBaseVNode("span", { style: { "color": "gray" } }, "Available Dates for:", -1)),
                            createTextVNode(" " + toDisplayString(program.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(DatePillSelector, {
                          availableDates: program.dates,
                          onDateSelected: (data) => handleDateSelected(data, program.id, program.name),
                          ref_for: true,
                          ref: (el) => {
                            if (el) program.dateSelectorRef = el;
                          }
                        }, null, 8, ["availableDates", "onDateSelected"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              dateValidationFailed.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "-10px" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "error-label" }, {
                        default: withCtx(() => [..._cache[3] || (_cache[3] = [
                          createTextVNode(" ⚠️ Please select an available date for all selected programs. ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(IonRow), { class: "action-buttons" }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), { class: "ion-text-end" }, {
                    default: withCtx(() => [
                      dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                        key: 0,
                        name: dynamic_button_properties[1].name,
                        fill: dynamic_button_properties[1].btnFill,
                        icon: unref(closeCircleOutline),
                        "onClicked:btn": dynamic_button_properties[1].fn
                      }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                      selectedProgramsWithDates.value.length > 0 ? (openBlock(), createBlock(DynamicButton, {
                        key: 1,
                        name: dynamic_button_properties[0].name,
                        fill: dynamic_button_properties[0].btnFill,
                        icon: unref(saveOutline),
                        "onClicked:btn": dynamic_button_properties[0].fn
                      }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
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
    };
  }
});

const ReferToAnotherClinic = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-721c6ae2"]]);

const _hoisted_1 = { class: "dash_box" };
const _hoisted_2 = {
  key: 0,
  style: { "margin-top": "100px" }
};
const __default__ = defineComponent({
  name: "xxxComponent"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const initialMsg = ref("No outcome created yet");
    const show_error_msg_for_ref_type = ref(false);
    const showAddItemButton = ref(true);
    const refType = ref("");
    const showEmptyMsg = ref(true);
    const showAddReferralInfo = ref(false);
    const store = useOutcomeStore();
    const outcomes = computed(() => store.outcomes);
    const EditEvnt = ref(false);
    const show_dead_options = ref(false);
    const show_admitted_options = ref(false);
    const show_referred_options = ref(false);
    const show_discharged_options = ref(false);
    const show_refer_to_another_clinic = ref(false);
    const selected_referral_type = ref();
    const selected_referral_type_data = ref(null);
    const selected_referral_data = ref(null);
    const selected_ward_data = ref(null);
    const admitted_other_data = ref(null);
    const selected_discharged_type_data = ref(null);
    const selected_discharged_data = ref(null);
    const referralType = ref([
      {
        name: "Admitted for short stay",
        selected: false
      },
      {
        name: "Referred out",
        selected: false
      },
      {
        name: "Discharged Home",
        selected: false
      },
      {
        name: "Send to Another Clinic",
        selected: false
      }
      // {
      //     name: "Death",
      //     selected: false,
      // },
    ]);
    function listUpdated(data) {
      referralType.value.forEach((item) => {
        if (data.selected == true && (data.name == item.name || data.type == item.name)) {
          refType.value = item.name;
        }
      });
    }
    onMounted(async () => {
      checkForOutcomes();
    });
    watch(
      () => refType.value,
      async (newvalue) => {
        if (EditEvnt.value == true) {
          EditEvnt.value = false;
        } else {
          checkRefType();
        }
      }
    );
    watch(
      () => outcomes.value.length,
      async (newvalue) => {
        checkForOutcomes();
      }
    );
    function resetSelection() {
      referralType.value.forEach((item) => {
        item.selected = false;
      });
      refType.value = "";
    }
    function checkForOutcomes() {
      if (outcomes.value.length > 0) {
        showEmptyMsg.value = false;
      } else if (outcomes.value.length == 0 && showAddReferralInfo.value == false) {
        showEmptyMsg.value = true;
      }
    }
    function removeItem(index) {
      outcomes.value.splice(index, 1);
    }
    const editItem = (data) => {
      removeItem(data.index);
      listUpdated(data.item);
      selected_referral_type_data.value = data.item.other.location_data;
      selected_referral_data.value = {
        reason: data.item.reason,
        date: data.item.date,
        time: data.item.time
      };
      selected_ward_data.value = data.item.other;
      admitted_other_data.value = data.item;
      if (data.item.type === "Discharged Home") {
        selected_discharged_type_data.value = data.item;
        selected_discharged_data.value = {
          reason: data.item.reason,
          date: data.item.date
        };
      }
    };
    async function checkRefType(clear_inputs = true) {
      const tempRefType = refType.value;
      refType.value = tempRefType;
      const ref_type = refType.value;
      if (ref_type == referralType.value[0].name) {
        show_admitted_options.value = true;
      } else {
        show_admitted_options.value = false;
      }
      if (ref_type == referralType.value[1].name) {
        show_referred_options.value = true;
      } else {
        show_referred_options.value = false;
      }
      if (ref_type == referralType.value[2].name) {
        show_discharged_options.value = true;
      } else {
        show_discharged_options.value = false;
      }
      if (ref_type == referralType.value[3].name) {
        show_refer_to_another_clinic.value = true;
      } else {
        show_refer_to_another_clinic.value = false;
      }
    }
    function dataSavedTrigFn() {
      show_dead_options.value = false;
      show_admitted_options.value = false;
      show_discharged_options.value = false;
      show_referred_options.value = false;
      resetSelection();
    }
    const selectedReferralType = (data) => {
      referralType.value.forEach((item) => {
        item.selected = false;
      });
      selected_referral_type.value = data;
      selected_referral_type.value.selected = true;
      listUpdated(selected_referral_type.value);
    };
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createBlock(unref(IonList), null, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(unref(IonCol), null, {
                default: withCtx(() => [
                  true ? (openBlock(), createBlock(DynamicDispositionList, {
                    key: 0,
                    "onUpdate:removeItem": removeItem,
                    "onUpdate:editItem": editItem,
                    displayData: outcomes.value
                  }, null, 8, ["displayData"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          showEmptyMsg.value ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_1, toDisplayString(initialMsg.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(unref(IonCol), null, {
                default: withCtx(() => [
                  showAddItemButton.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(unref(script), {
                          modelValue: selected_referral_type.value,
                          "onUpdate:modelValue": [
                            _cache[0] || (_cache[0] = ($event) => selected_referral_type.value = $event),
                            _cache[1] || (_cache[1] = ($event) => selectedReferralType($event))
                          ],
                          multiple: false,
                          taggable: false,
                          "hide-selected": true,
                          "close-on-select": true,
                          openDirection: "top",
                          "tag-placeholder": "find and select a referral type",
                          placeholder: "find and select a referral type",
                          selectLabel: "",
                          label: "name",
                          searchable: true,
                          disabled: false,
                          onSearchChange: () => {
                          },
                          "track-by": "name",
                          options: referralType.value
                        }, null, 8, ["modelValue", "options"]),
                        createBaseVNode("div", null, [
                          show_error_msg_for_ref_type.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [..._cache[2] || (_cache[2] = [
                              createTextVNode(toDisplayString("please select a type"), -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          show_admitted_options.value ? (openBlock(), createBlock(AdmittedforShortStayOutcomef, {
            key: 1,
            onDataSaved: dataSavedTrigFn,
            selected_ward_prop: selected_ward_data.value,
            admitted_other_props: admitted_other_data.value
          }, null, 8, ["selected_ward_prop", "admitted_other_props"])) : createCommentVNode("", true),
          show_referred_options.value ? (openBlock(), createBlock(ReferredOutCome, {
            key: 2,
            onDataSaved: dataSavedTrigFn,
            selected_referral_data: selected_referral_type_data.value,
            selected_other_referral_data: selected_referral_data.value
          }, null, 8, ["selected_referral_data", "selected_other_referral_data"])) : createCommentVNode("", true),
          show_discharged_options.value ? (openBlock(), createBlock(DischargedHome, {
            key: 3,
            onDataSaved: dataSavedTrigFn,
            selected_discharged_prop: selected_discharged_type_data.value,
            selected_discharged_data: selected_discharged_data.value
          }, null, 8, ["selected_discharged_prop", "selected_discharged_data"])) : createCommentVNode("", true),
          show_refer_to_another_clinic.value ? (openBlock(), createBlock(ReferToAnotherClinic, {
            key: 4,
            onDataSaved: dataSavedTrigFn
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});

const Outcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2873182f"]]);

export { AdmittedforShortStayOutcomef as A, DynamicDispositionList as D, Outcome as O, ReferredOutCome as R, _sfc_main$6 as _, DischargedHome as a, ReferToAnotherClinic as b };
