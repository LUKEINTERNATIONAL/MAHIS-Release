import { v as defineComponent, a7 as IonInput, aC as IonToolbar, aD as IonTitle, aE as IonMenu, ao as IonList, ap as IonItem, I as IonHeader, aF as IonContent, q as dayjs, aI as menuController, br as pulseOutline, bb as checkmark, y as resolveComponent, z as createElementBlock, A as openBlock, B as createVNode, D as withCtx, C as createBaseVNode, a6 as createTextVNode, K as Fragment, c1 as IonDatetime, E as toDisplayString, bo as IonPopover, P as createBlock, ai as IonRadioGroup, aj as IonRadio, bN as IonSelectOption, bO as IonSelect, au as IonToggle, ex as create$3, ey as create$5, ez as create$6, M as IonIcon, O as IonButton, bd as IonButtons, bG as IonModal, H as closeCircleOutline, J as createCommentVNode, bc as IonCardContent, b9 as IonCardTitle, ba as IonCardHeader, bL as IonCard, S as renderList, L as modalController, eA as create$8, ae as IonTextarea, a8 as IonLabel, aH as IonAccordionGroup, aG as IonAccordion, cF as IonCardSubtitle, bu as IonPage, cw as IonMenuButton, bl as chevronForward, bk as chevronBack, bY as chevronBackOutline, a5 as normalizeClass, T as withDirectives, c3 as resolveDynamicComponent, U as vShow } from './vendor-CJ5LqAxe.js';
import { L as LabOrder, I as Investigations, a as _sfc_main$V } from './Investigations-CAi-RicT.js';
import { y as StandardValidations, P as PatientService, bN as modifyAlertsValue, bO as iconBloodPressure, b9 as BMIService, H as HisDate, K as ObservationService, aX as modifyCheckboxValue, a1 as modifyFieldValue, u as useDemographicsStore, l as PreviousVitals, B as BasicInputField, a2 as getFieldValue, bP as getOfflineFirstObsValue, aT as modifyCheckboxInputField, b1 as useVitalsStore, n as icons, _ as _export_sfc, bG as useNextAppointmentStore, S as Service, A as AppointmentService, F as DynamicButton, a_ as List, ba as SelectionPopover, a4 as popoverConfirmation, aq as ConceptService, O as OrderService, bm as useInvestigationStore, aV as modifyRadioValue, bL as getRadioSelectedValue, V as LocationService, br as getCheckboxSelectedValue, t as toastWarning, bQ as modifyCheckboxHeader, bR as YupValidateField, bS as extractArrayOfNameValue, bT as validateStore, bU as VitalsService, o as createModal, E as EncounterService, a as useProgramStore, bV as dynamicValue, bW as modifyDynamicFieldValue, a3 as ToolbarSearch, T as Toolbar } from '../index-BBSKuWmW.js';
import { m as mapState, d as defineStore } from './pinia-BmV_6_tV.js';
import { B as BasicForm } from './BasicForm-DXf9I_la.js';
import { S as SaveProgressModal } from './SaveProgressModal-Cl5cEVQX.js';
import { D as DashBox } from './DashBox-BKWxwRfy.js';
import { _ as _sfc_main$Q } from './LevelOfConsciousness.vue_vue_type_script_setup_true_lang-BTv6AhpS.js';
import { P as PresentingComplaints, _ as _sfc_main$O, a as _sfc_main$P } from './PresentingComplaints-DB3-kAHi.js';
import { B as BasicCard } from './BasicCard-Whde49Do.js';
import { l as lodashExports, _ } from './lodash-BxWMU_OR.js';
import { _ as _sfc_main$R, a as _sfc_main$S, b as _sfc_main$T, c as _sfc_main$U } from './FirstVaginalExamination.vue_vue_type_script_setup_true_lang-M47-cBy2.js';

const _sfc_main$N = defineComponent({
  data: () => ({
    BMI: {},
    BPStatus: {},
    vitalsData: {}
  }),
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  methods: {
    async setTodayVitals() {
      const array = ["Height (cm)", "Weight", "Systolic", "Diastolic", "Temperature", "Pulse", "SAO2", "Respiratory rate"];
      const age = HisDate.getAgeInYears(this.patient?.personInformation?.birthdate);
      const promises = array.map(async (item) => {
        const firstDate = await ObservationService.getFirstObsDatetime(this.patient.patientID, item);
        if (firstDate && HisDate.toStandardHisFormat(firstDate) == HisDate.sessionDate()) {
          if (item == "Weight") {
            modifyCheckboxValue(this.vitalsData, "Height And Weight Not Done", "displayNone", true);
          }
          if (item == "Systolic") {
            modifyCheckboxValue(this.vitalsData, "Blood Pressure Not Done", "displayNone", true);
          }
          if (item == "Pulse") {
            modifyCheckboxValue(this.vitalsData, "Pulse Rate Not Done", "displayNone", true);
          }
          if (item == "Respiratory rate") {
            modifyCheckboxValue(this.vitalsData, "Respiratory rate Not Done", "displayNone", true);
          }
          modifyFieldValue(
            this.vitalsData,
            item,
            "value",
            await ObservationService.getFirstValueNumber(this.patient.patientID, item, HisDate.sessionDate())
          );
          modifyFieldValue(this.vitalsData, item, "disabled", true);
        } else {
          modifyFieldValue(this.vitalsData, item, "value", "");
        }
        if (item === "Respiratory rate" && age <= 5) {
          modifyFieldValue(this.vitalsData, item, "required", true);
          modifyFieldValue(this.vitalsData, item, "inputHeader", "Respiratory rate*");
        }
      });
      await Promise.all(promises);
    },
    async setBMI(height, weight) {
      if (this.patient?.personInformation?.gender && this.patient?.personInformation?.birthdate && StandardValidations.vitalsHeight(height) == null && StandardValidations.vitalsWeight(weight) == null) {
        this.BMI = await BMIService.getBMI(
          parseInt(weight),
          parseInt(height),
          this.patient?.personInformation?.gender,
          HisDate.calculateAge(this.patient?.personInformation?.birthdate, HisDate.sessionDate())
        );
      } else {
        this.BMI = {};
      }
      await this.updateBMI();
    },
    async updateBMI() {
      if (!this.vitalsData[0]) return;
      const bmiColor = this.BMI?.color ?? [];
      this.updateRate(
        "bmi",
        "BMI " + (this.BMI?.index ?? ""),
        "",
        { colors: bmiColor, value: this.BMI?.result ?? "" },
        BMIService.iconBMI(bmiColor)
      );
    },
    async updateBP(systolic, diastolic) {
      this.BPStatus = this.getBloodPressureStatus(systolic, diastolic);
      if (!(StandardValidations.vitalsSystolic(systolic) == null && StandardValidations.vitalsDiastolic(diastolic) == null)) this.BPStatus = {};
      const bpColor = this.BPStatus?.colors ?? [];
      this.updateRate(
        "bp",
        systolic + "/" + diastolic,
        "mmHg",
        { colors: bpColor, value: this.BPStatus?.value ?? "" },
        iconBloodPressure(bpColor)
      );
    },
    async updateRate(name, value, units, obj, icon = "") {
      if (!value) return;
      const index = value + " " + units;
      const bpColor = obj?.colors ?? [];
      modifyAlertsValue(this.vitalsData, name, "icon", icon || "");
      modifyAlertsValue(this.vitalsData, name, "textColor", bpColor[1]);
      modifyAlertsValue(this.vitalsData, name, "index", index);
      modifyAlertsValue(this.vitalsData, name, "backgroundColor", bpColor[0]);
      modifyAlertsValue(this.vitalsData, name, "value", obj?.value ?? "");
    },
    getBloodPressureStatus(systolic, diastolic) {
      if (systolic && diastolic) {
        let minSystolic;
        let maxSystolic;
        let minDiastolic;
        let maxDiastolic;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age < 1) {
          minSystolic = 75;
          maxSystolic = 100;
          minDiastolic = 50;
          maxDiastolic = 70;
        } else if (age >= 1 && age < 6) {
          minSystolic = 80;
          maxSystolic = 110;
          minDiastolic = 50;
          maxDiastolic = 80;
        } else if (age >= 6 && age < 13) {
          minSystolic = 85;
          maxSystolic = 120;
          minDiastolic = 55;
          maxDiastolic = 80;
        } else if (age >= 13 && age < 18) {
          minSystolic = 95;
          maxSystolic = 140;
          minDiastolic = 60;
          maxDiastolic = 90;
        } else {
          minSystolic = 100;
          maxSystolic = 130;
          minDiastolic = 60;
          maxDiastolic = 90;
        }
        if (systolic < minSystolic && diastolic < minDiastolic) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low BP " };
        } else if (systolic >= minSystolic && systolic <= maxSystolic && diastolic >= minDiastolic && diastolic <= maxDiastolic) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal BP " };
        } else if (systolic > 140 && diastolic > 90) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High BP" };
        } else {
          if (systolic < minSystolic) {
            return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low BP  (Using Systolic Only)" };
          } else if (systolic >= minSystolic && systolic <= maxSystolic) {
            return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal BP  (Using Systolic Only)" };
          } else {
            return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High BP  (Using Systolic Only)" };
          }
        }
      }
    },
    getTemperatureStatus(value) {
      if (value && StandardValidations.vitalsTemperature(value) == null) {
        let minTemp;
        let maxTemp;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age <= 1) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else if (age >= 1 && age <= 18) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else if (age >= 19 && age <= 64) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else if (age >= 65) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else {
          minTemp = "";
          maxTemp = "";
        }
        if (value < minTemp) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low Temperature " };
        } else if (value >= minTemp && value <= maxTemp) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal Temperature " };
        } else if (value > maxTemp) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High Temperature " };
        }
      } else {
        return {};
      }
    },
    getPulseRateStatus(value) {
      if (StandardValidations.vitalsPulseRate(value) == null) {
        let minPulse;
        let maxPulse;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age <= 0.25) {
          minPulse = 100;
          maxPulse = 160;
        } else if (age >= 0.25 && age <= 1) {
          minPulse = 80;
          maxPulse = 120;
        } else if (age >= 1 && age <= 2) {
          minPulse = 80;
          maxPulse = 120;
        } else if (age >= 6 && age <= 12) {
          minPulse = 70;
          maxPulse = 100;
        } else if (age >= 13 && age <= 18) {
          minPulse = 55;
          maxPulse = 90;
        } else if (age >= 18) {
          minPulse = 60;
          maxPulse = 100;
        } else {
          minPulse = "";
          maxPulse = "";
        }
        if (value < minPulse) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low Pulse Rate " };
        } else if (value >= minPulse && value <= maxPulse) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal Pulse Rate " };
        } else if (value > maxPulse) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High Pulse Rate " };
        }
      }
    },
    getOxygenSaturationStatus(value) {
      if (value && StandardValidations.vitalsOxygenSaturation(value) == null) {
        let minOxygenSaturation = 95;
        let maxOxygenSaturation = 100;
        if (value < minOxygenSaturation) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low oxygen saturation" };
        } else if (value >= minOxygenSaturation && value <= maxOxygenSaturation) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal oxygen saturation" };
        }
      }
    },
    getRespiratoryRateStatus(value) {
      if (StandardValidations.vitalsRespiratoryRate(value) == null) {
        let minRespiratoryRate;
        let maxRespiratoryRate;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age <= 1) {
          minRespiratoryRate = 30;
          maxRespiratoryRate = 60;
        } else if (age >= 1 && age < 3) {
          minRespiratoryRate = 24;
          maxRespiratoryRate = 40;
        } else if (age >= 3 && age <= 6) {
          minRespiratoryRate = 22;
          maxRespiratoryRate = 34;
        } else if (age >= 6 && age <= 12) {
          minRespiratoryRate = 18;
          maxRespiratoryRate = 30;
        } else if (age >= 12 && age <= 18) {
          minRespiratoryRate = 12;
          maxRespiratoryRate = 16;
        } else if (age >= 19) {
          minRespiratoryRate = 12;
          maxRespiratoryRate = 20;
        } else {
          minRespiratoryRate = "";
          maxRespiratoryRate = "";
        }
        if (value < minRespiratoryRate) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low respiratory rate" };
        } else if (value >= minRespiratoryRate && value <= maxRespiratoryRate) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal respiratory rate" };
        } else if (value > maxRespiratoryRate) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High respiratory rate" };
        }
      }
    }
  }
});

const _sfc_main$M = defineComponent({
  mixins: [_sfc_main$N],
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    BasicInputField,
    BasicForm,
    PreviousVitals
  },
  data() {
    return {
      iconsContent: icons,
      saveBtnStatus: {},
      TempStatus: {},
      PulseStatus: {},
      RespiratoryStatus: {},
      OxygenStatus: {},
      vValidations: "",
      hasValidationErrors: [],
      vitalsInstance: {},
      validationStatus: { heightWeight: false, bloodPressure: false }
    };
  },
  watch: {
    $route: {
      async handler() {
        this.vitalsData = this.vitals;
        await this.validateRowData("onload");
      },
      deep: true
    },
    "patient.ID": {
      async handler(newID, oldID) {
        if (newID !== oldID) {
          await this.checkHeight();
        }
      }
    }
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useVitalsStore, ["vitals"])
  },
  async mounted() {
    this.checkIfSamePatientInContext();
    this.vitalsData = this.vitals;
    await this.checkHeight();
    await this.validateRowData("onload");
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    checkIfSamePatientInContext() {
      const vitals = useVitalsStore();
      if (vitals.current_patient.ID != this.patient.ID) {
        this.cleanVitalForm();
        vitals.setCurrentPatient(this.patient);
      }
    },
    navigationMenu(url) {
      menuController.close();
      this.$router.push(url);
    },
    cleanVitalForm() {
      const vitals = useVitalsStore();
      vitals.setVitals(vitals.getInitialVitals(this.patient.ID));
    },
    async validationController(inputData) {
      if (inputData?.col?.name == "Height Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Height (cm)", "displayNone", false);
        modifyFieldValue(this.vitals, "Height (cm)", "disabled", true);
        modifyFieldValue(this.vitals, "Height (cm)", "inputHeader", "Height");
        modifyFieldValue(this.vitals, "Height (cm)", "value", "");
        this.validationStatus.heightWeight = false;
      } else if (inputData?.col?.name == "Height Not Done") {
        modifyCheckboxInputField(this.vitals, "Height (cm)", "displayNone", true);
        modifyCheckboxInputField(this.vitals, "Height (cm)", "value", "");
        modifyFieldValue(this.vitals, "Height (cm)", "disabled", false);
        modifyFieldValue(this.vitals, "Height (cm)", "inputHeader", "Height*");
        this.validationStatus.heightWeight = true;
      }
      if (inputData?.col?.name == "Weight Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Weight", "displayNone", false);
        modifyFieldValue(this.vitals, "Weight", "disabled", true);
        modifyFieldValue(this.vitals, "Weight", "inputHeader", "Weight");
        modifyFieldValue(this.vitals, "Weight", "value", "");
        this.validationStatus.heightWeight = false;
      } else if (inputData?.col?.name == "Weight Not Done") {
        modifyCheckboxInputField(this.vitals, "Weight", "displayNone", true);
        modifyCheckboxInputField(this.vitals, "Weight", "value", "");
        modifyFieldValue(this.vitals, "Weight", "disabled", false);
        modifyFieldValue(this.vitals, "Weight", "inputHeader", "Weight*");
        this.validationStatus.heightWeight = true;
      }
      if (inputData?.col?.name == "Blood Pressure Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Blood Pressure", "displayNone", false);
        modifyFieldValue(this.vitals, "Systolic", "disabled", true);
        modifyFieldValue(this.vitals, "Diastolic", "disabled", true);
        modifyFieldValue(this.vitals, "Systolic", "inputHeader", "Systolic Pressure");
        modifyFieldValue(this.vitals, "Diastolic", "inputHeader", "Diastolic pressure");
        modifyFieldValue(this.vitals, "Systolic", "value", "");
        modifyFieldValue(this.vitals, "Diastolic", "value", "");
        this.validationStatus.bloodPressure = false;
      } else if (inputData?.col?.name == "Blood Pressure Not Done") {
        modifyCheckboxInputField(this.vitals, "Blood Pressure", "displayNone", true);
        modifyCheckboxInputField(this.vitals, "Blood Pressure", "value", "");
        modifyFieldValue(this.vitals, "Systolic", "disabled", false);
        modifyFieldValue(this.vitals, "Diastolic", "disabled", false);
        modifyFieldValue(this.vitals, "Systolic", "inputHeader", "Systolic Pressure*");
        modifyFieldValue(this.vitals, "Diastolic", "inputHeader", "Diastolic pressure*");
        modifyFieldValue(this.vitals, "Systolic", "value", "");
        modifyFieldValue(this.vitals, "Diastolic", "value", "");
        this.validationStatus.bloodPressure = true;
      }
      if (inputData?.col?.name == "Pulse Rate Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Pulse", "displayNone", false);
        modifyFieldValue(this.vitals, "Pulse", "disabled", true);
        modifyFieldValue(this.vitals, "Pulse", "inputHeader", "Pulse rate");
        modifyFieldValue(this.vitals, "Pulse", "value", "");
        this.validationStatus.bloodPressure = false;
      } else if (inputData?.col?.name == "Pulse Rate Not Done") {
        modifyCheckboxInputField(this.vitals, "Pulse", "displayNone", true);
        modifyCheckboxInputField(this.vitals, "Pulse", "value", "");
        modifyFieldValue(this.vitals, "Pulse", "disabled", false);
        modifyFieldValue(this.vitals, "Pulse", "inputHeader", "Pulse rate*");
        modifyFieldValue(this.vitals, "Pulse", "value", "");
        this.validationStatus.bloodPressure = true;
      }
      if (inputData?.col?.name == "Temperature Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Temperature", "displayNone", false);
        modifyFieldValue(this.vitals, "Temperature", "disabled", true);
        modifyFieldValue(this.vitals, "Temperature", "inputHeader", "Temperature");
        modifyFieldValue(this.vitals, "Temperature", "value", "");
        this.validationStatus.bloodPressure = false;
      } else if (inputData?.col?.name == "Temperature Not Done") {
        modifyCheckboxInputField(this.vitals, "Temperature", "displayNone", true);
        modifyCheckboxInputField(this.vitals, "Temperature", "value", "");
        modifyFieldValue(this.vitals, "Temperature", "disabled", false);
        modifyFieldValue(this.vitals, "Temperature", "inputHeader", "Temperature*");
        modifyFieldValue(this.vitals, "Temperature", "value", "");
        this.validationStatus.bloodPressure = true;
      }
      if (inputData?.col?.name == "Respiratory rate Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Respiratory rate", "displayNone", false);
        modifyFieldValue(this.vitals, "Respiratory rate", "disabled", true);
        modifyFieldValue(this.vitals, "Respiratory rate", "inputHeader", "Respiratory rate");
        modifyFieldValue(this.vitals, "Respiratory rate", "value", "");
        this.validationStatus.bloodPressure = false;
      } else if (inputData?.col?.name == "Respiratory rate Not Done") {
        modifyCheckboxInputField(this.vitals, "Respiratory rate", "displayNone", true);
        modifyCheckboxInputField(this.vitals, "Respiratory rate", "value", "");
        modifyFieldValue(this.vitals, "Respiratory rate", "disabled", false);
        modifyFieldValue(this.vitals, "Respiratory rate", "inputHeader", "Respiratory rate*");
        modifyFieldValue(this.vitals, "Respiratory rate", "value", "");
        this.validationStatus.bloodPressure = true;
      }
      if (inputData?.col?.name == "Oxygen saturation Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "SAO2", "displayNone", false);
        modifyFieldValue(this.vitals, "SAO2", "disabled", true);
        modifyFieldValue(this.vitals, "SAO2", "inputHeader", "Oxygen saturation");
        modifyFieldValue(this.vitals, "SAO2", "value", "");
        this.validationStatus.bloodPressure = false;
      } else if (inputData?.col?.name == "Oxygen saturation Not Done") {
        modifyCheckboxInputField(this.vitals, "SAO2", "displayNone", true);
        modifyCheckboxInputField(this.vitals, "SAO2", "value", "");
        modifyFieldValue(this.vitals, "SAO2", "disabled", false);
        modifyFieldValue(this.vitals, "SAO2", "inputHeader", "Oxygen saturation*");
        modifyFieldValue(this.vitals, "SAO2", "value", "");
        this.validationStatus.bloodPressure = true;
      }
    },
    async checkHeight() {
      const vitals = [...this.patient?.vitals?.saved || [], ...this.patient?.vitals?.unsaved || []];
      const recentHeight = await getOfflineFirstObsValue(vitals, "value_numeric", 5090);
      const obs_datetime = await getOfflineFirstObsValue(vitals, "obs_datetime", 5090);
      const patient = new PatientService();
      if (recentHeight) {
        const patientAgeAtPrevRecordedHeight = dayjs(obs_datetime).diff(patient.getBirthdate(), "year");
        if (!(patientAgeAtPrevRecordedHeight < 18 || patient.getAge() < 18)) {
          modifyFieldValue(this.vitals, "Height (cm)", "disabled", true);
          modifyFieldValue(this.vitals, "Height (cm)", "value", recentHeight);
        }
      }
    },
    async validateRowData(inputData) {
      if (inputData != "onload") {
        await this.validationController(inputData);
        const height = getFieldValue(this.vitals, "Height (cm)", "value");
        const weight = getFieldValue(this.vitals, "Weight", "value");
        const systolic = getFieldValue(this.vitals, "Systolic", "value");
        const diastolic = getFieldValue(this.vitals, "Diastolic", "value");
        const temp = getFieldValue(this.vitals, "Temperature", "value");
        const pulse = getFieldValue(this.vitals, "Pulse", "value");
        const respiratoryRate = getFieldValue(this.vitals, "Respiratory rate", "value");
        const SAO2 = getFieldValue(this.vitals, "SAO2", "value");
        await this.setBMI(height, weight);
        await this.updateBP(systolic, diastolic);
        const pulseStatus = this.getPulseRateStatus(pulse);
        await this.updateRate("pulse", pulse, " BMP", pulseStatus, 4);
        const tempStatus = this.getTemperatureStatus(temp);
        this.updateRate("temp", temp, "°C", tempStatus, 4);
        const respiratoryStatus = this.getRespiratoryRateStatus(respiratoryRate);
        this.updateRate("respiratory", respiratoryRate, "BMP", respiratoryStatus, 6);
        const oxygenStatus = this.getOxygenSaturationStatus(SAO2);
        this.updateRate("oxygen", SAO2, "%", oxygenStatus, 6);
      }
    }
  }
});

const _hoisted_1$M = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_PreviousVitals = resolveComponent("PreviousVitals");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_basic_form, {
      contentData: _ctx.vitals,
      "onUpdate:inputValue": _cache[0] || (_cache[0] = ($event) => _ctx.validateRowData($event))
    }, null, 8, ["contentData"]),
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_accordion_group, {
          ref: "accordionGroup",
          class: "previousView"
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion, {
              value: "first",
              "toggle-icon-slot": "start",
              style: { "border-radius": "10px", "background-color": "#fff" }
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_item, {
                  slot: "header",
                  color: "light"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_label, { class: "previousLabel" }, {
                      default: withCtx(() => [..._cache[1] || (_cache[1] = [
                        createTextVNode("Previous measurements", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_1$M, [
                  createVNode(_component_PreviousVitals)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 512)
      ]),
      _: 1
    })
  ], 64);
}
const VitalSigns = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$M], ["__scopeId", "data-v-bbed3d60"]]);

const useChangeStatusStore = defineStore("ChangeStatusStore", {
  state: () => ({
    changeStatus: [
      {
        selectedData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            name: "Immunization patient status",
            selectedValue: ""
          },
          data: [
            {
              name: "Active",
              value: "Active",
              checked: true
            },
            {
              name: "Inactive",
              value: "Inactive",
              checked: false
            },
            {
              name: "Lost to follow-up",
              value: "Lost to follow-up",
              checked: false
            },
            {
              name: "Archive Record",
              value: "Archive Record",
              checked: false
            }
          ]
        }
      }
    ]
  }),
  actions: {
    setStatus(data) {
      this.changeStatus = data;
    }
  },
  persist: true
});

const _sfc_main$L = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicForm
  },
  data() {
    return {
      initialData: []
    };
  },
  computed: {
    ...mapState(useChangeStatusStore, ["changeStatus"])
  },
  mounted() {
    useChangeStatusStore();
  },
  methods: {
    handleInputData(event) {
    }
  }
});

const _hoisted_1$L = { class: "modal_wrapper" };
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  return openBlock(), createElementBlock("div", _hoisted_1$L, [
    createVNode(_component_basic_form, {
      contentData: _ctx.changeStatus,
      "onUpdate:inputValue": _ctx.handleInputData,
      "onUpdate:selected": _ctx.handleInputData
    }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
  ]);
}
const ChangeStatus = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$L]]);

const _sfc_main$K = defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicInputField,
    IonDatetime
  },
  data() {
    return {
      iconsContent: icons,
      calendarDate: "",
      date: /* @__PURE__ */ new Date(),
      bookedPatient: 20,
      tomorrow: (/* @__PURE__ */ new Date()).getDate() + 1,
      appointment: "",
      drugRunoutDate: "",
      nextAppointmentDate: "",
      minDate: /* @__PURE__ */ new Date()
    };
  },
  computed: {
    ...mapState(useNextAppointmentStore, ["nextAppointment"])
  },
  watch: {
    calendarDate: {
      handler() {
        this.updateNextAppointment();
      },
      deep: true
    }
  },
  async mounted() {
    const userID = Service.getUserID();
    const patient = new PatientService();
    this.appointment = new AppointmentService(patient.getID(), userID);
    this.nextAppointmentDate = this.appointment.date;
  },
  methods: {
    updateNextAppointment() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.setNextAppointment(this.calendarDate);
    },
    handleDateUpdate(value) {
      this.calendarDate = HisDate.toStandardHisDisplayFormat(value);
      this.saveData();
    },
    async saveData() {
      try {
        const res = await this.appointment.getNextAppointment();
        this.nextAppointmentDate = res.appointment_date;
        this.drugRunoutDate = res.drugs_run_out_date;
        console.log(res);
      } catch {
      }
      [
        await this.appointment.buildValueDate("Appointment date", "2024-03-28"),
        await this.appointment.buildValueDate("Estimated date", this.nextAppointmentDate)
      ];
    }
  }
});

const _hoisted_1$K = { class: "card_content" };
const _hoisted_2$m = { key: 0 };
const _hoisted_3$d = { style: { "color": "#999" } };
const _hoisted_4$a = { class: "dates_title" };
const _hoisted_5$a = { class: "sub_data" };
const _hoisted_6$2 = { class: "dates_title" };
const _hoisted_7$2 = { class: "sub_data" };
const _hoisted_8$2 = { class: "dates_title" };
const _hoisted_9$2 = { class: "sub_data" };
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueDatePicker = resolveComponent("VueDatePicker");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$K, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          "size-sm": "12",
          "size-md": "12",
          "size-lg": "12",
          "size-xl": "8"
        }, {
          default: withCtx(() => [
            createVNode(_component_VueDatePicker, {
              class: "calender",
              onDateUpdate: _ctx.handleDateUpdate,
              modelValue: _ctx.date,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.date = $event),
              "min-date": _ctx.minDate,
              inline: "",
              "auto-apply": "",
              "enable-time-picker": false
            }, {
              day: withCtx(({ day }) => [
                day === _ctx.tomorrow ? (openBlock(), createElementBlock("p", _hoisted_2$m, [
                  createTextVNode(toDisplayString(day), 1),
                  createBaseVNode("sup", _hoisted_3$d, toDisplayString(_ctx.bookedPatient), 1)
                ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(day), 1)
                ], 64))
              ]),
              _: 1
            }, 8, ["onDateUpdate", "modelValue", "min-date"])
          ]),
          _: 1
        }),
        createVNode(_component_ion_col, null, {
          default: withCtx(() => [
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createBaseVNode("div", { class: "dates_title" }, [
                  createBaseVNode("div", null, "Next Vaccination date"),
                  createBaseVNode("div", { class: "sub_data" }, "20 June 2024 - 27 June 2024")
                ], -1)
              ])]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4$a, [
                  _cache[2] || (_cache[2] = createBaseVNode("div", null, "User set appointment date", -1)),
                  createBaseVNode("div", _hoisted_5$a, toDisplayString(_ctx.calendarDate), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6$2, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", null, "Appointments", -1)),
                  createBaseVNode("div", _hoisted_7$2, toDisplayString(_ctx.bookedPatient), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_8$2, [
                  _cache[4] || (_cache[4] = createBaseVNode("div", null, "Appointment limit (per/day)", -1)),
                  createBaseVNode("div", _hoisted_9$2, toDisplayString(_ctx.bookedPatient) + "/120", 1)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const ImmunizationNextAppointment = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$K], ["__scopeId", "data-v-193b84e8"]]);

const useImmunizationStore = defineStore("ImmunizationStore", {
  state: () => ({
    birthImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "OPV 0",
              value: "OPV 0",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "BCG",
              value: "BCG",
              checked: false
            }
          ]
        }
      }
    ],
    sixWeeksImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "6 Weeks"
          },
          data: [
            {
              name: "OPV 1",
              value: "OPV 1",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "6 Weeks"
          },
          data: [
            {
              name: "Pentavalent 1",
              value: "Pentavalent 1",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "6 Weeks"
          },
          data: [
            {
              name: "PCV 1",
              value: "PCV 1",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "6 Weeks"
          },
          data: [
            {
              name: "Rota 1",
              value: "Rota 1",
              checked: false
            }
          ]
        }
      }
    ],
    tenWeeksImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "OPV 2",
              value: "OPV 2",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "Pentavalent 2",
              value: "Pentavalent 2",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "PCV 2",
              value: "PCV 2",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "Rota 2",
              value: "Rota 2",
              checked: false
            }
          ]
        }
      }
    ],
    fourteenWeeksImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "OPV 3",
              value: "OPV 3",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "Pentavalent 3",
              value: "Pentavalent 3",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "PCV 3",
              value: "PCV 3",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "10 Weeks"
          },
          data: [
            {
              name: "IPV",
              value: "IPV",
              checked: false
            }
          ]
        }
      }
    ],
    fiveToTwentyTwoImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "5 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "Malaria Vaccine 1",
              value: "Malaria Vaccine 1",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "6 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "Malaria Vaccine 2",
              value: "Malaria Vaccine 2",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "7 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "Malaria Vaccine 3",
              value: "Malaria Vaccine 3",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "9 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "MR 1",
              value: "MR 1",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "9 months – under 15 years",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "TCV",
              value: "TCV",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "15 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "MR 2",
              value: "MR 2",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "22 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "Malaria Vaccine 4",
              value: "Malaria Vaccine 4",
              checked: false
            }
          ]
        }
      }
    ],
    oneYearToFiveYearsImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "1 Year",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "1 Year 6 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "2 Years",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "2 Years 6 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "3 Years",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "3 Year 6 Months",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "4 Years",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "4 Years 6 Month",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "5 Years",
            class: "bold",
            selectedValue: "",
            name: "birth immunization"
          },
          data: [
            {
              name: "vitamin A",
              value: "vitamin A",
              checked: false
            }
          ]
        }
      }
    ],
    nineToFourteenYearsImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "1st Dose",
            class: "bold",
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "HPV1",
              value: "HPV1",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "2nd dose after 6 months",
            class: "bold",
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "HPV2",
              value: "HPV2",
              checked: false
            }
          ]
        }
      }
    ],
    twelveYearsAboveImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "Pfizer",
              value: "Pfizer",
              checked: false
            }
          ]
        }
      }
    ],
    fifteenYearsImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "1st Dose",
            class: "bold",
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "TD",
              value: "TD",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "2nd after 4 weeks",
            class: "bold",
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "TD",
              value: "TD",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "3rd after 6 months",
            class: "bold",
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "TD",
              value: "TD",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "4th after 5 years",
            class: "bold",
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "TD",
              value: "TD",
              checked: false
            }
          ]
        }
      }
    ],
    eighteenYearsAboveImmunization: [
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "AstraZeneca",
              value: "AstraZeneca",
              checked: false
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            selectedValue: "",
            name: "moreThan5"
          },
          data: [
            {
              name: "Janssen (Johnson & Johnson)",
              value: "Janssen (Johnson & Johnson)",
              checked: false
            }
          ]
        }
      }
    ]
  }),
  actions: {
    setDiagnosis(data) {
      this.birthImmunization = data;
    }
  },
  persist: true
});

const _sfc_main$J = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    IonPopover,
    DashBox,
    SelectionPopover,
    BasicInputField,
    BasicForm,
    List,
    DynamicButton,
    LevelOfConsciousness: _sfc_main$Q,
    PhysicalExamination: _sfc_main$P,
    PregnancyBreastfeeding: _sfc_main$O,
    PresentingComplaints
  },
  data() {
    return {
      iconsContent: icons,
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      testResult: "",
      test: "",
      orders: "",
      filteredSpecimen: "",
      labOrders: "",
      testData: [],
      popoverOpen: false,
      levelOfConsciousnessStatus: false,
      presentingComplaintsStatus: false,
      pregnancyBreastfeedingStatus: false,
      pastMedicalHistory: false,
      allergiesStatus: false,
      physicalExamination: false,
      event: "",
      specimen: "",
      radiologyOrdersStatus: false,
      otherOrdersStatus: false
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useImmunizationStore, [
      "birthImmunization",
      "sixWeeksImmunization",
      "tenWeeksImmunization",
      "fourteenWeeksImmunization",
      "fiveToTwentyTwoImmunization",
      "nineToFourteenYearsImmunization",
      "twelveYearsAboveImmunization",
      "fifteenYearsImmunization",
      "eighteenYearsAboveImmunization",
      "oneYearToFiveYearsImmunization"
    ]),
    inputFields() {
      return this.investigations[0].data.rowData[0].colData;
    }
  },
  watch: {
    investigations: {
      handler() {
        this.setDashedBox();
      },
      deep: true
    }
  },
  async mounted() {
    this.updateInvestigationsStores();
    this.setDashedBox();
    this.orders = await OrderService.getOrders(this.patient.patientID);
    this.labOrders = await OrderService.getTestTypes();
  },
  methods: {
    checkPatient() {
      const patient = new PatientService();
      return patient.isChildBearing();
    },
    updateInvestigationsStores() {
      const investigationsStore = useInvestigationStore();
      investigationsStore.setInvestigations(this.investigations);
    },
    displayInputFields() {
      this.testResult = "";
      this.selectedText = "";
      this.no_item = false;
      this.addItemButton = false;
      this.search_item = true;
    },
    async validateRowData() {
      const firstCol = this.investigations[0].data.rowData[0].colData[0];
      const secondCol = this.investigations[0].data.rowData[0].colData[1];
      firstCol.alertsErrorMassage = false;
      firstCol.alertsErrorMassage = "";
      secondCol.alertsErrorMassage = false;
      secondCol.alertsErrorMassage = "";
      secondCol.disabled = false;
      const testValue = this.inputFields[0].value;
      const specimenValue = this.inputFields[1].value;
      this.test = await this.filterTest(testValue);
      this.filteredSpecimen = await this.filterSpecimen(specimenValue);
      const testMatches = testValue && this.test[0]?.name === testValue;
      const specimenMatches = specimenValue && this.filteredSpecimen[0]?.name === specimenValue;
      if (testValue) {
        if (testMatches) {
          this.specimen = await OrderService.getSpecimens(firstCol.value);
          if (this.specimen.length == 1) {
            secondCol.value = this.specimen[0].name;
            secondCol.disabled = true;
          }
          secondCol.popOverData.data = this.specimen;
        } else {
          secondCol.value = "";
          this.search_item = true;
          firstCol.alertsErrorMassage = true;
          firstCol.alertsErrorMassage = "Please select test from the list";
        }
      } else {
        secondCol.value = "";
      }
      if (specimenValue && !specimenMatches && !secondCol.disabled) {
        secondCol.alertsErrorMassage = true;
        secondCol.alertsErrorMassage = "Please select specimen from the list";
      }
      return testMatches && (specimenMatches || secondCol.disabled);
    },
    async addNewRow() {
      if (await this.validateRowData()) {
        this.saveTest();
        this.investigations[0].data.rowData[0].colData[0].value = "";
        this.investigations[0].data.rowData[0].colData[1].value = "";
        this.search_item = false;
        this.display_item = true;
        this.addItemButton = true;
      }
      this.investigations[0].data.rowData[0].colData[0].popOverData.data = [];
    },
    async saveTest() {
      const investigationInstance = new LabOrder();
      await investigationInstance.postActivities(this.patient.patientID, [
        {
          concept_id: this.test[0].concept_id,
          name: this.inputFields[0].value,
          specimen: this.inputFields[1].value,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(this.inputFields[1].value)
        }
      ]);
      this.orders = await OrderService.getOrders(this.patient.patientID);
    },
    buildResults() {
      this.inputFields[1].value.charAt(0);
      parseInt(this.inputFields[1].value.substring(1));
    },
    async handleInputData(col) {
      if (col.inputHeader == "Test") {
        this.popoverOpen = true;
        this.testData = await this.filterTest(col.value);
        this.investigations[0].data.rowData[0].colData[0].popOverData.data = this.testData;
      }
      this.validateRowData();
    },
    async filterTest(name) {
      return await this.labOrders.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    },
    async filterSpecimen(name) {
      if (this.specimen[0]?.name && name) {
        return await this.specimen.filter((item) => item?.name.toLowerCase().includes(name.toLowerCase()));
      } else {
        return [];
      }
    },
    setTest(value) {
      this.selectedText = value.name;
      if (this.inputFields[0].inputHeader == "Test") {
        this.investigations[0].data.rowData[0].colData[0].value = value.name;
      } else {
        this.investigations[0].data.rowData[0].colData[1].value = value.name;
      }
      this.updateInvestigationsStores();
    },
    async openDeletePopover(e) {
      const deleteConfirmed = await popoverConfirmation(`Do you want to delete ${e[1]} ?`, e[0]);
      if (deleteConfirmed) {
        this.deleteTest(e[1]);
      }
    },
    deleteTest(test) {
      this.investigations[0].selectedData = this.investigations[0].selectedData.filter((item) => item.display[0] !== test);
      this.updateInvestigationsStores();
    },
    editTest(test) {
      this.deleteTest(test[0]);
      this.selectedText = test[0];
      this.investigations[0].data.rowData[0].colData[0].value = test[0];
      this.investigations[0].data.rowData[0].colData[1].value = test[1];
      this.addItemButton = false;
      this.search_item = true;
      this.updateInvestigationsStores();
    },
    setDashedBox() {
      if (this.inputFields[0].value || this.inputFields[1].value) {
        this.addItemButton = false;
        this.search_item = true;
        this.no_item = false;
      }
      if (this.investigations[0].selectedData.length > 0) {
        this.display_item = true;
        this.no_item = false;
      } else if (!this.search_item) {
        this.no_item = true;
      }
    }
  }
});

const _hoisted_1$J = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2$l = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$c = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_4$9 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_5$9 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_6$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_7$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_8$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_9$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_10$1 = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Birth", -1)
                    ])]),
                    _: 1
                  }),
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "due_date" }, "2023-04-13", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_DynamicButton, {
                      color: "danger",
                      name: "Overdue",
                      size: "small"
                    })
                  ])
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_1$J, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.birthImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode("6 Weeks", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_2$l, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.sixWeeksImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode("10 Weeks", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_3$c, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.tenWeeksImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createTextVNode("14 Weeks", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_4$9, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.fourteenWeeksImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createTextVNode("5 - 22 Months", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_5$9, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.fiveToTwentyTwoImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode(" 1 Year - 5 Years", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_6$1, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.oneYearToFiveYearsImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                      createTextVNode("9 - 14 Years For Girls", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_7$1, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.nineToFourteenYearsImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[8] || (_cache[8] = [
                      createTextVNode("12 Years Above", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_8$1, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.twelveYearsAboveImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[9] || (_cache[9] = [
                      createTextVNode("15 Years (for pregnant women and women of childbearing age up to 45 years )", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_9$1, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.fifteenYearsImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[10] || (_cache[10] = [
                      createTextVNode("18 Years Above", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_10$1, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.eighteenYearsAboveImmunization,
                  "onUpdate:inputValue": _ctx.handleInputData,
                  "onUpdate:selected": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512)
    ]),
    _: 1
  });
}
const ImmunizationServices = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$J], ["__scopeId", "data-v-432c8ad2"]]);

const initialDischargeWoman = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What is the discharge status of the woman?",
        selectedValue: "",
        class: "bold",
        name: "Discharge status of woman",
        displayNext: "Discharged alive"
      },
      data: [
        {
          name: "Discharged alive",
          value: "Discharged alive",
          colSize: "5"
        },
        {
          name: "Absconded",
          value: "Absconded",
          colSize: "5"
        },
        {
          name: "Referred out",
          value: "Referred out",
          colSize: "5"
        },
        {
          name: "Death",
          value: "Death",
          colSize: "5"
        }
      ]
    }
  },
  {
    childName: "Discharge status of woman",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other mode of delivery notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Discharge status of woman",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Postpartum family planning counselling done?",
        selectedValue: "",
        name: "Postpartum family planning counselling",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Discharge status of woman",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Postpartum family planning methods provided?",
        selectedValue: "",
        name: "Postpartum family planning methods provided",
        class: "bold",
        displayNone: true,
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Postpartum family planning methods provided",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Select the method provided",
        selectedValue: "",
        name: "Postpartum family planning method",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "IUCD",
          value: "IUCD",
          colSize: "3"
        },
        {
          name: "BTL",
          value: "BTL",
          colSize: "3"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    db_data: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    selectdData: [],
    displayData: [],
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Facility for ART",
              icon: icons.search,
              value: "",
              name: "facility for art",
              popOver: true,
              valueType: "text",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              placeholder: "Search for facility",
              popOverData: {
                filterData: false,
                data: []
              },
              id: "",
              idName: "facility_id",
              style: {
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Date of Referral*",
              value: "",
              name: "Date of referral",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date",
              style: {
                width: "48%",
                marginRight: "4%"
              }
            },
            {
              inputHeader: "Time of Referral*",
              value: "",
              name: "Time of referral",
              icon: icons.timePicker,
              required: true,
              valueType: "text",
              eventType: "input",
              isTimePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick time",
              style: {
                width: "48%"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Reason for Referral (Free text)",
              value: "",
              name: "reason for referral",
              required: true,
              valueType: "text",
              eventType: "input",
              isTextArea: true,
              alertsErrorMassage: "",
              placeholder: "Enter reason for referral",
              style: {
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Woman's Condition on Referral",
              value: "",
              name: "condition on referral",
              required: true,
              valueType: "text",
              eventType: "input",
              alertsErrorMassage: "",
              placeholder: "Describe condition on referral",
              style: {
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    db_data: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    selectdData: [],
    displayData: [],
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Date of Death*",
              value: "",
              name: "Date of Death",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date",
              style: {
                width: "48%",
                marginRight: "4%"
              }
            },
            {
              inputHeader: "Time of Death*",
              value: "",
              name: "Time of Death",
              icon: icons.timePicker,
              required: true,
              valueType: "text",
              eventType: "input",
              isTimePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick time",
              style: {
                width: "48%"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Cause of death (Free text)",
              value: "",
              name: "reason for referral",
              required: true,
              valueType: "text",
              eventType: "input",
              isTextArea: true,
              alertsErrorMassage: "",
              placeholder: "Enter reason for referral",
              style: {
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        }
      ]
    }
  }
];
const useDischargeWomanStore = defineStore("dischargeWomanStore", {
  state: () => ({
    dischargeWoman: [...initialDischargeWoman]
  }),
  actions: {
    setDischargeWoman(data) {
      this.dischargeWoman = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialDischargeWoman);
      return [...data];
    }
  }
  //
});

function validateField$3(data, fieldName, value) {
  const validationRules = {
    // LMNP: () => Validation.required(value),
    Gravida: () => MultValidations$3(fieldName, value),
    lmnpEED: () => StandardValidations.required(value),
    Stillbirths: () => MultValidations$3(fieldName, value),
    LiveBirths: () => StandardValidations.required(value),
    Parity: () => StandardValidations.required(value),
    "Abortions/Miscarriages": () => MultValidations$3(fieldName, value),
    // lmnpDate: () => MultValidations(fieldName, value),
    // lmnpGestationAge: () => Validation.required(value),
    // LNMPKnown: () => Validation.required(value),
    // UltrasoundDone: () => Validation.required(value),
    // UltrasoundDate: () => MultValidations(fieldName, value),
    specify: () => MultValidations$3(fieldName, value),
    // GestationAgeByPalpationKnown: () => Validation.required(value),
    // "Gestation age by palpation": () => MultValidations(fieldName, value),
    // GestationAgeUsed: () => Validation.required(value),
    TetanusDosesForImmunisation: () => StandardValidations.required(value),
    NumberOfUnderImmunisedDoses: () => StandardValidations.required(value),
    tt1Date: () => StandardValidations.required(value),
    tt2Date: () => StandardValidations.required(value),
    tt3Date: () => StandardValidations.required(value),
    tt4Date: () => StandardValidations.required(value),
    tt5Date: () => StandardValidations.required(value),
    tt6Date: () => StandardValidations.required(value),
    tt7Date: () => StandardValidations.required(value),
    tt8Date: () => StandardValidations.required(value),
    tt9Date: () => StandardValidations.required(value),
    tt10Date: () => StandardValidations.required(value),
    tt11Date: () => StandardValidations.required(value),
    tt12Date: () => StandardValidations.required(value),
    tt13Date: () => StandardValidations.required(value),
    tt14Date: () => StandardValidations.required(value),
    tt15Date: () => StandardValidations.required(value),
    ReasonTTVnotConducted: () => StandardValidations.required(value),
    ExistingChronicConditions: () => StandardValidations.required(value),
    Medications: () => StandardValidations.required(value),
    DailyCaffeineIntake: () => StandardValidations.required(value),
    CurrentMedications: () => StandardValidations.required(value),
    SubstanceAbuse: () => StandardValidations.required(value),
    SecondHandSmoke: () => StandardValidations.required(value),
    "Who does the client live with": () => StandardValidations.required(value)
  };
  const isValid = validationRules[fieldName]?.() == null;
  modifyFieldValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyRadioValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyCheckboxValue(data, fieldName, "alertsErrorMassage", !isValid);
  if (!isValid) {
    modifyFieldValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyRadioValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyCheckboxValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
  }
  return isValid;
}
function MultValidations$3(fieldName, value) {
  if (fieldName === "Gravida") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 1, 15);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Abortions/Miscarriages") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 0, 15);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Stillbirths") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 0, 15);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "lmnpDate") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const DateError = StandardValidations.isDate(value);
    if (DateError !== null) {
      return DateError;
    }
  } else if (fieldName === "UltrasoundDate") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const DateError = StandardValidations.isDate(value);
    if (DateError !== null) {
      return DateError;
    }
  } else if (fieldName === "specify") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 0, 42);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Gestation age by palpation") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 4, 36);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else {
    return null;
  }
  return null;
}

const _sfc_main$I = defineComponent({
  name: "DeliveryDetails",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: [],
      facilityData: []
    };
  },
  computed: {
    ...mapState(useDischargeWomanStore, ["dischargeWoman"])
  },
  mounted() {
    const dischargeWoman = useDischargeWomanStore();
    this.initialData = dischargeWoman.getInitial();
    this.handleSelection();
  },
  watch: {
    dischargeWoman: {
      handler(col) {
        this.handleSelection();
        this.handleInputData(col);
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    validationRules(col) {
      return validateField$3(this.dischargeWoman, col.name, this[col.name]);
    },
    async handleInputData(col) {
      this.validationRules(col);
      if (col.inputHeader == "Facility for ART") {
        this.facilityData = await this.getFacility(col.value);
        modifyFieldValue(this.dischargeWoman, "facility for art", "popOverData", {
          filterData: false,
          data: this.facilityData
        });
      }
    },
    async getFacility(value) {
      const data = await LocationService.getFacilities({ name: value });
      return data;
    },
    handleSelection() {
      if (getRadioSelectedValue(this.dischargeWoman, "Discharge status of woman") == "Referred out") {
        modifyFieldValue(this.dischargeWoman, "facility for art", "displayNone", false);
      } else {
        modifyFieldValue(this.dischargeWoman, "facility for art", "displayNone", true);
      }
      if (getRadioSelectedValue(this.dischargeWoman, "Discharge status of woman") == "Death") {
        modifyFieldValue(this.dischargeWoman, "Date of Death", "displayNone", false);
      } else {
        modifyFieldValue(this.dischargeWoman, "Date of Death", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$I = { class: "container" };
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$I, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.dischargeWoman,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const DischargeWoman = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$I], ["__scopeId", "data-v-c08e611c"]]);

const initialPNCEnd = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Reason for ending PNC?",
        selectedValue: "",
        name: "Reason for ending PNC",
        class: "bold"
      },
      data: [
        {
          name: "Refer",
          value: "Refer",
          colSize: "8"
        },
        {
          name: "Discharge home",
          value: "Discharge home",
          colSize: "8"
        },
        {
          name: "Death",
          value: "Death",
          colSize: "8"
        },
        {
          name: "Lost",
          value: "Lost",
          colSize: "8"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    db_data: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    selectdData: [],
    displayData: [],
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Facility for ART",
              icon: icons.search,
              value: "",
              name: "facility for art",
              popOver: true,
              valueType: "text",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              placeholder: "Search for facility",
              popOverData: {
                filterData: false,
                data: []
              },
              id: "",
              idName: "facility_id",
              style: {
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Date of Referral*",
              value: "",
              name: "Date of referral",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date",
              style: {
                width: "48%",
                marginRight: "4%"
              }
            },
            {
              inputHeader: "Time of Referral*",
              value: "",
              name: "Time of referral",
              icon: icons.timePicker,
              required: true,
              valueType: "text",
              eventType: "input",
              isTimePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick time",
              style: {
                width: "48%"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Reason for Referral (Free text)",
              value: "",
              name: "reason for referral",
              required: true,
              valueType: "text",
              eventType: "input",
              isTextArea: true,
              alertsErrorMassage: "",
              placeholder: "Enter reason for referral",
              style: {
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Woman's Condition on Referral",
              value: "",
              name: "condition on referral",
              required: true,
              valueType: "text",
              eventType: "input",
              alertsErrorMassage: "",
              placeholder: "Describe condition on referral",
              style: {
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    db_data: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    selectdData: [],
    displayData: [],
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Date of Death*",
              value: "",
              name: "Date of Death",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date",
              style: {
                width: "48%",
                marginRight: "4%"
              }
            },
            {
              inputHeader: "Time of Death*",
              value: "",
              name: "Time of Death",
              icon: icons.timePicker,
              required: true,
              valueType: "text",
              eventType: "input",
              isTimePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick time",
              style: {
                width: "48%"
              }
            }
          ]
        },
        {
          colData: [
            {
              inputHeader: "Cause of death (Free text)",
              value: "",
              name: "reason for referral",
              required: true,
              valueType: "text",
              eventType: "input",
              isTextArea: true,
              alertsErrorMassage: "",
              placeholder: "Enter reason for referral",
              style: {
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }
            }
          ]
        }
      ]
    }
  }
];
const usePNCEndStore = defineStore("pncEndStore", {
  state: () => ({
    pncEnd: [...initialPNCEnd]
  }),
  actions: {
    setPNCend(data) {
      this.pncEnd = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialPNCEnd);
      return [...data];
    }
  }
  //
});

const _sfc_main$H = defineComponent({
  name: "PNCEnd",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(usePNCEndStore, ["pncEnd"])
  },
  mounted() {
    const pncEnd = usePNCEndStore();
    this.initialData = pncEnd.getInitial();
    this.handleSelection();
  },
  watch: {
    pncEnd: {
      handler(col) {
        this.handleSelection();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleSelection() {
      if (getRadioSelectedValue(this.pncEnd, "Reason for ending PNC") == "Refer") {
        modifyFieldValue(this.pncEnd, "facility for art", "displayNone", false);
      } else {
        modifyFieldValue(this.pncEnd, "facility for art", "displayNone", true);
      }
      if (getRadioSelectedValue(this.pncEnd, "Reason for ending PNC") == "Death") {
        modifyFieldValue(this.pncEnd, "Date of Death", "displayNone", false);
      } else {
        modifyFieldValue(this.pncEnd, "Date of Death", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$H = { class: "container" };
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$H, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.pncEnd,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const PNCEnd = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$H], ["__scopeId", "data-v-d88152a7"]]);

const initialBabyStatusDetails = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What is the status of the baby?*",
        selectedValue: "",
        name: "Status of baby",
        class: "bold",
        displayNext: "Alive"
      },
      data: [
        {
          name: "Alive",
          value: "Alive",
          colSize: "2.5"
        },
        {
          name: "Dead",
          value: "Dead",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Full name of the baby*",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Full name of the baby",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Baby sex?*",
        selectedValue: "",
        name: "Sex",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Male",
          value: "Male",
          colSize: "2.5"
        },
        {
          name: "Female",
          value: "Female",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Birth weight*",
              unit: "Grams",
              icon: icons.weight,
              value: "",
              valueType: "text",
              name: "Weight",
              required: true,
              eventType: "input",
              inputWidth: ""
            },
            {
              inputHeader: "Current weight*",
              unit: "Grams",
              icon: icons.weight,
              valueType: "text",
              value: "",
              name: "Current weight",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Is the birth weight low?",
        class: "bold",
        name: "Low birth weight",
        selectedValue: "",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Prematurity/Kangaroo?",
        selectedValue: "",
        class: "bold",
        name: "Prematurity/Kangaroo",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What is the condition at birth?",
        name: "Birth condition",
        selectedValue: "",
        class: "bold",
        displayNext: "Asphyxia",
        displayNone: true
      },
      data: [
        {
          name: "Very well",
          value: "Very well",
          colSize: "2.5"
        },
        {
          name: "Asphyxia",
          value: "Asphyxia",
          colSize: "4"
        }
      ]
    }
  },
  {
    childName: "Birth condition",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Resuscitation tempted",
        selectedValue: "",
        class: "bold",
        name: "Resuscitation attempt",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Is the visit within",
        selectedValue: "",
        name: "Is the visit within",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Up to 48 hrs or before discharge",
          value: "Up to 48 hrs or before discharge",
          colSize: "7"
        },
        {
          name: "2-7 days",
          value: "2-7 days",
          colSize: "7"
        },
        {
          name: "8-42 days",
          value: "8-42 days",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "What type immunisation has been given?",
        selectedValue: "",
        name: "Immunisation given",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "BCG",
          value: "bcg",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "BCG",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Date BCG given",
              unit: "",
              icon: icons.calenderPrimary,
              value: "",
              valueType: "text",
              name: "Date BCG given",
              required: true,
              eventType: "input",
              datePopover: true,
              inputWidth: "",
              placeholder: "Pick holder",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Immunisation given",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Polio",
          value: "polio",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Polio",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Date polio given",
              unit: "",
              icon: icons.calenderPrimary,
              value: "",
              valueType: "text",
              name: "Date polio given",
              required: true,
              eventType: "input",
              datePopover: true,
              inputWidth: "",
              placeholder: "Pick holder",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Tetracycline eye ointment  given?",
        selectedValue: "",
        name: "Tetracycline eye ointment",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Cord care (Chlorhexidine) used?",
        selectedValue: "",
        name: "Cord care",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Vitamin K given?",
        selectedValue: "",
        class: "bold",
        name: "Vitamin K given",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Danger signs",
        selectedValue: "",
        name: "Danger signs",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Not able to feed",
          value: "not able to feed",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Fever (>37.5C)",
          value: "fever",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Hypothermia",
          value: "Hypothermia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Convulsions",
          value: "convulsions",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Lethargic",
          value: "lethargic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Chest in-drawing",
          value: "chest in-drawing",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Fast breathing",
          value: "fast breathing",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Eye discharge",
          value: "eye discharge",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Signs of cord infection",
          value: "signs of cord infection",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Jaundice",
          value: "jaundice",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Skin rashes",
          value: "skin rashes",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Other danger signs",
          value: "Other danger signs",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other danger signs",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other danger signs notes",
              required: true,
              eventType: "input",
              inputWidth: "100%"
            }
          ]
        }
      ]
    }
  },
  {
    childName: "None",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Intervention notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Nevirapine given?",
        selectedValue: "",
        class: "bold",
        name: "Nevirapine given",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Cotrimoxazole prophylaxis?",
        selectedValue: "",
        name: "Cotrimoxazole prophylaxis",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  }
];
const initialDangerSigns = [];
const useBabyStatusStore = defineStore("babyStatusStore", {
  state: () => ({
    babyStatusDetails: [...initialBabyStatusDetails],
    dangerSigns: [...initialDangerSigns]
  }),
  actions: {
    setBabyStatusDetails(data) {
      this.babyStatusDetails = data;
    },
    setBabyDangerSigns(data) {
      this.dangerSigns = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialBabyStatusDetails);
      return [...data];
    },
    getInitial1() {
      const data = lodashExports.cloneDeep(initialDangerSigns);
      return [...data];
    }
  }
  //
});

function validateField$2(data, fieldName, value) {
  const validationRules = {
    "Birth weight": () => MultValidations$2(fieldName, value),
    "Current weight": () => MultValidations$2(fieldName, value),
    "Full name of the baby": () => MultValidations$2(fieldName, value),
    "Date BCG given": () => MultValidations$2(fieldName, value),
    "Respiratory rate": () => MultValidations$2(fieldName, value)
  };
  const isValid = validationRules[fieldName]?.() == null;
  modifyFieldValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyRadioValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyCheckboxValue(data, fieldName, "alertsErrorMassage", !isValid);
  if (!isValid) {
    modifyFieldValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyRadioValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyCheckboxValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
  }
  return isValid;
}
function MultValidations$2(fieldName, value) {
  if (fieldName === "Systolic blood pressure") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 20, 140);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Diastolic blood pressure") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 20, 90);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Pulse") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 50, 200);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Temperature") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 35, 42);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Respiratory rate") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 12, 16);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else {
    return null;
  }
  return null;
}

const _sfc_main$G = defineComponent({
  name: "BabyStatus",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: [],
      initialData1: []
    };
  },
  computed: {
    ...mapState(useBabyStatusStore, ["babyStatusDetails"]),
    ...mapState(useBabyStatusStore, ["dangerSigns"]),
    "Birth weight"() {
      return getFieldValue(this.babyStatusDetails, "Birth weight", "value");
    }
  },
  mounted() {
    const babyStatusDetails = useBabyStatusStore();
    const dangerSigns = useBabyStatusStore();
    this.initialData = babyStatusDetails.getInitial();
    this.initialData1 = dangerSigns.getInitial1();
    this.validateRowData({});
  },
  watch: {},
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    validationRules(event) {
      return validateField$2(this.babyStatusDetails, event.name, this[event.name]);
    },
    //Handling input data on Profile-Past Obstetric history
    async handleInputData(event) {
      this.validateRowData(event);
    },
    // Validations
    validateRowData(event) {
      this.validationRules(event);
    }
  }
});

const _hoisted_1$G = { class: "container" };
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$G, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.babyStatusDetails,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const BabyStatus = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$G], ["__scopeId", "data-v-906f94af"]]);

const initialWardDangerSigns = [
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Danger signs*",
        selectedValue: "",
        class: "bold",
        name: "Danger signs"
      },
      data: [
        {
          name: "Bleeding vaginally",
          value: "bleeding vaginally",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Central cyanosis",
          value: "central cyanosis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs"
      },
      data: [
        {
          name: "Convulsions",
          value: "convulsions",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Severe vomiting",
          value: "severe vomiting",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs"
      },
      data: [
        {
          name: "Fever",
          value: "fever",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Visual disturbance",
          value: "visual disturbance",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs"
      },
      data: [
        {
          name: "Severe abdominal pain",
          value: "severe abdominal pain",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Unconscious",
          value: "unconscious",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs"
      },
      data: [
        {
          name: "Other danger signs",
          value: "Other danger signs",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "No danger signs",
          value: "no danger signs",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other danger signs",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other danger signs notes",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  }
];
const initialVitals$2 = [
  {
    sectionHeader: "Blood pressure",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Systolic Pressure*",
              unit: "mmHg",
              icon: icons.systolicPressure,
              value: "",
              valueType: "text",
              name: "Systolic blood pressure",
              required: true,
              eventType: "input"
            },
            {
              inputHeader: "Diastolic pressure*",
              unit: "mmHg",
              icon: icons.diastolicPressure,
              value: "",
              valueType: "text",
              name: "Diastolic blood pressure",
              required: true,
              eventType: "input"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ],
    previousView: {
      name: "vitals"
    }
  },
  {
    sectionHeader: "Pulse rate",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Pulse rate*",
              unit: "BMP",
              icon: icons.pulse,
              value: "",
              valueType: "text",
              name: "Pulse",
              eventType: "input"
            }
          ]
        }
      ]
    },
    previousView: {
      name: "vitals"
    }
  },
  {
    sectionHeader: "Temperature",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Temperature*",
              unit: "C",
              icon: icons.temprature,
              value: "",
              valueType: "text",
              name: "Temperature",
              eventType: "input"
            }
          ]
        }
      ]
    },
    previousView: {
      name: "vitals"
    }
  },
  {
    sectionHeader: "Respiratory rate",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Respiratory rate*",
              unit: "BPM",
              icon: icons.respiratory,
              valueType: "text",
              value: "",
              name: "Respiratory rate",
              eventType: "input"
            }
          ]
        }
      ]
    },
    previousView: {
      name: "vitals"
    }
  },
  {
    sectionHeader: "Oxygen saturation",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Oxygen saturation*",
              unit: "%",
              icon: icons.oxgenStaturation,
              valueType: "text",
              value: "",
              name: "Oxygen saturation",
              eventType: "input"
            }
          ]
        }
      ]
    },
    previousView: {
      name: "vitals"
    }
  }
];
const initialOtherexams = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Status of uterus",
        selectedValue: "",
        name: "Status of uterus",
        displayNext: "Other status",
        class: "bold"
      },
      data: [
        {
          name: "Involuted",
          value: "involuted",
          colSize: "4.001"
        },
        {
          name: "Sub-involuted",
          value: "Sub-involuted",
          colSize: "4.001"
        },
        {
          name: "Other status",
          value: "Other status",
          colSize: "5"
        }
      ]
    }
  },
  {
    childName: "Status of uterus",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Status of uterus notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectedData: [],
    childName: "",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was the intervention given?",
        selectedValue: "",
        name: "Intervention given",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2"
        },
        {
          name: "No",
          value: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    childName: "Intervention given",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Describe the intervention given?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Interventions provided notes",
              required: true,
              eventType: "input",
              inputWidth: "",
              displayNone: true
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    checkboxBtnContent: {
      header: {
        title: "Type of lochia",
        selectedValue: "",
        name: "Status of lochia",
        class: "bold",
        displayNext: "Other status"
      },
      data: [
        {
          name: "Mild",
          value: "mild",
          colSize: "4.001"
        },
        {
          name: "Moderate",
          value: "moderate",
          colSize: "4.001"
        },
        {
          name: "Heavy",
          value: "heavy",
          colSize: "4.001"
        },
        {
          name: "Offensive smell",
          value: "Offensive smell",
          colSize: "4.0001"
        },
        {
          name: "Other status",
          value: "Other status",
          colSize: "5"
        }
      ]
    }
  },
  {
    childName: "Status of lochia",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Status of lochia notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was the intervention given?",
        selectedValue: "",
        name: "Intervention for Lochia",
        displayNext: "Yes",
        class: "bold"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2"
        },
        {
          name: "No",
          value: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    childName: "Intervention for Lochia",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention given?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Intervention for Lochia notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Episiotomy/tear present?",
        selectedValue: "",
        name: "Episiotomy/tear",
        class: "bold",
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2"
        },
        {
          name: "No",
          value: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    childName: "Episiotomy/tear",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Condition of episiotomy/tear?",
        selectedValue: "",
        name: "Condition of episiotomy/tear",
        class: "bold",
        displayNone: true,
        displayNext: "Infected and gaped"
      },
      data: [
        {
          name: "Intact",
          value: "intact",
          colSize: "4.001"
        },
        {
          name: "Gaped",
          value: "gaped",
          colSize: "4.001"
        },
        {
          name: "Infected",
          value: "infected",
          colSize: "4.001"
        },
        {
          name: "Infected and gaped",
          value: "infected and gaped",
          colSize: "4.001"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Episiotomy Reason",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Condition of episiotomy/tear",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was the intervention given?",
        selectedValue: "",
        name: "Intervention on episiotomy/tear",
        class: "bold",
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention given?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Intervention on tear/episiotomy notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Are any of the postnatal complications present for the mother",
        selectedValue: "",
        class: "bold",
        name: "Postnatal complications"
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Sepsis",
          value: "sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Postnatal complications"
      },
      data: [
        {
          name: "Anemia",
          value: "anemia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Postpartum hemorrhage",
          value: "postpartum hemorrhage",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Postnatal complications"
      },
      data: [
        {
          name: "Pre-eclampsia",
          value: "pre-eclampsia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Eclampsia",
          value: "eclampsia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Postnatal complications"
      },
      data: [
        {
          name: "Breast engorgement",
          value: "breast engorgement",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Other complications",
          value: "Other complications",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other complications",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "text",
              icon: icons.editPen,
              valueType: "text",
              value: "",
              name: "Other postnatal complications notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was the intervention given for the complications?",
        selectedValue: "",
        name: "Interventions for complications",
        displayNext: "Yes",
        class: "bold"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Interventions for complications",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention given?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Intervention on complications notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    childName: "Interventions for complications",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Vitamin A supplementation given?",
        selectedValue: "",
        name: "Vitamin A supplementation",
        class: "bold"
        // displayNone: true,
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Breast feeding?",
        selectedValue: "",
        class: "bold",
        name: "Breast feeding"
      },
      data: [
        {
          name: "Breastfed exclusively",
          value: "Breastfed exclusively",
          colSize: "5"
        },
        {
          name: "Non exclusive",
          value: "non exclusive",
          colSize: "5"
        },
        {
          name: "Not breastfeeding",
          value: "not breastfeeding",
          colSize: "5"
        }
      ]
    }
  }
];
const usePostnatalWardStayStore = defineStore("postnatalWardStayStore", {
  state: () => ({
    dangerSigns: [...initialWardDangerSigns],
    vitals: [...initialVitals$2],
    otherExams: [...initialOtherexams]
  }),
  actions: {
    setDangerSigns(data) {
      this.dangerSigns = data;
    },
    setvitals(data) {
      this.vitals = data;
    },
    setOtherExams(data) {
      this.otherExams = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialWardDangerSigns);
      return [...data];
    },
    getInitial1() {
      const data = lodashExports.cloneDeep(initialVitals$2);
      return [...data];
    },
    getInitial2() {
      const data = lodashExports.cloneDeep(initialOtherexams);
      return [...data];
    }
  }
  //
});

const _sfc_main$F = defineComponent({
  name: "DeliveryDetails",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(usePostnatalWardStayStore, ["dangerSigns"])
  },
  mounted() {
    const dangerSigns = usePostnatalWardStayStore();
    this.initialData = dangerSigns.getInitial();
    this.handleDangerSigns();
  },
  watch: {
    dangerSigns: {
      handler() {
        this.handleDangerSigns();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleDangerSigns() {
      const checkBoxes = [
        "Bleeding vaginally",
        "Central cyanosis",
        "Preterm labour",
        "Severe vomiting",
        "Fever",
        "Visual disturbance",
        "Severe abdominal pain",
        "Unconscious",
        "Other danger signs"
      ];
      if (getCheckboxSelectedValue(this.dangerSigns, "No danger signs")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.dangerSigns, checkbox, "checked", false);
          modifyCheckboxValue(this.dangerSigns, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.dangerSigns, checkbox, "disabled", false);
        });
      }
    }
  }
});

const _hoisted_1$F = { class: "container" };
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$F, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.dangerSigns,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const DangerSigns = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F], ["__scopeId", "data-v-b3265856"]]);

const initialVitals$1 = [
  {
    isFinishBtn: false,
    validationStatus: "",
    sectionHeader: "Height and weight",
    actionBtn: "Finish and Save",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Height*",
              unit: "cm",
              icon: icons.height,
              value: "",
              name: "Height (cm)",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false
            },
            {
              inputHeader: "Weight*",
              unit: "kg",
              icon: icons.weight,
              value: "",
              name: "Weight",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false
            },
            {
              inputHeader: "Pre-gestation weight",
              unit: "kg",
              icon: icons.weight,
              value: "",
              name: "Pre-gestation weight",
              valueType: "number",
              required: true,
              eventType: "input",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ],
    previousView: {
      name: "vitals"
    }
  },
  {
    classDash: "dashed_bottom_border",
    selectedData: [],
    sideColSize: 3.8,
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: " "
      },
      data: [
        {
          colSize: "5.8",
          name: "Height And Weight Not Done",
          value: "Height And Weight Not Done",
          checked: false,
          displayNone: false
        }
      ],
      inputFields: [
        {
          inputHeader: "Specify Reason",
          icon: icons.search,
          isMultiSelect: true,
          popOver: true,
          value: "",
          name: "Height Weight Reason",
          multiSelectData: [
            {
              id: 1,
              name: "Patient uncooperative"
            },
            {
              id: 2,
              name: "Machine not working"
            },
            {
              id: 3,
              name: "Machine not available"
            }
          ],
          eventType: "input",
          required: true,
          id: "",
          idName: "district_id",
          displayNone: true
        }
      ]
    }
  },
  {
    sectionHeader: "Blood pressure",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Systolic Pressure*",
              unit: "mmHg",
              icon: icons.systolicPressure,
              value: "",
              name: "Systolic",
              required: true,
              eventType: "input",
              disabled: false
            },
            {
              inputHeader: "Diastolic pressure*",
              unit: "mmHg",
              icon: icons.diastolicPressure,
              value: "",
              name: "Diastolic",
              required: true,
              eventType: "input",
              disabled: false
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ],
    previousView: {
      name: "vitals"
    }
  },
  {
    classDash: "dashed_bottom_border",
    selectedData: [],
    sideColSize: 3.8,
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: " ",
        name: "Primary diagnosis"
      },
      data: [
        {
          colSize: "5.8",
          name: "Blood Pressure Not Done",
          value: "Blood Pressure Not Done",
          checked: false,
          displayNone: false
        }
      ],
      inputFields: [
        {
          inputHeader: "Specify Reason",
          icon: icons.search,
          isMultiSelect: true,
          popOver: true,
          value: "",
          name: "Blood Pressure Reason",
          multiSelectData: [
            {
              id: 1,
              name: "Patient uncooperative"
            },
            {
              id: 2,
              name: "Machine not working"
            },
            {
              id: 3,
              name: "Machine not available"
            }
          ],
          eventType: "input",
          required: true,
          alertsErrorMassage: "",
          id: "",
          idName: "district_id",
          displayNone: true
        }
      ]
    }
  },
  {
    sectionHeader: "Temperature and rates",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Temperature",
              unit: "C",
              icon: icons.temprature,
              value: "",
              name: "Temperature",
              eventType: "input"
            },
            {
              inputHeader: "Pulse rate*",
              unit: "BMP",
              icon: icons.pulse,
              value: "",
              name: "Pulse",
              eventType: "input"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ]
  },
  {
    classDash: "dashed_bottom_border",
    selectedData: [],
    sideColSize: 3.8,
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: " ",
        name: "Primary diagnosis"
      },
      data: [
        {
          colSize: "5.8",
          name: "Pulse Rate Not Done",
          value: "Pulse Rate Not Done",
          checked: false,
          displayNone: false
        }
      ],
      inputFields: [
        {
          inputHeader: "Specify Reason",
          icon: icons.search,
          isMultiSelect: true,
          popOver: true,
          value: "",
          name: "Pulse Rate Reason",
          multiSelectData: [
            {
              id: 1,
              name: "Patient uncooperative"
            },
            {
              id: 2,
              name: "Machine not working"
            },
            {
              id: 3,
              name: "Machine not available"
            }
          ],
          eventType: "input",
          required: true,
          alertsErrorMassage: "",
          id: "",
          idName: "district_id",
          displayNone: true
        }
      ]
    }
  },
  {
    sectionHeader: "null",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Respiratory rate",
              unit: "BMP",
              icon: icons.respiratory,
              value: "",
              name: "Respiratory rate",
              eventType: "input"
            },
            {
              inputHeader: "Oxygen saturation",
              unit: "%",
              icon: icons.oxgenStaturation,
              value: "",
              name: "SAO2",
              eventType: "input"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ]
  }
];
const useANCVitalsStore = defineStore("vitalsStore", {
  state: () => ({
    ANCVitals: [...initialVitals$1]
  }),
  actions: {
    setVitals(data) {
      this.ANCVitals = data;
    },
    getInitialVitals() {
      const data = lodashExports.cloneDeep(initialVitals$1);
      return [...data];
    }
  }
});

function validateField$1(data, fieldName, value) {
  const validationRules = {
    "Systolic blood pressure": () => MultValidations$1(fieldName, value),
    "Diastolic blood pressure": () => MultValidations$1(fieldName, value),
    Pulse: () => MultValidations$1(fieldName, value),
    Temperature: () => MultValidations$1(fieldName, value),
    "Respiratory rate": () => MultValidations$1(fieldName, value)
  };
  const isValid = validationRules[fieldName]?.() == null;
  modifyFieldValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyRadioValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyCheckboxValue(data, fieldName, "alertsErrorMassage", !isValid);
  if (!isValid) {
    modifyFieldValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyRadioValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyCheckboxValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
  }
  return isValid;
}
function MultValidations$1(fieldName, value) {
  if (fieldName === "Systolic blood pressure") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 20, 140);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Diastolic blood pressure") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 20, 90);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Pulse") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 50, 200);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Temperature") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 35, 42);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Respiratory rate") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 12, 16);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else {
    return null;
  }
  return null;
}

const _sfc_main$E = defineComponent({
  name: "DeliveryDetails",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      BMI: {},
      BPStatus: {},
      hasValidationErrors: [],
      vitalsInstance: {},
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(usePostnatalWardStayStore, ["vitals"]),
    ...mapState(useDemographicsStore, ["patient"]),
    "Systolic blood pressure"() {
      return getFieldValue(this.vitals, "Systolic blood pressure", "value");
    },
    "Diastolic blood pressure"() {
      return getFieldValue(this.vitals, "Diastolic blood pressure", "value");
    },
    Pulse() {
      return getFieldValue(this.vitals, "Pulse", "value");
    },
    Temperature() {
      return getFieldValue(this.vitals, "Temperature", "value");
    },
    "Respiratory rate"() {
      return getFieldValue(this.vitals, "Respiratory rate", "value");
    }
  },
  mounted() {
    const vitals = usePostnatalWardStayStore();
    this.initialData = vitals.getInitial1();
    this.validateRowData({});
  },
  watch: {},
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    validationRules(event) {
      return validateField$1(this.vitals, event.name, this[event.name]);
    },
    //Handling input data on Profile-Past Obstetric history
    async handleInputData(event) {
      await this.validateRowData(event);
    },
    // Validations
    // validateRowData(event: any) {
    //   this.validationRules(event)
    // },
    updateVitalsStores() {
      const vitalsStore = useANCVitalsStore();
      vitalsStore.setVitals(this.vitals);
    },
    async validateRowData(inputData) {
      this.validationRules(inputData);
    },
    async setBMI(weight, height) {
      if (this.patient?.personInformation?.gender && this.patient?.personInformation?.birthdate) {
        this.BMI = await BMIService.getBMI(
          parseInt(weight),
          parseInt(height),
          this.patient?.personInformation?.gender,
          HisDate.calculateAge(this.patient?.personInformation?.birthdate, HisDate.sessionDate())
        );
      }
      this.updateBMI();
    },
    async updateBMI() {
      const bmiColor = this.BMI?.color ?? [];
      const vitals = this.vitals[0].alerts[0];
      vitals.icon = BMIService.iconBMI(bmiColor);
      vitals.backgroundColor = bmiColor[0];
      vitals.textColor = bmiColor[1];
      vitals.index = this.BMI?.index ?? "";
      vitals.value = this.BMI?.result ?? "";
    },
    async updateBP(systolic, diastolic) {
      const vitals = this.vitals[1].alerts[0];
      const bpColor = this.BPStatus?.colors ?? [];
      vitals.icon = iconBloodPressure(bpColor);
      vitals.backgroundColor = bpColor[0];
      vitals.textColor = bpColor[1];
      vitals.index = systolic + "/" + diastolic;
      vitals.value = this.BPStatus?.value ?? "";
    },
    getBloodPressureStatus(systolic, diastolic) {
      if (diastolic && systolic) {
        if (parseInt(diastolic) >= 30 && parseInt(diastolic) <= 60 && parseInt(systolic) >= 40 && parseInt(systolic) <= 90) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low" };
        } else if (parseInt(diastolic) >= 60 && parseInt(diastolic) <= 80 && parseInt(systolic) >= 90 && parseInt(systolic) <= 120) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal" };
        } else if (parseInt(diastolic) >= 80 && parseInt(diastolic) <= 90 && parseInt(systolic) >= 120 && parseInt(systolic) <= 140) {
          let value = "Pre-high blood pressure";
          if (parseInt(diastolic) >= 85 && parseInt(diastolic) <= 89 && parseInt(systolic) >= 130 && parseInt(systolic) <= 139)
            value = "Pre-high blood pressure (Class: Borderline)";
          return { colors: ["#FEDF89", "#B54708", "#FED667"], value };
        } else if (parseInt(diastolic) >= 90 && parseInt(diastolic) <= 109 && parseInt(systolic) >= 140 && parseInt(systolic) <= 190) {
          let value = "High blood pressure";
          if (parseInt(diastolic) >= 90 && parseInt(diastolic) <= 99 && parseInt(systolic) >= 140 && parseInt(systolic) <= 159)
            value = "High blood pressure (Class: Mild/ I)";
          if (parseInt(diastolic) >= 100 && parseInt(diastolic) <= 109 && parseInt(systolic) >= 160 && parseInt(systolic) <= 179)
            value = "High blood pressure (Class: Moderate/ II)";
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value };
        } else if (parseInt(diastolic) >= 110 && parseInt(diastolic) <= 200 && parseInt(systolic) >= 180 && parseInt(systolic) <= 250) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "The patient has hypertension (Class: Severe/ III)" };
        } else {
          toastWarning("Invalid BP values", 4e3);
          this.hasValidationErrors.push("false");
          return {};
        }
      } else {
        return { colors: [], value: "" };
      }
    }
  }
});

const _hoisted_1$E = { class: "container" };
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$E, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.vitals,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const Vitals = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E], ["__scopeId", "data-v-049e698a"]]);

const _sfc_main$D = defineComponent({
  name: "DeliveryDetails",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(usePostnatalWardStayStore, ["otherExams"])
  },
  mounted() {
    const otherExams = usePostnatalWardStayStore();
    this.initialData = otherExams.getInitial2();
    this.handleOtherExaminations();
  },
  watch: {
    otherExams: {
      handler() {
        this.handleOtherExaminations();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleOtherExaminations() {
      if (getRadioSelectedValue(this.otherExams, "Status of uterus") == "Sub-involuted") {
        modifyRadioValue(this.otherExams, "Intervention given", "displayNone", false);
      } else {
        modifyRadioValue(this.otherExams, "Intervention given", "displayNone", true);
        modifyRadioValue(this.otherExams, "Intervention given", "selectedValue", "");
      }
    }
  }
});

const _hoisted_1$D = { class: "container" };
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$D, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.otherExams,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const OtherExaminations = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D], ["__scopeId", "data-v-ed6335d4"]]);

const _sfc_main$C = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    IonPopover,
    DashBox,
    SelectionPopover,
    BasicInputField,
    BasicForm,
    List,
    DynamicButton,
    DangerSigns,
    Vitals,
    OtherExaminations
  },
  data() {
    return {
      iconsContent: icons,
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      testResult: "",
      test: "",
      orders: "",
      filteredSpecimen: "",
      labOrders: "",
      testData: [],
      popoverOpen: false,
      levelOfConsciousnessStatus: false,
      presentingComplaintsStatus: false,
      pregnancyBreastfeedingStatus: false,
      pastMedicalHistory: false,
      allergiesStatus: false,
      physicalExamination: false,
      event: "",
      specimen: "",
      radiologyOrdersStatus: false,
      otherOrdersStatus: false
    };
  },
  mounted() {
    this.handleLochia();
    this.handleEpisiotomy();
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  computed: {
    ...mapState(usePostnatalWardStayStore, ["otherExams"]),
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient"]),
    inputFields() {
      return this.investigations[0].data.rowData[0].colData;
    }
  },
  watch: {
    investigations: {
      handler() {
      },
      deep: true
    },
    otherExams: {
      handler() {
        this.handleLochia();
        this.handleEpisiotomy();
      },
      deep: true
    }
  },
  // async mounted() {
  // },
  methods: {
    handleLochia() {
      if (getCheckboxSelectedValue(this.otherExams, "Other status")?.value == "Other status") {
        modifyFieldValue(this.otherExams, "Status of lochia notes", "displayNone", false);
      } else {
        modifyFieldValue(this.otherExams, "Status of lochia notes", "displayNone", true);
      }
    },
    handleEpisiotomy() {
      if (getRadioSelectedValue(this.otherExams, "Episiotomy/tear") == "No") {
        modifyFieldValue(this.otherExams, "Episiotomy Reason", "displayNone", false);
      } else {
        modifyFieldValue(this.otherExams, "Episiotomy Reason", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$C = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2$k = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$b = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_DangerSigns = resolveComponent("DangerSigns");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_Vitals = resolveComponent("Vitals");
  const _component_OtherExaminations = resolveComponent("OtherExaminations");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Danger signs", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_1$C, [
                createVNode(_component_DangerSigns)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("Vitals", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_2$k, [
                createVNode(_component_Vitals)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode("Other examinations", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_3$b, [
                createVNode(_component_OtherExaminations)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512)
    ]),
    _: 1
  });
}
const PostnatalWardMonitoring = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C], ["__scopeId", "data-v-cf6358bd"]]);

const babyDetails$1 = [
  {
    sideColSize: 1,
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "First name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "First name",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Last name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Last name",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "Baby weight",
              unit: "grams",
              icon: icons.weight,
              valueType: "text",
              value: "",
              name: "Weight",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Baby height",
              unit: "cm",
              icon: icons.height,
              value: "",
              valueType: "text",
              name: "Height",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "APGAR score at 5 minute",
              unit: "",
              icon: icons.editPen,
              valueType: "text",
              value: "",
              name: "Apgar score at 5 minute",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Baby general condition at birth",
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "Any Newborn complications?",
        selectedValue: "",
        class: "bold",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Prematurity",
          value: "prematurity",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Sepsis",
          value: "sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Congenital abnormalities",
          value: "Congenital abnormalities",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Asphyxia",
          value: "Asphyxia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Low birthweight",
          value: "Low birthweight",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Asphyxia",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was resuscitation attempted?",
        selectedValue: "",
        name: "Resuscitation attempt",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Resuscitation attempt",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Type of resuscitation?",
        selectedValue: "",
        displayNone: true,
        class: "bold",
        name: "Type of resuscitation"
      },
      data: [
        {
          name: "Drying only",
          value: "Drying only",
          colSize: "7"
        },
        {
          name: "Clearing airway",
          value: "Clearing airway",
          colSize: "7"
        },
        {
          name: "Bag and mask",
          value: "Bag and mask",
          colSize: "7"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    classDash: "dashed_bottom_border _padding",
    childName: "Baby general condition at birth",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: true
      },
      data: [
        {
          name: "Other complications",
          value: "Other complications",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  }
];
create$3().shape({
  "First name": create$6().required("First Name is required").max(50, "First Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Last name": create$6().required("first name is required").max(50, "Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Apgar score at 1 minute": create$5().typeError("Apgar score at 1 minute can only be a number").required("Apgar score at 1 minute is required").label("Apgar score at 1 minute"),
  "Apgar score at 5 minute": create$5().typeError("Apgar score at 5 minute can only be a number").required().label("Apgar score at 5 minute"),
  Weight: create$5().typeError("Weight can only be a number").min(2500).required().label("Weight"),
  Height: create$5().typeError("Height can only be a number").min(500).required().label("Height"),
  Circumference: create$5().typeError("Circimference can only be a number").required().label("Circumference")
});
const initialDeliveryDetails = [
  {
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Date of delivery*",
              value: "",
              name: "Date of delivery",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date"
            },
            {
              inputHeader: "Time of delivery*",
              value: "",
              name: "Time of delivery",
              icon: icons.timePicker,
              required: true,
              valueType: "text",
              eventType: "input",
              isTimePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick time"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Mode of delivery*",
        selectedValue: "",
        class: "bold",
        name: "Mode of delivery",
        displayNext: "Other mode of delivery"
      },
      data: [
        {
          name: "Spontaneous Vertex Delivery",
          value: "Spontaneous vertex delivery",
          colSize: "5"
        },
        {
          name: "Vacuum extraction delivery",
          value: "Vacuum extraction delivery",
          colSize: "5"
        },
        {
          name: "Breech delivery",
          value: "Breech delivery",
          colSize: "5"
        },
        {
          name: "Caesarean section",
          value: "Caesarean section",
          colSize: "5"
        },
        {
          name: "Other mode of delivery",
          value: "Other mode of delivery",
          colSize: "5"
        }
      ]
    }
  },
  {
    childName: "Mode of delivery",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other mode of delivery notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Place of delivery*",
        selectedValue: "",
        name: "Place of delivery",
        class: "bold"
      },
      data: [
        {
          name: "This facility",
          value: "this facility",
          colSize: "5"
        },
        {
          name: "In transit",
          value: "in transit",
          colSize: "5"
        },
        {
          name: "Other facility",
          value: "other facility",
          colSize: "5"
        },
        {
          name: "Home or TBA",
          value: "home/tba",
          colSize: "5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Staff conducting delivery*",
        selectedValue: "",
        class: "bold",
        name: "Staff conducting delivery",
        displayNext: "other"
      },
      data: [
        {
          name: "MD/CO/MA/Nurse midwife/CMA",
          value: "md/co/ma/nurse midwife/cma",
          colSize: "7"
        },
        {
          name: "PA/WA/HSA/None",
          value: "pa/wa/hsa/other/none",
          colSize: "7"
        },
        {
          name: "Other",
          value: "other",
          colSize: "7"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    childName: "Staff conducting delivery",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Other staff conducting delivery",
              value: "",
              name: "otherStaff",
              icon: icons.editPen,
              required: true,
              valueType: "text",
              eventType: "input",
              placeholder: "Enter staff name",
              alertsErrorMassage: "Please specify the staff name",
              showField: false
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What was the outcome of the delivery?*",
        selectedValue: "",
        class: "bold",
        name: "Outcome of the delivery",
        displayNext: "Live births"
      },
      data: [
        {
          name: "Live births",
          value: "Live births",
          colSize: "7"
        },
        {
          name: "Neonatal death",
          value: "Neonatal death",
          colSize: "7"
        },
        {
          name: "Stillbirths",
          value: "Stillbirths",
          colSize: "7"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Type of still birth?*",
        selectedValue: "",
        class: "bold",
        name: "Type of still birth",
        displayNone: true
      },
      data: [
        {
          name: "Macerated still birth",
          value: "macerated still birth",
          colSize: "7"
        },
        {
          name: "Fresh still birth",
          value: "fresh still birth",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Outcome of the delivery",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Total number of babies*",
              unit: "baby",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Number of babies",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  }
];
const useDeliveryDetailsStore = defineStore("deliveryDetailsStore", {
  state: () => ({
    deliveryDetails: [...initialDeliveryDetails],
    babyDetails: [...lodashExports.cloneDeep(babyDetails$1)]
  }),
  actions: {
    setDeliveryDetails(data) {
      this.deliveryDetails = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialDeliveryDetails);
      return [...data];
    },
    setBabyDetails(details = babyDetails$1) {
      this.babyDetails = [...lodashExports.cloneDeep(details)];
    }
  }
  //
});

const _sfc_main$B = defineComponent({
  name: "BabyModal",
  components: {
    DynamicButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonIcon,
    BasicForm
  },
  data() {
    return {
      initialData: []
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    closeModalFunc: {
      type: Function,
      required: true
    },
    onYes: {
      type: Function,
      required: true
    },
    onNo: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(useDeliveryDetailsStore, ["babyDetails"]),
    ...mapState(useDeliveryDetailsStore, ["deliveryDetails"])
  },
  watch: {
    secondStageDetails: {
      async handler() {
        this.handleChangeDisplay();
      },
      deep: true
    },
    babyDetails: {
      handler() {
        this.handleChangeDisplay();
        const complications = ["Prematurity", "Sepsis", "Congenital abnormalities", "Asphyxia", "Other complications", "Low birthweight"];
        const managementNewborn = ["Kangaroo mother care", "Antibiotics", "Other"];
        this.handleNone(complications, "None");
        this.handleNone(managementNewborn, "Nothing");
        this.handleCongenitalCheck();
        this.handleAsphyxia();
      },
      deep: true
    }
  },
  methods: {
    async handleInputData(event) {
    },
    closeCircleOutline() {
      return closeCircleOutline;
    },
    closeModal() {
      this.closeModalFunc();
    },
    confirm() {
      this.onYes();
      this.babyDetails = [];
      this.closeModal();
    },
    onNo() {
      this.babyDetails = [];
      this.closeModal();
    },
    handleChangeDisplay() {
      const babyGeneralCondition = getRadioSelectedValue(this.deliveryDetails, "Baby general condition at birth");
      this.babyDetailsDisplayNone(babyGeneralCondition == "Macerated stillbirth" || babyGeneralCondition == "Fresh stillbirth");
    },
    getFieldDisplayNone(sectionName) {
      const section = this.babyDetails.find((item) => item.childName === sectionName);
      return section?.radioBtnContent?.header?.displayNone || true;
    },
    babyDetailsDisplayNone(visibility) {
      modifyFieldValue(this.babyDetails, "First name", "displayNone", visibility);
      modifyFieldValue(this.babyDetails, "Last name", "displayNone", visibility);
      modifyFieldValue(this.babyDetails, "Apgar score at 1 minute", "displayNone", visibility);
      modifyFieldValue(this.babyDetails, "Apgar score at 5 minute", "displayNone", visibility);
    },
    handleNone(checkBoxes, noneConcept) {
      if (getCheckboxSelectedValue(this.babyDetails, noneConcept)?.checked) {
        console.log("this is checked: ");
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.babyDetails, checkbox, "checked", false);
          modifyCheckboxValue(this.babyDetails, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.babyDetails, checkbox, "disabled", false);
        });
      }
    },
    handleAsphyxia() {
      const asphyxiaChecked = getCheckboxSelectedValue(this.babyDetails, "Asphyxia")?.checked;
      if (asphyxiaChecked) {
        console.log("Asphyxia selected");
        modifyRadioValue(this.babyDetails, "Resuscitation attempt", "displayNone", false);
        const resuscitationAttempt = getRadioSelectedValue(this.babyDetails, "Resuscitation attempt");
        modifyRadioValue(this.babyDetails, "Type of resuscitation", "displayNone", resuscitationAttempt !== "Yes");
      } else {
        modifyFieldValue(this.babyDetails, "Resuscitation attempt", "displayNone", true);
        modifyFieldValue(this.babyDetails, "Type of resuscitation", "displayNone", true);
      }
    },
    handleCongenitalCheck() {
      const checked = getCheckboxSelectedValue(this.babyDetails, "Congenital abnormalities")?.checked;
      modifyFieldValue(this.babyDetails, "Specify", "displayNone", !checked);
    }
  }
});

const _hoisted_1$B = { key: 0 };
const _hoisted_2$j = { key: 1 };
const _hoisted_3$a = { style: { "display": "flex" } };
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.isOpen,
    "show-backdrop": true,
    onDidDismiss: _ctx.closeModal
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createVNode(_component_ion_title, { style: { "color": "black" } }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }),
          createVNode(_component_basic_form, {
            contentData: _ctx.babyDetails,
            initialData: _ctx.initialData,
            "onUpdate:selected": _ctx.handleInputData,
            "onUpdate:inputValue": _ctx.handleInputData
          }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"]),
          !_ctx.getFieldDisplayNone("Resuscitation attempt") ? (openBlock(), createElementBlock("div", _hoisted_1$B, [
            createVNode(_component_basic_form, {
              contentData: _ctx.babyDetails,
              section: "Resuscitation attempt",
              "onUpdate:selected": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected"])
          ])) : createCommentVNode("", true),
          !_ctx.getFieldDisplayNone("Type of resuscitation") ? (openBlock(), createElementBlock("div", _hoisted_2$j, [
            createVNode(_component_basic_form, {
              contentData: _ctx.babyDetails,
              section: "Type of resuscitation",
              "onUpdate:selected": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected"])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3$a, [
            createVNode(_component_DynamicButton, {
              expand: "block",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.confirm()),
              name: "Save",
              style: `flex:1`
            }),
            createVNode(_component_DynamicButton, {
              expand: "block",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onNo()),
              style: `flex:1`,
              name: "Cancel",
              fill: "clear"
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open", "onDidDismiss"]);
}
const BabyModal = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B], ["__scopeId", "data-v-23e00e19"]]);

function validateField(data, fieldName, value) {
  const validationRules = {
    Gravida: () => MultValidations(fieldName, value),
    Parity: () => MultValidations(fieldName, value),
    "Number of babies": () => MultValidations(fieldName, value),
    "Date of delivery": () => StandardValidations.required(value),
    "First name": () => StandardValidations.required(value),
    "Last name": () => StandardValidations.required(value),
    Weight: () => MultValidations(fieldName, value),
    Height: () => MultValidations(fieldName, value),
    "Apgar score at 5 minutes": () => MultValidations(fieldName, value)
  };
  const isValid = validationRules[fieldName]?.() == null;
  modifyFieldValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyRadioValue(data, fieldName, "alertsErrorMassage", !isValid);
  modifyCheckboxValue(data, fieldName, "alertsErrorMassage", !isValid);
  if (!isValid) {
    modifyFieldValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyRadioValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
    modifyCheckboxValue(data, fieldName, "alertsErrorMassage", validationRules[fieldName]?.());
  }
  return isValid;
}
function MultValidations(fieldName, value) {
  if (fieldName === "Gravida") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 1, 15);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Parity") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 0, 15);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Number of babies") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 0, 5);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Weight") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 900, 7e3);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Height") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 30, 100);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else if (fieldName === "Apgar score at 5 minutes") {
    const requiredError = StandardValidations.required(value);
    if (requiredError !== null) {
      return requiredError;
    }
    const wholeNumberError = StandardValidations.isWholeNumber(value);
    if (wholeNumberError !== null) {
      return wholeNumberError;
    }
    const minMaxError = StandardValidations.checkMinMax(value, 0, 10);
    if (minMaxError !== null) {
      return minMaxError;
    }
  } else {
    return null;
  }
  return null;
}

const _sfc_main$A = defineComponent({
  name: "DeliveryDetails",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonButton,
    BasicForm,
    BabyModal
  },
  data() {
    return {
      initialData: [],
      arrayOfBabies: [],
      babyModalOpen: false,
      selectedBaby: 0,
      babiesDetails: [],
      showSection: false
    };
  },
  computed: {
    deliveryDetails() {
      return useDeliveryDetailsStore().deliveryDetails;
    }
  },
  mounted() {
    this.initialData = useDeliveryDetailsStore().getInitial();
    this.handleDeliveryDetails();
    this.handlePastProblems();
  },
  watch: {
    deliveryDetails: {
      handler() {
        this.handleDeliveryDetails();
        this.handlePastProblems();
        this.handleNumberOfBabies();
        this.handleSelectedStillBirth();
      },
      deep: true
    }
  },
  methods: {
    handleNumberOfBabies() {
      const numberOfBabies = getFieldValue(this.deliveryDetails, "Number of babies", "value");
      this.arrayOfBabies = [...Array(Number(numberOfBabies)).keys()];
    },
    closeBabyModal() {
      this.babyModalOpen = false;
    },
    handleSelectedStillBirth() {
      const babyGeneralCondition = getRadioSelectedValue(this.deliveryDetails, "Baby general condition at birth");
      if (babyGeneralCondition === "Macerated stillbirth" || babyGeneralCondition === "Fresh stillbirth") {
        this.showSection = false;
        this.babyDetailsDisplayNone(true);
        return;
      }
      this.babyDetailsDisplayNone(false);
      this.showSection = true;
    },
    selectBaby(n) {
      this.selectedBaby = n;
      const baby = this.babiesDetails.find((b) => b.baby == n);
      const deliveryDetails = useDeliveryDetailsStore();
      deliveryDetails.setBabyDetails(baby?.details || []);
      this.toggleBabyModal();
    },
    checkIfSubmitted(n) {
      return !!this.babiesDetails.find((b) => b.baby == n);
    },
    handleBabyYes() {
      this.toggleBabyModal();
      const deliveryDetails = useDeliveryDetailsStore();
      const index = this.babiesDetails.findIndex((b) => b.baby == this.selectedBaby);
      if (index < 0) {
        this.babiesDetails.push({ baby: this.selectedBaby, details: [...deliveryDetails.babyDetails] });
      } else {
        this.babiesDetails[index].details = [...deliveryDetails.babyDetails];
      }
      deliveryDetails.setBabyDetails();
    },
    handleBabyNo() {
      this.toggleBabyModal();
      useDeliveryDetailsStore().setBabyDetails([]);
    },
    toggleBabyModal() {
      this.babyModalOpen = !this.babyModalOpen;
    },
    handleAddBabyDetails(babyNumber) {
      this.selectedBaby = babyNumber;
      this.toggleBabyModal();
    },
    babyDetailsDisplayNone(visibility) {
      modifyRadioValue(this.babiesDetails, "First name", "displayNone", visibility);
      modifyRadioValue(this.babiesDetails, "Last name", "displayNone", visibility);
    },
    handlePastProblems() {
      const checkBoxes = ["Prematurity", "Sepsis", "Congenital abnormalities", "Asphyxia", "Other complications"];
      const noneSelected = getRadioSelectedValue(this.deliveryDetails, "None");
      checkBoxes.forEach((checkbox) => {
        modifyCheckboxValue(this.deliveryDetails, checkbox, "disabled", !!noneSelected?.checked);
      });
    },
    handleDeliveryDetails() {
      const outcome = getRadioSelectedValue(this.deliveryDetails, "Outcome of the delivery");
      const resuscitationAttempt = getRadioSelectedValue(this.deliveryDetails, "Was resuscitation attempted?");
      if (outcome === "Stillbirths") {
        modifyRadioValue(this.deliveryDetails, "Type of still birth", "displayNone", false);
      } else {
        modifyRadioValue(this.deliveryDetails, "Type of still birth", "displayNone", true);
        modifyRadioValue(this.deliveryDetails, "Type of still birth", "selectedValue", "");
      }
      if (resuscitationAttempt === "Yes") {
        modifyRadioValue(this.deliveryDetails, "Type of resuscitation", "displayNone", true);
      } else {
        modifyRadioValue(this.deliveryDetails, "Type of resuscitation", "displayNone", true);
        modifyRadioValue(this.deliveryDetails, "Type of resuscitation", "selectedValue", "");
      }
    },
    validationRules(event) {
      return validateField(this.deliveryDetails, event.name, event.name);
    },
    async handleInputData(event) {
      this.validationRules(event);
    }
  }
});

const _hoisted_1$A = { class: "container" };
const _hoisted_2$i = { key: 0 };
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_BabyModal = resolveComponent("BabyModal");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$A, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode("Delivery Details", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.deliveryDetails,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"]),
            createVNode(_component_BabyModal, {
              closeModalFunc: _ctx.closeBabyModal,
              onYes: _ctx.handleBabyYes,
              onNo: _ctx.handleBabyNo,
              isOpen: _ctx.babyModalOpen,
              title: ``
            }, null, 8, ["closeModalFunc", "onYes", "onNo", "isOpen"]),
            _ctx.arrayOfBabies.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$i, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.arrayOfBabies, (n) => {
                return openBlock(), createElementBlock("div", { key: n }, [
                  !_ctx.checkIfSubmitted(n) ? (openBlock(), createBlock(_component_ion_button, {
                    key: 0,
                    onClick: ($event) => _ctx.handleAddBabyDetails(n)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add Baby " + toDisplayString(n + 1), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true),
                  _ctx.checkIfSubmitted(n) ? (openBlock(), createBlock(_component_ion_button, {
                    key: 1,
                    onClick: ($event) => _ctx.selectBaby(n)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" View Baby " + toDisplayString(n + 1), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const DeliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A], ["__scopeId", "data-v-a769e5ef"]]);

const initialHIVStatusAndTreatment = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "HIV status of woman*",
        selectedValue: "",
        class: "bold",
        name: "Mother HIV Status"
      },
      data: [
        {
          name: "Positive",
          value: "positive",
          colSize: "4.001"
        },
        {
          name: "Negative",
          value: "negative",
          colSize: "4.001"
        },
        {
          name: "Unknown",
          value: "unknown",
          colSize: "4"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Is the woman started on ART",
        selectedValue: "",
        class: "bold",
        displayNone: true,
        name: "ART treatment"
      },
      data: [
        {
          name: "Yes",
          value: "yes",
          colSize: "4.001"
        },
        {
          name: "No",
          value: "no",
          colSize: "4.001"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    classDash: "",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "ART Clinic number",
              value: "",
              name: "ART Number",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "New HIV test result in postnatal*",
        selectedValue: "",
        class: "bold",
        name: "New HIV status",
        displayNext: "Positive"
      },
      data: [
        {
          name: "Positive",
          value: "Positive",
          colSize: "4.001"
        },
        {
          name: "Negative",
          value: "Negative",
          colSize: "4.001"
        },
        {
          name: "HIV test not done",
          value: "HIV test not done",
          colSize: "5"
        }
      ]
    }
  },
  {
    selectdData: [],
    childName: "New HIV status",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Has the woman started ART treatment?*",
        selectedValue: "",
        class: "bold",
        name: "Has the woman started ART treatment",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2"
        },
        {
          name: "No",
          value: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    childName: "Has the woman started ART treatment",
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "ART clinic number*",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "ART clinic registration number",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  }
];
const useHIVStatusAndTreatmentStore = defineStore("hivStatusAndTreatmentStore", {
  state: () => ({
    hivStatusAndTreatment: [...initialHIVStatusAndTreatment]
  }),
  actions: {
    setHIVStatusANDTreatment(data) {
      this.hivStatusAndTreatment = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialHIVStatusAndTreatment);
      return [...data];
    }
  }
});

const _sfc_main$z = defineComponent({
  name: "HIVStatusAndTreatment",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(useHIVStatusAndTreatmentStore, ["hivStatusAndTreatment"])
  },
  mounted() {
    const hivStatus = useHIVStatusAndTreatmentStore();
    this.initialData = hivStatus.getInitial();
    this.handleHIV();
    this.handleArtNumber();
  },
  watch: {
    hivStatusAndTreatment: {
      handler() {
        this.handleHIV();
        this.handleArtNumber();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleHIV() {
      if (getRadioSelectedValue(this.hivStatusAndTreatment, "Mother HIV Status") == "positive") {
        modifyRadioValue(this.hivStatusAndTreatment, "ART treatment", "displayNone", false);
      } else {
        modifyRadioValue(this.hivStatusAndTreatment, "ART treatment", "displayNone", true);
      }
    },
    handleArtNumber() {
      if (getRadioSelectedValue(this.hivStatusAndTreatment, "ART treatment") == "yes") {
        modifyFieldValue(this.hivStatusAndTreatment, "ART Number", "displayNone", false);
      } else {
        modifyFieldValue(this.hivStatusAndTreatment, "ART Number", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$z = { class: "container" };
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$z, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.hivStatusAndTreatment,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const HIVStatusAndTreatment = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z], ["__scopeId", "data-v-6aa30269"]]);

const initialObstetricDetails$1 = [
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    sectionHeader: "",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Gravida*",
              value: "",
              name: "Gravida",
              icon: icons.editPen,
              required: true,
              valueType: "text",
              eventType: "input",
              alertsErrorMassage: ""
            },
            {
              inputHeader: "Parity*",
              value: "",
              name: "Parity",
              icon: icons.editPen,
              valueType: "text",
              required: true,
              eventType: "input",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Any past pregnancy problems",
        selectedValue: "",
        class: "bold",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Cord prolapse",
          value: "cord prolapse",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Antepartum haemorrhage",
          value: "antepartum haemorrhage",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Pre-Eclampsia",
          value: "pre-eclampsia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Sepsis",
          value: "sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Retained placenta",
          value: "retained placenta",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Perineal tear",
          value: "perineal tear",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Postpartum haemorrhage",
          value: "postpartum haemorrhage",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Obstructed or prolonged labour",
          value: "Obstructed or prolonged labour",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Premature labour",
          value: "premature labour",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Placenta previa",
          value: "placenta previa",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Severe anaemia",
          value: "severe anaemia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Placenta abruption",
          value: "placenta abruption",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Fetal distress",
          value: "fetal distress",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Eclampsia",
          value: "eclampsia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Haemorrhage",
          value: "haemorrhage",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Ruptured uterus",
          value: "Ruptured uterus",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Past pregnancy problems"
      },
      data: [
        {
          name: "Symphysiotomy",
          value: "symphysiotomy",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Other problems",
          value: "Other problems",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other problems",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other problems notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  }
];
const useObstetricDetailsStore = defineStore("obstetricDetails", {
  state: () => ({
    obstetricDetails: [...initialObstetricDetails$1]
  }),
  actions: {
    setObstetricDetails(data) {
      this.obstetricDetails = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialObstetricDetails$1);
      return [...data];
    }
  }
});

const _sfc_main$y = defineComponent({
  name: "ObstetricDetails",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(useObstetricDetailsStore, ["obstetricDetails"]),
    Parity() {
      return getFieldValue(this.obstetricDetails, "Parity", "value");
    },
    Gravida() {
      return getFieldValue(this.obstetricDetails, "Gravida", "value");
    }
  },
  mounted() {
    const obstetricDetails = useObstetricDetailsStore();
    this.initialData = obstetricDetails.getInitial();
    this.validateRowData({});
  },
  watch: {},
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    validationRules(event) {
      return validateField(this.obstetricDetails, event.name, this[event.name]);
    },
    //Handling input data on Profile-Past Obstetric history
    async handleInputData(event) {
      this.validateRowData(event);
    },
    // Validations
    validateRowData(event) {
      this.validationRules(event);
    }
  }
});

const _hoisted_1$y = { class: "container" };
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$y, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.obstetricDetails,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const ObstetricDetails = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y], ["__scopeId", "data-v-793db442"]]);

const initialVisitForMother = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What is the status of the mother?",
        selectedValue: "",
        name: "Status of the mother",
        class: "bold",
        displayNext: "Alive"
      },
      data: [
        {
          name: "Alive",
          value: "Alive",
          colSize: "4"
        },
        {
          name: "Dead",
          value: "Dead",
          colSize: "4"
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Is the postnatal check within?",
        selectedValue: "",
        class: "bold",
        name: "Postnatal check period",
        displayNone: true
      },
      data: [
        {
          name: "Up to 48 hrs or before discharge",
          value: "up to 48 hrs or before discharge",
          colSize: "7"
        },
        {
          name: "3-7 days",
          value: "3-7 days",
          colSize: "7"
        },
        {
          name: "8-42 days",
          value: "8-42 days",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Does the woman have any of the danger signs?",
        selectedValue: "",
        name: "Danger signs",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Sepsis",
          value: "sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Anemia",
          value: "anemia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Postpartum hemorrhage",
          value: "postpartum hemorrhage",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Severe pre-eclampsia",
          value: "severe pre-eclampsia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Pre-eclampsia",
          value: "pre-eclampsia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Breast engorgement",
          value: "breast engorgement",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Other danger signs",
          value: "Other danger signs",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other danger signs",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other danger signs notes",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Status of uterus",
        selectedValue: "",
        class: "bold",
        name: "Status of Uterus",
        displayNext: "Other status",
        displayNone: true
      },
      data: [
        {
          name: "Involuted",
          value: "involuted",
          colSize: "4"
        },
        {
          name: "Sub-involuted",
          value: "sub-involuted",
          colSize: "4"
        },
        {
          name: "Other status",
          value: "Other status",
          colSize: "5"
        }
      ]
    }
  },
  {
    childName: "Status of Uterus",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Status of uterus notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    childName: "Status of uterus",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was the intervention given?",
        selectedValue: "",
        name: "Intervention on uterus problem",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    childName: "Intervention on uterus problem",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention given?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Intervention provided notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Status of lochia",
        selectedValue: "",
        class: "bold",
        name: "Status of lochia",
        displayNext: "Other status",
        displayNone: true
      },
      data: [
        {
          name: "Mild",
          value: "mild",
          colSize: "4"
        },
        {
          name: "Moderate",
          value: "moderate",
          colSize: "4"
        },
        {
          name: "Heavy",
          value: "heavy",
          colSize: "4"
        },
        {
          name: "Offensive smell",
          value: "offensive smell",
          colSize: "4"
        },
        {
          name: "Other status",
          value: "Other status",
          colSize: "4"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    ChildName: "Status of lochia",
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Status of lochia notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was the intervention given?",
        selectedValue: "",
        name: "Intervention on lochia",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    childName: "Intervention on lochia",
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention given?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Intervention on lochia notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of the mother",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Episiotomy/tear present?",
        selectedValue: "",
        class: "bold",
        name: "Episiotomy/tear",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    selectdData: [],
    childName: "Episiotomy/tear",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Condition of episiotomy/tear?",
        selectedValue: "",
        name: "Condition of episiotomy/tear",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Intact",
          value: "intact",
          colSize: "4"
        },
        {
          name: "Gaped",
          value: "gaped",
          colSize: "4"
        },
        {
          name: "Infected",
          value: "infected",
          colSize: "4"
        },
        {
          name: "Infected and gaped",
          value: "infected and gaped",
          colSize: "4"
        }
      ]
    }
  },
  {
    childName: "Episiotomy/tear",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was the intervention given?",
        selectedValue: "",
        class: "bold",
        name: "Intervention on condition of episiotomy/tear",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Intervention on condition of episiotomy/tear",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention given?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    childName: "Status of the mother",
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Counselling on family planning done?",
        selectedValue: "",
        name: "Counselling on family planning",
        class: "bold",
        displayNone: true,
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    childName: "Counselling on family planning",
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Postpartum family planning method chosen",
        selectedValue: "",
        name: "Postpartum family planning method",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Intrauterine contraceptive device",
          value: "IUCD",
          colSize: "4"
        },
        {
          name: "Bilateral tubal ligation",
          value: "BTL",
          colSize: "4"
        },
        {
          name: "Oral contraception",
          value: "Oral contraception",
          colSize: "4"
        },
        {
          name: "Injectable contraceptives",
          value: "Injectable contraceptives",
          colSize: "4"
        },
        {
          name: "Contraceptive implant",
          value: "Contraceptive implant",
          colSize: "4"
        },
        {
          name: "Intrauterine device (IUD)",
          value: "Intrauterine device (IUD)",
          colSize: "4"
        },
        {
          name: "Implants",
          value: "Implants",
          colSize: "4"
        },
        {
          name: "iucd-hormonal",
          value: "iucd-hormonal",
          colSize: "4"
        },
        {
          name: "iucd-cooper t",
          value: "iucd-cooper t",
          colSize: "4"
        },
        {
          name: "None",
          value: "none",
          colSize: "4"
        }
      ]
    }
  },
  {
    selectdData: [],
    childName: "Status of the mother",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Breast feeding?",
        selectedValue: "",
        name: "Breast feeding",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Breastfed exclusively",
          value: "Breastfed exclusively",
          colSize: "4"
        },
        {
          name: "Non exclusive",
          value: "Non exclusive",
          colSize: "4"
        },
        {
          name: "Not breastfeeding",
          value: "Not breastfeeding",
          colSize: "5"
        }
      ]
    }
  }
];
const useVisitForMotherStore = defineStore("visitForMotherStore", {
  state: () => ({
    visitForMother: [...initialVisitForMother]
  }),
  actions: {
    setPNCVisitForMother(data) {
      this.visitForMother = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialVisitForMother);
      return [...data];
    }
  }
  //
});

const _sfc_main$x = defineComponent({
  name: "VisitForBaby",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(useVisitForMotherStore, ["visitForMother"])
  },
  mounted() {
    const visitForMother = useVisitForMotherStore();
    this.initialData = visitForMother.getInitial();
  },
  watch: {},
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {}
});

const _hoisted_1$x = { class: "container" };
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$x, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.visitForMother,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const VisitForMother = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x], ["__scopeId", "data-v-dc0dcbc7"]]);

const initialVisitForBaby = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What is the status of the baby?",
        selectedValue: "",
        name: "Status of baby",
        displayNext: "Alive",
        class: "bold",
        displayNone: ""
      },
      data: [
        {
          name: "Alive",
          value: "Alive",
          colSize: "4"
        },
        {
          name: "Dead",
          value: "Dead",
          colSize: "4"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Current weight",
              unit: "kg",
              icon: icons.weight,
              value: "",
              valueType: "text",
              name: "Current weight",
              required: true,
              eventType: "input",
              inputWidth: ""
            },
            {
              displayNone: true,
              inputHeader: "Current Temperature",
              unit: "C",
              icon: icons.temprature,
              value: "",
              name: "Temperature",
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Respiratory rate",
              unit: "BMP",
              icon: icons.respiratory,
              value: "",
              name: "Respiratory Rate",
              eventType: "input",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "Heart rate",
              unit: "BMP",
              icon: icons.pulse,
              value: "",
              name: "Heart Rate",
              eventType: "input",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Oxygen Saturation Rate",
              unit: "%",
              icon: icons.oxgenStaturation,
              value: "",
              name: "Oxygen Saturation Rate",
              eventType: "input",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Is the postnatal visit within",
        selectedValue: "",
        name: "Postnatal visit period",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "Up to 48 hrs or before discharge",
          value: "Up to 48 hrs or before discharge",
          colSize: "7"
        },
        {
          name: "3-7 days",
          value: "3-7 days",
          colSize: "7"
        },
        {
          name: "8-42 days",
          value: "8-42 days",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    classDash: "dashed_bottom_border _padding",
    checkboxBtnContent: {
      header: {
        title: "Has the baby received the following immunisations?",
        selectedValue: "",
        name: "Type of immunisation the baby received",
        displayNext: "",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "BCG",
          value: "BCG",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Polio",
          value: "Polio",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "BCG",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Date BCG given",
              unit: "",
              icon: icons.calenderPrimary,
              value: "",
              valueType: "text",
              name: "Date BCG given",
              required: true,
              eventType: "input",
              datePopover: true,
              inputWidth: "",
              placeholder: "Pick holder",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Polio",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Date polio given",
              unit: "",
              icon: icons.calenderPrimary,
              value: "",
              valueType: "text",
              name: "Date polio given",
              required: true,
              eventType: "input",
              datePopover: true,
              inputWidth: "",
              placeholder: "Pick holder",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Danger signs for the child",
        selectedValue: "",
        name: "Danger signs",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Not able to feed",
          value: "not able to feed",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Fever (>37.5C)",
          value: "fever",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Hypothermia",
          value: "Hypothermia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Convulsions",
          value: "convulsions",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Lethargic",
          value: "lethargic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Chest in-drawing",
          value: "chest in-drawing",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Fast breathing",
          value: "fast breathing",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Eye discharge",
          value: "Eye discharge",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Signs of cord infection",
          value: "Signs of cord infection",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Jaundice",
          value: "jaundice",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Skin rashes",
          value: "skin rashes",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Danger signs",
        displayNone: true
      },
      data: [
        {
          name: "Other danger signs",
          value: "Other danger signs",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other danger signs",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other danger signs notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    childName: "Status of baby",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was an intervention given?",
        selectedValue: "",
        name: "Intervention on danger signs",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Intervention on danger signs",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Describe the intervention",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Intervention on danger signs notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    childName: "Status of baby",
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Has the baby started nevirapine?",
        selectedValue: "",
        name: "Nevirapine started",
        class: "bold",
        displayNext: "No",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "Nevirapine started",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Why the baby is not on neverapine?",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Neverapine not started notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Date of Death",
              unit: "",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date"
            },
            {
              displayNone: true,
              inputHeader: "Time of Death",
              unit: "",
              icon: icons.timePicker,
              value: "",
              valueType: "time",
              name: "Time of Death",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Cause of Death",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Cause of Death",
              required: true,
              eventType: "input",
              inputWidth: ""
            },
            {
              displayNone: true,
              inputHeader: "Colour of the Skin",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Colour of the Skin",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Status of baby",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Condition of the Umbilical Cord",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Condition of the Umbilical Cord",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  }
];
const useVisitForBabyStore = defineStore("visitForBabyStore", {
  state: () => ({
    visitForBaby: [...initialVisitForBaby]
  }),
  actions: {
    setPNCVisitForBaby(data) {
      this.visitForBaby = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialVisitForBaby);
      return [...data];
    }
  }
  //
});

const _sfc_main$w = defineComponent({
  name: "VisitForBaby",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    visitForBaby() {
      return useVisitForBabyStore().visitForBaby;
    }
  },
  mounted() {
    this.initialData = useVisitForBabyStore().getInitial();
    this.handleSelection();
  },
  watch: {
    visitForBaby: {
      handler() {
        this.handleSelection();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleSelection() {
      const outcome = getRadioSelectedValue(this.visitForBaby, "Status of baby");
      if (outcome === "Dead") {
        modifyFieldValue(this.visitForBaby, "Date of Death", "displayNone", false);
        modifyFieldValue(this.visitForBaby, "Cause of Death", "displayNone", false);
        modifyFieldValue(this.visitForBaby, "Condition of the Umbilical Cord", "displayNone", false);
      } else {
        modifyFieldValue(this.visitForBaby, "Date of Death", "displayNone", true);
        modifyFieldValue(this.visitForBaby, "Cause of Death", "displayNone", true);
        modifyFieldValue(this.visitForBaby, "Condition of the Umbilical Cord", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$w = { class: "container" };
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$w, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.visitForBaby,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const VisitForBaby = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w], ["__scopeId", "data-v-fa64a92c"]]);

const useLabourDetailsStore = defineStore("labourDetailsStore", {
  state: () => ({
    labourDetails: [
      {
        selectdData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            title: "Reason for coming to the facility?",
            selectedValue: ""
          },
          data: [
            {
              name: "In labour",
              value: "in labour",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Delivered on the way to facility",
              value: "delivered on the way to facility",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Specify",
                  value: "",
                  name: "specify",
                  required: true,
                  icon: icons.editPen,
                  eventType: "input",
                  alertsErrorMassage: "",
                  inputWidth: "55%"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Labour onset type?",
            selectedValue: ""
          },
          data: [
            {
              name: "Induced",
              value: "induced",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Spontaneous",
              value: "spontaneous",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Date of labour onset",
                  value: "",
                  name: "Date of labour onset",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: "",
                  isDatePopover: true,
                  icon: icons.calenderPrimary,
                  placeholder: "Select date"
                },
                {
                  inputHeader: "Time of labour",
                  value: "",
                  name: "Time of labour onset",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: "",
                  isTimePopover: true,
                  icon: icons.time,
                  placeholder: "Specify time"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Membranes raptured?",
            selectedValue: ""
          },
          data: [
            {
              name: "Yes",
              value: "yes",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "No",
              value: "no",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Date membranes ruptured",
                  value: "",
                  name: "Date membranes ruptured",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: "",
                  isDatePopover: true,
                  icon: icons.calenderPrimary,
                  placeholder: "Select date"
                },
                {
                  inputHeader: "Time membranes ruptured",
                  value: "",
                  name: "Time membranes ruptured",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: "",
                  isTimePopover: true,
                  icon: icons.time,
                  placeholder: "Specify time"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Has the woman had food in 4 hrs?",
            selectedValue: ""
          },
          data: [
            {
              name: "Yes",
              value: "yes",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "No",
              value: "no",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            title: "Has the woman had  homemade medicines?",
            selectedValue: ""
          },
          data: [
            {
              name: "Yes",
              value: "yes",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "No",
              value: "no",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Specify",
                  value: "",
                  name: "specify",
                  required: true,
                  icon: icons.editPen,
                  eventType: "input",
                  alertsErrorMassage: "",
                  inputWidth: "55%"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Sleep?",
            selectedValue: ""
          },
          data: [
            {
              name: "Well",
              value: "well",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Disturbed",
              value: "disturbed",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            title: "Bleeding?",
            selectedValue: ""
          },
          data: [
            {
              name: "Yes",
              value: "yes",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "No",
              value: "no",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Amount of bleeding",
                  value: "",
                  name: "amount of bleeding",
                  required: true,
                  icon: icons.editPen,
                  eventType: "input",
                  alertsErrorMassage: "",
                  inputWidth: "55%"
                }
              ]
            }
          ]
        }
      }
    ]
  }),
  actions: {
    setLabourDetails(data) {
      this.labourDetails = data;
    }
  }
});

const _sfc_main$v = defineComponent({
  name: "History",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: ""
    };
  },
  computed: {
    ...mapState(useLabourDetailsStore, ["labourDetails"])
  },
  mounted() {
  },
  watch: {},
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {}
});

const _hoisted_1$v = { class: "container" };
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$v, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode("Labour details", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, { contentData: _ctx.labourDetails }, null, 8, ["contentData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const Labour = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v], ["__scopeId", "data-v-1c41c247"]]);

const ReferralValidationSchema = create$3().shape({
  "Phone number": create$5().typeError("Phone number can only be a number").min(0).max(10).required(),
  HB: create$5().typeError("HB can only be a number").min(0).required(),
  "Art number": create$5().typeError("Art number can only be a number").min(0).required()
});
const useLabourReferralStore = defineStore("labourReferralStore", {
  state: () => ({
    labourReferral: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Who is being referred",
            selectedValue: "",
            class: "bold",
            name: "referred"
          },
          data: [
            {
              name: "Mother",
              value: "mother",
              colSize: "3"
            },
            {
              name: "Baby",
              value: "baby",
              colSize: "3"
            }
          ]
        }
      },
      {
        selectdData: [],
        // classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "Reason for referring mother",
            selectedValue: "",
            class: "bold",
            name: "referring mother",
            displayNone: true
          },
          data: [
            {
              name: "Danger sign present",
              value: "danger sign present",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Antepartum haemorrhage",
              value: "antepartum haemorrhage",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        //  classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            displayNone: true,
            name: "referring mother"
          },
          data: [
            {
              name: "Postpartum haemorrhage",
              value: "postpartum haemorrhage",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Obstructed/Prolonged labour",
              value: "obstructed/Prolonged labour",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        //  classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            displayNone: true,
            selectedValue: "",
            name: "referring mother"
          },
          data: [
            {
              name: "Pre-Eclampsia",
              value: "pre-Eclampsia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Sepsis",
              value: "sepsis",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        //  classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            displayNone: true,
            selectedValue: "",
            name: "referring mother"
          },
          data: [
            {
              name: "ruptured uterus",
              value: "ruptured uterus",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "retained placenta",
              value: "retained placenta",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        //  classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            displayNone: true,
            selectedValue: "",
            name: "referring mother"
          },
          data: [
            {
              name: "Premature labour",
              value: "premature labour",
              displayNone: true,
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Fetal distress",
              value: "fetal distress",
              displayNone: true,
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        //  classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            displayNone: true,
            name: "referring mother"
          },
          data: [
            {
              name: "Perineal tear (2nd, 3rd or 4th degree)",
              value: "perineal tear (2nd, 3rd or 4th degree)",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Placenta Previa",
              value: "placenta Previa",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        //  classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            displayNone: true,
            name: "referring mother"
          },
          data: [
            {
              name: "Placenta abruption",
              value: "placenta abruption",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Severe anaemia",
              value: "severe anaemia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        //  classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            displayNone: true,
            name: "referring mother"
          },
          data: [
            {
              name: "Symphysiotomy",
              value: "symphysiotomy",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        sectionHeader: "",
        //   classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Specify",
                  unit: "",
                  displayNone: true,
                  icon: icons.editPen,
                  value: "",
                  valueType: "text",
                  name: "specify",
                  eventType: "input"
                }
              ]
            }
          ]
        }
      },
      {
        sectionHeader: "",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Any other treatment given before referral?",
                  unit: "",
                  icon: icons.editPen,
                  value: " ",
                  displayNone: true,
                  valueType: "text",
                  name: "treatment given before referral",
                  eventType: "input"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        //classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "Reason for referring baby",
            class: "bold",
            selectedValue: "",
            name: "Baby identifier",
            displayNone: true
          },
          data: [
            {
              name: "Asphyxia",
              value: "asphyxia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Preterm",
              value: "preterm",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        //classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "Baby identifier",
            displayNone: true
          },
          data: [
            {
              name: "Under weight",
              value: "under weight",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Congenital abnormalities",
              value: "congenital abnormalities",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        //classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "Baby identifier",
            displayNone: true
          },
          data: [
            {
              name: "Sepsi",
              value: "sepsi",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Other reason",
              value: "other reason",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  displayNone: true,
                  inputHeader: "Specify",
                  unit: "",
                  icon: icons.editPen,
                  value: "",
                  valueType: "text",
                  name: "other",
                  eventType: "input"
                }
              ]
            }
          ]
        }
      },
      {
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Any other treatment given to baby before referral?",
                  unit: "",
                  icon: icons.editPen,
                  value: " ",
                  displayNone: true,
                  valueType: "text",
                  name: "treatment given to baby before referral",
                  eventType: "input"
                }
              ]
            }
          ]
        }
      },
      {
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Time of referral",
                  unit: "",
                  icon: icons.time,
                  value: "",
                  name: "Time of referral",
                  valueType: "text",
                  displayNone: true,
                  required: true,
                  eventType: "input",
                  placeholder: "Pick time"
                },
                {
                  displayNone: true,
                  inputHeader: "Date of referral",
                  value: "",
                  name: "Date of referral",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: "",
                  isDatePopover: true,
                  icon: icons.calenderPrimary,
                  placeholder: "Pick date",
                  inputWidth: "100%"
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      },
      {
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  displayNone: true,
                  inputHeader: "Provider who made referral",
                  unit: "",
                  icon: "",
                  value: "",
                  valueType: "text",
                  name: "Provider who made referral",
                  required: true,
                  eventType: "input"
                },
                {
                  displayNone: true,
                  inputHeader: "Phone number for provider",
                  unit: "",
                  icon: "",
                  value: " ",
                  valueType: "text",
                  name: "Phone number",
                  required: true,
                  eventType: "input"
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      }
    ],
    labourLab: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "",
        radioBtnContent: {
          header: {
            title: "Laboratory Tests",
            class: "bold",
            selectedValue: ""
          },
          data: []
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Syphillis test",
            selectedValue: "",
            class: "bold",
            name: "Syphillis"
          },
          data: [
            {
              name: "Positive",
              value: "positive",
              colSize: "3"
            },
            {
              name: "Negative",
              value: "negative",
              colSize: "3"
            }
          ]
        }
      },
      {
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Date the test was conducted",
                  unit: "",
                  icon: icons.calenderPrimary,
                  value: " ",
                  valueType: "text",
                  name: "Test",
                  eventType: "input"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "HIV test",
            selectedValue: "",
            class: "bold",
            name: "HIV"
          },
          data: [
            {
              name: "Positive",
              value: "positive",
              colSize: "3"
            },
            {
              name: "Negative",
              value: "negative",
              colSize: "3"
            }
          ]
        }
      },
      {
        // childName: "HIV positive",
        sideColSize: 0.5,
        selectdData: [],
        classDash: "dashed_bottom_border",
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            title: "Is the client on ART?",
            selectedValue: "",
            name: "chronic conditions",
            // displayNone: true,
            displayNext: "Yes"
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              colSize: "2.5"
            },
            {
              name: "No",
              value: "no",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        // childName: "chronic conditions",
        classDash: "dashed_bottom_border",
        sideColSize: 0.5,
        data: {
          rowData: [
            {
              colData: [
                {
                  // displayNone: true,
                  inputHeader: "ART number",
                  value: "",
                  name: "Art number",
                  eventType: "blur",
                  valueType: "text",
                  inputWidth: "100%",
                  required: true
                }
              ]
            }
          ]
        }
      },
      {
        childName: "chronic conditions",
        sideColSize: 0.5,
        db_data: [],
        classDash: "dashed_bottom_border",
        isFinishBtn: false,
        selectdData: [],
        displayData: [],
        data: {
          rowData: [
            {
              colData: [
                {
                  // displayNone: true,
                  inputHeader: "Facility for ART",
                  icon: icons.search,
                  value: "",
                  name: "facility for art",
                  popOver: true,
                  valueType: "text",
                  eventType: "input",
                  required: true,
                  alertsErrorMassage: "",
                  inputWidth: "100%",
                  placeholder: "Search for facility",
                  popOverData: {
                    filterData: false,
                    data: []
                  },
                  id: "",
                  idName: "facility_id"
                }
              ]
              // btns:[
              //     {
              //         name: "Save",
              //         fill: "clear",
              //         icon: icons.plus
              //     }
              // ]
            }
          ]
        }
      },
      {
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Last HB result",
                  unit: "",
                  // icon: icons.calenderPrimary,
                  value: " ",
                  valueType: "number",
                  name: "HB",
                  eventType: "input"
                }
              ]
            }
          ]
        }
      }
    ]
  }),
  actions: {
    setOtherExams(data) {
      this.labourReferral = data;
    },
    setLab(data) {
      this.labourLab = data;
    }
  }
  //
});

const _sfc_main$u = defineComponent({
  name: "FirstVaginalExamination",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      facilityData: []
    };
  },
  computed: {
    ...mapState(useLabourReferralStore, ["labourReferral", "labourLab"])
  },
  mounted() {
    this.handleART();
    this.handleARTYes();
  },
  watch: {
    labourReferral: {
      handler() {
        this.handleMother();
        this.handleOtherMother();
        this.handleOtherBaby();
      },
      deep: true
    },
    labourLab: {
      handler(event) {
        this.handleART();
        this.handleARTYes();
        this.handleInputData(event);
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async Lab(event) {
      YupValidateField(this.labourLab, ReferralValidationSchema, event.name, event.value);
    },
    async Referral(event) {
      YupValidateField(this.labourReferral, ReferralValidationSchema, event.name, event.value);
    },
    async handleInputData(event) {
      this.Lab(event);
      this.Referral(event);
      if (event.inputHeader == "Facility for ART") {
        this.facilityData = await this.getFacility(event.value);
        modifyFieldValue(this.labourLab, "facility for art", "popOverData", {
          filterData: false,
          data: this.facilityData
        });
      }
    },
    async getFacility(value) {
      const data = await LocationService.getFacilities({ name: value });
      return data;
    },
    handleMother() {
      const value = getRadioSelectedValue(this.labourReferral, "referred");
      modifyCheckboxHeader(this.labourReferral, "referring mother", "displayNone", !(value == "mother"));
      modifyCheckboxHeader(this.labourReferral, "Baby identifier", "displayNone", !(value == "baby"));
      modifyFieldValue(this.labourReferral, "treatment given to baby before referral", "displayNone", !(value == "baby"));
      modifyFieldValue(this.labourReferral, "Time of referral", "displayNone", !(value == "baby"));
      modifyFieldValue(this.labourReferral, "Date of referral", "displayNone", !(value == "baby"));
      modifyFieldValue(this.labourReferral, "Provider who made referral", "displayNone", !(value == "baby"));
      modifyFieldValue(this.labourReferral, "Phone number for provider", "displayNone", !(value == "baby"));
    },
    handleOtherMother() {
      if (getCheckboxSelectedValue(this.labourReferral, "Other")?.value == "other") {
        modifyFieldValue(this.labourReferral, "specify", "displayNone", false);
      } else {
        modifyFieldValue(this.labourReferral, "specify", "displayNone", true);
      }
    },
    handleOtherBaby() {
      if (getCheckboxSelectedValue(this.labourReferral, "Other reason")?.value == "other reason") {
        modifyFieldValue(this.labourReferral, "other", "displayNone", false);
      } else {
        modifyFieldValue(this.labourReferral, "other", "displayNone", true);
      }
    },
    handleART() {
      if (getRadioSelectedValue(this.labourLab, "HIV") == "positive") {
        modifyRadioValue(this.labourLab, "chronic conditions", "displayNone", false);
      } else {
        modifyRadioValue(this.labourLab, "chronic conditions", "displayNone", true);
      }
    },
    handleARTYes() {
      if (getRadioSelectedValue(this.labourLab, "chronic conditions") == "Yes") {
        modifyFieldValue(this.labourLab, "Art number", "displayNone", false);
        modifyFieldValue(this.labourLab, "facility for art", "displayNone", false);
      } else {
        modifyFieldValue(this.labourLab, "Art number", "displayNone", true);
        modifyFieldValue(this.labourLab, "facility for art", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$u = { class: "container" };
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$u, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.labourReferral,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.labourLab,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const PatientReferral = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u], ["__scopeId", "data-v-b36e2fed"]]);

const babyDetails = [
  {
    sideColSize: 1,
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "First name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "First name",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Last name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Last name",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "APGAR score at 1 minute",
              unit: "",
              icon: icons.editPen,
              valueType: "text",
              value: "",
              name: "Apgar score at 1 minute",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "APGAR score at 5 minutes",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Apgar score at 5 minutes",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Newborn sex",
        selectedValue: "",
        class: "bold",
        displayNone: false,
        name: "Sex"
      },
      data: [
        {
          name: "Male",
          value: "male",
          colSize: "3"
        },
        {
          name: "Female",
          value: "female",
          colSize: "4"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    isFinishBtn: false,
    classDash: "",
    radioBtnContent: {
      header: {
        displayNone: false,
        title: "Newborn vitals",
        class: "bold",
        selectedValue: "",
        name: "vitals"
      },
      data: []
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "Baby weight",
              unit: "grams",
              icon: icons.weight,
              valueType: "text",
              value: "",
              name: "Weight",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Baby height",
              unit: "cm",
              icon: icons.height,
              value: "",
              valueType: "text",
              name: "Height",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Head circumference",
              unit: "cm",
              icon: icons.height,
              value: "",
              valueType: "text",
              name: "Circumference",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Tetracycline eye ointment given?",
        selectedValue: "",
        class: "bold",
        displayNone: false,
        name: "Tetracycline eye ointment given"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Baby general condition at birth",
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "Any Newborn complications?",
        selectedValue: "",
        class: "bold",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Prematurity",
          value: "prematurity",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Sepsis",
          value: "sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Congenital abnormalities",
          value: "Congenital abnormalities",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Asphyxia",
          value: "Asphyxia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Low birthweight",
          value: "Low birthweight",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    classDash: "dashed_bottom_border _padding",
    childName: "Baby general condition at birth",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: true
      },
      data: [
        {
          name: "Nursery",
          value: "Nursery",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Other complications",
          value: "Other complications",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify Congenital Abnormalities",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Specify",
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Asphyxia",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was resuscitation attempted?",
        selectedValue: "",
        name: "Resuscitation attempt",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Resuscitation attempt",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Type of resuscitation?",
        selectedValue: "",
        displayNone: true,
        class: "bold",
        name: "Type of resuscitation"
      },
      data: [
        {
          name: "Drying only",
          value: "Drying only",
          colSize: "7"
        },
        {
          name: "Clearing airway",
          value: "Clearing airway",
          colSize: "7"
        },
        {
          name: "Bag and mask",
          value: "Bag and mask",
          colSize: "7"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Other",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "Select the management given to newborn",
        selectedValue: "",
        class: "bold",
        displayNone: true,
        name: "Management to newborn"
      },
      data: [
        {
          name: "Routine newborn care",
          value: "Routine newborn care",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Baby general condition at birth",
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        displayNone: true,
        name: "Management to newborn"
      },
      data: [
        {
          name: "Kangaroo mother care",
          value: "Kangaroo mother care",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        displayNone: true,
        name: "Management to newborn"
      },
      data: [
        {
          name: "Antibiotics",
          value: "Antibiotics",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    classDash: "dashed_bottom_border _padding",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        displayNone: true,
        name: "Management to newborn"
      },
      data: [
        {
          name: "Other",
          value: "Other",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    sideColSize: 1,
    isFinishBtn: false,
    childName: "Baby general condition at birth",
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Vitamin K given?",
        selectedValue: "",
        name: "Vitamin K given",
        class: "bold",
        displayNone: false
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Baby general condition at birth",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Chlorhexidine 7.1% applied?",
        selectedValue: "",
        class: "bold",
        displayNone: false,
        name: "Chlorhexidine"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  }
];
const BabyDetailsValidationSchema = create$3().shape({
  "First name": create$6().required("First Name is required").max(50, "First Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Last name": create$6().required("first name is required").max(50, "Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Apgar score at 1 minute": create$5().typeError("Apgar score at 1 minute can only be a number").required("Apgar score at 1 minute is required").label("Apgar score at 1 minute"),
  "Apgar score at 5 minute": create$5().typeError("Apgar score at 5 minute can only be a number").required().label("Apgar score at 5 minute"),
  Weight: create$5().typeError("Weight can only be a number").min(2500).required().label("Weight"),
  Height: create$5().typeError("Height can only be a number").min(2500).required().label("Weight"),
  Circumference: create$5().typeError("Circimference can only be a number").required().label("Circumference"),
  "Estimated blood loss": create$5().typeError("Estimated blood loss can only be a number").min(2500).required().label("Weight")
});
const initialSecondStageDetails = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "",
    radioBtnContent: {
      header: {
        title: "Time and date of delivery",
        class: "bold",
        selectedValue: ""
      },
      data: []
    }
  },
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Time of delivery",
              unit: "",
              icon: icons.time,
              value: "",
              valueType: "text",
              name: "Time of delivery",
              required: true,
              eventType: "input",
              placeholder: "Pick time"
              // isDatePopover:true,
            },
            {
              inputHeader: "Date of delivery",
              unit: "",
              icon: icons.calenderPrimary,
              value: "",
              valueType: "text",
              name: "Date of delivery",
              required: true,
              datePopover: true,
              eventType: "input",
              placeholder: "Pick date",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Baby general condition at birth",
        selectedValue: "",
        name: "Baby general condition at birth",
        displayNext: "Live full term"
      },
      data: [
        {
          name: "Live full term",
          value: "Live full term",
          colSize: "5"
        },
        {
          name: "Live preterm",
          value: "Live preterm",
          colSize: "5"
        },
        {
          name: "Macerated stillbirth",
          value: "Macerated stillbirth",
          colSize: "5"
        },
        {
          name: "Fresh stillbirth",
          value: "Fresh stillbirth",
          colSize: "5"
        },
        {
          name: "Neonatal Death",
          value: "Neonatal Death",
          colSize: "5"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "Number of babies born",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "",
              unit: "Babies",
              icon: icons.editPen,
              value: "",
              name: "Number of babies",
              required: true,
              eventType: "input",
              placeholder: "",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Other complications",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  }
];
const initialNewbornComplications = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Place of delivery",
        name: "Place of delivery",
        selectedValue: ""
      },
      data: [
        {
          name: "This facility",
          value: "This facility",
          colSize: "5"
        },
        {
          name: "In transit",
          value: "In transit",
          colSize: "5"
        },
        {
          name: "Home",
          value: "Home",
          colSize: "5"
        },
        {
          name: "Other facility",
          value: "Other facility",
          colSize: "7"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    header: {
      title: "Other Facility",
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              class: "bold",
              inputHeader: "Specify Other Facility?",
              icon: icons.search,
              value: "",
              name: "Facility",
              popOver: true,
              valueType: "text",
              eventType: "input",
              required: true,
              alertsError: false,
              alertsErrorMassage: "",
              placeholder: "Search for facility",
              popOverData: {
                filterData: false,
                data: []
              },
              id: "",
              idName: "facility_id"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Mode of delivery",
        name: "Mode of delivery",
        selectedValue: "",
        displayNext: "Other mode of delivery"
      },
      data: [
        {
          name: "Spontaneous Vertex Delivery",
          value: "Spontaneous Vertex Delivery",
          colSize: "6"
        },
        {
          name: "Vacuum extraction delivery",
          value: "Vacuum extraction delivery",
          colSize: "6"
        },
        {
          name: "Breech (BR)",
          value: "Breech",
          colSize: "6"
        },
        {
          name: "Caesarean section",
          value: "Caesarean section",
          colSize: "6"
        },
        {
          name: "Other mode of delivery",
          value: "Other mode of delivery",
          colSize: "6"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    childName: "Mode of delivery",
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Staff conducting delivery",
        selectedValue: "",
        class: "bold",
        name: "Staff conducting delivery"
      },
      data: [
        {
          name: "Skilled health worker (Nurse midwife/community midwife assistant/medical assistant/clinical technician/medical doctor",
          value: "Skilled health worker (Nurse midwife/community midwife assistant/medical assistant/clinical technician/medical doctor",
          colSize: "12"
        },
        {
          name: "Unskilled (Patient attendant/ ward attendant/ health surveillance assistant/other/none",
          value: "Unskilled (Patient attendant/ ward attendant/ health surveillance assistant/other/none",
          colSize: "12"
        },
        {
          name: "Traditional birth attendant (TBA)",
          value: "Traditional birth attendant (TBA)",
          colSize: "12"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Estimated blood loss",
              unit: "ml",
              icon: icons.editPen,
              valueType: "text",
              value: "",
              name: "Estimated blood loss",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  }
];
const initialObstetricDetails = [
  {
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "Any obstetric complications?",
        selectedValue: "",
        name: "Obstetric complications",
        class: "bold"
      },
      data: [
        {
          name: "No complications",
          value: "No complications",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Postpartum haemorrhage",
          value: "postpartum haemorrhage",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric complications"
      },
      data: [
        {
          name: "Pre-Eclampsia",
          value: "Pre-Eclampsia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Sepsis",
          value: "Sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric complications"
      },
      data: [
        {
          name: "Retained placenta",
          value: "retained placenta",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Perineal tear",
          value: "Perineal tear",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric complications"
      },
      data: [
        {
          name: "Other complications",
          value: "Other complications",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        displayNone: true,
        title: "Severity of Perineal Tear",
        selectedValue: "",
        name: "Severity",
        class: "bold"
      },
      data: [
        {
          name: "Lacerations",
          value: "Lacerations",
          colSize: "2.5"
        },
        {
          name: "First Degree",
          value: "First Degree",
          colSize: "3"
        },
        {
          name: "Second Degree",
          value: "Second Degree",
          colSize: "3"
        },
        {
          name: "Third Degree",
          value: "Third Degree",
          colSize: "3"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "Obstetric care provided",
        selectedValue: "",
        class: "bold",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "None",
          value: "None",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Oxytocin/cabitocin/tranexamic acid",
          value: "oxytocin/cabitocin/tranexamic acid",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Anticonvulsants",
          value: "anticonvulsants",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Antibiotics",
          value: "antibiotics",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Blood transfusion",
          value: "blood transfusion",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Manual removal of placenta",
          value: "manual removal of placenta",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Non-pneumatic Anti-shock Garment (NASG)",
          value: "Non-pneumatic Anti-shock Garment (NASG)",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Manual Removal of Retained Products of Conception",
          value: "manual Removal of Retained Products of Conception",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Evacuation",
          value: "evacuation",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Misoprostol",
          value: "misoprostol",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Obstetric care",
        displayNone: true
      },
      data: [
        {
          name: "Other care",
          value: "Other care",
          checked: false,
          labelPlacement: "start",
          colSize: "8",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other care",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: "85%"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Dexamethasone?",
        selectedValue: "",
        name: "Dexamethasone",
        class: "bold"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  }
];
const useSecondStageOfLabourStore = defineStore("secondStageOfLabourStore", {
  state: () => ({
    secondStageDetails: [...initialSecondStageDetails],
    newbornComplications: [...initialNewbornComplications],
    obstetricComplications: [...initialObstetricDetails],
    babyDetails: [..._.cloneDeep(babyDetails)]
  }),
  actions: {
    setNewbornComplications(data) {
      this.newbornComplications = data;
    },
    setSecondStageDetails(data) {
      this.secondStageDetails = data;
    },
    setObstetricComplications(data) {
      this.obstetricComplications = data;
    },
    setBabyDetails(details = babyDetails) {
      this.babyDetails = [..._.cloneDeep(details)];
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialSecondStageDetails);
      return [...data];
    },
    getInitialNewbornComplications() {
      const data = lodashExports.cloneDeep(initialNewbornComplications);
      return [...data];
    },
    getInitialObstetricDetails() {
      const data = lodashExports.cloneDeep(initialObstetricDetails);
      return [...data];
    },
    async validateBabeDetails() {
      const babyDetails2 = extractArrayOfNameValue(this.secondStageDetails);
      const babyDetailsValid = await validateStore(this.secondStageDetails, BabyDetailsValidationSchema, babyDetails2);
      return babyDetailsValid;
    },
    async validateNewBornComplications() {
      const newBorn = extractArrayOfNameValue(this.newbornComplications);
      const newBornValidate = await validateStore(this.newbornComplications, BabyDetailsValidationSchema, newBorn);
      return newBornValidate;
    }
  }
  //
});

const _sfc_main$t = defineComponent({
  name: "BabyDetailsModal",
  components: {
    DynamicButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonIcon,
    BasicForm
  },
  data() {
    return {
      initialData: []
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    closeModalFunc: {
      type: Function,
      required: true
    },
    onYes: {
      type: Function,
      required: true
    },
    onNo: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(useSecondStageOfLabourStore, ["babyDetails"]),
    ...mapState(useSecondStageOfLabourStore, ["secondStageDetails"])
  },
  watch: {
    secondStageDetails: {
      async handler() {
        this.handleChangeDisplay();
      },
      deep: true
    },
    babyDetails: {
      handler() {
        this.handleChangeDisplay();
        const complications = [
          "Prematurity",
          "Sepsis",
          "Congenital abnormalities",
          "Asphyxia",
          "Other complications",
          "Low birthweight",
          "Nursery"
        ];
        const managementNewborn = [
          "Kangaroo mother care",
          "Antibiotics",
          "Other"
        ];
        this.handleComplicationCheck(complications);
        this.handleNone(complications, "None");
        this.handleNone(managementNewborn, "Routine newborn care");
        this.handleCongenitalCheck();
        this.handleAsphyxiaCheck();
        this.handleResuscitationChange();
      },
      deep: true
    }
  },
  methods: {
    async handleInputData(event) {
      YupValidateField(
        this.babyDetails,
        BabyDetailsValidationSchema,
        event.name,
        event.value
      );
    },
    closeCircleOutline() {
      return closeCircleOutline;
    },
    closeModal() {
      this.closeModalFunc();
    },
    confirm() {
      this.onYes();
      this.babyDetails = [];
      this.closeModal();
    },
    handleChangeDisplay() {
      const babyGeneralCondition = getRadioSelectedValue(
        this.secondStageDetails,
        "Baby general condition at birth"
      );
      this.babyDetailsDisplayNone(
        babyGeneralCondition == "Macerated stillbirth" || babyGeneralCondition == "Fresh stillbirth"
      );
    },
    babyDetailsDisplayNone(visibility) {
      modifyFieldValue(
        this.babyDetails,
        "First name",
        "displayNone",
        visibility
      );
      modifyFieldValue(
        this.babyDetails,
        "Last name",
        "displayNone",
        visibility
      );
      modifyFieldValue(
        this.babyDetails,
        "Apgar score at 1 minute",
        "displayNone",
        visibility
      );
      modifyFieldValue(
        this.babyDetails,
        "Apgar score at 5 minute",
        "displayNone",
        visibility
      );
      modifyRadioValue(
        this.babyDetails,
        "Tetracycline eye ointment given",
        "displayNone",
        visibility
      );
      modifyRadioValue(
        this.babyDetails,
        "Chlorhexidine",
        "displayNone",
        visibility
      );
      modifyCheckboxHeader(
        this.babyDetails,
        "Newborn baby complications",
        "displayNone",
        visibility
      );
      modifyRadioValue(
        this.babyDetails,
        "Oxytocin 10 UI given",
        "displayNone",
        visibility
      );
      modifyRadioValue(
        this.babyDetails,
        "Vitamin K given",
        "displayNone",
        visibility
      );
    },
    handleNone(checkBoxes, noneConcept) {
      if (getCheckboxSelectedValue(this.babyDetails, noneConcept)?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.babyDetails, checkbox, "checked", false);
          modifyCheckboxValue(this.babyDetails, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.babyDetails, checkbox, "disabled", false);
        });
      }
    },
    // find another means
    handleComplicationCheck(checkBoxes) {
      let checked = false;
      checkBoxes.forEach((checkbox) => {
        checked = checked || getCheckboxSelectedValue(this.babyDetails, checkbox)?.checked;
      });
      modifyCheckboxHeader(this.babyDetails, "Management to newborn", "displayNone", !checked);
    },
    handleCongenitalCheck() {
      const checked = getCheckboxSelectedValue(
        this.babyDetails,
        "Congenital abnormalities"
      )?.checked;
      modifyFieldValue(this.babyDetails, "Specify", "displayNone", !checked);
    },
    handleAsphyxiaCheck() {
      const checked = getCheckboxSelectedValue(
        this.babyDetails,
        "Asphyxia"
      )?.checked;
      modifyRadioValue(
        this.babyDetails,
        "Resuscitation attempt",
        "displayNone",
        !checked
      );
    },
    handleResuscitationChange() {
      const yesValue = getRadioSelectedValue(this.babyDetails, "Resuscitation attempt") == "Yes";
      modifyRadioValue(
        this.babyDetails,
        "Type of resuscitation",
        "displayNone",
        !yesValue
      );
    }
  }
});

const _hoisted_1$t = { style: { "display": "flex" } };
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.isOpen,
    "show-backdrop": true,
    onDidDismiss: _ctx.closeModal
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createVNode(_component_ion_title, { style: { "color": "black" } }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }),
          createVNode(_component_basic_form, {
            contentData: _ctx.babyDetails,
            initialData: _ctx.initialData,
            "onUpdate:selected": _ctx.handleInputData,
            "onUpdate:inputValue": _ctx.handleInputData
          }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"]),
          createBaseVNode("div", _hoisted_1$t, [
            createVNode(_component_DynamicButton, {
              expand: "block",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.confirm()),
              name: "Save",
              style: `flex:1`
            }),
            createVNode(_component_DynamicButton, {
              expand: "block",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onNo()),
              style: `flex:1`,
              name: "Cancel",
              fill: "clear"
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open", "onDidDismiss"]);
}
const BabyDetailsModal = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t], ["__scopeId", "data-v-05a7ad08"]]);

const _sfc_main$s = defineComponent({
  name: "SecondStageDelivery",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup,
    IonButton,
    BabyDetailsModal
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: [],
      arrayOfBabies: [],
      babyModalOpen: false,
      selectedBaby: 0,
      babiesDetails: [],
      showSection: false
    };
  },
  computed: {
    ...mapState(useSecondStageOfLabourStore, ["secondStageDetails"]),
    ...mapState(useSecondStageOfLabourStore, ["babyDetails"]),
    ...mapState(useSecondStageOfLabourStore, ["newbornComplications"])
  },
  mounted() {
    const secondStageDetails = useSecondStageOfLabourStore();
    this.initialData = secondStageDetails.getInitial();
  },
  watch: {
    secondStageDetails: {
      handler() {
        this.handleBabyCondition();
        this.handleNumberOfBabies();
        this.handleSelectedStillBirth();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleValidateNewBorn(event) {
      YupValidateField(this.newbornComplications, BabyDetailsValidationSchema, event.name, event.value);
    },
    async handleValidateBabies(event) {
      YupValidateField(this.secondStageDetails, BabyDetailsValidationSchema, event.name, event.value);
    },
    async handleInputData(event) {
      this.handleValidateBabies(event);
      this.handleValidateNewBorn(event);
    },
    handleNumberOfBabies() {
      const numberOfBabies = getFieldValue(this.secondStageDetails, "Number of babies", "value");
      this.arrayOfBabies = [...Array(Number(numberOfBabies)).keys()];
    },
    closeBabyModal() {
    },
    handleSelectedStillBirth() {
      const babyGeneralCondition = getRadioSelectedValue(this.secondStageDetails, "Baby general condition at birth");
      if (babyGeneralCondition == "Macerated stillbirth" || babyGeneralCondition == "Fresh stillbirth") {
        this.showSection = false;
        this.babyDetailsDisplayNone(true);
        return;
      }
      this.babyDetailsDisplayNone(false);
      this.showSection = true;
    },
    selectBaby(n) {
      this.selectedBaby = n;
      const baby = this.babiesDetails.find((b) => b.baby == n);
      const secondStageDetails = useSecondStageOfLabourStore();
      secondStageDetails.setBabyDetails(baby.details);
      this.toggleBabyModal();
    },
    checkIfSubmitted(n) {
      return this.babiesDetails.find((b) => b.baby == n);
    },
    handleBabyYes() {
      this.toggleBabyModal();
      const secondStageDetails = useSecondStageOfLabourStore();
      const index = this.babiesDetails.findIndex((b) => b.baby == this.selectedBaby);
      if (index < 0) {
        this.babiesDetails.push({ baby: this.selectedBaby, details: [..._.cloneDeep(secondStageDetails.babyDetails)] });
      } else {
        this.babiesDetails[index].details = [..._.cloneDeep(secondStageDetails.babyDetails)];
      }
      secondStageDetails.setBabyDetails();
    },
    handleBabyNo() {
      this.toggleBabyModal();
      useSecondStageOfLabourStore().secondStageDetails.setBabyDetails();
    },
    toggleBabyModal() {
      this.babyModalOpen = !this.babyModalOpen;
    },
    handleAddBabyDetails(babyNumber) {
      const secondStageDetails = useSecondStageOfLabourStore();
      secondStageDetails.setBabyDetails();
      this.selectedBaby = babyNumber;
      this.toggleBabyModal();
    },
    handleBabyCondition() {
      const babyGeneralCondition = getRadioSelectedValue(this.secondStageDetails, "Baby general condition at birth");
      if (babyGeneralCondition == "Live full term" || babyGeneralCondition == "Live preterm") {
        this.babyDisplayNone(false);
      } else {
        this.babyDisplayNone(true);
      }
    },
    babyDisplayNone(visibility) {
      modifyFieldValue(this.secondStageDetails, "First name", "displayNone", visibility);
      modifyFieldValue(this.secondStageDetails, "Last name", "displayNone", visibility);
      modifyFieldValue(this.secondStageDetails, "Apgar score at 1 minute", "displayNone", visibility);
      modifyFieldValue(this.secondStageDetails, "Apgar score at 5 minutes", "displayNone", visibility);
      modifyRadioValue(this.secondStageDetails, "Sex", "displayNone", visibility);
      modifyRadioValue(this.secondStageDetails, "vitals", "displayNone", visibility);
      modifyFieldValue(this.secondStageDetails, "Weight", "displayNone", visibility);
      modifyFieldValue(this.secondStageDetails, "Height", "displayNone", visibility);
      modifyFieldValue(this.secondStageDetails, "Circumference", "displayNone", visibility);
      modifyRadioValue(this.secondStageDetails, "Tetracycline eye ointment given", "displayNone", visibility);
      modifyRadioValue(this.secondStageDetails, "Chlorhexidine", "displayNone", visibility);
      modifyCheckboxHeader(this.secondStageDetails, "Newborn baby complications", "displayNone", visibility);
      modifyCheckboxHeader(this.secondStageDetails, "Management to newborn", "displayNone", visibility);
      modifyRadioValue(this.secondStageDetails, "Oxytocin 10 UI given", "displayNone", visibility);
      modifyRadioValue(this.secondStageDetails, "bold", "displayNone", visibility);
      modifyRadioValue(this.secondStageDetails, "babyDetails", "displayNone", visibility);
    },
    babyDetailsDisplayNone(visibility) {
      modifyFieldValue(this.babyDetails, "First name", "displayNone", visibility);
      modifyFieldValue(this.babyDetails, "Last name", "displayNone", visibility);
      modifyFieldValue(this.babyDetails, "Apgar score at 1 minute", "displayNone", visibility);
      modifyFieldValue(this.babyDetails, "Apgar score at 5 minute", "displayNone", visibility);
      modifyRadioValue(this.babyDetails, "Tetracycline eye ointment given", "displayNone", visibility);
      modifyRadioValue(this.babyDetails, "Chlorhexidine", "displayNone", visibility);
      modifyCheckboxHeader(this.babyDetails, "Newborn baby complications", "displayNone", visibility);
      modifyRadioValue(this.babyDetails, "Oxytocin 10 UI given", "displayNone", visibility);
      modifyRadioValue(this.babyDetails, "Vitamin K given", "displayNone", visibility);
    }
  }
});

const _hoisted_1$s = { class: "container" };
const _hoisted_2$h = { key: 0 };
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_BabyDetailsModal = resolveComponent("BabyDetailsModal");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$s, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.secondStageDetails,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"]),
            createVNode(_component_BabyDetailsModal, {
              closeModalFunc: _ctx.closeBabyModal,
              onYes: _ctx.handleBabyYes,
              onNo: _ctx.handleBabyNo,
              isOpen: _ctx.babyModalOpen,
              title: ``
            }, null, 8, ["closeModalFunc", "onYes", "onNo", "isOpen"]),
            _ctx.arrayOfBabies.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$h, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.arrayOfBabies, (n) => {
                return openBlock(), createElementBlock("div", { key: n }, [
                  !_ctx.checkIfSubmitted(n) ? (openBlock(), createBlock(_component_ion_button, {
                    key: 0,
                    onClick: ($event) => _ctx.handleAddBabyDetails(n)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Add Baby " + toDisplayString(n + 1), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true),
                  _ctx.checkIfSubmitted(n) ? (openBlock(), createBlock(_component_ion_button, {
                    key: 1,
                    onClick: ($event) => _ctx.selectBaby(n)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View Baby " + toDisplayString(n + 1), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const DeliveryNewbornDetails = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s], ["__scopeId", "data-v-137aebb8"]]);

const _sfc_main$r = defineComponent({
  name: "DeliveryNewbornDetails",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: [],
      facilities: []
    };
  },
  computed: {
    ...mapState(useSecondStageOfLabourStore, ["newbornComplications"])
  },
  async mounted() {
    const newbornComplications = useSecondStageOfLabourStore();
    this.initialData = newbornComplications.getInitialNewbornComplications();
  },
  watch: {
    newbornComplications: {
      handler() {
        this.handleOtherFacilitySelect();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleInputData(col) {
      if (col.name == "Facility") {
        modifyFieldValue(this.newbornComplications, "Facility", "popOverData", {
          filterData: false,
          data: await this.getLocations(col.value)
        });
      }
    },
    handleOtherFacilitySelect() {
      const otherCheck = getRadioSelectedValue(this.newbornComplications, "Place of delivery") == "Other facility";
      modifyFieldValue(this.newbornComplications, "Facility", "displayNone", !otherCheck);
    },
    async getLocations(value) {
      return await LocationService.getFacilities({ name: value });
    }
  }
});

const _hoisted_1$r = { class: "container" };
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$r, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.newbornComplications,
              initialData1: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData1", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const OtherDeliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r], ["__scopeId", "data-v-52f7f738"]]);

const _sfc_main$q = defineComponent({
  name: "SecondStageDelivery",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(useSecondStageOfLabourStore, ["obstetricComplications"])
  },
  mounted() {
    const obstetricComplications = useSecondStageOfLabourStore();
    this.initialData = obstetricComplications.getInitialObstetricDetails();
  },
  watch: {
    obstetricComplications: {
      handler() {
        this.handleOtherComplications();
        this.handlePerinealTear();
        const obstetricComplications = ["Perineal tear", "Sepsis", "Pre-Eclampsia", "Retained placenta", "Postpartum haemorrhage"];
        const obstetricCareProvided = ["Oxytocin/cabitocin/tranexamic acid", "Anticonvulsants", "Antibiotics", "Blood transfusion", "Manual removal of placenta", "Non-pneumatic Anti-shock Garment (NASG)", "Manual Removal of Retained Products of Conception", "Evacuation", "Misoprostol", "Other care"];
        this.handleObstetricComplicationCheck(obstetricComplications);
        this.handleNone([...obstetricComplications, "Other complications"], "No complications");
        this.handleNone(obstetricCareProvided, "None");
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleOtherComplications() {
      const checked = getCheckboxSelectedValue(this.obstetricComplications, "Other complications")?.checked;
      modifyFieldValue(
        this.obstetricComplications,
        "Other notes",
        "displayNone",
        !checked
      );
    },
    handlePerinealTear() {
      const checked = getCheckboxSelectedValue(this.obstetricComplications, "Perineal tear")?.checked;
      modifyRadioValue(
        this.obstetricComplications,
        "Severity",
        "displayNone",
        !checked
      );
    },
    handleObstetricComplicationCheck(checkBoxes) {
      let checked = false;
      checkBoxes.forEach((checkbox) => {
        checked = checked || getCheckboxSelectedValue(this.obstetricComplications, checkbox)?.checked;
      });
      modifyCheckboxHeader(this.obstetricComplications, "Obstetric care", "displayNone", !checked);
    },
    handleNone(checkBoxes, noneConcept) {
      if (getCheckboxSelectedValue(this.obstetricComplications, noneConcept)?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.obstetricComplications, checkbox, "checked", false);
          modifyCheckboxValue(this.obstetricComplications, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.obstetricComplications, checkbox, "disabled", false);
        });
      }
    }
  }
});

const _hoisted_1$q = { class: "container" };
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$q, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.obstetricComplications,
              initialData2: _ctx.initialData
            }, null, 8, ["contentData", "initialData2"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const ObstetricComplications = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q], ["__scopeId", "data-v-8005c521"]]);

const _sfc_main$p = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    IonPopover,
    DashBox,
    SelectionPopover,
    BasicInputField,
    BasicForm,
    List,
    DynamicButton,
    DeliveryNewbornDetails,
    OtherDeliveryDetails,
    ObstetricComplications
  },
  data() {
    return {
      iconsContent: icons,
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      testResult: "",
      test: "",
      orders: "",
      filteredSpecimen: "",
      labOrders: "",
      testData: [],
      popoverOpen: false,
      levelOfConsciousnessStatus: false,
      presentingComplaintsStatus: false,
      pregnancyBreastfeedingStatus: false,
      pastMedicalHistory: false,
      allergiesStatus: false,
      physicalExamination: false,
      event: "",
      specimen: "",
      radiologyOrdersStatus: false,
      otherOrdersStatus: false,
      showSection: true
    };
  },
  computed: {
    ...mapState(useSecondStageOfLabourStore, ["secondStageDetails"]),
    ...mapState(useSecondStageOfLabourStore, ["newbornComplications"]),
    ...mapState(useSecondStageOfLabourStore, ["secondStageDetails"]),
    ...mapState(useSecondStageOfLabourStore, ["obstetricComplications"])
  },
  mounted() {
    useSecondStageOfLabourStore();
    useSecondStageOfLabourStore();
    useSecondStageOfLabourStore();
    this.handleModeOfDeliver();
  },
  watch: {
    newbornComplications: {
      handler() {
        this.handleModeOfDeliver();
      },
      deep: true
    },
    secondStageDetails: {
      handler() {
        this.handleSelectedStillBirth();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleModeOfDeliver() {
    },
    handleSelectedStillBirth() {
      const babyGeneralCondition = getRadioSelectedValue(this.secondStageDetails, "Baby general condition at birth");
      if (babyGeneralCondition == "Macerated stillbirth" || babyGeneralCondition == "Fresh stillbirth") {
        this.showSection = false;
        return;
      }
      this.showSection = true;
    }
  }
});

const _hoisted_1$p = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2$g = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_DeliveryNewbornDetails = resolveComponent("DeliveryNewbornDetails");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_OtherDeliveryDetails = resolveComponent("OtherDeliveryDetails");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Delivery and newborn details", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_1$p, [
                createVNode(_component_DeliveryNewbornDetails)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      _ctx.showSection ? (openBlock(), createBlock(_component_ion_accordion_group, {
        key: 0,
        ref: "accordionGroup",
        class: "previousView"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("Other delivery details", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_2$g, [
                createVNode(_component_OtherDeliveryDetails)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512)) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const SecondStageDelivery = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p], ["__scopeId", "data-v-21fe3127"]]);

const PlacentaExaminationValidationSchema = create$3().shape({
  Weight: create$5().typeError("Weight can only be a number").min(0).required().label("Weight"),
  Length: create$5().typeError("Length can only be a number").min(0).required(),
  "Cord Length": create$5().typeError("Cord Length can only be a number").min(0).required(),
  "Number of vessels": create$5().typeError("Number of Vessels can only be a number").min(0).max(5).required(),
  "Estimated Blood Loss": create$5().typeError("Estimated Blood Loss can only be a number").min(0).required()
});
const initialPlacentaExamination = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Oxytocin 10 IU given",
        selectedValue: "",
        class: "bold",
        name: "Oxytocin"
        // displayNext: "Other",
      },
      data: [
        {
          name: " Yes",
          value: " yes",
          colSize: "7"
        },
        {
          name: "No",
          value: "no",
          colSize: "7"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "",
    radioBtnContent: {
      header: {
        title: "Date and time of placenta delivery",
        class: "bold",
        selectedValue: ""
      },
      data: []
    }
  },
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              unit: "",
              icon: icons.time,
              valueType: "text",
              name: "Time of delivery",
              required: true,
              eventType: "input",
              placeholder: "Pick time",
              isTimePopover: true
            },
            {
              inputHeader: "",
              unit: "",
              icon: icons.calenderPrimary,
              value: "",
              valueType: "text",
              name: "Date of delivery",
              required: true,
              eventType: "input",
              placeholder: "Pick date",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Mode of delivery",
        selectedValue: "",
        class: "bold",
        name: "Mode of delivery",
        displayNext: "Other"
      },
      data: [
        {
          name: "Controlled cord traction",
          value: "Controlled cord traction",
          colSize: "7"
        },
        {
          name: "Manual removal",
          value: "Manual removal",
          colSize: "7"
        },
        {
          name: "Other",
          value: "other",
          colSize: "7"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    // childName: "Mode of delivery",
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Specify",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Placenta",
        selectedValue: "",
        class: "bold",
        name: "Placenta"
      },
      data: [
        {
          name: "Complete",
          value: "complete",
          colSize: "3"
        },
        {
          name: "Incomplete",
          value: "incomplete",
          colSize: "3"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Membranes",
        selectedValue: "",
        class: "bold",
        name: "Membranes"
      },
      data: [
        {
          name: "Complete",
          value: "Complete",
          colSize: "3"
        },
        {
          name: "Incomplete",
          value: "Incomplete",
          colSize: "3"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    childName: "Mode of delivery",
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other mode of delivery notes",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "",
    radioBtnContent: {
      header: {
        title: "Placenta Weight and Length",
        class: "bold",
        selectedValue: ""
      },
      data: []
    }
  },
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              unit: "",
              icon: icons.editPen,
              valueType: "text",
              name: "Weight",
              required: true,
              eventType: "input",
              placeholder: "Enter Weight"
            },
            {
              inputHeader: "",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Length",
              required: true,
              eventType: "input",
              placeholder: "Enter Length"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    radioBtnContent: {
      header: {
        title: "Cord Length",
        selectedValue: "",
        class: "bold",
        name: ""
      },
      data: []
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Cord Length",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Cord insertion",
        selectedValue: "",
        class: "bold",
        name: "Cord insertion"
      },
      data: [
        {
          name: "Central",
          value: "central",
          colSize: "3"
        },
        {
          name: "Lateral",
          value: "lateral",
          colSize: "3"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    radioBtnContent: {
      header: {
        title: "Number of vessels",
        selectedValue: "",
        class: "bold",
        name: ""
      },
      data: []
    }
  },
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Number of vessels",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Placenta condition",
        selectedValue: "",
        class: "bold",
        name: "Placenta condition",
        displayNext: "Unhealthy"
      },
      data: [
        {
          name: "Healthy",
          value: "Healthy",
          colSize: "3"
        },
        {
          name: "Unhealthy",
          value: "Unhealthy",
          colSize: "3"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    radioBtnContent: {
      header: {
        title: "Abnormalities",
        selectedValue: "",
        class: "bold",
        name: ""
      },
      data: []
    }
  },
  {
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              unit: "",
              icon: icons.editPen,
              value: "",
              name: "Placenta abnormalities",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    radioBtnContent: {
      header: {
        title: "Estimated Blood Loss",
        selectedValue: "",
        class: "bold",
        name: ""
      },
      data: []
    }
  },
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              unit: "ml",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Estimated Blood Loss",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Cervix",
        selectedValue: "",
        class: "bold",
        name: "Cervix"
      },
      data: [
        {
          name: "Intact",
          value: "Intact",
          colSize: "7"
        },
        {
          name: "Tears",
          value: "tears",
          colSize: "7"
        },
        {
          name: "Lacerations",
          value: "lacerations",
          colSize: "7"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    childName: "Perineum",
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other tears",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        displayNone: true,
        title: "Severity of Tear",
        selectedValue: "",
        name: "Severity",
        class: "bold"
      },
      data: [
        {
          name: "Lacerations",
          value: "Lacerations",
          colSize: "2.5"
        },
        {
          name: "First Degree",
          value: "First Degree",
          colSize: "3"
        },
        {
          name: "Second Degree",
          value: "Second Degree",
          colSize: "3"
        },
        {
          name: "Third Degree",
          value: "Third Degree",
          colSize: "3"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Perineum",
        selectedValue: "",
        class: "bold",
        name: "Perineum",
        displayNext: "Other"
      },
      data: [
        {
          name: "Intact",
          value: "Intact",
          colSize: "3"
        },
        {
          name: "Tears",
          value: "tears",
          colSize: "9"
        },
        {
          name: "Episiotomy",
          value: "episiotomy",
          colSize: "3"
        },
        {
          name: "Lacerations",
          value: "lacerations",
          colSize: "9"
        },
        {
          name: "Other",
          value: "Other",
          colSize: "3"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "repair done",
        selectedValue: "",
        class: "bold",
        name: "repair",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "3"
        },
        {
          name: "No",
          value: "no",
          colSize: "9"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify degree",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "tears degree",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    childName: "Perineum",
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other perineum condition",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Repair done for Tears/Episiotomy",
        selectedValue: "",
        class: "bold",
        name: "Repair done for Tears/Episiotomy"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  }
];
const useThirdStageOfLabourStore = defineStore("thirdStageOfLabour", {
  state: () => ({
    placentaExamination: [...initialPlacentaExamination]
  }),
  actions: {
    setPlacentaExamnianation(data) {
      this.placentaExamination = data;
    },
    getInitial() {
      const data = _.cloneDeep(initialPlacentaExamination);
      return [...data];
    }
  }
  //
});

const _sfc_main$o = defineComponent({
  name: "ThirdStageOfDelivery",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(useThirdStageOfLabourStore, ["placentaExamination"])
  },
  mounted() {
    const placentaExamination = useThirdStageOfLabourStore();
    this.initialData = placentaExamination.getInitial();
    this.handleModeOfDelivery();
    this.handleTears();
    this.handleTearsDegree();
    this.handleRepairDone();
  },
  watch: {
    placentaExamination: {
      handler() {
        this.handleCervixTearChange();
        this.handleModeOfDelivery();
        this.handleTears();
        this.handleTearsDegree();
        this.handleRepairDone();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleInputData(event) {
      YupValidateField(this.placentaExamination, PlacentaExaminationValidationSchema, event.name, event.value);
    },
    handleRepairDone() {
      if (["tears", "episiotomy"].includes(getRadioSelectedValue(this.placentaExamination, "Perineum"))) {
        modifyRadioValue(this.placentaExamination, "repair", "displayNone", false);
      } else {
        modifyRadioValue(this.placentaExamination, "repair", "displayNone", true);
      }
    },
    handleTearsDegree() {
      if (getRadioSelectedValue(this.placentaExamination, "Perineum") == "tears") {
        modifyFieldValue(this.placentaExamination, "tears degree", "displayNone", false);
      } else {
        modifyFieldValue(this.placentaExamination, "tears degree", "displayNone", true);
      }
    },
    handleTears() {
      if (getRadioSelectedValue(this.placentaExamination, "Cervix") == "tears") {
        modifyFieldValue(this.placentaExamination, "Other tears", "displayNone", false);
      } else {
        modifyFieldValue(this.placentaExamination, "Other tears", "displayNone", true);
      }
    },
    handleModeOfDelivery() {
      if (getRadioSelectedValue(this.placentaExamination, "Mode of delivery") == "other") {
        modifyFieldValue(this.placentaExamination, "Specify", "displayNone", false);
      } else {
        modifyFieldValue(this.placentaExamination, "Specify", "displayNone", true);
      }
    },
    handleCervixTearChange() {
      const tearChange = getRadioSelectedValue(this.placentaExamination, "Presentation") == "Other";
      modifyRadioValue(this.placentaExamination, "Severity", "displayNone", !tearChange);
    }
  }
});

const _hoisted_1$o = { class: "container" };
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$o, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.placentaExamination,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const ThirdStageDelivery = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__scopeId", "data-v-9d5a086c"]]);

const useEndLabourStore = defineStore("endLabourStore", {
  state: () => ({
    endLabourAndDelivery: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Reason for closing labour and delivery record",
            selectedValue: "",
            name: "closing labour and delivery"
          },
          data: [
            {
              name: "Death",
              value: "death",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Absconded",
              value: "absconded",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Wrong entry",
              value: "wrong entry",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Specify",
                  unit: "",
                  icon: icons.editPen,
                  value: "",
                  name: "Specify",
                  valueType: "text",
                  required: true,
                  eventType: "input",
                  placeholder: ""
                }
              ]
            }
          ]
        }
      }
    ]
  }),
  actions: {
    setLabourEnd(data) {
      this.endLabourAndDelivery = data;
    }
  }
});

const _sfc_main$n = defineComponent({
  name: "end",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: ""
    };
  },
  computed: {
    ...mapState(useEndLabourStore, ["endLabourAndDelivery"])
  },
  mounted() {
    this.handleOtherEnd();
  },
  watch: {
    endLabourAndDelivery: {
      handler() {
        this.handleOtherEnd();
      },
      deep: true
    }
    //     examsAfterDelivery: {
    //     handler() {
    //         this.handleImmidiate();
    //         this.handleHour();
    //         this.handleUrine();
    //     },
    //     deep: true,
    // },
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleOtherEnd() {
      if (getRadioSelectedValue(this.endLabourAndDelivery, "closing labour and delivery") == "other") {
        modifyFieldValue(this.endLabourAndDelivery, "Specify", "displayNone", false);
      } else {
        modifyFieldValue(this.endLabourAndDelivery, "Specify", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$n = { class: "container" };
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$n, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, { contentData: _ctx.endLabourAndDelivery }, null, 8, ["contentData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const end = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__scopeId", "data-v-c5cfbf12"]]);

const fetalSchema = create$3().shape({
  heart: create$5().typeError("Fetal heart rate can only be number").min(0),
  Cervical: create$5().typeError("Cervical dilation can only be number").min(0).max(10),
  Contractions: create$5().typeError("Contractions can only be number").min(0)
});
const useOtherExamsStore = defineStore("otherExamsStore", {
  state: () => ({
    otherExams: [
      {
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        sectionHeader: "Fetal heart rate",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Fetal heart rate",
                  unit: "cm",
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "heart",
                  required: true,
                  eventType: "input",
                  placeholder: "Number (checked every four hours)",
                  inputWidth: "100%"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "State of Membranes?",
            selectedValue: "",
            class: "bold",
            name: "Membranes"
          },
          data: [
            {
              name: "Ruptured",
              value: "ruptured",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Intact",
              value: "intact",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Holder Membranes?",
            selectedValue: "",
            class: "bold",
            name: "Membranes"
          },
          data: [
            {
              name: "Artifical",
              value: "artifical",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Spontaneously",
              value: "spontaneously",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "State of Liquor",
            selectedValue: "",
            class: "bold",
            name: "State of Liquor"
          },
          data: [
            {
              name: "Clear",
              value: "clear",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Meconium stained",
              value: "meconium stained",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Blood-stained",
              value: "blood-stained",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Absent",
              value: "Absent",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Offensive smell",
              value: "offensive smell",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "What is the Grade?",
            selectedValue: "",
            class: "bold",
            name: "Grade",
            displayNone: true
          },
          data: [
            {
              name: "1",
              value: "1",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "2",
              value: "2",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "3",
              value: "3",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        sectionHeader: "Cervical dilation",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Cervical dilation",
                  unit: "cm",
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "Cervical",
                  required: true,
                  eventType: "input",
                  placeholder: "Number (checked every 30 minutes)",
                  inputWidth: "100%"
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Umbilical Cord ",
            selectedValue: "",
            class: "bold",
            name: "Umbilical Cord"
          },
          data: [
            {
              name: "Not felt",
              value: "Not felt",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Presenting",
              value: "presenting",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Prolapsed",
              value: "prolapsed",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Enter intervention carried out",
                  unit: "",
                  displayNone: true,
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "intervention",
                  required: true,
                  eventType: "input",
                  placeholder: "",
                  inputWidth: "100%",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "rgb(254,205,202)",
            status: "",
            icon: "",
            textColor: "#E60000",
            value: "This is an emergency and clients need to be referred to the district hospital!",
            name: "",
            index: ""
          }
        ]
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: " Descent",
            selectedValue: "",
            class: "bold",
            name: " Descent"
          },
          data: [
            {
              name: "0/5",
              value: "0/5",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "1/5",
              value: "1/5",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "2/5",
              value: "2/5",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "3/5",
              value: "3/5",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "4/5",
              value: "4/5",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "5/5",
              value: "5/5",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Contractions (checked every hour)",
                  unit: "",
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "Contractions",
                  required: true,
                  eventType: "input",
                  placeholder: "",
                  inputWidth: "100%",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Severity of contractions",
            selectedValue: "",
            class: "bold",
            name: "Contractions"
          },
          data: [
            {
              name: "No contractions",
              value: "no contractions",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Mild",
              value: "mild",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "moderate",
              value: "moderate",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Strong",
              value: "strong",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        sectionHeader: "Check urine every two hours",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Urine Volume",
                  unit: "",
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "Urine Volume",
                  required: true,
                  eventType: "input",
                  placeholder: "",
                  inputWidth: "100%",
                  alertsErrorMassage: ""
                },
                {
                  inputHeader: "Urine Color",
                  unit: "",
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "Urine Color",
                  required: true,
                  eventType: "input",
                  placeholder: "",
                  inputWidth: "100%",
                  alertsErrorMassage: ""
                },
                {
                  inputHeader: "Urine Odour",
                  unit: "",
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "Urine Odour",
                  required: true,
                  eventType: "input",
                  placeholder: "",
                  inputWidth: "100%",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "Obstetric complications",
            selectedValue: "",
            class: "bold",
            name: "obstetric complications"
          },
          data: [
            {
              name: "None",
              value: "none",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Antepartum haemorrhage",
              value: "antepartum haemorrhage",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Post partum Haemorrhage",
              value: "post partum Haemorrhage",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Obstructed/Prolonged labour",
              value: "obstructed/Prolonged labour",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Preterm labour",
              value: "preterm labour",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "(Pre-) Eclampsia",
              value: "(pre-) eclampsia",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Sepsis",
              value: "sepsis",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Ruptured uterus",
              value: "ruptured uterus",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Fetal distress",
              value: "fetal distress",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Placenta Previa",
              value: "placenta previa",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Placenta abruption",
              value: "placenta abruption",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Retained placenta",
              value: "retained placenta",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Severe anaemia",
              value: "severe anaemia",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Perineal tear (2nd, 3rd or 4th degree)",
              value: "perineal tear (2nd, 3rd or 4th degree)",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "symphysiotomy",
              value: "symphysiotomy",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Other",
              value: "other",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Specify",
                  unit: "",
                  displayNone: true,
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "Specify",
                  required: true,
                  eventType: "input",
                  placeholder: "",
                  inputWidth: "100%"
                }
              ]
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "Obstetric Care provided",
            selectedValue: "",
            class: "bold",
            name: "Obstetric Care"
            //displayNone: true,
          },
          data: [
            {
              name: "None",
              value: "none",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Oxytocin",
              value: "oxytocin",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Cabitocin",
              value: "cabitocin",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Tranexamic acid",
              value: "tranexamic acid",
              disabled: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Misoprostol",
              value: "misoprostol",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Anticonvulsants",
              value: "anticonvulsants",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Antibiotics",
              value: "antibiotics",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Antenatal corticosteroids",
              value: "antenatal corticosteroids",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Blood transfusion",
              value: "blood transfusion",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Manual removal of placenta (MRP)",
              value: "manual removal of placenta (MRP)",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Non-pneumatic Anti-shock Garment (NASG)",
              value: "non-pneumatic anti-shock garment (NASG)",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Manual Removal of Retained Products of Conception (MRPOC)",
              value: "manual removal of retained products of conception (MRPOC)",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Evacuation",
              value: "evacuation",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            },
            {
              name: "Other",
              value: "other",
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between",
              checked: false
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Corticosteroids given?",
            selectedValue: "",
            class: "bold",
            name: "Corticosteroids"
          },
          data: [
            {
              name: "Dexamethasone",
              value: "dexamethasone",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Betamethasone",
              value: "betamethasone",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Specify",
                  unit: "",
                  icon: icons.editPen,
                  valueType: "text",
                  value: "",
                  name: "Specify",
                  required: true,
                  eventType: "input",
                  placeholder: "",
                  inputWidth: "100%"
                }
              ]
            }
          ]
        }
      }
    ],
    urine: []
  }),
  actions: {
    setOtherExams(data) {
      this.otherExams = data;
    },
    setUrine(data) {
      this.urine = data;
    },
    async validateFatalExam() {
      const fatalExam = extractArrayOfNameValue(this.otherExams);
      const fatalExamValid = await validateStore(this.otherExams, fetalSchema, fatalExam);
      return fatalExamValid;
    }
  }
  //
});

const _sfc_main$m = defineComponent({
  name: "FirstVaginalExamination",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: ""
    };
  },
  computed: {
    ...mapState(useOtherExamsStore, ["otherExams"]),
    ...mapState(useOtherExamsStore, ["urine"])
  },
  mounted() {
    this.handleUrine();
    this.handleUrineColor();
    this.handleUrineColorOdour();
    this.handleDilated();
    this.handleGrade();
    this.handleUmbricalCord();
    this.handleObstetricComplications();
    this.handleOtherComplications();
    this.handleObstetricCare();
  },
  watch: {
    urine: {
      handler() {
        this.handleUrine();
        this.handleUrineColor();
        this.handleUrineColorOdour();
        this.handleDilated();
      },
      deep: true
    },
    otherExams: {
      handler() {
        this.handleGrade();
        this.handleUmbricalCord();
        this.handleObstetricComplications();
        this.handleOtherComplications();
        this.handleObstetricCare();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleValidateFatal(event) {
      YupValidateField(this.otherExams, fetalSchema, event.name, event.value);
    },
    async handleInputData(event) {
      this.handleValidateFatal(event);
    },
    handleUmbricalCord() {
      if (["presenting", "prolapsed"].includes(getRadioSelectedValue(this.otherExams, "Umbilical Cord"))) {
        modifyFieldValue(this.otherExams, "intervention", "displayNone", false);
      } else {
        modifyFieldValue(this.otherExams, "intervention", "displayNone", true);
      }
    },
    handleGrade() {
      if (getCheckboxSelectedValue(this.otherExams, "Meconium stained")?.value == "meconium stained") {
        modifyRadioValue(this.otherExams, "Grade", "displayNone", false);
      } else {
        modifyRadioValue(this.otherExams, "Grade", "displayNone", true);
      }
    },
    handleUrine() {
      if (getRadioSelectedValue(this.urine, "woman urinated") == "yes") {
        modifyFieldValue(this.urine, "amount of urine", "displayNone", false);
      } else {
        modifyFieldValue(this.urine, "amount of urine", "displayNone", true);
      }
    },
    handleUrineColor() {
      if (getRadioSelectedValue(this.urine, "woman urinated") == "yes") {
        modifyFieldValue(this.urine, "color of urine", "displayNone", false);
      } else {
        modifyFieldValue(this.urine, "color of urine", "displayNone", true);
      }
    },
    handleUrineColorOdour() {
      if (getRadioSelectedValue(this.urine, "woman urinated") == "yes") {
        modifyFieldValue(this.urine, "Odour", "displayNone", false);
      } else {
        modifyFieldValue(this.urine, "Odour", "displayNone", true);
      }
    },
    handleDilated() {
      if (getRadioSelectedValue(this.urine, "Fully dilated") == "yes") {
        modifyFieldValue(this.urine, "Time fully dilated", "displayNone", false);
      } else {
        modifyFieldValue(this.urine, "Time fully dilated", "displayNone", true);
      }
    },
    handleObstetricComplications() {
      const checkBoxes = [
        "Antepartum haemorrhage",
        "Post partum Haemorrhage",
        "Obstructed/Prolonged labour",
        "Preterm labour",
        "(Pre-) Eclampsia",
        "Sepsis",
        "Ruptured uterus",
        "Fetal distress",
        "Placenta Previa",
        "Fetal distress",
        "Placenta abruption",
        "Retained placenta",
        "Severe anaemia",
        "Perineal tear (2nd, 3rd or 4th degree)",
        "symphysiotomy",
        "Other"
      ];
      if (getCheckboxSelectedValue(this.otherExams, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.otherExams, checkbox, "checked", false);
          modifyCheckboxValue(this.otherExams, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.otherExams, checkbox, "disabled", false);
        });
      }
    },
    handleOtherComplications() {
      if (getCheckboxSelectedValue(this.otherExams, "Other")?.value == "other") {
        modifyFieldValue(this.otherExams, "Specify", "displayNone", false);
      } else {
        modifyFieldValue(this.otherExams, "Specify", "displayNone", true);
      }
    },
    handleObstetricCare() {
      const checkBoxes = [
        "Oxytocin",
        "Cabitocin",
        "Tranexamic acid",
        "Misoprostol",
        "Anticonvulsants",
        "Antibiotics",
        "Antenatal corticosteroids",
        "Blood transfusion",
        "Manual removal of placenta (MRP)",
        "Non-pneumatic Anti-shock Garment (NASG)",
        "Manual Removal of Retained Products of Conception (MRPOC)",
        "Evacuation",
        "Other"
      ];
      if (getCheckboxSelectedValue(this.otherExams, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.otherExams, checkbox, "checked", false);
          modifyCheckboxValue(this.otherExams, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.otherExams, checkbox, "disabled", false);
        });
      }
    }
  }
});

const _hoisted_1$m = { class: "container" };
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$m, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.otherExams,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, { contentData: _ctx.urine }, null, 8, ["contentData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const OtherExams = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__scopeId", "data-v-1169f3e1"]]);

const initialVitals = [
  {
    isFinishBtn: false,
    validationStatus: "",
    sectionHeader: "Height and weight",
    actionBtn: "Finish and Save",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Height*",
              unit: "cm",
              icon: icons.height,
              value: "",
              name: "Height (cm)",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false
            },
            {
              inputHeader: "Weight*",
              unit: "kg",
              icon: icons.weight,
              value: "",
              name: "Weight",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              disabled: false
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ],
    previousView: {
      name: "vitals"
    }
  },
  {
    classDash: "dashed_bottom_border",
    selectedData: [],
    sideColSize: 3.8,
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: " "
      },
      data: [
        {
          colSize: "5.8",
          name: "Height And Weight Not Done",
          value: "Height And Weight Not Done",
          checked: false,
          displayNone: false
        }
      ],
      inputFields: [
        {
          inputHeader: "Specify Reason",
          icon: icons.search,
          isMultiSelect: true,
          popOver: true,
          value: "",
          name: "Height Weight Reason",
          multiSelectData: [
            {
              id: 1,
              name: "Patient uncooperative"
            },
            {
              id: 2,
              name: "Machine not working"
            },
            {
              id: 3,
              name: "Machine not available"
            }
          ],
          eventType: "input",
          required: true,
          id: "",
          idName: "district_id",
          displayNone: true
        }
      ]
    }
  },
  {
    sectionHeader: "Blood pressure",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Systolic Pressure*",
              unit: "mmHg",
              icon: icons.systolicPressure,
              value: "",
              name: "Systolic",
              required: true,
              eventType: "input",
              disabled: false
            },
            {
              inputHeader: "Diastolic pressure*",
              unit: "mmHg",
              icon: icons.diastolicPressure,
              value: "",
              name: "Diastolic",
              required: true,
              eventType: "input",
              disabled: false
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ],
    previousView: {
      name: "vitals"
    }
  },
  {
    classDash: "dashed_bottom_border",
    selectedData: [],
    sideColSize: 3.8,
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: " ",
        name: "Primary diagnosis"
      },
      data: [
        {
          colSize: "5.8",
          name: "Blood Pressure Not Done",
          value: "Blood Pressure Not Done",
          checked: false,
          displayNone: false
        }
      ],
      inputFields: [
        {
          inputHeader: "Specify Reason",
          icon: icons.search,
          isMultiSelect: true,
          popOver: true,
          value: "",
          name: "Blood Pressure Reason",
          multiSelectData: [
            {
              id: 1,
              name: "Patient uncooperative"
            },
            {
              id: 2,
              name: "Machine not working"
            },
            {
              id: 3,
              name: "Machine not available"
            }
          ],
          eventType: "input",
          required: true,
          alertsErrorMassage: "",
          id: "",
          idName: "district_id",
          displayNone: true
        }
      ]
    }
  },
  {
    sectionHeader: "Temperature and rates",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Temperature",
              unit: "C",
              icon: icons.temprature,
              value: "",
              name: "Temperature",
              eventType: "input"
            },
            {
              inputHeader: "Pulse rate*",
              unit: "BPM",
              icon: icons.pulse,
              value: "",
              name: "Pulse",
              eventType: "input"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ]
  },
  {
    classDash: "dashed_bottom_border",
    selectedData: [],
    sideColSize: 3.8,
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: " ",
        name: "Primary diagnosis"
      },
      data: [
        {
          colSize: "5.8",
          name: "Pulse Rate Not Done",
          value: "Pulse Rate Not Done",
          checked: false,
          displayNone: false
        }
      ],
      inputFields: [
        {
          inputHeader: "Specify Reason",
          icon: icons.search,
          isMultiSelect: true,
          popOver: true,
          value: "",
          name: "Pulse Rate Reason",
          multiSelectData: [
            {
              id: 1,
              name: "Patient uncooperative"
            },
            {
              id: 2,
              name: "Machine not working"
            },
            {
              id: 3,
              name: "Machine not available"
            }
          ],
          eventType: "input",
          required: true,
          alertsErrorMassage: "",
          id: "",
          idName: "district_id",
          displayNone: true
        }
      ]
    }
  },
  {
    sectionHeader: "null",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Respiratory rate",
              unit: "BPM",
              icon: icons.respiratory,
              value: "",
              name: "Respiratory rate",
              eventType: "input"
            },
            {
              inputHeader: "Oxygen saturation",
              unit: "%",
              icon: icons.oxgenStaturation,
              value: "",
              name: "SAO2",
              eventType: "input"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ]
  }
];
const useLabourVitalsStore = defineStore("labourVitalsStore", {
  state: () => ({
    vitals: [...initialVitals]
  }),
  actions: {
    setVitals(data) {
      this.vitals = data;
    },
    getInitialVitals() {
      const data = lodashExports.cloneDeep(initialVitals);
      return [...data];
    }
  }
});

const _sfc_main$l = defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    BasicInputField,
    BasicForm,
    PreviousVitals
  },
  data() {
    return {
      iconsContent: icons,
      BMI: {},
      BPStatus: {},
      saveBtnStatus: {},
      TempStatus: {},
      PulseStatus: {},
      RespiratoryStatus: {},
      OxygenStatus: {},
      vValidations: "",
      hasValidationErrors: [],
      vitalsInstance: {},
      validationStatus: { heightWeight: false, bloodPressure: false }
    };
  },
  watch: {
    vitals: {
      handler() {
        this.checkHeight();
      },
      deep: true
    },
    $route: {
      handler() {
        this.checkHeight();
        this.setTodayVitals();
        this.updateVitalsStores();
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useLabourVitalsStore, ["vitals"])
  },
  async mounted() {
    await this.setTodayVitals();
    const userID = Service.getUserID();
    this.vitalsInstance = new VitalsService(this.patient.patientID, userID);
    await this.validaterowData("onload");
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async setTodayVitals() {
      const array = ["Height (cm)", "Weight", "Systolic", "Diastolic", "Temperature", "Pulse", "SAO2", "Respiratory rate"];
      const mandatoryFields = ["Height (cm)", "Weight", "Systolic", "Diastolic", "Pulse"];
      const mandatoryDone = [];
      const age = HisDate.getAgeInYears(this.patient?.personInformation?.birthdate);
      const promises = array.map(async (item) => {
        const firstDate = await ObservationService.getFirstObsDatetime(this.patient.patientID, item);
        if (firstDate && HisDate.toStandardHisFormat(firstDate) == HisDate.sessionDate()) {
          if (item == "Weight") {
            modifyCheckboxValue(this.vitals, "Height And Weight Not Done", "displayNone", true);
          }
          if (item == "Systolic") {
            modifyCheckboxValue(this.vitals, "Blood Pressure Not Done", "displayNone", true);
          }
          if (item == "Pulse") {
            modifyCheckboxValue(this.vitals, "Pulse Rate Not Done", "displayNone", true);
          }
          modifyFieldValue(
            this.vitals,
            item,
            "value",
            await ObservationService.getFirstValueNumber(this.patient.patientID, item, HisDate.sessionDate())
          );
          modifyFieldValue(this.vitals, item, "disabled", true);
          mandatoryDone.push("true");
        } else if (mandatoryFields.includes(item)) {
          mandatoryDone.push("false");
        } else {
          modifyFieldValue(this.vitals, item, "value", "");
        }
        if (item === "Respiratory rate" && age <= 5) {
          modifyFieldValue(this.vitals, item, "required", true);
          modifyFieldValue(this.vitals, item, "inputHeader", "Respiratory rate*");
        }
      });
      await Promise.all(promises);
      if (!mandatoryDone.includes("false")) {
        this.vitals[0].actionBtn = "Finish";
      } else {
        this.vitals[0].actionBtn = "Finish and Save";
      }
      return !mandatoryDone.includes("false");
    },
    navigationMenu(url) {
      menuController.close();
      this.$router.push(url);
    },
    updateVitalsStores() {
      const vitalsStore = useVitalsStore();
      vitalsStore.setVitals(this.vitals);
    },
    validationController(inputData) {
      if (inputData?.col?.name == "Height And Weight Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Height Weight Reason", "displayNone", false);
        modifyFieldValue(this.vitals, "Height (cm)", "disabled", true);
        modifyFieldValue(this.vitals, "Weight", "disabled", true);
        modifyFieldValue(this.vitals, "Height (cm)", "inputHeader", "Height");
        modifyFieldValue(this.vitals, "Weight", "inputHeader", "Weight");
        modifyFieldValue(this.vitals, "Height (cm)", "value", "");
        modifyFieldValue(this.vitals, "Weight", "value", "");
        this.validationStatus.heightWeight = false;
      } else if (inputData?.col?.name == "Height And Weight Not Done") {
        modifyCheckboxInputField(this.vitals, "Height Weight Reason", "displayNone", true);
        modifyFieldValue(this.vitals, "Height (cm)", "disabled", false);
        modifyFieldValue(this.vitals, "Weight", "disabled", false);
        modifyFieldValue(this.vitals, "Height (cm)", "inputHeader", "Height*");
        modifyFieldValue(this.vitals, "Weight", "inputHeader", "Weight*");
        this.validationStatus.heightWeight = true;
      }
      if (inputData?.col?.name == "Blood Pressure Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Blood Pressure Reason", "displayNone", false);
        modifyFieldValue(this.vitals, "Systolic", "disabled", true);
        modifyFieldValue(this.vitals, "Diastolic", "disabled", true);
        modifyFieldValue(this.vitals, "Systolic", "inputHeader", "Systolic Pressure");
        modifyFieldValue(this.vitals, "Diastolic", "inputHeader", "Diastolic pressure");
        modifyFieldValue(this.vitals, "Systolic", "value", "");
        modifyFieldValue(this.vitals, "Diastolic", "value", "");
        this.validationStatus.bloodPressure = false;
      } else if (inputData?.col?.name == "Blood Pressure Not Done") {
        modifyCheckboxInputField(this.vitals, "Blood Pressure Reason", "displayNone", true);
        modifyFieldValue(this.vitals, "Systolic", "disabled", false);
        modifyFieldValue(this.vitals, "Diastolic", "disabled", false);
        modifyFieldValue(this.vitals, "Systolic", "inputHeader", "Systolic Pressure*");
        modifyFieldValue(this.vitals, "Diastolic", "inputHeader", "Diastolic pressure*");
        modifyFieldValue(this.vitals, "Systolic", "value", "");
        modifyFieldValue(this.vitals, "Diastolic", "value", "");
        this.validationStatus.bloodPressure = true;
      }
      if (inputData?.col?.name == "Pulse Rate Not Done" && inputData.col.checked) {
        modifyCheckboxInputField(this.vitals, "Pulse Rate Reason", "displayNone", false);
        modifyFieldValue(this.vitals, "Pulse", "disabled", true);
        modifyFieldValue(this.vitals, "Pulse", "inputHeader", "Pulse rate");
        modifyFieldValue(this.vitals, "Pulse", "value", "");
        this.validationStatus.bloodPressure = false;
      } else if (inputData?.col?.name == "Pulse Rate Not Done") {
        modifyCheckboxInputField(this.vitals, "Pulse Rate Reason", "displayNone", true);
        modifyFieldValue(this.vitals, "Pulse", "disabled", false);
        modifyFieldValue(this.vitals, "Pulse", "inputHeader", "Pulse rate*");
        modifyFieldValue(this.vitals, "Pulse", "value", "");
        this.validationStatus.bloodPressure = true;
      }
    },
    async checkHeight() {
      const patient = new PatientService();
      const lastHeight = await patient.getRecentHeightObs();
      if (!lodashExports.isEmpty(lastHeight)) {
        const patientAgeAtPrevRecordedHeight = dayjs(lastHeight["obs_datetime"]).diff(patient.getBirthdate(), "year");
        const recentHeight = lastHeight["value_numeric"];
        lastHeight["obs_id"];
        if (!(patientAgeAtPrevRecordedHeight < 18 || patient.getAge() < 18)) {
          modifyFieldValue(this.vitals, "Height", "disabled", true);
          modifyFieldValue(this.vitals, "Height", "value", recentHeight);
        }
      }
    },
    async validaterowData(inputData) {
      this.checkHeight();
      this.validationController(inputData);
      this.hasValidationErrors = [];
      this.vitals.forEach((section, sectionIndex) => {
        if (section?.data?.rowData) {
          section?.data?.rowData.forEach((col, colIndex) => {
            if (col.colData[0].inputHeader == "Systolic Pressure*" && (inputData.inputHeader == "Systolic Pressure*" || inputData.inputHeader == "Diastolic pressure*" || inputData == "onload") || col.colData[0].inputHeader == "Systolic Pressure" && inputData?.col?.name == "Blood Pressure Not Done") {
              const isSystolicValid = this.vitalsInstance.validator(col.colData[0]) == null && this.vitalsInstance.validator(col.colData[1]) == null;
              this.BPStatus = isSystolicValid ? this.getBloodPressureStatus(col.colData[0].value, col.colData[1].value) : {};
              this.updateBP(col.colData[0].value, col.colData[1].value);
            }
            if (col.colData[1].inputHeader == "Pulse rate*" && (inputData.inputHeader == "Pulse rate*" || inputData == "onload") || col.colData[1].inputHeader == "Pulse rate" && inputData?.col?.name == "Pulse Rate Not Done") {
              const isPulseValid = this.vitalsInstance.validator(col.colData[1]) == null;
              const pulseStatus = isPulseValid ? this.getPulseRateStatus(col.colData[1].value) : {};
              this.updateTemperateRate("pulse", col.colData[1].value + " BMP", pulseStatus, 4);
            }
            if (col.colData[0].value && col.colData[0].inputHeader == "Temperature") {
              const isTempValid = this.vitalsInstance.validator(col.colData[0]) == null;
              const tempStatus = isTempValid ? this.getTemperatureStatus(col.colData[0].value) : {};
              this.updateTemperateRate("temp", col.colData[0].value + "°C", tempStatus, 4);
            }
            if (col.colData[0].inputHeader == "Respiratory rate") {
              const isRespiratoryValid = this.vitalsInstance.validator(col.colData[0]) == null;
              const respiratoryStatus = isRespiratoryValid ? this.getRespiratoryRateStatus(col.colData[0].value) : {};
              this.updateTemperateRate("respiratory", col.colData[0].value + "BMP", respiratoryStatus, 6);
            }
            if (col.colData[1].value && col.colData[1].inputHeader == "Oxygen saturation") {
              const isOxygenValid = this.vitalsInstance.validator(col.colData[1]) == null;
              const oxygenStatus = isOxygenValid ? this.getOxygenSaturationStatus(col.colData[1].value) : {};
              this.updateTemperateRate("oxygen", col.colData[1].value + "%", oxygenStatus, 6);
            }
            if (col.colData[0].inputHeader == "Height*" && (inputData.inputHeader == "Height*" || inputData.inputHeader == "Weight*" || inputData == "onload") || col.colData[0].inputHeader == "Height" && inputData?.col?.name == "Height And Weight Not Done") {
              const isHeightValid = this.vitalsInstance.validator(col.colData[0]) == null && this.vitalsInstance.validator(col.colData[1]) == null;
              this.BMI = isHeightValid ? this.setBMI(col.colData[1].value, col.colData[0].value) : {};
              this.updateBMI();
            }
            col.colData.some((input, inputIndex) => {
              const validateResult = this.vitalsInstance.validator(input);
              if (validateResult?.length > 0) {
                this.hasValidationErrors.push("false");
                if (input.inputHeader === inputData.inputHeader) {
                  this.vitals[sectionIndex].data.rowData[colIndex].colData[inputIndex].alertsErrorMassage = true;
                  this.vitals[sectionIndex].data.rowData[colIndex].colData[inputIndex].alertsErrorMassage = validateResult.flat(Infinity)[0];
                  return true;
                }
              } else {
                this.hasValidationErrors.push("true");
                this.vitals[sectionIndex].data.rowData[colIndex].colData[inputIndex].alertsErrorMassage = false;
                this.vitals[sectionIndex].data.rowData[colIndex].colData[inputIndex].alertsErrorMassage = "";
              }
              return false;
            });
          });
        }
      });
      this.vitals.validationStatus = !this.hasValidationErrors.includes("false");
    },
    async setBMI(weight, height) {
      if (this.patient?.personInformation?.gender && this.patient?.personInformation?.birthdate && weight && height) {
        this.BMI = await BMIService.getBMI(
          parseInt(weight),
          parseInt(height),
          this.patient?.personInformation?.gender,
          HisDate.calculateAge(this.patient?.personInformation?.birthdate, HisDate.sessionDate())
        );
        this.updateBMI();
      }
    },
    async updateBMI() {
      const bmiColor = this.BMI?.color ?? [];
      const vitals = this.vitals[0].alerts[0];
      vitals.icon = BMIService.iconBMI(bmiColor);
      vitals.backgroundColor = bmiColor[0];
      vitals.textColor = bmiColor[1];
      vitals.index = "BMI " + (this.BMI?.index ?? "");
      vitals.value = this.BMI?.result ?? "";
    },
    async updateBP(systolic, diastolic) {
      const vitals = this.vitals[2]?.alerts[0] ?? [];
      const bpColor = this.BPStatus?.colors ?? [];
      vitals.icon = iconBloodPressure(bpColor);
      vitals.backgroundColor = bpColor[0];
      vitals.textColor = bpColor[1];
      vitals.index = systolic + "/" + diastolic;
      vitals.value = this.BPStatus?.value ?? "";
    },
    async updateTemperateRate(name, index, obj, objNumber) {
      const filteredArray = this.vitals[objNumber]?.alerts?.filter((item) => item.name !== name);
      this.vitals[objNumber].alerts = filteredArray;
      const bpColor = obj?.colors ?? [];
      this.vitals[objNumber]?.alerts.push({
        backgroundColor: bpColor[0],
        status: "",
        icon: "",
        textColor: bpColor[1],
        value: obj?.value ?? "",
        name,
        index
      });
      console.log(this.vitals[4]?.alerts);
    },
    getBloodPressureStatus(systolic, diastolic) {
      if (systolic && diastolic) {
        let minSystolic;
        let maxSystolic;
        let minDiastolic;
        let maxDiastolic;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age < 1) {
          minSystolic = 75;
          maxSystolic = 100;
          minDiastolic = 50;
          maxDiastolic = 70;
        } else if (age >= 1 && age < 6) {
          minSystolic = 80;
          maxSystolic = 110;
          minDiastolic = 50;
          maxDiastolic = 80;
        } else if (age >= 6 && age < 13) {
          minSystolic = 85;
          maxSystolic = 120;
          minDiastolic = 55;
          maxDiastolic = 80;
        } else if (age >= 13 && age < 18) {
          minSystolic = 95;
          maxSystolic = 140;
          minDiastolic = 60;
          maxDiastolic = 90;
        } else {
          minSystolic = 100;
          maxSystolic = 130;
          minDiastolic = 60;
          maxDiastolic = 90;
        }
        if (systolic < minSystolic && diastolic < minDiastolic) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low BP " };
        } else if (systolic >= minSystolic && systolic <= maxSystolic && diastolic >= minDiastolic && diastolic <= maxDiastolic) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal BP " };
        } else if (systolic > 140 && diastolic > 90) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High BP" };
        } else {
          if (systolic < minSystolic) {
            return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low BP  (Using Systolic Only)" };
          } else if (systolic >= minSystolic && systolic <= maxSystolic) {
            return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal BP  (Using Systolic Only)" };
          } else {
            return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High BP  (Using Systolic Only)" };
          }
        }
      }
    },
    getTemperatureStatus(value) {
      if (value) {
        let minTemp;
        let maxTemp;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age <= 1) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else if (age >= 1 && age <= 18) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else if (age >= 19 && age <= 64) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else if (age >= 65) {
          minTemp = 35.5;
          maxTemp = 37.4;
        } else {
          minTemp = "";
          maxTemp = "";
        }
        if (value < minTemp) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low Temperature " };
        } else if (value >= minTemp && value <= maxTemp) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal Temperature " };
        } else if (value > maxTemp) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High Temperature " };
        }
      }
    },
    getPulseRateStatus(value) {
      if (value) {
        let minPulse;
        let maxPulse;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age <= 0.08) {
          minPulse = 70;
          maxPulse = 190;
        } else if (age >= 0.08 && age < 1) {
          minPulse = 80;
          maxPulse = 160;
        } else if (age >= 1 && age <= 2) {
          minPulse = 80;
          maxPulse = 130;
        } else if (age >= 3 && age <= 4) {
          minPulse = 80;
          maxPulse = 120;
        } else if (age >= 5 && age <= 6) {
          minPulse = 75;
          maxPulse = 115;
        } else if (age >= 7 && age <= 9) {
          minPulse = 70;
          maxPulse = 110;
        } else if (age >= 10) {
          minPulse = 60;
          maxPulse = 100;
        } else {
          minPulse = "";
          maxPulse = "";
        }
        if (value < minPulse) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low Pulse Rate " };
        } else if (value >= minPulse && value <= maxPulse) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal Pulse Rate " };
        } else if (value > maxPulse) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High Pulse Rate " };
        }
      }
    },
    getOxygenSaturationStatus(value) {
      if (value) {
        let minOxygenSaturation = 95;
        let maxOxygenSaturation = 100;
        if (value < minOxygenSaturation) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low oxygen saturation" };
        } else if (value >= minOxygenSaturation && value <= maxOxygenSaturation) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal oxygen saturation" };
        }
      }
    },
    getRespiratoryRateStatus(value) {
      if (value) {
        let minRespiratoryRate;
        let maxRespiratoryRate;
        const patient = new PatientService();
        const age = patient.getAge();
        if (age <= 1) {
          minRespiratoryRate = 30;
          maxRespiratoryRate = 60;
        } else if (age >= 1 && age < 3) {
          minRespiratoryRate = 24;
          maxRespiratoryRate = 40;
        } else if (age >= 3 && age <= 6) {
          minRespiratoryRate = 22;
          maxRespiratoryRate = 34;
        } else if (age >= 6 && age <= 12) {
          minRespiratoryRate = 18;
          maxRespiratoryRate = 30;
        } else if (age >= 12 && age <= 18) {
          minRespiratoryRate = 12;
          maxRespiratoryRate = 16;
        } else if (age >= 19) {
          minRespiratoryRate = 12;
          maxRespiratoryRate = 20;
        } else {
          minRespiratoryRate = "";
          maxRespiratoryRate = "";
        }
        if (value < minRespiratoryRate) {
          return { colors: ["#B9E6FE", "#026AA2", "#9ADBFE"], value: "Low respiratory rate" };
        } else if (value >= minRespiratoryRate && value <= maxRespiratoryRate) {
          return { colors: ["#DDEEDD", "#016302", "#BBDDBC"], value: "Normal respiratory rate" };
        } else if (value > maxRespiratoryRate) {
          return { colors: ["#FECDCA", "#B42318", "#FDA19B"], value: "High respiratory rate" };
        }
      }
    }
  }
});

const _hoisted_1$l = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_PreviousVitals = resolveComponent("PreviousVitals");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_basic_form, {
      contentData: _ctx.vitals,
      "onUpdate:inputValue": _cache[0] || (_cache[0] = ($event) => _ctx.validaterowData($event))
    }, null, 8, ["contentData"]),
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_accordion_group, {
          ref: "accordionGroup",
          class: "previousView"
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion, {
              value: "first",
              "toggle-icon-slot": "start",
              style: { "border-radius": "10px", "background-color": "#fff" }
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_item, {
                  slot: "header",
                  color: "light"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_label, { class: "previousLabel" }, {
                      default: withCtx(() => [..._cache[1] || (_cache[1] = [
                        createTextVNode("Previous measurements", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_1$l, [
                  createVNode(_component_PreviousVitals)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 512)
      ]),
      _: 1
    })
  ], 64);
}
const LabourVitals = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__scopeId", "data-v-983540ce"]]);

const BabyValidationSchema = create$3().shape({
  "Respiration rate": create$5().typeError("Respiration rate can only be a number").min(0).required(),
  Temperature: create$5().typeError("Temperature can only be a number").min(0).required()
});
const initialExamsAfterDeliveryForChild = [
  {
    selectdData: [],
    isFinishBtn: false,
    radioBtnContent: {
      header: {
        title: "Immediate vitals for child",
        selectedValue: "",
        class: "bold",
        name: "Vitals"
      },
      data: []
    }
  },
  {
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Respiration rate",
              unit: "BMP",
              icon: icons.respiratory,
              value: "",
              valueType: "text",
              name: "Respiration rate",
              eventType: "input"
            },
            {
              inputHeader: "Temperature",
              unit: "C",
              icon: icons.temprature,
              value: "",
              valueType: "text",
              name: "Temperature",
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Cord bleeding?",
        selectedValue: "",
        class: "bold",
        name: "Cord bleeding"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Breast feeding in the first hour of birth?",
        selectedValue: "",
        class: "bold",
        name: "Breast feeding in the first hour of birth"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Skin to skin contact with the mother (Immediate Kangaroo Mother Care)",
        selectedValue: "",
        class: "bold",
        name: "Skin to skin contact with the mother"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Delayed bathing?",
        selectedValue: "",
        class: "bold",
        name: "Delayed bathing"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Delayed cord cutting?",
        selectedValue: "",
        class: "bold",
        name: "Delayed cord cutting"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  }
];
const useImmediatePostnatalChecksForChildStore = defineStore("immediatePostnatalChecksForChildStore", {
  state: () => ({
    examsAfterDeliveryForChild: [...initialExamsAfterDeliveryForChild]
  }),
  actions: {
    setExamsAfterDelivery(data) {
      this.examsAfterDeliveryForChild = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialExamsAfterDeliveryForChild);
      return [...data];
    }
  }
  //
});

const _sfc_main$k = defineComponent({
  name: "immidiatePostnatalChecksForChild",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(useImmediatePostnatalChecksForChildStore, ["examsAfterDeliveryForChild"])
  },
  mounted() {
    const examsAfterDelivery = useImmediatePostnatalChecksForChildStore();
    this.initialData = examsAfterDelivery.getInitial();
  },
  watch: {},
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleValidateBaby(event) {
      YupValidateField(this.examsAfterDeliveryForChild, BabyValidationSchema, event.name, event.value);
    },
    async handleInputData(event) {
      this.handleValidateBaby(event);
    }
  }
});

const _hoisted_1$k = { class: "container" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$k, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.examsAfterDeliveryForChild,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const ImmidiatePostnatalChecksForChild = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__scopeId", "data-v-c38fbba8"]]);

const PostnatalValidationSchema = create$3().shape({
  "Systolic blood pressure": create$5().typeError("Systolic blood pressure can only be a number").min(0).required(),
  "Diastolic blood pressure": create$5().typeError("Systolic blood pressure can only be a number").min(0).required(),
  Pulse: create$5().typeError("Pulse can only be a number").min(0).required(),
  "Second Systolic blood pressure": create$5().typeError("Second Systolic blood pressure can only be a number").min(0).required(),
  "Second Diastolic blood pressure": create$5().typeError("Second Diastolic blood pressure can only be a number").min(0).required(),
  Temperature: create$5().typeError("Temperature can only be a number").min(0).required(),
  "amount of urine": create$5().typeError("amount of urine can only be a number").min(0).required(),
  "color of urine": create$6().matches(/^[A-Za-z\s]+$/, "Color can only contain letters and spaces").required()
});
const initialExamsAfterDelivery = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "At what interval is the postnatal check",
        selectedValue: "",
        name: "Time for postnatal check",
        class: "bold"
      },
      data: [
        {
          name: "Immediately after delivery",
          value: "immediately after delivery",
          colSize: "7"
        },
        {
          name: "1 hour after delivery",
          value: "1 hour after delivery",
          colSize: "7"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Systolic Pressure",
              unit: "mmHg",
              icon: icons.systolicPressure,
              value: "",
              valueType: "text",
              name: "Systolic blood pressure",
              required: true,
              eventType: "input"
            },
            {
              inputHeader: "Diastolic pressure",
              unit: "mmHg",
              icon: icons.diastolicPressure,
              value: "",
              valueType: "text",
              name: "Diastolic blood pressure",
              required: true,
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Pulse rate",
              unit: "BMP",
              icon: icons.pulse,
              value: "",
              valueType: "text",
              name: "Pulse",
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Second Systolic Pressure",
              unit: "mmHg",
              icon: icons.systolicPressure,
              value: "",
              valueType: "text",
              name: "Second Systolic blood pressure",
              required: true,
              eventType: "input"
            },
            {
              inputHeader: "Second Diastolic pressure",
              unit: "mmHg",
              icon: icons.diastolicPressure,
              value: "",
              valueType: "text",
              name: "Second Diastolic blood pressure",
              required: true,
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Temperature",
              unit: "C",
              icon: icons.temprature,
              value: "",
              valueType: "text",
              name: "Temperature",
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Uterus",
        selectedValue: "",
        class: "bold",
        name: "Raptured Uterus"
      },
      data: [
        {
          name: "Involuted",
          value: "Involuted",
          colSize: "5"
        },
        {
          name: "Sub-Involuted",
          value: "sub-involuted",
          colSize: "5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Lochia?",
        selectedValue: "",
        class: "bold",
        name: "Lochia"
      },
      data: [
        {
          name: "Mild",
          value: "mild",
          colSize: "5"
        },
        {
          name: "Moderate",
          value: "moderate",
          colSize: "5"
        },
        {
          name: "Heavy",
          value: "heavy",
          colSize: "5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Urine passed?",
        selectedValue: "",
        class: "bold",
        name: "Woman urinated",
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Time",
              unit: "",
              icon: icons.timePicker,
              value: "",
              valueType: "text",
              name: "Time",
              required: true,
              eventType: "input",
              placeholder: "",
              inputWidth: ""
            },
            {
              // displayNone: true,
              inputHeader: "Amount of urine",
              unit: "ml",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "amount of urine",
              required: true,
              eventType: "input",
              placeholder: "",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Color of urine",
              unit: "colour",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "color of urine",
              required: true,
              eventType: "input",
              placeholder: "",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  }
];
const useImmediatePostnatalChecksForMotherStore = defineStore("immediatePostnatalChecksForMotherStore", {
  state: () => ({
    examsAfterDelivery: [...initialExamsAfterDelivery]
  }),
  actions: {
    setExamsAfterDelivery(data) {
      this.examsAfterDelivery = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialExamsAfterDelivery);
      return [...data];
    }
  }
  //
});

const _sfc_main$j = defineComponent({
  name: "ImmidiatePostnatalChecksForMother",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      inputField: "",
      initialData: []
    };
  },
  computed: {
    ...mapState(useImmediatePostnatalChecksForMotherStore, ["examsAfterDelivery"])
  },
  mounted() {
    const examsAfterDelivery = useImmediatePostnatalChecksForMotherStore();
    this.initialData = examsAfterDelivery.getInitial();
    this.handleImmidiate();
    this.handleHour();
    this.handleUrine();
  },
  watch: {
    examsAfterDelivery: {
      handler() {
        this.handleImmidiate();
        this.handleHour();
        this.handleUrine();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleValidatePostnatal(event) {
      YupValidateField(this.examsAfterDelivery, PostnatalValidationSchema, event.name, event.value);
    },
    async handleInputData(event) {
      this.handleValidatePostnatal(event);
    },
    handleImmidiate() {
      if (getRadioSelectedValue(this.examsAfterDelivery, "Time for postnatal check") === "immediately after delivery" || getRadioSelectedValue(this.examsAfterDelivery, "Time for postnatal check") === "1 hour after delivery") {
        modifyFieldValue(this.examsAfterDelivery, "Systolic blood pressure", "displayNone", false);
        modifyFieldValue(this.examsAfterDelivery, "Pulse", "displayNone", false);
      } else {
        modifyFieldValue(this.examsAfterDelivery, "Systolic blood pressure", "displayNone", true);
        modifyFieldValue(this.examsAfterDelivery, "Pulse", "displayNone", true);
      }
    },
    handleHour() {
      if (getRadioSelectedValue(this.examsAfterDelivery, "Time for postnatal check") === "1 hour after delivery") {
        modifyFieldValue(this.examsAfterDelivery, "Temperature", "displayNone", false);
        modifyRadioValue(this.examsAfterDelivery, "Raptured Uterus", "displayNone", false);
        modifyRadioValue(this.examsAfterDelivery, "Lochia", "displayNone", false);
        modifyRadioValue(this.examsAfterDelivery, "Woman urinated", "displayNone", false);
      } else {
        modifyFieldValue(this.examsAfterDelivery, "Temperature", "displayNone", true);
        modifyRadioValue(this.examsAfterDelivery, "Raptured Uterus", "displayNone", true);
        modifyRadioValue(this.examsAfterDelivery, "Lochia", "displayNone", true);
        modifyRadioValue(this.examsAfterDelivery, "Woman urinated", "displayNone", true);
      }
    },
    handleUrine() {
      if (getRadioSelectedValue(this.examsAfterDelivery, "Woman urinated") === "Yes") {
        modifyFieldValue(this.examsAfterDelivery, "Time", "displayNone", false);
        modifyFieldValue(this.examsAfterDelivery, "amount of urine", "displayNone", false);
        modifyFieldValue(this.examsAfterDelivery, "color of urine", "displayNone", false);
      } else {
        modifyFieldValue(this.examsAfterDelivery, "Time", "displayNone", true);
        modifyFieldValue(this.examsAfterDelivery, "amount of urine", "displayNone", true);
        modifyFieldValue(this.examsAfterDelivery, "color of urine", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$j = { class: "container" };
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_card_title, { class: "dashed_bottom_border sub_item_header" })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.examsAfterDelivery,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const ImmidiatePostnatalChecksForMother = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__scopeId", "data-v-cef1a91e"]]);

const useLabourWomanBehaviourStore = defineStore("labourWomanBehaviourStore", {
  state: () => ({
    dailyCaffeineIntake: [
      {
        selectdData: [],
        // sideColSize: 0.5,
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            class: "bold",
            title: "Daily caffeine intake",
            selectedValue: "",
            name: "Daily caffeine use"
          },
          data: [
            {
              name: "More than 2 cups of coffee",
              value: "more than 2 cups of coffee",
              checked: false,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "Daily caffeine use"
          },
          data: [
            {
              name: "More than 4 cups of tea",
              value: "more than 4 cups of tea",
              checked: false,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "Daily caffeine use"
          },
          data: [
            {
              name: "More than 12 bars of chocolate",
              value: "more than 12 bars of chocolate",
              checked: false,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "Daily caffeine use"
          },
          data: [
            {
              name: "More than one bottle of soda, energy, soft drink",
              value: "more than one bottle of soda, energy, soft drink",
              checked: false,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "Daily caffeine use"
          },
          data: [
            {
              name: "None",
              value: "none",
              checked: false,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      }
    ],
    Tobacco: [
      {
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Recently quit tobacco products",
            selectedValue: "",
            name: "Recently quit tobacco products"
          },
          data: [
            {
              value: "Yes",
              name: "Yes",
              colSize: "2.5"
            },
            {
              value: "No",
              name: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Exposure to second hand smoke",
            selectedValue: "",
            name: "Exposure to second hand smoke"
          },
          data: [
            {
              value: "Yes",
              name: "Yes",
              colSize: "2.5"
            },
            {
              value: "No",
              name: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Pica",
            selectedValue: "",
            name: "Pica"
          },
          data: [
            {
              value: "Yes",
              name: "Yes",
              colSize: "2.5"
            },
            {
              value: "No",
              name: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Alcohol Intake",
            selectedValue: "",
            name: "Alcohol"
          },
          data: [
            {
              value: "Yes",
              name: "Yes",
              colSize: "2.5"
            },
            {
              value: "No",
              name: "No",
              colSize: "2.5"
            }
          ]
        }
      }
    ]
  }),
  actions: {
    setPersonalInformation(data) {
      this.dailyCaffeineIntake = data;
    }
  }
  //
});

const _sfc_main$i = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    }
  }
});

const _hoisted_1$i = { class: "modal_wrapper" };
const _hoisted_2$f = { class: "modal_title diplay_space_between" };
const _hoisted_3$9 = { class: "laboratory" };
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
    createBaseVNode("div", _hoisted_2$f, [
      _cache[1] || (_cache[1] = createBaseVNode("span", null, "Investigations", -1)),
      createBaseVNode("span", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
        style: { "cursor": "pointer", "font-weight": "300" }
      }, "x")
    ]),
    createBaseVNode("div", _hoisted_3$9, [
      _cache[3] || (_cache[3] = createBaseVNode("div", null, "RBG (laboratory)", -1)),
      createBaseVNode("div", null, [
        createVNode(_component_ion_button, { color: "medium" }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode(" Open", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "laboratory" }, [
      createBaseVNode("div", null, "RBG (manual)"),
      createBaseVNode("div", null, "Result displays here")
    ], -1))
  ]);
}
const InvestigationsModal = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-c7e1ccc0"]]);

const _sfc_main$h = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  mounted() {
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$h = { class: "alert" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$h, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h3", null, "Stay tuned for our new features coming soon!", -1),
    createBaseVNode("div", { class: "message" }, " Exciting new features will be available soon. Check back later! ", -1)
  ])]);
}
const UpcomingFeature = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__scopeId", "data-v-3239f912"]]);

const _sfc_main$g = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      immunisation: []
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
    this.handleValueCoded();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient", "patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async handleValueCoded() {
      this.getValueCoded();
    },
    async getValueCoded() {
      try {
        const caffeine = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "Daily caffeine use");
        const tobacco = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "Recently quit tobacco products");
        const smoke = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "Exposure to second hand smoke");
        const alcohol = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "Alcohol");
        const data = [...caffeine, ...tobacco, ...smoke, ...alcohol];
        console.log("Fetched Daily caffeine use:", data);
        this.immunisation = data;
      } catch (error) {
        console.error("Error fetching Daily caffeine use:", error);
      }
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patient_id, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      console.log("+++++This is pulling data++++", observations);
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$g = { class: "visitContent" };
const _hoisted_2$e = { class: "visitData" };
const _hoisted_3$8 = { key: 0 };
const _hoisted_4$8 = { style: { "max-width": "1000px" } };
const _hoisted_5$8 = {
  key: 1,
  class: "noData"
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$e, [
              _ctx.immunisation && _ctx.immunisation.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
                createBaseVNode("div", _hoisted_4$8, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "heading" }, "WOMAN BEHAVIOUR", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.immunisation, (condition, index) => {
                      return openBlock(), createBlock(_component_ion_row, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(condition), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$8, "WOMEN BEHAVIOUR DATA IS EMPTY"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourBehaviourHistory = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__scopeId", "data-v-06755d32"]]);

const _sfc_main$f = defineComponent({
  name: "Menu",
  components: {
    BasicForm,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    LabourBehaviourHistory
  },
  data() {
    return {
      iconsContent: icons,
      currentSection: 0
      // Initialize currentSection to 0
    };
  },
  mounted() {
    useLabourWomanBehaviourStore();
    useLabourWomanBehaviourStore();
    this.handleNone();
  },
  watch: {
    dailyCaffeineIntake: {
      handler(event) {
        this.handleNone();
        this.handleInputData(event);
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useLabourWomanBehaviourStore, ["dailyCaffeineIntake"]),
    ...mapState(useLabourWomanBehaviourStore, ["Tobacco"]),
    DailyCaffeineIntake() {
      return getCheckboxSelectedValue(this.dailyCaffeineIntake, "Daily caffeine use");
    },
    SubstanceAbuse() {
      return getRadioSelectedValue(this.Tobacco, "Recently quit tobacco products");
    },
    SecondHandSmoke() {
      return getRadioSelectedValue(this.Tobacco, "Exposure to second hand smoke");
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    validationCaffeineRules(event) {
      return validateField$3(this.dailyCaffeineIntake, event.name, this[event.name]);
    },
    validationTobaccoRules(event) {
      return validateField$3(this.dailyCaffeineIntake, event.name, this[event.name]);
    },
    async handleInputData(event) {
      this.validationCaffeineRules(event);
      this.validationTobaccoRules(event);
    },
    handleNone() {
      const checkBoxes = [
        "More than 2 cups of coffee",
        "More than 4 cups of tea",
        "More than 12 bars of chocolate",
        "More than one bottle of soda, energy, soft drink"
      ];
      if (getCheckboxSelectedValue(this.dailyCaffeineIntake, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.dailyCaffeineIntake, checkbox, "checked", false);
          modifyCheckboxValue(this.dailyCaffeineIntake, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.dailyCaffeineIntake, checkbox, "disabled", false);
        });
      }
    },
    navigationMenu(url) {
      menuController.close();
      this.$router.push(url);
    }
  }
});

const _hoisted_1$f = { class: "container" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.dailyCaffeineIntake,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.Tobacco,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourWomanBehaviour = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-c7a27dd7"]]);

const _sfc_main$e = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      immunisation: []
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
    this.handleValueCoded();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient", "patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async handleValueCoded() {
      this.getValueCoded();
    },
    async getValueCoded() {
      try {
        const data = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "Does the woman have any allergies?");
        console.log("Fetched allergies use:", data);
        this.immunisation = data;
      } catch (error) {
        console.error("Error fetching allergies use:", error);
      }
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      console.log("+++++This is pulling data++++", observations);
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$e = { class: "visitContent" };
const _hoisted_2$d = { class: "visitData" };
const _hoisted_3$7 = { key: 0 };
const _hoisted_4$7 = { style: { "max-width": "1000px" } };
const _hoisted_5$7 = {
  key: 1,
  class: "noData"
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$d, [
              _ctx.immunisation && _ctx.immunisation.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
                createBaseVNode("div", _hoisted_4$7, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "heading" }, "ALLERGIES", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.immunisation, (condition, index) => {
                      return openBlock(), createBlock(_component_ion_row, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(condition), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$7, "ALLERGIES DATA IS EMPTY"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourAllergiesHistory = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-3ee41ee7"]]);

const medicalHistoryForm$1 = {
  dilationAndCurrettage: {
    name: "Dilation and currettage",
    value: "dilation and currettage"
  },
  Myomectomy: {
    name: "Myomectomy",
    value: "myomectomy"
  },
  removalOfOvarianCystst: {
    name: "Removal of ovarian cyst",
    value: "Removal of ovarian cyst"
  },
  Oophorectomy: {
    name: "Oophorectomy",
    value: "oophorectomy"
  },
  Salpingectomy: {
    name: "Salpingectomy"},
  cervicalCone: {
    name: "Cervical cone",
    value: "cervical cone"
  }};
const allegiesForm$1 = {
  albendazole: {
    name: "Albendazole",
    value: "albendazole"
  },
  aluminiumHydroxide: {
    name: "Aluminium-hydroxide",
    value: "aluminium-hydroxide"
  },
  calcium: {
    name: "Calcium",
    value: "calcium"
  },
  chamomile: {
    name: "Chamomile",
    value: "chamomile"
  },
  folicAcid: {
    name: "Folic-acid",
    value: "folic-acid"
  },
  ginger: {
    name: "Ginger",
    value: "ginger"
  },
  fish: {
    name: "Fish",
    value: "fish"
  },
  iron: {
    name: "Iron",
    value: "iron"
  },
  malariaMedication: {
    name: "Sulfadoxine-Pyrimethamine",
    value: "Sulfadoxine-Pyrimethamine"
  },
  mebendazole: {
    name: "Mebendazole",
    value: "mebendazole"
  },
  penicillin: {
    name: "Penicillin",
    value: "penicillin"
  },
  prEPTenofovirDisoproxilFumarate: {
    name: "PrEP(TDF)",
    value: "PrEP(TDF)"
  }};
const chronicHealthConditionsForm$1 = {
  autoImmuneDesease: {
    name: "Auto-immune desease",
    value: "auto immune disease"
  },
  asthma: {
    name: "Asthma",
    value: "asthma"
  }};
const bloodDisorderForm$1 = {
  sickleCell: {
    name: "Sickle cell",
    value: "sickle cell"
  },
  anaemia: {
    name: "Anemia",
    value: "anemia"
  },
  thalassemia: {
    name: "Thalassemia",
    value: "thalassemia"
  }
};
const cancerForm$1 = {
  gynaelogical: {
    name: "Gynae Cancer",
    value: "gynae cancer"
  }};
const heartDeseaseForm$1 = {
  ccf: {
    name: "CCF"},
  rhd: {
    name: "RHD",
    value: "rhd"
  }
};
const diabetesForm$1 = {
  gestationalDiabetes: {
    name: "Gestational diabetes",
    value: "gestational diabetes"
  },
  preExistingType1: {
    name: "Diabetes Type 1",
    value: "diabetes type 1"
  },
  preExistingType2: {
    name: "Diabetes Type 2",
    value: "diabetes type 2"
  },
  otherDiabetis: {
    name: ""}
};
const epilespyForm$1 = {
  epilespy: {
    name: "Epilepsy",
    value: "epilepsy"
  }
};
const hivTestForm$1 = {
  hivTestRequired: {
    name: "HIV test required",
    value: "HIV test required"
  },
  hivTestOrdered: {
    name: "HIV test ordered",
    value: "HIV test ordered"
  },
  hivTestConducted: {
    name: "HIV test ordered"},
  hivTestNotDone: {
    name: "HIV test not done"},
  testStockOut: {
    value: "Test stock-out"
  },
  expiredTests: {
    value: " expired tests"
  },
  hivPositive: {
    name: "HIV Positive",
    value: "HIV Positive"
  },
  hivNegative1: {
    name: "HIV Negative 1",
    value: "HIV Negative 1"
  },
  hivNegative2: {
    name: "HIV Negative 2",
    value: "HIV Negative 2"
  },
  inconclusive: {
    name: "Inconclusive",
    value: "inconclusive"
  },
  highRiskYes: {
    name: "Yes",
    value: "yes"
  },
  highRiskNo: {
    name: "No",
    value: "no"
  },
  reasonsTestNotDone: {
    name: "",
    value: "reasonsTestNotDone"
  }
};
const syphilisForm$1 = {
  syphilisTestConducted: {
    name: "Syphilis test conducted",
    value: "Syphilis test conducted"
  },
  syphilisTestOrdered: {
    name: "Syphilis test ordered",
    value: "Syphilis test ordered"
  },
  syphilisTestNotDone: {
    name: "Syphilis Test Not Done",
    value: "syphilisTestNotDone"
  },
  rapidSyphilisTest: {
    name: "Rapid syphilis test",
    value: "rapid syphilis test"
  },
  offSiteLabTest: {
    name: "Off-site lab test",
    value: "Off-site lab test"
  },
  treponemaPallidum: {
    name: "TPHA",
    value: "TPHA"
  },
  testStockOut: {
    name: "Test stock-out",
    value: "Test stock-out"
  },
  expiredTests: {
    name: "Expired tests",
    value: "Expired tests"
  },
  syphilisPositiveResults: {
    name: "Syphilis positive",
    value: "Syphilis positive"
  },
  syphilisNegativeResults: {
    name: "Syphilis Negative",
    value: "syphilis negative"
  },
  reasonsTestNotDone: {
    value: ""
  }
};
const hypertensionForm$1 = {
  hypertension: {
    name: "Hypertension",
    value: "hypertension"
  }
};
const kidneyForm$1 = {
  kidney: {
    name: "Kidney Disease",
    value: "kidney disease"
  }
};
const tbForm$1 = {
  tb: {
    name: "TB",
    value: "tb"
  }
};
const mentalIllinessForm$1 = {
  mentalIlliness: {
    name: "Mental illness",
    value: "mental illness"
  }
};
const initialMedicalHistory$1 = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Does the woman have any past medical and surgical?",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any past surgeries done?"
      },
      data: [
        {
          name: medicalHistoryForm$1.dilationAndCurrettage.name,
          value: medicalHistoryForm$1.dilationAndCurrettage.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: medicalHistoryForm$1.Myomectomy.name,
          value: medicalHistoryForm$1.Myomectomy.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Past surgeries done?"
      },
      data: [
        {
          name: medicalHistoryForm$1.removalOfOvarianCystst.name,
          value: medicalHistoryForm$1.removalOfOvarianCystst.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: medicalHistoryForm$1.Oophorectomy.name,
          value: medicalHistoryForm$1.Oophorectomy.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any past surgeries done?"
      },
      data: [
        {
          name: medicalHistoryForm$1.Salpingectomy.name,
          value: medicalHistoryForm$1.Salpingectomy.name,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: medicalHistoryForm$1.cervicalCone.name,
          value: medicalHistoryForm$1.cervicalCone.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any past surgeries done?"
      },
      data: [
        {
          name: "None",
          value: "none",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: "Other",
          value: "Other",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    childName: "Other",
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              icon: icons.editPen,
              value: "",
              name: "Other notes",
              valueType: "text",
              eventType: "input",
              inputWidth: "82%",
              required: true
            }
          ]
        }
      ]
    }
  }
];
const initialAllergies$1 = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Does the woman have any allergies?",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm$1.albendazole.name,
          disabled: false,
          value: allegiesForm$1.albendazole.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm$1.aluminiumHydroxide.name,
          disabled: false,
          value: allegiesForm$1.aluminiumHydroxide.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm$1.calcium.name,
          disabled: false,
          value: allegiesForm$1.calcium.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm$1.chamomile.name,
          disabled: false,
          value: allegiesForm$1.chamomile.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm$1.folicAcid.name,
          disabled: false,
          value: allegiesForm$1.folicAcid.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm$1.ginger.name,
          disabled: false,
          value: allegiesForm$1.ginger.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm$1.fish.name,
          disabled: false,
          value: allegiesForm$1.fish.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm$1.iron.name,
          disabled: false,
          value: allegiesForm$1.iron.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm$1.malariaMedication.name,
          disabled: false,
          value: allegiesForm$1.malariaMedication.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm$1.mebendazole.name,
          disabled: false,
          value: allegiesForm$1.mebendazole.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm$1.penicillin.name,
          disabled: false,
          value: allegiesForm$1.penicillin.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm$1.prEPTenofovirDisoproxilFumarate.name,
          disabled: false,
          value: allegiesForm$1.prEPTenofovirDisoproxilFumarate.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: "None",
          value: "none",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: "Other",
          value: "other",
          disabled: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    childName: "Other",
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              icon: icons.editPen,
              value: "",
              name: "Other notes",
              valueType: "text",
              eventType: "input",
              inputWidth: "82%",
              required: true
            }
          ]
        }
      ]
    }
  }
];
const initialChronicConditions$1 = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Does the woman have existing Chronic Health Conditions? *",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: chronicHealthConditionsForm$1.autoImmuneDesease.name,
          value: chronicHealthConditionsForm$1.autoImmuneDesease.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: chronicHealthConditionsForm$1.asthma.name,
          value: chronicHealthConditionsForm$1.asthma.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: bloodDisorderForm$1.sickleCell.name,
          value: bloodDisorderForm$1.sickleCell.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: cancerForm$1.gynaelogical.name,
          value: cancerForm$1.gynaelogical.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: bloodDisorderForm$1.anaemia.name,
          value: bloodDisorderForm$1.anaemia.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: bloodDisorderForm$1.thalassemia.name,
          value: bloodDisorderForm$1.thalassemia.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: heartDeseaseForm$1.ccf.name,
          value: heartDeseaseForm$1.rhd.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: heartDeseaseForm$1.rhd.name,
          value: heartDeseaseForm$1.rhd.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: diabetesForm$1.gestationalDiabetes.name,
          value: diabetesForm$1.gestationalDiabetes.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: diabetesForm$1.preExistingType1.name,
          value: diabetesForm$1.preExistingType1.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: diabetesForm$1.preExistingType2.name,
          value: diabetesForm$1.preExistingType2.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: epilespyForm$1.epilespy.name,
          value: epilespyForm$1.epilespy.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: hypertensionForm$1.hypertension.name,
          value: hypertensionForm$1.hypertension.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: kidneyForm$1.kidney.name,
          value: kidneyForm$1.kidney.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: tbForm$1.tb.name,
          value: tbForm$1.tb.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: mentalIllinessForm$1.mentalIlliness.name,
          value: mentalIllinessForm$1.mentalIlliness.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: "HIV positive",
          value: "hiv positive",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: "Other",
          value: "other",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: "None",
          value: "none",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    sideColSize: 0,
    classDash: "dashed_bottom_border",
    childName: "Other",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify other chronic conditions",
              icon: icons.editPen,
              valueType: "text",
              value: diabetesForm$1.otherDiabetis.name,
              name: "Other notes",
              eventType: "input",
              inputWidth: "85%",
              required: true
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "HIV test date",
              icon: icons.calenderPrimary,
              value: "",
              name: "HIV test date",
              eventType: "blur",
              valueType: "text",
              inputWidth: "50%",
              required: true,
              isDatePopover: true,
              placeholder: "Pick date"
            }
          ]
        }
      ]
    }
  },
  {
    childName: "HIV positive",
    sideColSize: 0.5,
    selectdData: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    radioBtnContent: {
      header: {
        title: "Is the client on ART?",
        selectedValue: "",
        name: "chronic conditions",
        displayNone: true,
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "no",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "chronic conditions",
    classDash: "dashed_bottom_border",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "ART number",
              value: "",
              name: "Art number",
              eventType: "blur",
              valueType: "text",
              inputWidth: "50%",
              required: true
            }
          ]
        }
      ]
    }
  },
  {
    childName: "chronic conditions",
    sideColSize: 0.5,
    db_data: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    selectdData: [],
    displayData: [],
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Facility for ART",
              icon: icons.search,
              value: "",
              name: "facility for art",
              popOver: true,
              valueType: "text",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              inputWidth: "50%",
              placeholder: "Search for facility",
              popOverData: {
                filterData: false,
                data: []
              },
              id: "",
              idName: "facility_id"
            }
          ]
          // btns:[
          //     {
          //         name: "Save",
          //         fill: "clear",
          //         icon: icons.plus
          //     }
          // ]
        }
      ]
    }
  }
];
const useMedicalHistoryStore = defineStore("medicalHistoryStore", {
  state: () => ({
    medicalHistory: [...initialMedicalHistory$1],
    allegy: [...initialAllergies$1],
    exisitingChronicHealthConditions: [...initialChronicConditions$1],
    hivTest: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Was the hiv test conducted?",
            selectedValue: "",
            class: "bold",
            name: "hivOption"
          },
          data: [
            {
              name: hivTestForm$1.hivTestRequired.name,
              value: hivTestForm$1.hivTestRequired.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm$1.hivTestOrdered.name,
              value: hivTestForm$1.hivTestOrdered.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm$1.hivTestConducted.name,
              value: "hivTestConducted",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm$1.hivTestNotDone.name,
              value: "hivTestNotDone",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "HIV test date",
                  icon: icons.calenderPrimary,
                  value: "",
                  name: "Test Date",
                  eventType: "blur",
                  required: true,
                  isDatePopover: true
                }
              ]
            }
          ]
        }
      },
      {
        checkboxBtnContent: {
          header: {
            title: "Reasons HIV test not done:",
            selectedValue: "",
            class: "bold",
            // displayNone: true,
            name: "hivOutcome"
          },
          data: [
            {
              name: "Test Stock Out",
              value: hivTestForm$1.testStockOut.value,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between",
              checked: false
            },
            {
              name: "Expired Tests",
              value: hivTestForm$1.expiredTests.value,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between",
              checked: false
            },
            {
              name: "Other",
              value: "other",
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between",
              checked: false
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //   displayNone: true,
                  inputHeader: "specify",
                  icon: icons.editPen,
                  value: hivTestForm$1.reasonsTestNotDone.name,
                  name: hivTestForm$1.reasonsTestNotDone.value,
                  eventType: "input",
                  inputWidth: "55%",
                  required: true
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Select the result of HIV test",
            name: "test2",
            selectedValue: "",
            class: "bold"
            //  displayNone: true,
          },
          data: [
            {
              name: hivTestForm$1.hivPositive.name,
              value: hivTestForm$1.hivPositive.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm$1.hivNegative1.name,
              value: hivTestForm$1.hivNegative1.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm$1.hivNegative2.name,
              value: hivTestForm$1.hivNegative2.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm$1.inconclusive.name,
              value: hivTestForm$1.inconclusive.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            //  displayNone: true,
            name: "test1",
            title: "Is the woman at high risk of HIV?",
            selectedValue: "",
            class: "bold"
          },
          data: [
            {
              name: hivTestForm$1.highRiskYes.name,
              value: hivTestForm$1.highRiskYes.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm$1.highRiskNo.name,
              value: hivTestForm$1.highRiskNo.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      }
    ],
    syphilisTest: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Select whether:",
            name: "syphilisOption",
            class: "bold",
            selectedValue: ""
          },
          data: [
            {
              name: syphilisForm$1.syphilisTestConducted.name,
              value: syphilisForm$1.syphilisTestConducted.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: syphilisForm$1.syphilisTestOrdered.name,
              value: syphilisForm$1.syphilisTestOrdered.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: syphilisForm$1.syphilisTestNotDone.name,
              value: syphilisForm$1.syphilisTestNotDone.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        radioBtnContent: {
          header: {
            displayNone: true,
            name: "syphilisDetails",
            class: "bold",
            title: "Select the type of syphilis test that was done",
            selectedValue: ""
          },
          data: [
            {
              name: syphilisForm$1.rapidSyphilisTest.name,
              value: syphilisForm$1.rapidSyphilisTest.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between",
              checked: false
            },
            {
              name: syphilisForm$1.offSiteLabTest.name,
              value: syphilisForm$1.offSiteLabTest.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between",
              checked: false
            },
            {
              name: syphilisForm$1.treponemaPallidum.name,
              value: syphilisForm$1.treponemaPallidum.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between",
              checked: false
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            title: "Syphilis test result",
            class: "bold",
            selectedValue: "",
            name: "syphlisResults"
            // displayNone: true,
          },
          data: [
            {
              name: syphilisForm$1.syphilisPositiveResults.name,
              value: syphilisForm$1.syphilisPositiveResults.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: syphilisForm$1.syphilisNegativeResults.name,
              value: syphilisForm$1.syphilisNegativeResults.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "Syphilis test date",
                  icon: icons.calenderPrimary,
                  value: "",
                  name: "syphilisDate",
                  eventType: "blur",
                  required: true,
                  inputWidth: "55%",
                  isDatePopover: true
                }
              ]
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "Syphilis test date",
                  icon: icons.calenderPrimary,
                  value: "",
                  name: "syphilisDate",
                  eventType: "blur",
                  required: true,
                  inputWidth: "300px",
                  isDatePopover: true
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "Reason syphilis test not done",
            selectedValue: "",
            name: "notDone",
            class: "bold"
            // displayNone: true,
          },
          data: [
            {
              name: syphilisForm$1.testStockOut.name,
              value: syphilisForm$1.testStockOut.value,
              checked: false,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between"
            },
            {
              name: syphilisForm$1.expiredTests.name,
              value: syphilisForm$1.expiredTests.value,
              checked: false,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              checked: false,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between"
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "specify",
                  icon: icons.editPen,
                  value: syphilisForm$1.reasonsTestNotDone.value,
                  name: "Reason",
                  eventType: "input",
                  inputWidth: "55%",
                  required: true
                }
              ]
            }
          ]
        }
      }
    ]
  }),
  actions: {
    addMedicalHistory(data) {
      console.log("sonmething changedS", data);
      this.medicalHistory = data;
    },
    addAllegy(data) {
      this.allegy = data;
    },
    addExisitingChronicHealthConditions(data) {
      this.exisitingChronicHealthConditions = data;
    },
    addhivTest(data) {
      this.hivTest = data;
    },
    addSyphilisTest(data) {
      this.syphilisTest = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialMedicalHistory$1);
      return [...data];
    },
    getInitial1() {
      const data = lodashExports.cloneDeep(initialAllergies$1);
      return [...data];
    },
    getInitial2() {
      const data = lodashExports.cloneDeep(initialChronicConditions$1);
      return [...data];
    }
  }
  //
});

const allegiesForm = {
  albendazole: {
    name: "Albendazole",
    value: "albendazole"
  },
  aluminiumHydroxide: {
    name: "Aluminium-hydroxide",
    value: "aluminium-hydroxide"
  },
  calcium: {
    name: "Calcium",
    value: "calcium"
  },
  chamomile: {
    name: "Chamomile",
    value: "chamomile"
  },
  folicAcid: {
    name: "Folic-acid",
    value: "folic-acid"
  },
  ginger: {
    name: "Ginger",
    value: "ginger"
  },
  fish: {
    name: "Fish",
    value: "fish"
  },
  iron: {
    name: "Iron",
    value: "iron"
  },
  malariaMedication: {
    name: "Sulfadoxine-Pyrimethamine",
    value: "Sulfadoxine-Pyrimethamine"
  },
  mebendazole: {
    name: "Mebendazole",
    value: "mebendazole"
  },
  penicillin: {
    name: "Penicillin",
    value: "penicillin"
  },
  prEPTenofovirDisoproxilFumarate: {
    name: "PrEP(TDF)",
    value: "PrEP(TDF)"
  }};
const initialAllergies = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Does the woman have any allergies?",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm.albendazole.name,
          disabled: false,
          value: allegiesForm.albendazole.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm.aluminiumHydroxide.name,
          disabled: false,
          value: allegiesForm.aluminiumHydroxide.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm.calcium.name,
          disabled: false,
          value: allegiesForm.calcium.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm.chamomile.name,
          disabled: false,
          value: allegiesForm.chamomile.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm.folicAcid.name,
          disabled: false,
          value: allegiesForm.folicAcid.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm.ginger.name,
          disabled: false,
          value: allegiesForm.ginger.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm.fish.name,
          disabled: false,
          value: allegiesForm.fish.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm.iron.name,
          disabled: false,
          value: allegiesForm.iron.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm.malariaMedication.name,
          disabled: false,
          value: allegiesForm.malariaMedication.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm.mebendazole.name,
          disabled: false,
          value: allegiesForm.mebendazole.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: allegiesForm.penicillin.name,
          disabled: false,
          value: allegiesForm.penicillin.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: allegiesForm.prEPTenofovirDisoproxilFumarate.name,
          disabled: false,
          value: allegiesForm.prEPTenofovirDisoproxilFumarate.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any allergies?"
      },
      data: [
        {
          name: "None",
          value: "none",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: "Other",
          value: "other",
          disabled: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    childName: "Other",
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              icon: icons.editPen,
              value: "",
              name: "Other notes",
              valueType: "text",
              eventType: "input",
              inputWidth: "82%",
              required: true
            }
          ]
        }
      ]
    }
  }
];
const useLabourAllergiesStore = defineStore("labourAllergiesStore", {
  state: () => ({
    labourAllergies: [...initialAllergies]
  }),
  actions: {
    addAllegy(data) {
      this.labourAllergies = data;
    }
  }
  //
});

const _sfc_main$d = defineComponent({
  name: "Past Surguries",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    LabourAllergiesHistory
  },
  data() {
    return {
      currentSection: 0,
      initialData: [],
      initialData1: [],
      initialData2: [],
      //art data
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      conditionStatus: "",
      data: [],
      facilityData: [],
      popoverOpen: false,
      event: "",
      selectedCondition: ""
    };
  },
  mounted() {
    const medicalHistory = useMedicalHistoryStore();
    const allegy = useMedicalHistoryStore();
    const exisitingChronicHealthConditions = useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    this.initialData = medicalHistory.getInitial();
    this.initialData1 = allegy.getInitial1();
    this.initialData2 = exisitingChronicHealthConditions.getInitial2();
    this.handleAllergies();
  },
  watch: {
    allegy: {
      handler() {
        this.handleAllergies();
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useLabourAllergiesStore, ["labourAllergies"])
  },
  methods: {
    async getFacility(value) {
      const data = await LocationService.getFacilities({ name: value });
      return data;
    },
    // displaying other input fields when hiv positive is checked
    handleAllergies() {
      const checkBoxes = [
        "Other",
        "PrEP(TDF)",
        "Albendazole",
        "Aluminium-hydroxide",
        "Calcium",
        "Sulfadoxine-Pyrimethamine",
        "Chamomile",
        "Folic-acid",
        "Ginger",
        "Fish",
        "Iron",
        "Mebendazole",
        "Penicillin"
      ];
      if (getCheckboxSelectedValue(this.labourAllergies, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourAllergies, checkbox, "checked", false);
          modifyCheckboxValue(this.labourAllergies, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourAllergies, checkbox, "disabled", false);
        });
      }
    }
  }
});

const _hoisted_1$d = { class: "container" };
const _hoisted_2$c = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_LabourAllergiesHistory = resolveComponent("LabourAllergiesHistory");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    createVNode(_component_ion_accordion_group, {
      ref: "accordionGroup",
      class: "previousView ion-margin-bottom"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_accordion, {
          value: "first",
          "toggle-icon-slot": "start",
          class: "custom_card"
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_item, {
              slot: "header",
              color: "light"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, { class: "previousLabel" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Allergies History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$c, [
              createVNode(_component_LabourAllergiesHistory)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.labourAllergies,
              initialData: _ctx.initialData1
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourAllergies = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-5da4e321"]]);

const _sfc_main$c = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      immunisation: []
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
    this.handleValueCoded();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient", "patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async handleValueCoded() {
      this.getValueCoded();
    },
    async getValueCoded() {
      try {
        const data = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "Does the woman have any past surgeries done?");
        console.log("Fetched past surgeries use:", data);
        this.immunisation = data;
      } catch (error) {
        console.error("Error fetching past surgeries use:", error);
      }
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      console.log("+++++This is pulling data++++", observations);
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$c = { class: "visitContent" };
const _hoisted_2$b = { class: "visitData" };
const _hoisted_3$6 = { key: 0 };
const _hoisted_4$6 = { style: { "max-width": "1000px" } };
const _hoisted_5$6 = {
  key: 1,
  class: "noData"
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$b, [
              _ctx.immunisation && _ctx.immunisation.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$6, [
                createBaseVNode("div", _hoisted_4$6, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "heading" }, "PAST SURGERIES DATA", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.immunisation, (condition, index) => {
                      return openBlock(), createBlock(_component_ion_row, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(condition), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$6, "PAST SURGERIES DATA IS EMPTY"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourPastSurgeriesHistory = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-29d3b668"]]);

const medicalHistoryForm = {
  dilationAndCurrettage: {
    name: "Dilation and currettage",
    value: "dilation and currettage"
  },
  Myomectomy: {
    name: "Myomectomy",
    value: "myomectomy"
  },
  removalOfOvarianCystst: {
    name: "Removal of ovarian cyst",
    value: "Removal of ovarian cyst"
  },
  Oophorectomy: {
    name: "Oophorectomy",
    value: "oophorectomy"
  },
  Salpingectomy: {
    name: "Salpingectomy"},
  cervicalCone: {
    name: "Cervical cone",
    value: "cervical cone"
  }};
const initialMedicalHistory = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Does the woman have any past medical and surgical?",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any past surgeries done?"
      },
      data: [
        {
          name: medicalHistoryForm.dilationAndCurrettage.name,
          value: medicalHistoryForm.dilationAndCurrettage.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: medicalHistoryForm.Myomectomy.name,
          value: medicalHistoryForm.Myomectomy.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Past surgeries done?"
      },
      data: [
        {
          name: medicalHistoryForm.removalOfOvarianCystst.name,
          value: medicalHistoryForm.removalOfOvarianCystst.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: medicalHistoryForm.Oophorectomy.name,
          value: medicalHistoryForm.Oophorectomy.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any past surgeries done?"
      },
      data: [
        {
          name: medicalHistoryForm.Salpingectomy.name,
          value: medicalHistoryForm.Salpingectomy.name,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: medicalHistoryForm.cervicalCone.name,
          value: medicalHistoryForm.cervicalCone.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "Does the woman have any past surgeries done?"
      },
      data: [
        {
          name: "None",
          value: "none",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: "Other",
          value: "Other",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    childName: "Other",
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              icon: icons.editPen,
              value: "",
              name: "Other notes",
              valueType: "text",
              eventType: "input",
              inputWidth: "82%",
              required: true
            }
          ]
        }
      ]
    }
  }
];
const useLabourPastSurgeriesStore = defineStore("labourPastSurgeriesStore", {
  state: () => ({
    labourPastSurgeries: [...initialMedicalHistory]
  }),
  actions: {
    addLabourPastSurgeries(data) {
      this.labourPastSurgeries = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialMedicalHistory);
      return [...data];
    }
  }
  //
});

const _sfc_main$b = defineComponent({
  name: "Past Surguries",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    LabourPastSurgeriesHistory
  },
  data() {
    return {
      currentSection: 0,
      initialData: [],
      initialData1: [],
      initialData2: [],
      //art data
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      conditionStatus: "",
      data: [],
      facilityData: [],
      popoverOpen: false,
      event: "",
      selectedCondition: ""
    };
  },
  mounted() {
    const medicalHistory = useMedicalHistoryStore();
    const allegy = useMedicalHistoryStore();
    const exisitingChronicHealthConditions = useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    this.initialData = medicalHistory.getInitial();
    this.initialData1 = allegy.getInitial1();
    this.initialData2 = exisitingChronicHealthConditions.getInitial2();
    this.handleSurgries();
  },
  watch: {
    medicalHistory: {
      handler() {
        this.handleSurgries();
        this.handleDisable();
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useLabourPastSurgeriesStore, ["labourPastSurgeries"])
  },
  methods: {
    async getFacility(value) {
      const data = await LocationService.getFacilities({ name: value });
      return data;
    },
    handleSurgries() {
      const checkBoxes = [
        "Dilation and currettage",
        "Myomectomy",
        "Removal of ovarian cystst",
        "Oophorectomy",
        "Removal of ovarian cyst",
        "Salpingectomy",
        "Cervical cone",
        "Other"
      ];
      if (getCheckboxSelectedValue(this.labourPastSurgeries, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourPastSurgeries, checkbox, "checked", false);
          modifyCheckboxValue(this.labourPastSurgeries, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourPastSurgeries, checkbox, "disabled", false);
        });
      }
    },
    handleDisable() {
      if (getCheckboxSelectedValue(this.labourPastSurgeries, "NoSurgery") == "otherSurguries") {
        modifyCheckboxHeader(this.labourPastSurgeries, "Other", "disabled", true);
      } else {
        modifyCheckboxHeader(this.labourPastSurgeries, "Other", "disabled", false);
      }
    }
  }
});

const _hoisted_1$b = { class: "container" };
const _hoisted_2$a = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_LabourPastSurgeriesHistory = resolveComponent("LabourPastSurgeriesHistory");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createVNode(_component_ion_accordion_group, {
      ref: "accordionGroup",
      class: "previousView ion-margin-bottom"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_accordion, {
          value: "first",
          "toggle-icon-slot": "start",
          class: "custom_card"
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_item, {
              slot: "header",
              color: "light"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, { class: "previousLabel" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Surgeries History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$a, [
              createVNode(_component_LabourPastSurgeriesHistory)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.labourPastSurgeries,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourPastSurgeries = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-d7e6d6d0"]]);

const _sfc_main$a = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      immunisation: []
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
    this.handleValueCoded();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient", "patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async handleValueCoded() {
      this.getValueCoded();
    },
    async getValueCoded() {
      try {
        const data = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "chronic conditions");
        console.log("Fetched chronic conditions:", data);
        this.immunisation = data;
      } catch (error) {
        console.error("Error fetching chronic conditions:", error);
      }
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      console.log("+++++This is pulling data++++", observations);
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$a = { class: "visitContent" };
const _hoisted_2$9 = { class: "visitData" };
const _hoisted_3$5 = { key: 0 };
const _hoisted_4$5 = { style: { "max-width": "1000px" } };
const _hoisted_5$5 = {
  key: 1,
  class: "noData"
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$9, [
              _ctx.immunisation && _ctx.immunisation.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$5, [
                createBaseVNode("div", _hoisted_4$5, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "heading" }, "CHRONIC CONDITIONS", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.immunisation, (condition, index) => {
                      return openBlock(), createBlock(_component_ion_row, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(condition), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$5, "CHRONIC CONDITIONS DATA IS EMPTY"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourChronicHistory = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-f729b889"]]);

const chronicHealthConditionsForm = {
  autoImmuneDesease: {
    name: "Auto-immune desease",
    value: "auto immune disease"
  },
  asthma: {
    name: "Asthma",
    value: "asthma"
  }};
const bloodDisorderForm = {
  sickleCell: {
    name: "Sickle cell",
    value: "sickle cell"
  },
  anaemia: {
    name: "Anemia",
    value: "anemia"
  },
  thalassemia: {
    name: "Thalassemia",
    value: "thalassemia"
  }
};
const cancerForm = {
  gynaelogical: {
    name: "Gynae Cancer",
    value: "gynae cancer"
  }};
const heartDeseaseForm = {
  ccf: {
    name: "CCF"},
  rhd: {
    name: "RHD",
    value: "rhd"
  }
};
const diabetesForm = {
  gestationalDiabetes: {
    name: "Gestational diabetes",
    value: "gestational diabetes"
  },
  preExistingType1: {
    name: "Diabetes Type 1",
    value: "diabetes type 1"
  },
  preExistingType2: {
    name: "Diabetes Type 2",
    value: "diabetes type 2"
  },
  otherDiabetis: {
    name: ""}
};
const epilespyForm = {
  epilespy: {
    name: "Epilepsy",
    value: "epilepsy"
  }
};
const hivTestForm = {
  hivTestRequired: {
    name: "HIV test required",
    value: "HIV test required"
  },
  hivTestOrdered: {
    name: "HIV test ordered",
    value: "HIV test ordered"
  },
  hivTestConducted: {
    name: "HIV test ordered"},
  hivTestNotDone: {
    name: "HIV test not done"},
  testStockOut: {
    value: "Test stock-out"
  },
  expiredTests: {
    value: " expired tests"
  },
  hivPositive: {
    name: "HIV Positive",
    value: "HIV Positive"
  },
  hivNegative1: {
    name: "HIV Negative 1",
    value: "HIV Negative 1"
  },
  hivNegative2: {
    name: "HIV Negative 2",
    value: "HIV Negative 2"
  },
  inconclusive: {
    name: "Inconclusive",
    value: "inconclusive"
  },
  highRiskYes: {
    name: "Yes",
    value: "yes"
  },
  highRiskNo: {
    name: "No",
    value: "no"
  },
  reasonsTestNotDone: {
    name: "",
    value: "reasonsTestNotDone"
  }
};
const syphilisForm = {
  syphilisTestConducted: {
    name: "Syphilis test conducted",
    value: "Syphilis test conducted"
  },
  syphilisTestOrdered: {
    name: "Syphilis test ordered",
    value: "Syphilis test ordered"
  },
  syphilisTestNotDone: {
    name: "Syphilis Test Not Done",
    value: "syphilisTestNotDone"
  },
  rapidSyphilisTest: {
    name: "Rapid syphilis test",
    value: "rapid syphilis test"
  },
  offSiteLabTest: {
    name: "Off-site lab test",
    value: "Off-site lab test"
  },
  treponemaPallidum: {
    name: "TPHA",
    value: "TPHA"
  },
  testStockOut: {
    name: "Test stock-out",
    value: "Test stock-out"
  },
  expiredTests: {
    name: "Expired tests",
    value: "Expired tests"
  },
  syphilisPositiveResults: {
    name: "Syphilis positive",
    value: "Syphilis positive"
  },
  syphilisNegativeResults: {
    name: "Syphilis Negative",
    value: "syphilis negative"
  },
  reasonsTestNotDone: {
    value: ""
  }
};
const hypertensionForm = {
  hypertension: {
    name: "Hypertension",
    value: "hypertension"
  }
};
const kidneyForm = {
  kidney: {
    name: "Kidney Disease",
    value: "kidney disease"
  }
};
const tbForm = {
  tb: {
    name: "TB",
    value: "tb"
  }
};
const mentalIllinessForm = {
  mentalIlliness: {
    name: "Mental illness",
    value: "mental illness"
  }
};
const initialChronicConditions = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Does the woman have existing Chronic Health Conditions? *",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: chronicHealthConditionsForm.autoImmuneDesease.name,
          value: chronicHealthConditionsForm.autoImmuneDesease.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: chronicHealthConditionsForm.asthma.name,
          value: chronicHealthConditionsForm.asthma.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: bloodDisorderForm.sickleCell.name,
          value: bloodDisorderForm.sickleCell.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: cancerForm.gynaelogical.name,
          value: cancerForm.gynaelogical.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: bloodDisorderForm.anaemia.name,
          value: bloodDisorderForm.anaemia.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: bloodDisorderForm.thalassemia.name,
          value: bloodDisorderForm.thalassemia.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: heartDeseaseForm.ccf.name,
          value: heartDeseaseForm.rhd.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: heartDeseaseForm.rhd.name,
          value: heartDeseaseForm.rhd.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: diabetesForm.gestationalDiabetes.name,
          value: diabetesForm.gestationalDiabetes.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: diabetesForm.preExistingType1.name,
          value: diabetesForm.preExistingType1.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: diabetesForm.preExistingType2.name,
          value: diabetesForm.preExistingType2.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: epilespyForm.epilespy.name,
          value: epilespyForm.epilespy.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: hypertensionForm.hypertension.name,
          value: hypertensionForm.hypertension.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: kidneyForm.kidney.name,
          value: kidneyForm.kidney.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: tbForm.tb.name,
          value: tbForm.tb.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: mentalIllinessForm.mentalIlliness.name,
          value: mentalIllinessForm.mentalIlliness.value,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: "HIV positive",
          value: "hiv positive",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        },
        {
          name: "Other",
          value: "other",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        class: "bold",
        name: "chronic conditions"
      },
      data: [
        {
          name: "None",
          value: "none",
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between",
          checked: false
        }
      ]
    }
  },
  {
    sideColSize: 0,
    classDash: "dashed_bottom_border",
    childName: "Other",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify other chronic conditions",
              icon: icons.editPen,
              valueType: "text",
              value: diabetesForm.otherDiabetis.name,
              name: "Other notes",
              eventType: "input",
              inputWidth: "85%",
              required: true
            }
          ]
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "HIV test date",
              icon: icons.calenderPrimary,
              value: "",
              name: "HIV test date",
              eventType: "blur",
              valueType: "text",
              inputWidth: "50%",
              required: true,
              isDatePopover: true,
              placeholder: "Pick date"
            }
          ]
        }
      ]
    }
  },
  {
    childName: "HIV positive",
    sideColSize: 0.5,
    selectdData: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    radioBtnContent: {
      header: {
        title: "Is the client on ART?",
        selectedValue: "",
        name: "chronic conditions",
        displayNone: true,
        displayNext: "Yes"
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "no",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    childName: "chronic conditions",
    classDash: "dashed_bottom_border",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "ART number",
              value: "",
              name: "Art number",
              eventType: "blur",
              valueType: "text",
              inputWidth: "50%",
              required: true
            }
          ]
        }
      ]
    }
  },
  {
    childName: "chronic conditions",
    sideColSize: 0.5,
    db_data: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    selectdData: [],
    displayData: [],
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Facility for ART",
              icon: icons.search,
              value: "",
              name: "facility for art",
              popOver: true,
              valueType: "text",
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              inputWidth: "50%",
              placeholder: "Search for facility",
              popOverData: {
                filterData: false,
                data: []
              },
              id: "",
              idName: "facility_id"
            }
          ]
          // btns:[
          //     {
          //         name: "Save",
          //         fill: "clear",
          //         icon: icons.plus
          //     }
          // ]
        }
      ]
    }
  }
];
const useLabourChronicHealthConditionsStore = defineStore("labourChronicHealthConditionsStore", {
  state: () => ({
    labourChronicHealthConditions: [...initialChronicConditions],
    labourHivTest: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Was the hiv test conducted?",
            selectedValue: "",
            class: "bold",
            name: "hivOption"
          },
          data: [
            {
              name: hivTestForm.hivTestRequired.name,
              value: hivTestForm.hivTestRequired.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm.hivTestOrdered.name,
              value: hivTestForm.hivTestOrdered.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm.hivTestConducted.name,
              value: "hivTestConducted",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm.hivTestNotDone.name,
              value: "hivTestNotDone",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "HIV test date",
                  icon: icons.calenderPrimary,
                  value: "",
                  name: "Test Date",
                  eventType: "blur",
                  required: true,
                  isDatePopover: true
                }
              ]
            }
          ]
        }
      },
      {
        checkboxBtnContent: {
          header: {
            title: "Reasons HIV test not done:",
            selectedValue: "",
            class: "bold",
            // displayNone: true,
            name: "hivOutcome"
          },
          data: [
            {
              name: "Test Stock Out",
              value: hivTestForm.testStockOut.value,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between",
              checked: false
            },
            {
              name: "Expired Tests",
              value: hivTestForm.expiredTests.value,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between",
              checked: false
            },
            {
              name: "Other",
              value: "other",
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between",
              checked: false
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //   displayNone: true,
                  inputHeader: "specify",
                  icon: icons.editPen,
                  value: hivTestForm.reasonsTestNotDone.name,
                  name: hivTestForm.reasonsTestNotDone.value,
                  eventType: "input",
                  inputWidth: "55%",
                  required: true
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Select the result of HIV test",
            name: "test2",
            selectedValue: "",
            class: "bold"
            //  displayNone: true,
          },
          data: [
            {
              name: hivTestForm.hivPositive.name,
              value: hivTestForm.hivPositive.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm.hivNegative1.name,
              value: hivTestForm.hivNegative1.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm.hivNegative2.name,
              value: hivTestForm.hivNegative2.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm.inconclusive.name,
              value: hivTestForm.inconclusive.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            //  displayNone: true,
            name: "test1",
            title: "Is the woman at high risk of HIV?",
            selectedValue: "",
            class: "bold"
          },
          data: [
            {
              name: hivTestForm.highRiskYes.name,
              value: hivTestForm.highRiskYes.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: hivTestForm.highRiskNo.name,
              value: hivTestForm.highRiskNo.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      }
    ],
    labourSyphilisTest: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border",
        radioBtnContent: {
          header: {
            title: "Select whether:",
            name: "syphilisOption",
            class: "bold",
            selectedValue: ""
          },
          data: [
            {
              name: syphilisForm.syphilisTestConducted.name,
              value: syphilisForm.syphilisTestConducted.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: syphilisForm.syphilisTestOrdered.name,
              value: syphilisForm.syphilisTestOrdered.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: syphilisForm.syphilisTestNotDone.name,
              value: syphilisForm.syphilisTestNotDone.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        radioBtnContent: {
          header: {
            displayNone: true,
            name: "syphilisDetails",
            class: "bold",
            title: "Select the type of syphilis test that was done",
            selectedValue: ""
          },
          data: [
            {
              name: syphilisForm.rapidSyphilisTest.name,
              value: syphilisForm.rapidSyphilisTest.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between",
              checked: false
            },
            {
              name: syphilisForm.offSiteLabTest.name,
              value: syphilisForm.offSiteLabTest.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between",
              checked: false
            },
            {
              name: syphilisForm.treponemaPallidum.name,
              value: syphilisForm.treponemaPallidum.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between",
              checked: false
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        radioBtnContent: {
          header: {
            title: "Syphilis test result",
            class: "bold",
            selectedValue: "",
            name: "syphlisResults"
            // displayNone: true,
          },
          data: [
            {
              name: syphilisForm.syphilisPositiveResults.name,
              value: syphilisForm.syphilisPositiveResults.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: syphilisForm.syphilisNegativeResults.name,
              value: syphilisForm.syphilisNegativeResults.value,
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "Syphilis test date",
                  icon: icons.calenderPrimary,
                  value: "",
                  name: "syphilisDate",
                  eventType: "blur",
                  required: true,
                  inputWidth: "55%",
                  isDatePopover: true
                }
              ]
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "Syphilis test date",
                  icon: icons.calenderPrimary,
                  value: "",
                  name: "syphilisDate",
                  eventType: "blur",
                  required: true,
                  inputWidth: "300px",
                  isDatePopover: true
                }
              ]
            }
          ]
        }
      },
      {
        selectdData: [],
        isFinishBtn: false,
        checkboxBtnContent: {
          header: {
            title: "Reason syphilis test not done",
            selectedValue: "",
            name: "notDone",
            class: "bold"
            // displayNone: true,
          },
          data: [
            {
              name: syphilisForm.testStockOut.name,
              value: syphilisForm.testStockOut.value,
              checked: false,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between"
            },
            {
              name: syphilisForm.expiredTests.name,
              value: syphilisForm.expiredTests.value,
              checked: false,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              checked: false,
              labelPlacement: "start",
              colSize: "9",
              justify: "space-between"
            }
          ]
        }
      },
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  //  displayNone: true,
                  inputHeader: "specify",
                  icon: icons.editPen,
                  value: syphilisForm.reasonsTestNotDone.value,
                  name: "Reason",
                  eventType: "input",
                  inputWidth: "55%",
                  required: true
                }
              ]
            }
          ]
        }
      }
    ]
  }),
  actions: {
    addExisitingChronicHealthConditions(data) {
      this.labourChronicHealthConditions = data;
    },
    addhivTest(data) {
      this.labourHivTest = data;
    },
    addSyphilisTest(data) {
      this.labourSyphilisTest = data;
    },
    getInitial2() {
      const data = lodashExports.cloneDeep(initialChronicConditions);
      return [...data];
    }
  }
  //
});

const _sfc_main$9 = defineComponent({
  name: "Past Surguries",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    LabourChronicHistory
  },
  data() {
    return {
      currentSection: 0,
      initialData: [],
      initialData1: [],
      initialData2: [],
      //art data
      no_item: false,
      search_item: false,
      display_item: false,
      addItemButton: true,
      selectedText: "",
      conditionStatus: "",
      data: [],
      facilityData: [],
      popoverOpen: false,
      event: "",
      selectedCondition: ""
    };
  },
  mounted() {
    const medicalHistory = useMedicalHistoryStore();
    const allegy = useMedicalHistoryStore();
    const exisitingChronicHealthConditions = useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    useMedicalHistoryStore();
    this.initialData = medicalHistory.getInitial();
    this.initialData1 = allegy.getInitial1();
    this.initialData2 = exisitingChronicHealthConditions.getInitial2();
    this.handleHivResults();
    this.handleSyphilis();
    this.handleChronicCondition();
    this.handleHivConducted();
    this.handleHivConductedOptin();
    this.handleOtherHiv();
    this.handleSyphlisdate();
    this.handleSyphilisNotDone();
    this.handleSpecifySyphilis();
    this.handleTestNotDone();
    this.handleHIVPositive();
  },
  watch: {
    hivTest: {
      handler() {
        this.handleHivResults();
        this.handleOtherHiv();
        this.handleHivConducted();
        this.handleTestNotDone();
        this.handleHivConductedOptin();
      },
      deep: true
    },
    syphilisTest: {
      handler() {
        this.handleSyphilis();
        this.handleSyphlisdate();
        this.handleSyphilisNotDone();
        this.handleSpecifySyphilis();
      },
      deep: true
    },
    exisitingChronicHealthConditions: {
      handler(col) {
        this.handleChronicCondition();
        this.handleHIVPositive();
        this.handleInputData(col);
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useLabourChronicHealthConditionsStore, ["labourChronicHealthConditions"]),
    ...mapState(useLabourChronicHealthConditionsStore, ["labourHivTest"]),
    ...mapState(useLabourChronicHealthConditionsStore, ["labourSyphilisTest"]),
    ExistingChronicConditions() {
      return getCheckboxSelectedValue(this.labourChronicHealthConditions, "chronic conditions");
    }
  },
  methods: {
    validationRules(col) {
      return validateField$3(this.labourChronicHealthConditions, col.name, this[col.name]);
    },
    async handleInputData(col) {
      this.validationRules(col);
      if (col.inputHeader == "Facility for ART") {
        this.facilityData = await this.getFacility(col.value);
        modifyFieldValue(this.labourChronicHealthConditions, "facility for art", "popOverData", {
          filterData: false,
          data: this.facilityData
        });
      }
    },
    async getFacility(value) {
      const data = await LocationService.getFacilities({ name: value });
      return data;
    },
    // displaying other input fields when hiv positive is checked
    handleHIVPositive() {
      if (getCheckboxSelectedValue(this.labourChronicHealthConditions, "HIV positive")?.value == "hiv positive") {
        modifyFieldValue(this.labourChronicHealthConditions, "HIV test date", "displayNone", false);
        modifyRadioValue(this.labourChronicHealthConditions, "Is client on ART", "displayNone", false);
      } else {
        modifyFieldValue(this.labourChronicHealthConditions, "HIV test date", "displayNone", true);
        modifyRadioValue(this.labourChronicHealthConditions, "Is client on ART", "displayNone", true);
      }
    },
    handleHivResults() {
      if (getRadioSelectedValue(this.labourHivTest, "test2") == "hivPositive") {
        modifyRadioValue(this.labourHivTest, "test1", "displayNone", false);
      } else {
        modifyRadioValue(this.labourHivTest, "test1", "displayNone", true);
      }
    },
    handleHivConductedOptin() {
      if (getRadioSelectedValue(this.labourHivTest, "hivOption") == "hivTestConducted") {
        modifyRadioValue(this.labourHivTest, "test2", "displayNone", false);
      } else {
        modifyRadioValue(this.labourHivTest, "test2", "displayNone", true);
      }
    },
    handleOtherHiv() {
      if (getCheckboxSelectedValue(this.labourHivTest, "Other")?.value == "other") {
        modifyFieldValue(this.labourHivTest, "reasonsTestNotDone", "displayNone", false);
      } else {
        modifyFieldValue(this.labourHivTest, "reasonsTestNotDone", "displayNone", true);
      }
    },
    handleSyphilis() {
      if (getRadioSelectedValue(this.labourSyphilisTest, "syphilisOption") == "syphilisTestConducted") {
        modifyRadioValue(this.labourSyphilisTest, "syphilisDetails", "displayNone", false);
      } else {
        modifyRadioValue(this.labourSyphilisTest, "syphilisDetails", "displayNone", true);
      }
    },
    handleChronicCondition() {
      const checkBoxes = [
        "Auto-immune desease",
        "Asthma",
        "Sickle cell",
        "Anemia",
        "HIV positive",
        "Thalassemia",
        "Gynaecological",
        "CCF",
        "RHD",
        "Gynae Cancer",
        "Diabetes Type 1",
        "Diabetes Type 2",
        "Gestational diabetes",
        "pre-existing type 1",
        "pre-existing type 2",
        "Epilepsy",
        "Hypertension",
        "Kidney Disease",
        "TB",
        "Mental illness",
        "Other"
      ];
      if (getCheckboxSelectedValue(this.labourChronicHealthConditions, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourChronicHealthConditions, checkbox, "checked", false);
          modifyCheckboxValue(this.labourChronicHealthConditions, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourChronicHealthConditions, checkbox, "disabled", false);
        });
      }
    },
    handleHivConducted() {
      if (getRadioSelectedValue(this.labourHivTest, "hivOption") == "hivTestConducted") {
        modifyFieldValue(this.labourHivTest, "testDate", "displayNone", false);
      } else {
        modifyFieldValue(this.labourHivTest, "testDate", "displayNone", true);
      }
    },
    handleTestNotDone() {
      if (getRadioSelectedValue(this.labourHivTest, "hivOption") == "hivTestNotDone") {
        modifyCheckboxHeader(this.labourHivTest, "hivOutcome", "displayNone", false);
      } else {
        modifyCheckboxHeader(this.labourHivTest, "hivOutcome", "displayNone", true);
      }
    },
    handleSyphlisdate() {
      if (getRadioSelectedValue(this.labourSyphilisTest, "syphilisOption") == "syphilisTestConducted") {
        modifyFieldValue(this.labourSyphilisTest, "syphilisDate", "displayNone", false);
      } else {
        modifyFieldValue(this.labourSyphilisTest, "syphilisDate", "displayNone", true);
      }
    },
    handleSyphilisNotDone() {
      if (getRadioSelectedValue(this.labourSyphilisTest, "syphilisOption")?.value == "syphilisTestNotDone") {
        modifyCheckboxHeader(this.labourSyphilisTest, "notDone", "displayNone", false);
      } else {
        modifyCheckboxHeader(this.labourSyphilisTest, "notDone", "displayNone", true);
      }
    },
    handleSpecifySyphilis() {
      if (getCheckboxSelectedValue(this.labourSyphilisTest, "Other") == "other") {
        modifyFieldValue(this.labourSyphilisTest, "Reason", "displayNone", false);
      } else {
        modifyFieldValue(this.labourSyphilisTest, "Reason", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$9 = { class: "container" };
const _hoisted_2$8 = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_LabourChronicHistory = resolveComponent("LabourChronicHistory");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    createVNode(_component_ion_accordion_group, {
      ref: "accordionGroup",
      class: "previousView ion-margin-bottom"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_accordion, {
          value: "first",
          "toggle-icon-slot": "start",
          class: "custom_card"
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_item, {
              slot: "header",
              color: "light"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, { class: "previousLabel" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Chronical Health conditions History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$8, [
              createVNode(_component_LabourChronicHistory)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.labourChronicHealthConditions,
              initialData: _ctx.initialData2,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourChronicHealthConditions = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-2ba09954"]]);

const _sfc_main$8 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      immunisation: []
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
    this.handleValueCoded();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient", "patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async handleValueCoded() {
      this.getValueCoded();
    },
    async getValueCoded() {
      try {
        const data = await ObservationService.getAllValueCoded(
          this.patient?.patientID || "",
          "The woman received tetanus doses for immunization?"
        );
        console.log("Fetched tetanus doses for immunization:", data);
        this.immunisation = data;
      } catch (error) {
        console.error("Error fetching tetanus doses for immunization:", error);
      }
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      console.log("+++++This is pulling data++++", observations);
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$8 = { class: "visitContent" };
const _hoisted_2$7 = { class: "visitData" };
const _hoisted_3$4 = { key: 0 };
const _hoisted_4$4 = { style: { "max-width": "1000px" } };
const _hoisted_5$4 = {
  key: 1,
  class: "noData"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$7, [
              _ctx.immunisation && _ctx.immunisation.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
                createBaseVNode("div", _hoisted_4$4, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "heading" }, "IMMUNISATION DATA", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.immunisation, (condition, index) => {
                      return openBlock(), createBlock(_component_ion_row, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(condition), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$4, "IMMUNISATION DATA IS EMPTY"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourVaccineHistory$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-4e85aaa3"]]);

const pastObstreticValidationShema$3 = create$3().shape({
  "The woman received tetanus doses for immunization?": create$8().required("This field is required")
});
const initialLMNP$1 = [
  {
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "LNMP Known?",
        selectedValue: "",
        name: "LNMP Known?",
        displayNext: "Yes",
        alertsErrorMassage: ""
      },
      data: [
        {
          value: "Yes",
          name: "Yes",
          colSize: "2"
        },
        {
          name: "No",
          value: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    childName: "LNMP Known?",
    sectionHeader: "",
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              class: "bold",
              inputHeader: "LNMP date",
              value: "",
              name: "lmnpDate",
              eventType: "input",
              minDate: "",
              maxDate: "",
              valueType: "text",
              alertsErrorMassage: "",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              inputWidth: "100%"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: icons.editPen,
        textColor: "",
        value: "",
        name: "",
        index: ""
      }
    ]
  },
  {
    childName: "LNMP Known?",
    sectionHeader: "",
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              class: "bold",
              inputHeader: "Gestation age",
              value: "",
              name: "lmnpGestationAge",
              eventType: "input",
              valueType: "text",
              alertsErrorMassage: "",
              inputWidth: "100%",
              unit: "Weeks",
              disabled: "disabled"
            },
            {
              // displayNone: true,
              class: "bold",
              inputHeader: "EDD",
              value: "",
              name: "Estimated date of delivery",
              eventType: "input",
              valueType: "text",
              alertsErrorMassage: "",
              inputWidth: "100%",
              disabled: "disabled"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Ultrasound done?",
        selectedValue: "",
        name: "Ultrasound done?",
        displayNext: "Yes",
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2"
        },
        {
          name: "No",
          value: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    childName: "Ultrasound done?",
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              class: "bold",
              displayNone: true,
              inputHeader: "Date for ultrasound",
              value: "",
              name: "Ultrasound",
              minDate: "",
              maxDate: "",
              required: true,
              eventType: "input",
              valueType: "text",
              alertsErrorMassage: "",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              inputWidth: "100%"
            },
            {
              class: "bold",
              inputHeader: "Gestation age from ultrasound",
              value: "",
              name: "specify",
              required: true,
              eventType: "input",
              valueType: "text",
              alertsErrorMassage: "",
              icon: icons.editPen,
              placeholder: "",
              inputWidth: "100%"
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    childName: "Ultrasound done?",
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "LMNP date from ultrasound",
              value: "",
              name: "ultrasound lmnp date",
              required: true,
              eventType: "input",
              minDate: "2023-01-01",
              maxDate: "2060-01-01",
              alertsErrorMassage: "",
              icon: icons.calenderPrimary,
              disabled: "disabled",
              inputWidth: "100%",
              valueType: "text"
            },
            {
              // displayNone: true,
              inputHeader: "EDD",
              value: "",
              name: "Estimated date of delivery from ultrasound",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              minDate: "2023-01-01",
              maxDate: "2060-01-01",
              icon: icons.calenderPrimary,
              disabled: "disabled",
              inputWidth: "100%",
              valueType: "text"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Gestation age by Palpation known?",
        selectedValue: "",
        name: "Gestation",
        displayNext: "Yes",
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2"
        },
        {
          name: "No",
          value: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    childName: "Gestation",
    isFinishBtn: false,
    class: "bold",
    classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Enter gestation age by palpation",
              value: "",
              class: "bold",
              name: "Gestation age by palpation",
              required: true,
              eventType: "input",
              valueType: "text",
              alertsErrorMassage: "",
              icon: icons.editPen,
              inputWidth: "100%"
            },
            {
              inputHeader: "EDD",
              value: "",
              name: "date of delivery",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              //isDatePopover: true,
              disabled: "disabled",
              icon: icons.calenderPrimary,
              placeholder: "Pick date",
              inputWidth: "100%"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Gestation age to be used",
        selectedValue: "",
        name: "Gestation age to be used",
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "GA by  LNMP",
          value: "GA by  LNMP",
          colSize: "7"
        },
        {
          name: "GA by ultrasound",
          value: "ga by ultrasound",
          colSize: "7"
        },
        {
          name: "GA by palpation",
          value: "Ga by palpation",
          colSize: "7"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "The woman received tetanus doses for immunization*?",
        selectedValue: "",
        name: "The woman received tetanus doses for immunization?",
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "Fully Immunised",
          value: "fully immunised",
          colSize: "4"
        },
        {
          name: "Under Immunised",
          value: "under immunised",
          colSize: "4"
        },
        {
          name: "No doses",
          value: "no doses",
          colSize: "4.001"
        },
        {
          name: "Unknown doses",
          value: "unknown doses",
          colSize: "4"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    // classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Number of under immunised tetanus doses",
        selectedValue: "",
        displayNone: true,
        name: "Number of tetanus doses",
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "One dose",
          value: "one dose",
          colSize: "4"
        },
        {
          name: "Two doses",
          value: "two doses",
          colSize: "4"
        },
        {
          name: "Three doses",
          value: "three doses",
          colSize: "4.001"
        },
        {
          name: "Four doses",
          value: "four doses",
          colSize: "4"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    classDash: "",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt6Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    classDash: "",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt7Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "tt8Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    isFinishBtn: false,
    //classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt9Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "tt10Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 3 immunisation date",
              value: "",
              name: "tt11Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sideColSize: 0.5,
    //classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt1Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "tt2Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              // displayNone: true,
              inputHeader: "TTV 3 immunisation date",
              value: "",
              name: "tt3Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 4 immunisation date",
              value: "",
              name: "tt4Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 5 immunisation date",
              value: "",
              name: "tt5Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sideColSize: 0.5,
    //classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "12",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "13",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              // displayNone: true,
              inputHeader: "TTV 3 immunisation date",
              value: "",
              name: "14",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 4 immunisation date",
              value: "",
              name: "15",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sideColSize: 0.5,
    //classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            // {
            //   displayNone: true,
            //   inputHeader: "TTV 3 immunisation date",
            //   value: "",
            //   name: "immunised doses",
            //   isDatePopover: true,
            //   icon: icons.calenderPrimary,
            //   placeholder: "",
            //   required: true,
            //   eventType: "input",
            //   inputWidth: "100%",
            //   alertsErrorMassage: "",
            // },
            // {
            //   //displayNone: true,
            //   inputHeader: "TTV 4 immunisation date",
            //   value: "",
            //   name: "underimmunised3",
            //   isDatePopover: true,
            //   icon: icons.calenderPrimary,
            //   placeholder: "Pick the date",
            //   required: true,
            //   eventType: "input",
            //   inputWidth: "100%",
            //   alertsErrorMassage: "",
            // },
          ]
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    selectdData: [],
    isFinishBtn: false,
    //classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Reason Tetanus toxoid (TT) was not conducted",
        name: "Reason Tetanus toxoid (TT) was not conducted",
        selectedValue: "",
        displayNone: true,
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "Stockout",
          value: "stockout",
          colSize: "5"
        },
        {
          name: "Client is ill",
          value: "client is ill",
          colSize: "5"
        },
        {
          name: "Client refused",
          value: "client refused",
          colSize: "5"
        },
        {
          name: "Allergy to vaccine",
          value: "allergy",
          colSize: "5"
        },
        {
          name: "Other",
          value: "other",
          colSize: "5"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    sideColSize: 0.5,
    isFinishBtn: false,
    sectionHeader: "",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify other reasons",
              value: "",
              name: "Other",
              icon: icons.editPen,
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  }
];
const initialUltraSound = [];
const initialTetenus = [];
const useCurrentPregnanciesStore = defineStore("currentPregnanciesStore", {
  state: () => ({
    palpation: [],
    lmnp: [...initialLMNP$1],
    ultrasound: [...initialUltraSound],
    tetanus: [...initialTetenus]
  }),
  actions: {
    setTetanus(data) {
      this.tetanus = data;
    },
    setLMNP(data) {
      this.lmnp = data;
    },
    setUltrasound(data) {
      this.ultrasound = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialLMNP$1);
      return [...data];
    },
    getInitial1() {
      const data = lodashExports.cloneDeep(initialUltraSound);
      return [...data];
    },
    getInitial2() {
      const data = lodashExports.cloneDeep(initialTetenus);
      return [...data];
    }
  }
  //
});

create$3().shape({
  "The woman received tetanus doses for immunization?": create$8().required("This field is required")
});
const initialLMNP = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "The woman received tetanus doses for immunization*?",
        selectedValue: "",
        name: "The woman received tetanus doses for immunization?",
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "Fully Immunised",
          value: "fully immunised",
          colSize: "4"
        },
        {
          name: "Under Immunised",
          value: "under immunised",
          colSize: "4"
        },
        {
          name: "No doses",
          value: "no doses",
          colSize: "4.001"
        },
        {
          name: "Unknown doses",
          value: "unknown doses",
          colSize: "4"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    // classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Number of under immunised tetanus doses",
        selectedValue: "",
        displayNone: true,
        name: "Number of tetanus doses",
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "One dose",
          value: "one dose",
          colSize: "4"
        },
        {
          name: "Two doses",
          value: "two doses",
          colSize: "4"
        },
        {
          name: "Three doses",
          value: "three doses",
          colSize: "4.001"
        },
        {
          name: "Four doses",
          value: "four doses",
          colSize: "4"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    classDash: "",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt6Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    classDash: "",
    sideColSize: 0.5,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt7Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "tt8Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    isFinishBtn: false,
    //classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt9Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "tt10Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 3 immunisation date",
              value: "",
              name: "tt11Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sideColSize: 0.5,
    //classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "tt1Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "tt2Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              // displayNone: true,
              inputHeader: "TTV 3 immunisation date",
              value: "",
              name: "tt3Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 4 immunisation date",
              value: "",
              name: "tt4Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              displayNone: true,
              inputHeader: "TTV 5 immunisation date",
              value: "",
              name: "tt5Date",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sideColSize: 0.5,
    //classDash: "dashed_bottom_border",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "TTV 1 immunisation date",
              value: "",
              name: "12",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 2 immunisation date",
              value: "",
              name: "13",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              // displayNone: true,
              inputHeader: "TTV 3 immunisation date",
              value: "",
              name: "14",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            },
            {
              //displayNone: true,
              inputHeader: "TTV 4 immunisation date",
              value: "",
              name: "15",
              isDatePopover: true,
              icon: icons.calenderPrimary,
              placeholder: "Pick the date",
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    selectdData: [],
    isFinishBtn: false,
    //classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        class: "bold",
        title: "Reason Tetanus toxoid (TT) was not conducted",
        name: "Reason Tetanus toxoid (TT) was not conducted",
        selectedValue: "",
        displayNone: true,
        alertsErrorMassage: ""
      },
      data: [
        {
          name: "Stockout",
          value: "stockout",
          colSize: "5"
        },
        {
          name: "Client is ill",
          value: "client is ill",
          colSize: "5"
        },
        {
          name: "Client refused",
          value: "client refused",
          colSize: "5"
        },
        {
          name: "Allergy to vaccine",
          value: "allergy",
          colSize: "5"
        },
        {
          name: "Other",
          value: "other",
          colSize: "5"
        }
      ]
    }
  },
  {
    classDash: "dashed_bottom_border",
    sideColSize: 0.5,
    isFinishBtn: false,
    sectionHeader: "",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify other reasons",
              value: "",
              name: "Other",
              icon: icons.editPen,
              required: true,
              eventType: "input",
              inputWidth: "100%",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  }
];
const useLabourVaccineStore = defineStore("labourVaccineStore", {
  state: () => ({
    labourTetanus: [...initialLMNP]
  }),
  actions: {
    setTetanus(data) {
      this.labourTetanus = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialLMNP);
      return [...data];
    }
  }
  //
});

const _sfc_main$7 = defineComponent({
  name: "Current",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup,
    LabourVaccineHistory: LabourVaccineHistory$1
  },
  data() {
    return {
      iconsContent: icons,
      currentPregnanciesInstance: {},
      inputField: "",
      setName: "",
      initialData: [],
      initialData1: [],
      initialData2: []
    };
  },
  computed: {
    // ...mapState(useCurrentPregnanciesStore, ["palpation"]),
    // ...mapState(useCurrentPregnanciesStore, ["lmnp"]),
    ...mapState(useLabourVaccineStore, ["labourTetanus"])
    // ...mapState(useCurrentPregnanciesStore, ["tetanus"]),
    // ...mapState(useCurrentPregnanciesStore, ["ultrasound"]),
  },
  mounted() {
    useCurrentPregnanciesStore();
    useCurrentPregnanciesStore();
    useCurrentPregnanciesStore();
    const tetanus = useLabourVaccineStore();
    this.initialData = tetanus.getInitial();
    this.handleTetanus();
    this.validaterowData({});
    this.handleUnderImmunised();
    this.handleOneDose();
    this.handleTwoDose();
    this.handleThreeDose();
    this.handleFourDose();
    this.handleNodoses();
    this.handleOtherDoses();
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  watch: {
    labourTetanus: {
      handler(event) {
        this.handleInputData(event);
        this.handleTetanus();
        this.handleUnderImmunised();
        this.handleOneDose();
        this.handleTwoDose();
        this.handleThreeDose();
        this.handleFourDose();
        this.handleNodoses();
        this.handleOtherDoses();
      },
      deep: true
    }
  },
  methods: {
    async handleImmunValidation(event) {
      YupValidateField(this.labourTetanus, pastObstreticValidationShema$3, event.name, event.value);
    },
    validationRules(event) {
      return validateField$3(this.labourTetanus, event.name, this[event.name]);
    },
    // Validations
    validaterowData(event) {
      this.validationRules(event);
    },
    async handleInputData(event) {
      this.handleImmunValidation(event);
      this.validaterowData(event);
    },
    handleTetanus() {
      if (getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "fully immunised") {
        modifyFieldValue(this.labourTetanus, "tt1Date", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "tt2Date", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "tt3Date", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "tt4Date", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "tt5Date", "displayNone", false);
      } else {
        modifyFieldValue(this.labourTetanus, "tt1Date", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "tt2Date", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "tt3Date", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "tt4Date", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "tt5Date", "displayNone", true);
      }
    },
    handleUnderImmunised() {
      if (getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "under immunised") {
        modifyRadioValue(this.labourTetanus, "Number of tetanus doses", "displayNone", false);
      } else {
        modifyRadioValue(this.labourTetanus, "Number of tetanus doses", "displayNone", true);
      }
    },
    handleOneDose() {
      if (getRadioSelectedValue(this.labourTetanus, "Number of tetanus doses") == "one dose" && getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "under immunised") {
        modifyFieldValue(this.labourTetanus, "tt6Date", "displayNone", false);
      } else {
        modifyFieldValue(this.labourTetanus, "tt6Date", "displayNone", true);
      }
    },
    handleTwoDose() {
      if (getRadioSelectedValue(this.labourTetanus, "Number of tetanus doses") == "two doses" && getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "under immunised") {
        modifyFieldValue(this.labourTetanus, "tt7Date", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "tt8Date", "displayNone", false);
      } else {
        modifyFieldValue(this.labourTetanus, "tt7Date", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "tt8Date", "displayNone", true);
      }
    },
    handleThreeDose() {
      if (getRadioSelectedValue(this.labourTetanus, "Number of tetanus doses") == "three doses" && getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "under immunised") {
        modifyFieldValue(this.labourTetanus, "tt9Date", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "tt10Date", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "tt11Date", "displayNone", false);
      } else {
        modifyFieldValue(this.labourTetanus, "tt9Date", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "tt10Date", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "tt11Date", "displayNone", true);
      }
    },
    handleFourDose() {
      if (getRadioSelectedValue(this.labourTetanus, "Number of tetanus doses") == "four doses" && getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "under immunised") {
        modifyFieldValue(this.labourTetanus, "12", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "13", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "14", "displayNone", false);
        modifyFieldValue(this.labourTetanus, "15", "displayNone", false);
      } else {
        modifyFieldValue(this.labourTetanus, "12", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "13", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "14", "displayNone", true);
        modifyFieldValue(this.labourTetanus, "15", "displayNone", true);
      }
    },
    handleNodoses() {
      if (getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "no doses") {
        modifyRadioValue(this.labourTetanus, "Reason Tetanus toxoid (TT) was not conducted", "displayNone", false);
      } else {
        modifyRadioValue(this.labourTetanus, "Reason Tetanus toxoid (TT) was not conducted", "displayNone", true);
      }
    },
    handleOtherDoses() {
      if (getRadioSelectedValue(this.labourTetanus, "Reason Tetanus toxoid (TT) was not conducted") == "other" && getRadioSelectedValue(this.labourTetanus, "The woman received tetanus doses for immunization?") == "no doses") {
        modifyFieldValue(this.labourTetanus, "Other", "displayNone", false);
      } else {
        modifyFieldValue(this.labourTetanus, "Other", "displayNone", true);
      }
    }
  }
});

const _hoisted_1$7 = { class: "container" };
const _hoisted_2$6 = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_LabourVaccineHistory = resolveComponent("LabourVaccineHistory");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createVNode(_component_ion_accordion_group, {
      ref: "accordionGroup",
      class: "previousView ion-margin-bottom"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_accordion, {
          value: "first",
          "toggle-icon-slot": "start",
          class: "custom_card"
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_item, {
              slot: "header",
              color: "light"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, { class: "previousLabel" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Vaccine History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$6, [
              createVNode(_component_LabourVaccineHistory)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.labourTetanus,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData,
              initialData: _ctx.initialData
            }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue", "initialData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourVaccineHistory = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-f2955169"]]);

const initialMedications$1 = [
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Which medications is the woman currently prescribed?*",
        selectedValue: "",
        class: "bold"
      },
      data: []
    }
  },
  {
    sideColSize: 0.5,
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Oral PreP for HIV",
          value: "Oral PreP for HIV",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Analgesic",
          value: "Analgesic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Anti-consulsive",
          value: "Anti-consulsive",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Anti-TB",
          value: "Anti-TB",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Antihelmintic",
          value: "Antihelmintic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Antimarials",
          value: "Antimarials",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Antitussive",
          value: "Antitussive",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Aspirin",
          value: "Aspirin",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Calcium",
          value: "Calcium",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Doxylamine",
          value: "Doxylamine",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Hematinic",
          value: "Hematinic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Iron",
          value: "Iron",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Metoclopramide",
          value: "Metoclopramide",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Thyroid medication",
          value: "Thyroid medication",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Antiacids",
          value: "Antiacids",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Anti-psychotics",
          value: "Anti-psychotics",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Anti-diabetic",
          value: "Anti-diabetic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Anti-hypertensive",
          value: "Anti-hypertensive",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Asthamatic",
          value: "Asthamatic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Co-trimoxazole",
          value: "Co-trimoxazole",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Folic acid",
          value: "Folic acid",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Hemorrhoidal medication",
          value: "Hemorrhoidal medication",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Magnesium",
          value: "Magnesium",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Multivitamin",
          value: "Multivitamin",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Vitamin A",
          value: "Vitamin A",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Other",
          value: "other",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other",
    sideColSize: 0.5,
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify other medications",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: "100%"
            }
          ]
        }
      ]
    }
  }
];
const useMedicationStore = defineStore("medicationsStore", {
  state: () => ({
    Medication: [...initialMedications$1]
  }),
  actions: {
    setPersonalInformation(data) {
      this.Medication = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialMedications$1);
      return [...data];
    }
  }
});

const initialMedications = [
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "Which medications is the woman currently prescribed?*",
        selectedValue: "",
        class: "bold"
      },
      data: []
    }
  },
  {
    sideColSize: 0.5,
    selectdData: [],
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Oral PreP for HIV",
          value: "Oral PreP for HIV",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Analgesic",
          value: "Analgesic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Anti-consulsive",
          value: "Anti-consulsive",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Anti-TB",
          value: "Anti-TB",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Antihelmintic",
          value: "Antihelmintic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Antimarials",
          value: "Antimarials",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Antitussive",
          value: "Antitussive",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Aspirin",
          value: "Aspirin",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Calcium",
          value: "Calcium",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Doxylamine",
          value: "Doxylamine",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Hematinic",
          value: "Hematinic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Iron",
          value: "Iron",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Metoclopramide",
          value: "Metoclopramide",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Thyroid medication",
          value: "Thyroid medication",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Antiacids",
          value: "Antiacids",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Anti-psychotics",
          value: "Anti-psychotics",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Anti-diabetic",
          value: "Anti-diabetic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Anti-hypertensive",
          value: "Anti-hypertensive",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Asthamatic",
          value: "Asthamatic",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Co-trimoxazole",
          value: "Co-trimoxazole",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Folic acid",
          value: "Folic acid",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Hemorrhoidal medication",
          value: "Hemorrhoidal medication",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Magnesium",
          value: "Magnesium",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Multivitamin",
          value: "Multivitamin",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "Vitamin A",
          value: "Vitamin A",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Other",
          value: "other",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 0.5,
    classDash: "dashed_bottom_border",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Which medications is the woman currently prescribed?"
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    childName: "Other",
    sideColSize: 0.5,
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify other medications",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other notes",
              required: true,
              eventType: "input",
              inputWidth: "100%"
            }
          ]
        }
      ]
    }
  }
];
const useLabourMedicationStore = defineStore("labourMedicationsStore", {
  state: () => ({
    LabourMedication: [...initialMedications]
  }),
  actions: {
    setPersonalInformation(data) {
      this.LabourMedication = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialMedications);
      return [...data];
    }
  }
});

const _sfc_main$6 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      immunisation: []
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
    this.handleValueCoded();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient", "patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async handleValueCoded() {
      this.getValueCoded();
    },
    async getValueCoded() {
      try {
        const data = await ObservationService.getAllValueCoded(
          this.patient?.patientID || "",
          "Which medications is the woman currently prescribed?"
        );
        console.log("Fetched medications use:", data);
        this.immunisation = data;
      } catch (error) {
        console.error("Error fetching medications use:", error);
      }
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      console.log("+++++This is pulling data++++", observations);
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$6 = { class: "visitContent" };
const _hoisted_2$5 = { class: "visitData" };
const _hoisted_3$3 = { key: 0 };
const _hoisted_4$3 = { style: { "max-width": "1000px" } };
const _hoisted_5$3 = {
  key: 1,
  class: "noData"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$5, [
              _ctx.immunisation && _ctx.immunisation.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
                createBaseVNode("div", _hoisted_4$3, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "heading" }, "MEDICATIONS DATA", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.immunisation, (condition, index) => {
                      return openBlock(), createBlock(_component_ion_row, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(condition), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$3, "MEDICATIONS DATA IS EMPTY"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourMedicationsHistory = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-1060c254"]]);

const _sfc_main$5 = defineComponent({
  name: "Menu",
  components: {
    IonLabel,
    IonTextarea,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    LabourMedicationsHistory
  },
  data() {
    return {
      iconsContent: icons,
      initialData: []
    };
  },
  mounted() {
    this.handleOther();
    const Medications = useMedicationStore();
    this.initialData = Medications.getInitial();
  },
  watch: {
    Medication: {
      handler(event) {
        this.handleOther();
        this.handleInputData(event);
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useLabourMedicationStore, ["LabourMedication"]),
    Medications() {
      return getCheckboxSelectedValue(this.LabourMedication, "Which medications is the woman currently prescribed?");
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    navigationMenu(url) {
      menuController.close();
      this.$router.push(url);
    },
    validationRules(event) {
      return validateField$3(this.LabourMedication, event.name, this[event.name]);
    },
    async handleInputData(event) {
      this.validationRules(event);
    },
    handleOther() {
      const checkBoxes = [
        "Oral PreP for HIV",
        "Analgesic",
        "Anti-consulsive",
        "Anti-TB",
        "Antihelmintic",
        "Antimarials",
        "Antitussive",
        "Aspirin",
        "Calcium",
        "Doxylamine",
        "Hematinic",
        "Iron",
        "Metoclopramide",
        "Thyroid medication",
        "Antiacids",
        "Anti-psychotics",
        "Anti-diabetic",
        "Anti-hypertensive",
        "ARVs",
        "Antivirals",
        "Asthamatic",
        "Co-trimoxazole",
        "Folic acid",
        "Hemorrhoidal medication",
        "Magnesium",
        "Multivitamin",
        "Vitamin A",
        "Other"
      ];
      if (getCheckboxSelectedValue(this.LabourMedication, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.LabourMedication, checkbox, "checked", false);
          modifyCheckboxValue(this.LabourMedication, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.LabourMedication, checkbox, "disabled", false);
        });
      }
    }
  }
});

const _hoisted_1$5 = { class: "container" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.LabourMedication,
              initialData: _ctx.initialData,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourMedications = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-8c118b36"]]);

const _sfc_main$4 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {}
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useProgramStore, ["activeProgram"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
      this.pregnancy["Abortions/Miscarriages"] = this.filterObs(observations, "Abortions/Miscarriages")?.[0]?.value_text ?? "";
      this.pregnancy.Stillbirths = this.filterObs(observations, "Stillbirths")?.[0]?.value_text ?? "";
      this.pregnancy.LiveBirths = this.filterObs(observations, "LiveBirths")?.[0]?.value_text ?? "";
      this.pregnancy.Parity = this.filterObs(observations, "Parity")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$4 = { class: "visitContent" };
const _hoisted_2$4 = { class: "visitData" };
const _hoisted_3$2 = { key: 0 };
const _hoisted_4$2 = { style: { "max-width": "1000px" } };
const _hoisted_5$2 = {
  key: 1,
  class: "noData"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$4, [
              Object.values(_ctx.pregnancy).every((value) => value !== "") ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                createBaseVNode("div", _hoisted_4$2, [
                  _cache[7] || (_cache[7] = createBaseVNode("div", { class: "heading" }, "OBSTETRIC DATA", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, {
                          size: "2",
                          class: "contentTitle"
                        }, {
                          default: withCtx(() => [..._cache[0] || (_cache[0] = [
                            createTextVNode("GRAVIDA", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, {
                          size: "3",
                          class: "contentTitle"
                        }, {
                          default: withCtx(() => [..._cache[1] || (_cache[1] = [
                            createTextVNode("ABORTIONS/MISCARRIAGES", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode("STILLBIRTHS", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[3] || (_cache[3] = [
                            createTextVNode("LIVE BIRTHS", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, {
                          size: "2",
                          class: "contentTitle"
                        }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode("PARITY", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { size: "2" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Gravida), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { size: "3" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy["Abortions/Miscarriages"]), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Stillbirths), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.LiveBirths), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { size: "2" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Parity), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _cache[6] || (_cache[6] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : _ctx.activeProgram.program_id !== 32 ? (openBlock(), createElementBlock("div", _hoisted_5$2, "OBSTETRIC DATA IS EMPTY")) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourObstetricData = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-310b789d"]]);

const pastObstreticValidationShema$2 = create$3().shape({
  Gravida: create$5().typeError("Gravida can only be number").min(0).max(30),
  "Abortions/Miscarriages": create$5().typeError("Abortions/Miscarriages can only be number").min(0),
  Stillbirths: create$5().typeError("Stillbirths can only be number").min(0)
});
const useObstreticHistoryStore = defineStore("obstreticHistoryStore", {
  state: () => ({
    prevPregnancies: [
      {
        isFinishBtn: false,
        sectionHeader: "",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Gravida*",
                  value: "",
                  name: "Gravida",
                  icon: icons.editPen,
                  required: true,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Abortions/Miscarriages*",
                  value: "",
                  icon: icons.editPen,
                  name: "Abortions/Miscarriages",
                  required: true,
                  disabled: false,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                },
                {
                  class: "bold",
                  inputHeader: "Stillbirths*",
                  value: "",
                  name: "Stillbirths",
                  disabled: false,
                  required: true,
                  valueType: "text",
                  icon: icons.editPen,
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Live births",
                  value: "",
                  disabled: true,
                  name: "LiveBirths",
                  required: true,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                },
                {
                  class: "bold",
                  inputHeader: "Parity",
                  disabled: true,
                  value: "",
                  name: "Parity",
                  valueType: "text",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      },
      {
        selectedData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Was last live birth preterm?",
            selectedValue: "",
            name: "Was last live birth preterm?",
            displayNone: false
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              colSize: "2.5"
            },
            {
              name: "No",
              value: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Was last live birth full term (8 to 34 weeks)?",
            selectedValue: "",
            name: "Last live birth preterm was full term",
            displayNone: false
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              colSize: "2.5"
            },
            {
              name: "No",
              value: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        selectedData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            class: "bold",
            title: "Last live birth had congenital abnormalities??",
            selectedValue: "",
            name: "Last live birth had congenital abnormalities",
            displayNone: false
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              colSize: "2.5"
            },
            {
              name: "No",
              value: "No",
              colSize: "2.5"
            }
          ]
        }
      },
      {
        selectdData: [],
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            class: "bold",
            title: "Did the woman have any of the complications during the past pregnancies?",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Asphyxia",
              value: "Asphyxia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Pre-eclampsia",
              value: "pre-eclampsia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Eclampsia",
              value: "eclampsia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Puerperal Sepsis",
              value: "puerperal sepsis",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Baby died within 24hrs of birth",
              value: "baby died within 24hrs of birth",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Convulsions",
              value: "convulsions",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Gestational diabetes mellitus",
              value: "gestational diabetes mellitus",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Heavy bleeding",
              value: "heavy bleeding",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Macrosomia",
              value: "macrosomia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Perineal tear (3rd or 4th degree)",
              value: "perineal tear (3rd or 4th degree)",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "None",
              value: "none",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  displayNone: true,
                  inputHeader: "specify",
                  unit: "",
                  icon: icons.editPen,
                  value: "",
                  name: "Other notes",
                  valueType: "text",
                  required: true,
                  eventType: "input",
                  inputWidth: "85%"
                }
              ]
            }
          ]
        }
      }
    ],
    abnormalities: [
      {
        selectdData: [],
        isFinishBtn: false,
        classDash: "dashed_bottom_border _padding",
        radioBtnContent: {
          header: {
            title: "Last live birth had congenital abnormalities?",
            selectedValue: ""
          },
          data: [
            {
              name: "Yes",
              value: "Yes",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "No",
              value: "No",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            },
            {
              name: "Dont know",
              value: "Dont know",
              labelPlacement: "start",
              colSize: "7",
              justify: "space-between"
            }
          ]
        }
      }
    ],
    preterm: [],
    modeOfDelivery: [],
    Complications: []
  }),
  actions: {
    setPrevPregnancies(data) {
      this.prevPregnancies = data;
    },
    setPreterm(data) {
      this.preterm = data;
    },
    setAbnormalities(data) {
      this.abnormalities = data;
    },
    setModeOfDelivery(number) {
      this.modeOfDelivery = [];
      for (let i = 0; i < number; i++) {
        const inputs = getRadioButton(i);
        this.modeOfDelivery.push(inputs[0]);
        this.modeOfDelivery.push(inputs[1]);
      }
    },
    checkChanges() {
      const number = this.modeOfDelivery.length / 2;
      for (let i = 0; i < number; i++) {
        const value = getRadioSelectedValue(this.modeOfDelivery, `Mode of delivery ${i}`);
        if (value == "Other") {
          modifyFieldValue(this.modeOfDelivery, `Specify ${i}`, "displayNone", false);
        } else {
          modifyFieldValue(this.modeOfDelivery, `Specify ${i}`, "displayNone", true);
        }
      }
    },
    setComplications(data) {
      this.Complications = data;
    },
    async validate() {
      const obstetricHistory = extractArrayOfNameValue(this.prevPregnancies);
      const obstetricHistoryValid = await validateStore(this.prevPregnancies, pastObstreticValidationShema$2, obstetricHistory);
      return obstetricHistoryValid;
    }
  }
  //
});
const getRadioButton = (number) => {
  return [
    {
      sideColSide: 1,
      selectdData: [],
      isFinishBtn: false,
      classDash: "dashed_bottom_border",
      radioBtnContent: {
        header: {
          title: `Specify mode of delivery (child ${number + 1})`,
          selectedValue: "",
          name: `Mode of delivery ${number}`,
          class: "bold"
          //displayNext:"Other"
        },
        data: [
          {
            name: "Caesarean section",
            value: "caesarean section",
            colSize: "4.1"
          },
          {
            name: "Vacuum extraction delivery",
            value: "vacuum extraction delivery",
            colSize: "4.1"
          },
          {
            name: "Breech delivery",
            value: "breech delivery",
            colSize: "4.1"
          },
          {
            name: "SVD",
            value: "svd",
            colSize: "4.1"
          },
          {
            name: "Other",
            value: "Other",
            colSize: "4.1"
          }
        ]
      }
    },
    {
      //childName:`cesareanSec ${number}`,
      data: {
        rowData: [
          {
            colData: [
              {
                displayNone: true,
                inputHeader: `specify  for child ${number + 1}`,
                icon: icons.editPen,
                value: "",
                name: `Specify ${number}`,
                eventType: "input",
                inputWidth: "82%",
                required: true
              }
            ]
          }
        ]
      }
    }
  ];
};

const pastObstreticValidationShema$1 = create$3().shape({
  Gravida: create$5().typeError("Gravida can only be number").min(0).max(30),
  "Abortions/Miscarriages": create$5().typeError("Abortions/Miscarriages can only be number").min(0),
  Stillbirths: create$5().typeError("Stillbirths can only be number").min(0)
});
const useLabourObstreticHistoryStore = defineStore("labourObstreticHistoryStore", {
  state: () => ({
    prevPregnancies: [
      {
        isFinishBtn: false,
        sectionHeader: "",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Gravida",
                  value: "",
                  name: "Gravida",
                  icon: icons.editPen,
                  required: true,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Abortions/Miscarriages",
                  value: "",
                  icon: icons.editPen,
                  name: "Abortions/Miscarriages",
                  required: true,
                  disabled: false,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                },
                {
                  class: "bold",
                  inputHeader: "Stillbirths",
                  value: "",
                  name: "Stillbirths",
                  disabled: false,
                  required: true,
                  valueType: "text",
                  icon: icons.editPen,
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        classDash: "dashed_bottom_border _padding",
        data: {
          rowData: [
            {
              colData: [
                {
                  class: "bold",
                  inputHeader: "Live births",
                  value: "",
                  disabled: true,
                  name: "LiveBirths",
                  required: true,
                  valueType: "text",
                  eventType: "input",
                  alertsErrorMassage: ""
                },
                {
                  class: "bold",
                  inputHeader: "Parity",
                  disabled: true,
                  value: "",
                  name: "Parity",
                  valueType: "text",
                  required: true,
                  eventType: "input",
                  alertsErrorMassage: ""
                }
              ]
            }
          ]
        },
        alerts: [
          {
            backgroundColor: "",
            status: "",
            icon: "",
            textColor: "",
            value: "",
            name: "",
            index: ""
          }
        ]
      }
    ],
    preterm: [],
    modeOfDelivery: [],
    Complications: []
  }),
  actions: {
    setPrevPregnancies(data) {
      this.prevPregnancies = data;
    },
    setPreterm(data) {
      this.preterm = data;
    },
    // setModeOfDelivery(number: number) {
    //     this.modeOfDelivery = [];
    //     for (let i = 0; i < number; i++) {
    //         const inputs = getRadioButton(i);
    //         this.modeOfDelivery.push(inputs[0]);
    //         this.modeOfDelivery.push(inputs[1]);
    //     }
    // },
    // checkChanges() {
    //     const number = this.modeOfDelivery.length / 2;
    //     for (let i = 0; i < number; i++) {
    //         const value = getRadioSelectedValue(this.modeOfDelivery, `Mode of delivery ${i}`);
    //         if (value == "Other") {
    //             modifyFieldValue(this.modeOfDelivery, `Specify ${i}`, "displayNone", false);
    //         } else {
    //             modifyFieldValue(this.modeOfDelivery, `Specify ${i}`, "displayNone", true);
    //         }
    //     }
    // },
    setComplications(data) {
      this.Complications = data;
    },
    async validate() {
      const obstetricHistory = extractArrayOfNameValue(this.prevPregnancies);
      const obstetricHistoryValid = await validateStore(this.prevPregnancies, pastObstreticValidationShema$1, obstetricHistory);
      return obstetricHistoryValid;
    }
  }
  //
});

const _sfc_main$3 = defineComponent({
  name: "History",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup,
    LabourObstetricData
  },
  data() {
    return {
      modeOfDelieveryRef: {},
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      prevPregnanciesInstance: {},
      modeOfDeliveryInstance: {},
      currentSection: 0,
      inputField: "",
      alertMessage: ""
    };
  },
  computed: {
    ...mapState(useLabourObstreticHistoryStore, ["prevPregnancies"]),
    ...mapState(useLabourObstreticHistoryStore, ["preterm"]),
    ...mapState(useLabourObstreticHistoryStore, ["modeOfDelivery"]),
    ...mapState(useLabourObstreticHistoryStore, ["Complications"]),
    Stillbirths() {
      return getFieldValue(this.prevPregnancies, "Stillbirths", "value");
    },
    Gravida() {
      return getFieldValue(this.prevPregnancies, "Gravida", "value");
    },
    LiveBirths() {
      return getFieldValue(this.prevPregnancies, "LiveBirths", "value");
    },
    Parity() {
      return getFieldValue(this.prevPregnancies, "Parity", "value");
    },
    "Abortions/Miscarriages"() {
      return getFieldValue(this.prevPregnancies, "Abortions/Miscarriages", "value");
    }
  },
  created() {
    this.modeOfDelieveryRef = { ...this.modeOfDelivery[0], ...this.modeOfDelivery[1] };
  },
  mounted() {
    this.prevPregnanciesInstance = useObstreticHistoryStore();
    this.handleOther();
    this.handleDynamic();
    this.handleGravida(event);
    this.validaterowData({});
  },
  watch: {
    LiveBirths: {
      handler(val) {
        if (val == 0 || !val) {
          this.prevPregnanciesInstance.setModeOfDelivery(0);
        }
      }
    },
    prevPregnancies: {
      handler(val) {
        if (val && val[2].data.rowData[0].colData[0].value) {
          const liveBirths = parseInt(val[2].data.rowData[0].colData[0].value);
          this.prevPregnanciesInstance.setModeOfDelivery(liveBirths);
        }
        this.handleGravida(val);
        this.handleOther();
      },
      deep: true
    },
    modeOfDelivery: {
      handler() {
        this.handleDynamic();
        this.prevPregnanciesInstance.checkChanges();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleObstreticValidation(event2) {
      YupValidateField(this.prevPregnancies, pastObstreticValidationShema$2, event2.name, event2.value);
    },
    handleOther() {
      if (getCheckboxSelectedValue(this.prevPregnancies, "Other")?.value == "other") {
        modifyFieldValue(this.prevPregnancies, "Other notes", "displayNone", false);
      } else {
        modifyFieldValue(this.prevPregnancies, "Other notes", "displayNone", true);
      }
      const checkBoxes = [
        "Asphyxia",
        "Does not know",
        "Pre-eclampsia",
        "Eclampsia",
        "Puerperal Sepsis",
        "Baby died within 24hrs of birth",
        "Convulsions",
        "Forceps",
        "Gestational diabetes mellitus",
        "Heavy bleeding",
        "Macrosomia",
        "Perineal tear (3rd or 4th degree)",
        "Other"
      ];
      if (getCheckboxSelectedValue(this.prevPregnancies, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.prevPregnancies, checkbox, "checked", false);
          modifyCheckboxValue(this.prevPregnancies, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.prevPregnancies, checkbox, "disabled", false);
        });
      }
    },
    handleDynamic() {
      if (getRadioSelectedValue(this.modeOfDelivery, "Mode of delivery") == "caesarean section") {
        modifyFieldValue(this.modeOfDelivery, "Specify", "displayNone", false);
      } else {
        modifyFieldValue(this.modeOfDelivery, "Specify", "displayNone", true);
      }
    },
    handleAlert(e) {
      if (dynamicValue(this.modeOfDelivery, "Mode of delivery", e.id) == "caesarean section") {
        modifyDynamicFieldValue(e.id, this.modeOfDelivery, "Specify", "displayNone", false);
      } else {
        modifyDynamicFieldValue(e.id, this.modeOfDelivery, "Specify", "displayNone", true);
      }
    },
    validationRules(event2) {
      return validateField$3(this.prevPregnancies, event2.name, this[event2.name]);
    },
    //Handling input data on Profile-Past Obstetric history
    async handleInputData(event2) {
      this.validaterowData(event2);
      this.handleObstreticValidation(event2);
      this.calculateParity(event2);
      this.calculateLiveBirths(event2);
    },
    // Validations
    validaterowData(event2) {
    },
    calculateLiveBirths(event2) {
      if (event2.name === "Parity" || event2.name === "Stillbirths") {
        const stillbirthValue = parseInt(getFieldValue(this.prevPregnancies, "Stillbirths", "value"));
        const parityValue = parseInt(getFieldValue(this.prevPregnancies, "Parity", "value"));
        if (!isNaN(stillbirthValue) && !isNaN(parityValue)) {
          const liveBirthValue = parityValue - stillbirthValue;
          modifyFieldValue(this.prevPregnancies, "LiveBirths", "value", liveBirthValue);
        } else {
          modifyFieldValue(this.prevPregnancies, "LiveBirths", "value", null);
        }
      }
    },
    // Calculating parity.
    calculateParity(event2) {
      if (event2.name === "Gravida" || event2.name === "Abortions/Miscarriages") {
        const gravidaValue = parseInt(getFieldValue(this.prevPregnancies, "Gravida", "value"));
        const abortionsValue = parseInt(getFieldValue(this.prevPregnancies, "Abortions/Miscarriages", "value"));
        if (!isNaN(gravidaValue) && !isNaN(abortionsValue)) {
          const parityValue = gravidaValue - abortionsValue - 1;
          modifyFieldValue(this.prevPregnancies, "Parity", "value", parityValue);
        } else {
          modifyFieldValue(this.prevPregnancies, "Parity", "value", null);
        }
      }
    },
    handleGravida(event2) {
      const gravida = getFieldValue(this.prevPregnancies, "Gravida", "value");
      const alertMessage = "First pregnancy, take note";
      const existingAlert = this.prevPregnancies[0].alerts.findIndex((alert) => alert.value === alertMessage);
      if (gravida === null || gravida === "") {
        modifyFieldValue(this.prevPregnancies, "Abortions/Miscarriages", "value", "");
        modifyFieldValue(this.prevPregnancies, "Abortions/Miscarriages", "disabled", false);
        modifyFieldValue(this.prevPregnancies, "Stillbirths", "value", "");
        modifyFieldValue(this.prevPregnancies, "Stillbirths", "disabled", false);
        modifyFieldValue(this.prevPregnancies, "LiveBirths", "value", "");
        modifyFieldValue(this.prevPregnancies, "LiveBirths", "disabled", false);
        modifyFieldValue(this.prevPregnancies, "Parity", "value", "");
        modifyFieldValue(this.prevPregnancies, "Parity", "disabled", false);
        if (existingAlert !== -1) {
          this.prevPregnancies[0].alerts.splice(existingAlert, 1);
        }
      } else if (gravida == 1) {
        modifyRadioValue(this.prevPregnancies, "Was last live birth preterm?", "displayNone", true);
        modifyRadioValue(this.prevPregnancies, "Last live birth had congenital abnormalities", "displayNone", true);
        modifyRadioValue(this.prevPregnancies, "Last live birth preterm was full term", "displayNone", true);
        modifyCheckboxHeader(this.prevPregnancies, "past pregnancies complications", "displayNone", true);
        modifyFieldValue(this.prevPregnancies, "Abortions/Miscarriages", "value", "");
        modifyFieldValue(this.prevPregnancies, "Abortions/Miscarriages", "disabled", true);
        modifyFieldValue(this.prevPregnancies, "Stillbirths", "value", "");
        modifyFieldValue(this.prevPregnancies, "Stillbirths", "disabled", true);
        modifyFieldValue(this.prevPregnancies, "LiveBirths", "value", "");
        modifyFieldValue(this.prevPregnancies, "LiveBirths", "disabled", true);
        modifyFieldValue(this.prevPregnancies, "Parity", "value", "");
        modifyFieldValue(this.prevPregnancies, "Parity", "disabled", true);
        if (existingAlert === -1) {
          this.prevPregnancies[0].alerts.push({
            backgroundColor: "#FFD700",
            status: "info",
            icon: "info-circle",
            textColor: "#000000",
            value: alertMessage,
            name: "LiveBirths"
          });
        }
      } else {
        modifyRadioValue(this.prevPregnancies, "Was last live birth preterm?", "displayNone", false);
        modifyRadioValue(this.prevPregnancies, "Last live birth preterm was full term", "displayNone", false);
        modifyRadioValue(this.prevPregnancies, "Last live birth had congenital abnormalities", "displayNone", false);
        modifyCheckboxHeader(this.prevPregnancies, "past pregnancies complications", "displayNone", false);
        modifyFieldValue(this.prevPregnancies, "Abortions/Miscarriages", "disabled", false);
        modifyFieldValue(this.prevPregnancies, "Stillbirths", "disabled", false);
        modifyFieldValue(this.prevPregnancies, "LiveBirths", "disabled", false);
        modifyFieldValue(this.prevPregnancies, "Parity", "disabled", false);
        if (existingAlert !== -1) {
          this.prevPregnancies[0].alerts.splice(existingAlert, 1);
        }
      }
    }
  }
});

const _hoisted_1$3 = { class: "container" };
const _hoisted_2$3 = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_LabourObstetricData = resolveComponent("LabourObstetricData");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(_component_ion_accordion_group, {
      ref: "accordionGroup",
      class: "previousView ion-margin-bottom"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_accordion, {
          value: "first",
          "toggle-icon-slot": "start",
          class: "custom_card"
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_item, {
              slot: "header",
              color: "light"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_label, { class: "previousLabel" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Obstetric History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$3, [
              createVNode(_component_LabourObstetricData)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512),
    createVNode(_component_ion_card, { class: "section" }, {
      default: withCtx(() => [
        createVNode(_component_ion_card_content, null, {
          default: withCtx(() => [
            createVNode(_component_basic_form, {
              contentData: _ctx.prevPregnancies,
              "onUpdate:selected": _ctx.handleInputData,
              "onUpdate:inputValue": _ctx.handleInputData
            }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue"]),
            createVNode(_component_basic_form, {
              contentData: _ctx.modeOfDelivery,
              "onUpdate:inputValue": _ctx.handleAlert
            }, null, 8, ["contentData", "onUpdate:inputValue"]),
            createVNode(_component_basic_form, { contentData: _ctx.preterm }, null, 8, ["contentData"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourObstetricHistory = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-84730752"]]);

const _sfc_main$2 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      immunisation: []
    };
  },
  watch: {
    demographics: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
    this.handleValueCoded();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient", "patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async handleValueCoded() {
      this.getValueCoded();
    },
    async getValueCoded() {
      try {
        const data = await ObservationService.getAllValueCoded(this.patient?.patientID || "", "past pregnancies complications");
        console.log("Fetched past pregnancies complications:", data);
        this.immunisation = data;
      } catch (error) {
        console.error("Error fetching past pregnancies complications:", error);
      }
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setANCProfileEncounters(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      console.log("+++++This is pulling data++++", observations);
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1$2 = { class: "visitContent" };
const _hoisted_2$2 = { class: "visitData" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { style: { "max-width": "1000px" } };
const _hoisted_5$1 = {
  key: 1,
  class: "noData"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$2, [
              _ctx.immunisation && _ctx.immunisation.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "heading" }, "PREGNANCY COMPLICATIONS", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.immunisation, (condition, index) => {
                      return openBlock(), createBlock(_component_ion_row, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_col, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(condition), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5$1, "COMPLICATIONS DATA IS EMPTY"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourComplicationsHistory = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-c36ab6c5"]]);

const pastObstreticValidationShema = create$3().shape({
  Gravida: create$5().typeError("Gravida can only be number").min(0).max(30),
  "Abortions/Miscarriages": create$5().typeError("Abortions/Miscarriages can only be number").min(0),
  Stillbirths: create$5().typeError("Stillbirths can only be number").min(0)
});
const useLabourCoplicationsStore = defineStore("labourCoplicationsStore", {
  state: () => ({
    labourPrevPregnancies: [
      {
        selectdData: [],
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            class: "bold",
            title: "Did the woman have any of the complications during the past pregnancies?",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Asphyxia",
              value: "Asphyxia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Pre-eclampsia",
              value: "pre-eclampsia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        selectdData: [],
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Eclampsia",
              value: "eclampsia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Puerperal Sepsis",
              value: "puerperal sepsis",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Baby died within 24hrs of birth",
              value: "baby died within 24hrs of birth",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Convulsions",
              value: "convulsions",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Gestational diabetes mellitus",
              value: "gestational diabetes mellitus",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Heavy bleeding",
              value: "heavy bleeding",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "Macrosomia",
              value: "macrosomia",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Perineal tear (3rd or 4th degree)",
              value: "perineal tear (3rd or 4th degree)",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        classDash: "dashed_bottom_border",
        checkboxBtnContent: {
          header: {
            title: "",
            selectedValue: "",
            name: "past pregnancies complications",
            displayNone: false
          },
          data: [
            {
              name: "None",
              value: "none",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            },
            {
              name: "Other",
              value: "other",
              checked: false,
              labelPlacement: "start",
              colSize: "6",
              justify: "space-between"
            }
          ]
        }
      },
      {
        isFinishBtn: false,
        sectionHeader: "",
        classDash: "dashed_bottom_border",
        data: {
          rowData: [
            {
              colData: [
                {
                  displayNone: true,
                  inputHeader: "specify",
                  unit: "",
                  icon: icons.editPen,
                  value: "",
                  name: "Other notes",
                  valueType: "text",
                  required: true,
                  eventType: "input",
                  inputWidth: "85%"
                }
              ]
            }
          ]
        }
      }
    ],
    preterm: [],
    modeOfDelivery: [],
    Complications: []
  }),
  actions: {
    setPrevPregnancies(data) {
      this.labourPrevPregnancies = data;
    },
    async validate() {
      const obstetricHistory = extractArrayOfNameValue(this.labourPrevPregnancies);
      const obstetricHistoryValid = await validateStore(this.labourPrevPregnancies, pastObstreticValidationShema, obstetricHistory);
      return obstetricHistoryValid;
    }
  }
  //
});

const _sfc_main$1 = defineComponent({
  name: "History",
  components: {
    BasicCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonInput,
    BasicInputField,
    BasicForm,
    IonRadio,
    IonRadioGroup,
    LabourMedications,
    LabourComplicationsHistory
  },
  data() {
    return {
      modeOfDelieveryRef: {},
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      prevPregnanciesInstance: {},
      modeOfDeliveryInstance: {},
      currentSection: 0,
      inputField: "",
      alertMessage: ""
    };
  },
  computed: {
    ...mapState(useLabourCoplicationsStore, ["labourPrevPregnancies"])
  },
  mounted() {
    this.prevPregnanciesInstance = useObstreticHistoryStore();
    this.handleOther();
    this.validaterowData({});
  },
  watch: {
    LiveBirths: {
      handler(val) {
        if (val == 0 || !val) {
          this.prevPregnanciesInstance.setModeOfDelivery(0);
        }
      }
    },
    prevPregnancies: {
      handler(val) {
        if (val && val[2].data.rowData[0].colData[0].value) {
          const liveBirths = parseInt(val[2].data.rowData[0].colData[0].value);
          this.prevPregnanciesInstance.setModeOfDelivery(liveBirths);
        }
        this.handleOther();
      },
      deep: true
    },
    modeOfDelivery: {
      handler() {
        this.prevPregnanciesInstance.checkChanges();
      },
      deep: true
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    async handleObstreticValidation(event) {
      YupValidateField(this.labourPrevPregnancies, pastObstreticValidationShema$2, event.name, event.value);
    },
    handleOther() {
      if (getCheckboxSelectedValue(this.labourPrevPregnancies, "Other")?.value == "other") {
        modifyFieldValue(this.labourPrevPregnancies, "Other notes", "displayNone", false);
      } else {
        modifyFieldValue(this.labourPrevPregnancies, "Other notes", "displayNone", true);
      }
      const checkBoxes = [
        "Asphyxia",
        "Does not know",
        "Pre-eclampsia",
        "Eclampsia",
        "Puerperal Sepsis",
        "Baby died within 24hrs of birth",
        "Convulsions",
        "Forceps",
        "Gestational diabetes mellitus",
        "Heavy bleeding",
        "Macrosomia",
        "Perineal tear (3rd or 4th degree)",
        "Other"
      ];
      if (getCheckboxSelectedValue(this.labourPrevPregnancies, "None")?.checked) {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourPrevPregnancies, checkbox, "checked", false);
          modifyCheckboxValue(this.labourPrevPregnancies, checkbox, "disabled", true);
        });
      } else {
        checkBoxes.forEach((checkbox) => {
          modifyCheckboxValue(this.labourPrevPregnancies, checkbox, "disabled", false);
        });
      }
    },
    //Handling input data on Profile-Past Obstetric history
    async handleInputData(event) {
      this.validaterowData(event);
      this.handleObstreticValidation(event);
    },
    // Validations
    validaterowData(event) {
    }
  }
});

const _hoisted_1$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2$1 = { class: "container" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_LabourComplicationsHistory = resolveComponent("LabourComplicationsHistory");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      createVNode(_component_ion_accordion_group, {
        ref: "accordionGroup",
        class: "previousView ion-margin-bottom"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, {
            value: "first",
            "toggle-icon-slot": "start",
            class: "custom_card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, {
                slot: "header",
                color: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, { class: "previousLabel" }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Pregnancy Complications History", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(_component_LabourComplicationsHistory)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512),
      createBaseVNode("div", _hoisted_2$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(_component_basic_form, {
                  contentData: _ctx.labourPrevPregnancies,
                  "onUpdate:selected": _ctx.handleInputData,
                  "onUpdate:inputValue": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:selected", "onUpdate:inputValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
const LabourComplications = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-2e8fd7b2"]]);

const _sfc_main = defineComponent({
  mixins: [_sfc_main$V],
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
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
    VitalSigns,
    Investigations,
    IonModal,
    // IntimatePartner,
    DynamicButton,
    ImmunizationServices,
    ChangeStatus,
    ImmunizationNextAppointment,
    DischargeWoman,
    PNCEnd,
    BabyStatus,
    PostnatalWardMonitoring,
    DeliveryDetails,
    HIVStatusAndTreatment,
    ObstetricDetails,
    VisitForMother,
    VisitForBaby,
    Labour,
    QuickCheck: _sfc_main$U,
    PhysicalExamination: _sfc_main$T,
    PelvicAssessment: _sfc_main$S,
    PatientReferral,
    FirstVaginalExamination: _sfc_main$R,
    SecondStageDelivery,
    ThirdStageDelivery,
    end,
    OtherExams,
    LabourVitals,
    ImmidiatePostnatalChecksForChild,
    ImmidiatePostnatalChecksForMother,
    LabourWomanBehaviour,
    LabourPastSurgeries,
    LabourChronicHealthConditions,
    LabourVaccineHistory,
    LabourMedications,
    LabourObstetricHistory,
    LabourAllergies,
    LabourComplications
  },
  data() {
    return {
      isOpen: false,
      iconsContent: icons,
      currentOpenStepper: this.openStepper,
      stepRefs: /* @__PURE__ */ new Map()
    };
  },
  props: {
    wizardData: {
      default: []
    },
    StepperData: {
      default: []
    },
    stepperTitle: {
      type: String,
      default: ""
    },
    openStepper: {
      type: String,
      default: "1"
    },
    backBtn: {
      type: String,
      default: "Back to profile"
    },
    backUrl: {
      type: String,
      default: ""
    },
    getSaveFunction: {
      type: Function,
      required: true
    },
    hasPatientsWaitingList: {
      type: Boolean,
      default: false
    },
    specialButtonLabel: {
      type: String,
      required: false,
      default: ""
    },
    specialButtonFn: {
      type: Function,
      required: false,
      default: null
    },
    userRole: {
      type: String,
      required: false
    }
  },
  setup() {
    return { chevronBackOutline, checkmark };
  },
  methods: {
    setStepRef(el, index) {
      if (el) {
        this.stepRefs.set(index, el);
      }
    },
    chevronBack() {
      return chevronBack;
    },
    chevronForward() {
      return chevronForward;
    },
    accordionGroupChange(ev) {
      const event = ev.detail;
      if (!event) {
        this.wizardData.forEach((item) => {
          if (event.value === item.number) {
            item.class = "open_step common_step";
            item.checked = true;
          } else {
            item.class = "common_step";
            item.checked = false;
          }
        });
        this.$emit("updateStatus", event);
        this.currentOpenStepper = event.value;
      }
    },
    openBackController() {
      if (this.backUrl) {
        this.$router.push(this.backUrl);
      } else {
        createModal(SaveProgressModal);
      }
    },
    async nextAccordion(currentIndex) {
      const validationErrors = await this.validateCurrentStep(currentIndex);
      if (validationErrors) {
        const errorMessages = Object.values(validationErrors).join(", ");
        toastWarning(`Please fix the following errors: ${errorMessages}`);
        return;
      }
      const saveFunction = this.getSaveFunction(currentIndex);
      if (saveFunction && typeof saveFunction === "function") {
        await saveFunction();
      }
      const nextIndex = currentIndex + 1;
      if (nextIndex < this.StepperData.length) {
        this.currentOpenStepper = this.StepperData[nextIndex].value;
        this.$emit("updateStatus", { value: this.StepperData[nextIndex].value });
      }
    },
    async validateCurrentStep(currentIndex) {
      const componentInstance = this.stepRefs.get(currentIndex);
      if (!componentInstance) {
        console.warn(`No component instance found for step ${currentIndex}`);
        return null;
      }
      if (typeof componentInstance.validateForm === "function") {
        const errors = componentInstance.validateForm();
        return errors;
      }
      return null;
    },
    previousAccordion(currentIndex) {
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        this.currentOpenStepper = this.StepperData[prevIndex].value;
        this.$emit("updateStatus", { value: this.StepperData[prevIndex].value });
      }
    }
  }
});

const _hoisted_1 = { class: "wizard_title" };
const _hoisted_2 = {
  id: "wizard_verticle",
  class: "form_wizard wizard_verticle"
};
const _hoisted_3 = { class: "list-unstyled wizard_steps anchor" };
const _hoisted_4 = {
  class: "done",
  isdone: "1",
  rel: "1"
};
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "wizard_text" };
const _hoisted_7 = { class: "back_profile" };
const _hoisted_8 = { class: "accordion_group" };
const _hoisted_9 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_10 = { class: "button-row" };
const _hoisted_11 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      createVNode(_component_ion_col, {
        "size-md": "4",
        "size-xl": "2.5",
        "size-sm": "0",
        "size-lg": "4",
        "offset-sm": "0",
        "offset-md": "0.4",
        "offset-xl": "0.8",
        class: "displayNoneMobile"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card, { class: "wizard_card" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("strong", null, toDisplayString(_ctx.stepperTitle), 1)
              ]),
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("ul", _hoisted_3, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.wizardData, (item, index) => {
                        return openBlock(), createElementBlock("li", {
                          key: index,
                          class: normalizeClass(item.last_step)
                        }, [
                          createBaseVNode("a", _hoisted_4, [
                            createBaseVNode("span", {
                              class: normalizeClass(item.class)
                            }, [
                              item.checked ? (openBlock(), createBlock(_component_ion_icon, {
                                key: 0,
                                icon: _ctx.checkmark,
                                class: "checked_step"
                              }, null, 8, ["icon"])) : createCommentVNode("", true),
                              !item.checked ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(item.number), 1)) : createCommentVNode("", true),
                              createBaseVNode("span", _hoisted_6, toDisplayString(item.title), 1)
                            ], 2)
                          ])
                        ], 2);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_col, {
        "size-sm": "12",
        "size-xl": "7",
        "size-md": "7.2",
        "size-lg": "7",
        "offset-sm": "0",
        "offset-md": "0.4",
        "offset-xl": "0.8"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_DynamicButton, {
              name: _ctx.backBtn,
              iconSlot: "start",
              fill: "clear",
              icon: _ctx.chevronBackOutline,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openBackController())
            }, null, 8, ["name", "icon"])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_ion_accordion_group, {
              onIonChange: _cache[2] || (_cache[2] = ($event) => _ctx.accordionGroupChange($event)),
              value: _ctx.currentOpenStepper
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.StepperData, (item, index) => {
                  return withDirectives((openBlock(), createBlock(_component_ion_accordion, {
                    key: index,
                    value: item.value
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_item, { slot: "header" }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createBaseVNode("div", _hoisted_9, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                          ref_for: true,
                          ref: (el) => _ctx.setStepRef(el, index)
                        }, null, 512)),
                        createBaseVNode("div", _hoisted_10, [
                          index > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
                            createVNode(_component_ion_button, {
                              class: "previous-button",
                              onClick: ($event) => _ctx.previousAccordion(index)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_icon, {
                                  icon: _ctx.chevronBack(),
                                  slot: "start"
                                }, null, 8, ["icon"]),
                                _cache[3] || (_cache[3] = createTextVNode(" Previous ", -1))
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", null, [
                            createVNode(_component_ion_button, {
                              class: "next-button",
                              onClick: ($event) => _ctx.nextAccordion(index)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_icon, {
                                  icon: index < _ctx.StepperData.length - 1 ? _ctx.chevronForward() : _ctx.checkmark,
                                  slot: "start"
                                }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(index < _ctx.StepperData.length - 1 ? "Next" : "Finish"), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          index === _ctx.StepperData.length - 1 && _ctx.specialButtonLabel && _ctx.specialButtonFn && (_ctx.userRole === "Clinician" || _ctx.userRole === "Superuser") ? (openBlock(), createBlock(_component_ion_button, {
                            key: 1,
                            class: "special-button",
                            onClick: _cache[1] || (_cache[1] = (event) => _ctx.specialButtonFn(event))
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: index < _ctx.StepperData.length - 1 ? _ctx.chevronForward() : _ctx.checkmark,
                                slot: "start"
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(_ctx.specialButtonLabel), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value"])), [
                    [vShow, !(_ctx.hasPatientsWaitingList && index >= 2)]
                  ]);
                }), 128))
              ]),
              _: 1
            }, 8, ["value"]),
            _cache[4] || (_cache[4] = createBaseVNode("hr", { style: { "background": "rgba(0, 0, 0, 0.13)" } }, null, -1))
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Stepper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57cadd2c"]]);

export { usePostnatalWardStayStore as A, useBabyStatusStore as B, useVisitForBabyStore as C, useVisitForMotherStore as D, useDischargeWomanStore as E, usePNCEndStore as F, LabourObstetricHistory as L, Stepper as S, LabourMedications as a, LabourVaccineHistory as b, LabourChronicHealthConditions as c, LabourPastSurgeries as d, LabourAllergies as e, LabourWomanBehaviour as f, useLabourMedicationStore as g, useLabourVaccineStore as h, useLabourChronicHealthConditionsStore as i, useLabourPastSurgeriesStore as j, useLabourAllergiesStore as k, useLabourWomanBehaviourStore as l, useLabourCoplicationsStore as m, useOtherExamsStore as n, useLabourVitalsStore as o, useLabourReferralStore as p, useSecondStageOfLabourStore as q, useThirdStageOfLabourStore as r, useImmediatePostnatalChecksForMotherStore as s, useImmediatePostnatalChecksForChildStore as t, useLabourObstreticHistoryStore as u, validateField$3 as v, end as w, useHIVStatusAndTreatmentStore as x, useDeliveryDetailsStore as y, useObstetricDetailsStore as z };
