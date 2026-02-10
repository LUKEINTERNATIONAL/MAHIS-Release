import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, f as ref, K as modalController, ct as useRoute, a2 as onMounted, z as createElementBlock, F as unref, bS as IonSearchbar, L as IonIcon, ew as qrCode, N as IonButton, bG as addOutline, a5 as createTextVNode, bO as IonChip, a7 as IonLabel, H as createCommentVNode, J as Fragment, R as renderList, D as toDisplayString, ex as cloudOfflineOutline, ey as callOutline, bX as chevronBackOutline, df as chevronForwardOutline, ax as searchOutline, cO as closeCircle, bd as IonCardContent, c as computed } from './vendor-D_Iz0VZ7.js';
import { n as icons, y as StandardValidations, z as StandardForm, F as DynamicButton, r as StandardModal, C as useExposeFromStandardForm, t as toastWarning, Q as useGlobalPropertyStore, a as useProgramStore, D as PatientSearchService, S as Service, b8 as scannedData, u as useDemographicsStore, o as createModal, _ as _export_sfc } from '../index-DR39kxWD.js';
import { R as Registration } from './Registration-BExFuKbl.js';
import { R as RegistrationService } from './useSetRegistrationValues-CVkQbm_H.js';
import { l as lodashExports } from './lodash-BoZ0e7Q1.js';

const _hoisted_1$1 = { style: { "display": "flex", "gap": "8px" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RegisterFirstLastName",
  setup(__props) {
    const { formRef } = useExposeFromStandardForm();
    const regForm = ref([]);
    regForm.value = [
      {
        componentType: "inputField",
        header: "First name",
        name: "firstname",
        icon: icons.fullName,
        validation: (value) => {
          return StandardValidations.isName(value);
        }
      },
      {
        componentType: "inputField",
        header: "Last name",
        name: "lastname",
        icon: icons.fullName,
        validation: (value) => {
          return StandardValidations.isName(value);
        }
      }
    ];
    const handleFinish = async () => {
      if (formRef.value?.validateForm() == null) {
        const formData = formRef.value?.getFormValues();
        const data = {
          personalInformation: formData
        };
        await modalController.dismiss(await new RegistrationService().saveRegistrationData(data, true));
      }
      toastWarning("Please fill all required fields correctly.");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Patient Registration",
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(DynamicButton, {
              name: "Save Patient",
              type: "submit",
              onClick: handleFinish,
              fill: "solid",
              color: "success"
            })
          ])
        ]),
        content: withCtx(() => [
          createVNode(StandardForm, {
            formData: regForm.value,
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])
        ]),
        _: 1
      });
    };
  }
});

