import { c as computed, s as defineComponent, a2 as onMounted, n as nextTick, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, C as createBaseVNode, bp as V, z as createElementBlock, J as Fragment, R as renderList, D as toDisplayString, f as ref, K as modalController } from './vendor-6OQ3r7Vr.js';
import { n as icons, z as StandardForm, F as DynamicButton, r as StandardModal, t as toastWarning, G as toastSuccess, _ as _export_sfc } from '../index-qrBmo02d.js';
import { u as useBloodPressureForm, a as useTemperaturePulseRateForm, b as useRespiratoryRateOxygenForm } from './useRespiratoryRateOxygenForm-XZ70naFe.js';

const useCprForm = () => {
  const cprFormSection = computed(() => {
    return [
      { componentType: "Dashes" },
      {
        type: "time",
        componentType: "inputField",
        header: "Time of Call",
        name: "time_call"
      },
      {
        componentType: "multiSelectInputField",
        header: "Rhythm",
        name: "rhythm",
        isMultiple: true,
        trackBy: "id",
        grid: { s: "5.5" },
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "PEA"
          },
          {
            id: 2,
            name: "VF"
          },
          {
            id: 3,
            name: "VT"
          },
          {
            id: 4,
            name: "Asys"
          }
        ]
      },
      { grid: { s: "1" } },
      {
        header: "Shock Energy",
        name: "shock_energy",
        componentType: "inputField",
        grid: { s: "5.5" }
      },
      {
        componentType: "multiSelectInputField",
        header: "Medication Name",
        name: "medication_name",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4" },
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
        componentType: "inputField",
        header: "Dose",
        name: "dose",
        grid: { s: "4" },
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
      {
        componentType: "multiSelectInputField",
        header: "Route",
        name: "route",
        isMultiple: false,
        trackBy: "id",
        grid: { s: "4" },
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
      },
      {
        componentType: "multiSelectInputField",
        header: "Interventions",
        name: "interventions",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "ABG"
          },
          {
            id: 2,
            name: "CPR"
          },
          {
            id: 3,
            name: "Defibrillation"
          },
          {
            id: 4,
            name: "Airway Management"
          }
        ]
      },
      {
        header: "Occurrences (E.g., ROSC, Vomit)",
        name: "occurrences",
        componentType: "inputField"
      },
      {
        componentType: "multiSelectInputField",
        header: "Reversible Causes",
        name: "reversible_causes",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Hypoxia"
          },
          {
            id: 2,
            name: "Hypovolemia"
          },
          {
            id: 3,
            name: "Tension Pneumothorax"
          },
          {
            id: 4,
            name: "Cardiac Tamponade"
          }
        ]
      }
    ];
  });
  return {
    cprFormSection
  };
};

