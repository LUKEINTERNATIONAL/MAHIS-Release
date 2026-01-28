import { c as computed, s as defineComponent, w as watch, y as openBlock, O as createBlock, F as unref, bF as IonModal, B as withCtx, A as createVNode, a_ as personOutline, C as createBaseVNode, H as createCommentVNode, f as ref, x as resolveComponent, z as createElementBlock, bc as IonCardContent, a5 as createTextVNode, J as Fragment, R as renderList, D as toDisplayString, bK as IonCard, a2 as onMounted } from './vendor-BIA1Qh8a.js';
import { q as StandardModal, z as StandardForm, F as DynamicButton, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc } from '../index-Di5vEYU2.js';
import { u as useLocation } from './useLocation-BhGvGcen.js';

const useNewbornDetailsForm = () => {
  const newbornDetailsFormSection = computed(() => {
    return [
      {
        componentType: "inputField",
        header: "First name",
        name: "First name",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        header: "Last name",
        name: "Last name",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Newborn sex",
        name: "Newborn sex",
        obsValueType: "value_coded",
        options: [
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
          { label: "Ambiguous genitalia", value: "Ambiguous genitalia" }
        ],
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "radioButtonField",
        header: "Delayed cord cutting? (1-3 minutes)",
        name: "Delayed cord cutting? (1-3 minutes)",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "APGAR score at 1 minute",
        name: "APGAR score at 1 minute",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "inputField",
        header: "APGAR score at 5 minutes",
        name: "APGAR score at 5 minutes",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
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
        name: "Head circumference (cm)",
        obsValueType: "value_numeric",
        grid: { xs: "12", sm: "4" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
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
        componentType: "Dashes",
        grid: { s: "12" }
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
          { label: "None", value: "None" },
          { label: "Prematurity", value: "Prematurity" },
          { label: "Sepsis", value: "Sepsis" },
          { label: "Congenital abnormalities", value: "Congenital abnormalities" },
          { label: "Asphyxia", value: "Asphyxia" },
          { label: "Low birthweight", value: "Low birthweight" },
          { label: "Nursery", value: "Nursery" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      // Conditional: Specify Congenital Abnormalities
      {
        componentType: "inputField",
        header: "Specify Congenital Abnormalities",
        name: "Specify Congenital Abnormalities",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "12" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Congenital abnormalities");
        }
      },
      // Conditional: Asphyxia -> Resuscitation
      {
        componentType: "radioButtonField",
        header: "Was resuscitation attempted?",
        name: "Was resuscitation attempted?",
        obsValueType: "value_coded",
        options: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        grid: { xs: "12", sm: "12" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Asphyxia");
        }
      },
      // Conditional: Type of Resuscitation
      {
        componentType: "radioButtonField",
        header: "Type of resuscitation?",
        name: "Type of resuscitation?",
        obsValueType: "value_coded",
        options: [
          { label: "Drying only", value: "Drying only" },
          { label: "Clearing airway", value: "Clearing airway" },
          { label: "Bag and mask", value: "Bag and mask" }
        ],
        grid: { xs: "12", sm: "12" },
        condition: (formValues) => {
          return formValues["Resuscitation attempt"] == "Yes";
        }
      },
      // Conditional: Other Notes
      {
        componentType: "inputField",
        header: "Other complications notes",
        name: "Other complications notes",
        obsValueType: "value_text",
        grid: { xs: "12", sm: "12" },
        condition: (formValues) => {
          return formValues["Newborn baby complications"]?.includes("Other");
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
          { label: "None", value: "None" },
          { label: "Routine newborn care", value: "Routine newborn care" },
          { label: "Kangaroo mother care", value: "Kangaroo mother care" },
          { label: "Antibiotics", value: "Antibiotics" },
          { label: "Resuscitation", value: "Resuscitation" },
          { label: "Photo Therapy", value: "Photo Therapy" },
          { label: "Other", value: "Other" }
        ],
        grid: { xs: "12", sm: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
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
        componentType: "Dashes",
        grid: { s: "12" }
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
    isOpen: { type: Boolean },
    babyIndex: {},
    initialData: {}
  },
  emits: ["close", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { newbornDetailsFormSection } = useNewbornDetailsForm();
    const formFields = computed(() => newbornDetailsFormSection.value);
    const localFormData = ref({});
    const formRef = ref(null);
    watch(
      () => props.isOpen,
      (newVal) => {
        if (newVal) {
          localFormData.value = { ...props.initialData };
        }
      }
    );
    const handleFormUpdate = (values) => {
      localFormData.value = { ...localFormData.value, ...values };
    };
    const onSave = async () => {
      formRef.value?.validateForm();
      if (Object.keys(localFormData.value).length === 0) {
        toastWarning("Please fill in the baby details before saving.");
        return;
      }
      const success = await ObservationService.buildSaveObs(
        localFormData.value,
        EncounterTypeId.Labour_and_delivery_visit
      );
      if (success) {
        toastSuccess(`Baby ${props.babyIndex + 1} details saved successfully`);
        emit("save", localFormData.value);
        emit("close");
      }
    };
    const onClose = () => {
      emit("close");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonModal), {
        "is-open": __props.isOpen,
        onDidDismiss: onClose,
        class: "baby-modal"
      }, {
        default: withCtx(() => [
          createVNode(StandardModal, {
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
                __props.isOpen ? (openBlock(), createBlock(StandardForm, {
                  key: 0,
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": formFields.value,
                  "initial-data": localFormData.value,
                  "onUpdate:formValues": handleFormUpdate
                }, null, 8, ["form-data", "initial-data"])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["title", "headerIcon"])
        ]),
        _: 1
      }, 8, ["is-open"]);
    };
  }
});

const BabyDetailsModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-862f7b7b"]]);

const useDeliveryNewbornDetailsForm = () => {
  const deliveryNewbornDetailsFormSection = computed(() => {
    return [
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
          return formValues["Baby general condition at birth"] == "Live pre-term" || formValues["Baby general condition at birth"] == "Live full term";
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
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DeliveryNewbornDetails",
  setup(__props, { expose: __expose }) {
    const deliveryNewbornDetailsComposable = useDeliveryNewbornDetailsForm();
    const formRef = ref(null);
    const babies = ref([]);
    const isModalOpen = ref(false);
    const currentBabyIndex = ref(0);
    const mainFormValues = ref({});
    const selectedBabyData = ref({});
    const deliveryDetailsNewbornDetailsForm = computed(() => {
      return deliveryNewbornDetailsComposable.deliveryNewbornDetailsFormSection.value;
    });
    const handleMainFormUpdate = (values) => {
      mainFormValues.value = values;
      const countVal = values["Number of babies"];
      const count = countVal ? parseInt(countVal) : 0;
      updateBabiesList(count);
    };
    const updateBabiesList = (count) => {
      if (isNaN(count) || count < 0) return;
      if (count > babies.value.length) {
        const itemsToAdd = count - babies.value.length;
        for (let i = 0; i < itemsToAdd; i++) {
          babies.value.push({ isFilled: false });
        }
      } else if (count < babies.value.length) {
        babies.value = babies.value.slice(0, count);
      }
    };
    const getBabyDisplayName = (baby, index) => {
      if (baby["First name"] || baby["Last name"]) {
        return `${baby["First name"] || ""} ${baby["Last name"] || ""}`.trim();
      }
      return `Baby ${index + 1}`;
    };
    const openBabyModal = (index) => {
      currentBabyIndex.value = index;
      selectedBabyData.value = { ...babies.value[index] };
      isModalOpen.value = true;
    };
    const handleSaveBaby = (updatedData) => {
      const index = currentBabyIndex.value;
      if (babies.value[index]) {
        babies.value[index] = {
          ...updatedData.value,
          isFilled: true
        };
      }
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length > 0) {
        const success = await ObservationService.buildSaveObs(data, EncounterTypeId.Labour_and_delivery_visit);
        if (success) {
          toastSuccess("Delivery Newborn details saved successfully");
        }
      }
      formRef.value?.resetForm();
      babies.value = [];
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm(),
      getFormValues: () => formRef.value?.getFormValues(),
      resetForm: () => formRef.value?.resetForm()
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_button = resolveComponent("ion-button");
      const _component_ion_item = resolveComponent("ion-item");
      const _component_ion_list = resolveComponent("ion-list");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(unref(IonCard), { class: "section" }, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": deliveryDetailsNewbornDetailsForm.value,
                  "onUpdate:formValues": handleMainFormUpdate
                }, null, 8, ["form-data"]),
                babies.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_ion_label, null, {
                      default: withCtx(() => [..._cache[0] || (_cache[0] = [
                        createTextVNode("Baby Details", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_ion_list, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(babies.value, (baby, index) => {
                        return openBlock(), createBlock(_component_ion_item, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_ion_label, null, {
                              default: withCtx(() => [
                                createBaseVNode("h2", null, toDisplayString(getBabyDisplayName(baby, index)), 1),
                                baby.isFilled ? (openBlock(), createElementBlock("p", _hoisted_4, "Details captured")) : (openBlock(), createElementBlock("p", _hoisted_5, "No details captured"))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ion_button, {
                              slot: "end",
                              fill: baby.isFilled ? "outline" : "solid",
                              onClick: ($event) => openBabyModal(index)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(baby.isFilled ? "Edit Details" : "Add Details"), 1)
                              ]),
                              _: 2
                            }, 1032, ["fill", "onClick"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
        createVNode(BabyDetailsModal, {
          "is-open": isModalOpen.value,
          "baby-index": currentBabyIndex.value,
          "initial-data": selectedBabyData.value,
          onClose: closeModal,
          onSave: handleSaveBaby
        }, null, 8, ["is-open", "baby-index", "initial-data"])
      ]);
    };
  }
});

const DeliveryNewbornDetails = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6462f4d4"]]);

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
        name: "Delivery done by",
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
        name: "Specify other mode of delivery",
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
        header: "Placenta weight",
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
        name: "Abnormalities",
        header: "Abnormalities",
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
        name: "Specify other perineum",
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
        name: "Repair done for Tears/ Episiotomy",
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
