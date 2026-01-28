import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bd as IonCardContent, bL as IonCard, f as ref, aL as useRouter, a2 as onMounted, O as createBlock, aG as IonContent, C as createBaseVNode, bY as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-DlXvc2CI.js';
import { _ as _sfc_main$2 } from './Wizard.vue_vue_type_script_setup_true_lang-seo70Tyl.js';
import { z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-Di9oihr7.js';
import { D as DemographicBar } from './DemographicBar-B4OldQWW.js';
import { u as useFormWizard } from './useFormWizard-CAqg5uX9.js';
import { S as SecondStageDelivery, T as ThirdStageDelivery } from './ThirdStageDelivery-BWDFPxm2.js';
import { u as useLocation } from './useLocation-B6Gro1Tg.js';

const useMaternalObstetricEmergencyComplications = () => {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const maternalObstetricEmergencyComplicationsFormSection = computed(() => {
    return [
      {
        componentType: "checkboxField",
        name: "Causes",
        header: "Causes",
        type: "multiple",
        obsValueType: "value_coded",
        options: [
          { label: "Uterine Atony", value: "Uterine Atony" },
          { label: "Tissue", value: "Tissue" },
          { label: "Trauma", value: "Trauma" },
          { label: "Thrombin", value: "Thrombin" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      /* ===================== MANAGEMENT ===================== */
      {
        componentType: "Heading",
        position: "left",
        name: "Management"
      },
      {
        componentType: "radioButtonField",
        name: "Was E-MOTIVE bundle used",
        header: "Was E-MOTIVE bundle used",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      /* ---------- EARLY DETECTION ---------- */
      {
        componentType: "checkboxField",
        name: "Early detection criteria",
        header: "Early detection criteria",
        type: "multiple",
        obsValueType: "value_coded",
        options: [
          {
            label: "Clinical Judgment",
            value: "Clinical Judgment"
          },
          {
            label: "Blood loss ≥300ml + one abnormal observation",
            value: "Blood loss ≥300ml + one abnormal observation"
          },
          {
            label: "Blood loss ≥500ml",
            value: "Blood loss ≥500ml"
          }
        ],
        grid: { xs: "12" },
        condition: (formValues) => formValues["Was E-MOTIVE bundle used"] === "Yes"
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      /* ---------- UTERINE MASSAGE ---------- */
      {
        componentType: "radioButtonField",
        name: "Uterine Massage",
        header: "Uterine Massage",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      /* ---------- OXYTOCIC DRUGS ---------- */
      {
        componentType: "Heading",
        position: "left",
        name: "Oxytocic Drugs"
      },
      {
        componentType: "radioButtonField",
        name: "Oxytocin 10IU in 500ml NS or RL over 10 mins",
        header: "Oxytocin 10IU in 500ml NS or RL over 10 mins",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Oxytocin 20IU in 1000ml NS or RL over 4 hrs",
        header: "Oxytocin 20IU in 1000ml NS or RL over 4 hrs",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Misoprostol 800mcg sublingual or rectal",
        header: "Misoprostol 800mcg sublingual or rectal",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "1g Tranexamic Acid IV slow push over 10 minutes",
        header: "1g Tranexamic Acid IV slow push over 10 minutes",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Requires IV fluids",
        header: "IV fluids given",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        name: "IV fluids volume (mls)",
        header: "IV fluids volume (mls)",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => formValues["IV fluids given"] === "Yes"
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      /* ---------- EXAMINATION ---------- */
      {
        componentType: "radioButtonField",
        name: "Examination done",
        header: "Examination done",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "checkboxField",
        name: "Examination",
        header: "Examination findings",
        type: "multiple",
        obsValueType: "value_coded",
        options: [
          { label: "Bladder empty", value: "Bladder empty" },
          { label: "Tears checked", value: "Tears checked" },
          { label: "Clots evacuated", value: "Clots evacuated" },
          {
            label: "Placenta examined for completeness",
            value: "Placenta examined"
          }
        ],
        grid: { xs: "12" },
        condition: (formValues) => formValues["Examination done"] === "Yes"
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      /* ---------- ESCALATION ---------- */
      {
        componentType: "radioButtonField",
        name: "Escalation done",
        header: "Escalation done",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "checkboxField",
        name: "Escalation measures",
        header: "Escalation measures",
        type: "multiple",
        obsValueType: "value_coded",
        options: [
          { label: "Bimanual uterine compression", value: "Bimanual uterine compression" },
          { label: "Application of NASG", value: "NASG" },
          { label: "Aortic compression", value: "Aortic compression" },
          { label: "Uterine balloon tamponade", value: "Uterine balloon tamponade" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12" },
        condition: (formValues) => formValues["Escalation done"] === "Yes"
      },
      {
        componentType: "inputField",
        name: "Specify other escalation",
        header: "Specify other escalation",
        obsValueType: "value_text",
        grid: { xs: "12" },
        condition: (formValues) => {
          return formValues["Escalation done"] === "Yes" && formValues["Escalation measures"]?.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      /* ===================== SPECIFIC COMPLICATIONS ===================== */
      {
        componentType: "radioButtonField",
        name: "Retained placenta",
        header: "Retained placenta",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Manual removal done",
        header: "Manual removal done",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" },
        condition: (formValues) => formValues["Retained placenta"] === "Yes"
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "radioButtonField",
        name: "Maternal sepsis",
        header: "Maternal sepsis",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "FAST M bundle given",
        header: "FAST M bundle given",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" },
        condition: (formValues) => formValues["Maternal sepsis"] === "Yes"
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "Heading",
        position: "left",
        name: "Preeclampsia / Eclampsia"
      },
      {
        componentType: "radioButtonField",
        name: "Anticonvulsant administered",
        header: "Anticonvulsant administered",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Antihypertensives administered",
        header: "Antihypertensives administered",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "Heading",
        position: "left",
        name: "Ruptured Uterus"
      },
      {
        componentType: "radioButtonField",
        name: "Repair done",
        header: "Repair done",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Hysterectomy done",
        header: "Hysterectomy done",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      {
        componentType: "Heading",
        position: "left",
        name: "Retained Products of Conception"
      },
      {
        componentType: "radioButtonField",
        name: "Evacuation done",
        header: "Evacuation done",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Misoprostol administered",
        header: "Misoprostol administered",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        name: "Other complications",
        header: "Specify other complications",
        obsValueType: "value_text",
        grid: { xs: "12" }
      },
      { componentType: "Dashes", grid: { s: "12" } },
      /* ===================== REFERRAL ===================== */
      {
        componentType: "radioButtonField",
        name: "Referral done",
        header: "Referral done",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "multiSelectInputField",
        name: "Referral facility",
        header: "Referral destination",
        placeholder: "Search for facility",
        obsValueType: "value_text",
        openDirection: "auto",
        options: facilityList.value.facilities || facilityList.value,
        grid: { xs: "12" },
        condition: (formValues) => formValues["Referral done"] === "Yes"
      }
    ];
  });
  return {
    maternalObstetricEmergencyComplicationsFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ObstetricComplications",
  setup(__props, { expose: __expose }) {
    const maternalObstetricEmergencyComplicationsComposable = useMaternalObstetricEmergencyComplications();
    const formRef = ref(null);
    const maternalObstetricEmergencyComplicationsForm = computed(() => {
      return maternalObstetricEmergencyComplicationsComposable.maternalObstetricEmergencyComplicationsFormSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit)) toastSuccess("Obstetric Complications data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": maternalObstetricEmergencyComplicationsForm.value
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

const ObstetricComplications = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24b2399b"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "10px auto 0" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "deliveryDetails",
  setup(__props) {
    const router = useRouter();
    const thirdStageDeliveryRef = ref(null);
    const secondStageDeliveryRef = ref(null);
    const obstetricComplications = ref(null);
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
      router.push("home");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Second Stage of Labour",
          icon: ""
        },
        {
          title: "Third Stage of Labour",
          icon: ""
        },
        {
          title: "Obstetric Complications",
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
        case "Second Stage of Labour":
          return "SecondStageDelivery";
        case "Third Stage of Labour":
          return "ThirdStageDelivery";
        case "Obstetric Complications":
          return "ObstetricComplications";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [
        { ref: secondStageDeliveryRef },
        { ref: thirdStageDeliveryRef },
        { ref: obstetricComplications }
      ];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error("Error onSubmit: ", error);
          }
        }
        router.push("home");
      }
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
                createVNode(_sfc_main$2, {
                  ref: "wizard",
                  headingTitle: "Delivery Details",
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
                          name: "Back to home",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(SecondStageDelivery, {
                        ref_key: "secondStageDeliveryRef",
                        ref: secondStageDeliveryRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "SecondStageDelivery"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ThirdStageDelivery, {
                        ref_key: "thirdStageDeliveryRef",
                        ref: thirdStageDeliveryRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ThirdStageDelivery"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ObstetricComplications, {
                        ref_key: "obstetricComplications",
                        ref: obstetricComplications
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ObstetricComplications"]
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
