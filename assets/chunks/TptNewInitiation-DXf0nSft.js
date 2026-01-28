import { cp as toDisplayGenderFmt, ct as toIndicatorColumns, cs as parseARVNumber, cd as toDisplayFmt, cq as _sfc_main$1, aP as loader, aO as toastWarning } from '../index-CcMPhFiC.js';
import { T as TptReportService, a as TPT_INITIATION_INDICATORS } from './tpt_report_service-BjkB9Gz8.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-BIA1Qh8a.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TptNewInitiation",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const report = new TptReportService();
    const columns = [
      { path: "location", label: "District" },
      { path: "ageGroup", label: "Age group" },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      ...toIndicatorColumns(TPT_INITIATION_INDICATORS)
    ];
    const drillColumns = [
      { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
      { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
      { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
      { path: "dispensation_date", label: "Dispensation Date", formatter: toDisplayFmt },
      { path: "art_start_date", label: "Art Start Date", formatter: toDisplayFmt },
      { path: "tpt_start_date", label: "TPT Start Date", formatter: toDisplayFmt }
    ];
    async function fetchData(filters) {
      try {
        await loader.show();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        const data = await report.getTptNewInitiations();
        const location = data.F.rows[0].location;
        rows.value = [
          ...data.F.rows,
          ...data.M.rows,
          { ageGroup: "All", gender: "Male", ...data.M.aggregate, location },
          ...(await report.buildMaternityAgreggateRows(data.F.aggregate)).map((row) => ({
            ...row,
            location
          }))
        ];
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} | ${data.row.ageGroup} | ${toDisplayGenderFmt(data.row.gender)}s`;
    }
    function drillRowParser(data) {
      return data.row[data.column.path].map((patient) => ({
        ...patient,
        person_id: patient.patient_id
      }));
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "TPT New Initiation Report",
        "report-type": "MoH",
        columns,
        rows: rows.value,
        period: period.value,
        "drill-title": drilldownTitleBuilder,
        "custom-drill-columns": drillColumns,
        "drill-row-parser": drillRowParser,
        useDateRangeFilter: "",
        showIndices: "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
