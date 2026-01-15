import { q as defineComponent, r as ref, a1 as onMounted, N as createBlock, y as openBlock, B as withCtx, z as createVNode, E as unref, aD as IonContent, bs as IonPage } from './vendor-sqYZJ6fK.js';
import { G as GoBack } from './GoBack-B0q9ZqMg.js';
import { T as Toolbar, n as icons, _ as _export_sfc } from '../index-_N7CIn5p.js';
import { R as ReusableDataTable } from './ReusableDataTable-qNCGEjG3.js';

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
      },
      "abscond-btn": (data) => {
        console.log("🚀 ~ abscond data:", data);
      },
      "cpr-btn": (data) => {
        console.log("🚀 ~ cpr data:", data);
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

const DispositionList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0defdb7"]]);

export { DispositionList as default };
