import { q as defineComponent, r as ref, bk as V, cX as DataTable, d as computed, w as watch, a2 as onMounted, n as nextTick, aj as onBeforeUnmount, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx, B as createBaseVNode, J as Fragment, R as renderList, C as toDisplayString, E as unref, a4 as normalizeClass } from './vendor-Cy_N32Zh.js';
import { _ as _export_sfc } from '../index-CZxb0S4T.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReusableDataTable",
  props: {
    headers: {},
    data: {},
    options: { default: () => ({}) },
    actionHandlers: { default: () => ({}) },
    containerClass: { default: "ion-padding" }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const dataTableRef = ref(null);
    let handlersAttached = false;
    V.use(DataTable);
    const defaultOptions = {
      responsive: true,
      select: false,
      layout: {
        topStart: "buttons",
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      ordering: false,
      buttons: []
    };
    const computedOptions = computed(() => ({
      ...defaultOptions,
      ...props.options
    }));
    const setupEventListeners = () => {
      const table = dataTableRef.value?.dt;
      if (!table || handlersAttached) return;
      table.columns.adjust().draw();
      Object.entries(props.actionHandlers).forEach(([className, handler]) => {
        table.off("click", `.${className}`);
        table.on("click", `.${className}`, async (e) => {
          e.stopPropagation();
          e.preventDefault();
          const target = e.target;
          const button = target.closest(`.${className}`);
          if (button) {
            const dataId = button.getAttribute("data-id");
            const data = dataId ? JSON.parse(dataId) : null;
            await handler(data);
          }
        });
      });
      handlersAttached = true;
    };
    const cleanupEventListeners = () => {
      const table = dataTableRef.value?.dt;
      if (table) {
        Object.keys(props.actionHandlers).forEach((className) => {
          table.off("click", `.${className}`);
        });
      }
      handlersAttached = false;
    };
    watch(
      () => props.data,
      async () => {
        await nextTick();
        cleanupEventListeners();
        setupEventListeners();
      },
      { deep: true }
    );
    onMounted(async () => {
      await nextTick();
      setupEventListeners();
    });
    onBeforeUnmount(() => {
      cleanupEventListeners();
    });
    __expose({
      dataTableRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["table-responsive", __props.containerClass])
      }, [
        createVNode(unref(V), {
          ref_key: "dataTableRef",
          ref: dataTableRef,
          options: computedOptions.value,
          data: __props.data,
          class: "display nowrap modern-table",
          width: "100%"
        }, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, (head) => {
                  return openBlock(), createElementBlock("th", { key: head }, toDisplayString(head), 1);
                }), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["options", "data"])
      ], 2);
    };
  }
});

const ReusableDataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1968b5d1"]]);

export { ReusableDataTable as R };
