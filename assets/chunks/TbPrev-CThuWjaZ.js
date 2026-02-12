import { R as ReportService, cs as parseARVNumber, cp as toDisplayGenderFmt, cd as toDisplayFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-yRu5EhmF.js';
import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';
import { l as lodashExports } from './lodash-Ba28qa7J.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-CL0dVHZq.js';

const indicators = ["started_new_on_art", "started_previously_on_art", "completed_new_on_art", "completed_previously_on_art"];
class TbPrevReportService extends ReportService {
  constructor() {
    super();
  }
  getTBPrevReport() {
    return this.getReport(`/programs/${this.programId}/reports/tb_prev2`);
  }
  buildReportData(cohort) {
    const data = [];
    const genders = ["F", "M"];
    genders.forEach((gender) => {
      AGE_GROUPS.forEach((group) => {
        const tmp = { gender, ageGroup: group };
        indicators.forEach((indicator) => {
          tmp[`3hp_${indicator}`] = lodashExports.get(cohort[group][gender], `3HP.${indicator}`, []);
          tmp[`6h_${indicator}`] = lodashExports.get(cohort[group][gender], `6H.${indicator}`, []);
        });
        data.push(tmp);
      });
    });
    return data;
  }
  aggregate(cohort, gender, tpt, indicator) {
    return Object.values(cohort).reduce((patients, c) => {
      return [...c[gender][tpt][indicator], ...patients];
    }, []);
  }
  getAggregatedMaleData(cohort) {
    const data = { gender: "Male", ageGroup: "All" };
    for (const indicator of indicators) {
      data[`3hp_${indicator}`] = this.aggregate(cohort, "M", "3HP", indicator);
      data[`6h_${indicator}`] = this.aggregate(cohort, "M", "6H", indicator);
    }
    return data;
  }
  async getAggregatedMaternalStatus(cohort) {
    const aggregated = indicators.reduce(
      (aggregated2, indicator) => [
        ...aggregated2,
        { group: "3HP", indicator, data: this.aggregate(cohort, "F", "3HP", indicator) },
        { group: "6H", indicator, data: this.aggregate(cohort, "F", "6H", indicator) }
      ],
      []
    );
    const allFemales = lodashExports.uniq(aggregated.reduce((totals, cur) => [...totals, ...cur.data], []).map((d) => d.patient_id));
    const maternalStatus = await this.getMaternalStatus(allFemales);
    const allPregnant = maternalStatus.FBf.concat(maternalStatus.FP);
    const data = [];
    const groupBy = (indicator, tpt, gender) => aggregated.reduce((all, i) => i.indicator === indicator && tpt === i.group ? [...all, ...i.data] : all, []).filter(
      (p) => gender === "FNP" ? !allPregnant.includes(p.patient_id) : maternalStatus[gender].includes(p.patient_id)
    );
    for (const gender of ["FP", "FNP", "FBf"]) {
      const tmp = { gender, ageGroup: "All" };
      for (const indicator of indicators) {
        tmp[`3hp_${indicator}`] = groupBy(indicator, "3HP", gender);
        tmp[`6h_${indicator}`] = groupBy(indicator, "6H", gender);
      }
      data.push(tmp);
    }
    return data;
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TbPrev",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "ageGroup", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "3hp_started_new_on_art", label: "3HP Started New on ART", drillable: true },
      { path: "6h_started_new_on_art", label: "6H Started New on ART", drillable: true },
      { path: "3hp_started_previously_on_art", label: "3HP Started Previously on ART", drillable: true },
      { path: "6h_started_previously_on_art", label: "6H Started Previously on ART", drillable: true },
      { path: "3hp_completed_new_on_art", label: "3HP Completed New on ART", drillable: true },
      { path: "6h_completed_new_on_art", label: "6H Completed New on ART", drillable: true },
      { path: "3hp_completed_previously_on_art", label: "3HP Completed Previously on ART", drillable: true },
      { path: "6h_completed_previously_on_art", label: "6H Completed Previously on ART", drillable: true }
    ];
    const drillColumns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
      { path: "art_start_date", label: "ART Start Date", formatter: toDisplayFmt },
      { path: "tpt_initiation_date", label: "TPT Initiation Date", formatter: toDisplayFmt },
      { path: "outcome", label: "Outcome" }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new TbPrevReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        const cohort = await report.getTBPrevReport();
        rows.value = report.buildReportData(cohort);
        rows.value.push(report.getAggregatedMaleData(cohort));
        rows.value.push(...await report.getAggregatedMaternalStatus(cohort));
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} | ${data.row.ageGroup} | ${toDisplayGenderFmt(data.row.gender)}s`;
    }
    function drillRowParser(data) {
      return data.row[data.column.path].map((p) => ({ ...p, person_id: p.patient_id }));
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "PEPFAR TB Prev Report",
        "report-type": "PEPFAR",
        columns,
        rows: rows.value,
        period: period.value,
        "custom-drill-columns": drillColumns,
        "drill-title": drilldownTitleBuilder,
        "drill-row-parser": drillRowParser,
        useDateRangeFilter: "",
        showIndices: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
