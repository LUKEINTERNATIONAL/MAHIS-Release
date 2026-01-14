import { q as defineComponent, x as createElementBlock, y as openBlock, by as createStaticVNode, B as createBaseVNode, J as Fragment, R as renderList } from './vendor-BizyHS9K.js';
import { _ as _export_sfc } from '../index-B8cwm10e.js';

const _sfc_main = defineComponent({
  name: "TableSkeletonLoader"
});

const _hoisted_1 = { class: "skeleton-wrapper" };
const _hoisted_2 = { class: "cards-grid" };
const _hoisted_3 = { class: "card-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[2] || (_cache[2] = createStaticVNode('<div class="search-bar" data-v-d6f00683><div class="search-container" data-v-d6f00683><div class="search-label skeleton-text" data-v-d6f00683></div><div class="search-chip" data-v-d6f00683></div><div class="add-button" data-v-d6f00683></div></div></div>', 1)),
    createBaseVNode("div", _hoisted_2, [
      (openBlock(), createElementBlock(Fragment, null, renderList(6, (n) => {
        return createBaseVNode("div", {
          key: `card-${n}`,
          class: "skeleton-card"
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "card-header" }, [
            createBaseVNode("div", { class: "role-text small-skeleton" }),
            createBaseVNode("div", { class: "name-text large-skeleton" })
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(4, (field) => {
              return createBaseVNode("div", {
                class: "info-row",
                key: `field-${field}`
              }, [..._cache[0] || (_cache[0] = [
                createBaseVNode("div", { class: "label-skeleton" }, null, -1),
                createBaseVNode("div", { class: "value-skeleton" }, null, -1)
              ])]);
            }), 64))
          ])
        ]);
      }), 64))
    ])
  ]);
}
const TableSkeletonLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d6f00683"]]);

export { TableSkeletonLoader as T };
