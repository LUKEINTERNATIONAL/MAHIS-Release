import { q as defineComponent, r as ref, aH as useRouter, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, br as IonPage } from './vendor-BPW-J91F.js';
import { G as GoBack } from './GoBack-PkR4j-ek.js';
import { T as Toolbar, o as createModal, k as alertConfirmation, n as icons, _ as _export_sfc } from '../index-NXBj2cdM.js';
import { R as ReusableDataTable } from './ReusableDataTable-B5vWM0x8.js';
import { C as CPR } from './CPR-DyTHHEnQ.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegistrationList",
  setup(__props) {
    const tableData = ref([]);
    const router = useRouter();
    const headers = ["Visit Number", "First Name", "Last Name", "Gender", "Arrival Time", "WaitingTime", "Aggregate", "Screened By", "Action"];
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
        console.log("Redirecting for:", data);
        router.push("/findPatient");
      },
      "abscond-btn": async (data) => {
        console.log("Abscond requested for:", data);
        if (await alertConfirmation("Are you sure you want to abscond?")) {
          console.log("Abscond confirmed for:", data);
        }
      },
      "cpr-btn": (data) => {
        console.log("Opening CPR modal for:", data);
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
          gender: "Male",
          arrivalTime: "2024-06-01T09:00:00Z",
          waitingTime: "15 mins",
          aggregate: "15 mins",
          screenedBy: "Nurse A"
        },
        {
          id: 2,
          visitNumber: "VN002",
          firstName: "Jane",
          lastName: "Smith",
          gender: "Female",
          arrivalTime: "2024-06-01T09:00:00Z",
          waitingTime: "10 mins",
          aggregate: "10 mins",
          screenedBy: "Nurse B"
        }
      ];
      tableData.value = rawData.map((row) => [
        row.visitNumber,
        row.firstName,
        row.lastName,
        row.gender,
        row.arrivalTime,
        row.waitingTime,
        row.aggregate,
        row.screenedBy,
        buildActionButtons({
          id: row.id,
          visitNumber: row.visitNumber,
          name: `${row.firstName} ${row.lastName}`
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
              createVNode(GoBack, { title: "Patients waiting for Registration" }),
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

const RegistrationList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-058b1f1c"]]);

export { RegistrationList as default };
