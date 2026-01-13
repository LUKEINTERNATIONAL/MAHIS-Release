import { r as ref, cs as useRoute, d as computed, w as watch, q as defineComponent, O as createBlock, y as openBlock, E as unref, aH as useRouter, a2 as onMounted, br as IonPage, a4 as normalizeClass, A as withCtx, x as createElementBlock, G as createCommentVNode, z as createVNode, B as createBaseVNode, M as IonSpinner, I as IonHeader, C as toDisplayString, H as IonContent, S as withDirectives, T as vShow, bb as IonFooter, F as closeCircleOutline, N as IonButton, a5 as createTextVNode, J as Fragment, R as renderList, dn as checkmarkDoneCircleOutline, K as modalController } from './vendor-BPW-J91F.js';
import { R as RegistrationService, u as useRegistrationPagination, a as useSetRegistrationValues, _ as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5, e as _sfc_main$6, f as _sfc_main$7, g as _sfc_main$8 } from './useSetRegistrationValues-Dfqa4080.js';
import { f as useStatusStore, S as Service, g as getPouchDBRecords, a6 as RelationsService, n as icons, y as StandardValidations, z as useExposeFromStandardForm, C as StandardForm, F as DynamicButton, t as toastWarning, I as alertConfirmationIonic, a4 as popoverConfirmation, _ as _export_sfc } from '../index-D7kYL7Nj.js';
import { i as isNCDClerk } from './user_role_management-DX0pfPn_.js';
import { u as useNeonatalEnrollmentStore } from './useNeonatalEnrollmentStore-BPSfxbLX.js';

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

