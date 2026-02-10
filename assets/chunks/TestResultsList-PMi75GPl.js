import { s as defineComponent, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bu as IonPage, f as ref } from './vendor-DrpjccQs.js';
import { G as GoBack } from './GoBack-CnjEVzA0.js';
import { T as Toolbar, o as createModal, k as alertConfirmation, am as router, n as icons, _ as _export_sfc } from '../index-UzX4smS4.js';
import { R as ReusableDataTable } from './ReusableDataTable-B3Ei7iu5.js';
import { C as CPR } from './CPR-D0TsTzbY.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestResultsList",
  setup(__props) {
    const tableData = ref([]);
    const headers = [
      "Triage Cat",
      "First Name",
      "Last Name",
      "Arrival Time",
      "WaitingTime",
      "Aggregate",
      "Planned By",
      "Patient Care Area",
      "Attended By",
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
         <button class="btn btn-outline-danger btn-sm btn-table dispose-btn"
                style="color: rgba(0, 0, 0, 0.54);"
                data-id='${JSON.stringify(rowData)}'>
            ${icons.arrowRight}
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
        router.push("/aetc/test-results");
      },
      "dispose-btn": async (data) => {
        if (await alertConfirmation("Are you sure you want to dispose the patient?")) ;
      },
      "cpr-btn": (data) => {
        createModal(CPR, { class: "medium-modal" });
      }
    };
    const getScreeningList = async () => {
      const rawData = [
        {
          id: 1,
          triageCat: "Red",
          firstName: "John",
          lastName: "Doe",
          arrivalTime: "2024-06-01T09:00:00Z",
          waitingTime: "15 mins",
          aggregate: "15 mins",
          plannedBy: "Nurse A",
          patientCareArea: "Emergency",
          attendedBy: "Dr. Smith"
        },
        {
          id: 2,
          triageCat: "Green",
          firstName: "Jane",
          lastName: "Smith",
          arrivalTime: "2024-06-01T09:00:00Z",
          waitingTime: "10 mins",
          aggregate: "10 mins",
          plannedBy: "Nurse B",
          patientCareArea: "Emergency",
          attendedBy: "Dr. Brown"
        }
      ];
      tableData.value = rawData.map((row) => [
        row.triageCat,
        row.firstName,
        row.lastName,
        row.arrivalTime,
        row.waitingTime,
        row.aggregate,
        row.plannedBy,
        row.patientCareArea,
        row.attendedBy,
        buildActionButtons({
          id: row.id,
          name: `${row.firstName} ${row.lastName}`,
          triageCat: row.triageCat,
          attendedBy: row.attendedBy
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
              createVNode(GoBack, { title: "Patients waiting for Test & Results" }),
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

const TestResultsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5dff810c"]]);

export { TestResultsList as default };
