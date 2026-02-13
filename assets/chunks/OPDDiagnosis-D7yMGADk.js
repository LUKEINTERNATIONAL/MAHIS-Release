import { s as defineComponent, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, K as modalController, br as pulseOutline, bc as checkmark, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, a2 as onMounted, n as nextTick, F as unref, H as createCommentVNode, D as toDisplayString, O as createBlock, B as withCtx, aI as IonAccordionGroup, aH as IonAccordion, a7 as IonLabel, a5 as createTextVNode, af as IonRow, J as Fragment, f as ref, c as computed } from './vendor-DrpjccQs.js';
import { a_ as List, H as HisDate, K as ObservationService, b0 as iconList, a$ as iconGraph, u as useDemographicsStore, _ as _export_sfc, bZ as useOPDDiagnosisStore, n as icons, F as DynamicButton, z as StandardForm, S as Service, x as toastDanger, b as EncounterTypeId, G as toastSuccess, y as StandardValidations } from '../index-BqymQxN2.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-DOXdmDdl.js';
import { D as DashBox } from './DashBox-BwDe0yWH.js';
import { m as mapState } from './pinia-CWrBOO3c.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';

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
const _hoisted_2 = {
  key: 0,
  class: "diagnosis-list-section"
};
const _hoisted_3 = {
  key: 0,
  class: "add-more-section"
};
const _hoisted_4 = {
  key: 1,
  class: "diagnosis-form-section"
};
const _hoisted_5 = {
  key: 0,
  class: "editing-header"
};
const _hoisted_6 = {
  key: 1,
  class: "editing-header"
};
const _hoisted_7 = {
  key: 2,
  class: "editing-header"
};
const _hoisted_8 = { class: "form-actions" };
const _hoisted_9 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OPDDiagnosis",
  setup(__props, { expose: __expose }) {
    const diagnoses = ref([]);
    const OPDdiagnosis = ref([]);
    const accordionGroup = ref();
    const formRef = ref(null);
    const editingDiagnosis = ref(null);
    const isEditing = ref(false);
    const addingSecondary = ref(false);
    const addingDifferential = ref(false);
    const formKey = ref(0);
    useOPDDiagnosisStore();
    const primaryDiagnosisExists = computed(() => {
      return OPDdiagnosis.value.some((diagnosis) => diagnosis.data.concept_id === 6542);
    });
    const primaryDiagnosisIsAlone = computed(() => {
      const hasPrimary = OPDdiagnosis.value.some((d) => d.data.concept_id === 6542);
      const hasOthers = OPDdiagnosis.value.some((d) => d.data.concept_id === 6543 || d.data.concept_id === 10201);
      return hasPrimary && !hasOthers;
    });
    const showForm = computed(() => {
      return !primaryDiagnosisExists.value || isEditing.value || addingSecondary.value || addingDifferential.value;
    });
    const diagnosisForm = computed(() => {
      let fieldsToShow = [];
      if (addingSecondary.value) {
        fieldsToShow = [
          {
            name: "secondaryDiagnosis",
            header: "Secondary Diagnosis",
            trackBy: "name",
            componentType: "multiSelectInputField",
            isMultiple: false,
            options: diagnoses.value,
            icon: icons.search,
            onSearchChange: getDiagnosis,
            validation: StandardValidations.required
          }
        ];
        return fieldsToShow;
      }
      if (addingDifferential.value) {
        fieldsToShow = [
          {
            name: "differentialDiagnosis",
            header: "Differential Diagnosis",
            trackBy: "name",
            componentType: "multiSelectInputField",
            options: diagnoses.value,
            icon: icons.search,
            isMultiple: false,
            onSearchChange: getDiagnosis,
            validation: StandardValidations.required
          }
        ];
        return fieldsToShow;
      }
      if (isEditing.value && editingDiagnosis.value) {
        const diagnosisType = editingDiagnosis.value.data.concept_id;
        const diagnosisObject = {
          name: editingDiagnosis.value.name,
          concept_id: editingDiagnosis.value.id
        };
        if (diagnosisType === 6542) {
          fieldsToShow = [
            {
              name: "primaryDiagnosis",
              header: "Primary Diagnosis",
              componentType: "multiSelectInputField",
              trackBy: "name",
              options: diagnoses.value,
              icon: icons.search,
              onSearchChange: getDiagnosis,
              validation: StandardValidations.required,
              initialValue: diagnosisObject
            }
          ];
        } else if (diagnosisType === 6543) {
          fieldsToShow = [
            {
              name: "secondaryDiagnosis",
              header: "Secondary Diagnosis",
              trackBy: "name",
              componentType: "multiSelectInputField",
              isMultiple: false,
              options: diagnoses.value,
              icon: icons.search,
              onSearchChange: getDiagnosis,
              validation: StandardValidations.required,
              initialValue: diagnosisObject
            }
          ];
        } else if (diagnosisType === 10201) {
          fieldsToShow = [
            {
              name: "differentialDiagnosis",
              header: "Differential Diagnosis",
              trackBy: "name",
              componentType: "multiSelectInputField",
              options: diagnoses.value,
              icon: icons.search,
              isMultiple: false,
              onSearchChange: getDiagnosis,
              validation: StandardValidations.required,
              initialValue: diagnosisObject
            }
          ];
        }
        return fieldsToShow;
      }
      return [
        {
          name: "primaryDiagnosis",
          header: "Primary Diagnosis",
          componentType: "multiSelectInputField",
          trackBy: "name",
          options: diagnoses.value,
          icon: icons.search,
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
          icon: icons.search,
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
          icon: icons.search,
          isMultiple: true,
          condition: (data) => data?.differentialDiagnosisCheckbox,
          onSearchChange: getDiagnosis,
          validation: (value, data) => validateDiagnosis(data, "differentialDiagnosis")
        }
      ];
    });
    const addSecondaryDiagnosis = () => {
      addingSecondary.value = true;
      formKey.value++;
    };
    const addDifferentialDiagnosis = () => {
      addingDifferential.value = true;
      formKey.value++;
    };
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
    const saveDiagnosis = async () => {
      try {
        if (formRef.value?.validateForm() == null) {
          let success;
          if (isEditing.value && editingDiagnosis.value) {
            success = updateDiagnosis();
          } else if (addingSecondary.value || addingDifferential.value) {
            success = addAdditionalDiagnosis();
          } else {
            success = buildDiagnosis();
          }
          if (success) {
            formRef.value?.resetForm();
            isEditing.value = false;
            addingSecondary.value = false;
            addingDifferential.value = false;
            editingDiagnosis.value = null;
            formKey.value++;
          }
        }
      } catch (error) {
        console.error("Error saving diagnosis:", error);
      }
    };
    const addAdditionalDiagnosis = () => {
      const formValues = formRef.value?.getFormValues() || {};
      const diagnosis = [];
      const existingDiagnoses = OPDdiagnosis.value.map((d) => d.name);
      if (addingSecondary.value) {
        const secondaryInput = formValues["secondaryDiagnosis"];
        if (secondaryInput && !existingDiagnoses.includes(secondaryInput.name)) {
          diagnosis.push({
            actionBtn: true,
            btn: ["edit", "delete"],
            name: secondaryInput.name,
            id: secondaryInput.concept_id,
            display: [secondaryInput.name, "Secondary diagnosis"],
            data: {
              concept_id: 6543,
              value_coded: secondaryInput.concept_id,
              obs_datetime: Service.getSessionDate()
            }
          });
        }
      }
      if (addingDifferential.value) {
        const differentialInput = formValues["differentialDiagnosis"];
        if (differentialInput && !existingDiagnoses.includes(differentialInput.name)) {
          diagnosis.push({
            actionBtn: true,
            btn: ["edit", "delete"],
            name: differentialInput.name,
            id: differentialInput.concept_id,
            display: [differentialInput.name, "Differential diagnosis"],
            data: {
              concept_id: 10201,
              value_coded: differentialInput.concept_id,
              obs_datetime: Service.getSessionDate()
            }
          });
        }
      }
      if (diagnosis.length > 0) {
        OPDdiagnosis.value = [...OPDdiagnosis.value, ...diagnosis];
        updatePrimaryDiagnosisButtons();
        return true;
      }
      return false;
    };
    const editDiagnosis = (diagnosisItem) => {
      isEditing.value = true;
      editingDiagnosis.value = diagnosisItem;
      formKey.value++;
    };
    const updateDiagnosis = () => {
      if (!editingDiagnosis.value) return false;
      const formValues = formRef.value?.getFormValues() || {};
      const diagnosisType = editingDiagnosis.value.data.concept_id;
      let newDiagnosisValue = null;
      if (diagnosisType === 6542) {
        newDiagnosisValue = formValues["primaryDiagnosis"];
      } else if (diagnosisType === 6543) {
        newDiagnosisValue = formValues["secondaryDiagnosis"];
      } else if (diagnosisType === 10201) {
        newDiagnosisValue = formValues["differentialDiagnosis"];
      }
      if (!newDiagnosisValue) return false;
      const index = OPDdiagnosis.value.findIndex(
        (d) => d.id === editingDiagnosis.value.id && d.data.concept_id === editingDiagnosis.value.data.concept_id
      );
      if (index !== -1) {
        if (diagnosisType === 6542) {
          OPDdiagnosis.value[index] = {
            actionBtn: true,
            btn: primaryDiagnosisIsAlone.value ? ["edit", "delete"] : ["edit"],
            name: newDiagnosisValue.name,
            id: newDiagnosisValue.concept_id,
            display: [newDiagnosisValue.name, "Primary diagnosis"],
            data: {
              concept_id: 6542,
              value_coded: newDiagnosisValue.concept_id,
              obs_datetime: Service.getSessionDate()
            }
          };
        } else if (diagnosisType === 6543) {
          OPDdiagnosis.value[index] = {
            actionBtn: true,
            btn: ["edit", "delete"],
            name: newDiagnosisValue.name,
            id: newDiagnosisValue.concept_id,
            display: [newDiagnosisValue.name, "Secondary diagnosis"],
            data: {
              concept_id: 6543,
              value_coded: newDiagnosisValue.concept_id,
              obs_datetime: Service.getSessionDate()
            }
          };
        } else if (diagnosisType === 10201) {
          OPDdiagnosis.value[index] = {
            actionBtn: true,
            btn: ["edit", "delete"],
            name: newDiagnosisValue.name,
            id: newDiagnosisValue.concept_id,
            display: [newDiagnosisValue.name, "Differential diagnosis"],
            data: {
              concept_id: 10201,
              value_coded: newDiagnosisValue.concept_id,
              obs_datetime: Service.getSessionDate()
            }
          };
        }
      }
      return true;
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
          const willHaveOthers = secondaryInput && secondaryInput.length > 0 || differentialInput && differentialInput.length > 0;
          diagnosis.push({
            actionBtn: true,
            btn: willHaveOthers ? ["edit"] : ["edit", "delete"],
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
              btn: ["edit", "delete"],
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
              btn: ["edit", "delete"],
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
        updatePrimaryDiagnosisButtons();
      }
      return true;
    };
    const updatePrimaryDiagnosisButtons = () => {
      const primaryIndex = OPDdiagnosis.value.findIndex((d) => d.data.concept_id === 6542);
      if (primaryIndex !== -1) {
        const hasOthers = OPDdiagnosis.value.some((d) => d.data.concept_id === 6543 || d.data.concept_id === 10201);
        OPDdiagnosis.value[primaryIndex].btn = hasOthers ? ["edit"] : ["edit", "delete"];
      }
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
      updatePrimaryDiagnosisButtons();
    };
    const handleEdit = (params) => {
      const item = params.item;
      editDiagnosis(item);
    };
    const cancelEdit = () => {
      isEditing.value = false;
      addingSecondary.value = false;
      addingDifferential.value = false;
      editingDiagnosis.value = null;
      formRef.value?.resetForm();
      formKey.value++;
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
      await getDiagnosis("");
      await nextTick();
      formRef.value?.resetForm();
    });
    __expose({
      onSubmit,
      validateAndSave: () => {
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          OPDdiagnosis.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(List, {
              listData: OPDdiagnosis.value,
              "onClicked:delete": deleteDiagnosis,
              "onClicked:edit": handleEdit
            }, null, 8, ["listData"]),
            !isEditing.value && !addingSecondary.value && !addingDifferential.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(DynamicButton, {
                fill: "clear",
                icon: unref(icons).plus,
                "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addSecondaryDiagnosis()),
                name: "Add Secondary Diagnosis",
                class: "add-more-btn"
              }, null, 8, ["icon"]),
              createVNode(DynamicButton, {
                fill: "clear",
                icon: unref(icons).plus,
                "onClicked:btn": _cache[1] || (_cache[1] = ($event) => addDifferentialDiagnosis()),
                name: "Add Differential Diagnosis",
                class: "add-more-btn"
              }, null, 8, ["icon"])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          showForm.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createBaseVNode("span", null, "Editing: " + toDisplayString(editingDiagnosis.value?.name), 1)
            ])) : createCommentVNode("", true),
            addingSecondary.value ? (openBlock(), createElementBlock("div", _hoisted_6, [..._cache[4] || (_cache[4] = [
              createBaseVNode("span", null, "Adding Secondary Diagnosis", -1)
            ])])) : createCommentVNode("", true),
            addingDifferential.value ? (openBlock(), createElementBlock("div", _hoisted_7, [..._cache[5] || (_cache[5] = [
              createBaseVNode("span", null, "Adding Differential Diagnosis", -1)
            ])])) : createCommentVNode("", true),
            (openBlock(), createBlock(StandardForm, {
              formData: diagnosisForm.value,
              ref_key: "formRef",
              ref: formRef,
              key: formKey.value
            }, null, 8, ["formData"])),
            createBaseVNode("div", _hoisted_8, [
              isEditing.value || addingSecondary.value || addingDifferential.value ? (openBlock(), createBlock(DynamicButton, {
                key: 0,
                icon: unref(icons).redXclose,
                "onClicked:btn": _cache[2] || (_cache[2] = ($event) => cancelEdit()),
                name: "Cancel",
                class: "cancel-btn",
                fill: "clear"
              }, null, 8, ["icon"])) : createCommentVNode("", true),
              createVNode(DynamicButton, {
                fill: "clear",
                icon: unref(icons).plus,
                "onClicked:btn": _cache[3] || (_cache[3] = ($event) => saveDiagnosis()),
                name: isEditing.value ? "Update" : "Save",
                disabled: formRef.value?.validateForm(),
                class: "save-btn"
              }, null, 8, ["icon", "name", "disabled"])
            ])
          ])) : createCommentVNode("", true),
          OPDdiagnosis.value.length === 0 && !showForm.value ? (openBlock(), createBlock(DashBox, {
            key: 2,
            status: true,
            content: "No Diagnosis added"
          })) : createCommentVNode("", true)
        ]),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonAccordionGroup), {
              ref_key: "accordionGroup",
              ref: accordionGroup,
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonAccordion), {
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
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode("Previous Diagnosis", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_9, [
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

const OPDDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6be88148"]]);

export { OPDDiagnosis as O };
