import { ct as getSelectButton, cu as parseARVNumber, cr as toDisplayGenderFmt, cf as toDisplayFmt, cs as _sfc_main$1, aP as loader, aO as toastWarning, cH as strsToOptions } from '../index-BcjCT4MQ.js';
import { R as RegimenReportService } from './regimen_report_service-BqcUihFq.js';
import { R as REGIMENS, b as REGIMEN_FORMULATIONS } from './regimens-C7xPp0bP.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed } from './vendor-74dOmGLc.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegimenFormulation",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const rowActionBtns = [getSelectButton("patient_id")];
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
      { path: "regimen", label: "Reg. name" },
      { path: "drugs", label: "Formulation" }
    ];
    const customFilters = computed(() => [
      { id: "regimen", label: "Select Regimen", type: "select", options: strsToOptions(REGIMENS) },
      { id: "formulation", label: "Formulation", type: "select", options: strsToOptions(REGIMEN_FORMULATIONS) }
    ]);
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new RegimenReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getRegimenFormulationReport(filters.regimen, filters.formulation);
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Regimen Formulation: Patient Level Clinic Report",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "row-action-buttons": rowActionBtns,
        "custom-filters": customFilters.value,
        "use-date-range-filter": "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period", "custom-filters"]);
    };
  }
});

export { _sfc_main as default };
