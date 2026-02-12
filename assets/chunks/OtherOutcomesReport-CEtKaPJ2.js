import { cr as getSelectButton, cF as strsToOptions, cq as _sfc_main$1, aP as loader, aO as toastWarning, cs as parseARVNumber, cd as toDisplayFmt, cp as toDisplayGenderFmt } from '../index-Cz8Kw0vP.js';
import { P as ProgramReportService } from './program_report_service-7kblJ3IA.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed } from './vendor-DrpjccQs.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OtherOutcomesReport",
  setup(__props) {
    const period = ref("-");
    const outcome = ref("");
    const rows = ref([]);
    const title = computed(() => `${outcome.value || "Other Outcomes"} Clinic Report`);
    const rowActionBtns = [getSelectButton("patient_id")];
    const columns = computed(() => {
      const _columns = [
        { path: "identifier", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
        { path: "given_name", label: "First Name" },
        { path: "family_name", label: "Last Name" },
        { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
        { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
        { path: "outcome_date", label: "Outcome Date", formatter: toDisplayFmt }
      ];
      if (/transfer/i.test(outcome.value)) _columns.push({
        path: "transferred_out_to",
        label: "TO Location"
      });
      return _columns;
    });
    const customFilters = [{
      id: "outcome",
      label: "Select Outcome",
      type: "select",
      options: strsToOptions([
        "Transfer Out",
        "Died",
        "Stopped"
      ])
    }];
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new ProgramReportService();
        outcome.value = filters.outcome;
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getReport("patient_outcome_list", {
          outcome: outcome.value
        }) ?? [];
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
        columns: columns.value,
        rows: rows.value,
        period: period.value,
        "row-action-buttons": rowActionBtns,
        "custom-filters": customFilters,
        "use-date-range-filter": "",
        "use-secure-export": "",
        onGenerate: fetchData
      }, null, 8, ["title", "columns", "rows", "period"]);
    };
  }
});

export { _sfc_main as default };
