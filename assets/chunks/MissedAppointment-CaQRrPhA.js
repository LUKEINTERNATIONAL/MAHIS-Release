import { cs as getSelectButton, ct as parseARVNumber, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, aP as loader, R as ReportService, aO as toastWarning } from '../index-Bl5QmRYN.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-6OQ3r7Vr.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MissedAppointment",
  setup(__props) {
    const period = ref("");
    const rows = ref([]);
    const rowActionBtns = [getSelectButton()];
    const columns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "given_name", label: "First name", exportable: false },
      { path: "family_name", label: "Last name", exportable: false },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "birthdate", label: "DOB", formatter: toDisplayFmt },
      { path: "appointment_date", label: "Appointment", formatter: toDisplayFmt },
      { path: "days_missed", label: "Days Missed" },
      { path: "current_outcome", label: "Current Outcome" },
      { path: "address", label: "Contact Details", exportable: false }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new ReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        const data = await report.getReport("missed_appointments") ?? [];
        rows.value = data.map((d) => ({
          ...d,
          address: `CELL: ${d.cell_number}
                District: ${d.district}
                Village: ${d.village}
                TA: ${d.ta}`
        }));
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Clinic Missed Appointments Report",
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
