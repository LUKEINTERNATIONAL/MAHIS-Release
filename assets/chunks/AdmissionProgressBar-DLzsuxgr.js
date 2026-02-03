import { s as defineComponent, aL as useRouter, f as ref, w as watch, a2 as onMounted, y as openBlock, z as createElementBlock, C as createBaseVNode, D as toDisplayString, A as createVNode, F as unref, fi as caretDown, fj as caretUp, L as IonIcon, S as withDirectives, T as vShow, a4 as normalizeClass, O as createBlock, ab as checkmarkOutline, H as createCommentVNode, a5 as createTextVNode, J as Fragment, R as renderList, bB as createStaticVNode, c as computed, W as alertController } from './vendor-DoVhRvhx.js';
import { s as storeToRefs } from './pinia-CTgeSI8R.js';
import { u as useDemographicsStore, b as EncounterTypeId, E as EncounterService, _ as _export_sfc } from '../index-BBTSDIN9.js';
import { N as NeonatalService } from './neonatal_service-WCHFPqDQ.js';
import { g as getSequentiallyCompletedStepCount } from './admissionWorkflow-BPsfuTGc.js';

const _hoisted_1 = { class: "summary-wrapper" };
const _hoisted_2 = { class: "progress-bar-container" };
const _hoisted_3 = { class: "progress-title" };
const _hoisted_4 = { class: "progress-content" };
const _hoisted_5 = { class: "step-indicator" };
const _hoisted_6 = {
  key: 0,
  class: "step-line"
};
const _hoisted_7 = { class: "step-content" };
const _hoisted_8 = { class: "step-indicator" };
const _hoisted_9 = {
  key: 0,
  class: "step-line"
};
const _hoisted_10 = { class: "step-content" };
const _hoisted_11 = { class: "step-indicator" };
const _hoisted_12 = { class: "step-content expandable" };
const _hoisted_13 = {
  key: 0,
  class: "edit-link"
};
const _hoisted_14 = { class: "sub-steps" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = { class: "sub-step-title" };
const _hoisted_17 = { class: "step-indicator" };
const _hoisted_18 = { class: "step-content" };
const _hoisted_19 = { class: "step-indicator" };
const _hoisted_20 = { class: "step-content" };
const _hoisted_21 = { class: "step-indicator" };
const _hoisted_22 = { class: "step-content" };
const _hoisted_23 = { class: "step-indicator" };
const _hoisted_24 = { class: "step-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdmissionProgressBar",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isExpanded = ref(true);
    const showAdmissionDetails = ref(true);
    const steps = ref(["Triage", "Profiling", "Admission"]);
    const admissionSubSteps = ref([
      {
        encounterType: EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS,
        title: "Signs & Symptoms",
        route: "/neonatal/signs-symptoms",
        encounterNames: ["NEONATAL SIGNS & SYMPTOMS", "NEONATAL SIGNS SYMPTOMS"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.NEONATAL_REVIEW_OF_SYSTEMS,
        title: "A review of systems",
        route: "/neonatal/review-of-systems",
        encounterNames: ["NEONATAL REVIEW OF SYSTEMS"],
        isCompleted: false
      },
      {
        encounterType: EncounterTypeId.PHYSICAL_EXAMINATION_BABY,
        title: "General examination",
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
        title: "Systemic examination",
        route: "/neonatal/systemic-examination",
        encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"],
        isCompleted: false
      }
    ]);
    const isTriageCompleted = ref(false);
    const isEnrollmentCompleted = ref(false);
    const isDiagnosisCompleted = ref(false);
    const isInvestigationCompleted = ref(false);
    const isTreatmentCompleted = ref(false);
    const isOutcomeCompleted = ref(false);
    const isAdmissionCompleted = computed(() => {
      return admissionSubSteps.value.every((step) => step.isCompleted);
    });
    const firstIncompleteSubStep = computed(() => {
      return admissionSubSteps.value.find((step) => !step.isCompleted);
    });
    const isSubStepClickable = (subStep) => {
      if (!isTriageCompleted.value || !isEnrollmentCompleted.value) return false;
      if (subStep.isCompleted) return false;
      return firstIncompleteSubStep.value?.encounterType === subStep.encounterType;
    };
    const normalizeEncounterName = (name) => (name ?? "").trim().toUpperCase();
    const loadProgress = async () => {
      if (!patient.value?.patientID) return;
      try {
        const response = await NeonatalService.getSavedEncounters(patient.value.patientID);
        const specializedEncounters = Array.isArray(response?.encounters) ? response.encounters : [];
        let generalEncounterNames = [];
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
        } catch (e) {
          console.warn("[AdmissionProgressBar] Failed to fetch general encounters", e);
        }
        const combinedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
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
        const completedCount = getSequentiallyCompletedStepCount(combinedEncounters, admissionSubSteps.value);
        admissionSubSteps.value.forEach((step, index) => {
          step.isCompleted = index < completedCount;
        });
        isDiagnosisCompleted.value = hasEncounter(["DIAGNOSIS", "NEONATAL DIAGNOSIS"]);
        isInvestigationCompleted.value = hasEncounter([
          "INVESTIGATION",
          "NEONATAL INVESTIGATION",
          "LAB ORDERS",
          "LAB RESULTS",
          "AHD LAB ORDERS",
          "AHD LAB RESULTS"
        ]);
        isTreatmentCompleted.value = hasEncounter(["TREATMENT", "NEONATAL TREATMENT PLAN"]);
        isOutcomeCompleted.value = hasEncounter(["NEONATAL ADMISSION OUTCOMES", "ADMISSION OUTCOMES"]);
        isTriageCompleted.value = hasEncounter([
          "NEONATAL TRIAGE",
          "NEONATAL EMERGENCY TRIAGE",
          "TRIAGE",
          "NEONATAL_TRIAGE",
          "NEONATAL_EMERGENCY_TRIAGE"
        ]);
      } catch (error) {
        console.error("Error loading progress:", error);
      }
    };
    const toggleProgressBar = () => {
      isExpanded.value = !isExpanded.value;
    };
    const toggleAdmissionDetails = async () => {
      if (isAdmissionCompleted.value) {
        router.push("/neonatal/checkpoint");
        return;
      }
      if (!isTriageCompleted.value) {
        const alert = await alertController.create({
          header: "Triage Required",
          message: "Please complete triage before starting admission.",
          buttons: [
            {
              text: "Cancel",
              role: "cancel"
            },
            {
              text: "Go to Triage",
              handler: () => {
                router.push("/neonatal/triage");
              }
            }
          ]
        });
        await alert.present();
        return;
      }
      if (!isEnrollmentCompleted.value) {
        const alert = await alertController.create({
          header: "Profiling Required",
          message: "Please complete profiling before starting admission.",
          buttons: [
            {
              text: "Cancel",
              role: "cancel"
            },
            {
              text: "Go to Profiling",
              handler: () => {
                router.push("/neonatal/enrollment");
              }
            }
          ]
        });
        await alert.present();
        return;
      }
      showAdmissionDetails.value = !showAdmissionDetails.value;
    };
    const goToTriage = () => {
      router.push("/neonatal/triage");
    };
    const goToEnrollment = () => {
      router.push("/neonatal/enrollment");
    };
    const goToDiagnosis = () => {
      router.push("/neonatal/diagnosis");
    };
    const navigateToSubStep = (route) => {
      router.push(route);
    };
    watch(
      () => patient.value?.patientID,
      (newId) => {
        if (newId) {
          loadProgress();
        }
      }
    );
    watch(
      () => router.currentRoute.value,
      () => {
        loadProgress();
      }
    );
    onMounted(() => {
      loadProgress();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[11] || (_cache[11] = createBaseVNode("div", { class: "summary-title" }, "Summary", -1)),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: "progress-header",
            onClick: toggleProgressBar
          }, [
            createBaseVNode("span", _hoisted_3, toDisplayString(isExpanded.value ? "Hide progress bar" : "Show progress bar"), 1),
            createVNode(unref(IonIcon), {
              icon: isExpanded.value ? unref(caretDown) : unref(caretUp),
              class: "toggle-icon"
            }, null, 8, ["icon"])
          ]),
          withDirectives(createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", {
              class: normalizeClass(["progress-step", { completed: isTriageCompleted.value, active: !isTriageCompleted.value }])
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-circle", { completed: isTriageCompleted.value }])
                }, [
                  isTriageCompleted.value ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: unref(checkmarkOutline)
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ], 2),
                steps.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_6)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-title", { clickable: !isTriageCompleted.value, incomplete: !isTriageCompleted.value }]),
                  onClick: _cache[0] || (_cache[0] = ($event) => !isTriageCompleted.value && goToTriage())
                }, " Triage ", 2)
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["progress-step", { completed: isEnrollmentCompleted.value, active: !isEnrollmentCompleted.value && isTriageCompleted.value }])
            }, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-circle", { completed: isEnrollmentCompleted.value }])
                }, [
                  isEnrollmentCompleted.value ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: unref(checkmarkOutline)
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ], 2),
                steps.value.length > 2 ? (openBlock(), createElementBlock("div", _hoisted_9)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-title", { clickable: !isEnrollmentCompleted.value && isTriageCompleted.value, incomplete: !isEnrollmentCompleted.value }]),
                  onClick: _cache[1] || (_cache[1] = ($event) => !isEnrollmentCompleted.value && isTriageCompleted.value && goToEnrollment())
                }, " Profiling ", 2)
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["progress-step", { completed: isAdmissionCompleted.value, active: !isAdmissionCompleted.value && isTriageCompleted.value && isEnrollmentCompleted.value }])
            }, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-circle", { completed: isAdmissionCompleted.value }])
                }, [
                  isAdmissionCompleted.value ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: unref(checkmarkOutline)
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ], 2),
                _cache[3] || (_cache[3] = createBaseVNode("div", { class: "step-line last-line" }, null, -1))
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-title clickable", { incomplete: !isAdmissionCompleted.value }]),
                  onClick: toggleAdmissionDetails
                }, [
                  _cache[4] || (_cache[4] = createTextVNode(" Admission ", -1)),
                  !showAdmissionDetails.value ? (openBlock(), createElementBlock("span", _hoisted_13, "edit")) : createCommentVNode("", true)
                ], 2),
                withDirectives(createBaseVNode("div", _hoisted_14, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(admissionSubSteps.value, (subStep) => {
                    return openBlock(), createElementBlock("div", {
                      key: subStep.encounterType,
                      class: normalizeClass(["sub-step", { completed: subStep.isCompleted, clickable: isSubStepClickable(subStep) }]),
                      onClick: ($event) => isSubStepClickable(subStep) && navigateToSubStep(subStep.route)
                    }, [
                      _cache[5] || (_cache[5] = createBaseVNode("span", { class: "bullet" }, "•", -1)),
                      createBaseVNode("span", _hoisted_16, toDisplayString(subStep.title), 1)
                    ], 10, _hoisted_15);
                  }), 128))
                ], 512), [
                  [vShow, showAdmissionDetails.value]
                ])
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["progress-step", { completed: isDiagnosisCompleted.value, active: !isDiagnosisCompleted.value && isAdmissionCompleted.value }])
            }, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-circle", { completed: isDiagnosisCompleted.value }])
                }, [
                  isDiagnosisCompleted.value ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: unref(checkmarkOutline)
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ], 2),
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "step-line" }, null, -1))
              ]),
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-title", { clickable: !isDiagnosisCompleted.value && isAdmissionCompleted.value, incomplete: !isDiagnosisCompleted.value }]),
                  onClick: _cache[2] || (_cache[2] = ($event) => !isDiagnosisCompleted.value && isAdmissionCompleted.value && goToDiagnosis())
                }, " Diagnosis ", 2)
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["progress-step", { completed: isInvestigationCompleted.value, active: isAdmissionCompleted.value && !isInvestigationCompleted.value }])
            }, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-circle", { completed: isInvestigationCompleted.value }])
                }, [
                  isInvestigationCompleted.value ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: unref(checkmarkOutline)
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ], 2),
                _cache[7] || (_cache[7] = createBaseVNode("div", { class: "step-line" }, null, -1))
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-title", { incomplete: !isInvestigationCompleted.value }])
                }, "Investigations", 2)
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["progress-step", { completed: isTreatmentCompleted.value, active: isAdmissionCompleted.value && !isTreatmentCompleted.value }])
            }, [
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-circle", { completed: isTreatmentCompleted.value }])
                }, [
                  isTreatmentCompleted.value ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: unref(checkmarkOutline)
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ], 2),
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "step-line" }, null, -1))
              ]),
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-title", { incomplete: !isTreatmentCompleted.value }])
                }, "Treatment Plan", 2)
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["progress-step", { completed: isOutcomeCompleted.value, active: isAdmissionCompleted.value && !isOutcomeCompleted.value }])
            }, [
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-circle", { completed: isOutcomeCompleted.value }])
                }, [
                  isOutcomeCompleted.value ? (openBlock(), createBlock(unref(IonIcon), {
                    key: 0,
                    icon: unref(checkmarkOutline)
                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                ], 2),
                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "step-line" }, null, -1))
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", {
                  class: normalizeClass(["step-title", { incomplete: !isOutcomeCompleted.value }])
                }, "Outcome", 2)
              ])
            ], 2),
            _cache[10] || (_cache[10] = createStaticVNode('<div class="progress-step last" data-v-4de0b3af><div class="step-indicator" data-v-4de0b3af><div class="step-circle" data-v-4de0b3af></div></div><div class="step-content" data-v-4de0b3af><div class="step-title incomplete" data-v-4de0b3af>Signoff &amp; Printout</div></div></div>', 1))
          ], 512), [
            [vShow, isExpanded.value]
          ])
        ])
      ]);
    };
  }
});

const AdmissionProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4de0b3af"]]);

export { AdmissionProgressBar as A };
