import { s as defineComponent, aA as IonCol, af as IonRow, dD as IonFabButton, dE as IonFab, bu as IonPage, aG as IonContent, dw as downloadOutline, eY as fileTray, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, C as createBaseVNode, a4 as normalizeClass, J as Fragment, R as renderList, D as toDisplayString, a5 as createTextVNode, S as withDirectives, az as vModelText, O as createBlock } from './vendor-Dw8g_yFL.js';
import { N as NavigationMenu } from './NavigationMenu-qLmnIugm.js';
import { P as PersonCardComponent, A as AEFIReportTemplate } from './AEFIReportTemplate-DDXNKljz.js';
import { m as mapState } from './pinia-zB_ge_8G.js';
import { c as getImmunizationVaccineNames, d as getVaccinesAdministered, e as exportReportToCSV } from './vaccines_service-CTFuJlsP.js';
import { E as EIRreportsStore } from './EIRreportsStore-DRz81GZp.js';
import { P as PatientService, u as useDemographicsStore, o as createModal, _ as _export_sfc } from '../index-CIYQg2Yf.js';

const _sfc_main$1 = defineComponent({
  name: "TableComponent",
  components: { IonContent, IonPage, IonFab, IonFabButton, NavigationMenu, IonRow, IonCol, PersonCardComponent },
  data() {
    return {
      selectedSection: "",
      // To keep track of the selected section
      selectedColumn: "",
      // To keep track of the selected column
      tableData: [],
      fileTray,
      downloadOutline,
      exportReportToCSV,
      peopleArray: [
        { id: 1, firstName: "John", lastName: "Doe", age: 30, dob: "1993-05-15", sex: "Male" },
        { id: 2, firstName: "Jane", lastName: "Smith", age: 28, dob: "1995-09-22", sex: "Female" }
        // Add more people as needed
      ]
    };
  },
  watch: {
    $route: {
      async handler(data) {
        if (data.name == "immunizationEirReport") await this.getDrugs();
        await this.initReport();
      },
      deep: true
    }
  },
  computed: {
    ...mapState(EIRreportsStore, ["start_date", "end_date", "navigationPayload"])
  },
  async mounted() {
    await this.getDrugs();
    await this.initReport();
  },
  methods: {
    selectSection(section) {
      this.selectedSection = section;
      this.selectedColumn = "";
    },
    selectColumn(column) {
      this.selectedColumn = column;
      this.selectedSection = "";
    },
    async initReport() {
      const data = await getVaccinesAdministered(this.start_date, this.end_date);
      data.less_than_one_year.forEach((item) => {
        this.fillCells(item, "lessThan1y");
      });
      data.greater_than_one_year.forEach((item) => {
        this.fillCells(item, "moreThan1y");
      });
    },
    fillCells(AV, r_key) {
      this.tableData.forEach((t_data) => {
        if (t_data.drug.name == AV.value_text) {
          if (r_key in t_data.fixed) {
            let data_key = r_key + "Persons";
            let value = t_data.fixed[r_key];
            t_data.fixed[r_key] = value + 1;
            t_data.fixed[data_key].push(AV);
          }
        }
      });
    },
    async getDrugs() {
      const data = await getImmunizationVaccineNames();
      const items = [];
      data.forEach((drug) => {
        const row_item = {
          label: drug.name,
          fixed: { lessThan1y: 0, moreThan1y: 0, lessThan1yPersons: [], moreThan1yPersons: [] },
          outreach: { lessThan1y: 0, moreThan1y: 0 },
          drug
        };
        items.push(row_item);
      });
      this.tableData = items;
      const store = EIRreportsStore();
      store.setImmunizationMonthlyRepoartData(this.tableData);
    },
    openPersonCardComponent(clients) {
      console.log(clients);
      const handleModalAction = (event) => {
        this.openPatientProfile(event.detail.client_id);
      };
      const dataToPass = { people: clients, headingText: `Immunization (Client Drill Down | ${this.navigationPayload.subTxt})` };
      createModal(PersonCardComponent, { class: "large-modal" }, true, dataToPass, { "view-client": handleModalAction });
    },
    async openPatientProfile(client_id) {
      const patientData = await PatientService.findByID(client_id);
      patientData.patient_identifiers.forEach(async (indnt) => {
        if (indnt.identifier_type == 3) {
          const patientData2 = await PatientService.findByNpid(indnt.identifier);
          await useDemographicsStore().setPatientRecord(patientData2[0]);
          this.$router.push("/patient-profile");
        }
      });
    }
  }
});

