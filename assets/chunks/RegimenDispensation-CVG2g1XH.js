import { ct as parseARVNumber, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CZRYL9l5.js';
import { R as RegimenReportService } from './regimen_report_service-BwU22E0s.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-BO7XRaEo.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegimenDispensation",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "DOB", formatter: toDisplayFmt },
      { path: "art_start_date", label: "ART Start Date", formatter: toDisplayFmt },
      { path: "current_weight", label: "Weight (Kg)" },
      { path: "current_regimen", label: "Curr. Reg" },
      { path: "medications", label: "ARVs" },
      { path: "dispensation_date", label: "Curr. reg Dispensed", formatter: toDisplayFmt },
      { path: "vl_result", label: "VL Result" },
      { path: "vl_result_date", label: "Date of VL Result", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new RegimenReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        report.setReportType("moh");
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getRegimenReport();
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Clinic Regimen Dispensation Report",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "use-date-range-filter": "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
