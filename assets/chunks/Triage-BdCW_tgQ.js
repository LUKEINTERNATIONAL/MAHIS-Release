import { c as computed, s as defineComponent, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, bd as IonCardContent, f as ref, aL as useRouter, ct as useRoute, w as watch, a2 as onMounted, aG as IonContent, C as createBaseVNode, bX as chevronBackOutline, S as withDirectives, T as vShow, H as createCommentVNode, bu as IonPage, ab as checkmarkOutline } from './vendor-6OQ3r7Vr.js';
import { s as storeToRefs } from './pinia-BATJJgGh.js';
import { y as StandardValidations, z as StandardForm, bm as useVitalsStore, u as useDemographicsStore, bn as useInvestigationStore, bc as useDiagnosisStore, b2 as useTreatmentPlanStore, bi as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, F as DynamicButton, a2 as getFieldValue, H as HisDate, b7 as getOfflineSavedUnsavedData, bo as MedicationSelectionHasValues, J as savePatientRecord, bp as resetNCDPatientData, t as toastWarning, aq as ConceptService, G as toastSuccess, bq as useAllegyStore, a6 as useUserStore, S as Service } from '../index-_KKpPwbo.js';
import { D as DemographicBar } from './DemographicBar-DYjxZmfc.js';
import { V as Vitals } from './Vitals-DGeEIxZM.js';
import { _ as _sfc_main$6 } from './LevelOfConsciousness.vue_vue_type_script_setup_true_lang-DHG0sNrV.js';
import { P as PresentingComplaints } from './PresentingComplaints-BUBQ8_cZ.js';
import { _ as _sfc_main$5 } from './Wizard.vue_vue_type_script_setup_true_lang-DAV2Efp0.js';
import { u as useComplicationsStore } from './ComplicationsStore-BQhBP5x9.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-B3x80W-e.js';
import { s as stageAllergies } from './treatment-whC85t03.js';
import { l as lodashExports } from './lodash-CuxQuz9v.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-BRHYHW4p.js';
import { u as useFormWizard } from './useFormWizard-XiOxEs-V.js';
import { u as usePatientProfile } from './usePatientProfile-SjXAcjGg.js';

