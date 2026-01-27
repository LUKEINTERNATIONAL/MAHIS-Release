import { v as defineComponent, M as IonIcon, O as IonButton, az as IonCol, ag as IonRow, aA as IonGrid, bc as IonCardContent, bL as IonCard, L as modalController, dk as eyeOutline, bv as personCircleOutline, bU as trashOutline, b7 as calendarOutline, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, D as createBaseVNode, a6 as createTextVNode, E as toDisplayString } from './vendor-B3kX1Pjg.js';
import { o as createModal, P as PatientService, u as useDemographicsStore, _ as _export_sfc } from '../index-Chdvo7Z7.js';
import { a as smsConfirmation, u as useImmunizationAppointMentStore, v as voidVaccineEncounter, n as nextAppointMent } from './vaccines_service-BWVbgAsT.js';
import { v as voidReason } from './voidReason--Wzblw-G.js';
import { S as SmsService } from './sms_service-CJeqIloU.js';

const _sfc_main = defineComponent({
  name: "PersonCard",
  components: {
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon
  },
  data() {
    return {};
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      calendarOutline,
      trashOutline,
      personCircleOutline,
      eyeOutline
    };
  },
  methods: {
    handleReschedule() {
      this.openNextVaccineAppoinment(this.person.person_id, this.person.encounter_id);
    },
    handleRemove() {
      this.voidAppoinment();
    },
    openNextVaccineAppoinment(patientId, encounter_id) {
      const dataToPass = { patient_Id: patientId, encounter_Id: encounter_id };
      createModal(nextAppointMent, { class: "otherVitalsModal" }, false, dataToPass);
    },
    async openClientProfile(patientID) {
      const patientData = await PatientService.findByNpid(patientID);
      await useDemographicsStore().setPatientRecord(patientData[0]);
      this.$router.push("/patient-profile");
    },
    async voidAppoinment() {
      await this.openVoidModal();
    },
    async openVoidModal() {
      const modal = await modalController.create({
        component: voidReason,
        cssClass: "otherVitalsModal",
        componentProps: {}
      });
      modal.onDidDismiss().then(async (data) => {
        if (data && data.data) {
          try {
            await voidVaccineEncounter(this.person.encounter_id, data.data.name);
            let config = await SmsService.getConfigurations();
            if (config.show_sms_popup) {
              await this.smsmodal(this.person);
            } else {
              this.setAppointmentMentsReload();
            }
          } catch (error) {
            this.setAppointmentMentsReload();
          }
        }
      });
      await modal.present();
    },
    async setAppointmentMentsReload() {
      const store = useImmunizationAppointMentStore();
      store.setAppointmentsReload(!store.getAppointmentsReload());
    },
    async smsmodal(person) {
      const modal = await createModal(smsConfirmation, {
        componentProps: { patient: person.person_id, date: person.appointmentDate},
        class: "smsConfirmation"
      });
      modal.onDidDismiss().then(async (data) => {
        this.setAppointmentMentsReload();
      });
    }
  }
});

const _hoisted_1 = { class: "button-container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, { style: { "margin-bottom": "10px" } }, {
    default: withCtx(() => [
      createVNode(_component_ion_card_content, { style: { "padding": "2px" } }, {
        default: withCtx(() => [
          createVNode(_component_ion_button, {
            style: { "position": "absolute", "top": "10px", "right": "10px", "--padding-start": "8px", "--padding-end": "8px", "--padding-top": "4px", "--padding-bottom": "4px", "--box-shadow": "none" },
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openClientProfile(_ctx.person.npid)),
            color: "primary",
            fill: "clear",
            size: "small"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_icon, {
                icon: _ctx.eyeOutline,
                style: { "font-size": "24px" }
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          createVNode(_component_ion_grid, null, {
            default: withCtx(() => [
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { size: "6" }, {
                    default: withCtx(() => [
                      _cache[1] || (_cache[1] = createBaseVNode("strong", null, "Name:", -1)),
                      createTextVNode(" " + toDisplayString(_ctx.person.name), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_col, { size: "5" }, {
                    default: withCtx(() => [
                      _cache[2] || (_cache[2] = createBaseVNode("strong", null, "Gender:", -1)),
                      createTextVNode(" " + toDisplayString(_ctx.person.gender), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { size: "6" }, {
                    default: withCtx(() => [
                      _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Age/DOB:", -1)),
                      createTextVNode(" " + toDisplayString(_ctx.person.ageDob), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_col, { size: "6" }, {
                    default: withCtx(() => [
                      _cache[4] || (_cache[4] = createBaseVNode("strong", null, "Village:", -1)),
                      createTextVNode(" " + toDisplayString(_ctx.person.village), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { size: "12" }, {
                    default: withCtx(() => [
                      _cache[5] || (_cache[5] = createBaseVNode("strong", null, "Appointment Date:", -1)),
                      createTextVNode(" " + toDisplayString(_ctx.person.appointmentDate), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_row, { class: "divider" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { size: "12" }, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createBaseVNode("div", { class: "line" }, null, -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_row, { class: "actions" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { size: "12" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        createVNode(_component_ion_button, {
                          onClick: _ctx.handleReschedule,
                          color: "primary",
                          fill: "outline",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: _ctx.calendarOutline,
                              slot: "start"
                            }, null, 8, ["icon"]),
                            _cache[7] || (_cache[7] = createTextVNode(" Reschedule ", -1))
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_ion_button, {
                          onClick: _ctx.handleRemove,
                          color: "danger",
                          fill: "outline",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_icon, {
                              icon: _ctx.trashOutline,
                              slot: "start"
                            }, null, 8, ["icon"]),
                            _cache[8] || (_cache[8] = createTextVNode(" Cancel ", -1))
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const nextApptInf = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2927811a"]]);

export { nextApptInf as n };
