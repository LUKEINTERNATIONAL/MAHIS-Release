import { s as defineComponent, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, K as modalController, br as pulseOutline, bc as checkmark, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, bp as V, al as IonPopover, a6 as IonInput, B as withCtx, a5 as createTextVNode, J as Fragment, ct as useRoute, w as watch, a2 as onMounted, n as nextTick, R as renderList, D as toDisplayString, F as unref, f as ref, cZ as DataTable, aL as useRouter, L as IonIcon, a7 as IonLabel, bO as IonChip, aA as IonCol, af as IonRow, bu as IonPage, cu as IonMenuButton, a_ as medkitOutline, O as createBlock, a4 as normalizeClass, H as createCommentVNode, bK as IonCard, ax as searchOutline, ae as IonCheckbox, bd as IonCardContent, ba as IonCardTitle, N as IonButton, bb as IonCardHeader, b6 as cubeOutline, G as closeCircleOutline, Q as alertCircleOutline, db as timeOutline, et as moon, eu as partlySunny, ev as sunny, ch as medkit, c as computed, au as script, bf as IonFooter, aI as IonAccordionGroup, aH as IonAccordion, c8 as clipboardOutline, ad as IonTextarea, dh as IonSegmentButton, dg as IonSegment, bX as chevronBackOutline, S as withDirectives, T as vShow, ab as checkmarkOutline } from './vendor-CIi-jrCy.js';
import { d as defineStore, m as mapState, s as storeToRefs } from './pinia-DG0V88rF.js';
import { n as icons, a_ as List, H as HisDate, K as ObservationService, b0 as iconList, a$ as iconGraph, u as useDemographicsStore, _ as _export_sfc, F as DynamicButton, B as BasicInputField, bb as SelectionPopover, a1 as modifyFieldValue, g as getPouchDBRecords, J as savePatientRecord, G as toastSuccess, x as toastDanger, bc as useDiagnosisStore$1, o as createModal, a4 as popoverConfirmation, aq as ConceptService, bd as checkIfSamePatient, be as setCurrentPatientID, bf as getAntiHypertensivesMedication, bg as getDiabetesDrugs, bh as clearMedicationData, bi as useNCDMedicationsStore, bj as useOtherNCDMedicationStore, bk as formMedicationObject, b2 as useTreatmentPlanStore, a0 as DrugService, d as _sfc_main$f, bl as addOtherMedicationToNCDMedicationList, T as Toolbar, bm as useVitalsStore, bn as useInvestigationStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, a2 as getFieldValue, b7 as getOfflineSavedUnsavedData, bo as MedicationSelectionHasValues, bp as resetNCDPatientData, t as toastWarning, k as alertConfirmation, b5 as confirmModal, b as EncounterTypeId, bq as useAllegyStore, a6 as useUserStore, S as Service } from '../index-U74EcRLP.js';
import { D as DemographicBar } from './DemographicBar-Di9uQV8v.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-Bxd_o-Pr.js';
import { D as DashBox } from './DashBox-DfVurWow.js';
import { B as BasicForm } from './BasicForm-Djv-_6iq.js';
import { l as lodashExports } from './lodash-ClZFDeT4.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-dn4tClZ0.js';
import { v as validateInputFiledData } from './group_validation-BXIDQGUu.js';
import { u as useComplicationsStore } from './ComplicationsStore-D0_wMsXe.js';
import { I as Investigations, _ as _sfc_main$i, i as isQualifiedAHD } from './Investigations-B2Wfxnmz.js';
import { g as getNCDDiagnosis, P as PreviousTreatment, s as stageAllergies } from './treatment-BCkSHNjI.js';
import { D as DynamicList, N as NonPharmacologicalIntervention, A as Allergies, p as patientSessionManager, a as NextAppointment } from './ClientUtils-D9dQd2SJ.js';
import { P as PreviousAllergies } from './PreviousAllergies-Dp2PeaUR.js';
import { _ as _sfc_main$h } from './RiskAssessment.vue_vue_type_script_setup_true_lang-Do2dOdn_.js';
import { V as Vitals } from './Vitals-C3HPZf7U.js';
import { _ as _sfc_main$g, u as useFormWizard } from './useFormWizard-ZJugK8XM.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-BuUYQd_X.js';
import { u as usePatientProfile } from './usePatientProfile-DWmfCb5C.js';

const useDiagnosisStore = defineStore("NCDDiagnosisStore", {
  state: () => ({
    diagnosis: [
      {
        selectedData: [],
        isFinishBtn: false,
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Diagnosis",
                  icon: icons.search,
                  value: "",
                  name: "diagnosis",
                  eventType: "input",
                  required: true,
                  alertsErrorMassage: "",
                  isSingleSelect: true,
                  trackBy: "name",
                  valueType: "coded",
                  multiSelectData: [],
                  id: "",
                  validationFunctionName: "required"
                }
              ]
            }
          ]
        }
      }
    ]
  }),
  actions: {
    setDiagnosis(data) {
      this.diagnosis = data;
    }
  }
  // persist: true,
});

const _sfc_main$e = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    List
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  data() {
    return {
      valueNumericArray: [],
      obsDatetime: [],
      graphIcon: iconGraph(["#006401"]),
      listIcon: iconList(["#636363"]),
      displayGraph: true,
      orders: [],
      height: [],
      BMI: [],
      iconBg: {},
      activeWeight: [],
      activeHeight: [],
      activeBMI: [],
      list: [],
      series: [
        {
          name: "",
          data: []
        }
      ]
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  async mounted() {
    const obsP = await ObservationService.getAll(this.patient.patientID, "Primary diagnosis");
    const obsS = await ObservationService.getAll(this.patient.patientID, "Secondary diagnosis");
    const obsD = await ObservationService.getAll(this.patient.patientID, "Attempted/ Differential diagnosis");
    const obs = [...obsP || [], ...obsS || [], ...obsD || []];
    const diagnosis = !lodashExports.isEmpty(obs) ? Promise.all(
      obs.map(async (ob) => {
        return {
          name: await ObservationService.getConceptName(ob["value_coded"]),
          obs_date: ob.obs_datetime
        };
      })
    ) : [];
    this.setListData(await diagnosis);
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    handleIcon() {
    },
    setActivClass(active) {
      this.activeHeight = "";
      this.activeBMI = "";
      this.activeWeight = "";
      if (active == "height") this.activeHeight = "_active";
      else if (active == "weight") this.activeWeight = "_active";
      else if (active == "BMI") this.activeBMI = "_active";
    },
    setListData(data) {
      this.list = [];
      this.list.push({
        actionBtn: false,
        class: "col_background",
        header: true,
        minHeight: "--min-height: 25px;",
        display: ["Date", "Diagnosis", "Notes"]
      });
      data.forEach((item) => {
        this.list.push({
          actionBtn: false,
          minHeight: "--min-height: 25px;",
          class: "col_background",
          display: [HisDate.toStandardHisFormat(item.obs_date), item.name, ""]
        });
      });
    }
  }
});

const _hoisted_1$b = { class: "modal_wrapper" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_list = resolveComponent("list");
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createBaseVNode("div", null, [
      createVNode(_component_list, { listData: _ctx.list }, null, 8, ["listData"])
    ])
  ]);
}
const previousDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$8], ["__scopeId", "data-v-5665ae64"]]);

