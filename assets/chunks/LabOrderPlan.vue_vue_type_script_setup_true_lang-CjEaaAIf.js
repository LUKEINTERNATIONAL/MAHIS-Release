import { s as defineComponent, h as inject, y as openBlock, z as createElementBlock, A as createVNode, F as unref, aq as IonItem, B as withCtx, ae as IonCheckbox, a7 as IonLabel, C as createBaseVNode, D as toDisplayString, L as IonIcon, e$ as chevronUpOutline, a9 as chevronDownOutline, S as withDirectives, J as Fragment, R as renderList, O as createBlock, a5 as createTextVNode, T as vShow, c as computed, f as ref, M as IonSpinner, H as createCommentVNode, f0 as provide, x as resolveComponent } from './vendor-C-pvji42.js';
import { _ as _export_sfc, F as DynamicButton, n as icons, y as StandardValidations, z as StandardForm } from '../index-CS8dYJBt.js';

const _hoisted_1$3 = { class: "checkbox-group" };
const _hoisted_2$2 = { class: "label-content" };
const _hoisted_3$2 = { class: "nested-content" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CheckboxGroup",
  props: {
    sectionKey: {}
  },
  setup(__props) {
    const props = __props;
    const sections = inject("sections");
    const sectionDefinitions = inject("sectionDefinitions");
    const sectionDef = sectionDefinitions[props.sectionKey];
    const sectionState = computed(() => sections.value[props.sectionKey]);
    const isOpen = computed(() => sectionState.value.open);
    const selectedFields = computed(() => sectionState.value.selectedFields);
    const allSelected = computed(() => {
      if (!sectionDef.fields || sectionDef.fields.length === 0) return false;
      return sectionDef.fields.every((field) => selectedFields.value[field.name]);
    });
    const someSelected = computed(() => {
      if (!sectionDef.fields || sectionDef.fields.length === 0) return false;
      const count = sectionDef.fields.filter((field) => selectedFields.value[field.name]).length;
      return count > 0 && count < sectionDef.fields.length;
    });
    const toggleOpen = () => {
      sections.value[props.sectionKey].open = !sections.value[props.sectionKey].open;
      console.log("🚀 ~ toggleOpen ~ sections.value[props.sectionKey].open:", sections.value[props.sectionKey].open);
    };
    const toggleField = (fieldName) => {
      sections.value[props.sectionKey].selectedFields[fieldName] = !sections.value[props.sectionKey].selectedFields[fieldName];
    };
    const toggleAllFields = () => {
      const newState = !allSelected.value;
      if (sectionDef.fields) {
        sectionDef.fields.forEach((field) => {
          sections.value[props.sectionKey].selectedFields[field.name] = newState;
        });
      }
      if (newState) {
        sections.value[props.sectionKey].open = true;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(unref(IonItem), {
          lines: "none",
          class: "section-header"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonCheckbox), {
              slot: "start",
              checked: allSelected.value,
              indeterminate: someSelected.value && !allSelected.value,
              onIonChange: toggleAllFields
            }, null, 8, ["checked", "indeterminate"]),
            createVNode(unref(IonLabel), { style: { "margin-left": "5px" } }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2$2, [
                  createBaseVNode("span", null, toDisplayString(unref(sectionDef).title), 1),
                  createBaseVNode("div", {
                    class: "chevron-container",
                    onClick: toggleOpen
                  }, [
                    createVNode(unref(IonIcon), {
                      icon: isOpen.value ? unref(chevronUpOutline) : unref(chevronDownOutline),
                      class: "chevron-icon"
                    }, null, 8, ["icon"])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        withDirectives(createBaseVNode("div", _hoisted_3$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sectionDef).fields, (field) => {
            return openBlock(), createBlock(unref(IonItem), {
              key: field.name,
              lines: "none",
              class: "field-item"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonCheckbox), {
                  slot: "start",
                  checked: selectedFields.value[field.name],
                  onIonChange: ($event) => toggleField(field.name)
                }, null, 8, ["checked", "onIonChange"]),
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(field.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ], 512), [
          [vShow, isOpen.value]
        ])
      ]);
    };
  }
});

const CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-674cf61d"]]);

const _hoisted_1$2 = { class: "parent-checkbox-group" };
const _hoisted_2$1 = { class: "label-content" };
const _hoisted_3$1 = { class: "nested-content" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ParentCheckboxGroup",
  props: {
    sectionKey: {}
  },
  setup(__props) {
    const props = __props;
    const sections = inject("sections");
    const sectionDefinitions = inject("sectionDefinitions");
    const sectionDef = sectionDefinitions[props.sectionKey];
    const sectionState = computed(() => sections.value[props.sectionKey]);
    const isOpen = computed(() => sectionState.value.open);
    const allChildrenSelected = computed(() => {
      if (!sectionDef.subSections) return false;
      return sectionDef.subSections.every((subKey) => {
        const subDef = sectionDefinitions[subKey];
        if (!subDef.fields || subDef.fields.length === 0) return true;
        return subDef.fields.every((field) => sections.value[subKey].selectedFields[field.name]);
      });
    });
    const someChildrenSelected = computed(() => {
      if (!sectionDef.subSections) return false;
      let selectedCount = 0;
      let totalCount = 0;
      sectionDef.subSections.forEach((subKey) => {
        const subDef = sectionDefinitions[subKey];
        if (subDef.fields) {
          totalCount += subDef.fields.length;
          selectedCount += subDef.fields.filter((field) => sections.value[subKey].selectedFields[field.name]).length;
        }
      });
      return selectedCount > 0 && selectedCount < totalCount;
    });
    const toggleOpen = () => {
      sections.value[props.sectionKey].open = !sections.value[props.sectionKey].open;
    };
    const toggleAllChildren = () => {
      const newState = !allChildrenSelected.value;
      if (sectionDef.subSections) {
        sectionDef.subSections.forEach((subKey) => {
          const subDef = sectionDefinitions[subKey];
          if (subDef.fields) {
            subDef.fields.forEach((field) => {
              sections.value[subKey].selectedFields[field.name] = newState;
            });
            sections.value[subKey].open = true;
          }
        });
      }
      sections.value[props.sectionKey].open = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(IonItem), {
          lines: "none",
          class: "section-header"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonCheckbox), {
              slot: "start",
              checked: allChildrenSelected.value,
              indeterminate: someChildrenSelected.value && !allChildrenSelected.value,
              onIonChange: toggleAllChildren
            }, null, 8, ["checked", "indeterminate"]),
            createVNode(unref(IonLabel), {
              onClick: toggleOpen,
              class: "clickable-label"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2$1, [
                  createBaseVNode("strong", null, toDisplayString(unref(sectionDef).title), 1),
                  createVNode(unref(IonIcon), {
                    icon: isOpen.value ? unref(chevronUpOutline) : unref(chevronDownOutline),
                    class: "chevron-icon"
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        withDirectives(createBaseVNode("div", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sectionDef).subSections, (subKey) => {
            return openBlock(), createBlock(CheckboxGroup, {
              key: subKey,
              "section-key": subKey
            }, null, 8, ["section-key"]);
          }), 128))
        ], 512), [
          [vShow, isOpen.value]
        ])
      ]);
    };
  }
});

const ParentCheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2fe0d76b"]]);

const _hoisted_1$1 = { class: "ion-padding" };
const _hoisted_2 = {
  key: 0,
  class: "loading-overlay"
};
const _hoisted_3 = { class: "form-content" };
const _hoisted_4 = { class: "checkbox-item" };
const _hoisted_5 = { class: "checkbox-item" };
const _hoisted_6 = { class: "checkbox-item" };
const _hoisted_7 = { class: "ion-float-right ion-padding" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BedsidePlan",
  setup(__props) {
    const concepts = {
      PREGNANCY_TEST: "PREGNANCY_TEST",
      UROBILINOGEN: "UROBILINOGEN",
      LEUKOCYTES: "LEUKOCYTES",
      BILIRUBIN: "BILIRUBIN",
      SPECIFIC_GRAVITY: "SPECIFIC_GRAVITY",
      NITRITE: "NITRITE",
      KETONES: "KETONES",
      BLOOD: "BLOOD",
      PROTEIN: "PROTEIN",
      POINT_OF_CARE_ULTRASOUND: "POCUS",
      ECG: "ECG",
      PEFR: "PEFR",
      OTHER: "OTHER"
    };
    const bloodGasConcepts = {
      PH: "pH",
      PCO2: "pCO₂ (mmHg)",
      PO2: "pO₂ (mmHg)",
      CTHB: "c_tHb (g/dL)",
      SO2: "sO₂ (%)",
      FO2HB: "FO₂Hb (%)",
      FHHB: "FHHb (%)",
      FMETHB: "FmetHb (%)",
      CK: "cK⁺ (mmol/L)",
      CNA: "cNa⁺ (mmol/L)",
      CA2: "cCa²⁺ (mmol/L)",
      CCL: "cCl⁻ (mmol/L)",
      GLU: "cGlu (mmol/L)",
      LAC: "cLac (mmol/L)",
      CTBIL: "ctBil (µmol/L)",
      PH_T: "pH (T)",
      PCO2_T: "pCO₂ (T) mmHg",
      PO2_T: "pO₂ (T) mmHg",
      P50E: "P50e",
      BASE_EXCESS: "cBaseExcess (Ecf)c",
      HCO3: "cHCO₃⁻ (P,st)c",
      ANION_GAP: "Anion Gap",
      MOSM: "cmOSm"
    };
    const formConfig = {
      PH: { name: bloodGasConcepts.PH, label: bloodGasConcepts.PH },
      PCO2: { name: bloodGasConcepts.PCO2, label: bloodGasConcepts.PCO2 },
      PO2: { name: bloodGasConcepts.PO2, label: bloodGasConcepts.PO2 },
      CTHB: { name: bloodGasConcepts.CTHB, label: bloodGasConcepts.CTHB },
      SO2E: { name: bloodGasConcepts.SO2, label: bloodGasConcepts.SO2 },
      FO2HBE: { name: bloodGasConcepts.FO2HB, label: bloodGasConcepts.FO2HB },
      FHHBE: { name: bloodGasConcepts.FHHB, label: bloodGasConcepts.FHHB },
      FMETHB: { name: bloodGasConcepts.FMETHB, label: bloodGasConcepts.FMETHB },
      CK: { name: bloodGasConcepts.CK, label: bloodGasConcepts.CK },
      CNA: { name: bloodGasConcepts.CNA, label: bloodGasConcepts.CNA },
      CA2: { name: bloodGasConcepts.CA2, label: bloodGasConcepts.CA2 },
      CCL: { name: bloodGasConcepts.CCL, label: bloodGasConcepts.CCL },
      glucose: { name: bloodGasConcepts.GLU, label: bloodGasConcepts.GLU },
      LACTATE: { name: bloodGasConcepts.LAC, label: bloodGasConcepts.LAC },
      CTBIL: { name: bloodGasConcepts.CTBIL, label: bloodGasConcepts.CTBIL },
      PH_T: { name: bloodGasConcepts.PH_T, label: bloodGasConcepts.PH_T },
      PCO2_T: { name: bloodGasConcepts.PCO2_T, label: bloodGasConcepts.PCO2_T },
      PO2_T: { name: bloodGasConcepts.PO2_T, label: bloodGasConcepts.PO2_T },
      P50E: { name: bloodGasConcepts.P50E, label: bloodGasConcepts.P50E },
      BASE_EXCESS: { name: bloodGasConcepts.BASE_EXCESS, label: bloodGasConcepts.BASE_EXCESS },
      HCO3: { name: bloodGasConcepts.HCO3, label: bloodGasConcepts.HCO3 },
      ANION_GAPC: { name: bloodGasConcepts.ANION_GAP, label: bloodGasConcepts.ANION_GAP },
      MOSMC: { name: bloodGasConcepts.MOSM, label: bloodGasConcepts.MOSM },
      pregnancyTest: { name: concepts.PREGNANCY_TEST, label: "Pregnancy Test", coded: true },
      urobilinogen: { name: concepts.UROBILINOGEN, label: "Urobilinogen" },
      leukocytes: { name: concepts.LEUKOCYTES, label: "Leukocytes" },
      bilirubin: { name: concepts.BILIRUBIN, label: "Bilirubin" },
      specificGravity: { name: concepts.SPECIFIC_GRAVITY, label: "Specific Gravity" },
      nitrite: { name: concepts.NITRITE, label: "Nitrite" },
      ketones: { name: concepts.KETONES, label: "Ketones" },
      blood: { name: concepts.BLOOD, label: "Blood" },
      protein: { name: concepts.PROTEIN, label: "Protein" },
      pocus: { name: concepts.POINT_OF_CARE_ULTRASOUND, label: "Point of care ultrasound" },
      ecg: { name: concepts.ECG, label: "ECG" },
      pefr: { name: concepts.PEFR, label: "PEFR" },
      other: { name: concepts.OTHER, label: "Other" }
    };
    const sectionDefinitions = {
      arterialVenousBloodGasMain: {
        title: "Arterial/Venous Blood Gas",
        subSections: ["bloodGasValues", "oximetryValues", "electrolyteValues", "metabolicValues", "temperatureCorrectedValues", "acidBaseStatus"]
      },
      bloodGasValues: {
        title: "Blood Gas Values",
        fields: [formConfig.PH, formConfig.PCO2, formConfig.PO2]
      },
      oximetryValues: {
        title: "Oximetry Values",
        fields: [formConfig.CTHB, formConfig.SO2E, formConfig.FO2HBE, formConfig.FHHBE, formConfig.FMETHB]
      },
      electrolyteValues: {
        title: "Electrolyte Values",
        fields: [formConfig.CK, formConfig.CNA, formConfig.CA2, formConfig.CCL]
      },
      metabolicValues: {
        title: "Metabolic Values",
        fields: [formConfig.glucose, formConfig.LACTATE, formConfig.CTBIL]
      },
      temperatureCorrectedValues: {
        title: "Temperature Corrected Values",
        fields: [formConfig.PH_T, formConfig.PCO2_T, formConfig.PO2_T, formConfig.P50E]
      },
      acidBaseStatus: {
        title: "Acid Base Status",
        fields: [formConfig.BASE_EXCESS, formConfig.HCO3, formConfig.ANION_GAPC, formConfig.MOSMC]
      },
      dipstick: {
        title: "Dipstick",
        fields: [
          formConfig.urobilinogen,
          formConfig.PH,
          formConfig.leukocytes,
          formConfig.glucose,
          formConfig.specificGravity,
          formConfig.protein,
          formConfig.nitrite,
          formConfig.ketones,
          formConfig.bilirubin,
          formConfig.blood
        ]
      },
      additionalTests: {
        title: "Additional Tests",
        fields: [formConfig.pocus, formConfig.ecg, formConfig.pefr, formConfig.other]
      },
      pregnancyTest: {
        title: "Pregnancy Test",
        fields: [formConfig.pregnancyTest]
      }
    };
    const mockPatient = ref({
      activeVisit: "visit-123",
      patientId: "patient-456",
      gender: "Female"
      // Change to 'Male' to hide pregnancy test
    });
    const initializeSectionState = () => {
      const initialState = {};
      Object.keys(sectionDefinitions).forEach((key) => {
        const sectionDef = sectionDefinitions[key];
        initialState[key] = { open: false, selectedFields: {} };
        if (sectionDef.fields) {
          sectionDef.fields.forEach((field) => {
            initialState[key].selectedFields[field.name] = false;
          });
        }
      });
      return initialState;
    };
    const sections = ref(initializeSectionState());
    const mrdtChecked = ref(false);
    const hivChecked = ref(false);
    const vdrlChecked = ref(false);
    const isLoading = ref(false);
    provide("sections", sections);
    provide("sectionDefinitions", sectionDefinitions);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(unref(IonSpinner), { name: "crescent" })
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3, [
          createVNode(ParentCheckboxGroup, { "section-key": "arterialVenousBloodGasMain" }),
          createBaseVNode("div", _hoisted_4, [
            createVNode(unref(IonItem), { lines: "none" }, {
              default: withCtx(() => [
                createVNode(unref(IonCheckbox), {
                  slot: "start",
                  modelValue: mrdtChecked.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mrdtChecked.value = $event)
                }, null, 8, ["modelValue"]),
                createVNode(unref(IonLabel), { style: { "margin-left": "5px" } }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode("MRDT", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(unref(IonItem), { lines: "none" }, {
              default: withCtx(() => [
                createVNode(unref(IonCheckbox), {
                  slot: "start",
                  modelValue: hivChecked.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => hivChecked.value = $event)
                }, null, 8, ["modelValue"]),
                createVNode(unref(IonLabel), { style: { "margin-left": "5px" } }, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("HIV", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(unref(IonItem), { lines: "none" }, {
              default: withCtx(() => [
                createVNode(unref(IonCheckbox), {
                  slot: "start",
                  modelValue: vdrlChecked.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vdrlChecked.value = $event)
                }, null, 8, ["modelValue"]),
                createVNode(unref(IonLabel), { style: { "margin-left": "5px" } }, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode("VDRL", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          mockPatient.value.gender === "Female" ? (openBlock(), createBlock(CheckboxGroup, {
            key: 0,
            "section-key": "pregnancyTest"
          })) : createCommentVNode("", true),
          createVNode(CheckboxGroup, { "section-key": "dipstick" }),
          createVNode(CheckboxGroup, { "section-key": "additionalTests" })
        ]),
        createBaseVNode("div", _hoisted_7, [
          createVNode(DynamicButton, { name: "Submit" })
        ])
      ]);
    };
  }
});

const BedsidePlan = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c6d265c2"]]);

const _hoisted_1 = { class: "ion-float-right ion-padding" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabOrderPlan",
  setup(__props) {
    const labForm = [
      {
        componentType: "multiSelectInputField",
        header: "Tests",
        name: "tests",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "6" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "HIV"
          },
          {
            id: 2,
            name: "VDRL"
          },
          {
            id: 3,
            name: "Urine Routine"
          },
          {
            id: 4,
            name: "Urine Microscopy"
          },
          {
            id: 5,
            name: "Urine Culture"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Sample Type",
        name: "sample_type",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "6" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Blood"
          },
          {
            id: 2,
            name: "Urine"
          },
          {
            id: 3,
            name: "Serum"
          },
          {
            id: 4,
            name: "Sputum"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Emergency",
        name: "is_emergency",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "6" },
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Urgent Sample",
        name: "is_urgent_sample",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "standard",
        grid: { s: "6" },
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        componentType: "textAreaField",
        header: "Description",
        name: "description",
        icon: icons.editPen
      }
    ];
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createBlock(_component_ion_card, null, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [
              createVNode(StandardForm, { formData: labForm }),
              createBaseVNode("div", _hoisted_1, [
                createVNode(DynamicButton, { name: "Submit" })
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

export { BedsidePlan as B, _sfc_main as _ };
