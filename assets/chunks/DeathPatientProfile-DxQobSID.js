import { s as defineComponent, ct as useRoute, w as watch, a2 as onMounted, y as openBlock, z as createElementBlock, C as createBaseVNode, O as createBlock, F as unref, bp as V, B as withCtx, f as ref, c as computed, A as createVNode, aG as IonContent, H as createCommentVNode, af as IonRow, aA as IonCol, bK as IonCard, bd as IonCardContent, L as IonIcon, e0 as ellipsisVerticalSharp, a4 as normalizeClass, d2 as person, D as toDisplayString, dq as skullOutline, a5 as createTextVNode, Q as alertCircleOutline, dg as IonSegment, dh as IonSegmentButton, a7 as IonLabel, al as IonPopover, ap as IonList, aq as IonItem, a$ as personOutline, b1 as printOutline, bu as IonPage, cR as defineAsyncComponent, cH as __vitePreload } from './vendor-DrpjccQs.js';
import { u as useDemographicsStore, H as HisDate, aq as ConceptService, _ as _export_sfc, a as useProgramStore, h as useWindowSize, T as Toolbar } from '../index-CzDIs3ea.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { u as usePatientProfile } from './usePatientProfile-C0pKF7I4.js';
import { D as DemographicBar } from './DemographicBar-EZOQxcSu.js';

const _hoisted_1$1 = { class: "visitContent" };
const _hoisted_2$1 = { class: "visitData" };
const _hoisted_3$1 = { class: "table-responsive" };
const _hoisted_4$1 = {
  key: 0,
  class: "loading-state"
};
const _hoisted_5$1 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DeathDetails",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const route = useRoute();
    const tableData = ref([]);
    const isLoading = ref(false);
    const dataTableOptions = computed(() => ({
      paging: false,
      lengthChange: false,
      searching: false,
      ordering: false,
      info: false,
      autoWidth: true,
      responsive: true
    }));
    const tableColumns = computed(() => [
      { data: "field", title: "Field" },
      { data: "value", title: "Value" }
    ]);
    const formatDate = (date) => {
      if (!date) return "N/A";
      return HisDate.toStandardHisDisplayFormat(date);
    };
    const getConceptNameById = async (conceptId) => {
      try {
        return await ConceptService.getConceptName(conceptId);
      } catch (error) {
        console.error(`Error fetching concept name for ID ${conceptId}:`, error);
        return `Concept ${conceptId}`;
      }
    };
    const processDeathObservationRecursively = async (obs, level, flattenedData) => {
      const indent = "  ".repeat(level);
      const prefix = level > 0 ? "└─ " : "";
      let value = "N/A";
      if (obs.value_text) {
        value = obs.value_text;
      } else if (obs.value_numeric !== null && obs.value_numeric !== void 0) {
        value = String(obs.value_numeric);
      } else if (obs.value_datetime) {
        value = formatDate(obs.value_datetime);
      } else if (obs.value_coded) {
        value = await getConceptNameById(obs.value_coded);
      }
      const conceptName = obs.concept_name || await getConceptNameById(obs.concept_id);
      flattenedData.push({
        field: `${indent}${prefix}${conceptName}`,
        value
      });
      if (obs.children && obs.children.length > 0) {
        for (const child of obs.children) {
          await processDeathObservationRecursively(child, level + 1, flattenedData);
        }
      }
    };
    const loadDeathDetails = async () => {
      isLoading.value = true;
      try {
        tableData.value = [];
        const observations = patient.value?.observations || [];
        const outcomeEncounter = observations.find((obs) => obs.encounter_type === 40);
        if (!outcomeEncounter || !outcomeEncounter.obs) {
          tableData.value = [{ field: "Status", value: "No death information available" }];
          return;
        }
        const deathObs = outcomeEncounter.obs.find((o) => o.concept_id === 11520 && o.concept_name === "Death");
        if (!deathObs) {
          tableData.value = [{ field: "Status", value: "Death recorded but details not available" }];
          return;
        }
        const flattenedData = [];
        if (deathObs.obs_datetime) {
          flattenedData.push({
            field: "Recorded Date",
            value: formatDate(deathObs.obs_datetime)
          });
        }
        if (deathObs.provider_id) {
          flattenedData.push({
            field: "Provider ID",
            value: String(deathObs.provider_id)
          });
        }
        if (deathObs.location_id) {
          flattenedData.push({
            field: "Location ID",
            value: String(deathObs.location_id)
          });
        }
        if (deathObs.children && deathObs.children.length > 0) {
          for (const child of deathObs.children) {
            await processDeathObservationRecursively(child, 0, flattenedData);
          }
        }
        tableData.value = flattenedData;
      } catch (error) {
        console.error("Error loading death details:", error);
        tableData.value = [{ field: "Error", value: "Failed to load death information" }];
      } finally {
        isLoading.value = false;
      }
    };
    watch(
      patient,
      async () => {
        await loadDeathDetails();
      },
      { deep: true, immediate: true }
    );
    watch(
      route,
      async () => {
        await loadDeathDetails();
      },
      { deep: true }
    );
    onMounted(async () => {
      await loadDeathDetails();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "table-header" }, [
            createBaseVNode("h3", { class: "encounter-title" }, "Death Information")
          ], -1)),
          createBaseVNode("div", _hoisted_3$1, [
            isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [..._cache[0] || (_cache[0] = [
              createBaseVNode("p", null, "Loading death details...", -1)
            ])])) : tableData.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [..._cache[1] || (_cache[1] = [
              createBaseVNode("p", null, "No death information available", -1)
            ])])) : (openBlock(), createBlock(unref(V), {
              key: 2,
              ref: "dataTable",
              class: "display nowrap modern-table",
              width: "100%",
              data: tableData.value,
              columns: tableColumns.value,
              options: dataTableOptions.value
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", null, "Field"),
                    createBaseVNode("th", null, "Value")
                  ])
                ], -1)
              ])]),
              _: 1
            }, 8, ["data", "columns", "options"]))
          ])
        ])
      ]);
    };
  }
});

