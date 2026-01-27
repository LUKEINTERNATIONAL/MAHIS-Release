import { d as defineStore } from './pinia-BgytB2RM.js';

const defaultNeonatalEnrollmentForm = {
  /* Mother's Information */
  motherPatientId: void 0,
  motherName: void 0,
  motherNationalId: void 0,
  /* Birth Details */
  hasTwin: "",
  twinPatientId: void 0,
  twinName: void 0,
  placeOfBirth: "",
  nameOfBirthFacility: "",
  typeOfBirth: "",
  birthWeight: "",
  timeOfBirth: "",
  /* Referral Information */
  referredFromOtherFacility: "",
  referredFrom: "",
  referringFacilityName: "",
  modeOfTransport: "",
  admittedFrom: "",
  /* Birth Assessment */
  criedAfterBirth: "",
  apgarScoreAt1: "",
  apgarScoreAt5: "",
  apgarScoreAt10: "",
  resuscitationMethods: [],
  /* Pregnancy */
  gestationWeeks: "",
  steroidsGiven: "",
  gestationMethodAssessment: "",
  ultraSoundScanning: "",
  onsetOfLabor: "",
  ruptureOfMembranes: "",
  durationOfRuptureMembranes: "",
  offensiveLiquor: "",
  modeOfDelivery: "",
  meconiumPresent: "",
  maternalAnalgesia: "",
  analgesiasDrug: "",
  anesthesiaUsed: "",
  teo: "",
  chlorohexidineCordCare: "",
  vitaminKGiven: "",
  dextroseGiven: "",
  /* Mother's enrollment details */
  motherStatus: "",
  motherHivStatus: "",
  lastHivTestDate: "",
  doHivRetest: "",
  babyGivenNvp: "",
  motherVdrlResult: "",
  motherTreatedForVdrl: "",
  babyTestedForHepatitis: "",
  allThreeDosesCompleted: "",
  motherHepatitisResult: "",
  /* Known medical conditions */
  knownMedicalConditions: [],
  tetanusDiphtheria: []
};
const neonatalEnrollmentFormKey = Symbol("neonatal-enrollment-form");

const cloneDefaultEnrollmentForm = () => JSON.parse(JSON.stringify(defaultNeonatalEnrollmentForm));
const useNeonatalEnrollmentStore = defineStore("neonatalEnrollmentStore", {
  state: () => ({
    neonatePatientId: void 0,
    currentStep: void 0,
    returnToEnrollment: false,
    motherPatientId: void 0,
    motherData: void 0,
    activeEnrollmentPatientId: null,
    enrollmentForm: cloneDefaultEnrollmentForm(),
    enrollmentFormCache: {}
  }),
  getters: {
    shouldReturnToEnrollment() {
      return this.returnToEnrollment === true && this.neonatePatientId !== void 0;
    },
    getMotherPatientId() {
      return this.motherPatientId;
    },
    getCurrentStep() {
      return this.currentStep;
    }
  },
  actions: {
    /**
     * Sets the context for creating a mother during neonatal enrollment
     * @param neonateId - The patient ID of the neonate
     * @param step - The current enrollment step to return to
     */
    setMotherCreationContext(neonateId, step) {
      this.neonatePatientId = neonateId;
      this.currentStep = step;
      this.returnToEnrollment = true;
    },
    /**
     * Sets the created mother's information
     * @param motherPatientId - The patient ID of the newly created mother
     * @param motherData - Full mother details object for auto-selection
     */
    setCreatedMother(motherPatientId, motherData) {
      this.motherPatientId = motherPatientId;
      this.motherData = motherData;
    },
    /**
     * Clears all enrollment context
     */
    clearEnrollmentContext() {
      this.neonatePatientId = void 0;
      this.currentStep = void 0;
      this.returnToEnrollment = false;
      this.motherPatientId = void 0;
      this.motherData = void 0;
    },
    initializeEnrollmentForm(patientId) {
      if (patientId == null) {
        this.activeEnrollmentPatientId = null;
        Object.assign(this.enrollmentForm, cloneDefaultEnrollmentForm());
        return;
      }
      this.activeEnrollmentPatientId = patientId;
      const cachedForm = this.enrollmentFormCache[String(patientId)];
      if (cachedForm) {
        Object.assign(this.enrollmentForm, cachedForm);
      } else {
        Object.assign(this.enrollmentForm, cloneDefaultEnrollmentForm());
      }
      this.saveEnrollmentSnapshot();
    },
    saveEnrollmentSnapshot() {
      if (this.activeEnrollmentPatientId == null) return;
      this.enrollmentFormCache[String(this.activeEnrollmentPatientId)] = JSON.parse(JSON.stringify(this.enrollmentForm));
    },
    resetEnrollmentForm() {
      Object.assign(this.enrollmentForm, cloneDefaultEnrollmentForm());
      this.saveEnrollmentSnapshot();
    },
    clearEnrollmentForm(patientId) {
      delete this.enrollmentFormCache[String(patientId)];
      if (this.activeEnrollmentPatientId === patientId) {
        this.resetEnrollmentForm();
      }
    }
  },
  persist: {
    paths: [
      "neonatePatientId",
      "currentStep",
      "returnToEnrollment",
      "motherPatientId",
      "motherData",
      "activeEnrollmentPatientId",
      "enrollmentForm",
      "enrollmentFormCache"
    ]
  }
});

export { neonatalEnrollmentFormKey as n, useNeonatalEnrollmentStore as u };
