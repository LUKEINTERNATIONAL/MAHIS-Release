import { q as defineComponent, K as IonIcon, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, aD as IonContent, aG as menuController, e0 as ellipsisVerticalSharp, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, A as createBaseVNode, a4 as createTextVNode, C as toDisplayString, z as createVNode } from './vendor-DUNDjU_C.js';
import { H as HisDate, u as useDemographicsStore, _ as _export_sfc } from '../index-cEgpSt1H.js';
import { m as mapState } from './pinia-CzgPmrQI.js';

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
const _hoisted_2 = { class: "second_bar_list mobile position_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
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
      ]),
      createBaseVNode("ul", _hoisted_2, [
        createBaseVNode("li", null, [
          _cache[4] || (_cache[4] = createTextVNode(" Fullname: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient?.personInformation?.given_name) + " " + toDisplayString(_ctx.patient?.personInformation?.middle_name) + " " + toDisplayString(_ctx.patient?.personInformation?.family_name), 1)
        ]),
        createBaseVNode("li", null, [
          _cache[5] || (_cache[5] = createTextVNode(" MRN: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient.ID), 1)
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_ion_icon, { icon: _ctx.ellipsisVerticalSharp }, null, 8, ["icon"])
        ])
      ])
    ]),
    _: 1
  });
}
const DemographicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3039a05c"]]);

export { DemographicBar as D };
