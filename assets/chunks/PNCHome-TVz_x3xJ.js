import { c as computed, s as defineComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, v as documentTextOutline, K as modalController, aL as useRouter, a2 as onMounted, aG as IonContent, bY as chevronBackOutline, eP as paperPlaneOutline, ds as calendar, eQ as checkmarkDoneOutline, z as createElementBlock, J as Fragment, R as renderList, ce as personCircle, aN as people, bu as IonPage, f as ref } from './vendor-CZ_rDZM9.js';
import { n as icons, z as StandardForm, F as DynamicButton, q as StandardModal, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, u as useDemographicsStore, T as Toolbar, o as createModal, _ as _export_sfc } from '../index-OU0RFndh.js';
import { D as DemographicBar } from './DemographicBar-B3m-aBQf.js';
import { D as DashboardCards } from './DashboardCards-BR41gf0C.js';
import { s as storeToRefs } from './pinia-B4JSZd0E.js';
import { u as useLocation } from './useLocation-LEn6RASK.js';
import { N as NextAppointmentModal } from './NextAppointment-XEzbAPy_.js';

const { facilityList, getFacilities } = useLocation();
getFacilities();
const useReferralDetailsForm = () => {
  const referralDetailsFormSection = computed(() => {
    return [
      {
        componentType: "multiSelectInputField",
        header: "Facility",
        name: "facility",
        trackBy: "facility_id",
        openDirection: "auto",
        icon: icons.search,
        options: facilityList.value.facilities || facilityList.value
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "dateInputField",
        header: "Date of Referral*",
        name: "Date of referral",
        obsValueType: "value_date",
        grid: { s: "6" }
      },
      {
        componentType: "timeInputField",
        header: "Time of Referral*",
        name: "Time of referral",
        obsValueType: "value_text",
        grid: { s: "6" }
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "textAreaField",
        header: "Reason for Referral (Free text)",
        name: "reason for referral",
        obsValueType: "value_text",
        placeholder: "Enter reason for referral"
      },
      {
        componentType: "Dashes"
      },
      {
        componentType: "textAreaField",
        header: "Woman's Condition on Referral",
        name: "condition on referral",
        obsValueType: "value_text",
        placeholder: "Describe condition on referral"
      }
    ];
  });
  return {
    referralDetailsFormSection
  };
};

const _hoisted_1$2 = { class: "content-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PNCReferral",
  setup(__props) {
    const { referralDetailsFormSection } = useReferralDetailsForm();
    const { formRef } = useExposeFromStandardForm();
    const saveReferral = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() !== null) return toastWarning("Please fill all the required fields");
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.REFERRAL)) toastSuccess("ANC referral details have been created");
      formRef.value?.resetForm();
      modalController.dismiss();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Referral Form",
        subtitle: "PNC Patient Referral",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save Referral",
            onClick: saveReferral,
            fill: "solid",
            class: "save-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(StandardForm, {
              formData: unref(referralDetailsFormSection),
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"])
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const useDischargeWomanForm = () => {
  const dischargeWomanFormSection = computed(() => {
    return [
      {
        componentType: "radioButtonField",
        header: "Reason for ending PNC?",
        name: "Discharge status of woman",
        obsValueType: "value_coded",
        type: "inline",
        options: [
          {
            label: "Discharged",
            value: "Discharged"
          },
          {
            label: "Absconded",
            value: "Absconded"
          },
          {
            label: "Death",
            value: "Death"
          }
        ]
      },
      {
        componentType: "Dashes",
        condition: (allFormValues) => {
          return allFormValues["Discharge status of woman"] === "Discharged";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Postpartum family planning counselling done?",
        name: "Postpartum family planning counselling",
        obsValueType: "value_coded",
        offset: "1",
        grid: { s: "11" },
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
          return allFormValues["Discharge status of woman"] === "Discharged";
        }
      },
      {
        componentType: "Dashes",
        offset: "1",
        grid: { s: "11" }
      },
      {
        componentType: "radioButtonField",
        header: "Postpartum family planning methods provided?",
        name: "Postpartum family planning methods provided",
        obsValueType: "value_coded",
        offset: "1",
        grid: { s: "11" },
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
          return allFormValues["Discharge status of woman"] === "Discharged";
        }
      },
      {
        componentType: "radioButtonField",
        header: "Select the method provided",
        name: "Postpartum family planning method",
        obsValueType: "value_coded",
        offset: "2",
        grid: { s: "10" },
        options: [
          {
            label: "IUCD",
            value: "IUCD"
          },
          {
            label: "BTL",
            value: "BTL"
          }
        ],
        condition: (allFormValues) => {
          return allFormValues["Discharge status of woman"] === "Discharged" && allFormValues["Postpartum family planning methods provided"] === "Yes";
        }
      },
      {
        componentType: "Dashes",
        offset: "1",
        grid: { s: "11" }
      },
      {
        componentType: "dateInputField",
        header: "Date of Death",
        name: "Date of Death",
        obsValueType: "value_date",
        condition: (allFormValues) => {
          return allFormValues["Discharge status of woman"] === "Death";
        },
        grid: { s: "5.5" },
        offset: "1"
      },
      {
        componentType: "inputField",
        header: "Time of Death",
        type: "time",
        name: "Time of Death",
        obsValueType: "value_text",
        condition: (allFormValues) => {
          return allFormValues["Discharge status of woman"] === "Death";
        },
        grid: { s: "5.5" }
      },
      {
        componentType: "textAreaField",
        header: "Cause of death (Free text)",
        name: "cause of death",
        obsValueType: "value_text",
        placeholder: "Enter cause of death",
        condition: (allFormValues) => {
          return allFormValues["Discharge status of woman"] === "Death";
        },
        offset: "1",
        grid: { s: "11" }
      }
    ];
  });
  return {
    dischargeWomanFormSection
  };
};

