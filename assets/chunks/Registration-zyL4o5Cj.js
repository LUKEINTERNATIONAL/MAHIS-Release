import { ct as useRoute, c as computed, f as ref, w as watch, s as defineComponent, y as openBlock, O as createBlock, F as unref, aL as useRouter, a2 as onMounted, bu as IonPage, a4 as normalizeClass, B as withCtx, z as createElementBlock, A as createVNode, M as IonSpinner, C as createBaseVNode, H as createCommentVNode, I as IonHeader, D as toDisplayString, aG as IonContent, S as withDirectives, T as vShow, bf as IonFooter, G as closeCircleOutline, N as IonButton, a5 as createTextVNode, J as Fragment, R as renderList, dn as checkmarkDoneCircleOutline, K as modalController } from './vendor-DrpjccQs.js';
import { h as createSameAsCurrentHandler, R as RegistrationService, u as useRegistrationPagination, a as useSetRegistrationValues, _ as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7, d as _sfc_main$8, e as _sfc_main$9, f as _sfc_main$a, g as _sfc_main$b } from './useSetRegistrationValues-CRrnyD1g.js';
import { S as Service, f as useStatusStore, g as getPouchDBRecords, a7 as RelationsService, n as icons, y as StandardValidations, z as StandardForm, C as useExposeFromStandardForm, F as DynamicButton, t as toastWarning, k as alertConfirmation, _ as _export_sfc } from '../index-BgFAo788.js';
import { u as useLocation } from './useLocation-CvUOZ_Ko.js';
import { P as PatientDiagnosisService } from './patient_diagnosis_service-DU2lQdw2.js';
import { u as useNeonatalEnrollmentStore } from './useNeonatalEnrollmentStore-lwFqWJ42.js';

function isNCDClerk() {
  const roleData = JSON.parse(localStorage.getItem("userRoles"));
  const roles = roleData ? roleData : [];
  if (roles.some(
    (role) => role.role === "General Registration Clerk" || roles.some((role2) => role2.role === "Vitals Clerk" || roles.some((role3) => role3.role === "Registration Clerk"))
  ) && Service.getProgramID() == 32) {
    return true;
  } else {
    return false;
  }
}
function isClinician() {
  const roleData = JSON.parse(localStorage.getItem("userRoles"));
  const roles = roleData ? roleData : [];
  if (roles.some((role) => role.role === "Clinician")) {
    return true;
  } else {
    return false;
  }
}

function useRelationships() {
  const relationships = ref([]);
  const relationshipsData = ref([]);
  const filteredRelationships = ref([]);
  const statusStore = useStatusStore();
  useRoute();
  const apiStatus = computed(() => statusStore.apiStatus);
  const filterRelationships = (gender) => {
    const maleRelationships = ["Brother", "Father", "Son", "Grandfather", "Grandson", "Boyfriend", "Stepfather", "Stepson"];
    const femaleRelationships = ["Sister", "Mother", "Daughter", "Grandmother", "Granddaughter", "Girlfriend", "Stepmother", "Stepdaughter"];
    const commonRelationships = [
      "Spouse/Partner",
      "Aunt/Uncle",
      "Niece/Nephew",
      "Doctor",
      "Other",
      "Patient",
      "TB Contact Person",
      "TB Patient",
      "treatment suporter"
    ];
    if (relationshipsData.value?.length > 0) {
      filteredRelationships.value = relationshipsData.value.filter((relationship) => {
        if (gender === "M") {
          return maleRelationships.includes(relationship.a_is_to_b) || commonRelationships.includes(relationship.a_is_to_b);
        } else if (gender === "F") {
          return femaleRelationships.includes(relationship.a_is_to_b) || commonRelationships.includes(relationship.a_is_to_b);
        } else {
          return commonRelationships.includes(relationship.a_is_to_b);
        }
      });
    }
  };
  const getRelationships = async (gender) => {
    if (gender) {
      if (Service.getPouchDbStatus() && Service.getLanConnectionStatus()) {
        relationshipsData.value = await getPouchDBRecords("relationship");
      } else {
        relationshipsData.value = await RelationsService.getRelations();
      }
      filterRelationships(gender);
      relationships.value = relationships.value = filteredRelationships.value.map((r) => {
        return [
          {
            name: r.b_is_to_a,
            id: r.relationship_type_id,
            trackByID: r.relationship_type_id + r.b_is_to_a
          }
        ];
      }).reduce((acc, val) => acc.concat(val), []);
      return relationships.value;
    }
    filterRelationships(gender);
    relationships.value = filteredRelationships.value.map((r) => {
      return [
        {
          name: r.b_is_to_a,
          id: r.relationship_type_id,
          trackByID: r.relationship_type_id + r.b_is_to_a
        }
      ];
    }).reduce((acc, val) => acc.concat(val), []);
    return relationships.value;
  };
  return {
    // Reactive data
    relationships,
    relationshipsData,
    filteredRelationships,
    // Computed properties
    apiStatus,
    // Methods
    getRelationships,
    filterRelationships
  };
}

