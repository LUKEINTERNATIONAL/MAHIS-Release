import { s as storeToRefs } from './pinia-D-q2_lrU.js';
import { q as defineComponent, aH as useRouter, r as ref, a2 as onMounted, w as watch, x as createElementBlock, y as openBlock, B as createBaseVNode, z as createVNode, E as unref, ax as IonGrid, A as withCtx, af as IonRow, ay as IonCol, bI as IonCard, O as createBlock, G as createCommentVNode, bG as IonBadge, a5 as createTextVNode, C as toDisplayString, b9 as IonCardContent, dt as IonImg, bv as IonText, d as computed, v as resolveComponent, a4 as normalizeClass, d1 as person, d$ as ellipsisVerticalSharp, aE as IonAccordionGroup, aD as IonAccordion, an as IonItem, a7 as IonLabel, am as IonList, as as IonToggle, bl as IonPopover } from './vendor-BPW-J91F.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { u as usePatientProfile } from './usePatientProfile-CcW4g8Dn.js';
import WeightHeightChart from './WeightHeightChart-DCc6oiPG.js';
import { u as useDemographicsStore, b as EncounterTypeId, t as toastWarning, _ as _export_sfc, l as PreviousVitals, o as createModal, q as StandardModal, bq as LabOrderService, S as Service, K as ObservationService, H as HisDate, P as PatientService } from '../index-Be0fRy6M.js';
import { N as NeonatalService } from './neonatal_service-CVOUAZ2A.js';
import { g as getSequentiallyCompletedStepCount } from './admissionWorkflow-BPsfuTGc.js';
import { I as IMAGES } from './images-DXWMAjRl.js';

