import { t as table, _ as _sfc_main$1, L as LA_TYPES, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-BGAb-lMD.js';
import { R as ReportTemplate } from './BaseTableReport-9CvxQF9x.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { q as defineComponent, bs as IonPage, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode } from './vendor-wM1cIaYi.js';
import { _ as _export_sfc } from '../index-BFnAVsh7.js';

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage },
  mixins: [_sfc_main$1],
  data: () => ({
    title: "Lumefantrine + Arthemether Report",
    rows: [],
    reportService: {},
    prescriptions: {},
    columns: [[
      table.thTxt("Types of LA"),
      table.thTxt("Prescribed"),
      table.thTxt("Dispensed")
    ]],
    customBtns: []
  }),
  created() {
    this.fields = this.getDateDurationFields();
    this.customBtns.push({
      name: "Print",
      size: "large",
      slot: "start",
      color: "primary",
      visible: true,
      onClick: async () => this.reportService.printLaReport(this.prescriptions)
    });
  },
  methods: {
    async init(_, config) {
      this.reportService = new OpdReportService();
      this.reportService.setStartDate(config.start_date);
      this.reportService.setEndDate(config.end_date);
      this.period = this.reportService.getDateIntervalPeriod();
      this.prescriptions = await this.reportService.getLaPrescriptions();
      this.rows = this.buildRows(this.prescriptions);
    },
    buildRows(data) {
      if (lodashExports.isEmpty(data)) return [];
      return Object.keys(LA_TYPES).map((key) => [
        table.td(LA_TYPES[key]),
        table.td(data[`total_la_${key}_prescribed_drugs`]),
        table.td(data[`total_la_${key}_dispensed_drugs`])
      ]);
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_report_template = resolveComponent("report-template");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_report_template, {
        title: _ctx.title,
        rows: _ctx.rows,
        fields: _ctx.fields,
        columns: _ctx.columns,
        period: _ctx.period,
        reportPrefix: "Clinic",
        onReportConfiguration: _ctx.init,
        customBtns: _ctx.customBtns
      }, null, 8, ["title", "rows", "fields", "columns", "period", "onReportConfiguration", "customBtns"])
    ]),
    _: 1
  });
}
const LaReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { LaReport as default };
