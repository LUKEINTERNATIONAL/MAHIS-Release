import { bX as getAgeInDays, n as icons, r as StandardModal, z as StandardForm, F as DynamicButton, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, _ as _export_sfc, C as useExposeFromStandardForm, a1 as modifyFieldValue, a2 as getFieldValue, u as useDemographicsStore } from '../index-jHLvXTOz.js';
import { c as computed, ey as create$3, ez as create$5, eA as create$6, s as defineComponent, w as watch, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, a$ as personOutline, C as createBaseVNode, H as createCommentVNode, bF as IonModal, f as ref, x as resolveComponent, z as createElementBlock, a5 as createTextVNode, J as Fragment, R as renderList, D as toDisplayString, a2 as onMounted } from './vendor-6OQ3r7Vr.js';
import { d as defineStore, s as storeToRefs } from './pinia-BATJJgGh.js';
import { l as lodashExports } from './lodash-CuxQuz9v.js';

const nameRegex = /^[\p{L}\p{M}\s'’-]+$/u;
const isWithin42Days = (deliveryDate) => {
  if (!deliveryDate) {
    return true;
  }
  return getAgeInDays(deliveryDate) <= 42;
};
create$3().shape({
  "First name": create$6().max(50, "First Name cannot be longer than 50 characters").matches(nameRegex, "First Name can only contain letters, spaces, apostrophes, and hyphens").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required("First Name is required") : schema.notRequired();
  }),
  "Last name": create$6().max(50, "Name cannot be longer than 50 characters").matches(nameRegex, "Last Name can only contain letters, spaces, apostrophes, and hyphens").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required("Last Name is required") : schema.notRequired();
  }),
  "Apgar score at 1 minute": create$5().typeError("Apgar score at 1 minute can only be a number").label("Apgar score at 1 minute"),
  "Apgar score at 5 minute": create$5().typeError("Apgar score at 5 minute can only be a number").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Apgar score at 5 minute"),
  Weight: create$5().typeError("Weight can only be a number").min(2500).when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Weight"),
  Height: create$5().typeError("Height can only be a number").min(500).when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Height"),
  Circumference: create$5().typeError("Circimference can only be a number").when("Date of delivery", (deliveryDate, schema) => {
    return isWithin42Days(deliveryDate) ? schema.required() : schema.notRequired();
  }).label("Circumference")
});
const useDeliveryDetailsForm = () => {
  const isDeliveryBeyond42Days = (allFormValues) => {
    const deliveryDate = allFormValues?.["Date of delivery"];
    if (!deliveryDate) {
      return false;
    }
    return getAgeInDays(deliveryDate) > 42;
  };
  const isBabyCaptureAllowed = (allFormValues) => {
    return !isDeliveryBeyond42Days(allFormValues);
  };
  const deliveryDetailsFormSection = computed(() => {
    return [
      {
        componentType: "dateInputField",
        header: "Date of delivery",
        name: "Date of delivery",
        icon: icons.calendar,
        obsValueType: "value_date",
        grid: { s: "6" }
      },
      {
        componentType: "timeInputField",
        header: "Time of delivery",
        name: "Time of delivery",
        icon: icons.time,
        obsValueType: "value_text",
        grid: { s: "6" }
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
          {
            label: "Spontaneous Vertex Delivery",
            value: "Spontaneous vertex delivery"
          },
          {
            label: "Vacuum extraction delivery",
            value: "Vacuum extraction delivery"
          },
          {
            label: "Breech delivery",
            value: "Breech delivery"
          },
          {
            label: "Caesarean section",
            value: "Caesarean section"
          },
          {
            label: "Other mode of delivery",
            value: "Other mode of delivery"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other mode of delivery notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Mode of delivery"] === "Other mode of delivery";
        },
        grid: { s: "12" }
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
          {
            label: "This facility",
            value: "this facility"
          },
          {
            label: "In transit",
            value: "in transit"
          },
          {
            label: "Other facility",
            value: "other facility"
          },
          {
            label: "Home or TBA",
            value: "home/tba"
          }
        ],
        grid: { s: "12" }
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
          {
            label: "MD/CO/MA/Nurse midwife/CMA",
            value: "md/co/ma/nurse midwife/cma"
          },
          {
            label: "PA/WA/HSA/None",
            value: "pa/wa/hsa/other/none"
          },
          {
            label: "Skilled Birth Attendant",
            value: "skilled birth attendant"
          },
          {
            label: "Unskilled Birth Attendant",
            value: "unskilled birth attendant"
          },
          {
            label: "Other",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Other staff conducting delivery",
        name: "otherStaff",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Staff conducting delivery"] === "other";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "What was the outcome of the delivery?",
        name: "Outcome of the delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "Live births",
            value: "Live births"
          },
          {
            label: "Neonatal death",
            value: "Neonatal death"
          },
          {
            label: "Stillbirths",
            value: "Stillbirths"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Type of still birth?",
        name: "Type of still birth",
        obsValueType: "value_coded",
        options: [
          {
            label: "Macerated still birth",
            value: "macerated still birth"
          },
          {
            label: "Fresh still birth",
            value: "fresh still birth"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Outcome of the delivery"] === "Stillbirths";
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Total number of babies",
        name: "Number of babies",
        obsValueType: "value_numeric",
        type: "number",
        validation: (value, allFormValues) => {
          if (allFormValues["Outcome of the delivery"] !== "Live births") {
            return null;
          }
          if (value === null || value === void 0 || value === "") {
            return "Required";
          }
          const parsedValue = Number(value);
          if (!Number.isInteger(parsedValue)) {
            return "Enter a whole number";
          }
          if (parsedValue < 1 || parsedValue > 20) {
            return "Enter a number between 1 and 20";
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["Outcome of the delivery"] === "Live births";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      }
    ];
  });
  const babyDetailsFormSection = computed(() => {
    return [
      {
        componentType: "inputField",
        header: "First name",
        name: "First name",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Last name",
        name: "Last name",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        }
      },
      {
        componentType: "inputField",
        header: "Baby weight",
        name: "Weight",
        obsValueType: "value_numeric",
        unit: "grams",
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Baby height",
        name: "Height",
        obsValueType: "value_numeric",
        unit: "cm",
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Head circumference",
        name: "Circumference",
        obsValueType: "value_numeric",
        unit: "cm",
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        }
      },
      {
        componentType: "inputField",
        header: "APGAR score at 5 minute",
        name: "Apgar score at 5 minute",
        obsValueType: "value_numeric",
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        }
      },
      {
        componentType: "checkboxField",
        header: "Any Newborn complications?",
        name: "Newborn baby complications",
        obsValueType: "value_coded",
        type: "multiple",
        onChange: (value) => {
          const selected = Array.isArray(value) ? value : [];
          if (selected.includes("none") && selected.length > 1) {
            return { "Newborn baby complications": ["none"] };
          }
          return null;
        },
        options: [
          {
            label: "None",
            value: "none",
            exclusive: true
          },
          {
            label: "Prematurity",
            value: "prematurity"
          },
          {
            label: "Asphyxia",
            value: "Asphyxia"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Congenital abnormalities",
            value: "Congenital abnormalities"
          },
          {
            label: "Low birthweight",
            value: "Low birthweight"
          },
          {
            label: "Other complications",
            value: "Other complications"
          }
        ],
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Other complications specify",
        name: "Other complications specify",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          if (!isBabyCaptureAllowed(allFormValues)) {
            return false;
          }
          return allFormValues["Newborn baby complications"]?.includes("Other complications");
        },
        validation: (value, allFormValues) => {
          if (allFormValues["Newborn baby complications"]?.includes("Other complications")) {
            return value ? null : "Required";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Was resuscitation attempted?",
        name: "Resuscitation attempt",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues) && allFormValues["Newborn baby complications"]?.includes("Asphyxia");
        },
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Type of resuscitation?",
        name: "Type of resuscitation",
        obsValueType: "value_coded",
        options: [
          {
            label: "Drying only",
            value: "Drying only"
          },
          {
            label: "Clearing airway",
            value: "Clearing airway"
          },
          {
            label: "Bag and mask",
            value: "Bag and mask"
          }
        ],
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues) && allFormValues["Newborn baby complications"]?.includes("Asphyxia") && allFormValues["Resuscitation attempt"] === "Yes";
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "For how long (in minutes)",
        name: "Resuscitation duration (minutes)",
        obsValueType: "value_numeric",
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues) && allFormValues["Newborn baby complications"]?.includes("Asphyxia") && allFormValues["Resuscitation attempt"] === "Yes";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return isBabyCaptureAllowed(allFormValues);
        }
      }
    ];
  });
  return {
    deliveryDetailsFormSection,
    babyDetailsFormSection
  };
};

