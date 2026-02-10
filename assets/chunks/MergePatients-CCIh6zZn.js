import { s as defineComponent, ct as useRoute, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, C as createBaseVNode, L as IonIcon, e1 as swapHorizontalOutline, af as IonRow, aA as IonCol, a$ as personOutline, ac as IonNote, a5 as createTextVNode, a6 as IonInput, bQ as withKeys, N as IonButton, M as IonSpinner, ax as searchOutline, bK as IonCard, bd as IonCardContent, z as createElementBlock, ah as IonRadioGroup, ap as IonList, J as Fragment, R as renderList, aq as IonItem, a4 as normalizeClass, e2 as IonAvatar, D as toDisplayString, a7 as IonLabel, bI as IonBadge, ai as IonRadio, c3 as checkmarkCircleOutline, H as createCommentVNode, ae as IonCheckbox, bu as IonPage, f as ref, c as computed } from './vendor-DrpjccQs.js';
import { T as Toolbar, k as alertConfirmation, P as PatientService, as as printNpidLbl, x as toastDanger, u as useDemographicsStore, _ as _export_sfc } from '../index-UzX4smS4.js';
import { _ as _sfc_main$1 } from './ActionButtons.vue_vue_type_script_setup_true_lang-B1EFVIZA.js';

const _imports_0 = ""+new URL('../merge-patient-search-placeholder.grGtXK01.png', import.meta.url).href+"";

