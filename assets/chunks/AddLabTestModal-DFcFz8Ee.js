import { s as defineComponent, aL as useRouter, w as watch, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, H as createCommentVNode, C as createBaseVNode, f as ref, c as computed, K as modalController } from './vendor-D_Iz0VZ7.js';
import { s as storeToRefs } from './pinia-BGxzTr_B.js';
import { u as useDemographicsStore, q as usePatientList, z as StandardForm, F as DynamicButton, r as StandardModal, S as Service, g as getPouchDBRecords, O as OrderService, t as toastWarning, G as toastSuccess, bJ as StagesService, x as toastDanger, aq as ConceptService, J as savePatientRecord, y as StandardValidations, n as icons, _ as _export_sfc } from '../index-DR39kxWD.js';

const _hoisted_1 = { style: { "display": "flex", "gap": "8px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddLabTestModal",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const patientListStore = usePatientList();
    const { patient } = storeToRefs(demographicsStore);
    const router = useRouter();
    const selectedTest = ref("");
    const labOrders = ref("");
    const specimen = ref("");
    const testList = ref("");
    const formRef = ref(null);
    const formRefHiv = ref(null);
    const investigations = ref([]);
    const modalTitle = computed(() => {
      return isHivTest() ? " HTS RDTs" : "Add Lab Test";
    });
    const addTestForm = computed(() => {
      return [
        {
          componentType: "multiSelectInputField",
          name: "test",
          header: "Test",
          options: testList.value,
          grid: { s: "6" },
          icon: icons.search,
          validation: StandardValidations.required,
          onChange: (value) => {
            selectedTest.value = value.name;
            if (isHivTest()) {
              specimen.value = [];
            }
          }
        },
        {
          componentType: "multiSelectInputField",
          name: "specimen",
          header: "Specimen",
          grid: { s: "6" },
          icon: icons.search,
          validation: StandardValidations.required,
          value: specimen.value.length == 1 ? specimen.value[0] : "",
          options: specimen.value.length > 1 ? specimen.value : []
        }
      ];
    });
    const hivTestForm = computed(() => {
      return [
        {
          componentType: "checkboxField",
          type: "single",
          name: "HIV test",
          label: "HIV test",
          value: selectedTest.value == "HIV test"
        },
        {
          componentType: "checkboxField",
          type: "single",
          name: "Hepatitis B Test",
          label: "Hepatitis B Test",
          value: selectedTest.value == "Hepatitis B Test"
        },
        {
          componentType: "checkboxField",
          type: "single",
          name: "Syphilis",
          label: "Syphilis",
          value: selectedTest.value == "Syphilis"
        }
      ];
    });
    watch(selectedTest, async (newValue) => {
      if (newValue) {
        try {
          specimen.value = await getSpecimen(newValue);
        } catch (error) {
          specimen.value = [];
        }
      } else {
        specimen.value = [];
      }
    });
    const getSpecimen = async (name) => {
      let specimens;
      if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
        specimens = await getPouchDBRecords("specimens");
      } else {
        specimens = await OrderService.getSpecimens("", 1e3);
      }
      const data = await ConceptService.getConceptSet(name, "", { names: specimens.map((item) => item.name) });
      return data;
    };
    watch(
      patient,
      async () => {
        labOrders.value = [...patient.value.labOrders.saved, ...patient.value.labOrders.unsaved];
      },
      { deep: true }
    );
    const dismiss = (data = null) => {
      modalController.dismiss(data);
    };
    const backBtn = () => {
      selectedTest.value = "";
    };
    const isHivTest = () => {
      if (selectedTest.value == "HIV test" || selectedTest.value == "Syphilis" || selectedTest.value == "Hepatitis B Test") {
        return true;
      } else {
        return false;
      }
    };
    const getTests = async () => {
      if (Service.getPouchDbStatus() || Service.getLanConnectionStatus()) {
        return await getPouchDBRecords("test_types");
      } else {
        return await OrderService.getTestTypes();
      }
    };
    const sendToHts = async () => {
      const tests = await buildSaveHivTest("referral", 9);
      if (!tests) {
        toastWarning("No HIV Test selected");
        return;
      }
      toastSuccess("HIV Test sent to HTS successfully");
      await redirection();
    };
    const sendToLab = async () => {
      if (await buildSaveHivTest("", 4)) {
        try {
          await StagesService.addPatientToStage(patient.value, "LAB");
          toastSuccess("The patient successfully sent to the lab. You may now attend to other patients.");
          await redirection();
        } catch (error) {
          console.error("Error sending to lab:", error);
          toastDanger("Failed to send patient to lab");
        }
      }
      dismiss();
    };
    const redirection = async () => {
      dismiss();
      const locationId = String(localStorage.getItem("locationID"));
      if (!locationId) {
        toastDanger("Location not found");
        return;
      }
      await patientListStore.refresh(locationId);
      await router.push("/home");
    };
    const buildSaveHivTest = async (referral = "", order_type_id) => {
      try {
        const formData = formRefHiv.value.getFormValues();
        if (!formData || Object.keys(formData).length === 0) {
          return false;
        }
        const hasAnyData = Object.values(formData).some((value) => value);
        if (!hasAnyData) {
          return false;
        }
        const promises = Object.keys(formData).map(async (test) => {
          if (formData[test]) {
            investigations.value.push({
              order_type_id,
              concept_id: await ConceptService.getConceptID(test, true),
              name: test,
              specimen: "Blood",
              reason: "Routine",
              specimenConcept: await ConceptService.getConceptID("Blood", true),
              referral
            });
          }
        });
        await Promise.all(promises);
        if (investigations.value.length > 0) {
          await saveTest(investigations.value);
        }
        return formData;
      } catch (error) {
        console.error("Error saving HIV tests:", error);
        return false;
      }
    };
    const buildSaveTest = async () => {
      if (formRef.value.validateForm()) {
        toastWarning("Test not saved");
        return;
      }
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formData = formRef.value.getFormValues();
      const test = formData["test"].name;
      const specimen2 = formData["specimen"].name;
      const investigation = [
        {
          concept_id: formData["test"].concept_id,
          name: test,
          specimen: specimen2,
          reason: "Routine",
          specimenConcept: await ConceptService.getConceptID(specimen2, true)
        }
      ];
      await saveTest(investigation);
      dismiss({ saved: true, data: investigation });
    };
    const saveTest = async (investigation) => {
      const data = await OrderService.buildLabOrders("", investigation);
      const patientData = JSON.parse(JSON.stringify(patient.value));
      (patientData.labOrders ??= {}).unsaved ??= [];
      (patientData.labOrders ??= {}).saved ??= [];
      patientData.labOrders.unsaved.push(...data);
      await savePatientRecord(patientData);
      labOrders.value = [...patientData.labOrders.saved, ...patientData.labOrders.unsaved];
      toastSuccess("Test saved successfully");
    };
    onMounted(async () => {
      testList.value = await getTests();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: modalTitle.value,
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            !isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => buildSaveTest()),
              name: "Save",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true),
            isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 1,
              onClick: _cache[1] || (_cache[1] = ($event) => sendToHts()),
              name: "Send to HTS",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true),
            isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 2,
              onClick: _cache[2] || (_cache[2] = ($event) => sendToLab()),
              name: "Send to Lab",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true),
            isHivTest() ? (openBlock(), createBlock(DynamicButton, {
              key: 3,
              onClick: _cache[3] || (_cache[3] = ($event) => backBtn()),
              color: "danger",
              name: "Back",
              fill: "solid",
              style: {}
            })) : createCommentVNode("", true)
          ])
        ]),
        content: withCtx(() => [
          !isHivTest() ? (openBlock(), createBlock(StandardForm, {
            key: 0,
            formData: addTestForm.value,
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])) : createCommentVNode("", true),
          isHivTest() ? (openBlock(), createBlock(StandardForm, {
            key: 1,
            formData: hivTestForm.value,
            ref_key: "formRefHiv",
            ref: formRefHiv
          }, null, 8, ["formData"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const AddLabTestModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1dc670e3"]]);

export { AddLabTestModal as A };