const useAirWayBreathingForm = () => {
  const airWayBreathingFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Airway and Breathing",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "is Airway Compromised",
        name: "is_airway_compromised",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        header: "is Breathing Abnormal?",
        name: "is_breathing_abnormal",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Exhaustion and Inability to Speak",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Severe Respiratory dysfunction or exhaustion ",
        name: "severe_respiratory_dysfunction_or_exhaustion",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
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
      {
        componentType: "radioButtonField",
        header: "Inability to speak in complete sentences ",
        name: "inability_to_speak_in_complete_sentences",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
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
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Stridor and Reduced Consciousness",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Stridor",
        name: "stridor",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
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
      {
        componentType: "radioButtonField",
        header: "Reduced Level of Consciousness due to low oxygen",
        name: "reduced_level_of_consciousness_due_to_low_oxygen",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_breathing_abnormal"] === "Yes";
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
      }
    ];
  });
  return {
    airWayBreathingFormSection
  };
};

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AirwayBreathing",
  setup(__props) {
    const formRef = ref(null);
    const airWayBreathingForm = useAirWayBreathingForm().airWayBreathingFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(airWayBreathingForm),
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const useBloodCirculationForm = () => {
  const bloodCirculationFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Circulation",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is Circulation Abnormal",
        name: "is_circulation_abnormal",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Heart Rate and Pulse",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Heart Rate",
        name: "heart_rate",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        },
        options: [
          {
            label: "Weak/Thready",
            value: "Weak/Thready"
          },
          {
            label: "Strong",
            value: "Strong"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Pulse Rate",
        name: "pulse_rate",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        },
        options: [
          {
            label: "Irregular",
            value: "Irregular"
          },
          {
            label: "Regular",
            value: "Regular"
          }
        ]
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Reduced Urinary and Clammy Peripherals",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Reduced urinary output < 30ml/hr",
        name: "reduced_urinary_output_less_than_30ml_per_hr",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
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
      {
        componentType: "radioButtonField",
        header: "Cool clammy peripherals or cap refill > 4 seconds",
        name: "cool_clammy_peripherals_or_cap_refill_greater_than_4_seconds",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
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
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Hemorrhage and Skin Turgor",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Hemorrhage",
        name: "hemorrhage",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
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
      {
        componentType: "radioButtonField",
        header: "Dehydration skin turgor, sunken eyes",
        name: "dehydration_skin_turgor_sunken_eyes",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_circulation_abnormal"] === "Yes";
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
      }
    ];
  });
  return {
    bloodCirculationFormSection
  };
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BloodCirculation",
  setup(__props) {
    const formRef = ref(null);
    const bloodCirculationForm = useBloodCirculationForm().bloodCirculationFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(bloodCirculationForm),
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const useDisabilityForm = () => {
  const disabilityFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Consciousness",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Does the patient have a reduced Level of consciousness",
        name: "is_reduced_level_of_consciousness",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "8" },
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
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_reduced_level_of_consciousness"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Blood Glucose and GCS",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_reduced_level_of_consciousness"] === "Yes";
        }
      },
      {
        componentType: "inputField",
        header: "Blood Glucose",
        name: "blood_glucose",
        type: "number",
        grid: { s: "4" },
        disabled: (allFormValues) => {
          return true;
        },
        condition: (allFormValues) => {
          return allFormValues["is_reduced_level_of_consciousness"] === "Yes";
        }
      },
      {
        componentType: "inputField",
        header: "GCS",
        name: "gcs",
        type: "number",
        grid: { s: "4" },
        disabled: (allFormValues) => {
          return true;
        },
        condition: (allFormValues) => {
          return allFormValues["is_reduced_level_of_consciousness"] === "Yes";
        }
      }
    ];
  });
  return {
    disabilityFormSection
  };
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Disability",
  setup(__props) {
    const formRef = ref(null);
    const disabilityForm = useDisabilityForm().disabilityFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(disabilityForm),
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const usePersistentPainForm = () => {
  const persistentPainFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Seizures and Focal Neurologic",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Active Seizures",
        name: "active_seizures",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        header: "Focal neurologic findings",
        name: "focal_neurologic_findings",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        componentType: "Heading",
        name: "Headache and Weakness",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Headache",
        name: "headache",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        header: "Weakness",
        name: "weakness",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        componentType: "Heading",
        name: "Severe Pain and Confusion",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Severe Pain",
        name: "severe_pain",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
        header: "Confusion",
        name: "confusion",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "4" },
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
      { grid: { s: "4" } },
      {
        componentType: "radioButtonField",
        header: "moderate pain or a reason to be seen in under four hours",
        name: "moderate_pain_or_a_reason_to_be_seen_in_under_four_hours",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "8" },
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
  return {
    persistentPainFormSection
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PersistentPain",
  setup(__props) {
    const formRef = ref(null);
    const persistentPainForm = usePersistentPainForm().persistentPainFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(persistentPainForm),
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Triage",
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    usePatientProfile();
    const router = useRouter();
    const route = useRoute();
    const showWizard = ref(true);
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
    const vitalsStore = useVitalsStore();
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useDiagnosisStore();
    useTreatmentPlanStore();
    const ncdMedicationsStore = useNCDMedicationsStore();
    const generalStore = useGeneralStore();
    useOutcomeStore();
    const enrollmentStore = useEnrollementStore();
    const complicationsStore = useComplicationsStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { diagnosis } = storeToRefs(diagnosisStore);
    const { substance } = storeToRefs(enrollmentStore);
    const { selectedNCDMedicationList } = storeToRefs(ncdMedicationsStore);
    const { FootScreening, visualScreening, cvScreening } = storeToRefs(complicationsStore);
    const { sessionDate } = storeToRefs(configStore);
    const { apiStatus } = storeToRefs(useStatusStore());
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
        if (newOptions.disabled !== oldOptions?.disabled) {
          console.log(`Done button ${newOptions.disabled ? "disabled" : "enabled"}`);
        }
        if (newOptions.text !== oldOptions?.text) {
          console.log(`Done button text changed from "${oldOptions?.text}" to "${newOptions.text}"`);
        }
      },
      { deep: true }
    );
    watch(isSaving, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        console.log(`Saving state changed: ${oldValue} -> ${newValue}`);
        if (newValue) {
          console.log("Starting save process...");
        } else {
          console.log("Save process completed");
        }
      }
    });
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const openBackController = () => {
      router.push("/aetc/triage-list");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Presenting Complaints",
          icon: ""
        },
        {
          title: "Vital Signs",
          icon: ""
        },
        {
          title: "Level Of Consciousness",
          icon: ""
        },
        {
          title: "Airway/Breathing",
          icon: ""
        },
        {
          title: "Blood Circulation",
          icon: ""
        },
        {
          title: "Disability",
          icon: ""
        },
        {
          title: "Persistent Pain/Other Concerns",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const vitalsRef = ref(null);
    const riskAssessmentRef = ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Presenting Complaints":
          return "PresentingComplaints";
        case "Vital Signs":
          return "Vitals";
        case "Level Of Consciousness":
          return "LevelOfConsciousness";
        case "Airway/Breathing":
          return "AirwayBreathing";
        case "Blood Circulation":
          return "BloodCirculation";
        case "Disability":
          return "Disability";
        case "Persistent Pain/Other Concerns":
          return "Persistent";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Presenting Complaints":
                return "PresentingComplaints";
              case "Vital Signs":
                return "Vitals";
              case "Level Of Consciousness":
                return "LevelOfConsciousness";
              case "Airway/Breathing":
                return "Airway/Breathing";
              case "Blood Circulation":
                return "BloodCirculation";
              case "Disability":
                return "Disability";
              case "Persistent Pain/Other Concerns":
                return "Persistent";
            }
          }
          return null;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const cleanVitalForm = () => {
      const vitals2 = useVitalsStore();
      vitals2.setVitals(vitals2.getInitialVitals(patient.value.ID));
    };
    const markWizard = async () => {
      const sessionD = getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      const vitalsData = getOfflineSavedUnsavedData("vitals");
      for (let i = 0; i < tabs.value.length; i++) {
        const tab = tabs.value[i];
        if (tab.title === "Vital Signs") {
          tabs.value[i].icon = isDateInArray(sessionD, vitalsData) ? checkmarkOutline : "";
        } else if (tab.title === "Risk Assessment") {
          const substanceAbuseData = getOfflineSavedUnsavedData("substanceAbuse");
          tabs.value[i].icon = isDateInArray(sessionD, substanceAbuseData) ? checkmarkOutline : "";
        } else if (tab.title === "Investigations") {
          const labOrders = patient?.value?.labOrders?.saved;
          const filteredArray = labOrders?.filter((obj) => {
            return HisDate.toStandardHisFormat(sessionD) === HisDate.toStandardHisFormat(obj.order_date);
          });
          tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
        } else if (tab.title === "Diagnosis") {
          const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
          tabs.value[i].icon = isDateInArray(sessionD, diagnosisData) ? checkmarkOutline : "";
        } else if (tab.title === "Complications Screening") {
          const screeningData = getOfflineSavedUnsavedData("screening");
          tabs.value[i].icon = isDateInArray(sessionD, screeningData) ? checkmarkOutline : "";
        } else if (tab.title === "Treatment Plan") {
          if (selectedNCDMedicationList.value.length > 0) {
            tabs.value[i].icon = MedicationSelectionHasValues() ? checkmarkOutline : "";
          } else {
            tabs.value[i].icon = "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, diagnosisArray) => {
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return diagnosisArray.some((diagnosis2) => {
        const obsDate = new Date(diagnosis2.obs_datetime);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveComplications = async () => {
      const data = [];
      const childDataVisualScreening = await formatInputFiledData(visualScreening.value);
      const childDataFootScreening = await formatGroupRadioButtonData(FootScreening.value);
      const childDataCVRisk = await formatInputFiledData(cvScreening.value);
      if (childDataVisualScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Visual acuity", true),
          value_text: "visual acuity test",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataVisualScreening
        });
      }
      if (childDataFootScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Foot check", true),
          value_text: "foot screening",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataFootScreening
        });
      }
      if (childDataCVRisk.length > 0) {
        data.push(...childDataCVRisk);
      }
      if (data.length > 0) {
        (patient.value.screening ??= {}).unsaved ??= [];
        patient.value.screening.unsaved.push(...data);
        toastSuccess("Complications saved successfully");
      } else {
        toastWarning("No complications data to save");
      }
    };
    const saveTreatmentPlan = async () => {
      const allergyStore = useAllegyStore();
      if (!lodashExports.isEmpty(allergyStore.selectedMedicalAllergiesList)) {
        const userStore = useUserStore();
        const allergies = allergyStore.selectedMedicalAllergiesList.map((allergy) => ({
          concept_id: allergy.concept_id,
          obs_datetime: Service.getSessionDate(),
          value_coded: allergy.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: allergy.name
        }));
        const patientData2 = await stageAllergies(allergies);
        patient.value = Object.assign(patient.value, patientData2);
        console.log("Allergies staged successfully:", patient.value);
        allergyStore.clearSelectedMedicalAllergiesList();
      }
      const m_patientData = await createNCDDrugOrder();
      patient.value = Object.assign(patient.value, m_patientData);
      const patientData = await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      patient.value = Object.assign(patient.value, patientData);
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "Risk Assessment") {
        riskAssessmentRef.value?.onSubmit();
      }
      if (value == "Complications Screening") {
        await saveComplications();
      }
      if (value == "Treatment Plan") {
        await saveTreatmentPlan();
      }
      await savePatientRecord(patient.value);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await resetNCDPatientData();
        await savePatientRecord(patient.value);
        router.push("/aetc/triage-list");
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    onMounted(async () => {
      if (generalStore.NCDActivities.length === 0) {
        router.push("/patient-profile");
        return;
      }
      const data = useComplicationsStore();
      data.resetScreening();
      tabs.value = getActiveTabs();
      await markWizard();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      vitals,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        const data = useComplicationsStore();
        data.resetScreening();
        await markWizard();
      },
      { deep: true }
    );
    watch(
      sessionDate,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      investigations,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      diagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      substance,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedNCDMedicationList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        refreshWizard();
        cleanVitalForm();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (old, newData) => {
        if (old.ID != newData.ID) {
          refreshWizard();
          cleanVitalForm();
        }
      },
      { deep: true }
    );
    __expose({
      saveData,
      markWizard,
      refreshWizard,
      validateDoneButtonState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Triage",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to triage list",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PresentingComplaints, { ref: "presentingComplaintsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingComplaints"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Vitals, {
                        ref_key: "vitalsRef",
                        ref: vitalsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$6, { ref: "levelOfConsciousnessRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LevelOfConsciousness"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$4, { ref: "airwayBreathingRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "AirwayBreathing"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$3, { ref: "bloodCirculationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "BloodCirculation"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$2, { ref: "disabilityRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Disability"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$1, { ref: "persistentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Persistent"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
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
