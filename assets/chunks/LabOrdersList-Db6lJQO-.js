import { s as defineComponent, bf as IonFooter, aF as IonMenu, bu as IonPage, a7 as IonLabel, du as IonImg, e2 as IonAvatar, ap as IonList, aq as IonItem, aE as IonTitle, aD as IonToolbar, aG as IonContent, I as IonHeader, bF as IonModal, N as IonButton, be as IonButtons, K as modalController, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, D as toDisplayString, a5 as createTextVNode, z as createElementBlock, J as Fragment, R as renderList, aL as useRouter, ct as useRoute, a2 as onMounted, n as nextTick, w as watch, F as unref, bp as V, f as ref, c as computed, cZ as DataTable, d as toRef } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { F as DynamicButton, _ as _export_sfc, u as useDemographicsStore, bl as useInvestigationStore, q as usePatientList, S as Service, o as createModal, bI as PatientLabService, aq as ConceptService, O as OrderService, H as HisDate, J as savePatientRecord, a4 as popoverConfirmation, n as icons, a as useProgramStore, k as alertConfirmation, x as toastDanger, bJ as StagesService, G as toastSuccess } from '../index-DALWhtZ-.js';
import { _ as _sfc_main$2 } from './EnterLabResultsModal.vue_vue_type_script_setup_true_lang-C9Z3DF3U.js';
import { B as BasicForm } from './BasicForm-DkyQipFj.js';
import { A as AddLabTestModal } from './AddLabTestModal-CmJ8BKxg.js';
import { u as useUserActivities } from './useUserActivities-CP-yE0FP.js';

