import { v as defineComponent, d0 as addIcons, aK as useRouter, w as watch, f as ref, a3 as onMounted, z as createElementBlock, A as openBlock, C as createBaseVNode, J as createCommentVNode, a5 as normalizeClass, E as toDisplayString, B as createVNode, G as unref, a7 as IonInput, a6 as createTextVNode, M as IonIcon, K as Fragment, S as renderList, c as computed, d1 as arrowBackOutline, ce as personAddOutline, R as alertCircleOutline, an as informationCircleOutline, aw as searchOutline, ca as clipboardOutline, bv as personCircleOutline, bp as V, y as resolveComponent, P as createBlock, D as withCtx, cv as useRoute, bM as m, n as nextTick, aI as menuController, d2 as clipboard, d3 as thermometer, aM as people, d4 as person, d5 as add, cj as medkit, d6 as globe, d7 as document$1, d8 as colorPalette, d9 as chevronUpCircle, da as chevronForwardCircle, db as chevronDownCircle, dc as grid, bb as checkmark, bY as chevronBackOutline, bc as IonCardContent, b9 as IonCardTitle, ba as IonCardHeader, bL as IonCard, aA as IonCol, O as IonButton, ag as IonRow, aC as IonToolbar, bu as IonPage, I as IonHeader, aF as IonContent, r as reactive, aB as todayOutline, dd as timeOutline, a$ as locationOutline, de as womanOutline, df as manOutline, cK as idCardOutline, a_ as personOutline, cP as openOutline, b7 as calendarOutline, Q as normalizeStyle, dg as gridOutline, b3 as peopleOutline, aZ as medkitOutline, T as withDirectives, ay as vModelText, dh as chevronForwardOutline, q as dayjs, di as IonSegment, dj as IonSegmentButton, a8 as IonLabel, dk as eyeOutline, ac as checkmarkOutline, bJ as IonBadge, at as script, aD as IonTitle, aE as IonMenu, ao as IonList, ap as IonItem, L as modalController, br as pulseOutline, dl as Navigation, dm as Pagination, dn as Slide, dp as Carousel, af as IonCheckbox, bo as IonPopover, cl as onBeforeUnmount, cG as createSlots, H as closeCircleOutline, U as vShow, dq as checkmarkDoneCircleOutline, bm as search, bd as IonButtons, dr as personAdd, ah as close, N as IonSpinner, ds as skullOutline, dt as calendar, cd as flask, du as refresh, dv as lockClosed, a4 as onUnmounted, c3 as resolveDynamicComponent } from './vendor-B4fW45I4.js';
import { S as Service, u as useDemographicsStore, _ as _export_sfc, P as PatientService, t as toastWarning, a as useProgramStore, E as EncounterService, H as HisDate, g as getPouchDBRecords, b as EncounterTypeId, A as AppointmentService, c as HorizontalLine, d as _sfc_main$v, e as useGeneralStore, f as useStatusStore, h as useWindowSize, i as useEnrollementStore, R as ReportService, p as parameterizeUrl, j as STANDARD_DATE_FORMAT, k as alertConfirmation, O as OrderService, l as PreviousVitals, B as BasicInputField, m as useAdministerVaccineStore, n as icons, o as createModal, q as StandardModal, r as closeVisit, s as isPatientDeceased, v as usePatientList, w as getTodaysVisits, x as toastDanger, y as StandardValidations, z as useExposeFromStandardForm, C as StandardForm, D as PatientSearchService, F as DynamicButton, G as toastSuccess, I as alertConfirmationIonic, J as savePatientRecord, K as ObservationService, T as Toolbar, L as useWorkerStore, M as checkAndsetSessionDate, N as resetDemographics, Q as useGlobalPropertyStore, U as UserService, V as LocationService, W as ProgramId, X as modal } from '../index-C9DqaTYI.js';
import { d as defineStore, m as mapState, s as storeToRefs } from './pinia-ClrgJtgl.js';
import { A as Appointment } from './ncd_appointment_service-MXdKxjlv.js';
import { D as DateInputField } from './DateInputField-BBwxYtVx.js';
import { u as useActionButtonStore, _ as _sfc_main$D, M as ModulePicker } from './ActionButtons.vue_vue_type_script_setup_true_lang-BoLdR2xM.js';
import { V as ViewToggleComponent } from './ViewToggleComponent-CGjOU49t.js';
import { B as BottomNavBar } from './bottomNavBar-Cg5RS4wb.js';
import { P as PatientReportService } from './patient_report_service-Cwl49vGs.js';
import { l as lodashExports } from './lodash-YnuECrwU.js';
import { B as BasicForm } from './BasicForm-AM2iMmdE.js';
import { B as BasicCard } from './BasicCard-C_reXOyf.js';
import { u as useAdministerOtherVaccineStore } from './AdministerOtherVaccinesStore-S3_m7JcI.js';
import { c as customDatePicker } from './customDatePicker-D39dIXbu.js';
import { s as saveVaccineAdministeredDrugs } from './vaccines_service-4yemdbb8.js';
import { g as getVaccinesData } from './dashboard_service-BXoiXORP.js';
import { i as img } from './Img-RarZMYTn.js';
import { R as ReusableDataTable } from './ReusableDataTable-C_8-DtBz.js';
import { u as useRegistrationPagination, a as useSetRegistrationValues, _ as _sfc_main$w, b as _sfc_main$x, c as _sfc_main$y, d as _sfc_main$z, e as _sfc_main$A, f as _sfc_main$B, g as _sfc_main$C, R as RegistrationService } from './useSetRegistrationValues-DS6oFaS2.js';
import { u as useUserActivities } from './useUserActivities-DUWu8iAU.js';
import { L as LandingPage } from './LandingPage-DwWoZR2I.js';

const encounterTypes = {
  VITALS: 6,
  APPOINTMENT: 7,
  HIV_CLINIC_REGISTRATION: 9,
  TREATMENT: 25,
  HIV_RECEPTION: 51,
  HIV_STAGING: 52,
  HIV_CLINIC_CONSULTATION: 53,
  DISPENSING: 54,
  ART_ADHERENCE: 68};

class FhirService extends Service {
  constructor() {
    super();
  }
  static async getFhirPatients() {
    return await super.getJson(`fhir/patients/`);
  }
  static async getFhirPatient(PatientIdentifier) {
    return await super.getJson(`fhir/patient/${PatientIdentifier}`, { id: PatientIdentifier });
  }
  static async getFhirObservations(PatientIdentifier) {
    return await super.getJson(`fhir/patient/${PatientIdentifier}/observations/`, { id: PatientIdentifier });
  }
}

