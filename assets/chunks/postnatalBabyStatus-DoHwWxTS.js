import { c as computed, s as defineComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, H as createCommentVNode, D as toDisplayString, a4 as normalizeClass, aL as useRouter, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, J as Fragment, R as renderList, bf as IonFooter, bu as IonPage, f as ref } from './vendor-DrpjccQs.js';
import { _ as _export_sfc, T as Toolbar, z as StandardForm, F as DynamicButton, K as ObservationService, b as EncounterTypeId, G as toastSuccess } from '../index-UzX4smS4.js';
import { D as DemographicBar } from './DemographicBar-BQbQNwDl.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-DwLoogW6.js';

const useBabyStatusDetailsForm = () => {
  const babyStatusDetailsFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Find or register baby",
        position: "left"
      },
      {
        componentType: "Slot",
        slotName: "findBabyPatient"
      },
      {
        componentType: "Dashes",
        grid: { s: "12" }
      },
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
        ]
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Full name of the baby",
        name: "Full name of the baby",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Baby sex?",
        name: "Sex",
        obsValueType: "value_coded",
        options: [
          {
            label: "Male",
            value: "Male"
          },
          {
            label: "Female",
            value: "Female"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "inputField",
        header: "Birth weight",
        name: "Weight",
        obsValueType: "value_numeric",
        unit: "Grams",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "inputField",
        header: "Current weight",
        name: "Current weight",
        obsValueType: "value_numeric",
        unit: "Grams",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Is the birth weight low?",
        name: "Low birth weight",
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
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Prematurity/Kangaroo?",
        name: "Prematurity/Kangaroo",
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
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "What is the condition at birth?",
        name: "Birth condition",
        obsValueType: "value_coded",
        options: [
          {
            label: "Very well",
            value: "Very well"
          },
          {
            label: "Asphyxia",
            value: "Asphyxia"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Resuscitation tempted",
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
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Birth condition"] === "Asphyxia";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Is the visit within",
        name: "Is the visit within",
        obsValueType: "value_coded",
        options: [
          {
            label: "Up to 48 hrs or before discharge",
            value: "Up to 48 hrs or before discharge"
          },
          {
            label: "2-7 days",
            value: "2-7 days"
          },
          {
            label: "8-42 days",
            value: "8-42 days"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "What type immunisation has been given?",
        name: "Immunisation given",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "BCG",
            value: "bcg"
          },
          {
            label: "Polio",
            value: "polio"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "dateInputField",
        header: "Date BCG given",
        name: "Date BCG given",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Immunisation given"]?.includes("bcg");
        }
      },
      {
        componentType: "dateInputField",
        header: "Date polio given",
        name: "Date polio given",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Immunisation given"]?.includes("polio");
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Tetracycline eye ointment given?",
        name: "Tetracycline eye ointment",
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
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Cord care (Chlorhexidine) used?",
        name: "Cord care",
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
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Vitamin K given?",
        name: "Vitamin K given",
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
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "checkboxField",
        header: "Danger signs",
        name: "Danger signs",
        obsValueType: "value_coded",
        type: "multiple",
        options: [
          {
            label: "None",
            value: "none"
          },
          {
            label: "Not able to feed",
            value: "not able to feed"
          },
          {
            label: "Fever (>37.5C)",
            value: "fever"
          },
          {
            label: "Hypothermia",
            value: "Hypothermia"
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
            value: "eye discharge"
          },
          {
            label: "Signs of cord infection",
            value: "signs of cord infection"
          },
          {
            label: "Jaundice",
            value: "jaundice"
          },
          {
            label: "Skin rashes",
            value: "skin rashes"
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
            label: "Other danger signs",
            value: "Other danger signs"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "inputField",
        header: "Specify",
        name: "Other danger signs notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Danger signs"]?.includes("Other danger signs");
        }
      },
      {
        componentType: "radioButtonField",
        header: "Was an intervention given?",
        name: "Was an intervention given?",
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
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Danger signs"].length > 0 && !allFormValues["Danger signs"]?.includes("None");
        }
      },
      {
        componentType: "inputField",
        header: "Describe the intervention",
        name: "Intervention notes",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Danger signs"]?.length > 0 && !allFormValues["Danger signs"]?.includes("None") && allFormValues["Was an intervention given?"] === "Yes";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Nevirapine given?",
        name: "Nevirapine given",
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
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "radioButtonField",
        header: "Cotrimoxazole prophylaxis?",
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
          return allFormValues["Status of baby"] === "Alive";
        }
      },
      {
        componentType: "Dashes"
      }
    ];
  });
  return {
    babyStatusDetailsFormSection
  };
};

