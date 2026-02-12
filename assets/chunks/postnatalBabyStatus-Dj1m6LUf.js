import { c as computed, s as defineComponent, y as openBlock, O as createBlock, F as unref, bK as IonCard, a4 as normalizeClass, B as withCtx, A as createVNode, C as createBaseVNode, D as toDisplayString, z as createElementBlock, a5 as createTextVNode, H as createCommentVNode, L as IonIcon, cn as checkmarkCircle, bd as IonCardContent, x as resolveComponent, a$ as personOutline, f as ref, K as modalController, aL as useRouter, a2 as onMounted, w as watch, aG as IonContent, N as IonButton, bG as addOutline, J as Fragment, R as renderList, bf as IonFooter, bu as IonPage, n as nextTick } from './vendor-DrpjccQs.js';
import { _ as _export_sfc, u as useDemographicsStore, z as StandardForm, F as DynamicButton, r as StandardModal, t as toastWarning, b5 as RelationshipService, J as savePatientRecord, K as ObservationService, b as EncounterTypeId, G as toastSuccess, n as icons, T as Toolbar, o as createModal } from '../index-CzDIs3ea.js';
import { D as DemographicBar } from './DemographicBar-BWr-xoH2.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-bTEtryod.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';

const useBabyStatusDetailsForm = () => {
  const babyStatusDetailsFormSection = computed(() => {
    return [
      {
        componentType: "Heading",
        name: "Current Babies",
        header: "Registered children",
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
        condition: (allFormValues) => {
          const selected = allFormValues["findBabyPatient"];
          return selected !== null && selected !== void 0 && selected !== "";
        },
        validation: (val) => !val || val === "" ? "Status of the baby is required" : null,
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
        header: "Birth weight",
        name: "Birth weight",
        obsValueType: "value_numeric",
        unit: "Grams",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive";
        },
        validation: (val, allFormValues) => {
          if (allFormValues["Status of baby"] !== "Alive") return null;
          if (val === null || val === void 0 || val === "") return "Birth weight is required";
          const n = Number(val);
          if (Number.isNaN(n)) return "Birth weight must be a number";
          if (n < 1e3 || n > 5e3) return "Birth weight must be between 1000 and 5000 grams";
          return null;
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
        validation: (val, allFormValues) => {
          if (allFormValues["Status of baby"] !== "Alive") return null;
          if (val === null || val === void 0 || val === "") return "Current weight is required";
          const n = Number(val);
          if (Number.isNaN(n)) return "Current weight must be a number";
          if (n < 1e3 || n > 5e3) return "Current weight must be between 1000 and 5000 grams";
          return null;
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select an option" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select an option" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select condition at birth" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && allFormValues["Birth condition"] === "Asphyxia" && (val === null || val === "") ? "Please select an option" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select visit timing" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && allFormValues["Immunisation given"]?.includes("bcg") && (val === null || val === "") ? "Date BCG given is required" : null
      },
      {
        componentType: "dateInputField",
        header: "Date polio given",
        name: "Date polio given",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Immunisation given"]?.includes("polio");
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && allFormValues["Immunisation given"]?.includes("polio") && (val === null || val === "") ? "Date polio given is required" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select an option" : null
      },
      {
        componentType: "Dashes"
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select an option" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select an option" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val.length === 0) ? "Please select at least one danger sign" : null
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
        name: "Was an intervention given",
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select an option" : null
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
        },
        validation: (val, allFormValues) => allFormValues["Status of baby"] === "Alive" && (val === null || val === "") ? "Please select an option" : null
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

const _hoisted_1$2 = { class: "info-wrapper" };
const _hoisted_2$2 = { class: "avatar-section" };
const _hoisted_3$1 = { class: "initials-avatar child-bg" };
const _hoisted_4$1 = { class: "text-section" };
const _hoisted_5$1 = { class: "rel-name" };
const _hoisted_6$1 = {
  key: 0,
  class: "rel-meta"
};
const _hoisted_7$1 = { class: "rel-meta" };
const _hoisted_8$1 = {
  key: 0,
  class: "action-section"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BabyCard",
  props: {
    data: {},
    isSelected: { type: Boolean, default: false }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const initials = computed(() => {
      if (!props.data?.name) return "?";
      const parts = props.data.name.trim().split(/\s+/);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return props.data.name.slice(0, 2).toUpperCase() || "?";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), {
        class: normalizeClass(["rel-card child-card ion-no-margin", { "is-selected": __props.isSelected }]),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle", __props.data.id))
      }, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), { class: "rel-content" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["status-accent accent-child", { "accent-selected": __props.isSelected }])
              }, null, 2),
              createBaseVNode("div", _hoisted_1$2, [
                createBaseVNode("div", _hoisted_2$2, [
                  createBaseVNode("div", _hoisted_3$1, toDisplayString(initials.value), 1)
                ]),
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("div", _hoisted_5$1, toDisplayString(__props.data.name), 1),
                  __props.data.mrn ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                    createBaseVNode("span", null, [
                      _cache[1] || (_cache[1] = createBaseVNode("strong", null, "ID:", -1)),
                      createTextVNode(" " + toDisplayString(__props.data.mrn), 1)
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_7$1, [
                    createBaseVNode("span", null, [
                      _cache[2] || (_cache[2] = createBaseVNode("strong", null, "Gender:", -1)),
                      createTextVNode(" " + toDisplayString(__props.data.sex || "N/A"), 1)
                    ]),
                    _cache[4] || (_cache[4] = createBaseVNode("span", { class: "dot" }, "•", -1)),
                    createBaseVNode("span", null, [
                      _cache[3] || (_cache[3] = createBaseVNode("strong", null, "DOB:", -1)),
                      createTextVNode(" " + toDisplayString(__props.data.dob || "N/A"), 1)
                    ])
                  ])
                ]),
                __props.isSelected ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                  createVNode(unref(IonIcon), {
                    icon: unref(checkmarkCircle),
                    class: "selected-icon"
                  }, null, 8, ["icon"])
                ])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});

const BabyCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9e9c63ab"]]);

const _hoisted_1$1 = { class: "ion-padding" };
const _hoisted_2$1 = {
  class: "custom-card",
  style: { "border": "1px dotted #ececec", "border-radius": "8px" }
};
const CHILD_RELATIONSHIP_TYPE_ID = 32;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LinkBabyModal",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const deliveryDateFormFields = computed(() => [
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
      }
    ]);
    const babyRecord = ref({});
    const formRef = ref(null);
    function setBabyDemographics(_fieldName, value) {
      babyRecord.value = value ?? {};
    }
    async function onSave() {
      if (lodashExports.isEmpty(babyRecord.value) || !babyRecord.value?.ID) {
        toastWarning("Please select or register a baby first.");
        return;
      }
      const validationResult = formRef.value?.validateForm?.();
      if (validationResult != null && Object.keys(validationResult).length > 0) {
        toastWarning("Please fix the validation errors before saving.");
        return;
      }
      const motherPatient = demographicsStore.patient;
      if (!motherPatient?.ID) {
        toastWarning("Mother record is not available. Cannot link baby.");
        return;
      }
      try {
        await RelationshipService.createRelationship(babyRecord.value, motherPatient, CHILD_RELATIONSHIP_TYPE_ID);
        await savePatientRecord(babyRecord.value, true);
      } catch (e) {
        console.error("Failed to create relationship or save baby record:", e);
        toastWarning("Failed to link baby. Please try again.");
        return;
      }
      const formData = formRef.value?.getFormValues?.();
      if (formData && Object.keys(formData).length > 0) {
        try {
          await ObservationService.buildSaveObs(formData, EncounterTypeId.Labour_and_delivery_visit);
        } catch (e) {
          console.warn("Could not save delivery date:", e);
          toastWarning(
            "Baby Relationship created, but failed to save delivery date. Please try saving delivery date separately from the baby's record."
          );
        }
      }
      toastSuccess("Baby Relationship Successfully Created");
      await modalController.dismiss(babyRecord.value);
    }
    return (_ctx, _cache) => {
      const _component_ion_card_content = resolveComponent("ion-card-content");
      return openBlock(), createBlock(StandardModal, {
        title: "Child Mother Linkage",
        subtitle: "Search or register the baby, then enter delivery date",
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
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(FindRegisterPatient, {
              patient: babyRecord.value,
              onValueChanged: _cache[0] || (_cache[0] = (fieldName, value) => setBabyDemographics(fieldName, value))
            }, null, 8, ["patient"]),
            _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_ion_card_content, null, {
                default: withCtx(() => [
                  createVNode(StandardForm, {
                    ref_key: "formRef",
                    ref: formRef,
                    "form-data": deliveryDateFormFields.value
                  }, null, 8, ["form-data"])
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const LinkBabyModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4006414c"]]);

const _hoisted_1 = {
  class: "custom-card",
  style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px" }
};
const _hoisted_2 = { class: "find-baby-section" };
const _hoisted_3 = { class: "find-baby-header" };
const _hoisted_4 = {
  key: 0,
  class: "baby-cards-container"
};
const _hoisted_5 = {
  key: 1,
  class: "no-linkage-section"
};
const _hoisted_6 = { class: "no-children-message" };
const _hoisted_7 = { class: "ion-padding ion-float-start" };
const _hoisted_8 = { class: "ion-padding ion-float-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "postnatalBabyStatus",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const postnatalBabyStatusRef = ref(null);
    const isSaving = ref(false);
    const { babyStatusDetailsFormSection } = useBabyStatusDetailsForm();
    const babies = ref([]);
    const noChildrenMessage = ref(null);
    const babyPatientByCardId = ref(/* @__PURE__ */ new Map());
    const selectedBabyId = ref(null);
    const babyPatient = ref(null);
    async function loadFullBabyPatient(cardId) {
      const raw = babyPatientByCardId.value.get(cardId);
      if (!raw) {
        babyPatient.value = null;
        return;
      }
      const patientId = raw.patient_id ?? raw.person_id ?? raw.ID;
      if (patientId == null) {
        babyPatient.value = raw;
        return;
      }
      try {
        const fullRecord = await demographicsStore.getPatientData(patientId);
        babyPatient.value = fullRecord ?? raw;
      } catch (e) {
        console.warn("Could not load full baby patient record, using raw object:", e);
        babyPatient.value = raw;
      }
    }
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString();
    };
    const loadBabiesFromLatestDelivery = async () => {
      try {
        const children = await RelationshipService.children_from_latest_delivery();
        console.log("linked children of the mother ", children);
        if (!Array.isArray(children) || children.length === 0) {
          noChildrenMessage.value = "No child is linked or attached to this mother from the latest delivery.";
          return;
        }
        noChildrenMessage.value = null;
        selectedBabyId.value = null;
        babyPatient.value = null;
        const byCardId = /* @__PURE__ */ new Map();
        babies.value = children.map((child, index) => {
          const id = Number(child.relationship_id || child.person_id || index + 1);
          byCardId.set(id, child);
          const nameParts = [child.given_name, child.middle_name, child.family_name].filter(Boolean);
          const fullName = nameParts.join(" ") || "Baby";
          const genderSource = child.gender || child.personInformation?.gender;
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
          } else {
            sexValue = "-";
          }
          const dobRaw = child.birthdate || child.personInformation?.birthdate;
          const dobDisplay = dobRaw ? formatDate(dobRaw) : "-";
          const mrn = child.patient_id || child.person_id || child.ID;
          return {
            id,
            mrn: mrn ? String(mrn) : void 0,
            name: fullName,
            sex: sexValue,
            dob: dobDisplay
          };
        });
        babyPatientByCardId.value = byCardId;
      } catch (error) {
        console.error("Failed to load babies from latest delivery", error);
        noChildrenMessage.value = "Unable to load babies for this mother. Please try again or check relationship details.";
      }
    };
    onMounted(() => {
      loadBabiesFromLatestDelivery();
    });
    watch(babies, async (newBabies) => {
      if (newBabies.length === 1) {
        const baby = newBabies[0];
        selectedBabyId.value = baby.id;
        postnatalBabyStatusRef.value?.setFormValue("findBabyPatient", baby.id);
        await loadFullBabyPatient(baby.id);
        await nextTick();
      }
    });
    const toggleBaby = async (id) => {
      const isSame = selectedBabyId.value === id;
      selectedBabyId.value = isSame ? null : id;
      if (!isSame) {
        const baby = babies.value.find((b) => b.id === id);
        if (!baby) return;
        postnatalBabyStatusRef.value?.setFormValue("findBabyPatient", id);
        await loadFullBabyPatient(id);
        await nextTick();
      } else {
        babyPatient.value = null;
        postnatalBabyStatusRef.value?.setFormValue("findBabyPatient", null);
      }
    };
    const openBackController = () => {
      router.push("/pnc/home");
    };
    async function openLinkBabyModal() {
      await createModal(LinkBabyModal, {
        class: "large-medium-width-modal"
      });
      const patientId = demographicsStore.patient?.patientID ?? demographicsStore.patient?.ID;
      if (patientId) {
        await demographicsStore.setPatientRecord({ patientID: patientId });
      }
      await loadBabiesFromLatestDelivery();
    }
    const saveData = async () => {
      if (isSaving.value) return;
      if (babies.value.length > 0 && selectedBabyId.value === null) {
        toastWarning("Please select a baby to record status.");
        return;
      }
      const errors = postnatalBabyStatusRef.value?.validateForm?.();
      if (errors != null && Object.keys(errors).length > 0) {
        toastWarning("Please fix the validation errors before saving.");
        return;
      }
      isSaving.value = true;
      try {
        const success = await onSubmit();
        if (success) {
          toastSuccess("Postnatal Baby Status data saved successfully");
        }
      } catch (error) {
        console.error("Failed to submit form data", error);
      } finally {
        isSaving.value = false;
      }
    };
    async function onSubmit() {
      const data = postnatalBabyStatusRef.value?.getFormValues();
      if (!data || Object.keys(data).length === 0) return false;
      const patient = babyPatient.value;
      if (!patient) {
        toastWarning("Baby patient record is not loaded. Please select the baby again and try saving.");
        return false;
      }
      const saved = await ObservationService.buildSaveRelativeObs(patient, data, EncounterTypeId.PNC_VISIT);
      if (saved) {
        postnatalBabyStatusRef.value?.resetForm();
        return true;
      }
      return false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(DemographicBar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              _cache[2] || (_cache[2] = createBaseVNode("h3", { style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px", "text-align": "center" } }, "Monitor Baby", -1)),
              createBaseVNode("div", _hoisted_1, [
                createVNode(StandardForm, {
                  ref_key: "postnatalBabyStatusRef",
                  ref: postnatalBabyStatusRef,
                  "form-data": unref(babyStatusDetailsFormSection)
                }, {
                  findBabyPatient: withCtx(({ formValues, updateValue }) => [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(unref(IonButton), {
                          color: "success",
                          onClick: openLinkBabyModal,
                          class: "link-baby-btn"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              icon: unref(addOutline),
                              slot: "start"
                            }, null, 8, ["icon"]),
                            _cache[0] || (_cache[0] = createTextVNode(" Add baby ", -1))
                          ]),
                          _: 1
                        })
                      ]),
                      babies.value.length ? (openBlock(), createElementBlock("div", _hoisted_4, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(babies.value, (baby) => {
                          return openBlock(), createBlock(BabyCard, {
                            key: baby.id,
                            data: baby,
                            isSelected: selectedBabyId.value === baby.id,
                            onToggle: toggleBaby
                          }, null, 8, ["data", "isSelected"]);
                        }), 128))
                      ])) : noChildrenMessage.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                        createBaseVNode("p", _hoisted_6, toDisplayString(noChildrenMessage.value), 1),
                        _cache[1] || (_cache[1] = createBaseVNode("p", { class: "no-linkage-hint" }, "You can link a baby to this mother so you can record baby status.", -1))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }, 8, ["form-data"])
              ])
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_7, [
                createVNode(DynamicButton, {
                  color: "dark",
                  name: "back",
                  onClick: openBackController
                })
              ]),
              createBaseVNode("div", _hoisted_8, [
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

const postnatalBabyStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a99586ea"]]);

export { postnatalBabyStatus as default };
