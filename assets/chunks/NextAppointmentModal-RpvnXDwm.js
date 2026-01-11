import { q as defineComponent, b7 as IonCardContent, b4 as IonCardTitle, b5 as IonCardHeader, bH as IonCard, aw as IonCol, af as IonRow, av as IonGrid, aF as useRouter, aH as people, eP as bed, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, x as createElementBlock, J as Fragment, R as renderList, a5 as createTextVNode, C as toDisplayString, P as normalizeStyle, ev as create$3, ex as create$6, L as IonIcon, H as IonContent, N as IonButton, b8 as IonButtons, az as IonTitle, ay as IonToolbar, I as IonHeader, bC as IonModal, a7 as IonLabel, b9 as IonFooter, F as closeCircleOutline, B as createBaseVNode } from './vendor-Cy_N32Zh.js';
import { _ as _export_sfc, n as icons, bO as extractArrayOfNameValue, bP as validateStore, F as DynamicButton, a1 as modifyFieldValue, bR as YupValidateField, H as HisDate, S as Service } from '../index-CZxb0S4T.js';
import { B as BasicForm } from './BasicForm-CsmIpt8q.js';
import { d as defineStore, m as mapState } from './pinia-Bqc2Rgok.js';
import { l as lodashExports } from './lodash-D1CNaELN.js';

