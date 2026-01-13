import { q as defineComponent, O as createBlock, y as openBlock, r as ref, x as createElementBlock, z as createVNode, A as withCtx, E as unref, aA as IonToolbar, aB as IonTitle, B as createBaseVNode, ba as IonButtons, N as IonButton, L as IonIcon, F as closeCircleOutline, I as IonHeader, af as IonRow, ay as IonCol, H as IonContent, bb as IonFooter, J as Fragment, K as modalController, aH as useRouter, d as computed, a2 as onMounted, w as watch, cH as idCardOutline, am as IonList, G as createCommentVNode, an as IonItem, a7 as IonLabel, C as toDisplayString, Q as alertCircleOutline, a6 as IonInput, bv as IonText, aY as locationOutline, bF as saveOutline, a5 as createTextVNode, R as renderList, P as normalizeStyle, dz as domtoimage, X as Capacitor } from './vendor-BPW-J91F.js';
import { u as useDemographicsStore, P as PatientService, ai as ProgramService, J as savePatientRecord, _ as _export_sfc, S as Service, Z as printLabel, o as createModal, aM as PrintoutService, b4 as printArtVisitLbl } from '../index-C6u5KmBv.js';
import { R as Registration } from './Registration-DSALFDkv.js';
import { O as Outcome } from './Outcome-DFVv-Zki.js';
import { s as storeToRefs } from './pinia-D-q2_lrU.js';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "personalInformationModal",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Registration, { editMode: true });
    };
  }
});

