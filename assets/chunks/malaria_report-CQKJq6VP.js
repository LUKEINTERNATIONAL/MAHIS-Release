import { a as HisStandardForm, _ as _sfc_main$1, O as OpdReportService, I as IDSRReportService } from './ReportMixin.vue_vue_type_script_lang-JNjwA87d.js';
import { c2 as HisFooter, S as Service, _ as _export_sfc } from '../index-CRNH5uG8.js';
import { s as defineComponent, aG as IonContent, bu as IonPage, dG as IonLoading, p as dayjs, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, O as createBlock, H as createCommentVNode, B as withCtx, C as createBaseVNode, a5 as createTextVNode, D as toDisplayString, J as Fragment } from './vendor-DlXvc2CI.js';
import { H as HmisHeader } from './MOHReportHeader-BY8a9Sfa.js';
import { t as toCsv } from './Export-i8GFwweg.js';

const _sfc_main = defineComponent({
  mixins: [_sfc_main$1],
  components: { IonLoading, HisStandardForm, HisFooter, IonPage, IonContent, IdsrH: HmisHeader },
  data: function() {
    return {
      show: true,
      conditions: [],
      formData: {},
      lessThanFiveYears: " < 5 yrs",
      greaterAndEqualFiveYears: " >= 5 yrs",
      total: " Total",
      btns: [],
      fields: [],
      reportReady: false,
      reportService: {},
      malariaData: "",
      confirmMalaria: "",
      reportparams: {},
      componentKey: 0,
      computedFormData: {},
      idsr: {},
      isLoading: false,
      reportID: -1,
      periodLabel: "Month Dates",
      periodDates: "",
      reportName: "MALARIA HEALTH FACILITY MONTHLY REPORT",
      reportTitle: "",
      rangeLabel: "Month",
      range: "",
      TotalOPDVisits: 0,
      clinicName: IDSRReportService.getLocationName()
    };
  },
  props: ["params", "epiweek", "quarter"],
  created() {
    this.btns = this.getBtns();
    this.fields = this.getMonthlyFields();
  },
  methods: {
    renderResults() {
      const report = new IDSRReportService();
      const Conditions = report.renderResults(this.params);
      if (Conditions.length) {
        this.conditions = Conditions;
        this.show = false;
      }
    },
    exportToCsv() {
      const headers = ["Indicator", "Value"];
      const rows = Object.entries(this.malariaData).map(([key, value]) => {
        return key == "total_OPD_attendance" ? [key, value["total_patient_more_5yrs"]?.length + value["total_patient_less_5yrs"]?.length || 0] : [key, value?.length || 0];
      });
      toCsv(
        [headers],
        [
          ...rows,
          ["", ""],
          [`Date Created: ${dayjs().format("DD/MMM/YYYY HH:MM:ss")}`],
          [`MaHIS Version: ${Service.getCoreVersion()}`],
          [`Report Period: ${this.period}`],
          [`API Version: ${Service.getApiVersion()}`],
          [`Site: ${Service.getLocationName()}`],
          [`Site UUID: ${Service.getSiteUUID()}`]
        ],
        this.reportTitle
      );
    },
    async onPeriod(form) {
      try {
        this.reportReady = true;
        this.isLoading = false;
        this.reportService = new OpdReportService();
        this.reportService.setStartDate(form.idsrmonth.other.start);
        this.reportService.setEndDate(form.idsrmonth.other.end);
        this.period = this.reportService.getDateIntervalPeriod();
        this.malariaData = await this.reportService.getMalariaReport();
        this.periodDates = this.reportService.getReportPeriod();
        this.range = form.idsrmonth.label.split(" ")[0];
        this.reportTitle = `MOH ${Service.getLocationName()} Malaria report ${this.period}`;
        if (this.malariaData.total_OPD_attendance.total_patient_less_5yrs)
          this.TotalOPDVisits = this.malariaData.total_OPD_attendance.total_patient_less_5yrs.length;
        if (this.malariaData.total_OPD_attendance.total_patient_more_5yrs)
          this.TotalOPDVisits = this.malariaData.total_OPD_attendance.total_patient_more_5yrs.length + this.TotalOPDVisits;
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
          onClick: () => this.exportToCsv()
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
          onClick: async () => await this.onPeriod(this.formData)
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
  // watch: {
  //   params: {
  //     immediate: true,
  //     handler() {
  //       this.renderResults();
  //     }
  //   }
  // }
});

const _hoisted_1 = {
  key: 0,
  id: "report-content"
};
const _hoisted_2 = {
  class: "my-table",
  style: { "margin": "auto", "width": "95%", "margin-top": "3%", "margin-bottom": "3%" }
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_loading = resolveComponent("ion-loading");
  const _component_his_standard_form = resolveComponent("his-standard-form");
  const _component_idsr_h = resolveComponent("idsr-h");
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
            _ctx.malariaData ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
              createBaseVNode("table", _hoisted_2, [
                createBaseVNode("tbody", null, [
                  _cache[118] || (_cache[118] = createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      rowspan: "2",
                      class: "td-span-width"
                    }, [
                      createBaseVNode("b", null, "Out Patient Department")
                    ]),
                    createBaseVNode("td", {
                      colspan: "2",
                      class: "td-span-width"
                    }, [
                      createBaseVNode("b", null, "Out Patient Number>")
                    ])
                  ], -1)),
                  _cache[119] || (_cache[119] = createBaseVNode("tr", null, [
                    createBaseVNode("td", { class: "td-span-width" }, [
                      createBaseVNode("b", null, "< 5 yrs")
                    ]),
                    createBaseVNode("td", { class: "td-span-width" }, [
                      createBaseVNode("b", null, " > 5 yrs")
                    ])
                  ], -1)),
                  createBaseVNode("tr", null, [
                    _cache[67] || (_cache[67] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "A:"),
                      createTextVNode(" Confirmed (Co) Malaria Cases")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onDrillDown("Confirmed (Co) Malaria Cases < 5yrs", _ctx.malariaData.confrim_non_pregnant_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confrim_non_pregnant_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onDrillDown("Confirmed (Co) Malaria Cases > 5yrs", _ctx.malariaData.confrim_non_pregnant_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confrim_non_pregnant_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[68] || (_cache[68] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "B:"),
                      createTextVNode(" Presumed (Pr) Malaria Cases (Clinically Diagnosed) ")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.onDrillDown("Presumed (Pr) Malaria Cases (Clinically Diagnosed) < 5yrs", _ctx.malariaData.presume_non_pregnant_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presume_non_pregnant_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.onDrillDown("Presumed (Pr) Malaria Cases (Clinically Diagnosed) > 5yrs", _ctx.malariaData.presume_non_pregnant_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presume_non_pregnant_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[69] || (_cache[69] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "C:"),
                      createTextVNode(" Confirmed malaria in pregnant woman (c)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[4] || (_cache[4] = ($event) => _ctx.onDrillDown("Confirmed malaria in pregnant woman (c) < 5yrs", _ctx.malariaData.confirm_pregnant_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirm_pregnant_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[5] || (_cache[5] = ($event) => _ctx.onDrillDown("Confirmed malaria in pregnant woman (c) > 5yrs", _ctx.malariaData.confirm_pregnant_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirm_pregnant_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[70] || (_cache[70] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "D:"),
                      createTextVNode(" Presumed (clinically diagnosed) malaria in pregnant woman (d)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[6] || (_cache[6] = ($event) => _ctx.onDrillDown(
                        "Presumed (clinically diagnosed) malaria in pregnant woman (d) < 5yrs",
                        _ctx.malariaData.presume_pregnant_less_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presume_pregnant_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[7] || (_cache[7] = ($event) => _ctx.onDrillDown(
                        "Presumed (clinically diagnosed) malaria in pregnant woman (d) > 5yrs",
                        _ctx.malariaData.presume_pregnant_more_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presume_pregnant_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[71] || (_cache[71] = createBaseVNode("td", { class: "" }, [
                      createTextVNode("Total OPD Malaria Cases "),
                      createBaseVNode("b", null, "(A+B+C+D)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[8] || (_cache[8] = ($event) => _ctx.onDrillDown(`Total OPD Malaria Cases (A+B+C+D) < 5yrs`, _ctx.malariaData.total_OPD_malaria_cases_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.total_OPD_malaria_cases_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[9] || (_cache[9] = ($event) => _ctx.onDrillDown(`Total OPD Malaria Cases (A+B+C+D) > 5yrs`, _ctx.malariaData.total_OPD_malaria_cases_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.total_OPD_malaria_cases_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[72] || (_cache[72] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "F:"),
                      createTextVNode(" Total OPD Attendance: All causes (Including malaria cases)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[10] || (_cache[10] = ($event) => _ctx.onDrillDown(
                        "Total OPD Attendance: All causes (Including malaria cases) < 5yrs",
                        _ctx.malariaData.total_OPD_attendance.total_patient_less_5yrs
                      ))
                    }, [
                      _ctx.malariaData.total_OPD_attendance.total_patient_less_5yrs ? (openBlock(), createElementBlock("span", _hoisted_3, [
                        createBaseVNode("a", null, toDisplayString(_ctx.malariaData.total_OPD_attendance.total_patient_less_5yrs.length), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[11] || (_cache[11] = ($event) => _ctx.onDrillDown(
                        "Total OPD Attendance: All causes (Including malaria cases) > 5yrs",
                        _ctx.malariaData.total_OPD_attendance.total_patient_more_5yrs
                      ))
                    }, [
                      _ctx.malariaData.total_OPD_attendance.total_patient_more_5yrs ? (openBlock(), createElementBlock("span", _hoisted_4, [
                        createBaseVNode("a", null, toDisplayString(_ctx.malariaData.total_OPD_attendance.total_patient_more_5yrs.length), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[73] || (_cache[73] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "G:"),
                      createTextVNode(" Confirmed malaria treatment failure (tf)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[12] || (_cache[12] = ($event) => _ctx.onDrillDown(
                        "Confirmed malaria treatment failure (tf) < 5yrs",
                        _ctx.malariaData.confirmed_malaria_treatment_failure_less_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirmed_malaria_treatment_failure_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[13] || (_cache[13] = ($event) => _ctx.onDrillDown(
                        "Confirmed malaria treatment failure (tf) > 5yrs",
                        _ctx.malariaData.confirmed_malaria_treatment_failure_more_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirmed_malaria_treatment_failure_more_5yrs.length), 1)
                    ])
                  ]),
                  _cache[120] || (_cache[120] = createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      colspan: "3",
                      class: ""
                    }, [
                      createBaseVNode("b", null, "Treatment in OPD")
                    ])
                  ], -1)),
                  createBaseVNode("tr", null, [
                    _cache[74] || (_cache[74] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "H:"),
                      createTextVNode(" Confirmed cases receiving first-line anti malarial medication (LA)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[14] || (_cache[14] = ($event) => _ctx.onDrillDown(
                        "Confirmed cases receiving first-line anti malarial medication (LA) < 5yrs",
                        _ctx.malariaData.confirmed_malaria_LA_less_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirmed_malaria_LA_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[15] || (_cache[15] = ($event) => _ctx.onDrillDown(
                        "Confirmed cases receiving first-line anti malarial medication (LA) > 5yrs",
                        _ctx.malariaData.confirmed_malaria_LA_more_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirmed_malaria_LA_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[75] || (_cache[75] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "I:"),
                      createTextVNode(" Presumed malaria cases receiving first-line anti malarial medication(LA)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[16] || (_cache[16] = ($event) => _ctx.onDrillDown(
                        "Presumed malaria cases receiving first-line anti malarial medication(LA) < 5yrs",
                        _ctx.malariaData.presumed_malaria_LA_less_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presumed_malaria_LA_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[17] || (_cache[17] = ($event) => _ctx.onDrillDown(
                        "Presumed malaria cases receiving first-line anti malarial medication(LA) > 5yrs",
                        _ctx.malariaData.presumed_malaria_LA_more_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presumed_malaria_LA_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[76] || (_cache[76] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "J:"),
                      createTextVNode(" Confirmed cases receiving second-line anti malarial medication (ASAQ)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[18] || (_cache[18] = ($event) => _ctx.onDrillDown(
                        "Confirmed cases receiving second-line anti malarial medication (ASAQ) < 5yrs",
                        _ctx.malariaData.confirmed_malaria_ASAQ_less_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirmed_malaria_ASAQ_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[19] || (_cache[19] = ($event) => _ctx.onDrillDown(
                        "Confirmed cases receiving second-line anti malarial medication (ASAQ) > 5yrs",
                        _ctx.malariaData.confirmed_malaria_ASAQ_more_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.confirmed_malaria_ASAQ_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[77] || (_cache[77] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "K:"),
                      createTextVNode(" Presumed malaria cases receiving second-line anti malarial medication(ASAQ)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[20] || (_cache[20] = ($event) => _ctx.onDrillDown(
                        "Presumed malaria cases receiving second-line anti malarial medication(ASAQ) < 5yrs",
                        _ctx.malariaData.presumed_malaria_ASAQ_less_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presumed_malaria_ASAQ_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[21] || (_cache[21] = ($event) => _ctx.onDrillDown(
                        "Presumed malaria cases receiving second-line anti malarial medication(ASAQ) > 5yrs",
                        _ctx.malariaData.presumed_malaria_ASAQ_more_5yrs
                      ))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.presumed_malaria_ASAQ_more_5yrs.length), 1)
                    ])
                  ]),
                  _cache[121] || (_cache[121] = createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      colspan: "3",
                      class: ""
                    }, [
                      createBaseVNode("b", null, "Lab/mRDT in OPD")
                    ])
                  ], -1)),
                  createBaseVNode("tr", null, [
                    _cache[78] || (_cache[78] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "L:"),
                      createTextVNode(" Suspected malaria cases tested (mRDT)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[22] || (_cache[22] = ($event) => _ctx.onDrillDown("Suspected malaria cases tested (mRDT) < 5yrs", _ctx.malariaData.suspected_malaria_mRDT_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.suspected_malaria_mRDT_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[23] || (_cache[23] = ($event) => _ctx.onDrillDown("Suspected malaria cases tested (mRDT) > 5yrs", _ctx.malariaData.suspected_malaria_mRDT_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.suspected_malaria_mRDT_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[79] || (_cache[79] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "M:"),
                      createTextVNode(" Positive malaria cases (mRDT)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[24] || (_cache[24] = ($event) => _ctx.onDrillDown("Positive malaria cases (mRDT) < 5yrs", _ctx.malariaData.positive_malaria_mRDT_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.positive_malaria_mRDT_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[25] || (_cache[25] = ($event) => _ctx.onDrillDown("Positive malaria cases (mRDT) > 5yrs", _ctx.malariaData.positive_malaria_mRDT_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.positive_malaria_mRDT_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[80] || (_cache[80] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "N:"),
                      createTextVNode(" Suspected malaria cases tested (microscopy)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[26] || (_cache[26] = ($event) => _ctx.onDrillDown("Suspected malaria cases tested (microscopy) < 5yrs", _ctx.malariaData.suspected_malaria_microscopy_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.suspected_malaria_microscopy_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[27] || (_cache[27] = ($event) => _ctx.onDrillDown("Suspected malaria cases tested (microscopy) > 5yrs", _ctx.malariaData.suspected_malaria_microscopy_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.suspected_malaria_microscopy_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[81] || (_cache[81] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "O:"),
                      createTextVNode(" Positive malaria cases (microscopy)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[28] || (_cache[28] = ($event) => _ctx.onDrillDown("Positive malaria cases (microscopy) < 5yrs", _ctx.malariaData.positive_malaria_microscopy_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.positive_malaria_microscopy_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[29] || (_cache[29] = ($event) => _ctx.onDrillDown("Positive malaria cases (microscopy) > 5yrs", _ctx.malariaData.positive_malaria_microscopy_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.positive_malaria_microscopy_more_5yrs.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[82] || (_cache[82] = createBaseVNode("td", { class: "" }, [
                      createTextVNode("Total suspected malaria cases "),
                      createBaseVNode("b", null, "(B+D+L+N)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[30] || (_cache[30] = ($event) => _ctx.onDrillDown("Total suspected malaria cases (B+D+L+N) < 5yrs", _ctx.malariaData.total_suspected_malaria_cases_less_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.total_suspected_malaria_cases_less_5yrs.length), 1)
                    ]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[31] || (_cache[31] = ($event) => _ctx.onDrillDown("Total suspected malaria cases (B+D+L+N) > 5yrs", _ctx.malariaData.total_suspected_malaria_cases_more_5yrs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.total_suspected_malaria_cases_more_5yrs.length), 1)
                    ])
                  ]),
                  _cache[122] || (_cache[122] = createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      rowspan: "2",
                      class: "td-span-width"
                    }, [
                      createBaseVNode("b", null, "In Patient Department")
                    ]),
                    createBaseVNode("td", {
                      colspan: "2",
                      class: "td-span-width"
                    }, [
                      createBaseVNode("b", null, "In Patient Numbers")
                    ])
                  ], -1)),
                  _cache[123] || (_cache[123] = createBaseVNode("tr", null, [
                    createBaseVNode("td", { class: "td-span-width" }, [
                      createBaseVNode("b", null, " < 5 yrs")
                    ]),
                    createBaseVNode("td", { class: "td-span-width" }, [
                      createBaseVNode("b", null, " > 5 yrs")
                    ])
                  ], -1)),
                  createBaseVNode("tr", null, [
                    _cache[83] || (_cache[83] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "Q:"),
                      createTextVNode(" Total suspected malaria cases tested (microscopy) ")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[32] || (_cache[32] = ($event) => _ctx.onDrillDown("Total suspected malaria cases tested (microscopy) < 5yrs", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[33] || (_cache[33] = ($event) => _ctx.onDrillDown("Total suspected malaria cases tested (microscopy) > 5yrs", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[84] || (_cache[84] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "R:"),
                      createTextVNode(" Confirmed malaria cases (microscopy)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[34] || (_cache[34] = ($event) => _ctx.onDrillDown("Confirmed malaria cases (microscopy) < 5yrs", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[35] || (_cache[35] = ($event) => _ctx.onDrillDown("Confirmed malaria cases (microscopy) > 5yrs", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[85] || (_cache[85] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "S:"),
                      createTextVNode(" Presumed malaria cases (clinically diagnosed without test)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[36] || (_cache[36] = ($event) => _ctx.onDrillDown("Presumed malaria cases (clinically diagnosed without test) < 5yrs", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[37] || (_cache[37] = ($event) => _ctx.onDrillDown("Presumed malaria cases (clinically diagnosed without test) > 5yrs", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[86] || (_cache[86] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "T:"),
                      createTextVNode(" Confirmed malaria in pregnant woman (c)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[38] || (_cache[38] = ($event) => _ctx.onDrillDown("Confirmed malaria in pregnant woman (c) < 5yrs", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[39] || (_cache[39] = ($event) => _ctx.onDrillDown("Confirmed malaria in pregnant woman (c) > 5yrs", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[87] || (_cache[87] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "U:"),
                      createTextVNode(" Presumed (clinically diagnosed) malaria in pregnant woman (d)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[40] || (_cache[40] = ($event) => _ctx.onDrillDown("Presumed (clinically diagnosed) malaria in pregnant woman (d) < 5yrs", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[41] || (_cache[41] = ($event) => _ctx.onDrillDown("Presumed (clinically diagnosed) malaria in pregnant woman (d) > 5yrs", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[88] || (_cache[88] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "V:"),
                      createTextVNode(" Total suspected malaria cases (Q+S+U)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[42] || (_cache[42] = ($event) => _ctx.onDrillDown("Total suspected malaria cases (Q+S+U)", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[43] || (_cache[43] = ($event) => _ctx.onDrillDown("Total suspected malaria cases (Q+S+U)", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[44] || (_cache[44] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    }, [..._cache[89] || (_cache[89] = [
                      createBaseVNode("b", null, "W:", -1),
                      createTextVNode(" Total malaria cases (R+S+T+U)", -1)
                    ])]),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[45] || (_cache[45] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[46] || (_cache[46] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[90] || (_cache[90] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "X:"),
                      createTextVNode(" Confirmed malaria treatment failure (tf)")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[47] || (_cache[47] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[48] || (_cache[48] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[91] || (_cache[91] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "Y:"),
                      createTextVNode(" Total inpatient malaria deaths")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[49] || (_cache[49] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[50] || (_cache[50] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[92] || (_cache[92] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "Z:"),
                      createTextVNode(" Total Inpatient: all causes")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[51] || (_cache[51] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[52] || (_cache[52] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[93] || (_cache[93] = createBaseVNode("td", { class: "td-text-align-left" }, [
                      createBaseVNode("b", null, "ZA:"),
                      createTextVNode(" Total Inpatient Deaths: all causes")
                    ], -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[53] || (_cache[53] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    }),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[54] || (_cache[54] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  _cache[124] || (_cache[124] = createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      colspan: "3",
                      class: ""
                    }, [
                      createBaseVNode("b", null, "Commodities Used")
                    ])
                  ], -1)),
                  _cache[125] || (_cache[125] = createBaseVNode("tr", null, [
                    createBaseVNode("td", { class: "" }, [
                      createBaseVNode("b", null, "Item")
                    ]),
                    createBaseVNode("td", { class: "" }, [
                      createBaseVNode("b", null, "Unit of Issue")
                    ]),
                    createBaseVNode("td", { class: "" }, [
                      createBaseVNode("b", null, "Quantity Dispensed/Used")
                    ])
                  ], -1)),
                  createBaseVNode("tr", null, [
                    _cache[94] || (_cache[94] = createBaseVNode("td", { class: "td-text-align-left" }, "LA 1X6", -1)),
                    _cache[95] || (_cache[95] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[55] || (_cache[55] = ($event) => _ctx.onDrillDown("LA 1X6", _ctx.malariaData.LA_1X6))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.LA_1X6.length * 1 * 6), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[96] || (_cache[96] = createBaseVNode("td", { class: "td-text-align-left" }, "LA 2X6", -1)),
                    _cache[97] || (_cache[97] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[56] || (_cache[56] = ($event) => _ctx.onDrillDown("LA 2X6", _ctx.malariaData.LA_2X6))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.LA_2X6.length * 2 * 6), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[98] || (_cache[98] = createBaseVNode("td", { class: "td-text-align-left" }, "LA 3X6", -1)),
                    _cache[99] || (_cache[99] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[57] || (_cache[57] = ($event) => _ctx.onDrillDown("LA 3X6", _ctx.malariaData.LA_3X6))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.LA_3X6.length * 3 * 6), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[100] || (_cache[100] = createBaseVNode("td", { class: "td-text-align-left" }, "LA 4X6", -1)),
                    _cache[101] || (_cache[101] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[58] || (_cache[58] = ($event) => _ctx.onDrillDown("LA 4X6", _ctx.malariaData.LA_4X6))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.LA_4X6.length * 6 * 4), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[102] || (_cache[102] = createBaseVNode("td", { class: "td-text-align-left" }, "ITN Distributed to Pregnant women", -1)),
                    _cache[103] || (_cache[103] = createBaseVNode("td", { class: "" }, "net", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[59] || (_cache[59] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[104] || (_cache[104] = createBaseVNode("td", { class: "td-text-align-left" }, "ITN Distributed to Newborn babies", -1)),
                    _cache[105] || (_cache[105] = createBaseVNode("td", { class: "" }, "net", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[60] || (_cache[60] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[106] || (_cache[106] = createBaseVNode("td", { class: "td-text-align-left" }, "SP", -1)),
                    _cache[107] || (_cache[107] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[61] || (_cache[61] = ($event) => _ctx.onDrillDown("SP", _ctx.malariaData.sp))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.sp.length), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[108] || (_cache[108] = createBaseVNode("td", { class: "td-text-align-left" }, "RDTs", -1)),
                    _cache[109] || (_cache[109] = createBaseVNode("td", { class: "" }, "test", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[62] || (_cache[62] = ($event) => _ctx.onDrillDown("Confirmed", _ctx.malariaData))
                    })
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[110] || (_cache[110] = createBaseVNode("td", { class: "td-text-align-left" }, "ASAQ 25mg/67.5mg (3 tablets)", -1)),
                    _cache[111] || (_cache[111] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[63] || (_cache[63] = ($event) => _ctx.onDrillDown("ASAQ 25mg/67.5mg (3 tablets)", _ctx.malariaData.ASAQ_25mg))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.ASAQ_25mg.length * 3), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[112] || (_cache[112] = createBaseVNode("td", { class: "td-text-align-left" }, "ASAQ 50mg/135mg (3 tablets)", -1)),
                    _cache[113] || (_cache[113] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[64] || (_cache[64] = ($event) => _ctx.onDrillDown("ASAQ 50mg/135mg (3 tablets)", _ctx.malariaData.ASAQ_50mg))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.ASAQ_50mg.length * 3), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[114] || (_cache[114] = createBaseVNode("td", { class: "td-text-align-left" }, "ASAQ 100mg/270mg (3 tablets)", -1)),
                    _cache[115] || (_cache[115] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[65] || (_cache[65] = ($event) => _ctx.onDrillDown("ASAQ 100mg/270mg (3 tablets)", _ctx.malariaData.ASAQ_100mg_3tabs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.ASAQ_100mg_3tabs.length * 3), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[116] || (_cache[116] = createBaseVNode("td", { class: "td-text-align-left" }, "ASAQ 100mg/270mg (6 tablets)", -1)),
                    _cache[117] || (_cache[117] = createBaseVNode("td", { class: "" }, "tab", -1)),
                    createBaseVNode("td", {
                      class: "td-text-align-left",
                      onClick: _cache[66] || (_cache[66] = ($event) => _ctx.onDrillDown("ASAQ 100mg/270mg (6 tablets)", _ctx.malariaData.ASAQ_100mg_6tabs))
                    }, [
                      createBaseVNode("a", null, toDisplayString(_ctx.malariaData.ASAQ_100mg_6tabs.length * 6), 1)
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_his_footer, { btns: _ctx.btns }, null, 8, ["btns"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 64);
}
const malaria_report = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-90ed0bc9"]]);

export { malaria_report as default };