const useGuardianInformation = (personalInformationRef, formRef, relationshipsData) => {
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "header-title" };
const _hoisted_3 = { class: "masonry-grid" };
const _hoisted_4 = { class: "card-container" };
const _hoisted_5 = { class: "custom-card" };
const _hoisted_6 = { class: "card-container" };
const _hoisted_7 = {
  key: 0,
  class: "custom-card"
};
const _hoisted_8 = {
  key: 1,
  class: "custom-card"
};
const _hoisted_9 = { class: "custom-card card-margin-top" };
const _hoisted_10 = {
  key: 0,
  class: "card-container"
};
const _hoisted_11 = { class: "custom-card" };
const _hoisted_12 = { class: "custom-card card-margin-top" };
const _hoisted_13 = { class: "card-container" };
const _hoisted_14 = { class: "custom-card" };
const _hoisted_15 = {
  key: 0,
  class: "custom-card card-margin-top"
};
const _hoisted_16 = { class: "footer-content" };
const _hoisted_17 = { class: "footer-buttons-left" };
const _hoisted_18 = {
  key: 0,
  class: "pagination-dots"
};
const _hoisted_19 = ["onClick", "aria-label"];
const _hoisted_20 = { class: "footer-buttons-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Registration",
  props: {
    editMode: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const isLoading = ref(false);
    const router = useRouter();
    const route = useRoute();
    const neonatalEnrollmentStore = useNeonatalEnrollmentStore();
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
    const { nextPage, prevPage, goToPage, isCardVisible, showPreviousButton, showPaginationButtons, totalPages, currentPage, showNextButton } = useRegistrationPagination();
    const { setFormValues } = useSetRegistrationValues();
    const saveAllData = async () => {
      try {
        isSaving.value = true;
        if (!validateAll()) {
          toastWarning("Please fill in all required fields");
          return;
        }
        const registrationResult = await new RegistrationService().saveRegistrationData(allFormValues.value);
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
          if (Service.getProgramID() == 32) {
            if (isNCDClerk()) {
              navigateTo("/home");
            } else navigateTo("/NCDEnrollment");
          } else {
            navigateTo("/patientProfile");
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
      const confirmed = await alertConfirmationIonic(`Do you want to cancel registration?`);
      if (confirmed) {
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
    };
    const cancelEdit = async () => {
      const confirmed = await popoverConfirmation(`Do you want to cancel editing of demographics?`, "", {
        confirmBtnLabel: "Yes",
        icon: "",
        showBackdrop: true
      });
      if (confirmed) {
        modalController.dismiss();
      }
    };
    const navigateTo = (path) => {
      router.push({ path });
    };
    watch(
      route,
      async (newRoute) => {
        const context = newRoute.query.context;
        if (context !== "neonatal-mother") {
          setFormValues(formRefs);
        }
      },
      { deep: true }
    );
    onMounted(async () => {
      const context = route.query.context;
      if (context !== "neonatal-mother") {
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
              createBaseVNode("div", _hoisted_3, [
                withDirectives(createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_sfc_main$2, {
                      ref_key: "personalInformationRef",
                      ref: personalInformationRef
                    }, null, 512)
                  ])
                ], 512), [
                  [vShow, unref(isCardVisible)(0)]
                ]),
                withDirectives(createBaseVNode("div", _hoisted_6, [
                  checkAge.value.underNineMonths && !__props.editMode ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    checkAge.value.underNineMonths ? (openBlock(), createBlock(_sfc_main$3, {
                      key: 0,
                      ref_key: "birthRegistrationRef",
                      ref: birthRegistrationRef
                    }, null, 512)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  checkAge.value.moreThanThirteenYears ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    createVNode(_sfc_main$4, {
                      ref_key: "socialHistoryRef",
                      ref: socialHistoryRef
                    }, null, 512)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_sfc_main$5, {
                      ref_key: "countryRef",
                      ref: countryRef
                    }, null, 512)
                  ])
                ], 512), [
                  [vShow, unref(isCardVisible)(1)]
                ]),
                !countryFormValues.value?.country?.name || countryFormValues.value?.country?.name === "Malawi" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_sfc_main$6, {
                      ref_key: "currentLocationRef",
                      ref: currentLocationRef
                    }, null, 512)
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_sfc_main$7, {
                      currentLocationFormValues: currentLocationFormValues.value,
                      ref_key: "homeLocationRef",
                      ref: homeLocationRef
                    }, null, 8, ["currentLocationFormValues"])
                  ])
                ], 512)), [
                  [vShow, unref(isCardVisible)(2)]
                ]) : createCommentVNode("", true),
                withDirectives(createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(_sfc_main$1, {
                      personalInformationFormValues: personalInformationFormValues.value,
                      ref_key: "guardianInformationRef",
                      ref: guardianInformationRef
                    }, null, 8, ["personalInformationFormValues"])
                  ]),
                  unref(Service).getProgramID() == 1 ? (openBlock(), createElementBlock("div", _hoisted_15, [
                    createVNode(_sfc_main$8, {
                      ref_key: "patientTypeRef",
                      ref: patientTypeRef
                    }, null, 512)
                  ])) : createCommentVNode("", true)
                ], 512), [
                  [vShow, unref(isCardVisible)(3)]
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(DynamicButton, {
                    name: "Cancel",
                    color: "danger",
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": _cache[0] || (_cache[0] = ($event) => __props.editMode ? cancelEdit() : cancel())
                  }, null, 8, ["icon"]),
                  withDirectives(createVNode(unref(IonButton), {
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(prevPage)()),
                    "aria-label": "Go to previous page"
                  }, {
                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createTextVNode("Previous", -1)
                    ])]),
                    _: 1
                  }, 512), [
                    [vShow, unref(showPreviousButton)]
                  ])
                ]),
                unref(showPaginationButtons) ? (openBlock(), createElementBlock("div", _hoisted_18, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(totalPages), (page) => {
                    return openBlock(), createElementBlock("span", {
                      key: page,
                      class: normalizeClass({ dot: true, active: page === unref(currentPage) }),
                      onClick: ($event) => unref(goToPage)(page),
                      "aria-label": `Go to page ${page}`,
                      role: "button"
                    }, null, 10, _hoisted_19);
                  }), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_20, [
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

const Registration = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6acca109"]]);

const Registration$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: Registration
}, Symbol.toStringTag, { value: 'Module' }));

export { Registration as R, _sfc_main$1 as _, Registration$1 as a, useRelationships as u };
