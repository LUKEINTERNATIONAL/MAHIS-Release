import { c as computed, s as defineComponent, a3 as onMounted, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, be as IonCardContent, bM as IonCard, f as ref } from './vendor-CvMfV7DM.js';
import { y as StandardValidations, z as StandardForm, K as ObservationService, b as EncounterTypeId, t as toastWarning, G as toastSuccess, _ as _export_sfc } from '../index-04qmWBeT.js';
import { d as defineStore } from './pinia-OlYjPPGt.js';

const includesValue = (val, v) => Array.isArray(val) ? val.includes(v) : val === v;
const useContinuousMonitoringFetalForm = () => {
  const otherExamsForm = computed(() => [
    {
      componentType: "inputField",
      name: "Fetal heart rate",
      header: "Fetal heart rate (normal: 120-160 bpm)",
      type: "number",
      unit: "bpm",
      obsValueType: "value_numeric",
      grid: { xs: "12", md: "12" },
      validation: (value) => {
        return StandardValidations.isNotEmptyandNumber(value) || StandardValidations.checkMinMax(value, 120, 160);
      }
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "radioButtonField",
      name: "State of membranes",
      header: "State of membranes",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      validation: StandardValidations.required,
      options: [
        { label: "Ruptured", value: "ruptured" },
        { label: "Intact", value: "intact" }
      ]
    },
    {
      componentType: "radioButtonField",
      name: "Holder membranes",
      header: "How were membranes ruptured?",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => vals?.["State of membranes"] === "ruptured",
      validation: (value, vals) => {
        if (vals?.["State of membranes"] !== "ruptured") return null;
        return StandardValidations.required(value);
      },
      options: [
        { label: "Artificial", value: "artificial" },
        { label: "Spontaneously", value: "spontaneously" }
      ]
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "checkboxField",
      name: "State of liquor",
      header: "State of liquor",
      type: "multiple",
      twoColumns: true,
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => vals?.["State of membranes"] === "ruptured",
      options: [
        { label: "Clear", value: "clear", exclusive: true },
        { label: "Meconium stained", value: "meconium stained" },
        { label: "Blood-stained", value: "blood-stained" },
        { label: "Absent", value: "Absent" },
        { label: "Offensive smell", value: "offensive smell" }
      ]
    },
    {
      componentType: "radioButtonField",
      name: "Grade",
      header: "What is the Grade?",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => includesValue(vals?.["State of liquor"], "meconium stained"),
      validation: (value, vals) => {
        if (!includesValue(vals?.["State of liquor"], "meconium stained")) return null;
        return StandardValidations.required(value);
      },
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" }
      ]
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "radioButtonField",
      name: "Moulding",
      header: "Moulding",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "+", value: "+" },
        { label: "++", value: "++" },
        { label: "+++", value: "+++" }
      ]
    },
    {
      componentType: "radioButtonField",
      name: "Caput",
      header: "Caput",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      options: [
        { label: "Nil", value: "Nil" },
        { label: "Mild", value: "Mild" },
        { label: "Moderate", value: "Moderate" },
        { label: "Severe", value: "Severe" }
      ]
    }
  ]);
  return { otherExamsForm };
};

