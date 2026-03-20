import { c as computed, s as defineComponent, y as openBlock, O as createBlock, F as unref, bM as IonCard, B as withCtx, A as createVNode, be as IonCardContent, f as ref, aM as useRouter, bN as useRoute, w as watch, a3 as onMounted, aH as IonContent, C as createBaseVNode, b_ as chevronBackOutline, T as withDirectives, U as vShow, H as createCommentVNode, bw as IonPage, ab as checkmarkOutline } from './vendor-D71W8bKc.js';
import { s as storeToRefs } from './pinia-BqgWZabu.js';
import { z as StandardForm, bi as useVitalsStore, u as useDemographicsStore, bj as useInvestigationStore, bk as useDiagnosisStore, b2 as useTreatmentPlanStore, be as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, ab as useConfigStore, f as useStatusStore, T as Toolbar, F as DynamicButton, a3 as getFieldValue, H as HisDate, bl as getOfflineSavedUnsavedData, bm as MedicationSelectionHasValues, J as savePatientRecord, bn as resetNCDPatientData, t as toastWarning, M as ConceptService, G as toastSuccess, bo as useAllegyStore, a7 as useUserStore, S as Service } from '../index-BP4dlxwX.js';
import { D as DemographicBar } from './DemographicBar-DBpHotyO.js';
import { _ as _sfc_main$2, u as useFormWizard } from './useFormWizard-PYQfTE77.js';
import { u as useComplicationsStore } from './ComplicationsStore-hyJUPdNS.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-VxWev4AE.js';
import { s as stageAllergies } from './treatment-B7vRDNWu.js';
import { l as lodashExports } from './lodash-CtwTU3E5.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-B9dTERo-.js';
import { u as usePatientProfile } from './usePatientProfile-k28P9Pva.js';
import { _ as _sfc_main$3, C as CirculationAssessment, D as DisabilityAssessment, E as ExposureAssessment } from './ExposureAssessment-XmZ322iz.js';

