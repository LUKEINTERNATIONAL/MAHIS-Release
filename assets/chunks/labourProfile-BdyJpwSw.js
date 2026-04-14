import { c as computed, s as defineComponent, w as watch, a3 as onMounted, n as nextTick, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bf as IonCardContent, O as createBlock, bN as IonCard, f as ref, C as createBaseVNode, J as Fragment, S as renderList, D as toDisplayString, H as createCommentVNode, aN as useRouter, aI as IonContent, b$ as chevronBackOutline, T as withDirectives, U as vShow, bx as IonPage } from './vendor-DdMq-dB8.js';
import { _ as _sfc_main$3, u as useFormWizard } from './useFormWizard-CH1zCVkP.js';
import { u as useDemographicsStore, z as StandardForm, K as ObservationService, b as EncounterTypeId, t as toastWarning, G as toastSuccess, _ as _export_sfc, H as HisDate, T as Toolbar, F as DynamicButton } from '../index-ClhGEWWo.js';
import { D as DemographicBar } from './DemographicBar-CkIV88qh.js';
import { s as storeToRefs } from './pinia-C0spauhr.js';
import { L as LabourPastPregnancyComplications, e as LabourWomanBehaviour, a as LabourAllergies, d as LabourChronicHealthConditions, c as LabourVaccineHistory, b as LabourMedications } from './LabourComplications-C1X3SAZf.js';
import { u as useGynaecologyForm } from './useGynaecologyForm-D4F_-b3T.js';