const useGuardianInformation = (personalInformationRef, formRef, relationshipsData, currentLocationFormValues) => {
  const isChild = computed(() => {
    const data = new RegistrationService().checkIfChild(personalInformationRef.value);
    return data.moreThanThirteenYears;
  });
  const { getRelationships } = useRelationships();
  const relationships = ref();
  watch(personalInformationRef, async (newGender) => {
    if (newGender) {
      relationships.value = await getRelationships(newGender.gender);
    }
  });
  watch(relationshipsData, async (newGender) => {
    relationships.value = newGender;
  });
  const guardianInformation = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Guardian Information",
        position: "center"
      },
      {
        componentType: "checkboxField",
        type: "single",
        name: "same_as_next_of_kin",
        label: "same as next of kin",
        onChange: createSameAsCurrentHandler(currentLocationFormValues, formRef),
        condition: () => Service.getProgramID() === 30
      },
      {
        componentType: "inputField",
        header: "Guardian National ID",
        name: "guardianNationalID",
        placeholder: "__-__-__-__",
        icon: icons.nationalID,
        validation: (value) => {
          return StandardValidations.isMWNationalID(value);
        }
      },
      {
        componentType: "inputField",
        header: "First name",
        name: "guardianFirstname",
        icon: icons.fullName,
        validation: (value) => {
          return isChild.value ? StandardValidations.isNameEmpty(value) : StandardValidations.isName(value);
        }
      },
      {
        componentType: "inputField",
        header: "Middle name",
        name: "guardianMiddleName",
        icon: icons.fullName,
        validation: (value) => {
          return StandardValidations.isNameEmpty(value);
        }
      },
      {
        componentType: "inputField",
        header: "Last name",
        name: "guardianLastname",
        icon: icons.fullName,
        validation: (value) => {
          return isChild.value ? StandardValidations.isNameEmpty(value) : StandardValidations.isName(value);
        }
      },
      {
        componentType: "phoneInputField",
        name: "guardianPhoneNumber",
        header: "Phone Number",
        validation: (value) => {
          return StandardValidations.isMWPhoneNumber(value.phoneNumber);
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Relationship to patient",
        name: "relationship",
        trackBy: "trackByID",
        icon: icons.search,
        validation: (value) => {
          return isChild.value ? null : StandardValidations.required(value?.name);
        },
        options: () => {
          return relationships.value;
        },
        disabled: () => {
          return !relationships.value;
        }
      }
    ];
  });
  return {
    guardianInformation
  };
};

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GuardianInformation",
  props: {
    personalInformationFormValues: {},
    relationshipsData: {}
  },
  setup(__props, { expose: __expose }) {
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const props = __props;
    const personalInformationRef = computed(() => {
      return props.personalInformationFormValues;
    });
    const relationshipsData = computed(() => {
      return props.relationshipsData;
    });
    const { guardianInformation } = useGuardianInformation(personalInformationRef, formRef, relationshipsData);
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(guardianInformation),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const { facilityList, getFacilities } = useLocation();
const diagnoses = ref([]);
const getDiagnosis = async (value) => {
  const searchValue = value.trim().toLowerCase() || "";
  PatientDiagnosisService.getDiagnosis(searchValue, 1, 15).then((response) => {
    diagnoses.value = response;
  });
};
getFacilities();
getDiagnosis("");
const useReferralInformation = () => {
  const referralInformation = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Referral Information",
        position: "center"
      },
      {
        componentType: "multiSelectInputField",
        header: "Facility",
        name: "facility",
        trackBy: "facility_id",
        openDirection: "auto",
        icon: icons.search,
        options: facilityList.value.facilities || facilityList.value,
        onSearchChange: getFacilities
      },
      {
        name: "reason_for_referral",
        header: "Reason for Referral",
        trackBy: "name",
        componentType: "multiSelectInputField",
        isMultiple: true,
        options: diagnoses.value,
        icon: icons.search,
        onSearchChange: getDiagnosis
      }
    ];
  });
  return {
    referralInformation
  };
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Referral",
  setup(__props, { expose: __expose }) {
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const { referralInformation } = useReferralInformation();
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(referralInformation),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const useFinancing = () => {
  const financing = computed(() => {
    const getSelectedCount = (allValues) => {
      const checkboxFields = ["Non-paying", "Cash", "Staff", "Insurance"];
      return checkboxFields.filter((field) => allValues[field]).length;
    };
    const shouldDisable = (fieldName, allValues) => {
      const selectedCount = getSelectedCount(allValues);
      return selectedCount >= 2 && !allValues[fieldName];
    };
    return [
      {
        componentType: "Heading",
        name: "Financing",
        position: "center"
      },
      {
        componentType: "Heading",
        name: "Payment Options",
        position: "left",
        size: "small"
      },
      {
        componentType: "checkboxField",
        type: "single",
        name: "Non-paying",
        label: "Non-paying",
        disabled: (data) => shouldDisable("Non-paying", data),
        onChange: (value, allValues) => {
        }
      },
      {
        componentType: "checkboxField",
        type: "single",
        name: "Cash",
        label: "Cash",
        disabled: (data) => shouldDisable("Cash", data),
        onChange: (value, allValues) => {
        }
      },
      {
        componentType: "checkboxField",
        type: "single",
        name: "Staff",
        label: "Staff",
        disabled: (data) => shouldDisable("Staff", data),
        onChange: (value, allValues) => {
        }
      },
      {
        componentType: "checkboxField",
        type: "single",
        name: "Insurance",
        label: "Insurance",
        disabled: (data) => shouldDisable("Insurance", data),
        onChange: (value, allValues) => {
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Insurance Provider",
        name: "insuranceProvider",
        icon: icons.search,
        trackBy: "value",
        condition: (data) => {
          return data["Insurance"];
        },
        options: [
          { value: "masm", name: "Masm" },
          { value: "Escom", name: "Escom" },
          { value: "Reserve Bank", name: "Reserve Bank" },
          { value: "Liberty", name: "Liberty" },
          { value: "Unimed", name: "Unimed" },
          { value: "Medhealth", name: "Medhealth" },
          { value: "CIC Malawi", name: "CIC Malawi" },
          { value: "MRA", name: "MRA" }
        ]
      },
      {
        componentType: "inputField",
        header: "Insurance ID Number",
        name: "insuranceIdNo",
        icon: icons.nationalID,
        condition: (data) => {
          return data["Insurance"];
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Insurance Scheme",
        name: "insuranceSchema",
        icon: icons.search,
        trackBy: "value",
        condition: (data) => {
          return data["Insurance"];
        },
        options: [
          { value: "VVIP", name: "VVIP" },
          { value: "VIP", name: "VIP" },
          { value: "EXEC", name: "EXEC" },
          { value: "ECO", name: "ECO" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Insurance Status",
        name: "insuranceStatus",
        type: "inline",
        condition: (data) => {
          return data["Insurance"];
        },
        options: [
          {
            label: "Active",
            value: "active"
          },
          {
            label: "Inactive",
            value: "inactive"
          }
        ]
      }
    ];
  });
  return {
    financing
  };
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Financing",
  setup(__props, { expose: __expose }) {
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const { financing } = useFinancing();
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(financing),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const useNextOfKinInformation = (personalInformationRef, formRef, relationshipsData) => {
  const isChild = computed(() => {
    const data = new RegistrationService().checkIfChild(personalInformationRef.value);
    return data.moreThanThirteenYears;
  });
  const { getRelationships } = useRelationships();
  const relationships = ref();
  watch(personalInformationRef, async (newGender) => {
    if (newGender) {
      relationships.value = await getRelationships(newGender.gender);
    }
  });
  watch(relationshipsData, async (newGender) => {
    relationships.value = newGender;
  });
  const nextOfKinInformation = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Next of kin Information",
        position: "center"
      },
      {
        componentType: "inputField",
        header: "Next of kin First Name",
        name: "guardianNationalID",
        placeholder: "__-__-__-__",
        icon: icons.nationalID,
        validation: (value) => {
          return StandardValidations.isMWNationalID(value);
        }
      },
      {
        componentType: "inputField",
        header: "Next Of Kin Last Name",
        name: "guardianNationalID",
        placeholder: "__-__-__-__",
        icon: icons.nationalID,
        validation: (value) => {
          return StandardValidations.isMWNationalID(value);
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Next Of Kin Relationship",
        name: "relationship",
        trackBy: "trackByID",
        icon: icons.search,
        validation: (value) => {
          return isChild.value ? null : StandardValidations.required(value?.name);
        },
        options: () => {
          return relationships.value;
        },
        disabled: () => {
          return !relationships.value;
        }
      },
      {
        componentType: "phoneInputField",
        name: "guardianPhoneNumber",
        header: "Phone Number",
        validation: (value) => {
          return StandardValidations.isMWPhoneNumber(value.phoneNumber);
        }
      }
    ];
  });
  return {
    nextOfKinInformation
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NextOfKinInformation",
  props: {
    personalInformationFormValues: {},
    relationshipsData: {}
  },
  setup(__props, { expose: __expose }) {
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const props = __props;
    const personalInformationRef = computed(() => {
      return props.personalInformationFormValues;
    });
    const relationshipsData = computed(() => {
      return props.relationshipsData;
    });
    const { nextOfKinInformation } = useNextOfKinInformation(personalInformationRef, formRef, relationshipsData);
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(nextOfKinInformation),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "header-title" };
const _hoisted_3 = { class: "card-container" };
const _hoisted_4 = { class: "custom-card" };
const _hoisted_5 = { class: "card-container" };
const _hoisted_6 = {
  key: 0,
  class: "custom-card"
};
const _hoisted_7 = {
  key: 1,
  class: "custom-card"
};
const _hoisted_8 = { class: "custom-card card-margin-top" };
const _hoisted_9 = {
  key: 0,
  class: "card-container"
};
const _hoisted_10 = { class: "custom-card" };
const _hoisted_11 = { class: "custom-card card-margin-top" };
const _hoisted_12 = {
  key: 1,
  class: "card-container"
};
const _hoisted_13 = {
  key: 0,
  class: "custom-card card-margin-bottom"
};
const _hoisted_14 = {
  key: 1,
  class: "custom-card"
};
const _hoisted_15 = {
  key: 2,
  class: "custom-card card-margin-top"
};
const _hoisted_16 = {
  key: 2,
  class: "card-container"
};
const _hoisted_17 = { class: "custom-card" };
const _hoisted_18 = { class: "custom-card card-margin-top" };
const _hoisted_19 = { class: "footer-content" };
const _hoisted_20 = { class: "footer-buttons-left" };
const _hoisted_21 = {
  key: 0,
  class: "pagination-dots"
};
const _hoisted_22 = ["onClick", "aria-label"];
const _hoisted_23 = { class: "footer-buttons-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Registration",
  props: {
    editMode: {
      type: Boolean,
      default: false
    },
    relativeRegistration: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const isLoading = ref(false);
    const router = useRouter();
    const route = useRoute();
    const neonatalEnrollmentStore = useNeonatalEnrollmentStore();
    const props = __props;
    const personalInformationRef = ref(null);
    const birthRegistrationRef = ref(null);
    const socialHistoryRef = ref(null);
    const countryRef = ref(null);
    const currentLocationRef = ref(null);
    const homeLocationRef = ref(null);
    const guardianInformationRef = ref(null);
    const patientTypeRef = ref(null);
    const isSaving = ref(false);
    const formRefs = ref({
      personalInformationRef,
      birthRegistrationRef,
      socialHistoryRef,
      countryRef,
      currentLocationRef,
      homeLocationRef,
      guardianInformationRef,
      patientTypeRef
    });
    const personalInformationFormValues = computed(() => {
      return personalInformationRef.value?.currentFormValues || {};
    });
    const birthRegistrationFormValues = computed(() => {
      return birthRegistrationRef.value?.currentFormValues || {};
    });
    const socialHistoryFormValues = computed(() => {
      return socialHistoryRef.value?.currentFormValues || {};
    });
    const countryFormValues = computed(() => {
      return countryRef.value?.currentFormValues || {};
    });
    const currentLocationFormValues = computed(() => {
      return currentLocationRef.value?.currentFormValues || {};
    });
    const homeLocationFormValues = computed(() => {
      return homeLocationRef.value?.currentFormValues || {};
    });
    const guardianInformationFormValues = computed(() => {
      return guardianInformationRef.value?.currentFormValues || {};
    });
    const patientTypeFormValues = computed(() => {
      return patientTypeRef.value?.currentFormValues || {};
    });
    const allFormValues = computed(() => {
      return {
        personalInformation: personalInformationFormValues.value,
        birthRegistration: birthRegistrationFormValues.value,
        socialHistory: socialHistoryFormValues.value,
        country: countryFormValues.value,
        currentLocation: currentLocationFormValues.value,
        homeLocation: homeLocationFormValues.value,
        guardianInformation: guardianInformationFormValues.value,
        patientType: patientTypeFormValues.value
      };
    });
    const validateAll = () => {
      const refs = Object.values(formRefs.value);
      refs.forEach((ref2) => ref2?.validateForm());
      return refs.every((ref2) => ref2?.validateForm() == null);
    };
    const resetAll = () => {
      Object.values(formRefs.value).forEach((ref2) => ref2?.resetForm());
    };
    const checkAge = computed(() => {
      return new RegistrationService().checkIfChild(personalInformationFormValues.value);
    });
    const visibleCardsCount = computed(() => {
      let count = 0;
      if (isCardVisible(0)) count++;
      if (isCardVisible(1)) count++;
      if (isCardVisible(2)) count++;
      if (isCardVisible(3)) count++;
      if (isCardVisible(4) && Service.getProgramID() == 30) count++;
      return count;
    });
    const { nextPage, prevPage, goToPage, isCardVisible, showPreviousButton, showPaginationButtons, totalPages, currentPage, showNextButton } = useRegistrationPagination();
    const { setFormValues } = useSetRegistrationValues();
    const saveAllData = async () => {
      try {
        isSaving.value = true;
        if (!validateAll()) {
          toastWarning("Please fill in all required fields");
          return;
        }
        const registrationResult = await new RegistrationService().saveRegistrationData(allFormValues.value, props.relativeRegistration);
        if (registrationResult) {
          const context = route.query.context;
          const returnTo = route.query.returnTo;
          if (context === "neonatal-mother" && returnTo === "/neonatal/enrollment") {
            const newPatientId = Service.getUserID();
            if (newPatientId) {
              const personalInfo = personalInformationFormValues.value;
              const homeLocationInfo = homeLocationFormValues.value;
              const currentLocationInfo = currentLocationFormValues.value;
              const motherDetails = {
                patientID: newPatientId,
                firstName: personalInfo.firstname || "",
                middleName: personalInfo.middleName || "",
                lastName: personalInfo.lastname || "",
                gender: personalInfo.gender || "F",
                birthdate: personalInfo.birthdate || "",
                nationalId: personalInfo.nationalID || "",
                phone: personalInfo["Phone Number"] || "",
                address: {
                  city_village: homeLocationInfo.home_village?.name || currentLocationInfo.current_village?.name || "",
                  township_division: homeLocationInfo.home_traditional_authority?.name || currentLocationInfo.current_traditional_authority?.name || "",
                  state_province: homeLocationInfo.home_district?.name || currentLocationInfo.current_district?.name || ""
                }
              };
              neonatalEnrollmentStore.setCreatedMother(newPatientId, motherDetails);
              resetAll();
              setTimeout(() => {
                router.replace({
                  path: returnTo,
                  query: {
                    motherAdded: newPatientId.toString(),
                    timestamp: Date.now().toString()
                  }
                });
              }, 100);
            } else {
              resetAll();
              setTimeout(() => {
                router.replace({ path: returnTo });
              }, 100);
            }
            return;
          }
          resetAll();
          if (props.relativeRegistration) {
            modalController.dismiss(registrationResult);
          } else {
            if (Service.getProgramID() == 32) {
              if (isNCDClerk()) {
                navigateTo("/home");
              } else navigateTo("/ncd/enrollment");
            } else {
              navigateTo("/patient-profile");
            }
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        isSaving.value = false;
      }
    };
    const updateDemographics = async () => {
      try {
        isSaving.value = true;
        if (!validateAll()) {
          toastWarning("Please fill in all required fields");
          return;
        }
        if (await new RegistrationService().updateDemographics(allFormValues.value)) {
          modalController.dismiss();
        }
      } catch (error) {
        console.error(error);
      } finally {
        isSaving.value = false;
      }
    };
    const cancel = async () => {
      const confirmed = await alertConfirmation(`Do you want to cancel registration?`);
      if (confirmed) {
        if (props.relativeRegistration || props.editMode) {
          modalController.dismiss();
          return;
        } else {
          const context = route.query.context;
          const returnTo = route.query.returnTo;
          resetAll();
          if (context === "neonatal-mother" && returnTo === "/neonatal/enrollment") {
            neonatalEnrollmentStore.clearEnrollmentContext();
            setTimeout(() => {
              router.replace({ path: returnTo });
            }, 50);
            return;
          }
          router.replace({ path: "/home" });
        }
      }
    };
    const navigateTo = (path) => {
      router.push({ path });
    };
    watch(
      route,
      async (newRoute) => {
        const context = newRoute.query.context;
        if (context !== "neonatal-mother" && !props.relativeRegistration) {
          setFormValues(formRefs);
        }
      },
      { deep: true }
    );
    onMounted(async () => {
      const context = route.query.context;
      if (context !== "neonatal-mother" && !props.relativeRegistration) {
        setFormValues(formRefs);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, toDisplayString(__props.editMode ? "Edit Patient Demographic" : "New Patient Registration"), 1)
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["masonry-grid", { "few-cards": visibleCardsCount.value <= 2 }])
              }, [
                withDirectives(createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_sfc_main$5, {
                      ref_key: "personalInformationRef",
                      ref: personalInformationRef
                    }, null, 512)
                  ])
                ], 512), [
                  [vShow, unref(isCardVisible)(0)]
                ]),
                withDirectives(createBaseVNode("div", _hoisted_5, [
                  checkAge.value.underNineMonths && !__props.editMode ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    checkAge.value.underNineMonths ? (openBlock(), createBlock(_sfc_main$6, {
                      key: 0,
                      ref_key: "birthRegistrationRef",
                      ref: birthRegistrationRef
                    }, null, 512)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  checkAge.value.moreThanThirteenYears ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    createVNode(_sfc_main$7, {
                      ref_key: "socialHistoryRef",
                      ref: socialHistoryRef
                    }, null, 512)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_sfc_main$8, {
                      ref_key: "countryRef",
                      ref: countryRef
                    }, null, 512)
                  ])
                ], 512), [
                  [vShow, unref(isCardVisible)(1)]
                ]),
                !countryFormValues.value?.country?.name || countryFormValues.value?.country?.name === "Malawi" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_sfc_main$9, {
                      ref_key: "currentLocationRef",
                      ref: currentLocationRef
                    }, null, 512)
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_sfc_main$a, {
                      currentLocationFormValues: currentLocationFormValues.value,
                      ref_key: "homeLocationRef",
                      ref: homeLocationRef
                    }, null, 8, ["currentLocationFormValues"])
                  ])
                ], 512)), [
                  [vShow, unref(isCardVisible)(2)]
                ]) : createCommentVNode("", true),
                !__props.relativeRegistration ? withDirectives((openBlock(), createElementBlock("div", _hoisted_12, [
                  unref(Service).getProgramID() == 30 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                    createVNode(_sfc_main$1, {
                      personalInformationFormValues: personalInformationFormValues.value,
                      ref_key: "guardianInformationRef",
                      ref: guardianInformationRef
                    }, null, 8, ["personalInformationFormValues"])
                  ])) : createCommentVNode("", true),
                  !__props.relativeRegistration ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    createVNode(_sfc_main$4, {
                      personalInformationFormValues: personalInformationFormValues.value,
                      ref_key: "guardianInformationRef",
                      ref: guardianInformationRef
                    }, null, 8, ["personalInformationFormValues"])
                  ])) : createCommentVNode("", true),
                  unref(Service).getProgramID() == 1 ? (openBlock(), createElementBlock("div", _hoisted_15, [
                    createVNode(_sfc_main$b, {
                      ref_key: "patientTypeRef",
                      ref: patientTypeRef
                    }, null, 512)
                  ])) : createCommentVNode("", true)
                ], 512)), [
                  [vShow, unref(isCardVisible)(3)]
                ]) : createCommentVNode("", true),
                unref(Service).getProgramID() == 30 ? withDirectives((openBlock(), createElementBlock("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(_sfc_main$3, { ref: "referralRef" }, null, 512)
                  ]),
                  createBaseVNode("div", _hoisted_18, [
                    createVNode(_sfc_main$2, { ref: "financingRef" }, null, 512)
                  ])
                ], 512)), [
                  [vShow, unref(isCardVisible)(4)]
                ]) : createCommentVNode("", true)
              ], 2)
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createVNode(DynamicButton, {
                    name: "Cancel",
                    color: "danger",
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => cancel())
                  }, null, 8, ["icon"]),
                  withDirectives(createVNode(unref(IonButton), {
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(prevPage)()),
                    "aria-label": "Go to previous page"
                  }, {
                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createTextVNode("Previous ", -1)
                    ])]),
                    _: 1
                  }, 512), [
                    [vShow, unref(showPreviousButton)]
                  ])
                ]),
                unref(showPaginationButtons) ? (openBlock(), createElementBlock("div", _hoisted_21, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(totalPages), (page) => {
                    return openBlock(), createElementBlock("span", {
                      key: page,
                      class: normalizeClass({ dot: true, active: page === unref(currentPage) }),
                      onClick: ($event) => unref(goToPage)(page),
                      "aria-label": `Go to page ${page}`,
                      role: "button"
                    }, null, 10, _hoisted_22);
                  }), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_23, [
                  withDirectives(createVNode(DynamicButton, {
                    name: __props.editMode ? "Update" : "Save",
                    loading: isSaving.value,
                    fill: "solid",
                    color: "primary",
                    icon: unref(checkmarkDoneCircleOutline),
                    "onClicked:btn": _cache[2] || (_cache[2] = ($event) => __props.editMode ? updateDemographics() : saveAllData())
                  }, null, 8, ["name", "loading", "icon"]), [
                    [vShow, unref(currentPage) === unref(totalPages)]
                  ]),
                  withDirectives(createVNode(DynamicButton, {
                    name: "Next",
                    "onClicked:btn": _cache[3] || (_cache[3] = ($event) => unref(nextPage)())
                  }, null, 512), [
                    [vShow, unref(showNextButton)]
                  ])
                ])
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

const Registration = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46903e2e"]]);

const Registration$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: Registration
}, Symbol.toStringTag, { value: 'Module' }));

export { Registration as R, _sfc_main$4 as _, Registration$1 as a, isClinician as i, useRelationships as u };
