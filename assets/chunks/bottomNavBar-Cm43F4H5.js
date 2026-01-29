import { s as defineComponent, L as IonIcon, N as IonButton, af as IonRow, aA as IonCol, f as ref, w as watch, a2 as onMounted, a3 as onUnmounted, bm as chevronForward, bl as chevronBack, c as computed, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, B as withCtx, S as withDirectives, J as Fragment, R as renderList, D as toDisplayString, ay as vModelSelect, a5 as createTextVNode, a4 as normalizeClass } from './vendor-CZ_rDZM9.js';
import { _ as _export_sfc } from '../index-OU0RFndh.js';

const _sfc_main = defineComponent({
  name: "bottomNavBar",
  components: { IonCol, IonRow, IonButton, IonIcon },
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    }
  },
  emits: ["update:pagination"],
  setup(props, { emit }) {
    const localCurrentPage = ref(props.currentPage);
    const localItemsPerPage = ref(props.itemsPerPage);
    const itemsPerPageOptions = [6, 10, 20, 30, 50, 100];
    const isMobileView = ref(false);
    const totalPages = computed(() => Math.max(1, Math.ceil(props.totalItems / localItemsPerPage.value)));
    const startItem = computed(() => props.totalItems === 0 ? 0 : (localCurrentPage.value - 1) * localItemsPerPage.value + 1);
    const endItem = computed(() => Math.min(localCurrentPage.value * localItemsPerPage.value, props.totalItems));
    watch(() => props.currentPage, (newValue) => {
      localCurrentPage.value = newValue;
    });
    watch(() => props.itemsPerPage, (newValue) => {
      localItemsPerPage.value = newValue;
    });
    const updatePagination = () => {
      emitUpdate();
    };
    const previousPage = () => {
      if (localCurrentPage.value > 1) {
        localCurrentPage.value--;
        emitUpdate();
      }
    };
    const nextPage = () => {
      if (localCurrentPage.value < totalPages.value) {
        localCurrentPage.value++;
        emitUpdate();
      }
    };
    const emitUpdate = () => {
      emit("update:pagination", {
        page: localCurrentPage.value,
        itemsPerPage: localItemsPerPage.value
      });
    };
    const checkMobileView = () => {
      isMobileView.value = window.innerWidth <= 768;
    };
    onMounted(() => {
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkMobileView);
    });
    return {
      localCurrentPage,
      localItemsPerPage,
      itemsPerPageOptions,
      totalPages,
      startItem,
      endItem,
      updatePagination,
      previousPage,
      nextPage,
      isMobileView,
      chevronBack,
      chevronForward
    };
  }
});

const _hoisted_1 = { class: "pagination-controls" };
const _hoisted_2 = { class: "items-per-page" };
const _hoisted_3 = ["value"];
const _hoisted_4 = { class: "pagination-info" };
const _hoisted_5 = { class: "page-nav" };
const _hoisted_6 = ["value"];
const _hoisted_7 = { class: "navigation-buttons" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pagination-container", { "mobile": _ctx.isMobileView }])
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                _cache[4] || (_cache[4] = createBaseVNode("label", { for: "itemsPerPage" }, "Items per page:", -1)),
                withDirectives(createBaseVNode("select", {
                  id: "itemsPerPage",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.localItemsPerPage = $event),
                  onChange: _cache[1] || (_cache[1] = (...args) => _ctx.updatePagination && _ctx.updatePagination(...args))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.itemsPerPageOptions, (option) => {
                    return openBlock(), createElementBlock("option", {
                      key: option,
                      value: option
                    }, toDisplayString(option), 9, _hoisted_3);
                  }), 128))
                ], 544), [
                  [vModelSelect, _ctx.localItemsPerPage]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_4, " Showing " + toDisplayString(_ctx.startItem) + " - " + toDisplayString(_ctx.endItem) + " of " + toDisplayString(_ctx.totalItems), 1),
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                _cache[5] || (_cache[5] = createBaseVNode("label", { for: "currentPage" }, "Page", -1)),
                withDirectives(createBaseVNode("select", {
                  id: "currentPage",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.localCurrentPage = $event),
                  onChange: _cache[3] || (_cache[3] = (...args) => _ctx.updatePagination && _ctx.updatePagination(...args))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.totalPages, (page) => {
                    return openBlock(), createElementBlock("option", {
                      key: page,
                      value: page
                    }, toDisplayString(page), 9, _hoisted_6);
                  }), 128))
                ], 544), [
                  [vModelSelect, _ctx.localCurrentPage]
                ]),
                createTextVNode(" of " + toDisplayString(_ctx.totalPages), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]),
    createBaseVNode("div", _hoisted_7, [
      createVNode(_component_ion_button, {
        onClick: _ctx.previousPage,
        disabled: _ctx.localCurrentPage === 1,
        class: "nav-button prev",
        fill: "solid",
        size: "default"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_icon, {
            icon: _ctx.chevronBack,
            slot: "icon-only"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["onClick", "disabled"]),
      createVNode(_component_ion_button, {
        onClick: _ctx.nextPage,
        disabled: _ctx.localCurrentPage === _ctx.totalPages,
        class: "nav-button next",
        fill: "solid",
        size: "default"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_icon, {
            icon: _ctx.chevronForward,
            slot: "icon-only"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["onClick", "disabled"])
    ])
  ], 2);
}
const BottomNavBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9a0ce21e"]]);

export { BottomNavBar as B };
