import { q as defineComponent, an as IonItem, am as IonList, ay as IonCol, dt as IonImg, ae as IonRow, e1 as IonAvatar, a6 as IonLabel, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, A as createBaseVNode, C as toDisplayString, x as createElementBlock, H as Fragment, Q as renderList, a4 as createTextVNode } from './vendor-DGIzCW4f.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-0j-sNVEK.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { _ as _export_sfc } from '../index-D_1ZD1MC.js';

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
  computed: {
    patientAttributes() {
      if (!lodashExports.isEmpty(this.selectedResult) && lodashExports.isArray(this.selectedResult?.other?.options)) {
        return this.selectedResult?.other?.options.filter(
          (i) => typeof i?.other?.show === "function" ? i?.other?.show() : true
        );
      }
      return [];
    },
    foundRecordsTitle() {
      return this.config?.foundRecordsTitle || "Found People";
    },
    detailsTitle() {
      return this.config?.detailsTitle || "Details:";
    }
  },
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      this.listData = await this.options(this.fdata, this);
      this.onSelect(this.listData.length > 0 ? this.listData[0] : {});
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
            createBaseVNode("h2", null, toDisplayString(_ctx.foundRecordsTitle) + " (" + toDisplayString(_ctx.listData.length) + "): ", 1),
            createVNode(_component_ion_list, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (result, index) => {
                  return openBlock(), createBlock(_component_ion_item, {
                    class: "his-sm-text",
                    button: "",
                    key: index,
                    detail: true,
                    color: result.value === _ctx.selectedResult.value ? "lightblue" : "",
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
                          createTextVNode(toDisplayString(result.label), 1)
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
            createBaseVNode("h3", null, toDisplayString(_ctx.detailsTitle), 1),
            createVNode(_component_ion_list, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.patientAttributes, (opt, index) => {
                  return openBlock(), createBlock(_component_ion_item, {
                    class: "his-md-text",
                    key: index,
                    inset: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(opt.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_label, { slot: "end" }, {
                        default: withCtx(() => [
                          createBaseVNode("b", null, toDisplayString(opt.value), 1)
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
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const PersonSearchView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-14247f0c"]]);

export { PersonSearchView as default };
