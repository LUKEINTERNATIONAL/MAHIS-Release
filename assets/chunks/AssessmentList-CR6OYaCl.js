import { v as defineComponent, aK as useRouter, a3 as onMounted, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bu as IonPage, f as ref } from './vendor-Cbv9TWZo.js';
import { G as GoBack } from './GoBack-CSCeh23X.js';
import { T as Toolbar, n as icons, _ as _export_sfc } from '../index-CbET1MAa.js';
import { R as ReusableDataTable } from './ReusableDataTable-1E_T3mFL.js';

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
        router.push("/patient-profile");
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

const AssessmentList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6dd55880"]]);

export { AssessmentList as default };
