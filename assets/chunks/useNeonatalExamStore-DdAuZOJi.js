import { d as defineStore } from './pinia-D-q2_lrU.js';

const useNeonatalExamStore = defineStore("neonatalExamStore", {
  state: () => ({
    // Activity
    activityAssessment: null,
    // Head/Color
    fontanelleAssessment: null,
    massInHeadAssessment: null,
    isBabyYellow: null,
    isBabyPallorPink: null,
    hasBabyCyanosis: null,
    hasBabyOedema: null,
    // Cardiovascular Assessment
    heartSoundsAssessment: null,
    hasCardiacAbnormality: null,
    capillaryRefillTime: null,
    femoralPulses: null,
    // Genital and Anus Assessment
    genitaliaAssessment: null,
    anusAssessment: null,
    hasMeconiumPassed: null,
    // Cleft Lip/Palate
    cleftAssessment: null,
    hasCleftLip: null,
    hasCleftPalate: null,
    // Other Congenital Abnormalities
    hasCongenitalAbnormalities: null,
    abnormalitiesNotes: "",
    current_patient_ID: null
  }),
  actions: {
    // --- Activity Actions ---
    setActivityAssessment(data) {
      this.activityAssessment = data;
    },
    // --- Head/Color Actions ---
    setFontanelleAssessment(data) {
      this.fontanelleAssessment = data;
    },
    setMassInHeadAssessment(data) {
      this.massInHeadAssessment = data;
    },
    setIsBabyYellow(value) {
      this.isBabyYellow = value;
    },
    setIsBabyPallorPink(value) {
      this.isBabyPallorPink = value;
    },
    setHasBabyCyanosis(value) {
      this.hasBabyCyanosis = value;
    },
    setHasBabyOedema(value) {
      this.hasBabyOedema = value;
    },
    // --- Cleft Lip/Palate Actions ---
    setCleftAssessment(data) {
      this.cleftAssessment = data;
    },
    // --- Congenital Abnormalities Actions ---
    setHasCongenitalAbnormalities(value) {
      this.hasCongenitalAbnormalities = value;
    },
    setAbnormalitiesNotes(notes) {
      this.abnormalitiesNotes = notes;
    },
    // --- Cardiovascular Actions ---
    setHeartSoundsAssessment(data) {
      this.heartSoundsAssessment = data;
    },
    setHasCardiacAbnormality(value) {
      this.hasCardiacAbnormality = value;
    },
    setCapillaryRefillTime(data) {
      this.capillaryRefillTime = data;
    },
    setFemoralPulses(data) {
      this.femoralPulses = data;
    },
    // --- Genital and Anus Actions ---
    setGenitaliaAssessment(data) {
      this.genitaliaAssessment = data;
    },
    setAnusAssessment(data) {
      this.anusAssessment = data;
    },
    setHasMeconiumPassed(value) {
      this.hasMeconiumPassed = value;
    },
    // --- Cleft Lip/Palate Actions ---
    setHasCleftLip(value) {
      this.hasCleftLip = value;
    },
    setHasCleftPalate(value) {
      this.hasCleftPalate = value;
    },
    // --- Utility Action ---
    /**
     * Sets the current patient ID. If the new ID is different from the current one,
     * all neonatal exam data is reset to ensure data consistency for the new patient.
     * @param patientID The new patient ID to set.
     */
    setCurrentPatientID(patientID) {
      if (this.current_patient_ID !== patientID) {
        this.$reset();
        this.current_patient_ID = patientID;
        console.log(`Switched patient context. Exam data reset and new patient ID set: ${patientID}`);
      } else {
        this.current_patient_ID = patientID;
        console.log(`Patient ID is already set to: ${patientID}`);
      }
    },
    // --- Utility Action ---
    resetExamData() {
      this.$reset();
      console.log("Neonatal Exam Data has been reset.");
    }
  },
  persist: true
});

export { useNeonatalExamStore as u };