const _sfc_main$d = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    IonPopover,
    DashBox,
    SelectionPopover,
    BasicInputField,
    List,
    BasicForm,
    DynamicButton,
    previousDiagnosis,
    DataTable: V
  },
  data() {
    return {
      iconsContent: icons,
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      conditionStatus: "",
      data: [],
      diagnosisData: [],
      popoverOpen: false,
      event: "",
      selectedCondition: ""
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  computed: {
    ...mapState(useDiagnosisStore, ["diagnosis"]),
    ...mapState(useDemographicsStore, ["patient"])
  },
  async mounted() {
    await this.getDiagnosis("");
  },
  methods: {
    async getDiagnosis(value) {
      let diagnosis = await PatientDiagnosisService.getDiagnosis(value, 1, 15);
      modifyFieldValue(this.diagnosis, "diagnosis", "multiSelectData", diagnosis);
    },
    dismiss() {
      modalController.dismiss();
    },
    async addNewRow() {
      if (await validateInputFiledData(this.diagnosis)) {
        modifyFieldValue(this.diagnosis, "diagnosis", "alertsErrorMassage", "");
        const formattedData = await formatInputFiledData(this.diagnosis);
        let diagnosisName = "";
        if (this.diagnosis && this.diagnosis.length > 0) {
          const diagnosisData = this.diagnosis[0];
          if (diagnosisData?.data?.rowData?.[0]?.colData?.[0]?.value) {
            const diagnosisValue = diagnosisData.data.rowData[0].colData[0].value;
            diagnosisName = diagnosisValue.name || "";
          }
        }
        if (!diagnosisName && formattedData.length > 0 && formattedData[0].value_coded) {
          try {
            const conceptRecord = await getPouchDBRecords("concept_names", {
              selector: {
                concept_id: formattedData[0].value_coded
              }
            });
            if (conceptRecord) {
              diagnosisName = conceptRecord.name;
            }
          } catch (error) {
            console.error("Could not fetch from PouchDB:", error);
          }
        }
        const enhancedData = formattedData.map((item) => ({
          ...item,
          diagnosis_name: diagnosisName || "Unknown Diagnosis",
          obs_datetime: item.obs_datetime || HisDate.sessionDate()
        }));
        const demographicsStore = useDemographicsStore();
        const patientData = JSON.parse(JSON.stringify(demographicsStore.patient));
        (patientData.diagnosis ??= {}).unsaved ??= [];
        patientData.diagnosis.unsaved.push(...enhancedData);
        try {
          await savePatientRecord(patientData);
          await new Promise((resolve) => setTimeout(resolve, 500));
          toastSuccess("Diagnosis successfully saved");
          this.dismiss();
        } catch (error) {
          console.error(" Error saving diagnosis:", error);
          toastDanger("Failed to save diagnosis. Please try again.");
        }
      } else {
        modifyFieldValue(this.diagnosis, "diagnosis", "alertsErrorMassage", "Please select diagnosis from the list");
      }
    },
    updateDiagnosisStores() {
      const diagnosisStore = useDiagnosisStore();
      diagnosisStore.setDiagnosis(this.diagnosis);
    },
    async handleInputData(col) {
      modifyFieldValue(this.diagnosis, "diagnosis", "alertsErrorMassage", "");
    }
  }
});

const _hoisted_1$a = { class: "modal_wrapper" };
const _hoisted_2$8 = { class: "" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, { style: { "display": "flex", "justify-content": "space-between" } }, {
      default: withCtx(() => [
        createVNode(_component_ion_title, { class: "modalTitle" }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode("Add Diagnosis", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_ion_icon, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
          style: { "padding-top": "10px", "padding-right": "10px" },
          icon: _ctx.iconsContent.cancel
        }, null, 8, ["icon"])
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      style: { "--background": "#fff" }
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("div", _hoisted_2$8, [
            createVNode(_component_basic_form, {
              contentData: _ctx.diagnosis,
              onSearchChange: _ctx.getDiagnosis,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "onSearchChange", "onUpdate:inputValue"])
          ])
        ])
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, {
      collapse: "fade",
      class: "ion-no-border"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_DynamicButton, {
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.addNewRow()),
                  name: "Save",
                  fill: "solid",
                  style: { "float": "right", "margin": "2%", "width": "130px" }
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
  ], 64);
}
const AddDiagnosisModal = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$7], ["__scopeId", "data-v-a39d0e4b"]]);

const _hoisted_1$9 = { class: "table-responsive" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Diagnosis",
  setup(__props) {
    const diagnosisStore = useDiagnosisStore$1();
    const demographicsStore = useDemographicsStore();
    const { diagnosis } = storeToRefs(diagnosisStore);
    const { patient } = storeToRefs(demographicsStore);
    const dataTableRef = ref(null);
    const tableData = ref([]);
    const iconsContent = ref(icons);
    const header = ["Diagnosis", "Date", "Action"];
    const options = {
      responsive: true,
      select: false,
      layout: {
        topStart: "buttons",
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      ordering: false,
      buttons: [
        {
          text: " <b>+ Add diagnosis </b>",
          className: "add-test text-white",
          action: async () => {
            await openEnterResultModal();
          }
        }
      ]
    };
    const openEnterResultModal = async () => {
      await createModal(AddDiagnosisModal, { class: "lab-results-modal" }, true);
      await setListData();
    };
    const generateListItems = async (data) => {
      if (data.length > 0) {
        return await Promise.all(
          data.map(async (item) => {
            let name = item.diagnosis_name || item.name;
            if (!name && item.value_coded) {
              name = await ObservationService.getConceptName(item.value_coded);
            }
            const obs_date = item.obs_datetime;
            return [
              name || "",
              HisDate.toStandardHisFormat(obs_date),
              `<button class="btn btn-outline-danger btn-sm delete-btn" data-id='${JSON.stringify({
                id: item.obs_id,
                value_coded: item.value_coded,
                name,
                obs_date
              })}'>${iconsContent.value.delete2}</button>`
            ];
          })
        );
      }
      return [];
    };
    const voidDiagnosis = async (data, event) => {
      const deleteConfirmed = await popoverConfirmation(`Do you want to delete ${data.name} ?`, event);
      if (deleteConfirmed) {
        const patientData = JSON.parse(JSON.stringify(patient.value));
        const diagnosisData = patientData.diagnosis;
        if (data?.id) {
          diagnosisData.saved = diagnosisData.saved.filter(
            (diagnosis2) => !(diagnosis2.value_coded === data.value_coded && diagnosis2.obs_datetime === data.obs_date)
          );
          diagnosisData.voided ??= [];
          diagnosisData.voided.push(data);
        } else {
          diagnosisData.unsaved = diagnosisData.unsaved.filter(
            (diagnosis2) => !(diagnosis2.value_coded === data.value_coded && diagnosis2.obs_datetime === data.obs_date)
          );
        }
        await savePatientRecord(patientData);
      }
    };
    const setListData = async () => {
      const patientData = JSON.parse(JSON.stringify(patient.value));
      const observations = [...patientData?.diagnosis?.unsaved || [], ...patientData?.diagnosis?.saved || []];
      tableData.value = await generateListItems(observations);
      V.use(DataTable);
    };
    const route = useRoute();
    watch(
      () => route,
      async () => {
        await setListData();
      },
      { deep: true }
    );
    watch(
      () => patient,
      async () => {
        await setListData();
      },
      { deep: true }
    );
    onMounted(async () => {
      await setListData();
      nextTick(() => {
        const table = dataTableRef.value.dt;
        table.columns.adjust().draw();
        table.on("click", ".delete-btn", (e) => {
          const data = e.target.getAttribute("data-id");
          voidDiagnosis(JSON.parse(data), e);
        });
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(unref(V), {
          ref_key: "dataTableRef",
          ref: dataTableRef,
          options,
          data: tableData.value,
          class: "display nowrap modern-table",
          width: "100%"
        }, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                (openBlock(), createElementBlock(Fragment, null, renderList(header, (head) => {
                  return createBaseVNode("th", { key: head }, toDisplayString(head), 1);
                }), 64))
              ])
            ])
          ]),
          _: 1
        }, 8, ["data"])
      ]);
    };
  }
});

const DiagnosisComponent = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-13544ebc"]]);

