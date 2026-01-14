import { C as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, bX as toastSuccess$1 } from '../index-BaBlba8w.js';
import { d as computed, q as defineComponent, r as ref, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx, E as unref, b9 as IonCardContent, bI as IonCard } from './vendor-BPW-J91F.js';

const usePreventativeCounsellingForm = () => {
  const preventativeCounselingFormSection = computed(() => {
    return [
      // ========== Question 1: PREVENTIVE COUNSELLING DONE ==========
      {
        componentType: "checkboxField",
        header: "Which preventive counselling done?",
        name: "Preventive counselling",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "PrEp for HIV prevention provided",
            value: "PrEp for HIV prevention provided"
          },
          {
            label: "Counselling on seeking care",
            value: "Counselling on seeking care"
          },
          {
            label: "Counselling on antacid",
            value: "Counselling on antacid"
          },
          {
            label: "Counselling to immediately go to hospital if severe danger signs are present",
            value: "Counselling to immediately go to hospital if severe danger signs are present"
          },
          {
            label: "Counselling conducted on birth preparedness and complications",
            value: "Counselling conducted on birth preparedness and complications"
          },
          {
            label: "Counselling on TB screening",
            value: "Counselling on TB screening"
          },
          {
            label: "Counselling on intrapartum",
            value: "Counselling on intrapartum"
          },
          {
            label: "Counselling on postpartum",
            value: "Counselling on postpartum"
          },
          {
            label: "Counselling on breast feeding",
            value: "Counselling on breast feeding"
          },
          {
            label: "None",
            value: "None",
            exclusive: true
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: REASON NOT DONE ==========
      {
        componentType: "checkboxField",
        header: "Reason if any preventive counselling was not done?",
        name: "Reason preventive counselling not done",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Preventive counselling"] == "None";
        },
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "Client was referred",
            value: "client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 3: CONDITIONAL INPUT (Other) ==========
      {
        name: "_Reason preventive counselling not done",
        header: "Other (specify)",
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "12" },
        // Show ONLY if "Other" is selected in the reason list
        condition: (allFormValues) => {
          return allFormValues["Reason preventive counselling not done"]?.includes("Other");
        }
      }
    ];
  });
  return {
    preventativeCounselingFormSection
  };
};

