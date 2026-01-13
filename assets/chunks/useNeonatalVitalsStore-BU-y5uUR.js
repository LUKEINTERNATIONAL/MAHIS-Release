import { d as defineStore } from './pinia-D-q2_lrU.js';
import { d as defaultNeonatalVitalsForm } from './NeonatalStepper-BRKo3iim.js';

const cloneDefaultForm = () => JSON.parse(JSON.stringify(defaultNeonatalVitalsForm));
const useNeonatalVitalsStore = defineStore("neonatalVitalsStore", {
  state: () => ({
    activePatientId: null,
    formData: cloneDefaultForm(),
    formCache: {}
  }),
  actions: {
    initializeForPatient(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.formData, cloneDefaultForm());
        return;
      }
      this.activePatientId = patientId;
      const cacheKey = String(patientId);
      const cachedForm = this.formCache[cacheKey];
      if (cachedForm) {
        Object.assign(this.formData, cachedForm);
      } else {
        Object.assign(this.formData, cloneDefaultForm());
      }
      this.saveSnapshot();
    },
    saveSnapshot() {
      if (this.activePatientId == null) return;
      const cacheKey = String(this.activePatientId);
      this.formCache[cacheKey] = JSON.parse(JSON.stringify(this.formData));
    },
    resetActiveForm() {
      Object.assign(this.formData, cloneDefaultForm());
      this.saveSnapshot();
    },
    clearPatient(patientId) {
      delete this.formCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetActiveForm();
      }
    }
  },
  persist: {
    paths: ["activePatientId", "formData", "formCache"]
  }
});

export { useNeonatalVitalsStore as u };
