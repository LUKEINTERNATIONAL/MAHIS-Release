import { c as computed, s as defineComponent, a2 as onMounted, n as nextTick, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, a$ as personOutline, f as ref, K as modalController, w as watch, z as createElementBlock, bd as IonCardContent, a7 as IonLabel, a5 as createTextVNode, J as Fragment, R as renderList, bK as IonCard, a4 as normalizeClass, bb as IonCardHeader, ba as IonCardTitle, L as IonIcon, D as toDisplayString, H as createCommentVNode, Q as alertCircleOutline, by as IonText, N as IonButton, e3 as createOutline, bG as addOutline, x as resolveComponent } from './vendor-DrpjccQs.js';
import { y as StandardValidations, K as ObservationService, b as EncounterTypeId, z as StandardForm, F as DynamicButton, r as StandardModal, t as toastWarning, H as HisDate, G as toastSuccess, u as useDemographicsStore, o as createModal, b5 as RelationshipService, J as savePatientRecord, _ as _export_sfc } from '../index-PMl5GQCx.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-BpEzAVEw.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { u as useLocation } from './useLocation-CbRPUqCc.js';

const useNewbornDetailsForm = () => {
  const newbornDetailsFormSection = computed(() => {
    return [
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Delayed cord cutting? (1-3 minutes)",
        name: "Delayed cord cutting",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "APGAR score at 1 minute",
        name: "APGAR score at 1 minute",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" },
        validation: StandardValidations.required
      },
      {
        componentType: "inputField",
        header: "APGAR score at 5 minutes",
        name: "APGAR score at 5 minutes",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" },
        validation: StandardValidations.required
      },
      {
        componentType: "Dashes"
      },
      //Vitals
      {
        componentType: "Heading",
        position: "left",
        name: "Newborn Vitals"
      },
      {
        componentType: "inputField",
        header: "Baby weight (grams)",
        name: "Baby weight (grams)",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "4" }
      },
      {
        componentType: "inputField",
        header: "Baby height (cm)",
        name: "Baby height (cm)",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "4" }
      },
      {
        componentType: "inputField",
        header: "Head circumference (cm)",
        name: "Head circumference",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "4" }
      },
      {
        componentType: "Dashes"
      },
      // ========== Section: Medication & Care ==========
      {
        componentType: "radioButtonField",
        header: "Tetracycline eye ointment given?",
        name: "Tetracycline eye ointment given?",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes"
      },
      // ========== Section: Complications ==========
      {
        componentType: "checkboxField",
        header: "Newborn baby complications",
        name: "Newborn baby complications",
        type: "multiple",
        obsValueType: "value_coded",
        value: [],
        options: [
          { label: "None", value: "None", exclusive: true },
          { label: "Prematurity", value: "Prematurity" },
          { label: "Sepsis", value: "Sepsis" },
          { label: "Congenital abnormalities", value: "Congenital abnormalities" },
          { label: "Asphyxia", value: "Asphyxia" },
          { label: "Low birth weight", value: "Low birth weight" },
          { label: "Nursery", value: "Nursery" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      // Conditional: Other Notes
      {
        componentType: "inputField",
        header: "Other complications notes",
        name: "Other complications notes",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Other");
        }
      },
      // Conditional: Specify Congenital Abnormalities
      {
        componentType: "inputField",
        header: "Specify Congenital Abnormalities",
        name: "Specify Congenital Abnormalities",
        obsValueType: "value_text",
        offset: "1",
        grid: { s: "11" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Congenital abnormalities");
        }
      },
      // Conditional: Asphyxia -> Resuscitation
      {
        componentType: "radioButtonField",
        header: "Was resuscitation attempted?",
        name: "Resuscitation attempt",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        offset: "1",
        grid: { s: "11" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Asphyxia");
        }
      },
      // Conditional: Type of Resuscitation
      {
        componentType: "radioButtonField",
        header: "Type of resuscitation?",
        name: "Resuscitation Type",
        obsValueType: "value_coded",
        options: [
          { label: "Drying only", value: "Drying only" },
          { label: "Clearing airway", value: "Clearing airway" },
          { label: "Bag and mask", value: "Bag and mask" }
        ],
        offset: "2",
        grid: { s: "10" },
        condition: (formValues) => {
          return formValues["Resuscitation attempt"] == "Yes";
        }
      },
      // ========== Section: Management ==========
      {
        componentType: "checkboxField",
        header: "Management given to newborn",
        name: "Management given to newborn",
        type: "multiple",
        obsValueType: "value_coded",
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.length > 0 && !formValues["Newborn baby complications"]?.includes("None");
        },
        options: [
          { label: "None", value: "None", exclusive: true },
          { label: "Routine newborn care", value: "Routine newborn care" },
          { label: "Kangaroo mother care", value: "Kangaroo mother care" },
          { label: "Antibiotics", value: "Antibiotics" },
          { label: "Resuscitation", value: "Resuscitation" },
          { label: "Photo Therapy", value: "Photo Therapy" },
          { label: "Other", value: "Other" }
        ],
        offset: "1",
        grid: { s: "11" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Vitamin K given?",
        name: "Vitamin K given?",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Chlorhexidine 7.1% applied?",
        name: "Chlorhexidine 7.1% applied?",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      }
    ];
  });
  return {
    newbornDetailsFormSection
  };
};

