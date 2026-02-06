import { R as ReportService, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-B-NulKpO.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-6OQ3r7Vr.js';

class IncompleteVisitsReportService extends ReportService {
  constructor() {
    super();
  }
  async generate() {
    const data = await this.getReport("incomplete_visits", {
      "tool_name": "INCOMPLETE VISITS"
    });
    return Object.values(data ?? {});
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IncompleteVisits",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "arv_number", label: "ARV Number" },
      { path: "national_id", label: "NHID" },
      { path: "given_name", label: "First name", exportable: false },
      { path: "family_name", label: "Last name", exportable: false },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
      { path: "dates", label: "Date(s)", formatter: (dates) => dates.map(toDisplayFmt).join(", ") }
    ];
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new IncompleteVisitsReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.generate();
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Incomplete Visits Clinic Report",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "use-date-range-filter": "",
        "use-secure-export": "",
        "show-indices": "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
