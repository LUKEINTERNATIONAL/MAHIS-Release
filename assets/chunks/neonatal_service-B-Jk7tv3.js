import { S as Service, H as HisDate, ai as ProgramService, M as ProgramId, aY as AppEncounterService, b as EncounterTypeId, K as ObservationService } from '../index-NXBj2cdM.js';

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
    await pushText("Onset of labor", data.onsetOfLabor);
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
      return true;
    };
    const pushObservation = async (concept, factory) => {
      try {
        observations.push(await factory());
      } catch (error) {
        console.warn(`[SystemicExamination] Skipping concept "${concept}":`, error);
      }
    };
    const pushCoded = async (concept, value) => {
      if (hasValue(value)) {
        const codedValue = typeof value === "boolean" ? value ? "Yes" : "No" : value;
        await pushObservation(concept, () => ObservationService.buildValueCoded(concept, codedValue, date));
      }
    };
    const pushText = async (concept, value) => {
      if (hasValue(value)) {
        await pushObservation(concept, () => ObservationService.buildValueText(concept, value, date));
      }
    };
    await pushCoded("Respiratory distress", data.respiratoryDistress);
    await pushCoded("Gasping", data.gasping);
    await pushCoded("Fast breathing", data.fastBreathing);
    await pushCoded("Nasal flaring", data.nasalFlaring);
    await pushCoded("Chest indrawing", data.chestIndrawing);
    await pushCoded("Stridor", data.stridor);
    await pushCoded("Grunting", data.grunting);
    await pushCoded("Stethoscope available", data.stethoscopeAvailable);
    await pushCoded("Chest clear", data.chestClear);
    await pushCoded("Unequal air entry", data.unequalAirEntry);
    await pushCoded("Unilateral crackles", data.unilateralCrackles);
    await pushCoded("Unilateral wheeze", data.unilateralWheeze);
    await pushCoded("Bilateral crackles/wheeze", data.bilateralCracklesWheeze);
    await pushCoded("Stridor on auscultation", data.stridorAuscultation);
    await pushCoded("Normal heart sounds", data.normalHeartSounds);
    await pushCoded("Murmur or extra sounds", data.murmurExtraSounds);
    await pushCoded("Not confident auscultating murmurs", data.notConfidentMurmurs);
    await pushCoded("Color pink", data.colorPink);
    await pushCoded("Color blue", data.colorBlue);
    await pushCoded("Color pale", data.colorPale);
    await pushCoded("Color yellow", data.colorYellow);
    await pushCoded("CRT less than 3 seconds", data.crtLessThan3);
    await pushCoded("CRT 3 or more seconds", data.crt3OrMore);
    await pushCoded("Femoral pulse palpable", data.femoralPulsePalpable);
    await pushCoded("Femoral pulse weak", data.femoralPulseWeak);
    await pushCoded("Not confident femoral pulses", data.notConfidentFemoralPulses);
    await pushCoded("Femoral pulse difficult", data.femoralPulseDifficult);
    await pushText("Chest summary notes", data.chestSummaryNotes);
    await pushCoded("Abdomen soft normal", data.abdomenSoftNormal);
    await pushCoded("Abdomen distended", data.abdomenDistended);
    await pushCoded("Abdominal wall defect", data.abdomenWallDefect);
    await pushCoded("Prune belly syndrome", data.pruneBellySyndrome);
    await pushCoded("Abdominal mass", data.abdomenMass);
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
    await pushCoded("Umbilicus healthy", data.umbilicusHealthy);
    await pushCoded("Umbilicus bleeding", data.umbilicusBleeding);
    await pushCoded("Umbilicus red skin", data.umbilicusRedSkin);
    await pushCoded("Umbilicus meconium", data.umbilicusMeconium);
    await pushCoded("Umbilical hernia", data.umbilicalHernia);
    await pushCoded("Umbilicus abnormal", data.umbilicusAbnormal);
    await pushCoded("Genitalia male normal", data.genitaliaMaleNormal);
    await pushCoded("Genitalia female normal", data.genitaliaFemaleNormal);
    await pushCoded("Genitalia male abnormal", data.genitaliaMaleAbnormal);
    await pushCoded("Genitalia female abnormal", data.genitaliaFemaleAbnormal);
    await pushCoded("Genitalia ambiguous", data.genitaliaAmbiguous);
    await pushCoded("Anus patent", data.anusPatent);
    await pushCoded("Anus imperforate", data.anusImperforate);
    await pushCoded("Anus abnormal", data.anusAbnormal);
    await pushText("Abdomen summary notes", data.abdomenSummaryNotes);
    await pushCoded("Tone assessment", data.toneAssessment);
    await pushCoded("Suck reflex", data.suckReflex);
    await pushCoded("Grasp reflex", data.graspReflex);
    await pushCoded("Moro reflex", data.MoreReflex);
    await pushText("Neurological summary notes", data.neurologicalSummaryNotes);
    if (data.musculoskeletalDeformities?.length) {
      for (const deformity of data.musculoskeletalDeformities) {
        await pushCoded("Musculoskeletal deformities", deformity);
      }
    }
    if (data.skinFindings?.length) {
      for (const finding of data.skinFindings) {
        await pushCoded("Skin findings", finding);
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
        observations.push(await factory());
      } catch (error) {
        console.warn(`[SignsSymptoms] Skipping concept "${concept}":`, error);
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
    await pushCoded("Re-admission", data.is_readmission);
    if (data.presenting_complaints && Array.isArray(data.presenting_complaints) && data.presenting_complaints.length > 0) {
      for (const complaint of data.presenting_complaints) {
        const complaintValue = typeof complaint === "object" && complaint !== null && "value" in complaint ? complaint.value : complaint;
        await pushCoded("Presenting complaint", complaintValue);
      }
    }
    await pushText("Signs/Symptoms notes", data.detailed_assessment_notes);
    await pushText("Symptom onset time", data.symptom_onset_time);
    await pushCoded("Symptom severity", data.symptom_severity);
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
    await pushCoded("Type of feed", data.type_of_feed);
    await pushCoded("Mode of feeding", data.mode_of_feeding);
    await pushCoded("Frequency of feeding", data.frequency_of_feeding);
    await pushText("Duration of feeding", data.duration_of_feeding);
    await pushCoded("Effort during feeding", data.effort_during_feeding);
    await pushCoded("Is baby vomiting", data.is_baby_vomiting);
    await pushText("Frequency of vomiting", data.frequency_of_vomiting);
    await pushCoded("Passage of meconium", data.passage_of_meconium);
    await pushText("Frequency of stooling", data.frequency_of_stooling);
    await pushCoded("Color of stools", data.color_of_stools);
    await pushCoded("Consistency of stools", data.consistency_of_stools);
    await pushCoded("Blood in stools", data.blood_in_stools);
    await pushCoded("Mucus in stools", data.mucus_in_stools);
    await pushCoded("Is the baby passing urine?", data.is_baby_passing_urine);
    await pushNumber("Number of wet nappies per day", data.number_of_wet_nappies);
    await pushCoded("Color of urine", data.color_of_urine);
    await pushNumber("Volume (ml)", data.volume_ml);
    await pushCoded("Weight trend since birth", data.weight_trend_since_birth);
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
    await pushCoded("Umbilical condition", data.umbilical_condition);
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
   * Saves admission outcomes data
   * Creates an encounter and saves observations for admission outcomes
   *
   * @param patientId - Patient ID
   * @param outcomesData - Admission outcomes form data
   * @param date - Assessment date (defaults to session date)
   * @returns Saved encounter and observations
   */
  static async saveAdmissionOutcomes(patientId, outcomesData, date = HisDate.sessionDate()) {
    try {
      const observations = await this.buildAdmissionOutcomesObservations(outcomesData, date);
      if (observations.length === 0) {
        console.warn("[NeonatalService] No observations to save for admission outcomes");
        return null;
      }
      const providerId = Service.getUserID() || -1;
      const encounter = new AppEncounterService(patientId, EncounterTypeId.NEONATAL_ADMISSION_OUTCOMES, providerId);
      encounter.setDate(date);
      await encounter.createEncounter();
      const result = await encounter.saveObservationList(observations);
      console.log("[NeonatalService] Admission outcomes saved successfully", {
        encounterId: encounter.getEncounterID(),
        observationCount: observations.length
      });
      return result;
    } catch (error) {
      console.error("[NeonatalService] Failed to save admission outcomes:", error);
      throw error;
    }
  }
  /**
   * Builds observations array from admission outcomes form data
   * Maps form fields to OpenMRS observations
   *
   * @param data - Admission outcomes form data
   * @param date - Observation date
   * @returns Array of observation objects
   */
  static async buildAdmissionOutcomesObservations(data, date) {
    const observations = [];
    const hasValue = (value) => value !== void 0 && value !== null && value !== "";
    const pushObservation = async (concept, factory) => {
      try {
        observations.push(await factory());
      } catch (error) {
        console.warn(`[AdmissionOutcomes] Skipping concept "${concept}":`, error);
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
    await pushCoded("Admission outcome", data.admissionOutcome);
    await pushText("Safeguard concerns", data.safeguardConcerns);
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
    return observations;
  }
}

export { NeonatalService as N };
