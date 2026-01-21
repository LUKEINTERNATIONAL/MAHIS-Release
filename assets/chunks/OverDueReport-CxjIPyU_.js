import { v as defineComponent, bL as IonCard, bp as V, aA as IonCol, ag as IonRow, aC as IonToolbar, aD as IonTitle, bu as IonPage, cw as IonMenuButton, I as IonHeader, aF as IonContent, c$ as DataTable, y as resolveComponent, P as createBlock, A as openBlock, D as withCtx, z as createElementBlock, J as createCommentVNode, B as createVNode, C as createBaseVNode, a5 as normalizeClass } from './vendor-CJ5LqAxe.js';
import { F as DynamicButton, a3 as ToolbarSearch, T as Toolbar, d as _sfc_main$1, t as toastWarning, H as HisDate, P as PatientService, u as useDemographicsStore, _ as _export_sfc } from '../index-BBSKuWmW.js';
import { I as ImmunizationGroupGraph, a as ImmunizationTrendsGraph } from './ImmunizationGroupGraph-nTgs9ROb.js';
import { g as getVaccinesData } from './dashboard_service-BB2ZvjCT.js';
import { m as mapState } from './pinia-BmV_6_tV.js';
import { u as useStartEndDate } from './StartEndDate-DtM03-Fm.js';
import { B as BasicForm } from './BasicForm-DXf9I_la.js';

const _sfc_main = defineComponent({
  name: "Home",
  mixins: [_sfc_main$1],
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
    ImmunizationTrendsGraph,
    ImmunizationGroupGraph,
    DataTable: V,
    IonCard,
    DynamicButton,
    BasicForm
  },
  data() {
    return {
      reportData: [],
      startDate: HisDate.sessionDate(),
      endDate: HisDate.sessionDate(),
      options: {
        responsive: true,
        select: false
      },
      selectButton: "all",
      isLoading: false
    };
  },
  computed: {
    ...mapState(useStartEndDate, ["startEndDate"])
  },
  watch: {
    $route: {
      async handler(data) {
        if (data.name == "OverDueReport") {
          await this.buildTableData().then(() => {
            const table = this.$refs.dataTable?.dt;
            table.on("click", ".follow-up-btn", (e) => {
              const id = e.target.getAttribute("data-id");
              this.handleFollowUp(id);
            });
          });
        }
      },
      deep: true
    }
  },
  async mounted() {
    await this.buildTableData().then(() => {
      const table = this.$refs.dataTable?.dt;
      table.on("click", ".follow-up-btn", (e) => {
        const id = e.target.getAttribute("data-id");
        this.handleFollowUp(id);
      });
    });
  },
  methods: {
    async handleFollowUp(id) {
      const patientData = await PatientService.findByID(id);
      await useDemographicsStore().setPatientRecord(patientData);
      this.$router.push("patientProfile");
    },
    async handleInputData(event) {
      if (event.inputHeader == "Start date") {
        this.startDate = HisDate.toStandardHisFormat(event.value);
      }
      if (event.inputHeader == "End date") {
        this.endDate = HisDate.toStandardHisFormat(event.value);
      }
      await this.buildTableData();
    },
    async buildTableData() {
      this.isLoading = true;
      try {
        this.reportData = [];
        const vaccineData = await getVaccinesData();
        vaccineData.forEach((dataItem) => {
          const overdue_clients = dataItem.value.under_five_missed_visits.concat(dataItem.value.over_five_missed_visits);
          overdue_clients.forEach((visit) => {
            let doses = 0;
            let item = visit.client.table;
            visit.missed_visits.forEach((missed_visit) => {
              doses += missed_visit.antigens.length;
            });
            this.reportData.push([
              `${item.given_name} ${item.family_name}`,
              item.birthdate,
              doses,
              `<button class="btn btn-sm btn-primary follow-up-btn" data-id="${item.patient_id}">Follow UP</button>`
            ]);
          });
        });
        V.use(DataTable);
      } catch (error) {
        toastWarning("An error occure while loading data.");
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async selectedButton(button) {
      this.selectButton = button;
      await this.buildTableData();
    },
    async selectButton(button) {
      this.selectedButton = button;
      await this.buildTableData();
    }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_4 = { style: { "display": "inline-block", "vertical-align": "top", "max-width": "400px", "top": "-10px", "position": "relative", "margin-right": "10px" } };
const _hoisted_5 = { style: { "display": "inline-block", "vertical-align": "top", "margin-top": "10px", "float": "right" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_basic_form = resolveComponent("basic-form");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_DataTable = resolveComponent("DataTable");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, {
    class: normalizeClass({ loading: _ctx.isLoading })
  }, {
    default: withCtx(() => [
      _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_spinner, { name: "bubles" }),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
      ])) : createCommentVNode("", true),
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            _cache[3] || (_cache[3] = createBaseVNode("h1", { style: { "width": "100%", "text-align": "center", "font-weight": "700" } }, "Overdue Report", -1)),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_basic_form, {
                  contentData: _ctx.startEndDate,
                  "onUpdate:inputValue": _ctx.handleInputData
                }, null, 8, ["contentData", "onUpdate:inputValue"])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_ion_button, {
                  class: "addBtn",
                  color: "primary"
                }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", { class: "centerBigBtnContain" }, "Export To CSV")
                    ], -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            _ctx.reportData.length > 0 ? (openBlock(), createBlock(_component_DataTable, {
              key: 0,
              ref: "dataTable",
              options: _ctx.options,
              data: _ctx.reportData,
              class: "display nowrap",
              width: "100%"
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", null, "Name"),
                    createBaseVNode("th", null, "Date Of Birth"),
                    createBaseVNode("th", null, "Missed Doses"),
                    createBaseVNode("th", null, "Action")
                  ])
                ], -1)
              ])]),
              _: 1
            }, 8, ["options", "data"])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
const OverDueReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c8399978"]]);

export { OverDueReport as default };
