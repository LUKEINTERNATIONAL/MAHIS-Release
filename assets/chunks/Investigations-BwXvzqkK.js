import { s as defineComponent, a2 as onMounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, z as createElementBlock, R as renderList, J as Fragment, F as unref, H as createCommentVNode, f as ref, aL as useRouter, bL as useRoute, w as watch, aG as IonContent, bY as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage, c as computed, ab as checkmarkOutline } from './vendor-Bng173Md.js';
import { s as storeToRefs } from './pinia-C0ngXzxS.js';
import { n as icons, _ as _export_sfc, bi as useVitalsStore, u as useDemographicsStore, bj as useInvestigationStore, bk as useDiagnosisStore, b2 as useTreatmentPlanStore, be as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, F as DynamicButton, a2 as getFieldValue, H as HisDate, bl as getOfflineSavedUnsavedData, bm as MedicationSelectionHasValues, J as savePatientRecord, bn as resetNCDPatientData, t as toastWarning, ar as ConceptService, G as toastSuccess, bo as useAllegyStore, a6 as useUserStore, S as Service } from '../index-DL8Bv1_X.js';
import { D as DemographicBar } from './DemographicBar-CIdJ6UCn.js';
import { B as BedsidePlan, _ as _sfc_main$3 } from './LabOrderPlan.vue_vue_type_script_setup_true_lang-BXSGyzg1.js';
import { u as useRadiologyStore } from './RadiologyStore-MZw0ME-Y.js';
import { B as BasicForm } from './BasicForm-wy-SPIJ3.js';
import { _ as _sfc_main$2, u as useFormWizard } from './useFormWizard-BSJQlJ2N.js';
import { u as useComplicationsStore } from './ComplicationsStore-CRfgytfh.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-CyjUbXEU.js';
import { s as stageAllergies } from './treatment-hYcXFrDJ.js';
import { l as lodashExports } from './lodash-Bmzs2Ld8.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-Ue6I7SX6.js';
import { u as usePatientProfile } from './usePatientProfile-CAKjxGt9.js';

