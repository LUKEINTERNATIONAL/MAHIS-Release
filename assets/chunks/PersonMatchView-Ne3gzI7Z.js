import { s as defineComponent, aq as IonItem, ap as IonList, aA as IonCol, dv as IonImg, af as IonRow, e2 as IonAvatar, a7 as IonLabel, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, D as toDisplayString, z as createElementBlock, J as Fragment, R as renderList, a5 as createTextVNode } from './vendor-DlXvc2CI.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-BZvOZhvU.js';
import { _ as _export_sfc } from '../index-Di9oihr7.js';

const _sfc_main = defineComponent({
  mixins: [_sfc_main$1],
  components: {
    IonLabel,
    IonAvatar,
    IonRow,
    IonImg,
    IonCol,
    IonList,
    IonItem
  },
  data: () => ({
    listData: [],
    selectedResult: {}
  }),
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      this.listData = await this.options(this.fdata, this);
      this.onSelect(this.listData[0] || {});
    },
    async onSelect(item) {
      if (!item) {
        return;
      }
      if (this.onValue) {
        const ok = await this.onValue(item, this);
        if (!ok) {
          return;
        }
      }
      this.selectedResult = item;
      this.$emit("onValue", item);
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  }
});

const _hoisted_1 = { class: "large-card" };
const _hoisted_2 = { class: "large-card" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_img = resolveComponent("ion-img");
  const _component_ion_avatar = resolveComponent("ion-avatar");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      createVNode(_component_ion_col, { size: "5" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h3", null, " Matches found: (" + toDisplayString(_ctx.listData.length) + "): ", 1),
            createVNode(_component_ion_list, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (result, index) => {
                  return openBlock(), createBlock(_component_ion_item, {
                    button: "",
                    key: index,
                    detail: true,
                    color: result.value === _ctx.selectedResult.value ? "light" : "",
                    onClick: ($event) => _ctx.onSelect(result)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_avatar, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_img, { src: "/assets/images/avatar.svg" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(result.label) + " ", 1),
                          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
                          _cache[1] || (_cache[1] = createTextVNode(" Home District: ", -1)),
                          createBaseVNode("b", null, toDisplayString(result.other.foundPerson.home_district), 1),
                          _cache[2] || (_cache[2] = createTextVNode()),
                          _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
                          _cache[4] || (_cache[4] = createTextVNode(" Home TA: ", -1)),
                          createBaseVNode("b", null, toDisplayString(result.other.home_traditional_authority), 1),
                          _cache[5] || (_cache[5] = createTextVNode(" Score: ", -1)),
                          createBaseVNode("b", null, toDisplayString(result?.other?.score || "-"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["color", "onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_ion_col, { size: "7" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h1", null, " Match score: " + toDisplayString(_ctx.selectedResult?.other?.score || "-"), 1),
            createVNode(_component_ion_list, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectedResult?.other?.comparisons || [], (comparison, index) => {
                  return openBlock(), createBlock(_component_ion_item, {
                    key: index,
                    inset: "none"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(comparison, (item, rIndex) => {
                        return openBlock(), createBlock(_component_ion_label, {
                          color: "danger",
                          key: rIndex
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("b", null, toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const PersonMatchView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-769cbad1"]]);

export { PersonMatchView as default };
