import { s as defineComponent, bf as IonFooter, aq as IonItem, I as IonHeader, aG as IonContent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode } from './vendor-CNJ0IVCn.js';
import { F as DynamicButton, _ as _export_sfc, O as OrderService, u as useDemographicsStore } from '../index-DzmFphVR.js';
import { m as mapState } from './pinia-DxI5rRJg.js';

const _sfc_main$1 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonFooter,
    DynamicButton
  },
  data() {
    return {};
  },
  props: {
    status: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: "Finish and Save"
    }
  },
  methods: {}
});

const _hoisted_1 = { style: { "float": "right", "margin-right": "20px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createBlock(_component_ion_footer, {
    translucent: true,
    class: "ion-no-border"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_DynamicButton, {
          name: _ctx.name,
          iconSlot: "end",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("finishBtn"))
        }, null, 8, ["name"])
      ])
    ]),
    _: 1
  });
}
const BasicFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);

const _sfc_main = defineComponent({
  data: () => ({
    userRole: "",
    ready: false,
    labOrders: {}
  }),
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  watch: {
    $route: {
      async handler(route) {
        this.labOrders = await OrderService.getOrders(this.patient.patientID);
      },
      immediate: true,
      deep: true
    }
  }
});

export { BasicFooter as B, _sfc_main as _ };