const useAirwayAssessmentForm = () => {
  const airwayThreatenedReasons = [
    { id: 1, name: "Secretions - blood, vomit, other" },
    { id: 2, name: "Tongue swelling" },
    { id: 3, name: "Neck swelling" },
    { id: 4, name: "Neck haematoma" },
    { id: 5, name: "Tongue falling back" },
    { id: 6, name: "Other" }
  ];
  const airwayInterventionsList = [
    { id: 1, name: "Suctioning Done" },
    { id: 2, name: "Jaw thrust manoeuver" },
    { id: 3, name: "Head tilt/chin lift" },
    { id: 4, name: "Airway adjunct (Oropharyngeal airway and size / nasopharyngeal airway)" },
    { id: 5, name: "Laryngeal mask airway (LMA) insertion" },
    { id: 6, name: "Endotracheal intubation" },
    { id: 7, name: "Performed Cricothyroidotomy(Surgical Airway)" },
    { id: 8, name: "Performed tracheostomy" }
  ];
  const airwayAssessmentFormSection = computed(() => {
    return [
      // Airway Patent Section
      {
        componentType: "Heading",
        name: "Airway Patent",
        grid: { s: "4" }
      },
      {
        componentType: "radioButtonField",
        header: "Is Airway Patent?",
        name: "is_airway_patent",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Threatened", value: "Threatened" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Is Patient Injured?",
        name: "is_patient_injured",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4", md: "4" },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // Airway Threatened Reason (conditional)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No";
        }
      },
      {
        componentType: "Heading",
        name: "Airway Threatened Details",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No";
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Reason for Airway Threat",
        isMultiple: true,
        trackBy: "id",
        name: "airway_threatened_reason",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: airwayThreatenedReasons,
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No";
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "inputField",
        header: "Specify Other Reason",
        name: "other_reason",
        obsValueType: "value_text",
        grid: { s: "8" },
        condition: (allFormValues) => {
          const reasons = allFormValues["airway_threatened_reason"];
          return (allFormValues["is_airway_patent"] === "Threatened" || allFormValues["is_airway_patent"] === "No") && Array.isArray(reasons) && reasons.some((r) => r.id === 6);
        }
      },
      // Neck Collar and Head Blocks (conditional on patient injured)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        }
      },
      {
        grid: { s: "4" }
      },
      {
        componentType: "Alert",
        header: "Please stabilize the C-Spine",
        backgroundColor: "skyblue",
        value: "Please stabilize the C-Spine",
        grid: { s: "8" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        }
      },
      {
        componentType: "Heading",
        name: "Neck Collar and Head Blocks",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Neck Collar Applied",
        name: "neck_collar_applied",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Not Indicated", value: "Not Indicated" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Head Blocks Applied",
        name: "head_blocks_applied",
        obsValueType: "value_text",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_patient_injured"] === "Yes";
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      // Interventions Section (conditional)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened";
        }
      },
      {
        componentType: "Heading",
        name: "Interventions",
        grid: { s: "4" },
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened";
        }
      },
      {
        componentType: "multiSelectInputField",
        isMultiple: true,
        trackBy: "id",
        header: "Airway Opening Intervention",
        name: "airway_opening_intervention",
        obsValueType: "value_text",
        grid: { s: "8" },
        options: airwayInterventionsList,
        condition: (allFormValues) => {
          return allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened";
        }
      },
      // Airway Size Fields (conditional on oropharyngeal intervention)
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        }
      },
      {
        componentType: "Heading",
        name: "Airway Size",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Nasopharyngeal Airway Size (CM)",
        name: "nasopharyngeal_airway_size",
        obsValueType: "value_numeric",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        },
        options: [
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "7", value: "7" },
          { label: "8", value: "8" },
          { label: "9", value: "9" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Oropharyngeal Airway Size (MM)",
        name: "oropharyngeal_airway_size",
        obsValueType: "value_numeric",
        type: "standard",
        grid: { s: "4" },
        condition: (allFormValues) => {
          const interventions = allFormValues["airway_opening_intervention"];
          return (allFormValues["is_airway_patent"] === "No" || allFormValues["is_airway_patent"] === "Threatened") && Array.isArray(interventions) && interventions.some((i) => i.id === 4);
        },
        options: [
          { label: "80", value: "80" },
          { label: "90", value: "90" },
          { label: "100", value: "100" },
          { label: "110", value: "110" },
          { label: "120", value: "120" }
        ]
      }
    ];
  });
  return {
    airwayAssessmentFormSection
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AirwayAssessment",
  setup(__props) {
    const formRef = ref(null);
    const airwayBreathingForm = useAirwayAssessmentForm().airwayAssessmentFormSection;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: unref(airwayBreathingForm),
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
  __name: "PrimarySurvey",
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
          title: "Airway Assessment",
          icon: ""
        },
        {
          title: "Breathing Assessment",
          icon: ""
        },
        {
          title: "Circulation Assessment",
          icon: ""
        },
        {
          title: "Disability Assessment",
          icon: ""
        },
        {
          title: "Exposure Assessment",
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
        case "Airway Assessment":
          return "AirwayAssessment";
        case "Breathing Assessment":
          return "BreathingAssessment";
        case "Circulation Assessment":
          return "CirculationAssessment";
        case "Disability Assessment":
          return "DisabilityAssessment";
        case "Exposure Assessment":
          return "ExposureAssessment";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Airway Assessment":
                return "AirwayAssessment";
              case "Breathing Assessment":
                return "BreathingAssessment";
              case "Circulation Assessment":
                return "CirculationAssessment";
              case "Disability Assessment":
                return "DisabilityAssessment";
              case "Exposure Assessment":
                return "ExposureAssessment";
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
                showWizard.value ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Primary Survey",
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
                      createVNode(_sfc_main$1, { ref: "airwayAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "AirwayAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$3, { ref: "breathingAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "BreathingAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(CirculationAssessment, { ref: "circulationAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "CirculationAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(DisabilityAssessment, { ref: "disabilityAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DisabilityAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ExposureAssessment, { ref: "exposureAssessmentRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ExposureAssessment"]
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
