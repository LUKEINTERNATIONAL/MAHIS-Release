import { s as defineComponent, bt as IonPage, aF as IonContent, aK as useRouter, bX as chevronBackOutline, f as ref, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode } from './vendor-BIA1Qh8a.js';
import { aY as AppEncounterService, F as DynamicButton, T as Toolbar, u as useDemographicsStore, t as toastWarning, K as ObservationService, S as Service, G as toastSuccess, bM as resetPatientData, _ as _export_sfc } from '../index-Di5vEYU2.js';
import { D as DemographicBar } from './DemographicBar-M9SCPyOp.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-D9M6-VVA.js';
import { L as LabourQuickCheck$1 } from './LabourQuickCheck-Cls-72f5.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-BcogwO64.js';

class LabourAssessmentService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

class QuickCheckInstance {
  async push(patientID, providerID, quickCheckData) {
    const quickCheckService = new LabourAssessmentService(patientID, providerID);
    await quickCheckService.createEncounter();
    await quickCheckService.saveObservationList(quickCheckData);
  }
}

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
    const demographicsStore = useDemographicsStore();
    const navigateToHome = () => {
      router.push({ name: "LabourHome" });
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
      const obsList = await ObservationService.buildObsValues(formValues);
      if (!obsList.length) {
        toastWarning("Could not find concepts");
        return;
      }
      const userID = Service.getUserID();
      const quickCheckInstance = new QuickCheckInstance();
      await quickCheckInstance.push(demographicsStore.patient.patientID, userID, obsList);
      toastSuccess("Quick check data saved successfully");
      await resetPatientData();
      const reasons = Array.isArray(formValues.reason) ? formValues.reason : [];
      const shouldRouteToDelivery = reasons.some(
        (selection) => ["Delivered on the way to the facility", "Delivered", "Home Delivery"].includes(selection)
      );
      if (shouldRouteToDelivery) {
        router.push("/labour/delivery-details");
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
const LabourQuickCheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-29ce4f1c"]]);

export { LabourQuickCheck as default };
