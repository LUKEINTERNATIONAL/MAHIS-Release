import { f as ref, s as defineComponent, w as watch, y as openBlock, z as createElementBlock, J as Fragment, R as renderList, C as createBaseVNode, D as toDisplayString, F as unref, a4 as normalizeClass, A as createVNode, B as withCtx, L as IonIcon, c3 as checkmarkCircleOutline, N as IonButton, di as eyeOutline, aS as medicalOutline, H as createCommentVNode, c as computed, aL as useRouter, ct as useRoute, cj as onBeforeUnmount, a2 as onMounted, O as createBlock, aG as IonContent, Q as alertCircleOutline, bK as IonCard, ch as medkit, a5 as createTextVNode, a6 as IonInput, af as IonRow, aA as IonCol, bf as IonFooter, bu as IonPage } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { E as EIRreportsStore } from './EIRreportsStore-BUJuzJ34.js';
import { N as NavigationMenu } from './NavigationMenu-B3r25OIr.js';
import { V as ViewToggleComponent } from './ViewToggleComponent-Bipeu1Oq.js';
import { aq as ConceptService, b as EncounterTypeId, a as useProgramStore, H as HisDate, _ as _export_sfc, aY as AppEncounterService, P as PatientService, S as Service, u as useDemographicsStore, J as savePatientRecord, G as toastSuccess, bX as toastDanger, bH as DrugOrderService, e as useGeneralStore, q as usePatientList, aM as PrintoutService, v as closeVisit, k as alertConfirmation, x as toastDanger$1, bY as checkLiveAPIStatus, g as getPouchDBRecords } from '../index-B9nzT5-y.js';
import { a as DRUG_FREQUENCIES } from './drug_prescription_service-gxqtCis_.js';

function useDiagnosis() {
  const diagnosesByDate = ref({});
  const isResolving = ref(false);
  const isDiagnosisEncounter = (encounterType) => {
    const raw = EncounterTypeId[encounterType];
    return raw ? raw.toLowerCase().includes("diagnosis") : false;
  };
  const processObservations = async (observations, authorizedPrograms) => {
    isResolving.value = true;
    const grouped = {};
    const programMap = new Map(authorizedPrograms.map((p) => [p.program_id, p.name]));
    for (const group of observations) {
      if (!isDiagnosisEncounter(group.encounter_type)) continue;
      for (const obs of group.obs) {
        if (obs.obs_datetime) {
          const date = obs.obs_datetime.split(" ")[0];
          if (!grouped[date]) grouped[date] = [];
          const resolvedName = obs.value_coded ? await ConceptService.getConceptName(obs.value_coded) : obs.concept_name || "Unknown Diagnosis";
          grouped[date].push({
            resolvedName,
            status: group.status || "Saved",
            program: programMap.get(obs.program_id) || "N/A",
            ...obs
          });
        }
      }
    }
    diagnosesByDate.value = grouped;
    isResolving.value = false;
  };
  return {
    diagnosesByDate,
    isResolving,
    processObservations
  };
}

