import { a6 as useUserStore, a as useProgramStore, at as MultiColumnView, au as mapObjsToOptions, S as Service, t as toastWarning, av as ART_PRIMARY_ACTIVITIES, aw as OPD_PRIMARY_ACTIVITIES, ax as NCD_PRIMARY_ACTIVITIES, _ as _export_sfc, W as ProgramId, X as modal, U as UserService, n as icons, o as createModal } from '../index-DGSSrngm.js';
import { s as defineComponent, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, I as IonHeader, aE as IonTitle, a5 as createTextVNode, D as toDisplayString, L as IonIcon, G as closeCircleOutline, K as modalController, aG as IonContent, z as createElementBlock, J as Fragment, R as renderList, af as IonRow, aA as IonCol, ae as IonCheckbox, a7 as IonLabel, bf as IonFooter, N as IonButton, bu as IonPage, f as ref, c as computed, w as watch, x as resolveComponent, bn as search, C as createBaseVNode, P as normalizeStyle, aL as useRouter, dE as IonFab, dD as IonFabButton, H as createCommentVNode, db as grid } from './vendor-D9gV--WW.js';
import { d as defineStore, s as storeToRefs } from './pinia-CI1UBDxV.js';

const useActionButtonStore = defineStore("actionButtonStore", {
  state: () => ({
    show_action_button: true
  }),
  actions: {
    setShowActionButton(value) {
      this.show_action_button = value;
    },
    getShowActionButton() {
      return this.show_action_button;
    },
    resetShowActionButton() {
      this.show_action_button = true;
    }
  }
});

const _hoisted_1$3 = ["onClick"];
const _hoisted_2$2 = {
  key: 1,
  class: "no-data-container"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ActivitySelectionModal",
  setup(__props) {
    const user = useUserStore();
    const property = ref("activities");
    const activities = ref([]);
    const selectedActivities = computed(() => {
      return activities.value.filter((activity) => activity.isChecked);
    });
    const allActivitiesSelected = computed(() => {
      return activities.value.length > 0 && activities.value.every((activity) => activity.isChecked);
    });
    const toggleAllText = computed(() => {
      return allActivitiesSelected.value ? "Deselect All" : "Select All";
    });
    async function loadActivities(programName) {
      switch (programName.toLowerCase()) {
        case "ncd program":
          activities.value = mapObjsToOptions(NCD_PRIMARY_ACTIVITIES);
          property.value = "NCD_activities";
          break;
        case "opd program":
          activities.value = mapObjsToOptions(OPD_PRIMARY_ACTIVITIES);
          property.value = "OPD_activities";
          break;
        case "hiv program":
          activities.value = mapObjsToOptions(ART_PRIMARY_ACTIVITIES, "name", "workflowID");
          property.value = "activities";
          break;
        default:
          activities.value = [];
          break;
      }
    }
    async function preCheckActivities() {
      const data = await Service.getJson("user_properties", {
        user_id: user.getUserId(),
        property: property.value
      });
      if (data) {
        activities.value = activities.value.map((activity) => {
          if (data.property_value.search(activity.value) >= 0) activity.isChecked = true;
          return activity;
        });
      }
    }
    async function postActivities() {
      try {
        await Service.postJson("user_properties", {
          property: property.value,
          property_value: selectedActivities.value.map((activity) => activity.value).join(",")
        });
        return modalController.dismiss(selectedActivities.value);
      } catch (error) {
        console.error(error);
        toastWarning(error.message ?? "Failed to save selected activities");
      }
    }
    function toggleAllActivities() {
      const selectAll = !allActivitiesSelected.value;
      activities.value = activities.value.map((activity) => {
        activity.isChecked = selectAll;
        return activity;
      });
    }
    onMounted(() => {
      console.log("USER ID", user.getUserId());
      console.log("USER PROGRAM", useProgramStore().activeProgram?.name);
      loadActivities(useProgramStore().activeProgram?.name);
      preCheckActivities();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), {
            style: { "display": "flex", "justify-content": "space-between" },
            color: "success"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonTitle), { class: "modalTitle" }, {
                default: withCtx(() => [
                  createTextVNode("Select Program Activites (selected: " + toDisplayString(selectedActivities.value.length) + ")", 1)
                ]),
                _: 1
              }),
              createVNode(unref(IonIcon), {
                onClick: unref(modalController).dismiss,
                style: { "padding-top": "10px", "padding-right": "10px" },
                icon: unref(closeCircleOutline)
              }, null, 8, ["onClick", "icon"])
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              activities.value.length ? (openBlock(), createBlock(MultiColumnView, {
                key: 0,
                items: activities.value,
                numberOfColumns: 2
              }, {
                default: withCtx(({ entries }) => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(entries, (entry, index) => {
                    return openBlock(), createElementBlock("div", {
                      class: "his-card clickable",
                      key: index,
                      onClick: ($event) => entry.isChecked = !entry.isChecked
                    }, [
                      createVNode(unref(IonRow), null, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { size: "1" }, {
                            default: withCtx(() => [
                              createVNode(unref(IonCheckbox), {
                                modelValue: entry.isChecked,
                                "onUpdate:modelValue": ($event) => entry.isChecked = $event,
                                onClick: ($event) => entry.isChecked = !entry.isChecked
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(IonCol), { class: "ion-text-center his-md-text" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(entry.label), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ], 8, _hoisted_1$3);
                  }), 128))
                ]),
                _: 1
              }, 8, ["items"])) : (openBlock(), createElementBlock("div", _hoisted_2$2, [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("No activities available for this program", -1)
                  ])]),
                  _: 1
                })
              ]))
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), { class: "ion-padding ion-text-end" }, {
            default: withCtx(() => [
              createVNode(unref(IonButton), {
                fill: "outline",
                onClick: toggleAllActivities
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(toggleAllText.value), 1)
                ]),
                _: 1
              }),
              createVNode(unref(IonButton), {
                class: "ion-margin-start",
                onClick: postActivities
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode("Save", -1)
                ])]),
                _: 1
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

const ActivitySelectionModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b78c7022"]]);

const _hoisted_1$2 = { class: "search-wrapper" };


const _sfc_main$3 = {
  __name: 'SearchField',
  props: {
    modelValue: String,
    placeholder: String
},
  emits: ['update:modelValue'],
  setup(__props, { emit: __emit }) {

const onInput = (event) => {
    inputValue.value = event.target.value;
};

const props = __props;
const emit = __emit;

const inputValue = ref(props.modelValue || '');

watch(inputValue, (val) => {
    emit('update:modelValue', val);
});
watch(() => props.modelValue, (val) => {
    inputValue.value = val;
});

return (_ctx, _cache) => {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_input = resolveComponent("ion-input");

  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(_component_ion_icon, {
      icon: unref(search),
      class: "search-icon",
      "aria-hidden": "true"
    }, null, 8, ["icon"]),
    createVNode(_component_ion_input, {
      value: inputValue.value,
      onIonInput: onInput,
      class: "search-input",
      type: "text",
      placeholder: __props.placeholder
    }, null, 8, ["value", "placeholder"])
  ]))
}
}

};
const SearchField = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-b69152ed"]]);

const _hoisted_1$1 = { class: "program-buttons-grid" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "program-name" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProgramGrid",
  props: {
    programs: {},
    onSelect: { type: Function }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.programs, (program, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "program-tile",
            onClick: () => __props.onSelect(program)
          }, [
            createBaseVNode("div", {
              class: "program-icon-container",
              style: normalizeStyle({ backgroundColor: program.color })
            }, [
              createBaseVNode("img", {
                src: program.icon,
                alt: "",
                class: "program-icon"
              }, null, 8, _hoisted_3)
            ], 4),
            createBaseVNode("div", _hoisted_4, toDisplayString(program.name.replace(/program/i, "").trim()), 1)
          ], 8, _hoisted_2$1);
        }), 128))
      ]);
    };
  }
});

const ProgramGrid = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-695b24a9"]]);

