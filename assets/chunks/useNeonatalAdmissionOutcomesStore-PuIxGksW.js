import { q as defineComponent, r as ref, w as watch, h as inject, d as computed, a2 as onMounted, aj as onBeforeUnmount, S as withDirectives, T as vShow, x as createElementBlock, y as openBlock, a4 as normalizeClass, B as createBaseVNode, G as createCommentVNode, E as unref, C as toDisplayString, cy as E, bC as QRCode, cz as autoTable, z as createVNode, A as withCtx, N as IonButton, a5 as createTextVNode, L as IonIcon, aZ as printOutline } from './vendor-BPW-J91F.js';
import { u as useDemographicsStore, ab as useUserStore, K as ObservationService, H as HisDate, _ as _export_sfc, C as StandardForm } from '../index-Be0fRy6M.js';
import { s as storeToRefs, d as defineStore } from './pinia-D-q2_lrU.js';
import { u as useNeonatalEnrollmentStore } from './useNeonatalEnrollmentStore-BPSfxbLX.js';
import { u as useSignsSymptomsStore } from './useSignsSymptomsStore-BArfZCJo.js';
import { u as useNeonatalVitalsStore } from './useNeonatalVitalsStore-BU-y5uUR.js';
import { j as neonatalAdmissionOutcomesFormKey, k as neonatalAdmissionSignOffSections, x as defaultNeonatalAdmissionOutcomesForm } from './NeonatalStepper-BRKo3iim.js';

