import { s as storeToRefs } from './pinia-BATJJgGh.js';
import { s as defineComponent, aL as useRouter, a2 as onMounted, w as watch, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, aB as IonGrid, B as withCtx, af as IonRow, aA as IonCol, bK as IonCard, O as createBlock, bI as IonBadge, a5 as createTextVNode, D as toDisplayString, H as createCommentVNode, bd as IonCardContent, du as IonImg, by as IonText, a4 as normalizeClass, f as ref, c as computed, aG as IonContent, J as Fragment, R as renderList, dZ as IonSkeletonText, L as IonIcon, fd as reloadOutline, N as IonButton, bQ as withKeys, a8 as withModifiers, d3 as add, x as resolveComponent, d2 as person, e0 as ellipsisVerticalSharp, dh as IonSegmentButton, a7 as IonLabel, dg as IonSegment, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, ap as IonList, dE as IonToggle, al as IonPopover } from './vendor-6OQ3r7Vr.js';
import { l as lodashExports } from './lodash-CuxQuz9v.js';
import { u as usePatientProfile } from './usePatientProfile-COcxZp6s.js';
import { u as useDemographicsStore, b as EncounterTypeId, E as EncounterService, t as toastWarning, _ as _export_sfc, l as PreviousVitals, r as StandardModal, H as HisDate, o as createModal, b2 as useTreatmentPlanStore, br as LabOrderService, S as Service, K as ObservationService, P as PatientService } from '../index-B-NulKpO.js';
import { N as NeonatalService } from './neonatal_service-kyvamkhZ.js';
import { g as getSequentiallyCompletedStepCount } from './admissionWorkflow-BPsfuTGc.js';
import { I as IMAGES } from './images-DYlnzYtj.js';
import WeightHeightChart from './WeightHeightChart-D6U-uwLJ.js';
import { _ as _sfc_main$6 } from './EnterLabResultsModal.vue_vue_type_script_setup_true_lang-8-FSA5Ku.js';

