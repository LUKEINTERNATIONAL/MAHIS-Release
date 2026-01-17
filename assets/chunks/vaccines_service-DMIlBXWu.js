import { H as HisDate, aY as AppEncounterService, u as useDemographicsStore, S as Service, J as savePatientRecord, G as toastSuccess, _ as _export_sfc, P as PatientService, t as toastWarning, o as createModal, m as useAdministerVaccineStore, A as AppointmentService, ab as useUserStore, f as useStatusStore } from '../index-CKTz1PXB.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { q as defineComponent, ay as IonCol, M as IonButton, am as IonList, an as IonItem, ae as IonRow, J as modalController, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, A as createBaseVNode, B as withCtx, a4 as createTextVNode, H as Fragment, r as ref, a1 as onMounted, N as createBlock, G as createCommentVNode, E as unref, a6 as IonLabel, C as toDisplayString, bH as IonBadge } from './vendor-Cd5ziTxG.js';
import { d as defineStore } from './pinia-UguK66WW.js';
import { S as SmsService } from './sms_service-B-ATZo9w.js';
import { E as EIRreportsStore } from './EIRreportsStore-B3nMSQ7E.js';
import { u as usePlatform, F as FileExportType, e as exportMobile } from './Export-T87zDHEz.js';

const useImmunizationAppointMentStore = defineStore("immunizationAppointMentStore", {
  state: () => ({
    selectedAppointmentMent: [],
    selectedAppointmentMentForAppointmentsPage: "",
    AppointmentsReload: false,
    startDate: HisDate.sessionDate(),
    endDate: HisDate.sessionDate()
  }),
  actions: {
    getAppointmentMents() {
      return this.selectedAppointmentMent;
    },
    setAppointmentMent(appointment) {
      this.selectedAppointmentMent.length = 0;
      this.selectedAppointmentMent.push(appointment);
    },
    clearAppointmentMent() {
      this.selectedAppointmentMent.length = 0;
    },
    getSelectedAppointmentMentForAppointmentsPage() {
      return this.selectedAppointmentMentForAppointmentsPage;
    },
    setSelectedAppointmentMentForAppointmentsPage(appointment) {
      this.selectedAppointmentMentForAppointmentsPage = appointment;
    },
    setAppointmentsReload(value) {
      this.AppointmentsReload = value;
    },
    getAppointmentsReload() {
      return this.AppointmentsReload;
    },
    setStartEndDate(Start, End) {
      this.startDate = Start;
      this.endDate = End;
    },
    getStartEndDate() {
      return {
        startDate: this.startDate,
        endDate: this.endDate
      };
    }
  }
});

class Appointment extends AppEncounterService {
  patientID;
  providerID;
  constructor(patientID) {
    const actualPatientID = patientID !== void 0 ? patientID : Appointment.getPatientID();
    const providerID = Appointment.getProviderID();
    super(actualPatientID, 7, providerID);
    this.patientID = actualPatientID;
    this.providerID = providerID;
  }
  static getPatientID() {
    const store = useDemographicsStore();
    const demographics = store.patient;
    const patientID = demographics.patientID;
    return patientID;
  }
  static getProviderID() {
    const providerID = Service.getUserID();
    return providerID;
  }
  async setPatientID(patientID) {
    this.patientID = patientID;
  }
  async createAppointment(patientData) {
    let patient = JSON.parse(JSON.stringify(patientData));
    const _appointment_ = [];
    const store = useImmunizationAppointMentStore();
    store.selectedAppointmentMent.forEach((appointment) => {
      const next_appointment_date = HisDate.toStandardHisFormat(appointment.date);
      _appointment_.push(next_appointment_date);
    });
    const a_obs = await this.buildValueDate("Appointment date", _appointment_[0]);
    patient?.appointments.unsaved?.push(a_obs);
    await savePatientRecord(patient);
    toastSuccess("next Appointment Set Successfully");
    return _appointment_[0];
  }
  async getNextAppointment() {
    if (this.programID && this.patientID)
      return AppEncounterService.getJson(`/programs/${this.programID}/patients/${this.patientID}/next_appointment_date`, { date: this.date });
  }
  async getDailyAppointments(date) {
    const programID = AppEncounterService.getProgramID();
    return AppEncounterService.getJson(`/programs/${programID}/booked_appointments`, { date, paginate: false });
  }
}

const _sfc_main$1 = defineComponent({
  components: {
    IonRow,
    IonItem,
    IonList,
    IonButton,
    IonCol
  },
  props: {
    date: {
      type: String,
      required: true
    },
    patient: {
      type: Number,
      required: true
    },
    modalaction: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      formattedDate: HisDate.toStandardHisFormat(this.date)
      // Create a local variable for the formatted date
    };
  },
  methods: {
    async dismissModal() {
      await modalController.dismiss();
    },
    async sendSMS() {
      await modalController.dismiss("send-SMS");
    }
  }
});

