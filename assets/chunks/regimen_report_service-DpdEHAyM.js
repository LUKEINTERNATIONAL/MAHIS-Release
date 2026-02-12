import { a as REGIMEN_WEIGHT_DISTRIBUTION } from './regimens-C7xPp0bP.js';
import { R as ReportService } from '../index-CzDIs3ea.js';

class RegimenReportService extends ReportService {
  type;
  constructor() {
    super();
    this.type = "pepfar";
  }
  setReportType(type) {
    this.type = type;
  }
  getTptNewInitiations() {
    return this.getReport(`programs/${this.programId}/reports/tpt_newly_initiated`);
  }
  getRegimenFormulationReport(regimen, formulation) {
    return this.getReport(`programs/${this.programId}/reports/regimens_and_formulations`, { regimen, formulation });
  }
  async getRegimenReport() {
    const data = await this.getReport("regimen_report", { type: this.type });
    return this.regimenReportBuilder(data);
  }
  async getRegimenSwitchReport() {
    const data = await this.getReport("regimen_switch", { pepfar: this.isPepfar() });
    return this.regimenReportBuilder(data);
  }
  regimenReportBuilder(data) {
    return Object.values(data ?? {}).map((d) => {
      let dispensationDate = "";
      const medications = d.medication.map((m) => {
        dispensationDate = m.start_date;
        return `${m.medication} (${m.quantity})`;
      });
      return {
        ...d,
        dispensation_date: dispensationDate,
        medications: medications.join(", ")
      };
    });
  }
  regimenDistributionRowBuilder(weight, gender, data) {
    const row = { weight, gender, total: 0 };
    return [...REGIMEN_WEIGHT_DISTRIBUTION, "N/A"].reduce((row2, regimen) => {
      const regimenData = data.find((d) => !!d[regimen]);
      if (regimenData) {
        row2[regimen] = regimenData[regimen];
        row2.total += regimenData[regimen];
      } else {
        row2[regimen] = 0;
      }
      return row2;
    }, row);
  }
  async getRegimensByWeight() {
    const data = await this.getReport(`programs/${this.programId}/reports/regimens_by_weight_and_gender`);
    const males = [];
    const females = [];
    data?.forEach((curr) => {
      females.push(this.regimenDistributionRowBuilder(curr.weight, "F", curr.females));
      males.push(this.regimenDistributionRowBuilder(curr.weight, "M", curr.males));
    });
    return [...females, ...males];
  }
  getSCReport() {
    return this.getReport("sc_arvdisp", { pepfar: this.isPepfar() });
  }
  isPepfar() {
    return /pepfar/i.test(this.type);
  }
  async getRegimenDispensationReport(rebuild_outcome) {
    const data = [];
    const res = await this.getReport("latest_regimen_dispensed", { rebuild_outcome });
    if (!res) return [];
    for (const patientID in res) {
      for (const orderID in res[patientID]) {
        const d = res[patientID][orderID];
        data.push({
          identifier: d.identifier,
          drugName: d.name,
          gender: d.gender,
          dob: d.birthdate,
          dispensationDate: d["dispensation_date"],
          packSize: d["pack_sizes"][0],
          packSizes: d["pack_sizes"].length,
          quantity: d.quantity,
          vlResult: d["vl_latest_result"],
          vlResultDate: d.vl_latest_result_date,
          vlOrderDate: d.vl_latest_order_date
        });
      }
    }
    return data;
  }
}

export { RegimenReportService as R };
