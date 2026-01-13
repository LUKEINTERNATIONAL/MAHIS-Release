import { q as defineComponent, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, br as IonPage, an as IonItem, I as IonHeader, H as IonContent, b8 as checkmark, bW as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-BPW-J91F.js';
import { D as DemographicBar } from './DemographicBar-gS5zMJpq.js';
import { aY as AppEncounterService, B as BasicInputField, T as Toolbar, S as Service, t as toastWarning, G as toastSuccess, aV as modifyRadioValue, bM as resetPatientData, bL as getRadioSelectedValue, u as useDemographicsStore, n as icons, _ as _export_sfc } from '../index-NXBj2cdM.js';
import { S as Stepper, h as headAssessment, v as validateField, a as useHeadssAssessmentStore } from './Stepper-xE7jXZIy.js';
import { b as formatCheckBoxData, c as formatRadioButtonData, f as formatInputFiledData } from './formatServerData-gWODFX1u.js';
import { m as mapState } from './pinia-D-q2_lrU.js';
import { B as BasicFooter } from './BasicFooter-B231exBy.js';
import { b as _sfc_main$1 } from './NextAppointment-BHfrDdyg.js';
import { _ as _sfc_main$2 } from './SetEncounter.vue_vue_type_script_lang-CmK4Qwgc.js';

class HeadssAssessmentService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 151, providerID);
  }
}

const _sfc_main = defineComponent({
  name: "treatment",
  mixins: [_sfc_main$1, _sfc_main$2],
  components: {
    BasicFooter,
    IonContent,
    IonHeader,
    IonItem,
    IonPage,
    IonList,
    Toolbar,
    DemographicBar,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicInputField,
    headAssessment,
    Stepper
  },
  data() {
    return {
      iconsContent: icons,
      isOpen: true,
      wizardData: [
        {
          title: "HEADSS assessment",
          class: "common_step",
          checked: false,
          disabled: false,
          number: 1,
          last_step: "last_step"
        }
      ],
      StepperData: [
        {
          title: "HEADSS assessment",
          component: "headAssessment",
          value: "1"
        }
      ]
    };
  },
  setup() {
    return { chevronBackOutline, checkmark };
  },
  watch: {
    headssAssesment: {
      handler() {
        this.headssAssesment;
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useHeadssAssessmentStore, ["headssAssesment"]),
    "Who does the client live with"() {
      return getRadioSelectedValue(this.headssAssesment, "Who does the client live with");
    }
  },
  methods: {
    markWizard() {
    },
    getSaveFunction() {
    },
    async saveData() {
      this.saveHeadssAssesment();
      await resetPatientData();
    },
    async validations(data, fields) {
      return fields.every((fieldName) => validateField(data, fieldName, this[fieldName]));
    },
    async saveHeadssAssesment() {
      const fields = ["Who does the client live with"];
      if (await this.validations(this.headssAssesment, fields)) {
        if (this.headssAssesment.length > 0) {
          const userID = Service.getUserID();
          const headssAssesment = new HeadssAssessmentService(this.patient.patientID, userID);
          const encounter = await headssAssesment.createEncounter();
          if (!encounter) return toastWarning("Unable to create patient HEADSS assessment encounter");
          const patientStatus = await headssAssesment.saveObservationList(await this.buildHeadssAssesment());
          if (!patientStatus) return toastWarning("Unable to create patient HEADSS assessment  !");
          toastSuccess("HEADSS assessment details have been created");
          this.$router.push("contact");
        }
      } else {
        modifyRadioValue(this.headssAssesment, "Who does the client live with", "alertsErrorMassage", "This is a mandatory question");
        await toastWarning("Please complete all required fields");
      }
      console.log(await this.buildHeadssAssesment());
    },
    async buildHeadssAssesment() {
      return [
        ...await formatCheckBoxData(this.headssAssesment),
        ...await formatRadioButtonData(this.headssAssesment),
        ...await formatInputFiledData(this.headssAssesment)
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
            "stepper-title": "HEADSS Assessment",
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
const headssAssessment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { headssAssessment as default };
