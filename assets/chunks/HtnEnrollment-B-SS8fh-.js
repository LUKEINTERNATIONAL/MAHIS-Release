import { cr as _sfc_main$1, aP as loader, aO as toastWarning, cq as toDisplayGenderFmt } from '../index-COGk33Kr.js';
import { P as ProgramReportService } from './program_report_service-CFWH5kl9.js';
import { s as defineComponent, y as openBlock, O as createBlock, f as ref } from './vendor-CIi-jrCy.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HtnEnrollment",
  setup(__props) {
    const period = ref("-");
    const rows = ref([]);
    const columns = [
      { path: "index", label: "#" },
      { path: "indicator", label: "Indicator", tdStyles: { textAlign: "left" } },
      { path: "reporting_period", label: "reporting Period", drillable: true },
      { path: "cummulative", label: "Cumulatively", drillable: true }
    ];
    const enrollmentIndicators = {
      registered_with_hypertension: "Patients registered with hypertension",
      enrolled_and_active_in_care: "HTN Patients enrolled and active in care",
      who_have_defaulted_during_the_reporting_period: "HTN patients who have defaulted during the reporting period",
      who_have_died: "HTN patients who have died",
      who_have_transferred_out: "HTN patients who have transferred out",
      who_have_stopped_htn_care: "HTN patients who have stopped HTN care",
      with_a_visit_in_last_3_months: "HTN patients with a visit in the last 3 months",
      with_a_visit_in_last_3_months_who_have_a_bp_measurement_recorded: "HTN patients with a visit in the last 3 months who have a BP measurement recorded",
      with_a_visit_in_last_3_months_who_have_bp_below_140_90: "HTN patients with a visit in the last 3 months who have BP below 140/90"
    };
    const treatmentDrugClassification = {
      diuretics: "Diuretics",
      beta_blockers: "Beta Blockers",
      calcium_channel_blockers: "Calcium Channel Blockers",
      angiotensin2_receptor_blockers: "Angiotensin 2 Receptor Blockers (ARBs)",
      vasodilators: "Vasodilators",
      others: "Others"
    };
    async function fetchData(filters) {
      try {
        await loader.show();
        const report = new ProgramReportService();
        report.setStartDate(filters.dateRange.startDate);
        report.setEndDate(filters.dateRange.endDate);
        report.setOccupation(filters.occupation);
        period.value = report.getDateIntervalPeriod();
        const data = await report.generate("HTN_ENROLLMENT");
        rows.value = buildReportRows(data);
        console.log(rows.value);
      } catch (error) {
        toastWarning("ERROR! Unable to load report data");
        console.error(error);
      }
      await loader.hide();
    }
    function buildReportRows(data) {
      const rows2 = [{
        index: void 0,
        indicator: "HYPERTENSION (HTN) ENROLLMENT",
        reporting_period: void 0,
        cummulative: void 0
      }];
      Object.entries(enrollmentIndicators).forEach(([key, value], index) => {
        rows2.push({
          index: index + 1,
          indicator: value,
          ...data["htn_enrollment"][key]
        });
      });
      rows2.push({
        index: void 0,
        indicator: "TREATMENT BASED ON HTN DRUG CLASSIFICATION",
        reporting_period: void 0,
        cummulative: void 0
      });
      Object.entries(treatmentDrugClassification).forEach(([key, value], index) => {
        rows2.push({
          index: index + 1,
          indicator: value,
          ...data.treatment_drug_classification[key]
        });
      });
      return rows2;
    }
    function drilldownTitleBuilder(data) {
      return `${data.column.label} | ${data.row.age_group} | ${toDisplayGenderFmt(data.row.tpt_type)}`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: "HTN Enrollment Clinic Report",
        "report-type": "Clinic",
        columns,
        rows: rows.value,
        period: period.value,
        "drill-title": drilldownTitleBuilder,
        "use-date-range-filter": "",
        onGenerate: fetchData
      }, null, 8, ["rows", "period"]);
    };
  }
});

export { _sfc_main as default };