const _hoisted_1$4 = { class: "container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PreventativeCounselling",
  setup(__props, { expose: __expose }) {
    const preventativeComposable = usePreventativeCounsellingForm();
    const formRef = ref(null);
    const preventativeCounsellingForm = computed(() => {
      return preventativeComposable.preventativeCounselingFormSection.value;
    });
    const onSubmit = async () => {
      const formData = formRef.value?.getFormValues();
      if (Object.keys(formData || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(formData, EncounterTypeId.Counseling)) toastSuccess("Preventative Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": preventativeCounsellingForm.value
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

const PreventativeCounselling = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a9363d61"]]);

const useBehaviourCounsellingForm = () => {
  const behaviourCounsellingFormSection = computed(() => {
    return [
      // ========== Question 1: BEHAVIOUR COUNSELLING DONE ==========
      {
        componentType: "checkboxField",
        header: "Behavior counselling done",
        name: "Behaviour counselling",
        type: "multiple",
        obsValueType: "value_coded",
        value: [],
        // Initialize as an empty array for multiple checkboxes
        options: [
          {
            label: "Counselling on caffeine",
            value: "Counselling on caffeine"
          },
          {
            label: "Counselling on tobacco",
            value: "Counselling on tobacco"
          },
          {
            label: "Counselling on second hand smoke",
            value: "Counselling on second hand smoke"
          },
          {
            label: "Counselling conducted on condom use",
            value: "Counselling conducted on condom use"
          },
          {
            label: "Counselling conducted on alcohol/substance",
            value: "Counselling conducted on alcohol/substance"
          },
          {
            label: "None",
            value: "None",
            exclusive: true
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: REASON NOT DONE ==========
      {
        componentType: "checkboxField",
        name: "Reason behaviour counselling not done",
        header: "Reason if any behaviour counselling not conducted?",
        type: "multiple",
        value: [],
        // Initialize as an empty array
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Behaviour counselling"] == "None";
        },
        options: [
          {
            label: "Client was referred",
            value: "Client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== IF OTHER: CONDITIONAL INPUT ==========
      {
        name: "_Reason behaviour counselling not done",
        header: "Other (specify)",
        componentType: "inputField",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "12" },
        // Show only when "Other" is selected in the reasons
        condition: (allFormValues) => {
          return allFormValues["Behaviour counselling"] == "None" && allFormValues["Reason behaviour counselling not done"].includes("Other");
        }
      }
    ];
  });
  return {
    behaviourCounsellingFormSection
  };
};

const _hoisted_1$3 = { class: "container" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BehaviourCounselling",
  setup(__props, { expose: __expose }) {
    const behaviourComposable = useBehaviourCounsellingForm();
    const formRef = ref(null);
    const behaviourCounsellingForm = computed(() => {
      return behaviourComposable.behaviourCounsellingFormSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": behaviourCounsellingForm.value
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

const BehaviourCounselling = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8561102d"]]);

const usePhysiologicalCounselingForm = () => {
  const physiologicalCounsellingFormSection = computed(() => {
    return [
      // ========== Question 1: PHYSIOLOGICAL COUNSELLING DONE ==========
      {
        componentType: "checkboxField",
        header: "Which physiological counselling done?",
        name: "Psychosocial counseling",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "Counselling on non-pharmacological measures",
            value: "Counselling on non-pharmacological measures"
          },
          {
            label: "Counselling conducted on lifestyle",
            value: "Counselling conducted on lifestyle"
          },
          {
            label: "Counselling on antacid",
            value: "Counselling on antacid"
          },
          {
            label: "Counselling on leg craps",
            value: "Counselling on leg craps"
          },
          {
            label: "Counselling on the use magnesium and calcium",
            value: "Counselling on the use magnesium and calcium"
          },
          {
            label: "Counselling on dietary modifications",
            value: "Counselling on dietary modifications"
          },
          {
            label: "Counselling conducted on the use of wheat bran and other fibre supplements",
            value: "Counselling conducted on the use of wheat bran and other fibre supplements"
          },
          {
            label: "Counselling on regular exercises",
            value: "Counselling on regular exercises"
          },
          {
            label: "Counselling on varicose veins and oedema",
            value: "Counselling on varicose veins and oedema"
          },
          {
            label: "None",
            value: "None",
            exclusive: true
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: REASON NOT DONE ==========
      {
        componentType: "checkboxField",
        header: "Reason if any physiological counselling was not done?",
        name: "Reason physiological counselling not done",
        type: "multiple",
        condition: (allFormValues) => {
          return allFormValues["Psychosocial counseling"] == "None";
        },
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "Client was referred",
            value: "client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 3: CONDITIONAL INPUT (Other) ==========
      {
        name: "_Reason physiological counselling not done",
        header: "Other (specify)",
        componentType: "inputField",
        value: "",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "12" },
        // Show ONLY if "Other" is selected in the reason list
        condition: (allFormValues) => {
          return allFormValues["Reason physiological counselling not done"]?.includes("Other");
        }
      }
    ];
  });
  return {
    physiologicalCounsellingFormSection
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PhysiologicalCounseling",
  setup(__props, { expose: __expose }) {
    const physiologicalComposable = usePhysiologicalCounselingForm();
    const formRef = ref(null);
    const physiologicalCounsellingForm = computed(() => {
      return physiologicalComposable.physiologicalCounsellingFormSection.value;
    });
    const onSubmit = async () => {
      const formData = formRef.value?.getFormValues();
      if (Object.keys(formData || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(formData, EncounterTypeId.Counseling)) toastSuccess("Pysiological Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": physiologicalCounsellingForm.value
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

const PhysiologicalCounseling = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-967be6cf"]]);

const useDietCounselingForm = () => {
  const dietCounselingFormSection = computed(() => {
    return [
      // ========== Question 1: DIET COUNSELLING DONE ==========
      {
        componentType: "checkboxField",
        header: "Which diet counselling done?",
        name: "Counselling on diet",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "Counselling on six food balanced diet",
            value: "Counselling on six food balanced diet"
          },
          {
            label: "Counselling on keeping physically active",
            value: "Counselling on keeping physically active"
          },
          {
            label: "Counselling  conducted on increasingly daily energy and protein supplementation",
            value: "Counselling  conducted on increasingly daily energy and protein supplementation"
          },
          {
            label: "None",
            value: "None",
            exclusive: true
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: REASON NOT DONE ==========
      {
        componentType: "checkboxField",
        header: "Reason if any diet counselling was not done?",
        name: "Reason any diet counselling was not done",
        type: "multiple",
        condition: (allFormValues) => {
          return allFormValues["Counselling on diet"] == "None";
        },
        obsValueType: "value_coded",
        value: [],
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "Client was referred",
            value: "client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      // ========== Question 3: CONDITIONAL INPUT (Other) ==========
      {
        name: "_Reason any diet counselling was not done",
        header: "Other (specify)",
        componentType: "inputField",
        value: "",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "12" },
        // Show ONLY if "Other" is selected in the reason list
        condition: (allFormValues) => {
          return allFormValues["Reason any diet counselling was not done"]?.includes("Other");
        }
      }
    ];
  });
  return {
    dietCounselingFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DietCounselling",
  setup(__props, { expose: __expose }) {
    const dietComposable = useDietCounselingForm();
    const formRef = ref(null);
    const dietCounsellingForm = computed(() => {
      return dietComposable.dietCounselingFormSection.value;
    });
    const onSubmit = async () => {
      const formData = formRef.value?.getFormValues();
      if (Object.keys(formData || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(formData, EncounterTypeId.Counseling)) toastSuccess$1("Pysiological Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": dietCounsellingForm.value
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

const DietCounselling = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1260e9b8"]]);

const useClinicalCounselingForm = () => {
  const clinicalCounselingFormSection = computed(() => {
    return [
      // ========== Question 1: CLINICAL COUNSELLING DONE ==========
      {
        componentType: "checkboxField",
        header: "Which clinical counselling done?",
        name: "Clinical counselling",
        type: "multiple",
        obsValueType: "value_coded",
        value: [],
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "Counseling conducted on the risks of severe hypertension",
            value: "Counseling conducted on the risks of severe hypertension"
          },
          {
            label: "Counselling on HIV positive",
            value: "Counselling on HIV positive"
          },
          {
            label: "Counselling on Hepatitis B",
            value: "Counselling on Hepatitis B"
          },
          {
            label: "Counselling on Hepatitis C",
            value: "Counselling on Hepatitis C"
          },
          {
            label: "Counselling on Syphilis",
            value: "Counselling on Syphilis"
          },
          {
            label: "Counselling on TB screening",
            value: "Counselling on TB screening"
          },
          {
            label: "Counselling on gestational diabetes mellitus (GDM)",
            value: "Counselling on gestational diabetes mellitus (GDM)"
          },
          {
            label: "Counselling on anaemia conducted",
            value: "Counselling on anaemia conducted"
          },
          {
            label: "None",
            value: "None",
            exclusive: true
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      // ========== Question 2: REASON NOT DONE ==========
      {
        componentType: "checkboxField",
        header: "Reason if any clinical counselling was not done?",
        name: "Reason clinical counselling not done",
        type: "multiple",
        value: [],
        obsValueType: "value_coded",
        condition: (allFormValues) => {
          return allFormValues["Clinical counselling"] == "None";
        },
        grid: { xs: "12", sm: "12" },
        options: [
          {
            label: "Client was referred",
            value: "client was referred"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        name: "_Reason clinical counselling not done",
        header: "Other (specify)",
        componentType: "inputField",
        obsValueType: "value_text",
        value: "",
        grid: { xs: "12", sm: "12" },
        // Show ONLY if "Other" is selected in the reason list
        condition: (allFormValues) => {
          return allFormValues["Reason clinical counselling not done"]?.includes("Other");
        }
      }
    ];
  });
  return {
    clinicalCounselingFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ClinicalCounselling",
  setup(__props, { expose: __expose }) {
    const clinicalComposable = useClinicalCounselingForm();
    const formRef = ref(null);
    const clinicalCounsellingForm = computed(() => {
      return clinicalComposable.clinicalCounselingFormSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess$1("Clinical Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": clinicalCounsellingForm.value
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

const ClinicalCounselling = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7a866e2"]]);

export { BehaviourCounselling as B, ClinicalCounselling as C, DietCounselling as D, PreventativeCounselling as P, PhysiologicalCounseling as a };
