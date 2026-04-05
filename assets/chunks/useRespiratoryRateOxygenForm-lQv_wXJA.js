import { bK as useVitals, a as useProgramStore, n as icons, y as StandardValidations } from '../index-D-gMOJ4F.js';
import { c as computed } from './vendor-BcieWP-_.js';

const programStore$2 = useProgramStore();
const defaults = {
  showSystolic: true,
  showDiastolic: true,
  showAlert: true,
  showNotDoneCheckbox: true,
  showReasonDropdown: true,
  enableSystolic: true,
  enableDiastolic: true
};
const useBloodPressureForm = (options = {}) => {
  const vitalsComposable = useVitals();
  const opts = { ...defaults, ...options };
  const bloodPressureFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Blood pressure",
        grid: { s: "3" }
      },
      // ── Systolic ──────────────────────────────────────────────────────
      {
        componentType: "inputField",
        name: "Systolic",
        header: "Systolic Pressure",
        unit: "mmHg",
        type: "number",
        icon: icons.systolicPressure,
        grid: { s: "4.5" },
        // Hidden when caller passes showSystolic: false
        condition: () => opts.showSystolic,
        // Disabled when caller passes enableSystolic: false
        // OR when the "not done" checkbox is ticked (existing runtime logic)
        disabled: (allFormValues) => {
          if (!opts.enableSystolic) return true;
          return allFormValues["Check blood pressure not done"];
        },
        validation: (value) => StandardValidations.vitalsSystolic(value)
      },
      // ── Diastolic ─────────────────────────────────────────────────────
      {
        componentType: "inputField",
        name: "Diastolic",
        header: "Diastolic pressure",
        unit: "mmHg",
        icon: icons.diastolicPressure,
        type: "number",
        grid: { s: "4.5" },
        // Hidden when caller passes showDiastolic: false
        condition: () => opts.showDiastolic,
        // Disabled when caller passes enableDiastolic: false
        // OR when the "not done" checkbox is ticked
        disabled: (allFormValues) => {
          if (!opts.enableDiastolic) return true;
          return allFormValues["Check blood pressure not done"];
        },
        validation: (value) => StandardValidations.vitalsDiastolic(value)
      },
      // ── Spacer ────────────────────────────────────────────────────────
      {
        grid: { s: "3" }
      },
      // ── BP Alert ──────────────────────────────────────────────────────
      {
        componentType: "Alert",
        grid: { s: "9" },
        // Hidden when caller passes showAlert: false
        // Otherwise uses the existing async runtime logic
        condition: async (allFormValues) => {
          if (!opts.showAlert) return false;
          if (StandardValidations.vitalsSystolic(allFormValues.Systolic) == null && StandardValidations.vitalsDiastolic(allFormValues.Diastolic) == null) {
            return await vitalsComposable.updateBP(allFormValues.Systolic, allFormValues.Diastolic);
          }
          return false;
        }
      },
      // ── Spacer ────────────────────────────────────────────────────────
      {
        grid: { s: "3" }
      },
      // ── "Not done" checkbox ───────────────────────────────────────────
      {
        componentType: "checkboxField",
        name: "Check blood pressure not done",
        type: "single",
        label: "Blood pressure not done",
        value: programStore$2.isTargetProgram(14),
        grid: { s: "4.5" },
        // Hidden when caller passes showNotDoneCheckbox: false
        condition: () => opts.showNotDoneCheckbox
      },
      // ── Reason dropdown ───────────────────────────────────────────────
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "Blood Pressure",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4.5" },
        icon: icons.search,
        options: [
          { id: 1, name: "Patient uncooperative" },
          { id: 2, name: "Machine not working" },
          { id: 3, name: "Machine not available" }
        ],
        taggable: false,
        hideSelected: false,
        closeOnSelect: true,
        // Hidden when caller passes showReasonDropdown: false
        // Otherwise uses existing runtime logic (only show when "not done" is ticked)
        condition: (allFormValues) => {
          if (!opts.showReasonDropdown) return false;
          return allFormValues["Check blood pressure not done"];
        }
      }
    ];
  });
  return {
    bloodPressureFormSection
  };
};

