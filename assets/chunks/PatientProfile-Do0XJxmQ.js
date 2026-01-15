import { q as defineComponent, a1 as onMounted, r as ref, x as createElementBlock, y as openBlock, A as createBaseVNode, z as createVNode, B as withCtx, a4 as createTextVNode, C as toDisplayString, E as unref, a6 as IonLabel, bz as createStaticVNode, fo as I1, M as IonButton, H as Fragment, J as modalController, fp as IonAlert, v as resolveComponent, N as createBlock, am as IonList, an as IonItem, ah as IonRadio, ag as IonRadioGroup, Q as renderList, ae as IonRow, ay as IonCol, a5 as IonInput, aA as IonToolbar, aB as IonTitle, aC as IonMenu, I as IonHeader, aD as IonContent, R as withDirectives, G as createCommentVNode, S as vShow, bE as IonModal, aF as IonAccordionGroup, aE as IonAccordion, b7 as IonCardTitle, cC as IonCardSubtitle, b8 as IonCardHeader, ba as IonCardContent, bJ as IonCard, bs as IonPage, ct as IonMenuButton, bc as IonFooter, K as IonIcon, aa as checkmarkOutline, F as closeCircleOutline, d as computed, fq as folderOpenOutline, ar as script, di as Navigation, dj as Pagination, dk as Slide, dl as Carousel, c8 as clipboardOutline, d1 as person, d$ as ellipsisVerticalSharp, b9 as checkmark, bW as chevronBackOutline, a3 as normalizeClass } from './vendor-sqYZJ6fK.js';
import { m as useAdministerVaccineStore, _ as _export_sfc, t as toastWarning, l as PreviousVitals, B as BasicInputField, ab as useUserStore, S as Service, H as HisDate, u as useDemographicsStore, n as icons, o as createModal, G as toastSuccess, g as getPouchDBRecords, C as StandardForm, F as DynamicButton, K as ObservationService, cm as PatientRegistrationService, a6 as RelationsService, x as toastDanger, cL as PatientPrintoutService, P as PatientService, a3 as ToolbarSearch, T as Toolbar, bU as VitalsService, bH as DrugOrderService, aj as PatientProgramService, b3 as useOutcomeStore, b2 as useTreatmentPlanStore, b1 as useVitalsStore } from '../index-_N7CIn5p.js';
import { D as DemographicBar } from './DemographicBar-C1AiU9D7.js';
import { S as SaveProgressModal } from './SaveProgressModal-k8AFRiOr.js';
import { m as mapState, s as storeToRefs } from './pinia-B_NbVBpS.js';
import { S as Stepper } from './Stepper-CgxC3gs-.js';
import { T as Treatment } from './treatment-CCi3d-xA.js';
import { l as lodashExports } from './lodash-BloL6HmY.js';
import { D as DrugPrescriptionService, a as DRUG_FREQUENCIES } from './drug_prescription_service-DmHL-MNr.js';
import WeightHeightChart from './WeightHeightChart-JVTvj8_W.js';
import { w as weightAndHeight, O as OtherVitals } from './weightAndHeight-DI7e08YW.js';
import { c as customDatePicker } from './customDatePicker-25WkAcav.js';
import { i as checkDrugName, s as saveVaccineAdministeredDrugs, j as voidVaccine, A as Appointment, N as NextAppointment } from './vaccines_service-8fTTW6et.js';
import { S as StockService } from './stock_service-Bj1eII-p.js';
import { u as useRelationships, _ as _sfc_main$d } from './Registration-B8bMXXd7.js';
import { a as useSetRegistrationValues } from './useSetRegistrationValues-kZNn6E46.js';
import { u as useAdministerOtherVaccineStore } from './AdministerOtherVaccinesStore-Cdi5Jck3.js';
import { B as BasicForm } from './BasicForm-CueOiWFX.js';
import { O as Outcome, c as _sfc_main$e } from './usePatientProfile-Ds9-ppBt.js';

const _hoisted_1$9 = { class: "flex flex-col items-center justify-center mt-6" };
const _hoisted_2$8 = { class: "phone mt-6" };
const _hoisted_3$6 = { class: "content" };
const _hoisted_4$5 = { class: "overlay" };
const _hoisted_5$5 = { style: { "margin-top": "20px" } };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "QRCodeReader",
  emits: ["scanresult"],
  setup(__props, { emit: __emit }) {
    onMounted(async () => {
      handleOnCanPlay();
    });
    const decode = ref(void 0);
    const isLoading = ref(false);
    function onResult(data) {
      decode.value = data;
      if (decode.value != void 0) {
        const store = useAdministerVaccineStore();
        store.setTempScannedBatchNumber(decode.value);
        scanresult(decode.value);
      }
    }
    function onLoading(loading) {
      isLoading.value = loading;
    }
    const refCamera = ref(null);
    function handleOnCanPlay() {
      refCamera.value?.onCanPlay();
    }
    function dismiss() {
      modalController.dismiss();
    }
    const emit = __emit;
    function scanresult(data) {
      emit("scanresult", data);
      dismiss();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$9, [
          createBaseVNode("div", _hoisted_2$8, [
            createVNode(unref(IonLabel), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(decode.value), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3$6, [
              createBaseVNode("div", _hoisted_4$5, [
                createVNode(unref(I1), {
                  ref_key: "refCamera",
                  ref: refCamera,
                  capture: "shoot",
                  "show-on-stream": "",
                  onOnloading: onLoading,
                  onResult
                }, null, 512),
                _cache[0] || (_cache[0] = createStaticVNode('<div class="focus-frame" data-v-e0d52d85></div><div class="dark-overlay top" data-v-e0d52d85></div><div class="dark-overlay bottom" data-v-e0d52d85></div><div class="dark-overlay left" data-v-e0d52d85></div><div class="dark-overlay right" data-v-e0d52d85></div>', 5))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5$5, [
          createVNode(unref(IonButton), {
            onClick: dismiss,
            id: "cbtn",
            class: "btnText cbtn",
            fill: "solid",
            style: { "width": "99%" }
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode(" Cancel ", -1)
            ])),
            _: 1,
            __: [1]
          })
        ])
      ], 64);
    };
  }
});

const QRCodeReadersrc = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-e0d52d85"]]);

const _sfc_main$b = defineComponent({
  name: "MyComponent",
  components: {
    IonAlert
  },
  data() {
    return {
      isOpen: false,
      alertButtons: [
        {
          text: "Close",
          role: "cancel",
          cssClass: "alert-danger-button"
        }
      ],
      messageContent: "No available batches/lot numbers"
    };
  },
  methods: {
    setOpen(state) {
      this.isOpen = state;
    },
    handleDismiss() {
      this.setOpen(false);
      this.$emit("alertClosed");
      this.dismiss();
    },
    dismiss() {
      modalController.dismiss();
    }
  },
  mounted() {
    this.setOpen(true);
  }
});

function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_alert = resolveComponent("ion-alert");
  return openBlock(), createBlock(_component_ion_alert, {
    "is-open": _ctx.isOpen,
    header: "Please update stock",
    "sub-header": "",
    message: _ctx.messageContent,
    buttons: _ctx.alertButtons,
    "css-class": "my-custom-alert",
    onDidDismiss: _ctx.handleDismiss
  }, null, 8, ["is-open", "message", "buttons", "onDidDismiss"]);
}
const alert = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$9], ["__scopeId", "data-v-cf655518"]]);

const _sfc_main$a = defineComponent({
  components: { IonRadioGroup, IonRadio, IonItem, IonList },
  props: {
    action: {
      type: Function,
      required: true
    },
    retro: {
      type: Boolean,
      required: true
    }
  },
  async mounted() {
    this.loadCurrentSelectedDrug();
  },
  watch: {
    retro: {
      handler() {
        this.checkToShow();
      },
      deep: true
      // `deep` is not needed for primitive types like Boolean
    }
  },
  data() {
    return {
      lotNumbers: [],
      selectedOption: {}
    };
  },
  methods: {
    compareWith(o1, o2) {
      return o1.id === o2.id;
    },
    handleChange(ev) {
      this.selectedOption = ev.detail.value;
    },
    checkIfSelected() {
      if (lodashExports.has(this.selectedOption, "lotNumber")) {
        return true;
      } else {
        if (this.checkDrugNameInt() == true) {
          return true;
        } else {
          toastWarning("Select a batch number!");
          return false;
        }
      }
    },
    performAction() {
      if (this.checkIfSelected() == true) {
        this.$emit("actionTriggered", this.selectedOption);
      }
    },
    async loadCurrentSelectedDrug() {
      try {
        const store = useAdministerVaccineStore();
        const currentDrug = store.getCurrentSelectedDrug();
        await this.formBatchList(currentDrug.drug.drug_id);
      } catch (error) {
      }
    },
    async formBatchList(drugId) {
      try {
        const store = useAdministerVaccineStore();
        const data = store.getLotNumberData();
        console.log("🚀 ~ data:", data);
        if (data.length == 0) {
          this.$emit("emptyList", "");
        }
        data.forEach((drug) => {
          const listItem = {
            id: drug.id,
            lotNumber: drug.batch_number
          };
          this.lotNumbers.push(listItem);
        });
        this.checkToShow();
      } catch (error) {
      }
    },
    addUnkownLotNumberOption() {
      const store = useAdministerVaccineStore();
      const currentDrug = store.getCurrentSelectedDrug();
      this.lotNumbers.push({
        id: currentDrug.drug.drug_id,
        lotNumber: "Unknown"
      });
    },
    checkToShow() {
      if (this.$props.retro == true) {
        this.addUnkownLotNumberOption();
      }
      this.checkDrugNameInt();
    },
    checkDrugNameInt() {
      const store = useAdministerVaccineStore();
      const currentDrug = store.getCurrentSelectedDrug();
      if (checkDrugName(currentDrug.drug) == true) {
        this.lotNumbers = [];
        this.lotNumbers.push({
          id: currentDrug.drug.drug_id,
          lotNumber: "Unknown"
        });
        return true;
      } else {
        return false;
      }
    }
  }
});

