import { s as storeToRefs, d as defineStore } from './pinia-DLl5biJx.js';
import { s as defineComponent, aL as useRouter, a3 as onMounted, w as watch, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, aB as IonGrid, B as withCtx, af as IonRow, aA as IonCol, bL as IonCard, O as createBlock, bJ as IonBadge, a5 as createTextVNode, D as toDisplayString, H as createCommentVNode, bd as IonCardContent, dv as IonImg, bz as IonText, Q as normalizeClass, f as ref, c as computed, aG as IonContent, J as Fragment, S as renderList, d_ as IonSkeletonText, L as IonIcon, cH as arrowForward, N as IonButton, fm as reloadOutline, bS as withKeys, a8 as withModifiers, d4 as add, v as documentTextOutline, P as normalizeStyle, a9 as chevronDownOutline, a$ as personOutline, aV as femaleOutline, aS as medicalOutline, R as alertCircleOutline, aW as heartOutline, bs as pulseOutline, a_ as medkitOutline, eN as scanOutline, fn as restaurantOutline, fo as flaskOutline, et as thermometerOutline, fp as bandageOutline, aX as flagOutline, d3 as person, e1 as ellipsisVerticalSharp, fq as maleFemaleOutline, b8 as calendarOutline, b0 as locationOutline, fr as qrCodeOutline, di as IonSegmentButton, e0 as statsChartOutline, a7 as IonLabel, dh as IonSegment, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, al as IonPopover } from './vendor-BC7lQdfR.js';
import { u as usePatientProfile } from './usePatientProfile-BfmiXDd2.js';
import { u as useDemographicsStore, b as EncounterTypeId, E as EncounterService, S as Service, t as toastWarning, _ as _export_sfc, l as PreviousVitals, r as StandardModal, H as HisDate, o as createModal, bp as LabOrderService, K as ObservationService, ar as ConceptService, P as PatientService, k as alertConfirmation } from '../index-DcmYecLG.js';
import { N as NeonatalService } from './neonatal_service-Btua5sBE.js';
import { g as getSequentiallyCompletedStepCount } from './clinicalReviewWorkflow-BPsfuTGc.js';
import { I as IMAGES } from './images-BHsiaMgy.js';
import WeightHeightChart from './WeightHeightChart-_Fvj-vN-.js';
import { _ as _sfc_main$6 } from './EnterLabResultsModal.vue_vue_type_script_setup_true_lang-C4p2Hjwa.js';
import { N as NeonatalReportService } from './reportService-JOv9m1UN.js';
import { l as lodashExports } from './lodash-D5PERY-R.js';

