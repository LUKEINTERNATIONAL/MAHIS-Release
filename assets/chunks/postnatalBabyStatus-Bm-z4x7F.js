import { q as defineComponent, bC as IonModal, a7 as IonLabel, an as IonItem, aC as IonAccordionGroup, aB as IonAccordion, b4 as IonCardTitle, cB as IonCardSubtitle, b5 as IonCardHeader, b7 as IonCardContent, bH as IonCard, N as IonButton, ay as IonToolbar, az as IonTitle, bq as IonPage, cs as IonMenuButton, I as IonHeader, H as IonContent, b6 as checkmark, bV as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-BK8x96Ok.js';
import { B as BasicFooter } from './BasicFooter-zbzGOX17.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-dAcYVh-O.js';
import { D as DemographicBar } from './DemographicBar-FFuj6893.js';
import { S as SaveProgressModal } from './SaveProgressModal-ByT-Guwg.js';
import { S as Stepper, I as useBabyStatusStore } from './Stepper-CU5tZBf4.js';
import { m as mapState } from './pinia-C47my0-I.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-CXoc4Jua.js';
import { b as _sfc_main$1 } from './NextAppointment-BdU3gg65.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-XZRIFKKc.js';

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
