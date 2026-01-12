import { q as defineComponent, cr as useRoute, aF as useRouter, r as ref, w as watch, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, f5 as IonSplitPane, B as createBaseVNode, aA as IonMenu, H as IonContent, x as createElementBlock, J as Fragment, R as renderList, dW as IonSkeletonText, am as IonList, an as IonItem, L as IonIcon, f6 as checkmarkCircleSharp, eH as lockClosedOutline, f1 as location, C as toDisplayString, c7 as clipboardOutline, b9 as IonFooter, ay as IonToolbar, N as IonButton, a5 as createTextVNode, du as arrowBack, bH as IonCard, b7 as IonCardContent, G as createCommentVNode, eL as KeepAlive, c0 as resolveDynamicComponent, c2 as checkmarkCircleOutline, cZ as arrowBackOutline, f7 as arrowForwardOutline, bq as IonPage, K as modalController } from './vendor-BK8x96Ok.js';
import { S as Service, u as useDemographicsStore, P as PatientService, T as Toolbar, c8 as ProviderFormOption, x as toastDanger, E as EncounterService, av as ART_PRIMARY_ACTIVITIES, aa as GlobalPropertyService, c9 as ART_GLOBAL_PROP, o as createModal, ca as _sfc_main$1, ak as _sfc_main$2, _ as _export_sfc } from '../index-xpeKIrss.js';
import { s as storeToRefs } from './pinia-C47my0-I.js';
import { i as isTaskPermitted, a as isTaskUserSelected } from './tasks-CfeYoSJ8.js';

class WorkflowService extends Service {
  constructor() {
    super();
  }
  static nextTask(patientID) {
    return super.getJson(`/workflows/${super.getProgramID()}/${patientID}`, {
      date: super.getSessionDate()
    });
  }
  static async getNextTaskParams(patientID, taskName = "") {
    let task = taskName;
    try {
      if (!task) {
        const { name } = await WorkflowService.nextTask(patientID);
        task = name;
      }
    } catch (e) {
      task = "";
    }
    return {
      name: task.toLowerCase(),
      params: {
        "patient_id": patientID
      }
    };
  }
}

