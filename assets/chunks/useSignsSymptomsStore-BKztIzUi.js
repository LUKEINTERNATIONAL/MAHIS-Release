import { d as defineStore } from './pinia-Bmkga1nW.js';
import { b as defaultNeonatalSignsSymptomsForm } from './NeonatalStepper-gJVDjU6C.js';

const cloneDefaultForm = () => JSON.parse(JSON.stringify(defaultNeonatalSignsSymptomsForm));
const useSignsSymptomsStore = defineStore("neonatalSignsSymptomsStore", {
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

export { useSignsSymptomsStore as u };
