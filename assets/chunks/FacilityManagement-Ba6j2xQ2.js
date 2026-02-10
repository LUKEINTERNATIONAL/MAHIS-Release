import { s as defineComponent, ct as useRoute, a2 as onMounted, bp as V, cZ as DataTable, n as nextTick, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, z as createElementBlock, A as createVNode, C as createBaseVNode, H as createCommentVNode, F as unref, aG as IonContent, a4 as normalizeClass, bu as IonPage, f as ref } from './vendor-DrpjccQs.js';
import { n as icons, g as getPouchDBRecords, T as Toolbar, a5 as postIntoPouchDB, G as toastSuccess, t as toastWarning, _ as _export_sfc } from '../index-DGHRL9sL.js';
import { B as BasicForm } from './BasicForm-Bp5E56e4.js';

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_4 = { style: { "width": "50%", "max-width": "350px" } };
const _hoisted_5 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FacilityManagement",
  setup(__props) {
    useRoute();
    const dataTableRef = ref(null);
    const isLoading = ref(false);
    const selectedDistrictName = ref("");
    const districtInputField = ref([]);
    const formatTableData = async (records) => {
      return Promise.all(
        records.map(async (item) => {
          const isActivated = item.dde_activated === true || item.dde_activated === "true";
          const buttonClass = isActivated ? "btn-danger" : "btn-primary";
          const buttonText = isActivated ? " Deactivated DDE" : "Activate DDE";
          return {
            code: item.code,
            name: item.name,
            ownership: item.ownership,
            facility_type: item.facility_type,
            status: item.status,
            district: item.district,
            date_opened: item.date_opened,
            dde_activated: isActivated ? `<span style="display: inline-block;
                                    background: linear-gradient(135deg, #4caf50, #2e7d32);
                                    border-radius: 20px; 
                                    padding: 4px 12px; 
                                    color: #fff;
                                    line-height: 1;
                                    text-align: center;
                                    transition: all 0.3s ease;
                                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15)">
                        Yes
                        </span>` : `<span style="display: inline-block;
                                    background: linear-gradient(135deg, #e53935, #b71c1c);
                                    border-radius: 20px; 
                                    padding: 4px 12px; 
                                    color: #fff;
                                    line-height: 1;
                                    text-align: center;
                                    transition: all 0.3s ease;
                                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15)">
                        No
                        </span>`,
            type: item.type,
            actions: `
                    <button class="btn btn-sm ${buttonClass} activate-btn" 
                            data-id='${JSON.stringify(item)}' 
                            data-facility-id="${item._id || item.id}">
                        ${buttonText}
                    </button>
                `
          };
        })
      );
    };
    const reloadTableData = (reloadPagination = true) => {
      const table = dataTableRef.value.dt;
      table.ajax.reload(null, reloadPagination);
    };
    const options = ref({
      responsive: true,
      select: false,
      processing: true,
      serverSide: true,
      pageLength: 10,
      searching: true,
      ajax: async function(data, callback) {
        try {
          isLoading.value = true;
          const currentPage = Math.floor(data.start / data.length) + 1;
          let selector = {};
          if (selectedDistrictName.value) {
            selector.name = selectedDistrictName.value;
          }
          if (data.search?.value) {
            selector.name = {
              $regex: new RegExp(data.search.value, "i")
              // Case-insensitive regex search
            };
          }
          const filter = {
            currentPage,
            itemsPerPage: data.length,
            selector
          };
          const facilities = await getPouchDBRecords("facilities", filter);
          console.log("🚀 ~ facilities:........", facilities);
          const formattedData = await formatTableData(facilities.records);
          callback({
            draw: data.draw,
            recordsTotal: facilities.totalCount,
            recordsFiltered: facilities.totalCount,
            data: formattedData
          });
        } catch (error) {
          console.error("Error fetching data:", error);
          toastWarning("An error occurred while loading data.");
          callback({
            draw: data.draw,
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        } finally {
          isLoading.value = false;
        }
      },
      columns: [
        { data: "code" },
        { data: "name" },
        { data: "ownership" },
        { data: "facility_type" },
        { data: "status" },
        { data: "district" },
        { data: "date_opened" },
        { data: "dde_activated" },
        { data: "type" },
        { data: "actions" }
      ],
      language: {
        processing: "Loading...",
        emptyTable: "No data available",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        infoEmpty: "Showing 0 to 0 of 0 entries",
        lengthMenu: "Show _MENU_ entries",
        loadingRecords: "Loading...",
        search: "Search:",
        zeroRecords: "No matching records found"
      }
    });
    const setDistrict = async (data) => {
      selectedDistrictName.value = data?.value?.name;
      reloadTableData();
    };
    const activateDDE = async (facilityData) => {
      try {
        const updatedFacility = {
          ...facilityData,
          dde_activated: !facilityData.dde_activated
        };
        postIntoPouchDB({
          storeName: "facilities",
          data: updatedFacility,
          command: "upsertDocument"
        });
        toastSuccess("DDE has been successfully activated for this facility.");
        reloadTableData(false);
      } catch (error) {
        console.error("Error activating DDE:", error);
        toastWarning("Failed to activate DDE. Please try again.");
      }
    };
    const setupEventHandlers = () => {
      const table = dataTableRef.value.dt;
      table.on("click", ".activate-btn", (e) => {
        const button = e.target;
        const data = button.getAttribute("data-id");
        if (data) {
          activateDDE(JSON.parse(data));
        }
      });
    };
    onMounted(async () => {
      districtInputField.value = [
        {
          selectedData: [],
          isFinishBtn: false,
          data: {
            rowData: [
              {
                colData: [
                  {
                    inputHeader: "Filter by districts",
                    popOver: true,
                    icon: icons.search,
                    value: "",
                    name: "filter_district",
                    eventType: "input",
                    alertsErrorMassage: "",
                    isSingleSelect: true,
                    trackBy: "district_id",
                    multiSelectData: await getPouchDBRecords("districts", { selector: { region_id: { $ne: 4 } } }),
                    id: "",
                    idName: "district_id"
                  }
                ]
              }
            ]
          }
        }
      ];
      V.use(DataTable);
      nextTick(() => {
        setupEventHandlers();
      });
    });
    return (_ctx, _cache) => {
      const _component_ion_spinner = resolveComponent("ion-spinner");
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(_component_ion_spinner, { name: "bubbles" }),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(Toolbar),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                _cache[2] || (_cache[2] = createBaseVNode("h4", { style: { "width": "100%", "text-align": "center", "font-weight": "700" } }, "Facility Management", -1)),
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(BasicForm, {
                      contentData: districtInputField.value,
                      "onUpdate:inputValue": setDistrict
                    }, null, 8, ["contentData"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(unref(V), {
                    ref_key: "dataTableRef",
                    ref: dataTableRef,
                    options: options.value,
                    class: "display nowrap modern-table",
                    width: "100%"
                  }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createBaseVNode("thead", null, [
                        createBaseVNode("tr", null, [
                          createBaseVNode("th", null, "Code"),
                          createBaseVNode("th", null, "Name"),
                          createBaseVNode("th", null, "Ownership"),
                          createBaseVNode("th", null, "Facility type"),
                          createBaseVNode("th", null, "Status"),
                          createBaseVNode("th", null, "District"),
                          createBaseVNode("th", null, "Date opened"),
                          createBaseVNode("th", null, "Dde activated"),
                          createBaseVNode("th", null, "Type"),
                          createBaseVNode("th", null, "Action")
                        ])
                      ], -1)
                    ])]),
                    _: 1
                  }, 8, ["options"])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});

const FacilityManagement = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b784efc"]]);

export { FacilityManagement as default };
