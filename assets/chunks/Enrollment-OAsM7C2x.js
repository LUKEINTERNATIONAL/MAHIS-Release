import { s as defineComponent, h as inject, w as watch, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, bc as IonCardHeader, B as withCtx, L as IonIcon, aw as searchOutline, cE as IonCardSubtitle, a5 as createTextVNode, bb as IonCardTitle, be as IonCardContent, bV as IonSearchbar, N as IonButton, bn as chevronForward, J as Fragment, S as renderList, D as toDisplayString, H as createCommentVNode, cP as closeCircle, f as ref, c as computed, a3 as onMounted, n as nextTick, cI as __vitePreload, O as createBlock, aM as useRouter, bN as useRoute, ac as IonNote, ex as qrCode, bI as addOutline, ez as callOutline, b_ as chevronBackOutline, dg as chevronForwardOutline, fw as barcode, b9 as calendarOutline, G as closeCircleOutline, f4 as linkOutline, Q as normalizeClass, co as refreshOutline, df as gridOutline, b8 as listOutline, R as alertCircleOutline, bC as createStaticVNode, aH as IonContent, bw as IonPage, f1 as provide, x as resolveComponent } from './vendor-BcieWP-_.js';
import { s as storeToRefs } from './pinia-DdQ9BIp0.js';
import { u as useDemographicsStore, D as PatientSearchService, ck as Banner, S as Service, P as PatientService, _ as _export_sfc, X as LocationService, M as ConceptService, z as StandardForm, K as ObservationService, b as EncounterTypeId, t as toastWarning, H as HisDate, o as createModal, r as StandardModal, cm as infoAlert, T as Toolbar, a8 as RelationsService, ar as SetProgramService, G as toastSuccess, x as toastDanger } from '../index-BQBxfUAX.js';
import { N as NeonatalService } from './neonatal_service-4pO0uDgr.js';
import { D as DemographicBar } from './DemographicBar-CgCPKa2g.js';
import { i as neonatalEnrollmentSections, r as neonatalEnrollmentSectionIndex, s as hasDataFromMnh, t as extractOptionValue, v as normalizeTextValue, w as extractMultiSelectValues, x as motherEnrollmentRules, N as NeonatalStepper } from './NeonatalStepper-BJftTk8k.js';
import { n as neonatalEnrollmentFormKey, u as useNeonatalEnrollmentStore } from './useNeonatalEnrollmentStore-DsHQ6jUd.js';
import { I as IMAGES } from './images-DsIwfyLt.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-B1HSW4YB.js';
import { S as SummarySection } from './SummarySection-C5NDvE27.js';

