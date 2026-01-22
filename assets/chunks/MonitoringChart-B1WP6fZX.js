import { c as computed, v as defineComponent, z as openBlock, P as createBlock, G as unref, bL as IonCard, C as withCtx, B as createVNode, A as createElementBlock, S as renderList, D as createBaseVNode, J as createCommentVNode, K as Fragment, bc as IonCardContent, f as ref, y as resolveComponent, a6 as createTextVNode, aK as useRouter, cv as useRoute, w as watch, a3 as onMounted, aF as IonContent, bY as chevronBackOutline, T as withDirectives, U as vShow, bu as IonPage, ac as checkmarkOutline } from './vendor-Cbv9TWZo.js';
import { s as storeToRefs } from './pinia-C6LE2xz6.js';
import { n as icons, z as StandardForm, F as DynamicButton, bl as useVitalsStore, u as useDemographicsStore, bm as useInvestigationStore, bb as useDiagnosisStore, b2 as useTreatmentPlanStore, bh as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, a2 as getFieldValue, H as HisDate, b6 as getOfflineSavedUnsavedData, bn as MedicationSelectionHasValues, J as savePatientRecord, bo as resetNCDPatientData, t as toastWarning, aq as ConceptService, G as toastSuccess, bp as useAllegyStore, a6 as useUserStore, S as Service } from '../index-h_ZjCz7k.js';
import { D as DemographicBar } from './DemographicBar-Bg981Mbl.js';
import { R as ReusableDataTable } from './ReusableDataTable-DrDACQD0.js';
import { u as useBloodPressureForm, a as useTemperaturePulseRateForm, b as useRespiratoryRateOxygenForm } from './useRespiratoryRateOxygenForm-CXEnVXE9.js';
import { _ as _sfc_main$4, u as useFormWizard } from './useFormWizard-BrIrlDIt.js';
import { u as useComplicationsStore } from './ComplicationsStore-CgRT3IAv.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-xO_0KmOJ.js';
import { s as stageAllergies } from './treatment-Dr4z3Cgq.js';
import { l as lodashExports } from './lodash-CxXqq_k7.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-D-wY6nJ0.js';
import { u as usePatientProfile } from './usePatientProfile-D4zbtie-.js';

