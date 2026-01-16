import { H as HisTable, t as table, I as IDSRReportService } from './ReportMixin.vue_vue_type_script_lang-D-3ScXVM.js';
import { S as Service, _ as _export_sfc } from '../index-I4g3KlCH.js';
import { q as defineComponent, l as dayjs, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode } from './vendor-wM1cIaYi.js';

const _sfc_main = defineComponent({
  components: { ReportTable: HisTable },
  data: function() {
    return {
      conditions: [],
      lessThanFiveYears: " < 5 yrs ",
      greaterAndEqualFiveYears: " >= 5 yrs ",
      total: " Total ",
      tableCssTheme: "opd-report-theme",
      rows: [],
      columns: [
        [
          table.thTxt("", {
            colspan: 2,
            sortable: false,
            exportable: false
          }),
          table.thTxt("Out-patient Cases", {
            colspan: 3,
            sortable: false,
            exportable: false
          })
        ],
        [table.thTxt(""), table.thTxt("Diseases/Events/Conditions"), table.thTxt("< 5 yrs"), table.thTxt(">= 5 yrs"), table.thTxt("Total")]
      ]
    };
  },
  props: ["params", "periodDates", "quarter", "onDrillDown"],
  methods: {
    renderResults() {
      const report = new IDSRReportService();
      const Conditions = report.renderResults(this.params);
      if (Conditions.length) {
        this.conditions = Conditions;
        this.rows = this.buildRows(Conditions);
      }
    },
    onDownload(reportTitle = "") {
      const report = new IDSRReportService();
      let { CSVString } = report.getCSVString(this.conditions);
      CSVString += `
          Date Created: ${dayjs().format("DD/MMM/YYYY HH:MM:ss")}
          MaHIS Version: ${Service.getCoreVersion()}
          API Version: ${Service.getApiVersion()}
          Report Period: ${this.periodDates}
          Site: ${Service.getLocationName()}
          Site UUID: ${Service.getSiteUUID()}`;
      const csvData = new Blob([CSVString], { type: "text/csv;charset=utf-8;" });
      const _navigator_ = navigator;
      if (_navigator_.msSaveBlob) {
        _navigator_.msSaveBlob(csvData, "exportFilename");
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
      data.forEach(
        (condition) => {
          rows.push([
            table.td(condition.id, { style: { textAlign: "left" } }),
            table.td(condition.name, { style: { textAlign: "left" } }),
            this.buildRow(
              this.lessThanFiveYears + "(" + condition.name + ")",
              condition.lessThanFiveYears,
              condition.lessThanFiveYearsPatientIds
            ),
            this.buildRow(
              this.greaterAndEqualFiveYears + "(" + condition.name + ")",
              condition.greaterThanEqualFiveYears,
              condition.greaterThanEqualFiveYearsPatientIds
            ),
            this.buildRow(this.total + "(" + condition.name + ")", condition.total, condition.totalPatientIds)
          ]);
        }
      );
      return rows;
    },
    buildRow(name, count, patientIds) {
      if (typeof count == "string") {
        return table.td("");
      }
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
const Monthly = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Monthly as M };
