import { bI as useVitals, n as icons, y as StandardValidations, u as useDemographicsStore, C as StandardForm, l as PreviousVitals, t as toastWarning, K as ObservationService, b as EncounterTypeId, J as savePatientRecord, G as toastSuccess, _ as _export_sfc } from '../index-C6u5KmBv.js';
import { r as ref, d as computed, q as defineComponent, w as watch, a2 as onMounted, n as nextTick, aj as onBeforeUnmount, x as createElementBlock, y as openBlock, O as createBlock, z as createVNode, A as withCtx, E as unref, aE as IonAccordionGroup, aD as IonAccordion, B as createBaseVNode, an as IonItem, a7 as IonLabel, a5 as createTextVNode, af as IonRow, J as Fragment } from './vendor-BPW-J91F.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';

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
          return allFormValues["Check respiratory rate not done"];
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

const _hoisted_1 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vitals",
  setup(__props, { expose: __expose }) {
    const heightWeightForm = useHeightWeightForm();
    const bloodPressureForm = useBloodPressureForm();
    const temperaturePulseRateForm = useTemperaturePulseRateForm();
    const respiratoryRateOxygenForm = useRespiratoryRateOxygenForm();
    const formRef = ref(null);
    const formKey = ref(0);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          heightWeightForm.resetHeight();
          formKey.value++;
          await nextTick();
          await nextTick();
          await heightWeightForm.loadHeight();
          console.log("Form reset complete for new patient");
        }
      }
    );
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return false;
      }
      const validationErrors = formRef.value.validateForm();
      if (validationErrors) {
        console.log("Validation errors:", validationErrors);
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const formData = formRef.value.getFormValues();
      console.log("Form data after validation:", formData);
      const hasNotDoneChecked = Object.keys(formData).some((key) => key.startsWith("Check ") && key.endsWith(" not done") && formData[key] === true);
      if (!hasNotDoneChecked) {
        const validationErrors2 = formRef.value.validateForm();
        if (validationErrors2) {
          console.log("Validation errors:", validationErrors2);
          toastWarning("Please fix validation errors before submitting");
          return false;
        }
      }
      const { newVitals, vitalsReasons } = await processVitals(formData);
      if (!newVitals.length && !vitalsReasons.length && !hasNotDoneChecked) {
        toastWarning("No vitals data to save");
        return false;
      }
      const patient2 = await ObservationService.addObsToEncounterPatient([...newVitals, ...vitalsReasons], EncounterTypeId.VITALS);
      await savePatientRecord(patient2);
      formKey.value++;
      await nextTick();
      await nextTick();
      await heightWeightForm.loadHeight();
      toastSuccess("Vitals saved successful");
      return true;
    };
    const processVitals = async (data) => {
      const newVitals = [];
      const vitalsReasons = [];
      for (const [key, value] of Object.entries(data)) {
        if (key.startsWith("Check ") && key.endsWith(" not done")) {
          console.log(`Skipping checkbox field: ${key}`);
          continue;
        }
        if (typeof value === "string" && value && !isNaN(Number(value)) || typeof value === "number") {
          newVitals.push(await ObservationService.buildValueNumber(key, parseInt(String(value))));
        } else if (value && typeof value === "object" && value?.name) {
          let vitalName = key;
          if (key.endsWith("_reason")) {
            vitalName = key.replace("_reason", "");
          }
          vitalsReasons.push(await ObservationService.buildValueText(vitalName, value.name));
        }
      }
      console.log("Processed vitals:", { newVitals, vitalsReasons });
      return { newVitals, vitalsReasons };
    };
    onMounted(async () => {
      heightWeightForm.resetHeight();
      await nextTick();
      await nextTick();
      await heightWeightForm.loadHeight();
      console.log("Vitals form initialization complete");
    });
    onBeforeUnmount(() => {
      console.log("Vitals form unmounting");
    });
    const vitalsForm = computed(() => {
      const mergedForm = [
        // Height and Weight sections
        ...heightWeightForm.heightWeightFormSection.value,
        // Add separator between sections
        { grid: { s: "3" } },
        { grid: { s: "9" }, componentType: "Dashes" },
        // Blood Pressure sections
        ...bloodPressureForm.bloodPressureFormSection.value,
        // Add separator between sections
        { grid: { s: "3" } },
        { grid: { s: "9" }, componentType: "Dashes" },
        // Temperature and Pulse Rate sections
        ...temperaturePulseRateForm.temperaturePulseRateForm.value,
        // Respiratory Rate and Oxygen sections
        ...respiratoryRateOxygenForm.respiratoryRateOxygenForm.value
      ];
      return mergedForm;
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      resetForm: () => {
        formKey.value++;
        nextTick(() => {
          heightWeightForm.loadHeight();
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(StandardForm, {
          formData: vitalsForm.value,
          ref_key: "formRef",
          ref: formRef,
          key: formKey.value
        }, null, 8, ["formData"])),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonAccordionGroup), {
              ref: "accordionGroup",
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonAccordion), {
                  value: "first",
                  "toggle-icon-slot": "start",
                  style: { "border-radius": "10px", "background-color": "#fff" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[0] || (_cache[0] = [
                            createTextVNode("Previous measurements", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_1, [
                      createVNode(PreviousVitals)
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
    };
  }
});

const Vitals = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-369a8536"]]);

export { Vitals as V };
