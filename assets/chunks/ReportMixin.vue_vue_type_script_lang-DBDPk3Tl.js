import { eI as sort, s as defineComponent, eJ as caretForward, eK as caretBack, bV as arrowDown, bU as arrowUp, dZ as IonSkeletonText, L as IonIcon, N as IonButton, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, J as Fragment, R as renderList, a4 as normalizeClass, P as normalizeStyle, a5 as createTextVNode, D as toDisplayString, O as createBlock, H as createCommentVNode, A as createVNode, a8 as withModifiers, B as withCtx, E as renderSlot, af as IonRow, az as IonCol, aA as IonGrid, aD as IonTitle, I as IonHeader, aC as IonToolbar, be as IonFooter, aF as IonContent, bt as IonPage, bd as IonButtons, c5 as loadingController, K as modalController, W as alertController, cC as toastController, cS as defineAsyncComponent, cI as __vitePreload, eL as KeepAlive, c2 as resolveDynamicComponent, S as withDirectives, T as vShow, a6 as IonInput, ap as IonItem, w as watch, f as ref, ax as vModelSelect, p as dayjs, bO as IonChip } from './vendor-BIA1Qh8a.js';
import { l as lodashExports } from './lodash-IJNQpAoV.js';
import { S as Service, aM as PrintoutService, b_ as Url, H as HisDate, b$ as toNumString, c0 as removeTags, x as toastDanger, c1 as delayPromise, _ as _export_sfc, t as toastWarning, k as alertConfirmation, j as STANDARD_DATE_FORMAT, c2 as HisFooter, c3 as Pagination, c4 as infoActionSheet, P as PatientService } from '../index-DJyJhMgX.js';
import { t as toCsv, a as toTablePDF } from './Export-DFbAU9-5.js';

const LA_TYPES = {
  one: "AL 1",
  two: "AL 2",
  three: "AL 3",
  four: "LA 4"
};
const NCD_TYPES = [
  "Diabetes",
  "Hypertension",
  "Stroke",
  "Suspected cancer",
  "Confirmed cancer",
  "Palliative cancer",
  "Asthma",
  "Depression",
  "Acute psychosis",
  "Chronic psychosis",
  "Epilepsy"
];
const MENTAL_HEALTH_DIAGNOSIS = [
  "Organic mental disorder (Chronic)",
  "Organic mental disorder (acute)",
  "Alcohol use mental disorder",
  "Drug use mental disorder",
  "Schizophrenia",
  "Acute and transient psychotic disorder",
  "Schizo-affective disorder",
  "Mood-affective disorder (MANIC)",
  "Mood-affective disorder (BIPOLAR)",
  "Mood-affective disorder (DEPRESSION)",
  "Anxiety disorder",
  "Stress reaction adjustment disorder",
  "Dissociative conversion disorder",
  "Somatoform disorder",
  "Puerperal mental disorder",
  "Personality/Behaviour disorder",
  "Mental retardation",
  "Psychological mental disorder",
  "Hyperkinetic conduct disorder",
  "Epilepsy"
];
class OpdReportService extends Service {
  programID;
  startDate;
  endDate;
  date;
  epiweek;
  constructor() {
    super();
    this.endDate = "";
    this.startDate = "";
    this.epiweek = "";
    this.date = Service.getSessionDate();
    this.programID = Service.getProgramID();
  }
  getPatientsWithNIDs() {
    return this.getReport("with_nids");
  }
  getClinicRegistrations() {
    return this.getReport("registration");
  }
  getAttendance() {
    return this.getReport(`programs/${this.programID}/reports/attendance`);
  }
  getDrugs() {
    const url = `programs/${this.programID}/reports/drug`;
    return Service.getJson(url, {
      "start_date": this.startDate,
      "end_date": this.endDate,
      "date": this.date
    });
  }
  getDiagnosis() {
    const url = `programs/${this.programID}/reports/diagnosis`;
    return Service.getJson(url, {
      "start_date": this.startDate,
      "end_date": this.endDate,
      "date": this.date
    });
  }
  getDiagnosisByAddress() {
    return this.getReport("diagnosis_by_address");
  }
  getLaPrescriptions() {
    const url = `programs/${this.programID}/reports/la_prescriptions`;
    return Service.getJson(url, {
      "start_date": this.startDate,
      "end_date": this.endDate
    });
  }
  getMalariaReport() {
    const url = `programs/${this.programID}/reports/malaria_report`;
    return Service.getJson(url, {
      "start_date": this.startDate,
      "end_date": this.endDate,
      "date": this.date
    });
  }
  printLaReport(data) {
    const printService = new PrintoutService();
    const url = `programs/${this.programID}/barcodes/la_report`;
    const params = {
      "date[start]": this.startDate,
      "date[end]": this.endDate
    };
    Object.keys(LA_TYPES).forEach((v, i) => {
      i++;
      params[`${i}[prescription]`] = data[`total_la_${v}_prescribed_drugs`];
      params[`${i}[dispensed]`] = data[`total_la_${v}_dispensed_drugs`];
    });
    return printService.printLbl(`${url}?${Url.parameterizeObjToString(params)}`);
  }
  getDateIntervalPeriod() {
    return `${HisDate.toStandardHisDisplayFormat(this.startDate)} - ${HisDate.toStandardHisDisplayFormat(this.endDate)}`;
  }
  setStartDate(startDate) {
    this.startDate = startDate;
  }
  setEndDate(endDate) {
    this.endDate = endDate;
  }
  setEpiWeek(epiweek) {
    this.epiweek = epiweek;
  }
  getReportPeriod() {
    return this.startDate && this.endDate ? `${HisDate.toStandardHisDisplayFormat(this.startDate)} - ${HisDate.toStandardHisDisplayFormat(this.endDate)}` : "-";
  }
  getReport(url, params = {}) {
    return Service.getJson(url, this.buildRequest(params));
  }
  buildRequest(config = {}) {
    const payload = { "date": this.date, "program_id": this.programID };
    if (this.startDate && this.endDate) {
      payload["start_date"] = this.startDate;
      payload["end_date"] = this.endDate;
    }
    if (this.epiweek) {
      payload["epiweek"] = this.epiweek;
    }
    return { ...payload, ...config };
  }
  static getReportQuarters(minDuration = 4) {
    const quarters = [];
    let year = HisDate.getCurrentYear();
    for (let i = 0; i < minDuration; ++i) {
      quarters.push({ name: `Q4 ${year}`, start: `${year}-10-01`, end: `${year}-12-31` });
      quarters.push({ name: `Q3 ${year}`, start: `${year}-07-01`, end: `${year}-09-30` });
      quarters.push({ name: `Q2 ${year}`, start: `${year}-04-01`, end: `${year}-06-30` });
      quarters.push({ name: `Q1 ${year}`, start: `${year}-01-01`, end: `${year}-03-31` });
      --year;
    }
    return quarters;
  }
}

function prepareCSVValue(value) {
  if (typeof value !== "string") return value;
  return removeTags(value).replace(/,/gi, " ").trim();
}
function toExportableFormat(columns, rows, mode = "") {
  const strRows = [];
  const strCols = [];
  const isExportable = (column) => {
    if (mode === "csvMode" && "csvExportable" in column) {
      return column.csvExportable || false;
    }
    if (mode === "pdfMode" && "pdfExportable" in column) {
      return column.pdfExportable != void 0 ? column.pdfExportable : true;
    }
    if (mode === "ignorePDFColumnexport" && "pdfExportable" in column && column.pdfExportable) {
      return false;
    }
    if ("exportable" in column) {
      return column.exportable || false;
    }
  };
  for (const index in rows) {
    const exportableRow = [];
    rows[index].forEach((r, i) => {
      const column = columns[columns.length - 1][i];
      if (isExportable(column)) {
        exportableRow.push(r.value ? prepareCSVValue(r.value) : prepareCSVValue(r.td));
      }
    });
    strRows.push(exportableRow);
  }
  for (const index in columns) {
    const exportableColumns = [];
    columns[index].forEach((c) => {
      if (isExportable(c)) {
        exportableColumns.push(c.value ? prepareCSVValue(c.value) : prepareCSVValue(c.th));
      }
    });
    if (!lodashExports.isEmpty(exportableColumns)) {
      strCols.push(exportableColumns);
    }
  }
  return { columns: strCols, rows: strRows };
}
function configCell(conf) {
  const attributes = {
    th: () => {
      return conf.th ? conf.th : "";
    },
    td: () => {
      return conf.td ? conf.td : "";
    },
    value: () => {
      return conf.value ? conf.value : "";
    },
    sortValue: () => {
      return conf.sortValue ? conf.sortValue : 0;
    },
    type() {
      return conf.type ? conf.type : "string";
    },
    exportable() {
      return "exportable" in conf ? conf.exportable : true;
    },
    csvExportable() {
      return "csvExportable" in conf ? conf.csvExportable : true;
    },
    pdfExportable() {
      return "pdfExportable" in conf ? conf.pdfExportable : void 0;
    },
    sortable() {
      return "sortable" in conf ? conf.sortable : true;
    },
    colspan() {
      return conf.colspan ? conf.colspan : 0;
    },
    cssClass() {
      return conf.cssClass ? conf.cssClass : 0;
    },
    style() {
      return conf.style ? conf.style : 0;
    },
    ascSort() {
      if (!conf.ascSort) {
        return (index, rows) => {
          return sort(rows).asc((r) => r[index]?.sortValue || r[index]?.td);
        };
      }
      return conf.ascSort;
    },
    descSort() {
      if (!conf.descSort) {
        return (index, rows) => {
          return sort(rows).desc((r) => r[index]?.sortValue || r[index]?.td);
        };
      }
      return conf.descSort;
    }
  };
  const finalConf = {};
  for (const attr in attributes) {
    finalConf[attr] = attributes[attr]();
  }
  return finalConf;
}
function thTxt(th, params = {}) {
  const data = params;
  data.th = th;
  data.type = "string";
  return configCell(data);
}
function thDate(th, params = {}) {
  const data = params;
  data.th = th;
  data.type = "date";
  return configCell(data);
}
function thNum(th, params = {}) {
  const data = params;
  data.th = th;
  data.type = "number";
  return configCell(data);
}
function tdNum(td2, params = {}) {
  const data = { ...params };
  data.td = toNumString(td2);
  data.sortValue = parseInt(`${td2}`);
  data.style = {
    textAlign: "right",
    paddingRight: ".5rem",
    ...data.style
  };
  return configCell(data);
}
function tdDate(td2, params = {}) {
  const data = params;
  data.td = td2 ? HisDate.toStandardHisDisplayFormat(td2) : "";
  return configCell(data);
}
function td(td2, params = {}) {
  return { td: td2, ...params };
}
function tdLink(td2, click, params = {}) {
  return {
    td: td2,
    event: {
      click,
      obj: "link"
    },
    ...params
  };
}
function tdBtn(td2, click, params = {}, color = "") {
  const data = {
    td: td2,
    event: {
      click,
      color,
      obj: "button"
    }
  };
  if (params.event) {
    data.event = { ...data.event, ...params.event };
    delete params.event;
  }
  return Object.assign(data, params);
}
const table = {
  thTxt,
  thNum,
  thDate,
  tdNum,
  td,
  tdBtn,
  tdDate,
  tdLink
};

