import { cq as toDisplayGenderFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CHhIh66R.js';
import { T as TptReportService } from './tpt_report_service-Wm6y8BiP.js';
import { q as defineComponent, r as ref, N as createBlock, y as openBlock } from './vendor-wM1cIaYi.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TptCohort",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "age_group", label: "Age Group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { label: "Initiated ART", path: "initiated_art", drillable: true },
      { label: "Initiated TPT", path: "started_tpt", drillable: true },
      { label: "Completed TPT", path: "completed_tpt", drillable: true },
      { label: "Not Completed TPT", path: "not_completed_tpt", drillable: true },
      { label: "Died", path: "died", drillable: true },
      { label: "Defaulted", path: "defaulted", drillable: true },
      { label: "Stopped ART", path: "stopped", drillable: true },
      { label: "TO", path: "transfer_out", drillable: true },
      { label: "Confirmed TB", path: "confirmed_tb", drillable: true },
      { label: "Pregnant", path: "pregnant", drillable: true }
    ];
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new TptReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getCohort();
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.row.age_group} ${data.column.label} ${data.row.gender}s`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "MoH TPT Cohort Report",
        "report-type": "MoH",
        columns,
        rows: rows.value,
        period: period.value,
        "show-indices": "",
        "use-date-range-filter": "",
        "drill-title": drilldownTitleBuilder,
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
