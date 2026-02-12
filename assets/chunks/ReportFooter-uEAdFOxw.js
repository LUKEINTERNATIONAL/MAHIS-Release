import { a6 as useUserStore, H as HisDate, b as EncounterTypeId, aq as ConceptService, E as EncounterService, O as OrderService, bH as DrugOrderService, P as PatientService, _ as _export_sfc } from '../index-CzDIs3ea.js';
import { w as watch, bE as QRCode, cz as E, bB as html2canvas, s as defineComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, D as toDisplayString, E as renderSlot, c as computed, a2 as onMounted, f as ref, H as createCommentVNode } from './vendor-DrpjccQs.js';
import { z as triageConceptMapping } from './NeonatalStepper-CFXp1FJv.js';
import { N as NeonatalService } from './neonatal_service-BlNy4OFX.js';

const signoffSections = [
  {
    title: "Clinical Review Sign-Off",
    subtitle: "Your details will be auto populated. Please confirm.",
    formData: [
      {
        componentType: "inputField",
        header: "Healthcare Worker/Student ID",
        name: "healthcareWorkerId",
        placeholder: "Enter your ID",
        validation: (value) => value ? null : "Healthcare Worker/Student ID is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Electronic Signature",
        name: "electronicSignature",
        placeholder: "Certified User Name",
        validation: (value) => value ? null : "Electronic signature is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Role/Cadre",
        name: "userRole",
        placeholder: "Your role",
        validation: (value) => value ? null : "Role/Cadre is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "dateInputField",
        header: "Date & Time",
        name: "signOffDate",
        validation: (value) => value ? null : "Date & Time is required",
        disabled: true,
        padding: true
      }
    ]
  }
];
const neonatalClinicalReviewSignOffSections = signoffSections;

function useClinicalReviewSignOff(formRef) {
  const userStore = useUserStore();
  const populateSignOffData = () => {
    if (!formRef.value || !userStore.user) {
      return null;
    }
    const updates = {
      healthcareWorkerId: userStore.user.username || "",
      electronicSignature: getFullName(),
      userRole: getUserRole(),
      signOffDate: HisDate.currentDate()
    };
    Object.entries(updates).forEach(([field, value]) => {
      if (formRef.value.setFormValue) {
        formRef.value.setFormValue(field, value);
      }
    });
    return updates;
  };
  const getFullName = () => {
    if (!userStore.user) return "";
    const nameParts = [
      userStore.user.given_name,
      userStore.user.family_name
    ].filter(Boolean);
    return nameParts.length > 0 ? nameParts.join(" ") : userStore.user.username || "";
  };
  const getUserRole = () => {
    return userStore.user?.user_type || "Clinician";
  };
  watch(
    () => formRef.value,
    (instance) => {
      if (instance && instance.setFormValue) {
        setTimeout(() => {
          populateSignOffData();
        }, 100);
      }
    },
    { immediate: true }
  );
  watch(
    () => userStore.user,
    (newUser) => {
      if (newUser && formRef.value) {
        populateSignOffData();
      }
    },
    { deep: true }
  );
  return {
    populateSignOffData,
    userStore,
    getFullName,
    getUserRole
  };
}

