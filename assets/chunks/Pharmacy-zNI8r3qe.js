import { s as defineComponent, aA as IonCol, af as IonRow, aD as IonToolbar, aE as IonTitle, bu as IonPage, cu as IonMenuButton, I as IonHeader, aG as IonContent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, a5 as createTextVNode } from './vendor-DrpjccQs.js';
import { a3 as ToolbarSearch, T as Toolbar, _ as _export_sfc } from '../index-DALWhtZ-.js';

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
              createTextVNode(" Use searchbar below to find your patient "),
              createBaseVNode("br"),
              createTextVNode(" profile and start dispensation ")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_ToolbarSearch)
            ]),
            createVNode(_component_router_link, { to: "/ncd/dispensations" }, {
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
const Pharmacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ffdc24fd"]]);

export { Pharmacy as default };
