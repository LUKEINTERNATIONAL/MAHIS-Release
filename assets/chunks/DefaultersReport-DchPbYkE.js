import { ct as getSelectButton, cu as parseARVNumber, cr as toDisplayGenderFmt, cf as toDisplayFmt, cs as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-C7zo43Se.js';
import { D as DefaulterReportService } from './defaulter_report_service-D2EeP1Xi.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-74dOmGLc.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DefaultersReport",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const title = ref("Clinic Defaulters List Report");
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
      report.setIsPepfar(false);
      report.setStartDate(filters.startDate);
      report.setEndDate(filters.endDate);
      report.setOccupation(filters.occupation);
      period.value = report.getDateIntervalPeriod();
      try {
        rows.value = await report.getDefaulters();
        title.value = `Clinic Defaulters List Report <b>(${rows.value.length} Defaulters)</b>`;
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: title.value,
        "report-type": "Clinic",
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
