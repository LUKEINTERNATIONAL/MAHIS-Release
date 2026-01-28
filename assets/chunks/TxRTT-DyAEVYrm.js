import { cp as toDisplayGenderFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Di9oihr7.js';
import { T as TxReportService } from './tx_report_service-DqVwQMa8.js';
import { l as lodashExports } from './lodash-DXsj9-B5.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-DlXvc2CI.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TxRTT",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const totalClients = ref();
    const report = new TxReportService();
    const columns = [
      { path: "ageGroup", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "cd4_less_than_200", label: "CD4 <200", drillable: true },
      { path: "cd4_greater_than_or_equal_to_200", label: "CD4 >=200", drillable: true },
      { path: "unknown_cd4_count", label: "Unknown CD4", drillable: true },
      { path: "not_eligible_for_cd4", label: "Not Eligible for CD4", drillable: true },
      { path: "returned_less_than_3_months", label: "Returned <3 mo", drillable: true },
      { path: "returned_greater_than_3_months_and_less_than_6_months", label: "Returned 3-5 mo", drillable: true },
      { path: "returned_greater_than_or_equal_to_6_months", label: "Returned 6+ mo", drillable: true }
    ];
    function getDisaggregatedData(data) {
      const defaultData = { M: { rows: [], aggregate: {} }, F: { rows: [], aggregate: {} } };
      return data.reduce((result, currentItem) => {
        if (currentItem.age_group !== "Unknown") {
          const gender = currentItem.gender;
          result[gender].rows.push({ ...currentItem, ageGroup: currentItem.age_group });
          result[gender].aggregate = Object.keys(currentItem).reduce((aggregate, key) => {
            return Array.isArray(currentItem[key]) ? { ...aggregate, [key]: [...aggregate[key] || [], ...currentItem[key]] } : aggregate;
          }, result[gender].aggregate);
        }
        return result;
      }, defaultData);
    }
    function setTotals(data) {
      const allFemales = Object.values(data.F.aggregate).flat(1);
      const allMales = Object.values(data.M.aggregate).flat(1);
      totalClients.value = lodashExports.uniq([...allFemales, ...allMales]);
    }
    async function fetchData(filters, rebuild = false) {
      try {
        await loader.show();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        const data = await report.getTxRttReport(rebuild);
        const disaggregated = getDisaggregatedData(data);
        rows.value = [
          ...disaggregated.F.rows,
          ...disaggregated.M.rows,
          { ageGroup: "All", gender: "Male", ...disaggregated.M.aggregate },
          ...await report.buildMaternityAgreggateRows(disaggregated.F.aggregate)
        ];
        setTotals(disaggregated);
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
        title: "PEPFAR TX RTT Report",
        subtitle: "Clients that have their clinical dispensation visit falling \n      in the reporting period and there is a difference of 30 or more days \n      between their visit date and their previous appointment date / runout date",
        "report-type": "PEPFAR",
        columns,
        rows: rows.value,
        period: period.value,
        "total-clients": totalClients.value,
        "drill-title": drilldownTitleBuilder,
        useDateRangeFilter: "",
        showIndices: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period", "total-clients"]);
    };
  }
});

export { _sfc_main as default };
