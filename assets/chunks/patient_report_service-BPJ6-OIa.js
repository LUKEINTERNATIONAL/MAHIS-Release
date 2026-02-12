import { R as ReportService, aZ as PROGRAM_ID } from '../index-WCwjUkov.js';

class PatientReportService extends ReportService {
  constructor() {
    super();
  }
  static getLocationName() {
    return sessionStorage.getItem("locationName");
  }
  getBookedAppointments(date) {
    return this.getReport(`programs/${PROGRAM_ID}/scheduled_appointments`, { date });
  }
  getViralLoadResults(range) {
    return this.getReport(`/programs/${PROGRAM_ID}/reports/high_vl_patients`, { range });
  }
  getOtherOutcome(outcome) {
    return this.getReport("patient_outcome_list", { outcome });
  }
  getPatientVisitTypes() {
    return this.getReport("patient_visit_types");
  }
  getClientsDueForVl() {
    return this.getReport("clients_due_vl");
  }
  getClientRentention() {
    return this.getReport(`/programs/${PROGRAM_ID}/reports/retention`);
  }
  getExternalConsultationClients() {
    return this.getReport(`${PROGRAM_ID}/external_consultation_clients`);
  }
  getMissedAppointments() {
    return this.getReport("missed_appointments");
  }
  getPregnantWomen() {
    return this.getReport(`/programs/${PROGRAM_ID}/reports/pregnant_patients`);
  }
  getArchivingCandidates() {
    return this.getReport(`programs/${PROGRAM_ID}/reports/archiving_candidates`, {
      start_date: this.date
    });
  }
  getIncompleteVisits() {
    return this.getReport("incomplete_visits", {
      tool_name: "INCOMPLETE VISITS"
    });
  }
  getVisitStats() {
    return this.getReport(`programs/${PROGRAM_ID}/reports/visits`, {
      name: "visits",
      start_date: this.startDate,
      end_date: this.endDate
    });
  }
}

export { PatientReportService as P };
