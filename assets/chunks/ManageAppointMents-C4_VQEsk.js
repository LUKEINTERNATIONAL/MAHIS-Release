import { s as defineComponent, aA as IonGrid, a7 as IonLabel, bM as IonSelectOption, bN as IonSelect, L as IonIcon, N as IonButton, bc as IonCardContent, b9 as IonCardTitle, ba as IonCardHeader, bK as IonCard, az as IonCol, af as IonRow, aC as IonToolbar, aD as IonTitle, bt as IonPage, cv as IonMenuButton, I as IonHeader, aF as IonContent, f as ref, cH as arrowForward, aw as searchOutline, dV as bookOutline, dg as chevronForwardOutline, cn as refreshOutline, d3 as person, d4 as add, ci as medkit, d5 as globe, d6 as document, d7 as colorPalette, d8 as chevronUpCircle, d9 as chevronForwardCircle, da as chevronDownCircle, db as grid, bb as checkmark, bX as chevronBackOutline, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, C as createBaseVNode } from './vendor-BIA1Qh8a.js';
import { B as BasicInputField, a3 as ToolbarSearch, T as Toolbar, H as HisDate, _ as _export_sfc } from '../index-CoTAfgAo.js';
import { B as BasicForm } from './BasicForm-B1hYv89p.js';
import { u as useImmunizationAppointMentStore } from './vaccines_service-DrgZ1XTX.js';
import { m as mapState } from './pinia-BgytB2RM.js';
import { u as useStartEndDate } from './StartEndDate-0XVJov1q.js';
import { n as nextApptInf } from './nextApptInf-B6wjH_fm.js';
import { N as NavigationMenu } from './NavigationMenu-yUedGA_v.js';
import { E as EIRreportsStore } from './EIRreportsStore-CeIISwHn.js';

const _sfc_main = defineComponent({
  name: "ManageAppointMents",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    nextApptInf,
    BasicForm,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonLabel,
    BasicInputField,
    IonGrid,
    NavigationMenu
  },
  data() {
    return {
      search_text: "",
      search_txt_error: false
    };
  },
  setup() {
    const startDate = ref(HisDate.sessionDate());
    const endDate = ref(HisDate.sessionDate());
    return {
      startDate,
      endDate,
      chevronBackOutline,
      checkmark,
      grid,
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document,
      globe,
      medkit,
      add,
      person,
      refreshOutline,
      chevronForwardOutline,
      bookOutline,
      searchOutline,
      arrowForward
    };
  },
  computed: {
    ...mapState(useStartEndDate, ["startEndDate"])
  },
  watch: {
    $route: {
      async handler(data) {
        if (data.name == "manageAppointMents") this.initNavData();
      },
      deep: true
    }
  },
  async mounted() {
    this.initNavData();
  },
  methods: {
    async handleInputData(event) {
      if (event.inputHeader == "Start date") {
        this.startDate = HisDate.toStandardHisFormat(event.value);
      }
      if (event.inputHeader == "End date") {
        this.endDate = HisDate.toStandardHisFormat(event.value);
      }
      const store = useImmunizationAppointMentStore();
      store.setStartEndDate(this.startDate, this.endDate);
    },
    initNavData() {
      const store = EIRreportsStore();
      store.setNavigationPayload("Manage Appointments", true, false, "/", "home", "");
    },
    navigationMenu() {
      const store = EIRreportsStore();
      const date_span_substr = HisDate.toStandardHisDisplayFormat(this.startDate).concat(
        " To  ",
        HisDate.toStandardHisDisplayFormat(this.endDate)
      );
      store.setNavigationPayload("Manage Appointments", true, false, "/", "/manage-appointments", date_span_substr);
      this.$router.push("/manage-appointments-template");
    }
  }
});

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "button-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavigationMenu = resolveComponent("NavigationMenu");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_NavigationMenu),
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [
                    createVNode(_component_basic_form, {
                      contentData: _ctx.startEndDate,
                      "onUpdate:inputValue": _ctx.handleInputData
                    }, null, 8, ["contentData", "onUpdate:inputValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [
                    createVNode(_component_ion_button, {
                      expand: "block",
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.navigationMenu()),
                      class: "custom-button"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_2, [
                          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "button-text" }, "View Appointments", -1)),
                          createVNode(_component_ion_icon, { icon: _ctx.arrowForward }, null, 8, ["icon"])
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
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const ManageAppointMents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-477659c1"]]);

export { ManageAppointMents as default };
