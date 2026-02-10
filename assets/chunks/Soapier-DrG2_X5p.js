import { D as DemographicBar } from './DemographicBar-Ha76Eub2.js';
import { n as icons, y as StandardValidations, T as Toolbar, z as StandardForm, F as DynamicButton } from '../index-BcjCT4MQ.js';
import { c as computed, s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bK as IonCard, C as createBaseVNode, bu as IonPage } from './vendor-74dOmGLc.js';
import { G as GoBack } from './GoBack-CWi3P6AJ.js';
import { u as useBloodPressureForm, a as useTemperaturePulseRateForm, b as useRespiratoryRateOxygenForm } from './useRespiratoryRateOxygenForm-CnRBdQXB.js';

const useNonPharmacologicalForm = () => {
  const nonPharmacologicalFormSection = computed(() => {
    return [
      { grid: { s: "3" } },
      { componentType: "Heading", name: "Procedures", grid: { s: "4" } },
      { grid: { s: "1" } },
      { componentType: "Heading", name: "Supportive Care", grid: { s: "4" } },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Intravenous Cannulation",
        name: "intravenous_cannulation",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Wound Dressing",
        name: "wound_dressing",
        grid: { s: "4" }
      },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Urethral Catheterization",
        name: "urethral_catheterization",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Patient Education",
        name: "patient_education",
        grid: { s: "4" }
      },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Suctioning",
        name: "suctioning",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Counselling",
        name: "counselling",
        grid: { s: "4" }
      },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Oropharyngeal Airway Insertion",
        name: "oropharyngeal_airway_insertion",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Feeding",
        name: "feeding",
        grid: { s: "4" }
      },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Nasopharyngeal Airway Insertion",
        name: "nasopharyngeal_airway_insertion",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Oxygenation",
        name: "oxygenation",
        grid: { s: "4" }
      },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Laryngeal Mask Airway Insertion",
        name: "laryngeal_mask_airway_insertion",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Tepid Sponging",
        name: "tepid_sponging",
        grid: { s: "4" }
      },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Nasogastric Tube Insertion",
        name: "nasogastric_tube_insertion",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Electrocardiography (ECG) Monitoring",
        name: "electrocardiography_monitoring",
        grid: { s: "4" }
      },
      { grid: { s: "3" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Other (Specify)",
        name: "other",
        grid: { s: "4" }
      },
      { grid: { s: "1" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Turning Patients",
        name: "turning_patients",
        grid: { s: "4" }
      },
      { grid: { s: "8" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Oral Care",
        name: "oral_care",
        grid: { s: "4" }
      },
      { grid: { s: "8" } },
      {
        componentType: "checkboxField",
        type: "single",
        label: "Other (Specify)",
        name: "other",
        grid: { s: "4" }
      }
    ];
  });
  return {
    nonPharmacologicalFormSection
  };
};

const usePharmacologicalForm = () => {
  const pharmacologicalFormSection = computed(() => {
    return [
      { grid: { s: "3" } },
      {
        componentType: "multiSelectInputField",
        header: "Medication Name",
        name: "medication_name",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "3" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Dextrose"
          },
          {
            id: 2,
            name: "Epinephrine"
          },
          {
            id: 3,
            name: "Atropine"
          },
          {
            id: 4,
            name: "Amiodarone"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Formulation",
        name: "formulation",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "3" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Solution"
          },
          {
            id: 2,
            name: "Powder"
          },
          {
            id: 3,
            name: "Capsule"
          },
          {
            id: 4,
            name: "Tablet"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Dose",
        name: "dose",
        grid: { s: "3" },
        initialUnit: "Years",
        unitOptions: [
          { label: "Grams (g)", value: "Grams (g)" },
          { label: "Milligrams (mg)", value: "Milligrams (mg)" },
          { label: "Micrograms (mcg)", value: "Micrograms (mcg)" },
          { label: "Units", value: "Units" }
        ],
        unitValidation: (unitValue) => {
          if (!unitValue || unitValue === "") {
            return "Please select a unit.";
          }
          return null;
        }
      },
      { grid: { s: "3" } },
      {
        componentType: "multiSelectInputField",
        header: "Frequency",
        name: "frequency",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "3" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Daily"
          },
          {
            id: 2,
            name: "Twice Daily"
          },
          {
            id: 3,
            name: "Three Times Daily"
          },
          {
            id: 4,
            name: "Four Times Daily"
          }
        ]
      },
      {
        componentType: "inputField",
        header: "Duration",
        name: "duration ",
        grid: { s: "3" },
        initialUnit: "hours",
        unitOptions: [
          { label: "Hours", value: "hours" },
          { label: "Days", value: "days" },
          { label: "Weeks", value: "weeks" },
          { label: "Months", value: "months" },
          { label: "Years", value: "years" }
        ],
        unitValidation: (unitValue) => {
          if (!unitValue || unitValue === "") {
            return "Please select a unit.";
          }
          return null;
        }
      },
      {
        componentType: "multiSelectInputField",
        header: "Route",
        name: "route",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "3" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Oral"
          },
          {
            id: 2,
            name: "IV"
          },
          {
            id: 3,
            name: "IM"
          },
          {
            id: 4,
            name: "Subcutaneous"
          }
        ]
      }
    ];
  });
  return {
    pharmacologicalFormSection
  };
};

