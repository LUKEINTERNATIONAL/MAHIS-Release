import { v as defineComponent, aC as IonToolbar, aD as IonTitle, aE as IonMenu, ao as IonList, ap as IonItem, I as IonHeader, aF as IonContent, aI as menuController, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, C as createBaseVNode, a6 as createTextVNode, E as toDisplayString } from './vendor-CJ5LqAxe.js';
import { H as HisDate, u as useDemographicsStore, _ as _export_sfc } from '../index-BBSKuWmW.js';
import { m as mapState } from './pinia-BmV_6_tV.js';

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
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

const _hoisted_1 = { class: "second_bar_list position_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, { class: "second_bar" }, {
    default: withCtx(() => [
      createBaseVNode("ul", _hoisted_1, [
        createBaseVNode("li", null, [
          _cache[0] || (_cache[0] = createTextVNode(" Facility Name: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient?.personInformation?.given_name) + " " + toDisplayString(_ctx.patient?.personInformation?.middle_name) + " " + toDisplayString(_ctx.patient?.personInformation?.family_name), 1)
        ]),
        createBaseVNode("li", null, [
          _cache[1] || (_cache[1] = createTextVNode(" Date: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient.ID), 1)
        ])
      ])
    ]),
    _: 1
  });
}
const FacilityInformationBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-142ab09b"]]);

export { FacilityInformationBar as F };
