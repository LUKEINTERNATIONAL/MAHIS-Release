import { cr as _sfc_main$1, aP as loader, aO as toastWarning, cq as toDisplayGenderFmt } from '../index-NXBj2cdM.js';
import { b as TPT_OUTCOMES_INDICATORS, T as TptReportService } from './tpt_report_service-BGdetjow.js';
import { q as defineComponent, r as ref, O as createBlock, y as openBlock } from './vendor-BPW-J91F.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TptOutcomes",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "age_group", label: "Age Group" },
      { path: "tpt_type", label: "TPT Type" },
      ...Object.entries(TPT_OUTCOMES_INDICATORS).map(([path, label]) => ({
        path,
        label,
        drillable: true,
        sortable: false
      }))
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new TptReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getTtpOutcomes();
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} | ${data.row.age_group} | ${toDisplayGenderFmt(data.row.tpt_type)}`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "TPT Outcomes Clinic Report",
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
