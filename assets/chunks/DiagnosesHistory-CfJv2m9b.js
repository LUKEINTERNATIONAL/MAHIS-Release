import { s as defineComponent, cu as useRoute, w as watch, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, C as createBaseVNode, J as Fragment, R as renderList, D as toDisplayString, F as unref, bp as V, f as ref, c_ as DataTable } from './vendor-DlXvc2CI.js';
import { s as storeToRefs } from './pinia-DxIh5T-z.js';
import { u as useDemographicsStore, K as ObservationService, aq as ConceptService, H as HisDate, _ as _export_sfc } from '../index-CRNH5uG8.js';

const _hoisted_1 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DiagnosesHistory",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const route = useRoute();
    const dataTable = ref(null);
    const tableData = ref([]);
    const header = ref(["Diagnosis", "Date"]);
    const options = ref({
      responsive: true,
      select: false,
      layout: {
        topStart: "",
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      ordering: false
    });
    const updateData = async () => {
      try {
        tableData.value = [];
        const data = await ObservationService.getObsByEncounterId(41);
        const allObs = data.flatMap((e) => e.obs || []);
        const diagnosisObs = allObs.filter((obs) => obs.value_coded);
        const sortedObs = diagnosisObs.sort((a, b) => {
          const dateA = new Date(a.obs_datetime).getTime();
          const dateB = new Date(b.obs_datetime).getTime();
          return dateB - dateA;
        });
        for (const obs of sortedObs) {
          const diagnosisName = await ConceptService.getConceptName(obs.value_coded);
          const formattedDate = HisDate.toStandardHisFormat(obs.obs_datetime);
          tableData.value.push([diagnosisName, formattedDate]);
        }
      } catch (error) {
        console.error("Error updating diagnosis data:", error);
        tableData.value = [];
      }
      V.use(DataTable);
    };
    watch(
      () => route,
      async () => {
        await updateData();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        await updateData();
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(V), {
          ref_key: "dataTable",
          ref: dataTable,
          options: options.value,
          data: tableData.value,
          class: "display nowrap modern-table",
          width: "100%"
        }, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(header.value, (head) => {
                  return openBlock(), createElementBlock("th", { key: head }, toDisplayString(head), 1);
                }), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["options", "data"])
      ]);
    };
  }
});

const DiagnosesHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78c82edc"]]);

export { DiagnosesHistory as default };
