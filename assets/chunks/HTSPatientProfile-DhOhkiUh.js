import { s as storeToRefs } from './pinia-C6LE2xz6.js';
import { v as defineComponent, z as openBlock, A as createElementBlock, bR as withKeys, a9 as withModifiers, a5 as normalizeClass, D as createBaseVNode, K as Fragment, S as renderList, Q as normalizeStyle, B as createVNode, C as withCtx, G as unref, az as IonCol, M as IonIcon, a8 as IonLabel, E as toDisplayString, ag as IonRow, f as ref, c as computed, a3 as onMounted, y as resolveComponent, P as createBlock, a6 as createTextVNode, bD as modalController, L as modalController$1, n as nextTick, O as IonButton, bl as chevronForward, bP as IonChip, ap as IonItem, d5 as add, aK as useRouter, w as watch, d4 as person, J as createCommentVNode, e1 as ellipsisVerticalSharp, aH as IonAccordionGroup, aG as IonAccordion, ao as IonList, au as IonToggle, bo as IonPopover } from './vendor-Cbv9TWZo.js';
import { l as lodashExports } from './lodash-CxXqq_k7.js';
import { n as icons, _ as _export_sfc, u as useDemographicsStore, z as StandardForm, S as Service, q as StandardModal, t as toastWarning, aq as ConceptService, bq as LabOrderService, O as OrderService, y as StandardValidations, F as DynamicButton, o as createModal, H as HisDate, l as PreviousVitals, P as PatientService } from '../index-BWK4lXtd.js';
import { u as usePatientProfile } from './usePatientProfile-CiWispkf.js';
import WeightHeightChart from './WeightHeightChart-BYceZO5A.js';
import { O as OtherVitals, w as weightAndHeight } from './weightAndHeight-ca-CZVE-.js';

const _hoisted_1$6 = ["onKeydown"];
const _hoisted_2$5 = { class: "ripple-container" };
const _hoisted_3$3 = ["onAnimationend"];
const _hoisted_4$3 = { class: "status-badge" };
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
        createBaseVNode("div", _hoisted_2$5, [
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
            }, null, 44, _hoisted_3$3);
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
                    createBaseVNode("span", _hoisted_4$3, toDisplayString(__props.status), 1)
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

