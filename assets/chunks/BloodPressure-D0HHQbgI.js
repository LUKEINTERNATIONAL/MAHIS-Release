import { s as defineComponent, w as watch, a2 as onMounted, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, aA as IonCol, C as createBaseVNode, af as IonRow, O as createBlock, bL as m, f as ref } from './vendor-6OQ3r7Vr.js';
import { u as useDemographicsStore, a_ as List, K as ObservationService, aq as ConceptService, H as HisDate, _ as _export_sfc } from '../index-zZBkpFP3.js';
import { s as storeToRefs } from './pinia-BATJJgGh.js';

const _hoisted_1 = { class: "modal_wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BloodPressure",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const obsDatetime = ref([]);
    const displayGraph = ref(true);
    const systolic = ref([]);
    const diastolic = ref([]);
    const iconBg = ref({});
    const list = ref([]);
    const options = ref({
      chart: {
        id: "vuechart-example",
        type: "line"
      },
      stroke: {
        curve: "straight",
        width: 3
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: void 0,
        textAnchor: "middle",
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",
          colors: void 0
        },
        background: {
          enabled: true,
          foreColor: "#fff",
          padding: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#fff",
          opacity: 0.9,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: "#000",
            opacity: 0.45
          }
        },
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: "#000",
          opacity: 0.45
        }
      },
      colors: ["#FF1654", "#247BA0"],
      yaxis: {
        min: 0,
        forceNiceScale: true
      }
    });
    const series = ref([
      {
        name: "",
        data: []
      },
      {
        name: "",
        data: []
      }
    ]);
    watch(
      patient,
      async () => {
        await updateData();
      },
      { deep: true }
    );
    const updateData = async () => {
      const data = await ObservationService.getObsByEncounterId(6);
      const allObs = data.flatMap((e) => e.obs || []);
      const systolicId = await ConceptService.getConceptID("Systolic blood pressure");
      const diastolicId = await ConceptService.getConceptID("Diastolic blood pressure");
      systolic.value = allObs.filter((obs) => obs.concept_id === systolicId).map((obs) => ({
        value_numeric: obs.value_numeric,
        obs_datetime: obs.obs_datetime
      })).sort((a, b) => new Date(a.obs_datetime).getTime() - new Date(b.obs_datetime).getTime());
      diastolic.value = allObs.filter((obs) => obs.concept_id === diastolicId).map((obs) => ({
        value_numeric: obs.value_numeric,
        obs_datetime: obs.obs_datetime
      })).sort((a, b) => new Date(a.obs_datetime).getTime() - new Date(b.obs_datetime).getTime());
      setData();
    };
    const setData = () => {
      series.value[0].data = diastolic.value?.map((item) => item.value_numeric) || [];
      series.value[0].name = "Diastolic";
      series.value[1].data = systolic.value?.map((item) => item.value_numeric) || [];
      series.value[1].name = "Systolic";
      obsDatetime.value = diastolic.value?.map((item) => HisDate.toStandardHisFormat(item.obs_datetime)) || [];
      options.value = {
        ...options.value,
        xaxis: {
          categories: obsDatetime.value
        }
      };
    };
    onMounted(async () => {
      await updateData();
      iconBg.value.graph = "iconBg";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { size: "4.5" }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createBaseVNode("div", null, "Blood Pressure Graph", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", null, [
          displayGraph.value ? (openBlock(), createBlock(unref(m), {
            key: 0,
            width: "100%",
            height: "390px",
            type: "area",
            options: options.value,
            series: series.value
          }, null, 8, ["options", "series"])) : (openBlock(), createBlock(List, {
            key: 1,
            listData: list.value
          }, null, 8, ["listData"]))
        ])
      ]);
    };
  }
});

const BloodPressure = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-770006f7"]]);

export { BloodPressure as default };
