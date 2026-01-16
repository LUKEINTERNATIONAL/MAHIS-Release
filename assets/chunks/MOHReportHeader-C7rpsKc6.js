import { H as HisTable, t as table } from './ReportMixin.vue_vue_type_script_lang-CLsnRw7O.js';
import { q as defineComponent, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode } from './vendor-DUNDjU_C.js';
import { _ as _export_sfc } from '../index-77Br-hAb.js';

const _sfc_main = defineComponent({
  components: { ReportTable: HisTable },
  props: {
    clinicName: {
      type: String,
      default: ""
    },
    reportparams: {
      type: Object,
      required: true
    },
    totalOPDVisits: {
      type: Number,
      required: true
    },
    reportName: {
      type: String,
      required: true
    },
    periodLabel: {
      type: String,
      required: true
    },
    periodDates: {
      type: String,
      required: true
    },
    rangeLabel: {
      type: String,
      required: true
    },
    range: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      tableCssTheme: "opd-report-theme",
      rows: [],
      columns: [
        [
          table.thTxt(this.reportName, {
            colspan: 2,
            sortable: false,
            exportable: false
          })
        ]
      ]
    };
  },
  mounted() {
    this.initTable();
  },
  watch: {
    totalOPDVisits() {
      this.initTable();
    }
  },
  methods: {
    initTable() {
      const rows = [];
      const tableHeaders = [
        {
          name: "Country:",
          value: "Malawi"
        },
        {
          name: "Reporting Facility Name:",
          value: this.clinicName
        },
        {
          name: this.rangeLabel + ":",
          value: this.range
        },
        {
          name: this.periodLabel + ":",
          value: this.periodDates
        },
        {
          name: "Total OPD Visits:",
          value: this.totalOPDVisits
        }
      ];
      tableHeaders.forEach((item) => {
        if (item.name !== "undefined:") {
          rows.push([
            table.td(item.name, { style: { textAlign: "left" } }),
            table.td(item.value, { style: { textAlign: "left" } })
          ]);
        }
      });
      this.rows = rows;
    }
  }
});

const _hoisted_1 = { style: { "margin": "auto", "width": "95%", "margin-top": "1%" } };
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
const HmisHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { HmisHeader as H };
