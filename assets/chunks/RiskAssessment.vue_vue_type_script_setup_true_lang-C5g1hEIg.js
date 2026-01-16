import { q as defineComponent, r as ref, d as computed, a1 as onMounted, v as resolveComponent, x as createElementBlock, y as openBlock, A as createBaseVNode, z as createVNode, B as withCtx, E as unref, an as IonItem, a4 as createTextVNode, H as Fragment, Q as renderList, C as toDisplayString } from './vendor-wM1cIaYi.js';
import { u as useDemographicsStore, C as StandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, aq as ConceptService, H as HisDate, n as icons } from '../index-I4g3KlCH.js';
import { s as storeToRefs } from './pinia-Czqxf__w.js';

const _hoisted_1 = { class: "card-container" };
const _hoisted_2 = { class: "custom-card" };
const _hoisted_3 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_4 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RiskAssessment",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const tableData = ref([]);
    const iconsContent = ref(icons);
    const header = ["Substance", "Answer", "Date", "Action"];
    const options = {
      responsive: true,
      select: false,
      layout: {
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      ordering: false
    };
    const riskAssessment = computed(() => {
      return [
        {
          componentType: "Heading",
          name: "Substance use / Consumption",
          position: "center"
        },
        {
          componentType: "radioButtonField",
          header: "Smoking",
          name: "Smoking history",
          grid: { s: "3" },
          obsValueType: "value_coded",
          options: [
            {
              label: "Smoking",
              value: "Smoking"
            },
            {
              label: "Never",
              value: "Never"
            },
            {
              label: "Stopped",
              value: "Stopped"
            }
          ]
        },
        { grid: { s: "2" } },
        {
          componentType: "radioButtonField",
          header: "Drinking alcohol",
          name: "Does the patient drink alcohol?",
          grid: { s: "3" },
          obsValueType: "value_coded",
          options: [
            {
              label: "Drinking",
              value: "Drinking"
            },
            {
              label: "Never",
              value: "Never"
            },
            {
              label: "Stopped",
              value: "Stopped"
            }
          ]
        }
      ];
    });
    const formRef = ref(null);
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formData = formRef.value.getFormValues();
      if (!(formData["Smoking history"] && formData["Does the patient drink alcohol?"])) {
        toastWarning("Risk assessment not saved");
        return;
      }
      await ObservationService.buildAddObsToEncounterPatient(formData, EncounterTypeId.ASSESSMENT);
      formRef.value.resetForm();
      toastSuccess("Risk assessment saved successful");
    };
    const setRiskAssessment = async () => {
      const data = await ObservationService.getObsByEncounterId(EncounterTypeId.ASSESSMENT);
      if (!data || data.length === 0) return [];
      const rows = await Promise.all(
        data.flatMap(
          (encounter) => encounter.obs.map(async (item) => {
            return [
              item.concept_name || "",
              await ConceptService.getConceptName(item.value_coded) || "",
              HisDate.toStandardHisFormat(item.obs_datetime),
              `<button class="btn btn-outline-danger btn-sm delete-btn" data-id='${JSON.stringify(item)}'>
            ${iconsContent.value.delete2}</button>`
            ];
          })
        )
      );
      tableData.value = rows;
    };
    onMounted(async () => {
      await setRiskAssessment();
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_ion_accordion = resolveComponent("ion-accordion");
      const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(StandardForm, {
              formData: riskAssessment.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"])
          ])
        ]),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion_group, {
              ref: "accordionGroup",
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_accordion, {
                  value: "first",
                  "toggle-icon-slot": "start",
                  style: { "border-radius": "10px", "background-color": "#fff" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_label, { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[0] || (_cache[0] = [
                            createTextVNode("Previous Visits", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(_component_DataTable, {
                          ref: "dataTableRef",
                          options,
                          data: tableData.value,
                          class: "display nowrap modern-table",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("thead", null, [
                              createBaseVNode("tr", null, [
                                (openBlock(), createElementBlock(Fragment, null, renderList(header, (head) => {
                                  return createBaseVNode("th", { key: head }, toDisplayString(head), 1);
                                }), 64))
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["data"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as _ };
