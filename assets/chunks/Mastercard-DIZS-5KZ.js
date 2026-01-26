import { v as defineComponent, w as watch, a3 as onMounted, z as openBlock, P as createBlock, G as unref, bG as IonModal, C as withCtx, B as createVNode, aC as IonToolbar, aD as IonTitle, a6 as createTextVNode, bd as IonButtons, O as IonButton, I as IonHeader, D as createBaseVNode, a8 as IonLabel, a5 as normalizeClass, E as toDisplayString, T as withDirectives, ay as vModelText, ad as IonNote, J as createCommentVNode, N as IonSpinner, A as createElementBlock, aF as IonContent, f as ref, c as computed, M as IonIcon, dy as arrowBack, aH as IonAccordionGroup, aG as IonAccordion, ap as IonItem, a_ as personOutline, bL as IonCard, bc as IonCardContent, aA as IonGrid, ag as IonRow, az as IonCol, bK as IonProgressBar, K as Fragment, S as renderList, bu as IonPage, r as reactive } from './vendor-D3hawxEQ.js';
import { P as PatientService, u as useDemographicsStore, ai as ProgramService, Q as useGlobalPropertyStore, t as toastWarning, Y as IdentifierService, G as toastSuccess, _ as _export_sfc, cc as ManageGuardian, K as ObservationService, H as HisDate, cd as RelationshipService } from '../index-DeiarqPy.js';

class ArvNumberService extends PatientService {
  suggestedNextARVNumber;
  patientHasARVNumber = false;
  prependValue = "";
  async _getArvNumber_() {
    try {
      const demographicsStore = useDemographicsStore();
      const patientID = demographicsStore.$state?.patient.patientID;
      if (!patientID) {
        return "";
      }
      const patientData = await PatientService.findByID(patientID);
      if (!patientData?.patient_identifiers) {
        return "";
      }
      const arvIdentifier = patientData.patient_identifiers.find(
        (indnt) => indnt.identifier_type == 4
      );
      return arvIdentifier?.identifier || "";
    } catch (error) {
      return "";
    }
  }
  /**
   * returns next available arv number for a particular site(facility)
   */
  async getARVnumber() {
    try {
      const arvNumber = await this._getArvNumber_();
      if (arvNumber !== "Unknown") {
        const a = arvNumber.split("-");
        this.suggestedNextARVNumber = a[2].replace(/^\D+|\s/g, "");
        this.prependValue = `${a[0]}-${a[1]}-`;
        this.patientHasARVNumber = true;
      } else {
        const suggestedNumber = await ProgramService.getNextSuggestedARVNumber();
        this.suggestedNextARVNumber = suggestedNumber.arv_number.replace(/^\D+|\s/g, "");
      }
    } catch (error) {
      const suggestedNumber = await ProgramService.getNextSuggestedARVNumber();
      this.suggestedNextARVNumber = suggestedNumber.arv_number.replace(/^\D+|\s/g, "");
    }
    return this.suggestedNextARVNumber;
  }
  async saveARVNumber(arv_number) {
    const globalPropertyStore = useGlobalPropertyStore();
    const sitePrefix = globalPropertyStore.$state.globalPropertyStore.sitePrefix;
    const newArvNumber = `${sitePrefix}-ARV-${arv_number}`;
    if (newArvNumber === await this._getArvNumber_()) {
      toastWarning("ARV number is the same as the current one", 5e3);
      return;
    }
    const exists = await IdentifierService.arvNumberExists(newArvNumber);
    if (exists) {
      toastWarning("ARV number already exists", 5e3);
    } else {
      try {
        if (this.patientHasARVNumber) {
          await this.updateARVNumber(newArvNumber);
          toastSuccess("ARV number updated successfully");
        } else {
          await this.createArvNumber(newArvNumber);
          toastSuccess("ARV number created successfully");
        }
      } catch (e) {
        toastWarning(`${e}`);
      }
    }
  }
}

