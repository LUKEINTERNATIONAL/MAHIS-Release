import { v as defineComponent, a3 as onMounted, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bu as IonPage, f as ref } from './vendor-Cbv9TWZo.js';
import { G as GoBack } from './GoBack-C36aMlkZ.js';
import { T as Toolbar, n as icons, _ as _export_sfc } from '../index-BWK4lXtd.js';
import { R as ReusableDataTable } from './ReusableDataTable-DReTgV44.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SpecialtyList",
  setup(__props) {
    const tableData = ref([]);
    const headers = ["Triage Cat", "First Name", "Last Name", "Gender", "Aggregated Time", "Recorded By", "Patient Care Area", "Specialty", "Actions"];
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
          triageCat: "Red",
          firstName: "John",
          lastName: "Doe",
          gender: "Male",
          aggregatedTime: "15 mins",
          recordedBy: "Nurse A",
          patientCareArea: "Emergency",
          specialty: "Cardiology"
        },
        {
          id: 2,
          triageCat: "Green",
          firstName: "Jane",
          lastName: "Smith",
          gender: "Female",
          aggregatedTime: "10 mins",
          recordedBy: "Nurse B",
          patientCareArea: "Emergency",
          specialty: "Neurology"
        }
      ];
      tableData.value = rawData.map((row) => [
        row.triageCat,
        row.firstName,
        row.lastName,
        row.gender,
        row.aggregatedTime,
        row.recordedBy,
        row.patientCareArea,
        row.specialty,
        buildActionButtons({
          id: row.id,
          name: `${row.firstName} ${row.lastName}`,
          specialty: row.specialty,
          triageCat: row.triageCat
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
              createVNode(GoBack, { title: "Patients waiting for specialty" }),
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

const SpecialtyList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f62e40e2"]]);

export { SpecialtyList as default };
