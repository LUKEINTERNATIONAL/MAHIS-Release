import { w as watch, f as ref, c as computed, s as defineComponent, a3 as onMounted, y as openBlock, z as createElementBlock, C as createBaseVNode, F as unref, A as createVNode, B as withCtx, aB as IonCol, a5 as createTextVNode, af as IonRow, J as Fragment, S as renderList, O as createBlock, D as toDisplayString, N as IonButton, L as IonIcon, dj as eyeOutline, H as createCommentVNode, fB as TransitionGroup, bW as trashOutline, aS as syncOutline, fC as Transition, a8 as withModifiers, bI as addOutline, I as IonHeader, aE as IonToolbar, aF as IonTitle, bf as IonButtons, aH as IonContent, bH as IonModal, aM as useRouter, bN as useRoute, fk as onIonViewWillEnter, bw as IonPage, f1 as provide } from './vendor-CZkQjgFf.js';
import { u as useDemographicsStore, S as Service, g as getPouchDBRecords, O as OrderService, M as ConceptService, J as savePatientRecord, aY as AppEncounterService, b as EncounterTypeId, G as toastSuccess, t as toastWarning, z as StandardForm, o as createModal, _ as _export_sfc, T as Toolbar } from '../index-BM8B4uT5.js';
import { o as neonatalInvestigationSections, N as NeonatalStepper } from './NeonatalStepper-C1eR1pzX.js';
import { d as defineStore, s as storeToRefs } from './pinia-CBCkT7wa.js';
import { _ as _sfc_main$2 } from './EnterLabResultsModal.vue_vue_type_script_setup_true_lang-3_73V3-j.js';
import { S as SummarySection, n as neonatalInvestigationFormKey } from './SummarySection-BjpeTKAY.js';

