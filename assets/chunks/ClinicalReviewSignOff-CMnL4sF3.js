import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, M as IonSpinner, a2 as onMounted, x as resolveComponent, C as createBaseVNode, J as Fragment, B as withCtx, O as createBlock, H as createCommentVNode, R as renderList, L as IonIcon, N as IonButton, aG as IonContent, bu as IonPage, aL as useRouter, b1 as printOutline, f0 as provide, a5 as createTextVNode } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { z as StandardForm, _ as _export_sfc, T as Toolbar, u as useDemographicsStore, G as toastSuccess } from '../index-PMl5GQCx.js';
import { b as neonatalClinicalReviewOutcomesFormKey, N as NeonatalStepper, G as useNeonatalClinicalReviewOutcomesStore } from './NeonatalStepper-CDuygvRM.js';
import { C as ClinicalReviewProgressBar } from './ClinicalReviewProgressBar-BeMzZOLc.js';
import { n as neonatalClinicalReviewSignOffSections, u as useClinicalReviewSignOff, R as ReportFooter, a as ReportHeader, b as ReportRow, c as ReportSection, N as NeonatalReportService } from './ReportFooter-Ck9MKexg.js';

const _hoisted_1$2 = { class: "clinical-review-signoff-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ClinicalReviewSignOffSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalClinicalReviewSignOffSections[0];
    const formData = sectionConfig.formData;
    const subtitle = sectionConfig.subtitle;
    const clinicalReviewOutcomesForm = inject(neonatalClinicalReviewOutcomesFormKey);
    useClinicalReviewSignOff(formRef);
    const syncFormValues = (values) => {
      if (!clinicalReviewOutcomesForm) return;
      clinicalReviewOutcomesForm.healthcareWorkerId = values.healthcareWorkerId || "";
      clinicalReviewOutcomesForm.electronicSignature = values.electronicSignature || "";
      clinicalReviewOutcomesForm.userRole = values.userRole || "";
      clinicalReviewOutcomesForm.signOffDate = values.signOffDate || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => {
        return formRef.value?.validateForm?.() || null;
      },
      getFormValues: () => {
        return formRef.value?.getFormValues?.() || {};
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(StandardForm, {
          formData: unref(formData),
          subtitle: unref(subtitle),
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, null, 8, ["formData", "subtitle"])
      ]);
    };
  }
});

const ClinicalReviewSignOffSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-62f2284d"]]);

const _sfc_main$1 = defineComponent({
  name: "ClinicalReviewReport",
  components: {
    IonSpinner,
    ReportSection,
    ReportRow,
    ReportHeader,
    ReportFooter
  },
  props: {
    patientId: {
      type: [Number, String],
      required: true
    }
  },
  setup(props) {
    const reportData = ref(null);
    const generatedDate = ref((/* @__PURE__ */ new Date()).toLocaleString());
    const loadData = async () => {
      if (!props.patientId) return;
      try {
        reportData.value = await NeonatalReportService.getClinicalReviewReportData(props.patientId);
      } catch (error) {
        console.error("Failed to load report data", error);
      }
    };
    onMounted(loadData);
    watch(() => props.patientId, loadData);
    const formatValue = (value) => {
      if (value === void 0 || value === null || value === "") return "N/A";
      if (Array.isArray(value)) return value.length ? value.join(", ") : "N/A";
      const s = String(value).trim();
      return s ? s : "N/A";
    };
    const formatDate = (dateString) => {
      const raw = String(dateString ?? "").trim();
      if (!raw || raw.toUpperCase() === "N/A") return "N/A";
      const d = new Date(raw);
      if (!Number.isFinite(d.getTime())) return "N/A";
      return d.toLocaleDateString();
    };
    return {
      reportData,
      generatedDate,
      formatValue,
      formatDate
    };
  }
});

