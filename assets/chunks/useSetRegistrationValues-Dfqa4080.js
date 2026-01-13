import { n as icons, y as StandardValidations, z as useExposeFromStandardForm, C as StandardForm, H as HisDate, _ as _export_sfc, S as Service, g as getPouchDBRecords, L as useWorkerStore, a8 as PatientDemographicsExchangeService, o as createModal, P as PatientService, u as useDemographicsStore, K as ObservationService, b as EncounterTypeId, x as toastDanger, J as savePatientRecord, G as toastSuccess, k as alertConfirmation, aM as PrintoutService, aa as GlobalPropertyService } from '../index-D7kYL7Nj.js';
import { u as useLocation } from './useLocation-DmSdlWgP.js';
import { r as ref, d as computed, q as defineComponent, O as createBlock, y as openBlock, E as unref, N as IonButton, L as IonIcon, an as IonItem, am as IonList, ay as IonCol, dt as IonImg, af as IonRow, e1 as IonAvatar, a7 as IonLabel, K as modalController, v as resolveComponent, x as createElementBlock, G as createCommentVNode, z as createVNode, B as createBaseVNode, A as withCtx, C as toDisplayString, J as Fragment, R as renderList, a5 as createTextVNode, l as dayjs, a2 as onMounted, a3 as onUnmounted } from './vendor-BPW-J91F.js';
import { g as getOfflineVaccineSchedule } from './vaccines_service-CYXwCRJ6.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';

