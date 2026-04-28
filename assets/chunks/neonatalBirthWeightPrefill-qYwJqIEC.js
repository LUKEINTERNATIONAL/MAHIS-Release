import { cJ as __vitePreload } from './vendor-8vOj_QAN.js';
import { S as Service, N as ConceptService } from '../index-Bn2sysQf.js';

const normalizeName = (value) => String(value ?? "").trim().toLowerCase();
const getConceptNamesFromObs = (obs) => {
  const names = [];
  const raw = obs?.concept_name ?? obs?.conceptName ?? obs?.concept_display ?? obs?.conceptDisplay ?? obs?.name ?? "";
  if (raw) names.push(String(raw));
  const concept = obs?.concept;
  const direct = concept?.display ?? concept?.name?.display ?? concept?.name?.name ?? concept?.name ?? concept?.concept_name?.name ?? "";
  if (direct) names.push(String(direct));
  const conceptNames = concept?.concept_names;
  if (Array.isArray(conceptNames)) {
    for (const n of conceptNames) {
      if (n?.name) names.push(String(n.name));
    }
  }
  return [...new Set(names.map((n) => n.trim()).filter(Boolean))];
};
const flattenObservations = (entry) => {
  if (!entry) return [];
  if (Array.isArray(entry)) return entry;
  if (Array.isArray(entry?.observations)) return entry.observations;
  if (Array.isArray(entry?.obs)) return entry.obs;
  if (Array.isArray(entry?.observations_list)) return entry.observations_list;
  if (typeof entry === "object") {
    const values = Object.values(entry);
    if (values.some((v) => Array.isArray(v) || typeof v === "object")) {
      return values.flatMap((v) => flattenObservations(v));
    }
  }
  return [];
};
const isObsLike = (obj) => {
  if (!obj || typeof obj !== "object") return false;
  return obj.concept_name !== void 0 || obj.concept !== void 0 || obj.conceptName !== void 0 || obj.value_text !== void 0 || obj.value_numeric !== void 0 || obj.value_datetime !== void 0 || obj.value !== void 0 || obj.value_coded !== void 0 || obj.value_coded_name !== void 0;
};
function collectAllObservations(patient) {
  const root = patient?.observations;
  if (!root) return [];
  const all = flattenObservations(root);
  if (!Array.isArray(all)) return [];
  const result = [];
  const seen = /* @__PURE__ */ new WeakSet();
  const walk = (obs) => {
    if (!obs || typeof obs !== "object") return;
    if (seen.has(obs)) return;
    seen.add(obs);
    if (isObsLike(obs)) result.push(obs);
    const children = obs?.groupMembers ?? obs?.children ?? obs?.child;
    if (Array.isArray(children)) {
      for (const child of children) walk(child);
    }
    const nestedObs = obs?.observations ?? obs?.obs ?? obs?.observations_list;
    if (Array.isArray(nestedObs)) {
      for (const child of nestedObs) walk(child);
    }
  };
  for (const obs of all) walk(obs);
  return result;
}
const getObsTimestamp = (obs) => {
  const raw = obs?.obs_datetime ?? obs?.obsDatetime ?? obs?.observation_datetime ?? obs?.date_created ?? obs?.dateCreated;
  if (!raw) return 0;
  const t = new Date(raw).getTime();
  return Number.isFinite(t) ? t : 0;
};
function getBirthWeightFromPatientObservationsInGrams(patient) {
  const observations = collectAllObservations(patient);
  if (!observations.length) return null;
  const candidates = ["Birth weight", "Birth weight (kg)", "Birth weight (g)", "Birth weight (grams)"].map(normalizeName);
  const matches = observations.filter((obs) => {
    const names = getConceptNamesFromObs(obs).map(normalizeName);
    return names.some((n) => candidates.includes(n));
  });
  if (!matches.length) return null;
  matches.sort((a, b) => getObsTimestamp(b) - getObsTimestamp(a));
  const latest = matches[0];
  const raw = latest?.value_numeric ?? latest?.value_text ?? latest?.value ?? latest?.value_coded_name ?? latest?.value_coded;
  const numeric = typeof raw === "number" ? raw : parseFloat(String(raw || ""));
  if (Number.isNaN(numeric)) return null;
  return numeric > 20 ? Math.round(numeric) : Math.round(numeric * 1e3);
}
async function getOfflineBirthWeightInGrams(patientId, patient) {
  try {
    const localPatient = patient;
    const sectionCandidates = [localPatient?.neonatal_triage, localPatient?.neonatal_emergency_triage];
    const flattenObs = (entry) => {
      if (!entry) return [];
      if (Array.isArray(entry?.observations)) return entry.observations;
      if (Array.isArray(entry?.obs)) return entry.obs;
      return [];
    };
    const collectedFromSections = sectionCandidates.flatMap((section) => {
      if (!section || typeof section !== "object") return [];
      const saved = Array.isArray(section.saved) ? section.saved : [];
      const unsaved = Array.isArray(section.unsaved) ? section.unsaved : [];
      return [...saved, ...unsaved].flatMap((entry) => flattenObs(entry));
    });
    const { default: NeonatalOfflineService } = await __vitePreload(async () => { const { default: NeonatalOfflineService } = await import('./neonatal_offline_service-BSSM8MYD.js');return { default: NeonatalOfflineService }},true              ?[]:void 0);
    const stageObservations = await NeonatalOfflineService.getNeonatalObservations(String(patientId));
    const observations = [...collectedFromSections, ...Array.isArray(stageObservations) ? stageObservations : []];
    if (!Array.isArray(observations) || observations.length === 0) return null;
    let conceptId = null;
    try {
      conceptId = await ConceptService.getConceptID("Birth weight", true);
    } catch {
      conceptId = null;
    }
    const matches = observations.filter((obs) => {
      const name = String(obs?.concept_name || "").toLowerCase();
      const idMatch = conceptId != null && Number(obs?.concept_id) === Number(conceptId);
      return name === "birth weight" || idMatch;
    });
    if (matches.length === 0) return null;
    const latest = matches.sort((a, b) => {
      const aDate = new Date(a?.obs_datetime || a?.date_created || a?.created_at || 0).getTime();
      const bDate = new Date(b?.obs_datetime || b?.date_created || b?.created_at || 0).getTime();
      return bDate - aDate;
    })[0];
    const rawValue = latest?.value_numeric ?? latest?.value_text ?? latest?.value;
    const numeric = typeof rawValue === "number" ? rawValue : parseFloat(String(rawValue || ""));
    if (Number.isNaN(numeric)) return null;
    return numeric < 50 ? numeric * 1e3 : numeric;
  } catch (error) {
    console.error("Failed to prefill birth weight from offline observations:", error);
    return null;
  }
}
async function resolveNeonatalBirthWeightInGrams(patientId, patient) {
  if (patientId === void 0 || patientId === null || patientId === "") return null;
  const isOfflineMode = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
  if (isOfflineMode) {
    const offlineWeightInGrams = await getOfflineBirthWeightInGrams(patientId, patient);
    if (offlineWeightInGrams != null) return offlineWeightInGrams;
  }
  return getBirthWeightFromPatientObservationsInGrams(patient);
}

export { resolveNeonatalBirthWeightInGrams as r };