const _hoisted_1$1 = {
  key: 0,
  class: "icon-container"
};
const _hoisted_2$1 = { class: "info-wrapper" };
const _hoisted_3$1 = { class: "child-name" };
const _hoisted_4$1 = { class: "child-meta" };
const _hoisted_5 = { class: "child-meta" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BabyCard",
  props: {
    data: {},
    isSelected: { type: Boolean, default: false }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["child-card", { "is-selected": __props.isSelected, "is-unselected": !__props.isSelected }]),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle", __props.data.id))
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["card-content", _ctx.alignClass])
        }, [
          __props.isSelected ? (openBlock(), createElementBlock("div", _hoisted_1$1, [..._cache[1] || (_cache[1] = [
            createBaseVNode("svg", {
              class: "check-icon",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M5 13l4 4L19 7"
              })
            ], -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("h3", _hoisted_3$1, toDisplayString(__props.data.name), 1),
            createBaseVNode("p", _hoisted_4$1, "Sex: " + toDisplayString(__props.data.sex), 1),
            createBaseVNode("p", _hoisted_5, "DOB: " + toDisplayString(__props.data.dob), 1)
          ])
        ], 2)
      ], 2);
    };
  }
});

const BabyCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-459e5347"]]);

const _hoisted_1 = {
  class: "custom-card",
  style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px" }
};
const _hoisted_2 = {
  key: 0,
  class: "baby-cards-container"
};
const _hoisted_3 = { class: "ion-padding ion-float-start" };
const _hoisted_4 = { class: "ion-padding ion-float-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalBabyStatus",
  setup(__props) {
    const router = useRouter();
    const postnatalBabyStatusRef = ref(null);
    const isSaving = ref(false);
    const { babyStatusDetailsFormSection } = useBabyStatusDetailsForm();
    const dummyBabies = ref([
      { id: 1, mrn: "MRN001", name: "Baby Amina", sex: "Female", dob: "01/01/2026" },
      { id: 2, mrn: "MRN002", name: "Baby Blessings", sex: "Male", dob: "02/01/2026" },
      { id: 3, mrn: "MRN003", name: "Baby Chikondi", sex: "Female", dob: "03/01/2026" }
    ]);
    const selectedBabyId = ref(null);
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString();
    };
    const toggleBaby = (id) => {
      const isSame = selectedBabyId.value === id;
      selectedBabyId.value = isSame ? null : id;
      if (!isSame) {
        const baby = dummyBabies.value.find((b) => b.id === id);
        if (!baby) return;
        postnatalBabyStatusRef.value?.setFormValue("Full name of the baby", baby.name);
        postnatalBabyStatusRef.value?.setFormValue("Sex", baby.sex);
      } else {
        postnatalBabyStatusRef.value?.setFormValue("Full name of the baby", "");
        postnatalBabyStatusRef.value?.setFormValue("Sex", "");
      }
    };
    const handleBabyPatientSelected = (fieldName, patient, updateValue, formValues) => {
      if (!patient) {
        postnatalBabyStatusRef.value?.resetForm();
        updateValue(fieldName, null);
        return;
      }
      console.log("Selected baby patient for postnatal monitoring:", patient);
      updateValue(fieldName, patient);
      const nameParts = [
        patient?.personInformation?.given_name || patient?.firstName,
        patient?.personInformation?.middle_name || patient?.middleName,
        patient?.personInformation?.family_name || patient?.lastName
      ].filter(Boolean);
      const fullName = nameParts.join(" ") || "Baby";
      const genderSource = patient?.personInformation?.gender || patient?.gender;
      let sexValue = "";
      if (genderSource) {
        const normalizedGender = String(genderSource).toUpperCase();
        if (normalizedGender === "M" || normalizedGender === "MALE") {
          sexValue = "Male";
        } else if (normalizedGender === "F" || normalizedGender === "FEMALE") {
          sexValue = "Female";
        } else {
          sexValue = String(genderSource);
        }
      }
      const dobRaw = patient?.personInformation?.birthdate || patient?.birthdate;
      const dobDisplay = dobRaw ? formatDate(dobRaw) : "-";
      const mrn = patient?.ID || patient?.patientID || patient?.person_id || "";
      const existingIndex = mrn ? dummyBabies.value.findIndex((b) => b.mrn && b.mrn === String(mrn)) : -1;
      const babyData = {
        id: existingIndex !== -1 ? dummyBabies.value[existingIndex].id : Date.now(),
        mrn: mrn ? String(mrn) : void 0,
        name: fullName,
        sex: sexValue || "-",
        dob: dobDisplay
      };
      if (existingIndex !== -1) {
        dummyBabies.value.splice(existingIndex, 1, babyData);
      } else {
        dummyBabies.value.push(babyData);
      }
      if (formValues["Status of baby"] === "Alive") {
        {
          postnatalBabyStatusRef.value?.setFormValue("Full name of the baby", fullName);
        }
        if (sexValue) {
          postnatalBabyStatusRef.value?.setFormValue("Sex", sexValue);
        }
      }
    };
    const openBackController = () => {
      router.push("/pnc/home");
    };
    const saveData = async () => {
      if (isSaving.value) return;
      isSaving.value = true;
      try {
        await onSubmit();
      } catch (error) {
        console.error("Failed to submit form data", error);
      } finally {
        isSaving.value = false;
      }
      setTimeout(() => {
        router.push("/pnc/home");
      }, 600);
    };
    const onSubmit = async () => {
      const data = postnatalBabyStatusRef.value?.getFormValues();
      if (Object.keys(data || {}).length === 0) return;
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.PNC_VISIT)) toastSuccess("Postnatal Baby Status data saved successfully");
      postnatalBabyStatusRef.value?.resetForm();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("h3", { style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px", "text-align": "center" } }, "Monitor Baby", -1)),
              createBaseVNode("div", _hoisted_1, [
                createVNode(StandardForm, {
                  ref_key: "postnatalBabyStatusRef",
                  ref: postnatalBabyStatusRef,
                  "form-data": unref(babyStatusDetailsFormSection)
                }, {
                  findBabyPatient: withCtx(({ formValues, updateValue }) => [
                    createVNode(FindRegisterPatient, {
                      onValueChanged: (fieldName, patient) => handleBabyPatientSelected(fieldName, patient, updateValue, formValues)
                    }, null, 8, ["onValueChanged"]),
                    dummyBabies.value.length ? (openBlock(), createElementBlock("div", _hoisted_2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(dummyBabies.value, (baby) => {
                        return openBlock(), createBlock(BabyCard, {
                          key: baby.id,
                          data: baby,
                          isSelected: selectedBabyId.value === baby.id,
                          onToggle: toggleBaby
                        }, null, 8, ["data", "isSelected"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["form-data"])
              ])
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(DynamicButton, {
                  color: "dark",
                  name: "back",
                  onClick: openBackController
                })
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(DynamicButton, {
                  name: isSaving.value ? "Saving..." : "Save",
                  disabled: isSaving.value,
                  onClick: saveData
                }, null, 8, ["name", "disabled"])
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

const postnatalBabyStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69ff7545"]]);

export { postnatalBabyStatus as default };
