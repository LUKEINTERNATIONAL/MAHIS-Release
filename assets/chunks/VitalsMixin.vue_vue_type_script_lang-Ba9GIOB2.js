import { y as StandardValidations, P as PatientService, bY as modifyAlertsValue, bS as iconBloodPressure, b8 as BMIService, H as HisDate, K as ObservationService, aX as modifyCheckboxValue, a1 as modifyFieldValue, u as useDemographicsStore } from '../index-D7kYL7Nj.js';
import { m as mapState } from './pinia-D-q2_lrU.js';
import { q as defineComponent } from './vendor-BPW-J91F.js';

const _sfc_main = defineComponent({
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

export { _sfc_main as _ };
