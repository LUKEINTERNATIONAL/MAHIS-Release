import { s as defineComponent, a2 as onMounted, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, B as withCtx, F as unref, bc as IonCardContent, c as computed, f as ref, bK as IonCard, J as Fragment, aK as useRouter, O as createBlock, aF as IonContent, bX as chevronBackOutline, S as withDirectives, T as vShow, bt as IonPage } from './vendor-Wwszy5sF.js';
import { _ as _sfc_main$5 } from './Wizard.vue_vue_type_script_setup_true_lang-BZFuESOB.js';
import { z as StandardForm, C as useExposeFromStandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, n as icons, u as useDemographicsStore, y as StandardValidations, J as savePatientRecord, t as toastWarning, a0 as DrugService, T as Toolbar, F as DynamicButton } from '../index-DY89AFDi.js';
import { D as DemographicBar } from './DemographicBar-bNmRIImG.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-DIf5tVrH.js';
import { s as storeToRefs } from './pinia-BYnbfcrK.js';
import { u as useFormWizard } from './useFormWizard-BvRDETn8.js';

const _hoisted_1$3 = { class: "custom-card" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Diagnosis",
  setup(__props, { expose: __expose }) {
    const diagnoses = ref([]);
    const { formRef } = useExposeFromStandardForm();
    const iconsContent = icons;
    const getDiagnosis = async (value) => {
      const searchValue = value.trim().toLowerCase() || "";
      diagnoses.value = await PatientDiagnosisService.getDiagnosis(searchValue, 1, 15);
      return diagnoses.value;
    };
    const diagnosesForm = computed(
      () => [
        {
          componentType: "Heading",
          name: "Diagnosis"
        },
        {
          componentType: "checkboxField",
          type: "multiple",
          name: "Diagnosis",
          twoColumns: true,
          options: [
            { label: "Hypertension", value: "Hypertension" },
            { label: "Pre-eclampsia", value: "Pre-Eclampsia" },
            { label: "Pre-eclampsia with Severe Features", value: "severe pre-eclampsia" },
            { label: "HIV", value: "HIV" },
            { label: "Hepatitis B", value: "Hepatitis B" },
            { label: "Hepatitis C", value: "Hepatitis C" },
            { label: "Syphilis", value: "Syphilis" },
            { label: "None", value: "None", exclusive: true }
          ],
          obsValueType: "value_coded"
        },
        {
          name: "Other diagnosis",
          header: "Other Diagnosis",
          componentType: "multiSelectInputField",
          trackBy: "name",
          isMultiple: true,
          options: diagnoses.value,
          icon: iconsContent.search,
          onSearchChange: getDiagnosis,
          placeholder: "Search and select diagnosis",
          obsValueType: "value_coded",
          condition: (data) => {
            return !data["diagnosisCheckboxes"]?.includes("None");
          }
        }
      ]
    );
    onMounted(async () => {
      await getDiagnosis("");
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const diagnosis = await ObservationService.buildObsValues(data);
      if (diagnosis.length <= 0) return;
      await ObservationService.addObsToEncounterPatient(diagnosis, EncounterTypeId.DIAGNOSIS);
      toastSuccess("Diagnosis saved successful");
      return true;
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$3, [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: diagnosesForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const useMedicationDispensedForm = () => {
  const medicationDispensedForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Medication Dispensed"
      },
      // Aspirin Section
      {
        componentType: "radioButtonField",
        header: "Aspirin provided?",
        name: "Aspirin provided",
        obsValueType: "value_text",
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        unit: "mg",
        header: "Amount of daily aspirin provided until delivery",
        name: "Amount of daily aspirin provided",
        obsValueType: "value_numeric",
        grid: { s: "6" },
        condition: (data) => {
          return data["Aspirin provided"] === "Yes";
        }
      },
      { grid: { s: "5.5" } },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Reason aspirin not prescribed",
        name: "Reason aspirin not prescribed",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Aspirin provided"] === "No";
        },
        options: [
          {
            label: "Side effects",
            value: "Side effects"
          },
          {
            label: "Stock-out",
            value: "Stock-out"
          },
          {
            label: "Gestational less than 13 weeks",
            value: "Gestational less than 13 weeks"
          },
          {
            label: "Allergy to medication",
            value: "Allergy to medication"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "specify",
        name: "_Reason aspirin not prescribed",
        obsValueType: "value_text",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Aspirin provided"] === "No" && data["Reason aspirin not prescribed"] === "Other";
        }
      },
      { componentType: "Dashes" },
      // SP
      {
        componentType: "radioButtonField",
        header: "Sulfadoxine  Pyrimethamine (SP)",
        name: "SP",
        obsValueType: "value_text",
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        unit: "mg",
        header: "Number of tablets given",
        name: "number of SP tablets given",
        obsValueType: "value_numeric",
        grid: { s: "6" },
        condition: (data) => {
          return data["SP"] === "Yes";
        }
      },
      { componentType: "Dashes" },
      // Iron Section
      { grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Iron prescribed?",
        name: "Iron prescription",
        obsValueType: "value_text",
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Type of Iron supplement dosage provided",
        name: "Type of Iron supplement dosage",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Iron prescription"] === "Yes";
        },
        options: [
          {
            label: "Daily",
            value: "Daily"
          },
          {
            label: "Weekly",
            value: "Weekly"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        unit: "mg",
        header: "Amount of Iron provided till delivery in mg",
        name: "iron Amount",
        obsValueType: "value_numeric",
        grid: { s: "6" },
        condition: (data) => {
          return data["Iron prescription"] === "Yes";
        }
      },
      { grid: { s: "5.5" } },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Reason Iron was not prescribed",
        name: "Iron and folic acid not prescribed",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Iron prescription"] === "No";
        },
        options: [
          {
            label: "Side effects",
            value: "Side effects"
          },
          {
            label: "Client was referred",
            value: "Client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "specify",
        name: "_Iron and folic acid not prescribed",
        obsValueType: "value_text",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Iron prescription"] === "No" && data["Iron and folic acid not prescribed"] === "Other";
        }
      },
      { componentType: "Dashes" },
      // Folic Acid Section
      { grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Daily dose of folic acid prescribed?*",
        name: "Folic acid",
        obsValueType: "value_text",
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        unit: "mg",
        header: "Amount of Folic acid prescribed till delivery in mg",
        name: "Amount of Folic acid",
        obsValueType: "value_numeric",
        grid: { s: "6" },
        condition: (data) => {
          return data["Folic acid"] === "Yes";
        }
      },
      { grid: { s: "5.5" } },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Reason folic acid was not prescribed",
        name: "Folic acid not prescribed",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Folic acid"] === "No";
        },
        options: [
          {
            label: "Side effects",
            value: "Side effects"
          },
          {
            label: "Client was referred",
            value: "Client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "specify",
        name: "_Folic acid not prescribed",
        obsValueType: "value_text",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Folic acid"] === "No" && data["Folic acid not prescribed"] === "Other";
        }
      },
      { componentType: "Dashes" },
      // Vitamin A Section
      { grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Vitamin A prescribed?",
        name: "Vitamin A prescription",
        obsValueType: "value_text",
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Type of Vitamin A dosage provided",
        name: "Type of Vitamin A dosage",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Vitamin A prescription"] === "Yes";
        },
        options: [
          {
            label: "Daily",
            value: "Daily"
          },
          {
            label: "Weekly",
            value: "Weekly"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        unit: "mg",
        header: "Amount of Vitamin prescribed till delivery in mg",
        name: "Vitamin Amount",
        obsValueType: "value_numeric",
        grid: { s: "6" },
        condition: (data) => {
          return data["Vitamin A prescription"] === "Yes";
        }
      },
      { grid: { s: "5.5" } },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Reason vitamin A not prescribed",
        name: "vitamin A not prescribed",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Vitamin A prescription"] === "No";
        },
        options: [
          {
            label: "Side effects",
            value: "Side effects"
          },
          {
            label: "Stock-out",
            value: "Stock-out"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "Other (specify)",
        name: "_vitamin A not prescribed",
        obsValueType: "value_text",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Vitamin A prescription"] === "No" && data["vitamin A not prescribed"] === "Other";
        }
      },
      { componentType: "Dashes" },
      // ITN
      {
        componentType: "radioButtonField",
        header: "ITN Given?",
        name: "Insecticide treated net given",
        obsValueType: "value_text",
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
        ]
      },
      { componentType: "Dashes" },
      // ART
      {
        componentType: "radioButtonField",
        header: "HIV Positive?",
        name: "HIV Positive",
        obsValueType: "value_text",
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "ARVs Given?",
        name: "ARV drugs received",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["HIV Positive"] === "Yes";
        },
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
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "CPT Given?",
        name: "CPT given",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["HIV Positive"] === "Yes";
        },
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
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Nevirapine syrup Given?",
        name: "Nevirapine syrup given",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["HIV Positive"] === "Yes";
        },
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
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "Nevirapine syrup in (MLs) volume MLs ",
        name: "Nevirapine syrup in (MLs) volume MLs",
        obsValueType: "value_text",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Nevirapine syrup given"] === "Yes" && data["HIV Positive"] === "Yes";
        }
      }
    ];
  });
  return {
    medicationDispensedForm
  };
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MedicationDispensed",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { formRef } = useExposeFromStandardForm();
    const { medicationDispensedForm } = useMedicationDispensedForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const result = await ObservationService.buildSaveObs(data, EncounterTypeId.TREATMENT);
      if (!result) return;
      toastSuccess("Medications successfully saved.");
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(IonCard), { style: { "contain": "unset" } }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: unref(medicationDispensedForm),
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
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