const useInterventionsForm = () => {
  const interventionsFormSection = computed(() => {
    return [
      {
        componentType: "multiSelectInputField",
        header: "Airway intervention(s)",
        name: "airway_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Positioning"
          },
          {
            id: 2,
            name: "Suctioning"
          },
          {
            id: 3,
            name: "Airway Adjuncts"
          },
          {
            id: 4,
            name: "Advanced Airway"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Breathing intervention(s)",
        name: "breathing_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Oxygen Therapy"
          },
          {
            id: 2,
            name: "Inhaled Medications"
          },
          {
            id: 3,
            name: "Chest Decompression"
          },
          {
            id: 4,
            name: "Mechanical Ventilation"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Circulation intervention(s)",
        name: "circulation_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "IV/IO Access"
          },
          {
            id: 2,
            name: "Fluid Resuscitation"
          },
          {
            id: 3,
            name: "Medications"
          },
          {
            id: 4,
            name: "Blood Products"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Disability intervention(s)",
        name: "disability_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Blood Glucose Administration"
          },
          {
            id: 2,
            name: "Seizure Management"
          },
          {
            id: 3,
            name: "Pain Management"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Exposure intervention(s)",
        name: "exposure_interventions",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Warming Measures"
          },
          {
            id: 2,
            name: "Cooling Measures"
          },
          {
            id: 3,
            name: "Thermal Protection"
          },
          {
            id: 4,
            name: "Electrical Protection"
          }
        ]
      }
    ];
  });
  const fluidsFormSection = computed(() => {
    return [
      { componentType: "Dashes" },
      {
        componentType: "multiSelectInputField",
        header: "Intake Fluid Type",
        name: "intake_fluid_type",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        grid: { s: "4" },
        options: [
          {
            id: 1,
            name: "Normal Saline"
          },
          {
            id: 2,
            name: "Ringer's Lactate"
          },
          {
            id: 3,
            name: "Dextrose Solution"
          },
          {
            id: 4,
            name: "Blood Products"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Output Fluid Type",
        name: "output_fluid_type",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        grid: { s: "4" },
        options: [
          {
            id: 1,
            name: "Urine"
          },
          {
            id: 2,
            name: "Vomitus"
          },
          {
            id: 3,
            name: "Drainage"
          },
          {
            id: 4,
            name: "Blood Loss"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Fluid Balance",
        name: "fluid_balance",
        unit: "ml",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Intake Fluid Amount",
        name: "intake_fluid_amount",
        unit: "ml",
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Output Fluid Amount",
        name: "output_fluid_amount",
        unit: "ml",
        grid: { s: "4" }
      }
    ];
  });
  return {
    fluidsFormSection,
    interventionsFormSection
  };
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Interventions",
  setup(__props) {
    const fluidFormRefs = ref([]);
    const interventionsForm = useInterventionsForm().interventionsFormSection;
    const fluidsFormTemplate = useInterventionsForm().fluidsFormSection;
    const fluidEntries = ref([computed(() => fluidsFormTemplate.value)]);
    const setFormRef = (el, index) => {
      if (el) {
        fluidFormRefs.value[index] = el;
      }
    };
    const addFluidEntry = () => {
      fluidEntries.value.push(computed(() => fluidsFormTemplate.value));
    };
    const removeFluidEntry = (index) => {
      if (fluidEntries.value.length > 1) {
        fluidEntries.value.splice(index, 1);
        fluidFormRefs.value.splice(index, 1);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(interventionsForm),
                ref: "formRef"
              }, null, 8, ["formData"]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(fluidEntries.value, (fluidEntry, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  style: { "display": "flex", "align-items": "center" }
                }, [
                  createVNode(StandardForm, {
                    formData: fluidEntry.value,
                    ref_for: true,
                    ref: (el) => setFormRef(el, index)
                  }, null, 8, ["formData"]),
                  createBaseVNode("div", null, [
                    createVNode(DynamicButton, {
                      onClick: ($event) => removeFluidEntry(index),
                      fill: "clear",
                      icon: unref(icons).minus,
                      disabled: fluidEntries.value.length === 1
                    }, null, 8, ["onClick", "icon", "disabled"]),
                    index === fluidEntries.value.length - 1 ? (openBlock(), createBlock(DynamicButton, {
                      key: 0,
                      onClick: _cache[0] || (_cache[0] = ($event) => addFluidEntry()),
                      fill: "clear",
                      icon: unref(icons).plus
                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Medications",
  setup(__props) {
    const headers = ["Medication", "Name", "Dose", "Frequency", "Duration", "Formulation", "Prescriber"];
    const tableOptions = {
      responsive: true,
      ordering: false,
      layout: {
        topStart: "buttons",
        topEnd: "",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      buttons: [
        {
          text: " <b> Print Medication </b>",
          className: "add-test text-white",
          action: async () => {
          }
        }
      ]
    };
    const tableData = [
      ["Antibiotic", "Amoxicillin", "500 mg", "3 times a day", "7 days", "Capsule", "Dr. Smith"],
      ["Analgesic", "Paracetamol", "650 mg", "4 times a day", "5 days", "Tablet", "Dr. Johnson"],
      ["Antihypertensive", "Lisinopril", "10 mg", "Once daily", "30 days", "Tablet", "Dr. Lee"]
    ];
    return (_ctx, _cache) => {
      const _component_ion_card_title = resolveComponent("ion-card-title");
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(_component_ion_card_title, null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Prescribed Medication", -1)
                ])]),
                _: 1
              }),
              createVNode(ReusableDataTable, {
                data: tableData,
                headers,
                options: tableOptions
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const bloodPressureForm = useBloodPressureForm();
const temperaturePulseRateForm = useTemperaturePulseRateForm();
const respiratoryRateOxygenForm = useRespiratoryRateOxygenForm();
const vitalsForm = computed(() => {
  const mergedForm = [
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
const useObservationsForm = () => {
  const observationFormSection = computed(() => {
    return [
      ...vitalsForm.value,
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Random Blood Glucose (RBG)",
        name: "random_blood_glucose",
        unit: "mg/dL"
      },
      {
        componentType: "inputField",
        header: "Urine Dipstick - Ketones",
        name: "urine_dipstick_ketones"
      },
      {
        componentType: "multiSelectInputField",
        header: "AVPU Scale",
        name: "avpu_scale",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Alert"
          },
          {
            id: 2,
            name: "Verbal Response"
          },
          {
            id: 3,
            name: "Pain Response"
          },
          {
            id: 4,
            name: "Unresponsive"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Peak Expiratory Flow Rate (PEFR)",
        name: "peak_expiratory_flow_rate",
        unit: "L/min"
      }
    ];
  });
  return {
    observationFormSection
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Observations",
  setup(__props) {
    const formRef = ref(null);
    const bloodCirculationForm = useObservationsForm().observationFormSection;
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

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MonitoringChart",
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
      router.push("/patient-profile");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Observations",
          icon: ""
        },
        {
          title: "Interventions",
          icon: ""
        },
        {
          title: "Medications",
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
        case "Observations":
          return "Observations";
        case "Interventions":
          return "Interventions";
        case "Medications":
          return "Medications";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Observations":
                return "Observations";
              case "Interventions":
                return "Interventions";
              case "Medications":
                return "Medications";
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
                showWizard.value ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Monitoring Chart",
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
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$1, { ref: "observationsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Observations"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$3, { ref: "interventionsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Interventions"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$2, { ref: "medicationsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Medications"]
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