const _hoisted_1$3 = { class: "ion-padding" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
    const { babyDetailsFormSection } = useDeliveryDetailsForm();
    const formFields = computed(() => babyDetailsFormSection.value);
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
      const success = await ObservationService.buildSaveObs(localFormData.value, EncounterTypeId.Counseling);
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
              createBaseVNode("div", _hoisted_1$3, [
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

const BabyDetailsModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5af40362"]]);

const babyDetails = [
  {
    sideColSize: 1,
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "First name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "First name",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Last name",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Last name",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "Baby weight",
              unit: "grams",
              icon: icons.weight,
              valueType: "text",
              value: "",
              name: "Weight",
              required: true,
              eventType: "input",
              placeholder: ""
            },
            {
              inputHeader: "Baby height",
              unit: "cm",
              icon: icons.height,
              value: "",
              valueType: "text",
              name: "Height",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: false,
              inputHeader: "APGAR score at 5 minute",
              unit: "",
              icon: icons.editPen,
              valueType: "text",
              value: "",
              name: "Apgar score at 5 minute",
              required: true,
              eventType: "input",
              placeholder: ""
            }
          ]
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Baby general condition at birth",
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "Any Newborn complications?",
        selectedValue: "",
        class: "bold",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "None",
          value: "none",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Prematurity",
          value: "prematurity",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Sepsis",
          value: "sepsis",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Congenital abnormalities",
          value: "Congenital abnormalities",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    selectdData: [],
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: false
      },
      data: [
        {
          name: "Asphyxia",
          value: "Asphyxia",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        },
        {
          name: "Low birthweight",
          value: "Low birthweight",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Asphyxia",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Was resuscitation attempted?",
        selectedValue: "",
        name: "Resuscitation attempt",
        class: "bold",
        displayNext: "Yes",
        displayNone: true
      },
      data: [
        {
          name: "Yes",
          value: "Yes",
          colSize: "2.5"
        },
        {
          name: "No",
          value: "No",
          colSize: "2.5"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    childName: "Resuscitation attempt",
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Type of resuscitation?",
        selectedValue: "",
        displayNone: true,
        class: "bold",
        name: "Type of resuscitation"
      },
      data: [
        {
          name: "Drying only",
          value: "Drying only",
          colSize: "7"
        },
        {
          name: "Clearing airway",
          value: "Clearing airway",
          colSize: "7"
        },
        {
          name: "Bag and mask",
          value: "Bag and mask",
          colSize: "7"
        }
      ]
    }
  },
  {
    sideColSize: 1,
    classDash: "dashed_bottom_border _padding",
    childName: "Baby general condition at birth",
    checkboxBtnContent: {
      header: {
        title: "",
        selectedValue: "",
        name: "Newborn baby complications",
        displayNone: true
      },
      data: [
        {
          name: "Other complications",
          value: "Other complications",
          checked: false,
          labelPlacement: "start",
          colSize: "6",
          justify: "space-between"
        }
      ]
    }
  }
];
create$3().shape({
  "First name": create$6().required("First Name is required").max(50, "First Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Last name": create$6().required("first name is required").max(50, "Name cannot be longer than 50 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),
  "Apgar score at 1 minute": create$5().typeError("Apgar score at 1 minute can only be a number").required("Apgar score at 1 minute is required").label("Apgar score at 1 minute"),
  "Apgar score at 5 minute": create$5().typeError("Apgar score at 5 minute can only be a number").required().label("Apgar score at 5 minute"),
  Weight: create$5().typeError("Weight can only be a number").min(2500).required().label("Weight"),
  Height: create$5().typeError("Height can only be a number").min(500).required().label("Height"),
  Circumference: create$5().typeError("Circimference can only be a number").required().label("Circumference")
});
const initialDeliveryDetails = [
  {
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Date of delivery*",
              value: "",
              name: "Date of delivery",
              icon: icons.calenderPrimary,
              required: true,
              valueType: "text",
              eventType: "input",
              isDatePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick date"
            },
            {
              inputHeader: "Time of delivery*",
              value: "",
              name: "Time of delivery",
              icon: icons.timePicker,
              required: true,
              valueType: "text",
              eventType: "input",
              isTimePopover: true,
              alertsErrorMassage: "",
              placeholder: "Pick time"
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Mode of delivery*",
        selectedValue: "",
        class: "bold",
        name: "Mode of delivery",
        displayNext: "Other mode of delivery"
      },
      data: [
        {
          name: "Spontaneous Vertex Delivery",
          value: "Spontaneous vertex delivery",
          colSize: "5"
        },
        {
          name: "Vacuum extraction delivery",
          value: "Vacuum extraction delivery",
          colSize: "5"
        },
        {
          name: "Breech delivery",
          value: "Breech delivery",
          colSize: "5"
        },
        {
          name: "Caesarean section",
          value: "Caesarean section",
          colSize: "5"
        },
        {
          name: "Other mode of delivery",
          value: "Other mode of delivery",
          colSize: "5"
        }
      ]
    }
  },
  {
    childName: "Mode of delivery",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Specify",
              unit: "",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Other mode of delivery notes",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Place of delivery*",
        selectedValue: "",
        name: "Place of delivery",
        class: "bold"
      },
      data: [
        {
          name: "This facility",
          value: "this facility",
          colSize: "5"
        },
        {
          name: "In transit",
          value: "in transit",
          colSize: "5"
        },
        {
          name: "Other facility",
          value: "other facility",
          colSize: "5"
        },
        {
          name: "Home or TBA",
          value: "home/tba",
          colSize: "5"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Staff conducting delivery*",
        selectedValue: "",
        class: "bold",
        name: "Staff conducting delivery",
        displayNext: "other"
      },
      data: [
        {
          name: "MD/CO/MA/Nurse midwife/CMA",
          value: "md/co/ma/nurse midwife/cma",
          colSize: "7"
        },
        {
          name: "PA/WA/HSA/None",
          value: "pa/wa/hsa/other/none",
          colSize: "7"
        },
        {
          name: "Other",
          value: "other",
          colSize: "7"
        }
      ]
    }
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    childName: "Staff conducting delivery",
    classDash: "",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Other staff conducting delivery",
              value: "",
              name: "otherStaff",
              icon: icons.editPen,
              required: true,
              valueType: "text",
              eventType: "input",
              placeholder: "Enter staff name",
              alertsErrorMassage: "Please specify the staff name",
              showField: false
            }
          ]
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "What was the outcome of the delivery?*",
        selectedValue: "",
        class: "bold",
        name: "Outcome of the delivery",
        displayNext: "Live births"
      },
      data: [
        {
          name: "Live births",
          value: "Live births",
          colSize: "7"
        },
        {
          name: "Neonatal death",
          value: "Neonatal death",
          colSize: "7"
        },
        {
          name: "Stillbirths",
          value: "Stillbirths",
          colSize: "7"
        }
      ]
    }
  },
  {
    selectdData: [],
    isFinishBtn: false,
    classDash: "dashed_bottom_border _padding",
    radioBtnContent: {
      header: {
        title: "Type of still birth?*",
        selectedValue: "",
        class: "bold",
        name: "Type of still birth",
        displayNone: true
      },
      data: [
        {
          name: "Macerated still birth",
          value: "macerated still birth",
          colSize: "7"
        },
        {
          name: "Fresh still birth",
          value: "fresh still birth",
          colSize: "7"
        }
      ]
    }
  },
  {
    childName: "Outcome of the delivery",
    isFinishBtn: false,
    sectionHeader: "",
    classDash: "dashed_bottom_border _padding",
    data: {
      rowData: [
        {
          colData: [
            {
              displayNone: true,
              inputHeader: "Total number of babies*",
              unit: "baby",
              icon: icons.editPen,
              value: "",
              valueType: "text",
              name: "Number of babies",
              required: true,
              eventType: "input",
              inputWidth: ""
            }
          ]
        }
      ]
    }
  }
];
const useDeliveryDetailsStore = defineStore("deliveryDetailsStore", {
  state: () => ({
    deliveryDetails: [...initialDeliveryDetails],
    babyDetails: [...lodashExports.cloneDeep(babyDetails)]
  }),
  actions: {
    setDeliveryDetails(data) {
      this.deliveryDetails = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialDeliveryDetails);
      return [...data];
    },
    setBabyDetails(details = babyDetails) {
      this.babyDetails = [...lodashExports.cloneDeep(details)];
    }
  }
  //
});

