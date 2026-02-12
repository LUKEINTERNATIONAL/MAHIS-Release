import { S as Service, H as HisDate, ai as ProgramService, W as ProgramId, aY as AppEncounterService, b as EncounterTypeId, E as EncounterService, aq as ConceptService, a6 as useUserStore, K as ObservationService } from '../index-WCwjUkov.js';
import { I as IMAGES } from './images-DYlnzYtj.js';

const toneAssessmentLabels = {
  normal: "Normal tone, movement in all limbs",
  hypertonia: "Increased tone + Hypertonia (stiff)",
  hypotonia: "Reduced tone + Hypotonia (floppy)",
  flaccid: "Flaccid (completely floppy)"
};
const suckReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent +/- Bites"
};
const graspReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent"
};
const moroReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent"
};
const musculoskeletalDeformityLabels = {
  upper_limb_injury: "Birth injury (upper limbs) e.g Erb's palsy",
  lower_limb_injury: "Birth injury (lower limbs) e.g fracture",
  deformity_talipes: "Musculoskeletal deformities e.g talipes",
  leg_length_difference: "Legs are of different lengths",
  none: "None observed"
};
const skinFindingLabels = {
  pustules: "Pustules all over",
  abscess: "Big boil / Abscess",
  uneven_folds: "Uneven skin folds on thighs",
  mongolian_spot: "Mongolian blue spot",
  bruising: "Bruising",
  petechiae: "Petechiae",
  normal: "Normal skin"
};

const meconiumTimingLabels = {
  within_24_hours: "Within 24 hours",
  more_than_24_hours: "More than 24 hours"
};
const stoolColorLabels = {
  white: "White",
  yellow: "Yellow",
  yellowish_green: "Yellowish-green",
  green: "Green",
  normal: "Normal"
};
const stoolConsistencyLabels = {
  loose: "Loose",
  soft: "Soft",
  hard: "Hard"
};
const urineColorLabels = {
  clear: "Clear",
  cloudy: "Cloudy",
  bloody: "Bloody",
  dark: "Dark",
  pus: "Pus"
};
const feedingTypeLabels = {
  formula: "Formula",
  breast_milk: "Breast Milk",
  mixed_feeds: "Mixed Feeds"
};
const feedingModeLabels = {
  breastfeeding: "Breastfeeding",
  cup: "Cup",
  ngt: "NGT",
  syringe: "Syringe"
};
const feedingFrequencyLabels = {
  two_hourly: "2 hourly",
  three_hourly: "3 hourly",
  others: "Others"
};
const feedingEffortLabels = {
  fatigue: "Fatigue",
  sweating: "Sweating",
  cyanosis: "Cyanosis",
  relatively_effortless: "Relatively Effortless"
};
const weightTrendLabels = {
  weight_loss_above_10: "Weight loss > 10%",
  weight_loss_below_10: "Weight loss < 10%",
  weight_loss_none: "None",
  weight_loss_unknown: "Unknown"
};
const umbilicalConditionLabels = {
  normal: "Healthy & clean",
  bleeding: "Bleeding",
  red_skin_all_around_umbilicus: "Red skin all around umblicus",
  meconium_stained: "Meconium stained",
  umbilical_hernia: "Umblical hernia",
  abnormal_looking: "Abnormal looking"
};

const neonatalGeneralExaminationFormKey = Symbol("neonatalGeneralExaminationForm");
const congenitalAbnormalityLabels = {
  spina_bifida: "Mylomeningocele / Spina Bifida",
  hirschsprungs: "Hirschsprung's Disease",
  congenital_neck_anomaly: "Congenital Neck Anomaly",
  other: "Other"
};
const neonatalGeneralExaminationSections = [
  {
    title: "General Examination",
    subtitle: "",
    formData: [
      {
        componentType: "listSelectionField",
        name: "activityAssessment",
        header: "How is the baby's activity?",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Alert, active, appropriate (normal)", value: "Alert" },
          { label: "Irritable, hyperalert or inconsolable", value: "Irrit" },
          { label: "Lethargic, quiet, decreased activity", value: "Leth" },
          { label: "Seizures, convulsions, or twitchings", value: "Convulsions" },
          { label: "Coma (unresponsive)", value: "Coma" }
        ],
        validation: (value) => !value ? "Activity assessment is required. Please select an option." : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Fontanelle",
    formData: [
      {
        componentType: "listSelectionField",
        name: "fontanelleAssessment",
        header: "FEEL the fontanelle",
        subtitle: "Assess the fontanelle condition",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Flat, Not Tense (normal)", value: "Flat" },
          { label: "Sunken", value: "Sunk" },
          { label: "Bulging/Tense", value: "Bulg" }
        ],
        validation: (value) => !value ? "Fontanelle assessment is required" : null
      },
      {
        componentType: "listSelectionField",
        name: "massInHeadAssessment",
        header: "Mass in the head",
        subtitle: "Check for any masses in the head",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Caput", value: "caput" },
          { label: "Cephalohematoma", value: "cephalohematoma" },
          { label: "Subgalea hemorrhage", value: "subgalea" },
          { label: "Normal", value: "normal" }
        ],
        validation: (value) => !value ? "Mass in the head assessment is required" : null
      },
      {
        componentType: "radioButtonField",
        name: "isBabyYellow",
        header: "Is the baby yellow?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby is yellow" : null,
        showClearButton: true
      },
      {
        componentType: "radioButtonField",
        name: "isBabyPallorPink",
        header: "Is the baby Pallor Pink?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby is pallor pink" : null,
        showClearButton: true
      },
      {
        componentType: "radioButtonField",
        name: "hasBabyCyanosis",
        header: "Does the baby have cyanosis?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby has cyanosis" : null,
        showClearButton: true
      },
      {
        componentType: "radioButtonField",
        name: "hasBabyOedema",
        header: "Does the baby have oedema?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if the baby has oedema" : null,
        showClearButton: true
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Capillary Refill Time (CRT)",
    formData: [
      {
        componentType: "listSelectionField",
        name: "capillaryRefillTime",
        header: "",
        subtitle: "Do this by pressing over the sternum for 5 seconds & release. \n How long does it ake for skin to return to original color?",
        titleStyle: "tonal",
        helperText: "Select one",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Less than 3 seconds", value: "Less than 3 seconds" },
          { label: "3 or more seconds", value: "3 or more seconds" }
        ],
        validation: (value) => !value ? "Capillary refill time is required" : null
      },
      {
        componentType: "listSelectionField",
        name: "femoralPulses",
        header: "Femoral pulse",
        subtitle: "Press over the center of the line at the top of the thighs",
        helperText: "Select one",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Palpable", value: "palpable" },
          { label: "Weak or absent", value: "weak" },
          { label: "I am not confident feeling the femoral pulses", value: "I am not confident feeling the femoral pulses" },
          { label: "Difficult to feel", value: "Difficult to feel" }
        ],
        validation: (value) => !value ? "Pulse assessment is required" : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Genitalia",
    formData: [
      {
        componentType: "listSelectionField",
        name: "genitaliaAssessment",
        header: "Genitalia examination",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Normal male genitalia", value: "Normal male" },
          { label: "Normal female genitalia", value: "Normal female" },
          { label: "Abnormal Male genitalia", value: "Abnormal Male genitalia" },
          { label: "Abnormal Female genitalia", value: "Abnormal Female genitalia" },
          { label: "Ambiguous Genitalia (not sure)", value: "Ambiguous Genitalia (not sure)" }
        ],
        validation: (value) => !value ? "Genitalia assessment is required" : null
      },
      {
        componentType: "listSelectionField",
        name: "anusPatent",
        header: "Anus",
        subtitle: "Check the babies anus",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Patent (Normal)", value: "Patent (Normal)" },
          { label: "Imperforate", value: "Imperforate" },
          { label: "Abnormal", value: "Abnormal" }
        ],
        validation: (value) => !value ? "Genitalia assessment is required" : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Cleft Lip & Palate",
    formData: [
      {
        componentType: "illustration",
        name: "cleftIllustration",
        category: "Cleft Lip & Palate",
        title: "Look at the lip and palate, is it intact?",
        imageSrc: IMAGES.banners.cleft,
        imageAlt: "Example of cleft lip and palate",
        caption: "Select one."
      },
      {
        componentType: "listSelectionField",
        name: "cleftLipPalateAssessment",
        header: "",
        type: "single",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Palate and lip intact (normal)", value: "normal" },
          { label: "Cleft palate", value: "cleft_palate" },
          { label: "Cleft lip", value: "cleft_lip" },
          { label: "Cleft lip and palate", value: "cleft_lip_and_palate" }
        ],
        validation: (value) => !value ? "Cleft lip and palate assessment is required" : null
      }
    ]
  },
  {
    title: "General Examination",
    subtitle: "Congenital Abnormalities",
    formData: [
      {
        componentType: "radioButtonField",
        name: "hasCongenitalAbnormalities",
        header: "Are there any congenital abnormalities?",
        type: "standard",
        allowDeselect: false,
        padding: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ],
        validation: (value) => !value ? "Please indicate if there are congenital abnormalities" : null,
        showClearButton: true
      },
      {
        componentType: "listSelectionField",
        name: "congenitalAbnormalitiesType",
        header: "Type of congenital abnormality",
        subtitle: "Select ONE",
        titleStyle: "tonal",
        type: "single",
        allowDeselect: false,
        showCheckmark: true,
        padding: true,
        options: [
          { label: congenitalAbnormalityLabels.spina_bifida, value: "spina_bifida" },
          { label: congenitalAbnormalityLabels.hirschsprungs, value: "hirschsprungs" },
          { label: congenitalAbnormalityLabels.congenital_neck_anomaly, value: "congenital_neck_anomaly" },
          { label: congenitalAbnormalityLabels.other, value: "other" }
        ],
        validation: (value, formValues) => {
          if (formValues?.hasCongenitalAbnormalities === "yes" && !value) {
            return "Select the type of congenital abnormality";
          }
          return null;
        },
        condition: (formValues) => formValues.hasCongenitalAbnormalities === "yes"
      },
      {
        componentType: "textAreaField",
        name: "congenitalAbnormalitiesDescription",
        header: "Describe the congenital abnormality",
        placeholder: "Enter detailed description if you selected Other",
        minHeight: 120,
        padding: true,
        validation: (value, formValues) => {
          if (formValues?.congenitalAbnormalitiesType === "other" && !value) {
            return "Please describe the congenital abnormality";
          }
          return null;
        },
        condition: (formValues) => formValues.congenitalAbnormalitiesType === "other"
      }
    ]
  },
  {
    title: "Summary",
    subtitle: "Review general examination findings",
    description: "Review all examination findings before proceeding",
    formData: [
      {
        componentType: "summaryField",
        name: "generalExaminationSummary",
        title: "General Examination Summary",
        subtitle: "Auto-generated from the examination findings",
        description: "Confirm that the values below match your observations before proceeding.",
        emptyStateMessage: "No examination findings captured yet.",
        autoSummary: {
          enabled: true,
          scope: "beforeCurrent",
          showMissingAsDash: false,
          respectSkipCondition: true
        }
      }
    ]
  }
];
function getNextGeneralExaminationSectionIndex(currentIndex, allExamData) {
  const nextIndex = currentIndex + 1;
  if (nextIndex >= neonatalGeneralExaminationSections.length) {
    return null;
  }
  const nextSection = neonatalGeneralExaminationSections[nextIndex];
  if (nextSection.skipCondition && nextSection.skipCondition(allExamData)) {
    return getNextGeneralExaminationSectionIndex(nextIndex, allExamData);
  }
  return nextIndex;
}
function getPreviousGeneralExaminationSectionIndex(currentIndex, allExamData) {
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return null;
  }
  const prevSection = neonatalGeneralExaminationSections[prevIndex];
  if (prevSection.skipCondition && prevSection.skipCondition(allExamData)) {
    return getPreviousGeneralExaminationSectionIndex(prevIndex, allExamData);
  }
  return prevIndex;
}

