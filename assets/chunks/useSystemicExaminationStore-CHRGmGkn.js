import { d as defineStore } from './pinia-Bqc2Rgok.js';

const defaultNeonatalSystemicExaminationForm = {
  respiratoryDistress: "",
  gasping: false,
  fastBreathing: false,
  nasalFlaring: false,
  chestIndrawing: false,
  stridor: false,
  grunting: false,
  stethoscopeAvailable: "",
  chestClear: false,
  unequalAirEntry: false,
  unilateralCrackles: false,
  unilateralWheeze: false,
  bilateralCracklesWheeze: false,
  stridorAuscultation: false,
  normalHeartSounds: false,
  murmurExtraSounds: false,
  notConfidentMurmurs: false,
  colorPink: false,
  colorBlue: false,
  colorPale: false,
  colorYellow: false,
  crtLessThan3: false,
  crt3OrMore: false,
  femoralPulsePalpable: false,
  femoralPulseWeak: false,
  notConfidentFemoralPulses: false,
  femoralPulseDifficult: false,
  chestSummaryNotes: "",
  abdomenSoftNormal: false,
  abdomenDistended: false,
  abdomenWallDefect: false,
  pruneBellySyndrome: false,
  abdomenMass: false,
  abdomenDistendedConfirm: "",
  abdomenShiny: "",
  abdomenColorChange: "",
  abdomenDistendedVeins: "",
  abdomenTender: "",
  hepatomegaly: "",
  splenomegaly: "",
  palpableKidneys: "",
  otherMasses: "",
  otherMassesDescription: "",
  umbilicusHealthy: false,
  umbilicusBleeding: false,
  umbilicusRedSkin: false,
  umbilicusMeconium: false,
  umbilicalHernia: false,
  umbilicusAbnormal: false,
  genitaliaMaleNormal: false,
  genitaliaFemaleNormal: false,
  genitaliaMaleAbnormal: false,
  genitaliaFemaleAbnormal: false,
  genitaliaAmbiguous: false,
  anusPatent: false,
  anusImperforate: false,
  anusAbnormal: false,
  abdomenSummaryNotes: "",
  toneAssessment: "",
  suckReflex: "",
  graspReflex: "",
  MoreReflex: "",
  neurologicalSummaryNotes: "",
  musculoskeletalDeformities: [],
  skinFindings: [],
  birthAsphyxiaSuspected: "",
  thompsonRespirationScore: "",
  thompsonSuckScore: "",
  thompsonMoroScore: "",
  thompsonGraspScore: "",
  thompsonFontanelleScore: "",
  thompsonToneScore: "",
  thompsonConsciousnessScore: "",
  thompsonFitsScore: "",
  thompsonPostureScore: ""
};
const neonatalSystemicExaminationFormKey = Symbol("neonatalSystemicExaminationForm");

const cloneDefaultForm = () => JSON.parse(JSON.stringify(defaultNeonatalSystemicExaminationForm));
const useSystemicExaminationStore = defineStore("neonatalSystemicExaminationStore", {
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

export { neonatalSystemicExaminationFormKey as n, useSystemicExaminationStore as u };
