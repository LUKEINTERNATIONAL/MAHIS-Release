import { s as defineComponent, a2 as onMounted, w as watch, y as openBlock, z as createElementBlock, C as createBaseVNode, J as Fragment, R as renderList, A as createVNode, B as withCtx, a5 as createTextVNode, D as toDisplayString, F as unref, ae as IonCheckbox, f as ref, f8 as fileTrayFull, ds as calendar, f9 as settings, cl as pulse, cc as flask, fa as heartCircle, fb as woman, O as createBlock, aG as IonContent, bL as IonCard, bd as IonCardContent, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, L as IonIcon, a7 as IonLabel, M as IonSpinner, H as createCommentVNode, ap as IonList, av as IonToggle, ac as IonNote, a6 as IonInput, bu as IonPage } from './vendor-DoVhRvhx.js';
import { _ as _export_sfc, ca as GlobalPropName, ab as GlobalPropertyService, T as Toolbar, bD as BasicFacilitySelector } from '../index-B2VBKWE_.js';

const _hoisted_1$1 = { class: "clinic-days-selector" };
const _hoisted_2$1 = { class: "days-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ClinicDaysSelector",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const weekDays = [
      { label: "Monday", value: "Monday" },
      { label: "Tuesday", value: "Tuesday" },
      { label: "Wednesday", value: "Wednesday" },
      { label: "Thursday", value: "Thursday" },
      { label: "Friday", value: "Friday" },
      { label: "Saturday", value: "Saturday" },
      { label: "Sunday", value: "Sunday" }
    ];
    const selectedDays = ref([]);
    onMounted(() => {
      if (props.modelValue) {
        try {
          try {
            const parsed = JSON.parse(props.modelValue);
            if (Array.isArray(parsed)) {
              selectedDays.value = parsed;
            } else {
              selectedDays.value = props.modelValue.split(",").map((day) => day.trim());
            }
          } catch {
            selectedDays.value = props.modelValue.split(",").map((day) => day.trim());
          }
        } catch (error) {
          console.error("Error parsing clinic days:", error);
          selectedDays.value = [];
        }
      }
    });
    const toggleDay = (day) => {
      const index = selectedDays.value.indexOf(day);
      if (index === -1) {
        selectedDays.value.push(day);
      } else {
        selectedDays.value.splice(index, 1);
      }
      const daysString = selectedDays.value.join(",");
      emit("update:modelValue", daysString);
      emit("change", daysString);
    };
    watch(() => props.modelValue, (newValue) => {
      if (newValue) {
        try {
          try {
            const parsed = JSON.parse(newValue);
            if (Array.isArray(parsed)) {
              selectedDays.value = parsed;
            } else {
              selectedDays.value = newValue.split(",").map((day) => day.trim());
            }
          } catch {
            selectedDays.value = newValue.split(",").map((day) => day.trim());
          }
        } catch (error) {
          console.error("Error parsing clinic days:", error);
          selectedDays.value = [];
        }
      } else {
        selectedDays.value = [];
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(weekDays, (day) => {
            return createBaseVNode("div", {
              key: day.value,
              class: "day-checkbox"
            }, [
              createVNode(unref(IonCheckbox), {
                value: day.value,
                checked: selectedDays.value.includes(day.value),
                onIonChange: ($event) => toggleDay(day.value),
                labelPlacement: "end"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(day.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "checked", "onIonChange"])
            ]);
          }), 64))
        ])
      ]);
    };
  }
});

const ClinicDaysSelector = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-95b0e034"]]);

