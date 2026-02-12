import { a2 as onMounted, f as ref, c as computed, s as defineComponent, aL as useRouter, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, J as Fragment, O as createBlock, B as withCtx, aG as IonContent, bX as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-DrpjccQs.js';
import { _ as _sfc_main$2, u as useFormWizard } from './useFormWizard-qhHmCyMh.js';
import { y as StandardValidations, z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, t as toastWarning, T as Toolbar, F as DynamicButton, _ as _export_sfc } from '../index-CzDIs3ea.js';
import { D as DemographicBar } from './DemographicBar-BWr-xoH2.js';
import { i as isQuickCheckCompleted } from './anc_service-DUYYXe8l.js';

function useReasonForVisitForm() {
  const isSubsequentVisit = ref(false);
  onMounted(async () => {
    isSubsequentVisit.value = await isQuickCheckCompleted();
  });
  console.log("🚀 ~ useReasonForVisitForm ~ isSubsequentVisit:", isSubsequentVisit.value);
  const dangerSignsOptions = [
    "None",
    "Central cyanosis",
    "Pre-term labour",
    "Unconscious",
    "Fever",
    "Imminent delivery",
    "Severe headache",
    "Severe vomiting",
    "Severe abdominal pain",
    "Draining liquor",
    "Respiratory problems",
    "Convulsion history",
    "Vomiting",
    "Oedema",
    "Epigastric pain",
    "Bleeding vaginally",
    "Sepsis",
    "Pre-eclampsia",
    "Puerperal Psychosis",
    "Breast engorgement",
    "Other",
    "Seizures"
  ].map((x) => {
    if (x === "None") {
      return { label: x, value: x, exclusive: true };
    } else return { label: x, value: x };
  });
  const specificHealthConcernsOptions = [
    "Abnormal vaginal discharge",
    "Change in blood pressure-up",
    "Diarrhoea",
    "Vomiting",
    "Genital ulcers",
    "Change in blood pressure-down",
    "Constipation",
    "Contractions",
    "Vaginal bleeding",
    "Intimate partner violence",
    "Flu symptoms",
    "Painful urination",
    "Headache",
    "Dyspepsia",
    "Frequent urination/Polyuria",
    "Injury",
    "Jaundice",
    "Mental health-Depression",
    "Genital warts",
    "Itchy vulva",
    "Painful intercourse",
    "No health concerns",
    "Other"
  ].map((x) => ({ label: x, value: x }));
  const reasonForVisitOptions = computed(() => {
    const base = [
      {
        label: "Scheduled subsequent ANC visit",
        value: "Scheduled subsequent ANC visit"
      },
      {
        label: "Specific complaint related to antenatal care",
        value: "Specific complaint related to antenatal care"
      }
    ];
    if (!isSubsequentVisit.value) {
      base.unshift({
        label: "First antenatal care contact",
        value: "First antenatal care contact"
      });
    }
    return base;
  });
  const reasonForVisitForm = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Reason the woman came to the facility today",
        name: "Reason for visit",
        obsValueType: "value_text",
        type: "inline",
        validation: StandardValidations.required,
        options: reasonForVisitOptions.value
      },
      {
        componentType: "checkboxField",
        header: "What danger signs does the woman have?",
        name: "Danger signs present",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        options: dangerSignsOptions
      },
      {
        componentType: "inputField",
        header: "Specify the danger signs",
        name: "_Danger signs present",
        obsValueType: "value_text",
        type: "text",
        grid: { s: "12" },
        condition: (formValues) => {
          return Array.isArray(formValues["Danger signs present"]) && formValues["Danger signs present"].includes("Other");
        },
        validation: StandardValidations.required
      },
      {
        componentType: "radioButtonField",
        header: "Do you want to refer the woman?",
        name: "Referral required",
        obsValueType: "value_text",
        type: "standard",
        condition: (formValues) => Array.isArray(formValues["Danger signs present"]) && formValues["Danger signs present"].length > 0 && !formValues["Danger signs present"].includes("None"),
        validation: StandardValidations.required,
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "checkboxField",
        header: "What are the specific health concerns for the patient?",
        name: "Specific health concerns",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        options: specificHealthConcernsOptions,
        condition: (formValues) => formValues["Referral required"] === "No"
      },
      {
        componentType: "inputField",
        header: "Other (specify)",
        name: "_Specific health concerns",
        obsValueType: "value_text",
        type: "text",
        condition: (formValues) => formValues["Referral required"] === "No" && Array.isArray(formValues["Specific health concerns"]) && formValues["Specific health concerns"].includes("Other"),
        validation: StandardValidations.required
      }
    ];
  });
  return {
    reasonForVisitForm
  };
}

const _hoisted_1$1 = { class: "custom-card" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReasonForVisit",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const router = useRouter();
    const { reasonForVisitForm } = useReasonForVisitForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() == null) {
        const patient = await ObservationService.buildSaveObs(data, EncounterTypeId.QUICK_CHECK);
        if (patient) toastSuccess("Reason for Visit saved successfully");
        await formRef.value?.resetForm();
        router.push("/anc/home");
      } else {
        toastWarning("Please fix validation errors before submitting");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "ion-text-center" }, "Quick Check", -1)),
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(StandardForm, {
            "form-data": unref(reasonForVisitForm),
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["form-data"])
        ])
      ], 64);
    };
  }
});

const _hoisted_1 = { class: "wizard-container" };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuickCheck",
  setup(__props) {
    const router = useRouter();
    const reasonForVisitRef = ref(null);
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
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const openBackController = () => {
      router.push("/patient-profile");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Reason For Visit",
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
        case "Reason For Visit":
          return "ReasonForVisit";
        default:
          return null;
      }
    };
    const saveData = async () => {
      const componentRefs = [{ ref: reasonForVisitRef }];
      for (const component of componentRefs) {
        if (component.ref.value && typeof component.ref.value.onSubmit === "function") {
          try {
            await component.ref.value.onSubmit();
          } catch (error) {
            console.error(`Error calling  onSubmit:`, error);
          }
        }
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
                  headingTitle: "Quick Check",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  showWizard: false,
                  onChange: unref(onChangeCurrentTab),
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
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
                      createVNode(_sfc_main$1, {
                        ref_key: "reasonForVisitRef",
                        ref: reasonForVisitRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ReasonForVisit"]
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

const QuickCheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61f78173"]]);

export { QuickCheck as default };