class NeonatalReportService {
  static encountersCache = /* @__PURE__ */ new Map();
  static ordersCache = /* @__PURE__ */ new Map();
  static drugOrdersCache = /* @__PURE__ */ new Map();
  static enrollmentCache = /* @__PURE__ */ new Map();
  static patientCache = /* @__PURE__ */ new Map();
  static conceptNameCache = /* @__PURE__ */ new Map();
  static CLINICAL_REVIEW_ENCOUNTER_TYPES = /* @__PURE__ */ new Set([
    EncounterTypeId.NEONATAL_ENROLLMENT,
    EncounterTypeId.NEONATAL_EMERGENCY_TRIAGE,
    EncounterTypeId.NEONATAL_TRIAGE,
    EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS,
    EncounterTypeId.NEONATAL_REVIEW_OF_SYSTEMS,
    EncounterTypeId.PHYSICAL_EXAMINATION_BABY,
    EncounterTypeId.VITALS,
    EncounterTypeId.NEONATAL_SYSTEMIC_EXAMINATION,
    EncounterTypeId.DIAGNOSIS,
    EncounterTypeId.TREATMENT,
    EncounterTypeId.NEONATAL_CLINICAL_REVIEW_OUTCOMES
  ]);
  static DISCHARGE_REPORT_ENCOUNTER_TYPES = /* @__PURE__ */ new Set([
    EncounterTypeId.NEONATAL_DISCHARGE,
    EncounterTypeId.VITALS,
    EncounterTypeId.DIAGNOSIS
  ]);
  static buildPatientInfo(patient) {
    let fullName = "Unknown";
    if (patient?.person?.display) {
      fullName = patient.person.display;
    } else if (patient?.personInformation) {
      fullName = `${patient.personInformation.given_name} ${patient.personInformation.family_name}`;
    } else if (patient?.person?.names?.[0]) {
      const name = patient.person.names[0];
      fullName = `${name.given_name} ${name.family_name}`;
    }
    let npid = "N/A";
    const identifiers = patient?.identifiers || patient?.patient_identifiers || [];
    const npidObj = identifiers.find(
      (id) => id.identifierType?.display === "National ID" || id.identifier_type === 3 || // Common ID for NPID
      id.type?.name === "National ID"
    );
    if (npidObj) npid = npidObj.identifier;
    let dob = "N/A";
    const birthdate = patient?.person?.birthdate || patient?.personInformation?.birthdate;
    if (birthdate) {
      dob = new Date(birthdate).toLocaleDateString();
    }
    return {
      fullName,
      npid,
      gender: patient?.person?.gender || patient?.personInformation?.gender || "N/A",
      dob
    };
  }
  static async getPatientInfo(patientId) {
    try {
      const patient = await this.getPatient(patientId);
      return this.buildPatientInfo(patient);
    } catch (error) {
      console.error("Failed to fetch patient info", error);
      return { fullName: "Unknown", npid: "N/A", gender: "N/A", dob: "N/A" };
    }
  }
  static getFacilityInfo() {
    const userStore = useUserStore();
    return {
      name: userStore.facilityLocation?.name || "Facility Name",
      info: userStore.facilityLocation?.name || "Facility Info"
    };
  }
  static normalizeConceptName(name) {
    return (name ?? "").trim().toUpperCase();
  }
  static getObsChildren(obs) {
    const children = obs?.groupMembers ?? obs?.children ?? obs?.child;
    return Array.isArray(children) ? children : [];
  }
  static getConceptNamesFromObs(obs) {
    const names = [];
    const rawConceptName = obs?.concept_name ?? obs?.conceptName ?? obs?.concept_display ?? obs?.conceptDisplay ?? "";
    if (typeof rawConceptName === "string" && rawConceptName.trim()) names.push(rawConceptName.trim());
    const concept = obs?.concept;
    const direct = concept?.display ?? concept?.name?.display ?? concept?.name?.name ?? concept?.name ?? concept?.concept_name?.name ?? "";
    if (typeof direct === "string" && direct.trim()) names.push(direct.trim());
    const conceptNames = concept?.concept_names;
    if (Array.isArray(conceptNames)) {
      for (const n of conceptNames) {
        const s = n?.name;
        if (typeof s === "string" && s.trim()) names.push(s.trim());
      }
    }
    return [...new Set(names)];
  }
  static obsValueToString(value) {
    if (value === null || value === void 0) return "";
    if (typeof value === "string") return value.trim();
    if (typeof value === "number") return Number.isFinite(value) ? String(value) : "";
    if (value?.display) return String(value.display).trim();
    if (value?.name) return String(value.name).trim();
    return String(value).trim();
  }
  static parseNumericString(value) {
    const s = String(value ?? "").trim();
    if (!s || !/^\d+$/.test(s)) return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
  }
  static async getConceptNameCached(conceptId) {
    const existing = this.conceptNameCache.get(conceptId);
    if (existing) return existing;
    const promise = Promise.resolve(ConceptService.getConceptName(conceptId)).then((name) => typeof name === "string" ? name : String(name ?? "")).then((name) => name.trim()).catch(() => "");
    this.conceptNameCache.set(conceptId, promise);
    return promise;
  }
  static async decodeObsValueIfCodedId(obs, extractedValue) {
    const numeric = this.parseNumericString(extractedValue);
    if (!numeric) return extractedValue;
    const rawValueCoded = obs?.value_coded ?? obs?.valueCoded;
    const valueCoded = Number(rawValueCoded);
    if (!Number.isFinite(valueCoded) || valueCoded !== numeric) return extractedValue;
    if (valueCoded === 1065) return "Yes";
    if (valueCoded === 1066) return "No";
    const conceptName = await this.getConceptNameCached(valueCoded);
    return conceptName || extractedValue;
  }
  static extractObsValue(obs) {
    const raw = obs?.value_text ?? obs?.value_numeric ?? obs?.value_datetime ?? obs?.value ?? obs?.value_coded_name ?? obs?.value_coded ?? obs?.answer;
    return this.obsValueToString(raw);
  }
  static getObsTimestamp(obs) {
    const raw = obs?.obs_datetime ?? obs?.obsDatetime ?? obs?.observation_datetime ?? obs?.date_created ?? obs?.dateCreated;
    if (!raw) return 0;
    const t = new Date(raw).getTime();
    return Number.isFinite(t) ? t : 0;
  }
  static getEncounterTypeId(encounter) {
    const raw = encounter?.encounter_type ?? encounter?.encounter_type_id ?? encounter?.encounterTypeId ?? encounter?.type?.encounter_type_id ?? encounter?.type?.encounter_type ?? encounter?.type?.id;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  static getEncounterTimestamp(encounter) {
    const raw = encounter?.encounter_datetime ?? encounter?.encounterDatetime ?? encounter?.date_created ?? encounter?.dateCreated;
    if (!raw) return 0;
    const t = new Date(raw).getTime();
    return Number.isFinite(t) ? t : 0;
  }
  static getEncounterId(encounter) {
    const raw = encounter?.encounter_id ?? encounter?.encounterId ?? encounter?.id;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  static getObsEncounterId(obs) {
    const raw = obs?.encounter_id ?? obs?.encounterId ?? obs?.encounter?.encounter_id ?? obs?.encounter?.encounterId;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  static buildEncounterByIdIndex(encounters) {
    const map = /* @__PURE__ */ new Map();
    for (const enc of encounters ?? []) {
      const encounterId = this.getEncounterId(enc);
      if (!encounterId) continue;
      map.set(encounterId, {
        encounterId,
        encounterTypeId: this.getEncounterTypeId(enc),
        encounterDateTime: enc?.encounter_datetime ?? enc?.encounterDatetime ?? enc?.date_created ?? enc?.dateCreated ?? null
      });
    }
    return map;
  }
  static stableParamsKey(params) {
    const keys = Object.keys(params ?? {}).sort();
    const normalized = {};
    for (const k of keys) normalized[k] = params[k];
    return JSON.stringify(normalized);
  }
  static selectEncountersForReport(encountersRaw, typeIds, reportEndTs, startTsCandidate) {
    const eligible = (encountersRaw ?? []).filter((e) => {
      const typeId = this.getEncounterTypeId(e);
      return !!typeId && typeIds.has(typeId);
    });
    let earliestEncounterTs = Number.POSITIVE_INFINITY;
    for (const e of eligible) {
      const ts = this.getEncounterTimestamp(e);
      if (!ts || ts > reportEndTs) continue;
      if (ts < earliestEncounterTs) earliestEncounterTs = ts;
    }
    if (!Number.isFinite(earliestEncounterTs)) earliestEncounterTs = 0;
    const startTs = typeof startTsCandidate === "number" && Number.isFinite(startTsCandidate) && startTsCandidate > 0 ? Math.min(startTsCandidate, earliestEncounterTs || startTsCandidate) : earliestEncounterTs;
    const base = eligible.filter((e) => {
      const ts = this.getEncounterTimestamp(e);
      if (!ts) return true;
      if (ts > reportEndTs) return false;
      return ts >= startTs;
    });
    const present = /* @__PURE__ */ new Set();
    for (const e of base) {
      const t = this.getEncounterTypeId(e);
      if (t) present.add(t);
    }
    const extras = [];
    for (const requiredTypeId of typeIds) {
      if (present.has(requiredTypeId)) continue;
      const candidates = (encountersRaw ?? []).filter((e) => this.getEncounterTypeId(e) === requiredTypeId).filter((e) => {
        const ts = this.getEncounterTimestamp(e);
        if (!ts) return true;
        return ts <= reportEndTs;
      }).sort((a, b) => this.getEncounterTimestamp(b) - this.getEncounterTimestamp(a));
      if (candidates.length > 0) extras.push(candidates[0]);
    }
    const merged = [...base, ...extras];
    const seen = /* @__PURE__ */ new Set();
    const encounters = merged.filter((e) => {
      const id = this.getEncounterId(e);
      if (!id) return true;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
    return { encounters, startTs, startTsCandidate, earliestEncounterTs };
  }
  static buildObsIndex(encounters) {
    const index = /* @__PURE__ */ new Map();
    const push = (conceptName, obs) => {
      const key = this.normalizeConceptName(conceptName);
      if (!key) return;
      const arr = index.get(key);
      if (arr) arr.push(obs);
      else index.set(key, [obs]);
    };
    const allObs = [];
    const seen = /* @__PURE__ */ new WeakSet();
    const collectObsDeep = (obs) => {
      if (!obs || typeof obs !== "object") return;
      if (seen.has(obs)) return;
      seen.add(obs);
      allObs.push(obs);
      for (const child of this.getObsChildren(obs)) collectObsDeep(child);
    };
    for (const enc of encounters ?? []) {
      const obsList = enc?.observations ?? enc?.obs ?? enc?.observations_list;
      if (!Array.isArray(obsList)) continue;
      for (const obs of obsList) collectObsDeep(obs);
    }
    const obsById = /* @__PURE__ */ new Map();
    for (const obs of allObs) {
      const idRaw = obs?.obs_id ?? obs?.obsId ?? obs?.id;
      const id = Number(idRaw);
      if (Number.isFinite(id)) obsById.set(id, obs);
    }
    for (const obs of allObs) {
      const parentRaw = obs?.obs_group_id ?? obs?.obsGroupId ?? obs?.obs_group?.obs_id ?? obs?.obsGroup?.obs_id ?? obs?.obsGroup?.id;
      const parentId = Number(parentRaw);
      if (!Number.isFinite(parentId)) continue;
      const parent = obsById.get(parentId);
      if (!parent) continue;
      if (!Array.isArray(parent.children)) parent.children = [];
      if (!parent.children.includes(obs)) parent.children.push(obs);
    }
    for (const obs of allObs) {
      for (const name of this.getConceptNamesFromObs(obs)) push(name, obs);
    }
    for (const [key, list] of index.entries()) {
      list.sort((a, b) => this.getObsTimestamp(b) - this.getObsTimestamp(a));
      index.set(key, list);
    }
    return index;
  }
  static getLatestObs(index, conceptCandidates) {
    const candidates = Array.isArray(conceptCandidates) ? conceptCandidates : [conceptCandidates];
    for (const name of candidates) {
      const list = index.get(this.normalizeConceptName(name));
      if (list && list.length) return list[0];
    }
    return null;
  }
  static getLatestObsForEncounterType(index, encounterById, encounterTypeId, conceptCandidates) {
    const candidates = Array.isArray(conceptCandidates) ? conceptCandidates : [conceptCandidates];
    for (const name of candidates) {
      const list = index.get(this.normalizeConceptName(name));
      if (!list || !list.length) continue;
      for (const obs of list) {
        const obsEncounterId = this.getObsEncounterId(obs);
        const enc = obsEncounterId ? encounterById.get(obsEncounterId) : null;
        if (enc?.encounterTypeId === encounterTypeId) return obs;
      }
    }
    return null;
  }
  static stripNeonatalSignOffMarker(text) {
    const raw = String(text ?? "");
    const marker = "[NEONATAL_SIGNOFF]";
    const at = raw.indexOf(marker);
    if (at < 0) return raw.trim();
    const before = raw.slice(0, at).trim();
    return before;
  }
  static getLatestValue(index, conceptCandidates) {
    const obs = this.getLatestObs(index, conceptCandidates);
    if (!obs) return "";
    return this.extractObsValue(obs);
  }
  static getLatestNeonatalSignOffFromNotes(index) {
    const list = index.get(this.normalizeConceptName("Clinician notes"));
    if (!list || !list.length) return null;
    for (const obs of list) {
      const raw = this.extractObsValue(obs);
      const marker = "[NEONATAL_SIGNOFF]";
      if (!raw || !raw.includes(marker)) continue;
      const jsonText = raw.slice(raw.indexOf(marker) + marker.length).trim();
      if (!jsonText) continue;
      try {
        const parsed = JSON.parse(jsonText);
        const toString = (v) => String(v ?? "").trim();
        return {
          healthcareWorkerId: toString(parsed?.healthcareWorkerId),
          electronicSignature: toString(parsed?.electronicSignature),
          userRole: toString(parsed?.userRole),
          signOffDate: toString(parsed?.signOffDate)
        };
      } catch {
        return null;
      }
    }
    return null;
  }
  static async getLatestDecodedValue(index, conceptCandidates) {
    const obs = this.getLatestObs(index, conceptCandidates);
    if (!obs) return "";
    const extracted = this.extractObsValue(obs);
    if (!extracted) return "";
    return this.decodeObsValueIfCodedId(obs, extracted);
  }
  static splitTriageList(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return [];
    return raw.split(/[\n,]+/g).map((s) => s.trim()).filter(Boolean);
  }
  static TRIAGE_BREATHING_LABELS = {
    not_breathing: "Not breathing",
    hr_low: "Heart rate low",
    hr_fast: "Heart rate fast",
    gasping: "GASPING or irregular breathing",
    chest_indrawing: "Chest indrawing",
    floppy: "VERY FLOPPY (Normal breathing & HR)",
    stable: "stable"
  };
  static TRIAGE_OBSERVATIONS_LABELS = {
    None: "None",
    Convulsions_twitching: "Convulsions or twitching",
    grunting: "Grunting or Severe chest indrawings",
    Central_cyanosis: "Central cyanosis"
  };
  static TRIAGE_PRESENT_SIGNS_LABELS = {
    none: "None",
    trunk_cold: "Trunk feels cold",
    capillary_refill: "Capillary refill >3 seconds",
    weak_pulse: "Weak femoral pulse"
  };
  static TRIAGE_REFERRAL_REQUIRED_LABELS = {
    immediate: "Yes, immediate referral",
    routine: "Yes, routine referral",
    none: "No referral needed"
  };
  static mapTriageValues(values, labels) {
    return values.map((v) => labels[v] ?? v);
  }
  static getAllValues(index, conceptCandidates) {
    const candidates = Array.isArray(conceptCandidates) ? conceptCandidates : [conceptCandidates];
    const all = [];
    for (const name of candidates) {
      const list = index.get(this.normalizeConceptName(name));
      if (!list) continue;
      for (const obs of list) {
        const v = this.extractObsValue(obs);
        if (v) all.push(v);
      }
      if (all.length) break;
    }
    return [...new Set(all)];
  }
  static async getAllDecodedValues(index, conceptCandidates) {
    const candidates = Array.isArray(conceptCandidates) ? conceptCandidates : [conceptCandidates];
    const all = [];
    for (const name of candidates) {
      const list = index.get(this.normalizeConceptName(name));
      if (!list) continue;
      for (const obs of list) {
        const extracted = this.extractObsValue(obs);
        if (!extracted) continue;
        const decoded = await this.decodeObsValueIfCodedId(obs, extracted);
        if (decoded) all.push(decoded);
      }
      if (all.length) break;
    }
    return [...new Set(all)];
  }
  static getLatestGroupChildren(index, parentConceptCandidates) {
    const obs = this.getLatestObs(index, parentConceptCandidates);
    return obs ? this.getObsChildren(obs) : [];
  }
  static async getEncounters(patientId, params = {}) {
    const key = `${patientId}|${this.stableParamsKey(params)}`;
    const existing = this.encountersCache.get(key);
    if (existing) return existing;
    const promise = EncounterService.getEncounters(Number(patientId), params).catch((e) => {
      this.encountersCache.delete(key);
      throw e;
    });
    this.encountersCache.set(key, promise);
    return promise;
  }
  static async getLabOrders(patientId) {
    const key = String(patientId);
    const existing = this.ordersCache.get(key);
    if (existing) return existing;
    const promise = OrderService.getOrders(Number(patientId)).catch((e) => {
      this.ordersCache.delete(key);
      throw e;
    });
    this.ordersCache.set(key, promise);
    return promise;
  }
  static async getDrugOrders(patientId) {
    const key = String(patientId);
    const existing = this.drugOrdersCache.get(key);
    if (existing) return existing;
    const promise = DrugOrderService.getAllDrugOrders(Number(patientId), 500).catch((e) => {
      this.drugOrdersCache.delete(key);
      throw e;
    });
    this.drugOrdersCache.set(key, promise);
    return promise;
  }
  static async getPatient(patientId) {
    const key = String(patientId);
    const existing = this.patientCache.get(key);
    if (existing) return existing;
    const promise = PatientService.findByID(patientId).catch((e) => {
      this.patientCache.delete(key);
      throw e;
    });
    this.patientCache.set(key, promise);
    return promise;
  }
  static async getEnrollment(patientId) {
    const key = String(patientId);
    const existing = this.enrollmentCache.get(key);
    if (existing) return existing;
    const promise = NeonatalService.checkEnrollment(Number(patientId)).catch((e) => {
      this.enrollmentCache.delete(key);
      throw e;
    });
    this.enrollmentCache.set(key, promise);
    return promise;
  }
  static resolvePatientRegistrationStartTs(patient) {
    const raw = patient?.date_created ?? patient?.dateCreated ?? patient?.date_registered ?? patient?.dateRegistered ?? patient?.dateCreatedAt ?? patient?.created_at ?? patient?.createdAt ?? patient?.person?.date_created ?? patient?.person?.dateCreated ?? patient?.personInformation?.date_created ?? patient?.personInformation?.dateCreated ?? patient?.patient?.date_created ?? patient?.patient?.dateCreated;
    if (!raw) return null;
    const t = new Date(raw).getTime();
    return Number.isFinite(t) ? t : null;
  }
  static resolveEnrollmentStartTs(enrollmentResult) {
    const raw = enrollmentResult?.enrollment_data?.date_enrolled ?? enrollmentResult?.enrollment_data?.dateEnrolled ?? enrollmentResult?.enrollment_data?.date_created ?? enrollmentResult?.enrollment_data?.dateCreated;
    if (!raw) return null;
    const t = new Date(raw).getTime();
    return Number.isFinite(t) ? t : null;
  }
  static resolveReportEndTs(reportDate) {
    const endOfDayLocal = (/* @__PURE__ */ new Date(`${reportDate}T23:59:59.999`)).getTime();
    if (Number.isFinite(endOfDayLocal) && endOfDayLocal > 0) return endOfDayLocal;
    const now = Date.now();
    return Number.isFinite(now) ? now : (/* @__PURE__ */ new Date()).getTime();
  }
  static async getClinicalReviewReportData(patientId) {
    const reportDate = HisDate.sessionDate();
    const reportEndTs = this.resolveReportEndTs(reportDate);
    const [encountersRaw, labOrders, drugOrdersRaw, patient, enrollmentResult] = await Promise.all([
      this.getEncounters(patientId),
      this.getLabOrders(patientId),
      this.getDrugOrders(patientId),
      this.getPatient(patientId),
      this.getEnrollment(patientId)
    ]);
    const patientInfo = this.buildPatientInfo(patient);
    const registrationStartTs = this.resolvePatientRegistrationStartTs(patient);
    const enrollmentStartTs = this.resolveEnrollmentStartTs(enrollmentResult);
    const startTsCandidate = registrationStartTs && enrollmentStartTs ? Math.min(registrationStartTs, enrollmentStartTs) : registrationStartTs ?? enrollmentStartTs ?? null;
    const selection = this.selectEncountersForReport(encountersRaw, this.CLINICAL_REVIEW_ENCOUNTER_TYPES, reportEndTs, startTsCandidate);
    const encounters = selection.encounters;
    const encounterById = this.buildEncounterByIdIndex(encounters);
    const index = this.buildObsIndex(encounters);
    const ensure = (v) => {
      const s = String(v ?? "").trim();
      return s ? s : "N/A";
    };
    const lastHivTestDateRaw = this.getLatestValue(index, "Last HIV test date");
    const lastHivTestDate = (() => {
      const s = String(lastHivTestDateRaw ?? "").trim();
      if (!s) return "N/A";
      const m = s.match(/^(\d{4}-\d{2}-\d{2})/);
      return m?.[1] ?? s;
    })();
    const resuscitationMethods = (await this.getAllDecodedValues(index, "Resuscitation method")).join(", ") || "N/A";
    const tetanusDiphtheria = (await this.getAllDecodedValues(index, "Tetanus/Diphtheria immunisation")).join(", ") || "N/A";
    const enrollmentData = {
      hasTwin: ensure(await this.getLatestDecodedValue(index, "Twin")),
      placeOfBirth: ensure(this.getLatestValue(index, "Place of birth")),
      nameOfBirthFacility: ensure(this.getLatestValue(index, "Name of birth facility")),
      typeOfBirth: ensure(this.getLatestValue(index, "Type of birth")),
      birthWeight: ensure(this.getLatestValue(index, "Birth weight")),
      gestationWeeks: ensure(this.getLatestValue(index, "Gestation")),
      apgarScoreAt1: ensure(this.getLatestValue(index, "APGAR score at 1 minute")),
      apgarScoreAt5: ensure(this.getLatestValue(index, "APGAR score at 5 minutes")),
      apgarScoreAt10: ensure(this.getLatestValue(index, "APGAR score at 10 minutes")),
      criedAfterBirth: ensure(await this.getLatestDecodedValue(index, "Cried after birth")),
      resuscitationMethods,
      modeOfDelivery: ensure(await this.getLatestDecodedValue(index, "Mode of delivery")),
      ruptureOfMembranes: ensure(await this.getLatestDecodedValue(index, "Rupture of membranes")),
      durationOfRuptureMembranes: ensure(this.getLatestValue(index, "Duration of rupture of membranes")),
      offensiveLiquor: ensure(await this.getLatestDecodedValue(index, "Offensive liquor")),
      meconiumPresent: ensure(await this.getLatestDecodedValue(index, "Meconium present")),
      maternalAnalgesia: ensure(await this.getLatestDecodedValue(index, "Maternal analgesia")),
      anesthesiaUsed: ensure(await this.getLatestDecodedValue(index, "Anaesthesia used")),
      steroidsGiven: ensure(await this.getLatestDecodedValue(index, "Steroids given")),
      gestationMethodAssessment: ensure(await this.getLatestDecodedValue(index, "Gestation method of assessment")),
      motherName: ensure(this.getLatestValue(index, "Mother name")),
      motherNationalId: ensure(this.getLatestValue(index, "Mother national ID")),
      motherHivStatus: ensure(await this.getLatestDecodedValue(index, "Mother HIV status")),
      lastHivTestDate,
      motherVdrlResult: ensure(await this.getLatestDecodedValue(index, "Mother VDRL result")),
      motherHepatitisResult: ensure(await this.getLatestDecodedValue(index, "Mother Hepatitis result")),
      tetanusDiphtheria,
      admittedFrom: ensure(await this.getLatestDecodedValue(index, "Admitted from")),
      referredFrom: ensure(await this.getLatestDecodedValue(index, "Referred from")),
      modeOfTransport: ensure(await this.getLatestDecodedValue(index, "Mode of transport"))
    };
    const vitalsData = {
      temperature: this.getLatestValue(index, ["Temperature (C)", "Temperature"]) || "N/A",
      heart_rate: this.getLatestValue(index, ["Heart Rate", "Pulse"]) || "N/A",
      respiratory_rate: this.getLatestValue(index, "Respiratory rate") || "N/A",
      oxygen_saturation: this.getLatestValue(index, ["Oxygen saturation", "Blood oxygen saturation"]) || "N/A",
      blood_sugar: this.getLatestValue(index, "Blood sugar") || "N/A",
      current_weight: this.getLatestValue(index, ["Weight (kg)", "Weight"]) || "N/A",
      head_circumference: this.getLatestValue(index, "Head circumference") || "N/A"
    };
    const triageConcepts = triageConceptMapping;
    const triageEncounterTypeId = EncounterTypeId.NEONATAL_TRIAGE;
    const triageObs = (conceptCandidates) => this.getLatestObsForEncounterType(index, encounterById, triageEncounterTypeId, conceptCandidates) ?? this.getLatestObs(index, conceptCandidates);
    const decodeFromObs = async (obs) => {
      if (!obs) return "";
      const extracted = this.extractObsValue(obs);
      if (!extracted) return "";
      return this.decodeObsValueIfCodedId(obs, extracted);
    };
    const crying = ensure(await decodeFromObs(triageObs(triageConcepts.crying)));
    const breathingObs = triageObs(triageConcepts.breathing);
    const breathingRaw = ensure(breathingObs ? this.extractObsValue(breathingObs) : "");
    const breathingCodes = this.splitTriageList(breathingRaw);
    const breathing = ensure(this.mapTriageValues(breathingCodes, this.TRIAGE_BREATHING_LABELS).join(", "));
    const centralCyanosis = ensure(await decodeFromObs(triageObs(triageConcepts.central_cyanosis)));
    const observationsObs = triageObs(triageConcepts.observations);
    const observationsRaw = ensure(observationsObs ? this.extractObsValue(observationsObs) : "");
    const observationCodes = this.splitTriageList(observationsRaw);
    const priority_signs = this.mapTriageValues(observationCodes, this.TRIAGE_OBSERVATIONS_LABELS);
    const presentSignsObs = triageObs(triageConcepts.present_signs);
    const presentSignsRaw = ensure(presentSignsObs ? this.extractObsValue(presentSignsObs) : "");
    const presentSignsCodes = this.splitTriageList(presentSignsRaw);
    const emergency_signs = this.mapTriageValues(presentSignsCodes, this.TRIAGE_PRESENT_SIGNS_LABELS);
    const referralRequiredObs = triageObs(triageConcepts.referral_required);
    const referralRequiredRaw = ensure(referralRequiredObs ? this.extractObsValue(referralRequiredObs) : "");
    const referral_required = ensure(this.TRIAGE_REFERRAL_REQUIRED_LABELS[referralRequiredRaw] ?? referralRequiredRaw);
    const referralFacilityObs = triageObs(triageConcepts.referral_facility);
    const referral_facility = ensure(referralFacilityObs ? this.extractObsValue(referralFacilityObs) : "");
    const referralNotesObs = triageObs(triageConcepts.referral_notes);
    const referral_notes = ensure(referralNotesObs ? this.extractObsValue(referralNotesObs) : "");
    const triageData = {
      crying,
      breathing,
      central_cyanosis: centralCyanosis,
      referral_required,
      referral_facility,
      referral_notes,
      presenting_complaints: this.getAllValues(index, "Presenting complaint"),
      emergency_signs,
      priority_signs
    };
    const signsSymptomsData = {
      is_readmission: ensure(await this.getLatestDecodedValue(index, "Re-admission")),
      presenting_complaints: this.getAllValues(index, "Presenting complaint"),
      detailed_assessment_notes: ensure(this.getLatestValue(index, ["Signs/Symptoms notes", "Signs & Symptoms notes"])),
      symptom_onset_time: ensure(this.getLatestValue(index, "Symptom onset time")),
      symptom_severity: ensure(await this.getLatestDecodedValue(index, "Symptom severity"))
    };
    const reviewOfSystemsConcepts = {
      type_of_feed: "Type of feed",
      mode_of_feeding: "Mode of feeding",
      frequency_of_feeding: "Frequency of feeding",
      duration_of_feeding: "Duration of feeding",
      feeding_effort: "Effort during feeding",
      vomiting: ["Is baby vomiting", "Vomiting"],
      stool_passed: ["Has passed meconium", "Has passed transitional stools"],
      meconium_timing: "Passage of meconium",
      stool_color: "Color of stools",
      stool_consistency: "Consistency of stools",
      abdominal_distension: "Abdominal distension",
      urine_passed: ["Is the baby passing urine?", "Has passed urine"],
      urine_color: "Color of urine",
      umbilical_cord: ["Umbilical condition", "Umbilical cord condition"],
      umbilical_bleeding: ["Umbilical discharge", "Umbilicus bleeding"],
      weight_trend: ["Weight trend since birth", "Weight trend"],
      sucking_reflex: ["Suck reflex", "Sucking reflex"],
      convulsions: "Convulsions"
    };
    const reviewOfSystemsDataEntries = await Promise.all(
      Object.entries(reviewOfSystemsConcepts).map(async ([field, concepts]) => {
        const obs = this.getLatestObs(index, concepts);
        if (!obs) return [field, "N/A"];
        const extracted = this.extractObsValue(obs);
        const decoded = extracted ? await this.decodeObsValueIfCodedId(obs, extracted) : "";
        return [field, decoded || "N/A"];
      })
    );
    const reviewOfSystemsData = Object.fromEntries(reviewOfSystemsDataEntries);
    const genColourMembers = this.getLatestGroupChildren(index, "Colour");
    const genCongenitalMembers = this.getLatestGroupChildren(index, "Other congenital abnormality");
    const normalizeText = (s) => s.trim().toUpperCase();
    const getDecodedValue = async (obs) => {
      const extracted = this.extractObsValue(obs);
      if (!extracted) return "";
      const decoded = await this.decodeObsValueIfCodedId(obs, extracted);
      return decoded || extracted;
    };
    const groupHasValue = async (members, valueNeedle) => {
      const needle = normalizeText(valueNeedle);
      for (const m of members ?? []) {
        const decoded = normalizeText(await getDecodedValue(m));
        if (decoded === needle || decoded.includes(needle)) return true;
        const names = this.getConceptNamesFromObs(m).map(normalizeText);
        if (names.some((n) => n === needle || n.includes(needle))) return true;
      }
      return false;
    };
    const findGroupMemberByConcept = (members, conceptNeedle) => {
      const needle = normalizeText(conceptNeedle);
      return (members ?? []).find((m) => {
        const names = this.getConceptNamesFromObs(m).map(normalizeText);
        return names.some((n) => n === needle || n.includes(needle));
      });
    };
    const genYellow = await groupHasValue(genColourMembers, "YELLOW") ? "Yes" : "No";
    const genPallor = await groupHasValue(genColourMembers, "PINK") ? "Yes" : "No";
    const genCyanosis = await groupHasValue(genColourMembers, "BLUE") ? "Yes" : "No";
    const genOedema = await groupHasValue(genColourMembers, "WHITE") ? "Yes" : "No";
    const genCongenital = await groupHasValue(genCongenitalMembers, "YES") ? "Yes" : await groupHasValue(genCongenitalMembers, "NO") ? "No" : "N/A";
    const genCongenitalType = this.extractObsValue(findGroupMemberByConcept(genCongenitalMembers, "Congenital abnormality type"));
    const genAbnormalitiesNotes = this.extractObsValue(findGroupMemberByConcept(genCongenitalMembers, "Notes"));
    const isYesGeneral = (v) => {
      const raw = String(v ?? "").trim();
      if (!raw) return false;
      if (raw === "1065") return true;
      if (raw === "1066") return false;
      const n = raw.toUpperCase();
      return n === "YES" || n === "TRUE" || n === "1";
    };
    const getFirstGroupMemberLabel = async (parentConceptCandidates) => {
      const members = this.getLatestGroupChildren(index, parentConceptCandidates);
      if (!members.length) return "";
      for (const m of members) {
        const decoded = await getDecodedValue(m);
        if (isYesGeneral(decoded)) {
          const names2 = this.getConceptNamesFromObs(m);
          return (names2[0] ?? "").trim();
        }
        if (decoded && !/^(YES|NO)$/i.test(decoded)) return decoded;
      }
      const fallback = await getDecodedValue(members[0]);
      if (fallback) return fallback;
      const names = this.getConceptNamesFromObs(members[0]);
      return (names[0] ?? "").trim();
    };
    const generalExamData = {
      activityAssessment: await getFirstGroupMemberLabel("Activity") || "N/A",
      fontanelleAssessment: await getFirstGroupMemberLabel("Fontanelle") || "N/A",
      massInHeadAssessment: await getFirstGroupMemberLabel("Head") || "N/A",
      isBabyYellow: genYellow,
      isBabyPallorPink: genPallor,
      hasBabyCyanosis: genCyanosis,
      hasBabyOedema: genOedema,
      capillaryRefillTime: await getFirstGroupMemberLabel("Capillary refill time") || "N/A",
      femoralPulses: await getFirstGroupMemberLabel("Femorals") || "N/A",
      genitaliaAssessment: await getFirstGroupMemberLabel("Genitalia") || "N/A",
      anusPatent: await getFirstGroupMemberLabel("Anus2") || "N/A",
      cleftLipPalateAssessment: await getFirstGroupMemberLabel("Palate") || "N/A",
      hasCongenitalAbnormalities: genCongenital,
      congenitalAbnormalitiesType: genCongenitalType || "N/A",
      congenitalAbnormalitiesDescription: genAbnormalitiesNotes || "N/A"
    };
    let investigationsData = [];
    try {
      const formatted = OrderService.formatLabs(labOrders);
      investigationsData = formatted.map((row) => ({
        date: row.ordered || "N/A",
        tests: row.test_name || "N/A",
        specimen: row.specimen || "N/A",
        results: Array.isArray(row.result) && row.result.length ? row.result.join("; ") : "Pending"
      }));
    } catch (e) {
      investigationsData = [];
    }
    const isYes = (v) => {
      const raw = String(v ?? "").trim();
      if (!raw) return false;
      if (raw === "1065") return true;
      if (raw === "1066") return false;
      const n = raw.toUpperCase();
      return n === "YES" || n === "TRUE" || n === "1";
    };
    const yesList = (items) => {
      const out = [];
      for (const [concept, label] of items) {
        const v = this.getLatestValue(index, concept);
        if (isYes(v)) out.push(label);
      }
      return out;
    };
    const colorFromSystemic = yesList([
      ["Color pink", "Pink"],
      ["Color blue", "Blue"],
      ["Color pale", "Pale"],
      ["Color yellow", "Yellow/Jaundice"]
    ]).join(", ") || "N/A";
    const colorFromGeneral = (() => {
      const yellow = String(generalExamData?.isBabyYellow ?? "").trim().toUpperCase();
      const pallor = String(generalExamData?.isBabyPallorPink ?? "").trim().toUpperCase();
      const cyanosis = String(generalExamData?.hasBabyCyanosis ?? "").trim().toUpperCase();
      if (yellow === "YES") return "Yellow/Jaundice";
      if (pallor === "YES") return "Pale";
      if (cyanosis === "YES") return "Blue";
      if (yellow === "NO" && pallor === "NO" && cyanosis === "NO") return "Pink";
      return "";
    })();
    const color = colorFromSystemic !== "N/A" ? colorFromSystemic : colorFromGeneral || "N/A";
    const respSymptoms = yesList([
      ["Gasping", "Gasping"],
      ["Fast breathing", "Fast Breathing"],
      ["Nasal flaring", "Nasal Flaring"],
      ["Chest indrawing", "Chest Indrawing"],
      ["Stridor", "Stridor"],
      ["Grunting", "Grunting"]
    ]);
    const respSymptomsText = respSymptoms.length ? respSymptoms.join(", ") : "N/A";
    const lungSounds = yesList([
      ["Chest clear", "Clear"],
      ["Unequal air entry", "Unequal Air Entry"],
      ["Unilateral crackles", "Unilateral Crackles"],
      ["Unilateral wheeze", "Unilateral Wheeze"],
      ["Bilateral crackles/wheeze", "Bilateral Crackles/Wheeze"],
      ["Stridor on auscultation", "Stridor"]
    ]).join(", ") || "N/A";
    const cvsSounds = yesList([
      ["Normal heart sounds", "Normal"],
      ["Murmur or extra sounds", "Murmur/Extra Sounds"],
      ["Not confident auscultating murmurs", "Not Confident"]
    ]).join(", ") || "N/A";
    const abdomen = yesList([
      ["Abdomen soft normal", "Soft/Normal"],
      ["Abdomen distended", "Distended"],
      ["Abdominal wall defect", "Wall Defect"],
      ["Prune belly syndrome", "Prune Belly"],
      ["Abdominal mass", "Mass"]
    ]).join(", ") || "N/A";
    const umbilicus = yesList([
      ["Umbilicus healthy", "Healthy"],
      ["Umbilicus bleeding", "Bleeding"],
      ["Umbilicus red skin", "Red Skin"],
      ["Umbilicus meconium", "Meconium Stained"],
      ["Umbilical hernia", "Hernia"],
      ["Umbilicus abnormal", "Abnormal"]
    ]).join(", ") || "N/A";
    const genitalia = yesList([
      ["Genitalia male normal", "Male Normal"],
      ["Genitalia female normal", "Female Normal"],
      ["Genitalia male abnormal", "Male Abnormal"],
      ["Genitalia female abnormal", "Female Abnormal"],
      ["Genitalia ambiguous", "Ambiguous"]
    ]).join(", ") || "N/A";
    const anus = yesList([
      ["Anus patent", "Patent"],
      ["Anus imperforate", "Imperforate"],
      ["Anus abnormal", "Abnormal"]
    ]).join(", ") || "N/A";
    const thompsonParts = [
      this.getLatestValue(index, "Thompson respiration score"),
      this.getLatestValue(index, "Thompson suck score"),
      this.getLatestValue(index, "Thompson moro score"),
      this.getLatestValue(index, "Thompson grasp score"),
      this.getLatestValue(index, "Thompson fontanelle score"),
      this.getLatestValue(index, "Thompson tone score"),
      this.getLatestValue(index, "Thompson consciousness score"),
      this.getLatestValue(index, "Thompson fits score"),
      this.getLatestValue(index, "Thompson posture score")
    ];
    const thompsonNumbers = thompsonParts.map((s) => Number.parseFloat(s)).filter((n) => Number.isFinite(n));
    const thompsonScore = thompsonNumbers.length ? String(thompsonNumbers.reduce((a, b) => a + b, 0)) : "N/A";
    const systemicExamData = {
      general_condition: generalExamData?.activityAssessment || "N/A",
      color,
      respiratory_distress: await this.getLatestDecodedValue(index, "Respiratory distress") || "N/A",
      respiratory_symptoms: respSymptomsText,
      lung_sounds: lungSounds,
      heart_sounds: cvsSounds,
      abdomen_findings: abdomen,
      umbilicus_findings: umbilicus,
      genitalia_findings: genitalia,
      anus_findings: anus,
      thompsonScore,
      tone: await this.getLatestDecodedValue(index, "Tone assessment") || "N/A",
      moro_reflex: await this.getLatestDecodedValue(index, "Moro reflex") || "N/A",
      grasp_reflex: await this.getLatestDecodedValue(index, "Grasp reflex") || "N/A",
      suck_reflex: await this.getLatestDecodedValue(index, "Suck reflex") || "N/A",
      fontanelle: this.getLatestValue(index, "Thompson fontanelle score") ? `Score: ${this.getLatestValue(index, "Thompson fontanelle score")}` : "N/A",
      skin_findings: await this.getAllDecodedValues(index, "Skin findings"),
      musculoskeletal_deformity: await this.getAllDecodedValues(index, "Musculoskeletal deformities")
    };
    const signOffFromNotes = this.getLatestNeonatalSignOffFromNotes(index);
    const finalClinicalReviewOutcomesData = {
      clinicalReviewOutcome: ensure(await this.getLatestDecodedValue(index, "Clinical review outcome")),
      clinicalReviewOutcomeOther: ensure(this.getLatestValue(index, "Clinical review outcome other")),
      safeguardConcerns: ensure(this.getLatestValue(index, "Safeguard concerns")),
      healthcareWorkerId: ensure(this.getLatestValue(index, "Healthcare worker ID") || signOffFromNotes?.healthcareWorkerId || ""),
      userRole: ensure(this.getLatestValue(index, "Healthcare worker role") || signOffFromNotes?.userRole || ""),
      electronicSignature: ensure(this.getLatestValue(index, "Electronic signature") || signOffFromNotes?.electronicSignature || ""),
      signOffDate: ensure(this.getLatestValue(index, "Sign-off date time") || signOffFromNotes?.signOffDate || "")
    };
    const primaryDiagChildren = this.getLatestGroupChildren(index, "Primary diagnosis");
    const primaryDiagnosis = primaryDiagChildren.length ? await this.decodeObsValueIfCodedId(primaryDiagChildren[0], this.extractObsValue(primaryDiagChildren[0])) || "" : "";
    const secondaryDiagChildren = this.getLatestGroupChildren(index, "Secondary diagnosis");
    const differentialDiagnoses = (await Promise.all(
      secondaryDiagChildren.map(async (c) => {
        const extracted = this.extractObsValue(c);
        const decoded = extracted ? await this.decodeObsValueIfCodedId(c, extracted) : "";
        return decoded || extracted;
      })
    )).filter(Boolean).map((label) => ({ label }));
    const diagnosisData = {
      workingDiagnosis: primaryDiagnosis ? { label: primaryDiagnosis } : { label: "N/A" },
      differentialDiagnoses
    };
    const drugOrderList = Array.isArray(drugOrdersRaw) ? drugOrdersRaw : Array.isArray(drugOrdersRaw?.data) ? drugOrdersRaw.data : Array.isArray(drugOrdersRaw?.drug_orders) ? drugOrdersRaw.drug_orders : [];
    const prescriptions = drugOrderList.map((o) => o?.order?.instructions || o?.order?.drug_name || o?.drug?.name || o?.drug_name || o?.name || "").map((s) => String(s).trim()).filter(Boolean).map((drugName) => ({ drugName }));
    const incubatorObs = this.getLatestObsForEncounterType(index, encounterById, EncounterTypeId.TREATMENT, "notes") ?? this.getLatestObs(index, "notes");
    const incubatorText = incubatorObs ? this.stripNeonatalSignOffMarker(this.extractObsValue(incubatorObs)) : "";
    const treatmentPlanData = {
      pharmacological: {
        incubator: ensure(incubatorText),
        thermalCareDetails: await this.getAllDecodedValues(index, "thermal care"),
        oxygenTherapyDetails: await this.getAllDecodedValues(index, "Oxygen Therapy (Supportive, Non-Drug)"),
        feedingSupportDetails: await this.getAllDecodedValues(index, "feeding support"),
        admissionDetails: ensure(await this.getLatestDecodedValue(index, "admission")),
        treatments: this.getAllValues(index, "treatment")
      },
      nonPharmacological: { prescription: prescriptions }
    };
    const facility = this.getFacilityInfo();
    return {
      enrollmentData,
      vitalsData,
      signsSymptomsData,
      finalClinicalReviewOutcomesData,
      triageData,
      reviewOfSystemsData,
      generalExamData,
      investigationsData,
      systemicExamData,
      treatmentPlanData,
      diagnosisData,
      patientInfo,
      facility
    };
  }
  static async generateQrCode(text) {
    try {
      return await QRCode.toDataURL(text);
    } catch (err) {
      console.error("QR Code generation failed", err);
      return "";
    }
  }
  static initializePdf(facilityName, reportTitle) {
    const doc = new E("p", "pt", "a4");
    const pageWidth = doc.internal.pageSize.width;
    const margin = 28;
    const columnGap = 14;
    return { doc, pageWidth, margin, columnGap };
  }
  static async waitForReportToRender(container, timeoutMs) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const hasLoadingState = Boolean(container.querySelector(".loading-state"));
      const hasPaper = Boolean(container.querySelector(".report-paper"));
      if (hasPaper && !hasLoadingState) return;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  static async exportElementAsPdf(element, fileName) {
    const { doc, pageWidth } = this.initializePdf("", "");
    const margin = 0;
    const wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.left = "-10000px";
    wrapper.style.top = "0";
    wrapper.style.background = "white";
    wrapper.style.width = "210mm";
    wrapper.style.padding = "0";
    wrapper.style.margin = "0";
    wrapper.style.overflow = "visible";
    wrapper.style.pointerEvents = "none";
    const clone = element.cloneNode(true);
    clone.style.overflow = "visible";
    clone.style.height = "auto";
    clone.style.width = "210mm";
    clone.style.maxWidth = "210mm";
    clone.style.boxShadow = "none";
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);
    try {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
      await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
      const baseWidthPx = clone.getBoundingClientRect().width || clone.scrollWidth || clone.clientWidth || 794;
      const desiredWidthPx = 210 / 25.4 * 144;
      const scale = Math.max(1, Math.min(3, desiredWidthPx / baseWidthPx));
      const printableWidth = pageWidth - margin * 2;
      const buildEmptySectionClone = (section) => {
        const sectionClone = section.cloneNode(true);
        const sectionContent = sectionClone.querySelector(".section-content");
        if (sectionContent) sectionContent.innerHTML = "";
        return sectionClone;
      };
      const updateFooterPageText = (footerEl, page, total) => {
        const spans = footerEl.querySelectorAll(".footer-text span");
        if (spans.length > 0) {
          const pageSpan = spans[spans.length - 1];
          pageSpan.textContent = `Page ${page} of ${total}`;
        }
      };
      const paginatePaper = (paperEl) => {
        const header = paperEl.querySelector(".report-header");
        const footer = paperEl.querySelector(".report-footer");
        const body = paperEl.querySelector(".report-body");
        const rows = body ? Array.from(body.querySelectorAll(":scope > .report-row")) : [];
        if (!header || !footer || !body || rows.length === 0) return [paperEl];
        const paperStyles = getComputedStyle(paperEl);
        const pagePadding = paperStyles.padding || "28pt";
        const pageTemplate = document.createElement("div");
        pageTemplate.style.width = "210mm";
        pageTemplate.style.height = "297mm";
        pageTemplate.style.background = "white";
        pageTemplate.style.overflow = "hidden";
        pageTemplate.style.boxSizing = "border-box";
        pageTemplate.style.padding = pagePadding;
        pageTemplate.style.display = "flex";
        pageTemplate.style.flexDirection = "column";
        pageTemplate.style.fontFamily = paperStyles.fontFamily;
        pageTemplate.style.color = paperStyles.color;
        const columnQueues = [[], []];
        for (const row of rows) {
          const rowColumns = Array.from(row.querySelectorAll(":scope > .column"));
          for (let colIndex = 0; colIndex < 2; colIndex += 1) {
            const col = rowColumns[colIndex];
            if (!col) continue;
            const sections = Array.from(col.querySelectorAll(":scope > .report-section"));
            columnQueues[colIndex].push(...sections);
          }
        }
        const pages2 = [];
        const createPage = (includeHeader) => {
          const page = pageTemplate.cloneNode(false);
          const pageFooter = footer.cloneNode(true);
          const pageBody = document.createElement("div");
          pageBody.style.flex = "1";
          pageBody.style.display = "flex";
          pageBody.style.gap = "14pt";
          pageBody.style.overflow = "hidden";
          const pageColumns = [0, 1].map(() => {
            const col = document.createElement("div");
            col.style.flex = "1";
            col.style.display = "flex";
            col.style.flexDirection = "column";
            col.style.gap = "10px";
            col.style.overflow = "hidden";
            return col;
          });
          pageBody.appendChild(pageColumns[0]);
          pageBody.appendChild(pageColumns[1]);
          if (includeHeader) {
            const pageHeader = header.cloneNode(true);
            page.appendChild(pageHeader);
          }
          page.appendChild(pageBody);
          page.appendChild(pageFooter);
          return { page, pageFooter, pageColumns };
        };
        const splitSectionToFit = (section, targetColumn, maxHeightPx) => {
          const sectionContent = section.querySelector(".section-content");
          if (!sectionContent) return null;
          const items = Array.from(sectionContent.children);
          if (items.length <= 1) return null;
          const part = buildEmptySectionClone(section);
          const partContent = part.querySelector(".section-content");
          if (!partContent) return null;
          targetColumn.appendChild(part);
          while (items.length > 0) {
            const item = items[0];
            partContent.appendChild(item);
            items.shift();
            if (targetColumn.scrollHeight > maxHeightPx) {
              partContent.removeChild(item);
              items.unshift(item);
              break;
            }
          }
          if (partContent.children.length === 0) {
            const first = items.shift();
            if (first) partContent.appendChild(first);
          }
          if (partContent.children.length === 0) {
            targetColumn.removeChild(part);
            return null;
          }
          if (items.length === 0) return { part, remainder: void 0 };
          return { part, remainder: section };
        };
        while (columnQueues.some((q) => q.length > 0)) {
          const isFirstPage = pages2.length === 0;
          const { page, pageFooter, pageColumns } = createPage(isFirstPage);
          wrapper.appendChild(page);
          const pageColumnMaxHeights = pageColumns.map((c) => c.clientHeight);
          for (let colIndex = 0; colIndex < pageColumns.length; colIndex += 1) {
            const targetColumn = pageColumns[colIndex];
            const queue = columnQueues[colIndex] || [];
            const maxHeightPx = pageColumnMaxHeights[colIndex] || targetColumn.clientHeight;
            while (queue.length > 0) {
              const nextSection = queue[0];
              targetColumn.appendChild(nextSection);
              if (targetColumn.scrollHeight <= maxHeightPx) {
                queue.shift();
                continue;
              }
              targetColumn.removeChild(nextSection);
              const split = splitSectionToFit(nextSection, targetColumn, maxHeightPx);
              if (split?.part) {
                if (split.remainder) {
                  queue[0] = split.remainder;
                } else {
                  queue.shift();
                }
              }
              break;
            }
          }
          pages2.push(page);
        }
        const total = pages2.length || 1;
        pages2.forEach((p, idx) => {
          const footerEl = p.querySelector(".report-footer");
          if (footerEl) updateFooterPageText(footerEl, idx + 1, total);
        });
        return pages2;
      };
      const pages = paginatePaper(clone);
      let pageIndex = 0;
      for (const pageEl of pages) {
        const canvas = await html2canvas(pageEl, {
          backgroundColor: "#ffffff",
          scale,
          useCORS: true,
          logging: false,
          windowWidth: pageEl.scrollWidth || pageEl.clientWidth,
          windowHeight: pageEl.scrollHeight || pageEl.clientHeight,
          scrollX: 0,
          scrollY: 0
        });
        const imgData = canvas.toDataURL("image/png");
        const imgProps = doc.getImageProperties(imgData);
        const imgHeight = imgProps.height * printableWidth / imgProps.width;
        if (pageIndex > 0) doc.addPage();
        doc.addImage(imgData, "PNG", margin, margin, printableWidth, imgHeight);
        pageIndex += 1;
      }
      doc.save(fileName);
    } finally {
      wrapper.remove();
    }
  }
  static async generateAdmissionReport(patientId, printableContainer) {
    return this.generateClinicalReviewReport(patientId, printableContainer);
  }
  static async generateClinicalReviewReport(patientId, printableContainer) {
    const container = printableContainer || document.querySelector(".printable-container");
    if (container) {
      await this.waitForReportToRender(container, 15e3);
      const paper = container.querySelector(".report-paper");
      if (paper) {
        const patientInfo = await this.getPatientInfo(patientId);
        const fileName2 = `Clinical_Review_${patientInfo.npid}.pdf`;
        await this.exportElementAsPdf(paper, fileName2);
        return;
      }
    }
    const data = await this.getClinicalReviewReportData(patientId);
    const fileName = `Clinical_Review_${data.patientInfo.npid}.pdf`;
    const { doc } = this.initializePdf(data.facility.name, "Clinical Review Report");
    doc.setFontSize(18);
    doc.text("Clinical Review Report", 40, 40);
    doc.setFontSize(12);
    doc.text(`Patient: ${data.patientInfo.fullName} (${data.patientInfo.npid})`, 40, 60);
    doc.save(fileName);
  }
  static async getDischargeReportData(patientId) {
    const reportDate = HisDate.sessionDate();
    const reportEndTs = this.resolveReportEndTs(reportDate);
    const [encountersRaw, enrollmentResult, patient] = await Promise.all([
      this.getEncounters(patientId),
      this.getEnrollment(patientId),
      this.getPatient(patientId)
    ]);
    const registrationStartTs = this.resolvePatientRegistrationStartTs(patient);
    const enrollmentStartTs = this.resolveEnrollmentStartTs(enrollmentResult);
    const startTsCandidate = registrationStartTs && enrollmentStartTs ? Math.min(registrationStartTs, enrollmentStartTs) : registrationStartTs ?? enrollmentStartTs ?? null;
    const selection = this.selectEncountersForReport(encountersRaw, this.DISCHARGE_REPORT_ENCOUNTER_TYPES, reportEndTs, startTsCandidate);
    const encounters = selection.encounters;
    const index = this.buildObsIndex(encounters);
    const getLatestDecodedValue = async (conceptCandidates) => {
      const obs = this.getLatestObs(index, conceptCandidates);
      if (!obs) return "";
      const extracted = this.extractObsValue(obs);
      return extracted ? await this.decodeObsValueIfCodedId(obs, extracted) : "";
    };
    const weightObs = this.getLatestValue(index, ["Weight", "Weight (kg)"]);
    const numeric = parseFloat(String(weightObs || ""));
    const weightFromObs = Number.isFinite(numeric) ? numeric <= 10 ? Math.round(numeric * 1e3) : Math.round(numeric) : "";
    const mainDiagnosisLabel = await getLatestDecodedValue("Primary diagnosis");
    const parseMedicationOrders = (raw) => {
      if (!raw) return [];
      const items = raw.split(";").map((s) => s.trim()).filter(Boolean);
      return items.map((item) => {
        const [name = "", dosage = "", frequency = ""] = item.split("|").map((s) => s.trim());
        return { name, dosage, frequency };
      }).filter((m) => Boolean(m.name));
    };
    const signOffFromNotes = this.getLatestNeonatalSignOffFromNotes(index);
    const dischargeData = {
      weight: String(weightFromObs ?? ""),
      heartRate: this.getLatestValue(index, ["Pulse", "Heart Rate"]) || "",
      respiratoryRate: this.getLatestValue(index, "Respiratory rate") || "",
      oxygenSaturation: this.getLatestValue(index, ["Blood oxygen saturation", "Oxygen saturation"]) || "",
      temperature: this.getLatestValue(index, ["Temperature", "Temperature (C)"]) || "",
      mainDiagnosis: /* @__PURE__ */ (() => {
        const v = mainDiagnosisLabel;
        return v ? { label: v, value: v } : null;
      })(),
      otherProblems: this.getAllValues(index, "Secondary diagnosis"),
      outcome: await getLatestDecodedValue("Patient admission outcome") || "",
      healthEducationGiven: await getLatestDecodedValue("Health education given") || "",
      insecticideTreatedNetGiven: await getLatestDecodedValue("Insecticide treated net given") || "",
      medications: parseMedicationOrders(this.getLatestValue(index, "Medication orders")),
      appointments: [],
      clinicFollowUp: this.getLatestValue(index, "Next facility to visit") || "",
      healthcareWorkerId: this.getLatestValue(index, "Healthcare worker ID") || signOffFromNotes?.healthcareWorkerId || "",
      userRole: this.getLatestValue(index, "Healthcare worker role") || signOffFromNotes?.userRole || "",
      electronicSignature: this.getLatestValue(index, "Electronic signature") || signOffFromNotes?.electronicSignature || "",
      signOffDate: this.getLatestValue(index, "Sign-off date time") || signOffFromNotes?.signOffDate || ""
    };
    const patientInfo = this.buildPatientInfo(patient);
    const facility = this.getFacilityInfo();
    return {
      patientInfo,
      facility,
      dischargeData
    };
  }
  static async generateDischargeReport(patientId, printableContainer) {
    const container = printableContainer || document.querySelector(".printable-container");
    if (container) {
      await this.waitForReportToRender(container, 15e3);
      const paper = container.querySelector(".report-paper");
      if (paper) {
        const patientInfo = await this.getPatientInfo(patientId);
        const fileName2 = `Discharge_${patientInfo.npid}.pdf`;
        await this.exportElementAsPdf(paper, fileName2);
        return;
      }
    }
    const data = await this.getDischargeReportData(patientId);
    const fileName = `Discharge_${data.patientInfo.npid}.pdf`;
    const { doc } = this.initializePdf(data.facility.name, "Discharge Report");
    doc.setFontSize(18);
    doc.text("Discharge Report", 40, 40);
    doc.setFontSize(12);
    doc.text(`Patient: ${data.patientInfo.fullName} (${data.patientInfo.npid})`, 40, 60);
    doc.save(fileName);
  }
}

const _sfc_main$3 = defineComponent({
  name: "ReportSection",
  props: {
    title: {
      type: String,
      required: true
    }
  }
});

const _hoisted_1$3 = { class: "report-section" };
const _hoisted_2$3 = { class: "section-header" };
const _hoisted_3$2 = { class: "header-text" };
const _hoisted_4$1 = { class: "section-content" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("span", _hoisted_3$2, toDisplayString(_ctx.title), 1),
      _cache[0] || (_cache[0] = createBaseVNode("span", { class: "header-spacer" }, null, -1))
    ]),
    createBaseVNode("div", _hoisted_4$1, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
const ReportSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-36df177d"]]);

const _sfc_main$2 = defineComponent({
  name: "ReportRow",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: "-"
    }
  },
  setup(props) {
    const formattedValue = computed(() => {
      const v = props.value;
      if (v === void 0 || v === null || v === "") return "-";
      if (Array.isArray(v)) {
        return v.length ? v.map((d) => typeof d === "string" ? d : d.label || d.value).join(", ") : "-";
      }
      if (typeof v === "boolean") return v ? "Yes" : "No";
      return String(v);
    });
    return { formattedValue };
  }
});

const _hoisted_1$2 = { class: "report-row" };
const _hoisted_2$2 = { class: "row-label" };
const _hoisted_3$1 = { class: "row-value" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, toDisplayString(_ctx.label), 1),
    createBaseVNode("div", _hoisted_3$1, toDisplayString(_ctx.formattedValue), 1)
  ]);
}
const ReportRow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-ccf289c6"]]);

