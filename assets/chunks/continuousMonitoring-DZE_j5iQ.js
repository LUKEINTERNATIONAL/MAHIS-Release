import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, be as IonCardContent, bM as IonCard, f as ref, a3 as onMounted, aM as useRouter, O as createBlock, aH as IonContent, C as createBaseVNode, b_ as chevronBackOutline, T as withDirectives, U as vShow, bw as IonPage } from './vendor-OAxQVBFs.js';
import { n as icons, y as StandardValidations, z as StandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, T as Toolbar, F as DynamicButton } from '../index-8NK9_fIO.js';
import { _ as _sfc_main$3, u as useFormWizard } from './useFormWizard-D-Lz0xN9.js';
import { D as DemographicBar } from './DemographicBar-CsirAYmy.js';
import { V as Vitals } from './Vitals-DmZ78pil.js';
import { u as useContinuousMonitoringStore, O as OtherExams } from './OtherExams-DrIl3A6y.js';

const includesValue = (val, v) => Array.isArray(val) ? val.includes(v) : val === v;
const useContinuousMonitoringPainManagementForm = () => {
  const painManagementForm = computed(() => [
    {
      componentType: "checkboxField",
      name: "Pain Management",
      type: "multiple",
      twoColumns: true,
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "None", value: "none", exclusive: true },
        { label: "Epidural", value: "epidural" },
        { label: "Spinal", value: "spinal" },
        { label: "Other", value: "other" }
      ]
    },
    {
      componentType: "inputField",
      name: "Pain Management specify",
      header: "Specify",
      type: "text",
      icon: icons.editPen,
      obsValueType: "value_text",
      grid: { xs: "12", md: "12" },
      condition: (vals) => includesValue(vals?.["Pain Management"], "other"),
      validation: (value, vals) => {
        if (!includesValue(vals?.["Pain Management"], "other")) return null;
        return StandardValidations.required(value);
      }
    }
  ]);
  return { painManagementForm };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ name: "ContinuousMonitoringPainManagement" },
  __name: "ContinuousMonitoringPainManagement",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const { painManagementForm } = useContinuousMonitoringPainManagementForm();
    const cmStore = useContinuousMonitoringStore();
    const formData = painManagementForm;
    const validateForm = () => formRef.value?.validateForm() ?? null;
    const onSubmit = async () => {
      const errors = validateForm();
      if (errors) {
        toastWarning("Please fix validation errors in Pain Management");
        return false;
      }
      const values = formRef.value?.getFormValues?.() ?? null;
      if (!values || !Object.keys(values).length) return false;
      const hasUserEntries = Object.entries(values).some(([key, value]) => {
        if (key === "obsValueType") return false;
        if (value === "" || value === null || value === void 0) return false;
        if (Array.isArray(value) && value.length === 0) return false;
        return true;
      });
      if (!hasUserEntries) return true;
      const patient = await ObservationService.buildSaveObs(values, EncounterTypeId.Continous_Monitoring);
      if (!patient) {
        toastWarning("Failed to save Pain Management");
        return false;
      }
      cmStore.setLastSavedAt("pain", (/* @__PURE__ */ new Date()).toISOString());
      toastSuccess("Pain Management saved successfully");
      return true;
    };
    __expose({ validateForm, onSubmit });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Pain Management",
                  formData: unref(formData),
                  ref_key: "formRef",
                  ref: formRef
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

const ContinuousMonitoringPainManagement = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a13e4483"]]);

