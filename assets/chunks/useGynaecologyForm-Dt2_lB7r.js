import { n as icons } from '../index-_KKpPwbo.js';
import { c as computed } from './vendor-6OQ3r7Vr.js';

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
          const unit = allFormValues?.["Length of menstrual flow_unit"] || "Days";
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
      // ========== PAST STIs ==========
      {
        componentType: "radioButtonField",
        header: "Past STIs",
        name: "Past STIs",
        required: true,
        type: "inline",
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
              "STI List": [],
              "Other STI (specify)": "",
              "STI Treatment": ""
            };
          }
          return {};
        }
      },
      // ========== STI LIST ==========
      {
        componentType: "checkboxField",
        header: "STI List",
        name: "STI",
        type: "multiple",
        options: [
          { value: "Syphilis", label: "Syphilis" },
          { value: "Gonorrhoea", label: "Gonorrhoea" },
          { value: "Chlamydia", label: "Chlamydia" },
          { value: "Chancroid", label: "Chancroid" },
          { value: "Lymphogranuloma venereum", label: "Lymphogranuloma venereum (LGV)" },
          { value: "Granuloma inguinale (Donovanosis)", label: "Granuloma inguinale (Donovanosis)" },
          { value: "Human Papillomavirus (HPV)", label: "Human Papillomavirus (HPV)" },
          { value: "Herpes Simplex Virus (HSV-1 & HSV-2)", label: "Herpes Simplex Virus (HSV-1 & HSV-2)" },
          { value: "Hepatitis B", label: "Hepatitis B" },
          { value: "Molluscum contagiosum", label: "Molluscum contagiosum" },
          { value: "Trichomoniasis", label: "Trichomoniasis" },
          { value: "Pubic lice (Pediculosis pubis)", label: "Pubic lice (Pediculosis pubis)" },
          {
            value: "Scabies",
            label: "Scabies "
          },
          { value: "Candidiasis (yeast infection)", label: "Candidiasis (yeast infection)" },
          { value: "Other", label: "Other" }
        ],
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
          if (!Array.isArray(value)) return {};
          if (!value.includes("Other")) {
            return { "Other STI": "" };
          }
          return {};
        }
      },
      {
        componentType: "inputField",
        header: "Other STI (specify)",
        name: "Other STI",
        icon: icons.editPen,
        required: true,
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Past STIs"] !== "Yes") return null;
          const stis = allFormValues?.["STI List"];
          if (Array.isArray(stis) && stis.includes("Other")) {
            if (!value || value === "") {
              return "Please specify other STI";
            }
          }
          return null;
        },
        condition: (allFormValues) => {
          if (allFormValues?.["Past STIs"] !== "Yes") return false;
          const stis = allFormValues?.["STI List"];
          return Array.isArray(stis) && stis.includes("Other");
        }
      },
      {
        componentType: "radioButtonField",
        header: "STI Treatment",
        name: "STI Treatment",
        required: true,
        type: "inline",
        options: [
          { value: "Treated", label: "Treated" },
          { value: "Not treated", label: "Not treated" }
        ],
        grid: { s: "12" },
        validation: (value, allFormValues) => {
          if (allFormValues?.["Past STIs"] !== "Yes") return null;
          if (!value || value === "") return "STI treatment is required";
          return null;
        },
        condition: (allFormValues) => allFormValues?.["Past STIs"] === "Yes"
      },
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
        componentType: "inputField",
        header: "Gynaecological surgery",
        name: "Gynaecological surgery",
        icon: icons.editPen,
        required: false,
        grid: { s: "12" }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== OTHER ==========
      {
        componentType: "inputField",
        header: "Other",
        name: "Other notes",
        required: false,
        grid: { s: "12" },
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
