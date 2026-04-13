import { n as icons } from '../index-Bw8adu8R.js';
import { c as computed } from './vendor-DEu2hKw1.js';

const STI_OPTIONS = [
  { value: "Genital Ulcer Disease (GUD)", label: "Genital Ulcer Disease (GUD)" },
  { value: "Abnormal Vaginal Discharge (AVD)", label: "Abnormal Vaginal Discharge (AVD)" },
  { value: "Lower Abdominal Pain in Women (LAP)", label: "Lower Abdominal Pain in Women (LAP)" },
  { value: "Ano-Rectal Infections (ARI)", label: "Ano-Rectal Infections (ARI)" },
  { value: "Genital Warts", label: "Genital Warts" },
  { value: "Cancer of the Cervix", label: "Cancer of the Cervix" },
  { value: "Syphilis (Serologically Diagnosed)", label: "Syphilis (Serologically Diagnosed)" },
  { value: "Genital Schistosomiasis", label: "Genital Schistosomiasis" },
  { value: "Mpox", label: "Mpox" }
];
const getSTITreatmentFieldName = (sti) => `${sti}`;
const resetSTITreatmentValues = () => STI_OPTIONS.reduce((fields, sti) => {
  fields[getSTITreatmentFieldName(sti.value)] = "";
  return fields;
}, {});
const useGynaecologyForm = () => {
  const resetForm = () => {
  };
  const gynaecologyFormSection = computed(() => {
    return [
      // ========== AGE AT MENARCHE ==========
      {
        componentType: "inputField",
        header: "Age at menarche",
        name: "Age at menarche",
        unit: "Years",
        icon: icons.editPen,
        required: true,
        obsValueType: "value_numeric",
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Age at menarche is required";
          const num = Number(value);
          if (isNaN(num)) return "Age at menarche must be a number";
          if (num < 8) return "Age at menarche must be at least 8 years";
          if (num > 20) return "Age at menarche cannot exceed 20 years";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== LENGTH OF MENSTRUAL FLOW ==========
      {
        componentType: "inputField",
        header: "Length of menstrual flow",
        name: "Length of menstrual flow",
        obsValueType: "value_numeric",
        icon: icons.editPen,
        unitOptions: [
          { label: "Days", value: "Days" },
          { label: "Weeks", value: "Weeks" }
        ],
        initialUnit: "Days",
        required: true,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (!value || value === "") return "Length of menstrual flow is required";
          const num = Number(value);
          if (isNaN(num)) return "Value must be a number";
          if (num < 1) return "Value must be at least 1";
          const unit = allFormValues?.["Length of menstrual flow"] || "Days";
          if (unit === "Days") {
            if (num > 15) return "Length in days cannot exceed 15";
          } else if (unit === "Weeks") {
            if (num > 4) return "Length in weeks cannot exceed 4";
          }
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== REGULARITY OF MENSTRUAL FLOW ==========
      {
        componentType: "radioButtonField",
        header: "Regularity of menstrual flow",
        name: "Regularity of menstrual flow",
        required: true,
        type: "inline",
        obsValueType: "value_text",
        options: [
          { value: "Regular", label: "Regular" },
          { value: "Irregular", label: "Irregular" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Regularity of menstrual flow is required";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== AMOUNT OF FLOW ==========
      {
        componentType: "radioButtonField",
        header: "Amount of menstrual flow",
        name: "Amount of menstrual flow",
        required: true,
        type: "inline",
        obsValueType: "value_text",
        options: [
          { value: "Light", label: "Light" },
          { value: "Moderate", label: "Moderate" },
          { value: "Heavy", label: "Heavy" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Amount of flow is required";
          return null;
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== DYSMENORRHEA ==========
      {
        componentType: "radioButtonField",
        header: "Dysmenorrhea",
        name: "Dysmenorrhea",
        required: true,
        type: "inline",
        obsValueType: "value_text",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Dysmenorrhea is required";
          return null;
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Abortions",
        name: "Abortions",
        required: true,
        type: "inline",
        obsValueType: "value_numeric",
        options: [
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3+", label: "3+" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (value === null || value === void 0 || value === "") return "Abortions is required";
          return null;
        }
      },
      {
        componentType: "Dashes"
      },
      // ========== PAST STIs ==========
      {
        componentType: "radioButtonField",
        header: "Past STIs",
        name: "Past STIs",
        required: true,
        type: "inline",
        obsValueType: "value_coded",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        validation: (value) => {
          if (!value || value === "") return "Past STIs is required";
          return null;
        },
        onChange: (value) => {
          if (value !== "Yes") {
            return {
              STI: [],
              "Other STI": "",
              ...resetSTITreatmentValues()
            };
          }
          return {};
        }
      },
      // ========== STI LIST ==========
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues?.["Past STIs"] === "Yes"
      },
      {
        componentType: "checkboxField",
        header: "STI List",
        name: "STI",
        twoColumns: true,
        type: "multiple",
        options: STI_OPTIONS,
        obsValueType: "value_coded",
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Past STIs"] !== "Yes") return null;
          if (!value || Array.isArray(value) && value.length === 0) {
            return "Please select at least one STI";
          }
          return null;
        },
        condition: (allFormValues) => allFormValues?.["Past STIs"] === "Yes",
        onChange: (value) => {
          if (!Array.isArray(value)) {
            return { "Other STI": "", ...resetSTITreatmentValues() };
          }
          const updates = STI_OPTIONS.reduce((fields, sti) => {
            if (!value.includes(sti.value)) {
              fields[getSTITreatmentFieldName(sti.value)] = "";
            }
            return fields;
          }, {});
          if (!value.includes("Other")) {
            updates["Other STI"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues?.["Past STIs"] === "Yes" && Array.isArray(allFormValues?.["STI"]) && allFormValues?.["STI"].includes("Other")
      },
      {
        componentType: "inputField",
        header: "Other STI (specify)",
        name: "Other STI",
        icon: icons.editPen,
        obsValueType: "value_text",
        required: true,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Past STIs"] !== "Yes") return null;
          const stis = allFormValues?.["STI"];
          if (Array.isArray(stis) && stis.includes("Other")) {
            if (!value || value === "") {
              return "Please specify other STI";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          const stis = allFormValues?.["STI"];
          return Array.isArray(stis) && stis.includes("Other");
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues?.["Past STIs"] === "Yes"
      },
      ...STI_OPTIONS.flatMap((sti) => [
        {
          componentType: "radioButtonField",
          header: `Was ${sti.label.trim()} treated?`,
          name: getSTITreatmentFieldName(sti.value),
          required: true,
          type: "inline",
          obsValueType: "value_coded",
          options: [
            { value: "Treated", label: "Treated" },
            { value: "Not treated", label: "Not treated" }
          ],
          grid: { s: "12" },
          validation: (value, allFormValues) => {
            const selectedSTIs = allFormValues?.["STI"];
            if (!Array.isArray(selectedSTIs) || !selectedSTIs.includes(sti.value)) return null;
            if (!value || value === "") return `${sti.label.trim()} treatment is required`;
            return null;
          },
          condition: (allFormValues) => {
            const selectedSTIs = allFormValues?.["STI"];
            return allFormValues?.["Past STIs"] === "Yes" && Array.isArray(selectedSTIs) && selectedSTIs.includes(sti.value);
          }
        },
        {
          componentType: "Dashes",
          condition: (allFormValues) => {
            const selectedSTIs = allFormValues?.["STI"];
            return allFormValues?.["Past STIs"] === "Yes" && Array.isArray(selectedSTIs) && selectedSTIs.includes(sti.value);
          },
          grid: { s: "12" }
        }
      ]),
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== ABORTIONS ==========
      // {
      //     componentType: "radioButtonField",
      //     header: "Abortions*",
      //     name: "Abortions",
      //     required: true,
      //     options: [
      //         { value: "0", label: "0" },
      //         { value: "1", label: "1" },
      //         { value: "2", label: "2" },
      //         { value: "3+", label: "3+" },
      //     ],
      //     grid: { s: "12" },
      //     validation: (value: any) => {
      //         if (value === null || value === undefined || value === "") return "Abortions is required";
      //         return null;
      //     },
      // },
      //
      // { grid: { s: "12" }, componentType: "Dashes" },
      //
      // // ========== STIs ==========
      // {
      //     componentType: "radioButtonField",
      //     header: "STIs*",
      //     name: "STIs",
      //     required: true,
      //     options: [
      //         { value: "Yes", label: "Yes" },
      //         { value: "No", label: "No" },
      //     ],
      //     grid: { s: "12" },
      //     validation: (value: any) => {
      //         if (!value || value === "") return "STIs is required";
      //         return null;
      //     },
      // },
      // ========== GYNAECOLOGICAL SURGERY ==========
      {
        componentType: "checkboxField",
        header: "Gynaecological surgery",
        name: "Gynaecologicalsurgery",
        type: "multiple",
        twoColumns: true,
        obsValueType: "value_coded",
        condition: (allFormValues) => allFormValues?.["Abortions"] !== "0",
        options: [
          {
            value: "None",
            label: "None",
            exclusive: true
          },
          { value: "myomectomy", label: "Myomectomy" },
          { value: "removal of ovarian cyst", label: "Removal of ovarian cyst" },
          { value: "oophorectomy", label: "Oophorectomy" },
          { value: "salpingectomy", label: "Salpingectomy" },
          { value: "cervical cone biopsy", label: "Cervical cone biopsy" },
          { value: "Other", label: "Other" }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => allFormValues?.["Abortions"] === "0",
        grid: { s: "12" }
      },
      {
        componentType: "checkboxField",
        header: "Gynaecological surgery",
        name: "Gynaecological surgery",
        type: "multiple",
        obsValueType: "value_coded",
        twoColumns: true,
        condition: (allFormValues) => allFormValues?.["Abortions"] === "0",
        options: [
          {
            value: "None",
            label: "None",
            exclusive: true
          },
          { value: "dilation and currettage", label: "Dilation and currettage" },
          { value: "myomectomy", label: "Myomectomy" },
          { value: "removal of ovarian cyst", label: "Removal of ovarian cyst" },
          { value: "oophorectomy", label: "Oophorectomy" },
          { value: "salpingectomy", label: "Salpingectomy" },
          { value: "cervical cone biopsy", label: "Cervical cone biopsy" },
          { value: "Other", label: "Other" }
        ],
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Other(Specify)",
        name: "_Gynaecologicalsurgery",
        icon: icons.editPen,
        grid: { s: "12" },
        validation: (value) => {
          if (value && value.length < 3) return "Other Gynaecological surgery must be at least 3 letters long";
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues?.["Gynaecological surgery"]?.includes("Other") || allFormValues?.["Gynaecologicalsurgery"]?.includes("Other");
        }
      },
      // ========== OTHER ==========
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
      {
        componentType: "inputField",
        header: "Other Gynaecological information",
        name: "Other Gynaecological information",
        icon: icons.editPen,
        obsValueType: "value_text",
        grid: { s: "12" },
        validation: (value) => {
          if (value && value.length < 3) return "Other Gynaecological information must be at least 3 letters long";
          return null;
        },
        rows: 4
      }
    ];
  });
  return {
    resetForm,
    gynaecologyFormSection
  };
};

export { useGynaecologyForm as u };
