import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, A as createVNode, F as unref, f as ref, c as computed, aG as IonContent, bu as IonPage, aL as useRouter, eV as provide, x as resolveComponent, O as createBlock, B as withCtx } from './vendor-6OQ3r7Vr.js';
import { s as storeToRefs } from './pinia-BATJJgGh.js';
import { z as StandardForm, _ as _export_sfc, aq as ConceptService, T as Toolbar, u as useDemographicsStore, t as toastWarning, H as HisDate, G as toastSuccess } from '../index-jHLvXTOz.js';
import { N as NeonatalService } from './neonatal_service-Bk9UcbIA.js';
import { D as DemographicBar } from './DemographicBar-CePQx5C9.js';
import { k as neonatalSignsSymptomsSections, d as neonatalSignsSymptomsFormKey, N as NeonatalStepper, G as useSignsSymptomsStore } from './NeonatalStepper-Bj1c3_40.js';
import { S as SummarySection } from './SummarySection-D6govRZQ.js';

const _hoisted_1$1 = { class: "signs-symptoms-section-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdmissionSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSignsSymptomsSections[0];
    const formData = sectionConfig.formData;
    const conditionalRules = sectionConfig.conditionalRules || [];
    const signsForm = inject(neonatalSignsSymptomsFormKey);
    const syncFormValues = (values) => {
      if (!signsForm) return;
      signsForm.is_readmission = values.is_readmission || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const AdmissionSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-312c3ac7"]]);

const _hoisted_1 = { class: "signs-symptoms-section-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PresentingComplaintsSection",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = neonatalSignsSymptomsSections[1];
    const conditionalRules = sectionConfig.conditionalRules || [];
    const signsForm = inject(neonatalSignsSymptomsFormKey);
    const coerceConceptRecords = (payload) => {
      if (Array.isArray(payload)) return payload;
      if (Array.isArray(payload?.records)) return payload.records;
      if (Array.isArray(payload?.results)) return payload.results;
      if (Array.isArray(payload?.data)) return payload.data;
      return [];
    };
    const toComplaintValue = (name) => {
      const cleaned = name.trim().toLowerCase().replace(/&/g, " and ").replace(/\//g, " ").replace(/[()]/g, " ").replace(/[^a-z0-9\s_-]/g, " ").replace(/\s+/g, " ").trim();
      return cleaned.replace(/\s+/g, "_");
    };
    const complaintsCache = /* @__PURE__ */ new Map();
    const getPresentingComplaintOptions = async (query, page = 1, pageSize = 40) => {
      const cacheKey = (query || "").trim().toLowerCase();
      let all = complaintsCache.get(cacheKey);
      if (!all) {
        const response = await ConceptService.getConceptSet("Presenting complaint", query || "");
        const records = coerceConceptRecords(response);
        const mapped = records.map((item) => {
          const label = typeof item?.name === "string" ? item.name.trim() : "";
          if (!label) return null;
          const value = toComplaintValue(label);
          return { label, value, ...item };
        }).filter((opt) => !!opt && !!opt.value);
        const merged = [{ label: "Other", value: "other" }, ...mapped];
        const seen = /* @__PURE__ */ new Set();
        all = merged.filter((opt) => {
          const key = String(opt.value);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        complaintsCache.set(cacheKey, all);
      }
      const safePage = Number.isFinite(page) && page > 0 ? page : 1;
      const safeSize = Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 40;
      const start = (safePage - 1) * safeSize;
      return all.slice(start, start + safeSize);
    };
    const enrichedFormData = computed(() => {
      return (sectionConfig.formData || []).map((field) => {
        if (field?.componentType === "searchableDropdown" && field?.name === "presenting_complaints") {
          return {
            ...field,
            options: [],
            pageSize: 20,
            onSearchChange: getPresentingComplaintOptions
          };
        }
        return field;
      });
    });
    const extractSelectedComplaintValues = (selection) => {
      if (!selection) return [];
      if (Array.isArray(selection)) {
        return selection.map((item) => typeof item === "string" ? item : item?.value).filter((value) => value !== void 0 && value !== null && value !== "").map((value) => value.toString());
      }
      const single = typeof selection === "string" ? selection : selection?.value;
      return single ? [single.toString()] : [];
    };
    const syncFormValues = (values) => {
      if (!signsForm) return;
      signsForm.presenting_complaints = extractSelectedComplaintValues(values.presenting_complaints);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: enrichedFormData.value,
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const PresentingComplaintsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eee50618"]]);

const _sfc_main = defineComponent({
  name: "NeonatalSignsSymptoms",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    DemographicBar,
    NeonatalStepper,
    AdmissionSection,
    PresentingComplaintsSection,
    SummarySection
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const signsSymptomsStore = useSignsSymptomsStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncFormWithPatient = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      signsSymptomsStore.initializeForPatient(patientId);
    };
    syncFormWithPatient();
    watch(
      () => patient.value?.patientID,
      () => syncFormWithPatient()
    );
    const signsFormData = signsSymptomsStore.formData;
    provide(neonatalSignsSymptomsFormKey, signsFormData);
    watch(
      () => signsSymptomsStore.formData,
      () => signsSymptomsStore.saveSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalSignsSymptomsSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalSignsSymptomsSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalSignsSymptomsSections[0].title,
        value: "1",
        component: AdmissionSection,
        configIndex: 0
      },
      {
        title: neonatalSignsSymptomsSections[1].title,
        value: "2",
        component: PresentingComplaintsSection,
        configIndex: 1
      },
      {
        title: neonatalSignsSymptomsSections[2].title,
        subtitle: neonatalSignsSymptomsSections[2].subtitle || "",
        value: "3",
        component: SummarySection,
        configIndex: 2
      }
    ];
    const stepperTitle = "Signs & Symptoms Assessment";
    const currentOpenStepper = ref("1");
    const updateStatus = (event) => {
      if (event && event.value) {
        wizardData.value.forEach((item, index) => {
          if (event.value === (index + 1).toString()) {
            item.class = "open_step common_step";
            item.checked = false;
          } else if (index < parseInt(event.value) - 1) {
            item.class = "common_step color_white";
            item.checked = true;
          } else {
            item.class = "common_step";
            item.checked = false;
          }
        });
      }
    };
    const getSaveFunction = (currentIndex) => {
      if (currentIndex === stepperData.length - 1) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          try {
            const date = HisDate.sessionDate();
            await NeonatalService.saveSignsSymptomsAssessment(patient.value.patientID, signsFormData, date);
            toastSuccess("Signs & symptoms assessment saved successfully");
            signsSymptomsStore.clearPatient(patient.value.patientID);
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("Failed to save signs/symptoms assessment", error);
            toastWarning("Failed to save signs/symptoms assessment");
          }
        };
      }
      return null;
    };
    return {
      wizardData,
      stepperData,
      stepperTitle,
      currentOpenStepper,
      updateStatus,
      getSaveFunction,
      neonatalSignsSymptomsSections
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-signs-symptoms-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/neonatal/home",
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "signsSymptoms",
            sectionsConfig: _ctx.neonatalSignsSymptomsSections,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalSignsSymptoms = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f2a08ee"]]);

export { NeonatalSignsSymptoms as default };
