import { _ as _export_sfc, aA as userPhoneInput, aQ as BasicPhoneInputField, F as DynamicButton, B as BasicInputField, H as HisDate, aR as resetGroupedRadioBtn, aS as resetRadioBtn, y as StandardValidations, a1 as modifyFieldValue, aT as modifyCheckboxInputField, aU as modifyUnitsValue, aV as modifyRadioValue, aW as modifyGroupedRadioValue, aX as modifyCheckboxValue } from '../index-CFJWTLPI.js';
import { s as defineComponent, f as ref, w as watch, y as openBlock, z as createElementBlock, J as Fragment, a4 as normalizeClass, a5 as createTextVNode, D as toDisplayString, H as createCommentVNode, C as createBaseVNode, P as normalizeStyle, A as createVNode, F as unref, a6 as IonInput, B as withCtx, O as createBlock, a7 as IonLabel, N as IonButton, L as IonIcon, au as script, ah as IonRadioGroup, ai as IonRadio, af as IonRow, aA as IonCol, ae as IonCheckbox, ei as IonDatetimeButton, ak as IonDatetime, G as closeCircleOutline, eh as refreshCircleOutline, x as resolveComponent, R as renderList, S as withDirectives, T as vShow } from './vendor-CCA5uLDN.js';
import { D as DateInputField } from './DateInputField-a1uBk03w.js';