const _hoisted_1$8 = { class: "sub_item_body" };
const _hoisted_2$7 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$6 = { class: "table-responsive" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ComplicationsScreening",
  setup(__props) {
    useRouter();
    const complicationsStore = useComplicationsStore();
    const { FootScreening, visualScreening, cvScreening } = storeToRefs(complicationsStore);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    useRoute();
    const dataTableRef = ref(null);
    const tableData = ref([]);
    const footSC = ref("");
    const iconsContent = ref(icons);
    const header = ["Condition", "Result", "Date", "Action"];
    const options = {
      responsive: true,
      select: false,
      layout: {
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      ordering: false
    };
    const setPreviousData = async () => {
      const patientData = JSON.parse(JSON.stringify(patient.value));
      const screening = [...patientData?.screening?.unsaved || [], ...patientData?.screening?.saved || []];
      tableData.value = await buildTableData(screening);
    };
    const buildTableData = async (data) => {
      if (data.length === 0) return [];
      const result = await Promise.all(
        data.map(async (item) => {
          if (item.concept_name === "Visual acuity") {
            return item.children.map((child) => [
              child.concept_name,
              child.value_text,
              HisDate.toStandardHisFormat(child.obs_datetime),
              `<button class="btn btn-outline-danger btn-sm delete-btn" data-id='${JSON.stringify(child)}'>
                        ${iconsContent.value.delete2}</button>`
            ]);
          }
          if (item.concept_name === "Foot check") {
            return Promise.all(
              item.children.map(async (child) => [
                child.concept_name,
                await ConceptService.getConceptName(child.value_coded),
                HisDate.toStandardHisFormat(child.obs_datetime),
                `<button class="btn btn-outline-danger btn-sm delete-btn" data-id='${JSON.stringify(child)}'>
                            ${iconsContent.value.delete2}</button>`
              ])
            );
          }
          if (item.concept_name === "Cardiovascular disease") {
            return [
              [
                "CVD %",
                item.value_text,
                HisDate.toStandardHisFormat(item.obs_datetime),
                `<button class="btn btn-outline-danger btn-sm delete-btn" data-id='${JSON.stringify(item)}'>
                            ${iconsContent.value.delete2}</button>`
              ]
            ];
          }
          return [];
        })
      );
      return result.flat();
    };
    const voidScreening = (data) => {
    };
    onMounted(async () => {
      await setPreviousData();
      nextTick(() => {
        const table = dataTableRef.value.dt;
        table.columns.adjust().draw();
        table.on("click", ".delete-btn", (e) => {
          const data = e.target.getAttribute("data-id");
          voidScreening(JSON.parse(data));
        });
      });
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_accordion = resolveComponent("ion-accordion");
      const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BasicForm, { contentData: unref(visualScreening) }, null, 8, ["contentData"]),
        createVNode(unref(IonList), null, {
          default: withCtx(() => [
            createVNode(unref(IonItem), {
              lines: footSC.value,
              class: "dashed_bottom_border textSectionFormat"
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createBaseVNode("span", { style: { "display": "flex", "align-items": "center", "gap": "10px" } }, " Foot screening ", -1)
              ])]),
              _: 1
            }, 8, ["lines"]),
            createBaseVNode("div", _hoisted_1$8, [
              createVNode(BasicForm, { contentData: unref(FootScreening) }, null, 8, ["contentData"])
            ])
          ]),
          _: 1
        }),
        createVNode(BasicForm, { contentData: unref(cvScreening) }, null, 8, ["contentData"]),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion_group, {
              ref: "accordionGroup",
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_accordion, {
                  value: "first",
                  "toggle-icon-slot": "start",
                  style: { "border-radius": "10px", "background-color": "#fff" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_label, { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[1] || (_cache[1] = [
                            createTextVNode("Previous Visits", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_2$7, [
                      createBaseVNode("div", _hoisted_3$6, [
                        createVNode(unref(V), {
                          ref_key: "dataTableRef",
                          ref: dataTableRef,
                          options,
                          data: tableData.value,
                          class: "display nowrap",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("thead", null, [
                              createBaseVNode("tr", null, [
                                (openBlock(), createElementBlock(Fragment, null, renderList(header, (head) => {
                                  return createBaseVNode("th", { key: head }, toDisplayString(head), 1);
                                }), 64))
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["data"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const ComplicationsScreening = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-f3420ad0"]]);

const _sfc_main$a = defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRow,
    IonCol,
    IonChip,
    IonLabel,
    IonIcon
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  data() {
    const diagnoses = ref([]);
    const selectedDiagnoses = ref([]);
    const initC = async () => {
      try {
        const patient_I = this.patient;
        setCurrentPatientID(patient_I.ID);
        const client_has_ncd_diagnosis = ref(false);
        const setClientHasNCDDiagnosis = (value) => {
          client_has_ncd_diagnosis.value = value;
        };
        diagnoses.value = await getNCDDiagnosis();
        const hasHypertension = diagnoses.value.some((diagnosis) => diagnosis.toLowerCase().includes("hypertension"));
        const hasDiabetes = diagnoses.value.some((diagnosis) => diagnosis.toLowerCase().includes("diabetes"));
        if (hasHypertension) {
          setClientHasNCDDiagnosis(true);
          getAntiHypertensivesMedication();
        }
        if (hasDiabetes) {
          setClientHasNCDDiagnosis(true);
          getDiabetesDrugs();
        }
        if (client_has_ncd_diagnosis.value == false) {
        }
      } catch (error) {
      }
    };
    const fetchMedications = async () => {
      const hasHypertension = selectedDiagnoses.value.some((diagnosis) => diagnosis.toLowerCase().includes("hypertension"));
      const hasDiabetes = selectedDiagnoses.value.some((diagnosis) => diagnosis.toLowerCase().includes("diabetes"));
      if (hasHypertension) {
        await getAntiHypertensivesMedication();
      }
      if (hasDiabetes) {
        await getDiabetesDrugs();
      }
    };
    const toggleDiagnosisSelection = (diagnosis) => {
      const index = selectedDiagnoses.value.indexOf(diagnosis);
      if (index === -1) {
        selectedDiagnoses.value.push(diagnosis);
        clearMedicationData();
        fetchMedications();
      } else {
        selectedDiagnoses.value.splice(index, 1);
        clearMedicationData();
        fetchMedications();
      }
      const selectedDiagnosesCount = selectedDiagnoses.value.length;
      if (selectedDiagnosesCount === 0) {
        clearMedicationData();
        initC();
      }
    };
    return {
      diagnoses,
      selectedDiagnoses,
      medkitOutline,
      initC,
      toggleDiagnosisSelection
    };
  },
  async mounted() {
    this.initC();
  },
  watch: {
    patient: {
      handler() {
        checkIfSamePatient(this.patient.ID);
        this.initC();
      },
      deep: true
    }
  }
});

const _hoisted_1$7 = {
  key: 0,
  class: "diagnosis-container"
};
const _hoisted_2$6 = { class: "heading" };
const _hoisted_3$5 = { class: "diagnosis-list" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_chip = resolveComponent("ion-chip");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return _ctx.diagnoses.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createBaseVNode("div", _hoisted_2$6, [
      createVNode(_component_ion_icon, {
        icon: _ctx.medkitOutline,
        class: "diagnosis-icon"
      }, null, 8, ["icon"]),
      _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Diagnosis", -1))
    ]),
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.diagnoses, (diagnosis, index) => {
                return openBlock(), createBlock(_component_ion_chip, {
                  key: index,
                  class: normalizeClass({ "diagnosis-chip-selected": _ctx.selectedDiagnoses.includes(diagnosis) }),
                  onClick: ($event) => _ctx.toggleDiagnosisSelection(diagnosis)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_label, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(diagnosis), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ])) : createCommentVNode("", true);
}
const PreviousNCDDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$6], ["__scopeId", "data-v-2bd0f8ca"]]);

const _sfc_main$9 = defineComponent({
  name: "MedicationSearch",
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
    BasicInputField,
    IonCard
  },
  setup() {
    const searchText = ref("");
    const NCDMedicationsStore = useNCDMedicationsStore();
    const searchTextUpdated = (event) => {
      const target = event.target;
      searchText.value = target.value;
      const filteredMedications = NCDMedicationsStore.medications.filter(
        (med) => med.name.toLowerCase().includes(searchText.value.toLowerCase())
      );
      NCDMedicationsStore.setFilteredMedications(filteredMedications);
    };
    return {
      searchText,
      searchTextUpdated,
      searchOutline
    };
  }
});

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicInputField = resolveComponent("BasicInputField");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", null, [
      createVNode(_component_ion_card, null, {
        default: withCtx(() => [
          createVNode(_component_BasicInputField, {
            placeholder: "Filter medication list by name",
            icon: _ctx.searchOutline,
            inputValue: _ctx.searchText,
            "onUpdate:inputValue": _ctx.searchTextUpdated,
            minHeight: 50
          }, null, 8, ["icon", "inputValue", "onUpdate:inputValue"])
        ]),
        _: 1
      })
    ])
  ]);
}
const MedicationSearchInput = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$5]]);

const _sfc_main$8 = defineComponent({
  name: "medication",
  components: {
    IonCard,
    IonCardHeader,
    IonButton,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonIcon,
    IonCol,
    IonRow,
    IonCheckbox,
    PreviousNCDDiagnosis,
    MedicationSearchInput
  },
  computed: {
    ...mapState(useNCDMedicationsStore, ["medications", "filteredMedications"]),
    ...mapState(useOtherNCDMedicationStore, ["otherNCDMedications"]),
    activeMedications() {
      return this.useDefaultStores ? this.filteredMedications : this.otherNCDMedications;
    }
  },
  props: {
    useDefaultStores: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const NCDmedicationsStore = useNCDMedicationsStore();
    NCDmedicationsStore.initMedications();
    const selected_NCD_Medication_List = computed(() => NCDmedicationsStore.selectedNCDMedicationList);
    const OtherNCDmedicationsStore = useOtherNCDMedicationStore();
    const selected_Other_NCD_Medication_List = computed(() => OtherNCDmedicationsStore.selectedOtherNCDMedicationList);
    const current_set_Medication_List = computed(
      () => props.useDefaultStores ? selected_NCD_Medication_List.value : selected_Other_NCD_Medication_List.value
    );
    const showErrorMessage = ref(false);
    const errorFields = ref({});
    let errorMessageTimeout = null;
    const hideErrorMessage = () => {
      showErrorMessage.value = false;
      if (errorMessageTimeout) {
        clearTimeout(errorMessageTimeout);
        errorMessageTimeout = null;
      }
    };
    const showError = (fieldId) => {
      errorFields.value = { ...errorFields.value, [fieldId]: true };
      showErrorMessage.value = true;
      if (errorMessageTimeout) {
        clearTimeout(errorMessageTimeout);
      }
      errorMessageTimeout = window.setTimeout(() => {
        showErrorMessage.value = false;
        errorMessageTimeout = null;
      }, 3e3);
      window.setTimeout(() => {
        const updatedErrors = { ...errorFields.value };
        delete updatedErrors[fieldId];
        errorFields.value = updatedErrors;
      }, 3e3);
    };
    const isNumeric = (value) => {
      return /^\d*$/.test(value);
    };
    const updateDosage = (drug_id, timeOfDay, event) => {
      let value = event.target.value;
      const fieldId = `${drug_id}-${timeOfDay}`;
      if (value !== "" && !isNumeric(value)) {
        showError(fieldId);
        const medication = current_set_Medication_List.value.find((med) => med.drug_id === drug_id);
        value = medication?.dosage[timeOfDay] || "";
        setTimeout(() => {
          const inputElement = event.target;
          if (inputElement) {
            inputElement.value = value;
          }
        }, 0);
        return;
      }
      if (value !== "") {
        const numValue = parseInt(value);
        if (isNaN(numValue) || numValue < 0) {
          value = "0";
        } else {
          value = Math.floor(numValue).toString();
        }
      }
      const medicationIndex = current_set_Medication_List.value.findIndex((med) => med.drug_id === drug_id);
      if (medicationIndex > -1) {
        const updatedMedication = { ...current_set_Medication_List.value[medicationIndex] };
        updatedMedication.dosage = { ...updatedMedication.dosage, [timeOfDay]: value };
        current_set_Medication_List.value[medicationIndex] = updatedMedication;
      }
    };
    const updateDuration = (drug_id, event) => {
      let value = event.target.value;
      const fieldId = `${drug_id}-duration`;
      if (value !== "" && !isNumeric(value)) {
        showError(fieldId);
        const medication = current_set_Medication_List.value.find((med) => med.drug_id === drug_id);
        value = medication?.duration || "";
        setTimeout(() => {
          const inputElement = event.target;
          if (inputElement) {
            inputElement.value = value;
          }
        }, 0);
        return;
      }
      if (value !== "") {
        const numValue = parseInt(value);
        if (isNaN(numValue) || numValue < 1) {
          value = "1";
        } else {
          value = Math.floor(numValue).toString();
        }
      }
      const medicationIndex = current_set_Medication_List.value.findIndex((med) => med.drug_id === drug_id);
      if (medicationIndex > -1) {
        const updatedMedication = { ...current_set_Medication_List.value[medicationIndex] };
        updatedMedication.duration = value;
        current_set_Medication_List.value[medicationIndex] = updatedMedication;
      }
    };
    const isActive = (drug_id) => {
      return current_set_Medication_List.value.some((med) => med.drug_id === drug_id);
    };
    const toggleMedication = async (drug_id) => {
      try {
        if (isActive(drug_id)) {
          const index = current_set_Medication_List.value.findIndex((med) => med.drug_id === drug_id);
          if (index > -1) {
            current_set_Medication_List.value.splice(index, 1);
          }
        } else {
          const newMedication = await formMedicationObject(drug_id);
          if (props.useDefaultStores == false) {
            OtherNCDmedicationsStore.setSelectedNCDMedicationList(newMedication);
          } else {
            NCDmedicationsStore.setSelectedNCDMedicationList(newMedication);
          }
        }
      } catch (error) {
        toastDanger("Error toggling medication: " + error);
      }
    };
    const getDosage = (drug_id, timeOfDay) => {
      const medication = current_set_Medication_List.value.find((med) => med.drug_id === drug_id);
      return medication?.dosage[timeOfDay] || "";
    };
    const getDuration = (drug_id) => {
      const medication = current_set_Medication_List.value.find((med) => med.drug_id === drug_id);
      return medication?.duration || "";
    };
    const calculateQuantity = (drug_id) => {
      const medication = current_set_Medication_List.value.find((med) => med.drug_id === drug_id);
      if (!medication || !medication.dosage || !medication.duration) return "";
      const totalDailyDose = ["morning", "afternoon", "evening"].reduce((sum, timeOfDay) => {
        const dose = parseInt(medication.dosage[timeOfDay]) || 0;
        return sum + dose;
      }, 0);
      const duration = parseInt(medication.duration) || 0;
      return (totalDailyDose * duration).toString();
    };
    return {
      medkit,
      sunny,
      partlySunny,
      moon,
      timeOutline,
      alertCircleOutline,
      closeCircleOutline,
      updateDosage,
      updateDuration,
      getDosage,
      getDuration,
      calculateQuantity,
      isActive,
      toggleMedication,
      cubeOutline,
      showErrorMessage,
      errorFields,
      hideErrorMessage
    };
  }
});

const _hoisted_1$6 = { key: 0 };
const _hoisted_2$5 = {
  key: 0,
  class: "error-message"
};
const _hoisted_3$4 = { class: "table-container" };
const _hoisted_4$3 = { class: "prescription-table" };
const _hoisted_5$3 = ["onClick"];
const _hoisted_6$3 = ["onClick"];
const _hoisted_7$2 = { class: "med-kit-font" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PreviousNCDDiagnosis = resolveComponent("PreviousNCDDiagnosis");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_MedicationSearchInput = resolveComponent("MedicationSearchInput");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_checkbox = resolveComponent("ion-checkbox");
  const _component_ion_input = resolveComponent("ion-input");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { size: "5" }, {
          default: withCtx(() => [
            _ctx.useDefaultStores ? (openBlock(), createBlock(_component_PreviousNCDDiagnosis, { key: 0 })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_ion_col, null, {
          default: withCtx(() => [
            _ctx.useDefaultStores && _ctx.medications.length > 0 ? (openBlock(), createBlock(_component_MedicationSearchInput, {
              key: 0,
              style: { "margin-top": "0px", "font-weight": "600", "font-size": "16px" }
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _ctx.activeMedications.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
      _ctx.showErrorMessage ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
        createVNode(_component_ion_icon, {
          icon: _ctx.alertCircleOutline,
          color: "danger"
        }, null, 8, ["icon"]),
        _cache[0] || (_cache[0] = createBaseVNode("span", { style: { "font-size": "16px", "font-weight": "600px", "color": "red" } }, "Only numbers are allowed", -1)),
        createVNode(_component_ion_button, {
          fill: "clear",
          size: "small",
          onClick: _ctx.hideErrorMessage
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_icon, { icon: _ctx.closeCircleOutline }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["onClick"])
      ])) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_3$4, [
        createBaseVNode("table", _hoisted_4$3, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              _cache[6] || (_cache[6] = createBaseVNode("th", { class: "checkbox-col" }, "Select", -1)),
              _cache[7] || (_cache[7] = createBaseVNode("th", null, "Medication", -1)),
              createBaseVNode("th", null, [
                createVNode(_component_ion_icon, { icon: _ctx.partlySunny }, null, 8, ["icon"]),
                _cache[1] || (_cache[1] = createTextVNode(" Morning", -1))
              ]),
              createBaseVNode("th", null, [
                createVNode(_component_ion_icon, { icon: _ctx.sunny }, null, 8, ["icon"]),
                _cache[2] || (_cache[2] = createTextVNode(" Noon", -1))
              ]),
              createBaseVNode("th", null, [
                createVNode(_component_ion_icon, { icon: _ctx.moon }, null, 8, ["icon"]),
                _cache[3] || (_cache[3] = createTextVNode(" Night", -1))
              ]),
              createBaseVNode("th", null, [
                createVNode(_component_ion_icon, { icon: _ctx.timeOutline }, null, 8, ["icon"]),
                _cache[4] || (_cache[4] = createTextVNode(" Duration", -1))
              ]),
              createBaseVNode("th", null, [
                createVNode(_component_ion_icon, { icon: _ctx.cubeOutline }, null, 8, ["icon"]),
                _cache[5] || (_cache[5] = createTextVNode(" Quantity", -1))
              ])
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.activeMedications, (med) => {
              return openBlock(), createElementBlock("tr", {
                key: med.id,
                class: normalizeClass({ "active-row": _ctx.isActive(med.drug_id) })
              }, [
                createBaseVNode("td", {
                  class: "checkbox-col",
                  onClick: ($event) => _ctx.toggleMedication(med.drug_id)
                }, [
                  createVNode(_component_ion_checkbox, {
                    checked: _ctx.isActive(med.drug_id),
                    style: { "--size": "26px" }
                  }, null, 8, ["checked"])
                ], 8, _hoisted_5$3),
                createBaseVNode("td", {
                  style: { "cursor": "pointer" },
                  onClick: ($event) => _ctx.toggleMedication(med.drug_id)
                }, [
                  createBaseVNode("span", _hoisted_7$2, toDisplayString(med.name), 1)
                ], 8, _hoisted_6$3),
                createBaseVNode("td", null, [
                  createVNode(_component_ion_input, {
                    type: "text",
                    class: normalizeClass(["dose-input bordered-input med-kit-font", { "error-input": _ctx.errorFields[`${med.drug_id}-morning`] }]),
                    disabled: !_ctx.isActive(med.drug_id),
                    value: _ctx.getDosage(med.drug_id, "morning"),
                    onIonInput: ($event) => _ctx.updateDosage(med.drug_id, "morning", $event),
                    placeholder: "0",
                    inputmode: "numeric"
                  }, null, 8, ["class", "disabled", "value", "onIonInput"])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_ion_input, {
                    type: "text",
                    class: normalizeClass(["dose-input bordered-input med-kit-font", { "error-input": _ctx.errorFields[`${med.drug_id}-afternoon`] }]),
                    disabled: !_ctx.isActive(med.drug_id),
                    value: _ctx.getDosage(med.drug_id, "afternoon"),
                    onIonInput: ($event) => _ctx.updateDosage(med.drug_id, "afternoon", $event),
                    placeholder: "0",
                    inputmode: "numeric"
                  }, null, 8, ["class", "disabled", "value", "onIonInput"])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_ion_input, {
                    type: "text",
                    class: normalizeClass(["dose-input bordered-input med-kit-font", { "error-input": _ctx.errorFields[`${med.drug_id}-evening`] }]),
                    disabled: !_ctx.isActive(med.drug_id),
                    value: _ctx.getDosage(med.drug_id, "evening"),
                    onIonInput: ($event) => _ctx.updateDosage(med.drug_id, "evening", $event),
                    placeholder: "0",
                    inputmode: "numeric"
                  }, null, 8, ["class", "disabled", "value", "onIonInput"])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_ion_input, {
                    type: "text",
                    class: normalizeClass(["dose-input bordered-input med-kit-font", { "error-input": _ctx.errorFields[`${med.drug_id}-duration`] }]),
                    disabled: !_ctx.isActive(med.drug_id),
                    value: _ctx.getDuration(med.drug_id),
                    onIonInput: ($event) => _ctx.updateDuration(med.drug_id, $event),
                    placeholder: "0",
                    inputmode: "numeric"
                  }, null, 8, ["class", "disabled", "value", "onIonInput"])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_ion_input, {
                    type: "text",
                    class: "dose-input bordered-input med-kit-font",
                    readonly: "",
                    value: _ctx.calculateQuantity(med.drug_id),
                    placeholder: "0"
                  }, null, 8, ["value"])
                ])
              ], 2);
            }), 128))
          ])
        ])
      ])
    ])) : createCommentVNode("", true)
  ], 64);
}
const Medication = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4], ["__scopeId", "data-v-c9584f56"]]);

