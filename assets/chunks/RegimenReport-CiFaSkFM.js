import { cp as toDisplayGenderFmt, cd as toDisplayFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CZ_DHssM.js';
import { R as RegimenReportService } from './regimen_report_service-ChC372OT.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-D523m2MA.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegimenReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "identifier", label: "ARV#" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "dob", label: "DOB", formatter: toDisplayFmt },
      { path: "drugName", label: "Drug Name" },
      { path: "dispensationDate", label: "Date", formatter: toDisplayFmt },
      { path: "packSize", label: "Pack size" },
      { path: "packSizes", label: "Total pack" },
      { path: "quantity", label: "Total pills" },
      { path: "vlResult", label: "Latest VL result" },
      { path: "vlResultDate", label: "Latest VL date", formatter: toDisplayFmt }
    ];
    async function fetchData(filters, rebuildCache = false) {
      try {
        await loader.show();
        const report = new RegimenReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getRegimenDispensationReport(rebuildCache);
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Moh Regimen Report",
        "report-type": "MoH",
        useDateRangeFilter: "",
        showIndices: "",
        columns,
        rows: rows.value,
        period: period.value,
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
