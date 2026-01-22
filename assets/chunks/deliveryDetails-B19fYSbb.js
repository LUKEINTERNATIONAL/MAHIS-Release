import { v as defineComponent, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bY as chevronBackOutline, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode } from './vendor-Cbv9TWZo.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-CgDb6MuC.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-BHF9kXfk.js';
import { D as DemographicBar } from './DemographicBar-C3IpSOw2.js';
import { S as SaveProgressModal } from './SaveProgressModal-CR7cEsym.js';
import { S as Stepper, q as useSecondStageOfLabourStore, r as useThirdStageOfLabourStore } from './Stepper-Cz4aUDc3.js';
import { m as mapState } from './pinia-C6LE2xz6.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-CUezW8A0.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-Nf6058eD.js';

class SecondStageDeliveryService extends AppEncounterService {
  appEncounterServiceInstance;
  constructor(patientID, providerID) {
    super(patientID, 6, providerID);
    this.appEncounterServiceInstance = this;
  }
}

const _sfc_main = defineComponent({
  name: "deliveryDetails",
  mixins: [_sfc_main$1, _sfc_main$2],
  components: {
    BasicFooter,
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
    Stepper
  },
  data() {
    return {
      wizardData: [
        {
          title: "Second stage of labour",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "Third stage of labour",
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
          title: "Second stage of labour",
          component: "SecondStageDelivery",
          value: "1"
        },
        {
          title: "Third stage of labour",
          component: "ThirdStageDelivery",
          value: "2"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  watch: {},
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useThirdStageOfLabourStore, ["placentaExamination"]),
    ...mapState(useSecondStageOfLabourStore, ["secondStageDetails", "newbornComplications", "obstetricComplications"])
  },
  mounted() {
    this.markWizard();
  },
  getFormatedData(data) {
    return data.map((item) => {
      return item?.data;
    });
  },
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
    async saveData() {
      await this.saveSecondStageLabour();
      toastSuccess("Delivery details data saved successfully");
      await resetPatientData();
      this.$router.push("/labour/labourHome");
    },
    async saveSecondStageLabour() {
      if (this.secondStageDetails.length > 0 && this.newbornComplications.length > 0 && this.obstetricComplications.length > 0 && this.obstetricComplications.length > 0) {
        const userID = Service.getUserID();
        const secondStageDelivery = new SecondStageDeliveryService(this.patient.patientID, userID);
        const encounter = await secondStageDelivery.createEncounter();
        if (!encounter) return toastWarning("Unable to create Second stage and Third stage of labour encounter");
        const patientStatus = await secondStageDelivery.saveObservationList(await this.buildSecondStageOfLabour());
        if (!patientStatus) return toastWarning("Unable to create patient second stage and third stage of labour details!");
        toastSuccess("Second stage and Third stage  of labour  details have been created");
      }
      console.log(await this.buildSecondStageOfLabour());
    },
    async buildSecondStageOfLabour() {
      return [
        ...await formatCheckBoxData(this.secondStageDetails),
        ...await formatRadioButtonData(this.secondStageDetails),
        ...await formatInputFiledData(this.secondStageDetails),
        ...await formatCheckBoxData(this.obstetricComplications),
        ...await formatRadioButtonData(this.obstetricComplications),
        ...await formatInputFiledData(this.obstetricComplications),
        ...await formatCheckBoxData(this.newbornComplications),
        ...await formatRadioButtonData(this.newbornComplications),
        ...await formatInputFiledData(this.newbornComplications),
        ...await formatCheckBoxData(this.placentaExamination),
        ...await formatRadioButtonData(this.placentaExamination),
        ...await formatInputFiledData(this.placentaExamination)
      ];
    },
    openModal() {
      createModal(SaveProgressModal);
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
            stepperTitle: "Delivery details",
            wizardData: _ctx.wizardData,
            onUpdateStatus: _ctx.markWizard,
            StepperData: _ctx.StepperData,
            backUrl: _ctx.userRoleSettings.url,
            backBtn: _ctx.userRoleSettings.btnName,
            getSaveFunction: _ctx.getSaveFunction
          }, null, 8, ["wizardData", "onUpdateStatus", "StepperData", "backUrl", "backBtn", "getSaveFunction"])
        ]),
        _: 1
      }),
      createVNode(_component_BasicFooter, {
        onFinishBtn: _cache[0] || (_cache[0] = ($event) => _ctx.saveData())
      })
    ]),
    _: 1
  });
}
const deliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { deliveryDetails as default };
