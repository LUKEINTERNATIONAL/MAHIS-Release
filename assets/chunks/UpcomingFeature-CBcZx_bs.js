import { ev as create$3, ew as create$5, ex as create$6, q as defineComponent, b7 as IonCardContent, bH as IonCard, L as IonIcon, H as IonContent, N as IonButton, b8 as IonButtons, az as IonTitle, ay as IonToolbar, I as IonHeader, bC as IonModal, F as closeCircleOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, B as createBaseVNode, a5 as createTextVNode, aA as IonMenu, am as IonList, an as IonItem, K as modalController, bn as pulseOutline, b6 as checkmark, x as createElementBlock } from './vendor-Cy_N32Zh.js';
import { n as icons, bO as extractArrayOfNameValue, bP as validateStore, F as DynamicButton, bR as YupValidateField, _ as _export_sfc, o as createModal, bb as useInvestigationStore } from '../index-B2p2mVqz.js';
import { B as BasicForm } from './BasicForm-CuqSYSue.js';
import { d as defineStore, m as mapState } from './pinia-Bqc2Rgok.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';

const FetalAssessmentValidation = create$3().shape({
  Oedema: create$6().label("Oedema"),
  "Number of fetuses": create$5().transform((value, originalValue) => {
    return originalValue === "" ? null : value;
  }).nullable().label("Number of fetuses").min(1).max(8).when("Oedema", ([treatment], schema) => {
    return treatment == "Yes" ? schema.required() : schema;
  }),
  "Symphysis-fundal height": create$5().typeError("SFH can only be a number").min(0).max(5e3).required().label("Symphysis-fundal height")
});
const FetusDetailsValidationSchema = create$3().shape({
  "Fetal heart rate": create$5().required().typeError("Value can only be a number").min(0).max(200).label("Fetal heart rate"),
  "Repeated fetal rate": create$5().required().typeError("Value can only be a number").min(0).max(200).label("Repeated fetal rate")
});
const initialFetalAssesment = [
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    isFinishBtn: false,
    sectionHeader: "",
    header: {
      name: "Symphysis-fundal height",
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Symphysis-fundal height (SFH)*",
              unit: "cm",
              icon: icons.height,
              value: "",
              name: "Symphysis-fundal height",
              valueType: "number",
              required: true,
              eventType: "input",
              alertsErrorMassage: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Is number of fetuses known?",
        selectedValue: "",
        name: "Oedema",
        class: "bold",
        displayNext: "Yes"
      },
      data: [
        {
          value: "Yes",
          name: "Yes",
          colSize: "2"
        },
        {
          value: "No",
          name: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    childName: "Oedema",
    sectionHeader: "",
    classDash: "dashed_bottom_border",
    header: {
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              class: "bold",
              displayNone: true,
              inputHeader: "Number of fetuses",
              unit: "",
              icon: "",
              value: "",
              name: "Number of fetuses",
              valueType: "number",
              eventType: "input"
            }
          ]
        }
      ]
    }
  }
];
const initialFetalDetails = [
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Fetal heartbeat present?",
        selectedValue: "",
        name: "Fetal heartbeat",
        class: "bold",
        displayNext: "Yes"
      },
      data: [
        {
          value: "Yes",
          name: "Yes",
          colSize: "2"
        },
        {
          value: "No",
          name: "No",
          colSize: "2"
        }
      ]
    }
  },
  {
    childName: "Fetal heartbeat",
    sectionHeader: "",
    classDash: "dashed_bottom_border",
    header: {
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              class: "bold",
              displayNone: true,
              inputHeader: "Fetal rate",
              unit: "BMP",
              icon: icons.systolicPressure,
              value: "",
              name: "Fetal heart rate",
              valueType: "number",
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Fetal heartbeat",
    sectionHeader: "",
    classDash: "dashed_bottom_border",
    header: {
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              class: "bold",
              displayNone: true,
              inputHeader: "Repeated fetal rate",
              unit: "BMP",
              icon: icons.systolicPressure,
              value: "",
              name: "Repeated fetal rate",
              valueType: "number",
              eventType: "input"
            }
          ]
        }
      ]
    }
  },
  {
    childName: "Fetal heartbeat",
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Fetal heart rate regularity ",
        selectedValue: "",
        name: "Fetal heart rate regularity",
        class: "bold",
        displayNone: true
      },
      data: [
        {
          value: "Regular",
          name: "Regular",
          colSize: "7"
        },
        {
          value: "Irregular",
          name: "Irregular",
          colSize: "7"
        }
      ]
    }
  },
  {
    selectdData: [],
    classDash: "dashed_bottom_border",
    radioBtnContent: {
      header: {
        title: "Select fetal presentation",
        selectedValue: "",
        name: "Fetal presentation",
        class: "bold",
        displayNext: "Other"
      },
      data: [
        {
          value: "Unknown presentation",
          name: "Unknown",
          colSize: "3"
        },
        {
          value: "Cephalic",
          name: "Cephalic",
          colSize: "9"
        },
        {
          value: "Pelvic",
          name: "Pelvic",
          colSize: "3"
        },
        {
          value: "Transverse",
          name: "Transverse",
          colSize: "9"
        },
        {
          value: "Breech",
          name: "Breech",
          colSize: "3"
        },
        {
          value: "Other",
          name: "Other",
          colSize: "9"
        }
      ]
    }
  },
  {
    childName: "Fetal presentation",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    header: {
      title: "",
      selectedValue: ""
    },
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "specify the Fetal presentation",
              unit: "",
              icon: icons.editPen,
              value: "",
              name: "Other (specify)",
              required: true,
              eventType: "input",
              inputWidth: "100%"
            }
          ]
        }
      ]
    }
  }
];
const useFetalAssessment = defineStore("fetalAssessment", {
  state: () => ({
    fetalAssessment: [...initialFetalAssesment],
    fetalDetails: [...lodashExports.cloneDeep(initialFetalDetails)],
    fetalsDetails: []
  }),
  actions: {
    setFetalAssessment(data) {
      this.fetalAssessment = data;
    },
    setFetalDetails(details = initialFetalDetails) {
      this.fetalDetails = [...lodashExports.cloneDeep(details)];
    },
    getInitialFetalAssesment() {
      const data = lodashExports.cloneDeep(initialFetalAssesment);
      return [...data];
    },
    getInitialFetalDetails() {
      const data = lodashExports.cloneDeep(initialFetalDetails);
      return [...data];
    },
    async validate() {
      const fetalAssessment = extractArrayOfNameValue(this.fetalAssessment);
      const fetalAssessmentValid = await validateStore(this.fetalAssessment, FetalAssessmentValidation, fetalAssessment);
      return fetalAssessmentValid;
    }
  }
  //
});

