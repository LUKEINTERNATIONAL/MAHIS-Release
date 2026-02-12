import { cp as toDisplayGenderFmt, ct as toIndicatorColumns, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-yRu5EhmF.js';
import { T as TxReportService, a as TX_MMD_INDICATORS } from './tx_report_service-iJTmfRpe.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-CL0dVHZq.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TxCurrMMD",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const report = new TxReportService();
    const columns = [
      { path: "ageGroup", label: "Age group", thStyles: { minWidth: "150px !important" } },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt, thStyles: { minWidth: "110px !important" } },
      ...toIndicatorColumns(TX_MMD_INDICATORS, { thStyles: { minWidth: "350px !important" } })
    ];
    async function fetchData(filters, rebuild) {
      try {
        await loader.show();
        report.setReportType("moh");
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
    function getDrillTitle(data) {
      return `${data.row.ageGroup} | ${data.column.label} | ${data.row.gender}s`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "MoH TX CURR MMD Report",
        subtitle: "Clients that are alive and on treatment in the reporting period and the difference in days between their clinical dispensation visit and \n      next appointment / drug-runout date is: 3 months (1 - 89 days), 3-5 months (90-179 days), 6+ months (180 or more days)",
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