const _hoisted_1$1 = { class: "neonatal-home-component" };
const _hoisted_2$1 = { class: "icon-container" };
const _hoisted_3$1 = { class: "icon-container" };
const _hoisted_4$1 = { class: "icon-container" };
const _hoisted_5$1 = { class: "icon-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NeonatalCare",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const nextEncounterBadge = ref("");
    const admissionProgress = ref("");
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
    const normalizeEncounterName = (name) => (name ?? "").trim().toUpperCase();
    const ADMISSION_WORKFLOW_STEPS = [
      {
        encounterType: EncounterTypeId.NEONATAL_SIGNS_SYMPTOMS,
        route: "/neonatal/signs-symptoms",
        encounterNames: ["NEONATAL SIGNS & SYMPTOMS"],
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
        route: "/neonatal/SystemicExamination",
        encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"],
        title: "Systemic Exam"
      },
      {
        encounterType: EncounterTypeId.NEONATAL_ADMISSION_OUTCOMES,
        route: "/neonatal/admission-outcomes",
        encounterNames: ["NEONATAL ADMISSION OUTCOMES"],
        title: "Outcomes"
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
    const hasNeonatalEnrollmentEncounter = (savedEncounters) => {
      const enrollmentEncounterName = normalizeEncounterName("NEONATAL ENROLLMENT");
      return savedEncounters.some((encounterName) => normalizeEncounterName(encounterName) === enrollmentEncounterName);
    };
    const hasTriageEncounter = (savedEncounters) => {
      const triageEncounterName = normalizeEncounterName("NEONATAL TRIAGE");
      return savedEncounters.some((encounterName) => normalizeEncounterName(encounterName) === triageEncounterName);
    };
    const CHECKPOINT_WORKFLOW = [
      {
        title: "Triage",
        encounterNames: ["NEONATAL TRIAGE"]
      },
      {
        title: "Profiling",
        encounterNames: ["NEONATAL ENROLLMENT"]
      },
      {
        title: "Signs & Symptoms",
        encounterNames: ["NEONATAL SIGNS & SYMPTOMS", "NEONATAL SIGNS SYMPTOMS"]
      },
      {
        title: "Review of Systems",
        encounterNames: ["NEONATAL REVIEW OF SYSTEMS"]
      },
      {
        title: "General Exam",
        encounterNames: ["PHYSICAL EXAMINATION BABY", "NEONATAL GENERAL EXAMINATION"]
      },
      {
        title: "Vitals",
        encounterNames: ["VITALS", "NEONATAL VITALS"]
      },
      {
        title: "Systemic Exam",
        encounterNames: ["NEONATAL SYSTEMIC EXAMINATION"]
      },
      {
        title: "Diagnosis",
        encounterNames: ["DIAGNOSIS", "NEONATAL DIAGNOSIS"]
      },
      {
        title: "Investigations",
        encounterNames: ["INVESTIGATION", "NEONATAL INVESTIGATION", "LAB ORDERS", "LAB RESULTS"]
      },
      {
        title: "Treatment",
        encounterNames: ["TREATMENT", "NEONATAL TREATMENT PLAN"]
      },
      {
        title: "Outcomes",
        encounterNames: ["NEONATAL ADMISSION OUTCOMES", "ADMISSION OUTCOMES"]
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
        const savedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters : [];
        const normalizedEncounterSet = new Set(
          savedEncounters.map((encounter) => normalizeEncounterName(encounter))
        );
        const hasEncounter = (names) => names.some((name) => normalizedEncounterSet.has(normalizeEncounterName(name)));
        let nextStep = null;
        for (const step of CHECKPOINT_WORKFLOW) {
          if (!hasEncounter(step.encounterNames)) {
            nextStep = step;
            break;
          }
        }
        if (!nextStep) {
          admissionProgress.value = "Complete";
        } else {
          admissionProgress.value = nextStep.title;
        }
        const hasEnrollmentEncounter = hasNeonatalEnrollmentEncounter(savedEncounters);
        const hasTriage = hasTriageEncounter(savedEncounters);
        if (!hasEnrollmentEncounter) {
          nextEncounterBadge.value = "Enrollment";
        } else if (!hasTriage) {
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
        const savedEncounters = Array.isArray(savedEncountersResponse?.encounters) ? savedEncountersResponse.encounters : [];
        const normalizedEncounterSet = new Set(
          savedEncounters.map((encounter) => normalizeEncounterName(encounter))
        );
        const hasEncounter = (names) => names.some((name) => normalizedEncounterSet.has(normalizeEncounterName(name)));
        const allStepsComplete = CHECKPOINT_WORKFLOW.every((step) => hasEncounter(step.encounterNames));
        if (allStepsComplete) {
          router.push("/neonatal/checkpoint");
          return;
        }
        const hasTriage = hasTriageEncounter(savedEncounters);
        if (!hasTriage) {
          router.push("/neonatal/triage");
          return;
        }
        const hasEnrollmentEncounter = hasNeonatalEnrollmentEncounter(savedEncounters);
        if (!hasEnrollmentEncounter) {
          router.push("/neonatal/enrollment");
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
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
                            createBaseVNode("div", _hoisted_2$1, [
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
                      onClick: _cache[0] || (_cache[0] = ($event) => navigateTo("discharge")),
                      class: "activity-card"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), { class: "card-content" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_3$1, [
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
                    })
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
                      onClick: _cache[1] || (_cache[1] = ($event) => navigateTo("in-patient")),
                      class: "activity-card"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), { class: "card-content" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4$1, [
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
                      onClick: _cache[2] || (_cache[2] = ($event) => navigateTo("instruction-guides")),
                      class: "activity-card"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), { class: "card-content" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_5$1, [
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
                    })
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

const NeonatalCare = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f9809b1"]]);

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
const _hoisted_18 = { style: { "width": "100%", "min-width": "0" } };
const _hoisted_19 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalPatientProfile",
  setup(__props) {
    const router = useRouter();
    const { event, popoverOpen, openPopover, openPIM, printVisitSummary, printID, formatCurrentAddress } = usePatientProfile();
    const checkUnderSixWeeks = ref(false);
    const selectedStatus = ref(7);
    const referrals = ref([]);
    const orders = ref([]);
    const results = ref([]);
    const outcomeStatusLabel = computed(() => {
      switch (selectedStatus.value) {
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
    const getReferralTests = async () => {
      orders.value = await Service.getJson("/hts_referral_orders", { patient_id: patient.value?.patientID, filter_by_lab_result: true });
    };
    const getReferrals = async () => {
      const data = await ObservationService.getObsByEncounterId(EncounterTypeId.REFERRAL);
      referrals.value = data[0]?.obs || [];
    };
    const getAge = (dateOfBirth) => {
      return HisDate.calculateDisplayAge(HisDate.toStandardHisFormat(dateOfBirth));
    };
    const checkAge = () => {
      if (!lodashExports.isEmpty(patient.value?.personInformation?.birthdate)) {
        checkUnderSixWeeks.value = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.value?.personInformation?.birthdate) < 42 ? true : false;
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
        if ((data.name == "patientProfile" || data.name == "neonatalPatientProfile") && patient.value.patientID) {
          await checkPatientAge();
        }
      }
    );
    watch(
      () => patient.value?.patientID,
      async (newPatientId, oldPatientId) => {
        if (newPatientId && oldPatientId !== void 0 && newPatientId !== oldPatientId) {
          checkAge();
          await checkPatientAge();
          await getLabResults();
          await getReferralTests();
        }
      }
    );
    onMounted(async () => {
      checkAge();
      await checkPatientAge();
      await getReferrals();
      await getReferralTests();
      await getLabResults();
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
                  _cache[9] || (_cache[9] = createBaseVNode("span", { class: "separator" }, "•", -1)),
                  createBaseVNode("span", null, toDisplayString(getAge(unref(patient)?.personInformation?.birthdate)) + " old", 1),
                  _cache[10] || (_cache[10] = createBaseVNode("span", { class: "separator" }, "•", -1)),
                  createBaseVNode("span", null, toDisplayString(formatBirthdate()), 1)
                ]),
                unref(patient)?.personInformation?.current_district ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  _cache[11] || (_cache[11] = createBaseVNode("span", { class: "field-label" }, "Current Address:", -1)),
                  createBaseVNode("span", _hoisted_13, toDisplayString(unref(formatCurrentAddress)(unref(patient))), 1)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_14, [
                  _cache[12] || (_cache[12] = createBaseVNode("span", { class: "field-label" }, "MRN:", -1)),
                  createBaseVNode("span", _hoisted_15, toDisplayString(unref(patient).ID), 1)
                ]),
                createBaseVNode("div", _hoisted_16, [
                  _cache[13] || (_cache[13] = createBaseVNode("span", { class: "field-label" }, "Outcome:", -1)),
                  createBaseVNode("span", {
                    class: normalizeClass(["outcome-badge", outcomeStatusClass.value])
                  }, toDisplayString(outcomeStatusLabel.value), 3)
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, [
              isChild() ? (openBlock(), createBlock(WeightHeightChart, {
                key: 0,
                checkUnderSixWeeks: checkUnderSixWeeks.value,
                showHeightWeight: true
              }, null, 8, ["checkUnderSixWeeks"])) : createCommentVNode("", true),
              !isChild() ? (openBlock(), createBlock(PreviousVitals, { key: 1 })) : createCommentVNode("", true)
            ])
          ]),
          createVNode(NeonatalCare),
          createVNode(unref(IonPopover), {
            class: "menu-popover",
            "is-open": unref(popoverOpen),
            "show-backdrop": false,
            event: unref(event),
            onDidDismiss: _cache[8] || (_cache[8] = ($event) => popoverOpen.value = false)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(IonAccordionGroup), { multiple: true }, {
                  default: withCtx(() => [
                    createVNode(unref(IonAccordion), {
                      value: "first",
                      "toggle-icon": "",
                      onClick: _cache[1] || (_cache[1] = ($event) => unref(openPIM)())
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[14] || (_cache[14] = [
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
                      onClick: _cache[2] || (_cache[2] = () => {
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[15] || (_cache[15] = [
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
                      onClick: _cache[3] || (_cache[3] = ($event) => unref(printVisitSummary)())
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[16] || (_cache[16] = [
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
                      onClick: _cache[4] || (_cache[4] = ($event) => unref(printID)())
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonItem), {
                          slot: "header",
                          color: "light"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), null, {
                              default: withCtx(() => [..._cache[17] || (_cache[17] = [
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
                              default: withCtx(() => [..._cache[18] || (_cache[18] = [
                                createTextVNode("Update outcome", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_19, [
                          createVNode(unref(IonList), null, {
                            default: withCtx(() => [
                              createVNode(unref(IonItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonToggle), {
                                    checked: selectedStatus.value == 7,
                                    value: "active",
                                    onIonChange: _cache[5] || (_cache[5] = ($event) => updateState(7))
                                  }, {
                                    default: withCtx(() => [..._cache[19] || (_cache[19] = [
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
                                    onIonChange: _cache[6] || (_cache[6] = ($event) => updateState(6))
                                  }, {
                                    default: withCtx(() => [..._cache[20] || (_cache[20] = [
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
                                    onIonChange: _cache[7] || (_cache[7] = ($event) => updateState(3))
                                  }, {
                                    default: withCtx(() => [..._cache[21] || (_cache[21] = [
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

const NeonatalPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6464fda"]]);

export { NeonatalPatientProfile as default };
