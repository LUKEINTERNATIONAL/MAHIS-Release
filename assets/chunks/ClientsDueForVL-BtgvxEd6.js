import { cs as getSelectButton, ct as parseARVNumber, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, cF as getAge, aP as loader, R as ReportService, aO as toastWarning } from '../index-BDC92_36.js';
import { v as defineComponent, z as openBlock, P as createBlock, f as ref } from './vendor-B3kX1Pjg.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ClientsDueForVL",
  setup(__props) {
    const period = ref("");
    const rows = ref([]);
    const rowActionBtns = [getSelectButton()];
    const columns = [
      { path: "arv_number", label: "ARV #", preSort: parseARVNumber, initialSort: true },
      { path: "given_name", label: "First name", exportable: false },
      { path: "family_name", label: "Last name", exportable: false },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Age", formatter: (date) => date ? getAge(date) : "" },
      { path: "appointment_date", label: "App.", formatter: toDisplayFmt },
      { path: "start_date", label: "Art started", formatter: toDisplayFmt },
      { path: "months_on_art", label: "Months on ART" },
      { path: "mile_stone", label: "Milestone", formatter: toDisplayFmt },
      { path: "last_result_order_date", label: "Ordered", formatter: toDisplayFmt },
      { path: "last_result", label: "Result" },
      { path: "last_result_date", label: "Released", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new ReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getReport("clients_due_vl") ?? [];
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Clients Due For Viral Load Clinic Report",
        "report-type": "Clinic",
        columns,
        "row-action-buttons": rowActionBtns,
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
