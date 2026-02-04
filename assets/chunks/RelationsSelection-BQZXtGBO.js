import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-C9dxHzvs.js';
import { V as ViewPort, T as Transformer } from './ReportMixin.vue_vue_type_script_lang-C16UvHQR.js';
import { s as defineComponent, L as IonIcon, af as IonRow, aA as IonCol, fp as resize, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, a5 as createTextVNode, D as toDisplayString, z as createElementBlock, J as Fragment, R as renderList, a4 as normalizeClass } from './vendor-CNJ0IVCn.js';
import { _ as _export_sfc } from '../index-CMNG45JS.js';

const _sfc_main = defineComponent({
  mixins: [_sfc_main$1],
  components: {
    ViewPort,
    IonCol,
    IonRow,
    IonIcon
  },
  data: () => ({
    patient: {},
    guardian: {},
    selected: "",
    listData: []
  }),
  setup() {
    return {
      resize
    };
  },
  computed: {
    relationList() {
      return Transformer.convertArrayToTurples(this.listData, 2);
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
      this.listData = await this.options(this.fdata);
    },
    onClick(relation) {
      this.selected = relation.label;
      this.$emit("onValue", relation);
    }
  }
});

const _hoisted_1 = { class: "tool-bar-medium-card" };
const _hoisted_2 = { class: "his-sm-text" };
const _hoisted_3 = { class: "his-md-text tool-bar-medium-card" };
const _hoisted_4 = { class: "his-sm-text" };
const _hoisted_5 = { class: "view-port-content" };
const _hoisted_6 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_center = resolveComponent("center");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_component_center, {
                  class: "relation-category",
                  style: { color: "#006401 " }
                }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Patient", -1)
                  ])]),
                  _: 1
                }),
                createBaseVNode("ul", _hoisted_2, [
                  createBaseVNode("li", null, [
                    _cache[1] || (_cache[1] = createTextVNode(" Name: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.patient.name), 1)
                  ]),
                  createBaseVNode("li", null, [
                    _cache[2] || (_cache[2] = createTextVNode(" Birthdate: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.patient.birth_date), 1)
                  ]),
                  createBaseVNode("li", null, [
                    _cache[3] || (_cache[3] = createTextVNode(" Home Address: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.patient.home_address), 1)
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, { size: "2" }, {
            default: withCtx(() => [
              createVNode(_component_center, { class: "relation-category fa-rotate-45" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.resize,
                    style: { fontSize: "3em" }
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_center, {
                  class: "relation-category",
                  style: { color: "#3dc2ff" }
                }, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("Guardian", -1)
                  ])]),
                  _: 1
                }),
                createBaseVNode("ul", _hoisted_4, [
                  createBaseVNode("li", null, [
                    _cache[5] || (_cache[5] = createTextVNode(" Name: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.guardian.name), 1)
                  ]),
                  createBaseVNode("li", null, [
                    _cache[6] || (_cache[6] = createTextVNode(" Birthdate: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.guardian.birth_date), 1)
                  ]),
                  createBaseVNode("li", null, [
                    _cache[7] || (_cache[7] = createTextVNode(" Home Address: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.guardian.home_address), 1)
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.relationList, (relations, rIndex) => {
          return openBlock(), createBlock(_component_ion_row, { key: rIndex }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(relations, (relation, iIndex) => {
                return openBlock(), createBlock(_component_ion_col, {
                  size: "6",
                  key: iIndex
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass(["his-md-text", `his-card clickable ${_ctx.selected === relation.label ? `active-card-color` : ""}`]),
                      onClick: ($event) => _ctx.onClick(relation)
                    }, [
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", null, [
                          _cache[8] || (_cache[8] = createTextVNode(" Relationship ", -1)),
                          createBaseVNode("b", null, toDisplayString(relation.label), 1)
                        ]),
                        createBaseVNode("li", null, [
                          _cache[9] || (_cache[9] = createTextVNode(" Desc ", -1)),
                          createBaseVNode("b", null, toDisplayString(relation.value), 1)
                        ])
                      ])
                    ], 10, _hoisted_6)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 2
          }, 1024);
        }), 128))
      ])
    ]),
    _: 1
  });
}
const RelationsSelection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b2ef8a8a"]]);

export { RelationsSelection as default };
