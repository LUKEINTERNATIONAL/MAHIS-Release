import { q as defineComponent, bD as IonModal, a7 as IonLabel, an as IonItem, aE as IonAccordionGroup, aD as IonAccordion, b6 as IonCardTitle, cC as IonCardSubtitle, b7 as IonCardHeader, b9 as IonCardContent, bI as IonCard, N as IonButton, aA as IonToolbar, aB as IonTitle, br as IonPage, ct as IonMenuButton, I as IonHeader, H as IonContent, b8 as checkmark, bW as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-BPW-J91F.js';
import { B as BasicFooter } from './BasicFooter-CoB-16OL.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-D7kYL7Nj.js';
import { D as DemographicBar } from './DemographicBar-CaP1BGhI.js';
import { S as SaveProgressModal } from './SaveProgressModal-6H6JvMl1.js';
import { S as Stepper, I as useBabyStatusStore } from './Stepper-Dkv7ToZD.js';
import { m as mapState } from './pinia-D-q2_lrU.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-RCytnvZ0.js';
import { b as _sfc_main$1 } from './NextAppointment-ilJnOKo2.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-Dxt3puP0.js';

class BabyMonitoringService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "postnatalBabyStatus",
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
          title: "Baby status",
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
          title: "Postnatal status of the baby",
          component: "BabyStatus",
          value: "1"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  watch: {},
  getFormatedData(data) {
    return data.map((item) => {
      return item?.data;
    });
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useBabyStatusStore, ["babyStatusDetails"])
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
      await this.saveBabyMonitoring();
      await resetPatientData();
      this.$router.push("home");
    },
    async saveBabyMonitoring() {
      if (this.babyStatusDetails.length > 0) {
        const userID = Service.getUserID();
        const babyStatusDetails = new BabyMonitoringService(this.patient.patientID, userID);
        const encounter = await babyStatusDetails.createEncounter();
        if (!encounter) return toastWarning("Unable to create baby monitoring details encounter");
        const patientStatus = await babyStatusDetails.saveObservationList(await this.buildBabyMonitoring());
        if (!patientStatus) return toastWarning("Unable to create patient routine monitoring details for baby!");
        toastSuccess("Postnatal ward monitoring details for baby have been created");
      }
      console.log(await this.buildBabyMonitoring());
    },
    async buildBabyMonitoring() {
      return [
        ...await formatCheckBoxData(this.babyStatusDetails),
        ...await formatRadioButtonData(this.babyStatusDetails),
        ...await formatInputFiledData(this.babyStatusDetails)
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
            stepperTitle: "Postnatal ward stay",
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
const postnatalBabyStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { postnatalBabyStatus as default };
