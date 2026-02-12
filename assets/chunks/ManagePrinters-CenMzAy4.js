import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, I as IonHeader, aD as IonToolbar, C as createBaseVNode, aE as IonTitle, a5 as createTextVNode, aG as IonContent, af as IonRow, aA as IonCol, bu as IonPage, c as computed, K as modalController, ct as useRoute, w as watch, a2 as onMounted, z as createElementBlock, bp as V, f as ref, n as nextTick, M as IonSpinner, H as createCommentVNode, aq as IonItem, a7 as IonLabel, dE as IonToggle, ap as IonList, J as Fragment, R as renderList, D as toDisplayString, N as IonButton, a4 as normalizeClass } from './vendor-DrpjccQs.js';
import { F as DynamicButton, z as StandardForm, C as useExposeFromStandardForm, t as toastWarning, S as Service, a5 as postIntoPouchDB, n as icons, y as StandardValidations, _ as _export_sfc, g as getPouchDBRecords, x as toastDanger, o as createModal, G as toastSuccess, aM as PrintoutService, T as Toolbar } from '../index-Cz8Kw0vP.js';

const _hoisted_1$2 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_2$2 = { style: { "max-width": "500px", "margin": "auto" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddWebPrinter",
  setup(__props) {
    const { formRef} = useExposeFromStandardForm();
    const webPrinter = computed(() => {
      return [
        {
          componentType: "inputField",
          header: "Print name",
          name: "printer_name",
          icon: icons.print,
          validation: (value) => {
            return StandardValidations.required(value);
          }
        },
        {
          componentType: "inputField",
          header: "Printer IP address",
          name: "ip_address",
          icon: icons.networkBarDark,
          validation: (value) => {
            return StandardValidations.required(value);
          }
        },
        {
          componentType: "inputField",
          header: "Port",
          name: "port",
          validation: (value) => {
            return StandardValidations.required(value);
          }
        }
      ];
    });
    const dismiss = () => {
      modalController.dismiss();
    };
    const addPrinter = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      const location_id = Service.getUserLocationId();
      data._id = `${location_id}_${(/* @__PURE__ */ new Date()).getTime()}`;
      data.location_id = location_id;
      data.created_at = Service.getSessionDate();
      if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
        await postIntoPouchDB({
          data,
          storeName: "printer_configurations",
          command: "upsertDocument"
        });
      } else {
        const res = await Service.postJson("/printer_configurations", data);
        console.log("🚀 ~ addPrinter ~ res:", res);
      }
      modalController.dismiss();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$2, [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [..._cache[2] || (_cache[2] = [
                        createTextVNode("Add Web Printer", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(DynamicButton, {
                      name: "X",
                      style: { "margin-right": "10px" },
                      onClick: _cache[0] || (_cache[0] = ($event) => dismiss())
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$2, [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), { size: "12" }, {
                      default: withCtx(() => [
                        createVNode(StandardForm, {
                          formData: webPrinter.value,
                          ref_key: "formRef",
                          ref: formRef
                        }, null, 8, ["formData"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), { class: "ion-justify-content-end ion-margin-top" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), { size: "auto" }, {
                      default: withCtx(() => [
                        createVNode(DynamicButton, {
                          name: "Add printer",
                          onClick: _cache[1] || (_cache[1] = ($event) => addPrinter())
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const AddWebPrinter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0136b158"]]);

const _hoisted_1$1 = { class: "page-wrapper" };
const _hoisted_2$1 = { class: "table-header" };
const _hoisted_3 = { class: "default-printer" };
const _hoisted_4 = { class: "table-responsive" };
const _hoisted_5 = {
  key: 0,
  class: "loading-state"
};
const _hoisted_6 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ManageIPPrinters",
  setup(__props) {
    const route = useRoute();
    const tableData = ref([]);
    const isLoading = ref(false);
    const dataTableRef = ref(null);
    const dataTableOptions = computed(() => ({
      paging: true,
      searching: false,
      ordering: true,
      responsive: true,
      pageLength: 8,
      rowId: "_id"
    }));
    const tableColumns = computed(() => [
      { data: 0, title: "Printer name" },
      { data: 1, title: "IP address" },
      { data: 2, title: "Port" },
      { data: 3, title: "Date" },
      { data: 4, title: "Actions", orderable: false }
    ]);
    const defaultForm = computed(() => [
      {
        componentType: "multiSelectInputField",
        value: Service.getDefaultPrinter() || "",
        trackBy: "_id",
        options: tableData.value.map((p) => ({
          id: p._id,
          name: p.printer_name,
          ip_address: p.ip_address,
          port: p?.port || "",
          created_at: p.created_at
        })),
        onChange: (value) => {
          localStorage.setItem("defaultPrinter", JSON.stringify(value));
        }
      }
    ]);
    const processedTableData = computed(
      () => tableData.value.map((printer) => [printer.printer_name, printer.ip_address, printer.port, formatDate(printer), actionButtons(printer._id)])
    );
    const formatDate = (printer) => printer.created_at ? new Date(printer.created_at).toLocaleDateString() : "—";
    const actionButtons = (id) => `
    <div class="action-buttons">
        <button
            class="btn btn-sm btn-primary edit-btn"
            data-action="test"
            data-id="${id}"
        >
            Test
        </button>
        <button
            class="btn btn-sm btn-danger delete-btn"
            data-action="delete"
            data-id="${id}"
        >
            Delete
        </button>
    </div>
`;
    const setupTableEvents = () => {
      nextTick(() => {
        const table = dataTableRef.value?.dt;
        if (!table) return;
        table.off("click", "button[data-action]");
        table.on("click", "button[data-action]", (e) => {
          const el = e.target;
          const action = el.dataset.action;
          const id = el.dataset.id;
          const printer = tableData.value.find((p) => p._id === id);
          if (!printer) return;
          if (action === "test") testPrinting(printer);
          if (action === "delete") deletePrinter(printer);
        });
      });
    };
    const loadTableData = async () => {
      isLoading.value = true;
      try {
        let printers = [];
        if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
          printers = await getPouchDBRecords("printer_configurations", {
            selector: { location_id: { $eq: Service.getUserLocationId() } }
          });
        } else {
          printers = await Service.getJson("/printer_configurations", { location_id: Service.getUserLocationId() });
          console.log("🚀 ~ loadTableData ~ printers:", printers);
        }
        if (printers.length <= 0) return [];
        printers = printers.map((p) => ({
          _id: p._id,
          printer_name: p.printer_name,
          ip_address: p.ip_address,
          port: p?.port || "",
          created_at: p.created_at
        }));
        tableData.value = printers;
        setupTableEvents();
      } catch (e) {
        console.error(e);
        toastDanger("Failed to load printers");
      } finally {
        isLoading.value = false;
      }
    };
    const addPrinter = async () => {
      await createModal(AddWebPrinter, { class: "large-modal" }, true);
      await loadTableData();
    };
    const deletePrinter = async (printer) => {
      console.log("🚀 ~ deletePrinter ~ printer:", printer);
      if (!confirm(`Delete printer ${printer.printer_name}?`)) return;
      try {
        await postIntoPouchDB({
          data: { _id: printer._id },
          storeName: "printer_configurations",
          command: "deleteData"
        });
        toastSuccess("Printer deleted");
        await loadTableData();
      } catch {
        toastDanger("Delete failed");
      }
    };
    const testPrinting = async (printer) => {
      const zpl = `^XA
^FO50,50^A0N,40,40^FDTest Print^FS
^FO50,100^FD${printer.printer_name}^FS
^XZ`;
      try {
        const res = await fetch(`http://${printer.ip_address}:${printer.port}/print`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ zpl })
        });
        res.ok ? toastSuccess("Test print sent") : toastDanger("Printer rejected request");
      } catch {
        toastDanger("Printer not reachable");
      }
    };
    watch(route, loadTableData);
    watch(processedTableData, setupTableEvents);
    onMounted(loadTableData);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "encounter-title" }, "Manage Web Printers", -1)),
          createBaseVNode("div", _hoisted_3, [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "label" }, "Default Printer", -1)),
            createVNode(StandardForm, { formData: defaultForm.value }, null, 8, ["formData"])
          ]),
          createVNode(DynamicButton, {
            name: "Add printer",
            fill: "solid",
            disabled: isLoading.value,
            onClick: addPrinter
          }, null, 8, ["disabled"])
        ]),
        createBaseVNode("div", _hoisted_4, [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_5, "Loading printers…")) : tableData.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
            _cache[2] || (_cache[2] = createBaseVNode("p", null, "No printers configured", -1)),
            createVNode(DynamicButton, {
              name: "Add printer",
              onClick: addPrinter
            })
          ])) : (openBlock(), createBlock(unref(V), {
            key: 2,
            ref_key: "dataTableRef",
            ref: dataTableRef,
            class: "display nowrap modern-table",
            width: "100%",
            data: processedTableData.value,
            columns: tableColumns.value,
            options: dataTableOptions.value
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", null, "Printer name"),
                  createBaseVNode("th", null, "IP address"),
                  createBaseVNode("th", null, "Port"),
                  createBaseVNode("th", null, "Date"),
                  createBaseVNode("th", null, "Actions")
                ])
              ], -1)
            ])]),
            _: 1
          }, 8, ["data", "columns", "options"]))
        ])
      ]);
    };
  }
});

