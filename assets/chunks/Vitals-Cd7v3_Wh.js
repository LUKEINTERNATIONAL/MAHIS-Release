import { s as defineComponent, aL as useRouter, ct as useRoute, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, z as createElementBlock, A as createVNode, F as unref, M as IonSpinner, C as createBaseVNode, H as createCommentVNode, aG as IonContent, bX as chevronBackOutline, av as b, eS as playSkipForwardOutline, ab as checkmarkOutline, bu as IonPage, f as ref } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { u as useDemographicsStore, b1 as useVitalsStore, T as Toolbar, F as DynamicButton, s as isPatientDeceased, bJ as StagesService, q as usePatientList, x as toastDanger, _ as _export_sfc } from '../index-C8caYnJd.js';
import { D as DemographicBar } from './DemographicBar-D_YicF3J.js';
import { V as Vitals$1 } from './Vitals-XxbWipr0.js';
import { u as useUserActivities } from './useUserActivities-B-y77V53.js';

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "vitals-header" };
const _hoisted_4 = { class: "back_profile" };
const _hoisted_5 = { class: "vitals-title" };
const _hoisted_6 = { class: "title-status-container" };
const _hoisted_7 = { class: "vitals-content" };
const _hoisted_8 = { class: "action-buttons" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vitals",
  setup(__props) {
    const router = useRouter();
    useRoute();
    const vitalsToggle = ref(false);
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
    const handleVitalsToggleChange = () => {
      vitalsRef.value?.toggleDisableAll();
    };
    const openBackController = () => {
      router.push("/home");
    };
    const openProfileController = () => {
      if (isPatientDeceased()) {
        router.push("/death-patient-profile");
      } else {
        router.push("/patient-profile");
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
              await router.push("/opd/consultation-plan");
            } else {
              await router.push("/home");
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
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
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
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      _cache[5] || (_cache[5] = createBaseVNode("h4", null, "Vital Signs", -1)),
                      createVNode(unref(b), {
                        class: "toggle-green",
                        classes: {
                          container: "inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30"
                        },
                        modelValue: vitalsToggle.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vitalsToggle.value = $event),
                        offLabel: "disable",
                        onLabel: "disabled",
                        onChange: handleVitalsToggleChange
                      }, null, 8, ["modelValue"])
                    ]),
                    _cache[6] || (_cache[6] = createBaseVNode("hr", { class: "title-line" }, null, -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createVNode(Vitals$1, {
                    ref_key: "vitalsRef",
                    ref: vitalsRef
                  }, null, 512)
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createVNode(DynamicButton, {
                    name: vitalsToggle.value ? "Skip" : "Save Vitals",
                    iconSlot: "start",
                    fill: "solid",
                    color: "primary",
                    icon: vitalsToggle.value ? unref(playSkipForwardOutline) : unref(checkmarkOutline),
                    onClick: _cache[3] || (_cache[3] = ($event) => saveVitals()),
                    disabled: isLoading.value
                  }, null, 8, ["name", "icon", "disabled"])
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

const Vitals = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15039252"]]);

export { Vitals as default };
