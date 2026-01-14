import { q as defineComponent, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, aD as IonContent, J as modalController, bp as pulseOutline, b9 as checkmark, v as resolveComponent, x as createElementBlock, y as openBlock, A as createBaseVNode, z as createVNode, r as ref, d as computed, w as watch, a1 as onMounted, G as createCommentVNode, N as createBlock, B as withCtx, E as unref, a4 as createTextVNode, H as Fragment } from './vendor-DGIzCW4f.js';
import { a_ as List, H as HisDate, K as ObservationService, b0 as iconList, a$ as iconGraph, u as useDemographicsStore, _ as _export_sfc, bX as useOPDDiagnosisStore, y as StandardValidations, n as icons, C as StandardForm, F as DynamicButton, S as Service, x as toastDanger, b as EncounterTypeId, G as toastSuccess } from '../index-D_1ZD1MC.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-CrEutuSG.js';
import { D as DashBox } from './DashBox-kiEuxQeH.js';
import { m as mapState } from './pinia-Bmkga1nW.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';

const _sfc_main$1 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    List
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  data() {
    return {
      valueNumericArray: [],
      obsDatetime: [],
      graphIcon: iconGraph(["#006401"]),
      listIcon: iconList(["#636363"]),
      displayGraph: true,
      orders: [],
      height: [],
      BMI: [],
      iconBg: {},
      activeWeight: [],
      activeHeight: [],
      activeBMI: [],
      list: [],
      series: [
        {
          name: "",
          data: []
        }
      ]
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  async mounted() {
    const obsP = await ObservationService.getAll(this.patient.patientID, "Primary diagnosis");
    const obsS = await ObservationService.getAll(this.patient.patientID, "Secondary diagnosis");
    const obsD = await ObservationService.getAll(this.patient.patientID, "Attempted/ Differential diagnosis");
    const obs = [...obsP || [], ...obsS || [], ...obsD || []];
    const diagnosis = !lodashExports.isEmpty(obs) ? Promise.all(
      obs.map(async (ob) => {
        return {
          name: await ObservationService.getConceptName(ob["value_coded"]),
          obs_date: ob.obs_datetime
        };
      })
    ) : [];
    this.setListData(await diagnosis);
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    handleIcon() {
    },
    setActivClass(active) {
      this.activeHeight = "";
      this.activeBMI = "";
      this.activeWeight = "";
      if (active == "height") this.activeHeight = "_active";
      else if (active == "weight") this.activeWeight = "_active";
      else if (active == "BMI") this.activeBMI = "_active";
    },
    setListData(data) {
      this.list = [];
      this.list.push({
        actionBtn: false,
        class: "col_background",
        header: true,
        minHeight: "--min-height: 25px;",
        display: ["Date", "Diagnosis", "Notes"]
      });
      data.forEach((item) => {
        this.list.push({
          actionBtn: false,
          minHeight: "--min-height: 25px;",
          class: "col_background",
          display: [HisDate.toStandardHisFormat(item.obs_date), item.name, ""]
        });
      });
    }
  }
});

const _hoisted_1$1 = { class: "modal_wrapper" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_list = resolveComponent("list");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", null, [
      createVNode(_component_list, { listData: _ctx.list }, null, 8, ["listData"])
    ])
  ]);
}
const previousDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-88580898"]]);

