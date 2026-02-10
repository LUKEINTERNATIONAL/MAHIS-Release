import { cq as toDisplayGenderFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-eygbwbqc.js';
import { D as DisaggregatedReportService } from './disagregated_report_service-CtTcgJuu.js';
import { R as REGIMENS } from './regimens-C7xPp0bP.js';
import { s as defineComponent, a2 as onMounted, ct as useRoute, y as openBlock, O as createBlock, f as ref } from './vendor-CHJxKtY0.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DisaggregatedReport",
  setup(__props) {
    const report = new DisaggregatedReportService();
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
    const fetchData = async (filters, regenerate) => {
      try {
        await loader.show();
        if (filters.dateRange) {
          report.setStartDate(filters.dateRange.startDate);
          report.setEndDate(filters.dateRange.endDate);
          period.value = report.getDateIntervalPeriod();
        }
        if (filters.occupation) {
          report.setOccupation(filters.occupation);
        }
        rows.value = await report.getDisaggReport(regenerate, "moh");
      } catch (error) {
        console.error(error);
        toastWarning("Error! Unable to generate report");
      }
      loader.hide();
    };
    function getDrillTitle(data) {
      return `${data.row.age_group} | ${data.column.label} | ${toDisplayGenderFmt(data.row.gender)}s`;
    }
    onMounted(() => {
      const { startDate, endDate } = useRoute().query;
      if (startDate && endDate) {
        fetchData({
          dateRange: {
            startDate,
            endDate
          }
        }, false);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "MoH Disaggregated Report",
        "report-type": "MoH",
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
