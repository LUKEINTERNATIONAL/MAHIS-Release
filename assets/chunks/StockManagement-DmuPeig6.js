import { q as defineComponent, a6 as IonInput, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, H as IonContent, K as modalController, aF as menuController, bo as pulseOutline, b8 as checkmark, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx, a5 as createTextVNode, C as toDisplayString, B as createBaseVNode, J as Fragment, bl as IonPopover, N as IonButton, dA as IonFabList, dB as IonFabButton, dC as IonFab, L as IonIcon, bI as IonCard, ay as IonCol, af as IonRow, br as IonPage, ct as IonMenuButton, r as ref, d1 as person, d2 as add, ch as medkit, d3 as globe, d4 as document, d5 as colorPalette, d6 as chevronUpCircle, d7 as chevronForwardCircle, d8 as chevronDownCircle, d9 as grid, bW as chevronBackOutline, O as createBlock, G as createCommentVNode, R as renderList, a4 as normalizeClass } from './vendor-BPW-J91F.js';
import { F as DynamicButton, l as PreviousVitals, B as BasicInputField, a0 as DrugService, a1 as modifyFieldValue, a2 as getFieldValue, H as HisDate, t as toastWarning, G as toastSuccess, L as useWorkerStore, u as useDemographicsStore, n as icons, _ as _export_sfc, a3 as ToolbarSearch, T as Toolbar, d as _sfc_main$3, o as createModal, g as getPouchDBRecords, a4 as popoverConfirmation, f as useStatusStore } from '../index-Be0fRy6M.js';
import { I as ImmunizationGroupGraph, a as ImmunizationTrendsGraph } from './ImmunizationGroupGraph-lrGDBD-8.js';
import { m as mapState, d as defineStore } from './pinia-D-q2_lrU.js';
import { u as useStockStore } from './StockStore-CQbZ0dEO.js';
import { B as BasicForm } from './BasicForm-BLwSyTyY.js';
import { c as customDatePicker } from './customDatePicker-OPjIPQ0x.js';
import { v as validateInputFiledData } from './group_validation-SRPCr1uJ.js';
import { S as StockService } from './stock_service-MdUSSDg-.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';