const _sfc_main$7 = defineComponent({
  name: "DrugSelector",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    IonPopover,
    VueMultiselect: script,
    IonLabel,
    IonCol,
    IonRow
  },
  emits: ["drug-selected"],
  // Declare the emit event
  data() {
    const selectedDrugName = (data) => {
      this.$emit("drug-selected", data);
    };
    const FindDrugName = async (text) => {
      const treatment_plan_store = useTreatmentPlanStore();
      const searchText = text;
      const page = 1, limit = 20;
      const drugs = await DrugService.getOfflineOPDDrugs({
        name: searchText,
        page,
        page_size: limit
      });
      const formattedDrugs = drugs.map((drug) => ({
        label: drug.name,
        value: drug.name,
        other: drug,
        ...drug
        // Spread the original drug properties
      }));
      treatment_plan_store.setPartialOPDdrugList(formattedDrugs);
    };
    const OPDDrugList = computed(() => this.partialOPDdrugList);
    const selected_drug = ref(null);
    return {
      selected_drug,
      selectedDrugName,
      FindDrugName,
      OPDDrugList
    };
  },
  computed: {
    ...mapState(useTreatmentPlanStore, ["partialOPDdrugList"])
  }
});

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueMultiselect = resolveComponent("VueMultiselect");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, null, {
          default: withCtx(() => [
            createVNode(_component_VueMultiselect, {
              modelValue: _ctx.selected_drug,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => _ctx.selected_drug = $event),
                _ctx.selectedDrugName
              ],
              multiple: false,
              taggable: false,
              "hide-selected": false,
              "close-on-select": true,
              openDirection: "bottom",
              "tag-placeholder": "Select medication",
              placeholder: "Select medication",
              selectLabel: "",
              label: "name",
              searchable: true,
              onSearchChange: _ctx.FindDrugName,
              "track-by": "uuid",
              options: _ctx.OPDDrugList
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onSearchChange", "options"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const OPDMedications = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3], ["__scopeId", "data-v-e33f5b73"]]);

const _sfc_main$6 = defineComponent({
  name: "Home",
  mixins: [_sfc_main$f],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonRow,
    IonTitle,
    IonIcon,
    IonFooter,
    OPDMedications,
    Medication,
    IonCol,
    IonButton
  },
  data() {
    const OtherNCDmedicationsStore = useOtherNCDMedicationStore();
    const dismiss = () => {
      modalController.dismiss();
    };
    const onAdd = () => {
      addOtherMedicationToNCDMedicationList();
      OtherNCDmedicationsStore.clearOtherNCDMedications();
      dismiss();
    };
    const addSearchedDrug = (data) => {
      OtherNCDmedicationsStore.addSearchedDrug(data);
    };
    return {
      iconsContent: icons,
      dismiss,
      addSearchedDrug,
      medkit,
      checkmark,
      onAdd
    };
  },
  computed: {},
  $route: {
    async handler() {
    },
    deep: true
  },
  watch: {},
  async mounted() {
  },
  methods: {}
});

const _hoisted_1$5 = { class: "medication-list" };
const _hoisted_2$4 = { class: "modal_wrapper" };
const _hoisted_3$3 = { class: "" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_OPDMedications = resolveComponent("OPDMedications");
  const _component_Medication = resolveComponent("Medication");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, { style: { "display": "flex", "justify-content": "space-between" } }, {
      default: withCtx(() => [
        createVNode(_component_ion_title, { class: "modalTitle" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$5, [
              createVNode(_component_ion_icon, {
                icon: _ctx.medkit,
                class: "ion-margin-end"
              }, null, 8, ["icon"]),
              _cache[1] || (_cache[1] = createBaseVNode("span", null, "Add Other Medication", -1))
            ])
          ]),
          _: 1
        }),
        createVNode(_component_ion_icon, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
          style: { "padding-top": "10px", "padding-right": "10px" },
          icon: _ctx.iconsContent.cancel
        }, null, 8, ["icon"])
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding",
      style: { "--background": "#fff" }
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", _hoisted_3$3, [
            createVNode(_component_OPDMedications, { onDrugSelected: _ctx.addSearchedDrug }, null, 8, ["onDrugSelected"]),
            createVNode(_component_Medication, { "use-default-stores": false })
          ])
        ])
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, {
      collapse: "fade",
      class: "ion-no-border"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  onClick: _ctx.onAdd,
                  color: "primary",
                  style: { "float": "right", "margin-bottom": "20px", "margin-right": "20px" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_icon, {
                      icon: _ctx.checkmark,
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[2] || (_cache[2] = createTextVNode(" Add ", -1))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
const AddOtherOPDMedication = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2], ["__scopeId", "data-v-dee50533"]]);

