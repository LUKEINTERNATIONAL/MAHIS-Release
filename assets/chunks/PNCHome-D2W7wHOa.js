import { v as defineComponent, bu as IonPage, M as IonIcon, bc as IonCardContent, b9 as IonCardTitle, ba as IonCardHeader, bL as IonCard, aA as IonCol, ag as IonRow, az as IonGrid, bY as chevronBackOutline, cp as checkmarkCircle, aK as useRouter, eY as heart, cf as personCircle, aM as people, eZ as gitMerge, e_ as calendarNumber, e$ as checkmarkDone, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode, C as createBaseVNode, z as createElementBlock, K as Fragment, S as renderList, a5 as normalizeClass, a6 as createTextVNode, J as createCommentVNode, E as toDisplayString, Q as normalizeStyle } from './vendor-CJ5LqAxe.js';
import { T as Toolbar, F as DynamicButton, K as ObservationService, u as useDemographicsStore, _ as _export_sfc } from '../index-DihysMBN.js';
import { D as DemographicBar } from './DemographicBar-D-T1-sj1.js';
import { m as mapState } from './pinia-BmV_6_tV.js';

const _sfc_main = defineComponent({
  name: "Home",
  components: {
    DynamicButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    Toolbar,
    DemographicBar,
    IonPage
  },
  props: {
    backBtn: {
      type: String,
      default: "Back"
    }
  },
  data() {
    return {
      gravida: ""
    };
  },
  setup() {
    const router = useRouter();
    const navigateTo = (path) => {
      router.push({ path });
    };
    const cardsData = [
      { title: "Postnatal details", path: "/postnatalDetails", icon: heart, color: "grey", isSaved: false },
      { title: "Postnatal ward monitoring for mother", path: "/postnatalWardMonitoring", icon: personCircle, color: "grey" },
      { title: "Postnatal ward monitoring for baby", path: "/babyStatus", icon: people, color: "grey", isSaved: false },
      { title: "Discharge woman", path: "/dischargeWoman", icon: gitMerge, color: "grey", isSaved: false },
      { title: "Postnatal visit", path: "/postnatalVisit", icon: calendarNumber, color: "grey", isSaved: false },
      { title: "End PNC program", path: "/pncEnd", icon: checkmarkDone, color: "grey", isSaved: false }
    ];
    return {
      navigateTo,
      cardsData
    };
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  mounted() {
    this.handleProfile();
  },
  methods: {
    checkmarkCircle() {
      return checkmarkCircle;
    },
    chevronBackOutline() {
      return chevronBackOutline;
    },
    backToANChome() {
      this.$router.push("/patientProfile");
    },
    async handleProfile() {
      const gravida = await ObservationService.getFirstObsValue(this.patient.patientID, "Gravida", "value_text");
      this.gravida = gravida;
    }
  }
});

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "back_profile" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DemographicBar = resolveComponent("DemographicBar");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_DemographicBar),
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ion_grid, { class: "ion-grid" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_DynamicButton, {
                    name: "Back to profile",
                    iconSlot: "start",
                    fill: "clear",
                    icon: _ctx.chevronBackOutline(),
                    onClick: _ctx.backToANChome
                  }, null, 8, ["icon", "onClick"])
                ]),
                createVNode(_component_ion_row, { class: "card-row" }, {
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
                            color: card.isSaved ? "success" : "secondary",
                            class: normalizeClass({ "card-saved": card.isSaved }),
                            onClick: ($event) => !card.isSaved && _ctx.navigateTo(card.path)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_card_header, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_card_title, { class: "ion-title" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.title) + " ", 1),
                                      card.isSaved ? (openBlock(), createBlock(_component_ion_icon, {
                                        key: 0,
                                        icon: _ctx.checkmarkCircle(),
                                        class: "check-icon"
                                      }, null, 8, ["icon"])) : createCommentVNode("", true)
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
                                    style: normalizeStyle({ color: card.color, fontSize: "30px" })
                                  }, null, 8, ["icon", "style"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["color", "class", "onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
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
  });
}
const PNCHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e0b70ebd"]]);

export { PNCHome as default };
