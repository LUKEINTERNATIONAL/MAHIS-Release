import { cp as toDisplayGenderFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Dy9Id4fM.js';
import { R as RegimenReportService } from './regimen_report_service-Cw8bA3Bj.js';
import { a as REGIMEN_WEIGHT_DISTRIBUTION } from './regimens-C7xPp0bP.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-BIA1Qh8a.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegimenDistribution",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "weight", label: "Weight Band" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      ...REGIMEN_WEIGHT_DISTRIBUTION.map((r) => ({ path: r, label: r })),
      { path: "N/A", label: "Unknown" },
      { path: "total", label: "Total" }
    ];
    async function fetchData(filters, rebuildCache = false) {
      try {
        await loader.show();
        const report = new RegimenReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getRegimensByWeight();
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "MoH Regimen Distribution By Weight Report",
        "report-type": "MoH",
        useDateRangeFilter: "",
        showIndices: "",
        columns,
        rows: rows.value,
        period: period.value,
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
