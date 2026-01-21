import { v as defineComponent, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bY as chevronBackOutline, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode } from './vendor-CJ5LqAxe.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-DzmP6wlr.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-BBSKuWmW.js';
import { D as DemographicBar } from './DemographicBar-D2w1-IKa.js';
import { S as SaveProgressModal } from './SaveProgressModal-Cl5cEVQX.js';
import { S as Stepper, p as useLabourReferralStore } from './Stepper-rT_E0VOq.js';
import { m as mapState } from './pinia-BmV_6_tV.js';
import { c as formatRadioButtonData, b as formatCheckBoxData, f as formatInputFiledData } from './formatServerData-BXXyX11U.js';
import { a as _sfc_main$1 } from './Investigations-CAi-RicT.js';

class ReferralService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 114, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "referral",
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
          title: "Referral",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "Referral",
          component: "PatientReferral",
          value: "1"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useLabourReferralStore, ["labourReferral"])
  },
  mounted() {
    this.markWizard();
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
      this.saveReferal();
      toastSuccess("Patient referral saved successfully");
      await resetPatientData();
    },
    async saveReferal() {
      if (this.labourReferral.length > 0) {
        const userID = Service.getUserID();
        const Referal = new ReferralService(this.patient.patientID, userID);
        const encounter = await Referal.createEncounter();
        if (!encounter) return toastWarning("Unable to create Referal encounter");
        const patientStatus = await Referal.saveObservationList(await this.buildReferal());
        if (!patientStatus) return toastWarning("Unable to create Referal !");
        toastSuccess("Referal has been created");
      }
      console.log(await this.buildReferal());
    },
    async buildReferal() {
      return [
        ...await formatRadioButtonData(this.labourReferral),
        ...await formatCheckBoxData(this.labourReferral),
        ...await formatInputFiledData(this.labourReferral)
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
            stepperTitle: "Patient Referral",
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
const referral = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { referral as default };
