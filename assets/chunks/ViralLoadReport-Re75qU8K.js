import { cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CPakPmy3.js';
import { R as REGIMENS } from './regimens-C7xPp0bP.js';
import { V as ViralLoadReportService } from './viral_load_report_service-DFoX956S.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed } from './vendor-CIi-jrCy.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ViralLoadReport",
  setup(__props) {
    const rows = ref([]);
    const minVL = ref();
    const maxVL = ref();
    const period = ref("-");
    const columns = [
      { path: "ageGroup", label: "Age Group" },
      ...REGIMENS.map((regimen) => ({ path: regimen, label: regimen })),
      { path: "N/A", label: "Uknown" }
    ];
    const customFilters = computed(() => [
      { id: "minVL", placeholder: "Min Viral Load", type: "number", value: minVL.value, required: false },
      { id: "maxVL", placeholder: "Max Viral Load", type: "number", value: maxVL.value, required: false }
    ]);
    async function fetchData(filters) {
      await loader.show();
      try {
        minVL.value = filters.minVL;
        maxVL.value = filters.maxVL;
        const report = new ViralLoadReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getViralLoad({ from: minVL.value, to: maxVL.value });
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "MoH Viral Load Report",
        "report-type": "MoH",
        columns,
        rows: rows.value,
        period: period.value,
        "show-indices": "",
        "use-date-range-filter": "",
        "custom-filters": customFilters.value,
        onGenerate: fetchData
      }, null, 8, ["rows", "period", "custom-filters"]);
    };
  }
});

export { _sfc_main as default };
