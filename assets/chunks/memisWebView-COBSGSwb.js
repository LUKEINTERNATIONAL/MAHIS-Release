import { s as defineComponent, aL as useRouter, fj as onIonViewWillEnter, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, a_ as medkitOutline, aG as IonContent, z as createElementBlock, M as IonSpinner, C as createBaseVNode, L as IonIcon, eK as lockClosedOutline, N as IonButton, a5 as createTextVNode, H as createCommentVNode, bu as IonPage, f as ref } from './vendor-DrpjccQs.js';
import { N as NavigationMenu } from './NavigationMenu-DOAvT7rj.js';
import { E as EIRreportsStore } from './EIRreportsStore-BUJuzJ34.js';
import { _ as _export_sfc } from '../index-DALWhtZ-.js';

const _hoisted_1 = {
  key: 0,
  class: "center-content"
};
const _hoisted_2 = {
  key: 1,
  class: "center-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "memisWebView",
  setup(__props) {
    const router = useRouter();
    const isValidating = ref(true);
    const hasPermission = ref(false);
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
        if (authData.memis_auth) {
          console.log("User authenticated successfully:", authData.username);
          hasPermission.value = true;
          handlePlatformNavigation(authData);
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
      const targetPath = "/memis";
      const query = authData.memis_auth;
      const isAlreadyAtTarget = router.currentRoute.value.path === targetPath;
      const hasAuthInUrl = window.location.search.includes(query);
      if (isAlreadyAtTarget && hasAuthInUrl) {
        console.log("Bridge: Already at MFE root with auth, skipping redirect to prevent loop.");
        return;
      }
      console.log("Bridge: Routing to Federated Module safely");
      router.push(`${targetPath}?${query}`);
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

const memisWebView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82e43782"]]);

export { memisWebView as default };
