import { s as defineComponent, L as IonIcon, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, aJ as menuController, e0 as ellipsisVerticalSharp, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, a5 as createTextVNode, D as toDisplayString } from './vendor-DoVhRvhx.js';
import { H as HisDate, u as useDemographicsStore, _ as _export_sfc } from '../index-B2VBKWE_.js';
import { m as mapState } from './pinia-CTgeSI8R.js';

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
    IonIcon
  },
  setup() {
    return { ellipsisVerticalSharp };
  },
  data: () => ({}),
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  methods: {
    navigationMenu(url) {
      menuController.close();
      this.$router.push(url);
    },
    covertGender(gender) {
      return ["Male", "M"].includes(gender) ? "Male" : ["Female", "F"].includes(gender) ? "Female" : "";
    },
    formatBirthdate() {
      return HisDate.getBirthdateAge(this.patient?.personInformation?.birthdate);
    }
  }
});

const _hoisted_1 = { class: "second_bar_list desktop position_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, { class: "second_bar" }, {
    default: withCtx(() => [
      createBaseVNode("ul", _hoisted_1, [
        createBaseVNode("li", null, [
          _cache[0] || (_cache[0] = createTextVNode(" Fullname: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient?.personInformation?.given_name) + " " + toDisplayString(_ctx.patient?.personInformation?.middle_name) + " " + toDisplayString(_ctx.patient?.personInformation?.family_name), 1)
        ]),
        createBaseVNode("li", null, [
          _cache[1] || (_cache[1] = createTextVNode(" MRN: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient.ID), 1)
        ]),
        createBaseVNode("li", null, [
          _cache[2] || (_cache[2] = createTextVNode(" Birthday: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.formatBirthdate()), 1)
        ]),
        _cache[3] || (_cache[3] = createBaseVNode("li", null, [
          createTextVNode("Category: "),
          createBaseVNode("b", null, " PNC")
        ], -1))
      ])
    ]),
    _: 1
  });
}
const DemographicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bf36935b"]]);

export { DemographicBar as D };
