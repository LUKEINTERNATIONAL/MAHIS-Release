import { v as defineComponent, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bY as chevronBackOutline, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode } from './vendor-Cbv9TWZo.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-BWKf7_9p.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-CbET1MAa.js';
import { D as DemographicBar } from './DemographicBar-Jib0cT42.js';
import { S as SaveProgressModal } from './SaveProgressModal-DYH80tfl.js';
import { S as Stepper, A as usePostnatalWardStayStore } from './Stepper-C4zxCvKl.js';
import { m as mapState } from './pinia-C6LE2xz6.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-BL2SnSwA.js';
import { _ as _sfc_main$1 } from './SetUserRole.vue_vue_type_script_lang-DBLUAobL.js';

class PostnatalWardStayService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "postnatalWardMonitoring",
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
          title: "Routine monitoring",
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
          title: "Postnatal ward routine monitoring and management",
          component: "PostnatalWardMonitoring",
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
    ...mapState(usePostnatalWardStayStore, ["dangerSigns", "vitals", "otherExams"])
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
      await this.saveWardMonitoring();
      toastSuccess("Postnatal ward stay data saved successfully");
      await resetPatientData();
      this.$router.push("/home");
    },
    async saveWardMonitoring() {
      if (this.dangerSigns.length > 0 && this.vitals.length > 0 && this.otherExams.length > 0) {
        const userID = Service.getUserID();
        const wardMonitoring = new PostnatalWardStayService(this.patient.patientID, userID);
        const encounter = await wardMonitoring.createEncounter();
        if (!encounter) return toastWarning("Unable to create patient postnatal ward stay encounter");
        const patientStatus = await wardMonitoring.saveObservationList(await this.buildWardStayMonitoring());
        if (!patientStatus) return toastWarning("Unable to create patient routine monitoring details!");
        toastSuccess("Ward  details have been created");
      }
      console.log(await this.buildWardStayMonitoring());
    },
    async buildWardStayMonitoring() {
      return [
        ...await formatCheckBoxData(this.dangerSigns),
        ...await formatCheckBoxData(this.vitals),
        ...await formatCheckBoxData(this.otherExams),
        ...await formatRadioButtonData(this.dangerSigns),
        ...await formatRadioButtonData(this.vitals),
        ...await formatRadioButtonData(this.otherExams),
        ...await formatInputFiledData(this.dangerSigns),
        ...await formatInputFiledData(this.vitals),
        ...await formatInputFiledData(this.otherExams)
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
const postnatalWardMonitoring = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { postnatalWardMonitoring as default };
