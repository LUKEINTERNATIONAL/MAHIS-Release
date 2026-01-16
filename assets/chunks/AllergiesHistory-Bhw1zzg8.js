import { q as defineComponent, ct as useRoute, r as ref, w as watch, x as createElementBlock, y as openBlock, z as createVNode, B as withCtx, A as createBaseVNode, H as Fragment, Q as renderList, C as toDisplayString, E as unref, bn as V, cZ as DataTable } from './vendor-wM1cIaYi.js';
import { s as storeToRefs } from './pinia-Czqxf__w.js';
import { u as useDemographicsStore, K as ObservationService, H as HisDate, _ as _export_sfc } from '../index-CHhIh66R.js';

const _hoisted_1 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AllergiesHistory",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const route = useRoute();
    const dataTable = ref(null);
    const tableData = ref([]);
    const header = ref(["Allergy", "Date", "Status"]);
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
    const removeDuplicateAllergies = (obs) => {
      const seen = /* @__PURE__ */ new Map();
      obs.forEach((item) => {
        const key = `${item.value_coded}_${item.value_text}`;
        if (!seen.has(key)) {
          seen.set(key, item);
        } else {
          const existing = seen.get(key);
          if (item.obs_id && existing.obs_id) {
            if (item.obs_id > existing.obs_id) {
              seen.set(key, item);
            }
          } else if (item.obs_datetime && existing.obs_datetime) {
            if (new Date(item.obs_datetime) > new Date(existing.obs_datetime)) {
              seen.set(key, item);
            }
          }
        }
      });
      return Array.from(seen.values());
    };
    const updateData = async () => {
      try {
        tableData.value = [];
        const data = await ObservationService.getObsByEncounterId(30);
        if (data && Array.isArray(data)) {
          let allObservations = [];
          data.forEach((encounter) => {
            if (encounter.obs && Array.isArray(encounter.obs)) {
              const obsWithStatus = encounter.obs.map((obs) => ({
                ...obs,
                encounterStatus: encounter.status
              }));
              allObservations = allObservations.concat(obsWithStatus);
            }
          });
          const uniqueAllergies = removeDuplicateAllergies(allObservations);
          uniqueAllergies.forEach((obs) => {
            const allergyName = obs.value_text || "Unknown Allergy";
            const date = obs.obs_datetime ? HisDate.toStandardHisDisplayFormat(obs.obs_datetime) : "N/A";
            const isSaved = obs.encounterStatus === "saved" || obs.obs_id !== void 0 && obs.obs_id !== null;
            const statusHtml = isSaved ? '<span style="color: #046c04; font-weight: bold;">Saved</span>' : '<span style="color: #ff9800; font-weight: bold;">Unsaved</span>';
            tableData.value.push([allergyName, date, statusHtml]);
          });
        }
      } catch (error) {
        console.error("Error updating allergy data:", error);
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

const AllergiesHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d41a33e8"]]);

export { AllergiesHistory as default };