const _hoisted_1 = { class: "custom-table" };
const _hoisted_2 = ["onUpdate:modelValue"];
const _hoisted_3 = ["onUpdate:modelValue"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_fab_button = resolveComponent("ion-fab-button");
  const _component_ion_fab = resolveComponent("ion-fab");
  const _component_pan = resolveComponent("pan");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, null, {
          default: withCtx(() => [..._cache[6] || (_cache[6] = [
            createBaseVNode("h1", { style: { "width": "100%", "text-align": "left", "font-weight": "400" } }, "Immunization", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_ion_fab, {
      slot: "fixed",
      horizontal: "end",
      vertical: "top",
      onClick: _ctx.exportReportToCSV
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_fab_button, null, {
          default: withCtx(() => [
            createVNode(_component_ion_icon, { icon: _ctx.downloadOutline }, null, 8, ["icon"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["onClick"]),
    createBaseVNode("table", _hoisted_1, [
      _cache[9] || (_cache[9] = createBaseVNode("colgroup", null, [
        createBaseVNode("col", { style: { "width": "20%" } }),
        createBaseVNode("col", { style: { "width": "20%" } }),
        createBaseVNode("col", { style: { "width": "20%" } }),
        createBaseVNode("col", { style: { "width": "20%" } }),
        createBaseVNode("col", { style: { "width": "20%" } })
      ], -1)),
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          _cache[7] || (_cache[7] = createBaseVNode("th", null, null, -1)),
          createBaseVNode("th", {
            colspan: "2",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.selectSection("fixed")),
            class: normalizeClass({ selected: _ctx.selectedSection === "fixed" })
          }, "Static", 2),
          createBaseVNode("th", {
            colspan: "2",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.selectSection("outreach")),
            class: normalizeClass({ selected: _ctx.selectedSection === "outreach" })
          }, "Outreach", 2)
        ]),
        createBaseVNode("tr", null, [
          _cache[8] || (_cache[8] = createBaseVNode("th", null, null, -1)),
          createBaseVNode("th", {
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.selectColumn("fixedLessThan1y")),
            class: normalizeClass({ selected: _ctx.selectedColumn === "fixedLessThan1y" })
          }, "<1y", 2),
          createBaseVNode("th", {
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.selectColumn("fixedMoreThan1y")),
            class: normalizeClass({ selected: _ctx.selectedColumn === "fixedMoreThan1y" })
          }, ">1y", 2),
          createBaseVNode("th", {
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.selectColumn("outreachLessThan1y")),
            class: normalizeClass({ selected: _ctx.selectedColumn === "outreachLessThan1y" })
          }, "<1y", 2),
          createBaseVNode("th", {
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.selectColumn("outreachMoreThan1y")),
            class: normalizeClass({ selected: _ctx.selectedColumn === "outreachMoreThan1y" })
          }, ">1y", 2)
        ])
      ]),
      createBaseVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableData, (row, index) => {
          return openBlock(), createElementBlock("tr", { key: index }, [
            createBaseVNode("td", null, toDisplayString(row.label), 1),
            createBaseVNode("td", {
              class: normalizeClass({
                selected: _ctx.selectedSection === "fixed" || _ctx.selectedColumn === "fixedLessThan1y"
              })
            }, [
              createVNode(_component_pan, {
                onClick: ($event) => _ctx.openPersonCardComponent(row.fixed.lessThan1yPersons)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.fixed.lessThan1y), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ], 2),
            createBaseVNode("td", {
              class: normalizeClass({
                selected: _ctx.selectedSection === "fixed" || _ctx.selectedColumn === "fixedMoreThan1y"
              })
            }, [
              createVNode(_component_pan, {
                onClick: ($event) => _ctx.openPersonCardComponent(row.fixed.moreThan1yPersons)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.fixed.moreThan1y), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ], 2),
            createBaseVNode("td", {
              class: normalizeClass({
                selected: _ctx.selectedSection === "outreach" || _ctx.selectedColumn === "outreachLessThan1y"
              })
            }, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": ($event) => row.outreach.lessThan1y = $event,
                class: "editable-input"
              }, null, 8, _hoisted_2), [
                [vModelText, row.outreach.lessThan1y]
              ])
            ], 2),
            createBaseVNode("td", {
              class: normalizeClass({
                selected: _ctx.selectedSection === "outreach" || _ctx.selectedColumn === "outreachMoreThan1y"
              })
            }, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": ($event) => row.outreach.moreThan1y = $event,
                class: "editable-input"
              }, null, 8, _hoisted_3), [
                [vModelText, row.outreach.moreThan1y]
              ])
            ], 2)
          ]);
        }), 128))
      ])
    ])
  ], 64);
}
const EIR_Report_Template = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-48e809ee"]]);

const _sfc_main = defineComponent({
  name: "TableComponent",
  components: { IonContent, IonPage, NavigationMenu, AEFIReportTemplate, EIR_Report_Template, IonRow, IonCol },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  async mounted() {
  },
  methods: {}
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavigationMenu = resolveComponent("NavigationMenu");
  const _component_EIR_Report_Template = resolveComponent("EIR_Report_Template");
  const _component_AEFIReportTemplate = resolveComponent("AEFIReportTemplate");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_NavigationMenu),
      createVNode(_component_ion_content, { class: "ion-padding" }, {
        default: withCtx(() => [
          createVNode(_component_EIR_Report_Template),
          createVNode(_component_AEFIReportTemplate)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const EIR_Report = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-caf79033"]]);

export { EIR_Report as default };
