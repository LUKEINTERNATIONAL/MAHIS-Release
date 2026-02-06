import { Q as QWERTY, V as ViewPort } from './ReportMixin.vue_vue_type_script_lang-4gH3q9KF.js';
import { H as HisKeyboard, k as kbHandler } from './KbHandler-DcJcokKX.js';
import BaseInput from './BaseTextInput-BRW8L5pX.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-CBz2wTRy.js';
import { s as defineComponent, fo as IonInfiniteScrollContent, fp as IonInfiniteScroll, a7 as IonLabel, aq as IonItem, ap as IonList, aG as IonContent, bO as IonChip, by as IonText, ae as IonCheckbox, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, O as createBlock, H as createCommentVNode, J as Fragment, R as renderList, a5 as createTextVNode, D as toDisplayString, C as createBaseVNode, a4 as normalizeClass } from './vendor-6OQ3r7Vr.js';
import { cR as uniqueBy, _ as _export_sfc } from '../index-jHLvXTOz.js';

const _sfc_main = defineComponent({
  name: "HisInfiniteScrollMultipleSelect",
  mixins: [_sfc_main$1],
  components: {
    IonCheckbox,
    IonText,
    IonChip,
    ViewPort,
    HisTextInput: BaseInput,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    HisKeyboard,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  },
  data: () => ({
    showKeyboard: false,
    keyboard: QWERTY,
    listData: [],
    checkedItems: [],
    disableScroll: false,
    filter: "",
    selected: "",
    page: 1,
    limit: 10
  }),
  watch: {
    clear() {
      this.checkedItems = [], this.filter = "";
      this.selected = "";
    },
    checkedItems: {
      handler(newValue) {
        this.listData.forEach((entry) => {
          if (newValue.find((item) => item.value === entry.value)) {
            entry.isChecked = true;
          } else {
            entry.isChecked = false;
          }
        });
        this.$emit("onValue", newValue);
      },
      deep: true,
      immediate: true
    },
    filter: {
      async handler() {
        this.page = 1;
        this.disableScroll = false;
        const data = await this.getListData();
        [...this.checkedItems].forEach((item) => {
          const index = data.findIndex((entry) => entry.value === item.value);
          if (index === -1) {
            data.push(item);
          } else {
            data[index].isChecked = true;
          }
        });
        this.listData = data;
      }
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      this.listData = await this.getListData();
    },
    async getListData() {
      return await this.options(this.fdata, this.filter, this.page, this.limit);
    },
    async keypress(value) {
      if (!this.filter) this.selected = "";
      this.filter = kbHandler(value, this.selected);
      this.selected = this.filter;
    },
    async onKBValue(value) {
      if (!this.listData || this.selected === value) return;
      this.filter = value;
      this.selected = this.filter;
    },
    async pushData(event) {
      this.page++;
      const data = await this.getListData();
      if (data.length > 0) {
        this.listData = uniqueBy([
          ...this.listData,
          ...data.filter((entry) => !this.listData.find((item) => item.value === entry.value))
        ], "label");
      } else {
        this.disableScroll = true;
      }
      event.target.complete();
    },
    onSelect(entry) {
      this.$nextTick(async () => {
        if (entry.isChecked) {
          if (this.checkedItems.findIndex((item) => item.value === entry.value) === -1) {
            this.checkedItems.push(entry);
          }
        } else {
          this.unCheck(entry);
        }
      });
    },
    unCheck(entry) {
      this.checkedItems = this.checkedItems.filter((item) => item.value !== entry.value);
    }
  },
  created() {
    this.showKeyboard = this.config?.showKeyboard ?? false;
    this.keyboard = this.config?.keyboard ?? QWERTY;
    this.page = this.config?.page ?? 1;
    this.limit = this.config?.limit ?? 10;
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_his_text_input = resolveComponent("his-text-input");
  const _component_ion_chip = resolveComponent("ion-chip");
  const _component_ion_text = resolveComponent("ion-text");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_checkbox = resolveComponent("ion-checkbox");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_infinite_scroll_content = resolveComponent("ion-infinite-scroll-content");
  const _component_ion_infinite_scroll = resolveComponent("ion-infinite-scroll");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_view_port = resolveComponent("view-port");
  const _component_his_keyboard = resolveComponent("his-keyboard");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_view_port, {
      showFull: !_ctx.showKeyboard
    }, {
      default: withCtx(() => [
        _ctx.showKeyboard ? (openBlock(), createBlock(_component_his_text_input, {
          key: 0,
          value: _ctx.selected,
          onOnValue: _ctx.onKBValue
        }, null, 8, ["value", "onOnValue"])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.checkedItems, (item, index) => {
          return openBlock(), createBlock(_component_ion_chip, {
            color: "danger",
            key: index,
            onClick: ($event) => _ctx.unCheck(item)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]);
        }), 128)),
        createVNode(_component_ion_content, {
          style: { "width": "100%" },
          class: "ion-padding-bottom"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(["ion-content-scroll-host", { "ion-margin-bottom ion-padding-bottom": _ctx.disableScroll }])
            }, [
              createVNode(_component_ion_list, {
                class: normalizeClass(["view-port-content", { "ion-margin-bottom": _ctx.disableScroll }])
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (entry, index) => {
                    return openBlock(), createBlock(_component_ion_item, {
                      key: index,
                      color: entry.isChecked ? "lightblue" : "",
                      lines: entry.isChecked ? "none" : ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_label, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_text, { class: "his-md-text" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(entry.label), 1)
                              ]),
                              _: 2
                            }, 1024),
                            entry.description && entry.isChecked ? (openBlock(), createBlock(_component_ion_text, {
                              key: 0,
                              color: entry.description?.color
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("p", null, [
                                  createBaseVNode("i", null, toDisplayString(entry.description.text), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["color"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_ion_checkbox, {
                          slot: "start",
                          modelValue: entry.isChecked,
                          "onUpdate:modelValue": ($event) => entry.isChecked = $event,
                          onIonChange: ($event) => _ctx.onSelect(entry),
                          disabled: entry.disabled
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onIonChange", "disabled"])
                      ]),
                      _: 2
                    }, 1032, ["color", "lines"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_ion_infinite_scroll, {
                onIonInfinite: _cache[0] || (_cache[0] = ($event) => _ctx.pushData($event)),
                threshold: "100px",
                disabled: _ctx.disableScroll
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_infinite_scroll_content, {
                    "loading-spinner": "crescent",
                    "loading-text": "Loading more data..."
                  })
                ]),
                _: 1
              }, 8, ["disabled"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["showFull"]),
    _ctx.showKeyboard ? (openBlock(), createBlock(_component_his_keyboard, {
      key: 0,
      kbConfig: _ctx.keyboard,
      onKeyPress: _ctx.keypress
    }, null, 8, ["kbConfig", "onKeyPress"])) : createCommentVNode("", true)
  ], 64);
}
const HisInfiniteScrollMultipleSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { HisInfiniteScrollMultipleSelect as default };
