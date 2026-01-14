import { q as defineComponent, ae as IonRow, aA as IonToolbar, bs as IonPage, I as IonHeader, aD as IonContent, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode } from './vendor-DGIzCW4f.js';
import { T as Toolbar, d as _sfc_main$1, _ as _export_sfc } from '../index-D_1ZD1MC.js';
import { M as MonthsPicker, r as rawTable } from './MonthsPicker-BpxEV8H_.js';
import { N as NavigationMenu } from './NavigationMenu-CF9Rgsw4.js';

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
            fowardRoute: "AEFIReportTemplate",
            backwardRoute: "AEFIReport",
            reportName: "AEFI Monthly Report"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const AEFIReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { AEFIReport as default };
