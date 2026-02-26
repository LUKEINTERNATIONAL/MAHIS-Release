import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, bb as IonCardHeader, B as withCtx, L as IonIcon, ax as searchOutline, cD as IonCardSubtitle, a5 as createTextVNode, ba as IonCardTitle, bd as IonCardContent, bT as IonSearchbar, N as IonButton, bm as chevronForward, J as Fragment, R as renderList, D as toDisplayString, H as createCommentVNode, cO as closeCircle, f as ref, c as computed, a2 as onMounted, O as createBlock, aL as useRouter, bL as useRoute, ac as IonNote, ew as qrCode, bG as addOutline, ey as callOutline, bY as chevronBackOutline, df as chevronForwardOutline, fr as barcode, b8 as calendarOutline, G as closeCircleOutline, Q as alertCircleOutline, aG as IonContent, bu as IonPage, f0 as provide, x as resolveComponent } from './vendor-DpSS1aB1.js';
import { s as storeToRefs } from './pinia-CbGjwPb6.js';
import { u as useDemographicsStore, cj as Banner, P as PatientService, _ as _export_sfc, V as LocationService, K as ObservationService, z as StandardForm, t as toastWarning, H as HisDate, o as createModal, r as StandardModal, T as Toolbar, a7 as RelationsService, b as EncounterTypeId, S as Service, ci as saveEncounterData, aq as SetProgramService, G as toastSuccess, x as toastDanger } from '../index-TQoWUpgO.js';
import { N as NeonatalService } from './neonatal_service-Dg5094Vd.js';
import { D as DemographicBar } from './DemographicBar-DsNWnAQd.js';
import { h as neonatalEnrollmentSections, p as extractOptionValue, q as normalizeTextValue, r as extractMultiSelectValues, N as NeonatalStepper } from './NeonatalStepper-Zzjfk8qv.js';
import { n as neonatalEnrollmentFormKey, u as useNeonatalEnrollmentStore } from './useNeonatalEnrollmentStore-BWxoe6hd.js';
import { I as IMAGES } from './images-BHsiaMgy.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-D0175jZJ.js';
import { S as SummarySection } from './SummarySection-D6zHsx9B.js';

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
const _hoisted_31$1 = {
  key: 0,
  class: "info-row"
};
const _hoisted_32$1 = { class: "info-value" };
const _hoisted_33$1 = {
  key: 1,
  class: "info-row"
};
const _hoisted_34$1 = { class: "info-value" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TwinSearch",
  setup(__props, { expose: __expose }) {
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const demographicsStore = useDemographicsStore();
    const searchQuery = ref("");
    const isSearching = ref(false);
    const searchResults = ref([]);
    const selectedTwin = ref(null);
    const twinSearchSkipped = ref(false);
    const infoBannerConfig = {
      componentType: "Banner",
      message: "This baby has a twin. Please search for the twin's record or register if not found."
    };
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
              createVNode(Banner, { config: infoBannerConfig }),
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
                    _cache[3] || (_cache[3] = createTextVNode(" Skip ", -1)),
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
                    }, [..._cache[4] || (_cache[4] = [
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
                          _cache[5] || (_cache[5] = createBaseVNode("strong", null, "Gender:", -1)),
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
                  _cache[6] || (_cache[6] = createBaseVNode("p", { class: "info-text" }, "The twin may not be registered yet. You can skip this step and register the twin later.", -1))
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
                      _cache[7] || (_cache[7] = createBaseVNode("div", { class: "header-separator" }, null, -1)),
                      _cache[8] || (_cache[8] = createBaseVNode("span", { class: "selected-subtitle" }, "Twin Selected", -1))
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
                        _cache[9] || (_cache[9] = createBaseVNode("span", { class: "info-label" }, "Full Name", -1)),
                        createBaseVNode("span", _hoisted_28$1, toDisplayString(formatPatientName(selectedTwin.value)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_29$1, [
                        _cache[10] || (_cache[10] = createBaseVNode("span", { class: "info-label" }, "MRN", -1)),
                        createBaseVNode("span", _hoisted_30$1, toDisplayString(selectedTwin.value.patientID), 1)
                      ]),
                      selectedTwin.value.birthdate ? (openBlock(), createElementBlock("div", _hoisted_31$1, [
                        _cache[11] || (_cache[11] = createBaseVNode("span", { class: "info-label" }, "Date of Birth", -1)),
                        createBaseVNode("span", _hoisted_32$1, toDisplayString(formatDate(selectedTwin.value.birthdate)), 1)
                      ])) : createCommentVNode("", true),
                      selectedTwin.value.gender ? (openBlock(), createElementBlock("div", _hoisted_33$1, [
                        _cache[12] || (_cache[12] = createBaseVNode("span", { class: "info-label" }, "Gender", -1)),
                        createBaseVNode("span", _hoisted_34$1, toDisplayString(selectedTwin.value.gender), 1)
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

const TwinSearch = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0ec356ed"]]);

const _hoisted_1$1 = { class: "birth-details-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
    const loadingBirthWeight = ref(false);
    const birthWeightLocked = ref(false);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
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
      await prefillBirthWeightFromTriage();
    });
    async function prefillBirthWeightFromTriage() {
      const patientId = patient.value?.patientID;
      if (!patientId) return;
      const currentValue = enrollmentForm?.birthWeight;
      if (currentValue) return;
      loadingBirthWeight.value = true;
      try {
        const weightInKg = await ObservationService.getFirstValueNumber(patientId, "Birth weight");
        if (weightInKg == null) return;
        const weightInGrams = Math.round(weightInKg * 1e3).toString();
        formRef.value?.setFormValue("birthWeight", weightInGrams);
        if (enrollmentForm) {
          enrollmentForm.birthWeight = weightInGrams;
        }
        birthWeightLocked.value = true;
      } catch (error) {
        console.error("Failed to prefill birth weight from triage:", error);
      } finally {
        loadingBirthWeight.value = false;
      }
    }
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
        if (field.name === "birthWeight") {
          if (loadingBirthWeight.value) {
            return {
              ...field,
              disabled: true,
              placeholder: "Loading birth weight from triage..."
            };
          }
          if (birthWeightLocked.value) {
            return {
              ...field,
              disabled: true,
              placeholder: "Birth weight loaded from triage"
            };
          }
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

const BirthDetails = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b20c8166"]]);

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
const _hoisted_2 = { class: "header-with-icon" };
const _hoisted_3 = { class: "icon-wrapper" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "search-with-button" };
const _hoisted_6 = { class: "search-wrapper" };
const _hoisted_7 = {
  class: "barcode-btn",
  "aria-label": "Scan MRN"
};
const _hoisted_8 = {
  key: 0,
  class: "search-results"
};
const _hoisted_9 = {
  key: 0,
  class: "search-loading"
};
const _hoisted_10 = {
  key: 1,
  class: "results-list"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "result-header" };
const _hoisted_13 = { class: "mother-name" };
const _hoisted_14 = { class: "mother-dob" };
const _hoisted_15 = { class: "mother-gender" };
const _hoisted_16 = { class: "result-details" };
const _hoisted_17 = {
  key: 0,
  class: "mother-address"
};
const _hoisted_18 = {
  key: 1,
  class: "mother-phone"
};
const _hoisted_19 = {
  key: 0,
  class: "pagination"
};
const _hoisted_20 = { class: "page-info" };
const _hoisted_21 = {
  key: 2,
  class: "no-results"
};
const _hoisted_22 = {
  key: 1,
  class: "selected-mother"
};
const _hoisted_23 = { class: "selected-card" };
const _hoisted_24 = { class: "selected-card-top" };
const _hoisted_25 = { class: "selected-identity" };
const _hoisted_26 = { class: "selected-name-block" };
const _hoisted_27 = { class: "selected-name" };
const _hoisted_28 = { class: "selected-meta" };
const _hoisted_29 = { class: "meta-pill" };
const _hoisted_30 = {
  key: 0,
  class: "meta-pill"
};
const _hoisted_31 = { class: "selected-card-body" };
const _hoisted_32 = { class: "selected-info-grid" };
const _hoisted_33 = { class: "info-item" };
const _hoisted_34 = { class: "info-value" };
const _hoisted_35 = { class: "info-item" };
const _hoisted_36 = { class: "info-value" };
const itemsPerPage = 10;
const MIN_MOTHER_AGE_YEARS = 5;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
    const isUnderageMother = (birthdate) => {
      if (!birthdate) return false;
      return HisDate.getAgeInYears(birthdate) < MIN_MOTHER_AGE_YEARS;
    };
    const formatPhone = (value) => {
      if (!value) return "";
      if (typeof value === "string") {
        const trimmed = value.trim();
        if (!trimmed) return "";
        if (trimmed.startsWith("+")) return trimmed;
        if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
          try {
            const parsed = JSON.parse(trimmed);
            return formatPhone(parsed);
          } catch {
            return trimmed;
          }
        }
        if (/^\d{7,}$/.test(trimmed)) {
          return `+265${trimmed}`;
        }
        return trimmed;
      }
      if (typeof value === "object") {
        const phoneNumber = value.phoneNumber || value.number || value.phone || "";
        const countryCode = value.countryCode || value.country_code || "";
        if (phoneNumber && countryCode) {
          return `+${countryCode}${phoneNumber}`;
        }
        if (phoneNumber) {
          return `+265${phoneNumber}`;
        }
        return "";
      }
      return String(value);
    };
    const checkAndAutoSelectMother = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      const motherData = enrollmentStore.motherData;
      if (motherData && motherData.patientID) {
        if (isUnderageMother(motherData.birthdate)) {
          toastWarning("Selected person is under 5 years old and cannot be registered as a mother.");
          enrollmentStore.clearEnrollmentContext();
          return;
        }
        selectedMother.value = {
          ...motherData,
          phone: formatPhone(motherData.phone)
        };
        await new Promise((resolve) => setTimeout(resolve, 100));
        enrollmentStore.motherData = void 0;
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
          const person2 = patient.person;
          const name = person2.names?.[0] || {};
          const address = person2.addresses?.[0] || {};
          const phoneAttribute = person2.person_attributes?.find((attr) => {
            const typeName = attr.person_attribute_type?.name || attr.type?.name || attr.attribute_type_name || attr.attribute_type;
            return typeName === "Cell Phone Number";
          });
          return {
            patientID: person2.person_id,
            firstName: name.given_name || "",
            middleName: name.middle_name || "",
            lastName: name.family_name || "",
            gender: person2.gender,
            birthdate: person2.birthdate,
            nationalId: patient.national_id || "",
            address,
            phone: formatPhone(phoneAttribute?.value || "")
          };
        }).filter((mother) => !isUnderageMother(mother.birthdate)) : [];
      } catch (error) {
        console.error("Error searching for mothers:", error);
        searchResults.value = [];
      } finally {
        isSearching.value = false;
      }
    };
    const selectMother = (mother) => {
      if (isUnderageMother(mother?.birthdate)) {
        toastWarning("Selected person is under 5 years old and cannot be registered as a mother.");
        return;
      }
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
    const toTitleCase = (value) => {
      if (!value) return "";
      return value.trim().split(/\s+/).map((word) => word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : "").filter(Boolean).join(" ");
    };
    const formatFullName = (first, middle, last) => {
      return [toTitleCase(first), toTitleCase(middle), toTitleCase(last)].filter(Boolean).join(" ");
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
        createBaseVNode("div", null, [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("img", {
                    src: unref(IMAGES).icons.care,
                    alt: "Care",
                    class: "header-icon"
                  }, null, 8, _hoisted_4),
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
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(unref(IonSearchbar), {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    placeholder: "Search for mother's Name or scan MRN",
                    onIonInput: handleSearchInput,
                    debounce: 300,
                    "show-clear-button": "focus",
                    class: "search-input"
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", _hoisted_7, [
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
              searchQuery.value && searchQuery.value.length > 0 && !selectedMother.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
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
                ])) : searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedResults.value, (mother, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: mother.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectMother(mother)
                    }, [
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("span", _hoisted_13, toDisplayString(formatFullName(mother.firstName, mother.middleName, mother.lastName)), 1),
                        _cache[6] || (_cache[6] = createBaseVNode("span", { class: "dot-separator" }, "·", -1)),
                        createBaseVNode("span", _hoisted_14, "DOB " + toDisplayString(formatDate(mother.birthdate)), 1),
                        _cache[7] || (_cache[7] = createBaseVNode("span", { class: "dot-separator" }, "·", -1)),
                        createBaseVNode("span", _hoisted_15, toDisplayString(mother.gender === "F" ? "Female" : mother.gender), 1)
                      ]),
                      createBaseVNode("div", _hoisted_16, [
                        mother.address ? (openBlock(), createElementBlock("p", _hoisted_17, [
                          _cache[8] || (_cache[8] = createBaseVNode("strong", null, "Current Address:", -1)),
                          createTextVNode(" " + toDisplayString(formatAddress(mother.address)), 1)
                        ])) : createCommentVNode("", true),
                        mother.phone ? (openBlock(), createElementBlock("p", _hoisted_18, [
                          createVNode(unref(IonIcon), { icon: unref(callOutline) }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(formatPhone(mother.phone)), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_11);
                  }), 128)),
                  totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_19, [
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
                    createBaseVNode("span", _hoisted_20, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
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
                ])) : (openBlock(), createElementBlock("div", _hoisted_21, [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "no-results-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("p", null, 'No mothers found matching "' + toDisplayString(searchQuery.value) + '"', 1),
                  createVNode(unref(IonButton), {
                    expand: "block",
                    onClick: goToRegistration
                  }, {
                    default: withCtx(() => [..._cache[9] || (_cache[9] = [
                      createTextVNode("Register new mother", -1)
                    ])]),
                    _: 1
                  })
                ]))
              ])) : createCommentVNode("", true),
              selectedMother.value ? (openBlock(), createElementBlock("div", _hoisted_22, [
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, [
                        createBaseVNode("h3", _hoisted_27, toDisplayString(formatFullName(selectedMother.value.firstName, selectedMother.value.middleName, selectedMother.value.lastName)), 1),
                        createBaseVNode("div", _hoisted_28, [
                          createBaseVNode("div", _hoisted_29, [
                            createVNode(unref(IonIcon), {
                              icon: unref(barcode),
                              size: "small"
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", null, "MRN: " + toDisplayString(selectedMother.value.patientID), 1)
                          ]),
                          selectedMother.value.birthdate ? (openBlock(), createElementBlock("div", _hoisted_30, [
                            createVNode(unref(IonIcon), {
                              icon: unref(calendarOutline),
                              size: "small"
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", null, "DOB: " + toDisplayString(formatDate(selectedMother.value.birthdate)), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode(unref(IonButton), {
                      fill: "solid",
                      size: "small",
                      color: "danger",
                      onClick: clearSelection,
                      class: "clear-selection-btn",
                      "aria-label": "Clear selected mother"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(closeCircleOutline),
                          slot: "icon-only"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, [
                      createBaseVNode("div", _hoisted_33, [
                        _cache[10] || (_cache[10] = createBaseVNode("span", { class: "info-label" }, "Address", -1)),
                        createBaseVNode("span", _hoisted_34, toDisplayString(selectedMother.value.address ? formatAddress(selectedMother.value.address) : "Not provided"), 1)
                      ]),
                      createBaseVNode("div", _hoisted_35, [
                        _cache[11] || (_cache[11] = createBaseVNode("span", { class: "info-label" }, "Phone", -1)),
                        createBaseVNode("span", _hoisted_36, toDisplayString(formatPhone(selectedMother.value.phone) || "Not provided"), 1)
                      ])
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

const MotherSearch = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9f156792"]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      enrollmentForm.motherTestedForHepatitis = values.motherTestedForHepatitis || "";
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
      { deep: true, flush: "sync" }
    );
    watch(
      () => enrollmentForm?.motherHepatitisResult,
      (result, prev) => {
        if (result === "Positive" && prev !== "Positive") {
          createModal(
            StandardModal,
            { class: "small-confirm-modal" },
            true,
            {
              title: "Hepatitis B Reminder",
              subtitle: "Action required",
              headerIcon: alertCircleOutline,
              message: "Mother is Hepatitis B positive. Give the baby the Hepatitis B vaccine now."
            }
          );
        }
      }
    );
    watch(
      () => [enrollmentForm?.motherHivStatus, enrollmentForm?.babyGivenNvp],
      ([hivStatus, nvp], [prevHivStatus, prevNvp]) => {
        const isReactiveAndNoNvp = hivStatus === "Reactive" && nvp === "No";
        const wasReactiveAndNoNvp = prevHivStatus === "Reactive" && prevNvp === "No";
        if (isReactiveAndNoNvp && !wasReactiveAndNoNvp) {
          createModal(
            StandardModal,
            { class: "small-confirm-modal" },
            true,
            {
              title: "NVP Required",
              subtitle: "Action required",
              headerIcon: alertCircleOutline,
              message: "Mother is HIV reactive and baby has not been given NVP. Start NVP prophylaxis immediately."
            }
          );
        }
      }
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
  __name: "NvpGuideline",
  setup(__props) {
    const formData = neonatalEnrollmentSections[6].formData;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, { formData: unref(formData) }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KnownMedicalConditions",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[7].formData;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const coerceDiagnosisRecords = (payload) => {
      if (Array.isArray(payload)) return payload;
      if (Array.isArray(payload?.records)) return payload.records;
      if (Array.isArray(payload?.diagnoses)) return payload.diagnoses;
      if (Array.isArray(payload?.data)) return payload.data;
      return [];
    };
    const specialConditionOptions = [
      { label: "None", value: "None" },
      { label: "Unknown", value: "Unknown" }
    ];
    const mergeDiagnosisOptions = (options, query) => {
      const normalizedQuery = query?.trim().toLowerCase() || "";
      const specials = specialConditionOptions.filter((special) => {
        if (!normalizedQuery) return true;
        return special.label.toLowerCase().includes(normalizedQuery);
      });
      const merged = [...specials, ...options];
      const seen = /* @__PURE__ */ new Set();
      return merged.filter((option) => {
        const key = String(option.value).toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    };
    const getDiagnosisOptions = async (query, page = 1, pageSize = 40) => {
      const response = await PatientDiagnosisService.getDiagnosis(query || "", page, pageSize);
      const records = coerceDiagnosisRecords(response);
      const labels = records.map((record) => {
        const candidate = record?.name ?? record?.label ?? record?.title ?? record?.concept_name;
        return typeof candidate === "string" ? candidate.trim() : "";
      }).filter((label) => label.length > 0);
      const uniqueLabels = Array.from(new Set(labels));
      const options = uniqueLabels.map((label) => ({ label, value: label }));
      return mergeDiagnosisOptions(options, query);
    };
    const enrichedFormData = computed(() => {
      return formData.map((field) => {
        if (field.name === "knownMedicalConditions") {
          return {
            ...field,
            pageSize: 20,
            onSearchChange: getDiagnosisOptions
          };
        }
        return field;
      });
    });
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
        formData: enrichedFormData.value,
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
    ReferralInformation: _sfc_main$7,
    BirthAssessment: _sfc_main$6,
    MotherSearch,
    Pregnancy: _sfc_main$4,
    MotherEnrollmentDetails: _sfc_main$3,
    NvpGuideline: _sfc_main$2,
    KnownMedicalConditions: _sfc_main$1,
    SummarySection
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
        component: _sfc_main$7
      },
      {
        title: neonatalEnrollmentSections[2].title,
        value: "3",
        component: _sfc_main$6
      },
      {
        title: neonatalEnrollmentSections[3].title,
        value: "4",
        component: MotherSearch
      },
      {
        title: neonatalEnrollmentSections[4].title,
        value: "5",
        component: _sfc_main$4
      },
      {
        title: neonatalEnrollmentSections[5].title,
        value: "6",
        component: _sfc_main$3
      },
      {
        title: neonatalEnrollmentSections[6].title,
        value: "7",
        component: _sfc_main$2
      },
      {
        title: neonatalEnrollmentSections[7].title,
        value: "8",
        component: _sfc_main$1
      },
      {
        title: neonatalEnrollmentSections[8].title,
        value: "9",
        component: SummarySection,
        configIndex: 8
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
            enrollmentStore.clearEnrollmentContext();
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
const Enrollment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dc7862ae"]]);

export { Enrollment as default };
