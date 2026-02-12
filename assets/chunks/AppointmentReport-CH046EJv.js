import { cr as getSelectButton, cs as parseARVNumber, cp as toDisplayGenderFmt, cd as toDisplayFmt, cq as _sfc_main$1, aP as loader, R as ReportService, cD as toStandardFmt, aO as toastWarning } from '../index-DaGEVGD3.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-DrpjccQs.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppointmentReport",
  setup(__props) {
    const rows = ref([]);
    const rowActionBtns = [getSelectButton()];
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "given_name", label: "First name", exportable: false },
      { path: "family_name", label: "Last name", exportable: false },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt }
    ];
    async function fetchData(filters, regenerate) {
      await loader.show();
      const report = new ReportService();
      report.setOccupation(filters.occupation);
      try {
        rows.value = await report.getReport(`programs/${report.programId}/scheduled_appointments`, {
          date: toStandardFmt(filters.date)
        }) ?? [];
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Clinic Appointments Report",
        "report-type": "Clinic",
        columns,
        "row-action-buttons": rowActionBtns,
        rows: rows.value,
        "use-date-filter": "",
        "use-secure-export": "",
        onGenerate: fetchData
      }, null, 8, ["rows"]);
    };
  }
});

export { _sfc_main as default };
