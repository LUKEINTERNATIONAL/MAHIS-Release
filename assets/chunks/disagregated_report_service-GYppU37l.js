import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';
import { P as ProgramReportService } from './program_report_service-Dv1Uzb2U.js';

class DisaggregatedReportService extends ProgramReportService {
  gender;
  ageGroup;
  constructor() {
    super();
    this.gender = "";
    this.ageGroup = AGE_GROUPS[0];
  }
  setAgeGroup(ageGroup) {
    this.ageGroup = ageGroup;
  }
  setGender(gender) {
    this.gender = gender;
  }
  getGender() {
    return this.gender;
  }
  getTxIpt() {
    return this.getReport("clients_given_ipt", {
      "gender": this.gender,
      "age_group": this.ageGroup
    });
  }
  getTxCurrTB() {
    return this.getReport("screened_for_tb", {
      "gender": this.gender,
      "age_group": this.ageGroup
    });
  }
  getRegimenDistribution() {
    return this.getReport("disaggregated_regimen_distribution", {
      "gender": this.gender,
      "age_group": this.ageGroup
    });
  }
  async getDisaggReport(rebuild = false, definition = "moh") {
    const data = await this.generate(`cohort_disaggregated`, {
      rebuild,
      definition
    });
    return this.buildDisagRowData(data);
  }
  buildDisagRowData(data) {
    const sortedData = data.reduce((acc, curr) => {
      if (/unknown/i.test(curr.age_group)) return acc;
      acc[curr.gender].push(curr);
      return acc;
    }, { M: [], F: [], FP: [], FBf: [], FNP: [] });
    return [
      ...sortedData.F,
      ...sortedData.M,
      ...sortedData.FP,
      ...sortedData.FNP,
      ...sortedData.FBf
    ];
  }
}

export { DisaggregatedReportService as D };