function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_radio = resolveComponent("ion-radio");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_radio_group = resolveComponent("ion-radio-group");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createBlock(_component_ion_row, null, {
    default: withCtx(() => [
      createVNode(_component_ion_card, {
        class: "shadowless-card",
        style: { "width": "100%", "padding": "0" }
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_list, null, {
            default: withCtx(() => [
              createVNode(_component_ion_radio_group, {
                compareWith: _ctx.compareWith,
                onIonChange: _cache[0] || (_cache[0] = ($event) => _ctx.handleChange($event)),
                value: "start"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.lotNumbers, (lotnumber) => {
                    return openBlock(), createBlock(_component_ion_item, {
                      key: lotnumber.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_radio, { value: lotnumber }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(lotnumber.lotNumber), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["compareWith"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const lotNumberList = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8], ["__scopeId", "data-v-aa570aee"]]);

const _sfc_main$9 = defineComponent({
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
    PreviousVitals,
    customDatePicker,
    lotNumberList,
    alert,
    IonCol,
    IonButton,
    IonRow
  },
  data() {
    return {
      iconsContent: icons,
      showPD: false,
      showDateBtns: true,
      vaccineDate: "",
      batchNumber: "",
      drugName: "",
      currentDrug: "",
      is_batch_number_valid: false,
      batch_number_error_message: "Enter a valid batch number",
      full_name: "",
      sessionDate: HisDate.toStandardHisDisplayFormat(Service.getSessionDate()),
      InnerActionBtnPropeties: {
        name: "Scan",
        show: true,
        fn: () => {
          createModal(QRCodeReadersrc, { class: "otherVitalsModal qr_code_modal" }, false);
        },
        icon: "",
        show_icon: false
      },
      selected_date_: "",
      is_a_vaccine: true
    };
  },
  computed: {
    ...mapState(useAdministerVaccineStore, ["tempScannedBatchNumber"]),
    ...mapState(useDemographicsStore, ["patient"])
  },
  setup() {
    const childComponentRef = ref(null);
    const triggerChildAction = () => {
      if (childComponentRef.value) {
        childComponentRef.value.performAction();
      }
    };
    return {
      childComponentRef,
      triggerChildAction
    };
  },
  async mounted() {
    this.loadCurrentSelectedDrug();
    this.displayUserNames();
    const store = useAdministerVaccineStore();
    this.showPD = store.isVaccinePassed();
    this.showDateBtns = !this.showPD;
  },
  props: {
    customSchedule: {
      type: [],
      default: []
    }
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
    }
  },
  methods: {
    loadCurrentSelectedDrug() {
      const store = useAdministerVaccineStore();
      this.currentDrug = store.getCurrentSelectedDrug();
      this.drugName = this.currentDrug.drug.drug_name;
      this.batchNumber = this.currentDrug.drug.vaccine_batch_number ? this.currentDrug.drug.vaccine_batch_number : "";
      if (checkDrugName(this.currentDrug.drug) == true) {
        this.is_a_vaccine = false;
        this.batchNumber = "unknown";
      }
    },
    showCPD() {
      this.showPD = true;
      this.showDateBtns = false;
    },
    dismiss() {
      modalController.dismiss();
    },
    updateDate(date) {
      this.vaccineDate = HisDate.toStandardHisFormat(date);
    },
    saveBatchWithTodayDate() {
      let vaccine_date = Service.getSessionDate();
      this.saveDta(vaccine_date);
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
    updateBatchNumber(event) {
      const input = event.target.value;
      this.batchNumber = input || this.tempScannedBatchNumber?.text || "";
    },
    async ActionTriggered(selectedOption) {
      const dta = {
        batch_number: selectedOption.lotNumber,
        date_administered: this.selected_date_,
        drug_id: this.currentDrug.drug.drug_id,
        drug_: this.currentDrug
      };
      const store = useAdministerVaccineStore();
      store.setAdministeredVaccine(dta);
      await saveVaccineAdministeredDrugs(this.patient);
      store.setTempScannedBatchNumber(null);
      this.dismiss();
    },
    saveDta(date_) {
      this.selected_date_ = date_;
      this.triggerChildAction();
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
    displayUserNames() {
      const user_store = useUserStore();
      const user = user_store.getUser();
      const first_name = user.person.names[0].given_name;
      const last_name = user.person.names[0].family_name;
      this.full_name = first_name + " " + last_name;
    },
    childAction() {
    },
    ShowAlert() {
    }
  }
});

const _hoisted_1$8 = { class: "modal_wrapper" };
const _hoisted_2$7 = { class: "lbl-ct" };
const _hoisted_3$5 = { class: "client_admi" };
const _hoisted_4$4 = { class: "client_admin_sub_x" };
const _hoisted_5$4 = { class: "btnContent" };
const _hoisted_6$4 = {
  key: 0,
  class: "saveBtn"
};
const _hoisted_7$2 = {
  key: 1,
  class: "saveBtn"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_lotNumberList = resolveComponent("lotNumberList");
  const _component_customDatePicker = resolveComponent("customDatePicker");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_ion_row, { style: { "margin-top": "10px" } }, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { style: { "margin-left": "-3px" } }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createBaseVNode("div", { class: "om" }, "Administer Vaccine", -1)
          ])),
          _: 1,
          __: [0]
        }),
        createVNode(_component_ion_col, {
          size: "6",
          style: { "text-align": "right" }
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              class: "lbl-tl",
              style: { "font-size": "13" }
            }, {
              default: withCtx(() => [
                _cache[1] || (_cache[1] = createTextVNode(" Todays Date: ", -1)),
                createBaseVNode("span", _hoisted_2$7, toDisplayString(_ctx.sessionDate), 1)
              ]),
              _: 1,
              __: [1]
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_label, { style: { "font-weight": "600px", "font-size": "20px", "margin": "10px", "margin-left": "0px" } }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.drugName), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    withDirectives(createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_label, { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "color": "grey" } }, {
          default: withCtx(() => _cache[2] || (_cache[2] = [
            createTextVNode("Select Batch number", -1),
            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
          ])),
          _: 1,
          __: [2]
        })
      ]),
      _: 1
    }, 512), [
      [vShow, _ctx.is_a_vaccine]
    ]),
    withDirectives(createBaseVNode("div", null, [
      createVNode(_component_lotNumberList, {
        action: _ctx.childAction,
        retro: _ctx.showPD,
        ref: "childComponentRef",
        onActionTriggered: _ctx.ActionTriggered,
        onEmptyList: _ctx.ShowAlert
      }, null, 8, ["action", "retro", "onActionTriggered", "onEmptyList"])
    ], 512), [
      [vShow, _ctx.is_a_vaccine]
    ]),
    createBaseVNode("div", _hoisted_3$5, [
      _cache[3] || (_cache[3] = createBaseVNode("span", { class: "client_admi_sub" }, "Vaccination done by: ", -1)),
      createBaseVNode("span", _hoisted_4$4, toDisplayString(_ctx.full_name), 1)
    ]),
    _ctx.showPD ? (openBlock(), createBlock(_component_customDatePicker, {
      key: 0,
      onDateChange: _ctx.updateDate
    }, null, 8, ["onDateChange"])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_5$4, [
      _ctx.showDateBtns ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
        createBaseVNode("div", null, [
          createVNode(_component_ion_button, {
            onClick: _ctx.saveBatchWithTodayDate,
            class: "btnText",
            fill: "solid"
          }, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createTextVNode(" Done today ", -1)),
              createVNode(_component_ion_icon, {
                slot: "end",
                size: "small",
                icon: _ctx.iconsContent.calenderwithPlus
              }, null, 8, ["icon"])
            ]),
            _: 1,
            __: [4]
          }, 8, ["onClick"])
        ]),
        _cache[6] || (_cache[6] = createBaseVNode("div", { style: { "margin-bottom": "20px" } }, null, -1)),
        createBaseVNode("div", null, [
          createVNode(_component_ion_button, {
            class: "btnText",
            fill: "solid",
            onClick: _ctx.showCPD
          }, {
            default: withCtx(() => [
              _cache[5] || (_cache[5] = createTextVNode(" Done earlier ", -1)),
              createVNode(_component_ion_icon, {
                slot: "end",
                size: "small",
                icon: _ctx.iconsContent.calenderWithPenEdit
              }, null, 8, ["icon"])
            ]),
            _: 1,
            __: [5]
          }, 8, ["onClick"])
        ])
      ])) : createCommentVNode("", true),
      !_ctx.showDateBtns ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
        createVNode(_component_ion_row, {
          class: "ion-justify-content-between",
          style: { "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_col, { size: "auto" }, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  onClick: _ctx.dismiss,
                  id: "cbtn",
                  class: "btnText cbtn",
                  fill: "solid",
                  style: { "width": "130px" }
                }, {
                  default: withCtx(() => _cache[7] || (_cache[7] = [
                    createTextVNode(" Cancel ", -1)
                  ])),
                  _: 1,
                  __: [7]
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, { size: "auto" }, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  onClick: _ctx.saveBatch,
                  class: "btnText",
                  fill: "solid",
                  style: { "width": "130px" }
                }, {
                  default: withCtx(() => _cache[8] || (_cache[8] = [
                    createTextVNode(" Save ", -1)
                  ])),
                  _: 1,
                  __: [8]
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const administerVaccineModal = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7], ["__scopeId", "data-v-6b431d87"]]);

const _sfc_main$8 = defineComponent({
  components: {
    IonRow,
    IonItem,
    IonList,
    IonRadio,
    IonRadioGroup,
    IonButton,
    IonCol
  },
  data() {
    return {
      reasons: [
        {
          id: 1,
          name: "Mistake/ Wrong Entry",
          type: "Mistake/ Wrong Entry"
        },
        {
          id: 2,
          name: "Duplicate",
          type: "Duplicate"
        },
        {
          id: 3,
          name: "System Error",
          type: "System Error"
        }
      ],
      selectedOption: {}
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  async mounted() {
  },
  props: {
    // customSchedule: {
    //     type: [],
    //     default: [],
    // } as any,
  },
  methods: {
    compareWith(o1, o2) {
      return o1.id === o2.id;
    },
    handleChange(ev) {
      this.selectedOption = ev.detail.value;
    },
    dismiss() {
      try {
        modalController.dismiss();
      } catch (error) {
      }
    },
    checkIfSelected() {
      if (lodashExports.has(this.selectedOption, "name") == true) {
        return true;
      } else {
        toastWarning("Select a reason!");
        return false;
      }
    },
    async voidVaccine1() {
      if (this.checkIfSelected() == true) {
        try {
          const store = useAdministerVaccineStore();
          const AdministrdVaccine = store.getVaccineToBeVoided();
          await voidVaccine(this.patient, AdministrdVaccine, this.selectedOption.name);
          toastSuccess("Vaccine was successfully voided!");
          store.setVaccineReload(!store.getVaccineReload());
          modalController.dismiss({ voided: true });
        } catch (error) {
        }
      }
    }
  }
});

const _hoisted_1$7 = { class: "saveBtn" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_radio = resolveComponent("ion-radio");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_radio_group = resolveComponent("ion-radio-group");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_row, { class: "centered-content" }, {
      default: withCtx(() => _cache[1] || (_cache[1] = [
        createBaseVNode("div", { class: "text-container" }, [
          createBaseVNode("div", null, "Do you want to void this vaccine?"),
          createBaseVNode("div", null, "Please specify reason for voiding this administered vaccine?")
        ], -1)
      ])),
      _: 1,
      __: [1]
    }),
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_list, { style: { "width": "100%" } }, {
          default: withCtx(() => [
            createVNode(_component_ion_radio_group, {
              compareWith: _ctx.compareWith,
              onIonChange: _cache[0] || (_cache[0] = ($event) => _ctx.handleChange($event)),
              value: "start"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.reasons, (reason) => {
                  return openBlock(), createBlock(_component_ion_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_radio, { value: reason }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(reason.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ]),
              _: 1
            }, 8, ["compareWith"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1$7, [
      createVNode(_component_ion_row, {
        class: "ion-justify-content-between",
        style: { "width": "100%" }
      }, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { size: "auto" }, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.dismiss,
                id: "cbtn",
                class: "btnText cbtn",
                fill: "solid",
                style: { "width": "130px" }
              }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode(" Cancel ", -1)
                ])),
                _: 1,
                __: [2]
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, { size: "auto" }, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.voidVaccine1,
                class: "btnText",
                fill: "solid",
                style: { "width": "130px" }
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(" Void ", -1)
                ])),
                _: 1,
                __: [3]
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ], 64);
}
const voidAdminstredVaccine = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6], ["__scopeId", "data-v-6bfc32c8"]]);

