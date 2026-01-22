import { T as Toolbar, _ as _export_sfc } from '../index-DIdCIGDg.js';
import { v as defineComponent, aF as IonContent, bu as IonPage, az as IonCol, ag as IonRow, aA as IonGrid, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, D as createBaseVNode } from './vendor-Cbv9TWZo.js';
import { a as getUserLocation } from './userService-B1AJBSyV.js';

const _sfc_main = defineComponent({
  setup() {
  },
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    Toolbar
  },
  props: {
    resetList: {
      type: Number,
      required: true
    },
    items: {
      required: true
    }
  },
  data: () => ({
    reportUrl: "",
    facilityName: "",
    locationID: ""
  }),
  mounted() {
    this.loadUserFacilityDetails();
    console.log(this.loadUserFacilityDetails);
  },
  methods: {
    async loadUserFacilityDetails() {
      const data = await getUserLocation();
      this.locationID = data.code;
      this.updateReportUrl();
    },
    updateReportUrl() {
      this.reportUrl = `http://196.11.86.145:3001/public/dashboard/309f3a3a-56fa-4854-ad91-5b217054f487?tab=7-overview&location=${this.locationID}&date_filter=past7days&today=&program=`;
    }
  }
});

const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
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
          createVNode(_component_ion_grid, { style: { "margin-top": "30px", "margin-left": "8%", "margin-right": "8%" } }, {
            default: withCtx(() => [
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  createVNode(_component_ion_col, { size: "12" }, {
                    default: withCtx(() => [
                      createBaseVNode("iframe", {
                        src: _ctx.reportUrl,
                        width: "100%",
                        height: "700px",
                        frameborder: "0"
                      }, null, 8, _hoisted_1)
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
  });
}
const FacilityReports = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { FacilityReports as default };