const _sfc_main$5 = defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    Toolbar,
    IonRow,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    DynamicList,
    IonCard
  },
  data() {
    const componentKey = ref(0);
    const showMoreMedicationsMsg = ref("Show more medications");
    const itemWasExpanded = ref(false);
    const PreviuosSelectedMedicalDrugsList = ref();
    const accordionGroupChangeFn1 = (ev) => {
    };
    const accordionGroupChange = (ev) => {
      const selectedValue = ev.detail.value;
      if (selectedValue !== void 0) {
        if (selectedValue == "second") {
          showMoreMedicationsMsg.value = "Show less medications";
          itemWasExpanded.value = !itemWasExpanded.value;
        }
      } else {
        showMoreMedicationsMsg.value = "Show more medications";
        itemWasExpanded.value = !itemWasExpanded.value;
      }
    };
    const loadPreviousMedications = async () => {
      const previousTreatment = new PreviousTreatment();
      const { previousDrugPrescriptions } = await previousTreatment.getPatientEncounters();
      PreviuosSelectedMedicalDrugsList.value = previousDrugPrescriptions;
    };
    return {
      componentKey,
      accordionGroupChange,
      showMoreMedicationsMsg,
      itemWasExpanded,
      accordionGroupChangeFn1,
      PreviuosSelectedMedicalDrugsList,
      loadPreviousMedications
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useNCDMedicationsStore, ["selectedNCDMedicationList"])
  },
  $route: {
    async handler() {
    },
    deep: true
  },
  watch: {
    patient: {
      handler() {
        this.loadPreviousMedications();
      },
      deep: true
    },
    selectedNCDMedicationList: {
      handler() {
        this.loadPreviousMedications();
      },
      deep: true
    }
  },
  async mounted() {
    this.loadPreviousMedications();
  }
});

