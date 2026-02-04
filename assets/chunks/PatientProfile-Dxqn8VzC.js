import { s as defineComponent, w as watch, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, ba as IonCardTitle, dZ as IonSkeletonText, z as createElementBlock, L as IonIcon, aS as medicalOutline, a5 as createTextVNode, J as Fragment, bb as IonCardHeader, ap as IonList, R as renderList, aq as IonItem, a7 as IonLabel, b8 as calendarOutline, C as createBaseVNode, D as toDisplayString, cI as idCardOutline, c6 as folderOutline, c3 as checkmarkCircleOutline, bd as IonCardContent, f as ref, p as dayjs, a2 as onMounted, aB as IonGrid, af as IonRow, aA as IonCol, a4 as normalizeClass, d_ as checkboxOutline, H as createCommentVNode, c8 as clipboardOutline, d$ as statsChartOutline, K as modalController, aL as useRouter, ct as useRoute, x as resolveComponent, aG as IonContent, e0 as ellipsisVerticalSharp, d2 as person, aI as IonAccordionGroup, aH as IonAccordion, P as normalizeStyle, G as closeCircleOutline, dg as IonSegment, dh as IonSegmentButton, a$ as personOutline, v as documentTextOutline, b1 as printOutline, d3 as add, bu as IonPage, cR as defineAsyncComponent, cH as __vitePreload, c as computed } from './vendor-CNJ0IVCn.js';
import { s as storeToRefs } from './pinia-DxI5rRJg.js';
import { ai as ProgramService, _ as _export_sfc, P as PatientService, aj as PatientProgramService, ab as GlobalPropertyService, q as StandardModal, o as createModal, ak as _sfc_main$3, al as ArtTasks, k as alertConfirmation, K as ObservationService, b as EncounterTypeId, J as savePatientRecord, G as toastSuccess, am as router, t as toastWarning, u as useDemographicsStore, a as useProgramStore, h as useWindowSize, H as HisDate, T as Toolbar, W as ProgramId, S as Service, F as DynamicButton, an as iconBMI, ao as openVisit, v as usePatientList, r as closeVisit, ap as SetProgramService, aq as ConceptService, ar as getActiveVisit } from '../index-HsKX6PK3.js';
import { u as useUserActivities } from './useUserActivities-D0i6VDWX.js';
import { u as usePatientProfile } from './usePatientProfile-BJwDVkIc.js';
import { D as DemographicBar } from './DemographicBar-bRRJwW2a.js';
import { i as isTaskPermitted } from './tasks-ZzBdmFrA.js';
import { A as ANCRedirection } from './anc_service-C-GY0cSx.js';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ARTCard",
  props: {
    patient: { default: {} }
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const artInformation = ref({
      artStartDate: "",
      arvNumber: "",
      fileNumber: "",
      currentOutcome: ""
    });
    const fetchARTInformation = async (patientId) => {
      loading.value = true;
      try {
        const res = await ProgramService.getProgramInformation(patientId);
        artInformation.value = {
          artStartDate: (() => {
            const [day, month, year] = res.art_start_date.split("/");
            const durationOnArt = !res.art_start_date.match(/n\/a/i) ? `(${dayjs(ProgramService.getSessionDate()).diff(`${year}-${month}-${day}`, "months")} Month(s))` : "";
            return `${res.art_start_date} ${durationOnArt}`;
          })(),
          arvNumber: `${res.arv_number} | Regimen: ${res.current_regimen}`,
          fileNumber: res.filing_number.number,
          currentOutcome: res.current_outcome
        };
      } catch (error) {
        console.error("Error fetching ART information:", error);
      } finally {
        loading.value = false;
      }
    };
    watch(() => props.patient, (newVal) => {
      if (newVal && newVal.patientID) {
        fetchARTInformation(newVal.patientID);
      } else {
        artInformation.value = {
          artStartDate: "--",
          arvNumber: "--",
          fileNumber: "--",
          currentOutcome: "--"
        };
      }
    }, { immediate: true, deep: true });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [
                  loading.value ? (openBlock(), createBlock(unref(IonSkeletonText), {
                    key: 0,
                    animated: "",
                    style: { "width": "200px", "height": "24px" }
                  })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createVNode(unref(IonIcon), { icon: unref(medicalOutline) }, null, 8, ["icon"]),
                    _cache[0] || (_cache[0] = createTextVNode(" ART Information ", -1))
                  ], 64))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonList), null, {
                default: withCtx(() => [
                  loading.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(4, (n) => {
                    return createVNode(unref(IonItem), { key: n }, {
                      default: withCtx(() => [
                        createVNode(unref(IonSkeletonText), {
                          slot: "start",
                          animated: "",
                          style: { "width": "24px", "height": "24px", "border-radius": "50%" }
                        }),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonSkeletonText), {
                              animated: "",
                              style: { "width": "120px", "height": "16px", "margin-bottom": "8px" }
                            }),
                            createVNode(unref(IonSkeletonText), {
                              animated: "",
                              style: { "width": "180px", "height": "20px" }
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    });
                  }), 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createVNode(unref(IonItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(calendarOutline),
                          slot: "start"
                        }, null, 8, ["icon"]),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [
                            _cache[1] || (_cache[1] = createBaseVNode("h3", null, "ART Start Date", -1)),
                            createBaseVNode("p", null, toDisplayString(artInformation.value.artStartDate), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(idCardOutline),
                          slot: "start"
                        }, null, 8, ["icon"]),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [
                            _cache[2] || (_cache[2] = createBaseVNode("h3", null, "ARV Number", -1)),
                            createBaseVNode("p", null, toDisplayString(artInformation.value.arvNumber), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(folderOutline),
                          slot: "start"
                        }, null, 8, ["icon"]),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [
                            _cache[3] || (_cache[3] = createBaseVNode("h3", null, "File Number", -1)),
                            createBaseVNode("p", null, toDisplayString(artInformation.value.fileNumber), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(checkmarkCircleOutline),
                          slot: "start"
                        }, null, 8, ["icon"]),
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [
                            _cache[4] || (_cache[4] = createBaseVNode("h3", null, "Current Outcome", -1)),
                            createBaseVNode("p", null, toDisplayString(artInformation.value.currentOutcome), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ], 64))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ArtCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7ec7b45c"]]);

const _hoisted_1$1 = { class: "tasks-container" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = { class: "task-icon-container" };
const _hoisted_4$1 = { class: "task-content" };
const _hoisted_5$1 = {
  key: 0,
  class: "task-status"
};
const _hoisted_6$1 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_7$1 = { class: "empty-icon" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskView",
  props: {
    tasks: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const availableTasks = ref([]);
    const props = __props;
    onMounted(async () => {
      const patient = new PatientService();
      availableTasks.value = [];
      const patientProgram = await new PatientProgramService(patient.getID()).getProgram();
      props.tasks.forEach(async (task) => {
        const configuredTask = {
          orderNumber: task.sortOrder ?? 9999,
          label: task.displayName ?? task.name,
          icon: task.icon,
          disabled: false,
          taskCompleted: false,
          task
        };
        if (typeof task.workflowID === "string") {
          if (!await isTaskPermitted(task.workflowID)) {
            return;
          }
        }
        if (typeof task.condition === "function") {
          if (!await task.condition(props.tasks)) return;
        }
        if (typeof task.globalProperty === "string") {
          const isActivated = await GlobalPropertyService.isProp(`${task.globalProperty}=true`);
          if (!isActivated) {
            return;
          }
        }
        if (typeof task.allowTaskAfterDeath === "boolean" && task.allowTaskAfterDeath === false) {
          if (/died/i.test(`${patientProgram?.program?.outcome}`) && new Date(PatientService.getSessionDate()) >= new Date(patientProgram?.program?.startDate)) {
            configuredTask.disabled = true;
          }
        }
        if (typeof task.disabled === "function") {
          configuredTask.disabled = await task.disabled(props.tasks);
        }
        availableTasks.value.push(configuredTask);
        availableTasks.value.sort((a, b) => {
          return (a.orderNumber ?? 9999) - (b.orderNumber ?? 9999);
        });
        return task;
      });
    });
    const handleTaskClick = (aTask) => {
      if (aTask.disabled) return;
      if (aTask.task.action) {
        onClose();
        aTask.task.action();
      } else if (aTask.task.component && aTask.task.isFormComponent) {
        createModal(_sfc_main$3, {}, false, {
          title: aTask.task.name,
          useComponent: aTask.task.component,
          onClose
        });
        return;
      }
    };
    function onClose() {
      modalController.dismiss();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Program Activities",
        subtitle: "",
        headerIcon: unref(statsChartOutline)
      }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            availableTasks.value && availableTasks.value.length > 0 ? (openBlock(), createBlock(unref(IonGrid), {
              key: 0,
              class: "tasks-grid"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonRow), { class: "ion-justify-content-center" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(availableTasks.value, (task, index) => {
                      return openBlock(), createBlock(unref(IonCol), {
                        size: "12",
                        "size-sm": "6",
                        "size-md": "4",
                        "size-lg": "3",
                        key: index,
                        class: "task-col"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: normalizeClass(["task-card", {
                              "task-completed": task.taskCompleted,
                              "task-disabled": task.disabled
                            }]),
                            onClick: ($event) => !task.disabled && handleTaskClick(task)
                          }, [
                            createBaseVNode("div", _hoisted_3$1, [
                              createVNode(unref(IonIcon), {
                                color: task.taskCompleted ? "success" : "primary",
                                icon: task.taskCompleted ? unref(checkboxOutline) : task.icon,
                                class: "task-icon"
                              }, null, 8, ["color", "icon"])
                            ]),
                            createBaseVNode("div", _hoisted_4$1, [
                              createVNode(unref(IonLabel), { class: "task-label" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(task.label), 1)
                                ]),
                                _: 2
                              }, 1024),
                              task.taskCompleted ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(checkboxOutline),
                                  color: "success"
                                }, null, 8, ["icon"]),
                                _cache[0] || (_cache[0] = createBaseVNode("span", null, "Completed", -1))
                              ])) : createCommentVNode("", true)
                            ])
                          ], 10, _hoisted_2$1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : (openBlock(), createElementBlock("div", _hoisted_6$1, [
              createBaseVNode("div", _hoisted_7$1, [
                createVNode(unref(IonIcon), { icon: unref(clipboardOutline) }, null, 8, ["icon"])
              ]),
              _cache[1] || (_cache[1] = createBaseVNode("h3", null, "No Activities Yet", -1)),
              _cache[2] || (_cache[2] = createBaseVNode("p", null, "Your program activities will appear here once they're available.", -1))
            ]))
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const TaskView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0fbb33f7"]]);

async function showProgramTasks(programId, taskType = "tasks") {
  const PROGRAM_TASKS = {
    1: ArtTasks
  };
  const tasks = PROGRAM_TASKS[programId] ?? {};
  createModal(TaskView, {}, true, {
    tasks: tasks?.[taskType] ?? []
  });
}

const LabourEnrollment = async (personInfo) => {
  const name = personInfo.given_name + " " + personInfo.family_name;
  const result = await alertConfirmation(`Are you sure you want to enroll "${name}" into Labour and delivery program?`);
  if (result) {
    const obs = await ObservationService.buildValueCoded("Patient enrolled", "Yes");
    const patient = await ObservationService.addObsToEncounterPatient([obs], EncounterTypeId.Labour_and_delivery_visit);
    await savePatientRecord(patient);
    toastSuccess("Patient enrolled successful");
    router.push("/labour/profile");
  } else {
    toastWarning("Patient not enrolled");
  }
};

const PNCEnrollment = async (personInfo) => {
  const name = personInfo.given_name + " " + personInfo.family_name;
  const result = await alertConfirmation(`Are you sure you want to enroll "${name}" into PNC program?`);
  if (result) {
    const obs = await ObservationService.buildValueCoded("Patient enrolled", "Yes");
    const patient = await ObservationService.addObsToEncounterPatient([obs], EncounterTypeId.PNC_VISIT);
    await savePatientRecord(patient);
    toastSuccess("Patient enrolled successful");
    router.push("/pnc/postnatal-details");
  } else {
    toastWarning("Patient not enrolled");
  }
};

const _hoisted_1 = {
  key: 5,
  class: "content_manager"
};
const _hoisted_2 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_3 = { class: "p_name_image" };
const _hoisted_4 = { style: { "width": "100%" } };
const _hoisted_5 = { class: "p_name" };
const _hoisted_6 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_7 = { class: "start-visit" };
const _hoisted_8 = { class: "button-group" };
const _hoisted_9 = {
  key: 0,
  class: "send-button-container action-buttons"
};
const _hoisted_10 = { class: "send-button-container" };
const _hoisted_11 = { class: "send-button-container" };
const _hoisted_12 = { class: "send-button-container" };
const _hoisted_13 = { style: { "padding-left": "10px", "padding-right": "10px", "margin-top": "5px" } };
const _hoisted_14 = { class: "vitalsUnits" };
const _hoisted_15 = { style: { "width": "100%", "overflow": "scroll", "height": "64px" } };
const _hoisted_16 = {
  key: 0,
  style: { "margin-top": "1px" }
};
const _hoisted_17 = {
  key: 0,
  class: "patient-chart"
};
const _hoisted_18 = { class: "patient-chart" };
const _hoisted_19 = {
  key: 1,
  class: "patient-chart"
};
const _hoisted_20 = { key: 1 };
const _hoisted_21 = { key: 2 };
const _hoisted_22 = { key: 3 };
const _hoisted_23 = { key: 4 };
const _hoisted_24 = { key: 5 };
const _hoisted_25 = { key: 6 };
const _hoisted_26 = { class: "rght-drpm" };
const NEONATAL_PROGRAM_NAME = "NEONATAL PROGRAM";
const CHILD_BEARING_AGE_MIN = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PatientProfile",
  setup(__props, { expose: __expose }) {
    const LabOrdersList = defineAsyncComponent(() => __vitePreload(() => import('./LabOrdersList-BobERGB0.js'),true              ?[]:void 0,import.meta.url));
    const DiagnosesHistory = defineAsyncComponent(() => __vitePreload(() => import('./DiagnosesHistory-D49LeJ0O.js'),true              ?[]:void 0,import.meta.url));
    const AllergiesHistory = defineAsyncComponent(() => __vitePreload(() => import('./AllergiesHistory-DYyR-BrJ.js'),true              ?[]:void 0,import.meta.url));
    const MedicationsHistory = defineAsyncComponent(() => __vitePreload(() => import('./MedicationsHistory-BDWyNNgc.js'),true              ?[]:void 0,import.meta.url));
    const VisitsHistory = defineAsyncComponent(() => __vitePreload(() => import('./VisitsHistory-BuOpPaJN.js'),true              ?[]:void 0,import.meta.url));
    const VitalsMeasurementsSummary = defineAsyncComponent(() => __vitePreload(() => import('./VitalsMeasurementsSummary-nWtW0iWb.js'),true              ?[]:void 0,import.meta.url));
    const PatientProfile = defineAsyncComponent(() => __vitePreload(() => import('./PatientProfile-xaG0NwDp.js'),true              ?[]:void 0,import.meta.url));
    const HTSPatientProfile = defineAsyncComponent(() => __vitePreload(() => import('./HTSPatientProfile-ZtOrQSBH.js'),true              ?[]:void 0,import.meta.url));
    const NeonatalPatientProfile = defineAsyncComponent(() => __vitePreload(() => import('./NeonatalPatientProfile-C6CNjazH.js'),true              ?[]:void 0,import.meta.url));
    const AETCPatientProfile = defineAsyncComponent(() => __vitePreload(() => import('./AETCPatientProfile-ChgtmLer.js'),true              ?[]:void 0,import.meta.url));
    const WeightHeightChart = defineAsyncComponent(() => __vitePreload(() => import('./WeightHeightChart-CnWkrCPN.js'),true              ?[]:void 0,import.meta.url));
    const PreviousVitals = defineAsyncComponent(() => __vitePreload(() => import('../index-HsKX6PK3.js').then(n => n.cT),true              ?[]:void 0,import.meta.url));
    const BloodPressure = defineAsyncComponent(() => __vitePreload(() => import('./BloodPressure-BkPU1dst.js'),true              ?[]:void 0,import.meta.url));
    const router = useRouter();
    const route = useRoute();
    const demographicsStore = useDemographicsStore();
    const programStore = useProgramStore();
    const { hasWaitingList } = useUserActivities();
    const {
      event,
      popoverOpen,
      openPopover,
      openPIM,
      openRelationshipManagement,
      openOutCome,
      openUpdateNCDNUmbers,
      printVisitSummary,
      printID,
      formatCurrentAddress
    } = usePatientProfile();
    const { screenWidth } = useWindowSize();
    const { patient } = storeToRefs(demographicsStore);
    const { activeProgram, authorizedPrograms } = storeToRefs(programStore);
    const programPopover = ref(false);
    const checkUnderFourteen = ref(true);
    const checkUnderNine = ref(false);
    const checkUnderFive = ref(false);
    const checkUnderSixWeeks = ref(false);
    const segmentContent = ref("Patient Charts");
    const programEvent = ref(null);
    const vitalsData = ref({});
    const checkedIn = ref(false);
    const enrolledPrograms = ref([]);
    const programToEnroll = ref(0);
    const bloodGlucose = ref();
    const showUnderageWarning = ref(false);
    const patientAge = ref(HisDate.getAgeInYears(patient.value?.personInformation?.birthdate));
    const isFemalePatient = computed(() => {
      const gender = patient.value?.personInformation?.gender;
      return gender === "Female" || gender === "F";
    });
    const normalizeProgramName = (name) => name?.trim().toUpperCase();
    const isNeonatalProgramId = (programId) => programId === ProgramId.NEONATAL_PROGRAM || programId === ProgramId.HTC_PROGRAM;
    const matchesNeonatalProgramName = (name) => normalizeProgramName(name) === NEONATAL_PROGRAM_NAME;
    const isNeonatalProgram = (program) => {
      if (!program) return false;
      const programId = program.id ?? program.program_id;
      return isNeonatalProgramId(programId) || matchesNeonatalProgramName(program.name);
    };
    const filteredPrograms = computed(() => {
      const gender = patient.value?.personInformation?.gender;
      if (gender === "Male" || gender === "M") {
        return authorizedPrograms.value.filter(
          (program) => program.name !== "ANC PROGRAM" && program.name !== "LABOUR AND DELIVERY PROGRAM" && program.name !== "PNC PROGRAM"
        );
      }
      return authorizedPrograms.value.map((program) => {
        if (program.name === "ANC PROGRAM" || program.name === "LABOUR AND DELIVERY PROGRAM" || program.name === "PNC PROGRAM") {
          if (!enrolledPrograms?.value) return;
          const isEnrolled = enrolledPrograms?.value.some((p) => p.id === program.program_id);
          return {
            ...program,
            actionName: isEnrolled ? `Start ${program.name}` : `Enroll in ${program.name}`
          };
        }
        return program;
      });
    });
    const activateVisitButtonVisible = computed(() => {
      return !checkedIn.value && activeProgram.value.program_id == 14;
    });
    const deactivateVisitButtonVisible = computed(() => {
      return checkedIn.value && activeProgram.value.program_id == 14;
    });
    const isNeonatalActiveProgram = computed(() => isNeonatalProgram(activeProgram.value));
    const checkUnderage = () => {
      if (patient.value?.personInformation?.birthdate) {
        const age = HisDate.getAgeInYears(patient.value.personInformation.birthdate);
        showUnderageWarning.value = age < 9;
      }
    };
    const checkAge = () => {
      patientAge.value = HisDate.getAgeInYears(patient.value?.personInformation?.birthdate);
      if (patient.value?.personInformation?.birthdate) {
        checkUnderFourteen.value = HisDate.getAgeInYears(patient.value.personInformation.birthdate) >= 14;
        checkUnderNine.value = HisDate.ageInMonths(patient.value.personInformation.birthdate) < 9;
        checkUnderFive.value = HisDate.getAgeInYears(patient.value.personInformation.birthdate) < 5;
        checkUnderSixWeeks.value = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.value.personInformation.birthdate) < 42;
      }
    };
    const setSegmentContent = (name) => {
      segmentContent.value = name;
    };
    const setAlerts = () => {
      return [
        {
          backgroundColor: "#B9E6FE",
          status: "",
          icon: iconBMI(["#B9E6FE", "#026AA2", "#9ADBFE"]),
          textColor: "#026AA2",
          value: "No further action is required.",
          name: "",
          index: "Blood sugar is normal"
        },
        {
          backgroundColor: "#FEDF89",
          status: "",
          icon: iconBMI(["#FEDF89", "#B54708", "#FED667"]),
          textColor: "#B54708",
          value: "Please call or follow up!",
          name: "",
          index: "Patient Defaulted"
        },
        {
          backgroundColor: "#FECDCA",
          status: "",
          icon: iconBMI(["#FECDCA", "#B42318", "#FDA19B"]),
          textColor: "#B42318",
          value: "Administer medications!",
          name: "",
          index: "Patient is hypertensive"
        }
      ];
    };
    const updateCheckInStatus = async () => {
      if (activeProgram.value.program_id == 14) {
        try {
          const visit = await getActiveVisit(demographicsStore.patient.ID);
          if (!visit) return;
          checkedIn.value = !!visit.length;
        } catch (error) {
          console.error(error);
        }
      }
    };
    const isActivatingVisit = ref(false);
    const createVisit = async () => {
      try {
        if (await alertConfirmation(`Are you sure you want to create the visit?`)) {
          isActivatingVisit.value = true;
          if (await openVisit(demographicsStore.patient)) {
            checkedIn.value = true;
            await usePatientList().refresh(Service.getUserLocationId());
            toastSuccess("The patient visit is now active. Patient is on the waiting list for vitals");
          }
        }
      } catch (error) {
        console.error("error activating visit: ", error);
      } finally {
        isActivatingVisit.value = false;
      }
    };
    const isClosingVisit = ref(false);
    const _closeVisit = async () => {
      try {
        if (await alertConfirmation(`Are you sure you want to close the visit?`)) {
          isClosingVisit.value = true;
          if (await closeVisit(patient.value)) {
            checkedIn.value = false;
            await usePatientList().refresh(Service.getUserLocationId());
            toastSuccess("The patient visit is now closed");
          }
        }
      } catch (error) {
        console.error("error: ", error);
      } finally {
        isClosingVisit.value = false;
      }
    };
    const checkPatientIFCheckedIn = async () => {
      if (activeProgram.value.program_id == 14) {
        try {
          const result = await getActiveVisit(demographicsStore.patient.ID);
          checkedIn.value = result.length > 0;
        } catch (e) {
          console.error(e);
        }
      }
    };
    const openProgramPopover = (event2) => {
      programEvent.value = event2;
      programPopover.value = !programPopover.value;
    };
    const openTasks = (type = "tasks") => showProgramTasks(activeProgram.value.program_id, type);
    const isProgramClicking = ref(false);
    const handleProgramClick = async (selectedProgram) => {
      isProgramClicking.value = true;
      try {
        await refreshPrograms();
        if (selectedProgram.program_id == ProgramId.ANC_PROGRAM || selectedProgram.program_id == ProgramId.PNC_PROGRAM || selectedProgram.program_id == ProgramId.LABOUR_AND_DELIVERY_PROGRAM) {
          if (!isFemalePatient.value) {
            toastWarning("Only female patients can be enrolled in this program.");
            return;
          }
          if (patientAge.value < CHILD_BEARING_AGE_MIN) {
            toastWarning(`Patient must be at least ${CHILD_BEARING_AGE_MIN} years old to enroll in this program.`);
            return;
          }
          const found = enrolledPrograms?.value?.find((p) => p.id == selectedProgram.program_id);
          if (!found) {
            if (selectedProgram.program_id == ProgramId.ANC_PROGRAM) {
              programToEnroll.value = selectedProgram.program_id;
              await ANCRedirection();
              return;
            } else if (selectedProgram.program_id == ProgramId.LABOUR_AND_DELIVERY_PROGRAM) {
              await LabourEnrollment(patient.value?.personInformation);
              return;
            } else if (selectedProgram.program_id == ProgramId.PNC_PROGRAM) {
              await PNCEnrollment(patient.value?.personInformation);
              return;
            }
          }
        }
        const programData = await SetProgramService.userProgramData(patient.value.patientID, selectedProgram);
        if (selectedProgram.program_id === 14) {
          if (programData?.canProceed && programData.url && programData.stage) {
            const requiredWaitingList = determineRequiredWaitingList(programData.stage);
            if (!requiredWaitingList) {
              toastWarning("Unable to determine patient stage");
              return;
            }
            if (hasWaitingList(requiredWaitingList)) {
              return router.push(programData.url);
            } else {
              toastWarning(`You don't have access to the ${requiredWaitingList.toLowerCase()}`);
              return;
            }
          } else {
            toastWarning("The visit is not activated");
            return;
          }
        }
        if (programData?.url) {
          return router.push(programData.url);
        }
      } catch (error) {
        console.error("error: ", error);
      } finally {
        isProgramClicking.value = false;
      }
    };
    const determineRequiredWaitingList = (stage) => {
      switch (stage) {
        case "VITALS":
          return "Waiting for Vitals";
        case "CONSULTATION":
          return "Waiting for Consultation";
        case "LAB":
          return "Waiting for Laboratory";
        case "DISPENSATION":
          return "Waiting for Dispensation";
        default:
          return null;
      }
    };
    const refreshPrograms = async () => {
      const programs = patient.activePrograms;
      enrolledPrograms.value = programs?.map((p) => ({
        name: p.program.name,
        id: p.program_id
      }));
    };
    const updateData = async () => {
      checkAge();
      await updateVitalsData();
      await updateCheckInStatus();
      await checkPatientIFCheckedIn();
      await SetProgramService.userProgramData(patient.value.patientID);
      await refreshPrograms();
      checkUnderage();
    };
    const updateVitalsData = async () => {
      vitalsData.value = {};
      bloodGlucose.value = "";
      const height = await ConceptService.getConceptID("Height (cm)");
      const weight = await ConceptService.getConceptID("Weight (kg)");
      const systolic = await ConceptService.getConceptID("Systolic blood pressure");
      const diastolic = await ConceptService.getConceptID("Diastolic blood pressure");
      const temperature = await ConceptService.getConceptID("Temperature (c)");
      const pulse = await ConceptService.getConceptID("Pulse");
      const vitals = await ObservationService.getLatestObsByEncounterIdAndConcepts(6, [height, weight, systolic, diastolic, temperature, pulse]);
      vitals.forEach((item) => {
        if (item.concept_id === height) {
          vitalsData.value.height = item.value_numeric;
        } else if (item.concept_id === weight) {
          vitalsData.value.weight = item.value_numeric;
        } else if (item.concept_id === systolic) {
          vitalsData.value.systolic = item.value_numeric;
        } else if (item.concept_id === diastolic) {
          vitalsData.value.diastolic = item.value_numeric;
        } else if (item.concept_id === temperature) {
          vitalsData.value.temperature = item.value_numeric;
        } else if (item.concept_id === pulse) {
          vitalsData.value.pulse = item.value_numeric;
        }
      });
      bloodGlucose.value = new PatientService().getBloodGlucose(patient.value);
    };
    const covertGender = (gender) => {
      if (gender == "Undetermined") return "Undetermined";
      return ["Male", "M"].includes(gender) ? "Male" : ["Female", "F"].includes(gender) ? "Female" : "";
    };
    const formatBirthdate = () => {
      return HisDate.getBirthdateAge(patient.value?.personInformation?.birthdate);
    };
    onMounted(async () => {
      await updateData();
    });
    watch(
      () => patient,
      async () => {
        await updateData();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        await updateData();
      },
      { deep: true }
    );
    __expose({
      showUnderageWarning
    });
    return (_ctx, _cache) => {
      const _component_ion_list = resolveComponent("ion-list");
      const _component_ion_popover = resolveComponent("ion-popover");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              unref(activeProgram).program_id !== 33 && unref(activeProgram).program_id !== 38 && unref(activeProgram).program_id != "" && unref(screenWidth) < 1120 ? (openBlock(), createBlock(DemographicBar, {
                key: 0,
                onOpenPopover: _cache[0] || (_cache[0] = ($event) => unref(openPopover)($event))
              })) : createCommentVNode("", true),
              unref(activeProgram).program_id == unref(ProgramId).IMMUNIZATION_PROGRAM ? (openBlock(), createBlock(unref(PatientProfile), {
                key: 1,
                updateData: unref(patient)
              }, null, 8, ["updateData"])) : createCommentVNode("", true),
              unref(activeProgram).program_id == unref(ProgramId).HTS_PROGRAM ? (openBlock(), createBlock(unref(HTSPatientProfile), {
                key: 2,
                updateData: unref(patient)
              }, null, 8, ["updateData"])) : createCommentVNode("", true),
              unref(activeProgram).program_id == unref(ProgramId).AETC_PROGRAM ? (openBlock(), createBlock(unref(AETCPatientProfile), {
                key: 3,
                updateData: unref(patient)
              }, null, 8, ["updateData"])) : createCommentVNode("", true),
              isNeonatalActiveProgram.value ? (openBlock(), createBlock(unref(NeonatalPatientProfile), { key: 4 })) : createCommentVNode("", true),
              unref(activeProgram).program_id !== unref(ProgramId).AETC_PROGRAM && unref(activeProgram).program_id !== unref(ProgramId).IMMUNIZATION_PROGRAM && unref(activeProgram).program_id !== unref(ProgramId).HTS_PROGRAM && !isNeonatalActiveProgram.value && unref(activeProgram).program_id != "" ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(unref(IonRow), { class: "content_width" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), {
                      size: "2.5",
                      "size-lg": "2.6",
                      "size-md": "3",
                      class: "displayNoneLeftPanel"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCard), { style: { "margin-bottom": "20px", "background-color": "#fff" } }, {
                          default: withCtx(() => [
                            createVNode(unref(IonCardContent), null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_2, [
                                  _cache[24] || (_cache[24] = createBaseVNode("div", null, null, -1)),
                                  createBaseVNode("div", {
                                    class: "name",
                                    style: { "color": "var(--ion-color-primary)", "margin-top": "10px" },
                                    onClick: _cache[1] || (_cache[1] = ($event) => unref(openPopover)($event))
                                  }, [
                                    createVNode(unref(IonIcon), {
                                      icon: unref(ellipsisVerticalSharp),
                                      style: { "font-size": "2.2rem" }
                                    }, null, 8, ["icon"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_3, [
                                  createBaseVNode("div", {
                                    class: normalizeClass(unref(patient)?.personInformation?.gender == "M" ? "initialsBox maleColor" : "initialsBox femaleColor"),
                                    onClick: _cache[2] || (_cache[2] = ($event) => unref(openPIM)())
                                  }, [
                                    createVNode(unref(IonIcon), {
                                      style: { "color": "#fff", "font-size": "70px" },
                                      icon: unref(person)
                                    }, null, 8, ["icon"])
                                  ], 2),
                                  createBaseVNode("div", _hoisted_4, [
                                    createBaseVNode("div", _hoisted_5, toDisplayString(unref(patient)?.personInformation?.given_name) + " " + toDisplayString(unref(patient)?.personInformation?.middle_name) + " " + toDisplayString(unref(patient)?.personInformation?.family_name), 1)
                                  ])
                                ]),
                                createVNode(unref(IonRow), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), { size: "4" }, {
                                      default: withCtx(() => [..._cache[25] || (_cache[25] = [
                                        createTextVNode("MRN:", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCol), { class: "demoContent" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(patient).ID), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                unref(activeProgram).program_id === 32 ? (openBlock(), createBlock(unref(IonRow), { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), { size: "4" }, {
                                      default: withCtx(() => [..._cache[26] || (_cache[26] = [
                                        createTextVNode("NCDNumber:", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCol), { class: "demoContent" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(patient).NcdID), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(unref(IonRow), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), { size: "4" }, {
                                      default: withCtx(() => [..._cache[27] || (_cache[27] = [
                                        createTextVNode("Gender:", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCol), { class: "demoContent" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(covertGender(unref(patient)?.personInformation?.gender)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(IonRow), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), { size: "4" }, {
                                      default: withCtx(() => [..._cache[28] || (_cache[28] = [
                                        createTextVNode("Age:", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCol), { class: "demoContent" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatBirthdate()), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(IonRow), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), { size: "4" }, {
                                      default: withCtx(() => [..._cache[29] || (_cache[29] = [
                                        createTextVNode("Address:", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCol), { class: "demoContent" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(formatCurrentAddress)(unref(patient))), 1)
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
                        unref(Service).getProgramID() === 1 ? (openBlock(), createBlock(ArtCard, {
                          key: 0,
                          patient: unref(patient)
                        }, null, 8, ["patient"])) : createCommentVNode("", true),
                        createVNode(unref(IonCard), { style: { "margin-bottom": "20px", "background-color": "#fff" } }, {
                          default: withCtx(() => [
                            createVNode(unref(IonAccordionGroup), { value: ["first"] }, {
                              default: withCtx(() => [
                                createVNode(unref(IonAccordion), {
                                  value: "first",
                                  style: { "background-color": "#fff" },
                                  "toggle-icon-slot": "start"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonItem), {
                                      slot: "header",
                                      color: "white"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(IonLabel), { class: "side_title" }, {
                                          default: withCtx(() => [..._cache[30] || (_cache[30] = [
                                            createTextVNode("Alerts & Reminders ", -1)
                                          ])]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCardContent), { slot: "content" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(setAlerts(), (al, index3) => {
                                          return openBlock(), createElementBlock("span", { key: index3 }, [
                                            al.value ? (openBlock(), createBlock(unref(IonRow), {
                                              key: 0,
                                              style: normalizeStyle(
                                                "border-radius: 5px;  margin-top:10px; margin-bottom:10px;background-color:" + al.backgroundColor
                                              )
                                            }, null, 8, ["style"])) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
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
                    createVNode(unref(IonCol), {
                      offset: "0.07",
                      "size-sm": "12",
                      "size-md": "12",
                      "size-lg": unref(screenWidth) > 1120 ? "9.33" : "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCard), { style: { "background-color": "#fff", "margin-inline": "0px", "padding": "5px", "margin-bottom": "5px", "contain": "unset", "overflow": "unset" } }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createBaseVNode("div", _hoisted_6, [
                                _cache[31] || (_cache[31] = createBaseVNode("div", { class: "vitalsTitle" }, "Most recent Vitals & Biometrics", -1)),
                                createBaseVNode("div", _hoisted_7, [
                                  createBaseVNode("div", _hoisted_8, [
                                    !unref(hasWaitingList)("Waiting for Laboratory") ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                      activateVisitButtonVisible.value ? (openBlock(), createBlock(DynamicButton, {
                                        key: 0,
                                        name: "Activate visit",
                                        onClick: _cache[3] || (_cache[3] = ($event) => createVisit()),
                                        loading: isActivatingVisit.value,
                                        icon: unref(checkmarkCircleOutline),
                                        fill: "solid",
                                        color: "success"
                                      }, null, 8, ["loading", "icon"])) : createCommentVNode("", true),
                                      deactivateVisitButtonVisible.value ? (openBlock(), createBlock(DynamicButton, {
                                        key: 1,
                                        name: "Deactivate Visit",
                                        onClick: _cache[4] || (_cache[4] = ($event) => _closeVisit()),
                                        loading: isClosingVisit.value,
                                        fill: "solid",
                                        icon: unref(closeCircleOutline),
                                        color: "danger"
                                      }, null, 8, ["loading", "icon"])) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    createBaseVNode("div", _hoisted_10, [
                                      createVNode(DynamicButton, {
                                        name: "Tasks",
                                        "onClicked:btn": _cache[5] || (_cache[5] = ($event) => openTasks()),
                                        class: "send-text",
                                        fill: "clear",
                                        color: "secondary"
                                      })
                                    ]),
                                    createBaseVNode("div", _hoisted_11, [
                                      createVNode(DynamicButton, {
                                        name: "Printout/Other",
                                        "onClicked:btn": _cache[6] || (_cache[6] = ($event) => openTasks("other")),
                                        class: "send-text",
                                        fill: "solid",
                                        color: "secondary"
                                      })
                                    ]),
                                    createBaseVNode("div", _hoisted_12, [
                                      createVNode(DynamicButton, {
                                        name: "Start visit",
                                        "onClicked:btn": _cache[7] || (_cache[7] = ($event) => handleProgramClick(unref(activeProgram))),
                                        loading: isProgramClicking.value,
                                        textFontSize: "12px",
                                        class: "send-text"
                                      }, null, 8, ["loading"]),
                                      createBaseVNode("button", {
                                        class: "send-arrow",
                                        onClick: _cache[8] || (_cache[8] = ($event) => openProgramPopover($event))
                                      })
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_13, [
                              createVNode(unref(IonRow), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[32] || (_cache[32] = [
                                      createTextVNode("Weight", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[33] || (_cache[33] = [
                                      createTextVNode("Height", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[34] || (_cache[34] = [
                                      createTextVNode("Temperature", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[35] || (_cache[35] = [
                                      createTextVNode("Blood glucose", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[36] || (_cache[36] = [
                                      createTextVNode("Pulse Rate", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[37] || (_cache[37] = [
                                      createTextVNode("Blood pressure", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonRow), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value?.weight) + " ", 1),
                                      _cache[38] || (_cache[38] = createBaseVNode("span", { class: "vitalsUnits" }, "kg", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value?.height) + " ", 1),
                                      _cache[39] || (_cache[39] = createBaseVNode("span", { class: "vitalsUnits" }, "cm", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value?.temperature) + " ", 1),
                                      _cache[40] || (_cache[40] = createBaseVNode("span", { class: "vitalsUnits" }, "°C", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(bloodGlucose.value?.value) + " ", 1),
                                      createBaseVNode("span", _hoisted_14, toDisplayString(bloodGlucose.value?.unit), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value?.pulse) + " ", 1),
                                      _cache[41] || (_cache[41] = createBaseVNode("span", { class: "vitalsUnits" }, "bpm ", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value?.systolic) + "/" + toDisplayString(vitalsData.value?.diastolic), 1),
                                      _cache[42] || (_cache[42] = createBaseVNode("span", { class: "vitalsUnits" }, "mmhg", -1))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_15, [
                          createVNode(unref(IonSegment), {
                            value: segmentContent.value,
                            style: { "margin-top": "5px", "min-width": "540px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonSegmentButton), {
                                value: "Patient Charts",
                                onClick: _cache[9] || (_cache[9] = ($event) => setSegmentContent("Patient Charts"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[43] || (_cache[43] = [
                                      createTextVNode("Patient Charts", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Visits History",
                                onClick: _cache[10] || (_cache[10] = ($event) => setSegmentContent("Visits History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[44] || (_cache[44] = [
                                      createTextVNode("Visits History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Vitals History",
                                onClick: _cache[11] || (_cache[11] = ($event) => setSegmentContent("Vitals History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[45] || (_cache[45] = [
                                      createTextVNode("Vitals History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Lab Tests History",
                                onClick: _cache[12] || (_cache[12] = ($event) => setSegmentContent("Lab Tests History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[46] || (_cache[46] = [
                                      createTextVNode("Lab Tests History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Diagnosis History",
                                onClick: _cache[13] || (_cache[13] = ($event) => setSegmentContent("Diagnosis History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[47] || (_cache[47] = [
                                      createTextVNode("Diagnosis History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Allergies History",
                                onClick: _cache[14] || (_cache[14] = ($event) => setSegmentContent("Allergies History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[48] || (_cache[48] = [
                                      createTextVNode("Allergies History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Medication History",
                                onClick: _cache[15] || (_cache[15] = ($event) => setSegmentContent("Medication History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[49] || (_cache[49] = [
                                      createTextVNode("Medication History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        segmentContent.value == "Patient Charts" ? (openBlock(), createElementBlock("div", _hoisted_16, [
                          createBaseVNode("div", {
                            style: normalizeStyle(unref(screenWidth) > 826 ? "display: flex;" : "display: block;")
                          }, [
                            checkUnderFive.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                              createVNode(unref(WeightHeightChart))
                            ])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_18, [
                              createVNode(unref(BloodPressure))
                            ]),
                            !checkUnderFive.value ? (openBlock(), createElementBlock("div", _hoisted_19, [
                              createVNode(unref(PreviousVitals))
                            ])) : createCommentVNode("", true)
                          ], 4)
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Visits History" ? (openBlock(), createElementBlock("div", _hoisted_20, [
                          createVNode(unref(VisitsHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Vitals History" ? (openBlock(), createElementBlock("div", _hoisted_21, [
                          createVNode(unref(VitalsMeasurementsSummary))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Lab Tests History" ? (openBlock(), createElementBlock("div", _hoisted_22, [
                          createVNode(unref(LabOrdersList), {
                            showAddTestButton: false,
                            showSendToLabButton: false
                          })
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Diagnosis History" ? (openBlock(), createElementBlock("div", _hoisted_23, [
                          createVNode(unref(DiagnosesHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Allergies History" ? (openBlock(), createElementBlock("div", _hoisted_24, [
                          createVNode(unref(AllergiesHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Medication History" ? (openBlock(), createElementBlock("div", _hoisted_25, [
                          createVNode(unref(MedicationsHistory))
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["size-lg"])
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_ion_popover, {
            style: { "--offset-x": "-10px" },
            "is-open": unref(popoverOpen),
            "show-backdrop": false,
            "dismiss-on-select": true,
            event: unref(event),
            onDidDismiss: _cache[22] || (_cache[22] = ($event) => popoverOpen.value = false)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(_component_ion_list, { style: { "--ion-background-color": "#fff", "--offset-x": "-30px" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[16] || (_cache[16] = ($event) => unref(openPIM)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(personOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[50] || (_cache[50] = createBaseVNode("span", { class: "sub-menu-txt" }, "Update demographics", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[17] || (_cache[17] = ($event) => unref(openRelationshipManagement)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(personOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[51] || (_cache[51] = createBaseVNode("span", { class: "sub-menu-txt" }, "Relationship Management", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[18] || (_cache[18] = ($event) => unref(openOutCome)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(documentTextOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[52] || (_cache[52] = createBaseVNode("span", { class: "sub-menu-txt" }, "Update outcome", -1))
                      ]),
                      _: 1
                    }),
                    unref(Service).getProgramID() == 32 ? (openBlock(), createBlock(unref(IonItem), {
                      key: 0,
                      button: true,
                      detail: false,
                      onClick: _cache[19] || (_cache[19] = ($event) => unref(openUpdateNCDNUmbers)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(idCardOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[53] || (_cache[53] = createBaseVNode("span", { class: "sub-menu-txt" }, "Update NCD Number", -1))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[20] || (_cache[20] = ($event) => unref(printVisitSummary)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(printOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[54] || (_cache[54] = createBaseVNode("span", { class: "sub-menu-txt" }, "Print visit summary", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[21] || (_cache[21] = ($event) => unref(printID)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(printOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[55] || (_cache[55] = createBaseVNode("span", { class: "sub-menu-txt" }, "Print client identifier", -1))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["is-open", "event"]),
          createVNode(_component_ion_popover, {
            "is-open": programPopover.value,
            "show-backdrop": false,
            "dismiss-on-select": true,
            event: programEvent.value,
            onDidDismiss: _cache[23] || (_cache[23] = ($event) => programPopover.value = false),
            style: { "--width": "350px" }
          }, {
            default: withCtx(() => [
              createVNode(unref(IonContent), null, {
                default: withCtx(() => [
                  createVNode(_component_ion_list, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filteredPrograms.value, (btn, index) => {
                        return openBlock(), createBlock(unref(IonItem), {
                          button: true,
                          detail: false,
                          style: { "cursor": "pointer" },
                          key: index,
                          onClick: ($event) => handleProgramClick(btn)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              slot: "start",
                              icon: unref(add)
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", _hoisted_26, toDisplayString(btn?.actionName), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["is-open", "event"])
        ]),
        _: 1
      });
    };
  }
});

const PatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a87108a6"]]);

const PatientProfile$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: PatientProfile
}, Symbol.toStringTag, { value: 'Module' }));

export { ArtCard as A, PatientProfile$1 as P };
