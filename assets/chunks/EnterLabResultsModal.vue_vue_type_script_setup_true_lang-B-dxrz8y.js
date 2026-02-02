import { s as defineComponent, aL as useRouter, f as ref, a2 as onMounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, N as IonButton, C as createBaseVNode, bI as saveOutline, K as modalController } from './vendor-DoVhRvhx.js';
import { s as storeToRefs } from './pinia-CTgeSI8R.js';
import { aY as AppEncounterService, O as OrderService, u as useDemographicsStore, q as StandardModal, z as StandardForm, S as Service, g as getPouchDBRecords, n as icons, aq as ConceptService, bq as LabOrderService, J as savePatientRecord, G as toastSuccess } from '../index-Bf-C6EIe.js';

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

const _hoisted_1 = { style: { "font-weight": "400", "font-size": "20px" } };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center" } };
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
    const getGridSize = (indicatorsCount) => {
      if (indicatorsCount == 2) return 6;
      else if (indicatorsCount > 4) return 4;
      return 12;
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
      let grid = getGridSize(testIndicators.length);
      testIndicators.forEach((item) => {
        let data = {
          componentType: "inputField",
          name: item.name,
          header: item.name,
          grid: { s: grid }
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
            options: multiData,
            grid: { s: grid }
          };
        }
        resultsForm.value.push(data);
      });
      console.log("🚀 ~ buildResultsForm ~ resultsForm.value:", resultsForm.value);
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
      const data = await LabOrderService.saveResults(patient.value, measures, test.value?.id, props.test_data?.offline_id);
      await savePatientRecord(data);
      toastSuccess("Lab results saved successfully");
      dismiss();
    };
    onMounted(async () => {
      await buildResultsForm(test.value);
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createBlock(StandardModal, {
        title: "Enter lab results for  " + testName.value
      }, {
        "top-buttons": withCtx(() => [
          createVNode(unref(IonButton), {
            onClick: saveResults,
            color: "primary",
            fill: "solid"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_ion_icon, {
                    icon: unref(saveOutline),
                    slot: "start",
                    class: "sub-menu-icon"
                  }, null, 8, ["icon"]),
                  _cache[0] || (_cache[0] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Save", -1))
                ])
              ])
            ]),
            _: 1
          })
        ]),
        content: withCtx(() => [
          createVNode(StandardForm, {
            formData: unref(resultsForm),
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

export { _sfc_main as _ };