const programIcons = {
  [ProgramId.HIV_PROGRAM]: "./assets/icon/program_icons/ribbon.png",
  [ProgramId.TB_PROGRAM]: "./assets/icon/program_icons/tb.png",
  [ProgramId.EARLY_INFANT_DIAGNOSIS_PROGRAM]: "./assets/icon/program_icons/baby-0203_alt.png",
  [ProgramId.MDR_TB_PROGRAM]: "./assets/icon/program_icons/tb.png",
  [ProgramId.KAPOSIS_SARCOMA_PROGRAM]: "./assets/icon/program_icons/lymph-nodes.png",
  [ProgramId.CHRONIC_CARE_PROGRAM]: "./assets/icon/program_icons/intensive-care_unit.png",
  [ProgramId.MATERNITY_PROGRAM]: "./assets/icon/program_icons/pregnant.png",
  [ProgramId.ANC_PROGRAM]: "./assets/icon/program_icons/ancv.png",
  [ProgramId.PNC_PROGRAM]: "./assets/icon/program_icons/feeding-baby.png",
  [ProgramId.DIABETES_PROGRAM]: "./assets/icon/program_icons/diabetes.png",
  [ProgramId.OPD_PROGRAM]: "./assets/icon/program_icons/outpatient.png",
  [ProgramId.IPD_PROGRAM]: "./assets/icon/program_icons/observation.png",
  [ProgramId.UNDER_5_PROGRAM]: "./assets/icon/program_icons/boy-0105y.png",
  [ProgramId.CIVIL_REGISTRATION_PROGRAM]: "./assets/icon/program_icons/register-book.png",
  [ProgramId.HTC_PROGRAM]: "./assets/icon/program_icons/blood-pressure.png",
  [ProgramId.ANC_CONNECT_PROGRAM]: "./assets/icon/program_icons/ancv.png",
  [ProgramId.HYPERTENSION_PROGRAM]: "./assets/icon/program_icons/blood-pressure.png",
  [ProgramId.IPT_PROGRAM]: "./assets/icon/program_icons/observation.png",
  [ProgramId.LABORATORY_PROGRAM]: "./assets/icon/program_icons/biochemistry-laboratory.png",
  [ProgramId.CXCA_PROGRAM]: "./assets/icon/program_icons/cervical-cancer.png",
  [ProgramId.RADIOLOGY_PROGRAM]: "./assets/icon/program_icons/radiology.png",
  [ProgramId.PATIENT_REGISTRATION_PROGRAM]: "./assets/icon/program_icons/human-resoruce.png",
  [ProgramId.AETC_PROGRAM]: "./assets/icon/program_icons/accident-and_emergency.png",
  [ProgramId.SPINE_PROGRAM]: "./assets/icon/program_icons/intensive-care_unit.png",
  [ProgramId.NCD_PROGRAM]: "./assets/icon/program_icons/autoimmune-disease.png",
  [ProgramId.IMMUNIZATION_PROGRAM]: "./assets/icon/program_icons/syringe-vaccine.png",
  [ProgramId.LABOUR_AND_DELIVERY_PROGRAM]: "./assets/icon/program_icons/fetus.png",
  [ProgramId.NEONATAL_PROGRAM]: "./assets/icon/program_icons/child-care.png",
  [ProgramId.HTS_PROGRAM]: "./assets/icon/program_icons/blood-analysis.png",
  [ProgramId.MEMIS_PROGRAM]: "./assets/icon/program_icons/memis.png"
};

const getProgramColor = (programId) => {
  switch (programId) {
    case ProgramId.HIV_PROGRAM:
      return "#F4A6A6";
    // Soft red
    case ProgramId.TB_PROGRAM:
      return "#E6B89C";
    // Muted brown
    case ProgramId.EARLY_INFANT_DIAGNOSIS_PROGRAM:
      return "#FFF2A6";
    // Soft yellow
    case ProgramId.MDR_TB_PROGRAM:
      return "#D2A679";
    // Light saddle brown
    case ProgramId.KAPOSIS_SARCOMA_PROGRAM:
      return "#D8B4E2";
    // Light purple
    case ProgramId.CHRONIC_CARE_PROGRAM:
      return "#C7EFCF";
    // Soft green
    case ProgramId.MATERNITY_PROGRAM:
      return "#FFCCE5";
    // Soft pink
    case ProgramId.ANC_PROGRAM:
      return "#FFD6DD";
    // Pastel pink
    case ProgramId.DIABETES_PROGRAM:
      return "#D6F5D6";
    // Pastel green
    case ProgramId.OPD_PROGRAM:
      return "#B3E5FC";
    // Pastel blue
    case ProgramId.IPD_PROGRAM:
      return "#FFF9C4";
    // Light khaki
    case ProgramId.UNDER_5_PROGRAM:
      return "#FFB3B3";
    // Baby red
    case ProgramId.CIVIL_REGISTRATION_PROGRAM:
      return "#E0E0E0";
    // Light gray
    case ProgramId.HTC_PROGRAM:
      return "#B2DFDB";
    // Soft teal
    case ProgramId.ANC_CONNECT_PROGRAM:
      return "#FFD6DD";
    // Pastel pink
    case ProgramId.HYPERTENSION_PROGRAM:
      return "#B2DFDB";
    // Soft teal
    case ProgramId.IPT_PROGRAM:
      return "#FFF9C4";
    // Light khaki
    case ProgramId.LABORATORY_PROGRAM:
      return "#E6B89C";
    // Muted brown
    case ProgramId.CXCA_PROGRAM:
      return "#FFF2A6";
    // Soft yellow
    case ProgramId.RADIOLOGY_PROGRAM:
      return "#CCCCCC";
    // Pale gray
    case ProgramId.PATIENT_REGISTRATION_PROGRAM:
      return "#FFF9C4";
    // Soft khaki
    case ProgramId.AETC_PROGRAM:
      return "#FFB199";
    // Soft orange
    case ProgramId.SPINE_PROGRAM:
      return "#C7EFCF";
    // Soft green
    case ProgramId.NCD_PROGRAM:
      return "#D6F5D6";
    // Pastel green
    case ProgramId.IMMUNIZATION_PROGRAM:
      return "#FFF2A6";
    // Soft yellow
    case ProgramId.LABOUR_AND_DELIVERY_PROGRAM:
      return "#E6D6F3";
    // Pale lilac
    case ProgramId.NEONATAL_PROGRAM:
      return "#FFECEC";
    // Soft blush
    default:
      return "#F5F5DC";
  }
};