const _hoisted_1$2 = { class: "container" };
const _hoisted_2 = {
  key: 0,
  class: "baby-list-container"
};
const _hoisted_3 = { class: "divider" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DeliveryDetails",
  setup(__props, { expose: __expose }) {
    const { deliveryDetailsFormSection } = useDeliveryDetailsForm();
    const { formRef } = useExposeFromStandardForm();
    const deliveryDetailsStore = useDeliveryDetailsStore();
    const babies = ref([]);
    const isModalOpen = ref(false);
    const currentBabyIndex = ref(0);
    const selectedBabyData = ref({});
    const isBabyCaptureAllowed = (values) => {
      const deliveryDate = values?.["Date of delivery"];
      if (!deliveryDate) {
        return true;
      }
      return getAgeInDays(deliveryDate) <= 42;
    };
    const handleMainFormUpdate = (values) => {
      const outcome = values["Outcome of the delivery"];
      const countVal = values["Number of babies"];
      const count = countVal ? parseInt(countVal, 10) : 0;
      if (deliveryDetailsStore?.deliveryDetails) {
        if (values["Date of delivery"] !== void 0) {
          modifyFieldValue(deliveryDetailsStore.deliveryDetails, "Date of delivery", "value", values["Date of delivery"]);
        }
        if (values["Number of babies"] !== void 0) {
          modifyFieldValue(deliveryDetailsStore.deliveryDetails, "Number of babies", "value", values["Number of babies"]);
        }
      }
      if (outcome !== "Live births" || !isBabyCaptureAllowed(values)) {
        babies.value = [];
        return;
      }
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
          ...updatedData,
          isFilled: true
        };
      }
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
      babies.value = [];
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_button = resolveComponent("ion-button");
      const _component_ion_item = resolveComponent("ion-item");
      const _component_ion_list = resolveComponent("ion-list");
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(deliveryDetailsFormSection),
                  "onUpdate:formValues": handleMainFormUpdate
                }, null, 8, ["form-data"]),
                babies.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
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

