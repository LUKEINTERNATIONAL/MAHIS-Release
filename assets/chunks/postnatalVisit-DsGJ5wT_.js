import { c as computed, s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, w as watch, f as ref, aM as useRouter, O as createBlock, aH as IonContent, C as createBaseVNode, b_ as chevronBackOutline, J as Fragment, S as renderList, T as withDirectives, c4 as resolveDynamicComponent, U as vShow, bw as IonPage } from './vendor-D71W8bKc.js';
import { _ as _sfc_main$3, u as useFormWizard } from './useFormWizard-PYQfTE77.js';
import { n as icons, y as StandardValidations, H as HisDate, z as StandardForm, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, J as savePatientRecord, T as Toolbar, F as DynamicButton } from '../index-BbB8A9MU.js';
import { D as DemographicBar } from './DemographicBar-Bxo0QX07.js';
import { s as storeToRefs } from './pinia-BqgWZabu.js';
import { u as useBloodPressureForm, a as useTemperaturePulseRateForm, b as useRespiratoryRateOxygenForm } from './useRespiratoryRateOxygenForm-CTD5ZV0w.js';

const useVisitForMotherForm = () => {
  const visitForMotherFormSection = computed(() => {
    const isMotherAlive = (allFormValues) => allFormValues["Status of the mother"] === "Alive";
    const hasAnyDangerSigns = (allFormValues) => {
      const signs = allFormValues["Danger signs"];
      if (!Array.isArray(signs)) return false;
      return signs.some((sign) => sign && sign !== "none");
    };
    const hasUterusProblem = (allFormValues) => allFormValues["Status of Uterus"] === "sub-involuted";
    const hasLochiaProblem = (allFormValues) => ["heavy", "offensive"].includes(allFormValues["Status of lochia"]);
    const hasEpisiotomyProblem = (allFormValues) => ["gaped", "infected", "infected and gaped"].includes(allFormValues["Condition of episiotomy/tear"]);
    const needsIntervention = (allFormValues) => isMotherAlive(allFormValues) && (hasUterusProblem(allFormValues) || hasLochiaProblem(allFormValues) || hasEpisiotomyProblem(allFormValues) || hasAnyDangerSigns(allFormValues));
    const isEarlyPostnatalCheck = (allFormValues) => allFormValues["Postnatal check period"] === "Up to 48 hrs or before discharge";
    const isAfterSixWeeksPostnatalCheck = (allFormValues) => allFormValues["Postnatal check period"] === "After 6 weeks";
    const familyPlanningMethodOptions = [
      {
        label: "Bilateral Tubal Ligation (BTL)",
        value: "BTL"
      },
      {
        label: "Intrauterine Contraceptive Device (IUCD)",
        value: "IUCD"
      },
      {
        label: "Oral contraception",
        value: "Oral contraception"
      },
      {
        label: "Injectable contraceptives",
        value: "Injectable contraceptives"
      },
      {
        label: "Contraceptive implant",
        value: "Contraceptive implant"
      },
      {
        label: "Intrauterine device (IUD)",
        value: "Intrauterine device (IUD)"
      },
      {
        label: "Implants",
        value: "Implants"
      },
      {
        label: "Hormonal IUCD",
        value: "iucd-hormonal"
      },
      {
        label: "Copper T IUCD",
        value: "iucd-cooper t"
      },
      {
        label: "None",
        value: "None"
      },
      {
        label: "Other",
        value: "Other"
      }
    ];
    return [
      {
        componentType: "dateInputField",
        header: "Enter Date",
        name: "Visit date",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        value: HisDate.toStandardHisDisplayFormat(HisDate.sessionDate()),
        initialValue: HisDate.toStandardHisDisplayFormat(HisDate.sessionDate()),
        disabled: true
        // validation: StandardValidations.required,
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "What is the status of the mother?",
        name: "Status of the mother",
        obsValueType: "value_coded",
        options: [
          {
            label: "Alive",
            value: "Alive"
          },
          {
            label: "Dead",
            value: "Dead"
          }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Is the postnatal check within?",
        name: "Postnatal check period",
        obsValueType: "value_coded",
        options: [
          {
            label: "Up to 48 hrs or before discharge",
            value: "Up to 48 hrs or before discharge"
          },
          {
            label: "3-7 days",
            value: "3-7 days"
          },
          {
            label: "8-42 days",
            value: "8-42 days"
          },
          {
            label: "After 6 weeks",
            value: "After 6 weeks"
          }
        ],
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "checkboxField",
        header: "Does the woman have any of the danger signs?",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
        twoColumns: true,
        options: [
          {
            label: "None",
            value: "none",
            exclusive: true
          },
          {
            label: "Sepsis",
            value: "sepsis"
          },
          {
            label: "Anemia",
            value: "anemia"
          },
          {
            label: "Postpartum hemorrhage",
            value: "postpartum hemorrhage"
          },
          {
            label: "Pre-eclampsia with severe features",
            value: "pre-eclampsia with severe features"
          },
          {
            label: "Pre-eclampsia without severe features",
            value: "pre-eclampsia without severe features"
          },
          {
            label: "Eclampsia",
            value: "eclampsia"
          },
          {
            label: "Breast engorgement",
            value: "breast engorgement"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other danger signs notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Danger signs"]?.includes("Other");
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Danger signs"]?.includes("Other") ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Status of uterus",
        name: "Status of Uterus",
        obsValueType: "value_coded",
        options: [
          {
            label: "Involuted",
            value: "involuted"
          },
          {
            label: "Sub-involuted",
            value: "sub-involuted"
          },
          {
            label: "Other status",
            value: "Other status"
          }
        ],
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Status of uterus notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Status of Uterus"] === "Other status";
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Status of Uterus"] === "Other status" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Status of lochia",
        name: "Status of lochia",
        obsValueType: "value_coded",
        options: [
          {
            label: "Mild",
            value: "mild"
          },
          {
            label: "Moderate",
            value: "moderate"
          },
          {
            label: "Heavy",
            value: "heavy"
          },
          {
            label: "Offensive",
            value: "offensive"
          },
          {
            label: "Other status",
            value: "Other status"
          }
        ],
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Status of lochia notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Status of lochia"] === "Other status";
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Status of lochia"] === "Other status" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Episiotomy/tear present?",
        name: "Episiotomy/tear",
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
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "radioButtonField",
        header: "Condition of episiotomy/tear?",
        name: "Condition of episiotomy/tear",
        obsValueType: "value_coded",
        options: [
          {
            label: "Intact",
            value: "intact"
          },
          {
            label: "Gaped",
            value: "gaped"
          },
          {
            label: "Infected",
            value: "infected"
          },
          {
            label: "Infected and gaped",
            value: "infected and gaped"
          }
        ],
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Episiotomy/tear"] === "Yes";
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Episiotomy/tear"] === "Yes" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Was an intervention given?",
        name: "Intervention given",
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
          return needsIntervention(allFormValues);
        },
        validation: (value, allFormValues) => {
          return needsIntervention(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention",
        name: "Intervention notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return needsIntervention(allFormValues) && allFormValues["Intervention given"] === "Yes";
        },
        validation: (value, allFormValues) => {
          return needsIntervention(allFormValues) && allFormValues["Intervention given"] === "Yes" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Vitamin A supplementation",
        name: "Vitamin A supplementation",
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
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Counseling on family planning done?",
        name: "Counselling on family planning",
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
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "radioButtonField",
        header: "Postpartum family planning method chosen (within 48 hours)",
        name: "Postpartum family planning method",
        obsValueType: "value_coded",
        options: familyPlanningMethodOptions,
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Counselling on family planning"] === "Yes" && isEarlyPostnatalCheck(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Counselling on family planning"] === "Yes" && isEarlyPostnatalCheck(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Alert",
        backgroundColor: "#EAF6FF",
        textColor: "#0B4F7A",
        value: "Select the postpartum family planning method chosen.",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Counselling on family planning"] === "Yes" && isAfterSixWeeksPostnatalCheck(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Postpartum family planning method chosen (after 6 weeks)",
        name: "Postpartum family planning method",
        obsValueType: "value_coded",
        options: familyPlanningMethodOptions,
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Counselling on family planning"] === "Yes" && isAfterSixWeeksPostnatalCheck(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Counselling on family planning"] === "Yes" && isAfterSixWeeksPostnatalCheck(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "inputField",
        header: "Specify other family planning method",
        name: "Other family planning method, non-coded",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Postpartum family planning method"] === "Other";
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Postpartum family planning method"] === "Other" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Breast feeding",
        name: "Breast feeding",
        obsValueType: "value_coded",
        options: [
          {
            label: "Exclusive",
            value: "Exclusive"
          },
          {
            label: "Non Exclusive",
            value: "Non Exclusive"
          },
          {
            label: "Not breastfeeding/Formula",
            value: "Not breastfeeding/Formula"
          }
        ],
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isMotherAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes"
      }
    ];
  });
  return {
    visitForMotherFormSection
  };
};

const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VisitForMother",
  setup(__props, { expose: __expose }) {
    const { visitForMotherFormSection } = useVisitForMotherForm();
    const { formRef } = useExposeFromStandardForm();
    const onSubmit = async () => {
      const validationErrors = formRef.value?.validateForm();
      if (validationErrors) {
        toastWarning("Please fix validation errors before submitting");
        return;
      }
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
                  subtitle: "Visit for Mother",
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(visitForMotherFormSection)
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

const useVisitForBabyForm = () => {
  const demographicsStore = useDemographicsStore();
  const { patient } = storeToRefs(demographicsStore);
  const motherHivPositive = ref("");
  const bloodPressureForm = useBloodPressureForm({
    showDiastolic: false
  });
  const temperaturePulseRateForm = useTemperaturePulseRateForm();
  const respiratoryRateOxygenForm = useRespiratoryRateOxygenForm();
  const loadMotherHivStatus = async (patientId) => {
    if (!patientId || motherHivPositive.value) return;
    const status = await ObservationService.getFirstValueCoded(patientId, "Mother HIV Status");
    if (typeof status === "string") {
      const normalized = status.toLowerCase();
      if (normalized === "positive") {
        motherHivPositive.value = "Yes";
      } else if (normalized === "negative") {
        motherHivPositive.value = "No";
      }
    }
  };
  watch(
    () => patient.value?.patientID,
    (patientId) => {
      void loadMotherHivStatus(patientId);
    },
    { immediate: true }
  );
  const getBabyBirthdate = () => {
    return patient.value?.personInformation?.birthdate || patient.value?.person?.birthdate || patient.value?.birthdate || "";
  };
  const validateImmunizationDate = (value, allFormValues, vaccineLabel) => {
    const babyIsAlive = allFormValues["Status of baby"] === "Alive";
    const hasVaccine = vaccineLabel === "BCG" ? allFormValues["Type of immunization the baby received"]?.includes("BCG") : allFormValues["Type of immunization the baby received"]?.includes("Polio 0");
    if (!babyIsAlive || !hasVaccine) return null;
    const requiredError = StandardValidations.required(value);
    if (requiredError) return requiredError;
    const birthdate = getBabyBirthdate();
    const normalizedValue = HisDate.toStandardHisFormat(value);
    const normalizedBirthdate = HisDate.toStandardHisFormat(birthdate);
    if (!normalizedValue || !normalizedBirthdate) return null;
    if (HisDate.dateDiffInDays(normalizedValue, normalizedBirthdate) < 0) {
      return `${vaccineLabel} date must not be before the baby's date of birth`;
    }
    return null;
  };
  const visitForBabyFormSection = computed(() => {
    const isBabyAlive = (allFormValues) => allFormValues["Status of baby"] === "Alive";
    const syncTempDangerSigns = (temperatureValue, existingDangerSigns) => {
      const currentSigns = Array.isArray(existingDangerSigns) ? [...existingDangerSigns] : [];
      const baseSigns = currentSigns.filter((sign) => sign !== "hyperthermia" && sign !== "hypothermia");
      const parsedTemp = Number(temperatureValue);
      if (!Number.isFinite(parsedTemp)) {
        return baseSigns;
      }
      if (parsedTemp > 37.7) {
        baseSigns.push("hyperthermia");
      }
      if (parsedTemp < 35) {
        baseSigns.push("hypothermia");
      }
      if (baseSigns.some((sign) => sign !== "none")) {
        return baseSigns.filter((sign) => sign !== "none");
      }
      return baseSigns;
    };
    const ncdVitalsFields = [
      ...bloodPressureForm.bloodPressureFormSection.value,
      ...temperaturePulseRateForm.temperaturePulseRateForm.value,
      ...respiratoryRateOxygenForm.respiratoryRateOxygenForm.value
    ].filter((field) => {
      if (!field) return false;
      if (!field.componentType && field.grid) return false;
      return true;
    }).map((field) => {
      const existingCondition = field?.condition;
      const existingOnChange = field?.onChange;
      const halfWidthComponents = /* @__PURE__ */ new Set([
        "inputField",
        "checkboxField",
        "multiSelectInputField",
        "dateInputField",
        "timeInputField",
        "dateTimeInputField",
        "searchableDropdown",
        "switchField"
      ]);
      const baseField = {
        ...field,
        grid: halfWidthComponents.has(field?.componentType) ? { xs: "12", md: "6" } : field?.componentType === "Alert" || field?.componentType === "Heading" ? { xs: "12", md: "12" } : field?.grid
      };
      return {
        ...baseField,
        onChange: (field?.name === "Temperature" || field?.name === "Temperature (c)") && field?.componentType === "inputField" ? (value, allFormValues) => {
          const updatesFromField = typeof existingOnChange === "function" ? existingOnChange(value, allFormValues) : {};
          const safeFieldUpdates = updatesFromField && typeof updatesFromField === "object" ? updatesFromField : {};
          const tempKey = field?.name === "Temperature (c)" ? "Temperature (c)" : "Temperature";
          const mergedValues = { ...allFormValues, ...safeFieldUpdates, [tempKey]: value };
          return {
            ...safeFieldUpdates,
            "Danger signs": syncTempDangerSigns(value, mergedValues["Danger signs"])
          };
        } : baseField.onChange,
        condition: (allFormValues) => {
          if (!isBabyAlive(allFormValues)) return false;
          return typeof existingCondition === "function" ? existingCondition(allFormValues) : true;
        }
      };
    });
    const hasAnyDangerSigns = (allFormValues) => {
      const signs = allFormValues["Danger signs"];
      if (!Array.isArray(signs)) return false;
      return signs.some((sign) => sign && sign !== "none");
    };
    return [
      {
        componentType: "radioButtonField",
        header: "What is the status of the baby?",
        name: "Status of baby",
        obsValueType: "value_coded",
        options: [
          {
            label: "Alive",
            value: "Alive"
          },
          {
            label: "Dead",
            value: "Dead"
          }
        ],
        validation: StandardValidations.required
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "inputField",
        header: "Current weight",
        name: "Weight (kg)",
        obsValueType: "value_numeric",
        unit: "kg",
        type: "number",
        icon: icons.weight,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          if (!isBabyAlive(allFormValues) || value === "" || value === null || value === void 0) {
            return null;
          }
          return StandardValidations.isNotEmptyandNumber(value) || StandardValidations.checkMinMax(value, 0.5, 250);
        },
        grid: { s: "6" }
      },
      ...ncdVitalsFields,
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Is the postnatal visit within",
        name: "Postnatal visit period",
        obsValueType: "value_coded",
        options: [
          {
            label: "3-7 days",
            value: "3-7 days"
          },
          {
            label: "8-42 days",
            value: "8-42 days"
          }
        ],
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "checkboxField",
        header: "Does the baby have any of the danger signs/complications?",
        name: "Danger signs",
        obsValueType: "value_coded",
        twoColumns: true,
        type: "multiple",
        options: [
          {
            label: "None",
            value: "none",
            exclusive: true
          },
          {
            label: "Not able to feed",
            value: "not able to feed"
          },
          {
            label: "Hyperthermia (>37.7 degrees celcius)",
            value: "hyperthermia"
          },
          {
            label: "Hypothermia (<35 degrees celcius)",
            value: "hypothermia"
          },
          {
            label: "Convulsions",
            value: "convulsions"
          },
          {
            label: "Lethargic",
            value: "lethargic"
          },
          {
            label: "Chest in-drawing",
            value: "chest in-drawing"
          },
          {
            label: "Fast breathing",
            value: "fast breathing"
          },
          {
            label: "Eye discharge",
            value: "Eye discharge"
          },
          {
            label: "Signs of cord infection",
            value: "Signs of cord infection"
          },
          {
            label: "Jaundice",
            value: "jaundice"
          },
          {
            label: "Pallor",
            value: "pallor"
          },
          {
            label: "Irritable",
            value: "irritable"
          },
          {
            label: "Cyanosis",
            value: "cyanosis"
          },
          {
            label: "Skin rashes",
            value: "skin rashes"
          },
          {
            label: "Any signs of disability",
            value: "signs of disability"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other danger signs notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Danger signs"]?.includes("Other");
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Danger signs"]?.includes("Other") ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Was an intervention given?",
        name: "Intervention on danger signs",
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
          return isBabyAlive(allFormValues) && hasAnyDangerSigns(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) && hasAnyDangerSigns(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention",
        name: "Intervention on danger signs notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues) && hasAnyDangerSigns(allFormValues) && allFormValues["Intervention on danger signs"] === "Yes";
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) && hasAnyDangerSigns(allFormValues) && allFormValues["Intervention on danger signs"] === "Yes" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "checkboxField",
        header: "Has the baby received the following immunizations?",
        name: "Type of immunization the baby received",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "BCG",
            value: "BCG"
          },
          {
            label: "Polio 0",
            value: "Polio 0"
          }
        ],
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "dateInputField",
        header: "Enter date (BCG)",
        name: "Date BCG given",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        minDate: getBabyBirthdate() || void 0,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Type of immunization the baby received"]?.includes("BCG");
        },
        validation: (value, allFormValues) => {
          return validateImmunizationDate(value, allFormValues, "BCG");
        }
      },
      {
        componentType: "dateInputField",
        header: "Enter date (Polio 0)",
        name: "Date polio given",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        minDate: getBabyBirthdate() || void 0,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Type of immunization the baby received"]?.includes("Polio 0");
        },
        validation: (value, allFormValues) => {
          return validateImmunizationDate(value, allFormValues, "Polio 0");
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "radioButtonField",
        header: "Mother HIV positive?",
        name: "Mother HIV positive",
        obsValueType: "value_coded",
        value: motherHivPositive.value || void 0,
        initialValue: motherHivPositive.value || void 0,
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
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "radioButtonField",
        header: "Has the baby started ART Prophylaxis?",
        name: "ART Prophylaxis started",
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
          return isBabyAlive(allFormValues) && allFormValues["Mother HIV positive"] === "Yes";
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Mother HIV positive"] === "Yes" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "inputField",
        header: "Indicate why the baby is not on ART Prophylaxis",
        name: "ART Prophylaxis not started notes",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Mother HIV positive"] === "Yes" && allFormValues["ART Prophylaxis started"] === "No";
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Mother HIV positive"] === "Yes" && allFormValues["ART Prophylaxis started"] === "No" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "radioButtonField",
        header: "Has the baby started on cotrimoxazole prophylaxis?",
        name: "Cotrimoxazole prophylaxis",
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
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return !isBabyAlive(allFormValues) && allFormValues["Status of baby"] === "Dead";
        }
      },
      {
        componentType: "dateInputField",
        header: "Date of Death",
        name: "Date of Death",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        showTodayButton: true,
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        validation: (value, allFormValues) => {
          return allFormValues["Status of baby"] === "Dead" ? StandardValidations.required(value) : null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "timeInputField",
        header: "Time of Death",
        name: "Time of Death",
        obsValueType: "value_datetime",
        icon: icons.timePicker,
        showNowButton: true,
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        validation: (value, allFormValues) => {
          return allFormValues["Status of baby"] === "Dead" ? StandardValidations.required(value) : null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        }
      },
      {
        componentType: "inputField",
        header: "Colour of the Skin",
        name: "Skin color",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        validation: (value, allFormValues) => {
          return allFormValues["Status of baby"] === "Dead" ? StandardValidations.required(value) : null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Condition of the Umbilical Cord",
        name: "Condition of the Umbilical Cord",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        validation: (value, allFormValues) => {
          return allFormValues["Status of baby"] === "Dead" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        }
      },
      {
        componentType: "inputField",
        header: "Name the cause of Death",
        name: "Cause of Death",
        obsValueType: "value_text",
        icon: icons.editPen,
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        validation: (value, allFormValues) => {
          return allFormValues["Status of baby"] === "Dead" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "radioButtonField",
        header: "Bereavement counselling",
        name: "Bereavement counselling",
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
          return allFormValues["Status of baby"] === "Dead";
        },
        validation: (value, allFormValues) => {
          return allFormValues["Status of baby"] === "Dead" ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        }
      }
    ];
  });
  return {
    visitForBabyFormSection
  };
};

const _hoisted_1$1 = { class: "container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VisitForBaby",
  setup(__props, { expose: __expose }) {
    const { visitForBabyFormSection } = useVisitForBabyForm();
    const { formRef } = useExposeFromStandardForm();
    const buildImmunizationSyncData = (formData) => {
      const selectedImmunizations = formData["Type of immunization the baby received"] || [];
      const vaccineDates = [];
      if (selectedImmunizations.includes("BCG") && formData["Date BCG given"]) {
        vaccineDates.push({ drugName: "BCG", administrationDate: HisDate.toStandardHisFormat(formData["Date BCG given"]) });
      }
      if (selectedImmunizations.includes("Polio 0") && formData["Date polio given"]) {
        vaccineDates.push({ drugName: "OPV 0", administrationDate: HisDate.toStandardHisFormat(formData["Date polio given"]) });
      }
      return vaccineDates.filter((item) => item.administrationDate);
    };
    const syncImmunizationsToEirRecord = (patientRecord, formData) => {
      const immunizations = buildImmunizationSyncData(formData);
      if (immunizations.length === 0) return patientRecord;
      patientRecord.vaccineAdministration ??= { orders: [], obs: [], voided: [] };
      patientRecord.vaccineAdministration.orders ??= [];
      patientRecord.vaccineAdministration.obs ??= [];
      patientRecord.vaccineAdministration.voided ??= [];
      immunizations.forEach(({ drugName, administrationDate }) => {
        const matchedAntigen = patientRecord?.vaccineSchedule?.vaccine_schedule?.flatMap((visit) => visit.antigens || [])?.find((antigen) => antigen.drug_name === drugName);
        patientRecord.vaccineAdministration.orders = patientRecord.vaccineAdministration.orders.filter((order) => order.drug_name !== drugName);
        patientRecord.vaccineAdministration.obs = patientRecord.vaccineAdministration.obs.filter((obs) => obs.value_text !== drugName);
        patientRecord.vaccineAdministration.voided = patientRecord.vaccineAdministration.voided.filter((item) => item.drug_name !== drugName);
        patientRecord.vaccineAdministration.orders.push({
          drug_name: drugName,
          drug_inventory_id: matchedAntigen?.drug_id,
          equivalent_daily_dose: 1,
          start_date: administrationDate,
          auto_expire_date: administrationDate,
          units: "ml",
          instructions: "",
          dose: 1,
          frequency: "Unknown",
          batch_number: "Unknown",
          prn: 0
        });
        patientRecord.vaccineAdministration.obs.push({
          concept_id: 2876,
          value_text: drugName,
          obs_datetime: administrationDate
        });
        if (matchedAntigen) {
          matchedAntigen.status = "administered";
          matchedAntigen.date_administered = administrationDate;
        }
      });
      return patientRecord;
    };
    const onSubmit = async () => {
      const validationErrors = formRef.value?.validateForm();
      if (validationErrors) {
        toastWarning("Please fix validation errors before submitting");
        return;
      }
      const data = formRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      const patientRecord = await ObservationService.buildAddObsToEncounterPatient(data, EncounterTypeId.Counseling);
      if (!patientRecord) return;
      syncImmunizationsToEirRecord(patientRecord, data);
      if (await savePatientRecord(patientRecord)) toastSuccess("Behaviour Counselling data saved successfully");
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
                  subtitle: "Visit for Baby",
                  ref_key: "formRef",
                  ref: formRef,
                  "form-data": unref(visitForBabyFormSection)
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

const _hoisted_1 = { style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" } };
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalVisit",
  setup(__props) {
    const router = useRouter();
    const { onChangeCurrentTab, currentTabIndex } = useFormWizard();
    const TABS = [
      { title: "Visit For Baby", icon: "" },
      { title: "Visit For Mother", icon: "" }
    ];
    const COMPONENTS = [
      { name: "VisitForBaby", component: _sfc_main$1 },
      { name: "VisitForMother", component: _sfc_main$2 }
    ];
    const openBackController = () => {
      router.push("/pnc/home");
    };
    const componentRefs = ref([]);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => ({
      text: isSaving.value ? "Saving..." : "Finish",
      icon: isSaving.value ? "hourglassOutline" : "checkmark",
      hideText: false,
      hideIcon: false,
      disabled: isSaving.value
    }));
    const saveData = async () => {
      isSaving.value = true;
      try {
        for (const compRef of componentRefs.value) {
          if (compRef?.onSubmit) {
            await compRef.onSubmit();
          }
        }
        router.push("/pnc/home");
      } catch (error) {
        console.error("Error saving data:", error);
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$3, {
                  ref: "wizard",
                  headingTitle: "Postnatal visit details",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": TABS,
                  onChange: unref(onChangeCurrentTab),
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to PNC Home",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    (openBlock(), createElementBlock(Fragment, null, renderList(COMPONENTS, (comp, index) => {
                      return withDirectives(createVNode(resolveDynamicComponent(comp.component), {
                        key: comp.name,
                        ref_for: true,
                        ref: (el) => componentRefs.value[index] = el
                      }), [
                        [vShow, unref(currentTabIndex) === index]
                      ]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["doneButton", "onChange"])
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
