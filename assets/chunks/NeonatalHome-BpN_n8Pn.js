import { s as defineComponent, fm as onIonViewWillEnter, fn as onIonViewDidEnter, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aI as IonContent, bx as IonPage, f as ref } from './vendor-8vOj_QAN.js';
import { T as Toolbar, _ as _export_sfc } from '../index-Bn2sysQf.js';
import { L as LandingPage } from './LandingPage-1ohWjbi6.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalHome",
  setup(__props) {
    const landingPageRef = ref(null);
    const triggerReload = () => {
      if (landingPageRef.value?.reloadRecentNeonates) {
        landingPageRef.value.reloadRecentNeonates();
      }
    };
    onIonViewWillEnter(() => {
      triggerReload();
    });
    onIonViewDidEnter(() => {
      triggerReload();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(LandingPage, {
                ref_key: "landingPageRef",
                ref: landingPageRef
              }, null, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const NeonatalHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a689dba"]]);

export { NeonatalHome as default };
