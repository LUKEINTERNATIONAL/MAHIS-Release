import { q as defineComponent, bc as IonFooter, an as IonItem, I as IonHeader, aD as IonContent, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, A as createBaseVNode, z as createVNode } from './vendor-DGIzCW4f.js';
import { F as DynamicButton, _ as _export_sfc } from '../index-D_1ZD1MC.js';

const _sfc_main = defineComponent({
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
const BasicFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { BasicFooter as B };