const _sfc_main$1 = defineComponent({
  components: {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonAvatar,
    IonImg,
    IonLabel,
    IonPage,
    IonMenu,
    BasicForm,
    IonFooter,
    DynamicButton
  },
  data() {
    return {
      popoverStatus: null
    };
  },
  props: {
    keyboardClose: {
      type: Boolean,
      default: false
    },
    keepContentsMounted: {
      type: Boolean,
      default: false
    },
    content: {
      default: []
    },
    popoverOpen: {
      type: Boolean,
      default: false
    },
    event: {
      type: Event,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    nav(url, action) {
      this.dismiss();
      this.$router.push(url);
    }
  }
});

const _hoisted_1$1 = { class: "modal_wrapper" };
const _hoisted_2$1 = { class: "center text_12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_buttons = resolveComponent("ion-buttons");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_skeleton_text = resolveComponent("ion-skeleton-text");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.popoverOpen,
    "show-backdrop": true,
    onDidDismiss: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("closePopover", false)),
    "keyboard-close": _ctx.keyboardClose
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_header, null, {
        default: withCtx(() => [
          createVNode(_component_ion_toolbar, null, {
            default: withCtx(() => [
              createVNode(_component_ion_title, null, {
                default: withCtx(() => [
                  createBaseVNode("b", null, "Lab results for (" + toDisplayString(_ctx.content.name) + ") test", 1)
                ]),
                _: 1
              }),
              createVNode(_component_ion_buttons, { slot: "end" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_button, {
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("closeModal"))
                  }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
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
      createVNode(_component_ion_content, { class: "ion-padding" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.content.result, (item1, index1) => {
                    return openBlock(), createBlock(_component_ion_col, {
                      size: "4",
                      key: index1
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_col, { size: "8" }, {
                              default: withCtx(() => [
                                item1.indicator && item1.indicator.name ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                  createTextVNode(toDisplayString(item1.indicator.name), 1)
                                ], 64)) : (openBlock(), createBlock(_component_ion_skeleton_text, {
                                  key: 1,
                                  animated: "",
                                  style: { "width": "80%" }
                                }))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ion_col, {
                              class: "bold",
                              size: "0.5"
                            }, {
                              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                createTextVNode(":", -1)
                              ])]),
                              _: 1
                            }),
                            createVNode(_component_ion_col, {
                              class: "bold",
                              size: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item1.value), 1)
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
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open", "keyboard-close"]);
}
const LabViewResultsModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-e6e32e6f"]]);

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabOrdersList",
  props: {
    propOrders: { default: () => [] },
    showAddTestButton: { type: Boolean, default: true },
    showSendToLabButton: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const route = useRoute();
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const patientListStore = usePatientList();
    const { hasWaitingList } = useUserActivities();
    const { patient } = storeToRefs(demographicsStore);
    const { investigations } = storeToRefs(investigationStore);
    const dataTable = ref();
    const tableData = ref([]);
    const header = ref(["Lab Test", "Specimen", "Accession Number", "Location", "Order Date", "Result", "Action"]);
    const orders = ref([]);
    const userRoles = ref([]);
    const labResultsContent = ref("");
    const openResultsModal = ref(false);
    const service = ref("");
    const patientLabOrders = toRef(() => patient.value?.labOrders);
    const iconsContent = icons;
    const options = computed(() => {
      const buttons = [];
      if (props.showAddTestButton) {
        buttons.push({
          text: " <b>+ Add other tests </b>",
          className: "add-test text-white",
          action: async () => {
            await openEnterResultModal();
          }
        });
      }
      if (props.showSendToLabButton) {
        buttons.push({
          text: " <b>Send to Lab </b>",
          className: "send-lab text-white",
          attr: {
            id: "send-to-lab-btn"
          },
          action: async () => {
            await openSendToLabModal();
          }
        });
      }
      return {
        responsive: true,
        select: false,
        layout: {
          topStart: "buttons",
          topEnd: "search",
          bottomStart: "info",
          bottomEnd: "paging"
        },
        ordering: false,
        buttons
      };
    });
    const sendToLabButtonCheck = () => {
      const programStore = useProgramStore();
      const isSendToLab = programStore.activeProgram?.program_id === 14 && !hasWaitingList("Waiting for Laboratory");
      const button = document.getElementById("send-to-lab-btn");
      if (button) {
        if (isSendToLab && hasTestsWithoutResults.value) {
          button.style.display = "inline";
        } else {
          button.style.display = "none";
        }
      }
    };
    const saveTest = async (data) => {
      const investigation = [
        {
          concept_id: await ConceptService.getConceptID(data.name, true),
          name: data.name,
          specimen: data.specimen,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(data.specimen, true)
        }
      ];
      const labOrder = await OrderService.buildLabOrders("", investigation);
      let order = labOrder[0];
      order.order_date = order.date || HisDate.sessionDate();
      if (!order.specimen.name) {
        order.specimen.name = await ConceptService.getConceptName(order.specimen.concept_id);
      }
      if (order.tests && order.tests.length > 0) {
        for (let i = 0; i < order.tests.length; i++) {
          if (!order.tests[i].name) {
            order.tests[i].name = await ConceptService.getConceptName(order.tests[i].concept_id);
          }
        }
      }
      patient.value.labOrders.unsaved.push(order);
      await savePatientRecord(patient.value);
      await setListData();
    };
    const openEnterResultModal = async () => {
      await createModal(AddLabTestModal, { class: "large-medium-width-modal" }, true);
      await setListData();
    };
    const openSendToLabModal = async () => {
      const confirmSend = await alertConfirmation(`Do you want to send this patient to the lab?`, {
        confirmBtnLabel: "Send to Lab",
        returnName: true
      });
      if (confirmSend == "Confirm") {
        await handleSendToLab();
      }
    };
    const handleSendToLab = async () => {
      try {
        const locationId = String(localStorage.getItem("locationID"));
        if (!locationId) {
          toastDanger("Location not found");
          return;
        }
        await StagesService.addPatientToStage(patient.value, "LAB");
        await patientListStore.refresh(locationId);
        await router.push("/home");
        toastSuccess("The patient successfully sent to the lab. You may now attend to other patients.");
      } catch (error) {
        console.error("Error sending to lab:", error);
        toastDanger("Failed to send patient to lab");
      }
    };
    const hasTestsWithoutResults = computed(() => {
      const labOrders = patientLabOrders.value;
      if (!labOrders) return false;
      const savedOrders = labOrders.saved || [];
      const unsavedOrders = labOrders.unsaved || [];
      const allOrders = [...savedOrders, ...unsavedOrders];
      if (allOrders.length === 0) return false;
      return allOrders.some((order) => {
        if (!order?.tests || !Array.isArray(order.tests)) return false;
        return order.tests.some((test) => {
          return !test?.result || test.result.length === 0;
        });
      });
    });
    const updateInvestigationWizard = async () => {
      if (!patient.value?.labOrders) return;
      orders.value = [...patient.value?.labOrders?.saved, ...patient.value?.labOrders?.unsaved];
      if (!orders.value) return;
      const filteredArray = await orders.value.filter((obj) => {
        return HisDate.toStandardHisFormat(HisDate.sessionDate()) === HisDate.toStandardHisFormat(obj.order_date);
      });
      if (filteredArray.length > 0) {
        investigations.value[0].selectedData = filteredArray;
      } else {
        investigations.value[0].selectedData = "";
      }
    };
    const voidLabOrder = async (data, event) => {
      const deleteConfirmed = await popoverConfirmation(`Do you want to delete ${data.tests[0].name} ?`, event);
      if (deleteConfirmed) {
        const patientData = JSON.parse(JSON.stringify(patient.value));
        const savedOrders = patientData.labOrders.saved;
        const orderExists = savedOrders.some((order) => order.order_date === data.order_date && order?.tests[0]?.name == data?.tests[0]?.name);
        if (orderExists) {
          patientData.labOrders.saved = removeTestByNameAndDate(patientData.labOrders.saved, data.tests[0].name, data.order_date);
          (patientData.labOrders ??= {}).voided ??= [];
          patientData.labOrders.voided.push({
            orderId: data.id,
            reason: "Mistake entry"
          });
        } else {
          patientData.labOrders.unsaved = removeTestByNameAndDate(patientData.labOrders.unsaved, data.tests[0].name, data.date);
        }
        await savePatientRecord(patientData);
      }
      await setListData();
    };
    const removeTestByNameAndDate = (labOrders, testName, orderDate) => {
      return labOrders.filter((order) => {
        if (order.order_date === orderDate) {
          order.tests = order.tests.filter((test) => test.name !== testName);
        }
        return order.tests.length > 0;
      });
    };
    const setListData = async () => {
      if (!patient.value.labOrders) return;
      orders.value = [...patient.value.labOrders.saved, ...patient.value.labOrders.unsaved];
      const generatedTableData = generateListItems(orders.value);
      const predefineTests = Service.getProgramID() == 32 ? [
        [
          "FBS",
          "Blood",
          "",
          "",
          "",
          "",
          `<button class="btn btn-outline-success btn-sm order-btn" data-id='${JSON.stringify({
            name: "FBS",
            specimen: "Blood"
          })}'>Order Test</button> `
        ],
        [
          "HbA1c",
          "Blood",
          "",
          "",
          "",
          "",
          `<button class="btn btn-outline-success btn-sm order-btn" data-id='${JSON.stringify({
            name: "HbA1c",
            specimen: "Blood"
          })}'>Order Test</button> `
        ],
        [
          "RBS",
          "Blood",
          "",
          "",
          "",
          "",
          `<button class="btn btn-outline-success btn-sm order-btn" data-id='${JSON.stringify({
            name: "RBS",
            specimen: "Blood"
          })}'>Order Test</button> `
        ]
      ] : [];
      const uniquePredefineTests = predefineTests.filter((predefTest) => {
        return !generatedTableData.some((tableRow) => tableRow[0] === predefTest[0]);
      });
      tableData.value = [...generatedTableData, ...uniquePredefineTests];
      sendToLabButtonCheck();
      await updateInvestigationWizard();
      V.use(DataTable);
    };
    const generateListItems = (data, type) => {
      if (data.length > 0) {
        return data.flatMap((item) => {
          return item.tests.flatMap((test) => {
            const enter_results = `<button class="btn btn-outline-success btn-sm result-btn" data-id='${JSON.stringify(
              item
            )}'>Enter Result</button> `;
            const view = `<button class="btn btn-outline-secondary btn-sm view-btn" data-id='${JSON.stringify(test)}'>${iconsContent.view2}</button> `;
            let resultDisplay = enter_results;
            if (test?.result?.length == 1) {
              resultDisplay = test?.result != null ? test?.result[0]?.value || "" : null;
            } else if (test?.result?.length > 1) {
              test?.result;
              resultDisplay = view;
            }
            let print = "";
            if (item?.accession_number) {
              print = `<button class="btn btn-outline-secondary btn-sm" data-id='${JSON.stringify(item)}'>${iconsContent.print2}</button>`;
            }
            return [
              [
                test?.name,
                item?.specimen.name,
                item?.accession_number || "",
                item?.order_type_id == 9 ? "<span class='red-tag'>HTS</span>" : "",
                HisDate.toStandardHisFormat(item?.order_date),
                resultDisplay,
                print + `
                        <button class="btn btn-outline-danger btn-sm delete-btn" data-id='${JSON.stringify(item)}'>${iconsContent.delete2}</button>
                        `
              ]
            ];
          });
        });
      } else {
        return [];
      }
    };
    onMounted(async () => {
      if (Service.getProgramID() == 14) {
        options.value.buttons.push();
      }
      await updateInvestigationWizard();
      await setListData();
      nextTick(() => {
        const table = dataTable.value.dt;
        table.columns.adjust().draw();
        table.on("click", ".result-btn", async (e) => {
          const test_data = e.target.getAttribute("data-id");
          await createModal(_sfc_main$2, { class: "large-medium-width-modal" }, true, { test_data: JSON.parse(test_data) });
        });
        table.on("click", ".view-btn", (e) => {
          const data = e.target.getAttribute("data-id");
          labResultsContent.value = JSON.parse(data);
          openResultsModal.value = true;
        });
        table.on("click", ".delete-btn", (e) => {
          const data = e.target.getAttribute("data-id");
          voidLabOrder(JSON.parse(data), e);
        });
        table.on("click", ".order-btn", (e) => {
          const data = e.target.getAttribute("data-id");
          saveTest(JSON.parse(data));
        });
      });
      orders.value = props.propOrders;
      service.value = new PatientLabService(patient.value.patientID);
      userRoles.value = await Service.getUserRoles();
    });
    watch(
      () => route,
      async () => {
        await setListData();
      },
      { deep: true, immediate: true }
    );
    watch(
      () => patient,
      async () => {
        await setListData();
      },
      { deep: true, immediate: true }
    );
    watch(
      () => [patient.value?.labOrders?.saved, patient.value?.labOrders?.unsaved],
      () => {
        nextTick(() => {
          sendToLabButtonCheck();
        });
      },
      { deep: true, immediate: true }
    );
    watch(
      hasTestsWithoutResults,
      (newValue) => {
        console.log("hasTestsWithoutResults changed:", newValue);
        nextTick(() => {
          sendToLabButtonCheck();
        });
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(V), {
            ref_key: "dataTable",
            ref: dataTable,
            options: options.value,
            data: tableData.value,
            class: "display nowrap modern-table",
            width: "100%"
          }, {
            default: withCtx(() => [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(header.value, (head) => {
                    return openBlock(), createElementBlock("th", { key: head }, toDisplayString(head), 1);
                  }), 128))
                ])
              ])
            ]),
            _: 1
          }, 8, ["options", "data"])
        ]),
        createVNode(LabViewResultsModal, {
          popoverOpen: openResultsModal.value,
          content: labResultsContent.value,
          onCloseModal: _cache[0] || (_cache[0] = ($event) => openResultsModal.value = false)
        }, null, 8, ["popoverOpen", "content"])
      ]);
    };
  }
});

const LabOrdersList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f96d89df"]]);

export { LabOrdersList as default };
