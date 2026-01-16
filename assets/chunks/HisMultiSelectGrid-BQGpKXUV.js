import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-uBjWBigg.js';
import { V as ViewPort } from './ReportMixin.vue_vue_type_script_lang-CLsnRw7O.js';
import { q as defineComponent, ae as IonRow, ay as IonCol, ax as IonGrid, ah as IonRadio, ag as IonRadioGroup, an as IonItem, aB as IonTitle, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, x as createElementBlock, H as Fragment, Q as renderList, G as createCommentVNode, a4 as createTextVNode, C as toDisplayString } from './vendor-DUNDjU_C.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { _ as _export_sfc } from '../index-77Br-hAb.js';

const _sfc_main = defineComponent({
  name: "HisGridOptionSelect",
  mixins: [_sfc_main$1],
  components: {
    IonTitle,
    IonItem,
    IonRadioGroup,
    IonRadio,
    IonGrid,
    IonCol,
    IonRow,
    ViewPort
  },
  data: () => ({
    listData: []
  }),
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      this.listData = await this.options(this.fdata);
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
  watch: {
    listData: {
      handler(data) {
        this.$emit(
          "onValue",
          lodashExports.isEmpty(data) ? null : data.filter((i) => typeof i.other.visible === "boolean" ? i.other.visible : true)
        );
      },
      deep: true
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "his-card"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_radio = resolveComponent("ion-radio");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_radio_group = resolveComponent("ion-radio-group");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [
      createVNode(_component_ion_grid, { class: "view-port-content" }, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (group, groupIndex) => {
                return openBlock(), createBlock(_component_ion_col, {
                  size: "6",
                  key: groupIndex
                }, {
                  default: withCtx(() => [
                    (typeof group?.other?.visible === "boolean" ? group?.other?.visible : true) ? (openBlock(), createElementBlock("div", _hoisted_1, [
                      createVNode(_component_ion_title, { class: "his-md-text" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(group.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_radio_group, {
                            modelValue: group.value,
                            "onUpdate:modelValue": ($event) => group.value = $event
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(group?.other?.options || [], (option, optionIndex) => {
                                return openBlock(), createBlock(_component_ion_item, {
                                  class: "his-md-text",
                                  key: optionIndex
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_radio, {
                                      slot: "start",
                                      value: option.value,
                                      onClick: ($event) => typeof group?.other?.onClick === "function" ? group.other.onClick(option, _ctx.listData) : null
                                    }, null, 8, ["value", "onClick"]),
                                    createVNode(_component_ion_label, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(option.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ])) : createCommentVNode("", true)
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
  });
}
const HisMultiSelectGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-22b540f1"]]);

export { HisMultiSelectGrid as default };