const programStore$1 = useProgramStore();
const useTemperaturePulseRateForm = () => {
  const vitalsComposable = useVitals();
  const temperaturePulseRateForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Temperature and rates",
        grid: { s: "3" }
      },
      {
        componentType: "inputField",
        name: "Temperature",
        header: "Temperature",
        unit: "°C",
        type: "number",
        icon: icons.temprature,
        grid: { s: "4.5" },
        validation: (value) => {
          return StandardValidations.vitalsTemperature(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check temperature not done"];
        }
      },
      {
        componentType: "inputField",
        name: "Pulse",
        header: "Pulse rate",
        unit: "BMP",
        icon: icons.pulse,
        type: "number",
        grid: { s: "4.5" },
        validation: (value) => {
          return StandardValidations.vitalsPulseRate(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check pulse rate not done"];
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "Alert",
        grid: { s: "9" },
        condition: async (allFormValues) => {
          if (StandardValidations.vitalsTemperature(allFormValues["Temperature"]) == null) {
            const tempStatus = vitalsComposable.getTemperatureStatus(allFormValues["Temperature"]);
            return await vitalsComposable.updateRate("temp", allFormValues["Temperature"], "°C", tempStatus, 4);
          } else {
            return false;
          }
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "Alert",
        grid: { s: "9" },
        condition: async (allFormValues) => {
          if (StandardValidations.vitalsPulseRate(allFormValues["Pulse"]) == null) {
            const pulseStatus = vitalsComposable.getPulseRateStatus(allFormValues["Pulse"]);
            return await vitalsComposable.updateRate("pulse", allFormValues["Pulse"], "BMP", pulseStatus, 4);
          } else {
            return false;
          }
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "checkboxField",
        name: "Check temperature not done",
        type: "single",
        label: "Temperature not done",
        grid: { s: "4.5" }
      },
      {
        componentType: "checkboxField",
        name: "Check pulse rate not done",
        type: "single",
        label: "Pulse not done",
        grid: { s: "4.5" },
        value: programStore$1.isTargetProgram(14)
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "Other notes",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4.5" },
        icon: icons.search,
        options: [
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
        condition: (allFormValues) => {
          return allFormValues["Check temperature not done"];
        },
        taggable: false,
        hideSelected: false,
        closeOnSelect: true
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "Other notes",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4.5" },
        icon: icons.search,
        options: [
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
        condition: (allFormValues) => {
          return allFormValues["Check pulse rate not done"];
        },
        taggable: false,
        hideSelected: false,
        closeOnSelect: true
      }
    ];
  });
  return {
    temperaturePulseRateForm
  };
};

const programStore = useProgramStore();
const useRespiratoryRateOxygenForm = () => {
  const vitalsComposable = useVitals();
  const respiratoryRateOxygenForm = computed(() => {
    return [
      {
        grid: { s: "3" }
      },
      {
        componentType: "inputField",
        name: "Respiratory rate",
        header: "Respiratory rate",
        unit: "BMP",
        icon: icons.respiratory,
        type: "number",
        grid: { s: "4.5" },
        validation: (value) => {
          return StandardValidations.vitalsRespiratoryRate(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check respiratory rate not done"];
        }
      },
      {
        componentType: "inputField",
        name: "SAO2",
        header: "Oxygen saturation",
        unit: "%",
        icon: icons.oxgenStaturation,
        type: "number",
        grid: { s: "4.5" },
        validation: (value) => {
          return StandardValidations.vitalsOxygenSaturation(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check oxygen saturation not done"];
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "Alert",
        grid: { s: "9" },
        condition: async (allFormValues) => {
          if (StandardValidations.vitalsRespiratoryRate(allFormValues["Respiratory rate"]) == null) {
            const respiratoryStatus = vitalsComposable.getRespiratoryRateStatus(allFormValues["Respiratory rate"]);
            return await vitalsComposable.updateRate("respiratory", allFormValues["Respiratory rate"], "BMP", respiratoryStatus, 4);
          } else {
            return false;
          }
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "Alert",
        grid: { s: "9" },
        condition: async (allFormValues) => {
          if (StandardValidations.vitalsOxygenSaturation(allFormValues["SAO2"]) == null) {
            const SAO2 = vitalsComposable.getOxygenSaturationStatus(allFormValues["SAO2"]);
            return await vitalsComposable.updateRate("oxygen", allFormValues["SAO2"], "%", SAO2, 4);
          } else {
            return false;
          }
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "checkboxField",
        name: "Check respiratory rate not done",
        type: "single",
        label: "Respiratory rate not done",
        grid: { s: "4.5" },
        value: programStore.isTargetProgram(14)
      },
      {
        componentType: "checkboxField",
        name: "Check oxygen saturation not done",
        type: "single",
        label: "Oxygen saturation not done",
        value: programStore.isTargetProgram(14),
        grid: { s: "4.5" }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "Respiratory rate_reason",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4.5" },
        icon: icons.search,
        options: [
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
        condition: (allFormValues) => {
          return allFormValues["Check respiratory rate not done"];
        },
        taggable: false,
        hideSelected: false,
        closeOnSelect: true
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "SAO2_reason",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4.5" },
        icon: icons.search,
        options: [
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
        condition: (allFormValues) => {
          return allFormValues["Check oxygen saturation not done"];
        },
        taggable: false,
        hideSelected: false,
        closeOnSelect: true
      }
    ];
  });
  return {
    respiratoryRateOxygenForm
  };
};

export { useTemperaturePulseRateForm as a, useRespiratoryRateOxygenForm as b, useBloodPressureForm as u };