const excludedProgramIds = [
  ProgramId.VHW_PROGRAM,
  ProgramId.TRIAGE_PROGRAM,
  ProgramId.VMMC_PROGRAM,
  ProgramId.KAPOSIS_SARCOMA_PROGRAM,
  ProgramId.CIVIL_REGISTRATION_PROGRAM,
  ProgramId.DIABETES_PROGRAM
];

const _hoisted_1 = { id: "container" };
const _hoisted_2 = { class: "centered-content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModulePicker",
  setup(__props) {
    const router = useRouter();
    const programStore = useProgramStore();
    const searchQuery = ref("");
    const authorizedPrograms = computed(() => {
      return programStore.authorizedPrograms.filter((program) => {
        if (excludedProgramIds.includes(program.program_id)) return false;
        return true;
      }).map((program) => ({
        ...program,
        icon: programIcons[program.program_id] || null,
        color: getProgramColor(program.program_id)
      }));
    });
    const filteredPrograms = computed(() => {
      return authorizedPrograms.value.filter((program) => program.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });
    function setProgram(program) {
      if (program.program_id === ProgramId.MEMIS_PROGRAM) {
        modal.hide();
        router.push({ name: "memisInventory" });
      } else {
        programStore.setActiveProgram(program);
        modal.hide();
      }
    }
    function closeModal() {
      modal.hide();
    }
    onMounted(() => {
      if (authorizedPrograms.value.length === 1) {
        setProgram(authorizedPrograms.value[0]);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[1] || (_cache[1] = createBaseVNode("h1", null, [
          createBaseVNode("strong", null, "Services")
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(IonButton), {
            class: "close-button",
            fill: "clear",
            onClick: closeModal
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), {
                icon: unref(closeCircleOutline),
                style: { "font-size": "4rem", "color": "#dc2626" }
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          createVNode(SearchField, {
            modelValue: searchQuery.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
            placeholder: "Search..."
          }, null, 8, ["modelValue"]),
          createVNode(ProgramGrid, {
            programs: filteredPrograms.value,
            onSelect: setProgram
          }, null, 8, ["programs"])
        ])
      ]);
    };
  }
});

const ModulePicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6b2f25f3"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActionButtons",
  setup(__props) {
    const userStore = useUserStore();
    const { user_ID } = storeToRefs(userStore);
    const showActivitySelection = ref(false);
    const actionButtonStore = useActionButtonStore();
    const { show_action_button } = storeToRefs(actionButtonStore);
    onMounted(async () => {
      try {
        await assignAndUnassignProgramActivities();
      } catch (error) {
      }
    });
    watch(
      () => user_ID.value,
      async () => {
        await assignAndUnassignProgramActivities();
      },
      { deep: true }
    );
    const assignAndUnassignProgramActivities = async () => {
      try {
        const result = await UserService.getUserAssignAndUnassignProgramActivities(user_ID.value);
        showActivitySelection.value = result !== null ? result : false;
      } catch (error) {
        console.error("Error fetching assign and unassign program activities:", error);
      }
    };
    function selectProgramActivities() {
      return createModal(ActivitySelectionModal, { class: "activity-modal" });
    }
    async function changeProgram() {
      return modal.show(ModulePicker, {}, "module-picker-modal");
    }
    return (_ctx, _cache) => {
      return unref(show_action_button) ? (openBlock(), createBlock(unref(IonFab), {
        key: 0,
        slot: "fixed",
        horizontal: "end",
        vertical: "bottom",
        class: "ion-margin-bottom",
        edge: ""
      }, {
        default: withCtx(() => [
          showActivitySelection.value ? (openBlock(), createBlock(unref(IonFabButton), {
            key: 0,
            onClick: selectProgramActivities
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), {
                icon: unref(icons).exam_multiple_choice
              }, null, 8, ["icon"])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(unref(IonFabButton), {
            color: "primary",
            class: "ion-margin-vertical",
            onClick: changeProgram
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), { icon: unref(grid) }, null, 8, ["icon"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

export { ModulePicker as M, _sfc_main as _, useActionButtonStore as u };