const _hoisted_1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 2 };
const _hoisted_5 = { class: "ion-padding" };
const _hoisted_6 = { key: 3 };
const _hoisted_7 = { class: "ion-padding" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ARTPreferences",
  setup(__props) {
    const configStates = ref({});
    const saveToggleProperty = async (value, id, configTitle) => {
      if (configStates.value[configTitle]) {
        const boolValue = Boolean(value);
        configStates.value[configTitle].data[id] = boolValue;
        configStates.value[configTitle].isLoading = true;
        configStates.value[configTitle].statusMessage = void 0;
        try {
          await GlobalPropertyService.set(id, boolValue ? "true" : "false");
          console.log(`Successfully saved ${id} with value: ${boolValue}`);
        } catch (error) {
          console.error(`Error saving ${id}:`, error);
          configStates.value[configTitle].statusMessage = `Failed to save: ${error instanceof Error ? error.message : "Unknown error"}`;
        } finally {
          configStates.value[configTitle].isLoading = false;
        }
      }
    };
    const saveInputProperty = async (value, id, configTitle, validateNumeric = false) => {
      if (configStates.value[configTitle]) {
        configStates.value[configTitle].data[id] = value;
        configStates.value[configTitle].isLoading = true;
        configStates.value[configTitle].statusMessage = void 0;
        try {
          let valueToSave = value;
          if (value && typeof value === "object" && "value" in value) {
            valueToSave = value.label;
          }
          if (validateNumeric && typeof valueToSave === "string") {
            const numValue = Number(valueToSave);
            if (isNaN(numValue)) {
              configStates.value[configTitle].statusMessage = "Please enter a valid number";
              configStates.value[configTitle].isLoading = false;
              return;
            }
          }
          await GlobalPropertyService.set(id, valueToSave);
        } catch (error) {
          console.error(`Error saving ${id}:`, error);
          configStates.value[configTitle].statusMessage = `Failed to save: ${error instanceof Error ? error.message : "Unknown error"}`;
        } finally {
          configStates.value[configTitle].isLoading = false;
        }
      }
    };
    const configurations = [
      {
        icon: fileTrayFull,
        title: "Filing Numbers",
        options: [
          {
            id: GlobalPropName.FILING_NUMBERS,
            title: "Enabled Filing Number",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: GlobalPropName.FILING_NUMBER_LIMIT,
            title: "Filing Number Limit",
            type: "input",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => {
              const limitValue = Number(value);
              if (isNaN(limitValue)) {
                configStates.value[configTitle].statusMessage = "Please enter a valid number";
                return;
              }
              if (limitValue < 1 || limitValue > 1e3) {
                configStates.value[configTitle].statusMessage = "Filing number limit should be between 1 and 1000";
                return;
              }
              saveInputProperty(value, id, configTitle, true);
            }
          }
        ]
      },
      {
        icon: calendar,
        title: "Appointments",
        options: [
          {
            id: GlobalPropName.APPOINTMENT_LIMIT,
            title: "Appointment Limit",
            type: "input",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => {
              const limitValue = Number(value);
              if (isNaN(limitValue)) {
                configStates.value[configTitle].statusMessage = "Please enter a valid number";
                return;
              }
              if (limitValue < 1 || limitValue > 500) {
                configStates.value[configTitle].statusMessage = "Appointment limit should be between 1 and 500";
                return;
              }
              saveInputProperty(value, id, configTitle, true);
            }
          },
          {
            id: GlobalPropName.ADULT_CLINIC_DAYS,
            title: "Clinic days (adults: 18 yrs and over)",
            type: "clinic-days",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => saveInputProperty(value, id, configTitle, false)
          },
          {
            id: GlobalPropName.PEADS_CLINIC_DAYS,
            title: "Clinic days (children: Under 18 yrs)",
            type: "clinic-days",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => saveInputProperty(value, id, configTitle, false)
          }
        ]
      },
      {
        icon: settings,
        title: "Clinic Preferences",
        options: [
          {
            id: GlobalPropName.IS_DIC_SITE,
            title: "Is Military Site",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          }
        ]
      },
      {
        icon: pulse,
        title: "Viral load Preferences",
        options: [
          {
            id: GlobalPropName.VL_ROUTINE_CHECK,
            title: "Activate VL routine check",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: GlobalPropName.CAN_SCAN_DBS_BARCODE,
            title: "Scan DBS barcode",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          }
        ]
      },
      {
        icon: flask,
        title: "Lab preferences",
        options: [
          {
            id: GlobalPropName.EXTENDED_LABS,
            title: "Activate Extended Labs",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: GlobalPropName.TARGET_LAB,
            title: "Target lab",
            type: "facility",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => saveInputProperty(value, id, configTitle, false)
          },
          {
            id: GlobalPropName.LAB_ORDER_PRINT_COPIES,
            title: "Specify number of copies to print after an order",
            type: "input",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => {
              const copiesValue = Number(value);
              if (isNaN(copiesValue)) {
                configStates.value[configTitle].statusMessage = "Please enter a valid number";
                return;
              }
              if (copiesValue < 1 || copiesValue > 10) {
                configStates.value[configTitle].statusMessage = "Number of copies should be between 1 and 10";
                return;
              }
              saveInputProperty(value, id, configTitle, true);
            }
          }
        ]
      },
      {
        icon: heartCircle,
        title: "Hypertension Preferences",
        options: [
          {
            id: GlobalPropName.HTN_ENHANCEMENT,
            title: "Activate Hypertension screening",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: GlobalPropName.HTN_DIASTOLIC_THRESHOLD,
            title: "Set diastolic blood pressure minimum threshold",
            type: "input",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => {
              const diastolicValue = Number(value);
              if (isNaN(diastolicValue)) {
                configStates.value[configTitle].statusMessage = "Please enter a valid number";
                return;
              }
              if (diastolicValue < 40 || diastolicValue > 120) {
                configStates.value[configTitle].statusMessage = "Diastolic BP should be between 40 and 120 mmHg";
                return;
              }
              saveInputProperty(value, id, configTitle, true);
            }
          },
          {
            id: GlobalPropName.HTN_SYSTOLIC_THRESHOLD,
            title: "Set systolic blood pressure minimum threshold",
            type: "input",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => {
              const systolicValue = Number(value);
              if (isNaN(systolicValue)) {
                configStates.value[configTitle].statusMessage = "Please enter a valid number";
                return;
              }
              if (systolicValue < 70 || systolicValue > 220) {
                configStates.value[configTitle].statusMessage = "Systolic BP should be between 70 and 220 mmHg";
                return;
              }
              saveInputProperty(value, id, configTitle, true);
            }
          },
          {
            id: GlobalPropName.HTN_SCREENING_AGE_THRESHOLD,
            title: "Set HTN Age",
            type: "input",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => {
              const ageValue = Number(value);
              if (isNaN(ageValue)) {
                configStates.value[configTitle].statusMessage = "Please enter a valid number";
                return;
              }
              if (ageValue < 10 || ageValue > 100) {
                configStates.value[configTitle].statusMessage = "Age threshold should be between 10 and 100 years";
                return;
              }
              saveInputProperty(value, id, configTitle, true);
            }
          }
        ]
      },
      {
        icon: woman,
        title: "Cervical Cancer Preferences",
        onOpen: async () => {
          configStates.value["Cervical Cancer Preferences"].data = {
            [GlobalPropName.CERVICAL_CANCER_AGE_BOUNDS]: await GlobalPropertyService.get(GlobalPropName.CERVICAL_CANCER_AGE_BOUNDS) || ""
          };
          const [start, end] = (configStates.value["Cervical Cancer Preferences"].data[GlobalPropName.CERVICAL_CANCER_AGE_BOUNDS] ?? "0:0").split(":").map(Number);
          configStates.value["Cervical Cancer Preferences"].data.min_cervical_age = start;
          configStates.value["Cervical Cancer Preferences"].data.max_cervical_age = end;
        },
        options: [
          {
            id: GlobalPropName.CERVICAL_CANCER_SCREENING,
            title: "Activate Cervical Cancer Screening",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: "min_cervical_age",
            title: "Starting screening age",
            type: "input",
            get: () => configStates.value["Cervical Cancer Preferences"].data.min_cervical_age || "",
            dataHandler: (value, id, configTitle) => {
              const min = Number(value);
              if (isNaN(min)) {
                configStates.value[configTitle].statusMessage = "Please enter valid min age";
                return;
              }
              if (min < 10 || min > 100) {
                configStates.value[configTitle].statusMessage = "Age bounds should be between 10 and 100 years, with the minimum age being less than the maximum age";
                return;
              }
              const max = configStates.value[configTitle].data.max_cervical_age;
              if (max && min >= Number(max)) {
                configStates.value[configTitle].statusMessage = "Minimum age should be less than the maximum age";
                return;
              }
              saveInputProperty(`${min}:${max}`, GlobalPropName.CERVICAL_CANCER_AGE_BOUNDS, configTitle, false);
            }
          },
          {
            id: "max_cervical_age",
            title: "Maximum screening age",
            type: "input",
            get: () => configStates.value["Cervical Cancer Preferences"].data.max_cervical_age || "",
            dataHandler: (value, id, configTitle) => {
              const max = Number(value);
              if (isNaN(max)) {
                configStates.value[configTitle].statusMessage = "Please enter valid max age";
                return;
              }
              if (max < 10 || max > 100) {
                configStates.value[configTitle].statusMessage = "Age bounds should be between 10 and 100 years, with the minimum age being less than the maximum age";
                return;
              }
              const min = configStates.value[configTitle].data.min_cervical_age;
              if (min && max < Number(min)) {
                configStates.value[configTitle].statusMessage = "Maximum age should be less than the minimum age";
                return;
              }
              saveInputProperty(`${min}:${max}`, GlobalPropName.CERVICAL_CANCER_AGE_BOUNDS, configTitle, false);
            }
          }
        ]
      },
      {
        icon: settings,
        title: "Other Preferences",
        options: [
          {
            id: GlobalPropName.PILLS_REMAINING,
            title: "Ask pills remaining at home",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: GlobalPropName.THREE_HP_AUTO_SELECT,
            title: "Activate 3HP auto select",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: GlobalPropName.EXCLUDE_EXTERNAL_AND_DRUG_REFILLS,
            title: "(DATA CLEANING) Exclude External and Emergency supply",
            type: "toggle",
            get: (id) => GlobalPropertyService.isProp(`${id}=true`),
            dataHandler: (value, id, configTitle) => saveToggleProperty(value, id, configTitle)
          },
          {
            id: GlobalPropName.NOTIFICATION_PERIOD,
            title: "Set Auto Cleaning Alert Days",
            type: "input",
            get: (id) => GlobalPropertyService.get(id) || "",
            dataHandler: (value, id, configTitle) => {
              const periodValue = Number(value);
              if (isNaN(periodValue)) {
                configStates.value[configTitle].statusMessage = "Please enter a valid number";
                return;
              }
              if (periodValue < 1 || periodValue > 365) {
                configStates.value[configTitle].statusMessage = "Notification period should be between 1 and 365 days";
                return;
              }
              saveInputProperty(value, id, configTitle, true);
            }
          }
        ]
      }
    ];
    async function handleAccordionChange(option) {
      const config = configurations.find((config2) => config2.title === option);
      if (config) {
        if (!configStates.value[config.title]) {
          configStates.value[config.title] = {
            isLoading: false,
            data: {},
            statusMessage: void 0
          };
        }
        configStates.value[config.title].isLoading = true;
        if (config.onOpen) {
          await config.onOpen().catch((error) => {
            console.error(`Error loading ${config.title} settings:`, error);
            configStates.value[config.title].statusMessage = `Failed to load settings: ${error instanceof Error ? error.message : "Unknown error"}`;
          });
        }
        const res = await Promise.all(
          config.options.map(async (option2) => ({ [option2.id]: await option2.get(option2.id) }))
        );
        configStates.value[config.title].data = {
          ...configStates.value[config.title].data,
          ...res.reduce((acc, curr) => ({ ...acc, ...curr }), {})
        };
        configStates.value[config.title].isLoading = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createVNode(unref(IonCard), { style: { "margin": "0px auto", "width": "70%" } }, {
                default: withCtx(() => [
                  createVNode(unref(IonCardContent), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonAccordionGroup), {
                        onIonChange: _cache[0] || (_cache[0] = (e) => handleAccordionChange(e.detail.value))
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createElementBlock(Fragment, null, renderList(configurations, (config, index) => {
                            return createVNode(unref(IonAccordion), {
                              key: index,
                              class: "ion-padding",
                              value: config.title
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonItem), { slot: "header" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonIcon), {
                                      size: "large",
                                      icon: config.icon
                                    }, null, 8, ["icon"]),
                                    createVNode(unref(IonLabel), { style: { "padding": "10px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(config.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    configStates.value?.[config.title]?.isLoading ?? false ? (openBlock(), createBlock(unref(IonSpinner), {
                                      key: 0,
                                      name: "dots",
                                      size: "small",
                                      slot: "end"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createBaseVNode("div", _hoisted_1, [
                                  createVNode(unref(IonCard), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(IonCardContent), null, {
                                        default: withCtx(() => [
                                          configStates.value?.[config.title]?.data ? (openBlock(), createBlock(unref(IonList), {
                                            key: 0,
                                            style: { "background": "white" }
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createElementBlock(Fragment, null, renderList(config.options, (option) => {
                                                return openBlock(), createElementBlock("div", {
                                                  key: option.id
                                                }, [
                                                  option.type === "toggle" ? (openBlock(), createElementBlock("div", _hoisted_2, [
                                                    createVNode(unref(IonItem), { color: "light" }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(IonLabel), null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(option.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(unref(IonToggle), {
                                                          "onUpdate:modelValue": [(value) => option.dataHandler(value, option.id, config.title), ($event) => configStates.value[config.title].data[option.id] = $event],
                                                          modelValue: configStates.value[config.title].data[option.id],
                                                          size: "large",
                                                          slot: "end",
                                                          "enable-on-off-labels": true
                                                        }, null, 8, ["onUpdate:modelValue", "modelValue"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    configStates.value[config.title]?.statusMessage ? (openBlock(), createBlock(unref(IonNote), {
                                                      key: 0,
                                                      color: "danger"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(configStates.value[config.title]?.statusMessage), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)) : createCommentVNode("", true)
                                                  ])) : createCommentVNode("", true),
                                                  option.type === "input" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                                                    createVNode(unref(IonInput), {
                                                      "label-placement": "stacked",
                                                      onIonChange: (e) => option.dataHandler(e.detail.value, option.id, config.title),
                                                      modelValue: configStates.value[config.title].data[option.id],
                                                      "onUpdate:modelValue": ($event) => configStates.value[config.title].data[option.id] = $event,
                                                      style: { "margin-top": "20px" },
                                                      label: option.title,
                                                      fill: "outline",
                                                      placeholder: "Enter value",
                                                      slot: "end"
                                                    }, null, 8, ["onIonChange", "modelValue", "onUpdate:modelValue", "label"]),
                                                    configStates.value[config.title]?.statusMessage ? (openBlock(), createBlock(unref(IonNote), {
                                                      key: 0,
                                                      color: "danger"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(configStates.value[config.title]?.statusMessage), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)) : createCommentVNode("", true)
                                                  ])) : createCommentVNode("", true),
                                                  option.type === "clinic-days" ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                                    createVNode(unref(IonItem), { color: "light" }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(IonLabel), null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(option.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createBaseVNode("div", _hoisted_5, [
                                                      createVNode(ClinicDaysSelector, {
                                                        modelValue: configStates.value[config.title].data[option.id],
                                                        "onUpdate:modelValue": ($event) => configStates.value[config.title].data[option.id] = $event,
                                                        onChange: (value) => option.dataHandler(value, option.id, config.title)
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                                                      configStates.value[config.title]?.statusMessage ? (openBlock(), createBlock(unref(IonNote), {
                                                        key: 0,
                                                        color: "danger"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(configStates.value[config.title]?.statusMessage), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true)
                                                    ])
                                                  ])) : createCommentVNode("", true),
                                                  option.type === "facility" ? (openBlock(), createElementBlock("div", _hoisted_6, [
                                                    createVNode(unref(IonItem), { color: "light" }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(IonLabel), null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(option.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createBaseVNode("div", _hoisted_7, [
                                                      createVNode(BasicFacilitySelector, {
                                                        label: configStates.value[config.title].data[option.id]?.label ?? configStates.value[config.title].data[option.id],
                                                        modelValue: configStates.value[config.title].data[option.id],
                                                        "onUpdate:modelValue": ($event) => configStates.value[config.title].data[option.id] = $event,
                                                        onOnChange: (val) => option.dataHandler(val, option.id, config.title),
                                                        "error-message": configStates.value[config.title]?.statusMessage
                                                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "onOnChange", "error-message"])
                                                    ])
                                                  ])) : createCommentVNode("", true)
                                                ]);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
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
      });
    };
  }
});

export { _sfc_main as default };
