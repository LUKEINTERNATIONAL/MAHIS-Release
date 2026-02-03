import { s as defineComponent, L as IonIcon, N as IonButton, aA as IonCol, af as IonRow, aE as IonTitle, bu as IonPage, bf as IonFooter, I as IonHeader, aG as IonContent, ag as close, ch as medkit, K as modalController, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, C as createBaseVNode, D as toDisplayString, a5 as createTextVNode, J as Fragment, aL as useRouter, ct as useRoute, cj as onBeforeUnmount, w as watch, a2 as onMounted, O as createBlock, F as unref, Q as alertCircleOutline, R as renderList, bK as IonCard, bd as IonCardContent, a6 as IonInput, a4 as normalizeClass, H as createCommentVNode, dn as checkmarkDoneCircleOutline, bx as eye, bb as IonCardHeader, ba as IonCardTitle, f as ref } from './vendor-D523m2MA.js';
import { s as storeToRefs } from './pinia-BZkYQmJa.js';
import { E as EIRreportsStore } from './EIRreportsStore-D7D4qIKZ.js';
import { N as NavigationMenu } from './NavigationMenu-PJ8TlU4J.js';
import { V as ViewToggleComponent } from './ViewToggleComponent-D6IrTYrg.js';
import { n as icons, _ as _export_sfc, aY as AppEncounterService, P as PatientService, S as Service, u as useDemographicsStore, J as savePatientRecord, G as toastSuccess, bW as toastDanger, bH as DrugOrderService, e as useGeneralStore, v as usePatientList, aM as PrintoutService, r as closeVisit, k as alertConfirmation, x as toastDanger$1, o as createModal, bX as checkLiveAPIStatus, g as getPouchDBRecords } from '../index-6cYhgLOM.js';
import { a as DRUG_FREQUENCIES } from './drug_prescription_service-CjCYTlbL.js';

const _sfc_main$1 = defineComponent({
  name: "MedicationDetailsModal",
  components: {
    IonContent,
    IonHeader,
    IonFooter,
    IonPage,
    IonTitle,
    IonRow,
    IonCol,
    IonButton,
    IonIcon
  },
  props: {
    selectedMedication: {
      type: Object,
      default: null
    }
  },
  data() {
    const dismiss = () => {
      this.$emit("close");
      return modalController.dismiss();
    };
    return {
      iconsContent: icons,
      medkit,
      closeIcon: close,
      dismiss
    };
  },
  methods: {
    formatFullDate(dateString) {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    },
    getFrequencyLabel(code) {
      const frequency = DRUG_FREQUENCIES.find((f) => f.code === code);
      return frequency ? frequency.label : "Unknown";
    }
  }
});