const _hoisted_1$4 = { style: {} };
const _hoisted_2$3 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$2 = { key: 0 };
const _hoisted_4$2 = { class: "previousSecDrgs" };
const _hoisted_5$2 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_6$2 = { key: 0 };
const _hoisted_7$1 = { class: "previousSecDrgs" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_dynamic_list = resolveComponent("dynamic-list");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$4, [
        createVNode(_component_ion_accordion_group, {
          ref: "accordionGroup",
          class: "previousView",
          onIonChange: _ctx.accordionGroupChangeFn1
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion, {
              value: "first",
              "toggle-icon-slot": "start",
              style: { "border-radius": "10px", "background-color": "#fff" }
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_item, {
                  slot: "header",
                  color: "light"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_label, { class: "previousLabel" }, {
                      default: withCtx(() => [..._cache[0] || (_cache[0] = [
                        createTextVNode("Documented medications timeline", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_2$3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.PreviuosSelectedMedicalDrugsList, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      class: "ionLbltp",
                      key: index
                    }, [
                      index == 0 ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                        createBaseVNode("div", null, [
                          createVNode(_component_ion_label, { class: "previousLabelDate" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.prescriptionDate), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createBaseVNode("div", _hoisted_4$2, [
                          (openBlock(), createBlock(_component_dynamic_list, {
                            _selectedMedicalDrugsList: item.previousPrescriptions,
                            show_actions_buttons: false,
                            key: _ctx.componentKey
                          }, null, 8, ["_selectedMedicalDrugsList"]))
                        ])
                      ])) : createCommentVNode("", true)
                    ]);
                  }), 128)),
                  createVNode(_component_ion_accordion_group, { onIonChange: _ctx.accordionGroupChange }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_accordion, {
                        value: "second",
                        "toggle-icon-slot": "start",
                        style: { "border-radius": "10px", "background-color": "#fff" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_item, {
                            slot: "header",
                            color: "light"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, {
                                class: "",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.showMoreMedicationsMsg), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createBaseVNode("div", _hoisted_5$2, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.PreviuosSelectedMedicalDrugsList, (item, index) => {
                              return openBlock(), createElementBlock("div", {
                                class: "ionLbltp",
                                key: index
                              }, [
                                _ctx.itemWasExpanded && index > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
                                  createBaseVNode("div", null, [
                                    createVNode(_component_ion_label, { class: "previousLabelDate" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.prescriptionDate), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createBaseVNode("div", _hoisted_7$1, [
                                    (openBlock(), createBlock(_component_dynamic_list, {
                                      _selectedMedicalDrugsList: item.previousPrescriptions,
                                      show_actions_buttons: false,
                                      key: _ctx.componentKey
                                    }, null, 8, ["_selectedMedicalDrugsList"]))
                                  ])
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onIonChange"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["onIonChange"])
      ])
    ]),
    _: 1
  });
}
const MedicationHistory = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-1db96250"]]);

const _sfc_main$4 = defineComponent({
  name: "PrescriptionTable",
  components: {
    IonCard,
    IonCardHeader,
    IonButton,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonIcon,
    IonCol,
    IonRow,
    IonCheckbox,
    Medication,
    MedicationHistory
  },
  setup() {
    const openAddOtherOPDMedicationModal = async () => {
      await createModal(AddOtherOPDMedication, { class: "large-modal" }, true, {});
    };
    return {
      openAddOtherOPDMedicationModal,
      medkit
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Medication = resolveComponent("Medication");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_MedicationHistory = resolveComponent("MedicationHistory");
  const _component_IonCol = resolveComponent("IonCol");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, null, {
    default: withCtx(() => [
      createVNode(_component_ion_card_content, null, {
        default: withCtx(() => [
          createVNode(_component_Medication),
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(_component_ion_col, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_button, {
                    onClick: _ctx.openAddOtherOPDMedicationModal,
                    color: "primary",
                    style: { "float": "right" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        icon: _ctx.medkit,
                        slot: "start"
                      }, null, 8, ["icon"]),
                      _cache[0] || (_cache[0] = createBaseVNode("span", { style: { "margin-left": "10px", "font-size": "16px", "font-weight": "600" } }, " ADD Other Medication", -1))
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(_component_IonCol, null, {
                default: withCtx(() => [
                  createVNode(_component_MedicationHistory)
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
  });
}
const NCDMedication = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render], ["__scopeId", "data-v-a4ad7088"]]);

const _hoisted_1$3 = { style: { "margin-top": "14px", "margin-left": "10px" } };
const _hoisted_2$2 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { class: "previousSecDrgs" };
const _hoisted_5$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_6$1 = { class: "previousSecDrgs" };
const __default__$1 = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const FirstPreviousNotes = ref();
    const RestOfPreviousNotes = ref();
    const itemWasExpanded = ref(false);
    const itemNotesWasExpanded = ref(false);
    const showMoreNotesMsg = ref("Show more notes");
    onMounted(async () => {
      const previousTreatment = new PreviousTreatment();
      const { previousClinicalNotes } = await previousTreatment.getPatientEncounters();
      FirstPreviousNotes.value = Object.entries(previousClinicalNotes)[0];
      const [, ...restEntries] = Object.entries(previousClinicalNotes);
      RestOfPreviousNotes.value = restEntries;
    });
    function accordionGroupChangeForNotes(ev) {
      const selectedValue = ev.detail.value;
      if (selectedValue !== void 0) {
        if (selectedValue == "third") {
          showMoreNotesMsg.value = "Show less notes";
          itemNotesWasExpanded.value = !itemWasExpanded.value;
        }
      } else {
        showMoreNotesMsg.value = "Show more notes";
        itemNotesWasExpanded.value = !itemWasExpanded.value;
      }
    }
    function removeOuterArray(arr) {
      return arr[1];
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createVNode(unref(IonAccordionGroup), {
              ref: "accordionGroup",
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonAccordion), {
                  value: "fourth",
                  "toggle-icon-slot": "start",
                  style: { "border-radius": "10px", "background-color": "#fff" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[0] || (_cache[0] = [
                            createTextVNode("Previous visits notes", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_2$2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(FirstPreviousNotes.value, (item, index) => {
                        return openBlock(), createElementBlock("div", {
                          class: "ionLbltp",
                          key: index
                        }, [
                          index == 1 ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item, (item1, index1) => {
                              return openBlock(), createElementBlock("div", { key: index1 }, [
                                createBaseVNode("div", null, [
                                  createVNode(unref(IonLabel), { class: "previousLabelDate" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item1.date), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createBaseVNode("div", _hoisted_4$1, [
                                  createVNode(unref(IonList), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonLabel), { class: "notes_p" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item1.notes), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128)),
                      createVNode(unref(IonAccordionGroup), { onIonChange: accordionGroupChangeForNotes }, {
                        default: withCtx(() => [
                          createVNode(unref(IonAccordion), {
                            value: "third",
                            "toggle-icon-slot": "start",
                            style: { "border-radius": "10px", "background-color": "#fff" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonItem), {
                                slot: "header",
                                color: "light"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonLabel), {
                                    class: "",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(showMoreNotesMsg.value), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createBaseVNode("div", _hoisted_5$1, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(RestOfPreviousNotes.value, (item, index) => {
                                  return openBlock(), createElementBlock("div", {
                                    class: "ionLbltp",
                                    key: index
                                  }, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(removeOuterArray(item), (item1, index1) => {
                                      return openBlock(), createElementBlock("div", { key: index1 }, [
                                        createBaseVNode("div", null, [
                                          createVNode(unref(IonLabel), { class: "previousLabelDate" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item1.date), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createBaseVNode("div", _hoisted_6$1, [
                                          createVNode(unref(IonList), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(IonLabel), { class: "notes_p" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item1.notes), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]);
                                    }), 128))
                                  ]);
                                }), 128))
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
                })
              ]),
              _: 1
            }, 512)
          ])
        ]),
        _: 1
      });
    };
  }
});

const PreviousNotes = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-994df42d"]]);

const _hoisted_1$2 = { style: { "margin-top": "14px", "margin-left": "10px" } };
const __default__ = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const store = useTreatmentPlanStore();
    const iconsContent = icons;
    const nonPharmalogicalTherapyAndOtherNotes = computed(() => store.nonPharmalogicalTherapyAndOtherNotes);
    function validateNotes(ev) {
      let value = ev.target.value;
      refSetNonPharmalogicalTherapyAndOtherNotes(value);
    }
    function refSetNonPharmalogicalTherapyAndOtherNotes(value) {
      const treatmentPlanStore = useTreatmentPlanStore();
      treatmentPlanStore.setNonPharmalogicalTherapyAndOtherNotes(value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonLabel), { class: "tpStndCls" }, {
                default: withCtx(() => [
                  createVNode(unref(IonIcon), {
                    icon: unref(clipboardOutline),
                    class: "header-icon",
                    "aria-hidden": "true"
                  }, null, 8, ["icon"]),
                  _cache[1] || (_cache[1] = createTextVNode(" Non-pharmalogical therapy and other notes ", -1))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(NonPharmacologicalIntervention),
                createVNode(unref(IonItem), {
                  class: "input_item",
                  style: { "min-height": "120px", "margin-top": "14px" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          slot: "start",
                          icon: unref(iconsContent).editPen,
                          "aria-hidden": "true"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonTextarea), {
                      onIonInput: validateNotes,
                      modelValue: nonPharmalogicalTherapyAndOtherNotes.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nonPharmalogicalTherapyAndOtherNotes.value = $event),
                      style: { "min-height": "120px" },
                      class: "inputTpln",
                      "auto-grow": true,
                      fill: "outline"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_1$2, [
                createVNode(PreviousNotes)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const NonPharmalogicalTherapyAndOtherNotes = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fd19ec21"]]);

const _hoisted_1$1 = { class: "background" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3 = { style: { "margin": "10px" } };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { style: { "margin": "10px" } };
const _hoisted_6 = { key: 2 };
const _hoisted_7 = { style: { "margin": "10px" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TreatmentPlan",
  setup(__props) {
    const segments = ref(["medications", "allergies", "other_notes"]);
    const segmentContent = ref(segments.value[0]);
    onMounted(() => {
      setSegmentContent(segments.value[0]);
    });
    function setSegmentContent(name) {
      segmentContent.value = name;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonSegment), {
          value: segmentContent.value,
          style: { "margin-top": "5px" }
        }, {
          default: withCtx(() => [
            createVNode(unref(IonSegmentButton), {
              value: "medications",
              onClick: _cache[0] || (_cache[0] = ($event) => setSegmentContent(segments.value[0]))
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode("Medications", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonSegmentButton), {
              value: "allergies",
              onClick: _cache[1] || (_cache[1] = ($event) => setSegmentContent(segments.value[1]))
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("Allergies", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonSegmentButton), {
              value: "other_notes",
              onClick: _cache[2] || (_cache[2] = ($event) => setSegmentContent(segments.value[2]))
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode("Non-pharmalogical therapy and other notes", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        segmentContent.value === segments.value[0] ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(NCDMedication)
          ])
        ])) : createCommentVNode("", true),
        segmentContent.value === segments.value[1] ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(Allergies),
            createVNode(PreviousAllergies, { style: { "margin-top": "10px" } })
          ])
        ])) : createCommentVNode("", true),
        segmentContent.value === segments.value[2] ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createVNode(NonPharmalogicalTherapyAndOtherNotes)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});

const TreatmentPlan = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d844be41"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsultationPlan",
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    const { printVisitSummary } = usePatientProfile();
    const router = useRouter();
    const route = useRoute();
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const vitalsStore = useVitalsStore();
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useDiagnosisStore$1();
    useTreatmentPlanStore();
    const ncdMedicationsStore = useNCDMedicationsStore();
    const generalStore = useGeneralStore();
    useOutcomeStore();
    const enrollmentStore = useEnrollementStore();
    const complicationsStore = useComplicationsStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { diagnosis } = storeToRefs(diagnosisStore);
    const { substance } = storeToRefs(enrollmentStore);
    const { selectedNCDMedicationList } = storeToRefs(ncdMedicationsStore);
    const { FootScreening, visualScreening, cvScreening } = storeToRefs(complicationsStore);
    const { sessionDate } = storeToRefs(configStore);
    const { apiStatus } = storeToRefs(useStatusStore());
    const openCornfirmModal = async () => {
      let confirmOpen = false;
      const handleCancel = (event) => {
        confirmOpen = false;
      };
      const handleConfirm = async (event) => {
        if (event.detail == true) {
          confirmOpen = true;
        }
      };
      const _isQualifiedAHD_ = await isQualifiedAHD();
      if (_isQualifiedAHD_ == true) {
        const dataToPass = { message: "You can screen the patient for AHD, do you want to proceed?" };
        await createModal(confirmModal, { class: "otherVitalsModal" }, true, dataToPass, { cancel: handleCancel, confirm: handleConfirm });
      } else {
        confirmOpen = false;
      }
      return confirmOpen;
    };
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
        if (newOptions.disabled !== oldOptions?.disabled) {
          console.log(`Done button ${newOptions.disabled ? "disabled" : "enabled"}`);
        }
        if (newOptions.text !== oldOptions?.text) {
          console.log(`Done button text changed from "${oldOptions?.text}" to "${newOptions.text}"`);
        }
      },
      { deep: true }
    );
    watch(isSaving, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        console.log(`Saving state changed: ${oldValue} -> ${newValue}`);
        if (newValue) {
          console.log("Starting save process...");
        } else {
          console.log("Save process completed");
        }
      }
    });
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const openBackController = () => {
      router.push("/patient-profile");
    };
    const getActiveTabs = () => {
      return generalStore.NCDActivities.map((item) => {
        return { title: item, icon: "" };
      });
    };
    const tabs = ref(getActiveTabs());
    const vitalsRef = ref(null);
    const riskAssessmentRef = ref(null);
    const investigationsRef = ref(null);
    const diagnosisRef = ref(null);
    const complicationsRef = ref(null);
    const treatmentPlanRef = ref(null);
    const nextAppointmentRef = ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Vital Signs":
          return "Vitals";
        case "Risk Assessment":
          return "RiskAssessment";
        case "Investigations":
          return "Investigations";
        case "Diagnosis":
          return "DiagnosisComponent";
        case "Complications Screening":
          return "ComplicationsScreening";
        case "Treatment Plan":
          return "TreatmentPlan";
        case "Next Appointment":
          return "NextAppointment";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Vital Signs":
                return "Vitals";
              case "Risk Assessment":
                return "RiskAssessment";
              case "Investigations":
                return "Investigations";
              case "Diagnosis":
                return "DiagnosisComponent";
              case "Complications Screening":
                return "ComplicationsScreening";
              case "Treatment Plan":
                return "TreatmentPlan";
              case "Next Appointment":
                return "NextAppointment";
            }
          }
          return null;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const cleanVitalForm = () => {
      const vitals2 = useVitalsStore();
      vitals2.setVitals(vitals2.getInitialVitals(patient.value.ID));
    };
    const markWizard = async () => {
      const sessionD = getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      const vitalsData = getOfflineSavedUnsavedData("vitals");
      for (let i = 0; i < tabs.value.length; i++) {
        const tab = tabs.value[i];
        if (tab.title === "Vital Signs") {
          tabs.value[i].icon = isDateInArray(sessionD, vitalsData) ? checkmarkOutline : "";
        } else if (tab.title === "Risk Assessment") {
          const substanceAbuseData = getOfflineSavedUnsavedData("substanceAbuse");
          tabs.value[i].icon = isDateInArray(sessionD, substanceAbuseData) ? checkmarkOutline : "";
        } else if (tab.title === "Investigations") {
          const labOrders = patient?.value?.labOrders?.saved;
          const filteredArray = labOrders?.filter((obj) => {
            return HisDate.toStandardHisFormat(sessionD) === HisDate.toStandardHisFormat(obj.order_date);
          });
          tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
        } else if (tab.title === "Diagnosis") {
          const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
          tabs.value[i].icon = isDateInArray(sessionD, diagnosisData) ? checkmarkOutline : "";
        } else if (tab.title === "Complications Screening") {
          const screeningData = getOfflineSavedUnsavedData("screening");
          tabs.value[i].icon = isDateInArray(sessionD, screeningData) ? checkmarkOutline : "";
        } else if (tab.title === "Treatment Plan") {
          if (selectedNCDMedicationList.value.length > 0) {
            tabs.value[i].icon = MedicationSelectionHasValues() ? checkmarkOutline : "";
          } else {
            tabs.value[i].icon = "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, diagnosisArray) => {
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return diagnosisArray.some((diagnosis2) => {
        const obsDate = new Date(diagnosis2.obs_datetime);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveComplications = async () => {
      const data = [];
      const childDataVisualScreening = await formatInputFiledData(visualScreening.value);
      const childDataFootScreening = await formatGroupRadioButtonData(FootScreening.value);
      const childDataCVRisk = await formatInputFiledData(cvScreening.value);
      if (childDataVisualScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Visual acuity", true),
          value_text: "visual acuity test",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataVisualScreening
        });
      }
      if (childDataFootScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Foot check", true),
          value_text: "foot screening",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataFootScreening
        });
      }
      if (childDataCVRisk.length > 0) {
        data.push(...childDataCVRisk);
      }
      if (data.length > 0) {
        (patient.value.screening ??= {}).unsaved ??= [];
        await ObservationService.addObsToEncounterPatient(data, EncounterTypeId.SCREENING);
        toastSuccess("Complications saved successfully");
      } else {
        toastWarning("No complications data to save");
      }
    };
    const saveTreatmentPlan = async () => {
      const allergyStore = useAllegyStore();
      if (!lodashExports.isEmpty(allergyStore.selectedMedicalAllergiesList)) {
        const userStore = useUserStore();
        const allergies = allergyStore.selectedMedicalAllergiesList.map((allergy) => ({
          concept_id: allergy.concept_id,
          obs_datetime: Service.getSessionDate(),
          value_coded: allergy.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: allergy.name
        }));
        const patientData2 = await stageAllergies(allergies);
        patient.value = Object.assign(patient.value, patientData2);
        console.log("Allergies staged successfully:", patient.value);
        allergyStore.clearSelectedMedicalAllergiesList();
      }
      const m_patientData = await createNCDDrugOrder();
      patient.value = Object.assign(patient.value, m_patientData);
      const patientData = await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      patient.value = Object.assign(patient.value, patientData);
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const newTabTitle = tabs.value[index]?.title;
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "Risk Assessment") {
        riskAssessmentRef.value?.onSubmit();
      }
      if (value == "Complications Screening") {
        await saveComplications();
      }
      if (value == "Treatment Plan") {
        await saveTreatmentPlan();
      }
      if (newTabTitle == "Investigations") {
        const response = await openCornfirmModal();
        if (response == true) {
          await createModal(_sfc_main$i, { class: "fullScreenModal" }, true, { closeModalOnFinish: true });
        }
      }
      await savePatientRecord(patient.value);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await resetNCDPatientData();
        await savePatientRecord(patient.value);
        await printBarcode();
        router.push("/patient-profile");
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    const printBarcode = async () => {
      const response = await alertConfirmation("Do you want to print a barcode?", { header: "Printer" });
      if (response === "Confirm") await printVisitSummary();
    };
    onMounted(async () => {
      try {
        if (generalStore.NCDActivities.length === 0) {
          router.push("/patient-profile");
          return;
        }
        const data = useComplicationsStore();
        data.resetScreening();
        tabs.value = getActiveTabs();
        patientSessionManager.setCurrentPatientID(patient.value?.patientID);
        await markWizard();
        if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
          currentTabIndex.value = 0;
          console.log("Setting initial tab index to 0");
        }
        isDoneButtonDisabled.value = false;
        isSaving.value = false;
        validateDoneButtonState();
      } catch (error) {
        console.error("Error: ", error);
      }
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      vitals,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        try {
          const data = useComplicationsStore();
          data.resetScreening();
          patientSessionManager.setCurrentPatientID(patient.value?.patientID);
          await markWizard();
        } catch (error) {
          console.error("Error updating patient data: ", error);
        }
      },
      { deep: true }
    );
    watch(
      sessionDate,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      investigations,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      diagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      substance,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedNCDMedicationList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        refreshWizard();
        cleanVitalForm();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (old, newData) => {
        if (old.ID != newData.ID) {
          refreshWizard();
          cleanVitalForm();
        }
      },
      { deep: true }
    );
    __expose({
      saveData,
      markWizard,
      refreshWizard,
      validateDoneButtonState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$g, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Consultation Plan",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Vitals, {
                        ref_key: "vitalsRef",
                        ref: vitalsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$h, {
                        ref_key: "riskAssessmentRef",
                        ref: riskAssessmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "RiskAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Investigations, {
                        ref_key: "investigationsRef",
                        ref: investigationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Investigations"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(DiagnosisComponent, {
                        ref_key: "diagnosisRef",
                        ref: diagnosisRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DiagnosisComponent"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ComplicationsScreening, {
                        ref_key: "complicationsRef",
                        ref: complicationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ComplicationsScreening"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(TreatmentPlan, {
                        ref_key: "treatmentPlanRef",
                        ref: treatmentPlanRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "TreatmentPlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(NextAppointment, {
                        ref_key: "nextAppointmentRef",
                        ref: nextAppointmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "NextAppointment"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
              ])
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