const isSelected = (val, v) => Array.isArray(val) ? val.includes(v) : val === v;
const useContinuousMonitoringProgressOfLabourForm = () => {
  const progressOfLabourForm = computed(() => [
    {
      componentType: "radioButtonField",
      name: "Descent",
      header: "Descent (if cephalic)",
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
      header: "Contractions (per minute)",
      unit: "/min",
      obsValueType: "value_numeric",
      grid: { xs: "12", md: "12" },
      validation: (value) => {
        if (value === "" || value === null || value === void 0) return null;
        if (isNaN(Number(value))) return "Contractions must be a number";
        if (Number(value) > 100) return "Contractions must be less than 100";
        return null;
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
        { label: "Strong", value: "strong" },
        { label: "Regular", value: "regular" },
        { label: "Irregular", value: "irregular" }
      ]
    },
    {
      componentType: "inputField",
      name: "Contractions Remarks",
      header: "Contractions Remarks",
      type: "text",
      obsValueType: "value_text",
      grid: { xs: "12", md: "12" },
      condition: (vals) => vals?.["Severity of contractions"] === "strong",
      validation: (value, vals) => {
        if (vals?.["Severity of contractions"] !== "strong") return null;
        return StandardValidations.required(value);
      }
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "inputField",
      name: "Cervical dilation",
      header: "Cervical dilation (0-10 cm) ",
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
        { label: "+3", value: "+3" },
        { label: "+4", value: "+4" }
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
      condition: (vals) => vals?.["Umbilical Cord"] === "prolapsed",
      validation: (value, vals) => {
        if (vals?.["Umbilical Cord"] !== "prolapsed") return null;
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
      condition: (vals) => vals?.["Umbilical Cord"] === "presenting",
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
      condition: (vals) => vals?.["Umbilical Cord"] === "prolapsed" && vals?.["Pulsating"] === "yes",
      validation: (value, vals) => {
        if (!(vals?.["Umbilical Cord"] === "prolapsed" && vals?.["Pulsating"] === "yes")) return null;
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
      icon: icons.editPen,
      obsValueType: "value_text",
      grid: { xs: "12", md: "12" },
      condition: (vals) => isSelected(vals?.["Obstetric complications"], "other"),
      validation: (value, vals) => {
        if (!isSelected(vals?.["Obstetric complications"], "other")) return null;
        if (value === "" || value === null || value === void 0) return null;
        if (!isNaN(Number(value))) return "Other complication must be a text";
        return StandardValidations.required(value);
      }
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "checkboxField",
      name: "Obstetric care provided",
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
      icon: icons.editPen,
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
    {
      componentType: "inputField",
      name: "amount of urine",
      header: "Urine Volume",
      type: "number",
      unit: "ml",
      obsValueType: "value_numeric",
      grid: { xs: "12", md: "4" },
      validation: (value) => {
        if (value === "" || value === null || value === void 0) return null;
        if (isNaN(Number(value))) return "Amount of urine must be a number";
        if (Number(value) < 0) return "Amount of urine must be greater than 0";
        if (Number(value) > 1e3) return "Amount of urine must be less than 1000";
        return null;
      }
    },
    {
      componentType: "inputField",
      name: "color of urine",
      header: "Urine Color",
      type: "text",
      icon: icons.editPen,
      obsValueType: "value_text",
      grid: { xs: "12", md: "4" },
      validation: (value) => {
        if (value === "" || value === null || value === void 0) return null;
        if (!isNaN(Number(value))) return "Urine color must be a text";
        if (value.length < 3) return "Urine color must be at least 3 characters long";
        return null;
      }
    },
    {
      componentType: "inputField",
      name: "Odour of urine",
      header: "Urine Odour",
      type: "text",
      icon: icons.editPen,
      validation: (value) => {
        if (value === "" || value === null || value === void 0) return null;
        if (!isNaN(Number(value))) return "Urine odour must be a text";
        if (value.length < 3) return "Urine odour must be at least 3 characters long";
        return null;
      },
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
          value: `Last recorded ${formatDuration(diffMs)} ago`,
          backgroundColor: isOverHour ? "#DDEEDD" : "#FECDCA",
          textColor: isOverHour ? "#016302" : "#B42318"
        };
      },
      grid: { xs: "12", md: "12" }
    }));
    const isLockedByMinutes = (minutes) => {
      const lastSavedAt = cmStore.getLastSavedAt("progress");
      if (!lastSavedAt) return false;
      const diffMs = Date.now() - new Date(lastSavedAt).getTime();
      return diffMs < minutes * 60 * 1e3;
    };
    const getRemainingMinutes = (minutes) => {
      const lastSavedAt = cmStore.getLastSavedAt("progress");
      if (!lastSavedAt) return 0;
      const diffMs = Date.now() - new Date(lastSavedAt).getTime();
      const remainingMs = minutes * 60 * 1e3 - diffMs;
      if (remainingMs <= 0) return 0;
      return Math.max(1, Math.ceil(remainingMs / 6e4));
    };
    const formatDuration = (ms) => {
      const totalMinutes = Math.max(0, Math.floor(ms / 6e4));
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      if (hours > 0) return `${hours} hr ${minutes} min`;
      return `${minutes} min`;
    };
    const dueAlert = (minutes, label) => ({
      componentType: "Alert",
      value: `${label}: Next entry due in ${formatDuration(getRemainingMinutes(minutes) * 6e4)}`,
      backgroundColor: "#FFF4CC",
      textColor: "#8A5A00",
      grid: { xs: "12", md: "12" },
      condition: () => isLockedByMinutes(minutes)
    });
    const progressFormData = computed(() => {
      const hourlyFields = /* @__PURE__ */ new Set(["Descent", "Contractions", "Severity of contractions", "Contractions Remarks", "Fetal Station"]);
      const patched = progressOfLabourForm.value.reduce((acc, field) => {
        if (field.name === "Descent") {
          acc.push(dueAlert(60, "Labour progress (hourly)"));
        }
        if (field.name === "Contractions") {
          acc.push(dueAlert(60, "Contractions and Severity (hourly)"));
        }
        if (field.name === "Cervical dilation") {
          acc.push(dueAlert(240, "Cervical dilation (every 4 hours)"));
        }
        if (hourlyFields.has(String(field.name))) {
          acc.push({
            ...field,
            disabled: () => isLockedByMinutes(60)
          });
          return acc;
        }
        if (field.name === "Cervical dilation") {
          acc.push({
            ...field,
            disabled: () => isLockedByMinutes(240)
          });
          return acc;
        }
        acc.push(field);
        return acc;
      }, []);
      return [elapsedBanner.value, ...patched];
    });
    const progressUrineFormData = computed(
      () => [
        dueAlert(60, "Urine check (hourly)"),
        ...progressUrineForm.value.map((field) => {
          const urineFieldNames = /* @__PURE__ */ new Set(["amount of urine", "color of urine", "Odour of urine"]);
          if (!urineFieldNames.has(String(field.name))) return field;
          return {
            ...field,
            disabled: () => isLockedByMinutes(60)
          };
        })
      ]
    );
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
      if (errors) {
        toastWarning("Please fix validation errors in Progress of labour");
        return false;
      }
      const progressValues = progressFormRef.value?.getFormValues?.() ?? null;
      const urineValues = urineFormRef.value?.getFormValues?.() ?? null;
      const merged = { ...progressValues || {}, ...urineValues || {} };
      if (!Object.keys(merged).length) return false;
      const hasUserEntries = Object.entries(merged).some(([key, value]) => {
        if (key === "obsValueType") return false;
        if (value === "" || value === null || value === void 0) return false;
        if (Array.isArray(value) && value.length === 0) return false;
        return true;
      });
      if (!hasUserEntries) return true;
      const patient = await ObservationService.buildSaveObs(merged, EncounterTypeId.Continous_Monitoring);
      if (!patient) {
        toastWarning("Failed to save Progress of labour");
        return false;
      }
      cmStore.setLastSavedAt("progress", (/* @__PURE__ */ new Date()).toISOString());
      toastSuccess("Progress of labour saved successfully");
      return true;
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
                  subtitle: "Progress of Labour",
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
                  subtitle: "Check urine",
                  formData: progressUrineFormData.value,
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

const ContinuousMonitoringProgressOfLabour = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24cd556e"]]);

const _hoisted_1 = { class: "cm-container" };
const _hoisted_2 = { class: "back_profile" };
const _hoisted_3 = { class: "cm-step" };
const _hoisted_4 = { class: "cm-step" };
const _hoisted_5 = { class: "cm-step" };
const _hoisted_6 = { class: "cm-step" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "continuousMonitoring",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const wizard = ref(null);
    const vitalsRef = ref(null);
    const painManagementRef = ref(null);
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
      { title: "Pain Management", icon: "" },
      { title: "Fetal condition", icon: "" },
      { title: "Progress of labour", icon: "" }
    ]);
    const getActiveComponent = () => {
      const idx = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[idx]?.title;
      switch (currentTab) {
        case "Maternal Vital Signs":
          return "Vitals";
        case "Pain Management":
          return "ContinuousMonitoringPainManagement";
        case "Fetal condition":
          return "OtherExams";
        case "Progress of labour":
          return "ContinuousMonitoringProgressOfLabour";
        default:
          return null;
      }
    };
    const handleTabChange = async (index, _oldIndex) => {
      await onChangeCurrentTab(index);
    };
    const openBackController = () => {
      router.push("/labour/home");
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        const sections = [
          {
            title: "Maternal Vital Signs",
            validate: () => vitalsRef.value?.validateForm?.(),
            submit: () => vitalsRef.value?.onSubmit?.()
          },
          {
            title: "Pain Management",
            validate: () => painManagementRef.value?.validateForm?.(),
            submit: () => painManagementRef.value?.onSubmit?.()
          },
          {
            title: "Fetal condition",
            validate: () => otherExamsRef.value?.validateForm?.(),
            submit: () => otherExamsRef.value?.onSubmit?.()
          },
          {
            title: "Progress of labour",
            validate: () => progressRef.value?.validateForm?.(),
            submit: () => progressRef.value?.onSubmit?.()
          }
        ];
        const invalidSections = sections.map((s) => ({ title: s.title, errors: s.validate?.() })).filter((s) => s.errors && Object.keys(s.errors).length > 0).map((s) => s.title);
        if (invalidSections.length > 0) {
          const firstFailedTitle = invalidSections[0];
          const firstFailedIndex = tabs.value.findIndex((t) => t.title === firstFailedTitle);
          if (firstFailedIndex >= 0) {
            await onChangeCurrentTab(firstFailedIndex);
          }
          toastWarning(`Please fix validation errors in: ${invalidSections.join(", ")}`);
          return;
        }
        const submitOrder = [...sections].sort((a, b) => {
          if (a.title === "Maternal Vital Signs") return 1;
          if (b.title === "Maternal Vital Signs") return -1;
          return 0;
        });
        const sectionResults = [];
        for (const section of submitOrder) {
          try {
            sectionResults.push({
              title: section.title,
              saved: Boolean(await section.submit?.())
            });
          } catch (_e) {
            sectionResults.push({ title: section.title, saved: false });
          }
        }
        const failedSaveSections = sectionResults.filter((s) => !s.saved).map((s) => s.title);
        if (failedSaveSections.length > 0) {
          const firstFailedTitle = failedSaveSections[0];
          const firstFailedIndex = tabs.value.findIndex((t) => t.title === firstFailedTitle);
          if (firstFailedIndex >= 0) {
            await onChangeCurrentTab(firstFailedIndex);
          }
          toastWarning(`Failed to save: ${failedSaveSections.join(", ")}`);
          return;
        }
        toastSuccess("Continuous monitoring data saved");
        openBackController();
      } catch (_error) {
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
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
                createVNode(_sfc_main$3, {
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
                      createVNode(unref(IonCard), { class: "cm-section-card" }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCardContent), null, {
                            default: withCtx(() => [
                              createVNode(Vitals, {
                                ref_key: "vitalsRef",
                                ref: vitalsRef
                              }, null, 512)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 512), [
                      [vShow, getActiveComponent() === "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", _hoisted_4, [
                      createVNode(ContinuousMonitoringPainManagement, {
                        ref_key: "painManagementRef",
                        ref: painManagementRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "ContinuousMonitoringPainManagement"]
                    ]),
                    withDirectives(createBaseVNode("div", _hoisted_5, [
                      createVNode(OtherExams, {
                        ref_key: "otherExamsRef",
                        ref: otherExamsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() === "OtherExams"]
                    ]),
                    withDirectives(createBaseVNode("div", _hoisted_6, [
                      createVNode(ContinuousMonitoringProgressOfLabour, {
                        ref_key: "progressRef",
                        ref: progressRef
                      }, null, 512)
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

const continuousMonitoring = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dec83bbd"]]);

export { continuousMonitoring as default };