const _hoisted_1 = {
  key: 0,
  class: "ion-padding"
};
const _hoisted_2 = {
  key: 2,
  style: { "margin-top": "10%" },
  class: "ion-padding ion-text-center"
};
const _hoisted_3 = {
  class: "ion-page",
  id: "main"
};
const _hoisted_4 = {
  key: 0,
  class: "ion-padding"
};
const _hoisted_5 = { key: 1 };
const _hoisted_6 = {
  key: 2,
  class: "ion-padding ion-text-center",
  style: { "margin-top": "15%" }
};
const _hoisted_7 = { style: { "color": "black" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ARTVisit",
  setup(__props) {
    const route = useRoute();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const patientService = new PatientService();
    const router = useRouter();
    const currentStep = ref(-1);
    const formRef = ref(null);
    const availableTasks = ref([]);
    const completedTasks = ref([]);
    const isLoadingTasks = ref(false);
    const isLoadingWorkflow = ref(false);
    const nextEncounterType = ref(-1);
    const nextEncounterIdName = ref("");
    const nextWorkflowTaskStatus = ref("");
    const encounterDescription = ref("");
    const isBDEMode = ref(false);
    const bdeProviderComponent = ref(null);
    function taskIsComplete(task) {
      return completedTasks.value.includes(task?.encounterTypeID ?? 0);
    }
    function taskIsEnabled(task) {
      if (!task) return false;
      return !isLoadingWorkflow.value && nextEncounterType.value === task?.encounterTypeID || (task?.otherWorkflowNames ?? []).includes(nextEncounterIdName.value);
    }
    async function loadCompletedTasks() {
      const encounters = await EncounterService.getEncounters(patient.value.patientID, { date: WorkflowService.getSessionDate() });
      completedTasks.value = encounters.map((encounter) => encounter.encounter_type);
    }
    async function nextWorkflowTask() {
      isBDEMode.value = Service.isBDE() ?? false;
      encounterDescription.value = "";
      isLoadingWorkflow.value = true;
      nextWorkflowTaskStatus.value = "";
      nextEncounterIdName.value = "";
      try {
        const task = await WorkflowService.nextTask(patient.value.patientID);
        if (!task) {
          nextWorkflowTaskStatus.value = "No workflows found. You may exit this page or refresh";
          isLoadingWorkflow.value = false;
          currentStep.value = -1;
          return;
        }
        nextEncounterIdName.value = task.name;
        nextEncounterType.value = task?.encounter_type_id ?? -1;
        const nextWorkflowTaskIndex = availableTasks.value.findIndex((t) => {
          return t?.encounterTypeID === nextEncounterType.value || (t.otherWorkflowNames ?? []).includes(nextEncounterIdName.value);
        });
        if (nextWorkflowTaskIndex !== -1) {
          currentStep.value = nextWorkflowTaskIndex;
        } else {
          nextWorkflowTaskStatus.value = nextEncounterIdName.value ? `"${nextEncounterIdName.value}" is not available in the current workflow. Contact your administrator or update ART activity selection` : "No next task found";
          currentStep.value = nextWorkflowTaskIndex;
        }
      } catch (e) {
        nextWorkflowTaskStatus.value = "An error has occured while loading next task: " + e;
        console.error(e);
      } finally {
        await loadCompletedTasks();
        isLoadingWorkflow.value = false;
      }
    }
    async function initTasks() {
      currentStep.value = -1;
      availableTasks.value = [];
      isLoadingTasks.value = true;
      try {
        const filtered = ART_PRIMARY_ACTIVITIES.map(async (task) => {
          if (typeof task.disabled === "function" && task.disabled(ART_PRIMARY_ACTIVITIES)) {
            return;
          }
          if (task.workflowID && task.component) {
            if (!await isTaskPermitted(task.workflowID)) {
              return;
            }
            if (!await isTaskUserSelected(task.workflowID)) {
              return;
            }
          } else {
            return;
          }
          return task;
        });
        availableTasks.value = (await Promise.all(filtered)).filter((task) => task !== void 0);
        detectAndAssignFilingNumber();
      } catch (e) {
        toastDanger("Unable to load activities");
        console.error(e);
      } finally {
        isLoadingTasks.value = false;
      }
    }
    async function detectAndAssignFilingNumber() {
      const isFilingNumberEnabled = await GlobalPropertyService.isProp(`${ART_GLOBAL_PROP.FILING_NUMBERS}=true`);
      if (isFilingNumberEnabled) {
        patientService.patient = await PatientService.findByID(patient.value.patientID);
        const noFilingNumber = /n\/a/i.test(patientService.getFilingNumber());
        if (!noFilingNumber) return;
        createModal(_sfc_main$2, {}, false, {
          title: "New filing number assignment",
          useComponent: _sfc_main$1,
          onClose: () => {
            modalController.dismiss();
          }
        });
      }
    }
    function submitForm() {
      if (isBDEMode.value) {
        if (bdeProviderComponent.value) {
          if (!bdeProviderComponent.value.isProviderSelected()) {
            toastDanger(`Please select a provider`);
            bdeProviderComponent.value.openModal();
            return;
          }
        } else {
          toastDanger(`BDE Provider component is not available`);
          return;
        }
      }
      if (formRef.value && typeof formRef.value.onSubmit === "function") {
        return formRef.value.onSubmit();
      }
      return Promise.resolve(true);
    }
    function handleNext() {
      submitForm().then((ok) => ok && nextWorkflowTask());
    }
    function goToStep(index) {
      if (index < 0 || index >= availableTasks.value.length) return;
      const task = availableTasks.value[index];
      if (task && taskIsEnabled(task)) {
        currentStep.value = index;
      }
    }
    watch(() => route.fullPath, () => {
      initTasks().then(nextWorkflowTask);
    }, { immediate: true, deep: true });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonSplitPane), {
            style: { "margin-top": "70px" },
            when: "xs",
            contentId: "main"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonMenu), { contentId: "main" }, {
                default: withCtx(() => [
                  createVNode(unref(IonContent), null, {
                    default: withCtx(() => [
                      isLoadingTasks.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(5, (n) => {
                          return createVNode(unref(IonSkeletonText), {
                            key: n,
                            animated: "",
                            style: { "height": "60px", "margin-bottom": "10px", "border-radius": "8px" }
                          });
                        }), 64))
                      ])) : availableTasks.value.length > 0 ? (openBlock(), createBlock(unref(IonList), { key: 1 }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(availableTasks.value, (step, index) => {
                            return openBlock(), createBlock(unref(IonItem), {
                              onClick: ($event) => goToStep(index),
                              lines: "none",
                              key: index,
                              disabled: !taskIsEnabled(step),
                              button: ""
                            }, {
                              default: withCtx(() => [
                                taskIsComplete(step) ? (openBlock(), createBlock(unref(IonIcon), {
                                  key: 0,
                                  icon: unref(checkmarkCircleSharp),
                                  style: { "padding": "10px", "color": "green" },
                                  slot: "start"
                                }, null, 8, ["icon"])) : !taskIsEnabled(step) ? (openBlock(), createBlock(unref(IonIcon), {
                                  key: 1,
                                  icon: unref(lockClosedOutline),
                                  style: { "padding": "10px" },
                                  slot: "start"
                                }, null, 8, ["icon"])) : (openBlock(), createBlock(unref(IonIcon), {
                                  key: 2,
                                  icon: unref(location),
                                  style: { "padding": "10px", "color": "green" },
                                  slot: "start"
                                }, null, 8, ["icon"])),
                                createBaseVNode("b", null, toDisplayString(step.displayName ?? step.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick", "disabled"]);
                          }), 128))
                        ]),
                        _: 1
                      })) : (openBlock(), createElementBlock("div", _hoisted_2, [
                        createVNode(unref(IonIcon), {
                          style: { "font-size": "2rem" },
                          icon: unref(clipboardOutline)
                        }, null, 8, ["icon"]),
                        _cache[2] || (_cache[2] = createBaseVNode("h4", null, "You are not assigned to any activities", -1))
                      ]))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonFooter), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonToolbar), { color: "light" }, {
                        default: withCtx(() => [
                          createVNode(unref(IonButton), {
                            onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back())
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: unref(arrowBack),
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[3] || (_cache[3] = createTextVNode(" Back to dashboard ", -1))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_3, [
                isLoadingWorkflow.value || isLoadingTasks.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createVNode(unref(IonCard), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardContent), null, {
                        default: withCtx(() => [
                          createVNode(unref(IonSkeletonText), {
                            animated: "",
                            style: { "height": "40px", "margin-bottom": "20px" }
                          }),
                          createVNode(unref(IonSkeletonText), {
                            animated: "",
                            style: { "height": "20px", "width": "80%", "margin-bottom": "15px" }
                          }),
                          createVNode(unref(IonSkeletonText), {
                            animated: "",
                            style: { "height": "20px", "width": "60%", "margin-bottom": "15px" }
                          }),
                          createVNode(unref(IonSkeletonText), {
                            animated: "",
                            style: { "height": "60px", "margin-bottom": "20px" }
                          }),
                          createVNode(unref(IonSkeletonText), {
                            animated: "",
                            style: { "height": "20px", "width": "70%", "margin-bottom": "15px" }
                          }),
                          createVNode(unref(IonSkeletonText), {
                            animated: "",
                            style: { "height": "20px", "width": "50%", "margin-bottom": "15px" }
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : availableTasks.value[currentStep.value]?.component ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(unref(IonCard), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardContent), null, {
                        default: withCtx(() => [
                          isBDEMode.value ? (openBlock(), createBlock(ProviderFormOption, {
                            key: 0,
                            ref_key: "bdeProviderComponent",
                            ref: bdeProviderComponent
                          }, null, 512)) : createCommentVNode("", true),
                          (openBlock(), createBlock(KeepAlive, null, [
                            (openBlock(), createBlock(resolveDynamicComponent(availableTasks.value[currentStep.value]?.component), {
                              ref_key: "formRef",
                              ref: formRef
                            }, null, 512))
                          ], 1024))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
                  createVNode(unref(IonIcon), {
                    style: { "color": "green", "font-size": "80px" },
                    icon: unref(checkmarkCircleOutline)
                  }, null, 8, ["icon"]),
                  createBaseVNode("h2", _hoisted_7, toDisplayString(nextWorkflowTaskStatus.value), 1),
                  createVNode(unref(IonButton), {
                    size: "large",
                    fill: "clear",
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(router).back())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonIcon), {
                        slot: "start",
                        icon: unref(arrowBackOutline)
                      }, null, 8, ["icon"]),
                      _cache[4] || (_cache[4] = createTextVNode(" Exit page ", -1))
                    ]),
                    _: 1
                  })
                ])),
                createVNode(unref(IonFooter), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonToolbar), { color: "light" }, {
                      default: withCtx(() => [
                        currentStep.value >= 0 ? (openBlock(), createBlock(unref(IonButton), {
                          key: 0,
                          onClick: handleNext,
                          color: "primary",
                          style: { "padding": "4px" },
                          slot: "end"
                        }, {
                          default: withCtx(() => [
                            _cache[5] || (_cache[5] = createTextVNode(" Save and continue ", -1)),
                            createVNode(unref(IonIcon), {
                              style: { "padding": "4px" },
                              icon: unref(arrowForwardOutline),
                              slot: "end"
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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

const ARTVisit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a619323"]]);

export { ARTVisit as default };