const _hoisted_1$1 = { class: "form-container" };
const _hoisted_2$1 = { class: "arv-input-section" };
const _hoisted_3$1 = { class: "arv-input-container" };
const _hoisted_4$1 = { class: "input-group-text" };
const _hoisted_5$1 = { class: "action-buttons" };
const _hoisted_6$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArvNumberModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["close", "arvNumberSaved"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const globalPropertyStore = useGlobalPropertyStore();
    const demographicsStore = useDemographicsStore();
    const arvNumber = ref("");
    const validationError = ref("");
    const successMessage = ref("");
    const isLoading = ref(false);
    const arvNumberService = new ArvNumberService();
    const sitePrefix = computed(() => {
      return globalPropertyStore.globalPropertyStore.sitePrefix || "SITE";
    });
    const fullArvNumber = computed(() => {
      return `${sitePrefix.value}-ARV-${arvNumber.value}`;
    });
    const closeModal = () => {
      resetForm();
      emit("close");
    };
    const resetForm = () => {
      arvNumber.value = "";
      validationError.value = "";
      successMessage.value = "";
      isLoading.value = false;
    };
    const handleArvNumberInput = (event) => {
      const value = event.target.value;
      const numericValue = value.replace(/[^0-9]/g, "");
      arvNumber.value = numericValue;
      validationError.value = "";
      successMessage.value = "";
      validateArvNumber();
    };
    const validateArvNumber = () => {
      if (!arvNumber.value) {
        validationError.value = "ARV number is required";
        return false;
      }
      if (!/^\d+$/.test(arvNumber.value)) {
        validationError.value = "Only numbers are allowed";
        return false;
      }
      if (parseInt(arvNumber.value) <= 0) {
        validationError.value = "Number must be positive";
        return false;
      }
      validationError.value = "";
      return true;
    };
    const saveArvNumber = async () => {
      if (!validateArvNumber()) return;
      isLoading.value = true;
      validationError.value = "";
      try {
        const currentArv = await arvNumberService._getArvNumber_();
        const newFullArvNumber = fullArvNumber.value;
        if (currentArv !== newFullArvNumber) {
          const exists = await IdentifierService.arvNumberExists(newFullArvNumber);
          if (exists) {
            validationError.value = "ARV number already exists";
            isLoading.value = false;
            return;
          }
        }
        await arvNumberService.saveARVNumber(arvNumber.value);
        try {
          const patientData = await PatientService.findByID(demographicsStore.$state?.patient.patientID);
          if (patientData) {
            await demographicsStore.setRecord(patientData);
          }
        } catch (storeError) {
          console.warn("Could not update demographics store:", storeError);
        }
        successMessage.value = "ARV number saved successfully";
        toastSuccess("ARV number updated successfully");
        emit("arvNumberSaved", newFullArvNumber);
        setTimeout(() => {
          closeModal();
        }, 1e3);
      } catch (error) {
        console.error("Error saving ARV number:", error);
        validationError.value = "Error saving ARV number. Please try again.";
        toastWarning("Failed to save ARV number");
      } finally {
        isLoading.value = false;
      }
    };
    const loadCurrentArvNumber = async () => {
      try {
        const currentArv = await arvNumberService._getArvNumber_();
        if (currentArv && currentArv !== "Unknown" && currentArv !== "") {
          const parts = currentArv.split("-");
          if (parts.length >= 3) {
            arvNumber.value = parts[2];
            arvNumberService.patientHasARVNumber = true;
          }
        } else {
          const suggestedNumber = await arvNumberService.getARVnumber();
          arvNumber.value = suggestedNumber;
          arvNumberService.patientHasARVNumber = false;
        }
      } catch (error) {
        console.error("Error loading current ARV number:", error);
        try {
          const suggestedNumber = await arvNumberService.getARVnumber();
          arvNumber.value = suggestedNumber;
          arvNumberService.patientHasARVNumber = false;
        } catch (fallbackError) {
          console.error("Error getting suggested ARV number:", fallbackError);
        }
      }
    };
    watch(() => props.isOpen, (newValue) => {
      if (newValue) {
        loadCurrentArvNumber();
      }
    });
    onMounted(() => {
      globalPropertyStore.loadSitePrefix();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonModal), {
        "is-open": __props.isOpen,
        onDidDismiss: closeModal,
        class: "arv-number-modal"
      }, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonTitle), { class: "modal-title" }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("Update ARV Number", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(IonButtons), { slot: "end" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        onClick: closeModal,
                        class: "close-button"
                      }, {
                        default: withCtx(() => [..._cache[2] || (_cache[2] = [
                          createTextVNode("Close", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), { class: "ion-padding modal-content" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(unref(IonLabel), { class: "form-label" }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode("ARV Number ", -1),
                      createBaseVNode("span", { class: "required" }, "*", -1)
                    ])]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_3$1, [
                    createBaseVNode("div", {
                      class: normalizeClass(["input-group", { "input-group-error": validationError.value }])
                    }, [
                      createBaseVNode("span", _hoisted_4$1, toDisplayString(sitePrefix.value) + "-ARV- ", 1),
                      withDirectives(createBaseVNode("input", {
                        type: "text",
                        class: normalizeClass(["form-control", { "has-error": validationError.value }]),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => arvNumber.value = $event),
                        onInput: handleArvNumberInput,
                        placeholder: "Enter number",
                        inputmode: "numeric",
                        pattern: "[0-9]*"
                      }, null, 34), [
                        [vModelText, arvNumber.value]
                      ])
                    ], 2)
                  ]),
                  validationError.value ? (openBlock(), createBlock(unref(IonNote), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(validationError.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  successMessage.value ? (openBlock(), createBlock(unref(IonNote), {
                    key: 1,
                    class: "success-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(successMessage.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_5$1, [
                  createVNode(unref(IonButton), {
                    color: "danger",
                    fill: "outline",
                    onClick: closeModal,
                    class: "cancel-button"
                  }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createTextVNode(" Cancel ", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(IonButton), {
                    onClick: saveArvNumber,
                    disabled: !arvNumber.value || !!validationError.value || isLoading.value,
                    class: "save-button"
                  }, {
                    default: withCtx(() => [
                      isLoading.value ? (openBlock(), createBlock(unref(IonSpinner), {
                        key: 0,
                        name: "crescent"
                      })) : (openBlock(), createElementBlock("span", _hoisted_6$1, "Save"))
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
      }, 8, ["is-open"]);
    };
  }
});

const ArvNumberModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9e415ee0"]]);

const _hoisted_1 = { style: { "font-weight": "bold" } };
const _hoisted_2 = { slot: "content" };
const _hoisted_3 = { class: "field" };
const _hoisted_4 = { class: "option-value" };
const _hoisted_5 = { class: "field" };
const _hoisted_6 = { class: "option-value" };
const _hoisted_7 = { class: "option-value" };
const _hoisted_8 = { class: "field" };
const _hoisted_9 = { class: "field" };
const _hoisted_10 = { class: "option-value" };
const _hoisted_11 = { class: "option-value" };
const _hoisted_12 = { class: "option-value" };
const _hoisted_13 = { class: "field" };
const _hoisted_14 = { class: "option-value" };
const _hoisted_15 = { class: "option-value" };
const _hoisted_16 = { class: "option-value" };
const _hoisted_17 = { class: "option-value" };
const _hoisted_18 = { class: "field" };
const _hoisted_19 = { class: "option-value" };
const _hoisted_20 = { class: "option-value" };
const _hoisted_21 = { class: "option-value" };
const _hoisted_22 = { class: "field" };
const _hoisted_23 = { class: "option-value" };
const _hoisted_24 = { class: "option-value" };
const _hoisted_25 = { class: "option-value" };
const _hoisted_26 = { class: "option-value" };
const _hoisted_27 = { class: "field" };
const _hoisted_28 = { class: "option-value" };
const _hoisted_29 = { class: "option-value" };
const _hoisted_30 = { class: "option-value" };
const _hoisted_31 = { class: "table-card card" };
const _hoisted_32 = { key: 0 };
const _hoisted_33 = ["innerHTML"];
const _hoisted_34 = { key: 1 };
const _hoisted_35 = { class: "modal-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Mastercard",
  setup(__props) {
    const tbStats = ref([]);
    const cardContent = ref([]);
    const patient = new PatientService();
    const patientVisitRows = ref([]);
    const isModalVisible = ref(false);
    const modalDetails = ref([]);
    const showGuardianModal = ref(false);
    const showArvNumberModal = ref(false);
    const isTableInit = ref(false);
    const isTableLoading = ref(false);
    const patientInfo = reactive({
      name: "Unknown person",
      arvNumber: "...",
      nationalPatientId: "...",
      age: "Unknown Age",
      sex: "Unknown gender",
      location: "...",
      landmark: "...",
      guardian: "...",
      initWKg: "...",
      initHCm: "...",
      initBmi: "...",
      initPreg: "...",
      initBreastfeeding: "...",
      curPreg: "...",
      curBreastfeeding: "...",
      ti: "...",
      agreesToFollowUp: "...",
      reasonForStartingArt: "...",
      hivTestDate: "...",
      hivTestPlace: "...",
      dateOfStartingFirstLineArt: "...",
      pulmonaryTbWithinLast2Years: "...",
      extraPulmonaryTb: "...",
      pulmonaryTbCurrent: "...",
      kaposisSarcoma: "..."
    });
    const patientInfoLoader = {
      name: {
        init: async () => {
          patient.reloadPatient();
        },
        val: () => `${patient.getGivenName()} ${patient.getFamilyName()}`
      },
      arvNumber: {
        val: async () => {
          const data = await PatientService.findByID(patient.getID());
          return (data?.patient_identifiers ?? []).find((i) => i.type.name === "ARV Number")?.identifier ?? "Add";
        },
        click: () => {
          showArvNumberModal.value = true;
        }
      },
      nationalPatientId: {
        val: () => patient.getNationalID()
      },
      age: {
        val: () => `${patient.getAge()} years`
      },
      sex: {
        val: () => patient.getGender() === "M" ? "Male" : patient.getGender() === "F" ? "Female" : "Unknown"
      },
      location: {
        val: () => patient.getCurrentVillage()
      },
      landmark: {
        val: () => "N/A"
        //patient.getAttribute(19)
      },
      guardian: {
        val: async () => {
          const relations = await RelationshipService.getGuardianDetails(patient.getID());
          return relations.map((r) => ` ${r.name} (${r.relationshipType})`).join(" ") || "Add Guardian";
        },
        click: () => {
          showGuardianModal.value = true;
        }
      },
      initWKg: {
        val: () => patient.getInitialWeight()
      },
      initHCm: {
        val: () => patient.getInitialHeight()
      },
      initBmi: {
        val: () => patient.getInitialBMI()
      },
      initPreg: {
        val: () => patient.getInitialObs("Is patient pregnant", "value_coded")
      },
      initBreastfeeding: {
        val: async () => await patient.isBreastfeeding() ? "Yes" : "No"
      },
      curPreg: {
        val: async () => await patient.isPregnant() ? "Yes" : "No"
      },
      curBreastfeeding: {
        val: async () => await patient.isBreastfeeding() ? "Yes" : "No"
      },
      ti: {
        val: () => ObservationService.getFirstValueCoded(
          patient.getID(),
          "Ever received ART"
        )
      },
      agreesToFollowUp: {
        val: () => ObservationService.getFirstValueCoded(
          patient.getID(),
          "Agrees to followup"
        )
      },
      reasonForStartingArt: {
        val: () => ObservationService.getFirstValueCoded(
          patient.getID(),
          "Reason for ART eligibility"
        )
      },
      hivTestDate: {
        val: async () => {
          const date = await ObservationService.getFirstValueDatetime(
            patient.getID(),
            "Confirmatory HIV test date"
          );
          return date ? HisDate.toStandardHisDisplayFormat(date) : "";
        }
      },
      hivTestPlace: {
        val: () => ObservationService.getFirstValueText(
          patient.getID(),
          "Confirmatory HIV test location"
        )
      },
      dateOfStartingFirstLineArt: {
        val: async () => {
          const date = await ObservationService.getFirstValueDatetime(
            patient.getID(),
            "Date ART started"
          );
          return date ? HisDate.toStandardHisDisplayFormat(date) : "";
        }
      },
      pulmonaryTbWithinLast2Years: {
        init: async () => {
          tbStats.value = await ObservationService.getAllValueCoded(
            patient.getID(),
            "Who stages criteria present"
          ) || [];
        },
        val: () => hasTbStat("Tuberculosis (PTB or EPTB) within the last 2 years")
      },
      extraPulmonaryTb: {
        val: () => hasTbStat("Extrapulmonary tuberculosis (EPTB)")
      },
      pulmonaryTbCurrent: {
        val: () => hasTbStat("Pulmonary tuberculosis (current)")
      },
      kaposisSarcoma: {
        val: () => hasTbStat("Kaposis sarcoma")
      }
    };
    function hasTbStat(conceptName) {
      return tbStats.value.includes(conceptName) ? "Yes" : "No";
    }
    async function loadCardData() {
      for (const key in patientInfoLoader) {
        const item = patientInfoLoader[key];
        try {
          if (typeof item.init === "function") {
            await item.init();
          }
          patientInfo[key] = await item.val() || "-";
        } catch (e) {
          patientInfo[key] = "Error";
          console.error("Error initializing card item", item, e);
        }
      }
    }
    function loadVisitDates() {
      isTableInit.value = false;
      isTableLoading.value = true;
      return PatientService.getPatientVisits(patient.getID(), true).then((dates) => {
        patientVisitRows.value = dates.map((date) => {
          return [
            { val: HisDate.toStandardHisDisplayFormat(date), actualDate: date },
            { val: "..." },
            { val: "..." },
            { val: "..." },
            { val: "..." },
            { val: "..." },
            { val: "..." },
            {
              btn: {
                label: "More"
              }
            }
          ];
        });
      }).finally(() => {
        isTableInit.value = true;
        isTableLoading.value = false;
      });
    }
    function setModalDetails(data) {
      const fmtTurple = (turple) => turple.map(([t, v]) => `${t} (${v})`).join("/");
      modalDetails.value = [
        {
          label: "Outcome",
          value: data.outcome
        },
        {
          label: "Outcome Date",
          value: data.outcome_date
        },
        {
          label: "Side effects",
          value: data.side_effects
        },
        {
          label: "Viral load",
          value: data.viral_load
        },
        {
          label: "Pills Brought",
          value: fmtTurple(data.pills_brought)
        },
        {
          label: "Pills dispensed",
          value: fmtTurple(data.pills_dispensed)
        },
        {
          label: "Visit by",
          value: data.visit_by
        },
        {
          label: "Regimen",
          value: data.regimen
        },
        {
          label: "Adherence",
          value: fmtTurple(data.adherence)
        },
        {
          label: "TB Status",
          value: data.tb_status
        },
        {
          label: "Height (cm)",
          value: data.height
        },
        {
          label: "Weight (Kg)",
          value: data.weight
        },
        {
          label: "BMI",
          value: data.bmi
        },
        {
          label: "Is pregnant",
          value: data.isPregnant,
          visible: patient.isFemale()
        },
        {
          label: "Is breastfeeding",
          value: data.isBreastfeeding,
          visible: patient.isFemale()
        }
      ];
    }
    async function writeDataToVisitDates() {
      isTableLoading.value = true;
      for (let i = 0; i < patientVisitRows.value.length; ++i) {
        const r = patientVisitRows.value[i];
        const date = r[0].actualDate;
        const patientId = patient.getID();
        const data = await ProgramService.getCurrentProgramInformation(patientId, date);
        const drugs = await ProgramService.getMastercardDrugInformation(patientId, date);
        const pillsDispensed = (drugs?.pills_given || []).map((d) => {
          return `${d["short_name"] || d["name"]} <b>(${d.quantity || "?"})</b>`;
        }).join("<br/>");
        if (patient.isFemale()) {
          const pregObs = await ObservationService.getFirstObs(patientId, "Is patient pregnant", date);
          if (pregObs && HisDate.toStandardHisDisplayFormat(pregObs.obs_datetime) === date) {
            pregObs.value_coded;
          }
          const bfeed = await ObservationService.getFirstObs(patientId, "Is patient breast feeding", date);
          if (bfeed && HisDate.toStandardHisDisplayFormat(bfeed.obs_datetime) === date) {
            bfeed.value_coded;
          }
        }
        r[1].val = data.weight;
        r[2].val = data.regimen;
        r[3].val = data.viral_load;
        r[4].val = data.tb_status;
        r[5].val = data.outcome.match(/Unk/i) ? "Unknown" : data.outcome;
        r[6].val = pillsDispensed;
        r[7].btn = {
          label: "More",
          onClick: () => openModal(data)
        };
      }
      isTableLoading.value = true;
    }
    function openModal(row) {
      setModalDetails(row);
      isModalVisible.value = true;
    }
    function closeModal() {
      isModalVisible.value = false;
    }
    function onGuardianSelected(guardian) {
      showGuardianModal.value = false;
      loadCardData();
    }
    function onGuardianSaved(guardian) {
      showGuardianModal.value = false;
      loadCardData();
    }
    async function onArvNumberSaved(arvNumber) {
      showArvNumberModal.value = false;
      (cardContent.value ?? []).find((c) => c.label === "ARV Number").value = arvNumber;
    }
    onMounted(() => {
      loadCardData();
      loadVisitDates().then(() => writeDataToVisitDates()).finally(() => isTableLoading.value = false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonButtons), { slot: "start" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back())
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), { icon: unref(arrowBack) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonTitle), { class: "ion-text-center" }, {
                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createTextVNode("Patient Mastercard", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonAccordionGroup), { value: "info" }, {
                default: withCtx(() => [
                  createVNode(unref(IonAccordion), {
                    class: "ion-padding",
                    value: "info"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        color: "light",
                        slot: "header"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), { icon: unref(personOutline) }, null, 8, ["icon"]),
                          createVNode(unref(IonLabel), { style: { "font-weight": "bold", "margin-left": "10px" } }, {
                            default: withCtx(() => [
                              createBaseVNode("h2", null, [
                                createTextVNode(toDisplayString(patientInfo.name) + " ", 1),
                                createBaseVNode("small", _hoisted_1, "(" + toDisplayString(patientInfo.sex) + ", " + toDisplayString(patientInfo.age) + ")", 1)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(unref(IonCard), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonCardContent), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonGrid), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonRow), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_3, [
                                              createBaseVNode("div", null, [
                                                _cache[6] || (_cache[6] = createTextVNode("ARV: ", -1)),
                                                createBaseVNode("a", {
                                                  href: "!#",
                                                  onClick: _cache[1] || (_cache[1] = (e) => {
                                                    e.preventDefault();
                                                    patientInfoLoader.arvNumber.click();
                                                  }),
                                                  fill: "outline"
                                                }, [
                                                  createBaseVNode("b", null, toDisplayString(patientInfo.arvNumber), 1)
                                                ])
                                              ]),
                                              createBaseVNode("div", null, [
                                                _cache[7] || (_cache[7] = createTextVNode("National ID: ", -1)),
                                                createBaseVNode("b", _hoisted_4, toDisplayString(patientInfo.nationalPatientId), 1)
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_5, [
                                              createBaseVNode("div", null, [
                                                createBaseVNode("div", null, [
                                                  _cache[8] || (_cache[8] = createTextVNode("Location: ", -1)),
                                                  createBaseVNode("b", _hoisted_6, toDisplayString(patientInfo.location), 1)
                                                ]),
                                                createBaseVNode("div", null, [
                                                  _cache[9] || (_cache[9] = createTextVNode(" Landmark: ", -1)),
                                                  createBaseVNode("b", _hoisted_7, toDisplayString(patientInfo.landmark), 1)
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_8, [
                                              _cache[10] || (_cache[10] = createBaseVNode("h2", null, "Guardian", -1)),
                                              createBaseVNode("div", null, [
                                                createBaseVNode("a", {
                                                  href: "!#",
                                                  onClick: _cache[2] || (_cache[2] = (e) => {
                                                    e.preventDefault();
                                                    patientInfoLoader.guardian.click();
                                                  }),
                                                  fill: "clear"
                                                }, [
                                                  createBaseVNode("b", null, toDisplayString(patientInfo.guardian), 1)
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonRow), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_9, [
                                              createBaseVNode("div", null, [
                                                _cache[14] || (_cache[14] = createBaseVNode("h2", { class: "header" }, "Vitals", -1)),
                                                createBaseVNode("div", null, [
                                                  _cache[11] || (_cache[11] = createTextVNode("Init HT (CM): ", -1)),
                                                  createBaseVNode("b", _hoisted_10, toDisplayString(patientInfo.initHCm), 1)
                                                ]),
                                                createBaseVNode("div", null, [
                                                  _cache[12] || (_cache[12] = createTextVNode("Init WT (KG): ", -1)),
                                                  createBaseVNode("b", _hoisted_11, toDisplayString(patientInfo.initWkg), 1)
                                                ]),
                                                createBaseVNode("div", null, [
                                                  _cache[13] || (_cache[13] = createTextVNode("Init BMI: ", -1)),
                                                  createBaseVNode("b", _hoisted_12, toDisplayString(patientInfo.initBmi), 1)
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        unref(patient).isFemale() ? (openBlock(), createBlock(unref(IonCol), { key: 0 }, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_13, [
                                              _cache[19] || (_cache[19] = createBaseVNode("h2", { class: "header" }, "Pregnancy", -1)),
                                              createVNode(unref(IonGrid), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[15] || (_cache[15] = createBaseVNode("span", { class: "option-label" }, "Init Preg: ", -1)),
                                                            createBaseVNode("b", _hoisted_14, toDisplayString(patientInfo.initPreg), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[16] || (_cache[16] = createBaseVNode("span", { class: "option-label" }, "Cur Preg: ", -1)),
                                                            createBaseVNode("b", _hoisted_15, toDisplayString(patientInfo.curPreg), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          _cache[17] || (_cache[17] = createBaseVNode("span", { class: "option-label" }, "Cur breastfeeding: ", -1)),
                                                          createBaseVNode("b", _hoisted_16, toDisplayString(patientInfo.curBreastfeeding), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          _cache[18] || (_cache[18] = createBaseVNode("span", { class: "option-label" }, "Init Breastfeeding: ", -1)),
                                                          createBaseVNode("b", _hoisted_17, toDisplayString(patientInfo.initBreastfeeding), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_18, [
                                              _cache[23] || (_cache[23] = createBaseVNode("h2", { class: "header" }, "TB", -1)),
                                              createVNode(unref(IonGrid), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[20] || (_cache[20] = createBaseVNode("span", { class: "option-label" }, "Pulmonary TB within the last 2 years: ", -1)),
                                                            createBaseVNode("b", _hoisted_19, toDisplayString(patientInfo.pulmonaryTbWithinLast2Years), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[21] || (_cache[21] = createBaseVNode("span", { class: "option-label" }, "Extra pulmonart TB (EPTB):", -1)),
                                                            createBaseVNode("b", _hoisted_20, toDisplayString(patientInfo.extraPulmonaryTb), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          _cache[22] || (_cache[22] = createBaseVNode("span", { class: "option-label" }, " Pulmonary TB (current): ", -1)),
                                                          createBaseVNode("b", _hoisted_21, toDisplayString(patientInfo.pulmonaryTbCurrent), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(IonRow), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_22, [
                                              _cache[28] || (_cache[28] = createBaseVNode("h2", { class: "header" }, "ART", -1)),
                                              createVNode(unref(IonGrid), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[24] || (_cache[24] = createBaseVNode("span", { class: "option-label" }, "HIV test date: ", -1)),
                                                            createBaseVNode("b", _hoisted_23, toDisplayString(patientInfo.hivTestDate), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[25] || (_cache[25] = createBaseVNode("span", { class: "option-label" }, "HIV test place:", -1)),
                                                            createBaseVNode("b", _hoisted_24, toDisplayString(patientInfo.hivTestPlace), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          _cache[26] || (_cache[26] = createBaseVNode("span", { class: "option-label" }, " Date of starting first line ART: ", -1)),
                                                          createBaseVNode("b", _hoisted_25, toDisplayString(patientInfo.dateOfStartingFirstLineArt), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          _cache[27] || (_cache[27] = createBaseVNode("span", { class: "option-label" }, " Reason for starting ART: ", -1)),
                                                          createBaseVNode("b", _hoisted_26, toDisplayString(patientInfo.reasonForStartingArt), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(IonCol), null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", _hoisted_27, [
                                              _cache[32] || (_cache[32] = createBaseVNode("h2", { class: "header" }, "Other", -1)),
                                              createVNode(unref(IonGrid), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[29] || (_cache[29] = createBaseVNode("span", { class: "option-label" }, "TI: ", -1)),
                                                            createBaseVNode("span", _hoisted_28, toDisplayString(patientInfo.ti), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          createBaseVNode("div", null, [
                                                            _cache[30] || (_cache[30] = createBaseVNode("span", { class: "option-label" }, "Agrees to follow up: ", -1)),
                                                            createBaseVNode("b", _hoisted_29, toDisplayString(patientInfo.agreesToFollowUp), 1)
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(IonRow), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(IonCol), null, {
                                                        default: withCtx(() => [
                                                          _cache[31] || (_cache[31] = createBaseVNode("span", { class: "option-label" }, " Kaposis sarcoma: ", -1)),
                                                          createBaseVNode("b", _hoisted_30, toDisplayString(patientInfo.kaposisSarcoma), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              isTableLoading.value ? (openBlock(), createBlock(unref(IonProgressBar), {
                key: 0,
                type: "indeterminate"
              })) : createCommentVNode("", true),
              createBaseVNode("table", _hoisted_31, [
                _cache[34] || (_cache[34] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", null, "Visit Date"),
                    createBaseVNode("th", null, "Weight (kg)"),
                    createBaseVNode("th", null, "Reg"),
                    createBaseVNode("th", null, "Viral Load"),
                    createBaseVNode("th", null, "TB Status"),
                    createBaseVNode("th", null, "Outcome"),
                    createBaseVNode("th", null, "Pills Dispensed"),
                    createBaseVNode("th", null, "Actions")
                  ])
                ], -1)),
                isTableInit.value ? (openBlock(), createElementBlock("tbody", _hoisted_32, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(patientVisitRows.value, (opt, index) => {
                    return openBlock(), createElementBlock("tr", { key: index }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(opt, (td, tdIndex) => {
                        return openBlock(), createElementBlock("td", { key: tdIndex }, [
                          td.val ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            innerHTML: td.val
                          }, null, 8, _hoisted_33)) : td.btn && typeof td?.btn.onClick === "function" ? (openBlock(), createBlock(unref(IonButton), {
                            key: 1,
                            onClick: td.btn.onClick
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(td.btn.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("tbody", _hoisted_34, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(6, (row) => {
                    return createBaseVNode("tr", { key: row }, [..._cache[33] || (_cache[33] = [
                      createBaseVNode("td", null, "...", -1),
                      createBaseVNode("td", null, "...", -1),
                      createBaseVNode("td", null, "...", -1),
                      createBaseVNode("td", null, "...", -1),
                      createBaseVNode("td", null, "...", -1),
                      createBaseVNode("td", null, "...", -1),
                      createBaseVNode("td", null, "...", -1),
                      createBaseVNode("td", null, "...", -1)
                    ])]);
                  }), 64))
                ]))
              ]),
              createVNode(unref(IonModal), {
                "is-open": isModalVisible.value,
                onIonModalDidDismiss: closeModal
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_35, [
                    _cache[36] || (_cache[36] = createBaseVNode("h3", null, "Details", -1)),
                    createBaseVNode("ul", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(modalDetails.value, (detail) => {
                        return openBlock(), createElementBlock("li", {
                          key: detail.label
                        }, [
                          createBaseVNode("strong", null, toDisplayString(detail.label) + ":", 1),
                          createTextVNode(" " + toDisplayString(detail.value), 1)
                        ]);
                      }), 128))
                    ]),
                    createVNode(unref(IonButton), {
                      expand: "block",
                      onClick: closeModal
                    }, {
                      default: withCtx(() => [..._cache[35] || (_cache[35] = [
                        createTextVNode("Close", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["is-open"]),
              createVNode(ManageGuardian, {
                isOpen: showGuardianModal.value,
                onClose: _cache[3] || (_cache[3] = ($event) => showGuardianModal.value = false),
                onGuardianSelected,
                onWhenSaved: onGuardianSaved
              }, null, 8, ["isOpen"]),
              createVNode(ArvNumberModal, {
                isOpen: showArvNumberModal.value,
                onClose: _cache[4] || (_cache[4] = ($event) => showArvNumberModal.value = false),
                onArvNumberSaved
              }, null, 8, ["isOpen"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Mastercard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-596a6369"]]);

export { Mastercard as default };