const useDewormingMalariaForm = () => {
  const dewormingForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Deworming"
      },
      // Antihelminthic Treatment Section
      {
        componentType: "radioButtonField",
        header: "Was preventative antihelminthic treatment provided?",
        name: "antihelminthic treatment",
        obsValueType: "value_coded",
        validation: StandardValidations.required,
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Preventative antihelminthic treatment provided",
        name: "antihelminthic treatment provided",
        obsValueType: "value_coded",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["antihelminthic treatment"] === "Yes";
        },
        options: [
          {
            label: "Single-dose albendazole 400mg",
            value: "Albendazole (400mg tablet)"
          },
          {
            label: "Single-dose albendazole 500mg",
            value: "Albendazole (500mg tablet)"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Reason no preventative treatment provided",
        name: "no preventative treatment provided",
        obsValueType: "value_coded",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["antihelminthic treatment"] === "No";
        },
        options: [
          {
            label: "Client was referred",
            value: "Client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "specify",
        name: "_no preventative treatment provided",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        grid: { s: "11.5" },
        condition: (data) => {
          return data["antihelminthic treatment"] === "No" && data["no preventative treatment provided"] === "Other";
        }
      }
      // Malaria Prevention Section
    ];
  });
  const malariaForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Malaria"
      },
      // Malaria Prevention Section
      { grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        header: "Was counselling on malaria prevention conducted",
        name: "counselling on malaria prevention",
        obsValueType: "value_coded",
        validation: StandardValidations.required,
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Reason no counselling on malaria prevention was not conducted",
        name: "counselling on malaria prevention not conducted",
        obsValueType: "value_coded",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["counselling on malaria prevention"] === "No";
        },
        options: [
          {
            label: "Client was referred",
            value: "Client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "Other (Specify)",
        name: "_counselling on malaria prevention not conducted",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        grid: { s: "11.5" },
        condition: (data) => {
          return data["counselling on malaria prevention"] === "No" && data["counselling on malaria prevention not conducted"] === "Other";
        }
      }
    ];
  });
  return {
    malariaForm,
    dewormingForm
  };
};

