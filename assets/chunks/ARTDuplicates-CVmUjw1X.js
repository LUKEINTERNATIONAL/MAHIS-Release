import { s as defineComponent, aK as useRouter, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aC as IonToolbar, aD as IonTitle, a5 as createTextVNode, D as toDisplayString, bd as IonButtons, N as IonButton, aA as IonGrid, af as IonRow, az as IonCol, bK as IonCard, bc as IonCardContent, C as createBaseVNode, z as createElementBlock, J as Fragment, R as renderList, aF as IonContent, K as modalController, f as ref, a2 as onMounted, w as watch, ba as IonCardHeader, b9 as IonCardTitle, ao as IonList, ap as IonItem, a7 as IonLabel, bN as IonSelect, bM as IonSelectOption, H as createCommentVNode, bt as IonPage } from './vendor-Wwszy5sF.js';
import { bM as resetPatientData, u as useDemographicsStore, _ as _export_sfc, Y as IdentifierService, aP as loader, aO as toastWarning, T as Toolbar, ce as toDisplayFmt } from '../index-DTh6TpA9.js';

const _hoisted_1$1 = { class: "appointments-table" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DuplicateDetailsModal",
  props: {
    patients: {},
    identifierLabel: {}
  },
  setup(__props) {
    const router = useRouter();
    function dismiss() {
      modalController.dismiss();
    }
    async function viewProfile(patient) {
      await resetPatientData();
      await useDemographicsStore().setPatientRecord(patient);
      router.replace({ path: "/patient-profile" });
      dismiss();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonContent), null, {
        default: withCtx(() => [
          createVNode(unref(IonToolbar), null, {
            default: withCtx(() => [
              createVNode(unref(IonTitle), null, {
                default: withCtx(() => [
                  createTextVNode("Duplicate Details for " + toDisplayString(__props.identifierLabel), 1)
                ]),
                _: 1
              }),
              createVNode(unref(IonButtons), { slot: "end" }, {
                default: withCtx(() => [
                  createVNode(unref(IonButton), { onClick: dismiss }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Close", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonGrid), null, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), {
                    size: "12",
                    "size-md": "10",
                    "offset-md": "1"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonCard), null, {
                        default: withCtx(() => [
                          createVNode(unref(IonCardContent), { class: "table-responsive" }, {
                            default: withCtx(() => [
                              createBaseVNode("table", _hoisted_1$1, [
                                _cache[2] || (_cache[2] = createBaseVNode("thead", null, [
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("th", null, "Given Name"),
                                    createBaseVNode("th", null, "Family Name"),
                                    createBaseVNode("th", null, "Gender"),
                                    createBaseVNode("th", null, "Birth Date"),
                                    createBaseVNode("th", null, "Action")
                                  ])
                                ], -1)),
                                createBaseVNode("tbody", null, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.patients, (patient) => {
                                    return openBlock(), createElementBlock("tr", {
                                      key: patient.person_id
                                    }, [
                                      createBaseVNode("td", null, toDisplayString(patient.given_name), 1),
                                      createBaseVNode("td", null, toDisplayString(patient.family_name), 1),
                                      createBaseVNode("td", null, toDisplayString(patient.gender), 1),
                                      createBaseVNode("td", null, toDisplayString(patient.birthdate), 1),
                                      createBaseVNode("td", null, [
                                        createVNode(unref(IonButton), {
                                          size: "small",
                                          fill: "clear",
                                          onClick: ($event) => viewProfile(patient.patient)
                                        }, {
                                          default: withCtx(() => [..._cache[1] || (_cache[1] = [
                                            createTextVNode(" View Details ", -1)
                                          ])]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ]);
                                  }), 128))
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
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const DuplicateDetailsModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-da98241f"]]);

const _hoisted_1 = {
  key: 0,
  class: "table-responsive"
};
const _hoisted_2 = { class: "appointments-table" };
const _hoisted_3 = {
  key: 1,
  class: "ion-text-center ion-padding"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ARTDuplicates",
  setup(__props) {
    const router = useRouter();
    const title = ref("Duplicate Identifiers");
    const identifierTypes = ref([]);
    const selectedIdentifierType = ref(null);
    const duplicates = ref([]);
    const hasSearched = ref(false);
    const identifierService = ref(new IdentifierService());
    onMounted(async () => {
      await loader.show();
      try {
        const types = await IdentifierService.getIdentifierTypes();
        identifierTypes.value = types.map((i) => ({
          label: i.name,
          value: i.patient_identifier_type_id
        }));
        if (identifierTypes.value.length > 0) {
          selectedIdentifierType.value = identifierTypes.value[0].value;
        }
      } catch (error) {
        console.error("Error initializing:", error);
        toastWarning("Failed to load identifier types");
      } finally {
        await loader.hide();
      }
    });
    watch(selectedIdentifierType, async (newValue) => {
      if (newValue) {
        await fetchDuplicates();
      }
    });
    async function fetchDuplicates() {
      if (!selectedIdentifierType.value) return;
      await loader.show();
      try {
        const selectedType = identifierTypes.value.find((t) => t.value === selectedIdentifierType.value);
        title.value = selectedType ? `${selectedType.label} Duplicates` : "Duplicate Identifiers";
        identifierService.value.setIdentifierType(selectedIdentifierType.value);
        const response = await identifierService.value.getDuplicateIndentifiers();
        duplicates.value = Array.isArray(response) ? response : [];
        hasSearched.value = true;
      } catch (error) {
        console.error("Error fetching duplicates:", error);
        toastWarning("Failed to fetch duplicate identifiers");
        duplicates.value = [];
      } finally {
        await loader.hide();
      }
    }
    async function viewDuplicateDetails(identifier) {
      await loader.show();
      try {
        const patients = await identifierService.value.getPatientsByIdentifier(identifier);
        const rows = patients.map((patient) => {
          try {
            return {
              person_id: patient.patient_id,
              given_name: patient.person.names[0].given_name,
              family_name: patient.person.names[0].family_name,
              gender: patient.person.gender,
              birthdate: toDisplayFmt(patient.person.birthdate),
              patient
            };
          } catch (e) {
            return {
              person_id: 0,
              given_name: "N/A",
              family_name: "N/A",
              gender: "N/A",
              birthdate: "N/A",
              patient: {}
            };
          }
        });
        const modal = await modalController.create({
          component: DuplicateDetailsModal,
          componentProps: {
            patients: rows,
            identifierLabel: identifier
          },
          cssClass: "large-modal"
        });
        await modal.present();
      } catch (error) {
        console.error("Error viewing duplicate details:", error);
        toastWarning("Failed to load patient details");
      } finally {
        await loader.hide();
      }
    }
    function resolveDuplicate(identifier) {
      router.push(`/npid/duplicates/${identifier}`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar, { title: "Duplicate Identifiers" }),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonGrid), null, {
                default: withCtx(() => [
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), {
                        size: "12",
                        "size-md": "10",
                        "size-lg": "8",
                        "offset-md": "1",
                        "offset-lg": "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCard), null, {
                            default: withCtx(() => [
                              createVNode(unref(IonCardHeader), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonCardTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(title.value), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(IonCardContent), null, {
                                default: withCtx(() => [
                                  createVNode(unref(IonList), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonItem), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(IonLabel), { position: "stacked" }, {
                                            default: withCtx(() => [..._cache[1] || (_cache[1] = [
                                              createTextVNode("Select Identifier Type", -1)
                                            ])]),
                                            _: 1
                                          }),
                                          createVNode(unref(IonSelect), {
                                            modelValue: selectedIdentifierType.value,
                                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedIdentifierType.value = $event)
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createElementBlock(Fragment, null, renderList(identifierTypes.value, (type) => {
                                                return openBlock(), createBlock(unref(IonSelectOption), {
                                                  key: type.value,
                                                  value: type.value
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(type.label), 1)
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
                                    _: 1
                                  }),
                                  duplicates.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
                                    createBaseVNode("table", _hoisted_2, [
                                      _cache[4] || (_cache[4] = createBaseVNode("thead", null, [
                                        createBaseVNode("tr", null, [
                                          createBaseVNode("th", null, "Identifier"),
                                          createBaseVNode("th", null, "Count"),
                                          createBaseVNode("th", null, "View"),
                                          createBaseVNode("th", null, "Resolve")
                                        ])
                                      ], -1)),
                                      createBaseVNode("tbody", null, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(duplicates.value, (duplicate) => {
                                          return openBlock(), createElementBlock("tr", {
                                            key: duplicate.identifier
                                          }, [
                                            createBaseVNode("td", null, toDisplayString(duplicate.identifier), 1),
                                            createBaseVNode("td", null, toDisplayString(duplicate.count), 1),
                                            createBaseVNode("td", null, [
                                              createVNode(unref(IonButton), {
                                                size: "small",
                                                fill: "outline",
                                                onClick: ($event) => viewDuplicateDetails(duplicate.identifier)
                                              }, {
                                                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                                                  createTextVNode(" View ", -1)
                                                ])]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            createBaseVNode("td", null, [
                                              createVNode(unref(IonButton), {
                                                size: "small",
                                                color: "danger",
                                                fill: "outline",
                                                onClick: ($event) => resolveDuplicate(duplicate.identifier),
                                                disabled: selectedIdentifierType.value !== 3
                                              }, {
                                                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                                  createTextVNode(" Resolve ", -1)
                                                ])]),
                                                _: 1
                                              }, 8, ["onClick", "disabled"])
                                            ])
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ])) : duplicates.value.length === 0 && hasSearched.value ? (openBlock(), createElementBlock("div", _hoisted_3, [..._cache[5] || (_cache[5] = [
                                    createBaseVNode("p", null, "No duplicate identifiers found", -1)
                                  ])])) : createCommentVNode("", true)
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
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ARTDuplicates = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f930c1ab"]]);

export { ARTDuplicates as default };
