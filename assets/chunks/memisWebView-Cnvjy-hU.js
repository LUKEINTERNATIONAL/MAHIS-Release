import { q as defineComponent, x as createElementBlock, y as openBlock, B as createBaseVNode, aH as useRouter, r as ref, fc as onIonViewWillEnter, O as createBlock, A as withCtx, z as createVNode, E as unref, aW as medkitOutline, H as IonContent, G as createCommentVNode, M as IonSpinner, L as IonIcon, eH as lockClosedOutline, N as IonButton, a5 as createTextVNode, J as Fragment, br as IonPage } from './vendor-BPW-J91F.js';
import { N as NavigationMenu } from './NavigationMenu-BwXFMQAl.js';
import { _ as _export_sfc } from '../index-VhmzLedw.js';
import { E as EIRreportsStore } from './EIRreportsStore-PmhL0zMd.js';

const _hoisted_1$1 = { class: "memis-dashboard" };
const _hoisted_2$1 = {
  key: 0,
  class: "no-url-message"
};
const _hoisted_3$1 = ["src", "title"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "memisiFreame",
  props: {
    url: { default: "" },
    title: { default: "MEMIS" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        !__props.url ? (openBlock(), createElementBlock("div", _hoisted_2$1, [..._cache[0] || (_cache[0] = [
          createBaseVNode("p", null, "No URL provided", -1)
        ])])) : (openBlock(), createElementBlock("iframe", {
          key: 1,
          src: __props.url,
          title: __props.title || "MEMIS",
          class: "report-iframe",
          frameborder: "0",
          allowfullscreen: ""
        }, null, 8, _hoisted_3$1))
      ]);
    };
  }
});

const memisiFreame = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-016e6fb4"]]);

const _hoisted_1 = {
  key: 0,
  class: "center-content"
};
const _hoisted_2 = {
  key: 1,
  class: "center-content"
};
const _hoisted_3 = {
  key: 1,
  class: "center-content"
};
const baseReportUrl = "http://157.245.109.228:3002";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "memisWebView",
  setup(__props) {
    const router = useRouter();
    const isValidating = ref(true);
    const hasPermission = ref(false);
    const isAndroid = ref(true);
    onIonViewWillEnter(() => {
      validateUserAccess();
      initNavData();
    });
    const validateUserAccess = async () => {
      isValidating.value = true;
      hasPermission.value = false;
      try {
        const username = localStorage.getItem("username");
        const authDataString = localStorage.getItem("memisAuthData");
        if (!username || !authDataString) {
          console.log("Authentication failed: Missing credentials");
          hasPermission.value = false;
          return;
        }
        const authData = JSON.parse(authDataString);
        if (username === authData.username && authData.memis_auth) {
          console.log("User authenticated successfully:", authData.username);
          hasPermission.value = true;
          if (isAndroid.value) {
            handlePlatformNavigation(authData);
          }
        } else {
          console.log("Authentication failed: Username mismatch or missing token");
          hasPermission.value = false;
        }
      } catch (error) {
        console.error("Authentication error:", error);
        hasPermission.value = false;
      } finally {
        setTimeout(() => {
          isValidating.value = false;
        }, 500);
      }
    };
    const handlePlatformNavigation = (authData) => {
      console.log("Capacitor Android Detected: Routing to Federated Module");
      const memisScheme = `memis?${authData.memis_auth}`;
      router.push(memisScheme);
    };
    function initNavData() {
      const store = EIRreportsStore();
      store.setNavigationPayload("MEMIS", true, false, "/", "/home", "");
    }
    const goBack = () => {
      router.back();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(NavigationMenu, { "title-icon": unref(medkitOutline) }, null, 8, ["title-icon"]),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              isValidating.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(unref(IonSpinner), { name: "crescent" }),
                _cache[0] || (_cache[0] = createBaseVNode("p", { style: { "margin-left": "10px" } }, "Validating access...", -1))
              ])) : !hasPermission.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                createVNode(unref(IonIcon), {
                  icon: unref(lockClosedOutline),
                  style: { "font-size": "64px", "color": "#eb445a", "margin-bottom": "16px" }
                }, null, 8, ["icon"]),
                _cache[2] || (_cache[2] = createBaseVNode("h2", null, "Access Denied", -1)),
                _cache[3] || (_cache[3] = createBaseVNode("p", { style: { "text-align": "center", "max-width": "400px", "color": "#666" } }, " You don't have permission to access the MEMIS Module. Please contact your administrator. ", -1)),
                createVNode(unref(IonButton), {
                  onClick: goBack,
                  style: { "margin-top": "20px" }
                }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode(" Go Back ", -1)
                  ])]),
                  _: 1
                })
              ])) : hasPermission.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                !isAndroid.value && baseReportUrl ? (openBlock(), createBlock(memisiFreame, {
                  key: 0,
                  url: baseReportUrl
                })) : createCommentVNode("", true),
                isAndroid.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createVNode(unref(IonSpinner), { name: "crescent" }),
                  _cache[4] || (_cache[4] = createBaseVNode("p", { style: { "margin-left": "10px" } }, "Loading MEMIS Module...", -1))
                ])) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const memisWebView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5ce77c6"]]);

export { memisWebView as default };
