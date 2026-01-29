import { u as useDemographicsStore, z as StandardForm, l as PreviousVitals, t as toastWarning, K as ObservationService, b as EncounterTypeId, J as savePatientRecord, G as toastSuccess, _ as _export_sfc } from '../index-OU0RFndh.js';
import { u as useHeightWeightForm } from './useHeightWeightForm-BmMX4hiU.js';
import { u as useBloodPressureForm, a as useTemperaturePulseRateForm, b as useRespiratoryRateOxygenForm } from './useRespiratoryRateOxygenForm-B3nOIh0q.js';
import { s as storeToRefs } from './pinia-B4JSZd0E.js';
import { s as defineComponent, w as watch, a2 as onMounted, n as nextTick, ck as onBeforeUnmount, y as openBlock, z as createElementBlock, O as createBlock, A as createVNode, B as withCtx, F as unref, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, a7 as IonLabel, a5 as createTextVNode, C as createBaseVNode, af as IonRow, J as Fragment, f as ref, c as computed } from './vendor-CZ_rDZM9.js';

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