const _hoisted_1 = { class: "patient-search-container" };
const _hoisted_2 = {
  class: "custom-card",
  style: { "border": "1px dotted #ececec", "border-radius": "8px" }
};
const _hoisted_3 = { class: "search-with-button" };
const _hoisted_4 = { class: "search-wrapper" };
const _hoisted_5 = {
  key: 0,
  class: "filter-chips"
};
const _hoisted_6 = {
  key: 1,
  class: "search-results"
};
const _hoisted_7 = {
  key: 0,
  class: "search-loading"
};
const _hoisted_8 = {
  key: 1,
  class: "results-list"
};
const _hoisted_9 = { class: "results-info" };
const _hoisted_10 = { class: "results-count" };
const _hoisted_11 = {
  key: 0,
  class: "offline-badge"
};
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "result-header" };
const _hoisted_14 = { class: "patient-name" };
const _hoisted_15 = { class: "patient-dob" };
const _hoisted_16 = { class: "patient-gender" };
const _hoisted_17 = { class: "result-details" };
const _hoisted_18 = { class: "patient-mrn" };
const _hoisted_19 = {
  key: 0,
  class: "patient-address"
};
const _hoisted_20 = {
  key: 1,
  class: "patient-phone"
};
const _hoisted_21 = {
  key: 0,
  class: "pagination"
};
const _hoisted_22 = { class: "page-info" };
const _hoisted_23 = {
  key: 2,
  class: "no-results"
};
const _hoisted_24 = {
  key: 2,
  class: "selected-patient"
};
const _hoisted_25 = { class: "selected-card" };
const _hoisted_26 = { class: "selected-card-header" };
const _hoisted_27 = { class: "selected-header-with-button" };
const _hoisted_28 = { class: "selected-card-content" };
const _hoisted_29 = { class: "selected-info" };
const _hoisted_30 = { key: 0 };
const _hoisted_31 = { key: 1 };
const itemsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FindRegisterPatient",
  props: {
    patient: {}
  },
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const searchQuery = ref("");
    const isSearching = ref(false);
    const searchResults = ref([]);
    const selectedPatient = ref(null);
    const activeFilter = ref("All");
    const currentPage = ref(1);
    const globalPropertyStore = useGlobalPropertyStore();
    const programStore = useProgramStore();
    const patientSearchService = new PatientSearchService();
    const totalResults = computed(() => searchResults.value.length);
    const totalPages = computed(() => Math.ceil(searchResults.value.length / itemsPerPage));
    const hasOfflineResults = computed(() => searchResults.value.some((p) => p.isOffline));
    const activeProgramId = computed(() => programStore?.activeProgram?.program_id);
    const paginatedResults = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return searchResults.value.slice(start, end);
    });
    const route = useRoute();
    const emit = __emit;
    const props = __props;
    const handleSearchInput = async () => {
      if (!searchQuery.value || searchQuery.value.trim().length < 2) {
        searchResults.value = [];
        return;
      }
      isSearching.value = true;
      currentPage.value = 1;
      try {
        const query = searchQuery.value.trim();
        const globalProperty = globalPropertyStore.globalPropertyStore;
        const searchOptions = {
          searchText: query,
          page: currentPage.value,
          paginationSize: 50,
          sitePrefix: await globalProperty.sitePrefix,
          ddeEnabled: globalProperty.dde_enabled,
          programId: Service.getProgramID(),
          activeFilter: activeFilter.value
        };
        const results = await patientSearchService.searchPatients(searchOptions);
        const combinedResults = [
          ...results.onlinePatients.map((p) => ({ ...p, isOffline: false })),
          ...results.offlinePatients.map((p) => ({ ...p, isOffline: true }))
        ];
        searchResults.value = combinedResults.filter((p) => {
          if (Service.getProgramID() != 38) return p;
          const birthdate = p.person?.birthdate || p.birthdate || p.personInformation?.birthdate;
          if (!birthdate) return false;
          const today = /* @__PURE__ */ new Date();
          const birth = new Date(birthdate);
          const daysDifference = Math.floor((today.getTime() - birth.getTime()) / (1e3 * 60 * 60 * 24));
          return daysDifference < 28;
        }).map((patient) => mapPatientDemographic(patient));
        if (results.shouldNavigateToRegistration && results.extractedData) {
          await goToRegistration();
        }
      } catch (error) {
        console.error("Error searching for patients:", error);
        searchResults.value = [];
      } finally {
        isSearching.value = false;
      }
    };
    const selectFilter = (filterType) => {
      activeFilter.value = filterType;
      if (searchQuery.value) {
        handleSearchInput();
      }
    };
    const scanCode = async () => {
      try {
        const dataScanned = await scannedData();
        if (dataScanned) {
          searchQuery.value = dataScanned;
          await handleSearchInput();
        }
      } catch (error) {
        console.error("Error scanning code:", error);
      }
    };
    const mapPatientDemographic = (patient) => {
      if (patient.person) {
        const person = patient.person;
        const name = person.names?.[0] || {};
        const address = person.addresses?.[0] || {};
        const phoneAttribute = person.person_attributes?.find(
          (attr) => attr.person_attribute_type?.name === "Cell Phone Number" || attr.type?.name === "Cell Phone Number"
        );
        return {
          personID: person.person_id,
          patientID: useDemographicsStore().getPatientIdentifier(patient, 3),
          firstName: name.given_name || "",
          middleName: name.middle_name || "",
          lastName: name.family_name || "",
          gender: person.gender,
          birthdate: person.birthdate,
          nationalId: patient.national_id || "",
          address,
          phone: phoneAttribute?.value || "",
          isOffline: patient.isOffline || false
        };
      } else if (patient.personInformation) {
        const info = patient.personInformation;
        return {
          patientID: patient.ID,
          firstName: info.given_name || "",
          middleName: info.middle_name || "",
          lastName: info.family_name || "",
          gender: info.gender || "",
          birthdate: info.birthdate || "",
          nationalId: patient.otherPersonInformation?.nationalID || "",
          address: {
            city_village: info.home_village || info.current_village || "",
            township_division: info.home_traditional_authority || info.current_traditional_authority || "",
            state_province: info.home_district || info.current_district || ""
          },
          phone: info.cell_phone_number || "",
          isOffline: patient.isOffline || false
        };
      }
      return patient;
    };
    const selectPatient = async (patientData) => {
      const patient = await useDemographicsStore().getPatientData(patientData.personID || patientData.patientID);
      selectedPatient.value = patientData;
      searchQuery.value = "";
      emitPatientRecord(patient);
    };
    const clearSelection = () => {
      selectedPatient.value = null;
    };
    const goToRegistration = async () => {
      let patientData = "";
      if (Service.getProgramID() == 38) {
        patientData = await createModal(_sfc_main$1, { class: "mediumModal" }, false, { neonatalRegistration: true });
      } else {
        patientData = await createModal(Registration, { class: "fullScreenModal" }, false, { relativeRegistration: true });
      }
      if (patientData.ID) {
        selectedPatient.value = mapPatientDemographic(patientData);
        emitPatientRecord(patientData);
      }
    };
    const emitPatientRecord = async (patientData) => {
      if (route.name == "neonatalTriage") {
        await useDemographicsStore().setRecord(patientData);
      } else {
        emit("value-changed", "findRegisterPatient", patientData);
      }
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
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    const formatAddress = (address) => {
      if (!address) return "";
      if (typeof address === "string") return address;
      const parts = [];
      if (address.city_village) parts.push(address.city_village);
      if (address.township_division) parts.push(address.township_division);
      if (address.state_province) parts.push(address.state_province);
      return parts.join(", ");
    };
    onMounted(() => {
      console.log("🚀 ~ props.patient:", lodashExports.isEmpty(props.patient));
      if (!lodashExports.isEmpty(props.patient)) {
        const patientData = mapPatientDemographic(props.patient);
        if (lodashExports.isEmpty(patientData)) return;
        selectedPatient.value = patientData;
        emitPatientRecord(props.patient);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(unref(IonSearchbar), {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    placeholder: "Search by Name, MRN, Gender, or scan MRN",
                    onIonInput: handleSearchInput,
                    debounce: 300,
                    "show-clear-button": "focus",
                    class: "search-input"
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", {
                    class: "barcode-btn",
                    "aria-label": "Scan MRN",
                    onClick: scanCode
                  }, [
                    createVNode(unref(IonIcon), {
                      color: "primary",
                      size: "small",
                      icon: unref(qrCode),
                      slot: "icon-only"
                    }, null, 8, ["icon"])
                  ])
                ]),
                createVNode(unref(IonButton), {
                  color: "success",
                  onClick: goToRegistration,
                  class: "new-registration-btn"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(addOutline),
                      slot: "icon-only"
                    }, null, 8, ["icon"]),
                    _cache[7] || (_cache[7] = createTextVNode("New Registration ", -1))
                  ]),
                  _: 1
                })
              ]),
              searchQuery.value && searchQuery.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "All",
                  color: activeFilter.value === "All" ? "primary" : "medium",
                  onClick: _cache[1] || (_cache[1] = ($event) => selectFilter("All"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[8] || (_cache[8] = [
                        createTextVNode("All", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "Names",
                  color: activeFilter.value === "Names" ? "primary" : "medium",
                  onClick: _cache[2] || (_cache[2] = ($event) => selectFilter("Names"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[9] || (_cache[9] = [
                        createTextVNode("Names", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "MRN",
                  color: activeFilter.value === "MRN" ? "primary" : "medium",
                  onClick: _cache[3] || (_cache[3] = ($event) => selectFilter("MRN"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[10] || (_cache[10] = [
                        createTextVNode("MRN", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                createVNode(unref(IonChip), {
                  outline: activeFilter.value !== "Malawi National ID",
                  color: activeFilter.value === "Malawi National ID" ? "primary" : "medium",
                  onClick: _cache[4] || (_cache[4] = ($event) => selectFilter("Malawi National ID"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[11] || (_cache[11] = [
                        createTextVNode("National ID", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"]),
                activeProgramId.value == 1 ? (openBlock(), createBlock(unref(IonChip), {
                  key: 0,
                  outline: activeFilter.value !== "ARV Number",
                  color: activeFilter.value === "ARV Number" ? "primary" : "medium",
                  onClick: _cache[5] || (_cache[5] = ($event) => selectFilter("ARV Number"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[12] || (_cache[12] = [
                        createTextVNode("ARV Number", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"])) : createCommentVNode("", true),
                activeProgramId.value == 32 ? (openBlock(), createBlock(unref(IonChip), {
                  key: 1,
                  outline: activeFilter.value !== "NCD Number",
                  color: activeFilter.value === "NCD Number" ? "primary" : "medium",
                  onClick: _cache[6] || (_cache[6] = ($event) => selectFilter("NCD Number"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[13] || (_cache[13] = [
                        createTextVNode("NCD Number", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["outline", "color"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              searchQuery.value && searchQuery.value.length > 0 && !selectedPatient.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(3, (n) => {
                    return createBaseVNode("div", {
                      key: `skeleton-${n}`,
                      class: "result-item-skeleton"
                    }, [..._cache[14] || (_cache[14] = [
                      createBaseVNode("div", { class: "skeleton-header" }, [
                        createBaseVNode("div", { class: "skeleton-name" }),
                        createBaseVNode("div", { class: "skeleton-dob" }),
                        createBaseVNode("div", { class: "skeleton-gender" })
                      ], -1),
                      createBaseVNode("div", { class: "skeleton-details" }, [
                        createBaseVNode("div", { class: "skeleton-address" }),
                        createBaseVNode("div", { class: "skeleton-phone" })
                      ], -1)
                    ])]);
                  }), 64))
                ])) : searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("span", _hoisted_10, "Found " + toDisplayString(totalResults.value) + " patient(s)", 1),
                    hasOfflineResults.value ? (openBlock(), createElementBlock("span", _hoisted_11, [
                      createVNode(unref(IonIcon), { icon: unref(cloudOfflineOutline) }, null, 8, ["icon"]),
                      _cache[15] || (_cache[15] = createTextVNode(" Includes offline results ", -1))
                    ])) : createCommentVNode("", true)
                  ]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedResults.value, (patient, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: patient.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectPatient(patient)
                    }, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("span", _hoisted_14, toDisplayString(patient.firstName) + " " + toDisplayString(patient.middleName ? patient.middleName + " " : "") + toDisplayString(patient.lastName), 1),
                        createBaseVNode("span", _hoisted_15, "DOB: " + toDisplayString(formatDate(patient.birthdate)), 1),
                        createBaseVNode("span", _hoisted_16, toDisplayString(patient.gender === "F" ? "Female" : patient.gender === "M" ? "Male" : patient.gender), 1)
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("p", _hoisted_18, [
                          _cache[16] || (_cache[16] = createBaseVNode("strong", null, "MRN:", -1)),
                          createTextVNode(" " + toDisplayString(patient.patientID), 1)
                        ]),
                        patient.address ? (openBlock(), createElementBlock("p", _hoisted_19, [
                          _cache[17] || (_cache[17] = createBaseVNode("strong", null, "Current Address:", -1)),
                          createTextVNode(" " + toDisplayString(formatAddress(patient.address)), 1)
                        ])) : createCommentVNode("", true),
                        patient.phone ? (openBlock(), createElementBlock("p", _hoisted_20, [
                          createVNode(unref(IonIcon), { icon: unref(callOutline) }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(patient.phone), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_12);
                  }), 128)),
                  totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_21, [
                    createVNode(unref(IonButton), {
                      fill: "outline",
                      size: "small",
                      onClick: previousPage,
                      disabled: currentPage.value === 1
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), { icon: unref(chevronBackOutline) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createBaseVNode("span", _hoisted_22, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
                    createVNode(unref(IonButton), {
                      fill: "outline",
                      size: "small",
                      onClick: nextPage,
                      disabled: currentPage.value === totalPages.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), { icon: unref(chevronForwardOutline) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_23, [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "no-results-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("p", null, 'No patient found matching "' + toDisplayString(searchQuery.value) + '"', 1),
                  createVNode(unref(IonButton), {
                    expand: "block",
                    onClick: goToRegistration
                  }, {
                    default: withCtx(() => [..._cache[18] || (_cache[18] = [
                      createTextVNode("Register new patient", -1)
                    ])]),
                    _: 1
                  })
                ]))
              ])) : createCommentVNode("", true),
              selectedPatient.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      _cache[19] || (_cache[19] = createBaseVNode("span", { class: "selected-subtitle" }, "Selected Patient", -1)),
                      createVNode(unref(IonButton), {
                        fill: "clear",
                        size: "small",
                        color: "danger",
                        onClick: clearSelection,
                        class: "clear-selection-btn"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(closeCircle),
                            slot: "icon-only"
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_28, [
                    createBaseVNode("div", _hoisted_29, [
                      createBaseVNode("h3", null, toDisplayString(selectedPatient.value.firstName) + " " + toDisplayString(selectedPatient.value.middleName ? selectedPatient.value.middleName + " " : "") + toDisplayString(selectedPatient.value.lastName), 1),
                      createBaseVNode("p", null, [
                        _cache[20] || (_cache[20] = createBaseVNode("strong", null, "MRN:", -1)),
                        createTextVNode(" " + toDisplayString(selectedPatient.value.patientID), 1)
                      ]),
                      selectedPatient.value.birthdate ? (openBlock(), createElementBlock("p", _hoisted_30, [
                        _cache[21] || (_cache[21] = createBaseVNode("strong", null, "DOB:", -1)),
                        createTextVNode(" " + toDisplayString(formatDate(selectedPatient.value.birthdate)), 1)
                      ])) : createCommentVNode("", true),
                      selectedPatient.value.address ? (openBlock(), createElementBlock("p", _hoisted_31, [
                        _cache[22] || (_cache[22] = createBaseVNode("strong", null, "Address:", -1)),
                        createTextVNode(" " + toDisplayString(formatAddress(selectedPatient.value.address)), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});

const FindRegisterPatient = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-951c7554"]]);

export { FindRegisterPatient as F };
