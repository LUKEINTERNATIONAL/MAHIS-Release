import { v as defineComponent, dH as IonLoading, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, aK as useRouter, bb as checkmark, bY as chevronBackOutline, f as ref, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, A as createElementBlock, B as createVNode, D as createBaseVNode, J as createCommentVNode } from './vendor-Cbv9TWZo.js';
import { a3 as ToolbarSearch, T as Toolbar, r as closeVisit, v as usePatientList, S as Service, G as toastSuccess, n as icons, u as useDemographicsStore, x as toastDanger, _ as _export_sfc } from '../index-h_ZjCz7k.js';
import { D as DemographicBar } from './DemographicBar-Bg981Mbl.js';
import { d as defineStore, m as mapState } from './pinia-C6LE2xz6.js';
import { S as Stepper } from './Stepper-Ct5IOiOl.js';
import { O as OPDPrintingModal } from './OPDPrintingModal-DRbInsD4.js';
import { u as usePatientProfile } from './usePatientProfile-D4zbtie-.js';

const useDispensationStore = defineStore("dispensation", {
  state: () => ({
    drugPrescriptions: [],
    dispensedMedication: [],
    payload: {},
    saveInitiated: false,
    StepperData: [
      {
        title: "Dispense Medications",
        component: "dispensedMedication",
        value: "1"
      }
    ]
  }),
  actions: {
    resetStore() {
      this.drugPrescriptions = [];
      this.dispensedMedication = [];
      this.payload = {};
      this.saveInitiated = false;
    },
    editDispensations() {
      this.toggleStepperData();
    },
    getStepperData() {
      return this.StepperData;
    },
    toggleStepperData() {
      if (this.StepperData[0].component == "dispensedMedication") {
        this.StepperData.splice(0, 1, {
          title: "Dispensation Summary",
          component: "dispensationSummary",
          value: "1"
        });
      } else {
        this.StepperData.splice(0, 1, {
          title: "Dispense Medications",
          component: "dispensedMedication",
          value: "1"
        });
      }
    },
    isSaveInitiated(bool) {
      this.saveInitiated = bool;
    },
    validateInputs() {
      if (this.saveInitiated == false) {
        return false;
      }
      let isThereAnError = false;
      console.log("Validating drugPrescriptions:", this.drugPrescriptions);
      this.drugPrescriptions.forEach((Element, index) => {
        if (!Element.other) {
          console.error(`Item ${index}: Element.other is undefined.`);
          Element.other = { quantity: 0 };
          isThereAnError = true;
        }
        const quantity = Number(Element.other.quantity);
        console.log(`Item ${index}: Quantity = ${quantity}, Reason = ${Element.reason}, isSelected = ${Element.isSelected}`);
        if (!Element.isSelected) {
          if (Element.reason === "") {
            Element.showValidation = true;
            isThereAnError = true;
          } else {
            Element.showValidation = false;
          }
        } else {
          if (quantity <= 0) {
            Element.showValidation = true;
            isThereAnError = true;
          } else {
            Element.showValidation = false;
          }
        }
      });
      return isThereAnError;
    },
    initializeDispensedAmount() {
      this.drugPrescriptions.forEach((Element) => {
        if (!Element.other) {
          Element.other = { quantity: 0 };
        }
        Element.other.quantity = 0;
      });
    },
    initializeValidationsBoolean() {
      this.drugPrescriptions.forEach((Element) => {
        Element.showValidation = false;
      });
    },
    initializeReasonParameter() {
      this.drugPrescriptions.forEach((Element) => {
        Element.reason = "";
      });
    },
    getValidation(index) {
      return this.drugPrescriptions[index].showValidation;
    },
    setReason(reason, index) {
      this.drugPrescriptions[index].reason = reason;
    },
    setDrugPrescriptions(prescriptions) {
      this.drugPrescriptions = prescriptions;
    },
    getDrugPrescriptions() {
      return this.drugPrescriptions;
    },
    updateCheckboxBool(selected, index) {
      if (!this.drugPrescriptions[index].other) {
        this.drugPrescriptions[index].other = { quantity: 0 };
      }
      this.drugPrescriptions[index].isSelected = selected;
      if (!selected) {
        this.drugPrescriptions[index].other.quantity = 0;
        this.drugPrescriptions[index].reason = "";
      }
    },
    getCheckedBool(index) {
      return this.drugPrescriptions[index].isSelected;
    },
    getReason(index) {
      return this.drugPrescriptions[index].reason;
    },
    getDispensedMedications() {
      return this.dispensedMedication;
    },
    addQuantity(quantity, index) {
      if (!this.drugPrescriptions[index].other) {
        this.drugPrescriptions[index].other = { quantity: 0 };
      }
      this.drugPrescriptions[index].other.quantity = Number(quantity);
    },
    saveDispensedMedications() {
      this.dispensedMedication = this.drugPrescriptions;
    },
    setDispensedMedicationsPayload() {
      const payloadObject = {
        dispensations: [],
        program_id: 14
      };
      const dispensedDrugsWithDetailsArray = [];
      this.dispensedMedication.forEach((Element) => {
        const dispensedDrugsDetailsObject = {
          drug_order_id: null,
          quantity: null,
          date: null
        };
        dispensedDrugsDetailsObject.drug_order_id = Element.other.order_id;
        dispensedDrugsDetailsObject.quantity = Element.other.quantity;
        dispensedDrugsDetailsObject.date = Element.prescription;
        dispensedDrugsWithDetailsArray.push(dispensedDrugsDetailsObject);
      });
      payloadObject.dispensations = dispensedDrugsWithDetailsArray;
      this.payload = payloadObject;
    },
    getDispensedMedicationsPayload() {
      return this.payload;
    }
  }
});

