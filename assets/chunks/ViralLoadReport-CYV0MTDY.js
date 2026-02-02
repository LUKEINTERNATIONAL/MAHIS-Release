import { cr as getSelectButton, cs as parseARVNumber, cp as toDisplayGenderFmt, cd as toDisplayFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Bf-C6EIe.js';
import { P as ProgramReportService } from './program_report_service-Crp267qP.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-DoVhRvhx.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ViralLoadReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const title = ref("Clinic Viral Load Report");
    const rowActionBtns = [getSelectButton("patient_id")];
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
      { path: "specimen", label: "Specimen" },
      { path: "order_date", label: "Ordered", formatter: toDisplayFmt },
      { path: "result_modifier", label: "Result", formatter: (_, row) => `${row.result_modifier || ""} ${row.result}` },
      { path: "result_date", label: "Released", formatter: toDisplayFmt },
      { path: "current_regimen", label: "Curr. Regimen" }
    ];
    const customFilters = [{
      id: "type",
      label: "Select result type",
      type: "select",
      options: [
        { label: "Viraemia 1000+", value: "viraemia-1000" },
        { label: "Suppressed", value: "suppressed" },
        { label: "Low level viraemia", value: "low-level-viraemia" }
      ]
    }];
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new ProgramReportService();
        const range = filters.type;
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        title.value = ` Clinic Viral Load (${range}) Report`;
        rows.value = await report.generate("high_vl_patients", { range });
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "report-type": "Clinic",
        title: title.value,
        columns,
        rows: rows.value,
        period: period.value,
        "row-action-buttons": rowActionBtns,
        "custom-filters": customFilters,
        "use-date-range-filter": "",
        onGenerate: fetchData
      }, null, 8, ["title", "rows", "period"]);
    };
  }
});

export { _sfc_main as default };
