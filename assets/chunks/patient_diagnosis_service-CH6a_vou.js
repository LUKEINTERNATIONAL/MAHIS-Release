import { aY as AppEncounterService, S as Service, aq as ConceptService } from '../index-BlgLb150.js';

class PatientDiagnosisService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 8, providerID);
  }
  static async getDiagnosis(filter = "", page = 1, limit = 10) {
    if (Service.getLanConnectionStatus() || Service.getPouchDbStatus()) {
      return await ConceptService.getConceptSet("Qech outpatient diagnosis list");
    } else {
      const conceptSetId = await ConceptService.getConceptID("Qech outpatient diagnosis list");
      return AppEncounterService.getJson("diagnosis", {
        id: conceptSetId,
        name: filter,
        page,
        page_size: limit
      });
    }
  }
}

export { PatientDiagnosisService as P };
