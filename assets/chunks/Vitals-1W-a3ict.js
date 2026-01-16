import { q as defineComponent, aI as useRouter, ct as useRoute, r as ref, a1 as onMounted, N as createBlock, y as openBlock, B as withCtx, x as createElementBlock, G as createCommentVNode, z as createVNode, A as createBaseVNode, E as unref, L as IonSpinner, aD as IonContent, bW as chevronBackOutline, aa as checkmarkOutline, bs as IonPage } from './vendor-wM1cIaYi.js';
import { s as storeToRefs } from './pinia-Czqxf__w.js';
import { u as useDemographicsStore, b1 as useVitalsStore, T as Toolbar, F as DynamicButton, s as isPatientDeceased, bJ as StagesService, v as usePatientList, x as toastDanger, _ as _export_sfc } from '../index-D6b7pLN6.js';
import { D as DemographicBar } from './DemographicBar-u3W_ybs4.js';
import { V as Vitals$1 } from './Vitals-Co8GQa6t.js';
import { u as useUserActivities } from './useUserActivities-B4n2kRqT.js';

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "vitals-header" };
const _hoisted_4 = { class: "back_profile" };
const _hoisted_5 = { class: "vitals-content" };
const _hoisted_6 = { class: "action-buttons" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vitals",
  setup(__props) {
    const router = useRouter();
    useRoute();
    const isLoading = ref(false);
    const { hasWaitingList, ready } = useUserActivities();
    const demographicsStore = useDemographicsStore();
    const vitalsStore = useVitalsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const vitalsRef = ref(null);
    onMounted(async () => {
      if (!ready.value) ;
    });
    const openBackController = () => {
      router.push("home");
    };
    const openProfileController = () => {
      if (isPatientDeceased()) {
        router.push("/deathPatientProfile");
      } else {
        router.push("/patientProfile");
      }
    };
    const saveVitals = async () => {
      isLoading.value = true;
      const locationId = String(localStorage.getItem("locationID"));
      try {
        if (vitalsRef.value) {
          const vitalsSavedSuccessfully = await vitalsRef.value.onSubmit();
          if (vitalsSavedSuccessfully) {
            await StagesService.addPatientToStage(patient.value, "CONSULTATION");
            await usePatientList().refresh(locationId);
            if (hasWaitingList("Waiting for Consultation")) {
              await router.push("OPDConsultationPlan");
            } else {
              await router.push("home");
            }
          }
        }
      } catch (error) {
        console.error("An unexpected error occurred in saveVitals (parent):", error);
        toastDanger("An unexpected error occurred. Please try again.");
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(DynamicButton, {
                      name: "Back to Waiting list",
                      iconSlot: "start",
                      fill: "clear",
                      icon: unref(chevronBackOutline),
                      "font-weight": "600",
                      onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                    }, null, 8, ["icon"]),
                    createVNode(DynamicButton, {
                      name: "Back to Profile",
                      iconSlot: "start",
                      fill: "clear",
                      icon: unref(chevronBackOutline),
                      "font-weight": "600",
                      onClick: _cache[1] || (_cache[1] = ($event) => openProfileController()),
                      style: { "margin-left": "15px" }
                    }, null, 8, ["icon"])
                  ]),
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "vitals-title" }, [
                    createBaseVNode("h4", null, "Vital Signs"),
                    createBaseVNode("hr", { class: "title-line" })
                  ], -1))
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(Vitals$1, {
                    ref_key: "vitalsRef",
                    ref: vitalsRef
                  }, null, 512)
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(DynamicButton, {
                    name: "Save Vitals",
                    iconSlot: "start",
                    fill: "solid",
                    color: "primary",
                    icon: unref(checkmarkOutline),
                    onClick: _cache[2] || (_cache[2] = ($event) => saveVitals()),
                    disabled: isLoading.value
                  }, null, 8, ["icon", "disabled"])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Vitals = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c732a966"]]);

export { Vitals as default };
