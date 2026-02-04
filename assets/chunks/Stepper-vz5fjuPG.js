import { s as defineComponent, a6 as IonInput, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, p as dayjs, aJ as menuController, br as pulseOutline, bc as checkmark, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, a5 as createTextVNode, C as createBaseVNode, J as Fragment, ak as IonDatetime, D as toDisplayString, al as IonPopover, O as createBlock, ah as IonRadioGroup, ai as IonRadio, bM as IonSelectOption, bN as IonSelect, dE as IonToggle, ew as create$3, ex as create$5, ey as create$6, K as modalController, H as createCommentVNode, F as unref, aH as IonAccordion, a7 as IonLabel, aI as IonAccordionGroup, bd as IonCardContent, bK as IonCard, f as ref, c as computed, bF as IonModal, ba as IonCardTitle, cD as IonCardSubtitle, bb as IonCardHeader, N as IonButton, bu as IonPage, cu as IonMenuButton, bm as chevronForward, bl as chevronBack, bX as chevronBackOutline, R as renderList, a4 as normalizeClass, S as withDirectives, c1 as resolveDynamicComponent, T as vShow } from './vendor-BO7XRaEo.js';
import { _ as _sfc_main$u } from './SetUserRole.vue_vue_type_script_lang-BAgYYgQS.js';
import { y as StandardValidations, P as PatientService, bN as modifyAlertsValue, bO as iconBloodPressure, b9 as BMIService, H as HisDate, K as ObservationService, aX as modifyCheckboxValue, a1 as modifyFieldValue, u as useDemographicsStore, l as PreviousVitals, B as BasicInputField, a2 as getFieldValue, bP as getOfflineFirstObsValue, aT as modifyCheckboxInputField, b1 as useVitalsStore, n as icons, _ as _export_sfc, bG as useNextAppointmentStore, S as Service, A as AppointmentService, F as DynamicButton, a_ as List, ba as SelectionPopover, a4 as popoverConfirmation, aq as ConceptService, O as OrderService, bm as useInvestigationStore, aV as modifyRadioValue, bL as getRadioSelectedValue, V as LocationService, br as getCheckboxSelectedValue, t as toastWarning, bQ as modifyCheckboxHeader, bR as YupValidateField, o as createModal, E as EncounterService, a as useProgramStore, bS as extractArrayOfNameValue, bT as validateStore, bU as dynamicValue, bV as modifyDynamicFieldValue, a3 as ToolbarSearch, T as Toolbar } from '../index-CZRYL9l5.js';
import { m as mapState, d as defineStore } from './pinia-BoqbyD4X.js';
import { B as BasicForm } from './BasicForm-DcXJGghr.js';
import { L as LabOrder, I as Investigations } from './Investigations-tNyN_20C.js';
import { S as SaveProgressModal } from './SaveProgressModal-KORxJR3w.js';
import { D as DashBox } from './DashBox-BI0AdyBt.js';
import { _ as _sfc_main$o } from './LevelOfConsciousness.vue_vue_type_script_setup_true_lang-BQo_FJ7L.js';
import { P as PresentingComplaints, _ as _sfc_main$m, a as _sfc_main$n } from './PresentingComplaints-mqqxqdfo.js';
import { B as BasicCard } from './BasicCard-C7y9ARKv.js';
import { l as lodashExports } from './lodash-C_0aJxVW.js';
import { _ as _sfc_main$s, a as _sfc_main$t, D as DeliveryDetails } from './ObstetricDetails.vue_vue_type_script_setup_true_lang-BCGN0o_v.js';
import { L as LabourQuickCheck } from './LabourQuickCheck-C-3vvUFd.js';
import { _ as _sfc_main$p, a as _sfc_main$q, b as _sfc_main$r } from './FirstVaginalExamination.vue_vue_type_script_setup_true_lang-Dl99tkqu.js';
import { T as ThirdStageDelivery, S as SecondStageDelivery } from './ThirdStageDelivery-BbizCEjK.js';
import { O as OtherExams } from './OtherExams-Cei_GC3Z.js';
import { V as Vitals$1 } from './Vitals-DkN0mZ3b.js';
import { L as LabourPastPregnancyComplications, a as LabourAllergies, b as LabourMedications, c as LabourVaccineHistory, d as LabourChronicHealthConditions, e as LabourPastSurgeries, f as LabourWomanBehaviour } from './LabourComplications-CkCkfwv9.js';

