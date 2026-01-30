import { s as defineComponent, aL as useRouter, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bu as IonPage, f as ref } from './vendor-D9gV--WW.js';
import { G as GoBack } from './GoBack-LlnWlQHe.js';
import { T as Toolbar, o as createModal, k as alertConfirmation, n as icons, _ as _export_sfc } from '../index-xr0muyVH.js';
import { R as ReusableDataTable } from './ReusableDataTable-D1uU1nBz.js';
import { C as CPR } from './CPR-BvWNDTaw.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TriageList",
  setup(__props) {
    const tableData = ref([]);
    const router = useRouter();
    const headers = ["Visit Number", "First Name", "Last Name", "Arrival Time", "WaitingTime", "Aggregate", "Registered By", "Action"];
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
        router.push("/aetc/triage");
      },
      "abscond-btn": async (data) => {
        console.log("🚀 ~ abscond data:", data);
        if (await alertConfirmation("Are you sure you want to abscond?")) {
          console.log("Abscond confirmed for:", data);
        }
      },
      "cpr-btn": (data) => {
        console.log("🚀 ~ cpr data:", data);
        createModal(CPR, { class: "medium-modal" });
      }
    };
    const getScreeningList = async () => {
      const rawData = [
        {
          id: 1,
          visitNumber: "VN001",
          firstName: "John",
          lastName: "Doe",
          arrivalTime: "2024-06-01T09:00:00Z",
          waitingTime: "15 mins",
          aggregate: "15 mins",
          registeredBy: "Nurse A"
        },
        {
          id: 2,
          visitNumber: "VN002",
          firstName: "Jane",
          lastName: "Smith",
          arrivalTime: "2024-06-01T09:00:00Z",
          waitingTime: "10 mins",
          aggregate: "10 mins",
          registeredBy: "Nurse B"
        }
      ];
      tableData.value = rawData.map((row) => [
        row.visitNumber,
        row.firstName,
        row.lastName,
        row.arrivalTime,
        row.waitingTime,
        row.aggregate,
        row.registeredBy,
        buildActionButtons({
          id: row.id,
          visitNumber: row.visitNumber,
          name: `${row.firstName} ${row.lastName}`,
          registeredBy: row.registeredBy
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
              createVNode(GoBack, { title: "Patients waiting for Triage" }),
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

const TriageList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a24ab9a"]]);

export { TriageList as default };
