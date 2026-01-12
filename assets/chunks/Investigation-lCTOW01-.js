import { q as defineComponent, aH as useRouter, r as ref, d as computed, w as watch, a2 as onMounted, x as createElementBlock, y as openBlock, B as createBaseVNode, z as createVNode, G as createCommentVNode, A as withCtx, E as unref, ay as IonCol, a5 as createTextVNode, af as IonRow, J as Fragment, R as renderList, O as createBlock, C as toDisplayString, N as IonButton, L as IonIcon, dh as eyeOutline, I as IonHeader, aA as IonToolbar, aB as IonTitle, ba as IonButtons, H as IonContent, bD as IonModal, a4 as normalizeClass, da as timeOutline, br as IonPage } from './vendor-BPW-J91F.js';
import { u as useDemographicsStore, n as icons, y as StandardValidations, S as Service, g as getPouchDBRecords, O as OrderService, C as StandardForm, aq as ConceptService, o as createModal, J as savePatientRecord, t as toastWarning, _ as _export_sfc, T as Toolbar } from '../index-BlgLb150.js';
import { y as neonatalInvestigationSections, N as NeonatalStepper } from './NeonatalStepper-BTudxo9P.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';
import { E as EnterLabResultsModal } from './EnterLabResultsModal-M8bKzHpj.js';

