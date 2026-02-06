import { cq as toDisplayGenderFmt, cu as toIndicatorColumns, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-B-NulKpO.js';
import { V as ViralLoadReportService, T as TX_PVLS_INDICATORS } from './viral_load_report_service-Ds-jSDN1.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-6OQ3r7Vr.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TxPVLS",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const report = new ViralLoadReportService();
    const columns = [
      { path: "ageGroup", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      ...toIndicatorColumns(TX_PVLS_INDICATORS)
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getTxPVLS();
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
        title: "PEPFAR TX PVLS Report",
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