const bloodPressureForm = useBloodPressureForm();
const temperaturePulseRateForm = useTemperaturePulseRateForm();
const respiratoryRateOxygenForm = useRespiratoryRateOxygenForm();
const vitalsForm = computed(() => {
  const mergedForm = [
    // Add separator between sections
    { grid: { s: "3" } },
    // Blood Pressure sections
    ...bloodPressureForm.bloodPressureFormSection.value,
    // Add separator between sections
    { grid: { s: "3" } },
    // Temperature and Pulse Rate sections
    ...temperaturePulseRateForm.temperaturePulseRateForm.value,
    // Respiratory Rate and Oxygen sections
    ...respiratoryRateOxygenForm.respiratoryRateOxygenForm.value
  ];
  return mergedForm.filter((item) => item.componentType?.toLowerCase() !== "heading");
});
const nonPharmacologicalForm = useNonPharmacologicalForm().nonPharmacologicalFormSection.value;
const pharmacologicalForm = usePharmacologicalForm().pharmacologicalFormSection.value;
const soapierForm = () => {
  const soapierFormSection = computed(() => {
    return [
      { componentType: "Heading", name: "Subjective", grid: { s: "3" } },
      {
        header: "Subjective",
        name: "subjective",
        validation: StandardValidations.required,
        componentType: "textAreaField",
        grid: { s: "9" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Objective", grid: { s: "3" } },
      {
        header: "Objective",
        name: "objective",
        validation: StandardValidations.required,
        componentType: "textAreaField",
        grid: { s: "9" }
      },
      ...vitalsForm.value,
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Assessment", grid: { s: "3" } },
      {
        header: "Assessment",
        name: "assessment",
        validation: StandardValidations.required,
        componentType: "textAreaField",
        grid: { s: "9" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Plan", grid: { s: "3" } },
      {
        header: "Plan",
        name: "plan",
        validation: StandardValidations.required,
        componentType: "textAreaField",
        grid: { s: "9" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Intervention", grid: { s: "3" } },
      { componentType: "Heading", name: "Non-pharmacological management", grid: { s: "9" } },
      ...nonPharmacologicalForm,
      { grid: { s: "3" } },
      { componentType: "Heading", name: "Pharmacological management", grid: { s: "9" } },
      ...pharmacologicalForm,
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Evaluation", grid: { s: "3" } },
      {
        header: "Evaluation",
        name: "evaluation",
        validation: StandardValidations.required,
        componentType: "textAreaField",
        grid: { s: "9" }
      },
      { componentType: "Dashes" },
      { componentType: "Heading", name: "Replan", grid: { s: "3" } },
      {
        header: "Replan",
        name: "replan",
        validation: StandardValidations.required,
        componentType: "textAreaField",
        grid: { s: "9" }
      }
    ];
  });
  return {
    soapierFormSection
  };
};

const _hoisted_1 = { class: "ion-float-right ion-padding" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Soapier",
  setup(__props) {
    const formData = soapierForm().soapierFormSection;
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
              createVNode(unref(IonCard), { style: { "max-width": "80vw", "margin": "0 auto", "margin-top": "10px" } }, {
                default: withCtx(() => [
                  createVNode(StandardForm, { formData: unref(formData) }, null, 8, ["formData"]),
                  createBaseVNode("div", _hoisted_1, [
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
      });
    };
  }
});

export { _sfc_main as default };
