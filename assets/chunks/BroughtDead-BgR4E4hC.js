import { v as defineComponent, a3 as onMounted, z as openBlock, P as createBlock, C as withCtx, B as createVNode, G as unref, aF as IonContent, bu as IonPage, f as ref } from './vendor-Cbv9TWZo.js';
import { G as GoBack } from './GoBack-C36aMlkZ.js';
import { T as Toolbar, n as icons, _ as _export_sfc } from '../index-BWK4lXtd.js';
import { R as ReusableDataTable } from './ReusableDataTable-DReTgV44.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BroughtDead",
  setup(__props) {
    const tableData = ref([]);
    const headers = [
      "First Name",
      "Surname",
      "Age",
      "National ID",
      "Place Of Death",
      "Date Of Death",
      "Gender",
      "Brought By",
      "Confirmed By",
      "Date Of Confirmation",
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
          surname: "Doe",
          age: "45",
          nationalId: "12345678",
          placeOfDeath: "Home",
          dateOfDeath: "2024-05-30",
          gender: "Male",
          broughtBy: "Ambulance",
          confirmedBy: "Dr. Smith",
          dateOfConfirmation: "2024-05-30"
        },
        {
          id: 2,
          firstName: "Jane",
          surname: "Smith",
          age: "60",
          nationalId: "87654321",
          placeOfDeath: "Hospital",
          dateOfDeath: "2024-05-29",
          gender: "Female",
          broughtBy: "Family",
          confirmedBy: "Dr. Jones",
          dateOfConfirmation: "2024-05-29"
        }
      ];
      tableData.value = rawData.map((row) => [
        row.firstName,
        row.surname,
        row.age,
        row.nationalId,
        row.placeOfDeath,
        row.dateOfDeath,
        row.gender,
        row.broughtBy,
        row.confirmedBy,
        row.dateOfConfirmation,
        buildActionButtons({
          id: row.id,
          name: `${row.firstName} ${row.surname}`,
          nationalId: row.nationalId,
          dateOfDeath: row.dateOfDeath
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
              createVNode(GoBack, { title: "Dead on Arrival List" }),
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

const BroughtDead = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94dcfdab"]]);

export { BroughtDead as default };