const useNeonatalInvestigationStore = defineStore("neonatalInvestigation", () => {
  const demographicsStore = useDemographicsStore();
  const { patient } = storeToRefs(demographicsStore);
  const queuedTests = ref([]);
  const investigationForm = ref({
    test: "",
    specimen: ""
  });
  const labOrders = ref([]);
  const testList = ref([]);
  const specimenList = ref([]);
  const indicatorNames = ref({});
  const isSubmitting = ref(false);
  const investigationsWithResults = computed(() => {
    if (!labOrders.value) return [];
    return labOrders.value.filter((order) => order.tests?.some((test) => test.result && test.result.length > 0));
  });
  const investigationsWithoutResults = computed(() => {
    if (!labOrders.value) return [];
    return labOrders.value.filter((order) => order.tests?.every((test) => !test.result || test.result.length === 0));
  });
  const queuedTestsSummary = computed(() => {
    if (queuedTests.value.length === 0) return "";
    return queuedTests.value.map((t) => `${t.name} (${t.specimen})`).join(", ");
  });
  const allInvestigationsSummary = computed(() => {
    const parts = [];
    if (labOrders.value.length > 0) {
      const sentTests = labOrders.value.flatMap((order) => {
        const tests = (order.tests || []).map((test) => {
          const testName = test.name || test.test_name || "Unknown Test";
          const specimenName = order.specimen?.name || order.specimen || "N/A";
          return `${testName} (${specimenName})`;
        });
        return tests;
      });
      if (sentTests.length > 0) {
        parts.push("Sent to Lab:\n" + sentTests.join("\n"));
      }
    }
    if (queuedTests.value.length > 0) {
      const queuedList = queuedTests.value.map((t) => `${t.name} (${t.specimen})`);
      parts.push("Pending:\n" + queuedList.join("\n"));
    }
    return parts.join("\n\n") || "";
  });
  const formValues = computed(() => ({
    ...investigationForm.value,
    queuedTestsSummary: allInvestigationsSummary.value
  }));
  const loadLabOrders = async () => {
    const patientData = patient.value;
    labOrders.value = patientData?.labOrders ? [...patientData.labOrders.saved || [], ...patientData.labOrders.unsaved || []] : [];
  };
  const loadTestTypes = async () => {
    const isOffline = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
    testList.value = isOffline ? await getPouchDBRecords("test_types") : await OrderService.getTestTypes();
  };
  const fetchSpecimens = async (testName) => {
    if (!testName) {
      specimenList.value = [];
      return;
    }
    const isOffline = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
    const specimens = isOffline ? await getPouchDBRecords("specimens") : await OrderService.getSpecimens("", 1e3);
    const conceptSet = await ConceptService.getConceptSet(testName, "", { names: specimens.map((i) => i.name) });
    specimenList.value = conceptSet;
  };
  const addQueuedTest = async (test, specimen) => {
    const newRow = {
      localId: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      concept_id: test.concept_id,
      name: test.name,
      specimen: specimen.name,
      reason: "Routine",
      specimenConcept: await ConceptService.getConceptID(specimen.name, true)
    };
    const exists = queuedTests.value.some((r) => r.concept_id === newRow.concept_id && r.specimenConcept === newRow.specimenConcept);
    if (!exists) queuedTests.value.push(newRow);
  };
  const removeTest = (localId) => {
    queuedTests.value = queuedTests.value.filter((t) => t.localId !== localId);
  };
  const clearTests = () => {
    queuedTests.value = [];
  };
  const syncQueuedTests = async () => {
    if (queuedTests.value.length === 0) return;
    try {
      isSubmitting.value = true;
      const investigationPayload = queuedTests.value.map(({ localId, ...rest }) => rest);
      const data = await OrderService.buildLabOrders("", investigationPayload);
      const patientData = JSON.parse(JSON.stringify(patient.value));
      (patientData.labOrders ??= {}).unsaved ??= [];
      patientData.labOrders.unsaved.push(...data);
      try {
        await savePatientRecord(patientData);
      } catch (saveError) {
        if (saveError?.status === 409 || saveError?.message?.includes("409") || saveError?.message?.includes("Conflict")) {
          const demographicsStore2 = useDemographicsStore();
          demographicsStore2.patient.labOrders = patientData.labOrders;
        } else {
          throw saveError;
        }
      }
      try {
        const userId = Service.getUserID() ?? -1;
        const sessionDate = Service.getSessionDate();
        const encounter = new AppEncounterService(patient.value.patientID, EncounterTypeId.LAB_ORDERS, userId);
        encounter.setDate(sessionDate);
        await encounter.createEncounter();
      } catch (e) {
        if (!(e?.status === 409 || e?.message?.includes("409") || e?.message?.includes("Conflict"))) {
          console.error("Unexpected error creating LAB_ORDERS encounter:", e);
        }
      }
      await loadLabOrders();
      clearTests();
      investigationForm.value.test = "";
      investigationForm.value.specimen = "";
      toastSuccess("Lab tests sent successfully");
    } catch (error) {
      console.error("Failed to sync tests:", error);
      toastWarning("Failed to sync tests");
    } finally {
      isSubmitting.value = false;
    }
  };
  const fetchIndicatorNames = async (test) => {
    if (test.result) {
      for (const res of test.result) {
        const conceptId = res.indicator.concept_id;
        if (!indicatorNames.value[conceptId]) {
          const name = await ConceptService.getConceptName(conceptId);
          indicatorNames.value[conceptId] = typeof name === "object" ? name.name || name.display : name;
        }
      }
    }
  };
  const initialLoad = async () => {
    await Promise.all([loadTestTypes(), loadLabOrders()]);
  };
  watch(
    () => patient.value,
    async () => {
      await loadLabOrders();
    },
    { deep: true }
  );
  return {
    // State
    queuedTests,
    investigationForm,
    labOrders,
    testList,
    specimenList,
    indicatorNames,
    isSubmitting,
    // Getters
    investigationsWithResults,
    investigationsWithoutResults,
    queuedTestsSummary,
    allInvestigationsSummary,
    formValues,
    // Actions
    initialLoad,
    fetchSpecimens,
    addQueuedTest,
    removeTest,
    clearTests,
    syncQueuedTests,
    fetchIndicatorNames,
    loadLabOrders
  };
});

