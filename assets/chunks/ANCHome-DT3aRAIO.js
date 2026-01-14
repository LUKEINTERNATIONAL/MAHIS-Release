import { q as defineComponent, aH as useRouter, r as ref, d as computed, a2 as onMounted, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, bW as chevronBackOutline, dq as calendar, a4 as normalizeClass, C as toDisplayString, b8 as checkmark, bu as eye, br as IonPage } from './vendor-BPW-J91F.js';
import { aY as AppEncounterService, u as useDemographicsStore, T as Toolbar, F as DynamicButton, o as createModal, K as ObservationService, x as toastDanger, bM as resetPatientData, S as Service, t as toastWarning, G as toastSuccess, _ as _export_sfc } from '../index-BaBlba8w.js';
import { D as DemographicBar } from './DemographicBar-BDWGIBUX.js';
import { u as useScheduleNextAppointmentStore, L as LandingPage, N as NextAppointmentModal } from './NextAppointmentModal-NOAED1QD.js';
import { S as SaveProgressModal } from './SaveProgressModal-DcFZDwRV.js';
import { f as formatInputFiledData } from './formatServerData-CdGz1GHl.js';

class NextAppointmentService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 7, providerID);
  }
}

const _hoisted_1 = { class: "main-container" };
const _hoisted_2 = { class: "status-card" };
const _hoisted_3 = { class: "back-wrapper" };
const _hoisted_4 = { class: "appointment-info" };
const _hoisted_5 = { class: "icon-circle" };
const _hoisted_6 = { class: "text-group" };
const _hoisted_7 = { class: "action-grid" };
const _hoisted_8 = { class: "grid-item main-action" };
const _hoisted_9 = { class: "grid-item" };
const _hoisted_10 = { class: "grid-item" };
const _hoisted_11 = { class: "landing-wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ANCHome",
  props: {
    backBtn: { default: "Back to profile" },
    backUrl: { default: "" },
    contact: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const scheduleStore = useScheduleNextAppointmentStore();
    const demographicsStore = useDemographicsStore();
    const isModalOpen = ref(false);
    const dateOfAppointment = ref("");
    const nextAppointmentDate = computed(() => scheduleStore.nextAppointmentDate);
    const patient = computed(() => demographicsStore.patient);
    const openBackController = () => {
      if (props.backUrl) {
        router.push(props.backUrl);
      } else {
        createModal(SaveProgressModal);
      }
    };
    const handleAppointment = async () => {
      const appointment = await ObservationService.getFirstObsValue(patient.value.patientID, "Appointment date", "value_text");
      dateOfAppointment.value = appointment;
    };
    const buildNextAppointment = async () => {
      return [...await formatInputFiledData(nextAppointmentDate.value)];
    };
    const saveDate = async () => {
      if (nextAppointmentDate.value.length >= 0) {
        const userID = Service.getUserID();
        const AppointmentDate = new NextAppointmentService(patient.value.patientID, userID);
        const encounter = await AppointmentDate.createEncounter();
        if (!encounter) {
          return toastWarning("Unable to create appointment date encounter");
        }
        const patientStatus = await AppointmentDate.saveObservationList(await buildNextAppointment());
        if (!patientStatus) {
          return toastWarning("Unable to create date!");
        }
        toastSuccess("Client has been scheduled for next contact");
      }
    };
    const saveData = async () => {
      const isFormValid = await scheduleStore.validate();
      if (!isFormValid) {
        toastDanger("Next appointment date has errors");
        return;
      }
      await saveDate();
      closeAppointmentModal();
      await router.push("ANCHome");
      await resetPatientData();
    };
    const cancelModal = () => {
      closeAppointmentModal();
    };
    const nextAppointment = () => {
      toggleAppointmentModal();
    };
    const toggleAppointmentModal = () => {
      isModalOpen.value = !isModalOpen.value;
    };
    const closeAppointmentModal = () => {
      isModalOpen.value = false;
    };
    const previousContacts = () => {
      router.push("/contacts");
    };
    const navigateToContact = () => {
      router.push("/contact");
    };
    onMounted(() => {
      handleAppointment();
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), {
            fullscreen: true,
            class: "ion-padding-bottom"
          }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(DynamicButton, {
                      name: __props.backBtn,
                      iconSlot: "start",
                      fill: "clear",
                      icon: unref(chevronBackOutline),
                      onClick: _cache[0] || (_cache[0] = ($event) => openBackController()),
                      class: "back-btn-custom"
                    }, null, 8, ["name", "icon"])
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(_component_ion_icon, { icon: unref(calendar) }, null, 8, ["icon"])
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      _cache[1] || (_cache[1] = createBaseVNode("span", { class: "label" }, "Next Appointment", -1)),
                      createBaseVNode("span", {
                        class: normalizeClass(["value", { "no-date": !dateOfAppointment.value }])
                      }, toDisplayString(dateOfAppointment.value || "Not scheduled"), 3)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(DynamicButton, {
                      name: "New ANC Contact",
                      iconSlot: "start",
                      fill: "solid",
                      icon: unref(checkmark),
                      onClick: navigateToContact,
                      class: "cta-button"
                    }, null, 8, ["icon"])
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(DynamicButton, {
                      name: "View Contacts",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(eye),
                      onClick: previousContacts,
                      class: "sub-button"
                    }, null, 8, ["icon"])
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(DynamicButton, {
                      name: "Schedule Contact",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(calendar),
                      onClick: nextAppointment,
                      class: "sub-button"
                    }, null, 8, ["icon"])
                  ])
                ]),
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "content-divider" }, [
                  createBaseVNode("span", null, "Patient Overview")
                ], -1)),
                createBaseVNode("div", _hoisted_11, [
                  createVNode(LandingPage)
                ])
              ]),
              createVNode(NextAppointmentModal, {
                isOpen: isModalOpen.value,
                title: ``,
                closeModalFunc: closeAppointmentModal,
                onYes: saveData,
                onNo: cancelModal
              }, null, 8, ["isOpen"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ANCHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd8ea696"]]);

export { ANCHome as default };
