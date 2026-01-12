import { cq as toDisplayGenderFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Bam205gA.js';
import { P as ProgramReportService } from './program_report_service-Dd_lsnm7.js';
import { q as defineComponent, r as ref, O as createBlock, y as openBlock } from './vendor-BPW-J91F.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NidCumulative",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "age_group", label: "Age Group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "tx_curr", label: "Tx Curr", drillable: true },
      { path: "nid_clients", label: "Clients with NID", drillable: true },
      { path: "new_nid", label: "New NID registered", drillable: true }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new ProgramReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.generate("nid_cumulative_report") ?? [];
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} | ${data.row.age_group} | ${toDisplayGenderFmt(data.row.gender)}s`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "National ID Cumulative Clinic Report",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "drill-title": drilldownTitleBuilder,
        "use-date-range-filter": "",
        "show-indices": "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