const _hoisted_1$5 = { style: { "max-width": "750px" } };
const _hoisted_2$4 = { style: { "text-align": "center", "padding": "15px" } };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
    const props = __props;
    const HIVTestingForm = computed(() => {
      return [
        {
          componentType: "inputField",
          header: "ScanForm Link ID",
          name: "form_link_id",
          obsValueType: "value_text",
          icon: icons.scanner
        },
        {
          componentType: "radioButtonField",
          header: " Outcome Summary",
          name: "outcome_summary",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          options: [
            {
              label: "Unknown, new test NOT done",
              value: "Unknown, new test NOT done"
            },
            {
              label: "Recent negative",
              value: "Recent negative"
            },
            {
              label: "New negative",
              value: "New negative"
            },
            {
              label: "New positive",
              value: "New positive"
            },
            {
              label: "New indeterminate",
              value: "New indeterminate"
            },
            {
              label: "Known positive, not on ART",
              value: "Known positive, not on ART"
            },
            {
              label: "Known positive, on ART",
              value: "Known positive, on ART"
            }
          ]
        }
      ];
    });
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
      modalController.dismiss();
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
    });
    return (_ctx, _cache) => {
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createBlock(StandardModal, {
        title: "HIV Testing",
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Complete", -1)
            ])]),
            _: 1
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$5, [
            createVNode(StandardForm, {
              formData: HIVTestingForm.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"]),
            createBaseVNode("div", _hoisted_2$4, [
              _cache[2] || (_cache[2] = createBaseVNode("span", null, "Reported by: ", -1)),
              createBaseVNode("span", null, toDisplayString(unref(Service).getUserName()), 1)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

const HIVTestingModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-34f1fc74"]]);

const _hoisted_1$4 = { style: { "width": "50vw", "max-width": "600px", "height": "25vh" } };
const _hoisted_2$3 = { style: { "text-align": "center", "padding": "15px" } };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HepatitisModal",
  props: {
    order: {},
    testName: {}
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
          componentType: "inputField",
          header: "ScanForm Link ID",
          name: "form_link_id",
          obsValueType: "value_text",
          icon: icons.scanner
        },
        {
          componentType: "radioButtonField",
          header: "Outcome Summary",
          name: "test_results",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            },
            {
              label: "ND (NotDone)",
              value: "Not Done"
            }
          ]
        }
      ];
    });
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
      await modalController.dismiss();
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
      return openBlock(), createBlock(StandardModal, {
        title: __props.testName + " Testing",
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createVNode(_component_ion_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => save())
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Complete", -1)
            ])]),
            _: 1
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$4, [
            createVNode(StandardForm, {
              formData: HIVTestingForm.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"]),
            createBaseVNode("div", _hoisted_2$3, [
              _cache[2] || (_cache[2] = createBaseVNode("span", null, "Reported by: ", -1)),
              createBaseVNode("span", null, toDisplayString(unref(Service).getUserName()), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const HepatitisModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e9390b14"]]);

const scanFormData = [
  {
    htiBookNumber: 13235,
    htiLeftPageNumber: 43,
    htiRecordNumber: 1,
    htiLeftPageId: 113235043,
    htiLeftSubmissionDate: "2025-10-23T07:36:58",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "AG0K",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 44,
    htiRightPageId: 113235044,
    htiRightSubmissionDate: "2025-09-03T09:11:22",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "AG0K",
    htiLinkId: "13235-44-1-J",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.11,
    htcBookNumber: null,
    htcPageNumber: null,
    htcPageId: null,
    htcSubmissionDate: null,
    htcEntryUrl: null,
    htcInspectableEntryUrl: null,
    htcPhotoTakenProviderId: null,
    htcSubmittedBy: null,
    htcLinkId: null,
    htcShortLocId: null,
    htcFacilityName: null,
    htcHmisCode: null,
    htcDhamisId: null,
    htcRegisterVersion: null,
    htiVisitDate: "2025-08-12T00:00:00",
    htiProviderId: "AG0K",
    htiAccessPointCode: 15,
    htiSex: "M C",
    htiAgeQuantity: 19,
    htiAgeUnit: "Y",
    htiAgeDays: 6935,
    htiLastHivTest: "Prof.-",
    htiTimeSinceLastHivTestQuantity: 1,
    htiTimeSinceLastHivTestUnit: "Y",
    htiTimeSinceLastHivTestDays: 365,
    htiEverTakenArv: "No",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "Ong.",
    htiTestOne: "Neg",
    htiHivKitLotNumber: "0OOOGI9HU8",
    htiHivKitExpiryDate: "2026-02-27T00:00:00",
    htiHepatitisB: "Neg",
    htiSyphilis: "Neg",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "P?",
    htiReferralForReTesting: "RTsT",
    htiReTestingAppointmentDate: "2026-08-12T00:00:00",
    htiReferralForServicesPrep: 1,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "OOOO9499O0",
    htiHepatitisKitExpiryDate: "2026-05-27T00:00:00",
    htiSyphilisKitLotNumber: "OOOO9IS737",
    htiSyphilisKitExpiryDate: "2026-11-02T00:00:00",
    htcVisitDate: null,
    htcProviderId: null,
    htcAccessPointCode: null,
    htcAgeQuantity: null,
    htcAgeUnit: null,
    htcAgeDays: null,
    htcSex: null,
    htcTestTwo: null,
    htcTestThree: null,
    htcTestOneRepeat: null,
    htcResultGiven: null,
    htcKitTwoExpiryDate: null,
    htcKitTwoLotNumber: null,
    htcKitThreeExpiryDate: null,
    htcKitThreeLotNumber: null,
    htcKitOneRepeatExpiryDate: null,
    htcKitOneRepeatLotNumber: null,
    htcRtriResult: null,
    htcRecencyKitExpDate: null,
    htcRecencyKitLotNumber: null,
    htcDbsCollected: null,
    htcDbsId: null,
    htcReferralForReTest: null,
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: null,
    htcAppointmentDateForArtReferral: null,
    htcArtReferralOutcome: null,
    htcArtReferralOutcomeDate: null,
    htcArtSiteCode: null,
    htcArvNumber: null,
    htcArtClinicRegistrationNumber: null
  },
  {
    htiBookNumber: 15843,
    htiLeftPageNumber: 29,
    htiRecordNumber: 1,
    htiLeftPageId: 115843029,
    htiLeftSubmissionDate: "2025-08-07T10:31:51",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "YEK8",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 30,
    htiRightPageId: 115843030,
    htiRightSubmissionDate: "2025-08-28T11:56:27",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "YEK8",
    htiLinkId: "15843-30-1-F",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.12,
    htcBookNumber: 11232,
    htcPageNumber: 32,
    htcPageId: 111232032,
    htcSubmissionDate: "2025-10-24T08:39:09",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "YEK8",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "15843-30-1-F",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-08-04T00:00:00",
    htiProviderId: "YEK8",
    htiAccessPointCode: 7,
    htiSex: "M NC",
    htiAgeQuantity: 7,
    htiAgeUnit: "M",
    htiAgeDays: 213,
    htiLastHivTest: "Einf.",
    htiTimeSinceLastHivTestQuantity: 2,
    htiTimeSinceLastHivTestUnit: "M",
    htiTimeSinceLastHivTestDays: 61,
    htiEverTakenArv: "PrEP",
    htiTimeSinceLastTakenArvQuantity: 1,
    htiTimeSinceLastTakenArvUnit: "M",
    htiTimeSinceLastTakenArvDays: 30,
    htiClientRiskCategory: "ND",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "0000919448",
    htiHivKitExpiryDate: "2026-02-27T00:00:00",
    htiHepatitisB: "ND",
    htiSyphilis: "ND",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "No P",
    htiReferralForReTesting: "ConTsT",
    htiReTestingAppointmentDate: "2025-08-04T00:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: null,
    htiHepatitisKitExpiryDate: null,
    htiSyphilisKitLotNumber: null,
    htiSyphilisKitExpiryDate: null,
    htcVisitDate: "2025-08-04T00:00:00",
    htcProviderId: "PTXY",
    htcAccessPointCode: "07",
    htcAgeQuantity: 7,
    htcAgeUnit: "M",
    htcAgeDays: 213,
    htcSex: "Male",
    htcTestTwo: "Pos",
    htcTestThree: "Pos",
    htcTestOneRepeat: null,
    htcResultGiven: "Exp. Infant",
    htcKitTwoExpiryDate: "2026-10-12T00:00:00",
    htcKitTwoLotNumber: "25OOI78",
    htcKitThreeExpiryDate: "2026-02-12T00:00:00",
    htcKitThreeLotNumber: "O3APJO07A",
    htcKitOneRepeatExpiryDate: null,
    htcKitOneRepeatLotNumber: null,
    htcRtriResult: "Not done",
    htcRecencyKitExpDate: null,
    htcRecencyKitLotNumber: null,
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "No",
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: "Yes",
    htcAppointmentDateForArtReferral: "2025-08-04T00:00:00",
    htcArtReferralOutcome: "Linked",
    htcArtReferralOutcomeDate: "2025-08-26T00:00:00",
    htcArtSiteCode: "SAL",
    htcArvNumber: "19585",
    htcArtClinicRegistrationNumber: "SAL-19585"
  },
  {
    htiBookNumber: 7187,
    htiLeftPageNumber: 9,
    htiRecordNumber: 8,
    htiLeftPageId: 107187009,
    htiLeftSubmissionDate: "2025-09-05T10:47:59",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "AG0K",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 10,
    htiRightPageId: 107187010,
    htiRightSubmissionDate: "2025-09-05T10:48:04",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "AG0K",
    htiLinkId: "7187-10-8-G",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.11,
    htcBookNumber: 11229,
    htcPageNumber: 11,
    htcPageId: 111229011,
    htcSubmissionDate: "2025-10-07T09:17:57",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "AG0K",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "7187-10-8-G",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-08-12T00:00:00",
    htiProviderId: "AG0K",
    htiAccessPointCode: 3,
    htiSex: "M NC",
    htiAgeQuantity: 44,
    htiAgeUnit: "Y",
    htiAgeDays: 16060,
    htiLastHivTest: "Prof.-",
    htiTimeSinceLastHivTestQuantity: 1,
    htiTimeSinceLastHivTestUnit: "Y",
    htiTimeSinceLastHivTestDays: 365,
    htiEverTakenArv: "No",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "Low",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "0OOO9I9449",
    htiHivKitExpiryDate: "2026-02-27T00:00:00",
    htiHepatitisB: "ND",
    htiSyphilis: "ND",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "No P",
    htiReferralForReTesting: "ConTsT",
    htiReTestingAppointmentDate: "2025-08-13T00:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: null,
    htiHepatitisKitExpiryDate: null,
    htiSyphilisKitLotNumber: null,
    htiSyphilisKitExpiryDate: null,
    htcVisitDate: "2025-08-12T00:00:00",
    htcProviderId: "F83N",
    htcAccessPointCode: "03",
    htcAgeQuantity: 44,
    htcAgeUnit: "Y",
    htcAgeDays: 16060,
    htcSex: "Male",
    htcTestTwo: "Neg",
    htcTestThree: null,
    htcTestOneRepeat: "Neg",
    htcResultGiven: "Neg",
    htcKitTwoExpiryDate: "2026-10-11T00:00:00",
    htcKitTwoLotNumber: "25OOI78",
    htcKitThreeExpiryDate: null,
    htcKitThreeLotNumber: null,
    htcKitOneRepeatExpiryDate: "2026-02-27T00:00:00",
    htcKitOneRepeatLotNumber: "OOOO9I9Q49",
    htcRtriResult: "Not done",
    htcRecencyKitExpDate: null,
    htcRecencyKitLotNumber: null,
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "No",
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: "No",
    htcAppointmentDateForArtReferral: null,
    htcArtReferralOutcome: null,
    htcArtReferralOutcomeDate: null,
    htcArtSiteCode: null,
    htcArvNumber: null,
    htcArtClinicRegistrationNumber: null
  },
  {
    htiBookNumber: 15166,
    htiLeftPageNumber: 43,
    htiRecordNumber: 11,
    htiLeftPageId: 115166043,
    htiLeftSubmissionDate: "2025-09-02T11:58:38",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "YEK8",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 44,
    htiRightPageId: 115166044,
    htiRightSubmissionDate: "2025-09-02T11:26:13",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "YEK8",
    htiLinkId: "15166-44-11-J",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.12,
    htcBookNumber: 7258,
    htcPageNumber: 12,
    htcPageId: 107258012,
    htcSubmissionDate: "2025-09-23T13:17:34",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "YEK8",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "15166-44-11-J",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-08-18T00:00:00",
    htiProviderId: "YEK8",
    htiAccessPointCode: 4,
    htiSex: "F NP",
    htiAgeQuantity: 31,
    htiAgeUnit: "Y",
    htiAgeDays: 11315,
    htiLastHivTest: "Prof.-",
    htiTimeSinceLastHivTestQuantity: 2,
    htiTimeSinceLastHivTestUnit: "Y",
    htiTimeSinceLastHivTestDays: 730,
    htiEverTakenArv: "No",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "ND",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "0OOO9228I9",
    htiHivKitExpiryDate: "2026-05-10T00:00:00",
    htiHepatitisB: "Neg",
    htiSyphilis: "Neg",
    htiPartnerPresent: "Yes",
    htiPartnerHivStatus: "P?",
    htiReferralForReTesting: "ConTsT",
    htiReTestingAppointmentDate: "2025-08-18T00:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 1,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "OOO09494OO",
    htiHepatitisKitExpiryDate: "2026-07-27T00:00:00",
    htiSyphilisKitLotNumber: "OOOO9I7375",
    htiSyphilisKitExpiryDate: "2025-11-05T00:00:00",
    htcVisitDate: "2025-08-18T00:00:00",
    htcProviderId: "VFDN",
    htcAccessPointCode: "04",
    htcAgeQuantity: 31,
    htcAgeUnit: "Y",
    htcAgeDays: 11315,
    htcSex: "Female",
    htcTestTwo: "Pos",
    htcTestThree: "Pos",
    htcTestOneRepeat: null,
    htcResultGiven: "New Pos",
    htcKitTwoExpiryDate: "2026-10-11T00:00:00",
    htcKitTwoLotNumber: "2SOOI78",
    htcKitThreeExpiryDate: "2026-02-12T00:00:00",
    htcKitThreeLotNumber: "O3ADJOO7A",
    htcKitOneRepeatExpiryDate: null,
    htcKitOneRepeatLotNumber: null,
    htcRtriResult: "Long term",
    htcRecencyKitExpDate: "2027-01-14T00:00:00",
    htcRecencyKitLotNumber: "P_TDISO2",
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "No",
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: "Yes",
    htcAppointmentDateForArtReferral: "2025-08-18T00:00:00",
    htcArtReferralOutcome: "Linked",
    htcArtReferralOutcomeDate: "2025-08-18T00:00:00",
    htcArtSiteCode: "SAL",
    htcArvNumber: "19570",
    htcArtClinicRegistrationNumber: "SAL-19570"
  },
  {
    htiBookNumber: 15166,
    htiLeftPageNumber: 43,
    htiRecordNumber: 15,
    htiLeftPageId: 115166043,
    htiLeftSubmissionDate: "2025-09-02T11:58:38",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "AG0K",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 44,
    htiRightPageId: 115166044,
    htiRightSubmissionDate: "2025-09-02T11:26:13",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "AG0K",
    htiLinkId: "15166-44-15-F",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.12,
    htcBookNumber: 7258,
    htcPageNumber: 13,
    htcPageId: 107258013,
    htcSubmissionDate: "2025-10-20T09:33:59",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "AG0K",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "15166-44-15-F",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-08-19T00:00:00",
    htiProviderId: "AG0K",
    htiAccessPointCode: 4,
    htiSex: "F NP",
    htiAgeQuantity: 21,
    htiAgeUnit: "Y",
    htiAgeDays: 7665,
    htiLastHivTest: "Nev.",
    htiTimeSinceLastHivTestQuantity: 5,
    htiTimeSinceLastHivTestUnit: "M",
    htiTimeSinceLastHivTestDays: 152,
    htiEverTakenArv: "No",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "Hi",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "0OOO9228I9",
    htiHivKitExpiryDate: "2026-05-10T00:00:00",
    htiHepatitisB: "ND",
    htiSyphilis: "ND",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "P-",
    htiReferralForReTesting: "ConTsT",
    htiReTestingAppointmentDate: "2025-08-19T00:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 1,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 30,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "OOO09494OO",
    htiHepatitisKitExpiryDate: "2026-07-27T00:00:00",
    htiSyphilisKitLotNumber: "OOOO9I7375",
    htiSyphilisKitExpiryDate: "2025-11-05T00:00:00",
    htcVisitDate: "2025-08-19T00:00:00",
    htcProviderId: "VFDN",
    htcAccessPointCode: "04",
    htcAgeQuantity: 21,
    htcAgeUnit: "Y",
    htcAgeDays: 7665,
    htcSex: "Female",
    htcTestTwo: "Pos",
    htcTestThree: "Pos",
    htcTestOneRepeat: null,
    htcResultGiven: "New Pos",
    htcKitTwoExpiryDate: "2026-10-11T00:00:00",
    htcKitTwoLotNumber: "2SOO178",
    htcKitThreeExpiryDate: "2026-02-12T00:00:00",
    htcKitThreeLotNumber: "03ADJ007A",
    htcKitOneRepeatExpiryDate: null,
    htcKitOneRepeatLotNumber: null,
    htcRtriResult: "Long term",
    htcRecencyKitExpDate: "2027-01-14T00:00:00",
    htcRecencyKitLotNumber: "PCTDI5OZ",
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "No",
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: "Yes",
    htcAppointmentDateForArtReferral: "2025-08-19T00:00:00",
    htcArtReferralOutcome: "Unknown",
    htcArtReferralOutcomeDate: "2025-10-20T00:00:00",
    htcArtSiteCode: null,
    htcArvNumber: null,
    htcArtClinicRegistrationNumber: null
  },
  {
    htiBookNumber: 15844,
    htiLeftPageNumber: 85,
    htiRecordNumber: 6,
    htiLeftPageId: 115844085,
    htiLeftSubmissionDate: "2025-08-08T11:19:15",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "YEK8",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 86,
    htiRightPageId: 115844086,
    htiRightSubmissionDate: "2025-08-08T11:22:45",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "YEK8",
    htiLinkId: "15844-86-6-P",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.12,
    htcBookNumber: 7258,
    htcPageNumber: 1,
    htcPageId: 107258001,
    htcSubmissionDate: "2025-09-30T00:00:00",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "YEK8",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "15844-86-6-P",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-08-04T00:00:00",
    htiProviderId: "YEK8",
    htiAccessPointCode: 12,
    htiSex: "F NP",
    htiAgeQuantity: 26,
    htiAgeUnit: "Y",
    htiAgeDays: 9490,
    htiLastHivTest: "Prof.+",
    htiTimeSinceLastHivTestQuantity: 3,
    htiTimeSinceLastHivTestUnit: "M",
    htiTimeSinceLastHivTestDays: 91,
    htiEverTakenArv: "ART",
    htiTimeSinceLastTakenArvQuantity: 3,
    htiTimeSinceLastTakenArvUnit: "M",
    htiTimeSinceLastTakenArvDays: 91,
    htiClientRiskCategory: "ND",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "OOOO9228I9",
    htiHivKitExpiryDate: "2026-03-10T00:00:00",
    htiHepatitisB: "ND",
    htiSyphilis: "ND",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "P-",
    htiReferralForReTesting: "ConTsT",
    htiReTestingAppointmentDate: "2025-08-04T00:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "00O09499O0",
    htiHepatitisKitExpiryDate: "2026-05-27T00:00:00",
    htiSyphilisKitLotNumber: "O00O9I5737",
    htiSyphilisKitExpiryDate: "2025-11-02T00:00:00",
    htcVisitDate: "2025-08-04T00:00:00",
    htcProviderId: "YEK7",
    htcAccessPointCode: 12,
    htcAgeQuantity: 26,
    htcAgeUnit: "Y",
    htcAgeDays: 9490,
    htcSex: "Female",
    htcTestTwo: "Pos",
    htcTestThree: "Pos",
    htcTestOneRepeat: null,
    htcResultGiven: "Pos Re-test",
    htcKitTwoExpiryDate: "2026-10-11T00:00:00",
    htcKitTwoLotNumber: "ZS0OI78",
    htcKitThreeExpiryDate: "2026-02-12T00:00:00",
    htcKitThreeLotNumber: "O3ADJOO7A",
    htcKitOneRepeatExpiryDate: null,
    htcKitOneRepeatLotNumber: null,
    htcRtriResult: "Not done",
    htcRecencyKitExpDate: null,
    htcRecencyKitLotNumber: null,
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "No",
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: "Yes",
    htcAppointmentDateForArtReferral: "2025-08-04T00:00:00",
    htcArtReferralOutcome: "Linked",
    htcArtReferralOutcomeDate: "2025-08-04T00:00:00",
    htcArtSiteCode: "SAL",
    htcArvNumber: 19537,
    htcArtClinicRegistrationNumber: "SAL-19537"
  },
  {
    htiBookNumber: 15166,
    htiLeftPageNumber: 59,
    htiRecordNumber: 13,
    htiLeftPageId: 115166059,
    htiLeftSubmissionDate: "2025-08-26T13:47:33",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "AG0K",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 60,
    htiRightPageId: 115166060,
    htiRightSubmissionDate: "2025-09-02T11:33:40",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "AG0K",
    htiLinkId: "15166-60-13-F",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.12,
    htcBookNumber: 7258,
    htcPageNumber: 16,
    htcPageId: 107258016,
    htcSubmissionDate: "2025-10-20T00:00:00",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "AG0K",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "15166-60-13-F",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-08-25T00:00:00",
    htiProviderId: "AG0K",
    htiAccessPointCode: 4,
    htiSex: "F NP",
    htiAgeQuantity: 23,
    htiAgeUnit: "Y",
    htiAgeDays: 8395,
    htiLastHivTest: "Prof.+",
    htiTimeSinceLastHivTestQuantity: 10,
    htiTimeSinceLastHivTestUnit: "Y",
    htiTimeSinceLastHivTestDays: 3650,
    htiEverTakenArv: "ART",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "ND",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "000O9Z58OZ",
    htiHivKitExpiryDate: "2026-03-10T00:00:00",
    htiHepatitisB: "ND",
    htiSyphilis: "ND",
    htiPartnerPresent: "Yes",
    htiPartnerHivStatus: "P-",
    htiReferralForReTesting: "NoTsT",
    htiReTestingAppointmentDate: null,
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "0OOO9499OD",
    htiHepatitisKitExpiryDate: "2026-05-27T00:00:00",
    htiSyphilisKitLotNumber: "OOOD92S5S4",
    htiSyphilisKitExpiryDate: "2025-11-19T00:00:00",
    htcVisitDate: "2025-08-25T00:00:00",
    htcProviderId: "V8DN",
    htcAccessPointCode: 4,
    htcAgeQuantity: 23,
    htcAgeUnit: "Y",
    htcAgeDays: 8395,
    htcSex: "Female",
    htcTestTwo: null,
    htcTestThree: null,
    htcTestOneRepeat: null,
    htcResultGiven: "Testing was not completed",
    htcKitTwoExpiryDate: null,
    htcKitTwoLotNumber: null,
    htcKitThreeExpiryDate: null,
    htcKitThreeLotNumber: null,
    htcKitOneRepeatExpiryDate: null,
    htcKitOneRepeatLotNumber: null,
    htcRtriResult: "Not done",
    htcRecencyKitExpDate: null,
    htcRecencyKitLotNumber: null,
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "No",
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: "No",
    htcAppointmentDateForArtReferral: null,
    htcArtReferralOutcome: "On ART",
    htcArtReferralOutcomeDate: "2025-10-20T00:00:00",
    htcArtSiteCode: "SAB",
    htcArvNumber: 15742,
    htcArtClinicRegistrationNumber: "SAB-15742"
  },
  {
    htiBookNumber: 4168,
    htiLeftPageNumber: 14,
    htiRecordNumber: 49,
    htiLeftPageId: 14168049,
    htiLeftSubmissionDate: "2025-02-03T11:49:00",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "YEK8",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 50,
    htiRightPageId: 14168050,
    htiRightSubmissionDate: "2025-02-03T11:50:00",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "YEK8",
    htiLinkId: "4168-50-14-F",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.12,
    htcBookNumber: 2573,
    htcPageNumber: 40,
    htcPageId: 12573040,
    htcSubmissionDate: "2025-01-27T11:33:00",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "YEK8",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "4168-50-14-F",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-01-27T02:00:00",
    htiProviderId: "YEK8",
    htiAccessPointCode: 5,
    htiSex: "F Bf",
    htiAgeQuantity: 24,
    htiAgeUnit: "Y",
    htiAgeDays: 8760,
    htiLastHivTest: "Inc?",
    htiTimeSinceLastHivTestQuantity: 3,
    htiTimeSinceLastHivTestUnit: "M",
    htiTimeSinceLastHivTestDays: 91,
    htiEverTakenArv: "No",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "Low",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "0OOQ8I67S1",
    htiHivKitExpiryDate: "2025-04-24T02:00:00",
    htiHepatitisB: "ND",
    htiSyphilis: "ND",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "P-",
    htiReferralForReTesting: "RTsT",
    htiReTestingAppointmentDate: "2025-01-27T02:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "OO0O8U6Q87",
    htiHepatitisKitExpiryDate: "2025-04-26T02:00:00",
    htiSyphilisKitLotNumber: "OOOO842O62",
    htiSyphilisKitExpiryDate: "2025-03-08T02:00:00",
    htcVisitDate: "2025-01-27T02:00:00",
    htcProviderId: "DFCT",
    htcAccessPointCode: 5,
    htcAgeQuantity: 24,
    htcAgeUnit: "Y",
    htcAgeDays: 8760,
    htcSex: "Female",
    htcTestTwo: "Pos",
    htcTestThree: "Neg",
    htcTestOneRepeat: "Pos",
    htcResultGiven: "Inconcl. Re-test",
    htcKitTwoExpiryDate: "2025-04-24T02:00:00",
    htcKitTwoLotNumber: "OOOO8I67SI",
    htcKitThreeExpiryDate: "2025-05-14T02:00:00",
    htcKitThreeLotNumber: "23O222O",
    htcKitOneRepeatExpiryDate: "2025-04-24T02:00:00",
    htcKitOneRepeatLotNumber: "OOOO8I6ZSI",
    htcRtriResult: "Not done",
    htcRecencyKitExpDate: null,
    htcRecencyKitLotNumber: null,
    htcDbsCollected: "Yes",
    htcDbsId: "L668-6J2O-____-____",
    htcReferralForReTest: "No",
    htcAppointmentDateForReTest: null,
    htcReferralForArtReInitiation: "No",
    htcAppointmentDateForArtReferral: null,
    htcArtReferralOutcome: null,
    htcArtReferralOutcomeDate: null,
    htcArtSiteCode: null,
    htcArvNumber: null,
    htcArtClinicRegistrationNumber: null
  },
  {
    htiBookNumber: 15821,
    htiLeftPageNumber: 3,
    htiRecordNumber: 9,
    htiLeftPageId: 115821009,
    htiLeftSubmissionDate: "2025-04-28T09:17:00",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "AG0K",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 10,
    htiRightPageId: 115821010,
    htiRightSubmissionDate: "2025-04-28T09:17:00",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "AG0K",
    htiLinkId: "15821-10-3-P",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.12,
    htcBookNumber: 6764,
    htcPageNumber: 4,
    htcPageId: 106764004,
    htcSubmissionDate: "2025-04-24T09:50:00",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "AG0K",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "15821-10-3-P",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2025-04-09T02:00:00",
    htiProviderId: "AG0K",
    htiAccessPointCode: 11,
    htiSex: "M NC",
    htiAgeQuantity: 35,
    htiAgeUnit: "Y",
    htiAgeDays: 12775,
    htiLastHivTest: "Nev.",
    htiTimeSinceLastHivTestQuantity: 8,
    htiTimeSinceLastHivTestUnit: "Y",
    htiTimeSinceLastHivTestDays: 2920,
    htiEverTakenArv: "No",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "Ong.",
    htiTestOne: "Pos",
    htiHivKitLotNumber: 831375,
    htiHivKitExpiryDate: "2025-06-03T02:00:00",
    htiHepatitisB: "ND",
    htiSyphilis: "ND",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "No P",
    htiReferralForReTesting: "RTsT",
    htiReTestingAppointmentDate: "2025-04-09T02:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 30,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "O0OO812984",
    htiHepatitisKitExpiryDate: "2025-04-25T02:00:00",
    htiSyphilisKitLotNumber: "0O0O92Z486",
    htiSyphilisKitExpiryDate: "2025-11-02T02:00:00",
    htcVisitDate: "2025-04-09T02:00:00",
    htcProviderId: "7M2H",
    htcAccessPointCode: 11,
    htcAgeQuantity: 35,
    htcAgeUnit: "Y",
    htcAgeDays: 12775,
    htcSex: "Male",
    htcTestTwo: "Neg",
    htcTestThree: null,
    htcTestOneRepeat: "Pos",
    htcResultGiven: "Inconcl. Re-test",
    htcKitTwoExpiryDate: "2025-05-25T02:00:00",
    htcKitTwoLotNumber: "23O25OI",
    htcKitThreeExpiryDate: null,
    htcKitThreeLotNumber: null,
    htcKitOneRepeatExpiryDate: "2025-06-03T02:00:00",
    htcKitOneRepeatLotNumber: "OO0O83I375",
    htcRtriResult: "Not done",
    htcRecencyKitExpDate: null,
    htcRecencyKitLotNumber: null,
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "Yes",
    htcAppointmentDateForReTest: "2025-04-23T02:00:00",
    htcReferralForArtReInitiation: "No",
    htcAppointmentDateForArtReferral: null,
    htcArtReferralOutcome: null,
    htcArtReferralOutcomeDate: null,
    htcArtSiteCode: null,
    htcArvNumber: null,
    htcArtClinicRegistrationNumber: null
  },
  {
    htiBookNumber: 2739,
    htiLeftPageNumber: 57,
    htiRecordNumber: 10,
    htiLeftPageId: 12739057,
    htiLeftSubmissionDate: "2024-04-09T08:48:00",
    htiLeftEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableLeftEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiLeftPhotoTakenProviderId: "YEK8",
    htiLeftSubmittedBy: "mw_user1",
    htiRightPageNumber: 58,
    htiRightPageId: 12739058,
    htiRightSubmissionDate: "2024-04-09T08:49:00",
    htiRightEntryUrl: "https://scanform.qed.ai/entry/",
    htiInspectableRightEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htiRightPhotoTakenProviderId: "YEK8",
    htiLinkId: "2739-58-10-F",
    htiShortLocId: 773,
    htiFacilityName: "Salima District Hospital",
    htiHmisCode: 1415,
    htiDhamisId: 216,
    htiRegisterVersion: 1.9,
    htcBookNumber: 980,
    htcPageNumber: 40,
    htcPageId: 10980040,
    htcSubmissionDate: "2024-04-09T08:49:00",
    htcEntryUrl: "https://scanform.qed.ai/entry/",
    htcInspectableEntryUrl: "https://scanform.qed.ai/entry/inspect/",
    htcPhotoTakenProviderId: "YEK8",
    htcSubmittedBy: "mw_user1",
    htcLinkId: "2739-58-10-F",
    htcShortLocId: 773,
    htcFacilityName: "Salima District Hospital",
    htcHmisCode: 1415,
    htcDhamisId: 216,
    htcRegisterVersion: 1.8,
    htiVisitDate: "2024-04-02T02:00:00",
    htiProviderId: "YEK8",
    htiAccessPointCode: 2,
    htiSex: "F P",
    htiAgeQuantity: 19,
    htiAgeUnit: "Y",
    htiAgeDays: 6935,
    htiLastHivTest: "Prof.-",
    htiTimeSinceLastHivTestQuantity: 4,
    htiTimeSinceLastHivTestUnit: "Y",
    htiTimeSinceLastHivTestDays: 1460,
    htiEverTakenArv: "No",
    htiTimeSinceLastTakenArvQuantity: null,
    htiTimeSinceLastTakenArvUnit: null,
    htiTimeSinceLastTakenArvDays: null,
    htiClientRiskCategory: "Ong.",
    htiTestOne: "Pos",
    htiHivKitLotNumber: "OOOO7OO348",
    htiHivKitExpiryDate: "2024-09-07T02:00:00",
    htiHepatitisB: "Neg",
    htiSyphilis: "ND",
    htiPartnerPresent: "No",
    htiPartnerHivStatus: "H?",
    htiReferralForReTesting: "ConTsT",
    htiReTestingAppointmentDate: "2024-04-02T02:00:00",
    htiReferralForServicesPrep: 0,
    htiReferralForServicesPep: 0,
    htiReferralForServicesVmmc: 0,
    htiReferralForServicesSti: 0,
    htiReferralForServicesTb: 0,
    htiFamilyReferralSlips: 0,
    htiCondomsMale: 0,
    htiCondomsFemale: 0,
    htiHepatitisKitLotNumber: "OOOO678Z6O",
    htiHepatitisKitExpiryDate: "2024-07-18T02:00:00",
    htiSyphilisKitLotNumber: null,
    htiSyphilisKitExpiryDate: null,
    htcVisitDate: "2024-04-02T02:00:00",
    htcProviderId: "35Y8",
    htcAccessPointCode: 2,
    htcAgeQuantity: 19,
    htcAgeUnit: "Y",
    htcAgeDays: 6935,
    htcSex: "Female",
    htcTestTwo: "Neg",
    htcTestThree: null,
    htcTestOneRepeat: "Pos",
    htcResultGiven: "New Inconcl.",
    htcKitTwoExpiryDate: "2024-04-09T02:00:00",
    htcKitTwoLotNumber: "2Z0I47I",
    htcKitThreeExpiryDate: null,
    htcKitThreeLotNumber: null,
    htcKitOneRepeatExpiryDate: "2024-09-07T02:00:00",
    htcKitOneRepeatLotNumber: "OOOO7OO3Q8",
    htcRtriResult: "Neg",
    htcRecencyKitExpDate: "2024-08-11T02:00:00",
    htcRecencyKitLotNumber: "P_RHIOO1",
    htcDbsCollected: "No",
    htcDbsId: null,
    htcReferralForReTest: "Yes",
    htcAppointmentDateForReTest: "2024-04-16T02:00:00",
    htcReferralForArtReInitiation: "No",
    htcAppointmentDateForArtReferral: null,
    htcArtReferralOutcome: null,
    htcArtReferralOutcomeDate: null,
    htcArtSiteCode: null,
    htcArvNumber: null,
    htcArtClinicRegistrationNumber: null
  }
];

const _hoisted_1$3 = { style: { "min-height": "50vh" } };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SelectTestDateModal",
  setup(__props) {
    const formRef = ref(null);
    const date = ref("");
    const hivResults = ref("");
    const testType = ref([]);
    const syphilisResults = ref("");
    const hepatitisResults = ref("");
    const isAutoFilled = ref(false);
    const whichTest = computed(
      () => [
        {
          componentType: "inputField",
          header: "ScanForm Link ID",
          name: "form_link_id",
          obsValueType: "value_text",
          icon: icons.scanner,
          onChange: (value) => {
            console.log("🚀 ~ value:", value);
            testType.value = ["HIV test", "Hepatitis B Test", "Syphilis"];
            testType.value = autoFillForm(value);
          },
          grid: { s: "6" }
        },
        {
          componentType: "dateInputField",
          header: "Past Date",
          name: "past_date",
          value: date.value,
          validation: StandardValidations.required,
          grid: { s: "6" },
          showTodayButton: true,
          disabled: isAutoFilled.value
        },
        {
          componentType: "checkboxField",
          header: "Select test",
          name: "testType",
          type: "multiple",
          obsValueType: "value_text",
          value: testType.value,
          validation: StandardValidations.required,
          disabled: isAutoFilled.value,
          // Disable when auto-filled
          options: [
            {
              label: "HIV test",
              value: "HIV test"
            },
            {
              label: "Hepatitis B Test",
              value: "Hepatitis B Test"
            },
            {
              label: "Syphilis",
              value: "Syphilis"
            }
          ]
        },
        { componentType: "Dashes", condition: (formValues) => formValues["testType"].includes("HIV test") },
        {
          componentType: "radioButtonField",
          header: "HIV Outcome Summary",
          name: "hivResults",
          value: hivResults.value,
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          disabled: isAutoFilled.value,
          // Disable when auto-filled
          condition: (formValues) => formValues["testType"].includes("HIV test"),
          options: [
            {
              label: "Unknown, new test NOT done",
              value: "Unknown, new test NOT done"
            },
            {
              label: "Recent negative",
              value: "Recent negative"
            },
            {
              label: "New negative",
              value: "New negative"
            },
            {
              label: "New positive",
              value: "New positive"
            },
            {
              label: "New indeterminate",
              value: "New indeterminate"
            },
            {
              label: "Known positive, not on ART",
              value: "Known positive, not on ART"
            },
            {
              label: "Known positive, on ART",
              value: "Known positive, on ART"
            }
          ]
        },
        { componentType: "Dashes", condition: (formValues) => formValues["testType"].includes("Hepatitis B Test") },
        {
          componentType: "radioButtonField",
          header: "Hepatitis B Outcome Summary",
          name: "hepatitisBResults",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          value: hepatitisResults.value,
          disabled: isAutoFilled.value,
          // Disable when auto-filled
          condition: (formValues) => formValues["testType"].includes("Hepatitis B Test"),
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            },
            {
              label: "ND (NotDone)",
              value: "Not Done"
            }
          ]
        },
        { componentType: "Dashes", condition: (formValues) => formValues["testType"].includes("Syphilis") },
        {
          componentType: "radioButtonField",
          header: " Syphilis Outcome Summary",
          name: "syphilisResults",
          obsValueType: "value_text",
          validation: StandardValidations.required,
          type: "standard",
          value: syphilisResults.value,
          disabled: isAutoFilled.value,
          // Disable when auto-filled
          condition: (formValues) => formValues["testType"].includes("Syphilis"),
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            },
            {
              label: "ND (NotDone)",
              value: "Not Done"
            }
          ]
        }
      ]
    );
    const autoFillForm = (linkId) => {
      const record = scanFormData.find((item) => item.htiLinkId === linkId || item.htcLinkId === linkId);
      if (!record) {
        formRef.value?.resetForm("form_link_id");
        date.value = "";
        hivResults.value = "";
        testType.value = [];
        syphilisResults.value = "";
        hepatitisResults.value = "";
        isAutoFilled.value = false;
        return [];
      }
      const selectedTests = [];
      let testHIVResult = "";
      let testSyphilisResult = "";
      let testHepatitisResult = "";
      let visitDate = "";
      if (record.htcResultGiven && record.htcVisitDate) {
        selectedTests.push("HIV test");
        visitDate = record.htcVisitDate;
        testHIVResult = mapHIVOutcome(record.htcResultGiven);
      } else if (record.htiTestOne && record.htiVisitDate) {
        selectedTests.push("HIV test");
        visitDate = record.htiVisitDate;
        testHIVResult = mapHIVInitialOutcome(record.htiTestOne);
      }
      if (record.htiHepatitisB && record.htiHepatitisB !== "ND") {
        selectedTests.push("Hepatitis B Test");
        visitDate = record.htiVisitDate || visitDate;
        testHepatitisResult = mapHepatitisOutcome(record.htiHepatitisB);
      }
      if (record.htiSyphilis && record.htiSyphilis !== "ND") {
        selectedTests.push("Syphilis");
        visitDate = record.htiVisitDate || visitDate;
        testSyphilisResult = mapSyphilisOutcome(record.htiSyphilis);
      }
      isAutoFilled.value = true;
      nextTick(() => {
        formRef.value?.setFormValue("testType", selectedTests);
        if (visitDate) {
          formRef.value?.setFormValue("past_date", HisDate.toStandardHisDisplayFormat(visitDate));
        }
        if (testHIVResult && selectedTests.includes("HIV test")) {
          hivResults.value = testHIVResult;
        }
        if (testHepatitisResult && selectedTests.includes("Hepatitis B Test")) {
          hepatitisResults.value = testHepatitisResult;
        }
        if (testSyphilisResult && selectedTests.includes("Syphilis")) {
          syphilisResults.value = testSyphilisResult;
        }
      });
      return selectedTests;
    };
    const mapHIVOutcome = (result) => {
      const mapping = {
        "New Pos": "New positive",
        "New Neg": "New negative",
        Neg: "New negative",
        "New Inconcl.": "New indeterminate",
        "Inconcl. Re-test": "New indeterminate",
        "Pos Re-test": "Known positive, on ART",
        "Exp. Infant": "New positive",
        "Known Pos": "Known positive, on ART"
      };
      return mapping[result] || "Unknown, new test NOT done";
    };
    const mapHIVInitialOutcome = (result) => {
      if (result === "Neg") {
        return "Recent negative";
      } else if (result === "Pos") {
        return "New positive";
      }
      return "Unknown, new test NOT done";
    };
    const mapHepatitisOutcome = (result) => {
      const mapping = {
        Neg: "No",
        Pos: "Yes",
        ND: "Not Done"
      };
      return mapping[result] || "Not Done";
    };
    const mapSyphilisOutcome = (result) => {
      const mapping = {
        Neg: "No",
        Pos: "Yes",
        ND: "Not Done"
      };
      return mapping[result] || "Not Done";
    };
    const setWhichTest = async () => {
      const result = formRef.value?.getFormValues();
      const order = { value_text: result.test, new_order: true, past_date: result.past_date };
      modalController$1.dismiss();
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, { title: "Past Test Results" }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            style: { "float": "right" },
            name: "Complete",
            onClick: setWhichTest
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createVNode(StandardForm, {
              formData: whichTest.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"])
          ])
        ]),
        _: 1
      });
    };
  }
});

