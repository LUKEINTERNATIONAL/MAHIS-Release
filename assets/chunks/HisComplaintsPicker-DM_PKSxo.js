import { s as defineComponent, bO as IonChip, by as IonText, ae as IonCheckbox, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, J as Fragment, R as renderList, a5 as createTextVNode, D as toDisplayString, S as withDirectives, O as createBlock, T as vShow, C as createBaseVNode, H as createCommentVNode } from './vendor-CIi-jrCy.js';
import SelectMixin from './SelectMixin-DfqgcyzO.js';
import { P as PatientComplaintsService } from './patient_complaints_service-CsYakolh.js';
import { l as lodashExports } from './lodash-ClZFDeT4.js';
import { H as HisKeyboard } from './KbHandler-BVionFRk.js';
import { _ as _export_sfc } from '../index-U74EcRLP.js';

const _sfc_main = defineComponent({
  components: { IonCheckbox, IonText, IonChip, HisKeyboard },
  name: "HisComplaintsPicker",
  mixins: [SelectMixin],
  data: () => ({
    complaintsList: {},
    ActiveCategory: "",
    allComplainList: {},
    displayComplainList: {},
    groupNames: [],
    showKeyboard: false,
    groupData: []
  }),
  methods: {
    async init() {
      this.$emit("onFieldActivated", this);
      const data = await PatientComplaintsService.getComplaintsList("Presenting complaint group");
      this.listData = this.mapListToOptions(data);
      this.groupData = data;
      this.groupNames = this.listData;
      for (const data2 in this.listData) {
        const category = this.listData[data2].label;
        const complaints = await PatientComplaintsService.getComplaintsList(category);
        this.allComplainList[category] = this.mapListToOptions(complaints, category);
      }
      this.$emit("onValue", this.getChecked(this.complaintsList));
    },
    async onselect(option, event) {
      this.$nextTick(async () => {
        const opt = { ...option };
        opt.isChecked = event.target.checked;
        if (this.onValue && opt.isChecked) {
          const ok = await this.onValue(opt);
          if (!ok) {
            return event.target.checked = false;
          }
        }
        if (this.onValueUpdate) {
          this.complaintsList = await this.onValueUpdate({ ...this.complaintsList }, opt);
        }
        this.$emit("onValue", this.getChecked(this.complaintsList));
      });
    },
    async onKBValue(value) {
      if (value != "") {
        for (const group in this.groupNames) {
          this.groupNames[group].other["display"] = false;
        }
        for (const position in this.listData) {
          let groupNames = "";
          const category = this.listData[position].label;
          const allComplainList = [];
          const complaints = this.allComplainList[category];
          for (const item in complaints) {
            const complaint = complaints[item].label;
            if (complaint.toLowerCase().match(value.toLowerCase()) && category) {
              complaints[item].other["display"] = true;
              allComplainList.push(complaints[item]);
              groupNames = category;
              this.ActiveCategory = category;
            } else {
              complaints[item].other["display"] = false;
              allComplainList.push(complaints[item]);
            }
          }
          if (groupNames != "") {
            for (const g in this.groupNames) {
              if (this.groupNames[g].label == category)
                this.groupNames[g].other["display"] = true;
            }
          }
          this.allComplainList[category] = allComplainList;
        }
        this.complaintsList[this.ActiveCategory] = this.allComplainList[this.ActiveCategory];
      } else {
        for (const position in this.listData) {
          const category = this.listData[position].label;
          const allComplainList = [];
          const complaints = this.allComplainList[category];
          for (const item in complaints) {
            complaints[item].other["display"] = true;
            allComplainList.push(complaints[item]);
          }
          this.allComplainList[category] = allComplainList;
        }
        this.groupNames = this.mapListToOptions(this.groupData);
        console.log(this.groupNames);
        this.ActiveCategory = "";
      }
    },
    keyboardStatus() {
      this.showKeyboard = !this.showKeyboard;
    },
    async getSpecificComplaints(category) {
      if (!(category in this.complaintsList)) {
        this.complaintsList[category] = this.allComplainList[category];
      }
      this.ActiveCategory = category;
    },
    mapListToOptions(list, category = "") {
      if (lodashExports.isEmpty(list)) return [];
      const display = { display: true };
      return list.map((item) => {
        const option = {
          label: item.name,
          value: item.name,
          isChecked: false,
          other: { ...item, ...display }
        };
        if (category) option.other.parent = category;
        return option;
      });
    },
    uncheck(option) {
      this.complaintsList[option.other.parent].forEach((opt) => {
        if (opt.label === option.label) opt.isChecked = false;
      });
    },
    getChecked(list) {
      const checkedItems = [];
      for (const group in list) {
        checkedItems.push(
          ...list[group].filter((option) => option.isChecked)
        );
      }
      return checkedItems;
    }
  },
  computed: {
    checkedItems() {
      return this.getChecked(this.complaintsList);
    },
    activeCategoryItems() {
      return this.complaintsList[this.ActiveCategory];
    }
  },
  watch: {
    clear() {
      for (const group in this.complaintsList) {
        this.complaintsList[group] = this.complaintsList[group].map((option) => {
          option.isChecked = false;
          return option;
        });
      }
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  }
});

const _hoisted_1 = { style: {} };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_his_text_input = resolveComponent("his-text-input");
  const _component_ion_text = resolveComponent("ion-text");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_chip = resolveComponent("ion-chip");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_checkbox = resolveComponent("ion-checkbox");
  const _component_his_keyboard = resolveComponent("his-keyboard");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_view_port = resolveComponent("view-port");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_view_port, {
      showFull: !_ctx.showKeyboard,
      style: { "padding": "0", "height": "82vh" }
    }, {
      default: withCtx(() => [
        createVNode(_component_his_text_input, {
          value: _ctx.selected,
          placeholder: "Search",
          onOnValue: _ctx.onKBValue,
          onClick: _ctx.keyboardStatus
        }, null, 8, ["value", "onOnValue", "onClick"]),
        createVNode(_component_ion_grid, null, {
          default: withCtx(() => [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, { size: "12" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.checkedItems, (item, index) => {
                      return openBlock(), createElementBlock("span", { key: index }, [
                        createVNode(_component_ion_chip, {
                          color: "danger",
                          onClick: ($event) => _ctx.uncheck(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_label, null, {
                              default: withCtx(() => [
                                createVNode(_component_ion_text, { class: "his-md-text" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, { size: "4" }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_list, { style: { overflowY: "auto", height: "80vh", margin: 0 } }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.groupNames, (data, index) => {
                          return withDirectives((openBlock(), createBlock(_component_ion_item, {
                            key: index,
                            onClick: ($event) => _ctx.getSpecificComplaints(data.value),
                            detail: true,
                            color: _ctx.ActiveCategory === data.label ? "light" : ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ion_label, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_text, { class: "his-md-text" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.label), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "color"])), [
                            [vShow, data.other.display]
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _ctx.ActiveCategory ? (openBlock(), createBlock(_component_ion_col, {
                  key: 0,
                  style: { overflowY: "auto", height: "75vh" }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createVNode(_component_ion_list, { class: "view-port-content" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.activeCategoryItems, (entry, index) => {
                            return withDirectives((openBlock(), createBlock(_component_ion_item, {
                              key: index,
                              color: entry.isChecked ? "light" : ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ion_label, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_text, { class: "his-md-text" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(entry.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ion_checkbox, {
                                  slot: "end",
                                  modelValue: entry.isChecked,
                                  "onUpdate:modelValue": ($event) => entry.isChecked = $event,
                                  onIonChange: (e) => _ctx.onselect(entry, e),
                                  disabled: entry?.disabled
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onIonChange", "disabled"])
                              ]),
                              _: 2
                            }, 1032, ["color"])), [
                              [vShow, entry.other.display]
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.showKeyboard ? (openBlock(), createBlock(_component_his_keyboard, {
                  key: 1,
                  kbConfig: _ctx.keyboard,
                  onKeyPress: _ctx.keypress
                }, null, 8, ["kbConfig", "onKeyPress"])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["showFull"])
  ]);
}
const HisComplaintsPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7b352988"]]);

export { HisComplaintsPicker as default };
