import { q as defineComponent, bE as IonModal, a6 as IonLabel, an as IonItem, aF as IonAccordionGroup, aE as IonAccordion, b7 as IonCardTitle, cD as IonCardSubtitle, b8 as IonCardHeader, ba as IonCardContent, bJ as IonCard, M as IonButton, aA as IonToolbar, aB as IonTitle, bs as IonPage, cu as IonMenuButton, I as IonHeader, aD as IonContent, b9 as checkmark, bW as chevronBackOutline, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode } from './vendor-Dvd0YFIr.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-dTafdp2i.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, bM as resetPatientData, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-BQO1lu0i.js';
import { D as DemographicBar } from './DemographicBar-BJs-dCS4.js';
import { S as SaveProgressModal } from './SaveProgressModal-DeiWBQSb.js';
import { S as Stepper, B as useHIVStatusAndTreatmentStore, C as useDeliveryDetailsStore, D as useObstetricDetailsStore } from './Stepper-knJtnGrM.js';
import { m as mapState } from './pinia-CBckhk5W.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-DEjm6_a0.js';
import { a as _sfc_main$1 } from './Investigations-ggu0SLZ5.js';

class PostnatalDetailsService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "postnatalDetails",
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
          title: "Obstetric details",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "Delivery details",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 2,
          last_step: ""
        },
        {
          title: "HIV status and treatment",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 3,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "Obstetric details",
          component: "ObstetricDetails",
          value: "1"
        },
        {
          title: "Delivery details",
          component: "DeliveryDetails",
          value: "2"
        },
        {
          title: "HIV status and treatment",
          component: "HIVStatusAndTreatment",
          value: "3"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  watch: {
    obstetricDetails: {
      handler() {
        this.markWizard();
      },
      deep: true
    },
    deliveryDetails: {
      handler() {
        this.markWizard();
      },
      deep: true
    }
  },
  getFormatedData(data) {
    return data.map((item) => {
      return item?.data;
    });
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useObstetricDetailsStore, ["obstetricDetails"]),
    ...mapState(useDeliveryDetailsStore, ["deliveryDetails"]),
    ...mapState(useHIVStatusAndTreatmentStore, ["hivStatusAndTreatment"])
  },
  mounted() {
    this.markWizard();
  },
  setup() {
    return { chevronBackOutline, checkmark };
  },
  methods: {
    markWizard: function() {
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
      await this.savePostnatalDetails();
      await resetPatientData();
      this.$router.push("home");
    },
    async savePostnatalDetails() {
      if (this.obstetricDetails.length > 0 && this.deliveryDetails.length > 0 && this.hivStatusAndTreatment.length > 0) {
        const userID = Service.getUserID();
        const postnatalDetails = new PostnatalDetailsService(this.patient.patientID, userID);
        const encounter = await postnatalDetails.createEncounter();
        if (!encounter) return toastWarning("Unable to create patient postnatal details  encounter");
        const patientStatus = await postnatalDetails.saveObservationList(await this.buildPostnatalDetails());
        if (!patientStatus) return toastWarning("Unable to create patient obstetric, delivery and HIV status details!");
        toastSuccess("Obstetric, delivery and HIV status details have been created");
      }
      console.log(await this.buildPostnatalDetails());
    },
    async buildPostnatalDetails() {
      return [
        ...await formatCheckBoxData(this.obstetricDetails),
        ...await formatRadioButtonData(this.obstetricDetails),
        ...await formatInputFiledData(this.obstetricDetails),
        ...await formatCheckBoxData(this.deliveryDetails),
        ...await formatRadioButtonData(this.deliveryDetails),
        ...await formatInputFiledData(this.deliveryDetails),
        ...await formatCheckBoxData(this.hivStatusAndTreatment),
        ...await formatRadioButtonData(this.hivStatusAndTreatment),
        ...await formatInputFiledData(this.hivStatusAndTreatment)
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
            stepperTitle: "Postnatal details",
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
const postnatalDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { postnatalDetails as default };
