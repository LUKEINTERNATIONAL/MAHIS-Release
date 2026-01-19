import { cs as getSelectButton, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-D5ZuGc-h.js';
import { P as PatientReportService } from './patient_report_service-FsQ7q1ui.js';
import { q as defineComponent, N as createBlock, y as openBlock, f as ref } from './vendor-xvx_X2hj.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ClinicExternalConsultation",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const title = ref("Clinic External consultation clients Report");
    const rowActionBtns = [getSelectButton()];
    const columns = [
      { label: "NPID", path: "npid" },
      { label: "Client Type", path: "patient_type" },
      { label: "First name", path: "given_name", exportable: false },
      { label: "Last name", path: "family_name", exportable: false },
      { label: "Gender", path: "gender", formatter: toDisplayGenderFmt },
      { label: "DOB", path: "birthdate", formatter: toDisplayFmt },
      { label: "Date set", path: "date_set", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      await loader.show();
      const report = new PatientReportService();
      report.setStartDate(filters.dateRange.startDate);
      report.setEndDate(filters.dateRange.endDate);
      report.setOccupation(filters.occupation);
      period.value = report.getDateIntervalPeriod();
      try {
        rows.value = await report.getExternalConsultationClients();
        title.value = `Clinic External consultation clients Report (${rows.value.length} Clients)`;
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
