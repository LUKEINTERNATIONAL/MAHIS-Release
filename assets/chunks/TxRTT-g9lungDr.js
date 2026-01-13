import { cq as toDisplayGenderFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Be0fRy6M.js';
import { T as TxReportService } from './tx_report_service-Eg7Tv3xq.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';
import { q as defineComponent, r as ref, O as createBlock, y as openBlock } from './vendor-BPW-J91F.js';

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
      { path: "lessThanThree", label: "Returned <3 mo", drillable: true },
      { path: "betweenThreeAndFive", label: "Returned 3-5 mo", drillable: true },
      { path: "overSix", label: "Returned 6+ mo", drillable: true }
    ];
    function buildRow(data, gender, ageGroup, result) {
      const row = { gender, ageGroup, lessThanThree: [], betweenThreeAndFive: [], overSix: [] };
      const patients = lodashExports.get(data, `${ageGroup}.${gender}`, []);
      for (const { months, patient_id } of patients) {
        if (months < 3) row.lessThanThree.push(patient_id);
        else if (months >= 3 && months < 6) row.betweenThreeAndFive.push(patient_id);
        else row.overSix.push(patient_id);
      }
      result[gender].rows.push(row);
      result[gender].aggregate.lessThanThree.push(...row.lessThanThree);
      result[gender].aggregate.betweenThreeAndFive.push(...row.betweenThreeAndFive);
      result[gender].aggregate.overSix.push(...row.overSix);
    }
    function getDisaggregatedData(data) {
      const defaultData = {
        M: { rows: [], aggregate: { lessThanThree: [], betweenThreeAndFive: [], overSix: [] } },
        F: { rows: [], aggregate: { lessThanThree: [], betweenThreeAndFive: [], overSix: [] } }
      };
      return AGE_GROUPS.reduce((result, ageGroup) => {
        buildRow(data, "F", ageGroup, result);
        buildRow(data, "M", ageGroup, result);
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
        const data = await report.getClinicTxRtt(rebuild);
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
        title: "Clinic TX RTT Report",
        "report-type": "Clinic",
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