const _hoisted_1$1 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_2$1 = {
  key: 1,
  class: "left-text"
};
const _hoisted_3$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BasicInputChangeUnits",
  props: {
    placeholder: { type: String },
    inputValue: { type: String },
    icon: { type: String },
    unit: { type: String },
    leftText: { type: String },
    inputHeader: { type: String },
    iconRight: { type: String },
    bold: { type: String },
    inputType: { type: String, default: "text" },
    eventType: { type: String },
    popOverData: { type: Object, default: () => null },
    inputWidth: { type: String, default: "100%" },
    input: { type: String },
    disabled: { type: Boolean, default: false },
    InnerActionBtnPropeties: { type: Object, default: () => ({}) },
    unitsData: { type: Object, default: () => ({}) }
  },
  emits: ["clicked:inputValue", "update:inputValue", "update:units", "search-change", "clicked:InnerActionBtnPropeties", "update:InnerActionBtnPropetiesAction"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popoverOpen = ref(false);
    const event = ref("");
    const filteredData = ref([]);
    const showAsterisk = ref(false);
    const selectedValue = ref(props.unitsData?.value);
    watch(
      () => props.unitsData?.value,
      (newValue) => {
        if (newValue !== void 0) {
          selectedValue.value = newValue;
        }
      }
    );
    const handleClick = (event2) => {
      emit("clicked:inputValue", event2);
    };
    const handleInput = (event2) => {
      if (props.popOverData?.data) {
        setEvent(event2);
      }
      emit("update:inputValue", event2);
    };
    const handleBlur = (event2) => {
      emit("update:inputValue", event2);
    };
    const setEvent = (newEvent) => {
      event.value = newEvent;
      searchInput(newEvent);
    };
    const searchInput = async (ev) => {
      popoverOpen.value = true;
      if (props.popOverData?.filterData) {
        filteredData.value = props.popOverData.data.filter((item) => item.name.toLowerCase().includes(ev.target.value.toLowerCase()));
      } else {
        filteredData.value = props.popOverData.data;
      }
    };
    const handleInnerActionBtnPropetiesFn = (event2) => {
      emit("update:InnerActionBtnPropetiesAction", event2);
    };
    const handleUnitsUpdate = (value) => {
      emit("update:units", value);
    };
    const removeAsterisk = (str) => {
      if (str.includes("*")) {
        showAsterisk.value = true;
        return str.replace(/\*/g, "");
      }
      showAsterisk.value = false;
      return str;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.inputHeader ? (openBlock(), createElementBlock("h6", {
          key: 0,
          class: normalizeClass(__props.bold),
          style: { "margin-top": "3px", "margin-bottom": "10px", "font-weight": "500" }
        }, [
          createTextVNode(toDisplayString(removeAsterisk(__props.inputHeader)) + " ", 1),
          showAsterisk.value ? (openBlock(), createElementBlock("span", _hoisted_1$1, " *")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "groupInput",
          style: normalizeStyle("width:" + __props.inputWidth)
        }, [
          createVNode(unref(IonInput), {
            onIonInput: handleInput,
            onIonBlur: handleBlur,
            onClick: handleClick,
            fill: "outline",
            value: __props.inputValue,
            placeholder: __props.placeholder,
            type: __props.inputType,
            disabled: __props.disabled,
            class: "custom",
            style: { "width": "100%" }
          }, {
            default: withCtx(() => [
              __props.InnerActionBtnPropeties?.show ? (openBlock(), createBlock(unref(IonLabel), {
                key: 0,
                style: { "display": "flex" },
                slot: "end"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonButton), {
                    slot: "end",
                    onClick: handleInnerActionBtnPropetiesFn
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.InnerActionBtnPropeties.name), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(IonLabel), {
                style: { "display": "flex" },
                slot: "start"
              }, {
                default: withCtx(() => [
                  __props.icon ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: __props.icon,
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                  __props.leftText ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(__props.leftText), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              __props.unit || __props.iconRight ? (openBlock(), createBlock(unref(IonLabel), {
                key: 1,
                slot: "end",
                style: { "border-left": "1px solid #e6e6e6", "padding-left": "10px" }
              }, {
                default: withCtx(() => [
                  __props.iconRight ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: __props.iconRight,
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                  __props.unit ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(__props.unit), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["value", "placeholder", "type", "disabled"]),
          __props.unitsData?.isSingleSelect ? (openBlock(), createBlock(unref(script), {
            key: 0,
            modelValue: selectedValue.value,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = ($event) => selectedValue.value = $event),
              handleUnitsUpdate
            ],
            multiple: false,
            "hide-selected": false,
            "close-on-select": true,
            openDirection: __props.unitsData.openDirection || "bottom",
            "tag-placeholder": "",
            placeholder: "",
            selectLabel: "",
            label: "name",
            searchable: true,
            onSearchChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("search-change", $event)),
            "track-by": __props.unitsData.trackBy || "concept_id",
            options: __props.unitsData.multiSelectData,
            class: "bg-white"
          }, null, 8, ["modelValue", "openDirection", "track-by", "options"])) : createCommentVNode("", true)
        ], 4)
      ], 64);
    };
  }
});

const BasicInputChangeUnits = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d8f8514"]]);

const _sfc_main = defineComponent({
  components: {
    BasicInputField,
    DynamicButton,
    IonDatetime,
    IonDatetimeButton,
    IonCheckbox,
    DateInputField,
    VueMultiselect: script,
    BasicInputChangeUnits,
    BasicPhoneInputField,
    IonCol,
    IonIcon,
    IonRow,
    IonLabel,
    IonRadio,
    IonRadioGroup,
    IonButton,
    userPhoneInput
  },
  data() {
    return {
      event: "",
      openPopover: false,
      header: "",
      flow: ["month", "year", "calendar"],
      date: "",
      value: [],
      options: [],
      refreshCircleOutline,
      closeCircleOutline
    };
  },
  props: {
    contentData: {
      default: []
    },
    initialData: {
      default: []
    }
  },
  watch: {},
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 1e7)
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    async handleInput(data, col, event, inputType) {
      this.event = event;
      if (inputType === "updateInput" && col.isPhoneInput) {
        this.validateData(data, col, event?.target?.value);
        col.value = event?.target?.value?.trim();
        this.$emit("update:inputValue", col);
      }
      if (inputType == "updateInput") {
        this.validateData(data, col, event?.target?.value);
        if (event) modifyFieldValue(data, col?.name, "value", event?.target?.value?.trim());
        this.$emit("update:inputValue", col);
      }
      if (inputType == "updateValue") {
        this.validateData(data, col, event);
        modifyFieldValue(data, col.name, "value", event);
        this.$emit("update:inputValue", col);
      }
      if (inputType == "updateMultiselect") {
        const multipleValues = Array.isArray(event) ? event.map((item) => item.name) : [];
        const singleValue = typeof event === "object" ? event?.name : "";
        this.validateData(data, col, col?.isMultiSelect ? multipleValues : singleValue);
        if (col?.isCheckboxInputField) modifyCheckboxInputField(data, col.name, "value", event);
        else modifyFieldValue(data, col.name, "value", event);
        this.$emit("update:inputValue", col);
      }
      if (inputType == "updateUnits") {
        this.validateData(data, col, event?.name);
        modifyUnitsValue(data, col.name, "value", event?.name);
        this.$emit("update:inputValue", col);
      }
      if (inputType == "updateDate") {
        this.validateData(data, col, event);
        modifyFieldValue(data, col.name, "value", event);
        modifyCheckboxInputField(data, col.name, "value", event);
        this.$emit("update:inputValue", col);
      }
      if (inputType == "clickedInput") {
        this.handlePopover(col);
        this.$emit("clicked:inputValue", event);
      }
      if (inputType == "setPopoverValue") {
        modifyFieldValue(data, col.name, "value", event.name);
        modifyFieldValue(data, col.value, "value", event.value);
        modifyFieldValue(data, col.name, "id", event[col.idName]);
        modifyFieldValue(data, col.name, "selectedID", event.id);
        this.handleSelected(col);
      }
      if (inputType == "updateRadioBtnContent") {
        this.validateData(data, col, event.target.value);
        modifyRadioValue(data, col.name, "selectedValue", event.target.value, this.initialData);
        this.$emit("update:inputValue", col);
      }
      if (inputType == "updateGroupedRadioBtnContent") {
        this.validateData(data, col, event.target.value);
        modifyGroupedRadioValue(data, col.name, "selectedValue", event.target.value);
        this.$emit("update:inputValue", col);
      }
      if (inputType == "checkboxInput") {
        this.validateData(data, col, event.target.value);
        modifyCheckboxInputField(data, col.name, "value", event.target.value);
        this.$emit("update:inputValue", col);
      }
      if (inputType == "updateCheckbox") {
        this.validateData(data, col, event.detail.checked);
        modifyCheckboxValue(data, col.name, "checked", event.detail.checked, this.initialData);
        this.$emit("update:inputValue", { col, event });
      }
      if (inputType == "countryChanged") {
        const message = await StandardValidations.validateMobilePhone(col.value, event);
        modifyFieldValue(data, col.name, "alertsErrorMassage", null);
        if (!message.includes("+")) {
          modifyFieldValue(data, col.name, "alertsErrorMassage", message);
        }
        this.$emit("countryChanged", { col, event });
      }
    },
    validateData(data, col, value) {
      if (col.validationFunctionName) {
        const validationMessage = StandardValidations[col.validationFunctionName](value);
        modifyFieldValue(data, col.name, "alertsErrorMassage", validationMessage);
      }
    },
    clearRadioBtn(data, headerTitle) {
      resetRadioBtn(data, headerTitle);
    },
    clearGroupRadioBtn(data, headerTitle) {
      resetGroupedRadioBtn(data, headerTitle);
    },
    handleSelected(col) {
      this.$emit("update:selected", col);
    },
    handlePopover(col) {
      if (col.isDatePopover) {
        this.openPopover = true;
        this.header = col.inputHeader;
      } else {
        this.openPopover = false;
      }
    },
    formatDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    test(e) {
      console.log(e);
    },
    showRefreshButton(showRBtn) {
      try {
        if (showRBtn == true) {
          return true;
        }
        if (showRBtn == false) {
          return false;
        }
      } catch (error) {
        return false;
      }
    },
    userPhoneChange(data) {
      console.log("data: ", data);
      if (data.is_valid == false) ;
      if (data.is_valid == true) ;
    }
  }
});

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 3 };
const _hoisted_3 = { class: "tooltip-container" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_6 = { key: 4 };
const _hoisted_7 = { class: "tooltip-container" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_10 = { style: { "position": "relative", "overflow": "visible" } };
const _hoisted_11 = {
  key: 6,
  class: "alerts_error"
};
const _hoisted_12 = { key: 1 };
const _hoisted_13 = { style: { "display": "flex", "align-items": "center", "gap": "10px" } };
const _hoisted_14 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_15 = ["onClick"];
const _hoisted_16 = {
  class: "tooltip-container",
  style: { "position": "relative" }
};
const _hoisted_17 = {
  key: 0,
  class: "first_col"
};
const _hoisted_18 = { style: { "display": "flex", "width": "100%" } };
const _hoisted_19 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_20 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_21 = { key: 2 };
const _hoisted_22 = ["onClick"];
const _hoisted_23 = {
  class: "tooltip-container",
  style: { "position": "relative", "margin-top": "-7px" }
};
const _hoisted_24 = { style: { "display": "flex", "width": "100%" } };
const _hoisted_25 = { key: 3 };
const _hoisted_26 = { style: {} };
const _hoisted_27 = {
  class: "checkbox_header",
  style: { "margin-bottom": "0px" }
};
const _hoisted_28 = {
  key: 0,
  class: "small_font"
};
const _hoisted_29 = {
  key: 2,
  class: "alerts_error"
};
const _hoisted_30 = { key: 1 };
const _hoisted_31 = { key: 0 };
const _hoisted_32 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_33 = {
  key: 2,
  class: "alerts_error"
};
const _hoisted_34 = { class: "position_content alert_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_BasicInputField = resolveComponent("BasicInputField");
  const _component_BasicPhoneInputField = resolveComponent("BasicPhoneInputField");
  const _component_BasicInputChangeUnits = resolveComponent("BasicInputChangeUnits");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_VueMultiselect = resolveComponent("VueMultiselect");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_DateInputField = resolveComponent("DateInputField");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_radio = resolveComponent("ion-radio");
  const _component_ion_radio_group = resolveComponent("ion-radio-group");
  const _component_ion_checkbox = resolveComponent("ion-checkbox");
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.contentData, (item, index) => {
    return withDirectives((openBlock(), createBlock(_component_ion_row, {
      key: index,
      class: normalizeClass(_ctx.contentData[index].classDash),
      style: { "width": "100%" }
    }, {
      default: withCtx(() => [
        item["sectionHeader"] || item["sideColSize"] || item["sectionHeader"] == "null" ? (openBlock(), createBlock(_component_ion_col, {
          key: 0,
          class: "item_header_col",
          size: item["sideColSize"]
        }, {
          default: withCtx(() => [
            item["sectionHeader"] != "null" ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "item_header",
              style: normalizeStyle("font-weight:" + item.sectionHeaderFontWeight)
            }, toDisplayString(item["sectionHeader"]), 5)) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["size"])) : createCommentVNode("", true),
        !item.displayNone ? (openBlock(), createBlock(_component_ion_col, { key: 1 }, {
          default: withCtx(() => [
            item.data ? (openBlock(), createElementBlock("span", _hoisted_1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(item.data.rowData, (element, index2) => {
                return openBlock(), createBlock(_component_ion_row, { key: index2 }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(element.colData, (col, colIndex) => {
                      return withDirectives((openBlock(), createBlock(_component_ion_col, {
                        key: colIndex,
                        size: col.colSize
                      }, {
                        default: withCtx(() => [
                          !col.isDatePopover && !col.isMultiSelect && !col.isSingleSelect && !col.isChangeUnits && !col.isPhoneInput ? (openBlock(), createBlock(_component_BasicInputField, {
                            key: 0,
                            inputHeader: col.inputHeader,
                            inputType: col.inputType,
                            sectionHeaderFontWeight: col.sectionHeaderFontWeight,
                            bold: col.class,
                            unit: col.unit,
                            input: col.input,
                            disabled: col.disabled,
                            icon: col.icon,
                            placeholder: col.placeholder,
                            iconRight: col.iconRight,
                            leftText: col.leftText,
                            inputWidth: col.inputWidth,
                            inputValue: col.value,
                            eventType: col.eventType,
                            "onUpdate:inputValue": ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "updateInput"),
                            "onClicked:inputValue": ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "clickedInput"),
                            popOverData: col.popOverData,
                            onSetPopoverValue: ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "setPopoverValue"),
                            onHandleInnerActionBtnPropetiesFn: ($event) => _ctx.$emit("click:innerBtn", col),
                            InnerActionBtnPropeties: col.InnerBtn
                          }, null, 8, ["inputHeader", "inputType", "sectionHeaderFontWeight", "bold", "unit", "input", "disabled", "icon", "placeholder", "iconRight", "leftText", "inputWidth", "inputValue", "eventType", "onUpdate:inputValue", "onClicked:inputValue", "popOverData", "onSetPopoverValue", "onHandleInnerActionBtnPropetiesFn", "InnerActionBtnPropeties"])) : createCommentVNode("", true),
                          col.isPhoneInput ? (openBlock(), createBlock(_component_BasicPhoneInputField, {
                            key: 1,
                            inputHeader: col.inputHeader,
                            sectionHeaderFontWeight: col.sectionHeaderFontWeight,
                            bold: col.class,
                            unit: col.unit,
                            input: col.input,
                            disabled: col.disabled,
                            icon: col.icon,
                            placeholder: col.placeholder,
                            iconRight: col.iconRight,
                            leftText: col.leftText,
                            inputWidth: col.inputWidth,
                            inputValue: col.value,
                            eventType: col.eventType,
                            "onUpdate:inputValue": ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "updateInput"),
                            onCountryChanged: ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "countryChanged"),
                            popOverData: col.popOverData,
                            onHandleInnerActionBtnPropetiesFn: ($event) => _ctx.$emit("click:innerBtn", col),
                            InnerActionBtnPropeties: col.InnerBtn
                          }, null, 8, ["inputHeader", "sectionHeaderFontWeight", "bold", "unit", "input", "disabled", "icon", "placeholder", "iconRight", "leftText", "inputWidth", "inputValue", "eventType", "onUpdate:inputValue", "onCountryChanged", "popOverData", "onHandleInnerActionBtnPropetiesFn", "InnerActionBtnPropeties"])) : createCommentVNode("", true),
                          col.isChangeUnits ? (openBlock(), createBlock(_component_BasicInputChangeUnits, {
                            key: 2,
                            inputHeader: col.inputHeader,
                            unitsData: col.unitsData,
                            sectionHeaderFontWeight: col.sectionHeaderFontWeight,
                            bold: col.class,
                            unit: col.unit,
                            input: col.input,
                            disabled: col.disabled,
                            icon: col.icon,
                            placeholder: col.placeholder,
                            iconRight: col.iconRight,
                            leftText: col.leftText,
                            inputWidth: col.inputWidth,
                            inputValue: col.value,
                            eventType: col.eventType,
                            "onUpdate:inputValue": ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "updateInput"),
                            "onClicked:inputValue": ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "clickedInput"),
                            "onUpdate:units": ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "updateUnits"),
                            popOverData: col.popOverData,
                            onSetPopoverValue: ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "setPopoverValue"),
                            onHandleInnerActionBtnPropetiesFn: ($event) => _ctx.$emit("click:innerBtn", col),
                            InnerActionBtnPropeties: col.InnerBtn
                          }, null, 8, ["inputHeader", "unitsData", "sectionHeaderFontWeight", "bold", "unit", "input", "disabled", "icon", "placeholder", "iconRight", "leftText", "inputWidth", "inputValue", "eventType", "onUpdate:inputValue", "onClicked:inputValue", "onUpdate:units", "popOverData", "onSetPopoverValue", "onHandleInnerActionBtnPropetiesFn", "InnerActionBtnPropeties"])) : createCommentVNode("", true),
                          col.isMultiSelect ? (openBlock(), createElementBlock("div", _hoisted_2, [
                            createVNode(_component_ion_row, { class: "align-items-center" }, {
                              default: withCtx(() => [
                                _ctx.showRefreshButton(col.showRefreshButton) ? (openBlock(), createBlock(_component_ion_col, {
                                  key: 0,
                                  size: "auto"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", {
                                      style: { "cursor": "pointer", "margin-top": "30px" },
                                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("refresh", true))
                                    }, [
                                      createBaseVNode("div", _hoisted_3, [
                                        createVNode(_component_ion_button, {
                                          fill: "clear",
                                          size: "small",
                                          style: { "--padding-start": "0", "--padding-end": "0", "--padding-top": "0", "--padding-bottom": "0" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_icon, {
                                              slot: "icon-only",
                                              icon: _ctx.refreshCircleOutline,
                                              style: { "font-size": "2rem", "color": "gray" },
                                              class: "tooltip-trigger"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 1
                                        }),
                                        _cache[5] || (_cache[5] = createBaseVNode("span", { class: "tooltip-text" }, "Refresh", -1))
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_ion_col, null, {
                                  default: withCtx(() => [
                                    col.inputHeader ? (openBlock(), createElementBlock("h6", _hoisted_4, [
                                      createTextVNode(toDisplayString(col.inputHeader.replace(/\*/g, "")) + " ", 1),
                                      col.inputHeader.includes("*") ? (openBlock(), createElementBlock("span", _hoisted_5, " *")) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    col.isMultiSelect ? (openBlock(), createBlock(_component_VueMultiselect, {
                                      key: 1,
                                      modelValue: col.value,
                                      "onUpdate:modelValue": [($event) => col.value = $event, ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "updateMultiselect")],
                                      multiple: true,
                                      taggable: true,
                                      "hide-selected": true,
                                      "close-on-select": true,
                                      openDirection: col.openDirection || "bottom",
                                      "prevent-autofocus": true,
                                      tabindex: "-1",
                                      loading: col.loading,
                                      class: "no-focus",
                                      "tag-placeholder": "",
                                      placeholder: "",
                                      selectLabel: "",
                                      label: "name",
                                      searchable: true,
                                      onSearchChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("search-change", $event)),
                                      "track-by": col.trackBy || "concept_id",
                                      options: col.multiSelectData
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "openDirection", "loading", "track-by", "options"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ])) : createCommentVNode("", true),
                          col.isSingleSelect ? (openBlock(), createElementBlock("div", _hoisted_6, [
                            createVNode(_component_ion_row, { class: "align-items-center" }, {
                              default: withCtx(() => [
                                _ctx.showRefreshButton(col.showRefreshButton) ? (openBlock(), createBlock(_component_ion_col, {
                                  key: 0,
                                  size: "auto"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", {
                                      style: { "cursor": "pointer", "margin-top": "30px" },
                                      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("refresh", true))
                                    }, [
                                      createBaseVNode("div", _hoisted_7, [
                                        createVNode(_component_ion_button, {
                                          fill: "clear",
                                          size: "small",
                                          style: { "--padding-start": "0", "--padding-end": "0", "--padding-top": "0", "--padding-bottom": "0" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ion_icon, {
                                              slot: "icon-only",
                                              icon: _ctx.refreshCircleOutline,
                                              style: { "font-size": "2rem", "color": "gray" },
                                              class: "tooltip-trigger"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 1
                                        }),
                                        _cache[6] || (_cache[6] = createBaseVNode("span", { class: "tooltip-text" }, "Refresh", -1))
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_ion_col, null, {
                                  default: withCtx(() => [
                                    col.inputHeader && !col.inputFieldDisplayNone ? (openBlock(), createElementBlock("h6", _hoisted_8, [
                                      createTextVNode(toDisplayString(col.inputHeader.replace(/\*/g, "")) + " ", 1),
                                      col.inputHeader.includes("*") ? (openBlock(), createElementBlock("span", _hoisted_9, " *")) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    createBaseVNode("div", _hoisted_10, [
                                      !col.inputFieldDisplayNone ? (openBlock(), createBlock(_component_VueMultiselect, {
                                        key: 0,
                                        disabled: col.disabled,
                                        modelValue: col.value,
                                        "onUpdate:modelValue": [($event) => col.value = $event, ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "updateMultiselect")],
                                        "max-height": 150,
                                        multiple: false,
                                        "hide-selected": col.hide_selected,
                                        "close-on-select": true,
                                        openDirection: col.openDirection || "bottom",
                                        "prevent-autofocus": true,
                                        tabindex: "-1",
                                        loading: col.loading,
                                        class: "no-focus",
                                        "tag-placeholder": "",
                                        placeholder: "",
                                        selectLabel: "",
                                        label: "name",
                                        searchable: true,
                                        onSearchChange: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("search-change", $event)),
                                        "track-by": col.trackBy || "concept_id",
                                        options: col.multiSelectData
                                      }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "hide-selected", "openDirection", "loading", "track-by", "options"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ])) : createCommentVNode("", true),
                          col.isDatePopover ? (openBlock(), createBlock(_component_DateInputField, {
                            key: 5,
                            inputHeader: col.inputHeader,
                            sectionHeaderFontWeight: col.sectionHeaderFontWeight,
                            bold: col.bold,
                            unit: col.unit,
                            icon: col.icon,
                            placeholder: col.placeholder,
                            iconRight: col.iconRight,
                            inputWidth: col.inputWidth,
                            inputValue: col.value,
                            eventType: col.eventType,
                            minDate: col.minDate,
                            maxDate: col.maxDate,
                            disabled: col.disabled,
                            "onUpdate:dateValue": ($event) => _ctx.handleInput(_ctx.contentData, col, $event, "updateDate")
                          }, null, 8, ["inputHeader", "sectionHeaderFontWeight", "bold", "unit", "icon", "placeholder", "iconRight", "inputWidth", "inputValue", "eventType", "minDate", "maxDate", "disabled", "onUpdate:dateValue"])) : createCommentVNode("", true),
                          col.alertsErrorMassage ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(col.alertsErrorMassage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["size"])), [
                        [vShow, !col.inputDisplayNone]
                      ]);
                    }), 128)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(element.btns, (btn, btnIndex) => {
                      return openBlock(), createBlock(_component_ion_col, {
                        size: btn.btn_col_size || 1.7,
                        class: "btn_col",
                        key: btnIndex
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_DynamicButton, {
                            name: btn.name,
                            showName: btn.showName,
                            size: btn.size,
                            fill: btn.fill,
                            icon: btn.icon,
                            onClick: ($event) => _ctx.$emit("clicked:button", btn.name)
                          }, null, 8, ["name", "showName", "size", "fill", "icon", "onClick"])
                        ]),
                        _: 2
                      }, 1032, ["size"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])) : createCommentVNode("", true),
            item.radioBtnContent && !item?.radioBtnContent?.header?.displayNone ? (openBlock(), createElementBlock("span", _hoisted_12, [
              item.radioBtnContent?.header ? (openBlock(), createElementBlock("div", {
                key: 0,
                style: { "font-size": "1rem", "display": "flex" },
                class: normalizeClass(item.radioBtnContent?.header?.class)
              }, [
                createBaseVNode("span", _hoisted_13, toDisplayString(item.radioBtnContent?.header.title.replace(/\*/g, "")), 1),
                item.radioBtnContent?.header.title.includes("*") ? (openBlock(), createElementBlock("span", _hoisted_14, " *")) : createCommentVNode("", true),
                item.radioBtnContent?.header ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  style: { "cursor": "pointer", "margin-left": "3px" },
                  onClick: ($event) => _ctx.clearRadioBtn(_ctx.contentData, item.radioBtnContent?.header.title)
                }, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(_component_ion_button, {
                      fill: "clear",
                      size: "small",
                      style: { "--padding-start": "0", "--padding-end": "0", "--padding-top": "0", "--padding-bottom": "0" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          slot: "icon-only",
                          icon: _ctx.closeCircleOutline,
                          style: { "font-size": "25px", "color": "gray", "margin-top": "7px" },
                          class: "tooltip-trigger"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }),
                    _cache[7] || (_cache[7] = createBaseVNode("span", { class: "tooltip-text" }, "Reset", -1))
                  ])
                ], 8, _hoisted_15)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              createVNode(_component_ion_row, { class: "checkbox_content" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.radioBtnContent?.data || item.radioBtnContent?.groupedData, (al, index3) => {
                    return openBlock(), createBlock(_component_ion_col, {
                      size: al.colSize,
                      class: "checkout_col",
                      style: {},
                      key: index3
                    }, {
                      default: withCtx(() => [
                        al.header ? (openBlock(), createElementBlock("span", _hoisted_17, [
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(al.name), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])) : (openBlock(), createBlock(_component_ion_radio_group, {
                          key: 1,
                          style: { "width": "100%" },
                          value: item.radioBtnContent.header.selectedValue,
                          onIonChange: ($event) => _ctx.handleInput(_ctx.contentData, item.radioBtnContent.header, $event, "updateRadioBtnContent")
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_18, [
                              createVNode(_component_ion_radio, {
                                value: al.value,
                                justify: al.justify || "start",
                                "label-placement": al.labelPlacement || "end"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(al.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["value", "justify", "label-placement"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value", "onIonChange"]))
                      ]),
                      _: 2
                    }, 1032, ["size"]);
                  }), 128)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.radioBtnContent.inputFields, (radioInput, radioInputIndex) => {
                    return openBlock(), createBlock(_component_ion_col, { key: radioInputIndex }, {
                      default: withCtx(() => [
                        createVNode(_component_BasicInputField, {
                          inputHeader: radioInput.inputHeader,
                          unit: radioInput.unit,
                          input: radioInput.input,
                          inputType: radioInput.inputType,
                          icon: radioInput.icon,
                          placeholder: radioInput.placeholder,
                          iconRight: radioInput.iconRight,
                          inputWidth: radioInput.inputWidth,
                          inputValue: radioInput.value,
                          eventType: radioInput.eventType,
                          "onUpdate:inputValue": ($event) => _ctx.handleInput(_ctx.contentData, radioInput, $event, "updateInput"),
                          "onClicked:inputValue": ($event) => _ctx.handleInput(_ctx.contentData, radioInput, $event, "clickedInput")
                        }, null, 8, ["inputHeader", "unit", "input", "inputType", "icon", "placeholder", "iconRight", "inputWidth", "inputValue", "eventType", "onUpdate:inputValue", "onClicked:inputValue"]),
                        radioInput.alertsErrorMassage ? (openBlock(), createElementBlock("div", _hoisted_19, toDisplayString(radioInput.alertsErrorMassage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  item.radioBtnContent?.header.alertsErrorMassage ? (openBlock(), createElementBlock("div", _hoisted_20, toDisplayString(item.radioBtnContent?.header.alertsErrorMassage), 1)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1024)
            ])) : createCommentVNode("", true),
            item.groupedRadioBtnContent ? (openBlock(), createElementBlock("span", _hoisted_21, [
              createVNode(_component_ion_row, {
                class: normalizeClass(item.displayStyle === "inline" ? "grouped-radio-side-by-side" : "checkbox_content")
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.groupedRadioBtnContent.groupedData, (al, index3) => {
                    return openBlock(), createBlock(_component_ion_col, {
                      class: normalizeClass(item.displayStyle === "inline" ? "grouped-radio-option" : "checkout_col"),
                      style: {},
                      key: index3
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(al.data, (radioBtn, index32) => {
                          return openBlock(), createBlock(_component_ion_col, {
                            size: radioBtn.colSize,
                            class: "checkout_col",
                            key: index32
                          }, {
                            default: withCtx(() => [
                              radioBtn.header ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                style: { "display": "flex" },
                                class: normalizeClass("first_col " + radioBtn.headClassName)
                              }, [
                                createBaseVNode("div", null, toDisplayString(radioBtn.name), 1),
                                createBaseVNode("div", {
                                  style: { "cursor": "pointer", "margin-left": "3px" },
                                  onClick: ($event) => _ctx.clearGroupRadioBtn(_ctx.contentData, al.header.name)
                                }, [
                                  createBaseVNode("div", _hoisted_23, [
                                    createVNode(_component_ion_button, {
                                      fill: "clear",
                                      size: "small",
                                      style: { "--padding-start": "0", "--padding-end": "0", "--padding-top": "0", "--padding-bottom": "0" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ion_icon, {
                                          slot: "icon-only",
                                          icon: _ctx.closeCircleOutline,
                                          style: { "font-size": "25px", "color": "gray", "margin-top": "7px" },
                                          class: "tooltip-trigger"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 1
                                    }),
                                    _cache[8] || (_cache[8] = createBaseVNode("span", { class: "tooltip-text" }, "Reset", -1))
                                  ])
                                ], 8, _hoisted_22)
                              ], 2)) : (openBlock(), createBlock(_component_ion_radio_group, {
                                key: 1,
                                style: { "width": "100%" },
                                value: al.header.selectedValue,
                                onIonChange: ($event) => _ctx.handleInput(_ctx.contentData, al.header, $event, "updateGroupedRadioBtnContent")
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("span", _hoisted_24, [
                                    createVNode(_component_ion_radio, {
                                      value: radioBtn.value,
                                      justify: radioBtn.justify || "start",
                                      "label-placement": radioBtn.labelPlacement || "end"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(radioBtn.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "justify", "label-placement"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value", "onIonChange"]))
                            ]),
                            _: 2
                          }, 1032, ["size"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["class"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["class"])
            ])) : createCommentVNode("", true),
            item?.checkboxBtnContent && !item?.checkboxBtnContent?.header?.displayNone ? (openBlock(), createElementBlock("span", _hoisted_25, [
              item.checkboxBtnContent?.header ? (openBlock(), createElementBlock("div", {
                key: 0,
                style: {},
                class: normalizeClass(item.checkboxBtnContent?.header?.class)
              }, toDisplayString(item.checkboxBtnContent?.header.title), 3)) : createCommentVNode("", true),
              createVNode(_component_ion_row, { class: "checkbox_content" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.checkboxBtnContent?.data, (al, index3) => {
                    return withDirectives((openBlock(), createBlock(_component_ion_col, {
                      size: al.colSize,
                      class: "checkout_col",
                      style: {},
                      key: index3
                    }, {
                      default: withCtx(() => [
                        al.header ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          class: normalizeClass("first_col " + al.headClassName)
                        }, [
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(al.name), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ], 2)) : (openBlock(), createBlock(_component_ion_checkbox, {
                          key: 1,
                          justify: al.justify || "start",
                          checked: al.checked,
                          style: { "width": "100%" },
                          disabled: al.disabled,
                          onIonChange: ($event) => _ctx.handleInput(_ctx.contentData, al, $event, "updateCheckbox"),
                          "label-placement": al.labelPlacement || "end"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_26, [
                              createBaseVNode("p", _hoisted_27, toDisplayString(al.name), 1),
                              al.example ? (openBlock(), createElementBlock("p", _hoisted_28, toDisplayString(al.example), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["justify", "checked", "disabled", "onIonChange", "label-placement"])),
                        al.alertsErrorMassage ? (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(al.alertsErrorMassage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["size"])), [
                      [vShow, !al.displayNone]
                    ]);
                  }), 128)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.checkboxBtnContent.inputFields, (checkboxInput, checkboxInputIndex) => {
                    return withDirectives((openBlock(), createBlock(_component_ion_col, { key: checkboxInputIndex }, {
                      default: withCtx(() => [
                        !checkboxInput.isMultiSelect ? (openBlock(), createBlock(_component_DateInputField, {
                          key: 0,
                          inputHeader: checkboxInput.inputHeader,
                          sectionHeaderFontWeight: checkboxInput.sectionHeaderFontWeight,
                          unit: checkboxInput.unit,
                          input: checkboxInput.input,
                          icon: checkboxInput.icon,
                          placeholder: checkboxInput.placeholder,
                          iconRight: checkboxInput.iconRight,
                          inputWidth: checkboxInput.inputWidth,
                          inputValue: checkboxInput.value,
                          eventType: checkboxInput.eventType,
                          minDate: checkboxInput.minDate,
                          maxDate: checkboxInput.maxDate,
                          disabled: checkboxInput.disabled,
                          "onUpdate:dateValue": ($event) => _ctx.handleInput(_ctx.contentData, checkboxInput, $event, "updateDate")
                        }, null, 8, ["inputHeader", "sectionHeaderFontWeight", "unit", "input", "icon", "placeholder", "iconRight", "inputWidth", "inputValue", "eventType", "minDate", "maxDate", "disabled", "onUpdate:dateValue"])) : createCommentVNode("", true),
                        checkboxInput.isMultiSelect ? (openBlock(), createElementBlock("div", _hoisted_30, [
                          checkboxInput.inputHeader ? (openBlock(), createElementBlock("h6", _hoisted_31, [
                            createTextVNode(toDisplayString(checkboxInput.inputHeader.replace(/\*/g, "")) + " ", 1),
                            checkboxInput.inputHeader.includes("*") ? (openBlock(), createElementBlock("span", _hoisted_32, " *")) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          checkboxInput.isMultiSelect ? (openBlock(), createBlock(_component_VueMultiselect, {
                            key: 1,
                            modelValue: checkboxInput.value,
                            "onUpdate:modelValue": [($event) => checkboxInput.value = $event, ($event) => _ctx.handleInput(_ctx.contentData, checkboxInput, $event, "updateMultiselect")],
                            "close-on-select": true,
                            openDirection: "bottom",
                            "prevent-autofocus": true,
                            tabindex: "-1",
                            class: "no-focus",
                            "tag-placeholder": "",
                            placeholder: "",
                            selectLabel: "",
                            label: "name",
                            searchable: true,
                            onSearchChange: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("search-change", $event)),
                            "track-by": checkboxInput.trackBy || "id",
                            options: checkboxInput.multiSelectData
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "track-by", "options"])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        checkboxInput.alertsErrorMassage ? (openBlock(), createElementBlock("div", _hoisted_33, toDisplayString(checkboxInput.alertsErrorMassage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)), [
                      [vShow, !item.checkboxBtnContent.inputFields[0].displayNone]
                    ]);
                  }), 128))
                ]),
                _: 2
              }, 1024)
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.alerts, (al, index3) => {
              return openBlock(), createElementBlock("span", { key: index3 }, [
                al.value ? (openBlock(), createBlock(_component_ion_row, {
                  key: 0,
                  style: normalizeStyle("border-radius: 5px;  margin-top:10px; margin-bottom:10px;background-color:" + al.backgroundColor)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_34, [
                      createVNode(_component_ion_icon, {
                        slot: "start",
                        icon: al.icon,
                        "aria-hidden": "true"
                      }, null, 8, ["icon"]),
                      createBaseVNode("span", {
                        style: normalizeStyle("color:" + al.textColor + "; font-weight:600; margin: 0px 20px;")
                      }, toDisplayString(al.index), 5),
                      createBaseVNode("span", {
                        style: normalizeStyle("color:" + al.textColor + ";")
                      }, toDisplayString(al.value), 5)
                    ])
                  ]),
                  _: 2
                }, 1032, ["style"])) : createCommentVNode("", true)
              ]);
            }), 128))
          ]),
          _: 2
        }, 1024)) : createCommentVNode("", true),
        _cache[9] || (_cache[9] = createBaseVNode("span", null, null, -1))
      ]),
      _: 2
    }, 1032, ["class"])), [
      [
        vShow,
        !_ctx.contentData[index]?.radioBtnContent?.header?.displayNone && !_ctx.contentData[index]?.checkboxBtnContent?.header?.displayNone && !_ctx.contentData[index]?.data?.rowData[0]?.colData[0]?.displayNone
      ]
    ]);
  }), 128);
}
const BasicForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb9af005"]]);

export { BasicForm as B };