const DeathDetails = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-26d9c002"]]);

const _hoisted_1 = { class: "content_manager" };
const _hoisted_2 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_3 = { class: "p_name_image" };
const _hoisted_4 = { style: { "width": "100%" } };
const _hoisted_5 = { class: "p_name" };
const _hoisted_6 = { class: "death-badge" };
const _hoisted_7 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_8 = { style: { "width": "100%", "overflow": "scroll", "height": "64px" } };
const _hoisted_9 = {
  key: 0,
  style: { "margin-top": "1px" }
};
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { key: 2 };
const _hoisted_12 = { key: 3 };
const _hoisted_13 = { key: 4 };
const _hoisted_14 = { key: 5 };
const _hoisted_15 = { key: 6 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DeathPatientProfile",
  setup(__props) {
    const LabOrdersList = defineAsyncComponent(() => __vitePreload(() => import('./LabOrdersList-BWX3nGco.js'),true              ?[]:void 0,import.meta.url));
    const DiagnosesHistory = defineAsyncComponent(() => __vitePreload(() => import('./DiagnosesHistory-DYZGtjG4.js'),true              ?[]:void 0,import.meta.url));
    const AllergiesHistory = defineAsyncComponent(() => __vitePreload(() => import('./AllergiesHistory-DzJO5lw7.js'),true              ?[]:void 0,import.meta.url));
    const MedicationsHistory = defineAsyncComponent(() => __vitePreload(() => import('./MedicationsHistory-Dw-qrrv9.js'),true              ?[]:void 0,import.meta.url));
    const VisitsHistory = defineAsyncComponent(() => __vitePreload(() => import('./VisitsHistory-r4yYuz6X.js'),true              ?[]:void 0,import.meta.url));
    const VitalsMeasurementsSummary = defineAsyncComponent(() => __vitePreload(() => import('./VitalsMeasurementsSummary-BEJzggls.js'),true              ?[]:void 0,import.meta.url));
    const demographicsStore = useDemographicsStore();
    const programStore = useProgramStore();
    const route = useRoute();
    const { event, popoverOpen, openPopover, openPIM, printID, formatCurrentAddress } = usePatientProfile();
    const { screenWidth } = useWindowSize();
    const { patient } = storeToRefs(demographicsStore);
    const { activeProgram } = storeToRefs(programStore);
    const segmentContent = ref("Death Details");
    const deathDate = ref("");
    const causeOfDeath = ref("");
    const locationOfDeath = ref("");
    const recordedBy = ref("");
    const additionalNotes = ref("");
    const setSegmentContent = (name) => {
      segmentContent.value = name;
    };
    const covertGender = (gender) => {
      if (gender == "Undetermined") return "Undetermined";
      return ["Male", "M"].includes(gender) ? "Male" : ["Female", "F"].includes(gender) ? "Female" : "";
    };
    const formatDate = (date) => {
      if (!date) return "N/A";
      return HisDate.toStandardHisDisplayFormat(date);
    };
    const loadDeathDetails = async () => {
      try {
        const observations = patient.value?.observations || [];
        const outcomeEncounter = observations.find((obs) => obs.encounter_type === 40);
        if (!outcomeEncounter || !outcomeEncounter.obs) return;
        const deathObs = outcomeEncounter.obs.find((o) => o.concept_id === 11520 && o.concept_name === "Death");
        if (!deathObs || !deathObs.children) return;
        deathObs.children.forEach((child) => {
          switch (child.concept_id) {
            case 1815:
              deathDate.value = child.value_datetime || child.obs_datetime;
              break;
            case 5002:
              if (child.value_coded) {
                ConceptService.getConceptName(child.value_coded).then((name) => {
                  causeOfDeath.value = name;
                });
              } else if (child.value_text) {
                causeOfDeath.value = child.value_text;
              }
              break;
            case 7837:
              if (child.value_coded) {
                ConceptService.getConceptName(child.value_coded).then((name) => {
                  locationOfDeath.value = name;
                });
              } else if (child.value_text) {
                locationOfDeath.value = child.value_text;
              }
              break;
            case 1824:
              recordedBy.value = child.value_text || "";
              break;
            case 9161:
              const timeOfDeath = child.value_text || child.value_datetime;
              if (timeOfDeath && deathDate.value) {
                additionalNotes.value += `Time of death: ${timeOfDeath}
`;
              }
              break;
            case 7398:
              if (child.value_coded) {
                ConceptService.getConceptName(child.value_coded).then((name) => {
                  additionalNotes.value += `Death on arrival: ${name}
`;
                });
              }
              break;
            case 1345:
              if (child.value_coded) {
                ConceptService.getConceptName(child.value_coded).then((name) => {
                  additionalNotes.value += `Confirmed: ${name}
`;
                });
              }
              break;
          }
        });
        if (deathObs.provider_id && !recordedBy.value) {
          recordedBy.value = `Provider ID: ${deathObs.provider_id}`;
        }
      } catch (error) {
        console.error("Error loading death details:", error);
      }
    };
    const updateData = async () => {
      await loadDeathDetails();
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
      async () => {
        await updateData();
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              unref(activeProgram).program_id !== 33 && unref(activeProgram).program_id !== 38 && unref(activeProgram).program_id != "" && unref(screenWidth) < 1120 ? (openBlock(), createBlock(DemographicBar, { key: 0 })) : createCommentVNode("", true),
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
                                  _cache[12] || (_cache[12] = createBaseVNode("div", null, null, -1)),
                                  createBaseVNode("div", {
                                    class: "name",
                                    style: { "color": "var(--ion-color-primary)", "margin-top": "10px" },
                                    onClick: _cache[0] || (_cache[0] = ($event) => unref(openPopover)($event))
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
                                    onClick: _cache[1] || (_cache[1] = ($event) => unref(openPIM)())
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
                                createVNode(unref(IonRow), { style: { "margin-top": "10px", "margin-bottom": "10px" } }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), null, {
                                      default: withCtx(() => [
                                        createBaseVNode("div", _hoisted_6, [
                                          createVNode(unref(IonIcon), {
                                            icon: unref(skullOutline),
                                            style: { "margin-right": "5px" }
                                          }, null, 8, ["icon"]),
                                          _cache[13] || (_cache[13] = createTextVNode(" DECEASED ", -1))
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(IonRow), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), { size: "4" }, {
                                      default: withCtx(() => [..._cache[14] || (_cache[14] = [
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
                                      default: withCtx(() => [..._cache[15] || (_cache[15] = [
                                        createTextVNode("NCD Number:", -1)
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
                                      default: withCtx(() => [..._cache[16] || (_cache[16] = [
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
                                      default: withCtx(() => [..._cache[17] || (_cache[17] = [
                                        createTextVNode("Date of Birth:", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCol), { class: "demoContent" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatDate(unref(patient)?.personInformation?.birthdate)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(IonRow), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), {
                                      size: "4",
                                      style: { "color": "#b42318" }
                                    }, {
                                      default: withCtx(() => [..._cache[18] || (_cache[18] = [
                                        createTextVNode("Date of Death:", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonCol), {
                                      class: "demoContent",
                                      style: { "color": "#b42318", "font-weight": "700" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatDate(deathDate.value)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(IonRow), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCol), { size: "4" }, {
                                      default: withCtx(() => [..._cache[19] || (_cache[19] = [
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
                        createVNode(unref(IonCard), { style: { "background-color": "#fecdca", "margin-inline": "0px", "padding": "15px", "margin-bottom": "10px" } }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(unref(IonIcon), {
                                icon: unref(alertCircleOutline),
                                style: { "font-size": "24px", "color": "#b42318", "margin-right": "10px" }
                              }, null, 8, ["icon"]),
                              _cache[20] || (_cache[20] = createBaseVNode("div", null, [
                                createBaseVNode("div", { style: { "font-weight": "700", "font-size": "16px", "color": "#b42318" } }, "Patient Deceased"),
                                createBaseVNode("div", { style: { "font-size": "14px", "color": "#b42318" } }, " This patient's records are for historical reference only. No new visits or treatments can be initiated. ")
                              ], -1))
                            ])
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_8, [
                          createVNode(unref(IonSegment), {
                            value: segmentContent.value,
                            style: { "margin-top": "5px", "min-width": "540px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonSegmentButton), {
                                value: "Death Details",
                                onClick: _cache[2] || (_cache[2] = ($event) => setSegmentContent("Death Details"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[21] || (_cache[21] = [
                                      createTextVNode("Death Details", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Visits History",
                                onClick: _cache[3] || (_cache[3] = ($event) => setSegmentContent("Visits History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[22] || (_cache[22] = [
                                      createTextVNode("Visits History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Vitals History",
                                onClick: _cache[4] || (_cache[4] = ($event) => setSegmentContent("Vitals History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[23] || (_cache[23] = [
                                      createTextVNode("Vitals History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Lab Tests History",
                                onClick: _cache[5] || (_cache[5] = ($event) => setSegmentContent("Lab Tests History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[24] || (_cache[24] = [
                                      createTextVNode("Lab Tests History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Diagnosis History",
                                onClick: _cache[6] || (_cache[6] = ($event) => setSegmentContent("Diagnosis History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[25] || (_cache[25] = [
                                      createTextVNode("Diagnosis History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Allergies History",
                                onClick: _cache[7] || (_cache[7] = ($event) => setSegmentContent("Allergies History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[26] || (_cache[26] = [
                                      createTextVNode("Allergies History", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonSegmentButton), {
                                value: "Medication History",
                                onClick: _cache[8] || (_cache[8] = ($event) => setSegmentContent("Medication History"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), null, {
                                    default: withCtx(() => [..._cache[27] || (_cache[27] = [
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
                        segmentContent.value == "Death Details" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                          createVNode(DeathDetails)
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Visits History" ? (openBlock(), createElementBlock("div", _hoisted_10, [
                          createVNode(unref(VisitsHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Vitals History" ? (openBlock(), createElementBlock("div", _hoisted_11, [
                          createVNode(unref(VitalsMeasurementsSummary))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Lab Tests History" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                          createVNode(unref(LabOrdersList), {
                            showAddTestButton: false,
                            showSendToLabButton: false
                          })
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Diagnosis History" ? (openBlock(), createElementBlock("div", _hoisted_13, [
                          createVNode(unref(DiagnosesHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Allergies History" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                          createVNode(unref(AllergiesHistory))
                        ])) : createCommentVNode("", true),
                        segmentContent.value == "Medication History" ? (openBlock(), createElementBlock("div", _hoisted_15, [
                          createVNode(unref(MedicationsHistory))
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
          createVNode(unref(IonPopover), {
            style: { "--offset-x": "-10px" },
            "is-open": unref(popoverOpen),
            "show-backdrop": false,
            "dismiss-on-select": true,
            event: unref(event),
            onDidDismiss: _cache[11] || (_cache[11] = ($event) => popoverOpen.value = false)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(IonList), { style: { "--ion-background-color": "#fff", "--offset-x": "-30px" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[9] || (_cache[9] = ($event) => unref(openPIM)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(personOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[28] || (_cache[28] = createBaseVNode("span", { class: "sub-menu-txt" }, "View demographics", -1))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonItem), {
                      button: true,
                      detail: false,
                      onClick: _cache[10] || (_cache[10] = ($event) => unref(printID)()),
                      style: { "cursor": "pointer" },
                      class: "list-content"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(printOutline),
                          slot: "start",
                          class: "sub-menu-icon"
                        }, null, 8, ["icon"]),
                        _cache[29] || (_cache[29] = createBaseVNode("span", { class: "sub-menu-txt" }, "Print client identifier", -1))
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
        ]),
        _: 1
      });
    };
  }
});

const DeathPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94677dd3"]]);

export { DeathPatientProfile as default };
