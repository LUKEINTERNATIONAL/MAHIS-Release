import { v as defineComponent, bG as IonModal, a8 as IonLabel, ap as IonItem, aH as IonAccordionGroup, aG as IonAccordion, b9 as IonCardTitle, cF as IonCardSubtitle, ba as IonCardHeader, bc as IonCardContent, bL as IonCard, O as IonButton, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, bb as checkmark, bY as chevronBackOutline, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode } from './vendor-B4fW45I4.js';
import { B as BasicFooter, _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-DlcABVQI.js';
import { aY as AppEncounterService, a3 as ToolbarSearch, T as Toolbar, o as createModal, S as Service, t as toastWarning, G as toastSuccess, H as HisDate, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-C9DqaTYI.js';
import { D as DemographicBar } from './DemographicBar-aMasVN6T.js';
import { S as SaveProgressModal } from './SaveProgressModal-DMIHwPHp.js';
import { m as mapState } from './pinia-ClrgJtgl.js';
import { L as LabourObstetricHistory, a as LabourMedications, b as LabourVaccineHistory, c as LabourChronicHealthConditions, d as LabourPastSurgeries, e as LabourAllergies, f as LabourWomanBehaviour, S as Stepper, v as validateField, u as useLabourObstreticHistoryStore, g as useLabourMedicationStore, h as useLabourVaccineStore, i as useLabourChronicHealthConditionsStore, j as useLabourPastSurgeriesStore, k as useLabourAllergiesStore, l as useLabourWomanBehaviourStore, m as useLabourCoplicationsStore } from './Stepper-5PYD_zod.js';
import { b as formatCheckBoxData, c as formatRadioButtonData } from './formatServerData-DyQAJe52.js';
import { a as _sfc_main$1 } from './Investigations-bphX5D3V.js';

class currentPregnancyService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 81, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "Home",
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
    Stepper,
    LabourWomanBehaviour,
    LabourAllergies,
    LabourPastSurgeries,
    LabourChronicHealthConditions,
    LabourVaccineHistory,
    LabourMedications,
    LabourObstetricHistory
  },
  data() {
    return {
      wizardData: [
        {
          title: "Past pregnancy complications",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 1,
          last_step: ""
        },
        {
          title: "Woman behavior",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 2,
          last_step: ""
        },
        {
          title: "Allergies",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 3,
          last_step: ""
        },
        {
          title: "Past Surgeries",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 4,
          last_step: ""
        },
        {
          title: "chronic health conditions",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 5,
          last_step: ""
        },
        {
          title: "vaccine history",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 6,
          last_step: ""
        },
        {
          title: "Current medications",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 7,
          last_step: ""
        },
        {
          title: "Obstetric history",
          class: "common_step",
          checked: "",
          icon: false,
          disabled: false,
          number: 8,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "Past pregnancy complications",
          component: "LabourComplications",
          value: "1"
        },
        {
          title: "Woman behavior",
          component: "LabourWomanBehaviour",
          value: "2"
        },
        {
          title: "Allergies",
          component: "LabourAllergies",
          value: "3"
        },
        {
          title: "Past Surgeries",
          component: "LabourPastSurgeries",
          value: "4"
        },
        {
          title: "chronic health conditions",
          component: "LabourChronicHealthConditions",
          value: "5"
        },
        {
          title: "vaccine history",
          component: "LabourVaccineHistory",
          value: "6"
        },
        {
          title: "Current medications",
          component: "LabourMedications",
          value: "7"
        },
        {
          title: "Obstetric history",
          component: "LabourObstetricHistory",
          value: "8"
        }
      ],
      isOpen: false,
      iconsContent: icons
    };
  },
  watch: {
    // lmnp: {
    //     handler() {
    //         const data = useCurrentPregnanciesStore();
    //         this.lmnp;
    //     },
    //     deep: true,
    // },
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useLabourCoplicationsStore, ["labourPrevPregnancies"]),
    ...mapState(useLabourWomanBehaviourStore, ["dailyCaffeineIntake"]),
    ...mapState(useLabourAllergiesStore, ["labourAllergies"]),
    ...mapState(useLabourPastSurgeriesStore, ["labourPastSurgeries"]),
    ...mapState(useLabourChronicHealthConditionsStore, ["labourChronicHealthConditions", "labourHivTest", "labourSyphilisTest"]),
    ...mapState(useLabourVaccineStore, ["labourTetanus"]),
    ...mapState(useLabourMedicationStore, ["LabourMedication"]),
    ...mapState(useLabourObstreticHistoryStore, ["prevPregnancies"])
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
      this.$router.push("LabourHome");
    },
    async validations(data, fields) {
      return fields.every((fieldName) => validateField(data, fieldName, this[fieldName]));
    },
    formatBirthdate() {
      return HisDate.getBirthdateAge(this.patient?.birthdate);
    },
    async saveLabourProfile() {
      if (this.labourPrevPregnancies && this.dailyCaffeineIntake && this.labourAllergies && this.labourPastSurgeries && this.labourChronicHealthConditions && this.labourHivTest && this.labourSyphilisTest && this.labourTetanus && this.LabourMedication && this.prevPregnancies) {
        const userID = Service.getUserID();
        const profile = new currentPregnancyService(this.patient.patientID, userID);
        const encounter = await profile.createEncounter();
        if (!encounter) return toastWarning("Unable to create profile encounter");
        const patientStatus = await profile.saveObservationList(await this.buildLabourProfile());
        if (!patientStatus) return toastWarning("Unable to create profile information!");
        await toastSuccess("LabourProfile information have been created");
      } else {
        await toastWarning("fail to save");
      }
      console.log("<<<<>>>", await this.buildLabourProfile());
    },
    openModal() {
      createModal(SaveProgressModal);
    },
    async buildLabourProfile() {
      return [
        ...await formatCheckBoxData(this.labourPrevPregnancies),
        ...await formatCheckBoxData(this.dailyCaffeineIntake),
        ...await formatRadioButtonData(this.dailyCaffeineIntake),
        ...await formatCheckBoxData(this.labourAllergies),
        ...await formatCheckBoxData(this.labourPastSurgeries),
        ...await formatCheckBoxData(this.labourChronicHealthConditions),
        ...await formatCheckBoxData(this.labourHivTest),
        ...await formatCheckBoxData(this.labourSyphilisTest),
        ...await formatRadioButtonData(this.labourTetanus),
        ...await formatCheckBoxData(this.LabourMedication),
        ...await formatCheckBoxData(this.prevPregnancies)
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
            stepperTitle: "Labour Profile",
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
const labourProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { labourProfile as default };
