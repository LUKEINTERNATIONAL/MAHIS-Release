import { c as computed, s as defineComponent, aN as useRouter, a3 as onMounted, w as watch, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aI as IonContent, C as createBaseVNode, b$ as chevronBackOutline, N as IonButton, L as IonIcon, f6 as linkOutline, z as createElementBlock, J as Fragment, S as renderList, D as toDisplayString, H as createCommentVNode, bh as IonFooter, bx as IonPage, f as ref, n as nextTick } from './vendor-Cddp3aFV.js';
import { n as icons, u as useDemographicsStore, T as Toolbar, F as DynamicButton, z as StandardForm, b7 as RelationshipService, o as createModal, t as toastWarning, G as toastSuccess, K as ObservationService, b as EncounterTypeId, _ as _export_sfc } from '../index-CKPE6QZm.js';
import { D as DemographicBar } from './DemographicBar-2vUtEF2h.js';
import { B as BabyCard } from './BabyCard-BzYsYOOz.js';
import { L as LinkBabyModal } from './LinkBabyModal-DGCSt57d.js';

const useBabyStatusDetailsForm = () => {
  const babyStatusDetailsFormSection = computed(() => {
    return [
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
        header: "Current weight of baby",
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
        header: "Is the current weight low?",
        name: "Weight loss",
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
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Low current weight"] === "Yes";
        }
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
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Low current weight"] === "Yes";
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
        icon: icons.calenderPrimary,
        showTodayButton: true,
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
        icon: icons.calenderPrimary,
        showTodayButton: true,
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
        name: "Tetracycline eye ointment given?",
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
        name: "Vitamin K given?",
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
        twoColumns: true,
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
        header: "Other (specify)",
        name: "Other danger signs",
        icon: icons.editPen,
        obsValueType: "value_text",
        validation: (value) => {
          if (value.length < 3) {
            return "Other danger signs must be at least 3 characters";
          }
          return null;
        },
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Danger signs"]?.includes("Other danger signs");
        }
      },
      {
        componentType: "Dashes",
        grid: { s: "12" },
        condition: (allFormValues) => {
          return allFormValues["Status of baby"] === "Alive" && allFormValues["Danger signs"]?.length > 0 && !allFormValues["Danger signs"]?.includes("None");
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

const _hoisted_1 = { class: "back_profile" };
const _hoisted_2 = {
  class: "custom-card",
  style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px" }
};
const _hoisted_3 = { class: "find-baby-section" };
const _hoisted_4 = { class: "find-baby-header" };
const _hoisted_5 = {
  key: 0,
  class: "baby-cards-container"
};
const _hoisted_6 = {
  key: 1,
  class: "no-linkage-section"
};
const _hoisted_7 = { class: "no-children-message" };
const _hoisted_8 = { class: "ion-padding ion-float-start" };
const _hoisted_9 = { class: "ion-padding ion-float-end" };
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
    const babyPatientByMrn = ref(/* @__PURE__ */ new Map());
    const selectedBabyMrn = ref(null);
    const babyPatient = ref(null);
    async function loadFullBabyPatient(mrn) {
      const raw = babyPatientByMrn.value.get(mrn);
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
    const mrnCacheByPatientId = /* @__PURE__ */ new Map();
    async function resolveMrnByPatientId(patientId) {
      if (patientId == null) return;
      const key = String(patientId);
      const cached = mrnCacheByPatientId.get(key);
      if (cached) return cached;
      try {
        const fullRecord = await demographicsStore.getPatientData(patientId);
        const extractedMrn = demographicsStore.getPatientIdentifier(fullRecord, 3);
        const mrn = extractedMrn ? String(extractedMrn) : key;
        mrnCacheByPatientId.set(key, mrn);
        return mrn;
      } catch (e) {
        mrnCacheByPatientId.set(key, key);
        return key;
      }
    }
    async function resolveMrnsForPatientIds(patientIds, concurrency = 6) {
      const unique = Array.from(new Set(patientIds.filter((x) => x != null).map((x) => String(x))));
      const out = /* @__PURE__ */ new Map();
      let idx = 0;
      async function worker() {
        while (idx < unique.length) {
          const current = unique[idx++];
          const mrn = await resolveMrnByPatientId(current);
          if (mrn) out.set(current, mrn);
        }
      }
      await Promise.all(Array.from({ length: Math.min(concurrency, unique.length) }, () => worker()));
      return out;
    }
    const loadBabiesFromLatestDelivery = async () => {
      try {
        const children = await RelationshipService.children_from_latest_delivery();
        console.log("linked children of the mother ", children);
        if (!Array.isArray(children) || children.length === 0) {
          noChildrenMessage.value = "No child is linked or attached to this mother from the latest delivery.";
          return;
        }
        noChildrenMessage.value = null;
        selectedBabyMrn.value = null;
        babyPatient.value = null;
        const patientIds = children.map((c) => c.patient_id ?? c.person_id ?? c.ID);
        const mrnByPatientId = await resolveMrnsForPatientIds(patientIds, 6);
        const byMrn = /* @__PURE__ */ new Map();
        const mapped = children.map((child, index) => {
          const id = Number(child.relationship_id || child.person_id || index + 1);
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
          const patientId = child.patient_id ?? child.person_id ?? child.ID;
          const mrnStr = (patientId != null ? mrnByPatientId.get(String(patientId)) : void 0) || (patientId != null ? String(patientId) : void 0) || String(id);
          byMrn.set(mrnStr, child);
          return {
            id,
            mrn: mrnStr,
            name: fullName,
            sex: sexValue,
            dob: dobDisplay
          };
        });
        const uniqueByMrn = /* @__PURE__ */ new Map();
        for (const b of mapped) uniqueByMrn.set(b.mrn, b);
        babies.value = Array.from(uniqueByMrn.values());
        babyPatientByMrn.value = byMrn;
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
        selectedBabyMrn.value = baby.mrn;
        postnatalBabyStatusRef.value?.setFormValue("findBabyPatient", baby.mrn);
        await loadFullBabyPatient(baby.mrn);
        await nextTick();
      }
    });
    const toggleBaby = async (mrn) => {
      const isSame = selectedBabyMrn.value === mrn;
      selectedBabyMrn.value = isSame ? null : mrn;
      if (!isSame) {
        const baby = babies.value.find((b) => b.mrn === mrn);
        if (!baby) return;
        postnatalBabyStatusRef.value?.setFormValue("findBabyPatient", mrn);
        await loadFullBabyPatient(mrn);
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
      if (babies.value.length > 0 && selectedBabyMrn.value === null) {
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
      const currentWeight = data?.["Current weight"];
      const selectedMrn = selectedBabyMrn.value;
      const pncData = { ...data };
      delete pncData["Current weight"];
      const savedPnc = await ObservationService.buildSaveRelativeObs(patient, pncData, EncounterTypeId.PNC_WARD_MONITORING_BABY);
      const basePatient = savedPnc ?? patient;
      let savedVitals = null;
      if (currentWeight !== null && currentWeight !== void 0 && currentWeight !== "") {
        try {
          savedVitals = await ObservationService.buildSaveRelativeObs(
            basePatient,
            {
              "Weight (grams)": currentWeight,
              obsValueType: { "Weight (grams)": "value_numeric" }
            },
            EncounterTypeId.VITALS
          );
        } catch (e) {
          console.warn("Could not save current weight under Vitals encounter:", e);
        }
      }
      if (savedPnc || savedVitals) {
        postnatalBabyStatusRef.value?.resetForm();
        if (selectedMrn) {
          selectedBabyMrn.value = selectedMrn;
          postnatalBabyStatusRef.value?.setFormValue("findBabyPatient", selectedMrn);
        }
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
              createBaseVNode("div", _hoisted_1, [
                createVNode(DynamicButton, {
                  name: "Back to PNC Home",
                  iconSlot: "start",
                  fill: "clear",
                  icon: unref(chevronBackOutline),
                  "font-weight": "600",
                  onClick: openBackController
                }, null, 8, ["icon"])
              ]),
              _cache[2] || (_cache[2] = createBaseVNode("h3", { style: { "padding": "16px", "margin": "0 auto", "max-width": "70%", "margin-top": "5px", "text-align": "center" } }, "Monitor Baby", -1)),
              createBaseVNode("div", _hoisted_2, [
                createVNode(StandardForm, {
                  subtitle: "Select a baby (if any linked to this mother)",
                  ref_key: "postnatalBabyStatusRef",
                  ref: postnatalBabyStatusRef,
                  "form-data": unref(babyStatusDetailsFormSection)
                }, {
                  findBabyPatient: withCtx(({ formValues, updateValue }) => [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(unref(IonButton), {
                          color: "success",
                          onClick: openLinkBabyModal,
                          class: "link-baby-btn"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), {
                              icon: unref(linkOutline),
                              slot: "start",
                              class: "link-baby-icon"
                            }, null, 8, ["icon"]),
                            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "link-baby-text" }, "Link baby", -1))
                          ]),
                          _: 1
                        })
                      ]),
                      babies.value.length ? (openBlock(), createElementBlock("div", _hoisted_5, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(babies.value, (baby) => {
                          return openBlock(), createBlock(BabyCard, {
                            key: baby.mrn,
                            data: baby,
                            isSelected: selectedBabyMrn.value === baby.mrn,
                            onToggle: toggleBaby
                          }, null, 8, ["data", "isSelected"]);
                        }), 128))
                      ])) : noChildrenMessage.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                        createBaseVNode("p", _hoisted_7, toDisplayString(noChildrenMessage.value), 1),
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
              createBaseVNode("div", _hoisted_8, [
                createVNode(DynamicButton, {
                  color: "dark",
                  name: "back",
                  onClick: openBackController
                })
              ]),
              createBaseVNode("div", _hoisted_9, [
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

const postnatalBabyStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53b4b4a9"]]);

export { postnatalBabyStatus as default };