const TYPE_OF_FEED_CONCEPT_MAP = {
  formula: ["Formula", "Formula feeds", "FORMULA FEEDS"],
  breast_milk: ["Breast Milk", "Breastfeeding", "Breast feeding", "BREASTFEEDING"],
  mixed_feeds: ["Mixed Feeds", "Mixed feeding", "MIXED FEEDING"]
};
const resolveTypeOfFeedConceptName = (rawValue) => {
  if (rawValue === void 0 || rawValue === null || rawValue === "") {
    return void 0;
  }
  const normalized = String(rawValue).toLowerCase();
  const mappedCandidates = TYPE_OF_FEED_CONCEPT_MAP[normalized];
  const mapped = mappedCandidates?.[0];
  if (!mappedCandidates?.length) {
    console.warn(`[NeonatalReviewOfSystems] No concept mapping for Type of feed value "${rawValue}"`);
  }
  return mapped;
};
const resolveMappedLabel = (value, labels) => {
  if (value === void 0 || value === null || value === "") {
    return void 0;
  }
  const key = String(value);
  return labels?.[key] ?? key;
};
const resolveCodedAnswerConceptId = async (value) => {
  if (typeof value === "number") return value;
  const strict = await ConceptService.getConceptID(value, true);
  if (typeof strict === "number") return strict;
  const relaxed = await ConceptService.getConceptID(value, false);
  if (typeof relaxed === "number") return relaxed;
  return void 0;
};
const resolveObsLocationId = () => {
  try {
    const userStore = useUserStore();
    return userStore?.facilityLocation?.code ?? Service.getUserLocationId();
  } catch {
    return Service.getUserLocationId();
  }
};
class NeonatalService extends Service {
  /**
   * Enrolls a neonate in the neonatal program with complete enrollment data
   *
   * @param patientId - Patient ID to enroll
   * @param enrollmentData - Full enrollment form data
   * @param date - Date of enrollment (defaults to session date)
   * @returns Enrollment response with patient_program details
   */
  static async enrollNeonate(patientId, enrollmentData, date = HisDate.sessionDate()) {
    const observations = await this.buildEnrollmentObservations(enrollmentData, date);
    const payload = {
      patient_id: patientId,
      date_enrolled: date,
      location_id: Service.getUserLocationId(),
      encounter_datetime: (/* @__PURE__ */ new Date()).toISOString(),
      observations
    };
    return this.postJson("/neonatal/enroll", payload);
  }
  /**
   * Builds observations array from enrollment form data
   * Maps form fields to OpenMRS observations
   *
   * @param data - Enrollment form data
   * @param date - Observation date
   * @returns Array of observation objects
   */
  static async buildEnrollmentObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const pushObservation = async (concept, factory) => {
      try {
        observations.push(await factory());
      } catch (error) {
        console.warn(`[NeonatalEnrollment] Skipping concept "${concept}":`, error);
      }
    };
    const pushCoded = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueCoded(concept, value, date));
      }
    };
    const pushText = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueText(concept, value, date));
      }
    };
    const pushNumber = async (concept, rawValue, transform) => {
      if (!hasValue(rawValue)) return;
      const numeric = typeof rawValue === "number" ? rawValue : parseFloat(String(rawValue));
      if (isNaN(numeric)) return;
      const finalValue = transform ? transform(numeric) : numeric;
      await pushObservation(concept, () => ObservationService.buildValueNumber(concept, finalValue, null, null, date));
    };
    const pushDate = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueDate(concept, value, date));
      }
    };
    await pushCoded("Multiple birth", data.hasTwin);
    await pushText("Place of birth", data.placeOfBirth);
    await pushText("Name of birth facility", data.nameOfBirthFacility);
    await pushText("Type of birth", data.typeOfBirth);
    await pushNumber("Birth weight", data.birthWeight, (value) => value / 1e3);
    await pushText("Time of birth", data.timeOfBirth);
    await pushCoded("Referred", data.referredFromOtherFacility);
    await pushText("Referring facility name", data.referringFacilityName);
    await pushText("Referred from", data.referredFrom);
    await pushText("Mode of transport", data.modeOfTransport);
    await pushText("Admitted from", data.admittedFrom);
    await pushCoded("Cried after birth", data.criedAfterBirth);
    await pushNumber("APGAR score at 1 minute", data.apgarScoreAt1);
    await pushNumber("APGAR score at 5 minutes", data.apgarScoreAt5);
    await pushNumber("APGAR score at 10 minutes", data.apgarScoreAt10);
    if (data.resuscitationMethods?.length) {
      for (const method of data.resuscitationMethods) {
        await pushCoded("Resuscitation method", method);
      }
    }
    if (data.motherPatientId) {
      await pushText("Mother identifier", data.motherPatientId.toString());
    }
    await pushText("Mother name", data.motherName);
    await pushText("Mother national ID", data.motherNationalId);
    await pushNumber("Gestation in weeks", data.gestationWeeks);
    await pushCoded("Steroids given", data.steroidsGiven);
    await pushText("Gestation method assessment", data.gestationMethodAssessment);
    await pushText("Ultra sound scanning - USS", data.ultraSoundScanning);
    await pushDate("Onset of labor", data.onsetOfLabor);
    await pushCoded("Rupture of membranes", data.ruptureOfMembranes);
    await pushText("Duration of rupture of membranes", data.durationOfRuptureMembranes);
    await pushCoded("Offensive liquor", data.offensiveLiquor);
    await pushText("Mode of delivery", data.modeOfDelivery);
    await pushCoded("Meconium present", data.meconiumPresent);
    await pushCoded("Maternal analgesia", data.maternalAnalgesia);
    await pushText("Analgesia drug", data.analgesiasDrug);
    await pushCoded("Anesthesia used", data.anesthesiaUsed);
    await pushCoded("TEO", data.teo);
    await pushCoded("Chlorohexidine cord care", data.chlorohexidineCordCare);
    await pushCoded("Vitamin K given", data.vitaminKGiven);
    await pushCoded("Dextrose 10% given", data.dextroseGiven);
    await pushCoded("Mother status", data.motherStatus);
    await pushCoded("Mother HIV status", data.motherHivStatus);
    await pushDate("Last HIV test date", data.lastHivTestDate);
    await pushCoded("Do HIV re-test", data.doHivRetest);
    await pushCoded("Baby given NVP", data.babyGivenNvp);
    await pushCoded("Mother VDRL/Syphilis result", data.motherVdrlResult);
    await pushCoded("Mother treated for VDRL/Syphilis", data.motherTreatedForVdrl);
    await pushCoded("Baby tested for Hepatitis", data.babyTestedForHepatitis);
    await pushCoded("All three doses completed", data.allThreeDosesCompleted);
    await pushCoded("Mother Hepatitis result", data.motherHepatitisResult);
    if (data.tetanusDiphtheria?.length) {
      for (const dose of data.tetanusDiphtheria) {
        await pushText("Tetanus Diphtheria", dose);
      }
    }
    if (data.knownMedicalConditions?.length) {
      for (const condition of data.knownMedicalConditions) {
        await pushCoded("Known medical condition", condition);
      }
    }
    return observations;
  }
  /**
   * Checks if a patient is enrolled in the neonatal program
   *
   * @param patientId - Patient ID to check
   * @returns Enrollment status and data
   */
  static async checkEnrollment(patientId) {
    try {
      const programs = await ProgramService.getPatientPrograms(patientId);
      const neonatalProgram = Array.isArray(programs) ? programs.find((program) => {
        const programId = program?.program?.program_id ?? program?.program_id;
        const programName = (program?.program?.name ?? program?.name ?? "").trim().toUpperCase();
        return programId === ProgramId.NEONATAL_PROGRAM || programName === "NEONATAL PROGRAM";
      }) : null;
      if (!neonatalProgram) {
        return { enrolled: false };
      }
      return {
        enrolled: true,
        enrollment_data: neonatalProgram
      };
    } catch (error) {
      console.error("Failed to check neonatal enrollment via program service", error);
      return { enrolled: false };
    }
  }
  /**
   * Gets comprehensive patient summary for neonatal program
   * Includes demographics, vitals, assessments, treatments, etc.
   *
   * @param patientId - Patient ID
   * @param date - Date for summary (defaults to session date)
   * @returns Patient summary object
   */
  static async getPatientSummary(patientId, date = HisDate.sessionDate()) {
    return this.getJson(`/neonatal/patient/${patientId}`, { date });
  }
  /**
   * Gets the next encounter in the neonatal workflow for a patient
   *
   * @param patientId - Patient ID
   * @param date - Date for workflow (defaults to session date)
   * @returns Next encounter type or null if workflow complete
   */
  static async getNextEncounter(patientId, date = HisDate.sessionDate()) {
    try {
      return await this.getJson(`/neonatal/next_encounter/${patientId}`, { date });
    } catch (error) {
      if (error.status === 204) {
        return null;
      }
      throw error;
    }
  }
  /**
   * Gets all remaining encounters in the workflow
   *
   * @param patientId - Patient ID
   * @param date - Date for workflow (defaults to session date)
   * @returns Array of remaining encounter types
   */
  static async getRemainingEncounters(patientId, date = HisDate.sessionDate()) {
    return this.getJson(`/neonatal/remaining_encounters/${patientId}`, { date });
  }
  /**
   * Checks if the workflow is complete for a patient on a given date
   *
   * @param patientId - Patient ID
   * @param date - Date to check (defaults to session date)
   * @returns Workflow completion status and completed encounters
   */
  static async isWorkflowComplete(patientId, date = HisDate.sessionDate()) {
    return this.getJson(`/neonatal/workflow_complete/${patientId}`, { date });
  }
  /**
   * Gets encounters saved for a patient on a specific date
   *
   * @param patientId - Patient ID
   * @param date - Date to check (defaults to session date)
   * @returns Array of encounter type names
   */
  static async getSavedEncounters(patientId, date = HisDate.sessionDate()) {
    return this.getJson(`/neonatal/saved_encounters/${patientId}`, { date });
  }
  /**
   * Gets patient labels/alerts
   *
   * @param patientId - Patient ID
   * @param date - Date for labels (defaults to session date)
   * @returns Array of label strings
   */
  static async getPatientLabels(patientId, date = HisDate.sessionDate()) {
    return this.getJson(`/neonatal/labels/${patientId}`, { date });
  }
  /**
   * Gets list of enrolled patients
   *
   * @param filters - Optional filters (date, page, per_page)
   * @returns Array of enrolled patients
   */
  static async getEnrolledPatients(filters = {}) {
    return this.getJson("/neonatal/enrolled_patients", filters);
  }
  /**
   * Searches for neonatal patients
   *
   * @param searchParams - Search parameters (name, identifier, date_enrolled)
   * @returns Array of matching patients
   */
  static async searchPatients(searchParams) {
    return this.getJson("/neonatal/search", searchParams);
  }
  /**
   * Gets patients who visited on a specific date
   *
   * @param date - Visit date (defaults to session date)
   * @returns Visit summary with patient list
   */
  static async getVisits(date = HisDate.sessionDate()) {
    return this.getJson("/neonatal/visits", { date });
  }
  /**
   * Gets patients with appointments on a specific date
   *
   * @param date - Appointment date (defaults to session date)
   * @returns Array of patient appointments
   */
  static async getAppointments(date = HisDate.sessionDate()) {
    return this.getJson("/neonatal/appointments", { date });
  }
  /**
   * Gets neonatal program statistics
   *
   * @param date - Date for statistics (defaults to session date)
   * @returns Statistics object
   */
  static async getStatistics(date = HisDate.sessionDate()) {
    return this.getJson("/neonatal/statistics", { date });
  }
  /**
   * Gets visit summary for a date
   *
   * @param date - Date for summary (defaults to session date)
   * @returns Visit summary with incomplete/complete counts
   */
  static async getVisitSummary(date = HisDate.sessionDate()) {
    return this.getJson("/neonatal/visit_summary", { date });
  }
  /**
   * Updates enrollment information
   *
   * @param patientId - Patient ID
   * @param updates - Updates to apply
   * @returns Updated enrollment data
   */
  static async updateEnrollment(patientId, updates) {
    return this.putJson(`/neonatal/enrollment/${patientId}`, updates);
  }
  /**
   * Exits a patient from the neonatal program
   *
   * @param patientId - Patient ID
   * @param exitData - Exit information (date_completed, outcome)
   * @returns Updated patient program
   */
  static async exitProgram(patientId, exitData) {
    return this.postJson("/neonatal/exit", {
      patient_id: patientId,
      ...exitData
    });
  }
  /**
   * Saves systemic examination assessment data
   * Creates an encounter and saves observations for systemic examination
   *
   * @param patientId - Patient ID
   * @param examinationData - Systemic examination form data
   * @param date - Examination date (defaults to session date)
   * @returns Saved encounter and observations
   */
  static async saveSystemicExaminationAssessment(patientId, examinationData, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildSystemicExaminationObservations(examinationData, date);
      if (observations.length === 0) {
        console.warn("[NeonatalService] No observations to save for systemic examination");
        return null;
      }
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.NEONATAL_SYSTEMIC_EXAMINATION, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      const result = await encounter.saveObservationList(observations);
      console.log("[NeonatalService] Systemic examination saved successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length
      });
      return result;
    } catch (error) {
      console.error("[NeonatalService] Failed to save systemic examination:", error);
      throw error;
    }
  }
  /**
   * Builds observations array from systemic examination form data
   * Maps form fields to OpenMRS observations
   *
   * @param data - Systemic examination form data
   * @param date - Observation date
   * @returns Array of observation objects
   */
  static async buildSystemicExaminationObservations(data, date) {
    const observations = [];
    const hasValue = (value) => {
      if (value === void 0 || value === null || value === "") return false;
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === "object") {
        const objValue = value.value ?? value.label;
        return objValue !== void 0 && objValue !== null && objValue !== "";
      }
      return true;
    };
    const pushObservation = async (concept, factory) => {
      try {
        const obs = await factory();
        if (typeof obs?.concept_id !== "number" || !Number.isFinite(obs.concept_id)) {
          throw new Error(`Invalid concept_id for "${concept}"`);
        }
        if ("value_coded" in obs && obs.value_coded !== void 0 && obs.value_coded !== null) {
          if (typeof obs.value_coded !== "number" || !Number.isFinite(obs.value_coded)) {
            throw new Error(`Invalid value_coded for "${concept}"`);
          }
        }
        observations.push(obs);
      } catch (error) {
        console.warn(`[SystemicExamination] Skipping concept "${concept}":`, error);
      }
    };
    const pushCoded = async (concept, value) => {
      if (!hasValue(value)) return;
      let codedValue;
      if (typeof value === "boolean") {
        codedValue = value ? "Yes" : "No";
      } else if (typeof value === "object" && value !== null) {
        const extractedValue = value.value ?? value.label;
        if (extractedValue === void 0 || extractedValue === null || extractedValue === "") return;
        codedValue = extractedValue;
      } else {
        codedValue = value;
      }
      const resolvedConceptId = await resolveCodedAnswerConceptId(codedValue);
      if (typeof resolvedConceptId !== "number") {
        if (typeof codedValue === "number" && Number.isFinite(codedValue)) {
          await pushObservation(concept, () => ObservationService.buildValueNumber(concept, codedValue, null, null, date));
          return;
        }
        await pushObservation(concept, () => ObservationService.buildValueText(concept, String(codedValue), date));
        return;
      }
      await pushObservation(concept, () => ObservationService.buildValueCoded(concept, resolvedConceptId, date));
    };
    const pushText = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueText(concept, value, date));
      }
    };
    const pushYesOnly = async (concept, selected) => {
      if (!selected) return;
      await pushCoded(concept, true);
    };
    await pushCoded("Respiratory distress", data.respiratoryDistress);
    if (Array.isArray(data.respiratoryDistressSymptoms) && data.respiratoryDistressSymptoms.length) {
      const set = new Set(data.respiratoryDistressSymptoms);
      await pushYesOnly("Gasping", set.has("gasping"));
      await pushYesOnly("Fast breathing", set.has("fast_breathing"));
      await pushYesOnly("Nasal flaring", set.has("nasal_flaring"));
      await pushYesOnly("Chest indrawing", set.has("chest_indrawing"));
      await pushYesOnly("Stridor", set.has("stridor"));
      await pushYesOnly("Grunting", set.has("grunting"));
    } else {
      await pushYesOnly("Gasping", data.gasping);
      await pushYesOnly("Fast breathing", data.fastBreathing);
      await pushYesOnly("Nasal flaring", data.nasalFlaring);
      await pushYesOnly("Chest indrawing", data.chestIndrawing);
      await pushYesOnly("Stridor", data.stridor);
      await pushYesOnly("Grunting", data.grunting);
    }
    await pushCoded("Stethoscope available", data.stethoscopeAvailable);
    if (Array.isArray(data.lungSounds) && data.lungSounds.length) {
      const set = new Set(data.lungSounds);
      await pushYesOnly("Chest clear", set.has("clear"));
      await pushYesOnly("Unequal air entry", set.has("unequal_air_entry"));
      await pushYesOnly("Unilateral crackles", set.has("unilateral_crackles"));
      await pushYesOnly("Unilateral wheeze", set.has("unilateral_wheeze"));
      await pushYesOnly("Bilateral crackles/wheeze", set.has("bilateral_crackles_wheeze"));
      await pushYesOnly("Stridor on auscultation", set.has("stridor"));
    } else {
      await pushYesOnly("Chest clear", data.chestClear);
      await pushYesOnly("Unequal air entry", data.unequalAirEntry);
      await pushYesOnly("Unilateral crackles", data.unilateralCrackles);
      await pushYesOnly("Unilateral wheeze", data.unilateralWheeze);
      await pushYesOnly("Bilateral crackles/wheeze", data.bilateralCracklesWheeze);
      await pushYesOnly("Stridor on auscultation", data.stridorAuscultation);
    }
    if (Array.isArray(data.heartSounds) && data.heartSounds.length) {
      const set = new Set(data.heartSounds);
      await pushYesOnly("Normal heart sounds", set.has("normal"));
      await pushYesOnly("Murmur or extra sounds", set.has("murmur"));
      await pushYesOnly("Not confident auscultating murmurs", set.has("not_confident"));
    } else {
      await pushYesOnly("Normal heart sounds", data.normalHeartSounds);
      await pushYesOnly("Murmur or extra sounds", data.murmurExtraSounds);
      await pushYesOnly("Not confident auscultating murmurs", data.notConfidentMurmurs);
    }
    if (typeof data.color === "string" && data.color) {
      const v = String(data.color);
      await pushYesOnly("Color pink", v === "pink");
      await pushYesOnly("Color blue", v === "blue");
      await pushYesOnly("Color pale", v === "pale");
      await pushYesOnly("Color yellow", v === "yellow");
    } else {
      await pushYesOnly("Color pink", data.colorPink);
      await pushYesOnly("Color blue", data.colorBlue);
      await pushYesOnly("Color pale", data.colorPale);
      await pushYesOnly("Color yellow", data.colorYellow);
    }
    if (typeof data.capillaryRefillTime === "string" && data.capillaryRefillTime) {
      const v = String(data.capillaryRefillTime);
      await pushYesOnly("CRT less than 3 seconds", v === "less_than_3");
      await pushYesOnly("CRT 3 or more seconds", v === "3_or_more");
    } else {
      await pushYesOnly("CRT less than 3 seconds", data.crtLessThan3);
      await pushYesOnly("CRT 3 or more seconds", data.crt3OrMore);
    }
    if (typeof data.femoralPulses === "string" && data.femoralPulses) {
      const v = String(data.femoralPulses);
      await pushYesOnly("Femoral pulse palpable", v === "palpable");
      await pushYesOnly("Femoral pulse weak", v === "weak");
      await pushYesOnly("Not confident femoral pulses", v === "not_confident");
      await pushYesOnly("Femoral pulse difficult", v === "difficult");
    } else {
      await pushYesOnly("Femoral pulse palpable", data.femoralPulsePalpable);
      await pushYesOnly("Femoral pulse weak", data.femoralPulseWeak);
      await pushYesOnly("Not confident femoral pulses", data.notConfidentFemoralPulses);
      await pushYesOnly("Femoral pulse difficult", data.femoralPulseDifficult);
    }
    await pushText("Chest summary notes", data.chestSummaryNotes);
    if (typeof data.abdomenFindings === "string" && data.abdomenFindings) {
      const v = String(data.abdomenFindings);
      await pushYesOnly("Abdomen soft normal", v === "soft_normal");
      await pushYesOnly("Abdomen distended", v === "distended");
      await pushYesOnly("Abdominal wall defect", v === "wall_defect");
      await pushYesOnly("Prune belly syndrome", v === "prune_belly");
      await pushYesOnly("Abdominal mass", v === "mass");
    } else {
      await pushYesOnly("Abdomen soft normal", data.abdomenSoftNormal);
      await pushYesOnly("Abdomen distended", data.abdomenDistended);
      await pushYesOnly("Abdominal wall defect", data.abdomenWallDefect);
      await pushYesOnly("Prune belly syndrome", data.pruneBellySyndrome);
      await pushYesOnly("Abdominal mass", data.abdomenMass);
    }
    await pushCoded("Abdomen distended confirmed", data.abdomenDistendedConfirm);
    await pushCoded("Abdomen shiny", data.abdomenShiny);
    await pushCoded("Abdomen color change", data.abdomenColorChange);
    await pushCoded("Abdomen distended veins", data.abdomenDistendedVeins);
    await pushCoded("Abdomen tender", data.abdomenTender);
    await pushCoded("Hepatomegaly", data.hepatomegaly);
    await pushCoded("Splenomegaly", data.splenomegaly);
    await pushCoded("Palpable kidneys", data.palpableKidneys);
    await pushCoded("Other masses", data.otherMasses);
    await pushText("Other masses description", data.otherMassesDescription);
    if (typeof data.umbilicusFindings === "string" && data.umbilicusFindings) {
      const v = String(data.umbilicusFindings);
      await pushYesOnly("Umbilicus healthy", v === "healthy");
      await pushYesOnly("Umbilicus bleeding", v === "bleeding");
      await pushYesOnly("Umbilicus red skin", v === "red_skin");
      await pushYesOnly("Umbilicus meconium", v === "meconium");
      await pushYesOnly("Umbilical hernia", v === "hernia");
      await pushYesOnly("Umbilicus abnormal", v === "abnormal");
    } else {
      await pushYesOnly("Umbilicus healthy", data.umbilicusHealthy);
      await pushYesOnly("Umbilicus bleeding", data.umbilicusBleeding);
      await pushYesOnly("Umbilicus red skin", data.umbilicusRedSkin);
      await pushYesOnly("Umbilicus meconium", data.umbilicusMeconium);
      await pushYesOnly("Umbilical hernia", data.umbilicalHernia);
      await pushYesOnly("Umbilicus abnormal", data.umbilicusAbnormal);
    }
    if (typeof data.genitaliaFindings === "string" && data.genitaliaFindings) {
      const v = String(data.genitaliaFindings);
      await pushYesOnly("Genitalia male normal", v === "male_normal");
      await pushYesOnly("Genitalia female normal", v === "female_normal");
      await pushYesOnly("Genitalia male abnormal", v === "male_abnormal");
      await pushYesOnly("Genitalia female abnormal", v === "female_abnormal");
      await pushYesOnly("Genitalia ambiguous", v === "ambiguous");
    } else {
      await pushYesOnly("Genitalia male normal", data.genitaliaMaleNormal);
      await pushYesOnly("Genitalia female normal", data.genitaliaFemaleNormal);
      await pushYesOnly("Genitalia male abnormal", data.genitaliaMaleAbnormal);
      await pushYesOnly("Genitalia female abnormal", data.genitaliaFemaleAbnormal);
      await pushYesOnly("Genitalia ambiguous", data.genitaliaAmbiguous);
    }
    if (typeof data.anusFindings === "string" && data.anusFindings) {
      const v = String(data.anusFindings);
      await pushYesOnly("Anus patent", v === "patent");
      await pushYesOnly("Anus imperforate", v === "imperforate");
      await pushYesOnly("Anus abnormal", v === "abnormal");
    } else {
      await pushYesOnly("Anus patent", data.anusPatent);
      await pushYesOnly("Anus imperforate", data.anusImperforate);
      await pushYesOnly("Anus abnormal", data.anusAbnormal);
    }
    await pushText("Abdomen summary notes", data.abdomenSummaryNotes);
    await pushCoded("Tone assessment", resolveMappedLabel(data.toneAssessment, toneAssessmentLabels));
    await pushCoded("Suck reflex", resolveMappedLabel(data.suckReflex, suckReflexLabels));
    await pushCoded("Grasp reflex", resolveMappedLabel(data.graspReflex, graspReflexLabels));
    await pushCoded("Moro reflex", resolveMappedLabel(data.moroReflex, moroReflexLabels));
    await pushText("Neurological summary notes", data.neurologicalSummaryNotes);
    if (data.musculoskeletalDeformities?.length) {
      for (const deformity of data.musculoskeletalDeformities) {
        const label = resolveMappedLabel(deformity, musculoskeletalDeformityLabels);
        if (!label) continue;
        await pushCoded("Musculoskeletal deformities", label);
      }
    }
    if (data.skinFindings?.length) {
      for (const finding of data.skinFindings) {
        const label = resolveMappedLabel(finding, skinFindingLabels);
        if (!label) continue;
        await pushCoded("Skin findings", label);
      }
    }
    await pushCoded("Birth asphyxia suspected", data.birthAsphyxiaSuspected);
    await pushCoded("Thompson respiration score", data.thompsonRespirationScore);
    await pushCoded("Thompson suck score", data.thompsonSuckScore);
    await pushCoded("Thompson moro score", data.thompsonMoroScore);
    await pushCoded("Thompson grasp score", data.thompsonGraspScore);
    await pushCoded("Thompson fontanelle score", data.thompsonFontanelleScore);
    await pushCoded("Thompson tone score", data.thompsonToneScore);
    await pushCoded("Thompson consciousness score", data.thompsonConsciousnessScore);
    await pushCoded("Thompson fits score", data.thompsonFitsScore);
    await pushCoded("Thompson posture score", data.thompsonPostureScore);
    return observations;
  }
  /**
   * Saves signs/symptoms assessment data
   * Creates an encounter and saves observations for signs and symptoms
   *
   * @param patientId - Patient ID
   * @param signsData - Signs/symptoms form data
   * @param date - Assessment date (defaults to session date)
   * @returns Saved encounter and observations
   */
  static async saveSignsSymptomsAssessment(patientId, signsData, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildSignsSymptomsObservations(signsData, date);
      if (observations.length === 0) {
        console.warn("[NeonatalService] No observations to save for signs/symptoms");
        return null;
      }
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      const result = await encounter.saveObservationList(observations);
      console.log("[NeonatalService] Signs/symptoms assessment saved successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length
      });
      return result;
    } catch (error) {
      console.error("[NeonatalService] Failed to save signs/symptoms assessment:", error);
      throw error;
    }
  }
  /**
   * Builds observations array from signs/symptoms form data
   * Maps form fields to OpenMRS observations
   *
   * @param data - Signs/symptoms form data
   * @param date - Observation date
   * @returns Array of observation objects
   */
  static async buildSignsSymptomsObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const pushObservation = async (concept, factory) => {
      try {
        const obs = await factory();
        if (typeof obs?.concept_id !== "number" || !Number.isFinite(obs.concept_id)) {
          throw new Error(`Invalid concept_id for "${concept}"`);
        }
        if ("value_coded" in obs && obs.value_coded !== void 0 && obs.value_coded !== null) {
          if (typeof obs.value_coded !== "number" || !Number.isFinite(obs.value_coded)) {
            throw new Error(`Invalid value_coded for "${concept}"`);
          }
        }
        observations.push(obs);
      } catch (error) {
        console.warn(`[SignsSymptoms] Skipping concept "${concept}":`, error);
      }
    };
    const pushCoded = async (concept, value) => {
      if (!hasValue(value)) return;
      const resolvedConceptId = await resolveCodedAnswerConceptId(value);
      if (typeof resolvedConceptId !== "number") {
        console.warn(`[SignsSymptoms] Skipping coded concept "${concept}" due to missing mapping for value "${value}"`);
        return;
      }
      await pushObservation(concept, () => ObservationService.buildValueCoded(concept, resolvedConceptId, date));
    };
    const pushText = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueText(concept, value, date));
      }
    };
    await pushCoded("Re-admission", data.is_readmission);
    if (data.presenting_complaints && Array.isArray(data.presenting_complaints) && data.presenting_complaints.length > 0) {
      for (const complaint of data.presenting_complaints) {
        let complaintText;
        if (typeof complaint === "object" && complaint !== null) {
          complaintText = complaint.label || complaint.value;
        } else {
          complaintText = complaint;
        }
        if (hasValue(complaintText)) {
          await pushText("Presenting complaint", complaintText);
        }
      }
    }
    await pushText("Signs/Symptoms notes", data.detailed_assessment_notes);
    await pushText("Symptom onset time", data.symptom_onset_time);
    await pushCoded("Symptom severity", data.symptom_severity);
    return observations;
  }
  static async saveGeneralExaminationAssessment(patientId, data, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildGeneralExaminationObservations(data, date);
      if (observations.length === 0) {
        console.warn("[NeonatalService] No observations to save for general examination");
        return null;
      }
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.PHYSICAL_EXAMINATION_BABY, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      const result = await encounter.saveObservationList(observations);
      console.log("[NeonatalService] General examination saved successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length
      });
      return result;
    } catch (error) {
      console.error("[NeonatalService] Failed to save general examination:", error);
      throw error;
    }
  }
  static async buildGeneralExaminationObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const resolveConceptId = async (conceptName) => {
      const conceptId = await resolveCodedAnswerConceptId(conceptName);
      if (typeof conceptId !== "number") {
        throw new Error(`Concept not found: "${conceptName}"`);
      }
      return conceptId;
    };
    const buildSelfCoded = async (conceptName) => {
      const conceptId = await resolveConceptId(conceptName);
      return {
        concept_name: conceptName,
        concept_id: conceptId,
        value_coded: conceptId,
        obs_datetime: date,
        location_id: resolveObsLocationId()
      };
    };
    const buildText = async (conceptName, valueText) => {
      const conceptId = await resolveConceptId(conceptName);
      return {
        concept_name: conceptName,
        concept_id: conceptId,
        value_text: valueText,
        obs_datetime: date,
        location_id: resolveObsLocationId()
      };
    };
    const group = async (parentConceptName, buildChildren) => {
      try {
        const childObs = (await buildChildren()).filter(Boolean);
        if (childObs.length === 0) return;
        const parent = await buildSelfCoded(parentConceptName);
        parent.child = childObs;
        observations.push(parent);
      } catch (error) {
        console.warn(`[NeonatalService] Skipping group "${parentConceptName}":`, error);
      }
    };
    await group("Activity", async () => {
      if (!hasValue(data.activityAssessment)) return [];
      return [await buildSelfCoded(data.activityAssessment)];
    });
    await group("Fontanelle", async () => {
      if (!hasValue(data.fontanelleAssessment)) return [];
      return [await buildSelfCoded(data.fontanelleAssessment)];
    });
    await group("Head", async () => {
      if (!hasValue(data.massInHeadAssessment)) return [];
      return [await buildSelfCoded(data.massInHeadAssessment)];
    });
    await group("Colour", async () => {
      const children = [];
      if (data.isBabyYellow === "yes") children.push(await buildSelfCoded("Yell"));
      if (data.isBabyPallorPink === "yes") children.push(await buildSelfCoded("Pink"));
      if (data.hasBabyCyanosis === "yes") children.push(await buildSelfCoded("Blue"));
      if (data.hasBabyOedema === "yes") children.push(await buildSelfCoded("White"));
      return children;
    });
    await group("Capillary refill time", async () => {
      if (!hasValue(data.capillaryRefillTime)) return [];
      return [await buildSelfCoded(data.capillaryRefillTime)];
    });
    await group("Femorals", async () => {
      if (!hasValue(data.femoralPulses)) return [];
      return [await buildSelfCoded(data.femoralPulses)];
    });
    await group("Genitalia", async () => {
      if (!hasValue(data.genitaliaAssessment)) return [];
      return [await buildSelfCoded(data.genitaliaAssessment)];
    });
    await group("Anus2", async () => {
      if (!hasValue(data.anusPatent)) return [];
      return [await buildSelfCoded(data.anusPatent)];
    });
    await group("Palate", async () => {
      if (!hasValue(data.cleftLipPalateAssessment)) return [];
      const selection = data.cleftLipPalateAssessment;
      const cleftAssessment = selection === "normal" ? "absent" : "present";
      return [await buildSelfCoded(cleftAssessment)];
    });
    await group("Other congenital abnormality", async () => {
      const children = [];
      if (data.hasCongenitalAbnormalities === "yes") children.push(await buildSelfCoded("Yes"));
      if (data.hasCongenitalAbnormalities === "no") children.push(await buildSelfCoded("No"));
      if (hasValue(data.congenitalAbnormalitiesType)) {
        const typeKey = data.congenitalAbnormalitiesType;
        const typeLabel = congenitalAbnormalityLabels[typeKey] || typeKey;
        children.push(await buildText("Congenital abnormality type", typeLabel));
      }
      if (hasValue(data.congenitalAbnormalitiesDescription)) {
        children.push(await buildText("Notes", data.congenitalAbnormalitiesDescription));
      }
      return children;
    });
    return observations;
  }
  /**
   * Saves review of systems assessment data
   * Creates an encounter and saves observations for review of systems
   *
   * @param patientId - Patient ID
   * @param rosData - Review of systems form data
   * @param date - Assessment date (defaults to session date)
   * @returns Saved encounter and observations
   */
  static async saveReviewOfSystemsAssessment(patientId, rosData, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildReviewOfSystemsObservations(rosData, date);
      if (observations.length === 0) {
        console.warn("[NeonatalService] No observations to save for review of systems");
        return null;
      }
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.NEONATAL_REVIEW_OF_SYSTEMS, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      const result = await encounter.saveObservationList(observations);
      console.log("[NeonatalService] Review of systems saved successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length
      });
      return result;
    } catch (error) {
      console.error("[NeonatalService] Failed to save review of systems:", error);
      throw error;
    }
  }
  static async getWeightTrendSinceBirth(patientId) {
    const extractFromObs = (observations) => {
      const data = {
        birthWeightKg: 0,
        weightKg: 0
      };
      observations.forEach((obs) => {
        const conceptNames = obs?.concept?.concept_names || [];
        const primaryName = conceptNames.find((n) => n?.name)?.name || "";
        const valNum = obs?.value_numeric !== null && obs?.value_numeric !== void 0 ? Number(obs.value_numeric) : null;
        const valText = obs?.value_text || "";
        if (primaryName === "Birth weight") {
          if (valNum !== null && Number.isFinite(valNum)) {
            data.birthWeightKg = valNum >= 100 ? valNum / 1e3 : valNum;
          }
        } else if (primaryName === "Weight (kg)") {
          const weightNum = valText ? parseFloat(valText) : valNum ?? 0;
          if (Number.isFinite(weightNum) && weightNum > 0) {
            data.weightKg = weightNum >= 100 ? weightNum / 1e3 : weightNum;
          }
        }
      });
      return data;
    };
    const encountersRaw = await EncounterService.getAllEncounters({
      patient_id: patientId,
      program_id: Service.getProgramID()
    });
    const encounters = Array.isArray(encountersRaw) ? encountersRaw : Array.isArray(encountersRaw?.data) ? encountersRaw.data : Array.isArray(encountersRaw?.encounters) ? encountersRaw.encounters : [];
    const accumulated = {
      birthWeightKg: 0,
      weightKg: 0,
      weight_loss_category: ""
    };
    encounters.forEach((encounter) => {
      const observations = Array.isArray(encounter?.observations) ? encounter.observations : [];
      const extracted = extractFromObs(observations);
      if (extracted.birthWeightKg > 0) accumulated.birthWeightKg = extracted.birthWeightKg;
      if (extracted.weightKg > 0) accumulated.weightKg = extracted.weightKg;
    });
    if (accumulated.birthWeightKg > 0 && accumulated.weightKg > 0) {
      if (accumulated.weightKg < accumulated.birthWeightKg) {
        const weightLossPercentage = (accumulated.birthWeightKg - accumulated.weightKg) * 100 / accumulated.birthWeightKg;
        accumulated.weight_loss_category = weightLossPercentage >= 10 ? "weight_loss_above_10" : "weight_loss_below_10";
      } else {
        accumulated.weight_loss_category = "";
      }
    }
    return accumulated;
  }
  static async saveVitalsAssessment(patientId, vitalsData, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildVitalsObservations(vitalsData, date);
      if (observations.length === 0) {
        console.warn("[NeonatalService] No observations to save for vitals");
        return null;
      }
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.VITALS, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      const result = await encounter.saveObservationList(observations);
      console.log("[NeonatalService] Vitals saved successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length
      });
      return result;
    } catch (error) {
      console.error("[NeonatalService] Failed to save vitals:", error);
      throw error;
    }
  }
  static async buildVitalsObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const pushObservation = async (concept, factory) => {
      try {
        observations.push(await factory());
      } catch (error) {
        console.warn(`[NeonatalVitals] Skipping concept "${concept}":`, error);
      }
    };
    const pushNumber = async (concept, rawValue, transform) => {
      if (!hasValue(rawValue)) return;
      const n = typeof rawValue === "number" ? rawValue : parseFloat(String(rawValue));
      if (Number.isNaN(n)) return;
      const value = transform ? transform(n) : n;
      if (!Number.isFinite(value)) return;
      await pushObservation(concept, () => ObservationService.buildValueNumber(concept, value, null, null, date));
    };
    await pushNumber("Respiratory rate", data.respiratory_rate);
    await pushNumber("Pulse", data.heart_rate);
    await pushNumber("Oxygen saturation", data.oxygen_saturation);
    await pushNumber("Temperature (C)", data.temperature);
    await pushNumber("Weight (kg)", data.current_weight, (n) => n / 1e3);
    await pushNumber("Head circumference", data.head_circumference);
    if (hasValue(data.blood_sugar)) {
      const n = typeof data.blood_sugar === "number" ? data.blood_sugar : parseFloat(String(data.blood_sugar));
      if (Number.isFinite(n)) {
        const unit = data.blood_sugar_unit || "mg/dL";
        const bloodSugarValue = unit === "mmol/L" ? n * 18.018 : n;
        await pushNumber("Blood sugar", bloodSugarValue);
      }
    }
    return observations;
  }
  /**
   * Builds observations array from review of systems form data
   * Maps form fields to OpenMRS observations
   *
   * @param data - Review of systems form data
   * @param date - Observation date
   * @returns Array of observation objects
   */
  static async buildReviewOfSystemsObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const pushObservation = async (concept, factory) => {
      try {
        observations.push(await factory());
      } catch (error) {
        console.warn(`[ReviewOfSystems] Skipping concept "${concept}":`, error);
      }
    };
    const pushCoded = async (concept, rawValue) => {
      if (!hasValue(rawValue)) return;
      const resolvedConceptId = await resolveCodedAnswerConceptId(rawValue);
      if (resolvedConceptId === void 0) {
        console.warn(`[ReviewOfSystems] Skipping concept "${concept}": coded answer not found`, { value: rawValue });
        return;
      }
      await pushObservation(concept, () => ObservationService.buildValueCoded(concept, resolvedConceptId, date));
    };
    const pushText = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueText(concept, value, date));
      }
    };
    const pushNumber = async (concept, rawValue) => {
      if (!hasValue(rawValue)) {
        return;
      }
      const numeric = typeof rawValue === "number" ? rawValue : parseFloat(String(rawValue));
      if (Number.isNaN(numeric)) {
        return;
      }
      await pushObservation(concept, () => ObservationService.buildValueNumber(concept, numeric, null, null, date));
    };
    const typeOfFeedCandidate = resolveTypeOfFeedConceptName(data.type_of_feed);
    const typeOfFeedCandidates = typeOfFeedCandidate ? [typeOfFeedCandidate, ...TYPE_OF_FEED_CONCEPT_MAP[String(data.type_of_feed).toLowerCase()] || []] : [];
    let resolvedTypeOfFeed;
    for (const candidate of typeOfFeedCandidates) {
      const conceptId = await resolveCodedAnswerConceptId(candidate);
      if (conceptId !== void 0) {
        resolvedTypeOfFeed = candidate;
        break;
      }
    }
    await pushCoded("Type of feed", resolvedTypeOfFeed);
    await pushCoded("Mode of feeding", resolveMappedLabel(data.mode_of_feeding, feedingModeLabels));
    await pushCoded("Frequency of feeding", resolveMappedLabel(data.frequency_of_feeding, feedingFrequencyLabels));
    await pushText("Duration of feeding", data.duration_of_feeding);
    await pushCoded("Effort during feeding", resolveMappedLabel(data.effort_during_feeding, feedingEffortLabels));
    await pushCoded("Is baby vomiting", data.is_baby_vomiting);
    await pushText("Frequency of vomiting", data.frequency_of_vomiting);
    await pushCoded("Passage of meconium", resolveMappedLabel(data.passage_of_meconium, meconiumTimingLabels));
    await pushText("Frequency of stooling", data.frequency_of_stooling);
    await pushCoded("Color of stools", resolveMappedLabel(data.color_of_stools, stoolColorLabels));
    await pushCoded("Consistency of stools", resolveMappedLabel(data.consistency_of_stools, stoolConsistencyLabels));
    await pushCoded("Blood in stools", data.blood_in_stools);
    await pushCoded("Mucus in stools", data.mucus_in_stools);
    await pushCoded("Is the baby passing urine?", data.is_baby_passing_urine);
    await pushNumber("Number of wet nappies per day", data.number_of_wet_nappies);
    await pushCoded("Color of urine", resolveMappedLabel(data.color_of_urine, urineColorLabels));
    await pushNumber("Volume (ml)", data.volume_ml);
    await pushCoded("Weight trend since birth", resolveMappedLabel(data.weight_trend_since_birth, weightTrendLabels));
    await pushCoded("Does the baby have Oral thrush?", data.does_baby_have_oral_thrush);
    await pushCoded("Does the baby have Oral sores?", data.does_baby_have_oral_sores);
    await pushCoded("Does the baby have Tongue tie (Ankyloglossia)?", data.does_baby_have_tongue_tie);
    await pushCoded("Activity level", data.activity);
    await pushCoded("Has passed urine", data.hydration_urination);
    await pushCoded("Has passed meconium", data.stool_passed_meconium);
    await pushCoded("Has passed transitional stools", data.stool_passed_transitional);
    await pushCoded("Vomiting", data.vomiting);
    await pushCoded("Bile stained vomit", data.vomiting_bile_stained);
    await pushCoded("Difficulty breathing", data.difficulty_breathing);
    await pushCoded("Bleeding", data.bleeding);
    await pushCoded("Jaundice", data.jaundice);
    await pushCoded("Convulsions", data.convulsions);
    await pushCoded("Baby grunting", data.baby_grunting);
    await pushCoded("Vomiting after every feed", data.frequency_of_vomiting);
    await pushCoded("Color of vomit", data.color_of_vomit);
    await pushCoded("Gasping", data.gasping);
    await pushCoded("Nasal flaring", data.nasal_flaring);
    await pushCoded("Cyanosis", data.cyanosis);
    await pushCoded("Size of uterus", data.size_of_uterus);
    await pushCoded("Oxygen level category", data.oxygen_level_2);
    await pushText("Oxygen level value", data.oxygen_level_value);
    await pushCoded("Birthmark abnormalities", data.birthmark_abnormalities);
    await pushCoded("Pustules", data.pustules);
    await pushCoded("Peeling", data.peeling);
    await pushCoded("Umbilical discharge", data.umbilical_discharge);
    await pushCoded("Swelling", data.swelling);
    await pushCoded("Abdominal distension", data.abdominal_distension);
    await pushCoded("Abdominal pain", data.abdominal_pain);
    await pushCoded("Umbilical condition", resolveMappedLabel(data.umbilical_condition, umbilicalConditionLabels));
    await pushCoded("Abdominal mass", data.mass);
    await pushCoded("Abdominal tenderness", data.tenderness);
    await pushCoded("Organomegaly", data.organomegaly);
    await pushCoded("Skin rash", data.skin_rash);
    await pushCoded("Talipes", data.talipes);
    await pushCoded("Extra digits", data.extra_digits);
    await pushCoded("Spinal bifida", data.spinal_bifida);
    await pushCoded("Reduced movement", data.reduced_movement);
    await pushCoded("Fracture", data.fracture);
    await pushCoded("Deformity", data.deformity);
    await pushCoded("Club foot", data.club_foot);
    await pushCoded("Other abnormalities", data.other_abnormalities);
    return observations;
  }
  /**
   * Saves clinical review outcomes data
   * Creates an encounter and saves observations for clinical review outcomes
   *
   * @param patientId - Patient ID
   * @param outcomesData - Clinical review outcomes form data
   * @param date - Assessment date (defaults to session date)
   * @returns Saved encounter and observations
   */
  static async saveClinicalReviewOutcomes(patientId, outcomesData, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildClinicalReviewOutcomesObservations(outcomesData, date);
      if (observations.length === 0) {
        console.warn("[NeonatalService] No observations to save for clinical review outcomes");
        return null;
      }
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.NEONATAL_CLINICAL_REVIEW_OUTCOMES, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      const result = await encounter.saveObservationList(observations);
      console.log("[NeonatalService] Clinical review outcomes saved successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length
      });
      return result;
    } catch (error) {
      console.error("[NeonatalService] Failed to save clinical review outcomes:", error);
      throw error;
    }
  }
  /**
   * Builds observations array from clinical review outcomes form data
   * Maps form fields to OpenMRS observations
   *
   * @param data - Clinical review outcomes form data
   * @param date - Observation date
   * @returns Array of observation objects
   */
  static async buildClinicalReviewOutcomesObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const pushObservation = async (concept, factory) => {
      try {
        observations.push(await factory());
      } catch (error) {
        console.warn(`[ClinicalReviewOutcomes] Skipping concept "${concept}":`, error);
      }
    };
    const pushCoded = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueCoded(concept, value, date));
      }
    };
    const pushText = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueText(concept, value, date));
      }
    };
    await pushCoded("Clinical review outcome", data.clinicalReviewOutcome);
    await pushText("Clinical review outcome other", data.clinicalReviewOutcomeOther);
    await pushText("Safeguard concerns", data.safeguardConcerns);
    await pushText("Healthcare worker ID", data.healthcareWorkerId);
    await pushText("Electronic signature", data.electronicSignature);
    await pushText("Healthcare worker role", data.userRole);
    await pushText("Sign-off date time", data.signOffDate);
    if (hasValue(data.healthcareWorkerId) || hasValue(data.electronicSignature) || hasValue(data.userRole) || hasValue(data.signOffDate)) {
      const payload = JSON.stringify({
        healthcareWorkerId: data.healthcareWorkerId ?? "",
        electronicSignature: data.electronicSignature ?? "",
        userRole: data.userRole ?? "",
        signOffDate: data.signOffDate ?? ""
      });
      await pushText("Clinician notes", `[NEONATAL_SIGNOFF]${payload}`);
    }
    return observations;
  }
  /**
   * Discharges a neonate from the unit
   * Creates a discharge encounter, saves observations, and closes the program
   *
   * @param patientId - Patient ID
   * @param dischargeData - Discharge form data
   * @param date - Discharge date (defaults to session date)
   * @returns Discharge response
   */
  static async dischargeNeonate(patientId, dischargeData, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildDischargeObservations(dischargeData, date);
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.NEONATAL_DISCHARGE, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      if (observations.length > 0) {
        await encounter.saveObservationList(observations);
      }
      if (dischargeData.outcome) {
        await this.exitProgram(patientId, {
          date_completed: date,
          outcome: dischargeData.outcome
        });
      }
      console.log("[NeonatalService] Discharge completed successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length,
        outcome: dischargeData.outcome
      });
      return { success: true, encounterId: encounter.getEncounterID() };
    } catch (error) {
      console.error("[NeonatalService] Failed to discharge neonate:", error);
      throw error;
    }
  }
  /**
   * Builds observations array from discharge form data
   *
   * @param data - Discharge form data
   * @param date - Observation date
   * @returns Array of observation objects
   */
  static async buildDischargeObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const pushObservation = async (concept, factory) => {
      try {
        observations.push(await factory());
      } catch (error) {
        console.warn(`[Discharge] Skipping concept "${concept}":`, error);
      }
    };
    const pushCoded = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueCoded(concept, value, date));
      }
    };
    const pushText = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueText(concept, value, date));
      }
    };
    const pushNumber = async (concept, rawValue, transform) => {
      if (!hasValue(rawValue)) return;
      const numeric = typeof rawValue === "number" ? rawValue : parseFloat(String(rawValue));
      if (isNaN(numeric)) return;
      const finalValue = transform ? transform(numeric) : numeric;
      await pushObservation(concept, () => ObservationService.buildValueNumber(concept, finalValue, null, null, date));
    };
    await pushNumber("Weight", data.weight, (v) => v > 10 ? v / 1e3 : v);
    await pushNumber("Pulse", data.heartRate);
    await pushNumber("Respiratory rate", data.respiratoryRate);
    await pushNumber("Blood oxygen saturation", data.oxygenSaturation);
    await pushNumber("Temperature", data.temperature);
    if (data.mainDiagnosis) {
      await pushCoded("Primary diagnosis", data.mainDiagnosis.value);
    }
    if (data.otherProblems && data.otherProblems.length > 0) {
      for (const problem of data.otherProblems) {
        await pushCoded("Secondary diagnosis", problem.value);
      }
    }
    if (data.medications && data.medications.length > 0) {
      const medicationDetails = [];
      for (const med of data.medications) {
        const medEntry = `${med.name}|${med.dosage || ""}|${med.frequency || ""}`;
        medicationDetails.push(medEntry);
      }
      await pushText("Medication orders", medicationDetails.join(";"));
    }
    if (data.appointments && data.appointments.length > 0) {
      let appointmentSummary = "";
      for (const appt of data.appointments) {
        appointmentSummary += `${appt.clinicType || "Follow up"} at ${appt.clinicName || "Clinic"} on ${appt.date || "unspecified date"}; `;
      }
      await pushText("Next facility to visit", appointmentSummary);
    } else if (data.clinicFollowUp) {
      await pushText("Next facility to visit", data.clinicFollowUp);
    }
    await pushCoded("Health education given", data.healthEducationGiven);
    await pushCoded("Insecticide treated net given", data.insecticideTreatedNetGiven);
    await pushCoded("Patient admission outcome", data.outcome);
    await pushText("Healthcare worker ID", data.healthcareWorkerId);
    await pushText("Electronic signature", data.electronicSignature);
    await pushText("Healthcare worker role", data.userRole);
    if (data.signOffDate) {
      await pushText("Sign-off date time", data.signOffDate);
    }
    if (hasValue(data.healthcareWorkerId) || hasValue(data.electronicSignature) || hasValue(data.userRole) || hasValue(data.signOffDate)) {
      const payload = JSON.stringify({
        healthcareWorkerId: data.healthcareWorkerId ?? "",
        electronicSignature: data.electronicSignature ?? "",
        userRole: data.userRole ?? "",
        signOffDate: data.signOffDate ?? ""
      });
      await pushText("Clinician notes", `[NEONATAL_SIGNOFF]${payload}`);
    }
    return observations;
  }
}

export { NeonatalService as N, neonatalGeneralExaminationFormKey as a, feedingModeLabels as b, feedingFrequencyLabels as c, feedingEffortLabels as d, stoolConsistencyLabels as e, feedingTypeLabels as f, umbilicalConditionLabels as g, musculoskeletalDeformityLabels as h, skinFindingLabels as i, suckReflexLabels as j, graspReflexLabels as k, moroReflexLabels as l, meconiumTimingLabels as m, neonatalGeneralExaminationSections as n, getNextGeneralExaminationSectionIndex as o, getPreviousGeneralExaminationSectionIndex as p, stoolColorLabels as s, toneAssessmentLabels as t, urineColorLabels as u, weightTrendLabels as w };
