import { O as OpdReportService, H as HisTable, t as table } from './ReportMixin.vue_vue_type_script_lang-nwBJXHoA.js';
import { S as Service, _ as _export_sfc } from '../index-CPakPmy3.js';
import { s as defineComponent, p as dayjs, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode } from './vendor-CIi-jrCy.js';

class HMISReportService extends OpdReportService {
  regenerate;
  constructor() {
    super();
    this.regenerate = false;
  }
  setRegenerate(regenerate) {
    this.regenerate = regenerate;
  }
  requestHMIS15() {
    return this.getReport("generate_hmis_15_report", {
      request: "true"
    });
  }
  requestHMIS17() {
    return this.getReport("generate_hmis_17_report", {
      request: "true"
    });
  }
  renderResults(params) {
    const all = [];
    let count = 1;
    for (const [key, value] of Object.entries(params)) {
      const temp = [];
      const condition = value;
      const item = {
        id: 0,
        name: "",
        total: 0,
        totalPatientIds: ""
      };
      item.name = key;
      let total = 0;
      item.id = count;
      count += 1;
      for (const [key1, value1] of Object.entries(condition)) {
        const conditionDetails = value1;
        if (conditionDetails != null) {
          total += conditionDetails.length;
          item.total = total;
          if (conditionDetails.length) {
            temp.push(...conditionDetails);
            item.totalPatientIds = temp;
          }
        }
      }
      all.push(item);
    }
    return all;
  }
  getCSVString(IDSRConditionsObj) {
    let CSVString = `Diseases/Events/Conditions, #,
`;
    for (const condition of IDSRConditionsObj) {
      const row = `${condition.name},${condition.total},
`;
      CSVString += row;
    }
    return { CSVString };
  }
}

const _sfc_main = defineComponent({
  components: { ReportTable: HisTable },
  data: function() {
    return {
      conditions: [],
      tableCssTheme: "opd-report-theme",
      total: " Total ",
      rows: [],
      columns: [
        [table.thTxt(""), table.thTxt("Diseases/Events/Conditions"), table.thTxt("UNVERIFIED"), table.thTxt("VERIFIED")]
      ]
    };
  },
  props: ["params", "periodDates", "quarter", "onDrillDown", "reportName"],
  methods: {
    renderResults() {
      const report = new HMISReportService();
      const Conditions = report.renderResults(this.params);
      if (Conditions.length) {
        this.conditions = Conditions;
        this.rows = this.buildRows(Conditions);
      }
    },
    onDownload(reportTitle = "") {
      const report = new HMISReportService();
      let { CSVString } = report.getCSVString(this.conditions);
      CSVString += `
          Date Created: ${dayjs().format("DD/MMM/YYYY HH:MM:ss")}
          MaHIS Version: ${Service.getCoreVersion()}
          API Version: ${Service.getApiVersion()}
          Report Period: ${this.periodDates}
          Site: ${Service.getLocationName()}
          Site UUID: ${Service.getSiteUUID()}`;
      const csvData = new Blob([CSVString], { type: "text/csv;charset=utf-8;" });
      const _navigator_cp = navigator;
      if (_navigator_cp.msSaveBlob) {
        _navigator_cp.msSaveBlob(csvData, "exportFilename");
      } else {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(csvData);
        link.setAttribute("download", `${reportTitle}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    buildRows(data) {
      const rows = [];
      data.forEach((condition) => {
        rows.push([
          table.td(condition.id, { style: { textAlign: "left" } }),
          table.td(condition.name, { style: { textAlign: "left" } }),
          this.buildRow(this.total + "(" + condition.name + ")", condition.total, condition.totalPatientIds),
          table.td("")
        ]);
      });
      return rows;
    },
    buildRow(name, count, patientIds) {
      if (!(count > 0)) {
        return table.td(0);
      } else {
        return table.tdLink(count, async () => this.onDrillDown(name, patientIds));
      }
    }
  },
  watch: {
    params: {
      immediate: true,
      handler() {
        this.renderResults();
      }
    }
  }
});

const _hoisted_1 = {
  class: "my-table",
  style: { "margin": "auto", "width": "95%", "margin-top": "3%", "margin-bottom": "3%" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_report_table = resolveComponent("report-table");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_report_table, {
      columns: _ctx.columns,
      rows: _ctx.rows,
      config: { tableCssTheme: _ctx.tableCssTheme }
    }, null, 8, ["columns", "rows", "config"])
  ]);
}
const HmisTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { HmisTemplate as H, HMISReportService as a };
