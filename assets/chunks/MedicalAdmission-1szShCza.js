import { s as defineComponent, a2 as onMounted, y as openBlock, O as createBlock, f as ref, c as computed, B as withCtx, A as createVNode, F as unref, aG as IonContent, C as createBaseVNode, S as withDirectives, T as vShow, H as createCommentVNode, bu as IonPage } from './vendor-74dOmGLc.js';
import { z as StandardForm, a0 as DrugService, n as icons, y as StandardValidations, u as useDemographicsStore, T as Toolbar, J as savePatientRecord, t as toastWarning, _ as _export_sfc } from '../index-BcjCT4MQ.js';
import { D as DemographicBar } from './DemographicBar-Ha76Eub2.js';
import { _ as _sfc_main$2, u as useFormWizard } from './useFormWizard-DwW-7eqF.js';
import { P as PresentingComplaints } from './PresentingComplaints-B-wGTVNu.js';
import { s as storeToRefs } from './pinia-DUPmLFD0.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DrugHistory",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const OPDDrugsList = ref([]);
    const drugHistorySchema = computed(() => {
      return [
        {
          componentType: "multiSelectInputField",
          header: "Past Medical History",
          name: "past medical history",
          trackBy: "concept_id",
          icon: icons.search,
          hideSelected: true,
          isMultiple: true,
          validation: (value) => {
            if (isNameInData(value?.name, OPDDrugsList.value)) {
              return "Presenting complaint already added";
            }
            return StandardValidations.required(value);
          },
          options: OPDDrugsList.value,
          grid: { s: "6" }
        }
      ];
    });
    const isNameInData = (name, dataArray) => {
      return dataArray.some((item) => item.name === name);
    };
    const getMedicationDataLIst = async () => {
      const res = await DrugService.getOPDDrugsList();
      OPDDrugsList.value = res;
    };
    onMounted(async () => {
      await getMedicationDataLIst();
    });
    const onSubmit = async () => {
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Drug history",
        formData: drugHistorySchema.value,
        key: formKey.value,
        ref: "formRef"
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1 = {
  style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" },
  class: "p-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MedicalAdmission",
  setup(__props) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) return null;
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Presenting Complaints":
          return "PresentingComplaints";
        case "Drug History":
          return "DrugHistory";
        case "Maternal Exam":
          return "MaternalExam";
        case "Abdominal examination":
          return "AbdominalExamination";
        case "Presenting signs for IPV":
          return "PresentingSigns";
        case "Vulva Inspection":
          return "VulvaInspection";
        default:
          return null;
      }
    };
    const showWizard = ref(true);
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
    const getActiveTabs = () => {
      return [
        { title: "Presenting Complaints", icon: "" },
        { title: "Drug History", icon: "" },
        { title: "Past Medical History", icon: "" },
        { title: "Past Surgical History", icon: "" },
        { title: "Allergy", icon: "" },
        { title: "Intoxication", icon: "" },
        { title: "Social History", icon: "" },
        { title: "Family History", icon: "" },
        { title: "Review of Systems", icon: "" },
        { title: "Physical Examination", icon: "" },
        { title: "Summary", icon: "" },
        { title: "Differential Diagnosis", icon: "" },
        { title: "Investigation", icon: "" },
        { title: "Management Plan", icon: "" }
      ];
    };
    const tabs = ref(getActiveTabs());
    const handleDoneButtonChange = (changeData) => {
      if (changeData.isLastStep) {
        console.log("Last step reached");
      }
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await savePatientRecord(patient.value);
      } catch (error) {
        toastWarning("Error occurred while saving data.");
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Medical Inpatient Admission Sheet",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[0] || (_cache[0] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PresentingComplaints, { ref: "presentingComplaintsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingComplaints"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$1, { ref: "drugHistoryRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "DrugHistory"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
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

const MedicalAdmission = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8dc78593"]]);

export { MedicalAdmission as default };
