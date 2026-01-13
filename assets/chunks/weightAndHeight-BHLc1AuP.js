import { q as defineComponent, a6 as IonInput, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, H as IonContent, K as modalController, aF as menuController, bo as pulseOutline, b8 as checkmark, v as resolveComponent, x as createElementBlock, G as createCommentVNode, y as openBlock, B as createBaseVNode, O as createBlock, a5 as createTextVNode, C as toDisplayString, z as createVNode, A as withCtx, L as IonIcon, N as IonButton, ay as IonCol, af as IonRow, br as IonPage } from './vendor-BPW-J91F.js';
import { n as icons, l as PreviousVitals, B as BasicInputField, J as savePatientRecord, a2 as getFieldValue, u as useDemographicsStore, H as HisDate, _ as _export_sfc, b8 as BMIService, a1 as modifyFieldValue, S as Service, bT as VitalsService, G as toastSuccess, t as toastWarning, cf as useWeightHeightVitalsStore } from '../index-Be0fRy6M.js';
import { d as defineStore, m as mapState } from './pinia-D-q2_lrU.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';
import { B as BasicForm } from './BasicForm-BLwSyTyY.js';
import { c as customDatePicker } from './customDatePicker-OPjIPQ0x.js';
import { _ as _sfc_main$2 } from './VitalsMixin.vue_vue_type_script_lang-C-2Smk_7.js';
import { f as formatInputFiledData } from './formatServerData-B7mrN0Ov.js';

const initialVitals = [
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Systolic Pressure",
              unit: "mmHg",
              icon: icons.systolicPressure,
              value: "",
              name: "Systolic",
              required: true,
              eventType: "input",
              disabled: false,
              valueType: "number",
              validationFunctionName: "vitalsSystolic"
            },
            {
              inputHeader: "Diastolic pressure",
              unit: "mmHg",
              icon: icons.diastolicPressure,
              value: "",
              name: "Diastolic",
              required: true,
              eventType: "input",
              disabled: false,
              valueType: "number",
              validationFunctionName: "vitalsDiastolic"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "bp",
        index: ""
      }
    ],
    previousView: {
      name: "vitals"
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Temperature",
              unit: "C",
              icon: icons.temprature,
              value: "",
              name: "Temperature",
              eventType: "input",
              validationFunctionName: "vitalsTemperature",
              valueType: "number"
            },
            {
              inputHeader: "Pulse rate",
              unit: "BMP",
              icon: icons.pulse,
              value: "",
              name: "Pulse",
              eventType: "input",
              validationFunctionName: "vitalsPulseRate",
              valueType: "number"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "temp",
        index: ""
      },
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "pulse",
        index: ""
      }
    ]
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Respiratory rate",
              unit: "BMP",
              icon: icons.respiratory,
              value: "",
              name: "Respiratory rate",
              eventType: "input",
              validationFunctionName: "vitalsRespiratoryRate",
              valueType: "number"
            },
            {
              inputHeader: "Oxygen saturation",
              unit: "%",
              icon: icons.oxgenStaturation,
              value: "",
              name: "SAO2",
              eventType: "input",
              validationFunctionName: "vitalsOxygenSaturation",
              valueType: "number"
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "respiratory",
        index: ""
      },
      {
        backgroundColor: "",
        status: "",
        icon: "",
        textColor: "",
        value: "",
        name: "oxygen",
        index: ""
      }
    ]
  }
];
const useVitalsStore = defineStore("immunizationVitalsStore", {
  state: () => ({
    vitals: [...initialVitals]
  }),
  actions: {
    setVitals(data) {
      this.vitals = data;
    },
    getInitialVitals() {
      const data = lodashExports.cloneDeep(initialVitals);
      return [...data];
    }
  },
  persist: true
});

