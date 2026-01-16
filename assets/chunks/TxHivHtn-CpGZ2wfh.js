import { cq as toDisplayGenderFmt, cu as toIndicatorColumns, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Cd3-tqLQ.js';
import { T as TxReportService, d as TX_HIV_HTN_INDICATORS } from './tx_report_service-BUk41RdI.js';
import { q as defineComponent, r as ref, N as createBlock, y as openBlock } from './vendor-wM1cIaYi.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TxHivHtn",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "ageGroup", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      ...toIndicatorColumns(TX_HIV_HTN_INDICATORS)
    ];
    async function fetchData(filters, rebuild = false) {
      try {
        await loader.show();
        const report = new TxReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getTxHivHtnReport(rebuild);
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} | ${data.row.ageGroup} | ${toDisplayGenderFmt(data.row.gender)}s`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "PEPFAR TX HIV HTN Report",
        "report-type": "PEPFAR",
        columns,
        rows: rows.value,
        period: period.value,
        "drill-title": drilldownTitleBuilder,
        useDateRangeFilter: "",
        showIndices: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