const _sfc_main$l = defineComponent({
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

const _sfc_main$k = defineComponent({
  mixins: [_sfc_main$l],
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

const _hoisted_1$k = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
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
                createBaseVNode("div", _hoisted_1$k, [
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
const VitalSigns = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-bbed3d60"]]);

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

const _sfc_main$j = defineComponent({
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

const _hoisted_1$j = { class: "modal_wrapper" };
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createVNode(_component_basic_form, {
      contentData: _ctx.changeStatus,
      "onUpdate:inputValue": _ctx.handleInputData,
      "onUpdate:selected": _ctx.handleInputData
    }, null, 8, ["contentData", "onUpdate:inputValue", "onUpdate:selected"])
  ]);
}
const ChangeStatus = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i]]);

const _sfc_main$i = defineComponent({
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

const _hoisted_1$i = { class: "card_content" };
const _hoisted_2$6 = { key: 0 };
const _hoisted_3$5 = { style: { "color": "#999" } };
const _hoisted_4$3 = { class: "dates_title" };
const _hoisted_5$3 = { class: "sub_data" };
const _hoisted_6$2 = { class: "dates_title" };
const _hoisted_7$2 = { class: "sub_data" };
const _hoisted_8$2 = { class: "dates_title" };
const _hoisted_9$2 = { class: "sub_data" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueDatePicker = resolveComponent("VueDatePicker");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
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
                day === _ctx.tomorrow ? (openBlock(), createElementBlock("p", _hoisted_2$6, [
                  createTextVNode(toDisplayString(day), 1),
                  createBaseVNode("sup", _hoisted_3$5, toDisplayString(_ctx.bookedPatient), 1)
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
                createBaseVNode("div", _hoisted_4$3, [
                  _cache[2] || (_cache[2] = createBaseVNode("div", null, "User set appointment date", -1)),
                  createBaseVNode("div", _hoisted_5$3, toDisplayString(_ctx.calendarDate), 1)
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
const ImmunizationNextAppointment = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-193b84e8"]]);

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

const _sfc_main$h = defineComponent({
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
    LevelOfConsciousness: _sfc_main$o,
    PhysicalExamination: _sfc_main$n,
    PregnancyBreastfeeding: _sfc_main$m,
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

const _hoisted_1$h = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2$5 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$4 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_4$2 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_5$2 = {
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
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
              createBaseVNode("div", _hoisted_1$h, [
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
              createBaseVNode("div", _hoisted_2$5, [
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
              createBaseVNode("div", _hoisted_3$4, [
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
              createBaseVNode("div", _hoisted_4$2, [
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
              createBaseVNode("div", _hoisted_5$2, [
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
const ImmunizationServices = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-432c8ad2"]]);

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

function validateField$2(data, fieldName, value) {
  const validationRules = {
    // LMNP: () => Validation.required(value),
    Gravida: () => MultValidations$2(fieldName, value),
    lmnpEED: () => StandardValidations.required(value),
    Stillbirths: () => MultValidations$2(fieldName, value),
    LiveBirths: () => StandardValidations.required(value),
    Parity: () => StandardValidations.required(value),
    "Abortions/Miscarriages": () => MultValidations$2(fieldName, value),
    // lmnpDate: () => MultValidations(fieldName, value),
    // lmnpGestationAge: () => Validation.required(value),
    // LNMPKnown: () => Validation.required(value),
    // UltrasoundDone: () => Validation.required(value),
    // UltrasoundDate: () => MultValidations(fieldName, value),
    specify: () => MultValidations$2(fieldName, value),
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
function MultValidations$2(fieldName, value) {
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

const _sfc_main$g = defineComponent({
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
      return validateField$2(this.dischargeWoman, col.name, this[col.name]);
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

const _hoisted_1$g = { class: "container" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
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
const DischargeWoman = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-1afdf5b4"]]);

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

const _sfc_main$f = defineComponent({
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

const _hoisted_1$f = { class: "container" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
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
const PNCEnd = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-5b99b741"]]);

const initialBabyStatusDetails = [
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What is the status of the baby?",
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
              inputHeader: "Full name of the baby",
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
        title: "Baby sex?",
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
              inputHeader: "Birth weight",
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
              inputHeader: "Current weight",
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

function validateField$1(data, fieldName, value) {
  const validationRules = {
    "Birth weight": () => MultValidations$1(fieldName, value),
    "Current weight": () => MultValidations$1(fieldName, value),
    "Full name of the baby": () => MultValidations$1(fieldName, value),
    "Date BCG given": () => MultValidations$1(fieldName, value),
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

const _sfc_main$e = defineComponent({
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
      return validateField$1(this.babyStatusDetails, event.name, this[event.name]);
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

const _hoisted_1$e = { class: "container" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
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
const BabyStatus = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-d32b4c23"]]);

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
const initialVitals$1 = [
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
    vitals: [...initialVitals$1],
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
      const data = lodashExports.cloneDeep(initialVitals$1);
      return [...data];
    },
    getInitial2() {
      const data = lodashExports.cloneDeep(initialOtherexams);
      return [...data];
    }
  }
  //
});

const _sfc_main$d = defineComponent({
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

const _hoisted_1$d = { class: "container" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
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
const DangerSigns = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-b3265856"]]);

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
    ANCVitals: [...initialVitals]
  }),
  actions: {
    setVitals(data) {
      this.ANCVitals = data;
    },
    getInitialVitals() {
      const data = lodashExports.cloneDeep(initialVitals);
      return [...data];
    }
  }
});

function validateField(data, fieldName, value) {
  const validationRules = {
    "Systolic blood pressure": () => MultValidations(fieldName, value),
    "Diastolic blood pressure": () => MultValidations(fieldName, value),
    Pulse: () => MultValidations(fieldName, value),
    Temperature: () => MultValidations(fieldName, value),
    "Respiratory rate": () => MultValidations(fieldName, value)
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

const _sfc_main$c = defineComponent({
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
      return validateField(this.vitals, event.name, this[event.name]);
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

const _hoisted_1$c = { class: "container" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
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
const Vitals = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-049e698a"]]);

const _sfc_main$b = defineComponent({
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

const _hoisted_1$b = { class: "container" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
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
const OtherExaminations = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-ed6335d4"]]);

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

const _hoisted_1$a = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2$4 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_3$3 = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
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
              createBaseVNode("div", _hoisted_1$a, [
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
              createBaseVNode("div", _hoisted_2$4, [
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
              createBaseVNode("div", _hoisted_3$3, [
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
const PostnatalWardMonitoring = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-cf6358bd"]]);

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

const _sfc_main$9 = defineComponent({
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

const _hoisted_1$9 = { class: "container" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
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
const Labour = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-1c41c247"]]);

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

const _sfc_main$8 = defineComponent({
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

const _hoisted_1$8 = { class: "container" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
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
const PatientReferral = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-b36e2fed"]]);

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

const _sfc_main$7 = defineComponent({
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

const _hoisted_1$7 = { class: "container" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
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
const end = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-c5cfbf12"]]);

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

const _sfc_main$6 = defineComponent({
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

const _hoisted_1$6 = { class: "container" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
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
const ImmidiatePostnatalChecksForChild = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-c38fbba8"]]);

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

const _sfc_main$5 = defineComponent({
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

const _hoisted_1$5 = { class: "container" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
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
const ImmidiatePostnatalChecksForMother = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-cef1a91e"]]);

const _sfc_main$4 = defineComponent({
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

const _hoisted_1$4 = { class: "modal_wrapper" };
const _hoisted_2$3 = { class: "modal_title diplay_space_between" };
const _hoisted_3$2 = { class: "laboratory" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$3, [
      _cache[1] || (_cache[1] = createBaseVNode("span", null, "Investigations", -1)),
      createBaseVNode("span", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
        style: { "cursor": "pointer", "font-weight": "300" }
      }, "x")
    ]),
    createBaseVNode("div", _hoisted_3$2, [
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
const InvestigationsModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-c7e1ccc0"]]);

const _sfc_main$3 = defineComponent({
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

const _hoisted_1$3 = { class: "alert" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h3", null, "Stay tuned for our new features coming soon!", -1),
    createBaseVNode("div", { class: "message" }, " Exciting new features will be available soon. Check back later! ", -1)
  ])]);
}
const UpcomingFeature = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-3239f912"]]);

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

const _hoisted_1$2 = { class: "visitContent" };
const _hoisted_2$2 = { class: "visitData" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { style: { "max-width": "1000px" } };
const _hoisted_5$1 = {
  key: 1,
  class: "noData"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
              Object.values(_ctx.pregnancy).every((value) => value !== "") ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
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
              ])) : _ctx.activeProgram.program_id !== 32 ? (openBlock(), createElementBlock("div", _hoisted_5$1, "OBSTETRIC DATA IS EMPTY")) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const LabourObstetricData = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-310b789d"]]);

const pastObstreticValidationShema = create$3().shape({
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
      const obstetricHistoryValid = await validateStore(this.prevPregnancies, pastObstreticValidationShema, obstetricHistory);
      return obstetricHistoryValid;
    }
  }
  //
});

const _hoisted_1$1 = { class: "container" };
const _hoisted_2$1 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabourObstetricHistory",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const store = useLabourObstreticHistoryStore();
    const modeOfDelivery = computed(() => store.modeOfDelivery);
    const preterm = computed(() => store.preterm);
    function handleAlert(e) {
      if (dynamicValue(modeOfDelivery.value, "Mode of delivery", e.id) == "caesarean section") {
        modifyDynamicFieldValue(e.id, modeOfDelivery.value, "Specify", "displayNone", false);
      } else {
        modifyDynamicFieldValue(e.id, modeOfDelivery.value, "Specify", "displayNone", true);
      }
    }
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_basic_form = resolveComponent("basic-form");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonAccordionGroup), {
          ref: "accordionGroup",
          class: "previousView ion-margin-bottom"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonAccordion), {
              value: "first",
              "toggle-icon-slot": "start",
              class: "custom_card"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonItem), {
                  slot: "header",
                  color: "light"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), { class: "previousLabel" }, {
                      default: withCtx(() => [..._cache[0] || (_cache[0] = [
                        createTextVNode("Obstetric History", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(LabourObstetricData)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 512),
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(_component_basic_form, {
                  contentData: modeOfDelivery.value,
                  "onUpdate:inputValue": handleAlert
                }, null, 8, ["contentData"]),
                createVNode(_component_basic_form, { contentData: preterm.value }, null, 8, ["contentData"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const LabourObstetricHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c103b416"]]);

const _sfc_main = defineComponent({
  mixins: [_sfc_main$u],
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
    HIVStatusAndTreatment: _sfc_main$t,
    ObstetricDetails: _sfc_main$s,
    Labour,
    QuickCheck: LabourQuickCheck,
    PhysicalExamination: _sfc_main$r,
    PelvicAssessment: _sfc_main$q,
    PatientReferral,
    FirstVaginalExamination: _sfc_main$p,
    SecondStageDelivery,
    ThirdStageDelivery,
    end,
    OtherExams,
    Vitals: Vitals$1,
    ImmidiatePostnatalChecksForChild,
    ImmidiatePostnatalChecksForMother,
    LabourWomanBehaviour,
    LabourPastSurgeries,
    LabourChronicHealthConditions,
    LabourVaccineHistory,
    LabourMedications,
    LabourObstetricHistory,
    LabourAllergies,
    LabourComplications: LabourPastPregnancyComplications
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
const Stepper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-611f2e89"]]);

export { Stepper as S, useImmediatePostnatalChecksForMotherStore as a, useImmediatePostnatalChecksForChildStore as b, useDischargeWomanStore as c, usePNCEndStore as d, end as e, useLabourReferralStore as u };