const _hoisted_1$1 = { class: "page-header" };
const _hoisted_2$1 = { class: "logo-container" };
const _hoisted_3$1 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "header-meta" };
const _hoisted_6 = { class: "facility-name" };
const _hoisted_7 = { class: "facility-details" };
const _hoisted_8 = { class: "patient-meta" };
const _hoisted_9 = {
  key: 0,
  class: "barcode-container"
};
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "npid-text" };
const _hoisted_12 = { class: "print-page" };
const _hoisted_13 = { class: "print-column" };
const _hoisted_14 = { class: "print-section" };
const _hoisted_15 = { class: "field-row" };
const _hoisted_16 = { class: "field-row" };
const _hoisted_17 = { class: "field-row" };
const _hoisted_18 = { class: "field-row" };
const _hoisted_19 = { class: "field-row" };
const _hoisted_20 = { class: "field-row" };
const _hoisted_21 = { class: "field-row" };
const _hoisted_22 = { class: "field-row" };
const _hoisted_23 = { class: "field-row" };
const _hoisted_24 = { class: "field-row" };
const _hoisted_25 = { class: "field-row" };
const _hoisted_26 = { class: "print-section" };
const _hoisted_27 = { class: "field-row" };
const _hoisted_28 = { class: "field-row" };
const _hoisted_29 = { class: "field-row" };
const _hoisted_30 = { class: "field-row" };
const _hoisted_31 = { class: "field-row" };
const _hoisted_32 = { class: "field-row" };
const _hoisted_33 = { class: "field-row" };
const _hoisted_34 = { class: "field-row" };
const _hoisted_35 = { class: "field-row" };
const _hoisted_36 = { class: "print-section" };
const _hoisted_37 = { class: "field-row" };
const _hoisted_38 = { class: "field-row" };
const _hoisted_39 = { class: "field-row" };
const _hoisted_40 = { class: "field-row" };
const _hoisted_41 = { class: "field-row" };
const _hoisted_42 = { class: "field-row" };
const _hoisted_43 = { class: "field-row" };
const _hoisted_44 = { class: "print-section" };
const _hoisted_45 = { class: "field-row" };
const _hoisted_46 = { class: "highlight" };
const _hoisted_47 = { class: "field-row" };
const _hoisted_48 = { class: "print-column" };
const _hoisted_49 = { class: "print-section" };
const _hoisted_50 = { class: "field-row" };
const _hoisted_51 = { class: "field-row" };
const _hoisted_52 = { class: "field-row" };
const _hoisted_53 = { class: "field-row" };
const _hoisted_54 = { class: "field-row" };
const _hoisted_55 = { class: "field-row" };
const _hoisted_56 = { class: "field-row" };
const _hoisted_57 = { class: "print-section" };
const _hoisted_58 = { class: "field-row single-line" };
const _hoisted_59 = { class: "field-row single-line" };
const _hoisted_60 = { class: "field-row single-line" };
const _hoisted_61 = { class: "field-row single-line" };
const _hoisted_62 = {
  key: 0,
  class: "print-section"
};
const _hoisted_63 = { class: "field-row" };
const _hoisted_64 = { class: "field-row" };
const _hoisted_65 = { class: "field-row" };
const _hoisted_66 = { class: "field-row" };
const _hoisted_67 = { class: "field-row" };
const _hoisted_68 = { class: "field-row" };
const _hoisted_69 = { class: "field-row" };
const _hoisted_70 = { class: "print-section" };
const _hoisted_71 = { class: "field-row" };
const _hoisted_72 = { class: "field-row" };
const _hoisted_73 = { class: "field-row" };
const _hoisted_74 = { class: "field-row" };
const _hoisted_75 = { class: "print-footer" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PrintableAdmissionForm",
  props: {
    forceShow: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const enrollmentStore = useNeonatalEnrollmentStore();
    const signsSymptomsStore = useSignsSymptomsStore();
    const isRestoringSignsSymptoms = ref(false);
    const syncSignsSymptomsStore = () => {
      const patientId = patient.value?.patientID ?? null;
      signsSymptomsStore.initializeForPatient(patientId);
    };
    const hasSignsSymptomsData = () => {
      const form = signsSymptomsStore.formData;
      if (!form) return false;
      return Array.isArray(form.presenting_complaints) && form.presenting_complaints.length > 0 || !!form.detailed_assessment_notes || !!form.symptom_onset_time || !!form.symptom_severity;
    };
    const fetchObservationValues = async (conceptName) => {
      const patientId = patient.value?.patientID;
      if (!patientId) return [];
      try {
        const observations = await ObservationService.getAll(patientId, conceptName, HisDate.sessionDate());
        if (!observations || !observations.length) return [];
        const resolved = await Promise.all(
          observations.map((obs) => ObservationService.resolvePrimaryValue(obs))
        );
        return resolved.map((value) => value === void 0 || value === null ? "" : String(value)).map((value) => value.trim()).filter((value) => value.length > 0);
      } catch (error) {
        console.warn(`[PrintableAdmissionForm] Unable to load ${conceptName} observations`, error);
        return [];
      }
    };
    const fetchSingleObservationValue = async (conceptName) => {
      const values = await fetchObservationValues(conceptName);
      return values.length > 0 ? values[0] : "";
    };
    const loadEnrollmentFromObservations = async () => {
      if (!patient.value?.patientID) return;
      try {
        const [
          hasTwin,
          placeOfBirth,
          birthFacility,
          typeOfBirth,
          birthWeight,
          gestationWeeks,
          apgar1,
          apgar5,
          apgar10,
          criedAfterBirth,
          resuscitation,
          modeOfDelivery,
          ruptureOfMembranes,
          durationRom,
          offensiveLiquor,
          meconiumPresent,
          maternalAnalgesia,
          anesthesiaUsed,
          steroidsGiven,
          gestationAssessment,
          motherName,
          motherNPID,
          motherHiv,
          lastHivTest,
          motherVdrl,
          motherHepatitis,
          tetanusDiphtheria,
          admittedFrom,
          referredFrom,
          transportMode
        ] = await Promise.all([
          fetchSingleObservationValue("Twin"),
          fetchSingleObservationValue("Place of birth"),
          fetchSingleObservationValue("Name of birth facility"),
          fetchSingleObservationValue("Type of birth"),
          fetchSingleObservationValue("Birth weight"),
          fetchSingleObservationValue("Gestation"),
          fetchSingleObservationValue("APGAR score at 1 minute"),
          fetchSingleObservationValue("APGAR score at 5 minutes"),
          fetchSingleObservationValue("APGAR score at 10 minutes"),
          fetchSingleObservationValue("Cried after birth"),
          fetchObservationValues("Resuscitation method"),
          fetchSingleObservationValue("Mode of delivery"),
          fetchSingleObservationValue("Rupture of membranes"),
          fetchSingleObservationValue("Duration of rupture of membranes"),
          fetchSingleObservationValue("Offensive liquor"),
          fetchSingleObservationValue("Meconium present"),
          fetchSingleObservationValue("Maternal analgesia"),
          fetchSingleObservationValue("Anaesthesia used"),
          fetchSingleObservationValue("Steroids given"),
          fetchSingleObservationValue("Gestation method of assessment"),
          fetchSingleObservationValue("Mother name"),
          fetchSingleObservationValue("Mother national ID"),
          fetchSingleObservationValue("Mother HIV status"),
          fetchSingleObservationValue("Last HIV test date"),
          fetchSingleObservationValue("Mother VDRL result"),
          fetchSingleObservationValue("Mother Hepatitis result"),
          fetchObservationValues("Tetanus/Diphtheria immunisation"),
          fetchSingleObservationValue("Admitted from"),
          fetchSingleObservationValue("Referred from"),
          fetchSingleObservationValue("Mode of transport")
        ]);
        observationEnrollmentData.value = {
          hasTwin,
          placeOfBirth,
          nameOfBirthFacility: birthFacility,
          typeOfBirth,
          birthWeight,
          gestationWeeks,
          apgarScoreAt1: apgar1,
          apgarScoreAt5: apgar5,
          apgarScoreAt10: apgar10,
          criedAfterBirth,
          resuscitationMethods: resuscitation,
          modeOfDelivery,
          ruptureOfMembranes,
          durationOfRuptureMembranes: durationRom,
          offensiveLiquor,
          meconiumPresent,
          maternalAnalgesia,
          anesthesiaUsed,
          steroidsGiven,
          gestationMethodAssessment: gestationAssessment,
          motherName,
          motherNationalId: motherNPID,
          motherHivStatus: motherHiv,
          lastHivTestDate: lastHivTest,
          motherVdrlResult: motherVdrl,
          motherHepatitisResult: motherHepatitis,
          tetanusDiphtheria,
          admittedFrom,
          referredFrom,
          modeOfTransport: transportMode
        };
      } catch (error) {
        console.error("[PrintableAdmissionForm] Failed to load enrollment from observations:", error);
      }
    };
    const loadVitalsFromObservations = async () => {
      if (!patient.value?.patientID) return;
      try {
        const [
          temperature,
          heartRate,
          respiratoryRate,
          oxygenSaturation,
          bloodSugar,
          currentWeight,
          headCircumference
        ] = await Promise.all([
          fetchSingleObservationValue("Temperature"),
          fetchSingleObservationValue("Heart rate"),
          fetchSingleObservationValue("Respiratory rate"),
          fetchSingleObservationValue("Oxygen saturation"),
          fetchSingleObservationValue("Blood sugar"),
          fetchSingleObservationValue("Weight"),
          fetchSingleObservationValue("Head circumference")
        ]);
        observationVitalsData.value = {
          temperature,
          heart_rate: heartRate,
          respiratory_rate: respiratoryRate,
          oxygen_saturation: oxygenSaturation,
          blood_sugar: bloodSugar,
          current_weight: currentWeight,
          head_circumference: headCircumference
        };
      } catch (error) {
        console.error("[PrintableAdmissionForm] Failed to load vitals from observations:", error);
      }
    };
    const loadAdmissionOutcomesFromObservations = async () => {
      if (!patient.value?.patientID) return;
      try {
        const [
          outcome,
          safeguardConcerns,
          healthcareWorkerId,
          userRole,
          signature,
          signOffDate
        ] = await Promise.all([
          fetchSingleObservationValue("Admission outcome"),
          fetchSingleObservationValue("Safeguard concerns"),
          fetchSingleObservationValue("Healthcare worker ID"),
          fetchSingleObservationValue("User role"),
          fetchSingleObservationValue("Electronic signature"),
          fetchSingleObservationValue("Sign-off date")
        ]);
        observationAdmissionOutcomesData.value = {
          admissionOutcome: outcome,
          safeguardConcerns,
          healthcareWorkerId,
          userRole,
          electronicSignature: signature,
          signOffDate
        };
      } catch (error) {
        console.error("[PrintableAdmissionForm] Failed to load admission outcomes from observations:", error);
      }
    };
    const loadAllObservationData = async () => {
      if (!patient.value?.patientID || isLoadingObservations.value) return;
      isLoadingObservations.value = true;
      try {
        await Promise.all([
          loadEnrollmentFromObservations(),
          loadVitalsFromObservations(),
          loadAdmissionOutcomesFromObservations(),
          ensureSignsSymptomsFromObservations()
        ]);
      } finally {
        isLoadingObservations.value = false;
      }
    };
    const ensureSignsSymptomsFromObservations = async () => {
      const patientId = patient.value?.patientID;
      if (!patientId || hasSignsSymptomsData() || isRestoringSignsSymptoms.value) {
        return;
      }
      isRestoringSignsSymptoms.value = true;
      try {
        const [
          complaints,
          notes,
          onset,
          severity
        ] = await Promise.all([
          fetchObservationValues("Presenting complaint"),
          fetchObservationValues("Signs/Symptoms notes"),
          fetchObservationValues("Symptom onset time"),
          fetchObservationValues("Symptom severity")
        ]);
        const updates = {};
        if (complaints.length) {
          updates.presenting_complaints = complaints;
        }
        if (notes.length) {
          updates.detailed_assessment_notes = notes[0];
        }
        if (onset.length) {
          updates.symptom_onset_time = onset[0];
        }
        if (severity.length) {
          updates.symptom_severity = severity[0];
        }
        if (Object.keys(updates).length) {
          Object.assign(signsSymptomsStore.formData, updates);
          signsSymptomsStore.saveSnapshot();
        }
      } finally {
        isRestoringSignsSymptoms.value = false;
      }
    };
    watch(
      () => patient.value?.patientID,
      () => {
        syncSignsSymptomsStore();
        void ensureSignsSymptomsFromObservations();
      },
      { immediate: true }
    );
    const vitalsStore = useNeonatalVitalsStore();
    const userStore = useUserStore();
    const admissionOutcomesData = inject(neonatalAdmissionOutcomesFormKey, {});
    const shouldShowPrintPreview = ref(false);
    const qrDataUrl = ref("");
    const observationEnrollmentData = ref({});
    const observationVitalsData = ref({});
    const observationAdmissionOutcomesData = ref({});
    const isLoadingObservations = ref(false);
    const neotreeLogoUrl = new URL(""+new URL('../neotree.4QnvY_lU.png', import.meta.url).href+"", import.meta.url).href;
    const appLogoUrl = `${"./"}mw.png`;
    const imageCache = /* @__PURE__ */ new Map();
    const neotreeLogoSrc = neotreeLogoUrl;
    const appLogoSrc = appLogoUrl;
    const loadImageDataUrl = async (src) => {
      if (!src) return null;
      if (imageCache.has(src)) return imageCache.get(src);
      return await new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              resolve(null);
              return;
            }
            ctx.drawImage(img, 0, 0);
            const dataUrl = canvas.toDataURL("image/png");
            imageCache.set(src, dataUrl);
            resolve(dataUrl);
          } catch (e) {
            console.warn("Image toDataURL failed", e);
            resolve(null);
          }
        };
        img.onerror = () => resolve(null);
        img.src = src;
      });
    };
    const patientFullName = computed(() => {
      const person = patient.value?.personInformation;
      if (!person) return "N/A";
      return `${person.given_name || ""} ${person.family_name || ""}`.trim() || "N/A";
    });
    const patientNPID = computed(() => {
      return patient.value?.nationalId || patient.value?.patientID || "N/A";
    });
    const patientGender = computed(() => {
      return patient.value?.personInformation?.gender || "N/A";
    });
    const patientDOB = computed(() => {
      return patient.value?.personInformation?.birthdate || "N/A";
    });
    const enrollmentData = computed(() => {
      const patientId = patient.value?.patientID;
      if (!patientId) return {};
      const hasObservationData = Object.keys(observationEnrollmentData.value).length > 0;
      if (hasObservationData) {
        return { ...enrollmentStore.enrollmentForm, ...observationEnrollmentData.value };
      }
      return enrollmentStore.enrollmentForm || {};
    });
    const signsSymptomsData = computed(() => {
      const patientId = patient.value?.patientID;
      if (!patientId) return null;
      return signsSymptomsStore.formData || null;
    });
    const vitalsData = computed(() => {
      const patientId = patient.value?.patientID;
      if (!patientId) return null;
      const hasObservationData = Object.keys(observationVitalsData.value).length > 0;
      if (hasObservationData) {
        return { ...vitalsStore.formData, ...observationVitalsData.value };
      }
      return vitalsStore.formData || null;
    });
    const finalAdmissionOutcomesData = computed(() => {
      const hasObservationData = Object.keys(observationAdmissionOutcomesData.value).length > 0;
      if (hasObservationData) {
        return { ...admissionOutcomesData, ...observationAdmissionOutcomesData.value };
      }
      return admissionOutcomesData;
    });
    const resuscitationMethods = computed(() => formatArray(enrollmentData.value?.resuscitationMethods));
    const facilityName = computed(() => {
      return userStore.userFacilityName || localStorage.getItem("facilityName") || "Healthcare Facility";
    });
    const facilityCode = computed(() => {
      return userStore.facilityLocation?.code || localStorage.getItem("facility_code") || "-";
    });
    const facilityDistrict = computed(() => {
      return userStore.facilityLocation?.district || localStorage.getItem("locationDistrict") || "-";
    });
    const facilityInfo = computed(() => {
      const parts = [facilityName.value];
      if (facilityDistrict.value && facilityDistrict.value !== "-") {
        parts.push(facilityDistrict.value);
      }
      if (facilityCode.value && facilityCode.value !== "-") {
        parts.push(`Code: ${facilityCode.value}`);
      }
      return parts.join(" · ");
    });
    const formattedDate = computed(() => {
      if (finalAdmissionOutcomesData.value.signOffDate) {
        return new Date(finalAdmissionOutcomesData.value.signOffDate).toLocaleString();
      }
      return (/* @__PURE__ */ new Date()).toLocaleString();
    });
    const formatValue = (value) => {
      if (value === void 0 || value === null || value === "") return "-";
      if (Array.isArray(value)) return value.length ? value.join(", ") : "-";
      return String(value);
    };
    const formatArray = (value) => {
      if (!value || !value.length) return "-";
      return value.join(", ");
    };
    const exportPdf = async () => {
      const [neotreeLogo, appLogo] = await Promise.all([
        loadImageDataUrl(neotreeLogoUrl),
        loadImageDataUrl(appLogoUrl)
      ]);
      const doc = new E({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 28;
      const columnGap = 14;
      const columnWidth = (pageWidth - margin * 2 - columnGap) / 2;
      const leftX = margin;
      const rightX = margin + columnWidth + columnGap;
      const logoSize = 52;
      const coatSize = 52;
      const barcodeWidth = 100;
      const barcodeHeight = 100;
      let leftY;
      let rightY;
      let cursorY = margin + 8;
      let textStartX = margin;
      if (neotreeLogo) {
        doc.addImage(neotreeLogo, "PNG", margin, margin, logoSize, logoSize);
        textStartX = margin + logoSize + 10;
      }
      if (appLogo) {
        const coatX = textStartX;
        doc.addImage(appLogo, "PNG", coatX, margin, coatSize, coatSize);
        textStartX = coatX + coatSize + 10;
      }
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(String(facilityName.value || "Facility"), textStartX, cursorY);
      cursorY += 18;
      doc.text("Neotree Malawi · Tertiary Admission Form", textStartX, cursorY);
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      cursorY += 16;
      const headerLines = [
        `Patient: ${formatValue(patientFullName.value)}`,
        `NPID: ${formatValue(patientNPID.value)}`,
        `DOB: ${formatValue(patientDOB.value)}`
      ];
      headerLines.forEach((line) => {
        doc.text(line, textStartX, cursorY);
        cursorY += 14;
      });
      const barcodeValue = formatValue(patientNPID.value);
      let barcodeBottom = margin;
      if (barcodeValue && barcodeValue !== "-") {
        try {
          const qrPng = await QRCode.toDataURL(barcodeValue, { width: barcodeWidth, margin: 1 });
          const barcodeX = pageWidth - margin - barcodeWidth;
          const barcodeY = margin;
          doc.addImage(qrPng, "PNG", barcodeX, barcodeY, barcodeWidth, barcodeHeight);
          barcodeBottom = barcodeY + barcodeHeight;
        } catch (e) {
          console.warn("QR generation failed", e);
        }
      }
      const tablesStartY = Math.max(cursorY, barcodeBottom + 6) + 12;
      leftY = tablesStartY;
      rightY = tablesStartY;
      const renderSection = (title, rows, column) => {
        const startX = column === "left" ? leftX : rightX;
        const targetY = column === "left" ? leftY : rightY;
        autoTable(doc, {
          startY: targetY,
          margin: { left: startX, right: pageWidth - startX - columnWidth },
          tableWidth: columnWidth,
          head: [[title, ""]],
          body: rows.map(([label, value]) => [label, formatValue(value)]),
          theme: "grid",
          styles: { fontSize: 9, cellPadding: 3 },
          headStyles: { fillColor: [232, 232, 232], textColor: 20, fontStyle: "bold" },
          columnStyles: {
            0: { cellWidth: columnWidth * 0.48 },
            1: { cellWidth: columnWidth * 0.52, halign: "right" }
          }
        });
        const finalY = doc.lastAutoTable.finalY || targetY;
        if (column === "left") leftY = finalY + 10;
        else rightY = finalY + 10;
      };
      renderSection("Birth Details", [
        ["Twin", enrollmentData.value.hasTwin],
        ["Place of birth", enrollmentData.value.placeOfBirth],
        ["Birth facility", enrollmentData.value.nameOfBirthFacility],
        ["Type of birth", enrollmentData.value.typeOfBirth],
        ["Birth weight (g)", enrollmentData.value.birthWeight],
        ["Gestation (weeks)", enrollmentData.value.gestationWeeks],
        ["APGAR (1 min)", enrollmentData.value.apgarScoreAt1],
        ["APGAR (5 min)", enrollmentData.value.apgarScoreAt5],
        ["APGAR (10 min)", enrollmentData.value.apgarScoreAt10],
        ["Cried after birth", enrollmentData.value.criedAfterBirth],
        ["Resuscitation", resuscitationMethods.value]
      ], "left");
      renderSection("Pregnancy & Delivery", [
        ["Mode of delivery", enrollmentData.value.modeOfDelivery],
        ["Rupture of membranes", enrollmentData.value.ruptureOfMembranes],
        ["Duration of ROM", enrollmentData.value.durationOfRuptureMembranes],
        ["Offensive liquor", enrollmentData.value.offensiveLiquor],
        ["Meconium present", enrollmentData.value.meconiumPresent],
        ["Maternal analgesia", enrollmentData.value.maternalAnalgesia],
        ["Anaesthesia used", enrollmentData.value.anesthesiaUsed],
        ["Steroids given", enrollmentData.value.steroidsGiven],
        ["Gestation assessment", enrollmentData.value.gestationMethodAssessment]
      ], "left");
      renderSection("Maternal Information", [
        ["Mother name", enrollmentData.value.motherName],
        ["Mother NPID", enrollmentData.value.motherNationalId],
        ["HIV status", enrollmentData.value.motherHivStatus],
        ["Last HIV test", enrollmentData.value.lastHivTestDate],
        ["VDRL result", enrollmentData.value.motherVdrlResult],
        ["Hepatitis result", enrollmentData.value.motherHepatitisResult],
        ["Tetanus/Diphtheria", formatArray(enrollmentData.value.tetanusDiphtheria)]
      ], "left");
      renderSection("Admission Outcome", [
        ["Outcome", finalAdmissionOutcomesData.value.admissionOutcome],
        ["Safeguard concerns", finalAdmissionOutcomesData.value.safeguardConcerns]
      ], "left");
      renderSection("Patient Information", [
        ["Name", patientFullName.value],
        ["NPID", patientNPID.value],
        ["Gender", patientGender.value],
        ["Date of birth", patientDOB.value || patientDOB],
        ["Admitted from", enrollmentData.value.admittedFrom],
        ["Referred from", enrollmentData.value.referredFrom],
        ["Transport mode", enrollmentData.value.modeOfTransport]
      ], "right");
      console.log(signsSymptomsData.value);
      renderSection("Presenting Complaints", [
        ["Complaints", formatArray(signsSymptomsData.value?.presenting_complaints)],
        ["Onset", signsSymptomsData.value?.symptom_onset_time],
        ["Severity", signsSymptomsData.value?.symptom_severity],
        ["Notes", signsSymptomsData.value?.detailed_assessment_notes]
      ], "right");
      renderSection("Vital Signs", [
        ["Temp (°C)", vitalsData.value?.temperature],
        ["Heart rate", vitalsData.value?.heart_rate],
        ["Resp rate", vitalsData.value?.respiratory_rate],
        ["Oxygen saturation", vitalsData.value?.oxygen_saturation],
        ["Blood sugar", vitalsData.value?.blood_sugar],
        ["Current weight (g)", vitalsData.value?.current_weight],
        ["Head circumference", vitalsData.value?.head_circumference]
      ], "right");
      renderSection("Sign-off", [
        ["Healthcare Worker", finalAdmissionOutcomesData.value.healthcareWorkerId],
        ["Role/Cadre", finalAdmissionOutcomesData.value.userRole],
        ["Signature", finalAdmissionOutcomesData.value.electronicSignature],
        ["Date", formattedDate.value]
      ], "right");
      const pageCount = doc.getNumberOfPages();
      const generatedText = `Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        const footerY = pageHeight - 16;
        doc.text(generatedText, margin, footerY, { align: "left" });
        doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, footerY, { align: "right" });
      }
      const filename = `admission-summary-${patientNPID.value || "patient"}.pdf`;
      doc.save(filename);
    };
    const generateQr = async () => {
      const value = formatValue(patientNPID.value);
      if (!value || value === "-") {
        qrDataUrl.value = "";
        return;
      }
      try {
        qrDataUrl.value = await QRCode.toDataURL(value, { width: 140, margin: 1 });
      } catch (error) {
        console.error("Error generating QR:", error);
        qrDataUrl.value = "";
      }
    };
    const handleBeforePrint = () => {
      shouldShowPrintPreview.value = true;
      setTimeout(generateQr, 50);
    };
    const handleAfterPrint = () => {
      shouldShowPrintPreview.value = false;
    };
    onMounted(async () => {
      window.addEventListener("beforeprint", handleBeforePrint);
      window.addEventListener("afterprint", handleAfterPrint);
      const patientId = patient.value?.patientID;
      if (patientId) {
        vitalsStore.initializeForPatient(Number(patientId));
        enrollmentStore.initializeEnrollmentForm(Number(patientId));
        signsSymptomsStore.initializeForPatient(Number(patientId));
        await loadAllObservationData();
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    });
    watch([patientNPID, shouldShowPrintPreview], () => {
      if (shouldShowPrintPreview.value) {
        setTimeout(generateQr, 50);
      }
    });
    watch(() => patient.value?.patientID, async (newPatientId) => {
      if (newPatientId) {
        vitalsStore.initializeForPatient(Number(newPatientId));
        enrollmentStore.initializeEnrollmentForm(Number(newPatientId));
        signsSymptomsStore.initializeForPatient(Number(newPatientId));
        await loadAllObservationData();
      }
    });
    __expose({
      showPreview: () => {
        shouldShowPrintPreview.value = true;
        setTimeout(generateQr, 50);
      },
      hidePreview: () => {
        shouldShowPrintPreview.value = false;
      },
      exportPdf
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["printable-admission-form", { "preview-mode": __props.forceShow, "print-mode": !__props.forceShow }])
      }, [
        createBaseVNode("header", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("img", {
              src: unref(neotreeLogoSrc),
              alt: "Neotree logo",
              class: "header-logo"
            }, null, 8, _hoisted_3$1),
            createBaseVNode("img", {
              src: unref(appLogoSrc),
              alt: "Coat of arms",
              class: "header-logo app-logo"
            }, null, 8, _hoisted_4)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, toDisplayString(facilityName.value), 1),
            createBaseVNode("div", _hoisted_7, toDisplayString(facilityDistrict.value) + " · Code: " + toDisplayString(facilityCode.value), 1),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "form-title" }, "Neotree Malawi · Tertiary Admission Form", -1)),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("span", null, "Patient: " + toDisplayString(patientFullName.value), 1),
              createBaseVNode("span", null, "NPID: " + toDisplayString(patientNPID.value), 1),
              createBaseVNode("span", null, "DOB: " + toDisplayString(patientDOB.value), 1)
            ])
          ]),
          !__props.forceShow ? (openBlock(), createElementBlock("div", _hoisted_9, [
            qrDataUrl.value ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: qrDataUrl.value,
              class: "qr-img",
              alt: "Patient QR"
            }, null, 8, _hoisted_10)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_11, toDisplayString(patientNPID.value), 1)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("section", _hoisted_14, [
              _cache[12] || (_cache[12] = createBaseVNode("h3", { class: "section-title" }, "Birth Details", -1)),
              createBaseVNode("div", _hoisted_15, [
                _cache[1] || (_cache[1] = createBaseVNode("span", null, "Twin", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.hasTwin)), 1)
              ]),
              createBaseVNode("div", _hoisted_16, [
                _cache[2] || (_cache[2] = createBaseVNode("span", null, "Place of birth", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.placeOfBirth)), 1)
              ]),
              createBaseVNode("div", _hoisted_17, [
                _cache[3] || (_cache[3] = createBaseVNode("span", null, "Birth facility", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.nameOfBirthFacility)), 1)
              ]),
              createBaseVNode("div", _hoisted_18, [
                _cache[4] || (_cache[4] = createBaseVNode("span", null, "Type of birth", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.typeOfBirth)), 1)
              ]),
              createBaseVNode("div", _hoisted_19, [
                _cache[5] || (_cache[5] = createBaseVNode("span", null, "Birth weight (g)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.birthWeight)), 1)
              ]),
              createBaseVNode("div", _hoisted_20, [
                _cache[6] || (_cache[6] = createBaseVNode("span", null, "Gestation (weeks)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.gestationWeeks)), 1)
              ]),
              createBaseVNode("div", _hoisted_21, [
                _cache[7] || (_cache[7] = createBaseVNode("span", null, "APGAR (1 min)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.apgarScoreAt1)), 1)
              ]),
              createBaseVNode("div", _hoisted_22, [
                _cache[8] || (_cache[8] = createBaseVNode("span", null, "APGAR (5 min)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.apgarScoreAt5)), 1)
              ]),
              createBaseVNode("div", _hoisted_23, [
                _cache[9] || (_cache[9] = createBaseVNode("span", null, "APGAR (10 min)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.apgarScoreAt10)), 1)
              ]),
              createBaseVNode("div", _hoisted_24, [
                _cache[10] || (_cache[10] = createBaseVNode("span", null, "Cried after birth", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.criedAfterBirth)), 1)
              ]),
              createBaseVNode("div", _hoisted_25, [
                _cache[11] || (_cache[11] = createBaseVNode("span", null, "Resuscitation", -1)),
                createBaseVNode("span", null, toDisplayString(resuscitationMethods.value), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_26, [
              _cache[22] || (_cache[22] = createBaseVNode("h3", { class: "section-title" }, "Pregnancy & Delivery", -1)),
              createBaseVNode("div", _hoisted_27, [
                _cache[13] || (_cache[13] = createBaseVNode("span", null, "Mode of delivery", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.modeOfDelivery)), 1)
              ]),
              createBaseVNode("div", _hoisted_28, [
                _cache[14] || (_cache[14] = createBaseVNode("span", null, "Rupture of membranes", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.ruptureOfMembranes)), 1)
              ]),
              createBaseVNode("div", _hoisted_29, [
                _cache[15] || (_cache[15] = createBaseVNode("span", null, "Duration of ROM", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.durationOfRuptureMembranes)), 1)
              ]),
              createBaseVNode("div", _hoisted_30, [
                _cache[16] || (_cache[16] = createBaseVNode("span", null, "Offensive liquor", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.offensiveLiquor)), 1)
              ]),
              createBaseVNode("div", _hoisted_31, [
                _cache[17] || (_cache[17] = createBaseVNode("span", null, "Meconium present", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.meconiumPresent)), 1)
              ]),
              createBaseVNode("div", _hoisted_32, [
                _cache[18] || (_cache[18] = createBaseVNode("span", null, "Maternal analgesia", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.maternalAnalgesia)), 1)
              ]),
              createBaseVNode("div", _hoisted_33, [
                _cache[19] || (_cache[19] = createBaseVNode("span", null, "Anaesthesia used", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.anesthesiaUsed)), 1)
              ]),
              createBaseVNode("div", _hoisted_34, [
                _cache[20] || (_cache[20] = createBaseVNode("span", null, "Steroids given", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.steroidsGiven)), 1)
              ]),
              createBaseVNode("div", _hoisted_35, [
                _cache[21] || (_cache[21] = createBaseVNode("span", null, "Gestation assessment", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.gestationMethodAssessment)), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_36, [
              _cache[30] || (_cache[30] = createBaseVNode("h3", { class: "section-title" }, "Maternal Information", -1)),
              createBaseVNode("div", _hoisted_37, [
                _cache[23] || (_cache[23] = createBaseVNode("span", null, "Mother name", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.motherName)), 1)
              ]),
              createBaseVNode("div", _hoisted_38, [
                _cache[24] || (_cache[24] = createBaseVNode("span", null, "Mother NPID", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.motherNationalId)), 1)
              ]),
              createBaseVNode("div", _hoisted_39, [
                _cache[25] || (_cache[25] = createBaseVNode("span", null, "HIV status", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.motherHivStatus)), 1)
              ]),
              createBaseVNode("div", _hoisted_40, [
                _cache[26] || (_cache[26] = createBaseVNode("span", null, "Last HIV test", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.lastHivTestDate)), 1)
              ]),
              createBaseVNode("div", _hoisted_41, [
                _cache[27] || (_cache[27] = createBaseVNode("span", null, "VDRL result", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.motherVdrlResult)), 1)
              ]),
              createBaseVNode("div", _hoisted_42, [
                _cache[28] || (_cache[28] = createBaseVNode("span", null, "Hepatitis result", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.motherHepatitisResult)), 1)
              ]),
              createBaseVNode("div", _hoisted_43, [
                _cache[29] || (_cache[29] = createBaseVNode("span", null, "Tetanus/Diphtheria", -1)),
                createBaseVNode("span", null, toDisplayString(formatArray(enrollmentData.value.tetanusDiphtheria)), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_44, [
              _cache[33] || (_cache[33] = createBaseVNode("h3", { class: "section-title" }, "Admission Outcome", -1)),
              createBaseVNode("div", _hoisted_45, [
                _cache[31] || (_cache[31] = createBaseVNode("span", null, "Outcome", -1)),
                createBaseVNode("span", _hoisted_46, toDisplayString(formatValue(finalAdmissionOutcomesData.value.admissionOutcome)), 1)
              ]),
              createBaseVNode("div", _hoisted_47, [
                _cache[32] || (_cache[32] = createBaseVNode("span", null, "Safeguard concerns", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(finalAdmissionOutcomesData.value.safeguardConcerns)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_48, [
            createBaseVNode("section", _hoisted_49, [
              _cache[41] || (_cache[41] = createBaseVNode("h3", { class: "section-title" }, "Patient Information", -1)),
              createBaseVNode("div", _hoisted_50, [
                _cache[34] || (_cache[34] = createBaseVNode("span", null, "Name", -1)),
                createBaseVNode("span", null, toDisplayString(patientFullName.value), 1)
              ]),
              createBaseVNode("div", _hoisted_51, [
                _cache[35] || (_cache[35] = createBaseVNode("span", null, "NPID", -1)),
                createBaseVNode("span", null, toDisplayString(patientNPID.value), 1)
              ]),
              createBaseVNode("div", _hoisted_52, [
                _cache[36] || (_cache[36] = createBaseVNode("span", null, "Gender", -1)),
                createBaseVNode("span", null, toDisplayString(patientGender.value), 1)
              ]),
              createBaseVNode("div", _hoisted_53, [
                _cache[37] || (_cache[37] = createBaseVNode("span", null, "Date of birth", -1)),
                createBaseVNode("span", null, toDisplayString(patientDOB.value), 1)
              ]),
              createBaseVNode("div", _hoisted_54, [
                _cache[38] || (_cache[38] = createBaseVNode("span", null, "Admitted from", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.admittedFrom)), 1)
              ]),
              createBaseVNode("div", _hoisted_55, [
                _cache[39] || (_cache[39] = createBaseVNode("span", null, "Referred from", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.referredFrom)), 1)
              ]),
              createBaseVNode("div", _hoisted_56, [
                _cache[40] || (_cache[40] = createBaseVNode("span", null, "Transport mode", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(enrollmentData.value.modeOfTransport)), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_57, [
              _cache[46] || (_cache[46] = createBaseVNode("h3", { class: "section-title" }, "Presenting Complaints", -1)),
              createBaseVNode("div", _hoisted_58, [
                _cache[42] || (_cache[42] = createBaseVNode("span", null, "Complaints", -1)),
                createBaseVNode("span", null, toDisplayString(formatArray(signsSymptomsData.value?.presenting_complaints)), 1)
              ]),
              createBaseVNode("div", _hoisted_59, [
                _cache[43] || (_cache[43] = createBaseVNode("span", null, "Onset", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(signsSymptomsData.value?.symptom_onset_time)), 1)
              ]),
              createBaseVNode("div", _hoisted_60, [
                _cache[44] || (_cache[44] = createBaseVNode("span", null, "Severity", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(signsSymptomsData.value?.symptom_severity)), 1)
              ]),
              createBaseVNode("div", _hoisted_61, [
                _cache[45] || (_cache[45] = createBaseVNode("span", null, "Notes", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(signsSymptomsData.value?.detailed_assessment_notes)), 1)
              ])
            ]),
            vitalsData.value ? (openBlock(), createElementBlock("section", _hoisted_62, [
              _cache[54] || (_cache[54] = createBaseVNode("h3", { class: "section-title" }, "Vital Signs", -1)),
              createBaseVNode("div", _hoisted_63, [
                _cache[47] || (_cache[47] = createBaseVNode("span", null, "Temp (°C)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(vitalsData.value.temperature)), 1)
              ]),
              createBaseVNode("div", _hoisted_64, [
                _cache[48] || (_cache[48] = createBaseVNode("span", null, "Heart rate", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(vitalsData.value.heart_rate)), 1)
              ]),
              createBaseVNode("div", _hoisted_65, [
                _cache[49] || (_cache[49] = createBaseVNode("span", null, "Resp rate", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(vitalsData.value.respiratory_rate)), 1)
              ]),
              createBaseVNode("div", _hoisted_66, [
                _cache[50] || (_cache[50] = createBaseVNode("span", null, "Oxygen saturation", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(vitalsData.value.oxygen_saturation)), 1)
              ]),
              createBaseVNode("div", _hoisted_67, [
                _cache[51] || (_cache[51] = createBaseVNode("span", null, "Blood sugar", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(vitalsData.value.blood_sugar)), 1)
              ]),
              createBaseVNode("div", _hoisted_68, [
                _cache[52] || (_cache[52] = createBaseVNode("span", null, "Current weight (g)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(vitalsData.value.current_weight)), 1)
              ]),
              createBaseVNode("div", _hoisted_69, [
                _cache[53] || (_cache[53] = createBaseVNode("span", null, "Head circumference", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(vitalsData.value.head_circumference)), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("section", _hoisted_70, [
              _cache[59] || (_cache[59] = createBaseVNode("h3", { class: "section-title" }, "Sign-off", -1)),
              createBaseVNode("div", _hoisted_71, [
                _cache[55] || (_cache[55] = createBaseVNode("span", null, "Healthcare Worker", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(finalAdmissionOutcomesData.value.healthcareWorkerId)), 1)
              ]),
              createBaseVNode("div", _hoisted_72, [
                _cache[56] || (_cache[56] = createBaseVNode("span", null, "Role/Cadre", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(finalAdmissionOutcomesData.value.userRole)), 1)
              ]),
              createBaseVNode("div", _hoisted_73, [
                _cache[57] || (_cache[57] = createBaseVNode("span", null, "Signature", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(finalAdmissionOutcomesData.value.electronicSignature)), 1)
              ]),
              createBaseVNode("div", _hoisted_74, [
                _cache[58] || (_cache[58] = createBaseVNode("span", null, "Date", -1)),
                createBaseVNode("span", null, toDisplayString(formattedDate.value), 1)
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_75, [
          createBaseVNode("span", null, "Generated: " + toDisplayString((/* @__PURE__ */ new Date()).toLocaleString()), 1),
          createBaseVNode("span", null, toDisplayString(facilityInfo.value), 1)
        ])
      ], 2)), [
        [vShow, __props.forceShow || shouldShowPrintPreview.value]
      ]);
    };
  }
});

const PrintableAdmissionForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a17dbc5"]]);

const _hoisted_1 = { class: "print-summary-wrapper" };
const _hoisted_2 = { class: "print-content" };
const _hoisted_3 = { class: "print-actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PrintSummarySection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const printableFormRef = ref(null);
    const printablePrintRef = ref(null);
    const sectionConfig = neonatalAdmissionSignOffSections[1];
    const formData = sectionConfig.formData;
    const subtitle = sectionConfig.subtitle;
    const handlePrint = async () => {
      if (printableFormRef.value?.exportPdf) {
        await printableFormRef.value.exportPdf();
        return;
      }
      if (printablePrintRef.value?.exportPdf) {
        await printablePrintRef.value.exportPdf();
      }
    };
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => {
        return null;
      },
      getFormValues: () => {
        return {};
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: unref(formData),
          subtitle: unref(subtitle),
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, {
          printSection: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(IonButton), {
                  expand: "block",
                  color: "primary",
                  onClick: handlePrint,
                  class: "print-button"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(printOutline),
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[0] || (_cache[0] = createTextVNode(" Print Admission Summary ", -1))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["formData", "subtitle"]),
        createVNode(PrintableAdmissionForm, {
          ref_key: "printablePrintRef",
          ref: printablePrintRef
        }, null, 512)
      ]);
    };
  }
});

const PrintSummarySection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c84df6d7"]]);

const cloneDefaultAdmissionOutcomesForm = () => JSON.parse(JSON.stringify(defaultNeonatalAdmissionOutcomesForm));
const useNeonatalAdmissionOutcomesStore = defineStore("neonatalAdmissionOutcomesStore", {
  state: () => ({
    activePatientId: null,
    admissionOutcomesForm: cloneDefaultAdmissionOutcomesForm(),
    admissionOutcomesFormCache: {}
  }),
  getters: {
    getActivePatientId() {
      return this.activePatientId;
    }
  },
  actions: {
    initializeAdmissionOutcomesForm(patientId) {
      if (patientId == null) {
        this.activePatientId = null;
        Object.assign(this.admissionOutcomesForm, cloneDefaultAdmissionOutcomesForm());
        return;
      }
      this.activePatientId = patientId;
      const cachedForm = this.admissionOutcomesFormCache[String(patientId)];
      if (cachedForm) {
        Object.assign(this.admissionOutcomesForm, cachedForm);
      } else {
        Object.assign(this.admissionOutcomesForm, cloneDefaultAdmissionOutcomesForm());
      }
      this.saveAdmissionOutcomesSnapshot();
    },
    saveAdmissionOutcomesSnapshot() {
      if (this.activePatientId == null) return;
      this.admissionOutcomesFormCache[String(this.activePatientId)] = JSON.parse(JSON.stringify(this.admissionOutcomesForm));
    },
    resetAdmissionOutcomesForm() {
      Object.assign(this.admissionOutcomesForm, cloneDefaultAdmissionOutcomesForm());
      this.saveAdmissionOutcomesSnapshot();
    },
    clearAdmissionOutcomesForm(patientId) {
      delete this.admissionOutcomesFormCache[String(patientId)];
      if (this.activePatientId === patientId) {
        this.resetAdmissionOutcomesForm();
      }
    }
  },
  persist: {
    paths: [
      "activePatientId",
      "admissionOutcomesForm",
      "admissionOutcomesFormCache"
    ]
  }
});

export { PrintSummarySection as P, useNeonatalAdmissionOutcomesStore as u };
