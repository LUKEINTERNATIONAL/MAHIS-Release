import { c3 as HisFooter, H as HisDate, S as Service, _ as _export_sfc } from '../index-DGbW3xS3.js';
import { q as defineComponent, aD as IonContent, bs as IonPage, dF as IonLoading, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, N as createBlock, G as createCommentVNode, A as createBaseVNode, B as withCtx, H as Fragment } from './vendor-DUNDjU_C.js';
import { a as HisStandardForm, _ as _sfc_main$1 } from './ReportMixin.vue_vue_type_script_lang-CFqEEEdm.js';
import { H as HMISReportService, a as HmisTemplate } from './HMISTemplate-DUNOWYQc.js';
import { H as HmisHeader } from './MOHReportHeader-5Br7pU5j.js';

const _sfc_main = defineComponent({
  mixins: [_sfc_main$1],
  components: { IonLoading, HmisHeader, HmisTemplate, HisStandardForm, HisFooter, IonPage, IonContent },
  data: () => ({
    formData: {},
    componentKey: 0,
    computedFormData: {},
    hmis15Data: {},
    btns: [],
    isLoading: false,
    fields: [],
    reportID: -1,
    periodLabel: "Period",
    periodDates: "",
    reportName: "HMIS 17",
    TotalOPDVisits: 0,
    clinicName: HMISReportService.getLocationName(),
    reportReady: false,
    reportTitle: "",
    reportparams: {},
    // Assuming an empty object for demonstration
    rangeLabel: "Default Range Label",
    // Add a default value
    range: "Default Range"
    // Add a default value
  }),
  created() {
    this.btns = this.getBtns();
    this.fields = this.getDateDurationFields();
  },
  methods: {
    async onPeriod(form, config, regenerate = false) {
      this.componentKey += 1;
      this.formData = form;
      this.computedFormData = config;
      this.reportReady = true;
      this.isLoading = true;
      this.report = new HMISReportService();
      this.report.setRegenerate(regenerate);
      this.report.setStartDate(HisDate.toStandardHisFormat(config.start_date));
      this.report.setEndDate(HisDate.toStandardHisFormat(config.end_date));
      this.periodDates = this.report.getReportPeriod();
      this.reportTitle = `MOH ${Service.getLocationName()} HMIS 17 Report ${this.periodDates}`;
      try {
        const hmis = await this.report.requestHMIS17();
        const visits = await this.report.getAttendance();
        if (hmis && visits) {
          this.reportID = "data";
          this.TotalOPDVisits = visits.length;
          this.hmis15Data = hmis;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    getBtns() {
      return [
        {
          name: "CSV",
          size: "large",
          slot: "start",
          color: "primary",
          visible: true,
          onClick: async () => {
            const rep = this.$refs.rep;
            rep.onDownload(this.reportTitle);
          }
        },
        {
          name: "PDF",
          size: "large",
          slot: "start",
          color: "primary",
          visible: true,
          onClick: () => this.exportToCustomPDF(this.reportTitle)
        },
        {
          name: "Back",
          size: "large",
          slot: "end",
          color: "warning",
          visible: true,
          onClick: () => this.reportReady = false
        },
        {
          name: "Refresh",
          size: "large",
          slot: "end",
          color: "warning",
          visible: true,
          onClick: async () => await this.onPeriod(this.formData, this.computedFormData, true)
        },
        {
          name: "Finish",
          size: "large",
          slot: "end",
          color: "success",
          visible: true,
          onClick: () => this.$router.push({ path: "/" })
        }
      ];
    }
  }
});

const _hoisted_1 = { id: "report-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_loading = resolveComponent("ion-loading");
  const _component_his_standard_form = resolveComponent("his-standard-form");
  const _component_hmis_header = resolveComponent("hmis-header");
  const _component_hmis_template = resolveComponent("hmis-template");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_his_footer = resolveComponent("his-footer");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_loading, {
      "is-open": _ctx.isLoading,
      message: "Please wait..."
    }, null, 8, ["is-open"]),
    !_ctx.reportReady ? (openBlock(), createBlock(_component_his_standard_form, {
      key: 0,
      onOnFinish: _ctx.onPeriod,
      skipSummary: true,
      fields: _ctx.fields
    }, null, 8, ["onOnFinish", "fields"])) : createCommentVNode("", true),
    _ctx.reportReady ? (openBlock(), createBlock(_component_ion_page, { key: 1 }, {
      default: withCtx(() => [
        createVNode(_component_ion_content, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              (openBlock(), createBlock(_component_hmis_header, {
                key: _ctx.componentKey,
                reportName: _ctx.reportName,
                ref: "header",
                periodLabel: _ctx.periodLabel,
                periodDates: _ctx.periodDates,
                clinicName: _ctx.clinicName,
                totalOPDVisits: _ctx.TotalOPDVisits,
                reportparams: _ctx.reportparams,
                rangeLabel: _ctx.rangeLabel,
                range: _ctx.range
              }, null, 8, ["reportName", "periodLabel", "periodDates", "clinicName", "totalOPDVisits", "reportparams", "rangeLabel", "range"])),
              (openBlock(), createBlock(_component_hmis_template, {
                key: _ctx.componentKey,
                reportName: _ctx.reportName,
                onDrillDown: _ctx.onDrillDown,
                params: _ctx.hmis15Data,
                periodDates: _ctx.periodDates,
                ref: "rep"
              }, null, 8, ["reportName", "onDrillDown", "params", "periodDates"]))
            ])
          ]),
          _: 1
        }),
        createVNode(_component_his_footer, { btns: _ctx.btns }, null, 8, ["btns"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    _cache[0] || (_cache[0] = createBaseVNode("div", { id: "print" }, null, -1))
  ], 64);
}
const HMIS17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { HMIS17 as default };