const _sfc_main$2 = defineComponent({
  name: "BabyDetailsModal",
  components: {
    DynamicButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonIcon,
    IonCard,
    IonCardContent,
    BasicForm
  },
  data() {
    return {
      initialData: []
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    closeModalFunc: {
      type: Function,
      required: true
    },
    onYes: {
      type: Function,
      required: true
    },
    onNo: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(useFetalAssessment, ["fetalDetails", "fetalAssessment"])
  },
  mounted() {
    const fetalDetails = useFetalAssessment();
    this.initialData = fetalDetails.getInitialFetalDetails();
  },
  methods: {
    handleInputData(event) {
      YupValidateField(this.fetalDetails, FetusDetailsValidationSchema, event.name, event.value);
    },
    closeCircleOutline() {
      return closeCircleOutline;
    },
    closeModal() {
      this.closeModalFunc();
    },
    confirm() {
      this.onYes();
      this.fetalDetails = [];
      this.closeModal();
    }
  }
});

const _hoisted_1$2 = { class: "button-container" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_buttons = resolveComponent("ion-buttons");
  const _component_ion_toolbar = resolveComponent("ion-toolbar");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.isOpen,
    "show-backdrop": true,
    onDidDismiss: _ctx.closeModal
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createVNode(_component_ion_header, null, {
            default: withCtx(() => [
              createVNode(_component_ion_toolbar, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_title, null, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode("Capture Fetal details", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_ion_buttons, { slot: "end" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_button, {
                        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onNo())
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ion_icon, {
                            icon: _ctx.closeCircleOutline()
                          }, null, 8, ["icon"])
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
          createVNode(_component_ion_card, null, {
            default: withCtx(() => [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createVNode(_component_basic_form, {
                    contentData: _ctx.fetalDetails,
                    initialData: _ctx.initialData,
                    "onUpdate:selected": _ctx.handleInputData,
                    "onUpdate:inputValue": _ctx.handleInputData
                  }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(_component_DynamicButton, {
              expand: "block",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.confirm()),
              name: "Save",
              class: "action-button"
            }),
            createVNode(_component_DynamicButton, {
              expand: "block",
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.onNo()),
              name: "Cancel",
              fill: "clear",
              class: "action-button"
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open", "onDidDismiss"]);
}
const FeatusModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-8b01055c"]]);

const _sfc_main$1 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    }
  }
});

const _hoisted_1$1 = { class: "modal_wrapper" };
const _hoisted_2 = { class: "modal_title diplay_space_between" };
const _hoisted_3 = { class: "laboratory" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2, [
      _cache[1] || (_cache[1] = createBaseVNode("span", null, "Investigations", -1)),
      createBaseVNode("span", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
        style: { "cursor": "pointer", "font-weight": "300" }
      }, "x")
    ]),
    createBaseVNode("div", _hoisted_3, [
      _cache[3] || (_cache[3] = createBaseVNode("div", null, "RBG (laboratory)", -1)),
      createBaseVNode("div", null, [
        createVNode(_component_ion_button, { color: "medium" }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode(" Open", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "laboratory" }, [
      createBaseVNode("div", null, "RBG (manual)"),
      createBaseVNode("div", null, "Result displays here")
    ], -1))
  ]);
}
const InvestigationsModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c7e1ccc0"]]);

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  mounted() {
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    openModal() {
      createModal(InvestigationsModal);
    }
  }
});

const _hoisted_1 = { class: "alert" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h3", null, "Stay tuned for our new features coming soon!", -1),
    createBaseVNode("div", { class: "message" }, " Exciting new features will be available soon. Check back later! ", -1)
  ])]);
}
const UpcomingFeature = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3239f912"]]);

export { FeatusModal as F, InvestigationsModal as I, UpcomingFeature as U, FetalAssessmentValidation as a, useFetalAssessment as u };
