import { s as defineComponent, a2 as onMounted, bp as V, cZ as DataTable, y as openBlock, O as createBlock, B as withCtx, z as createElementBlock, A as createVNode, F as unref, M as IonSpinner, C as createBaseVNode, H as createCommentVNode, aG as IonContent, aq as IonItem, a7 as IonLabel, a5 as createTextVNode, bN as IonSelect, J as Fragment, R as renderList, bM as IonSelectOption, D as toDisplayString, a4 as normalizeClass, bu as IonPage, f as ref, n as nextTick } from './vendor-DrpjccQs.js';
import { T as Toolbar, Y as IdentifierService, t as toastWarning, o as createModal, _ as _export_sfc } from '../index-BqymQxN2.js';
import { O as OfflineMoreDetailsModal } from './OfflineMoreDetailsModal-Bc3cv_iT.js';
import './lodash-C2jZK40L.js';

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "select-group-wide" };
const _hoisted_4 = {
  key: 0,
  class: "content-area"
};
const _hoisted_5 = { class: "table-section" };
const _hoisted_6 = { style: { "width": "100%", "text-align": "center", "font-weight": "700", "margin": "20px 0" } };
const _hoisted_7 = {
  key: 0,
  class: "table-responsive"
};
const _hoisted_8 = {
  key: 1,
  class: "placeholder-content"
};
const _hoisted_9 = { style: { "text-align": "center", "color": "#666", "font-style": "italic" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MultipleIdentifiers",
  setup(__props) {
    const isLoading = ref(false);
    const selectedIdentifier = ref(null);
    const identifierTypes = ref([]);
    const reportData = ref([]);
    const dataTable = ref(null);
    const hasTableData = ref(false);
    const tableOptions = {
      responsive: true,
      select: false,
      layout: {
        topStart: null,
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      }
    };
    const loadIdentifierTypes = async () => {
      try {
        isLoading.value = true;
        const response = await IdentifierService.getIdentifierTypes();
        identifierTypes.value = response.map((type) => ({
          id: type.patient_identifier_type_id || type.id,
          name: type.name
        }));
      } catch (error) {
        console.error("Error loading identifier types:", error);
        toastWarning("Failed to load identifier types.");
      } finally {
        isLoading.value = false;
      }
    };
    const selectIdentifier = async (identifierId) => {
      selectedIdentifier.value = identifierId;
      await buildTableData(identifierId);
    };
    const buildTableData = async (identifierId) => {
      isLoading.value = true;
      try {
        const identifierService = new IdentifierService();
        identifierService.setIdentifierType(identifierId);
        const multipleIdentifiers = await identifierService.getMultipleIdentifiers();
        if (multipleIdentifiers && multipleIdentifiers.length > 0) {
          reportData.value = multipleIdentifiers.map((item, index) => [
            item.given_name || "N/A",
            item.family_name || "N/A",
            item.gender || "N/A",
            item.identifiers ? item.identifiers.length.toString() : "0",
            `<button class="btn btn-sm btn-primary view-btn" data-index="${index}" data-identifiers='${JSON.stringify(
              item.identifiers || []
            )}'>View</button>`
          ]);
          hasTableData.value = true;
        } else {
          reportData.value = [];
          hasTableData.value = false;
        }
        V.use(DataTable);
        await nextTick();
        setTimeout(() => {
          setupTableEventListeners();
        }, 100);
      } catch (error) {
        console.error("Error building table data:", error);
        toastWarning("An error occurred while loading data.");
        hasTableData.value = false;
        reportData.value = [];
      } finally {
        isLoading.value = false;
      }
    };
    const setupTableEventListeners = () => {
      if (dataTable.value && hasTableData.value) {
        const table = dataTable.value.dt;
        table.columns.adjust().draw();
        table.off("click", ".view-btn");
        table.on("click", ".view-btn", (e) => {
          const target = e.target;
          const identifiers = target.getAttribute("data-identifiers");
          const index = target.getAttribute("data-index");
          handleViewIdentifiers(identifiers, index);
        });
      }
    };
    const getSelectedIdentifierName = () => {
      const selectedType = identifierTypes.value.find((type) => type.id === selectedIdentifier.value);
      return selectedType ? selectedType.name : "";
    };
    const handleViewIdentifiers = async (identifiersJson, rowIndex) => {
      if (!identifiersJson || !rowIndex) return;
      try {
        const identifiers = JSON.parse(identifiersJson);
        await openIdentifierDetailsModal(identifiers, parseInt(rowIndex));
      } catch (error) {
        console.error("Error parsing identifiers:", error);
        toastWarning("Error viewing identifier details");
      }
    };
    const openIdentifierDetailsModal = async (identifiers, rowIndex) => {
      const identifierService = new IdentifierService();
      identifierService.setIdentifierType(selectedIdentifier.value || 0);
      const modalData = {
        title: `Identifiers belonging to client`,
        identifiers,
        onVoidIdentifier: async (identifierId, index) => {
          await handleVoidIdentifier(identifierId, identifiers, index, rowIndex);
        }
      };
      const data = await createModal(OfflineMoreDetailsModal, { class: "fullScreenModal" }, true, { clientData: modalData });
      if (data === "dismiss" && selectedIdentifier.value) {
        await buildTableData(selectedIdentifier.value);
      }
    };
    const handleVoidIdentifier = async (identifierId, identifiers, identifierIndex, rowIndex) => {
      if (confirm("Are you sure you want to void this identifier? Please provide a reason.")) {
        try {
          const reason = prompt("Please provide a reason for voiding this identifier:") || "No reason provided";
          const identifierService = new IdentifierService();
          identifierService.setIdentifierType(selectedIdentifier.value || 0);
          await identifierService.voidMultipleIdentifiers([identifierId], reason, identifiers[0]?.identifier_type || selectedIdentifier.value);
          identifiers.splice(identifierIndex, 1);
          if (identifiers.length <= 1) {
            reportData.value.splice(rowIndex, 1);
            if (dataTable.value) {
              const table = dataTable.value.dt;
              table.clear();
              table.rows.add(reportData.value);
              table.draw();
            }
          } else {
            reportData.value[rowIndex][3] = identifiers.length.toString();
            if (dataTable.value) {
              const table = dataTable.value.dt;
              table.clear();
              table.rows.add(reportData.value);
              table.draw();
            }
            await openIdentifierDetailsModal(identifiers, rowIndex);
          }
        } catch (error) {
          console.error("Error voiding identifier:", error);
          toastWarning("Failed to void identifier");
        }
      }
    };
    onMounted(async () => {
      V.use(DataTable);
      await loadIdentifierTypes();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(Toolbar),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                _cache[5] || (_cache[5] = createBaseVNode("h4", { style: { "text-align": "center", "font-weight": "bold", "margin-bottom": "20px" } }, "Select Identifier Type", -1)),
                createBaseVNode("div", _hoisted_3, [
                  createVNode(unref(IonItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { position: "stacked" }, {
                        default: withCtx(() => [..._cache[3] || (_cache[3] = [
                          createTextVNode("Identifier Type", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(unref(IonSelect), {
                        interface: "popover",
                        placeholder: "Select Identifier Type",
                        modelValue: selectedIdentifier.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedIdentifier.value = $event),
                        onIonChange: _cache[1] || (_cache[1] = ($event) => selectIdentifier($event.detail.value)),
                        class: "wide-select"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(identifierTypes.value, (identifierType) => {
                            return openBlock(), createBlock(unref(IonSelectOption), {
                              key: identifierType.id,
                              value: identifierType.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(identifierType.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                selectedIdentifier.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("h4", _hoisted_6, " Multiple Identifier by " + toDisplayString(getSelectedIdentifierName()), 1),
                    hasTableData.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      createVNode(unref(V), {
                        ref_key: "dataTable",
                        ref: dataTable,
                        options: tableOptions,
                        data: reportData.value,
                        class: "display nowrap",
                        width: "100%"
                      }, {
                        default: withCtx(() => [..._cache[4] || (_cache[4] = [
                          createBaseVNode("thead", null, [
                            createBaseVNode("tr", null, [
                              createBaseVNode("th", null, "First Name"),
                              createBaseVNode("th", null, "Last Name"),
                              createBaseVNode("th", null, "Gender"),
                              createBaseVNode("th", null, "Number of Identifiers"),
                              createBaseVNode("th", null, "View")
                            ])
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["data"])
                    ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
                      createBaseVNode("p", _hoisted_9, toDisplayString(getSelectedIdentifierName()) + " identifier functionality will be implemented here ", 1)
                    ]))
                  ])
                ])) : createCommentVNode("", true)
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

const MultipleIdentifiers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d787431f"]]);

export { MultipleIdentifiers as default };
