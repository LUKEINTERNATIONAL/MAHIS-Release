import { q as defineComponent, an as IonItem, I as IonHeader, aD as IonContent, v as resolveComponent, x as createElementBlock, y as openBlock, H as Fragment, Q as renderList, N as createBlock, B as withCtx, A as createBaseVNode, z as createVNode, C as toDisplayString } from './vendor-xvx_X2hj.js';
import { B as BasicForm } from './BasicForm-B11DWXz6.js';
import { d as defineStore, m as mapState } from './pinia-CiVhHi9d.js';
import { _ as _export_sfc } from '../index-D5ZuGc-h.js';

const useConfigurationStore = defineStore("configurationStore", {
  state: () => ({
    registrationDisplayType: "grid",
    enrollmentDisplayType: "grid"
  }),
  actions: {
    setRegistrationDisplayType(data) {
      this.registrationDisplayType = data;
    },
    setEnrollmentDisplayType(data) {
      this.enrollmentDisplayType = data;
    }
  },
  persist: true
});

const _sfc_main$1 = defineComponent({
  data: () => ({
    screenWidth: window.innerWidth,
    screenheight: window.innerHeight
  }),
  mounted() {
    window.addEventListener("resize", this.updateSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSize);
  },
  methods: {
    updateSize() {
      this.screenWidth = window.innerWidth;
      this.screenheight = window.innerHeight;
    }
  }
});

const _sfc_main = defineComponent({
  name: "Menu",
  mixins: [_sfc_main$1],
  components: {
    IonContent,
    IonHeader,
    IonItem,
    BasicForm
  },
  data() {
    return {
      iconListStatus: "active_icon",
      iconGridStatus: "inactive_icon"
    };
  },
  emits: ["countryChanged", "update:selected", "update:inputValue", "clicked:button", "clear:radio"],
  computed: {
    ...mapState(useConfigurationStore, ["registrationDisplayType"])
  },
  props: {
    content: {
      default: ""
    },
    contentTwo: {
      default: ""
    },
    size: {
      default: ""
    },
    editable: {
      default: false
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "demographics"
};
const _hoisted_2 = { class: "card_content" };
const _hoisted_3 = { class: "card_hearder" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_card = resolveComponent("ion-card");
  return !_ctx.editable ? (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.content.cards, (card, cardIndex) => {
      return openBlock(), createBlock(_component_ion_card, {
        class: "registration_ion_card",
        key: cardIndex
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, toDisplayString(card.cardTitle), 1),
            createVNode(_component_basic_form, {
              contentData: card.content,
              initialData: card.initialData,
              "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:selected", $event)),
              "onUpdate:inputValue": _cache[1] || (_cache[1] = ($event) => _ctx.$emit("update:inputValue", $event)),
              "onClicked:button": _cache[2] || (_cache[2] = ($event) => _ctx.$emit("clicked:button", $event)),
              onCountryChanged: _cache[3] || (_cache[3] = (c, $event) => _ctx.$emit("countryChanged", c, $event)),
              "onClear:radio": _cache[4] || (_cache[4] = (c, $event) => _ctx.$emit("clear:radio", c, $event))
            }, null, 8, ["contentData", "initialData"]),
            createVNode(_component_basic_form, {
              contentData: card.contentTwo,
              "onUpdate:selected": _cache[5] || (_cache[5] = ($event) => _ctx.$emit("update:selected", $event)),
              "onUpdate:inputValue": _cache[6] || (_cache[6] = ($event) => _ctx.$emit("update:inputValue", $event)),
              onCountryChanged: _cache[7] || (_cache[7] = (c, $event) => _ctx.$emit("countryChanged", c, $event)),
              "onClicked:button": _cache[8] || (_cache[8] = ($event) => _ctx.$emit("clicked:button", $event)),
              "onClear:radio": _cache[9] || (_cache[9] = (c, $event) => _ctx.$emit("clear:radio", c, $event))
            }, null, 8, ["contentData"])
          ])
        ]),
        _: 2
      }, 1024);
    }), 128))
  ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.content.cards, (card, cardIndex) => {
    return openBlock(), createElementBlock("div", { key: cardIndex }, [
      createVNode(_component_basic_form, {
        contentData: card.content,
        initialData: card.initialData,
        "onUpdate:selected": _cache[10] || (_cache[10] = ($event) => _ctx.$emit("update:selected", $event)),
        "onUpdate:inputValue": _cache[11] || (_cache[11] = ($event) => _ctx.$emit("update:inputValue", $event)),
        onCountryChanged: _cache[12] || (_cache[12] = (c, $event) => _ctx.$emit("countryChanged", c, $event)),
        "onClicked:button": _cache[13] || (_cache[13] = ($event) => _ctx.$emit("clicked:button", $event)),
        "onClear:radio": _cache[14] || (_cache[14] = (c, $event) => _ctx.$emit("clear:radio", c, $event))
      }, null, 8, ["contentData", "initialData"]),
      createVNode(_component_basic_form, {
        contentData: card.contentTwo,
        "onUpdate:selected": _cache[15] || (_cache[15] = ($event) => _ctx.$emit("update:selected", $event)),
        onCountryChanged: _cache[16] || (_cache[16] = (c, $event) => _ctx.$emit("countryChanged", c, $event)),
        "onUpdate:inputValue": _cache[17] || (_cache[17] = ($event) => _ctx.$emit("update:inputValue", $event)),
        "onClicked:button": _cache[18] || (_cache[18] = ($event) => _ctx.$emit("clicked:button", $event)),
        "onClear:radio": _cache[19] || (_cache[19] = (c, $event) => _ctx.$emit("clear:radio", c, $event))
      }, null, 8, ["contentData"])
    ]);
  }), 128));
}
const BasicCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47b63a8a"]]);

export { BasicCard as B, useConfigurationStore as u };
