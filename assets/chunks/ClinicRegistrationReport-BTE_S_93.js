import { _ as _sfc_main$2, t as table, O as OpdReportService } from './ReportMixin.vue_vue_type_script_lang-DA_Wli8d.js';
import { R as ReportTemplate } from './BaseTableReport-t_mWGzSu.js';
import { _ as _export_sfc, H as HisDate, S as Service } from '../index-CSKZEueZ.js';
import { s as defineComponent, bC as modalController, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, a5 as createTextVNode, C as createBaseVNode, J as Fragment, R as renderList, O as createBlock, D as toDisplayString, bu as IonPage } from './vendor-CCA5uLDN.js';

const _sfc_main$1 = defineComponent({
  props: {
    list: Object
  },
  setup() {
    const closeModal = async () => await modalController.dismiss();
    return {
      closeModal
    };
  }
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_ion_content = resolveComponent("ion-content");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, null, {
      default: withCtx(() => [
        createVNode(_component_ion_toolbar, null, {
          default: withCtx(() => [
            createVNode(_component_ion_title, null, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode("Clinic Registration Report Summary", -1)
              ])]),
              _: 1
            }),
            createVNode(_component_ion_button, {
              color: "danger",
              slot: "end",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.closeModal())
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode("X", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, { class: "ion-padding" }, {
      default: withCtx(() => [
        createVNode(_component_ion_grid, null, {
          default: withCtx(() => [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createBaseVNode("h3", null, "Type of Visit", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createBaseVNode("h3", null, " < 5yrs ", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createBaseVNode("h3", null, " > 5yrs", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createBaseVNode("h3", null, "Total", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_list, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
                  return openBlock(), createBlock(_component_ion_item, { key: item }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.under5), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.over5), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.value), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
const SummaryModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);

const _sfc_main = defineComponent({
  components: { ReportTemplate, IonPage },
  mixins: [_sfc_main$2],
  data: () => ({
    title: "Clinic Registration",
    rows: [],
    reportData: [],
    columns: [[
      table.thTxt("Reg"),
      table.thTxt("First Name"),
      table.thTxt("Last Name"),
      table.thTxt("Gender"),
      table.thTxt("DOB"),
      table.thTxt("Date reg.")
    ]],
    customBtns: []
  }),
  created() {
    this.fields = this.getDateDurationFields();
    this.customBtns.push({
      name: "High level view",
      size: "large",
      slot: "start",
      color: "primary",
      visible: true,
      onClick: async () => this.showModal()
    });
  },
  methods: {
    async init(_, config) {
      const reportService = new OpdReportService();
      reportService.setStartDate(config.start_date);
      reportService.setEndDate(config.end_date);
      this.period = reportService.getDateIntervalPeriod();
      const data = await reportService.getClinicRegistrations();
      this.reportData = data.sort(
        (a, b) => a.visit_type > b.visit_type ? 1 : a.visit_type < b.visit_type ? -1 : 0
      );
      this.rows = this.buildRows(this.reportData);
    },
    buildRows(data) {
      if (!data.length) return [];
      return data.map((record) => [
        table.td(record.visit_type),
        table.td(record.given_name),
        table.td(record.family_name),
        table.td(record.gender),
        table.td(HisDate.toStandardHisDisplayFormat(record.birthdate)),
        table.td(HisDate.toStandardHisDisplayFormat(record.visit_date))
      ]);
    },
    filterBy(visitType, ageType) {
      return this.reportData.filter((d) => {
        const age = HisDate.calculateAge(d.birthdate, Service.getSessionDate());
        return d.visit_type === visitType && (ageType === "under5" ? age <= 5 : age > 6);
      });
    },
    modalData() {
      const new_under5 = [...this.filterBy("New patient", "under5")].length;
      const new_over5 = [...this.filterBy("New patient", "over5")].length;
      const new_total = new_under5 + new_over5;
      const ref_under5 = [...this.filterBy("Referral", "under5")].length;
      const ref_over5 = [...this.filterBy("Referral", "over5")].length;
      const ref_total = ref_under5 + ref_over5;
      const rev_under5 = [...this.filterBy("Revisiting", "under5")].length;
      const rev_over5 = [...this.filterBy("Revisiting", "over5")].length;
      const rev_total = rev_under5 + rev_over5;
      return [
        {
          label: "New patient",
          under5: new_under5,
          over5: new_over5,
          value: new_total
        },
        {
          label: "Referral",
          under5: ref_under5,
          over5: ref_over5,
          value: ref_total
        },
        {
          label: "Revisiting",
          under5: rev_under5,
          over5: rev_over5,
          value: rev_total
        }
      ];
    },
    async showModal() {
      const data = [...this.modalData()];
      const modal = await modalController.create({
        component: SummaryModal,
        backdropDismiss: true,
        cssClass: "action-sheet-modal",
        componentProps: {
          list: data
        }
      });
      modal.present();
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
        itemsPerPage: 10,
        period: _ctx.period,
        reportPrefix: "Clinic",
        onReportConfiguration: _ctx.init,
        customBtns: _ctx.customBtns,
        paginated: ""
      }, null, 8, ["title", "rows", "fields", "columns", "period", "onReportConfiguration", "customBtns"])
    ]),
    _: 1
  });
}
const ClinicRegistrationReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ClinicRegistrationReport as default };
