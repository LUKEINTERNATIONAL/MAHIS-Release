import { c as computed, s as defineComponent, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, w as watch, f as ref, aL as useRouter, O as createBlock, aG as IonContent, C as createBaseVNode, bX as chevronBackOutline, J as Fragment, R as renderList, S as withDirectives, c1 as resolveDynamicComponent, T as vShow, bu as IonPage } from './vendor-D523m2MA.js';
import { _ as _sfc_main$3 } from './Wizard.vue_vue_type_script_setup_true_lang-Z4N8aj1a.js';
import { n as icons, y as StandardValidations, H as HisDate, z as StandardForm, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, T as Toolbar, F as DynamicButton } from '../index-BNabxiUl.js';
import { D as DemographicBar } from './DemographicBar-BAxgMEoB.js';
import { s as storeToRefs } from './pinia-BZkYQmJa.js';
import { u as useFormWizard } from './useFormWizard-C_YYiP8i.js';

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
        componentType: "Dashes"
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
        componentType: "Dashes"
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
      },
      {
        componentType: "checkboxField",
        header: "Does the woman have any of the danger signs?",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
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
        componentType: "Dashes"
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
        componentType: "Dashes"
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
        componentType: "Dashes"
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
        componentType: "Dashes"
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
        componentType: "Dashes"
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
        componentType: "Dashes"
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
        header: "Postpartum family planning method chosen",
        name: "Postpartum family planning method",
        obsValueType: "value_coded",
        options: [
          {
            label: "Bilateral Tubal Ligation (BTL)",
            value: "BTL"
          },
          {
            label: "Intrauterine Contraceptive Device (IUCD)",
            value: "IUCD"
          },
          {
            label: "Oral contraceptive",
            value: "Oral contraceptive"
          },
          {
            label: "Injectable",
            value: "Injectable"
          },
          {
            label: "Implant",
            value: "Implant"
          },
          {
            label: "IUD",
            value: "IUD"
          },
          {
            label: "Emergency Pills",
            value: "Emergency Pills"
          },
          {
            label: "Condom",
            value: "Condom"
          },
          {
            label: "Cycle beads",
            value: "Cycle beads"
          },
          {
            label: "None",
            value: "None"
          },
          {
            label: "Other",
            value: "Other"
          }
        ],
        condition: (allFormValues) => {
          return isMotherAlive(allFormValues) && allFormValues["Counselling on family planning"] === "Yes";
        },
        validation: (value, allFormValues) => {
          if (!isMotherAlive(allFormValues) || allFormValues["Counselling on family planning"] !== "Yes") {
            return null;
          }
          const requiredError = StandardValidations.required(value);
          if (requiredError) return requiredError;
          if (isEarlyPostnatalCheck(allFormValues) && !["BTL", "IUCD", "None"].includes(value)) {
            return "Only BTL or IUCD is allowed within 48 hours before discharge.";
          }
          return null;
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
        componentType: "Dashes"
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
  const visitForBabyFormSection = computed(() => {
    const isBabyAlive = (allFormValues) => allFormValues["Status of baby"] === "Alive";
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
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Current weight",
        name: "Current weight",
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
      {
        componentType: "inputField",
        header: "Current Temperature",
        name: "Temperature",
        obsValueType: "value_numeric",
        unit: "C",
        type: "number",
        icon: icons.temprature,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.notRequiredVitalsTemperature(value) : null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Respiratory rate",
        name: "Respiratory Rate",
        obsValueType: "value_numeric",
        unit: "BMP",
        type: "number",
        icon: icons.respiratory,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.notRequiredVitalsRespiratoryRate(value) : null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Heart rate",
        name: "Heart Rate",
        obsValueType: "value_numeric",
        unit: "BMP",
        type: "number",
        icon: icons.pulse,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.notRequiredVitalsPulseRate(value) : null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Oxygen Saturation Rate",
        name: "Oxygen Saturation Rate",
        obsValueType: "value_numeric",
        unit: "%",
        type: "number",
        icon: icons.oxgenStaturation,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) ? StandardValidations.notRequiredVitalsOxygenSaturation(value) : null;
        }
      },
      {
        componentType: "Dashes"
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
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Baby weight (g)",
        name: "Baby weight",
        obsValueType: "value_numeric",
        unit: "g",
        type: "number",
        icon: icons.weight,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues);
        },
        validation: (value, allFormValues) => {
          if (!isBabyAlive(allFormValues)) return null;
          return StandardValidations.required(value) || StandardValidations.isNotEmptyandNumber(value) || StandardValidations.checkMinMax(value, 500, 8e3);
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Does the baby have any of the danger signs/complications?",
        name: "Danger signs",
        obsValueType: "value_coded",
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
        componentType: "Dashes"
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
        componentType: "Dashes"
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
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Type of immunization the baby received"]?.includes("BCG");
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Type of immunization the baby received"]?.includes("BCG") ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "dateInputField",
        header: "Enter date (Polio 0)",
        name: "Date polio given",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
        condition: (allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Type of immunization the baby received"]?.includes("Polio 0");
        },
        validation: (value, allFormValues) => {
          return isBabyAlive(allFormValues) && allFormValues["Type of immunization the baby received"]?.includes("Polio 0") ? StandardValidations.required(value) : null;
        }
      },
      {
        componentType: "Dashes"
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
        componentType: "Dashes"
      },
      {
        componentType: "dateInputField",
        header: "Date of Death",
        name: "Date of Death",
        obsValueType: "value_date",
        icon: icons.calenderPrimary,
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
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Dead";
        },
        validation: (value, allFormValues) => {
          return allFormValues["Status of baby"] === "Dead" ? StandardValidations.required(value) : null;
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
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
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Investigate cause of death",
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
        componentType: "Dashes"
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
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ion_card, { class: "section" }, {
          default: withCtx(() => [
            createVNode(_component_ion_card_content, null, {
              default: withCtx(() => [
                createVNode(StandardForm, {
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
                          name: "Back to profile",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("patient-profile"))
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
