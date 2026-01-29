import { s as defineComponent, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, K as modalController, br as pulseOutline, bc as checkmark, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, a5 as createTextVNode, B as withCtx } from './vendor-DlXvc2CI.js';
import { bM as resetPatientData, n as icons, _ as _export_sfc } from '../index-BiecqvPL.js';

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
  data() {
    return {
      iconsContent: icons
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    async nav(url, action) {
      if (action == "not_save") {
        await resetPatientData();
        localStorage.setItem("saveProgressStatus", "false");
      } else {
        localStorage.setItem("saveProgressStatus", "true");
      }
      this.dismiss();
      this.$router.push(url);
    }
  }
});

const _hoisted_1 = { class: "modal_wrapper" };
const _hoisted_2 = { class: "modal_title diplay_space_between" };
const _hoisted_3 = { class: "center" };
const _hoisted_4 = { class: "triage_modal_btn center" };
const _hoisted_5 = { class: "center_btn" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _cache[3] || (_cache[3] = createBaseVNode("span", null, null, -1)),
      createBaseVNode("span", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
        style: { "cursor": "pointer", "font-weight": "300" }
      }, "x")
    ]),
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_ion_icon, {
        style: { "font-size": "350px" },
        icon: _ctx.iconsContent.triageWarning
      }, null, 8, ["icon"])
    ]),
    _cache[5] || (_cache[5] = createBaseVNode("div", { class: "center" }, [
      createBaseVNode("h4", null, [
        createBaseVNode("b", null, "Save progress")
      ])
    ], -1)),
    _cache[6] || (_cache[6] = createBaseVNode("div", { class: "center text_12" }, [
      createBaseVNode("p", { style: { "text-align": "center" } }, [
        createTextVNode(" Save the updates for the consultation. You’ll be able to complete "),
        createBaseVNode("br"),
        createTextVNode(" it later. Click “Save” to save progress. ")
      ])
    ], -1)),
    _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_ion_button, {
          class: "primary_btn",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.nav("/patient-profile", "save"))
        }, {
          default: withCtx(() => [..._cache[4] || (_cache[4] = [
            createTextVNode("Save", -1)
          ])]),
          _: 1
        }),
        createBaseVNode("span", {
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.nav("/patient-profile", "not_save")),
          style: { "cursor": "pointer" }
        }, " Don't Save")
      ])
    ])
  ]);
}
const SaveProgressModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8319449a"]]);

export { SaveProgressModal as S };
