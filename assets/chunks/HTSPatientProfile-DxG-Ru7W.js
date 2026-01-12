import { s as storeToRefs } from './pinia-D-q2_lrU.js';
import { q as defineComponent, r as ref, d as computed, x as createElementBlock, y as openBlock, bP as withKeys, a4 as normalizeClass, a8 as withModifiers, B as createBaseVNode, z as createVNode, J as Fragment, R as renderList, P as normalizeStyle, A as withCtx, E as unref, ay as IonCol, L as IonIcon, a7 as IonLabel, C as toDisplayString, af as IonRow, v as resolveComponent, a5 as createTextVNode, K as modalController, a2 as onMounted, O as createBlock, G as createCommentVNode, bA as modalController$1, N as IonButton, bi as chevronForward, bN as IonChip, an as IonItem, d2 as add, bD as IonModal, I as IonHeader, aA as IonToolbar, aB as IonTitle, ba as IonButtons, H as IonContent, bb as IonFooter, aH as useRouter, w as watch, d1 as person, d$ as ellipsisVerticalSharp, aE as IonAccordionGroup, aD as IonAccordion, am as IonList, as as IonToggle, bl as IonPopover } from './vendor-BPW-J91F.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { n as icons, _ as _export_sfc, y as StandardValidations, C as StandardForm, H as HisDate, S as Service, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, t as toastWarning, aq as ConceptService, bq as LabOrderService, o as createModal, O as OrderService, F as DynamicButton, l as PreviousVitals, P as PatientService } from '../index-Bc-TK-yC.js';
import { N as NextAppointment } from './vaccines_service-Cwsn7ZRd.js';
import { u as usePatientProfile } from './usePatientProfile-B0PrvE6i.js';
import WeightHeightChart from './WeightHeightChart-BLoqkV4L.js';
import { O as OtherVitals, w as weightAndHeight } from './weightAndHeight-BQq4HnvL.js';

const _hoisted_1$6 = ["onKeydown"];
const _hoisted_2$6 = { class: "ripple-container" };
const _hoisted_3$5 = ["onAnimationend"];
const _hoisted_4$5 = { class: "status-badge" };
const _hoisted_5$2 = { class: "ion-text-wrap" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ReferralCard",
  props: {
    status: {
      type: String,
      default: "Referred OPD"
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "default"
      // 'hiv', 'hepatitis', 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["pressed", "click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isPressed = ref(false);
    const timelineElement = ref(null);
    const ripples = ref([]);
    let rippleId = 0;
    const backgroundClass = computed(() => {
      if (props.disabled) return "timeline-item-disabled";
      switch (props.type) {
        case "hiv":
          return "timeline-item-hiv";
        case "hepatitis":
          return "timeline-item-hepatitis";
        default:
          return "timeline-item-default";
      }
    });
    const iconClass = computed(() => {
      if (props.disabled) return "icon-container-disabled";
      switch (props.type) {
        case "hiv":
          return "icon-container-hiv";
        case "hepatitis":
          return "icon-container-hepatitis";
        default:
          return "icon-container-default";
      }
    });
    const createRipple = (event) => {
      if (props.disabled || !timelineElement.value) return;
      const rect = timelineElement.value.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      let x, y;
      if (event.type === "keydown") {
        x = rect.width / 2 - size / 2;
        y = rect.height / 2 - size / 2;
      } else {
        const clientX = event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
        const clientY = event.type.includes("touch") ? event.touches[0].clientY : event.clientY;
        x = clientX - rect.left - size / 2;
        y = clientY - rect.top - size / 2;
      }
      const ripple = {
        id: rippleId++,
        x,
        y,
        size,
        duration: 600
      };
      ripples.value.push(ripple);
    };
    const removeRipple = (id) => {
      const index = ripples.value.findIndex((ripple) => ripple.id === id);
      if (index > -1) {
        ripples.value.splice(index, 1);
      }
    };
    const handleClick = (event) => {
      if (props.disabled) return;
      createRipple(event);
      emit("pressed", {
        type: props.type,
        title: props.title,
        status: props.status,
        event
      });
      emit("click", event);
    };
    const handleMouseDown = (event) => {
      if (props.disabled) return;
      isPressed.value = true;
      createRipple(event);
    };
    const handleMouseUp = () => {
      isPressed.value = false;
    };
    const handleMouseLeave = () => {
      isPressed.value = false;
    };
    const handleTouchStart = (event) => {
      if (props.disabled) return;
      isPressed.value = true;
      createRipple(event);
    };
    const handleTouchEnd = () => {
      isPressed.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["timeline-item", backgroundClass.value, { "timeline-item-pressed": isPressed.value }]),
        onClick: handleClick,
        onMousedown: handleMouseDown,
        onMouseup: handleMouseUp,
        onMouseleave: handleMouseLeave,
        onTouchstart: handleTouchStart,
        onTouchend: handleTouchEnd,
        role: "button",
        tabindex: "0",
        onKeydown: [
          withKeys(handleClick, ["enter"]),
          withKeys(withModifiers(handleClick, ["prevent"]), ["space"])
        ],
        ref_key: "timelineElement",
        ref: timelineElement
      }, [
        createBaseVNode("div", _hoisted_2$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(ripples.value, (ripple) => {
            return openBlock(), createElementBlock("div", {
              key: ripple.id,
              class: "ripple",
              style: normalizeStyle({
                left: ripple.x + "px",
                top: ripple.y + "px",
                width: ripple.size + "px",
                height: ripple.size + "px",
                animationDuration: ripple.duration + "ms"
              }),
              onAnimationend: ($event) => removeRipple(ripple.id)
            }, null, 44, _hoisted_3$5);
          }), 128))
        ]),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { class: "ion-text-center" }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  createVNode(unref(IonIcon), {
                    class: normalizeClass(["icon-container", iconClass.value]),
                    icon: unref(icons).greenInjection,
                    "aria-hidden": "true"
                  }, null, 8, ["class", "icon"])
                ])
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), { class: "ion-text-center" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_4$5, toDisplayString(__props.status), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), { class: "ion-text-center" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createBaseVNode("h2", _hoisted_5$2, toDisplayString(__props.title), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 42, _hoisted_1$6);
    };
  }
});

const ReferralCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-3af6644b"]]);

const _hoisted_1$5 = { style: { "padding-left": "10px", "padding-right": "10px" } };
const _hoisted_2$5 = { style: { "display": "flex", "justify-content": "space-between", "padding": "10px" } };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RiskCategoryFollowUpModal",
  setup(__props) {
    const formRef = ref(null);
    const riskCategoryForm = computed(() => {
      return [
        {
          componentType: "multiSelectInputField",
          header: "Risk Category",
          name: "risk_category",
          trackBy: "id",
          validation: StandardValidations.required,
          options: [
            {
              id: "1",
              name: "Sex worker"
            },
            {
              id: "2",
              name: "MSM"
            },
            {
              id: "3",
              name: "AGYW"
            },
            {
              id: "4",
              name: "Client of sex workers"
            },
            {
              id: "5",
              name: "Female sex workers"
            },
            {
              id: "6",
              name: "Risk age group"
            },
            {
              id: "7",
              name: "None"
            }
          ]
        }
      ];
    });
    const save = async () => {
      const result = formRef.value?.getFormValues();
      console.log("🚀 ~ save ~ result:", result);
      await modalController.dismiss(result?.risk_category?.name);
    };
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "content" }, [
          createBaseVNode("h4", null, "Risk Category & Follow-up")
        ], -1)),
        createBaseVNode("div", null, [
          createVNode(StandardForm, {
            formData: riskCategoryForm.value,
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])
        ]),
        createBaseVNode("div", _hoisted_2$5, [
          createVNode(_component_ion_button, { color: "danger" }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Cancel", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode("Save", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const RiskCategoryFollowUpModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-fdbc4375"]]);