const useStartCprForm = () => {
  const startCprFormSection = computed(() => {
    return [
      {
        header: "Date of Call",
        name: "date_call",
        componentType: "dateInputField",
        placeholder: "MM/DD/YYYY",
        grid: { s: "5.5" }
      },
      { grid: { s: "1" } },
      {
        type: "time",
        componentType: "inputField",
        header: "Time of Call",
        name: "time_call",
        grid: { s: "5.5" }
      },
      {
        header: "Site",
        name: "site",
        componentType: "radioButtonField",
        type: "inline",
        grid: { s: "5.5" },
        options: [
          {
            label: "Rescitation",
            value: "Rescitation"
          },
          {
            label: "Short Stay",
            value: "Short Stay"
          },
          {
            label: "Gynae Bench",
            value: "Gynae Bench"
          },
          {
            label: "Isolation Room",
            value: "Isolation Room"
          },
          {
            label: "Trauma",
            value: "Trauma"
          },
          {
            label: "Medical Bench",
            value: "Medical Bench"
          },
          {
            label: "Surgical Bench",
            value: "Surgical Bench"
          },
          {
            label: "SSW",
            value: "SSW"
          },
          {
            label: "Priority Area",
            value: "Priority Area"
          },
          {
            label: "Other",
            value: "Other"
          }
        ]
      },
      { grid: { s: "1" } },
      {
        header: "Witnessed Cardiac Arrest",
        name: "witnessed_cardiac_arrest",
        componentType: "radioButtonField",
        grid: { s: "5.5" },
        options: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      { componentType: "Dashes" }
    ];
  });
  return {
    startCprFormSection
  };
};

const bloodPressureForm = useBloodPressureForm();
const temperaturePulseRateForm = useTemperaturePulseRateForm();
const respiratoryRateOxygenForm = useRespiratoryRateOxygenForm();
const vitalsForm = computed(() => {
  const mergedForm = [
    // Add separator between sections
    { grid: { s: "3" } },
    { grid: { s: "9" }, componentType: "Dashes" },
    // Blood Pressure sections
    ...bloodPressureForm.bloodPressureFormSection.value,
    // Add separator between sections
    { grid: { s: "3" } },
    { grid: { s: "9" }, componentType: "Dashes" },
    // Temperature and Pulse Rate sections
    ...temperaturePulseRateForm.temperaturePulseRateForm.value,
    // Respiratory Rate and Oxygen sections
    ...respiratoryRateOxygenForm.respiratoryRateOxygenForm.value
  ];
  return mergedForm;
});
const useEndCprForm = () => {
  const endCprFormSection = computed(() => {
    return [
      {
        header: "Likely or known cause of cardiac arrest",
        name: "cause_cardiac_arrest",
        componentType: "inputField"
      },
      {
        type: "time",
        componentType: "inputField",
        header: "CPR time stopped",
        name: "cpr_time_stopped"
      },
      {
        componentType: "multiSelectInputField",
        header: "Reason CPR Stopped",
        name: "reason_cpr_stopped",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "ROSC"
          },
          {
            id: 2,
            name: "Death Pronounced"
          },
          {
            id: 3,
            name: "Other"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      { componentType: "Heading", name: "Vital signs after ROSC" },
      ...vitalsForm.value,
      {
        componentType: "Dashes"
      },
      {
        header: "Motor Response",
        name: "motor_response",
        componentType: "radioButtonField",
        grid: { s: "4" },
        options: [
          {
            label: "Obeying Commands",
            value: "Obeying Commands"
          },
          {
            label: "Localising",
            value: "Localising"
          },
          {
            label: "Withdraw",
            value: "Withdraw"
          },
          {
            label: "Normal Flexion",
            value: "Normal Flexion"
          },
          {
            label: "Extension",
            value: "Extension"
          },
          {
            label: "None",
            value: "None"
          }
        ]
      },
      {
        header: "Motor Response",
        name: "motor_response",
        componentType: "radioButtonField",
        grid: { s: "4" },
        options: [
          {
            label: "Oriented",
            value: "Oriented"
          },
          {
            label: "Confused",
            value: "Confused"
          },
          {
            label: "Inappropriate Words",
            value: "Inappropriate Words"
          },
          {
            label: "Incomprehensible sounds",
            value: "Incomprehensible sounds"
          },
          {
            label: "None",
            value: "None"
          }
        ]
      },
      {
        header: "Motor Response",
        name: "motor_response",
        componentType: "radioButtonField",
        grid: { s: "4" },
        options: [
          {
            label: "Spontaneous",
            value: "Spontaneous"
          },
          {
            label: "To Speech",
            value: "To Speech"
          },
          {
            label: "To Pain",
            value: "To Pain"
          },
          {
            label: "No Response",
            value: "No Response"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Outcome",
        name: "outcome",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Admitted to ICU"
          },
          {
            id: 2,
            name: "Transferred to another facility"
          },
          {
            id: 3,
            name: "Discharged Home"
          },
          {
            id: 4,
            name: "Death"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Disposition After CPR",
        name: "disposition_after_cpr",
        isMultiple: false,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Admitted to ICU"
          },
          {
            id: 2,
            name: "Transferred to another facility"
          },
          {
            id: 3,
            name: "Discharged Home"
          },
          {
            id: 4,
            name: "Death"
          }
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "Heading",
        name: "Resuscitation Team"
      },
      {
        componentType: "multiSelectInputField",
        header: "Team Leader",
        name: "team_leader",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Doctor"
          },
          {
            id: 2,
            name: "Nurse"
          },
          {
            id: 3,
            name: "Paramedic"
          },
          {
            id: 4,
            name: "Other"
          }
        ]
      },
      {
        componentType: "multiSelectInputField",
        header: "Team Members",
        name: "team_members",
        isMultiple: true,
        trackBy: "id",
        icon: icons.search,
        options: [
          {
            id: 1,
            name: "Doctor"
          },
          {
            id: 2,
            name: "Nurse"
          },
          {
            id: 3,
            name: "Paramedic"
          },
          {
            id: 4,
            name: "Other"
          }
        ]
      }
    ];
  });
  return {
    endCprFormSection
  };
};

const _hoisted_1 = { style: { "display": "flex", "gap": "8px" } };
const _hoisted_2 = { style: { "margin-top": "20px" } };
const _hoisted_3 = { style: { "margin-top": "10px" } };
const _hoisted_4 = { style: { "margin-top": "20px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CPR",
  setup(__props) {
    const startCprForm = useStartCprForm().startCprFormSection.value;
    const cprForm = useCprForm().cprFormSection.value;
    const endCprForm = useEndCprForm().endCprFormSection.value;
    const cprFormRef = ref(null);
    const endFormRef = ref(null);
    const dataTableRef = ref(null);
    const tableData = ref([]);
    const modalTitle = computed(() => "CPR");
    const header = [
      "Time",
      "Shock Energy",
      "Medication Name",
      "Dose",
      "Route",
      "Dose Unit",
      "Occurrences",
      "Intervention List",
      "Rhythm",
      "Reversible Causes"
    ];
    const options = {
      responsive: true,
      select: false,
      layout: {
        topStart: "buttons",
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      ordering: false,
      buttons: []
    };
    const handleAddRecord = async () => {
      if (!cprFormRef.value) {
        toastWarning("Form reference not available");
        return;
      }
      if (cprFormRef.value.validateForm()) {
        toastWarning("Please fill in all required fields");
        return;
      }
      const formData = cprFormRef.value.getFormValues();
      console.log("CPR Record data:", formData);
      const newRecord = [
        formData.time || (/* @__PURE__ */ new Date()).toISOString(),
        formData.shockEnergy || "",
        formData.medicationName || "",
        formData.dose || "",
        formData.route || "",
        formData.doseUnit || "",
        formData.occurrences || "",
        formData.interventionList || "",
        formData.rhythm || "",
        formData.reversibleCauses || ""
      ];
      tableData.value.push(newRecord);
      await nextTick();
      if (dataTableRef.value) {
        const table = dataTableRef.value.dt;
        table.clear();
        table.rows.add(tableData.value);
        table.draw();
      }
      cprFormRef.value.resetForm();
      toastSuccess("Record added successfully");
    };
    const handleFinishCpr = () => {
      if (!endFormRef.value) {
        toastWarning("Form reference not available");
        return;
      }
      if (endFormRef.value.validateForm()) {
        toastWarning("Please fill in all required fields");
        return;
      }
      const formData = endFormRef.value.getFormValues();
      console.log("End CPR data:", formData);
      toastSuccess("CPR finished successfully");
      modalController.dismiss();
    };
    onMounted(async () => {
      tableData.value = [
        ["2024-06-01T09:00:00Z", "200J", "Epinephrine", "1mg", "IV", "mg", "2", "Intubation, IV Access", "Asystole", "Hypoxia, Hypovolemia"],
        [
          "2024-06-01T09:05:00Z",
          "200J",
          "Amiodarone",
          "300mg",
          "IV",
          "mg",
          "1",
          "Defibrillation, IV Access",
          "Ventricular Fibrillation",
          "Electrolyte Imbalance, Tension Pneumothorax"
        ]
      ];
      await nextTick();
      if (dataTableRef.value) {
        const table = dataTableRef.value.dt;
        table.columns.adjust().draw();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: modalTitle.value,
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(DynamicButton, {
              name: "Finish CPR",
              type: "submit",
              onClick: handleFinishCpr,
              fill: "solid",
              color: "success"
            })
          ])
        ]),
        content: withCtx(() => [
          createVNode(StandardForm, { formData: unref(startCprForm) }, null, 8, ["formData"]),
          _cache[0] || (_cache[0] = createBaseVNode("h3", { style: { "margin-top": "20px", "margin-bottom": "10px", "font-weight": "600" } }, "Records", -1)),
          createVNode(unref(V), {
            ref_key: "dataTableRef",
            ref: dataTableRef,
            options,
            data: tableData.value,
            class: "display nowrap modern-table",
            width: "100%"
          }, {
            default: withCtx(() => [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(header, (head) => {
                    return createBaseVNode("th", { key: head }, toDisplayString(head), 1);
                  }), 64))
                ])
              ])
            ]),
            _: 1
          }, 8, ["data"]),
          createBaseVNode("div", _hoisted_2, [
            createVNode(StandardForm, {
              formData: unref(cprForm),
              ref_key: "cprFormRef",
              ref: cprFormRef
            }, null, 8, ["formData"]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(DynamicButton, {
                name: "Add Record",
                type: "submit",
                onClick: handleAddRecord,
                fill: "solid"
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(StandardForm, {
              formData: unref(endCprForm),
              ref_key: "endFormRef",
              ref: endFormRef
            }, null, 8, ["formData"])
          ])
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});

const CPR = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84896a4e"]]);

export { CPR as C };
