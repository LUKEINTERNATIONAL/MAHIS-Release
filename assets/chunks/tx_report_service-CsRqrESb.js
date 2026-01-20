import { l as lodashExports } from './lodash-YnuECrwU.js';
import { R as ReportService } from '../index-C9DqaTYI.js';
import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';

const TX_ML_INDICATORS = ["Died", "IIT <3 mo", "IIT 3-5 mo", "IIT 6+ mo", "Transferred out", "Refused (Stopped)"];
const TX_TB_INDICATORS = {
  tx_curr: "TX_CURR",
  symptom_screen_alone: "Symptom Screen (alone)",
  cxr_screen: "CXR Screen",
  mwrd_screen: "mWRD Screen",
  sceen_pos_new: "New on ART/Screen Positive",
  sceen_neg_new: "New on ART/Screen Negative",
  sceen_pos_prev: "Already on ART/Screen Positive",
  sceen_neg_prev: "Already on ART/Screen Negative",
  started_tb_new: "Started TB RX_New on ART",
  started_tb_prev: "Started TB RX_Prev on ART"
};
const TX_MMD_INDICATORS = {
  less_than_three_months: "# of clients on <3 months of ARVs",
  three_to_five_months: "# of clients on 3 - 5 months of ARVs",
  greater_than_six_months: "# of clients on >= 6 months of ARVs"
};
const TX_HIV_HTN_INDICATORS = {
  tx_curr: "TX_CURR",
  ever_diagnosed_htn: "Ever diagnosed with HTN",
  screened_for_htn: "Screened for HTN",
  newly_diagnosed_htn: "Newly diagnosed with HTN",
  controlled_htn: "Controlled HTN"
};
class TxReportService extends ReportService {
  reportType;
  initialize;
  constructor() {
    super();
    this.reportType = "pepfar";
    this.initialize = true;
  }
  setReportType(reportType) {
    this.reportType = reportType;
  }
  setInitialize(initialize) {
    this.initialize = initialize;
  }
  async getTxCurrMMDReport(rebuild = false) {
    const data = await this.getReport(`programs/${this.programId}/reports/tx_curr_mmd`, {
      definition: this.reportType,
      rebuild
    });
    if (!data) return [];
    const aggregated = this.txMmdReportBuilder(data);
    const femaleAggregates = await this.buildMaternityAgreggateRows(aggregated.F.aggregate);
    return [...aggregated.F.rows, ...aggregated.M.rows, { ageGroup: "All", gender: "M", ...aggregated.M.aggregate }, ...femaleAggregates];
  }
  async getTxMlReport(rebuild) {
    const data = await this.getReport("tx_ml", { rebuild });
    if (!data) return [];
    const aggregated = this.txMlReportBuilder(data);
    const femaleAggregates = await this.buildMaternityAgreggateRows(aggregated.F.aggregate);
    return [...aggregated.F.rows, ...aggregated.M.rows, { ageGroup: "All", gender: "M", ...aggregated.M.aggregate }, ...femaleAggregates];
  }
  getTxRttReport(rebuild) {
    return this.getReport("tx_rtt", {
      rebuild
    });
  }
  getClinicTxRtt(rebuild) {
    return this.getReport(`programs/${this.programId}/reports/clinic_tx_rtt`, {
      rebuild
    });
  }
  async getTxTbReport(rebuild_outcome) {
    return this.getReport(`programs/${this.programId}/reports/tx_tb`, {
      rebuild_outcome
    });
  }
  getTxNewReport(rebuild) {
    return this.getReport(`programs/${this.programId}/reports/tx_new`, {
      rebuild
    });
  }
  async getTxHivHtnReport(rebuild) {
    const res = await this.getReport(`programs/${this.programId}/reports/tx_hiv_htn`, {
      rebuild
    });
    const flattedData = Object.entries(res).reduce(
      (result, [ageGroup, data]) => {
        if (!/Unknown|All/i.test(ageGroup)) {
          result.M.push({ ageGroup, gender: "Male", ...data["M"] });
          result.F.push({ ageGroup, gender: "Female", ...data["F"] });
        }
        return result;
      },
      { M: [], F: [] }
    );
    return [
      ...flattedData.F,
      ...flattedData.M,
      { ageGroup: "All", gender: "Male", ...res.All.Male },
      { ageGroup: "All", gender: "FP", ...res.All.FP },
      { ageGroup: "All", gender: "FNP", ...res.All.FNP },
      { ageGroup: "All", gender: "FBf", ...res.All.FBf }
    ];
  }
  mapTxMlIndcators(indicators) {
    return TX_ML_INDICATORS.reduce((row, indicator, index) => {
      row[indicator] = indicators[index] ?? [];
      return row;
    }, {});
  }
  txMlReportBuilder(data) {
    const result = {
      M: { rows: [], aggregate: {} },
      F: { rows: [], aggregate: {} }
    };
    AGE_GROUPS.forEach((ageGroup) => {
      ["F", "M"].forEach((gender) => {
        const row = this.mapTxMlIndcators(lodashExports.get(data, `${ageGroup}.${gender}`, []));
        result[gender].rows.push({ ageGroup, gender, ...row });
        this.aggregateIndicatorData(result, row, gender);
      });
    });
    return result;
  }
  aggregateIndicatorData(data, newData, gender) {
    Object.entries(newData).forEach(([indicator, values]) => {
      data[gender].aggregate[indicator] = [...values, ...data[gender].aggregate[indicator] ?? []];
    });
  }
  txMmdReportBuilder(data) {
    return Object.keys(data).reduce(
      (result, ageGroup) => {
        if (!/Unknown/i.test(ageGroup)) {
          const femaleIndicatorData = lodashExports.get(data, `${ageGroup}.Female`);
          result.F.rows.push({ ageGroup, gender: "F", ...femaleIndicatorData });
          this.aggregateIndicatorData(result, femaleIndicatorData, "F");
          const maleIndicatorData = lodashExports.get(data, `${ageGroup}.Male`);
          result.M.rows.push({ ageGroup, gender: "M", ...maleIndicatorData });
          this.aggregateIndicatorData(result, maleIndicatorData, "M");
        }
        return result;
      },
      {
        M: { rows: [], aggregate: {} },
        F: { rows: [], aggregate: {} }
      }
    );
  }
}

export { TxReportService as T, TX_MMD_INDICATORS as a, TX_ML_INDICATORS as b, TX_TB_INDICATORS as c, TX_HIV_HTN_INDICATORS as d };