const _hoisted_1 = { class: "lab-orders" };
const _hoisted_2 = { class: "ion-padding" };
const _hoisted_3 = {
  key: 0,
  class: "lab-orders__section"
};
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  key: 1,
  class: "result-text-value"
};
const _hoisted_6 = {
  key: 0,
  class: "see-more-container"
};
const _hoisted_7 = {
  key: 1,
  class: "lab-orders__section"
};
const _hoisted_8 = {
  key: 0,
  class: "see-more-container"
};
const _hoisted_9 = { class: "lab-orders__section" };
const _hoisted_10 = {
  key: 0,
  class: "queued-tests"
};
const _hoisted_11 = { class: "sync-action" };
const _hoisted_12 = { class: "sync-text" };
const _hoisted_13 = {
  key: 0,
  class: "report-card"
};
const _hoisted_14 = { class: "report-header" };
const _hoisted_15 = { class: "report-title-row" };
const _hoisted_16 = { class: "report-meta" };
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "results-table" };
const _hoisted_19 = { class: "indicator-name" };
const _hoisted_20 = { class: "indicator-value" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Investigation",
  setup(__props) {
    const investigationStore = useNeonatalInvestigationStore();
    const {
      queuedTests,
      testList,
      specimenList,
      indicatorNames,
      isSubmitting,
      investigationsWithResults,
      investigationsWithoutResults
    } = storeToRefs(investigationStore);
    const formRef = ref();
    const selectedTestName = ref("");
    const isModalOpen = ref(false);
    const selectedInvestigation = ref(null);
    const selectedTest = ref(null);
    const showAllPast = ref(false);
    const showAllPending = ref(false);
    const displayedPastResults = computed(() => showAllPast.value ? investigationsWithResults.value : investigationsWithResults.value.slice(0, 3));
    const displayedPendingResults = computed(
      () => showAllPending.value ? investigationsWithoutResults.value : investigationsWithoutResults.value.slice(0, 3)
    );
    const formData = computed(() => {
      return neonatalInvestigationSections[0].formData.filter((field) => !field.hidden && field.componentType !== "Slot").map((field) => {
        if (field.name === "test") {
          return {
            ...field,
            options: testList.value,
            onChange: (val) => selectedTestName.value = val?.name || ""
          };
        }
        if (field.name === "specimen") {
          return {
            ...field,
            value: specimenList.value.length === 1 ? specimenList.value[0] : "",
            options: specimenList.value.length > 1 ? specimenList.value : []
          };
        }
        return field;
      });
    });
    function formatDate(dateString) {
      if (!dateString) return "N/A";
      const date = new Date(dateString);
      return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getFullYear()).slice(
        -2
      )} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    }
    async function showResultsModal(investigation, test) {
      selectedInvestigation.value = investigation;
      selectedTest.value = test;
      isModalOpen.value = true;
      await investigationStore.fetchIndicatorNames(test);
    }
    function closeModal() {
      isModalOpen.value = false;
      selectedInvestigation.value = null;
      selectedTest.value = null;
    }
    const addResults = async (investigation) => {
      await createModal(_sfc_main$2, { class: "large-medium-width-modal " }, true, { test_data: investigation });
    };
    const buildSaveTest = async () => {
      if (!formRef.value || formRef.value.validateForm()) return;
      const formValues = formRef.value.getFormValues();
      const test = formValues["test"];
      const specimen = formValues["specimen"];
      await investigationStore.addQueuedTest(test, specimen);
      formRef.value?.resetForm?.();
      selectedTestName.value = "";
    };
    function removeQueuedTest(localId) {
      investigationStore.removeTest(localId);
    }
    const syncQueuedTests = async () => {
      await investigationStore.syncQueuedTests();
      formRef.value?.resetForm?.();
    };
    watch(selectedTestName, async (val) => {
      await investigationStore.fetchSpecimens(val);
    });
    onMounted(async () => {
      await investigationStore.initialLoad();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[25] || (_cache[25] = createBaseVNode("header", { class: "lab-orders__header" }, "Lab Orders", -1)),
        createBaseVNode("div", _hoisted_2, [
          unref(investigationsWithResults) && unref(investigationsWithResults).length > 0 ? (openBlock(), createElementBlock("section", _hoisted_3, [
            _cache[6] || (_cache[6] = createBaseVNode("h6", { class: "section-title" }, "Past Investigations", -1)),
            createVNode(unref(IonRow), { class: "table-header" }, {
              default: withCtx(() => [
                createVNode(unref(IonCol), { size: "3" }, {
                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createTextVNode("Date", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "3" }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode("Test", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "3" }, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("Specimen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "3" }, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode("Result", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayedPastResults.value, (investigation) => {
              return openBlock(), createBlock(unref(IonRow), {
                key: `past-${investigation.order_id}`,
                class: "table-row table-row--completed"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), { size: "3" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(formatDate(investigation.order_date)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(IonCol), { size: "3" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(investigation.tests, (test) => {
                        return openBlock(), createElementBlock("div", {
                          key: test.id,
                          class: "test-item"
                        }, toDisplayString(test.name), 1);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(IonCol), { size: "3" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(investigation.specimen?.name || "N/A"), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(IonCol), { size: "3" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(investigation.tests, (test) => {
                        return openBlock(), createElementBlock("div", {
                          key: test.id
                        }, [
                          test.result && test.result.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                            test.result.length > 1 ? (openBlock(), createBlock(unref(IonButton), {
                              key: 0,
                              fill: "clear",
                              size: "small",
                              onClick: ($event) => showResultsModal(investigation, test),
                              class: "view-results-btn"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonIcon), {
                                  icon: unref(eyeOutline),
                                  slot: "icon-only"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(test.result[0].value), 1))
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128)),
            unref(investigationsWithResults).length > 3 ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createVNode(unref(IonButton), {
                fill: "clear",
                size: "small",
                onClick: _cache[0] || (_cache[0] = ($event) => showAllPast.value = !showAllPast.value)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(showAllPast.value ? "See Less" : "See More"), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          unref(investigationsWithoutResults) && unref(investigationsWithoutResults).length > 0 ? (openBlock(), createElementBlock("section", _hoisted_7, [
            _cache[13] || (_cache[13] = createBaseVNode("h6", { class: "section-title" }, "Investigations List", -1)),
            createVNode(unref(IonRow), { class: "table-header" }, {
              default: withCtx(() => [
                createVNode(unref(IonCol), { size: "2.4" }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createTextVNode("Date", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "2.4" }, {
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [
                    createTextVNode("Test", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "2.4" }, {
                  default: withCtx(() => [..._cache[9] || (_cache[9] = [
                    createTextVNode("Specimen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "2.4" }, {
                  default: withCtx(() => [..._cache[10] || (_cache[10] = [
                    createTextVNode("Accession #", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonCol), { size: "2.4" }, {
                  default: withCtx(() => [..._cache[11] || (_cache[11] = [
                    createTextVNode("Action", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayedPendingResults.value, (investigation) => {
              return openBlock(), createBlock(unref(IonRow), {
                key: `pending-${investigation.order_id}`,
                class: "table-row"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), { size: "2.4" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(formatDate(investigation.order_date)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(IonCol), { size: "2.4" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(investigation.tests, (test) => {
                        return openBlock(), createElementBlock("div", {
                          key: test.id,
                          class: "test-item"
                        }, toDisplayString(test.name), 1);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(IonCol), { size: "2.4" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(investigation.specimen?.name || "N/A"), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(IonCol), { size: "2.4" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(investigation.accession_number), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(IonCol), { size: "2.4" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        size: "small",
                        onClick: ($event) => addResults(investigation)
                      }, {
                        default: withCtx(() => [..._cache[12] || (_cache[12] = [
                          createTextVNode(" Add Results ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128)),
            unref(investigationsWithoutResults).length > 3 ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createVNode(unref(IonButton), {
                fill: "clear",
                size: "small",
                onClick: _cache[1] || (_cache[1] = ($event) => showAllPending.value = !showAllPending.value)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(showAllPending.value ? "See Less" : "See More"), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createBaseVNode("section", _hoisted_9, [
            createVNode(Transition, { name: "fade-slide" }, {
              default: withCtx(() => [
                unref(queuedTests).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  _cache[17] || (_cache[17] = createBaseVNode("div", { class: "queue-header" }, [
                    createBaseVNode("h6", {
                      class: "section-title",
                      style: { "margin": "0" }
                    }, "Pending Tests")
                  ], -1)),
                  createVNode(unref(IonRow), { class: "table-header" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), { size: "5" }, {
                        default: withCtx(() => [..._cache[14] || (_cache[14] = [
                          createTextVNode("Test", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(unref(IonCol), { size: "5" }, {
                        default: withCtx(() => [..._cache[15] || (_cache[15] = [
                          createTextVNode("Specimen", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(unref(IonCol), {
                        size: "2",
                        class: "action-col"
                      }, {
                        default: withCtx(() => [..._cache[16] || (_cache[16] = [
                          createTextVNode("Action", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(TransitionGroup, { name: "list" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(queuedTests), (row) => {
                        return openBlock(), createBlock(unref(IonRow), {
                          key: row.localId,
                          class: "table-row"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonCol), { size: "5" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(row.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(IonCol), { size: "5" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(row.specimen), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(IonCol), {
                              size: "2",
                              class: "row-actions action-col"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonButton), {
                                  fill: "clear",
                                  size: "small",
                                  class: "remove-icon-btn",
                                  onClick: ($event) => removeQueuedTest(row.localId),
                                  "aria-label": "Remove"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonIcon), {
                                      icon: unref(trashOutline),
                                      slot: "icon-only"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(unref(IonButton), {
                      class: "sync-btn",
                      fill: "solid",
                      size: "small",
                      color: "primary",
                      onClick: syncQueuedTests,
                      disabled: unref(isSubmitting) || unref(queuedTests).length === 0
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(syncOutline),
                          slot: "start",
                          class: "sync-icon"
                        }, null, 8, ["icon"]),
                        createBaseVNode("span", _hoisted_12, toDisplayString(unref(isSubmitting) ? "Sending..." : `Send to Lab (${unref(queuedTests).length})`), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            _cache[18] || (_cache[18] = createBaseVNode("h6", { class: "section-title" }, "Make Investigations", -1)),
            createVNode(unref(IonRow), {
              class: "form-row",
              style: { "align-items": "flex-end" }
            }, {
              default: withCtx(() => [
                createVNode(unref(IonCol), {
                  size: "10",
                  "size-md": "11"
                }, {
                  default: withCtx(() => [
                    createVNode(StandardForm, {
                      formData: formData.value,
                      ref_key: "formRef",
                      ref: formRef
                    }, null, 8, ["formData"])
                  ]),
                  _: 1
                }),
                createVNode(unref(IonCol), {
                  size: "2",
                  "size-md": "1",
                  class: "form-actions"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonButton), {
                      fill: "solid",
                      color: "primary",
                      class: "add-test-btn",
                      onClick: withModifiers(buildSaveTest, ["stop", "prevent"]),
                      disabled: unref(isSubmitting),
                      type: "button"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(addOutline),
                          slot: "icon-only"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(unref(IonModal), {
          "is-open": isModalOpen.value,
          onDidDismiss: closeModal,
          class: "medium-modal"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonToolbar), { color: "light" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [..._cache[19] || (_cache[19] = [
                        createTextVNode("Laboratory Report", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(unref(IonButtons), { slot: "end" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), { onClick: closeModal }, {
                          default: withCtx(() => [..._cache[20] || (_cache[20] = [
                            createTextVNode("Close", -1)
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
            createVNode(unref(IonContent), { class: "ion-padding report-content" }, {
              default: withCtx(() => [
                selectedInvestigation.value && selectedTest.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("h3", null, toDisplayString(selectedTest.value.name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("p", null, [
                        _cache[21] || (_cache[21] = createBaseVNode("strong", null, "Date:", -1)),
                        createTextVNode(" " + toDisplayString(formatDate(selectedInvestigation.value.order_date)), 1)
                      ]),
                      createBaseVNode("p", null, [
                        _cache[22] || (_cache[22] = createBaseVNode("strong", null, "Specimen:", -1)),
                        createTextVNode(" " + toDisplayString(selectedInvestigation.value.specimen?.name || "N/A"), 1)
                      ]),
                      selectedInvestigation.value.accession_number ? (openBlock(), createElementBlock("p", _hoisted_17, [
                        _cache[23] || (_cache[23] = createBaseVNode("strong", null, "Accession #:", -1)),
                        createTextVNode(" " + toDisplayString(selectedInvestigation.value.accession_number), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_18, [
                    _cache[24] || (_cache[24] = createBaseVNode("div", { class: "results-table-header" }, [
                      createBaseVNode("span", { class: "col-indicator" }, "Indicator"),
                      createBaseVNode("span", { class: "col-value" }, "Result")
                    ], -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(selectedTest.value.result, (result) => {
                      return openBlock(), createElementBlock("div", {
                        key: result.id,
                        class: "results-table-row"
                      }, [
                        createBaseVNode("span", _hoisted_19, toDisplayString(unref(indicatorNames)[result.indicator.concept_id] || "Loading..."), 1),
                        createBaseVNode("span", _hoisted_20, toDisplayString(result.value), 1)
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["is-open"])
      ]);
    };
  }
});

const Investigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f71749cc"]]);

const stepperTitle = "Investigations";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Investigation",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const currentOpenStepper = ref("1");
    const stepperKey = ref(0);
    const router = useRouter();
    const route = useRoute();
    onIonViewWillEnter(() => {
      stepperKey.value++;
    });
    const investigationStore = useNeonatalInvestigationStore();
    const { formValues } = storeToRefs(investigationStore);
    provide(neonatalInvestigationFormKey, formValues);
    const wizardData = ref(
      neonatalInvestigationSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalInvestigationSections.length - 1 ? "last_step" : ""
      }))
    );
    const sectionComponents = [Investigation, SummarySection];
    const stepperData = neonatalInvestigationSections.map((section, index) => ({
      title: section.title,
      subtitle: section.subtitle,
      value: (index + 1).toString(),
      component: sectionComponents[index] || Investigation,
      configIndex: index
    }));
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
    const getSaveFnForStep = (stepIndex) => {
      const finalStepIndex = stepperData.length - 1;
      if (stepIndex === finalStepIndex) {
        return async () => {
          if (investigationStore.queuedTests.length > 0) {
            await investigationStore.syncQueuedTests();
          } else {
            if (route.query.from !== "profile") {
              try {
                const userId = Service.getUserID() ?? -1;
                const encounter = new AppEncounterService(patient.value.patientID, EncounterTypeId.LAB_RESULTS, userId);
                encounter.setDate(Service.getSessionDate());
                await encounter.createEncounter();
              } catch (error) {
                console.error("Failed to save investigation completion marker", error);
              }
            }
          }
          if (route.query.from === "profile") {
            router.push({ name: "patientProfile" });
          } else {
            router.push("/neonatal/checkpoint");
          }
        };
      }
      return () => Promise.resolve();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), { class: "neonatal-enrollment-page" }, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              (openBlock(), createBlock(NeonatalStepper, {
                key: stepperKey.value,
                wizardData: wizardData.value,
                StepperData: unref(stepperData),
                stepperTitle,
                openStepper: currentOpenStepper.value,
                backUrl: "/patient-profile",
                getSaveFunction: getSaveFnForStep,
                sectionsConfig: unref(neonatalInvestigationSections),
                flowType: "investigation",
                "show-componet-title": true,
                onUpdateStatus: updateStatus
              }, null, 8, ["wizardData", "StepperData", "openStepper", "sectionsConfig"]))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
