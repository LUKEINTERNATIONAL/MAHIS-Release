import { R as ReportService, cD as sortBy } from '../index-BBSKuWmW.js';
import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';
import { l as lodashExports } from './lodash-BxWMU_OR.js';

const TPT_INITIATION_INDICATORS = {
  "3HP_new": "3H (Started New on ART)",
  "6H_new": "6H (Started New on ART)",
  "3HP_prev": "3H (Started Previously on ART)",
  "6H_prev": "6H (Started Previously on ART)"
};
const TPT_OUTCOMES_INDICATORS = {
  started_tpt_new: "Started TPT (New on ART)",
  started_tpt_prev: "Started TPT (Previous on ART)",
  completed_tpt_new: "Completed TPT(New on ART)",
  completed_tpt_prev: "Completed TPT(Previous on ART)",
  not_completed_tpt: "Not completed TPT",
  died: "Died",
  defaulted: "Defaulted",
  stopped: "Stopped ART",
  transfer_out: "Transfered Out",
  confirmed_tb: "Confirmed TB",
  pregnant: "Pregnant",
  breast_feeding: "Breastfeeding",
  skin_rash: "Skin rash",
  peripheral_neuropathy: "Peripheral neuropathy",
  yellow_eyes: "Yellow eyes",
  nausea: "Nausea",
  dizziness: "Dizziness"
};
class TptReportService extends ReportService {
  constructor() {
    super();
  }
  async getTtpOutcomes() {
    const data = await this.getReport(`programs/${this.programId}/reports/tpt_outcome`) ?? [];
    const aggregatedData = this.aggregateTptOutcomes(data);
    const aggregatefemales = this.getTotalTptOutcomeFemales(aggregatedData.females);
    const sortedData = sortBy(this.tptOutcomesBuilder(data), "tpt_type");
    return [...sortedData, { age_group: "All", tpt_type: "M", ...aggregatedData.males }, ...aggregatefemales];
  }
  async getCohort() {
    const data = await this.getReport("moh_tpt");
    return sortBy(data ?? [], "gender");
  }
  async getTptNewInitiations() {
    return this.tptInitiationBuilder(await this.getReport(`programs/${this.programId}/reports/tpt_newly_initiated`));
  }
  tptOutcomesBuilder(data) {
    return data.map(
      (d) => Object.entries(d).reduce((row, [key, value]) => {
        row[key] = typeof value === "string" ? value : value.map(({ patient_id }) => patient_id);
        return row;
      }, {})
    );
  }
  getTotalTptOutcomeFemales(data) {
    return ["FP", "FNP", "FBf"].map((gender) => {
      const row = { age_group: "All", tpt_type: gender };
      for (const i in TPT_OUTCOMES_INDICATORS) {
        row[i] = data[i].filter((patient) => {
          if (gender === "FP") return data.pregnant.includes(patient);
          if (gender === "FBf") return data.breast_feeding.includes(patient);
          return ![...data.pregnant, data.breast_feeding].includes(patient);
        });
      }
      return row;
    });
  }
  aggregateTptOutcomes(data) {
    return data.reduce(
      (acc, curr) => {
        for (const i in TPT_OUTCOMES_INDICATORS) {
          if (!(i in acc.males)) acc.males[i] = [];
          if (!(i in acc.females)) acc.females[i] = [];
          if (lodashExports.isEmpty(curr[i])) continue;
          curr[i].forEach((d) => {
            if (d.gender === "F") acc.females[i].push(d.patient_id);
            else acc.males[i].push(d.patient_id);
          });
        }
        return acc;
      },
      { males: {}, females: {} }
    );
  }
  aggregateTptInitiationData(gender, indicator, data, result) {
    result[gender].aggregate[indicator] = [...result[gender].aggregate[indicator] ?? [], ...data];
  }
  tptInitiationBuilder(data = {}) {
    const defaultData = {
      M: { rows: [], aggregate: {} },
      F: { rows: [], aggregate: {} }
    };
    return AGE_GROUPS.reduce((result, ageGroup) => {
      const rows = Object.entries(data[ageGroup]).reduce(
        (row, [indicator, disag]) => {
          this.aggregateTptInitiationData("M", indicator, disag.M, result);
          this.aggregateTptInitiationData("F", indicator, disag.F, result);
          row.M[indicator] = disag.M;
          row.F[indicator] = disag.F;
          return row;
        },
        {
          M: { gender: "M", location: data.Location, ageGroup },
          F: { gender: "F", location: data.Location, ageGroup }
        }
      );
      result.F.rows.push(rows.F);
      result.M.rows.push(rows.M);
      return result;
    }, defaultData);
  }
}

export { TptReportService as T, TPT_INITIATION_INDICATORS as a, TPT_OUTCOMES_INDICATORS as b };
