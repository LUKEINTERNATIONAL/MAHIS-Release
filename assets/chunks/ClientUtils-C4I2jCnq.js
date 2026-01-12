import { b2 as useTreatmentPlanStore, bd as useNCDMedicationsStore } from '../index-BlgLb150.js';

function resetPrescribedMedications() {
  useTreatmentPlanStore().clearSelectedMedicalDrugsList();
  useNCDMedicationsStore().clearMedicationDataStores();
}
class PatientSessionManager {
  static instance;
  currentPatientID = null;
  STORAGE_KEY = "current_patient_id";
  constructor() {
    this.loadStoredPatientID();
  }
  // Singleton pattern to ensure only one instance exists
  static getInstance() {
    if (!PatientSessionManager.instance) {
      PatientSessionManager.instance = new PatientSessionManager();
    }
    return PatientSessionManager.instance;
  }
  // Load patient ID from localStorage
  loadStoredPatientID() {
    try {
      const storedID = localStorage.getItem(this.STORAGE_KEY);
      this.currentPatientID = storedID;
    } catch (error) {
      console.error("Error loading patient ID from localStorage:", error);
      this.currentPatientID = null;
    }
  }
  // Save patient ID to localStorage
  savePatientID(patientID) {
    try {
      localStorage.setItem(this.STORAGE_KEY, patientID);
    } catch (error) {
      console.error("Error saving patient ID to localStorage:", error);
    }
  }
  // Remove patient ID from localStorage
  removePatientID() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error("Error removing patient ID from localStorage:", error);
    }
  }
  // Set current patient ID and handle patient change
  setCurrentPatientID(patientID) {
    if (this.currentPatientID !== null && this.currentPatientID !== patientID) {
      console.log(`Patient changed from ${this.currentPatientID} to ${patientID}. Resetting medications.`);
      resetPrescribedMedications();
    }
    this.currentPatientID = patientID;
    this.savePatientID(patientID);
  }
  // Get current patient ID
  getCurrentPatientID() {
    return this.currentPatientID;
  }
  // Clear current patient (for logout or session end)
  clearCurrentPatient() {
    this.currentPatientID = null;
    this.removePatientID();
    resetPrescribedMedications();
  }
  // Check if a patient session is active
  hasActiveSession() {
    return this.currentPatientID !== null;
  }
}
const patientSessionManager = PatientSessionManager.getInstance();

export { patientSessionManager as p };
