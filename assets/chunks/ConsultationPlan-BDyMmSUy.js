import { s as defineComponent, w as watch, a2 as onMounted, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, Q as alertCircleOutline, c4 as checkmarkCircleOutline, J as Fragment, R as renderList, b8 as calendarOutline, D as toDisplayString, a4 as normalizeClass, a9 as chevronDownOutline, H as createCommentVNode, f as ref, c as computed, L as IonIcon, eC as bodyOutline, eD as scanOutline, bH as addOutline, br as pulseOutline, eE as moveOutline, eF as fitnessOutline, de as manOutline, eG as happyOutline, eH as earOutline, eI as nutritionOutline, dj as eyeOutline, c3 as warningOutline, aS as medicalOutline, aV as femaleOutline, v as documentTextOutline, n as nextTick, O as createBlock, B as withCtx, a7 as IonLabel, a5 as createTextVNode, av as IonToggle, aq as IonItem, af as IonRow, aH as IonAccordion, N as IonButton, a8 as withModifiers, aI as IonAccordionGroup, ap as IonList, au as script, a6 as IonInput, bI as saveOutline, G as closeCircleOutline, c9 as clipboardOutline, ad as IonTextarea, aA as IonCol, aL as useRouter, cu as useRoute, M as IonSpinner, dG as IonLoading, aG as IonContent, bY as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage, eB as lockClosedOutline, ab as checkmarkOutline } from './vendor-D9gV--WW.js';
import { s as storeToRefs, m as mapState } from './pinia-CI1UBDxV.js';
import { _ as _sfc_main$a } from './Wizard.vue_vue_type_script_setup_true_lang-FRCThg_d.js';
import { u as useDemographicsStore, K as ObservationService, b as EncounterTypeId, aq as ConceptService, H as HisDate, _ as _export_sfc, bp as useAllegyStore, n as icons, o as createModal, z as StandardForm, t as toastWarning, G as toastSuccess, P as PatientService, S as Service, b2 as useTreatmentPlanStore, F as DynamicButton, a0 as DrugService, b4 as confirmModal, b3 as useOutcomeStore, aB as ListPicker, bm as useInvestigationStore, bY as useOPDDiagnosisStore, e as useGeneralStore, b1 as useVitalsStore, bG as useNextAppointmentStore, T as Toolbar, s as isPatientDeceased, x as toastDanger, b6 as getOfflineSavedUnsavedData, J as savePatientRecord, bZ as resetOPDPatientData, bI as StagesService, v as usePatientList, r as closeVisit } from '../index-DGSSrngm.js';
import { D as DemographicBar } from './DemographicBar-CiRkLpB-.js';
import { e as eyeOpeningMinorWeights, a as eyeOpeningWeights, m as motorResponseMinorWeights, b as motorResponseWeights, v as verbalResponseMinorWeights, c as verbalResponseWeights, _ as _sfc_main$7 } from './LevelOfConsciousness.vue_vue_type_script_setup_true_lang-CZb_p0Le.js';
import { P as PresentingComplaints, _ as _sfc_main$8, a as _sfc_main$9 } from './PresentingComplaints-D0x0jIfJ.js';
import { S as SelectTestDateModal } from './SelectTestDateModal-B__V5pJu.js';
import { A as Allergies, D as DynamicList, N as NonPharmacologicalIntervention, p as patientSessionManager, a as NextAppointment } from './ClientUtils-B5m48Vme.js';
import { I as Investigations } from './Investigations-D_tsQNt1.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-CofydeTO.js';
import { a as DRUG_FREQUENCIES, b as getDrugRouteList } from './drug_prescription_service-BYXAy_Id.js';
import { P as PreviousTreatment } from './treatment-JhrrD0s4.js';
import { l as lodashExports } from './lodash-DX6X19N6.js';
import { D as DynamicDispositionList, A as AdmittedforShortStayOutcomef, R as ReferredOutCome, a as DischargedHome, d as deadOutcome, b as ReferToAnotherClinic, u as usePatientProfile } from './usePatientProfile-C7eJEj0Z.js';
import { O as OPDPrintingModal } from './OPDPrintingModal-BgZXbmA-.js';
import { a as createOPDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-ClxlOhvA.js';
import { u as usePresentingComplaintsStore } from './previousComplaints-wxVOWMot.js';
import { u as useFormWizard } from './useFormWizard-BMnQTq7K.js';
import { u as useUserActivities } from './useUserActivities-DQbg3YlR.js';

const _hoisted_1$5 = { class: "visit-section" };
const _hoisted_2$5 = { class: "section-header" };
const _hoisted_3$4 = {
  key: 0,
  class: "no-data"
};
const _hoisted_4$3 = {
  key: 1,
  class: "allergy-accordion"
};
const _hoisted_5$3 = ["onClick"];
const _hoisted_6$3 = { class: "acc-left" };
const _hoisted_7$3 = { class: "acc-title" };
const _hoisted_8$3 = { class: "acc-count" };
const _hoisted_9$3 = {
  key: 0,
  class: "accordion-body"
};
const _hoisted_10$3 = { class: "item-label" };
const _hoisted_11$3 = { class: "item-value" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AllergiesListing",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const expandedGroups = ref({});
    const allergyList = ref([]);
    const drugPatterns = {
      antiviral: /abacavir|lamivudine|lopinavir|ritonavir|zidovudine|efavirenz|tenofovir/i,
      antibiotic: /penicillin|amoxicillin|cephalexin|azithromycin|ciprofloxacin|doxycycline/i,
      analgesic: /aspirin|ibuprofen|acetaminophen|morphine|codeine|tramadol/i,
      cardiac: /metoprolol|lisinopril|amlodipine|atorvastatin|warfarin/i,
      activated: /activated\s+charcoal/i
    };
    const allergyTypeMap = {
      "985": { name: "Drug Allergy", severity: "danger" },
      "7759": { name: "Location/Environmental", severity: "info" },
      "7579": { name: "Medical Condition", severity: "warning" },
      drug: { name: "Drug Allergy", severity: "danger" },
      food: { name: "Food Allergy", severity: "danger" },
      environmental: { name: "Environmental", severity: "warning" },
      contact: { name: "Contact Allergy", severity: "warning" },
      unknown: { name: "Drug Allergy", severity: "danger" }
    };
    const classifyDrug = (drugName) => {
      const name = drugName.toLowerCase();
      if (drugPatterns.antiviral.test(name)) {
        return "Antiviral Medication";
      }
      if (drugPatterns.antibiotic.test(name)) {
        return "Antibiotic";
      }
      if (drugPatterns.analgesic.test(name)) {
        return "Pain Medication";
      }
      if (drugPatterns.cardiac.test(name)) {
        return "Cardiac Medication";
      }
      if (drugPatterns.activated.test(name)) {
        return "Detoxification Agent";
      }
      return "Medication";
    };
    const loadAllergies = async () => {
      try {
        if (!patient.value?.patientID) return;
        const observations = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.MEDICAL_HISTORY);
        const allergicConceptId = await ConceptService.getConceptID("Allergic");
        const allergyObs = observations.filter((obs) => obs.concept_id === allergicConceptId);
        allergyList.value = await Promise.all(
          allergyObs.map(async (obs) => {
            const conceptId = obs.value_coded?.toString() || "unknown";
            const conceptName = await ConceptService.getConceptName(obs.value_coded);
            let allergyType = allergyTypeMap[conceptId]?.name || "Drug Allergy";
            let displayValue = obs.value_text || conceptName || "Unknown";
            if (conceptId === "985" && obs.value_text) {
              allergyType = classifyDrug(obs.value_text);
            }
            return {
              name: allergyType,
              displayValue,
              date: obs.obs_datetime || obs.encounter_datetime,
              conceptId
            };
          })
        );
        const dates = Object.keys(groupedAllergies.value);
        if (dates.length > 0) {
          expandedGroups.value[dates[0]] = true;
        }
      } catch (error) {
        console.error("Error loading allergies:", error);
      }
    };
    const hasAllergies = computed(() => {
      return allergyList.value.length > 0;
    });
    const groupedAllergies = computed(() => {
      const groups = {};
      allergyList.value.forEach((allergy) => {
        const date = allergy.date ? formatDateForGrouping(allergy.date) : "Unknown Date";
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(allergy);
      });
      const sortedGroups = {};
      const sortedDates = Object.keys(groups).sort((a, b) => {
        if (a === "Unknown Date") return 1;
        if (b === "Unknown Date") return -1;
        return new Date(b).getTime() - new Date(a).getTime();
      });
      sortedDates.forEach((date) => {
        sortedGroups[date] = groups[date];
      });
      return sortedGroups;
    });
    const toggleGroup = (date) => {
      expandedGroups.value[date] = !expandedGroups.value[date];
    };
    const formatDateForGrouping = (dateString) => {
      if (!dateString) return "Unknown Date";
      try {
        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
      } catch (error) {
        return "Unknown Date";
      }
    };
    const formatDateHeader = (dateString) => {
      if (dateString === "Unknown Date") return "Unknown Date";
      try {
        const date = new Date(dateString);
        const sessionDate = HisDate.sessionDate();
        const today = new Date(sessionDate);
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const dateStr = date.toDateString();
        const todayStr = today.toDateString();
        const yesterdayStr = yesterday.toDateString();
        if (dateStr === todayStr) {
          return "Today";
        } else if (dateStr === yesterdayStr) {
          return "Yesterday";
        } else {
          return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          });
        }
      } catch (error) {
        return dateString;
      }
    };
    watch(
      () => patient.value?.patientID,
      async (newPatientId) => {
        if (newPatientId) {
          await loadAllergies();
        }
      },
      { immediate: true }
    );
    watch(
      () => patient.value?.observations,
      async (newObs, oldObs) => {
        if (newObs !== oldObs) {
          await loadAllergies();
        }
      },
      { deep: true }
    );
    onMounted(async () => {
      await loadAllergies();
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createVNode(_component_ion_icon, {
            icon: unref(alertCircleOutline),
            class: "section-icon"
          }, null, 8, ["icon"]),
          _cache[0] || (_cache[0] = createBaseVNode("h3", null, "Allergies", -1))
        ]),
        !hasAllergies.value ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createVNode(_component_ion_icon, {
            icon: unref(checkmarkCircleOutline),
            class: "no-data-icon"
          }, null, 8, ["icon"]),
          _cache[1] || (_cache[1] = createBaseVNode("p", null, "No known allergies", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_4$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(groupedAllergies.value, (group, date) => {
            return openBlock(), createElementBlock("div", {
              key: date,
              class: "accordion-section"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["accordion-header", { open: expandedGroups.value[date] }]),
                onClick: ($event) => toggleGroup(date)
              }, [
                createBaseVNode("div", _hoisted_6$3, [
                  createVNode(_component_ion_icon, {
                    icon: unref(calendarOutline),
                    class: "acc-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("span", _hoisted_7$3, toDisplayString(formatDateHeader(date)), 1),
                  createBaseVNode("span", _hoisted_8$3, "(" + toDisplayString(group.length) + ")", 1)
                ]),
                createVNode(_component_ion_icon, {
                  icon: unref(chevronDownOutline),
                  class: normalizeClass(["chevron", { rotate: expandedGroups.value[date] }])
                }, null, 8, ["icon", "class"])
              ], 10, _hoisted_5$3),
              expandedGroups.value[date] ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(group, (allergy, idx) => {
                  return openBlock(), createElementBlock("div", {
                    class: "allergy-item",
                    key: idx
                  }, [
                    createBaseVNode("span", _hoisted_10$3, toDisplayString(allergy.name) + ":", 1),
                    createBaseVNode("span", _hoisted_11$3, toDisplayString(allergy.displayValue), 1)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ]);
          }), 128))
        ]))
      ]);
    };
  }
});

const AllergiesListing = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b14ceaf9"]]);

