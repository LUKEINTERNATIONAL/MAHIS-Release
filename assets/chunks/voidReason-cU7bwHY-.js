import { s as defineComponent, aA as IonCol, N as IonButton, ah as IonRadioGroup, ai as IonRadio, ap as IonList, aq as IonItem, af as IonRow, K as modalController, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, C as createBaseVNode, J as Fragment, R as renderList, O as createBlock, a5 as createTextVNode, D as toDisplayString } from './vendor-D523m2MA.js';
import { t as toastWarning, _ as _export_sfc } from '../index-Cl_dwGxG.js';
import { l as lodashExports } from './lodash-BqX4mskJ.js';

const _sfc_main = defineComponent({
  components: {
    IonRow,
    IonItem,
    IonList,
    IonRadio,
    IonRadioGroup,
    IonButton,
    IonCol
  },
  data() {
    return {
      reasons: [
        {
          id: 1,
          name: "Mistake/ Wrong Entry",
          type: "Mistake/ Wrong Entry"
        },
        {
          id: 2,
          name: "Duplicate",
          type: "Duplicate"
        },
        {
          id: 3,
          name: "System Error",
          type: "System Error"
        }
      ],
      selectedOption: {}
    };
  },
  computed: {},
  async mounted() {
  },
  props: {
    // customSchedule: {
    //     type: [],
    //     default: [],
    // } as any,
  },
  methods: {
    compareWith(o1, o2) {
      return o1.id === o2.id;
    },
    handleChange(ev) {
      this.selectedOption = ev.detail.value;
    },
    cancel() {
      try {
        modalController.dismiss();
      } catch (error) {
      }
    },
    dismiss() {
      try {
        modalController.dismiss(this.selectedOption);
      } catch (error) {
      }
    },
    checkIfSelected() {
      if (lodashExports.has(this.selectedOption, "name") == true) {
        return true;
      } else {
        toastWarning("Select a reason!");
        return false;
      }
    },
    voidRe() {
      if (this.checkIfSelected() == true) {
        this.$emit("void-item", this.selectedOption);
        this.dismiss();
      }
    }
  }
});

const _hoisted_1 = { class: "saveBtn" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_radio = resolveComponent("ion-radio");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_radio_group = resolveComponent("ion-radio-group");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_col = resolveComponent("ion-col");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_row, { class: "centered-content" }, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("div", { class: "text-container" }, [
          createBaseVNode("div", null, "Do you want to void this?"),
          createBaseVNode("div", null, "Please specify reason for voiding?")
        ], -1)
      ])]),
      _: 1
    }),
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_list, { style: { "width": "100%" } }, {
          default: withCtx(() => [
            createVNode(_component_ion_radio_group, {
              compareWith: _ctx.compareWith,
              onIonChange: _cache[0] || (_cache[0] = ($event) => _ctx.handleChange($event)),
              value: "start"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.reasons, (reason) => {
                  return openBlock(), createBlock(_component_ion_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_ion_radio, { value: reason }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(reason.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ]),
              _: 1
            }, 8, ["compareWith"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_ion_row, { class: "ion-justify-content-between" }, {
        default: withCtx(() => [
          createVNode(_component_ion_col, { size: "auto" }, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.cancel,
                id: "cbtn",
                class: "btnText cbtn",
                fill: "solid",
                style: { "width": "130px" }
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode(" Cancel ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_ion_col, { size: "auto" }, {
            default: withCtx(() => [
              createVNode(_component_ion_button, {
                onClick: _ctx.voidRe,
                class: "btnText",
                fill: "solid",
                style: { "width": "130px" }
              }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode(" Void ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ], 64);
}
const voidReason = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e16f1d3"]]);

export { voidReason as v };