const _sfc_main$2 = defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    BasicInputField,
    BasicForm,
    PreviousVitals,
    customDatePicker,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      BMI: {},
      BPStatus: {},
      vValidations: "",
      title: "",
      relationships: "",
      hasValidationErrors: [],
      vitalsInstance: {},
      validationStatus: { heightWeight: false, bloodPressure: false },
      showPD: false,
      stockService: {}
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useStockStore, ["stock"])
  },
  props: {
    data: {
      default: {}
    }
  },
  created() {
    this.stockService = new StockService();
  },
  async mounted() {
    this.resetData();
    if (this.data) {
      this.modifyFieldValue();
      this.title = "Edit Stock";
    } else {
      this.title = "Add Stock";
    }
    await this.getDrugs();
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    modifyFieldValue() {
      modifyFieldValue(this.stock, "product name", "value", { id: "", name: this.data.drug_legacy_name });
      modifyFieldValue(this.stock, "batch", "value", this.data.batch_number);
      modifyFieldValue(this.stock, "manufacture", "value", this.data.manufacture);
      modifyFieldValue(this.stock, "doses_wasted", "value", this.data.doses_wasted);
      modifyFieldValue(this.stock, "expire date", "value", this.data.expiry_date);
      modifyFieldValue(this.stock, "quantity", "value", this.data.delivered_quantity);
      modifyFieldValue(this.stock, "delivery_date", "value", this.data.delivery_date);
      modifyFieldValue(this.stock, "product name", "disabled", "true");
      modifyFieldValue(this.stock, "batch", "disabled", "true");
      modifyFieldValue(this.stock, "manufacture", "disabled", "true");
      modifyFieldValue(this.stock, "expire date", "disabled", "true");
      modifyFieldValue(this.stock, "quantity", "disabled", "true");
      modifyFieldValue(this.stock, "delivery_date", "disabled", "true");
    },
    async handleBatch() {
      if (this.data) {
        await this.updateBatch();
      } else {
        await this.createBatch();
      }
      useWorkerStore().postData("SYNC_STOCK_RECORD");
    },
    async createBatch() {
      if (validateInputFiledData(this.stock)) {
        const drug_id = getFieldValue(this.stock, "product name", "value").drug_id;
        const batch_number = getFieldValue(this.stock, "batch", "value");
        const data = [
          {
            batch_number,
            location_id: "",
            vvm_stage: "",
            items: [
              {
                barcode: "",
                drug_id,
                expiry_date: getFieldValue(this.stock, "expire date", "value"),
                manufacture: getFieldValue(this.stock, "manufacture", "value"),
                quantity: getFieldValue(this.stock, "quantity", "value"),
                delivery_date: getFieldValue(this.stock, "delivery_date", "value") || HisDate.sessionDate(),
                product_code: "",
                pack_size: ""
              }
            ]
          }
        ];
        const response = await this.stockService.postItems(data);
        await this.handleWaste(response[0].items[0].id);
        toastSuccess("Batch save successfully");
        modalController.dismiss("dismiss");
      } else {
        toastWarning("Batch not save");
        return false;
      }
    },
    async updateBatch() {
      const doses_wasted = parseInt(getFieldValue(this.stock, "doses_wasted", "value"));
      const delivered_quantity = parseInt(getFieldValue(this.stock, "quantity", "value"));
      this.data.current_quantity;
      const total_used_quantity = this.data.dispensed_quantity + this.data.doses_wasted + doses_wasted;
      if (delivered_quantity < total_used_quantity) {
        toastWarning("Quantity delivered can not be greater than quantity wasted and dispensed");
        return false;
      }
      if (validateInputFiledData(this.stock)) {
        const data = {
          doses_wasted,
          drug_id: getFieldValue(this.stock, "product name", "value").drug_id,
          reallocation_code: "MA20",
          waste_reason: "Something wrong with the drug",
          date: HisDate.sessionDate(),
          reason: "Mistake Entirely"
        };
        try {
          await this.stockService.updateItem(this.data.id, data);
          toastSuccess("Batch save successfully");
          modalController.dismiss("dismiss");
        } catch (error) {
          toastWarning(error);
        }
      } else {
        toastWarning("Batch not save");
        return false;
      }
    },
    async handleWaste(drug_id) {
      const doses_wasted = getFieldValue(this.stock, "doses_wasted", "value");
      if (doses_wasted) {
        const data = {
          reallocation_code: "MA20",
          quantity: doses_wasted,
          date: HisDate.sessionDate(),
          reason: "Something wrong with the drug"
        };
        await this.stockService.disposeItems(drug_id, data);
      }
    },
    navigationMenu(url) {
      menuController.close();
      this.$router.push(url);
    },
    resetData() {
      const rest = useStockStore();
      rest.setStock(rest.getInitialStock());
    },
    async getDrugs(filter = "") {
      const drugs = await DrugService.getDrugs({
        name: filter,
        page: 1,
        page_size: 10,
        concept_set: "Immunizations"
      });
      modifyFieldValue(this.stock, "product name", "multiSelectData", drugs);
    },
    async handleInputData(event) {
      if (event.inputHeader == "Product Name *") {
        await this.getDrugs("");
      }
    },
    dismiss() {
      modalController.dismiss();
    }
  }
});

const _hoisted_1$2 = { class: "modal_wrapper" };
const _hoisted_2$2 = {
  class: "ion-padding",
  slot: "content",
  style: { "padding-bottom": "200px" }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, { style: { "display": "flex", "justify-content": "space-between" } }, {
      default: withCtx(() => [
        createVNode(_component_ion_title, { class: "modalTitle" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          _: 1
        }),
        createVNode(_component_ion_icon, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
          style: { "padding-top": "10px", "padding-right": "10px" },
          icon: _ctx.iconsContent.cancel
        }, null, 8, ["icon"])
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding",
      style: { "--background": "#fff" }
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", null, [
              createVNode(_component_basic_form, {
                contentData: _ctx.stock,
                "onUpdate:inputValue": _ctx.handleInputData,
                onSearchChange: _ctx.getDrugs
              }, null, 8, ["contentData", "onUpdate:inputValue", "onSearchChange"])
            ])
          ])
        ])
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, {
      collapse: "fade",
      class: "ion-no-border"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_DynamicButton, {
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleBatch()),
                  name: "Save",
                  fill: "solid",
                  style: { "float": "right", "margin": "2%", "width": "130px" }
                })
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
const AddStockModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-88dde239"]]);