const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2$1 = { class: "scrollable-container" };
const _hoisted_3 = {
  key: 0,
  class: "form-section"
};
const _hoisted_4 = {
  key: 1,
  class: "form-section"
};
const _hoisted_5 = {
  key: 2,
  class: "form-section"
};
const _hoisted_6 = {
  key: 3,
  class: "form-section"
};
const _hoisted_7 = {
  key: 4,
  class: "form-section"
};
const _hoisted_8 = {
  key: 5,
  class: "form-section"
};
const _hoisted_9 = {
  key: 6,
  class: "form-section"
};
const _hoisted_10 = {
  key: 7,
  class: "form-section"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Radiology",
  setup(__props) {
    const radiologyStore = useRadiologyStore();
    const { head, neck, chest, abdomen, upper_extremity, spine, pelvis, lower_extremity } = storeToRefs(radiologyStore);
    const iconsContent = ref(icons);
    const activeParts = ref([]);
    const toggleBodyPart = (partId, labelId, bodyPartId) => {
      document.querySelectorAll(`#${partId} path`).forEach((path) => {
        path.classList.toggle("white-fill");
      });
      document.querySelectorAll(`#${labelId} line`).forEach((element) => {
        element.classList.toggle("dark-green-stroke");
      });
      document.querySelectorAll(`#${labelId} rect`).forEach((element) => {
        element.classList.toggle("bright-green-fill");
        element.classList.toggle("dark-green-stroke");
      });
      document.querySelectorAll(`#${labelId} path`).forEach((element) => {
        element.classList.toggle("dark-green-fill");
      });
      document.querySelectorAll(`#${labelId} circle`).forEach((element) => {
        element.classList.toggle("bright-green-fill");
      });
      const existingIndex = activeParts.value.findIndex((part) => part.id === bodyPartId);
      if (existingIndex >= 0) {
        activeParts.value.splice(existingIndex, 1);
      } else {
        activeParts.value.unshift({ id: bodyPartId, active: true });
      }
    };
    const setSpine = () => {
      const spine2 = document.getElementById("SPINE");
      if (spine2.style.display === "none" || spine2.style.display == "") {
        spine2.style.display = "block";
      } else {
        spine2.style.display = "none";
      }
      toggleBodyPart("SPINE", "SPINE_LABEL-2", "spine");
    };
    onMounted(() => {
      const headGroup = document.getElementById("HEAD");
      if (headGroup) {
        headGroup.addEventListener("click", () => {
          toggleBodyPart("HEAD", "LABEL-6", "head");
        });
      }
      const neckGroup = document.getElementById("NECK");
      if (neckGroup) {
        neckGroup.addEventListener("click", () => {
          toggleBodyPart("NECK", "LABEL-5", "neck");
        });
      }
      const chestGroup = document.getElementById("CHEST");
      if (chestGroup) {
        chestGroup.addEventListener("click", () => {
          toggleBodyPart("CHEST", "LABEL-4", "chest");
        });
      }
      const abdomenGroup = document.getElementById("ABDOMEN_LABEL");
      if (abdomenGroup) {
        abdomenGroup.addEventListener("click", () => {
          const abdomen2 = document.getElementById("ABDOMEN-2");
          if (abdomen2.style.display === "none" || abdomen2.style.display == "") {
            abdomen2.style.display = "block";
          } else {
            abdomen2.style.display = "none";
          }
          toggleBodyPart("ABDOMEN", "ABDOMEN_LABEL-2", "abdomen");
        });
      }
      const upperExtremityGroup = document.getElementById("UPPER_EXTRMITY");
      if (upperExtremityGroup) {
        upperExtremityGroup.addEventListener("click", () => {
          toggleBodyPart("UPPER_EXTRMITY", "LABEL-3", "upper_extremity");
        });
      }
      const spineGroup = document.getElementById("SPINE");
      const spineLabelGroup = document.getElementById("SPINE_LABEL");
      const lowerSpineGroup = document.getElementById("LOWER_SPINE_INACTIVE");
      if (spineGroup) {
        spineGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      if (spineLabelGroup) {
        spineLabelGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      if (lowerSpineGroup) {
        lowerSpineGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      const pelvisGroup = document.getElementById("PELVIS");
      if (pelvisGroup) {
        pelvisGroup.addEventListener("click", () => {
          toggleBodyPart("PELVIS", "LABEL-2", "pelvis");
        });
      }
      const lowerExtremityGroup = document.getElementById("LOWER_EXTREMITY");
      if (lowerExtremityGroup) {
        lowerExtremityGroup.addEventListener("click", () => {
          toggleBodyPart("LOWER_EXTREMITY", "LABEL", "lower_extremity");
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_ion_col = resolveComponent("ion-col");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createBlock(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { size: "7" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                innerHTML: iconsContent.value.full_body_sk
              }, null, 8, _hoisted_1$1)
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, {
            size: "5",
            class: "form-column"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(activeParts.value, (bodyPart) => {
                  return openBlock(), createElementBlock(Fragment, null, [
                    bodyPart.id === "head" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                      _cache[0] || (_cache[0] = createBaseVNode("h6", null, "Body Part: Head", -1)),
                      createVNode(BasicForm, { contentData: unref(head) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "neck" ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      _cache[1] || (_cache[1] = createBaseVNode("h6", null, "Body Part: Neck", -1)),
                      createVNode(BasicForm, { contentData: unref(neck) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "chest" ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      _cache[2] || (_cache[2] = createBaseVNode("h6", null, "Body Part: Chest", -1)),
                      createVNode(BasicForm, { contentData: unref(chest) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "abdomen" ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      _cache[3] || (_cache[3] = createBaseVNode("h6", null, "Body Part: Abdomen", -1)),
                      createVNode(BasicForm, { contentData: unref(abdomen) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "upper_extremity" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      _cache[4] || (_cache[4] = createBaseVNode("h6", null, "Body Part: Upper Extremity", -1)),
                      createVNode(BasicForm, { contentData: unref(upper_extremity) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "spine" ? (openBlock(), createElementBlock("div", _hoisted_8, [
                      _cache[5] || (_cache[5] = createBaseVNode("h6", null, "Body Part: Spine", -1)),
                      createVNode(BasicForm, { contentData: unref(spine) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "pelvis" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                      _cache[6] || (_cache[6] = createBaseVNode("h6", null, "Body Part: Pelvis", -1)),
                      createVNode(BasicForm, { contentData: unref(pelvis) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "lower_extremity" ? (openBlock(), createElementBlock("div", _hoisted_10, [
                      _cache[7] || (_cache[7] = createBaseVNode("h6", null, "Body Part: Lower Extremity", -1)),
                      createVNode(BasicForm, { contentData: unref(lower_extremity) }, null, 8, ["contentData"])
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 256))
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

const Radiology = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-33a0b153"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Investigations",
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
          title: "Bedside plan",
          icon: ""
        },
        {
          title: "Lab Order Plan",
          icon: ""
        },
        {
          title: "Radiology",
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
        case "Bedside plan":
          return "BedsidePlan";
        case "Lab Order Plan":
          return "LabOrderPlan";
        case "Radiology":
          return "Radiology";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Bedside plan":
                return "BedsidePlan";
              case "Lab Order Plan":
                return "LabOrderPlan";
              case "Radiology":
                return "Radiology";
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
                  headingTitle: "Investigation Plan",
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
                      createVNode(BedsidePlan, { ref: "bedsidePlanRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "BedsidePlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$3, { ref: "labOrderPlanRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabOrderPlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Radiology, { ref: "radiologyRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Radiology"]
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
