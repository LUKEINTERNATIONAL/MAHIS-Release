import { cp as toDisplayGenderFmt, ct as toIndicatorColumns, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CLlkGLFm.js';
import { T as TxReportService, b as TX_ML_INDICATORS } from './tx_report_service-CfnE3_IM.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-DrpjccQs.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TxML",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "ageGroup", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      ...toIndicatorColumns(TX_ML_INDICATORS)
    ];
    async function fetchData(filters, rebuild = false) {
      try {
        await loader.show();
        const report = new TxReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getTxMlReport(rebuild);
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
        title: "PEPFAR TX ML Report",
        subtitle: "Clients that were Alive and on treatment before the reporting period and \n    their “next appointment date / drug runout” date falls within the reporting period. \n    30 or more days have gone between their appointment date and the end of the \n    reporting period without any clinical dispensation visit",
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