const _hoisted_1$2 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_2$2 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_3$2 = { class: "" };
const _hoisted_4$2 = { class: "center text_12" };
const __default__$1 = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    is_open: {},
    user_id: {}
  },
  emits: ["closePopover", "save"],
  setup(__props, { emit: __emit }) {
    ref("");
    const emit = __emit;
    function closeModal() {
      emit("closePopover", false);
      modalController.dismiss();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), null, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createBaseVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                      createBaseVNode("b", { style: { "margin-left": "6px" } }, "Patient Outcome")
                    ], -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: _cache[0] || (_cache[0] = ($event) => closeModal()),
                          fill: "solid"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_1$2, [
                              createBaseVNode("div", _hoisted_2$2, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(closeCircleOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[2] || (_cache[2] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Close", -1))
                              ])
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
        }),
        createVNode(unref(IonContent), { class: "ion-padding" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("div", _hoisted_4$2, [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(Outcome)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar))
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const _hoisted_1$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2$1 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_3$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_4$1 = { style: { "font-weight": "600", "font-size": "17px" } };
const _hoisted_5$1 = { style: { "margin-top": "15px", "width": "100%" } };
const _hoisted_6$1 = {
  key: 0,
  class: "error-message"
};
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = {
  slot: "start",
  class: "prefix-container"
};
const _hoisted_9$1 = ["value"];
const _hoisted_10$1 = {
  key: 0,
  class: "error-message"
};
const _hoisted_11$1 = { style: { "font-size": "16px", "font-weight": "600px", "color": "red" } };
const _hoisted_12$1 = { key: 1 };
const _hoisted_13$1 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_14$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_15$1 = { style: { "font-weight": "400", "font-size": "20px" } };
const _hoisted_16$1 = { style: { "display": "flex", "align-items": "center" } };
const __default__ = defineComponent({
  name: "UpdateNCDNumberModal"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  emits: ["closePopover", "save"],
  setup(__props, { emit: __emit }) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const newNcdNumber = ref("");
    const ncdPrefix = ref("");
    const validationError = ref("");
    const showErrorMessage = ref(false);
    const patientService = new PatientService();
    let errorMessageTimeout = null;
    const validateNumericInput = (event) => {
      const numericValue = event.target.value.replace(/[^0-9]/g, "");
      if (numericValue !== event.target.value) {
        showErrorMessage.value = true;
        if (errorMessageTimeout) {
          clearTimeout(errorMessageTimeout);
        }
        errorMessageTimeout = window.setTimeout(() => {
          showErrorMessage.value = false;
          errorMessageTimeout = null;
        }, 3e3);
        newNcdNumber.value = numericValue;
      }
    };
    const hideErrorMessage = () => {
      showErrorMessage.value = false;
      if (errorMessageTimeout) {
        clearTimeout(errorMessageTimeout);
        errorMessageTimeout = null;
      }
    };
    const isValid = computed(() => {
      return newNcdNumber.value && newNcdNumber.value.trim() !== "";
    });
    const getSuggestedNCDNumber = async () => {
      try {
        const response = await ProgramService.getNextSuggestedNCDNumber();
        const numericPart = response.ncd_number.replace(/^\D+|\s/g, "");
        const prefixPart = response.ncd_number.replace(/\d+/g, "") + "-NCD-";
        newNcdNumber.value = numericPart;
        ncdPrefix.value = prefixPart;
      } catch (error) {
        console.error("Error fetching suggested NCD number:", error);
        validationError.value = "Failed to fetch suggested NCD number (missing SITE Prefix)";
      }
    };
    onMounted(() => {
      getSuggestedNCDNumber();
    });
    watch(
      () => patient.value.ID,
      () => {
        getSuggestedNCDNumber();
      },
      { deep: true }
    );
    const emit = __emit;
    function closeModal() {
      emit("closePopover", false);
      modalController.dismiss();
    }
    function navigationMenu(url) {
      try {
        console.log(url);
        router.push(url);
      } catch (error) {
        console.error(error);
      }
    }
    async function saveAction() {
      try {
        validationError.value = "";
        if (!isValid.value) {
          validationError.value = "Please enter a valid NCD number";
          return;
        }
        const fullNcdNumber = `${ncdPrefix.value}${newNcdNumber.value}`;
        const patientData = await PatientService.findByID(patient.value.patientID);
        for (const indnt of patientData.patient_identifiers) {
          if (indnt.identifier_type === 31) {
            await patientService.updateNCDNumber(indnt.patient_identifier_id, fullNcdNumber);
            emit("save", { newNcdId: fullNcdNumber });
          }
        }
        await savePatientRecord(patient.value);
        closeModal();
      } catch (error) {
        console.error(error);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      createVNode(unref(IonIcon), {
                        icon: unref(idCardOutline),
                        class: "sub-menu-icon",
                        style: { "font-size": "1.6rem" }
                      }, null, 8, ["icon"]),
                      _cache[3] || (_cache[3] = createBaseVNode("b", { style: { "margin-left": "6px" } }, "Update NCD Number", -1))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: _cache[0] || (_cache[0] = ($event) => closeModal()),
                          fill: "solid"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_2$1, [
                              createBaseVNode("div", _hoisted_3$1, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(closeCircleOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[4] || (_cache[4] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Close", -1))
                              ])
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
        }),
        createVNode(unref(IonContent), { class: "ion-padding" }, {
          default: withCtx(() => [
            createVNode(unref(IonList), null, {
              default: withCtx(() => [
                createVNode(unref(IonItem), { class: "current-ncd-item" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [
                        _cache[5] || (_cache[5] = createBaseVNode("h2", null, "Current NCD Number", -1)),
                        createBaseVNode("p", _hoisted_4$1, toDisplayString(unref(patient).NcdID || "Not assigned"), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonItem), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5$1, [
                      showErrorMessage.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                        createVNode(unref(IonIcon), {
                          icon: unref(alertCircleOutline),
                          color: "danger"
                        }, null, 8, ["icon"]),
                        _cache[6] || (_cache[6] = createBaseVNode("span", { style: { "font-size": "16px", "font-weight": "600px", "color": "red" } }, "Only numbers are allowed", -1)),
                        createVNode(unref(IonButton), {
                          fill: "clear",
                          size: "small",
                          onClick: hideErrorMessage
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), { icon: unref(closeCircleOutline) }, null, 8, ["icon"])
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true),
                      !validationError.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                        _cache[7] || (_cache[7] = createBaseVNode("span", { style: { "font-weight": "600", "font-size": "17px", "color": "grey" } }, "New NCD Number", -1)),
                        createVNode(unref(IonInput), {
                          modelValue: newNcdNumber.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newNcdNumber.value = $event),
                          placeholder: "Enter number",
                          inputmode: "numeric",
                          pattern: "[0-9]*",
                          onInput: validateNumericInput,
                          class: "custom-input"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_8$1, [
                              createBaseVNode("input", {
                                value: ncdPrefix.value,
                                readonly: "",
                                class: "prefix-part",
                                type: "text"
                              }, null, 8, _hoisted_9$1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                validationError.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                  createVNode(unref(IonText), { color: "danger" }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_11$1, toDisplayString(validationError.value), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                validationError.value ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
                  createVNode(unref(IonButton), {
                    onClick: _cache[2] || (_cache[2] = ($event) => navigationMenu("setSitePrefix")),
                    fill: "solid",
                    style: { "margin": "14px" }
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_13$1, [
                        createBaseVNode("div", _hoisted_14$1, [
                          createVNode(unref(IonIcon), {
                            icon: unref(locationOutline),
                            slot: "start",
                            class: "sub-menu-icon"
                          }, null, 8, ["icon"]),
                          _cache[8] || (_cache[8] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "set Site Prefix", -1))
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: saveAction,
                          fill: "solid",
                          disabled: !isValid.value
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_15$1, [
                              createBaseVNode("div", _hoisted_16$1, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(saveOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[9] || (_cache[9] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Save", -1))
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
      ], 64);
    };
  }
});

const UpdateNCDNumberModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-696e3b8f"]]);

const _hoisted_1 = {
  key: 0,
  style: { "display": "flex", "justify-content": "space-between", "width": "100%" }
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 1,
  style: { "font-weight": "bold", "padding": "1.7px" }
};
const _hoisted_4 = {
  key: 1,
  style: { "display": "flex", "flex-wrap": "wrap", "gap": "20px", "width": "100%" }
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 2 };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = { style: { "display": "flex", "flex-wrap": "wrap", "gap": "8px", "width": "100%" } };
const _hoisted_10 = {
  key: 3,
  style: { "display": "flex", "flex-wrap": "wrap", "gap": "20px", "width": "100%" }
};
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = { key: 2 };
const _hoisted_14 = { key: 3 };
const _hoisted_15 = {
  key: 4,
  style: { "width": "100%", "text-align": "center", "border-collapse": "collapse", "border": "1px solid black" }
};
const _hoisted_16 = { key: 0 };
const _hoisted_17 = { style: { "border": "1px solid black" } };
const _hoisted_18 = { style: { "border": "1px solid black" } };
const _hoisted_19 = { style: { "border": "1px solid black" } };
const _hoisted_20 = { style: { "border": "1px solid black" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NCDVisitLbl",
  props: {
    imageOut: {
      type: Object
    },
    patient: {
      type: Object
    }
  },
  emits: ["label-out"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const lblComponent = ref(null);
    const currentPage = ref(0);
    const stickerWidth = ref("");
    const medicationNumber = ref(4);
    const props = __props;
    const validMedications = computed(() => {
      if (!props.patient?.medications) return [];
      return props.patient.medications.filter((med) => med && (med.name || med.dose || med.frequency || med.quantity));
    });
    const hasVitals = computed(() => {
      const vitals = props.patient?.vitals;
      return vitals && (vitals.height || vitals.weight || vitals.bloodPressure || props.patient?.bloodGlucose);
    });
    const currentMedications = computed(() => {
      const meds = validMedications.value;
      if (meds.length === 0) return [];
      if (currentPage.value === 0) {
        return meds.slice(0, 2);
      } else {
        const startIndex = 2 + (currentPage.value - 1) * medicationNumber.value;
        return meds.slice(startIndex, startIndex + medicationNumber.value);
      }
    });
    const totalPages = computed(() => {
      const totalMeds = validMedications.value.length;
      if (totalMeds <= 2) return 1;
      const remainingAfterFirst = totalMeds - 2;
      return 1 + Math.ceil(remainingAfterFirst / medicationNumber.value);
    });
    const generateImages = async () => {
      const images = [];
      for (let page = 0; page < totalPages.value; page++) {
        currentPage.value = page;
        await new Promise((resolve) => setTimeout(resolve, 100));
        try {
          let dataUrl;
          if (Service.getIsIpPrintersStatus()) {
            dataUrl = await domtoimage.toCanvas(lblComponent.value, {
              height: 300,
              width: 800
            });
          } else {
            dataUrl = await domtoimage.toPng(lblComponent.value, {
              height: 300,
              width: 594
            });
          }
          images.push(dataUrl);
        } catch (error) {
          console.error("Error generating image for page", page, error);
        }
      }
      return images;
    };
    onMounted(async () => {
      try {
        const isIpPrinter = Service.getIsIpPrintersStatus();
        medicationNumber.value = isIpPrinter ? 7 : 4;
        stickerWidth.value = isIpPrinter ? "800px" : "594px";
        const images = await generateImages();
        emit("label-out", images);
        if (typeof props.imageOut === "function") {
          props.imageOut(images);
        }
      } catch (error) {
        console.error("Error generating patient labels:", error);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "lblComponent",
        ref: lblComponent,
        id: "container",
        style: normalizeStyle("padding: 15px; width:" + stickerWidth.value)
      }, [
        currentPage.value === 0 && (__props.patient?.latestVisitDate || __props.patient?.patientID) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          __props.patient?.latestVisitDate ? (openBlock(), createElementBlock("span", _hoisted_2, [
            _cache[0] || (_cache[0] = createBaseVNode("b", null, "Visit:", -1)),
            createTextVNode(" " + toDisplayString(__props.patient.latestVisitDate), 1)
          ])) : createCommentVNode("", true),
          __props.patient?.patientID ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(__props.patient.patientID), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        currentPage.value === 0 && (__props.patient?.patientName || __props.patient?.gender || __props.patient?.diagnoses && __props.patient.diagnoses.length > 0) ? (openBlock(), createElementBlock("div", _hoisted_4, [
          __props.patient?.patientName || __props.patient?.gender ? (openBlock(), createElementBlock("span", _hoisted_5, [
            createBaseVNode("b", null, toDisplayString(__props.patient?.patientName) + toDisplayString(__props.patient?.gender ? `(${__props.patient.gender})` : ""), 1)
          ])) : createCommentVNode("", true),
          __props.patient?.prescriber ? (openBlock(), createElementBlock("span", _hoisted_6, [
            _cache[1] || (_cache[1] = createBaseVNode("b", null, "Seen by:", -1)),
            createTextVNode(toDisplayString(__props.patient.prescriber), 1)
          ])) : createCommentVNode("", true),
          __props.patient?.nextAppointment ? (openBlock(), createElementBlock("span", _hoisted_7, [
            _cache[2] || (_cache[2] = createBaseVNode("b", null, "Nxt App:", -1)),
            createTextVNode(" " + toDisplayString(__props.patient.nextAppointment), 1)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        currentPage.value === 0 && __props.patient?.diagnoses && __props.patient.diagnoses.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("span", _hoisted_9, [
            _cache[3] || (_cache[3] = createBaseVNode("b", null, "Diagnoses:", -1)),
            createTextVNode(" " + toDisplayString(__props.patient.diagnoses.filter((d) => d).join(", ")), 1)
          ])
        ])) : createCommentVNode("", true),
        currentPage.value === 0 && hasVitals.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
          __props.patient?.vitals?.height ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(__props.patient.vitals.height || ""), 1)) : createCommentVNode("", true),
          __props.patient?.vitals?.weight ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(__props.patient.vitals.weight || ""), 1)) : createCommentVNode("", true),
          __props.patient?.vitals?.bloodPressure ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(__props.patient.vitals.bloodPressure || ""), 1)) : createCommentVNode("", true),
          __props.patient?.bloodGlucose ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(__props.patient.bloodGlucose || ""), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        currentMedications.value.length > 0 ? (openBlock(), createElementBlock("table", _hoisted_15, [
          currentPage.value === 0 ? (openBlock(), createElementBlock("thead", _hoisted_16, [..._cache[4] || (_cache[4] = [
            createBaseVNode("tr", null, [
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Drug"),
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Dose"),
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Freq"),
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Qty")
            ], -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentMedications.value, (drug, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", _hoisted_17, toDisplayString(drug?.name || ""), 1),
                createBaseVNode("td", _hoisted_18, toDisplayString(drug?.dose || ""), 1),
                createBaseVNode("td", _hoisted_19, toDisplayString(drug?.frequency || ""), 1),
                createBaseVNode("td", _hoisted_20, toDisplayString(drug?.quantity || ""), 1)
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ], 4);
    };
  }
});

const NCDVisitLbl = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cde3e630"]]);

async function printNCDVisitLbl() {
  await printLabel(NCDVisitLbl, {
    copies: 1
  });
}

function usePatientProfile() {
  const isMobile = ref(Capacitor.isNativePlatform());
  const visits = ref([]);
  const event = ref(null);
  const popoverOpen = ref(false);
  const program = ref(null);
  const demographicsStore = useDemographicsStore();
  const patient = demographicsStore.patient;
  const openPopover = (e) => {
    event.value = e;
    popoverOpen.value = true;
  };
  const openPIM = () => {
    createModal(_sfc_main$3, { class: "fullScreenModal" });
  };
  const openOutCome = () => {
    createModal(_sfc_main$2, { class: "large-modal-x10" });
  };
  const openUpdateNCDNUmbers = () => {
    createModal(UpdateNCDNumberModal, { class: "large-modal-x10" });
  };
  const printVisitSummary = async () => {
    if (Service.getProgramID() == 1) {
      printArtVisitLbl(patient.patientID);
    } else if (Service.getProgramID() == 32) {
      await printNCDVisitLbl();
    } else {
      new PrintoutService().printData("visit");
    }
  };
  const printID = () => {
    new PrintoutService().printData("barcode");
  };
  const formatCurrentAddress = (data) => {
    const addressComponents = [
      data?.personInformation?.current_district,
      data?.personInformation?.current_traditional_authority,
      data?.personInformation?.current_village
    ];
    return addressComponents.filter(Boolean).join(",");
  };
  return {
    isMobile,
    visits,
    event,
    popoverOpen,
    program,
    patient,
    openPopover,
    openPIM,
    openOutCome,
    printVisitSummary,
    printID,
    formatCurrentAddress,
    openUpdateNCDNUmbers
  };
}

export { _sfc_main$3 as _, usePatientProfile as u };