const _hoisted_1$4 = { class: "ion-padding" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BabyDetailsModal",
  props: {
    babyIndex: {},
    baby: {},
    deliveryDate: {}
  },
  emits: ["close", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { newbornDetailsFormSection } = useNewbornDetailsForm();
    const formFields = computed(() => newbornDetailsFormSection.value);
    const babyRecord = ref({});
    const formRef = ref(null);
    const getCodedValue = (conceptName, valueCoded) => {
      const codedValueMap = {
        "Delayed cord cutting": { 1065: "Yes", 1066: "No" },
        "Tetracycline eye ointment given?": { 1065: "Yes", 1066: "No" },
        "Vitamin K given?": { 1065: "Yes", 1066: "No" },
        "Chlorhexidine 7.1% applied?": { 1065: "Yes", 1066: "No" },
        "Resuscitation attempt": { 1065: "Yes", 1066: "No" },
        "Resuscitation Type": {
          11384: "Drying only",
          11385: "Clearing airway",
          11386: "Bag and mask"
        },
        "Newborn baby complications": {
          1107: "None",
          8582: "Prematurity",
          8584: "Sepsis",
          8585: "Congenital abnormalities",
          8586: "Asphyxia",
          8587: "Low birth weight",
          8588: "Nursery",
          8583: "Other"
        },
        "Management given to newborn": {
          1107: "None",
          13006: "Routine newborn care",
          13007: "Kangaroo mother care",
          13008: "Antibiotics",
          13009: "Resuscitation",
          13010: "Photo Therapy",
          13011: "Other"
        }
      };
      return codedValueMap[conceptName]?.[valueCoded] || valueCoded.toString();
    };
    onMounted(async () => {
      await nextTick();
      const data = await ObservationService.getLatestObsByEncounterId(
        EncounterTypeId.Delivery_Details,
        props.baby
      );
      if (data && Array.isArray(data)) {
        await nextTick();
        const groupedData = {};
        data.forEach((obs) => {
          if (!groupedData[obs.concept_name]) {
            groupedData[obs.concept_name] = [];
          }
          groupedData[obs.concept_name].push(obs);
        });
        Object.entries(groupedData).forEach(([fieldName, observations]) => {
          if (fieldName === "Newborn baby complications" || fieldName === "Management given to newborn") {
            const values = observations.map((obs) => getCodedValue(fieldName, obs.value_coded));
            formRef.value?.setFormValue(fieldName, values);
          } else {
            const obs = observations[0];
            let fieldValue;
            if (obs.value_numeric !== void 0 && obs.value_numeric !== null) {
              fieldValue = obs.value_numeric.toString();
            } else if (obs.value_text !== void 0 && obs.value_text !== null) {
              fieldValue = obs.value_text;
            } else if (obs.value_coded !== void 0 && obs.value_coded !== null) {
              fieldValue = getCodedValue(fieldName, obs.value_coded);
            }
            if (fieldValue !== void 0) {
              formRef.value?.setFormValue(fieldName, fieldValue);
            }
          }
        });
      }
    });
    const setBabyDemographics = (element, value) => {
      babyRecord.value = value;
    };
    const onSave = async () => {
      if (lodashExports.isEmpty(babyRecord.value)) {
        toastWarning("Please select a baby");
        return;
      }
      if (HisDate.toStandardHisFormat(babyRecord.value.personInformation.birthdate) != HisDate.toStandardHisFormat(props.deliveryDate)) {
        toastWarning("Delivery and birthdate must be the same");
        return;
      }
      const validationResult = formRef.value?.validateForm();
      const formData = formRef.value?.getFormValues();
      const patientRecord = await ObservationService.buildRelativeObs(babyRecord.value, formData, EncounterTypeId.Delivery_Details);
      if (patientRecord && validationResult == null) {
        modalController.dismiss(babyRecord.value);
        toastSuccess("Baby details saved successfully");
      } else
        toastWarning("Please fill in the required fields");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: `Baby ${__props.babyIndex + 1} Details`,
        subtitle: "Enter newborn information",
        headerIcon: unref(personOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save",
            onClick: onSave,
            fill: "solid",
            iconSlot: "end"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$4, [
            createVNode(FindRegisterPatient, {
              patient: props.baby,
              onValueChanged: _cache[0] || (_cache[0] = (fieldName, value) => setBabyDemographics("", value))
            }, null, 8, ["patient"]),
            createVNode(StandardForm, {
              ref_key: "formRef",
              ref: formRef,
              "form-data": formFields.value
            }, null, 8, ["form-data"])
          ])
        ]),
        _: 1
      }, 8, ["title", "headerIcon"]);
    };
  }
});

