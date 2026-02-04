import { s as defineComponent, ct as useRoute, w as watch, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, C as createBaseVNode, J as Fragment, R as renderList, D as toDisplayString, F as unref, bp as V, f as ref, cZ as DataTable } from './vendor-BO7XRaEo.js';
import { s as storeToRefs } from './pinia-BoqbyD4X.js';
import { u as useDemographicsStore, H as HisDate, _ as _export_sfc } from '../index-C1ltxM1o.js';

const _hoisted_1 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MedicationsHistory",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const route = useRoute();
    const dataTable = ref(null);
    const tableData = ref([]);
    const header = ref(["Drug Name", "Quantity", "Dose", "Frequency", "Start Date", "Expire Date", "Instructions"]);
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
    const calculateDuration = (startDate, endDate) => {
      try {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
        return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
      } catch {
        return "N/A";
      }
    };
    const updateData = async () => {
      try {
        tableData.value = [];
        const medicationOrder = patient.value.MedicationOrder;
        if (medicationOrder) {
          if (medicationOrder.saved && Array.isArray(medicationOrder.saved)) {
            medicationOrder.saved.forEach((med) => {
              tableData.value.push([
                med.drug_name || "N/A",
                med.amountToDispense || med.quantity || "N/A",
                `${med.dose || "N/A"} ${med.units || ""}`,
                med.frequency || "N/A",
                med.start_date ? HisDate.toStandardHisDisplayFormat(med.start_date) : "N/A",
                med.expire_date ? HisDate.toStandardHisDisplayFormat(med.expire_date) : "N/A",
                `${med.drug_name}: ${med.dose} ${med.units} ${med.frequency} for ${calculateDuration(med.start_date, med.expire_date)}`
              ]);
            });
          }
          if (medicationOrder.unsaved && Array.isArray(medicationOrder.unsaved)) {
            medicationOrder.unsaved.forEach((med) => {
              tableData.value.push([
                med.drug_name || "N/A",
                med.amountToDispense || med.quantity || "N/A",
                `${med.dose || "N/A"} ${med.units || ""}`,
                med.frequency || "N/A",
                med.start_date ? HisDate.toStandardHisDisplayFormat(med.start_date) : "N/A",
                med.auto_expire_date ? HisDate.toStandardHisDisplayFormat(med.auto_expire_date) : "N/A",
                med.instructions || "N/A"
              ]);
            });
          }
        }
      } catch (error) {
        console.error("Error updating medication data:", error);
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

const MedicationsHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c75b064a"]]);

export { MedicationsHistory as default };