const _hoisted_1$1 = { class: "medication-details-header" };
const _hoisted_2$1 = { class: "modal_wrapper" };
const _hoisted_3$1 = { class: "medication-details-modal" };
const _hoisted_4$1 = { class: "text-xl font-bold mb-4" };
const _hoisted_5$1 = { class: "grid grid-cols-2 gap-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_header = resolveComponent("ion-header");
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
            createBaseVNode("div", _hoisted_1$1, [
              createVNode(_component_ion_icon, {
                icon: _ctx.medkit,
                class: "ion-margin-end"
              }, null, 8, ["icon"]),
              _cache[1] || (_cache[1] = createBaseVNode("span", null, "Medication Details", -1))
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
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("h2", _hoisted_4$1, toDisplayString(_ctx.selectedMedication.drug.name), 1),
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", null, [
                _cache[2] || (_cache[2] = createBaseVNode("strong", null, "Order ID:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.selectedMedication.order_id), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Drug ID:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.selectedMedication.drug_inventory_id), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[4] || (_cache[4] = createBaseVNode("strong", null, "Dose:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.selectedMedication.dose) + " " + toDisplayString(_ctx.selectedMedication.units), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[5] || (_cache[5] = createBaseVNode("strong", null, "Equivalent Daily Dose:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.selectedMedication.equivalent_daily_dose), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[6] || (_cache[6] = createBaseVNode("strong", null, "Frequency:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.getFrequencyLabel(_ctx.selectedMedication.frequency)), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[7] || (_cache[7] = createBaseVNode("strong", null, "Order Type:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.selectedMedication.order.order_type_id), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[8] || (_cache[8] = createBaseVNode("strong", null, "Start Date:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.formatFullDate(_ctx.selectedMedication.order.start_date)), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[9] || (_cache[9] = createBaseVNode("strong", null, "Date Created:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.formatFullDate(_ctx.selectedMedication.order.date_created)), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[10] || (_cache[10] = createBaseVNode("strong", null, "Orderer:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.selectedMedication.order.orderer), 1)
              ]),
              createBaseVNode("div", null, [
                _cache[11] || (_cache[11] = createBaseVNode("strong", null, "Instructions:", -1)),
                createTextVNode(" " + toDisplayString(_ctx.selectedMedication.order.instructions), 1)
              ])
            ])
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
                  onClick: _ctx.dismiss,
                  color: "primary",
                  style: { "float": "right", "margin-bottom": "20px", "margin-right": "20px" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_icon, {
                      icon: _ctx.closeIcon,
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[12] || (_cache[12] = createTextVNode(" Close ", -1))
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
const MedicationDetailsModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-01db984e"]]);

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
  style: { "margin": "20px" },
  class: "flex flex-col items-center justify-center p-8"
};
const _hoisted_2 = {
  key: 1,
  class: "p-4",
  style: { "margin-left": "10px", "margin-right": "10px" }
};
const _hoisted_3 = { class: "text-xl font-bold mb-4 program-name" };
const _hoisted_4 = { class: "overflow-x-auto" };
const _hoisted_5 = { class: "w-full" };
const _hoisted_6 = { class: "p-3" };
const _hoisted_7 = { class: "p-3" };
const _hoisted_8 = { class: "flex items-center" };
const _hoisted_9 = { class: "p-3" };
const _hoisted_10 = { class: "p-3" };
const _hoisted_11 = { class: "p-3" };
const _hoisted_12 = { class: "flex items-center space-x-2" };
const _hoisted_13 = {
  key: 0,
  class: "error-text text-sm"
};
const _hoisted_14 = { class: "p-3" };
const _hoisted_15 = { class: "flex space-x-2" };
const _hoisted_16 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_17 = {
  key: 2,
  class: "p-4",
  style: { "margin-left": "10px", "margin-right": "10px" }
};
const _hoisted_18 = { class: "text-xl font-bold mb-4 program-name" };
const _hoisted_19 = {
  class: "text-lg font-bold mb-2",
  style: { "margin-left": "10px", "margin-right": "10px" }
};
const _hoisted_20 = {
  class: "text-md font-medium",
  style: { "margin-left": "10px", "margin-right": "10px" }
};
const _hoisted_21 = { class: "medication-details" };
const _hoisted_22 = { class: "flex justify-between mb-3" };
const _hoisted_23 = { class: "flex items-center" };
const _hoisted_24 = { class: "flex items-center mb-3" };
const _hoisted_25 = {
  key: 0,
  class: "error-text"
};
const _hoisted_26 = {
  class: "mt-3 flex space-x-2",
  style: { "margin-top": "10px" }
};
const _hoisted_27 = {
  key: 0,
  class: "text-center mb-8"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NCDMedicationDispenstion",
  setup(__props) {
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
    const selectedMedication = ref(null);
    const isDispensing = ref(false);
    const tempInputValues = ref({});
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
    const setAmountAsPrescribed = (medication) => {
      medication.amountToDispense = medication.dose;
      validateAmount(medication);
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
    const viewDetails = async (medication) => {
      selectedMedication.value = medication;
      await createModal(MedicationDetailsModal, { class: "large-modal" }, true, { selectedMedication: selectedMedication.value });
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
            onViewChanged: handleViewChange
          }, null, 8, ["initial-view"]),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              Object.keys(medicationsByProgram.value).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(unref(IonIcon), {
                  icon: unref(alertCircleOutline),
                  size: "large",
                  class: "mb-4 text-gray-500"
                }, null, 8, ["icon"]),
                _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "text-xl font-semibold text-gray-700 mb-2" }, "No Medications to Dispense", -1)),
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-600" }, "There are currently no medications waiting to be dispensed for current Client.", -1))
              ])) : unref(NCDMedicatioTogglePreference).toggle_view === "list" ? (openBlock(), createElementBlock("div", _hoisted_2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(medicationsByProgram.value, (medications2, programName) => {
                  return openBlock(), createElementBlock(Fragment, { key: programName }, [
                    createBaseVNode("h2", _hoisted_3, toDisplayString(programName), 1),
                    createVNode(unref(IonCard), { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4, [
                              createBaseVNode("table", _hoisted_5, [
                                _cache[6] || (_cache[6] = createBaseVNode("thead", null, [
                                  createBaseVNode("tr", { class: "bg-gray-100" }, [
                                    createBaseVNode("th", { class: "p-3 text-left" }, "Date"),
                                    createBaseVNode("th", { class: "p-3 text-left" }, "Medication"),
                                    createBaseVNode("th", { class: "p-3 text-left" }, "Dose"),
                                    createBaseVNode("th", { class: "p-3 text-left" }, "Frequency"),
                                    createBaseVNode("th", { class: "p-3 text-left" }, "Amount to Dispense"),
                                    createBaseVNode("th", { class: "p-3 text-left" }, "Actions")
                                  ])
                                ], -1)),
                                createBaseVNode("tbody", null, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(medications2, (medication) => {
                                    return openBlock(), createElementBlock("tr", {
                                      key: medication?.order_id || medication?.offline_id,
                                      class: "border-b hover:bg-gray-50"
                                    }, [
                                      createBaseVNode("td", _hoisted_6, toDisplayString(formatHeaderDate(medication.start_date)), 1),
                                      createBaseVNode("td", _hoisted_7, [
                                        createBaseVNode("div", _hoisted_8, [
                                          createVNode(unref(IonIcon), {
                                            icon: unref(medkit),
                                            class: "mr-2"
                                          }, null, 8, ["icon"]),
                                          createTextVNode(" " + toDisplayString(medication.drug_name), 1)
                                        ])
                                      ]),
                                      createBaseVNode("td", _hoisted_9, toDisplayString(medication.dose) + " " + toDisplayString(medication.units), 1),
                                      createBaseVNode("td", _hoisted_10, toDisplayString(getFrequencyLabel(medication.frequency)), 1),
                                      createBaseVNode("td", _hoisted_11, [
                                        createBaseVNode("div", _hoisted_12, [
                                          createVNode(unref(IonInput), {
                                            type: "number",
                                            placeholder: "Amount",
                                            modelValue: medication.amountToDispense,
                                            "onUpdate:modelValue": ($event) => medication.amountToDispense = $event,
                                            onInput: ($event) => validateAmount(medication),
                                            class: normalizeClass(["w-24 dose-input bordered-input", medication.error ? "input-error" : ""])
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "class"]),
                                          false ? (openBlock(), createBlock(unref(IonButton), {
                                            key: 0,
                                            size: "small",
                                            color: "light",
                                            onClick: ($event) => setAmountAsPrescribed(medication),
                                            style: { "margin-top": "10px" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(IonIcon), {
                                                icon: unref(clipboardOutline),
                                                size: "small",
                                                class: "mr-1"
                                              }, null, 8, ["icon"]),
                                              _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-green-700" }, "As Prescribed", -1))
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])) : createCommentVNode("", true)
                                        ]),
                                        medication.error ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(medication.error), 1)) : createCommentVNode("", true)
                                      ]),
                                      createBaseVNode("td", _hoisted_14, [
                                        createBaseVNode("div", _hoisted_15, [
                                          createVNode(unref(IonButton), {
                                            color: "primary",
                                            size: "small",
                                            onClick: ($event) => dispenseMedication(medication),
                                            disabled: !medication.amountToDispense || parseFloat(medication.amountToDispense) <= 0 || medication.dispensed
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(IonIcon), {
                                                icon: unref(checkmarkDoneCircleOutline),
                                                class: "mr-1",
                                                style: { "margin-right": "5px" }
                                              }, null, 8, ["icon"]),
                                              createTextVNode(" " + toDisplayString(medication.dispensed ? "Dispensed" : "Dispense"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick", "disabled"]),
                                          createVNode(unref(IonButton), {
                                            color: "secondary",
                                            size: "small",
                                            onClick: ($event) => viewDetails(medication),
                                            style: { "margin-left": "10px" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(IonIcon), {
                                                icon: unref(eye),
                                                class: "mr-1",
                                                style: { "margin-right": "5px" }
                                              }, null, 8, ["icon"]),
                                              _cache[5] || (_cache[5] = createTextVNode(" Details ", -1))
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              medications2.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(alertCircleOutline),
                                  size: "large",
                                  class: "mb-2"
                                }, null, 8, ["icon"]),
                                createBaseVNode("p", null, "No medications prescribed for " + toDisplayString(programName), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ], 64);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(medicationsByProgram.value, (medications2, programName) => {
                  return openBlock(), createElementBlock(Fragment, { key: programName }, [
                    createBaseVNode("h2", _hoisted_18, toDisplayString(programName), 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(groupMedicationsByDate(medications2), (medicationGroup, date) => {
                      return openBlock(), createElementBlock(Fragment, { key: date }, [
                        createBaseVNode("h3", _hoisted_19, toDisplayString(formatHeaderDate(date)), 1),
                        createVNode(unref(IonRow), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonCol), {
                              size: "12",
                              "size-md": "6",
                              "size-lg": "4"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("h3", _hoisted_20, toDisplayString(date), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(IonRow), null, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(medicationGroup, (medication) => {
                              return openBlock(), createBlock(unref(IonCol), {
                                style: { "margin-left": "10px", "margin-right": "10px" },
                                key: medication.order_id,
                                size: "12",
                                "size-md": "6",
                                "size-lg": "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonCard), { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonCardHeader), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(IonCardTitle), { class: "medication-details-header" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(IonIcon), {
                                                icon: unref(medkit),
                                                class: "ion-margin-end"
                                              }, null, 8, ["icon"]),
                                              createBaseVNode("span", null, toDisplayString(medication.drug_name), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(IonCardContent), null, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_21, [
                                            createBaseVNode("div", _hoisted_22, [
                                              createBaseVNode("span", _hoisted_23, toDisplayString(getFrequencyLabel(medication.frequency)) + " (" + toDisplayString(medication.frequency) + ") ", 1)
                                            ]),
                                            createBaseVNode("div", _hoisted_24, [
                                              createVNode(unref(IonInput), {
                                                type: "number",
                                                placeholder: "Amount",
                                                modelValue: medication.amountToDispense,
                                                "onUpdate:modelValue": ($event) => medication.amountToDispense = $event,
                                                onInput: ($event) => validateAmount(medication),
                                                class: normalizeClass(["w-24 dose-input bordered-input", medication.error ? "input-error" : ""])
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "class"]),
                                              false ? (openBlock(), createBlock(unref(IonButton), {
                                                key: 0,
                                                size: "small",
                                                color: "light",
                                                style: { "margin-top": "10px" },
                                                onClick: ($event) => setAmountAsPrescribed(medication)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonIcon), {
                                                    icon: unref(clipboardOutline),
                                                    size: "small",
                                                    style: { "margin-right": "5px" },
                                                    class: "mr-1"
                                                  }, null, 8, ["icon"]),
                                                  _cache[7] || (_cache[7] = createBaseVNode("span", { style: { "color": "darkseagreen" } }, " As Prescribed", -1))
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])) : createCommentVNode("", true)
                                            ]),
                                            medication.error ? (openBlock(), createElementBlock("div", _hoisted_25, toDisplayString(medication.error), 1)) : createCommentVNode("", true),
                                            createBaseVNode("div", _hoisted_26, [
                                              createVNode(unref(IonButton), {
                                                color: "primary",
                                                onClick: ($event) => dispenseMedication(medication),
                                                disabled: !medication.amountToDispense || parseFloat(medication.amountToDispense) <= 0 || medication.dispensed
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonIcon), {
                                                    icon: unref(checkmarkDoneCircleOutline),
                                                    class: "mr-2",
                                                    style: { "margin-right": "5px" }
                                                  }, null, 8, ["icon"]),
                                                  createTextVNode(" " + toDisplayString(medication.dispensed ? "Dispensed" : "Dispense"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick", "disabled"]),
                                              createVNode(unref(IonButton), {
                                                color: "secondary",
                                                style: { "margin-left": "20px" },
                                                onClick: ($event) => viewDetails(medication)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonIcon), {
                                                    icon: unref(eye),
                                                    class: "mr-2",
                                                    style: { "margin-right": "5px" }
                                                  }, null, 8, ["icon"]),
                                                  _cache[8] || (_cache[8] = createTextVNode(" Details ", -1))
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])
                                          ])
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
                          _: 2
                        }, 1024)
                      ], 64);
                    }), 128)),
                    medications2.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
                      createVNode(unref(IonIcon), {
                        icon: unref(alertCircleOutline),
                        size: "large",
                        class: "mb-2"
                      }, null, 8, ["icon"]),
                      createBaseVNode("p", null, "No medications prescribed for " + toDisplayString(programName), 1)
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ]))
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
                        default: withCtx(() => [..._cache[9] || (_cache[9] = [
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
                        default: withCtx(() => [..._cache[10] || (_cache[10] = [
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

const NCDMedicationDispenstion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aae4a83d"]]);

export { NCDMedicationDispenstion as default };
