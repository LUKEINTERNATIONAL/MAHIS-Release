import { q as defineComponent, a1 as onMounted, r as ref, v as resolveComponent, x as createElementBlock, y as openBlock, A as createBaseVNode, z as createVNode, B as withCtx, a4 as createTextVNode, E as unref, M as IonButton, J as modalController, ct as useRoute, w as watch, bn as V, cZ as DataTable, n as nextTick, N as createBlock, G as createCommentVNode, aD as IonContent, a3 as normalizeClass, bs as IonPage } from './vendor-wM1cIaYi.js';
import { a2 as getFieldValue, W as LocationService, G as toastSuccess, t as toastWarning, _ as _export_sfc, a1 as modifyFieldValue, S as Service, L as useWorkerStore, n as icons, F as DynamicButton, o as createModal, a4 as popoverConfirmation, g as getPouchDBRecords, H as HisDate, T as Toolbar } from '../index-BFnAVsh7.js';
import { u as useStockStore } from './StockStore-DBNeKRrE.js';
import { u as useStartEndDate } from './StartEndDate-CsbGCcG7.js';
import { B as BasicForm } from './BasicForm-BFFhz_9k.js';
import { v as validateInputFiledData } from './group_validation-DG6TL6Di.js';

const _hoisted_1$5 = { class: "pim-cls-1 modal_wrapper" };
const _hoisted_2$5 = { class: "center text_12" };
const _hoisted_3$5 = { class: "btnContent" };
const _hoisted_4$5 = { class: "saveBtn" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AddVillage",
  props: {
    taData: Object
  },
  setup(__props) {
    onMounted(async () => {
    });
    const props = __props;
    const dismiss = () => {
      modalController.dismiss();
    };
    const saveVillage = async () => {
      if (await validateInputFiledData(villageForm.value)) {
        const villageValue = getFieldValue(villageForm.value, "Village", "value").split(",");
        const address = await LocationService.createAddress({
          address_type: "Village",
          addresses: villageValue,
          parent_location: props.taData.traditional_authority_id
        });
        if (address) {
          toastSuccess(`Location added successfully`);
        }
        dismiss();
      } else {
        toastWarning("Please fill all the required field");
      }
    };
    const villageForm = ref([
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Village*",
                  value: "",
                  name: "Village",
                  eventType: "input",
                  alertsErrorMassage: "",
                  validate: false,
                  required: true
                }
              ]
            }
          ]
        }
      }
    ]);
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "OtherVitalsHeading" }, [
          createBaseVNode("div", {
            class: "OtherVitalsTitle",
            style: { "color": "#1f2221d4", "font-size": "16px" }
          }, "Add Village")
        ], -1)),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2$5, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(BasicForm, { contentData: villageForm.value }, null, 8, ["contentData"])
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3$5, [
          createBaseVNode("div", _hoisted_4$5, [
            createVNode(unref(IonButton), {
              class: "btnText",
              color: "danger",
              fill: "solid",
              onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
              style: { "margin-right": "8px" }
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" Cancel ", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(IonButton), {
              class: "btnText",
              fill: "solid",
              onClick: saveVillage
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode(" Save ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});

const AddVillage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1152b56a"]]);

const _hoisted_1$4 = { class: "pim-cls-1 modal_wrapper" };
const _hoisted_2$4 = { class: "center text_12" };
const _hoisted_3$4 = { class: "btnContent" };
const _hoisted_4$4 = { class: "saveBtn" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UpdateVillage",
  props: {
    villageData: Object
  },
  setup(__props) {
    onMounted(async () => {
      await setData();
    });
    const props = __props;
    const setData = async () => {
      modifyFieldValue(village_form.value, "Village", "value", props.villageData.name);
    };
    const dismiss = () => {
      modalController.dismiss();
    };
    const updateTA = async () => {
      if (await validateInputFiledData(village_form.value)) {
        const VillageValue = getFieldValue(village_form.value, "Village", "value");
        const address = await Service.putJson(`villages/${props.villageData.village_id}`, {
          id: props.villageData.village_id,
          name: VillageValue,
          ta_id: props.villageData.traditional_authority_id
        });
        if (address) {
          toastSuccess(`Village updated successfully`);
        }
        dismiss();
      } else {
        toastWarning("Please fill all the required field");
      }
    };
    const village_form = ref([
      {
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "Village*",
                  value: "",
                  name: "Village",
                  eventType: "input",
                  alertsErrorMassage: "",
                  validate: false,
                  required: true
                }
              ]
            }
          ]
        }
      }
    ]);
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "OtherVitalsHeading" }, [
          createBaseVNode("div", {
            class: "OtherVitalsTitle",
            style: { "color": "#1f2221d4", "font-size": "16px" }
          }, "Add TA")
        ], -1)),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2$4, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(BasicForm, { contentData: village_form.value }, null, 8, ["contentData"])
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3$4, [
          createBaseVNode("div", _hoisted_4$4, [
            createVNode(_component_ion_button, {
              class: "btnText",
              color: "danger",
              fill: "solid",
              onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
              style: { "margin-right": "8px" }
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" Cancel ", -1)
              ])]),
              _: 1
            }),
            createVNode(_component_ion_button, {
              class: "btnText",
              fill: "solid",
              onClick: updateTA
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode(" Save ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});

const UpdateVillage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cfc2edfa"]]);

const _hoisted_1$3 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2$3 = { class: "container" };
const _hoisted_3$3 = { style: { "margin-top": "25px" } };
const _hoisted_4$3 = { class: "table-responsive" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ManageVillageModal",
  props: {
    taData: Object
  },
  setup(__props) {
    const stockStore = useStockStore();
    const workerStore = useWorkerStore();
    const route = useRoute();
    const dataTableRef = ref(null);
    const isLoading = ref(false);
    const props = __props;
    const options = ref({
      responsive: true,
      select: false,
      processing: true,
      serverSide: true,
      pageLength: 10,
      searching: true,
      ajax: async function(data, callback) {
        try {
          isLoading.value = true;
          const currentPage = Math.floor(data.start / data.length) + 1;
          let selector = {
            traditional_authority_id: props.taData.traditional_authority_id
          };
          if (data.search?.value) {
            selector.name = {
              $regex: new RegExp(data.search.value, "i")
              // Case-insensitive regex search
            };
          }
          const filter = {
            currentPage,
            itemsPerPage: data.length,
            selector
          };
          const response = await getPouchDBRecords("villages", filter);
          const formattedData = await Promise.all(
            response.records.map(async (item) => {
              return {
                name: item.name,
                actions: `
                            <button class="btn btn-sm btn-primary edit-btn" data-id='${JSON.stringify(item)}'>Edit</button>
                            <button class="btn btn-sm btn-danger delete-btn" data-id='${JSON.stringify(item)}'>Delete</button>
                        `
              };
            })
          );
          callback({
            draw: data.draw,
            recordsTotal: response.totalCount,
            recordsFiltered: response.totalCount,
            data: formattedData
          });
        } catch (error) {
          console.error("Error fetching data:", error);
          toastWarning("An error occurred while loading data.");
          callback({
            draw: data.draw,
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        } finally {
          isLoading.value = false;
        }
      },
      columns: [{ data: "name" }, { data: "actions" }],
      language: {
        processing: "Loading...",
        emptyTable: "No data available",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        infoEmpty: "Showing 0 to 0 of 0 entries",
        lengthMenu: "Show _MENU_ entries",
        loadingRecords: "Loading...",
        search: "Search:",
        zeroRecords: "No matching records found"
      }
    });
    function dismiss() {
      modalController.dismiss("dismiss");
    }
    const reloadTableData = (reloadPagination = true) => {
      const table = dataTableRef.value.dt;
      table.ajax.reload(null, reloadPagination);
    };
    const addVillageModal = async () => {
      const ta_data = JSON.parse(JSON.stringify(props.taData));
      await createModal(AddVillage, { class: "fullScreenModal" }, true, { taData: ta_data });
      reloadTableData(false);
    };
    const openDeletePopover = async (villageData, e) => {
      const deleteConfirmed = await popoverConfirmation(`Do you want to delete village ${villageData.name} ?`, e);
      if (deleteConfirmed) {
        deleteTA(villageData);
      }
    };
    const deleteTA = async (villageData) => {
      const res = await Service.delete(`villages/${villageData.village_id}`, { id: villageData.village_id });
      if (res?.message == "Village successfully deleted") {
        await workerStore.postData({
          command: "deleteData",
          storeName: "villages",
          data: { village_id: villageData.village_id }
        });
      }
      reloadTableData(false);
    };
    watch(
      () => stockStore.stock,
      async () => {
        const table = dataTableRef.value.dt;
        table?.ajax.reload();
      },
      { deep: true }
    );
    watch(
      () => route,
      async () => {
        const table = dataTableRef.value.dt;
        table?.ajax.reload();
      },
      { deep: true }
    );
    const updateVillageModal = async (villageData) => {
      await createModal(UpdateVillage, { class: "fullScreenModal" }, true, { villageData });
      reloadTableData(false);
    };
    const setupEventHandlers = () => {
      const table = dataTableRef.value.dt;
      table.on("click", ".edit-btn", (e) => {
        const data = e.target.getAttribute("data-id");
        if (data) updateVillageModal(JSON.parse(data));
      });
      table.on("click", ".delete-btn", (e) => {
        const data = e.target.getAttribute("data-id");
        if (data) openDeletePopover(JSON.parse(data), e);
      });
    };
    onMounted(() => {
      V.use(DataTable);
      nextTick(() => {
        setupEventHandlers();
      });
    });
    return (_ctx, _cache) => {
      const _component_ion_spinner = resolveComponent("ion-spinner");
      const _component_ion_title = resolveComponent("ion-title");
      const _component_ion_icon = resolveComponent("ion-icon");
      const _component_ion_header = resolveComponent("ion-header");
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
            createVNode(_component_ion_spinner, { name: "bubbles" }),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(_component_ion_header, { style: { "display": "flex", "justify-content": "space-between" } }, {
            default: withCtx(() => [
              createVNode(_component_ion_title, { class: "modalTitle" }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("Village Management", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_ion_icon, {
                onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
                style: { "padding-top": "10px", "padding-right": "10px" },
                icon: unref(icons).cancel
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), { style: { "--background": "#fff" } }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$3, [
                createBaseVNode("div", _hoisted_3$3, [
                  createVNode(DynamicButton, {
                    style: { "height": "45px" },
                    name: " Add Village",
                    size: "small",
                    iconSlot: "start",
                    icon: unref(icons).plusWhite,
                    onClick: _cache[1] || (_cache[1] = ($event) => addVillageModal())
                  }, null, 8, ["icon"])
                ]),
                createBaseVNode("div", _hoisted_4$3, [
                  createVNode(unref(V), {
                    ref_key: "dataTableRef",
                    ref: dataTableRef,
                    options: options.value,
                    class: "display nowrap",
                    width: "100%"
                  }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createBaseVNode("thead", null, [
                        createBaseVNode("tr", null, [
                          createBaseVNode("th", null, "Villages"),
                          createBaseVNode("th", null, "Action")
                        ])
                      ], -1)
                    ])]),
                    _: 1
                  }, 8, ["options"])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});

const ManageVillageModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0609d13b"]]);

const _hoisted_1$2 = { class: "pim-cls-1 modal_wrapper" };
const _hoisted_2$2 = { class: "center text_12" };
const _hoisted_3$2 = { class: "btnContent" };
const _hoisted_4$2 = { class: "saveBtn" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddTA",
  setup(__props) {
    onMounted(async () => {
      await setDistrict();
    });
    const setDistrict = async () => {
      modifyFieldValue(TA_form.value, "TA_district", "multiSelectData", await getPouchDBRecords("districts", { selector: { region_id: { $ne: 4 } } }));
    };
    const dismiss = () => {
      modalController.dismiss();
    };
    const saveData = async () => {
      if (await validateInputFiledData(TA_form.value)) {
        const TAValue = getFieldValue(TA_form.value, "TA", "value");
        const villageValue = getFieldValue(TA_form.value, "Village", "value").split(",");
        const district_id = getFieldValue(TA_form.value, "TA_district", "value").district_id;
        const address = await LocationService.createAddress({
          address_type: "Village",
          addresses: villageValue,
          parent_location: district_id,
          ta_name: TAValue
        });
        if (address) {
          toastSuccess(`Location added successfully`);
        }
        dismiss();
      } else {
        toastWarning("Please fill all the required field");
      }
    };
    const TA_form = ref([
      {
        selectedData: [],
        isFinishBtn: false,
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "District*",
                  icon: icons.search,
                  value: "",
                  name: "TA_district",
                  setName: "TALocation",
                  eventType: "input",
                  alertsErrorMassage: "",
                  isSingleSelect: true,
                  popOver: true,
                  trackBy: "district_id",
                  multiSelectData: [],
                  id: "",
                  idName: "district_id",
                  validationFunctionName: "required"
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
                  inputHeader: "TA*",
                  value: "",
                  name: "TA",
                  eventType: "input",
                  alertsErrorMassage: "",
                  validationFunctionName: "required"
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
                  inputHeader: "Village*",
                  value: "",
                  name: "Village",
                  eventType: "input",
                  alertsErrorMassage: "",
                  validate: false,
                  validationFunctionName: "required"
                }
              ]
            }
          ]
        }
      }
    ]);
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "OtherVitalsHeading" }, [
          createBaseVNode("div", {
            class: "OtherVitalsTitle",
            style: { "color": "#1f2221d4", "font-size": "16px" }
          }, "Add TA")
        ], -1)),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2$2, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(BasicForm, { contentData: TA_form.value }, null, 8, ["contentData"])
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$2, [
            createVNode(_component_ion_button, {
              class: "btnText",
              color: "danger",
              fill: "solid",
              onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
              style: { "margin-right": "8px" }
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" Cancel ", -1)
              ])]),
              _: 1
            }),
            createVNode(_component_ion_button, {
              class: "btnText",
              fill: "solid",
              onClick: saveData
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode(" Save ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});

const AddTA = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6b698657"]]);

const _hoisted_1$1 = { class: "pim-cls-1 modal_wrapper" };
const _hoisted_2$1 = { class: "center text_12" };
const _hoisted_3$1 = { class: "btnContent" };
const _hoisted_4$1 = { class: "saveBtn" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UpdateTA",
  props: {
    taData: Object
  },
  setup(__props) {
    onMounted(async () => {
      await setData();
    });
    const props = __props;
    const setData = async () => {
      const district_data = await getPouchDBRecords("districts", { selector: { district_id: props.taData.district_id } });
      modifyFieldValue(TA_form.value, "TA_district", "multiSelectData", await getPouchDBRecords("districts", { selector: { region_id: { $ne: 4 } } }));
      modifyFieldValue(TA_form.value, "TA_district", "value", district_data[0]);
      modifyFieldValue(TA_form.value, "TA", "value", props.taData.name);
    };
    const dismiss = () => {
      modalController.dismiss();
    };
    const updateTA = async () => {
      if (await validateInputFiledData(TA_form.value)) {
        const TAValue = getFieldValue(TA_form.value, "TA", "value");
        const district_id = getFieldValue(TA_form.value, "TA_district", "value").district_id;
        const address = await Service.putJson(`traditional_authorities/${props.taData.traditional_authority_id}`, {
          id: props.taData.traditional_authority_id,
          name: TAValue,
          district_id
        });
        if (address) {
          toastSuccess(`TA updated successfully`);
        }
        dismiss();
      } else {
        toastWarning("Please fill all the required field");
      }
    };
    const TA_form = ref([
      {
        selectedData: [],
        isFinishBtn: false,
        data: {
          rowData: [
            {
              colData: [
                {
                  inputHeader: "District*",
                  icon: icons.search,
                  value: "",
                  name: "TA_district",
                  setName: "TALocation",
                  eventType: "input",
                  alertsErrorMassage: "",
                  isSingleSelect: true,
                  popOver: true,
                  trackBy: "district_id",
                  multiSelectData: [],
                  id: "",
                  idName: "district_id",
                  validationFunctionName: "required"
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
                  inputHeader: "TA*",
                  value: "",
                  name: "TA",
                  eventType: "input",
                  alertsErrorMassage: "",
                  validationFunctionName: "required"
                }
              ]
            }
          ]
        }
      }
    ]);
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_button = resolveComponent("ion-button");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "OtherVitalsHeading" }, [
          createBaseVNode("div", {
            class: "OtherVitalsTitle",
            style: { "color": "#1f2221d4", "font-size": "16px" }
          }, "Add TA")
        ], -1)),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(BasicForm, { contentData: TA_form.value }, null, 8, ["contentData"])
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_component_ion_button, {
              class: "btnText",
              color: "danger",
              fill: "solid",
              onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
              style: { "margin-right": "8px" }
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" Cancel ", -1)
              ])]),
              _: 1
            }),
            createVNode(_component_ion_button, {
              class: "btnText",
              fill: "solid",
              onClick: updateTA
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode(" Save ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});

const UpdateTA = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c3da4f3d"]]);

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_4 = { style: { "width": "50%", "max-width": "350px" } };
const _hoisted_5 = { style: { "margin-top": "25px" } };
const _hoisted_6 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LocationsManagement",
  setup(__props) {
    const stockStore = useStockStore();
    useStartEndDate();
    const route = useRoute();
    const dataTableRef = ref(null);
    const isLoading = ref(false);
    ref("all");
    ref(HisDate.sessionDate());
    ref(HisDate.sessionDate());
    const selectedDistrictId = ref("");
    const districtInputField = ref([]);
    const formatTableData = async (records) => {
      return Promise.all(
        records.map(async (item) => {
          const district = await getPouchDBRecords("districts", {
            selector: { district_id: item.district_id }
          });
          const response = await getPouchDBRecords("villages", { selector: { traditional_authority_id: item.traditional_authority_id } });
          return {
            ta_id: item.traditional_authority_id,
            name: item.name,
            district: district[0].name,
            villages: `<button class="btn btn-sm btn-primary view-btn" data-id='${JSON.stringify(item)}'> View ${response.length}   </button>`,
            actions: `
                    <button class="btn btn-sm btn-primary edit-btn" data-id='${JSON.stringify(item)}'>Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id='${JSON.stringify(item)}'>Delete</button>
                `
          };
        })
      );
    };
    const reloadTableData = (reloadPagination = true) => {
      const table = dataTableRef.value.dt;
      table.ajax.reload(null, reloadPagination);
    };
    const options = ref({
      responsive: true,
      select: false,
      processing: true,
      serverSide: true,
      pageLength: 10,
      searching: true,
      ajax: async function(data, callback) {
        try {
          isLoading.value = true;
          const currentPage = Math.floor(data.start / data.length) + 1;
          let selector = {};
          if (selectedDistrictId.value) {
            selector.district_id = selectedDistrictId.value;
          }
          if (data.search?.value) {
            selector.name = {
              $regex: new RegExp(data.search.value, "i")
              // Case-insensitive regex search
            };
          }
          const filter = {
            currentPage,
            itemsPerPage: data.length,
            selector
          };
          const response = await getPouchDBRecords("traditional_authorities", filter);
          const formattedData = await formatTableData(response.records);
          callback({
            draw: data.draw,
            recordsTotal: response.totalCount,
            recordsFiltered: response.totalCount,
            data: formattedData
          });
        } catch (error) {
          console.error("Error fetching data:", error);
          toastWarning("An error occurred while loading data.");
          callback({
            draw: data.draw,
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        } finally {
          isLoading.value = false;
        }
      },
      columns: [{ data: "ta_id" }, { data: "name" }, { data: "district" }, { data: "villages" }, { data: "actions" }],
      language: {
        processing: "Loading...",
        emptyTable: "No data available",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        infoEmpty: "Showing 0 to 0 of 0 entries",
        lengthMenu: "Show _MENU_ entries",
        loadingRecords: "Loading...",
        search: "Search:",
        zeroRecords: "No matching records found"
      }
    });
    const viewVillagesModal = async (taData) => {
      const data = await createModal(ManageVillageModal, { class: "fullScreenModal" }, true, { taData });
      if (data === "dismiss") {
        reloadTableData(false);
      }
    };
    const setDistrict = async (data) => {
      selectedDistrictId.value = data?.value?.district_id;
      reloadTableData();
    };
    const openDeletePopover = async (taData, e) => {
      const data = JSON.parse(taData);
      const deleteConfirmed = await popoverConfirmation(`Do you want to delete TA ${data.name} ?`, e);
      if (deleteConfirmed) {
        deleteTA(data);
      }
    };
    const deleteTA = async (taData) => {
      const res = await Service.delete(`traditional_authorities/${taData.traditional_authority_id}`, { id: taData.traditional_authority_id });
      if (res?.message == "Traditional Authority and associated villages successfully deleted") {
        useWorkerStore().postData({
          command: "deleteData",
          storeName: "traditional_authorities",
          data: { traditional_authority_id: taData.traditional_authority_id }
        });
        useWorkerStore().postData({
          command: "deleteData",
          storeName: "villages",
          data: { traditional_authority_id: taData.traditional_authority_id }
        });
      }
      reloadTableData(false);
    };
    const addTAModal = async () => {
      await createModal(AddTA, { class: "otherVitalsModal" });
      reloadTableData(false);
    };
    const updateTAModal = async (taData) => {
      await createModal(UpdateTA, { class: "otherVitalsModal" }, true, { taData });
      reloadTableData(false);
    };
    watch(
      () => stockStore.stock,
      async () => {
        const table = dataTableRef.value.dt;
        table?.ajax.reload();
      },
      { deep: true }
    );
    watch(
      () => route,
      async (data) => {
        if (data.name == "LocationsManagement") {
          const table = dataTableRef.value.dt;
          table?.ajax.reload();
        }
      },
      { deep: true }
    );
    const setupEventHandlers = () => {
      const table = dataTableRef.value.dt;
      table.on("click", ".edit-btn", (e) => {
        const data = e.target.getAttribute("data-id");
        if (data) updateTAModal(JSON.parse(data));
      });
      table.on("click", ".delete-btn", (e) => {
        const id = e.target.getAttribute("data-id");
        if (id) openDeletePopover(id, e);
      });
      table.on("click", ".view-btn", (e) => {
        const data = e.target.getAttribute("data-id");
        if (data) viewVillagesModal(JSON.parse(data));
      });
    };
    onMounted(async () => {
      districtInputField.value = [
        {
          selectedData: [],
          isFinishBtn: false,
          data: {
            rowData: [
              {
                colData: [
                  {
                    inputHeader: "Filter by districts",
                    popOver: true,
                    icon: icons.search,
                    value: "",
                    name: "filter_district",
                    eventType: "input",
                    alertsErrorMassage: "",
                    isSingleSelect: true,
                    trackBy: "district_id",
                    multiSelectData: await getPouchDBRecords("districts", { selector: { region_id: { $ne: 4 } } }),
                    id: "",
                    idName: "district_id"
                  }
                ]
              }
            ]
          }
        }
      ];
      V.use(DataTable);
      nextTick(() => {
        setupEventHandlers();
      });
    });
    return (_ctx, _cache) => {
      const _component_ion_spinner = resolveComponent("ion-spinner");
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(_component_ion_spinner, { name: "bubbles" }),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(Toolbar),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                _cache[3] || (_cache[3] = createBaseVNode("h4", { style: { "width": "100%", "text-align": "center", "font-weight": "700" } }, "TA Management", -1)),
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(BasicForm, {
                      contentData: districtInputField.value,
                      "onUpdate:inputValue": setDistrict
                    }, null, 8, ["contentData"])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(DynamicButton, {
                      style: { "height": "45px" },
                      name: " Add TA",
                      size: "small",
                      iconSlot: "start",
                      icon: unref(icons).plusWhite,
                      onClick: _cache[0] || (_cache[0] = ($event) => addTAModal())
                    }, null, 8, ["icon"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(unref(V), {
                    ref_key: "dataTableRef",
                    ref: dataTableRef,
                    options: options.value,
                    class: "display nowrap",
                    width: "100%"
                  }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createBaseVNode("thead", null, [
                        createBaseVNode("tr", null, [
                          createBaseVNode("th", null, "ID"),
                          createBaseVNode("th", null, "TA"),
                          createBaseVNode("th", null, "District"),
                          createBaseVNode("th", null, "Villages"),
                          createBaseVNode("th", null, "Action")
                        ])
                      ], -1)
                    ])]),
                    _: 1
                  }, 8, ["options"])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});

const LocationsManagement = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a96719ae"]]);

export { LocationsManagement as default };
