import { t as table, _ as _sfc_main$1, N as NCD_TYPES, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-Dy_NkJGN.js';
import { R as ReportTemplate } from './BaseTableReport-D_jXzfUK.js';
import { q as defineComponent, bs as IonPage, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode } from './vendor-sqYZJ6fK.js';
import { _ as _export_sfc } from '../index-_N7CIn5p.js';

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage },
  mixins: [_sfc_main$1],
  data: () => ({
    title: "Cases seen report",
    rows: [],
    reportService: {},
    columns: [
      [
        table.thTxt("", {
          sortable: false,
          exportable: false
        }),
        table.thTxt("New cases", {
          colspan: 2,
          sortable: false,
          exportable: false
        }),
        table.thTxt("All cases", {
          colspan: 2,
          sortable: false,
          exportable: false
        })
      ],
      [
        table.thTxt("NCD type"),
        table.thTxt("Male", { value: "Male (New Cases)" }),
        table.thTxt("Female", { value: "Female (New Cases)" }),
        table.thTxt("Male", { value: "Male (All Cases)" }),
        table.thTxt("Female", { value: "Female (All Cases)" })
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
      return NCD_TYPES.map((type) => [
        table.td(type, { style: { textAlign: "left" } }),
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
const ClinicCasesSeen = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ClinicCasesSeen as default };
