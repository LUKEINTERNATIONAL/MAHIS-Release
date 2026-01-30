import { _ as _sfc_main$1, M as MENTAL_HEALTH_DIAGNOSIS, t as table, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-BaUKSR1o.js';
import { R as ReportTemplate } from './BaseTableReport-CHEaIxbC.js';
import { s as defineComponent, bu as IonPage, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-D7CYpxMc.js';
import { _ as _export_sfc } from '../index-DB91Rv2f.js';

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage },
  mixins: [_sfc_main$1],
  data: () => ({
    title: "Mental health report",
    rows: [],
    reportService: {},
    columns: [
      [
        table.thTxt("", {
          sortable: false,
          exportable: false
        }),
        table.thTxt("New cases", {
          colspan: 4,
          sortable: false,
          exportable: false
        }),
        table.thTxt("Subsequent cases", {
          colspan: 4,
          sortable: false,
          exportable: false
        })
      ],
      [
        table.thTxt("Diagnosis"),
        table.thTxt("Male (0-15 years)", { value: "Males (0-15 years New Cases)" }),
        table.thTxt("Male (>=16 years)", { value: "Males (>=16 years New Cases)" }),
        table.thTxt("Female (0-15 years)", { value: "Females (0-15 years New Cases)" }),
        table.thTxt("Female (>=16 years)", { value: "Females (>=16 years New Cases)" }),
        table.thTxt("Male (0-15 years)", { value: "Males (0-15 years Subsequent Cases)" }),
        table.thTxt("Male (>=16 years)", { value: "Males (>=16 years Subsequent Cases)" }),
        table.thTxt("Female (0-15 years)", { value: "Females (0-15 years Subsequent Cases)" }),
        table.thTxt("Female (>=16 years)", { value: "Females (>=16 years Subsequent Cases)" })
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
      this.rows = this.buildRows();
    },
    buildRows() {
      return MENTAL_HEALTH_DIAGNOSIS.map((diagnosis) => [
        table.td(diagnosis, { style: { textAlign: "left" } }),
        table.td(""),
        table.td(""),
        table.td(""),
        table.td(""),
        table.td(""),
        table.td(""),
        table.td(""),
        table.td("")
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
        onReportConfiguration: _ctx.init
      }, null, 8, ["title", "rows", "fields", "columns", "period", "onReportConfiguration"])
    ]),
    _: 1
  });
}
const MentalHealth = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { MentalHealth as default };
