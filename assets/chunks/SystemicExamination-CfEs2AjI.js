import { s as defineComponent, h as inject, w as watch, y as openBlock, O as createBlock, f as ref, c as computed, bu as IonPage, aG as IonContent, aL as useRouter, f0 as provide, x as resolveComponent, B as withCtx, A as createVNode } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { z as StandardForm, T as Toolbar, u as useDemographicsStore, t as toastWarning, G as toastSuccess, x as toastDanger, _ as _export_sfc } from '../index-PMl5GQCx.js';
import { d as neonatalSystemicExaminationFormKey, B as getSystemicExaminationSectionById, N as NeonatalStepper, C as useSystemicExaminationStore, l as neonatalSystemicExaminationSections } from './NeonatalStepper-CDuygvRM.js';
import { S as SummarySection } from './SummarySection-h6FQH7ET.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SystemicExaminationSection",
  props: {
    sectionId: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const formRef = ref(null);
    const systemicExaminationForm = inject(neonatalSystemicExaminationFormKey, void 0);
    const sectionConfig = computed(() => {
      const resolved = getSystemicExaminationSectionById(props.sectionId);
      if (!resolved) {
        throw new Error(`[SystemicExaminationSection] Missing configuration for section "${props.sectionId}"`);
      }
      return resolved;
    });
    const formData = computed(() => {
      const fields = sectionConfig.value.formData || [];
      return fields.map((field) => {
        if (!field?.name || !systemicExaminationForm) {
          return { ...field };
        }
        const fieldValue = systemicExaminationForm[field.name];
        const initialValue = field.componentType === "switchField" ? fieldValue ?? null : fieldValue ?? field.initialValue ?? field.value ?? "";
        return {
          ...field,
          initialValue
        };
      });
    });
    const conditionalRules = computed(() => sectionConfig.value.conditionalRules || []);
    const syncFormValues = (values) => {
      if (!systemicExaminationForm) return;
      Object.assign(systemicExaminationForm, values);
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
      return openBlock(), createBlock(StandardForm, {
        formData: formData.value,
        conditionalRules: conditionalRules.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData", "conditionalRules"]);
    };
  }
});

