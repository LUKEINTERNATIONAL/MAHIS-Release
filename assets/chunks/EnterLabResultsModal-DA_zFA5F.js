import { q as defineComponent, r as ref, aF as useRouter, a2 as onMounted, v as resolveComponent, x as createElementBlock, y as openBlock, J as Fragment, z as createVNode, E as unref, I as IonHeader, A as withCtx, ay as IonToolbar, az as IonTitle, B as createBaseVNode, C as toDisplayString, b8 as IonButtons, N as IonButton, F as closeCircleOutline, H as IonContent, b9 as IonFooter, bE as saveOutline, K as modalController } from './vendor-Cy_N32Zh.js';
import { s as storeToRefs } from './pinia-Bqc2Rgok.js';
import { aY as AppEncounterService, O as OrderService, u as useDemographicsStore, n as icons, C as StandardForm, S as Service, g as getPouchDBRecords, aq as ConceptService, bq as LabOrderService, G as toastSuccess, _ as _export_sfc } from '../index-B2p2mVqz.js';

class PatientLabResultService extends AppEncounterService {
  patientID;
  testTypeID;
  resultDate;
  testID;
  constructor(patientId) {
    super(patientId, 32);
    this.patientID = patientId;
    this.testTypeID = -1;
    this.resultDate = "";
    this.testID = -1;
  }
  createLabResult(measures) {
    return AppEncounterService.postJson(`lab/tests/${this.testID}/results`, {
      encounter_id: this.encounterID,
      date: this.resultDate,
      measures
    });
  }
  getTestID() {
    return this.testID;
  }
  getTestTypeID() {
    return this.testTypeID;
  }
  setTestTypeID(test) {
    this.testTypeID = test;
  }
  setResultDate(date) {
    this.resultDate = date;
  }
  setTestID(test) {
    this.testID = test;
  }
  getTestsWithoutResults() {
    return OrderService.getOrders(this.patientID, {
      status: "drawn"
    });
  }
  getTestIndicators() {
    return OrderService.getJson(`lab/test_result_indicators`, {
      test_type_id: this.testTypeID
    });
  }
  static getTestIndicatorsWithID(testTypeID) {
    return OrderService.getJson(`lab/test_result_indicators`, {
      test_type_id: testTypeID
    });
  }
}

const _hoisted_1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2 = { style: { "margin-left": "6px" } };
const _hoisted_3 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_4 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_5 = { style: { "font-weight": "400", "font-size": "20px" } };
const _hoisted_6 = { style: { "display": "flex", "align-items": "center" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EnterLabResultsModal",
  props: {
    keyboardClose: { type: Boolean, default: false },
    keepContentsMounted: { type: Boolean, default: false },
    content: { default: () => ({}) },
    popoverOpen: { type: Boolean, default: false },
    event: { default: "" },
    title: { default: "" },
    test_data: {}
  },
  emits: ["closePopoover", "closeModal", "saved"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    let resultsForm = ref([]);
    useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const formRef = ref(null);
    const test = ref(props.test_data?.tests[0] || {});
    const testName = ref(test.value?.name || "");
    const dismiss = () => {
      modalController.dismiss();
    };
    const buildResultsForm = async (test2) => {
      let testIndicators;
      if (Service.getPouchDbStatus() || Service.getLanConnectionStatus())
        testIndicators = await getPouchDBRecords("test_result_indicators", {
          selector: {
            concept_id: test2.concept_id
          }
        });
      else testIndicators = await PatientLabResultService.getTestIndicatorsWithID(test2.concept_id);
      testIndicators.forEach((item) => {
        let data = {
          componentType: "inputField",
          name: item.name,
          header: item.name,
          grid: { s: "3" }
        };
        if (item.name == "RBS" || item.name == "FBS") {
          data = {
            ...data,
            unit: "mg/dl"
          };
        }
        if (item.name == "MRDT" || item.name == "Tuberculosis program" || item.name == "Vdrl" || item.name == "Hepatitis B" || item.name == "Lam" || item.name == "CrAg" || item.name == "CD4 count" || //dip Stick
        item.name == "Leukocytes" || item.name == "Protein" || item.name == "Nitrite" || item.name == "Urine Ketones" || //hiv
        item.name == "HIV test") {
          let multiData = [];
          if (item.name == "MRDT" || item.name == "Vdrl" || item.name == "Hepatitis B" || item.name == "CrAg" || item.name == "Lam") {
            multiData = [
              { id: "1", name: "Positive" },
              { id: "2", name: "Negative" },
              { id: "3", name: "Invalid" }
            ];
          }
          if (item.name == "Tuberculosis program") {
            multiData = [
              { id: "1", name: "Scanty" },
              { id: "2", name: "Negative" },
              { id: "3", name: "1+" },
              { id: "4", name: "2+" },
              { id: "5", name: "3+" }
            ];
          }
          if (item.name == "CD4 count") {
            multiData = [
              { id: "1", name: "below reference line" },
              { id: "2", name: "above reference line" }
            ];
          }
          if (item.name == "Leukocytes" || item.name == "Protein" || item.name == "Nitrite" || item.name == "Ketones" || item.name == "Urine Ketones") {
            multiData = [
              { id: "2", name: "Negative" },
              { id: "1", name: "Trace" },
              { id: "3", name: "1+" },
              { id: "4", name: "2+" },
              { id: "5", name: "3+" },
              { id: "6", name: "4+" }
            ];
          }
          if (item.name == "HIV test") {
            multiData = [
              { id: "2", name: "Positive" },
              { id: "1", name: "Negative" },
              { id: "3", name: "Invalid" }
            ];
          }
          data = {
            componentType: "multiSelectInputField",
            header: item.name,
            name: item.name,
            trackBy: "id",
            icon: icons.search,
            options: multiData
          };
        }
        resultsForm.value.push(data);
      });
    };
    const saveResults = async () => {
      const result = formRef.value?.getFormValues();
      const dataArray = await Promise.all(
        Object.entries(result).map(async ([name, value]) => ({
          name,
          concept_id: await ConceptService.getConceptID(name, true),
          value: value?.name || value
        }))
      );
      const measures = await LabOrderService.buildResults(dataArray);
      await LabOrderService.saveResults(patient.value, measures, test.value?.id, props.test_data?.offline_id);
      toastSuccess("Lab results saved successfully");
      dismiss();
    };
    onMounted(async () => {
      await buildResultsForm(test.value);
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createVNode(_component_ion_icon, {
                        icon: unref(icons).saveWhite,
                        class: "sub-menu-icon",
                        style: { "font-size": "1.6rem" }
                      }, null, 8, ["icon"]),
                      createBaseVNode("b", _hoisted_2, "Enter lab results for " + toDisplayString(testName.value), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
                          fill: "solid"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_3, [
                              createBaseVNode("div", _hoisted_4, [
                                createVNode(_component_ion_icon, {
                                  icon: unref(closeCircleOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[1] || (_cache[1] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Close", -1))
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonContent), { class: "ion-padding" }, {
          default: withCtx(() => [
            createVNode(StandardForm, {
              formData: unref(resultsForm),
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"])
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: saveResults,
                          color: "primary",
                          fill: "solid"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_5, [
                              createBaseVNode("div", _hoisted_6, [
                                createVNode(_component_ion_icon, {
                                  icon: unref(saveOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[2] || (_cache[2] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Save", -1))
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const EnterLabResultsModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a2f68e9"]]);

export { EnterLabResultsModal as E };
