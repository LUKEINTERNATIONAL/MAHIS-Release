import { cq as toDisplayGenderFmt, cu as toIndicatorColumns, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Bc-TK-yC.js';
import { T as TxReportService, a as TX_MMD_INDICATORS } from './tx_report_service-CKN6Idcz.js';
import { q as defineComponent, r as ref, O as createBlock, y as openBlock } from './vendor-BPW-J91F.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TxCurrMMD",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "ageGroup", label: "Age group", thStyles: { minWidth: "150px !important" } },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt, thStyles: { minWidth: "110px !important" } },
      ...toIndicatorColumns(TX_MMD_INDICATORS, { thStyles: { minWidth: "350px !important" } })
    ];
    async function fetchData(filters, rebuild) {
      try {
        await loader.show();
        const report = new TxReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getTxCurrMMDReport(rebuild);
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function getDrilldownTitle(data) {
      return `${data.row.ageGroup} | ${data.column.label} | ${toDisplayGenderFmt(data.row.gender)}s`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "PEPFAR TX CURR MMD Report",
        subtitle: "Clients that are alive and on treatment in the reporting period and the difference in days between their clinical dispensation visit and \n      next appointment / drug-runout date is: 3 months (1 - 89 days), 3 - 5 months (90 - 179 days), 6+ months (180 or more days)",
        "report-type": "PEPFAR",
        columns,
        rows: rows.value,
        period: period.value,
        "drill-title": getDrilldownTitle,
        useDateRangeFilter: "",
        showIndices: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