const ManageIPPrinters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-85a0acb1"]]);

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ManagePrinters",
  setup(__props) {
    useRoute();
    const isLoading = ref(false);
    const refreshKey = ref(Math.random());
    const printers = ref([]);
    const defaultPrinter = ref({});
    const printerService = new PrintoutService();
    const isIpPrinters = ref(false);
    function saveIpPrintersState() {
      try {
        localStorage.setItem("isIpPrinters", JSON.stringify(isIpPrinters.value));
        console.log("isIpPrinters state saved:", isIpPrinters.value);
      } catch (e) {
        console.error("Error saving isIpPrinters state to localStorage:", e);
      }
    }
    function loadIpPrintersState() {
      try {
        const storedState = localStorage.getItem("isIpPrinters");
        if (storedState !== null) {
          isIpPrinters.value = JSON.parse(storedState);
          console.log("isIpPrinters state loaded:", isIpPrinters.value);
        }
      } catch (e) {
        console.error("Error loading isIpPrinters state from localStorage:", e);
      }
    }
    async function loadPrinters() {
      if (isLoading.value) return;
      isLoading.value = true;
      try {
        const unsortedPrinters = await printerService.getAllPrinters();
        console.log("Discovered printers", JSON.stringify(unsortedPrinters));
        printers.value = sortPrinters(unsortedPrinters);
      } catch (error) {
        console.error("Error loading printers:", error);
      } finally {
        isLoading.value = false;
        refreshKey.value = Math.random();
      }
    }
    function diffPrinters(a, b) {
      const nameA = a.name || "";
      const nameB = b.name || "";
      const addressA = a.address || "";
      const addressB = b.address || "";
      if (nameA !== nameB) {
        return nameA.localeCompare(nameB);
      }
      return addressA.localeCompare(addressB);
    }
    function setDefaultPrinter(printer) {
      printerService.setDefaultPrinter(printer);
      defaultPrinter.value = printer;
      refreshKey.value = Math.random();
      loadPrinters();
    }
    function isDefaultPrinter(printer) {
      return diffPrinters(printer, defaultPrinter.value) === 0;
    }
    function sortPrinters(printers2) {
      return printers2.sort((a, b) => {
        const aIsDefault = isDefaultPrinter(a);
        const bIsDefault = isDefaultPrinter(b);
        if (aIsDefault && !bIsDefault) {
          return -1;
        } else if (!aIsDefault && bIsDefault) {
          return 1;
        } else {
          return diffPrinters(a, b);
        }
      });
    }
    onMounted(async () => {
      loadIpPrintersState();
      defaultPrinter.value = await printerService.getDefaultPrinter() || {};
      if (defaultPrinter.value && (defaultPrinter.value.name || defaultPrinter.value.address)) {
        const exists = printers.value.some((p) => diffPrinters(p, defaultPrinter.value) === 0);
        if (!exists) {
          printers.value.push(defaultPrinter.value);
        }
      }
      loadPrinters();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(Toolbar),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                _cache[5] || (_cache[5] = createBaseVNode("h4", { style: { "width": "100%", "text-align": "center", "font-weight": "700" } }, "Printer Management", -1)),
                createVNode(unref(IonItem), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[2] || (_cache[2] = [
                        createTextVNode("Use IP Printers", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(unref(IonToggle), {
                      modelValue: isIpPrinters.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isIpPrinters.value = $event),
                      onIonChange: saveIpPrintersState
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                !isIpPrinters.value ? (openBlock(), createBlock(unref(IonList), { key: 0 }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(printers.value, (printer) => {
                      return openBlock(), createBlock(unref(IonItem), {
                        key: printer.name || printer.address || "unknown-printer"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(printer.name || printer.address || "Unnamed Printer"), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(IonButton), {
                            size: "small",
                            color: isDefaultPrinter(printer) ? "success" : "primary",
                            onClick: ($event) => setDefaultPrinter(printer),
                            disabled: isDefaultPrinter(printer)
                          }, {
                            default: withCtx(() => [..._cache[3] || (_cache[3] = [
                              createTextVNode(" Set as Default ", -1)
                            ])]),
                            _: 1
                          }, 8, ["color", "onClick", "disabled"]),
                          createVNode(unref(IonButton), {
                            onClick: ($event) => unref(printerService).printTestLbl(printer),
                            size: "small"
                          }, {
                            default: withCtx(() => [..._cache[4] || (_cache[4] = [
                              createTextVNode(" Test Print ", -1)
                            ])]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                isIpPrinters.value ? (openBlock(), createBlock(ManageIPPrinters, {
                  key: 1,
                  style: { "margin-top": "10px" }
                })) : createCommentVNode("", true)
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

const ManagePrinters = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8151b8bf"]]);

export { ManagePrinters as default };
