import { s as defineComponent, w as watch, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aF as IonContent, aA as IonGrid, af as IonRow, az as IonCol, C as createBaseVNode, bK as IonCard, ba as IonCardHeader, b9 as IonCardTitle, a5 as createTextVNode, D as toDisplayString, cE as IonCardSubtitle, H as createCommentVNode, bc as IonCardContent, S as withDirectives, ay as vModelText, N as IonButton, z as createElementBlock, J as Fragment, R as renderList, bF as IonModal, I as IonHeader, aC as IonToolbar, aD as IonTitle, bd as IonButtons, bt as IonPage, f as ref, c as computed } from './vendor-Wwszy5sF.js';
import { T as Toolbar, aO as toastWarning, aP as loader, U as UserService, H as HisDate, _ as _export_sfc } from '../index-DTh6TpA9.js';

const _hoisted_1 = { class: "card-wrapper" };
const _hoisted_2 = { class: "date-controls" };
const _hoisted_3 = { class: "date-inputs" };
const _hoisted_4 = { class: "date-input-group" };
const _hoisted_5 = ["max"];
const _hoisted_6 = { class: "date-input-group" };
const _hoisted_7 = ["min", "max"];
const _hoisted_8 = {
  key: 0,
  class: "table-responsive"
};
const _hoisted_9 = { class: "audits-table" };
const _hoisted_10 = {
  key: 0,
  class: "pagination-container"
};
const _hoisted_11 = { class: "page-info" };
const _hoisted_12 = {
  key: 1,
  class: "ion-text-center ion-padding"
};
const _hoisted_13 = {
  key: 2,
  class: "ion-text-center ion-padding"
};
const _hoisted_14 = { class: "table-responsive" };
const _hoisted_15 = { class: "changes-table" };
const rowsPerPage = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SystemAudits",
  setup(__props) {
    const title = ref("System Audits");
    const reportData = ref([]);
    const period = ref("");
    const startDateInput = ref("");
    const endDateInput = ref("");
    const hasGenerated = ref(false);
    const currentPage = ref(1);
    const isModalOpen = ref(false);
    const modalTitle = ref("");
    const modalData = ref([]);
    const totalPages = computed(() => Math.ceil(reportData.value.length / rowsPerPage));
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return reportData.value.slice(start, end);
    });
    watch([startDateInput, endDateInput], ([newStart, newEnd]) => {
      if (newStart && newEnd) {
        period.value = `${formatDateForDisplay(newStart)} - ${formatDateForDisplay(newEnd)}`;
      }
    });
    onMounted(() => {
      const today = /* @__PURE__ */ new Date();
      endDateInput.value = today.toISOString().split("T")[0];
      startDateInput.value = today.toISOString().split("T")[0];
    });
    const getCurrentDateInput = () => {
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    };
    const formatDateForDisplay = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    };
    const generate = async () => {
      if (!startDateInput.value || !endDateInput.value) {
        toastWarning("Please select both start and end dates");
        return;
      }
      await loader.show();
      try {
        reportData.value = await UserService.getAuditReports(startDateInput.value, endDateInput.value);
        hasGenerated.value = true;
        currentPage.value = 1;
      } catch (error) {
        console.error("Error generating audit report:", error);
        toastWarning("Failed to generate audit report");
        reportData.value = [];
      } finally {
        await loader.hide();
      }
    };
    const formatUser = (user) => {
      return user ? `${user.username} (${user.name})` : "";
    };
    const formatTimestamp = (timestamp) => {
      return HisDate.toStandardHisDisplayFormat(timestamp);
    };
    const viewChanges = async (audit) => {
      if (!audit.changes || audit.changes.length === 0) return;
      const drillData = audit.changes.map((change) => {
        const [attribute, value] = Object.entries(change)[0] || [];
        if (!attribute) return null;
        return /password/i.test(attribute) ? { attribute, previous: "*******", current: "*******" } : { attribute, ...value };
      }).filter((entry) => entry !== null);
      modalTitle.value = `Changes made by ${audit.user.name} on ${audit.auditable_type}`;
      modalData.value = drillData;
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
      modalTitle.value = "";
      modalData.value = [];
    };
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };
    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar, { title: "System Audits" }),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonGrid), null, {
                default: withCtx(() => [
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), {
                        size: "12",
                        "size-md": "12",
                        "size-lg": "12"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_1, [
                            createVNode(unref(IonCard), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonCardHeader), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonCardTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(title.value), 1)
                                      ]),
                                      _: 1
                                    }),
                                    period.value ? (openBlock(), createBlock(unref(IonCardSubtitle), { key: 0 }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(period.value), 1)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(IonCardContent), null, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_2, [
                                      createBaseVNode("div", _hoisted_3, [
                                        createBaseVNode("div", _hoisted_4, [
                                          _cache[2] || (_cache[2] = createBaseVNode("label", null, "Start Date:", -1)),
                                          withDirectives(createBaseVNode("input", {
                                            type: "date",
                                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDateInput.value = $event),
                                            max: endDateInput.value || getCurrentDateInput(),
                                            class: "date-input"
                                          }, null, 8, _hoisted_5), [
                                            [vModelText, startDateInput.value]
                                          ])
                                        ]),
                                        createBaseVNode("div", _hoisted_6, [
                                          _cache[3] || (_cache[3] = createBaseVNode("label", null, "End Date:", -1)),
                                          withDirectives(createBaseVNode("input", {
                                            type: "date",
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDateInput.value = $event),
                                            min: startDateInput.value,
                                            max: getCurrentDateInput(),
                                            class: "date-input"
                                          }, null, 8, _hoisted_7), [
                                            [vModelText, endDateInput.value]
                                          ])
                                        ]),
                                        createVNode(unref(IonButton), {
                                          fill: "solid",
                                          onClick: generate,
                                          disabled: !startDateInput.value || !endDateInput.value
                                        }, {
                                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                                            createTextVNode(" Generate Report ", -1)
                                          ])]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ])
                                    ]),
                                    reportData.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                      createBaseVNode("table", _hoisted_9, [
                                        _cache[5] || (_cache[5] = createBaseVNode("thead", null, [
                                          createBaseVNode("tr", null, [
                                            createBaseVNode("th", null, "Encounter"),
                                            createBaseVNode("th", null, "Action Type"),
                                            createBaseVNode("th", null, "User"),
                                            createBaseVNode("th", null, "Timestamp"),
                                            createBaseVNode("th", null, "Changes")
                                          ])
                                        ], -1)),
                                        createBaseVNode("tbody", null, [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedData.value, (audit) => {
                                            return openBlock(), createElementBlock("tr", {
                                              key: audit.id
                                            }, [
                                              createBaseVNode("td", null, toDisplayString(audit.auditable_type), 1),
                                              createBaseVNode("td", null, toDisplayString(audit.action), 1),
                                              createBaseVNode("td", null, toDisplayString(formatUser(audit.user)), 1),
                                              createBaseVNode("td", null, toDisplayString(formatTimestamp(audit.created_at)), 1),
                                              createBaseVNode("td", null, [
                                                createVNode(unref(IonButton), {
                                                  size: "small",
                                                  fill: "outline",
                                                  onClick: ($event) => viewChanges(audit),
                                                  disabled: !audit.changes || audit.changes.length === 0
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(audit.changes?.length ?? 0) + " Changes ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick", "disabled"])
                                              ])
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                        createVNode(unref(IonButton), {
                                          fill: "clear",
                                          onClick: previousPage,
                                          disabled: currentPage.value === 1
                                        }, {
                                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                                            createTextVNode(" Previous ", -1)
                                          ])]),
                                          _: 1
                                        }, 8, ["disabled"]),
                                        createBaseVNode("span", _hoisted_11, " Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
                                        createVNode(unref(IonButton), {
                                          fill: "clear",
                                          onClick: nextPage,
                                          disabled: currentPage.value === totalPages.value
                                        }, {
                                          default: withCtx(() => [..._cache[7] || (_cache[7] = [
                                            createTextVNode(" Next ", -1)
                                          ])]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ])) : createCommentVNode("", true)
                                    ])) : reportData.value.length === 0 && hasGenerated.value ? (openBlock(), createElementBlock("div", _hoisted_12, [..._cache[8] || (_cache[8] = [
                                      createBaseVNode("p", null, "No audit records found for the selected period", -1)
                                    ])])) : (openBlock(), createElementBlock("div", _hoisted_13, [..._cache[9] || (_cache[9] = [
                                      createBaseVNode("p", null, "Select date range and generate report to view audit data", -1)
                                    ])]))
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
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonModal), {
            "is-open": isModalOpen.value,
            onDidDismiss: closeModal
          }, {
            default: withCtx(() => [
              createVNode(unref(IonHeader), null, {
                default: withCtx(() => [
                  createVNode(unref(IonToolbar), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonTitle), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(modalTitle.value), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(IonButtons), { slot: "end" }, {
                        default: withCtx(() => [
                          createVNode(unref(IonButton), { onClick: closeModal }, {
                            default: withCtx(() => [..._cache[10] || (_cache[10] = [
                              createTextVNode("Close", -1)
                            ])]),
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
              createVNode(unref(IonContent), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCard), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardContent), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_14, [
                            createBaseVNode("table", _hoisted_15, [
                              _cache[11] || (_cache[11] = createBaseVNode("thead", null, [
                                createBaseVNode("tr", null, [
                                  createBaseVNode("th", null, "Attribute"),
                                  createBaseVNode("th", null, "Previous Value"),
                                  createBaseVNode("th", null, "Current Value")
                                ])
                              ], -1)),
                              createBaseVNode("tbody", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(modalData.value, (change, index) => {
                                  return openBlock(), createElementBlock("tr", { key: index }, [
                                    createBaseVNode("td", null, toDisplayString(change.attribute), 1),
                                    createBaseVNode("td", null, toDisplayString(change.previous || "N/A"), 1),
                                    createBaseVNode("td", null, toDisplayString(change.current || "N/A"), 1)
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
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
          }, 8, ["is-open"])
        ]),
        _: 1
      });
    };
  }
});

const SystemAudits = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bde1132c"]]);

export { SystemAudits as default };
