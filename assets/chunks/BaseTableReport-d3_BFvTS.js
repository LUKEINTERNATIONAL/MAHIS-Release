import { c4 as Pagination, c3 as HisFooter, c5 as infoActionSheet, x as toastDanger, S as Service, c1 as removeTags, H as HisDate, _ as _export_sfc } from '../index-CMNG45JS.js';
import { R as ReportFilter, H as HisTable, a as HisStandardForm, b as toExportableFormat } from './ReportMixin.vue_vue_type_script_lang-C16UvHQR.js';
import { t as toCsv, a as toTablePDF } from './Export-0qrbPGgW.js';
import { s as defineComponent, du as IonImg, eN as IonThumbnail, af as IonRow, aA as IonCol, a7 as IonLabel, bO as IonChip, bf as IonFooter, aD as IonToolbar, aG as IonContent, bu as IonPage, I as IonHeader, c4 as loadingController, x as resolveComponent, y as openBlock, z as createElementBlock, S as withDirectives, T as vShow, A as createVNode, O as createBlock, B as withCtx, a5 as createTextVNode, D as toDisplayString, H as createCommentVNode, C as createBaseVNode, J as Fragment } from './vendor-CNJ0IVCn.js';

const _sfc_main = defineComponent({
  components: {
    HisStandardForm,
    IonHeader,
    ReportTable: HisTable,
    HisFooter,
    IonPage,
    IonContent,
    IonToolbar,
    Pagination,
    ReportFilter,
    IonFooter,
    IonChip,
    IonLabel,
    IonCol,
    IonRow,
    IonThumbnail,
    IonImg
  },
  props: {
    title: {
      type: String,
      required: true
    },
    customFilter: {
      type: Function
    },
    period: {
      type: String,
      default: ""
    },
    encryptPDF: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object
    },
    fields: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    paginated: {
      type: Boolean,
      default: false
    },
    customBtns: {
      type: Array,
      default: () => []
    },
    canExportPDf: {
      type: Boolean,
      default: true
    },
    canExportCsv: {
      type: Boolean,
      default: true
    },
    onReportConfiguration: {
      type: Function,
      required: false
    },
    rowParser: {
      type: Function
    },
    showFilters: {
      type: Boolean,
      default: false
    },
    showVLFilter: {
      type: Boolean,
      default: false
    },
    rowsPerPage: {
      type: Number
    },
    asyncRows: {
      type: Function
    },
    footerColor: {
      type: String,
      default: "dark"
    },
    customFileName: {
      type: String,
      default: ""
    },
    canExport: {
      type: Boolean,
      default: true
    },
    showReportStamp: {
      type: Boolean,
      default: true
    },
    customInfo: {
      type: Object
    },
    reportPrefix: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    formData: {},
    computeFormData: {},
    btns: [],
    isLoadingData: false,
    showForm: false,
    logo: "@/public/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png",
    isTableLoading: false,
    searchFilter: "",
    itemsPerPage: 50,
    itemsVLtype: "",
    currentPage: 0,
    tableRows: [],
    totalPages: 0,
    activeColumns: [],
    activeRows: [],
    date: HisDate.toStandardHisDisplayFormat(Service.getSessionDate()),
    apiVersion: Service.getApiVersion(),
    coreVersion: Service.getCoreVersion(),
    siteUUID: Service.getSiteUUID(),
    tableCssTheme: "opd-report-theme"
  }),
  methods: {
    getFileName() {
      return `${this.reportPrefix ?? ""} ${Service.getLocationName()} ${removeTags(this.title).replace(this.reportPrefix, "")} ${this.period ?? this.date}`;
    },
    pdfEncryptionData() {
      const password = Service.getUserName();
      return {
        encryption: {
          userPassword: password,
          ownerPassword: password,
          userPermissions: ["print"]
        }
      };
    },
    async onFinish(formData, computedData) {
      this.formData = formData;
      this.computeFormData = computedData;
      this.showForm = false;
      await this.presentLoading();
      try {
        if (this.onReportConfiguration) await this.onReportConfiguration(this.formData, this.computeFormData);
        loadingController.dismiss();
      } catch (e) {
        console.error(e);
        toastDanger(`${e}`);
        loadingController.dismiss();
      }
    },
    async reloadReport() {
      await this.onFinish(this.formData, this.computeFormData);
    },
    async presentLoading() {
      const loading = await loadingController.create({
        message: "Please wait...",
        backdropDismiss: false
      });
      await loading.present();
    }
  },
  created() {
    this.showForm = !!this.fields.length;
    this.btns = this.customBtns;
    this.btns.push(
      {
        name: "CSV",
        size: "large",
        slot: "start",
        color: "primary",
        visible: this.canExportCsv,
        onClick: async () => {
          const { columns, rows } = toExportableFormat(this.columns, this.rows, "csvMode");
          toCsv(
            columns,
            [
              ...rows,
              [`Date Created: ${this.date}`],
              [`Period: ${this.period}`],
              [`MaHIS Version: ${this.coreVersion}`],
              [`API Version: ${this.apiVersion}`],
              [`Site UUID: ${this.siteUUID}`]
            ],
            this.getFileName()
          );
        }
      },
      {
        name: "PDF",
        size: "large",
        slot: "start",
        color: "primary",
        visible: this.canExportPDf,
        onClick: async () => {
          let mode = "pdfMode";
          if (this.encryptPDF) {
            const option = await infoActionSheet(
              "Security warning",
              "PDF may contain private data that will require a password to unlock",
              "To access private data choose Secure PDF over Regular PDF",
              [
                {
                  name: "Secure PDF",
                  slot: "start",
                  color: "success"
                },
                {
                  name: "Regular PDF",
                  slot: "start",
                  color: "success"
                }
              ],
              "his-danger-color"
            );
            mode = option === "Secure PDF" ? "pdfMode" : "ignorePDFColumnexport";
          }
          const { columns, rows } = toExportableFormat(this.activeColumns, this.activeRows, mode);
          toTablePDF(
            columns,
            rows,
            this.getFileName(),
            false,
            this.encryptPDF && mode != "ignorePDFColumnexport" ? this.pdfEncryptionData() : {}
          );
        }
      },
      {
        name: "Back",
        size: "large",
        slot: "end",
        color: "primary",
        visible: true,
        onClick: () => this.showForm = true
      },
      {
        name: "Refresh",
        size: "large",
        slot: "end",
        color: "warning",
        visible: true,
        onClick: () => this.reloadReport()
      },
      {
        name: "Finish",
        size: "large",
        slot: "end",
        color: "success",
        visible: true,
        onClick: () => this.$router.push({ path: "/" })
      }
    );
  }
});

