import { q as defineComponent, M as IonButton, aB as IonTitle, bs as IonPage, cu as IonMenuButton, an as IonItem, I as IonHeader, aD as IonContent, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, A as createBaseVNode, R as withDirectives, aw as vModelText } from './vendor-xvx_X2hj.js';
import { F as DynamicButton, n as icons, _ as _export_sfc } from '../index-D5ZuGc-h.js';

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    DynamicButton,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonButton
  },
  data() {
    return {
      iconsContent: icons,
      platform: "",
      barcode: ""
    };
  },
  props: {
    status: {
      type: Boolean,
      default: true
    },
    listData: {
      default: []
    },
    classNames: {
      default: "solid_bottom_border white"
    }
  },
  mounted() {
  },
  methods: {
    nav(url) {
      this.$router.push(url);
    }
  }
});

const _hoisted_1 = { class: "header position_content" };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_3 = { class: "flex flex-col gap-2 mx-4 my-2" };
const _hoisted_4 = { class: "flex flex-col gap-2 items-center justify-center mt-6 w-full" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_ion_header, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", {
              style: { "display": "flex", "align-items": "center" },
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.nav("/home"))
            }, [
              createVNode(_component_ion_icon, {
                slot: "separator",
                size: "large",
                icon: _ctx.iconsContent.arrowLeft
              }, null, 8, ["icon"]),
              _cache[2] || (_cache[2] = createBaseVNode("span", { style: { "padding-left": "10px" } }, "Go back", -1))
            ]),
            _cache[4] || (_cache[4] = createBaseVNode("div", null, null, -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_ion_icon, {
                slot: "separator",
                size: "large",
                icon: _ctx.iconsContent.help
              }, null, 8, ["icon"]),
              _cache[3] || (_cache[3] = createBaseVNode("span", { style: { "padding-left": "10px" } }, " Need any help?", -1))
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_ion_content, { style: { "--background": "#fff" } }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "header" }, "National id scanning", -1)),
            createBaseVNode("div", _hoisted_4, [
              withDirectives(createBaseVNode("input", {
                ref: "barcodeInput",
                autocomplete: "off",
                type: "text",
                class: "w-full ml-4 p-2 rounded-lg bg-white",
                style: { "width": "80vw", "margin-left": "8px" },
                placeholder: "Enter QR-code here",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.barcode = $event)
              }, null, 512), [
                [vModelText, _ctx.barcode]
              ])
            ])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const ScanRegistration = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9845f5c2"]]);

export { ScanRegistration as default };
