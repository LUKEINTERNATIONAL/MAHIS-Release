import { q as defineComponent, bq as IonPage, L as IonIcon, b7 as IonCardContent, b4 as IonCardTitle, b5 as IonCardHeader, bH as IonCard, aw as IonCol, af as IonRow, av as IonGrid, bV as chevronBackOutline, cl as checkmarkCircle, aF as useRouter, eU as heart, cc as personCircle, aH as people, eV as gitMerge, eW as calendarNumber, eX as checkmarkDone, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, B as createBaseVNode, x as createElementBlock, J as Fragment, R as renderList, a4 as normalizeClass, a5 as createTextVNode, G as createCommentVNode, C as toDisplayString, P as normalizeStyle } from './vendor-Cy_N32Zh.js';
import { T as Toolbar, F as DynamicButton, K as ObservationService, u as useDemographicsStore, _ as _export_sfc } from '../index-CZxb0S4T.js';
import { D as DemographicBar } from './DemographicBar-D9p8idra.js';
import { m as mapState } from './pinia-Bqc2Rgok.js';
import { u as useObstreticHistoryStore } from './PastObstreticHistoryStore-DVr_hVUT.js';

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
    ...mapState(useObstreticHistoryStore, ["prevPregnancies"]),
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
const PNCHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9c232b34"]]);

export { PNCHome as default };
