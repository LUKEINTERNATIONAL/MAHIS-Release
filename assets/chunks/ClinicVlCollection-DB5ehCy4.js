import { ct as parseARVNumber, cq as toDisplayGenderFmt, ce as toDisplayFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CA5gZ8gz.js';
import { V as ViralLoadReportService } from './viral_load_report_service-B8gz9nMG.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-CCA5uLDN.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ClinicVlCollection",
  setup(__props) {
    const period = ref("");
    const report = new ViralLoadReportService();
    const filingNumberEnabled = ref(false);
    const rows = ref([]);
    const columns = [
      filingNumberEnabled.value ? { label: "Filing#", path: "identifier" } : { label: "ARV#", path: "identifier", preSort: parseARVNumber, initialSort: true },
      {
        label: "First name",
        path: "given_name",
        exportable: false
      },
      {
        label: "Last name",
        path: "family_name",
        exportable: false
      },
      {
        label: "Gender",
        path: "gender",
        formatter: toDisplayGenderFmt
      },
      {
        label: "DOB",
        path: "birthdate",
        formatter: toDisplayFmt
      },
      {
        label: "Date of VL Order",
        path: "order_date",
        formatter: toDisplayFmt
      }
    ];
    async function fetchData(filters) {
      await loader.show();
      report.setStartDate(filters.dateRange.startDate);
      report.setEndDate(filters.dateRange.endDate);
      report.setOccupation(filters.occupation);
      period.value = report.getDateIntervalPeriod();
      try {
        rows.value = await report.getVlCollection();
        filingNumberEnabled.value = filters.filingNumberEnabled;
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "report-prefix": "Clinic",
        title: "VL Collection",
        "default-sort-order": "asc",
        "default-sorted-column": "identifier",
        columns,
        period: period.value,
        rows: rows.value,
        "filing-number-enabled": filingNumberEnabled.value,
        "use-date-range-filter": "",
        "use-secure-export": "",
        onGenerate: fetchData
      }, null, 8, ["period", "rows", "filing-number-enabled"]);
    };
  }
});

export { _sfc_main as default };
