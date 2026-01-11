import { q as defineComponent, x as createElementBlock, y as openBlock, B as createBaseVNode, aF as useRouter, r as ref, fc as onIonViewWillEnter, O as createBlock, A as withCtx, z as createVNode, E as unref, aU as medkitOutline, H as IonContent, G as createCommentVNode, M as IonSpinner, bq as IonPage } from './vendor-Cy_N32Zh.js';
import { N as NavigationMenu } from './NavigationMenu-Dw6SEEj4.js';
import { _ as _export_sfc } from '../index-B2p2mVqz.js';
import { E as EIRreportsStore } from './EIRreportsStore-V8z_NT7o.js';

const _hoisted_1$1 = { class: "memis-dashboard" };
const _hoisted_2 = {
  key: 0,
  class: "no-url-message"
};
const _hoisted_3 = ["src", "title"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "memisiFreame",
  props: {
    url: { default: "" },
    title: { default: "MEMIS" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        !__props.url ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("p", null, "No URL provided", -1)
        ])])) : (openBlock(), createElementBlock("iframe", {
          key: 1,
          src: __props.url,
          title: __props.title || "MEMIS",
          class: "report-iframe",
          frameborder: "0",
          allowfullscreen: ""
        }, null, 8, _hoisted_3))
      ]);
    };
  }
});

const memisiFreame = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-016e6fb4"]]);

const _hoisted_1 = {
  key: 1,
  style: { "display": "flex", "justify-content": "center", "align-items": "center", "height": "100%" }
};
const baseReportUrl = "http://157.245.109.228:3002";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "memisWebView",
  setup(__props) {
    const router = useRouter();
    const isAndroid = ref(true);
    onIonViewWillEnter(() => {
      initNavData();
      handlePlatformNavigation();
    });
    const handlePlatformNavigation = () => {
      if (isAndroid.value) {
        console.log("Capacitor Android Detected: Routing to Federated Module");
        localStorage.getItem("username");
        const authDataString = localStorage.getItem("memisAuthData");
        if (authDataString) {
          const authData = JSON.parse(authDataString);
          console.log(authData.username);
          console.log(authData.memis_auth);
          const memisScheme = `memis?${authData.memis_auth}`;
          router.push(memisScheme);
        }
      }
    };
    function initNavData() {
      const store = EIRreportsStore();
      store.setNavigationPayload("MEMIS", true, false, "/", "/home", "memis ...");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(NavigationMenu, { "title-icon": unref(medkitOutline) }, null, 8, ["title-icon"]),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              !isAndroid.value && baseReportUrl ? (openBlock(), createBlock(memisiFreame, {
                key: 0,
                url: baseReportUrl
              })) : createCommentVNode("", true),
              isAndroid.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(unref(IonSpinner), { name: "crescent" }),
                _cache[0] || (_cache[0] = createBaseVNode("p", { style: { "margin-left": "10px" } }, "Loading Inventory Module...", -1))
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
