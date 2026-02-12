import { _ as _sfc_main$1, t as table, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-CMAj61sh.js';
import { R as ReportTemplate } from './BaseTableReport-BVXLIIDK.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';
import { s as defineComponent, bu as IonPage, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-DrpjccQs.js';
import { _ as _export_sfc } from '../index-B9nzT5-y.js';

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage },
  mixins: [_sfc_main$1],
  data: () => ({
    title: "OPD diagnosis by address report",
    rows: [],
    reportService: {},
    columns: [
      [
        table.thTxt("Address"),
        table.thTxt("Diagnosis"),
        table.thTxt("Count")
      ]
    ]
  }),
  created() {
    this.fields = this.getDateDurationFields();
  },
  methods: {
    async init(_, config) {
      this.reportService = new OpdReportService();
      this.reportService.setStartDate(config.start_date);
      this.reportService.setEndDate(config.end_date);
      this.period = this.reportService.getDateIntervalPeriod();
      this.rows = this.buildRows(await this.reportService.getDiagnosisByAddress());
    },
    totalDiagnosis(diagnosis) {
      return Object.values(diagnosis).reduce((a, b) => a + b, 0);
    },
    buildRows(data) {
      const rows = [];
      if (lodashExports.isEmpty(data)) return rows;
      for (const diagnosis in data) {
        for (const address in data[diagnosis]) {
          rows.push([
            table.td(address),
            table.td(diagnosis),
            table.td(data[diagnosis][address])
          ]);
        }
      }
      return rows;
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
        onReportConfiguration: _ctx.init
      }, null, 8, ["title", "rows", "fields", "columns", "period", "onReportConfiguration"])
    ]),
    _: 1
  });
}
const DiagnosisByAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { DiagnosisByAddress as default };