const _hoisted_1$5 = { class: "neonatal-home-component" };
const _hoisted_2$3 = { class: "icon-container" };
const _hoisted_3$3 = { class: "icon-container" };
const _hoisted_4$3 = { class: "icon-container" };
const _hoisted_5$2 = { class: "icon-container" };
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
        encounterType: EncounterTypeId.DIAGNOSIS,
        route: "/neonatal/diagnosis",
        encounterNames: ["DIAGNOSIS", "NEONATAL DIAGNOSIS"],
        title: "Diagnosis"
      },
      {
        encounterType: EncounterTypeId.NEONATAL_ADMISSION_OUTCOMES,
        route: "/neonatal/admission-outcomes",
        encounterNames: ["NEONATAL ADMISSION OUTCOMES"],
        title: "Outcomes"
      },
      {
        title: "Sign Off",
        route: "/neonatal/admission-signoff",
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
        const savedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters : [];
        const nextRoute = determineNextAdmissionRoute(savedEncounters);
        await router.push(nextRoute);
      } catch (error) {
        console.error("Error determining neonatal admission workflow:", error);
        toastWarning("Unable to determine next admission step. Starting from Signs & Symptoms.");
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
        title: "Admission Outcomes",
        encounterNames: ["NEONATAL ADMISSION OUTCOMES", "ADMISSION OUTCOMES"],
        encounterTypeIds: [EncounterTypeId.NEONATAL_ADMISSION_OUTCOMES]
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
        const specializedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters : [];
        let generalEncounterNames = [];
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
        } catch (e) {
          console.warn("[NeonatalCare] Failed to fetch general encounters", e);
        }
        const savedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
        const normalizedEncounterSet = new Set(savedEncounters.map((encounter) => normalizeEncounterName(encounter)));
        const savedEncounterIds = /* @__PURE__ */ new Set();
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          if (Array.isArray(allEncounters)) {
            allEncounters.forEach((e) => {
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
        const specializedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters : [];
        let generalEncounterNames = [];
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          generalEncounterNames = Array.isArray(allEncounters) ? allEncounters.map((e) => e.type?.name || e.encounter_type_name).filter(Boolean) : [];
        } catch (e) {
          console.warn("[NeonatalCare:handleAdmit] Failed to fetch general encounters", e);
        }
        const savedEncounters = [.../* @__PURE__ */ new Set([...specializedEncounters, ...generalEncounterNames])];
        const savedEncounterIds = /* @__PURE__ */ new Set();
        try {
          const allEncounters = await EncounterService.getEncounters(patient.value.patientID);
          if (Array.isArray(allEncounters)) {
            allEncounters.forEach((e) => {
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
        toastWarning("Unable to check admission status");
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
                                alt: "Admit",
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
                            createBaseVNode("div", _hoisted_5$2, [
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

const NeonatalCare = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e69cce31"]]);

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
const _hoisted_3$2 = {
  key: 0,
  class: "investigation-results-tab__subtitle"
};
const _hoisted_4$2 = { class: "investigation-results-tab__actions" };
const _hoisted_5$1 = {
  key: 0,
  class: "investigation-results-tab__loader"
};
const _hoisted_6$1 = {
  key: 0,
  class: "skeleton-list"
};
const _hoisted_7$1 = {
  key: 1,
  class: "investigation-state"
};
const _hoisted_8$1 = {
  key: 2,
  class: "encounter-list"
};
const _hoisted_9$1 = ["onClick", "onKeydown"];
const _hoisted_10$1 = { class: "encounter-card__header" };
const _hoisted_11$1 = { class: "encounter-card__date" };
const _hoisted_12$1 = { class: "encounter-card__header-actions" };
const _hoisted_13$1 = { class: "encounter-card__body" };
const _hoisted_14$1 = { class: "observation-row__concept" };
const _hoisted_15$1 = { class: "observation-row__value" };
const _hoisted_16$1 = ["onClick", "onKeydown"];
const skeletonCount = 3;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InvestigationTab",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isLoading = ref(false);
    const patientIdentifier = computed(() => patient.value?.patientID || patient.value?.patient_id);
    const refreshInvestigations = async () => {
      if (!patientIdentifier.value) return;
      isLoading.value = true;
      try {
        await demographicsStore.setPatientRecord({ patientID: patientIdentifier.value });
      } finally {
        isLoading.value = false;
      }
    };
    const patientLabOrders = computed(() => {
      if (!patient.value?.labOrders) return [];
      const { saved = [], unsaved = [] } = patient.value.labOrders;
      return [...saved, ...unsaved];
    });
    const orderedLabOrders = computed(() => {
      return [...patientLabOrders.value].sort((a, b) => getOrderTimestamp(b) - getOrderTimestamp(a));
    });
    const hasEncounters = computed(() => orderedLabOrders.value.length > 0);
    const latestOrder = computed(() => orderedLabOrders.value[0]);
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
    const orderHasPendingResults = (order) => {
      if (!order?.tests || !Array.isArray(order.tests)) return false;
      return order.tests.some((test) => !test?.result || test.result.length === 0);
    };
    const buildPendingTestPayload = (order) => {
      if (!orderHasPendingResults(order)) return null;
      const pendingTest = order.tests.find((test) => !test?.result || test.result.length === 0);
      if (!pendingTest) return null;
      return {
        ...order,
        tests: [{ ...pendingTest }]
      };
    };
    const openAddResultModal = async (order) => {
      const payload = buildPendingTestPayload(order);
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
          createBaseVNode("div", null, [
            latestOrder.value ? (openBlock(), createElementBlock("p", _hoisted_3$2, " Last updated: " + toDisplayString(formatOrderDate(latestOrder.value)), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_5$1, "Refreshing…")) : createCommentVNode("", true),
            createVNode(unref(IonButton), {
              fill: "clear",
              size: "small",
              class: "investigation-refresh-btn",
              disabled: isLoading.value || !patientIdentifier.value,
              onClick: _cache[0] || (_cache[0] = ($event) => refreshInvestigations())
            }, {
              default: withCtx(() => [
                createVNode(unref(IonIcon), {
                  icon: unref(reloadOutline),
                  slot: "icon-only"
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(skeletonCount, (index) => {
            return createBaseVNode("article", {
              key: `skeleton-${index}`,
              class: "skeleton-card"
            }, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "skeleton-row skeleton-title shimmer" }, null, -1)),
              (openBlock(), createElementBlock(Fragment, null, renderList(3, (line) => {
                return createBaseVNode("div", {
                  class: "skeleton-row shimmer",
                  key: `line-${index}-${line}`
                });
              }), 64))
            ]);
          }), 64))
        ])) : !hasEncounters.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, " No completed investigation encounters recorded yet. ")) : (openBlock(), createElementBlock("div", _hoisted_8$1, [
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
              createBaseVNode("header", _hoisted_10$1, [
                createBaseVNode("div", null, [
                  createBaseVNode("p", _hoisted_11$1, toDisplayString(formatOrderDate(order)), 1)
                ]),
                createBaseVNode("div", _hoisted_12$1, [
                  orderHasPendingResults(order) ? (openBlock(), createBlock(unref(IonButton), {
                    key: 0,
                    fill: "solid",
                    size: "small",
                    class: "encounter-card__add-result-btn",
                    disabled: isLoading.value,
                    onClick: withModifiers(($event) => openAddResultModal(order), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonIcon), {
                        icon: unref(add),
                        slot: "start"
                      }, null, 8, ["icon"]),
                      _cache[2] || (_cache[2] = createTextVNode(" Add result ", -1))
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(order.tests ?? [], (test) => {
                  return openBlock(), createElementBlock("div", {
                    key: `test-${test.id || test.name}`,
                    class: "observation-row"
                  }, [
                    createBaseVNode("span", _hoisted_14$1, toDisplayString(test.name || test.test_name || "Test"), 1),
                    createBaseVNode("span", _hoisted_15$1, [
                      createTextVNode(toDisplayString(formatTestResultValue(test)) + " ", 1),
                      getAdditionalResultsCount(test) > 0 ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: "observation-row__extra",
                        role: "button",
                        tabindex: "0",
                        onClick: withModifiers(($event) => openResultsDialog(test), ["stop"]),
                        onKeydown: [
                          withKeys(withModifiers(($event) => openResultsDialog(test), ["prevent", "stop"]), ["enter"]),
                          withKeys(withModifiers(($event) => openResultsDialog(test), ["prevent", "stop"]), ["space"])
                        ]
                      }, " +" + toDisplayString(getAdditionalResultsCount(test)) + " more ", 41, _hoisted_16$1)) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128))
              ])
            ], 40, _hoisted_9$1);
          }), 128))
        ]))
      ]);
    };
  }
});

