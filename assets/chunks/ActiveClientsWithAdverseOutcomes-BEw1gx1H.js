import { cr as getSelectButton, cd as toDisplayFmt, cq as _sfc_main$1, aP as loader, cH as DataCleaningReportService, cI as CtIndicator, aO as toastWarning } from '../index-DaGEVGD3.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-DrpjccQs.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActiveClientsWithAdverseOutcomes",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const rowActionBtns = [getSelectButton("patient_id")];
    const columns = [
      { path: "arv_number", label: "ARV Number" },
      { path: "filling_number", label: "Filling Number" },
      { path: "outcome", label: "Outcome" },
      { path: "outcome_date", label: "Outcome Date", formatter: toDisplayFmt },
      { path: "dispensation_visit_date", label: "Last Dispensation Date", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new DataCleaningReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        period.value = report.getDateIntervalPeriod();
        const data = await report.getCleaningToolReport(CtIndicator.ActiveClientsWithAdverseOutcomes);
        rows.value = data.map((d) => ({
          arv_number: d.arv_number,
          filling_number: d.filling_number,
          outcome: d.outcome,
          outcome_date: d.outcome_date,
          dispensation_visit_date: d.dispensation_visit_date,
          patient_id: d.patient_id
        }));
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Active Clients with Adverse Outcomes",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "row-action-buttons": rowActionBtns,
        "use-date-range-filter": "",
        "use-secure-export": "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