const _hoisted_1$2 = { class: "modal-test-results-list" };
const _hoisted_2$2 = { class: "test-info" };
const _hoisted_3$2 = { class: "test-name" };
const _hoisted_4$2 = { class: "test-date" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FullTestHistoryModal",
  props: {
    results: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const testResults = computed(() => props.results || []);
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
    return (_ctx, _cache) => {
      const _component_ion_chip = resolveComponent("ion-chip");
      const _component_ion_item = resolveComponent("ion-item");
      return openBlock(), createBlock(StandardModal, {
        title: "Full Test History (" + testResults.value.length + ")"
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            style: { "float": "right" },
            name: "Cont.",
            onClick: _ctx.setWhichTest
          }, null, 8, ["onClick"])
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(testResults.value, (test, index) => {
              return openBlock(), createBlock(_component_ion_item, {
                key: `modal-${index}`,
                class: "test-result-item",
                lines: "none"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$2, [
                    createBaseVNode("h3", _hoisted_3$2, toDisplayString(test.name), 1),
                    createBaseVNode("p", _hoisted_4$2, toDisplayString(test.date), 1)
                  ]),
                  createVNode(_component_ion_chip, {
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
      }, 8, ["title"]);
    };
  }
});

const FullTestHistoryModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-55dfdcff"]]);

const _hoisted_1$1 = { class: "past-test-results" };
const _hoisted_2$1 = { class: "header" };
const _hoisted_3$1 = { class: "test-results-list" };
const _hoisted_4$1 = { class: "test-info" };
const _hoisted_5$1 = { class: "test-name" };
const _hoisted_6$1 = { class: "test-date" };
const _hoisted_7$1 = { class: "add-results-section" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PastTestResults",
  props: {
    results: { default: () => [] }
  },
  emits: ["seeFullHistory", "enterKnownResults"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const testResults = computed(() => props.results || []);
    const limitedTestResults = computed(() => testResults.value.slice(0, 3));
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
    const openWhichTestModal = async () => {
      await createModal(_sfc_main$3, { class: "medium-modal" }, true);
    };
    const openModal = async () => {
      await createModal(FullTestHistoryModal, { class: "otherVitalsModal" }, true, { results: testResults.value });
      emit("seeFullHistory");
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
        ])
      ]);
    };
  }
});

