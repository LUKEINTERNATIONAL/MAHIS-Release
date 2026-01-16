import { q as defineComponent, ar as script, bs as IonPage, bc as IonFooter, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, aD as IonContent, e2 as createOutline, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, A as createBaseVNode, G as createCommentVNode, R as withDirectives, e3 as vModelCheckbox, C as toDisplayString } from './vendor-wM1cIaYi.js';
import { S as SmsService } from './sms_service-ClAKvv_f.js';
import { B as BasicForm } from './BasicForm-DX-txDz0.js';
import { B as BasicInputField, F as DynamicButton, T as Toolbar, G as toastSuccess, t as toastWarning, H as HisDate, _ as _export_sfc } from '../index-CN2ETx8y.js';
import { F as FacilityInformationBar } from './FacilityInformationBar-CCOL_sb3.js';

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicForm,
    Toolbar,
    DynamicButton,
    IonFooter,
    IonPage,
    FacilityInformationBar,
    BasicInputField,
    VueMultiselect: script
  },
  data() {
    return {
      configData: {
        url: "",
        apiKey: "",
        reminderMessage: "",
        cancelMessage: "",
        reminderPeriod: "",
        smsReminder: false,
        smsActivation: false,
        smsPopup: false
      },
      selectedPeriod: [],
      periodOptions: [
        { name: "Instant reminder", value: "Instant reminder" },
        { name: "1 day before", value: "1 day before" },
        { name: "2 days before", value: "2 days before" },
        { name: "3 days before", value: "3 days before" },
        { name: "4 days before", value: "4 days before" },
        { name: "5 days before", value: "5 days before" },
        { name: "6 days before", value: "6 days before" },
        { name: "7 days before", value: "7 days before" }
      ]
    };
  },
  setup() {
    return { createOutline };
  },
  async mounted() {
    const configs = await SmsService.getConfigurations();
    this.updateConfigData(configs);
  },
  methods: {
    updateConfigData(data) {
      this.configData.url = data.sms_gateway_url;
      this.configData.apiKey = data.sms_api_key;
      this.configData.smsReminder = data.sms_reminder;
      this.configData.reminderMessage = data.next_appointment_message;
      this.configData.cancelMessage = data.cancel_appointment_message;
      this.configData.reminderPeriod = data.next_appointment_reminder_period;
      this.configData.smsActivation = data.sms_activation;
      this.configData.smsPopup = data.show_sms_popup;
      this.selectedPeriod = this.periodOptions.find(
        (option) => option.value === data.next_appointment_reminder_period
      );
    },
    toggleSwitch(field) {
      this.configData[field] = this.configData[field];
    },
    handleSelectedData(selected) {
      this.configData.reminderPeriod = selected.value;
    },
    handleInputData(event, field) {
      this.configData[field] = event.target.value;
    },
    handleInputKeyUp(event, elementid) {
      const previewElement = document.getElementById(elementid);
      if (previewElement) {
        previewElement.innerHTML = "";
      }
    },
    handleInputDatachange(event, elementid) {
      const previewElement = document.getElementById(elementid);
      if (previewElement) {
        previewElement.innerHTML = `<b>Preview of the message to be sent</b> </br>${event.target.value} ${HisDate.currentDisplayDate()}`;
      }
    },
    async onSubmit() {
      try {
        const configs = await SmsService.setConfigurations(this.configData);
        this.updateConfigData(configs.message);
        toastSuccess("Successfully updated configuration file");
      } catch (e) {
        toastWarning(`${e}`);
      }
    }
  }
});