const _hoisted_1$1 = { class: "report-view" };
const _hoisted_2$1 = { class: "report-paper" };
const _hoisted_3$1 = { class: "report-body" };
const _hoisted_4$1 = { class: "report-row" };
const _hoisted_5$1 = { class: "column" };
const _hoisted_6 = { class: "column" };
const _hoisted_7 = { class: "report-row" };
const _hoisted_8 = { class: "column" };
const _hoisted_9 = { class: "column" };
const _hoisted_10 = { class: "report-row" };
const _hoisted_11 = { class: "column" };
const _hoisted_12 = { class: "column" };
const _hoisted_13 = { class: "report-row" };
const _hoisted_14 = { class: "column" };
const _hoisted_15 = { class: "column" };
const _hoisted_16 = { class: "report-row" };
const _hoisted_17 = { class: "column" };
const _hoisted_18 = { class: "column" };
const _hoisted_19 = {
  key: 0,
  style: { "margin": "5px 0", "border": "0", "border-top": "1px solid #eee" }
};
const _hoisted_20 = {
  key: 1,
  class: "loading-state"
};
const _hoisted_21 = { class: "spinner-container" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ReportHeader = resolveComponent("ReportHeader");
  const _component_ReportRow = resolveComponent("ReportRow");
  const _component_ReportSection = resolveComponent("ReportSection");
  const _component_ReportFooter = resolveComponent("ReportFooter");
  const _component_ion_spinner = resolveComponent("ion-spinner");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _ctx.reportData ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_component_ReportHeader, {
          facilityName: _ctx.reportData.facility.name,
          reportTitle: "Neonatal · Clinical Review Report",
          patientName: _ctx.reportData.patientInfo.fullName,
          npid: _ctx.reportData.patientInfo.npid,
          dob: _ctx.reportData.patientInfo.dob
        }, null, 8, ["facilityName", "patientName", "npid", "dob"]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_ReportSection, { title: "Patient Information" }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Name",
                    value: _ctx.reportData.patientInfo.fullName
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "NPID",
                    value: _ctx.reportData.patientInfo.npid
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Gender",
                    value: _ctx.reportData.patientInfo.gender
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Date of birth",
                    value: _ctx.reportData.patientInfo.dob
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Admitted from",
                    value: _ctx.reportData.enrollmentData.admittedFrom
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Referred from",
                    value: _ctx.reportData.enrollmentData.referredFrom
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Transport mode",
                    value: _ctx.reportData.enrollmentData.modeOfTransport
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_ReportSection, { title: "Maternal Information" }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Mother name",
                    value: _ctx.reportData.enrollmentData.motherName
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Mother NPID",
                    value: _ctx.reportData.enrollmentData.motherNationalId
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "HIV status",
                    value: _ctx.reportData.enrollmentData.motherHivStatus
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Last HIV test",
                    value: _ctx.reportData.enrollmentData.lastHivTestDate
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "VDRL result",
                    value: _ctx.reportData.enrollmentData.motherVdrlResult
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Hepatitis result",
                    value: _ctx.reportData.enrollmentData.motherHepatitisResult
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Tetanus/Diphtheria",
                    value: _ctx.reportData.enrollmentData.tetanusDiphtheria
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_ReportSection, { title: "Birth Details" }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Twin",
                    value: _ctx.reportData.enrollmentData.hasTwin
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Place of birth",
                    value: _ctx.reportData.enrollmentData.placeOfBirth
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Birth facility",
                    value: _ctx.reportData.enrollmentData.nameOfBirthFacility
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Type of birth",
                    value: _ctx.reportData.enrollmentData.typeOfBirth
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Birth weight (g)",
                    value: _ctx.reportData.enrollmentData.birthWeight
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Gestation (weeks)",
                    value: _ctx.reportData.enrollmentData.gestationWeeks
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "APGAR (1 min)",
                    value: _ctx.reportData.enrollmentData.apgarScoreAt1
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "APGAR (5 min)",
                    value: _ctx.reportData.enrollmentData.apgarScoreAt5
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "APGAR (10 min)",
                    value: _ctx.reportData.enrollmentData.apgarScoreAt10
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Cried after birth",
                    value: _ctx.reportData.enrollmentData.criedAfterBirth
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Resuscitation",
                    value: _ctx.reportData.enrollmentData.resuscitationMethods
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_ReportSection, { title: "Pregnancy & Delivery" }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Mode of delivery",
                    value: _ctx.reportData.enrollmentData.modeOfDelivery
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Rupture of membranes",
                    value: _ctx.reportData.enrollmentData.ruptureOfMembranes
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Duration of ROM",
                    value: _ctx.reportData.enrollmentData.durationOfRuptureMembranes
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Offensive liquor",
                    value: _ctx.reportData.enrollmentData.offensiveLiquor
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Meconium present",
                    value: _ctx.reportData.enrollmentData.meconiumPresent
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Maternal analgesia",
                    value: _ctx.reportData.enrollmentData.maternalAnalgesia
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Anaesthesia used",
                    value: _ctx.reportData.enrollmentData.anesthesiaUsed
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Steroids given",
                    value: _ctx.reportData.enrollmentData.steroidsGiven
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Gestation assessment",
                    value: _ctx.reportData.enrollmentData.gestationMethodAssessment
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              _ctx.reportData.triageData ? (openBlock(), createBlock(_component_ReportSection, {
                key: 0,
                title: "Triage Assessment"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Emergency Signs",
                    value: _ctx.formatValue(_ctx.reportData.triageData.emergency_signs)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Priority Signs",
                    value: _ctx.formatValue(_ctx.reportData.triageData.priority_signs)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Presenting Complaints",
                    value: _ctx.formatValue(_ctx.reportData.triageData.presenting_complaints)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Breathing",
                    value: _ctx.reportData.triageData.breathing
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Crying",
                    value: _ctx.reportData.triageData.crying
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Central Cyanosis",
                    value: _ctx.reportData.triageData.central_cyanosis
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Referral Required",
                    value: _ctx.reportData.triageData.referral_required
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Referral Facility",
                    value: _ctx.reportData.triageData.referral_facility
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Referral Notes",
                    value: _ctx.reportData.triageData.referral_notes
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_ReportSection, { title: "Vital Signs" }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Temp (°C)",
                    value: _ctx.reportData.vitalsData.temperature
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Heart rate",
                    value: _ctx.reportData.vitalsData.heart_rate
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Resp rate",
                    value: _ctx.reportData.vitalsData.respiratory_rate
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Oxygen saturation",
                    value: _ctx.reportData.vitalsData.oxygen_saturation
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Blood sugar",
                    value: _ctx.reportData.vitalsData.blood_sugar
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Current weight (g)",
                    value: _ctx.reportData.vitalsData.current_weight
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Head circumference",
                    value: _ctx.reportData.vitalsData.head_circumference
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              _ctx.reportData.signsSymptomsData ? (openBlock(), createBlock(_component_ReportSection, {
                key: 0,
                title: "Signs & Symptoms"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Re-admission?",
                    value: _ctx.formatValue(_ctx.reportData.signsSymptomsData.is_readmission)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Complaints",
                    value: _ctx.formatValue(_ctx.reportData.signsSymptomsData.presenting_complaints)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Onset",
                    value: _ctx.formatValue(_ctx.reportData.signsSymptomsData.symptom_onset_time)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Severity",
                    value: _ctx.formatValue(_ctx.reportData.signsSymptomsData.symptom_severity)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Notes",
                    value: _ctx.formatValue(_ctx.reportData.signsSymptomsData.detailed_assessment_notes)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              _ctx.reportData.generalExamData ? (openBlock(), createBlock(_component_ReportSection, {
                key: 0,
                title: "General Examination"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Activity",
                    value: _ctx.reportData.generalExamData.activityAssessment
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Fontanelle",
                    value: _ctx.reportData.generalExamData.fontanelleAssessment
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Head Mass",
                    value: _ctx.reportData.generalExamData.massInHeadAssessment
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Yellow",
                    value: _ctx.reportData.generalExamData.isBabyYellow
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Pallor",
                    value: _ctx.reportData.generalExamData.isBabyPallorPink
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Cyanosis",
                    value: _ctx.reportData.generalExamData.hasBabyCyanosis
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Oedema",
                    value: _ctx.reportData.generalExamData.hasBabyOedema
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "CRT",
                    value: _ctx.reportData.generalExamData.capillaryRefillTime
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Femoral Pulses",
                    value: _ctx.reportData.generalExamData.femoralPulses
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Genitalia",
                    value: _ctx.reportData.generalExamData.genitaliaAssessment
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Anus",
                    value: _ctx.reportData.generalExamData.anusPatent
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Cleft Lip/Palate",
                    value: _ctx.reportData.generalExamData.cleftLipPalateAssessment
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Congenital Abn",
                    value: _ctx.reportData.generalExamData.hasCongenitalAbnormalities
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Abn Type",
                    value: _ctx.reportData.generalExamData.congenitalAbnormalitiesType
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Notes",
                    value: _ctx.reportData.generalExamData.congenitalAbnormalitiesDescription
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15, [
              _ctx.reportData.reviewOfSystemsData ? (openBlock(), createBlock(_component_ReportSection, {
                key: 0,
                title: "Review of Systems"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Feed Type",
                    value: _ctx.reportData.reviewOfSystemsData.type_of_feed
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Feed Mode",
                    value: _ctx.reportData.reviewOfSystemsData.mode_of_feeding
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Feed Frequency",
                    value: _ctx.reportData.reviewOfSystemsData.frequency_of_feeding
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Feed Duration",
                    value: _ctx.reportData.reviewOfSystemsData.duration_of_feeding
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Feeding Effort",
                    value: _ctx.reportData.reviewOfSystemsData.feeding_effort
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Vomiting",
                    value: _ctx.reportData.reviewOfSystemsData.vomiting
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Stool Passed",
                    value: _ctx.reportData.reviewOfSystemsData.stool_passed
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Meconium Timing",
                    value: _ctx.reportData.reviewOfSystemsData.meconium_timing
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Stool Color",
                    value: _ctx.reportData.reviewOfSystemsData.stool_color
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Stool Consistency",
                    value: _ctx.reportData.reviewOfSystemsData.stool_consistency
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Abdominal Distension",
                    value: _ctx.reportData.reviewOfSystemsData.abdominal_distension
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Urine Passed",
                    value: _ctx.reportData.reviewOfSystemsData.urine_passed
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Urine Color",
                    value: _ctx.reportData.reviewOfSystemsData.urine_color
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Umbilical Cord",
                    value: _ctx.reportData.reviewOfSystemsData.umbilical_cord
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Umbilical Bleeding",
                    value: _ctx.reportData.reviewOfSystemsData.umbilical_bleeding
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Weight Trend",
                    value: _ctx.reportData.reviewOfSystemsData.weight_trend
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Sucking Reflex",
                    value: _ctx.reportData.reviewOfSystemsData.sucking_reflex
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Convulsions",
                    value: _ctx.reportData.reviewOfSystemsData.convulsions
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              _ctx.reportData.systemicExamData ? (openBlock(), createBlock(_component_ReportSection, {
                key: 0,
                title: "Systemic Examination"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "General Condition",
                    value: _ctx.reportData.systemicExamData.general_condition
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Color",
                    value: _ctx.reportData.systemicExamData.color
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Respiratory Distress",
                    value: _ctx.reportData.systemicExamData.respiratory_distress
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Respiratory Symptoms",
                    value: _ctx.formatValue(_ctx.reportData.systemicExamData.respiratory_symptoms)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Lung Sounds",
                    value: _ctx.reportData.systemicExamData.lung_sounds
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Heart Sounds",
                    value: _ctx.reportData.systemicExamData.heart_sounds
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Abdomen Findings",
                    value: _ctx.reportData.systemicExamData.abdomen_findings
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Umbilicus",
                    value: _ctx.reportData.systemicExamData.umbilicus_findings
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Genitalia",
                    value: _ctx.reportData.systemicExamData.genitalia_findings
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Anus",
                    value: _ctx.reportData.systemicExamData.anus_findings
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Tone",
                    value: _ctx.reportData.systemicExamData.tone
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Moro Reflex",
                    value: _ctx.reportData.systemicExamData.moro_reflex
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Grasp Reflex",
                    value: _ctx.reportData.systemicExamData.grasp_reflex
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Suck Reflex",
                    value: _ctx.reportData.systemicExamData.suck_reflex
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Fontanelle",
                    value: _ctx.reportData.systemicExamData.fontanelle
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Skin Findings",
                    value: _ctx.formatValue(_ctx.reportData.systemicExamData.skin_findings)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Musculoskeletal",
                    value: _ctx.formatValue(_ctx.reportData.systemicExamData.musculoskeletal_deformity)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_18, [
              _ctx.reportData.investigationsData && _ctx.reportData.investigationsData.length ? (openBlock(), createBlock(_component_ReportSection, {
                key: 0,
                title: "Investigations"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.reportData.investigationsData, (inv, index) => {
                    return openBlock(), createElementBlock("div", { key: index }, [
                      createVNode(_component_ReportRow, {
                        label: "Date",
                        value: inv.date
                      }, null, 8, ["value"]),
                      createVNode(_component_ReportRow, {
                        label: "Tests",
                        value: inv.tests
                      }, null, 8, ["value"]),
                      createVNode(_component_ReportRow, {
                        label: "Specimen",
                        value: inv.specimen
                      }, null, 8, ["value"]),
                      createVNode(_component_ReportRow, {
                        label: "Results",
                        value: inv.results
                      }, null, 8, ["value"]),
                      _ctx.reportData.investigationsData && index < _ctx.reportData.investigationsData.length - 1 ? (openBlock(), createElementBlock("hr", _hoisted_19)) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.reportData.diagnosisData ? (openBlock(), createBlock(_component_ReportSection, {
                key: 1,
                title: "Diagnosis"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Working Diagnosis",
                    value: _ctx.reportData.diagnosisData.workingDiagnosis?.label
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Differential",
                    value: _ctx.formatValue(_ctx.reportData.diagnosisData.differentialDiagnoses?.map((d) => d.label))
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Notes",
                    value: _ctx.reportData.diagnosisData.diagnosisNotes
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.reportData.treatmentPlanData ? (openBlock(), createBlock(_component_ReportSection, {
                key: 2,
                title: "Treatment Plan"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Other",
                    value: _ctx.formatValue(_ctx.reportData.treatmentPlanData.pharmacological?.incubator)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Thermal Care",
                    value: _ctx.formatValue(_ctx.reportData.treatmentPlanData.pharmacological?.thermalCareDetails)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Oxygen Therapy",
                    value: _ctx.formatValue(_ctx.reportData.treatmentPlanData.pharmacological?.oxygenTherapyDetails)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Feeding Support",
                    value: _ctx.formatValue(_ctx.reportData.treatmentPlanData.pharmacological?.feedingSupportDetails)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Admission Notes",
                    value: _ctx.formatValue(_ctx.reportData.treatmentPlanData.pharmacological?.admissionDetails)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Other Treatments",
                    value: _ctx.formatValue(_ctx.reportData.treatmentPlanData.pharmacological?.treatments)
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Prescriptions",
                    value: _ctx.formatValue(_ctx.reportData.treatmentPlanData.nonPharmacological?.prescription?.map((p) => p.drugName))
                  }, null, 8, ["value"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ReportSection, { title: "Clinical Review Outcome" }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Outcome",
                    value: _ctx.reportData.finalClinicalReviewOutcomesData.clinicalReviewOutcome
                  }, null, 8, ["value"]),
                  _ctx.reportData.finalClinicalReviewOutcomesData.clinicalReviewOutcome === "Other" ? (openBlock(), createBlock(_component_ReportRow, {
                    key: 0,
                    label: "Other outcome",
                    value: _ctx.reportData.finalClinicalReviewOutcomesData.clinicalReviewOutcomeOther
                  }, null, 8, ["value"])) : createCommentVNode("", true),
                  createVNode(_component_ReportRow, {
                    label: "Safeguard concerns",
                    value: _ctx.reportData.finalClinicalReviewOutcomesData.safeguardConcerns
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_ReportSection, { title: "Sign-off" }, {
                default: withCtx(() => [
                  createVNode(_component_ReportRow, {
                    label: "Healthcare Worker",
                    value: _ctx.reportData.finalClinicalReviewOutcomesData.healthcareWorkerId
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Role/Cadre",
                    value: _ctx.reportData.finalClinicalReviewOutcomesData.userRole
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Signature",
                    value: _ctx.reportData.finalClinicalReviewOutcomesData.electronicSignature
                  }, null, 8, ["value"]),
                  createVNode(_component_ReportRow, {
                    label: "Date",
                    value: _ctx.formatDate(_ctx.reportData.finalClinicalReviewOutcomesData.signOffDate)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createVNode(_component_ReportFooter, {
          generatedDate: _ctx.generatedDate,
          facilityInfo: _ctx.reportData.facility.info
        }, null, 8, ["generatedDate", "facilityInfo"])
      ], 64)) : (openBlock(), createElementBlock("div", _hoisted_20, [
        createBaseVNode("div", _hoisted_21, [
          createVNode(_component_ion_spinner, { name: "crescent" })
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "loading-text" }, [
          createBaseVNode("h3", null, "Generating Report"),
          createBaseVNode("p", null, "Please wait while we gather patient data...")
        ], -1))
      ]))
    ])
  ]);
}
const ClinicalReviewReport = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b6adde33"]]);

const _sfc_main = defineComponent({
  name: "NeonatalClinicalReviewSignOff",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    NeonatalStepper,
    ClinicalReviewProgressBar,
    ClinicalReviewSignOffSection,
    IonButton,
    IonIcon,
    IonSpinner,
    ClinicalReviewReport
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const clinicalReviewOutcomesStore = useNeonatalClinicalReviewOutcomesStore();
    const isSaving = ref(false);
    const showPrintReport = ref(false);
    const printableContainer = ref(null);
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncClinicalReviewOutcomesForm = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      clinicalReviewOutcomesStore.initializeClinicalReviewOutcomesForm(patientId);
    };
    syncClinicalReviewOutcomesForm();
    watch(
      () => patient.value?.patientID,
      () => syncClinicalReviewOutcomesForm()
    );
    const clinicalReviewOutcomesFormData = clinicalReviewOutcomesStore.clinicalReviewOutcomesForm;
    provide(neonatalClinicalReviewOutcomesFormKey, clinicalReviewOutcomesFormData);
    watch(
      () => clinicalReviewOutcomesStore.clinicalReviewOutcomesForm,
      () => clinicalReviewOutcomesStore.saveClinicalReviewOutcomesSnapshot(),
      { deep: true }
    );
    const currentOpenStepper = ref("1");
    const wizardData = ref(
      neonatalClinicalReviewSignOffSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalClinicalReviewSignOffSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalClinicalReviewSignOffSections[0].title,
        value: "1",
        component: ClinicalReviewSignOffSection,
        configIndex: 0
      }
    ];
    const updateStatus = (event) => {
      if (event && event.value) {
        wizardData.value.forEach((item, index) => {
          if (event.value === (index + 1).toString()) {
            item.class = "open_step common_step";
            item.checked = false;
          } else if (index < parseInt(event.value) - 1) {
            item.class = "common_step color_white";
            item.checked = true;
          } else {
            item.class = "common_step";
            item.checked = false;
          }
        });
      }
    };
    const finalStepIndex = stepperData.length - 1;
    const getSaveFunction = (currentIndex) => {
      if (currentIndex === finalStepIndex) {
        return async () => {
          if (isSaving.value) return;
          isSaving.value = true;
          try {
            toastSuccess("Clinical review signed off successfully");
            showPrintReport.value = true;
          } finally {
            isSaving.value = false;
          }
        };
      }
      return null;
    };
    const handlePrintReport = async () => {
      if (patient.value?.patientID) {
        await NeonatalReportService.generateClinicalReviewReport(patient.value.patientID, printableContainer.value || void 0);
      }
    };
    const finishClinicalReview = () => {
      clinicalReviewOutcomesStore.clearClinicalReviewOutcomesForm(patient.value?.patientID);
      router.push("/patient-profile");
    };
    return {
      wizardData,
      stepperData,
      stepperTitle: "Sign Off & Print",
      currentOpenStepper,
      updateStatus,
      getSaveFunction,
      isSaving,
      neonatalClinicalReviewSignOffSections,
      showPrintReport,
      handlePrintReport,
      finishClinicalReview,
      printOutline,
      patient,
      printableContainer
    };
  }
});

const _hoisted_1 = { class: "signoff-container" };
const _hoisted_2 = {
  key: 1,
  class: "print-report-wrapper"
};
const _hoisted_3 = { class: "actions-header" };
const _hoisted_4 = { class: "action-buttons" };
const _hoisted_5 = {
  class: "printable-container",
  ref: "printableContainer"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ClinicalReviewReport = resolveComponent("ClinicalReviewReport");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-clinical-review-signoff-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, {
        fullscreen: true,
        class: "ion-padding"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            !_ctx.showPrintReport ? (openBlock(), createBlock(_component_NeonatalStepper, {
              key: 0,
              wizardData: _ctx.wizardData,
              StepperData: _ctx.stepperData,
              stepperTitle: _ctx.stepperTitle,
              openStepper: _ctx.currentOpenStepper,
              backUrl: "/patient-profile",
              flowType: "clinicalReview",
              sectionsConfig: _ctx.neonatalClinicalReviewSignOffSections,
              useSkipLogic: true,
              getSaveFunction: _ctx.getSaveFunction,
              onUpdateStatus: _ctx.updateStatus
            }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "sectionsConfig", "getSaveFunction", "onUpdateStatus"])) : (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "page-title" }, "Clinical Review - Completed successfully.", -1)),
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_ion_button, {
                    onClick: _ctx.finishClinicalReview,
                    fill: "outline",
                    color: "dark"
                  }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode(" Return to Profile ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_ion_button, {
                    color: "success",
                    class: "print-btn",
                    onClick: _ctx.handlePrintReport
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        icon: _ctx.printOutline,
                        slot: "start"
                      }, null, 8, ["icon"]),
                      _cache[1] || (_cache[1] = createTextVNode(" Print Report ", -1))
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              createBaseVNode("div", _hoisted_5, [
                _ctx.patient?.patientID ? (openBlock(), createBlock(_component_ClinicalReviewReport, {
                  key: 0,
                  patientId: _ctx.patient.patientID
                }, null, 8, ["patientId"])) : createCommentVNode("", true)
              ], 512)
            ]))
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const ClinicalReviewSignOff = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a0c2bac2"]]);

export { ClinicalReviewSignOff as default };
