import { S as Service, K as ObservationService } from '../index-CcMPhFiC.js';

class SmsService extends Service {
  programID;
  providerID;
  constructor() {
    super();
    this.providerID = Service.getUserID();
    this.programID = ObservationService.getProgramID();
  }
  static async appointment(patientID, AppointmentDate) {
    return super.postJson("send_sms", {
      "person_id": patientID,
      "appointment_date": AppointmentDate
    });
  }
  static async cancelappointment(patientID, AppointmentDate) {
    return super.postJson("cancel_appointment", {
      "person_id": patientID,
      "appointment_date": AppointmentDate
    });
  }
  static async setConfigurations(Configdata) {
    return super.postJson("sms_configuration", {
      "sms_gateway_url": Configdata.url,
      "sms_api_key": Configdata.apiKey,
      "sms_reminder": Configdata.smsReminder,
      "next_appointment_message": Configdata.reminderMessage,
      "cancel_appointment_message": Configdata.cancelMessage,
      "next_appointment_reminder_period": Configdata.reminderPeriod,
      "sms_activation": Configdata.smsActivation,
      "show_sms_popup": Configdata.smsPopup
    });
  }
  static async getConfigurations() {
    return super.getJson("configurations");
  }
  static async fetchphone(patientID) {
    return super.getJson("patient_phone", { "person_id": patientID });
  }
}

export { SmsService as S };
