import { s as defineComponent, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bu as IonPage, f as ref } from './vendor-CIi-jrCy.js';
import { G as GoBack } from './GoBack-Buu7RfzC.js';
import { T as Toolbar, o as createModal, k as alertConfirmation, am as router, n as icons, _ as _export_sfc } from '../index-COGk33Kr.js';
import { R as ReusableDataTable } from './ReusableDataTable-o03TxMGp.js';
import { C as CPR } from './CPR-BzP9_1eL.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DispositionList",
  setup(__props) {
    const tableData = ref([]);
    const headers = [
      "First Name",
      "Last Name",
      "Gender",
      "Aggregated Time",
      "Disposed By",
      "Patient Care Area",
      "Disposition Type",
      "Destination",
      "Action"
    ];
    const tableOptions = {
      responsive: true,
      ordering: false,
      buttons: []
    };
    const buildActionButtons = (rowData) => {
      return `
        <button class="btn btn-outline-danger btn-sm btn-table redirection-btn"
                style="color:rgb(0, 100, 1)"
                data-id='${JSON.stringify(rowData)}'>
            ${icons.redirection}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table abscond-btn"
                style="color: rgba(0, 0, 0, 0.54);"
                data-id='${JSON.stringify(rowData)}'>
            ${icons.abscond}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table cpr-btn"
                style="color: red;"
                data-id='${JSON.stringify(rowData)}'>
            ${icons.cpr}
        </button>
    `;
    };
    const actionHandlers = {
      "redirection-btn": (data) => {
        console.log("🚀 ~ redirection data:", data);
        router.push("/aetc/disposition");
      },
      "abscond-btn": async (data) => {
        console.log("🚀 ~ abscond data:", data);
        if (await alertConfirmation("Are you sure you want to abscond?")) ;
      },
      "cpr-btn": (data) => {
        createModal(CPR, { class: "medium-modal" });
      }
    };
    const getScreeningList = async () => {
      const rawData = [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          gender: "Male",
          aggregatedTime: "15 mins",
          disposedBy: "Nurse A",
          patientCareArea: "Emergency",
          dispositionType: "Admitted",
          destination: "Ward 1"
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          gender: "Female",
          aggregatedTime: "10 mins",
          disposedBy: "Nurse B",
          patientCareArea: "Emergency",
          dispositionType: "Discharged",
          destination: "Home"
        }
      ];
      tableData.value = rawData.map((row) => [
        row.firstName,
        row.lastName,
        row.gender,
        row.aggregatedTime,
        row.disposedBy,
        row.patientCareArea,
        row.dispositionType,
        row.destination,
        buildActionButtons({
          id: row.id,
          name: `${row.firstName} ${row.lastName}`,
          dispositionType: row.dispositionType,
          destination: row.destination
        })
      ]);
    };
    onMounted(async () => {
      await getScreeningList();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(GoBack, { title: "Disposition List" }),
              createVNode(ReusableDataTable, {
                headers,
                data: tableData.value,
                options: tableOptions,
                actionHandlers
              }, null, 8, ["data"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const DispositionList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a93e8ae"]]);

export { DispositionList as default };