const initialName = [
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Search",
              icon: icons.search,
              value: "",
              name: "search",
              eventType: "input",
              alertsErrorMassage: "",
              selectedID: ""
            }
          ]
        }
      ]
    }
  }
];
const useSearchName = defineStore("searchName", {
  state: () => ({
    searchName: [...initialName]
  }),
  actions: {
    setsearchName(data) {
      this.searchName = data;
    },
    getInitialName() {
      const data = lodashExports.cloneDeep(initialName);
      return [...data];
    }
  }
});

const initialStockDiscard = [
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Quantity*",
              icon: icons.weight,
              valueType: "number",
              value: "",
              name: "quantity",
              eventType: "input",
              alertsErrorMassage: "",
              required: true,
              validationFunctionName: "isNumber"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Reason *",
              icon: icons.search,
              valueType: "text",
              isSingleSelect: true,
              popOver: true,
              value: "",
              name: "reason",
              validationFunctionName: "required",
              trackBy: "id",
              multiSelectData: [],
              eventType: "input",
              required: true,
              alertsErrorMassage: "",
              id: ""
            }
          ]
        }
      ]
    }
  }
];
const useStockDiscard = defineStore("stockDiscard", {
  state: () => ({
    stockDiscard: [...initialStockDiscard]
  }),
  actions: {
    setStockDiscard(data) {
      this.stockDiscard = data;
    },
    getInitialStockDiscard() {
      const data = lodashExports.cloneDeep(initialStockDiscard);
      return [...data];
    }
  },
  persist: true
});

