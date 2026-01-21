import { cq as toDisplayGenderFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-BBSKuWmW.js';
import { T as TxReportService } from './tx_report_service-TUbFoVyb.js';
import { v as defineComponent, P as createBlock, A as openBlock, f as ref } from './vendor-CJ5LqAxe.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TxNew",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const report = new TxReportService();
    const columns = [
      { path: "age_group", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "cd4_less_than_200", label: "Tx new CD4 < 200", drillable: true },
      { path: "cd4_greater_than_equal_to_200", label: "Tx new CD4 >= 200", drillable: true },
      { path: "cd4_unknown_or_not_done", label: "Tx new CD4 Unknown", drillable: true },
      { path: "transfer_in", label: "Transfer-ins", drillable: true }
    ];
    async function fetchData(filters, rebuildOutcome) {
      try {
        await loader.show();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getTxNewReport(rebuildOutcome);
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
        title: "PEPFAR TX New Report",
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