const useCurrentLocation = (formRef) => {
  const isLoadingTAs = ref(false);
  const { getDistricts, districtList, selectedTraditionalAuthorityId, villages, selectedDistrictId, TAs } = useLocation();
  getDistricts();
  const currentLocation = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Current Location",
        position: "center"
      },
      {
        componentType: "multiSelectInputField",
        header: "Current district",
        name: "current_district",
        trackBy: "district_id",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        icon: icons.search,
        options: districtList.value,
        onChange: (value, data) => {
          if (formRef?.value) {
            formRef.value.setFormValue("current_traditional_authority", []);
            formRef.value.setFormValue("current_village", []);
          }
          selectedDistrictId.value = value?.district_id || null;
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Current traditional authority",
        name: "current_traditional_authority",
        trackBy: "traditional_authority_id",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        icon: icons.search,
        options: TAs.value,
        disabled: (data) => {
          return !TAs?.value?.length;
        },
        onChange: (value, data) => {
          if (formRef?.value) formRef?.value?.setFormValue("current_village", []);
          selectedTraditionalAuthorityId.value = value?.traditional_authority_id || null;
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Current village",
        name: "current_village",
        trackBy: "village_id",
        icon: icons.search,
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: villages.value,
        disabled: (data) => {
          return !villages?.value?.length;
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Closest landmark/Plot number",
        name: "closestLandmark",
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Church"
          },
          {
            id: 2,
            name: "Mosque"
          },
          {
            id: 3,
            name: "Primary School"
          },
          {
            id: 4,
            name: "Borehole"
          },
          {
            id: 5,
            name: "Secondary School"
          },
          {
            id: 6,
            name: "College"
          },
          {
            id: 7,
            name: "Market"
          },
          {
            id: 8,
            name: "Football Ground"
          },
          {
            id: 9,
            name: "Other"
          }
        ]
      }
    ];
  });
  return {
    currentLocation,
    TAs,
    isLoadingTAs,
    selectedDistrictId
  };
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CurrentLocation",
  setup(__props, { expose: __expose }) {
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const { currentLocation } = useCurrentLocation(formRef);
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(currentLocation),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const copyCurrentToHome = (currentLocationFormValues, formRef) => {
  if (!currentLocationFormValues?.value || !formRef?.value) return;
  const { current_district, current_traditional_authority, current_village } = currentLocationFormValues.value;
  formRef.value.setFormValue("home_district", current_district);
  formRef.value.setFormValue("home_traditional_authority", current_traditional_authority);
  formRef.value.setFormValue("home_village", current_village);
};
const clearHomeLocation = (formRef) => {
  if (!formRef?.value) return;
  formRef.value.setFormValue("home_district", []);
  formRef.value.setFormValue("home_traditional_authority", []);
  formRef.value.setFormValue("home_village", []);
};
const handleDistrictChange = (value, selectedDistrictId, formRef) => {
  selectedDistrictId.value = value?.district_id || null;
  if (formRef?.value) {
    formRef.value.setFormValue("home_traditional_authority", []);
    formRef.value.setFormValue("home_village", []);
  }
};
const handleTAChange = (value, selectedTraditionalAuthorityId, formRef) => {
  selectedTraditionalAuthorityId.value = value?.traditional_authority_id || null;
  formRef?.value?.setFormValue("home_village", []);
};
const isFieldDisabled = (data, optionsArray) => {
  return data?.same_as_current ? false : !optionsArray?.length;
};
const createSameAsCurrentHandler = (currentLocationFormValues, formRef) => {
  return (value) => {
    setTimeout(() => {
      value ? copyCurrentToHome(currentLocationFormValues, formRef) : clearHomeLocation(formRef);
    }, 0);
  };
};

const useHomeLocation = (currentLocationFormValues, formRef) => {
  const { getDistricts, districtList, selectedTraditionalAuthorityId, villages, selectedDistrictId, TAs } = useLocation();
  getDistricts();
  const homeLocation = computed(() => [
    {
      componentType: "Heading",
      name: "Home Location",
      position: "center"
    },
    {
      componentType: "checkboxField",
      type: "single",
      name: "same_as_current",
      label: "Same as current",
      onChange: createSameAsCurrentHandler(currentLocationFormValues, formRef)
    },
    {
      componentType: "multiSelectInputField",
      header: "Home district",
      name: "home_district",
      trackBy: "district_id",
      icon: icons.search,
      validation: StandardValidations.required,
      options: districtList.value,
      onChange: (value) => handleDistrictChange(value, selectedDistrictId, formRef)
    },
    {
      componentType: "multiSelectInputField",
      header: "Home traditional authority",
      name: "home_traditional_authority",
      trackBy: "traditional_authority_id",
      validation: StandardValidations.required,
      icon: icons.search,
      options: TAs.value,
      disabled: (data) => isFieldDisabled(data, TAs.value),
      onChange: (value) => handleTAChange(value, selectedTraditionalAuthorityId, formRef),
      openDirection: "auto"
    },
    {
      componentType: "multiSelectInputField",
      header: "Home village",
      name: "home_village",
      trackBy: "village_id",
      icon: icons.search,
      validation: StandardValidations.required,
      options: villages.value,
      disabled: (data) => isFieldDisabled(data, villages.value),
      openDirection: "auto"
    }
  ]);
  return {
    homeLocation
  };
};

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HomeLocation",
  props: {
    currentLocationFormValues: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const currentLocationRef = computed(() => props.currentLocationFormValues);
    const { homeLocation } = useHomeLocation(currentLocationRef, formRef);
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(homeLocation),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const useCountry = () => {
  const { countriesList, getCountries } = useLocation();
  getCountries();
  const country = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Country",
        position: "center"
      },
      {
        componentType: "multiSelectInputField",
        header: "Country",
        name: "country",
        trackBy: "district_id",
        openDirection: "auto",
        icon: icons.search,
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: countriesList.value
      }
    ];
  });
  return {
    country
  };
};

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Country",
  setup(__props, { expose: __expose }) {
    const { country } = useCountry();
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(country),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const usePersonalInformation = () => {
  function subtractYearsFromDateString(dateStr, years) {
    const date = new Date(dateStr);
    date.setFullYear(date.getFullYear() - years);
    return date.toISOString().split("T")[0];
  }
  const personalInformation = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Personal Information",
        position: "center"
      },
      {
        componentType: "inputField",
        header: "National ID",
        name: "nationalID",
        placeholder: "__-__-__-__",
        icon: icons.nationalID,
        validation: (value) => {
          return StandardValidations.isMWNationalID(value);
        }
      },
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
        header: "Middle name",
        name: "middleName",
        icon: icons.fullName,
        validation: (value) => {
          return StandardValidations.isNamesEmpty(value);
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
      },
      {
        componentType: "radioButtonField",
        header: "Gender",
        name: "gender",
        type: "inline",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: [
          {
            label: "Male",
            value: "M"
          },
          {
            label: "Female",
            value: "F"
          },
          {
            label: "Undetermined",
            value: "Undetermined"
          }
        ]
      },
      {
        componentType: "dateInputField",
        header: "Date of birth",
        name: "birthdate",
        icon: icons.calenderPrimary,
        minDate: subtractYearsFromDateString(HisDate.sessionDate(), 110),
        validation: (value) => {
          return StandardValidations.required(value);
        },
        condition: (formData) => {
          return !formData.Estimate;
        },
        disabled: (formData) => {
          return formData.Estimate;
        }
      },
      {
        componentType: "inputField",
        header: "Estimated age",
        name: "estimation",
        icon: icons.time,
        validation: (value) => {
          return StandardValidations.isEstimationDate(value);
        },
        initialUnit: "Years",
        unitOptions: [
          { label: "Days", value: "Days" },
          { label: "Weeks", value: "Weeks" },
          { label: "Months", value: "Months" },
          { label: "Years", value: "Years" }
        ],
        unitValidation: (unitValue) => {
          if (!unitValue || unitValue === "") {
            return "Please select a unit.";
          }
          return null;
        },
        condition: (formData) => {
          return formData.Estimate;
        }
      },
      {
        componentType: "checkboxField",
        name: "Estimate",
        type: "single",
        label: "Estimate age"
      },
      {
        componentType: "phoneInputField",
        name: "Phone Number",
        header: "Phone Number",
        validation: (value) => {
          return StandardValidations.isMWPhoneNumber(value.phoneNumber);
        }
      }
    ];
  });
  return {
    personalInformation
  };
};

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PersonalInformation",
  setup(__props, { expose: __expose }) {
    const { personalInformation } = usePersonalInformation();
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(personalInformation),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$3 = defineComponent({
  components: {
    IonLabel,
    IonAvatar,
    IonRow,
    IonImg,
    IonCol,
    IonList,
    IonItem,
    IonIcon,
    IonButton
  },
  data: () => ({
    selectedResult: {},
    iconsContent: icons,
    isAnyAccordionOpen: true,
    isLoading: false
  }),
  methods: {
    updateAccordionState(event) {
      const accordionGroup = this.$refs.accordionGroup;
      this.isAnyAccordionOpen = accordionGroup.value !== void 0;
    },
    dismiss(dismiss) {
      modalController.dismiss(dismiss);
    },
    async init() {
      this.setData(this.deduplicationData[0] || {});
    },
    async onSelect() {
      modalController.dismiss(this.selectedResult);
    },
    setData(data) {
      this.selectedResult = data;
    },
    dateFormat(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    probabilityToPercentage(probability) {
      return (probability * 100).toFixed(2) + "%";
    }
  },
  props: {
    deduplicationData: {
      default: []
    },
    to_be_registered: {
      default: []
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "header position_content" };
const _hoisted_3 = { style: { "font-size": "1.2em", "font-weight": "700" } };
const _hoisted_4 = { class: "due_date" };
const _hoisted_5 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_6 = { style: { "display": "flex", "justify-content": "end", "gap": "10px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createVNode(_component_ion_spinner, { name: "bubbles" }),
      _cache[3] || (_cache[3] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
    ])) : createCommentVNode("", true),
    createVNode(_component_ion_header, null, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            style: { "display": "flex", "align-items": "center" },
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss("back"))
          }, [
            createVNode(_component_ion_icon, {
              slot: "separator",
              size: "large",
              icon: _ctx.iconsContent.arrowLeft
            }, null, 8, ["icon"])
          ]),
          createBaseVNode("div", _hoisted_3, "Matches found: (" + toDisplayString(_ctx.deduplicationData.length) + ")", 1)
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
        createVNode(_component_ion_accordion_group, {
          ref: "accordionGroup",
          class: "previousView",
          value: "0",
          onIonChange: _ctx.updateAccordionState
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.deduplicationData, (result, index) => {
              return openBlock(), createBlock(_component_ion_accordion, {
                style: { "margin-bottom": "15px" },
                value: index,
                "toggle-icon-slot": "start",
                class: "custom_card",
                button: "",
                key: index,
                detail: true,
                color: result.value === _ctx.selectedResult.value ? "light" : "",
                onClick: ($event) => _ctx.setData(result)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, { slot: "header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, { class: "previousLabel" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(result?.person?.given_name) + " " + toDisplayString(result?.person?.family_name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createBaseVNode("div", _hoisted_4, [
                        _cache[4] || (_cache[4] = createTextVNode(" Score: ", -1)),
                        createBaseVNode("b", null, toDisplayString(_ctx.probabilityToPercentage(result?.score) || "-"), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createBaseVNode("b", null, "To be Registered", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createBaseVNode("b", null, "Already Registered", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[7] || (_cache[7] = createTextVNode(" Name: ", -1)),
                                createBaseVNode("b", null, toDisplayString(_ctx.to_be_registered?.given_name) + " " + toDisplayString(_ctx.to_be_registered?.family_name), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[8] || (_cache[8] = createTextVNode("Gender: ", -1)),
                                createBaseVNode("b", null, toDisplayString(_ctx.to_be_registered?.gender), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[9] || (_cache[9] = createTextVNode("Birthdate: ", -1)),
                                createBaseVNode("b", null, toDisplayString(_ctx.to_be_registered?.birthdate), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[10] || (_cache[10] = createTextVNode("Home District: ", -1)),
                                createBaseVNode("b", null, toDisplayString(_ctx.to_be_registered?.home_district), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[11] || (_cache[11] = createTextVNode("Home TA: ", -1)),
                                createBaseVNode("b", null, toDisplayString(_ctx.to_be_registered?.home_traditional_authority), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[12] || (_cache[12] = createTextVNode(" Name: ", -1)),
                                createBaseVNode("b", null, toDisplayString(result?.person?.given_name) + " " + toDisplayString(result?.person?.family_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[13] || (_cache[13] = createTextVNode("Gender: ", -1)),
                                createBaseVNode("b", null, toDisplayString(result?.person?.gender), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[14] || (_cache[14] = createTextVNode("Birthdate: ", -1)),
                                createBaseVNode("b", null, toDisplayString(_ctx.dateFormat(result?.person?.birthdate)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[15] || (_cache[15] = createTextVNode("Home District: ", -1)),
                                createBaseVNode("b", null, toDisplayString(result?.person?.home_district), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ion_row, null, {
                              default: withCtx(() => [
                                _cache[16] || (_cache[16] = createTextVNode("Home TA: ", -1)),
                                createBaseVNode("b", null, toDisplayString(result?.person?.home_traditional_authority), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                _: 2
              }, 1032, ["value", "color", "onClick"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["onIonChange"])
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, {
      collapse: "fade",
      class: "ion-no-border"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_ion_button, {
            fill: "solid",
            color: "secondary",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.dismiss("dismiss"))
          }, {
            default: withCtx(() => [..._cache[17] || (_cache[17] = [
              createTextVNode(" Not Duplicate ", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_ion_button, {
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.onSelect()),
            fill: "solid",
            disabled: !_ctx.isAnyAccordionOpen
          }, {
            default: withCtx(() => [..._cache[18] || (_cache[18] = [
              createTextVNode("Select ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    })
  ], 64);
}
const PersonMatchView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-ffb46cdd"]]);

const workerStore = useWorkerStore();
class DDEService {
  async getDDEIds() {
    const useIndexDB = Service.getPouchDbStatus();
    const useLan = Service.getLanConnectionStatus();
    const useApi = Service.getAPIStatus();
    if (useLan) {
      const ddeID = await this.getAndUpdateAvailableDdeId();
      if (ddeID?.success) return ddeID.ddeId;
      else return;
    }
    if (useIndexDB && !useLan) {
      const dde = await getPouchDBRecords("dde");
      if (dde[0]?.npid) return dde[0]?.npid || "";
    }
    if (useApi) {
      try {
        const ddeNPID = await Service.getJson("/dde/patients/sync_npids", {
          count: 1,
          program_id: Service.getProgramID()
        });
        return ddeNPID?.npids[0]?.npid || "";
      } catch (error) {
        return "";
      }
    }
    return "";
  }
  async deleteDDEId(DDEId) {
    workerStore.postData({ command: "deleteData", storeName: "dde", data: { npid: DDEId } });
  }
  async possibleDuplicates(personInformation) {
    if (Service.getAPIStatus()) {
      try {
        const ddeInstance = new PatientDemographicsExchangeService();
        const deduplicationData = await ddeInstance.checkPotentialDuplicates(personInformation);
        if (deduplicationData.length > 0) {
          const response = await createModal(PersonMatchView, { class: "fullScreenModal" }, true, {
            to_be_registered: personInformation,
            deduplicationData
          });
          if (response != "dismiss" && response != "back") {
            const result = await ddeInstance.importPatient(response?.person?.id);
            const patientData = await PatientService.findByID(result.patient_id);
            await useDemographicsStore().setPatientRecord(patientData);
            return true;
          } else if (response == "back") {
            return true;
          }
          return false;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    }
    return false;
  }
  async getAndUpdateAvailableDdeId() {
    try {
      const { couchdbUsername, couchdbPassword, couchdbPort, couchdbHost, couchdbProtocol } = Service.getCouchdbConfig();
      const dbUrl = `${couchdbProtocol}://${couchdbHost}:${couchdbPort}/dde`;
      const authHeader = "Basic " + btoa(`${couchdbUsername}:${couchdbPassword}`);
      const query = {
        selector: {
          type: "dde_id",
          $or: [{ status: { $exists: false } }, { status: { $ne: "used" } }]
        },
        limit: 1
      };
      const findResponse = await fetch(`${dbUrl}/_find`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader
        },
        body: JSON.stringify(query)
      });
      if (!findResponse.ok) {
        throw new Error(`Failed to query documents: ${findResponse.statusText}`);
      }
      const findResult = await findResponse.json();
      console.log("🚀 ~ DDEService ~ getAndUpdateAvailableDdeId ~ findResult:", findResult);
      if (!findResult.docs || findResult.docs.length === 0) {
        return {
          success: false,
          error: "No available DDE IDs found"
        };
      }
      const doc = findResult.docs[0];
      const ddeId = doc.dde_id;
      doc.status = "used";
      doc.assignedAt = (/* @__PURE__ */ new Date()).toISOString();
      const updateResponse = await fetch(`${dbUrl}/${doc._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader
        },
        body: JSON.stringify(doc)
      });
      if (!updateResponse.ok) {
        throw new Error(`Failed to update document: ${updateResponse.statusText}`);
      }
      console.log("🚀 ~ DDEService ~ getAndUpdateAvailableDdeId ~ ddeId:", ddeId);
      return {
        success: true,
        ddeId
      };
    } catch (error) {
      console.error("Error getting and updating DDE ID:", error);
      return null;
    }
  }
}

class PatientRecordBuilder {
  getRegion(regionId) {
    const regions = {
      1: "Central Region",
      2: "Northern Region",
      3: "Southern Region",
      4: "Foreign"
    };
    return regions[regionId];
  }
  hasValidData(obj, requiredFields = []) {
    if (!obj || typeof obj !== "object") return false;
    if (requiredFields.length === 0) {
      return Object.values(obj).some((value) => value !== null && value !== void 0 && value !== "");
    }
    return requiredFields.every((field) => obj[field] !== null && obj[field] !== void 0 && obj[field] !== "");
  }
  async buildObservation(label, value) {
    if (!value) return null;
    const actualValue = typeof value === "object" && value.name ? value.name : value;
    return await ObservationService.buildValueText(label, actualValue);
  }
  buildGuardianInfo(guardianInfo) {
    const guardian = {};
    guardian.given_name = guardianInfo?.guardianFirstname || "";
    guardian.middle_name = guardianInfo?.guardianMiddleName || "";
    guardian.family_name = guardianInfo?.guardianLastname || "";
    guardian.cell_phone_number = guardianInfo?.guardianPhoneNumber.phoneNumber || "";
    guardian.national_id = guardianInfo?.guardianNationalID || "";
    guardian.gender = "";
    guardian.birthdate = "";
    guardian.birthdate_estimated = "false";
    guardian.home_region = "";
    guardian.home_district = "";
    guardian.home_traditional_authority = "";
    guardian.home_village = "";
    guardian.current_region = "";
    guardian.current_district = "";
    guardian.current_traditional_authority = "";
    guardian.current_village = "";
    guardian.landmark = "";
    return { saved: [], unsaved: [guardian] };
  }
  async buildVitals(birthRegistration) {
    if (!birthRegistration?.Weight) return null;
    return {
      saved: [],
      unsaved: [await this.buildObservation("Weight", birthRegistration.Weight)]
    };
  }
  async buildARTPatientType(clinic, type) {
    const obs = [];
    let results = [];
    if (clinic) obs.push(await ObservationService.buildValueText("Art clinic location", clinic));
    if (type) obs.push(await ObservationService.buildValueCoded("Type of patient", type));
    if (obs.length === 0) return [];
    results = [
      {
        encounter_type: EncounterTypeId.REGISTRATION,
        status: "unsaved",
        obs
      }
    ];
    return results;
  }
  async buildBirthRegistrationObservations(birthRegistration) {
    if (!this.hasValidData(birthRegistration)) return null;
    const observations = await Promise.all([
      this.buildObservation(
        "How many doses of Tdv did the mother receive?",
        birthRegistration["How many doses of Tdv did the mother receive?"]
      ),
      this.buildObservation("Protected at birth", birthRegistration["Protected at birth"]),
      this.buildObservation("HIV status", birthRegistration["HIV status"])
    ]);
    const validObservations = observations.filter((obs) => obs !== null);
    return validObservations.length > 0 ? validObservations : null;
  }
  async buildPatientRecord(data, ddeId, patientID = "") {
    const { personalInformation, currentLocation, homeLocation, birthRegistration, guardianInformation, socialHistory, patientType } = data;
    return {
      patientID: patientID || ddeId || "",
      ID: ddeId || "",
      NcdID: "",
      personInformation: {
        given_name: personalInformation?.firstname || "",
        middle_name: personalInformation?.middleName || "",
        family_name: personalInformation?.lastname || "",
        gender: personalInformation?.gender || "",
        birthdate: personalInformation?.Estimate ? new RegistrationService().calculateDoB(personalInformation?.estimation, personalInformation?.estimation_unit || "Years") : personalInformation?.birthdate || "",
        birthdate_estimated: personalInformation?.Estimate ? "true" : "false",
        home_region: this.getRegion(homeLocation?.home_district?.region_id) || "",
        home_district: homeLocation?.home_district?.name || "",
        home_traditional_authority: homeLocation?.home_traditional_authority?.name || "",
        home_village: homeLocation?.home_village?.name || "",
        current_region: this.getRegion(currentLocation?.current_district?.region_id) || "",
        current_district: currentLocation?.current_district?.name || "",
        current_traditional_authority: currentLocation?.current_traditional_authority?.name || "",
        current_village: currentLocation?.current_village?.name || "",
        country: data?.country.country.name || "",
        landmark: currentLocation?.closestLandmark?.name || "",
        cell_phone_number: personalInformation["Phone Number"]?.phoneNumber || "",
        occupation: socialHistory?.occupation || "",
        marital_status: socialHistory?.maritalStatus || "",
        religion: socialHistory?.religion?.name || "",
        education_level: socialHistory?.highestLevelOfEducation || ""
      },
      guardianInformation: this.buildGuardianInfo(guardianInformation),
      birthRegistration: await this.buildBirthRegistrationObservations(birthRegistration),
      otherPersonInformation: {
        nationalID: personalInformation?.nationalID || "",
        ichisID: Service.getIchisId() || "",
        TEI: Service.getTEI() || "",
        birthID: birthRegistration["Serial Number"] || "",
        relationshipID: guardianInformation?.relationship?.id || ""
      },
      vitals: await this.buildVitals(birthRegistration),
      vaccineSchedule: await getOfflineVaccineSchedule(personalInformation?.gender, personalInformation?.birthdate),
      vaccineAdministration: {
        orders: [],
        obs: [],
        voided: []
      },
      observations: await this.buildARTPatientType(patientType?.facility?.name, patientType?.patient_type),
      appointments: {
        saved: [],
        unsaved: []
      },
      saveStatusPersonInformation: "pending",
      saveStatusGuardianInformation: "pending",
      saveStatusBirthRegistration: "pending",
      saveStatusVitals: "pending",
      date_created: "",
      creator: "",
      sync_status: "unsynced"
    };
  }
}

const buildIchisDiagnosis = async (patientRecord) => {
  const ichisDiagnosisObj = Service.getIchisDiagnosis();
  if (ichisDiagnosisObj.length <= 0) return patientRecord;
  const data = await Promise.all(
    ichisDiagnosisObj.map(async (item) => {
      const onlyNumbers = item?.value?.match(/[\d.]+/)?.[0] || "";
      const date = item?.date;
      if (item.display == "NCD_CV_D_Likelihood of Diabetes") {
        const eventId = item?.id?.split("-");
        return await ObservationService.buildValueNumber("Unspecified Diabetes", onlyNumbers, null, null, date, eventId[1]);
      }
      if (item.display == "NCD_SHD_CV_Client waist circumference")
        return await ObservationService.buildValueNumber("Waist circumference", onlyNumbers, null, null, date);
      if (item.display == "NCD_SHD_CV_Client systolic blood pressure")
        return await ObservationService.buildValueNumber("Systolic", onlyNumbers, null, null, date);
      if (item.display == "NCD_SHD_CV_Client diastolic blood pressure")
        return await ObservationService.buildValueNumber("Diastolic", onlyNumbers, null, null, date);
    })
  );
  patientRecord.observations.push({
    encounter_type: "VITALS",
    status: "unsaved",
    obs: data
  });
  return patientRecord;
};

class RegistrationService extends Service {
  patientRecordBuilder;
  constructor() {
    super();
    this.patientRecordBuilder = new PatientRecordBuilder();
  }
  async saveRegistrationData(data) {
    const ddeId = await new DDEService().getDDEIds();
    if (!ddeId) {
      toastDanger("DDE IDs are not available.");
      if (Service.getLanConnectionStatus() || Service.getPouchDbStatus()) return false;
    }
    let patientRecord = await this.patientRecordBuilder.buildPatientRecord(data, ddeId);
    if (Service.getProgramID() == 32) patientRecord = await buildIchisDiagnosis(patientRecord);
    if (await new DDEService().possibleDuplicates(patientRecord.personInformation)) return true;
    if (await savePatientRecord(patientRecord)) {
      toastSuccess("Registration successful");
      sessionStorage.setItem("ichis_diagnosis", JSON.stringify([]));
      if (Service.getPouchDbStatus()) await new DDEService().deleteDDEId(ddeId);
      await this.printBarcode();
      return true;
    }
    return false;
  }
  async updateDemographics(data) {
    let patientRecord = await this.patientRecordBuilder.buildPatientRecord(data, Service.getNationalID(), Service.getPatientID());
    patientRecord.saveStatusPersonInformation = "edit";
    patientRecord.saveStatusGuardianInformation = "edit";
    patientRecord.saveStatusBirthRegistration = "edit";
    patientRecord.saveStatusVitals = "edit";
    if (await savePatientRecord(patientRecord)) {
      toastSuccess("Updated successful");
      return true;
    }
    return false;
  }
  checkIfChild(personalData) {
    if (!personalData?.estimation && !personalData?.birthdate) {
      return {
        moreThanThirteenYears: true,
        underNineMonths: false,
        underFiveYears: false
      };
    }
    let birthdate = "";
    if (personalData.estimation) {
      birthdate = this.calculateDoB(personalData.estimation, personalData.estimation_unit || "Years") || "";
    } else {
      birthdate = personalData.birthdate;
    }
    return {
      moreThanThirteenYears: HisDate.getAgeInYears(birthdate) > 13,
      underNineMonths: HisDate.ageInMonths(birthdate) < 9,
      underFiveYears: HisDate.getAgeInYears(birthdate) < 5
    };
  }
  async printBarcode() {
    const response = await alertConfirmation("Do you want to print a barcode?", { header: "Printer" });
    if (response === "Confirm") await new PrintoutService().printData("barcode");
  }
  calculateDoB(value, unit) {
    try {
      let sessionDate = dayjs(Service.getSessionDate());
      if (unit === "Years" && value < 0) {
        sessionDate = sessionDate.add(Math.abs(value), "years");
      } else {
        switch (unit) {
          case "Days":
            sessionDate = sessionDate.subtract(value, "days");
            break;
          case "Months":
            sessionDate = sessionDate.subtract(value, "months");
            break;
          case "Years":
            sessionDate = sessionDate.subtract(value, "years");
            break;
          default:
            return null;
        }
      }
      return HisDate.toStandardHisDisplayFormat(sessionDate.format("YYYY-MM-DD")) || "";
    } catch (error) {
      console.error("Error calculating date:", error);
      return null;
    }
  }
}

const useSocialHistory = () => {
  const isMilitary = ref();
  GlobalPropertyService.isProp("military_site=true").then((res) => {
    isMilitary.value = res;
  });
  const socialHistory = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Social History",
        position: "center"
      },
      {
        componentType: "multiSelectInputField",
        header: "Religion",
        name: "religion",
        icon: icons.search,
        trackBy: "id",
        options: [
          { id: 1, name: "Christianity" },
          { id: 2, name: "Islam" },
          { id: 3, name: "Judaism" },
          { id: 4, name: "Hinduism" },
          { id: 5, name: "Buddhism" },
          { id: 6, name: "Sikhism" },
          { id: 7, name: "Jainism" },
          { id: 8, name: "Bahá'í Faith" },
          { id: 9, name: "Zoroastrianism" },
          { id: 10, name: "Confucianism" },
          { id: 11, name: "Taoism" },
          { id: 12, name: "Shinto" },
          { id: 13, name: "Baha'i Faith" },
          { id: 14, name: "Juche" },
          { id: 15, name: "Rastafari" }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Occupation status",
        name: "occupation",
        type: "inline",
        validation: StandardValidations.required,
        condition: () => {
          return Service.getProgramID() == 1 && isMilitary.value;
        },
        options: [
          {
            label: "Military",
            value: "Military"
          },
          {
            label: "Civilian",
            value: "Civilian"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Occupation status",
        name: "occupation",
        type: "inline",
        condition: (data) => {
          return !isMilitary;
        },
        options: [
          {
            label: "Employed",
            value: "employed"
          },
          {
            label: "Student",
            value: "Student"
          },
          {
            label: "Unemployed",
            value: "unemployed"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Marital status",
        name: "maritalStatus",
        type: "inline",
        options: [
          {
            label: "Single",
            value: "single"
          },
          {
            label: "Married",
            value: "married"
          },
          {
            label: "Widow",
            value: "widow"
          },
          {
            label: "Widower",
            value: "widower"
          },
          {
            label: "Divorced",
            value: "divorced"
          }
        ]
      },
      {
        componentType: "radioButtonField",
        header: "Highest level of education",
        name: "highestLevelOfEducation",
        type: "inline",
        options: [
          {
            label: "No education",
            value: "No education"
          },
          {
            label: "Primary school",
            value: "primary school"
          },
          {
            label: "Secondary school",
            value: "secondary school"
          },
          {
            label: "Tertiary education",
            value: "tertiary education"
          }
        ]
      }
    ];
  });
  return {
    socialHistory
  };
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SocialHistory",
  setup(__props, { expose: __expose }) {
    const { socialHistory } = useSocialHistory();
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(socialHistory),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const usePatientType = () => {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const patientType = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Patient Type",
        position: "center"
      },
      {
        componentType: "radioButtonField",
        header: "Patient Type",
        name: "patient_type",
        type: "inline",
        validation: StandardValidations.required,
        options: [
          {
            label: "New patient",
            value: "New patient"
          },
          {
            label: "Emergency supply",
            value: "Emergency supply"
          },
          {
            label: "External consultation",
            value: "External consultation"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Facility",
        name: "facility",
        trackBy: "facility_id",
        openDirection: "auto",
        icon: icons.search,
        validation: (value) => {
          return StandardValidations.required(value);
        },
        options: facilityList.value.facilities || facilityList.value,
        condition: (data) => {
          return data?.patient_type == "Emergency supply" || data?.patient_type == "External consultation";
        }
      }
    ];
  });
  return {
    patientType
  };
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PatientType",
  setup(__props, { expose: __expose }) {
    const { patientType } = usePatientType();
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(patientType),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const useBirthRegistration = (formRef) => {
  const birthRegistration = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Birth Registration",
        position: "center"
      },
      {
        componentType: "inputField",
        header: "Birth certificate number",
        name: "Serial Number",
        icon: icons.nationalID,
        placeholder: "__-__-__-__"
      },
      {
        componentType: "inputField",
        header: "Birth Weight/First weight (kg)",
        name: "Weight",
        icon: icons.weight,
        validation: (value) => {
          return StandardValidations.validateWeight(value);
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "How many doses of Tdv did the mother receive?",
        name: "How many doses of Tdv did the mother receive?",
        icon: icons.search,
        options: [
          {
            concept_id: 11997,
            name: "0-2 doses, less than two weeks before delivery"
          },
          {
            concept_id: 11998,
            name: "2-5 doses more than two weeks of delivery"
          },
          {
            concept_id: 1067,
            name: "Unknown"
          }
        ],
        trackBy: "concept_id",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        onChange: (value) => {
          const tdvDose = value?.name;
          if (tdvDose == "Unknown") {
            formRef.value.setFormValue("Protected at birth", {
              concept_id: 1067,
              name: "Don't know"
            });
          } else if (tdvDose == "0-2 doses, less than two weeks before delivery") {
            formRef.value.setFormValue("Protected at birth", {
              concept_id: 1066,
              name: "No"
            });
          } else if (tdvDose == "2-5 doses more than two weeks of delivery") {
            formRef.value.setFormValue("Protected at birth", {
              concept_id: 1065,
              name: "Yes"
            });
          }
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Protected at birth (PAB)",
        name: "Protected at birth",
        icon: icons.search,
        trackBy: "concept_id",
        validation: (value) => {
          return StandardValidations.required(value);
        },
        disabled: (data) => {
          return !data["How many doses of Tdv did the mother receive?"];
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "HIV status of the Child's Mother",
        name: "HIV status",
        icon: icons.search,
        options: [
          {
            id: 703,
            name: "Positive"
          },
          {
            id: 664,
            name: "Negative"
          },
          {
            id: 1067,
            name: "Unknown"
          }
        ],
        trackBy: "id",
        validation: (value) => {
          return StandardValidations.required(value);
        }
      }
    ];
  });
  return {
    birthRegistration
  };
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BirthRegistration",
  setup(__props, { expose: __expose }) {
    const { formRef, exposeFormMethods } = useExposeFromStandardForm();
    const { birthRegistration } = useBirthRegistration(formRef);
    __expose(exposeFormMethods());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(birthRegistration),
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

function useRegistrationPagination() {
  const currentPage = ref(1);
  const columnsPerRow = ref(4);
  const totalComponents = 4;
  const demographicsStore = useDemographicsStore();
  const { patient } = storeToRefs(demographicsStore);
  const getColumnsPerRow = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      return 4;
    } else if (width >= 768) {
      return 3;
    } else if (width >= 576) {
      return 2;
    } else {
      return 1;
    }
  };
  const totalPages = computed(() => {
    if (columnsPerRow.value === 0) return totalComponents;
    return Math.ceil(totalComponents / columnsPerRow.value);
  });
  const showPaginationButtons = computed(() => {
    return totalPages.value > 1;
  });
  const showPreviousButton = computed(() => {
    return showPaginationButtons.value && currentPage.value > 1;
  });
  const showNextButton = computed(() => {
    return showPaginationButtons.value && currentPage.value < totalPages.value;
  });
  const isCardVisible = (cardIndex) => {
    if (totalPages.value === 1) {
      return true;
    }
    const startIndex = (currentPage.value - 1) * columnsPerRow.value;
    const endIndex = startIndex + columnsPerRow.value - 1;
    return cardIndex >= startIndex && cardIndex <= endIndex;
  };
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages.value) {
      currentPage.value = pageNumber;
    }
  };
  const handleResize = () => {
    columnsPerRow.value = getColumnsPerRow();
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value;
    }
    if (currentPage.value === 0 && totalPages.value > 0) {
      currentPage.value = 1;
    }
  };
  onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
  return {
    // State
    currentPage,
    columnsPerRow,
    // Computed
    totalPages,
    showPaginationButtons,
    showPreviousButton,
    showNextButton,
    // Methods
    nextPage,
    prevPage,
    goToPage,
    handleResize,
    isCardVisible
  };
}

function useSetRegistrationValues() {
  const demographicsStore = useDemographicsStore();
  const { patient } = storeToRefs(demographicsStore);
  const setFormValues = (allFormRef) => {
    const { personalInformationRef, socialHistoryRef, countryRef, currentLocationRef, homeLocationRef, guardianInformationRef } = allFormRef.value;
    const personInformation = patient?.value?.personInformation;
    personalInformationRef?.setFormValue("nationalID", patient?.value?.otherPersonInformation?.nationalID);
    personalInformationRef?.setFormValue("firstname", personInformation?.given_name);
    personalInformationRef?.setFormValue("middleName", personInformation?.middle_name);
    personalInformationRef?.setFormValue("lastname", personInformation?.family_name);
    personalInformationRef?.setFormValue("gender", personInformation?.gender);
    personalInformationRef?.setFormValue(
      "birthdate",
      personInformation?.birthdate ? HisDate.toStandardHisDisplayFormat(personInformation?.birthdate) : ""
    );
    personalInformationRef?.setFormValue("Phone Number", personInformation?.cell_phone_number ? personInformation?.cell_phone_number : "");
    homeLocationRef?.setFormValue("home_district", { name: personInformation?.home_district });
    homeLocationRef?.setFormValue("home_traditional_authority", { name: personInformation?.home_traditional_authority });
    homeLocationRef?.setFormValue("home_village", { name: personInformation?.home_village });
    currentLocationRef?.setFormValue("current_district", { name: personInformation?.current_district });
    currentLocationRef?.setFormValue("current_traditional_authority", { name: personInformation?.current_traditional_authority });
    currentLocationRef?.setFormValue("current_village", { name: personInformation?.current_village });
    currentLocationRef?.setFormValue("closestLandmark", { name: personInformation?.landmark });
    countryRef?.setFormValue("country", personInformation?.country ? { name: personInformation?.country } : { name: "Malawi" });
    socialHistoryRef?.setFormValue("religion", { name: personInformation?.religion });
    socialHistoryRef?.setFormValue("occupation", personInformation?.occupation);
    socialHistoryRef?.setFormValue("maritalStatus", personInformation?.marital_status);
    socialHistoryRef?.setFormValue("highestLevelOfEducation", personInformation?.education_level);
    setGuardianInformation(guardianInformationRef);
  };
  const setGuardianInformation = (guardianInformationRef) => {
    const guardianInformation = patient?.value?.guardianInformation?.saved[0];
    const relationship = guardianInformation?.relationship_type?.b_is_to_a ? {
      name: guardianInformation.relationship_type.b_is_to_a,
      id: guardianInformation.relationship_type.relationship_type_id,
      trackByID: guardianInformation.relationship_type.relationship_type_id + guardianInformation.relationship_type.b_is_to_a
    } : "";
    guardianInformationRef?.setFormValue("guardianNationalID", guardianInformation?.national_id || "");
    guardianInformationRef?.setFormValue("guardianFirstname", guardianInformation?.given_name || "");
    guardianInformationRef?.setFormValue("guardianMiddleName", guardianInformation?.middle_name || "");
    guardianInformationRef?.setFormValue("guardianLastname", guardianInformation?.family_name || "");
    guardianInformationRef?.setFormValue(
      "guardianPhoneNumber",
      guardianInformation?.cell_phone_number ? guardianInformation?.cell_phone_number : ""
    );
    guardianInformationRef?.setFormValue("relationship", relationship || "");
  };
  return {
    setFormValues,
    setGuardianInformation
  };
}

export { RegistrationService as R, _sfc_main$4 as _, useSetRegistrationValues as a, _sfc_main as b, _sfc_main$2 as c, _sfc_main$5 as d, _sfc_main$7 as e, _sfc_main$6 as f, _sfc_main$1 as g, useRegistrationPagination as u };