const _hoisted_1$4 = { style: { "padding-left": "10px", "padding-right": "10px" } };
const _hoisted_2$4 = { class: "content" };
const _hoisted_3$4 = { style: { "margin-top": "10px" } };
const _hoisted_4$4 = { style: { "display": "flex", "justify-content": "space-between", "padding": "10px" } };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "OutcomeSummaryModal",
  setup(__props) {
    const date = ref("");
    const getTodayDate = async () => {
      date.value = HisDate.toStandardHisDisplayFormat(await Service.getApiDate());
    };
    const formRef = ref(null);
    const outcomeSummaryForm = [
      {
        header: "Outcome Summary",
        componentType: "textAreaField",
        name: "Outcome",
        icon: icons.editPen,
        obsValueType: "value_text"
      },
      {
        componentType: "radioButtonField",
        header: "Is new positive?",
        name: "New Positive",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "6" },
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Refer patient to ART clinic?",
        name: "ART referral",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "6" },
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      }
    ];
    const save = async () => {
      const data = formRef.value?.getFormValues();
      await ObservationService.buildSaveObs(data, EncounterTypeId.PATIENT_OUTCOME);
      await modalController.dismiss();
      toastSuccess("Outcome summary saved successfully.");
    };
    onMounted(async () => {
      await getTodayDate();
    });
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          _cache[2] || (_cache[2] = createBaseVNode("h4", null, "Patient Outcome", -1)),
          createBaseVNode("div", null, [
            _cache[1] || (_cache[1] = createBaseVNode("span", null, "Todays Date : ", -1)),
            createBaseVNode("span", null, toDisplayString(date.value), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_3$4, [
          createVNode(StandardForm, {
            formData: outcomeSummaryForm,
            ref_key: "formRef",
            ref: formRef
          }, null, 512)
        ]),
        createBaseVNode("div", _hoisted_4$4, [
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createTextVNode("Complete", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const OutcomeSummaryModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-62e554aa"]]);

const _hoisted_1$3 = { style: { "padding-left": "10px", "padding-right": "10px" } };
const _hoisted_2$3 = { class: "content" };
const _hoisted_3$3 = { style: { "text-align": "center", "padding": "15px" } };
const _hoisted_4$3 = { style: { "display": "flex", "justify-content": "space-between", "padding": "10px" } };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HIVTestingModal",
  props: {
    order: {}
  },
  setup(__props) {
    const formRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const previousTests = ref([]);
    const pastDate = ref("");
    const nextStep = ref("");
    const nextButtonLabel = ref("");
    const props = __props;
    const HIVTestingForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Test Type",
          name: "test_type",
          obsValueType: "value_text",
          type: "inline",
          validation: StandardValidations.required,
          onChange: (value) => {
            determineNextStep();
          },
          options: [
            {
              label: "Detremin",
              value: "Detremin"
            },
            {
              label: "Unigold",
              value: "Unigold"
            },
            {
              label: "Bioline",
              value: "Bioline"
            }
          ]
        },
        {
          componentType: "inputField",
          header: "Test Kit Serial Number",
          name: "test_kit_serial_number",
          obsValueType: "value_text",
          icon: icons.scanner,
          onChange: (value) => {
            determineNextStep();
          },
          validation: StandardValidations.required
        },
        {
          componentType: "radioButtonField",
          header: "Test result",
          name: "test_results",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "inline",
          onChange: (value) => {
            determineNextStep();
          },
          options: [
            {
              label: "Reactive",
              value: "Reactive"
            },
            {
              label: "Non reactive",
              value: "Non reactive"
            }
          ]
        }
      ];
    });
    const getTodayDate = () => {
      return Service.getSessionDate();
    };
    const determineNextStep = () => {
      const result = formRef.value?.getFormValues();
      if (!result?.test_results) {
        nextStep.value = "";
        nextButtonLabel.value = "";
        return;
      }
      const testType = result.test_type;
      const testResult = result.test_results;
      if (testType === "Detremin") {
        if (testResult === "Non reactive") {
          nextStep.value = "risk_category";
          nextButtonLabel.value = "Continue to Risk Category";
        } else if (testResult === "Reactive") {
          nextStep.value = "unigold";
          nextButtonLabel.value = "Continue to Unigold";
        }
      } else if (testType === "Unigold") {
        if (testResult === "Non reactive") {
          nextStep.value = "repeat_determine";
          nextButtonLabel.value = "Repeat Determine Test";
        } else if (testResult === "Reactive") {
          nextStep.value = "bioline";
          nextButtonLabel.value = "Continue to Bioline";
        }
      } else if (testType === "Bioline") {
        if (testResult === "Non reactive") {
          nextStep.value = "inconclusive";
          nextButtonLabel.value = "Schedule Inconclusive Follow-up";
        } else if (testResult === "Reactive") {
          nextStep.value = "Outcome summary";
          nextButtonLabel.value = "Continue to Summary";
        }
      }
    };
    const getTestName = (order) => {
      if (!order?.tests) return;
      return order.tests[0].name;
    };
    const save = async () => {
      if (formRef.value?.validateForm() != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      const result = formRef.value?.getFormValues();
      const testType = result.test_type;
      previousTests.value.push({
        type: testType,
        result: result.test_results
      });
      let order = props.order;
      let offline_id = "";
      const testName = getTestName(order) || order.value_text;
      const concept_id = await ConceptService.getConceptID(testName, true);
      if (order?.new_order) {
        offline_id = await createLabOrder(concept_id, testName, "Blood");
      }
      const results = await LabOrderService.buildResults([
        {
          name: "HIV test",
          concept_id,
          value: `${testType}-${result.test_results}`
        }
      ]);
      const testId = order?.tests?.[0]?.id || "";
      await LabOrderService.saveResults(patient.value, results, testId, offline_id, pastDate.value);
      if (shouldFinishTesting(testType, result.test_results)) {
        await handleTestCompletion(testType, result.test_results);
      } else {
        toastSuccess("Test result saved");
      }
    };
    const continueToNext = async () => {
      if (formRef.value?.validateForm() != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      await save();
      switch (nextStep.value) {
        case "risk_category":
          await dismissModal();
          const risk = await createModal(RiskCategoryFollowUpModal, {
            class: "mediumAutoHeightModal"
          });
          if (risk == "None") {
            await openOutComeModal();
          } else if (risk) {
            await openAppointmentModal();
            await openOutComeModal();
          }
          break;
        case "unigold":
          formRef.value?.resetForm();
          formRef.value?.setFormValue("test_type", "Unigold");
          break;
        case "repeat_determine":
          formRef.value?.resetForm();
          formRef.value?.setFormValue("test_type", "Detremin");
          break;
        case "bioline":
          formRef.value?.resetForm();
          formRef.value?.setFormValue("test_type", "Bioline");
          determineNextStep();
          break;
        case "inconclusive":
          await handleInconclusiveResult();
          break;
        case "Outcome summary":
          await openOutComeModal();
          break;
      }
    };
    const openOutComeModal = async () => {
      await dismissModal();
      await createModal(OutcomeSummaryModal, {
        class: "mediumAutoHeightModal"
      });
    };
    const openAppointmentModal = async () => {
      await dismissModal();
      return await createModal(NextAppointment, {
        class: "mediumAutoHeightModal"
      });
    };
    const dismissModal = async () => {
      const top = await modalController$1.getTop();
      if (top) {
        await modalController$1.dismiss();
      }
    };
    const shouldFinishTesting = (testType, result) => {
      if (testType === "Detremin" && result === "Non reactive") {
        return false;
      }
      const tests = [...previousTests.value];
      if (tests.length >= 3) {
        return true;
      }
      return false;
    };
    const handleTestCompletion = async (testType, result) => {
      const tests = previousTests.value;
      const determine = tests.find((t) => t.type === "Detremin");
      const unigold = tests.find((t) => t.type === "Unigold");
      const bioline = tests.find((t) => t.type === "Bioline");
      if (determine?.result === "Reactive" && unigold?.result === "Reactive" && bioline?.result === "Reactive") {
        await handlePositiveResult();
      } else if (bioline?.result === "Non reactive") {
        await handleInconclusiveResult();
      }
    };
    const handlePositiveResult = async () => {
      await dismissModal();
      toastSuccess("Positive result confirmed. Proceeding to ART enrollment.");
    };
    const handleInconclusiveResult = async () => {
      await openAppointmentModal();
      await openOutComeModal();
    };
    const loadPreviousTests = async () => {
      try {
        const labResults = await LabOrderService.getLabResults(patient.value, 9);
        if (labResults?.latestTest?.value) {
          const testString = labResults.latestTest.value;
          const parts = testString.split("-");
          if (parts.length === 2) {
            previousTests.value = [
              {
                type: parts[0],
                result: parts[1]
              }
            ];
          }
        }
      } catch (error) {
        console.error("Error loading previous tests:", error);
      }
    };
    const createLabOrder = async (concept_id, test, specimen) => {
      const investigation = [
        {
          order_type_id: 9,
          concept_id,
          name: test,
          specimen,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(specimen, true)
        }
      ];
      const data = await OrderService.buildLabOrders("", investigation, pastDate.value);
      const patientData = JSON.parse(JSON.stringify(patient.value));
      (patientData.labOrders ??= {}).unsaved ??= [];
      (patientData.labOrders ??= {}).saved ??= [];
      patientData.labOrders.unsaved.push(...data);
      patient.value = patientData;
      return data[0].offline_id;
    };
    onMounted(async () => {
      pastDate.value = props.order?.past_date;
      await loadPreviousTests();
      determineNextStep();
    });
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          _cache[3] || (_cache[3] = createBaseVNode("h4", null, "HIV Testing", -1)),
          createBaseVNode("div", null, [
            _cache[2] || (_cache[2] = createBaseVNode("span", null, "Todays Date : ", -1)),
            createBaseVNode("span", null, toDisplayString(getTodayDate()), 1)
          ])
        ]),
        createBaseVNode("div", null, [
          createVNode(StandardForm, {
            formData: HIVTestingForm.value,
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])
        ]),
        createBaseVNode("div", _hoisted_3$3, [
          _cache[4] || (_cache[4] = createBaseVNode("span", null, "Reported by: ", -1)),
          createBaseVNode("span", null, toDisplayString(unref(Service).getUserName()), 1)
        ]),
        createBaseVNode("div", _hoisted_4$3, [
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[5] || (_cache[5] = [
              createTextVNode("Complete", -1)
            ])]),
            _: 1
          }),
          nextStep.value ? (openBlock(), createBlock(_component_ion_button, {
            key: 0,
            onClick: _cache[1] || (_cache[1] = ($event) => continueToNext())
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(nextButtonLabel.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});

const HIVTestingModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-229d1968"]]);

const _hoisted_1$2 = { style: { "padding-left": "10px", "padding-right": "10px" } };
const _hoisted_2$2 = { class: "content" };
const _hoisted_3$2 = { style: { "text-align": "center", "padding": "15px" } };
const _hoisted_4$2 = { style: { "display": "flex", "justify-content": "center", "padding": "10px" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HepatitisModal",
  props: {
    order: {}
  },
  setup(__props) {
    const formRef = ref(null);
    let result = ref({});
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const pastDate = ref("");
    const props = __props;
    const HIVTestingForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Test result",
          name: "test_results",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "inline",
          options: [
            {
              label: "Positive",
              value: "Positive"
            },
            {
              label: "Negative",
              value: "Negative"
            },
            {
              label: "Inconclusive",
              value: "Inconclusive"
            }
          ]
        }
      ];
    });
    const getTodayDate = () => {
      return Service.getSessionDate();
    };
    const getTestName = (order) => {
      if (!order?.tests) return;
      return order?.tests[0]?.name;
    };
    const save = async () => {
      if (formRef.value?.validateForm() != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      let order = props.order;
      pastDate.value = order.past_date;
      let offline_id = "";
      const testName = getTestName(order) || order?.value_text;
      const concept_id = await ConceptService.getConceptID(testName, true);
      result.value = formRef.value?.getFormValues();
      if (order?.new_order) offline_id = await createLabOrder(concept_id, testName, "Blood");
      const results = await LabOrderService.buildResults([
        {
          name: testName,
          concept_id,
          value: result.value.test_results
        }
      ]);
      const testId = order?.tests?.[0]?.id || "";
      await LabOrderService.saveResults(patient.value, results, testId, offline_id, pastDate.value);
      await modalController$1.dismiss();
    };
    const createLabOrder = async (concept_id, test, specimen) => {
      const investigation = [
        {
          order_type_id: 9,
          concept_id,
          name: test,
          specimen,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(specimen, true)
        }
      ];
      const data = await OrderService.buildLabOrders("", investigation, pastDate.value);
      console.log("🚀 ~ createLabOrder ~ data:=======------", data);
      const patientData = JSON.parse(JSON.stringify(patient.value));
      (patientData.labOrders ??= {}).unsaved ??= [];
      (patientData.labOrders ??= {}).saved ??= [];
      patientData.labOrders.unsaved.push(...data);
      patient.value = patientData;
      return data[0].offline_id;
    };
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("h4", null, toDisplayString(__props.order.value_text) + " Testing", 1),
          createBaseVNode("div", null, [
            _cache[1] || (_cache[1] = createBaseVNode("span", null, "Todays Date : ", -1)),
            createBaseVNode("span", null, toDisplayString(getTodayDate()), 1)
          ])
        ]),
        createBaseVNode("div", null, [
          createVNode(StandardForm, {
            formData: HIVTestingForm.value,
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          _cache[2] || (_cache[2] = createBaseVNode("span", null, "Reported by: ", -1)),
          createBaseVNode("span", null, toDisplayString(unref(Service).getUserName()), 1)
        ]),
        createBaseVNode("div", _hoisted_4$2, [
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createTextVNode("Complete", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const HepatitisModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c8a25de3"]]);

const _hoisted_1$1 = { class: "past-test-results" };
const _hoisted_2$1 = { class: "header" };
const _hoisted_3$1 = { class: "test-results-list" };
const _hoisted_4$1 = { class: "test-info" };
const _hoisted_5$1 = { class: "test-name" };
const _hoisted_6$1 = { class: "test-date" };
const _hoisted_7$1 = { class: "add-results-section" };
const _hoisted_8$1 = { class: "modal-test-results-list" };
const _hoisted_9$1 = { class: "test-info" };
const _hoisted_10$1 = { class: "test-name" };
const _hoisted_11$1 = { class: "test-date" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PastTestResults",
  props: {
    results: { default: () => [] }
  },
  emits: ["seeFullHistory", "enterKnownResults"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isModalOpen = ref(false);
    const isWhichTestModalOpen = ref(false);
    const formRef = ref(null);
    const testResults = computed(() => props.results || []);
    const limitedTestResults = computed(() => testResults.value.slice(0, 3));
    const whichTest = computed(
      () => [
        {
          componentType: "radioButtonField",
          header: "Select test",
          name: "test",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          options: [
            {
              label: "Hepatitis B Test",
              value: "Hepatitis B Test"
            },
            {
              label: "Hepatitis C Test",
              value: "Hepatitis C Test"
            },
            {
              label: "HIV test",
              value: "HIV test"
            },
            {
              label: "Syphilis",
              value: "Syphilis"
            }
          ]
        },
        {
          componentType: "dateInputField",
          header: "Past Date",
          name: "past_date",
          validation: StandardValidations.required
        }
      ]
    );
    const getResultClass = (result) => {
      const lowerResult = result.toLowerCase();
      if (lowerResult.includes("reactive") && !lowerResult.includes("non reactive")) {
        return "reactive";
      }
      if (lowerResult.includes("positive")) {
        return "reactive";
      }
      if (lowerResult.includes("non reactive") || lowerResult.includes("negative")) {
        return "non-reactive";
      }
      if (lowerResult.includes("inconclusive")) {
        return "default";
      }
      return "default";
    };
    const setWhichTest = async () => {
      const result = formRef.value?.getFormValues();
      const order = { value_text: result.test, new_order: true, past_date: result.past_date };
      closeWHichTestModal();
      await openHIVTestingModal(order);
    };
    const openHIVTestingModal = async (order) => {
      if (order.value_text == "HIV test") {
        await createModal(HIVTestingModal, { class: "otherVitalsModal" }, true, { order });
      }
      if (order.value_text == "Syphilis" || order.value_text == "Hepatitis B Test" || order.value_text == "Hepatitis C Test") {
        await createModal(HepatitisModal, { class: "otherVitalsModal" }, true, { order });
      }
    };
    const openWhichTestModal = () => {
      isWhichTestModalOpen.value = true;
    };
    const openModal = () => {
      isModalOpen.value = true;
      emit("seeFullHistory");
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const closeWHichTestModal = () => {
      isWhichTestModalOpen.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "header-title" }, "PAST TEST RESULTS", -1)),
          createVNode(unref(IonButton), {
            fill: "clear",
            size: "small",
            class: "see-history-btn",
            onClick: openModal
          }, {
            default: withCtx(() => [
              _cache[1] || (_cache[1] = createTextVNode(" See full History ", -1)),
              createVNode(unref(IonIcon), {
                icon: unref(chevronForward),
                slot: "end"
              }, null, 8, ["icon"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(limitedTestResults.value, (test, index) => {
            return openBlock(), createBlock(unref(IonItem), {
              key: index,
              class: "test-result-item",
              lines: "none"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("h3", _hoisted_5$1, toDisplayString(test.name), 1),
                  createBaseVNode("p", _hoisted_6$1, toDisplayString(test.date), 1)
                ]),
                createVNode(unref(IonChip), {
                  class: normalizeClass(["result-chip", getResultClass(test.value)]),
                  slot: "end"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(test.value), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createVNode(unref(IonButton), {
            fill: "clear",
            size: "default",
            class: "add-results-btn",
            onClick: _cache[0] || (_cache[0] = ($event) => openWhichTestModal())
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), {
                icon: unref(add),
                slot: "start"
              }, null, 8, ["icon"]),
              _cache[3] || (_cache[3] = createTextVNode(" Enter Known Past Results ", -1))
            ]),
            _: 1
          })
        ]),
        createVNode(unref(IonModal), {
          "is-open": isModalOpen.value,
          onDidDismiss: closeModal,
          class: "history-modal"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonToolbar), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createTextVNode("Full Test History (" + toDisplayString(testResults.value.length) + ")", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonButtons), { slot: "end" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), { onClick: closeModal }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode("Close", -1)
                          ])]),
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
            createVNode(unref(IonContent), { class: "modal-content" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_8$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(testResults.value, (test, index) => {
                    return openBlock(), createBlock(unref(IonItem), {
                      key: `modal-${index}`,
                      class: "test-result-item",
                      lines: "none"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_9$1, [
                          createBaseVNode("h3", _hoisted_10$1, toDisplayString(test.name), 1),
                          createBaseVNode("p", _hoisted_11$1, toDisplayString(test.date), 1)
                        ]),
                        createVNode(unref(IonChip), {
                          class: normalizeClass(["result-chip", getResultClass(test.value)]),
                          slot: "end"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test.value), 1)
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(unref(IonModal), {
          "is-open": isWhichTestModalOpen.value,
          onDidDismiss: closeWHichTestModal,
          class: "history-modal"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonToolbar), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [..._cache[5] || (_cache[5] = [
                        createTextVNode("Select Test and Date", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(unref(IonButtons), { slot: "end" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), { onClick: closeWHichTestModal }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode("Close", -1)
                          ])]),
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
            createVNode(unref(IonContent), { class: "modal-content" }, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: whichTest.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              _: 1
            }),
            createVNode(unref(IonFooter), { style: { "padding": "10px" } }, {
              default: withCtx(() => [
                createVNode(DynamicButton, {
                  style: { "float": "right" },
                  name: "Cont.",
                  onClick: setWhichTest
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["is-open"])
      ]);
    };
  }
});

const PastTestResults = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b2ac8efe"]]);

const _hoisted_1 = { style: { "max-width": "900px", "margin": "auto" } };
const _hoisted_2 = { style: { "--background": "#fff", "margin-bottom": "30px" } };
const _hoisted_3 = { class: "demographics" };
const _hoisted_4 = { style: { "text-overflow": "ellipsis" } };
const _hoisted_5 = { style: { "display": "flex", "justify-content": "space-between", "align-content": "center", "padding-bottom": "5px", "padding-top": "5px", "padding-left": "5px" } };
const _hoisted_6 = { style: { "margin-right": "5px" } };
const _hoisted_7 = { style: { "margin-top": "5px" } };
const _hoisted_8 = { class: "demographicsFirstRow" };
const _hoisted_9 = { class: "name custom-name-container" };
const _hoisted_10 = {
  class: "demographicsOtherRow",
  style: { "margin-top": "10px" }
};
const _hoisted_11 = {
  class: "demographicsText",
  style: { "display": "flex", "flex-wrap": "wrap" }
};
const _hoisted_12 = { style: { "flex-shrink": "0" } };
const _hoisted_13 = { style: { "flex-shrink": "0" } };
const _hoisted_14 = {
  key: 0,
  class: "demographicsOtherRow"
};
const _hoisted_15 = { class: "demographicsText mediumFontColor" };
const _hoisted_16 = {
  key: 1,
  class: "demographicsOtherRow"
};
const _hoisted_17 = { class: "demographicsText mediumFontColor" };
const _hoisted_18 = { class: "demographicsOtherRow" };
const _hoisted_19 = { class: "demographicsText smallFont" };
const _hoisted_20 = { class: "mediumFontColor" };
const _hoisted_21 = { style: { "background": "transparent" } };
const _hoisted_22 = { class: "graphSection" };
const _hoisted_23 = {
  class: "graphBtn",
  style: { "margin-bottom": "5px" }
};
const _hoisted_24 = { class: "weightHeightGraphBtns" };
const _hoisted_25 = { key: 0 };
const _hoisted_26 = { key: 1 };
const _hoisted_27 = { style: { "margin-top": "20px" } };
const _hoisted_28 = { class: "test-results-container" };
const _hoisted_29 = { class: "test-buttons-container" };
const _hoisted_30 = { style: { "margin-left": "10px", "margin-right": "10px", "margin-top": "10px" } };
const _hoisted_31 = {
  key: 0,
  class: "pagination-dots"
};
const _hoisted_32 = ["onClick"];
const _hoisted_33 = {
  class: "ion-padding",
  slot: "content"
};
const ITEMS_PER_PAGE = 3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HTSPatientProfile",
  setup(__props) {
    const { event, popoverOpen, openPopover, openPIM, printVisitSummary, printID, formatCurrentAddress } = usePatientProfile();
    const router = useRouter();
    const iconsContent = icons;
    const checkUnderSixWeeks = ref(false);
    const selectedStatus = ref(7);
    const orders = ref([]);
    const results = ref([]);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const currentOrdersPage = ref(0);
    const ordersScrollContainer = ref(null);
    const totalPages = computed(() => Math.ceil(orders.value.length / ITEMS_PER_PAGE));
    const getPageOrders = (pageIndex) => {
      const start = pageIndex * ITEMS_PER_PAGE;
      return orders.value.slice(start, start + ITEMS_PER_PAGE);
    };
    const handleOrdersScroll = (event2) => {
      const target = event2.target;
      const scrollLeft = target.scrollLeft;
      const itemWidth = target.offsetWidth;
      const newPage = Math.round(scrollLeft / itemWidth);
      currentOrdersPage.value = newPage;
    };
    const scrollToPage = (pageIndex) => {
      if (ordersScrollContainer.value) {
        const itemWidth = ordersScrollContainer.value.offsetWidth;
        ordersScrollContainer.value.scrollTo({
          left: pageIndex * itemWidth,
          behavior: "smooth"
        });
      }
    };
    const updateState = async (state) => {
      selectedStatus.value = state;
    };
    const getLabResults = async () => {
      const lab = LabOrderService.getLabResults(patient.value, 9);
      results.value = lab?.results;
    };
    const getReferralTests = async () => {
      if (!patient.value?.labOrders) return;
      const data = [...patient.value?.labOrders?.saved, ...patient.value?.labOrders?.unsaved];
      orders.value = data.filter((item) => item.order_type_id === 9 && !item.tests[0].result);
    };
    const getAge = (dateOfBirth) => {
      return HisDate.calculateDisplayAge(HisDate.toStandardHisFormat(dateOfBirth));
    };
    const checkAge = () => {
      if (!lodashExports.isEmpty(patient.value?.personInformation?.birthdate)) {
        checkUnderSixWeeks.value = HisDate.dateDiffInDays(HisDate.sessionDate(), patient.value?.personInformation?.birthdate) < 42 ? true : false;
      }
    };
    const openVitalsModal = () => {
      createModal(OtherVitals, { class: "otherVitalsModal" });
    };
    const openWH = () => {
      createModal(weightAndHeight, { class: "otherVitalsModal" });
    };
    const getTestName = (order) => {
      if (!order?.tests) return;
      return order?.tests[0]?.name;
    };
    const openHIVTestingModal = async (order) => {
      const testName = getTestName(order) || order.value_text;
      if (testName == "HIV test") {
        await createModal(HIVTestingModal, { class: "otherVitalsModal" }, true, { order });
      }
      if (testName == "Syphilis" || testName == "Hepatitis B Test" || testName == "Hepatitis C Test") {
        await createModal(HepatitisModal, { class: "otherVitalsModal" }, true, { order });
      }
    };
    const isChild = () => {
      const patientService = new PatientService();
      return patientService.isUnderFive();
    };
    const handleSeeHistory = () => {
      console.log("Navigate to full history");
    };
    const handleEnterResults = () => {
      console.log("Enter known results");
    };
    const formatBirthdate = () => {
      return HisDate.toStandardHisDisplayFormat(patient.value?.personInformation?.birthdate);
    };
    watch(
      () => router.currentRoute.value,
      async (data) => {
        if (data.name == "patientProfile" && patient.value.patientID) ;
      }
    );
    watch(patient, async () => {
      if (patient) {
        checkAge();
        await getLabResults();
        await getReferralTests();
      }
    });
    onMounted(async () => {
      checkAge();
      await getReferralTests();
      await getLabResults();
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: normalizeClass(unref(patient)?.personInformation?.gender == "M" ? "initialsBox maleColor" : "initialsBox femaleColor"),
                            style: { "display": "flex", "flex-direction": "column", "align-items": "center" }
                          }, [
                            createVNode(_component_ion_icon, {
                              style: { "color": "#fff", "font-size": "100px" },
                              icon: unref(person)
                            }, null, 8, ["icon"])
                          ], 2)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), null, {
                        default: withCtx(() => [..._cache[15] || (_cache[15] = [
                          createBaseVNode("span", { class: "pill-text" }, "Returning Client", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      unref(patient)?.personInformation?.given_name ? (openBlock(), createBlock(unref(IonRow), {
                        key: 0,
                        class: "custom-name-row"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { class: "custom-name-col" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(patient)?.personInformation?.given_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(patient)?.personInformation?.middle_name ? (openBlock(), createBlock(unref(IonRow), {
                        key: 1,
                        class: "custom-name-row"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { class: "custom-name-col" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(patient)?.personInformation?.middle_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(patient)?.personInformation?.family_name ? (openBlock(), createBlock(unref(IonRow), {
                        key: 2,
                        class: "custom-name-row"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { class: "custom-name-col" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(patient)?.personInformation?.family_name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("span", _hoisted_12, toDisplayString(unref(patient)?.personInformation?.gender == "M" ? "Male" : "Female"), 1),
                      _cache[16] || (_cache[16] = createBaseVNode("span", { style: { "flex-shrink": "0" } }, ".", -1)),
                      createBaseVNode("span", _hoisted_13, toDisplayString(getAge(unref(patient)?.personInformation?.birthdate)) + " (" + toDisplayString(formatBirthdate()) + ")", 1)
                    ])
                  ]),
                  unref(patient)?.personInformation?.current_district ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    _cache[17] || (_cache[17] = createBaseVNode("div", { class: "demographicsText" }, "Current Address:", -1)),
                    createBaseVNode("div", _hoisted_15, toDisplayString(unref(formatCurrentAddress)(unref(patient))), 1)
                  ])) : createCommentVNode("", true),
                  unref(patient)?.personInformation?.country ? (openBlock(), createElementBlock("div", _hoisted_16, [
                    _cache[18] || (_cache[18] = createBaseVNode("div", { class: "demographicsText" }, "Country:", -1)),
                    createBaseVNode("div", _hoisted_17, toDisplayString(unref(patient)?.personInformation?.country), 1)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      _cache[19] || (_cache[19] = createTextVNode(" MRN: ", -1)),
                      createBaseVNode("span", _hoisted_20, toDisplayString(unref(patient).ID), 1)
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createVNode(unref(IonRow), {
                class: "no-wrap-row",
                style: { "align-items": "center" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), { style: { "flex": "1", "min-width": "0" } }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        class: "deactivate-button",
                        fill: "solid",
                        shape: "round"
                      }, {
                        default: withCtx(() => [..._cache[20] || (_cache[20] = [
                          createTextVNode(" Deactivate Visit ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonCol), {
                    size: "auto",
                    style: { "flex-shrink": "0" }
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: "name",
                        style: { "color": "var(--ion-color-primary)", "margin-top": "10px" },
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(openPopover)($event))
                      }, [
                        createVNode(_component_ion_icon, { icon: unref(ellipsisVerticalSharp) }, null, 8, ["icon"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", null, [
              isChild() ? (openBlock(), createBlock(WeightHeightChart, {
                key: 0,
                checkUnderSixWeeks: checkUnderSixWeeks.value,
                showHeightWeight: true
              }, null, 8, ["checkUnderSixWeeks"])) : createCommentVNode("", true),
              !isChild() ? (openBlock(), createBlock(PreviousVitals, { key: 1 })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", null, [
                  createVNode(unref(IonButton), {
                    class: "btnText",
                    fill: "solid",
                    onClick: _cache[1] || (_cache[1] = ($event) => openWH())
                  }, {
                    default: withCtx(() => [
                      !checkUnderSixWeeks.value ? (openBlock(), createElementBlock("span", _hoisted_25, " Enter Weight/Height")) : (openBlock(), createElementBlock("span", _hoisted_26, " Enter Weight")),
                      createVNode(_component_ion_icon, {
                        slot: "end",
                        size: "small",
                        icon: unref(iconsContent).whiteHeightWeight
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", null, [
                  createVNode(unref(IonButton), {
                    class: "btnText",
                    fill: "solid",
                    onClick: _cache[2] || (_cache[2] = ($event) => openVitalsModal())
                  }, {
                    default: withCtx(() => [
                      _cache[21] || (_cache[21] = createTextVNode(" Enter Other Vitals ", -1)),
                      createVNode(_component_ion_icon, {
                        slot: "end",
                        size: "small",
                        icon: unref(iconsContent).whiteVitals
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_27, [
            createVNode(unref(IonItem), { class: "new-orders-header" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), { class: "new-orders-label" }, {
                  default: withCtx(() => [..._cache[22] || (_cache[22] = [
                    createTextVNode(" NEW ORDERS ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_28, [
              createBaseVNode("div", _hoisted_29, [
                createVNode(unref(IonButton), {
                  class: "test-button",
                  fill: "outline",
                  shape: "round",
                  onClick: _cache[3] || (_cache[3] = ($event) => openHIVTestingModal({ value_text: "HIV test", new_order: true }))
                }, {
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
                    createTextVNode(" HIV ", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButton), {
                  class: "test-button",
                  fill: "outline",
                  shape: "round",
                  onClick: _cache[4] || (_cache[4] = ($event) => openHIVTestingModal({ value_text: "Syphilis", new_order: true }))
                }, {
                  default: withCtx(() => [..._cache[24] || (_cache[24] = [
                    createTextVNode(" Syphilis ", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButton), {
                  class: "test-button",
                  fill: "outline",
                  shape: "round",
                  onClick: _cache[5] || (_cache[5] = ($event) => openHIVTestingModal({ value_text: "Hepatitis B Test", new_order: true }))
                }, {
                  default: withCtx(() => [..._cache[25] || (_cache[25] = [
                    createTextVNode(" Hepatitis B ", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButton), {
                  class: "test-button",
                  fill: "outline",
                  shape: "round",
                  onClick: _cache[6] || (_cache[6] = ($event) => openHIVTestingModal({ value_text: "Hepatitis C Test", new_order: true }))
                }, {
                  default: withCtx(() => [..._cache[26] || (_cache[26] = [
                    createTextVNode(" Hepatitis C ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createVNode(PastTestResults, {
                results: results.value,
                onSeeFullHistory: handleSeeHistory,
                onEnterKnownResults: handleEnterResults
              }, null, 8, ["results"])
            ]),
            createVNode(unref(IonItem), {
              class: "new-orders-header",
              style: { "margin-top": "10px" }
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), { class: "new-orders-label" }, {
                  default: withCtx(() => [..._cache[27] || (_cache[27] = [
                    createTextVNode(" ORDERS FROM OTHER CLINICS ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", {
                ref_key: "ordersScrollContainer",
                ref: ordersScrollContainer,
                class: "orders-scroll-container",
                onScroll: handleOrdersScroll
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(totalPages.value, (pageIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: pageIndex,
                    class: "orders-page"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getPageOrders(pageIndex - 1), (test, index) => {
                      return openBlock(), createBlock(unref(IonRow), {
                        key: index,
                        style: { "margin-bottom": "10px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), null, {
                            default: withCtx(() => [
                              createVNode(ReferralCard, {
                                title: getTestName(test),
                                status: `Referred ${test.program_name}`,
                                type: "hiv",
                                onPressed: ($event) => openHIVTestingModal(test)
                              }, null, 8, ["title", "status", "onPressed"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]);
                }), 128))
              ], 544),
              totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_31, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(totalPages.value, (pageIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: pageIndex,
                    class: normalizeClass(["dot", { active: currentOrdersPage.value === pageIndex - 1 }]),
                    onClick: ($event) => scrollToPage(pageIndex - 1)
                  }, null, 10, _hoisted_32);
                }), 128))
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        createVNode(unref(IonPopover), {
          style: { "--offset-x": "-10px" },
          "is-open": unref(popoverOpen),
          "show-backdrop": false,
          event: unref(event),
          onDidDismiss: _cache[14] || (_cache[14] = ($event) => popoverOpen.value = false)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(unref(IonAccordionGroup), { multiple: true }, {
                default: withCtx(() => [
                  createVNode(unref(IonAccordion), {
                    value: "first",
                    "toggle-icon": "",
                    onClick: _cache[7] || (_cache[7] = ($event) => unref(openPIM)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[28] || (_cache[28] = [
                              createTextVNode("Update demographics", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), {
                    value: "first",
                    "toggle-icon": "",
                    onClick: _cache[8] || (_cache[8] = () => {
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[29] || (_cache[29] = [
                              createTextVNode("Follow up visits", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), {
                    value: "second",
                    "toggle-icon": "",
                    onClick: _cache[9] || (_cache[9] = ($event) => unref(printVisitSummary)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[30] || (_cache[30] = [
                              createTextVNode("Print visit summary", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), {
                    value: "third",
                    "toggle-icon": "",
                    onClick: _cache[10] || (_cache[10] = ($event) => unref(printID)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[31] || (_cache[31] = [
                              createTextVNode("Print client identifier", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), { value: "fourth" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[32] || (_cache[32] = [
                              createTextVNode("Update outcome", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_33, [
                        createVNode(unref(IonList), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonToggle), {
                                  checked: selectedStatus.value == 7,
                                  value: "active",
                                  onIonChange: _cache[11] || (_cache[11] = ($event) => updateState(7))
                                }, {
                                  default: withCtx(() => [..._cache[33] || (_cache[33] = [
                                    createTextVNode(" Active ", -1)
                                  ])]),
                                  _: 1
                                }, 8, ["checked"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(IonItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonToggle), {
                                  checked: selectedStatus.value == 6,
                                  value: "inactive",
                                  onIonChange: _cache[12] || (_cache[12] = ($event) => updateState(6))
                                }, {
                                  default: withCtx(() => [..._cache[34] || (_cache[34] = [
                                    createTextVNode(" Inactive ", -1)
                                  ])]),
                                  _: 1
                                }, 8, ["checked"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(IonItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonToggle), {
                                  checked: selectedStatus.value == 3,
                                  value: "died",
                                  onIonChange: _cache[13] || (_cache[13] = ($event) => updateState(3))
                                }, {
                                  default: withCtx(() => [..._cache[35] || (_cache[35] = [
                                    createTextVNode(" Died ", -1)
                                  ])]),
                                  _: 1
                                }, 8, ["checked"])
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
              })
            ])
          ]),
          _: 1
        }, 8, ["is-open", "event"])
      ]);
    };
  }
});

const HTSPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12ad2584"]]);

export { HTSPatientProfile as default };