const _hoisted_1$1 = { class: "diagnosis-container" };
const _hoisted_2$1 = { class: "date-header" };
const _hoisted_3$1 = { class: "full-date" };
const _hoisted_4$1 = { class: "iso-date" };
const _hoisted_5$1 = { class: "minimal-table" };
const _hoisted_6$1 = { class: "diagnosis-name" };
const _hoisted_7$1 = { class: "program-column" };
const _hoisted_8$1 = { class: "text-right" };
const _hoisted_9$1 = { class: "action-cell" };
const _hoisted_10$1 = {
  key: 0,
  class: "empty-state"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DiagnosisSummary",
  props: {
    observations: {}
  },
  emits: ["manage", "details"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const programStore = useProgramStore();
    const { diagnosesByDate, isResolving, processObservations } = useDiagnosis();
    watch(() => props.observations, (newObs) => {
      processObservations(newObs, programStore.authorizedPrograms);
    }, { immediate: true, deep: true });
    const uniqueDates = computed(() => {
      return Object.keys(diagnosesByDate.value).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime()
      );
    });
    const formatFullDate = (date) => HisDate.toStandardHisDisplayFormat(date);
    const handleManage = (diag) => emit("manage", diag);
    const viewDetails = (diag) => emit("details", diag);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(uniqueDates.value, (date) => {
          return openBlock(), createElementBlock("div", {
            key: date,
            class: "date-group"
          }, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("span", _hoisted_3$1, toDisplayString(formatFullDate(date)), 1),
              createBaseVNode("span", _hoisted_4$1, toDisplayString(date), 1)
            ]),
            createBaseVNode("table", _hoisted_5$1, [
              _cache[0] || (_cache[0] = createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", null, "Diagnosis Name"),
                  createBaseVNode("th", null, "Program"),
                  createBaseVNode("th", null, "Status"),
                  createBaseVNode("th", { class: "text-right" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diagnosesByDate)[date], (diagnosis, index) => {
                  return openBlock(), createElementBlock("tr", { key: index }, [
                    createBaseVNode("td", _hoisted_6$1, toDisplayString(diagnosis.resolvedName), 1),
                    createBaseVNode("td", _hoisted_7$1, toDisplayString(diagnosis.program || "N/A"), 1),
                    createBaseVNode("td", null, [
                      createBaseVNode("span", {
                        class: normalizeClass(["status-badge", diagnosis.status.toLowerCase()])
                      }, toDisplayString(diagnosis.status), 3)
                    ]),
                    createBaseVNode("td", _hoisted_8$1, [
                      createBaseVNode("div", _hoisted_9$1, [
                        createVNode(unref(IonButton), {
                          fill: "clear",
                          color: "success",
                          size: "small",
                          onClick: ($event) => handleManage(diagnosis)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              slot: "icon-only",
                              icon: unref(checkmarkCircleOutline)
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(unref(IonButton), {
                          fill: "clear",
                          color: "medium",
                          size: "small",
                          onClick: ($event) => viewDetails(diagnosis)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              slot: "icon-only",
                              icon: unref(eyeOutline)
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]);
        }), 128)),
        uniqueDates.value.length === 0 && !unref(isResolving) ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
          createVNode(unref(IonIcon), {
            icon: unref(medicalOutline),
            class: "empty-icon"
          }, null, 8, ["icon"]),
          _cache[1] || (_cache[1] = createBaseVNode("p", null, "No diagnosis records found for this patient.", -1))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});

const DiagnosisSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ebea2b59"]]);

class DispensationService extends AppEncounterService {
  drugHistory;
  currentDrugOrder;
  constructor(patientID = null, providerID = null) {
    const patient = new PatientService();
    const id = patientID !== null ? patientID : patient.getID();
    const p_id = providerID !== null ? providerID : Service.getUserID();
    super(id, 32, p_id);
    this.drugHistory = [];
    this.currentDrugOrder = [];
  }
  getDrugHistory() {
    return this.drugHistory;
  }
  getCurrentOrder() {
    return this.currentDrugOrder;
  }
  getDispensationArryObj(medication) {
    return [
      {
        drug_order_id: medication.order_id,
        date: this.date,
        quantity: medication.amountToDispense,
        offline_id: medication.offline_id,
        provider_id: this.providerID,
        program_id: medication.program_id,
        patient_id: this.patientID
      }
    ];
  }
  saveDispensations(dispensations, programID) {
    return AppEncounterService.postJson("/dispensations", {
      dispensations,
      provider_id: this.providerID,
      program_id: programID
    });
  }
  generateOfflineDispensatiobObject(dispensations, programID) {
    return {
      dispensations,
      provider_id: this.providerID,
      program_id: programID,
      patient_id: this.patientID
    };
  }
  async saveDispensationsOffline(medicationArry) {
    try {
      const demographicsStore = useDemographicsStore();
      const { patient } = storeToRefs(demographicsStore);
      const patientData = JSON.parse(JSON.stringify(patient.value));
      if (medicationArry.length > 0) {
        (patientData.dispensations ??= {}).unsaved ??= [];
        const existingMedications = patientData.dispensations.unsaved;
        if (existingMedications.length >= 0) {
          patientData.dispensations.unsaved.push(...medicationArry);
        }
      }
      await savePatientRecord(patientData);
      toastSuccess("Dispensations saved offline successfully");
    } catch (error) {
      toastDanger("Error saving dispensations offline" + error);
    }
  }
  async voidOrder(orderId) {
    return AppEncounterService.void(`/dispensations/${orderId}`, {});
  }
  async loadDrugHistory() {
    const res = await DrugOrderService.getDrugOrderHistory(this.patientID);
    if (res) {
      this.drugHistory = res;
    }
  }
  async loadCurrentDrugOrder() {
    const res = await DrugOrderService.getDrugOrders(this.patientID);
    if (res) {
      this.currentDrugOrder = await Promise.all(res);
    }
  }
  calcCompletePack(drug, units) {
    const drugOrderBarcodes = drug.barcodes.sort(function(a, b) {
      return a.tabs - b.tabs;
    });
    if (drugOrderBarcodes.length == 0 || units == 0) {
      return units;
    }
    for (let i = 0; i <= drugOrderBarcodes.length - 1; i++) {
      if (parseInt(drugOrderBarcodes[i].tabs) >= units) {
        return drugOrderBarcodes[i].tabs;
      }
    }
    const smallestAvailableTab = parseInt(drugOrderBarcodes[0].tabs);
    let completePack = parseInt(drugOrderBarcodes[drugOrderBarcodes.length - 1].tabs);
    while (completePack < units) {
      completePack += smallestAvailableTab;
    }
    return completePack;
  }
}

const _hoisted_1 = {
  key: 0,
  class: "p-4",
  style: { "margin-left": "10px", "margin-right": "10px" }
};
const _hoisted_2 = {
  key: 0,
  style: { "margin": "20px" },
  class: "flex flex-col items-center justify-center p-8"
};
const _hoisted_3 = {
  key: 1,
  style: { "margin-left": "10px", "margin-right": "10px" },
  class: "p-4 list-container"
};
const _hoisted_4 = { class: "program-title" };
const _hoisted_5 = { class: "group-header-box" };
const _hoisted_6 = { class: "flex justify-between items-center" };
const _hoisted_7 = { class: "date-label" };
const _hoisted_8 = {
  key: 0,
  class: "diag-badge-row"
};
const _hoisted_9 = { class: "standard-table" };
const _hoisted_10 = { class: "drug-name-flex" };
const _hoisted_11 = { class: "text-subtle" };
const _hoisted_12 = { class: "text-subtle" };
const _hoisted_13 = {
  key: 0,
  class: "error-text"
};
const _hoisted_14 = { class: "text-right" };
const _hoisted_15 = {
  key: 2,
  style: { "margin-left": "10px", "margin-right": "10px" },
  class: "p-4"
};
const _hoisted_16 = { class: "program-title" };
const _hoisted_17 = { class: "card-date-section" };
const _hoisted_18 = { class: "date-label" };
const _hoisted_19 = {
  key: 0,
  class: "card-diag-list"
};
const _hoisted_20 = {
  class: "card-inner",
  style: { "margin": "10px" }
};
const _hoisted_21 = { class: "card-med-title" };
const _hoisted_22 = { class: "card-details" };
const _hoisted_23 = { class: "text-subtle" };
const _hoisted_24 = {
  key: 0,
  class: "error-text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NCDMedicationDispenstion",
  setup(__props) {
    const { diagnosesByDate, processObservations } = useDiagnosis();
    const programStore = useProgramStore();
    const handleDynamicClick = (payload) => {
      console.log("Dynamic button clicked:", payload);
    };
    const activeDynamicButton = ref("");
    const viewDiagnosis = () => {
      activeDynamicButton.value = activeDynamicButton.value === "diagnosis" ? "" : "diagnosis";
      console.log("View diagnosis clicked, active:", activeDynamicButton.value);
    };
    const toolbarButtons = ref([
      {
        icon: medicalOutline,
        iconSlot: "icon-only",
        fill: "solid",
        color: "sucess",
        showName: true,
        onClick: () => viewDiagnosis(),
        active: computed(() => activeDynamicButton.value === "diagnosis"),
        name: "Diagnosis Summary"
      }
    ]);
    const eirStore = EIRreportsStore();
    const demographicsStore = useDemographicsStore();
    const generalStore = useGeneralStore();
    const patientListStore = usePatientList();
    const { navigationPayload } = storeToRefs(eirStore);
    const { patient } = storeToRefs(demographicsStore);
    const { NCDMedicatioTogglePreference } = storeToRefs(generalStore);
    const router = useRouter();
    const route = useRoute();
    const navMenuRef = ref(null);
    const medicationsByProgram = ref({});
    const medications = ref([]);
    const isDispensing = ref(false);
    const tempInputValues = ref({});
    watch(patient, async (newVal) => {
      if (newVal?.observations) {
        await processObservations(newVal.observations, programStore.authorizedPrograms);
      }
    }, { immediate: true, deep: true });
    const initComp = async () => {
      initTogglePreference();
      medications.value = [];
      initOwnNavData();
      isDispensing.value = false;
      await getPatientPrescribedMedications();
    };
    const getPrograms = async () => {
      try {
        const apiStatus = await checkLiveAPIStatus();
        if (apiStatus) {
          return await getOnlinePrograms();
        } else {
          return await getOfflinePrograms();
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
        return await getOnlinePrograms();
      }
    };
    const getOnlinePrograms = async () => {
      const programs = await Service.getJson("/programs", { page_size: 1e3 });
      return programs;
    };
    const getOfflinePrograms = async () => {
      try {
        const programs = await getPouchDBRecords("programs");
        return programs;
      } catch (error) {
        console.error("Error fetching offline districts:", error.message);
        throw error;
      }
    };
    const printVisitSummary = async () => {
      await new PrintoutService().printData("visit");
    };
    const closeVisitRedirection = async (patientData) => {
      await closePatientVisit(patientData);
      await router.push("/home");
    };
    const closePatientVisit = async (patientData) => {
      try {
        await closeVisit(patientData);
        await patientListStore.refresh(Service.getUserLocationId());
      } catch (e) {
        console.error(e);
      }
    };
    const initOwnNavData = () => {
      eirStore.setNavigationPayload("Dispense Medication", true, false, "/", "/home");
    };
    const getPatientPrescribedMedications = async () => {
      const saved = patient.value?.MedicationOrder?.saved ?? [];
      const unsaved = patient.value?.MedicationOrder?.unsaved ?? [];
      const allPrescribedMedications = [...saved, ...unsaved];
      await groupMedicationsByProgram(allPrescribedMedications);
    };
    const groupMedicationsByProgram = async (medicationsList) => {
      const programs = await getPrograms();
      const programMap = {};
      programs.forEach((program) => {
        programMap[program.program_id] = program.name;
      });
      medicationsByProgram.value = {};
      medicationsList.forEach((medication) => {
        const programName = programMap[medication.program_id];
        if (programName) {
          if (!medicationsByProgram.value[programName]) {
            medicationsByProgram.value[programName] = [];
          }
          if (!medication.quantity) {
            const key = getMedicationKey(medication);
            if (tempInputValues.value[key]) {
              medication.amountToDispense = tempInputValues.value[key];
              const value = parseFloat(medication.amountToDispense);
              if (isNaN(value) || value <= 0) {
                medication.error = "Please enter a valid amount greater than 0.";
              } else {
                medication.error = null;
              }
            }
            medicationsByProgram.value[programName].push(medication);
          }
        }
      });
      const allHaveQuantity = medicationsList.every((med) => med.quantity);
      if (allHaveQuantity) {
        if (Service.getProgramID() == 14) {
          if (await alertConfirmation("All medications dispensed. Would you like to print the visit summary before closing?")) {
            await printVisitSummary();
          }
          await closePatientVisit(patient.value);
          await router.push("/home");
        }
      }
    };
    const getFrequencyLabel = (code) => {
      const frequency = DRUG_FREQUENCIES.find((f) => f.code === code);
      return frequency ? frequency.label : "Unknown";
    };
    const getMedicationKey = (medication) => {
      return medication?.order_id || medication?.offline_id || `${medication.drug_name}_${medication.start_date}`;
    };
    const validateAmount = (medication) => {
      const value = parseFloat(medication.amountToDispense);
      const key = getMedicationKey(medication);
      tempInputValues.value[key] = medication.amountToDispense;
      if (isNaN(value) || value <= 0) {
        medication.error = "Please enter a valid amount greater than 0.";
      } else {
        medication.error = null;
      }
    };
    const dispenseMedication = async (medication) => {
      isDispensing.value = true;
      try {
        if (medication.error) {
          toastDanger$1("Fix errors before dispensing.");
          return;
        }
        medication.quantity = medication.amountToDispense;
        const dispensationService = new DispensationService();
        const dispensationArryObj = dispensationService.getDispensationArryObj(medication);
        medication.dispensation = dispensationArryObj;
        medication.dispensed = true;
        await savePatientRecord(patient.value);
        const key = getMedicationKey(medication);
        delete tempInputValues.value[key];
        await getPatientPrescribedMedications();
      } catch (error) {
        toastDanger$1("Dispensing failed. Please try again.");
        toastDanger$1("Error: " + error);
        console.error(error);
      } finally {
        isDispensing.value = false;
      }
    };
    const formatHeaderDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const handleViewChange = (view) => {
      if (view === "list" || view === "card") {
        activeDynamicButton.value = "";
      }
      initTogglePreference(view, true);
    };
    const initTogglePreference = (toggle_view = "list", updateStore = false) => {
      const preference = { toggle_view };
      if (Object.keys(NCDMedicatioTogglePreference.value).length === 0) {
        preference.toggle_view = "list";
        generalStore.setNCDMedicatioTogglePreference(preference);
      }
      if (Object.keys(NCDMedicatioTogglePreference.value).length > 0 && updateStore === true) {
        generalStore.setNCDMedicatioTogglePreference(preference);
      }
    };
    const groupMedicationsByDate = (medicationsList) => {
      console.log("Grouping medications by date:", medicationsList);
      return medicationsList.reduce((groups, medication) => {
        const date = medication.start_date.split("T")[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(medication);
        return groups;
      }, {});
    };
    const clearTempValues = () => {
      tempInputValues.value = {};
    };
    onBeforeUnmount(() => {
      clearTempValues();
    });
    watch(
      patient,
      async () => {
        if (isDispensing.value) {
          return;
        }
        if (route.name === "ncdDispensations") {
          await initComp();
        }
      },
      { deep: true }
    );
    watch(
      route,
      (to, from) => {
        if (from?.name === "ncdDispensations" && to.name !== "ncdDispensations") {
          clearTempValues();
        }
        if (to.name === "ncdDispensations") {
          initComp();
        }
      },
      { immediate: true }
    );
    onMounted(() => {
      initComp();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(NavigationMenu, {
            ref_key: "navMenuRef",
            ref: navMenuRef
          }, null, 512),
          createVNode(ViewToggleComponent, {
            "initial-view": unref(NCDMedicatioTogglePreference).toggle_view,
            onViewChanged: handleViewChange,
            "dynamic-buttons": toolbarButtons.value,
            onDynamicButtonClick: handleDynamicClick
          }, null, 8, ["initial-view", "dynamic-buttons"]),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              activeDynamicButton.value === "diagnosis" ? (openBlock(), createElementBlock("div", _hoisted_1, [
                unref(patient)?.observations ? (openBlock(), createBlock(DiagnosisSummary, {
                  key: 0,
                  observations: unref(patient).observations
                }, null, 8, ["observations"])) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                Object.keys(medicationsByProgram.value).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createVNode(unref(IonIcon), {
                    icon: unref(alertCircleOutline),
                    size: "large",
                    class: "mb-4 text-gray-500"
                  }, null, 8, ["icon"]),
                  _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "text-xl font-semibold text-gray-700 mb-2" }, "No Medications to Dispense", -1)),
                  _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-600" }, "There are currently no medications waiting to be dispensed for current Client.", -1))
                ])) : unref(NCDMedicatioTogglePreference).toggle_view === "list" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(medicationsByProgram.value, (medications2, programName) => {
                    return openBlock(), createElementBlock(Fragment, { key: programName }, [
                      createBaseVNode("h2", _hoisted_4, toDisplayString(programName), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(groupMedicationsByDate(medications2), (medicationGroup, date) => {
                        return openBlock(), createElementBlock(Fragment, { key: date }, [
                          createBaseVNode("div", _hoisted_5, [
                            createBaseVNode("div", _hoisted_6, [
                              createBaseVNode("h3", _hoisted_7, toDisplayString(formatHeaderDate(date)), 1)
                            ]),
                            unref(diagnosesByDate)[date] ? (openBlock(), createElementBlock("div", _hoisted_8, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diagnosesByDate)[date], (diag) => {
                                return openBlock(), createElementBlock("span", {
                                  key: diag.concept_id,
                                  class: "diag-mini-pill"
                                }, toDisplayString(diag.resolvedName), 1);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(IonCard), { class: "table-card" }, {
                            default: withCtx(() => [
                              createBaseVNode("table", _hoisted_9, [
                                _cache[4] || (_cache[4] = createBaseVNode("thead", null, [
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("th", { style: { "width": "35%" } }, "Medication"),
                                    createBaseVNode("th", { style: { "width": "15%" } }, "Dose"),
                                    createBaseVNode("th", { style: { "width": "20%" } }, "Frequency"),
                                    createBaseVNode("th", { style: { "width": "15%" } }, "Amount"),
                                    createBaseVNode("th", {
                                      style: { "width": "15%" },
                                      class: "text-right"
                                    }, "Action")
                                  ])
                                ], -1)),
                                createBaseVNode("tbody", null, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(medicationGroup, (medication) => {
                                    return openBlock(), createElementBlock("tr", {
                                      key: getMedicationKey(medication)
                                    }, [
                                      createBaseVNode("td", null, [
                                        createBaseVNode("div", _hoisted_10, [
                                          createVNode(unref(IonIcon), {
                                            icon: unref(medkit),
                                            class: "drug-icon"
                                          }, null, 8, ["icon"]),
                                          createTextVNode(" " + toDisplayString(medication.drug_name), 1)
                                        ])
                                      ]),
                                      createBaseVNode("td", null, [
                                        createBaseVNode("span", _hoisted_11, toDisplayString(medication.dose) + " " + toDisplayString(medication.units), 1)
                                      ]),
                                      createBaseVNode("td", null, [
                                        createBaseVNode("span", _hoisted_12, toDisplayString(getFrequencyLabel(medication.frequency)), 1)
                                      ]),
                                      createBaseVNode("td", null, [
                                        createVNode(unref(IonInput), {
                                          type: "number",
                                          modelValue: medication.amountToDispense,
                                          "onUpdate:modelValue": ($event) => medication.amountToDispense = $event,
                                          class: normalizeClass(["table-input", medication.error ? "input-error" : ""]),
                                          onInput: ($event) => validateAmount(medication)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"]),
                                        medication.error ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(medication.error), 1)) : createCommentVNode("", true)
                                      ]),
                                      createBaseVNode("td", _hoisted_14, [
                                        createVNode(unref(IonButton), {
                                          color: "success",
                                          size: "small",
                                          onClick: ($event) => dispenseMedication(medication),
                                          disabled: medication.dispensed || !medication.amountToDispense || parseFloat(medication.amountToDispense) <= 0 || !!medication.error
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(medication.dispensed ? "Done" : "Dispense"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick", "disabled"])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ], 64);
                      }), 128))
                    ], 64);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_15, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(medicationsByProgram.value, (medications2, programName) => {
                    return openBlock(), createElementBlock(Fragment, { key: programName }, [
                      createBaseVNode("h2", _hoisted_16, toDisplayString(programName), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(groupMedicationsByDate(medications2), (medicationGroup, date) => {
                        return openBlock(), createElementBlock(Fragment, { key: date }, [
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("h3", _hoisted_18, toDisplayString(formatHeaderDate(date)), 1),
                            unref(diagnosesByDate)[date] ? (openBlock(), createElementBlock("div", _hoisted_19, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(diagnosesByDate)[date], (diag) => {
                                return openBlock(), createElementBlock("span", {
                                  key: diag.concept_id,
                                  class: "diag-pill-outline"
                                }, toDisplayString(diag.resolvedName), 1);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(IonRow), null, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(medicationGroup, (medication) => {
                                return openBlock(), createBlock(unref(IonCol), {
                                  key: getMedicationKey(medication),
                                  size: "12",
                                  "size-md": "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCard), { class: "med-card-styled" }, {
                                      default: withCtx(() => [
                                        createBaseVNode("div", _hoisted_20, [
                                          createBaseVNode("div", _hoisted_21, [
                                            createVNode(unref(IonIcon), { icon: unref(medkit) }, null, 8, ["icon"]),
                                            createBaseVNode("span", null, toDisplayString(medication.drug_name), 1)
                                          ]),
                                          createBaseVNode("div", _hoisted_22, [
                                            createBaseVNode("p", _hoisted_23, toDisplayString(getFrequencyLabel(medication.frequency)), 1),
                                            createVNode(unref(IonInput), {
                                              type: "number",
                                              placeholder: "Qty",
                                              modelValue: medication.amountToDispense,
                                              "onUpdate:modelValue": ($event) => medication.amountToDispense = $event,
                                              class: normalizeClass(["card-input", medication.error ? "input-error" : ""]),
                                              onInput: ($event) => validateAmount(medication)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"]),
                                            medication.error ? (openBlock(), createElementBlock("div", _hoisted_24, toDisplayString(medication.error), 1)) : createCommentVNode("", true)
                                          ]),
                                          createVNode(unref(IonButton), {
                                            expand: "block",
                                            color: "success",
                                            onClick: ($event) => dispenseMedication(medication),
                                            disabled: medication.dispensed || !medication.amountToDispense || parseFloat(medication.amountToDispense) <= 0 || !!medication.error
                                          }, {
                                            default: withCtx(() => [..._cache[5] || (_cache[5] = [
                                              createTextVNode(" Dispense ", -1)
                                            ])]),
                                            _: 1
                                          }, 8, ["onClick", "disabled"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ], 64);
                      }), 128))
                    ], 64);
                  }), 128))
                ]))
              ], 64))
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), {
            collapse: "fade",
            class: "ion-no-border"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        id: "cbtn",
                        class: "",
                        color: "primary",
                        fill: "solid",
                        style: { "float": "right", "margin-left": "50px" },
                        onClick: _cache[0] || (_cache[0] = ($event) => printVisitSummary())
                      }, {
                        default: withCtx(() => [..._cache[6] || (_cache[6] = [
                          createTextVNode(" Print Visit Summary ", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(unref(IonButton), {
                        id: "cbtn",
                        class: "",
                        color: "danger",
                        fill: "solid",
                        style: { "float": "right", "margin-left": "50px" },
                        onClick: _cache[1] || (_cache[1] = ($event) => closeVisitRedirection(unref(patient)))
                      }, {
                        default: withCtx(() => [..._cache[7] || (_cache[7] = [
                          createTextVNode(" Close visit ", -1)
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
          createVNode(unref(IonFooter))
        ]),
        _: 1
      });
    };
  }
});

const NCDMedicationDispenstion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b1bfa0c3"]]);

export { NCDMedicationDispenstion as default };
