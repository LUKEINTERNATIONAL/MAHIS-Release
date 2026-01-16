import { ct as parseARVNumber, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, cF as getAge, aP as loader, aO as toastWarning } from '../index-D6b7pLN6.js';
import { R as RegimenReportService } from './regimen_report_service-itVyCWnZ.js';
import { q as defineComponent, r as ref, N as createBlock, y as openBlock } from './vendor-wM1cIaYi.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegimenSwitch",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "DOB (Age in Years)", formatter: toDobAndAge },
      { path: "art_start_date", label: "Start Date", formatter: toDisplayFmt },
      { path: "current_weight", label: "Weight (Kg)" },
      { path: "previous_regimen", label: "Prev Regimen" },
      { path: "current_regimen", label: "Curr Regimen" },
      { path: "medications", label: "ARVs" },
      { path: "dispensation_date", label: "Dispensation Date", formatter: toDisplayFmt }
    ];
    function toDobAndAge(date) {
      return `${toDisplayFmt(date)} (${getAge(date)})`;
    }
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new RegimenReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getRegimenSwitchReport();
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Clinic Regimen Switch Report",
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
