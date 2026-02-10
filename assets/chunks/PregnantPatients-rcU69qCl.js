import { ct as getSelectButton, cu as parseARVNumber, cr as toDisplayGenderFmt, cf as toDisplayFmt, cs as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CJh5hefu.js';
import { P as ProgramReportService } from './program_report_service-IZE7Y2_1.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-74dOmGLc.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PregnantPatients",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const rowActionBtns = [getSelectButton("patient_id")];
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "given_name", label: "First name", exportable: false },
      { path: "family_name", label: "Last name", exportable: false },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new ProgramReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.generate("pregnant_patients");
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Pregnant Patients Clinic Report",
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