const useContinuousMonitoringStore = defineStore("continuousMonitoringStore", {
  state: () => ({
    lastSavedAtBySection: {
      pain: "",
      fetal: "",
      progress: ""
    },
    savedEntryByPatient: {},
    lastMembranesState: ""
  }),
  actions: {
    setLastSavedAt(section, timestamp) {
      this.lastSavedAtBySection[section] = timestamp;
    },
    getLastSavedAt(section) {
      return this.lastSavedAtBySection[section];
    },
    setLastMembranesState(value) {
      this.lastMembranesState = value;
    },
    getLastMembranesState() {
      return this.lastMembranesState;
    },
    setEntrySaved(patientId, value) {
      this.savedEntryByPatient[String(patientId)] = value;
    },
    isEntrySaved(patientId) {
      return !!this.savedEntryByPatient[String(patientId)];
    },
    reset() {
      this.lastSavedAtBySection.pain = "";
      this.lastSavedAtBySection.fetal = "";
      this.lastSavedAtBySection.progress = "";
      this.lastMembranesState = "";
    }
  },
  persist: true
});

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OtherExams",
  setup(__props, { expose: __expose }) {
    const otherExamsFormRef = ref(null);
    const urineFormRef = ref(null);
    const { otherExamsForm } = useContinuousMonitoringFetalForm();
    const cmStore = useContinuousMonitoringStore();
    const loadLastSavedAt = async () => {
      const encounterGroups = await ObservationService.getObsByEncounterId(EncounterTypeId.Continous_Monitoring);
      if (!encounterGroups?.length) return;
      let latest = "";
      let latestMembranes = null;
      encounterGroups.forEach((group) => {
        group?.obs?.forEach((obs) => {
          const ts = obs?.obs_datetime;
          if (!ts) return;
          if (!latest || new Date(ts).getTime() > new Date(latest).getTime()) {
            latest = ts;
          }
          if (obs?.concept_name === "State of membranes") {
            if (!latestMembranes || new Date(ts).getTime() > new Date(latestMembranes.obs_datetime).getTime()) {
              latestMembranes = obs;
            }
          }
        });
      });
      if (latest) cmStore.setLastSavedAt("fetal", latest);
      if (latestMembranes) {
        const resolved = await ObservationService.resolvePrimaryValue(latestMembranes);
        if (resolved) cmStore.setLastMembranesState(String(resolved).toLowerCase());
      }
    };
    const elapsedBanner = computed(() => ({
      componentType: "Alert",
      condition: () => {
        const lastSavedAt = cmStore.getLastSavedAt("fetal");
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
      const lastSavedAt = cmStore.getLastSavedAt("fetal");
      if (!lastSavedAt) return false;
      const diffMs = Date.now() - new Date(lastSavedAt).getTime();
      return diffMs < minutes * 60 * 1e3;
    };
    const getRemainingMinutes = (minutes) => {
      const lastSavedAt = cmStore.getLastSavedAt("fetal");
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
    const formData = computed(() => {
      const lastMembranes = cmStore.getLastMembranesState();
      const patched = otherExamsForm.value.reduce((acc, field) => {
        if (field.name === "Fetal heart rate") {
          acc.push(dueAlert(30, "Fetal heart rate (every 30 minutes)"));
        }
        if (field.name === "State of membranes") {
          acc.push(dueAlert(60, "Membranes and liquor (hourly)"));
        }
        if (field.name === "Moulding") {
          acc.push(dueAlert(240, "Moulding and caput (every 4 hours)"));
        }
        if (field.name === "State of membranes") {
          acc.push({
            ...field,
            disabled: () => isLockedByMinutes(60)
          });
          return acc;
        }
        if (field.name === "Holder membranes") {
          acc.push({
            ...field,
            condition: (vals) => vals?.["State of membranes"] === "ruptured",
            disabled: () => isLockedByMinutes(60)
          });
          return acc;
        }
        if (field.name === "State of liquor") {
          acc.push({
            ...field,
            condition: (vals) => lastMembranes === "ruptured" || vals?.["State of membranes"] === "ruptured",
            disabled: () => isLockedByMinutes(60)
          });
          return acc;
        }
        if (field.name === "Grade") {
          acc.push({
            ...field,
            disabled: () => isLockedByMinutes(60)
          });
          return acc;
        }
        if (field.name === "Fetal heart rate") {
          acc.push({
            ...field,
            disabled: () => isLockedByMinutes(30)
          });
          return acc;
        }
        if (field.name === "Moulding" || field.name === "Caput") {
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
    const validateForm = () => {
      const otherErrors = otherExamsFormRef.value?.validateForm() ?? null;
      const urineErrors = urineFormRef.value?.validateForm() ?? null;
      if (!otherErrors && !urineErrors) return null;
      return {
        ...otherErrors ? { otherExams: otherErrors } : {},
        ...urineErrors ? { urine: urineErrors } : {}
      };
    };
    const onSubmit = async () => {
      const errors = otherExamsFormRef.value?.validateForm?.();
      if (errors) {
        toastWarning("Please fix validation errors in Fetal condition");
        return false;
      }
      const formValues = otherExamsFormRef.value?.getFormValues?.();
      if (!formValues) return false;
      const hasUserEntries = Object.entries(formValues).some(([key, value]) => {
        if (key === "obsValueType") return false;
        if (value === "" || value === null || value === void 0) return false;
        if (Array.isArray(value) && value.length === 0) return false;
        return true;
      });
      if (!hasUserEntries) return true;
      const patient = await ObservationService.buildSaveObs(formValues, EncounterTypeId.Continous_Monitoring);
      if (!patient) {
        toastWarning("Failed to save Fetal condition");
        return false;
      }
      cmStore.setLastSavedAt("fetal", (/* @__PURE__ */ new Date()).toISOString());
      if (formValues["State of membranes"]) {
        cmStore.setLastMembranesState(String(formValues["State of membranes"]).toLowerCase());
      }
      toastSuccess("Fetal condition saved successfully");
      return true;
    };
    __expose({ validateForm, onSubmit });
    onMounted(async () => {
      if (!cmStore.getLastSavedAt("fetal")) {
        await loadLastSavedAt();
      }
      const lastMembranes = cmStore.getLastMembranesState();
      if (lastMembranes === "intact" || lastMembranes === "ruptured") {
        otherExamsFormRef.value?.setFormValue?.("State of membranes", lastMembranes);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Fetal Conditions",
                  formData: formData.value,
                  ref_key: "otherExamsFormRef",
                  ref: otherExamsFormRef
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

const OtherExams = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3994b74"]]);

export { OtherExams as O, useContinuousMonitoringStore as u };
