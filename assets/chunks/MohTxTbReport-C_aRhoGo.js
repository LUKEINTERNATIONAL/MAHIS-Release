import { cp as toDisplayGenderFmt, ct as toIndicatorColumns, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Cz8Kw0vP.js';
import { T as TxReportService, c as TX_TB_INDICATORS } from './tx_report_service-veED0Bmb.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-DrpjccQs.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MohTxTbReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const report = new TxReportService();
    const columns = [
      { path: "ageGroup", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      ...toIndicatorColumns(TX_TB_INDICATORS)
    ];
    function aggregateData(data) {
      const result = {
        M: { rows: [], aggregate: {} },
        F: { rows: [], aggregate: {} }
      };
      Object.entries(data).forEach(([ageGroup, currentItem]) => {
        if (ageGroup !== "Unknown") {
          Object.entries(currentItem).forEach(([g, indicators]) => {
            const gender = g;
            result[gender].rows.push({ ageGroup, gender, ...indicators });
            Object.entries(indicators).forEach(([indicator, values]) => {
              result[gender].aggregate[indicator] = [
                ...result[gender].aggregate[indicator] ?? [],
                ...values
              ];
            });
          });
        }
      });
      return result;
    }
    async function fetchData(filters, rebuildOutcome) {
      try {
        await loader.show();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        const data = await report.getTxTbReport(rebuildOutcome);
        const aggregated = aggregateData(data);
        rows.value = [
          ...aggregated.F.rows,
          ...aggregated.M.rows,
          { ageGroup: "All", gender: "Male", ...aggregated.M.aggregate },
          ...await report.buildMaternityAgreggateRows(aggregated.F.aggregate)
        ];
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
        title: "TX TB Report",
        "report-type": "MOH",
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
