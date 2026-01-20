import { V as ViewPort } from './ReportMixin.vue_vue_type_script_lang-CdGs4U8x.js';
import { _ as _sfc_main$2 } from './FieldMixin.vue_vue_type_script_lang-CCZmajiR.js';
import { _ as _export_sfc, H as HisDate, S as Service } from '../index-C9DqaTYI.js';
import { v as defineComponent, O as IonButton, aA as IonCol, ag as IonRow, az as IonGrid, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode, a6 as createTextVNode, E as toDisplayString, a7 as IonInput, z as createElementBlock, F as renderSlot, C as createBaseVNode, K as Fragment } from './vendor-B4fW45I4.js';

const _sfc_main$1 = defineComponent({
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonButton
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  emits: [
    "onIncrement",
    "onDecrement"
  ],
  setup(p, context) {
    const onIncrement = () => context.emit("onIncrement");
    const onDecrement = () => context.emit("onDecrement");
    return {
      onIncrement,
      onDecrement
    };
  }
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  return openBlock(), createBlock(_component_ion_grid, { class: "his-card" }, {
    default: withCtx(() => [
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { size: "12" }, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.onIncrement,
                color: "light",
                class: "w-button"
              }, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode(" + ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { class: "ion-text-center ion-margin-vertical large-text" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.value), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { size: "12" }, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.onDecrement,
                color: "light",
                class: "w-button"
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" - ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
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
const PickerSelector = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-988c43a9"]]);

const _sfc_main = defineComponent({
  components: { PickerSelector, IonInput, ViewPort, IonGrid, IonCol, IonRow, IonButton },
  mixins: [_sfc_main$2],
  data: () => ({
    value: "",
    date: "",
    isInit: true
  }),
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      if (typeof this.config.initialDate === "function") {
        this.date = new Date(this.config.initialDate());
      } else {
        this.date = /* @__PURE__ */ new Date();
      }
      await this.setDefaultValue();
      this.isInit = false;
    },
    async setDefaultValue() {
      if (this.defaultValue && !this.value) {
        const defaults = await this.defaultValue(this.fdata, this.cdata);
        if (defaults) {
          this.isInit = false;
          this.date = new Date(defaults);
        }
      }
    },
    add(unit) {
      this.date = HisDate.add(this.fmt(this.date), unit, 1);
    },
    subtract(unit) {
      this.date = HisDate.subtract(this.fmt(this.date), unit, 1);
    },
    today() {
      this.date = new Date(Service.getSessionDate());
    },
    fmt(d) {
      return HisDate.toStandardHisFormat(d);
    }
  },
  computed: {
    getYear() {
      return HisDate.getYear(this.fmt(this.date));
    },
    getMonth() {
      return HisDate.getMonth(this.fmt(this.date));
    },
    getDay() {
      return HisDate.getDay(this.fmt(this.date));
    }
  },
  watch: {
    date(newDate) {
      if (!this.isInit) {
        this.value = HisDate.toStandardHisFormat(newDate);
      }
    },
    value(value) {
      if (!value) {
        this.$emit("onValue", null);
        return;
      }
      this.$emit("onValue", { label: value, value: this.value });
    },
    clear() {
      this.value = "";
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_input = resolveComponent("ion-input");
  const _component_view_port = resolveComponent("view-port");
  const _component_picker_selector = resolveComponent("picker-selector");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_grid = resolveComponent("ion-grid");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_view_port, { showFull: false }, {
      default: withCtx(() => [
        createVNode(_component_ion_input, {
          class: "input_display",
          readonly: true,
          value: _ctx.value
        }, null, 8, ["value"]),
        renderSlot(_ctx.$slots, "default", { date: _ctx.value })
      ]),
      _: 3
    }),
    createVNode(_component_ion_grid, { class: "his-floating-keyboard" }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, { "sm-size": "12" }, {
              default: withCtx(() => [
                createVNode(_component_picker_selector, {
                  value: _ctx.getYear,
                  onOnIncrement: _cache[0] || (_cache[0] = ($event) => _ctx.add("year")),
                  onOnDecrement: _cache[1] || (_cache[1] = ($event) => _ctx.subtract("year"))
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, { "sm-size": "12" }, {
              default: withCtx(() => [
                createVNode(_component_picker_selector, {
                  value: _ctx.getMonth,
                  onOnIncrement: _cache[2] || (_cache[2] = ($event) => _ctx.add("month")),
                  onOnDecrement: _cache[3] || (_cache[3] = ($event) => _ctx.subtract("month"))
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, { "sm-size": "12" }, {
              default: withCtx(() => [
                createVNode(_component_picker_selector, {
                  value: _ctx.getDay,
                  onOnIncrement: _cache[4] || (_cache[4] = ($event) => _ctx.add("day")),
                  onOnDecrement: _cache[5] || (_cache[5] = ($event) => _ctx.subtract("day"))
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, { class: "ion-text-center" }, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  color: "success",
                  style: { "width": "100%", "height": "6vh" },
                  onClick: _ctx.today
                }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createBaseVNode("b", null, "TODAY", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  disabled: !_ctx.config.allowUnknown,
                  color: "warning",
                  style: { "width": "100%", "height": "6vh" },
                  onClick: _cache[6] || (_cache[6] = ($event) => _ctx.value = "Unknown")
                }, {
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [
                    createBaseVNode("b", null, "Unknown", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
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
const HisDateInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { HisDateInput as default };