const _hoisted_1$2 = {
  class: "custom-card",
  style: { "margin-bottom": "10px" }
};
const _hoisted_2$2 = { class: "custom-card" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DewormingMalaria",
  setup(__props, { expose: __expose }) {
    const DRUG_MAPPINGS = {
      "Albendazole (400mg tablet)": 107,
      "Albendazole (500mg tablet)": 1321
    };
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const dewormingFormRef = ref(null);
    const malariaFormRef = ref(null);
    const { dewormingForm, malariaForm } = useDewormingMalariaForm();
    const validateAndGetFormData = (formRef) => {
      if (!formRef.value) return null;
      const isValid = formRef.value.validateForm() === null;
      if (!isValid) return null;
      return formRef.value.getFormValues();
    };
    const saveObservationData = async (data, encounterType, successMessage) => {
      const buildData = await ObservationService.buildObsValues(data);
      if (buildData.length > 0) {
        await ObservationService.addObsToEncounterPatient(buildData, encounterType);
        toastSuccess(successMessage);
        return true;
      }
      return false;
    };
    const addDrugOrder = async (drugName, drugId) => {
      const drugOrders = await DrugService.buildDrugDispense(drugName, drugId);
      patient.value.MedicationOrder ??= {};
      patient.value.MedicationOrder.unsaved ??= [];
      patient.value.MedicationOrder.unsaved.push(drugOrders);
      toastSuccess(`Medication ${drugName} added successfully`);
    };
    const handleNoDewormingTreatment = async (dewormingData) => {
      const saved = await saveObservationData(dewormingData, EncounterTypeId.TREATMENT, "Deworming data saved successful");
      if (!saved) {
        toastWarning("Deworming data is not saved");
      }
    };
    const handleDewormingWithTreatment = async (drugName) => {
      const drugId = DRUG_MAPPINGS[drugName];
      if (drugId) {
        await addDrugOrder(drugName, drugId);
      } else {
        toastWarning(`Unknown drug: ${drugName}`);
      }
    };
    const saveDrugData = async () => {
      const dewormingData = validateAndGetFormData(dewormingFormRef);
      if (!dewormingData) {
        toastWarning("Deworming data is not saved");
        return;
      }
      const treatmentProvided = dewormingData["antihelminthic treatment"];
      const drugName = dewormingData["antihelminthic treatment provided"];
      if (treatmentProvided === "No") {
        await handleNoDewormingTreatment(dewormingData);
      } else if (drugName) {
        await handleDewormingWithTreatment(drugName);
      } else {
        toastWarning("Deworming data is not saved");
      }
    };
    const saveMalariaData = async () => {
      const malariaData = validateAndGetFormData(malariaFormRef);
      if (!malariaData) {
        toastWarning("Malaria counselling data is not saved");
        return;
      }
      const saved = await saveObservationData(malariaData, EncounterTypeId.TREATMENT, "Malaria counselling saved successful");
      if (!saved) {
        toastWarning("Malaria counselling data is not saved");
      }
    };
    const onSubmit = async () => {
      await Promise.all([saveDrugData(), saveMalariaData()]);
      await savePatientRecord(patient.value);
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(dewormingForm),
                ref_key: "dewormingFormRef",
                ref: dewormingFormRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(malariaForm),
                ref_key: "malariaFormRef",
                ref: malariaFormRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});

const useImmunizationForm = () => {
  const TDVForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "TDV Vaccination"
      },
      // Hep B Counselling Section
      {
        componentType: "radioButtonField",
        header: "New dose of TDV given?",
        name: "TDV",
        obsValueType: "value_text",
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
        ]
      }
    ];
  });
  const hepatitisForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Hepatitis Vaccination"
      },
      // Hep B Counselling Section
      {
        componentType: "radioButtonField",
        header: "Hepatitis B vaccine given?",
        name: "Hepatitis B vaccine given?",
        obsValueType: "value_text",
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
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Hepatitis B vaccine given",
        name: "Hepatitis B vaccine given",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Hepatitis B vaccine given?"] === "Yes";
        },
        options: [
          {
            label: "Dose 1",
            value: "Dose 1"
          },
          {
            label: "Dose 2",
            value: "Dose 2"
          },
          {
            label: "Dose 3",
            value: "Dose 3"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "dateInputField",
        header: "Hep B-2 Date",
        name: "Hep B-2 Date",
        obsValueType: "value_datetime",
        placeholder: "Pick the date",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Hepatitis B vaccine given?"] === "Yes";
        }
      },
      // Reason Hepatitis B vaccination not conducted
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Reason Hepatitis B vaccination not conducted",
        name: "Reason Hepatitis B vaccination not conducted",
        obsValueType: "value_text",
        type: "inline",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Hepatitis B vaccine given?"] === "No";
        },
        options: [
          {
            label: "Stockout",
            value: "Stockout"
          },
          {
            label: "Client is ill",
            value: "Client is ill"
          },
          {
            label: "Client refused",
            value: "Client refused"
          },
          {
            label: "Allergy to vaccinate",
            value: "Allergy to vaccinate"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "0.5" } },
      {
        componentType: "inputField",
        header: "specify",
        name: "Hepatitis B not conducted (Other)",
        obsValueType: "value_text",
        grid: { s: "11.5" },
        condition: (data) => {
          return data["Hepatitis B vaccine given?"] === "No" && data["Hepatitis B vaccination not conducted"] === "Other";
        }
      }
    ];
  });
  return {
    TDVForm,
    hepatitisForm
  };
};

