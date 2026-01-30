import { bK as useVitals, n as icons, y as StandardValidations } from '../index-DLDoA2KE.js';
import { c as computed } from './vendor-D7CYpxMc.js';

const useBloodPressureForm = () => {
  const vitalsComposable = useVitals();
  const bloodPressureFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Blood pressure",
        grid: { s: "3" }
      },
      {
        componentType: "inputField",
        name: "Systolic",
        header: "Systolic Pressure",
        unit: "mmHg",
        type: "number",
        icon: icons.systolicPressure,
        grid: { s: "4.5" },
        validation: (value) => {
          return StandardValidations.vitalsSystolic(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check blood pressure not done"];
        }
      },
      {
        componentType: "inputField",
        name: "Diastolic",
        header: "Diastolic pressure",
        unit: "mmHg",
        icon: icons.diastolicPressure,
        type: "number",
        grid: { s: "4.5" },
        validation: (value) => {
          return StandardValidations.vitalsDiastolic(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check blood pressure not done"];
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "Alert",
        grid: { s: "9" },
        condition: async (allFormValues) => {
          if (StandardValidations.vitalsSystolic(allFormValues.Systolic) == null && StandardValidations.vitalsDiastolic(allFormValues.Diastolic) == null) {
            return await vitalsComposable.updateBP(allFormValues.Systolic, allFormValues.Diastolic);
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
        name: "Check blood pressure not done",
        type: "single",
        label: "Blood pressure not done",
        value: "",
        grid: { s: "4.5" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "Blood Pressure",
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
        validation: (value) => {
          if (!value || value.length === 0) {
            return "Please select at least one option";
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["Check blood pressure not done"];
        },
        taggable: false,
        hideSelected: false,
        closeOnSelect: true
      }
    ];
  });
  return {
    bloodPressureFormSection
  };
};

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
        grid: { s: "4.5" }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "Temperature",
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
        validation: (value) => {
          if (!value || value.length === 0) {
            return "Please select at least one option";
          }
          return null;
        },
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
        name: "Pulse",
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
        validation: (value) => {
          if (!value || value.length === 0) {
            return "Please select at least one option";
          }
          return null;
        },
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
        grid: { s: "4.5" }
      },
      {
        componentType: "checkboxField",
        name: "Check oxygen saturation not done",
        type: "single",
        label: "Oxygen saturation not done",
        value: "",
        grid: { s: "4.5" }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify Reason",
        name: "Respiratory rate",
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
        validation: (value) => {
          if (!value || value.length === 0) {
            return "Please select at least one option";
          }
          return null;
        },
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
        name: "SAO2",
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
        validation: (value) => {
          if (!value || value.length === 0) {
            return "Please select at least one option";
          }
          return null;
        },
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
