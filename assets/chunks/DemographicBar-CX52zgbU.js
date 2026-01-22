import { v as defineComponent, M as IonIcon, aC as IonToolbar, aD as IonTitle, aE as IonMenu, ao as IonList, ap as IonItem, I as IonHeader, aF as IonContent, aI as menuController, e1 as ellipsisVerticalSharp, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, D as createBaseVNode, a6 as createTextVNode, E as toDisplayString } from './vendor-Cbv9TWZo.js';
import { H as HisDate, u as useDemographicsStore, _ as _export_sfc } from '../index-DiiZviOj.js';
import { m as mapState } from './pinia-C6LE2xz6.js';

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
          createBaseVNode("b", null, "Labour and delivery ")
        ], -1))
      ])
    ]),
    _: 1
  });
}
const DemographicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6e1c95bb"]]);

export { DemographicBar as D };