const _sfc_main$b = defineComponent({
  emits: ["onActiveRows", "onActiveColumns", "onPagination", "onIsLoading", "onTableRows"],
  components: {
    IonButton,
    IonIcon,
    IonSkeletonText
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Object,
      required: true
    },
    rows: {
      type: Array,
      default: () => []
    },
    newPage: {
      type: Number
    },
    rowsPerPage: {
      type: Number
    },
    asyncRows: {
      type: Function
    },
    asyncRowParser: {
      type: Function
    },
    rowParser: {
      type: Function
    },
    searchFilter: {
      type: String
    },
    showFilters: {
      type: Boolean,
      default: false
    },
    paginated: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    arrowUp,
    arrowDown,
    caretBack,
    caretForward,
    sortedIndex: -1,
    sortOrder: "descSort",
    tableColumns: [],
    tableRows: [],
    paginatedRows: [],
    activeRows: [],
    currentPage: 0,
    itemsPerPage: 20,
    isLoading: false,
    errorMessage: ""
  }),
  watch: {
    isLoading: {
      handler(isLoading) {
        if (typeof isLoading === "boolean") this.$emit("onIsLoading", isLoading);
      },
      immediate: true
    },
    newPage: {
      handler(newPage) {
        if (typeof newPage === "number") this.onChangePage(newPage);
      },
      immediate: true
    },
    rowsPerPage: {
      handler(perPage) {
        if (typeof perPage === "number") this.itemsPerPage = perPage;
      },
      immediate: true
    },
    async itemsPerPage(perPage) {
      if (!lodashExports.isEmpty(this.tableRows)) {
        this.currentPage = 0;
        await delayPromise(100);
        this.paginateTableRows(perPage);
        await this.setPage(this.currentPage);
      }
    },
    tableRows: {
      handler(tableRows) {
        if (!lodashExports.isEmpty(tableRows)) this.$emit("onTableRows", tableRows);
      },
      immediate: true,
      deep: true
    },
    searchFilter(searchTerm) {
      if (!searchTerm) {
        this.paginated ? this.setPage(this.currentPage) : this.activeRows = this.tableRows;
      } else {
        this.activeRows = this.searchDataSet(searchTerm, this.tableRows);
      }
    },
    activeRows: {
      handler(rows) {
        this.$emit("onActiveRows", rows);
      },
      immediate: true,
      deep: true
    },
    columns: {
      handler(columns) {
        if (lodashExports.isEmpty(columns)) return;
        if (this.showIndex()) {
          const tcolumns = [...this.columns];
          const lastColIndex = this.columns.length - 1;
          tcolumns[lastColIndex] = [table.thNum("#"), ...tcolumns[lastColIndex]];
          this.tableColumns = tcolumns;
        } else {
          this.tableColumns = columns;
        }
        this.$emit("onActiveColumns", this.tableColumns);
      },
      immediate: true,
      deep: true
    },
    asyncRows: {
      async handler(func) {
        this.errorMessage = "";
        if (typeof func === "function") {
          this.isLoading = true;
          try {
            this.tableRows = this.addColumnIndexes(await func());
            if (this.paginated) {
              this.paginateTableRows();
              await this.setPage(0);
            } else {
              this.activeRows = this.tableRows;
            }
          } catch (e) {
            this.errorMessage = `${e}`;
            toastDanger(`${e}`);
            console.error(e);
          }
          this.isLoading = false;
        }
      },
      immediate: true,
      deep: true
    },
    rows: {
      async handler(rows) {
        this.errorMessage = "";
        if (!rows || lodashExports.isEmpty(rows)) {
          this.activeRows = [];
          this.tableRows = [];
          return;
        }
        this.tableRows = this.addColumnIndexes(rows);
        if (this.paginated) {
          this.paginateTableRows();
          await this.setPage(0);
        } else {
          this.activeRows = this.tableRows;
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    showIndex() {
      return this.config && "showIndex" in this.config ? this.config.showIndex : false;
    },
    addColumnIndexes(rows) {
      return this.showIndex() ? rows.map((r, i) => {
        const row = [table.td(i + 1)];
        return Array.isArray(r) ? row.concat(r) : [...row, r];
      }) : rows;
    },
    paginateTableRows(perPage = 0) {
      this.paginatedRows = lodashExports.chunk(this.tableRows, perPage ? perPage : this.itemsPerPage);
      this.$emit("onPagination", this.paginatedRows);
    },
    async setPage(index) {
      this.activeRows = [];
      const pageRows = this.paginatedRows[index];
      if (!pageRows) return;
      try {
        if (typeof this.asyncRowParser === "function") {
          this.activeRows = pageRows;
          for (const i in pageRows) {
            this.activeRows[i] = await this.asyncRowParser(pageRows[i]);
          }
        } else {
          this.isLoading = true;
          this.activeRows = typeof this.rowParser === "function" ? await this.rowParser(pageRows) : pageRows;
        }
      } catch (e) {
        toastDanger(`${e}`);
        this.errorMessage = `${e}`;
        console.error(e);
      }
      this.isLoading = false;
    },
    async sort(index, column) {
      if (this.showIndex() && typeof this.rowParser === "function" && index != 0) return;
      if (index === this.sortedIndex) {
        this.sortOrder = this.sortOrder === "ascSort" ? "descSort" : "ascSort";
      } else {
        this.sortOrder = "ascSort";
      }
      this.sortedIndex = index;
      if (this.sortOrder in column) {
        if (this.paginated) {
          this.tableRows = column[this.sortOrder](index, this.tableRows);
          this.paginateTableRows();
          await this.setPage(this.currentPage);
        } else {
          this.activeRows = column[this.sortOrder](index, this.tableRows);
        }
      }
    },
    searchDataSet(searchTerm, dataset) {
      return dataset.filter((r) => {
        const rowText = JSON.stringify(r).match(/"td":"(.*?)"/g)?.join(" ").replace(/"td":|"/g, "");
        return rowText?.match(new RegExp(searchTerm, "i")) || false;
      });
    },
    async onChangePage(page) {
      this.currentPage = page;
      await this.setPage(page);
    }
  },
  computed: {
    noData() {
      return !this.isLoading && lodashExports.isEmpty(this.activeRows);
    },
    columnLength() {
      try {
        return this.tableColumns[0].length;
      } catch (e) {
        console.warn(e);
        return 5;
      }
    },
    skeletonRows() {
      const rows = [];
      const totalRows = this.config.skeletonTextRows ? this.config.skeletonTextRows : 10;
      for (let i = 0; i < totalRows; ++i) {
        rows.push(i);
      }
      return rows;
    }
  }
});

const _hoisted_1$3 = {
  key: 0,
  class: "stick-report-header"
};
const _hoisted_2$1 = ["colspan", "onClick"];
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = ["colspan"];
const _hoisted_5$1 = { key: 2 };
const _hoisted_6$1 = ["colspan"];
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = ["onClick"];
const _hoisted_9 = { key: 1 };
const _hoisted_10 = {
  key: 0,
  class: "no-data-section vertically-align"
};
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { key: 1 };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_skeleton_text = resolveComponent("ion-skeleton-text");
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("table", {
      class: normalizeClass(["report-table", _ctx.config.tableCssTheme || ""])
    }, [
      _ctx.tableColumns ? (openBlock(), createElementBlock("thead", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableColumns, (columns, colIndex) => {
          return openBlock(), createElementBlock("tr", { key: colIndex }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(columns, (column, columnIndex) => {
              return openBlock(), createElementBlock("th", {
                key: columnIndex,
                colspan: column.colspan || 0,
                onClick: ($event) => _ctx.sort(columnIndex, column),
                style: normalizeStyle(column.style),
                class: normalizeClass(column.cssClass)
              }, [
                createTextVNode(toDisplayString(column.th) + " ", 1),
                _ctx.sortedIndex === columnIndex && column.sortable && colIndex + 1 === _ctx.tableColumns.length ? (openBlock(), createBlock(_component_ion_icon, {
                  key: 0,
                  icon: _ctx.sortOrder === "ascSort" ? _ctx.arrowUp : _ctx.arrowDown
                }, null, 8, ["icon"])) : createCommentVNode("", true)
              ], 14, _hoisted_2$1);
            }), 128))
          ]);
        }), 128))
      ])) : createCommentVNode("", true),
      _ctx.isLoading ? (openBlock(), createElementBlock("tbody", _hoisted_3$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.skeletonRows, (skeletonRow, skeletonIndex) => {
          return openBlock(), createElementBlock("tr", { key: skeletonIndex }, [
            createBaseVNode("td", { colspan: _ctx.columnLength }, [
              createVNode(_component_ion_skeleton_text, {
                animated: "",
                style: { "width": "100%", "height": "30px" }
              })
            ], 8, _hoisted_4$1)
          ]);
        }), 128))
      ])) : createCommentVNode("", true),
      !_ctx.noData ? (openBlock(), createElementBlock("tbody", _hoisted_5$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.activeRows, (row, rowIndex) => {
          return openBlock(), createElementBlock("tr", { key: rowIndex }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item, itemIndex) => {
              return openBlock(), createElementBlock("td", {
                key: itemIndex,
                colspan: item.colspan || 0,
                class: normalizeClass(item.cssClass),
                style: normalizeStyle(item.style)
              }, [
                item.event ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                  item?.event?.obj === "link" ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: "#",
                    class: normalizeClass(["his-sm-text", item.cssClass]),
                    style: normalizeStyle(item.style),
                    onClick: withModifiers(($event) => item.event.click(), ["prevent"])
                  }, toDisplayString(item.td), 15, _hoisted_8$1)) : createCommentVNode("", true),
                  item.event.obj === "button" ? (openBlock(), createBlock(_component_ion_button, {
                    key: 1,
                    color: item?.event?.color || "",
                    class: normalizeClass(item.cssClass),
                    style: normalizeStyle(item.style),
                    disabled: item?.event?.disabled != void 0 ? item.event.disabled === true : false,
                    onClick: ($event) => item.event.click()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.td), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "class", "style", "disabled", "onClick"])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(_component_ion_icon, {
                    class: "his-sm-text",
                    slot: "start",
                    "aria-hidden": "true",
                    icon: item.td
                  }, null, 8, ["icon"])
                ]))
              ], 14, _hoisted_6$1);
            }), 128))
          ]);
        }), 128))
      ])) : createCommentVNode("", true)
    ], 2),
    _ctx.noData ? (openBlock(), createElementBlock("h1", _hoisted_10, [
      _ctx.errorMessage ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(_ctx.errorMessage), 1)) : (openBlock(), createElementBlock("span", _hoisted_12, " No data available in table "))
    ])) : createCommentVNode("", true)
  ], 64);
}
const HisTable = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-3ccbcc07"]]);

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

