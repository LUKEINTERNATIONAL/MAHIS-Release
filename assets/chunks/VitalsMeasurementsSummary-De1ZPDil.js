import { s as defineComponent, cu as useRoute, w as watch, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, C as createBaseVNode, J as Fragment, R as renderList, D as toDisplayString, F as unref, bp as V, f as ref, c_ as DataTable } from './vendor-DlXvc2CI.js';
import { s as storeToRefs } from './pinia-DxIh5T-z.js';
import { u as useDemographicsStore, K as ObservationService, aq as ConceptService, H as HisDate, b9 as BMIService, _ as _export_sfc } from '../index-Di9oihr7.js';

const _hoisted_1 = { class: "table-responsive" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VitalsMeasurementsSummary",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const route = useRoute();
    const dataTable = ref(null);
    const tableData = ref([]);
    const BMI = ref("");
    const header = ref(["Date", "Weight", "Height (cm)", "Temperature", "Pulse", "SAO2", "Systolic", "Respiration rate", "Diastolic", "BMI"]);
    const options = ref({
      responsive: true,
      select: false,
      layout: {
        topStart: "",
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      ordering: false
    });
    const updateData = async () => {
      try {
        tableData.value = [];
        const data = await ObservationService.getObsByEncounterId(6);
        const allObs = data.flatMap((e) => e.obs || []);
        const obsByDate = /* @__PURE__ */ new Map();
        allObs.forEach((obs) => {
          if (obs.obs_datetime) {
            const date = obs.obs_datetime.split(" ")[0];
            if (!obsByDate.has(date)) {
              obsByDate.set(date, []);
            }
            obsByDate.get(date)?.push(obs);
          }
        });
        for (const [date, observations] of obsByDate.entries()) {
          await processObservationsForDate(date, observations);
        }
        tableData.value.sort((a, b) => {
          return new Date(b[0]).getTime() - new Date(a[0]).getTime();
        });
      } catch (error) {
        console.error("Error updating vitals data:", error);
      }
      V.use(DataTable);
    };
    const processObservationsForDate = async (date, observations) => {
      const getObsValue = (conceptID) => {
        const obs = observations.find((o) => o.concept_id === conceptID);
        return obs?.value_numeric ?? "";
      };
      const heightConceptId = await ConceptService.getConceptID("Height (cm)");
      const weightConceptId = await ConceptService.getConceptID("Weight (kg)");
      const systolicConceptId = await ConceptService.getConceptID("Systolic blood pressure");
      const diastolicConceptId = await ConceptService.getConceptID("Diastolic blood pressure");
      const temperatureConceptId = await ConceptService.getConceptID("Temperature (c)");
      const pulseConceptId = await ConceptService.getConceptID("Pulse");
      const sao2ConceptId = await ConceptService.getConceptID("Blood oxygen saturation");
      const respirationRateConceptId = await ConceptService.getConceptID("Respiratory rate");
      const weight = getObsValue(weightConceptId);
      const height = getObsValue(heightConceptId);
      const temperature = getObsValue(temperatureConceptId);
      const pulse = getObsValue(pulseConceptId);
      const sao2 = getObsValue(sao2ConceptId);
      const systolic = getObsValue(systolicConceptId);
      const respirationRate = getObsValue(respirationRateConceptId);
      const diastolic = getObsValue(diastolicConceptId);
      let bmiValue = "";
      if (weight && height) {
        bmiValue = await calculateBMI(weight, height);
      }
      const entry = [
        HisDate.toStandardHisDisplayFormat(date),
        weight,
        height,
        temperature,
        pulse,
        sao2,
        systolic,
        respirationRate,
        diastolic,
        bmiValue
      ];
      tableData.value.push(entry);
    };
    const calculateBMI = async (weight, height) => {
      if (patient.value?.personInformation?.gender && patient.value?.personInformation?.birthdate) {
        try {
          BMI.value = await BMIService.getBMI(
            parseInt(String(weight)),
            parseInt(String(height)),
            patient.value.personInformation.gender,
            HisDate.calculateAge(patient.value.personInformation.birthdate, HisDate.sessionDate())
          );
          return BMI.value?.index ?? "";
        } catch (error) {
          console.error("Error calculating BMI:", error);
          return "";
        }
      }
      return "";
    };
    watch(
      () => route,
      async () => {
        await updateData();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        await updateData();
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(V), {
          ref_key: "dataTable",
          ref: dataTable,
          options: options.value,
          data: tableData.value,
          class: "display nowrap modern-table",
          width: "100%"
        }, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(header.value, (head) => {
                  return openBlock(), createElementBlock("th", { key: head }, toDisplayString(head), 1);
                }), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["options", "data"])
      ]);
    };
  }
});

const VitalsMeasurementsSummary = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d280081"]]);

export { VitalsMeasurementsSummary as default };