const DeliveryDetails = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8ffad9b7"]]);

const useHIVStatusAndTreatmentForm = () => {
  const deliveryDetailsStore = useDeliveryDetailsStore();
  const hivStatusAndTreatmentFormSection = computed(() => {
    const isMotherUnknown = (allFormValues) => allFormValues["Mother HIV Status"] === "unknown";
    const isMotherPositive = (allFormValues) => allFormValues["Mother HIV Status"] === "positive";
    const isNewHivPositive = (allFormValues) => allFormValues["New HIV status"] === "Positive";
    const isMotherHivPositivePath = (allFormValues) => isMotherPositive(allFormValues) || isNewHivPositive(allFormValues);
    const isArtInitiated = (allFormValues) => isMotherPositive(allFormValues) && allFormValues["ART treatment"] === "yes" || isNewHivPositive(allFormValues) && allFormValues["Has the woman started ART treatment"] === "Yes";
    const isBabySectionAllowed = (allFormValues) => {
      const deliveryDetails = deliveryDetailsStore.deliveryDetails;
      const babyCountValue = allFormValues["Number of babies"] ?? getFieldValue(deliveryDetails, "Number of babies", "value");
      const babyCount = Number(babyCountValue);
      if (!Number.isFinite(babyCount) || babyCount <= 0) {
        return false;
      }
      const deliveryDate = allFormValues["Date of delivery"] ?? getFieldValue(deliveryDetails, "Date of delivery", "value");
      if (deliveryDate && getAgeInDays(deliveryDate) > 42) {
        return false;
      }
      return true;
    };
    return [
      {
        componentType: "radioButtonField",
        header: "HIV status of woman*",
        name: "Mother HIV Status",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "positive"
          },
          {
            label: "Negative",
            value: "negative"
          },
          {
            label: "Unknown",
            value: "unknown"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Is the woman started on ART",
        name: "ART treatment",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ],
        condition: (allFormValues) => {
          return isMotherPositive(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "ART Clinic number",
        name: "ART Number",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return isMotherPositive(allFormValues) && allFormValues["ART treatment"] === "yes";
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "New HIV test result in postnatal*",
        name: "New HIV status",
        obsValueType: "value_coded",
        options: [
          {
            label: "Positive",
            value: "Positive"
          },
          {
            label: "Negative",
            value: "Negative"
          },
          {
            label: "HIV test not done",
            value: "HIV test not done"
          }
        ],
        condition: (allFormValues) => {
          return isMotherUnknown(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Reason (if HIV test not done)",
        name: "HIV test not done reason",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["New HIV status"] === "HIV test not done";
        },
        validation: (value, allFormValues) => {
          if (allFormValues["New HIV status"] === "HIV test not done") {
            return value ? null : "Required";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Has the woman started ART treatment?*",
        name: "Has the woman started ART treatment",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ],
        condition: (allFormValues) => {
          return isNewHivPositive(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "ART clinic number*",
        name: "ART clinic registration number",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return isNewHivPositive(allFormValues) && allFormValues["Has the woman started ART treatment"] === "Yes";
        },
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "ART regimen",
        name: "ART regimen",
        obsValueType: "value_coded",
        options: [
          { label: "TDF/3TC/DTG", value: "tdf/3tc/dtg" },
          { label: "TDF/3TC/EFV", value: "tdf/3tc/efv" },
          { label: "Other", value: "other" }
        ],
        condition: (allFormValues) => {
          return isArtInitiated(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify regimen",
        name: "ART regimen specify",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return isArtInitiated(allFormValues) && allFormValues["ART regimen"] === "other";
        },
        validation: (value, allFormValues) => {
          if (isArtInitiated(allFormValues) && allFormValues["ART regimen"] === "other") {
            return value ? null : "Required";
          }
          return null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "dateInputField",
        header: "Next visit date",
        name: "Next visit date",
        obsValueType: "value_date",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Baby HIV prophylaxis type",
        name: "Baby prophylaxis type",
        obsValueType: "value_coded",
        options: [
          { label: "NVP (low risk)", value: "nvp" },
          { label: "2P (3TC/AZT/NVP) (high risk)", value: "2p" }
        ],
        condition: (allFormValues) => {
          return isBabySectionAllowed(allFormValues) && isMotherHivPositivePath(allFormValues);
        },
        grid: { s: "12" }
      },
      {
        componentType: "dateInputField",
        header: "Date baby initiated on Nevirapine / 2P",
        name: "Baby prophylaxis start date",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return isBabySectionAllowed(allFormValues) && isMotherHivPositivePath(allFormValues);
        },
        grid: { s: "12" }
      }
    ];
  });
  return {
    hivStatusAndTreatmentFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HIVStatusAndTreatment",
  setup(__props, { expose: __expose }) {
    const { hivStatusAndTreatmentFormSection } = useHIVStatusAndTreatmentForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(hivStatusAndTreatmentFormSection)
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

const useObstetricDetailsForm = () => {
  const obstetricDetailsFormSection = computed(() => {
    return [
      {
        componentType: "inputField",
        header: "Gravida",
        name: "Gravida",
        obsValueType: "value_text",
        type: "number",
        validation: (value) => {
          if (value === null || value === void 0 || value === "") {
            return null;
          }
          const parsedValue = Number(value);
          return Number.isInteger(parsedValue) && parsedValue >= 0 ? null : "Enter a whole number (0 or greater)";
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Parity",
        name: "Parity",
        obsValueType: "value_numeric",
        type: "number",
        validation: (value) => {
          if (value === null || value === void 0 || value === "") {
            return null;
          }
          const parsedValue = Number(value);
          return Number.isInteger(parsedValue) && parsedValue >= 0 ? null : "Enter a whole number (0 or greater)";
        },
        grid: { s: "6" }
      },
      {
        componentType: "radioButtonField",
        header: "Place of delivery",
        name: "Place of delivery",
        obsValueType: "value_coded",
        options: [
          {
            label: "This facility",
            value: "this facility"
          },
          {
            label: "In Transit (TR)",
            value: "in transit (tr)"
          },
          {
            label: "Other Facility",
            value: "other facility"
          },
          {
            label: "Home/TBA",
            value: "home/tba"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Past modes of delivery",
        name: "Past modes of delivery",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Spontaneous Vertex Delivery (SVD)",
            value: "SVD"
          },
          {
            label: "Vacuum extraction delivery",
            value: "Vacuum extraction delivery"
          },
          {
            label: "Breech (BR)",
            value: "Breech delivery"
          },
          {
            label: "Caesarean Section (CS)",
            value: "Caesarean section"
          },
          {
            label: "Other (Specify)",
            value: "Other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Past modes of delivery other specify",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Past modes of delivery"]?.includes("other");
        },
        validation: (value, allFormValues) => {
          return allFormValues["Past modes of delivery"]?.includes("other") && !value ? "Required" : null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Any past pregnancy problems",
        name: "Past pregnancy problems",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "None",
            value: "None"
          },
          {
            label: "Cord prolapse",
            value: "cord prolapse"
          },
          {
            label: "Asphyxia",
            value: "Asphyxia"
          },
          {
            label: "Antepartum haemorrhage",
            value: "antepartum haemorrhage"
          },
          {
            label: "Pre-eclampsia",
            value: "Pre-eclampsia"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Retained placenta",
            value: "retained placenta"
          },
          {
            label: "Perineal tear",
            value: "perineal tear"
          },
          {
            label: "Postpartum haemorrhage",
            value: "postpartum haemorrhage"
          },
          {
            label: "Obstructed or prolonged labour",
            value: "Obstructed or prolonged labour"
          },
          {
            label: "Premature labour",
            value: "premature labour"
          },
          {
            label: "Placenta previa",
            value: "placenta previa"
          },
          {
            label: "Severe anaemia",
            value: "severe anaemia"
          },
          {
            label: "Placenta abruption",
            value: "placenta abruption"
          },
          {
            label: "Fetal distress",
            value: "fetal distress"
          },
          {
            label: "Eclampsia",
            value: "eclampsia"
          },
          {
            label: "Haemorrhage",
            value: "haemorrhage"
          },
          {
            label: "Ruptured uterus",
            value: "Ruptured uterus"
          },
          {
            label: "Symphysiotomy",
            value: "symphysiotomy"
          },
          {
            label: "Other problems",
            value: "Other problems"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other problems notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Past pregnancy problems"]?.includes("Other problems");
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Maternal conditions",
        name: "Maternal conditions",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Antepartum haemorrhage",
            value: "antepartum haemorrhage"
          },
          {
            label: "Postpartum haemorrhage",
            value: "postpartum haemorrhage"
          },
          {
            label: "Ruptured uterus",
            value: "ruptured uterus"
          },
          {
            label: "Obstructed/prolonged labour",
            value: "obstructed/prolonged labour"
          },
          {
            label: "Eclampsia",
            value: "eclampsia"
          },
          {
            label: "Pre-eclampsia",
            value: "pre-eclampsia"
          },
          {
            label: "Perineal tear (2nd/3rd/4th degree)",
            value: "perineal tear (2nd/3rd/4th degree)"
          },
          {
            label: "Premature labour",
            value: "premature labour"
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Severe anaemia",
            value: "severe anaemia"
          },
          {
            label: "Other (Specify)",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "maternal_other_specify",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Maternal conditions"]?.includes("other");
        },
        validation: (value, allFormValues) => {
          return allFormValues["Maternal conditions"]?.includes("other") && !value ? "Required" : null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Fetal conditions",
        name: "Fetal conditions",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Fetal distress",
            value: "fetal distress"
          },
          {
            label: "Intrauterine Growth Restriction",
            value: "intrauterine growth restriction"
          },
          {
            label: "Other (Specify)",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "fetal_other_specify",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Fetal conditions"]?.includes("other");
        },
        validation: (value, allFormValues) => {
          return allFormValues["Fetal conditions"]?.includes("other") && !value ? "Required" : null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Placenta conditions",
        name: "Placenta conditions",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "Retained placenta",
            value: "retained placenta"
          },
          {
            label: "Placenta previa",
            value: "placenta previa"
          },
          {
            label: "Placenta abruption",
            value: "placenta abruption"
          },
          {
            label: "Other (Specify)",
            value: "other"
          }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "placenta_other_specify",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Placenta conditions"]?.includes("other");
        },
        validation: (value, allFormValues) => {
          return allFormValues["Placenta conditions"]?.includes("other") && !value ? "Required" : null;
        },
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "radioButtonField",
        header: "Cord prolapse",
        name: "Cord prolapse",
        obsValueType: "value_coded",
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ],
        grid: { s: "12" }
      }
    ];
  });
  return {
    obstetricDetailsFormSection
  };
};

const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ObstetricDetails",
  setup(__props, { expose: __expose }) {
    const { obstetricDetailsFormSection } = useObstetricDetailsForm();
    const { formRef } = useExposeFromStandardForm();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const fetchAndPrefillObstetricDetails = async () => {
      if (!formRef.value) return;
      if (!patient.value?.patientID) return;
      const allObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.OBSTETRIC_HISTORY);
      const parityObs = getObsValueByConceptName(allObs, "Parity");
      const modeOfDeliveryObs = getObsValueByConceptName(allObs, "Mode of Delivery");
      const selections = Array.from(new Set(allObs.map((o) => normalizeDeliveryModeValue(o.value_text)).filter((v) => v && v !== "")));
      const pastPregnanciesProblemObs = getObsValueByConceptName(allObs, "past pregnancies complications");
      if (parityObs) {
        formRef.value.setFormValue("Parity", String(parityObs, 10));
      }
      if (modeOfDeliveryObs) {
        formRef.value.setFormValue("Past modes of delivery", selections);
      }
      if (pastPregnanciesProblemObs) {
        if (pastPregnanciesProblemObs.includes("Other")) {
          const otherProblem = getObsValueByConceptName(allObs, "Other complications notes");
          formRef.value.setFormValue("Past pregnancy problems", pastPregnanciesProblemObs);
          formRef.value.setFormValue("Other complications notes", otherProblem ? otherProblem[0] : "");
        }
        formRef.value.setFormValue("Past pregnancy problems", pastPregnanciesProblemObs);
      }
    };
    const getObsValueByConceptName = (obsArray, conceptName) => {
      const obs = obsArray.filter((o) => o.concept_name.toLowerCase() === conceptName.toLowerCase());
      if (obs.length === 0) return null;
      return obs.map((o) => o.value_text || o.value_numeric).filter((v) => v !== null && v !== void 0);
    };
    const normalizeDeliveryModeValue = (value) => {
      const val = String(value).toLowerCase();
      if (val === "svd") return "Spontaneous Vertex Delivery (SVD)";
      if (val === "vacuum extraction delivery") return "Vacuum extraction delivery";
      if (val === "breech delivery") return "Breech (BR)";
      if (val === "caesarean section") return "Caesarean Section";
      if (val === "other") return "Other";
      return val;
    };
    watch(
      () => patient.value,
      async (newVal) => {
        if (newVal) {
          await fetchAndPrefillObstetricDetails();
        }
      },
      { immediate: true }
    );
    onMounted(async () => {
      await fetchAndPrefillObstetricDetails();
    });
    const onSubmit = async () => {
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.Counseling)) toastSuccess("Behaviour Counselling data saved successfully");
      formRef.value?.resetForm();
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(obstetricDetailsFormSection)
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

export { DeliveryDetails as D, _sfc_main as _, _sfc_main$1 as a };