const _hoisted_1$1 = { class: "saveBtn" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_row, { class: "centered-content" }, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "text-container" }, [
          createBaseVNode("div", null, "Do you want to send SMS reminder?")
        ], -1)
      ])]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1$1, [
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.dismissModal,
                id: "cbtn",
                class: "btnText cbtn",
                fill: "solid",
                style: { "width": "130px" }
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" No ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.sendSMS,
                class: "btnText",
                fill: "solid",
                style: { "width": "130px", "text-align": "right" }
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode(" Yes ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ], 64);
}
const smsConfirmation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-2bafd924"]]);

const _hoisted_1 = { class: "lbl-ct" };
const _hoisted_2 = { class: "lbl-ct" };
const _hoisted_3 = { style: { "margin-right": "20px", "color": "black" } };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { style: { "color": "#999" } };
const _hoisted_6 = { style: { "font-size": "16px", "color": "#666", "margin-top": "5px" } };
const __default__ = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    patient_Id: {},
    encounter_Id: {}
  },
  setup(__props) {
    const client = useDemographicsStore();
    const date = ref();
    const suggested_date = ref();
    const show_suggested_date = ref(false);
    const configsSms = ref(false);
    const sessionDate = HisDate.toStandardHisDisplayFormat(Service.getSessionDate());
    const show_selected_date = ref(false);
    const currently_selected_date = ref();
    const appointment_count = ref(0);
    const phoneNumbers = ref([]);
    const vaccinesPreviouslyAdministered = [];
    function disablePastDates(date2) {
      const today = new Date(Service.getSessionDate());
      today.setHours(0, 0, 0, 0);
      return date2 < today;
    }
    const props = __props;
    async function save() {
      const store = useImmunizationAppointMentStore();
      if (store.selectedAppointmentMent.length > 0) {
        try {
          await getMobilePhones();
          const appointment_service = new Appointment();
          const appointmentDate = await appointment_service.createAppointment(client.patient);
          await setMilestoneReload();
          await setAppointmentMentsReload();
          await dismiss();
          smspost(appointmentDate);
        } catch (error) {
        }
      } else {
        toastWarning("please select next appointment date on the calendar");
      }
    }
    async function smspost(appointmentDate) {
      if (phoneNumbers.value.length == 0) {
        toastWarning("No phone numbers available for sms reminder!");
        return;
      }
      if (appointmentDate) {
        const modal = await createModal(smsConfirmation, { class: "nationalIDModal" });
        if (modal == "send-SMS") {
          const plainPatientData = JSON.parse(JSON.stringify(client.patient));
          plainPatientData.sms = { appointment_date: appointmentDate };
          await savePatientRecord(plainPatientData);
        }
      }
    }
    async function setMilestoneReload() {
      const store = useAdministerVaccineStore();
      store.setVaccineReload(!store.getVaccineReload());
    }
    async function setAppointmentMentsReload() {
      const store = useImmunizationAppointMentStore();
      store.setAppointmentsReload(!store.getAppointmentsReload());
    }
    onMounted(async () => {
      const store = useImmunizationAppointMentStore();
      store.clearAppointmentMent();
      await getfacilityConfiguration();
      await suggestNextAppointmentDate();
    });
    async function suggestNextAppointmentDate() {
      try {
        const patient = new PatientService();
        const patientId = props.patient_Id !== void 0 ? props.patient_Id : patient.getID();
        const mileStone = await getFirstUpcomingVaccineMilestone(patientId);
        if (vaccinesPreviouslyAdministered.length > 0) {
          const lastVaccine = vaccinesPreviouslyAdministered[vaccinesPreviouslyAdministered.length - 1];
          const is_timely_adminstred = await isTimelyAdminstred(lastVaccine, patientId);
          if (is_timely_adminstred == false) {
            date.value = addDaysAndFormat(lastVaccine.vaccine.date_administered, convertToDays(mileStone.age));
            suggested_date.value = HisDate.toStandardHisDisplayFormat(date.value);
            DateUpdated(date.value);
            getCounter(date.value);
            show_suggested_date.value = true;
          }
        }
      } catch (error) {
      }
    }
    async function isTimelyAdminstred(vaccine, patientId) {
      try {
        const DOB = new Date(client.patient.personInformation.birthdate);
        const expectedAdminstrationDate = addDaysAndFormat(DOB, convertToDays(vaccine.age));
        const DA = convertToDate(vaccine.vaccine.date_administered);
        const EAD = new Date(expectedAdminstrationDate);
        console.log(isLater(DA, EAD));
        return isLater(DA, EAD);
      } catch (error) {
      }
    }
    function convertToDate(dateStr) {
      const monthMap = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
      };
      const parts = dateStr.split(/[:/ ]/);
      const formattedDate = `${parts[2]}-${monthMap[parts[1]]}-${parts[0]}T${parts[3]}:${parts[4]}:${parts[5]}`;
      return new Date(formattedDate);
    }
    function isLater(dateA, dateB) {
      const yearA = dateA.getFullYear();
      const monthA = dateA.getMonth();
      const dayA = dateA.getDate();
      const yearB = dateB.getFullYear();
      const monthB = dateB.getMonth();
      const dayB = dateB.getDate();
      if (yearA !== yearB) {
        return yearA > yearB;
      }
      if (monthA !== monthB) {
        return monthA > monthB;
      }
      return dayA > dayB;
    }
    function findPreviouslyAdministeredVaccineSchedule(vaccine_schedule) {
      vaccine_schedule.forEach((milestone) => {
        milestone.antigens.forEach((vaccine) => {
          if (vaccine.status == "administered") {
            vaccinesPreviouslyAdministered.push({
              age: milestone.age,
              vaccine
            });
          }
        });
      });
      return vaccinesPreviouslyAdministered;
    }
    async function getFirstUpcomingVaccineMilestone(patientId) {
      try {
        const data = client.patient.vaccineSchedule;
        findPreviouslyAdministeredVaccineSchedule(data.vaccine_schedule);
        for (const milestone of data.vaccine_schedule) {
          if (milestone.milestone_status === "current") {
            return milestone;
          }
          if (milestone.milestone_status === "upcoming") {
            return milestone;
          }
        }
        return null;
      } catch (error) {
        return null;
      }
    }
    async function getAppointmentMents(date2) {
      try {
        const res = await AppointmentService.getDailyAppointments(HisDate.toStandardHisFormat(date2), HisDate.toStandardHisFormat(date2));
        appointment_count.value = res.length;
      } catch (error) {
      }
    }
    async function dismiss() {
      try {
        await modalController.dismiss();
      } catch (error) {
        console.error("Modal dismissal error:", error);
      }
    }
    async function getfacilityConfiguration() {
      try {
        let data = await SmsService.getConfigurations();
        configsSms.value = data.show_sms_popup;
      } catch (error) {
      }
    }
    async function getMobilePhones() {
      const plainPatientData = JSON.parse(JSON.stringify(client.patient.guardianInformation));
      const guardianInformation = [...plainPatientData?.unsaved, ...plainPatientData?.saved];
      if (guardianInformation.length > 0 && guardianInformation[0]?.cell_phone_number)
        phoneNumbers.value.push(guardianInformation[0]?.cell_phone_number);
      if (client.patient.personInformation.cell_phone_number) {
        phoneNumbers.value.push(client.patient.personInformation.cell_phone_number);
      }
    }
    async function DateUpdated(date2) {
      const store = useImmunizationAppointMentStore();
      const appointment = {
        counter: 1,
        date: date2
      };
      store.setAppointmentMent(appointment);
      show_selected_date.value = false;
      await getAppointmentMents(date2);
      show_selected_date.value = true;
      currently_selected_date.value = HisDate.toStandardHisDisplayFormat(date2);
    }
    function getCounter(date2) {
      const store = useImmunizationAppointMentStore();
      const _selectedAppointments = store.getAppointmentMents();
      const normalizeDate = (date3) => {
        const d = new Date(date3);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
      };
      const dateTimestamp = normalizeDate(new Date(date2));
      const found = _selectedAppointments.find((d) => {
        return normalizeDate(new Date(d.date)) === dateTimestamp;
      });
      return found ? found.counter : null;
    }
    function convertToDays(input) {
      const regex = /(\d+)\s*(week|month|year)s?/i;
      const match = input.match(regex);
      if (!match) {
        return "Invalid input format";
      }
      const number = parseInt(match[1]);
      const unit = match[2].toLowerCase();
      switch (unit) {
        case "week":
          return number * 7;
        case "month":
          return number * 30;
        // Approximation, as months vary
        case "year":
          return number * 365;
        // Not accounting for leap years
        default:
          return "Invalid time unit";
      }
    }
    function addDaysAndFormat(dateInput, daysToAdd) {
      if (daysToAdd == "Invalid input format") return "";
      let date2;
      if (dateInput instanceof Date) {
        date2 = new Date(dateInput);
      } else {
        const [datePart, timePart] = dateInput.split(" ");
        const [day, month, year] = datePart.split("/");
        const [hours, minutes, seconds] = timePart.split(":");
        const months = {
          Jan: 0,
          Feb: 1,
          Mar: 2,
          Apr: 3,
          May: 4,
          Jun: 5,
          Jul: 6,
          Aug: 7,
          Sep: 8,
          Oct: 9,
          Nov: 10,
          Dec: 11
        };
        date2 = new Date(Number(year), months[month], Number(day), Number(hours), Number(minutes), Number(seconds));
      }
      date2.setDate(date2.getDate() + daysToAdd);
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const formatNumber = (num) => String(num).padStart(2, "0");
      const dayName = days[date2.getDay()];
      const monthName = monthsArr[date2.getMonth()];
      const dayOfMonth = formatNumber(date2.getDate());
      const newYear = date2.getFullYear();
      const newHours = formatNumber(date2.getHours());
      const newMinutes = formatNumber(date2.getMinutes());
      const newSeconds = formatNumber(date2.getSeconds());
      const timeZoneOffset = -date2.getTimezoneOffset();
      const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
      const offsetMinutes = Math.abs(timeZoneOffset) % 60;
      const timeZoneString = `GMT${timeZoneOffset >= 0 ? "+" : "-"}${formatNumber(offsetHours)}${formatNumber(offsetMinutes)}`;
      const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let localizedTimeZoneName;
      try {
        const timeZonePart = new Intl.DateTimeFormat("en", {
          timeZone: timeZoneName,
          timeZoneName: "long"
        }).formatToParts(date2).find((part) => part.type === "timeZoneName");
        localizedTimeZoneName = timeZonePart ? timeZonePart.value : timeZoneName;
      } catch (error) {
        console.error("Error getting localized time zone name:", error);
        localizedTimeZoneName = timeZoneName;
      }
      return `Date ${dayName} ${monthName} ${dayOfMonth} ${newYear} ${newHours}:${newMinutes}:${newSeconds} ${timeZoneString} (${localizedTimeZoneName})`;
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonRow), { style: { "margin-top": "10px" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { style: { "margin-left": "-3px" } }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createBaseVNode("div", {
                  class: "om",
                  style: { "font-weight": "600", "color": "#8d8686" }
                }, "Set Next Appointment Date", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(IonCol), {
              size: "6",
              style: { "text-align": "right" }
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), {
                  class: "lbl-tl",
                  style: { "font-size": "13" }
                }, {
                  default: withCtx(() => [
                    _cache[2] || (_cache[2] = createTextVNode(" Todays Date: ", -1)),
                    createBaseVNode("span", _hoisted_1, toDisplayString(unref(sessionDate)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonRow), { style: { "margin-top": "10px" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { style: { "margin-left": "-3px" } }, {
              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                createBaseVNode("div", { class: "om" }, null, -1)
              ])]),
              _: 1
            }),
            show_selected_date.value ? (openBlock(), createBlock(unref(IonCol), {
              key: 0,
              size: "10",
              style: { "text-align": "right" }
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), {
                  class: "lbl-tl",
                  style: { "font-size": "16", "font-weight": "500" }
                }, {
                  default: withCtx(() => [
                    _cache[4] || (_cache[4] = createTextVNode(" Total Appointments ", -1)),
                    createBaseVNode("span", _hoisted_2, "(" + toDisplayString(currently_selected_date.value) + ")", 1),
                    _cache[5] || (_cache[5] = createTextVNode(": ", -1)),
                    createBaseVNode("span", _hoisted_3, [
                      createVNode(unref(IonBadge), {
                        color: "primary",
                        style: { "margin-bottom": "-5px", "font-size": "15px" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(appointment_count.value), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(unref(IonRow), { style: { "margin-top": "20px" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), null, {
              default: withCtx(() => [
                createVNode(_component_VueDatePicker, {
                  modelValue: date.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => date.value = $event),
                  onDateUpdate: DateUpdated,
                  "enable-time-picker": false,
                  inline: "",
                  "auto-apply": "",
                  "disabled-dates": disablePastDates
                }, {
                  day: withCtx(({ day, date: date2 }) => [
                    true ? (openBlock(), createElementBlock("p", _hoisted_4, [
                      createTextVNode(toDisplayString(day), 1),
                      createBaseVNode("sup", _hoisted_5, toDisplayString(getCounter(date2)), 1)
                    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(day), 1)
                    ], 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        show_suggested_date.value ? (openBlock(), createBlock(unref(IonRow), {
          key: 0,
          style: { "margin-top": "0px", "margin-bottom": "0px" }
        }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { style: { "background-color": "#f0f0f0", "padding": "15px", "border-radius": "8px", "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)" } }, {
              default: withCtx(() => [
                _cache[6] || (_cache[6] = createBaseVNode("div", { style: { "font-size": "17px", "color": "#333", "font-weight": "bold" } }, "Suggested Date:", -1)),
                createBaseVNode("div", _hoisted_6, toDisplayString(suggested_date.value), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(IonRow), { style: { "margin-top": "10px", "margin-bottom": "10px" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), null, {
              default: withCtx(() => [
                createVNode(unref(IonButton), {
                  onClick: dismiss,
                  id: "cbtn",
                  class: "btnText cbtn",
                  fill: "solid",
                  style: { "width": "130px" }
                }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createTextVNode(" Cancel ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), { style: { "text-align": "right" } }, {
              default: withCtx(() => [
                createVNode(unref(IonButton), {
                  onClick: save,
                  class: "btnText",
                  fill: "solid",
                  style: { "width": "130px" }
                }, {
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [
                    createTextVNode(" save ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const NextAppointment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86c8383d"]]);

const GenericVaccineSchedule = {
  female_schedule: [
    {
      visit: 1,
      milestone_status: null,
      age: "At birth",
      antigens: [
        {
          drug_id: 1283,
          drug_name: "BCG",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1284,
          drug_name: "OPV 0",
          window_period: "14 weeks",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 2,
      milestone_status: null,
      age: "6 weeks",
      antigens: [
        {
          drug_id: 1284,
          drug_name: "OPV 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1288,
          drug_name: "Penta 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1520,
          drug_name: "Rota 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1291,
          drug_name: "PCV 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 3,
      milestone_status: null,
      age: "10 weeks ",
      antigens: [
        {
          drug_id: 1284,
          drug_name: "OPV 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1288,
          drug_name: "Penta 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1520,
          drug_name: "Rota 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1291,
          drug_name: "PCV 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 4,
      milestone_status: null,
      age: "14 weeks",
      antigens: [
        {
          drug_id: 1284,
          drug_name: "OPV 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1288,
          drug_name: "Penta 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1291,
          drug_name: "PCV 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1301,
          drug_name: "IPV",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 5,
      milestone_status: null,
      age: "5 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 1",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 6,
      milestone_status: null,
      age: "6 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 2",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1300,
          drug_name: "Vit A 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 7,
      milestone_status: null,
      age: "7 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 3",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 8,
      milestone_status: null,
      age: "9 months",
      antigens: [
        {
          drug_id: 1302,
          drug_name: "MR 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1304,
          drug_name: "TCV",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 9,
      milestone_status: null,
      age: "1 year",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 1",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 1",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 10,
      milestone_status: null,
      age: "15 months",
      antigens: [
        {
          drug_id: 1302,
          drug_name: "MR 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 11,
      milestone_status: null,
      age: "18 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 2",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 2",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 12,
      milestone_status: null,
      age: "22 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 4",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 13,
      milestone_status: null,
      age: "2 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 4",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 3",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 3",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 14,
      milestone_status: null,
      age: "30 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 5",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 4",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 4",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 15,
      milestone_status: null,
      age: "3 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 6",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 5",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 5",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 16,
      milestone_status: null,
      age: "42 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 7",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 6",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 6",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 17,
      milestone_status: null,
      age: "4 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 8",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 7",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 7",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 18,
      milestone_status: null,
      age: "54 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 9",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 8",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 8",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 19,
      milestone_status: null,
      age: "5 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 10",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 9",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 9",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 20,
      milestone_status: null,
      age: "9 years",
      antigens: [
        {
          drug_id: 1305,
          drug_name: "HPV 1",
          window_period: "14 Years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 21,
      milestone_status: null,
      age: "12 years above",
      antigens: [
        {
          drug_id: 1307,
          drug_name: "Pfizer COVID-19",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 22,
      milestone_status: null,
      age: "114 months",
      antigens: [
        {
          drug_id: 1305,
          drug_name: "HPV 2",
          window_period: "14 Years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 23,
      milestone_status: null,
      age: "15 years",
      antigens: [
        {
          drug_id: 609,
          drug_name: "TD (0.5ml) 1",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1310,
          drug_name: "TD 1",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 24,
      milestone_status: null,
      age: "180.9 months",
      antigens: [
        {
          drug_id: 609,
          drug_name: "TD (0.5ml) 2",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1310,
          drug_name: "TD 2",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 25,
      milestone_status: null,
      age: "186 months",
      antigens: [
        {
          drug_id: 609,
          drug_name: "TD (0.5ml) 3",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1310,
          drug_name: "TD 3",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 26,
      milestone_status: null,
      age: "18 years above",
      antigens: [
        {
          drug_id: 1308,
          drug_name: "AstraZeneca Covid 19",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1309,
          drug_name: "Johnson & Johnson Covid 19",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 27,
      milestone_status: null,
      age: "20 years",
      antigens: [
        {
          drug_id: 609,
          drug_name: "TD (0.5ml) 4",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1310,
          drug_name: "TD 4",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    }
  ],
  male_schedule: [
    {
      visit: 1,
      milestone_status: null,
      age: "At birth",
      antigens: [
        {
          drug_id: 1283,
          drug_name: "BCG",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1284,
          drug_name: "OPV 0",
          window_period: "14 weeks",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 2,
      milestone_status: null,
      age: "6 weeks",
      antigens: [
        {
          drug_id: 1284,
          drug_name: "OPV 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1288,
          drug_name: "Penta 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1520,
          drug_name: "Rota 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1291,
          drug_name: "PCV 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 3,
      milestone_status: null,
      age: "10 weeks ",
      antigens: [
        {
          drug_id: 1284,
          drug_name: "OPV 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1288,
          drug_name: "Penta 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1520,
          drug_name: "Rota 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1291,
          drug_name: "PCV 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 4,
      milestone_status: null,
      age: "14 weeks",
      antigens: [
        {
          drug_id: 1284,
          drug_name: "OPV 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1288,
          drug_name: "Penta 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1291,
          drug_name: "PCV 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1301,
          drug_name: "IPV",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 5,
      milestone_status: null,
      age: "5 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 1",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 6,
      milestone_status: null,
      age: "6 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 2",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1300,
          drug_name: "Vit A 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 7,
      milestone_status: null,
      age: "7 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 3",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 8,
      milestone_status: null,
      age: "9 months",
      antigens: [
        {
          drug_id: 1302,
          drug_name: "MR 1",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1304,
          drug_name: "TCV",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 9,
      milestone_status: null,
      age: "1 year",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 1",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 1",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 10,
      milestone_status: null,
      age: "15 months",
      antigens: [
        {
          drug_id: 1302,
          drug_name: "MR 2",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 11,
      milestone_status: null,
      age: "18 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 3",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 2",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 2",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 12,
      milestone_status: null,
      age: "22 months",
      antigens: [
        {
          drug_id: 1296,
          drug_name: "MV 4",
          window_period: "36 Month",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 13,
      milestone_status: null,
      age: "2 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 4",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 3",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 3",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 14,
      milestone_status: null,
      age: "30 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 5",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 4",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 4",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 15,
      milestone_status: null,
      age: "3 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 6",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 5",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 5",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 16,
      milestone_status: null,
      age: "42 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 7",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 6",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 6",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 17,
      milestone_status: null,
      age: "4 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 8",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 7",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 7",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 18,
      milestone_status: null,
      age: "54 months",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 9",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 8",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 8",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 19,
      milestone_status: null,
      age: "5 years",
      antigens: [
        {
          drug_id: 1300,
          drug_name: "Vit A 10",
          window_period: "24 months",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 106,
          drug_name: "Albendazole (200mg tablet) 9",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 107,
          drug_name: "Albendazole (400mg tablet) 9",
          window_period: "5 years",
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 20,
      milestone_status: null,
      age: "12 years above",
      antigens: [
        {
          drug_id: 1307,
          drug_name: "Pfizer COVID-19",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    },
    {
      visit: 21,
      milestone_status: null,
      age: "18 years above",
      antigens: [
        {
          drug_id: 1308,
          drug_name: "AstraZeneca Covid 19",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        },
        {
          drug_id: 1309,
          drug_name: "Johnson & Johnson Covid 19",
          window_period: null,
          can_administer: null,
          status: null,
          date_administered: null,
          administered_by: null,
          location_administered: null,
          vaccine_batch_number: null,
          encounter_id: null,
          order_id: null
        }
      ]
    }
  ]
};

async function saveVaccineAdministeredDrugs(patientData) {
  const patient = JSON.parse(JSON.stringify(patientData));
  const store = useAdministerVaccineStore();
  if (!lodashExports.isEmpty(store.getAdministeredVaccines())) {
    const drugOrders = mapToOrders();
    const obs = await createObForEachDrugAdminstred();
    let vaccines = patient?.vaccineAdministration;
    vaccines.orders = [...vaccines?.orders, ...drugOrders];
    vaccines.voided = vaccines.voided.filter((drug) => drug.drug_name !== drugOrders[0]?.drug_name);
    vaccines.obs = [...vaccines?.obs, ...obs];
    store.setVaccineReload(!store.getVaccineReload());
    if (vaccines.orders.length > 0) {
      store.setLastVaccineAdminstredOnschedule(vaccines.orders);
    }
    updateVaccineStatus(patient, drugOrders[0]?.drug_name, "administered", obs[0]?.obs_datetime);
    await savePatientRecord(patient);
    toastSuccess("Saved successful");
    await checkIfLastVaccineAdministered(patient);
  }
}
function updateVaccineStatus(patient, drugName, newStatus, date) {
  patient.vaccineSchedule.vaccine_schedule.forEach((visit) => {
    visit.antigens.forEach((antigen) => {
      if (antigen.drug_name === drugName) {
        antigen.status = newStatus;
        antigen.date_administered = date;
      }
    });
  });
}
async function getOfflineVaccineSchedule(gender, birthdate) {
  if (gender !== "Undetermined") {
    const genericVaccineSchedule = await getGenericVaccineSchedule(gender);
    return await updateMilestoneStatus(new Date(birthdate), genericVaccineSchedule);
  }
}
async function getGenericVaccineSchedule(gender) {
  try {
    let genericVaccineSchedule;
    if (Service.getPouchDbStatus() && Service.getLanConnectionStatus()) {
      genericVaccineSchedule = GenericVaccineSchedule || [];
    } else {
      genericVaccineSchedule = await Service.getJson("eir/schedule/generic", { paginate: false });
    }
    if (genericVaccineSchedule.length > 0) {
      if (gender == "M") {
        return genericVaccineSchedule[0].genericVaccineSchedule.male_schedule;
      } else if (gender == "F") {
        return genericVaccineSchedule[0].genericVaccineSchedule.female_schedule;
      }
    } else if (useStatusStore().apiStatus) {
      genericVaccineSchedule = await Service.getJson("eir/schedule/generic", { paginate: false });
      if (gender == "M") {
        return genericVaccineSchedule.male_schedule;
      } else if (gender == "F") {
        return genericVaccineSchedule.female_schedule;
      }
    }
  } catch (error) {
    console.error("Error getting offline generic vaccine schedule", error);
    return [];
  }
}
async function updateMilestoneStatus(birthdate, schedule) {
  const today = /* @__PURE__ */ new Date();
  schedule?.forEach((visit) => {
    const milestoneAge = visit.age.toLowerCase();
    let targetDate = null;
    if (milestoneAge === "at birth") {
      targetDate = new Date(birthdate);
    } else if (milestoneAge.includes("weeks")) {
      const weeks = parseInt(milestoneAge.split(" ")[0], 10);
      targetDate = new Date(birthdate);
      targetDate.setDate(birthdate.getDate() + weeks * 7);
    } else if (milestoneAge.includes("months")) {
      const months = parseInt(milestoneAge.split(" ")[0], 10);
      targetDate = new Date(birthdate);
      targetDate.setMonth(birthdate.getMonth() + months);
    } else if (milestoneAge.includes("years")) {
      const years = parseInt(milestoneAge.split(" ")[0], 10);
      targetDate = new Date(birthdate);
      targetDate.setFullYear(birthdate.getFullYear() + years);
    }
    if (targetDate) {
      if (targetDate > today) {
        visit.milestone_status = "upcoming";
      } else if (targetDate.toDateString() === today.toDateString()) {
        visit.milestone_status = "current";
      } else {
        visit.milestone_status = "passed";
      }
    } else {
      visit.milestone_status = "unknown";
    }
  });
  return { vaccine_schedule: schedule };
}
function mapToOrders() {
  const store = useAdministerVaccineStore();
  return store.getAdministeredVaccines().map((drug) => {
    return {
      drug_name: drug?.drug_?.drug?.drug_name || drug?.drug_?.drug_name,
      drug_inventory_id: drug.drug_id,
      equivalent_daily_dose: 1,
      start_date: drug.date_administered,
      auto_expire_date: calculateExpireDate(drug.date_administered, 1),
      units: "ml",
      instructions: "",
      dose: 1,
      frequency: "Unknown",
      batch_number: drug.batch_number || "Unknown",
      prn: 0
    };
  });
}
async function createObForEachDrugAdminstred() {
  const store = useAdministerVaccineStore();
  const administeredVaccines = store.getAdministeredVaccines();
  const observations = await Promise.all(
    administeredVaccines.map(async (drug) => {
      return {
        concept_id: 2876,
        value_text: drug?.drug_?.drug?.drug_name || drug?.drug_?.drug_name,
        obs_datetime: drug.date_administered
      };
    })
  );
  return observations;
}
function calculateExpireDate(startDate, duration) {
  const date = new Date(startDate);
  date.setDate(date.getDate() + parseInt(duration));
  return HisDate.toStandardHisFormat(date);
}
function openNextVaccineAppoinment() {
  createModal(NextAppointment, { class: "otherVitalsModal"}, false);
}
async function checkIfLastVaccineAdministered(patient) {
  const store = useAdministerVaccineStore();
  const lastVaccineAdminstredOnschedule = store.getLastVaccineAdminstredOnschedule();
  if (lastVaccineAdminstredOnschedule.length > 0) {
    patient?.vaccineSchedule?.vaccine_schedule?.forEach((vaccineSchudule) => {
      if (checkIfAllVaccinesAdministeredOnSchedule(vaccineSchudule.antigens) == true) {
        vaccineSchudule.antigens.forEach((antigen) => {
          if (antigen.drug_id == lastVaccineAdminstredOnschedule[0].drug_inventory_id) {
            openNextVaccineAppoinment();
          }
        });
      }
    });
  }
  store.setLastVaccineAdminstredOnschedule([]);
}
function checkIfAllVaccinesAdministeredOnSchedule(antigens) {
  return antigens.every((antigen) => antigen.status === "administered");
}
async function voidVaccine(patientData, vaccine, reason) {
  const patient = JSON.parse(JSON.stringify(patientData));
  let vaccines = patient?.vaccineAdministration;
  const drugExists = vaccines.orders.some((drug) => drug.drug_name === vaccine.drug.drug_name);
  if (drugExists) {
    vaccines.orders = vaccines.orders.filter((drug) => drug.drug_name !== vaccine.drug.drug_name);
    vaccines.obs = vaccines.obs.filter((drug) => drug.value_text !== vaccine.drug.drug_name);
  } else {
    vaccines.voided = [...vaccines?.voided, { reason, order_id: vaccine.drug.order_id, drug_name: vaccine.drug.drug_name }];
  }
  updateVaccineStatus(patient, vaccine.drug.drug_name, "pending", "");
  await savePatientRecord(patient);
}
async function voidVaccineEncounter(encounterId, reason) {
  return Service.void(`/encounters/${encounterId}`, { reason });
}
function checkDrugName(drug) {
  if (isNameInList(drug.drug_name) == true) {
    return true;
  } else {
    return false;
  }
}
function isNameInList(name) {
  const nameList = ["Vit", "Albendazole"];
  const nameParts = name.toLowerCase().split(/[\s,()]+/);
  return nameList.some((listedName) => {
    const listedNameParts = listedName.toLowerCase().split(/[\s,()]+/);
    return listedNameParts.some((listedPart) => nameParts.some((namePart) => namePart.includes(listedPart) || listedPart.includes(namePart)));
  });
}
async function getMonthsList() {
  const data = await Service.getJson("immunization/months_picker");
  return data;
}
async function getVaccinesAdministered(start_date, end_date) {
  const data = await Service.getJson(`immunization/vaccines_administered`, { start_date, end_date });
  return data;
}
async function getAefiReport(start_date, end_date) {
  const data = await Service.getJson(`immunization/aefi_report`, { start_date, end_date });
  return data;
}
async function getunderfiveImmunizationsDrugs() {
  const data = await Service.getJson(`immunization/under_five_immunizations_drugs`);
  return data;
}
async function getImmunizationVaccineNames() {
  const data = await Service.getJson(`/immunization/vaccine_names`);
  return data;
}
function escapeCSV(str) {
  if (/[,"\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}
function exportReportToCSV() {
  try {
    const store = EIRreportsStore();
    const user_store = useUserStore();
    const { activePlatformProfile } = usePlatform();
    let CSVString = generateCSVStringForImmunizationMonthly(store.$state.immunizationMonthlyRepoartData);
    CSVString += "\n";
    CSVString += generateCSVStringForAEFIMonthly(store.$state.AEFIReportData);
    CSVString += "\n";
    CSVString += `
        Date Created: ${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}
        Report Period: ${store.$state.navigationPayload.subTxt}
        Site: ${user_store.$state.userFacilityName}`;
    const csvData = new Blob([CSVString], { type: "text/csv;charset=utf-8;" });
    const reportTitle = `${user_store.$state.userFacilityName}_${store.$state.navigationPayload.subTxt}_${store.$state.navigationPayload.title}`;
    if (activePlatformProfile.value.fileExport === FileExportType.WEB) {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(csvData);
      link.setAttribute("download", `${reportTitle}.csv`);
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (activePlatformProfile.value.fileExport === FileExportType.FILE_SYSTEM) {
      exportMobile(`${reportTitle}.csv`, csvData, "blob");
    } else {
      toastWarning("Platform not supported");
    }
  } catch (error) {
    console.error("Error exporting CSV:", error);
  }
}
function generateCSVStringForImmunizationMonthly(data) {
  let CSVString = "Category,Static <1y,Static >1y,Outreach <1y,Outreach >1y\n";
  for (const record of data) {
    const row = [
      escapeCSV(record.label),
      record.fixed.lessThan1y,
      record.fixed.moreThan1y,
      record.outreach.lessThan1y,
      record.outreach.moreThan1y
    ].join(",");
    CSVString += row + "\n";
  }
  return CSVString;
}
function generateCSVStringForAEFIMonthly(data) {
  let CSVString = "Cases," + data.vaccines.map((v) => escapeCSV(v.name)).join(",") + "\n";
  for (const category of data.categories) {
    CSVString += escapeCSV(category.name) + "\n";
    for (const caseItem of category.cases) {
      const rowData = [escapeCSV(caseItem.name), ...caseItem.data.map((d) => d.count)];
      CSVString += rowData.join(",") + "\n";
    }
  }
  return CSVString;
}

export { Appointment as A, NextAppointment as N, smsConfirmation as a, getMonthsList as b, getImmunizationVaccineNames as c, getVaccinesAdministered as d, exportReportToCSV as e, getunderfiveImmunizationsDrugs as f, getOfflineVaccineSchedule as g, getAefiReport as h, checkDrugName as i, voidVaccine as j, saveVaccineAdministeredDrugs as s, useImmunizationAppointMentStore as u, voidVaccineEncounter as v };