const _hoisted_1 = {
  class: "custom_card",
  style: { "padding": "10px" }
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  style: { "color": "red", "margin-top": "10px", "background": "lightgoldenrodyellow" }
};
const _hoisted_4 = { style: { "width": "100%" } };
const _hoisted_5 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OPDDiagnosis",
  setup(__props, { expose: __expose }) {
    const iconsContent = icons;
    const no_item = ref(true);
    const search_item = ref(false);
    const display_primary = ref(true);
    const display_item = ref(false);
    const addItemButton = ref(true);
    const selectedText = ref("");
    const conditionStatus = ref("");
    const diagnoses = ref([]);
    const OPDdiagnosis = ref([]);
    const accordionGroup = ref();
    const formRef = ref(null);
    useOPDDiagnosisStore();
    const primaryDiagnosisExists = computed(() => {
      return OPDdiagnosis.value.some((diagnosis) => diagnosis.data.concept_id === 6542);
    });
    watch(
      OPDdiagnosis,
      () => {
        setDashedBox();
      },
      { deep: true }
    );
    const diagnosisForm = computed(() => [
      {
        name: "primaryDiagnosis",
        header: "Primary Diagnosis",
        componentType: "multiSelectInputField",
        trackBy: "name",
        options: diagnoses.value,
        icon: iconsContent.search,
        onSearchChange: getDiagnosis,
        validation: StandardValidations.required
      },
      {
        componentType: "checkboxField",
        label: "Secondary Diagnosis",
        type: "single",
        grid: { s: "6" },
        name: "secondaryDiagnosisCheckbox"
      },
      {
        componentType: "checkboxField",
        label: "Differential Diagnosis",
        type: "single",
        grid: { s: "6" },
        name: "differentialDiagnosisCheckbox"
      },
      {
        componentType: "Dashes"
      },
      {
        name: "secondaryDiagnosis",
        header: "Secondary Diagnosis",
        trackBy: "name",
        componentType: "multiSelectInputField",
        isMultiple: true,
        options: diagnoses.value,
        icon: iconsContent.search,
        condition: (data) => data?.secondaryDiagnosisCheckbox,
        onSearchChange: getDiagnosis,
        validation: (value, data) => validateDiagnosis(data, "secondaryDiagnosis")
      },
      {
        name: "differentialDiagnosis",
        header: "Differential Diagnosis",
        trackBy: "name",
        componentType: "multiSelectInputField",
        options: diagnoses.value,
        icon: iconsContent.search,
        isMultiple: true,
        condition: (data) => data?.differentialDiagnosisCheckbox,
        onSearchChange: getDiagnosis,
        validation: (value, data) => validateDiagnosis(data, "differentialDiagnosis")
      }
    ]);
    const validateDiagnosis = (data, fieldName) => {
      if (!data) return null;
      const primary = data.primaryDiagnosis?.name;
      const secondary = data.secondaryDiagnosis?.map((d) => d.name) || [];
      const differential = data.differentialDiagnosis?.map((d) => d.name) || [];
      if (fieldName === "secondaryDiagnosis" && secondary.includes(primary)) {
        return `${primary} is already the primary diagnosis`;
      }
      if (fieldName === "differentialDiagnosis" && differential.includes(primary)) {
        return `${primary} is already the primary diagnosis`;
      }
      const overlap = secondary.find((s) => differential.includes(s));
      if (overlap) {
        return `${overlap} cannot be both secondary and differential`;
      }
      return null;
    };
    const displayInputFields = () => {
      conditionStatus.value = "";
      selectedText.value = "";
      no_item.value = false;
      addItemButton.value = false;
      search_item.value = true;
    };
    const addNewRow = async () => {
      if (formRef.value?.validateForm() == null) {
        buildDiagnosis();
        search_item.value = false;
        display_item.value = true;
        addItemButton.value = true;
        display_primary.value = false;
      }
    };
    const buildDiagnosis = () => {
      const diagnosis = [];
      const existingDiagnoses = OPDdiagnosis.value.map((d) => d.name);
      const formValues = formRef.value?.getFormValues() || {};
      const primaryInput = formValues["primaryDiagnosis"] || [];
      const secondaryInput = formValues["secondaryDiagnosis"] || [];
      const differentialInput = formValues["differentialDiagnosis"] || [];
      if (primaryInput.name && !existingDiagnoses.includes(primaryInput.name)) {
        const primaryExists = OPDdiagnosis.value.some((obj) => obj.data.concept_id === 6542);
        if (!primaryExists) {
          diagnosis.push({
            actionBtn: true,
            btn: ["delete"],
            name: primaryInput.name,
            id: primaryInput.concept_id,
            display: [primaryInput.name, "Primary diagnosis"],
            data: {
              concept_id: 6542,
              value_coded: primaryInput.concept_id,
              obs_datetime: Service.getSessionDate()
            }
          });
        } else {
          toastDanger("Only one primary diagnosis is allowed");
          return false;
        }
      }
      if (secondaryInput) {
        secondaryInput.forEach((item) => {
          if (!existingDiagnoses.includes(item.name)) {
            diagnosis.push({
              actionBtn: true,
              btn: ["delete"],
              name: item.name,
              id: item.concept_id,
              display: [item.name, "Secondary diagnosis"],
              data: {
                concept_id: 6543,
                value_coded: item.concept_id,
                obs_datetime: Service.getSessionDate()
              }
            });
          }
        });
      }
      if (differentialInput) {
        differentialInput.forEach((item) => {
          if (!existingDiagnoses.includes(item.name)) {
            diagnosis.push({
              actionBtn: true,
              btn: ["delete"],
              name: item.name,
              id: item.concept_id,
              display: [item.name, "Differential diagnosis"],
              data: {
                concept_id: 10201,
                value_coded: item.concept_id,
                obs_datetime: Service.getSessionDate()
              }
            });
          }
        });
      }
      if (diagnosis.length > 0) {
        OPDdiagnosis.value = [...OPDdiagnosis.value, ...diagnosis];
      }
      return true;
    };
    const getDiagnosis = async (value) => {
      const searchValue = value.trim().toLowerCase() || "";
      diagnoses.value = await PatientDiagnosisService.getDiagnosis(searchValue, 1, 15);
      return diagnoses.value;
    };
    const deleteDiagnosis = (OPDdiagnosisParam) => {
      const originalData = OPDdiagnosis.value;
      const diagnosisToRemove = OPDdiagnosisParam.name;
      const filteredData = originalData.filter((item) => item.display[0] !== diagnosisToRemove);
      OPDdiagnosis.value = filteredData;
    };
    const setDashedBox = () => {
      if (OPDdiagnosis.value.length > 0) {
        display_item.value = true;
        no_item.value = false;
      } else if (!search_item.value) {
        no_item.value = true;
      }
      addItemButton.value = !primaryDiagnosisExists.value;
    };
    const onSubmit = async () => {
      if (OPDdiagnosis.value.length <= 0) {
        return;
      }
      const diagnosis = OPDdiagnosis.value.flatMap((item) => item.data);
      if (diagnosis.length <= 0) return;
      await ObservationService.addObsToEncounterPatient(diagnosis, EncounterTypeId.DIAGNOSIS);
      toastSuccess("Diagnosis saved successful");
      OPDdiagnosis.value = [];
    };
    onMounted(async () => {
      setDashedBox();
      await getDiagnosis("");
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_accordion = resolveComponent("ion-accordion");
      const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(DashBox, {
            status: no_item.value,
            content: "No Diagnosis added"
          }, null, 8, ["status"]),
          display_item.value ? (openBlock(), createElementBlock("span", _hoisted_2, [
            createVNode(List, {
              listData: OPDdiagnosis.value,
              "onClicked:delete": deleteDiagnosis
            }, null, 8, ["listData"]),
            primaryDiagnosisExists.value ? (openBlock(), createElementBlock("div", _hoisted_3, " In order to update the diagnosis list, please remove/delete the primary diagnosis only and then re-add or change it along with the secondary and differential diagnoses. ")) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          search_item.value ? (openBlock(), createBlock(_component_ion_row, { key: 1 }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4, [
                createVNode(StandardForm, {
                  formData: diagnosisForm.value,
                  ref_key: "formRef",
                  ref: formRef
                }, null, 8, ["formData"])
              ]),
              createBaseVNode("div", null, [
                createVNode(DynamicButton, {
                  fill: "clear",
                  icon: unref(iconsContent).plus,
                  iconSlot: "icon-only",
                  "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addNewRow()),
                  name: "Save",
                  disabled: formRef.value?.validateForm(),
                  class: "ion-margin-top"
                }, null, 8, ["icon", "disabled"])
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          addItemButton.value ? (openBlock(), createBlock(_component_ion_row, {
            key: 2,
            style: { "margin-top": "10px" }
          }, {
            default: withCtx(() => [
              createVNode(DynamicButton, {
                fill: "clear",
                icon: unref(iconsContent).plus,
                iconSlot: "icon-only",
                "onClicked:btn": _cache[1] || (_cache[1] = ($event) => displayInputFields()),
                name: "Add new Diagnosis"
              }, null, 8, ["icon"])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion_group, {
              ref_key: "accordionGroup",
              ref: accordionGroup,
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_accordion, {
                  value: "first",
                  "toggle-icon-slot": "start",
                  class: "custom_card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_label, { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode("Previous Diagnosis", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(previousDiagnosis)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const OPDDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b47889c"]]);

export { OPDDiagnosis as O };