const _sfc_main$7 = defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonModal,
    IonCol,
    IonRow,
    alert
  },
  data() {
    return {
      iconsContent: icons,
      fowardData: {}
    };
  },
  computed: {},
  created() {
  },
  mounted() {
  },
  props: {
    vaccines: {
      type: {},
      default: {}
    },
    milestone_status: {
      type: String,
      default: 0
    }
  },
  watch: {},
  setup() {
    let isModalOpening = false;
    const cleanupModal = () => {
      isModalOpening = false;
      const modalElement = document.querySelector(".pr_o");
      if (modalElement) {
        modalElement.remove();
      }
    };
    return {
      isModalOpening,
      cleanupModal
    };
  },
  methods: {
    covertToDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    getColorForVaccine(vaccine) {
      if (vaccine.status == "administered") {
        return "success";
      }
      if (vaccine.status != "administered") {
        if (this.milestone_status == "upcoming") {
          return "medium";
        }
        if (this.milestone_status == "current") {
          return "success";
        } else {
          return "danger";
        }
      }
    },
    getInjectSignForVaccine(vaccine) {
      if (vaccine.status == "administered") {
        return this.iconsContent.greenInjection;
      }
      if (vaccine.status != "administered") {
        if (this.milestone_status == "upcoming") {
          return "";
        } else {
          return this.iconsContent.fadedGreenIjection;
        }
      }
    },
    getCheckBoxForVaccine(vaccine) {
      if (vaccine.status == "administered") {
        return this.iconsContent.improvedGreenTick;
      }
      if (vaccine.status != "administered") {
        if (this.milestone_status == "upcoming") {
          return "";
        } else {
          return this.iconsContent.whiteCheckbox;
        }
      }
    },
    async openAdministerVaccineModal(data) {
      const modalElement = document.querySelector(".pr_o");
      if (this.isModalOpening || modalElement) {
        console.log("Modal already open or opening, current state:", {
          isModalOpening: this.isModalOpening,
          modalExists: !!modalElement
        });
        return;
      }
      try {
        this.isModalOpening = true;
        const store = useAdministerVaccineStore();
        store.setCurrentSelectedDrug(data);
        const stockService = new StockService();
        let drugBatches;
        if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
          drugBatches = await getPouchDBRecords("stock", {
            selector: {
              drug_id: data.drug_id
            }
          });
        } else {
          drugBatches = await stockService.getDrugBatches(data.drug_id);
        }
        store.setLotNumberData(drugBatches);
        if (!this.checkIfAdminstredAndAskToVoid()) {
          if (drugBatches.length === 0) {
            if (!checkDrugName(data)) {
              createModal(alert, { class: "otherVitalsModal pr_o" });
            } else {
              createModal(administerVaccineModal, { class: "otherVitalsModal pr_o" });
            }
          } else {
            createModal(administerVaccineModal, { class: "otherVitalsModal pr_o" });
          }
        }
      } catch (error) {
        console.error("Error opening modal:", error);
        throw error;
      } finally {
        this.isModalOpening = false;
        console.log("Modal open process completed");
      }
    },
    disableVaccine(vaccine) {
      if (vaccine.status != null && vaccine.status == "administered") {
        return false;
      }
      if (vaccine.can_administer != null && vaccine.can_administer == false) {
        return true;
      }
      if (vaccine.can_administer != null && vaccine.can_administer == true) {
        return false;
      }
    },
    checkVaccineName(name) {
      return name.replace(/Pentavalent/g, "Penta");
    },
    checkIfAdminstredAndAskToVoid() {
      const store = useAdministerVaccineStore();
      const vaccine_to_void = store.getCurrentSelectedDrug();
      if (vaccine_to_void.drug.status == "administered") {
        store.setVaccineToBeVoided(vaccine_to_void);
        createModal(voidAdminstredVaccine, { class: "otherVitalsModal" }, false);
        return true;
      }
      return false;
    }
  }
});

const _hoisted_1$6 = { class: "vaccinesList" };
const _hoisted_2$6 = { class: "button-content" };
const _hoisted_3$4 = { style: { "margin-top": "20px" } };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vaccines, (vaccine) => {
              return openBlock(), createBlock(_component_ion_button, {
                disabled: _ctx.disableVaccine(vaccine),
                class: "administerVac",
                key: vaccine,
                onClick: ($event) => _ctx.openAdministerVaccineModal(vaccine),
                fill: "solid",
                color: _ctx.getColorForVaccine(vaccine),
                style: { "background": "#ddeedd", "border-radius": "8px", "color": "#636363" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    slot: "start",
                    icon: _ctx.getInjectSignForVaccine(vaccine)
                  }, null, 8, ["icon"]),
                  createBaseVNode("div", _hoisted_2$6, [
                    createBaseVNode("div", _hoisted_3$4, toDisplayString(_ctx.checkVaccineName(vaccine.drug_name)), 1),
                    createBaseVNode("div", null, toDisplayString(_ctx.covertToDate(vaccine.date_administered)), 1)
                  ]),
                  createVNode(_component_ion_icon, {
                    slot: "end",
                    icon: _ctx.getCheckBoxForVaccine(vaccine)
                  }, null, 8, ["icon"])
                ]),
                _: 2
              }, 1032, ["disabled", "onClick", "color"]);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const customVaccine = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__scopeId", "data-v-a72ee172"]]);

const _sfc_main$6 = defineComponent({
  name: "Home",
  components: {
    IonIcon,
    IonButton,
    customVaccine,
    IonHeader,
    IonTitle,
    IonFooter,
    IonCol,
    IonRow,
    IonContent
  },
  data() {
    return {
      iconsContent: icons,
      vaccineHistory: []
    };
  },
  setup() {
    return { closeCircleOutline, checkmarkOutline };
  },
  computed: {
    ...mapState(useAdministerVaccineStore, ["vaccineReload", "vaccineSchedule"])
  },
  methods: {
    vaccinesGivenCount(vaccinSchedule) {
      const administeredVaccines = [];
      vaccinSchedule.antigens.forEach((vaccine) => {
        if (vaccine.status == "administered") {
          administeredVaccines.push(vaccine);
        }
      });
      return administeredVaccines.length;
    },
    dismiss() {
      modalController.dismiss();
    }
  }
});

const _hoisted_1$5 = { style: { "color": "#016302" } };
const _hoisted_2$5 = { style: { "color": "#316CBA", "margin-left": "10%" } };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_row = resolveComponent("row");
  const _component_customVaccine = resolveComponent("customVaccine");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, null, {
      default: withCtx(() => [
        createVNode(_component_ion_title, {
          style: { "margin-bottom": "20px" },
          class: "modalTitle OtherVitalsTitle"
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode("Vaccination History", -1)
          ])),
          _: 1,
          __: [1]
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vaccineSchedule.vaccine_schedule, (item, index) => {
          return openBlock(), createElementBlock("div", {
            class: "mod-ls",
            key: index
          }, [
            createVNode(_component_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_icon, {
                  size: "medium",
                  style: { "margin-bottom": "-6px" },
                  icon: _ctx.iconsContent.calendar
                }, null, 8, ["icon"]),
                createBaseVNode("span", null, [
                  _cache[2] || (_cache[2] = createTextVNode(" at ", -1)),
                  createBaseVNode("span", _hoisted_1$5, toDisplayString(item.age), 1)
                ]),
                createBaseVNode("span", _hoisted_2$5, toDisplayString(_ctx.vaccinesGivenCount(item)) + "/" + toDisplayString(item.antigens.length) + " vaccine(s) given", 1)
              ]),
              _: 2
            }, 1024),
            createVNode(_component_row, null, {
              default: withCtx(() => [
                createVNode(_component_customVaccine, {
                  vaccines: item.antigens,
                  milestone_status: item.milestone_status
                }, null, 8, ["vaccines", "milestone_status"])
              ]),
              _: 2
            }, 1024)
          ]);
        }), 128))
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, {
      collapse: "fade",
      class: "ion-no-border"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  id: "cbtn",
                  class: "btnText cbtn",
                  fill: "solid",
                  style: { "width": "130px" },
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss())
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" Cancel ", -1)
                  ])),
                  _: 1,
                  __: [3]
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
}
const vaccinationHistory = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__scopeId", "data-v-59edb4e4"]]);

