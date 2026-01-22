import { v as defineComponent, be as IonFooter, aF as IonContent, aC as IonToolbar, O as IonButton, aD as IonTitle, I as IonHeader, bu as IonPage, bG as IonModal, f as ref, L as modalController, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, a6 as createTextVNode, D as createBaseVNode } from './vendor-Cbv9TWZo.js';
import { _ as _export_sfc } from '../index-DIdCIGDg.js';

const _sfc_main = defineComponent({
  components: {
    IonModal,
    IonPage,
    IonHeader,
    IonTitle,
    IonButton,
    IonToolbar,
    IonContent,
    IonFooter
  },
  setup() {
    const showFullscreenNotice = ref(!document.fullscreenElement);
    document.addEventListener("fullscreenchange", () => {
      showFullscreenNotice.value = !document.fullscreenElement;
    });
    function closeModal() {
      modalController.dismiss();
    }
    function enterFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen({ navigationUI: "hide" });
      }
      showFullscreenNotice.value = false;
    }
    return {
      closeModal,
      enterFullscreen,
      showFullscreenNotice
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_page = resolveComponent("ion-page");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.showFullscreenNotice,
    cssClass: "void-modal"
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_page, null, {
        default: withCtx(() => [
          createVNode(_component_ion_header, null, {
            default: withCtx(() => [
              createVNode(_component_ion_toolbar, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_title, { class: "ion-text-center" }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode(" Confirmation ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_content, { class: "ion-padding ion-text-center" }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode("h1", { class: "vertically-align" }, "Do you want to enter fullscreen mode?", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_ion_footer, null, {
            default: withCtx(() => [
              createVNode(_component_ion_toolbar, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_button, {
                    slot: "start",
                    onClick: _ctx.closeModal,
                    size: "large",
                    color: "danger"
                  }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode(" No ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_ion_button, {
                    slot: "end",
                    onClick: _ctx.enterFullscreen,
                    size: "large",
                    color: "success"
                  }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode(" Yes ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open"]);
}
const FullScreenModifier = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9ee52bd6"]]);

export { FullScreenModifier as default };
