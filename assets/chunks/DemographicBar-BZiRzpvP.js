import { s as defineComponent, aL as useRouter, w as watch, a2 as onMounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, F as unref, z as createElementBlock, a5 as createTextVNode, D as toDisplayString, A as createVNode, e0 as ellipsisVerticalSharp, L as IonIcon, f as ref } from './vendor-CCA5uLDN.js';
import { s as storeToRefs } from './pinia-D-2CL6iz.js';
import { u as useDemographicsStore, a as useProgramStore, b6 as getOfflineSavedUnsavedData, P as PatientService, b7 as getObjectsWithLatestDate, b8 as getValueNumericForConcept, H as HisDate, b9 as BMIService, _ as _export_sfc } from '../index-CSKZEueZ.js';

const _hoisted_1 = { style: { "width": "97%", "overflow": "scroll" } };
const _hoisted_2 = {
  key: 0,
  class: "second_bar_list"
};
const _hoisted_3 = {
  key: 1,
  class: "second_bar_list"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemographicBar",
  emits: ["openPopover"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useRouter();
    const demographicsStore = useDemographicsStore();
    const programStore = useProgramStore();
    const { patient } = storeToRefs(demographicsStore);
    const { activeProgram, authorizedPrograms } = storeToRefs(programStore);
    const vitalsData = ref({});
    const BMI = ref("");
    const bloodGlucose = ref();
    const setBMI = async (weight, height) => {
      if (!weight || !height) return;
      if (patient?.value.personInformation?.gender && patient?.value.personInformation?.birthdate) {
        const data = await BMIService.getBMI(
          parseInt(weight),
          parseInt(height),
          patient?.value.personInformation?.gender,
          HisDate.calculateAge(patient?.value.personInformation?.birthdate, HisDate.sessionDate())
        );
        BMI.value = data?.index;
      }
    };
    const updateData = async () => {
      let vitals = getOfflineSavedUnsavedData("vitals");
      bloodGlucose.value = new PatientService().getBloodGlucose(patient.value);
      const vitalsLatest = getObjectsWithLatestDate(vitals);
      vitalsData.value = {
        weight: getValueNumericForConcept(vitalsLatest, "Weight (kg)", "value_numeric"),
        height: getValueNumericForConcept(vitalsLatest, "Height (cm)", "value_numeric"),
        temperature: getValueNumericForConcept(vitalsLatest, "Temperature (c)", "value_numeric"),
        pulse: getValueNumericForConcept(vitalsLatest, "Pulse", "value_numeric"),
        diastolic: getValueNumericForConcept(vitalsLatest, "Diastolic blood pressure", "value_numeric"),
        systolic: getValueNumericForConcept(vitalsLatest, "Systolic blood pressure", "value_numeric")
      };
      await setBMI(vitalsData.value.weight, vitalsData.value.height);
    };
    const formatBirthdate = () => {
      return HisDate.getBirthdateAge(patient.value?.personInformation?.birthdate);
    };
    const formatCurrentAddress = (data) => {
      const addressComponents = [
        data?.personInformation?.current_district,
        data?.personInformation?.current_traditional_authority,
        data?.personInformation?.current_village
      ];
      return addressComponents.filter(Boolean).join(",");
    };
    watch(
      () => patient,
      async () => {
        await updateData();
      },
      { deep: true }
    );
    onMounted(async () => {
      await updateData();
    });
    return (_ctx, _cache) => {
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createBlock(_component_ion_card, {
        class: "second_bar",
        style: { "display": "flex" }
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            unref(activeProgram).program_id == 32 ? (openBlock(), createElementBlock("ul", _hoisted_2, [
              createBaseVNode("li", null, [
                _cache[1] || (_cache[1] = createTextVNode(" NCDNumber: ", -1)),
                createBaseVNode("b", null, toDisplayString(unref(patient)?.NcdID), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[2] || (_cache[2] = createTextVNode(" Birthday: ", -1)),
                createBaseVNode("b", null, toDisplayString(formatBirthdate()), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[3] || (_cache[3] = createTextVNode(" Gender: ", -1)),
                createBaseVNode("b", null, toDisplayString(unref(patient)?.personInformation?.gender), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[4] || (_cache[4] = createTextVNode(" Blood Pressure: ", -1)),
                createBaseVNode("b", null, toDisplayString(vitalsData.value?.systolic) + "/" + toDisplayString(vitalsData.value?.diastolic), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[5] || (_cache[5] = createTextVNode(" Blood Glucose: ", -1)),
                createBaseVNode("b", null, toDisplayString(bloodGlucose.value?.value) + " " + toDisplayString(bloodGlucose.value?.unit), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[6] || (_cache[6] = createTextVNode(" BMI: ", -1)),
                createBaseVNode("b", null, toDisplayString(BMI.value), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[7] || (_cache[7] = createTextVNode(" Pulse rate: ", -1)),
                createBaseVNode("b", null, toDisplayString(vitalsData.value?.pulse), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[8] || (_cache[8] = createTextVNode(" Temperature: ", -1)),
                createBaseVNode("b", null, toDisplayString(vitalsData.value?.temperature), 1)
              ])
            ])) : (openBlock(), createElementBlock("ul", _hoisted_3, [
              createBaseVNode("li", null, [
                _cache[9] || (_cache[9] = createTextVNode(" Fullname: ", -1)),
                createBaseVNode("b", null, toDisplayString(unref(patient)?.personInformation?.given_name) + " " + toDisplayString(unref(patient)?.personInformation?.middle_name) + " " + toDisplayString(unref(patient)?.personInformation?.family_name), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[10] || (_cache[10] = createTextVNode(" NCDNumber: ", -1)),
                createBaseVNode("b", null, toDisplayString(unref(patient)?.NcdID), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[11] || (_cache[11] = createTextVNode(" MRN: ", -1)),
                createBaseVNode("b", null, toDisplayString(unref(patient)?.ID), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[12] || (_cache[12] = createTextVNode(" Birthday: ", -1)),
                createBaseVNode("b", null, toDisplayString(formatBirthdate()), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[13] || (_cache[13] = createTextVNode(" Gender: ", -1)),
                createBaseVNode("b", null, toDisplayString(unref(patient)?.personInformation?.gender), 1)
              ]),
              createBaseVNode("li", null, [
                _cache[14] || (_cache[14] = createTextVNode(" Address: ", -1)),
                createBaseVNode("b", null, toDisplayString(formatCurrentAddress(unref(patient))), 1)
              ])
            ]))
          ]),
          createBaseVNode("div", {
            style: { "margin-top": "15px", "cursor": "pointer" },
            onClick: _cache[0] || (_cache[0] = ($event) => emit("openPopover", $event))
          }, [
            createVNode(unref(IonIcon), { icon: unref(ellipsisVerticalSharp) }, null, 8, ["icon"])
          ])
        ]),
        _: 1
      });
    };
  }
});

const DemographicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc468f57"]]);

export { DemographicBar as D };
