import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode, f as ref, K as modalController, ct as useRoute, z as createElementBlock, F as unref, bS as IonSearchbar, L as IonIcon, eW as qrCode, N as IonButton, bG as addOutline, a5 as createTextVNode, J as Fragment, R as renderList, D as toDisplayString, H as createCommentVNode, eX as callOutline, bX as chevronBackOutline, df as chevronForwardOutline, ax as searchOutline, cO as closeCircle, bd as IonCardContent, c as computed } from './vendor-CCA5uLDN.js';
import { n as icons, y as StandardValidations, z as StandardForm, F as DynamicButton, r as StandardModal, C as useExposeFromStandardForm, t as toastWarning, P as PatientService, S as Service, u as useDemographicsStore, o as createModal, _ as _export_sfc } from '../index-CSKZEueZ.js';
import { R as Registration } from './Registration-DJcFZOjN.js';
import { R as RegistrationService } from './useSetRegistrationValues-CIvWV3eM.js';

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

const _hoisted_1 = { class: "mother-search-container" };
const _hoisted_2 = {
  class: "custom-card",
  style: { "border": "1px dotted #ececec", "border-radius": "8px" }
};
const _hoisted_3 = { class: "search-with-button" };
const _hoisted_4 = { class: "search-wrapper" };
const _hoisted_5 = {
  class: "barcode-btn",
  "aria-label": "Scan MRN"
};
const _hoisted_6 = {
  key: 0,
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
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "result-header" };
const _hoisted_11 = { class: "mother-name" };
const _hoisted_12 = { class: "mother-dob" };
const _hoisted_13 = { class: "mother-gender" };
const _hoisted_14 = { class: "result-details" };
const _hoisted_15 = {
  key: 0,
  class: "mother-address"
};
const _hoisted_16 = {
  key: 1,
  class: "mother-phone"
};
const _hoisted_17 = {
  key: 0,
  class: "pagination"
};
const _hoisted_18 = { class: "page-info" };
const _hoisted_19 = {
  key: 2,
  class: "no-results"
};
const _hoisted_20 = {
  key: 1,
  class: "selected-mother"
};
const _hoisted_21 = { class: "selected-card" };
const _hoisted_22 = { class: "selected-card-header" };
const _hoisted_23 = { class: "selected-header-with-button" };
const _hoisted_24 = { class: "selected-card-content" };
const _hoisted_25 = { class: "selected-info" };
const _hoisted_26 = { key: 0 };
const _hoisted_27 = { key: 1 };
const itemsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FindRegisterPatient",
  emits: ["value-changed"],
  setup(__props, { emit: __emit }) {
    const searchQuery = ref("");
    const isSearching = ref(false);
    const searchResults = ref([]);
    const selectedPatient = ref(null);
    const currentPage = ref(1);
    const totalPages = computed(() => Math.ceil(searchResults.value.length / itemsPerPage));
    const paginatedResults = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return searchResults.value.slice(start, end);
    });
    const route = useRoute();
    const emit = __emit;
    const handleSearchInput = async () => {
      if (!searchQuery.value || searchQuery.value.trim().length < 2) {
        searchResults.value = [];
        return;
      }
      isSearching.value = true;
      currentPage.value = 1;
      try {
        const query = searchQuery.value.trim();
        const searchTerms = query.split(" ");
        const searchPayload = {
          given_name: searchTerms[0],
          family_name: searchTerms[1] || "",
          page: "1",
          per_page: "50"
        };
        const response = await PatientService.search(searchPayload);
        searchResults.value = Array.isArray(response) ? response.filter((p) => {
          if (Service.getProgramID() != 38) return p;
          const birthdate = p.person?.birthdate || p.birthdate;
          if (!birthdate) return false;
          const today = /* @__PURE__ */ new Date();
          const birth = new Date(birthdate);
          const daysDifference = Math.floor((today.getTime() - birth.getTime()) / (1e3 * 60 * 60 * 24));
          return daysDifference < 28;
        }).map((patient) => {
          const person = patient.person;
          const name = person.names?.[0] || {};
          const address = person.addresses?.[0] || {};
          const phoneAttribute = person.person_attributes?.find((attr) => attr.person_attribute_type?.name === "Cell Phone Number");
          return {
            patientID: person.person_id,
            firstName: name.given_name || "",
            middleName: name.middle_name || "",
            lastName: name.family_name || "",
            gender: person.gender,
            birthdate: person.birthdate,
            nationalId: patient.national_id || "",
            address,
            phone: phoneAttribute?.value || ""
          };
        }) : [];
      } catch (error) {
        console.error("Error searching for mothers:", error);
        searchResults.value = [];
      } finally {
        isSearching.value = false;
      }
    };
    const selectPatient = async (patientData) => {
      const patient = await useDemographicsStore().getPatientData(patientData.patientID);
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
      } else patientData = await createModal(Registration, { class: "fullScreenModal" }, false, { relativeRegistration: true });
      if (patientData.ID) {
        selectedPatient.value = {
          patientID: patientData.ID,
          firstName: patientData.personInformation.given_name || "",
          middleName: patientData.personInformation.middle_name || "",
          lastName: patientData.personInformation.family_name || "",
          gender: patientData.personInformation.gender || "",
          birthdate: patientData.personInformation.birthdate || "",
          nationalId: patientData.otherPersonInformation?.nationalID || "",
          address: {
            city_village: patientData.personInformation.home_village || "",
            township_division: patientData.personInformation.home_traditional_authority || "",
            state_province: patientData.personInformation.home_district || ""
          },
          phone: patientData.personInformation.cell_phone_number || ""
        };
        emitPatientRecord(patientData);
      }
    };
    const emitPatientRecord = async (patientData) => {
      if (route.name == "neonatalTriage") {
        console.log("🚀 ~ emitPatientRecord ~ patientData:", patientData);
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
                    placeholder: "Search for Name or scan MRN",
                    onIonInput: handleSearchInput,
                    debounce: 300,
                    "show-clear-button": "focus",
                    class: "search-input"
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", _hoisted_5, [
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
                    _cache[1] || (_cache[1] = createTextVNode("New Registration ", -1))
                  ]),
                  _: 1
                })
              ]),
              searchQuery.value && searchQuery.value.length > 0 && !selectedPatient.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(3, (n) => {
                    return createBaseVNode("div", {
                      key: `skeleton-${n}`,
                      class: "result-item-skeleton"
                    }, [..._cache[2] || (_cache[2] = [
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
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedResults.value, (mother, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: mother.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectPatient(mother)
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("span", _hoisted_11, toDisplayString(mother.firstName) + " " + toDisplayString(mother.middleName ? mother.middleName + " " : "") + toDisplayString(mother.lastName), 1),
                        createBaseVNode("span", _hoisted_12, "DOB: " + toDisplayString(formatDate(mother.birthdate)), 1),
                        createBaseVNode("span", _hoisted_13, toDisplayString(mother.gender === "F" ? "Female" : mother.gender), 1)
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        mother.address ? (openBlock(), createElementBlock("p", _hoisted_15, [
                          _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Current Address:", -1)),
                          createTextVNode(" " + toDisplayString(formatAddress(mother.address)), 1)
                        ])) : createCommentVNode("", true),
                        mother.phone ? (openBlock(), createElementBlock("p", _hoisted_16, [
                          createVNode(unref(IonIcon), { icon: unref(callOutline) }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(mother.phone), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_9);
                  }), 128)),
                  totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_17, [
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
                    createBaseVNode("span", _hoisted_18, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
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
                ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "no-results-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("p", null, 'No patient found matching "' + toDisplayString(searchQuery.value) + '"', 1),
                  createVNode(unref(IonButton), {
                    expand: "block",
                    onClick: goToRegistration
                  }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createTextVNode("Register new mother", -1)
                    ])]),
                    _: 1
                  })
                ]))
              ])) : createCommentVNode("", true),
              selectedPatient.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  createBaseVNode("div", _hoisted_22, [
                    createBaseVNode("div", _hoisted_23, [
                      _cache[5] || (_cache[5] = createBaseVNode("span", { class: "selected-subtitle" }, "Selected Patient", -1)),
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
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("h3", null, toDisplayString(selectedPatient.value.firstName) + " " + toDisplayString(selectedPatient.value.middleName ? selectedPatient.value.middleName + " " : "") + toDisplayString(selectedPatient.value.lastName), 1),
                      createBaseVNode("p", null, [
                        _cache[6] || (_cache[6] = createBaseVNode("strong", null, "MRN:", -1)),
                        createTextVNode(" " + toDisplayString(selectedPatient.value.patientID), 1)
                      ]),
                      selectedPatient.value.birthdate ? (openBlock(), createElementBlock("p", _hoisted_26, [
                        _cache[7] || (_cache[7] = createBaseVNode("strong", null, "DOB:", -1)),
                        createTextVNode(" " + toDisplayString(formatDate(selectedPatient.value.birthdate)), 1)
                      ])) : createCommentVNode("", true),
                      selectedPatient.value.address ? (openBlock(), createElementBlock("p", _hoisted_27, [
                        _cache[8] || (_cache[8] = createBaseVNode("strong", null, "Address:", -1)),
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

const FindRegisterPatient = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd511133"]]);

export { FindRegisterPatient as F };
