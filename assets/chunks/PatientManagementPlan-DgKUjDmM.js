import { c as computed, v as defineComponent, z as openBlock, P as createBlock, G as unref, bL as IonCard, C as withCtx, B as createVNode, bc as IonCardContent, f as ref, aK as useRouter, cv as useRoute, w as watch, a3 as onMounted, aF as IonContent, D as createBaseVNode, bY as chevronBackOutline, T as withDirectives, U as vShow, J as createCommentVNode, bu as IonPage, ac as checkmarkOutline } from './vendor-Cbv9TWZo.js';
import { s as storeToRefs } from './pinia-C6LE2xz6.js';
import { z as StandardForm, n as icons, bl as useVitalsStore, u as useDemographicsStore, bm as useInvestigationStore, bb as useDiagnosisStore, b2 as useTreatmentPlanStore, bh as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, F as DynamicButton, a2 as getFieldValue, H as HisDate, b6 as getOfflineSavedUnsavedData, bn as MedicationSelectionHasValues, J as savePatientRecord, bo as resetNCDPatientData, t as toastWarning, aq as ConceptService, G as toastSuccess, bp as useAllegyStore, a6 as useUserStore, S as Service } from '../index-CbET1MAa.js';
import { D as DemographicBar } from './DemographicBar-BF0JWL5r.js';
import { _ as _sfc_main$4, u as useFormWizard } from './useFormWizard-BrIrlDIt.js';
import { u as useComplicationsStore } from './ComplicationsStore-CgRT3IAv.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-vb6HmIkQ.js';
import { s as stageAllergies } from './treatment-BPpIV_0m.js';
import { l as lodashExports } from './lodash-CxXqq_k7.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-BL2SnSwA.js';
import { u as usePatientProfile } from './usePatientProfile-BXv3J347.js';

