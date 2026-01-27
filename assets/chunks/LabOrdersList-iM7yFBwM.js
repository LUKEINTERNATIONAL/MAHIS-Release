import { v as defineComponent, be as IonFooter, aE as IonMenu, bu as IonPage, a8 as IonLabel, dw as IonImg, e3 as IonAvatar, ao as IonList, ap as IonItem, aD as IonTitle, aC as IonToolbar, aF as IonContent, I as IonHeader, bG as IonModal, O as IonButton, bd as IonButtons, L as modalController, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, D as createBaseVNode, E as toDisplayString, a6 as createTextVNode, A as createElementBlock, K as Fragment, S as renderList, aK as useRouter, w as watch, a3 as onMounted, J as createCommentVNode, f as ref, c as computed, cv as useRoute, n as nextTick, G as unref, bp as V, c$ as DataTable, d as toRef } from './vendor-B3kX1Pjg.js';
import { s as storeToRefs } from './pinia-DWumH6Ru.js';
import { F as DynamicButton, _ as _export_sfc, u as useDemographicsStore, v as usePatientList, S as Service, g as getPouchDBRecords, O as OrderService, aq as ConceptService, z as StandardForm, q as StandardModal, y as StandardValidations, n as icons, t as toastWarning, G as toastSuccess, bI as StagesService, x as toastDanger, J as savePatientRecord, bm as useInvestigationStore, o as createModal, bJ as PatientLabService, H as HisDate, a4 as popoverConfirmation, a as useProgramStore, k as alertConfirmation } from '../index-Chdvo7Z7.js';
import { _ as _sfc_main$3 } from './EnterLabResultsModal.vue_vue_type_script_setup_true_lang-HF2f0gWW.js';
import { B as BasicForm } from './BasicForm-NGs8Ok6W.js';
import { u as useUserActivities } from './useUserActivities-Cqldygl1.js';