var FieldType = /* @__PURE__ */ ((FieldType2) => {
  FieldType2["TT_LINKAGE_CODE"] = "LinkageCodeInput";
  FieldType2["TT_MULTI_SELECT_GRID"] = "HisMultiSelectGrid";
  FieldType2["TT_AGE_INPUT"] = "HisAgeInput";
  FieldType2["TT_GROUP_SELECTOR"] = "HisGroupSelector";
  FieldType2["TT_DATA_TABLE"] = "HisDataTable";
  FieldType2["TT_GRID_SELECTOR"] = "HisGridSelector";
  FieldType2["TT_NOTE"] = "HisNote";
  FieldType2["TT_BARCODE"] = "HisBarcodeInput";
  FieldType2["TT_MONTHLY_DAYS"] = "HisMonthlyDays";
  FieldType2["TT_TEXT"] = "HisTextInput";
  FieldType2["TT_NUMBER"] = "HisNumberInput";
  FieldType2["TT_DATETIME"] = "datetime";
  FieldType2["TT_SELECT"] = "HisSelect";
  FieldType2["TT_MULTIPLE_SELECT"] = "HisMultipleSelect";
  FieldType2["TT_ART_REGIMEN_SELECTION"] = "HisArtRegimenSelection";
  FieldType2["TT_NEXT_VISIT_INTERVAL_SELECTION"] = "HisNextVisitInterval";
  FieldType2["TT_TABLE_VIEWER"] = "HisTableViewer";
  FieldType2["TT_DOSAGE_INPUT"] = "HisDosageInput";
  FieldType2["TT_YES_NO"] = "YesNoSelect";
  FieldType2["TT_MULTIPLE_YES_NO"] = "MultiYesNoSelect";
  FieldType2["TT_SUMMARY"] = "HisSummary";
  FieldType2["TT_WEIGHT_CHART"] = "HisWeightChart";
  FieldType2["TT_VITALS_ENTRY"] = "HisVitalsEntry";
  FieldType2["TT_ADHERENCE_INPUT"] = "HisAdherenceInput";
  FieldType2["TT_ART_STAGING_SUMMARY"] = "ArtStagingSummary";
  FieldType2["TT_LAB_ORDERS"] = "HisLabOrders";
  FieldType2["TT_APPOINTMENTS_ENTRY"] = "HisAppointments";
  FieldType2["TT_DISPENSATION_INPUT"] = "DrugDispensationSelection";
  FieldType2["TT_PROGRAM_SELECTION"] = "ProgramSelection";
  FieldType2["TT_DATE_PICKER"] = "HisDatePicker";
  FieldType2["TT_PERSON_RESULT_VIEW"] = "PersonSearchView";
  FieldType2["TT_RELATION_SELECTION"] = "RelationsSelection";
  FieldType2["TT_FILING_NUMBER_VIEW"] = "FilingNumberView";
  FieldType2["TT_CARD_SELECTOR"] = "HisCardSelector";
  FieldType2["TT_PERSON_MATCH_VIEW"] = "PersonMatchView";
  FieldType2["TT_FULL_DATE"] = "HisDateInput";
  FieldType2["TT_BATCH_ENTRY"] = "HisBatchEntry";
  FieldType2["TT_BATCH_VERIFICATION"] = "HisBatchVerification";
  FieldType2["TT_BATCH_MOVEMENT"] = "HisBatchMovement";
  FieldType2["TT_COMPLAINTS_PICKER"] = "HisComplaintsPicker";
  FieldType2["TT_RADIOLOGY_PICKER"] = "HisRadiologyPicker";
  FieldType2["TT_IP_ADDRESS"] = "HisIPAddress";
  FieldType2["TT_TEXT_BANNER"] = "HisTextBanner";
  FieldType2["TT_DRUG_DISPENSER"] = "GeneralDrugDispenser";
  FieldType2["TT_CLINIC_HOLIDAY_PICKER"] = "HisClinicHolidayPicker";
  FieldType2["TT_ANC_PREGNANCY_INPUT_CONFIG"] = "AncPregnancyInfoConfig";
  FieldType2["TT_ANC_PREGNANCY_DETAILS_INPUT"] = "AncPregnancyDetailsInput";
  FieldType2["TT_ANC_LMP_DATE_INPUT"] = "AncLmpDateInput";
  FieldType2["TT_ANC_DRUGSET_INPUT"] = "AncDrugSetInput";
  FieldType2["TT_DRUG_TRANSFER_IN"] = "DrugTransferInput";
  FieldType2["TT_PRESCRIPTION_INPUT"] = "HisPrescriptionInput";
  FieldType2["TT_INFINITE_SCROLL_MULTIPLE_SELECT"] = "HisInfiniteScrollMultipleSelect";
  return FieldType2;
})(FieldType || {});
const COMPONENT_REFS = [
  "LinkageCodeInput" /* TT_LINKAGE_CODE */,
  "HisMultiSelectGrid" /* TT_MULTI_SELECT_GRID */,
  "HisAgeInput" /* TT_AGE_INPUT */,
  "HisBarcodeInput" /* TT_BARCODE */,
  "HisNote" /* TT_NOTE */,
  "HisSelect" /* TT_SELECT */,
  "HisCardSelector" /* TT_CARD_SELECTOR */,
  "HisMultipleSelect" /* TT_MULTIPLE_SELECT */,
  "HisTextInput" /* TT_TEXT */,
  "HisNumberInput" /* TT_NUMBER */,
  "HisMonthlyDays" /* TT_MONTHLY_DAYS */,
  "HisArtRegimenSelection" /* TT_ART_REGIMEN_SELECTION */,
  "HisNextVisitInterval" /* TT_NEXT_VISIT_INTERVAL_SELECTION */,
  "HisTableViewer" /* TT_TABLE_VIEWER */,
  "HisDosageInput" /* TT_DOSAGE_INPUT */,
  "YesNoSelect" /* TT_YES_NO */,
  "MultiYesNoSelect" /* TT_MULTIPLE_YES_NO */,
  "HisWeightChart" /* TT_WEIGHT_CHART */,
  "HisVitalsEntry" /* TT_VITALS_ENTRY */,
  "HisAppointments" /* TT_APPOINTMENTS_ENTRY */,
  "HisComplaintsPicker" /* TT_COMPLAINTS_PICKER */,
  "HisClinicHolidayPicker" /* TT_CLINIC_HOLIDAY_PICKER */,
  "HisSummary" /* TT_SUMMARY */,
  "ArtStagingSummary" /* TT_ART_STAGING_SUMMARY */,
  "HisAdherenceInput" /* TT_ADHERENCE_INPUT */,
  "HisLabOrders" /* TT_LAB_ORDERS */,
  "PersonSearchView" /* TT_PERSON_RESULT_VIEW */,
  "ProgramSelection" /* TT_PROGRAM_SELECTION */,
  "HisDatePicker" /* TT_DATE_PICKER */,
  "RelationsSelection" /* TT_RELATION_SELECTION */,
  "FilingNumberView" /* TT_FILING_NUMBER_VIEW */,
  "PersonMatchView" /* TT_PERSON_MATCH_VIEW */,
  "HisDateInput" /* TT_FULL_DATE */,
  "HisBatchEntry" /* TT_BATCH_ENTRY */,
  "HisBatchVerification" /* TT_BATCH_VERIFICATION */,
  "HisBatchMovement" /* TT_BATCH_MOVEMENT */,
  "HisIPAddress" /* TT_IP_ADDRESS */,
  "HisTextBanner" /* TT_TEXT_BANNER */,
  "DrugDispensationSelection" /* TT_DISPENSATION_INPUT */,
  "HisDataTable" /* TT_DATA_TABLE */,
  "HisGroupSelector" /* TT_GROUP_SELECTOR */,
  "AncPregnancyInfoConfig" /* TT_ANC_PREGNANCY_INPUT_CONFIG */,
  "AncPregnancyDetailsInput" /* TT_ANC_PREGNANCY_DETAILS_INPUT */,
  "AncLmpDateInput" /* TT_ANC_LMP_DATE_INPUT */,
  "DrugTransferInput" /* TT_DRUG_TRANSFER_IN */,
  "HisGridSelector" /* TT_GRID_SELECTOR */,
  "AncDrugSetInput" /* TT_ANC_DRUGSET_INPUT */,
  "HisRadiologyPicker" /* TT_RADIOLOGY_PICKER */,
  "HisPrescriptionInput" /* TT_PRESCRIPTION_INPUT */,
  "HisInfiniteScrollMultipleSelect" /* TT_INFINITE_SCROLL_MULTIPLE_SELECT */,
  "GeneralDrugDispenser" /* TT_DRUG_DISPENSER */
];

const _sfc_main$a = defineComponent({
  name: "ToolBarMediumCard"
});

const _hoisted_1$2 = { class: "tool-bar-medium-card" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const ToolBarMediumCard = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);

function convertArrayToTurples(items, size = 2) {
  return items.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(items.slice(i, i + size));
    return acc;
  }, []);
}
function orderObj(unordered, sorter) {
  return Object.keys(unordered).sort((a, b) => sorter(a, b)).reduce(
    (obj, key) => {
      obj[key] = unordered[key];
      return obj;
    },
    {}
  );
}
const Transformer = {
  convertArrayToTurples,
  orderObj
};

const _sfc_main$9 = defineComponent({
  name: "HisResultCard",
  components: { ToolBarMediumCard, IonGrid, IonCol, IonRow },
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    rowItems() {
      return Transformer.convertArrayToTurples(this.items, 2);
    }
  }
});

