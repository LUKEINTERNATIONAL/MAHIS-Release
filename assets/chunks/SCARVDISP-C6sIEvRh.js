import { ct as parseARVNumber, ce as toDisplayFmt, cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-jHLvXTOz.js';
import { R as RegimenReportService } from './regimen_report_service-C4QmMK0N.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-6OQ3r7Vr.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SCARVDISP",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "name", label: "ARV drug category" },
      { path: "dispensations", label: "# of bottles (units) dispensed", drillable: true }
    ];
    const drillColumns = [
      { path: "arvNumber", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "name", label: "Drug" },
      { path: "quantity", label: "Quantity" },
      { path: "date", label: "Date", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new RegimenReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.getSCReport();
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.row.name}`;
    }
    function drillRowParser(data) {
      return data.row.dispensations.map(([name, quantity, date, arvNumber]) => ({
        name,
        quantity,
        date,
        arvNumber
      }));
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "PEPFAR SC ARV Dispensation Report",
        "report-type": "PEPFAR",
        columns,
        rows: rows.value,
        period: period.value,
        customDrillColumns: drillColumns,
        "drill-title": drilldownTitleBuilder,
        "drill-row-parser": drillRowParser,
        useDateRangeFilter: "",
        showIndices: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