const _sfc_main = defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    DemographicBar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonModal,
    Stepper,
    OPDPrintingModal,
    IonLoading
  },
  computed: {
    ...mapState(useDispensationStore, ["StepperData"]),
    ...mapState(useDemographicsStore, ["patient"])
  },
  setup() {
    const router = useRouter();
    const { printVisitSummary } = usePatientProfile();
    const printModalOpen = ref(false);
    const isLoadingPrinter = ref(false);
    const togglePrintModal = () => {
      printModalOpen.value = !printModalOpen.value;
    };
    const printYes = async () => {
      isLoadingPrinter.value = true;
      try {
        await printVisitSummary();
        toastSuccess("Consultation summary printed successfully!");
        setTimeout(() => {
          router.push("/home");
        }, 3500);
      } catch (error) {
        toastDanger("Failed to print consultation summary.");
      } finally {
        isLoadingPrinter.value = false;
      }
    };
    const printNo = () => {
      toastSuccess("Patient has finished consultation!");
      router.push("/home");
    };
    return {
      chevronBackOutline,
      checkmark,
      printModalOpen,
      togglePrintModal,
      printNo,
      printYes,
      isLoadingPrinter
    };
  },
  data() {
    return {
      checkedIn: false,
      outcomes: "",
      showUndispensedMedication: false,
      wizardData: [
        {
          title: "Dispensation",
          class: "common_step",
          checked: false,
          disabled: false,
          number: 1,
          last_step: "last_step"
        }
      ],
      isOpen: false,
      iconsContent: icons,
      isLoading: false
    };
  },
  mounted() {
    this.markWizard();
  },
  watch: {
    vitals: {
      handler() {
        this.markWizard();
      },
      deep: true
    },
    investigations: {
      handler() {
        this.markWizard();
      },
      deep: true
    },
    diagnosis: {
      handler() {
        this.markWizard();
      },
      deep: true
    },
    selectedMedicalDrugsList: {
      handler() {
        this.markWizard();
      }
    }
  },
  methods: {
    markWizard() {
    },
    async getSaveFunction() {
      try {
        await closeVisit(this.patient);
        await usePatientList().refresh(Service.getUserLocationId());
        this.checkedIn = false;
        toastSuccess("The patient's visit is now closed");
      } catch (e) {
        console.error(e);
      }
      this.togglePrintModal();
    },
    saveData() {
      this.$router.push("/opd/pharmacy");
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_loading = resolveComponent("ion-loading");
  const _component_OPDPrintingModal = resolveComponent("OPDPrintingModal");
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DemographicBar = resolveComponent("DemographicBar");
  const _component_Stepper = resolveComponent("Stepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_spinner, { name: "bubbles" }),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
      ])) : createCommentVNode("", true),
      createVNode(_component_ion_loading, {
        "is-open": _ctx.isLoadingPrinter,
        message: "Printing consultation summary...",
        spinner: "circles"
      }, null, 8, ["is-open"]),
      createVNode(_component_OPDPrintingModal, {
        onYes: _ctx.printYes,
        onNo: _ctx.printNo,
        isOpen: _ctx.printModalOpen,
        title: `Do you want to print the consultation summary?`
      }, null, 8, ["onYes", "onNo", "isOpen"]),
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_DemographicBar),
          createVNode(_component_Stepper, {
            stepperTitle: "Dispensation",
            wizardData: _ctx.wizardData,
            onUpdateStatus: _ctx.markWizard,
            onFinishBtn: _cache[0] || (_cache[0] = ($event) => _ctx.saveData()),
            StepperData: _ctx.StepperData,
            getSaveFunction: _ctx.getSaveFunction,
            showSteeper: 2
          }, null, 8, ["wizardData", "onUpdateStatus", "StepperData", "getSaveFunction"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const dispensation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { dispensation as default };
