import { q as defineComponent, ay as IonCol, af as IonRow, aA as IonToolbar, aB as IonTitle, br as IonPage, ct as IonMenuButton, I as IonHeader, H as IonContent, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, B as createBaseVNode, a5 as createTextVNode } from './vendor-BPW-J91F.js';
import { a3 as ToolbarSearch, T as Toolbar, _ as _export_sfc } from '../index-VhmzLedw.js';

const _sfc_main = defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    IonRow,
    IonCol
  }
});

const _hoisted_1 = { id: "container" };
const _hoisted_2 = { class: "centered-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_ToolbarSearch = resolveComponent("ToolbarSearch");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_router_link = resolveComponent("router-link");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[1] || (_cache[1] = createBaseVNode("strong", null, "Scan patient barcode or QR code", -1)),
            _cache[2] || (_cache[2] = createBaseVNode("p", null, [
              createTextVNode("Use searchbar below to find your patient "),
              createBaseVNode("br"),
              createTextVNode(" profile and start dispensation ")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_ToolbarSearch)
            ]),
            createVNode(_component_router_link, { to: "/NCDDispensations" }, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  class: "primary_btn",
                  style: { "padding-left": "15px" }
                }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Proceed to dispensation", -1)
                  ])]),
                  _: 1
                })
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
const Pharmacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f2400dd4"]]);

export { Pharmacy as default };
