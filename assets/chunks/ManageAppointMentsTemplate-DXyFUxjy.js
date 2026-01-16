import { q as defineComponent, ax as IonGrid, a6 as IonLabel, bL as IonSelectOption, bM as IonSelect, K as IonIcon, M as IonButton, ba as IonCardContent, b7 as IonCardTitle, b8 as IonCardHeader, bJ as IonCard, ay as IonCol, ae as IonRow, aA as IonToolbar, aB as IonTitle, bs as IonPage, cu as IonMenuButton, I as IonHeader, aD as IonContent, r as ref, d as computed, a1 as onMounted, a2 as onUnmounted, au as searchOutline, dU as bookOutline, df as chevronForwardOutline, cm as refreshOutline, d2 as person, d3 as add, ch as medkit, d4 as globe, d5 as document, d6 as colorPalette, d7 as chevronUpCircle, d8 as chevronForwardCircle, d9 as chevronDownCircle, da as grid, b9 as checkmark, bW as chevronBackOutline, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, A as createBaseVNode, x as createElementBlock, G as createCommentVNode, a4 as createTextVNode, C as toDisplayString, O as normalizeStyle, H as Fragment, Q as renderList } from './vendor-wM1cIaYi.js';
import { B as BasicInputField, a3 as ToolbarSearch, T as Toolbar, A as AppointmentService, H as HisDate, _ as _export_sfc } from '../index-Cd3-tqLQ.js';
import { B as BasicForm } from './BasicForm-B65wVKad.js';
import { u as useImmunizationAppointMentStore } from './vaccines_service-BDzUDK6c.js';
import { m as mapState } from './pinia-Czqxf__w.js';
import { u as useStartEndDate } from './StartEndDate-DHgYDtyd.js';
import { n as nextApptInf } from './nextApptInf-BdP-dDd6.js';
import { N as NavigationMenu } from './NavigationMenu-BAuhGYOC.js';

const _sfc_main = defineComponent({
  name: "ManageAppointMentsTemplate",
  components: {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Toolbar,
    ToolbarSearch,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    nextApptInf,
    BasicForm,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonLabel,
    BasicInputField,
    IonGrid,
    NavigationMenu
  },
  data() {
    return {
      search_text: "",
      search_txt_error: false
    };
  },
  setup() {
    const people = ref([]);
    const people_cpy = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const listHeight = ref(0);
    const totalPages = computed(() => Math.ceil(people.value.length / itemsPerPage.value));
    const paginatedPeople = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return people.value.slice(start, end);
    });
    const updateListHeight = () => {
      const screenHeight = window.innerHeight;
      const otherElementsHeight = 180;
      listHeight.value = screenHeight - otherElementsHeight;
    };
    onMounted(() => {
      updateListHeight();
      window.addEventListener("resize", updateListHeight);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateListHeight);
    });
    return {
      people,
      people_cpy,
      currentPage,
      totalPages,
      paginatedPeople,
      listHeight,
      chevronBackOutline,
      checkmark,
      grid,
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document,
      globe,
      medkit,
      itemsPerPage,
      add,
      person,
      refreshOutline,
      chevronForwardOutline,
      bookOutline,
      searchOutline
    };
  },
  computed: {
    ...mapState(useImmunizationAppointMentStore, ["selectedAppointmentMentForAppointmentsPage", "AppointmentsReload"]),
    ...mapState(useStartEndDate, ["startEndDate"]),
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endIndex() {
      return Math.min(this.startIndex + this.itemsPerPage - 1, this.people.length);
    }
  },
  watch: {
    selectedAppointmentMentForAppointmentsPage: {
      handler() {
      },
      deep: true
    },
    AppointmentsReload: {
      handler() {
        this.loadPageInf();
      },
      deep: true
    },
    $route: {
      async handler(data) {
        if (data.name == "ManageAppointMentsTemplate") {
          this.loadPageInf();
        }
      },
      deep: true
    }
  },
  async mounted() {
    this.loadPageInf();
  },
  methods: {
    formatBirthdate(birthdate) {
      return HisDate.getBirthdateAge(birthdate);
    },
    async getAppointments() {
      this.people.length = 0;
      this.currentPage = 1;
      this.itemsPerPage = 10;
      try {
        const store = useImmunizationAppointMentStore();
        const appointments = await AppointmentService.getDailyAppointments(
          store.getStartEndDate().startDate,
          store.getStartEndDate().endDate,
          ""
        );
        appointments.forEach((client) => {
          const apptOb = {
            person_id: client.person_id,
            npid: client.npid,
            appointment_id: 103,
            encounter_id: client.encounter_id,
            name: client.given_name.concat(" ", client.family_name),
            gender: client.gender,
            ageDob: this.formatBirthdate(client.birthdate),
            village: client.city_village,
            appointmentDate: HisDate.toStandardHisDisplayFormat(client.appointment_date)
          };
          this.people.push(apptOb);
        });
        this.people_cpy = this.people;
      } catch (error) {
      }
    },
    async loadPageInf() {
      await this.getAppointments();
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    changePage(event) {
      this.currentPage = event.detail.value;
    },
    changeItemsPerPage(event) {
      this.itemsPerPage = event.detail.value;
      this.currentPage = 1;
    },
    searchTextUpdated(event) {
      const reason = event.target.value;
      this.search_text = reason;
      if (this.isValidString(this.search_text) == true) {
        this.search_txt_error = false;
        this.searchFirstLastName(this.search_text);
      } else {
        this.search_txt_error = true;
      }
    },
    isValidString(input) {
      const regex = /^[a-zA-Z\s]*$/;
      return regex.test(input);
    },
    searchFirstLastName(srch_str) {
      const people_array_tem = [];
      const nameRegex = new RegExp(srch_str, "i");
      this.people_cpy.forEach((person2) => {
        if (nameRegex.test(person2.name) == true) {
          people_array_tem.push(person2);
        }
      });
      this.people = people_array_tem;
    }
  }
});