const _sfc_main$1 = defineComponent({
  name: "ReportHeader",
  props: {
    facilityName: {
      type: String,
      default: ""
    },
    reportTitle: {
      type: String,
      required: true
    },
    patientName: {
      type: String,
      default: ""
    },
    npid: {
      type: String,
      default: ""
    },
    dob: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const qrCodeUrl = ref("");
    const generateQrCode = async () => {
      if (props.npid) {
        try {
          qrCodeUrl.value = await QRCode.toDataURL(String(props.npid), { width: 140, margin: 1 });
        } catch (error) {
          console.error("Failed to generate QR code", error);
          qrCodeUrl.value = "";
        }
      } else {
        qrCodeUrl.value = "";
      }
    };
    onMounted(generateQrCode);
    watch(() => props.npid, generateQrCode);
    const formatValue = (value) => {
      if (value === void 0 || value === null || value === "") return "-";
      return String(value);
    };
    return {
      qrCodeUrl,
      formatValue
    };
  }
});

const _imports_0 = ""+new URL('../../mw.png', import.meta.url).href+"";

const _hoisted_1$1 = { class: "report-header" };
const _hoisted_2$1 = { class: "header-top" };
const _hoisted_3 = { class: "facility-info" };
const _hoisted_4 = { class: "facility-name" };
const _hoisted_5 = { class: "report-title" };
const _hoisted_6 = { class: "logo-side right" };
const _hoisted_7 = {
  key: 0,
  class: "qr-code"
};
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "patient-header-info" };
const _hoisted_10 = { class: "info-row" };
const _hoisted_11 = { class: "value" };
const _hoisted_12 = { class: "info-row" };
const _hoisted_13 = { class: "value" };
const _hoisted_14 = { class: "info-row" };
const _hoisted_15 = { class: "value" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _cache[0] || (_cache[0] = createBaseVNode("div", { class: "logo-side left" }, [
        createBaseVNode("img", {
          src: _imports_0,
          alt: "Malawi Coat of Arms",
          class: "logo mw-logo"
        })
      ], -1)),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.facilityName), 1),
        createBaseVNode("h2", _hoisted_5, toDisplayString(_ctx.reportTitle), 1)
      ]),
      createBaseVNode("div", _hoisted_6, [
        _ctx.qrCodeUrl ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("img", {
            src: _ctx.qrCodeUrl,
            alt: "QR Code"
          }, null, 8, _hoisted_8)
        ])) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("div", _hoisted_10, [
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "label" }, "Patient:", -1)),
        createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.formatValue(_ctx.patientName)), 1)
      ]),
      createBaseVNode("div", _hoisted_12, [
        _cache[2] || (_cache[2] = createBaseVNode("span", { class: "label" }, "NPID:", -1)),
        createBaseVNode("span", _hoisted_13, toDisplayString(_ctx.formatValue(_ctx.npid)), 1)
      ]),
      createBaseVNode("div", _hoisted_14, [
        _cache[3] || (_cache[3] = createBaseVNode("span", { class: "label" }, "DOB:", -1)),
        createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.formatValue(_ctx.dob)), 1)
      ])
    ]),
    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "header-divider" }, null, -1))
  ]);
}
const ReportHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-754b1a29"]]);

const _sfc_main = defineComponent({
  name: "ReportFooter",
  props: {
    generatedDate: {
      type: String,
      required: true
    },
    facilityInfo: {
      type: String,
      default: ""
    }
  }
});

const _hoisted_1 = { class: "report-footer" };
const _hoisted_2 = { class: "footer-text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("span", null, "Generated: " + toDisplayString(_ctx.generatedDate), 1),
      createBaseVNode("span", null, toDisplayString(_ctx.facilityInfo), 1),
      _cache[0] || (_cache[0] = createBaseVNode("span", null, "Page 1 of 1", -1))
    ])
  ]);
}
const ReportFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3b6cd028"]]);

export { NeonatalReportService as N, ReportFooter as R, ReportHeader as a, ReportRow as b, ReportSection as c, neonatalClinicalReviewSignOffSections as n, useClinicalReviewSignOff as u };
