import { s as defineComponent, aM as useRouter, y as openBlock, O as createBlock, B as withCtx, z as createElementBlock, A as createVNode, F as unref, M as IonSpinner, C as createBaseVNode, H as createCommentVNode, aH as IonContent, b_ as chevronBackOutline, av as b, ba as homeOutline, eT as playSkipForwardOutline, ab as checkmarkOutline, bw as IonPage, f as ref, c as computed } from './vendor-BcieWP-_.js';
import { s as storeToRefs } from './pinia-DdQ9BIp0.js';
import { u as useDemographicsStore, T as Toolbar, F as DynamicButton, s as isPatientDeceased, bJ as StagesService, q as usePatientList, x as toastDanger, _ as _export_sfc } from '../index-DYy5O9I5.js';
import { D as DemographicBar } from './DemographicBar-Bd3lX8_Z.js';
import { V as Vitals$1 } from './Vitals-CkeYPIHq.js';
import { u as useUserActivities } from './useUserActivities-CgayCaMV.js';

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
const _hoisted_8 = {
  key: 0,
  class: "missing-patient-notice"
};
const _hoisted_9 = {
  key: 0,
  class: "action-buttons"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vitals",
  setup(__props) {
    const router = useRouter();
    const vitalsToggle = ref(false);
    const isLoading = ref(false);
    const { hasWaitingList } = useUserActivities();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const hasPatientInContext = computed(() => Boolean(patient.value?.patientID || patient.value?.ID));
    const showMissingPatientNotice = computed(() => !hasPatientInContext.value);
    const vitalsRef = ref(null);
    const handleVitalsToggleChange = () => {
      vitalsRef.value?.toggleDisableAll();
    };
    const openBackController = () => {
      router.push("/home");
    };
    const openProfileController = () => {
      if (!hasPatientInContext.value) {
        router.push("/home");
        return;
      }
      if (isPatientDeceased()) {
        router.push("/death-patient-profile");
      } else {
        router.push("/patient-profile");
      }
    };
    const returnHome = () => {
      router.push("/home");
    };
    const saveVitals = async () => {
      if (showMissingPatientNotice.value) {
        return;
      }
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
                    hasPatientInContext.value ? (openBlock(), createBlock(DynamicButton, {
                      key: 0,
                      name: "Back to Waiting list",
                      iconSlot: "start",
                      fill: "clear",
                      icon: unref(chevronBackOutline),
                      "font-weight": "600",
                      onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                    }, null, 8, ["icon"])) : createCommentVNode("", true),
                    hasPatientInContext.value ? (openBlock(), createBlock(DynamicButton, {
                      key: 1,
                      name: "Back to Profile",
                      iconSlot: "start",
                      fill: "clear",
                      icon: unref(chevronBackOutline),
                      "font-weight": "600",
                      onClick: _cache[1] || (_cache[1] = ($event) => openProfileController()),
                      style: { "margin-left": "15px" }
                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      _cache[5] || (_cache[5] = createBaseVNode("h4", null, "Vital Signs", -1)),
                      !showMissingPatientNotice.value ? (openBlock(), createBlock(unref(b), {
                        key: 0,
                        class: "toggle-green",
                        classes: {
                          container: "inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30"
                        },
                        modelValue: vitalsToggle.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vitalsToggle.value = $event),
                        offLabel: "disable",
                        onLabel: "disabled",
                        onChange: handleVitalsToggleChange
                      }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                    ]),
                    _cache[6] || (_cache[6] = createBaseVNode("hr", { class: "title-line" }, null, -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_7, [
                  showMissingPatientNotice.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    _cache[7] || (_cache[7] = createBaseVNode("p", null, " No patient is selected or in context (Check on demographics bar) hence you won't be able to save the data. Please return to home page and select the patient again or try another patient. ", -1)),
                    createVNode(DynamicButton, {
                      name: "Return home",
                      iconSlot: "start",
                      fill: "solid",
                      color: "primary",
                      icon: unref(homeOutline),
                      onClick: returnHome
                    }, null, 8, ["icon"])
                  ])) : (openBlock(), createBlock(Vitals$1, {
                    key: 1,
                    ref_key: "vitalsRef",
                    ref: vitalsRef
                  }, null, 512))
                ]),
                !showMissingPatientNotice.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(DynamicButton, {
                    name: vitalsToggle.value ? "Skip" : "Save Vitals",
                    iconSlot: "start",
                    fill: "solid",
                    color: "primary",
                    icon: vitalsToggle.value ? unref(playSkipForwardOutline) : unref(checkmarkOutline),
                    onClick: _cache[3] || (_cache[3] = ($event) => saveVitals()),
                    disabled: isLoading.value
                  }, null, 8, ["name", "icon", "disabled"])
                ])) : createCommentVNode("", true)
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

const Vitals = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ab18a7c"]]);

export { Vitals as default };
