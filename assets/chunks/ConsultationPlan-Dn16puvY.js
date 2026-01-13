import { q as defineComponent, aH as useRouter, cs as useRoute, r as ref, d as computed, a2 as onMounted, w as watch, O as createBlock, y as openBlock, A as withCtx, z as createVNode, x as createElementBlock, G as createCommentVNode, B as createBaseVNode, E as unref, M as IonSpinner, dE as IonLoading, H as IonContent, S as withDirectives, bW as chevronBackOutline, T as vShow, br as IonPage, eH as lockClosedOutline, ab as checkmarkOutline } from './vendor-BPW-J91F.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';
import { u as useFormWizard, _ as _sfc_main$1 } from './useFormWizard-BSv7DK6Z.js';
import { u as useDemographicsStore, bb as useInvestigationStore, bW as useOPDDiagnosisStore, b2 as useTreatmentPlanStore, e as useGeneralStore, b3 as useOutcomeStore, b1 as useVitalsStore, bG as useNextAppointmentStore, T as Toolbar, F as DynamicButton, s as isPatientDeceased, G as toastSuccess, x as toastDanger, K as ObservationService, b as EncounterTypeId, H as HisDate, b5 as getOfflineSavedUnsavedData, J as savePatientRecord, b$ as resetOPDPatientData, bJ as StagesService, v as usePatientList, t as toastWarning, r as closeVisit, _ as _export_sfc } from '../index-Be0fRy6M.js';
import { D as DemographicBar } from './DemographicBar-CoJpuQR1.js';
import { C as ClinicalAssessment, b as OPDTreatmentPlan, O as OPDOutcome } from './OPDOutcome-h3z7_6d-.js';
import { I as Investigations, N as NextAppointment } from './NextAppointment-CA0lArxI.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-CVR65JIW.js';
import { O as OPDPrintingModal } from './OPDPrintingModal-DFTwRHMs.js';
import { b as createOPDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-BGXaziuw.js';
import { u as usePresentingComplaintsStore } from './previousComplaints-DUW2xeVK.js';
import { p as patientSessionManager } from './ClientUtils-DhnsAiaT.js';
import { u as usePatientProfile } from './usePatientProfile-CcW4g8Dn.js';
import { u as useUserActivities } from './useUserActivities-DwzDdNzm.js';

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_3 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsultationPlan",
  setup(__props) {
    const { currentTabIndex } = useFormWizard();
    const { printVisitSummary } = usePatientProfile();
    const { hasWaitingList} = useUserActivities();
    const router = useRouter();
    const route = useRoute();
    const isLoading = ref(false);
    const navigable = ref(true);
    const nextButtonDisabled = ref(false);
    const isLoadingPrinter = ref(false);
    const showWizard = ref(true);
    const printModalOpen = ref(false);
    const showAlert = ref(false);
    const hasPatientsWaitingForLab = ref(false);
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useOPDDiagnosisStore();
    const treatmentPlanStore = useTreatmentPlanStore();
    const generalStore = useGeneralStore();
    const outcomeStore = useOutcomeStore();
    const vitalsStore = useVitalsStore();
    const nextAppointmentStore = useNextAppointmentStore();
    const presentingComplaintsStore = usePresentingComplaintsStore();
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
    const { patient } = storeToRefs(demographicsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { OPDdiagnosis } = storeToRefs(diagnosisStore);
    const { selectedMedicalDrugsList } = storeToRefs(treatmentPlanStore);
    const { OPDActivities } = storeToRefs(generalStore);
    const { outcomes } = storeToRefs(outcomeStore);
    const { currentSelectedNextAppointmentDate } = storeToRefs(nextAppointmentStore);
    const { presentingComplaints } = storeToRefs(presentingComplaintsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const clinicalAssessmentRef = ref(null);
    const investigationsRef = ref(null);
    const diagnosisRef = ref(null);
    const treatmentPlanRef = ref(null);
    const nextAppointmentRef = ref(null);
    const outcomeRef = ref(null);
    const wizard = ref(null);
    const tabs = ref();
    const getActiveTabs = () => {
      return OPDActivities.value.map((item) => {
        return { title: item, icon: "" };
      });
    };
    const onChangeCurrentTab = async (index, oldIndex, runChangeTab) => {
      if (oldIndex === 0) await saveClinicalAssessment();
      if (!await isPresentingComplaintsDone()) {
        return;
      }
      await markWizard();
      if (index % 1 === 0) currentTabIndex.value = index;
      if (wizard.value && runChangeTab) {
        wizard.value.changeTab(index);
      }
      const currentTab = tabs.value[index]?.title;
      if (currentTab === "Investigations" && investigationsRef.value) {
        await investigationsRef.value.openAHDModal();
      }
    };
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Clinical Assessment":
          return "ClinicalAssessment";
        case "Investigations":
          return "Investigations";
        case "Diagnosis":
          return "OPDDiagnosis";
        case "Treatment Plan":
          return "OPDTreatmentPlan";
        case "Next Appointment":
          return "NextAppointment";
        case "Outcome":
          return "Outcome";
        default:
          if (OPDActivities.value.length > 0) {
            const firstActivity = OPDActivities.value[0];
            switch (firstActivity) {
              case "Clinical Assessment":
                return "ClinicalAssessment";
              case "Investigations":
                return "Investigations";
              case "Diagnosis":
                return "OPDDiagnosis";
              case "Treatment Plan":
                return "OPDTreatmentPlan";
              case "Next Appointment":
                return "NextAppointment";
              case "Outcome":
                return "Outcome";
            }
          }
          return null;
      }
    };
    const openBackController = () => {
      router.push("home");
    };
    const openProfileController = () => {
      if (isPatientDeceased()) {
        router.push("/deathPatientProfile");
      } else {
        router.push("/patientProfile");
      }
    };
    const printYes = async () => {
      isLoadingPrinter.value = true;
      toastSuccess("Printing consultation summary... Please wait.");
      try {
        await printVisitSummary();
        toastSuccess("Consultation summary printed successfully!");
        setTimeout(() => {
          router.push("home");
        }, 3500);
      } catch (error) {
        toastDanger("Failed to print consultation summary.");
      } finally {
        isLoadingPrinter.value = false;
      }
    };
    const printNo = () => {
      toastSuccess("Patient has finished consultation!");
      router.push("home");
    };
    const isPresentingComplaintsDone = async () => {
      const latestObs = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PRESENTING_COMPLAINTS);
      if (latestObs && latestObs.length > 0) return true;
      else return false;
    };
    const markWizard = async () => {
      const sessionDate = HisDate.sessionDate();
      for (let i = 0; i < tabs.value.length; i++) {
        if (!await isPresentingComplaintsDone()) {
          navigable.value = false;
          if (tabs.value[i].title !== "Clinical Assessment") tabs.value[i].icon = lockClosedOutline;
        } else {
          navigable.value = true;
          nextButtonDisabled.value = false;
          const tab = tabs.value[i];
          if (tab.title === "Clinical Assessment") {
            const complaintsData = getOfflineSavedUnsavedData("presentingComplaints");
            tabs.value[i].icon = isDateInArray(sessionDate, complaintsData) ? checkmarkOutline : "";
          } else if (tab.title === "Investigations") {
            const labOrders = patient.value?.labOrders?.saved;
            const filteredArray = labOrders?.filter((obj) => {
              return HisDate.toStandardHisFormat(sessionDate) === HisDate.toStandardHisFormat(obj.order_date);
            });
            tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
          } else if (tab.title === "Diagnosis") {
            const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
            tabs.value[i].icon = isDateInArray(sessionDate, diagnosisData) ? checkmarkOutline : "";
          } else if (tab.title === "Treatment Plan") {
            const treatmentData = getOfflineSavedUnsavedData("treatment");
            tabs.value[i].icon = treatmentData?.length > 0 ? checkmarkOutline : "";
          } else if (tab.title === "Next Appointment") {
            const appointmentData = getOfflineSavedUnsavedData("appointments");
            tabs.value[i].icon = isDateInArray(sessionDate, appointmentData) ? checkmarkOutline : "";
          } else if (tab.title === "Outcome") {
            const outcomeData = getOfflineSavedUnsavedData("outcomes");
            tabs.value[i].icon = outcomeData?.length > 0 ? checkmarkOutline : "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, dataArray) => {
      if (!dataArray) return false;
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return dataArray.some((item) => {
        const obsDate = new Date(item.obs_datetime || item.order_date);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveClinicalAssessment = async () => {
      isLoading.value = true;
      try {
        await Promise.all([clinicalAssessmentRef.value?.onSubmit()]);
        await savePatientRecord(patient.value);
        resetOPDPatientData();
      } catch (error) {
        toastDanger("Failed to save clinical assessment");
        throw error;
      } finally {
        isLoading.value = false;
      }
    };
    const saveTreatmentPlan = async () => {
      try {
        const med = await createOPDDrugOrder();
        patient.value = { ...patient.value, ...med };
        await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      } catch {
        toastWarning("Failed to save treatment plan");
      }
    };
    const hasPrescribedMedications = () => {
      const medicationsList = selectedMedicalDrugsList.value;
      console.log("Checking prescribed medications:", {
        medicationsCount: medicationsList.length,
        medications: medicationsList
      });
      return medicationsList.length > 0;
    };
    const handleFinish = async () => {
      try {
        isSaving.value = true;
        await diagnosisRef.value?.onSubmit();
        await saveTreatmentPlan();
        await outcomeStore.saveOutcomPatientData();
        await savePatientRecord(patient.value);
        const locationId = localStorage.getItem("locationID");
        if (!locationId) {
          toastDanger("Location ID missing.");
          return;
        }
        const needsDispense = hasPrescribedMedications();
        if (hasWaitingList("Waiting for Laboratory")) {
          await proceedToConsultation(locationId);
          toastSuccess("Patient moved to Consultation for Lab follow-up.");
          return;
        }
        if (needsDispense && hasWaitingList("Waiting for Consultation")) {
          if (hasWaitingList("Waiting for Dispensation")) {
            await proceedToDispensation(locationId);
          } else {
            await proceedToDispensationWithoutAccess(locationId);
          }
          return;
        }
        if (!needsDispense && hasWaitingList("Waiting for Consultation")) {
          await closePatientVisit(locationId);
          return;
        }
      } catch (e) {
        toastDanger("Failed to save consultation.");
      } finally {
        isSaving.value = false;
      }
    };
    const proceedToDispensation = async (locationId) => {
      try {
        await StagesService.addPatientToStage(patient.value, "DISPENSATION");
        await usePatientList().refresh(locationId);
        treatmentPlanStore.clearSelectedMedicalDrugsList();
        toastSuccess("Patient moved to Dispensation.");
        router.push("home");
      } catch (e) {
        toastDanger("Failed to move patient to dispensation");
        throw e;
      }
    };
    const proceedToConsultation = async (locationId) => {
      try {
        await StagesService.addPatientToStage(patient.value, "CONSULTATION");
        await usePatientList().refresh(locationId);
        treatmentPlanStore.clearSelectedMedicalDrugsList();
        router.push("home");
      } catch (e) {
        toastDanger("Failed to move patient to consultation");
        throw e;
      }
    };
    const proceedToDispensationWithoutAccess = async (locationId) => {
      try {
        await StagesService.addPatientToStage(patient.value, "DISPENSATION");
        await usePatientList().refresh(locationId);
        treatmentPlanStore.clearSelectedMedicalDrugsList();
        toastWarning("Patient moved to dispensation queue. You lack access to dispense.");
        router.push("home");
      } catch (e) {
        toastDanger("Failed to move patient to dispensation");
        throw e;
      }
    };
    const closePatientVisit = async (locationId) => {
      try {
        await closeVisit(patient.value);
        await usePatientList().refresh(locationId);
        router.push("home");
      } catch (e) {
        console.error("Failed to close visit:", e);
        toastDanger("Failed to close visit.");
      }
    };
    onMounted(async () => {
      try {
        if (OPDActivities.value.length === 0) {
          await router.push("home");
          return;
        }
        tabs.value = getActiveTabs();
        patientSessionManager.setCurrentPatientID(patient.value?.patientID);
        await markWizard();
        if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
          currentTabIndex.value = 0;
        }
        isDoneButtonDisabled.value = false;
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
        await markWizard();
        patientSessionManager.setCurrentPatientID(patient.value?.patientID);
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
      OPDdiagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedMedicalDrugsList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      outcomes,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(currentSelectedNextAppointmentDate, async () => {
      await markWizard();
    });
    watch(
      presentingComplaints,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async () => {
        showWizard.value = false;
        tabs.value = getActiveTabs();
        setTimeout(() => {
          currentTabIndex.value = 0;
          showWizard.value = true;
        }, 0);
      },
      { deep: true }
    );
    watch(hasPatientsWaitingForLab, (newValue) => {
      showAlert.value = newValue;
      if (showAlert.value) {
        setTimeout(() => {
          showAlert.value = false;
        }, 15e3);
      }
    });
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
      },
      { deep: true }
    );
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(OPDPrintingModal, {
            onYes: printYes,
            onNo: printNo,
            isOpen: printModalOpen.value,
            title: `Do you want to print the consultation summary?`
          }, null, 8, ["isOpen"]),
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(unref(IonLoading), {
            "is-open": isLoadingPrinter.value,
            message: "Printing consultation summary...",
            spinner: "circles"
          }, null, 8, ["is-open"]),
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_2, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  ref_key: "wizard",
                  ref: wizard,
                  headingTitle: "Consultation Plan",
                  "vertical-tabs": "",
                  "navigable-tabs": navigable.value,
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  nextButton: {
                    disabled: nextButtonDisabled.value
                  },
                  "custom-tabs": tabs.value,
                  tabs: tabs.value,
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[2] || (_cache[2] = ($event) => handleFinish())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(DynamicButton, {
                          name: "Back to Waiting list",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"]),
                        createVNode(DynamicButton, {
                          name: "Back to Profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[1] || (_cache[1] = ($event) => openProfileController()),
                          style: { "margin-left": "15px" }
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ClinicalAssessment, {
                        ref_key: "clinicalAssessmentRef",
                        ref: clinicalAssessmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "ClinicalAssessment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Investigations, {
                        ref_key: "investigationsRef",
                        ref: investigationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "Investigations"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(OPDDiagnosis, {
                        ref_key: "diagnosisRef",
                        ref: diagnosisRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "OPDDiagnosis"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(OPDTreatmentPlan, {
                        ref_key: "treatmentPlanRef",
                        ref: treatmentPlanRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "OPDTreatmentPlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(NextAppointment, {
                        ref_key: "nextAppointmentRef",
                        ref: nextAppointmentRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "NextAppointment"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(OPDOutcome, {
                        ref_key: "outcomeRef",
                        ref: outcomeRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "Outcome"]
                    ])
                  ]),
                  _: 1
                }, 8, ["navigable-tabs", "doneButton", "nextButton", "custom-tabs", "tabs"])) : createCommentVNode("", true)
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

const ConsultationPlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-637056bb"]]);

export { ConsultationPlan as default };
