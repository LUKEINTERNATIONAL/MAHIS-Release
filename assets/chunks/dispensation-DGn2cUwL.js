import { q as defineComponent, dE as IonLoading, bD as IonModal, a7 as IonLabel, an as IonItem, aE as IonAccordionGroup, aD as IonAccordion, b6 as IonCardTitle, cC as IonCardSubtitle, b7 as IonCardHeader, b9 as IonCardContent, bI as IonCard, N as IonButton, aA as IonToolbar, aB as IonTitle, br as IonPage, ct as IonMenuButton, I as IonHeader, H as IonContent, aH as useRouter, r as ref, b8 as checkmark, bW as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, x as createElementBlock, G as createCommentVNode, z as createVNode, B as createBaseVNode } from './vendor-BPW-J91F.js';
import { a3 as ToolbarSearch, T as Toolbar, r as closeVisit, v as usePatientList, S as Service, G as toastSuccess, n as icons, u as useDemographicsStore, x as toastDanger, _ as _export_sfc } from '../index-Bc-TK-yC.js';
import { D as DemographicBar } from './DemographicBar-D5ts8nob.js';
import { m as mapState } from './pinia-D-q2_lrU.js';
import { S as Stepper, u as useDispensationStore } from './Stepper-DwEMqBya.js';
import { O as OPDPrintingModal } from './OPDPrintingModal-DXzzAAGG.js';
import { u as usePatientProfile } from './usePatientProfile-B0PrvE6i.js';

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
          router.push("home");
        }, 3500);
      } catch (error) {
        toastDanger("Failed to print consultation summary.");
      } finally {
        isLoadingPrinter.value = false;
      }
    };
    const printNo = () => {
      toastSuccess("Patient has finished consultation!");
      router.push("home");
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
      this.$router.push("/pharmacy");
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
