import { q as defineComponent, r as ref, aH as useRouter, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, bI as IonCard, b7 as IonCardHeader, b6 as IonCardTitle, a5 as createTextVNode, b9 as IonCardContent, B as createBaseVNode, x as createElementBlock, G as createCommentVNode, br as IonPage } from './vendor-BPW-J91F.js';
import { y as StandardValidations, D as PatientSearchService, T as Toolbar, C as StandardForm, F as DynamicButton, k as alertConfirmation, t as toastWarning, S as Service, n as icons, _ as _export_sfc } from '../index-Be0fRy6M.js';
import { G as GoBack } from './GoBack-s_WDrK-W.js';
import { R as ReusableDataTable } from './ReusableDataTable-cPPr-fqY.js';
import { u as usePatientProfile } from './usePatientProfile-CcW4g8Dn.js';

const _hoisted_1 = { class: "ion-padding ion-text-center" };
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FindPatient",
  setup(__props) {
    const tableData = ref([]);
    const formRef = ref(null);
    const searchResults = ref([]);
    const router = useRouter();
    const headers = ["MRN", "First Name", "Last Name", "Gender", "DoB", "Home address", "Current address", "Phone", "Action"];
    const tableOptions = {
      responsive: true,
      ordering: false,
      layout: {
        topStart: "buttons",
        topEnd: "",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      buttons: [
        {
          text: " <b>+ Add New Patient </b>",
          className: "add-test text-white",
          action: async () => {
            router.push("/registration/manual");
          }
        }
      ]
    };
    const patientArrivalForm = [
      {
        type: "input",
        header: "First name",
        name: "given_name",
        componentType: "inputField",
        validation: StandardValidations.required,
        grid: { s: "4" }
      },
      {
        type: "input",
        header: "Last name",
        name: "family_name",
        componentType: "inputField",
        validation: StandardValidations.required,
        grid: { s: "4" }
      },
      { grid: { s: "0.5" } },
      {
        componentType: "radioButtonField",
        header: "Gender",
        name: "gender",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        type: "inline",
        grid: { s: "3.5" },
        options: [
          {
            label: "Male",
            value: "M"
          },
          {
            label: "Female",
            value: "F"
          }
        ]
      }
    ];
    const patientSearchService = new PatientSearchService();
    const { openPIM } = usePatientProfile();
    const buildActionButtons = (rowData) => {
      return `
        <button class="btn btn-outline-danger btn-sm btn-table redirection-btn" 
                style="color:rgb(0, 100, 1)" 
                data-id='${JSON.stringify(rowData)}'>
            ${icons.redirection}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table view-btn" 
                style="color: rgba(0, 0, 0, 0.54);" 
                data-id='${JSON.stringify(rowData)}'>
            ${icons.view2}
        </button>
    `;
    };
    const actionHandlers = {
      "redirection-btn": async (data) => {
        console.log("Redirecting for:", data);
        if (await alertConfirmation("Are you sure you want to continue with this patient?")) {
          console.log("Abscond confirmed for:", data);
          router.push("/home");
        }
      },
      "view-btn": async (data) => {
        console.log("Abscond requested for:", data);
        openPIM();
      }
    };
    const performSearch = async () => {
      if (formRef.value.validateForm()) {
        toastWarning("Test not saved");
        return;
      }
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const data = formRef.value.getFormValues();
      console.log("🚀 ~ performSearch ~ data:", data);
      const searchOptions = {
        searchText: `${data.given_name} ${data.family_name} ${data.gender}`,
        page: 1,
        paginationSize: 10,
        sitePrefix: "",
        ddeEnabled: "",
        programId: Service.getProgramID(),
        activeFilter: "Names"
      };
      const results = await patientSearchService.searchPatients(searchOptions);
      searchResults.value = results.onlinePatients;
      console.log("🚀 ~ performSearch ~ results:", searchResults.value);
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
              createVNode(GoBack),
              createVNode(unref(IonCard), { class: "card" }, {
                default: withCtx(() => [
                  createVNode(unref(IonCardHeader), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardTitle), null, {
                        default: withCtx(() => [..._cache[0] || (_cache[0] = [
                          createTextVNode("Search Patient", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonCardContent), null, {
                    default: withCtx(() => [
                      createVNode(StandardForm, {
                        formData: patientArrivalForm,
                        ref_key: "formRef",
                        ref: formRef
                      }, null, 512),
                      createBaseVNode("div", _hoisted_1, [
                        createVNode(DynamicButton, {
                          onClick: performSearch,
                          name: "Search"
                        })
                      ]),
                      searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
                        createVNode(unref(IonCardTitle), null, {
                          default: withCtx(() => [..._cache[1] || (_cache[1] = [
                            createTextVNode("Search Results", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(ReusableDataTable, {
                          headers,
                          data: tableData.value,
                          options: tableOptions,
                          actionHandlers
                        }, null, 8, ["data"])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const FindPatient = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8517d821"]]);

export { FindPatient as default };
