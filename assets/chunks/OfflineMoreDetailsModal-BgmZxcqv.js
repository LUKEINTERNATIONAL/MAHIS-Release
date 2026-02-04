import { s as defineComponent, bf as IonFooter, a6 as IonInput, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aG as IonContent, K as modalController, br as pulseOutline, bc as checkmark, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, a5 as createTextVNode, C as createBaseVNode, D as toDisplayString, J as Fragment } from './vendor-D523m2MA.js';
import { S as Service, g as getPouchDBRecords, a7 as RelationsService, f as useStatusStore, u as useDemographicsStore, F as DynamicButton, l as PreviousVitals, B as BasicInputField, n as icons, _ as _export_sfc } from '../index-BC57Ea8s.js';
import { m as mapState } from './pinia-BZkYQmJa.js';
import { B as BasicForm } from './BasicForm-BdBGZrXt.js';
import { c as customDatePicker } from './customDatePicker-C2FXvB1J.js';

const _sfc_main$1 = defineComponent({
  data: () => ({
    relationships: [],
    relationshipsData: [],
    patientGender: "male",
    filteredRelationships: []
  }),
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useStatusStore, ["apiStatus"]),
    gender() {
      return this.patient?.personInformation?.gender;
    }
  },
  watch: {
    $route: {
      async handler(route) {
        await this.getRelationships();
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    async getRelationships() {
      if (this.gender) {
        if (Service.getLanConnectionStatus() || Service.getPouchDbStatus()) this.relationshipsData = await getPouchDBRecords("relationship");
        if (this.apiStatus && this.relationshipsData.length === 0) {
          this.relationshipsData = await RelationsService.getRelations();
        }
        this.filterRelationships();
        this.relationships = this.filteredRelationships.map((r) => {
          return [
            {
              name: r.b_is_to_a,
              id: r.relationship_type_id,
              trackByID: r.relationship_type_id + r.b_is_to_a
            }
          ];
        }).reduce((acc, val) => acc.concat(val), []);
      }
    },
    filterRelationships() {
      const maleRelationships = ["Brother", "Father", "Son", "Grandfather", "Grandson", "Boyfriend", "Stepfather", "Stepson"];
      const femaleRelationships = ["Sister", "Mother", "Daughter", "Grandmother", "Granddaughter", "Girlfriend", "Stepmother", "Stepdaughter"];
      const commonRelationships = [
        "Spouse/Partner",
        "Aunt/Uncle",
        "Niece/Nephew",
        "Doctor",
        "Other",
        "Patient",
        "TB Contact Person",
        "TB Patient",
        "treatment suporter"
      ];
      if (this.relationshipsData?.length > 0) {
        this.filteredRelationships = this.relationshipsData.filter((relationship) => {
          if (this.gender === "M") {
            return maleRelationships.includes(relationship.a_is_to_b) || commonRelationships.includes(relationship.a_is_to_b);
          } else if (this.gender === "F") {
            return femaleRelationships.includes(relationship.a_is_to_b) || commonRelationships.includes(relationship.a_is_to_b);
          }
          return false;
        });
      }
    }
  }
});

const _sfc_main = defineComponent({
  mixins: [_sfc_main$1],
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonInput,
    BasicInputField,
    BasicForm,
    PreviousVitals,
    customDatePicker,
    DynamicButton,
    IonFooter
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  props: {
    clientData: ""
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  async mounted() {
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  methods: {
    handleInputData(event) {
    },
    dismiss() {
      modalController.dismiss();
    }
  }
});

const _hoisted_1 = { class: "" };
const _hoisted_2 = {
  class: "ion-padding",
  slot: "content",
  style: { "padding-bottom": "200px" }
};
const _hoisted_3 = { class: "" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_title = resolveComponent("ion-title");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_header = resolveComponent("ion-header");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_accordion = resolveComponent("ion-accordion");
  const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
  const _component_ion_content = resolveComponent("ion-content");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_header, { style: { "display": "flex", "justify-content": "space-between" } }, {
      default: withCtx(() => [
        createVNode(_component_ion_title, { class: "modalTitle" }, {
          default: withCtx(() => [..._cache[1] || (_cache[1] = [
            createTextVNode("More Offline Details", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_ion_icon, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dismiss()),
          style: { "padding-top": "10px", "padding-right": "10px" },
          icon: _ctx.iconsContent.cancel
        }, null, 8, ["icon"])
      ]),
      _: 1
    }),
    createVNode(_component_ion_content, {
      fullscreen: true,
      class: "ion-padding",
      style: { "--background": "#fff" }
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_ion_accordion_group, {
            ref: "accordionGroup",
            class: "",
            value: "first"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_accordion, {
                value: "first",
                "toggle-icon-slot": "start",
                class: "custom_card"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[2] || (_cache[2] = [
                          createTextVNode("Personal Details", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", null, "Fullname: " + toDisplayString(_ctx.clientData.personInformation.given_name + " " + _ctx.clientData.personInformation.family_name), 1),
                        createBaseVNode("li", null, "Gender: " + toDisplayString(_ctx.clientData.personInformation.gender), 1),
                        createBaseVNode("li", null, "Birthday: " + toDisplayString(_ctx.clientData.personInformation.birthday), 1),
                        createBaseVNode("li", null, " Currently Address: " + toDisplayString(_ctx.clientData.personInformation.current_district + " " + _ctx.clientData.personInformation.current_traditional_authority + " " + _ctx.clientData.personInformation.current_village), 1),
                        createBaseVNode("li", null, " Home Address: " + toDisplayString(_ctx.clientData.personInformation.home_district + " " + _ctx.clientData.personInformation.home_traditional_authority + " " + _ctx.clientData.personInformation.home_village), 1)
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ion_accordion, {
                value: "second",
                "toggle-icon-slot": "start",
                class: "custom_card"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[3] || (_cache[3] = [
                          createTextVNode("Guardian Details", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  _cache[4] || (_cache[4] = createBaseVNode("div", {
                    class: "ion-padding",
                    slot: "content"
                  }, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", { slot: "content" })
                    ])
                  ], -1))
                ]),
                _: 1
              }),
              createVNode(_component_ion_accordion, {
                value: "third",
                "toggle-icon-slot": "start",
                class: "custom_card"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_item, {
                    slot: "header",
                    color: "light"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_label, { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[5] || (_cache[5] = [
                          createTextVNode("Vitals", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  _cache[6] || (_cache[6] = createBaseVNode("div", {
                    class: "ion-padding",
                    slot: "content",
                    style: { "padding-bottom": "120px" }
                  }, null, -1))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512)
        ])
      ]),
      _: 1
    })
  ], 64);
}
const OfflineMoreDetailsModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ea186baf"]]);

export { OfflineMoreDetailsModal as O };
