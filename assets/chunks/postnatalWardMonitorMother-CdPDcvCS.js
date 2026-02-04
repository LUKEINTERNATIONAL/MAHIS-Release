import { c as computed, s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, w as watch, a2 as onMounted, n as nextTick, cj as onBeforeUnmount, O as createBlock, af as IonRow, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, a7 as IonLabel, a5 as createTextVNode, C as createBaseVNode, f as ref, aL as useRouter, aG as IonContent, bX as chevronBackOutline, J as Fragment, R as renderList, S as withDirectives, c1 as resolveDynamicComponent, T as vShow, bu as IonPage } from './vendor-CNJ0IVCn.js';
import { _ as _sfc_main$4 } from './Wizard.vue_vue_type_script_setup_true_lang-C1KyuL1q.js';
import { z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, l as PreviousVitals, t as toastWarning, J as savePatientRecord, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-CMNG45JS.js';
import { D as DemographicBar } from './DemographicBar-BpuM8uX1.js';
import { u as useFormWizard } from './useFormWizard-CmlzzR47.js';
import { u as useHeightWeightForm } from './useHeightWeightForm-BXLaeEzh.js';
import { u as useBloodPressureForm, a as useTemperaturePulseRateForm, b as useRespiratoryRateOxygenForm } from './useRespiratoryRateOxygenForm-BmzIA3oR.js';
import { s as storeToRefs } from './pinia-DxI5rRJg.js';

const useOtherExamsForm = () => {
  const otherExamsFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Status of uterus",
        name: "Status of uterus",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Involuted",
            value: "involuted"
          },
          {
            label: "Sub-involuted",
            value: "Sub-involuted"
          },
          {
            label: "Other status",
            value: "Other status"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Status of uterus notes",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (allFormValues) => {
          return allFormValues["Status of uterus"] === "Other status";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Was the intervention given?",
        name: "Intervention given",
        obsValueType: "value_coded",
        offset: "1",
        grid: { s: "11" },
        type: "inline",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of uterus"] === "Sub-involuted";
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention given?",
        name: "Interventions provided notes",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (allFormValues) => {
          return allFormValues["Status of uterus"] === "Sub-involuted" && allFormValues["Intervention given"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Type of lochia",
        name: "Status of lochia",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "Mild",
            value: "mild"
          },
          {
            label: "Moderate",
            value: "moderate"
          },
          {
            label: "Heavy",
            value: "heavy"
          },
          {
            label: "Offensive smell",
            value: "Offensive smell"
          },
          {
            label: "Other status",
            value: "Other status"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Status of lochia notes",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (allFormValues) => {
          return allFormValues["Status of lochia"]?.includes("Other status");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Was the intervention given?",
        name: "Intervention for Lochia",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Describe the intervention given?",
        name: "Intervention for Lochia notes",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (allFormValues) => {
          return allFormValues["Intervention for Lochia"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Episiotomy/tear present?",
        name: "Episiotomy/tear",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Condition of episiotomy/tear?",
        name: "Condition of episiotomy/tear",
        obsValueType: "value_coded",
        offset: "1",
        grid: { s: "11" },
        options: [
          {
            label: "Intact",
            value: "intact"
          },
          {
            label: "Gaped",
            value: "gaped"
          },
          {
            label: "Infected",
            value: "infected"
          },
          {
            label: "Infected and gaped",
            value: "infected and gaped"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Episiotomy/tear"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Was the intervention given?",
        name: "Intervention on episiotomy/tear",
        obsValueType: "value_coded",
        offset: "2",
        grid: { s: "10" },
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Episiotomy/tear"] === "Yes" && allFormValues["Condition of episiotomy/tear"] === "infected and gaped";
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention given?",
        name: "Intervention on tear/episiotomy notes",
        obsValueType: "value_text",
        offset: "3",
        grid: { s: "9" },
        condition: (allFormValues) => {
          return allFormValues["Episiotomy/tear"] === "Yes" && allFormValues["Condition of episiotomy/tear"] === "infected and gaped" && allFormValues["Intervention on episiotomy/tear"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Are any of the postnatal complications present for the mother",
        name: "Postnatal complications",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "None",
            value: "none"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Anemia",
            value: "anemia"
          },
          {
            label: "Postpartum hemorrhage",
            value: "postpartum hemorrhage"
          },
          {
            label: "Pre-eclampsia",
            value: "pre-eclampsia"
          },
          {
            label: "Eclampsia",
            value: "eclampsia"
          },
          {
            label: "Breast engorgement",
            value: "breast engorgement"
          },
          {
            label: "Other complications",
            value: "Other complications"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify",
        offset: "1",
        grid: { s: "11" },
        name: "Other postnatal complications notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Postnatal complications"]?.includes("Other complications");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Was the intervention given for the complications?",
        name: "Interventions for complications",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Describe the intervention given?",
        name: "Intervention on complications notes",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (allFormValues) => {
          return allFormValues["Interventions for complications"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Vitamin A supplementation given?",
        name: "Vitamin A supplementation",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Breast feeding?",
        name: "Breast feeding",
        obsValueType: "value_coded",
        options: [
          {
            label: "Breastfed exclusively",
            value: "Breastfed exclusively"
          },
          {
            label: "Non exclusive",
            value: "non exclusive"
          },
          {
            label: "Not breastfeeding",
            value: "not breastfeeding"
          }
        ]
      }
    ];
  });
  return {
    otherExamsFormSection
  };
};

const _hoisted_1$3 = { class: "container" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OtherExamination",
  setup(__props, { expose: __expose }) {
    const { otherExamsFormSection } = useOtherExamsForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(otherExamsFormSection)
                }, null, 8, ["form-data"])
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

const useWardDangerSignsForm = () => {
  const wardDangerSignsFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        header: "Danger signs",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "Bleeding vaginally",
            value: "bleeding vaginally"
          },
          {
            label: "Central cyanosis",
            value: "central cyanosis"
          },
          {
            label: "Convulsions",
            value: "convulsions"
          },
          {
            label: "Severe vomiting",
            value: "severe vomiting"
          },
          {
            label: "Fever",
            value: "fever"
          },
          {
            label: "Visual disturbance",
            value: "visual disturbance"
          },
          {
            label: "Severe abdominal pain",
            value: "severe abdominal pain"
          },
          {
            label: "Unconscious",
            value: "unconscious"
          },
          {
            label: "Other danger signs",
            value: "Other danger signs"
          },
          {
            label: "No danger signs",
            value: "no danger signs",
            exclusive: true
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other danger signs notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Danger signs"]?.includes("Other danger signs");
        }
      }
    ];
  });
  return {
    wardDangerSignsFormSection
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DangerSigns",
  setup(__props, { expose: __expose }) {
    const { wardDangerSignsFormSection } = useWardDangerSignsForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(wardDangerSignsFormSection)
                }, null, 8, ["form-data"])
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

const _hoisted_1$1 = { class: "container" };
const _hoisted_2$1 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
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
                            createBaseVNode("div", _hoisted_2$1, [
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

const Vitals = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-81745058"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalWardMonitorMother",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const TABS = [
      { title: "Danger signs", icon: "" },
      { title: "Vitals", icon: "" },
      { title: "Other examinations", icon: "" }
    ];
    const COMPONENTS = [
      { name: "DangerSigns", component: _sfc_main$2 },
      { name: "Vitals", component: Vitals },
      { name: "OtherExamination", component: _sfc_main$3 }
    ];
    const componentRefs = ref([]);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => ({
      text: isSaving.value ? "Saving..." : "Finish",
      icon: isSaving.value ? "hourglassOutline" : "checkmark",
      hideText: false,
      hideIcon: false,
      disabled: isSaving.value
    }));
    const saveData = async () => {
      isSaving.value = true;
      try {
        for (const compRef of componentRefs.value) {
          if (compRef?.onSubmit) {
            await compRef.onSubmit();
          }
        }
        router.push("/anc/home");
      } catch (error) {
        console.error("Error saving data:", error);
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$4, {
                  ref: "wizard",
                  headingTitle: "Monitoring mother",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": TABS,
                  onChange: unref(onChangeCurrentTab),
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/pnc/home"))
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    (openBlock(), createElementBlock(Fragment, null, renderList(COMPONENTS, (comp, index) => {
                      return withDirectives(createVNode(resolveDynamicComponent(comp.component), {
                        key: comp.name,
                        ref_for: true,
                        ref: (el) => componentRefs.value[index] = el
                      }), [
                        [vShow, unref(currentTabIndex) === index]
                      ]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["doneButton", "onChange"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
