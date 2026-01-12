import { q as defineComponent, aH as useRouter, cs as useRoute, r as ref, d as computed, w as watch, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, G as createCommentVNode, S as withDirectives, bW as chevronBackOutline, T as vShow, br as IonPage, ab as checkmarkOutline } from './vendor-BPW-J91F.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';
import { ba as useVitalsStore, u as useDemographicsStore, bb as useInvestigationStore, bc as useDiagnosisStore, b2 as useTreatmentPlanStore, bd as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, a9 as useConfigStore, f as useStatusStore, T as Toolbar, F as DynamicButton, a2 as getFieldValue, H as HisDate, b5 as getOfflineSavedUnsavedData, be as MedicationSelectionHasValues, o as createModal, J as savePatientRecord, bf as resetNCDPatientData, t as toastWarning, k as alertConfirmation, b9 as confirmModal, aq as ConceptService, K as ObservationService, b as EncounterTypeId, G as toastSuccess, bg as useAllegyStore, ab as useUserStore, S as Service } from '../index-BlgLb150.js';
import { D as DemographicBar } from './DemographicBar-CZuH9yPC.js';
import { D as Diagnosis, C as ComplicationsScreening, T as TreatmentPlan } from './TreatmentPlan-CzHwu87J.js';
import { I as Investigations, N as NextAppointment, _ as _sfc_main$3, i as isQualifiedAHD } from './NextAppointment-CBADKtLK.js';
import { _ as _sfc_main$2 } from './RiskAssessment.vue_vue_type_script_setup_true_lang-DkFSg4rM.js';
import { V as Vitals } from './Vitals-qdb-gbif.js';
import { u as useFormWizard, _ as _sfc_main$1 } from './useFormWizard-BSv7DK6Z.js';
import { u as useComplicationsStore } from './ComplicationsStore-pcsWOz90.js';
import { s as stageAllergies, c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-C_NQblpc.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-dfVbm0FF.js';
import { u as usePatientProfile } from './usePatientProfile-B4PxpdHi.js';
import { p as patientSessionManager } from './ClientUtils-C4I2jCnq.js';

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsultationPlan",
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    const { printVisitSummary } = usePatientProfile();
    const router = useRouter();
    const route = useRoute();
    ref([]);
    ref([]);
    ref(false);
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglass-outline" : "checkmark",
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
    ref(false);
    const openCornfirmModal = async () => {
      let confirmOpen = false;
      const handleCancel = (event) => {
        confirmOpen = false;
      };
      const handleConfirm = async (event) => {
        if (event.detail == true) {
          confirmOpen = true;
        }
      };
      const _isQualifiedAHD_ = await isQualifiedAHD();
      if (_isQualifiedAHD_ == true) {
        const dataToPass = { message: "You can screen the patient for AHD, do you want to proceed?" };
        await createModal(confirmModal, { class: "otherVitalsModal" }, true, dataToPass, { cancel: handleCancel, confirm: handleConfirm });
      } else {
        confirmOpen = false;
      }
      return confirmOpen;
    };
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
      router.push("patientProfile");
    };
    const getActiveTabs = () => {
      return generalStore.NCDActivities.map((item) => {
        return { title: item, icon: "" };
      });
    };
    const tabs = ref(getActiveTabs());
    const vitalsRef = ref(null);
    const riskAssessmentRef = ref(null);
    const investigationsRef = ref(null);
    const diagnosisRef = ref(null);
    const complicationsRef = ref(null);
    const treatmentPlanRef = ref(null);
    const nextAppointmentRef = ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Vital Signs":
          return "Vitals";
        case "Risk Assessment":
          return "RiskAssessment";
        case "Investigations":
          return "Investigations";
        case "Diagnosis":
          return "DiagnosisComponent";
        case "Complications Screening":
          return "ComplicationsScreening";
        case "Treatment Plan":
          return "TreatmentPlan";
        case "Next Appointment":
          return "NextAppointment";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Vital Signs":
                return "Vitals";
              case "Risk Assessment":
                return "RiskAssessment";
              case "Investigations":
                return "Investigations";
              case "Diagnosis":
                return "DiagnosisComponent";
              case "Complications Screening":
                return "ComplicationsScreening";
              case "Treatment Plan":
                return "TreatmentPlan";
              case "Next Appointment":
                return "NextAppointment";
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
        await ObservationService.addObsToEncounterPatient(data, EncounterTypeId.SCREENING);
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
      const newTabTitle = tabs.value[index]?.title;
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
      if (newTabTitle == "Investigations") {
        const response = await openCornfirmModal();
        if (response == true) {
          await createModal(_sfc_main$3, { class: "fullScreenModal" }, true, { closeModalOnFinish: true });
        }
      }
      await savePatientRecord(patient.value);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await resetNCDPatientData();
        await savePatientRecord(patient.value);
        await printBarcode();
        router.push("patientProfile");
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    const printBarcode = async () => {
      const response = await alertConfirmation("Do you want to print a barcode?", { header: "Printer" });
      if (response === "Confirm") await printVisitSummary();
    };
    onMounted(async () => {
      try {
        if (generalStore.NCDActivities.length === 0) {
          router.push("patientProfile");
          return;
        }
        const data = useComplicationsStore();
        data.resetScreening();
        tabs.value = getActiveTabs();
        patientSessionManager.setCurrentPatientID(patient.value?.patientID);
        await markWizard();
        if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
          currentTabIndex.value = 0;
          console.log("Setting initial tab index to 0");
        }
        isDoneButtonDisabled.value = false;
        isSaving.value = false;
        validateDoneButtonState();
      } catch (error) {
        console.error("Error: ", error);
      }
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
        try {
          const data = useComplicationsStore();
          data.resetScreening();
          patientSessionManager.setCurrentPatientID(patient.value?.patientID);
          await markWizard();
        } catch (error) {
          console.error("Error updating patient data: ", error);
        }
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
                showWizard.value ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Consultation Plan",
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
                      createVNode(Vitals, {
                        ref_key: "vitalsRef",
                        ref: vitalsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$2, {
                        ref_key: "riskAssessmentRef",
                        ref: riskAssessmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "RiskAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Investigations, {
                        ref_key: "investigationsRef",
                        ref: investigationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Investigations"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Diagnosis, {
                        ref_key: "diagnosisRef",
                        ref: diagnosisRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DiagnosisComponent"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ComplicationsScreening, {
                        ref_key: "complicationsRef",
                        ref: complicationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ComplicationsScreening"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(TreatmentPlan, {
                        ref_key: "treatmentPlanRef",
                        ref: treatmentPlanRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "TreatmentPlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(NextAppointment, {
                        ref_key: "nextAppointmentRef",
                        ref: nextAppointmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "NextAppointment"]
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
