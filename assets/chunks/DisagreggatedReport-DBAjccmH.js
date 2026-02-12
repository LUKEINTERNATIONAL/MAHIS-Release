import { cp as toDisplayGenderFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-DcHp0H-N.js';
import { D as DisaggregatedReportService } from './disagregated_report_service-B-Yh34f8.js';
import { R as REGIMENS } from './regimens-C7xPp0bP.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-DrpjccQs.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DisagreggatedReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "age_group", label: "Age Group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "tx_curr", label: "TX curr (receiving ART)", drillable: true },
      ...REGIMENS.map((r) => ({ path: r, label: r, drillable: true })),
      { path: "unknown", label: "Unknown", drillable: true },
      { path: "total", label: "Total", drillable: true }
    ];
    const fetchData = async (filters) => {
      try {
        await loader.show();
        const report = new DisaggregatedReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getDisaggReport(true, "pepfar");
      } catch (error) {
        console.error(error);
        toastWarning("Error! Unable to generate report");
      }
      loader.hide();
    };
    function getDrillTitle(data) {
      return `${data.row.age_group} | ${data.column.label} | ${toDisplayGenderFmt(data.row.gender)}s`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "PEPFAR Disaggregated Report",
        "report-type": "PEPFAR",
        columns,
        rows: rows.value,
        period: period.value,
        "drill-title": getDrillTitle,
        useDateRangeFilter: "",
        showIndices: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
