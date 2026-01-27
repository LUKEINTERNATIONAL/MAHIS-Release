import { cq as toDisplayGenderFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-8Y6Qmz3g.js';
import { P as ProgramReportService } from './program_report_service-Cj1PWIUL.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-Wwszy5sF.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ClinicHypertensionCascadeReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const title = ref("Hypertension Cascade Report");
    const columns = [
      { path: "age_group", label: "Age Group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "due_screening", label: "Due for BP screening", drillable: true },
      { path: "screened", label: "Screened for HTN", drillable: true },
      { path: "normal_reading", label: "Normal <140/<90", drillable: true },
      { path: "mild_reading", label: "Mild 140-159/90-99", drillable: true },
      { path: "moderate_reading", label: "Moderate 160-180/100-110", drillable: true },
      { path: "severe_reading", label: "Severe >180/>110", drillable: true },
      { path: "hydrochlorothiazide_25mg", label: "Hydrochlorothiazide 25mg", drillable: true },
      { path: "amlodipine_5mg", label: "Amlodipine 5mg", drillable: true },
      { path: "amlodipine_10mg", label: "Amlodipine 10mg", drillable: true },
      { path: "captopril_25mg", label: "Captopril 25mg", drillable: true },
      { path: "captopril_6_25mg", label: "Captopril 6.25mg", drillable: true },
      { path: "captopril_12_5mg", label: "Captopril 12.5mg", drillable: true },
      { path: "captopril_50mg", label: "Captopril 50mg", drillable: true },
      { path: "enalapril_5mg", label: "Enalapril 5mg", drillable: true },
      { path: "enalapril_10mg", label: "Enalapril 10mg", drillable: true },
      { path: "atenolol_50mg", label: "Atenolol 50mg", drillable: true },
      { path: "atenolol_100mg", label: "Atenolol 100mg", drillable: true },
      { path: "nifedipine_10mg", label: "Nifedipine 10mg", drillable: true },
      { path: "nifedipine_20mg", label: "Nifedipine 20mg", drillable: true },
      { path: "total_regimen", label: "Total (regimen)", drillable: true }
    ];
    function transformAndSortData(rawData) {
      const flattenedAndSorted = Object.keys(rawData).flatMap((ageGroup) => {
        return Object.keys(rawData[ageGroup]).map((gender) => {
          const metrics = rawData[ageGroup][gender];
          const metricCounts = Object.keys(metrics).reduce((acc, metric) => {
            acc[metric] = metrics[metric].length;
            return acc;
          }, {});
          return {
            age_group: ageGroup,
            gender,
            ...metricCounts
          };
        });
      }).sort((a, b) => {
        if (a.gender < b.gender) return -1;
        if (a.gender > b.gender) return 1;
        if (a.age_group < b.age_group) return -1;
        if (a.age_group > b.age_group) return 1;
        return 0;
      });
      return flattenedAndSorted;
    }
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new ProgramReportService();
        if (!(filters.dateRange.startDate && filters.dateRange.endDate)) {
          toastWarning("Start date and end date required!");
          await loader.hide();
          return;
        }
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        const rawData = await report.generate("hypertension_report");
        if (rawData) {
          rows.value = transformAndSortData(rawData);
        } else {
          rows.value = [];
        }
      } catch (error) {
        console.error(error);
        toastWarning("ERROR! Unable to load report data");
      } finally {
        await loader.hide();
      }
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} | ${data.row.age_group} | ${toDisplayGenderFmt(data.row.gender)}`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: title.value,
        "report-type": "Clinic",
        columns,
        "drill-title": drilldownTitleBuilder,
        rows: rows.value,
        period: period.value,
        "use-date-range-filter": "",
        "use-secure-export": "",
        "show-indices": "",
        onGenerate: fetchData
      }, null, 8, ["title", "rows", "period"]);
    };
  }
});

export { _sfc_main as default };
