import { v as defineComponent, bG as IonModal, w as watch, cT as defineAsyncComponent, cJ as __vitePreload, f as ref, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, c3 as resolveDynamicComponent } from './vendor-D3hawxEQ.js';
import { _ as _export_sfc } from '../index-Bbe_kZm7.js';

const _sfc_main = defineComponent({
  components: {
    IonModal,
    ZebraModal: defineAsyncComponent(() => __vitePreload(() => import('./ZebraPrinterImage-Nzcz_UJF.js'),true              ?[]:void 0))
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
