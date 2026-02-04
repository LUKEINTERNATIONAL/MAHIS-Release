import { R as ReportService, cq as toDisplayGenderFmt, cu as toIndicatorColumns, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-DzmFphVR.js';
import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';
import { l as lodashExports } from './lodash-CFXvmrwU.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-CNJ0IVCn.js';

const RETENTION_INDICATORS = {
  initiated_1: "Initiated one month",
  completed_1: "Completed one month",
  initiated_3: "Initiated Three months",
  completed_3: "Completed Three months",
  initiated_6: "Initiated Six months",
  completed_6: "Completed Six months"
};
class RetentionReportService extends ReportService {
  constructor() {
    super();
  }
  async generate() {
    const data = await this.getReport(`programs/${this.programId}/reports/retention`);
    const males = [];
    const females = [];
    AGE_GROUPS.forEach((ageGroup) => {
      males.push(this.buildRowData(data, "M", ageGroup));
      females.push(this.buildRowData(data, "F", ageGroup));
    });
    return [...females, ...males];
  }
  getIndicatorData(data, gender, age) {
    return data.filter(({ gender: g, age_group }) => g === gender && age_group === age).map(({ patient_id }) => patient_id);
  }
  buildRowData(data, gender, ageGroup) {
    const months = [1, 3, 6];
    const defaultRow = { ageGroup, gender };
    for (const month of months) {
      const all = lodashExports.get(data, `${month}.all`, []);
      const retained = lodashExports.get(data, `${month}.all`, []);
      defaultRow[`initiated_${month}`] = this.getIndicatorData(all, gender, ageGroup);
      defaultRow[`completed_${month}`] = this.getIndicatorData(retained, gender, ageGroup);
    }
    return defaultRow;
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RetentionReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "ageGroup", label: "Age Group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      ...toIndicatorColumns(RETENTION_INDICATORS)
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new RetentionReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.generate();
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
        title: "Clinic Retention Report",
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