const InvestigationTab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-76f72ced"]]);

const _hoisted_1$1 = { class: "clinical-notes-tab" };
const _hoisted_2$1 = { class: "notes-header" };
const _hoisted_3$1 = {
  key: 0,
  class: "notes-list"
};
const _hoisted_4$1 = {
  key: 1,
  class: "notes-empty"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ClinicalNotesTab",
  setup(__props) {
    const treatmentPlanStore = useTreatmentPlanStore();
    const refreshTrigger = ref(0);
    const clinicalNotesList = computed(() => {
      refreshTrigger.value;
      const rawNotes = treatmentPlanStore.nonPharmalogicalTherapyAndOtherNotes || "";
      return rawNotes.split(/\r?\n/).map((line) => line.trim()).filter((line) => line.length > 0);
    });
    const refreshNotes = () => {
      refreshTrigger.value += 1;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("header", _hoisted_2$1, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, null, -1)),
          createVNode(unref(IonButton), {
            fill: "clear",
            size: "small",
            class: "notes-refresh-btn",
            onClick: refreshNotes
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), {
                icon: unref(reloadOutline),
                slot: "icon-only"
              }, null, 8, ["icon"])
            ]),
            _: 1
          })
        ]),
        clinicalNotesList.value.length ? (openBlock(), createElementBlock("ul", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(clinicalNotesList.value, (note, index) => {
            return openBlock(), createElementBlock("li", {
              key: `note-${index}`
            }, toDisplayString(note), 1);
          }), 128))
        ])) : (openBlock(), createElementBlock("p", _hoisted_4$1, "No clinical review notes recorded yet."))
      ]);
    };
  }
});

const ClinicalNotesTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-31351271"]]);

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
const _hoisted_12 = {
  key: 0,
  class: "detail-row"
};
const _hoisted_13 = { class: "field-value scrollable-address" };
const _hoisted_14 = { class: "detail-row" };
const _hoisted_15 = { class: "field-value" };
const _hoisted_16 = { class: "detail-row" };
const _hoisted_17 = { class: "graphSection" };
const _hoisted_18 = { class: "tabs-control" };
const _hoisted_19 = { class: "tabs-content" };
const _hoisted_20 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalPatientProfile",
  setup(__props) {
    const router = useRouter();
    const { event, popoverOpen, openPopover, openPIM, printVisitSummary, printID, formatCurrentAddress } = usePatientProfile();
    const checkUnderSixWeeks = ref(false);
    const activeTab = ref("weight-height");
    const selectedStatus = ref(0);
    const referrals = ref([]);
    const orders = ref([]);
    const results = ref([]);
    const outcomeStatusLabel = computed(() => {
      switch (selectedStatus.value) {
        case 8:
          return "Enrolled";
        case 7:
          return "Admitted";
        case 6:
          return "Discharged";
        // Or Inactive
        case 3:
          return "Died";
        default:
          return "Unknown";
      }
    });
    const outcomeStatusClass = computed(() => {
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
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const updateState = async (state) => {
      selectedStatus.value = state;
    };
    const isNeonate = () => {
      if (!patient.value?.personInformation?.birthdate) {
        return false;
      }
      const ageInDays = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.value.personInformation.birthdate);
      return ageInDays >= 0 && ageInDays <= 28;
    };
    const checkPatientAge = async () => {
      if (!patient.value?.patientID || !patient.value?.personInformation?.birthdate) {
        return;
      }
      if (!isNeonate()) {
        await createModal(StandardModal, { class: "small-confirm-modal" }, true, {
          title: "Redirection",
          message: "Patient is not a neonate, redirecting to home"
        });
        router.push("/home");
        return;
      }
    };
    const getLabResults = async () => {
      try {
        const lab = await LabOrderService.getLabResults(patient.value);
        results.value = lab?.results || [];
      } catch (error) {
        console.error("Error fetching lab results:", error);
        results.value = [];
      }
    };
    const fetchExistingOutcome = async () => {
      try {
        const encounters = await EncounterService.getAllEncounters({
          // encounter_type_id: EncounterTypeId.NEONATAL_DISCHARGE,
          patient_id: patient.value?.patientID,
          program_id: Service.getProgramID()
        });
        if (encounters.length > 0) {
          selectedStatus.value = 8;
        }
      } catch (error) {
      }
    };
    const getReferralTests = async () => {
      orders.value = await Service.getJson("/hts_referral_orders", { patient_id: patient.value?.patientID, filter_by_lab_result: true });
    };
    const getReferrals = async () => {
      const data = await ObservationService.getObsByEncounterId(EncounterTypeId.REFERRAL);
      referrals.value = data[0]?.obs || [];
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
    const checkAge = () => {
      if (!lodashExports.isEmpty(patient.value?.personInformation?.birthdate)) {
        const ageInDays = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.value?.personInformation?.birthdate);
        checkUnderSixWeeks.value = ageInDays >= 0 && ageInDays < 42;
      }
    };
    const isChild = () => {
      const patientService = new PatientService();
      if (patientService.isUnderFive()) return true;
      else return false;
    };
    const formatBirthdate = () => {
      return HisDate.toStandardHisDisplayFormat(patient.value?.personInformation?.birthdate);
    };
    watch(
      () => router.currentRoute.value,
      async (data) => {
        const isProfileRoute = data.name === "neonatalPatientProfile" || data.name === "patientProfile";
        if (isProfileRoute && patient.value?.patientID && patient.value?.personInformation?.birthdate) {
          await checkPatientAge();
        }
      }
    );
    watch(
      () => patient.value?.patientID,
      async (newPatientId, oldPatientId) => {
        if (newPatientId && newPatientId !== oldPatientId) {
          checkAge();
          await checkPatientAge();
          await getLabResults();
          await getReferralTests();
          await fetchExistingOutcome();
        }
      }
    );
    onMounted(async () => {
      checkAge();
      await checkPatientAge();
      await getReferrals();
      await getReferralTests();
      await getLabResults();
      await fetchExistingOutcome();
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", {
                  class: normalizeClass(["avatar-box", unref(patient)?.personInformation?.gender == "M" ? "male-avatar" : "female-avatar"])
                }, [
                  createVNode(_component_ion_icon, {
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
                    createVNode(_component_ion_icon, { icon: unref(ellipsisVerticalSharp) }, null, 8, ["icon"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("span", null, toDisplayString(unref(patient)?.personInformation?.gender == "M" ? "Male" : "Female"), 1),
                  _cache[10] || (_cache[10] = createBaseVNode("span", { class: "separator" }, "•", -1)),
                  createBaseVNode("span", null, toDisplayString(getAge(unref(patient)?.personInformation?.birthdate)) + " old", 1),
                  _cache[11] || (_cache[11] = createBaseVNode("span", { class: "separator" }, "•", -1)),
                  createBaseVNode("span", null, toDisplayString(formatBirthdate()), 1)
                ]),
                unref(patient)?.personInformation?.current_district ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  _cache[12] || (_cache[12] = createBaseVNode("span", { class: "field-label" }, "Current Address:", -1)),
                  createBaseVNode("span", _hoisted_13, toDisplayString(unref(formatCurrentAddress)(unref(patient))), 1)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_14, [
                  _cache[13] || (_cache[13] = createBaseVNode("span", { class: "field-label" }, "MRN:", -1)),
                  createBaseVNode("span", _hoisted_15, toDisplayString(unref(patient).ID), 1)
                ]),
                createBaseVNode("div", _hoisted_16, [
                  _cache[14] || (_cache[14] = createBaseVNode("span", { class: "field-label" }, "Outcome:", -1)),
                  createBaseVNode("span", {
                    class: normalizeClass(["outcome-badge", outcomeStatusClass.value])
                  }, toDisplayString(outcomeStatusLabel.value), 3)
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, [
              createVNode(unref(IonSegment), {
                modelValue: activeTab.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeTab.value = $event),
                class: "profile-tabs"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonSegmentButton), { value: "weight-height" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), null, {
                        default: withCtx(() => [..._cache[15] || (_cache[15] = [
                          createTextVNode("Weight / Height Chart", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonSegmentButton), { value: "investigation" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), null, {
                        default: withCtx(() => [..._cache[16] || (_cache[16] = [
                          createTextVNode("Investigation", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonSegmentButton), { value: "clinical-notes" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), null, {
                        default: withCtx(() => [..._cache[17] || (_cache[17] = [
                          createTextVNode("Clinical Notes", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_19, [
              activeTab.value === "weight-height" ? (openBlock(), createBlock(WeightHeightTab, {
                key: 0,
                checkUnderSixWeeks: checkUnderSixWeeks.value,
                showHeightWeight: true,
                isChild: isChild()
              }, null, 8, ["checkUnderSixWeeks", "isChild"])) : activeTab.value === "investigation" ? (openBlock(), createBlock(InvestigationTab, { key: 1 })) : (openBlock(), createBlock(ClinicalNotesTab, { key: 2 }))
            ])
          ]),
          createVNode(NeonatalCare),
          createVNode(unref(IonPopover), {
            class: "menu-popover",
            "is-open": unref(popoverOpen),
            "show-backdrop": false,
            event: unref(event),
            onDidDismiss: _cache[9] || (_cache[9] = ($event) => popoverOpen.value = false)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(IonAccordionGroup), { multiple: true }, {
                  default: withCtx(() => [
                    createVNode(unref(IonAccordion), {
                      value: "first",
                      "toggle-icon": "",
                      onClick: _cache[2] || (_cache[2] = ($event) => unref(openPIM)())
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[18] || (_cache[18] = [
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
                      value: "first",
                      "toggle-icon": "",
                      onClick: _cache[3] || (_cache[3] = () => {
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[19] || (_cache[19] = [
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
                    createVNode(unref(IonAccordion), {
                      value: "second",
                      "toggle-icon": "",
                      onClick: _cache[4] || (_cache[4] = ($event) => unref(printVisitSummary)())
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[20] || (_cache[20] = [
                                createTextVNode("Print visit summary", -1)
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
                      value: "third",
                      "toggle-icon": "",
                      onClick: _cache[5] || (_cache[5] = ($event) => unref(printID)())
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[21] || (_cache[21] = [
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
                    createVNode(unref(IonAccordion), { value: "fourth" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[22] || (_cache[22] = [
                                createTextVNode("Update outcome", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_20, [
                          createVNode(unref(IonList), null, {
                            default: withCtx(() => [
                              createVNode(unref(IonItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonToggle), {
                                    checked: selectedStatus.value == 7,
                                    value: "active",
                                    onIonChange: _cache[6] || (_cache[6] = ($event) => updateState(7))
                                  }, {
                                    default: withCtx(() => [..._cache[23] || (_cache[23] = [
                                      createTextVNode(" Active ", -1)
                                    ])]),
                                    _: 1
                                  }, 8, ["checked"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonToggle), {
                                    checked: selectedStatus.value == 6,
                                    value: "inactive",
                                    onIonChange: _cache[7] || (_cache[7] = ($event) => updateState(6))
                                  }, {
                                    default: withCtx(() => [..._cache[24] || (_cache[24] = [
                                      createTextVNode(" Inactive ", -1)
                                    ])]),
                                    _: 1
                                  }, 8, ["checked"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonToggle), {
                                    checked: selectedStatus.value == 3,
                                    value: "died",
                                    onIonChange: _cache[8] || (_cache[8] = ($event) => updateState(3))
                                  }, {
                                    default: withCtx(() => [..._cache[25] || (_cache[25] = [
                                      createTextVNode(" Died ", -1)
                                    ])]),
                                    _: 1
                                  }, 8, ["checked"])
                                ]),
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

const NeonatalPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9d68188"]]);

export { NeonatalPatientProfile as default };