const PastTestResults = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-96437a34"]]);

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
      createModal(OtherVitals, { class: "base-content-modal" });
    };
    const openWH = () => {
      createModal(weightAndHeight, { class: "base-content-modal" });
    };
    const getTestName = (order) => {
      if (!order?.tests) return;
      return order?.tests[0]?.name;
    };
    const openHIVTestingModal = async (order) => {
      const testName = getTestName(order) || order.value_text;
      if (testName == "HIV test") {
        await createModal(HIVTestingModal, { class: "base-content-modal" }, true, { order });
      }
      if (testName == "Syphilis" || testName == "Hepatitis B Test") {
        await createModal(HepatitisModal, { class: "base-content-modal" }, true, { order, testName });
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
                        default: withCtx(() => [..._cache[14] || (_cache[14] = [
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
                      _cache[15] || (_cache[15] = createBaseVNode("span", { style: { "flex-shrink": "0" } }, ".", -1)),
                      createBaseVNode("span", _hoisted_13, toDisplayString(getAge(unref(patient)?.personInformation?.birthdate)) + " (" + toDisplayString(formatBirthdate()) + ")", 1)
                    ])
                  ]),
                  unref(patient)?.personInformation?.current_district ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "demographicsText" }, "Current Address:", -1)),
                    createBaseVNode("div", _hoisted_15, toDisplayString(unref(formatCurrentAddress)(unref(patient))), 1)
                  ])) : createCommentVNode("", true),
                  unref(patient)?.personInformation?.country ? (openBlock(), createElementBlock("div", _hoisted_16, [
                    _cache[17] || (_cache[17] = createBaseVNode("div", { class: "demographicsText" }, "Country:", -1)),
                    createBaseVNode("div", _hoisted_17, toDisplayString(unref(patient)?.personInformation?.country), 1)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      _cache[18] || (_cache[18] = createTextVNode(" MRN: ", -1)),
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
                        default: withCtx(() => [..._cache[19] || (_cache[19] = [
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
                      _cache[20] || (_cache[20] = createTextVNode(" Enter Other Vitals ", -1)),
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
                  default: withCtx(() => [..._cache[21] || (_cache[21] = [
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
                  default: withCtx(() => [..._cache[22] || (_cache[22] = [
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
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
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
                  default: withCtx(() => [..._cache[24] || (_cache[24] = [
                    createTextVNode(" Hepatitis B ", -1)
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
                  default: withCtx(() => [..._cache[25] || (_cache[25] = [
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
          onDidDismiss: _cache[13] || (_cache[13] = ($event) => popoverOpen.value = false)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(unref(IonAccordionGroup), { multiple: true }, {
                default: withCtx(() => [
                  createVNode(unref(IonAccordion), {
                    value: "first",
                    "toggle-icon": "",
                    onClick: _cache[6] || (_cache[6] = ($event) => unref(openPIM)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[26] || (_cache[26] = [
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
                    onClick: _cache[7] || (_cache[7] = () => {
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[27] || (_cache[27] = [
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
                    onClick: _cache[8] || (_cache[8] = ($event) => unref(printVisitSummary)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[28] || (_cache[28] = [
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
                    onClick: _cache[9] || (_cache[9] = ($event) => unref(printID)())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[29] || (_cache[29] = [
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
                            default: withCtx(() => [..._cache[30] || (_cache[30] = [
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
                                  onIonChange: _cache[10] || (_cache[10] = ($event) => updateState(7))
                                }, {
                                  default: withCtx(() => [..._cache[31] || (_cache[31] = [
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
                                  onIonChange: _cache[11] || (_cache[11] = ($event) => updateState(6))
                                }, {
                                  default: withCtx(() => [..._cache[32] || (_cache[32] = [
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
                                  onIonChange: _cache[12] || (_cache[12] = ($event) => updateState(3))
                                }, {
                                  default: withCtx(() => [..._cache[33] || (_cache[33] = [
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

const HTSPatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67cc3517"]]);

export { HTSPatientProfile as default };
