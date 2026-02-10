import { cd as toDisplayFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-DR39kxWD.js';
import { P as ProgramReportService } from './program_report_service-BOjduyOv.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-D_Iz0VZ7.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ClinicDiscrepancyReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { label: "Drug Count Date", path: "verification_date", formatter: toDisplayFmt },
      { label: "Drug Name", path: "short_name" },
      { label: "Expected Count", path: "expected_quantity", formatter: toDisplayFmt },
      { label: "Verified Count", path: "current_quantity", formatter: toDisplayFmt },
      { label: "Difference", path: "difference", formatter: toDisplayFmt },
      { label: "Reason", path: "variance_reason" }
    ];
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new ProgramReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.generate("discrepancy_report");
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Clinic Discrepancy Report",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "use-date-range-filter": "",
        "use-secure-export": "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