const _hoisted_1 = { class: "container" };
const _hoisted_2 = {
  key: 0,
  class: "pagination-controls"
};
const _hoisted_3 = { class: "pagination-info" };
const _hoisted_4 = { class: "items-per-page" };
const _hoisted_5 = { class: "page-counter" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavigationMenu = resolveComponent("NavigationMenu");
  const _component_BasicInputField = resolveComponent("BasicInputField");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_nextApptInf = resolveComponent("nextApptInf");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_select_option = resolveComponent("ion-select-option");
  const _component_ion_select = resolveComponent("ion-select");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_NavigationMenu),
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, { size: "12" }, {
                  default: withCtx(() => [
                    createVNode(_component_BasicInputField, {
                      placeholder: "",
                      icon: _ctx.searchOutline,
                      inputValue: _ctx.search_text,
                      "onUpdate:inputValue": _ctx.searchTextUpdated
                    }, null, 8, ["icon", "inputValue", "onUpdate:inputValue"]),
                    createBaseVNode("div", null, [
                      _ctx.search_txt_error ? (openBlock(), createBlock(_component_ion_label, {
                        key: 0,
                        class: "error-label"
                      }, {
                        default: withCtx(() => [..._cache[2] || (_cache[2] = [
                          createTextVNode(toDisplayString("only letters allowed"), -1)
                        ])]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", {
              class: "appointment-list",
              style: normalizeStyle({ height: _ctx.listHeight + "px" })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.paginatedPeople, (person) => {
                return openBlock(), createBlock(_component_nextApptInf, {
                  key: person.person_id,
                  person
                }, null, 8, ["person"]);
              }), 128))
            ], 4),
            _ctx.people.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_component_ion_button, {
                class: "nav-button",
                onClick: _ctx.prevPage,
                disabled: _ctx.currentPage === 1
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.chevronBackOutline,
                    slot: "icon-only"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["onClick", "disabled"]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_ion_label, { style: { "margin-left": "20px" } }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode("Items per page:", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_ion_select, {
                    modelValue: _ctx.itemsPerPage,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.itemsPerPage = $event),
                    onIonChange: _ctx.changeItemsPerPage,
                    interface: "popover"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_select_option, { value: 10 }, {
                        default: withCtx(() => [..._cache[4] || (_cache[4] = [
                          createTextVNode("10", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_select_option, { value: 20 }, {
                        default: withCtx(() => [..._cache[5] || (_cache[5] = [
                          createTextVNode("20", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_ion_select_option, { value: 50 }, {
                        default: withCtx(() => [..._cache[6] || (_cache[6] = [
                          createTextVNode("50", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onIonChange"])
                ]),
                createBaseVNode("div", _hoisted_5, "Showing " + toDisplayString(_ctx.startIndex) + " - " + toDisplayString(_ctx.endIndex) + " of " + toDisplayString(_ctx.people.length), 1),
                createVNode(_component_ion_select, {
                  modelValue: _ctx.currentPage,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.currentPage = $event),
                  onIonChange: _ctx.changePage,
                  interface: "popover"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.totalPages, (page) => {
                      return openBlock(), createBlock(_component_ion_select_option, {
                        key: page,
                        value: page
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Page " + toDisplayString(page), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onIonChange"])
              ]),
              createVNode(_component_ion_button, {
                class: "nav-button",
                onClick: _ctx.nextPage,
                disabled: _ctx.currentPage === _ctx.totalPages
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.chevronForwardOutline,
                    slot: "icon-only"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["onClick", "disabled"])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const ManageAppointMentsTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8db740e3"]]);

export { ManageAppointMentsTemplate as default };
