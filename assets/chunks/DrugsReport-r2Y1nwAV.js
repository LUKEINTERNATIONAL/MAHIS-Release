import { t as table, _ as _sfc_main$1, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-Dy_NkJGN.js';
import { R as ReportTemplate } from './BaseTableReport-D_jXzfUK.js';
import { H as HisDate, S as Service, _ as _export_sfc } from '../index-_N7CIn5p.js';
import { q as defineComponent, bs as IonPage, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode } from './vendor-sqYZJ6fK.js';

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage },
  mixins: [_sfc_main$1],
  data: () => ({
    title: "Drugs report",
    rows: [],
    columns: [[
      table.thTxt("First Name"),
      table.thTxt("Last Name"),
      table.thTxt("Gender"),
      table.thTxt("Age"),
      table.thTxt("Drug"),
      table.thTxt("Prescribe Quantity"),
      table.thTxt("Dispense Quantity"),
      table.thTxt("Diagnosis"),
      table.thTxt("Date")
    ]]
  }),
  created() {
    this.fields = this.getDateDurationFields();
  },
  methods: {
    async init(_, config) {
      const reportService = new OpdReportService();
      reportService.setStartDate(config.start_date);
      reportService.setEndDate(config.end_date);
      this.period = reportService.getDateIntervalPeriod();
      this.rows = this.buildRows(await reportService.getDrugs());
    },
    buildRows(data) {
      if (!data.length) return [];
      return data.map((record) => [
        table.td(record.given_name),
        table.td(record.family_name),
        table.td(record.gender),
        table.td(HisDate.calculateAge(record.birthdate, Service.getSessionDate())),
        table.td(record.drug_name),
        table.td(record.prescribe_quantity),
        table.td(record.dispense_quantity),
        table.td(record.diagnosis),
        table.td(HisDate.toStandardHisDisplayFormat(record.date))
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
        itemsPerPage: 12,
        period: _ctx.period,
        reportPrefix: "Clinic",
        onReportConfiguration: _ctx.init,
        paginated: ""
      }, null, 8, ["title", "rows", "fields", "columns", "period", "onReportConfiguration"])
    ]),
    _: 1
  });
}
const DrugsReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { DrugsReport as default };
