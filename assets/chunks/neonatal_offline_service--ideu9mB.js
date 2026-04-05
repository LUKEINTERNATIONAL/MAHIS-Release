import { g as getPouchDBRecords, L as ProgramId, a_ as getOfflineSavedUnsavedData } from '../index-D-gMOJ4F.js';

const NeonatalOfflineService = {
  async getEnrolledPatients(locationId) {
    try {
      const selector = locationId ? { location_id: locationId } : {};
      const patients = await getPouchDBRecords("patients_records", {
        selector
      });
      const patientList = Array.isArray(patients) ? patients : patients.records;
      const neonatalPatients = patientList.filter((p) => {
        const programName = p.program || p?.program?.name;
        const programId = p.program_id ?? p?.program?.program_id;
        return programName === "NEONATAL" || programName === "NEONATAL PROGRAM" || programName === "Neonatal program" || Number(programId) === ProgramId.NEONATAL_PROGRAM;
      });
      return neonatalPatients;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getPatientVisits(patientId) {
    try {
      const visits = await getPouchDBRecords("visits", {
        selector: {
          patient_id: patientId
        }
      });
      const visitList = Array.isArray(visits) ? visits : visits.records;
      return visitList.filter((visit) => {
        const programName = visit.program || visit?.program?.name;
        const programId = visit.program_id ?? visit?.program?.program_id;
        return programName === "NEONATAL" || programName === "NEONATAL PROGRAM" || programName === "Neonatal program" || Number(programId) === ProgramId.NEONATAL_PROGRAM;
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getVisitStages(visitId) {
    try {
      const stages = await getPouchDBRecords("stages", {
        selector: {
          visit_id: visitId
        }
      });
      return Array.isArray(stages) ? stages : stages.records;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getEnrollmentData(patientId) {
    try {
      const data = getOfflineSavedUnsavedData("neonatal_enrollments");
      return data.filter((e) => e.patient_id === patientId);
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getDischargeData(patientId) {
    try {
      const data = getOfflineSavedUnsavedData("neonatal_discharges");
      return data.filter((e) => e.patient_id === patientId);
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getVitalsData(patientId) {
    try {
      const data = getOfflineSavedUnsavedData("neonatal_vitals");
      return data.filter((e) => e.patient_id === patientId);
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getNeonatalEncounters(locationId) {
    try {
      const selector = locationId ? { location_id: locationId, program_id: ProgramId.NEONATAL_PROGRAM } : { program_id: ProgramId.NEONATAL_PROGRAM };
      const stages = await getPouchDBRecords("stages", {
        selector
      });
      return Array.isArray(stages) ? stages : stages.records;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getNeonatalObservations(patientId) {
    try {
      const stages = await getPouchDBRecords("stages", {
        selector: {
          patient_id: patientId,
          program_id: ProgramId.NEONATAL_PROGRAM
        }
      });
      return Array.isArray(stages) ? stages : stages.records;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async searchPatients(searchTerm, locationId) {
    try {
      const allPatients = await this.getEnrolledPatients(locationId);
      const searchLower = searchTerm.toLowerCase();
      return allPatients.filter((patient) => {
        const patientId = patient.patient_id?.toString().toLowerCase() || "";
        const givenName = patient.given_name?.toLowerCase() || "";
        const familyName = patient.family_name?.toLowerCase() || "";
        const middleName = patient.middle_name?.toLowerCase() || "";
        return patientId.includes(searchLower) || givenName.includes(searchLower) || familyName.includes(searchLower) || middleName.includes(searchLower);
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getRecentPatients(locationId, limit = 50) {
    try {
      const patients = await this.getEnrolledPatients(locationId);
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const neonates = patients.filter((patient) => {
        const birthdate = patient.personInformation?.birthdate || patient.date_of_birth;
        const fallbackDate = patient.date_created || patient.date_enrolled || patient.last_encounter_time || patient.encounter_datetime;
        const baseDate = birthdate || fallbackDate;
        if (!baseDate) return false;
        const dob = new Date(baseDate);
        dob.setHours(0, 0, 0, 0);
        const ageDays = Math.floor((today.getTime() - dob.getTime()) / (1e3 * 60 * 60 * 24));
        return ageDays >= 0 && ageDays <= 28;
      });
      const sorted = neonates.sort((a, b) => {
        const dateA = new Date(a.last_encounter_time || a.personInformation?.birthdate || a.date_of_birth || 0).getTime();
        const dateB = new Date(b.last_encounter_time || b.personInformation?.birthdate || b.date_of_birth || 0).getTime();
        return dateB - dateA;
      });
      return sorted.slice(0, limit);
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async hasOfflineData(patientId) {
    try {
      const visits = await this.getPatientVisits(patientId);
      const enrollments = this.getEnrollmentData(patientId);
      return visits.length > 0 || enrollments.length > 0;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  async getStatistics(locationId, dateFilter) {
    try {
      const allPatients = await this.getEnrolledPatients(locationId);
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const dateFilterRules = {
        "today": (days) => days === 0,
        "yesterday": (days) => days === 1,
        "this_week": (days) => days <= 7,
        "this_month": (days) => days <= 30
      };
      const matchesFilter = (dateStr) => {
        if (!dateFilter || !dateStr) return true;
        const date = new Date(dateStr);
        date.setHours(0, 0, 0, 0);
        const diffDays = Math.floor((today.getTime() - date.getTime()) / (1e3 * 60 * 60 * 24));
        const rule = dateFilterRules[dateFilter];
        return rule ? rule(diffDays) : true;
      };
      const stats = {
        enrolled: { count: 0, neonates: [] },
        admitted: { count: 0, neonates: [] },
        discharged: { count: 0, neonates: [] },
        critical: { count: 0, neonates: [] },
        triage_only: { count: 0, neonates: [] },
        recent_neonates: []
      };
      const neonatesOnly = allPatients.filter((patient) => {
        const birthdate = patient.personInformation?.birthdate || patient.date_of_birth;
        const fallbackDate = patient.date_created || patient.date_enrolled || patient.last_encounter_time || patient.encounter_datetime;
        const baseDate = birthdate || fallbackDate;
        if (!baseDate) return false;
        const dob = new Date(baseDate);
        dob.setHours(0, 0, 0, 0);
        const ageDays = Math.floor((today.getTime() - dob.getTime()) / (1e3 * 60 * 60 * 24));
        return ageDays >= 0 && ageDays <= 28;
      });
      for (const patient of neonatesOnly) {
        const visits = await this.getPatientVisits(patient.patient_id);
        if (visits.length > 0) {
          for (const visit of visits) {
            const visitDate = visit.visit_date || visit.encounter_datetime || visit.date_created || "";
            if (!visitDate || !matchesFilter(visitDate)) continue;
            const neonate = {
              id: patient.patient_id || patient.patientID || patient.ID,
              name: `${patient.personInformation?.given_name || patient.given_name || ""} ${patient.personInformation?.family_name || patient.family_name || ""}`.trim() || "Unknown Neonate",
              mrn: patient.patient_id || patient.patientID || patient.ID,
              age: this.calculateAge(patient.personInformation?.birthdate || patient.date_of_birth),
              weight: visit.current_weight || "N/A",
              status: visit.status || "Unknown",
              gender: patient.personInformation?.gender || patient.gender
            };
            if (visit.status === "Admitted" || visit.status === "In patient") {
              stats.admitted.neonates.push(neonate);
            } else if (visit.status === "Discharged") {
              stats.discharged.neonates.push(neonate);
            } else if (visit.status === "Critical") {
              stats.critical.neonates.push(neonate);
            } else if (visit.status === "Triaged") {
              stats.triage_only.neonates.push(neonate);
            }
            stats.enrolled.neonates.push(neonate);
          }
        } else {
          const patientIdRaw = patient.patient_id || patient.patientID || patient.ID;
          const patientIdNum = Number(patientIdRaw);
          let latestEncounterDate = "";
          let hasTriageEncounter = false;
          let triageFirstName = "";
          let triageLastName = "";
          let triageGender = "";
          const hasEntries = (section) => {
            if (!section || typeof section !== "object") return false;
            const saved = Array.isArray(section.saved) ? section.saved.length : 0;
            const unsaved = Array.isArray(section.unsaved) ? section.unsaved.length : 0;
            return saved + unsaved > 0;
          };
          if (hasEntries(patient?.neonatal_triage) || hasEntries(patient?.neonatal_emergency_triage)) {
            hasTriageEncounter = true;
          }
          try {
            const stages = await getPouchDBRecords("stages", {
              selector: {
                $or: [
                  { patient_id: patientIdRaw },
                  { patient_id: patientIdNum }
                ],
                program_id: ProgramId.NEONATAL_PROGRAM
              }
            });
            const stageList = Array.isArray(stages) ? stages : stages.records;
            for (const stage of stageList || []) {
              const encounterTypeId = Number(stage?.encounter_type_id);
              const encounterTypeName = String(stage?.encounter_type_name || stage?.stage || "").toUpperCase();
              if (encounterTypeId === 232 || encounterTypeId === 233 || encounterTypeName.includes("TRIAGE")) {
                hasTriageEncounter = true;
              }
              if (!latestEncounterDate && (stage?.encounter_datetime || stage?.created_at)) {
                latestEncounterDate = stage.encounter_datetime || stage.created_at;
              }
              if (stage.first_name && !triageFirstName) {
                triageFirstName = stage.first_name;
              }
              if (stage.last_name && !triageLastName) {
                triageLastName = stage.last_name;
              }
              if (stage.gender && !triageGender) {
                triageGender = stage.gender;
              }
            }
          } catch (error) {
            console.error(error);
          }
          const enrollmentDate = patient.date_enrolled || patient.date_created || patient.last_encounter_time || patient.encounter_datetime || latestEncounterDate;
          if (enrollmentDate && matchesFilter(enrollmentDate) || !enrollmentDate && !dateFilter) {
            const firstName = patient.personInformation?.given_name || patient.given_name || triageFirstName || "";
            const lastName = patient.personInformation?.family_name || patient.family_name || triageLastName || "";
            const patientGender = patient.personInformation?.gender || patient.gender || triageGender || "";
            const fullName = `${firstName} ${lastName}`.trim();
            const neonate = {
              id: patientIdRaw,
              name: fullName || "Unknown Neonate",
              mrn: patientIdRaw,
              age: this.calculateAge(patient.personInformation?.birthdate || patient.date_of_birth),
              weight: "N/A",
              status: hasTriageEncounter ? "Triaged" : "In patient",
              gender: patientGender
            };
            stats.enrolled.neonates.push(neonate);
            if (hasTriageEncounter) {
              stats.triage_only.neonates.push(neonate);
            } else {
              stats.admitted.neonates.push(neonate);
            }
          }
        }
      }
      stats.enrolled.count = stats.enrolled.neonates.length;
      stats.admitted.count = stats.admitted.neonates.length;
      stats.discharged.count = stats.discharged.neonates.length;
      stats.critical.count = stats.critical.neonates.length;
      stats.triage_only.count = stats.triage_only.neonates.length;
      stats.recent_neonates = stats.enrolled.neonates.slice(0, 10);
      if (stats.recent_neonates.length === 0 && neonatesOnly.length > 0) {
        const recentPatients = neonatesOnly.sort((a, b) => {
          const dateA = new Date(a.personInformation?.birthdate || a.date_of_birth || a.date_created || 0).getTime();
          const dateB = new Date(b.personInformation?.birthdate || b.date_of_birth || b.date_created || 0).getTime();
          return dateB - dateA;
        }).slice(0, 10);
        stats.recent_neonates = recentPatients.map((patient) => ({
          id: patient.patient_id || patient.patientID || patient.ID,
          name: `${patient.personInformation?.given_name || patient.given_name || ""} ${patient.personInformation?.family_name || patient.family_name || ""}`.trim() || "Unknown Neonate",
          mrn: patient.patient_id || patient.patientID || patient.ID,
          age: this.calculateAge(patient.personInformation?.birthdate || patient.date_of_birth),
          weight: "N/A",
          status: "In patient",
          gender: patient.personInformation?.gender || patient.gender
        }));
      }
      return stats;
    } catch (error) {
      console.error(error);
      return {
        enrolled: { count: 0, neonates: [] },
        admitted: { count: 0, neonates: [] },
        discharged: { count: 0, neonates: [] },
        critical: { count: 0, neonates: [] },
        triage_only: { count: 0, neonates: [] },
        recent_neonates: []
      };
    }
  },
  async getSavedEncounters(patientId) {
    try {
      const encounterTypes = /* @__PURE__ */ new Set();
      const patientRecords = await getPouchDBRecords("patients_records", {
        selector: {
          $or: [
            { patientID: Number(patientId) },
            { ID: String(patientId) },
            { ID: Number(patientId) }
          ]
        }
      });
      const patientRecord = Array.isArray(patientRecords) && patientRecords.length > 0 ? patientRecords[0] : patientRecords?.records?.[0];
      const sectionMap = {
        neonatal_triage: "NEONATAL TRIAGE",
        neonatal_emergency_triage: "NEONATAL EMERGENCY TRIAGE",
        neonatal_signs_symptoms: "NEONATAL SIGNS & SYMPTOMS",
        neonatal_review_of_systems: "NEONATAL REVIEW OF SYSTEMS",
        neonatal_physical_examination: "PHYSICAL EXAMINATION BABY",
        neonatal_physical_examination_baby: "PHYSICAL EXAMINATION BABY",
        neonatal_systemic_examination: "NEONATAL SYSTEMIC EXAMINATION",
        neonatal_vitals: "VITALS",
        neonatal_enrollments: "NEONATAL ENROLLMENT",
        neonatal_clinical_review_outcomes: "NEONATAL CLINICAL REVIEW OUTCOMES",
        neonatal_discharges: "NEONATAL DISCHARGE",
        diagnosis: "DIAGNOSIS",
        treatment: "TREATMENT",
        labOrders: "LAB ORDERS"
      };
      const hasEntries = (section) => {
        if (!section || typeof section !== "object") return false;
        const saved = Array.isArray(section.saved) ? section.saved.length : 0;
        const unsaved = Array.isArray(section.unsaved) ? section.unsaved.length : 0;
        return saved + unsaved > 0;
      };
      if (patientRecord) {
        Object.entries(sectionMap).forEach(([key, encounterName]) => {
          if (hasEntries(patientRecord[key])) {
            encounterTypes.add(encounterName);
          }
        });
      }
      if (patientRecord?.observations && typeof patientRecord.observations === "object" && !Array.isArray(patientRecord.observations)) {
        const observationKeys = Object.keys(patientRecord.observations);
        observationKeys.forEach((encounterTypeName) => {
          if (encounterTypeName && encounterTypeName !== "undefined" && encounterTypeName !== "null") {
            encounterTypes.add(encounterTypeName);
          }
        });
      }
      const visits = await getPouchDBRecords("visits", {
        selector: {
          $or: [
            { patient_id: patientId },
            { patient_id: Number(patientId) },
            { identifier: patientId },
            { identifier: String(patientId) }
          ]
        }
      });
      const visitRecords = Array.isArray(visits) ? visits : visits.records || [];
      for (const visit of visitRecords) {
        if (visit.encounter_type_name) {
          encounterTypes.add(visit.encounter_type_name);
        }
        if (visit.encounter_type_id) {
          const encounterTypeName = this.getEncounterTypeName(visit.encounter_type_id);
          if (encounterTypeName) {
            encounterTypes.add(encounterTypeName);
          }
        }
      }
      const stages = await getPouchDBRecords("stages", {
        selector: {
          $or: [
            { patient_id: patientId },
            { patient_id: Number(patientId) }
          ]
        }
      });
      const stageRecords = Array.isArray(stages) ? stages : stages.records || [];
      for (const stage of stageRecords) {
        if (stage.encounter_type_name) {
          encounterTypes.add(stage.encounter_type_name);
        } else if (stage.stage) {
          encounterTypes.add(stage.stage);
        }
        if (stage.encounter_type_id) {
          const encounterTypeName = this.getEncounterTypeName(stage.encounter_type_id);
          if (encounterTypeName) {
            encounterTypes.add(encounterTypeName);
          }
        }
      }
      return Array.from(encounterTypes);
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getEncounterTypeName(encounterTypeId) {
    const encounterTypeMap = {
      6: "VITALS",
      25: "TREATMENT",
      32: "LAB RESULTS",
      41: "DIAGNOSIS",
      57: "LAB ORDERS",
      117: "PHYSICAL EXAMINATION BABY",
      229: "NEONATAL SYSTEMIC EXAMINATION",
      230: "NEONATAL SIGNS & SYMPTOMS",
      231: "NEONATAL REVIEW OF SYSTEMS",
      232: "NEONATAL EMERGENCY TRIAGE",
      233: "NEONATAL TRIAGE",
      234: "NEONATAL CLINICAL REVIEW OUTCOMES",
      235: "NEONATAL DISCHARGE",
      236: "NEONATAL ENROLLMENT"
    };
    return encounterTypeMap[encounterTypeId] || null;
  },
  async getPatientSummary(patientId) {
    try {
      const visits = await this.getPatientVisits(patientId);
      const vitalsData = this.getVitalsData(patientId);
      const enrollmentData = this.getEnrollmentData(patientId);
      const dischargeData = this.getDischargeData(patientId);
      return {
        visits,
        vitals: vitalsData,
        enrollment: enrollmentData,
        discharge: dischargeData,
        hasData: visits.length > 0 || vitalsData.length > 0
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  calculateAge(dateOfBirth) {
    if (!dateOfBirth) return "N/A";
    try {
      const dob = new Date(dateOfBirth);
      const now = /* @__PURE__ */ new Date();
      const diffMs = now.getTime() - dob.getTime();
      const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
      if (diffDays < 1) {
        const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
        return `${diffHours}h`;
      }
      if (diffDays < 7) {
        return `${diffDays}d`;
      }
      const diffWeeks = Math.floor(diffDays / 7);
      return `${diffWeeks}w`;
    } catch (error) {
      console.error(error);
      return "N/A";
    }
  }
};

export { NeonatalOfflineService, NeonatalOfflineService as default };