const useNonPharmacologicalForm = () => {
  const nonPharmacologicalFormSection = computed(() => {
    return [
      { componentType: "Heading", name: "Procedures", grid: { s: "5" } },
      { grid: { s: "2" } },
      { componentType: "Heading", name: "Supportive Care", grid: { s: "5" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Minor Surgery",
        name: "minor_surgery",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Wound Dressing",
        name: "wound_dressing",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Suturing",
        name: "suturing",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Patient Education",
        name: "patient_education",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Joint Reduction",
        name: "joint_reduction",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Counselling",
        name: "counselling",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Fracture Reduction",
        name: "fracture_reduction",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Feeding",
        name: "feeding",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Intercostal Drain Insertion",
        name: "intercostal_drain_insertion",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Oxygenation",
        name: "oxygenation",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Pleurocentesis",
        name: "pleurocentesis",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Tepid Sponging",
        name: "tepid_sponging",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Pericardiocentesis",
        name: "pericardiocentesis",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Electrocardiography (ECG) Monitoring",
        name: "electrocardiography_monitoring",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Paracentesis",
        name: "paracentesis",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Turning Patients",
        name: "turning_patients",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Lumbar Puncture",
        name: "lumbar_puncture",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Oral Care",
        name: "oral_care",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Intravenous Cannulation",
        name: "intravenous_cannulation",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Other (Specify)",
        name: "supportive_care_other",
        grid: { s: "5" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Central Line Insertion",
        name: "central_line_insertion",
        grid: { s: "5" }
      },
      { grid: { s: "2" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Urethral Catheterization",
        name: "urethral_catheterization",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Suprapubic Catheterization",
        name: "suprapubic_catheterization",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Suctioning",
        name: "suctioning",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Oropharyngeal Airway Insertion",
        name: "oropharyngeal_airway_insertion",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Nasopharyngeal Airway Insertion",
        name: "nasopharyngeal_airway_insertion",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Laryngeal Mask Airway Insertion",
        name: "laryngeal_mask_airway_insertion",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Endotracheal Tube Insertion",
        name: "endotracheal_tube_insertion",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Nasogastric Tube Insertion",
        name: "nasogastric_tube_insertion",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Manual Ventilation",
        name: "manual_ventilation",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Continuous Positive Airway Pressure (CPAP)",
        name: "continuous_positive_airway_pressure",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Other (Specify)",
        name: "procedures_other",
        grid: { s: "12" }
      }
    ];
  });
  return {
    nonPharmacologicalFormSection
  };
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NonPharmacological",
  setup(__props) {
    const formRef = ref(null);
    const nonPharmacologicalForm = useNonPharmacologicalForm().nonPharmacologicalFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(nonPharmacologicalForm),
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

const usePharmacologicalForm = () => {
  const pharmacologicalFormSection = computed(() => {
    return [
      {
        componentType: "multiSelectInputField",
        header: "Medication Name",
        name: "medication_name",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Dextrose"
          },
          {
            id: 2,
            name: "Epinephrine"
          },
          {
            id: 3,
            name: "Atropine"
          },
          {
            id: 4,
            name: "Amiodarone"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Formulation",
        name: "formulation",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Solution"
          },
          {
            id: 2,
            name: "Powder"
          },
          {
            id: 3,
            name: "Capsule"
          },
          {
            id: 4,
            name: "Tablet"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Dose",
        name: "dose",
        grid: { s: "4" },
        initialUnit: "Years",
        unitOptions: [
          { label: "Grams (g)", value: "Grams (g)" },
          { label: "Milligrams (mg)", value: "Milligrams (mg)" },
          { label: "Micrograms (mcg)", value: "Micrograms (mcg)" },
          { label: "Units", value: "Units" }
        ],
        unitValidation: (unitValue) => {
          if (!unitValue || unitValue === "") {
            return "Please select a unit.";
          }
          return null;
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Frequency",
        name: "frequency",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Daily"
          },
          {
            id: 2,
            name: "Twice Daily"
          },
          {
            id: 3,
            name: "Three Times Daily"
          },
          {
            id: 4,
            name: "Four Times Daily"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Duration",
        name: "duration ",
        grid: { s: "4" },
        initialUnit: "hours",
        unitOptions: [
          { label: "Hours", value: "hours" },
          { label: "Days", value: "days" },
          { label: "Weeks", value: "weeks" },
          { label: "Months", value: "months" },
          { label: "Years", value: "years" }
        ],
        unitValidation: (unitValue) => {
          if (!unitValue || unitValue === "") {
            return "Please select a unit.";
          }
          return null;
        }
      }
    ];
  });
  return {
    pharmacologicalFormSection
  };
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Medication",
  setup(__props) {
    const formRef = ref(null);
    const pharmacologicalForm = usePharmacologicalForm().pharmacologicalFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(pharmacologicalForm),
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

const usePatientCareAreaForm = () => {
  const patientCareAreaFormSection = computed(() => {
    return [
      {
        header: "Select Patient Care Area",
        name: "patient_care_area",
        componentType: "radioButtonField",
        type: "inline",
        grid: { s: "8" },
        options: [
          {
            label: "Rescitation",
            value: "Rescitation"
          },
          {
            label: "Short Stay",
            value: "Short Stay"
          },
          {
            label: "Gynae Bench",
            value: "Gynae Bench"
          },
          {
            label: "Isolation Room",
            value: "Isolation Room"
          },
          {
            label: "Trauma",
            value: "Trauma"
          },
          {
            label: "Medical Bench",
            value: "Medical Bench"
          },
          {
            label: "Surgical Bench",
            value: "Surgical Bench"
          },
          {
            label: "SSW",
            value: "SSW"
          },
          {
            label: "Priority Area",
            value: "Priority Area"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      }
    ];
  });
  return {
    patientCareAreaFormSection
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PatientCareArea",
  setup(__props) {
    const formRef = ref(null);
    const bloodCirculationForm = usePatientCareAreaForm().patientCareAreaFormSection;
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
  __name: "PatientManagementPlan",
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
          title: "Non Pharmacological",
          icon: ""
        },
        {
          title: "Patient Care Area",
          icon: ""
        },
        {
          title: "Medication",
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
        case "Non Pharmacological":
          return "NonPharmacological";
        case "Patient Care Area":
          return "PatientCareArea";
        case "Medication":
          return "Medication";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Non Pharmacological":
                return "NonPharmacological";
              case "Patient Care Area":
                return "PatientCareArea";
              case "Medication":
                return "Medication";
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
                  headingTitle: "Patient Management Plan",
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
                      createVNode(_sfc_main$3, { ref: "nonPharmacologicalRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "NonPharmacological"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$1, { ref: "patientCareAreaRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PatientCareArea"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$2, { ref: "medicationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Medication"]
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
