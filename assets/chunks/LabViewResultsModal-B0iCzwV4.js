import { r as StandardModal, _ as _export_sfc } from '../index-CFJWTLPI.js';
import { s as defineComponent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, z as createElementBlock, J as Fragment, R as renderList, a5 as createTextVNode, D as toDisplayString, c as computed } from './vendor-CCA5uLDN.js';

const _hoisted_1 = { class: "modal_wrapper" };
const _hoisted_2 = { class: "center text_12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabViewResultsModal",
  props: {
    content: { default: {} },
    title: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const labViewModalTitle = computed(() => `Lab results for ${props.content?.name || props.title || "test"}`);
    const resultIndicators = computed(() => Array.isArray(props.content?.result) ? props.content.result : []);
    return (_ctx, _cache) => {
      const _component_ion_skeleton_text = resolveComponent("ion-skeleton-text");
      const _component_ion_col = resolveComponent("ion-col");
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_content = resolveComponent("ion-content");
      return openBlock(), createBlock(StandardModal, { title: labViewModalTitle.value }, {
        content: withCtx(() => [
          createVNode(_component_ion_content, { class: "ion-padding" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_ion_row, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(resultIndicators.value, (item, index) => {
                        return openBlock(), createBlock(_component_ion_col, {
                          size: "4",
                          key: index
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_ion_col, { size: "8" }, {
                                  default: withCtx(() => [
                                    item.indicator?.name ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                      createTextVNode(toDisplayString(item.indicator.name), 1)
                                    ], 64)) : (openBlock(), createBlock(_component_ion_skeleton_text, {
                                      key: 1,
                                      animated: "",
                                      style: { "width": "80%" }
                                    }))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ion_col, {
                                  class: "bold",
                                  size: "0.5"
                                }, {
                                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                                    createTextVNode(":", -1)
                                  ])]),
                                  _: 1
                                }),
                                createVNode(_component_ion_col, {
                                  class: "bold",
                                  size: "2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value), 1)
                                  ]),
                                  _: 2
                                }, 1024)
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
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const LabViewResultsModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60bf4793"]]);

export { LabViewResultsModal as L };
