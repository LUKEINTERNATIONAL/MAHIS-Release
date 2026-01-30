import { c as computed, s as defineComponent, a2 as onMounted, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bd as IonCardContent, bL as IonCard, f as ref } from './vendor-D9gV--WW.js';
import { y as StandardValidations, z as StandardForm, K as ObservationService, b as EncounterTypeId, _ as _export_sfc } from '../index-DGSSrngm.js';
import { d as defineStore } from './pinia-CI1UBDxV.js';

const includesValue = (val, v) => Array.isArray(val) ? val.includes(v) : val === v;
const useContinuousMonitoringFetalForm = () => {
  const otherExamsForm = computed(() => [
    {
      componentType: "inputField",
      name: "Fetal heart rate",
      header: "Fetal heart rate",
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
      header: "State of Membranes?",
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
      header: "Holder Membranes?",
      type: "inline",
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => vals?.["State of membranes"] === "ruptured",
      validation: (value, vals) => {
        if (vals?.["State of membranes"] !== "ruptured") return null;
        return StandardValidations.required(value);
      },
      options: [
        { label: "Artifical", value: "artifical" },
        { label: "Spontaneously", value: "spontaneously" }
      ]
    },
    { componentType: "Dashes", grid: { s: "12" } },
    {
      componentType: "checkboxField",
      name: "State of liquor",
      header: "State of Liquor",
      type: "multiple",
      twoColumns: true,
      obsValueType: "value_coded",
      grid: { xs: "12", md: "12" },
      condition: (vals) => vals?.["State of membranes"] === "ruptured",
      options: [
        { label: "Clear", value: "clear" },
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
      fetal: "",
      progress: ""
    },
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
    reset() {
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
          value: isOverHour ? `Last saved ${mins} min ago (> 1 hour)` : `Last saved ${mins} min ago (< 1 hour)`,
          backgroundColor: isOverHour ? "#DDEEDD" : "#FECDCA",
          textColor: isOverHour ? "#016302" : "#B42318"
        };
      },
      grid: { xs: "12", md: "12" }
    }));
    const formData = computed(() => {
      const lastMembranes = cmStore.getLastMembranesState();
      const patched = otherExamsForm.value.map((field) => {
        if (field.name === "State of membranes") {
          return {
            ...field,
            condition: () => lastMembranes !== "ruptured"
          };
        }
        if (field.name === "Holder membranes") {
          return {
            ...field,
            condition: (vals) => lastMembranes !== "ruptured" && vals?.["State of membranes"] === "ruptured"
          };
        }
        if (field.name === "State of liquor") {
          return {
            ...field,
            condition: (vals) => lastMembranes === "ruptured" || vals?.["State of membranes"] === "ruptured"
          };
        }
        return field;
      });
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
      if (errors) return false;
      const formValues = otherExamsFormRef.value?.getFormValues?.();
      if (!formValues) return false;
      const patient = await ObservationService.buildSaveObs(formValues, EncounterTypeId.Continous_Monitoring);
      if (patient) {
        cmStore.setLastSavedAt("fetal", (/* @__PURE__ */ new Date()).toISOString());
        if (formValues["State of membranes"]) {
          cmStore.setLastMembranesState(String(formValues["State of membranes"]).toLowerCase());
        }
      }
      return !!patient;
    };
    __expose({ validateForm, onSubmit });
    onMounted(async () => {
      if (!cmStore.getLastSavedAt("fetal")) {
        await loadLastSavedAt();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
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

const OtherExams = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8f5bac6"]]);

export { OtherExams as O, useContinuousMonitoringStore as u };
