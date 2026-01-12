import { cs as getSelectButton, ct as parseARVNumber, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-Bam205gA.js';
import { D as DefaulterReportService } from './defaulter_report_service-C3-x3dpM.js';
import { q as defineComponent, r as ref, O as createBlock, y as openBlock } from './vendor-BPW-J91F.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DefaultersReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const title = ref("PEPFAR Defaulters List Report");
    const rowActionBtns = [getSelectButton()];
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "given_name", label: "First name", exportable: false },
      { path: "family_name", label: "Last name", exportable: false },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
      { path: "age", label: "Age (At reporting)" },
      { path: "defaulter_date", label: "Defaulted Date", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      await loader.show();
      const report = new DefaulterReportService();
      report.setStartDate(filters.dateRange.startDate);
      report.setEndDate(filters.dateRange.endDate);
      report.setOccupation(filters.occupation);
      period.value = report.getDateIntervalPeriod();
      try {
        rows.value = await report.getDefaulters();
        title.value = `PEPFAR Defaulters List Report <b>(${rows.value.length} Defaulters)</b>`;
      } catch (error) {
        toastWarning("Unable to load report data");
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: title.value,
        "report-type": "PEPFAR",
        columns,
        "row-action-buttons": rowActionBtns,
        rows: rows.value,
        period: period.value,
        "use-date-range-filter": "",
        "use-secure-export": "",
        onGenerate: fetchData
      }, null, 8, ["title", "rows", "period"]);
    };
  }
});

export { _sfc_main as default };
