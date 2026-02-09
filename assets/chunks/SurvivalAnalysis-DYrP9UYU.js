import { R as ReportService, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-COGk33Kr.js';
import { l as lodashExports } from './lodash-ClZFDeT4.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed } from './vendor-CIi-jrCy.js';

var AGE_GROUP = /* @__PURE__ */ ((AGE_GROUP2) => {
  AGE_GROUP2["GENERAL"] = "General";
  AGE_GROUP2["CHILDREN"] = "Children";
  AGE_GROUP2["WOMEN"] = "Women";
  return AGE_GROUP2;
})(AGE_GROUP || {});
class SurvivalAnalysisReportService extends ReportService {
  ageGroup;
  quarter;
  regenerate;
  constructor() {
    super();
    this.quarter = "";
    this.regenerate = false;
    this.ageGroup = "General" /* GENERAL */;
  }
  setRegenerate(regenarete) {
    this.regenerate = regenarete;
  }
  getAgeGroup() {
    return this.ageGroup;
  }
  setQuarter(quarter) {
    this.quarter = quarter;
  }
  setAgeGroup(ageGroup) {
    this.ageGroup = ageGroup;
  }
  async generateReport() {
    return this.reportBuilder(
      await this.getReport("cohort_survival_analysis", {
        quarter: this.quarter,
        regenerate: this.regenerate,
        age_group: this.ageGroup
      })
    );
  }
  getOutcomeInterval(outcomes) {
    const firstOutcome = Object.values(outcomes)[0];
    if (!firstOutcome) return null;
    const firstInterval = Object.keys(firstOutcome)[0];
    return parseInt(firstInterval, 10);
  }
  reportBuilder(data) {
    return Object.entries(data ?? {}).reduce((report, [quarter, outcomes]) => {
      if (!lodashExports.isEmpty(outcomes)) {
        const interval = this.getOutcomeInterval(outcomes);
        const alive = lodashExports.get(outcomes, `On antiretrovirals.${interval}`, 0);
        const died = lodashExports.get(outcomes, `Patient died.${interval}`, 0);
        const defaulted = lodashExports.get(outcomes, `Defaulted.${interval}`, 0);
        const stopped = lodashExports.get(outcomes, `Treatment stopped.${interval}`, 0);
        const transferred = lodashExports.get(outcomes, `Patient transferred out.${interval}`, 0);
        const unknown = lodashExports.get(outcomes, `N/A.${interval}`, 0);
        const total = alive + died + defaulted + stopped + transferred + unknown;
        report.push({
          totalConfirmed: "",
          subGroup: this.ageGroup,
          quarter,
          interval,
          alive,
          died,
          defaulted,
          stopped,
          transferred,
          unknown,
          total
        });
      }
      return report;
    }, []);
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SurvivalAnalysis",
  setup(__props) {
    const quarter = ref();
    const ageGroup = ref();
    const rows = ref([]);
    const filename = ref("MoH Survival Analysis Report");
    const columns = [
      { path: "quarter", label: "Reg Cohort", initialSort: true, initialSortOrder: "asc", preSort: (v) => parseInt(v.split(" ")[1]) },
      { path: "interval", label: "Interval (Months)" },
      { path: "subGroup", label: "Sub group" },
      { path: "total", label: "Total Reg (database)" },
      { path: "totalConfirmed", label: "Total Reg (Confirmed)" },
      { path: "alive", label: "Alive" },
      { path: "died", label: "Died" },
      { path: "defaulted", label: "Defaulted" },
      { path: "stopped", label: "Stopped" },
      { path: "transferred", label: "Transferred out" },
      { path: "unknown", label: "Unknown" }
    ];
    const customFilters = computed(() => [{
      id: "ageGroup",
      type: "select",
      label: "Sub Group:",
      value: ageGroup.value,
      options: Object.values(AGE_GROUP).map((age) => ({ label: age.match(/Women/i) ? "Option B+" : age, value: age }))
    }]);
    async function fetchData({ quarter: quarter2, ageGroup: ageGroup2 }, regenerate = false) {
      await loader.show();
      try {
        const report = new SurvivalAnalysisReportService();
        report.setRegenerate(regenerate);
        report.setQuarter(quarter2.value);
        report.setAgeGroup(ageGroup2.value);
        rows.value = await report.generateReport();
        filename.value = `MoH Survival Analysis (${ageGroup2.value}) Report`;
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "MoH Survival Analysis Report",
        "report-type": "MoH",
        columns,
        rows: rows.value,
        quarter: quarter.value,
        useQuarterFilter: "",
        "use-secure-export": "",
        "custom-filters": customFilters.value,
        filename: filename.value,
        onGenerate: fetchData
      }, null, 8, ["rows", "quarter", "custom-filters", "filename"]);
    };
  }
});

export { _sfc_main as default };