const _hoisted_1$1 = { class: "lab-orders" };
const _hoisted_2$1 = { class: "ion-padding" };
const _hoisted_3$1 = {
  key: 0,
  class: "lab-orders__section"
};
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = {
  key: 1,
  class: "result-text-value"
};
const _hoisted_6$1 = {
  key: 0,
  class: "see-more-container"
};
const _hoisted_7$1 = {
  key: 1,
  class: "lab-orders__section"
};
const _hoisted_8$1 = {
  key: 0,
  class: "see-more-container"
};
const _hoisted_9$1 = { class: "lab-orders__section" };
const _hoisted_10$1 = {
  key: 0,
  class: "report-card"
};
const _hoisted_11$1 = { class: "report-header" };
const _hoisted_12 = { class: "report-title-row" };
const _hoisted_13 = { class: "report-meta" };
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { class: "results-table" };
const _hoisted_16 = { class: "indicator-name" };
const _hoisted_17 = { class: "indicator-value" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Investigation",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const router = useRouter();
    const labOrders = ref([]);
    const formRef = ref();
    const testList = ref([]);
    const specimenList = ref([]);
    const selectedTestName = ref("");
    const isSubmitting = ref(false);
    const isModalOpen = ref(false);
    const selectedInvestigation = ref(null);
    const selectedTest = ref(null);
    const indicatorNames = ref({});
    const showAllPast = ref(false);
    const showAllPending = ref(false);
    const investigationsWithResults = computed(() => {
      if (!labOrders.value) return [];
      return labOrders.value.filter((order) => {
        return order.tests?.some((test) => test.result && test.result.length > 0);
      });
    });
    const investigationsWithoutResults = computed(() => {
      if (!labOrders.value) return [];
      return labOrders.value.filter((order) => {
        return order.tests?.every((test) => !test.result || test.result.length === 0);
      });
    });
    const displayedPastResults = computed(() => {
      return showAllPast.value ? investigationsWithResults.value : investigationsWithResults.value.slice(0, 3);
    });
    const displayedPendingResults = computed(() => {
      return showAllPending.value ? investigationsWithoutResults.value : investigationsWithoutResults.value.slice(0, 3);
    });
    const formData = computed(() => [
      {
        componentType: "multiSelectInputField",
        name: "test",
        header: "Test",
        options: testList.value,
        grid: { s: "6" },
        openDirection: "top",
        validation: StandardValidations.required,
        icon: icons.search,
        onChange: (val) => selectedTestName.value = val?.name || ""
      },
      {
        componentType: "multiSelectInputField",
        name: "specimen",
        header: "Specimen",
        obsValueType: "value_text",
        grid: { s: "6" },
        icon: icons.search,
        openDirection: "top",
        validation: StandardValidations.required,
        value: specimenList.value.length === 1 ? specimenList.value[0] : "",
        options: specimenList.value.length > 1 ? specimenList.value : []
      }
    ]);
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
      if (test.result) {
        for (const res of test.result) {
          const conceptId = res.indicator.concept_id;
          if (!indicatorNames.value[conceptId]) {
            const name = await ConceptService.getConceptName(conceptId);
            indicatorNames.value[conceptId] = typeof name === "object" ? name.name || name.display : name;
          }
        }
      }
    }
    function closeModal() {
      isModalOpen.value = false;
      selectedInvestigation.value = null;
      selectedTest.value = null;
    }
    const addResults = async (investigation) => {
      await createModal(EnterLabResultsModal, { class: "large-modal-x10" }, true, { test_data: investigation });
    };
    const buildSaveTest = async () => {
      if (!formRef.value || formRef.value.validateForm()) return;
      const formValues = formRef.value.getFormValues();
      const investigation = [
        {
          concept_id: formValues["test"].concept_id,
          name: formValues["test"].name,
          specimen: formValues["specimen"].name,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(formValues["specimen"].name, true)
        }
      ];
      await saveTest(investigation);
    };
    const saveTest = async (investigation) => {
      try {
        isSubmitting.value = true;
        const data = await OrderService.buildLabOrders("", investigation);
        console.log("🚀 ~ saveTest ~ patient.value:", patient.value);
        const patientData = JSON.parse(JSON.stringify(patient.value));
        (patientData.labOrders ??= {}).unsaved ??= [];
        patientData.labOrders.unsaved.push(...data);
        console.log("🚀 ~ saveTest ~ patientData.labOrders.unsaved:", patientData.labOrders.unsaved);
        await savePatientRecord(patientData);
        await loadLabOrders();
        await router.push("/neonatal/checkpoint");
        if (formRef.value) formRef.value.resetForm?.();
      } catch (error) {
        console.log("🚀 ~ saveTest ~ error:", error);
        toastWarning("Failed to save test");
      } finally {
        isSubmitting.value = false;
      }
    };
    async function loadLabOrders() {
      const patientData = patient.value;
      labOrders.value = patientData?.labOrders ? [...patientData.labOrders.saved || [], ...patientData.labOrders.unsaved || []] : [];
    }
    async function fetchSpecimens(testName) {
      const isOffline = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
      const specimens = isOffline ? await getPouchDBRecords("specimens") : await OrderService.getSpecimens("", 1e3);
      return await ConceptService.getConceptSet(testName, "", { names: specimens.map((i) => i.name) });
    }
    watch(selectedTestName, async (val) => {
      specimenList.value = val ? await fetchSpecimens(val) : [];
    });
    watch(
      () => patient,
      async () => {
        await loadLabOrders();
      },
      { deep: true }
    );
    onMounted(async () => {
      const isOffline = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
      testList.value = isOffline ? await getPouchDBRecords("test_types") : await OrderService.getTestTypes();
      await loadLabOrders();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[21] || (_cache[21] = createBaseVNode("header", { class: "lab-orders__header" }, "Lab Orders", -1)),
        createBaseVNode("div", _hoisted_2$1, [
          investigationsWithResults.value && investigationsWithResults.value.length > 0 ? (openBlock(), createElementBlock("section", _hoisted_3$1, [
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
                          test.result && test.result.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
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
                            }, 8, ["onClick"])) : (openBlock(), createElementBlock("div", _hoisted_5$1, toDisplayString(test.result[0].value), 1))
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
            investigationsWithResults.value.length > 3 ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
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
          investigationsWithoutResults.value && investigationsWithoutResults.value.length > 0 ? (openBlock(), createElementBlock("section", _hoisted_7$1, [
            _cache[13] || (_cache[13] = createBaseVNode("h6", { class: "section-title" }, "Investigations Waiting Results", -1)),
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
            investigationsWithoutResults.value.length > 3 ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
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
          createBaseVNode("section", _hoisted_9$1, [
            _cache[14] || (_cache[14] = createBaseVNode("h6", { class: "section-title" }, "Current Investigations", -1)),
            createVNode(unref(IonRow), { class: "form-row" }, {
              default: withCtx(() => [
                createVNode(unref(IonCol), {
                  size: "12",
                  "size-md": "9"
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
                  size: "12",
                  "size-md": "3",
                  class: "form-actions"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonButton), {
                      expand: "block",
                      onClick: buildSaveTest,
                      disabled: isSubmitting.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(isSubmitting.value ? "Sending..." : "Send Test"), 1)
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
                      default: withCtx(() => [..._cache[15] || (_cache[15] = [
                        createTextVNode("Laboratory Report", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(unref(IonButtons), { slot: "end" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), { onClick: closeModal }, {
                          default: withCtx(() => [..._cache[16] || (_cache[16] = [
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
                selectedInvestigation.value && selectedTest.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                  createBaseVNode("div", _hoisted_11$1, [
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("h3", null, toDisplayString(selectedTest.value.name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("p", null, [
                        _cache[17] || (_cache[17] = createBaseVNode("strong", null, "Date:", -1)),
                        createTextVNode(" " + toDisplayString(formatDate(selectedInvestigation.value.order_date)), 1)
                      ]),
                      createBaseVNode("p", null, [
                        _cache[18] || (_cache[18] = createBaseVNode("strong", null, "Specimen:", -1)),
                        createTextVNode(" " + toDisplayString(selectedInvestigation.value.specimen?.name || "N/A"), 1)
                      ]),
                      selectedInvestigation.value.accession_number ? (openBlock(), createElementBlock("p", _hoisted_14, [
                        _cache[19] || (_cache[19] = createBaseVNode("strong", null, "Accession #:", -1)),
                        createTextVNode(" " + toDisplayString(selectedInvestigation.value.accession_number), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    _cache[20] || (_cache[20] = createBaseVNode("div", { class: "results-table-header" }, [
                      createBaseVNode("span", { class: "col-indicator" }, "Indicator"),
                      createBaseVNode("span", { class: "col-value" }, "Result")
                    ], -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(selectedTest.value.result, (result) => {
                      return openBlock(), createElementBlock("div", {
                        key: result.id,
                        class: "results-table-row"
                      }, [
                        createBaseVNode("span", _hoisted_16, toDisplayString(indicatorNames.value[result.indicator.concept_id] || "Loading..."), 1),
                        createBaseVNode("span", _hoisted_17, toDisplayString(result.value), 1)
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

const Investigation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8cc78aa7"]]);

const _hoisted_1 = {
  key: 0,
  class: "custom_card summary-card"
};
const _hoisted_2 = { class: "investigation-list" };
const _hoisted_3 = { class: "item-main" };
const _hoisted_4 = { class: "test-name" };
const _hoisted_5 = { class: "test-date" };
const _hoisted_6 = { class: "item-results" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 0,
  class: "more-results"
};
const _hoisted_9 = {
  key: 1,
  class: "custom_card waiting-card"
};
const _hoisted_10 = { class: "waiting-grid" };
const _hoisted_11 = { class: "waiting-test-name" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InvestigationSummary",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const labOrders = computed(() => {
      return patient.value?.labOrders ? [...patient.value.labOrders.saved || [], ...patient.value.labOrders.unsaved || []] : [];
    });
    const investigationsWithResults = computed(() => {
      return labOrders.value.filter((order) => order.tests?.some((t) => t.result && t.result.length > 0));
    });
    const investigationsWithoutResults = computed(() => {
      return labOrders.value.filter((order) => order.tests?.every((t) => !t.result || t.result.length === 0));
    });
    const pastFiveResults = computed(() => {
      return investigationsWithResults.value.sort((a, b) => new Date(b.order_date).getTime() - new Date(a.order_date).getTime()).slice(0, 5);
    });
    function formatDateShort(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
    }
    function getResultClass(value) {
      const v = value.toLowerCase();
      if (v.includes("pos") || v.includes("+")) return "result-pos";
      if (v.includes("neg") || v.includes("-")) return "result-neg";
      return "result-neutral";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        pastFiveResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
          _cache[0] || (_cache[0] = createBaseVNode("h6", { class: "section-title" }, "Past 5 Investigations", -1)),
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(pastFiveResults.value, (order) => {
              return openBlock(), createElementBlock("div", {
                key: order.order_id,
                class: "investigation-item"
              }, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("span", _hoisted_4, toDisplayString(order.tests[0]?.name), 1),
                  createBaseVNode("span", _hoisted_5, toDisplayString(formatDateShort(order.order_date)), 1)
                ]),
                createBaseVNode("div", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(order.tests, (test) => {
                    return openBlock(), createElementBlock("div", {
                      key: test.id
                    }, [
                      test.result && test.result.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                        createBaseVNode("span", {
                          class: normalizeClass(["result-badge", getResultClass(test.result[0].value)])
                        }, toDisplayString(test.result[0].value), 3),
                        test.result.length > 1 ? (openBlock(), createElementBlock("span", _hoisted_8, " +" + toDisplayString(test.result.length - 1) + " more ", 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        investigationsWithoutResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
          _cache[1] || (_cache[1] = createBaseVNode("h6", { class: "section-title" }, "Investigations Waiting Results", -1)),
          createBaseVNode("div", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(investigationsWithoutResults.value, (order) => {
              return openBlock(), createElementBlock("div", {
                key: order.order_id,
                class: "waiting-item"
              }, [
                createVNode(unref(IonIcon), {
                  icon: unref(timeOutline),
                  class: "pending-icon"
                }, null, 8, ["icon"]),
                createBaseVNode("span", _hoisted_11, toDisplayString(order.tests[0]?.name), 1)
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

const InvestigationSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5b0664b2"]]);

const stepperTitle = "Investigations";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Investigation",
  setup(__props) {
    const currentOpenStepper = ref("1");
    const router = useRouter();
    const wizardData = ref(
      neonatalInvestigationSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalInvestigationSections.length - 1 ? "last_step" : ""
      }))
    );
    const sectionComponents = [Investigation, InvestigationSummary];
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
          router.push("/neonatal/checkpoint");
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
              createVNode(NeonatalStepper, {
                wizardData: wizardData.value,
                StepperData: unref(stepperData),
                stepperTitle,
                openStepper: currentOpenStepper.value,
                backUrl: "/patientProfile",
                getSaveFunction: getSaveFnForStep,
                sectionsConfig: unref(neonatalInvestigationSections),
                flowType: "investigation",
                "show-componet-title": true,
                onUpdateStatus: updateStatus
              }, null, 8, ["wizardData", "StepperData", "openStepper", "sectionsConfig"])
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
