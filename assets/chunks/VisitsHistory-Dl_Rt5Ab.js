import { s as defineComponent, ct as useRoute, w as watch, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, C as createBaseVNode, J as Fragment, R as renderList, O as createBlock, a5 as createTextVNode, D as toDisplayString, a4 as normalizeClass, H as createCommentVNode, F as unref, bp as V, f as ref, c as computed } from './vendor-CCA5uLDN.js';
import { u as useDemographicsStore, F as DynamicButton, H as HisDate, cK as popVoidReason, G as toastSuccess, J as savePatientRecord, x as toastDanger, aq as ConceptService, b as EncounterTypeId, _ as _export_sfc } from '../index-CSKZEueZ.js';
import { s as storeToRefs } from './pinia-D-2CL6iz.js';

const _hoisted_1 = { class: "visitContent" };
const _hoisted_2 = { class: "visitData" };
const _hoisted_3 = { class: "table-header" };
const _hoisted_4 = { class: "encounter-title" };
const _hoisted_5 = { class: "table-responsive" };
const _hoisted_6 = {
  key: 0,
  class: "loading-state"
};
const _hoisted_7 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VisitsHistory",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const route = useRoute();
    const patientsObs = ref([]);
    const selectedDate = ref("");
    const selectedEncounter = ref(null);
    const tableData = ref([]);
    const isLoading = ref(false);
    const normalizeObservation = (obs) => {
      const normalized = { ...obs };
      if (obs.child && !obs.children) {
        normalized.children = obs.child;
      } else if (!obs.children) {
        normalized.children = [];
      }
      if (normalized.children && normalized.children.length > 0) {
        normalized.children = normalized.children.map((child) => normalizeObservation(child));
      }
      return normalized;
    };
    const uniqueDates = computed(() => {
      const dates = /* @__PURE__ */ new Set();
      patientsObs.value.forEach((encounterGroup) => {
        if (!encounterGroup) return;
        encounterGroup.obs.forEach((obs) => {
          if (obs.obs_datetime) {
            const date = obs.obs_datetime.split(" ")[0];
            dates.add(date);
          }
        });
      });
      return Array.from(dates).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    });
    const encountersForSelectedDate = computed(() => {
      if (!selectedDate.value) return [];
      const encountersMap = /* @__PURE__ */ new Map();
      patientsObs.value.forEach((encounterGroup) => {
        if (!encounterGroup) return;
        const status = encounterGroup.status || "saved";
        encounterGroup.obs.forEach((obs) => {
          if (obs.obs_datetime && obs.obs_datetime.startsWith(selectedDate.value)) {
            const encounterId = obs.encounter_id || `unsaved-${encounterGroup.encounter_type}-${selectedDate.value}`;
            const encounterDatetime = obs.encounter_datetime || obs.obs_datetime;
            if (!encountersMap.has(encounterId)) {
              encountersMap.set(encounterId, {
                encounter_id: encounterId,
                encounter_type: encounterGroup.encounter_type,
                name: getEncounterTypeName(encounterGroup.encounter_type),
                encounter_datetime: encounterDatetime,
                status,
                observations: []
              });
            }
            const normalizedObs = normalizeObservation(obs);
            encountersMap.get(encounterId).observations.push(normalizedObs);
          }
        });
      });
      return Array.from(encountersMap.values()).sort((a, b) => new Date(b.encounter_datetime).getTime() - new Date(a.encounter_datetime).getTime());
    });
    const dataTableOptions = computed(() => ({
      paging: true,
      lengthChange: false,
      searching: false,
      ordering: false,
      info: true,
      autoWidth: true,
      responsive: true,
      pageLength: 8
    }));
    const tableColumns = computed(() => [
      { data: "observation", title: "Observation" },
      { data: "value", title: "Value" },
      { data: "date", title: "Date" }
    ]);
    const getEncounterTypeName = (encounterType) => {
      const raw = EncounterTypeId[encounterType];
      if (!raw) return "Unknown Encounter";
      return raw.toLowerCase().replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    };
    const formatDate = (date) => {
      return HisDate.toStandardHisDisplayFormat(date);
    };
    const selectDate = (date) => {
      selectedDate.value = date;
      selectedEncounter.value = null;
      tableData.value = [];
      if (encountersForSelectedDate.value.length > 0) {
        selectEncounter(encountersForSelectedDate.value[0]);
      }
    };
    const selectEncounter = (encounter) => {
      selectedEncounter.value = encounter;
      loadTableData();
    };
    const processObservationRecursively = async (obs, level, flattenedData) => {
      const indent = "  ".repeat(level);
      const prefix = level > 0 ? "└─ " : "";
      flattenedData.push({
        observation: `${indent}${prefix}${obs.concept_name || await getConceptNameById(obs.concept_id)}`,
        value: await formatObservationValue(obs),
        date: formatDate(obs.obs_datetime)
      });
      if (obs.children && obs.children.length > 0) {
        for (const child of obs.children) {
          await processObservationRecursively(child, level + 1, flattenedData);
        }
      }
    };
    const getConceptNameById = async (conceptId) => {
      try {
        return await ConceptService.getConceptName(conceptId);
      } catch (error) {
        console.error(`Error fetching concept name for ID ${conceptId}:`, error);
        return `Concept ${conceptId}`;
      }
    };
    const loadTableData = async () => {
      if (!selectedEncounter.value) {
        tableData.value = [];
        return;
      }
      isLoading.value = true;
      try {
        const observations = selectedEncounter.value.observations || [];
        const flattenedData = [];
        for (const obs of observations) {
          await processObservationRecursively(obs, 0, flattenedData);
        }
        tableData.value = flattenedData;
      } catch (error) {
        console.error("Error loading table data:", error);
        tableData.value = [];
      } finally {
        isLoading.value = false;
      }
    };
    const formatObservationValue = async (obs) => {
      if (obs.value_text) return obs.value_text;
      if (obs.value_numeric !== null && obs.value_numeric !== void 0) return String(obs.value_numeric);
      if (obs.value_datetime) return formatDate(obs.value_datetime);
      if (obs.value_coded) return await ConceptService.getConceptName(obs.value_coded);
      return "N/A";
    };
    const removeFromObservations = (encounterId) => {
      const updatedObservations = patient.value.observations.map((encounterGroup) => {
        return {
          ...encounterGroup,
          obs: encounterGroup.obs.filter((obs) => obs.encounter_id !== encounterId)
        };
      }).filter((encounterGroup) => encounterGroup.obs.length > 0);
      patient.value.observations = updatedObservations;
    };
    const voidEncounter = async () => {
      if (!selectedEncounter.value) return;
      const encounterToVoid = {
        id: selectedEncounter.value.encounter_id,
        status: selectedEncounter.value.status
      };
      popVoidReason(async (reason) => {
        try {
          if (encounterToVoid.status === "saved") {
            patient.value.void_encounters = patient.value?.void_encounters || [];
            patient.value.void_encounters.push({
              id: encounterToVoid.id,
              reason
            });
            toastSuccess("Encounter has been voided!", 2e3);
          } else {
            toastSuccess("Unsaved encounter has been removed!", 2e3);
          }
          removeFromObservations(encounterToVoid.id);
          selectedEncounter.value = null;
          tableData.value = [];
          await new Promise((resolve) => setTimeout(resolve, 0));
          await savePatientRecord(patient.value);
          await updateData();
        } catch (e) {
          toastDanger(`${e}`, 32e3);
        }
      });
    };
    const updateData = async () => {
      tableData.value = [];
      patientsObs.value = patient.value.observations || [];
      if (uniqueDates.value.length > 0) {
        selectDate(uniqueDates.value[0]);
      }
    };
    watch(
      patient,
      async () => {
        await updateData();
      },
      { deep: true, immediate: true }
    );
    watch(
      route,
      async () => {
        await updateData();
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      const _component_ion_col = resolveComponent("ion-col");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, {
              size: "1.6",
              style: { "height": "62vh", "overflow-y": "auto", "padding-right": "0px", "padding-left": "0px" }
            }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(uniqueDates.value, (date, index) => {
                    return openBlock(), createBlock(DynamicButton, {
                      class: "",
                      style: { "margin-bottom": "5px", "width": "96%", "height": "45px" },
                      onClick: ($event) => selectDate(date),
                      key: index,
                      name: formatDate(date),
                      fill: selectedDate.value != date ? "outline" : "solid",
                      color: selectedDate.value == date ? "success" : ""
                    }, null, 8, ["onClick", "name", "fill", "color"]);
                  }), 128))
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, { size: "2.5" }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(encountersForSelectedDate.value, (encounter, index) => {
                    return openBlock(), createBlock(DynamicButton, {
                      class: "",
                      style: { "margin-bottom": "5px", "width": "96%", "height": "45px" },
                      onClick: ($event) => selectEncounter(encounter),
                      key: index,
                      name: encounter.name,
                      fill: selectedEncounter.value?.encounter_id != encounter.encounter_id ? "outline" : "solid",
                      color: selectedEncounter.value?.encounter_id == encounter.encounter_id ? "success" : ""
                    }, null, 8, ["onClick", "name", "fill", "color"]);
                  }), 128))
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_col, {
              offset: "0.1",
              size: "7.8"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("h3", _hoisted_4, [
                      createTextVNode(toDisplayString(selectedEncounter.value ? selectedEncounter.value.name : "Select an Encounter") + " ", 1),
                      selectedEncounter.value ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass(["status-badge", selectedEncounter.value.status])
                      }, toDisplayString(selectedEncounter.value.status), 3)) : createCommentVNode("", true)
                    ]),
                    selectedEncounter.value ? (openBlock(), createBlock(DynamicButton, {
                      key: 0,
                      name: "Void Encounter",
                      fill: "solid",
                      color: "danger",
                      onClick: _cache[0] || (_cache[0] = ($event) => voidEncounter())
                    })) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_6, [..._cache[1] || (_cache[1] = [
                      createBaseVNode("p", null, "Loading observations...", -1)
                    ])])) : tableData.value.length === 0 && selectedEncounter.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      createBaseVNode("p", null, "No observations found for " + toDisplayString(selectedEncounter.value.name), 1)
                    ])) : (openBlock(), createBlock(unref(V), {
                      key: 2,
                      ref: "dataTable",
                      class: "display nowrap modern-table",
                      width: "100%",
                      data: tableData.value,
                      columns: tableColumns.value,
                      options: dataTableOptions.value
                    }, {
                      default: withCtx(() => [..._cache[2] || (_cache[2] = [
                        createBaseVNode("thead", null, [
                          createBaseVNode("tr", null, [
                            createBaseVNode("th", null, "Observation"),
                            createBaseVNode("th", null, "Value"),
                            createBaseVNode("th", null, "Date")
                          ])
                        ], -1)
                      ])]),
                      _: 1
                    }, 8, ["data", "columns", "options"]))
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const VisitsHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f69705d5"]]);

export { VisitsHistory as default };