const _hoisted_1$1 = { style: { "margin-bottom": "10px" } };
const _hoisted_2$1 = { class: "custom-card" };
const _hoisted_3 = { class: "custom-card" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Immunization",
  setup(__props, { expose: __expose }) {
    const { TDVForm, hepatitisForm } = useImmunizationForm();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const TDVFormRef = ref(null);
    const hepatitisFormRef = ref(null);
    const addDrugOrder = async (drugName, drugId) => {
      const drugOrders = await DrugService.buildDrugDispense(drugName, drugId);
      patient.value.MedicationOrder ??= {};
      patient.value.MedicationOrder.unsaved ??= [];
      patient.value.MedicationOrder.unsaved.push(drugOrders);
      toastSuccess(`Medication ${drugName} added successfully`);
    };
    const saveHepatitis = async () => {
      const hepatitisData = hepatitisFormRef.value?.getFormValues();
      if (hepatitisData["Hepatitis B vaccine given?"] == "Yes" && hepatitisData["Hepatitis B vaccine given"]) {
        await addDrugOrder("DPT-HepB-Hib_vac", 1288);
      } else {
        const result = await ObservationService.buildSaveObs(hepatitisData, EncounterTypeId.TREATMENT);
        if (!result) return;
        toastSuccess("Hepatitis B Immunization data successfully saved.");
      }
    };
    const onSubmit = async () => {
      TDVFormRef.value?.getFormValues();
      await saveHepatitis();
      await savePatientRecord(patient.value);
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: unref(TDVForm),
                  ref_key: "TDVFormRef",
                  ref: TDVFormRef
                }, null, 8, ["formData"])
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: unref(hepatitisForm),
                  ref_key: "hepatitisFormRef",
                  ref: hepatitisFormRef
                }, null, 8, ["formData"])
              ]),
              _: 1
            })
          ])
        ])
      ], 64);
    };
  }
});

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ANCDiagnosisTreatment",
  setup(__props) {
    const router = useRouter();
    const diagnosisRef = ref(null);
    const medicationDispensedRef = ref(null);
    const immunizationRef = ref(null);
    const dewormingMalariaRef = ref(null);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const openBackController = () => {
      router.push("/anc/home");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Diagnosis",
          icon: ""
        },
        {
          title: "Medication dispensed",
          icon: ""
        },
        {
          title: "Immunization",
          icon: ""
        },
        {
          title: "Deworming & Malaria",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const currentTab = tabs.value[currentTabIndex.value]?.title;
      switch (currentTab) {
        case "Diagnosis":
          return "Diagnosis";
        case "Medication dispensed":
          return "MedicationDispensed";
        case "Immunization":
          return "Immunization";
        case "Deworming & Malaria":
          return "DewormingMalaria";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [{ ref: diagnosisRef }, { ref: medicationDispensedRef }, { ref: immunizationRef }, { ref: dewormingMalariaRef }];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error(`Error calling  onSubmit:`, error);
          }
        }
      }
      router.push("/anc/home");
    };
    onMounted(async () => {
      tabs.value = getActiveTabs();
      currentTabIndex.value = 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$5, {
                  ref: "wizard",
                  headingTitle: "Diagnosis and Treatment",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
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
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$4, {
                        ref_key: "diagnosisRef",
                        ref: diagnosisRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Diagnosis"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        ref_key: "medicationDispensedRef",
                        ref: medicationDispensedRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "MedicationDispensed"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$1, {
                        ref_key: "immunizationRef",
                        ref: immunizationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Immunization"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$2, {
                        ref_key: "dewormingMalariaRef",
                        ref: dewormingMalariaRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DewormingMalaria"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "onChange"])
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