const _hoisted_1 = { class: "report-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_his_standard_form = resolveComponent("his-standard-form");
  const _component_ion_img = resolveComponent("ion-img");
  const _component_ion_thumbnail = resolveComponent("ion-thumbnail");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_pan = resolveComponent("pan");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_report_filter = resolveComponent("report-filter");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_report_table = resolveComponent("report-table");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_pagination = resolveComponent("pagination");
  const _component_ion_chip = resolveComponent("ion-chip");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_his_footer = resolveComponent("his-footer");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createElementBlock(Fragment, null, [
    withDirectives(createVNode(_component_his_standard_form, {
      onOnFinish: _ctx.onFinish,
      skipSummary: true,
      fields: _ctx.fields
    }, null, 8, ["onOnFinish", "fields"]), [
      [vShow, _ctx.showForm]
    ]),
    !_ctx.showForm ? (openBlock(), createBlock(_component_ion_page, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_ion_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_toolbar, null, {
              default: withCtx(() => [
                createVNode(_component_ion_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_ion_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_thumbnail, { slot: "start" }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_img, { src: _ctx.logo }, null, 8, ["src"]),
                            _cache[9] || (_cache[9] = createTextVNode(" dpbnbnbnbn ", -1))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_row, { style: { "width": "200%" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_col, null, {
                              default: withCtx(() => [
                                createTextVNode(" Title: " + toDisplayString(_ctx.title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_col, null, {
                              default: withCtx(() => [
                                createTextVNode(" Period: " + toDisplayString(_ctx.period), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_col, null, {
                              default: withCtx(() => [
                                _ctx.customInfo ? (openBlock(), createBlock(_component_pan, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.customInfo.label) + ": " + toDisplayString(_ctx.customInfo.value), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_report_filter, {
                          slot: "end",
                          showPerPageFilter: _ctx.showFilters || _ctx.paginated,
                          disableSearchFilter: _ctx.isTableLoading,
                          disablePerPageFilter: _ctx.isTableLoading,
                          totalRowCount: _ctx.tableRows.length,
                          customFilter: _ctx.customFilter,
                          onOnItemsPerPage: _cache[0] || (_cache[0] = (i) => _ctx.itemsPerPage = i),
                          onOnItemsVLtype: _cache[1] || (_cache[1] = (f) => _ctx.itemsVLtype = f),
                          onOnSearchFilter: _cache[2] || (_cache[2] = (f) => _ctx.searchFilter = f)
                        }, null, 8, ["showPerPageFilter", "disableSearchFilter", "disablePerPageFilter", "totalRowCount", "customFilter"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_content, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(_component_report_table, {
                rows: _ctx.rows,
                paginated: _ctx.paginated,
                asyncRows: _ctx.asyncRows,
                rowParser: _ctx.rowParser,
                config: { ..._ctx.config, tableCssTheme: _ctx.tableCssTheme },
                columns: _ctx.columns,
                showFilters: _ctx.showFilters,
                newPage: _ctx.currentPage,
                searchFilter: _ctx.searchFilter,
                rowsPerPage: _ctx.itemsPerPage,
                onOnIsLoading: _cache[3] || (_cache[3] = (l) => _ctx.isTableLoading = l),
                onOnTableRows: _cache[4] || (_cache[4] = (r) => _ctx.tableRows = r),
                onOnPagination: _cache[5] || (_cache[5] = (p) => _ctx.totalPages = p.length),
                onOnActiveColumns: _cache[6] || (_cache[6] = (c) => _ctx.activeColumns = c),
                onOnActiveRows: _cache[7] || (_cache[7] = (r) => _ctx.activeRows = r)
              }, null, 8, ["rows", "paginated", "asyncRows", "rowParser", "config", "columns", "showFilters", "newPage", "searchFilter", "rowsPerPage"])
            ])
          ]),
          _: 1
        }),
        createVNode(_component_ion_footer, null, {
          default: withCtx(() => [
            !_ctx.searchFilter && _ctx.paginated || !_ctx.searchFilter && _ctx.totalPages > 0 && _ctx.paginated ? (openBlock(), createBlock(_component_ion_toolbar, { key: 0 }, {
              default: withCtx(() => [
                createVNode(_component_pagination, {
                  onClickPrevious: () => {
                  },
                  onClickNext: () => {
                  },
                  page: 1,
                  disableNext: false,
                  disablePrevious: false,
                  perPage: _ctx.itemsPerPage,
                  maxVisibleButtons: 10,
                  totalPages: _ctx.totalPages,
                  onOnChangePage: _cache[8] || (_cache[8] = (p) => _ctx.currentPage = p)
                }, null, 8, ["perPage", "totalPages"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.showReportStamp ? (openBlock(), createBlock(_component_ion_toolbar, { key: 1 }, {
              default: withCtx(() => [
                createVNode(_component_ion_chip, { color: "primary" }, {
                  default: withCtx(() => [
                    _cache[10] || (_cache[10] = createTextVNode("Date Created: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.date), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_ion_chip, { color: "primary" }, {
                  default: withCtx(() => [
                    _cache[11] || (_cache[11] = createTextVNode("MaHIS Version: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.coreVersion), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_ion_chip, { color: "primary" }, {
                  default: withCtx(() => [
                    _cache[12] || (_cache[12] = createTextVNode("API Version: ", -1)),
                    createBaseVNode("b", null, toDisplayString(_ctx.apiVersion), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_his_footer, {
          color: _ctx.footerColor,
          btns: _ctx.btns
        }, null, 8, ["color", "btns"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 64);
}
const ReportTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-83fac94b"]]);

export { ReportTemplate as R };
