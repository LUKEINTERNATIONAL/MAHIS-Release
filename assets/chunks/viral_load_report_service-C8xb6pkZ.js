import { A as AGE_GROUPS } from './age_groups-DkLe6F43.js';
import { R as REGIMENS } from './regimens-C7xPp0bP.js';
import { R as ReportService } from '../index-BlafVMNh.js';
import { l as lodashExports } from './lodash-CxXqq_k7.js';

const TX_PVLS_INDICATORS = {
  "tx_curr": "TX_CURR",
  "due_for_vl": "Due for VL",
  "drawn_routine": "Routine (Sample Drawn)",
  "drawn_targeted": "Targeted (Sample Drawn)",
  "high_vl_routine": "Routine (High VL (>=1000 copies))",
  "high_vl_targeted": "Targeted (High VL (>=1000 copies))",
  "low_vl_routine": "Routine (Low VL (<1000 copies))",
  "low_vl_targeted": "Targeted (Low VL (<1000 copies))"
};
class ViralLoadReportService extends ReportService {
  constructor() {
    super();
  }
  getVlCollection() {
    return this.getReport(`programs/${this.programId}/reports/vl_collection`);
  }
  async getTxPVLS(params = {}) {
    const data = await this.getReport(`programs/${this.programId}/reports/viral_load_coverage`, {
      "rebuild_outcomes": true,
      ...params
    });
    if (!data) return [];
    const aggregated = this.txPVLSBuilder(data);
    const aggregatedFemales = await this.buildMaternityAgreggateRows(aggregated.F.aggregate);
    return [
      ...aggregated.F.rows,
      ...aggregated.M.rows,
      {
        ...aggregated.M.aggregate,
        ageGroup: "All",
        gender: "M"
      },
      ...aggregatedFemales
    ];
  }
  async getViralLoad(params = {}) {
    const data = await this.getReport(`programs/${this.programId}/reports/vl_disaggregated`, params);
    return this.vlReportBuilder(data);
  }
  flattenTxPVLSData(data) {
    return Object.entries(data).reduce((result, [indicator, data2]) => {
      if (Array.isArray(data2)) {
        result[indicator] = data2;
      } else {
        result[`${indicator}_routine`] = data2.routine;
        result[`${indicator}_targeted`] = data2.targeted;
      }
      return result;
    }, {});
  }
  txPVLSBuilder(data) {
    return Object.entries(data ?? {}).reduce((result, [ageGroup, disagData]) => {
      if (ageGroup !== "Unknown") {
        Object.entries(disagData).forEach(([g, indicators]) => {
          const gender = g;
          const indicatorsData = this.flattenTxPVLSData(indicators);
          result[gender].rows.push({ ageGroup, gender, ...indicatorsData });
          Object.entries(indicatorsData).forEach(([indicator, values]) => {
            result[gender].aggregate[indicator] = [
              ...result[gender].aggregate[indicator] ?? [],
              ...values ?? []
            ];
          });
        });
      }
      return result;
    }, {
      M: { rows: [], aggregate: {} },
      F: { rows: [], aggregate: {} }
    });
  }
  vlReportBuilder(data) {
    return AGE_GROUPS.map((ageGroup) => {
      return [...REGIMENS, "N/A"].reduce((row, regimen) => {
        row[regimen] = lodashExports.get(data, `${ageGroup.replace("-", " - ")}.${regimen}`, 0);
        return row;
      }, { ageGroup });
    });
  }
}

export { TX_PVLS_INDICATORS as T, ViralLoadReportService as V };