const _sfc_main$1 = defineComponent({
  name: "Home",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  },
  setup() {
    const router = useRouter();
    const navigateTo = (path) => {
      router.push({ path });
    };
    const cardsData = [
      { title: "Referral", path: "/ANCreferral", icon: people, color: "grey" },
      { title: "Pregnancy Outcome", path: "/ancEnd", icon: bed, color: "grey" }
    ];
    return {
      navigateTo,
      cardsData
    };
  }
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  return openBlock(), createBlock(_component_ion_grid, { class: "ion-grid" }, {
    default: withCtx(() => [
      createVNode(_component_ion_row, { class: "ion-justify-content-center ion-align-items-center" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cardsData, (card, index) => {
            return openBlock(), createBlock(_component_ion_col, {
              key: index,
              "size-xs": "6",
              "size-sm": "6",
              "size-md": "4",
              "size-lg": "4",
              "size-xl": "4"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_card, {
                  color: "secondary",
                  class: "card",
                  onClick: ($event) => _ctx.navigateTo(card.path)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_card_header, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_card_title, {
                          class: "ion-title",
                          style: { "color": "#0f5132" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(card.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_ion_card_content, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_icon, {
                          icon: card.icon,
                          style: normalizeStyle({ color: card.color, fontSize: "40px" })
                        }, null, 8, ["icon", "style"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-f6c0a839"]]);

const NextAppointmentValidationSchema = create$3().shape({
  "Appointment date": create$6().required().label("Appointment date")
});
const initialScheduleNextAppointment = [
  {
    classDash: "dashed_bottom_border",
    sideColSize: 0,
    data: {
      rowData: [
        {
          colData: [
            {
              class: "bold",
              icon: icons.calenderPrimary,
              value: "",
              valueType: "text",
              name: "Appointment date",
              eventType: "input",
              inputWidth: "100%",
              required: true,
              minDate: "",
              maxDate: "",
              isDatePopover: true
            }
          ]
        }
      ]
    }
  }
];
const useScheduleNextAppointmentStore = defineStore("scheduleNextAppointmentStore", {
  state: () => ({
    nextAppointmentDate: [...initialScheduleNextAppointment]
  }),
  actions: {
    setNextAppointmentDate(data) {
      this.nextAppointmentDate = data;
    },
    getInitialNextAppointmentDate() {
      const data = lodashExports.cloneDeep(initialScheduleNextAppointment);
      return [...data];
    },
    async validate() {
      const nextAppointmentDate = extractArrayOfNameValue(this.nextAppointmentDate);
      const nextAppointmentDateValid = await validateStore(this.nextAppointmentDate, NextAppointmentValidationSchema, nextAppointmentDate);
      return nextAppointmentDateValid;
    }
  }
  //
});

const sessionDate = HisDate.toStandardHisDisplayFormat(Service.getSessionDate());
const _sfc_main = defineComponent({
  name: "BabyDetailsModal",
  components: {
    IonRow,
    IonFooter,
    IonLabel,
    IonCol,
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
    sessionDate() {
      return sessionDate;
    },
    ...mapState(useScheduleNextAppointmentStore, ["nextAppointmentDate"])
  },
  mounted() {
    const nextAppointmentDate = useScheduleNextAppointmentStore();
    this.initialData = nextAppointmentDate.getInitialNextAppointmentDate();
  },
  methods: {
    handleInputData(event) {
      YupValidateField(this.nextAppointmentDate, NextAppointmentValidationSchema, event.name, event.value);
      this.handleDateOfScheduledAppointmentRange(event);
    },
    closeCircleOutline() {
      return closeCircleOutline;
    },
    handleDateOfScheduledAppointmentRange(event) {
      const currentDate = /* @__PURE__ */ new Date();
      const minDate = new Date(currentDate);
      minDate.setDate(minDate.getDate() + 1);
      const formattedMinDate = minDate.toISOString().split("T")[0];
      const maxDate = new Date(currentDate);
      maxDate.setDate(maxDate.getDate() + 32);
      const formattedMaxDate = maxDate.toISOString().split("T")[0];
      modifyFieldValue(this.nextAppointmentDate, "Appointment date", "minDate", formattedMinDate);
      modifyFieldValue(this.nextAppointmentDate, "Appointment date", "maxDate", formattedMaxDate);
    },
    closeModal() {
      this.closeModalFunc();
    },
    confirm() {
      this.onYes();
      this.nextAppointmentDate = [];
      this.closeModal();
    }
  }
});

const _hoisted_1 = { class: "lbl-ct" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_footer = resolveComponent("ion-footer");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_modal = resolveComponent("ion-modal");
  return openBlock(), createBlock(_component_ion_modal, {
    "is-open": _ctx.isOpen,
    "show-backdrop": true,
    onDidDismiss: _ctx.closeModal
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_header, null, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(_component_ion_col, { style: { "margin-left": "-3px" } }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createBaseVNode("div", {
                    class: "om",
                    style: { "font-weight": "600", "color": "#8d8686" }
                  }, "Set Next Appointment Date", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_ion_col, {
                size: "6",
                style: { "text-align": "right" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, {
                    class: "lbl-tl",
                    style: { "font-size": "13px" }
                  }, {
                    default: withCtx(() => [
                      _cache[3] || (_cache[3] = createTextVNode(" Todays Date: ", -1)),
                      createBaseVNode("span", _hoisted_1, toDisplayString(_ctx.sessionDate), 1)
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
      createVNode(_component_ion_content, {
        fullscreen: true,
        class: "ion-padding",
        style: { "--background": "#fff" }
      }, {
        default: withCtx(() => [
          createVNode(_component_basic_form, {
            contentData: _ctx.nextAppointmentDate,
            initialData: _ctx.initialData,
            "onUpdate:selected": _ctx.handleInputData,
            "onUpdate:inputValue": _ctx.handleInputData
          }, null, 8, ["contentData", "initialData", "onUpdate:selected", "onUpdate:inputValue"]),
          _cache[5] || (_cache[5] = createBaseVNode("hr", {
            class: "dashed-hr",
            style: { "margin-bottom": "0px !important" }
          }, null, -1)),
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
                        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onNo())
                      }, {
                        default: withCtx(() => [..._cache[4] || (_cache[4] = [
                          createTextVNode(" Cancel ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ion_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_DynamicButton, {
                        name: "Submit",
                        fill: "solid",
                        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.confirm()),
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
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open", "onDidDismiss"]);
}
const NextAppointmentModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d7ab605a"]]);

export { LandingPage as L, NextAppointmentModal as N, useScheduleNextAppointmentStore as u };
