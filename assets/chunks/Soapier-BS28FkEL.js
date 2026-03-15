import { c as computed, s as defineComponent, f as ref, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bL as IonCard, bd as IonCardContent, C as createBaseVNode, z as createElementBlock, J as Fragment, S as renderList, H as createCommentVNode, bv as IonPage } from './vendor-BRtiyW5a.js';
import { D as DemographicBar } from './DemographicBar-B2ed09xZ.js';
import { y as StandardValidations, n as icons, T as Toolbar, z as StandardForm, F as DynamicButton, _ as _export_sfc } from '../index-B84uTAGq.js';
import { G as GoBack } from './GoBack-BYtNaGdE.js';

const requiredText = (label) => (value) => {
  return StandardValidations.required(value, label);
};
const rangeValidation = (label, min, max, required = true) => {
  return (value) => {
    if (value === void 0 || value === null || value === "") {
      return required ? `${label} is required` : null;
    }
    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) {
      return `${label} must be a number`;
    }
    if (numericValue < min || numericValue > max) {
      return `${label} must be between ${min} and ${max}`;
    }
    return null;
  };
};
const soapierForm = () => {
  const soapierFormSection = computed(() => {
    return [
      { componentType: "Heading", name: "Subjective", grid: { s: "12" } },
      {
        header: "Subjective",
        name: "subjective",
        componentType: "textAreaField",
        validation: requiredText("Subjective"),
        grid: { s: "12" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Objective", grid: { s: "12" } },
      {
        header: "Objective",
        name: "objective",
        componentType: "textAreaField",
        validation: requiredText("Objective"),
        grid: { s: "12" }
      },
      { componentType: "Heading", name: "Vital Signs", grid: { s: "12" } },
      {
        componentType: "inputField",
        header: "SPO2",
        name: "spo2",
        type: "number",
        unit: "%",
        validation: rangeValidation("SPO2", 0, 100, true),
        grid: { s: "12", m: "4" }
      },
      {
        componentType: "inputField",
        header: "Systolic",
        name: "systolic",
        type: "number",
        unit: "mmHg",
        validation: rangeValidation("Systolic", 0, 300, true),
        grid: { s: "12", m: "4" }
      },
      {
        componentType: "inputField",
        header: "Diastolic",
        name: "diastolic",
        type: "number",
        unit: "mmHg",
        validation: rangeValidation("Diastolic", 0, 300, true),
        grid: { s: "12", m: "4" }
      },
      {
        componentType: "inputField",
        header: "Respiratory Rate",
        name: "respiratory_rate",
        type: "number",
        unit: "BPM",
        validation: rangeValidation("Respiratory Rate", 0, 90, true),
        grid: { s: "12", m: "4" }
      },
      {
        componentType: "inputField",
        header: "Pulse Rate",
        name: "pulse_rate",
        type: "number",
        unit: "BPM",
        grid: { s: "12", m: "4" }
      },
      {
        componentType: "inputField",
        header: "Temperature",
        name: "temperature",
        type: "number",
        unit: "°C",
        validation: rangeValidation("Temperature", 20, 45, true),
        grid: { s: "12", m: "4" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Assessment", grid: { s: "12" } },
      {
        header: "Assessment",
        name: "assessment",
        componentType: "textAreaField",
        validation: requiredText("Assessment"),
        grid: { s: "12" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Plan", grid: { s: "12" } },
      {
        header: "Plan",
        name: "plan",
        componentType: "textAreaField",
        validation: requiredText("Plan"),
        grid: { s: "12" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Evaluation", grid: { s: "12" } },
      {
        header: "Evaluation",
        name: "evaluation",
        componentType: "textAreaField",
        validation: requiredText("Evaluation"),
        grid: { s: "12" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Replan", grid: { s: "12" } },
      {
        header: "Replan",
        name: "replan",
        componentType: "textAreaField",
        validation: requiredText("Replan"),
        grid: { s: "12" }
      }
    ];
  });
  return {
    soapierFormSection
  };
};

const _hoisted_1 = { class: "section-block" };
const _hoisted_2 = { class: "section-block" };
const _hoisted_3 = { class: "medications-list" };
const _hoisted_4 = { class: "medication-actions" };
const _hoisted_5 = { class: "ion-float-right ion-padding" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Soapier",
  setup(__props) {
    const { soapierFormSection } = soapierForm();
    const nonPharmRef = ref(null);
    const proceduresOptions = [
      { id: "INTRAVENOUS_CANNULATION", name: "Intravenous Cannulation" },
      { id: "CATHETERIZATION_URETHRAL", name: "Urethral Catheterization" },
      { id: "SUCTIONING", name: "Suctioning" },
      { id: "OROPHARYNGEAL_AIRWAY_INSERTION", name: "Oropharyngeal Airway Insertion" },
      { id: "NASOPHARYNGEAL_AIRWAY_INSERTION", name: "Nasopharyngeal Airway Insertion" },
      { id: "LARYNGEAL_MASK_AIRWAY_INSERTION", name: "Laryngeal Mask Airway Insertion" },
      { id: "NASOGASTRIC_TUBE_INSERTION", name: "Nasogastric Tube Insertion" },
      { id: "OTHER", name: "Other (Specify)" }
    ];
    const supportiveCareOptions = [
      { id: "WOUND_DRESSING", name: "Wound Dressing" },
      { id: "PATIENT_EDUCATION", name: "Patient Education" },
      { id: "COUNSELLING", name: "Counselling" },
      { id: "FEEDING", name: "Feeding" },
      { id: "OXYGENATION", name: "Oxygenation" },
      { id: "TEPID_SPONGING", name: "Tepid Sponging" },
      { id: "ELECTROCARDIOGRAPHY_MONITORING", name: "Electrocardiography (ECG) Monitoring" },
      { id: "TURNING_PATIENTS", name: "Turning Patients" },
      { id: "ORAL_CARE", name: "Oral Care" },
      { id: "OTHER", name: "Other (Specify)" }
    ];
    const nonPharmForm = [
      {
        componentType: "multiSelectInputField",
        header: "Procedures",
        name: "procedures",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: proceduresOptions,
        validation: (value) => {
          if (!value || value.length === 0) {
            return "At least one procedure must be selected";
          }
          return null;
        },
        onChange: (value) => {
          const hasOther = Array.isArray(value) && value.some((item) => item?.id === "OTHER");
          if (!hasOther) {
            return { otherProcedureSpecify: "" };
          }
          return null;
        },
        grid: { s: "12", m: "6" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Supportive Care",
        name: "supportiveCare",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: supportiveCareOptions,
        validation: (value) => {
          if (!value || value.length === 0) {
            return "At least one supportive care option must be selected";
          }
          return null;
        },
        onChange: (value) => {
          const hasOther = Array.isArray(value) && value.some((item) => item?.id === "OTHER");
          if (!hasOther) {
            return { otherSupportiveCareSpecify: "" };
          }
          return null;
        },
        grid: { s: "12", m: "6" }
      },
      {
        componentType: "inputField",
        header: "Specify Other Procedure",
        name: "otherProcedureSpecify",
        placeholder: "Specify the procedure",
        validation: (value, allValues) => {
          const selected = allValues?.procedures || [];
          const hasOther = Array.isArray(selected) && selected.some((item) => item?.id === "OTHER");
          if (hasOther && (!value || value === "")) {
            return "Please specify the other procedure";
          }
          return null;
        },
        condition: (values) => {
          const selected = values?.procedures || [];
          return Array.isArray(selected) && selected.some((item) => item?.id === "OTHER");
        },
        grid: { s: "12", m: "6" }
      },
      {
        componentType: "inputField",
        header: "Specify Other Supportive Care",
        name: "otherSupportiveCareSpecify",
        placeholder: "Specify the care",
        validation: (value, allValues) => {
          const selected = allValues?.supportiveCare || [];
          const hasOther = Array.isArray(selected) && selected.some((item) => item?.id === "OTHER");
          if (hasOther && (!value || value === "")) {
            return "Please specify the other supportive care";
          }
          return null;
        },
        condition: (values) => {
          const selected = values?.supportiveCare || [];
          return Array.isArray(selected) && selected.some((item) => item?.id === "OTHER");
        },
        grid: { s: "12", m: "6" }
      }
    ];
    const medicationOptions = [
      "Paracetamol",
      "Ibuprofen",
      "Diclofenac sodium 75mg/ml, 3ml",
      "Diclofenac sodium Slow Release",
      "Diclofenac sodium",
      "Salbutamol",
      "Salbutamol sulphate",
      "Salbutamol solution for nebulising 5mg/ml",
      "Salbutamol sulphate aerosol inhalation, 100mcg/dose, 200 doses",
      "Oxytocin",
      "Dextrose 50%",
      "Aspirin",
      "Prednisolone",
      "Diazepam"
    ].map((name) => ({ id: name, name }));
    const formulationOptions = [
      "Tablet",
      "Vial",
      "Intravenous",
      "Powder",
      "Solution",
      "Eye Ointment",
      "Cream",
      "Eye Drops",
      "Ointment",
      "Inhaler",
      "Suppository",
      "Pessary",
      "Suspension",
      "Shampoo",
      "Ear Drops",
      "Eye Paste"
    ].map((name) => ({ id: name, name }));
    const frequencyOptions = [
      "STAT",
      "24 Hourly (OD) - Once a day",
      "12 Hourly (BID) - Twice a day",
      "8 Hourly (TID) - Three times a day",
      "6 Hourly (QID) - Four times a day",
      "4 Hourly (OD) - Six times a day",
      "Once a week",
      "Once a month",
      "Other"
    ].map((name) => ({ id: name, name }));
    const medicationUnits = [
      "Milligrams (mg)",
      "Micrograms (µg)",
      "Grams (g)",
      "International Units (IU)",
      "Milliliters (ml)",
      "Millimoles (mmol)"
    ].map((name) => ({ label: name, value: name }));
    const durationOptions = [
      "Hours",
      "Days",
      "Weeks",
      "Months",
      "Years"
    ].map((name) => ({ label: name, value: name }));
    const createMedicationForm = (index) => {
      const nameField = `medications_${index}_name`;
      const formulationField = `medications_${index}_formulation`;
      const doseField = `medications_${index}_dose`;
      const frequencyField = `medications_${index}_frequency`;
      const frequencyOtherField = `medications_${index}_frequency_other`;
      const durationField = `medications_${index}_duration`;
      const routeField = `medications_${index}_route`;
      return [
        {
          componentType: "multiSelectInputField",
          header: "Medication Name",
          name: nameField,
          isMultiple: false,
          trackBy: "id",
          icon: icons.search,
          options: medicationOptions,
          grid: { s: "12", m: "4" }
        },
        {
          componentType: "multiSelectInputField",
          header: "Formulation",
          name: formulationField,
          isMultiple: false,
          trackBy: "id",
          icon: icons.search,
          options: formulationOptions,
          grid: { s: "12", m: "4" }
        },
        {
          componentType: "inputField",
          header: "Dose",
          name: doseField,
          type: "number",
          unitOptions: medicationUnits,
          unitPlaceholder: "Unit",
          unitValidation: (unitValue) => {
            if (!unitValue || unitValue === "") {
              return "Please select a unit.";
            }
            return null;
          },
          grid: { s: "12", m: "4" }
        },
        {
          componentType: "multiSelectInputField",
          header: "Frequency",
          name: frequencyField,
          isMultiple: false,
          trackBy: "id",
          icon: icons.search,
          options: frequencyOptions,
          onChange: (value) => {
            const isOther = value?.name === "Other";
            if (!isOther) {
              return { [frequencyOtherField]: "" };
            }
            return null;
          },
          grid: { s: "12", m: "4" }
        },
        {
          componentType: "inputField",
          header: "Specify frequency",
          name: frequencyOtherField,
          placeholder: "Specify frequency",
          condition: (values) => {
            return values?.[frequencyField]?.name === "Other";
          },
          grid: { s: "12", m: "4" }
        },
        {
          componentType: "inputField",
          header: "Duration",
          name: durationField,
          type: "number",
          unitOptions: durationOptions,
          unitPlaceholder: "Unit",
          unitValidation: (unitValue) => {
            if (!unitValue || unitValue === "") {
              return "Please select a unit.";
            }
            return null;
          },
          condition: (values) => {
            return values?.[frequencyField]?.name !== "STAT";
          },
          grid: { s: "12", m: "4" }
        },
        {
          componentType: "inputField",
          header: "Route",
          name: routeField,
          grid: { s: "12", m: "4" }
        }
      ];
    };
    const medicationEntries = ref([
      { id: 0, form: createMedicationForm(0) }
    ]);
    const nextMedicationId = ref(1);
    const addMedicationEntry = () => {
      const newIndex = nextMedicationId.value;
      medicationEntries.value.push({ id: newIndex, form: createMedicationForm(newIndex) });
      nextMedicationId.value += 1;
    };
    const removeMedicationEntry = (index) => {
      if (medicationEntries.value.length > 1) {
        medicationEntries.value.splice(index, 1);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createVNode(GoBack, {
                title: "SOAPIER",
                url: "/patient-profile",
                name: "Back to Profile"
              }),
              createVNode(unref(IonCard), { class: "soapier-card" }, {
                default: withCtx(() => [
                  createVNode(unref(IonCardContent), null, {
                    default: withCtx(() => [
                      createVNode(StandardForm, { formData: unref(soapierFormSection) }, null, 8, ["formData"]),
                      createBaseVNode("div", _hoisted_1, [
                        _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "section-title" }, "Intervention/Implementation", -1)),
                        _cache[2] || (_cache[2] = createBaseVNode("p", { class: "section-subtitle" }, "Non-pharmacological management", -1)),
                        createVNode(StandardForm, {
                          formData: nonPharmForm,
                          ref_key: "nonPharmRef",
                          ref: nonPharmRef
                        }, null, 512)
                      ]),
                      createBaseVNode("div", _hoisted_2, [
                        _cache[3] || (_cache[3] = createBaseVNode("p", { class: "section-subtitle" }, "Pharmacological management", -1)),
                        createBaseVNode("div", _hoisted_3, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(medicationEntries.value, (entry, index) => {
                            return openBlock(), createElementBlock("div", {
                              key: entry.id,
                              class: "medication-entry"
                            }, [
                              createVNode(StandardForm, {
                                formData: entry.form
                              }, null, 8, ["formData"]),
                              createBaseVNode("div", _hoisted_4, [
                                createVNode(DynamicButton, {
                                  onClick: ($event) => removeMedicationEntry(index),
                                  fill: "clear",
                                  icon: unref(icons).minus,
                                  disabled: medicationEntries.value.length === 1
                                }, null, 8, ["onClick", "icon", "disabled"]),
                                index === medicationEntries.value.length - 1 ? (openBlock(), createBlock(DynamicButton, {
                                  key: 0,
                                  onClick: _cache[0] || (_cache[0] = ($event) => addMedicationEntry()),
                                  fill: "clear",
                                  icon: unref(icons).plus
                                }, null, 8, ["icon"])) : createCommentVNode("", true)
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(DynamicButton, { name: "Submit" })
                      ])
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

const Soapier = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b3a9a57"]]);

export { Soapier as default };