const _sfc_main$5 = defineComponent({
  name: "VisitHistory",
  components: {
    AllergiesListing,
    IonIcon
  },
  setup() {
    const store = useAllegyStore();
    const selectedAllergiesList2 = computed(() => store.selectedMedicalAllergiesList);
    return {
      selectedAllergiesList2,
      alertCircleOutline,
      documentTextOutline,
      femaleOutline,
      medicalOutline,
      warningOutline,
      bodyOutline,
      eyeOutline,
      nutritionOutline,
      fitnessOutline,
      pulseOutline,
      earOutline,
      happyOutline,
      manOutline,
      moveOutline,
      addOutline,
      scanOutline
    };
  },
  data() {
    return {
      presentingComplaintsWithDuration: [],
      pastMedicalHistory: [],
      levelOfConsciousness: {
        eyeResponse: null,
        verbalResponse: null,
        motorResponse: null
      },
      pregnancy: {
        patientPregnant: null,
        breastFeeding: null
      },
      allergyList: [],
      physicalExamCategories: {
        Eyes: { icon: eyeOutline, abnormalities: [], normal: false },
        Mouth: { icon: nutritionOutline, abnormalities: [], normal: false },
        Ears: { icon: earOutline, abnormalities: [], normal: false },
        Face: { icon: happyOutline, abnormalities: [], normal: false },
        Neck: { icon: manOutline, abnormalities: [], normal: false },
        Chest: { icon: fitnessOutline, abnormalities: [], normal: false },
        "Chest Movement": { icon: moveOutline, abnormalities: [], normal: false },
        "Heart Sounds": { icon: pulseOutline, abnormalities: [], normal: false },
        "Breath Sounds": { icon: addOutline, abnormalities: [], normal: false },
        "Added Breath Sounds": { icon: addOutline, abnormalities: [], normal: false },
        "Abdominal Inspection": { icon: scanOutline, abnormalities: [], normal: false },
        "Genital Examination": { icon: bodyOutline, abnormalities: [], normal: false }
      }
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    hasLevelOfConsciousness() {
      return this.levelOfConsciousness.eyeResponse || this.levelOfConsciousness.verbalResponse || this.levelOfConsciousness.motorResponse;
    },
    hasPresentingComplaints() {
      return this.presentingComplaintsWithDuration?.length > 0;
    },
    hasPregnancyData() {
      return this.pregnancy.patientPregnant || this.pregnancy.breastFeeding;
    },
    hasPastMedicalHistory() {
      return this.uniquePastMedicalHistory?.length > 0;
    },
    hasAllergies() {
      return this.allergyList?.length > 0;
    },
    hasPhysicalExam() {
      return Object.values(this.physicalExamCategories).some((category) => category.abnormalities.length > 0 || category.normal);
    },
    uniquePastMedicalHistory() {
      return [...new Set(this.pastMedicalHistory)];
    },
    uniquePresentingComplaints() {
      return [...new Set(this.presentingComplaintsWithDuration.map((c) => c.name))];
    },
    isMinor() {
      return HisDate.getAgeInYears(this.patient?.personInformation?.birthdate) < 18;
    },
    gcsScore() {
      if (!this.hasLevelOfConsciousness) return null;
      const eye = this.levelOfConsciousness.eyeResponse;
      const motor = this.levelOfConsciousness.motorResponse;
      const verbal = this.levelOfConsciousness.verbalResponse;
      const eyeWeight = eye ? (this.isMinor ? eyeOpeningMinorWeights : eyeOpeningWeights)[eye] ?? 0 : 0;
      const motorWeight = motor ? (this.isMinor ? motorResponseMinorWeights : motorResponseWeights)[motor] ?? 0 : 0;
      const verbalWeight = verbal ? (this.isMinor ? verbalResponseMinorWeights : verbalResponseWeights)[verbal] ?? 0 : 0;
      const total = eyeWeight + motorWeight + verbalWeight;
      return `(M ${motorWeight} V ${verbalWeight} E ${eyeWeight}) ${total}/${this.isMinor ? 5 : 15}`;
    }
  },
  methods: {
    async updateData() {
      if (!this.patient?.patientID) return;
      await this.loadPresentingComplaints();
      await this.loadPastMedicalHistory();
      await this.loadLevelOfConsciousness();
      await this.loadPregnancyStatus();
      await this.loadPhysicalExam();
      await this.loadAllergies();
    },
    async loadPresentingComplaints() {
      try {
        const observations = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PRESENTING_COMPLAINTS);
        this.presentingComplaintsWithDuration = [];
        const parentComplaints = observations.filter((obs) => obs.concept_id === 8578);
        for (const complaint of parentComplaints) {
          const complaintName = await ConceptService.getConceptName(complaint.value_coded);
          let duration = "Duration not specified";
          if (complaint.children && Array.isArray(complaint.children) && complaint.children.length > 0) {
            const durationChild = complaint.children[0];
            duration = durationChild.value_text || "Duration not specified";
          } else if (complaint.child && Array.isArray(complaint.child) && complaint.child.length > 0) {
            const durationChild = complaint.child[0];
            duration = durationChild.value_text || "Duration not specified";
          }
          this.presentingComplaintsWithDuration.push({
            name: complaintName,
            duration
          });
        }
        console.log("Loaded complaints:", this.presentingComplaintsWithDuration);
      } catch (error) {
        console.error("Error loading presenting complaints:", error);
      }
    },
    async loadPastMedicalHistory() {
      try {
        const observations = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PAST_MEDICAL_HISTORY);
        const chronicDiseaseObs = observations.filter((obs) => obs.concept_name === "Chronic disease");
        this.pastMedicalHistory = await Promise.all(
          chronicDiseaseObs.map(async (obs) => {
            return await ConceptService.getConceptName(obs.value_coded);
          })
        );
      } catch (error) {
        console.error("Error loading past medical history:", error);
      }
    },
    async loadLevelOfConsciousness() {
      try {
        const observations = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.ASSESSMENT);
        if (observations && Array.isArray(observations)) {
          const eyeResponseObs = observations.find((obs) => obs.concept_name === "Eye opening response");
          this.levelOfConsciousness.eyeResponse = eyeResponseObs?.value_coded ? await ConceptService.getConceptName(eyeResponseObs.value_coded) : null;
          const verbalResponseObs = observations.find((obs) => obs.concept_name === "Best verbal response");
          this.levelOfConsciousness.verbalResponse = verbalResponseObs?.value_coded ? await ConceptService.getConceptName(verbalResponseObs.value_coded) : null;
          const motorResponseObs = observations.find((obs) => obs.concept_name === "Best motor response");
          this.levelOfConsciousness.motorResponse = motorResponseObs?.value_coded ? await ConceptService.getConceptName(motorResponseObs.value_coded) : null;
        }
      } catch (error) {
        console.error("Error loading level of consciousness:", error);
      }
    },
    async loadPregnancyStatus() {
      try {
        const observations = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PREGNANCY_STATUS);
        if (observations && Array.isArray(observations)) {
          const patientPregnantObs = observations.find((obs) => obs.concept_name === "Patient pregnant");
          this.pregnancy.patientPregnant = patientPregnantObs?.value_coded ? await ConceptService.getConceptName(patientPregnantObs.value_coded) : null;
          const breastFeedingObs = observations.find((obs) => obs.concept_name === "Is patient breast feeding?");
          this.pregnancy.breastFeeding = breastFeedingObs?.value_coded ? await ConceptService.getConceptName(breastFeedingObs.value_coded) : null;
        }
      } catch (error) {
        console.error("Error loading pregnancy status:", error);
      }
    },
    async loadAllergies() {
      try {
        const observations = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.MEDICAL_HISTORY);
        const allergicConceptId = await ConceptService.getConceptID("Allergic");
        const allergyObs = observations.filter((obs) => obs.concept_id === allergicConceptId);
        this.allergyList = await Promise.all(
          allergyObs.map(async (obs) => {
            return obs.value_text || await ConceptService.getConceptName(obs.value_coded);
          })
        );
      } catch (error) {
        console.error("Error loading allergies:", error);
      }
    },
    async loadPhysicalExam() {
      try {
        const observations = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PHYSICAL_EXAMINATION);
        Object.values(this.physicalExamCategories).forEach((category) => {
          category.abnormalities = [];
          category.normal = false;
        });
        for (const obs of observations) {
          if (!obs.concept_name) continue;
          const conceptName = obs.concept_name;
          const valueText = obs.value_text;
          if (conceptName === "Eyes normal" && valueText === "Yes") {
            this.physicalExamCategories["Eyes"].normal = true;
          } else if (conceptName === "Abnormality for eyes" && valueText) {
            this.physicalExamCategories["Eyes"].abnormalities.push(valueText);
          } else if (conceptName === "Other eye abnormality notes" && valueText) {
            this.physicalExamCategories["Eyes"].abnormalities.push(valueText);
          }
          if (conceptName === "Mouth normal" && valueText === "Yes") {
            this.physicalExamCategories["Mouth"].normal = true;
          } else if (conceptName === "Abnormality for  mouth" && valueText) {
            this.physicalExamCategories["Mouth"].abnormalities.push(valueText);
          } else if (conceptName === "Other mouth abnormality notes" && valueText) {
            this.physicalExamCategories["Mouth"].abnormalities.push(valueText);
          }
          if (conceptName === "Ears normal" && valueText === "Yes") {
            this.physicalExamCategories["Ears"].normal = true;
          } else if (conceptName === "Abnormality for ears" && valueText) {
            this.physicalExamCategories["Ears"].abnormalities.push(valueText);
          } else if (conceptName === "Other ears abnormality notes" && valueText) {
            this.physicalExamCategories["Ears"].abnormalities.push(valueText);
          }
          if (conceptName === "Face normal" && valueText === "Yes") {
            this.physicalExamCategories["Face"].normal = true;
          } else if (conceptName === "Abnormality for face" && valueText) {
            this.physicalExamCategories["Face"].abnormalities.push(valueText);
          } else if (conceptName === "Other face abnormality notes" && valueText) {
            this.physicalExamCategories["Face"].abnormalities.push(valueText);
          }
          if (conceptName === "Neck normal" && valueText === "Yes") {
            this.physicalExamCategories["Neck"].normal = true;
          } else if (conceptName === "Abnormality for neck" && valueText) {
            this.physicalExamCategories["Neck"].abnormalities.push(valueText);
          } else if (conceptName === "Other neck abnormality notes" && valueText) {
            this.physicalExamCategories["Neck"].abnormalities.push(valueText);
          }
          if (conceptName === "Chest inspection normal" && valueText === "Yes") {
            this.physicalExamCategories["Chest"].normal = true;
          } else if (conceptName === "Abnormality for  chest inspection" && valueText) {
            this.physicalExamCategories["Chest"].abnormalities.push(valueText);
          } else if (conceptName === "Other chest abnormality notes" && valueText) {
            this.physicalExamCategories["Chest"].abnormalities.push(valueText);
          }
          if (conceptName === "Chest movements" && valueText) {
            this.physicalExamCategories["Chest Movement"].abnormalities.push(valueText);
          }
          if (conceptName === "Heart sounds normal" && valueText === "Yes") {
            this.physicalExamCategories["Heart Sounds"].normal = true;
          } else if (conceptName === "Heart sounds abnormality" && valueText) {
            this.physicalExamCategories["Heart Sounds"].abnormalities.push(valueText);
          }
          if (conceptName === "Breath sounds normal" && valueText === "Yes") {
            this.physicalExamCategories["Breath Sounds"].normal = true;
          } else if (conceptName === "Breath sounds abnormality" && valueText) {
            this.physicalExamCategories["Breath Sounds"].abnormalities.push(valueText);
          }
          if (conceptName === "Abnormalities when added" && valueText) {
            this.physicalExamCategories["Added Breath Sounds"].abnormalities.push(valueText);
          }
          if (conceptName === "Abdominal inspection normal" && valueText === "Yes") {
            this.physicalExamCategories["Abdominal Inspection"].normal = true;
          } else if (conceptName === "Abdominal inspection abnormality" && valueText) {
            this.physicalExamCategories["Abdominal Inspection"].abnormalities.push(valueText);
          } else if (conceptName === "Other abdominal abnormality notes" && valueText) {
            this.physicalExamCategories["Abdominal Inspection"].abnormalities.push(valueText);
          } else if (conceptName === "Abdominal auscultation abnormality" && valueText) {
            this.physicalExamCategories["Abdominal Inspection"].abnormalities.push(valueText);
          } else if (conceptName === "Bowel sounds abnormality" && valueText) {
            this.physicalExamCategories["Abdominal Inspection"].abnormalities.push(valueText);
          } else if (conceptName === "Abdominal palpation abnormality" && valueText) {
            this.physicalExamCategories["Abdominal Inspection"].abnormalities.push(valueText);
          }
          if (conceptName === "Genital examination normal" && valueText === "Yes") {
            this.physicalExamCategories["Genital Examination"].normal = true;
          } else if (conceptName === "Genital examination abnormality" && valueText) {
            this.physicalExamCategories["Genital Examination"].abnormalities.push(valueText);
          } else if (conceptName === "Urethral meatus abnormalities" && valueText) {
            this.physicalExamCategories["Genital Examination"].abnormalities.push(valueText);
          } else if (conceptName === "Vulva inspection abnormalities" && valueText) {
            this.physicalExamCategories["Genital Examination"].abnormalities.push(valueText);
          } else if (conceptName === "Other genital abnormality notes" && valueText) {
            this.physicalExamCategories["Genital Examination"].abnormalities.push(valueText);
          }
        }
      } catch (error) {
        console.error("Error loading physicalExam:", error);
      }
    }
  },
  watch: {
    patient: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
  }
});

