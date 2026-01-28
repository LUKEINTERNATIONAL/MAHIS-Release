import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, ba as IonCardHeader, B as withCtx, L as IonIcon, aw as searchOutline, cE as IonCardSubtitle, a5 as createTextVNode, b9 as IonCardTitle, bc as IonCardContent, ac as IonNote, bS as IonSearchbar, N as IonButton, bl as chevronForward, J as Fragment, R as renderList, D as toDisplayString, H as createCommentVNode, cP as closeCircle, f as ref, c as computed, a2 as onMounted, O as createBlock, aK as useRouter, cu as useRoute, ff as qrCode, bG as addOutline, fg as callOutline, bX as chevronBackOutline, dg as chevronForwardOutline, aF as IonContent, bt as IonPage, eU as provide, x as resolveComponent } from './vendor-BIA1Qh8a.js';
import { s as storeToRefs } from './pinia-BgytB2RM.js';
import { u as useDemographicsStore, P as PatientService, _ as _export_sfc, V as LocationService, z as StandardForm, T as Toolbar, t as toastWarning, a7 as RelationsService, H as HisDate, b as EncounterTypeId, S as Service, ch as saveEncounterData, ap as SetProgramService, G as toastSuccess, x as toastDanger } from '../index-CcMPhFiC.js';
import { N as NeonatalService } from './neonatal_service-BRJCTwTK.js';
import { D as DemographicBar } from './DemographicBar-BTBwDYHJ.js';
import { c as neonatalEnrollmentSections, N as NeonatalStepper } from './NeonatalStepper-BiCNRqrH.js';
import { n as neonatalEnrollmentFormKey, u as useNeonatalEnrollmentStore } from './useNeonatalEnrollmentStore-BTXzMZ4h.js';
import { I as IMAGES } from './images-BcA1g8St.js';

