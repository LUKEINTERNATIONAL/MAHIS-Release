import { s as defineComponent, fk as onIonViewWillEnter, fl as onIonViewDidEnter, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aH as IonContent, bw as IonPage, f as ref } from './vendor-BcieWP-_.js';
import { T as Toolbar, _ as _export_sfc } from '../index-BQBxfUAX.js';
import { L as LandingPage } from './LandingPage-C1jSq2of.js';

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
