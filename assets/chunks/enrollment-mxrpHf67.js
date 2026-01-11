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
  tetanusDiphtheria: []
};
const neonatalEnrollmentFormKey = Symbol("neonatal-enrollment-form");

export { defaultNeonatalEnrollmentForm as d, neonatalEnrollmentFormKey as n };