const _hoisted_1$n = { class: "fhir-viewer" };
const _hoisted_2$m = { class: "container" };
const _hoisted_3$k = {
  key: 0,
  class: "main-header"
};
const _hoisted_4$e = { class: "header-line" };
const _hoisted_5$d = {
  key: 0,
  class: "last-updated-display"
};
const _hoisted_6$9 = {
  key: 1,
  class: "card initial-input-card"
};
const _hoisted_7$8 = { class: "action-area-initial" };
const _hoisted_8$7 = {
  key: 0,
  class: "card patient-card"
};
const _hoisted_9$7 = { class: "card-title" };
const _hoisted_10$7 = { class: "patient-info-grid" };
const _hoisted_11$7 = { class: "info-item" };
const _hoisted_12$7 = { class: "info-value" };
const _hoisted_13$5 = { class: "info-item" };
const _hoisted_14$5 = { class: "info-value" };
const _hoisted_15$5 = { class: "info-item" };
const _hoisted_16$5 = { class: "info-value" };
const _hoisted_17$4 = { class: "info-item" };
const _hoisted_18$4 = { class: "info-value" };
const _hoisted_19$4 = { class: "info-value" };
const _hoisted_20$3 = { class: "info-value" };
const _hoisted_21$3 = { class: "info-label" };
const _hoisted_22$3 = { class: "info-value" };
const _hoisted_23$2 = {
  key: 2,
  class: "card observations-card"
};
const _hoisted_24$2 = { class: "card-title" };
const _hoisted_25$2 = { class: "observations-grid" };
const _hoisted_26$1 = { class: "obs-header" };
const _hoisted_27$1 = { class: "obs-title" };
const _hoisted_28$1 = { class: "obs-details" };
const _hoisted_29$1 = { class: "obs-detail obs-value-highlight" };
const _hoisted_30$1 = { class: "obs-value" };
const _hoisted_31 = { class: "obs-detail" };
const _hoisted_32 = { class: "obs-value" };
const _hoisted_33 = {
  key: 0,
  class: "obs-detail"
};
const _hoisted_34 = { class: "obs-value" };
const _hoisted_35 = {
  key: 3,
  class: "no-data-found"
};
const _hoisted_36 = {
  key: 4,
  class: "no-data-found"
};
const _hoisted_37 = {
  key: 5,
  class: "main-footer"
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "ExternalReferrals",
  props: {
    initialData: {
      type: Array,
      default: () => []
      // Default to an empty array
    },
    apiEndpoint: {
      type: String,
      default: "/api/fhir/patient-data"
      // Default API endpoint
    }
  },
  setup(__props) {
    addIcons({
      "person-circle-outline": personCircleOutline,
      "clipboard-outline": clipboardOutline,
      "search-outline": searchOutline,
      "information-circle-outline": informationCircleOutline,
      "alert-circle-outline": alertCircleOutline,
      "person-add-outline": personAddOutline,
      "arrow-back-outline": arrowBackOutline
    });
    const props = __props;
    const route = useRouter();
    const isLoading = ref(false);
    const fhirPatientData = ref([]);
    const identifierID = ref();
    const lastUpdatedDate = ref();
    const extractedPatientData = ref(null);
    const extractedObservations = ref([]);
    const hasPatientData = computed(() => {
      return fhirPatientData.value.some(
        (bundle) => bundle.resourceType === "Bundle" && bundle.entry && bundle.entry.some((entry) => entry.resource && entry.resource.resourceType === "Patient")
      );
    });
    const hasObservationsDataComputed = computed(() => {
      return extractedObservations.value.length > 0;
    });
    const loadSampleData = async () => {
      fhirPatientData.value = [];
      lastUpdatedDate.value = null;
      extractedPatientData.value = null;
      extractedObservations.value = [];
      if (!identifierID.value) {
        console.error("Please enter a Patient Identifier.");
        return;
      }
      isLoading.value = true;
      try {
        const patientBundle = await FhirService.getFhirPatient(identifierID.value);
        if (patientBundle && patientBundle.entry && patientBundle.entry.length > 0) {
          const patientResource = patientBundle.entry[0].resource;
          const patientId = patientResource.id;
          const observationBundle = await FhirService.getFhirObservations(patientId);
          fhirPatientData.value = [patientBundle];
          if (observationBundle) {
            fhirPatientData.value.push(observationBundle);
            extractedObservations.value = observationBundle.entry.filter((entry) => entry.resource && entry.resource.resourceType === "Observation").map((entry) => {
              const obs = entry.resource;
              return {
                id: obs.id,
                display: getObservationDisplay(obs),
                value: getObservationValue(obs),
                date: obs.effectiveDateTime,
                category: obs.category && obs.category[0] && obs.category[0].coding && obs.category[0].coding[0] ? obs.category[0].coding[0].display || obs.category[0].coding[0].code : "N/A"
                // Add other relevant observation fields here as needed
              };
            });
          }
          const name = patientResource.name && patientResource.name[0];
          extractedPatientData.value = {
            personInformation: {
              given_name: name && name.given ? name.given.join(" ") : "",
              middle_name: name && name.middle ? name.middle.join(" ") : "",
              family_name: name && name.family ? name.family : "",
              gender: patientResource.gender == "male" ? "M" : patientResource?.gender == "female" ? "F" : "",
              birthdate: patientResource.birthDate || "",
              cell_phone_number: patientResource.telecom && patientResource.telecom[0] ? patientResource.telecom[0].value : ""
            },
            guardianInformation: {
              saved: [
                {
                  cell_phone_number: patientResource.contact && patientResource.contact[0] && patientResource.contact[0].telecom ? patientResource.contact[0].telecom[0].value : ""
                }
              ]
            }
            // Potentially add identifiers, addresses etc. here from patientResource
          };
          const allBundles = [patientBundle, observationBundle].filter(Boolean);
          const latestUpdate = allBundles.reduce((latest, bundle) => {
            if (bundle.meta && bundle.meta.lastUpdated) {
              const currentBundleDate = new Date(bundle.meta.lastUpdated);
              return latest === null || currentBundleDate > latest ? currentBundleDate : latest;
            }
            return latest;
          }, null);
          if (latestUpdate) {
            lastUpdatedDate.value = formatDateTime(latestUpdate.toISOString());
          }
        } else {
          console.warn("No patient bundle found for the provided identifier.");
        }
      } catch (error) {
        console.error("Error loading FHIR data:", error);
        fhirPatientData.value = [];
        lastUpdatedDate.value = null;
        extractedPatientData.value = null;
        extractedObservations.value = [];
      } finally {
        isLoading.value = false;
      }
    };
    const getPatientName = (patient) => {
      if (patient.name && patient.name[0]) {
        const name = patient.name[0];
        const given = name.given ? name.given.join(" ") : "";
        const family = name.family || "";
        return `${given} ${family}`.trim() || "N/A";
      }
      return "N/A";
    };
    const getPatientIdentifiers = (patient) => {
      if (patient.identifier && patient.identifier.length > 0) {
        return patient.identifier.map((id) => {
          let systemDisplay = "Unknown System";
          if (id.type && id.type.coding && id.type.coding[0] && id.type.coding[0].display) {
            systemDisplay = id.type.coding[0].display;
          } else if (id.system) {
            const parts = id.system.split("/");
            systemDisplay = parts[parts.length - 1] || id.system;
            if (id.system === "urn:oid:2.16.840.1.113883.4.6") {
              systemDisplay = "Social Security Number";
            }
          }
          sessionStorage.setItem(systemDisplay, id.value);
          let assignerDisplay = null;
          if (id.assigner && id.assigner.display) {
            assignerDisplay = id.assigner.display;
          } else if (id.assigner && id.assigner.reference) {
            assignerDisplay = id.assigner.reference.split("/").pop() || id.assigner.reference;
          }
          return {
            value: id.value || "N/A",
            systemDisplay,
            periodStart: id.period ? id.period.start : null,
            periodEnd: id.period ? id.period.end : null,
            assignerDisplay
          };
        });
      }
      return [];
    };
    const getPatientPhoneNumbers = (patient) => {
      if (patient.telecom && patient.telecom.length > 0) {
        return patient.telecom.filter((tl) => tl.system === "phone" && tl.value);
      }
      return [];
    };
    const getGuardianPhoneNumbers = (patient) => {
      if (patient.contact && patient.contact.length > 0) {
        const guardians = patient.contact.filter(
          (contact) => contact.relationship?.some((rel) => rel.coding?.some((code) => code.code === "GUARD"))
        );
        const guardianPhones = [];
        guardians.forEach((guardian) => {
          if (guardian.telecom && guardian.telecom.length > 0) {
            guardian.telecom.filter((tl) => tl.system === "phone" && tl.value).forEach((phone) => guardianPhones.push(phone));
          }
        });
        return guardianPhones;
      }
      return [];
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      try {
        return new Date(dateString).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      } catch (e) {
        console.error("Invalid date string for formatDate:", dateString, e);
        return "Invalid Date";
      }
    };
    const formatDateTime = (dateTimeString) => {
      if (!dateTimeString) return "N/A";
      try {
        const date = new Date(dateTimeString);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        });
      } catch (e) {
        console.error("Invalid date time string for formatDateTime:", dateTimeString, e);
        return "Invalid Date/Time";
      }
    };
    const calculateAge = (birthDate) => {
      if (!birthDate) return "N/A";
      try {
        const today = /* @__PURE__ */ new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) {
          age--;
        }
        return age;
      } catch (e) {
        console.error("Invalid birth date string for calculateAge:", birthDate, e);
        return "N/A";
      }
    };
    const getSyncStatus = (resource) => {
      if (resource.meta && resource.meta.tag) {
        const syncTag = resource.meta.tag.find((tag) => tag.system === "http://your-domain.org/fhir/StructureDefinition/sync-status");
        return syncTag ? syncTag.code : "Unknown";
      }
      return "Unknown";
    };
    const getObservationDisplay = (observation) => {
      if (observation.code && observation.code.coding && observation.code.coding[0]) {
        return observation.code.coding[0].display || observation.code.coding[0].code || "Unknown Observation";
      }
      return "Unknown Observation";
    };
    const getObservationValue = (observation) => {
      if (observation.valueQuantity) {
        return `${observation.valueQuantity.value} ${observation.valueQuantity.unit || ""}`.trim();
      } else if (observation.valueString) {
        return observation.valueString;
      } else if (observation.valueBoolean !== void 0) {
        return observation.valueBoolean ? "True" : "False";
      }
      return "N/A";
    };
    const registerNewPatient = () => {
      const demographicsStore = useDemographicsStore();
      demographicsStore.setRecord(extractedPatientData.value);
      sessionStorage.setItem("ichis_diagnosis", JSON.stringify(extractedObservations.value));
      navigateTo("/registration/manual");
    };
    const backToSearch = () => {
      fhirPatientData.value = [];
      identifierID.value = "";
      lastUpdatedDate.value = null;
      extractedPatientData.value = null;
      extractedObservations.value = [];
    };
    const navigateTo = (path) => {
      route.push({ path });
    };
    watch(
      () => route,
      async () => {
        fhirPatientData.value = [];
        extractedObservations.value = [];
      },
      { deep: true }
    );
    onMounted(() => {
      if (props.initialData.length > 0) {
        fhirPatientData.value = props.initialData;
        const allBundles = props.initialData.filter(Boolean);
        const latestUpdate = allBundles.reduce((latest, bundle) => {
          if (bundle.meta && bundle.meta.lastUpdated) {
            const currentBundleDate = new Date(bundle.meta.lastUpdated);
            return latest === null || currentBundleDate > latest ? currentBundleDate : latest;
          }
          return latest;
        }, null);
        if (latestUpdate) {
          lastUpdatedDate.value = formatDateTime(latestUpdate.toISOString());
        }
        const patientBundle = props.initialData.find(
          (bundle) => bundle.resourceType === "Bundle" && bundle.entry && bundle.entry.some((entry) => entry.resource && entry.resource.resourceType === "Patient")
        );
        if (patientBundle) {
          const patientResource = patientBundle.entry.find((entry) => entry.resource && entry.resource.resourceType === "Patient")?.resource;
          if (patientResource) {
            const name = patientResource.name && patientResource.name[0];
            extractedPatientData.value = {
              personInformation: {
                given_name: name && name.given ? name.given.join(" ") : "",
                middle_name: name && name.middle ? name.middle.join(" ") : "",
                family_name: name && name.family ? name.family : "",
                gender: patientResource.gender || "",
                birthdate: patientResource.birthDate || ""
              }
            };
          }
        }
        const observationBundle = props.initialData.find(
          (bundle) => bundle.resourceType === "Bundle" && bundle.entry && bundle.entry.some((entry) => entry.resource && entry.resource.resourceType === "Observation")
        );
        if (observationBundle) {
          extractedObservations.value = observationBundle.entry.filter((entry) => entry.resource && entry.resource.resourceType === "Observation").map((entry) => {
            const obs = entry.resource;
            return {
              id: obs.id,
              display: getObservationDisplay(obs),
              value: getObservationValue(obs),
              date: obs.effectiveDateTime,
              category: obs.category && obs.category[0] && obs.category[0].coding && obs.category[0].coding[0] ? obs.category[0].coding[0].display || obs.category[0].coding[0].code : "N/A"
            };
          });
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        createBaseVNode("div", _hoisted_2$m, [
          fhirPatientData.value?.length ? (openBlock(), createElementBlock("header", _hoisted_3$k, [
            createBaseVNode("div", _hoisted_4$e, [
              _cache[1] || (_cache[1] = createBaseVNode("h5", { class: "header-title" }, "Referred Patient Overview", -1)),
              createBaseVNode("div", null, [
                createBaseVNode("span", {
                  style: { "margin-right": "5px" },
                  class: normalizeClass(["last-updated-display", "status-" + getSyncStatus(fhirPatientData.value[0].entry[0].resource).toLowerCase()])
                }, " Sync Status: " + toDisplayString(getSyncStatus(fhirPatientData.value[0].entry[0].resource)), 3),
                lastUpdatedDate.value ? (openBlock(), createElementBlock("span", _hoisted_5$d, "Last Updated: " + toDisplayString(lastUpdatedDate.value), 1)) : createCommentVNode("", true)
              ])
            ])
          ])) : createCommentVNode("", true),
          !fhirPatientData.value?.length ? (openBlock(), createElementBlock("section", _hoisted_6$9, [
            createVNode(unref(IonInput), {
              modelValue: identifierID.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => identifierID.value = $event),
              placeholder: "Enter Patient Identifier (e.g., patient-id-123)",
              fill: "outline",
              label: "Patient ID",
              "label-placement": "floating"
            }, null, 8, ["modelValue"]),
            createBaseVNode("div", _hoisted_7$8, [
              createBaseVNode("button", {
                onClick: loadSampleData,
                class: "load-data-btn"
              }, [
                createVNode(unref(IonIcon), { name: "search-outline" }),
                _cache[2] || (_cache[2] = createTextVNode(" Find Patient ", -1))
              ])
            ])
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(fhirPatientData.value, (bundle) => {
            return openBlock(), createElementBlock("div", {
              key: bundle.id
            }, [
              bundle.resourceType === "Bundle" && bundle.entry && bundle.entry[0] && bundle.entry[0].resource.resourceType === "Patient" ? (openBlock(), createElementBlock("section", _hoisted_8$7, [
                createBaseVNode("h2", _hoisted_9$7, [
                  createVNode(unref(IonIcon), { name: "person-circle-outline" }),
                  _cache[3] || (_cache[3] = createTextVNode(" Patient Demographics", -1))
                ]),
                createBaseVNode("div", _hoisted_10$7, [
                  createBaseVNode("div", _hoisted_11$7, [
                    _cache[4] || (_cache[4] = createBaseVNode("span", { class: "info-label" }, "Full Name", -1)),
                    createBaseVNode("span", _hoisted_12$7, toDisplayString(getPatientName(bundle.entry[0].resource)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_13$5, [
                    _cache[5] || (_cache[5] = createBaseVNode("span", { class: "info-label" }, "Gender", -1)),
                    createBaseVNode("span", _hoisted_14$5, toDisplayString(bundle.entry[0].resource.gender || "Not specified"), 1)
                  ]),
                  createBaseVNode("div", _hoisted_15$5, [
                    _cache[6] || (_cache[6] = createBaseVNode("span", { class: "info-label" }, "Date of Birth", -1)),
                    createBaseVNode("span", _hoisted_16$5, toDisplayString(formatDate(bundle.entry[0].resource.birthDate)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_17$4, [
                    _cache[7] || (_cache[7] = createBaseVNode("span", { class: "info-label" }, "Age", -1)),
                    createBaseVNode("span", _hoisted_18$4, toDisplayString(calculateAge(bundle.entry[0].resource.birthDate)) + " years", 1)
                  ]),
                  getPatientPhoneNumbers(bundle.entry[0].resource).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(getPatientPhoneNumbers(bundle.entry[0].resource), (phone, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: `patient-phone-${index}`,
                      class: "info-item"
                    }, [
                      _cache[8] || (_cache[8] = createBaseVNode("span", { class: "info-label" }, "Patient Phone ", -1)),
                      createBaseVNode("span", _hoisted_19$4, toDisplayString(phone.value), 1)
                    ]);
                  }), 128)) : createCommentVNode("", true),
                  getGuardianPhoneNumbers(bundle.entry[0].resource).length ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(getGuardianPhoneNumbers(bundle.entry[0].resource), (phone, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: `guardian-phone-${index}`,
                      class: "info-item"
                    }, [
                      _cache[9] || (_cache[9] = createBaseVNode("span", { class: "info-label" }, "Guardian Phone ", -1)),
                      createBaseVNode("span", _hoisted_20$3, toDisplayString(phone.value), 1)
                    ]);
                  }), 128)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getPatientIdentifiers(bundle.entry[0].resource), (id, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: id.value || index,
                      class: "info-item"
                    }, [
                      createBaseVNode("span", _hoisted_21$3, toDisplayString(id.systemDisplay), 1),
                      createBaseVNode("span", _hoisted_22$3, toDisplayString(id.value), 1)
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ]);
          }), 128)),
          extractedObservations.value?.length > 0 ? (openBlock(), createElementBlock("section", _hoisted_23$2, [
            createBaseVNode("h2", _hoisted_24$2, [
              createVNode(unref(IonIcon), { name: "clipboard-outline" }),
              _cache[10] || (_cache[10] = createTextVNode(" Clinical Observations", -1))
            ]),
            createBaseVNode("div", _hoisted_25$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(extractedObservations.value, (obs) => {
                return openBlock(), createElementBlock("div", {
                  key: obs.id,
                  class: "observation-item"
                }, [
                  createBaseVNode("div", _hoisted_26$1, [
                    createBaseVNode("h3", _hoisted_27$1, toDisplayString(obs.display), 1)
                  ]),
                  createBaseVNode("div", _hoisted_28$1, [
                    createBaseVNode("div", _hoisted_29$1, [
                      _cache[11] || (_cache[11] = createBaseVNode("span", { class: "obs-label" }, "Value:", -1)),
                      createBaseVNode("span", _hoisted_30$1, toDisplayString(obs.value), 1)
                    ]),
                    createBaseVNode("div", _hoisted_31, [
                      _cache[12] || (_cache[12] = createBaseVNode("span", { class: "obs-label" }, "Date:", -1)),
                      createBaseVNode("span", _hoisted_32, toDisplayString(formatDateTime(obs.date)), 1)
                    ]),
                    obs.category && obs.category !== "N/A" ? (openBlock(), createElementBlock("div", _hoisted_33, [
                      _cache[13] || (_cache[13] = createBaseVNode("span", { class: "obs-label" }, "Category:", -1)),
                      createBaseVNode("span", _hoisted_34, toDisplayString(obs.category), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ]);
              }), 128))
            ])
          ])) : createCommentVNode("", true),
          fhirPatientData.value?.length && !hasPatientData.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
            createBaseVNode("p", null, [
              createVNode(unref(IonIcon), { name: "alert-circle-outline" }),
              _cache[14] || (_cache[14] = createTextVNode(" No patient data found for the provided identifier. Please try again.", -1))
            ])
          ])) : fhirPatientData.value?.length && hasPatientData.value && !hasObservationsDataComputed.value ? (openBlock(), createElementBlock("div", _hoisted_36, [
            createBaseVNode("p", null, [
              createVNode(unref(IonIcon), { name: "information-circle-outline" }),
              _cache[15] || (_cache[15] = createTextVNode(" No clinical observations found for this patient.", -1))
            ])
          ])) : createCommentVNode("", true),
          fhirPatientData.value?.length ? (openBlock(), createElementBlock("footer", _hoisted_37, [
            createBaseVNode("button", {
              onClick: backToSearch,
              class: "back-to-search-btn small-btn"
            }, [
              createVNode(unref(IonIcon), { name: "arrow-back-outline" }),
              _cache[16] || (_cache[16] = createTextVNode(" Back to Search ", -1))
            ]),
            createBaseVNode("button", {
              onClick: registerNewPatient,
              class: "register-btn small-btn"
            }, [
              createVNode(unref(IonIcon), { name: "person-add-outline" }),
              _cache[17] || (_cache[17] = createTextVNode(" Register New Patient ", -1))
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});

const ExternalReferrals = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-0dc329ef"]]);

const _sfc_main$t = defineComponent({
  components: { DataTable: V },
  data() {
    return {
      patients: [],
      tableColumns: [
        { title: "Patient Name", data: "fullName" },
        { title: "Referred From", data: "referredFrom" },
        { title: "Referred By", data: "referredBy" },
        { title: "Clinic Date", data: "appointmentDate" },
        {
          title: "Actions",
          data: null,
          render: (data, type, row) => `<ion-button size="small" fill="solid" color="primary" onclick="window.navigatePatient('${row.patient_id}')">Profile</ion-button>`,
          orderable: false,
          width: "20%"
        }
      ],
      tableOptions: {
        responsive: true,
        searching: true,
        ordering: true,
        pageLength: 25,
        lengthChange: false,
        dom: "Bfrtip",
        order: [[1, "desc"]],
        scrollX: true,
        autoWidth: false,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search patients...",
          emptyTable: "No referrals found."
        }
      }
    };
  },
  async mounted() {
    const programStore = useProgramStore();
    const activeProgramId = programStore.activeProgram?.program_id;
    const locationId = String(localStorage.getItem("locationID"));
    const encounters = await EncounterService.getAllEncounters({ encounter_type_id: 114 });
    console.log("Encounters fetched for Internal Referrals:", encounters);
    this.patients = encounters.reduce((acc, enc) => {
      if (String(enc?.location_id) !== locationId) return acc;
      const referralObs = enc?.observations?.find((o) => o?.concept_id === 2227 && o?.value_numeric === activeProgramId);
      if (!referralObs) return acc;
      const fullName = enc?.patient?.person?.names?.[0] ? `${enc.patient.person.names[0].given_name || ""} ${enc.patient.person.names[0].family_name || ""}` : "Unknown";
      let referredFrom = enc?.program?.name || "Unknown Program";
      referredFrom = referredFrom.replace(/program/i, "").trim();
      const referredBy = enc?.provider?.names?.[0] ? `${enc.provider.names[0].given_name || ""} ${enc.provider.names[0].family_name || ""}` : "Unknown";
      const appointmentObs = enc?.observations?.find(
        (o) => o?.concept?.concept_names?.some((c) => c?.name?.toLowerCase().includes("date of referral"))
      );
      acc.push({
        patient_id: enc.patient_id,
        fullName,
        referredFrom,
        referredBy,
        appointmentDate: appointmentObs?.value_text || "N/A"
      });
      return acc;
    }, []);
    window.navigatePatient = this.navigateTo;
  },
  methods: {
    async navigateTo(patientId) {
      let patient = await PatientService.findByID(patientId);
      if (patient) {
        await useDemographicsStore().setPatientRecord(patient);
        this.$router.push("/patientProfile");
      } else {
        toastWarning("Patient not found. Please try searching by name.");
      }
    }
  }
});

const _hoisted_1$m = { class: "dueCardContent" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DataTable = resolveComponent("DataTable");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, {
    class: "section",
    style: { "margin-bottom": "15px", "margin-inline": "0" }
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_card_content, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$m, [
            createVNode(_component_DataTable, {
              data: _ctx.patients,
              columns: _ctx.tableColumns,
              class: "display nowrap modern-table",
              width: "100%"
            }, null, 8, ["data", "columns"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const InternalReferrals = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$f], ["__scopeId", "data-v-a95ef46a"]]);

const _sfc_main$s = defineComponent({
  name: "referrals",
  components: {
    InternalReferrals,
    ExternalReferrals
  },
  data() {
    return {
      segmentContent: "External referrals",
      checkUnderFive: false
    };
  },
  methods: {
    setSegmentContent(name) {
      this.segmentContent = name;
    }
  }
});

const _hoisted_1$l = { key: 0 };
const _hoisted_2$l = { style: { "display": "flex", "margin-top": "10px" } };
const _hoisted_3$j = {
  key: 0,
  style: { "width": "50vw", "background-color": "#fff", "border-radius": "5px", "margin-right": "5px" }
};
const _hoisted_4$d = {
  key: 1,
  style: { "width": "50vw", "background-color": "#fff", "border-radius": "5px" }
};
const _hoisted_5$c = { key: 1 };
const _hoisted_6$8 = { key: 2 };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_segment_button = resolveComponent("ion-segment-button");
  const _component_ion_segment = resolveComponent("ion-segment");
  const _component_ExternalReferrals = resolveComponent("ExternalReferrals");
  const _component_InternalReferrals = resolveComponent("InternalReferrals");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", null, [
      createVNode(_component_ion_segment, {
        value: _ctx.segmentContent,
        style: { "margin-top": "5px", "margin-left": "20px", "justify-content": "left" }
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_segment_button, {
            value: "External referrals",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setSegmentContent("External referrals"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode("External referrals", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_segment_button, {
            value: "Internal referrals",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setSegmentContent("Internal referrals"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("Internal referrals", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"])
    ]),
    _ctx.segmentContent == "Internal referrals" ? (openBlock(), createElementBlock("div", _hoisted_1$l, [
      createBaseVNode("div", _hoisted_2$l, [
        _ctx.checkUnderFive ? (openBlock(), createElementBlock("div", _hoisted_3$j)) : createCommentVNode("", true),
        _cache[4] || (_cache[4] = createBaseVNode("div", { style: { "width": "50vw", "background-color": "#fff", "border-radius": "5px", "margin-right": "5px" } }, null, -1)),
        !_ctx.checkUnderFive ? (openBlock(), createElementBlock("div", _hoisted_4$d)) : createCommentVNode("", true)
      ])
    ])) : createCommentVNode("", true),
    _ctx.segmentContent == "External referrals" ? (openBlock(), createElementBlock("div", _hoisted_5$c, [
      createVNode(_component_ExternalReferrals)
    ])) : createCommentVNode("", true),
    _ctx.segmentContent == "Internal referrals" ? (openBlock(), createElementBlock("div", _hoisted_6$8, [
      createVNode(_component_InternalReferrals)
    ])) : createCommentVNode("", true)
  ], 64);
}
const Referral = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$e], ["__scopeId", "data-v-8f0f935e"]]);

const useNCDDashboardStore = defineStore("ncdDashboardStore", {
  state: () => ({
    dashboardData: null,
    appointments: [],
    isLoading: false,
    error: null,
    lastFetchDate: null,
    programId: 32
  }),
  getters: {
    // Count getters - computed from state
    appointmentsCount: (state) => {
      return state.appointments.length;
    },
    pendingDispensationsCount: (state) => {
      return state.dashboardData?.total_pending_dispensations || 0;
    },
    defaultersCount: (state) => {
      return state.dashboardData?.total_defaulters || 0;
    },
    complicationsCount: (state) => {
      return state.dashboardData?.total_complications || 0;
    },
    activeClientsCount: (state) => {
      return state.dashboardData?.total_client_registered || 0;
    },
    // Chart data getters
    genderChartData: (state) => {
      if (!state.dashboardData?.gender_data) {
        return {
          categories: [],
          series: [
            { name: "Male", data: [] },
            { name: "Female", data: [] }
          ]
        };
      }
      return {
        categories: state.dashboardData.gender_data.categories,
        series: [
          {
            name: "Male",
            data: state.dashboardData.gender_data.maleSeries
          },
          {
            name: "Female",
            data: state.dashboardData.gender_data.femaleSeries
          }
        ]
      };
    },
    diagnosisChartData: (state) => {
      if (!state.dashboardData?.diagnosis_data) {
        return {
          categories: [],
          series: [
            { name: "Type 1 Diabetes", data: [] },
            { name: "Type 2 Diabetes", data: [] },
            { name: "Hypertention", data: [] }
          ]
        };
      }
      return {
        categories: state.dashboardData.diagnosis_data.categories,
        series: [
          {
            name: "Type 1 Diabetes",
            data: state.dashboardData.diagnosis_data.typeOneSeries
          },
          {
            name: "Type 2 Diabetes",
            data: state.dashboardData.diagnosis_data.typeTwoSeries
          },
          {
            name: "Hypertention",
            data: state.dashboardData.diagnosis_data.hypertentionSeries
          }
        ]
      };
    },
    // Status getters
    hasData: (state) => {
      return state.dashboardData !== null;
    },
    isDataStale: (state) => {
      if (!state.lastFetchDate) return true;
      const today = HisDate.toStandardHisFormat(HisDate.sessionDate());
      return state.lastFetchDate !== today;
    }
  },
  actions: {
    async fetchDashboardData(startDate, endDate) {
      this.isLoading = true;
      this.error = null;
      try {
        const start = startDate || HisDate.toStandardHisFormat(HisDate.sessionDate());
        const end = endDate || HisDate.toStandardHisFormat(HisDate.sessionDate());
        const url = `programs/${this.programId}/reports/ncd_dashboard`;
        const data = await Service.getJson(url, {
          start_date: start,
          end_date: end
        });
        this.setDashboardData(data);
        this.lastFetchDate = start;
      } catch (error) {
        this.error = error.message || "Failed to fetch dashboard data";
        console.error("Error fetching NCD dashboard data:", error);
      } finally {
        this.isLoading = false;
      }
    },
    setDashboardData(data) {
      this.dashboardData = data;
    },
    setAppointments(appointments) {
      this.appointments = appointments;
    },
    addAppointment(appointment) {
      this.appointments.push(appointment);
    },
    removeAppointment(appointmentId) {
      this.appointments = this.appointments.filter((apt) => apt.id !== appointmentId);
    },
    updateAppointment(appointmentId, updatedData) {
      const index = this.appointments.findIndex((apt) => apt.id === appointmentId);
      if (index !== -1) {
        this.appointments[index] = {
          ...this.appointments[index],
          ...updatedData
        };
      }
    },
    setProgramId(id) {
      this.programId = id;
    },
    clearDashboardData() {
      this.dashboardData = null;
      this.appointments = [];
      this.error = null;
      this.lastFetchDate = null;
    },
    async refreshDashboardData() {
      await this.fetchDashboardData();
    },
    // Utility method to check if refresh is needed
    async ensureFreshData() {
      if (this.isDataStale || !this.hasData) {
        await this.fetchDashboardData();
      }
    }
  },
  persist: {
    key: "ncd-dashboard-store",
    storage: localStorage,
    paths: ["dashboardData", "appointments", "lastFetchDate", "programId"]
  }
});

async function getNcdDashboard() {
  const locationId = localStorage.getItem("locationID");
  const programId = 32;
  const allPatients = await getPouchDBRecords("patients_records", {
    selector: {
      location_id: locationId
    }
  });
  const ncdPatients = allPatients.filter((patient) => {
    const activePrograms = patient.activePrograms || [];
    return activePrograms.some((program) => program.program_id === programId);
  });
  const totalClientRegistered = ncdPatients.length;
  const totalMaleRegistered = ncdPatients.filter((p) => p.personInformation?.gender === "M").length;
  const totalFemaleRegistered = ncdPatients.filter((p) => p.personInformation?.gender === "F").length;
  const totalComplications = countComplications(ncdPatients);
  const totalDefaulters = countDefaulters(ncdPatients);
  const totalPendingDispensations = countPendingDispensations(ncdPatients);
  const genderQuarterlyData = getGenderQuarterlyBreakdown(ncdPatients);
  const diagnosisQuarterlyData = getDiagnosisQuarterlyBreakdown(ncdPatients);
  return {
    total_client_registered: totalClientRegistered,
    total_male_registered: totalMaleRegistered,
    total_female_registered: totalFemaleRegistered,
    total_complications: totalComplications,
    total_defaulters: totalDefaulters,
    total_pending_dispensations: totalPendingDispensations,
    gender_data: {
      categories: genderQuarterlyData.categories,
      series: [
        {
          name: "Male",
          data: genderQuarterlyData.male,
          group: "apexcharts-axis-0"
        },
        {
          name: "Female",
          data: genderQuarterlyData.female,
          group: "apexcharts-axis-0"
        }
      ]
    },
    diagnosis_data: {
      categories: diagnosisQuarterlyData.categories,
      series: [
        {
          name: "Type 1 Diabetes",
          data: diagnosisQuarterlyData.type_one,
          group: "apexcharts-axis-0"
        },
        {
          name: "Type 2 Diabetes",
          data: diagnosisQuarterlyData.type_two,
          group: "apexcharts-axis-0"
        },
        {
          name: "Hypertension",
          data: diagnosisQuarterlyData.hypertension,
          group: "apexcharts-axis-0"
        }
      ]
    }
  };
}
function countComplications(patients) {
  let count = 0;
  patients.forEach((patient) => {
    const obs = patient.observations || [];
    const hasComplications = obs.some(
      (encounter) => encounter.encounter_type === EncounterTypeId.COMPLICATIONS && // COMPLICATIONS encounter type
      encounter.status === "saved" && encounter.obs?.length > 0
    );
    if (hasComplications) count++;
  });
  return count;
}
function countDefaulters(patients) {
  const currentDate = /* @__PURE__ */ new Date();
  const cutoffDate = new Date(currentDate);
  cutoffDate.setDate(cutoffDate.getDate() - 60);
  const cutoffDate120 = new Date(currentDate);
  cutoffDate120.setDate(cutoffDate120.getDate() - 120);
  let defaulters = 0;
  patients.forEach((patient) => {
    const medicationOrders = patient.MedicationOrder?.saved || [];
    if (medicationOrders.length === 0) return;
    const lastDispensation = medicationOrders.filter((order) => order.quantity > 0).sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime())[0];
    if (!lastDispensation) return;
    const lastDispensationDate = new Date(lastDispensation.start_date);
    if (lastDispensationDate >= cutoffDate120 && lastDispensationDate <= cutoffDate) {
      const hasRecentDispensation = medicationOrders.some((order) => {
        const orderDate = new Date(order.start_date);
        return orderDate > cutoffDate;
      });
      if (!hasRecentDispensation) {
        defaulters++;
      }
    }
  });
  return defaulters;
}
function countPendingDispensations(patients) {
  let pendingCount = 0;
  patients.forEach((patient) => {
    const medicationOrders = patient.MedicationOrder?.saved || [];
    const hasPendingOrders = medicationOrders.some((order) => order.quantity <= 0);
    if (hasPendingOrders) {
      pendingCount++;
    }
  });
  return pendingCount;
}
function getGenderQuarterlyBreakdown(patients) {
  const quarters = {};
  let endDate = /* @__PURE__ */ new Date();
  for (let i = 0; i < 4; i++) {
    const startDate = getQuarterStart(endDate);
    const quarterLabel = formatQuarterLabel(startDate);
    quarters[quarterLabel] = { male: /* @__PURE__ */ new Set(), female: /* @__PURE__ */ new Set() };
    patients.forEach((patient) => {
      const patientId = patient.patientID;
      const gender = patient.personInformation?.gender;
      const observations = patient.observations || [];
      let hasObsInQuarter = false;
      observations.forEach((encounter) => {
        if (encounter.status !== "saved") return;
        encounter.obs?.forEach((obs) => {
          const obsDate = obs.obs_datetime ? new Date(obs.obs_datetime) : null;
          if (!obsDate) return;
          if (obsDate >= startDate && obsDate <= endDate) {
            hasObsInQuarter = true;
          }
        });
      });
      if (hasObsInQuarter) {
        if (gender === "M") {
          quarters[quarterLabel].male.add(patientId);
        } else if (gender === "F") {
          quarters[quarterLabel].female.add(patientId);
        }
      }
    });
    endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() - 1);
  }
  const countsObj = {};
  Object.entries(quarters).forEach(([quarter, genders]) => {
    countsObj[quarter] = {
      male: genders.male.size,
      female: genders.female.size
    };
  });
  const reversedQuarters = reverseObject(countsObj);
  return {
    categories: Object.keys(reversedQuarters),
    male: Object.values(reversedQuarters).map((q) => q.male),
    female: Object.values(reversedQuarters).map((q) => q.female)
  };
}
function getDiagnosisQuarterlyBreakdown(patients) {
  const quarters = {};
  let endDate = /* @__PURE__ */ new Date();
  for (let i = 0; i < 4; i++) {
    const startDate = getQuarterStart(endDate);
    const quarterLabel = formatQuarterLabel(startDate);
    quarters[quarterLabel] = {
      type_one: /* @__PURE__ */ new Set(),
      type_two: /* @__PURE__ */ new Set(),
      hypertension: /* @__PURE__ */ new Set()
    };
    patients.forEach((patient) => {
      const patientId = patient.patientID;
      const observations = patient.observations || [];
      let patientDiagnosis = null;
      observations.forEach((encounter) => {
        if (encounter.encounter_type !== EncounterTypeId.DIAGNOSIS) return;
        encounter.obs?.forEach((obs) => {
          const encounterDate = obs.obs_datetime ? new Date(obs.obs_datetime) : null;
          if (!encounterDate) return;
          if (encounterDate >= startDate && encounterDate <= endDate) {
            if (obs.concept_id === 6542) {
              patientDiagnosis = obs.value_coded;
            }
          }
        });
      });
      if (patientDiagnosis === 6409) {
        quarters[quarterLabel].type_one.add(patientId);
      } else if (patientDiagnosis === 6410) {
        quarters[quarterLabel].type_two.add(patientId);
      } else if (patientDiagnosis === 8809 || patientDiagnosis === 903) {
        quarters[quarterLabel].hypertension.add(patientId);
      }
    });
    endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() - 1);
  }
  const countsObj = {};
  Object.entries(quarters).forEach(([quarter, diagnoses]) => {
    countsObj[quarter] = {
      type_one: diagnoses.type_one.size,
      type_two: diagnoses.type_two.size,
      hypertension: diagnoses.hypertension.size
    };
  });
  const reversedCounts = reverseObject(countsObj);
  return {
    categories: Object.keys(reversedCounts),
    type_one: Object.values(reversedCounts).map((q) => q.type_one),
    type_two: Object.values(reversedCounts).map((q) => q.type_two),
    hypertension: Object.values(reversedCounts).map((q) => q.hypertension)
  };
}
function getQuarterStart(date) {
  const month = date.getMonth();
  const quarterStartMonth = Math.floor(month / 3) * 3;
  return new Date(date.getFullYear(), quarterStartMonth, 1);
}
function formatQuarterLabel(date) {
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  return `Q${quarter} ${date.getFullYear()}`;
}
function reverseObject(obj) {
  return Object.fromEntries(Object.entries(obj).reverse());
}

const _hoisted_1$k = { class: "cards-container" };
const _hoisted_2$k = { class: "top-card-text" };
const _hoisted_3$i = { class: "text-2xl font-bold" };
const _hoisted_4$c = { class: "top-card-text" };
const _hoisted_5$b = { class: "text-2xl font-bold" };
const _hoisted_6$7 = { class: "top-card-text" };
const _hoisted_7$7 = { class: "text-2xl font-bold" };
const _hoisted_8$6 = { class: "top-card-text" };
const _hoisted_9$6 = { class: "text-2xl font-bold" };
const _hoisted_10$6 = { class: "top-card-text" };
const _hoisted_11$6 = { class: "text-2xl font-bold" };
const _hoisted_12$6 = {
  class: "charts",
  style: { "gap": "20px", "margin-top": "20px", "padding-left": "20px", "padding-right": "20px" }
};
const _hoisted_13$4 = { ref: "chartRef1" };
const _hoisted_14$4 = {
  key: 1,
  class: "loading-state"
};
const _hoisted_15$4 = { ref: "chartRef2" };
const _hoisted_16$4 = {
  key: 1,
  class: "loading-state"
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    useNCDDashboardStore();
    const isChartReady = ref(false);
    const dashboardData = ref({
      total_pending_dispensations: 0,
      total_defaulters: 0,
      total_complications: 0,
      total_client_registered: 0,
      diagnosis_data: {
        series: [],
        categories: []
      },
      gender_data: {
        series: [],
        categories: []
      },
      isLoading: false
    });
    const appointments = ref([]);
    const lineChartOptions = computed(() => ({
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      xaxis: {
        categories: dashboardData.value.gender_data.categories
      },
      colors: ["#2563eb", "#10b981"],
      grid: {
        borderColor: "#f3f4f6",
        row: {
          colors: ["transparent", "transparent"],
          opacity: 0.5
        }
      },
      tooltip: {
        theme: "light"
      },
      legend: {
        show: true,
        position: "top"
      }
    }));
    const barChartOptions = computed(() => ({
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false
        }
      },
      xaxis: {
        categories: dashboardData.value.diagnosis_data.categories
      },
      colors: ["#2563eb", "#10b981", "#f43f5e"],
      grid: {
        borderColor: "#f3f4f6",
        row: {
          colors: ["transparent", "transparent"],
          opacity: 0.5
        }
      },
      tooltip: {
        theme: "light"
      },
      legend: {
        show: true,
        position: "top"
      }
    }));
    const initializeChartData = async () => {
      if (Service.getLanConnectionStatus() || Service.getPouchDbStatus()) {
        dashboardData.value = await getNcdDashboard();
      } else {
        const start = HisDate.toStandardHisFormat(HisDate.sessionDate());
        const end = HisDate.toStandardHisFormat(HisDate.sessionDate());
        const url = `programs/${Service.getProgramID()}/reports/ncd_dashboard`;
        dashboardData.value = await Service.getJson(url, {
          start_date: start,
          end_date: end
        });
      }
      await nextTick();
      setTimeout(() => {
        isChartReady.value = true;
      }, 100);
    };
    const navigationMenu = (url) => {
      try {
        menuController.close();
        router.push(url).then(() => {
        });
      } catch (error) {
        console.error(error);
      }
    };
    const setActiveItemRefFN = (ref2) => {
      console.log("Setting active item:", ref2);
    };
    watch(
      () => route.path,
      async () => {
        await initializeChartData();
      },
      { deep: true }
    );
    onMounted(async () => {
      await initializeChartData();
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$k, [
          createVNode(_component_ion_card, {
            class: "top-card action-card",
            onClick: _cache[0] || (_cache[0] = ($event) => setActiveItemRefFN("appointments"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$k, [
                    createBaseVNode("div", _hoisted_3$i, toDisplayString(appointments.value?.length || 0), 1),
                    _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-sm font-medium" }, "Today's Appointments", -1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_card, { class: "top-card action-card" }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$c, [
                    createBaseVNode("div", _hoisted_5$b, toDisplayString(dashboardData.value.total_pending_dispensations), 1),
                    _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-sm font-medium" }, "Pending Dispensations", -1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_card, { class: "top-card action-card" }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6$7, [
                    createBaseVNode("div", _hoisted_7$7, toDisplayString(dashboardData.value.total_defaulters), 1),
                    _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-sm font-medium" }, "Defaulters", -1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_card, { class: "top-card action-card" }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_8$6, [
                    createBaseVNode("div", _hoisted_9$6, toDisplayString(dashboardData.value.total_complications), 1),
                    _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-sm font-medium" }, "Complications", -1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_card, {
            class: "top-card action-card",
            onClick: _cache[1] || (_cache[1] = ($event) => navigationMenu("NCDActivePatients"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_10$6, [
                    createBaseVNode("div", _hoisted_11$6, toDisplayString(dashboardData.value.total_client_registered), 1),
                    _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-sm font-medium" }, "Total active patients", -1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_12$6, [
          createVNode(_component_ion_card, {
            style: { "margin-bottom": "20px", "background-color": "#fff", "width": "100%" },
            class: "top-card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  _cache[7] || (_cache[7] = createBaseVNode("div", { class: "font-medium" }, "Quarterly Case Distribution", -1)),
                  createBaseVNode("div", _hoisted_13$4, [
                    isChartReady.value ? (openBlock(), createBlock(unref(m), {
                      key: 0,
                      style: { "width": "100%", "height": "500px" },
                      type: "bar",
                      options: barChartOptions.value,
                      series: dashboardData.value.diagnosis_data.series
                    }, null, 8, ["options", "series"])) : createCommentVNode("", true),
                    dashboardData.value.isLoading ? (openBlock(), createElementBlock("div", _hoisted_14$4, "Loading...")) : createCommentVNode("", true)
                  ], 512)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_card, {
            style: { "margin-bottom": "20px", "background-color": "#fff", "width": "100%" },
            class: "top-card"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  _cache[8] || (_cache[8] = createBaseVNode("div", { class: "font-medium" }, "Patients by gender", -1)),
                  createBaseVNode("div", _hoisted_15$4, [
                    isChartReady.value ? (openBlock(), createBlock(unref(m), {
                      key: 0,
                      style: { "width": "100%", "height": "500px" },
                      type: "line",
                      options: lineChartOptions.value,
                      series: dashboardData.value.gender_data.series
                    }, null, 8, ["options", "series"])) : createCommentVNode("", true),
                    dashboardData.value.isLoading ? (openBlock(), createElementBlock("div", _hoisted_16$4, "Loading...")) : createCommentVNode("", true)
                  ], 512)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});

const Dashboard$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-a5d22305"]]);

const useNCDDashBoardStore = defineStore("NCDDashBoardStore", {
  state: () => ({
    selectedItem: null
  }),
  actions: {
    setSelectedItem(itemName) {
      this.selectedItem = itemName;
    },
    getSelectedItem() {
      return this.selectedItem;
    }
  },
  persist: true
});

const useDashboardMixin = () => {
  const activeIteminMixin = ref(null);
  const setActiveItem = (itemId) => {
    activeIteminMixin.value = itemId;
    console.log("lll: ", activeIteminMixin.value);
  };
  return {
    activeIteminMixin,
    setActiveItem
  };
};
const _sfc_main$q = defineComponent({
  name: "useDashboardMixin",
  data() {
    return {
      isMobile: false,
      appointments: [],
      activeIteminMixin: null
    };
  },
  setup() {
    const { activeIteminMixin, setActiveItem } = useDashboardMixin();
    return {
      chevronBackOutline,
      checkmark,
      grid,
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document: document$1,
      globe,
      medkit,
      add,
      person,
      people,
      thermometer,
      clipboard,
      activeIteminMixin,
      setActiveItem
    };
  },
  async mounted() {
    await this.setAppointments();
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  watch: {
    $route: {
      async handler(data) {
        await this.setAppointments();
      },
      deep: true
    }
  },
  methods: {
    async setAppointments() {
      this.appointments = await AppointmentService.getDailyAppointments(HisDate.sessionDate());
      if (this.appointments) this.appointments = this.appointments.sort((a, b) => a.given_name.localeCompare(b.given_name));
    },
    formatBirthdate(birthdate) {
      return HisDate.getBirthdateAge(birthdate);
    },
    setActiveItemRefFN(itemID) {
      const stores = useNCDDashBoardStore();
      stores.setSelectedItem(itemID);
    }
  }
});

const _sfc_main$p = defineComponent({
  name: "Home",
  mixins: [_sfc_main$v, _sfc_main$q],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonRow,
    DateInputField,
    IonIcon,
    IonButton,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    ViewToggleComponent,
    bottomNavBar: BottomNavBar,
    HorizontalLine
  },
  data() {
    const savedStartDate = localStorage.getItem("ncdStartDate");
    const savedEndDate = localStorage.getItem("ncdEndDate");
    const startDate = ref(savedStartDate || HisDate.sessionDate());
    const endDate = ref(savedEndDate || HisDate.sessionDate());
    const minDate = ref(HisDate.sessionDate());
    const maxDate = ref(HisDate.sessionDate());
    const people = ref([]);
    const pagination = reactive({
      page: 1,
      itemsPerPage: 10
    });
    const totalCount = ref(0);
    const actionButtonStore = useActionButtonStore();
    const currentToggleView = ref("list");
    return {
      minDate,
      startDate,
      endDate,
      people,
      calendarOutline,
      openOutline,
      maxDate,
      alertCircleOutline,
      personOutline,
      idCardOutline,
      manOutline,
      womanOutline,
      locationOutline,
      timeOutline,
      todayOutline,
      pagination,
      totalCount,
      actionButtonStore,
      currentToggleView
    };
  },
  computed: {
    ...mapState(useGeneralStore, ["NCDAppointmentsTogglePreference"]),
    // Computed property for paginated data
    paginatedPeople() {
      const startIndex = (this.pagination.page - 1) * this.pagination.itemsPerPage;
      const endIndex = startIndex + this.pagination.itemsPerPage;
      return this.people.slice(startIndex, endIndex);
    },
    // Computed property for grouped paginated data by appointment date
    groupedPaginatedPeople() {
      const grouped = {};
      this.paginatedPeople.forEach((person) => {
        const date = person.appointmentDate;
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(person);
      });
      const sortedDates = Object.keys(grouped).sort((a, b) => new Date(a) - new Date(b));
      const sortedGrouped = {};
      sortedDates.forEach((date) => {
        sortedGrouped[date] = grouped[date];
      });
      return sortedGrouped;
    }
  },
  $route: {
    async handler() {
    },
    deep: true
  },
  watch: {
    // Watch for changes in the store preference and sync with local state
    NCDAppointmentsTogglePreference: {
      handler(newPreference) {
        if (newPreference && newPreference.toggle_view) {
          this.currentToggleView = newPreference.toggle_view;
        }
      },
      deep: true,
      immediate: true
    }
  },
  async mounted() {
    this.initTogglePreference();
    this.getAppointments();
    this.HideHomePageActionButton();
  },
  async unmounted() {
    this.actionButtonStore.resetShowActionButton();
  },
  methods: {
    formatBirthdate(birthdate) {
      return HisDate.getBirthdateAge(birthdate);
    },
    async getAppointments(useTodayDates = false) {
      const statusStore = useStatusStore();
      if (statusStore.apiStatus) {
        this.people = [];
        this.pagination.page = 1;
        try {
          if (useTodayDates == true) {
            this.startDate = HisDate.sessionDate();
            this.endDate = HisDate.sessionDate();
            this.getAppointmentsD1(this.startDate);
            this.getAppointmentsD2(this.endDate);
          }
          if (this.startDate > this.endDate) {
            this.endDate = this.startDate;
          }
          console.log(this.startDate, this.endDate);
          const appointments = await Appointment.getAppointments(this.startDate, this.endDate, "");
          appointments.forEach((client) => {
            const appointmentDate = HisDate.toStandardHisDisplayFormat(client.appointment_date);
            const exists = this.people.some((p) => p.person_id === client.person_id && p.appointmentDate === appointmentDate);
            if (!exists) {
              const apptOb = {
                person_id: client.person_id,
                npid: client.npid,
                appointment_id: 103,
                encounter_id: client.encounter_id,
                name: client.given_name.concat(" ", client.family_name),
                gender: client.gender,
                ageDob: this.formatBirthdate(client.birthdate),
                village: client.city_village,
                appointmentDate
              };
              this.people.push(apptOb);
            }
          });
          this.totalCount = this.people.length;
        } catch (error) {
        }
      }
    },
    async getAppointmentsD1(date) {
      this.startDate = HisDate.toStandardHisFormat(date);
      localStorage.setItem("ncdStartDate", this.startDate);
      await this.getAppointments();
    },
    async getAppointmentsD2(date) {
      this.endDate = HisDate.toStandardHisFormat(date);
      localStorage.setItem("ncdEndDate", this.endDate);
      await this.getAppointments();
    },
    async openClientProfile(patientID) {
      const patientData = await PatientService.findByNpid(patientID);
      useDemographicsStore().setPatientRecord(patientData[0]);
      this.redirectUser();
    },
    handleViewChange(view) {
      this.currentToggleView = view;
      this.initTogglePreference(view, true);
    },
    initTogglePreference(toggle_view = "list", updateStore = false) {
      const preference = { toggle_view };
      const generalStore = useGeneralStore();
      if (Object.keys(this.NCDAppointmentsTogglePreference).length === 0) {
        preference.toggle_view = "list";
        generalStore.setNCDAppointmentsTogglePreference(preference);
        this.currentToggleView = "list";
      } else if (updateStore === true) {
        generalStore.setNCDAppointmentsTogglePreference(preference);
      } else {
        this.currentToggleView = this.NCDAppointmentsTogglePreference.toggle_view || "list";
      }
    },
    redirectUser() {
      const roleData = JSON.parse(localStorage.getItem("userRoles"));
      const roles = roleData ? roleData : [];
      if (roles.some((role) => roles.some((role2) => role2.role === "Pharmacist"))) {
        this.$router.push("NCDDispensations");
      } else {
        this.$router.push("patientProfile");
      }
    },
    handlePaginationUpdate({ page, itemsPerPage }) {
      if (itemsPerPage !== this.pagination.itemsPerPage) {
        const currentItemIndex = (this.pagination.page - 1) * this.pagination.itemsPerPage;
        const newPage = Math.floor(currentItemIndex / itemsPerPage) + 1;
        const maxPage = Math.ceil(this.totalCount / itemsPerPage);
        this.pagination.page = Math.min(newPage, maxPage) || 1;
        this.pagination.itemsPerPage = itemsPerPage;
      } else {
        this.pagination.page = page;
      }
    },
    HideHomePageActionButton() {
      this.actionButtonStore.setShowActionButton(false);
    }
  }
});

const _hoisted_1$j = { class: "appointments-container" };
const _hoisted_2$j = { class: "date-filter" };
const _hoisted_3$h = {
  key: 0,
  style: { "margin": "20px" }
};
const _hoisted_4$b = { key: 1 };
const _hoisted_5$a = { class: "appointments-table" };
const _hoisted_6$6 = { key: 2 };
const _hoisted_7$6 = { class: "date-group-header" };
const _hoisted_8$5 = { class: "date-header-title" };
const _hoisted_9$5 = { class: "date-header-count" };
const _hoisted_10$5 = { class: "cards-container" };
const _hoisted_11$5 = { class: "card-details" };
const _hoisted_12$5 = { class: "detail-item" };
const _hoisted_13$3 = { class: "detail-value" };
const _hoisted_14$3 = { class: "detail-item" };
const _hoisted_15$3 = { class: "detail-value" };
const _hoisted_16$3 = { class: "detail-item" };
const _hoisted_17$3 = { class: "detail-value" };
const _hoisted_18$3 = { class: "detail-item" };
const _hoisted_19$3 = { class: "detail-value" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DateInputField = resolveComponent("DateInputField");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ViewToggleComponent = resolveComponent("ViewToggleComponent");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_HorizontalLine = resolveComponent("HorizontalLine");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_bottomNavBar = resolveComponent("bottomNavBar");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createBaseVNode("div", _hoisted_2$j, [
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_DateInputField, {
                inputHeader: "Start Date",
                sectionHeaderFontWeight: 20,
                unit: "",
                icon: _ctx.calendarOutline,
                placeholder: "press to select date",
                iconRight: "",
                inputWidth: "100%",
                inputValue: _ctx.startDate,
                eventType: "",
                minDate: "",
                maxDate: "",
                disabled: false,
                "onUpdate:rawDateValue": _ctx.getAppointmentsD1,
                fontSize: "20px",
                bold: "600"
              }, null, 8, ["icon", "inputValue", "onUpdate:rawDateValue"])
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_DateInputField, {
                inputHeader: "End Date",
                sectionHeaderFontWeight: 20,
                unit: "",
                icon: _ctx.calendarOutline,
                placeholder: "press to select date",
                iconRight: "",
                inputWidth: "100%",
                inputValue: _ctx.endDate,
                eventType: "",
                minDate: _ctx.startDate,
                maxDate: "",
                disabled: false,
                "onUpdate:rawDateValue": _ctx.getAppointmentsD2,
                fontSize: "20px",
                bold: "600"
              }, null, 8, ["icon", "inputValue", "minDate", "onUpdate:rawDateValue"])
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                color: "primary",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.getAppointments(true)),
                class: "apt-btn"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.todayOutline,
                    slot: "start"
                  }, null, 8, ["icon"]),
                  _cache[1] || (_cache[1] = createBaseVNode("span", { style: { "margin": "5px" } }, " Today ", -1))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_ViewToggleComponent, {
                "initial-view": _ctx.currentToggleView,
                onViewChanged: _ctx.handleViewChange
              }, null, 8, ["initial-view", "onViewChanged"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    createVNode(_component_ion_content, { class: "scrollable-content" }, {
      default: withCtx(() => [
        _ctx.people.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3$h, [
          createVNode(_component_ion_icon, {
            icon: _ctx.alertCircleOutline,
            size: "large",
            class: "mb-4 text-gray-500"
          }, null, 8, ["icon"]),
          _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "text-xl font-semibold text-gray-700 mb-2" }, "No Appointments for selected date range", -1))
        ])) : _ctx.currentToggleView === "list" && _ctx.people.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4$b, [
          createVNode(_component_ion_card, null, {
            default: withCtx(() => [
              createBaseVNode("table", _hoisted_5$a, [
                _cache[3] || (_cache[3] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", null, "Name"),
                    createBaseVNode("th", null, "NPID"),
                    createBaseVNode("th", null, "Age/DOB"),
                    createBaseVNode("th", null, "Gender"),
                    createBaseVNode("th", null, "Village"),
                    createBaseVNode("th", null, "Appointment Date")
                  ])
                ], -1)),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.paginatedPeople, (person) => {
                    return openBlock(), createElementBlock("tr", {
                      key: person.npid
                    }, [
                      createBaseVNode("td", null, [
                        createVNode(_component_ion_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_col, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(person.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ion_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_ion_button, {
                                  style: { "position": "absolute", "right": "10px", "--padding-start": "8px", "--padding-end": "8px", "--padding-bottom": "4px", "--box-shadow": "none" },
                                  onClick: ($event) => _ctx.openClientProfile(person.npid),
                                  color: "primary",
                                  fill: "clear",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      icon: _ctx.openOutline,
                                      style: { "font-size": "28px" }
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createBaseVNode("td", null, toDisplayString(person.npid), 1),
                      createBaseVNode("td", null, toDisplayString(person.ageDob), 1),
                      createBaseVNode("td", null, toDisplayString(person.gender), 1),
                      createBaseVNode("td", null, toDisplayString(person.village), 1),
                      createBaseVNode("td", null, toDisplayString(person.appointmentDate), 1)
                    ]);
                  }), 128))
                ])
              ])
            ]),
            _: 1
          })
        ])) : _ctx.currentToggleView === "card" && _ctx.people.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.groupedPaginatedPeople, (appointmentsGroup, date) => {
            return openBlock(), createElementBlock("div", {
              key: date,
              class: "date-group"
            }, [
              createBaseVNode("div", _hoisted_7$6, [
                createVNode(_component_ion_icon, {
                  icon: _ctx.calendarOutline,
                  class: "date-header-icon"
                }, null, 8, ["icon"]),
                createBaseVNode("h2", _hoisted_8$5, toDisplayString(date), 1),
                createBaseVNode("div", _hoisted_9$5, toDisplayString(appointmentsGroup.length) + " appointment" + toDisplayString(appointmentsGroup.length !== 1 ? "s" : ""), 1)
              ]),
              createVNode(_component_HorizontalLine, {
                color: "#006401",
                thickness: 1,
                spacing: "sm"
              }),
              createBaseVNode("div", _hoisted_10$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(appointmentsGroup, (person) => {
                  return openBlock(), createBlock(_component_ion_card, {
                    key: person.npid,
                    class: "appointment-card"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_row, { class: "ion-align-items-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_title, { class: "card-name" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_icon, {
                                        icon: _ctx.personOutline,
                                        class: "name-icon"
                                      }, null, 8, ["icon"]),
                                      createTextVNode(" " + toDisplayString(person.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ion_col, { size: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_button, {
                                    onClick: ($event) => _ctx.openClientProfile(person.npid),
                                    color: "primary",
                                    fill: "clear",
                                    size: "small",
                                    class: "view-profile-btn"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ion_icon, { icon: _ctx.openOutline }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_card_content, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_11$5, [
                            createBaseVNode("div", _hoisted_12$5, [
                              createVNode(_component_ion_icon, {
                                icon: _ctx.idCardOutline,
                                class: "detail-icon"
                              }, null, 8, ["icon"]),
                              _cache[4] || (_cache[4] = createBaseVNode("span", { class: "detail-label" }, "NPID:", -1)),
                              createBaseVNode("span", _hoisted_13$3, toDisplayString(person.npid), 1)
                            ]),
                            createBaseVNode("div", _hoisted_14$3, [
                              createVNode(_component_ion_icon, {
                                icon: _ctx.calendarOutline,
                                class: "detail-icon"
                              }, null, 8, ["icon"]),
                              _cache[5] || (_cache[5] = createBaseVNode("span", { class: "detail-label" }, "Age/DOB:", -1)),
                              createBaseVNode("span", _hoisted_15$3, toDisplayString(person.ageDob), 1)
                            ]),
                            createBaseVNode("div", _hoisted_16$3, [
                              createVNode(_component_ion_icon, {
                                icon: person.gender === "Male" ? _ctx.manOutline : _ctx.womanOutline,
                                class: "detail-icon"
                              }, null, 8, ["icon"]),
                              _cache[6] || (_cache[6] = createBaseVNode("span", { class: "detail-label" }, "Gender:", -1)),
                              createBaseVNode("span", _hoisted_17$3, toDisplayString(person.gender), 1)
                            ]),
                            createBaseVNode("div", _hoisted_18$3, [
                              createVNode(_component_ion_icon, {
                                icon: _ctx.locationOutline,
                                class: "detail-icon"
                              }, null, 8, ["icon"]),
                              _cache[7] || (_cache[7] = createBaseVNode("span", { class: "detail-label" }, "Village:", -1)),
                              createBaseVNode("span", _hoisted_19$3, toDisplayString(person.village), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    _ctx.people.length > 0 ? (openBlock(), createBlock(_component_ion_footer, {
      key: 0,
      class: "sticky-footer"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, {
              size: "12",
              style: { "max-width": "100%" }
            }, {
              default: withCtx(() => [
                createVNode(_component_bottomNavBar, {
                  totalItems: _ctx.totalCount,
                  currentPage: _ctx.pagination.page,
                  itemsPerPage: _ctx.pagination.itemsPerPage,
                  "onUpdate:pagination": _ctx.handlePaginationUpdate
                }, null, 8, ["totalItems", "currentPage", "itemsPerPage", "onUpdate:pagination"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const NCDAppointments = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$d], ["__scopeId", "data-v-6d92a5ce"]]);

const _hoisted_1$i = {
  key: 0,
  class: "left_col"
};
const _hoisted_2$i = { class: "nav-menu" };
const _hoisted_3$g = ["onClick"];
const _hoisted_4$a = { class: "ellipsis" };
const _hoisted_5$9 = {
  key: 1,
  style: { "padding-left": "20px", "padding-right": "20px" }
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "NCDDashboard",
  setup(__props) {
    const NCDDashBoardStores = useNCDDashBoardStore();
    const selectedItem = computed(() => NCDDashBoardStores.selectedItem);
    const { screenWidth } = useWindowSize();
    const menuItems = ref([
      {
        id: "dashboard",
        label: "Dashboard",
        icon: gridOutline
      },
      {
        id: "referrals",
        label: "Referrals",
        icon: peopleOutline
      },
      {
        id: "appointments",
        label: "Appointments",
        icon: calendarOutline
      }
    ]);
    const activeItem = ref("dashboard");
    const enrollmentStore = useEnrollementStore();
    const { substance } = storeToRefs(enrollmentStore);
    watch(
      () => substance.value,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          console.log("Substance changed:", newValue);
        }
      },
      {
        deep: true,
        immediate: true
      }
    );
    const setActiveItemLocal = (id) => {
      activeItem.value = id;
      const stores = useNCDDashBoardStore();
      stores.setSelectedItem(activeItem.value);
    };
    watch(
      () => selectedItem.value,
      (newValue) => {
        console.log("Active item from mixin changed:", newValue);
        if (newValue) {
          if (newValue != null) {
            setActiveItemLocal(newValue);
          }
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      const _component_ion_segment_button = resolveComponent("ion-segment-button");
      const _component_ion_segment = resolveComponent("ion-segment");
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(unref(screenWidth) > 940 ? "display: flex" : "display: block")
      }, [
        unref(screenWidth) > 940 ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
          createBaseVNode("nav", _hoisted_2$i, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(menuItems.value, (item) => {
                return openBlock(), createElementBlock("li", {
                  key: item.id,
                  class: normalizeClass({ active: activeItem.value === item.id }),
                  onClick: ($event) => setActiveItemLocal(item.id)
                }, [
                  createVNode(unref(IonIcon), {
                    icon: item.icon,
                    style: { "font-size": "20px" },
                    class: "menu-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("span", _hoisted_4$a, toDisplayString(item.label), 1)
                ], 10, _hoisted_3$g);
              }), 128))
            ])
          ])
        ])) : createCommentVNode("", true),
        unref(screenWidth) <= 940 ? (openBlock(), createElementBlock("div", _hoisted_5$9, [
          createVNode(_component_ion_segment, {
            value: activeItem.value,
            style: { "margin-top": "5px", "justify-content": "left" }
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(menuItems.value, (item) => {
                return openBlock(), createBlock(_component_ion_segment_button, {
                  value: item.id,
                  key: item.id,
                  class: normalizeClass({ active: activeItem.value === item.id }),
                  onClick: ($event) => setActiveItemLocal(item.id)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: item.icon,
                      style: { "font-size": "20px" },
                      class: "menu-icon"
                    }, null, 8, ["icon"]),
                    createBaseVNode("span", null, toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["value", "class", "onClick"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "right_col",
          style: normalizeStyle(unref(screenWidth) > 940 ? "width: 85%" : "width: 100%")
        }, [
          createBaseVNode("div", null, [
            activeItem.value === "referrals" ? (openBlock(), createBlock(Referral, { key: 0 })) : createCommentVNode("", true),
            activeItem.value === "dashboard" ? (openBlock(), createBlock(Dashboard$1, { key: 1 })) : createCommentVNode("", true),
            activeItem.value === "appointments" ? (openBlock(), createBlock(NCDAppointments, { key: 2 })) : createCommentVNode("", true)
          ])
        ], 4)
      ], 4);
    };
  }
});

const NCDDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-a1132315"]]);

class HTCServiceDashboards extends Service {
  constructor() {
    super();
  }
  static async getHTCDashboardSummary(params = {}) {
    return this.getJson("hts_stats", params);
  }
}

const _hoisted_1$h = { class: "content-wrapper dashboard" };
const _hoisted_2$h = { class: "header" };
const _hoisted_3$f = { class: "overlay" };
const _hoisted_4$9 = { class: "big-number" };
const _hoisted_5$8 = { class: "" };
const _hoisted_6$5 = { class: "cards" };
const _hoisted_7$5 = { class: "card" };
const _hoisted_8$4 = { class: "card-info" };
const _hoisted_9$4 = { class: "card-number" };
const _hoisted_10$4 = { class: "card" };
const _hoisted_11$4 = { class: "card-info" };
const _hoisted_12$4 = { class: "card-number" };
const _hoisted_13$2 = { class: "card" };
const _hoisted_14$2 = { class: "card-info" };
const _hoisted_15$2 = { class: "card-number" };
const _hoisted_16$2 = { class: "card" };
const _hoisted_17$2 = { class: "card-info" };
const _hoisted_18$2 = { class: "card-number" };
const _hoisted_19$2 = { class: "section-title" };
const _hoisted_20$2 = { class: "section" };
const _hoisted_21$2 = { class: "filter-bar" };
const _hoisted_22$2 = { class: "patient-list" };
const _hoisted_23$1 = ["onClick"];
const _hoisted_24$1 = { class: "status-tags" };
const _hoisted_25$1 = {
  class: /* @__PURE__ */ normalizeClass(["tag", "yellow"])
};
const _hoisted_26 = { class: "pagination" };
const _hoisted_27 = ["disabled"];
const _hoisted_28 = { class: "pagination-info" };
const _hoisted_29 = { class: "showing-info" };
const _hoisted_30 = ["disabled"];
const itemsPerPage = 5;
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "HTSDashboard",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const demographicsStore = useDemographicsStore();
    const stats = ref({
      clients_with_conclusive_results: 0,
      total_clients: 0,
      clients_tested_today: 0,
      clients_referred_to_ART: 0,
      visit_scheduled_today: 0,
      patient_data: []
    });
    const searchFilter = ref("");
    const currentPage = ref(1);
    const totalPatients = computed(() => filteredPatients.value.length);
    const totalPages = computed(() => Math.ceil(totalPatients.value / itemsPerPage));
    const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
    const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage, totalPatients.value));
    const paginatedPatients = computed(() => {
      return filteredPatients.value.slice(startIndex.value, endIndex.value);
    });
    const normalize = (str) => str.toLowerCase().trim().replace(/\s+/g, " ");
    const filteredPatients = computed(() => {
      if (!searchFilter.value.trim()) return stats.value.patient_data;
      const term = normalize(searchFilter.value);
      return stats.value.patient_data.filter((p) => {
        const fullName = normalize(p.patient_name || "");
        return fullName.includes(term) || normalize(p.patient_gender || "").includes(term) || normalize(p.program_names || "").includes(term) || String(p.patient_age).includes(term);
      });
    });
    function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    }
    function prevPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }
    const showPatientDetails = async (patient) => {
      await demographicsStore.setPatientRecord({
        patient_id: patient.patient_id
      });
      router.push("/patientProfile");
    };
    watch(searchFilter, () => {
      currentPage.value = 1;
    });
    watch(route, async () => {
      if (route.name == "Home") {
        await fetchStats();
      }
    });
    onMounted(async () => {
      await fetchStats();
    });
    async function fetchStats() {
      stats.value = await HTCServiceDashboards.getHTCDashboardSummary();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonContent), { class: "content" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$h, [
            createBaseVNode("div", _hoisted_2$h, [
              createBaseVNode("div", _hoisted_3$f, [
                createBaseVNode("h1", _hoisted_4$9, toDisplayString(stats.value?.clients_with_conclusive_results), 1),
                _cache[1] || (_cache[1] = createBaseVNode("p", { class: "header-text" }, [
                  createTextVNode(" Total Number of Clients Tested"),
                  createBaseVNode("br"),
                  createTextVNode(" with Conclusive Results ")
                ], -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_5$8, [
              _cache[8] || (_cache[8] = createBaseVNode("h2", { class: "section-title" }, "Today's Stats", -1)),
              createBaseVNode("div", _hoisted_6$5, [
                createBaseVNode("div", _hoisted_7$5, [
                  createBaseVNode("div", _hoisted_8$4, [
                    createVNode(unref(IonIcon), {
                      icon: unref(peopleOutline),
                      class: "card-icon"
                    }, null, 8, ["icon"])
                  ]),
                  _cache[2] || (_cache[2] = createBaseVNode("div", { class: "card-info" }, [
                    createBaseVNode("p", null, "Total Clients")
                  ], -1)),
                  createBaseVNode("div", _hoisted_9$4, toDisplayString(stats.value.total_clients), 1)
                ]),
                createBaseVNode("div", _hoisted_10$4, [
                  createBaseVNode("div", _hoisted_11$4, [
                    createVNode(unref(IonIcon), {
                      icon: unref(clipboardOutline),
                      class: "card-icon"
                    }, null, 8, ["icon"])
                  ]),
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "card-info" }, [
                    createBaseVNode("p", null, "Clients Tested Today")
                  ], -1)),
                  createBaseVNode("div", _hoisted_12$4, toDisplayString(stats.value.clients_tested_today), 1)
                ]),
                createBaseVNode("div", _hoisted_13$2, [
                  createBaseVNode("div", _hoisted_14$2, [
                    createVNode(unref(IonIcon), {
                      icon: unref(medkitOutline),
                      class: "card-icon"
                    }, null, 8, ["icon"])
                  ]),
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "card-info" }, [
                    createBaseVNode("p", null, "Clients Referred To ART")
                  ], -1)),
                  createBaseVNode("div", _hoisted_15$2, toDisplayString(stats.value.clients_referred_to_ART), 1)
                ]),
                createBaseVNode("div", _hoisted_16$2, [
                  createBaseVNode("div", _hoisted_17$2, [
                    createVNode(unref(IonIcon), {
                      icon: unref(calendarOutline),
                      class: "card-icon"
                    }, null, 8, ["icon"])
                  ]),
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "card-info" }, [
                    createBaseVNode("p", null, "Visit Scheduled Today")
                  ], -1)),
                  createBaseVNode("div", _hoisted_18$2, toDisplayString(stats.value.visit_scheduled_today), 1)
                ])
              ]),
              createBaseVNode("h2", _hoisted_19$2, "Patient Awaiting List (" + toDisplayString(totalPatients.value) + ")", 1),
              createBaseVNode("div", _hoisted_20$2, [
                createBaseVNode("div", _hoisted_21$2, [
                  withDirectives(createBaseVNode("input", {
                    class: "search-input",
                    type: "text",
                    placeholder: "Search Patient",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchFilter.value = $event)
                  }, null, 512), [
                    [vModelText, searchFilter.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_22$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedPatients.value, (patient) => {
                    return openBlock(), createElementBlock("div", {
                      class: "patient-item",
                      key: patient.id,
                      onClick: ($event) => showPatientDetails(patient)
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("strong", null, toDisplayString(patient.patient_name), 1),
                        createBaseVNode("p", null, toDisplayString(patient.patient_gender == "M" ? "Male" : "Female") + " • " + toDisplayString(patient.patient_age) + "y", 1)
                      ]),
                      createBaseVNode("div", _hoisted_24$1, [
                        createBaseVNode("span", _hoisted_25$1, toDisplayString(patient.program_names), 1)
                      ])
                    ], 8, _hoisted_23$1);
                  }), 128))
                ]),
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("button", {
                    onClick: prevPage,
                    disabled: currentPage.value === 1,
                    class: "pagination-btn"
                  }, [
                    createVNode(unref(IonIcon), { icon: unref(chevronBackOutline) }, null, 8, ["icon"]),
                    _cache[6] || (_cache[6] = createTextVNode(" Previous ", -1))
                  ], 8, _hoisted_27),
                  createBaseVNode("div", _hoisted_28, [
                    createTextVNode(" Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value) + " ", 1),
                    createBaseVNode("span", _hoisted_29, "(Showing " + toDisplayString(startIndex.value + 1) + "-" + toDisplayString(endIndex.value) + " of " + toDisplayString(totalPatients.value) + ")", 1)
                  ]),
                  createBaseVNode("button", {
                    onClick: nextPage,
                    disabled: currentPage.value === totalPages.value,
                    class: "pagination-btn"
                  }, [
                    _cache[7] || (_cache[7] = createTextVNode(" Next ", -1)),
                    createVNode(unref(IonIcon), { icon: unref(chevronForwardOutline) }, null, 8, ["icon"])
                  ], 8, _hoisted_30)
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

const HTSDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-dde1df6c"]]);

const encounters = {
  "HIV clinic registration": encounterTypes.HIV_CLINIC_REGISTRATION,
  "HIV reception": encounterTypes.HIV_RECEPTION,
  Vitals: encounterTypes.VITALS,
  "HIV staging": encounterTypes.HIV_STAGING,
  "HIV clinic consultation": encounterTypes.HIV_CLINIC_CONSULTATION,
  "ART adherence": encounterTypes.ART_ADHERENCE,
  Prescription: encounterTypes.TREATMENT,
  Dispensing: encounterTypes.DISPENSING,
  Appointments: encounterTypes.APPOINTMENT
};
class EncounterReportService extends ReportService {
  constructor() {
    super();
  }
  buildEncounters(facility, user) {
    return Object.entries(encounters).map(([encounter, id]) => ({
      encounter,
      female: facility ? facility[id]["F"] : 0,
      male: facility ? facility[id]["M"] : 0,
      me: user ? user[id]["F"] + user[id]["M"] : 0,
      facility: facility ? facility[id]["F"] + facility[id]["M"] : 0
    }));
  }
  async getStats() {
    const encounter_types = Object.values(encounters);
    const url = parameterizeUrl("reports/encounters", this.buildParams());
    const userRes = await Service.postJson(url, { encounter_types });
    const facilityRes = await Service.postJson(url, { encounter_types, all: true });
    return this.buildEncounters(userRes.data, facilityRes.data);
  }
  getEncounterStats(data) {
    return Service.postJson(`reports/encounters?date=${this.date}&program_id=1`, data);
  }
}

const _hoisted_1$g = { class: "dashboard-container" };
const _hoisted_2$g = { class: "main-section" };
const _hoisted_3$e = { class: "chart-section" };
const _hoisted_4$8 = { class: "encounters-section" };
const _hoisted_5$7 = { class: "his-sm-text" };
const _hoisted_6$4 = { key: 0 };
const _hoisted_7$4 = { class: "encounter-td" };
const _hoisted_8$3 = { class: "other-td" };
const _hoisted_9$3 = { class: "other-td" };
const _hoisted_10$3 = { class: "other-td" };
const _hoisted_11$3 = { class: "other-td" };
const _hoisted_12$3 = { key: 1 };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ARTDashboard",
  setup(__props) {
    const rows = ref([]);
    const chartData = reactive({
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: ["", "", "", "", ""]
        },
        yaxis: {
          min: 0,
          forceNiceScale: true,
          title: {
            text: "Number of clients",
            align: "left"
          }
        }
      },
      series: [
        {
          name: "Total visits",
          data: [0, 0, 0, 0, 0],
          color: "#7cb5ec"
        },
        {
          name: "Total incomplete visits",
          data: [0, 0, 0, 0, 0],
          color: "#434348"
        }
      ]
    });
    const encounters = reactive([
      { "HIV clinic registration": 9 },
      { "HIV reception": 51 },
      { "Vitals": 6 },
      { "HIV staging": 52 },
      { "HIV clinic consultation": 53 },
      { "ART adherence": 68 },
      { "Treatment": 25 },
      { "Dispensing": 54 },
      { "Appointments": 7 }
    ]);
    const initEncounters = () => {
      rows.value = encounters.map(
        (enc) => ({
          encounter: Object.keys(enc)[0],
          female: "",
          male: "",
          me: "",
          facility: ""
        })
      );
    };
    const getVisits = async () => {
      const reportService = new PatientReportService();
      const date = Service.getSessionDate();
      reportService.setStartDate(HisDate.subtract(date, "days", 5).format(STANDARD_DATE_FORMAT));
      reportService.setEndDate(HisDate.subtract(date, "days", 1).format(STANDARD_DATE_FORMAT));
      const data = await reportService.getVisitStats();
      const incomplete = [];
      const complete = [];
      const formattedDays = [];
      Object.entries(data).forEach(([date2, { incomplete: i, complete: c }]) => {
        formattedDays.push(dayjs(date2).format("dddd"));
        incomplete.push(i);
        complete.push(i + c);
      });
      chartData.series[0].data = [...complete];
      chartData.series[1].data = [...incomplete];
      chartData.options = {
        ...chartData.options,
        ...{
          xaxis: {
            categories: [...formattedDays]
          }
        }
      };
    };
    const updateEncounters = async () => {
      try {
        const encounterService = new EncounterReportService();
        const encounter_types = encounters.map((x) => Object.values(x)[0]);
        const userData = await encounterService.getEncounterStats({ encounter_types });
        const facilityData = await encounterService.getEncounterStats({ encounter_types, all: true });
        rows.value = encounters.map((encounter) => {
          const [name, id] = Object.entries(encounter)[0];
          return {
            encounter: name,
            female: facilityData[id]["F"],
            male: facilityData[id]["M"],
            me: userData[id]["F"] + userData[id]["M"],
            facility: facilityData[id]["F"] + facilityData[id]["M"]
          };
        });
      } catch (error) {
        console.error(error);
      }
    };
    onMounted(() => {
      initEncounters();
      getVisits();
      updateEncounters();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        createBaseVNode("div", _hoisted_2$g, [
          createBaseVNode("div", _hoisted_3$e, [
            _cache[0] || (_cache[0] = createBaseVNode("h3", null, "Total visits/incomplete visits: last 5 days", -1)),
            createVNode(unref(m), {
              width: "100%",
              height: "390px",
              type: "bar",
              options: chartData.options,
              series: chartData.series
            }, null, 8, ["options", "series"])
          ]),
          createBaseVNode("div", _hoisted_4$8, [
            _cache[3] || (_cache[3] = createBaseVNode("h3", null, "Encounters created today", -1)),
            createBaseVNode("table", _hoisted_5$7, [
              _cache[2] || (_cache[2] = createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", null, "Encounters"),
                  createBaseVNode("th", null, "Female"),
                  createBaseVNode("th", null, "Male"),
                  createBaseVNode("th", null, "Me"),
                  createBaseVNode("th", null, "Facility Total")
                ])
              ], -1)),
              rows.value.length ? (openBlock(), createElementBlock("tbody", _hoisted_6$4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (data, index) => {
                  return openBlock(), createElementBlock("tr", { key: index }, [
                    createBaseVNode("td", _hoisted_7$4, toDisplayString(data.encounter), 1),
                    createBaseVNode("td", _hoisted_8$3, toDisplayString(data.female), 1),
                    createBaseVNode("td", _hoisted_9$3, toDisplayString(data.male), 1),
                    createBaseVNode("td", _hoisted_10$3, toDisplayString(data.me), 1),
                    createBaseVNode("td", _hoisted_11$3, toDisplayString(data.facility), 1)
                  ]);
                }), 128))
              ])) : (openBlock(), createElementBlock("tbody", _hoisted_12$3, [..._cache[1] || (_cache[1] = [
                createBaseVNode("tr", null, [
                  createBaseVNode("td", { colspan: "5" }, "Loading encounter stats...")
                ], -1)
              ])]))
            ])
          ])
        ])
      ]);
    };
  }
});

const ARTDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-9bb19378"]]);

class NotificationService extends Service {
  static getlogs(startDate, endDate) {
    return this.getJson("notification/logs", {
      startDate,
      endDate
    });
  }
  static clear(id) {
    return this.putJson(`notifications/clear/${id}`, { id });
  }
  static read(Notifications) {
    return this.putJson("notifications/update", { alerts: Notifications });
  }
  static unread() {
    return this.getJson("notifications");
  }
}

const notificationData = ref([]);
const router = useRouter();
function Notification() {
  const unReadNotifications = computed(() => {
    return notificationData.value.filter((n) => !n.read);
  });
  const hasNotifications = computed(() => {
    return notificationData.value.length > 0;
  });
  const hasUnreadNotifications = computed(() => {
    return unReadNotifications.value.length > 0;
  });
  const notificationCount = computed(() => {
    return unReadNotifications.value.length;
  });
  const sortedNotifications = computed(() => {
    return notificationData.value.sort((a, b) => {
      return new Date(a.date) > new Date(b.date) ? -1 : 1;
    });
  });
  function clearNotification(id, callback) {
    alertConfirmation("Are you sure you want to clear notification?").then((ok) => {
      if (ok) {
        NotificationService.clear(id).then(() => {
          notificationData.value = notificationData.value.filter((notice) => notice.id != id);
          callback(id);
          loadNotifications();
        }).catch((e) => {
          console.error(e);
          toastWarning("Unable to clear notification");
        });
      }
    });
  }
  function toDate(dateString) {
    return HisDate.toStandardHisDisplayFormat(dateString);
  }
  async function loadNotifications() {
    notificationData.value = [];
    const notifications = await NotificationService.unread();
    if (!lodashExports.isEmpty(notifications)) {
      const vlMessageObs = { highVL: [], normalVL: [], rejectedVL: [] };
      let vlMessage = {};
      notificationData.value = notifications.map((n) => {
        let type = "General";
        const message = n.text;
        let handler = null;
        try {
          const t = JSON.parse(n.text);
          if (t["Type"].match(/lims/i)) {
            handler = () => router.push(`/art/encounters/lab/${t["PatientID"]}`);
            type = `${t["Test type"]} results for ${t["ARV-Number"] || t["Accession number"]}`;
            const viralLoadStatus = OrderService.detectHighVl(t["Result"][0]["value"], t["Result"][0]["value_modifier"]);
            vlMessage = {
              handler,
              id: n.alert_id,
              arv: t["ARV-Number"],
              accession: t["Accession number"],
              order_date: toDate(t["Orde date"]),
              results: t["Result"][0]["value_modifier"] + " " + t["Result"][0]["value"],
              results_date: toDate(t["Result"][0]["date"])
            };
            if (viralLoadStatus) {
              vlMessageObs.highVL.push(vlMessage);
            } else if (t["rejection_reason"]) {
              vlMessage = {
                handler,
                id: n.alert_id,
                arv: t["arv_number"],
                accession: t["accession_number"],
                order_date: toDate(t["order_date"]),
                rejection_reason: t["rejection_reason"]
              };
              vlMessageObs.rejectedVL.push(vlMessage);
            } else if (!viralLoadStatus) {
              vlMessageObs.normalVL.push(vlMessage);
            }
          }
        } catch (e) {
          console.warn(e);
        }
        return {
          handler,
          message,
          vlMessageObs,
          title: type,
          id: n.alert_id,
          date: toDate(n.date_created)
        };
      });
    }
  }
  async function markAsRead(notification) {
    NotificationService.read([notification.id]).then(() => notification.read = true);
  }
  function openNotification(notification) {
    if (typeof notification.handler === "function") {
      markAsRead(notification);
      notification.handler();
    }
  }
  return {
    markAsRead,
    openNotification,
    loadNotifications,
    clearNotification,
    sortedNotifications,
    hasUnreadNotifications,
    notificationCount,
    hasNotifications,
    notificationData
  };
}

const _hoisted_1$f = { class: "vl-alerts-container" };
const _hoisted_2$f = { class: "table-container" };
const _hoisted_3$d = { class: "vl-table" };
const _hoisted_4$7 = { key: 0 };
const _hoisted_5$6 = { key: 0 };
const _hoisted_6$3 = ["colspan"];
const _hoisted_7$3 = { key: 0 };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "ARTVlAlert",
  setup(__props) {
    const selectedCategory = ref("high_vl");
    const { notificationData, loadNotifications, clearNotification, openNotification } = Notification();
    const highVlCount = computed(() => {
      if (!notificationData.value.length) return 0;
      const vlData = notificationData.value[0]?.vlMessageObs?.highVL || [];
      return vlData.length;
    });
    const rejectedCount = computed(() => {
      if (!notificationData.value.length) return 0;
      const vlData = notificationData.value[0]?.vlMessageObs?.rejectedVL || [];
      return vlData.length;
    });
    const normalCount = computed(() => {
      if (!notificationData.value.length) return 0;
      const vlData = notificationData.value[0]?.vlMessageObs?.normalVL || [];
      return vlData.length;
    });
    const filteredResults = computed(() => {
      if (!notificationData.value.length) return [];
      const vlMessageObs = notificationData.value[0]?.vlMessageObs;
      if (!vlMessageObs) return [];
      switch (selectedCategory.value) {
        case "high_vl":
          return vlMessageObs.highVL || [];
        case "rejected":
          return vlMessageObs.rejectedVL || [];
        case "normal":
          return vlMessageObs.normalVL || [];
        default:
          return [];
      }
    });
    const viewItem = (item) => openNotification(item);
    const clearItem = (item) => {
      if (item.id) {
        clearNotification(item.id, (id) => {
          console.log(`Cleared notification ${id}`);
        });
      }
    };
    const getEmptyMessage = () => {
      switch (selectedCategory.value) {
        case "high_vl":
          return "No high viral load results found";
        case "rejected":
          return "No rejected samples found";
        case "normal":
          return "No normal results found";
        default:
          return "No results found";
      }
    };
    onMounted(() => {
      loadNotifications();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(unref(IonSegment), {
          mode: "ios",
          modelValue: selectedCategory.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedCategory.value = $event),
          class: "category-segment"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonSegmentButton), { value: "high_vl" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createTextVNode("High VL (" + toDisplayString(highVlCount.value) + ")", 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonSegmentButton), { value: "rejected" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createTextVNode("Rejected (" + toDisplayString(rejectedCount.value) + ")", 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonSegmentButton), { value: "normal" }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), null, {
                  default: withCtx(() => [
                    createTextVNode("Normal Results (" + toDisplayString(normalCount.value) + ")", 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2$f, [
          createBaseVNode("table", _hoisted_3$d, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                _cache[1] || (_cache[1] = createBaseVNode("th", null, "ARV #", -1)),
                _cache[2] || (_cache[2] = createBaseVNode("th", null, "Accession #", -1)),
                _cache[3] || (_cache[3] = createBaseVNode("th", null, "Order Date", -1)),
                selectedCategory.value === "rejected" ? (openBlock(), createElementBlock("th", _hoisted_4$7, "Rejection Reason")) : createCommentVNode("", true),
                _cache[4] || (_cache[4] = createBaseVNode("th", null, "View", -1)),
                _cache[5] || (_cache[5] = createBaseVNode("th", null, "Clear", -1))
              ])
            ]),
            createBaseVNode("tbody", null, [
              filteredResults.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_5$6, [
                createBaseVNode("td", {
                  colspan: selectedCategory.value === "rejected" ? 6 : 5,
                  class: "empty-message"
                }, toDisplayString(getEmptyMessage()), 9, _hoisted_6$3)
              ])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredResults.value, (item) => {
                return openBlock(), createElementBlock("tr", {
                  key: item.id
                }, [
                  createBaseVNode("td", null, toDisplayString(item.arv || "-"), 1),
                  createBaseVNode("td", null, toDisplayString(item.accession || "-"), 1),
                  createBaseVNode("td", null, toDisplayString(item.order_date || "-"), 1),
                  selectedCategory.value === "rejected" ? (openBlock(), createElementBlock("td", _hoisted_7$3, toDisplayString(item.rejection_reason || "-"), 1)) : createCommentVNode("", true),
                  createBaseVNode("td", null, [
                    createVNode(unref(IonButton), {
                      fill: "clear",
                      size: "small",
                      onClick: ($event) => viewItem(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(eyeOutline),
                          slot: "icon-only"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(unref(IonButton), {
                      fill: "clear",
                      size: "small",
                      onClick: ($event) => clearItem(item),
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(checkmarkOutline),
                          slot: "icon-only"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ])
      ]);
    };
  }
});

const ARTVlAlert = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-7b9c4735"]]);

const _hoisted_1$e = { class: "dashboard-container" };
const _hoisted_2$e = { class: "segment-content" };
const _hoisted_3$c = { key: 0 };
const _hoisted_4$6 = { key: 1 };
const _hoisted_5$5 = { key: 2 };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "ARTHome",
  setup(__props) {
    const selectedSegment = ref("dashboard");
    const { notificationCount, loadNotifications } = Notification();
    onMounted(() => {
      loadNotifications();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createVNode(unref(IonSegment), {
          modelValue: selectedSegment.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedSegment.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(unref(IonSegmentButton), { value: "dashboard" }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" Overview ", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(IonSegmentButton), { value: "viralLoadAlerts" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2$e, [
                  _cache[2] || (_cache[2] = createTextVNode(" VL Alerts ", -1)),
                  unref(notificationCount) > 0 ? (openBlock(), createBlock(unref(IonBadge), {
                    key: 0,
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(notificationCount)), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }),
            createVNode(unref(IonSegmentButton), { value: "internalReferrals" }, {
              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                createTextVNode(" Internal referrals ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        selectedSegment.value === "dashboard" ? (openBlock(), createElementBlock("div", _hoisted_3$c, [
          createVNode(ARTDashboard)
        ])) : createCommentVNode("", true),
        selectedSegment.value === "viralLoadAlerts" ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
          createVNode(ARTVlAlert)
        ])) : createCommentVNode("", true),
        selectedSegment.value === "internalReferrals" ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
          createVNode(InternalReferrals)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});

const ARTHome = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-d237cab2"]]);

class WebSocketService {
  socket = null;
  channel = "ImmunizationReportChannel";
  isConnected = false;
  pendingFetch = null;
  location_id;
  constructor() {
    this.initPromise = this.init();
  }
  initPromise;
  async init() {
    const apiURL = localStorage.getItem("apiURL");
    const apiPort = localStorage.getItem("apiPort");
    const websocketProtocol = localStorage.getItem("websocketProtocol");
    this.location_id = localStorage.getItem("locationID");
    try {
      const url = false ? `${websocketProtocol}://${apiURL}:${apiPort}/cable` : `${websocketProtocol}://${apiURL}/api/v1/cable`;
      this.socket = new WebSocket(url);
      this.socket.onopen = this.onOpen;
      this.socket.onclose = this.onClose;
      this.socket.onerror = this.onError;
    } catch (error) {
      console.error(error);
      console.error("WebSocket not initialized: apiURL or apiPort is missing in localStorage.");
    }
  }
  onOpen = async () => {
    console.log("WebSocket connection established");
    this.isConnected = true;
    this.subscribe();
    await this.getPatientSummary();
    if (this.pendingFetch) {
      this.pendingFetch();
      this.pendingFetch = null;
    }
  };
  onClose = () => {
    console.log("WebSocket connection closed");
    this.isConnected = false;
  };
  onError = (error) => {
    console.error("WebSocket error:", error);
    this.isConnected = false;
  };
  subscribe() {
    if (this.socket) {
      const subscribeMessage = {
        command: "subscribe",
        identifier: JSON.stringify({ channel: this.channel, location_id: this.location_id })
      };
      this.socket.send(JSON.stringify(subscribeMessage));
    } else {
      console.error("WebSocket connection not established.");
    }
  }
  async getPatientSummary() {
    await Service.getJson("immunization/stats", {
      start_date: HisDate.getDateBeforeByDays(HisDate.sessionDate(), 365),
      end_date: HisDate.sessionDate()
    });
  }
  async setMessageHandler(handler) {
    await this.initPromise;
    if (this.socket) {
      this.socket.onmessage = (event) => {
        handler(event);
      };
    } else {
      console.error("WebSocket connection not established.");
    }
  }
}

const _sfc_main$j = defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    BasicInputField,
    BasicForm,
    PreviousVitals,
    customDatePicker,
    IonCol,
    IonRow,
    VueMultiselect: script,
    IonLabel,
    DataTable: V
  },
  data() {
    return {
      isLoading: false,
      overdueData: [],
      under_five_missed_visits: [],
      over_five_missed_visits: [],
      popoverOpen: false,
      event: null,
      tableEvent: null,
      drug_name: null,
      village: null,
      iconsContent: icons,
      showPD: false,
      batchNumber: "",
      clientDetails: [],
      UnchangedClientDetails: [],
      villageList: [],
      tableData: [],
      options: {
        responsive: true,
        select: true,
        searching: false,
        ordering: false,
        pageLength: 8,
        lengthChange: false
      },
      vaccineName: "",
      currentDrugOb: {},
      is_batch_number_valid: false,
      vaccineDate: "",
      is_vaccine_name_valid: false,
      drugErrMsg: "",
      batch_number_error_message: "Enter a valid batch number",
      vaccine_name_error_message: "Enter a valid valid vaccine name",
      sessionDate: HisDate.toStandardHisDisplayFormat(Service.getSessionDate()),
      selectedRow: null,
      showDateBtns: true,
      data: {}
    };
  },
  props: {
    title: {
      default: []
    },
    dashBoardData: {
      default: ""
    }
  },
  computed: {
    ...mapState(useAdministerOtherVaccineStore, ["administerOtherVaccine"]),
    ...mapState(useAdministerVaccineStore, ["tempScannedBatchNumber"]),
    ...mapState(useDemographicsStore, ["patient"])
  },
  async mounted() {
    this.isLoading = true;
    if (!this.dashBoardData) {
      this.isLoading = false;
      return [];
    }
    this.data = await getVaccinesData();
    this.tableData = this.processData();
    this.isLoading = false;
  },
  watch: {
    batchNumber: {
      handler() {
        this.validateBatchNumber();
      },
      deep: true
    },
    tempScannedBatchNumber: {
      handler() {
        if (this.tempScannedBatchNumber != null) {
          this.batchNumber = this.tempScannedBatchNumber.text;
          this.validateBatchNumber();
        }
      }
    },
    vaccineName: {
      handler() {
        this.validateVaccineName();
      }
    }
  },
  setup() {
    return { person, pulseOutline, clipboardOutline };
  },
  methods: {
    formatBirthdate(birthdate) {
      return HisDate.getBirthdateAge(birthdate);
    },
    async openClientProfile(patientID) {
      const patientData = await PatientService.findByID(patientID);
      await useDemographicsStore().setPatientRecord(patientData);
      this.$router.push("patientProfile");
    },
    processData() {
      const data = this.data?.map((item) => {
        if (item.name == "missed_immunizations") {
          this.clientDetails = [];
          this.villageList = ["All"];
          let processedData = [];
          const processAntigensClients = (antigens) => {
            let antigenData = antigens.map((antigen) => {
              let count_antigen = 0;
              antigen.clients.map((client) => {
                if (antigen.drug_name == this.drug_name && (this.village == client.table.city_village || this.village == "All") || (antigen.drug_name == this.drug_name || this.village == client.table.city_village) && (!this.drug_name || !this.village) || !this.drug_name && !this.village || !this.drug_name && this.village == "All") {
                  this.clientDetails.push({
                    given_name: client.table.given_name,
                    family_name: client.table.family_name,
                    patient_id: client.table.patient_id,
                    birthdate: client.table.birthdate,
                    city_village: client.table.city_village
                  });
                  count_antigen++;
                }
                this.villageList.push(client.table.city_village);
              });
              return [antigen.drug_name, count_antigen];
            });
            return antigenData.filter((subArray) => subArray[1] !== 0);
          };
          if (this.title == "Client due today") {
            processedData = processAntigensClients(item.value.due_today_antigens);
          }
          if (this.title == "Client due this week") {
            processedData = processAntigensClients(item.value.due_this_week_antigens);
          }
          if (this.title == "Client due this month") {
            processedData = processAntigensClients(item.value.due_this_month_antigens);
          }
          if (this.title == "Client overdue over 5yrs") {
            processedData = processAntigensClients(item.value.over_five_missed_doses);
          }
          if (this.title == "Client overdue under 5yrs") {
            processedData = processAntigensClients(item.value.under_five_missed_doses);
          }
          this.clientDetails = [...new Set(this.clientDetails.map((item2) => JSON.stringify(item2)))].map(
            (item2) => JSON.parse(item2)
          );
          this.villageList = [...new Set(this.villageList)];
          return processedData;
        }
      });
      return data[0];
    },
    handleVillageClick(village) {
      this.drug_name = "";
      this.village = village;
      this.tableData = this.processData();
    },
    handleRowClick(event) {
      this.tableEvent = event.target;
      const row = this.tableEvent.closest("tr");
      if (row) {
        const rowIndex = Array.from(row.parentNode?.children || []).indexOf(row);
        const selectedData = this.tableData[rowIndex];
        this.drug_name = selectedData[0];
        if (!row.className) {
          this.processData();
        } else {
          this.drug_name = "";
          this.tableData = this.processData();
        }
      }
    },
    getAge(dateOfBirth) {
      return HisDate.calculateDisplayAge(dateOfBirth);
    },
    openPopover(e) {
      this.event = e;
      this.popoverOpen = true;
    },
    showCPD() {
      this.showPD = true;
      this.showDateBtns = false;
    },
    updateBatchNumber(event) {
      const input = event.target.value;
      this.batchNumber = input || this.tempScannedBatchNumber?.text || "";
    },
    saveBatchWithTodayDate() {
      let vaccine_date = Service.getSessionDate();
      this.saveDta(vaccine_date);
    },
    dismiss() {
      modalController.dismiss();
    },
    saveBatch() {
      let vaccine_date;
      if (lodashExports.isEmpty(this.vaccineDate) == true) {
        vaccine_date = Service.getSessionDate();
      } else {
        vaccine_date = this.vaccineDate;
      }
      this.saveDta(vaccine_date);
    },
    validateVaccineName() {
      if (lodashExports.isEmpty(this.vaccineName) == true) {
        this.is_vaccine_name_valid = true;
        return false;
      }
      if (lodashExports.isEmpty(this.vaccineName) == false) {
        this.is_vaccine_name_valid = false;
        return true;
      }
    },
    updateVaccineName(data) {
      this.currentDrugOb = data;
    },
    isAlphaNumeric(text) {
      const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
      return regex.test(text);
    },
    validateBatchNumber() {
      if (this.isAlphaNumeric(this.batchNumber) == true) {
        this.is_batch_number_valid = false;
      }
      if (this.isAlphaNumeric(this.batchNumber) == false) {
        this.is_batch_number_valid = true;
      }
    },
    updateBatchNumberByPassValue(input) {
      this.batchNumber = input;
    },
    saveDta(date_) {
      this.validateVaccineName();
      this.validateBatchNumber();
      if (this.is_batch_number_valid == true) {
        toastWarning("Enter batch number!");
        return;
      }
      if (this.batchNumber == "") {
        toastWarning("Enter batch number!");
        return;
      }
      const dta = {
        batch_number: this.batchNumber,
        date_administered: date_,
        drug_id: this.currentDrugOb.drug.drug_id,
        drug_: this.currentDrugOb
      };
      const store = useAdministerVaccineStore();
      store.setAdministeredVaccine(dta);
      saveVaccineAdministeredDrugs(this.patient);
      this.dismiss();
      store.setTempScannedBatchNumber(null);
    }
  }
});

const _hoisted_1$d = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2$d = { class: "header position_content" };
const _hoisted_3$b = { style: { "font-size": "1.2em", "font-weight": "700" } };
const _hoisted_4$5 = { class: "dueCardContent" };
const _hoisted_5$4 = ["onClick"];
const _hoisted_6$2 = { style: { "margin-right": "15px" } };
const _hoisted_7$2 = { style: { "align-items": "center", "display": "flex" } };
const _hoisted_8$2 = { style: { "line-height": "1" } };
const _hoisted_9$2 = { class: "client_name" };
const _hoisted_10$2 = { class: "name" };
const _hoisted_11$2 = { class: "demographicsOtherRow" };
const _hoisted_12$2 = { class: "demographicsText" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_DataTable = resolveComponent("DataTable");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_popover = resolveComponent("ion-popover");
  const _component_ion_content = resolveComponent("ion-content");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
      createVNode(_component_ion_spinner, { name: "bubbles" }),
      _cache[3] || (_cache[3] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
    ])) : createCommentVNode("", true),
    createVNode(_component_ion_header, null, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$d, [
          createBaseVNode("div", {
            style: { "display": "flex", "align-items": "center" },
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss())
          }, [
            createVNode(_component_ion_icon, {
              slot: "separator",
              size: "large",
              icon: _ctx.iconsContent.arrowLeftWhite
            }, null, 8, ["icon"])
          ]),
          createBaseVNode("div", _hoisted_3$b, toDisplayString(_ctx.title), 1),
          createBaseVNode("div", {
            style: { "display": "flex", "align-items": "center" },
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.openPopover($event))
          }, [
            createVNode(_component_ion_icon, {
              slot: "separator",
              size: "large",
              icon: _ctx.iconsContent.fillerWhite
            }, null, 8, ["icon"])
          ])
        ])
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding",
      style: { "--background": "#fff" }
    }, {
      default: withCtx(() => [
        createBaseVNode("div", null, [
          createVNode(_component_ion_card, {
            class: "section",
            style: { "margin-bottom": "25px", "margin-inline": "0px" }
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_header, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, { class: "sectionTitle" }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createTextVNode(" Summary of required doses ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$5, [
                    createVNode(_component_DataTable, {
                      options: _ctx.options,
                      data: _ctx.tableData,
                      class: "display nowrap",
                      width: "100%",
                      onClick: _ctx.handleRowClick
                    }, {
                      default: withCtx(() => [..._cache[5] || (_cache[5] = [
                        createBaseVNode("thead", null, [
                          createBaseVNode("tr", null, [
                            createBaseVNode("th", null, "Vaccine"),
                            createBaseVNode("th", null, "Quantity")
                          ])
                        ], -1)
                      ])]),
                      _: 1
                    }, 8, ["options", "data", "onClick"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_card, {
            class: "section",
            style: { "margin-inline": "0px" }
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_card_header, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_card_title, { class: "sectionTitle" }, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode("Client Details ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.clientDetails, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      class: "appointments",
                      style: { "display": "flex", "margin-bottom": "10px" },
                      key: index,
                      onClick: ($event) => _ctx.openClientProfile(item.patient_id)
                    }, [
                      createBaseVNode("div", _hoisted_6$2, [
                        createBaseVNode("div", {
                          class: normalizeClass(item?.gender == "M" ? "initialsBox maleColor" : "initialsBox femaleColor")
                        }, [
                          createVNode(_component_ion_icon, {
                            style: { "color": "rgb(78, 78, 78)", "font-size": "30px" },
                            icon: _ctx.person
                          }, null, 8, ["icon"])
                        ], 2)
                      ]),
                      createBaseVNode("div", _hoisted_7$2, [
                        createBaseVNode("div", _hoisted_8$2, [
                          createBaseVNode("div", _hoisted_9$2, [
                            createBaseVNode("div", _hoisted_10$2, toDisplayString(item.given_name) + " " + toDisplayString(item.family_name), 1)
                          ]),
                          createBaseVNode("div", _hoisted_11$2, [
                            createBaseVNode("div", _hoisted_12$2, [
                              createTextVNode(toDisplayString(item.gender == "M" ? "Male" : "Female") + " ", 1),
                              _cache[7] || (_cache[7] = createBaseVNode("span", { class: "dot" }, ".", -1)),
                              createTextVNode(toDisplayString(_ctx.formatBirthdate(item.birthdate)), 1)
                            ])
                          ]),
                          createBaseVNode("div", null, "Village: " + toDisplayString(item.city_village), 1)
                        ])
                      ])
                    ], 8, _hoisted_5$4);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createVNode(_component_ion_popover, {
          style: { "--offset-x": "-10px" },
          "is-open": _ctx.popoverOpen,
          "show-backdrop": false,
          "dismiss-on-select": true,
          event: _ctx.event,
          onDidDismiss: _cache[2] || (_cache[2] = ($event) => _ctx.popoverOpen = false)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              _cache[8] || (_cache[8] = createBaseVNode("div", { style: { "font-weight": "700", "padding-top": "10px", "text-align": "center" } }, "Filter by Village", -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.villageList, (item, index) => {
                return openBlock(), createBlock(_component_ion_list, {
                  class: normalizeClass(item == _ctx.village ? "active_village" : "inactive_village"),
                  style: { "--offset-x": "-30px" },
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_item, {
                      button: true,
                      detail: false,
                      style: { "--border-style": "none", "cursor": "pointer" },
                      onClick: ($event) => _ctx.handleVillageClick(item)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["is-open", "event"])
      ]),
      _: 1
    })
  ], 64);
}
const DueModal = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$c], ["__scopeId", "data-v-dfc02771"]]);

const _sfc_main$i = defineComponent({
  name: "Menu",
  mixins: [_sfc_main$q],
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      route: "",
      totalStats: [
        {
          name: "Total vaccinated this year",
          value: 0
        },
        {
          name: "Total Female vaccinated this year",
          value: 0
        },
        {
          name: "Total Male vaccinated this year",
          value: 0
        }
      ],
      reportData: ""
    };
  },
  setup() {
    return { personCircleOutline };
  },
  computed: {
    ...mapState(useEnrollementStore, ["substance"]),
    backgroundStyle() {
      return {
        background: `linear-gradient(135deg, rgba(32, 178, 170, 0.95) 0%, rgba(64, 192, 176, 0.9) 50%, rgba(150, 220, 200, 0.85) 100%), url(${img(
          "backgroundImg.png"
        )})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        minHeight: "240px"
      };
    }
  },
  watch: {},
  async mounted() {
    const wsService = new WebSocketService();
    wsService.setMessageHandler(this.onMessage);
  },
  methods: {
    async onMessage(event) {
      const data = JSON.parse(event.data);
      if (data.identifier === JSON.stringify({ channel: "ImmunizationReportChannel", location_id: localStorage.getItem("locationID") })) {
        this.reportData = data.message;
        console.log("DASHBOARD DATA", this.reportData);
        this.totalStats = [
          {
            name: "Total vaccinated this year",
            value: this.reportData?.total_vaccinated_this_year || 0
          },
          {
            name: "Total Female vaccinated this year",
            value: this.reportData?.total_female_vaccinated_this_year || 0
          },
          {
            name: "Total Male vaccinated this year",
            value: this.reportData?.total_male_vaccinated_this_year || 0
          }
        ];
      }
    },
    openDueModal(name) {
      const dataToPass = { title: name, dashBoardData: this.reportData };
      createModal(DueModal, { class: "fullScreenModal" }, true, dataToPass);
    },
    async openClientProfile(patientID) {
      const patientData = await PatientService.findByNpid(patientID);
      await useDemographicsStore().setPatientRecord(patientData[0]);
      this.$router.push("patientProfile");
    }
  }
});

const _hoisted_1$c = { class: "topStats" };
const _hoisted_2$c = { class: "hero-section" };
const _hoisted_3$a = { class: "totalStats" };
const _hoisted_4$4 = { class: "statsValue" };
const _hoisted_5$3 = { class: "statsText" };
const _hoisted_6$1 = { class: "dueCardContent" };
const _hoisted_7$1 = { class: "statsValue" };
const _hoisted_8$1 = { class: "statsValue" };
const _hoisted_9$1 = { class: "statsValue" };
const _hoisted_10$1 = { class: "overDueCardContent" };
const _hoisted_11$1 = { class: "statsValue" };
const _hoisted_12$1 = { class: "statsValue" };
const _hoisted_13$1 = { class: "appointment-count" };
const _hoisted_14$1 = {
  key: 0,
  class: "appointments-list"
};
const _hoisted_15$1 = ["onClick"];
const _hoisted_16$1 = { class: "avatar-container" };
const _hoisted_17$1 = { class: "appointment-details" };
const _hoisted_18$1 = { class: "client-name" };
const _hoisted_19$1 = { class: "client-info" };
const _hoisted_20$1 = { class: "info-badge" };
const _hoisted_21$1 = { class: "client-location" };
const _hoisted_22$1 = {
  key: 1,
  class: "empty-state"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Slide = resolveComponent("Slide");
  const _component_Pagination = resolveComponent("Pagination");
  const _component_Carousel = resolveComponent("Carousel");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_content = resolveComponent("ion-content");
  return openBlock(), createBlock(_component_ion_content, { class: "content" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$c, [
        createBaseVNode("div", _hoisted_2$c, [
          createBaseVNode("div", {
            style: normalizeStyle(_ctx.backgroundStyle)
          }, [
            createVNode(_component_Carousel, {
              autoplay: 4e3,
              "wrap-around": true,
              itemsToShow: 1,
              transition: 600,
              class: "stats-carousel"
            }, {
              addons: withCtx(() => [
                createVNode(_component_Pagination)
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.totalStats, (slide) => {
                  return openBlock(), createBlock(_component_Slide, { key: slide }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3$a, [
                        _cache[5] || (_cache[5] = createBaseVNode("div", { class: "stats-icon" }, "📊", -1)),
                        createBaseVNode("div", _hoisted_4$4, toDisplayString(slide.value), 1),
                        createBaseVNode("div", _hoisted_5$3, toDisplayString(slide.name), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ], 4)
        ]),
        createVNode(_component_ion_card, { class: "section modern-card" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_header, null, {
              default: withCtx(() => [
                createVNode(_component_ion_card_title, { class: "cardTitle" }, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createBaseVNode("span", { class: "title-icon" }, "📅", -1),
                    createTextVNode(" Clients Due ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6$1, [
                  createBaseVNode("div", {
                    class: "dueCard today-card",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openDueModal("Client due today"))
                  }, [
                    _cache[7] || (_cache[7] = createBaseVNode("div", { class: "card-badge success" }, "Today", -1)),
                    createBaseVNode("div", _hoisted_7$1, toDisplayString(_ctx.reportData?.due_today_count || 0), 1),
                    _cache[8] || (_cache[8] = createBaseVNode("div", { class: "statsText" }, "Due today", -1))
                  ]),
                  createBaseVNode("div", {
                    class: "dueCard week-card",
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.openDueModal("Client due this week"))
                  }, [
                    _cache[9] || (_cache[9] = createBaseVNode("div", { class: "card-badge warning" }, "Week", -1)),
                    createBaseVNode("div", _hoisted_8$1, toDisplayString(_ctx.reportData?.due_this_week_count || 0), 1),
                    _cache[10] || (_cache[10] = createBaseVNode("div", { class: "statsText" }, "Due this week", -1))
                  ]),
                  createBaseVNode("div", {
                    class: "dueCard month-card",
                    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.openDueModal("Client due this month"))
                  }, [
                    _cache[11] || (_cache[11] = createBaseVNode("div", { class: "card-badge danger" }, "Month", -1)),
                    createBaseVNode("div", _hoisted_9$1, toDisplayString(_ctx.reportData?.due_this_month_count || 0), 1),
                    _cache[12] || (_cache[12] = createBaseVNode("div", { class: "statsText" }, "Due this month", -1))
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card, { class: "section modern-card" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_header, null, {
              default: withCtx(() => [
                createVNode(_component_ion_card_title, { class: "cardTitle" }, {
                  default: withCtx(() => [..._cache[13] || (_cache[13] = [
                    createBaseVNode("span", { class: "title-icon" }, "⚠️", -1),
                    createTextVNode(" Clients Overdue ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_10$1, [
                  createBaseVNode("div", {
                    class: "overDueCard",
                    onClick: _cache[3] || (_cache[3] = ($event) => _ctx.openDueModal("Client overdue under 5yrs"))
                  }, [
                    _cache[14] || (_cache[14] = createBaseVNode("div", { class: "overdue-icon" }, "👶", -1)),
                    createBaseVNode("div", _hoisted_11$1, toDisplayString(_ctx.reportData?.under_five_overdue || 0), 1),
                    _cache[15] || (_cache[15] = createBaseVNode("div", { class: "statsText" }, "Under 5 years", -1))
                  ]),
                  createBaseVNode("div", {
                    class: "overDueCard",
                    onClick: _cache[4] || (_cache[4] = ($event) => _ctx.openDueModal("Client overdue over 5yrs"))
                  }, [
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "overdue-icon" }, "🧒", -1)),
                    createBaseVNode("div", _hoisted_12$1, toDisplayString(_ctx.reportData?.over_five_overdue || 0), 1),
                    _cache[17] || (_cache[17] = createBaseVNode("div", { class: "statsText" }, "Over 5 years", -1))
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_card, { class: "section modern-card appointments-card" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_header, null, {
              default: withCtx(() => [
                createVNode(_component_ion_card_title, { class: "cardTitle" }, {
                  default: withCtx(() => [
                    _cache[18] || (_cache[18] = createBaseVNode("span", { class: "title-icon" }, "🗓️", -1)),
                    _cache[19] || (_cache[19] = createTextVNode(" Today's Appointments ", -1)),
                    createBaseVNode("span", _hoisted_13$1, toDisplayString(_ctx.appointments?.length || 0), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                _ctx.appointments?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.appointments, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      class: "appointment-item",
                      key: index,
                      onClick: ($event) => _ctx.openClientProfile(item.npid)
                    }, [
                      createBaseVNode("div", _hoisted_16$1, [
                        createBaseVNode("div", {
                          class: normalizeClass(item.gender == "M" ? "initialsBox maleColor" : "initialsBox femaleColor")
                        }, [
                          createVNode(_component_ion_icon, {
                            class: "person-icon",
                            icon: _ctx.personCircleOutline
                          }, null, 8, ["icon"])
                        ], 2)
                      ]),
                      createBaseVNode("div", _hoisted_17$1, [
                        createBaseVNode("div", _hoisted_18$1, toDisplayString(item.given_name) + " " + toDisplayString(item.family_name), 1),
                        createBaseVNode("div", _hoisted_19$1, [
                          createBaseVNode("span", _hoisted_20$1, toDisplayString(item.gender == "M" ? "Male" : "Female"), 1),
                          _cache[20] || (_cache[20] = createBaseVNode("span", { class: "dot" }, "•", -1)),
                          createBaseVNode("span", null, toDisplayString(_ctx.formatBirthdate(item.birthdate)), 1)
                        ]),
                        createBaseVNode("div", _hoisted_21$1, [
                          _cache[21] || (_cache[21] = createBaseVNode("span", { class: "location-icon" }, "📍", -1)),
                          createTextVNode(" " + toDisplayString(item?.city_village), 1)
                        ])
                      ]),
                      _cache[22] || (_cache[22] = createBaseVNode("div", { class: "appointment-arrow" }, "›", -1))
                    ], 8, _hoisted_15$1);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_22$1, [..._cache[23] || (_cache[23] = [
                  createBaseVNode("div", { class: "empty-icon" }, "📋", -1),
                  createBaseVNode("p", null, "No appointments scheduled for today", -1)
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
  });
}
const ImmunizationDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$b], ["__scopeId", "data-v-c322c517"]]);

const _sfc_main$h = defineComponent({
  components: { DataTable: V, StandardModal },
  props: {
    title: { type: String, default: "" },
    list: { type: String, default: "" },
    buttonTitle: { type: String, default: "" },
    buttonLink: { type: String, default: "" }
  },
  data() {
    return {
      patients: [],
      loadingStates: {},
      tableColumns: [
        { title: "Patient Name", data: "fullName" },
        {
          title: "Waiting Time",
          data: "arrivalTime",
          render: (data, type) => {
            if (!data) return "-";
            const timestamp = new Date(data).getTime();
            const diffMs = Date.now() - timestamp;
            const mins = Math.floor(diffMs / 6e4);
            const label = (() => {
              if (mins < 1) return "Just now";
              if (mins < 60) return `${mins} min${mins > 1 ? "s" : ""} ago`;
              const hours = Math.floor(mins / 60);
              if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
              const days = Math.floor(hours / 24);
              return `${days} day${days > 1 ? "s" : ""} ago`;
            })();
            if (type === "display") return label;
            return diffMs;
          },
          type: "num",
          width: "15%"
        },
        {
          title: "Actions",
          data: null,
          render: (data, type, row) => {
            const container = document.createElement("div");
            container.style.display = "flex";
            container.style.gap = "6px";
            container.setAttribute("data-patient-id", row.identifier);
            const btnStyle = `  --padding-top: 4px;
                                            --padding-bottom: 4px;
                                            --padding-start: 8px;
                                            --padding-end: 8px;
                                            font-size: 0.8rem;
                                            height: 28px;
                                            min-width: 70px;
                                            white-space: nowrap;
                                            `;
            const makeButton = (text, color, onClick, buttonType) => {
              const btn = document.createElement("ion-button");
              btn.setAttribute("data-button-type", buttonType);
              btn.size = "small";
              btn.fill = "solid";
              btn.color = color;
              btn.style.cssText = btnStyle;
              const textSpan = document.createElement("span");
              textSpan.className = "button-text";
              textSpan.innerText = text;
              const spinner = document.createElement("ion-spinner");
              spinner.name = "crescent";
              spinner.className = "button-spinner";
              spinner.style.display = "none";
              spinner.style.width = "16px";
              spinner.style.height = "16px";
              btn.appendChild(textSpan);
              btn.appendChild(spinner);
              btn.addEventListener("click", onClick);
              return btn;
            };
            container.appendChild(makeButton(this.buttonTitle, "primary", () => this.navigateTo(row, this.buttonLink), "primary"));
            container.appendChild(makeButton("Profile", "warning", () => this.navigateTo(row, "/patientProfile"), "profile"));
            container.appendChild(makeButton("Abscond", "danger", () => this.handleAbscond(row.identifier), "abscond"));
            return container;
          },
          orderable: false,
          width: "25%"
        }
      ],
      tableOptions: {
        order: [[1, "desc"]]
      }
    };
  },
  computed: {
    ...mapState(usePatientList, [
      "patientsWaitingForVitals",
      "patientsWaitingForConsultation",
      "patientsWaitingForLab",
      "patientsWaitingForDispensation"
    ])
  },
  watch: {
    patientsWaitingForConsultation: {
      handler(newVal) {
        if (this.list === "CONSULTATION") this.patients = newVal;
      },
      deep: true
    },
    patientsWaitingForVitals: {
      handler(newVal) {
        if (this.list === "VITALS") this.patients = newVal;
      },
      deep: true
    },
    patientsWaitingForLab: {
      handler(newVal) {
        if (this.list === "LAB") this.patients = newVal;
      },
      deep: true
    },
    patientsWaitingForDispensation: {
      handler(newVal) {
        if (this.list === "DISPENSATION") this.patients = newVal;
      },
      deep: true
    }
  },
  mounted() {
    this.setList();
  },
  methods: {
    setList() {
      const map = {
        VITALS: this.patientsWaitingForVitals,
        CONSULTATION: this.patientsWaitingForConsultation,
        LAB: this.patientsWaitingForLab,
        DISPENSATION: this.patientsWaitingForDispensation
      };
      const key = this.list;
      this.patients = map[key] || [];
    },
    setButtonLoading(patientId, buttonType, isLoading) {
      const container = document.querySelector(`[data-patient-id="${patientId}"]`);
      if (!container) return;
      const button = container.querySelector(`[data-button-type="${buttonType}"]`);
      if (!button) return;
      const textSpan = button.querySelector(".button-text");
      const spinner = button.querySelector(".button-spinner");
      if (isLoading) {
        button.setAttribute("disabled", "true");
        if (textSpan) textSpan.style.display = "none";
        if (spinner) spinner.style.display = "inline-block";
      } else {
        button.removeAttribute("disabled");
        if (textSpan) textSpan.style.display = "inline";
        if (spinner) spinner.style.display = "none";
      }
    },
    waitingTime(timestamp) {
      if (!timestamp) return "-";
      const diffMs = Date.now() - new Date(timestamp).getTime();
      const mins = Math.floor(diffMs / 6e4);
      if (mins < 1) return "Just now";
      if (mins < 60) return `${mins} min${mins > 1 ? "s" : ""} ago`;
      const hours = Math.floor(mins / 60);
      if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      const days = Math.floor(hours / 24);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    },
    async navigateTo(stage, route) {
      const buttonType = route === this.buttonLink ? "primary" : "profile";
      this.setButtonLoading(stage.identifier, buttonType, true);
      try {
        let patientRecords = [];
        let patientRecord = null;
        if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
          patientRecords = await getPouchDBRecords("patients_records", {
            selector: { ID: stage.identifier }
          });
          patientRecord = patientRecords[0];
        } else if (!patientRecord) {
          patientRecord = await Service.getJson(`/patients/${stage.patient_id}/get_patient_record`);
        }
        const patient = patientRecord;
        const patientData = useDemographicsStore();
        await patientData.setPatientRecord(patient);
        await nextTick();
        if (isPatientDeceased()) {
          this.$router.push("/deathPatientProfile");
          return;
        }
        this.$router.push(route);
      } catch (error) {
        console.error("Error navigating:", error);
      } finally {
        this.setButtonLoading(stage.identifier, buttonType, false);
      }
    },
    async handleAbscond(identifier) {
      this.setButtonLoading(identifier, "abscond", true);
      try {
        await closeVisit({ ID: identifier });
      } catch (error) {
        console.error("Error closing visit:", error);
      } finally {
        this.setButtonLoading(identifier, "abscond", false);
      }
    },
    dismiss() {
      modalController.dismiss();
    }
  }
});

function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DataTable = resolveComponent("DataTable");
  const _component_StandardModal = resolveComponent("StandardModal");
  return openBlock(), createBlock(_component_StandardModal, {
    title: _ctx.title,
    subtitle: ""
  }, {
    content: withCtx(() => [
      createVNode(_component_DataTable, {
        data: _ctx.patients,
        options: _ctx.tableOptions,
        columns: _ctx.tableColumns,
        class: "display nowrap modern-table",
        width: "100%"
      }, null, 8, ["data", "options", "columns"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const OPDWaitingListModal = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$a], ["__scopeId", "data-v-04fb88c5"]]);

const _sfc_main$g = defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonPopover,
    DataTable: V,
    StandardModal
  },
  props: {
    title: { default: "Patient List" }
  },
  data() {
    return {
      patients: [],
      popoverOpen: false,
      event: null,
      iconsContent: icons,
      tableColumns: [
        { title: "Patient Name", data: "fullName" },
        {
          title: "Waiting Time",
          data: "arrivalTime",
          render: (data) => this.waitingTime(data),
          width: "20%"
        },
        {
          title: "Actions",
          data: null,
          render: (data, type, row) => {
            const container = document.createElement("div");
            container.style.display = "flex";
            container.style.gap = "6px";
            container.setAttribute("data-patient-id", row.identifier);
            const btnStyle = `
              --padding-top: 4px;
              --padding-bottom: 4px;
              --padding-start: 8px;
              --padding-end: 8px;
              font-size: 0.8rem;
              height: 28px;
              min-width: 70px;
              white-space: nowrap;
            `;
            const makeButton = (text, color, onClick, buttonType) => {
              const btn = document.createElement("ion-button");
              btn.setAttribute("data-button-type", buttonType);
              btn.size = "small";
              btn.fill = "solid";
              btn.color = color;
              btn.style.cssText = btnStyle;
              const textSpan = document.createElement("span");
              textSpan.className = "button-text";
              textSpan.innerText = text;
              const spinner = document.createElement("ion-spinner");
              spinner.name = "crescent";
              spinner.className = "button-spinner";
              spinner.style.display = "none";
              spinner.style.width = "16px";
              spinner.style.height = "16px";
              btn.appendChild(textSpan);
              btn.appendChild(spinner);
              btn.addEventListener("click", onClick);
              return btn;
            };
            container.appendChild(makeButton("Profile", "warning", () => this.navigateTo(data, "/patientProfile"), "profile"));
            return container;
          },
          orderable: false,
          width: "25%"
        }
      ],
      tableOptions: {
        responsive: true,
        searching: true,
        ordering: true,
        pageLength: 25,
        lengthChange: false,
        dom: "Bfrtip",
        order: [1, "desc"],
        scrollX: true,
        autoWidth: false,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search patients...",
          emptyTable: "No patients found."
        }
      }
    };
  },
  async mounted() {
    const todayVisits = await getTodaysVisits();
    this.patients = todayVisits.map((visit) => {
      return {
        fullName: visit.fullName || "",
        arrivalTime: visit.startDate || "",
        patient_id: visit.patientId || "",
        identifier: visit.identifier || ""
      };
    });
  },
  methods: {
    setButtonLoading(patientId, buttonType, isLoading) {
      const container = document.querySelector(`[data-patient-id="${patientId}"]`);
      if (!container) return;
      const button = container.querySelector(`[data-button-type="${buttonType}"]`);
      if (!button) return;
      const textSpan = button.querySelector(".button-text");
      const spinner = button.querySelector(".button-spinner");
      if (isLoading) {
        button.setAttribute("disabled", "true");
        if (textSpan) textSpan.style.display = "none";
        if (spinner) spinner.style.display = "inline-block";
      } else {
        button.removeAttribute("disabled");
        if (textSpan) textSpan.style.display = "inline";
        if (spinner) spinner.style.display = "none";
      }
    },
    openPopover(e) {
      this.event = e;
      this.popoverOpen = true;
    },
    dismiss() {
      modalController.dismiss();
    },
    waitingTime(timestamp) {
      if (!timestamp) return "-";
      const diffMs = Date.now() - new Date(timestamp).getTime();
      const mins = Math.floor(diffMs / 6e4);
      if (mins < 1) return "Just now";
      if (mins < 60) return `${mins} min${mins > 1 ? "s" : ""} ago`;
      const hours = Math.floor(mins / 60);
      if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      const days = Math.floor(hours / 24);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    },
    async navigateTo(data, route) {
      this.setButtonLoading(data.identifier, "profile", true);
      try {
        let patient;
        if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
          patient = await getPouchDBRecords("patients_records", { selector: { ID: data.identifier } });
          patient = patient[0];
        }
        if (!patient) patient = await PatientService.findByID(data.patient_id);
        if (patient) {
          await useDemographicsStore().setPatientRecord(patient);
          await nextTick();
          if (isPatientDeceased()) {
            this.$router.push("/deathPatientProfile");
          } else {
            this.$router.push(route);
          }
        } else {
          toastWarning("Patient not found. Please try searching the patient by name.");
          this.setButtonLoading(data.identifier, "profile", false);
        }
      } catch (error) {
        console.error("Error navigating to profile:", error);
        this.setButtonLoading(data.identifier, "profile", false);
      }
    }
  }
});

function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DataTable = resolveComponent("DataTable");
  const _component_StandardModal = resolveComponent("StandardModal");
  return openBlock(), createBlock(_component_StandardModal, {
    title: _ctx.title,
    subtitle: ""
  }, {
    content: withCtx(() => [
      createVNode(_component_DataTable, {
        data: _ctx.patients,
        options: _ctx.tableOptions,
        columns: _ctx.tableColumns,
        class: "display nowrap modern-table",
        width: "100%"
      }, null, 8, ["data", "options", "columns"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const OPDAllPatientsModal = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$9], ["__scopeId", "data-v-27ba8618"]]);

const _sfc_main$f = defineComponent({
  name: "OPDAppointmentsModal",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonItem,
    IonList,
    IonIcon,
    IonCard,
    IonCardContent,
    IonPopover,
    DataTable: V,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonRow,
    IonCol,
    DateInputField,
    StandardModal
  },
  props: {
    title: {
      type: String,
      default: "OPD Appointments"
    },
    programType: {
      type: String,
      required: true
    },
    programId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      popoverOpen: false,
      event: null,
      iconsContent: icons,
      appointments: [],
      viewMode: "today",
      startDate: HisDate.sessionDate(),
      endDate: HisDate.sessionDate(),
      calendarOutline,
      openOutline,
      tableColumns: [
        { title: "Patient ID", data: "ID" },
        { title: "Name", data: "name" },
        { title: "Age/DOB", data: "ageDob" },
        { title: "Gender", data: "gender" },
        { title: "Village", data: "village" },
        { title: "Appointment Date", data: "appointmentDate" },
        {
          title: "Actions",
          data: null,
          render: (data, type, row) => {
            const container = document.createElement("div");
            const profileButton = document.createElement("ion-button");
            profileButton.innerText = "Profile";
            profileButton.size = "small";
            profileButton.style.color = "#fff";
            profileButton.style.padding = "8px 12px";
            profileButton.style.marginRight = "8px";
            profileButton.addEventListener("click", () => this.openClientProfile(row.ID));
            container.appendChild(profileButton);
            return container;
          },
          orderable: false
        }
      ],
      tableOptions: {
        responsive: true,
        searching: true,
        ordering: true,
        pageLength: 20,
        lengthChange: false,
        order: [[5, "asc"]]
      }
    };
  },
  async mounted() {
    await this.loadAppointments();
  },
  methods: {
    async loadAppointments() {
      this.isLoading = true;
      try {
        const today = HisDate.sessionDate();
        const startDate = this.viewMode === "today" ? today : this.startDate;
        const endDate = this.viewMode === "today" ? today : this.endDate;
        const currentLocationId = localStorage.getItem("locationID");
        const startDateStr = typeof startDate === "string" ? startDate : HisDate.toStandardHisFormat(startDate);
        const endDateStr = typeof endDate === "string" ? endDate : HisDate.toStandardHisFormat(endDate);
        const allPatients = await getPouchDBRecords("patients_records");
        const formattedAppointments = allPatients.flatMap((patient) => {
          const appointments = [...patient.appointments?.saved || [], ...patient.appointments?.unsaved || []];
          return appointments.filter((appt) => {
            if (!appt?.value_datetime) return false;
            if (appt.location_id && appt.location_id !== currentLocationId) {
              return false;
            }
            const apptDateStr = HisDate.toStandardHisFormat(appt.value_datetime);
            return apptDateStr >= startDateStr && apptDateStr <= endDateStr;
          }).map((appt) => ({
            ID: patient.ID,
            name: [patient.personInformation?.given_name, patient.personInformation?.family_name].filter(Boolean).join(" ") || "Unknown",
            ageDob: patient.personInformation?.birthdate ? HisDate.getBirthdateAge(patient.personInformation.birthdate) : "N/A",
            gender: patient.personInformation?.gender || "Unknown",
            village: patient.personInformation?.home_village || "Unknown",
            appointmentDate: HisDate.toStandardHisDisplayFormat(appt.value_datetime),
            appointmentDateTime: appt.value_datetime,
            // Store for sorting
            rawData: appt
          }));
        }).sort((a, b) => {
          return new Date(a.appointmentDateTime).getTime() - new Date(b.appointmentDateTime).getTime();
        });
        this.appointments = formattedAppointments;
        console.log(`Found ${formattedAppointments.length} appointments`);
      } catch (error) {
        console.error("Error loading appointments:", error);
        toastDanger("Failed to load appointments");
      } finally {
        this.isLoading = false;
      }
    },
    async getAppointmentsD1(date) {
      this.startDate = HisDate.toStandardHisFormat(date);
      await this.loadAppointments();
    },
    async getAppointmentsD2(date) {
      this.endDate = HisDate.toStandardHisFormat(date);
      await this.loadAppointments();
    },
    onViewModeChange() {
      if (this.viewMode === "today") {
        this.startDate = HisDate.sessionDate();
        this.endDate = HisDate.sessionDate();
      }
      this.loadAppointments();
    },
    async openClientProfile(id) {
      try {
        const patientRecords = await getPouchDBRecords("patients_records", {
          selector: { ID: id }
        });
        await useDemographicsStore().setPatientRecord(patientRecords[0]);
        this.$router.push("patientProfile");
      } catch (error) {
        console.error("Error opening profile:", error);
        toastDanger("Failed to open patient profile");
      }
    },
    openPopover(e) {
      this.event = e;
      this.popoverOpen = true;
    },
    dismiss() {
      modalController.dismiss();
    }
  }
});

const _hoisted_1$b = {
  key: 0,
  class: "date-filter"
};
const _hoisted_2$b = { class: "dueCardContent" };
const _hoisted_3$9 = {
  key: 1,
  class: "no-appointments"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_segment_button = resolveComponent("ion-segment-button");
  const _component_ion_segment = resolveComponent("ion-segment");
  const _component_DateInputField = resolveComponent("DateInputField");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_DataTable = resolveComponent("DataTable");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_StandardModal = resolveComponent("StandardModal");
  return openBlock(), createBlock(_component_StandardModal, {
    title: _ctx.title,
    subtitle: "",
    headerIcon: _ctx.calendarOutline
  }, {
    "top-buttons": withCtx(() => [
      createBaseVNode("div", {
        style: { "display": "flex", "align-items": "center" },
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openPopover($event))
      }, [
        createVNode(_component_ion_icon, {
          slot: "separator",
          size: "large",
          icon: _ctx.iconsContent.fillerWhite
        }, null, 8, ["icon"])
      ])
    ]),
    content: withCtx(() => [
      createVNode(_component_ion_segment, {
        modelValue: _ctx.viewMode,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.viewMode = $event),
        onIonChange: _ctx.onViewModeChange
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_segment_button, { value: "today" }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode("Today's Appointments", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_segment_button, { value: "range" }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("Date Range", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "onIonChange"]),
      _ctx.viewMode === "range" ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_DateInputField, {
                  inputHeader: "Start Date",
                  sectionHeaderFontWeight: 20,
                  unit: "",
                  icon: _ctx.calendarOutline,
                  placeholder: "press to select date",
                  iconRight: "",
                  inputWidth: "100%",
                  inputValue: _ctx.startDate,
                  eventType: "",
                  minDate: "",
                  maxDate: _ctx.endDate,
                  disabled: false,
                  "onUpdate:rawDateValue": _ctx.getAppointmentsD1
                }, null, 8, ["icon", "inputValue", "maxDate", "onUpdate:rawDateValue"])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_DateInputField, {
                  inputHeader: "End Date",
                  sectionHeaderFontWeight: 20,
                  unit: "",
                  icon: _ctx.calendarOutline,
                  placeholder: "press to select date",
                  iconRight: "",
                  inputWidth: "100%",
                  inputValue: _ctx.endDate,
                  eventType: "",
                  minDate: _ctx.startDate,
                  maxDate: "",
                  disabled: false,
                  "onUpdate:rawDateValue": _ctx.getAppointmentsD2
                }, null, 8, ["icon", "inputValue", "minDate", "onUpdate:rawDateValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true),
      createVNode(_component_ion_card, {
        class: "section",
        style: { "margin-bottom": "25px", "margin-inline": "0px" }
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$b, [
                _ctx.appointments.length > 0 ? (openBlock(), createBlock(_component_DataTable, {
                  key: 0,
                  data: _ctx.appointments,
                  columns: _ctx.tableColumns,
                  options: _ctx.tableOptions,
                  class: "display nowrap modern-table",
                  width: "100%"
                }, null, 8, ["data", "columns", "options"])) : (openBlock(), createElementBlock("div", _hoisted_3$9, " No appointments found for the selected " + toDisplayString(_ctx.viewMode === "today" ? "day" : "date range"), 1))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["title", "headerIcon"]);
}
const OPDAppointmentsModal = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$8], ["__scopeId", "data-v-7e8e90d9"]]);

const _hoisted_1$a = { class: "card-count" };
const _hoisted_2$a = { class: "card-label" };
const cardBackground = "#ffffff";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DashboardCard",
  props: {
    icon: {},
    count: {},
    label: {},
    color: {}
  },
  emits: ["cardClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const cardColorMap = {
      success: "#A5D6A7",
      info: "#81D4FA",
      warning: "#FFF59D",
      danger: "#EF9A9A"
    };
    const cardColor = cardColorMap[props.color || "info"] || "#E0E0E0";
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), {
        class: "dashboard-card",
        style: normalizeStyle({ borderColor: unref(cardColor), backgroundColor: cardBackground }),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("cardClick"))
      }, {
        default: withCtx(() => [
          createVNode(unref(IonIcon), {
            icon: __props.icon,
            class: "card-icon"
          }, null, 8, ["icon"]),
          createBaseVNode("div", _hoisted_1$a, toDisplayString(__props.count), 1),
          createBaseVNode("div", _hoisted_2$a, toDisplayString(__props.label), 1)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
});

const DashboardCard$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-84ad3c1b"]]);

const useDeathInformation = () => {
  const deathOutcomeForm = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Death Details",
        position: "center",
        grid: { s: "12" }
      },
      // Place of Death
      {
        componentType: "inputField",
        header: "Place of death",
        name: "Place of death",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Place of death is required";
          return null;
        }
      },
      // Date and Time of Death
      {
        componentType: "dateInputField",
        header: "Date of death",
        name: "Date of death",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Date of death is required";
          return null;
        }
      },
      {
        componentType: "timeInputField",
        header: "Time of death",
        name: "Time Of Death",
        showNowButton: true,
        icon: icons.calenderPrimary,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Time of death is required";
          return null;
        }
      },
      // Guardian Information
      {
        componentType: "inputField",
        header: "Name of guardian",
        name: "Guardian; name and first names",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Guardian name is required";
          return null;
        }
      },
      {
        componentType: "phoneInputField",
        header: "Guardian phone number",
        name: "Phone number",
        grid: { s: "12" },
        validation: (value) => {
          return StandardValidations.isMWPhoneNumber(value.phoneNumber);
        }
      },
      // Pregnancy Checkbox (conditional - for females only)
      {
        componentType: "checkboxField",
        name: "Pregnant woman",
        type: "single",
        label: "Was the individual pregnant at the time of death?",
        grid: { s: "12" },
        condition: (formData) => {
          return formData._isChildBearing === true;
        }
      },
      // Arrival Details
      {
        componentType: "dateInputField",
        header: "Date arrived",
        name: "Death on arrival",
        showTodayButton: true,
        icon: icons.calenderPrimary,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Date arrived is required";
          return null;
        }
      },
      {
        componentType: "timeInputField",
        header: "Time arrived",
        name: "Time to clinic",
        icon: icons.calenderPrimary,
        grid: { s: "12" },
        showNowButton: true,
        validation: (value) => {
          if (!value || value === "") return "Time arrived is required";
          return null;
        }
      },
      // Manner of Death
      {
        componentType: "multiSelectInputField",
        header: "Cause of death",
        name: "Cause of death",
        trackBy: "id",
        isMultiple: false,
        grid: { s: "12" },
        options: [
          { id: 1, name: "Natural" },
          { id: 2, name: "Accident" },
          { id: 3, name: "Homicide" },
          { id: 4, name: "Suicide" },
          { id: 5, name: "Pending investigation" },
          { id: 6, name: "Could not be determined" },
          { id: 7, name: "Other - specify" }
        ],
        validation: (value) => {
          if (!value) return "Cause of death is required";
          return null;
        },
        onChange: (value) => {
          const updates = {};
          const selectedName = typeof value === "object" && value !== null ? value.name : value;
          if (selectedName !== "Other - specify") {
            updates["Other notes"] = "";
          }
          if (selectedName !== "Accident") {
            updates["Road traffic accident"] = "";
          }
          return updates;
        }
      },
      // Other Manner of Death
      {
        componentType: "inputField",
        header: "Specify other manner of death",
        name: "Other notes",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value, formData) => {
          const causeOfDeath = formData?.["Cause of death"];
          const selectedName = typeof causeOfDeath === "object" && causeOfDeath !== null ? causeOfDeath.name : causeOfDeath;
          if (selectedName === "Other - specify") {
            if (!value || value === "") return "Please specify other manner of death";
          }
          return null;
        },
        condition: (formData) => {
          const causeOfDeath = formData?.["Cause of death"];
          const selectedName = typeof causeOfDeath === "object" && causeOfDeath !== null ? causeOfDeath.name : causeOfDeath;
          return selectedName === "Other - specify";
        }
      },
      // How Did It Occur (for Accident)
      {
        componentType: "multiSelectInputField",
        header: "How did the accident occur?",
        name: "Road traffic accident",
        trackBy: "id",
        isMultiple: false,
        grid: { s: "12" },
        options: [
          { id: 1, name: "Motor vehicle (passenger)" },
          { id: 2, name: "Motor vehicle (pedestrian)" },
          { id: 3, name: "Drowning" },
          { id: 4, name: "Other - specify" }
        ],
        validation: (value, formData) => {
          const causeOfDeath = formData?.["Cause of death"];
          const selectedName = typeof causeOfDeath === "object" && causeOfDeath !== null ? causeOfDeath.name : causeOfDeath;
          if (selectedName === "Accident") {
            if (!value) return "Please specify how the accident occurred";
          }
          return null;
        },
        condition: (formData) => {
          const causeOfDeath = formData?.["Cause of death"];
          const selectedName = typeof causeOfDeath === "object" && causeOfDeath !== null ? causeOfDeath.name : causeOfDeath;
          return selectedName === "Accident";
        },
        onChange: (value) => {
          const updates = {};
          const selectedName = typeof value === "object" && value !== null ? value.name : value;
          if (selectedName !== "Other - specify") {
            updates["Other notes"] = "";
          }
          return updates;
        }
      },
      // Other Cause of Death (for Accident - Other)
      {
        componentType: "inputField",
        header: "Specify other cause of death",
        name: "Other notes",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value, formData) => {
          const roadTrafficAccident = formData?.["Road traffic accident"];
          const selectedName = typeof roadTrafficAccident === "object" && roadTrafficAccident !== null ? roadTrafficAccident.name : roadTrafficAccident;
          if (selectedName === "Other - specify") {
            if (!value || value === "") return "Please specify other cause of death";
          }
          return null;
        },
        condition: (formData) => {
          const roadTrafficAccident = formData?.["Road traffic accident"];
          const selectedName = typeof roadTrafficAccident === "object" && roadTrafficAccident !== null ? roadTrafficAccident.name : roadTrafficAccident;
          return selectedName === "Other - specify";
        }
      },
      // Death Confirmation Section
      {
        componentType: "Heading",
        name: "Death Confirmation",
        position: "center",
        grid: { s: "12" }
      },
      {
        componentType: "dateInputField",
        header: "Date confirming death",
        name: "Date of confinement",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Date confirming death is required";
          return null;
        }
      },
      {
        componentType: "timeInputField",
        header: "Time confirming death",
        name: "Confirmed",
        icon: icons.calenderPrimary,
        showNowButton: true,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Time confirming death is required";
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Person confirming death",
        name: "Responsible person present",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Person confirming death is required";
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Position",
        name: "Position",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Position is required";
          return null;
        }
      },
      {
        componentType: "inputField",
        header: "Medical council registration number",
        name: "Register Number",
        icon: icons.editPen,
        grid: { s: "12" }
      }
    ];
  });
  return {
    deathOutcomeForm
  };
};

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BroughtDead",
  setup(__props, { expose: __expose }) {
    const { deathOutcomeForm } = useDeathInformation();
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const updateChildBearingStatus = () => {
      if (formRef.value) {
        const patientService = new PatientService();
        const isChildBearing = patientService.isChildBearing();
        formRef.value.setFormValue("_isChildBearing", isChildBearing);
      }
    };
    onMounted(() => {
      updateChildBearingStatus();
    });
    watch(
      () => formRef.value?.formValues,
      () => {
        updateChildBearingStatus();
      },
      { deep: true }
    );
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(deathOutcomeForm),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$9 = { style: { "background": "#fff" } };
const _hoisted_2$9 = {
  key: 0,
  class: "search-container"
};
const _hoisted_3$8 = { style: { "display": "flex", "width": "100%", "justify-content": "center", "padding": "20px" } };
const _hoisted_4$3 = { class: "search-results-container" };
const _hoisted_5$2 = {
  key: 1,
  class: "patient-info-banner"
};
const _hoisted_6 = { class: "patient-details" };
const _hoisted_7 = {
  key: 2,
  class: "masonry-grid"
};
const _hoisted_8 = { class: "card-container" };
const _hoisted_9 = { class: "custom-card" };
const _hoisted_10 = { class: "card-container" };
const _hoisted_11 = {
  key: 0,
  class: "custom-card"
};
const _hoisted_12 = {
  key: 1,
  class: "custom-card"
};
const _hoisted_13 = { class: "custom-card card-margin-top" };
const _hoisted_14 = {
  key: 0,
  class: "card-container"
};
const _hoisted_15 = { class: "custom-card" };
const _hoisted_16 = { class: "custom-card card-margin-top" };
const _hoisted_17 = { class: "card-container" };
const _hoisted_18 = { class: "custom-card" };
const _hoisted_19 = {
  key: 0,
  class: "custom-card card-margin-top"
};
const _hoisted_20 = {
  key: 3,
  class: "death-outcome-centered"
};
const _hoisted_21 = { class: "custom-card" };
const _hoisted_22 = { class: "footer-buttons-left" };
const _hoisted_23 = {
  key: 0,
  class: "pagination-dots"
};
const _hoisted_24 = ["onClick"];
const _hoisted_25 = { class: "footer-buttons-right" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BroughtInDeadRegistration",
  props: {
    editMode: { type: Boolean, default: false }
  },
  setup(__props) {
    const isLoading = ref(false);
    const router = useRouter();
    useRoute();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const personalInformationRef = ref(null);
    const birthRegistrationRef = ref(null);
    const socialHistoryRef = ref(null);
    const countryRef = ref(null);
    const currentLocationRef = ref(null);
    const homeLocationRef = ref(null);
    const patientTypeRef = ref(null);
    const deathOutcomeRef = ref(null);
    const isSaving = ref(false);
    const searchValue = ref("");
    const searchResults = ref([]);
    const searchPopoverOpen = ref(false);
    const searchEvent = ref(null);
    const searchDataTableRef = ref(null);
    const selectedPatientInfo = ref(null);
    const showRegistrationForm = ref(false);
    const debouncedSearch = ref(null);
    const patientSearchService = new PatientSearchService();
    const formRefs = ref({
      personalInformationRef,
      birthRegistrationRef,
      socialHistoryRef,
      countryRef,
      currentLocationRef,
      homeLocationRef,
      patientTypeRef,
      deathOutcomeRef
    });
    const personalInformationFormValues = computed(() => personalInformationRef.value?.currentFormValues || {});
    const birthRegistrationFormValues = computed(() => birthRegistrationRef.value?.currentFormValues || {});
    const socialHistoryFormValues = computed(() => socialHistoryRef.value?.currentFormValues || {});
    const countryFormValues = computed(() => countryRef.value?.currentFormValues || {});
    const currentLocationFormValues = computed(() => currentLocationRef.value?.currentFormValues || {});
    const homeLocationFormValues = computed(() => homeLocationRef.value?.currentFormValues || {});
    const patientTypeFormValues = computed(() => patientTypeRef.value?.currentFormValues || {});
    const deathOutcomeFormValues = computed(() => deathOutcomeRef.value?.currentFormValues || {});
    const allFormValues = computed(() => ({
      personalInformation: personalInformationFormValues.value,
      birthRegistration: birthRegistrationFormValues.value,
      socialHistory: socialHistoryFormValues.value,
      country: countryFormValues.value,
      currentLocation: currentLocationFormValues.value,
      homeLocation: homeLocationFormValues.value,
      patientType: patientTypeFormValues.value,
      deathOutcome: deathOutcomeFormValues.value
    }));
    const checkAge = computed(() => new RegistrationService().checkIfChild(personalInformationFormValues.value));
    const { nextPage, prevPage, goToPage, isCardVisible, showPreviousButton, showPaginationButtons, totalPages, currentPage, showNextButton } = useRegistrationPagination();
    useSetRegistrationValues();
    const checkPatientDeceasedStatus = (patientData) => {
      try {
        const observations = patientData.observations || [];
        const hasDeathObservation = observations.some((encounter) => {
          if (encounter.encounter_type === 40) {
            const obs = encounter.obs || [];
            return obs.some((o) => o.concept_id === 11520);
          }
          return false;
        });
        return hasDeathObservation;
      } catch (error) {
        console.error("Error checking deceased status:", error);
        return false;
      }
    };
    const searchTableColumns = ref([
      {
        title: "Name",
        data: null,
        render: (_, __, row) => {
          const personInfo = row.personInformation || row.person;
          const names = personInfo?.names?.[0] || personInfo;
          if (names) {
            const givenName = names.given_name || names.givenName || "";
            const familyName = names.family_name || names.familyName || "";
            return `${givenName} ${familyName}`.trim() || "N/A";
          }
          return "N/A";
        }
      },
      {
        title: "MRN",
        data: null,
        render: (_, __, row) => {
          const identifiers = row.patient_identifiers || row.person?.patient_identifiers;
          if (Array.isArray(identifiers)) {
            const mrnIdentifier = identifiers.find((id) => id.identifier_type === 3 || id.type === 3 || id.name === "Patient Identifier");
            if (mrnIdentifier) {
              return mrnIdentifier.identifier || "N/A";
            }
            if (identifiers.length > 0) {
              return identifiers[0].identifier || "N/A";
            }
          }
          return "N/A";
        }
      },
      {
        title: "Gender",
        data: null,
        render: (_, __, row) => {
          const personInfo = row.personInformation || row.person;
          const gender = personInfo?.gender;
          if (gender === "M" || gender === "Male") return "Male";
          if (gender === "F" || gender === "Female") return "Female";
          return "N/A";
        }
      },
      {
        title: "Birthdate",
        data: null,
        render: (_, __, row) => {
          const personInfo = row.personInformation || row.person;
          const birthdate = personInfo?.birthdate || personInfo?.birth_date;
          if (birthdate) {
            try {
              return HisDate.toStandardHisDisplayFormat(new Date(birthdate));
            } catch (e) {
              return birthdate;
            }
          }
          return "N/A";
        }
      },
      {
        title: "Status",
        data: null,
        defaultContent: "",
        render: (_, __, row) => {
          const deceased = checkPatientDeceasedStatus(row);
          return deceased ? '<span style="background:#dc2626;color:#fff;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:600;">DECEASED</span>' : '<span style="background:#10b981;color:#fff;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:600;">ALIVE</span>';
        }
      }
    ]);
    const searchTableOptions = ref({
      responsive: true,
      searching: false,
      paging: false,
      info: false,
      scrollX: true
    });
    const validateAll = () => {
      const refs = Object.values(formRefs.value);
      refs.forEach((r) => r?.validateForm());
      return refs.every((r) => r?.validateForm() == null);
    };
    const resetAll = () => {
      Object.values(formRefs.value).forEach((r) => r?.resetForm());
    };
    const handleSearchInput = (ev) => {
      debouncedSearch.value(ev);
    };
    const performSearch = async (ev) => {
      const text = ev.target.value;
      if (!text || text.length < 2) {
        searchResults.value = [];
        searchPopoverOpen.value = false;
        return;
      }
      try {
        const results = await patientSearchService.searchPatients({
          searchText: text,
          page: 1,
          paginationSize: 10,
          sitePrefix: "",
          ddeEnabled: false,
          programId: Service.getProgramID(),
          activeFilter: "All"
        });
        console.log("Search results:", results);
        let combinedResults = results?.onlinePatients || [];
        if (results?.offlinePatients) {
          if (Array.isArray(results.offlinePatients)) {
            combinedResults = [...combinedResults, ...results.offlinePatients];
          } else if (results.offlinePatients.records && Array.isArray(results.offlinePatients.records)) {
            combinedResults = [...combinedResults, ...results.offlinePatients.records];
          }
        }
        searchResults.value = combinedResults;
        if (searchResults.value.length > 0) {
          searchEvent.value = ev;
          searchPopoverOpen.value = true;
          await nextTick();
          await nextTick();
          initializeSearchTable();
        } else {
          console.log("No search results found");
        }
      } catch (error) {
        console.error("Search error:", error);
        toastWarning("Search failed. Please try again.");
      }
    };
    const cleanupSearchTable = () => {
      if (!searchDataTableRef.value) return;
      try {
        const dt = searchDataTableRef.value.dt;
        if (dt) dt.off("click");
      } catch (error) {
        console.error("Cleanup error:", error);
      }
    };
    const initializeSearchTable = async () => {
      await nextTick();
      if (!searchDataTableRef.value) {
        console.log("Search table ref not available");
        return;
      }
      cleanupSearchTable();
      const dt = searchDataTableRef.value.dt;
      if (!dt) {
        return;
      }
      dt.on("click", "tbody tr", async (e) => {
        const data = dt.row(e.currentTarget).data();
        if (data) {
          await selectExistingPatient(data);
        }
      });
    };
    const selectExistingPatient = async (patientData) => {
      if (isLoading.value) {
        return;
      }
      try {
        isLoading.value = true;
        searchPopoverOpen.value = false;
        demographicsStore.$reset();
        selectedPatientInfo.value = null;
        await nextTick();
        let fullPatient = null;
        if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
          const records = await getPouchDBRecords("patients_records", {
            selector: { patientID: patientData.patient_id || patientData.patientID }
          });
          if (Array.isArray(records)) {
            fullPatient = records.length > 0 ? records[0] : null;
          } else if (records && typeof records === "object" && "data" in records) {
            const paginatedRecords = records;
            fullPatient = paginatedRecords.data.length > 0 ? paginatedRecords.data[0] : null;
          }
        }
        if (!fullPatient) {
          fullPatient = await Service.getJson(`/patients/${patientData.patient_id || patientData.patientID}/get_patient_record`);
        }
        if (!fullPatient) {
          toastWarning("Patient record not found");
          searchValue.value = "";
          searchResults.value = [];
          cleanupSearchTable();
          return;
        }
        if (checkPatientDeceasedStatus(fullPatient)) {
          toastWarning("This patient is already marked as deceased. Redirecting to profile...");
          await demographicsStore.setPatientRecord(fullPatient);
          await nextTick();
          searchValue.value = "";
          searchResults.value = [];
          cleanupSearchTable();
          router.push("/deathPatientProfile");
          return;
        }
        await demographicsStore.setPatientRecord(fullPatient);
        await nextTick();
        const fmt = patientSearchService.formatPatientForDisplay(fullPatient);
        selectedPatientInfo.value = {
          fullName: fmt.displayName,
          identifier: fmt.identifier,
          gender: fmt.gender,
          age: fmt.birthdate,
          patientId: fullPatient.patient_id || fullPatient.patientID
        };
        showRegistrationForm.value = false;
        searchValue.value = "";
        searchResults.value = [];
        cleanupSearchTable();
        toastSuccess("Patient selected. Please fill death outcome form.");
      } catch (error) {
        toastWarning("Failed to load patient. Please try again.");
        demographicsStore.$reset();
        selectedPatientInfo.value = null;
        searchPopoverOpen.value = false;
        searchValue.value = "";
        searchResults.value = [];
        cleanupSearchTable();
      } finally {
        isLoading.value = false;
      }
    };
    const registerNewPatient = () => {
      selectedPatientInfo.value = null;
      showRegistrationForm.value = true;
      searchValue.value = "";
      searchPopoverOpen.value = false;
      searchResults.value = [];
      demographicsStore.$reset();
      cleanupSearchTable();
      isLoading.value = false;
    };
    const clearSelectedPatient = async () => {
      const ok = await alertConfirmationIonic("Clear selected patient?");
      if (ok) {
        selectedPatientInfo.value = null;
        showRegistrationForm.value = false;
        demographicsStore.$reset();
        searchValue.value = "";
        searchResults.value = [];
        searchPopoverOpen.value = false;
        cleanupSearchTable();
        isLoading.value = false;
        await nextTick();
      }
    };
    const handlePopoverDismiss = () => {
      searchPopoverOpen.value = false;
      cleanupSearchTable();
    };
    const saveAllData = async () => {
      try {
        isSaving.value = true;
        if (selectedPatientInfo.value) {
          const deathFormValid = deathOutcomeRef.value?.validateForm();
          console.log("Death form validation result:", deathFormValid);
          console.log("Death form values:", deathOutcomeFormValues.value);
          if (deathFormValid != null) {
            toastWarning("Please fill in all required death information");
            isSaving.value = false;
            return;
          }
          const data = deathOutcomeFormValues.value;
          if (data && Object.keys(data).length > 0) {
            await saveDeathOutcome(data);
            if (patient.value) await savePatientRecord(patient.value);
            toastSuccess("Death outcome saved");
            navigateTo("/deathPatientProfile");
          } else {
            toastWarning("Please fill in death outcome information");
            isSaving.value = false;
          }
        } else {
          if (!validateAll()) {
            toastWarning("Please fill in all required fields");
            isSaving.value = false;
            return;
          }
          const result = await new RegistrationService().saveRegistrationData(allFormValues.value);
          if (result) {
            const data = deathOutcomeFormValues.value;
            if (data && Object.keys(data).length > 0) await saveDeathOutcome(data);
            if (patient.value) await savePatientRecord(patient.value);
            resetAll();
            toastSuccess("Patient registered and death outcome saved");
            navigateTo("/deathPatientProfile");
          }
        }
      } catch (error) {
        console.error(error);
        toastWarning("Failed to save");
      } finally {
        isSaving.value = false;
      }
    };
    const saveDeathOutcome = async (data) => {
      const observations = [];
      const sessionDate = HisDate.sessionDate();
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "" || key.startsWith("_")) continue;
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          const v = value.name || value.id || String(value);
          if (v && v !== "") observations.push(await ObservationService.buildValueText(key, String(v)));
        } else if (key === "Phone number" && typeof value === "object") {
          const v = value.phoneNumber || String(value);
          if (v && v !== "") observations.push(await ObservationService.buildValueText(key, String(v)));
        } else if (Array.isArray(value)) {
          for (const item of value) {
            const v = typeof item === "object" && item !== null ? item.value || item.name : item;
            if (v && v !== "") observations.push(await ObservationService.buildValueText(key, String(v)));
          }
        } else if (typeof value === "string" || typeof value === "number") {
          observations.push(await ObservationService.buildValueText(key, String(value)));
        } else if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText(key, "Yes"));
        }
      }
      if (observations.length > 0) {
        await ObservationService.addObsToEncounterPatient(
          [{ concept_id: 11520, value_coded: 11520, child: observations, obs_datetime: sessionDate }],
          EncounterTypeId.PATIENT_OUTCOME
        );
      }
    };
    const cancel = async () => {
      const ok = await alertConfirmationIonic("Cancel registration?");
      if (ok) {
        resetAll();
        selectedPatientInfo.value = null;
        showRegistrationForm.value = false;
        demographicsStore.$reset();
        modalController.dismiss();
      }
    };
    const navigateTo = (path) => {
      router.push({ path });
    };
    onMounted(() => {
      debouncedSearch.value = lodashExports.debounce(performSearch, 800);
    });
    onBeforeUnmount(() => {
      cleanupSearchTable();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: __props.editMode ? "Edit Patient Demographic" : "Register Brought In Dead"
      }, createSlots({
        "top-buttons": withCtx(() => []),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$9, [
            !__props.editMode ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
              createBaseVNode("div", _hoisted_3$8, [
                createVNode(unref(IonInput), {
                  style: { "color": "#000", "width": "70%" },
                  onIonInput: handleSearchInput,
                  fill: "outline",
                  modelValue: searchValue.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchValue.value = $event),
                  placeholder: "Search if patient exists by MRN or Name else register new record",
                  class: "searchField"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), {
                      style: { "display": "flex" },
                      slot: "start"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(search),
                          style: { "color": "#000" },
                          "aria-hidden": "true"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonLabel), {
                      style: { "display": "flex" },
                      slot: "end"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonButtons), {
                          style: { "cursor": "pointer", "color": "#74ff15" },
                          slot: "end"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              icon: unref(personAdd),
                              onClick: _cache[0] || (_cache[0] = ($event) => registerNewPatient()),
                              "aria-hidden": "true",
                              title: "Register New Patient"
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              createVNode(unref(IonPopover), {
                "is-open": searchPopoverOpen.value,
                event: searchEvent.value,
                onDidDismiss: handlePopoverDismiss,
                "show-backdrop": true
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$3, [
                    createVNode(unref(V), {
                      data: searchResults.value,
                      columns: searchTableColumns.value,
                      options: searchTableOptions.value,
                      class: "display nowrap search-table",
                      width: "100%",
                      ref_key: "searchDataTableRef",
                      ref: searchDataTableRef
                    }, null, 8, ["data", "columns", "options"])
                  ])
                ]),
                _: 1
              }, 8, ["is-open", "event"])
            ])) : createCommentVNode("", true),
            selectedPatientInfo.value && !showRegistrationForm.value ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("h3", null, toDisplayString(selectedPatientInfo.value.fullName), 1),
                createBaseVNode("p", null, "MRN: " + toDisplayString(selectedPatientInfo.value.ID) + " | Gender: " + toDisplayString(selectedPatientInfo.value.gender) + " | Age: " + toDisplayString(selectedPatientInfo.value.age), 1)
              ]),
              createVNode(unref(IonButton), {
                size: "small",
                color: "danger",
                onClick: _cache[2] || (_cache[2] = ($event) => clearSelectedPatient())
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonIcon), {
                    icon: unref(close),
                    slot: "start"
                  }, null, 8, ["icon"]),
                  _cache[7] || (_cache[7] = createTextVNode(" Clear Selection ", -1))
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            showRegistrationForm.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
              withDirectives(createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_sfc_main$w, {
                    ref_key: "personalInformationRef",
                    ref: personalInformationRef
                  }, null, 512)
                ])
              ], 512), [
                [vShow, unref(isCardVisible)(0)]
              ]),
              withDirectives(createBaseVNode("div", _hoisted_10, [
                checkAge.value.underNineMonths && !__props.editMode ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  createVNode(_sfc_main$x, {
                    ref_key: "birthRegistrationRef",
                    ref: birthRegistrationRef
                  }, null, 512)
                ])) : createCommentVNode("", true),
                checkAge.value.moreThanThirteenYears ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createVNode(_sfc_main$y, {
                    ref_key: "socialHistoryRef",
                    ref: socialHistoryRef
                  }, null, 512)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_sfc_main$z, {
                    ref_key: "countryRef",
                    ref: countryRef
                  }, null, 512)
                ])
              ], 512), [
                [vShow, unref(isCardVisible)(1)]
              ]),
              !countryFormValues.value?.country?.name || countryFormValues.value?.country?.name === "Malawi" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(_sfc_main$A, {
                    ref_key: "currentLocationRef",
                    ref: currentLocationRef
                  }, null, 512)
                ]),
                createBaseVNode("div", _hoisted_16, [
                  createVNode(_sfc_main$B, {
                    currentLocationFormValues: currentLocationFormValues.value,
                    ref_key: "homeLocationRef",
                    ref: homeLocationRef
                  }, null, 8, ["currentLocationFormValues"])
                ])
              ], 512)), [
                [vShow, unref(isCardVisible)(2)]
              ]) : createCommentVNode("", true),
              withDirectives(createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_sfc_main$d, {
                    ref_key: "deathOutcomeRef",
                    ref: deathOutcomeRef
                  }, null, 512)
                ]),
                unref(Service).getProgramID() == 1 ? (openBlock(), createElementBlock("div", _hoisted_19, [
                  createVNode(_sfc_main$C, {
                    ref_key: "patientTypeRef",
                    ref: patientTypeRef
                  }, null, 512)
                ])) : createCommentVNode("", true)
              ], 512), [
                [vShow, unref(isCardVisible)(3)]
              ])
            ])) : selectedPatientInfo.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(_sfc_main$d, {
                  ref_key: "deathOutcomeRef",
                  ref: deathOutcomeRef
                }, null, 512)
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 2
      }, [
        showRegistrationForm.value || selectedPatientInfo.value ? {
          name: "footer",
          fn: withCtx(() => [
            createBaseVNode("div", _hoisted_22, [
              createVNode(DynamicButton, {
                name: "Cancel",
                color: "danger",
                icon: unref(closeCircleOutline),
                "onClicked:btn": _cache[3] || (_cache[3] = ($event) => cancel())
              }, null, 8, ["icon"]),
              withDirectives(createVNode(unref(IonButton), {
                onClick: _cache[4] || (_cache[4] = ($event) => unref(prevPage)()),
                color: "medium"
              }, {
                default: withCtx(() => [..._cache[8] || (_cache[8] = [
                  createTextVNode(" Previous ", -1)
                ])]),
                _: 1
              }, 512), [
                [vShow, unref(showPreviousButton) && showRegistrationForm.value]
              ])
            ]),
            unref(showPaginationButtons) && showRegistrationForm.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(totalPages), (page) => {
                return openBlock(), createElementBlock("span", {
                  key: page,
                  class: normalizeClass({ dot: true, active: page === unref(currentPage) }),
                  onClick: ($event) => unref(goToPage)(page),
                  role: "button"
                }, null, 10, _hoisted_24);
              }), 128))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_25, [
              withDirectives(createVNode(DynamicButton, {
                name: "Save",
                loading: isSaving.value,
                fill: "solid",
                color: "primary",
                icon: unref(checkmarkDoneCircleOutline),
                "onClicked:btn": _cache[5] || (_cache[5] = ($event) => saveAllData())
              }, null, 8, ["loading", "icon"]), [
                [vShow, !showRegistrationForm.value || unref(currentPage) === unref(totalPages)]
              ]),
              withDirectives(createVNode(DynamicButton, {
                name: "Next",
                color: "primary",
                "onClicked:btn": _cache[6] || (_cache[6] = ($event) => unref(nextPage)())
              }, null, 512), [
                [vShow, unref(showNextButton) && showRegistrationForm.value]
              ])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"]);
    };
  }
});

const BroughtInDeadRegistration = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-2b02871f"]]);

const _sfc_main$b = defineComponent({
  name: "BroughtInDeadTable",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonSpinner,
    ReusableDataTable
  },
  setup() {
    const router = useRouter();
    const statusStore = useStatusStore();
    return { router, statusStore };
  },
  data() {
    return {
      loadingBroughtInDead: false,
      broughtInDeadData: [],
      tableKey: 0,
      refreshInterval: null,
      bidHeaders: ["First Name", "Surname", "Gender", "Age", "Date Of Death", "Cause Of Death", "Brought By", "Confirmed By", "Action"],
      bidTableOptions: {
        responsive: true,
        ordering: false,
        buttons: [],
        pageLength: 10,
        dom: '<"table-controls"<"buttons-container">f>rtip',
        language: {
          emptyTable: "No dead patients recorded today",
          zeroRecords: "No matching records found"
        },
        initComplete: function() {
          const buttonsContainer = document.querySelector(".buttons-container");
          if (buttonsContainer) {
            buttonsContainer.innerHTML = `
                            <button class="btn-register-bid" style="
                                background: #dc2626; color: white; border: none; border-radius: 8px;
                                padding: 8px 20px; font-weight: 600; font-size: 14px; cursor: pointer;
                                display: flex; align-items: center; gap: 8px;
                                box-shadow: 0 2px 4px rgba(220, 38, 38, 0.2);
                            ">
                                <ion-icon name="add-circle-outline" style="font-size: 20px;"></ion-icon>
                                Register Brought In Dead
                            </button>
                        `;
            const btn = buttonsContainer.querySelector(".btn-register-bid");
            if (btn) {
              btn.addEventListener("click", () => {
                window.dispatchEvent(new CustomEvent("register-bid-click"));
              });
            }
          }
        }
      }
    };
  },
  computed: {
    broughtInDeadTableData() {
      return this.broughtInDeadData.map((row) => [
        row.firstName,
        row.surname,
        row.gender,
        row.age,
        row.dateOfDeath,
        row.causeOfDeath,
        row.broughtBy,
        row.confirmedBy,
        this.buildActionButtons({
          id: row.id,
          name: `${row.firstName} ${row.surname}`,
          patientId: row.id
        })
      ]);
    },
    bidActionHandlers() {
      return {
        "view-profile-btn": this.handleViewProfile
      };
    }
  },
  watch: {
    "statusStore.apiStatus": {
      handler() {
        this.fetchBroughtInDeadData();
      }
    }
  },
  async mounted() {
    await this.fetchBroughtInDeadData();
    this.refreshInterval = setInterval(() => {
      this.fetchBroughtInDeadData();
    }, 3e4);
    window.addEventListener("register-bid-click", this.openBroughtDeadModal);
    window.addEventListener("bid-registration-complete", this.handleRegistrationComplete);
  },
  beforeUnmount() {
    if (this.refreshInterval) clearInterval(this.refreshInterval);
    window.removeEventListener("register-bid-click", this.openBroughtDeadModal);
    window.removeEventListener("bid-registration-complete", this.handleRegistrationComplete);
  },
  methods: {
    skullOutline() {
      return skullOutline;
    },
    openBroughtDeadModal() {
      createModal(BroughtInDeadRegistration, { class: "fullScreenModal" }, true);
    },
    async handleRegistrationComplete() {
      await this.fetchBroughtInDeadData();
    },
    async fetchBroughtInDeadData() {
      this.loadingBroughtInDead = true;
      try {
        const locationId = Service.getUserLocationId();
        if (!locationId) {
          this.broughtInDeadData = [];
          return;
        }
        const today = HisDate.currentDate();
        let onlineData = [];
        let offlineData = [];
        try {
          const encounters = await EncounterService.getAllEncounters({
            encounter_type_id: 40,
            date: today
          });
          onlineData = this.processEncounters(encounters || [], locationId);
        } catch (error) {
          console.error("Online fetch failed:", error);
        }
        try {
          const patients = await getPouchDBRecords("patients_records", {});
          const patientArray = Array.isArray(patients) ? patients : patients?.data || [];
          offlineData = this.processPatientRecords(patientArray, locationId, today);
        } catch (error) {
          console.error("Offline fetch failed:", error);
        }
        this.broughtInDeadData = this.combineAndDeduplicate(onlineData, offlineData);
        this.forceTableUpdate();
      } catch (error) {
        console.error("Error in fetchBroughtInDeadData:", error);
        this.broughtInDeadData = [];
        this.forceTableUpdate();
      } finally {
        this.loadingBroughtInDead = false;
      }
    },
    processPatientRecords(patients, locationId, targetDate) {
      const results = [];
      console.log(`Processing ${patients.length} patient records for date ${targetDate}`);
      patients.forEach((patientRecord) => {
        try {
          const observations = patientRecord.observations || [];
          const outcomeEncounters = observations.filter((enc) => enc.encounter_type === 40);
          if (outcomeEncounters.length === 0) return;
          outcomeEncounters.forEach((outcomeEncounter) => {
            const obs = outcomeEncounter.obs || [];
            const deathObs = obs.find((o) => o.concept_id === 11520);
            if (!deathObs) return;
            const encounterDate = outcomeEncounter.encounter_datetime || deathObs.obs_datetime || outcomeEncounter.obs_datetime;
            if (!encounterDate) {
              console.log("No encounter date found for patient:", patientRecord.patientID);
              return;
            }
            const encDate = HisDate.toStandardHisFormat(new Date(encounterDate));
            console.log(`Patient ${patientRecord.patientID}: encounter date ${encDate} vs target ${targetDate}`);
            if (encDate !== targetDate) return;
            const children = deathObs.children || [];
            let dateOfDeath = "N/A";
            let causeOfDeath = "N/A";
            let broughtBy = "N/A";
            let confirmedTime = "N/A";
            children.forEach((child) => {
              const conceptId = child.concept_id;
              const value = child.value_text || child.value_datetime || child.value_coded_name || "";
              if (conceptId === 1815 || conceptId === 7398) {
                dateOfDeath = value;
              } else if (conceptId === 5002) {
                causeOfDeath = value;
              } else if (conceptId === 1824) {
                broughtBy = value;
              } else if (conceptId === 1345) {
                confirmedTime = value;
              }
            });
            let confirmedBy = "Unknown";
            const provider = outcomeEncounter.provider || outcomeEncounter.creator;
            if (provider) {
              const givenName = provider.given_name || provider.names?.[0]?.given_name || "";
              const familyName = provider.family_name || provider.names?.[0]?.family_name || "";
              confirmedBy = `${givenName} ${familyName}`.trim() || "Unknown";
            } else if (confirmedTime !== "N/A") {
              confirmedBy = `Confirmed at ${confirmedTime}`;
            }
            const personInfo = patientRecord.personInformation || {};
            const firstName = personInfo.given_name || "N/A";
            const surname = personInfo.family_name || "N/A";
            const gender = personInfo.gender === "M" ? "Male" : personInfo.gender === "F" ? "Female" : "N/A";
            const birthdate = personInfo.birthdate;
            const age = birthdate ? this.calculateAge(birthdate) : "N/A";
            const patientId = patientRecord.patientID || patientRecord.patient_id;
            console.log(`Added offline patient: ${firstName} ${surname} (${patientId})`);
            results.push({
              id: patientId,
              firstName,
              surname,
              age,
              gender,
              dateOfDeath,
              causeOfDeath,
              broughtBy,
              confirmedBy
            });
          });
        } catch (error) {
          console.error("Error processing patient record:", error);
        }
      });
      console.log(`Processed offline results: ${results.length} patients`);
      return results;
    },
    processEncounters(encounters, locationId) {
      return encounters.reduce((acc, enc) => {
        if (String(enc?.location_id) !== String(locationId)) return acc;
        const observations = enc.observations || [];
        const hasDeathIndication = observations.some((o) => o.concept_id === 7398 || o.concept_id === 11520);
        if (!hasDeathIndication) return acc;
        let dateOfDeath = "N/A";
        let causeOfDeath = "N/A";
        let broughtBy = "N/A";
        observations.forEach((obs) => {
          if (obs.concept_id === 1815 || obs.concept_name?.includes("Date of death")) {
            dateOfDeath = obs.value_text || obs.value_datetime || dateOfDeath;
          }
          if (obs.concept_id === 5002 || obs.concept_name?.includes("Cause of death")) {
            causeOfDeath = obs.value_text || obs.value_coded_name || causeOfDeath;
          }
          if (obs.concept_id === 1824 || obs.concept_name?.includes("Guardian")) {
            broughtBy = obs.value_text || broughtBy;
          }
        });
        const person = enc?.patient?.person || enc?.person;
        const fullName = person?.names?.[0];
        const provider = enc?.provider || enc?.creator;
        const confirmedBy = provider?.names?.[0] ? `${provider.names[0].given_name || ""} ${provider.names[0].family_name || ""}`.trim() : "Unknown";
        acc.push({
          id: enc.patient_id,
          firstName: fullName?.given_name || "N/A",
          surname: fullName?.family_name || "N/A",
          age: this.calculateAge(person?.birthdate),
          gender: person?.gender === "M" ? "Male" : "Female",
          dateOfDeath,
          causeOfDeath,
          broughtBy,
          confirmedBy
        });
        return acc;
      }, []);
    },
    combineAndDeduplicate(onlineData, offlineData) {
      const map = /* @__PURE__ */ new Map();
      [...onlineData, ...offlineData].forEach((item) => {
        if (!map.has(item.id)) {
          map.set(item.id, item);
        }
      });
      return Array.from(map.values());
    },
    forceTableUpdate() {
      this.tableKey += 1;
    },
    calculateAge(birthdate) {
      if (!birthdate) return "N/A";
      try {
        const birth = new Date(birthdate);
        const today = /* @__PURE__ */ new Date();
        if (isNaN(birth.getTime())) return "N/A";
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) {
          age--;
        }
        return age >= 0 ? age.toString() : "N/A";
      } catch (error) {
        return "N/A";
      }
    },
    buildActionButtons(rowData) {
      const btnStyle = `
                padding: 4px 12px;
                font-size: 0.8rem;
                height: 28px;
                min-width: 70px;
                white-space: nowrap;
                background-color: #3880ff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            `;
      return `
                <div style="display: flex; gap: 6px;" data-patient-id="${rowData.patientId}">
                    <button class="view-profile-btn"
                            data-button-type="profile"
                            style="${btnStyle}"
                            data-id='${JSON.stringify(rowData)}'
                            title="View Profile">
                        <span class="button-text">Profile</span>
                        <span class="button-spinner" style="display: none;">Loading...</span>
                    </button>
                </div>
            `;
    },
    async handleViewProfile(data) {
      if (!data || !data.patientId) return;
      this.setButtonLoading(data.patientId, "profile", true);
      try {
        let patientRecord = null;
        try {
          const patientRecords = await getPouchDBRecords("patients_records", {
            selector: { patientID: data.patientId }
          });
          patientRecord = patientRecords[0];
        } catch (error) {
          console.error("PouchDB fetch failed:", error);
        }
        if (!patientRecord && this.statusStore.apiStatus) {
          try {
            patientRecord = await Service.getJson(`/patients/${data.patientId}/get_patient_record`);
          } catch (error) {
            console.error("API fetch failed:", error);
          }
        }
        if (patientRecord) {
          const patientData = useDemographicsStore();
          await patientData.setPatientRecord(patientRecord);
          await nextTick();
          this.$router.push("/deathPatientProfile");
        } else {
          toastWarning("Patient not found.");
          this.setButtonLoading(data.patientId, "profile", false);
        }
      } catch (error) {
        console.error("Error in handleViewProfile:", error);
        toastWarning("Error loading patient profile.");
        this.setButtonLoading(data.patientId, "profile", false);
      }
    },
    setButtonLoading(patientId, buttonType, isLoading) {
      const container = document.querySelector(`[data-patient-id="${patientId}"]`);
      if (!container) return;
      const button = container.querySelector(`[data-button-type="${buttonType}"]`);
      if (!button) return;
      const textSpan = button.querySelector(".button-text");
      const spinner = button.querySelector(".button-spinner");
      if (isLoading) {
        button.setAttribute("disabled", "true");
        if (textSpan) textSpan.style.display = "none";
        if (spinner) spinner.style.display = "inline-block";
      } else {
        button.removeAttribute("disabled");
        if (textSpan) textSpan.style.display = "inline";
        if (spinner) spinner.style.display = "none";
      }
    }
  }
});

function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ReusableDataTable = resolveComponent("ReusableDataTable");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, { class: "dashboard-card bid-card" }, {
    default: withCtx(() => [
      createVNode(_component_ion_card_header, { class: "dashboard-card-header" }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_title, { class: "dashboard-title" }, {
            default: withCtx(() => [
              createVNode(_component_ion_icon, {
                icon: _ctx.skullOutline,
                slot: "start",
                class: "dashboard-icon danger-icon"
              }, null, 8, ["icon"]),
              _cache[0] || (_cache[0] = createTextVNode(" Deceased Patients Today ", -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_card_content, { class: "bid-card-content" }, {
        default: withCtx(() => [
          (openBlock(), createBlock(_component_ReusableDataTable, {
            headers: _ctx.bidHeaders,
            data: _ctx.broughtInDeadTableData,
            options: _ctx.bidTableOptions,
            actionHandlers: _ctx.bidActionHandlers,
            containerClass: "",
            key: _ctx.tableKey
          }, null, 8, ["headers", "data", "options", "actionHandlers"]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const BroughtInDeadTable = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$7], ["__scopeId", "data-v-648c007b"]]);

const _sfc_main$a = defineComponent({
  name: "OPDDashboard",
  components: {
    DashboardCard: DashboardCard$1,
    BroughtInDeadTable
  },
  setup() {
    const { ready, OPDWaitingLists, hasWaitingList, refreshUserData } = useUserActivities();
    return {
      ready,
      OPDWaitingLists,
      hasWaitingList,
      refreshUserData
    };
  },
  data() {
    return {
      totalPatientsToday: 0,
      isRefreshing: false
    };
  },
  computed: {
    ...mapState(usePatientList, [
      "patientsWaitingForVitals",
      "patientsWaitingForConsultation",
      "patientsWaitingForLab",
      "patientsWaitingForDispensation",
      "patientsVisits",
      "todaysAppointmentsCount"
    ])
  },
  async mounted() {
    await this.refreshDashboard();
  },
  methods: {
    skullOutline() {
      return skullOutline;
    },
    openBroughtDeadModal() {
      createModal(BroughtInDeadRegistration, { class: "large-medium-width-modal" }, true);
    },
    lockClosed() {
      return lockClosed;
    },
    refresh() {
      return refresh;
    },
    medkit() {
      return medkit;
    },
    flask() {
      return flask;
    },
    async refreshDashboard() {
      if (this.isRefreshing) return;
      this.isRefreshing = true;
      try {
        const locationId = Service.getUserLocationId();
        if (!locationId) return;
        await Promise.all([usePatientList().refresh(locationId), this.refreshUserData()]);
      } finally {
        this.isRefreshing = false;
      }
    },
    clipboard() {
      return clipboard;
    },
    thermometer() {
      return thermometer;
    },
    calendar() {
      return calendar;
    },
    people() {
      return people;
    },
    openAllModal(title, buttonText, link) {
      createModal(OPDAllPatientsModal, { class: "large-medium-width-modal" }, true, {
        title,
        buttonTitle: buttonText,
        buttonLink: link
      });
    },
    openPatientsListModal(title, list, buttonText, link) {
      createModal(OPDWaitingListModal, { class: "large-medium-width-modal" }, true, {
        title,
        list,
        buttonTitle: buttonText,
        buttonLink: link
      });
    },
    openAppointmentsModal(title, programType) {
      createModal(OPDAppointmentsModal, { class: "large-medium-width-modal" }, true, {
        title,
        programType,
        programId: 14
      });
    }
  }
});

const _hoisted_1$8 = { class: "dashboard-wrapper" };
const _hoisted_2$8 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_3$7 = {
  key: 1,
  class: "no-access-container"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_DashboardCard = resolveComponent("DashboardCard");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_BroughtInDeadTable = resolveComponent("BroughtInDeadTable");
  const _component_ion_content = resolveComponent("ion-content");
  return openBlock(), createBlock(_component_ion_content, { fullscreen: true }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$8, [
        createVNode(_component_ion_card, { class: "dashboard-card" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_header, { class: "dashboard-card-header" }, {
              default: withCtx(() => [
                createVNode(_component_ion_card_title, { class: "dashboard-title" }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_icon, {
                      icon: _ctx.people(),
                      slot: "start",
                      class: "dashboard-icon"
                    }, null, 8, ["icon"]),
                    _cache[6] || (_cache[6] = createTextVNode(" Today's Patients Overview ", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                !_ctx.ready ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
                  createVNode(_component_ion_spinner, { name: "crescent" }),
                  _cache[7] || (_cache[7] = createBaseVNode("p", { class: "loading-text" }, "Loading dashboard...", -1))
                ])) : _ctx.OPDWaitingLists.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.lockClosed(),
                    class: "no-access-icon"
                  }, null, 8, ["icon"]),
                  _cache[9] || (_cache[9] = createBaseVNode("h2", { class: "no-access-title" }, "No Waiting Lists Assigned", -1)),
                  _cache[10] || (_cache[10] = createBaseVNode("p", { class: "no-access-message" }, " You currently don't have access to any waiting lists. Please contact your system administrator or supervisor to request access. ", -1)),
                  createVNode(_component_ion_button, {
                    color: "primary",
                    fill: "outline",
                    onClick: _ctx.refreshDashboard,
                    class: "refresh-button"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_icon, {
                        icon: _ctx.refresh(),
                        slot: "start"
                      }, null, 8, ["icon"]),
                      _cache[8] || (_cache[8] = createTextVNode(" Refresh ", -1))
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : (openBlock(), createBlock(_component_ion_grid, {
                  key: 2,
                  class: "centered-grid"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_row, { class: "centered-row" }, {
                      default: withCtx(() => [
                        _ctx.hasWaitingList("Total Patients Today") ? (openBlock(), createBlock(_component_DashboardCard, {
                          key: 0,
                          icon: _ctx.people(),
                          color: "primary",
                          count: _ctx.patientsVisits.length,
                          label: "Total patients today",
                          onCardClick: _cache[0] || (_cache[0] = ($event) => _ctx.openAllModal("All patients today", "View profile", "/patientProfile"))
                        }, null, 8, ["icon", "count"])) : createCommentVNode("", true),
                        _ctx.hasWaitingList("Appointments Today") ? (openBlock(), createBlock(_component_DashboardCard, {
                          key: 1,
                          icon: _ctx.calendar(),
                          color: "primary",
                          count: _ctx.todaysAppointmentsCount?.length || 0,
                          label: "Appointments",
                          onCardClick: _cache[1] || (_cache[1] = ($event) => _ctx.openAppointmentsModal("OPD Appointments", "14"))
                        }, null, 8, ["icon", "count"])) : createCommentVNode("", true),
                        _ctx.hasWaitingList("Waiting for Vitals") ? (openBlock(), createBlock(_component_DashboardCard, {
                          key: 2,
                          icon: _ctx.thermometer(),
                          color: "primary",
                          count: _ctx.patientsWaitingForVitals?.length,
                          label: "Waiting for vitals",
                          onCardClick: _cache[2] || (_cache[2] = ($event) => _ctx.openPatientsListModal("Patients waiting for vitals", "VITALS", "Vitals", "/OPDVitals"))
                        }, null, 8, ["icon", "count"])) : createCommentVNode("", true),
                        _ctx.hasWaitingList("Waiting for Consultation") ? (openBlock(), createBlock(_component_DashboardCard, {
                          key: 3,
                          icon: _ctx.clipboard(),
                          color: "primary",
                          count: _ctx.patientsWaitingForConsultation?.length,
                          label: "Waiting for consultation",
                          onCardClick: _cache[3] || (_cache[3] = ($event) => _ctx.openPatientsListModal("Patients waiting for consultation", "CONSULTATION", "Consultation", "/OPDConsultationPlan"))
                        }, null, 8, ["icon", "count"])) : createCommentVNode("", true),
                        _ctx.hasWaitingList("Waiting for Laboratory") ? (openBlock(), createBlock(_component_DashboardCard, {
                          key: 4,
                          icon: _ctx.flask(),
                          color: "primary",
                          count: _ctx.patientsWaitingForLab.length,
                          label: "Waiting for lab",
                          onCardClick: _cache[4] || (_cache[4] = ($event) => _ctx.openPatientsListModal("Patients waiting for lab", "LAB", "Lab", "/OPDConsultationPlan"))
                        }, null, 8, ["icon", "count"])) : createCommentVNode("", true),
                        _ctx.hasWaitingList("Waiting for Dispensation") ? (openBlock(), createBlock(_component_DashboardCard, {
                          key: 5,
                          icon: _ctx.medkit(),
                          color: "primary",
                          count: _ctx.patientsWaitingForDispensation?.length,
                          label: "Waiting for dispensation",
                          onCardClick: _cache[5] || (_cache[5] = ($event) => _ctx.openPatientsListModal("Patients waiting for dispensation", "DISPENSATION", "Dispensation", "/NCDDispensations"))
                        }, null, 8, ["icon", "count"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _ctx.ready && _ctx.OPDWaitingLists.length > 0 ? (openBlock(), createBlock(_component_BroughtInDeadTable, { key: 0 })) : createCommentVNode("", true)
      ])
    ]),
    _: 1
  });
}
const OPDDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$6], ["__scopeId", "data-v-b8f3d613"]]);

const _hoisted_1$7 = { class: "icon-container" };
const _hoisted_2$7 = ["src", "alt"];
const _hoisted_3$6 = { class: "card-title" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DashboardCard",
  props: {
    icon: {},
    title: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const iconSrc = computed(() => icons[props.icon] || "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "card",
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
      }, [
        createBaseVNode("div", _hoisted_1$7, [
          createBaseVNode("img", {
            src: iconSrc.value,
            alt: __props.title
          }, null, 8, _hoisted_2$7)
        ]),
        createBaseVNode("div", _hoisted_3$6, toDisplayString(__props.title), 1)
      ]);
    };
  }
});

const DashboardCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-334cd0db"]]);

const _hoisted_1$6 = { class: "dashboard-container" };
const _hoisted_2$6 = { class: "dashboard-grid" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AETCDashboard",
  setup(__props) {
    const router = useRouter();
    const dashboardItems = ref([
      { id: "patientArrival", icon: "plus_dashboard", title: "Patient Arrival" },
      { id: "screeningList", icon: "checklist", title: "Awaiting Screening List" },
      { id: "registrationList", icon: "checklist", title: "Awaiting Registration List" },
      { id: "triageList", icon: "checklist", title: "Awaiting Triage List" },
      { id: "assessmentList", icon: "checklist", title: "Awaiting Assessment List" },
      { id: "testResultsList", icon: "checklist", title: "Awaiting Test Results List" },
      { id: "specialtyList", icon: "checklist", title: "Awaiting Specialty List" },
      { id: "dispositionList", icon: "checklist", title: "Disposition List" },
      { id: "broughtDead", icon: "document", title: "Brought In Dead" },
      { id: "reports", icon: "chart", title: "Reports" }
    ]);
    const handleCardClick = (id) => {
      router.push({ name: id });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$6, [
                createBaseVNode("div", _hoisted_2$6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboardItems.value, (item) => {
                    return openBlock(), createBlock(DashboardCard, {
                      key: item.id,
                      icon: item.icon,
                      title: item.title,
                      onClick: ($event) => handleCardClick(item.id)
                    }, null, 8, ["icon", "title", "onClick"]);
                  }), 128))
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

const AETCDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bcce1a76"]]);

const _sfc_main$7 = defineComponent({
  name: "NCDDashboard",
  mixins: [_sfc_main$q],
  components: {
    ApexChart: m
  },
  data() {
    return {
      dashboardData: "",
      isChartReady: false,
      lineChartOptions: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        xaxis: {
          categories: []
        },
        colors: ["#2563eb", "#10b981"],
        grid: {
          borderColor: "#f3f4f6",
          row: {
            colors: ["transparent", "transparent"],
            opacity: 0.5
          }
        },
        tooltip: {
          theme: "light"
        },
        legend: {
          show: true,
          position: "top"
        }
      },
      lineChartSeries: [
        {
          name: "Male",
          data: []
        },
        {
          name: "Female",
          data: []
        }
      ],
      barChartOptions: {
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false
          }
        },
        xaxis: {
          categories: []
        },
        colors: ["#2563eb", "#10b981", "#f43f5e"],
        grid: {
          borderColor: "#f3f4f6",
          row: {
            colors: ["transparent", "transparent"],
            opacity: 0.5
          }
        },
        tooltip: {
          theme: "light"
        },
        legend: {
          show: true,
          position: "top"
        }
      },
      barChartSeries: [
        {
          name: "Type 1 Diabetes",
          data: []
        },
        {
          name: "Type 2 Diabetes",
          data: []
        },
        {
          name: "Hypertention",
          data: []
        }
      ]
    };
  },
  watch: {
    $route: {
      async handler() {
        await this.initializeChartData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.initializeChartData();
  },
  methods: {
    async initializeChartData() {
      this.dashboardData = await this.getDashboardData();
      this.lineChartOptions.xaxis.categories = this.dashboardData.gender_data.categories;
      this.lineChartSeries[0].data = this.dashboardData.gender_data.femaleSeries;
      this.lineChartSeries[1].data = this.dashboardData.gender_data.maleSeries;
      this.barChartOptions.xaxis.categories = this.dashboardData.diagnosis_data.categories;
      this.barChartSeries[0].data = this.dashboardData.diagnosis_data.typeOneSeries;
      this.barChartSeries[1].data = this.dashboardData.diagnosis_data.typeTwoSeries;
      this.barChartSeries[2].data = this.dashboardData.diagnosis_data.hypertentionSeries;
      await nextTick();
      setTimeout(() => {
        this.isChartReady = true;
      }, 100);
    },
    getDashboardData() {
      const url = `programs/${32}/reports/ncd_dashboard`;
      return Service.getJson(url, {
        start_date: HisDate.toStandardHisFormat(HisDate.sessionDate()),
        end_date: HisDate.toStandardHisFormat(HisDate.sessionDate())
      });
    }
  }
});

const _hoisted_1$5 = { style: { "display": "flex", "gap": "20px", "width": "100%", "padding-left": "20px", "padding-right": "20px" } };
const _hoisted_2$5 = { style: { "display": "flex", "gap": "20px", "padding-left": "20px", "padding-right": "20px" } };
const _hoisted_3$5 = { ref: "chartRef1" };
const _hoisted_4$2 = { ref: "chartRef2" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ApexChart = resolveComponent("ApexChart");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$5, [
      createVNode(_component_ion_card, {
        style: { "margin-bottom": "20px", "background-color": "#fff" },
        class: "top-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createBaseVNode("div", { class: "top-card-text" }, [
                createBaseVNode("div", { class: "text-2xl font-bold" }, "0"),
                createBaseVNode("h3", { class: "text-sm font-medium" }, "Today's Appointments")
              ], -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_card, {
        style: { "margin-bottom": "20px", "background-color": "#fff" },
        class: "top-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode("div", { class: "top-card-text" }, [
                createBaseVNode("div", { class: "text-2xl font-bold" }, "0"),
                createBaseVNode("h3", { class: "text-sm font-medium" }, "Today's referrals")
              ], -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_card, {
        style: { "margin-bottom": "20px", "background-color": "#fff" },
        class: "top-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createBaseVNode("div", { class: "top-card-text" }, [
                createBaseVNode("div", { class: "text-2xl font-bold" }, "0"),
                createBaseVNode("h3", { class: "text-sm font-medium" }, "Total active pregnancies")
              ], -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_card, {
        style: { "margin-bottom": "20px", "background-color": "#fff" },
        class: "top-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode("div", { class: "top-card-text" }, [
                createBaseVNode("div", { class: "text-2xl font-bold" }, "0"),
                createBaseVNode("h3", { class: "text-sm font-medium" }, "Due this week")
              ], -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", _hoisted_2$5, [
      createVNode(_component_ion_card, {
        style: { "margin-bottom": "20px", "background-color": "#fff", "width": "100%" },
        class: "top-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "font-medium" }, "Patients distribution by gestation age", -1)),
              createBaseVNode("div", _hoisted_3$5, [
                _ctx.isChartReady ? (openBlock(), createBlock(_component_ApexChart, {
                  key: 0,
                  style: { "width": "100%", "height": "500px" },
                  type: "bar",
                  options: _ctx.barChartOptions,
                  series: _ctx.barChartSeries
                }, null, 8, ["options", "series"])) : createCommentVNode("", true)
              ], 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_ion_card, {
        style: { "margin-bottom": "20px", "background-color": "#fff", "width": "100%" },
        class: "top-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_card_content, null, {
            default: withCtx(() => [
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "font-medium" }, "Patients distribution by age", -1)),
              createBaseVNode("div", _hoisted_4$2, [
                _ctx.isChartReady ? (openBlock(), createBlock(_component_ApexChart, {
                  key: 0,
                  style: { "width": "100%", "height": "500px" },
                  type: "line",
                  options: _ctx.lineChartOptions,
                  series: _ctx.lineChartSeries
                }, null, 8, ["options", "series"])) : createCommentVNode("", true)
              ], 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__scopeId", "data-v-58e2a3d8"]]);

const _sfc_main$6 = defineComponent({
  name: "Home",
  mixins: [_sfc_main$v, _sfc_main$q],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    Toolbar,
    IonRow,
    DateInputField,
    IonIcon,
    IonButton,
    IonCol
  },
  data() {
    const startDate = ref(HisDate.sessionDate());
    const endDate = ref(HisDate.sessionDate());
    const minDate = ref(HisDate.sessionDate());
    const people = ref([]);
    return {
      segmentContent: "Today",
      minDate,
      startDate,
      endDate,
      people,
      calendarOutline,
      eyeOutline
    };
  },
  computed: {},
  $route: {
    async handler() {
    },
    deep: true
  },
  watch: {},
  async mounted() {
    this.getAppointments();
  },
  methods: {
    setSegmentContent(name) {
      this.segmentContent = name;
    },
    formatBirthdate(birthdate) {
      return HisDate.getBirthdateAge(birthdate);
    },
    async getAppointments() {
      this.people = [];
      const appointments = await Appointment.getAppointments(this.startDate, this.endDate, "");
      appointments.forEach((client) => {
        const apptOb = {
          person_id: client.person_id,
          npid: client.npid,
          appointment_id: 103,
          encounter_id: client.encounter_id,
          name: client.given_name.concat(" ", client.family_name),
          gender: client.gender,
          ageDob: this.formatBirthdate(client.birthdate),
          village: client.city_village,
          appointmentDate: HisDate.toStandardHisDisplayFormat(client.appointment_date)
        };
        this.people.push(apptOb);
      });
    },
    async getAppointmentsD1(date) {
      this.startDate = HisDate.toStandardHisFormat(date);
      await this.getAppointments();
    },
    async getAppointmentsD2(date) {
      this.endDate = HisDate.toStandardHisFormat(date);
      await this.getAppointments();
    },
    async openClientProfile(patientID) {
      await PatientService.findByNpid(patientID);
      this.isPharmacist();
    },
    isPharmacist() {
      const roleData = JSON.parse(localStorage.getItem("userRoles"));
      const roles = roleData ? roleData : [];
      if (roles.some((role) => roles.some((role2) => role2.role === "Pharmacist"))) {
        this.$router.push("dispensation");
        if (Service.getProgramID() == 32) {
          this.$router.push("NCDDispensations");
        } else {
          this.$router.push("patientProfile");
        }
      }
    }
  }
});

const _hoisted_1$4 = { class: "appointments-container" };
const _hoisted_2$4 = {
  key: 0,
  class: "date-filter"
};
const _hoisted_3$4 = { class: "appointments-table" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_segment_button = resolveComponent("ion-segment-button");
  const _component_ion_segment = resolveComponent("ion-segment");
  const _component_DateInputField = resolveComponent("DateInputField");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", null, [
      createVNode(_component_ion_segment, {
        value: _ctx.segmentContent,
        style: { "margin-top": "5px", "padding-left": "0%", "padding-right": "0%", "justify-content": "left" }
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_segment_button, {
            value: "Today",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setSegmentContent("Today"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("Today", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_segment_button, {
            value: "Tomorrow",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setSegmentContent("Tomorrow"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[4] || (_cache[4] = [
                  createTextVNode("Tomorrow", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_segment_button, {
            value: "Date range",
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.setSegmentContent("Date range"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createTextVNode("Date range", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"])
    ]),
    _ctx.segmentContent === "Date range" ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_DateInputField, {
                inputHeader: "Start Date",
                sectionHeaderFontWeight: 20,
                unit: "",
                icon: _ctx.calendarOutline,
                placeholder: "press to select date",
                iconRight: "",
                inputWidth: "100%",
                inputValue: _ctx.startDate,
                eventType: "",
                minDate: "",
                maxDate: "",
                disabled: false,
                "onUpdate:rawDateValue": _ctx.getAppointmentsD1
              }, null, 8, ["icon", "inputValue", "onUpdate:rawDateValue"])
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, null, {
            default: withCtx(() => [
              createVNode(_component_DateInputField, {
                inputHeader: "End Date",
                sectionHeaderFontWeight: 20,
                unit: "",
                icon: _ctx.calendarOutline,
                placeholder: "press to select date",
                iconRight: "",
                inputWidth: "100%",
                inputValue: _ctx.endDate,
                eventType: "",
                minDate: _ctx.startDate,
                maxDate: "",
                disabled: false,
                "onUpdate:rawDateValue": _ctx.getAppointmentsD2
              }, null, 8, ["icon", "inputValue", "minDate", "onUpdate:rawDateValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : createCommentVNode("", true),
    _ctx.people.length > 0 ? (openBlock(), createBlock(_component_ion_card, { key: 1 }, {
      default: withCtx(() => [
        createBaseVNode("table", _hoisted_3$4, [
          _cache[6] || (_cache[6] = createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "Name"),
              createBaseVNode("th", null, "NPID"),
              createBaseVNode("th", null, "Age/DOB"),
              createBaseVNode("th", null, "Gender"),
              createBaseVNode("th", null, "Village"),
              createBaseVNode("th", null, "Appointment Date")
            ])
          ], -1)),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.people, (person) => {
              return openBlock(), createElementBlock("tr", {
                key: person.npid
              }, [
                createBaseVNode("td", null, [
                  createVNode(_component_ion_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(person.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_button, {
                            style: { "position": "absolute", "right": "10px", "--padding-start": "8px", "--padding-end": "8px", "--padding-bottom": "4px", "--box-shadow": "none" },
                            onClick: ($event) => _ctx.openClientProfile(person.npid),
                            color: "primary",
                            fill: "clear",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: _ctx.eyeOutline,
                                style: { "font-size": "24px" }
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createBaseVNode("td", null, toDisplayString(person.npid), 1),
                createBaseVNode("td", null, toDisplayString(person.ageDob), 1),
                createBaseVNode("td", null, toDisplayString(person.gender), 1),
                createBaseVNode("td", null, toDisplayString(person.village), 1),
                createBaseVNode("td", null, toDisplayString(person.appointmentDate), 1)
              ]);
            }), 128))
          ])
        ])
      ]),
      _: 1
    })) : (openBlock(), createBlock(_component_ion_card, { key: 2 }, {
      default: withCtx(() => [..._cache[7] || (_cache[7] = [
        createBaseVNode("div", { class: "no-appointments" }, "No appointments found for the selected date range.", -1)
      ])]),
      _: 1
    }))
  ]);
}
const ANCAppointments = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__scopeId", "data-v-c47f7768"]]);

const _sfc_main$5 = defineComponent({
  name: "referrals",
  components: {},
  data() {
    return {
      segmentContent: "Internal referrals",
      checkUnderFive: false
    };
  },
  methods: {
    setSegmentContent(name) {
    }
  }
});

const _hoisted_1$3 = { key: 0 };
const _hoisted_2$3 = { style: { "display": "flex", "margin-top": "10px" } };
const _hoisted_3$3 = {
  key: 0,
  style: { "width": "50vw", "background-color": "#fff", "border-radius": "5px", "margin-right": "5px" }
};
const _hoisted_4$1 = {
  key: 1,
  style: { "width": "50vw", "background-color": "#fff", "border-radius": "5px" }
};
const _hoisted_5$1 = { key: 1 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_segment_button = resolveComponent("ion-segment-button");
  const _component_ion_segment = resolveComponent("ion-segment");
  const _component_VisitsHistory = resolveComponent("VisitsHistory");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", null, [
      createVNode(_component_ion_segment, {
        value: _ctx.segmentContent,
        style: { "margin-top": "5px", "margin-left": "20px", "justify-content": "left" }
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_segment_button, {
            value: "Internal referrals",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setSegmentContent("Internal referrals"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode("Internal referrals", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ion_segment_button, {
            value: "External referrals",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setSegmentContent("External referrals"))
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, null, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("External referrals", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"])
    ]),
    _ctx.segmentContent == "Internal referrals" ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
      createBaseVNode("div", _hoisted_2$3, [
        _ctx.checkUnderFive ? (openBlock(), createElementBlock("div", _hoisted_3$3)) : createCommentVNode("", true),
        _cache[4] || (_cache[4] = createBaseVNode("div", { style: { "width": "50vw", "background-color": "#fff", "border-radius": "5px", "margin-right": "5px" } }, null, -1)),
        !_ctx.checkUnderFive ? (openBlock(), createElementBlock("div", _hoisted_4$1)) : createCommentVNode("", true)
      ])
    ])) : createCommentVNode("", true),
    _ctx.segmentContent == "External referrals" ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
      createVNode(_component_VisitsHistory)
    ])) : createCommentVNode("", true)
  ], 64);
}
const Referrals = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__scopeId", "data-v-faad8f8b"]]);

const _sfc_main$4 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    IonIcon,
    BasicForm,
    BasicCard,
    Referrals,
    Dashboard,
    ANCAppointments
  },
  data() {
    return {
      menuItems: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: gridOutline
        },
        {
          id: "referrals",
          label: "Referrals",
          icon: peopleOutline
        },
        {
          id: "appointments",
          label: "Appointments",
          icon: calendarOutline
        }
      ],
      activeItem: "dashboard"
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["substance"])
  },
  watch: {
    substance: {
      handler() {
      },
      deep: true
    }
  },
  mounted() {
  },
  methods: {
    setActiveItem(id) {
      this.activeItem = id;
    }
  }
});

const _hoisted_1$2 = { style: { "display": "flex" } };
const _hoisted_2$2 = { class: "left_col" };
const _hoisted_3$2 = { class: "nav-menu" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "right_col" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_Dashboard = resolveComponent("Dashboard");
  const _component_ANCAppointments = resolveComponent("ANCAppointments");
  const _component_Referrals = resolveComponent("Referrals");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("nav", _hoisted_3$2, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuItems, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.id,
              class: normalizeClass({ active: _ctx.activeItem === item.id }),
              onClick: ($event) => _ctx.setActiveItem(item.id)
            }, [
              createVNode(_component_ion_icon, {
                icon: item.icon,
                size: "large",
                class: "menu-icon"
              }, null, 8, ["icon"]),
              createBaseVNode("span", null, toDisplayString(item.label), 1)
            ], 10, _hoisted_4);
          }), 128))
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("div", null, [
        _ctx.activeItem === "dashboard" ? (openBlock(), createBlock(_component_Dashboard, { key: 0 })) : createCommentVNode("", true),
        _ctx.activeItem === "appointments" ? (openBlock(), createBlock(_component_ANCAppointments, { key: 1 })) : createCommentVNode("", true),
        _ctx.activeItem === "referrals" ? (openBlock(), createBlock(_component_Referrals, { key: 2 })) : createCommentVNode("", true)
      ])
    ])
  ]);
}
const ANCDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__scopeId", "data-v-7e786ea4"]]);

const _sfc_main$3 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      menuItems: [
        { id: "dashboard", label: "Dashboard" },
        { id: "appointments", label: "Appointments" },
        { id: "referrals", label: "Referrals" }
      ],
      activeItem: "dashboard"
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["substance"])
  },
  watch: {
    substance: {
      handler() {
      },
      deep: true
    }
  },
  mounted() {
  },
  methods: {
    setActiveItem(id) {
      this.activeItem = id;
    }
  }
});

const _hoisted_1$1 = { class: "left_col" };
const _hoisted_2$1 = { class: "nav-menu" };
const _hoisted_3$1 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("nav", _hoisted_2$1, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuItems, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.id,
              class: normalizeClass({ active: _ctx.activeItem === item.id }),
              onClick: ($event) => _ctx.setActiveItem(item.id)
            }, toDisplayString(item.label), 11, _hoisted_3$1);
          }), 128))
        ])
      ])
    ]),
    _cache[0] || (_cache[0] = createBaseVNode("div", { class: "right_col" }, null, -1))
  ]);
}
const LabourDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-32dd02d3"]]);

const _sfc_main$2 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      menuItems: [
        { id: "dashboard", label: "Dashboard" },
        { id: "appointments", label: "Appointments" },
        { id: "referrals", label: "Referrals" }
      ],
      activeItem: "dashboard"
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["substance"])
  },
  watch: {
    substance: {
      handler() {
      },
      deep: true
    }
  },
  mounted() {
  },
  methods: {
    setActiveItem(id) {
      this.activeItem = id;
    }
  }
});

const _hoisted_1 = { class: "left_col" };
const _hoisted_2 = { class: "nav-menu" };
const _hoisted_3 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("nav", _hoisted_2, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuItems, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.id,
              class: normalizeClass({ active: _ctx.activeItem === item.id }),
              onClick: ($event) => _ctx.setActiveItem(item.id)
            }, toDisplayString(item.label), 11, _hoisted_3);
          }), 128))
        ])
      ])
    ]),
    _cache[0] || (_cache[0] = createBaseVNode("div", { class: "right_col" }, null, -1))
  ]);
}
const PNCDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-b49d8600"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NeonatalDashboard",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonContent), { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(LandingPage)
        ]),
        _: 1
      });
    };
  }
});

const NeonatalDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-050fef7a"]]);

function useUserRole() {
  const route = useRoute();
  const userRole = ref("");
  const ready = ref(false);
  const userRoleSettings = ref({});
  const updateUserRoleSettings = () => {
    const currentUserRole = Service.getUserRoles();
    const programID = Service.getProgramID();
    const programName = Service.getProgramName();
    userRole.value = currentUserRole;
    ready.value = false;
    if (currentUserRole === "Lab" && programID === 14) {
      userRoleSettings.value = {
        url: "home",
        btnName: "Back to home",
        stepperTitle: "Laboratory"
      };
    } else if (programID === 14 && currentUserRole !== "Lab") {
      userRoleSettings.value = {
        url: "OPDvitals",
        btnName: "Back to vitals",
        stepperTitle: "Consultation Plan"
      };
    } else if (programID === 12) {
      userRoleSettings.value = {
        url: "ANChome",
        btnName: "Back"
      };
    } else if (programName === "LABOUR AND DELIVERY PROGRAM") {
      userRoleSettings.value = {
        url: "labourHome",
        btnName: "Back to home"
      };
    } else if (programName === "PNC PROGRAM") {
      userRoleSettings.value = {
        url: "pnc/home",
        btnName: "Back to home"
      };
    } else {
      userRoleSettings.value = {
        url: "",
        btnName: ""
      };
    }
    ready.value = true;
  };
  watch(
    () => route.path,
    () => {
      updateUserRoleSettings();
    },
    { immediate: true, deep: true }
  );
  return {
    userRole,
    ready,
    userRoleSettings,
    updateUserRoleSettings
  };
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomePage",
  setup(__props) {
    const isLoading = ref(true);
    const route = useRoute();
    const workerStore = useWorkerStore();
    const sessionDate = ref(localStorage.getItem("sessionDate") || "");
    useUserRole();
    const programStore = useProgramStore();
    const { apiStatus } = storeToRefs(useStatusStore());
    const { activeProgram } = storeToRefs(programStore);
    const activeDashboard = computed(() => {
      const programID = Number(activeProgram.value?.program_id);
      console.log("🚀 ~ activeDashboard ~ activeProgram:", programID);
      switch (programID) {
        case ProgramId.IMMUNIZATION_PROGRAM:
          return ImmunizationDashboard;
        case ProgramId.OPD_PROGRAM:
          return OPDDashboard;
        case ProgramId.NCD_PROGRAM:
          return NCDDashboard;
        case ProgramId.AETC_PROGRAM:
          return AETCDashboard;
        case ProgramId.HTS_PROGRAM:
          return HTSDashboard;
        case ProgramId.ANC_PROGRAM:
          return ANCDashboard;
        case ProgramId.PNC_PROGRAM:
          return PNCDashboard;
        case ProgramId.LABOUR_AND_DELIVERY_PROGRAM:
          return LabourDashboard;
        case ProgramId.HIV_PROGRAM:
          return ARTHome;
        case ProgramId.NEONATAL_PROGRAM:
          return NeonatalDashboard;
        default:
          return null;
      }
    });
    const checkSessionDate = () => {
      const currentSessionDate = localStorage.getItem("sessionDate");
      if (!currentSessionDate || currentSessionDate.trim() === "") {
        console.log("Session date is blank or undefined, calling checkAndsetSessionDate");
        checkAndsetSessionDate();
      }
      sessionDate.value = currentSessionDate || "";
    };
    let storageListener = null;
    onMounted(() => {
      storageListener = () => checkSessionDate();
      window.addEventListener("storage", storageListener);
      const intervalId = setInterval(checkSessionDate, 1e3);
      onUnmounted(() => {
        clearInterval(intervalId);
        if (storageListener) {
          window.removeEventListener("storage", storageListener);
        }
      });
      checkSessionDate();
    });
    watch(sessionDate, (newValue, oldValue) => {
      if (!newValue || newValue.trim() === "") {
        console.log("Session date became blank, calling checkAndsetSessionDate");
        checkAndsetSessionDate();
      }
    });
    const displayModulePicker = async () => {
      if (lodashExports.isEmpty(activeProgram.value)) {
        await modal.show(ModulePicker, {}, "module-picker-modal");
      }
    };
    const initializeComponent = async (extraFns = []) => {
      try {
        isLoading.value = true;
        resetDemographics();
        await useGlobalPropertyStore().loadGlobalProperty();
        workerStore.postData({
          command: "ping"
        });
        for (const fn of extraFns) {
          if (typeof fn === "function") {
            await fn();
          } else {
            console.warn("Non-function item found in extraFns array:", fn);
          }
        }
      } catch (error) {
        console.error("Error initializing component:", error);
      } finally {
        isLoading.value = false;
      }
    };
    watch(
      () => route.name,
      async (newRoute) => {
        if (newRoute === "Home") {
          await initializeComponent([displayModulePicker]);
        }
      },
      { immediate: true, deep: true }
    );
    const getUserLocation = async () => {
      try {
        const userId = Service.getUserID();
        const user_data = await UserService.getUserByID(userId);
        if (user_data.location_id != null) {
          const response = await LocationService.getLocation(user_data.location_id);
          localStorage.setItem("locationData", JSON.stringify(response));
        }
      } catch (error) {
        console.error("Failed to retrieve location data:", error);
      }
    };
    if (apiStatus.value) {
      useUserActivities();
      getUserLocation();
    }
    onMounted(async () => {
      try {
        await initializeComponent();
      } catch (error) {
        console.error("Error initializing component:", error);
      } finally {
        isLoading.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_ion_content = resolveComponent("ion-content");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(_sfc_main$D),
          activeDashboard.value ? (openBlock(), createBlock(resolveDynamicComponent(activeDashboard.value), { key: 0 })) : (openBlock(), createBlock(_component_ion_content, { key: 1 }, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createBaseVNode("div", { class: "container" }, [
                createBaseVNode("h4", { style: { "width": "100%", "text-align": "center", "font-weight": "700" } }, "Welcome to MAHIS"),
                createBaseVNode("p", { style: { "width": "100%", "text-align": "center" } }, "Please select a module to get started")
              ], -1)
            ])]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
