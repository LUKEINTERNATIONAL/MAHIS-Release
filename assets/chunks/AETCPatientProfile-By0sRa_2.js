import { v as defineComponent, aK as useRouter, cv as useRoute, a3 as onMounted, w as watch, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, J as createCommentVNode, D as createBaseVNode, ag as IonRow, az as IonCol, bL as IonCard, bc as IonCardContent, M as IonIcon, e1 as ellipsisVerticalSharp, a5 as normalizeClass, d4 as person, E as toDisplayString, a6 as createTextVNode, H as closeCircleOutline, di as IonSegment, dj as IonSegmentButton, a8 as IonLabel, A as createElementBlock, Q as normalizeStyle, ap as IonItem, a_ as personOutline, x as documentTextOutline, cK as idCardOutline, b0 as printOutline, K as Fragment, S as renderList, d5 as add, bu as IonPage, cT as defineAsyncComponent, cJ as __vitePreload, f as ref, c as computed } from './vendor-B3kX1Pjg.js';
import { s as storeToRefs } from './pinia-DWumH6Ru.js';
import { A as ArtCard } from './PatientProfile-CkCyA8hi.js';
import { u as useDemographicsStore, a as useProgramStore, h as useWindowSize, ap as SetProgramService, P as PatientService, T as Toolbar, S as Service, F as DynamicButton, H as HisDate, an as iconBMI, k as alertConfirmation, ao as openVisit, v as usePatientList, G as toastSuccess, r as closeVisit, cP as PatientOpdList, o as createModal, K as ObservationService, _ as _export_sfc } from '../index-Chdvo7Z7.js';
import { u as usePatientProfile } from './usePatientProfile-BtU6f_Ii.js';
import { D as DemographicBar } from './DemographicBar-CGNAiHZ7.js';
import { C as CPR } from './CPR-BuzCvBE7.js';

