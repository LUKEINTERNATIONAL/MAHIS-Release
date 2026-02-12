import { aY as AppEncounterService, aq as ConceptService } from '../index-NSeNS5TF.js';

class PatientComplaintsService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 122, providerID);
  }
  static async getComplaintsList(complaintType, filter = "") {
    return ConceptService.getConceptSet(complaintType, filter);
  }
  async fetchLatestTriageEncounter() {
    return await PatientComplaintsService.getObs({
      concept_id: await ConceptService.getConceptID("History of COVID-19 contact"),
      start_date: this.date,
      end_date: this.date,
      person_id: this.patientID
    });
  }
}

export { PatientComplaintsService as P };
