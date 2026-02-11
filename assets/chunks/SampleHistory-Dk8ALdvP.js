import { s as defineComponent, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, bd as IonCardContent, c as computed, f as ref, a2 as onMounted, z as createElementBlock, bb as IonCardHeader, a7 as IonLabel, L as IonIcon, Q as alertCircleOutline, C as createBaseVNode, a6 as IonInput, N as IonButton, a5 as createTextVNode, G as closeCircleOutline, H as createCommentVNode, v as documentTextOutline, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, af as IonRow, J as Fragment, R as renderList, D as toDisplayString, x as resolveComponent, w as watch, aL as useRouter, ct as useRoute, aG as IonContent, bX as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage, ab as checkmarkOutline } from './vendor-DrpjccQs.js';
import { d as defineStore, s as storeToRefs } from './pinia-CWrBOO3c.js';
import { z as StandardForm, C as useExposeFromStandardForm, u as useDemographicsStore, aq as ConceptService, aB as ListPicker, t as toastWarning, G as toastSuccess, S as Service, _ as _export_sfc, n as icons, y as StandardValidations, K as ObservationService, b as EncounterTypeId, a_ as List, F as DynamicButton, a1 as modifyFieldValue, bk as useVitalsStore, bl as useInvestigationStore, ba as useDiagnosisStore, b2 as useTreatmentPlanStore, bg as useNCDMedicationsStore, e as useGeneralStore, b3 as useOutcomeStore, i as useEnrollementStore, aa as useConfigStore, f as useStatusStore, T as Toolbar, a2 as getFieldValue, H as HisDate, bm as getOfflineSavedUnsavedData, bn as MedicationSelectionHasValues, J as savePatientRecord, bo as resetNCDPatientData, bp as useAllegyStore, a6 as useUserStore } from '../index-DALWhtZ-.js';
import { D as DemographicBar } from './DemographicBar-C57kA6fR.js';
import { _ as _sfc_main$8, u as useFormWizard } from './useFormWizard-qhHmCyMh.js';
import { P as PreviousAllergies } from './PreviousAllergies-CaZ9_NO2.js';
import { u as usePresentingComplaintsStore, p as previousComplaints } from './previousComplaints-CQMayOsR.js';
import { P as PatientComplaintsService } from './patient_complaints_service-5bcmW-8R.js';
import { D as DashBox } from './DashBox-BS8axHZ-.js';
import { u as useComplicationsStore } from './ComplicationsStore-Bv5wr0Vt.js';
import { c as createNCDDrugOrder, u as useNonPharmaTherapyStore } from './nonPharmaTherapyStore-B2x3Y6gR.js';
import { s as stageAllergies } from './treatment-DDkr4o1P.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';
import { f as formatInputFiledData, a as formatGroupRadioButtonData } from './formatServerData-kN2H3rAW.js';
import { u as usePatientProfile } from './usePatientProfile-BREccNvj.js';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Medications",
  setup(__props, { expose: __expose }) {
    const noneChecked = ref(false);
    const medicationsForm = computed(() => {
      return [
        {
          componentType: "checkboxField",
          label: "Patient was not prescribed any medication",
          type: "single",
          name: "Patient was not prescribed any medication",
          value: noneChecked.value,
          onChange: (value) => {
            noneChecked.value = value;
          },
          grid: { s: "12" }
        },
        {
          componentType: "textAreaField",
          header: "Medication Details",
          name: "medication_details",
          placeholder: "e.g., Paracetamol 500mg twice daily for 7 days, last taken yesterday",
          grid: { s: "12" },
          condition: () => !noneChecked.value
        }
      ];
    });
    const { formRef } = useExposeFromStandardForm();
    __expose({
      getFormValues: () => formRef.value?.getFormValues(),
      validateForm: () => formRef.value?.validateForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: medicationsForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

function concatenateArrays(...arrays) {
  return arrays.reduce((acc, arr) => acc.concat(arr), []);
}
const healthcareEquipmentAllergies = [
  {
    concept_id: 985,
    name: "Latex",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T08:00:00.000Z",
    concept_name_id: 166,
    uuid: "a3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Nickel",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 163,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Sulfur",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 162,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Adhesive Tape",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T10:00:00.000Z",
    concept_name_id: 155,
    uuid: "c3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Surgical Gloves",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T11:00:00.000Z",
    concept_name_id: 158,
    uuid: "d3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 985,
    name: "Medical Implants",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 104,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Injera Delight",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T08:00:00.000Z",
    concept_name_id: 100,
    uuid: "a3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Ugali Feast",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 164,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Mursik Smoothie",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T10:00:00.000Z",
    concept_name_id: 156,
    uuid: "c3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Sukuma Wiki Surprise",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T11:00:00.000Z",
    concept_name_id: 103,
    uuid: "d3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Mahamri Mix",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 160,
    voided: 0,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Chapati Charm",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T13:00:00.000Z",
    concept_name_id: 105,
    uuid: "f3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7579,
    name: "Nyama Choma Delight",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T14:00:00.000Z",
    concept_name_id: 106,
    uuid: "g3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Pollen",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T08:00:00.000Z",
    concept_name_id: 165,
    uuid: "a3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Dust Mites",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T09:00:00.000Z",
    concept_name_id: 101,
    uuid: "b3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Mold",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T10:00:00.000Z",
    concept_name_id: 102,
    uuid: "c3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Pet Danger",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T11:00:00.000Z",
    concept_name_id: 157,
    uuid: "d3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 7759,
    name: "Cockroach Droppings",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 161,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  },
  {
    concept_id: 6408,
    name: "Other",
    locale: "en",
    creator: 1,
    date_created: "2024-03-26T12:00:00.000Z",
    concept_name_id: 161,
    uuid: "e3e71b3e-8d80-11d8-abbb-0024217bb78e",
    concept_name_type: "FULLY_SPECIFIED",
    locale_preferred: 0
  }
];
function searchHealthcareEquipmentAllergies(searchString) {
  searchString = searchString ? searchString.toString() : "";
  const hcea = healthcareEquipmentAllergies.filter((allergy) => allergy.name.toLowerCase().includes(searchString.toLowerCase()));
  return hcea;
}
const useAllergyStore = defineStore("AllergyStore", {
  state: () => ({
    current_patient: {},
    medicalAllergiesList: [],
    selectedMedicalAllergiesList: []
  }),
  actions: {
    setMedicalAllergiesList(data) {
      this.medicalAllergiesList = data;
    },
    setSelectedMedicalAllergiesList(data_obj) {
      let data = data_obj;
      if (Array.isArray(data)) {
        this.selectedMedicalAllergiesList.length = 0;
      }
      if (Array.isArray(data) == false) {
        data = [data_obj];
      }
      this.selectedMedicalAllergiesList.forEach((allergy, index) => {
        data.forEach((item) => {
          if (allergy?.concept_name_id == item?.concept_name_id && item?.selected == false) {
            this.selectedMedicalAllergiesList.splice(index, 1);
          }
        });
      });
      data.forEach((item) => {
        if (item?.selected == true) {
          this.selectedMedicalAllergiesList.push(item);
        }
      });
    },
    removeSelectedAllergy(allergyToRemove) {
      this.selectedMedicalAllergiesList.forEach((allergy, index) => {
        if (allergy?.concept_name_id == allergyToRemove?.concept_name_id) {
          this.selectedMedicalAllergiesList.splice(index, 1);
        }
      });
      this.changeSelectionToFalse(allergyToRemove);
    },
    findSelectedAllergyByName(name) {
      return this.selectedMedicalAllergiesList.find((allergy) => allergy?.name === name);
    },
    unselectOther(itemToUnselect) {
      const index = this.medicalAllergiesList.indexOf(itemToUnselect);
      if (index !== -1) {
        this.medicalAllergiesList[index].selected = false;
      } else {
        console.warn("Item not found in medicalAllergiesList.");
      }
    },
    changeSelectionToFalse(allergy) {
      this.medicalAllergiesList.forEach((allergy_, index) => {
        if (allergy_?.concept_name_id == allergy?.concept_name_id) {
          this.medicalAllergiesList[index].selected = false;
        }
      });
    },
    clearSelectedMedicalAllergiesList() {
      this.selectedMedicalAllergiesList.forEach((allergy) => {
        this.changeSelectionToFalse(allergy);
      });
      this.medicalAllergiesList.forEach((allergie) => {
        allergie.selected = false;
      });
      this.selectedMedicalAllergiesList = [];
    },
    setCurrentPatient(patient) {
      this.current_patient = patient;
    }
  },
  persist: true
});

const _hoisted_1$4 = {
  key: 0,
  class: "custom-allergy-container"
};
const _hoisted_2$3 = { class: "button-group" };
const _hoisted_3$2 = {
  key: 1,
  class: "allergy-details-section"
};
const _hoisted_4$1 = {
  class: "ion-padding",
  slot: "content"
};
const __default__ = defineComponent({
  name: "AllergiesComponent"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props, { expose: __expose }) {
    const allergyStore = useAllergyStore();
    const DemographicsStore = useDemographicsStore();
    const selectedAllergiesList = computed(() => allergyStore.selectedMedicalAllergiesList);
    const patient = computed(() => DemographicsStore.patient);
    const allergiesList = computed(() => allergyStore.medicalAllergiesList);
    const uniqueId = ref(generateUniqueId(8, "allergy-"));
    const accordionGroup = ref();
    const detailsFormRef = ref(null);
    const allergyToAdd = ref("");
    const showOtherInput = ref(false);
    const addingCustomAllergy = ref(false);
    const allergyCategories = {
      MEDICATION: { concept_id: 1e3, name: "Medication Allergy" },
      MEDICAL_SUBSTANCE: { concept_id: 985, name: "Medical Substance Allergy" },
      FOOD: { concept_id: 7579, name: "Food Allergy" },
      ENVIRONMENTAL: { concept_id: 7759, name: "Environmental Allergy" },
      CUSTOM: { concept_id: 9e3, name: "Other Allergy" }
    };
    const medicationAllergens = [
      { name: "Aspirin", concept_id: 2001, category: "MEDICATION" },
      { name: "Ibuprofen", concept_id: 2002, category: "MEDICATION" },
      { name: "Amoxicillin", concept_id: 2003, category: "MEDICATION" },
      { name: "Penicillin", concept_id: 2004, category: "MEDICATION" },
      { name: "Sulfa drugs", concept_id: 2005, category: "MEDICATION" },
      { name: "Codeine", concept_id: 2006, category: "MEDICATION" },
      { name: "Morphine", concept_id: 2007, category: "MEDICATION" },
      { name: "Cephalosporins", concept_id: 2008, category: "MEDICATION" },
      { name: "Erythromycin", concept_id: 2009, category: "MEDICATION" },
      { name: "Tetracycline", concept_id: 2010, category: "MEDICATION" }
    ];
    const list_picker_properties = [
      {
        multi_Selection: true,
        show_list_label: true,
        uniqueId: uniqueId.value,
        name_of_list: "Add/Remove allergies",
        placeHolder: "Search for an allergy",
        items: [],
        listUpdatedFN: listUpdated,
        listFilteredFN: () => {
        },
        searchTextFN: findAllergyByName,
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "Please select an allergy",
        disabled: ref(false)
      }
    ];
    const groupedAllergies = computed(() => {
      const filtered = selectedAllergiesList.value.filter((allergy) => allergy.selected && allergy.name !== "Other" && allergy.name !== "None");
      const groups = {};
      filtered.forEach((allergy) => {
        const category = allergy.category || "CUSTOM";
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(allergy);
      });
      return Object.keys(groups).map((category) => {
        const categoryKey = category;
        const allergyNames = groups[category].map((a) => a.name).join(", ");
        return {
          category,
          categoryName: allergyCategories[categoryKey]?.name || category,
          allergyNames,
          allergies: groups[category]
        };
      });
    });
    const allergyCategoryDetailsForm = computed(() => {
      const fields = [];
      groupedAllergies.value.forEach((group) => {
        fields.push({
          componentType: "Heading",
          name: group.categoryName,
          grid: { s: "12" }
        });
        fields.push({
          // componentType: "labelField",
          header: "Allergies in this category",
          name: `category_label_${group.category}`,
          value: group.allergyNames,
          grid: { s: "12" }
        });
        fields.push({
          componentType: "textAreaField",
          header: "Describe the allergic reaction",
          name: `category_details_${group.category}`,
          obsValueType: "value_text",
          placeholder: `Describe the allergic reaction for ${group.categoryName.toLowerCase()}`,
          validation: (value) => {
            if (!value || value.trim() === "") {
              return `Please provide reaction details for ${group.categoryName}`;
            }
            return null;
          },
          grid: { s: "12" }
        });
        const isLastCategory = groupedAllergies.value.indexOf(group) === groupedAllergies.value.length - 1;
        if (!isLastCategory) {
          fields.push({
            componentType: "Dashes",
            name: `divider_${group.category}`,
            grid: { s: "12" }
          });
        }
      });
      return fields;
    });
    onMounted(async () => {
      checkIfSamePatientInContext();
      await initializeAllergiesList();
    });
    const checkIfSamePatientInContext = () => {
      if (allergyStore.current_patient?.ID != patient.value?.ID) {
        allergyStore.clearSelectedMedicalAllergiesList();
        allergyStore.setCurrentPatient(patient.value);
      }
    };
    async function initializeAllergiesList() {
      const hcAllergies = searchHealthcareEquipmentAllergies("");
      const allAllergens = concatenateArrays(medicationAllergens, hcAllergies);
      const allergensWithSelection = allAllergens.map((allergen) => ({
        ...allergen,
        selected: false,
        category: determineCategory(allergen.concept_id)
      }));
      const sortedAllergens = allergensWithSelection.sort((a, b) => a.name.localeCompare(b.name));
      allergyStore.setMedicalAllergiesList(sortedAllergens);
    }
    function determineCategory(conceptId) {
      if (conceptId === 985) return "MEDICAL_SUBSTANCE";
      if (conceptId === 7579) return "FOOD";
      if (conceptId === 7759) return "ENVIRONMENTAL";
      if (conceptId === 6408) return "OTHER";
      if (conceptId >= 2e3 && conceptId < 3e3) return "MEDICATION";
      return "MEDICATION";
    }
    function listUpdated(data) {
      data.forEach((item) => {
        if (item.selected === true && item.name === "Other") {
          showOtherInput.value = true;
        }
        if (item.selected === false && item.name === "Other") {
          cancelCustomAllergy();
        }
        if (item.selected === true && item.name === "None") {
          data.forEach((otherItem) => {
            if (otherItem.name !== "None") {
              otherItem.selected = false;
            }
          });
        }
        if (item.selected === true && item.name !== "None") {
          const noneItem = data.find((d) => d.name === "None");
          if (noneItem) noneItem.selected = false;
        }
      });
      allergyStore.setSelectedMedicalAllergiesList(data);
      setCommonAllergiesList();
    }
    async function findAllergyByName(text) {
      const searchText = text;
      const drugs = await ConceptService.getConceptSet("OPD Medication", searchText);
      const hcAllergies = searchHealthcareEquipmentAllergies(searchText);
      const medicationResults = drugs ? drugs.map((drug) => ({
        ...drug,
        category: "MEDICATION",
        selected: false
      })) : [];
      const allResults = concatenateArrays(medicationResults, hcAllergies);
      const uniqueResults = allResults.filter((item, index, self) => index === self.findIndex((t) => t.concept_id === item.concept_id));
      const sortedList = uniqueResults.sort((a, b) => a.name.localeCompare(b.name));
      allergyStore.setMedicalAllergiesList(sortedList);
      setCommonAllergiesList();
    }
    function setCommonAllergiesList() {
      const tempData = [...allergiesList.value];
      selectedAllergiesList.value.forEach((selectedAllergy) => {
        let found = false;
        tempData.forEach((allergyItem, index) => {
          if (allergyItem.concept_id === selectedAllergy.concept_id && selectedAllergy.selected === true) {
            tempData[index] = selectedAllergy;
            found = true;
          }
        });
        if (!found && selectedAllergy.selected === true) {
          tempData.push(selectedAllergy);
        }
      });
      const uniqueList = tempData.filter(
        (item, index, self) => index === self.findIndex((t) => t?.concept_id === item?.concept_id)
      );
      allergyStore.setMedicalAllergiesList(uniqueList);
    }
    function generateUniqueId(length = 8, prefix = "") {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = prefix;
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result += `-${Date.now()}`;
      return result;
    }
    async function addCustomAllergy(allergyName) {
      try {
        const customAllergy = allergyName.trim();
        if (!customAllergy) {
          toastWarning("Please specify the allergy");
          return;
        }
        const newAllergy = {
          name: customAllergy,
          selected: true,
          concept_id: parseInt(generateUniqueId(8, "9")),
          concept_name_id: parseInt(generateUniqueId(8, "9")),
          category: "CUSTOM",
          isCustom: true,
          locale: "en",
          creator: 1,
          date_created: (/* @__PURE__ */ new Date()).toISOString(),
          uuid: generateUniqueId(32, "custom-"),
          concept_name_type: "FULLY_SPECIFIED",
          locale_preferred: 0
        };
        allergyStore.setMedicalAllergiesList([...allergiesList.value, newAllergy]);
        allergyStore.setSelectedMedicalAllergiesList(newAllergy);
        showOtherInput.value = false;
        addingCustomAllergy.value = true;
        allergyToAdd.value = "";
        const otherItem = allergyStore.findSelectedAllergyByName("Other");
        if (otherItem) {
          allergyStore.unselectOther(otherItem);
        }
      } catch (error) {
        console.error("Error adding custom allergy:", error);
        toastWarning("Failed to add custom allergy");
      }
    }
    const cancelCustomAllergy = () => {
      showOtherInput.value = false;
      allergyToAdd.value = "";
      addingCustomAllergy.value = false;
      const otherItem = allergyStore.findSelectedAllergyByName("Other");
      if (otherItem) {
        allergyStore.unselectOther(otherItem);
      }
    };
    async function onSubmit() {
      const selected = selectedAllergiesList.value.filter((a) => a.selected);
      const noneSelected = selected.find((a) => a.name === "None");
      if (noneSelected) {
        toastSuccess("No allergies recorded");
        return;
      }
      if (selected.length === 0) {
        toastWarning("Please select at least one allergy or select 'None'");
        return;
      }
      const formValidation = await detailsFormRef.value?.validateForm();
      if (!formValidation?.isValid) {
        toastWarning("Please provide reaction details for all allergy categories");
        return;
      }
      const formValues = detailsFormRef.value?.getFormValues();
      groupedAllergies.value.forEach((group) => {
        const categoryKey = group.category;
        allergyCategories[categoryKey]?.concept_id || 1e3;
        const detailsFieldName = `category_details_${group.category}`;
        const details = formValues?.[detailsFieldName] || "";
        ({
          obs_datetime: Service.getSessionDate(),
          child: [
            // Add details as first child
            {
              concept_id: 7002,
              // Details concept_id
              value_text: details,
              obs_datetime: Service.getSessionDate()
            },
            // Add each allergy as a child observation
            ...group.allergies.map((allergy) => ({
              concept_id: 7003,
              // Allergen concept_id
              value_coded: allergy.concept_id,
              obs_datetime: Service.getSessionDate()
            }))
          ]
        });
      });
      try {
        toastSuccess("Allergies saved successfully");
        detailsFormRef.value?.resetForm();
      } catch (error) {
        console.error("Error saving allergies:", error);
        toastWarning("Failed to save allergies");
      }
    }
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), null, {
          default: withCtx(() => [
            createVNode(unref(IonCardHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), { class: "header-container" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(alertCircleOutline),
                      class: "allergy-icon"
                    }, null, 8, ["icon"]),
                    _cache[3] || (_cache[3] = createBaseVNode("span", { style: { "font-size": "16px", "font-weight": "600" } }, " Allergies (Medication, Medical Substance, Food and Environmental) ", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(ListPicker, {
                  multiSelection: list_picker_properties[0].multi_Selection,
                  show_label: list_picker_properties[0].show_list_label,
                  uniqueId: list_picker_properties[0].uniqueId,
                  name_of_list: list_picker_properties[0].name_of_list,
                  choose_place_holder: list_picker_properties[0].placeHolder,
                  "items_-list": allergiesList.value,
                  use_internal_filter: list_picker_properties[0].use_internal_filter,
                  disabled: list_picker_properties[0].disabled.value,
                  onItemListUpDated: list_picker_properties[0].listUpdatedFN,
                  onItemListFiltered: list_picker_properties[0].listFilteredFN,
                  onItemSearchText: list_picker_properties[0].searchTextFN
                }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered", "onItemSearchText"]),
                showOtherInput.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
                  createVNode(unref(IonInput), {
                    modelValue: allergyToAdd.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allergyToAdd.value = $event),
                    placeholder: "Please specify the allergy",
                    fill: "outline",
                    class: "custom-input"
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", _hoisted_2$3, [
                    createVNode(unref(IonButton), {
                      onClick: _cache[1] || (_cache[1] = ($event) => addCustomAllergy(allergyToAdd.value)),
                      class: "addCustomAllergyBtn"
                    }, {
                      default: withCtx(() => [..._cache[4] || (_cache[4] = [
                        createTextVNode(" Add Allergy ", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(unref(IonButton), {
                      onClick: _cache[2] || (_cache[2] = ($event) => cancelCustomAllergy()),
                      fill: "clear",
                      class: "cancelBtn"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(closeCircleOutline),
                          slot: "icon-only"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true),
                selectedAllergiesList.value.length > 0 && groupedAllergies.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                  createVNode(unref(IonCard), { class: "details-form-card" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonCardHeader), null, {
                        default: withCtx(() => [
                          createVNode(unref(IonLabel), { class: "details-header" }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: unref(documentTextOutline),
                                class: "details-icon"
                              }, null, 8, ["icon"]),
                              _cache[5] || (_cache[5] = createBaseVNode("span", null, "Allergic Reaction Details", -1))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(IonCardContent), null, {
                        default: withCtx(() => [
                          createVNode(StandardForm, {
                            formData: allergyCategoryDetailsForm.value,
                            ref_key: "detailsFormRef",
                            ref: detailsFormRef
                          }, null, 8, ["formData"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonAccordionGroup), {
              ref_key: "accordionGroup",
              ref: accordionGroup,
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonAccordion), {
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
                        createVNode(unref(IonLabel), { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode("Previous allergies", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_4$1, [
                      createVNode(PreviousAllergies)
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

const Allergies = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-03243be0"]]);

const _hoisted_1$3 = {
  key: 0,
  style: { "background": "white", "padding": "20px", "border-radius": "5px", "margin-bottom": "20px" }
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ExistingConditions",
  props: {
    onNext: { type: Function },
    onSkip: { type: Function },
    onPrevious: { type: Function }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const noneChecked = ref(false);
    const existingHistory = ref([]);
    const now = /* @__PURE__ */ new Date();
    const today = now.toISOString().split("T")[0];
    const priorConditionsForm = computed(() => {
      return [
        {
          componentType: "checkboxField",
          header: "Patient has no prior/existing conditions",
          name: "none",
          value: noneChecked.value,
          onChange: (value) => {
            noneChecked.value = value;
          },
          grid: { s: "12" }
        },
        {
          componentType: "multiSelectInputField",
          header: "Condition Name",
          name: "name",
          icon: icons.search,
          validation: (value) => {
            if (noneChecked.value) return null;
            return StandardValidations.required(value);
          },
          grid: { s: "12" },
          condition: () => !noneChecked.value
        },
        // Commented out for future ICD11 implementation
        {
          componentType: "Slot",
          slotName: "icd11Selection",
          name: "icd11Slot",
          grid: { s: "12" },
          condition: () => !noneChecked.value
        },
        {
          componentType: "dateInputField",
          header: "Date of diagnosis",
          name: "date",
          validation: (value) => {
            if (noneChecked.value) return null;
            const selectedDate = new Date(value);
            const currentDate = /* @__PURE__ */ new Date();
            if (!value) return "Date of diagnosis is required";
            if (selectedDate > currentDate) return "Date of diagnosis cannot be in the future";
            return null;
          },
          initialValue: today,
          grid: { s: "12" },
          condition: () => !noneChecked.value
        },
        {
          componentType: "radioButtonField",
          header: "On treatment?",
          name: "onTreatment",
          options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
            { value: "Unknown", label: "Unknown" }
          ],
          validation: (value) => {
            if (noneChecked.value) return null;
            return StandardValidations.required(value);
          },
          grid: { s: "12" },
          condition: () => !noneChecked.value
        },
        {
          componentType: "textAreaField",
          header: "Additional details",
          name: "additionalDetails",
          grid: { s: "12" },
          condition: () => !noneChecked.value
        },
        {
          componentType: "textAreaField",
          header: "Surgeries",
          name: "Surgeries",
          placeholder: "Eg Appendectomy in 2015",
          grid: { s: "12" },
          condition: () => !noneChecked.value
        },
        {
          componentType: "textAreaField",
          header: "Previous Admissions",
          name: "previousAdmissions",
          placeholder: "Eg Admitted in 2020 for Pneumonia",
          grid: { s: "12" },
          condition: () => !noneChecked.value
        }
      ];
    });
    const { formRef } = useExposeFromStandardForm();
    const getExistingHistory = async () => {
    };
    const onSubmit = async () => {
      if (noneChecked.value) {
        if (props.onSkip) props.onSkip();
        return;
      }
    };
    onMounted(async () => {
      await getExistingHistory();
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        existingHistory.value && existingHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          _cache[0] || (_cache[0] = createBaseVNode("h4", { style: { "color": "rgba(0, 0, 0, 0.6)", "margin-bottom": "10px" } }, "Known Conditions", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(existingHistory.value, (condition, index) => {
            return openBlock(), createElementBlock("p", {
              key: index,
              style: { "color": "rgba(0, 0, 0, 0.6)", "margin": "0" }
            }, toDisplayString(condition), 1);
          }), 128))
        ])) : createCommentVNode("", true),
        createVNode(unref(IonCard), null, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(StandardForm, {
                      formData: priorConditionsForm.value,
                      ref_key: "formRef",
                      ref: formRef
                    }, null, 8, ["formData"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const ExistingConditions = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-414467d6"]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LastMeal",
  setup(__props, { expose: __expose }) {
    const noneChecked = ref(false);
    const now = /* @__PURE__ */ new Date();
    const today = now.toISOString().split("T")[0];
    const medicationsForm = computed(() => {
      return [
        {
          componentType: "checkboxField",
          label: "Patient did not eat",
          type: "single",
          name: "Patient did not eat",
          value: noneChecked.value,
          onChange: (value) => {
            noneChecked.value = value;
          },
          grid: { s: "12" }
        },
        {
          componentType: "dateInputField",
          header: "When did the patient eat?",
          name: "date",
          validation: (value) => {
            if (noneChecked.value) return null;
            const selectedDate = new Date(value);
            const currentDate = /* @__PURE__ */ new Date();
            if (selectedDate > currentDate) return "Date of eating cannot be in the future";
            return null;
          },
          initialValue: today,
          grid: { s: "12" },
          condition: () => !noneChecked.value
        },
        {
          componentType: "textAreaField",
          header: "What did the patient eat?",
          name: "medication_details",
          placeholder: "e.g., Rice and beans",
          grid: { s: "12" },
          condition: () => !noneChecked.value
        }
      ];
    });
    const { formRef } = useExposeFromStandardForm();
    __expose({
      getFormValues: () => formRef.value?.getFormValues(),
      validateForm: () => formRef.value?.validateForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(StandardForm, {
                formData: medicationsForm.value,
                ref_key: "formRef",
                ref: formRef
              }, null, 8, ["formData"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const useHistoryOfPresentingComplaintsForm = () => {
  const reviewOfSystemsForm = computed(() => {
    return [
      {
        componentType: "textAreaField",
        header: "History of Presenting Complaints",
        name: "events",
        placeholder: "e.g., Started with mild abdominal pain 3 days ago...",
        validation: StandardValidations.required,
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Was the patient injured?",
        name: "wasInjured",
        type: "inline",
        obsValueType: "value_text",
        validation: StandardValidations.required,
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "dateTimeInputField",
        header: "Select Date/Time of Injury",
        name: "timeOfInjury",
        obsValueType: "value_datetime",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.wasInjured === "Yes" && !value) return "Time of injury is required";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Did the patient lose consciousness on the scene?",
        name: "lostConsciousness",
        type: "inline",
        obsValueType: "value_text",
        initialValue: "Unknown",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Unknown", value: "Unknown" }
        ],
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "radioButtonField",
        header: "Was this injury work-related?",
        name: "occupationalInjury",
        type: "inline",
        obsValueType: "value_text",
        initialValue: "Unknown",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
          { label: "Unknown", value: "Unknown" }
        ],
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "Dashes"
      },
      // Mechanism of Injury
      {
        componentType: "Heading",
        name: "Mechanism of Injury",
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Assault",
        name: "assault",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Road Traffic",
        type: "single",
        name: "roadTraffic",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Fall",
        name: "fall",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Bite",
        name: "bite",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Gunshot",
        name: "gunshot",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Collapse of building",
        name: "collapse",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "12", md: "3" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Self-inflicted",
        name: "selfInflicted",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Burns",
        name: "burns",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Drowning",
        name: "drowning",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "checkboxField",
        label: "Other",
        name: "otherMechanism",
        type: "single",
        obsValueType: "value_text",
        grid: { s: "4" },
        condition: (data) => data?.wasInjured === "Yes"
      },
      {
        componentType: "Dashes"
      },
      // Assault Type (if assault is checked)
      {
        componentType: "radioButtonField",
        header: "Type of assault",
        name: "assaultType",
        type: "inline",
        obsValueType: "value_text",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.assault && !value) return "Please specify the type of assault";
          return null;
        },
        options: [
          { label: "Physical", value: "Physical" },
          { label: "Sexual", value: "Sexual" }
        ],
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.assault === true
      },
      {
        componentType: "textAreaField",
        header: "Assault comments",
        name: "assaultComment",
        placeholder: "Add details about the assault",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.assault && !value) return "Please provide details about the Assault injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.assault === true
      },
      // Other mechanism comment
      {
        componentType: "textAreaField",
        header: "Other mechanism comments",
        name: "otherMechanismComment",
        placeholder: "Add details about the mechanism of injury",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.otherMechanism && !value) return "Please provide details about the Other injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.otherMechanism === true
      },
      // Comments for other mechanisms
      {
        componentType: "textAreaField",
        header: "Road Traffic comments",
        name: "roadTrafficComment",
        placeholder: "Add details about the roadtraffic",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.roadTraffic && !value) return "Please provide details about the Road Traffic injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.roadTraffic === true
      },
      {
        componentType: "textAreaField",
        header: "Fall comments",
        name: "fallComment",
        placeholder: "Add details about the fall",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.fall && !value) return "Please provide details about the Fall injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.fall === true
      },
      {
        componentType: "textAreaField",
        header: "Bite comments",
        name: "biteComment",
        placeholder: "Add details about the bite",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.bite && !value) return "Please provide details about the Bite injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.bite === true
      },
      {
        componentType: "textAreaField",
        header: "Gunshot comments",
        name: "gunshotComment",
        placeholder: "Add details about the gunshot",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.gunshot && !value) return "Please provide details about the Gunshot injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.gunshot === true
      },
      {
        componentType: "textAreaField",
        header: "Collapse of building comments",
        name: "collapseComment",
        placeholder: "Add details about the collapse",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.collapse && !value) return "Please provide details about the Collapse of building injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.collapse === true
      },
      {
        componentType: "textAreaField",
        header: "Self-inflicted comments",
        name: "selfInflictedComment",
        placeholder: "Add details about the selfinflicted",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.selfInflicted && !value) return "Please provide details about the Self-inflicted injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.selfInflicted === true
      },
      {
        componentType: "textAreaField",
        header: "Burns comments",
        name: "burnsComment",
        placeholder: "Add details about the burns",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.burns && !value) return "Please provide details about the Burns injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.burns === true
      },
      {
        componentType: "textAreaField",
        header: "Drowning comments",
        name: "drowningComment",
        placeholder: "Add details about the drowning",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          if (allFormValues.drowning && !value) return "Please provide details about the Drowning injury";
          return null;
        },
        grid: { s: "12" },
        condition: (data) => data?.wasInjured === "Yes" && data?.drowning === true
      }
    ];
  });
  return {
    reviewOfSystemsForm
  };
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Events",
  props: {
    onNext: { type: Function },
    onSkip: { type: Function },
    onPrevious: { type: Function }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { reviewOfSystemsForm } = useHistoryOfPresentingComplaintsForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      if (!data.events) {
        toastWarning("History of Presenting Complaints is required");
        return;
      }
      try {
        await ObservationService.addObsToEncounterPatient(data, EncounterTypeId.HISTORY_OF_PRESENTING_COMPLAINTS);
        toastSuccess("History saved successfully");
        if (props.onNext) props.onNext();
      } catch (error) {
        console.error("Error saving history:", error);
        toastWarning("Failed to save history");
      }
    };
    onMounted(async () => {
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(StandardForm, {
                    formData: unref(reviewOfSystemsForm),
                    ref_key: "formRef",
                    ref: formRef
                  }, null, 8, ["formData"])
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

const Events = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4937af91"]]);

const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = { style: { "align-content": "center" } };
const _hoisted_3$1 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PresentingComplaints",
  setup(__props, { expose: __expose }) {
    const presentingComplaintsStore = usePresentingComplaintsStore();
    const { presentingComplaints } = storeToRefs(presentingComplaintsStore);
    const iconsContent = ref(icons);
    const no_item = ref(true);
    const search_item = ref(false);
    const show_btn = ref(true);
    const display_item = ref(false);
    const presentingComplaintsList = ref([]);
    const complaints = ref([]);
    const accordionGroup = ref();
    const presentingComplaintsForm = computed(() => {
      return [
        {
          componentType: "multiSelectInputField",
          header: "Presenting Complaints",
          name: "PresentingComplaints",
          trackBy: "concept_id",
          icon: icons.search,
          hideSelected: true,
          validation: (value) => {
            if (isNameInData(value?.name, presentingComplaintsList.value)) {
              return "Presenting complaint already added";
            }
            return StandardValidations.required(value);
          },
          options: complaints.value,
          grid: { s: "6" }
        },
        {
          componentType: "inputField",
          header: "Duration",
          name: "duration",
          icon: icons.time,
          validation: (value) => {
            return StandardValidations.isNotEmptyandNumber(value);
          },
          grid: { s: "6" },
          unitOptions: [
            { label: "Hours", value: "Hours" },
            { label: "Days", value: "Days" },
            { label: "Weeks", value: "Weeks" },
            { label: "Months", value: "Months" },
            { label: "Years", value: "Years" }
          ],
          unitValidation: (unitValue) => {
            if (!unitValue || unitValue === "") {
              return "Please select a unit.";
            }
            return null;
          }
        },
        {
          componentType: "inputField",
          header: "Specify the presenting complaint(s)",
          name: "Other (specify)",
          icon: icons.editPen,
          validation: (value) => {
            if (isNameInData(value, presentingComplaintsList.value)) {
              return "Presenting complaint already added";
            }
            return StandardValidations.required(value);
          },
          condition: (data) => {
            return data?.PresentingComplaints?.name === "Other";
          }
        },
        {
          componentType: "Alert",
          condition: (allFormValues) => {
            return !!(StandardValidations.required(allFormValues?.PresentingComplaints?.name) != null);
          },
          backgroundColor: "lightyellow",
          textColor: "black",
          value: "Please search thoroughly for the complaint. If it is not listed, search and select the 'Other' option to specify the complaint.",
          name: "noMatchAlert"
        }
      ];
    });
    const { formRef } = useExposeFromStandardForm();
    const getPresentingDataLIst = async () => {
      complaints.value = await PatientComplaintsService.getComplaintsList("Presenting complaint");
      modifyFieldValue(presentingComplaints.value, "PresentingComplaints", "multiSelectData", complaints.value);
    };
    const displayInputFields = () => {
      no_item.value = false;
      show_btn.value = false;
      search_item.value = true;
    };
    const addNewRow = async () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) return;
      buildPresentingComplaintsList(data);
      search_item.value = false;
      show_btn.value = true;
    };
    const buildPresentingComplaintsList = (data) => {
      const duration = data.duration + " " + data.duration_unit;
      const presentingComplainData = data.PresentingComplaints;
      const complaintName = presentingComplainData.name === "Other" ? data["Other (specify)"] : presentingComplainData.name;
      presentingComplaintsList.value.push({
        actionBtn: true,
        btn: ["delete"],
        name: complaintName,
        concept_id: presentingComplainData.concept_id,
        duration: presentingComplainData.duration,
        durationUnits: presentingComplainData.duration_unit,
        display: [complaintName, duration],
        data: [
          {
            concept_id: 8578,
            value_coded: presentingComplainData.concept_id,
            obs_datetime: Service.getSessionDate(),
            child: [
              {
                concept_id: presentingComplainData.concept_id,
                value_text: duration,
                obs_datetime: Service.getSessionDate()
              }
            ]
          }
        ]
      });
      formRef.value?.resetForm();
      display_item.value = true;
    };
    const isNameInData = (name, dataArray) => {
      return dataArray.some((item) => item.name === name);
    };
    const deletePresentingComplaintsList = (presentingComplaintsItem) => {
      presentingComplaintsList.value = presentingComplaintsList.value.filter((item) => item.display[0] !== presentingComplaintsItem.name);
    };
    const onSubmit = async () => {
      const latestObs = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PRESENTING_COMPLAINTS);
      const presentingComplaints2 = presentingComplaintsList.value.flatMap((item) => item.data);
      if (presentingComplaints2.length <= 0 && latestObs.length <= 0) return toastWarning("Presenting complaints is required");
      if (presentingComplaints2.length <= 0) return;
      await ObservationService.addObsToEncounterPatient(presentingComplaints2, EncounterTypeId.PRESENTING_COMPLAINTS);
      toastSuccess("Presenting complaints saved successful");
      presentingComplaintsList.value = [];
    };
    onMounted(async () => {
      await getPresentingDataLIst();
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_accordion = resolveComponent("ion-accordion");
      const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), null, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(DashBox, {
                  status: no_item.value,
                  content: "No presenting complaints added"
                }, null, 8, ["status"]),
                display_item.value ? (openBlock(), createElementBlock("span", _hoisted_1$2, [
                  createVNode(List, {
                    listData: presentingComplaintsList.value,
                    "onClicked:delete": deletePresentingComplaintsList
                  }, null, 8, ["listData"])
                ])) : createCommentVNode("", true),
                search_item.value ? (openBlock(), createBlock(_component_ion_row, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(StandardForm, {
                      formData: presentingComplaintsForm.value,
                      ref_key: "formRef",
                      ref: formRef
                    }, null, 8, ["formData"]),
                    createBaseVNode("div", _hoisted_2$2, [
                      createVNode(DynamicButton, {
                        fill: "clear",
                        icon: iconsContent.value.plus,
                        iconSlot: "icon-only",
                        "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addNewRow()),
                        name: "Save"
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                show_btn.value ? (openBlock(), createBlock(_component_ion_row, {
                  key: 2,
                  style: { "margin-top": "10px" }
                }, {
                  default: withCtx(() => [
                    createVNode(DynamicButton, {
                      fill: "clear",
                      icon: iconsContent.value.plus,
                      iconSlot: "icon-only",
                      "onClicked:btn": _cache[1] || (_cache[1] = ($event) => displayInputFields()),
                      name: "Add presenting complaints"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion_group, {
              ref_key: "accordionGroup",
              ref: accordionGroup,
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
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode("Previous presenting complaints", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_3$1, [
                      createVNode(previousComplaints)
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

const PresentingComplaints = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ec604117"]]);

const useObstetricsForm = () => {
  const contraceptiveOptions = [
    { id: 1, name: "Jadelle" },
    { id: 2, name: "Implanon" },
    { id: 3, name: "Levoplant" },
    { id: 4, name: "Depo Provera" },
    { id: 5, name: "Intra Uterine Contraceptive Device (IUCD)" },
    { id: 6, name: "Progestin only pills" },
    { id: 7, name: "Vasectomy" },
    { id: 8, name: "Tubal ligation" },
    { id: 9, name: "Combined oral contraceptive pills" },
    { id: 10, name: "Condoms (Male and female)" },
    { id: 11, name: "Lactation amenorrhea" },
    { id: 12, name: "Natural" }
  ];
  const pregnancyOutcomeOptions = [
    { id: 1, name: "First trimester miscarriage" },
    { id: 2, name: "Second trimester miscarriage" },
    { id: 3, name: "Stillbirth" },
    { id: 4, name: "Live birth" }
  ];
  const generatePregnancyOutcomeFields = (maxPregnancies = 10) => {
    const fields = [];
    fields.push({
      componentType: "Heading",
      name: "Previous Pregnancy Outcomes",
      grid: { s: "12" },
      condition: (data) => {
        const num = Number(data?.number_of_previous_pregnancies) || 0;
        return num > 0;
      }
    });
    for (let i = 0; i < maxPregnancies; i++) {
      const pregnancyIndex = i;
      const pregnancyNumber = i + 1;
      fields.push({
        componentType: "multiSelectInputField",
        header: `Outcome of Pregnancy ${pregnancyNumber}`,
        name: `previous_pregnancy_outcome_${pregnancyIndex}`,
        trackBy: "id",
        obsValueType: "value_text",
        options: pregnancyOutcomeOptions,
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          const num = Number(allFormValues.number_of_previous_pregnancies) || 0;
          if (num > pregnancyIndex && !value) return "Pregnancy outcome is required";
          return null;
        },
        grid: { s: "6" },
        condition: (data) => {
          const num = Number(data?.number_of_previous_pregnancies) || 0;
          return num >= pregnancyNumber;
        }
      });
      fields.push({
        componentType: "inputField",
        header: `Number of births (Pregnancy ${pregnancyNumber})`,
        name: `number_of_births_${pregnancyIndex}`,
        obsValueType: "value_numeric",
        type: "number",
        validation: (value, allFormValues) => {
          if (!allFormValues) return null;
          const outcomeFieldName = `previous_pregnancy_outcome_${pregnancyIndex}`;
          if (allFormValues[outcomeFieldName]?.id === 4 && !value) {
            return "Number of births is required for live birth";
          }
          if (value && Number(value) <= 0) return "Number of births must be positive";
          return null;
        },
        grid: { s: "12", md: "6" },
        condition: (data) => {
          const num = Number(data?.number_of_previous_pregnancies) || 0;
          const outcomeFieldName = `previous_pregnancy_outcome_${pregnancyIndex}`;
          return num >= pregnancyNumber && data?.[outcomeFieldName]?.id === 4;
        }
      });
    }
    fields.push({
      componentType: "Alert",
      header: `For more than ${maxPregnancies} previous pregnancies, please contact support or add manually`,
      message: "",
      backgroundColor: "lightyellow",
      grid: { s: "12" },
      condition: (data) => {
        const num = Number(data?.number_of_previous_pregnancies) || 0;
        return num > maxPregnancies;
      }
    });
    return fields;
  };
  const obstetricsForm = computed(() => {
    const baseFields = [
      // Age at Menarche
      {
        componentType: "inputField",
        header: "Age at Menarche",
        name: "age_at_menarche",
        obsValueType: "value_numeric",
        type: "number",
        validation: (value) => {
          if (!value) return "Age at menarche is required";
          const num = Number(value);
          if (num <= 0) return "Age at menarche must be a positive number";
          return null;
        },
        grid: { s: "12", md: "6" }
      },
      // Last Menstrual Period
      {
        componentType: "dateInputField",
        header: "Last normal menstrual period",
        name: "last_menstrual",
        obsValueType: "value_datetime",
        validation: (value) => {
          if (!value) return "Last menstrual date is required";
          const selectedDate = new Date(value);
          const currentDate = /* @__PURE__ */ new Date();
          if (selectedDate > currentDate) return "Date cannot be in the future";
          return null;
        },
        grid: { s: "12", md: "6" }
      },
      // Is Patient Pregnant
      {
        componentType: "radioButtonField",
        header: "Is the patient pregnant?",
        name: "pregnant",
        type: "inline",
        obsValueType: "value_text",
        initialValue: "No",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { s: "12" }
      },
      // Number of Previous Pregnancies (Parity)
      {
        componentType: "inputField",
        header: "Parity",
        name: "number_of_previous_pregnancies",
        obsValueType: "value_numeric",
        type: "number",
        validation: (value) => {
          if (value === "" || value === null || value === void 0) return "Number of previous pregnancies is required";
          const num = Number(value);
          if (num < 0) return "Number of previous pregnancies cannot be negative";
          if (!Number.isInteger(num)) return "Number of pregnancies must be an integer";
          return null;
        },
        onChange: (value, allFormValues) => {
          const numPregnancies = Number(value) || 0;
          const updates = {};
          for (let i = 0; i < numPregnancies; i++) {
            if (!allFormValues[`previous_pregnancy_outcome_${i}`]) {
              updates[`previous_pregnancy_outcome_${i}`] = "";
            }
          }
          const currentNum = Number(allFormValues.number_of_previous_pregnancies) || 0;
          if (numPregnancies < currentNum) {
            for (let i = numPregnancies; i < currentNum; i++) {
              updates[`previous_pregnancy_outcome_${i}`] = null;
              updates[`number_of_births_${i}`] = null;
            }
          }
          return updates;
        },
        grid: { s: "12", md: "6" }
      },
      // Gestational Age (only shown if pregnant)
      {
        componentType: "inputField",
        header: "Gestational age (weeks)",
        name: "gestational_age",
        obsValueType: "value_text",
        type: "text",
        disabled: true,
        grid: { s: "12", md: "6" },
        condition: (data) => data?.pregnant === "Yes",
        onChange: (value, allFormValues) => {
          const lastMenstrual = allFormValues.last_menstrual;
          if (!lastMenstrual) {
            return {
              gestational_age: "Select a date of last normal menstrual period above"
            };
          }
          const currentDate = /* @__PURE__ */ new Date();
          const lastMenstrualDate = new Date(lastMenstrual);
          const diffInMs = currentDate.getTime() - lastMenstrualDate.getTime();
          const diffInSeconds = Math.floor(diffInMs / 1e3);
          const weeks = Math.floor(diffInSeconds / 604800);
          const remainingDays = Math.floor(diffInSeconds % 604800 / 86400);
          return {
            gestational_age: `${weeks} weeks and ${remainingDays} days`
          };
        }
      }
    ];
    const pregnancyFields = generatePregnancyOutcomeFields(15);
    const contraceptiveFields = [
      {
        componentType: "multiSelectInputField",
        header: "Contraceptive history",
        name: "contraceptive_history",
        trackBy: "id",
        isMultiple: true,
        obsValueType: "value_text",
        options: contraceptiveOptions,
        grid: { s: "12" }
      }
    ];
    return [...baseFields, ...pregnancyFields, ...contraceptiveFields];
  });
  return {
    obstetricsForm
  };
};

const _hoisted_1$1 = {
  class: "ion-padding",
  slot: "content"
};
const _hoisted_2$1 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { style: { "margin-bottom": "10px" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GynaecologyAndObstetrics",
  props: {
    onNext: { type: Function },
    onSkip: { type: Function },
    onPrevious: { type: Function }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { obstetricsForm } = useObstetricsForm();
    const { formRef } = useExposeFromStandardForm();
    const existingObservations = ref([]);
    const formValues = ref({
      pregnant: "No",
      gestational_age: "Select a date of last normal menstrual period above"
    });
    const handleFieldChange = (event) => {
      formValues.value = event.allValues;
      if (event.fieldName === "last_menstrual" || event.fieldName === "pregnant") {
        calculateGestationalAge();
      }
    };
    const calculateGestationalAge = () => {
      const lastMenstrual = formValues.value.last_menstrual;
      if (!lastMenstrual || formValues.value.pregnant !== "Yes") {
        formRef.value?.setFormValue("gestational_age", "Select a date of last normal menstrual period above");
        return;
      }
      const currentDate = /* @__PURE__ */ new Date();
      const lastMenstrualDate = new Date(lastMenstrual);
      const diffInMs = currentDate.getTime() - lastMenstrualDate.getTime();
      const diffInSeconds = Math.floor(diffInMs / 1e3);
      const weeks = Math.floor(diffInSeconds / 604800);
      const remainingDays = Math.floor(diffInSeconds % 604800 / 86400);
      const ageText = `${weeks} weeks and ${remainingDays} days`;
      formRef.value?.setFormValue("gestational_age", ageText);
    };
    const loadExistingHistory = async () => {
      try {
        const encounters = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.OBSTETRIC_HISTORY);
        const observations = [];
        encounters.forEach((encounter) => {
          encounter.obs?.forEach((observation) => {
            const value = observation.value;
            const obsData = {
              obs_id: observation.obs_id,
              name: observation.names?.[0]?.name,
              value,
              children: []
            };
            if (observation.obs_group_id) {
              const parent = observations.find((o) => o.obs_id === observation.obs_group_id);
              if (parent) {
                parent.children.push(obsData);
              }
            } else {
              observations.push(obsData);
            }
          });
        });
        existingObservations.value = observations;
      } catch (error) {
        console.error("Error loading obstetric history:", error);
      }
    };
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) {
        toastWarning("Please fill in all required fields");
        return;
      }
      try {
        await ObservationService.addObsToEncounterPatient(data, EncounterTypeId.OBSTETRIC_HISTORY);
        toastSuccess("Obstetric history saved successfully");
        if (props.onNext) props.onNext();
      } catch (error) {
        console.error("Error saving obstetric history:", error);
        toastWarning("Failed to save obstetric history");
      }
    };
    watch(
      () => formValues.value.last_menstrual,
      () => {
        if (formValues.value.pregnant === "Yes") {
          calculateGestationalAge();
        }
      }
    );
    onMounted(async () => {
      await loadExistingHistory();
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        existingObservations.value && existingObservations.value.length > 0 ? (openBlock(), createBlock(unref(IonAccordionGroup), {
          key: 0,
          class: "previousView"
        }, {
          default: withCtx(() => [
            createVNode(unref(IonAccordion), {
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
                    createVNode(unref(IonLabel), { class: "previousLabel" }, {
                      default: withCtx(() => [..._cache[0] || (_cache[0] = [
                        createTextVNode("Existing Obstetrics History", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_1$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(existingObservations.value, (obs) => {
                    return openBlock(), createElementBlock("div", {
                      key: obs.obs_id,
                      style: { "margin-bottom": "10px", "color": "rgba(0, 0, 0, 0.6)" }
                    }, [
                      obs.children.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                        createBaseVNode("strong", null, toDisplayString(obs.name) + ":", 1),
                        createTextVNode(" " + toDisplayString(obs.value), 1)
                      ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
                        createBaseVNode("h4", _hoisted_4, toDisplayString(obs.name), 1),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(obs.children, (child) => {
                          return openBlock(), createElementBlock("div", {
                            key: child.obs_id,
                            style: { "padding-left": "20px" }
                          }, [
                            createBaseVNode("strong", null, toDisplayString(child.name) + ":", 1),
                            createTextVNode(" " + toDisplayString(child.value), 1)
                          ]);
                        }), 128))
                      ]))
                    ]);
                  }), 128))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _cache[1] || (_cache[1] = createBaseVNode("div", { style: { "margin-bottom": "4ch" } }, null, -1)),
        createVNode(unref(IonCard), null, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(StandardForm, {
                      formData: unref(obstetricsForm),
                      ref_key: "formRef",
                      ref: formRef,
                      allFormValues: formValues.value,
                      onFieldChanged: handleFieldChange
                    }, null, 8, ["formData", "allFormValues"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const GynaecologyAndObstetrics = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f754b19b"]]);

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SampleHistory",
  setup(__props, { expose: __expose }) {
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    usePatientProfile();
    const router = useRouter();
    const route = useRoute();
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglass-outline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const vitalsStore = useVitalsStore();
    const demographicsStore = useDemographicsStore();
    const investigationStore = useInvestigationStore();
    const diagnosisStore = useDiagnosisStore();
    useTreatmentPlanStore();
    const ncdMedicationsStore = useNCDMedicationsStore();
    const generalStore = useGeneralStore();
    useOutcomeStore();
    const enrollmentStore = useEnrollementStore();
    const complicationsStore = useComplicationsStore();
    const configStore = useConfigStore();
    const { patient } = storeToRefs(demographicsStore);
    const { vitals } = storeToRefs(vitalsStore);
    const { investigations } = storeToRefs(investigationStore);
    const { diagnosis } = storeToRefs(diagnosisStore);
    const { substance } = storeToRefs(enrollmentStore);
    const { selectedNCDMedicationList } = storeToRefs(ncdMedicationsStore);
    const { FootScreening, visualScreening, cvScreening } = storeToRefs(complicationsStore);
    const { sessionDate } = storeToRefs(configStore);
    const { apiStatus } = storeToRefs(useStatusStore());
    watch(
      doneButtonOptions,
      (newOptions, oldOptions) => {
        console.log("Done button options changed:", {
          from: oldOptions,
          to: newOptions,
          currentStep: currentTabIndex.value,
          tabsLength: tabs.value.length
        });
        if (newOptions.disabled !== oldOptions?.disabled) {
          console.log(`Done button ${newOptions.disabled ? "disabled" : "enabled"}`);
        }
        if (newOptions.text !== oldOptions?.text) {
          console.log(`Done button text changed from "${oldOptions?.text}" to "${newOptions.text}"`);
        }
      },
      { deep: true }
    );
    watch(isSaving, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        console.log(`Saving state changed: ${oldValue} -> ${newValue}`);
        if (newValue) {
          console.log("Starting save process...");
        } else {
          console.log("Save process completed");
        }
      }
    });
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const openBackController = () => {
      router.push("/patient-profile");
    };
    const getActiveTabs = () => {
      const allTabs = [
        {
          title: "Symptoms- Presenting Complaints",
          icon: ""
        },
        {
          title: "Events",
          icon: ""
        },
        {
          title: "Allergies",
          icon: ""
        },
        {
          title: "Medications",
          icon: ""
        },
        {
          title: "Prior/Existing Conditions",
          icon: ""
        },
        {
          title: "Gynaecology and Obstetrics",
          icon: ""
        },
        {
          title: "Last Meal",
          icon: ""
        }
      ];
      return allTabs.filter((tab) => {
        if (tab.title === "Gynaecology and Obstetrics") {
          return patient.value?.personInformation?.gender === "F";
        }
        return true;
      });
    };
    const tabs = ref(getActiveTabs());
    const vitalsRef = ref(null);
    const riskAssessmentRef = ref(null);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Symptoms- Presenting Complaints":
          return "PresentingComplaints";
        case "Events":
          return "Events";
        case "Allergies":
          return "Allergies";
        case "Medications":
          return "Medications";
        case "Prior/Existing Conditions":
          return "ExistingConditions";
        case "Gynaecology and Obstetrics":
          return "GynaecologyAndObstetrics";
        case "Last Meal":
          return "LastMeal";
        default:
          if (generalStore.NCDActivities.length > 0) {
            const firstActivity = generalStore.NCDActivities[0];
            switch (firstActivity) {
              case "Symptoms- Presenting Complaints":
                return "PresentingComplaints";
              case "Events":
                return "Events";
              case "Allergies":
                return "Allergies";
              case "Medications":
                return "Medications";
              case "Prior/Existing Conditions":
                return "ExistingConditions";
              case "Gynaecology and Obstetrics":
                return "GynaecologyAndObstetrics";
              case "Last Meal":
                return "LastMeal";
            }
          }
          return null;
      }
    };
    const refreshWizard = () => {
      showWizard.value = false;
      setTimeout(() => {
        currentTabIndex.value = 0;
        showWizard.value = true;
      }, 0);
    };
    const cleanVitalForm = () => {
      const vitals2 = useVitalsStore();
      vitals2.setVitals(vitals2.getInitialVitals(patient.value.ID));
    };
    const markWizard = async () => {
      const sessionD = getFieldValue(sessionDate.value, "sessionDate", "value") || HisDate.sessionDate();
      const vitalsData = getOfflineSavedUnsavedData("vitals");
      for (let i = 0; i < tabs.value.length; i++) {
        const tab = tabs.value[i];
        if (tab.title === "Vital Signs") {
          tabs.value[i].icon = isDateInArray(sessionD, vitalsData) ? checkmarkOutline : "";
        } else if (tab.title === "Risk Assessment") {
          const substanceAbuseData = getOfflineSavedUnsavedData("substanceAbuse");
          tabs.value[i].icon = isDateInArray(sessionD, substanceAbuseData) ? checkmarkOutline : "";
        } else if (tab.title === "Investigations") {
          const labOrders = patient?.value?.labOrders?.saved;
          const filteredArray = labOrders?.filter((obj) => {
            return HisDate.toStandardHisFormat(sessionD) === HisDate.toStandardHisFormat(obj.order_date);
          });
          tabs.value[i].icon = filteredArray?.length > 0 ? checkmarkOutline : "";
        } else if (tab.title === "Diagnosis") {
          const diagnosisData = getOfflineSavedUnsavedData("diagnosis");
          tabs.value[i].icon = isDateInArray(sessionD, diagnosisData) ? checkmarkOutline : "";
        } else if (tab.title === "Complications Screening") {
          const screeningData = getOfflineSavedUnsavedData("screening");
          tabs.value[i].icon = isDateInArray(sessionD, screeningData) ? checkmarkOutline : "";
        } else if (tab.title === "Treatment Plan") {
          if (selectedNCDMedicationList.value.length > 0) {
            tabs.value[i].icon = MedicationSelectionHasValues() ? checkmarkOutline : "";
          } else {
            tabs.value[i].icon = "";
          }
        }
      }
      validateDoneButtonState();
    };
    const isDateInArray = (dateToCheck, diagnosisArray) => {
      const checkDate = new Date(dateToCheck);
      checkDate.setHours(0, 0, 0, 0);
      return diagnosisArray.some((diagnosis2) => {
        const obsDate = new Date(diagnosis2.obs_datetime);
        obsDate.setHours(0, 0, 0, 0);
        return obsDate.getTime() === checkDate.getTime();
      });
    };
    const saveComplications = async () => {
      const data = [];
      const childDataVisualScreening = await formatInputFiledData(visualScreening.value);
      const childDataFootScreening = await formatGroupRadioButtonData(FootScreening.value);
      const childDataCVRisk = await formatInputFiledData(cvScreening.value);
      if (childDataVisualScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Visual acuity", true),
          value_text: "visual acuity test",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataVisualScreening
        });
      }
      if (childDataFootScreening.length > 0) {
        data.push({
          concept_id: await ConceptService.getConceptID("Foot check", true),
          value_text: "foot screening",
          obs_datetime: ConceptService.getSessionDate(),
          child: childDataFootScreening
        });
      }
      if (childDataCVRisk.length > 0) {
        data.push(...childDataCVRisk);
      }
      if (data.length > 0) {
        (patient.value.screening ??= {}).unsaved ??= [];
        patient.value.screening.unsaved.push(...data);
        toastSuccess("Complications saved successfully");
      } else {
        toastWarning("No complications data to save");
      }
    };
    const saveTreatmentPlan = async () => {
      const allergyStore = useAllegyStore();
      if (!lodashExports.isEmpty(allergyStore.selectedMedicalAllergiesList)) {
        const userStore = useUserStore();
        const allergies = allergyStore.selectedMedicalAllergiesList.map((allergy) => ({
          concept_id: allergy.concept_id,
          obs_datetime: Service.getSessionDate(),
          value_coded: allergy.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: allergy.name
        }));
        const patientData2 = await stageAllergies(allergies);
        patient.value = Object.assign(patient.value, patientData2);
        console.log("Allergies staged successfully:", patient.value);
        allergyStore.clearSelectedMedicalAllergiesList();
      }
      const m_patientData = await createNCDDrugOrder();
      patient.value = Object.assign(patient.value, m_patientData);
      const patientData = await useNonPharmaTherapyStore().saveNonPharmaTherapyPatientData();
      patient.value = Object.assign(patient.value, patientData);
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "Risk Assessment") {
        riskAssessmentRef.value?.onSubmit();
      }
      if (value == "Complications Screening") {
        await saveComplications();
      }
      if (value == "Treatment Plan") {
        await saveTreatmentPlan();
      }
      await savePatientRecord(patient.value);
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await resetNCDPatientData();
        await savePatientRecord(patient.value);
        await router.push("/triage-list");
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    onMounted(async () => {
      if (generalStore.NCDActivities.length === 0) {
        router.push("patientProfile");
        return;
      }
      const data = useComplicationsStore();
      data.resetScreening();
      tabs.value = getActiveTabs();
      await markWizard();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    watch(currentTabIndex, async () => {
      await validateDoneButtonState();
    });
    watch(
      vitals,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      patient,
      async () => {
        const data = useComplicationsStore();
        data.resetScreening();
        await markWizard();
      },
      { deep: true }
    );
    watch(
      sessionDate,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      investigations,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      diagnosis,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      substance,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      selectedNCDMedicationList,
      async () => {
        await markWizard();
      },
      { deep: true }
    );
    watch(
      route,
      async (newRoute) => {
        refreshWizard();
        cleanVitalForm();
        tabs.value = getActiveTabs();
      },
      { deep: true }
    );
    watch(
      patient,
      async (old, newData) => {
        if (old.ID != newData.ID) {
          refreshWizard();
          cleanVitalForm();
        }
      },
      { deep: true }
    );
    __expose({
      saveData,
      markWizard,
      refreshWizard,
      validateDoneButtonState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$8, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Sample History",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(PresentingComplaints, { ref: "presentingComplaintsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingComplaints"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Events, { ref: "eventsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Events"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Allergies, { ref: "allergiesRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Allergies"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$7, { ref: "medicationsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Medications"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(ExistingConditions, { ref: "existingConditionsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "ExistingConditions"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(GynaecologyAndObstetrics, { ref: "gynaecologyAndObstetricsRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "GynaecologyAndObstetrics"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$4, { ref: "lastMealRef" }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "LastMeal"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
