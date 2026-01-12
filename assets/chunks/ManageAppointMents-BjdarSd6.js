import { q as defineComponent, av as IonGrid, a7 as IonLabel, bK as IonSelectOption, bL as IonSelect, L as IonIcon, N as IonButton, b7 as IonCardContent, b4 as IonCardTitle, b5 as IonCardHeader, bH as IonCard, aw as IonCol, af as IonRow, ay as IonToolbar, az as IonTitle, bq as IonPage, cs as IonMenuButton, I as IonHeader, H as IonContent, r as ref, cE as arrowForward, au as searchOutline, dS as bookOutline, dd as chevronForwardOutline, ck as refreshOutline, d0 as person, d1 as add, cg as medkit, d2 as globe, d3 as document, d4 as colorPalette, d5 as chevronUpCircle, d6 as chevronForwardCircle, d7 as chevronDownCircle, d8 as grid, b6 as checkmark, bV as chevronBackOutline, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, B as createBaseVNode } from './vendor-BK8x96Ok.js';
import { B as BasicInputField, a3 as ToolbarSearch, T as Toolbar, H as HisDate, _ as _export_sfc } from '../index-dAcYVh-O.js';
import { B as BasicForm } from './BasicForm-BIxKk-II.js';
import { u as useImmunizationAppointMentStore } from './vaccines_service-BRUXWkc2.js';
import { m as mapState } from './pinia-C47my0-I.js';
import { u as useStartEndDate } from './StartEndDate-Ddz_Xhzp.js';
import { n as nextApptInf } from './nextApptInf-BazJwwo9.js';
import { N as NavigationMenu } from './NavigationMenu-DlI_ScHR.js';
import { E as EIRreportsStore } from './EIRreportsStore-BxKULTnS.js';

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
      store.setNavigationPayload("Manage Appointments", true, false, "/", "manageAppointMents", date_span_substr);
      this.$router.push("ManageAppointMentsTemplate");
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
const ManageAppointMents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa116f9a"]]);

export { ManageAppointMents as default };
