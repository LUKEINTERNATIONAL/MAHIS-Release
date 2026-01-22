import { bI as useVitals, n as icons, y as StandardValidations } from '../index-BlafVMNh.js';
import { c as computed, f as ref } from './vendor-Cbv9TWZo.js';

const useHeightWeightForm = () => {
  const vitalsComposable = useVitals();
  const height = ref("");
  const isHeightPreLoaded = ref(false);
  const loadHeight = async () => {
    const savedHeight = await vitalsComposable.checkHeight();
    if (savedHeight && savedHeight != "" && savedHeight != "0") {
      height.value = savedHeight;
      isHeightPreLoaded.value = true;
    } else {
      height.value = "";
      isHeightPreLoaded.value = false;
    }
  };
  const resetHeight = () => {
    height.value = "";
    isHeightPreLoaded.value = false;
  };
  const heightWeightFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Height and weight",
        grid: { s: "3" }
      },
      {
        componentType: "inputField",
        name: "height",
        header: "Height",
        unit: "cm",
        type: "number",
        icon: icons.height,
        value: height.value || "",
        grid: { s: "4.5" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Check height not done"] || isHeightPreLoaded.value) {
            return null;
          }
          return StandardValidations.vitalsHeight(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check height not done"] || isHeightPreLoaded.value;
        }
      },
      {
        componentType: "inputField",
        name: "weight",
        header: "Weight",
        unit: "kg",
        icon: icons.weight,
        type: "number",
        grid: { s: "4.5" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Check weight not done"]) {
            return null;
          }
          return StandardValidations.vitalsWeight(value);
        },
        disabled: (allFormValues) => {
          return allFormValues["Check weight not done"];
        }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "Alert",
        condition: async (allFormValues) => {
          if (StandardValidations.vitalsWeight(allFormValues.weight) == null && StandardValidations.vitalsHeight(allFormValues.height) == null) {
            return await vitalsComposable.setBMI(allFormValues.height, allFormValues.weight);
          } else {
            return false;
          }
        },
        grid: { s: "9" }
      },
      {
        grid: { s: "3" }
      },
      {
        componentType: "checkboxField",
        name: "Check height not done",
        type: "single",
        label: "Height not done",
        value: false,
        grid: { s: "4.5" },
        disabled: (allFormValues) => {
          return isHeightPreLoaded.value;
        },
        onChange: (value, allFormValues) => {
          if (value === true) {
            return { height: "" };
          }
        }
      },
      {
        componentType: "checkboxField",
        name: "Check weight not done",
        type: "single",
        label: "Weight not done",
        value: false,
        grid: { s: "4.5" },
        onChange: (value, allFormValues) => {
          if (value === true) {
            return { weight: "" };
          }
        }
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
          return allFormValues["Check height not done"];
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
          return allFormValues["Check weight not done"];
        },
        taggable: false,
        hideSelected: false,
        closeOnSelect: true
      }
    ];
  });
  return {
    height,
    isHeightPreLoaded,
    loadHeight,
    resetHeight,
    heightWeightFormSection
  };
};

export { useHeightWeightForm as u };