const _hoisted_1 = { class: "full-height-container" };
const _hoisted_2 = { class: "centered-content" };
const _hoisted_3 = { class: "header-section" };
const _hoisted_4 = { class: "title-container" };
const _hoisted_5 = {
  class: "search-card",
  mode: "ios"
};
const _hoisted_6 = { class: "search-content" };
const _hoisted_7 = { class: "patient-section primary-section" };
const _hoisted_8 = { class: "section-header" };
const _hoisted_9 = { class: "input-group" };
const _hoisted_10 = { class: "patient-section secondary-section" };
const _hoisted_11 = { class: "section-header" };
const _hoisted_12 = { class: "input-group" };
const _hoisted_13 = { class: "preview-header" };
const _hoisted_14 = {
  key: 0,
  class: "results-container"
};
const _hoisted_15 = { class: "results-section primary-results" };
const _hoisted_16 = { class: "results-title" };
const _hoisted_17 = { class: "avatar-placeholder" };
const _hoisted_18 = { class: "patient-name" };
const _hoisted_19 = { class: "patient-details" };
const _hoisted_20 = { class: "patient-ids" };
const _hoisted_21 = { class: "patient-location" };
const _hoisted_22 = { class: "results-section secondary-results" };
const _hoisted_23 = { class: "results-title" };
const _hoisted_24 = { class: "avatar-placeholder" };
const _hoisted_25 = { class: "patient-name" };
const _hoisted_26 = { class: "patient-details" };
const _hoisted_27 = { class: "patient-ids" };
const _hoisted_28 = { class: "patient-location" };
const _hoisted_29 = {
  key: 1,
  class: "preview-placeholder"
};
const _hoisted_30 = { class: "action-section" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MergePatients",
  setup(__props) {
    const route = useRoute();
    const primaryInputRef = ref();
    const primarySearchText = ref("");
    const primaryLoading = ref(false);
    const secondaryLoading = ref(false);
    const secondarySearchText = ref("");
    const primaryPatients = ref([]);
    const secondaryPatients = ref([]);
    const selectedSecondaryPatients = ref([]);
    const selectedPrimaryPatient = ref(null);
    const canMerge = computed(() => {
      return selectedPrimaryPatient.value && selectedSecondaryPatients.value.length > 0;
    });
    const hasSearchResults = computed(() => {
      return primaryPatients.value.length > 0 || secondaryPatients.value.length > 0;
    });
    const searchPatients = async (searchText, isPrimary = true) => {
      if (!searchText.trim()) return;
      const loading = isPrimary ? primaryLoading : secondaryLoading;
      const patientsRef = isPrimary ? primaryPatients : secondaryPatients;
      loading.value = true;
      patientsRef.value = [];
      try {
        const [givenName, familyName] = searchText.trim().split(" ");
        const searchParams = {
          ...givenName && { given_name: givenName },
          ...familyName && { family_name: familyName }
        };
        const patients = await PatientService.search(searchParams);
        patientsRef.value = await Promise.all(
          patients.map(async (patient, index) => {
            const patientData = useDemographicsStore();
            await patientData.setPatientRecord(patient);
            const patientService = new PatientService();
            return {
              index,
              id: patientService.getID(),
              name: patientService.getFullName() || "Unknown",
              docID: patientService.getDocID() || "NA",
              birthdate: patientService.getBirthdate(),
              arvNum: patientService.getArvNumber(),
              npid: patientService.getNationalID(),
              gender: patientService.getGender(),
              homeDistrict: patientService.getHomeDistrict(),
              homeVillage: patientService.getHomeVillage(),
              currentDistrict: patientService.getCurrentDistrict(),
              currentVillage: patientService.getCurrentVillage(),
              isChecked: false
            };
          })
        );
      } catch (error) {
        console.error("Patient search failed:", error);
        patientsRef.value = [];
      } finally {
        loading.value = false;
      }
    };
    const searchPrimary = () => {
      searchPatients(primarySearchText.value, true);
    };
    const searchSecondary = () => {
      selectedSecondaryPatients.value = [];
      searchPatients(secondarySearchText.value, false);
    };
    const selectPrimaryPatient = (patient) => {
      selectedPrimaryPatient.value = patient;
    };
    const toggleSecondaryPatient = (patient, isChecked) => {
      if (isChecked) {
        if (!selectedSecondaryPatients.value.find((p) => p.id === patient.id)) {
          selectedSecondaryPatients.value.push(patient);
        }
      } else {
        selectedSecondaryPatients.value = selectedSecondaryPatients.value.filter((p) => p.id !== patient.id);
      }
    };
    const isSecondaryPatientSelected = (patientId) => {
      return selectedSecondaryPatients.value.some((p) => p.id === patientId);
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleDateString();
    };
    const getGenderBadgeColor = (gender) => {
      return gender.toLowerCase() === "m" ? "primary" : "secondary";
    };
    const mergePatients = async () => {
      if (!canMerge.value) return;
      if (!await alertConfirmation(
        `Are you sure you want to merge selected ${selectedSecondaryPatients.value.length} secondary patient(s) to merge with primary patient.`
      )) {
        return;
      }
      try {
        const patient = await PatientService.mergePatients({
          primary: {
            patient_id: selectedPrimaryPatient.value.id,
            doc_id: selectedPrimaryPatient.value.docID
          },
          secondary: selectedSecondaryPatients.value.map((s) => ({
            patient_id: s.id,
            doc_id: s.docID
          }))
        });
        await printNpidLbl(patient["patient_id"]);
        primaryPatients.value = [];
        secondaryPatients.value = [];
        selectedPrimaryPatient.value = [];
        selectedSecondaryPatients.value = [];
        primarySearchText.value = "";
        secondarySearchText.value = "";
      } catch (e) {
        toastDanger(`${e}`);
      }
    };
    const handleUrlQuery = () => {
      const queryParam = route.query.q;
      if (queryParam && queryParam.trim()) {
        primarySearchText.value = queryParam.trim();
        secondarySearchText.value = queryParam.trim();
        searchPatients(queryParam.trim(), true);
        searchPatients(queryParam.trim(), false);
      }
    };
    onMounted(() => {
      handleUrlQuery();
      if (!route.query.q && primaryInputRef.value) {
        setTimeout(() => {
          primaryInputRef.value.$el.setFocus();
        }, 200);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(_sfc_main$1),
          createVNode(unref(IonContent), {
            fullscreen: true,
            class: "main-content"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(unref(IonIcon), {
                        icon: unref(swapHorizontalOutline),
                        class: "title-icon"
                      }, null, 8, ["icon"]),
                      _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title" }, "Merge Clients", -1))
                    ]),
                    _cache[4] || (_cache[4] = createBaseVNode("p", { class: "page-subtitle" }, "Select primary and secondary patients to merge their records", -1))
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(unref(IonRow), { class: "search-row" }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCol), { class: "search-col" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_7, [
                                createBaseVNode("div", _hoisted_8, [
                                  createVNode(unref(IonIcon), {
                                    icon: unref(personOutline),
                                    class: "section-icon primary-icon"
                                  }, null, 8, ["icon"]),
                                  _cache[6] || (_cache[6] = createBaseVNode("span", { class: "section-title" }, "Primary Patient", -1)),
                                  createVNode(unref(IonNote), { class: "section-note" }, {
                                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                                      createTextVNode("Main record", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                createBaseVNode("div", _hoisted_9, [
                                  createVNode(unref(IonInput), {
                                    ref_key: "primaryInputRef",
                                    ref: primaryInputRef,
                                    modelValue: primarySearchText.value,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => primarySearchText.value = $event),
                                    label: "Search primary patient",
                                    "label-placement": "floating",
                                    fill: "outline",
                                    placeholder: "Enter patient name or ID",
                                    class: "patient-input",
                                    onKeyup: withKeys(searchPrimary, ["enter"])
                                  }, null, 8, ["modelValue"]),
                                  createVNode(unref(IonButton), {
                                    fill: "solid",
                                    color: "primary",
                                    class: "search-button",
                                    disabled: primaryLoading.value || !primarySearchText.value.trim(),
                                    onClick: searchPrimary
                                  }, {
                                    default: withCtx(() => [
                                      primaryLoading.value ? (openBlock(), createBlock(unref(IonSpinner), {
                                        key: 0,
                                        name: "crescent"
                                      })) : (openBlock(), createBlock(unref(IonIcon), {
                                        key: 1,
                                        icon: unref(searchOutline)
                                      }, null, 8, ["icon"]))
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(IonCol), { class: "search-col" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_10, [
                                createBaseVNode("div", _hoisted_11, [
                                  createVNode(unref(IonIcon), {
                                    icon: unref(personOutline),
                                    class: "section-icon secondary-icon"
                                  }, null, 8, ["icon"]),
                                  _cache[8] || (_cache[8] = createBaseVNode("span", { class: "section-title" }, "Secondary Patient", -1)),
                                  createVNode(unref(IonNote), { class: "section-note" }, {
                                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                                      createTextVNode("Will be merged into primary", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                createBaseVNode("div", _hoisted_12, [
                                  createVNode(unref(IonInput), {
                                    modelValue: secondarySearchText.value,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => secondarySearchText.value = $event),
                                    label: "Search secondary patient",
                                    "label-placement": "floating",
                                    fill: "outline",
                                    placeholder: "Enter patient name or ID",
                                    class: "patient-input",
                                    onKeyup: withKeys(searchSecondary, ["enter"])
                                  }, null, 8, ["modelValue"]),
                                  createVNode(unref(IonButton), {
                                    fill: "solid",
                                    color: "secondary",
                                    class: "search-button",
                                    disabled: secondaryLoading.value || !secondarySearchText.value.trim(),
                                    onClick: searchSecondary
                                  }, {
                                    default: withCtx(() => [
                                      secondaryLoading.value ? (openBlock(), createBlock(unref(IonSpinner), {
                                        key: 0,
                                        name: "crescent"
                                      })) : (openBlock(), createBlock(unref(IonIcon), {
                                        key: 1,
                                        icon: unref(searchOutline)
                                      }, null, 8, ["icon"]))
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(unref(IonCard), {
                    class: "preview-card",
                    mode: "ios"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardContent), { class: "preview-content" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_13, [
                            _cache[10] || (_cache[10] = createBaseVNode("h2", { class: "preview-title" }, "Patient Search Results", -1)),
                            createVNode(unref(IonNote), { class: "preview-note" }, {
                              default: withCtx(() => [..._cache[9] || (_cache[9] = [
                                createTextVNode("Select patients from search results to preview merge", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          hasSearchResults.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
                            createVNode(unref(IonRow), null, {
                              default: withCtx(() => [
                                primaryPatients.value.length > 0 ? (openBlock(), createBlock(unref(IonCol), { key: 0 }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_15, [
                                      createBaseVNode("h3", _hoisted_16, [
                                        createVNode(unref(IonIcon), {
                                          icon: unref(personOutline),
                                          class: "results-icon primary-icon"
                                        }, null, 8, ["icon"]),
                                        _cache[11] || (_cache[11] = createTextVNode(" Primary Patient Options ", -1))
                                      ]),
                                      createVNode(unref(IonRadioGroup), {
                                        value: selectedPrimaryPatient.value?.id,
                                        onIonChange: _cache[2] || (_cache[2] = ($event) => selectPrimaryPatient(primaryPatients.value.find((p) => p.id === $event.detail.value)))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(IonList), { class: "patient-list scrollable-list ion-padding" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createElementBlock(Fragment, null, renderList(primaryPatients.value, (patient) => {
                                                return openBlock(), createBlock(unref(IonItem), {
                                                  key: patient.id,
                                                  class: normalizeClass(["patient-item", { selected: selectedPrimaryPatient.value?.id === patient.id }]),
                                                  lines: "none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(IonAvatar), { class: "patient-avatar" }, {
                                                      default: withCtx(() => [
                                                        createBaseVNode("div", _hoisted_17, toDisplayString(patient.name.charAt(0)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(unref(IonLabel), null, {
                                                      default: withCtx(() => [
                                                        createBaseVNode("h3", _hoisted_18, toDisplayString(patient.name), 1),
                                                        createBaseVNode("p", _hoisted_19, [
                                                          createVNode(unref(IonBadge), {
                                                            color: getGenderBadgeColor(patient.gender),
                                                            class: "gender-badge"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(patient.gender), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"]),
                                                          createTextVNode(" DOB: " + toDisplayString(formatDate(patient.birthdate)), 1)
                                                        ]),
                                                        createBaseVNode("p", _hoisted_20, "ID: " + toDisplayString(patient.id) + " | ARV: " + toDisplayString(patient.arvNum || "N/A"), 1),
                                                        createBaseVNode("p", _hoisted_21, toDisplayString(patient.currentDistrict) + ", " + toDisplayString(patient.currentVillage), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(unref(IonRadio), {
                                                      value: patient.id,
                                                      color: "primary"
                                                    }, {
                                                      default: withCtx(() => [
                                                        selectedPrimaryPatient.value?.id === patient.id ? (openBlock(), createBlock(unref(IonIcon), {
                                                          key: 0,
                                                          icon: unref(checkmarkCircleOutline),
                                                          color: "primary",
                                                          class: "selected-icon"
                                                        }, null, 8, ["icon"])) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["value"])
                                    ])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                secondaryPatients.value.length > 0 ? (openBlock(), createBlock(unref(IonCol), { key: 1 }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_22, [
                                      createBaseVNode("h3", _hoisted_23, [
                                        createVNode(unref(IonIcon), {
                                          icon: unref(personOutline),
                                          class: "results-icon secondary-icon"
                                        }, null, 8, ["icon"]),
                                        _cache[12] || (_cache[12] = createTextVNode(" Secondary Patient Options ", -1)),
                                        selectedSecondaryPatients.value.length > 0 ? (openBlock(), createBlock(unref(IonBadge), {
                                          key: 0,
                                          color: "secondary",
                                          class: "selection-count"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedSecondaryPatients.value.length) + " selected ", 1)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      createVNode(unref(IonList), { class: "patient-list scrollable-list ion-padding" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(secondaryPatients.value, (patient) => {
                                            return openBlock(), createBlock(unref(IonItem), {
                                              key: patient.id,
                                              class: normalizeClass(["patient-item", { selected: isSecondaryPatientSelected(patient.id) }]),
                                              lines: "none"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(IonAvatar), { class: "patient-avatar" }, {
                                                  default: withCtx(() => [
                                                    createBaseVNode("div", _hoisted_24, toDisplayString(patient.name.charAt(0)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(IonLabel), null, {
                                                  default: withCtx(() => [
                                                    createBaseVNode("h3", _hoisted_25, toDisplayString(patient.name), 1),
                                                    createBaseVNode("p", _hoisted_26, [
                                                      createVNode(unref(IonBadge), {
                                                        color: getGenderBadgeColor(patient.gender),
                                                        class: "gender-badge"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(patient.gender), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"]),
                                                      createTextVNode(" DOB: " + toDisplayString(formatDate(patient.birthdate)), 1)
                                                    ]),
                                                    createBaseVNode("p", _hoisted_27, "ID: " + toDisplayString(patient.id) + " | ARV: " + toDisplayString(patient.arvNum || "N/A"), 1),
                                                    createBaseVNode("p", _hoisted_28, toDisplayString(patient.currentDistrict) + ", " + toDisplayString(patient.currentVillage), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(IonCheckbox), {
                                                  checked: isSecondaryPatientSelected(patient.id),
                                                  color: "secondary",
                                                  onIonChange: ($event) => toggleSecondaryPatient(patient, $event.detail.checked)
                                                }, null, 8, ["checked", "onIonChange"])
                                              ]),
                                              _: 2
                                            }, 1032, ["class"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createElementBlock("div", _hoisted_29, [..._cache[13] || (_cache[13] = [
                            createBaseVNode("img", {
                              src: _imports_0,
                              alt: "Patient search placeholder",
                              class: "placeholder-image"
                            }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(unref(IonButton), {
                      expand: "block",
                      size: "large",
                      color: "success",
                      class: "merge-button",
                      disabled: !canMerge.value,
                      onClick: mergePatients
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), { icon: unref(swapHorizontalOutline) }, null, 8, ["icon"]),
                        _cache[14] || (_cache[14] = createTextVNode(" Merge Selected Patients ", -1)),
                        selectedSecondaryPatients.value.length > 1 ? (openBlock(), createBlock(unref(IonBadge), {
                          key: 0,
                          color: "light",
                          class: "merge-count"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 1 → " + toDisplayString(selectedSecondaryPatients.value.length), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(unref(IonNote), { class: "action-note" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(canMerge.value ? `Ready to merge ${selectedSecondaryPatients.value.length} secondary patient(s) into primary patient` : "Select one primary patient and at least one secondary patient to enable merge"), 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
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

const MergePatients = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7b1aff6"]]);

export { MergePatients as default };
