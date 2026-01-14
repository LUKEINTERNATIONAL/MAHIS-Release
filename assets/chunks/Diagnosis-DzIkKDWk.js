import { t as table, _ as _sfc_main$2, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-CWcnJC29.js';
import { R as ReportTemplate } from './BaseTableReport-BrggLJXr.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { q as defineComponent, v as resolveComponent, N as createBlock, y as openBlock, bs as IonPage, B as withCtx, z as createVNode } from './vendor-DGIzCW4f.js';
import { _ as _export_sfc, P as PatientService } from '../index-D_1ZD1MC.js';
import { D as DateInputField } from './DateInputField-Br3FrMt8.js';

const _sfc_main$1 = defineComponent({
  components: {
    DateInputField
  },
  data() {
    return {};
  }
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DateInputField = resolveComponent("DateInputField");
  return openBlock(), createBlock(_component_DateInputField, {
    inputHeader: "",
    sectionHeaderFontWeight: 20,
    unit: "hhj",
    input: "",
    icon: "",
    placeholder: "ika data",
    iconRight: "",
    inputWidth: "",
    inputValue: "",
    eventType: ""
  });
}
const GetDataDuration = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage, GetDataDuration },
  mixins: [_sfc_main$2],
  data: () => ({
    title: "OPD Diagnosis",
    rows: [],
    reportService: {},
    customInfo: {
      label: "Total OPD Visits",
      value: 0
    },
    columns: [
      [
        table.thTxt("Age Groups", {
          sortable: false,
          exportable: false
        }),
        table.thTxt("<6 months", {
          colspan: 2,
          sortable: false,
          exportable: false
        }),
        table.thTxt("6 months < 5 yrs", {
          colspan: 2,
          sortable: false,
          exportable: false
        }),
        table.thTxt("5 yrs < 14 yrs", {
          colspan: 2,
          sortable: false,
          exportable: false
        }),
        table.thTxt("> 14 yrs", {
          colspan: 2,
          sortable: false,
          exportable: false
        }),
        table.thTxt("", {
          sortable: false,
          exportable: false
        })
      ],
      [
        table.thTxt("Diagnosis"),
        table.thTxt("F", { value: "Females <6 months" }),
        table.thTxt("M", { value: "Males <6 months" }),
        table.thTxt("F", { value: "Females 6 months < 5 yrs" }),
        table.thTxt("M", { value: "Males 6 months < 5 yrs" }),
        table.thTxt("F", { value: "Females 5 yrs < 14 yrs" }),
        table.thTxt("M", { value: "Males 5 yrs < 14 yrs" }),
        table.thTxt("F", { value: "Females > 14 yrs" }),
        table.thTxt("M", { value: "Males > 14 yrs" }),
        table.thTxt("Total")
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
      this.rows = this.buildRows(await this.reportService.getDiagnosis());
      const visits = await this.reportService.getAttendance();
      this.customInfo.value = visits.length;
    },
    totalDiagnosis(diagnosis) {
      return Object.values(diagnosis).reduce((a, b) => a + b, 0);
    },
    getDrillDownColumns() {
      return [
        [
          table.thTxt("Patient ID"),
          table.thTxt("First Name"),
          table.thTxt("Last Name"),
          table.thTxt("Gender"),
          table.thTxt("Phone Number"),
          table.thTxt("Address")
        ]
      ];
    },
    buildColumn(patients, title = "Drilldown Data") {
      if (lodashExports.isEmpty(patients)) {
        return table.td(0);
      }
      return table.tdLink(
        patients.length,
        async () => this.drilldownData(title, this.getDrillDownColumns(), patients, async (tableRows) => {
          return await Promise.all(
            tableRows.map(async (patientId) => {
              await PatientService.findByID(patientId);
              const patient = new PatientService();
              return [
                table.td(patientId),
                table.td(patient.getGivenName()),
                table.td(patient.getFamilyName()),
                table.td(patient.getGender()),
                table.td(patient.getPhoneNumber()),
                table.td(`${patient.getCurrentDistrict()}, ${patient.getCurrentVillage()}, ${patient.getClosestLandmark()}`)
              ];
            })
          );
        })
      );
    },
    buildRows(data) {
      if (lodashExports.isEmpty(data)) return [];
      const rows = [];
      Object.keys(data).forEach((diagnosis) => {
        const underSixFemales = lodashExports.get(data[diagnosis], "F.0-5 months", []);
        const underSixMales = lodashExports.get(data[diagnosis], "M.0-5 months", []);
        const underFiveFemales = lodashExports.get(data[diagnosis], "F.6 mth < 5 yrs", []);
        const underFiveMales = lodashExports.get(data[diagnosis], "M.6 mth < 5 yrs", []);
        const underFourteenFemales = lodashExports.get(data[diagnosis], "F.5-14 yrs", []);
        const underFourteenMales = lodashExports.get(data[diagnosis], "M.5-14 yrs", []);
        const overFourteenFemales = lodashExports.get(data[diagnosis], "F.>= 14 years", []);
        const overFourteenMales = lodashExports.get(data[diagnosis], "M.>= 14 years", []);
        rows.push([
          table.td(diagnosis, { style: { textAlign: "left" } }),
          this.buildColumn(underSixFemales, `under 6 months females diagnosed with ${diagnosis}`),
          this.buildColumn(underSixMales, `under 6 months males diagnosed with ${diagnosis}`),
          this.buildColumn(underFiveFemales, `under 5 years females diagnosed with ${diagnosis}`),
          this.buildColumn(underFiveMales, `under 5 years males diagnosed with ${diagnosis}`),
          this.buildColumn(underFourteenFemales, `under 14 years females diagnosed with ${diagnosis}`),
          this.buildColumn(underFourteenMales, `under 14 years males diagnosed with ${diagnosis}`),
          this.buildColumn(overFourteenFemales, `over 14 years females diagnosed with ${diagnosis}`),
          this.buildColumn(overFourteenMales, `over 14 years males diagnosed with ${diagnosis}`),
          this.buildColumn(
            [
              ...underFiveFemales,
              ...underFiveMales,
              ...underSixFemales,
              ...underSixMales,
              ...underFourteenFemales,
              ...underFourteenMales,
              ...overFourteenFemales,
              ...overFourteenMales
            ],
            `Total diagnosed with ${diagnosis}`
          )
        ]);
      });
      return rows.sort((a, b) => {
        if (a[0].td < b[0].td) return -1;
        if (a[0].td > b[0].td) return 1;
        return 0;
      });
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
        customInfo: _ctx.customInfo,
        onReportConfiguration: _ctx.init
      }, null, 8, ["title", "rows", "fields", "columns", "period", "customInfo", "onReportConfiguration"])
    ]),
    _: 1
  });
}
const Diagnosis = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Diagnosis as default };