const _sfc_main = defineComponent({
  name: "SystemicExamination",
  components: {
    IonContent,
    IonPage,
    Toolbar,
    NeonatalStepper
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const stepperTitle = "Systemic Examination";
    const currentOpenStepper = ref("1");
    const systemicExaminationStore = useSystemicExaminationStore();
    const syncForPatient = () => {
      systemicExaminationStore.initializeForRawPatientId(patient.value?.patientID);
    };
    syncForPatient();
    watch(
      () => patient.value?.patientID,
      () => syncForPatient()
    );
    provide(neonatalSystemicExaminationFormKey, systemicExaminationStore.formData);
    const wizardData = ref(
      neonatalSystemicExaminationSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalSystemicExaminationSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: getSystemicExaminationSectionById("overview")?.title,
        value: "1",
        subtitle: getSystemicExaminationSectionById("overview")?.subtitle,
        component: _sfc_main$1,
        sectionId: "overview"
      },
      {
        title: getSystemicExaminationSectionById("respiratory_exam")?.title,
        value: "2",
        subtitle: getSystemicExaminationSectionById("respiratory_exam")?.subtitle,
        component: _sfc_main$1,
        sectionId: "respiratory_exam"
      },
      {
        title: getSystemicExaminationSectionById("chest_auscultation")?.title,
        value: "3",
        subtitle: getSystemicExaminationSectionById("chest_auscultation")?.subtitle,
        component: _sfc_main$1,
        sectionId: "chest_auscultation"
      },
      {
        title: getSystemicExaminationSectionById("heart_perfusion")?.title,
        value: "4",
        subtitle: getSystemicExaminationSectionById("heart_perfusion")?.subtitle,
        component: _sfc_main$1,
        sectionId: "heart_perfusion"
      },
      {
        title: getSystemicExaminationSectionById("gastro_jaundice")?.title,
        value: "5",
        subtitle: getSystemicExaminationSectionById("gastro_jaundice")?.subtitle,
        component: _sfc_main$1,
        sectionId: "gastro_jaundice"
      },
      {
        title: getSystemicExaminationSectionById("chest_summary")?.title,
        value: "6",
        subtitle: getSystemicExaminationSectionById("chest_summary")?.subtitle,
        component: SummarySection,
        sectionId: "chest_summary"
      },
      {
        title: getSystemicExaminationSectionById("abdomen_exam")?.title,
        value: "7",
        subtitle: getSystemicExaminationSectionById("abdomen_exam")?.subtitle,
        component: _sfc_main$1,
        sectionId: "abdomen_exam"
      },
      {
        title: getSystemicExaminationSectionById("abdomen_findings")?.title,
        value: "8",
        subtitle: getSystemicExaminationSectionById("abdomen_findings")?.subtitle,
        component: _sfc_main$1,
        sectionId: "abdomen_findings"
      },
      {
        title: getSystemicExaminationSectionById("abdomen_summary")?.title,
        value: "9",
        subtitle: getSystemicExaminationSectionById("abdomen_summary")?.subtitle,
        component: SummarySection,
        sectionId: "abdomen_summary"
      },
      {
        title: getSystemicExaminationSectionById("neurological_tone")?.title,
        value: "10",
        subtitle: getSystemicExaminationSectionById("neurological_tone")?.subtitle,
        component: _sfc_main$1,
        sectionId: "neurological_tone"
      },
      {
        title: getSystemicExaminationSectionById("neurological_suck")?.title,
        value: "11",
        subtitle: getSystemicExaminationSectionById("neurological_suck")?.subtitle,
        component: _sfc_main$1,
        sectionId: "neurological_suck"
      },
      {
        title: getSystemicExaminationSectionById("neurological_grasp")?.title,
        value: "12",
        subtitle: getSystemicExaminationSectionById("neurological_grasp")?.subtitle,
        component: _sfc_main$1,
        sectionId: "neurological_grasp"
      },
      {
        title: getSystemicExaminationSectionById("neurological_moro")?.title,
        value: "13",
        subtitle: getSystemicExaminationSectionById("neurological_moro")?.subtitle,
        component: _sfc_main$1,
        sectionId: "neurological_moro"
      },
      {
        title: getSystemicExaminationSectionById("neurological_summary")?.title,
        value: "14",
        subtitle: getSystemicExaminationSectionById("neurological_summary")?.subtitle,
        component: SummarySection,
        sectionId: "neurological_summary"
      },
      {
        title: getSystemicExaminationSectionById("musculoskeletal_exam")?.title,
        value: "15",
        subtitle: getSystemicExaminationSectionById("musculoskeletal_exam")?.subtitle,
        component: _sfc_main$1,
        sectionId: "musculoskeletal_exam"
      },
      {
        title: getSystemicExaminationSectionById("thompson_score")?.title,
        value: "16",
        subtitle: getSystemicExaminationSectionById("thompson_score")?.subtitle,
        component: _sfc_main$1,
        sectionId: "thompson_score"
      },
      {
        title: getSystemicExaminationSectionById("musculoskeletal_summary")?.title,
        value: "17",
        subtitle: getSystemicExaminationSectionById("musculoskeletal_summary")?.subtitle,
        component: SummarySection,
        sectionId: "musculoskeletal_summary"
      }
    ];
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
          const patientId = Number(patient.value?.patientID);
          if (!Number.isFinite(patientId)) {
            toastWarning("No patient selected");
            return;
          }
          try {
            const saveResult = await systemicExaminationStore.saveAssessment(patientId);
            if (!saveResult.ok) {
              if (saveResult.reason === "saving") return;
              if (saveResult.reason === "no_data") {
                toastWarning("Please complete at least one section of the examination");
                return;
              }
              throw saveResult.error;
            }
            toastSuccess("Systemic examination saved successfully");
            await new Promise((resolve) => setTimeout(resolve, 500));
            router.push({ path: "/neonatal/checkpoint" });
          } catch (error) {
            console.error("Failed to save systemic examination", error);
            toastDanger("Failed to save systemic examination. Please try again.");
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
      neonatalSystemicExaminationSections
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "systemic-examination-page" }, {
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
            useSkipLogic: true,
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "systemicExamination",
            sectionsConfig: _ctx.neonatalSystemicExaminationSections,
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "sectionsConfig", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const SystemicExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e35d706"]]);

export { SystemicExamination as default };
