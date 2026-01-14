import { q as defineComponent, af as IonRow, aA as IonToolbar, br as IonPage, I as IonHeader, H as IonContent, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode } from './vendor-BPW-J91F.js';
import { T as Toolbar, d as _sfc_main$1, _ as _export_sfc } from '../index-VhmzLedw.js';
import { M as MonthsPicker, r as rawTable } from './MonthsPicker-DzxtZBR9.js';
import { N as NavigationMenu } from './NavigationMenu-BwXFMQAl.js';

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
            fowardRoute: "EIRReport",
            backwardRoute: "EIPMReport",
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
