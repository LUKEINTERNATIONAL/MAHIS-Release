import { s as defineComponent, aq as IonItem, a6 as IonInput, x as resolveComponent, y as openBlock, z as createElementBlock, P as normalizeStyle, a5 as createTextVNode, D as toDisplayString, H as createCommentVNode, A as createVNode, B as withCtx, C as createBaseVNode, O as createBlock, J as Fragment } from './vendor-CIi-jrCy.js';
import { H as HisDate, _ as _export_sfc } from '../index-CPakPmy3.js';

const _sfc_main = defineComponent({
  name: "HisFormElement",
  components: {
    IonInput,
    IonItem
  },
  data() {
    return {
      displayList: [],
      popoverOpen: false,
      event: "",
      selectedText: "",
      filteredData: [],
      flow: ["year", "month", "calendar"],
      showAsterisk: false
    };
  },
  props: {
    minDate: {
      type: String,
      default: ""
    },
    maxDate: {
      type: String,
      default: HisDate.sessionDate()
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputValue: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    unit: {
      type: String,
      default: ""
    },
    inputHeader: {
      type: String,
      default: ""
    },
    iconRight: {
      type: String,
      default: ""
    },
    inputType: {
      default: ""
    },
    eventType: {
      type: String,
      default: "input"
    },
    popOverData: {
      default: []
    },
    inputWidth: {
      default: ""
    },
    InnerActionBtnPropeties: {
      default: {
        name: "provide name",
        show: false
      }
    },
    leftText: {
      type: String,
      default: ""
    },
    bold: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: String,
      default: ""
    },
    placeholderFontSize: {
      type: String,
      default: ""
    },
    placeholderFontWeight: {
      type: String,
      default: ""
    }
  },
  methods: {
    formatDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    handleInnerActionBtnPropetiesFn(event) {
      this.$emit("update:InnerActionBtnPropetiesAction", event);
    },
    removeAsterisk(str) {
      if (str.includes("*")) {
        this.showAsterisk = true;
        return str.replace(/\*/g, "");
      }
      this.showAsterisk = false;
      return str;
    },
    handleDateUpdate(date) {
      const formattedDate = this.formatDate(date);
      this.$emit("update:dateValue", formattedDate);
      this.$emit("update:rawDateValue", date);
    }
  }
});

const _hoisted_1 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_2 = {
  key: 1,
  class: "left-text"
};
const _hoisted_3 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_input = resolveComponent("ion-input");
  const _component_VueDatePicker = resolveComponent("VueDatePicker");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.inputHeader ? (openBlock(), createElementBlock("h6", {
      key: 0,
      style: normalizeStyle({
        fontWeight: _ctx.bold || "normal",
        fontSize: _ctx.fontSize || "inherit",
        color: "grey"
      })
    }, [
      createTextVNode(toDisplayString(_ctx.removeAsterisk(_ctx.inputHeader)) + " ", 1),
      _ctx.showAsterisk ? (openBlock(), createElementBlock("span", _hoisted_1, " *")) : createCommentVNode("", true)
    ], 4)) : createCommentVNode("", true),
    createVNode(_component_VueDatePicker, {
      onDateUpdate: _ctx.handleDateUpdate,
      "auto-apply": "",
      flow: _ctx.flow,
      vertical: "",
      "enable-time-picker": false,
      "auto-position": true,
      "min-date": _ctx.minDate,
      "max-date": _ctx.maxDate,
      "prevent-min-max-navigation": ""
    }, {
      trigger: withCtx(() => [
        createBaseVNode("div", {
          class: "",
          style: normalizeStyle("width:" + _ctx.inputWidth)
        }, [
          createVNode(_component_ion_input, {
            fill: "outline",
            value: _ctx.inputValue,
            placeholder: _ctx.placeholder,
            type: _ctx.inputType,
            disabled: _ctx.disabled,
            class: "date-input-field",
            style: normalizeStyle({
              "--placeholder-font-size": _ctx.placeholderFontSize,
              "--placeholder-font-weight": _ctx.placeholderFontWeight,
              "--color": "#000000",
              "--placeholder-color": "#666666"
            })
          }, {
            default: withCtx(() => [
              _ctx.InnerActionBtnPropeties.show ? (openBlock(), createBlock(_component_ion_label, {
                key: 0,
                style: { "display": "flex" },
                slot: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_button, {
                    slot: "end",
                    onClick: _ctx.handleInnerActionBtnPropetiesFn
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.InnerActionBtnPropeties.name), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ion_label, {
                style: { "display": "flex" },
                slot: "start"
              }, {
                default: withCtx(() => [
                  _ctx.icon ? (openBlock(), createBlock(_component_ion_icon, {
                    key: 0,
                    icon: _ctx.icon,
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                  _ctx.leftText ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.leftText), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              _ctx.unit || _ctx.iconRight ? (openBlock(), createBlock(_component_ion_label, {
                key: 1,
                slot: "end",
                style: { "border-left": "1px solid #e6e6e6", "padding-left": "10px" }
              }, {
                default: withCtx(() => [
                  _ctx.iconRight ? (openBlock(), createBlock(_component_ion_icon, {
                    key: 0,
                    icon: _ctx.iconRight,
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                  _ctx.unit ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.unit), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["value", "placeholder", "type", "disabled", "style"])
        ], 4)
      ]),
      _: 1
    }, 8, ["onDateUpdate", "flow", "min-date", "max-date"])
  ], 64);
}
const DateInputField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e73ef923"]]);

export { DateInputField as D };
