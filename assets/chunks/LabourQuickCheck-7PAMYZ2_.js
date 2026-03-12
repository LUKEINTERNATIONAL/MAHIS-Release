import { s as defineComponent, bv as IonPage, aG as IonContent, aL as useRouter, bZ as chevronBackOutline, f as ref, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode } from './vendor-DOib3KBh.js';
import { F as DynamicButton, T as Toolbar, u as useDemographicsStore, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, bM as resetPatientData, _ as _export_sfc } from '../index-DFb16Qpr.js';
import { D as DemographicBar } from './DemographicBar-R6EOpLPs.js';
import { B as BasicFooter } from './BasicFooter-CgqticP3.js';
import { L as LabourQuickCheck$1 } from './LabourQuickCheck-3a-4dC6g.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-CAUQaPD9.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-DZZghnPU.js';

const _sfc_main = defineComponent({
  name: "LabourQuickCheckView",
  mixins: [_sfc_main$1, _sfc_main$2],
  components: {
    IonContent,
    IonPage,
    Toolbar,
    DemographicBar,
    BasicFooter,
    DynamicButton,
    LabourQuickCheck: LabourQuickCheck$1
  },
  setup() {
    const router = useRouter();
    const quickCheckRef = ref(null);
    useDemographicsStore();
    const navigateToHome = () => {
      router.push("/labour/home");
    };
    const saveData = async () => {
      const validationErrors = quickCheckRef.value?.validateForm();
      if (validationErrors) {
        toastWarning("Please fix validation errors before submitting");
        return;
      }
      const formValues = quickCheckRef.value?.getFormValues();
      if (!formValues) {
        toastWarning("Could not find form data");
        return;
      }
      await ObservationService.buildSaveObs(formValues, EncounterTypeId.ANC_VISIT);
      toastSuccess("Quick check data saved successfully");
      await resetPatientData();
      const reasons = Array.isArray(formValues.reason) ? formValues.reason : [];
      const shouldRouteToDelivery = reasons.some(
        (selection) => ["Delivered on the way to the facility", "Delivered", "Home Delivery"].includes(selection)
      );
      if (shouldRouteToDelivery) {
        router.push("/labour/home");
        return;
      }
      navigateToHome();
    };
    return {
      chevronBackOutline,
      quickCheckRef,
      navigateToHome,
      saveData
    };
  }
});

const _hoisted_1 = { class: "quick-check-container" };
const _hoisted_2 = { class: "back-profile" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DemographicBar = resolveComponent("DemographicBar");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_LabourQuickCheck = resolveComponent("LabourQuickCheck", true);
  const _component_ion_content = resolveComponent("ion-content");
  const _component_BasicFooter = resolveComponent("BasicFooter");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_DemographicBar),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_DynamicButton, {
                name: "Back to Labour Home",
                iconSlot: "start",
                fill: "clear",
                icon: _ctx.chevronBackOutline,
                "font-weight": "600",
                onClick: _ctx.navigateToHome
              }, null, 8, ["icon", "onClick"])
            ]),
            createVNode(_component_LabourQuickCheck, { ref: "quickCheckRef" }, null, 512)
          ])
        ]),
        _: 1
      }),
      createVNode(_component_BasicFooter, {
        onFinishBtn: _cache[0] || (_cache[0] = ($event) => _ctx.saveData())
      })
    ]),
    _: 1
  });
}
const LabourQuickCheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f66565cb"]]);

export { LabourQuickCheck as default };