const useLabourGynaecologyForm = () => {
  const ancComposable = useGynaecologyForm();
  const labourGynaecologyFormSection = computed(() => {
    return ancComposable.gynaecologyFormSection.value;
  });
  return {
    labourGynaecologyFormSection,
    resetForm: ancComposable.resetForm
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LabourGynaecology",
  setup(__props, { expose: __expose }) {
    const composable = useLabourGynaecologyForm();
    const formRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const gynaecologyForm = computed(() => composable.labourGynaecologyFormSection.value);
    const CONCEPT_TO_FORM_NAME = {
      "Age at Menarche": "Age at menarche",
      "Age at menarche": "Age at menarche",
      "Length of menstrual flow days": "Length of menstrual flow",
      "Length of menstrual flow weeks": "Length of menstrual flow",
      "Length of menstrual flow": "Length of menstrual flow",
      "Regularity of menstrual flow": "Regularity of menstrual flow",
      "Amount of menstrual flow": "Amount of menstrual flow",
      Dysmenorrhoea: "Dysmenorrhea",
      Dysmenorrhea: "Dysmenorrhea",
      Abortions: "Abortions",
      "Past STIs": "Past STIs",
      STI: "STI",
      "Other STI": "Other STI",
      "STI Treatment": "STI Treatment",
      "Gynaecological surgery": "Gynaecological surgery",
      "Other notes": "Other notes"
    };
    async function loadAncGynaecology() {
      if (!patient.value?.patientID || !formRef.value) return;
      const encounters = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.Obstetrics_and_Gynecology);
      for (const obs of encounters) {
        const formName = CONCEPT_TO_FORM_NAME[obs.concept_name] || obs.concept_name;
        const value = obs.value_text ?? obs.value_numeric ?? obs.value_datetime ?? "";
        if (value !== "" && value !== null && value !== void 0) {
          formRef.value.setFormValue(formName, value);
        }
        if (obs.concept_name === "Length of menstrual flow days") {
          formRef.value.setFormValue("Length of menstrual flow_unit", "Days");
        } else if (obs.concept_name === "Length of menstrual flow weeks") {
          formRef.value.setFormValue("Length of menstrual flow_unit", "Weeks");
        }
      }
      if (encounters.length === 0) {
        const labourEncounters = await ObservationService.getObsByEncounterId(EncounterTypeId.LABOUR_ASSESSMENT);
        const allObs = (labourEncounters || []).flatMap((e) => e?.obs || []);
        const byConcept = /* @__PURE__ */ new Map();
        allObs.forEach((o) => {
          if (o?.concept_name && (o?.value_text != null || o?.value_numeric != null || o?.value_datetime != null)) {
            byConcept.set(o.concept_name, o);
          }
        });
        byConcept.forEach((obs, conceptName) => {
          const formName = CONCEPT_TO_FORM_NAME[conceptName] || conceptName;
          const value = obs.value_text ?? obs.value_numeric ?? obs.value_datetime ?? "";
          if (value !== "" && value !== null && value !== void 0) {
            formRef.value.setFormValue(formName, value);
          }
        });
      }
    }
    watch(
      () => patient.value?.patientID,
      async (newID, oldID) => {
        if (newID && newID !== oldID) {
          await nextTick();
          await loadAncGynaecology();
        }
      }
    );
    onMounted(async () => {
      await nextTick();
      await loadAncGynaecology();
    });
    const onSubmit = async () => {
      const errors = formRef.value?.validateForm?.();
      if (errors != null && Object.keys(errors).length > 0) {
        toastWarning("Please fix the validation errors before saving.");
        return;
      }
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT))
        toastSuccess("Gynaecological History data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => {
        return formRef.value?.resetForm();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(StandardForm, {
                  subtitle: "Gynaecological History",
                  formData: gynaecologyForm.value,
                  ref_key: "formRef",
                  ref: formRef,
                  key: _ctx.formKey
                }, null, 8, ["formData"]))
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

const LabourGynaecology = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-72db24d3"]]);

const _hoisted_1$1 = { class: "visitContent" };
const _hoisted_2$1 = {
  key: 0,
  class: "investigation-groups"
};
const _hoisted_3 = { class: "group-date" };
const _hoisted_4 = { class: "group-items" };
const _hoisted_5 = { class: "item-label" };
const _hoisted_6 = { class: "item-value" };
const _hoisted_7 = {
  key: 0,
  class: "see-more-container"
};
const _hoisted_8 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabourInvestigationsbHistory",
  setup(__props) {
    const LAB_INVESTIGATION_CONCEPTS = [
      "Pregnancy status",
      "Urine Protein",
      "Hb(g/dL)",
      "Malaria Test",
      "mRDT results",
      "Malaria Parasites Result",
      "Syphilis Test Result",
      "Hepatitis B",
      "HIV Test",
      "Blood group rhesus factor",
      "Random Blood Sugar"
    ];
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const investigationGroups = ref([]);
    const showAll = ref(false);
    const displayedGroups = computed(() => {
      if (showAll.value || investigationGroups.value.length <= 3) {
        return investigationGroups.value;
      }
      return investigationGroups.value.slice(0, 3);
    });
    const toggleSeeMore = () => {
      showAll.value = !showAll.value;
    };
    const formatDate = (date) => {
      return HisDate.toStandardHisDisplayFormat(date);
    };
    const fetchAncLabInvestigations = async () => {
      if (!patient.value?.patientID) {
        investigationGroups.value = [];
        return;
      }
      const encounterGroups = await ObservationService.getObsByEncounterId(EncounterTypeId.LAB);
      const labObservations = (encounterGroups || []).flatMap((encounter) => encounter?.obs || []).filter((obs) => LAB_INVESTIGATION_CONCEPTS.includes(obs?.concept_name));
      const groupedByDate = /* @__PURE__ */ new Map();
      for (const observation of labObservations) {
        const obsDate = HisDate.toStandardHisFormat(observation.obs_datetime);
        if (!obsDate) continue;
        const resolvedValue = await ObservationService.resolvePrimaryValue(observation);
        if (resolvedValue === "" || resolvedValue == null) continue;
        if (!groupedByDate.has(obsDate)) {
          groupedByDate.set(obsDate, /* @__PURE__ */ new Map());
        }
        groupedByDate.get(obsDate)?.set(observation.concept_name, resolvedValue);
      }
      investigationGroups.value = Array.from(groupedByDate.entries()).map(([date, items]) => ({
        date,
        items: LAB_INVESTIGATION_CONCEPTS.filter((conceptName) => items.has(conceptName)).map((conceptName) => ({
          label: conceptName,
          value: items.get(conceptName)
        }))
      })).filter((group) => group.items.length > 0).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };
    watch(
      () => patient.value?.patientID,
      async () => {
        showAll.value = false;
        await fetchAncLabInvestigations();
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "section-subtitle" }, "Lab Investigations History", -1)),
                displayedGroups.value.length ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(displayedGroups.value, (group) => {
                    return openBlock(), createElementBlock("div", {
                      key: group.date,
                      class: "investigation-group"
                    }, [
                      createBaseVNode("div", _hoisted_3, toDisplayString(formatDate(group.date)), 1),
                      createBaseVNode("div", _hoisted_4, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(group.items, (item) => {
                          return openBlock(), createElementBlock("div", {
                            key: `${group.date}-${item.label}`,
                            class: "group-item"
                          }, [
                            createBaseVNode("span", _hoisted_5, toDisplayString(item.label), 1),
                            createBaseVNode("span", _hoisted_6, toDisplayString(item.value), 1)
                          ]);
                        }), 128))
                      ])
                    ]);
                  }), 128)),
                  investigationGroups.value.length > 3 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    createBaseVNode("span", {
                      class: "see-more-link",
                      onClick: toggleSeeMore
                    }, toDisplayString(showAll.value ? "See less" : "See more"), 1)
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("p", _hoisted_8, "No ANC lab investigation history available."))
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

const LabourInvestigationsbHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b1325a1d"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labourProfile",
  setup(__props) {
    const router = useRouter();
    const labourWomanBehaviourRef = ref(null);
    const labourPastPregnancyComplicationsRef = ref(null);
    const labourAllergiesRef = ref(null);
    const labourChronicHealthConditionsRef = ref(null);
    const labourVaccineHistoryRef = ref(null);
    const labourMedicationsRef = ref(null);
    const gynaecologyRef = ref(null);
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
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const openBackController = () => {
      router.push("/patient-profile");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Past Pregnancy Complications",
          icon: ""
        },
        {
          title: "Gynaecological History",
          icon: ""
        },
        {
          title: "Labour Woman Behaviour",
          icon: ""
        },
        {
          title: "Allergies",
          icon: ""
        },
        {
          title: "Chronic Health Conditions",
          icon: ""
        },
        {
          title: "Vaccine History",
          icon: ""
        },
        {
          title: "Current Medications",
          icon: ""
        },
        {
          title: "Investigations History",
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
        case "Past Pregnancy Complications":
          return "LabourPastPregnancyComplications";
        case "Gynaecological History":
          return "Gynaecology";
        case "Labour Woman Behaviour":
          return "LabourWomanBehaviour";
        case "Allergies":
          return "LabourAllergies";
        case "Chronic Health Conditions":
          return "LabourChronicHealthConditions";
        case "Vaccine History":
          return "LabourVaccineHistory";
        case "Current Medications":
          return "LabourMedications";
        case "Investigations History":
          return "LabourInvestigationsbHistory";
        default:
          return null;
      }
    };
    const saveData = async () => {
      isSaving.value = true;
      const componentRefs = [
        { ref: labourPastPregnancyComplicationsRef, tabIndex: 0 },
        { ref: gynaecologyRef, tabIndex: 1 },
        { ref: labourWomanBehaviourRef, tabIndex: 2 },
        { ref: labourAllergiesRef, tabIndex: 4 },
        { ref: labourChronicHealthConditionsRef, tabIndex: 6 },
        { ref: labourVaccineHistoryRef, tabIndex: 7 },
        { ref: labourMedicationsRef, tabIndex: 8 }
      ];
      let firstInvalidTabIndex = null;
      for (const { ref: compRef, tabIndex } of componentRefs) {
        const comp = compRef.value;
        if (!comp) continue;
        if (typeof comp.validateForm === "function") {
          const errors = comp.validateForm();
          if (errors != null && Object.keys(errors).length > 0) {
            firstInvalidTabIndex = tabIndex;
            break;
          }
        } else if (typeof comp.validate === "function") {
          const error = comp.validate();
          if (error != null && String(error).length > 0) {
            firstInvalidTabIndex = tabIndex;
            break;
          }
        }
      }
      if (firstInvalidTabIndex !== null) {
        toastWarning("Please fix the validation errors before continuing.");
        currentTabIndex.value = firstInvalidTabIndex;
        isSaving.value = false;
        return;
      }
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error(`Error calling onSubmit:`, error);
          }
        }
      }
      isSaving.value = false;
      router.push("/labour/home");
    };
    onMounted(async () => {
      tabs.value = getActiveTabs();
      currentTabIndex.value = 0;
      console.log("Labour profile mounted");
    });
    watch(
      () => patient.value?.patientID,
      async (patientID) => {
        console.log("Patient ID:", patientID);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$3, {
                  ref: "wizard",
                  headingTitle: "Labour Profile",
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
                          name: "Back to Profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourPastPregnancyComplications, {
                        ref_key: "labourPastPregnancyComplicationsRef",
                        ref: labourPastPregnancyComplicationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourPastPregnancyComplications"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourGynaecology, {
                        ref_key: "gynaecologyRef",
                        ref: gynaecologyRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Gynaecology"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourWomanBehaviour, {
                        ref_key: "labourWomanBehaviourRef",
                        ref: labourWomanBehaviourRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourWomanBehaviour"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourAllergies, {
                        ref_key: "labourAllergiesRef",
                        ref: labourAllergiesRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourAllergies"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourChronicHealthConditions, {
                        ref_key: "labourChronicHealthConditionsRef",
                        ref: labourChronicHealthConditionsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourChronicHealthConditions"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourVaccineHistory, {
                        ref_key: "labourVaccineHistoryRef",
                        ref: labourVaccineHistoryRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourVaccineHistory"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourMedications, {
                        ref_key: "labourMedicationsRef",
                        ref: labourMedicationsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourMedications"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(LabourInvestigationsbHistory)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourInvestigationsbHistory"]
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
