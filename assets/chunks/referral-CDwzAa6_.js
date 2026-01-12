import { D as DemographicBar } from './DemographicBar-D1BFG01T.js';
import { S as Stepper } from './Stepper-DV5Pue8z.js';
import { q as defineComponent, aA as IonToolbar, aB as IonTitle, aC as IonMenu, br as IonPage, I as IonHeader, H as IonContent, b8 as checkmark, bW as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-BPW-J91F.js';
import { aY as AppEncounterService, T as Toolbar, t as toastWarning, K as ObservationService, S as Service, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, _ as _export_sfc } from '../index-BlgLb150.js';
import { b as _sfc_main$1 } from './NextAppointment-CBADKtLK.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-DnsfyZNJ.js';

class ReferralService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "Home",
  mixins: [_sfc_main$1, _sfc_main$2],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    Toolbar,
    DemographicBar,
    IonMenu,
    IonTitle,
    IonToolbar,
    Stepper
  },
  data() {
    return {
      wizardData: [
        {
          title: "Referral",
          class: "common_step",
          checked: "",
          disabled: false,
          number: 1,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "Referral",
          value: "1"
        }
      ]
    };
  },
  setup() {
    return { chevronBackOutline, checkmark };
  },
  computed: {
    patient() {
      return useDemographicsStore().patient;
    }
  },
  methods: {
    markWizard() {
    },
    getSaveFunction() {
      return null;
    },
    getReferralComponent() {
      const stepper = this.$refs.stepper;
      return stepper?.stepRefs?.get(0);
    },
    async saveData() {
      const referralComponent = this.getReferralComponent();
      const validationErrors = referralComponent?.validateForm?.();
      if (validationErrors) {
        toastWarning("Please correct the highlighted errors before saving.");
        return;
      }
      const values = referralComponent?.getFormValues?.() || {};
      const obsPayload = await ObservationService.buildObsValues(values);
      if (!obsPayload || obsPayload.length === 0) {
        return toastWarning("No referral data to save");
      }
      const userID = Service.getUserID();
      const referral = new ReferralService(this.patient.patientID, userID);
      const encounter = await referral.createEncounter();
      if (!encounter) return toastWarning("Unable to create referral encounter");
      const patientStatus = await referral.saveObservationList(obsPayload);
      if (!patientStatus) return toastWarning("Unable to create patient referral details!");
      toastSuccess("Referral details have been created");
      await resetPatientData();
      this.$router.push("ANCHome");
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DemographicBar = resolveComponent("DemographicBar");
  const _component_Stepper = resolveComponent("Stepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_DemographicBar),
          createVNode(_component_Stepper, {
            ref: "stepper",
            "stepper-title": "Lab test and imaging",
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
      })
    ]),
    _: 1
  });
}
const referral = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { referral as default };
