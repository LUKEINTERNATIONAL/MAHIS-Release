import { v as defineComponent, ag as IonRow, aC as IonToolbar, bu as IonPage, I as IonHeader, aF as IonContent, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode } from './vendor-Cbv9TWZo.js';
import { T as Toolbar, d as _sfc_main$1, _ as _export_sfc } from '../index-DiiZviOj.js';
import { M as MonthsPicker, r as rawTable } from './MonthsPicker-DF-Kbfob.js';
import { N as NavigationMenu } from './NavigationMenu-B3-MLjeh.js';

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
