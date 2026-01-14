import { q as defineComponent, cO as defineAsyncComponent, bE as IonModal, r as ref, w as watch, cG as __vitePreload, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, c1 as resolveDynamicComponent } from './vendor-DGIzCW4f.js';
import { _ as _export_sfc } from '../index-D_1ZD1MC.js';

const _sfc_main = defineComponent({
  components: {
    IonModal,
    ZebraModal: defineAsyncComponent(() => __vitePreload(() => import('./ZebraPrinterImage-BsiFA9VJ.js'),true              ?[]:void 0))
  },
  emits: ["modalDismissed"],
  props: {
    modalName: {
      type: String
    }
  },
  setup(props, { emit }) {
    const modalIsOpen = ref(false);
    const activeModal = ref("");
    function dismissModal() {
      modalIsOpen.value = false;
      emit("modalDismissed");
    }
    watch(
      props,
      ({ modalName }) => {
        if (modalName) {
          activeModal.value = modalName;
          modalIsOpen.value = true;
        } else {
          modalIsOpen.value = false;
        }
      },
      { deep: true }
    );
    return {
      dismissModal,
      modalIsOpen,
      activeModal
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, { "is-open": _ctx.modalIsOpen }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeModal), { onOnDismissModal: _ctx.dismissModal }, null, 40, ["onOnDismissModal"]))
    ]),
    _: 1
  }, 8, ["is-open"]);
}
const ModalContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ModalContainer as default };
