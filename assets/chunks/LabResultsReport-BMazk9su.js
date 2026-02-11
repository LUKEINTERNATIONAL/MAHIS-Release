import { R as ReportService, cG as LAB_PROGRAM_ID, cr as getSelectButton, cq as _sfc_main$1, aP as loader, aO as toastWarning, cp as toDisplayGenderFmt, cs as parseARVNumber, cd as toDisplayFmt } from '../index-DALWhtZ-.js';
import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed } from './vendor-DrpjccQs.js';

class LabReportService extends ReportService {
  constructor() {
    super();
    this.programId = LAB_PROGRAM_ID;
  }
  buildLabPatientLevelData(data) {
    return data.flatMap((result) => result.measures.map((measure) => ({
      ...result,
      test_name: measure.name,
      result: `${measure.modifier} ${measure.value}`
    })));
  }
  buildLabResultRowData(data, ageGroup, gender) {
    const viral_load = data.filter((p) => p.gender === gender && p.age_group === ageGroup).map(({ patient_id }) => patient_id);
    return {
      ageGroup,
      gender,
      viral_load
    };
  }
  buildLabDisaggregatedData(data) {
    const males = [];
    const females = [];
    AGE_GROUPS.forEach((ageGroup) => {
      males.push(this.buildLabResultRowData(data, ageGroup, "M"));
      females.push(this.buildLabResultRowData(data, ageGroup, "F"));
    });
    return [
      ...females,
      ...males
    ];
  }
  async getLabResultReport() {
    const data = await this.getReport("lab_test_results");
    if (!data) return {};
    const patientLevelData = this.buildLabPatientLevelData(data);
    const disaggregatedData = this.buildLabDisaggregatedData(patientLevelData);
    return {
      patientLevelData,
      disaggregatedData
    };
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabResultsReport",
  setup(__props) {
    const period = ref("-");
    const type = ref("");
    const rowActionBtns = [getSelectButton("patient_id")];
    const tests = ref({});
    const rows = computed(() => {
      if (lodashExports.isEmpty(tests.value)) return [];
      return type.value === "disaggregated" ? tests.value.disaggregatedData : tests.value.patientLevelData;
    });
    const columns = computed(
      () => type.value === "disaggregated" ? [
        { path: "ageGroup", label: "Age Group" },
        { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
        { path: "viral_load", label: "HIV viral load", drillable: true }
      ] : [
        { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
        { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
        { path: "birthdate", label: "Birthdate", formatter: toDisplayFmt },
        { path: "order_date", label: "Ordered", formatter: toDisplayFmt },
        { path: "test", label: "Specimen" },
        { path: "test_name", label: "Test" },
        { path: "result", label: "Result" },
        { path: "result_date", label: "Released", formatter: toDisplayFmt }
      ]
    );
    const customFilters = computed(() => [
      {
        id: "type",
        label: "Select report type",
        required: false,
        type: "select",
        options: [
          { label: "Disaggregated", value: "disaggregated" },
          { label: "Patient level", value: "patient_level" }
        ],
        onUpdate: (v) => {
          type.value = v.value;
        }
      }
    ]);
    async function fetchData(filters) {
      await loader.show();
      try {
        const report = new LabReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        tests.value = await report.getLabResultReport();
      } catch (error) {
        toastWarning("Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "report-type": "Clinic",
        title: "Lab Test Result(s) Report",
        columns: columns.value,
        rows: rows.value,
        period: period.value,
        "row-action-buttons": rowActionBtns,
        "custom-filters": customFilters.value,
        "use-date-range-filter": "",
        "use-secure-export": "",
        onGenerate: fetchData
      }, null, 8, ["columns", "rows", "period", "custom-filters"]);
    };
  }
});

export { _sfc_main as default };
