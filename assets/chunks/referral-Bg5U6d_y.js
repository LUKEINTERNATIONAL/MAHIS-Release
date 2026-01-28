import { s as defineComponent, bF as IonModal, a7 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cE as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bK as IonCard, N as IonButton, aC as IonToolbar, aD as IonTitle, bt as IonPage, cv as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bX as chevronBackOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-BIA1Qh8a.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-_NnWjm-x.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-Dy9Id4fM.js';
import { D as DemographicBar } from './DemographicBar-CZiWWc-Y.js';
import { S as SaveProgressModal } from './SaveProgressModal-CnKErHt5.js';
import { S as Stepper, n as useLabourReferralStore } from './Stepper-CJx3RJGl.js';
import { m as mapState } from './pinia-BgytB2RM.js';
import { c as formatRadioButtonData, b as formatCheckBoxData, f as formatInputFiledData } from './formatServerData-C_8B-846.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-b5pnTnkh.js';

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
