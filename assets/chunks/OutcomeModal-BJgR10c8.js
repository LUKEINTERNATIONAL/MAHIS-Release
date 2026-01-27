import { s as defineComponent, a2 as onMounted, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode, F as unref, P as normalizeStyle, D as toDisplayString, a5 as createTextVNode, H as createCommentVNode, J as Fragment, R as renderList, f as ref, c as computed, K as modalController, aC as IonToolbar, aD as IonTitle, aE as IonMenu, ao as IonList, ap as IonItem, I as IonHeader, aF as IonContent, bq as pulseOutline, bb as checkmark, O as createBlock } from './vendor-Wwszy5sF.js';
import { b1 as useVitalsStore, b2 as useTreatmentPlanStore, n as icons, _ as _export_sfc, o as createModal, b3 as useOutcomeStore } from '../index-DTh6TpA9.js';
import { m as mapState } from './pinia-BYnbfcrK.js';

const _hoisted_1$1 = { class: "modal_wrapper" };
const _hoisted_2$1 = { class: "modal_title diplay_space_between" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { class: "vitals_overview" };
const _hoisted_5$1 = { id: "vitals_dialog" };
const _hoisted_6$1 = { class: "v_result" };
const _hoisted_7$1 = { style: { "font-weight": "700" } };
const _hoisted_8 = { class: "bmi" };
const _hoisted_9 = { style: { "margin-left": "40px" } };
const _hoisted_10 = { class: "notes_content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotesModal",
  setup(__props) {
    const iconsContent = icons;
    const clinicalNotes = ref();
    const store = useVitalsStore();
    const vitals = computed(() => store.vitals);
    function dismiss() {
      modalController.dismiss();
    }
    onMounted(() => {
      clinicalNotes.value = transformClinicalNotes();
    });
    function transformClinicalNotes() {
      const treatmentPlanStore = useTreatmentPlanStore();
      const input = treatmentPlanStore.getNonPharmalogicalTherapyAndOtherNotes();
      const lines = [];
      let startIndex = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "\n" || input[i] === "\r") {
          const line = input.substring(startIndex, i);
          if (line.length > 0) {
            lines.push(line);
            startIndex = i + 1;
          }
        }
      }
      const lastLine = input.substring(startIndex);
      if (lastLine.length > 0) {
        lines.push(lastLine);
      }
      return lines;
    }
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _cache[1] || (_cache[1] = createBaseVNode("span", null, "Clinical Notes", -1)),
          createBaseVNode("span", {
            onClick: _cache[0] || (_cache[0] = ($event) => dismiss()),
            style: { "cursor": "pointer", "font-weight": "300" }
          }, "x")
        ]),
        vitals.value[0].alerts[0].backgroundColor && vitals.value[1].data.rowData[0].colData[0].value ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            _cache[2] || (_cache[2] = createBaseVNode("div", null, "Vitals", -1)),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_ion_icon, {
                slot: "start",
                "aria-hidden": "true",
                icon: unref(iconsContent).vitals_graph,
                style: { "cursor": "pointer" }
              }, null, 8, ["icon"])
            ])
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", {
              class: "obese",
              style: normalizeStyle("background-color:" + vitals.value[0].alerts[0].backgroundColor)
            }, [
              createBaseVNode("div", null, [
                createVNode(_component_ion_icon, {
                  slot: "start",
                  "aria-hidden": "true",
                  icon: vitals.value[0].alerts[0].icon
                }, null, 8, ["icon"])
              ]),
              createBaseVNode("div", {
                style: normalizeStyle("margin-left:40px; color:" + vitals.value[0].alerts[0].textColor)
              }, [
                createBaseVNode("span", _hoisted_7$1, toDisplayString(vitals.value[0].alerts[0].index), 1),
                createTextVNode(" " + toDisplayString(vitals.value[0].alerts[0].value), 1)
              ], 4)
            ], 4),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", null, [
                createVNode(_component_ion_icon, {
                  slot: "start",
                  "aria-hidden": "true",
                  icon: unref(iconsContent).bmi_rusults
                }, null, 8, ["icon"])
              ]),
              createBaseVNode("div", _hoisted_9, toDisplayString(vitals.value[1].data.rowData[0].colData[0].value) + " / " + toDisplayString(vitals.value[1].data.rowData[0].colData[1].value), 1)
            ])
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          _cache[3] || (_cache[3] = createTextVNode(" Notes ", -1)),
          createBaseVNode("ul", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(clinicalNotes.value, (item, index) => {
              return openBlock(), createElementBlock("li", { key: index }, toDisplayString(item), 1);
            }), 128))
          ])
        ])
      ]);
    };
  }
});

const DispositionModal$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3feea857"]]);

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
  computed: {
    ...mapState(useOutcomeStore, ["outcomes"])
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
    openModal() {
      createModal(DispositionModal$1);
    }
  }
});

const _hoisted_1 = { class: "modal_wrapper" };
const _hoisted_2 = { class: "modal_title diplay_space_between" };
const _hoisted_3 = { class: "text_header_14" };
const _hoisted_4 = { style: { "margin-bottom": "0px", "font-weight": "bold" } };
const _hoisted_5 = { class: "diplay_space_between" };
const _hoisted_6 = {
  class: "typeDate",
  style: { "width": "54dvw" }
};
const _hoisted_7 = { class: "date" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DashBox = resolveComponent("DashBox");
  const _component_ion_icon = resolveComponent("ion-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _cache[1] || (_cache[1] = createBaseVNode("span", null, "Outcome", -1)),
      createBaseVNode("span", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
        style: { "cursor": "pointer", "font-weight": "300" }
      }, "x")
    ]),
    _ctx.outcomes.length == 0 ? (openBlock(), createBlock(_component_DashBox, {
      key: 0,
      content: "No outcomes added yet."
    })) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.outcomes, (outcome, index) => {
      return openBlock(), createElementBlock("div", {
        class: "dashed_bottom_border",
        style: { "padding-bottom": "5px" },
        key: index
      }, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("h4", _hoisted_4, toDisplayString(outcome.name), 1)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("span", null, toDisplayString(outcome.type), 1),
              createBaseVNode("span", _hoisted_7, toDisplayString(outcome.date), 1)
            ]),
            createBaseVNode("div", null, toDisplayString(outcome.reason), 1)
          ]),
          createBaseVNode("div", null, [
            createVNode(_component_ion_icon, {
              style: { "font-size": "20px" },
              icon: _ctx.iconsContent.tree_dot
            }, null, 8, ["icon"])
          ])
        ])
      ]);
    }), 128))
  ]);
}
const DispositionModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ffb9b64e"]]);

export { DispositionModal as D };