const _hoisted_1$4 = { class: "visit-container" };
const _hoisted_2$4 = { class: "visit-sections" };
const _hoisted_3$3 = {
  key: 0,
  class: "visit-section"
};
const _hoisted_4$2 = { class: "section-header" };
const _hoisted_5$2 = { class: "section-content" };
const _hoisted_6$2 = {
  key: 0,
  class: "info-item"
};
const _hoisted_7$2 = { class: "info-value" };
const _hoisted_8$2 = {
  key: 1,
  class: "info-item"
};
const _hoisted_9$2 = { class: "info-value" };
const _hoisted_10$2 = {
  key: 2,
  class: "info-item"
};
const _hoisted_11$2 = { class: "info-value" };
const _hoisted_12$2 = {
  key: 3,
  class: "info-item"
};
const _hoisted_13$2 = { class: "info-value highlight" };
const _hoisted_14$1 = {
  key: 1,
  class: "visit-section"
};
const _hoisted_15$1 = { class: "section-header" };
const _hoisted_16$1 = { class: "complaints-container" };
const _hoisted_17$1 = { class: "complaint-name" };
const _hoisted_18$1 = { class: "complaint-duration" };
const _hoisted_19$1 = {
  key: 2,
  class: "visit-section"
};
const _hoisted_20$1 = { class: "section-header" };
const _hoisted_21$1 = { class: "section-content" };
const _hoisted_22$1 = {
  key: 0,
  class: "info-item"
};
const _hoisted_23$1 = { class: "info-value highlight" };
const _hoisted_24$1 = {
  key: 1,
  class: "info-item"
};
const _hoisted_25$1 = { class: "info-value highlight" };
const _hoisted_26$1 = {
  key: 3,
  class: "visit-section"
};
const _hoisted_27$1 = { class: "section-header" };
const _hoisted_28 = { class: "tags-container" };
const _hoisted_29 = {
  key: 4,
  class: "visit-section"
};
const _hoisted_30 = { class: "section-header" };
const _hoisted_31 = { class: "tags-container" };
const _hoisted_32 = {
  key: 5,
  class: "visit-section"
};
const _hoisted_33 = { class: "section-header" };
const _hoisted_34 = { class: "exam-section" };
const _hoisted_35 = {
  key: 0,
  class: "exam-category"
};
const _hoisted_36 = { class: "exam-category-header" };
const _hoisted_37 = { class: "exam-items" };
const _hoisted_38 = {
  key: 1,
  class: "exam-item normal"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    _cache[12] || (_cache[12] = createBaseVNode("div", { class: "visit-header" }, [
      createBaseVNode("h5", null, "Patient's Clinical Assessment Summary")
    ], -1)),
    createBaseVNode("div", _hoisted_2$4, [
      _ctx.hasLevelOfConsciousness ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
        createBaseVNode("div", _hoisted_4$2, [
          createVNode(_component_ion_icon, {
            icon: _ctx.alertCircleOutline,
            class: "section-icon"
          }, null, 8, ["icon"]),
          _cache[0] || (_cache[0] = createBaseVNode("h3", null, "Level of Consciousness", -1))
        ]),
        createBaseVNode("div", _hoisted_5$2, [
          _ctx.levelOfConsciousness.eyeResponse ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "info-label" }, "Eye Response:", -1)),
            createBaseVNode("span", _hoisted_7$2, toDisplayString(_ctx.levelOfConsciousness.eyeResponse), 1)
          ])) : createCommentVNode("", true),
          _ctx.levelOfConsciousness.verbalResponse ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "info-label" }, "Verbal Response:", -1)),
            createBaseVNode("span", _hoisted_9$2, toDisplayString(_ctx.levelOfConsciousness.verbalResponse), 1)
          ])) : createCommentVNode("", true),
          _ctx.levelOfConsciousness.motorResponse ? (openBlock(), createElementBlock("div", _hoisted_10$2, [
            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "info-label" }, "Motor Response:", -1)),
            createBaseVNode("span", _hoisted_11$2, toDisplayString(_ctx.levelOfConsciousness.motorResponse), 1)
          ])) : createCommentVNode("", true),
          _ctx.gcsScore ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
            _cache[4] || (_cache[4] = createBaseVNode("span", { class: "info-label" }, "Score:", -1)),
            createBaseVNode("span", _hoisted_13$2, toDisplayString(_ctx.gcsScore), 1)
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true),
      _ctx.hasPresentingComplaints ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
        createBaseVNode("div", _hoisted_15$1, [
          createVNode(_component_ion_icon, {
            icon: _ctx.documentTextOutline,
            class: "section-icon"
          }, null, 8, ["icon"]),
          _cache[5] || (_cache[5] = createBaseVNode("h3", null, "Presenting Complaints", -1))
        ]),
        createBaseVNode("div", _hoisted_16$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presentingComplaintsWithDuration, (complaint, index) => {
            return openBlock(), createElementBlock("div", {
              class: "complaint-item",
              key: index
            }, [
              createBaseVNode("div", _hoisted_17$1, toDisplayString(complaint.name), 1),
              createBaseVNode("div", _hoisted_18$1, toDisplayString(complaint.duration), 1)
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true),
      _ctx.hasPregnancyData ? (openBlock(), createElementBlock("div", _hoisted_19$1, [
        createBaseVNode("div", _hoisted_20$1, [
          createVNode(_component_ion_icon, {
            icon: _ctx.femaleOutline,
            class: "section-icon"
          }, null, 8, ["icon"]),
          _cache[6] || (_cache[6] = createBaseVNode("h3", null, "Pregnancy Status", -1))
        ]),
        createBaseVNode("div", _hoisted_21$1, [
          _ctx.pregnancy.patientPregnant ? (openBlock(), createElementBlock("div", _hoisted_22$1, [
            _cache[7] || (_cache[7] = createBaseVNode("span", { class: "info-label" }, "Pregnant:", -1)),
            createBaseVNode("span", _hoisted_23$1, toDisplayString(_ctx.pregnancy.patientPregnant), 1)
          ])) : createCommentVNode("", true),
          _ctx.pregnancy.breastFeeding ? (openBlock(), createElementBlock("div", _hoisted_24$1, [
            _cache[8] || (_cache[8] = createBaseVNode("span", { class: "info-label" }, "Breastfeeding:", -1)),
            createBaseVNode("span", _hoisted_25$1, toDisplayString(_ctx.pregnancy.breastFeeding), 1)
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true),
      _ctx.hasPastMedicalHistory ? (openBlock(), createElementBlock("div", _hoisted_26$1, [
        createBaseVNode("div", _hoisted_27$1, [
          createVNode(_component_ion_icon, {
            icon: _ctx.medicalOutline,
            class: "section-icon"
          }, null, 8, ["icon"]),
          _cache[9] || (_cache[9] = createBaseVNode("h3", null, "Medical History", -1))
        ]),
        createBaseVNode("div", _hoisted_28, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.uniquePastMedicalHistory, (history, index) => {
            return openBlock(), createElementBlock("div", {
              class: "medical-tag",
              key: index
            }, toDisplayString(history), 1);
          }), 128))
        ])
      ])) : createCommentVNode("", true),
      _ctx.hasAllergies ? (openBlock(), createElementBlock("div", _hoisted_29, [
        createBaseVNode("div", _hoisted_30, [
          createVNode(_component_ion_icon, {
            icon: _ctx.warningOutline,
            class: "section-icon"
          }, null, 8, ["icon"]),
          _cache[10] || (_cache[10] = createBaseVNode("h3", null, "Allergies", -1))
        ]),
        createBaseVNode("div", _hoisted_31, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.allergyList, (allergy, index) => {
            return openBlock(), createElementBlock("div", {
              class: "allergy-tag",
              key: index
            }, toDisplayString(allergy), 1);
          }), 128))
        ])
      ])) : createCommentVNode("", true),
      _ctx.hasPhysicalExam ? (openBlock(), createElementBlock("div", _hoisted_32, [
        createBaseVNode("div", _hoisted_33, [
          createVNode(_component_ion_icon, {
            icon: _ctx.bodyOutline,
            class: "section-icon"
          }, null, 8, ["icon"]),
          _cache[11] || (_cache[11] = createBaseVNode("h3", null, "Physical Examination", -1))
        ]),
        createBaseVNode("div", _hoisted_34, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.physicalExamCategories, (category, catName) => {
            return openBlock(), createElementBlock(Fragment, { key: catName }, [
              category.abnormalities.length > 0 || category.normal ? (openBlock(), createElementBlock("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  createVNode(_component_ion_icon, {
                    icon: category.icon
                  }, null, 8, ["icon"]),
                  createBaseVNode("h4", null, toDisplayString(catName), 1)
                ]),
                createBaseVNode("div", _hoisted_37, [
                  category.abnormalities.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(category.abnormalities, (abnormality, idx) => {
                    return openBlock(), createElementBlock("div", {
                      class: "exam-item abnormal",
                      key: idx
                    }, toDisplayString(abnormality), 1);
                  }), 128)) : category.normal ? (openBlock(), createElementBlock("div", _hoisted_38, "Normal examination")) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ])
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const VisitHistory = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-382ca63a"]]);

const usePastMedicalHistoryForm = () => {
  const demographicsStore = useDemographicsStore();
  const { patient } = storeToRefs(demographicsStore);
  const resetForm = () => {
  };
  const pastMedicalHistoryFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Existing Chronic Health Conditions",
        grid: { s: "12" }
      },
      // TB Checkbox
      {
        componentType: "checkboxField",
        name: "TB",
        label: "TB",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value) {
            updates["TB treatment"] = "";
            updates["TB drugs"] = null;
            updates["TB drug start date"] = "";
          }
          return updates;
        }
      },
      // TB Treatment Radio
      {
        componentType: "radioButtonField",
        header: "On TB medication",
        name: "TB treatment",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["TB"] === true,
        onChange: (value, allFormValues) => {
          const updates = {};
          if (value !== "Yes") {
            updates["TB drugs"] = null;
            updates["TB drug start date"] = "";
          }
          return updates;
        }
      },
      // TB Medication Select
      {
        componentType: "multiSelectInputField",
        header: "Select medication",
        name: "TB drugs",
        isMultiple: false,
        trackBy: "name",
        grid: { s: "6" },
        icon: icons.search,
        options: [
          { name: "Auramine 'O' (C.I. 41000) 50g" },
          { name: "Bedaquilline 100mg" },
          { name: "Clofazimine 100mg" },
          { name: "Clofazimine 50mg" }
        ],
        condition: (allFormValues) => allFormValues["TB"] === true && allFormValues["TB treatment"] === "Yes"
      },
      // TB Start Date
      {
        componentType: "dateInputField",
        header: "Start date",
        name: "TB drug start date",
        grid: { s: "6" },
        condition: (allFormValues) => allFormValues["TB"] === true && allFormValues["TB treatment"] === "Yes",
        minDate: patient.value?.personInformation?.birthdate || void 0,
        maxDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // Other Conditions
      {
        componentType: "checkboxField",
        name: "Chronic Obstructive Pulmonary Disease (COPD)",
        label: "Chronic Obstructive Pulmonary Disease (COPD)",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: () => ({})
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "checkboxField",
        name: "Asthma",
        label: "Asthma",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: () => ({})
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "checkboxField",
        name: "Epilepsy",
        label: "Epilepsy",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: () => ({})
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "checkboxField",
        name: "Previous stroke",
        label: "Previous stroke",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: () => ({})
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "checkboxField",
        name: "Peptic Ulcer Disease (PUD)",
        label: "Peptic Ulcer Disease (PUD)",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: () => ({})
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "checkboxField",
        name: "Mental disorder",
        label: "Mental disorder",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: () => ({})
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      {
        componentType: "checkboxField",
        name: "Bleeding disorders",
        label: "Bleeding disorders",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: () => ({})
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // Hypertension
      {
        componentType: "checkboxField",
        name: "Hypertension",
        label: "Hypertension",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value) {
            updates["Hypertension medication"] = "";
            updates["Current hypertension treatment regimen"] = null;
          }
          return updates;
        }
      },
      {
        componentType: "radioButtonField",
        header: "On medication",
        name: "Hypertension medication",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Hypertension"] === true,
        onChange: (value, allFormValues) => {
          const updates = {};
          if (value !== "Yes") {
            updates["Current hypertension treatment regimen"] = null;
          }
          return updates;
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Select medication",
        name: "Current hypertension treatment regimen",
        isMultiple: false,
        trackBy: "name",
        grid: { s: "12" },
        icon: icons.search,
        options: [
          { name: "Captopril 12.5mg" },
          { name: "Aspirin 75mg" },
          { name: "Hydrochlorothiazide 25mg" },
          { name: "Enalapril Meleate 5mg" },
          { name: "Enalapril Maleate 10mg" }
        ],
        condition: (allFormValues) => allFormValues["Hypertension"] === true && allFormValues["Hypertension medication"] === "Yes"
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // HIV
      {
        componentType: "radioButtonField",
        header: "HIV Status",
        name: "HIV status",
        required: true,
        type: "inline",
        options: [
          { value: "HIV negative", label: "(-)" },
          { value: "HIV Positive", label: "(+)" },
          { value: "HIV unknown", label: "Unknown" }
        ],
        disabled: (allFormValues) => allFormValues["None"],
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value) {
            updates["HIV status"] = "";
            updates["ARV start date"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "radioButtonField",
        header: "Is the patient on ART",
        name: "Is the client on ART?",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["HIV status"] === "HIV Positive",
        onChange: (value, allFormValues) => {
          const updates = {};
          if (value !== "Yes") {
            updates["ARV start date"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "dateInputField",
        header: "Enter ARV start date",
        name: "ARV start date",
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["HIV status"] === "HIV Positive" && allFormValues["Is the client on ART?"] === "Yes",
        minDate: patient.value?.personInformation?.birthdate || void 0,
        maxDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      { grid: { s: "7" } },
      {
        componentType: "switchField",
        name: "can_measure_oxygen_saturation",
        label: "Is Scan Form Link ID available?",
        allowClearToNull: true,
        condition: (allFormValues) => allFormValues["HIV status"] === "HIV Positive",
        onChange: (value) => {
          if (value) createModal(SelectTestDateModal, { class: "medium-modal" }, true);
        },
        grid: { s: "5" }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // Diabetes
      {
        componentType: "checkboxField",
        name: "Diabetes Mellitus",
        label: "Diabetes Mellitus",
        type: "single",
        grid: { s: "12" },
        disabled: (allFormValues) => allFormValues["None"],
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value) {
            updates["Diabetes"] = "";
            updates["Controlled by"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "radioButtonField",
        header: "Type",
        name: "Diabetes",
        options: [
          { value: "Type 1 diabetes", label: "Type I" },
          { value: "Type 2 diabetes", label: "Type II" },
          { value: "Unknown", label: "Unsure" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Diabetes Mellitus"] === true
      },
      {
        componentType: "radioButtonField",
        header: "Controlled by",
        name: "Controlled by",
        options: [
          { value: "Diet", label: "Diet" },
          { value: "Tablets", label: "Tablets" },
          { value: "Insulin", label: "Insulin" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Diabetes Mellitus"] === true
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // None Checkbox
      {
        componentType: "checkboxField",
        name: "None",
        label: "None",
        type: "single",
        grid: { s: "12" },
        onChange: (value, allFormValues) => {
          const updates = {};
          if (value) {
            updates["TB"] = false;
            updates["Chronic Obstructive Pulmonary Disease (COPD)"] = false;
            updates["Asthma"] = false;
            updates["Epilepsy"] = false;
            updates["Previous stroke"] = false;
            updates["Peptic Ulcer Disease (PUD)"] = false;
            updates["Mental disorder"] = false;
            updates["Bleeding disorders"] = false;
            updates["Hypertension"] = false;
            updates["HIV Status"] = false;
            updates["Diabetes Mellitus"] = false;
            updates["TB treatment"] = "";
            updates["TB drugs"] = null;
            updates["TB drug start date"] = "";
            updates["Hypertension medication"] = "";
            updates["Current hypertension treatment regimen"] = null;
            updates["HIV status"] = "";
            updates["ARV start date"] = "";
            updates["Diabetes"] = "";
            updates["Controlled by"] = "";
          }
          return updates;
        }
      }
    ];
  });
  return {
    resetForm,
    pastMedicalHistoryFormSection
  };
};

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PastMedicalHistory",
  setup(__props, { expose: __expose }) {
    const pastMedicalHistoryFormComposable = usePastMedicalHistoryForm();
    const formRef = ref(null);
    const formKey = ref(0);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          console.log("Patient changed, resetting form");
          formKey.value++;
          await nextTick();
          await nextTick();
        }
      }
    );
    watch(
      () => formRef.value?.getFormValues()?.["None"],
      (isNoneChecked) => {
        if (isNoneChecked && formRef.value) {
          nextTick(() => {
          });
        }
      }
    );
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return false;
      }
      const validationErrors = formRef.value.validateForm();
      if (validationErrors) {
        console.log("Validation errors:", validationErrors);
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const formData = formRef.value.getFormValues();
      console.log("Form data:", formData);
      const pastMedicalHistoryData = await processPastMedicalHistory(formData);
      if (pastMedicalHistoryData.length === 0) {
        toastWarning("No past medical history data to save");
        return false;
      }
      await ObservationService.addObsToEncounterPatient(pastMedicalHistoryData, EncounterTypeId.PAST_MEDICAL_HISTORY);
      formKey.value++;
      await nextTick();
      await nextTick();
      toastSuccess("Past medical history saved successfully");
      return true;
    };
    const processPastMedicalHistory = async (data) => {
      const observations = [];
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "") {
          continue;
        }
        if (key === "HIV status") {
          const conceptId = await ConceptService.getConceptID(value, true);
          observations.push(await ObservationService.buildValueCoded(key, conceptId));
        } else if (typeof value === "boolean" && value === true) {
          try {
            const conceptId = await ConceptService.getConceptID(key, true);
            if (conceptId) {
              observations.push(await ObservationService.buildValueCoded("Chronic disease", conceptId));
            }
          } catch (error) {
            observations.push(await ObservationService.buildValueText("Chronic disease", key));
          }
        } else if (typeof value === "string") {
          observations.push(await ObservationService.buildValueText(key, value));
        } else if (typeof value === "object" && value?.name) {
          observations.push(await ObservationService.buildValueText(key, value.name));
        } else if (value instanceof Date || /^\d{4}-\d{2}-\d{2}$/.test(value)) {
          observations.push(await ObservationService.buildValueDate(key, value));
        }
      }
      console.log("Processed past medical history:", observations);
      return observations;
    };
    onMounted(async () => {
      console.log("Past medical history form mounted");
      await nextTick();
      await nextTick();
    });
    const pastMedicalHistoryForm = computed(() => {
      return pastMedicalHistoryFormComposable.pastMedicalHistoryFormSection.value;
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      resetForm: () => {
        formKey.value++;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: pastMedicalHistoryForm.value,
        ref_key: "formRef",
        ref: formRef,
        key: formKey.value
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$3 = { key: 0 };
const _hoisted_2$3 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$2 = { class: "nav-buttons" };
const _hoisted_4$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_5$1 = { class: "nav-buttons" };
const _hoisted_6$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_7$1 = { class: "nav-buttons" };
const _hoisted_8$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_9$1 = { class: "nav-buttons" };
const _hoisted_10$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_11$1 = { class: "nav-buttons" };
const _hoisted_12$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_13$1 = { class: "nav-buttons" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ClinicalAssessment",
  setup(__props, { expose: __expose }) {
    const activeAccordion = ref("loc");
    const refreshKey = ref(0);
    const hasDataToday = ref(false);
    const showDataCapture = ref(false);
    const patientService = new PatientService();
    const demographicsStore = useDemographicsStore();
    const refreshComponent = () => {
      refreshKey.value++;
    };
    const presentingComplaintsFormRef = ref(null);
    const levelOfConsciousnessFormRef = ref(null);
    const pastMedicalHistoryFormRef = ref(null);
    const allergiesFormRef = ref(null);
    const pregnancyBreastfeedingFormRef = ref(null);
    const physicalExaminationFormRef = ref(null);
    const allSections = [
      { id: "loc", label: "Level of consciousness", show: true },
      { id: "pc", label: "Presenting complaints", show: true },
      { id: "pbs", label: "Pregnancy and breastfeeding status", show: () => patientService.isChildBearing() },
      { id: "pmh", label: "Past medical history", show: true },
      { id: "al", label: "Allergies", show: true },
      { id: "pe", label: "Physical examination", show: true }
    ];
    async function checkForTodaysData() {
      const todayString = Service.getSessionDate();
      const clinicalEncounterTypes = [
        EncounterTypeId.ASSESSMENT,
        EncounterTypeId.PRESENTING_COMPLAINTS,
        EncounterTypeId.PAST_MEDICAL_HISTORY,
        EncounterTypeId.PHYSICAL_EXAMINATION,
        EncounterTypeId.MEDICAL_HISTORY,
        EncounterTypeId.PREGNANCY_STATUS
      ];
      let hasData = false;
      for (const encounterType of clinicalEncounterTypes) {
        try {
          const observations = await ObservationService.getObsByEncounterIdAndDate(encounterType);
          if (observations && observations.some((obs) => {
            if (!obs.obs_datetime) return false;
            return HisDate.toStandardHisFormat(obs.obs_datetime) === HisDate.toStandardHisFormat(todayString);
          })) {
            hasData = true;
            break;
          }
        } catch (error) {
          console.error(`Error checking observations for encounter type ${encounterType}:`, error);
        }
      }
      hasDataToday.value = hasData;
    }
    onMounted(checkForTodaysData);
    watch(() => demographicsStore.patient, checkForTodaysData);
    const hasClinicalDataToday = computed(() => hasDataToday.value);
    const visibleSections = computed(
      () => allSections.filter((section) => {
        if (typeof section.show === "function") {
          return section.show();
        }
        return section.show;
      })
    );
    const shouldShowSection = (sectionId) => {
      const section = allSections.find((s) => s.id === sectionId);
      if (!section) return false;
      if (typeof section.show === "function") {
        return section.show();
      }
      return section.show;
    };
    const getSectionIndex = (sectionId) => {
      return visibleSections.value.findIndex((s) => s.id === sectionId);
    };
    const openPreviousSection = (currentSectionId) => {
      const currentIndex = getSectionIndex(currentSectionId);
      if (currentIndex > 0) {
        activeAccordion.value = visibleSections.value[currentIndex - 1].id;
      }
    };
    const handleNext = (currentSectionId) => {
      const currentIndex = getSectionIndex(currentSectionId);
      const nextIndex = currentIndex + 1;
      if (nextIndex < visibleSections.value.length) {
        activeAccordion.value = visibleSections.value[nextIndex].id;
      } else {
        activeAccordion.value = "";
        refreshComponent();
      }
    };
    const onSubmit = async () => {
      const componentRefs = [
        { ref: presentingComplaintsFormRef, name: "PresentingComplaints" },
        { ref: levelOfConsciousnessFormRef, name: "LevelOfConsciousness" },
        { ref: pastMedicalHistoryFormRef, name: "PastMedicalHistory" },
        { ref: pregnancyBreastfeedingFormRef, name: "PregnancyBreastfeeding" },
        { ref: physicalExaminationFormRef, name: "PhysicalExamination" },
        { ref: allergiesFormRef, name: "Allergies" }
      ];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            const result = await component.ref.value.onSubmit();
            if (component.name === "PresentingComplaints" && result === false) {
              return;
            }
          } catch (error) {
            console.error(`Error calling ${component.name} onSubmit:`, error);
            if (component.name === "PresentingComplaints") {
              return;
            }
          }
        } else {
          console.log(`${component.name} component ref not available or no onSubmit method`);
        }
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        hasClinicalDataToday.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          createVNode(unref(IonItem), { lines: "none" }, {
            default: withCtx(() => [
              createVNode(unref(IonLabel), null, {
                default: withCtx(() => [..._cache[14] || (_cache[14] = [
                  createTextVNode("Switch between Capture Mode and Summary Mode", -1)
                ])]),
                _: 1
              }),
              createVNode(unref(IonToggle), {
                checked: showDataCapture.value,
                onIonChange: _cache[0] || (_cache[0] = (ev) => showDataCapture.value = ev.detail.checked),
                slot: "end"
              }, null, 8, ["checked"])
            ]),
            _: 1
          }),
          !showDataCapture.value ? (openBlock(), createBlock(VisitHistory, { key: refreshKey.value })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        !hasClinicalDataToday.value || showDataCapture.value ? (openBlock(), createBlock(unref(IonRow), {
          key: 1,
          style: { "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(unref(IonAccordionGroup), {
              value: activeAccordion.value,
              "onUpdate:value": _cache[13] || (_cache[13] = ($event) => activeAccordion.value = $event),
              ref: "accordionGroup",
              class: "previousView"
            }, {
              default: withCtx(() => [
                shouldShowSection("loc") ? (openBlock(), createBlock(unref(IonAccordion), {
                  key: 0,
                  value: "loc",
                  class: "_card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[15] || (_cache[15] = [
                            createTextVNode("Level of consciousness", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_2$3, [
                      createVNode(_sfc_main$7, {
                        "is-active": activeAccordion.value === "loc",
                        ref_key: "levelOfConsciousnessFormRef",
                        ref: levelOfConsciousnessFormRef,
                        onDataSaved: refreshComponent
                      }, null, 8, ["is-active"]),
                      createBaseVNode("div", _hoisted_3$2, [
                        getSectionIndex("loc") > 0 ? (openBlock(), createBlock(unref(IonButton), {
                          key: 0,
                          fill: "outline",
                          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => openPreviousSection("loc"), ["stop"]))
                        }, {
                          default: withCtx(() => [..._cache[16] || (_cache[16] = [
                            createTextVNode(" Back ", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(IonButton), {
                          fill: "outline",
                          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => handleNext("loc"), ["stop"]))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getSectionIndex("loc") < visibleSections.value.length - 1 ? "Next" : "Finish"), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                shouldShowSection("pc") ? (openBlock(), createBlock(unref(IonAccordion), {
                  key: 1,
                  value: "pc",
                  class: "_card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[17] || (_cache[17] = [
                            createTextVNode(" Presenting complaints - ", -1),
                            createBaseVNode("span", { class: "required-badge" }, "Required", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_4$1, [
                      createVNode(PresentingComplaints, {
                        "is-active": activeAccordion.value === "pc",
                        onDataSaved: refreshComponent,
                        ref_key: "presentingComplaintsFormRef",
                        ref: presentingComplaintsFormRef
                      }, null, 8, ["is-active"]),
                      createBaseVNode("div", _hoisted_5$1, [
                        getSectionIndex("pc") > 0 ? (openBlock(), createBlock(unref(IonButton), {
                          key: 0,
                          fill: "outline",
                          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => openPreviousSection("pc"), ["stop"]))
                        }, {
                          default: withCtx(() => [..._cache[18] || (_cache[18] = [
                            createTextVNode(" Back ", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(IonButton), {
                          fill: "outline",
                          onClick: _cache[4] || (_cache[4] = withModifiers(($event) => handleNext("pc"), ["stop"]))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getSectionIndex("pc") < visibleSections.value.length - 1 ? "Next" : "Finish"), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                shouldShowSection("pbs") ? (openBlock(), createBlock(unref(IonAccordion), {
                  key: 2,
                  value: "pbs",
                  class: "_card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[19] || (_cache[19] = [
                            createTextVNode("Pregnancy and breastfeeding status", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_6$1, [
                      createVNode(_sfc_main$8, {
                        "is-active": activeAccordion.value === "pbs",
                        ref_key: "pregnancyBreastfeedingFormRef",
                        ref: pregnancyBreastfeedingFormRef,
                        onDataSaved: refreshComponent
                      }, null, 8, ["is-active"]),
                      createBaseVNode("div", _hoisted_7$1, [
                        getSectionIndex("pbs") > 0 ? (openBlock(), createBlock(unref(IonButton), {
                          key: 0,
                          fill: "outline",
                          onClick: _cache[5] || (_cache[5] = withModifiers(($event) => openPreviousSection("pbs"), ["stop"]))
                        }, {
                          default: withCtx(() => [..._cache[20] || (_cache[20] = [
                            createTextVNode(" Back ", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(IonButton), {
                          fill: "outline",
                          onClick: _cache[6] || (_cache[6] = withModifiers(($event) => handleNext("pbs"), ["stop"]))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getSectionIndex("pbs") < visibleSections.value.length - 1 ? "Next" : "Finish"), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                shouldShowSection("pmh") ? (openBlock(), createBlock(unref(IonAccordion), {
                  key: 3,
                  value: "pmh",
                  class: "_card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[21] || (_cache[21] = [
                            createTextVNode("Past medical history", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_8$1, [
                      createVNode(_sfc_main$4, {
                        "is-active": activeAccordion.value === "pmh",
                        ref_key: "pastMedicalHistoryFormRef",
                        ref: pastMedicalHistoryFormRef,
                        onDataSaved: refreshComponent
                      }, null, 8, ["is-active"]),
                      createBaseVNode("div", _hoisted_9$1, [
                        getSectionIndex("pmh") > 0 ? (openBlock(), createBlock(unref(IonButton), {
                          key: 0,
                          fill: "outline",
                          onClick: _cache[7] || (_cache[7] = withModifiers(($event) => openPreviousSection("pmh"), ["stop"]))
                        }, {
                          default: withCtx(() => [..._cache[22] || (_cache[22] = [
                            createTextVNode(" Back ", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(IonButton), {
                          fill: "outline",
                          onClick: _cache[8] || (_cache[8] = withModifiers(($event) => handleNext("pmh"), ["stop"]))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getSectionIndex("pmh") < visibleSections.value.length - 1 ? "Next" : "Finish"), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                shouldShowSection("al") ? (openBlock(), createBlock(unref(IonAccordion), {
                  key: 4,
                  value: "al",
                  class: "_card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[23] || (_cache[23] = [
                            createTextVNode("Allergies", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_10$1, [
                      createVNode(Allergies, {
                        "is-active": activeAccordion.value === "al",
                        ref_key: "allergiesFormRef",
                        ref: allergiesFormRef,
                        onDataSaved: refreshComponent
                      }, null, 8, ["is-active"]),
                      createBaseVNode("div", _hoisted_11$1, [
                        getSectionIndex("al") > 0 ? (openBlock(), createBlock(unref(IonButton), {
                          key: 0,
                          fill: "outline",
                          onClick: _cache[9] || (_cache[9] = withModifiers(($event) => openPreviousSection("al"), ["stop"]))
                        }, {
                          default: withCtx(() => [..._cache[24] || (_cache[24] = [
                            createTextVNode(" Back ", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(IonButton), {
                          fill: "outline",
                          onClick: _cache[10] || (_cache[10] = withModifiers(($event) => handleNext("al"), ["stop"]))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getSectionIndex("al") < visibleSections.value.length - 1 ? "Next" : "Finish"), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                shouldShowSection("pe") ? (openBlock(), createBlock(unref(IonAccordion), {
                  key: 5,
                  value: "pe",
                  class: "_card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[25] || (_cache[25] = [
                            createTextVNode("Physical examination", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_12$1, [
                      createVNode(_sfc_main$9, {
                        "is-active": activeAccordion.value === "pe",
                        ref_key: "physicalExaminationFormRef",
                        ref: physicalExaminationFormRef,
                        onDataSaved: refreshComponent
                      }, null, 8, ["is-active"]),
                      createBaseVNode("div", _hoisted_13$1, [
                        getSectionIndex("pe") > 0 ? (openBlock(), createBlock(unref(IonButton), {
                          key: 0,
                          fill: "outline",
                          onClick: _cache[11] || (_cache[11] = withModifiers(($event) => openPreviousSection("pe"), ["stop"]))
                        }, {
                          default: withCtx(() => [..._cache[26] || (_cache[26] = [
                            createTextVNode(" Back ", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(IonButton), {
                          fill: "outline",
                          onClick: _cache[12] || (_cache[12] = withModifiers(($event) => handleNext("pe"), ["stop"]))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getSectionIndex("pe") < visibleSections.value.length - 1 ? "Next" : "Finish"), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});

const ClinicalAssessment = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f7298259"]]);

const _hoisted_1$2 = { class: "allergies-section" };
const _hoisted_2$2 = { class: "allergies-container" };
const _hoisted_3$1 = { class: "medication-section" };
const _hoisted_4 = { class: "medication-content" };
const _hoisted_5 = {
  key: 0,
  class: "add-medication-form"
};
const _hoisted_6 = { class: "form-group" };
const _hoisted_7 = { class: "option-label" };
const _hoisted_8 = {
  key: 0,
  class: "error-message"
};
const _hoisted_9 = { class: "form-row" };
const _hoisted_10 = { class: "form-group" };
const _hoisted_11 = {
  key: 0,
  class: "error-message"
};
const _hoisted_12 = { class: "form-group" };
const _hoisted_13 = {
  key: 0,
  class: "error-message"
};
const _hoisted_14 = { class: "form-group" };
const _hoisted_15 = {
  key: 0,
  class: "error-message"
};
const _hoisted_16 = { class: "action-buttons" };
const _hoisted_17 = { class: "notes-section" };
const _hoisted_18 = { class: "notes-content" };
const _hoisted_19 = { class: "notes-input-container" };
const _hoisted_20 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_21 = { class: "notes-timeline" };
const _hoisted_22 = {
  key: 0,
  class: "note-entry"
};
const _hoisted_23 = { class: "note-date" };
const _hoisted_24 = { class: "note-content" };
const _hoisted_25 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_26 = { class: "note-date" };
const _hoisted_27 = { class: "note-content" };
const __default__$1 = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const iconsContent = icons;
    const drug_frequencies = DRUG_FREQUENCIES;
    const search_item = ref(false);
    const display_item = ref(false);
    const addItemButton = ref(true);
    const componentKey = ref(0);
    const doseErrMsg = ref("");
    const show_error_msg_for_dose = ref(false);
    const durationErrMsg = ref();
    const show_error_msg_for_duration = ref(false);
    const drugName = ref("");
    const dose = ref("");
    const duration = ref("");
    const prescription = ref("");
    const units = ref("");
    const drug_id = ref("");
    const btnName1 = "Add new medication";
    const store = useTreatmentPlanStore();
    const store2 = useAllegyStore();
    const selectedAllergiesList2 = computed(() => store2.selectedMedicalAllergiesList);
    const selectedMedicalDrugsList = computed(() => store.selectedMedicalDrugsList);
    const OPDDrugList = computed(() => store.partialOPDdrugList);
    const nonPharmalogicalTherapyAndOtherNotes = computed(() => store.nonPharmalogicalTherapyAndOtherNotes);
    const values = ["first", "second", "third"];
    const PreviuosSelectedMedicalDrugsList = ref();
    const FirstPreviousNotes = ref();
    const RestOfPreviousNotes = ref();
    const itemWasExpanded = ref(false);
    const itemNotesWasExpanded = ref(false);
    const showMoreNotesMsg = ref("Show more notes");
    const FirstPreviousAllegies = ref();
    const RestOfPreviousAllegies = ref();
    const currentDrugOb = ref();
    const editingDrugItem = computed(() => store.editingDrugItem);
    const pres_methodErrMsg = ref("Select a route");
    const show_error_msg_for_pres_method = ref(false);
    const frequencyErrMsg = ref("Select frequency");
    const show_error_msg_for_frequency = ref(false);
    const drugErrMsg = ref("Select drug");
    const show_error_msg_for_drug = ref(false);
    const selected_pres_method = ref();
    const selected_frequency = ref();
    const selected_drug = ref();
    const route_list_cache = ref([]);
    const handCodedRouteList = ref([
      { concept_id: 11797, name: "Buccal", concept_name_id: null, id: 1769 },
      { concept_id: 11794, name: "Intradermal", concept_name_id: null, id: 6284 },
      { concept_id: 11795, name: "Intramuscular (IM)", concept_name_id: null, id: 6285 },
      { concept_id: 11799, name: "Intraosseous", concept_name_id: null, id: 6286 },
      { concept_id: 11793, name: "Intravenous (IV)", concept_name_id: null, id: 6295 },
      { concept_id: 3327, name: "Oral", concept_name_id: null, id: 8686 },
      { concept_id: 11800, name: "Other method of prescription", concept_name_id: null, id: 8920 },
      { concept_id: 11792, name: "Rectally", concept_name_id: null, id: 10785 },
      { concept_id: 11798, name: "Subcutaneous", concept_name_id: null, id: 12342 },
      { concept_id: 11796, name: "Sublingual", concept_name_id: null, id: 12344 },
      { concept_id: 11792, name: "Rectally", concept_name_id: null, id: 14078 },
      { concept_id: 11793, name: "Intravenous (IV)", concept_name_id: null, id: 14079 },
      { concept_id: 11794, name: "Intradermal", concept_name_id: null, id: 14080 },
      { concept_id: 11795, name: "Intramuscular (IM)", concept_name_id: null, id: 14081 },
      { concept_id: 11796, name: "Sublingual", concept_name_id: null, id: 14082 },
      { concept_id: 11797, name: "Buccal", concept_name_id: null, id: 14083 },
      { concept_id: 11798, name: "Subcutaneous", concept_name_id: null, id: 14084 },
      { concept_id: 11799, name: "Intraosseous", concept_name_id: null, id: 14085 },
      { concept_id: 11800, name: "Other method of prescription", concept_name_id: null, id: 14086 }
    ]);
    const route_list = computed(() => {
      return route_list_cache.value.length ? route_list_cache.value : handCodedRouteList.value;
    });
    function routeListUpdated(data) {
      selected_pres_method.value = data;
    }
    async function getDrugRouteListLFN() {
      const routes = await getDrugRouteList();
      return routes;
    }
    async function fetchRouteListWithRetry(maxRetries = 5, delay = 1e3) {
      let retries = 0;
      while (retries < maxRetries) {
        route_list_cache.value = await getDrugRouteListLFN();
        if (route_list_cache.value.length > 0) {
          break;
        }
        retries++;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      if (route_list_cache.value.length === 0) {
        console.warn("Failed to fetch route list after maximum retries.");
      }
    }
    onMounted(async () => {
      const previousTreatment = new PreviousTreatment();
      const { previousDrugPrescriptions, previousClinicalNotes, previousDrugAllergies } = await previousTreatment.getPatientEncounters();
      PreviuosSelectedMedicalDrugsList.value = previousDrugPrescriptions;
      FirstPreviousNotes.value = Object.entries(previousClinicalNotes)[0];
      const [, ...restEntries] = Object.entries(previousClinicalNotes);
      RestOfPreviousNotes.value = restEntries;
      FirstPreviousAllegies.value = Object.entries(previousDrugAllergies)[0];
      const [, ...restEntriesAllegies] = Object.entries(previousDrugAllergies);
      RestOfPreviousAllegies.value = restEntriesAllegies;
      await fetchRouteListWithRetry();
    });
    watch(
      () => dose.value,
      async (newValue) => {
        validateDose();
      }
    );
    watch(
      () => duration.value,
      async (newValue) => {
        validateDuration();
      }
    );
    function validateRoute() {
      if (lodashExports.isEmpty(selected_pres_method.value) == true) {
        show_error_msg_for_pres_method.value = true;
        return false;
      }
      if (lodashExports.isEmpty(selected_pres_method.value) == false) {
        show_error_msg_for_pres_method.value = false;
        return true;
      }
    }
    function validateFrequency() {
      if (lodashExports.isEmpty(selected_frequency.value) == true) {
        show_error_msg_for_frequency.value = true;
        return false;
      }
      if (lodashExports.isEmpty(selected_frequency.value) == false) {
        show_error_msg_for_frequency.value = false;
        return true;
      }
    }
    function validateDrug() {
      if (lodashExports.isEmpty(selected_drug.value) == true) {
        show_error_msg_for_drug.value = true;
        return false;
      }
      if (lodashExports.isEmpty(selected_drug.value) == false) {
        show_error_msg_for_drug.value = false;
        return true;
      }
    }
    function addData() {
      addItemButton.value = !addItemButton.value;
      search_item.value = true;
      show_error_msg_for_dose.value = false;
      show_error_msg_for_duration.value = false;
    }
    async function validateDose() {
      const isNum = isNumeric(dose.value);
      if (!isNum) {
        doseErrMsg.value = "please enter a number";
        show_error_msg_for_dose.value = true;
      } else {
        show_error_msg_for_dose.value = false;
      }
      return show_error_msg_for_dose.value;
    }
    async function validateDuration() {
      const isNum = isNumeric(duration.value);
      if (!isNum) {
        durationErrMsg.value = "please enter a number";
        show_error_msg_for_duration.value = true;
      } else {
        show_error_msg_for_duration.value = false;
      }
      return show_error_msg_for_duration.value;
    }
    async function areFieldsValid() {
      const isDurationValid = await validateDuration();
      const isFrequencyValid = validateFrequency();
      const isDrugValid = validateDrug();
      const isRouteValid = validateRoute();
      if (!isDurationValid && isFrequencyValid == true && isDrugValid == true && isRouteValid == true) {
        return true;
      } else {
        return false;
      }
    }
    function frequencyDropDownUpdated(event) {
      selected_frequency.value = event;
    }
    async function saveData() {
      try {
        const getDose = () => {
          if (currentDrugOb.value.dose_strength != null && currentDrugOb.value.dose_strength) {
            return Math.trunc(currentDrugOb.value.dose_strength);
          } else {
            return 1;
          }
        };
        if (editingDrugItem.value !== null) {
          const are_fieldsValid = await areFieldsValid();
          if (!are_fieldsValid) {
            toastWarning("Please enter correct data values", 4e3);
            return;
          }
          const systemSessionDate = Service.getSessionDate();
          const generatedPrescriptionDate = addDaysToDate(systemSessionDate, parseInt(duration.value));
          let highlightbackground = false;
          if (isPresentInAllergyList(currentDrugOb.value) == true) {
            highlightbackground = true;
          }
          const updatedDrugObj = {
            drugName: drugName.value,
            dose: getDose(),
            frequency: selected_frequency.value.label,
            frequency_code: selected_frequency.value.code,
            duration: duration.value,
            prescription: generatedPrescriptionDate,
            drug_id: drug_id.value,
            units: units.value,
            route_concept_id: selected_pres_method.value.concept_id,
            route_name: selected_pres_method.value.name,
            highlightbackground
          };
          const treatmentPlanStore = useTreatmentPlanStore();
          console.log(treatmentPlanStore.setSelectedMedicalDrugsList([updatedDrugObj]));
          treatmentPlanStore.editingDrugItem = null;
          addItemButton.value = true;
        } else {
          const are_fieldsValid = await areFieldsValid();
          if (!are_fieldsValid) {
            toastWarning("Please enter correct data values", 4e3);
            return;
          }
          dissmissDrugAddField();
          const systemSessionDate = Service.getSessionDate();
          const generatedPrescriptionDate = addDaysToDate(systemSessionDate, parseInt(duration.value));
          let highlightbackground = false;
          if (isPresentInAllergyList(currentDrugOb.value) == true) {
            highlightbackground = true;
          }
          const drugString = {
            drugName: drugName.value,
            dose: getDose(),
            frequency: selected_frequency.value.label,
            frequency_code: selected_frequency.value.code,
            duration: duration.value,
            prescription: generatedPrescriptionDate,
            drug_id: drug_id.value,
            units: units.value,
            route_concept_id: selected_pres_method.value.concept_id,
            route_name: selected_pres_method.value.name,
            highlightbackground
          };
          const treatmentPlanStore = useTreatmentPlanStore();
          treatmentPlanStore.setSelectedMedicalDrugsList([drugString]);
        }
        drug_id.value = "";
        drugName.value = "";
        dose.value = "";
        selected_frequency.value = null;
        duration.value = "";
        prescription.value = "";
        componentKey.value++;
        selected_drug.value = null;
        selected_pres_method.value = null;
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
    async function FindDrugName(text) {
      const searchText = text;
      const page = 1, limit = 10;
      const drugs = await DrugService.getOfflineOPDDrugs({
        name: searchText,
        page,
        page_size: limit
      });
      drugs.map((drug) => ({
        label: drug.name,
        value: drug.name,
        other: drug
      }));
      store.setPartialOPDdrugList(drugs);
    }
    function isPresentInAllergyList(obj) {
      const filter_id_array = [];
      selectedAllergiesList2.value.forEach((selectedMedicalAllergy) => {
        if (selectedMedicalAllergy.selected) {
          filter_id_array.push(selectedMedicalAllergy.concept_id);
        }
      });
      const filteredDrugs = hasMatchingIDs([obj], filter_id_array);
      if (filteredDrugs == true) {
        toastWarning("Client is allergic to the selected medication", 4e6);
        return true;
      } else {
        return false;
      }
    }
    function hasMatchingIDs(mainArray, idsToFilter) {
      try {
        return mainArray.some((item) => idsToFilter.includes(item.concept_id));
      } catch (error) {
        return false;
      }
    }
    function selectedDrugName(data) {
      if (data) {
        drugName.value = data.name;
        drug_id.value = data.drug_id;
        units.value = data.units;
        currentDrugOb.value = data;
        isPresentInAllergyList(data);
      }
    }
    function editItemAtIndex(index) {
      const originalItem = selectedMedicalDrugsList.value[index];
      const treatmentPlanStore = useTreatmentPlanStore();
      treatmentPlanStore.removeDrugById(originalItem.drug_id);
      treatmentPlanStore.editingDrugItem = originalItem;
      drug_id.value = "";
      drugName.value = "";
      dose.value = "";
      selected_frequency.value = null;
      duration.value = "";
      prescription.value = "";
      selected_drug.value = null;
      selected_pres_method.value = null;
      drug_id.value = originalItem.drug_id;
      drugName.value = originalItem.drugName;
      dose.value = originalItem.dose;
      selected_frequency.value = {
        label: originalItem.frequency,
        code: originalItem.frequency_code
      };
      duration.value = originalItem.duration;
      prescription.value = originalItem.prescription;
      const fullDrugObject = OPDDrugList.value.find((drug) => drug.name === originalItem.drugName);
      if (fullDrugObject) {
        selected_drug.value = fullDrugObject;
      }
      selected_pres_method.value = {
        concept_id: originalItem.route_concept_id,
        name: originalItem.route_name
      };
      addItemButton.value = false;
      componentKey.value++;
    }
    function cancelEdit() {
      if (editingDrugItem.value !== null) {
        drug_id.value = "";
        drugName.value = "";
        dose.value = "";
        selected_frequency.value = null;
        duration.value = "";
        prescription.value = "";
        selected_drug.value = null;
        selected_pres_method.value = null;
        const treatmentPlanStore = useTreatmentPlanStore();
        treatmentPlanStore.setSelectedMedicalDrugsList([editingDrugItem.value]);
        treatmentPlanStore.editingDrugItem = null;
      }
      addItemButton.value = true;
      componentKey.value++;
    }
    function removeItemAtIndex(index) {
      selectedMedicalDrugsList.value.splice(index, 1);
      componentKey.value++;
      toastWarning("you have removed a drug from list", 6e3);
    }
    function validateNotes(ev) {
      let value = ev.target.value;
      refSetNonPharmalogicalTherapyAndOtherNotes(value);
    }
    function refSetNonPharmalogicalTherapyAndOtherNotes(value) {
      const treatmentPlanStore = useTreatmentPlanStore();
      treatmentPlanStore.setNonPharmalogicalTherapyAndOtherNotes(value);
    }
    function isNumeric(text) {
      return /^[0-9]+$/.test(text);
    }
    function addDaysToDate(dateString, daysToAdd) {
      const currentDate = new Date(dateString);
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    function dissmissDrugAddField() {
      search_item.value = false;
      display_item.value = true;
      addItemButton.value = true;
    }
    function accordionGroupChangeForNotes(ev) {
      values.filter((value) => value !== ev.detail.value);
      const selectedValue = ev.detail.value;
      if (selectedValue !== void 0) {
        if (selectedValue == "third") {
          showMoreNotesMsg.value = "Show less notes";
          itemNotesWasExpanded.value = !itemWasExpanded.value;
        }
      } else {
        showMoreNotesMsg.value = "Show more notes";
        itemNotesWasExpanded.value = !itemWasExpanded.value;
      }
    }
    function removeOuterArray(arr) {
      return arr[1];
    }
    function handleDurationKeydown(event) {
      if (event.key === "Enter" || event.key === "ArrowDown") {
        event.preventDefault();
        saveData();
      }
    }
    const dynamic_button_properties = computed(() => [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: editingDrugItem.value !== null ? "Update" : "ADD",
        fn: saveData
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "CANCEL",
        fn: openCornfirmModal
      }
    ]);
    const openCornfirmModal = async () => {
      const handleCancel = (event) => {
      };
      const handleConfirm = async (event) => {
        if (event.detail == true) {
          cancelEdit();
        }
      };
      const dataToPass = { message: "Are you sure you want to cancel?" };
      createModal(confirmModal, { class: "otherVitalsModal" }, true, dataToPass, { cancel: handleCancel, confirm: handleConfirm });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonList), null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              createVNode(AllergiesListing)
            ])
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(unref(IonItem), {
              lines: "none",
              class: "section-header"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonIcon), {
                  icon: unref(medicalOutline),
                  class: "section-icon"
                }, null, 8, ["icon"]),
                createVNode(unref(IonLabel), {
                  class: "section-title",
                  style: { "margin-top": "12px" }
                }, {
                  default: withCtx(() => [..._cache[9] || (_cache[9] = [
                    createTextVNode("Medication", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_4, [
              (openBlock(), createBlock(DynamicList, {
                _selectedMedicalDrugsList: selectedMedicalDrugsList.value,
                onEditItem: editItemAtIndex,
                onRemoveItem: removeItemAtIndex,
                key: componentKey.value,
                class: "medication-list"
              }, null, 8, ["_selectedMedicalDrugsList"])),
              !addItemButton.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  _cache[10] || (_cache[10] = createBaseVNode("label", { class: "input-label" }, "Medication", -1)),
                  createVNode(unref(script), {
                    modelValue: selected_drug.value,
                    "onUpdate:modelValue": [
                      _cache[0] || (_cache[0] = ($event) => selected_drug.value = $event),
                      _cache[1] || (_cache[1] = ($event) => selectedDrugName($event))
                    ],
                    options: OPDDrugList.value,
                    searchable: true,
                    "close-on-select": true,
                    "show-labels": false,
                    placeholder: "Select medication",
                    label: "name",
                    "track-by": "drug_id",
                    onSearchChange: _cache[2] || (_cache[2] = ($event) => FindDrugName($event))
                  }, {
                    option: withCtx((props) => [
                      createBaseVNode("div", _hoisted_7, toDisplayString(props.option.name), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "options"]),
                  show_error_msg_for_drug.value ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(drugErrMsg.value), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    _cache[11] || (_cache[11] = createBaseVNode("label", { class: "input-label" }, "Route", -1)),
                    createVNode(unref(script), {
                      modelValue: selected_pres_method.value,
                      "onUpdate:modelValue": [
                        _cache[3] || (_cache[3] = ($event) => selected_pres_method.value = $event),
                        _cache[4] || (_cache[4] = ($event) => routeListUpdated($event))
                      ],
                      options: route_list.value,
                      searchable: true,
                      "close-on-select": true,
                      "show-labels": false,
                      placeholder: "Select route",
                      label: "name",
                      "track-by": "concept_id",
                      disabled: false
                    }, null, 8, ["modelValue", "options"]),
                    show_error_msg_for_pres_method.value ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(pres_methodErrMsg.value), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    _cache[12] || (_cache[12] = createBaseVNode("label", { class: "input-label" }, "Frequency", -1)),
                    createVNode(unref(script), {
                      modelValue: selected_frequency.value,
                      "onUpdate:modelValue": [
                        _cache[5] || (_cache[5] = ($event) => selected_frequency.value = $event),
                        _cache[6] || (_cache[6] = ($event) => frequencyDropDownUpdated($event))
                      ],
                      options: unref(drug_frequencies),
                      searchable: true,
                      "close-on-select": true,
                      "show-labels": false,
                      placeholder: "Select frequency",
                      label: "label",
                      "track-by": "code"
                    }, null, 8, ["modelValue", "options"]),
                    show_error_msg_for_frequency.value ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(frequencyErrMsg.value), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    _cache[13] || (_cache[13] = createBaseVNode("label", { class: "input-label" }, "Duration (days)", -1)),
                    createVNode(unref(IonInput), {
                      modelValue: duration.value,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => duration.value = $event),
                      type: "number",
                      inputmode: "numeric",
                      pattern: "[0-9]*",
                      fill: "outline",
                      placeholder: "Enter duration",
                      onKeydown: handleDurationKeydown
                    }, null, 8, ["modelValue"]),
                    show_error_msg_for_duration.value ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(durationErrMsg.value), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_16, [
                  dynamic_button_properties.value[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties.value[0].name,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties.value[0].fn,
                    class: "save-button"
                  }, null, 8, ["name", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties.value[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties.value[1].name,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties.value[1].fn,
                    class: "cancel-button"
                  }, null, 8, ["name", "icon", "onClicked:btn"])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              addItemButton.value ? (openBlock(), createBlock(DynamicButton, {
                key: 1,
                name: btnName1,
                icon: unref(addOutline),
                fontWeight: "600",
                "onClicked:btn": addData,
                class: "add-new-button"
              }, null, 8, ["icon"])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_17, [
            createVNode(unref(IonItem), {
              lines: "none",
              class: "section-header"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonIcon), {
                  icon: unref(clipboardOutline),
                  class: "section-icon"
                }, null, 8, ["icon"]),
                createVNode(unref(IonLabel), { class: "section-title" }, {
                  default: withCtx(() => [..._cache[14] || (_cache[14] = [
                    createTextVNode("Non-pharmacological therapy and other notes", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_18, [
              createVNode(NonPharmacologicalIntervention, { class: "intervention-component" }),
              createBaseVNode("div", _hoisted_19, [
                createVNode(unref(IonItem), { class: "notes-input-item" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      slot: "start",
                      icon: unref(iconsContent).editPen,
                      class: "edit-icon",
                      "aria-hidden": "true"
                    }, null, 8, ["icon"]),
                    createVNode(unref(IonTextarea), {
                      modelValue: nonPharmalogicalTherapyAndOtherNotes.value,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => nonPharmalogicalTherapyAndOtherNotes.value = $event),
                      onIonInput: validateNotes,
                      placeholder: "Enter notes here...",
                      "auto-grow": true,
                      class: "notes-textarea",
                      fill: "outline",
                      style: { "--padding-start": "16px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createVNode(unref(IonAccordionGroup), {
                ref: "accordionGroup",
                class: "previous-notes"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonAccordion), {
                    value: "fourth",
                    "toggle-icon-slot": "start"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light",
                        class: "previous-notes-header"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[15] || (_cache[15] = [
                              createTextVNode("Previous visit notes", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", _hoisted_21, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(FirstPreviousNotes.value, (item, index) => {
                            return openBlock(), createElementBlock(Fragment, { key: index }, [
                              index === 1 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(item, (note, noteIndex) => {
                                  return openBlock(), createElementBlock("div", { key: noteIndex }, [
                                    createBaseVNode("div", _hoisted_23, toDisplayString(note.date), 1),
                                    createBaseVNode("div", _hoisted_24, toDisplayString(note.notes), 1)
                                  ]);
                                }), 128))
                              ])) : createCommentVNode("", true)
                            ], 64);
                          }), 128)),
                          createVNode(unref(IonAccordionGroup), { onIonChange: accordionGroupChangeForNotes }, {
                            default: withCtx(() => [
                              createVNode(unref(IonAccordion), {
                                value: "third",
                                "toggle-icon-slot": "start"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonItem), {
                                    slot: "header",
                                    color: "light",
                                    class: "show-more-header"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonLabel), { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(showMoreNotesMsg.value), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createBaseVNode("div", _hoisted_25, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(RestOfPreviousNotes.value, (item, index) => {
                                      return openBlock(), createElementBlock("div", {
                                        key: index,
                                        class: "note-entry"
                                      }, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(removeOuterArray(item), (note, noteIndex) => {
                                          return openBlock(), createElementBlock("div", { key: noteIndex }, [
                                            createBaseVNode("div", _hoisted_26, toDisplayString(note.date), 1),
                                            createBaseVNode("div", _hoisted_27, toDisplayString(note.notes), 1)
                                          ]);
                                        }), 128))
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

const OPDTreatmentPlan = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-14c793af"]]);

const _hoisted_1$1 = { class: "dash_box" };
const _hoisted_2$1 = { key: 1 };
const __default__ = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const initialMsg = ref("No outcome created yet");
    const show_error_msg_for_ref_type = ref(false);
    const refTypErrMsg = ref("please select a type");
    const showAddItemButton = ref(true);
    const refType = ref("");
    const showEmptyMsg = ref(true);
    const showAddReferralInfo = ref(false);
    const store = useOutcomeStore();
    const outcomes = computed(() => store.outcomes);
    const EditEvnt = ref(false);
    const show_dead_options = ref(false);
    const show_admitted_options = ref(false);
    const show_referred_options = ref(false);
    const show_discharged_options = ref(false);
    const show_refer_to_another_clinic = ref(false);
    const selected_referral_type_data = ref(null);
    const selected_referral_data = ref(null);
    const selected_ward_data = ref(null);
    const admitted_other_data = ref(null);
    const selected_discharged_type_data = ref(null);
    const selected_discharged_data = ref(null);
    const referralType = ref([
      {
        name: "Admitted for short stay",
        selected: false
      },
      {
        name: "Referred out",
        selected: false
      },
      {
        name: "Discharged Home",
        selected: false
      },
      {
        name: "Send to Another Clinic",
        selected: false
      },
      {
        name: "Death",
        selected: false
      }
    ]);
    const list_picker_prperties = [
      {
        multi_Selection: false,
        show_list_label: true,
        unqueId: "qwerty2",
        name_of_list: "Add new outcome",
        placeHolder: "Choose one",
        items: referralType.value,
        listUpdatedFN: listUpdated1,
        listFilteredFN: () => {
        },
        use_internal_filter: true,
        disabled: ref(false)
      }
    ];
    function listUpdated1(data) {
      referralType.value = data;
      referralType.value.forEach((item) => {
        if (item.selected == true) {
          refType.value = item.name;
        }
      });
    }
    onMounted(async () => {
      checkForOutcomes();
    });
    watch(
      () => refType.value,
      async (newvalue) => {
        if (EditEvnt.value == true) {
          EditEvnt.value = false;
        } else {
          checkRefType();
        }
      }
    );
    watch(
      () => outcomes.value.length,
      async (newvalue) => {
        checkForOutcomes();
      }
    );
    function resetSelection() {
      referralType.value.forEach((item) => {
        item.selected = false;
      });
      refType.value = "";
    }
    function checkForOutcomes() {
      if (outcomes.value.length > 0) {
        showEmptyMsg.value = false;
      } else if (outcomes.value.length == 0 && showAddReferralInfo.value == false) {
        showEmptyMsg.value = true;
      }
    }
    function removeItem(index) {
      outcomes.value.splice(index, 1);
    }
    function listUpdated(data) {
      referralType.value.forEach((item) => {
        if (data.selected == true && (data.name == item.name || data.type == item.name)) {
          refType.value = item.name;
        }
      });
    }
    const editItem = (data) => {
      removeItem(data.index);
      listUpdated(data.item);
      selected_referral_type_data.value = data.item.other.location_data;
      selected_referral_data.value = {
        reason: data.item.reason,
        date: data.item.date,
        time: data.item.time
      };
      selected_ward_data.value = data.item.other;
      admitted_other_data.value = data.item;
      if (data.item.type === "Discharged Home") {
        selected_discharged_type_data.value = data.item;
        selected_discharged_data.value = {
          reason: data.item.reason,
          date: data.item.date
        };
      }
    };
    async function checkRefType(clear_inputs = true) {
      const tempRefType = refType.value;
      console.log(tempRefType);
      refType.value = tempRefType;
      const ref_type = refType.value;
      if (ref_type == referralType.value[0].name) {
        show_admitted_options.value = true;
      } else {
        show_admitted_options.value = false;
      }
      if (ref_type == referralType.value[1].name) {
        show_referred_options.value = true;
        console.log("show_discharged_options is set to true");
      } else {
        show_referred_options.value = false;
      }
      if (ref_type == referralType.value[2].name) {
        show_discharged_options.value = true;
        console.log("show_discharged_options is set to true");
      } else {
        show_discharged_options.value = false;
      }
      if (ref_type == referralType.value[3].name) {
        show_refer_to_another_clinic.value = true;
      } else {
        show_refer_to_another_clinic.value = false;
      }
      if (ref_type == referralType.value[4].name) {
        show_dead_options.value = true;
      } else {
        show_dead_options.value = false;
      }
    }
    function dataSavedTrigFn() {
      show_dead_options.value = false;
      show_admitted_options.value = false;
      show_referred_options.value = false;
      show_discharged_options.value = false;
      resetSelection();
    }
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createBlock(unref(IonList), null, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(unref(IonCol), null, {
                default: withCtx(() => [
                  true ? (openBlock(), createBlock(DynamicDispositionList, {
                    key: 0,
                    "onUpdate:removeItem": removeItem,
                    "onUpdate:editItem": editItem,
                    displayData: outcomes.value
                  }, null, 8, ["displayData"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          showEmptyMsg.value ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_1$1, toDisplayString(initialMsg.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          showAddItemButton.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(unref(IonCol), null, {
                  default: withCtx(() => [
                    createVNode(ListPicker, {
                      multiSelection: list_picker_prperties[0].multi_Selection,
                      show_label: list_picker_prperties[0].show_list_label,
                      uniqueId: list_picker_prperties[0].unqueId,
                      name_of_list: list_picker_prperties[0].name_of_list,
                      choose_place_holder: list_picker_prperties[0].placeHolder,
                      "items_-list": list_picker_prperties[0].items,
                      use_internal_filter: list_picker_prperties[0].use_internal_filter,
                      disabled: list_picker_prperties[0].disabled.value,
                      onItemListUpDated: list_picker_prperties[0].listUpdatedFN,
                      onItemListFiltered: list_picker_prperties[0].listFilteredFN
                    }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered"]),
                    createBaseVNode("div", null, [
                      show_error_msg_for_ref_type.value ? (openBlock(), createBlock(unref(IonLabel), {
                        key: 0,
                        class: "error-label"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(refTypErrMsg.value), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          show_admitted_options.value ? (openBlock(), createBlock(AdmittedforShortStayOutcomef, {
            key: 2,
            onDataSaved: dataSavedTrigFn,
            selected_ward_prop: selected_ward_data.value,
            admitted_other_props: admitted_other_data.value
          }, null, 8, ["selected_ward_prop", "admitted_other_props"])) : createCommentVNode("", true),
          show_referred_options.value ? (openBlock(), createBlock(ReferredOutCome, {
            key: 3,
            onDataSaved: dataSavedTrigFn,
            selected_referral_data: selected_referral_type_data.value,
            selected_other_referral_data: selected_referral_data.value
          }, null, 8, ["selected_referral_data", "selected_other_referral_data"])) : createCommentVNode("", true),
          show_discharged_options.value ? (openBlock(), createBlock(DischargedHome, {
            key: 4,
            onDataSaved: dataSavedTrigFn,
            selected_discharged_prop: selected_discharged_type_data.value,
            selected_discharged_data: selected_discharged_data.value
          }, null, 8, ["selected_discharged_prop", "selected_discharged_data"])) : createCommentVNode("", true),
          show_dead_options.value ? (openBlock(), createBlock(deadOutcome, {
            key: 5,
            onDataSaved: dataSavedTrigFn
          })) : createCommentVNode("", true),
          show_refer_to_another_clinic.value ? (openBlock(), createBlock(ReferToAnotherClinic, {
            key: 6,
            onDataSaved: dataSavedTrigFn
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});

const OPDOutcome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-624d1093"]]);

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_3 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsultationPlan",
  setup(__props) {
    const { currentTabIndex } = useFormWizard();
    const { printVisitSummary } = usePatientProfile();
    const { hasWaitingList} = useUserActivities();
    const router = useRouter();
    const route = useRoute();
    const isLoading = ref(false);
    const navigable = ref(true);
    const nextButtonDisabled = ref(false);
    const isLoadingPrinter = ref(false);
    const showWizard = ref(true);
    const printModalOpen = ref(false);
    const showAlert = ref(false);
    const hasPatientsWaitingForLab = ref(false);
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useOPDDiagnosisStore();
    const treatmentPlanStore = useTreatmentPlanStore();
    const generalStore = useGeneralStore();
    const outcomeStore = useOutcomeStore();
    const vitalsStore = useVitalsStore();
    const nextAppointmentStore = useNextAppointmentStore();
    const presentingComplaintsStore = usePresentingComplaintsStore();
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const { patient } = storeToRefs(demographicsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { OPDdiagnosis } = storeToRefs(diagnosisStore);
    const { selectedMedicalDrugsList } = storeToRefs(treatmentPlanStore);
    const { OPDActivities } = storeToRefs(generalStore);
    const { outcomes } = storeToRefs(outcomeStore);
    const { currentSelectedNextAppointmentDate } = storeToRefs(nextAppointmentStore);
    const { presentingComplaints } = storeToRefs(presentingComplaintsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const clinicalAssessmentRef = ref(null);
    const investigationsRef = ref(null);
    const diagnosisRef = ref(null);
    const treatmentPlanRef = ref(null);
    const nextAppointmentRef = ref(null);
    const outcomeRef = ref(null);
    const wizard = ref(null);
    const tabs = ref();
    const getActiveTabs = () => {
      return OPDActivities.value.map((item) => {
        return { title: item, icon: "" };
      });
    };
    const onChangeCurrentTab = async (index, oldIndex, runChangeTab) => {
      if (oldIndex === 0) await saveClinicalAssessment();
      if (!await isPresentingComplaintsDone()) {
        return;
      }
      await markWizard();
      if (index % 1 === 0) currentTabIndex.value = index;
      if (wizard.value && runChangeTab) {
        wizard.value.changeTab(index);
      }
      const currentTab = tabs.value[index]?.title;
      if (currentTab === "Investigations" && investigationsRef.value) {
        await investigationsRef.value.openAHDModal();
      }
    };
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Clinical Assessment":
          return "ClinicalAssessment";
        case "Investigations":
          return "Investigations";
        case "Diagnosis":
          return "OPDDiagnosis";
        case "Treatment Plan":
          return "OPDTreatmentPlan";
        case "Next Appointment":
          return "NextAppointment";
        case "Outcome":
          return "Outcome";
        default:
          if (OPDActivities.value.length > 0) {
            const firstActivity = OPDActivities.value[0];
            switch (firstActivity) {
              case "Clinical Assessment":
                return "ClinicalAssessment";
              case "Investigations":
                return "Investigations";
              case "Diagnosis":
                return "OPDDiagnosis";
              case "Treatment Plan":
                return "OPDTreatmentPlan";
              case "Next Appointment":
                return "NextAppointment";
              case "Outcome":
                return "Outcome";
            }
          }
          return null;
      }
    };
    const openBackController = () => {
      router.push("/home");
    };
    const openProfileController = () => {
      if (isPatientDeceased()) {
        router.push("/death-patient-profile");
      } else {
        router.push("/patient-profile");
      }
    };
    const printYes = async () => {
      isLoadingPrinter.value = true;
      toastSuccess("Printing consultation summary... Please wait.");
      try {
        await printVisitSummary();
        toastSuccess("Consultation summary printed successfully!");
        setTimeout(() => {
          router.push("/home");
        }, 3500);
      } catch (error) {
        toastDanger("Failed to print consultation summary.");
      } finally {
        isLoadingPrinter.value = false;
      }
    };
    const printNo = () => {
      toastSuccess("Patient has finished consultation!");
      router.push("/home");
    };
    const isPresentingComplaintsDone = async () => {
      const latestObs = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PRESENTING_COMPLAINTS);
      if (latestObs && latestObs.length > 0) return true;
      else return false;
    };
    const markWizard = async () => {
      const sessionDate = HisDate.sessionDate();
      for (let i = 0; i < tabs.value.length; i++) {
        if (!await isPresentingComplaintsDone()) {
          navigable.value = false;
          if (tabs.value[i].title !== "Clinical Assessment") tabs.value[i].icon = lockClosedOutline;
        } else {
          navigable.value = true;
          nextButtonDisabled.value = false;
          const tab = tabs.value[i];
          if (tab.title === "Clinical Assessment") {
            const complaintsData = getOfflineSavedUnsavedData("presentingComplaints");
            tabs.value[i].icon = isDateInArray(sessionDate, complaintsData) ? checkmarkOutline : "";
          } else if (tab.title === "Investigations") {
            const labOrders = patient.value?.labOrders?.saved;
            const filteredArray = labOrders?.filter((obj) => {
              return HisDate.toStandardHisFormat(sessionDate) === HisDate.toStandardHisFormat(obj.order_date);
            });
            tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
          } else if (tab.title === "Diagnosis") {
            const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
            tabs.value[i].icon = isDateInArray(sessionDate, diagnosisData) ? checkmarkOutline : "";
          } else if (tab.title === "Treatment Plan") {
            const treatmentData = getOfflineSavedUnsavedData("treatment");
            tabs.value[i].icon = treatmentData?.length > 0 ? checkmarkOutline : "";
          } else if (tab.title === "Next Appointment") {
            const appointmentData = getOfflineSavedUnsavedData("appointments");
            tabs.value[i].icon = isDateInArray(sessionDate, appointmentData) ? checkmarkOutline : "";
          } else if (tab.title === "Outcome") {
            const outcomeData = getOfflineSavedUnsavedData("outcomes");
            tabs.value[i].icon = outcomeData?.length > 0 ? checkmarkOutline : "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, dataArray) => {
      if (!dataArray) return false;
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return dataArray.some((item) => {
        const obsDate = new Date(item.obs_datetime || item.order_date);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveClinicalAssessment = async () => {
      isLoading.value = true;
      try {
        await Promise.all([clinicalAssessmentRef.value?.onSubmit()]);
        await savePatientRecord(patient.value);
        resetOPDPatientData();
      } catch (error) {
        toastDanger("Failed to save clinical assessment");
        throw error;
      } finally {
        isLoading.value = false;
      }
    };
    const saveTreatmentPlan = async () => {
      try {
        const med = await createOPDDrugOrder();
        patient.value = { ...patient.value, ...med };
        await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      } catch {
        toastWarning("Failed to save treatment plan");
      }
    };
    const hasPrescribedMedications = () => {
      const medicationsList = selectedMedicalDrugsList.value;
      console.log("Checking prescribed medications:", {
        medicationsCount: medicationsList.length,
        medications: medicationsList
      });
      return medicationsList.length > 0;
    };
    const handleFinish = async () => {
      try {
        isSaving.value = true;
        await diagnosisRef.value?.onSubmit();
        await saveTreatmentPlan();
        await outcomeStore.saveOutcomPatientData();
        await savePatientRecord(patient.value);
        const locationId = localStorage.getItem("locationID");
        if (!locationId) {
          toastDanger("Location ID missing.");
          return;
        }
        if (isPatientDeceased()) {
          await closePatientVisit(locationId);
          toastSuccess("The patient has been deceased.");
          return;
        }
        const needsDispense = hasPrescribedMedications();
        if (hasWaitingList("Waiting for Laboratory")) {
          await proceedToConsultation(locationId);
          toastSuccess("Patient moved to Consultation for Lab follow-up.");
          return;
        }
        if (needsDispense && hasWaitingList("Waiting for Consultation")) {
          if (hasWaitingList("Waiting for Dispensation")) {
            await proceedToDispensation(locationId);
          } else {
            await proceedToDispensationWithoutAccess(locationId);
          }
          return;
        }
        if (!needsDispense && hasWaitingList("Waiting for Consultation")) {
          await closePatientVisit(locationId);
          return;
        }
      } catch (e) {
        toastDanger("Failed to save consultation.");
      } finally {
        isSaving.value = false;
      }
    };
    const proceedToDispensation = async (locationId) => {
      try {
        await StagesService.addPatientToStage(patient.value, "DISPENSATION");
        await usePatientList().refresh(locationId);
        treatmentPlanStore.clearSelectedMedicalDrugsList();
        toastSuccess("Patient moved to Dispensation.");
        router.push("/home");
      } catch (e) {
        toastDanger("Failed to move patient to dispensation");
        throw e;
      }
    };
    const proceedToConsultation = async (locationId) => {
      try {
        await StagesService.addPatientToStage(patient.value, "CONSULTATION");
        await usePatientList().refresh(locationId);
        treatmentPlanStore.clearSelectedMedicalDrugsList();
        router.push("/home");
      } catch (e) {
        toastDanger("Failed to move patient to consultation");
        throw e;
      }
    };
    const proceedToDispensationWithoutAccess = async (locationId) => {
      try {
        await StagesService.addPatientToStage(patient.value, "DISPENSATION");
        await usePatientList().refresh(locationId);
        treatmentPlanStore.clearSelectedMedicalDrugsList();
        toastWarning("Patient moved to dispensation queue. You lack access to dispense.");
        router.push("/home");
      } catch (e) {
        toastDanger("Failed to move patient to dispensation");
        throw e;
      }
    };
    const closePatientVisit = async (locationId) => {
      try {
        await closeVisit(patient.value);
        await usePatientList().refresh(locationId);
        router.push("/home");
      } catch (e) {
        console.error("Failed to close visit:", e);
        toastDanger("Failed to close visit.");
      }
    };
    onMounted(async () => {
      try {
        if (OPDActivities.value.length === 0) {
          await router.push("/home");
          return;
        }
        tabs.value = getActiveTabs();
        patientSessionManager.setCurrentPatientID(patient.value?.patientID);
        await markWizard();
        if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
          currentTabIndex.value = 0;
        }
        isDoneButtonDisabled.value = false;
        validateDoneButtonState();
      } catch (error) {
        console.error("Error: ", error);
      }
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      vitals,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        await markWizard();
        patientSessionManager.setCurrentPatientID(patient.value?.patientID);
      },
      { deep: true }
    );
    watch(
      investigations,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      OPDdiagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedMedicalDrugsList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      outcomes,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(currentSelectedNextAppointmentDate, async () => {
      await markWizard();
    });
    watch(
      presentingComplaints,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async () => {
        showWizard.value = false;
        tabs.value = getActiveTabs();
        setTimeout(() => {
          currentTabIndex.value = 0;
          showWizard.value = true;
        }, 0);
      },
      { deep: true }
    );
    watch(hasPatientsWaitingForLab, (newValue) => {
      showAlert.value = newValue;
      if (showAlert.value) {
        setTimeout(() => {
          showAlert.value = false;
        }, 15e3);
      }
    });
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
      },
      { deep: true }
    );
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(OPDPrintingModal, {
            onYes: printYes,
            onNo: printNo,
            isOpen: printModalOpen.value,
            title: `Do you want to print the consultation summary?`
          }, null, 8, ["isOpen"]),
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(unref(IonLoading), {
            "is-open": isLoadingPrinter.value,
            message: "Printing consultation summary...",
            spinner: "circles"
          }, null, 8, ["is-open"]),
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_2, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$a, {
                  key: 0,
                  ref_key: "wizard",
                  ref: wizard,
                  headingTitle: "Consultation Plan",
                  "vertical-tabs": "",
                  "navigable-tabs": navigable.value,
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  nextButton: {
                    disabled: nextButtonDisabled.value
                  },
                  "custom-tabs": tabs.value,
                  tabs: tabs.value,
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[2] || (_cache[2] = ($event) => handleFinish())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(DynamicButton, {
                          name: "Back to Waiting list",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"]),
                        createVNode(DynamicButton, {
                          name: "Back to Profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[1] || (_cache[1] = ($event) => openProfileController()),
                          style: { "margin-left": "15px" }
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ClinicalAssessment, {
                        ref_key: "clinicalAssessmentRef",
                        ref: clinicalAssessmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "ClinicalAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Investigations, {
                        ref_key: "investigationsRef",
                        ref: investigationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "Investigations"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(OPDDiagnosis, {
                        ref_key: "diagnosisRef",
                        ref: diagnosisRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "OPDDiagnosis"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(OPDTreatmentPlan, {
                        ref_key: "treatmentPlanRef",
                        ref: treatmentPlanRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "OPDTreatmentPlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(NextAppointment, {
                        ref_key: "nextAppointmentRef",
                        ref: nextAppointmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "NextAppointment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(OPDOutcome, {
                        ref_key: "outcomeRef",
                        ref: outcomeRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "Outcome"]
                    ])
                  ]),
                  _: 1
                }, 8, ["navigable-tabs", "doneButton", "nextButton", "custom-tabs", "tabs"])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ConsultationPlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d02980b7"]]);

export { ConsultationPlan as default };