const _hoisted_1$4 = { style: { "display": "flex", "align-items": "center", "gap": "10px" } };
const _hoisted_2$4 = { class: "" };
const _hoisted_3$3 = {
  class: "ion-padding",
  slot: "content",
  style: { "padding-bottom": "200px" }
};
const _hoisted_4$3 = { class: "" };
const _hoisted_5$3 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_6$3 = {
  class: "ion-padding",
  slot: "content",
  style: { "padding-bottom": "120px" }
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "followUpVisitModal",
  props: {
    protectedStatus: {},
    lastVaccinesGiven: {}
  },
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { setGuardianInformation } = useSetRegistrationValues();
    const { getRelationships } = useRelationships();
    const vaccineAdverseEffectsForm = computed(
      () => [
        {
          componentType: "Heading",
          name: "Adverse event (s)"
        },
        {
          componentType: "checkboxField",
          name: "Severe local reaction",
          label: "Severe local reaction",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Sepsis",
          label: "Sepsis",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "High fever > 38*c",
          label: "High fever > 38*c",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Encephalopathy",
          label: "Encephalopathy",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Toxic Shock syndrome",
          label: "Toxic Shock syndrome",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Convulsions",
          label: "Convulsions",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Abscess",
          label: "Abscess",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Thrombocytopenia",
          label: "Thrombocytopenia",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Anaphylaxis",
          label: "Anaphylaxis",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Other",
          label: "Other",
          type: "single",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "Dashes"
        },
        {
          componentType: "radioButtonField",
          name: "SeriousCheck",
          header: "Serious?",
          type: "inline",
          obsValueType: "value_coded",
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            }
          ]
        },
        {
          componentType: "Heading",
          name: "Seriousness of adverse effects",
          condition: (data) => data.SeriousCheck === "Yes"
        },
        {
          componentType: "checkboxField",
          name: "Death",
          label: "Death",
          type: "single",
          condition: (data) => data.SeriousCheck === "Yes",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Life threatening condition",
          label: "Life threatening condition",
          type: "single",
          condition: (data) => data.SeriousCheck === "Yes",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Disability",
          label: "Disability",
          type: "single",
          condition: (data) => data.SeriousCheck === "Yes",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Congenital disorders",
          label: "Congenital disorders",
          type: "single",
          condition: (data) => data.SeriousCheck === "Yes",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Hospitalization",
          label: "Hospitalization",
          type: "single",
          condition: (data) => data.SeriousCheck === "Yes",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "checkboxField",
          name: "Other",
          label: "Other",
          type: "single",
          condition: (data) => data.SeriousCheck === "Yes",
          grid: { s: "6" },
          obsValueType: "value_coded"
        },
        {
          componentType: "Dashes"
        },
        {
          componentType: "radioButtonField",
          name: "Adverse effects outcome",
          header: "Outcome",
          type: "inline",
          obsValueType: "value_coded",
          options: [
            {
              label: "Recovering",
              value: "Recovering"
            },
            {
              label: "Not Recovered",
              value: "Not Recovered"
            },
            {
              label: "Recovered with sequelae",
              value: "Recovered with sequelae"
            },
            {
              label: "Died",
              value: "Patient died"
            },
            {
              label: "Recovered",
              value: "Cured - TB"
            },
            {
              label: "Unknown",
              value: "Unknown"
            }
          ]
        },
        {
          componentType: "Dashes"
        },
        {
          componentType: "radioButtonField",
          name: "Investigation needed",
          header: "Investigation needed",
          type: "inline",
          obsValueType: "value_coded",
          options: [
            {
              label: "Yes",
              value: "Yes"
            },
            {
              label: "No",
              value: "No"
            }
          ]
        },
        {
          componentType: "dateInputField",
          header: "Date investigation planned",
          name: "Date investigation planned",
          obsValueType: "value_date",
          condition: (data) => data["Investigation needed"] === "Yes"
        }
      ]
    );
    const childProtectedAtBirthForm = computed(
      () => [
        {
          componentType: "radioButtonField",
          name: "Protected at birth",
          header: "Protected at birth (PAB)",
          type: "inline",
          options: [
            {
              label: "Yes",
              value: "1065"
            },
            {
              label: "No",
              value: "1066"
            },
            {
              label: "Don't know",
              value: "1067"
            }
          ]
        }
      ]
    );
    const relationshipsData = ref([]);
    const guardianInformationRef = ref(null);
    const vaccineAdverseEffectsFormRef = ref(null);
    async function createGuardian() {
      const { guardianObj, relationshipId } = await guardianData();
      if (hasAtLeastOneValue(guardianObj)) {
        const guardian = new PatientRegistrationService();
        await guardian.registerGuardian(guardianObj);
        const guardianID = guardian.getPersonID();
        if (relationshipId) await RelationsService.createRelation(patient.value.patientID, guardianID, relationshipId);
        toastSuccess("Guarding information save successfully", 3e3);
        return true;
      } else {
        toastWarning("Guarding Information not save", 3e3);
        return false;
      }
    }
    function hasAtLeastOneValue(obj) {
      return Object.values(obj).some((value) => value !== "" && value !== null && value !== void 0);
    }
    async function saveData() {
      const guardianCreated = await createGuardian();
      const vaccineAdverseEffectsSaved = await saveVaccineAdverseEffects();
      if (guardianCreated && vaccineAdverseEffectsSaved) {
        modalController.dismiss();
      }
    }
    async function saveVaccineAdverseEffects() {
      if (patient.value.patientID) {
        const data = vaccineAdverseEffectsFormRef.value?.formValues || {};
        const buildData = await ObservationService.buildObsValues(data);
        console.log("🚀 ~ saveVaccineAdverseEffects ~ data:", buildData);
      }
    }
    async function guardianData() {
      const data = guardianInformationRef.value?.currentFormValues || {};
      const relationshipId = data?.relationship?.id || "";
      const guardianObj = {
        person_id: patient.value.patientID || "",
        given_name: data?.guardianFirstname || "",
        family_name: data?.guardianLastname || "",
        middle_name: data?.guardianMiddleName || "",
        gender: "",
        birthdate: "",
        cell_phone_number: data?.guardianPhoneNumber?.phoneNumber || "",
        birthdate_estimated: false,
        home_district: "",
        home_traditional_authority: "",
        home_village: "",
        current_district: "",
        current_traditional_authority: "",
        current_village: "",
        landmark: "",
        occupation: "",
        facility_name: "",
        patient_type: "",
        national_id: data?.guardianNationalID || ""
      };
      return {
        guardianObj,
        relationshipId
      };
    }
    function dismiss() {
      modalController.dismiss();
    }
    onMounted(async () => {
      patient.value.personInformation.gender;
      setGuardianInformation(guardianInformationRef.value);
      relationshipsData.value = await getRelationships(patient.value.personInformation.gender);
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_col = resolveComponent("ion-col");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonHeader), { style: { "display": "flex", "justify-content": "space-between", "align-items": "center" } }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$4, [
              createVNode(unref(IonIcon), {
                icon: unref(folderOpenOutline),
                style: { "font-size": "1.5rem", "color": "#08475e", "padding-left": "10px" }
              }, null, 8, ["icon"]),
              createVNode(unref(IonTitle), { class: "modalTitle" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("Follow up visits", -1)
                ])),
                _: 1,
                __: [2]
              })
            ]),
            createVNode(unref(IonIcon), {
              onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
              style: { "padding-top": "10px", "padding-right": "10px", "font-size": "2rem", "color": "#dc2626", "cursor": "pointer" },
              icon: unref(closeCircleOutline)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        createVNode(unref(IonContent), {
          fullscreen: true,
          class: "ion-padding",
          style: { "--background": "#fff" }
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$4, [
              createVNode(unref(IonAccordionGroup), {
                ref: "accordionGroup",
                class: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonAccordion), {
                    value: "first",
                    "toggle-icon-slot": "start",
                    class: "custom_card"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, { class: "previousLabel" }, {
                            default: withCtx(() => _cache[3] || (_cache[3] = [
                              createTextVNode("Change Guardian", -1)
                            ])),
                            _: 1,
                            __: [3]
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_3$3, [
                        createBaseVNode("div", _hoisted_4$3, [
                          createVNode(_sfc_main$d, {
                            relationshipsData: relationshipsData.value,
                            ref_key: "guardianInformationRef",
                            ref: guardianInformationRef
                          }, null, 8, ["relationshipsData"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonAccordion), {
                    value: "second",
                    "toggle-icon-slot": "start",
                    class: "custom_card"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, { class: "previousLabel" }, {
                            default: withCtx(() => _cache[4] || (_cache[4] = [
                              createTextVNode("Vaccine adverse effects", -1)
                            ])),
                            _: 1,
                            __: [4]
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_5$3, [
                        createBaseVNode("div", null, [
                          createVNode(StandardForm, {
                            formData: vaccineAdverseEffectsForm.value,
                            ref_key: "vaccineAdverseEffectsFormRef",
                            ref: vaccineAdverseEffectsFormRef
                          }, null, 8, ["formData"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  _ctx.protectedStatus != "Yes" ? (openBlock(), createBlock(unref(IonAccordion), {
                    key: 0,
                    value: "third",
                    "toggle-icon-slot": "start",
                    class: "custom_card"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), {
                        slot: "header",
                        color: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_label, { class: "previousLabel" }, {
                            default: withCtx(() => _cache[5] || (_cache[5] = [
                              createTextVNode("Child protected at birth", -1)
                            ])),
                            _: 1,
                            __: [5]
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_6$3, [
                        createVNode(StandardForm, {
                          formData: childProtectedAtBirthForm.value,
                          ref: "childProtectedAtBirthFormRef"
                        }, null, 8, ["formData"])
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 512)
            ])
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), {
          collapse: "fade",
          class: "ion-no-border"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonRow), null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [
                    createVNode(DynamicButton, {
                      onClick: _cache[1] || (_cache[1] = ($event) => saveData()),
                      name: "Save",
                      fill: "solid",
                      style: { "float": "right", "margin": "2%", "width": "130px" }
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

const followUpVisitModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d3804593"]]);

const _sfc_main$4 = defineComponent({
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
    lotNumberList
  },
  data() {
    const comp_key = ref(0);
    const antigens = ref([]);
    return {
      iconsContent: icons,
      showPD: false,
      batchNumber: "",
      vaccineName: "",
      currentDrugOb: {},
      comp_key,
      otherVaccinesList: antigens,
      is_batch_number_valid: false,
      vaccineDate: "",
      is_vaccine_name_valid: false,
      drugErrMsg: "",
      batch_number_error_message: "Enter a valid batch number",
      vaccine_name_error_message: "Enter a valid valid vaccine name",
      sessionDate: HisDate.toStandardHisDisplayFormat(Service.getSessionDate()),
      InnerActionBtnPropeties: {
        name: "Scan",
        show: true,
        fn: () => {
          createModal(QRCodeReadersrc, { class: "otherVitalsModal qr_code_modal" }, false);
        },
        icon: "",
        show_icon: false
      },
      showDateBtns: true,
      selected_date_: "",
      show_select_batch: false,
      skip_validation: false,
      antigens
    };
  },
  computed: {
    ...mapState(useAdministerOtherVaccineStore, ["administerOtherVaccine"]),
    ...mapState(useAdministerVaccineStore, ["tempScannedBatchNumber", "vaccineSchedule"]),
    ...mapState(useDemographicsStore, ["patient"])
  },
  async mounted() {
    this.vaccineSchedule.vaccine_schedule.forEach((vaccine) => {
      this.antigens.push(...vaccine.antigens);
    });
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
    const childComponentRef = ref(null);
    const triggerChildAction = () => {
      if (childComponentRef.value) {
        childComponentRef.value.performAction();
      }
    };
    return {
      childComponentRef,
      triggerChildAction
    };
  },
  methods: {
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
      console.log(this.currentDrugOb);
      const store = useAdministerVaccineStore();
      store.setCurrentSelectedDrug(data);
      this.pullLotNumbersForVaccine(this.currentDrugOb);
    },
    async pullLotNumbersForVaccine(data) {
      this.show_select_batch = false;
      const store = useAdministerVaccineStore();
      const stockService = new StockService();
      const data_ = await stockService.getDrugBatches(data.drug_id);
      store.setLotNumberData(data_);
      if (data_.length == 0) {
        if (checkDrugName(data) == false) {
          createModal(alert, { class: "otherVitalsModal" });
        }
        if (checkDrugName(data) == true) {
          this.show_select_batch = false;
          this.skip_validation = true;
        }
      }
      if (data_.length > 0) {
        this.comp_key = this.comp_key + 1;
        this.show_select_batch = true;
      }
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
    ActionTriggered(selectedOption) {
      const dta = {
        batch_number: selectedOption.lotNumber,
        date_administered: this.selected_date_,
        drug_id: this.currentDrugOb.drug_id,
        drug_: this.currentDrugOb
      };
      const store = useAdministerVaccineStore();
      store.setAdministeredVaccine(dta);
      saveVaccineAdministeredDrugs(this.patient);
      store.setTempScannedBatchNumber(null);
      this.dismiss();
    },
    saveDta(date_) {
      if (this.validateVaccineName() == true) {
        this.selected_date_ = date_;
        this.triggerChildAction();
        if (this.show_select_batch == false) {
          if (this.skip_validation == false) {
            toastDanger("Please Update Stock for Selected Vaccine");
          }
        }
      }
    },
    childAction() {
    }
  }
});

const _hoisted_1$3 = { class: "modal_wrapper" };
const _hoisted_2$3 = { class: "lbl-ct" };
const _hoisted_3$2 = { style: { "margin-top": "30px" } };
const _hoisted_4$2 = { class: "btnContent" };
const _hoisted_5$2 = {
  key: 0,
  class: "saveBtn"
};
const _hoisted_6$2 = {
  key: 1,
  class: "saveBtn"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_VueMultiselect = resolveComponent("VueMultiselect");
  const _component_lotNumberList = resolveComponent("lotNumberList");
  const _component_customDatePicker = resolveComponent("customDatePicker");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(_component_ion_row, { style: { "margin-top": "10px" } }, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { style: { "margin-left": "-3px" } }, {
          default: withCtx(() => _cache[3] || (_cache[3] = [
            createBaseVNode("div", { class: "om" }, "Add Other Vaccine", -1)
          ])),
          _: 1,
          __: [3]
        }),
        createVNode(_component_ion_col, {
          size: "6",
          style: { "text-align": "right" }
        }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              class: "lbl-tl",
              style: { "font-size": "13" }
            }, {
              default: withCtx(() => [
                _cache[4] || (_cache[4] = createTextVNode(" Todays Date: ", -1)),
                createBaseVNode("span", _hoisted_2$3, toDisplayString(_ctx.sessionDate), 1)
              ]),
              _: 1,
              __: [4]
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_3$2, [
      createVNode(_component_ion_row, null, {
        default: withCtx(() => [
          createVNode(_component_ion_label, { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "color": "grey" } }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("Vaccine name", -1),
              createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
            ])),
            _: 1,
            __: [5]
          })
        ]),
        _: 1
      }),
      createVNode(_component_VueMultiselect, {
        modelValue: _ctx.vaccineName,
        "onUpdate:modelValue": [
          _cache[0] || (_cache[0] = ($event) => _ctx.vaccineName = $event),
          _cache[1] || (_cache[1] = ($event) => _ctx.updateVaccineName($event))
        ],
        multiple: false,
        taggable: false,
        "hide-selected": false,
        "close-on-select": true,
        openDirection: "bottom",
        "tag-placeholder": "select vaccine",
        placeholder: "select vaccine",
        selectLabel: "",
        label: "drug_name",
        searchable: true,
        onSearchChange: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("search-change", $event)),
        "track-by": "drug_id",
        options: _ctx.otherVaccinesList
      }, null, 8, ["modelValue", "options"]),
      createBaseVNode("div", null, [
        _ctx.is_vaccine_name_valid ? (openBlock(), createBlock(_component_ion_label, {
          key: 0,
          style: { "padding": "3%" },
          class: "error-label"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.vaccine_name_error_message), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ])
    ]),
    withDirectives(createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_label, { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "color": "grey" } }, {
          default: withCtx(() => _cache[6] || (_cache[6] = [
            createTextVNode("Batch numbers", -1),
            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
          ])),
          _: 1,
          __: [6]
        })
      ]),
      _: 1
    }, 512), [
      [vShow, _ctx.show_select_batch]
    ]),
    withDirectives(createBaseVNode("div", null, [
      (openBlock(), createBlock(_component_lotNumberList, {
        action: _ctx.childAction,
        retro: _ctx.showPD,
        ref: "childComponentRef",
        onActionTriggered: _ctx.ActionTriggered,
        key: _ctx.comp_key
      }, null, 8, ["action", "retro", "onActionTriggered"]))
    ], 512), [
      [vShow, _ctx.show_select_batch]
    ]),
    _ctx.showPD ? (openBlock(), createBlock(_component_customDatePicker, { key: 0 })) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_4$2, [
      _ctx.showDateBtns ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
        createBaseVNode("div", null, [
          createVNode(_component_ion_button, {
            onClick: _ctx.saveBatchWithTodayDate,
            class: "btnText",
            fill: "solid"
          }, {
            default: withCtx(() => [
              _cache[7] || (_cache[7] = createTextVNode(" Done today ", -1)),
              createVNode(_component_ion_icon, {
                slot: "end",
                size: "small",
                icon: _ctx.iconsContent.calenderwithPlus
              }, null, 8, ["icon"])
            ]),
            _: 1,
            __: [7]
          }, 8, ["onClick"])
        ]),
        _cache[9] || (_cache[9] = createBaseVNode("div", { style: { "margin-bottom": "20px" } }, null, -1)),
        createBaseVNode("div", null, [
          createVNode(_component_ion_button, {
            class: "btnText",
            fill: "solid",
            onClick: _ctx.showCPD
          }, {
            default: withCtx(() => [
              _cache[8] || (_cache[8] = createTextVNode(" Done earlier ", -1)),
              createVNode(_component_ion_icon, {
                slot: "end",
                size: "small",
                icon: _ctx.iconsContent.calenderWithPenEdit
              }, null, 8, ["icon"])
            ]),
            _: 1,
            __: [8]
          }, 8, ["onClick"])
        ])
      ])) : createCommentVNode("", true),
      !_ctx.showDateBtns ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
        createVNode(_component_ion_row, { class: "ion-justify-content-between" }, {
          default: withCtx(() => [
            createVNode(_component_ion_col, { size: "auto" }, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  onClick: _ctx.dismiss,
                  id: "cbtn",
                  class: "btnText cbtn",
                  fill: "solid",
                  style: { "width": "130px" }
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode(" Cancel ", -1)
                  ])),
                  _: 1,
                  __: [10]
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, { size: "auto" }, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  onClick: _ctx.saveBatch,
                  class: "btnText",
                  fill: "solid",
                  style: { "width": "130px" }
                }, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode(" Save ", -1)
                  ])),
                  _: 1,
                  __: [11]
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const administerOtherVaccineModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-eb04f444"]]);

const _sfc_main$3 = defineComponent({
  name: "xxxComponent",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    customVaccine,
    IonButton,
    IonCol,
    IonRow,
    IonLabel
  },
  data() {
    return {
      vaccine_schArray: [],
      vaccineSchudulesCount: 0,
      milestones: [],
      iconsContent: icons,
      showCurrentMilestoneAlert: false,
      landingSlide: 0,
      msg: "Upcoming Vaccines",
      current_milestone: "",
      componentKey: 0
    };
  },
  computed: {
    ...mapState(useAdministerVaccineStore, ["vaccineReload"]),
    ...mapState(useDemographicsStore, ["patient"])
  },
  async mounted() {
    await this.loadVaccineSchedule();
  },
  watch: {
    vaccineReload: {
      async handler() {
        await this.loadVaccineSchedule();
      },
      deep: true
    },
    patient: {
      async handler() {
        await this.loadVaccineSchedule();
      },
      deep: true
    },
    vaccine_schArray: {
      handler() {
        this.reloadVaccines();
      }
    }
  },
  methods: {
    openAdministerOtherVaccineModal() {
      createModal(administerOtherVaccineModal, { class: "otherVitalsModal" });
    },
    async loadVaccineSchedule() {
      await this.setAppointmentDate();
      const data__ = this.patient.vaccineSchedule;
      const vaccineScheduleStore = useAdministerVaccineStore();
      vaccineScheduleStore.setVaccineSchedule(data__);
      vaccineScheduleStore.setLastVaccinesGiven([]);
      this.vaccineSchudulesCount = vaccineScheduleStore.getVaccineSchedule()?.vaccine_schedule?.length;
      vaccineScheduleStore.resetMissedVaccineSchedules();
      this.vaccine_schArray = [];
      this.vaccine_schArray.push(vaccineScheduleStore.getVaccineSchedule()?.vaccine_schedule);
      vaccineScheduleStore.getVaccineSchedule()?.vaccine_schedule?.forEach((vaccineSchudule) => {
        this.findMissingVaccines(vaccineSchudule);
        this.findPreviouslyAdministeredVaccineSchedule(vaccineSchudule);
        this.handleSchedule(vaccineSchudule);
        const obj = { visit: vaccineSchudule.visit, age: vaccineSchudule.age };
        this.milestones = this.appendUniqueObject(this.milestones, obj);
      });
      let shouldStop = false;
      vaccineScheduleStore.getVaccineSchedule()?.vaccine_schedule?.forEach((vaccineSchudule) => {
        if (shouldStop) return;
        if (this.findSingleUpcomingMilestone(vaccineSchudule) == true) {
          shouldStop = true;
          return;
        }
      });
      vaccineScheduleStore.getVaccineSchedule()?.vaccine_schedule?.forEach((vaccineSchudule) => {
        this.findCurrentMilestone(vaccineSchudule);
      });
    },
    setSB(vaccineSchudule) {
      const vaccineScheduleStore = useAdministerVaccineStore();
      vaccineScheduleStore.setCurrentMilestoneToAdminister({ currentMilestone: vaccineSchudule.age });
      this.landingSlide = vaccineSchudule.visit - 1;
      this.current_milestone = vaccineSchudule.age;
      vaccineScheduleStore.setCurrentMilestone(vaccineSchudule.age);
    },
    handleSchedule(vaccineSchudule) {
      if (vaccineSchudule.milestone_status == "upcoming") {
        const vaccineScheduleStore = useAdministerVaccineStore();
        vaccineScheduleStore.setCurrentSchedFound(false);
        this.msg = "Upcoming Vaccines";
        this.showCurrentMilestoneAlert = true;
        this.setSB(vaccineSchudule);
      } else {
        this.setSB(vaccineSchudule);
        const vaccineScheduleStore = useAdministerVaccineStore();
        vaccineScheduleStore.setCurrentSchedFound(false);
      }
    },
    findSingleUpcomingMilestone(vaccineSchudule) {
      if (vaccineSchudule.milestone_status == "upcoming") {
        this.setSB(vaccineSchudule);
        return true;
      }
      return false;
    },
    findCurrentMilestone(vaccineSchudule) {
      if (vaccineSchudule.milestone_status == "current") {
        this.msg = "Vaccines due today";
        const vaccineScheduleStore = useAdministerVaccineStore();
        vaccineScheduleStore.setCurrentSchedFound(true);
        this.showCurrentMilestoneAlert = true;
        this.setSB(vaccineSchudule);
      }
    },
    slideEvent(SlideEventData) {
      const vaccineScheduleStore = useAdministerVaccineStore();
      const CurrentMilestoneToAdminister = vaccineScheduleStore.getCurrentMilestoneToAdminister();
      this.milestones.forEach((milestone) => {
        if (milestone.visit - 1 == SlideEventData.currentSlideIndex) {
          vaccineScheduleStore.setCurrentMilestone(milestone.age);
          this.current_milestone = milestone.age;
        }
      });
      const templmilesytone = vaccineScheduleStore.getCurrentMilestone();
      if (templmilesytone == CurrentMilestoneToAdminister.currentMilestone) {
        if (vaccineScheduleStore.getCurrentSchedFound() == false) {
          this.msg = "Upcoming Vaccines";
        }
        if (vaccineScheduleStore.getCurrentSchedFound() == true) {
          this.msg = "Vaccines due today";
        }
        this.showCurrentMilestoneAlert = true;
        return;
      }
      if (templmilesytone.age != CurrentMilestoneToAdminister.currentMilestone) {
        this.showCurrentMilestoneAlert = false;
      }
    },
    appendUniqueObject(arr, obj) {
      const exists = arr.some((item) => item.visit === obj.visit && item.age === obj.age);
      if (!exists) {
        arr.push(obj);
      }
      return arr;
    },
    isListEmpty(arr) {
      if (arr.length > 0) {
        return true;
      }
      if (arr.length == 0) {
        return false;
      }
    },
    findMissingVaccines(milestone) {
      const obj = {
        age: milestone.age,
        antigens: []
      };
      if (milestone.milestone_status == "passed") {
        milestone.antigens.forEach((vaccine) => {
          if (vaccine.status == "pending") {
            obj.antigens.push(vaccine);
          }
        });
      }
      const vaccineScheduleStore = useAdministerVaccineStore();
      if (obj.antigens.length > 0) {
        vaccineScheduleStore.setMissedVaccineSchedules(obj);
      }
    },
    findPreviouslyAdministeredVaccineSchedule(milestone) {
      const vaccinesPreviouslyAdministered = [];
      milestone.antigens.forEach((vaccine) => {
        if (vaccine.status == "administered") {
          vaccinesPreviouslyAdministered.push(vaccine);
        }
      });
      if (vaccinesPreviouslyAdministered.length > 0) {
        const vaccineScheduleStore = useAdministerVaccineStore();
        vaccineScheduleStore.setLastVaccinesGiven(vaccinesPreviouslyAdministered);
      }
    },
    reloadVaccines() {
      this.componentKey += 1;
    },
    openNextVaccineAppoinment() {
      createModal(NextAppointment, { class: "otherVitalsModal" }, false);
    },
    async setAppointmentDate() {
      const store = useAdministerVaccineStore();
      const appointment_service = new Appointment();
      const data = await appointment_service.getNextAppointment();
      data?.next_appointment_date ? store.setNextAppointMentDate(data.next_appointment_date) : "";
    }
  }
});

const _hoisted_1$2 = {
  key: 0,
  class: "alert_banner"
};
const _hoisted_2$2 = {
  key: 1,
  class: "alert_banner",
  style: { "background": "inherit" }
};
const _hoisted_3$1 = { class: "container" };
const _hoisted_4$1 = { class: "center-content" };
const _hoisted_5$1 = { class: "centerBtns" };
const _hoisted_6$1 = { class: "otherVaccine center-content" };
const _hoisted_7$1 = { class: "centerBtns" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_apan = resolveComponent("apan");
  const _component_customVaccine = resolveComponent("customVaccine");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_slide = resolveComponent("slide");
  const _component_navigation = resolveComponent("navigation");
  const _component_pagination = resolveComponent("pagination");
  const _component_carousel = resolveComponent("carousel");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showCurrentMilestoneAlert ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
      createVNode(_component_apan, null, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.msg), 1)
        ]),
        _: 1
      })
    ])) : createCommentVNode("", true),
    !_ctx.showCurrentMilestoneAlert ? (openBlock(), createElementBlock("div", _hoisted_2$2)) : createCommentVNode("", true),
    _ctx.vaccineSchudulesCount > 0 ? (openBlock(), createBlock(_component_carousel, {
      key: 2,
      "items-to-show": 1,
      modelValue: _ctx.landingSlide,
      onSlideEnd: _ctx.slideEvent
    }, {
      addons: withCtx(() => [
        createVNode(_component_navigation),
        createVNode(_component_pagination)
      ]),
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vaccineSchudulesCount, (slide, index) => {
          return openBlock(), createBlock(_component_slide, { key: slide }, {
            default: withCtx(() => [
              createVNode(_component_ion_row, { class: "" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3$1, [
                    (openBlock(), createBlock(_component_customVaccine, {
                      vaccines: _ctx.vaccine_schArray[0][index].antigens,
                      milestone_status: _ctx.vaccine_schArray[0][index].milestone_status,
                      key: _ctx.componentKey
                    }, null, 8, ["vaccines", "milestone_status"]))
                  ]),
                  createVNode(_component_ion_row, { class: "bottom-row" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_4$1, [
                        createBaseVNode("div", _hoisted_5$1, [
                          createVNode(_component_ion_button, {
                            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openNextVaccineAppoinment()),
                            class: "btnText",
                            fill: "solid"
                          }, {
                            default: withCtx(() => _cache[1] || (_cache[1] = [
                              createTextVNode("Set Next Appointment Date", -1)
                            ])),
                            _: 1,
                            __: [1]
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "onSlideEnd"])) : createCommentVNode("", true),
    createVNode(_component_ion_row, { class: "bottom-row" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(_component_ion_button, {
              onClick: _ctx.openAdministerOtherVaccineModal,
              class: "btnText",
              fill: "solid"
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode(" Add Other Vaccines ", -1)
              ])),
              _: 1,
              __: [2]
            }, 8, ["onClick"])
          ])
        ])
      ]),
      _: 1
    })
  ], 64);
}
const customSlider = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-2fd0d538"]]);

const _sfc_main$2 = defineComponent({
  name: "Home",
  components: {
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonModal,
    IonRow,
    customVaccine,
    IonCol,
    IonFooter,
    IonContent
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  computed: {
    ...mapState(useAdministerVaccineStore, ["currentMilestone", "missedVaccineSchedules"])
  },
  methods: {
    vaccinesGivenCount(vaccinSchedule) {
      const administeredVaccines = [];
      vaccinSchedule.antigens.forEach((vaccine) => {
        if (vaccine.status == "administered") {
          administeredVaccines.push(vaccine);
        }
      });
      return administeredVaccines.length;
    },
    dismiss() {
      modalController.dismiss();
    }
  }
});

const _hoisted_1$1 = { style: { "color": "#016302" } };
const _hoisted_2$1 = { style: { "color": "#316CBA", "margin-left": "10%" } };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_row = resolveComponent("row");
  const _component_customVaccine = resolveComponent("customVaccine");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, null, {
      default: withCtx(() => [
        createVNode(_component_ion_title, {
          style: { "margin-bottom": "20px" },
          class: "modalTitle"
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode("Missed Vaccines", -1)
          ])),
          _: 1,
          __: [1]
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.missedVaccineSchedules, (item, index) => {
          return openBlock(), createElementBlock("div", { key: index }, [
            createVNode(_component_row, { style: { "width": "90%" } }, {
              default: withCtx(() => [
                createVNode(_component_ion_icon, {
                  size: "medium",
                  style: { "margin-bottom": "-6px" },
                  icon: _ctx.iconsContent.calendar
                }, null, 8, ["icon"]),
                createBaseVNode("span", null, [
                  _cache[2] || (_cache[2] = createTextVNode(" at ", -1)),
                  createBaseVNode("span", _hoisted_1$1, toDisplayString(item.age), 1)
                ]),
                createBaseVNode("span", _hoisted_2$1, toDisplayString(_ctx.vaccinesGivenCount(item)) + "/" + toDisplayString(item.antigens.length) + " vaccine(s) given", 1)
              ]),
              _: 2
            }, 1024),
            createVNode(_component_row, {
              style: { "text-align": "center" },
              class: "mod-ls"
            }, {
              default: withCtx(() => [
                createVNode(_component_customVaccine, {
                  vaccines: item.antigens,
                  milestone_status: item.milestone_status
                }, null, 8, ["vaccines", "milestone_status"])
              ]),
              _: 2
            }, 1024)
          ]);
        }), 128))
      ]),
      _: 1
    }),
    createVNode(_component_ion_footer, {
      collapse: "fade",
      class: "ion-no-border"
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  id: "cbtn",
                  class: "btnText cbtn",
                  fill: "solid",
                  style: { "width": "130px" },
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss())
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" Cancel ", -1)
                  ])),
                  _: 1,
                  __: [3]
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
}
const missedVaccinesModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-3ba5e9df"]]);

