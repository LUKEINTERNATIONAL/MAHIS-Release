import { c as computed, s as defineComponent, a2 as onMounted, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bd as IonCardContent, bK as IonCard, f as ref, aL as useRouter, O as createBlock, aG as IonContent, C as createBaseVNode, bX as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-DrpjccQs.js';
import { _ as _sfc_main$2, u as useFormWizard } from './useFormWizard-qhHmCyMh.js';
import { y as StandardValidations, z as StandardForm, K as ObservationService, b as EncounterTypeId, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-DcHp0H-N.js';
import { D as DemographicBar } from './DemographicBar-Cbkf-pgW.js';
import { V as Vitals } from './Vitals-BcsY2s7-.js';
import { u as useContinuousMonitoringStore, O as OtherExams } from './OtherExams-7-2vD4Mz.js';

const isSelected = (val, v) => Array.isArray(val) ? val.includes(v) : val === v;
const useContinuousMonitoringProgressOfLabourForm = () => {
  const progressOfLabourForm = computed(() => [
    {
      componentType: "radioButtonField",
      name: "Descent",
      header: "Descent",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "5/5", value: "5/5" },
        { label: "4/5", value: "4/5" },
        { label: "3/5", value: "3/5" },
        { label: "2/5", value: "2/5" },
        { label: "1/5", value: "1/5" },
        { label: "0/5", value: "0/5" }
      ]
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "inputField",
      name: "Contractions",
      header: "Contractions",
      type: "number",
      obsValueType: "value_numeric",
      grid: { xs: "12", md: "12" },
      validation: (value) => {
        if (value === "" || value === null || value === void 0) return null;
        return StandardValidations.isNotEmptyandNumber(value);
      }
    },
    {
      componentType: "radioButtonField",
      name: "Severity of contractions",
      header: "Severity of contractions",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "No contractions", value: "no contractions" },
        { label: "Mild", value: "mild" },
        { label: "Moderate", value: "moderate" },
        { label: "Strong", value: "strong" }
      ]
    },
    {
      componentType: "radioButtonField",
      name: "Contractions Remarks",
      header: "Contractions Remarks",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "Regular", value: "regular" },
        { label: "Irregular", value: "irregular" }
      ]
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "inputField",
      name: "Cervical dilation",
      header: "Cervical dilation (0-10 cm)",
      type: "number",
      unit: "cm",
      obsValueType: "value_numeric",
      grid: { xs: "12", md: "12" },
      validation: (value) => {
        if (value === "" || value === null || value === void 0) return null;
        return StandardValidations.isNotEmptyandNumber(value) || StandardValidations.checkMinMax(value, 0, 10);
      }
    },
    {
      componentType: "radioButtonField",
      name: "Fetal Station",
      header: "Fetal Station",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      validation: StandardValidations.required,
      options: [
        { label: "-4", value: "-4" },
        { label: "-3", value: "-3" },
        { label: "-2", value: "-2" },
        { label: "-1", value: "-1" },
        { label: "0", value: "0" },
        { label: "+1", value: "+1" },
        { label: "+2", value: "+2" },
        { label: "+3", value: "+3" }
      ]
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "radioButtonField",
      name: "Umbilical Cord",
      header: "Umbilical Cord",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "Not felt", value: "not felt" },
        { label: "Presenting", value: "presenting" },
        { label: "Prolapsed", value: "prolapsed" }
      ]
    },
    {
      componentType: "radioButtonField",
      name: "Pulsating",
      header: "Pulsating?",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => ["presenting", "prolapsed"].includes(vals?.["Umbilical Cord"]),
      validation: (value, vals) => {
        if (!["presenting", "prolapsed"].includes(vals?.["Umbilical Cord"])) return null;
        return StandardValidations.required(value);
      },
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ]
    },
    {
      componentType: "Alert",
      value: "This is an emergency and client's position need to be changed and be managed by a multidisciplinary team.",
      backgroundColor: "#FECDCA",
      textColor: "#B42318",
      condition: (vals) => ["presenting", "prolapsed"].includes(vals?.["Umbilical Cord"]),
      grid: { xs: "12", md: "12" }
    },
    {
      componentType: "Alert",
      value: "This is an emergency and client's position need to be changed and be managed by a multidisciplinary team.",
      backgroundColor: "#FECDCA",
      textColor: "#B42318",
      condition: (vals) => vals?.["Pulsating"] === "yes",
      grid: { xs: "12", md: "12" }
    },
    {
      componentType: "inputField",
      name: "Intervention given",
      header: "Enter intervention carried out",
      type: "text",
      obsValueType: "value_text",
      grid: { xs: "12", md: "12" },
      condition: (vals) => ["presenting", "prolapsed"].includes(vals?.["Umbilical Cord"]),
      validation: (value, vals) => {
        if (!["presenting", "prolapsed"].includes(vals?.["Umbilical Cord"])) return null;
        return StandardValidations.required(value);
      }
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "checkboxField",
      name: "Obstetric complications",
      header: "Any obstetric complications",
      type: "multiple",
      twoColumns: true,
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "None", value: "none", exclusive: true },
        { label: "Antepartum haemorrhage", value: "antepartum haemorrhage" },
        { label: "Obstructed labour", value: "obstructed labour" },
        { label: "Prolonged labour", value: "prolonged labour" },
        { label: "PreEclampsia", value: "preeclampsia" },
        { label: "Eclampsia", value: "eclampsia" },
        { label: "Sepsis", value: "sepsis" },
        { label: "Ruptured uterus", value: "ruptured uterus" },
        { label: "Fetal distress", value: "fetal distress" },
        { label: "Placenta Previa", value: "placenta previa" },
        { label: "Placenta abruption", value: "placenta abruption" },
        { label: "Severe anaemia", value: "severe anaemia" },
        { label: "Preterm labour", value: "preterm labour" },
        { label: "Premature Rapture of Membranes", value: "prom" },
        { label: "Preterm Premature Rapture of Membranes", value: "pprom" },
        { label: "Symphysiolysis", value: "symphysiolysis" },
        { label: "Other", value: "other" }
      ]
    },
    {
      componentType: "inputField",
      name: "Other complication",
      header: "Specify",
      type: "text",
      obsValueType: "value_text",
      grid: { xs: "12", md: "12" },
      condition: (vals) => isSelected(vals?.["Obstetric complications"], "other"),
      validation: (value, vals) => {
        if (!isSelected(vals?.["Obstetric complications"], "other")) return null;
        return StandardValidations.required(value);
      }
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "checkboxField",
      name: "Other Obstetric care",
      header: "Obstetric Care provided",
      type: "multiple",
      twoColumns: true,
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => {
        const selected = vals?.["Obstetric complications"];
        return Array.isArray(selected) && selected.length > 0 && !selected.includes("none");
      },
      options: [
        { label: "None", value: "none", exclusive: true },
        { label: "Uterotonic drugs", value: "uterotonic drugs" },
        { label: "Oxytocin/cabitocin", value: "oxytocin/cabitocin" },
        { label: "Magnesium sulphate", value: "magnesium sulphate" },
        { label: "Antihypertensives (Nifedipine, Hydralazine, Methylodopa, Labetolol)", value: "antihypertensives" },
        { label: "Anticonvulsants", value: "anticonvulsants" },
        { label: "Antibiotics", value: "antibiotics" },
        { label: "Transemic acid", value: "transemic acid" },
        { label: "Misoprostol", value: "misoprostol" },
        { label: "Antenatal corticosteroids", value: "antenatal corticosteroids" },
        { label: "Blood transfusion", value: "blood transfusion" },
        { label: "Other", value: "other" }
      ]
    },
    {
      componentType: "radioButtonField",
      name: "Corticosteroids given",
      header: "Dexamethasone/Betamethasone given?",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => isSelected(vals?.["Obstetric care provided"], "antenatal corticosteroids"),
      validation: (value, vals) => {
        if (!isSelected(vals?.["Obstetric care provided"], "antenatal corticosteroids")) return null;
        return StandardValidations.required(value);
      },
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ]
    },
    {
      componentType: "inputField",
      name: "Corticosteroids doses",
      header: "If yes, how many doses given?",
      type: "number",
      obsValueType: "value_numeric",
      grid: { xs: "12", md: "12" },
      condition: (vals) => vals?.["Corticosteroids given"] === "yes",
      validation: (value, vals) => {
        if (vals?.["Corticosteroids given"] !== "yes") return null;
        return StandardValidations.isNotEmptyandNumber(value);
      }
    },
    {
      componentType: "inputField",
      name: "Obstetric care specify",
      header: "Specify",
      type: "text",
      obsValueType: "value_text",
      grid: { xs: "12", md: "12" },
      condition: (vals) => isSelected(vals?.["Obstetric care provided"], "other"),
      validation: (value, vals) => {
        if (!isSelected(vals?.["Obstetric care provided"], "other")) return null;
        return StandardValidations.required(value);
      }
    }
  ]);
  const progressUrineForm = computed(() => [
    { componentType: "Heading", name: "Check urine", grid: { s: "12" } },
    {
      componentType: "inputField",
      name: "amount of urine",
      header: "Urine Volume",
      type: "number",
      obsValueType: "value_numeric",
      grid: { xs: "12", md: "4" }
    },
    {
      componentType: "inputField",
      name: "color of urine",
      header: "Urine Color",
      type: "text",
      obsValueType: "value_text",
      grid: { xs: "12", md: "4" }
    },
    {
      componentType: "inputField",
      name: "Odour of urine",
      header: "Urine Odour",
      type: "text",
      obsValueType: "value_text",
      grid: { xs: "12", md: "4" }
    }
  ]);
  return { progressOfLabourForm, progressUrineForm };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "ContinuousMonitoringProgressOfLabour" },
  __name: "ContinuousMonitoringProgressOfLabour",
  setup(__props, { expose: __expose }) {
    const progressFormRef = ref(null);
    const urineFormRef = ref(null);
    const { progressOfLabourForm, progressUrineForm } = useContinuousMonitoringProgressOfLabourForm();
    const cmStore = useContinuousMonitoringStore();
    const loadLastSavedAt = async () => {
      const encounterGroups = await ObservationService.getObsByEncounterId(EncounterTypeId.Continous_Monitoring);
      if (!encounterGroups?.length) return;
      let latest = "";
      encounterGroups.forEach((group) => {
        group?.obs?.forEach((obs) => {
          const ts = obs?.obs_datetime;
          if (!ts) return;
          if (!latest || new Date(ts).getTime() > new Date(latest).getTime()) {
            latest = ts;
          }
        });
      });
      if (latest) cmStore.setLastSavedAt("progress", latest);
    };
    const elapsedBanner = computed(() => ({
      componentType: "Alert",
      condition: () => {
        const lastSavedAt = cmStore.getLastSavedAt("progress");
        if (!lastSavedAt) return null;
        const diffMs = Date.now() - new Date(lastSavedAt).getTime();
        const mins = Math.floor(diffMs / 6e4);
        const isOverHour = mins >= 60;
        return {
          value: isOverHour ? `Last saved ${mins} min ago (> 1 hour)` : `Last saved ${mins} min ago (< 1 hour)`,
          backgroundColor: isOverHour ? "#DDEEDD" : "#FECDCA",
          textColor: isOverHour ? "#016302" : "#B42318"
        };
      },
      grid: { xs: "12", md: "12" }
    }));
    const progressFormData = computed(() => [
      elapsedBanner.value,
      ...progressOfLabourForm.value
    ]);
    const validateForm = () => {
      const progressErrors = progressFormRef.value?.validateForm() ?? null;
      const urineErrors = urineFormRef.value?.validateForm() ?? null;
      if (!progressErrors && !urineErrors) return null;
      return {
        ...progressErrors ? { progressOfLabour: progressErrors } : {},
        ...urineErrors ? { progressUrine: urineErrors } : {}
      };
    };
    const onSubmit = async () => {
      const errors = validateForm();
      if (errors) return false;
      const progressValues = progressFormRef.value?.getFormValues?.() ?? null;
      const urineValues = urineFormRef.value?.getFormValues?.() ?? null;
      const merged = { ...progressValues || {}, ...urineValues || {} };
      if (!Object.keys(merged).length) return false;
      const patient = await ObservationService.buildSaveObs(merged, EncounterTypeId.Continous_Monitoring);
      if (patient) cmStore.setLastSavedAt("progress", (/* @__PURE__ */ new Date()).toISOString());
      return !!patient;
    };
    __expose({ validateForm, onSubmit });
    onMounted(async () => {
      if (!cmStore.getLastSavedAt("progress")) {
        await loadLastSavedAt();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: progressFormData.value,
                  ref_key: "progressFormRef",
                  ref: progressFormRef
                }, null, 8, ["formData"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  formData: unref(progressUrineForm),
                  ref_key: "urineFormRef",
                  ref: urineFormRef
                }, null, 8, ["formData"])
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

const ContinuousMonitoringProgressOfLabour = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e15ca992"]]);

const _hoisted_1 = { class: "cm-container" };
const _hoisted_2 = { class: "back_profile" };
const _hoisted_3 = { class: "cm-step" };
const _hoisted_4 = { class: "cm-step" };
const _hoisted_5 = { class: "cm-panel" };
const _hoisted_6 = { class: "cm-panel__body" };
const _hoisted_7 = { class: "cm-step" };
const _hoisted_8 = { class: "cm-panel" };
const _hoisted_9 = { class: "cm-panel__body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "continuousMonitoring",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const wizard = ref(null);
    const vitalsRef = ref(null);
    const otherExamsRef = ref(null);
    const progressRef = ref(null);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => ({
      text: isSaving.value ? "Saving..." : "Finish",
      icon: isSaving.value ? "hourglass-outline" : "checkmark",
      hideText: false,
      hideIcon: false,
      disabled: isDoneButtonDisabled.value || isSaving.value
    }));
    const tabs = ref([
      { title: "Maternal Vital Signs", icon: "" },
      { title: "Fetal condition", icon: "" },
      { title: "Progress of labour", icon: "" }
    ]);
    const getActiveComponent = () => {
      const idx = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[idx]?.title;
      switch (currentTab) {
        case "Maternal Vital Signs":
          return "Vitals";
        case "Fetal condition":
          return "OtherExams";
        case "Progress of labour":
          return "ContinuousMonitoringProgressOfLabour";
        default:
          return null;
      }
    };
    const handleTabChange = async (index, oldIndex) => {
      const previousTab = tabs.value[oldIndex]?.title;
      if (previousTab === "Maternal Vital Signs") {
        await vitalsRef.value?.onSubmit?.();
      }
      if (previousTab === "Fetal condition") {
        await otherExamsRef.value?.onSubmit?.();
      }
      if (previousTab === "Progress of labour") {
        await progressRef.value?.onSubmit?.();
      }
      await onChangeCurrentTab(index);
    };
    const openBackController = () => {
      router.push("/labour/home");
    };
    const saveData = async () => {
      await vitalsRef.value?.onSubmit?.();
      await otherExamsRef.value?.onSubmit?.();
      await progressRef.value?.onSubmit?.();
      openBackController();
    };
    onMounted(() => {
      currentTabIndex.value = 0;
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
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
                  ref_key: "wizard",
                  ref: wizard,
                  headingTitle: "Continuous monitoring",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  onChange: handleTabChange,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to Labour Home",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", _hoisted_3, [
                      createVNode(Vitals, {
                        ref_key: "vitalsRef",
                        ref: vitalsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "cm-panel__heading" }, "Fetal condition", -1)),
                        createBaseVNode("div", _hoisted_6, [
                          createVNode(OtherExams, {
                            ref_key: "otherExamsRef",
                            ref: otherExamsRef
                          }, null, 512)
                        ])
                      ])
                    ], 512), [
                      [vShow, getActiveComponent() === "OtherExams"]
                    ]),
                    withDirectives(createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, [
                        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "cm-panel__heading" }, "Progress of labour", -1)),
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(ContinuousMonitoringProgressOfLabour, {
                            ref_key: "progressRef",
                            ref: progressRef
                          }, null, 512)
                        ])
                      ])
                    ], 512), [
                      [vShow, getActiveComponent() === "ContinuousMonitoringProgressOfLabour"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs"])
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

const continuousMonitoring = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c8f1dc2"]]);

export { continuousMonitoring as default };
