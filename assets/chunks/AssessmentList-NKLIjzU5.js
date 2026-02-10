import { s as defineComponent, aL as useRouter, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bu as IonPage, f as ref } from './vendor-D_Iz0VZ7.js';
import { G as GoBack } from './GoBack-DwJQytxY.js';
import { T as Toolbar, o as createModal, k as alertConfirmation, n as icons, _ as _export_sfc } from '../index-DR39kxWD.js';
import { R as ReusableDataTable } from './ReusableDataTable-BB2Z6zPe.js';
import { C as CPR } from './CPR-DPSPsCT4.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AssessmentList",
  setup(__props) {
    const tableData = ref([]);
    const router = useRouter();
    const headers = ["Triage Cat", "First Name", "Last Name", "Gender", "WaitingTime", "Aggregate", "Triaged By", "Patient Care Area", "Action"];
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
        console.log("🚀 ~ redirection data:", data);
        router.push("/patient-profile");
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
          gender: "Male",
          waitingTime: "15 mins",
          aggregate: "15 mins",
          triagedBy: "Nurse A",
          patientCareArea: "Emergency"
        },
        {
          id: 2,
          triageCat: "Green",
          firstName: "Jane",
          lastName: "Smith",
          gender: "Female",
          waitingTime: "10 mins",
          aggregate: "10 mins",
          triagedBy: "Nurse B",
          patientCareArea: "Emergency"
        }
      ];
      tableData.value = rawData.map((row) => [
        row.triageCat,
        row.firstName,
        row.lastName,
        row.gender,
        row.waitingTime,
        row.aggregate,
        row.triagedBy,
        row.patientCareArea,
        buildActionButtons({
          id: row.id,
          name: `${row.firstName} ${row.lastName}`,
          triageCat: row.triageCat,
          patientCareArea: row.patientCareArea
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
              createVNode(GoBack, { title: "Patients Waiting For Assessments" }),
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

const AssessmentList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4f4a5d3"]]);

export { AssessmentList as default };
