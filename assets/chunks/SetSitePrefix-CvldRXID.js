import { s as defineComponent, av as IonToggle, bu as IonPage, bf as IonFooter, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, z as createElementBlock, A as createVNode, C as createBaseVNode, H as createCommentVNode, a4 as normalizeClass } from './vendor-DoVhRvhx.js';
import { F as DynamicButton, T as Toolbar, a2 as getFieldValue, Q as useGlobalPropertyStore, G as toastSuccess, ab as GlobalPropertyService, a1 as modifyFieldValue, aa as useConfigStore, n as icons, _ as _export_sfc } from '../index-Bf-C6EIe.js';
import { d as defineStore, m as mapState } from './pinia-CTgeSI8R.js';
import { B as BasicForm } from './BasicForm-lSxTbPTm.js';
import { F as FacilityInformationBar } from './FacilityInformationBar-B9wkBo6q.js';
import { l as lodashExports } from './lodash-B7NSOofK.js';

const initialSitePrefix = [
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "",
              value: "",
              name: "site_prefix",
              eventType: "input",
              alertsErrorMassage: "",
              required: true
            }
          ],
          btns: [
            {
              name: "Save",
              fill: "solid",
              btn_col_size: 3,
              showName: true
            }
          ]
        }
      ]
    }
  }
];
const useSitePrefix = defineStore("sitePrefix", {
  state: () => ({
    sitePrefix: [...initialSitePrefix]
  }),
  actions: {
    setSitePrefix(data) {
      this.sitePrefix = data;
    },
    getInitialSitePrefix() {
      const data = lodashExports.cloneDeep(initialSitePrefix);
      return [...data];
    }
  }
});

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
    IonToggle
  },
  data() {
    return {
      cardData: {},
      inputField: "",
      isDDEEnabled: true,
      setName: "",
      initialPersonalData: [],
      iconsContent: icons,
      apiDate: "",
      date: "",
      DDE: {},
      isLoading: false
    };
  },
  computed: {
    ...mapState(useConfigStore, ["sessionDate"]),
    ...mapState(useGlobalPropertyStore, ["globalPropertyStore"]),
    ...mapState(useSitePrefix, ["sitePrefix"])
  },
  watch: {
    globalPropertyStore: {
      async handler() {
        await this.setSitePrefixStatus();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.setSitePrefixStatus();
      },
      deep: true
    }
  },
  async mounted() {
    await this.setSitePrefixStatus();
  },
  methods: {
    async setSitePrefixStatus() {
      localStorage.getItem("locationID");
      const sitePrefix = await GlobalPropertyService.get(`site_prefix`);
      modifyFieldValue(this.sitePrefix, "site_prefix", "value", sitePrefix);
    },
    async handleSave() {
      const sitePrefix = getFieldValue(this.sitePrefix, "site_prefix", "value");
      if (sitePrefix) {
        localStorage.getItem("locationID");
        const site = useGlobalPropertyStore();
        await site.setGlobalProperty(`site_prefix`, sitePrefix);
        toastSuccess(`Successfully set site prefix to ${sitePrefix}`);
      }
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "positionCenter" };
const _hoisted_3 = { class: "card_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, {
    class: normalizeClass({ loading: _ctx.isLoading })
  }, {
    default: withCtx(() => [
      _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_spinner, { name: "bubbles" }),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
      ])) : createCommentVNode("", true),
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_ion_card, { class: "registration_ion_card" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "card_hearder" }, "Set Site Prefix", -1)),
                  createVNode(_component_basic_form, {
                    contentData: _ctx.sitePrefix,
                    "onClicked:button": _ctx.handleSave
                  }, null, 8, ["contentData", "onClicked:button"])
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
  }, 8, ["class"]);
}
const SetSitePrefix = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ea69e7e9"]]);

export { SetSitePrefix as default };