const _sfc_main$1 = defineComponent({
  mixins: [_sfc_main$2],
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
    customDatePicker
  },
  data() {
    return {
      iconsContent: icons,
      vValidations: "",
      hasValidationErrors: [],
      vitalsInstance: {},
      validationStatus: { heightWeight: false, bloodPressure: false, pulseRate: false },
      showPD: false,
      todays_date: HisDate.sessionDate(),
      formOpen: true
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useVitalsStore, ["vitals"])
  },
  async serverPrefetch() {
    this.updateVitalsStores();
  },
  async mounted() {
    this.cleanVitalForm();
    this.vitalsData = this.vitals;
    await this.setTodayVitals();
    await this.validateRowData();
  },
  watch: {
    vitals: {
      handler() {
        this.vitalsData = this.vitals;
      },
      deep: true
    },
    $route: {
      handler() {
        this.cleanVitalForm();
        this.vitalsData = this.vitals;
      }
    }
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    cleanVitalForm() {
      const vitals = useVitalsStore();
      vitals.setVitals(vitals.getInitialVitals());
    },
    navigationMenu(url) {
      menuController.close();
      this.$router.push(url);
    },
    updateVitalsStores() {
      const vitalsStore = useVitalsStore();
      vitalsStore.setVitals(this.vitals);
    },
    async validateRowData() {
      const height = getFieldValue(this.vitals, "Height (cm)", "value");
      const weight = getFieldValue(this.vitals, "Weight", "value");
      const systolic = getFieldValue(this.vitals, "Systolic", "value");
      const diastolic = getFieldValue(this.vitals, "Diastolic", "value");
      const temp = getFieldValue(this.vitals, "Temperature", "value");
      const pulse = getFieldValue(this.vitals, "Pulse", "value");
      const respiratoryRate = getFieldValue(this.vitals, "Respiratory rate", "value");
      const SAO2 = getFieldValue(this.vitals, "SAO2", "value");
      await this.setBMI(height, weight);
      await this.updateBP(systolic, diastolic);
      const pulseStatus = this.getPulseRateStatus(pulse);
      await this.updateRate("pulse", pulse, " BMP", pulseStatus, 4);
      const tempStatus = this.getTemperatureStatus(temp);
      this.updateRate("temp", temp, "°C", tempStatus, 4);
      const respiratoryStatus = this.getRespiratoryRateStatus(respiratoryRate);
      this.updateRate("respiratory", respiratoryRate, "BMP", respiratoryStatus, 6);
      const oxygenStatus = this.getOxygenSaturationStatus(SAO2);
      this.updateRate("oxygen", SAO2, "%", oxygenStatus, 6);
    },
    showCPD() {
      this.showPD = true;
    },
    closeForm() {
      this.formOpen = false;
    },
    async saveVitals() {
      modalController.dismiss();
      const newVitals = await formatInputFiledData(this.vitals);
      if (newVitals.length > 0) {
        let vitals = this.patient?.vitals;
        vitals.unsaved = [...vitals.unsaved, ...newVitals];
        await savePatientRecord(this.patient);
      }
    }
  }
});

const _hoisted_1$1 = {
  key: 0,
  class: "modal_wrapper"
};
const _hoisted_2$1 = { class: "OtherVitalsHeading" };
const _hoisted_3$1 = { class: "TodaysDate" };
const _hoisted_4$1 = { class: "" };
const _hoisted_5$1 = { class: "btnContent" };
const _hoisted_6 = { class: "saveBtn" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_customDatePicker = resolveComponent("customDatePicker");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  return _ctx.formOpen ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _cache[3] || (_cache[3] = createBaseVNode("div", { class: "OtherVitalsTitle" }, "OTHER VITALS", -1)),
      createBaseVNode("div", _hoisted_3$1, [
        _cache[1] || (_cache[1] = createTextVNode("Todays Date: ", -1)),
        _cache[2] || (_cache[2] = createBaseVNode("span", null, null, -1)),
        createTextVNode(" " + toDisplayString(_ctx.todays_date), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_4$1, [
      createVNode(_component_basic_form, {
        contentData: _ctx.vitals,
        "onUpdate:inputValue": _cache[0] || (_cache[0] = ($event) => _ctx.validateRowData())
      }, null, 8, ["contentData"])
    ]),
    _ctx.showPD ? (openBlock(), createBlock(_component_customDatePicker, { key: 0 })) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_5$1, [
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", null, [
          createVNode(_component_ion_button, {
            class: "btnText",
            fill: "solid",
            onClick: _ctx.saveVitals
          }, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createTextVNode(" Done today ", -1)),
              createVNode(_component_ion_icon, {
                slot: "end",
                size: "small",
                icon: _ctx.iconsContent.calenderwithPlus
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _cache[6] || (_cache[6] = createBaseVNode("div", null, null, -1)),
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
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ])
  ])) : createCommentVNode("", true);
}
const OtherVitals = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-07214b1e"]]);