const _sfc_main$1 = defineComponent({
  name: "StockManagementModal",
  mixins: [_sfc_main$3],
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    IonRow,
    IonCol,
    ImmunizationTrendsGraph,
    ImmunizationGroupGraph,
    IonCard,
    DynamicButton,
    BasicForm,
    IonIcon,
    IonFab,
    IonFabButton,
    IonFabList,
    IonButton,
    IonPopover
  },
  data() {
    return {
      iconsContent: icons,
      reportData: [],
      currentStock: [],
      stockData: [],
      allStock: [],
      outStock: [],
      filter: "",
      startDate: HisDate.sessionDate(),
      endDate: HisDate.sessionDate(),
      options: {
        responsive: true,
        select: true
      },
      selectedButton: "all",
      isLoading: false,
      popoverOpen: false,
      popoverName: "",
      event: null,
      stockService: {},
      disabled: false,
      totalPages: 0
    };
  },
  setup() {
    const currentPage = ref(1);
    return {
      currentPage,
      chevronBackOutline,
      checkmark,
      grid,
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document,
      globe,
      medkit,
      add,
      person
    };
  },
  created() {
    this.stockService = new StockService();
  },
  props: {
    data: {
      default: {}
    }
  },
  computed: {
    ...mapState(useStockStore, ["stock"]),
    ...mapState(useSearchName, ["searchName"]),
    ...mapState(useStockDiscard, ["stockDiscard"]),
    ...mapState(useStatusStore, ["apiStatus"])
  },
  $route: {
    async handler() {
      await this.buildTableData();
    },
    deep: true
  },
  watch: {
    stock: {
      async handler() {
      },
      deep: true
    }
  },
  async mounted() {
    await this.buildTableData();
  },
  methods: {
    checkExpired(item) {
      const expiry_date = new Date(item.expiry_date);
      const currentDate = new Date(HisDate.sessionDate());
      if (currentDate >= expiry_date) {
        return false;
      } else {
        return true;
      }
    },
    async updateBatch() {
      const doses_wasted = parseInt(getFieldValue(this.stockDiscard, "quantity", "value"));
      const reason = getFieldValue(this.stockDiscard, "reason", "value").name;
      const delivered_quantity = parseInt(this.stockData.delivered_quantity);
      this.stockData.current_quantity;
      const total_used_quantity = this.stockData.dispensed_quantity + this.stockData.doses_wasted + doses_wasted;
      if (delivered_quantity < total_used_quantity) {
        toastWarning("Quantity delivered can not be greater than quantity wasted and dispensed");
        return false;
      }
      if (validateInputFiledData(this.stockDiscard)) {
        const data = {
          doses_wasted,
          drug_id: this.stockData.drug_id,
          reallocation_code: "MA20",
          waste_reason: reason,
          date: HisDate.sessionDate(),
          reason
        };
        try {
          await this.stockService.updateItem(this.stockData.id, data);
          toastSuccess("Discard successfully");
          await this.buildTableData();
          this.closePopover();
        } catch (error) {
          toastWarning(error);
        }
      } else {
        toastWarning("Failing to discard");
        return false;
      }
    },
    async adjustStock() {
      let adjust_stock = parseInt(getFieldValue(this.stockDiscard, "quantity", "value"));
      let reason = getFieldValue(this.stockDiscard, "reason", "value").name;
      if (reason == "Positive Adjustment" || reason == "Positive Mathematical Error") {
        adjust_stock = adjust_stock;
      }
      if (reason == "Negative Adjustment" || reason == "Negative Mathematical Error") {
        if (adjust_stock > this.stockData.current_quantity) {
          toastWarning("Quantity Available can not be greater than adjustment quantity");
          return false;
        }
        adjust_stock = -adjust_stock;
      }
      if (validateInputFiledData(this.stockDiscard)) {
        const data = {
          adjust_stock,
          drug_id: this.stockData.drug_id,
          reallocation_code: "MA20",
          waste_reason: reason,
          date: HisDate.sessionDate(),
          reason
        };
        try {
          await this.stockService.updateItem(this.stockData.id, data);
          toastSuccess("Adjust successfully");
          await this.buildTableData();
          this.closePopover();
        } catch (error) {
          toastWarning(error);
        }
      } else {
        toastWarning("Failing to adjust");
        return false;
      }
    },
    whichPopover(e, item, name) {
      this.popoverName = name;
      useStockDiscard().setStockDiscard(useStockDiscard().getInitialStockDiscard());
      if (name == "adjust") {
        modifyFieldValue(this.stockDiscard, "reason", "multiSelectData", [
          {
            id: 1,
            name: "Positive Adjustment"
          },
          {
            id: 2,
            name: "Negative Adjustment"
          },
          {
            id: 3,
            name: "Negative Mathematical Error"
          },
          {
            id: 4,
            name: "Positive Mathematical Error"
          }
        ]);
      } else {
        modifyFieldValue(this.stockDiscard, "reason", "multiSelectData", [
          {
            id: 1,
            name: "VVM stage > 2"
          },
          {
            id: 2,
            name: "Frozen"
          },
          {
            id: 3,
            name: "Damage"
          },
          {
            id: 4,
            name: "Wastage"
          }
        ]);
      }
      this.openPopover(e, item);
    },
    openPopover(e, item) {
      this.stockData = item;
      this.event = e;
      this.popoverOpen = true;
    },
    closePopover() {
      this.event = null;
      this.popoverOpen = false;
    },
    dismiss() {
      modalController.dismiss("dismiss");
    },
    async onClickHandler(page) {
      await this.buildTableData(page);
    },
    formatDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async handleInputData(event) {
      if (event.inputHeader == "Search") {
        this.filter = event.value;
        await this.buildTableData();
      }
    },
    async voidStock(e, item) {
      const deleteConfirmed = await popoverConfirmation(`Do you want to void "${item.drug_legacy_name}", batch: ${item.batch_number} ?`, e, {
        confirmBtnLabel: "Void"
      });
      if (deleteConfirmed) {
        const stockService = new StockService();
        await stockService.deleteItem(item.id, {
          reason: "voided"
        });
        await this.buildTableData();
      }
    },
    async buildTableData(page = 1) {
      this.isLoading = true;
      useWorkerStore().postData("SYNC_STOCK_RECORD");
      try {
        if (this.apiStatus) {
          const stockService = new StockService();
          this.reportData = {
            records: await stockService.getItems({
              start_date: "2000-01-01",
              end_date: this.endDate,
              drug_name: this.data.drug_legacy_name,
              page,
              page_size: 4
            })
          };
          if (this.reportData?.records) this.totalPages = this.reportData?.records[0]?.total_count;
        } else {
          this.reportData = await getPouchDBRecords("stock", {
            selector: { drug_legacy_name: this.data.drug_legacy_name },
            currentPage: this.currentPage,
            itemsPerPage: 4
          });
          this.totalPages = this.reportData.totalCount;
        }
      } catch (error) {
        toastWarning("An error occurred while loading data.");
      } finally {
        this.isLoading = false;
      }
    },
    async selectButton(button) {
      this.selectedButton = button;
      await this.buildTableData();
    },
    async openAddStockModal(data) {
      const response = await createModal(AddStockModal, { class: "fullScreenModal" }, true, { data });
      if (response == "dismiss") {
        await this.buildTableData();
      }
    }
  }
});

