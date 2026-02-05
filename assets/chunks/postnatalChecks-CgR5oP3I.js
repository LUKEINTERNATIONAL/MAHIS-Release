import { s as defineComponent, bF as IonModal, a7 as IonLabel, aq as IonItem, aI as IonAccordionGroup, aH as IonAccordion, ba as IonCardTitle, cD as IonCardSubtitle, bb as IonCardHeader, bd as IonCardContent, bK as IonCard, N as IonButton, aD as IonToolbar, aE as IonTitle, bu as IonPage, cu as IonMenuButton, I as IonHeader, aG as IonContent, bc as checkmark, bX as chevronBackOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-CCA5uLDN.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-13dUUajC.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-CA5gZ8gz.js';
import { D as DemographicBar } from './DemographicBar-I_gEcSAk.js';
import { S as SaveProgressModal } from './SaveProgressModal-C5167ehk.js';
import { S as Stepper, a as useImmediatePostnatalChecksForMotherStore, b as useImmediatePostnatalChecksForChildStore } from './Stepper-DoF6CHvb.js';
import { m as mapState } from './pinia-D-2CL6iz.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-CxaOxJBR.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-MEMNMrOJ.js';

class ImmediatePostnatalChecksForChildService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "postnatalChecks",
  mixins: [_sfc_main$1, _sfc_main$2],
  components: {
    IonContent,
    BasicFooter,
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
    Stepper
  },
  data() {
    return {
      wizardData: [
        {
          title: "For mother",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "For child",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 2,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "Immediate postnatal check for mother",
          component: "ImmidiatePostnatalChecksForMother",
          value: "1"
        },
        {
          title: "Immediate postnatal check for child",
          component: "ImmidiatePostnatalChecksForChild",
          value: "2"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useImmediatePostnatalChecksForChildStore, ["examsAfterDeliveryForChild"]),
    ...mapState(useImmediatePostnatalChecksForMotherStore, ["examsAfterDelivery"])
  },
  mounted() {
    this.markWizard();
  },
  watch: {},
  setup() {
    return { chevronBackOutline, checkmark };
  },
  methods: {
    markWizard() {
    },
    getSaveFunction() {
    },
    deleteDisplayData(data) {
      return data.map((item) => {
        delete item?.display;
        return item?.data;
      });
    },
    getFormatedData(data) {
      return data.map((item) => {
        return item?.data[0] || item?.data;
      });
    },
    async saveData() {
      await this.savePostnatalChecks();
      toastSuccess("Immediate postnatal checks data saved successfully");
      await resetPatientData();
    },
    async savePostnatalChecks() {
      if (this.examsAfterDeliveryForChild.length > 0 && this.examsAfterDelivery.length > 0) {
        const userID = Service.getUserID();
        const examsAfterDelivery = new ImmediatePostnatalChecksForChildService(this.patient.patientID, userID);
        const encounter = await examsAfterDelivery.createEncounter();
        if (!encounter) return toastWarning("Unable to create immediate checks for mother and child encounter");
        const patientStatus = await examsAfterDelivery.saveObservationList(await this.buildPostnatalChecks());
        if (!patientStatus) return toastWarning("Unable to create immediate checks for mother and child  !");
        toastSuccess("Immediate checks after delivery for mother and child have been created");
      }
      console.log(await this.buildPostnatalChecks());
    },
    openModal() {
      createModal(SaveProgressModal);
    },
    async buildPostnatalChecks() {
      return [
        ...await formatCheckBoxData(this.examsAfterDeliveryForChild),
        ...await formatRadioButtonData(this.examsAfterDeliveryForChild),
        ...await formatInputFiledData(this.examsAfterDeliveryForChild),
        ...await formatCheckBoxData(this.examsAfterDelivery),
        ...await formatRadioButtonData(this.examsAfterDelivery),
        ...await formatInputFiledData(this.examsAfterDelivery)
      ];
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DemographicBar = resolveComponent("DemographicBar");
  const _component_Stepper = resolveComponent("Stepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_BasicFooter = resolveComponent("BasicFooter");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_DemographicBar),
          createVNode(_component_Stepper, {
            stepperTitle: "Immediate postnatal checks",
            wizardData: _ctx.wizardData,
            onUpdateStatus: _ctx.markWizard,
            onFinishBtn: _cache[0] || (_cache[0] = ($event) => _ctx.saveData()),
            StepperData: _ctx.StepperData,
            backUrl: _ctx.userRoleSettings.url,
            backBtn: _ctx.userRoleSettings.btnName,
            getSaveFunction: _ctx.getSaveFunction
          }, null, 8, ["wizardData", "onUpdateStatus", "StepperData", "backUrl", "backBtn", "getSaveFunction"])
        ]),
        _: 1
      }),
      createVNode(_component_BasicFooter, {
        onFinishBtn: _cache[1] || (_cache[1] = ($event) => _ctx.saveData())
      })
    ]),
    _: 1
  });
}
const postnatalChecks = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { postnatalChecks as default };