const _sfc_main$2 = defineComponent({
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

const _hoisted_1$2 = { class: "modal_wrapper" };
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
          createBaseVNode("div", _hoisted_1$2, [
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
const LabViewResultsModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-a0bebd3e"]]);

const _hoisted_1$1 = { style: { "display": "flex", "gap": "8px" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddLabTestModal",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const patientListStore = usePatientList();
    const { patient } = storeToRefs(demographicsStore);
    const router = useRouter();
    const selectedTest = ref("");
    const labOrders = ref("");
    const specimen = ref("");
    const testList = ref("");
    const formRef = ref(null);
    const formRefHiv = ref(null);
    const investigations = ref([]);
    const modalTitle = computed(() => {
      return isHivTest() ? " HTS RDTs" : "Add Lab Test";
    });
    const addTestForm = computed(() => {
      return [
        {
          componentType: "multiSelectInputField",
          name: "test",
          header: "Test",
          options: testList.value,
          grid: { s: "6" },
          icon: icons.search,
          validation: StandardValidations.required,
          onChange: (value) => {
            selectedTest.value = value.name;
            if (isHivTest()) {
              specimen.value = [];
            }
          }
        },
        {
          componentType: "multiSelectInputField",
          name: "specimen",
          header: "Specimen",
          grid: { s: "6" },
          icon: icons.search,
          validation: StandardValidations.required,
          value: specimen.value.length == 1 ? specimen.value[0] : "",
          options: specimen.value.length > 1 ? specimen.value : []
        }
      ];
    });
    const hivTestForm = computed(() => {
      return [
        {
          componentType: "checkboxField",
          type: "single",
          name: "HIV test",
          label: "HIV test",
          value: selectedTest.value == "HIV test"
        },
        {
          componentType: "checkboxField",
          type: "single",
          name: "Hepatitis B Test",
          label: "Hepatitis B Test",
          value: selectedTest.value == "Hepatitis B Test"
        },
        {
          componentType: "checkboxField",
          type: "single",
          name: "Syphilis",
          label: "Syphilis",
          value: selectedTest.value == "Syphilis"
        }
      ];
    });
    watch(selectedTest, async (newValue) => {
      if (newValue) {
        try {
          specimen.value = await getSpecimen(newValue);
        } catch (error) {
          specimen.value = [];
        }
      } else {
        specimen.value = [];
      }
    });
    const getSpecimen = async (name) => {
      let specimens;
      if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
        specimens = await getPouchDBRecords("specimens");
      } else {
        specimens = await OrderService.getSpecimens("", 1e3);
      }
      const data = await ConceptService.getConceptSet(name, "", { names: specimens.map((item) => item.name) });
      return data;
    };
    watch(
      patient,
      async () => {
        labOrders.value = [...patient.value.labOrders.saved, ...patient.value.labOrders.unsaved];
      },
      { deep: true }
    );
    const dismiss = () => {
      modalController.dismiss();
    };
    const backBtn = () => {
      selectedTest.value = "";
    };
    const isHivTest = () => {
      if (selectedTest.value == "HIV test" || selectedTest.value == "Syphilis" || selectedTest.value == "Hepatitis B Test") {
        return true;
      } else {
        return false;
      }
    };
    const getTests = async () => {
      if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
        return await getPouchDBRecords("test_types");
      } else {
        return await OrderService.getTestTypes();
      }
    };
    const sendToHts = async () => {
      const tests = await buildSaveHivTest("referral", 9);
      if (!tests) {
        toastWarning("No HIV Test selected");
        return;
      }
      toastSuccess("HIV Test sent to HTS successfully");
      await redirection();
    };
    const sendToLab = async () => {
      if (await buildSaveHivTest("", 4)) {
        try {
          await StagesService.addPatientToStage(patient.value, "LAB");
          toastSuccess("The patient successfully sent to the lab. You may now attend to other patients.");
          await redirection();
        } catch (error) {
          console.error("Error sending to lab:", error);
          toastDanger("Failed to send patient to lab");
        }
      }
      dismiss();
    };
    const redirection = async () => {
      dismiss();
      const locationId = String(localStorage.getItem("locationID"));
      if (!locationId) {
        toastDanger("Location not found");
        return;
      }
      await patientListStore.refresh(locationId);
      await router.push("/home");
    };
    const buildSaveHivTest = async (referral = "", order_type_id) => {
      try {
        const formData = formRefHiv.value.getFormValues();
        if (!formData || Object.keys(formData).length === 0) {
          return false;
        }
        const hasAnyData = Object.values(formData).some((value) => value);
        if (!hasAnyData) {
          return false;
        }
        const promises = Object.keys(formData).map(async (test) => {
          if (formData[test]) {
            investigations.value.push({
              order_type_id,
              concept_id: await ConceptService.getConceptID(test, true),
              name: test,
              specimen: "Blood",
              reason: "Routine",
              specimenConcept: await ConceptService.getConceptID("Blood", true),
              referral
            });
          }
        });
        await Promise.all(promises);
        if (investigations.value.length > 0) {
          await saveTest(investigations.value);
        }
        return formData;
      } catch (error) {
        console.error("Error saving HIV tests:", error);
        return false;
      }
    };
    const buildSaveTest = async () => {
      if (formRef.value.validateForm()) {
        toastWarning("Test not saved");
        return;
      }
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formData = formRef.value.getFormValues();
      const test = formData["test"].name;
      const specimen2 = formData["specimen"].name;
      const investigation = [
        {
          concept_id: formData["test"].concept_id,
          name: test,
          specimen: specimen2,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(specimen2, true)
        }
      ];
      await saveTest(investigation);
      dismiss();
    };
    const saveTest = async (investigation) => {
      const data = await OrderService.buildLabOrders("", investigation);
      const patientData = JSON.parse(JSON.stringify(patient.value));
      (patientData.labOrders ??= {}).unsaved ??= [];
      (patientData.labOrders ??= {}).saved ??= [];
      patientData.labOrders.unsaved.push(...data);
      await savePatientRecord(patientData);
      labOrders.value = [...patientData.labOrders.saved, ...patientData.labOrders.unsaved];
    };
    onMounted(async () => {
      testList.value = await getTests();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: modalTitle.value,
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            !isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => buildSaveTest()),
              name: "Save",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true),
            isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 1,
              onClick: _cache[1] || (_cache[1] = ($event) => sendToHts()),
              name: "Send to HTS",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true),
            isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 2,
              onClick: _cache[2] || (_cache[2] = ($event) => sendToLab()),
              name: "Send to Lab",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true),
            isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 3,
              onClick: _cache[3] || (_cache[3] = ($event) => backBtn()),
              color: "danger",
              name: "Back",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true)
          ])
        ]),
        content: withCtx(() => [
          !isHivTest() ? (openBlock(), createBlock(StandardForm, {
            key: 0,
            formData: addTestForm.value,
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])) : createCommentVNode("", true),
          isHivTest() ? (openBlock(), createBlock(StandardForm, {
            key: 1,
            formData: hivTestForm.value,
            ref_key: "formRefHiv",
            ref: formRefHiv
          }, null, 8, ["formData"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const AddLabTestModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9be2e0fb"]]);

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
          await createModal(_sfc_main$3, { class: "large-medium-width-modal" }, true, { test_data: JSON.parse(test_data) });
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
