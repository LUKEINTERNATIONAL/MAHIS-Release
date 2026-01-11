import { q as defineComponent, r as ref, a2 as onMounted, n as nextTick, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, x as createElementBlock, G as createCommentVNode, z as createVNode, B as createBaseVNode, E as unref, H as IonContent, bk as V, a4 as normalizeClass, bq as IonPage, cX as DataTable } from './vendor-Cy_N32Zh.js';
import { H as HisDate, T as Toolbar, g as getPouchDBRecords, t as toastWarning, o as createModal, _ as _export_sfc } from '../index-CZxb0S4T.js';
import { O as OfflineMoreDetailsModal } from './OfflineMoreDetailsModal-BUyM-ql8.js';

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OfflineRecords",
  setup(__props) {
    const reportData = ref([]);
    ref([]);
    ref([]);
    ref(HisDate.sessionDate());
    ref(HisDate.sessionDate());
    ref("all");
    const isLoading = ref(false);
    const dataTable = ref(null);
    const options = {
      responsive: true,
      select: false,
      layout: {
        topStart: null,
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      }
    };
    const buildTableData = async () => {
      isLoading.value = true;
      try {
        const documents = await getPouchDBRecords("patients_records");
        reportData.value = documents.map((item) => [
          `${item.personInformation.given_name} ${item.personInformation.family_name}`,
          item.ID,
          item.saveStatusPersonInformation,
          item.saveStatusBirthRegistration,
          item.saveStatusGuardianInformation,
          "",
          "",
          `<button class="btn btn-sm btn-primary edit-btn" data-id='${JSON.stringify(item)}'>More details</button>`
        ]);
        V.use(DataTable);
      } catch (error) {
        toastWarning("An error occurred while loading data.");
      } finally {
        isLoading.value = false;
      }
    };
    const handleEdit = (data) => {
      openModal(JSON.parse(data));
    };
    const handleDelete = async (id) => {
      console.log(`Deleting item with id: ${id}`);
    };
    const openModal = async (clientData) => {
      const data = await createModal(OfflineMoreDetailsModal, { class: "fullScreenModal" }, true, { clientData });
      if (data === "dismiss") {
        await buildTableData();
      }
    };
    onMounted(async () => {
      await buildTableData();
      nextTick(() => {
        const table = dataTable.value.dt;
        table.columns.adjust().draw();
        table.on("click", ".edit-btn", (e) => {
          const id = e.target.getAttribute("data-id");
          handleEdit(id);
        });
        table.on("click", ".delete-btn", (e) => {
          const id = e.target.getAttribute("data-id");
          handleDelete(id);
        });
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
                _cache[2] || (_cache[2] = createBaseVNode("h4", { style: { "width": "100%", "text-align": "center", "font-weight": "700" } }, "Offline Records Status", -1)),
                createBaseVNode("div", _hoisted_3, [
                  createVNode(unref(V), {
                    ref_key: "dataTable",
                    ref: dataTable,
                    options,
                    data: reportData.value,
                    class: "display nowrap",
                    width: "100%"
                  }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createBaseVNode("thead", null, [
                        createBaseVNode("tr", null, [
                          createBaseVNode("th", null, "Full Name"),
                          createBaseVNode("th", null, "ID"),
                          createBaseVNode("th", null, "Personal Info Status"),
                          createBaseVNode("th", null, "Birth Registration Status"),
                          createBaseVNode("th", null, "Guardian Info Status"),
                          createBaseVNode("th", null, "Vitals Status"),
                          createBaseVNode("th", null, "Vaccine Admin Status"),
                          createBaseVNode("th", null, "Action")
                        ])
                      ], -1)
                    ])]),
                    _: 1
                  }, 8, ["data"])
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

const OfflineRecords = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3be717c5"]]);

export { OfflineRecords as default };