const _sfc_main$1 = defineComponent({
  name: "Menu",
  data() {
    return {
      isMobile: false,
      visits: [],
      event: null,
      popoverOpen: false,
      program: null
    };
  },
  mounted() {
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  methods: {
    openPopover(e) {
      this.event = e;
      this.popoverOpen = true;
    },
    openPIM() {
      createModal(_sfc_main$e, { class: "fullScreenModal" });
    },
    openOutCome() {
      createModal(Outcome, { class: "otherVitalsModal largeModal" });
    },
    async printVisitSummary() {
      this.visits = await PatientService.getPatientVisits(this.patient.patientID, false);
      if (this.visits.length) {
        const lbl = new PatientPrintoutService(this.patient.patientID);
        return lbl.printVisitSummaryLbl(this.visits[0]);
      } else {
        toastWarning("No visits available");
      }
    },
    printID() {
      new PatientPrintoutService(this.patient.patientID).printNidLbl();
    },
    formatCurrentAddress(data) {
      const addressComponents = [
        data?.personInformation?.current_district,
        data?.personInformation?.current_traditional_authority,
        data?.personInformation?.current_village
      ];
      return addressComponents.filter(Boolean).join(",");
    }
  }
});

const _sfc_main = defineComponent({
  mixins: [_sfc_main$1],
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    DemographicBar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonModal,
    Stepper,
    DynamicButton,
    WeightHeightChart,
    PreviousVitals,
    customSlider,
    IonRow,
    customVaccine
  },
  data() {
    return {
      wizardData: [],
      StepperData: [],
      isOpen: false,
      iconsContent: icons,
      current_milestone: "",
      checkUnderSixWeeks: false,
      unprotected_at_birth: "",
      protectedStatus: "",
      todays_date: HisDate.toStandardHisDisplayFormat(Service.getSessionDate()),
      lastVaccine: [],
      visits: [],
      selectedStatus: 7
    };
  },
  computed: {
    ...mapState(useVitalsStore, ["vitals"]),
    ...mapState(useTreatmentPlanStore, ["selectedMedicalDrugsList", "nonPharmalogicalTherapyAndOtherNotes", "selectedMedicalAllergiesList"]),
    ...mapState(useOutcomeStore, ["outcomes"]),
    ...mapState(useAdministerVaccineStore, [
      "currentMilestone",
      "missedVaccineSchedules",
      "overDueVaccinesCount",
      "lastVaccinesGiven",
      "lastVaccineGievenDate",
      "nextAppointMentDate"
    ])
  },
  async mounted() {
    this.loadCurrentMilestone();
    this.checkAge();
    await this.checkProtectedStatus();
    await this.programEnrollment();
  },
  watch: {
    currentMilestone: {
      handler() {
        this.loadCurrentMilestone();
      }
    },
    $route: {
      async handler(data) {
        if (data.name == "patientProfile" && this.patient.patientID) {
          await this.checkProtectedStatus();
          await this.programEnrollment();
        }
      }
    },
    patient: {
      async handler() {
        if (this.patient) {
          await this.checkProtectedStatus();
          await this.programEnrollment();
          this.checkAge();
          this.setMilestoneReload();
        }
      }
    }
  },
  setup() {
    return { chevronBackOutline, checkmark, ellipsisVerticalSharp, person, clipboardOutline };
  },
  methods: {
    handleChange(status) {
      this.selectedStatus = status;
    },
    async programEnrollment() {
      if (this.patient.patientID) {
        this.program = new PatientProgramService(this.patient.patientID);
        const checkEnrollment = await this.program.getProgramCurrentStates();
        if (!checkEnrollment) {
          try {
            await this.program.enrollProgram();
            await this.program.setStateId(7);
          } catch (error) {
            await this.program.setStateId(7);
          }
          await this.program.updateState();
          this.selectedStatus = 7;
        } else {
          this.selectedStatus = checkEnrollment.state;
        }
      }
    },
    async updateState(state) {
      this.selectedStatus = state;
      await this.program.setStateId(state);
      await this.program.updateState();
    },
    getAge(dateOfBirth) {
      return HisDate.calculateDisplayAge(HisDate.toStandardHisFormat(dateOfBirth));
    },
    async checkProtectedStatus() {
      this.protectedStatus = this.getData(this.patient.birthRegistration, 11759)[0];
    },
    getData(_data, concept_id) {
      try {
        const data = [..._data?.saved, ..._data?.unsaved];
        if (data) {
          return data.filter((w) => w.concept_id == concept_id).map((w) => w.value_text);
        } else {
          return "";
        }
      } catch (error) {
        console.error("Error in getData:", error);
        return "";
      }
    },
    checkAge() {
      if (!lodashExports.isEmpty(this.patient?.personInformation?.birthdate)) {
        this.checkUnderSixWeeks = HisDate.dateDiffInDays(HisDate.sessionDate(), this.patient?.personInformation?.birthdate) < 42 ? true : false;
      }
    },
    openVitalsModal() {
      createModal(OtherVitals, { class: "otherVitalsModal" });
    },
    openWH() {
      createModal(weightAndHeight, { class: "otherVitalsModal" });
    },
    openVH() {
      createModal(vaccinationHistory, { class: "otherVitalsModal vaccineHistoryModal" });
    },
    async openFollowModal() {
      if (this.patient?.patientID) {
        this.lastVaccine = await DrugOrderService.getLastDrugsReceived(this.patient.patientID);
        const dataToPass = { protectedStatus: this.protectedStatus, lastVaccinesGiven: this.lastVaccinesGiven };
        if (this.lastVaccinesGiven.length > 0) createModal(followUpVisitModal, { class: "fullScreenModal" }, true, dataToPass);
      }
    },
    openAdministerVaccineModal() {
      createModal(administerVaccineModal, { class: "otherVitalsModal" });
    },
    openAdministerOtherVaccineModal() {
      createModal(administerOtherVaccineModal, { class: "otherVitalsModal" });
    },
    isChild() {
      const patient = new PatientService();
      if (patient.isUnderFive()) return true;
      else return false;
    },
    getFormatedData(data) {
      return data.map((item) => {
        return item?.data;
      });
    },
    async saveVitals() {
      if (this.vitals.validationStatus) {
        const userID = Service.getUserID();
        const vitalsInstance = new VitalsService(this.patient.patientID, userID);
        vitalsInstance.onFinish(this.vitals);
      }
    },
    async saveTreatmentPlan() {
      const userID = Service.getUserID();
      const patientID = this.patient.patientID;
      const treatmentInstance = new Treatment();
      if (!lodashExports.isEmpty(this.selectedMedicalAllergiesList)) {
        const allergies = this.mapToAllergies();
        treatmentInstance.onSubmitAllergies(patientID, userID, allergies);
      }
      if (!lodashExports.isEmpty(this.nonPharmalogicalTherapyAndOtherNotes)) {
        const treatmentNotesTxt = [
          {
            concept_id: 2688,
            obs_datetime: Service.getSessionDate(),
            value_text: this.nonPharmalogicalTherapyAndOtherNotes
          }
        ];
        treatmentInstance.onSubmitNotes(patientID, userID, treatmentNotesTxt);
      }
      if (!lodashExports.isEmpty(this.selectedMedicalDrugsList)) {
        const drugOrders = this.mapToOrders();
        const prescriptionService = new DrugPrescriptionService(patientID, userID);
        const encounter = await prescriptionService.createEncounter();
        if (!encounter) return toastWarning("Unable to create treatment encounter");
        const drugOrder = await prescriptionService.createDrugOrder(drugOrders);
        if (!drugOrder) return toastWarning("Unable to create drug orders!");
        toastSuccess("Drug order has been created");
      }
    },
    openModal() {
      createModal(SaveProgressModal);
    },
    mapToOrders() {
      return this.selectedMedicalDrugsList.map((drug) => {
        const startDate = DrugPrescriptionService.getSessionDate();
        const frequency = DRUG_FREQUENCIES.find((f) => f.label === drug.frequency) || {};
        return {
          drug_inventory_id: drug.drug_id,
          equivalent_daily_dose: drug.dose == "Unknown" ? 0 : drug.dose * frequency?.value || 0,
          start_date: startDate,
          auto_expire_date: this.calculateExpireDate(startDate, drug.duration),
          units: drug.units,
          instructions: `${drug.drugName}: ${drug.dose} ${drug.units} ${frequency?.code || ""} for ${drug.duration} days`,
          dose: drug.dose,
          frequency: frequency?.code || ""
        };
      });
    },
    formatBirthdate() {
      return HisDate.toStandardHisDisplayFormat(this.patient?.personInformation?.birthdate);
    },
    calculateExpireDate(startDate, duration) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + parseInt(duration));
      return HisDate.toStandardHisFormat(date);
    },
    mapToAllergies() {
      return this.selectedMedicalAllergiesList.map((allergy) => {
        return {
          concept_id: 985,
          obs_datetime: Service.getSessionDate(),
          value_coded: allergy.concept_id
        };
      });
    },
    loadCurrentMilestone() {
      const store = useAdministerVaccineStore();
      this.current_milestone = store.getCurrentMilestone();
    },
    showMissedVaccines() {
      if (this.missedVaccineSchedules.length > 0) {
        createModal(missedVaccinesModal, { class: "otherVitalsModal vaccineHistoryModal" });
      }
    },
    setMilestoneReload() {
      const store = useAdministerVaccineStore();
      store.setVaccineReload(!store.getVaccineReload());
    },
    getLastVaccinesGivenDisplayDate() {
      return HisDate.toStandardHisDisplayFormat(this.lastVaccineGievenDate);
    }
  }
});