const _hoisted_1$2 = {
  key: 0,
  class: "twin-search-container"
};
const _hoisted_2$1 = { style: { "border": "1px dotted #ececec", "border-radius": "8px" } };
const _hoisted_3$1 = { class: "header-with-icon" };
const _hoisted_4$1 = { class: "icon-wrapper" };
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = { class: "search-with-button" };
const _hoisted_7$1 = { class: "search-wrapper" };
const _hoisted_8$1 = {
  key: 0,
  class: "search-results"
};
const _hoisted_9$1 = {
  key: 0,
  class: "search-loading"
};
const _hoisted_10$1 = {
  key: 1,
  class: "results-list"
};
const _hoisted_11$1 = ["onClick"];
const _hoisted_12$1 = { class: "result-header" };
const _hoisted_13$1 = { class: "twin-name" };
const _hoisted_14$1 = { class: "twin-mrn" };
const _hoisted_15$1 = { class: "twin-dob" };
const _hoisted_16$1 = { class: "result-details" };
const _hoisted_17$1 = {
  key: 0,
  class: "twin-gender"
};
const _hoisted_18$1 = {
  key: 2,
  class: "no-results"
};
const _hoisted_19$1 = {
  key: 1,
  class: "selected-twin"
};
const _hoisted_20$1 = { class: "selected-card" };
const _hoisted_21$1 = { class: "selected-card-header" };
const _hoisted_22$1 = { class: "header-content" };
const _hoisted_23$1 = { class: "selected-icon-wrapper" };
const _hoisted_24$1 = ["src"];
const _hoisted_25$1 = { class: "selected-card-content" };
const _hoisted_26$1 = { class: "patient-info-grid" };
const _hoisted_27$1 = { class: "info-row" };
const _hoisted_28$1 = { class: "info-value" };
const _hoisted_29$1 = { class: "info-row" };
const _hoisted_30$1 = { class: "info-value" };
const _hoisted_31 = {
  key: 0,
  class: "info-row"
};
const _hoisted_32 = { class: "info-value" };
const _hoisted_33 = {
  key: 1,
  class: "info-row"
};
const _hoisted_34 = { class: "info-value" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TwinSearch",
  setup(__props, { expose: __expose }) {
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const demographicsStore = useDemographicsStore();
    const searchQuery = ref("");
    const isSearching = ref(false);
    const searchResults = ref([]);
    const selectedTwin = ref(null);
    const twinSearchSkipped = ref(false);
    const showTwinSearch = computed(() => {
      return enrollmentForm?.hasTwin === "Yes";
    });
    const handleSearchInput = async () => {
      if (!searchQuery.value || searchQuery.value.trim().length < 2) {
        searchResults.value = [];
        return;
      }
      isSearching.value = true;
      try {
        const query = searchQuery.value.trim();
        if (/^\d+$/.test(query)) {
          try {
            const patientData = await demographicsStore.getPatientData(Number(query));
            if (patientData && patientData.personInformation) {
              const person = patientData.personInformation;
              searchResults.value = [
                {
                  patientID: person.person_id,
                  firstName: person.given_name || "",
                  middleName: person.middle_name || "",
                  lastName: person.family_name || "",
                  gender: person.gender,
                  birthdate: person.birthdate
                }
              ];
            } else {
              searchResults.value = [];
            }
          } catch (error) {
            console.error("Error searching by MRN:", error);
            searchResults.value = [];
          }
        } else {
          const searchTerms = query.split(" ");
          const searchPayload = {
            given_name: searchTerms[0],
            family_name: searchTerms[1] || "",
            page: "1",
            per_page: "20"
          };
          const response = await PatientService.search(searchPayload);
          searchResults.value = Array.isArray(response) ? response.filter((p) => {
            const person = p.person;
            if (!person.birthdate) return false;
            const birthDate = new Date(person.birthdate);
            const daysDiff = Math.floor((Date.now() - birthDate.getTime()) / (1e3 * 60 * 60 * 24));
            return daysDiff <= 7;
          }).map((patient) => {
            const person = patient.person;
            const name = person.names?.[0] || {};
            return {
              patientID: person.person_id,
              firstName: name.given_name || "",
              middleName: name.middle_name || "",
              lastName: name.family_name || "",
              gender: person.gender,
              birthdate: person.birthdate
            };
          }) : [];
        }
      } catch (error) {
        console.error("Error searching for twin:", error);
        searchResults.value = [];
      } finally {
        isSearching.value = false;
      }
    };
    const selectTwin = (twin) => {
      selectedTwin.value = twin;
      searchQuery.value = "";
      twinSearchSkipped.value = false;
      if (enrollmentForm) {
        enrollmentForm.twinPatientId = twin.patientID;
        enrollmentForm.twinName = `${twin.firstName} ${twin.middleName || ""} ${twin.lastName}`.trim();
      }
    };
    const clearSelection = () => {
      selectedTwin.value = null;
      twinSearchSkipped.value = false;
      if (enrollmentForm) {
        enrollmentForm.twinPatientId = void 0;
        enrollmentForm.twinName = void 0;
      }
    };
    const skipTwinSearch = () => {
      twinSearchSkipped.value = true;
      selectedTwin.value = null;
      searchQuery.value = "";
      if (enrollmentForm) {
        enrollmentForm.twinPatientId = void 0;
        enrollmentForm.twinName = void 0;
      }
    };
    watch(
      () => enrollmentForm?.hasTwin,
      (newValue) => {
        if (newValue !== "Yes") {
          clearSelection();
          twinSearchSkipped.value = false;
        }
      }
    );
    const formatPatientName = (patient) => {
      return `${patient.firstName} ${patient.middleName || ""} ${patient.lastName}`.trim();
    };
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    __expose({
      validateForm: () => {
        if (enrollmentForm?.hasTwin === "Yes" && !selectedTwin.value && !twinSearchSkipped.value) {
          return {
            twinSelection: "Select the twin record or tap Skip if the twin is not yet registered"
          };
        }
        return null;
      },
      getFormValues: () => {
        if (!selectedTwin.value) return {};
        return {
          twinPatientId: selectedTwin.value.patientID,
          twinName: formatPatientName(selectedTwin.value)
        };
      }
    });
    return (_ctx, _cache) => {
      return showTwinSearch.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("img", {
                    src: unref(IMAGES).icons.twins,
                    alt: "Twin",
                    class: "header-icon"
                  }, null, 8, _hoisted_5$1),
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "search-badge-icon"
                  }, null, 8, ["icon"])
                ]),
                createBaseVNode("div", null, [
                  createVNode(unref(IonCardSubtitle), null, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("Twin Information", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(IonCardTitle), null, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode("Search for twin sibling", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonNote), { class: "info-note" }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode(" This baby has a twin. Please search for the twin's record or register if not found. ", -1)
                ])]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_6$1, [
                createBaseVNode("div", _hoisted_7$1, [
                  createVNode(unref(IonSearchbar), {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    placeholder: "Search for twin's MRN or scan barcode",
                    onIonInput: handleSearchInput,
                    debounce: 300,
                    "show-clear-button": "focus",
                    class: "search-input"
                  }, null, 8, ["modelValue"])
                ]),
                createVNode(unref(IonButton), {
                  color: "primary",
                  onClick: skipTwinSearch,
                  class: "skip-btn"
                }, {
                  default: withCtx(() => [
                    _cache[4] || (_cache[4] = createTextVNode(" Skip ", -1)),
                    createVNode(unref(IonIcon), {
                      size: "small",
                      icon: unref(chevronForward),
                      slot: "end"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              searchQuery.value && searchQuery.value.length > 0 && !selectedTwin.value ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(3, (n) => {
                    return createBaseVNode("div", {
                      key: `skeleton-${n}`,
                      class: "result-item-skeleton"
                    }, [..._cache[5] || (_cache[5] = [
                      createBaseVNode("div", { class: "skeleton-header" }, [
                        createBaseVNode("div", { class: "skeleton-name" }),
                        createBaseVNode("div", { class: "skeleton-dob" })
                      ], -1)
                    ])]);
                  }), 64))
                ])) : searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, (patient, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: patient.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectTwin(patient)
                    }, [
                      createBaseVNode("div", _hoisted_12$1, [
                        createBaseVNode("span", _hoisted_13$1, toDisplayString(formatPatientName(patient)), 1),
                        createBaseVNode("span", _hoisted_14$1, "MRN: " + toDisplayString(patient.patientID), 1),
                        createBaseVNode("span", _hoisted_15$1, "DOB: " + toDisplayString(formatDate(patient.birthdate)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_16$1, [
                        patient.gender ? (openBlock(), createElementBlock("p", _hoisted_17$1, [
                          _cache[6] || (_cache[6] = createBaseVNode("strong", null, "Gender:", -1)),
                          createTextVNode(" " + toDisplayString(patient.gender), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_11$1);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_18$1, [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "no-results-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("p", null, 'No patients found matching "' + toDisplayString(searchQuery.value) + '"', 1),
                  _cache[7] || (_cache[7] = createBaseVNode("p", { class: "info-text" }, "The twin may not be registered yet. You can skip this step and register the twin later.", -1))
                ]))
              ])) : createCommentVNode("", true),
              selectedTwin.value ? (openBlock(), createElementBlock("div", _hoisted_19$1, [
                createBaseVNode("div", _hoisted_20$1, [
                  createBaseVNode("div", _hoisted_21$1, [
                    createBaseVNode("div", _hoisted_22$1, [
                      createBaseVNode("div", _hoisted_23$1, [
                        createBaseVNode("img", {
                          src: unref(IMAGES).icons.twins,
                          alt: "Twin",
                          class: "selected-header-icon"
                        }, null, 8, _hoisted_24$1)
                      ]),
                      _cache[8] || (_cache[8] = createBaseVNode("div", { class: "header-separator" }, null, -1)),
                      _cache[9] || (_cache[9] = createBaseVNode("span", { class: "selected-subtitle" }, "Twin Selected", -1))
                    ]),
                    createVNode(unref(IonButton), {
                      fill: "clear",
                      size: "small",
                      onClick: clearSelection,
                      class: "clear-selection-btn"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), { icon: unref(closeCircle) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_25$1, [
                    createBaseVNode("div", _hoisted_26$1, [
                      createBaseVNode("div", _hoisted_27$1, [
                        _cache[10] || (_cache[10] = createBaseVNode("span", { class: "info-label" }, "Full Name", -1)),
                        createBaseVNode("span", _hoisted_28$1, toDisplayString(formatPatientName(selectedTwin.value)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_29$1, [
                        _cache[11] || (_cache[11] = createBaseVNode("span", { class: "info-label" }, "MRN", -1)),
                        createBaseVNode("span", _hoisted_30$1, toDisplayString(selectedTwin.value.patientID), 1)
                      ]),
                      selectedTwin.value.birthdate ? (openBlock(), createElementBlock("div", _hoisted_31, [
                        _cache[12] || (_cache[12] = createBaseVNode("span", { class: "info-label" }, "Date of Birth", -1)),
                        createBaseVNode("span", _hoisted_32, toDisplayString(formatDate(selectedTwin.value.birthdate)), 1)
                      ])) : createCommentVNode("", true),
                      selectedTwin.value.gender ? (openBlock(), createElementBlock("div", _hoisted_33, [
                        _cache[13] || (_cache[13] = createBaseVNode("span", { class: "info-label" }, "Gender", -1)),
                        createBaseVNode("span", _hoisted_34, toDisplayString(selectedTwin.value.gender), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ])) : createCommentVNode("", true);
    };
  }
});

const TwinSearch = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ed5f0376"]]);

const extractOptionValue = (selection) => {
  if (selection === null || selection === void 0 || selection === "") return void 0;
  if (typeof selection === "string" || typeof selection === "number") {
    return selection.toString();
  }
  if (typeof selection === "object") {
    const candidate = selection.label ?? selection.value ?? selection.name ?? selection.title;
    if (candidate !== void 0 && candidate !== null && candidate !== "") {
      return candidate.toString();
    }
  }
  return void 0;
};
const extractMultiSelectValues = (selection) => {
  if (!selection) return [];
  if (Array.isArray(selection)) {
    return selection.map((item) => extractOptionValue(item)).filter((value) => !!value);
  }
  const singleValue = extractOptionValue(selection);
  return singleValue ? [singleValue] : [];
};
const normalizeTextValue = (value) => {
  if (value === null || value === void 0) return "";
  return value.toString();
};

const _hoisted_1$1 = { class: "birth-details-wrapper" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BirthDetails",
  setup(__props, { expose: __expose }) {
    const twinQuestionFormRef = ref(null);
    const formRef = ref(null);
    const twinSearchRef = ref(null);
    const birthDetailsFormData = neonatalEnrollmentSections[0].formData;
    const twinQuestionFormData = birthDetailsFormData.slice(0, 1);
    const formData = birthDetailsFormData.slice(1);
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const facilities = ref([]);
    onMounted(async () => {
      try {
        const allFacilities = await LocationService.getAllFacilities();
        if (Array.isArray(allFacilities)) {
          facilities.value = allFacilities;
        } else if (allFacilities?.facilities && Array.isArray(allFacilities.facilities)) {
          facilities.value = allFacilities.facilities;
        } else if (allFacilities?.records && Array.isArray(allFacilities.records)) {
          facilities.value = allFacilities.records;
        } else {
          facilities.value = [];
        }
      } catch (error) {
        console.error("Error loading facilities:", error);
        facilities.value = [];
      }
    });
    const enrichedFormData = computed(() => {
      return formData.map((field) => {
        if (field.name === "birthFacility") {
          return {
            ...field,
            options: facilities.value.map((facility) => {
              const name = facility.name || facility.facility_name || "Unknown";
              return {
                name,
                label: name,
                value: facility.id || facility.facility_id || name,
                code: facility.code || facility.facility_code,
                district: facility.district || facility.district_name
              };
            })
          };
        }
        return field;
      });
    });
    const syncTwinQuestionValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.hasTwin = values.hasTwin || "";
    };
    const syncFormValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.placeOfBirth = extractOptionValue(values.placeOfBirth) || "";
      enrollmentForm.nameOfBirthFacility = extractOptionValue(values.birthFacility) || "";
      enrollmentForm.typeOfBirth = extractOptionValue(values.typeOfBirth) || "";
      enrollmentForm.birthWeight = normalizeTextValue(values.birthWeight || "");
      enrollmentForm.timeOfBirth = normalizeTextValue(values.birthTime || "");
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    watch(
      () => twinQuestionFormRef.value?.formValues,
      (values) => {
        if (values) {
          syncTwinQuestionValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => twinQuestionFormRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncTwinQuestionValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      getTwinQuestionFormRef: () => twinQuestionFormRef.value,
      validateForm: () => {
        const twinQuestionErrors = twinQuestionFormRef.value?.validateForm?.() || null;
        const formErrors = formRef.value?.validateForm?.() || null;
        const twinErrors = twinSearchRef.value?.validateForm?.() || null;
        const errors = [twinQuestionErrors, formErrors, twinErrors].filter(Boolean);
        if (!errors.length) return null;
        return errors.reduce((acc, current) => ({ ...acc, ...current }), {});
      },
      getFormValues: () => {
        const twinQuestionValues = twinQuestionFormRef.value?.getFormValues?.() || {};
        const formValues = formRef.value?.getFormValues?.() || {};
        const twinValues = twinSearchRef.value?.getFormValues?.() || {};
        return { ...twinQuestionValues, ...formValues, ...twinValues };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(StandardForm, {
          formData: unref(twinQuestionFormData),
          ref_key: "twinQuestionFormRef",
          ref: twinQuestionFormRef,
          class: "twin-question-form"
        }, null, 8, ["formData"]),
        createVNode(TwinSearch, {
          ref_key: "twinSearchRef",
          ref: twinSearchRef
        }, null, 512),
        createVNode(StandardForm, {
          formData: enrichedFormData.value,
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const BirthDetails = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9a714757"]]);

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ReferralInformation",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[1].formData;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const facilities = ref([]);
    onMounted(async () => {
      try {
        const allFacilities = await LocationService.getAllFacilities();
        if (Array.isArray(allFacilities)) {
          facilities.value = allFacilities;
        } else if (allFacilities?.facilities && Array.isArray(allFacilities.facilities)) {
          facilities.value = allFacilities.facilities;
        } else if (allFacilities?.records && Array.isArray(allFacilities.records)) {
          facilities.value = allFacilities.records;
        } else {
          facilities.value = [];
        }
      } catch (error) {
        console.error("Error loading facilities:", error);
        facilities.value = [];
      }
    });
    const enrichedFormData = computed(() => {
      return formData.map((field) => {
        if (field.name === "referringFacilityName") {
          return {
            ...field,
            options: facilities.value.map((facility) => {
              const name = facility.name || facility.facility_name || "Unknown";
              return {
                name,
                label: name,
                value: facility.id || facility.facility_id || name,
                code: facility.code || facility.facility_code,
                district: facility.district || facility.district_name
              };
            })
          };
        }
        return field;
      });
    });
    const syncFormValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.referredFromOtherFacility = values.referredFromAnotherFacility || "";
      enrollmentForm.referredFrom = extractOptionValue(values.referredFrom) || "";
      const facilityValue = values.referringFacilityName;
      enrollmentForm.referringFacilityName = facilityValue?.name || normalizeTextValue(facilityValue || "");
      enrollmentForm.modeOfTransport = extractOptionValue(values.modeOfTransport) || "";
      enrollmentForm.admittedFrom = extractOptionValue(values.admittedFrom) || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: enrichedFormData.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BirthAssessment",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[2].formData;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const syncFormValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.criedAfterBirth = values.criedAfterBirth || "";
      enrollmentForm.apgarScoreAt1 = extractOptionValue(values.apgar1) || "";
      enrollmentForm.apgarScoreAt5 = extractOptionValue(values.apgar5) || "";
      enrollmentForm.apgarScoreAt10 = extractOptionValue(values.apgar10) || "";
      enrollmentForm.resuscitationMethods = extractMultiSelectValues(values.resuscitationMethods);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(formData),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1 = { class: "mother-search-container" };
const _hoisted_2 = { style: { "border": "1px dotted #ececec", "border-radius": "8px" } };
const _hoisted_3 = { class: "header-with-icon" };
const _hoisted_4 = { class: "icon-wrapper" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "search-with-button" };
const _hoisted_7 = { class: "search-wrapper" };
const _hoisted_8 = {
  class: "barcode-btn",
  "aria-label": "Scan MRN"
};
const _hoisted_9 = {
  key: 0,
  class: "search-results"
};
const _hoisted_10 = {
  key: 0,
  class: "search-loading"
};
const _hoisted_11 = {
  key: 1,
  class: "results-list"
};
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "result-header" };
const _hoisted_14 = { class: "mother-name" };
const _hoisted_15 = { class: "mother-dob" };
const _hoisted_16 = { class: "mother-gender" };
const _hoisted_17 = { class: "result-details" };
const _hoisted_18 = {
  key: 0,
  class: "mother-address"
};
const _hoisted_19 = {
  key: 1,
  class: "mother-phone"
};
const _hoisted_20 = {
  key: 0,
  class: "pagination"
};
const _hoisted_21 = { class: "page-info" };
const _hoisted_22 = {
  key: 2,
  class: "no-results"
};
const _hoisted_23 = {
  key: 1,
  class: "selected-mother"
};
const _hoisted_24 = { class: "selected-card" };
const _hoisted_25 = { class: "selected-card-header" };
const _hoisted_26 = { class: "selected-header-with-button" };
const _hoisted_27 = { class: "selected-card-content" };
const _hoisted_28 = { class: "selected-info" };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const itemsPerPage = 10;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MotherSearch",
  setup(__props, { expose: __expose }) {
    const router = useRouter();
    const route = useRoute();
    const formData = inject(neonatalEnrollmentFormKey);
    const enrollmentStore = useNeonatalEnrollmentStore();
    const searchQuery = ref("");
    const isSearching = ref(false);
    const searchResults = ref([]);
    const selectedMother = ref(null);
    const currentPage = ref(1);
    const checkAndAutoSelectMother = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      const motherData = enrollmentStore.motherData;
      if (motherData && motherData.patientID) {
        selectedMother.value = motherData;
        await new Promise((resolve) => setTimeout(resolve, 100));
        enrollmentStore.clearEnrollmentContext();
      }
    };
    onMounted(async () => {
      await checkAndAutoSelectMother();
    });
    watch(() => route.query.motherAdded, async (newMotherAdded) => {
      if (newMotherAdded) {
        await checkAndAutoSelectMother();
      }
    });
    watch(selectedMother, (newMother) => {
      if (newMother && formData) {
        formData.motherPatientId = newMother.patientID;
        formData.motherName = `${newMother.firstName} ${newMother.middleName || ""} ${newMother.lastName}`.trim();
        formData.motherNationalId = newMother.nationalId || "";
      }
    });
    const totalPages = computed(() => Math.ceil(searchResults.value.length / itemsPerPage));
    const paginatedResults = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return searchResults.value.slice(start, end);
    });
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
          const gender = p.person?.gender || p.gender;
          return gender === "F" || gender === "Female";
        }).map((patient) => {
          const person = patient.person;
          const name = person.names?.[0] || {};
          const address = person.addresses?.[0] || {};
          const phoneAttribute = person.person_attributes?.find(
            (attr) => attr.person_attribute_type?.name === "Cell Phone Number"
          );
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
    const selectMother = (mother) => {
      selectedMother.value = mother;
      searchQuery.value = "";
      if (formData) {
        formData.motherPatientId = mother.patientID;
        formData.motherName = `${mother.firstName} ${mother.middleName || ""} ${mother.lastName}`.trim();
        formData.motherNationalId = mother.nationalId || "";
      }
    };
    const clearSelection = () => {
      selectedMother.value = null;
      if (formData) {
        formData.motherPatientId = void 0;
        formData.motherName = void 0;
        formData.motherNationalId = void 0;
      }
    };
    const goToRegistration = () => {
      const neonate = inject("patient");
      if (neonate && neonate.value?.patientID) {
        enrollmentStore.setMotherCreationContext(neonate.value.patientID, 4);
      }
      router.push({
        path: "/registration/manual",
        query: {
          returnTo: "/neonatal/enrollment",
          context: "neonatal-mother"
        }
      });
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
    const getFormRef = () => {
      return {
        validate: () => {
          return selectedMother.value !== null;
        },
        getFormData: () => {
          return {
            motherPatientId: selectedMother.value?.patientID,
            motherName: selectedMother.value ? `${selectedMother.value.firstName} ${selectedMother.value.middleName || ""} ${selectedMother.value.lastName}`.trim() : void 0,
            motherNationalId: selectedMother.value?.nationalId
          };
        }
      };
    };
    __expose({
      getFormRef,
      validateForm: () => {
        if (!selectedMother.value) {
          return { motherSelection: "Please select a mother or register a new one" };
        }
        return null;
      },
      getFormValues: () => {
        if (!selectedMother.value) return {};
        return {
          motherPatientId: selectedMother.value.patientID,
          motherName: `${selectedMother.value.firstName} ${selectedMother.value.middleName || ""} ${selectedMother.value.lastName}`.trim(),
          motherNationalId: selectedMother.value.nationalId
        };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("img", {
                    src: unref(IMAGES).icons.care,
                    alt: "Care",
                    class: "header-icon"
                  }, null, 8, _hoisted_5),
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "search-badge-icon"
                  }, null, 8, ["icon"])
                ]),
                createBaseVNode("div", null, [
                  createVNode(unref(IonCardSubtitle), null, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("Search for Mother", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(IonCardTitle), null, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode("Find mother's existing record", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonNote), { class: "info-note" }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode(" We now need to link this neonate's record to it's mother, please search and find the mother or register if mother not found. ", -1)
                ])]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(unref(IonSearchbar), {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    placeholder: "Search for mother's Name or scan MRN",
                    onIonInput: handleSearchInput,
                    debounce: 300,
                    "show-clear-button": "focus",
                    class: "search-input"
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", _hoisted_8, [
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
                    _cache[4] || (_cache[4] = createTextVNode("New Registration ", -1))
                  ]),
                  _: 1
                })
              ]),
              searchQuery.value && searchQuery.value.length > 0 && !selectedMother.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(3, (n) => {
                    return createBaseVNode("div", {
                      key: `skeleton-${n}`,
                      class: "result-item-skeleton"
                    }, [..._cache[5] || (_cache[5] = [
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
                ])) : searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedResults.value, (mother, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: mother.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectMother(mother)
                    }, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("span", _hoisted_14, toDisplayString(mother.firstName) + " " + toDisplayString(mother.middleName ? mother.middleName + " " : "") + toDisplayString(mother.lastName), 1),
                        createBaseVNode("span", _hoisted_15, "DOB " + toDisplayString(formatDate(mother.birthdate)), 1),
                        createBaseVNode("span", _hoisted_16, toDisplayString(mother.gender === "F" ? "Female" : mother.gender), 1)
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        mother.address ? (openBlock(), createElementBlock("p", _hoisted_18, [
                          _cache[6] || (_cache[6] = createBaseVNode("strong", null, "Current Address:", -1)),
                          createTextVNode(" " + toDisplayString(formatAddress(mother.address)), 1)
                        ])) : createCommentVNode("", true),
                        mother.phone ? (openBlock(), createElementBlock("p", _hoisted_19, [
                          createVNode(unref(IonIcon), { icon: unref(callOutline) }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(mother.phone), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_12);
                  }), 128)),
                  totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_20, [
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
                    createBaseVNode("span", _hoisted_21, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
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
                ])) : (openBlock(), createElementBlock("div", _hoisted_22, [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "no-results-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("p", null, 'No mothers found matching "' + toDisplayString(searchQuery.value) + '"', 1),
                  createVNode(unref(IonButton), {
                    expand: "block",
                    onClick: goToRegistration
                  }, {
                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                      createTextVNode("Register new mother", -1)
                    ])]),
                    _: 1
                  })
                ]))
              ])) : createCommentVNode("", true),
              selectedMother.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("div", _hoisted_26, [
                      _cache[8] || (_cache[8] = createBaseVNode("span", { class: "selected-subtitle" }, "Selected Mother", -1)),
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
                  createBaseVNode("div", _hoisted_27, [
                    createBaseVNode("div", _hoisted_28, [
                      createBaseVNode("h3", null, toDisplayString(selectedMother.value.firstName) + " " + toDisplayString(selectedMother.value.middleName ? selectedMother.value.middleName + " " : "") + toDisplayString(selectedMother.value.lastName), 1),
                      createBaseVNode("p", null, [
                        _cache[9] || (_cache[9] = createBaseVNode("strong", null, "MRN:", -1)),
                        createTextVNode(" " + toDisplayString(selectedMother.value.patientID), 1)
                      ]),
                      selectedMother.value.birthdate ? (openBlock(), createElementBlock("p", _hoisted_29, [
                        _cache[10] || (_cache[10] = createBaseVNode("strong", null, "DOB:", -1)),
                        createTextVNode(" " + toDisplayString(formatDate(selectedMother.value.birthdate)), 1)
                      ])) : createCommentVNode("", true),
                      selectedMother.value.address ? (openBlock(), createElementBlock("p", _hoisted_30, [
                        _cache[11] || (_cache[11] = createBaseVNode("strong", null, "Address:", -1)),
                        createTextVNode(" " + toDisplayString(formatAddress(selectedMother.value.address)), 1)
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

const MotherSearch = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2bf8e305"]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Pregnancy",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[4].formData;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const syncFormValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.gestationWeeks = normalizeTextValue(values.gestationWeeks || "");
      enrollmentForm.steroidsGiven = values.steroidsGiven || "";
      enrollmentForm.gestationMethodAssessment = extractOptionValue(values.gestationMethodAssessment) || "";
      enrollmentForm.ultraSoundScanning = values.ultraSoundScanning || "";
      enrollmentForm.onsetOfLabor = normalizeTextValue(values.onsetOfLabor || "");
      enrollmentForm.ruptureOfMembranes = values.ruptureOfMembranes || "";
      enrollmentForm.durationOfRuptureMembranes = extractOptionValue(values.durationOfRuptureMembranes) || "";
      enrollmentForm.offensiveLiquor = values.offensiveLiquor || "";
      enrollmentForm.modeOfDelivery = extractOptionValue(values.modeOfDelivery) || "";
      enrollmentForm.meconiumPresent = values.meconiumPresent || "";
      enrollmentForm.maternalAnalgesia = values.maternalAnalgesia || "";
      enrollmentForm.analgesiasDrug = extractOptionValue(values.analgesiasDrug) || "";
      enrollmentForm.anesthesiaUsed = values.anesthesiaUsed || "";
      enrollmentForm.teo = values.teo || "";
      enrollmentForm.chlorohexidineCordCare = values.chlorohexidineCordCare || "";
      enrollmentForm.vitaminKGiven = values.vitaminKGiven || "";
      enrollmentForm.dextroseGiven = values.dextroseGiven || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(formData),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MotherEnrollmentDetails",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[5].formData;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const syncFormValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.motherStatus = values.motherStatus || "";
      enrollmentForm.motherHivStatus = extractOptionValue(values.motherHivStatus) || "";
      enrollmentForm.lastHivTestDate = normalizeTextValue(values.lastHivTestDate || "");
      enrollmentForm.doHivRetest = values.doHivRetest || "";
      enrollmentForm.babyGivenNvp = values.babyGivenNvp || "";
      enrollmentForm.motherVdrlResult = extractOptionValue(values.motherVdrlResult) || "";
      enrollmentForm.motherTreatedForVdrl = values.motherTreatedForVdrl || "";
      enrollmentForm.babyTestedForHepatitis = values.babyTestedForHepatitis || "";
      enrollmentForm.allThreeDosesCompleted = values.allThreeDosesCompleted || "";
      enrollmentForm.motherHepatitisResult = extractOptionValue(values.motherHepatitisResult) || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(formData),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KnownMedicalConditions",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[6].formData;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const syncFormValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.knownMedicalConditions = extractMultiSelectValues(values.knownMedicalConditions);
      enrollmentForm.tetanusDiphtheria = extractMultiSelectValues(values.tetanusDiphtheria);
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(formData),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main = defineComponent({
  name: "NeonatalEnrollment",
  components: {
    IonPage,
    IonContent,
    Toolbar,
    DemographicBar,
    NeonatalStepper,
    BirthDetails,
    ReferralInformation: _sfc_main$6,
    BirthAssessment: _sfc_main$5,
    MotherSearch,
    Pregnancy: _sfc_main$3,
    MotherEnrollmentDetails: _sfc_main$2,
    KnownMedicalConditions: _sfc_main$1
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isEnrolling = ref(false);
    const enrollmentStore = useNeonatalEnrollmentStore();
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncEnrollmentForm = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      enrollmentStore.initializeEnrollmentForm(patientId);
    };
    syncEnrollmentForm();
    watch(
      () => patient.value?.patientID,
      () => syncEnrollmentForm()
    );
    const enrollmentFormData = enrollmentStore.enrollmentForm;
    provide(neonatalEnrollmentFormKey, enrollmentFormData);
    watch(
      () => enrollmentStore.enrollmentForm,
      () => enrollmentStore.saveEnrollmentSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalEnrollmentSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalEnrollmentSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: neonatalEnrollmentSections[0].title,
        value: "1",
        component: BirthDetails
      },
      {
        title: neonatalEnrollmentSections[1].title,
        value: "2",
        component: _sfc_main$6
      },
      {
        title: neonatalEnrollmentSections[2].title,
        value: "3",
        component: _sfc_main$5
      },
      {
        title: neonatalEnrollmentSections[3].title,
        value: "4",
        component: MotherSearch
      },
      {
        title: neonatalEnrollmentSections[4].title,
        value: "5",
        component: _sfc_main$3
      },
      {
        title: neonatalEnrollmentSections[5].title,
        value: "6",
        component: _sfc_main$2
      },
      {
        title: neonatalEnrollmentSections[6].title,
        value: "7",
        component: _sfc_main$1
      }
    ];
    const updateStatus = (event) => {
      if (event && event.value) {
        wizardData.value.forEach((item, index) => {
          if (event.value === (index + 1).toString()) {
            item.class = "open_step common_step";
            item.checked = false;
          } else if (index < parseInt(event.value) - 1) {
            item.class = "common_step color_white";
            item.checked = true;
          } else {
            item.class = "common_step";
            item.checked = false;
          }
        });
      }
    };
    const getSaveFunction = (currentIndex) => {
      if (currentIndex === stepperData.length - 1) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          if (isEnrolling.value) {
            return;
          }
          try {
            isEnrolling.value = true;
            if (!enrollmentFormData.birthWeight || !enrollmentFormData.timeOfBirth) {
              toastWarning("Please complete required birth details");
              isEnrolling.value = false;
              return;
            }
            if (enrollmentFormData.motherPatientId) {
              try {
                const relationships = await RelationsService.getRelations();
                const motherRelationType = relationships.find((r) => r.b_is_to_a === "Mother" || r.b_is_to_a === "Parent");
                if (motherRelationType) {
                  await RelationsService.createRelation(
                    patient.value.patientID,
                    enrollmentFormData.motherPatientId,
                    motherRelationType.relationship_type_id
                  );
                }
              } catch (relationError) {
                console.error("Failed to create mother-baby relationship", relationError);
              }
            }
            const observations = await NeonatalService.buildEnrollmentObservations(enrollmentFormData, HisDate.sessionDate());
            console.log("[Enrollment] observations count:", observations?.length);
            console.log("[Enrollment] saving encounter with ID:", EncounterTypeId.NEONATAL_ENROLLMENT);
            console.log("[Enrollment] current program_id from Service.getProgramID():", Service.getProgramID());
            const saveResult = await saveEncounterData(patient.value.patientID, EncounterTypeId.NEONATAL_ENROLLMENT, observations);
            console.log("[Enrollment] save result:", saveResult);
            console.log("[Enrollment] session date used:", HisDate.sessionDate());
            await SetProgramService.userProgramData(patient.value.patientID);
            toastSuccess("Neonate enrolled successfully");
            await new Promise((resolve) => setTimeout(resolve, 1e3));
            const sessionDate = HisDate.sessionDate();
            console.log("[Enrollment] Checking saved encounters for date:", sessionDate);
            const encountersResponse = await NeonatalService.getSavedEncounters(patient.value.patientID, sessionDate);
            console.log("[Enrollment] encountersResponse after delay:", encountersResponse);
            const encounters = Array.isArray(encountersResponse?.encounters) ? encountersResponse.encounters : [];
            console.log("[Enrollment] encounters array:", encounters);
            console.log(
              "[Enrollment] encounter type names:",
              encounters.map((e) => typeof e === "string" ? e : e?.name || e)
            );
            const triageCompleted = encounters.some((encounterName) => encounterName?.trim().toUpperCase() === "NEONATAL TRIAGE");
            router.push("/neonatal/checkpoint");
          } catch (error) {
            console.error("Neonatal enrollment failed", error);
            toastDanger("Failed to enroll neonate. Please try again.");
            isEnrolling.value = false;
          }
        };
      }
      return null;
    };
    return {
      router,
      patient,
      enrollmentFormData,
      stepperTitle: "Profiling",
      currentOpenStepper: "1",
      wizardData,
      stepperData,
      updateStatus,
      getSaveFunction,
      isEnrolling
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-enrollment-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_NeonatalStepper, {
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/patient-profile",
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "enrollment",
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "onUpdateStatus"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Enrollment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b35d00f1"]]);

export { Enrollment as default };
