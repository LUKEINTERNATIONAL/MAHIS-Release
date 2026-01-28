import { s as defineComponent, aK as useRouter, cu as useRoute, w as watch, a2 as onMounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aF as IonContent, C as createBaseVNode, bX as chevronBackOutline, S as withDirectives, T as vShow, H as createCommentVNode, bt as IonPage, f as ref, c as computed, ab as checkmarkOutline } from './vendor-BIA1Qh8a.js';
import { s as storeToRefs } from './pinia-BgytB2RM.js';
import { bl as useVitalsStore, u as useDemographicsStore, bm as useInvestigationStore, bb as useDiagnosisStore, b2 as useTreatmentPlanStore, bh as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, F as DynamicButton, a2 as getFieldValue, H as HisDate, b6 as getOfflineSavedUnsavedData, bn as MedicationSelectionHasValues, J as savePatientRecord, bo as resetNCDPatientData, t as toastWarning, aq as ConceptService, G as toastSuccess, bp as useAllegyStore, a6 as useUserStore, S as Service } from '../index-Di5vEYU2.js';
import { D as DemographicBar } from './DemographicBar-Df6cee9n.js';
import { _ as _sfc_main$1 } from './Wizard.vue_vue_type_script_setup_true_lang-DD9LQwFF.js';
import { u as useComplicationsStore } from './ComplicationsStore-Duicvjh1.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-BJv4FSBC.js';
import { s as stageAllergies } from './treatment-Dto5YjKK.js';
import { l as lodashExports } from './lodash-IJNQpAoV.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-BBPgBTRi.js';
import { u as useFormWizard } from './useFormWizard-0FdySBB4.js';
import { u as usePatientProfile } from './usePatientProfile-BA2iSCWb.js';

const _hoisted_1 = { style: { "width": "88vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MedicalAdmission",
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
          title: "Presenting Complaints",
          icon: ""
        },
        {
          title: "Drug History",
          icon: ""
        },
        {
          title: "Past Medical History",
          icon: ""
        },
        {
          title: "Past Surgical History",
          icon: ""
        },
        {
          title: "Allergy",
          icon: ""
        },
        {
          title: "Intoxication",
          icon: ""
        },
        {
          title: "Social History",
          icon: ""
        },
        {
          title: "Family History",
          icon: ""
        },
        {
          title: "Review of Systems",
          icon: ""
        },
        {
          title: "Physical Examination",
          icon: ""
        },
        {
          title: "Summary",
          icon: ""
        },
        {
          title: "Differential Diagnosis",
          icon: ""
        },
        {
          title: "Investigation",
          icon: ""
        },
        {
          title: "Management Plan",
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
          return "Presenting Complaints";
        case "Drug History":
          return "DrugHistory";
        case "Past Medical History":
          return "PastMedicalHistory";
        case "Past Surgical History":
          return "PastSurgicalHistory";
        case "Allergy":
          return "Allergy";
        case "Intoxication":
          return "Intoxication";
        case "Social History":
          return "SocialHistory";
        case "Family History":
          return "FamilyHistory";
        case "Review of Systems":
          return "ReviewOfSystems";
        case "Physical Examination":
          return "PhysicalExamination";
        case "Summary":
          return "Summary";
        case "Differential Diagnosis":
          return "DifferentialDiagnosis";
        case "Investigation":
          return "Investigation";
        case "Management Plan":
          return "ManagementPlan";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Presenting Complaints":
                return "PresentingComplaints";
              case "Drug History":
                return "DrugHistory";
              case "Past Medical History":
                return "PastMedicalHistory";
              case "Past Surgical History":
                return "PastSurgicalHistory";
              case "Allergy":
                return "Allergy";
              case "Intoxication":
                return "Intoxication";
              case "Social History":
                return "SocialHistory";
              case "Family History":
                return "FamilyHistory";
              case "Review of Systems":
                return "ReviewOfSystems";
              case "Physical Examination":
                return "PhysicalExamination";
              case "Summary":
                return "Summary";
              case "Differential Diagnosis":
                return "DifferentialDiagnosis";
              case "Investigation":
                return "Investigation";
              case "Management Plan":
                return "ManagementPlan";
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
      const _component_PresentingComplaints = resolveComponent("PresentingComplaints");
      const _component_DrugHistory = resolveComponent("DrugHistory");
      const _component_PastMedicalHistory = resolveComponent("PastMedicalHistory");
      const _component_PastSurgicalHistory = resolveComponent("PastSurgicalHistory");
      const _component_Allergy = resolveComponent("Allergy");
      const _component_Intoxication = resolveComponent("Intoxication");
      const _component_SocialHistory = resolveComponent("SocialHistory");
      const _component_FamilyHistory = resolveComponent("FamilyHistory");
      const _component_ReviewOfSystems = resolveComponent("ReviewOfSystems");
      const _component_PhysicalExamination = resolveComponent("PhysicalExamination");
      const _component_Summary = resolveComponent("Summary");
      const _component_DifferentialDiagnosis = resolveComponent("DifferentialDiagnosis");
      const _component_Investigation = resolveComponent("Investigation");
      const _component_ManagementPlan = resolveComponent("ManagementPlan");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Medical Inpatient Admission Sheet",
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
                      createVNode(_component_PresentingComplaints, { ref: "presentingComplaintsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingComplaints"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_DrugHistory, { ref: "drugHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DrugHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_PastMedicalHistory, { ref: "pastMedicalHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PastMedicalHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_PastSurgicalHistory, { ref: "pastSurgicalHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PastSurgicalHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_Allergy, { ref: "allergyRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Allergy"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_Intoxication, { ref: "IntoxicationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Intoxication"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_SocialHistory, { ref: "socialHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "SocialHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_FamilyHistory, { ref: "familyHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "FamilyHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_ReviewOfSystems, { ref: "reviewOfSystemsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ReviewOfSystems"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_PhysicalExamination, { ref: "physicalExaminationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PhysicalExamination"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_Summary, { ref: "summaryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Summary"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_DifferentialDiagnosis, { ref: "differentialDiagnosisRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DifferentialDiagnosis"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_Investigation, { ref: "investigationRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Investigation"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_component_ManagementPlan, { ref: "managementPlanRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ManagementPlan"]
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
