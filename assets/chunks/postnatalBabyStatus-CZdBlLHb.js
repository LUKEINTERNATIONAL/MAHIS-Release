import { v as defineComponent, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bY as chevronBackOutline, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode } from './vendor-D3hawxEQ.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-BaeVkx8I.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-Bbe_kZm7.js';
import { D as DemographicBar } from './DemographicBar-RN-Xuko3.js';
import { S as SaveProgressModal } from './SaveProgressModal-DpK0NwDx.js';
import { S as Stepper, y as useBabyStatusStore } from './Stepper-Db6jDeFg.js';
import { m as mapState } from './pinia-CMzUCnxi.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-a_nLmORC.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-D_F_wA1m.js';

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
      this.$router.push("/home");
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