const _hoisted_1 = { class: "content_manager" };
const _hoisted_2 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_3 = { class: "p_name_image" };
const _hoisted_4 = { style: { "width": "100%" } };
const _hoisted_5 = { class: "p_name" };
const _hoisted_6 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_7 = { class: "start-visit" };
const _hoisted_8 = { class: "button-group" };
const _hoisted_9 = { class: "send-button-container action-buttons" };
const _hoisted_10 = { class: "send-button-container" };
const _hoisted_11 = { style: { "padding-left": "10px", "padding-right": "10px" } };
const _hoisted_12 = { class: "vitalsUnits" };
const _hoisted_13 = { style: { "width": "100%", "overflow": "scroll", "height": "64px" } };
const _hoisted_14 = {
  key: 0,
  style: { "margin-top": "1px" }
};
const _hoisted_15 = {
  key: 0,
  class: "patient-chart"
};
const _hoisted_16 = { class: "patient-chart" };
const _hoisted_17 = {
  key: 1,
  class: "patient-chart"
};
const _hoisted_18 = { key: 1 };
const _hoisted_19 = { key: 2 };
const _hoisted_20 = { key: 3 };
const _hoisted_21 = { key: 4 };
const _hoisted_22 = { key: 5 };
const _hoisted_23 = { class: "rght-drpm" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AETCPatientProfile",
  setup(__props, { expose: __expose }) {
    const LabOrdersList = defineAsyncComponent(() => __vitePreload(() => import('./LabOrdersList-iM7yFBwM.js'),true              ?[]:void 0,import.meta.url));
    const DiagnosesHistory = defineAsyncComponent(() => __vitePreload(() => import('./DiagnosesHistory-DudAZroI.js'),true              ?[]:void 0,import.meta.url));
    const AllergiesContraindication = defineAsyncComponent(() => __vitePreload(() => import('./AllergiesHistory-DkQHy9Tk.js'),true              ?[]:void 0,import.meta.url));
    const VisitsHistory = defineAsyncComponent(() => __vitePreload(() => import('./VisitsHistory-DL41wvas.js'),true              ?[]:void 0,import.meta.url));
    const VitalsMeasurementsSummary = defineAsyncComponent(() => __vitePreload(() => import('./VitalsMeasurementsSummary-DN36JRqq.js'),true              ?[]:void 0,import.meta.url));
    const WeightHeightChart = defineAsyncComponent(() => __vitePreload(() => import('./WeightHeightChart-BD5g4u1i.js'),true              ?[]:void 0,import.meta.url));
    const PreviousVitals = defineAsyncComponent(() => __vitePreload(() => import('../index-Chdvo7Z7.js').then(n => n.cS),true              ?[]:void 0,import.meta.url));
    const BloodPressure = defineAsyncComponent(() => __vitePreload(() => import('./BloodPressure-9TGjshAz.js'),true              ?[]:void 0,import.meta.url));
    const router = useRouter();
    const route = useRoute();
    const demographicsStore = useDemographicsStore();
    const programStore = useProgramStore();
    const { event, popoverOpen, openPopover, openPIM, openOutCome, openUpdateNCDNUmbers, printVisitSummary, printID, formatCurrentAddress } = usePatientProfile();
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
    const visits = ref([]);
    const vitalsData = ref({});
    const checkedIn = ref(false);
    const enrolledPrograms = ref([]);
    const bloodGlucose = ref();
    const showUnderageWarning = ref(false);
    const filteredPrograms = computed(() => {
      return [
        {
          label: "Monitoring Chart",
          url: `/aetc/monitoring-chart`
        },
        {
          label: "Nursing Care Notes (SOAPIER)",
          url: `/aetc/soapier`
        },
        {
          label: "Primary Survey",
          url: `/aetc/primary-survey`
        },
        {
          label: "SAMPLE History",
          url: `/aetc/sample-history`
        },
        {
          label: "Secondary Survey",
          url: `/aetc/secondary-survey`
        },
        {
          label: "Differential Diagnosis",
          url: `/aetc/diagnosis`
        },
        {
          label: "Investigations Plan",
          url: `/aetc/investigations`
        },
        {
          label: "Final Diagnosis",
          url: `/aetc/diagnosis`
        },
        {
          label: "Patient Management Plan",
          url: `/aetc/patient-management-plan`
        },
        {
          label: "Continuation Sheet",
          url: `/aetc/continuation-sheet`
        },
        { label: "Disposition", url: `/aetc/disposition` },
        {
          label: "Template Forms",
          isHeader: true
        },
        {
          label: "Medical Inpatient Admission Sheet",
          url: `/aetc/template-forms/medical-admission`,
          isChild: true
        },
        {
          label: "Surgical Notes",
          url: `/aetc/template-forms/surgical-notes`,
          isChild: true
        }
      ];
    });
    const activateVisitButtonVisible = computed(() => {
      return !checkedIn.value && activeProgram.value.program_id == 14;
    });
    const deactivateVisitButtonVisible = computed(() => {
      return checkedIn.value && activeProgram.value.program_id == 14;
    });
    const checkUnderage = () => {
      if (patient.value?.personInformation?.birthdate) {
        const age = HisDate.getAgeInYears(patient.value.personInformation.birthdate);
        showUnderageWarning.value = age < 9;
      }
    };
    const checkAge = () => {
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
          const visit = await PatientOpdList.getCheckInStatus(patient.value.patientID);
          checkedIn.value = !!visit.length;
        } catch (error) {
          console.error(error);
        }
      }
    };
    const createVisit = async () => {
      if (await alertConfirmation(`Are you sure you want to create the visit?`)) {
        if (await openVisit(demographicsStore.patient)) {
          checkedIn.value = true;
          await usePatientList().refresh(Service.getUserLocationId());
          toastSuccess("The patient visit is now active. Patient is on the waiting list for vitals");
        }
      }
    };
    const _closeVisit = async () => {
      if (await alertConfirmation(`Are you sure you want to close the visit?`)) {
        if (await closeVisit(patient.value)) {
          checkedIn.value = false;
          await usePatientList().refresh(Service.getUserLocationId());
          toastSuccess("The patient visit is now closed");
        }
      }
    };
    const checkPatientIFCheckedIn = async () => {
      if (activeProgram.value.program_id == 14) {
        try {
          const result = await PatientOpdList.getCheckInStatus(patient.value.patientID);
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
    const openCPRModal = () => {
      createModal(CPR, { class: "medium-modal" });
    };
    const handleActionClick = async (selected) => {
      return router.push(selected.url);
    };
    const refreshPrograms = async () => {
      const programs = patient.activePrograms;
      enrolledPrograms.value = programs?.map((p) => ({
        name: p.program.name,
        id: p.program_id
      }));
    };
    const updateData = async () => {
      const array = ["Height (cm)", "Weight", "Systolic", "Diastolic", "Temperature", "Pulse", "Respiratory rate"];
      const promises = array.map(async (item) => {
        const value = await ObservationService.getFirstValueNumber(patient.value.patientID, item);
        return { [item]: value };
      });
      bloodGlucose.value = new PatientService().getBloodGlucose(patient.value);
      const resultsArray = await Promise.all(promises);
      vitalsData.value = Object.assign({}, ...resultsArray);
    };
    const covertGender = (gender) => {
      return ["Male", "M"].includes(gender) ? "Male" : ["Female", "F"].includes(gender) ? "Female" : "";
    };
    const formatBirthdate = () => {
      return HisDate.getBirthdateAge(patient.value?.personInformation?.birthdate);
    };
    onMounted(async () => {
      await SetProgramService.userProgramData(patient.value.patientID);
      checkAge();
      const patientInstance = new PatientService();
      visits.value = await PatientService.getPatientVisits(patientInstance.getID(), false);
      await refreshPrograms();
      setAlerts();
      await updateData();
      await checkPatientIFCheckedIn();
    });
    watch(
      () => patient.value?.patientID,
      async (newPatientID) => {
        if (newPatientID) {
          await SetProgramService.userProgramData(newPatientID);
          await refreshPrograms();
        }
      },
      { immediate: true }
    );
    watch(
      () => patient,
      async () => {
        await SetProgramService.userProgramData(patient.value.patientID);
        await updateData();
        await checkPatientIFCheckedIn();
        await updateCheckInStatus();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        await SetProgramService.userProgramData(patient.value.patientID);
      },
      { deep: true }
    );
    watch(
      () => patient.value,
      () => {
        checkUnderage();
      },
      { immediate: true, deep: true }
    );
    __expose({
      showUnderageWarning
    });
    return (_ctx, _cache) => {
      const _component_ion_list = resolveComponent("ion-list");
      const _component_ion_popover = resolveComponent("ion-popover");
      const _component_ion_item_divider = resolveComponent("ion-item-divider");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              unref(activeProgram).program_id !== 33 && unref(activeProgram).program_id != "" && unref(screenWidth) < 1120 ? (openBlock(), createBlock(DemographicBar, {
                key: 0,
                onOpenPopover: _cache[0] || (_cache[0] = ($event) => unref(openPopover)($event))
              })) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_1, [
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
                                  _cache[22] || (_cache[22] = createBaseVNode("div", null, null, -1)),
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
                                      default: withCtx(() => [..._cache[23] || (_cache[23] = [
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
                                      default: withCtx(() => [..._cache[24] || (_cache[24] = [
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
                                      default: withCtx(() => [..._cache[25] || (_cache[25] = [
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
                                      default: withCtx(() => [..._cache[26] || (_cache[26] = [
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
                                      default: withCtx(() => [..._cache[27] || (_cache[27] = [
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
                        }, null, 8, ["patient"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCol), {
                      "size-sm": "12",
                      "size-md": "12",
                      "size-lg": unref(screenWidth) > 1120 ? "9.4" : "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCard), { style: { "background-color": "#fff", "margin-inline": "0px", "contain": "unset", "overflow": "unset" } }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createBaseVNode("div", _hoisted_6, [
                                _cache[28] || (_cache[28] = createBaseVNode("div", { class: "vitalsTitle" }, "Most recent Vitals & Biometrics", -1)),
                                createBaseVNode("div", _hoisted_7, [
                                  createBaseVNode("div", _hoisted_8, [
                                    createBaseVNode("div", _hoisted_9, [
                                      activateVisitButtonVisible.value ? (openBlock(), createBlock(DynamicButton, {
                                        key: 0,
                                        name: "Activate visit",
                                        onClick: _cache[3] || (_cache[3] = ($event) => createVisit()),
                                        fill: "clear",
                                        iconSlot: "start",
                                        icon: unref(closeCircleOutline),
                                        class: "action-button"
                                      }, null, 8, ["icon"])) : createCommentVNode("", true),
                                      deactivateVisitButtonVisible.value ? (openBlock(), createBlock(DynamicButton, {
                                        key: 1,
                                        name: "Deactivate Visit",
                                        onClick: _cache[4] || (_cache[4] = ($event) => _closeVisit()),
                                        fill: "clear",
                                        iconSlot: "start",
                                        icon: unref(closeCircleOutline),
                                        class: "action-button danger"
                                      }, null, 8, ["icon"])) : createCommentVNode("", true)
                                    ]),
                                    createBaseVNode("div", null, [
                                      createBaseVNode("button", {
                                        class: "send-button-container clear-btn",
                                        onClick: _cache[5] || (_cache[5] = ($event) => openCPRModal())
                                      }, "Start CPR")
                                    ]),
                                    createBaseVNode("div", _hoisted_10, [
                                      createBaseVNode("button", {
                                        class: "send-text",
                                        onClick: _cache[6] || (_cache[6] = ($event) => handleActionClick(unref(activeProgram)))
                                      }, "Start visit"),
                                      createBaseVNode("button", {
                                        class: "send-arrow",
                                        onClick: _cache[7] || (_cache[7] = ($event) => openProgramPopover($event))
                                      })
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_11, [
                              createVNode(unref(IonRow), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[29] || (_cache[29] = [
                                      createTextVNode("Weight", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[30] || (_cache[30] = [
                                      createTextVNode("Height", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[31] || (_cache[31] = [
                                      createTextVNode("Temperature", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[32] || (_cache[32] = [
                                      createTextVNode("Blood glucose", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[33] || (_cache[33] = [
                                      createTextVNode("Pulse Rate", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsHeading" }, {
                                    default: withCtx(() => [..._cache[34] || (_cache[34] = [
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
                                      createTextVNode(toDisplayString(vitalsData.value.Weight) + " ", 1),
                                      _cache[35] || (_cache[35] = createBaseVNode("span", { class: "vitalsUnits" }, "kg", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value["Height (cm)"]) + " ", 1),
                                      _cache[36] || (_cache[36] = createBaseVNode("span", { class: "vitalsUnits" }, "cm", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value.Temperature) + " ", 1),
                                      _cache[37] || (_cache[37] = createBaseVNode("span", { class: "vitalsUnits" }, "°C", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(bloodGlucose.value?.value) + " ", 1),
                                      createBaseVNode("span", _hoisted_12, toDisplayString(bloodGlucose.value?.unit), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value.Pulse) + " ", 1),
                                      _cache[38] || (_cache[38] = createBaseVNode("span", { class: "vitalsUnits" }, "bpm ", -1))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(IonCol), { class: "vitalsValue" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(vitalsData.value.Systolic) + "/" + toDisplayString(vitalsData.value.Diastolic), 1),
                                      _cache[39] || (_cache[39] = createBaseVNode("span", { class: "vitalsUnits" }, "mmhg", -1))
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
                        createBaseVNode("div", _hoisted_13, [
                          createVNode(unref(IonSegment), {
                            value: segmentContent.value,
                            style: { "margin-top": "5px", "min-width": "540px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonSegmentButton), {
                                value: "Patient Charts",
                                onClick: _cache[8] || (_cache[8] = ($event) => setSegmentContent("Patient Charts"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[40] || (_cache[40] = [
                                      createTextVNode("Monitoring Chart", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Clinical Notes",
                                onClick: _cache[9] || (_cache[9] = ($event) => setSegmentContent("Clinical Notes"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[41] || (_cache[41] = [
                                      createTextVNode("Clinical Notes", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Lab Tests History",
                                onClick: _cache[10] || (_cache[10] = ($event) => setSegmentContent("Lab Tests History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[42] || (_cache[42] = [
                                      createTextVNode("Investigations", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Medications",
                                onClick: _cache[11] || (_cache[11] = ($event) => setSegmentContent("Medications"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[43] || (_cache[43] = [
                                      createTextVNode("Medications", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Results",
                                onClick: _cache[12] || (_cache[12] = ($event) => setSegmentContent("Results"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[44] || (_cache[44] = [
                                      createTextVNode("Results", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Diagnosis",
                                onClick: _cache[13] || (_cache[13] = ($event) => setSegmentContent("Diagnosis"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[45] || (_cache[45] = [
                                      createTextVNode("Diagnosis", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Visits History",
                                onClick: _cache[14] || (_cache[14] = ($event) => setSegmentContent("Visits History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[46] || (_cache[46] = [
                                      createTextVNode("Visits History", -1)
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
                        segmentContent.value == "Patient Charts" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                          createBaseVNode("div", {
                            style: normalizeStyle(unref(screenWidth) > 826 ? "display: flex;" : "display: block;")
                          }, [
                            checkUnderFive.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
                              createVNode(unref(WeightHeightChart))
                            ])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_16, [
                              createVNode(unref(BloodPressure))
                            ]),
                            !checkUnderFive.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                              createVNode(unref(PreviousVitals))
                            ])) : createCommentVNode("", true)
                          ], 4)
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Visits History" ? (openBlock(), createElementBlock("div", _hoisted_18, [
                          createVNode(unref(VisitsHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Vitals & Measurements Summary" ? (openBlock(), createElementBlock("div", _hoisted_19, [
                          createVNode(unref(VitalsMeasurementsSummary))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Lab Tests History" ? (openBlock(), createElementBlock("div", _hoisted_20, [
                          createVNode(unref(LabOrdersList))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Diagnosis History" ? (openBlock(), createElementBlock("div", _hoisted_21, [
                          createVNode(unref(DiagnosesHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Allergies & Contraindication" ? (openBlock(), createElementBlock("div", _hoisted_22, [
                          createVNode(unref(AllergiesContraindication))
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["size-lg"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_ion_popover, {
            style: { "--offset-x": "-10px" },
            "is-open": unref(popoverOpen),
            "show-backdrop": false,
            "dismiss-on-select": true,
            event: unref(event),
            onDidDismiss: _cache[20] || (_cache[20] = ($event) => popoverOpen.value = false)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(_component_ion_list, { style: { "--ion-background-color": "#fff", "--offset-x": "-30px" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[15] || (_cache[15] = ($event) => unref(openPIM)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(personOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[47] || (_cache[47] = createBaseVNode("span", { class: "sub-menu-txt" }, "Update demographics", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[16] || (_cache[16] = ($event) => unref(openOutCome)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(documentTextOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[48] || (_cache[48] = createBaseVNode("span", { class: "sub-menu-txt" }, "Update outcome", -1))
                      ]),
                      _: 1
                    }),
                    unref(Service).getProgramID() == 32 ? (openBlock(), createBlock(unref(IonItem), {
                      key: 0,
                      button: true,
                      detail: false,
                      onClick: _cache[17] || (_cache[17] = ($event) => unref(openUpdateNCDNUmbers)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(idCardOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[49] || (_cache[49] = createBaseVNode("span", { class: "sub-menu-txt" }, "Update NCD Number", -1))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[18] || (_cache[18] = ($event) => unref(printVisitSummary)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(printOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[50] || (_cache[50] = createBaseVNode("span", { class: "sub-menu-txt" }, "Print visit summary", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[19] || (_cache[19] = ($event) => unref(printID)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(printOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[51] || (_cache[51] = createBaseVNode("span", { class: "sub-menu-txt" }, "Print client identifier", -1))
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
            onDidDismiss: _cache[21] || (_cache[21] = ($event) => programPopover.value = false),
            style: { "--width": "300px" }
          }, {
            default: withCtx(() => [
              createVNode(unref(IonContent), { style: { "width": "300px" } }, {
                default: withCtx(() => [
                  createVNode(_component_ion_list, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filteredPrograms.value, (btn, index) => {
                        return openBlock(), createElementBlock(Fragment, { key: index }, [
                          btn.isHeader ? (openBlock(), createBlock(_component_ion_item_divider, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(unref(IonLabel), { style: { "padding-left": "20px" } }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(btn.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : (openBlock(), createBlock(unref(IonItem), {
                            key: 1,
                            button: true,
                            detail: false,
                            style: { "cursor": "pointer" },
                            class: normalizeClass({ "child-item": btn.isChild }),
                            onClick: ($event) => handleActionClick(btn)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                slot: "start",
                                icon: unref(add)
                              }, null, 8, ["icon"]),
                              createBaseVNode("span", _hoisted_23, toDisplayString(btn.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "onClick"]))
                        ], 64);
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

const AETCPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2662baff"]]);

export { AETCPatientProfile as default };