const _hoisted_1$5 = { class: "neonatal-home-component" };
const _hoisted_2$3 = { class: "icon-container" };
const _hoisted_3$3 = { class: "icon-container" };
const _hoisted_4$3 = { class: "icon-container" };
const _hoisted_5$3 = { class: "icon-container" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NeonatalCare",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const nextEncounterBadge = ref("");
    const admissionProgress = ref("");
    const isTriagePending = computed(() => admissionProgress.value === "Triage");
    const navigateTo = (route) => {
      const routeMap = {
        discharge: { path: "/neonatal/discharge" },
        "neonatal-opd": { path: "/neonatal/opd" },
        "in-patient": { path: "/neonatal/in-patient" },
        "emergency-triage": { path: "/neonatal/triage", query: { source: "profile" } },
        "instruction-guides": { path: "/neonatal/guides" },
        checkpoint: { path: "/neonatal/checkpoint" }
      };
      const targetRoute = routeMap[route];
      if (targetRoute) {
        router.push({
          path: targetRoute.path,
          query: targetRoute.query
        });
      } else {
        console.warn(`Route not found for: ${route}`);
      }
    };
    const navigateGuarded = (route) => {
      if (isTriagePending.value) {
        return;
      }
      navigateTo(route);
    };
    const normalizeEncounterName = (name) => (name ?? "").trim().toUpperCase();
    const ADMISSION_WORKFLOW_STEPS = [
      {
        encounterType: EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS,
        route: "/neonatal/signs-symptoms",
        encounterNames: ["NEONATAL SIGNS & SYMPTOMS", "NEONATAL SIGNS SYMPTOMS"],
        title: "Signs & Symptoms"
      },
      {
        encounterType: EncounterTypeId.NEONATAL_REVIEW_OF_SYSTEMS,
        route: "/neonatal/review-of-systems",
        encounterNames: ["NEONATAL REVIEW OF SYSTEMS"],
        title: "Review of Systems"
      },
      {
        encounterType: EncounterTypeId.PHYSICAL_EXAMINATION_BABY,
        route: "/neonatal/general-examination",
        encounterNames: ["PHYSICAL EXAMINATION BABY", "NEONATAL GENERAL EXAMINATION"],
        title: "General Exam"
      },
      {
        encounterType: EncounterTypeId.VITALS,
        route: "/neonatal/vitals",
        encounterNames: ["VITALS", "NEONATAL VITALS"],
        title: "Vitals"
      },
      {
        encounterType: EncounterTypeId.NEONATAL_SYSTEMIC_EXAMINATION,
        route: "/neonatal/systemic-examination",
        encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"],
        title: "Systemic Exam"
      },
      {
        encounterType: EncounterTypeId.NEONATAL_ENROLLMENT,
        route: "/neonatal/enrollment",
        encounterNames: ["NEONATAL ENROLLMENT", "NEONATAL ENROLMENT", "NEONATAL_ENROLLMENT", "NEONATAL_ENROLMENT", "ENROLLMENT", "ENROLMENT"],
        title: "Profiling"
      },
      {
        encounterType: EncounterTypeId.DIAGNOSIS,
        route: "/neonatal/diagnosis",
        encounterNames: ["DIAGNOSIS", "NEONATAL DIAGNOSIS"],
        title: "Diagnosis"
      },
      {
        encounterType: EncounterTypeId.LAB_ORDERS,
        route: "/neonatal/investigation",
        encounterNames: ["LAB ORDERS", "LAB RESULTS"],
        title: "Investigations"
      },
      {
        encounterType: EncounterTypeId.TREATMENT,
        route: "/neonatal/treatment-plan",
        encounterNames: ["TREATMENT", "NEONATAL TREATMENT PLAN"],
        title: "Treatment Plan"
      },
      {
        encounterType: EncounterTypeId.NEONATAL_CLINICAL_REVIEW_OUTCOMES,
        route: "/neonatal/clinical-review-outcomes",
        encounterNames: [
          "NEONATAL ADMISSION OUTCOMES",
          "ADMISSION OUTCOMES",
          "NEONATAL CLINICAL REVIEW OUTCOMES",
          "CLINICAL REVIEW OUTCOMES"
        ],
        title: "Outcomes"
      },
      {
        title: "Sign Off",
        route: "/neonatal/clinical-review-signoff",
        encounterNames: ["NEONATAL SIGNOFF"]
      }
    ];
    const DEFAULT_ADMISSION_ROUTE = ADMISSION_WORKFLOW_STEPS[0].route;
    const FINAL_ADMISSION_ROUTE = ADMISSION_WORKFLOW_STEPS[ADMISSION_WORKFLOW_STEPS.length - 1].route;
    const determineNextAdmissionRoute = (savedEncounterNames) => {
      const completedSteps = getSequentiallyCompletedStepCount(savedEncounterNames, ADMISSION_WORKFLOW_STEPS);
      const pendingStep = ADMISSION_WORKFLOW_STEPS[completedSteps];
      return pendingStep ? pendingStep.route : FINAL_ADMISSION_ROUTE;
    };
    const determineNextEncounterTitle = (savedEncounterNames) => {
      const completedSteps = getSequentiallyCompletedStepCount(savedEncounterNames, ADMISSION_WORKFLOW_STEPS);
      const pendingStep = ADMISSION_WORKFLOW_STEPS[completedSteps];
      return pendingStep ? pendingStep.title : "";
    };
    const startAdmissionWorkflow = async (patientId) => {
      try {
        const savedEncountersResponse = await NeonatalService.getSavedEncounters(patientId);
        const specializedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters.filter((name) => {
          const n = normalizeEncounterName(name);
          return n !== "LAB ORDERS" && n !== "LAB RESULTS";
        }) : [];
        let generalEncounterNames = [];
        try {
          const allEncounters = await EncounterService.getEncounters(patientId);
          const sessionDate = Service.getSessionDate();
          generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.filter((e) => {
            const name = normalizeEncounterName(e.type?.name || e.encounter_type_name);
            if (name === "LAB ORDERS" || name === "LAB RESULTS") {
              const encounterDate = e.encounter_datetime?.split("T")[0];
              return encounterDate === sessionDate;
            }
            return true;
          }).map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
        } catch (e) {
          console.warn("[NeonatalCare:startAdmissionWorkflow] Failed to fetch general encounters", e);
        }
        const savedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
        const nextRoute = determineNextAdmissionRoute(savedEncounters);
        await router.push(nextRoute);
      } catch (error) {
        console.error("Error determining neonatal clinical review workflow:", error);
        toastWarning("Unable to determine next clinical review step. Starting from Signs & Symptoms.");
        await router.push(DEFAULT_ADMISSION_ROUTE);
      }
    };
    const hasTriageEncounter = (savedEncounters) => {
      const names = ["NEONATAL TRIAGE", "NEONATAL EMERGENCY TRIAGE", "EMERGENCY TRIAGE", "TRIAGE", "NEONATAL_TRIAGE", "NEONATAL_EMERGENCY_TRIAGE"];
      const normalizedNames = names.map((n) => normalizeEncounterName(n));
      return savedEncounters.some((encounterName) => normalizedNames.includes(normalizeEncounterName(encounterName)));
    };
    const CHECKPOINT_WORKFLOW = [
      {
        title: "Triage",
        encounterNames: [
          "NEONATAL TRIAGE",
          "NEONATAL EMERGENCY TRIAGE",
          "EMERGENCY TRIAGE",
          "TRIAGE",
          "NEONATAL_TRIAGE",
          "NEONATAL_EMERGENCY_TRIAGE"
        ],
        encounterTypeIds: [EncounterTypeId.NEONATAL_TRIAGE, EncounterTypeId.NEONATAL_EMERGENCY_TRIAGE]
      },
      {
        title: "Signs & Symptoms",
        encounterNames: ["NEONATAL SIGNS & SYMPTOMS", "NEONATAL SIGNS SYMPTOMS"],
        encounterTypeIds: [EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS]
      },
      {
        title: "Review of Systems",
        encounterNames: ["NEONATAL REVIEW OF SYSTEMS"],
        encounterTypeIds: [EncounterTypeId.NEONATAL_REVIEW_OF_SYSTEMS]
      },
      {
        title: "General Examination",
        encounterNames: ["PHYSICAL EXAMINATION BABY", "NEONATAL GENERAL EXAMINATION"],
        encounterTypeIds: [EncounterTypeId.PHYSICAL_EXAMINATION_BABY]
      },
      {
        title: "Vitals",
        encounterNames: ["VITALS", "NEONATAL VITALS"],
        encounterTypeIds: [EncounterTypeId.VITALS]
      },
      {
        title: "Systemic Examination",
        encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"],
        encounterTypeIds: [EncounterTypeId.NEONATAL_SYSTEMIC_EXAMINATION]
      },
      {
        title: "Profiling",
        encounterNames: ["NEONATAL ENROLLMENT", "NEONATAL ENROLMENT", "NEONATAL_ENROLLMENT", "NEONATAL_ENROLMENT"],
        encounterTypeIds: [EncounterTypeId.NEONATAL_ENROLLMENT]
      },
      {
        title: "Diagnosis",
        encounterNames: ["DIAGNOSIS", "NEONATAL DIAGNOSIS"],
        encounterTypeIds: [EncounterTypeId.DIAGNOSIS]
      },
      {
        title: "Investigations",
        encounterNames: ["LAB ORDERS", "LAB RESULTS"],
        encounterTypeIds: [EncounterTypeId.LAB_ORDERS, EncounterTypeId.LAB_RESULTS]
      },
      {
        title: "Treatment Plan",
        encounterNames: ["TREATMENT", "NEONATAL TREATMENT PLAN"],
        encounterTypeIds: [EncounterTypeId.TREATMENT]
      },
      {
        title: "Clinical Review Outcomes",
        encounterNames: [
          "NEONATAL ADMISSION OUTCOMES",
          "ADMISSION OUTCOMES",
          "NEONATAL CLINICAL REVIEW OUTCOMES",
          "CLINICAL REVIEW OUTCOMES"
        ],
        encounterTypeIds: [EncounterTypeId.NEONATAL_CLINICAL_REVIEW_OUTCOMES]
      },
      {
        title: "Sign Off",
        encounterNames: ["NEONATAL SIGNOFF"]
      }
    ];
    const loadNextEncounterBadge = async () => {
      if (!patient.value?.patientID) {
        nextEncounterBadge.value = "";
        admissionProgress.value = "";
        return;
      }
      try {
        const savedEncountersResponse = await NeonatalService.getSavedEncounters(patient.value.patientID);
        const specializedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters.filter((name) => {
          const n = normalizeEncounterName(name);
          return n !== "LAB ORDERS" && n !== "LAB RESULTS";
        }) : [];
        let generalEncounterNames = [];
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          const sessionDate = Service.getSessionDate();
          generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.filter((e) => {
            const name = normalizeEncounterName(e.type?.name || e.encounter_type_name);
            if (name === "LAB ORDERS" || name === "LAB RESULTS") {
              const encounterDate = e.encounter_datetime?.split("T")[0];
              return encounterDate === sessionDate;
            }
            return true;
          }).map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
        } catch (e) {
          console.warn("[NeonatalCare] Failed to fetch general encounters", e);
        }
        const savedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
        const normalizedEncounterSet = new Set(savedEncounters.map((encounter) => normalizeEncounterName(encounter)));
        const savedEncounterIds = /* @__PURE__ */ new Set();
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          const sessionDate = Service.getSessionDate();
          if (Array.isArray(allEncounters)) {
            allEncounters.forEach((e) => {
              const name = normalizeEncounterName(e.type?.name || e.encounter_type_name);
              if (name === "LAB ORDERS" || name === "LAB RESULTS") {
                const encounterDate = e.encounter_datetime?.split("T")[0];
                if (encounterDate !== sessionDate) return;
              }
              if (e.type?.id) savedEncounterIds.add(Number(e.type.id));
              if (e.encounter_type) savedEncounterIds.add(Number(e.encounter_type));
            });
          }
        } catch (e) {
          console.warn("[NeonatalCare] Failed to fetch encounter IDs", e);
        }
        const hasEncounter = (step) => {
          const nameMatch = step.encounterNames.some((name) => normalizedEncounterSet.has(normalizeEncounterName(name)));
          const idMatch = step.encounterTypeIds?.some((id) => savedEncounterIds.has(id));
          return nameMatch || idMatch;
        };
        let nextStep = null;
        for (const step of CHECKPOINT_WORKFLOW) {
          if (!hasEncounter(step)) {
            nextStep = step;
            break;
          }
        }
        if (!nextStep) {
          admissionProgress.value = "Complete";
        } else {
          admissionProgress.value = nextStep.title;
        }
        const hasTriage = hasTriageEncounter(savedEncounters);
        if (!hasTriage) {
          nextEncounterBadge.value = "Triage";
        } else {
          const nextTitle = determineNextEncounterTitle(savedEncounters);
          nextEncounterBadge.value = nextTitle || "Completed";
        }
      } catch (error) {
        console.error("Error loading next encounter badge:", error);
        nextEncounterBadge.value = "";
        admissionProgress.value = "";
      }
    };
    const handleAdmit = async () => {
      if (!patient.value?.patientID) {
        toastWarning("No patient selected");
        return;
      }
      try {
        const savedEncountersResponse = await NeonatalService.getSavedEncounters(patient.value.patientID);
        const specializedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters.filter((name) => {
          const n = normalizeEncounterName(name);
          return n !== "LAB ORDERS" && n !== "LAB RESULTS";
        }) : [];
        let generalEncounterNames = [];
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          const sessionDate = Service.getSessionDate();
          generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.filter((e) => {
            const name = normalizeEncounterName(e.type?.name || e.encounter_type_name);
            if (name === "LAB ORDERS" || name === "LAB RESULTS") {
              const encounterDate = e.encounter_datetime?.split("T")[0];
              return encounterDate === sessionDate;
            }
            return true;
          }).map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
        } catch (e) {
          console.warn("[NeonatalCare:handleAdmit] Failed to fetch general encounters", e);
        }
        const savedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
        const savedEncounterIds = /* @__PURE__ */ new Set();
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          const sessionDate = Service.getSessionDate();
          if (Array.isArray(allEncounters)) {
            allEncounters.forEach((e) => {
              const name = normalizeEncounterName(e.type?.name || e.encounter_type_name);
              if (name === "LAB ORDERS" || name === "LAB RESULTS") {
                const encounterDate = e.encounter_datetime?.split("T")[0];
                if (encounterDate !== sessionDate) return;
              }
              if (e.type?.id) savedEncounterIds.add(Number(e.type.id));
              if (e.encounter_type) savedEncounterIds.add(Number(e.encounter_type));
            });
          }
        } catch (e) {
          console.warn("[NeonatalCare:handleAdmit] Failed to fetch encounter IDs", e);
        }
        const normalizedEncounterSet = new Set(savedEncounters.map((encounter) => normalizeEncounterName(encounter)));
        const hasEncounter = (step) => {
          const nameMatch = step.encounterNames.some((name) => normalizedEncounterSet.has(normalizeEncounterName(name)));
          const idMatch = step.encounterTypeIds?.some((id) => savedEncounterIds.has(id));
          return nameMatch || idMatch;
        };
        const allStepsComplete = CHECKPOINT_WORKFLOW.every((step) => hasEncounter(step));
        if (allStepsComplete) {
          router.push("/neonatal/checkpoint");
          return;
        }
        const hasTriage = hasTriageEncounter(savedEncounters);
        if (!hasTriage) {
          router.push("/neonatal/triage");
          return;
        }
        await startAdmissionWorkflow(patient.value.patientID);
      } catch (error) {
        console.error("Error in handleAdmit:", error);
        toastWarning("Unable to check clinical review status");
      }
    };
    onMounted(() => {
      loadNextEncounterBadge();
    });
    watch(
      () => patient.value?.patientID,
      () => {
        loadNextEncounterBadge();
      }
    );
    watch(
      () => router.currentRoute.value.fullPath,
      (path) => {
        if (path.includes("/patientProfile") || path === "/patientProfile") {
          loadNextEncounterBadge();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "section-header" }, [
          createBaseVNode("h2", null, "Activities")
        ], -1)),
        createVNode(unref(IonGrid), null, {
          default: withCtx(() => [
            createVNode(unref(IonRow), null, {
              default: withCtx(() => [
                createVNode(unref(IonCol), { size: "6" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCard), {
                      button: "",
                      onClick: handleAdmit,
                      class: "activity-card admit-card"
                    }, {
                      default: withCtx(() => [
                        admissionProgress.value ? (openBlock(), createBlock(unref(IonBadge), {
                          key: 0,
                          class: "admit-badge",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(admissionProgress.value), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(IonCardContent), { class: "card-content" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_2$3, [
                              createVNode(unref(IonImg), {
                                src: unref(IMAGES).patientProfile.cryBaby,
                                alt: "Clinical Review",
                                class: "activity-icon"
                              }, null, 8, ["src"])
                            ]),
                            createVNode(unref(IonText), { class: "card-label" }, {
                              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                createBaseVNode("p", null, "Clinical Review", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "6" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCard), {
                      button: "",
                      onClick: _cache[0] || (_cache[0] = () => navigateGuarded("discharge")),
                      class: normalizeClass(["activity-card", { "card-disabled": isTriagePending.value }]),
                      title: isTriagePending.value ? "Do triage first" : ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), { class: "card-content" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_3$3, [
                              createVNode(unref(IonImg), {
                                src: unref(IMAGES).patientProfile.babyTransport,
                                alt: "Discharge",
                                class: "activity-icon"
                              }, null, 8, ["src"])
                            ]),
                            createVNode(unref(IonText), { class: "card-label" }, {
                              default: withCtx(() => [..._cache[4] || (_cache[4] = [
                                createBaseVNode("p", null, "Discharge", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["class", "title"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonRow), null, {
              default: withCtx(() => [
                createVNode(unref(IonCol), { size: "6" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCard), {
                      button: "",
                      onClick: _cache[1] || (_cache[1] = () => navigateGuarded("in-patient")),
                      class: normalizeClass(["activity-card", { "card-disabled": isTriagePending.value }]),
                      title: isTriagePending.value ? "Do triage first" : ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), { class: "card-content" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4$3, [
                              createVNode(unref(IonImg), {
                                src: unref(IMAGES).patientProfile.medClinic,
                                alt: "Clinical Review",
                                class: "activity-icon"
                              }, null, 8, ["src"])
                            ]),
                            createVNode(unref(IonText), { class: "card-label" }, {
                              default: withCtx(() => [..._cache[5] || (_cache[5] = [
                                createBaseVNode("p", null, "In-Patient", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["class", "title"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _cache[8] || (_cache[8] = createBaseVNode("div", {
          class: "section-header",
          style: { "margin-top": "24px" }
        }, [
          createBaseVNode("h2", null, "Quick Actions")
        ], -1)),
        createVNode(unref(IonGrid), null, {
          default: withCtx(() => [
            createVNode(unref(IonRow), null, {
              default: withCtx(() => [
                createVNode(unref(IonCol), { size: "6" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCard), {
                      button: "",
                      onClick: _cache[2] || (_cache[2] = () => navigateGuarded("instruction-guides")),
                      class: normalizeClass("activity-card"),
                      title: isTriagePending.value ? "Do triage first" : ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), { class: "card-content" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_5$3, [
                              createVNode(unref(IonImg), {
                                src: unref(IMAGES).patientProfile.info,
                                alt: "Instruction Guides",
                                class: "activity-icon"
                              }, null, 8, ["src"])
                            ]),
                            createVNode(unref(IonText), { class: "card-label" }, {
                              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                                createBaseVNode("p", null, "Instruction Guides", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const NeonatalCare = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2729f090"]]);

const _hoisted_1$4 = { class: "weight-height-tab" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "WeightHeightTab",
  props: {
    checkUnderSixWeeks: { type: Boolean },
    showHeightWeight: { type: Boolean },
    isChild: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const showHeightWeight = computed(() => props.showHeightWeight ?? true);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        __props.isChild ? (openBlock(), createBlock(WeightHeightChart, {
          key: 0,
          checkUnderSixWeeks: __props.checkUnderSixWeeks,
          showHeightWeight: showHeightWeight.value
        }, null, 8, ["checkUnderSixWeeks", "showHeightWeight"])) : (openBlock(), createBlock(PreviousVitals, { key: 1 }))
      ]);
    };
  }
});

const WeightHeightTab = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-718eba9d"]]);

const _hoisted_1$3 = { class: "results-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NeonatalLabResultsModal",
  props: {
    content: { default: {} },
    title: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const modalTitle = computed(() => `Lab results for ${props.content?.name || props.title || "test"}`);
    const resultItems = computed(() => Array.isArray(props.content?.result) ? props.content.result : []);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, { title: modalTitle.value }, {
        content: withCtx(() => [
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(resultItems.value, (item, index) => {
                      return openBlock(), createBlock(unref(IonCol), {
                        size: "4",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonRow), null, {
                            default: withCtx(() => [
                              createVNode(unref(IonCol), { size: "8" }, {
                                default: withCtx(() => [
                                  item.indicator?.name ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    createTextVNode(toDisplayString(item.indicator.name), 1)
                                  ], 64)) : (openBlock(), createBlock(unref(IonSkeletonText), {
                                    key: 1,
                                    animated: "",
                                    style: { "width": "80%" }
                                  }))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(IonCol), {
                                class: "bold",
                                size: "0.5"
                              }, {
                                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                                  createTextVNode(":", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(IonCol), {
                                class: "bold",
                                size: "2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const NeonatalLabResultsModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-db4a7a26"]]);

const _hoisted_1$2 = { class: "investigation-results-tab" };
const _hoisted_2$2 = { class: "investigation-results-tab__header" };
const _hoisted_3$2 = { class: "investigation-results-tab__actions" };
const _hoisted_4$2 = {
  key: 0,
  class: "investigation-results-tab__loader"
};
const _hoisted_5$2 = {
  key: 0,
  class: "skeleton-list"
};
const _hoisted_6$2 = {
  key: 1,
  class: "investigation-state"
};
const _hoisted_7$2 = { key: 0 };
const _hoisted_8$2 = { key: 1 };
const _hoisted_9$2 = {
  key: 2,
  class: "encounter-list"
};
const _hoisted_10$2 = ["onClick", "onKeydown"];
const _hoisted_11$2 = { class: "encounter-card__header" };
const _hoisted_12$2 = { class: "encounter-card__date" };
const _hoisted_13$2 = { class: "encounter-card__body" };
const _hoisted_14$2 = { class: "observation-row__concept" };
const _hoisted_15$2 = { class: "observation-row__value" };
const _hoisted_16$1 = { key: 1 };
const _hoisted_17$1 = ["onClick", "onKeydown"];
const skeletonCount = 3;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InvestigationTab",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const router = useRouter();
    const isLoading = ref(true);
    const isCheckingWorkflow = ref(false);
    const hasWorkflowInvestigation = ref(false);
    const patientIdentifier = computed(() => patient.value?.patientID || patient.value?.patient_id);
    const checkWorkflowStatus = async () => {
      if (!patientIdentifier.value) {
        hasWorkflowInvestigation.value = false;
        return;
      }
      isCheckingWorkflow.value = true;
      try {
        const response = await NeonatalService.getSavedEncounters(patientIdentifier.value);
        const specializedEncounters = Array.isArray(response?.encounters) ? response.encounters.filter((name) => {
          const n = (name || "").trim().toUpperCase();
          return n !== "LAB ORDERS" && n !== "LAB RESULTS";
        }) : [];
        const allEncounters = await EncounterService.getEncounters(patientIdentifier.value);
        const sessionDate = Service.getSessionDate();
        const generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.filter((e) => {
          const name = (e.type?.name || e.encounter_type_name || "").trim().toUpperCase();
          if (name === "LAB ORDERS" || name === "LAB RESULTS") {
            const encounterDate = e.encounter_datetime?.split("T")[0];
            return encounterDate === sessionDate;
          }
          return true;
        }).map((e) => (e.type?.name || e.encounter_type_name || "").trim().toUpperCase()).filter(Boolean) : [];
        const combinedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
        const normalizedEncounterSet = new Set(combinedEncounters.map((e) => (e || "").trim().toUpperCase()));
        hasWorkflowInvestigation.value = normalizedEncounterSet.has("LAB ORDERS") || normalizedEncounterSet.has("LAB RESULTS");
      } catch (error) {
        console.error("Failed to check investigation workflow status", error);
        hasWorkflowInvestigation.value = false;
      } finally {
        isCheckingWorkflow.value = false;
      }
    };
    watch(
      patientIdentifier,
      () => {
        checkWorkflowStatus();
      },
      { immediate: true }
    );
    const openInvestigationFlow = () => {
      router.push({ name: "neonatalInvestigation", query: { from: "profile" } });
    };
    const refreshInvestigations = async () => {
      if (!patientIdentifier.value) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      try {
        NeonatalReportService.clearCache(patientIdentifier.value);
        await demographicsStore.setPatientRecord({ patientID: patientIdentifier.value });
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(async () => {
      await checkWorkflowStatus();
      await refreshInvestigations();
    });
    watch(() => patientIdentifier.value, refreshInvestigations);
    const patientLabOrders = computed(() => {
      if (!patient.value?.labOrders) return [];
      const { saved = [], unsaved = [] } = patient.value.labOrders;
      return [...saved, ...unsaved];
    });
    const orderedLabOrders = computed(() => {
      return [...patientLabOrders.value].filter((order) => order.tests && order.tests.length > 0).sort((a, b) => getOrderTimestamp(b) - getOrderTimestamp(a));
    });
    const hasEncounters = computed(() => orderedLabOrders.value.length > 0);
    const getOrderTimestamp = (order) => {
      const fallbackDate = order?.order_date || order?.encounter_datetime || order?.order_datetime;
      if (!fallbackDate) return 0;
      const timestamp = new Date(fallbackDate).getTime();
      return Number.isNaN(timestamp) ? 0 : timestamp;
    };
    const formatOrderDate = (order) => {
      const fallbackDate = order?.order_date || order?.encounter_datetime || order?.order_datetime;
      if (!fallbackDate) return "Unknown date";
      try {
        return HisDate.toStandardHisDisplayFormat(fallbackDate);
      } catch {
        return new Date(fallbackDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
      }
    };
    const getTestResultPayload = (test) => {
      if (!test) return null;
      if (Array.isArray(test.result)) {
        return test.result[0];
      }
      return test.result;
    };
    const formatTestResultValue = (test) => {
      const result = getTestResultPayload(test);
      if (!result) return "Pending";
      if (result.value !== void 0 && result.value !== null) return result.value;
      if (result.value_numeric !== void 0 && result.value_numeric !== null) return result.value_numeric;
      if (result.value_text) return result.value_text;
      if (result.value_coded_name) return result.value_coded_name;
      if (result.value_coded) return result.value_coded;
      if (result.value_boolean !== void 0) return result.value_boolean ? "Yes" : "No";
      return result.value_modifier || result?.value?.toString() || "-";
    };
    const isTestPending = (test) => {
      return !test?.result || test.result.length === 0;
    };
    const buildPendingTestPayload = (order, specificTest) => {
      const pendingTest = specificTest || order.tests.find((test) => !test?.result || test.result.length === 0);
      if (!pendingTest) return null;
      return {
        ...order,
        tests: [{ ...pendingTest }]
      };
    };
    const openAddResultModal = async (order, specificTest) => {
      const payload = buildPendingTestPayload(order, specificTest);
      if (!payload) return;
      try {
        await createModal(_sfc_main$6, { class: "large-medium-width-modal" }, true, { test_data: payload });
      } finally {
        await refreshInvestigations();
      }
    };
    const openResultsDialog = async (test) => {
      if (!test?.result?.length) return;
      const payload = {
        ...test,
        name: test.name || test.test_name || "Test"
      };
      await createModal(NeonatalLabResultsModal, { class: "large-medium-width-modal" }, true, { content: payload });
    };
    const openOrderResults = async (order) => {
      if (!order?.tests?.length) return;
      const testWithResults = order.tests.find((test) => {
        if (!test?.result) return false;
        if (Array.isArray(test.result)) return test.result.length > 0;
        return true;
      });
      if (!testWithResults) return;
      await openResultsDialog(testWithResults);
    };
    const getAdditionalResultsCount = (test) => {
      if (!test?.result) return 0;
      return Array.isArray(test.result) ? Math.max(test.result.length - 1, 0) : 0;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$2, [
        createBaseVNode("header", _hoisted_2$2, [
          _cache[3] || (_cache[3] = createBaseVNode("div", null, [
            createBaseVNode("h2", { class: "investigation-results-tab__title" }, "Laboratory Investigations"),
            createBaseVNode("p", { class: "investigation-results-tab__subtitle" }, "Complete history of laboratory tests and results.")
          ], -1)),
          createBaseVNode("div", _hoisted_3$2, [
            isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_4$2, "Refreshing…")) : createCommentVNode("", true),
            createVNode(unref(IonButton), {
              fill: "outline",
              size: "small",
              onClick: _cache[0] || (_cache[0] = ($event) => openInvestigationFlow()),
              class: "make-investigation-btn",
              disabled: isLoading.value || isCheckingWorkflow.value || !hasWorkflowInvestigation.value
            }, {
              default: withCtx(() => [
                createVNode(unref(IonIcon), {
                  icon: unref(arrowForward),
                  slot: "end",
                  class: "make-investigation-icon"
                }, null, 8, ["icon"]),
                _cache[2] || (_cache[2] = createTextVNode(" Make an Investigation ", -1))
              ]),
              _: 1
            }, 8, ["disabled"]),
            createVNode(unref(IonButton), {
              fill: "clear",
              size: "small",
              class: "investigation-refresh-btn",
              disabled: isLoading.value || !patientIdentifier.value,
              onClick: _cache[1] || (_cache[1] = ($event) => refreshInvestigations()),
              title: "Refresh Investigations"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonIcon), {
                  icon: unref(reloadOutline),
                  slot: "icon-only",
                  class: normalizeClass({ "spin-anim": isLoading.value })
                }, null, 8, ["icon", "class"])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(skeletonCount, (index) => {
            return createBaseVNode("article", {
              key: `skeleton-${index}`,
              class: "skeleton-card"
            }, [
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "skeleton-row skeleton-title shimmer" }, null, -1)),
              (openBlock(), createElementBlock(Fragment, null, renderList(3, (line) => {
                return createBaseVNode("div", {
                  class: "skeleton-row shimmer",
                  key: `line-${index}-${line}`
                });
              }), 64))
            ]);
          }), 64))
        ])) : !hasEncounters.value ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
          !hasWorkflowInvestigation.value ? (openBlock(), createElementBlock("span", _hoisted_7$2, " Please complete the clinical review workflow first before adding more investigations. ")) : (openBlock(), createElementBlock("span", _hoisted_8$2, " No completed investigation encounters recorded yet. "))
        ])) : (openBlock(), createElementBlock("div", _hoisted_9$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(orderedLabOrders.value, (order) => {
            return openBlock(), createElementBlock("article", {
              key: `order-${order.order_id || order.id}`,
              class: "encounter-card",
              role: "button",
              tabindex: "0",
              onClick: ($event) => openOrderResults(order),
              onKeydown: [
                withKeys(withModifiers(($event) => openOrderResults(order), ["prevent"]), ["enter"]),
                withKeys(withModifiers(($event) => openOrderResults(order), ["prevent"]), ["space"])
              ]
            }, [
              createBaseVNode("header", _hoisted_11$2, [
                createBaseVNode("div", null, [
                  createBaseVNode("p", _hoisted_12$2, toDisplayString(formatOrderDate(order)), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_13$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(order.tests ?? [], (test) => {
                  return openBlock(), createElementBlock("div", {
                    key: `test-${test.id || test.name}`,
                    class: "observation-row"
                  }, [
                    createBaseVNode("span", _hoisted_14$2, toDisplayString(test.name || test.test_name || "Test"), 1),
                    createBaseVNode("span", _hoisted_15$2, [
                      isTestPending(test) ? (openBlock(), createBlock(unref(IonButton), {
                        key: 0,
                        fill: "solid",
                        size: "small",
                        class: "encounter-card__add-result-btn",
                        disabled: isLoading.value,
                        onClick: withModifiers(($event) => openAddResultModal(order, test), ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(add),
                            slot: "start"
                          }, null, 8, ["icon"]),
                          _cache[5] || (_cache[5] = createTextVNode(" Enter Result ", -1))
                        ]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : (openBlock(), createElementBlock("span", _hoisted_16$1, toDisplayString(formatTestResultValue(test)), 1)),
                      getAdditionalResultsCount(test) > 0 ? (openBlock(), createElementBlock("span", {
                        key: 2,
                        class: "observation-row__extra",
                        role: "button",
                        tabindex: "0",
                        onClick: withModifiers(($event) => openResultsDialog(test), ["stop"]),
                        onKeydown: [
                          withKeys(withModifiers(($event) => openResultsDialog(test), ["prevent", "stop"]), ["enter"]),
                          withKeys(withModifiers(($event) => openResultsDialog(test), ["prevent", "stop"]), ["space"])
                        ]
                      }, " +" + toDisplayString(getAdditionalResultsCount(test)) + " more ", 41, _hoisted_17$1)) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128))
              ])
            ], 40, _hoisted_10$2);
          }), 128))
        ]))
      ]);
    };
  }
});

const InvestigationTab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8da919d8"]]);

const _hoisted_1$1 = { class: "clinical-notes-tab" };
const _hoisted_2$1 = { class: "notes-header" };
const _hoisted_3$1 = { class: "actions" };
const _hoisted_4$1 = {
  key: 0,
  class: "loader-text"
};
const _hoisted_5$1 = {
  key: 0,
  class: "skeleton-wrapper"
};
const _hoisted_6$1 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_7$1 = { class: "empty-icon-wrapper" };
const _hoisted_8$1 = {
  key: 2,
  class: "tiles-grid"
};
const _hoisted_9$1 = ["onClick"];
const _hoisted_10$1 = { class: "tile-title-wrapper" };
const _hoisted_11$1 = { class: "tile-title" };
const _hoisted_12$1 = {
  key: 0,
  class: "tile-date"
};
const _hoisted_13$1 = { class: "tile-body-inner" };
const _hoisted_14$1 = {
  key: 0,
  class: "no-observations"
};
const _hoisted_15$1 = { class: "obs-concept" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ClinicalNotesTab",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isLoading = ref(true);
    const expandedGroups = ref({});
    const reportData = ref(null);
    const val = (v) => {
      if (v === void 0 || v === null || v === "") return "N/A";
      if (Array.isArray(v)) return v.length ? v.join(", ") : "N/A";
      if (typeof v === "object" && v !== null) {
        const s = String(v.label || v.name || v.value || "").trim();
        return s || "N/A";
      }
      const valString = String(v).trim();
      if (valString.includes("=>") || valString.includes("{")) {
        if (valString.includes('=>"M"') || valString.includes("=>'M'")) return "Male (M)";
        if (valString.includes('=>"F"') || valString.includes("=>'F'")) return "Female (F)";
        if (valString.toLowerCase().includes("male") && !valString.toLowerCase().includes("female")) return "Male";
        if (valString.toLowerCase().includes("female")) return "Female";
      }
      return valString || "N/A";
    };
    const formatGender = (genderVal) => {
      const parsed = val(genderVal);
      if (parsed === "N/A") return parsed;
      if (parsed === "Male (M)" || parsed === "Female (F)") return parsed;
      const lower = parsed.toLowerCase();
      if (lower === "m" || lower === "male") return "Male (M)";
      if (lower === "f" || lower === "female") return "Female (F)";
      return parsed;
    };
    const formatEncounterDate = (dateStr) => {
      try {
        if (!dateStr || String(dateStr).trim() === "N/A") return "";
        return HisDate.toStandardHisDisplayFormat(dateStr);
      } catch {
        return new Date(dateStr).toLocaleString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
      }
    };
    const groupedEncounters = computed(() => {
      if (!reportData.value) return [];
      const r = reportData.value;
      const sections = [];
      sections.push({
        id: "registration",
        config: { title: "Neonatal Registration", icon: personOutline, color: "#10b981" },
        datetime: r.enrollmentData?.dateEnrolled || r.enrollmentData?.date_created,
        observations: [
          { conceptName: "Full Name", value: val(r.patientInfo?.fullName) },
          { conceptName: "NPID", value: val(r.patientInfo?.npid) },
          { conceptName: "Gender", value: formatGender(r.patientInfo?.gender) },
          { conceptName: "DOB", value: val(r.patientInfo?.dob) },
          { conceptName: "Age", value: val(r.patientInfo?.age) },
          { conceptName: "Current Address", value: val(r.patientInfo?.currentAddress) },
          { conceptName: "Home Address", value: val(r.patientInfo?.homeAddress) },
          { conceptName: "Religion", value: val(r.patientInfo?.religion) },
          { conceptName: "Occupation", value: val(r.patientInfo?.occupation) },
          { conceptName: "Education", value: val(r.patientInfo?.education) },
          { conceptName: "Marital Status", value: val(r.patientInfo?.maritalStatus) },
          { conceptName: "Admitted from", value: val(r.enrollmentData?.admittedFrom) },
          { conceptName: "Referred from", value: val(r.enrollmentData?.referredFrom) },
          { conceptName: "Transport mode", value: val(r.enrollmentData?.modeOfTransport) }
        ].filter((o) => o.value !== "N/A")
      });
      if (r.enrollmentData) {
        sections.push({
          id: "mother",
          config: { title: "Mother's Details", icon: femaleOutline, color: "#8b5cf6" },
          observations: [
            { conceptName: "Mother Name", value: val(r.enrollmentData.motherName) },
            { conceptName: "Mother NPID", value: val(r.enrollmentData.motherNationalId) },
            { conceptName: "HIV Status", value: val(r.enrollmentData.motherHivStatus) },
            { conceptName: "Last HIV Test", value: val(r.enrollmentData.lastHivTestDate) },
            { conceptName: "VDRL Result", value: val(r.enrollmentData.motherVdrlResult) },
            { conceptName: "Hepatitis Result", value: val(r.enrollmentData.motherHepatitisResult) },
            { conceptName: "Tetanus/Diphtheria", value: val(r.enrollmentData.tetanusDiphtheria) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.enrollmentData) {
        sections.push({
          id: "birth_delivery",
          config: { title: "Birth & Delivery Details", icon: medicalOutline, color: "#06b6d4" },
          observations: [
            { conceptName: "Mode of Delivery", value: val(r.enrollmentData.modeOfDelivery) },
            { conceptName: "Place of Birth", value: val(r.enrollmentData.placeOfBirth) },
            { conceptName: "Birth Facility", value: val(r.enrollmentData.nameOfBirthFacility) },
            { conceptName: "Birth Weight (g)", value: val(r.enrollmentData.birthWeight) },
            { conceptName: "Gestation (weeks)", value: val(r.enrollmentData.gestationWeeks) },
            {
              conceptName: "APGAR (1/5/10m)",
              value: `${val(r.enrollmentData.apgarScoreAt1)} / ${val(r.enrollmentData.apgarScoreAt5)} / ${val(
                r.enrollmentData.apgarScoreAt10
              )}`.replace(/N\/A \/ N\/A \/ N\/A/g, "N/A")
            },
            { conceptName: "Resuscitation", value: val(r.enrollmentData.resuscitationMethods) },
            { conceptName: "Rupture of Membranes", value: val(r.enrollmentData.ruptureOfMembranes) },
            { conceptName: "Duration of ROM", value: val(r.enrollmentData.durationOfRuptureMembranes) },
            { conceptName: "Offensive Liquor", value: val(r.enrollmentData.offensiveLiquor) },
            { conceptName: "Meconium Present", value: val(r.enrollmentData.meconiumPresent) },
            { conceptName: "Maternal Steroids", value: val(r.enrollmentData.steroidsGiven) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.triageData) {
        sections.push({
          id: "triage",
          config: { title: "Triage & Emergency", icon: alertCircleOutline, color: "#ef4444" },
          observations: [
            { conceptName: "Emergency Signs", value: val(r.triageData.emergency_signs) },
            { conceptName: "Priority Signs", value: val(r.triageData.priority_signs) },
            { conceptName: "Presenting Complaints", value: val(r.triageData.presenting_complaints) },
            { conceptName: "Breathing", value: val(r.triageData.breathing) },
            { conceptName: "Crying", value: val(r.triageData.crying) },
            { conceptName: "Central Cyanosis", value: val(r.triageData.central_cyanosis) },
            { conceptName: "Referral Status", value: val(r.triageData.referral_required) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.vitalsData) {
        sections.push({
          id: "vitals",
          config: { title: "Vital Signs History", icon: heartOutline, color: "#f43f5e" },
          observations: [
            { conceptName: "Current Weight (g)", value: val(r.vitalsData.current_weight) },
            { conceptName: "Temperature (°C)", value: val(r.vitalsData.temperature) },
            { conceptName: "Heart Rate (bpm)", value: val(r.vitalsData.heart_rate) },
            { conceptName: "Resp Rate (cpm)", value: val(r.vitalsData.respiratory_rate) },
            { conceptName: "Oxygen Sat (%)", value: val(r.vitalsData.oxygen_saturation) },
            { conceptName: "Blood Sugar", value: val(r.vitalsData.blood_sugar) },
            { conceptName: "Head Circ (cm)", value: val(r.vitalsData.head_circumference) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.signsSymptomsData) {
        sections.push({
          id: "symptoms",
          config: { title: "Symptomatic Assessment", icon: pulseOutline, color: "#f59e0b" },
          observations: [
            { conceptName: "Presenting Complaints", value: val(r.signsSymptomsData.presenting_complaints) },
            { conceptName: "Onset Timing", value: val(r.signsSymptomsData.symptom_onset_time) },
            { conceptName: "Severity", value: val(r.signsSymptomsData.symptom_severity) },
            { conceptName: "Re-admission", value: val(r.signsSymptomsData.is_readmission) },
            { conceptName: "Clinical Notes", value: val(r.signsSymptomsData.detailed_assessment_notes) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.generalExamData) {
        sections.push({
          id: "phys_exam",
          config: { title: "General Examination", icon: medkitOutline, color: "#10b981" },
          observations: [
            { conceptName: "Activity Level", value: val(r.generalExamData.activityAssessment) },
            { conceptName: "Fontanelle", value: val(r.generalExamData.fontanelleAssessment) },
            { conceptName: "Head/Mass", value: val(r.generalExamData.massInHeadAssessment) },
            { conceptName: "Jaundice (Yellow)", value: val(r.generalExamData.isBabyYellow) },
            { conceptName: "Pallor", value: val(r.generalExamData.isBabyPallorPink) },
            { conceptName: "Cyanosis", value: val(r.generalExamData.hasBabyCyanosis) },
            { conceptName: "Edema", value: val(r.generalExamData.hasBabyOedema) },
            { conceptName: "CRT (sec)", value: val(r.generalExamData.capillaryRefillTime) },
            { conceptName: "Congenital Abn", value: val(r.generalExamData.hasCongenitalAbnormalities) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.systemicExamData) {
        sections.push({
          id: "systemic",
          config: { title: "Systemic Review", icon: scanOutline, color: "#0ea5e9" },
          observations: [
            { conceptName: "General Condition", value: val(r.systemicExamData.general_condition) },
            { conceptName: "Color", value: val(r.systemicExamData.color) },
            { conceptName: "Resp Distress", value: val(r.systemicExamData.respiratory_distress) },
            { conceptName: "Lung Sounds", value: val(r.systemicExamData.lung_sounds) },
            { conceptName: "Heart Sounds", value: val(r.systemicExamData.heart_sounds) },
            { conceptName: "Abdomen Findings", value: val(r.systemicExamData.abdomen_findings) },
            { conceptName: "Genitalia", value: val(r.systemicExamData.genitalia_findings) },
            { conceptName: "Muscle Tone", value: val(r.systemicExamData.tone) },
            { conceptName: "Skin Findings", value: val(r.systemicExamData.skin_findings) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.reviewOfSystemsData) {
        sections.push({
          id: "feeding",
          config: { title: "Feeding & Nutrition", icon: restaurantOutline, color: "#f97316" },
          observations: [
            { conceptName: "Feed Type", value: val(r.reviewOfSystemsData.type_of_feed) },
            { conceptName: "Feed Mode", value: val(r.reviewOfSystemsData.mode_of_feeding) },
            { conceptName: "Frequency", value: val(r.reviewOfSystemsData.frequency_of_feeding) },
            { conceptName: "Effort", value: val(r.reviewOfSystemsData.feeding_effort) },
            { conceptName: "Vomiting", value: val(r.reviewOfSystemsData.vomiting) },
            { conceptName: "Weight Trend", value: val(r.reviewOfSystemsData.weight_trend) },
            { conceptName: "Sucking Reflex", value: val(r.reviewOfSystemsData.sucking_reflex) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.investigationsData?.length) {
        sections.push({
          id: "labs",
          config: { title: "Lab Investigations", icon: flaskOutline, color: "#6366f1" },
          observations: r.investigationsData.map((inv) => ({
            conceptName: inv.tests,
            value: `${inv.results} (${inv.date})`
          })).filter((o) => o.value !== "N/A (N/A)")
        });
      }
      if (r.diagnosisData) {
        sections.push({
          id: "diagnosis",
          config: { title: "Diagnosis & Impression", icon: thermometerOutline, color: "#14b8a6" },
          observations: [
            { conceptName: "Working Diagnosis", value: val(r.diagnosisData.workingDiagnosis?.label) },
            { conceptName: "Differential", value: val(r.diagnosisData.differentialDiagnoses?.map((d) => d.label)) },
            { conceptName: "Clinical Notes", value: val(r.diagnosisData.diagnosisNotes) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.treatmentPlanData) {
        sections.push({
          id: "management",
          config: { title: "Management Plan", icon: bandageOutline, color: "#ec4899" },
          observations: [
            { conceptName: "Medications", value: val(r.treatmentPlanData.nonPharmacological?.prescription?.map((p) => p.drugName)) },
            { conceptName: "Oxygen Therapy", value: val(r.treatmentPlanData.pharmacological?.oxygenTherapyDetails) },
            { conceptName: "Thermal Care", value: val(r.treatmentPlanData.pharmacological?.thermalCareDetails) },
            { conceptName: "Feeding Support", value: val(r.treatmentPlanData.pharmacological?.feedingSupportDetails) },
            { conceptName: "Treatments", value: val(r.treatmentPlanData.pharmacological?.treatments) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      if (r.finalClinicalReviewOutcomesData) {
        sections.push({
          id: "outcomes",
          config: { title: "Outcomes & Sign-off", icon: flagOutline, color: "#22c55e" },
          observations: [
            { conceptName: "Final Outcome", value: val(r.finalClinicalReviewOutcomesData.clinicalReviewOutcome) },
            { conceptName: "Safeguard Concerns", value: val(r.finalClinicalReviewOutcomesData.safeguardConcerns) },
            {
              conceptName: "Sign-off Date",
              value: r.finalClinicalReviewOutcomesData.signOffDate ? new Date(r.finalClinicalReviewOutcomesData.signOffDate).toLocaleDateString() : "N/A"
            },
            { conceptName: "Healthcare Worker", value: val(r.finalClinicalReviewOutcomesData.healthcareWorkerId) },
            { conceptName: "Role", value: val(r.finalClinicalReviewOutcomesData.userRole) }
          ].filter((o) => o.value !== "N/A")
        });
      }
      return sections.filter((s) => s.observations.length > 0);
    });
    const toggleGroup = (id) => {
      expandedGroups.value[id] = !expandedGroups.value[id];
    };
    const getValueClass = (value) => {
      if (!value) return "";
      const lower = value.toLowerCase();
      if (lower.includes("yes") || lower.includes("normal") || lower.includes("healthy") || lower.includes("stable") || lower.includes("none"))
        return "value-positive";
      if (lower.includes("abnormal") || lower.includes("high") || lower.includes("danger") || lower.includes("immediate") || lower.includes("fast") || lower.includes("low") || lower.includes("referral"))
        return "value-negative";
      return "";
    };
    const loadEncounters = async (forceRefresh = false) => {
      const pId = patient.value?.patientID || patient.value?.patient_id;
      if (!pId) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      try {
        reportData.value = await NeonatalReportService.getClinicalReviewReportData(pId, forceRefresh);
        if (groupedEncounters.value.length > 0) {
          expandedGroups.value = {};
          const recent = groupedEncounters.value[0];
          if (recent) expandedGroups.value[recent.id] = true;
        }
      } catch (error) {
        console.error("Failed to load clinical encounters:", error);
      } finally {
        isLoading.value = false;
      }
    };
    watch(() => patient.value?.patientID, loadEncounters);
    onMounted(() => {
      loadEncounters(true);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("header", _hoisted_2$1, [
          _cache[2] || (_cache[2] = createBaseVNode("div", null, [
            createBaseVNode("h2", { class: "title" }, "Clinical Health Card"),
            createBaseVNode("p", { class: "subtitle" }, "Complete timeline of patient's clinical review and outcomes.")
          ], -1)),
          createBaseVNode("div", _hoisted_3$1, [
            isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_4$1, "Refreshing…")) : createCommentVNode("", true),
            createVNode(unref(IonButton), {
              fill: "clear",
              size: "small",
              class: "refresh-btn",
              disabled: isLoading.value,
              onClick: _cache[0] || (_cache[0] = ($event) => loadEncounters(true)),
              title: "Refresh Health Card"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonIcon), {
                  icon: unref(reloadOutline),
                  slot: "icon-only",
                  class: normalizeClass({ "spin-anim": isLoading.value })
                }, null, 8, ["icon", "class"])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
            return createBaseVNode("div", {
              class: "skeleton-card shimmer",
              key: `skel-${i}`
            });
          }), 64))
        ])) : !groupedEncounters.value.length ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(unref(IonIcon), {
              icon: unref(documentTextOutline),
              class: "empty-icon"
            }, null, 8, ["icon"])
          ]),
          _cache[3] || (_cache[3] = createBaseVNode("h3", null, "No Clinical Records Found", -1)),
          _cache[4] || (_cache[4] = createBaseVNode("p", null, "The clinical review workflow has not been started or saved yet.", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_8$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(groupedEncounters.value, (group, index) => {
            return openBlock(), createElementBlock("div", {
              key: group.id,
              class: normalizeClass(["encounter-tile", { "is-expanded": expandedGroups.value[group.id] }]),
              onClick: ($event) => toggleGroup(group.id),
              style: normalizeStyle({ animationDelay: `${index * 0.05}s` })
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["tile-header", { "header-expanded": expandedGroups.value[group.id] }])
              }, [
                createBaseVNode("div", {
                  class: "tile-icon-wrapper",
                  style: normalizeStyle({
                    backgroundColor: expandedGroups.value[group.id] ? group.config.color : `${group.config.color}15`,
                    color: expandedGroups.value[group.id] ? "#fff" : group.config.color
                  })
                }, [
                  createVNode(unref(IonIcon), {
                    icon: group.config.icon,
                    class: "tile-icon"
                  }, null, 8, ["icon"])
                ], 4),
                createBaseVNode("div", _hoisted_10$1, [
                  createBaseVNode("h4", _hoisted_11$1, toDisplayString(group.config.title), 1),
                  group.datetime ? (openBlock(), createElementBlock("span", _hoisted_12$1, toDisplayString(formatEncounterDate(group.datetime)), 1)) : createCommentVNode("", true)
                ]),
                createVNode(unref(IonIcon), {
                  icon: unref(chevronDownOutline),
                  class: normalizeClass(["expand-icon", { expanded: expandedGroups.value[group.id] }])
                }, null, 8, ["icon", "class"])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(["tile-body", { "body-expanded": expandedGroups.value[group.id] }])
              }, [
                createBaseVNode("div", _hoisted_13$1, [
                  !group.observations.length ? (openBlock(), createElementBlock("div", _hoisted_14$1, "No detailed observations recorded.")) : (openBlock(), createElementBlock("ul", {
                    key: 1,
                    class: "observation-list",
                    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                    }, ["stop"]))
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(group.observations, (obs, oIdx) => {
                      return openBlock(), createElementBlock("li", {
                        key: oIdx,
                        class: "observation-row"
                      }, [
                        createBaseVNode("span", _hoisted_15$1, toDisplayString(obs.conceptName), 1),
                        createBaseVNode("span", {
                          class: normalizeClass(["obs-value", getValueClass(obs.value)])
                        }, toDisplayString(obs.value), 3)
                      ]);
                    }), 128))
                  ]))
                ])
              ], 2)
            ], 14, _hoisted_9$1);
          }), 128))
        ]))
      ]);
    };
  }
});

const ClinicalNotesTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-743bd634"]]);

const useNeonatalPatientProfileStore = defineStore("neonatalPatientProfile", () => {
  const customOutcomeLabel = ref("");
  const selectedStatus = ref(0);
  const referrals = ref([]);
  const orders = ref([]);
  const results = ref([]);
  const checkUnderSixWeeks = ref(false);
  const checkAge = (patient) => {
    if (!lodashExports.isEmpty(patient?.personInformation?.birthdate)) {
      const ageInDays = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.personInformation.birthdate);
      checkUnderSixWeeks.value = ageInDays >= 0 && ageInDays < 42;
    } else {
      checkUnderSixWeeks.value = false;
    }
  };
  const getLabResults = async (patient) => {
    try {
      const lab = await LabOrderService.getLabResults(patient);
      results.value = lab?.results || [];
    } catch (error) {
      console.error("Error fetching lab results:", error);
      results.value = [];
    }
  };
  const getReferrals = async () => {
    try {
      const data = await ObservationService.getObsByEncounterId(EncounterTypeId.REFERRAL);
      referrals.value = data[0]?.obs || [];
    } catch (error) {
      console.error("Error fetching referrals:", error);
      referrals.value = [];
    }
  };
  const getReferralTests = async (patientId) => {
    try {
      orders.value = await Service.getJson("/hts_referral_orders", { patient_id: patientId, filter_by_lab_result: true });
    } catch (error) {
      console.error("Error fetching referral tests:", error);
      orders.value = [];
    }
  };
  const fetchExistingOutcome = async (patientId) => {
    try {
      if (!patientId) return;
      const allEncounters = await EncounterService.getEncounters(patientId);
      const savedResponse = await NeonatalService.getSavedEncounters(patientId);
      const normalizeName = (name) => (name || "").toUpperCase().trim();
      const allNames = Array.isArray(allEncounters) ? allEncounters.map((e) => normalizeName(e.type?.name || e.encounter_type_name)) : [];
      const savedNames = Array.isArray(savedResponse?.encounters) ? savedResponse.encounters.map(normalizeName) : [];
      const combinedNames = [.../* @__PURE__ */ new Set([...allNames, ...savedNames])];
      if (combinedNames.includes("NEONATAL DISCHARGE") || combinedNames.includes("DISCHARGE")) {
        customOutcomeLabel.value = "Discharged";
        selectedStatus.value = 6;
        return;
      }
      const hasOutcomeEncounter = combinedNames.some(
        (n) => ["NEONATAL CLINICAL REVIEW OUTCOMES", "ADMISSION OUTCOMES", "CLINICAL REVIEW OUTCOMES", "NEONATAL ADMISSION OUTCOMES"].includes(n)
      );
      if (hasOutcomeEncounter) {
        try {
          const obs = await ObservationService.getFirstObs(patientId, "Clinical review outcome", "", false);
          if (obs && obs.length > 0) {
            const firstObs = obs[0];
            let outcomeLabel = firstObs.value_coded_name || firstObs.value_text;
            if (!outcomeLabel && typeof firstObs.value_coded === "number") {
              outcomeLabel = await ConceptService.getConceptName(firstObs.value_coded);
            }
            if (outcomeLabel) {
              customOutcomeLabel.value = outcomeLabel;
              return;
            }
          }
        } catch (e) {
          console.warn("Failed to fetch exact clinical review outcome", e);
        }
        customOutcomeLabel.value = "Outcome Pending";
        return;
      }
      const workflowNames = combinedNames.filter(
        (n) => n && !["NEONATAL ENROLLMENT", "NEONATAL ENROLMENT", "ENROLLMENT", "ENROLMENT", "PATIENT REGISTRATION", "REGISTRATION"].includes(n)
      );
      if (workflowNames.length === 0) {
        customOutcomeLabel.value = "Registered";
        selectedStatus.value = 8;
        return;
      }
      const triageNames = ["NEONATAL TRIAGE", "TRIAGE", "NEONATAL EMERGENCY TRIAGE"];
      const hasTriage = workflowNames.some((n) => triageNames.includes(n));
      const postTriageNames = workflowNames.filter((n) => !triageNames.includes(n));
      if (postTriageNames.length === 0 && hasTriage) {
        customOutcomeLabel.value = "Triaged";
        return;
      }
      if (workflowNames.includes("LAB ORDERS") || workflowNames.includes("LAB RESULTS")) {
        customOutcomeLabel.value = "Investigations";
        return;
      }
      customOutcomeLabel.value = "In Review";
    } catch (error) {
      console.error("Error fetching existing outcome", error);
      customOutcomeLabel.value = "";
      selectedStatus.value = 0;
    }
  };
  const validateReportGeneration = async (patientId, type) => {
    try {
      const response = await NeonatalService.getSavedEncounters(patientId);
      const specializedEncounters = Array.isArray(response?.encounters) ? response.encounters : [];
      const allEncounters = await EncounterService.getEncounters(patientId);
      const generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
      const combined = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
      if (type === "clinical") {
        const steps = [
          { encounterNames: ["NEONATAL SIGNS & SYMPTOMS", "NEONATAL SIGNS SYMPTOMS"] },
          { encounterNames: ["NEONATAL REVIEW OF SYSTEMS"] },
          { encounterNames: ["PHYSICAL EXAMINATION BABY", "NEONATAL GENERAL EXAMINATION"] },
          { encounterNames: ["VITALS", "NEONATAL VITALS"] },
          { encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"] }
        ];
        const normalizedEncounters = combined.map((e) => e.toUpperCase().trim());
        const hasTriage = normalizedEncounters.some((e) => ["NEONATAL TRIAGE", "TRIAGE", "NEONATAL EMERGENCY TRIAGE"].includes(e));
        const completedCount = getSequentiallyCompletedStepCount(combined, steps);
        const hasOutcome = normalizedEncounters.some(
          (e) => ["NEONATAL ADMISSION OUTCOMES", "NEONATAL CLINICAL REVIEW OUTCOMES", "ADMISSION OUTCOMES", "CLINICAL REVIEW OUTCOMES"].includes(e)
        );
        if (!hasTriage || completedCount < steps.length || !hasOutcome) {
          return { valid: false, workflow: "Clinical Review" };
        }
        return { valid: true, route: { name: "neonatalClinicalReviewSignoff", query: { showReport: "true" } } };
      } else {
        const hasDischarge = combined.some((e) => e.toUpperCase().trim() === "NEONATAL DISCHARGE");
        if (!hasDischarge) {
          return { valid: false, workflow: "Discharge" };
        }
        return { valid: true, route: { name: "neonatalDischarge", query: { showReport: "true" } } };
      }
    } catch (error) {
      console.error("Error checking workflow completeness:", error);
      throw error;
    }
  };
  const outcomeStatusLabel = computed(() => {
    if (customOutcomeLabel.value) return customOutcomeLabel.value;
    switch (selectedStatus.value) {
      case 8:
        return "Enrolled";
      case 7:
        return "Admitted";
      case 6:
        return "Discharged";
      case 3:
        return "Died";
      default:
        return "Unknown";
    }
  });
  const outcomeStatusClass = computed(() => {
    if (customOutcomeLabel.value) {
      const label = customOutcomeLabel.value.toLowerCase();
      if (label === "registered") return "status-enrolled";
      if (label === "triaged") return "status-enrolled";
      if (label === "in review") return "status-admitted";
      if (label === "investigations") return "status-admitted";
      if (label.includes("discharge")) return "status-discharged";
      if (label.includes("died")) return "status-died";
      if (label.includes("admit")) return "status-admitted";
      return "status-enrolled";
    }
    switch (selectedStatus.value) {
      case 8:
        return "status-enrolled";
      case 7:
        return "status-admitted";
      case 6:
        return "status-discharged";
      case 3:
        return "status-died";
      default:
        return "status-unknown";
    }
  });
  const loadPatientData = async (patient) => {
    if (!patient?.patientID) return;
    checkAge(patient);
    await Promise.all([getLabResults(patient), getReferralTests(patient.patientID), fetchExistingOutcome(patient.patientID), getReferrals()]);
  };
  const isNeonate = (patient) => {
    if (!patient?.personInformation?.birthdate) {
      return false;
    }
    const ageInDays = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.personInformation.birthdate);
    return ageInDays >= 0 && ageInDays <= 42;
  };
  const getAge = (dateOfBirth) => {
    if (!dateOfBirth) return "Unknown";
    try {
      const formattedBirthdate = HisDate.toStandardHisFormat(dateOfBirth);
      const displayAge = HisDate.calculateDisplayAge(formattedBirthdate);
      if (displayAge === "0 days") {
        const birthDate = new Date(dateOfBirth);
        const now = /* @__PURE__ */ new Date();
        const diffMs = now.getTime() - birthDate.getTime();
        const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
        if (diffHours < 1) {
          const diffMinutes = Math.floor(diffMs / (1e3 * 60));
          return diffMinutes <= 0 ? "Just born" : `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""}`;
        }
        return `${diffHours} hour${diffHours !== 1 ? "s" : ""}`;
      }
      return displayAge;
    } catch (error) {
      console.warn("[NeonatalPatientProfile] Error calculating age:", error);
      return "0 days";
    }
  };
  const isChild = () => {
    const patientService = new PatientService();
    return patientService.isUnderFive();
  };
  const formatBirthdate = (patient) => {
    return HisDate.toStandardHisDisplayFormat(patient?.personInformation?.birthdate);
  };
  return {
    customOutcomeLabel,
    selectedStatus,
    referrals,
    orders,
    results,
    checkUnderSixWeeks,
    checkAge,
    getLabResults,
    getReferrals,
    getReferralTests,
    fetchExistingOutcome,
    validateReportGeneration,
    outcomeStatusLabel,
    outcomeStatusClass,
    loadPatientData,
    isNeonate,
    getAge,
    isChild,
    formatBirthdate
  };
});

const _hoisted_1 = { class: "profile-container" };
const _hoisted_2 = { class: "profile-wrapper" };
const _hoisted_3 = { class: "demographics-card" };
const _hoisted_4 = { class: "profile-content" };
const _hoisted_5 = { class: "avatar-section" };
const _hoisted_6 = { class: "info-section" };
const _hoisted_7 = { class: "name-row" };
const _hoisted_8 = { class: "patient-name" };
const _hoisted_9 = { class: "name-line" };
const _hoisted_10 = { class: "name-line" };
const _hoisted_11 = { class: "meta-row" };
const _hoisted_12 = { class: "meta-item" };
const _hoisted_13 = { class: "meta-item" };
const _hoisted_14 = { class: "meta-item" };
const _hoisted_15 = {
  key: 0,
  class: "detail-row"
};
const _hoisted_16 = { class: "field-value scrollable-address" };
const _hoisted_17 = { class: "detail-row" };
const _hoisted_18 = { class: "field-value" };
const _hoisted_19 = { class: "detail-row" };
const _hoisted_20 = { class: "graphSection" };
const _hoisted_21 = { class: "tabs-control" };
const _hoisted_22 = { class: "tab-button-content" };
const _hoisted_23 = { class: "tab-button-content" };
const _hoisted_24 = { class: "tab-button-content" };
const _hoisted_25 = { class: "tabs-content" };
const _hoisted_26 = { slot: "content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalPatientProfile",
  setup(__props) {
    const router = useRouter();
    const profileStore = useNeonatalPatientProfileStore();
    const { checkUnderSixWeeks, outcomeStatusLabel, outcomeStatusClass } = storeToRefs(profileStore);
    const { event, popoverOpen, openPopover, openPIM, printID, formatCurrentAddress } = usePatientProfile();
    const activeTab = ref("weight-height");
    const refreshCounter = ref(0);
    const segmentRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const handleMenuAction = (action) => {
      popoverOpen.value = false;
      action();
    };
    const generateReport = async (type) => {
      handleMenuAction(async () => {
        if (!patient.value?.patientID) return;
        try {
          const validationResult = await profileStore.validateReportGeneration(patient.value.patientID, type);
          if (!validationResult.valid) {
            await showIncompleteWorkflowAlert(validationResult.workflow);
            return;
          }
          if (validationResult.route) {
            router.push(validationResult.route);
          }
        } catch (error) {
          console.error("Error generating report:", error);
        }
      });
    };
    const showIncompleteWorkflowAlert = async (workflow) => {
      await alertConfirmation(`The ${workflow} workflow is incomplete. Please complete all required steps before trying to generate the report.`, {
        header: "Incomplete Workflow",
        confirmBtnLabel: "OK"
      });
    };
    watch(activeTab, () => {
      scrollToActiveTab();
    });
    const scrollToActiveTab = () => {
      setTimeout(() => {
        const el = segmentRef.value?.$el || segmentRef.value;
        if (!el) return;
        const allButtons = Array.from(el.querySelectorAll("ion-segment-button"));
        const activeBtn = allButtons.find((btn) => btn.value === activeTab.value);
        const container = el.closest(".tabs-control");
        if (activeBtn && container) {
          const containerWidth = container.clientWidth;
          const btnOffset = activeBtn.offsetLeft;
          const btnWidth = activeBtn.offsetWidth;
          const scrollAmount = btnOffset - containerWidth / 2 + btnWidth / 2;
          container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
          });
        }
      }, 200);
    };
    watch(
      () => patient.value?.patientID,
      async (newPatientId, oldPatientId) => {
        if (newPatientId && newPatientId !== oldPatientId) {
          await profileStore.loadPatientData(patient.value);
        }
      }
    );
    onMounted(async () => {
      if (patient.value) {
        await profileStore.loadPatientData(patient.value);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", {
                  class: normalizeClass(["avatar-box", unref(patient)?.personInformation?.gender == "M" ? "male-avatar" : "female-avatar"])
                }, [
                  createVNode(unref(IonIcon), {
                    icon: unref(person),
                    class: "avatar-icon"
                  }, null, 8, ["icon"])
                ], 2)
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("h2", _hoisted_8, [
                    createBaseVNode("span", _hoisted_9, toDisplayString(unref(patient)?.personInformation?.given_name) + " " + toDisplayString(unref(patient)?.personInformation?.middle_name), 1),
                    createBaseVNode("span", _hoisted_10, toDisplayString(unref(patient)?.personInformation?.family_name), 1)
                  ]),
                  createBaseVNode("div", {
                    class: "menu-trigger",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(openPopover)($event))
                  }, [
                    createVNode(unref(IonIcon), { icon: unref(ellipsisVerticalSharp) }, null, 8, ["icon"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(unref(IonIcon), {
                      icon: unref(maleFemaleOutline),
                      class: "meta-icon"
                    }, null, 8, ["icon"]),
                    createBaseVNode("span", null, toDisplayString(unref(patient)?.personInformation?.gender == "M" ? "Male" : "Female"), 1)
                  ]),
                  unref(profileStore).getAge(unref(patient)?.personInformation?.birthdate) && unref(profileStore).getAge(unref(patient)?.personInformation?.birthdate) !== "Unknown" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    _cache[8] || (_cache[8] = createBaseVNode("span", { class: "separator" }, "•", -1)),
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(unref(IonIcon), {
                        icon: unref(calendarOutline),
                        class: "meta-icon"
                      }, null, 8, ["icon"]),
                      createBaseVNode("span", null, toDisplayString(unref(profileStore).getAge(unref(patient)?.personInformation?.birthdate)) + " old", 1)
                    ])
                  ], 64)) : createCommentVNode("", true),
                  unref(profileStore).formatBirthdate(unref(patient)) && unref(profileStore).formatBirthdate(unref(patient)) !== "Unknown" && unref(profileStore).formatBirthdate(unref(patient)) !== "" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    _cache[9] || (_cache[9] = createBaseVNode("span", { class: "separator" }, "•", -1)),
                    createBaseVNode("div", _hoisted_14, [
                      createVNode(unref(IonIcon), {
                        icon: unref(calendarOutline),
                        class: "meta-icon"
                      }, null, 8, ["icon"]),
                      createBaseVNode("span", null, toDisplayString(unref(profileStore).formatBirthdate(unref(patient))), 1)
                    ])
                  ], 64)) : createCommentVNode("", true)
                ]),
                unref(patient)?.personInformation?.current_district ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createVNode(unref(IonIcon), {
                    icon: unref(locationOutline),
                    class: "detail-icon"
                  }, null, 8, ["icon"]),
                  _cache[10] || (_cache[10] = createBaseVNode("span", { class: "field-label" }, "Current Address:", -1)),
                  createBaseVNode("span", _hoisted_16, toDisplayString(unref(formatCurrentAddress)(unref(patient))), 1)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_17, [
                  createVNode(unref(IonIcon), {
                    icon: unref(qrCodeOutline),
                    class: "detail-icon"
                  }, null, 8, ["icon"]),
                  _cache[11] || (_cache[11] = createBaseVNode("span", { class: "field-label" }, "MRN:", -1)),
                  createBaseVNode("span", _hoisted_18, toDisplayString(unref(patient).ID), 1)
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createVNode(unref(IonIcon), {
                    icon: unref(pulseOutline),
                    class: "detail-icon"
                  }, null, 8, ["icon"]),
                  _cache[12] || (_cache[12] = createBaseVNode("span", { class: "field-label" }, "Outcome:", -1)),
                  createBaseVNode("span", {
                    class: normalizeClass(["outcome-badge", unref(outcomeStatusClass)])
                  }, toDisplayString(unref(outcomeStatusLabel)), 3)
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              createVNode(unref(IonSegment), {
                ref_key: "segmentRef",
                ref: segmentRef,
                modelValue: activeTab.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeTab.value = $event),
                class: "profile-tabs"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonSegmentButton), { value: "weight-height" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(unref(IonIcon), { icon: unref(statsChartOutline) }, null, 8, ["icon"]),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [..._cache[13] || (_cache[13] = [
                            createTextVNode("Weight / Height Chart", -1)
                          ])]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonSegmentButton), { value: "investigation" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_23, [
                        createVNode(unref(IonIcon), { icon: unref(flaskOutline) }, null, 8, ["icon"]),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [..._cache[14] || (_cache[14] = [
                            createTextVNode("Investigations", -1)
                          ])]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonSegmentButton), { value: "clinical-notes" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_24, [
                        createVNode(unref(IonIcon), { icon: unref(documentTextOutline) }, null, 8, ["icon"]),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [..._cache[15] || (_cache[15] = [
                            createTextVNode("Clinical Notes", -1)
                          ])]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_25, [
              activeTab.value === "weight-height" ? (openBlock(), createBlock(WeightHeightTab, {
                key: `weight-height-${refreshCounter.value}`,
                checkUnderSixWeeks: unref(checkUnderSixWeeks),
                showHeightWeight: true,
                isChild: unref(profileStore).isChild()
              }, null, 8, ["checkUnderSixWeeks", "isChild"])) : activeTab.value === "investigation" ? (openBlock(), createBlock(InvestigationTab, {
                key: `investigation-${refreshCounter.value}`
              })) : (openBlock(), createBlock(ClinicalNotesTab, {
                key: `clinical-notes-${refreshCounter.value}`
              }))
            ])
          ]),
          createVNode(NeonatalCare),
          createVNode(unref(IonPopover), {
            class: "menu-popover",
            "is-open": unref(popoverOpen),
            "show-backdrop": false,
            event: unref(event),
            onDidDismiss: _cache[7] || (_cache[7] = ($event) => popoverOpen.value = false)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(IonAccordionGroup), { multiple: true }, {
                  default: withCtx(() => [
                    createVNode(unref(IonAccordion), {
                      value: "print-id",
                      "toggle-icon": "",
                      onClick: _cache[2] || (_cache[2] = ($event) => handleMenuAction(unref(printID)))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[16] || (_cache[16] = [
                                createTextVNode("Print client identifier", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonAccordion), {
                      value: "update-demographics",
                      "toggle-icon": "",
                      onClick: _cache[3] || (_cache[3] = ($event) => handleMenuAction(unref(openPIM)))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[17] || (_cache[17] = [
                                createTextVNode("Update demographics", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonAccordion), {
                      value: "follow-up",
                      "toggle-icon": "",
                      onClick: _cache[4] || (_cache[4] = () => {
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[18] || (_cache[18] = [
                                createTextVNode("Follow up visits", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonAccordion), { value: "reports" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[19] || (_cache[19] = [
                                createTextVNode("Reports", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_26, [
                          createVNode(unref(IonItem), {
                            button: "",
                            onClick: _cache[5] || (_cache[5] = ($event) => generateReport("clinical"))
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonLabel), null, {
                                default: withCtx(() => [..._cache[20] || (_cache[20] = [
                                  createTextVNode("Clinical Review report", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(IonItem), {
                            button: "",
                            onClick: _cache[6] || (_cache[6] = ($event) => generateReport("discharge"))
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonLabel), null, {
                                default: withCtx(() => [..._cache[21] || (_cache[21] = [
                                  createTextVNode("Discharge Report", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["is-open", "event"])
        ])
      ]);
    };
  }
});

const NeonatalPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-381bc5fb"]]);

export { NeonatalPatientProfile as default };