const _hoisted_1 = { class: "positionCenter" };
const _hoisted_2 = { class: "card_content" };
const _hoisted_3 = { class: "switch-container" };
const _hoisted_4 = { class: "switch" };
const _hoisted_5 = { class: "label-text" };
const _hoisted_6 = { class: "switch-container" };
const _hoisted_7 = { class: "switch" };
const _hoisted_8 = { class: "label-text" };
const _hoisted_9 = { class: "switch-container" };
const _hoisted_10 = { class: "switch" };
const _hoisted_11 = { class: "label-text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_BasicInputField = resolveComponent("BasicInputField");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_textarea = resolveComponent("ion-textarea");
  const _component_vue_multiselect = resolveComponent("vue-multiselect");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ion_card, { class: "registration_ion_card" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  _cache[26] || (_cache[26] = createBaseVNode("div", { class: "card_hearder" }, "SMS CONFIGURATION", -1)),
                  createVNode(_component_ion_row, { class: "form-row" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_BasicInputField, {
                            modelValue: _ctx.configData.url,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.configData.url = $event),
                            inputValue: _ctx.configData.url,
                            placeholder: "Gateway url",
                            "onUpdate:inputValue": _cache[1] || (_cache[1] = ($event) => _ctx.handleInputData($event, "url")),
                            icon: _ctx.createOutline
                          }, null, 8, ["modelValue", "inputValue", "icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_row, { class: "form-row" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_BasicInputField, {
                            modelValue: _ctx.configData.apiKey,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.configData.apiKey = $event),
                            inputValue: _ctx.configData.apiKey,
                            placeholder: "Gateway API Key",
                            "onUpdate:inputValue": _cache[3] || (_cache[3] = ($event) => _ctx.handleInputData($event, "apiKey")),
                            icon: _ctx.createOutline,
                            inputType: "password"
                          }, null, 8, ["modelValue", "inputValue", "icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_row, { class: "form-row" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_3, [
                            createBaseVNode("label", _hoisted_4, [
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.configData.smsReminder = $event),
                                onChange: _cache[5] || (_cache[5] = ($event) => _ctx.toggleSwitch("smsReminder"))
                              }, null, 544), [
                                [vModelCheckbox, _ctx.configData.smsReminder]
                              ]),
                              _cache[21] || (_cache[21] = createBaseVNode("span", { class: "slider round" }, null, -1))
                            ]),
                            createBaseVNode("span", _hoisted_5, toDisplayString(_ctx.configData.smsReminder ? "SMS Reminder turned ON" : "SMS Reminder turned OFF"), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  _ctx.configData.smsReminder ? (openBlock(), createBlock(_component_ion_row, {
                    key: 0,
                    class: "form-row"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_textarea, {
                            class: "custom",
                            modelValue: _ctx.configData.reminderMessage,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.configData.reminderMessage = $event),
                            value: _ctx.configData.reminderMessage,
                            label: "Reminder Message",
                            "label-placement": "floating",
                            onIonInput: _cache[7] || (_cache[7] = ($event) => _ctx.handleInputData($event, "reminderMessage")),
                            onIonBlur: _cache[8] || (_cache[8] = ($event) => _ctx.handleInputKeyUp($event, "reminder_preview")),
                            onInput: _cache[9] || (_cache[9] = ($event) => _ctx.handleInputDatachange($event, "reminder_preview")),
                            onIonFocus: _cache[10] || (_cache[10] = ($event) => _ctx.handleInputDatachange($event, "reminder_preview")),
                            placeholder: "Add Reminder message",
                            "auto-grow": true,
                            fill: "outline"
                          }, null, 8, ["modelValue", "value"]),
                          _cache[22] || (_cache[22] = createBaseVNode("div", {
                            id: "reminder_preview",
                            style: { "background-color": "beige", "font-style": "italic", "color": "orange" }
                          }, null, -1))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  _ctx.configData.smsReminder ? (openBlock(), createBlock(_component_ion_row, {
                    key: 1,
                    class: "form-row"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_textarea, {
                            class: "custom",
                            modelValue: _ctx.configData.cancelMessage,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.configData.cancelMessage = $event),
                            value: _ctx.configData.cancelMessage,
                            label: "Cancel Appointment Message",
                            "label-placement": "floating",
                            onIonInput: _cache[12] || (_cache[12] = ($event) => _ctx.handleInputData($event, "cancelMessage")),
                            onIonBlur: _cache[13] || (_cache[13] = ($event) => _ctx.handleInputKeyUp($event, "appointment_preview")),
                            onInput: _cache[14] || (_cache[14] = ($event) => _ctx.handleInputDatachange($event, "appointment_preview")),
                            onIonFocus: _cache[15] || (_cache[15] = ($event) => _ctx.handleInputDatachange($event, "appointment_preview")),
                            placeholder: "Add Cancel appointment message",
                            "auto-grow": true,
                            fill: "outline"
                          }, null, 8, ["modelValue", "value"]),
                          _cache[23] || (_cache[23] = createBaseVNode("div", {
                            id: "appointment_preview",
                            style: { "background-color": "beige", "font-style": "italic", "color": "orange" }
                          }, null, -1))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  _ctx.configData.smsReminder ? (openBlock(), createBlock(_component_ion_row, {
                    key: 2,
                    class: "form-row"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_vue_multiselect, {
                            modelValue: _ctx.selectedPeriod,
                            "onUpdate:modelValue": [
                              _cache[16] || (_cache[16] = ($event) => _ctx.selectedPeriod = $event),
                              _ctx.handleSelectedData
                            ],
                            options: _ctx.periodOptions,
                            multiple: false,
                            "max-height": 150,
                            "hide-selected": false,
                            "close-on-select": true,
                            searchable: true,
                            "track-by": "name",
                            label: "name",
                            "open-direction": "bottom",
                            placeholder: "Select reminder period"
                          }, null, 8, ["modelValue", "options", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_ion_row, { class: "form-row" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("label", _hoisted_7, [
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => _ctx.configData.smsActivation = $event),
                                onChange: _cache[18] || (_cache[18] = ($event) => _ctx.toggleSwitch("smsActivation"))
                              }, null, 544), [
                                [vModelCheckbox, _ctx.configData.smsActivation]
                              ]),
                              _cache[24] || (_cache[24] = createBaseVNode("span", { class: "slider round" }, null, -1))
                            ]),
                            createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.configData.smsActivation ? "SMS notification turned ON" : "SMS notification turned OFF"), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_row, { class: "form-row" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_col, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("label", _hoisted_10, [
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => _ctx.configData.smsPopup = $event),
                                onChange: _cache[20] || (_cache[20] = ($event) => _ctx.toggleSwitch("smsPopup"))
                              }, null, 544), [
                                [vModelCheckbox, _ctx.configData.smsPopup]
                              ]),
                              _cache[25] || (_cache[25] = createBaseVNode("span", { class: "slider round" }, null, -1))
                            ]),
                            createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.configData.smsPopup ? "Reminder popup turned ON" : "Reminder popup turned OFF"), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", null, [
                    createVNode(_component_DynamicButton, {
                      onClick: _ctx.onSubmit,
                      name: "Save",
                      fill: "solid",
                      iconSlot: "icon-only",
                      style: { "float": "right" }
                    }, null, 8, ["onClick"])
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const SmsConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dc6e95d3"]]);

export { SmsConfig as default };