const _sfc_main = defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    BasicForm,
    customDatePicker
  },
  data() {
    return {
      popoverOpen: false,
      iconContent: icons,
      event: null,
      BMI: "",
      showPD: false,
      vitals_date: HisDate.toStandardHisFormat(HisDate.sessionDate()),
      formOpen: true,
      checkUnderSixWeeks: false,
      showDateBtns: true
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useWeightHeightVitalsStore, ["vitalsWeightHeight"])
  },
  watch: {
    patient: {
      async handler() {
        this.checkAge();
      }
    }
  },
  mounted() {
    this.checkAge();
  },
  setup() {
  },
  methods: {
    checkAge() {
      if (!lodashExports.isEmpty(this.patient?.personInformation?.birthdate)) {
        this.checkUnderSixWeeks = HisDate.dateDiffInDays(HisDate.sessionDate(), this.patient?.personInformation?.birthdate) < 42 ? true : false;
        this.controlHeight();
      }
    },
    nav(url) {
      this.$router.push(url);
    },
    formatBirthdate() {
      return HisDate.getBirthdateAge(this.patient?.personInformation?.birthdate);
    },
    controlHeight() {
      if (this.checkUnderSixWeeks) {
        modifyFieldValue(this.vitalsWeightHeight, "Height (cm)", "inputHeader", "Height");
        modifyFieldValue(this.vitalsWeightHeight, "Height (cm)", "inputDisplayNone", true);
      } else {
        modifyFieldValue(this.vitalsWeightHeight, "Height (cm)", "inputDisplayNone", false);
      }
    },
    async validaterowData(event) {
      const userID = Service.getUserID();
      const vitalsInstance = new VitalsService(this.patient.patientID, userID);
      const weightValue = getFieldValue(this.vitalsWeightHeight, "weight", "value");
      const heightValue = getFieldValue(this.vitalsWeightHeight, "Height (cm)", "value");
      const height = vitalsInstance.validator({ inputHeader: "Height*", value: heightValue });
      const weight = vitalsInstance.validator({ inputHeader: "Weight*", value: weightValue });
      if (height && heightValue) {
        modifyFieldValue(this.vitalsWeightHeight, "Height (cm)", "alertsErrorMassage", height.flat(Infinity)[0]);
      } else {
        modifyFieldValue(this.vitalsWeightHeight, "Height (cm)", "alertsErrorMassage", "");
      }
      if (weight && weightValue) {
        modifyFieldValue(this.vitalsWeightHeight, "weight", "alertsErrorMassage", weight.flat(Infinity)[0]);
      } else {
        modifyFieldValue(this.vitalsWeightHeight, "weight", "alertsErrorMassage", "");
      }
      this.setBMI(weightValue, heightValue);
    },
    async saveVitals() {
      const userID = Service.getUserID();
      const vitalsInstance = new VitalsService(this.patient.patientID, userID);
      const weightValue = getFieldValue(this.vitalsWeightHeight, "weight", "value");
      getFieldValue(this.vitalsWeightHeight, "Height (cm)", "value");
      let height = null;
      const weight = vitalsInstance.validator({ inputHeader: "Weight*", value: weightValue });
      const newVitals = await formatInputFiledData(this.vitalsWeightHeight, this.vitals_date);
      if (newVitals.length > 0 && weight == null && height == null) {
        const patientData = JSON.parse(JSON.stringify(this.patient));
        let vitals = patientData?.vitals;
        vitals.unsaved = [...vitals.unsaved, ...newVitals];
        await savePatientRecord(patientData);
        toastSuccess("Vitals saved successful");
        this.cleanInputFields();
      } else {
        toastWarning("Please complete the form");
      }
    },
    cleanInputFields() {
      modifyFieldValue(this.vitalsWeightHeight, "weight", "value", "");
      modifyFieldValue(this.vitalsWeightHeight, "Height (cm)", "value", "");
      this.dismiss();
    },
    dismiss() {
      modalController.dismiss();
    },
    async setBMI(weight, height) {
      if (this.patient?.personInformation?.gender && this.patient?.personInformation?.birthdate) {
        this.BMI = await BMIService.getBMI(
          parseInt(weight),
          parseInt(height),
          this.patient?.personInformation?.gender,
          HisDate.calculateAge(this.patient?.personInformation?.birthdate, HisDate.sessionDate())
        );
      }
      this.updateBMI();
    },
    async updateBMI() {
      const bmiColor = this.BMI?.color ?? [];
      const vitalsWeightHeight = this.vitalsWeightHeight[0].alerts[0];
      vitalsWeightHeight.icon = BMIService.iconBMI(bmiColor);
      vitalsWeightHeight.backgroundColor = bmiColor[0];
      vitalsWeightHeight.textColor = bmiColor[1];
      vitalsWeightHeight.index = "BMI " + (this.BMI?.index ?? "");
      vitalsWeightHeight.value = this.BMI?.result ?? "";
    },
    showCPD() {
      this.showPD = true;
      this.showDateBtns = false;
    },
    updateDate(date) {
      this.vitals_date = HisDate.toStandardHisFormat(date);
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "pim-cls-1 modal_wrapper"
};
const _hoisted_2 = { class: "center text_12" };
const _hoisted_3 = { class: "btnContent" };
const _hoisted_4 = {
  key: 0,
  class: "saveBtn"
};
const _hoisted_5 = {
  key: 1,
  class: "saveBtn"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_customDatePicker = resolveComponent("customDatePicker");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  return _ctx.formOpen ? (openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[7] || (_cache[7] = createBaseVNode("div", { class: "OtherVitalsHeading" }, [
      createBaseVNode("div", { class: "OtherVitalsTitle" }, "Add Weight/Height")
    ], -1)),
    createBaseVNode("div", null, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_BasicForm, {
              contentData: _ctx.vitalsWeightHeight,
              "onUpdate:inputValue": _cache[0] || (_cache[0] = ($event) => _ctx.validaterowData($event))
            }, null, 8, ["contentData"])
          ]),
          _: 1
        })
      ])
    ]),
    _ctx.showPD ? (openBlock(), createBlock(_component_customDatePicker, {
      key: 0,
      onDateChange: _ctx.updateDate
    }, null, 8, ["onDateChange"])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_3, [
      _ctx.showDateBtns ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createBaseVNode("div", null, [
          createVNode(_component_ion_button, {
            class: "btnText",
            fill: "solid",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.saveVitals())
          }, {
            default: withCtx(() => [
              _cache[3] || (_cache[3] = createTextVNode(" Done today ", -1)),
              createVNode(_component_ion_icon, {
                slot: "end",
                size: "small",
                icon: _ctx.iconContent.calenderwithPlus
              }, null, 8, ["icon"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", null, [
          createVNode(_component_ion_button, {
            class: "btnText",
            fill: "solid",
            onClick: _ctx.showCPD
          }, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createTextVNode(" Done earlier ", -1)),
              createVNode(_component_ion_icon, {
                slot: "end",
                size: "small",
                icon: _ctx.iconContent.calenderWithPenEdit
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])) : createCommentVNode("", true),
      !_ctx.showDateBtns ? (openBlock(), createElementBlock("div", _hoisted_5, [
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
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode(" Cancel ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, { size: "auto" }, {
              default: withCtx(() => [
                createVNode(_component_ion_button, {
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.saveVitals()),
                  class: "btnText",
                  fill: "solid",
                  style: { "width": "130px" }
                }, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createTextVNode(" Save ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ])
  ])) : createCommentVNode("", true);
}
const weightAndHeight = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-656b29db"]]);

export { OtherVitals as O, weightAndHeight as w };
