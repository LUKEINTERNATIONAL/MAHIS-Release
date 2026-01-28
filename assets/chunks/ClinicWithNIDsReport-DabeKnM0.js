import { _ as _sfc_main$1, t as table, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-zn5j392c.js';
import { R as ReportTemplate } from './BaseTableReport-By7lVh_A.js';
import { H as HisDate, _ as _export_sfc } from '../index-C75YE_tE.js';
import { s as defineComponent, bt as IonPage, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-BIA1Qh8a.js';

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage },
  mixins: [_sfc_main$1],
  data: () => ({
    title: "Clients / Patients with NIDs",
    rows: [],
    reportService: {},
    columns: [
      [
        table.thTxt("NID"),
        table.thTxt("First Name"),
        table.thTxt("Last Name"),
        table.thTxt("Gender"),
        table.thTxt("DOB"),
        table.thTxt("Date Reg."),
        table.thTxt("Address")
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
      this.rows = this.buildRows(await this.reportService.getPatientsWithNIDs());
    },
    buildRows(data) {
      if (!data.length) return [];
      return data.map((record) => [
        table.td(record.nid),
        table.td(record.given_name),
        table.td(record.family_name),
        table.td(record.gender),
        table.td(HisDate.toStandardHisDisplayFormat(record.birthdate)),
        table.td(HisDate.toStandardHisDisplayFormat(record.date)),
        table.td(record.address)
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
const ClinicWithNIDsReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ClinicWithNIDsReport as default };