const useDeliveryNewbornDetailsForm = () => {
  const deliveryNewbornDetailsFormSection = computed(() => {
    return [
      {
        componentType: "dateInputField",
        header: "Date of delivery",
        name: "Date of delivery",
        obsValueType: "value_date",
        grid: { xs: "12", sm: "6" },
        showTodayButton: true
      },
      {
        componentType: "inputField",
        header: "Time of delivery",
        name: "Time of delivery",
        obsValueType: "value_datetime",
        grid: { xs: "12", sm: "6" },
        type: "time"
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Baby general condition at birth",
        header: "Baby general condition at birth",
        obsValueType: "value_coded",
        options: [
          {
            label: "Live full term",
            value: "Live full term"
          },
          {
            label: "Live pre-term",
            value: "Live pre-term"
          },
          {
            label: "Macerated stillbirth",
            value: "Macerated stillbirth"
          },
          {
            label: "Fresh stillbirth",
            value: "Fresh stillbirth"
          },
          {
            label: "Neonatal Death",
            value: "Neonatal Death"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Number of babies",
        header: "Number of babies",
        obsValueType: "value_numeric",
        condition: (formValues) => {
          return formValues["Date of delivery"] && (formValues["Baby general condition at birth"] == "Live pre-term" || formValues["Baby general condition at birth"] == "Live full term");
        },
        grid: { xs: "12", sm: "6" }
      }
    ];
  });
  return {
    deliveryNewbornDetailsFormSection
  };
};

const _hoisted_1$3 = { class: "container" };
const _hoisted_2$1 = {
  key: 0,
  class: "baby-list-container"
};
const _hoisted_3 = { class: "divider" };
const _hoisted_4 = { class: "baby-cards-grid" };
const _hoisted_5 = {
  key: 0,
  class: "baby-details"
};
const _hoisted_6 = {
  key: 0,
  class: "detail-row"
};
const _hoisted_7 = { class: "detail-value" };
const _hoisted_8 = {
  key: 1,
  class: "detail-row"
};
const _hoisted_9 = { class: "detail-value" };
const _hoisted_10 = {
  key: 2,
  class: "detail-row"
};
const _hoisted_11 = { class: "detail-value" };
const _hoisted_12 = {
  key: 3,
  class: "detail-row"
};
const _hoisted_13 = { class: "detail-value" };
const _hoisted_14 = {
  key: 4,
  class: "detail-row"
};
const _hoisted_15 = { class: "detail-value" };
const _hoisted_16 = {
  key: 5,
  class: "detail-row"
};
const _hoisted_17 = { class: "detail-value" };
const _hoisted_18 = {
  key: 1,
  class: "no-data"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DeliveryNewbornDetails",
  setup(__props, { expose: __expose }) {
    const deliveryNewbornDetailsComposable = useDeliveryNewbornDetailsForm();
    const demographicsStore = useDemographicsStore();
    const formRef = ref(null);
    const { patient } = storeToRefs(demographicsStore);
    const deliveryDetailsNewbornDetailsForm = computed(() => {
      return deliveryNewbornDetailsComposable.deliveryNewbornDetailsFormSection.value;
    });
    const formValues = computed(() => {
      return formRef.value?.getFormValues();
    });
    const babies = ref([]);
    watch(
      () => formValues.value?.["Number of babies"],
      (newCount) => {
        const count = newCount ? parseInt(newCount) : 0;
        console.log("🚀 ~ Number of babies changed:", count);
        if (count > babies.value.length) {
          const toAdd = count - babies.value.length;
          babies.value.push(...Array.from({ length: toAdd }, () => ({})));
        } else if (count < babies.value.length) {
          babies.value = babies.value.slice(0, count);
        }
        console.log("🚀 ~ Babies array:", babies.value);
      },
      { immediate: true }
    );
    const getBabyPersonInfo = (baby) => {
      return baby?.personInformation || baby;
    };
    const getBabyName = (baby) => {
      const info = getBabyPersonInfo(baby);
      const parts = [info.given_name, info.middle_name, info.family_name].filter(Boolean);
      return parts.join(" ");
    };
    const getBabyGender = (baby) => {
      const info = getBabyPersonInfo(baby);
      return info.gender === "M" ? "Male" : info.gender === "F" ? "Female" : "";
    };
    const getBabyBirthdate = (baby) => {
      const info = getBabyPersonInfo(baby);
      return info.birthdate || "";
    };
    const getBabyID = (baby) => {
      return baby?.ID || "";
    };
    const getBabyDistrict = (baby) => {
      const info = getBabyPersonInfo(baby);
      return info.home_district || info.current_district || "";
    };
    const getBabyVillage = (baby) => {
      const info = getBabyPersonInfo(baby);
      return info.home_village || info.current_village || "";
    };
    const hasBabyData = (baby) => {
      if (!baby || Object.keys(baby).length === 0) return false;
      const info = getBabyPersonInfo(baby);
      return !!(info.given_name || info.family_name || baby.ID || info.gender || info.birthdate);
    };
    const formatDate = (dateString) => {
      if (!dateString) return "Not specified";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    };
    const openBabyModal = async (index) => {
      const babyData = await createModal(
        _sfc_main$4,
        { class: "large-medium-width-modal" },
        true,
        {
          babyIndex: index,
          baby: babies.value[index],
          deliveryDate: formValues.value["Date of delivery"]
        }
      );
      if (babyData?.saved === false) return;
      if (babyData) {
        babies.value[index] = babyData;
      }
    };
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (babies.value.length <= 0) return;
      for (let i = 0; i < babies.value.length; ++i) {
        if (!babies.value[i]) return;
        await RelationshipService.createRelationship(babies.value[i], patient.value, 32);
        await savePatientRecord(babies.value[i], true);
      }
      if (Object.keys(data || {}).length > 0) {
        const success = await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit);
        if (success) {
          toastSuccess("Delivery Newborn details saved successfully");
        }
      }
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => ({
        ...formRef.value?.getFormValues(),
        babies: babies.value
      }),
      resetForm: () => {
        formRef.value?.resetForm();
        babies.value = [];
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": deliveryDetailsNewbornDetailsForm.value
                }, null, 8, ["form-data"]),
                babies.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(unref(IonLabel), { class: "section-title" }, {
                      default: withCtx(() => [..._cache[0] || (_cache[0] = [
                        createTextVNode("Baby Details", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(babies.value, (baby, index) => {
                      return openBlock(), createBlock(unref(IonCard), {
                        key: index,
                        class: normalizeClass(["baby-card", { "has-data": hasBabyData(baby) }])
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonCardHeader), null, {
                            default: withCtx(() => [
                              createVNode(unref(IonCardTitle), { class: "baby-title" }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonIcon), {
                                    icon: unref(personOutline),
                                    class: "baby-icon"
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" Baby " + toDisplayString(index + 1), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(IonCardContent), { class: "baby-content" }, {
                            default: withCtx(() => [
                              hasBabyData(baby) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                getBabyName(baby) ? (openBlock(), createElementBlock("div", _hoisted_6, [
                                  _cache[1] || (_cache[1] = createBaseVNode("span", { class: "detail-label" }, "Name:", -1)),
                                  createBaseVNode("span", _hoisted_7, toDisplayString(getBabyName(baby)), 1)
                                ])) : createCommentVNode("", true),
                                getBabyGender(baby) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                  _cache[2] || (_cache[2] = createBaseVNode("span", { class: "detail-label" }, "Gender:", -1)),
                                  createBaseVNode("span", _hoisted_9, toDisplayString(getBabyGender(baby)), 1)
                                ])) : createCommentVNode("", true),
                                getBabyBirthdate(baby) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                  _cache[3] || (_cache[3] = createBaseVNode("span", { class: "detail-label" }, "Birth Date:", -1)),
                                  createBaseVNode("span", _hoisted_11, toDisplayString(formatDate(getBabyBirthdate(baby))), 1)
                                ])) : createCommentVNode("", true),
                                getBabyID(baby) ? (openBlock(), createElementBlock("div", _hoisted_12, [
                                  _cache[4] || (_cache[4] = createBaseVNode("span", { class: "detail-label" }, "ID:", -1)),
                                  createBaseVNode("span", _hoisted_13, toDisplayString(getBabyID(baby)), 1)
                                ])) : createCommentVNode("", true),
                                getBabyDistrict(baby) ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                  _cache[5] || (_cache[5] = createBaseVNode("span", { class: "detail-label" }, "District:", -1)),
                                  createBaseVNode("span", _hoisted_15, toDisplayString(getBabyDistrict(baby)), 1)
                                ])) : createCommentVNode("", true),
                                getBabyVillage(baby) ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                  _cache[6] || (_cache[6] = createBaseVNode("span", { class: "detail-label" }, "Village:", -1)),
                                  createBaseVNode("span", _hoisted_17, toDisplayString(getBabyVillage(baby)), 1)
                                ])) : createCommentVNode("", true)
                              ])) : (openBlock(), createElementBlock("div", _hoisted_18, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(alertCircleOutline),
                                  class: "no-data-icon"
                                }, null, 8, ["icon"]),
                                createVNode(unref(IonText), { class: "no-data-text" }, {
                                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                                    createTextVNode("No details captured", -1)
                                  ])]),
                                  _: 1
                                })
                              ])),
                              createVNode(unref(IonButton), {
                                expand: "block",
                                fill: hasBabyData(baby) ? "outline" : "solid",
                                onClick: ($event) => openBabyModal(index),
                                class: "action-button",
                                color: hasBabyData(baby) ? "primary" : "primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IonIcon), {
                                    icon: hasBabyData(baby) ? unref(createOutline) : unref(addOutline),
                                    slot: "start"
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" " + toDisplayString(hasBabyData(baby) ? "Edit Details" : "Add Details"), 1)
                                ]),
                                _: 2
                              }, 1032, ["fill", "onClick", "color"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
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

const DeliveryNewbornDetails = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b7799235"]]);

const useOtherDeliveryDetailsForm = () => {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const otherDeliveryDetailsFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Place of delivery",
        name: "Place of delivery",
        obsValueType: "value_coded",
        options: [
          { label: "This facility", value: "This facility" },
          { label: "Home", value: "Home" },
          { label: "In transit", value: "In transit" },
          { label: "Other facility", value: " Other facility" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify other facility",
        name: "Specify other facility",
        placeholder: "Search for facility",
        openDirection: "auto",
        obsValueType: "value_text",
        options: facilityList.value.facilities || facilityList.value,
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Place of delivery"] === " Other facility";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Mode of delivery",
        name: "Mode of delivery",
        obsValueType: "value_coded",
        options: [
          { label: "Spontaneous vertex delivery", value: "Spontaneous vertex delivery" },
          { label: "Vacuum extraction delivery", value: "Vacuum extraction delivery" },
          { label: "Breech (BR)", value: "Breech (BR)" },
          { label: "Caesarean section", value: "Caesarean section" },
          { label: "Other mode of delivery", value: "Other mode of delivery" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify other mode of delivery",
        name: "Specify other mode of delivery",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Mode of delivery"] == "Other mode of delivery";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Staff conducting delivery",
        name: "Staff conducting delivery",
        obsValueType: "value_coded",
        options: [
          { label: "Skilled health worker (Nurse midwife/ community midwife)", value: "Skilled health worker (Nurse midwife/ community midwife)" },
          { label: "Unskilled (Patient attendant/ ward attendant)", value: "Unskilled (Patient attendant/ ward attendant)" },
          { label: "Traditional birth attendant (TBA)", value: "Traditional birth attendant (TBA)" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Estimated blood loss",
        name: "Estimated blood loss",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      //Obstetric complications
      {
        componentType: "radioButtonField",
        header: "Obstetric complications",
        name: "Obstetric complications",
        obsValueType: "value_coded",
        options: [
          { label: "None", value: "None" },
          { label: "Postpartum haemorrhage", value: "Postpartum haemorrhage" },
          { label: "Pre-Eclampsia", value: "Pre-Eclampsia" },
          { label: "Eclampsia", value: "Eclampsia" },
          { label: "Sepsis", value: "Sepsis" },
          { label: "Retained placenta", value: "Retained placenta" },
          { label: "Perineal tear (2nd, 3rd or 4th degree)", value: "Perineal tear (2nd, 3rd or 4th degree)" },
          { label: "Other", value: "Other" }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify other complications",
        name: "Specify other complications",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Obstetric complications"] == "Other";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Obstetric care provided",
        name: "Obstetric care provided",
        type: "multiple",
        obsValueType: "value_coded",
        condition: (formValues) => {
          return formValues["Obstetric complications"] != "None" && formValues["Obstetric complications"].length > 0;
        },
        options: [
          { label: "None", value: "None" },
          { label: "Suturing", value: "Suturing" },
          { label: "Oxytocin/cabitocin", value: "Oxytocin/cabitocin" },
          { label: "Tranexamic acid", value: "Tranexamic acid" },
          { label: "Anticonvulsants", value: "Anticonvulsants" },
          { label: "Antibiotics", value: "Antibiotics" },
          { label: "Misoprostol", value: "Misoprostol" },
          { label: "Manual removal of placenta (MRP)", value: "Manual removal of placenta (MRP)" },
          { label: "Non-pneumatic Anti-shock Garment (NASG)", value: "Non-pneumatic Anti-shock Garment (NASG)" },
          { label: "Evacuation", value: "Evacuation" },
          { label: "Other", value: "Other" }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      //Evacuation
      // IV fluids
      {
        componentType: "Heading",
        position: "left",
        name: "IV Fluids",
        condition: (formValues) => {
          return formValues["Obstetric care provided"]?.includes("Evacuation");
        }
      },
      {
        componentType: "radioButtonField",
        header: "IV Fluids",
        name: "IV Fluids",
        obsValueType: "value_coded",
        condition: (formValues) => {
          return formValues["Obstetric care provided"]?.includes("Evacuation");
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "dateInputField",
        header: "Date IV fluids were started",
        name: "Date IV fluids were started",
        obsValueType: "value_date",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["IV Fluids"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time started",
        name: "Time started",
        obsValueType: "value_datetime",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["IV Fluids"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time finished",
        name: "Time finished",
        obsValueType: "value_datetime",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["IV Fluids"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Type of fluids",
        name: "Type of fluids",
        obsValueType: "value_coded",
        grid: { xs: "12" },
        condition: (formValues) => {
          return formValues["IV Fluids"] === "Yes";
        },
        options: [
          { label: "Normal Saline", value: "Normal Saline" },
          { label: "Ringers Lactate", value: "Ringers Lactate" },
          { label: "Glucose", value: "Glucose" },
          { label: "Haemacel", value: "Haemacel" },
          { label: "Other, specify", value: "Other, specify" }
        ]
      },
      {
        componentType: "inputField",
        header: "Specify other type of fluids",
        name: "Specify other type of fluids",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Type of fluids"] === "Other, specify";
        }
      },
      // Blood transfusion
      {
        componentType: "Heading",
        position: "left",
        name: "Blood transfusion",
        condition: (formValues) => {
          return formValues["Obstetric care provided"]?.includes("Evacuation");
        }
      },
      {
        componentType: "radioButtonField",
        header: "Blood transfusion",
        name: "Blood transfusion",
        obsValueType: "value_coded",
        condition: (formValues) => {
          return formValues["Obstetric care provided"]?.includes("Evacuation");
        },
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ]
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "dateInputField",
        header: "Date of Transfusion",
        name: "Date of Transfusion",
        obsValueType: "value_date",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time transfusion started",
        name: "Time transfusion started",
        obsValueType: "value_datetime",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "timeInputField",
        header: "Time transfusion finished",
        name: "Time transfusion finished",
        obsValueType: "value_datetime",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Type of Blood",
        name: "Type of Blood",
        obsValueType: "value_coded",
        grid: { xs: "12" },
        condition: (formValues) => {
          return formValues["Blood transfusion"] === "Yes";
        },
        options: [
          { label: "Whole Blood", value: "Whole Blood" },
          { label: "Packed Red Blood Cells", value: "Packed Red Blood Cells" },
          { label: "Plasma", value: "Plasma" },
          { label: "Platelets", value: "Platelets" }
        ]
      },
      {
        componentType: "inputField",
        header: "Volume (mls)",
        name: "Volume (mls)",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Blood transfusion"] === "Yes";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Other evacuations",
        name: "Other evacuations",
        obsValueType: "value_text",
        condition: (formValues) => {
          return formValues["Obstetric care provided"]?.includes("Evacuation");
        },
        grid: { xs: "12", sm: "6" }
      }
    ];
  });
  return {
    otherDeliveryDetailsFormSection
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OtherDeliveryDetails",
  setup(__props, { expose: __expose }) {
    const otherDeliveryDetailsComposable = useOtherDeliveryDetailsForm();
    const formRef = ref(null);
    const deliveryDetailsNewbornDetailsForm = computed(() => {
      return otherDeliveryDetailsComposable.otherDeliveryDetailsFormSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit)) toastSuccess("Other delivery details data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": deliveryDetailsNewbornDetailsForm.value
                }, null, 8, ["form-data"])
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

const OtherDeliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a9c28153"]]);

const _hoisted_1$1 = { slot: "content" };
const _hoisted_2 = { slot: "content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SecondStageDelivery",
  setup(__props, { expose: __expose }) {
    const deliveryNewbornDetailsRef = ref(null);
    const otherDeliveryDetailsRef = ref(null);
    onMounted(() => {
    });
    const onSubmit = async () => {
      if (deliveryNewbornDetailsRef.value) {
        await deliveryNewbornDetailsRef.value.onSubmit();
      }
      if (otherDeliveryDetailsRef.value) {
        await otherDeliveryDetailsRef.value.onSubmit();
      }
      return true;
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_item = resolveComponent("ion-item");
      const _component_ion_accordion = resolveComponent("ion-accordion");
      const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
      return openBlock(), createBlock(_component_ion_accordion_group, null, {
        default: withCtx(() => [
          createVNode(_component_ion_accordion, { value: "delivery-newborn" }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, { slot: "header" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, null, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Delivery Newborn Details", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(DeliveryNewbornDetails, {
                  ref_key: "deliveryNewbornDetailsRef",
                  ref: deliveryNewbornDetailsRef
                }, null, 512)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_ion_accordion, { value: "other-delivery" }, {
            default: withCtx(() => [
              createVNode(_component_ion_item, { slot: "header" }, {
                default: withCtx(() => [
                  createVNode(_component_ion_label, null, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("Other Delivery Details", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_2, [
                createVNode(OtherDeliveryDetails, {
                  ref_key: "otherDeliveryDetailsRef",
                  ref: otherDeliveryDetailsRef
                }, null, 512)
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

const SecondStageDelivery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-328cc242"]]);

const useThirdStageDeliveryForm = () => {
  const { facilityList, getFacilities } = useLocation();
  getFacilities();
  const thirdStageDeliveryFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        position: "left",
        name: "Placenta Examination"
      },
      {
        componentType: "radioButtonField",
        header: "Oxytocin 10 IU given",
        name: "Oxytocin 10 IU given",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Misoprostol (400/600mcg orally)",
        name: "Misoprostol (400/600mcg orally)",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Heat stable Cabitocin (100mcg IM/IV)",
        name: "Heat stable Cabitocin (100mcg IM/IV)",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Ellavi drape used",
        name: "Ellavi drape used",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "Heading",
        position: "left",
        name: "Date and time of placenta delivery"
      },
      {
        componentType: "dateInputField",
        header: "Date of delivery",
        name: "Date of delivery",
        obsValueType: "value_date",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "timeInputField",
        header: "Time of delivery",
        name: "Time of delivery",
        obsValueType: "value_datetime",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        header: "Delivery done by",
        name: "Staff conducting delivery",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        header: "Cadre",
        name: "Cadre",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Mode of delivery",
        header: "Mode of delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "Controlled cord traction",
            value: "Controlled cord traction"
          },
          {
            label: "Manual removal",
            value: "Manual removal"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Other mode of delivery",
        header: "Specify other mode of delivery",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Mode of delivery"] == "Other";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Place of delivery",
        name: "Place of delivery",
        obsValueType: "value_coded",
        options: [
          { label: "This facility", value: "This facility" },
          { label: "Home", value: "Home" },
          { label: "In transit", value: "In transit" },
          { label: "Other facility", value: " Other facility" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Specify other facility",
        name: "Other facility",
        placeholder: "Search for facility",
        openDirection: "auto",
        obsValueType: "value_text",
        options: facilityList.value.facilities || facilityList.value,
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Place of delivery"] === " Other facility";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Placenta",
        header: "Placenta",
        obsValueType: "value_coded",
        options: [
          { label: "Complete", value: "Complete" },
          { label: "Incomplete", value: "Incomplete" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Membranes",
        header: "Membranes",
        obsValueType: "value_coded",
        options: [
          { label: "Complete", value: "Complete" },
          { label: "Incomplete", value: "Incomplete" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "Heading",
        position: "left",
        name: "Placenta Weight and length"
      },
      {
        componentType: "inputField",
        name: "Placenta weight",
        header: "Placenta",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        name: "Placenta length",
        header: "Placenta length",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Cord length",
        header: "Cord length",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Cord insertion",
        header: "Cord insertion",
        obsValueType: "value_coded",
        options: [
          { label: "Central", value: "Central" },
          { label: "Lateral", value: "Lateral" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        name: "Specify other cord insertion",
        header: "Specify other cord insertion",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Cord insertion"] == "Other";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Number of vessels",
        header: "Number of vessels",
        obsValueType: "value_numeric",
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Placenta condition",
        header: "Placenta condition",
        obsValueType: "value_coded",
        options: [
          { label: "Healthy", value: "Healthy" },
          { label: "Unhealthy", value: "Unhealthy" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Placenta Abnormalities",
        header: "Placenta abnormalities",
        obsValueType: "value_text",
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        name: "Estimated blood loss",
        header: "Estimated blood loss",
        obsValueType: "value_numeric",
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Cervix",
        header: "Cervix",
        obsValueType: "value_coded",
        options: [
          { label: "Intact", value: "Intact" },
          { label: "Tears", value: "Tears" },
          { label: "Lacerations", value: "Lacerations" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Perineum",
        header: "Perineum",
        obsValueType: "value_coded",
        options: [
          { label: "Intact", value: "Intact" },
          { label: "Tears", value: "Tears" },
          { label: "Episiotomy", value: "Episiotomy" },
          { label: "Lacerations", value: "Lacerations" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12" }
      },
      {
        componentType: "inputField",
        name: "Other perineum condition",
        header: "Specify other perineum",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" },
        condition: (formValues) => {
          return formValues["Perineum"] == "Other";
        }
      },
      {
        componentType: "radioButtonField",
        name: "Degree of tear",
        header: "Degree of tear",
        obsValueType: "value_coded",
        options: [
          { label: "First degree", value: "First degree" },
          { label: "Second degree", value: "Second degree" },
          { label: "Third degree", value: "Third degree" },
          { label: "Fourth degree", value: "Fourth degree" }
        ],
        grid: { xs: "12" },
        condition: (formValues) => {
          return formValues["Perineum"] == "Tears";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        name: "Repair done for Tears/Episiotomy",
        header: "Repair done for Tears/ Episiotomy",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12" },
        condition: (formValues) => {
          return formValues["Perineum"] === "Tears" || formValues["Perineum"] === "Episiotomy";
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  return {
    thirdStageDeliveryFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThirdStageDelivery",
  setup(__props, { expose: __expose }) {
    const thirdStageDeliveryComposable = useThirdStageDeliveryForm();
    const formRef = ref(null);
    const thirdStageDeliveryForm = computed(() => {
      return thirdStageDeliveryComposable.thirdStageDeliveryFormSection.value;
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit)) toastSuccess("Third stage delivery data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": thirdStageDeliveryForm.value
                }, null, 8, ["form-data"])
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

const ThirdStageDelivery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3b0150e"]]);

export { SecondStageDelivery as S, ThirdStageDelivery as T };
