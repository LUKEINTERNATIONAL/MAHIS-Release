import { s as defineComponent, af as IonRow, aD as IonToolbar, bu as IonPage, I as IonHeader, aG as IonContent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode } from './vendor-DrpjccQs.js';
import { T as Toolbar, d as _sfc_main$1, _ as _export_sfc } from '../index-BKZG9ta1.js';
import { M as MonthsPicker, r as rawTable } from './MonthsPicker-CJVpg9tk.js';
import { N as NavigationMenu } from './NavigationMenu-BujL2N5b.js';

const _sfc_main = defineComponent({
  name: "Home",
  mixins: [_sfc_main$1],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    Toolbar,
    IonRow,
    rawTable,
    MonthsPicker,
    NavigationMenu
  },
  data() {
    return {};
  },
  computed: {},
  $route: {
    async handler() {
    },
    deep: true
  },
  watch: {},
  async mounted() {
  },
  methods: {}
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavigationMenu = resolveComponent("NavigationMenu");
  const _component_MonthsPicker = resolveComponent("MonthsPicker");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_NavigationMenu),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_MonthsPicker, {
            fowardRoute: "/immunization/reports/eir",
            backwardRoute: "/immunization/reports/eipm",
            reportName: "EIR Monthly Report"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const EIPMReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { EIPMReport as default };
