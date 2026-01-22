import { v as defineComponent, aK as useRouter, f as ref, a3 as onMounted, w as watch, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, D as createBaseVNode, O as IonButton, M as IonIcon, fb as arrowForwardOutline, a6 as createTextVNode, E as toDisplayString, bu as IonPage, c as computed } from './vendor-Cbv9TWZo.js';
import { s as storeToRefs } from './pinia-C6LE2xz6.js';
import { u as useDemographicsStore, b as EncounterTypeId, T as Toolbar, t as toastWarning, E as EncounterService, _ as _export_sfc } from '../index-BHF9kXfk.js';
import { N as NeonatalService } from './neonatal_service-CfVUCOGW.js';
import { g as getSequentiallyCompletedStepCount } from './admissionWorkflow-BPsfuTGc.js';
import { A as AdmissionProgressBar } from './AdmissionProgressBar-CKAkeDyH.js';

const _hoisted_1 = { class: "checkpoint-container" };
const _hoisted_2 = { class: "control-buttons" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalCheckpoint",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const loading = ref(false);
    const savedEncounters = ref([]);
    const isEnrollmentCompleted = ref(false);
    const isTriageCompleted = ref(false);
    const workflowSteps = ref([
      {
        encounterType: EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS,
        title: "Signs & Symptoms",
        route: "/neonatal/signs-symptoms",
        encounterNames: ["NEONATAL SIGNS & SYMPTOMS", "NEONATAL SIGNS SYMPTOMS"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.NEONATAL_REVIEW_OF_SYSTEMS,
        title: "Review of Systems",
        route: "/neonatal/review-of-systems",
        encounterNames: ["NEONATAL REVIEW OF SYSTEMS"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.PHYSICAL_EXAMINATION_BABY,
        title: "General Examination",
        route: "/neonatal/general-examination",
        encounterNames: ["PHYSICAL EXAMINATION BABY", "NEONATAL GENERAL EXAMINATION"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.VITALS,
        title: "Vitals",
        route: "/neonatal/vitals",
        encounterNames: ["VITALS", "NEONATAL VITALS"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.NEONATAL_SYSTEMIC_EXAMINATION,
        title: "Systemic Examination",
        route: "/neonatal/systemic-examination",
        encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.DIAGNOSIS,
        title: "Diagnosis",
        route: "/neonatal/diagnosis",
        encounterNames: ["DIAGNOSIS", "NEONATAL DIAGNOSIS"],
        isCompleted: false
      },
      {
        title: "Investigations",
        route: "/neonatal/investigation",
        encounterNames: ["LAB ORDERS", "LAB RESULTS"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.TREATMENT,
        title: "Treatment Plan",
        route: "/neonatal/treatment-plan",
        encounterNames: ["TREATMENT", "NEONATAL TREATMENT PLAN"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.NEONATAL_ADMISSION_OUTCOMES,
        title: "Admission Outcomes",
        route: "/neonatal/admission-outcomes",
        encounterNames: ["NEONATAL ADMISSION OUTCOMES", "ADMISSION OUTCOMES"],
        isCompleted: false
      },
      {
        title: "Sign Off",
        route: "/neonatal/admission-signoff",
        encounterNames: ["NEONATAL SIGNOFF"],
        isCompleted: false
      }
    ]);
    const normalizeEncounterName = (name) => (name ?? "").trim().toUpperCase();
    const nextButtonText = computed(() => {
      if (!isTriageCompleted.value) {
        return "Next: Triage";
      }
      if (!isEnrollmentCompleted.value) {
        return "Next: Profiling";
      }
      const nextStep = workflowSteps.value.find((step) => !step.isCompleted);
      if (nextStep) {
        return `Next: ${nextStep.title}`;
      }
      return "Print Summary";
    });
    const allCompleted = computed(() => workflowSteps.value.every((step) => step.isCompleted));
    const loadProgress = async () => {
      if (!patient.value?.patientID) {
        toastWarning("No patient selected");
        router.push("/patient-profile");
        return;
      }
      loading.value = true;
      try {
        const response = await NeonatalService.getSavedEncounters(patient.value.patientID);
        const specializedEncounters = Array.isArray(response?.encounters) ? response.encounters : [];
        let generalEncounterNames = [];
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
        } catch (e) {
          console.warn("[NeonatalCheckpoint] Failed to fetch general encounters", e);
        }
        const combinedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
        savedEncounters.value = combinedEncounters;
        const normalizedEncounterSet = new Set(combinedEncounters.map((encounter) => normalizeEncounterName(encounter)));
        const hasEncounter = (names) => names.some((name) => normalizedEncounterSet.has(normalizeEncounterName(name)));
        isEnrollmentCompleted.value = hasEncounter([
          "NEONATAL ENROLLMENT",
          "NEONATAL ENROLMENT",
          "NEONATAL_ENROLLMENT",
          "NEONATAL_ENROLMENT",
          "ENROLLMENT",
          "ENROLMENT"
        ]);
        isTriageCompleted.value = hasEncounter([
          "NEONATAL TRIAGE",
          "NEONATAL EMERGENCY TRIAGE",
          "EMERGENCY TRIAGE",
          "TRIAGE",
          "NEONATAL_TRIAGE",
          "NEONATAL_EMERGENCY_TRIAGE"
        ]);
        const completedCount = getSequentiallyCompletedStepCount(combinedEncounters, workflowSteps.value);
        workflowSteps.value.forEach((step, index) => {
          step.isCompleted = index < completedCount;
        });
      } catch (error) {
        console.error("Error loading progress:", error);
        toastWarning("Unable to load progress");
      } finally {
        loading.value = false;
      }
    };
    const handleNext = () => {
      if (!isTriageCompleted.value) {
        router.push("/neonatal/triage");
        return;
      }
      if (!isEnrollmentCompleted.value) {
        router.push("/neonatal/enrollment");
        return;
      }
      const nextStep = workflowSteps.value.find((step) => !step.isCompleted);
      if (nextStep) {
        router.push({
          path: nextStep.route,
          query: nextStep.query || {}
        });
      } else if (allCompleted.value) {
        router.push("/neonatal/admission-outcomes");
      }
    };
    onMounted(() => {
      loadProgress();
    });
    watch(
      () => patient.value?.patientID,
      (newId) => {
        if (newId) {
          loadProgress();
        }
      }
    );
    watch(
      () => router.currentRoute.value.fullPath,
      (currentPath) => {
        if (currentPath === "/neonatal/checkpoint") {
          loadProgress();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(AdmissionProgressBar),
                createBaseVNode("div", _hoisted_2, [
                  createVNode(unref(IonButton), {
                    expand: "block",
                    fill: "solid",
                    color: "primary",
                    onClick: handleNext,
                    disabled: loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonIcon), {
                        slot: "start",
                        icon: unref(arrowForwardOutline)
                      }, null, 8, ["icon"]),
                      createTextVNode(" " + toDisplayString(nextButtonText.value), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
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

const NeonatalCheckpoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-825f59f8"]]);

export { NeonatalCheckpoint as default };
