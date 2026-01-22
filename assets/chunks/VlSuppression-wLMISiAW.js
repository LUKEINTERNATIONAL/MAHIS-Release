import { cr as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-DIdCIGDg.js';
import { P as ProgramReportService } from './program_report_service-mdYysdIB.js';
import { v as defineComponent, z as openBlock, P as createBlock, f as ref } from './vendor-Cbv9TWZo.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VlSuppression",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "regimen", label: "Regimen" },
      { path: "due_for_vl", label: "Due for VL", drillable: true },
      { path: "drawn", label: "Sample drawn", drillable: true },
      { path: "high_vl", label: "High vl (>=1000 copies)", drillable: true },
      { path: "low_vl", label: "Low vl (<1000 cpies)", drillable: true }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new ProgramReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        rows.value = await report.generate("vl_supression", {
          system_type: "emastercard"
        });
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} on ${data.row.regimen} regimen`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "Clinic VL Suppression Report",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "drill-title": drilldownTitleBuilder,
        useDateRangeFilter: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
