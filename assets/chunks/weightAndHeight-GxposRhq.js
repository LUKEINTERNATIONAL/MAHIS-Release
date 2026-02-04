import { s as defineComponent, f as ref, a2 as onMounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, H as createCommentVNode, a5 as createTextVNode, F as unref, c as computed, K as modalController, w as watch, af as IonRow, z as createElementBlock, N as IonButton, L as IonIcon, aA as IonCol } from './vendor-OSq5kYvl.js';
import { cN as useBloodPressureForm, cO as useTemperaturePulseRateForm, cP as useRespiratoryRateOxygenForm, H as HisDate, z as StandardForm, n as icons, q as StandardModal, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, u as useDemographicsStore, J as savePatientRecord } from '../index-CbBGWx39.js';
import { c as customDatePicker } from './customDatePicker-SJmvKTqW.js';
import { l as lodashExports } from './lodash-e5gTz5JA.js';
import { s as storeToRefs } from './pinia-DzwNa_n5.js';
import { u as useHeightWeightForm } from './useHeightWeightForm-C3H9nHUX.js';

const _hoisted_1$1 = { style: { "max-width": "600px" } };
const _hoisted_2$1 = { class: "btnContent" };
const _hoisted_3$1 = { class: "saveBtn" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OthervitalsModal",
  setup(__props) {
    const iconsContent = icons;
    const showPD = ref(false);
    const bloodPressureForm = useBloodPressureForm();
    const temperaturePulseRateForm = useTemperaturePulseRateForm();
    const respiratoryRateOxygenForm = useRespiratoryRateOxygenForm();
    const vitals_date = ref(HisDate.toStandardHisFormat(HisDate.sessionDate()));
    const formRef = ref(null);
    const vitalsForm = computed(() => {
      const mergedForm = [
        // Blood Pressure sections
        ...bloodPressureForm.bloodPressureFormSection.value,
        { componentType: "Dashes" },
        // Temperature and Pulse Rate sections
        ...temperaturePulseRateForm.temperaturePulseRateForm.value,
        { componentType: "Dashes" },
        // Respiratory Rate and Oxygen sections
        ...respiratoryRateOxygenForm.respiratoryRateOxygenForm.value
      ];
      return mergedForm.filter((element) => element.componentType !== "Heading");
    });
    const showCPD = () => {
      showPD.value = true;
    };
    const updateDate = (date) => {
      vitals_date.value = HisDate.toStandardHisFormat(date);
    };
    const saveVitals = async () => {
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
      ObservationService.buildSaveObs(formData, EncounterTypeId.VITALS, vitals_date.value);
      toastSuccess("Vitals saved successfully");
      modalController.dismiss();
    };
    onMounted(async () => {
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createBlock(StandardModal, { title: "Add Other Vitals" }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", null, [
              createVNode(StandardForm, {
                formData: vitalsForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            showPD.value ? (openBlock(), createBlock(customDatePicker, {
              key: 0,
              onDateChange: updateDate
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", null, [
                  createVNode(_component_ion_button, {
                    class: "btnText",
                    fill: "solid",
                    onClick: saveVitals
                  }, {
                    default: withCtx(() => [
                      _cache[0] || (_cache[0] = createTextVNode(" Done today ", -1)),
                      createVNode(_component_ion_icon, {
                        slot: "end",
                        size: "small",
                        icon: unref(iconsContent).calenderwithPlus
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _cache[2] || (_cache[2] = createBaseVNode("div", null, null, -1)),
                createBaseVNode("div", null, [
                  createVNode(_component_ion_button, {
                    class: "btnText",
                    fill: "solid",
                    onClick: showCPD
                  }, {
                    default: withCtx(() => [
                      _cache[1] || (_cache[1] = createTextVNode(" Done earlier ", -1)),
                      createVNode(_component_ion_icon, {
                        slot: "end",
                        size: "small",
                        icon: unref(iconsContent).calenderWithPenEdit
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

const OtherVitals = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0a60bf78"]]);

const _hoisted_1 = { style: { "max-width": "600px" } };
const _hoisted_2 = { class: "center text_12" };
const _hoisted_3 = { class: "btnContent" };
const _hoisted_4 = {
  key: 0,
  class: "saveBtn"
};
const _hoisted_5 = {
  key: 1,
  class: "saveBtn"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "weightAndHeight",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const iconContent = ref(icons);
    const showPD = ref(false);
    const vitals_date = ref(HisDate.toStandardHisFormat(HisDate.sessionDate()));
    const checkUnderSixWeeks = ref(false);
    const showDateBtns = ref(true);
    const { heightWeightFormSection } = useHeightWeightForm();
    const formRef = ref(null);
    const modifiedHeightWeightFormSection = computed(() => {
      return heightWeightFormSection.value.filter((item) => {
        return !(item.componentType === "Heading" && item.name === "Height and weight");
      }).filter((item) => {
        return item.componentType !== void 0;
      }).filter((item) => {
        if (checkUnderSixWeeks.value && item.componentType === "inputField" && item.name === "height") {
          return false;
        }
        if (checkUnderSixWeeks.value && item.componentType === "checkboxField" && item.name === "Check height not done") {
          return false;
        }
        if (checkUnderSixWeeks.value && item.componentType === "multiSelectInputField" && item.header === "Specify Reason") {
          if (item.condition) {
            const testFormValues = { "Check height not done": true };
            if (item.condition(testFormValues)) {
              return false;
            }
          }
        }
        return true;
      }).map((item) => {
        if (item.componentType === "Alert") {
          return {
            ...item,
            grid: { s: "12" }
          };
        }
        return {
          ...item,
          grid: { s: "6" }
        };
      });
    });
    const checkAge = () => {
      if (!lodashExports.isEmpty(patient.value?.personInformation?.birthdate)) {
        checkUnderSixWeeks.value = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.value?.personInformation?.birthdate) < 42 ? true : false;
      }
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
          newVitals.push(await ObservationService.buildValueNumber(key, parseInt(String(value)), null, null, vitals_date.value));
        } else if (value && typeof value === "object" && value?.name) {
          let vitalName = key;
          if (key.endsWith("_reason")) {
            vitalName = key.replace("_reason", "");
          }
          vitalsReasons.push(await ObservationService.buildValueText(vitalName, value.name, vitals_date.value));
        }
      }
      console.log("Processed vitals:", { newVitals, vitalsReasons });
      return { newVitals, vitalsReasons };
    };
    const saveVitals = async () => {
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
      const patientRecord = await ObservationService.addObsToEncounterPatient([...newVitals, ...vitalsReasons], EncounterTypeId.VITALS);
      await savePatientRecord(patientRecord);
      toastSuccess("Vitals saved successfully");
      dismiss();
      return true;
    };
    const dismiss = () => {
      modalController.dismiss();
    };
    const showCPD = () => {
      showPD.value = true;
      showDateBtns.value = false;
    };
    const updateDate = (date) => {
      vitals_date.value = HisDate.toStandardHisFormat(date);
    };
    watch(
      patient,
      async () => {
        checkAge();
      },
      { deep: true }
    );
    onMounted(() => {
      checkAge();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, { title: "Add Weight/Height" }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(StandardForm, {
                      formData: modifiedHeightWeightFormSection.value,
                      ref_key: "formRef",
                      ref: formRef
                    }, null, 8, ["formData"])
                  ]),
                  _: 1
                })
              ])
            ]),
            showPD.value ? (openBlock(), createBlock(customDatePicker, {
              key: 0,
              onDateChange: updateDate
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_3, [
              showDateBtns.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createBaseVNode("div", null, [
                  createVNode(unref(IonButton), {
                    class: "btnText",
                    fill: "solid",
                    onClick: _cache[0] || (_cache[0] = ($event) => saveVitals())
                  }, {
                    default: withCtx(() => [
                      _cache[2] || (_cache[2] = createTextVNode(" Done today ", -1)),
                      createVNode(unref(IonIcon), {
                        slot: "end",
                        size: "small",
                        icon: iconContent.value.calenderwithPlus
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", null, [
                  createVNode(unref(IonButton), {
                    class: "btnText",
                    fill: "solid",
                    onClick: showCPD
                  }, {
                    default: withCtx(() => [
                      _cache[3] || (_cache[3] = createTextVNode(" Done earlier ", -1)),
                      createVNode(unref(IonIcon), {
                        slot: "end",
                        size: "small",
                        icon: iconContent.value.calenderWithPenEdit
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true),
              !showDateBtns.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createVNode(unref(IonRow), {
                  class: "ion-justify-content-between",
                  style: { "width": "100%" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), { size: "auto" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: dismiss,
                          id: "cbtn",
                          class: "btnText cbtn",
                          fill: "solid",
                          style: { "width": "130px" }
                        }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode(" Cancel ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCol), { size: "auto" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: _cache[1] || (_cache[1] = ($event) => saveVitals()),
                          class: "btnText",
                          fill: "solid",
                          style: { "width": "130px" }
                        }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode(" Save ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

const weightAndHeight = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6cbc0a60"]]);

export { OtherVitals as O, weightAndHeight as w };