function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_tool_bar_medium_card = resolveComponent("tool-bar-medium-card");
  return openBlock(), createBlock(_component_tool_bar_medium_card, null, {
    default: withCtx(() => [
      createVNode(_component_ion_grid, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rowItems, (row, rIndex) => {
            return openBlock(), createBlock(_component_ion_row, { key: rIndex }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item, iIndex) => {
                  return openBlock(), createBlock(_component_ion_col, {
                    class: "col his-sm-text",
                    key: iIndex
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("b", null, toDisplayString(item.label) + ":", 1),
                      createTextVNode(" " + toDisplayString(item.value), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const InfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-19f0802a"]]);

const _sfc_main$8 = defineComponent({
  name: "ViewPort",
  props: {
    showFull: {
      type: Boolean,
      default: () => true
    }
  }
});

function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: "view-port",
    class: normalizeClass(!_ctx.showFull ? "half" : "")
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
const ViewPort = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-b4da23b3"]]);

const _sfc_main$7 = defineComponent({
  components: {
    ViewPort
  }
});

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [..._cache[0] || (_cache[0] = [
      createBaseVNode("div", { class: "linear-background" }, [
        createBaseVNode("div", { class: "inter-draw" }),
        createBaseVNode("div", { class: "inter-crop" }),
        createBaseVNode("div", { class: "inter-right--top" }),
        createBaseVNode("div", { class: "inter-right--bottom" })
      ], -1)
    ])]),
    _: 1
  });
}
const LoadingFormElement = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-e764537f"]]);

const _sfc_main$6 = defineComponent({
  components: {
    ViewPort
  }
});

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createBlock(_component_view_port, null, {
    default: withCtx(() => [..._cache[0] || (_cache[0] = [
      createBaseVNode("div", { class: "vertically-align" }, " Error Loading form element. Exit app and try again and check your network. ", -1)
    ])]),
    _: 1
  });
}
const ErrorFormElement = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);

function buildAsyncComponents$1() {
  const components = {};
  COMPONENT_REFS.forEach((name) => {
    components[name] = defineAsyncComponent({
      loader: () => __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../FormElements/BaseTextInput.vue": () => __vitePreload(() => import('./BaseTextInput-D8GVftnI.js'),true              ?[]:void 0,import.meta.url),"../FormElements/FieldMixin.vue": () => __vitePreload(() => import('./FieldMixin-CFKSyRjF.js'),true              ?[]:void 0,import.meta.url),"../FormElements/FilingNumberView.vue": () => __vitePreload(() => import('./FilingNumberView-DGgFZuTV.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisArtRegimenSelection.vue": () => __vitePreload(() => import('./HisArtRegimenSelection-BGz-zkum.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisCardSelector.vue": () => __vitePreload(() => import('./HisCardSelector-KVDWfH5I.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisComplaintsPicker.vue": () => __vitePreload(() => import('./HisComplaintsPicker-DTYrH0xZ.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisDataTable.vue": () => __vitePreload(() => import('./HisDataTable-14_xC0fX.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisDateInput.vue": () => __vitePreload(() => import('./HisDateInput-B_eXW_Ii.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisInfiniteScrollMultipleSelect.vue": () => __vitePreload(() => import('./HisInfiniteScrollMultipleSelect-uKICppE1.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisMonthlyDays.vue": () => __vitePreload(() => import('./HisMonthlyDays-ByT5sFTd.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisMultiSelectGrid.vue": () => __vitePreload(() => import('./HisMultiSelectGrid-AH-3BoRz.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisNextVisitInterval.vue": () => __vitePreload(() => import('./HisNextVisitInterval-CL2BA_NH.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisNumberInput.vue": () => __vitePreload(() => import('./HisNumberInput-CU2lHSc0.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisSelect.vue": () => __vitePreload(() => import('./HisSelect-BjaFJmah.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HorizontalLine.vue": () => __vitePreload(() => import('../index-DJyJhMgX.js').then(n => n.cR),true              ?[]:void 0,import.meta.url),"../FormElements/PersonMatchView.vue": () => __vitePreload(() => import('./PersonMatchView-1P7ccjhh.js'),true              ?[]:void 0,import.meta.url),"../FormElements/PersonSearchView.vue": () => __vitePreload(() => import('./PersonSearchView-Bq74hy8M.js'),true              ?[]:void 0,import.meta.url),"../FormElements/RelationsSelection.vue": () => __vitePreload(() => import('./RelationsSelection-lEFOnBaU.js'),true              ?[]:void 0,import.meta.url),"../FormElements/SelectMixin.vue": () => __vitePreload(() => import('./SelectMixin-Axn-S3fH.js'),true              ?[]:void 0,import.meta.url)})), `../FormElements/${name}.vue`, 3),
      loadingComponent: LoadingFormElement,
      errorComponent: ErrorFormElement,
      delay: 150,
      timeout: 5e4
    });
  });
  return components;
}
const _sfc_main$5 = defineComponent({
  name: "TouchscreenForm",
  components: {
    InfoCard,
    IonButtons,
    IonPage,
    IonContent,
    IonFooter,
    IonToolbar,
    IonButton,
    IonHeader,
    IonTitle,
    IonCol,
    IonRow,
    ...buildAsyncComponents$1()
  },
  emits: [
    "onFinish",
    "onIndex"
  ],
  props: {
    onFinish: {
      type: Function
    },
    skipSummary: {
      type: Boolean,
      default: false
    },
    activeField: {
      type: String
    },
    fields: {
      type: Object,
      required: true
    },
    cancelDestinationPath: {
      type: String
    },
    disableAutoModalDismiss: {
      type: Boolean
    },
    cancelAction: {
      type: Function
    }
  },
  data: () => ({
    ftBtnEvent: {
      eventIndex: 0,
      btnName: "",
      btnOutput: null
    },
    helpText: "",
    valueClearIndex: 0,
    currentIndex: 0,
    currentField: {},
    currentFieldContext: null,
    formData: {},
    computedFormData: {},
    footerBtns: [],
    currentFields: [],
    fieldsInitialisedOnce: {},
    state: ""
  }),
  watch: {
    /**
     * Initiate the form if all fields are available
     */
    fields: {
      async handler(fields) {
        if (!lodashExports.isEmpty(fields)) {
          this.buildFormData(fields);
          let dataFields = fields;
          if (!this.skipSummary) {
            dataFields = [...dataFields, this.getDefaultSummaryField()];
          }
          this.currentFields = dataFields;
          if (this.activeField) {
            this.mountField(this.activeField);
          } else {
            await this.onNext();
          }
        }
      },
      immediate: true,
      deep: true
    },
    state: {
      handler(newState) {
        if (["onValue", "onClear", "next", "prev", "onfinish", "onload", "unload"].includes(newState)) {
          loadingController.getTop().then((v) => v ? loadingController.dismiss() : null);
          if (!this.disableAutoModalDismiss) modalController.getTop().then((v) => v && modalController.dismiss());
          alertController.getTop().then((v) => v ? alertController.dismiss() : null);
          toastController.getTop().then((v) => v ? toastController.dismiss() : null);
        }
      },
      immediate: true,
      deep: true
    },
    /**
     * Switch the view to a target field
    */
    activeField: {
      async handler(field) {
        if (field) this.mountField(field);
      }
    }
  },
  mounted() {
    this.footerBtns = [this.getCancelBtn()];
  },
  methods: {
    clearValue() {
      this.valueClearIndex += 1;
      this.setActiveFieldValue(null);
    },
    async onFtButtonClicked(btn) {
      this.ftBtnEvent.eventIndex += 1;
      this.ftBtnEvent.btnName = btn.name;
      this.ftBtnEvent.btnOutput = await btn.onClick(this.formData, this.computedFormData, this.currentFieldContext);
      if (btn.onClickComponentEvents) {
        this.ftBtnEvent.onClickComponentEvents = btn.onClickComponentEvents;
      } else {
        if (this.ftBtnEvent.onClickComponentEvents) delete this.ftBtnEvent.onClickComponentEvents;
      }
    },
    async mountField(name) {
      if (name === "_NEXT_FIELD_") {
        await this.goNext();
        return this.$emit("onIndex", this.currentIndex);
      }
      const i = lodashExports.findIndex(this.currentFields, { id: name });
      if (i >= 0 && i <= this.currentFields.length) {
        this.setActiveFieldComputedValue();
        this.setActiveField(i);
        this.$emit("onIndex", i);
      }
    },
    /**
     * Redirects to a specified route or defaults to the previous view
     */
    getCancelBtn(conf = {}) {
      const override = conf || {};
      return {
        name: override.name || "Cancel",
        color: override.color || "danger",
        onClick: async () => {
          if (override.onClick) {
            return override.onClick();
          }
          if (await alertConfirmation("Are you sure you want to cancel?")) {
            if (typeof this.cancelAction === "function") {
              return this.cancelAction();
            } else {
              this.cancelDestinationPath ? this.$router.push(this.cancelDestinationPath) : this.$router.back();
            }
          }
        }
      };
    },
    /**
     * Clear the current's field value. However this depends if 
     * the field supports this feature
     */
    getClearBtn(conf = {}) {
      const override = conf || {};
      return {
        name: override.name || "Clear",
        color: override.color || "warning",
        slot: "end",
        onClick: async () => {
          if (override.onClick) {
            return override.onClick();
          }
          const confirmation = await alertConfirmation(
            "Are you sure you want to clear field data?"
          );
          if (confirmation) this.clearValue();
        }
      };
    },
    /**
     * Go to the previous page on the form
     */
    getBackBtn(conf = {}) {
      const override = conf || {};
      const visibleCondition = () => {
        if (this.currentFields.length === 1 || this.currentIndex <= 0) {
          return false;
        }
        return true;
      };
      return {
        name: override?.name || "Back",
        slot: "end",
        state: {
          disabled: {
            default: () => false,
            onsubmit: () => true
          },
          visible: {
            onload: () => visibleCondition(),
            default: () => visibleCondition()
          }
        },
        onClick: () => override.onClick ? override.onClick() : this.goBack()
      };
    },
    /**
     * Go to the next index in the array of fields
     */
    getNextBtn(conf = {}) {
      const override = conf || {};
      const visibleCondition = () => {
        if (this.currentIndex + 1 >= this.currentFields.length || this.currentFields.length <= 1) {
          return false;
        }
        return true;
      };
      return {
        name: override?.name || "Next",
        color: override?.color || "success",
        slot: "end",
        state: override?.state || {
          disabled: {
            onsubmit: () => true,
            default(field) {
              if ("requireNext" in field) {
                return !field.requireNext;
              }
              return false;
            }
          },
          visible: {
            onsubmit: () => false,
            onfinish: () => false,
            default: () => visibleCondition(),
            onload: () => visibleCondition()
          }
        },
        onClick: () => override.onClick ? override.onClick() : this.goNext()
      };
    },
    /**
     * When clicked it notifies the parent that form has been submitted
     */
    getFinishBtn(conf = {}) {
      const override = conf || {};
      const visibilityCondition = () => {
        return this.currentIndex + 1 >= this.currentFields.length;
      };
      return {
        name: override?.name || "Finish",
        color: override?.color || "success",
        slot: "end",
        state: {
          disabled: {
            default: () => false,
            onsubmit: () => true
          },
          visible: {
            onfinish: () => true,
            onsubmit: () => true,
            default: () => visibilityCondition(),
            onload: () => visibilityCondition()
          }
        },
        onClick: () => override.onClick ? override.onClick() : this.goNext()
      };
    },
    /**
     * Shows or hides a footer button based on it's defined states
     */
    onVisibleBtnState(btn) {
      try {
        if (this.currentField?.config?.hiddenFooterBtns.includes(btn.name)) {
          return false;
        }
      } catch (e) {
      }
      if (btn?.state?.visible) {
        if (this.state in btn.state.visible) {
          return btn.state.visible[this.state](
            this.currentField,
            this.formData
          );
        }
        if ("default" in btn.state.visible) {
          return btn.state.visible["default"](
            this.currentField,
            this.formData
          );
        }
      }
      return true;
    },
    /**
     * Disables or enables a footer button based on it's defined states
     */
    onDisabledBtnState(btn) {
      if (btn?.state?.disabled) {
        if (this.state in btn.state.disabled) {
          return btn.state.disabled[this.state](
            this.currentField,
            this.formData
          );
        }
        if ("default" in btn.state.disabled) {
          return btn.state.disabled["default"](
            this.currentField,
            this.formData
          );
        }
      }
      return false;
    },
    /**
     * Built in field to consolidates and displays all data that were
     * entered on the form
     */
    getDefaultSummaryField() {
      return {
        id: "__form_summary__",
        helpText: "Summary",
        type: FieldType.TT_SUMMARY,
        config: {
          hiddenFooterBtns: ["Clear"]
        },
        options: (formData, computedData) => {
          const data = [];
          for (const ref in formData) {
            const field = this.currentFields.filter(
              (i) => i.id === ref || i.proxyID === ref
            )[0];
            const fdata = formData[ref];
            if (!fdata || field.appearInSummary != void 0 && !field.appearInSummary(formData, ref))
              continue;
            const values = Array.isArray(fdata) ? fdata : [fdata];
            values.forEach((item) => {
              if (field.summaryMapValue) {
                data.push(
                  field.summaryMapValue(item, formData, computedData[ref])
                );
                return;
              }
              data.push({ label: field.helpText, value: item.label });
            });
          }
          return data;
        }
      };
    },
    /**
     * Filters out fields with null values
     */
    resolveFormValues(formObj) {
      const resolved = {};
      for (const i in formObj) {
        if (formObj[i] != null) {
          resolved[i] = formObj[i];
        }
      }
      return resolved;
    },
    /**
     * Run default action when the form is submitted
    */
    async onFinishAction() {
      const formData = this.resolveFormValues(this.formData);
      const computedData = this.resolveFormValues(this.computedFormData);
      if (this.onFinish) {
        try {
          this.state = "onsubmit";
          await this.onFinish(formData, computedData);
        } catch (e) {
          console.error(e);
          toastDanger(`${e}`);
        }
      }
      this.state = "onfinish";
      this.$emit("onFinish", formData, computedData);
    },
    /**
     * Goes to next component if they're no errors on the page
     */
    async goNext() {
      if (this.currentField.validation) {
        const value = this.formData[this.currentField.id];
        const errors = this.currentField.validation(
          value,
          this.formData,
          this.computedFormData
        );
        if (errors) return toastWarning(errors.join(", "), 2e3);
      }
      if (this.currentField.beforeNext) {
        if (!await this.currentField.beforeNext(
          this.formData[this.currentField.id],
          this.formData,
          this.computedFormData,
          this
        )) {
          return;
        }
      }
      await this.onNext();
    },
    /**
     * Go to the previous page if conditions are ok
     */
    async goBack() {
      for (let i = this.currentIndex; i >= 0; --i) {
        const field = this.currentFields[i];
        if (!lodashExports.isEmpty(this.currentField) && this.currentField.id === field.id) {
          continue;
        }
        await this.initFieldOnce(field);
        try {
          if (!await this.checkFieldCondition(field)) {
            continue;
          }
        } catch (e) {
          continue;
        }
        await this.setActiveField(i, "prev");
        return;
      }
    },
    /**
     * Run a field's condition if configured. 
     * Note: Fields whose evaluation === False will have their
     *      values null by Default. If a defaultOuput/defaultComputedOutput 
     *      was set, those values will be used instead of null
     */
    async checkFieldCondition(field) {
      if (field.condition && !await field.condition(
        this.formData,
        this.computedFormData
      )) {
        if (typeof field.onConditionFalse === "function") {
          field.onConditionFalse();
        }
        this.formData[field.id] = field.defaultOutput ? field.defaultOutput(this.formData, this.computedFormData) : null;
        if (field.computedValue) {
          this.computedFormData[field.id] = field.defaultComputedOutput ? field.defaultComputedOutput(this.formData, this.computedFormData) : null;
        }
        return false;
      }
      return true;
    },
    /**
     * Callback when the field component has been activated.
     * if  a callback is defined, we pass an instance of the active field
     * so that it can be manipulated by the parent.
     */
    onFieldActivated(fieldContext) {
      this.state = "onload";
      this.currentFieldContext = fieldContext;
      if (this.currentField.onload) this.currentField.onload(fieldContext);
    },
    /**
     * Callback before the active field is replaced
     */
    async onUnload(state = "") {
      try {
        this.state = "unload";
        if (!lodashExports.isEmpty(this.currentField) && this.currentField.unload) {
          const data = this.formData[this.currentField.id];
          await this.currentField.unload(
            data,
            state,
            this.formData,
            this.computedFormData,
            this
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    buildFormData(fields) {
      this.formData = {};
      fields.forEach((field) => {
        if (field.proxyID) {
          this.formData[field.proxyID] = null;
        }
        this.formData[field.id] = null;
      });
    },
    async setActiveFieldValue(value) {
      this.state = "onValue";
      const proxyID = this.currentField.proxyID;
      const id = this.currentField.id;
      if (proxyID) this.formData[proxyID] = value;
      this.formData[id] = value;
      if (typeof this.currentField.updateHelpTextOnValue === "function") {
        this.helpText = this.currentField.updateHelpTextOnValue(value, this.formData);
      }
    },
    /**
     * Determine which field to show next by it's condition
     */
    async onNext() {
      const totalFields = this.currentFields.length;
      for (let i = this.currentIndex; i < totalFields; ++i) {
        const field = this.currentFields[i];
        if (!lodashExports.isEmpty(this.currentField) && this.currentField.id === field.id) {
          continue;
        }
        await this.initFieldOnce(field);
        try {
          if (!await this.checkFieldCondition(field)) {
            continue;
          }
        } catch (e) {
          continue;
        }
        if (typeof this.currentField.exitsForm === "function" && this.currentField.exitsForm(this.formData, this.computedFormData))
          break;
        this.setActiveFieldComputedValue();
        this.setActiveField(i, "next");
        return;
      }
      this.setActiveFieldComputedValue();
      await this.onFinishAction();
    },
    /**
     * Push the current field to be displayed
     */
    async setActiveField(index, state = "") {
      await this.onUnload(state);
      this.state = state;
      this.currentIndex = index;
      this.currentField = this.currentFields[this.currentIndex];
      await this.initFieldOnce(this.currentField);
      this.helpText = this.currentField.dynamicHelpText ? this.currentField.dynamicHelpText(this.formData) : typeof this.currentField.updateHelpTextOnValue === "function" ? this.currentField.updateHelpTextOnValue(
        this.formData[this.currentField.id],
        this.computedFormData[this.currentField.id]
      ) : this.currentField.helpText;
      this.footerBtns = [this.getCancelBtn()];
      if (this.currentField.config && this.currentField.config.footerBtns) {
        this.footerBtns = this.footerBtns.concat(
          this.currentField.config.footerBtns
        );
      }
      const ftBtns = this.currentField.config?.overrideDefaultFooterBtns;
      this.footerBtns.push(this.getClearBtn(ftBtns?.clearBtn));
      this.footerBtns.push(this.getBackBtn(ftBtns?.backBtn));
      this.footerBtns.push(this.getNextBtn(ftBtns?.nextBtn));
      this.footerBtns.push(this.getFinishBtn(ftBtns?.finishBtn));
    },
    setActiveFieldComputedValue() {
      if (typeof this.currentField === "object" && typeof this.currentField.computedValue === "function") {
        const fieldID = this.currentField.proxyID || this.currentField.id;
        const formValue = this.formData[fieldID];
        if (formValue != null || !formValue) {
          this.computedFormData[fieldID] = this.currentField.computedValue(
            formValue,
            this.formData,
            this.computedFormData
          );
        } else {
          this.computedFormData[fieldID] = null;
        }
      }
    },
    onFieldValue(value) {
      this.setActiveFieldValue(value);
      if ("requireNext" in this.currentField && !this.currentField.requireNext) {
        this.onNext();
      }
    },
    async initFieldOnce(field) {
      if (typeof field.init === "function") {
        if (!this.fieldsInitialisedOnce[field.id]) {
          this.fieldsInitialisedOnce[`${field.id}`] = await field.init(this.formData, this.computedFormData);
        }
      }
    }
  }
});

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_info_card = resolveComponent("info-card");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createElementBlock(Fragment, null, [
    createTextVNode(toDisplayString(_ctx.currentField) + " ", 1),
    createVNode(_component_ion_page, null, {
      default: withCtx(() => [
        createVNode(_component_ion_header, null, {
          default: withCtx(() => [
            createVNode(_component_ion_toolbar, null, {
              default: withCtx(() => [
                createVNode(_component_ion_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_ion_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_title, { class: "his-lg-text" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.helpText), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _ctx.currentField?.config?.toolbarInfo ? (openBlock(), createBlock(_component_ion_col, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_info_card, {
                          style: { height: "100%" },
                          items: _ctx.currentField?.config?.toolbarInfo
                        }, null, 8, ["items"])
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
        createVNode(_component_ion_content, null, {
          default: withCtx(() => [
            (openBlock(), createBlock(KeepAlive, null, [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.currentField.type), {
                key: _ctx.currentField.id,
                config: _ctx.currentField.config,
                options: _ctx.currentField.options,
                preset: _ctx.currentField.preset,
                clear: _ctx.valueClearIndex,
                fdata: _ctx.formData,
                cdata: _ctx.computedFormData,
                activationState: _ctx.state,
                onValue: _ctx.currentField.onValue,
                defaultValue: _ctx.currentField.defaultValue,
                onValueUpdate: _ctx.currentField.onValueUpdate,
                footerButtonEvent: _ctx.ftBtnEvent,
                onOnValue: _ctx.onFieldValue,
                onOnFieldActivated: _ctx.onFieldActivated
              }, null, 40, ["config", "options", "preset", "clear", "fdata", "cdata", "activationState", "onValue", "defaultValue", "onValueUpdate", "footerButtonEvent", "onOnValue", "onOnFieldActivated"]))
            ], 1024))
          ]),
          _: 1
        }),
        createVNode(_component_ion_footer, null, {
          default: withCtx(() => [
            createVNode(_component_ion_toolbar, { color: "dark" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.footerBtns, (btn, index) => {
                  return withDirectives((openBlock(), createBlock(_component_ion_button, {
                    key: index,
                    slot: btn.slot || "start",
                    class: normalizeClass(btn.styleClass),
                    onClick: ($event) => _ctx.onFtButtonClicked(btn),
                    color: btn.color || "primary",
                    size: btn.size || "large",
                    disabled: _ctx.onDisabledBtnState(btn)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(btn.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["slot", "class", "onClick", "color", "size", "disabled"])), [
                    [vShow, _ctx.onVisibleBtnState(btn)]
                  ]);
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
const TouchScreenForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);

const _sfc_main$4 = defineComponent({
  name: "HisStandardForm",
  components: { TouchScreenForm },
  emits: [
    "onFinish",
    "onIndex"
  ],
  data: () => ({
    formType: "touch-screen-form"
  }),
  props: {
    onFinishAction: {
      type: Function
    },
    skipSummary: {
      type: Boolean,
      default: false
    },
    activeField: {
      type: String
    },
    fields: {
      type: Object,
      required: true
    },
    cancelDestinationPath: {
      type: String,
      required: false
    }
  },
  methods: {
    onFinish(formData, computedData) {
      this.$emit("onFinish", formData, computedData);
    },
    onIndex(i) {
      this.$emit("onIndex", i);
    }
  }
});

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.formType), {
    fields: _ctx.fields,
    skipSummary: _ctx.skipSummary,
    activeField: _ctx.activeField,
    cancelDestinationPath: _ctx.cancelDestinationPath,
    onOnFinish: _ctx.onFinish,
    onFinish: _ctx.onFinishAction,
    onOnIndex: _ctx.onIndex
  }, null, 40, ["fields", "skipSummary", "activeField", "cancelDestinationPath", "onOnFinish", "onFinish", "onOnIndex"]);
}
const HisStandardForm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);

function buildAsyncComponents() {
  const components = {};
  COMPONENT_REFS.forEach((name) => {
    components[name] = defineAsyncComponent(
      () => __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../FormElements/BaseTextInput.vue": () => __vitePreload(() => import('./BaseTextInput-D8GVftnI.js'),true              ?[]:void 0,import.meta.url),"../FormElements/FieldMixin.vue": () => __vitePreload(() => import('./FieldMixin-CFKSyRjF.js'),true              ?[]:void 0,import.meta.url),"../FormElements/FilingNumberView.vue": () => __vitePreload(() => import('./FilingNumberView-DGgFZuTV.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisArtRegimenSelection.vue": () => __vitePreload(() => import('./HisArtRegimenSelection-BGz-zkum.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisCardSelector.vue": () => __vitePreload(() => import('./HisCardSelector-KVDWfH5I.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisComplaintsPicker.vue": () => __vitePreload(() => import('./HisComplaintsPicker-DTYrH0xZ.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisDataTable.vue": () => __vitePreload(() => import('./HisDataTable-14_xC0fX.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisDateInput.vue": () => __vitePreload(() => import('./HisDateInput-B_eXW_Ii.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisInfiniteScrollMultipleSelect.vue": () => __vitePreload(() => import('./HisInfiniteScrollMultipleSelect-uKICppE1.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisMonthlyDays.vue": () => __vitePreload(() => import('./HisMonthlyDays-ByT5sFTd.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisMultiSelectGrid.vue": () => __vitePreload(() => import('./HisMultiSelectGrid-AH-3BoRz.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisNextVisitInterval.vue": () => __vitePreload(() => import('./HisNextVisitInterval-CL2BA_NH.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisNumberInput.vue": () => __vitePreload(() => import('./HisNumberInput-CU2lHSc0.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HisSelect.vue": () => __vitePreload(() => import('./HisSelect-BjaFJmah.js'),true              ?[]:void 0,import.meta.url),"../FormElements/HorizontalLine.vue": () => __vitePreload(() => import('../index-DJyJhMgX.js').then(n => n.cR),true              ?[]:void 0,import.meta.url),"../FormElements/PersonMatchView.vue": () => __vitePreload(() => import('./PersonMatchView-1P7ccjhh.js'),true              ?[]:void 0,import.meta.url),"../FormElements/PersonSearchView.vue": () => __vitePreload(() => import('./PersonSearchView-Bq74hy8M.js'),true              ?[]:void 0,import.meta.url),"../FormElements/RelationsSelection.vue": () => __vitePreload(() => import('./RelationsSelection-lEFOnBaU.js'),true              ?[]:void 0,import.meta.url),"../FormElements/SelectMixin.vue": () => __vitePreload(() => import('./SelectMixin-Axn-S3fH.js'),true              ?[]:void 0,import.meta.url)})), `../FormElements/${name}.vue`, 3)
    );
  });
  return components;
}
const _sfc_main$3 = defineComponent({
  name: "SingleFieldTouchForm",
  components: {
    IonPage,
    IonContent,
    IonFooter,
    IonToolbar,
    IonButton,
    IonHeader,
    IonTitle,
    ...buildAsyncComponents()
  },
  props: {
    dismissType: {
      type: String
    },
    onFinish: {
      type: Function,
      required: true
    },
    currentField: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    valueClearIndex: 0,
    formData: {},
    computedFormData: {},
    state: "",
    value: null,
    disableBtn: false
  }),
  methods: {
    onClose() {
      if (this.dismissType === "modal") {
        modalController.dismiss();
      } else {
        this.$router.back();
      }
    },
    onClear() {
      this.valueClearIndex += 1;
      this.value = null;
    },
    onFieldValue(value) {
      this.value = value;
    },
    onDone() {
      this.disableBtn = true;
      if (this.currentField.validation) {
        const errors = this.currentField.validation(this.value);
        this.disableBtn = false;
        if (errors) return toastWarning(errors.join(", "), 6e4);
      }
      try {
        this.onFinish(this.value);
      } catch (e) {
        toastDanger(`${e}`);
        console.error(e);
      }
      this.onClose();
      this.disableBtn = false;
    }
  }
});

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_ion_header, null, {
        default: withCtx(() => [
          createVNode(_component_ion_toolbar, null, {
            default: withCtx(() => [
              createVNode(_component_ion_title, { class: "his-lg-text ion-text-center" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.currentField.helpText), 1)
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
          (openBlock(), createBlock(KeepAlive, null, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.currentField.type), {
              key: _ctx.currentField.id,
              options: _ctx.currentField.options,
              preset: _ctx.currentField.preset,
              clear: _ctx.valueClearIndex,
              fdata: _ctx.formData,
              config: _ctx.currentField.config,
              cdata: _ctx.computedFormData,
              activationState: _ctx.state,
              onValue: _ctx.currentField.onValue,
              defaultValue: _ctx.currentField.defaultValue,
              onValueUpdate: _ctx.currentField.onValueUpdate,
              onOnValue: _ctx.onFieldValue
            }, null, 40, ["options", "preset", "clear", "fdata", "config", "cdata", "activationState", "onValue", "defaultValue", "onValueUpdate", "onOnValue"]))
          ], 1024))
        ]),
        _: 1
      }),
      createVNode(_component_ion_footer, null, {
        default: withCtx(() => [
          createVNode(_component_ion_toolbar, { color: "light" }, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                disabled: _ctx.disableBtn,
                onClick: _ctx.onClose,
                slot: "start",
                color: "danger",
                size: "large"
              }, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode(" Close ", -1)
                ])]),
                _: 1
              }, 8, ["disabled", "onClick"]),
              createVNode(_component_ion_button, {
                disabled: _ctx.disableBtn,
                onClick: _ctx.onClear,
                slot: "end",
                color: "warning",
                size: "large"
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" Clear ", -1)
                ])]),
                _: 1
              }, 8, ["disabled", "onClick"]),
              createVNode(_component_ion_button, {
                disabled: _ctx.disableBtn,
                onClick: _ctx.onDone,
                slot: "end",
                color: "success",
                size: "large"
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode(" Done ", -1)
                ])]),
                _: 1
              }, 8, ["disabled", "onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const TouchField = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);

const _sfc_main$2 = defineComponent({
  emits: ["onItemsPerPage", "onSearchFilter", "onItemsVLtype"],
  components: {
    IonItem,
    IonCol,
    IonRow,
    IonInput,
    IonButton
  },
  props: {
    customFilter: {
      type: Function
    },
    totalRowCount: {
      type: Number,
      default: 15e3
    },
    disableSearchFilter: {
      type: Boolean,
      default: false
    },
    disablePerPageFilter: {
      type: Boolean,
      default: false
    },
    showPerPageFilter: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const itemsPerPage = ref(50);
    const searchFilter = ref("");
    const customFilterValue = ref("");
    async function launchKeyboard(currentField, onFinish) {
      const modal = await modalController.create({
        component: TouchField,
        backdropDismiss: false,
        cssClass: "full-modal",
        componentProps: {
          dismissType: "modal",
          currentField,
          onFinish
        }
      });
      modal.present();
    }
    function onSearchFilter(value) {
      emit("onSearchFilter", value);
    }
    function reset() {
      searchFilter.value = "";
      onSearchFilter("");
    }
    async function launchFilter() {
      if (typeof props.customFilter === "function") {
        customFilterValue.value = await props.customFilter();
      }
    }
    function launchSearcher() {
      launchKeyboard(
        {
          id: "search",
          helpText: "Search table data",
          defaultValue: () => searchFilter.value,
          type: FieldType.TT_TEXT
        },
        (data) => {
          searchFilter.value = data ? data.value : "";
          onSearchFilter(searchFilter.value);
        }
      );
    }
    watch(
      itemsPerPage,
      (newValue) => {
        if (typeof newValue === "number") emit("onItemsPerPage", newValue);
      },
      {
        immediate: true
      }
    );
    return {
      reset,
      itemsPerPage,
      searchFilter,
      launchFilter,
      launchKeyboard,
      launchSearcher,
      customFilterValue
    };
  }
});

const _hoisted_1$1 = ["disabled"];
const _hoisted_2 = ["selected"];
const _hoisted_3 = ["selected"];
const _hoisted_4 = ["selected"];
const _hoisted_5 = ["selected"];
const _hoisted_6 = ["selected"];
const _hoisted_7 = ["selected"];
const _hoisted_8 = ["selected", "value"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_input = resolveComponent("ion-input");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      _ctx.showPerPageFilter ? (openBlock(), createBlock(_component_ion_col, { key: 0 }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("select", {
            class: "input_display",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.itemsPerPage = $event),
            disabled: _ctx.disablePerPageFilter
          }, [
            createBaseVNode("option", {
              selected: _ctx.itemsPerPage === 5,
              value: 5
            }, "5 rows/page", 8, _hoisted_2),
            createBaseVNode("option", {
              selected: _ctx.itemsPerPage === 10,
              value: 10
            }, "10 rows/page", 8, _hoisted_3),
            createBaseVNode("option", {
              selected: _ctx.itemsPerPage === 20,
              value: 20
            }, "20 rows/page", 8, _hoisted_4),
            createBaseVNode("option", {
              selected: _ctx.itemsPerPage === 50,
              value: 50
            }, "50 rows/page", 8, _hoisted_5),
            createBaseVNode("option", {
              selected: _ctx.itemsPerPage === 100,
              value: 100
            }, "100 rows/page", 8, _hoisted_6),
            createBaseVNode("option", {
              selected: _ctx.itemsPerPage === 1e3,
              value: 1e3
            }, "1000 rows/page", 8, _hoisted_7),
            createBaseVNode("option", {
              selected: _ctx.itemsPerPage === _ctx.totalRowCount,
              value: _ctx.totalRowCount
            }, "Show all rows(" + toDisplayString(_ctx.totalRowCount) + ")", 9, _hoisted_8)
          ], 8, _hoisted_1$1), [
            [vModelSelect, _ctx.itemsPerPage]
          ])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      typeof _ctx.customFilter === "function" ? (openBlock(), createBlock(_component_ion_col, { key: 1 }, {
        default: withCtx(() => [
          createVNode(_component_ion_input, {
            class: "input_display",
            value: _ctx.customFilterValue,
            onClick: _ctx.launchFilter,
            placeholder: "Filter..."
          }, null, 8, ["value", "onClick"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(_component_ion_col, null, {
        default: withCtx(() => [
          createVNode(_component_ion_item, { lines: "none" }, {
            default: withCtx(() => [
              createVNode(_component_ion_input, {
                disabled: _ctx.disableSearchFilter,
                class: "input_display",
                value: _ctx.searchFilter,
                onClick: _ctx.launchSearcher,
                placeholder: "Search here..."
              }, null, 8, ["disabled", "value", "onClick"]),
              _ctx.searchFilter ? (openBlock(), createBlock(_component_ion_button, {
                key: 0,
                class: "reset_button",
                size: "large",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.reset()),
                color: "secondary"
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode(" Reset ", -1)
                ])]),
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
  });
}
const ReportFilter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-7bf42b5b"]]);

const MonthOptions = [
  {
    label: "Jan",
    value: 1
  },
  {
    label: "Feb",
    value: 2
  },
  {
    label: "Mar",
    value: 3
  },
  {
    label: "Apr",
    value: 4
  },
  {
    label: "May",
    value: 5
  },
  {
    label: "Jun",
    value: 6
  },
  {
    label: "Jul",
    value: 7
  },
  {
    label: "Aug",
    value: 8
  },
  {
    label: "Sep",
    value: 9
  },
  {
    label: "Oct",
    value: 10
  },
  {
    label: "Nov",
    value: 11
  },
  {
    label: "Dec",
    value: 12
  }
];

function validateSeries(conditions) {
  try {
    for (const i in conditions) {
      const condition = conditions[i]();
      if (condition) return condition;
    }
  } catch (e) {
    return [e];
  }
}
function required(value) {
  return lodashExports.isEmpty(value) ? ["Value is required"] : null;
}
function isFloatingPointNumber(val) {
  return lodashExports.isPlainObject(val) && !/^[-+]?[0-9]*\.?[0-9]+$/.test(`${val?.value}`) ? ["Not a valid number"] : null;
}
function isMWPhoneNumber(val) {
  const validation = /^(\+?265|0)(((8[89]|9[89])\d{7})|(1\d{6})|(2\d{8})|(31\d{8}))$/;
  return !val || !val.value.match(validation) ? ["Not a valid phone number"] : null;
}
function isMWNationalID(nationalId) {
  const nationalIDRegex = /^(?=[a-zA-Z0-9]*$)(?=\d+[a-zA-Z]|[a-zA-Z]+\d)([a-zA-Z\d]){8}$/;
  return lodashExports.isEmpty(nationalId) || !nationalId.value.toString().match(nationalIDRegex) ? ["Not a valid Malawi National ID number"] : null;
}
function isIPAddress(val) {
  const validation = /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/;
  return !val || !val.value.match(validation) ? ["Not a valid IP address"] : null;
}
function isName(value) {
  const validation = /^(?=.{2,100}$)[a-z!A-Z]+(?:['_.\-!\][a-z]+[a-z!A-Z])*$/;
  return !value || !value.label.match(validation) ? ["Invalid name Input"] : null;
}
function isNumber(val) {
  return isNaN(parseInt(val.value)) ? ["Value must be a number"] : null;
}
function hasLengthRangeOf(val, min, max) {
  const len = val ? val.label.length : 0;
  return len >= min && len <= max ? null : [`Value length not within range of ${min} - ${max}`];
}
function rangeOf(val, min, max) {
  const value = parseInt(val.label);
  return value >= min && value <= max ? null : [`${value} not within range of ${min} - ${max}`];
}
function neitherOr(val) {
  const allNo = val.filter((arr) => {
    const val2 = arr.value || arr.other.value;
    return val2 === "No";
  });
  if (allNo.length == val.length) {
    return ["All values can not be no"];
  }
  return null;
}
function anyEmpty(val) {
  const error = ["all must be selected"];
  if (!val) return error;
  const allNo = val.filter((i) => i.value === "");
  return allNo.length > 0 ? error : null;
}
function notTheSame(val, comparison) {
  return val === comparison ? ["Values can not be the same"] : null;
}
const Validation = {
  isFloatingPointNumber,
  validateSeries,
  required,
  isMWPhoneNumber,
  isName,
  isNumber,
  hasLengthRangeOf,
  rangeOf,
  neitherOr,
  anyEmpty,
  notTheSame,
  isIPAddress,
  isMWNationalID
};

const SYMBOLS = [
  ["1", "2", "3", "+", "-", "/", "*"],
  ["4", "5", "6", "%", "=", "<", ">", "Qwerty"],
  ["7", "8", "9", ".", ","],
  ["", "0", ""]
];
const NUMBER_PAD_LO = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["", "0", ""]
];
const MONTHLY_DAYS_LO = [
  ["1", "2", "3", "4", "5", "6", "7"],
  ["8", "9", "10", "11", "12", "13", "14"],
  ["15", "16", "17", "18", "19", "20", "21"],
  ["22", "23", "24", "25", "26", "27", "28"],
  ["29", "30", "31"]
];
const ALPHABETICAL_LO = [
  ["a", "b", "c", "d", "e", "f", "g", "h", "."],
  ["i", "j", "k", "l", "m", "n", "o", "p", "q"],
  ["r", "s", "t", "u", "v", "w", "x", "y", "z"]
];
const QWERTY_LO = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "'"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "A-Z"]
];

const SYMBOLS_CONFIG = [
  SYMBOLS,
  [
    ["", "Delete"]
  ]
];
const NUMBERS_ONLY = [
  NUMBER_PAD_LO,
  [
    ["Delete"]
  ]
];
const NUMBERS_WITH_ESTIMATE = [
  NUMBER_PAD_LO,
  [
    ["N/A"],
    ["Delete", "Unknown"]
  ]
];
const NUMBERS_WITHOUT_NA_UNKNOWN = [
  NUMBER_PAD_LO,
  [
    ["Delete"]
  ]
];
const NUMBERS = [
  NUMBER_PAD_LO,
  [
    ["Unknown", "Delete"],
    ["Qwerty", "A-Z"]
  ]
];
const MONTHLY_DAYS = [
  MONTHLY_DAYS_LO,
  [
    ["Unknown"]
  ]
];
const A_TO_Z = [
  ALPHABETICAL_LO,
  [
    ["0-9", "Delete"],
    ["Qwerty", "Unknown"],
    ["", "Space"]
  ]
];
const QWERTY = [
  QWERTY_LO,
  [
    ["", "Delete"],
    ["?123", "0-9"],
    ["Space", "Unknown"]
  ]
];
const KEY_BTN_NAV = [
  {
    btn: "0-9",
    keyboard: NUMBERS
  },
  {
    btn: "?123",
    keyboard: SYMBOLS_CONFIG
  },
  {
    btn: "A-Z",
    keyboard: A_TO_Z
  },
  {
    btn: "Qwerty",
    keyboard: QWERTY
  }
];

function getYearField(id, name, showUnknown = true) {
  const primaryFunctions = [];
  if (showUnknown) primaryFunctions.push("UNKNOWN");
  return {
    id,
    helpText: `${name} Year`,
    appearInSummary: () => false,
    type: FieldType.TT_TEXT,
    config: {
      customKeyboard: [
        NUMBER_PAD_LO,
        [
          primaryFunctions,
          ["DELETE"]
        ]
      ]
    }
  };
}
function getMonthField(id, name) {
  return {
    id,
    helpText: `${name} Month`,
    appearInSummary: () => false,
    type: FieldType.TT_SELECT,
    options: () => MonthOptions
  };
}
function getDayField(id, name) {
  return {
    id,
    helpText: `${name} Day`,
    type: FieldType.TT_MONTHLY_DAYS,
    appearInSummary: () => false
  };
}
function getMonthDurationEstimateField(id, name) {
  return {
    id,
    helpText: `${name} Estimated period`,
    type: FieldType.TT_SELECT,
    appearInSummary: () => false,
    options: () => [
      { label: "6 months ago", value: 180 },
      { label: "12 months ago", value: 365 },
      { label: "18 months ago", value: 540 },
      { label: "24 months ago", value: 730 },
      { label: "Over 2 years ago", value: 730 }
    ]
  };
}
function getAgeEstimateField(id, name) {
  return {
    id,
    helpText: `${name} Age Estimate`,
    type: FieldType.TT_NUMBER,
    appearInSummary: () => false,
    config: {
      keypad: NUMBERS_WITHOUT_NA_UNKNOWN
    }
  };
}
function appendLeadingZero(s) {
  return parseInt(s) < 10 ? `0${s}` : s;
}
async function getDefaultDate(form, field, datePart) {
  if (field.defaultValue) {
    const date = await field.defaultValue(form);
    if (date) {
      const [year, month, day] = date.split("-");
      switch (datePart) {
        case "Year":
          return year || "";
        case "Month":
          return parseInt(month) || "";
        case "Day":
          return parseInt(day) || "";
      }
    }
  }
  return "";
}
function d(date) {
  return HisDate.toStandardHisDisplayFormat(date);
}
function validateMinMax(date, field, form, computed) {
  if (field.minDate) {
    const min = field.minDate(form, computed);
    if (new Date(date) < new Date(min)) {
      return [`${d(date)} is less than minimum date of ${d(min)}`];
    }
  }
  if (field.maxDate) {
    const max = field.maxDate(form, computed);
    if (max && new Date(date) > new Date(max)) {
      return [`${d(date)} is greater than max date of  ${d(max)}`];
    }
  }
}
function generateDateFields(field) {
  let fullDate = "";
  let yearValue = "";
  let monthValue = "";
  let dayValue = "";
  let dateIsEstimated = false;
  const yearID = `year_${field.id}`;
  const monthID = `month_${field.id}`;
  const dayID = `day_${field.id}`;
  const ageEstimateID = `age_estimate_${field.id}`;
  const durationEstimateID = `duration_estimate_${field.id}`;
  const year = getYearField(yearID, field.helpText, field.estimation.allowUnknown);
  const month = getMonthField(monthID, field.helpText);
  const day = getDayField(dayID, field.helpText);
  const ageEstimate = getAgeEstimateField(ageEstimateID, field.helpText);
  const durationEstimate = getMonthDurationEstimateField(durationEstimateID, field.helpText);
  const estimateMonthOrDay = typeof field.estimation.allowUnknownMonthDay === "boolean" && field.estimation.allowUnknownMonthDay;
  const datePartCondition = (f) => {
    if (f[yearID] && f[yearID].value) {
      if (["Unknown"].includes(f[yearID].value)) {
        return false;
      }
    }
    return field.condition ? field.condition(f) : true;
  };
  const buildHelpTextDate = (value, part) => {
    const parts = [
      { type: "year", value: yearValue, default: "YYYY" },
      { type: "month", value: monthValue, default: "MM" },
      { type: "day", value: dayValue, default: "DD" }
    ];
    return parts.reduce((partValues, dpart) => {
      const wl = [null, void 0, "Unknown", ""];
      if (part === dpart.type) {
        if (wl.includes(value)) {
          partValues.push(dpart.default);
        } else {
          partValues.push(value);
        }
      } else {
        if (wl.includes(dpart.value)) {
          partValues.push(dpart.default);
        } else {
          partValues.push(dpart.value);
        }
      }
      return partValues;
    }, []).join("-");
  };
  if (typeof field.init === "function") year.init = field.init;
  year.updateHelpTextOnValue = (data) => `${year.helpText} (${buildHelpTextDate(data?.label, "year")})`;
  year.proxyID = field.id;
  year.unload = (v) => yearValue = v.value.toString();
  year.config = { ...year.config, ...field.config };
  year.defaultValue = (f) => getDefaultDate(f, field, "Year");
  year.condition = (f) => field.condition ? field.condition(f) : true;
  year.validation = (v, f, c) => {
    if (field.required && Validation.required(v)) {
      return ["Year cannot be empty"];
    }
    const year2 = v ? v.value : "";
    if (!field.estimation.allowUnknown && year2.toString().match(/unknown/i)) {
      return ["Value unknown is not permitted"];
    }
    if (year2 && !["Unknown"].includes(year2) && isNaN(year2) || year2 < 1900) {
      return ["Invalid Year"];
    }
    if (year2 && typeof field.minDate === "function") {
      const minYear = HisDate.getYear(field.minDate(f, c));
      if (parseInt(year2) < minYear) {
        return [`Year of ${year2} is less than Minimum year of ${minYear}`];
      }
    }
    if (year2 && typeof field.maxDate === "function") {
      const max = field.maxDate(f, c);
      if (max && year2 > HisDate.getYear(max)) {
        return [`Year of ${year2} exceeds Maximum year of ${HisDate.getYear(max)}`];
      }
    }
    return null;
  };
  year.summaryMapValue = () => ({
    label: field.summaryLabel || field.helpText,
    value: fullDate ? d(fullDate) : "Unknown"
  });
  year.appearInSummary = (_, ref) => ref === field.id;
  year.computedValue = (val) => {
    if (fullDate) {
      const [, month2, day2] = fullDate.split("-");
      fullDate = `${val.value}-${month2}-${day2}`;
      return field.computeValue(fullDate, false);
    }
    if (val && val.value === "Unknown") {
      fullDate = "";
      return field.computeValue("Unknown", false);
    }
  };
  month.updateHelpTextOnValue = (data) => `${month.helpText} (${buildHelpTextDate(data?.label, "month")})`;
  month.proxyID = field.id;
  month.unload = (v) => monthValue = appendLeadingZero(v.value.toString());
  month.condition = (f) => datePartCondition(f);
  month.validation = (v) => Validation.required(v);
  month.defaultValue = (f) => getDefaultDate(f, field, "Month");
  if (estimateMonthOrDay) {
    month.options = () => [...MonthOptions, { label: "Unknown", value: "Unknown" }];
  }
  month.computedValue = (val, f) => {
    if (`${val.value}`.match(/unknown/i)) {
      fullDate = `${f[yearID].value}-07-15`;
      return field.computeValue(fullDate, true);
    }
    if (fullDate) {
      const [year2, , day2] = fullDate.split("-");
      const month2 = appendLeadingZero(`${val.value}`);
      fullDate = `${year2}-${month2}-${day2}`;
      return field.computeValue(fullDate, false);
    }
  };
  day.proxyID = field.id;
  day.updateHelpTextOnValue = (data) => `${day.helpText} (${buildHelpTextDate(data?.label, "day")})`;
  day.condition = (f) => !`${f[monthID].value}`.match(/unknown/i) && datePartCondition(f);
  day.validation = (v, f, c) => {
    if (Validation.required(v)) {
      return ["Day is required for date"];
    }
    dateIsEstimated = `${v.value}`.match(/unknown/i) ? true : false;
    dayValue = dateIsEstimated ? "15" : appendLeadingZero(`${v.value}`);
    fullDate = `${yearValue}-${monthValue}-${dayValue}`;
    return validateMinMax(fullDate, field, f, c);
  };
  day.defaultValue = (f) => getDefaultDate(f, field, "Day");
  day.computedValue = () => {
    return field.computeValue(fullDate, dateIsEstimated);
  };
  day.unload = (d2, s, f, c) => {
    if (field.unload) field.unload(d2, s, f, c);
  };
  day.beforeNext = (v, f) => {
    return !field.beforeNext ? true : field.beforeNext(fullDate, f);
  };
  day.config = {
    // Monthly days shown on the Day component depends on this configuration
    // to show approprite days based on specific year and month calendar
    year: (f) => f[yearID].value,
    month: (f) => f[monthID].value
  };
  if (!estimateMonthOrDay) day.config.keyboardActions = [];
  const valueEstimateCondition = (f, estimateType) => {
    const conditions = [
      f[yearID].value === "Unknown",
      field.condition ? field.condition(f) : true,
      field.estimation.estimationFieldType === estimateType
    ];
    return conditions.every(Boolean);
  };
  ageEstimate.proxyID = field.id;
  ageEstimate.validation = (v, f, c) => {
    if (v && v.value > 300) {
      return ["Age estimate is too high and exceeding hard limit of 300"];
    }
    if (isNaN(parseInt(v.value.toString()))) {
      return ["Please enter a valid number"];
    }
    const ageEstimateRegex = /^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/;
    if (!v.value.toString().match(ageEstimateRegex)) {
      return ["Not a valid age estimate"];
    }
    const year2 = dayjs(Service.getSessionDate()).subtract(v.value, "years").year();
    fullDate = `${year2}-07-15`;
    return validateMinMax(fullDate, field, f, c);
  };
  ageEstimate.condition = (form) => valueEstimateCondition(
    form,
    "age-estimate-field" /* AGE_ESTIMATE_FIELD */
  );
  ageEstimate.computedValue = () => field.computeValue(fullDate, true);
  ageEstimate.beforeNext = (v, f) => {
    return !field.beforeNext ? true : field.beforeNext(fullDate, f);
  };
  durationEstimate.proxyID = field.id;
  durationEstimate.validation = (v, f, c) => {
    if (Validation.required(v)) {
      return ["Please select an estimate"];
    }
    fullDate = dayjs(Service.getSessionDate()).subtract(v.value, "day").format(STANDARD_DATE_FORMAT);
    return validateMinMax(fullDate, field, f, c);
  };
  durationEstimate.condition = (form) => valueEstimateCondition(
    form,
    "month-period-estimate-field" /* MONTH_ESTIMATE_FIELD */
  );
  durationEstimate.computedValue = () => field.computeValue(fullDate, true);
  durationEstimate.beforeNext = (_, f) => {
    return !field.beforeNext ? true : field.beforeNext(fullDate, f);
  };
  return [
    year,
    month,
    day,
    ageEstimate,
    durationEstimate
  ];
}

const _sfc_main$1 = defineComponent({
  components: {
    IonCol,
    IonRow,
    Pagination,
    ReportTable: HisTable,
    ReportFilter,
    HisFooter,
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonChip,
    IonFooter
  },
  props: {
    title: {
      type: String,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    encryptPDF: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Array,
      default: () => []
    },
    rowParser: {
      type: Function
    },
    showFilters: {
      type: Boolean,
      default: false
    },
    rowsPerPage: {
      type: Number
    },
    asyncRows: {
      type: Function
    },
    paginated: {
      type: Boolean,
      default: false
    },
    customBtns: {
      type: Array,
      default: () => []
    },
    showReportStamp: {
      type: Boolean,
      default: true
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
    onFinish: {
      type: Function
    }
  },
  data: () => ({
    btns: [],
    isTableLoading: false,
    searchFilter: "",
    itemsPerPage: 50,
    currentPage: 0,
    coreVersion: Service.getCoreVersion(),
    tableRows: [],
    totalPages: 0,
    activeColumns: [],
    activeRows: [],
    date: HisDate.toStandardHisDisplayFormat(Service.getSessionDate()),
    apiVersion: Service.getApiVersion(),
    siteUUID: Service.getSiteUUID()
  }),
  methods: {
    getFileName() {
      return this.customFileName ? this.customFileName : this.title;
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
    }
  },
  created() {
    this.btns = [
      ...this.customBtns,
      {
        name: "CSV",
        size: "large",
        slot: "start",
        color: "primary",
        visible: this.canExport,
        onClick: () => {
          const { columns, rows } = toExportableFormat(this.activeColumns, this.activeRows, "csvMode");
          toCsv(
            columns,
            [
              ...rows,
              [`Date Created: ${this.date}`],
              [`MaHIS Version: ${this.coreVersion}`],
              [`API Version: ${this.apiVersion}`],
              [`Site UUID: ${this.siteUUID}`],
              [`Generated by: ${Service.getUserName()}`]
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
        visible: this.canExport,
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
        name: "Finish",
        size: "large",
        slot: "end",
        color: "success",
        visible: true,
        onClick: () => {
          if (typeof this.onFinish === "function") {
            return this.onFinish();
          }
          this.$router.push({ path: "/" });
        }
      }
    ];
  }
});

const _hoisted_1 = { class: "report-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_report_filter = resolveComponent("report-filter");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_report_table = resolveComponent("report-table");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_pagination = resolveComponent("pagination");
  const _component_ion_chip = resolveComponent("ion-chip");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_his_footer = resolveComponent("his-footer");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_ion_header, null, {
        default: withCtx(() => [
          createVNode(_component_ion_toolbar, null, {
            default: withCtx(() => [
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, null, {
                    default: withCtx(() => [
                      createBaseVNode("h1", null, toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_toolbar, null, {
            default: withCtx(() => [
              createVNode(_component_report_filter, {
                showPerPageFilter: _ctx.showFilters || _ctx.paginated,
                disableSearchFilter: _ctx.isTableLoading,
                disablePerPageFilter: _ctx.isTableLoading,
                totalRowCount: _ctx.tableRows.length,
                onOnItemsPerPage: _cache[0] || (_cache[0] = (i) => _ctx.itemsPerPage = i),
                onOnSearchFilter: _cache[1] || (_cache[1] = (f) => _ctx.searchFilter = f)
              }, null, 8, ["showPerPageFilter", "disableSearchFilter", "disablePerPageFilter", "totalRowCount"])
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
              columns: _ctx.columns,
              showFilters: _ctx.showFilters,
              newPage: _ctx.currentPage,
              searchFilter: _ctx.searchFilter,
              rowsPerPage: _ctx.itemsPerPage,
              onOnIsLoading: _cache[2] || (_cache[2] = (l) => _ctx.isTableLoading = l),
              onOnTableRows: _cache[3] || (_cache[3] = (r) => _ctx.tableRows = r),
              onOnPagination: _cache[4] || (_cache[4] = (p) => _ctx.totalPages = p.length),
              onOnActiveColumns: _cache[5] || (_cache[5] = (c) => _ctx.activeColumns = c),
              onOnActiveRows: _cache[6] || (_cache[6] = (r) => _ctx.activeRows = r)
            }, null, 8, ["rows", "paginated", "asyncRows", "rowParser", "columns", "showFilters", "newPage", "searchFilter", "rowsPerPage"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_ion_footer, null, {
        default: withCtx(() => [
          createVNode(_component_ion_toolbar, null, {
            default: withCtx(() => [
              !_ctx.searchFilter && _ctx.paginated || !_ctx.searchFilter && _ctx.totalPages > 0 && _ctx.paginated ? (openBlock(), createBlock(_component_pagination, {
                key: 0,
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
                onOnChangePage: _cache[7] || (_cache[7] = (p) => _ctx.currentPage = p)
              }, null, 8, ["perPage", "totalPages"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          _ctx.showReportStamp ? (openBlock(), createBlock(_component_ion_toolbar, { key: 0 }, {
            default: withCtx(() => [
              createVNode(_component_ion_chip, { color: "primary" }, {
                default: withCtx(() => [
                  _cache[8] || (_cache[8] = createTextVNode("Date Created: ", -1)),
                  createBaseVNode("b", null, toDisplayString(_ctx.date), 1)
                ]),
                _: 1
              }),
              createVNode(_component_ion_chip, { color: "primary" }, {
                default: withCtx(() => [
                  _cache[9] || (_cache[9] = createTextVNode("MaHIS Version: ", -1)),
                  createBaseVNode("b", null, toDisplayString(_ctx.coreVersion), 1)
                ]),
                _: 1
              }),
              createVNode(_component_ion_chip, { color: "primary" }, {
                default: withCtx(() => [
                  _cache[10] || (_cache[10] = createTextVNode("API Version: ", -1)),
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
  });
}
const DrilldownTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);

class IDSRReportService extends OpdReportService {
  regenerate;
  constructor() {
    super();
    this.regenerate = false;
  }
  setRegenerate(regenerate) {
    this.regenerate = regenerate;
  }
  requestIDSRWeekly() {
    return this.getReport("generate_weekly_idsr_report", {
      request: "true"
    });
  }
  requestIDSRMonthly() {
    return this.getReport("generate_monthly_idsr_report", {
      request: "true"
    });
  }
  renderResults(params) {
    const all = [];
    let count = 1;
    for (const [key, value] of Object.entries(params)) {
      const temp = [];
      const condition = value;
      const item = {
        id: 0,
        name: "",
        lessThanFiveYears: "",
        lessThanFiveYearsPatientIds: "",
        greaterThanEqualFiveYears: "",
        greaterThanEqualFiveYearsPatientIds: "",
        total: 0,
        totalPatientIds: ""
      };
      item.name = key;
      let total = 0;
      item.id = count;
      count += 1;
      for (const [key1, value1] of Object.entries(condition)) {
        const conditionDetails = value1;
        if (conditionDetails != null) {
          total += conditionDetails.length;
          item.total = total;
          if (conditionDetails.length) {
            temp.push(...conditionDetails);
            item.totalPatientIds = temp;
          }
          if (key1 == "<5yrs") {
            item.lessThanFiveYears = conditionDetails.length;
            item.lessThanFiveYearsPatientIds = conditionDetails;
          }
          if (key1 == ">=5yrs") {
            item.greaterThanEqualFiveYears = conditionDetails.length;
            item.greaterThanEqualFiveYearsPatientIds = conditionDetails;
          }
        }
      }
      all.push(item);
    }
    return all;
  }
  getCSVString(IDSRConditionsObj) {
    let CSVString = `Diseases/Events/Conditions, <5 yrs, >=5 yrs, Total,
`;
    for (const condition of IDSRConditionsObj) {
      CSVString += `${condition.name},${condition.lessThanFiveYears},${condition.greaterThanEqualFiveYears},${condition.total},
`;
    }
    return { CSVString };
  }
  static async getReportEpiWeeks() {
    const epiWeeks = [];
    const epiWeeksObj = await Service.getJson("get_weeks");
    epiWeeksObj.reverse().forEach((item) => {
      const dates = item[1].split(" ");
      const startDate = dates[0];
      const endDate = dates[2];
      const txt = item[0].split("W");
      const name = txt[0] + "/W" + txt[1];
      epiWeeks.push({ name, start: startDate, end: endDate });
    });
    return epiWeeks;
  }
  static async getReportMonths() {
    const months = [];
    const epiWeeksObj = await Service.getJson("get_months");
    epiWeeksObj.forEach((item) => {
      const _payload = item[1];
      const monthandyear = _payload[0];
      const startandendmonths = _payload[1];
      const dates = startandendmonths.split("to");
      months.push({ name: monthandyear, start: dates[0], end: dates[1].trim() });
    });
    return months;
  }
}

const _sfc_main = defineComponent({
  data: () => ({
    fields: [],
    report: {},
    reportReady: false,
    period: "",
    startDate: "",
    endDate: "",
    customFileName: "",
    drillDownCache: {}
  }),
  methods: {
    toDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    confirmPatient(patient) {
      return this.$router.push(`/patients/confirm?person_id=${patient}`);
    },
    async exportToCustomPDF(title) {
      const printW = open("", "", "width:1024px, height:768px");
      const content = document.getElementById("report-content");
      if (content && printW) {
        printW.document.write(`
                    <html>
                    <head>
                        <title>${title}</title>
                        <link rel="stylesheet" media="print" href="/assets/css/cohort.css" />
                    </head>
                    <body>
                        ${content.innerHTML}
                    </body>
                    </html>
                `);
        setTimeout(() => {
          printW.print();
          printW.close();
        }, 3500);
      }
    },
    async onDrillDown(conditionName, patientIds) {
      if (lodashExports.isEmpty(patientIds)) return;
      const columns = [
        [
          table.thTxt("First name"),
          table.thTxt("Last name"),
          table.thTxt("Gender"),
          table.thTxt("Age"),
          table.thTxt("Phone"),
          table.thTxt("Address"),
          table.thTxt("Action")
        ]
      ];
      const rowParser = async (ids) => {
        return await Promise.all(
          ids.map(async (id) => {
            await PatientService.findByID(id);
            const patient = new PatientService();
            return [
              table.td(patient.getGivenName()),
              table.td(patient.getFamilyName()),
              table.td(patient.getGender()),
              table.td(patient.getAge()),
              table.td(patient.getPhoneNumber()),
              table.td(`${patient.getCurrentDistrict()}, ${patient.getCurrentVillage()}, ${patient.getClosestLandmark()}`),
              table.tdBtn("Select", async () => {
                await modalController.dismiss({});
                this.$router.push({ path: `/patient/dashboard/${id}` });
              })
            ];
          })
        );
      };
      return this.drilldownData(conditionName, columns, patientIds, rowParser);
    },
    async drilldownAsyncRows(title, columns, asyncRows) {
      const modal = await modalController.create({
        component: DrilldownTable,
        cssClass: "large-modal",
        componentProps: {
          title,
          columns,
          asyncRows,
          showFilters: true,
          rowsPerPage: 50,
          paginated: true,
          showReportStamp: false,
          footerColor: "light",
          onFinish: () => modalController.dismiss()
        }
      });
      modal.present();
    },
    async drilldownData(title, columns, rows, rowParser) {
      const modal = await modalController.create({
        component: DrilldownTable,
        cssClass: "large-modal",
        componentProps: {
          title,
          columns,
          rows,
          rowParser,
          rowsPerPage: 50,
          showFilters: true,
          paginated: true,
          showReportStamp: false,
          footerColor: "light",
          onFinish: () => modalController.dismiss()
        }
      });
      modal.present();
    },
    getDefaultDrillDownTable() {
      const columns = [[table.thTxt("ARV number"), table.thTxt("Gender"), table.thTxt("Birth Date"), table.thTxt("Actions")]];
      const rowParser = (tableRows) => {
        return tableRows.map(async (defaultRow) => {
          const [index, id] = defaultRow;
          if (id in this.drillDownCache) {
            return [index];
          }
          const data = await PatientService.findByID(id);
          const patient = new data();
          const row = [
            index,
            table.td(patient.getArvNumber()),
            table.td(patient.getGender()),
            table.tdDate(patient.getBirthdate().toString()),
            table.tdBtn("Show", async () => {
              await modalController.dismiss({});
              this.$router.push({ path: `/patient/dashboard/${id}` });
            })
          ];
          this.drillDownCache[id] = row;
          return row;
        });
      };
      return { rowParser, columns };
    },
    runTableDrill(data, title = "Drilldown patients") {
      const { columns, rowParser } = this.getDefaultDrillDownTable();
      this.drilldownData(title, columns, data, rowParser);
    },
    drill(values, title = "Drill table") {
      if (values && values.length > 0) {
        return table.tdLink(values.length, () => this.runTableDrill(values, title));
      }
      return table.td(0);
    },
    getEpiweeksFields() {
      return [
        {
          id: "epiweek",
          helpText: "Select EPI week",
          type: FieldType.TT_SELECT,
          validation: (val) => Validation.required(val),
          options: async () => {
            const epiWeeks = await IDSRReportService.getReportEpiWeeks();
            const items = epiWeeks.map((q) => ({
              label: q.name + " - (" + dayjs(q.start).format("DD/MMM/YYYY") + " - " + dayjs(q.end).format("DD/MMM/YYYY") + ")",
              value: q.start,
              other: q
            }));
            return items;
          }
        }
      ];
    },
    getMonthlyFields() {
      return [
        {
          id: "idsrmonth",
          helpText: "Select Month",
          type: FieldType.TT_SELECT,
          validation: (val) => Validation.required(val),
          options: async () => {
            const epiWeeks = await IDSRReportService.getReportMonths();
            const items = epiWeeks.map((q) => ({
              label: q.name + " - (" + dayjs(q.start).format("DD/MMM/YYYY") + " - " + dayjs(q.end).format("DD/MMM/YYYY") + ")",
              value: q.start,
              other: q
            }));
            return items;
          }
        }
      ];
    },
    getDateDurationFields(useQuarter = false, setCustomQuarterPeriod = false, maxQuarter = 5) {
      const minDate = "2001-01-01";
      const maxDate = Service.getSessionDate();
      return [
        {
          id: "quarter",
          helpText: "Select Quarter",
          type: FieldType.TT_SELECT,
          condition: () => useQuarter,
          validation: (val) => Validation.required(val),
          options: () => {
            const quarters = OpdReportService.getReportQuarters(maxQuarter);
            let items = quarters.map((q) => ({
              label: q.name,
              value: q.start,
              other: q
            }));
            if (setCustomQuarterPeriod) {
              items = [
                {
                  label: "Set custom period",
                  value: "custom_period",
                  other: {}
                },
                ...items
              ];
            }
            return items;
          }
        },
        ...generateDateFields({
          id: "start_date",
          helpText: "Start",
          required: true,
          condition: (f) => f.quarter && f.quarter.value === "custom_period" || !useQuarter,
          minDate: () => minDate,
          maxDate: () => maxDate,
          estimation: {
            allowUnknown: false
          },
          computeValue: (date) => date
        }),
        ...generateDateFields({
          id: "end_date",
          helpText: "End",
          required: true,
          condition: (f) => f.quarter && f.quarter.value === "custom_period" || !useQuarter,
          unload: (d, s, f, c) => {
            if (s === "next") {
              this.endDate = c.end_date;
            }
          },
          minDate: (_, c) => c.start_date,
          maxDate: () => maxDate,
          estimation: {
            allowUnknown: false
          },
          computeValue: (date) => date
        })
      ];
    }
  }
});

export { HisTable as H, IDSRReportService as I, KEY_BTN_NAV as K, LA_TYPES as L, MENTAL_HEALTH_DIAGNOSIS as M, NCD_TYPES as N, OpdReportService as O, QWERTY as Q, ReportFilter as R, Transformer as T, ViewPort as V, _sfc_main as _, HisStandardForm as a, toExportableFormat as b, MONTHLY_DAYS_LO as c, MONTHLY_DAYS as d, NUMBERS_ONLY as e, NUMBERS_WITH_ESTIMATE as f, table as t };
