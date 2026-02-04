import { S as Service, u as useDemographicsStore, F as DynamicButton, q as StandardModal, K as ObservationService, H as HisDate, b as EncounterTypeId, G as toastSuccess, J as savePatientRecord, _ as _export_sfc } from '../index-kwyS_uSy.js';
import { s as defineComponent, f as ref, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, a5 as createTextVNode, D as toDisplayString, F as unref, v as documentTextOutline, K as modalController } from './vendor-CNJ0IVCn.js';
import { s as storeToRefs } from './pinia-DxI5rRJg.js';

const _hoisted_1 = { class: "calendar-container" };
const _hoisted_2 = { class: "calendar-selector" };
const _hoisted_3 = { class: "calendar-day" };
const _hoisted_4 = { class: "day-wrapper" };
const _hoisted_5 = { class: "count-badge" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NextAppointment",
  setup(__props) {
    const selectedDate = ref(null);
    const minDate = ref(new Date(Service.getSessionDate()));
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const saveAppointment = async () => {
      if (!selectedDate.value) return;
      const obs = await ObservationService.buildValueDate("Appointment date", HisDate.toStandardHisFormat(selectedDate.value));
      if (await ObservationService.addObsToEncounterPatient([obs], EncounterTypeId.APPOINTMENT)) toastSuccess("next Appointment Set Successfully");
      await savePatientRecord(patient.value);
      modalController.dismiss();
    };
    const getCount = (date) => {
      return "";
    };
    const handleDateSelection = async (date) => {
      if (!date) return;
      selectedDate.value = date;
    };
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createBlock(StandardModal, {
        title: "Next Appointment ",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save Appointment",
            onClick: saveAppointment,
            fill: "solid",
            class: "save-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "calendar-title" }, "Set Appointments", -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_VueDatePicker, {
                class: "calendar",
                onDateUpdate: handleDateSelection,
                inline: "",
                "auto-apply": "",
                "enable-time-picker": false,
                "min-date": minDate.value,
                modelValue: selectedDate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event)
              }, {
                day: withCtx(({ day, date }) => [
                  createBaseVNode("p", _hoisted_3, [
                    createBaseVNode("span", _hoisted_4, [
                      createTextVNode(toDisplayString(day) + " ", 1),
                      createBaseVNode("sup", _hoisted_5, toDisplayString(getCount(date)), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["min-date", "modelValue"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const NextAppointmentModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4992c18"]]);

export { NextAppointmentModal as N };
