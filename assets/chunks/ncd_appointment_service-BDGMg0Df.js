import { aY as AppEncounterService, u as useDemographicsStore, S as Service, aK as useClinicalDaysStore, H as HisDate, t as toastWarning, G as toastSuccess, K as ObservationService, b as EncounterTypeId, J as savePatientRecord } from '../index-CPakPmy3.js';

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
  async createAppointment() {
    const _appointment_ = [];
    const store = useClinicalDaysStore();
    store.assignedAppointmentsDates.forEach((appointment) => {
      if (appointment.markedNextApt == true) {
        const next_appointment_date = HisDate.toStandardHisFormat(appointment.date);
        _appointment_.push(next_appointment_date);
      }
    });
    await this.createEncounter();
    const a_obs = await this.buildValueDate("Appointment date", _appointment_[0]);
    const appointment_onbs = await this.saveObservationList([a_obs]);
    if (!appointment_onbs) return toastWarning("Unable set Next Appointment");
    toastSuccess("next Appointment Set Successfully");
    return [this.patientID, _appointment_[0]];
  }
  async createOfflineAppointment() {
    const _appointment_ = [];
    const store = useClinicalDaysStore();
    store.assignedAppointmentsDates.forEach((appointment) => {
      if (appointment.markedNextApt == true) {
        const next_appointment_date = HisDate.toStandardHisFormat(appointment.date);
        _appointment_.push(next_appointment_date);
      }
    });
    const a_obs = await this.buildValueDate("Appointment date", _appointment_[0]);
    const patient = await ObservationService.addObsToEncounterPatient([a_obs], EncounterTypeId.APPOINTMENT);
    await savePatientRecord(patient);
    toastSuccess("next Appointment Set Successfully");
    return _appointment_[0];
  }
  async getNextAppointment() {
    return AppEncounterService.getJson(`/programs/${this.programID}/patients/${this.patientID}/next_appointment_date`, { date: this.date });
  }
  async getDailyAppointments(date) {
    const programID = AppEncounterService.getProgramID();
    return AppEncounterService.getJson(`/programs/${programID}/booked_appointments`, { date, paginate: false });
  }
  static async getAppointments(date, end_date = "", srch_text = "") {
    const programID = AppEncounterService.getProgramID();
    return AppEncounterService.getJson(`/programs/${programID}/booked_appointments`, { date, end_date, srch_text, paginate: false });
  }
}

export { Appointment as A };
