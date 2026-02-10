import { c3 as HisFooter, H as HisDate, S as Service, _ as _export_sfc } from '../index-DR39kxWD.js';
import { s as defineComponent, aG as IonContent, bu as IonPage, dG as IonLoading, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, O as createBlock, H as createCommentVNode, B as withCtx, C as createBaseVNode, J as Fragment } from './vendor-D_Iz0VZ7.js';
import { a as HisStandardForm, _ as _sfc_main$1, I as IDSRReportService } from './ReportMixin.vue_vue_type_script_lang-CkdF19IA.js';
import { H as HmisHeader } from './MOHReportHeader-D1g6k0Ec.js';
import { M as Monthly } from './IDSRTableTemplate-CMtuC2z7.js';

const _sfc_main = defineComponent({
  mixins: [_sfc_main$1],
  components: { IonLoading, IdsrH: HmisHeader, Weekly: Monthly, HisStandardForm, HisFooter, IonPage, IonContent },
  data: () => ({
    formData: {},
    componentKey: 0,
    computedFormData: {},
    idsr: {},
    btns: [],
    isLoading: false,
    fields: [],
    reportID: -1,
    periodLabel: "Week Dates",
    periodDates: "",
    reportName: "WEEKLY DISEASE SURVEILLANCE REPORT",
    rangeLabel: "Week Number",
    reportTitle: "",
    range: "",
    TotalOPDVisits: 0,
    clinicName: IDSRReportService.getLocationName(),
    reportparams: {},
    reportReady: false,
    reportUrlParams: "",
    regenarate: ""
  }),
  created() {
    this.btns = this.getBtns();
    this.fields = this.getEpiweeksFields();
  },
  methods: {
    async onPeriod(form, config, regenerate = false) {
      this.componentKey += 1;
      this.formData = form;
      this.computedFormData = config;
      this.reportReady = true;
      this.isLoading = true;
      this.report = new IDSRReportService();
      this.report.setRegenerate(regenerate);
      this.report.setEpiWeek(form.epiweek.label);
      this.report.setStartDate(HisDate.toStandardHisFormat(form.epiweek.other.start));
      this.report.setEndDate(HisDate.toStandardHisFormat(form.epiweek.other.end));
      this.periodDates = this.report.getReportPeriod();
      this.range = form.epiweek.label.split(" ")[0];
      this.reportTitle = `MOH ${Service.getLocationName()} Weekly IDSR Report ${this.periodDates}`;
      try {
        const idsr = await this.report.requestIDSRWeekly();
        const visits = await this.report.getAttendance();
        if (idsr && visits) {
          this.reportID = "data";
          this.TotalOPDVisits = visits.length;
          this.idsr = idsr;
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
  const _component_idsr_h = resolveComponent("idsr-h");
  const _component_weekly = resolveComponent("weekly");
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
              (openBlock(), createBlock(_component_idsr_h, {
                key: _ctx.componentKey,
                reportName: _ctx.reportName,
                rangeLabel: _ctx.rangeLabel,
                range: _ctx.range,
                ref: "header",
                periodLabel: _ctx.periodLabel,
                periodDates: _ctx.periodDates,
                reportparams: _ctx.reportparams,
                clinicName: _ctx.clinicName,
                totalOPDVisits: _ctx.TotalOPDVisits
              }, null, 8, ["reportName", "rangeLabel", "range", "periodLabel", "periodDates", "reportparams", "clinicName", "totalOPDVisits"])),
              (openBlock(), createBlock(_component_weekly, {
                key: _ctx.componentKey,
                onDrillDown: _ctx.onDrillDown,
                params: _ctx.idsr,
                periodDates: _ctx.periodDates,
                epiweek: _ctx.range,
                ref: "rep"
              }, null, 8, ["onDrillDown", "params", "periodDates", "epiweek"]))
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
const IDSRWeekly = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { IDSRWeekly as default };
