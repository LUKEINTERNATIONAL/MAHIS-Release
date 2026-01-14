import { d as defineStore } from './pinia-xTR-gbcT.js';
import { a as defaultNeonatalReviewOfSystemsForm } from './NeonatalStepper-BRDzwe5s.js';

const cloneDefaultForm = () => JSON.parse(JSON.stringify(defaultNeonatalReviewOfSystemsForm));
const useReviewOfSystemsStore = defineStore("neonatalReviewOfSystemsStore", {
  state: () => ({
    activePatientId: null,
    formData: cloneDefaultForm(),
    storedForms: {}
  }),
  actions: {
    initializeForPatient(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.formData, cloneDefaultForm());
        return;
      }
      this.activePatientId = patientId;
      const key = String(patientId);
      const existingForm = this.storedForms[key];
      if (existingForm) {
        Object.assign(this.formData, existingForm);
      } else {
        Object.assign(this.formData, cloneDefaultForm());
      }
      this.saveSnapshot();
    },
    saveSnapshot() {
      if (this.activePatientId == null) return;
      const key = String(this.activePatientId);
      this.storedForms[key] = JSON.parse(JSON.stringify(this.formData));
    },
    resetActiveForm() {
      Object.assign(this.formData, cloneDefaultForm());
      this.saveSnapshot();
    },
    clearPatient(patientId) {
      delete this.storedForms[String(patientId)];
    }
  },
  persist: {
    paths: ["activePatientId", "formData", "storedForms"]
  }
});

export { useReviewOfSystemsStore as u };