const _hoisted_1 = {
  fullscreen: true,
  style: { "--background": "#fff", "max-width": "900px", "margin": "auto" }
};
const _hoisted_2 = { class: "demographics" };
const _hoisted_3 = { style: { "overflow": "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" } };
const _hoisted_4 = { style: { "display": "flex", "justify-content": "space-between", "align-content": "center", "padding-bottom": "5px", "padding-top": "5px", "padding-left": "5px" } };
const _hoisted_5 = { style: { "margin-right": "5px" } };
const _hoisted_6 = { class: "demographicsFirstRow" };
const _hoisted_7 = { class: "name" };
const _hoisted_8 = {
  class: "demographicsOtherRow",
  style: { "margin-top": "10px" }
};
const _hoisted_9 = { class: "demographicsText" };
const _hoisted_10 = {
  key: 0,
  class: "demographicsOtherRow"
};
const _hoisted_11 = { class: "demographicsText mediumFontColor" };
const _hoisted_12 = {
  key: 1,
  class: "demographicsOtherRow"
};
const _hoisted_13 = { class: "demographicsText mediumFontColor" };
const _hoisted_14 = { class: "demographicsOtherRow" };
const _hoisted_15 = { class: "demographicsText smallFont" };
const _hoisted_16 = { class: "mediumFontColor" };
const _hoisted_17 = { class: "demographicsOtherRow" };
const _hoisted_18 = {
  key: 0,
  class: "demographicsText smallFont"
};
const _hoisted_19 = {
  key: 1,
  class: "demographicsText smallFont"
};
const _hoisted_20 = {
  key: 2,
  class: "demographicsText smallFont"
};
const _hoisted_21 = {
  class: "demographicsOtherRow",
  style: { "margin-bottom": "10px" }
};
const _hoisted_22 = { class: "demographicsText smallFont" };
const _hoisted_23 = {
  key: 0,
  style: { "background": "#fedf89", "color": "#b54708" },
  class: "protectedStatus"
};
const _hoisted_24 = {
  key: 1,
  style: { "background": "#ddeedd" },
  class: "protectedStatus"
};
const _hoisted_25 = {
  key: 2,
  class: "protectedStatus",
  style: { "background": "#fecdca", "color": "#b42318" }
};
const _hoisted_26 = { class: "graphSection" };
const _hoisted_27 = {
  class: "graphBtn",
  style: { "margin-bottom": "5px" }
};
const _hoisted_28 = { class: "weightHeightGraphBtns" };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _hoisted_31 = {
  key: 0,
  class: "graphBtn"
};
const _hoisted_32 = { class: "dueAlert" };
const _hoisted_33 = { class: "missed_vaccine_alert" };
const _hoisted_34 = { style: { "margin-right": "5px" } };
const _hoisted_35 = { class: "vaccinesTitle" };
const _hoisted_36 = { style: { "width": "100%", "display": "flex", "justify-content": "space-between", "align-content": "center" } };
const _hoisted_37 = { class: "vaccinesTitleDate" };
const _hoisted_38 = { class: "milestone" };
const _hoisted_39 = { style: { "display": "flex", "justify-content": "space-between", "align-content": "center" } };
const _hoisted_40 = { style: { "color": "#636363", "margin-left": "5px", "margin-top": "-4px" } };
const _hoisted_41 = { style: { "color": "#636363", "font-weight": "bold", "font-size": "14px" } };
const _hoisted_42 = { class: "lastVaccine" };
const _hoisted_43 = { class: "lastVaccineTitle" };
const _hoisted_44 = {
  key: 0,
  class: "lastVaccineText"
};
const _hoisted_45 = { class: "seeFullList" };
const _hoisted_46 = { style: { "color": "#316cba", "margin-left": "1%" } };
const _hoisted_47 = {
  class: "ion-padding",
  slot: "content"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_WeightHeightChart = resolveComponent("WeightHeightChart");
  const _component_PreviousVitals = resolveComponent("PreviousVitals");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_customSlider = resolveComponent("customSlider");
  const _component_row = resolveComponent("row");
  const _component_customVaccine = resolveComponent("customVaccine");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_toggle = resolveComponent("ion-toggle");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_popover = resolveComponent("ion-popover");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.patient?.personInformation?.gender == "M" ? "initialsBox maleColor" : "initialsBox femaleColor")
              }, [
                createVNode(_component_ion_icon, {
                  style: { "color": "#fff", "font-size": "100px" },
                  icon: _ctx.person
                }, null, 8, ["icon"])
              ], 2)
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.patient?.personInformation?.given_name) + " " + toDisplayString(_ctx.patient?.personInformation?.middle_name) + " " + toDisplayString(_ctx.patient?.personInformation?.family_name), 1)
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createTextVNode(toDisplayString(_ctx.patient?.personInformation?.gender == "M" ? "Male" : "Female") + " ", 1),
                  _cache[12] || (_cache[12] = createBaseVNode("span", { class: "dot" }, ".", -1)),
                  createTextVNode(" " + toDisplayString(_ctx.getAge(_ctx.patient?.personInformation?.birthdate)) + " (" + toDisplayString(_ctx.formatBirthdate()) + ") ", 1)
                ])
              ]),
              _ctx.patient?.personInformation?.current_district ? (openBlock(), createElementBlock("div", _hoisted_10, [
                _cache[13] || (_cache[13] = createBaseVNode("div", { class: "demographicsText" }, "Current Address:", -1)),
                createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.formatCurrentAddress(_ctx.patient)), 1)
              ])) : createCommentVNode("", true),
              _ctx.patient?.personInformation?.country ? (openBlock(), createElementBlock("div", _hoisted_12, [
                _cache[14] || (_cache[14] = createBaseVNode("div", { class: "demographicsText" }, "Country:", -1)),
                createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.patient?.personInformation?.country), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  _cache[15] || (_cache[15] = createTextVNode(" MRN: ", -1)),
                  createBaseVNode("span", _hoisted_16, toDisplayString(_ctx.patient.ID), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_17, [
                _ctx.selectedStatus == 7 ? (openBlock(), createElementBlock("div", _hoisted_18, _cache[16] || (_cache[16] = [
                  createTextVNode(" Outcome: ", -1),
                  createBaseVNode("span", { class: "outcomeStatus" }, " Active", -1)
                ]))) : createCommentVNode("", true),
                _ctx.selectedStatus == 6 ? (openBlock(), createElementBlock("div", _hoisted_19, _cache[17] || (_cache[17] = [
                  createTextVNode(" Outcome: ", -1),
                  createBaseVNode("span", {
                    class: "outcomeStatus",
                    style: { "background": "#fecdca", "color": "#b42318" }
                  }, " Inactive", -1)
                ]))) : createCommentVNode("", true),
                _ctx.selectedStatus == 3 ? (openBlock(), createElementBlock("div", _hoisted_20, _cache[18] || (_cache[18] = [
                  createTextVNode(" Outcome: ", -1),
                  createBaseVNode("span", {
                    class: "outcomeStatus",
                    style: { "background": "#fecdca", "color": "#b42318" }
                  }, " Died", -1)
                ]))) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  _cache[19] || (_cache[19] = createTextVNode(" Status: ", -1)),
                  _ctx.protectedStatus == "No" ? (openBlock(), createElementBlock("span", _hoisted_23, "Unprotected at birth")) : _ctx.protectedStatus == "Yes" ? (openBlock(), createElementBlock("span", _hoisted_24, "Protected at birth")) : (openBlock(), createElementBlock("span", _hoisted_25, "Unknown protection at birth"))
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", {
          class: "name",
          style: { "color": "var(--ion-color-primary)", "margin-top": "10px" },
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openPopover($event))
        }, [
          createVNode(_component_ion_icon, { icon: _ctx.ellipsisVerticalSharp }, null, 8, ["icon"])
        ])
      ]),
      createBaseVNode("div", _hoisted_26, [
        createBaseVNode("div", null, [
          _ctx.isChild() ? (openBlock(), createBlock(_component_WeightHeightChart, {
            key: 0,
            checkUnderSixWeeks: _ctx.checkUnderSixWeeks,
            showHeightWeight: true
          }, null, 8, ["checkUnderSixWeeks"])) : createCommentVNode("", true),
          !_ctx.isChild() ? (openBlock(), createBlock(_component_PreviousVitals, { key: 1 })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", null, [
              createVNode(_component_ion_button, {
                class: "btnText",
                fill: "solid",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.openWH())
              }, {
                default: withCtx(() => [
                  !_ctx.checkUnderSixWeeks ? (openBlock(), createElementBlock("span", _hoisted_29, " Enter Weight/Height")) : (openBlock(), createElementBlock("span", _hoisted_30, " Enter Weight")),
                  createVNode(_component_ion_icon, {
                    slot: "end",
                    size: "small",
                    icon: _ctx.iconsContent.whiteHeightWeight
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", null, [
              createVNode(_component_ion_button, {
                class: "btnText",
                fill: "solid",
                onClick: _cache[2] || (_cache[2] = ($event) => _ctx.openVitalsModal())
              }, {
                default: withCtx(() => [
                  _cache[20] || (_cache[20] = createTextVNode(" Enter Other Vitals ", -1)),
                  createVNode(_component_ion_icon, {
                    slot: "end",
                    size: "small",
                    icon: _ctx.iconsContent.whiteVitals
                  }, null, 8, ["icon"])
                ]),
                _: 1,
                __: [20]
              })
            ])
          ])
        ])
      ]),
      createBaseVNode("div", null, [
        _ctx.overDueVaccinesCount > 0 ? (openBlock(), createElementBlock("div", _hoisted_31, [
          createBaseVNode("div", _hoisted_32, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                _ctx.overDueVaccinesCount > 0 ? (openBlock(), createBlock(_component_ion_col, {
                  key: 0,
                  style: { "display": "flex", "justify-content": "center", "cursor": "pointer" },
                  onClick: _ctx.showMissedVaccines
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_33, [
                      createVNode(_component_ion_icon, {
                        slot: "start",
                        icon: _ctx.iconsContent.alertDangerRed
                      }, null, 8, ["icon"]),
                      createBaseVNode("span", _hoisted_34, toDisplayString(_ctx.overDueVaccinesCount) + " vaccine(s) overdue", 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_35, [
          createBaseVNode("div", _hoisted_36, [
            _cache[22] || (_cache[22] = createBaseVNode("div", { class: "vaccinesTitleText" }, "Administer Vaccines", -1)),
            createBaseVNode("div", _hoisted_37, [
              _cache[21] || (_cache[21] = createBaseVNode("span", { style: { "font-size": "13px" } }, "Next Appt. Date: ", -1)),
              createBaseVNode("b", null, toDisplayString(_ctx.nextAppointMentDate), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_38, [
          createBaseVNode("div", _hoisted_39, [
            createVNode(_component_ion_icon, {
              size: "small",
              icon: _ctx.iconsContent.greenCalender
            }, null, 8, ["icon"]),
            createBaseVNode("div", _hoisted_40, [
              _cache[23] || (_cache[23] = createTextVNode(" at ", -1)),
              createBaseVNode("span", _hoisted_41, toDisplayString(_ctx.current_milestone), 1)
            ])
          ]),
          _cache[24] || (_cache[24] = createBaseVNode("div", { class: "vaccinesTitleDate" }, "(Swipe left or right for other milestones)", -1))
        ]),
        createVNode(_component_customSlider),
        createBaseVNode("div", _hoisted_42, [
          createBaseVNode("div", _hoisted_43, [
            _ctx.lastVaccinesGiven.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_44, "Last vaccines given")) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_45, [
              createVNode(_component_ion_button, {
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.openVH()),
                style: { "color": "#016302", "margin-bottom": "10px" },
                class: "btnText btnTextWeight",
                size: "small",
                fill: "outline"
              }, {
                default: withCtx(() => [
                  _cache[25] || (_cache[25] = createBaseVNode("span", null, "See full History", -1)),
                  createVNode(_component_ion_icon, {
                    slot: "end",
                    size: "medium",
                    icon: _ctx.clipboardOutline
                  }, null, 8, ["icon"])
                ]),
                _: 1,
                __: [25]
              })
            ])
          ]),
          _ctx.lastVaccinesGiven.length > 0 ? (openBlock(), createBlock(_component_row, { key: 0 }, {
            default: withCtx(() => [
              createVNode(_component_ion_icon, {
                size: "medium",
                style: { "margin-bottom": "-6px" },
                icon: _ctx.iconsContent.calendar
              }, null, 8, ["icon"]),
              createBaseVNode("span", _hoisted_46, toDisplayString(_ctx.getLastVaccinesGivenDisplayDate()), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          _ctx.lastVaccinesGiven.length > 0 ? (openBlock(), createBlock(_component_row, { key: 1 }, {
            default: withCtx(() => [
              createVNode(_component_customVaccine, {
                vaccines: _ctx.lastVaccinesGiven,
                milestone_status: ""
              }, null, 8, ["vaccines"])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ])
    ]),
    createVNode(_component_ion_popover, {
      style: { "--offset-x": "-10px" },
      "is-open": _ctx.popoverOpen,
      "show-backdrop": false,
      event: _ctx.event,
      onDidDismiss: _cache[11] || (_cache[11] = ($event) => _ctx.popoverOpen = false)
    }, {
      default: withCtx(() => [
        createBaseVNode("div", null, [
          createVNode(_component_ion_accordion_group, { multiple: true }, {
            default: withCtx(() => [
              createVNode(_component_ion_accordion, {
                value: "first",
                "toggle-icon": "",
                onClick: _cache[4] || (_cache[4] = ($event) => _ctx.openPIM())
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => _cache[26] || (_cache[26] = [
                          createTextVNode("Update demographics", -1)
                        ])),
                        _: 1,
                        __: [26]
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_accordion, {
                value: "first",
                "toggle-icon": "",
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.openFollowModal())
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => _cache[27] || (_cache[27] = [
                          createTextVNode("Follow up visits", -1)
                        ])),
                        _: 1,
                        __: [27]
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_accordion, {
                value: "second",
                "toggle-icon": "",
                onClick: _cache[6] || (_cache[6] = ($event) => _ctx.printVisitSummary())
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => _cache[28] || (_cache[28] = [
                          createTextVNode("Print visit summary", -1)
                        ])),
                        _: 1,
                        __: [28]
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_accordion, {
                value: "third",
                "toggle-icon": "",
                onClick: _cache[7] || (_cache[7] = ($event) => _ctx.printID())
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => _cache[29] || (_cache[29] = [
                          createTextVNode("Print client identifier", -1)
                        ])),
                        _: 1,
                        __: [29]
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ion_accordion, { value: "fourth" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, null, {
                        default: withCtx(() => _cache[30] || (_cache[30] = [
                          createTextVNode("Update outcome", -1)
                        ])),
                        _: 1,
                        __: [30]
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_47, [
                    createVNode(_component_ion_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_toggle, {
                              checked: _ctx.selectedStatus == 7,
                              value: "active",
                              onIonChange: _cache[8] || (_cache[8] = ($event) => _ctx.updateState(7))
                            }, {
                              default: withCtx(() => _cache[31] || (_cache[31] = [
                                createTextVNode(" Active ", -1)
                              ])),
                              _: 1,
                              __: [31]
                            }, 8, ["checked"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_toggle, {
                              checked: _ctx.selectedStatus == 6,
                              value: "inactive",
                              onIonChange: _cache[9] || (_cache[9] = ($event) => _ctx.updateState(6))
                            }, {
                              default: withCtx(() => _cache[32] || (_cache[32] = [
                                createTextVNode(" Inactive ", -1)
                              ])),
                              _: 1,
                              __: [32]
                            }, 8, ["checked"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_ion_toggle, {
                              checked: _ctx.selectedStatus == 3,
                              value: "died",
                              onIonChange: _cache[10] || (_cache[10] = ($event) => _ctx.updateState(3))
                            }, {
                              default: withCtx(() => _cache[33] || (_cache[33] = [
                                createTextVNode(" Died ", -1)
                              ])),
                              _: 1,
                              __: [33]
                            }, 8, ["checked"])
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
        ])
      ]),
      _: 1
    }, 8, ["is-open", "event"])
  ], 64);
}
const PatientProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f844635c"]]);

export { PatientProfile as default };
