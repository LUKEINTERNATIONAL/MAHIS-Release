import { q as defineComponent, h as inject, d as computed, x as createElementBlock, y as openBlock, z as createVNode, S as withDirectives, E as unref, an as IonItem, A as withCtx, ae as IonCheckbox, a7 as IonLabel, B as createBaseVNode, C as toDisplayString, L as IonIcon, eu as chevronUpOutline, a9 as chevronDownOutline, J as Fragment, R as renderList, O as createBlock, a5 as createTextVNode, T as vShow, r as ref, G as createCommentVNode, M as IonSpinner, eT as provide, v as resolveComponent, a2 as onMounted, aF as useRouter, cr as useRoute, w as watch, H as IonContent, bV as chevronBackOutline, bq as IonPage, ab as checkmarkOutline } from './vendor-BK8x96Ok.js';
import { s as storeToRefs } from './pinia-C47my0-I.js';
import { _ as _export_sfc, F as DynamicButton, n as icons, y as StandardValidations, C as StandardForm, ba as useVitalsStore, u as useDemographicsStore, bb as useInvestigationStore, bc as useDiagnosisStore, b2 as useTreatmentPlanStore, bd as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, a9 as useConfigStore, f as useStatusStore, T as Toolbar, a2 as getFieldValue, H as HisDate, b5 as getOfflineSavedUnsavedData, be as MedicationSelectionHasValues, J as savePatientRecord, bf as resetNCDPatientData, t as toastWarning, aq as ConceptService, G as toastSuccess, bg as useAllegyStore, ab as useUserStore, S as Service } from '../index-xpeKIrss.js';
import { D as DemographicBar } from './DemographicBar-DZF9AwiS.js';
import { u as useRadiologyStore } from './RadiologyStore-B652eKNt.js';
import { B as BasicForm } from './BasicForm-BUeNUatV.js';
import { u as useFormWizard, _ as _sfc_main$6 } from './useFormWizard-B3Ts1D7m.js';
import { u as useComplicationsStore } from './ComplicationsStore-DtF33jqL.js';
import { s as stageAllergies, c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-D6SXX4LB.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-4ZY72Kuz.js';
import { u as usePatientProfile } from './usePatientProfile-CHb2i4nW.js';

const _hoisted_1$5 = { class: "checkbox-group" };
const _hoisted_2$4 = { class: "label-content" };
const _hoisted_3$3 = { class: "nested-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
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
                createBaseVNode("div", _hoisted_2$4, [
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
        withDirectives(createBaseVNode("div", _hoisted_3$3, [
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

const CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-674cf61d"]]);

const _hoisted_1$4 = { class: "parent-checkbox-group" };
const _hoisted_2$3 = { class: "label-content" };
const _hoisted_3$2 = { class: "nested-content" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
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
                createBaseVNode("div", _hoisted_2$3, [
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
        withDirectives(createBaseVNode("div", _hoisted_3$2, [
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

const ParentCheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2fe0d76b"]]);

const _hoisted_1$3 = { class: "ion-padding" };
const _hoisted_2$2 = {
  key: 0,
  class: "loading-overlay"
};
const _hoisted_3$1 = { class: "form-content" };
const _hoisted_4$1 = { class: "checkbox-item" };
const _hoisted_5$1 = { class: "checkbox-item" };
const _hoisted_6$1 = { class: "checkbox-item" };
const _hoisted_7$1 = { class: "ion-float-right ion-padding" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createVNode(unref(IonSpinner), { name: "crescent" })
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(ParentCheckboxGroup, { "section-key": "arterialVenousBloodGasMain" }),
          createBaseVNode("div", _hoisted_4$1, [
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
          createBaseVNode("div", _hoisted_5$1, [
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
          createBaseVNode("div", _hoisted_6$1, [
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
        createBaseVNode("div", _hoisted_7$1, [
          createVNode(DynamicButton, { name: "Submit" })
        ])
      ]);
    };
  }
});

const BedsidePlan = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c6d265c2"]]);

const _hoisted_1$2 = { class: "ion-float-right ion-padding" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
              createBaseVNode("div", _hoisted_1$2, [
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

const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2$1 = { class: "scrollable-container" };
const _hoisted_3 = {
  key: 0,
  class: "form-section"
};
const _hoisted_4 = {
  key: 1,
  class: "form-section"
};
const _hoisted_5 = {
  key: 2,
  class: "form-section"
};
const _hoisted_6 = {
  key: 3,
  class: "form-section"
};
const _hoisted_7 = {
  key: 4,
  class: "form-section"
};
const _hoisted_8 = {
  key: 5,
  class: "form-section"
};
const _hoisted_9 = {
  key: 6,
  class: "form-section"
};
const _hoisted_10 = {
  key: 7,
  class: "form-section"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Radiology",
  setup(__props) {
    const radiologyStore = useRadiologyStore();
    const { head, neck, chest, abdomen, upper_extremity, spine, pelvis, lower_extremity } = storeToRefs(radiologyStore);
    const iconsContent = ref(icons);
    const activeParts = ref([]);
    const toggleBodyPart = (partId, labelId, bodyPartId) => {
      document.querySelectorAll(`#${partId} path`).forEach((path) => {
        path.classList.toggle("white-fill");
      });
      document.querySelectorAll(`#${labelId} line`).forEach((element) => {
        element.classList.toggle("dark-green-stroke");
      });
      document.querySelectorAll(`#${labelId} rect`).forEach((element) => {
        element.classList.toggle("bright-green-fill");
        element.classList.toggle("dark-green-stroke");
      });
      document.querySelectorAll(`#${labelId} path`).forEach((element) => {
        element.classList.toggle("dark-green-fill");
      });
      document.querySelectorAll(`#${labelId} circle`).forEach((element) => {
        element.classList.toggle("bright-green-fill");
      });
      const existingIndex = activeParts.value.findIndex((part) => part.id === bodyPartId);
      if (existingIndex >= 0) {
        activeParts.value.splice(existingIndex, 1);
      } else {
        activeParts.value.unshift({ id: bodyPartId, active: true });
      }
    };
    const setSpine = () => {
      const spine2 = document.getElementById("SPINE");
      if (spine2.style.display === "none" || spine2.style.display == "") {
        spine2.style.display = "block";
      } else {
        spine2.style.display = "none";
      }
      toggleBodyPart("SPINE", "SPINE_LABEL-2", "spine");
    };
    onMounted(() => {
      const headGroup = document.getElementById("HEAD");
      if (headGroup) {
        headGroup.addEventListener("click", () => {
          toggleBodyPart("HEAD", "LABEL-6", "head");
        });
      }
      const neckGroup = document.getElementById("NECK");
      if (neckGroup) {
        neckGroup.addEventListener("click", () => {
          toggleBodyPart("NECK", "LABEL-5", "neck");
        });
      }
      const chestGroup = document.getElementById("CHEST");
      if (chestGroup) {
        chestGroup.addEventListener("click", () => {
          toggleBodyPart("CHEST", "LABEL-4", "chest");
        });
      }
      const abdomenGroup = document.getElementById("ABDOMEN_LABEL");
      if (abdomenGroup) {
        abdomenGroup.addEventListener("click", () => {
          const abdomen2 = document.getElementById("ABDOMEN-2");
          if (abdomen2.style.display === "none" || abdomen2.style.display == "") {
            abdomen2.style.display = "block";
          } else {
            abdomen2.style.display = "none";
          }
          toggleBodyPart("ABDOMEN", "ABDOMEN_LABEL-2", "abdomen");
        });
      }
      const upperExtremityGroup = document.getElementById("UPPER_EXTRMITY");
      if (upperExtremityGroup) {
        upperExtremityGroup.addEventListener("click", () => {
          toggleBodyPart("UPPER_EXTRMITY", "LABEL-3", "upper_extremity");
        });
      }
      const spineGroup = document.getElementById("SPINE");
      const spineLabelGroup = document.getElementById("SPINE_LABEL");
      const lowerSpineGroup = document.getElementById("LOWER_SPINE_INACTIVE");
      if (spineGroup) {
        spineGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      if (spineLabelGroup) {
        spineLabelGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      if (lowerSpineGroup) {
        lowerSpineGroup.addEventListener("click", () => {
          setSpine();
        });
      }
      const pelvisGroup = document.getElementById("PELVIS");
      if (pelvisGroup) {
        pelvisGroup.addEventListener("click", () => {
          toggleBodyPart("PELVIS", "LABEL-2", "pelvis");
        });
      }
      const lowerExtremityGroup = document.getElementById("LOWER_EXTREMITY");
      if (lowerExtremityGroup) {
        lowerExtremityGroup.addEventListener("click", () => {
          toggleBodyPart("LOWER_EXTREMITY", "LABEL", "lower_extremity");
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_ion_col = resolveComponent("ion-col");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createBlock(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { size: "7" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                innerHTML: iconsContent.value.full_body_sk
              }, null, 8, _hoisted_1$1)
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, {
            size: "5",
            class: "form-column"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(activeParts.value, (bodyPart) => {
                  return openBlock(), createElementBlock(Fragment, null, [
                    bodyPart.id === "head" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                      _cache[0] || (_cache[0] = createBaseVNode("h6", null, "Body Part: Head", -1)),
                      createVNode(BasicForm, { contentData: unref(head) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "neck" ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      _cache[1] || (_cache[1] = createBaseVNode("h6", null, "Body Part: Neck", -1)),
                      createVNode(BasicForm, { contentData: unref(neck) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "chest" ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      _cache[2] || (_cache[2] = createBaseVNode("h6", null, "Body Part: Chest", -1)),
                      createVNode(BasicForm, { contentData: unref(chest) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "abdomen" ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      _cache[3] || (_cache[3] = createBaseVNode("h6", null, "Body Part: Abdomen", -1)),
                      createVNode(BasicForm, { contentData: unref(abdomen) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "upper_extremity" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      _cache[4] || (_cache[4] = createBaseVNode("h6", null, "Body Part: Upper Extremity", -1)),
                      createVNode(BasicForm, { contentData: unref(upper_extremity) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "spine" ? (openBlock(), createElementBlock("div", _hoisted_8, [
                      _cache[5] || (_cache[5] = createBaseVNode("h6", null, "Body Part: Spine", -1)),
                      createVNode(BasicForm, { contentData: unref(spine) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "pelvis" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                      _cache[6] || (_cache[6] = createBaseVNode("h6", null, "Body Part: Pelvis", -1)),
                      createVNode(BasicForm, { contentData: unref(pelvis) }, null, 8, ["contentData"])
                    ])) : bodyPart.id === "lower_extremity" ? (openBlock(), createElementBlock("div", _hoisted_10, [
                      _cache[7] || (_cache[7] = createBaseVNode("h6", null, "Body Part: Lower Extremity", -1)),
                      createVNode(BasicForm, { contentData: unref(lower_extremity) }, null, 8, ["contentData"])
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 256))
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

const Radiology = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-33a0b153"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Investigations",
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    usePatientProfile();
    const router = useRouter();
    const route = useRoute();
    ref([]);
    ref([]);
    ref(false);
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglass-outline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const vitalsStore = useVitalsStore();
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useDiagnosisStore();
    useTreatmentPlanStore();
    const ncdMedicationsStore = useNCDMedicationsStore();
    const generalStore = useGeneralStore();
    useOutcomeStore();
    const enrollmentStore = useEnrollementStore();
    const complicationsStore = useComplicationsStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { diagnosis } = storeToRefs(diagnosisStore);
    const { substance } = storeToRefs(enrollmentStore);
    const { selectedNCDMedicationList } = storeToRefs(ncdMedicationsStore);
    const { FootScreening, visualScreening, cvScreening } = storeToRefs(complicationsStore);
    const { sessionDate } = storeToRefs(configStore);
    const { apiStatus } = storeToRefs(useStatusStore());
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
        if (newOptions.disabled !== oldOptions?.disabled) {
          console.log(`Done button ${newOptions.disabled ? "disabled" : "enabled"}`);
        }
        if (newOptions.text !== oldOptions?.text) {
          console.log(`Done button text changed from "${oldOptions?.text}" to "${newOptions.text}"`);
        }
      },
      { deep: true }
    );
    watch(isSaving, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        console.log(`Saving state changed: ${oldValue} -> ${newValue}`);
        if (newValue) {
          console.log("Starting save process...");
        } else {
          console.log("Save process completed");
        }
      }
    });
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const openBackController = () => {
      router.push("/patientProfile");
    };
    const getActiveTabs = () => {
      return [
        {
          title: "Bedside plan",
          icon: ""
        },
        {
          title: "Lab Order Plan",
          icon: ""
        },
        {
          title: "Radiology",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const vitalsRef = ref(null);
    const riskAssessmentRef = ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        console.log("Tabs not yet initialized");
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Bedside plan":
          return "BedsidePlan";
        case "Lab Order Plan":
          return "LabOrderPlan";
        case "Radiology":
          return "Radiology";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Bedside plan":
                return "BedsidePlan";
              case "Lab Order Plan":
                return "LabOrderPlan";
              case "Radiology":
                return "Radiology";
            }
          }
          return null;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const cleanVitalForm = () => {
      const vitals2 = useVitalsStore();
      vitals2.setVitals(vitals2.getInitialVitals(patient.value.ID));
    };
    const markWizard = async () => {
      const sessionD = getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      const vitalsData = getOfflineSavedUnsavedData("vitals");
      for (let i = 0; i < tabs.value.length; i++) {
        const tab = tabs.value[i];
        if (tab.title === "Vital Signs") {
          tabs.value[i].icon = isDateInArray(sessionD, vitalsData) ? checkmarkOutline : "";
        } else if (tab.title === "Risk Assessment") {
          const substanceAbuseData = getOfflineSavedUnsavedData("substanceAbuse");
          tabs.value[i].icon = isDateInArray(sessionD, substanceAbuseData) ? checkmarkOutline : "";
        } else if (tab.title === "Investigations") {
          const labOrders = patient?.value?.labOrders?.saved;
          const filteredArray = labOrders?.filter((obj) => {
            return HisDate.toStandardHisFormat(sessionD) === HisDate.toStandardHisFormat(obj.order_date);
          });
          tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
        } else if (tab.title === "Diagnosis") {
          const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
          tabs.value[i].icon = isDateInArray(sessionD, diagnosisData) ? checkmarkOutline : "";
        } else if (tab.title === "Complications Screening") {
          const screeningData = getOfflineSavedUnsavedData("screening");
          tabs.value[i].icon = isDateInArray(sessionD, screeningData) ? checkmarkOutline : "";
        } else if (tab.title === "Treatment Plan") {
          if (selectedNCDMedicationList.value.length > 0) {
            tabs.value[i].icon = MedicationSelectionHasValues() ? checkmarkOutline : "";
          } else {
            tabs.value[i].icon = "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, diagnosisArray) => {
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return diagnosisArray.some((diagnosis2) => {
        const obsDate = new Date(diagnosis2.obs_datetime);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveComplications = async () => {
      const data = [];
      const childDataVisualScreening = await formatInputFiledData(visualScreening.value);
      const childDataFootScreening = await formatGroupRadioButtonData(FootScreening.value);
      const childDataCVRisk = await formatInputFiledData(cvScreening.value);
      if (childDataVisualScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Visual acuity", true),
          value_text: "visual acuity test",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataVisualScreening
        });
      }
      if (childDataFootScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Foot check", true),
          value_text: "foot screening",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataFootScreening
        });
      }
      if (childDataCVRisk.length > 0) {
        data.push(...childDataCVRisk);
      }
      if (data.length > 0) {
        (patient.value.screening ??= {}).unsaved ??= [];
        patient.value.screening.unsaved.push(...data);
        toastSuccess("Complications saved successfully");
      } else {
        toastWarning("No complications data to save");
      }
    };
    const saveTreatmentPlan = async () => {
      const allergyStore = useAllegyStore();
      if (!lodashExports.isEmpty(allergyStore.selectedMedicalAllergiesList)) {
        const userStore = useUserStore();
        const allergies = allergyStore.selectedMedicalAllergiesList.map((allergy) => ({
          concept_id: allergy.concept_id,
          obs_datetime: Service.getSessionDate(),
          value_coded: allergy.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: allergy.name
        }));
        const patientData2 = await stageAllergies(allergies);
        patient.value = Object.assign(patient.value, patientData2);
        console.log("Allergies staged successfully:", patient.value);
        allergyStore.clearSelectedMedicalAllergiesList();
      }
      const m_patientData = await createNCDDrugOrder();
      patient.value = Object.assign(patient.value, m_patientData);
      const patientData = await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      patient.value = Object.assign(patient.value, patientData);
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "Risk Assessment") {
        riskAssessmentRef.value?.onSubmit();
      }
      if (value == "Complications Screening") {
        await saveComplications();
      }
      if (value == "Treatment Plan") {
        await saveTreatmentPlan();
      }
      await savePatientRecord(patient.value);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await resetNCDPatientData();
        await savePatientRecord(patient.value);
        router.push("/triageList");
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    onMounted(async () => {
      if (generalStore.NCDActivities.length === 0) {
        router.push("patientProfile");
        return;
      }
      const data = useComplicationsStore();
      data.resetScreening();
      tabs.value = getActiveTabs();
      await markWizard();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      vitals,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        const data = useComplicationsStore();
        data.resetScreening();
        await markWizard();
      },
      { deep: true }
    );
    watch(
      sessionDate,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      investigations,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      diagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      substance,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedNCDMedicationList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        refreshWizard();
        cleanVitalForm();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (old, newData) => {
        if (old.ID != newData.ID) {
          refreshWizard();
          cleanVitalForm();
        }
      },
      { deep: true }
    );
    __expose({
      saveData,
      markWizard,
      refreshWizard,
      validateDoneButtonState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$6, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Investigation Plan",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(BedsidePlan, { ref: "bedsidePlanRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "BedsidePlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$2, { ref: "labOrderPlanRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LabOrderPlan"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Radiology, { ref: "radiologyRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Radiology"]
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

export { _sfc_main as default };
