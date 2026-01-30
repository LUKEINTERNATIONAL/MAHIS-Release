import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bb as IonCardHeader, ba as IonCardTitle, a5 as createTextVNode, bd as IonCardContent, bL as IonCard, f as ref, w as watch, a2 as onMounted, O as createBlock, C as createBaseVNode, aI as IonAccordionGroup, J as Fragment, R as renderList, aH as IonAccordion, aq as IonItem, a7 as IonLabel, D as toDisplayString, H as createCommentVNode, aL as useRouter, aG as IonContent, bY as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-D7CYpxMc.js';
import { _ as _sfc_main$3 } from './Wizard.vue_vue_type_script_setup_true_lang-BTVF3ign.js';
import { z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, u as useDemographicsStore, T as Toolbar, F as DynamicButton } from '../index-DLDoA2KE.js';
import { D as DemographicBar } from './DemographicBar-wz_UEjKl.js';
import { L as LabourPastPregnancyComplications, f as LabourWomanBehaviour, a as LabourAllergies, e as LabourPastSurgeries, d as LabourChronicHealthConditions, c as LabourVaccineHistory, b as LabourMedications } from './LabourComplications-Uulpg4Wq.js';
import { u as useGynaecologyForm } from './useGynaecologyForm-K-TXJKld.js';
import { s as storeToRefs } from './pinia-L6vL2rFe.js';
import { u as useFormWizard } from './useFormWizard-DO8d-Gk0.js';

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
    const gynaecologyForm = computed(() => composable.labourGynaecologyFormSection.value);
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.LABOUR_ASSESSMENT)) toastSuccess("Gynaecological History data saved successfully");
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
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonCardTitle), null, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Gynaecological History", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": gynaecologyForm.value
                }, null, 8, ["form-data"])
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

const LabourGynaecology = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-06a6faa0"]]);

const _hoisted_1$1 = { class: "container" };
const _hoisted_2$1 = { class: "investigations-list" };
const _hoisted_3 = {
  class: "investigation-details",
  slot: "content"
};
const _hoisted_4 = {
  key: 0,
  class: "see-more-container"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabourInvestigationsbHistory",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const investigationsHistory = ref([]);
    const showAll = ref(false);
    const displayedInvestigations = computed(() => {
      if (showAll.value || investigationsHistory.value.length <= 3) {
        return investigationsHistory.value;
      }
      return investigationsHistory.value.slice(0, 3);
    });
    const toggleSeeMore = () => {
      showAll.value = !showAll.value;
    };
    async function fetchLabourInvestigationsHistory() {
      if (!patient.value?.patientID) return [];
      const encounters = await ObservationService.getObsByEncounterId(EncounterTypeId.LABOUR_INVESTIGATIONS);
      const allObs = (encounters || []).flatMap((encounter) => encounter?.obs || []);
      const investigationsHistory2 = allObs.map((o) => {
        return {
          conceptName: o.concept_name,
          value: o.value_text || o.value_numeric || o.value_coded_name,
          date: o.obs_datetime
        };
      });
      investigationsHistory2.value = investigationsHistory2;
    }
    watch(
      () => patient.value?.patientID,
      async (newID, oldID) => {
        if (newID && newID !== oldID) {
          await fetchLabourInvestigationsHistory();
        }
      }
    );
    onMounted(async () => {
      await fetchLabourInvestigationsHistory();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        investigationsHistory.value.length ? (openBlock(), createBlock(unref(IonCard), {
          key: 0,
          class: "section"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                _cache[1] || (_cache[1] = createBaseVNode("div", { class: "sub_item_header dashed_bottom_border" }, "Investigations History", -1)),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(unref(IonAccordionGroup), null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(displayedInvestigations.value, (investigation, index) => {
                        return openBlock(), createBlock(unref(IonAccordion), { key: index }, {
                          default: withCtx(() => [
                            createVNode(unref(IonItem), { slot: "header" }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(investigation.conceptName) + " - " + toDisplayString(investigation.value), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createBaseVNode("div", _hoisted_3, [
                              createBaseVNode("p", null, [
                                _cache[0] || (_cache[0] = createBaseVNode("strong", null, "Date:", -1)),
                                createTextVNode(" " + toDisplayString(new Date(investigation.date).toLocaleDateString()), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                investigationsHistory.value.length > 3 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createBaseVNode("span", {
                    class: "see-more-link",
                    onClick: toggleSeeMore
                  }, toDisplayString(showAll.value ? "See less" : "See more"), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (openBlock(), createBlock(unref(IonCard), {
          key: 1,
          class: "section"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createBaseVNode("div", { class: "sub_item_header dashed_bottom_border" }, "Investigations History", -1),
                createBaseVNode("p", null, "No investigations history available.", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }))
      ]);
    };
  }
});

const LabourInvestigationsbHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f4ced7df"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labourProfile",
  setup(__props) {
    const router = useRouter();
    const labourWomanBehaviourRef = ref(null);
    const labourPastPregnancyComplicationsRef = ref(null);
    const labourAllergiesRef = ref(null);
    const labourPastSurgeriesRef = ref(null);
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
    const openBackController = () => {
      router.push("contact");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Past Pregnancy Complications",
          icon: ""
        },
        {
          title: "Past Gynae History",
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
          title: "Past Surgeries",
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
        case "Past Gynae History":
          return "Gynaecology";
        case "Labour Woman Behaviour":
          return "LabourWomanBehaviour";
        case "Allergies":
          return "LabourAllergies";
        case "Past Surgeries":
          return "LabourPastSurgeries";
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
        { ref: labourPastPregnancyComplicationsRef },
        { ref: gynaecologyRef },
        { ref: labourWomanBehaviourRef },
        { ref: labourAllergiesRef },
        { ref: labourPastSurgeriesRef },
        { ref: labourChronicHealthConditionsRef },
        { ref: labourVaccineHistoryRef },
        { ref: labourMedicationsRef }
      ];
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
      router.push("contact");
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
                      createVNode(LabourPastSurgeries, {
                        ref_key: "labourPastSurgeriesRef",
                        ref: labourPastSurgeriesRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabourPastSurgeries"]
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
