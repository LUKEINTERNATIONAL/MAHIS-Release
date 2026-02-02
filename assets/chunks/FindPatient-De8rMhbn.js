import { s as defineComponent, aL as useRouter, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bL as IonCard, bb as IonCardHeader, ba as IonCardTitle, a5 as createTextVNode, bd as IonCardContent, C as createBaseVNode, z as createElementBlock, H as createCommentVNode, bu as IonPage, f as ref } from './vendor-DoVhRvhx.js';
import { u as useDemographicsStore, y as StandardValidations, D as PatientSearchService, T as Toolbar, z as StandardForm, F as DynamicButton, k as alertConfirmation, t as toastWarning, S as Service, G as toastSuccess, n as icons, _ as _export_sfc } from '../index-DQSL37yM.js';
import { G as GoBack } from './GoBack-BbV7kZbs.js';
import { R as ReusableDataTable } from './ReusableDataTable-D254GhYc.js';
import { u as usePatientProfile } from './usePatientProfile-DwdpPCB0.js';

const _hoisted_1 = { class: "ion-padding ion-text-center" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 1,
  class: "ion-padding ion-text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FindPatient",
  setup(__props) {
    const tableData = ref([]);
    const formRef = ref(null);
    const searchResults = ref([]);
    const router = useRouter();
    const isSearching = ref(false);
    const hasSearched = ref(false);
    const demographicsStore = useDemographicsStore();
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
          await demographicsStore.setPatientRecord(data.patientData);
          router.push("/home");
        }
      },
      "view-btn": async (data) => {
        console.log("View profile for:", data);
        await demographicsStore.setPatientRecord(data.patientData);
        openPIM();
      }
    };
    const performSearch = async () => {
      if (formRef.value.validateForm()) {
        toastWarning("Please fill in all required fields");
        return;
      }
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formData = formRef.value.getFormValues();
      console.log("🚀 ~ performSearch ~ formData:", formData);
      isSearching.value = true;
      hasSearched.value = true;
      try {
        const searchText = `${formData.given_name} ${formData.family_name} ${formData.gender}`.trim();
        const searchOptions = {
          searchText,
          page: 1,
          paginationSize: 100,
          // Get more results
          sitePrefix: "",
          // You might want to get this from global property store
          ddeEnabled: false,
          // Set based on your config
          programId: Service.getProgramID(),
          activeFilter: "Names"
        };
        const results = await patientSearchService.searchPatients(searchOptions);
        const allPatients = [...results.onlinePatients || [], ...results.offlinePatients?.records || results.offlinePatients || []];
        searchResults.value = allPatients;
        if (searchResults.value.length > 0) {
          tableData.value = searchResults.value.map((patient) => {
            const formatted = patientSearchService.formatPatientForDisplay(patient);
            const patientId = patient.patient_id || patient.ID || patient.person?.patient_id;
            return [
              patientId || "N/A",
              formatted.displayName.split(" ")[0] || "",
              formatted.displayName.split(" ").slice(1).join(" ") || "",
              formatted.gender || "",
              formatted.birthdate || "",
              formatted.homeAddress || "",
              formatted.currentAddress || "",
              formatted.phoneNumber || "",
              buildActionButtons({
                id: patientId,
                name: formatted.displayName,
                patientData: patient
                // Pass the full patient object
              })
            ];
          });
          toastSuccess(`Found ${searchResults.value.length} patient(s)`);
        } else {
          tableData.value = [];
          toastWarning("No patients found matching your search criteria");
        }
      } catch (error) {
        console.error("Search error:", error);
        toastWarning("An error occurred while searching. Please try again.");
        searchResults.value = [];
        tableData.value = [];
      } finally {
        isSearching.value = false;
      }
    };
    onMounted(async () => {
      console.log("Patient Search Component mounted");
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
                          name: "Search",
                          disabled: isSearching.value
                        }, null, 8, ["disabled"])
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
                      ])) : hasSearched.value && searchResults.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [..._cache[2] || (_cache[2] = [
                        createBaseVNode("p", null, "No patients found matching your search criteria.", -1)
                      ])])) : createCommentVNode("", true)
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

const FindPatient = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bc476ad"]]);

export { FindPatient as default };