const _hoisted_1$1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2$1 = { class: "container" };
const _hoisted_3$1 = { style: { "top": "-2px", "position": "relative", "margin-right": "10px" } };
const _hoisted_4$1 = { class: "drug_container" };
const _hoisted_5$1 = {
  key: 0,
  class: "watermark"
};
const _hoisted_6$1 = {
  key: 1,
  class: "watermark"
};
const _hoisted_7 = { style: { "font-weight": "700", "font-size": "16px", "color": "#939393" } };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = {
  class: "example-one",
  style: { "align-items": "center", "display": "flex" }
};
const _hoisted_10 = { style: { "margin-bottom": "160px" } };
const _hoisted_11 = { style: { "display": "flex", "justify-content": "space-between", "padding": "10px" } };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_vue_awesome_paginate = resolveComponent("vue-awesome-paginate");
  const _component_ion_popover = resolveComponent("ion-popover");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, {
    class: normalizeClass({ loading: _ctx.isLoading })
  }, {
    default: withCtx(() => [
      _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_spinner, { name: "bubbles" }),
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
      ])) : createCommentVNode("", true),
      createVNode(_component_ion_header, { style: { "display": "flex", "justify-content": "space-between" } }, {
        default: withCtx(() => [
          createVNode(_component_ion_title, { class: "modalTitle" }, {
            default: withCtx(() => [..._cache[7] || (_cache[7] = [
              createTextVNode("Inventory Management ", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_ion_icon, {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
            style: { "padding-top": "10px", "padding-right": "10px" },
            icon: _ctx.iconsContent.cancel
          }, null, 8, ["icon"])
        ]),
        _: 1
      }),
      createVNode(_component_ion_content, { style: { "--background": "#fff" } }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              createVNode(_component_basic_form, {
                contentData: _ctx.searchName,
                "onUpdate:inputValue": _ctx.handleInputData
              }, null, 8, ["contentData", "onUpdate:inputValue"])
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.reportData.records, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "drug_content",
                  key: index
                }, [
                  !_ctx.checkExpired(item) ? (openBlock(), createElementBlock("div", _hoisted_5$1, "EXPIRED")) : createCommentVNode("", true),
                  item.current_quantity <= 0 ? (openBlock(), createElementBlock("div", _hoisted_6$1, "Stock out")) : createCommentVNode("", true),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, { class: "" }, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_7, toDisplayString(item.drug_legacy_name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[8] || (_cache[8] = [
                          createTextVNode("Batch/Lot Number", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.batch_number), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[9] || (_cache[9] = [
                          createTextVNode("Manufacturer", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.manufacture), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[10] || (_cache[10] = [
                          createTextVNode("Expiration date ", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.formatDate(item.expiry_date)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[11] || (_cache[11] = [
                          createTextVNode("Date received", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.formatDate(item.delivery_date)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[12] || (_cache[12] = [
                          createTextVNode("Doses Received", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.delivered_quantity), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[13] || (_cache[13] = [
                          createTextVNode("Doses wasted", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.doses_wasted), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[14] || (_cache[14] = [
                          createTextVNode("Doses Issued", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.dispensed_quantity), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[15] || (_cache[15] = [
                          createTextVNode("Doses Available", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.current_quantity), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _ctx.apiStatus ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    _ctx.checkExpired(item) && item.current_quantity > 0 ? (openBlock(), createBlock(_component_ion_button, {
                      key: 0,
                      size: "small",
                      color: "danger",
                      name: "Discard Stock",
                      style: { "font-size": "12px" },
                      onClick: ($event) => _ctx.whichPopover($event, item, "discard")
                    }, {
                      default: withCtx(() => [..._cache[16] || (_cache[16] = [
                        createTextVNode(" Discard Stock ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : (openBlock(), createBlock(_component_ion_button, {
                      key: 1,
                      size: "small",
                      color: "danger",
                      name: "Discard Stock",
                      style: { "font-size": "12px" },
                      onClick: ($event) => _ctx.voidStock($event, item)
                    }, {
                      default: withCtx(() => [..._cache[17] || (_cache[17] = [
                        createTextVNode(" Void Stock ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    createVNode(_component_ion_button, {
                      color: "success",
                      size: "small",
                      name: "Update Stock",
                      style: { "font-size": "12px" },
                      onClick: ($event) => _ctx.whichPopover($event, item, "adjust")
                    }, {
                      default: withCtx(() => [..._cache[18] || (_cache[18] = [
                        createTextVNode("Adjust Stock", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : createCommentVNode("", true)
                ]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_9, [
              _ctx.totalPages > 0 ? (openBlock(), createBlock(_component_vue_awesome_paginate, {
                key: 0,
                "total-items": _ctx.totalPages,
                "items-per-page": 4,
                "max-pages-shown": 2,
                modelValue: _ctx.currentPage,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.currentPage = $event),
                onClick: _ctx.onClickHandler
              }, null, 8, ["total-items", "modelValue", "onClick"])) : createCommentVNode("", true)
            ])
          ]),
          createVNode(_component_ion_popover, {
            style: { "--offset-x": "-10px" },
            "is-open": _ctx.popoverOpen,
            "show-backdrop": false,
            "dismiss-on-select": false,
            event: _ctx.event,
            onDidDismiss: _cache[5] || (_cache[5] = ($event) => _ctx.popoverOpen = false)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.stockDiscard,
                  "onUpdate:inputValue": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue"])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createVNode(_component_ion_button, {
                  size: "small",
                  color: "danger",
                  name: "Discard Stock",
                  style: { "font-size": "14px" },
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.closePopover())
                }, {
                  default: withCtx(() => [..._cache[19] || (_cache[19] = [
                    createTextVNode("Cancel", -1)
                  ])]),
                  _: 1
                }),
                _ctx.popoverName == "adjust" ? (openBlock(), createBlock(_component_ion_button, {
                  key: 0,
                  color: "success",
                  size: "small",
                  name: "Update Stock",
                  style: { "font-size": "14px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => _ctx.adjustStock())
                }, {
                  default: withCtx(() => [..._cache[20] || (_cache[20] = [
                    createTextVNode("Save", -1)
                  ])]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.popoverName == "discard" ? (openBlock(), createBlock(_component_ion_button, {
                  key: 1,
                  color: "success",
                  size: "small",
                  name: "Update Stock",
                  style: { "font-size": "14px" },
                  onClick: _cache[4] || (_cache[4] = ($event) => _ctx.updateBatch())
                }, {
                  default: withCtx(() => [..._cache[21] || (_cache[21] = [
                    createTextVNode("Save", -1)
                  ])]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["is-open", "event"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
const StockManagementModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4e7e0d62"]]);

const _sfc_main = defineComponent({
  name: "StockManagement",
  mixins: [_sfc_main$3],
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    IonRow,
    IonCol,
    ImmunizationTrendsGraph,
    ImmunizationGroupGraph,
    IonCard,
    DynamicButton,
    BasicForm,
    IonIcon,
    IonFab,
    IonFabButton,
    IonFabList,
    IonButton
  },
  data() {
    return {
      reportData: [],
      currentStock: [],
      allStock: [],
      outStock: [],
      filter: "",
      startDate: HisDate.sessionDate(),
      endDate: HisDate.sessionDate(),
      options: {
        responsive: true,
        select: true
      },
      selectedButton: "all",
      isLoading: false,
      combinedBatches: [],
      stockData: [],
      totalPages: 0
    };
  },
  setup() {
    const currentPage = ref(1);
    return {
      currentPage,
      chevronBackOutline,
      checkmark,
      grid,
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document,
      globe,
      medkit,
      add,
      person
    };
  },
  computed: {
    ...mapState(useStockStore, ["stock"]),
    ...mapState(useSearchName, ["searchName"]),
    ...mapState(useStatusStore, ["apiStatus"])
  },
  watch: {
    stock: {
      async handler() {
      },
      deep: true
    },
    $route: {
      async handler(data) {
        if (data.name == "stockManagement") await this.updateBuildStockData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateBuildStockData();
  },
  methods: {
    combineDrugBatches(batches) {
      const groupedBatches = batches.reduce((acc, batch) => {
        const key = batch.drug_legacy_name;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(batch);
        return acc;
      }, {});
      this.combinedBatches = Object.keys(groupedBatches).map((key) => {
        const batchGroup = groupedBatches[key];
        return {
          drug_legacy_name: key,
          delivered_quantity: batchGroup.reduce((sum, batch) => sum + batch.delivered_quantity, 0),
          current_quantity: batchGroup.reduce((sum, batch) => sum + batch.current_quantity, 0),
          dispensed_quantity: batchGroup.reduce((sum, batch) => sum + batch.dispensed_quantity, 0),
          doses_wasted: batchGroup.reduce((sum, batch) => sum + batch.doses_wasted, 0)
        };
      });
      return this.combinedBatches;
    },
    async onClickHandler(page) {
      await this.buildTableData(page);
    },
    formatDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async handleInputData(event) {
      if (event.inputHeader == "Search") {
        this.filter = event.value;
        await this.buildTableData();
      }
    },
    async discardStock(e, item) {
      const deleteConfirmed = await popoverConfirmation(`Do you want to void "${item.drug_legacy_name}", batch: ${item.batch_number} ?`, e, {
        confirmBtnLabel: "Void"
      });
      if (deleteConfirmed) {
        const stockService = new StockService();
        await stockService.deleteItem(item.id, {
          reason: "voided"
        });
        await this.buildTableData();
      }
    },
    async updateBuildStockData() {
      useWorkerStore().postData("SYNC_STOCK_RECORD");
      this.buildTableData();
    },
    async buildTableData(page = 1) {
      this.isLoading = true;
      try {
        if (this.apiStatus) {
          const stockService = new StockService();
          this.reportData = {
            items: await stockService.getItems({
              start_date: "2000-01-01",
              end_date: this.endDate,
              drug_name: this.filter,
              page,
              page_size: 4,
              display_details: "true"
            })
          };
          if (this.reportData?.items) this.totalPages = this.reportData?.items[0]?.total_count;
        } else {
          this.stockData = await getPouchDBRecords("stock");
          console.log("🚀 ~ this.stockData:", this.stockData);
          this.reportData = this.paginateArray(this.combineDrugBatches(this.stockData), this.currentPage);
          this.totalPages = this.combinedBatches?.length;
        }
      } catch (error) {
        toastWarning("An error occurred while loading data.");
      } finally {
        this.isLoading = false;
      }
    },
    paginateArray(data, currentPage) {
      if (!Array.isArray(data)) {
        throw new Error("Input must be an array");
      }
      const page = Math.max(1, Number(currentPage) || 1);
      const startIndex = (page - 1) * 4;
      const endIndex = startIndex + 4;
      const paginatedItems = data.slice(startIndex, endIndex);
      return {
        currentPage: page,
        totalPages: Math.ceil(data.length / 4),
        totalItems: data.length,
        items: paginatedItems
      };
    },
    async selectButton(button) {
      this.selectedButton = button;
      await this.buildTableData();
    },
    async openMoreDetailsModal(data) {
      const response = await createModal(StockManagementModal, { class: "fullScreenModal" }, true, { data });
      if (response == "dismiss") {
        await this.buildTableData();
      }
    },
    async openAddStockModal(data) {
      const response = await createModal(AddStockModal, { class: "fullScreenModal" }, true, { data });
      if (response == "dismiss") {
        await this.buildTableData();
      }
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { style: { "top": "-10px", "position": "relative", "margin-right": "10px" } };
const _hoisted_4 = { class: "drug_container" };
const _hoisted_5 = { style: { "font-weight": "700", "font-size": "16px", "color": "#939393" } };
const _hoisted_6 = {
  class: "example-one",
  style: { "align-items": "center", "display": "flex" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_vue_awesome_paginate = resolveComponent("vue-awesome-paginate");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_fab_button = resolveComponent("ion-fab-button");
  const _component_ion_fab = resolveComponent("ion-fab");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, {
    class: normalizeClass({ loading: _ctx.isLoading }),
    "keep-alive": false
  }, {
    default: withCtx(() => [
      _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_spinner, { name: "bubbles" }),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
      ])) : createCommentVNode("", true),
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { style: { "--background": "#fff", "margin": "0 auto" } }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            _cache[8] || (_cache[8] = createBaseVNode("h4", { style: { "width": "100%", "text-align": "center", "font-weight": "700" } }, "Inventory Management", -1)),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_basic_form, {
                contentData: _ctx.searchName,
                "onUpdate:inputValue": _ctx.handleInputData
              }, null, 8, ["contentData", "onUpdate:inputValue"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.reportData?.items, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "drug_content",
                  key: index
                }, [
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, { class: "" }, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_5, toDisplayString(item.drug_legacy_name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[3] || (_cache[3] = [
                          createTextVNode("Doses Received", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.delivered_quantity), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[4] || (_cache[4] = [
                          createTextVNode("Doses wasted", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.doses_wasted), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[5] || (_cache[5] = [
                          createTextVNode("Doses Issued", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.dispensed_quantity), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_ion_row, { class: "search_header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "150px" },
                        class: "contentBold"
                      }, {
                        default: withCtx(() => [..._cache[6] || (_cache[6] = [
                          createTextVNode("Doses Available", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_col, {
                        style: { "max-width": "188px", "min-width": "100px" },
                        class: "content"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.current_quantity), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_button, {
                      color: "success",
                      size: "small",
                      name: "Update Stock",
                      style: { "font-size": "12px" },
                      onClick: ($event) => _ctx.openMoreDetailsModal(item)
                    }, {
                      default: withCtx(() => [..._cache[7] || (_cache[7] = [
                        createTextVNode(" More Stock Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_6, [
              _ctx.totalPages > 0 ? (openBlock(), createBlock(_component_vue_awesome_paginate, {
                key: 0,
                "total-items": _ctx.totalPages,
                "items-per-page": 4,
                "max-pages-shown": 2,
                modelValue: _ctx.currentPage,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.currentPage = $event),
                onClick: _ctx.onClickHandler
              }, null, 8, ["total-items", "modelValue", "onClick"])) : createCommentVNode("", true)
            ])
          ]),
          _ctx.apiStatus ? (openBlock(), createBlock(_component_ion_fab, {
            key: 0,
            slot: "fixed",
            vertical: "bottom",
            horizontal: "end",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.openAddStockModal(""))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_fab_button, { color: "primary" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, { icon: _ctx.add }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
const StockManagement = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72aeeb33"]]);

export { StockManagement as default };