const _hoisted_1$1 = { class: "content-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EndPNC",
  setup(__props) {
    const { dischargeWomanFormSection } = useDischargeWomanForm();
    const { formRef } = useExposeFromStandardForm();
    const router = useRouter();
    const saveData = async () => {
      const data = formRef.value?.getFormValues();
      if (formRef.value?.validateForm() !== null) return toastWarning("Please fill all the required fields");
      if (await ObservationService.buildSaveObs(data, EncounterTypeId.END_LABOUR_PROGRAM)) toastSuccess("ANC referral details have been created");
      formRef.value?.resetForm();
      router.push("/patient-profile");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "End PNC",
        headerIcon: unref(documentTextOutline)
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Save",
            onClick: saveData,
            fill: "solid",
            class: "submit-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(StandardForm, {
              formData: unref(dischargeWomanFormSection),
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"])
          ])
        ]),
        _: 1
      }, 8, ["headerIcon"]);
    };
  }
});

const _hoisted_1 = { class: "dashboard-container" };
const _hoisted_2 = { class: "back-profile" };
const _hoisted_3 = { class: "dashboard-grid" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PNCHome",
  setup(__props) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const gravida = ref("");
    const cardsData = [
      { title: "Postnatal ward monitoring for mother", path: "/pnc/ward-monitoring-mother", icon: personCircle, isSaved: false },
      { title: "Postnatal ward monitoring for baby", path: "/pnc/baby-status", icon: people, isSaved: false }
    ];
    const navigateTo = (path) => {
      router.push({ path });
    };
    const nextAppointment = async () => {
      await createModal(NextAppointmentModal, { class: "medium-modal" });
    };
    const referralModal = async () => {
      await createModal(_sfc_main$2, { class: "medium-modal" });
    };
    const endPNCModal = async () => {
      await createModal(_sfc_main$1, { class: "medium-modal" });
    };
    const handleProfile = async () => {
      try {
        const gravidaValue = await ObservationService.getFirstObsValue(patient.value.patientID, "Gravida", "value_text");
        gravida.value = gravidaValue;
      } catch (error) {
        console.error("Error fetching gravida:", error);
      }
    };
    onMounted(() => {
      handleProfile();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(DynamicButton, {
                    name: "Back to profile",
                    iconSlot: "start",
                    fill: "clear",
                    icon: unref(chevronBackOutline),
                    onClick: _cache[0] || (_cache[0] = ($event) => navigateTo("/patient-profile"))
                  }, null, 8, ["icon"]),
                  createBaseVNode("div", null, [
                    createVNode(DynamicButton, {
                      name: "Referral",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(paperPlaneOutline),
                      onClick: referralModal,
                      class: "sub-button"
                    }, null, 8, ["icon"]),
                    createVNode(DynamicButton, {
                      name: "Schedule appointment",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(calendar),
                      onClick: nextAppointment,
                      class: "sub-button"
                    }, null, 8, ["icon"]),
                    createVNode(DynamicButton, {
                      name: "End PNC",
                      iconSlot: "start",
                      fill: "outline",
                      icon: unref(checkmarkDoneOutline),
                      onClick: endPNCModal,
                      class: "sub-button"
                    }, null, 8, ["icon"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_3, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(cardsData, (card, index) => {
                    return createVNode(DashboardCards, {
                      key: index,
                      icon: card.icon,
                      title: card.title,
                      isSaved: card.isSaved,
                      onClick: ($event) => !card.isSaved && navigateTo(card.path)
                    }, null, 8, ["icon", "title", "isSaved", "onClick"]);
                  }), 64))
                ])
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

const PNCHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8394ebf4"]]);

export { PNCHome as default };