const _hoisted_1$4 = {
  key: 0,
  class: "twin-search-container"
};
const _hoisted_2$2 = { style: { "border": "1px dotted #ececec", "border-radius": "8px" } };
const _hoisted_3$2 = { class: "header-with-icon" };
const _hoisted_4$2 = { class: "icon-wrapper" };
const _hoisted_5$2 = ["src"];
const _hoisted_6$2 = { class: "search-with-button" };
const _hoisted_7$2 = { class: "search-wrapper" };
const _hoisted_8$2 = {
  key: 0,
  class: "search-results"
};
const _hoisted_9$2 = {
  key: 0,
  class: "search-loading"
};
const _hoisted_10$2 = {
  key: 1,
  class: "results-list"
};
const _hoisted_11$2 = ["onClick"];
const _hoisted_12$2 = { class: "result-header" };
const _hoisted_13$2 = { class: "twin-name" };
const _hoisted_14$2 = { class: "twin-mrn" };
const _hoisted_15$2 = { class: "twin-dob" };
const _hoisted_16$2 = { class: "result-details" };
const _hoisted_17$2 = {
  key: 0,
  class: "twin-gender"
};
const _hoisted_18$2 = {
  key: 2,
  class: "no-results"
};
const _hoisted_19$2 = {
  key: 1,
  class: "selected-twin"
};
const _hoisted_20$2 = { class: "selected-card" };
const _hoisted_21$2 = { class: "selected-card-header" };
const _hoisted_22$2 = { class: "header-content" };
const _hoisted_23$2 = { class: "selected-icon-wrapper" };
const _hoisted_24$2 = ["src"];
const _hoisted_25$2 = { class: "selected-card-content" };
const _hoisted_26$2 = { class: "patient-info-grid" };
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
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TwinSearch",
  setup(__props, { expose: __expose }) {
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    const demographicsStore = useDemographicsStore();
    const patientSearchService = new PatientSearchService();
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
        if (/^\d+$/.test(query) || query.startsWith("temp_")) {
          try {
            const patientId = query.startsWith("temp_") ? query : Number(query);
            const patientData = await demographicsStore.getPatientData(patientId);
            if (patientData && patientData.personInformation) {
              const person = patientData.personInformation;
              searchResults.value = [
                {
                  patientID: patientData.patientID || patientData.ID || person.person_id,
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
            gender: "",
            page: "1",
            per_page: "20"
          };
          const hasOfflineAccess = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
          const shouldUseOffline = !Service.getAPIStatus() && hasOfflineAccess;
          if (shouldUseOffline) {
            const offlineResult = await patientSearchService.searchOfflinePatients(searchPayload);
            const offlinePatients = Array.isArray(offlineResult) ? offlineResult : offlineResult?.records;
            searchResults.value = Array.isArray(offlinePatients) ? offlinePatients.filter((p) => isRecentNeonate(getPatientBirthdate(p))).filter((p) => !isCurrentPatientMatch(p)).map((patient) => {
              const person = patient.personInformation || {};
              return {
                patientID: patient.patientID || patient.ID || person.person_id,
                firstName: person.given_name || "",
                middleName: person.middle_name || "",
                lastName: person.family_name || "",
                gender: normalizeGender(person.gender),
                birthdate: person.birthdate
              };
            }) : [];
          } else {
            const response = await PatientService.search(searchPayload);
            let onlineResults = Array.isArray(response) ? response.filter((p) => {
              return isRecentNeonate(getPatientBirthdate(p));
            }).filter((p) => !isCurrentPatientMatch(p)).map((patient) => {
              const person = patient.person;
              const name = person.names?.[0] || {};
              return {
                patientID: person.person_id,
                firstName: name.given_name || "",
                middleName: name.middle_name || "",
                lastName: name.family_name || "",
                gender: normalizeGender(person.gender),
                birthdate: person.birthdate
              };
            }) : [];
            if (onlineResults.length === 0 && hasOfflineAccess) {
              const offlineResult = await patientSearchService.searchOfflinePatients(searchPayload);
              const offlinePatients = Array.isArray(offlineResult) ? offlineResult : offlineResult?.records;
              searchResults.value = Array.isArray(offlinePatients) ? offlinePatients.filter((p) => isRecentNeonate(getPatientBirthdate(p))).filter((p) => !isCurrentPatientMatch(p)).map((patient) => {
                const person = patient.personInformation || {};
                return {
                  patientID: patient.patientID || patient.ID || person.person_id,
                  firstName: person.given_name || "",
                  middleName: person.middle_name || "",
                  lastName: person.family_name || "",
                  gender: normalizeGender(person.gender),
                  birthdate: person.birthdate
                };
              }) : [];
            } else {
              searchResults.value = onlineResults;
            }
          }
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
    const normalizeGender = (gender) => {
      if (!gender) return "";
      if (typeof gender === "string") return gender;
      return gender.value ?? gender.label ?? "";
    };
    const getPatientBirthdate = (patient) => {
      if (!patient) return void 0;
      return patient?.personInformation?.birthdate || patient?.personInformation?.birth_date || patient?.person?.birthdate || patient?.birthdate || patient?.birth_date;
    };
    const getPatientName = (patient) => {
      const personInfo = patient?.personInformation;
      if (personInfo) {
        return `${personInfo.given_name || ""} ${personInfo.middle_name || ""} ${personInfo.family_name || ""}`.trim();
      }
      const person = patient?.person;
      if (person) {
        const name = person.names?.[0] || {};
        return `${name.given_name || ""} ${name.middle_name || ""} ${name.family_name || ""}`.trim();
      }
      return `${patient?.firstName || ""} ${patient?.middleName || ""} ${patient?.lastName || ""}`.trim();
    };
    const normalizeName = (name) => {
      return name.toLowerCase().replace(/\s+/g, " ").trim();
    };
    const isCurrentPatientMatch = (patient) => {
      const current = demographicsStore.getPatient?.() || demographicsStore.patient;
      const currentId = current?.patientID || current?.ID || current?.personInformation?.person_id;
      const patientId = patient?.patientID || patient?.ID || patient?.personInformation?.person_id || patient?.person?.person_id;
      if (currentId && patientId && `${currentId}` === `${patientId}`) return true;
      const currentName = normalizeName(getPatientName(current));
      const patientName = normalizeName(getPatientName(patient));
      return currentName.length > 0 && currentName === patientName;
    };
    const isRecentNeonate = (birthdate) => {
      if (!birthdate) return true;
      const birthDate = new Date(birthdate);
      const daysDiff = Math.floor((Date.now() - birthDate.getTime()) / (1e3 * 60 * 60 * 24));
      return daysDiff <= 7;
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
      return showTwinSearch.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3$2, [
                createBaseVNode("div", _hoisted_4$2, [
                  createBaseVNode("img", {
                    src: unref(IMAGES).icons.twins,
                    alt: "Twin",
                    class: "header-icon"
                  }, null, 8, _hoisted_5$2),
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
              createBaseVNode("div", _hoisted_6$2, [
                createBaseVNode("div", _hoisted_7$2, [
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
              searchQuery.value && searchQuery.value.length > 0 && !selectedTwin.value ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
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
                ])) : searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, (patient, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: patient.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectTwin(patient)
                    }, [
                      createBaseVNode("div", _hoisted_12$2, [
                        createBaseVNode("span", _hoisted_13$2, toDisplayString(formatPatientName(patient)), 1),
                        createBaseVNode("span", _hoisted_14$2, "MRN: " + toDisplayString(patient.patientID), 1),
                        createBaseVNode("span", _hoisted_15$2, "DOB: " + toDisplayString(formatDate(patient.birthdate)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_16$2, [
                        patient.gender ? (openBlock(), createElementBlock("p", _hoisted_17$2, [
                          _cache[5] || (_cache[5] = createBaseVNode("strong", null, "Gender:", -1)),
                          createTextVNode(" " + toDisplayString(patient.gender), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_11$2);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_18$2, [
                  createVNode(unref(IonIcon), {
                    icon: unref(searchOutline),
                    class: "no-results-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("p", null, 'No patients found matching "' + toDisplayString(searchQuery.value) + '"', 1),
                  _cache[6] || (_cache[6] = createBaseVNode("p", { class: "info-text" }, "The twin may not be registered yet. You can skip this step and register the twin later.", -1))
                ]))
              ])) : createCommentVNode("", true),
              selectedTwin.value ? (openBlock(), createElementBlock("div", _hoisted_19$2, [
                createBaseVNode("div", _hoisted_20$2, [
                  createBaseVNode("div", _hoisted_21$2, [
                    createBaseVNode("div", _hoisted_22$2, [
                      createBaseVNode("div", _hoisted_23$2, [
                        createBaseVNode("img", {
                          src: unref(IMAGES).icons.twins,
                          alt: "Twin",
                          class: "selected-header-icon"
                        }, null, 8, _hoisted_24$2)
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
                  createBaseVNode("div", _hoisted_25$2, [
                    createBaseVNode("div", _hoisted_26$2, [
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

const TwinSearch = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-6b9f1217"]]);

const _hoisted_1$3 = { class: "birth-details-wrapper" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BirthDetails",
  setup(__props, { expose: __expose }) {
    const twinQuestionFormRef = ref(null);
    const formRef = ref(null);
    const twinSearchRef = ref(null);
    const birthDetailsFormData = neonatalEnrollmentSections[neonatalEnrollmentSectionIndex.birthDetails].formData;
    const enrollmentStore = useNeonatalEnrollmentStore();
    const filteredBirthDetailsFormData = computed(() => {
      const mnhData = enrollmentStore.mnhData;
      if (!mnhData) return birthDetailsFormData;
      return birthDetailsFormData.filter((field) => {
        const fieldName = field?.name;
        if (!fieldName) return true;
        return !hasDataFromMnh(mnhData, fieldName, "birthDetails");
      });
    });
    const twinQuestionFormData = computed(
      () => filteredBirthDetailsFormData.value.filter((field) => field?.name === "hasTwin")
    );
    const formData = computed(
      () => filteredBirthDetailsFormData.value.filter((field) => field?.name !== "hasTwin")
    );
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
        const isOfflineMode = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
        if (isOfflineMode) {
          const offlineWeightInGrams = await getOfflineBirthWeightInGrams(patientId);
          if (offlineWeightInGrams != null) {
            const weightInGrams2 = Math.round(offlineWeightInGrams).toString();
            if (enrollmentForm) {
              enrollmentForm.birthWeight = weightInGrams2;
            }
            await nextTick();
            formRef.value?.setFormValue("birthWeight", weightInGrams2);
            birthWeightLocked.value = true;
            return;
          }
        }
        const weightInGrams = getBirthWeightFromPatientObservationsInGrams();
        if (weightInGrams == null) return;
        const weightString = weightInGrams.toString();
        if (enrollmentForm) {
          enrollmentForm.birthWeight = weightString;
        }
        await nextTick();
        formRef.value?.setFormValue("birthWeight", weightString);
        birthWeightLocked.value = true;
      } catch (error) {
        console.error("Failed to prefill birth weight from triage:", error);
      } finally {
        loadingBirthWeight.value = false;
      }
    }
    const normalizeName = (value) => String(value ?? "").trim().toLowerCase();
    const getConceptNamesFromObs = (obs) => {
      const names = [];
      const raw = obs?.concept_name ?? obs?.conceptName ?? obs?.concept_display ?? obs?.conceptDisplay ?? obs?.name ?? "";
      if (raw) names.push(String(raw));
      const concept = obs?.concept;
      const direct = concept?.display ?? concept?.name?.display ?? concept?.name?.name ?? concept?.name ?? concept?.concept_name?.name ?? "";
      if (direct) names.push(String(direct));
      const conceptNames = concept?.concept_names;
      if (Array.isArray(conceptNames)) {
        for (const n of conceptNames) {
          if (n?.name) names.push(String(n.name));
        }
      }
      return [...new Set(names.map((n) => n.trim()).filter(Boolean))];
    };
    const flattenObservations = (entry) => {
      if (!entry) return [];
      if (Array.isArray(entry)) return entry;
      if (Array.isArray(entry?.observations)) return entry.observations;
      if (Array.isArray(entry?.obs)) return entry.obs;
      if (Array.isArray(entry?.observations_list)) return entry.observations_list;
      if (typeof entry === "object") {
        const values = Object.values(entry);
        if (values.some((v) => Array.isArray(v) || typeof v === "object")) {
          return values.flatMap((v) => flattenObservations(v));
        }
      }
      return [];
    };
    const isObsLike = (obj) => {
      if (!obj || typeof obj !== "object") return false;
      return obj.concept_name !== void 0 || obj.concept !== void 0 || obj.conceptName !== void 0 || obj.value_text !== void 0 || obj.value_numeric !== void 0 || obj.value_datetime !== void 0 || obj.value !== void 0 || obj.value_coded !== void 0 || obj.value_coded_name !== void 0;
    };
    const collectAllObservations = () => {
      const root = patient.value?.observations;
      if (!root) return [];
      const all = flattenObservations(root);
      if (!Array.isArray(all)) return [];
      const result = [];
      const seen = /* @__PURE__ */ new WeakSet();
      const walk = (obs) => {
        if (!obs || typeof obs !== "object") return;
        if (seen.has(obs)) return;
        seen.add(obs);
        if (isObsLike(obs)) result.push(obs);
        const children = obs?.groupMembers ?? obs?.children ?? obs?.child;
        if (Array.isArray(children)) {
          for (const child of children) walk(child);
        }
        const nestedObs = obs?.observations ?? obs?.obs ?? obs?.observations_list;
        if (Array.isArray(nestedObs)) {
          for (const child of nestedObs) walk(child);
        }
      };
      for (const obs of all) walk(obs);
      return result;
    };
    const getObsTimestamp = (obs) => {
      const raw = obs?.obs_datetime ?? obs?.obsDatetime ?? obs?.observation_datetime ?? obs?.date_created ?? obs?.dateCreated;
      if (!raw) return 0;
      const t = new Date(raw).getTime();
      return Number.isFinite(t) ? t : 0;
    };
    const getBirthWeightFromPatientObservationsInGrams = () => {
      const observations = collectAllObservations();
      if (!observations.length) return null;
      const candidates = ["Birth weight", "Birth weight (kg)", "Birth weight (g)", "Birth weight (grams)"].map(normalizeName);
      const matches = observations.filter((obs) => {
        const names = getConceptNamesFromObs(obs).map(normalizeName);
        return names.some((n) => candidates.includes(n));
      });
      if (!matches.length) return null;
      matches.sort((a, b) => getObsTimestamp(b) - getObsTimestamp(a));
      const latest = matches[0];
      const raw = latest?.value_numeric ?? latest?.value_text ?? latest?.value ?? latest?.value_coded_name ?? latest?.value_coded;
      const numeric = typeof raw === "number" ? raw : parseFloat(String(raw || ""));
      if (Number.isNaN(numeric)) return null;
      return numeric > 20 ? Math.round(numeric) : Math.round(numeric * 1e3);
    };
    async function getOfflineBirthWeightInGrams(patientId) {
      try {
        const localPatient = patient.value;
        const sectionCandidates = [
          localPatient?.neonatal_triage,
          localPatient?.neonatal_emergency_triage
        ];
        const flattenObservations2 = (entry) => {
          if (!entry) return [];
          if (Array.isArray(entry?.observations)) return entry.observations;
          if (Array.isArray(entry?.obs)) return entry.obs;
          return [];
        };
        const collectedFromSections = sectionCandidates.flatMap((section) => {
          if (!section || typeof section !== "object") return [];
          const saved = Array.isArray(section.saved) ? section.saved : [];
          const unsaved = Array.isArray(section.unsaved) ? section.unsaved : [];
          return [...saved, ...unsaved].flatMap((entry) => flattenObservations2(entry));
        });
        const { default: NeonatalOfflineService } = await __vitePreload(async () => { const { default: NeonatalOfflineService } = await import('./neonatal_offline_service-DE0R82Cx.js');return { default: NeonatalOfflineService }},true              ?[]:void 0);
        const stageObservations = await NeonatalOfflineService.getNeonatalObservations(String(patientId));
        const observations = [
          ...collectedFromSections,
          ...Array.isArray(stageObservations) ? stageObservations : []
        ];
        if (!Array.isArray(observations) || observations.length === 0) return null;
        let conceptId = null;
        try {
          conceptId = await ConceptService.getConceptID("Birth weight", true);
        } catch {
          conceptId = null;
        }
        const matches = observations.filter((obs) => {
          const name = String(obs?.concept_name || "").toLowerCase();
          const idMatch = conceptId != null && Number(obs?.concept_id) === Number(conceptId);
          return name === "birth weight" || idMatch;
        });
        if (matches.length === 0) return null;
        const latest = matches.sort((a, b) => {
          const aDate = new Date(a?.obs_datetime || a?.date_created || a?.created_at || 0).getTime();
          const bDate = new Date(b?.obs_datetime || b?.date_created || b?.created_at || 0).getTime();
          return bDate - aDate;
        })[0];
        const rawValue = latest?.value_numeric ?? latest?.value_text ?? latest?.value;
        const numeric = typeof rawValue === "number" ? rawValue : parseFloat(String(rawValue || ""));
        if (Number.isNaN(numeric)) return null;
        return numeric < 50 ? numeric * 1e3 : numeric;
      } catch (error) {
        console.error("Failed to prefill birth weight from offline observations:", error);
        return null;
      }
    }
    const enrichedFormData = computed(() => {
      return formData.value.map((field) => {
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
          const baseConfig = {
            ...field,
            imageIcon: IMAGES.icons.babyWeight,
            unit: "grams"
          };
          if (loadingBirthWeight.value) {
            return {
              ...baseConfig,
              disabled: true,
              placeholder: "Loading..."
            };
          }
          if (birthWeightLocked.value) {
            return {
              ...baseConfig,
              disabled: true
            };
          }
          return baseConfig;
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
      const birthDate = normalizeTextValue(values.birthDate || "");
      const birthTime = normalizeTextValue(values.birthTime || "");
      enrollmentForm.timeOfBirth = birthDate && birthTime ? `${birthDate} ${birthTime}` : birthDate || birthTime;
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(StandardForm, {
          formData: twinQuestionFormData.value,
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

const BirthDetails = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-4ace5f68"]]);

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ReferralInformation",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[neonatalEnrollmentSectionIndex.referralInformation].formData;
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

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BirthAssessment",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const enrollmentStore = useNeonatalEnrollmentStore();
    const formData = computed(() => {
      const baseFormData = neonatalEnrollmentSections[neonatalEnrollmentSectionIndex.birthAssessment].formData;
      const mnhData = enrollmentStore.mnhData;
      if (!mnhData) return baseFormData;
      return baseFormData.filter((field) => {
        const fieldName = field?.name;
        if (!fieldName) return true;
        return !hasDataFromMnh(mnhData, fieldName, "birthAssessment");
      });
    });
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
        formData: formData.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

class MnhMaternalDataService {
  static async getMotherData(motherPatientId) {
    const patientRecord = await PatientService.getPatient({ patient_id: motherPatientId });
    const weightKg = await ConceptService.getConceptID("Weight (kg)");
    const currentWeight = await ConceptService.getConceptID("Current weight");
    const height = await ConceptService.getConceptID("Height (cm)");
    const headCircumference = await ConceptService.getConceptID("Head circumference");
    const apgar1Min = await ConceptService.getConceptID("Apgar score at 1 minute");
    const apgar5Min = await ConceptService.getConceptID("Apgar score at 5 minutes");
    const apgar10Min = await ConceptService.getConceptID("Apgar score at 10 minutes");
    const babyGeneralCondition = await ConceptService.getConceptID("Birth condition");
    const outcomeOfDelivery = await ConceptService.getConceptID("Outcome of delivery");
    const resuscitationAttempt = await ConceptService.getConceptID("Resuscitation attempt");
    const resuscitationType = await ConceptService.getConceptID("Resuscitation Type");
    const vitaminKGiven = await ConceptService.getConceptID("Vitamin K given?");
    const tetracyclineEyeOintment = await ConceptService.getConceptID("Tetracycline eye ointment given?");
    const chlorhexidine = await ConceptService.getConceptID("Chlorhexidine 7.1% applied?");
    const nevirapineGiven = await ConceptService.getConceptID("Nevirapine given");
    const deliveryDetailsObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.Delivery_Details, patientRecord);
    const pncVisitObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.PNC_VISIT, patientRecord);
    const combinedObs = [...deliveryDetailsObs || [], ...pncVisitObs || []];
    return {
      weight: await this.getObsValue(combinedObs, [weightKg]),
      currentWeight: await this.getObsValue(combinedObs, [currentWeight]),
      height: await this.getObsValue(combinedObs, [height]),
      headCircumference: await this.getObsValue(combinedObs, [headCircumference]),
      apgar1Min: await this.getObsValue(combinedObs, [apgar1Min]),
      apgar5Min: await this.getObsValue(combinedObs, [apgar5Min]),
      apgar10Min: await this.getObsValue(combinedObs, [apgar10Min]),
      babyGeneralCondition: await this.getObsValue(combinedObs, [babyGeneralCondition]),
      outcomeOfDelivery: await this.getObsValue(combinedObs, [outcomeOfDelivery]),
      resuscitationAttempt: await this.getObsValue(combinedObs, [resuscitationAttempt]),
      resuscitationType: await this.getObsValue(combinedObs, [resuscitationType]),
      vitaminKGiven: await this.getObsValue(combinedObs, [vitaminKGiven]),
      tetracyclineEyeOintment: await this.getObsValue(combinedObs, [tetracyclineEyeOintment]),
      chlorhexidine: await this.getObsValue(combinedObs, [chlorhexidine]),
      nevirapineGiven: await this.getObsValue(combinedObs, [nevirapineGiven])
    };
  }
  static async getBabyData(motherPatientId) {
    console.log("[MNH Service] ===== START: Fetching data for mother patient ID:", motherPatientId);
    const fetchPatientRecord = async (patientId) => {
      const url = `/patients/${patientId}/get_patient_record`;
      console.log("[MNH Service] API URL:", url);
      console.log("[MNH Service] API params:", { patient_id: patientId });
      return Service.getJson(url, { patient_id: patientId });
    };
    const patientRecord = await fetchPatientRecord(motherPatientId);
    console.log("[MNH Service] Patient record fetched:", patientRecord ? "Yes" : "No");
    console.log("[MNH Service] Full patient record keys:", patientRecord ? Object.keys(patientRecord) : "null");
    console.log("[MNH Service] Patient ID in record:", patientRecord?.patientID || patientRecord?.patient_id);
    console.log("[MNH Service] Person ID in record:", patientRecord?.personInformation?.person_id);
    console.log("[MNH Service] Patient name:", patientRecord?.firstName, patientRecord?.lastName);
    console.log("[MNH Service] Has observations:", patientRecord?.observations ? `Yes (${patientRecord.observations.length})` : "No");
    if (patientRecord?.observations) {
      console.log("[MNH Service] Observation encounter types:", [...new Set(patientRecord.observations.map((o) => o.encounter_type))]);
    }
    const dateOfDelivery = await ConceptService.getConceptID("Date of delivery");
    const timeOfDelivery = await ConceptService.getConceptID("Time of delivery");
    const modeOfDelivery = await ConceptService.getConceptID("Mode of delivery");
    const placeOfDelivery = await ConceptService.getConceptID("Place of delivery");
    const babyGeneralCondition = await ConceptService.getConceptID("Baby general condition at birth");
    const numberOfBabies = await ConceptService.getConceptID("Number of babies");
    const gravida = await ConceptService.getConceptID("Gravida");
    const parity = await ConceptService.getConceptID("Parity");
    const gestationMethod = await ConceptService.getConceptID("Gestation age to be used");
    const gestationAgeWeeks = await ConceptService.getConceptID("Gestation in weeks");
    const numberOfANCVisits = await ConceptService.getConceptID("Number of previous anc contacts");
    const membranesRuptured = await ConceptService.getConceptID("State of membranes");
    const dateMembranesRuptured = await ConceptService.getConceptID("Date membranes ruptured");
    const timeMembranesRuptured = await ConceptService.getConceptID("Time membranes ruptured");
    const stateOfLiquor = await ConceptService.getConceptID("State of liquor");
    const spDosesGiven = await ConceptService.getConceptID("number of SP tablets given");
    const ironSupplementation = await ConceptService.getConceptID("Iron prescription");
    const ironSupplementationDosage = await ConceptService.getConceptID("Type of Iron supplement dosage");
    const ironSupplementationAmountTillDelivery = await ConceptService.getConceptID("iron Amount");
    const folicAcidPrescription = await ConceptService.getConceptID("Folic acid");
    const folicAcidDosage = await ConceptService.getConceptID("Amount of Folic acid");
    const hivStatus = await ConceptService.getConceptID("HIV test");
    const hivTestDate = await ConceptService.getConceptID("HIV test date");
    const syphilisTest = await ConceptService.getConceptID("Syphilis Test Result");
    const hepatitisBTest = await ConceptService.getConceptID("Hepatitis B");
    const maternalOutcome = await ConceptService.getConceptID("maternal outcome status");
    const pncStatusOfMother = await ConceptService.getConceptID("Status of the mother");
    const deliveryDetailsObs = await ObservationService.getLatestObsByEncounterId(205, patientRecord);
    console.log("[MNH Service] Delivery details obs:", deliveryDetailsObs?.length || 0);
    const obstetricHistoryObs = await ObservationService.getLatestObsByEncounterId(82, patientRecord);
    console.log("[MNH Service] Obstetric history obs:", obstetricHistoryObs?.length || 0);
    const currentPregnancyObs = await ObservationService.getLatestObsByEncounterId(81, patientRecord);
    console.log("[MNH Service] Current pregnancy obs:", currentPregnancyObs?.length || 0);
    const previousANCContactsObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.ANC_ENROLLMENT, patientRecord);
    const labourAssessmentObs = await ObservationService.getLatestObsByEncounterId(219, patientRecord);
    const continuousMonitoringObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.Continous_Monitoring, patientRecord);
    const spDosesObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.TREATMENT, patientRecord);
    const chronicConditionsObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.MEDICAL_HISTORY, patientRecord);
    const labResultsObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.LAB, patientRecord);
    const maternalOutcomeObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.END_LABOUR_PROGRAM, patientRecord);
    const pncStatusOfMotherObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.PNC_VISIT, patientRecord);
    const combinedObs = [
      ...deliveryDetailsObs || [],
      ...obstetricHistoryObs || [],
      ...currentPregnancyObs || [],
      ...previousANCContactsObs || [],
      ...labourAssessmentObs || [],
      ...continuousMonitoringObs || [],
      ...spDosesObs || [],
      ...chronicConditionsObs || [],
      ...labResultsObs || [],
      ...maternalOutcomeObs || [],
      ...pncStatusOfMotherObs || []
    ];
    console.log("[MNH Service] Combined observations:", combinedObs.length);
    console.log("[MNH Service] Sample obs:", combinedObs.slice(0, 3));
    return {
      dateOfDelivery: await this.getObsValue(combinedObs, [dateOfDelivery]),
      timeOfDelivery: await this.getObsValue(combinedObs, [timeOfDelivery]),
      modeOfDelivery: await this.getObsValue(combinedObs, [modeOfDelivery]),
      placeOfDelivery: await this.getObsValue(combinedObs, [placeOfDelivery]),
      babyGeneralCondition: await this.getObsValue(combinedObs, [babyGeneralCondition]),
      numberOfBabies: await this.getObsValue(combinedObs, [numberOfBabies]),
      gravida: await this.getObsValue(combinedObs, [gravida]),
      parity: await this.getObsValue(combinedObs, [parity]),
      gestationMethod: await this.getObsValue(combinedObs, [gestationMethod]),
      gestationAgeWeeks: await this.getObsValue(combinedObs, [gestationAgeWeeks]),
      numberOfANCVisits: await this.getObsValue(previousANCContactsObs, [numberOfANCVisits]),
      membranesRuptured: await this.getObsValue(labourAssessmentObs, [membranesRuptured]),
      dateMembranesRuptured: await this.getObsValue(labourAssessmentObs, [dateMembranesRuptured]),
      timeMembranesRuptured: await this.getObsValue(labourAssessmentObs, [timeMembranesRuptured]),
      stateOfLiquor: await this.getObsValue(continuousMonitoringObs, [stateOfLiquor]),
      spDoses: await this.getObsValue(combinedObs, [spDosesGiven]),
      ironSupplementation: await this.getObsValue(combinedObs, [ironSupplementation]),
      ironSupplementationDosage: await this.getObsValue(combinedObs, [ironSupplementationDosage]),
      ironSupplementationAmountTillDelivery: await this.getObsValue(combinedObs, [ironSupplementationAmountTillDelivery]),
      folicAcidPrescription: await this.getObsValue(combinedObs, [folicAcidPrescription]),
      folicAcidDosage: await this.getObsValue(combinedObs, [folicAcidDosage]),
      hivStatus: await this.getObsValue(combinedObs, [hivStatus]),
      hivTestDate: await this.getObsValue(chronicConditionsObs, [hivTestDate]),
      syphilisTest: await this.getObsValue(combinedObs, [syphilisTest]),
      hepatitisBTest: await this.getObsValue(combinedObs, [hepatitisBTest]),
      maternalOutcome: await this.getObsValue(combinedObs, [maternalOutcome]),
      pncStatusOfMother: await this.getObsValue(combinedObs, [pncStatusOfMother])
    };
  }
  static async getObsValue(obs, conceptIds) {
    const conceptSet = new Set((conceptIds || []).filter((id) => typeof id === "number"));
    if (!conceptSet.size || !Array.isArray(obs) || obs.length === 0) return null;
    const matchingObs = obs.filter((item) => conceptSet.has(item?.concept_id));
    if (!matchingObs.length) return null;
    const getTime = (item) => {
      const raw = item?.obs_datetime ?? item?.date_created ?? item?.encounter_datetime;
      const parsed = raw ? new Date(raw).getTime() : 0;
      return Number.isFinite(parsed) ? parsed : 0;
    };
    const obsValue = matchingObs.sort((a, b) => {
      const timeDiff = getTime(b) - getTime(a);
      if (timeDiff !== 0) return timeDiff;
      return (b?.obs_id ?? 0) - (a?.obs_id ?? 0);
    })[0];
    if (obsValue.value_coded) {
      const conceptName = await ConceptService.getConceptName(obsValue.value_coded);
      return conceptName;
    }
    if (obsValue.value_text != null && obsValue.value_text !== "") {
      return obsValue.value_text;
    }
    if (obsValue.value_numeric != null) {
      return obsValue.value_numeric;
    }
    if (obsValue.value_datetime != null && obsValue.value_datetime !== "") {
      return obsValue.value_datetime;
    }
    return null;
  }
}

const _hoisted_1$2 = { class: "mother-search-container" };
const _hoisted_2$1 = { class: "header-with-icon" };
const _hoisted_3$1 = { class: "icon-wrapper" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "search-with-button" };
const _hoisted_6$1 = { class: "search-wrapper" };
const _hoisted_7$1 = {
  class: "barcode-btn",
  "aria-label": "Scan MRN"
};
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
const _hoisted_13$1 = { class: "mother-name" };
const _hoisted_14$1 = { class: "mother-dob" };
const _hoisted_15$1 = { class: "mother-gender" };
const _hoisted_16$1 = { class: "result-details" };
const _hoisted_17$1 = {
  key: 0,
  class: "mother-address"
};
const _hoisted_18$1 = {
  key: 1,
  class: "mother-phone"
};
const _hoisted_19$1 = {
  key: 0,
  class: "pagination"
};
const _hoisted_20$1 = { class: "page-info" };
const _hoisted_21$1 = {
  key: 2,
  class: "no-results"
};
const _hoisted_22$1 = {
  key: 1,
  class: "selected-mother"
};
const _hoisted_23$1 = { class: "selected-card" };
const _hoisted_24$1 = { class: "selected-card-top" };
const _hoisted_25$1 = { class: "selected-identity" };
const _hoisted_26$1 = { class: "selected-name-block" };
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
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MotherSearch",
  setup(__props, { expose: __expose }) {
    const router = useRouter();
    const route = useRoute();
    const formData = inject(neonatalEnrollmentFormKey);
    const enrollmentStore = useNeonatalEnrollmentStore();
    const patientSearchService = new PatientSearchService();
    const searchQuery = ref("");
    const isSearching = ref(false);
    const searchResults = ref([]);
    const selectedMother = ref(null);
    const isFetchingMnh = ref(false);
    const lastMnhPatientId = ref(null);
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
    const normalizeGender = (gender) => {
      if (!gender) return "";
      if (typeof gender === "string") return gender;
      return gender.value ?? gender.label ?? "";
    };
    const resolvePatientId = (mother) => {
      const candidate = mother?.patient_id || mother?.patientID || mother?.patientId || mother?.ID || mother?.person_id || mother?.person?.person_id || mother?.personInformation?.person_id;
      return typeof candidate === "number" ? candidate : Number(candidate) || void 0;
    };
    const normalizeMother = (mother) => {
      const patientID = resolvePatientId(mother);
      return {
        ...mother,
        patientID
      };
    };
    const checkAndAutoSelectMother = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      const motherData = enrollmentStore.motherData;
      if (motherData && motherData.patientID) {
        const normalized = normalizeMother(motherData);
        if (isUnderageMother(normalized.birthdate)) {
          toastWarning("Selected person is under 5 years old and cannot be registered as a mother.");
          enrollmentStore.clearEnrollmentContext();
          return;
        }
        selectedMother.value = {
          ...normalized,
          phone: formatPhone(normalized.phone)
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
    const fetchMnhDataForMother = async (patientId) => {
      if (!patientId || isFetchingMnh.value || lastMnhPatientId.value === patientId) return;
      isFetchingMnh.value = true;
      lastMnhPatientId.value = patientId;
      try {
        const data = await MnhMaternalDataService.getBabyData(patientId);
        console.log("MNH DATAaaaaaa", data);
        enrollmentStore.setMnhData(data);
      } catch (error) {
        console.error("Failed to load MNH data for mother:", error);
        enrollmentStore.setMnhData(null);
      } finally {
        isFetchingMnh.value = false;
      }
    };
    watch(selectedMother, (newMother) => {
      if (newMother && formData) {
        formData.motherPatientId = newMother.patientID;
        formData.motherName = `${newMother.firstName} ${newMother.middleName || ""} ${newMother.lastName}`.trim();
        formData.motherNationalId = newMother.nationalId || "";
      }
      if (newMother?.patientID) {
        fetchMnhDataForMother(newMother.patientID);
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
          gender: "",
          page: "1",
          per_page: "50"
        };
        const hasOfflineAccess = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
        const shouldUseOffline = !Service.getAPIStatus() && hasOfflineAccess;
        if (shouldUseOffline) {
          const offlineResult = await patientSearchService.searchOfflinePatients(searchPayload);
          const offlinePatients = Array.isArray(offlineResult) ? offlineResult : offlineResult?.records;
          searchResults.value = Array.isArray(offlinePatients) ? offlinePatients.map((patient) => {
            const person2 = patient.personInformation || {};
            return {
              patientID: patient.patientID || patient.ID || person2.person_id,
              firstName: person2.given_name || "",
              middleName: person2.middle_name || "",
              lastName: person2.family_name || "",
              gender: normalizeGender(person2.gender),
              birthdate: person2.birthdate,
              nationalId: patient.national_id || "",
              address: person2.addresses?.[0] || person2.current_address || {},
              phone: formatPhone(person2.cell_phone_number || person2.phone_number || "")
            };
          }).filter((p) => p.gender === "F" || p.gender === "Female").filter((mother) => !isUnderageMother(mother.birthdate)) : [];
        } else {
          const response = await PatientService.search(searchPayload);
          let onlineResults = Array.isArray(response) ? response.filter((p) => {
            const gender = normalizeGender(p.person?.gender || p.gender);
            return gender === "F" || gender === "Female";
          }).map((patient) => {
            const person2 = patient.person;
            const name = person2.names?.[0] || {};
            const address = person2.addresses?.[0] || {};
            const phoneAttribute = person2.person_attributes?.find((attr) => {
              const typeName = attr.person_attribute_type?.name || attr.type?.name || attr.attribute_type_name || attr.attribute_type;
              return typeName === "Cell Phone Number";
            });
            return normalizeMother({
              // Prefer patient_id (internal patient ID) over person_id
              patientID: patient.patient_id || patient.patientID || person2.person_id,
              firstName: name.given_name || "",
              middleName: name.middle_name || "",
              lastName: name.family_name || "",
              gender: normalizeGender(person2.gender),
              birthdate: person2.birthdate,
              nationalId: patient.national_id || "",
              address,
              phone: formatPhone(phoneAttribute?.value || "")
            });
          }).filter((mother) => !isUnderageMother(mother.birthdate)) : [];
          if (onlineResults.length === 0 && hasOfflineAccess) {
            const offlineResult = await patientSearchService.searchOfflinePatients(searchPayload);
            const offlinePatients = Array.isArray(offlineResult) ? offlineResult : offlineResult?.records;
            searchResults.value = Array.isArray(offlinePatients) ? offlinePatients.map((patient) => {
              const person2 = patient.personInformation || {};
              return normalizeMother({
                patientID: patient.patientID || patient.ID || person2.person_id,
                firstName: person2.given_name || "",
                middleName: person2.middle_name || "",
                lastName: person2.family_name || "",
                gender: normalizeGender(person2.gender),
                birthdate: person2.birthdate,
                nationalId: patient.national_id || "",
                address: person2.addresses?.[0] || person2.current_address || {},
                phone: formatPhone(person2.cell_phone_number || person2.phone_number || "")
              });
            }).filter((p) => p.gender === "F" || p.gender === "Female").filter((mother) => !isUnderageMother(mother.birthdate)) : [];
          } else {
            searchResults.value = onlineResults;
          }
        }
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
      const normalized = normalizeMother(mother);
      selectedMother.value = normalized;
      searchQuery.value = "";
      enrollmentStore.motherData = normalized;
      enrollmentStore.setMnhData(null);
      if (formData) {
        formData.motherPatientId = normalized.patientID;
        formData.motherName = `${normalized.firstName} ${normalized.middleName || ""} ${normalized.lastName}`.trim();
        formData.motherNationalId = normalized.nationalId || "";
      }
    };
    const clearSelection = () => {
      selectedMother.value = null;
      enrollmentStore.motherData = void 0;
      enrollmentStore.setMnhData(null);
      lastMnhPatientId.value = null;
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", null, [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3$1, [
                  createBaseVNode("img", {
                    src: unref(IMAGES).icons.care,
                    alt: "Care",
                    class: "header-icon"
                  }, null, 8, _hoisted_4$1),
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
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("div", _hoisted_6$1, [
                  createVNode(unref(IonSearchbar), {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    placeholder: "Search for mother's Name or scan MRN",
                    onIonInput: handleSearchInput,
                    debounce: 300,
                    "show-clear-button": "focus",
                    class: "search-input"
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", _hoisted_7$1, [
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
              searchQuery.value && searchQuery.value.length > 0 && !selectedMother.value ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                isSearching.value ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
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
                ])) : searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedResults.value, (mother, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: mother.patientID || index,
                      class: "result-item",
                      onClick: ($event) => selectMother(mother)
                    }, [
                      createBaseVNode("div", _hoisted_12$1, [
                        createBaseVNode("span", _hoisted_13$1, toDisplayString(formatFullName(mother.firstName, mother.middleName, mother.lastName)), 1),
                        _cache[6] || (_cache[6] = createBaseVNode("span", { class: "dot-separator" }, "·", -1)),
                        createBaseVNode("span", _hoisted_14$1, "DOB " + toDisplayString(formatDate(mother.birthdate)), 1),
                        _cache[7] || (_cache[7] = createBaseVNode("span", { class: "dot-separator" }, "·", -1)),
                        createBaseVNode("span", _hoisted_15$1, toDisplayString(mother.gender === "F" ? "Female" : mother.gender), 1)
                      ]),
                      createBaseVNode("div", _hoisted_16$1, [
                        mother.address ? (openBlock(), createElementBlock("p", _hoisted_17$1, [
                          _cache[8] || (_cache[8] = createBaseVNode("strong", null, "Current Address:", -1)),
                          createTextVNode(" " + toDisplayString(formatAddress(mother.address)), 1)
                        ])) : createCommentVNode("", true),
                        mother.phone ? (openBlock(), createElementBlock("p", _hoisted_18$1, [
                          createVNode(unref(IonIcon), { icon: unref(callOutline) }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(formatPhone(mother.phone)), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 8, _hoisted_11$1);
                  }), 128)),
                  totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_19$1, [
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
                    createBaseVNode("span", _hoisted_20$1, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
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
                ])) : (openBlock(), createElementBlock("div", _hoisted_21$1, [
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
              selectedMother.value ? (openBlock(), createElementBlock("div", _hoisted_22$1, [
                createBaseVNode("div", _hoisted_23$1, [
                  createBaseVNode("div", _hoisted_24$1, [
                    createBaseVNode("div", _hoisted_25$1, [
                      createBaseVNode("div", _hoisted_26$1, [
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

const MotherSearch = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d33a4fe5"]]);

const _hoisted_1$1 = {
  key: 0,
  class: "mnh-data-summary",
  "data-testid": "mnh-summary"
};
const _hoisted_2 = { class: "summary-header" };
const _hoisted_3 = { class: "header-icon-wrapper" };
const _hoisted_4 = { class: "header-text" };
const _hoisted_5 = { class: "mother-name" };
const _hoisted_6 = { class: "header-actions" };
const _hoisted_7 = ["disabled"];
const _hoisted_8 = { class: "view-toggle" };
const _hoisted_9 = { class: "section-title" };
const _hoisted_10 = { class: "section-icon-wrap" };
const _hoisted_11 = ["src", "alt"];
const _hoisted_12 = { class: "info-grid" };
const _hoisted_13 = { class: "label" };
const _hoisted_14 = { key: 0 };
const _hoisted_15 = {
  key: 1,
  class: "missing-indicator"
};
const _hoisted_16 = {
  key: 1,
  class: "mnh-data-summary skeleton-loading"
};
const _hoisted_17 = { class: "summary-grid" };
const _hoisted_18 = { class: "summary-section" };
const _hoisted_19 = { class: "info-grid" };
const _hoisted_20 = { class: "summary-section" };
const _hoisted_21 = { class: "info-grid" };
const _hoisted_22 = { class: "summary-section" };
const _hoisted_23 = { class: "info-grid" };
const _hoisted_24 = { class: "summary-section" };
const _hoisted_25 = { class: "info-grid" };
const _hoisted_26 = {
  key: 2,
  class: "mnh-no-data"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MotherMnhDataSummary",
  props: {
    motherPatientId: {}
  },
  setup(__props) {
    const props = __props;
    const enrollmentStore = useNeonatalEnrollmentStore();
    const mnhData = ref(null);
    const isLoading = ref(false);
    const viewMode = ref("grid");
    const effectiveMotherPatientId = computed(() => {
      return props.motherPatientId || enrollmentStore.motherData?.patientID || enrollmentStore.enrollmentForm?.motherPatientId || null;
    });
    const motherName = computed(() => {
      const motherData = enrollmentStore.motherData;
      if (!motherData) return "Mother";
      const firstName = motherData.given_name || motherData.firstName || "";
      const lastName = motherData.family_name || motherData.lastName || "";
      const fullName = `${firstName} ${lastName}`.trim();
      return fullName || "Mother";
    });
    const hasMnhData = computed(() => {
      if (!mnhData.value) {
        console.log("[MNH Summary] hasMnhData: false (no data)");
        return false;
      }
      const hasData = Object.values(mnhData.value).some((val) => val != null && val !== "");
      console.log("[MNH Summary] hasMnhData:", hasData, "Data keys:", Object.keys(mnhData.value));
      return hasData;
    });
    const formatDate = (value) => {
      if (!value) return null;
      try {
        return HisDate.toStandardHisDisplayFormat(value);
      } catch {
        return String(value);
      }
    };
    const formatTime = (value) => {
      if (!value) return null;
      return String(value);
    };
    const getStatusClass = (status) => {
      const statusLower = String(status || "").toLowerCase();
      if (statusLower.includes("positive") || statusLower.includes("reactive")) {
        return "status-positive";
      }
      if (statusLower.includes("negative") || statusLower.includes("non-reactive")) {
        return "status-negative";
      }
      return "";
    };
    const visibleSections = computed(() => {
      if (!mnhData.value) return [];
      const sections = [
        {
          key: "delivery",
          title: "Delivery Information",
          icon: IMAGES.icons.deliveryTime,
          fields: [
            {
              key: "dateOfDelivery",
              label: "Date of Delivery:",
              value: formatDate(mnhData.value.dateOfDelivery)
            },
            {
              key: "timeOfDelivery",
              label: "Time of Delivery:",
              value: formatTime(mnhData.value.timeOfDelivery)
            },
            {
              key: "placeOfDelivery",
              label: "Place of Delivery:",
              value: mnhData.value.placeOfDelivery
            },
            {
              key: "modeOfDelivery",
              label: "Mode of Delivery:",
              value: mnhData.value.modeOfDelivery
            },
            {
              key: "numberOfBabies",
              label: "Number of Babies:",
              value: mnhData.value.numberOfBabies
            }
          ]
        },
        {
          key: "pregnancy",
          title: "Pregnancy Information",
          icon: IMAGES.icons.pregnancy,
          fields: [
            {
              key: "gestationAgeWeeks",
              label: "Gestation Age:",
              value: mnhData.value.gestationAgeWeeks ? `${mnhData.value.gestationAgeWeeks} weeks` : null
            },
            {
              key: "gestationMethod",
              label: "Gestation Method:",
              value: mnhData.value.gestationMethod
            },
            {
              key: "gravida",
              label: "Gravida:",
              value: mnhData.value.gravida
            },
            {
              key: "parity",
              label: "Parity:",
              value: mnhData.value.parity
            },
            {
              key: "numberOfANCVisits",
              label: "ANC Visits:",
              value: mnhData.value.numberOfANCVisits
            }
          ]
        },
        {
          key: "tests",
          title: "Test Results",
          icon: IMAGES.icons.labTest,
          fields: [
            {
              key: "hivStatus",
              label: "HIV Status:",
              value: mnhData.value.hivStatus,
              cssClass: getStatusClass(mnhData.value.hivStatus)
            },
            {
              key: "hivTestDate",
              label: "HIV Test Date:",
              value: formatDate(mnhData.value.hivTestDate)
            },
            {
              key: "syphilisTest",
              label: "Syphilis Test:",
              value: mnhData.value.syphilisTest,
              cssClass: getStatusClass(mnhData.value.syphilisTest)
            },
            {
              key: "hepatitisBTest",
              label: "Hepatitis B Test:",
              value: mnhData.value.hepatitisBTest,
              cssClass: getStatusClass(mnhData.value.hepatitisBTest)
            }
          ]
        },
        {
          key: "maternal",
          title: "Maternal Status",
          icon: IMAGES.icons.maternity,
          fields: [
            {
              key: "maternalStatus",
              label: "Mother's Status:",
              value: mnhData.value.maternalOutcome || mnhData.value.pncStatusOfMother
            }
          ]
        },
        {
          key: "labour",
          title: "Labour Details",
          icon: IMAGES.icons.babyWrapped,
          fields: [
            {
              key: "membranesRuptured",
              label: "Membranes:",
              value: mnhData.value.membranesRuptured
            },
            {
              key: "stateOfLiquor",
              label: "Liquor State:",
              value: mnhData.value.stateOfLiquor
            }
          ]
        },
        {
          key: "supplements",
          title: "Supplements",
          icon: IMAGES.icons.supplement,
          fields: [
            {
              key: "ironSupplementation",
              label: "Iron:",
              value: mnhData.value.ironSupplementation
            },
            {
              key: "folicAcidPrescription",
              label: "Folic Acid:",
              value: mnhData.value.folicAcidPrescription
            },
            {
              key: "spDoses",
              label: "SP Doses:",
              value: mnhData.value.spDoses
            }
          ]
        }
      ];
      return sections.filter(
        (section) => section.fields.some((field) => field.value != null && field.value !== "")
      );
    });
    const loadMnhData = async () => {
      console.log("[MNH Summary] Loading MNH data for mother patient ID:", effectiveMotherPatientId.value);
      if (!effectiveMotherPatientId.value) {
        console.log("[MNH Summary] No mother patient ID provided");
        mnhData.value = null;
        enrollmentStore.setMnhData(null);
        return;
      }
      isLoading.value = true;
      try {
        console.log("[MNH Summary] Fetching MNH data...");
        const data = await MnhMaternalDataService.getBabyData(effectiveMotherPatientId.value);
        console.log("[MNH Summary] MNH data received:", data);
        mnhData.value = data;
        console.log("[MNH Summary] Has MNH data:", hasMnhData.value);
        enrollmentStore.setMnhData(data);
        enrollmentStore.setMotherHasMnhData(true);
      } catch (error) {
        console.error("[MNH Summary] Failed to load MNH data:", error);
        mnhData.value = null;
        enrollmentStore.setMnhData(null);
        enrollmentStore.setMotherHasMnhData(false);
      } finally {
        isLoading.value = false;
        console.log("[MNH Summary] Loading complete. Data:", mnhData.value);
        console.log("[MNH Summary] isLoading:", isLoading.value);
        console.log("[MNH Summary] Will render:", !!(mnhData.value && hasMnhData.value));
      }
    };
    const handleRefresh = async () => {
      await loadMnhData();
    };
    watch(() => effectiveMotherPatientId.value, loadMnhData, { immediate: true });
    onMounted(() => {
      if (effectiveMotherPatientId.value) {
        loadMnhData();
      }
    });
    return (_ctx, _cache) => {
      return mnhData.value && hasMnhData.value && !isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(IonIcon), {
              icon: unref(linkOutline),
              class: "header-icon"
            }, null, 8, ["icon"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("h3", null, [
              createBaseVNode("span", _hoisted_5, toDisplayString(motherName.value), 1)
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("p", { class: "subtitle" }, " Data retrieved from maternal health records ", -1))
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("button", {
              onClick: handleRefresh,
              class: "refresh-btn",
              disabled: isLoading.value,
              "aria-label": "Refresh data"
            }, [
              createVNode(unref(IonIcon), {
                icon: unref(refreshOutline),
                class: normalizeClass({ "spin": isLoading.value })
              }, null, 8, ["icon", "class"])
            ], 8, _hoisted_7),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => viewMode.value = "grid"),
                class: normalizeClass([{ active: viewMode.value === "grid" }, "toggle-btn toggle-btn-left"]),
                "aria-label": "Grid view"
              }, [
                createVNode(unref(IonIcon), { icon: unref(gridOutline) }, null, 8, ["icon"])
              ], 2),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => viewMode.value = "list"),
                class: normalizeClass([{ active: viewMode.value === "list" }, "toggle-btn toggle-btn-right"]),
                "aria-label": "List view"
              }, [
                createVNode(unref(IonIcon), { icon: unref(listOutline) }, null, 8, ["icon"])
              ], 2)
            ])
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["summary-grid", { "list-view": viewMode.value === "list" }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(visibleSections.value, (section) => {
            return openBlock(), createElementBlock("div", {
              key: section.key,
              class: "summary-section"
            }, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("img", {
                    src: section.icon,
                    alt: section.title,
                    class: "section-icon"
                  }, null, 8, _hoisted_11)
                ]),
                createBaseVNode("h4", null, toDisplayString(section.title), 1)
              ]),
              createBaseVNode("div", _hoisted_12, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(section.fields, (field) => {
                  return openBlock(), createElementBlock("div", {
                    key: field.key,
                    class: "info-item"
                  }, [
                    createBaseVNode("span", _hoisted_13, toDisplayString(field.label), 1),
                    createBaseVNode("span", {
                      class: normalizeClass(["value", [field.cssClass, { "missing-value": !field.value }]])
                    }, [
                      field.value ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(field.value), 1)) : (openBlock(), createElementBlock("span", _hoisted_15, [
                        createVNode(unref(IonIcon), { icon: unref(alertCircleOutline) }, null, 8, ["icon"]),
                        _cache[3] || (_cache[3] = createTextVNode(" Not recorded ", -1))
                      ]))
                    ], 2)
                  ]);
                }), 128))
              ])
            ]);
          }), 128))
        ], 2)
      ])) : isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
        _cache[12] || (_cache[12] = createStaticVNode('<div class="summary-header" data-v-1221b9fd><div class="header-icon-wrapper skeleton-icon-wrapper" data-v-1221b9fd><div class="skeleton skeleton-icon" data-v-1221b9fd></div></div><div class="header-text" data-v-1221b9fd><div class="skeleton-title-wrapper" data-v-1221b9fd><div class="skeleton skeleton-name" data-v-1221b9fd></div><div class="skeleton skeleton-badge" data-v-1221b9fd></div></div><div class="skeleton skeleton-subtitle" data-v-1221b9fd></div></div></div>', 1)),
        createBaseVNode("div", _hoisted_17, [
          createBaseVNode("div", _hoisted_18, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "section-title" }, [
              createBaseVNode("div", { class: "skeleton skeleton-section-icon" }),
              createBaseVNode("div", { class: "skeleton skeleton-section-title" })
            ], -1)),
            createBaseVNode("div", _hoisted_19, [
              (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
                return createBaseVNode("div", {
                  class: "info-item",
                  key: `s1-${i}`
                }, [..._cache[4] || (_cache[4] = [
                  createBaseVNode("div", { class: "skeleton skeleton-label" }, null, -1),
                  createBaseVNode("div", { class: "skeleton skeleton-value" }, null, -1)
                ])]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            _cache[7] || (_cache[7] = createBaseVNode("div", { class: "section-title" }, [
              createBaseVNode("div", { class: "skeleton skeleton-section-icon" }),
              createBaseVNode("div", { class: "skeleton skeleton-section-title" })
            ], -1)),
            createBaseVNode("div", _hoisted_21, [
              (openBlock(), createElementBlock(Fragment, null, renderList(4, (i) => {
                return createBaseVNode("div", {
                  class: "info-item",
                  key: `s2-${i}`
                }, [..._cache[6] || (_cache[6] = [
                  createBaseVNode("div", { class: "skeleton skeleton-label" }, null, -1),
                  createBaseVNode("div", { class: "skeleton skeleton-value" }, null, -1)
                ])]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_22, [
            _cache[9] || (_cache[9] = createBaseVNode("div", { class: "section-title" }, [
              createBaseVNode("div", { class: "skeleton skeleton-section-icon" }),
              createBaseVNode("div", { class: "skeleton skeleton-section-title" })
            ], -1)),
            createBaseVNode("div", _hoisted_23, [
              (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
                return createBaseVNode("div", {
                  class: "info-item",
                  key: `s3-${i}`
                }, [..._cache[8] || (_cache[8] = [
                  createBaseVNode("div", { class: "skeleton skeleton-label" }, null, -1),
                  createBaseVNode("div", { class: "skeleton skeleton-value" }, null, -1)
                ])]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            _cache[11] || (_cache[11] = createBaseVNode("div", { class: "section-title" }, [
              createBaseVNode("div", { class: "skeleton skeleton-section-icon" }),
              createBaseVNode("div", { class: "skeleton skeleton-section-title" })
            ], -1)),
            createBaseVNode("div", _hoisted_25, [
              (openBlock(), createElementBlock(Fragment, null, renderList(2, (i) => {
                return createBaseVNode("div", {
                  class: "info-item",
                  key: `s4-${i}`
                }, [..._cache[10] || (_cache[10] = [
                  createBaseVNode("div", { class: "skeleton skeleton-label" }, null, -1),
                  createBaseVNode("div", { class: "skeleton skeleton-value" }, null, -1)
                ])]);
              }), 64))
            ])
          ])
        ])
      ])) : mnhData.value && !hasMnhData.value ? (openBlock(), createElementBlock("div", _hoisted_26, [..._cache[13] || (_cache[13] = [
        createBaseVNode("p", null, "No MNH data available for this mother.", -1)
      ])])) : createCommentVNode("", true);
    };
  }
});

const MotherMnhDataSummary = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1221b9fd"]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Pregnancy",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[neonatalEnrollmentSectionIndex.pregnancy].formData;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    useNeonatalEnrollmentStore();
    const syncFormValues = (values) => {
      if (!enrollmentForm) return;
      enrollmentForm.gestationWeeks = normalizeTextValue(values.gestationWeeks || "");
      enrollmentForm.steroidsGiven = values.steroidsGiven || "";
      enrollmentForm.gestationMethodAssessment = extractOptionValue(values.gestationMethodAssessment) || "";
      enrollmentForm.ultraSoundScanning = values.ultraSoundScanning || "";
      const onsetDate = normalizeTextValue(values.onsetOfLaborDate || "");
      const onsetTime = normalizeTextValue(values.onsetOfLaborTime || "");
      enrollmentForm.onsetOfLabor = onsetDate && onsetTime ? `${onsetDate} ${onsetTime}` : onsetDate || onsetTime;
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
      return openBlock(), createElementBlock("div", null, [
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const _hoisted_1 = { class: "mother-enrollment-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MotherEnrollmentDetails",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[neonatalEnrollmentSectionIndex.motherProfiling].formData;
    const conditionalRules = motherEnrollmentRules;
    const enrollmentForm = inject(neonatalEnrollmentFormKey);
    useNeonatalEnrollmentStore();
    const previousValues = ref({});
    const testAlerts = [
      {
        field: "motherHivStatus",
        key: "hivStatus",
        title: "HIV Re-test Required",
        message: "HIV status is Unknown. Please arrange for mother to do a re-test."
      },
      {
        field: "motherVdrlResult",
        key: "vdrlResult",
        title: "Syphilis Re-test Required",
        message: "Syphilis status is Unknown. Please arrange for mother to do a re-test."
      },
      {
        field: "motherHepatitisResult",
        key: "hepatitisResult",
        title: "Hepatitis Re-test Required",
        message: "Hepatitis status is Unknown. Please arrange for mother to do a re-test."
      }
    ];
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
      testAlerts.forEach(({ field, key, title, message }) => {
        const currentValue = extractOptionValue(values[field]) || "";
        if (currentValue === "Unknown" && previousValues.value[key] !== "Unknown") {
          infoAlert(message, title);
        }
        previousValues.value[key] = currentValue;
      });
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StandardForm, {
          formData: unref(formData),
          conditionalRules: unref(conditionalRules),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "conditionalRules"])
      ]);
    };
  }
});

const MotherEnrollmentDetails = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-78380eb6"]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NvpGuideline",
  setup(__props) {
    const formData = neonatalEnrollmentSections[neonatalEnrollmentSectionIndex.maternalSerostatus].formData;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, { formData: unref(formData) }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KnownMedicalConditions",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formData = neonatalEnrollmentSections[neonatalEnrollmentSectionIndex.knownMedicalConditions].formData;
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
    ReferralInformation: _sfc_main$8,
    BirthAssessment: _sfc_main$7,
    MotherSearch,
    MotherMnhDataSummary,
    Pregnancy: _sfc_main$4,
    MotherEnrollmentDetails,
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
      if (typeof rawId === "string" && rawId.startsWith("temp_")) {
        return rawId;
      }
      const patientId = Number(rawId);
      return Number.isFinite(patientId) ? patientId : null;
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
    const shouldShowSection = (configIndex) => {
      const section = neonatalEnrollmentSections[configIndex];
      if (!section) return false;
      if (typeof section.skipCondition === "function" && section.skipCondition(enrollmentStore.enrollmentForm)) {
        return false;
      }
      const mnhData = enrollmentStore.mnhData;
      const sectionKeyByIndex = {
        [neonatalEnrollmentSectionIndex.birthDetails]: "birthDetails",
        [neonatalEnrollmentSectionIndex.birthAssessment]: "birthAssessment",
        [neonatalEnrollmentSectionIndex.pregnancy]: "pregnancy",
        [neonatalEnrollmentSectionIndex.motherProfiling]: "motherProfiling"
      };
      const sectionKey = sectionKeyByIndex[configIndex];
      if (!sectionKey || !mnhData) return true;
      if (sectionKey === "pregnancy" || sectionKey === "motherProfiling") return true;
      const filtered = section.formData.filter((field) => {
        const fieldName = field?.name;
        if (!fieldName) return true;
        return !hasDataFromMnh(mnhData, fieldName, sectionKey);
      });
      return filtered.length > 0;
    };
    const stepperConfig = [
      {
        configIndex: neonatalEnrollmentSectionIndex.motherInfo,
        component: MotherSearch
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.mnhDataSummary,
        component: MotherMnhDataSummary
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.birthDetails,
        component: BirthDetails
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.referralInformation,
        component: _sfc_main$8
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.birthAssessment,
        component: _sfc_main$7
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.pregnancy,
        component: _sfc_main$4
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.motherProfiling,
        component: MotherEnrollmentDetails
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.maternalSerostatus,
        component: _sfc_main$2
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.knownMedicalConditions,
        component: _sfc_main$1
      },
      {
        configIndex: neonatalEnrollmentSectionIndex.summary,
        component: SummarySection
      }
    ];
    const visibleSteps = computed(
      () => stepperConfig.filter((step) => shouldShowSection(step.configIndex))
    );
    const buildWizardData = () => visibleSteps.value.map((step, index) => ({
      title: neonatalEnrollmentSections[step.configIndex].title,
      number: index + 1,
      checked: false,
      class: index === 0 ? "open_step common_step" : "common_step",
      last_step: index === visibleSteps.value.length - 1 ? "last_step" : ""
    }));
    const wizardData = ref(buildWizardData());
    watch(visibleSteps, () => {
      wizardData.value = buildWizardData();
    });
    const stepperData = computed(
      () => visibleSteps.value.map((step, index) => ({
        title: neonatalEnrollmentSections[step.configIndex].title,
        value: (index + 1).toString(),
        component: step.component,
        configIndex: step.configIndex
      }))
    );
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
      if (currentIndex === stepperData.value.length - 1) {
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
              }
            }
            await NeonatalService.enrollNeonate(
              patient.value.patientID,
              enrollmentFormData,
              HisDate.sessionDate()
            );
            await SetProgramService.userProgramData(patient.value.patientID);
            enrollmentStore.clearEnrollmentContext();
            toastSuccess("Neonate enrolled successfully");
            await new Promise((resolve) => setTimeout(resolve, 2e3));
            router.push("/neonatal/checkpoint");
          } catch (error) {
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
const Enrollment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-08ee8b77"]]);

export { Enrollment as default };
