import { s as defineComponent, a2 as onMounted, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bd as IonCardContent, H as createCommentVNode, O as createBlock, af as IonRow, C as createBaseVNode, bK as IonCard, aI as IonAccordionGroup, aH as IonAccordion, aq as IonItem, a5 as createTextVNode, J as Fragment, f as ref, c as computed } from './vendor-DrpjccQs.js';
import { a_ as List, z as StandardForm, F as DynamicButton, C as useExposeFromStandardForm, a1 as modifyFieldValue, S as Service, K as ObservationService, b as EncounterTypeId, t as toastWarning, G as toastSuccess, n as icons, y as StandardValidations, _ as _export_sfc } from '../index-DALWhtZ-.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { u as usePresentingComplaintsStore, p as previousComplaints } from './previousComplaints-CQMayOsR.js';
import { P as PatientComplaintsService } from './patient_complaints_service-5bcmW-8R.js';
import { D as DashBox } from './DashBox-BS8axHZ-.js';

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { style: { "align-content": "center" } };
const _hoisted_3 = {
  class: "ion-padding",
  slot: "content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PresentingComplaints",
  setup(__props, { expose: __expose }) {
    const presentingComplaintsStore = usePresentingComplaintsStore();
    const { presentingComplaints } = storeToRefs(presentingComplaintsStore);
    const iconsContent = ref(icons);
    const no_item = ref(true);
    const search_item = ref(false);
    const show_btn = ref(true);
    const display_item = ref(false);
    const presentingComplaintsList = ref([]);
    const complaints = ref([]);
    const accordionGroup = ref();
    const presentingComplaintsForm = computed(() => {
      return [
        {
          componentType: "multiSelectInputField",
          header: "Presenting Complaints",
          name: "PresentingComplaints",
          trackBy: "concept_id",
          icon: icons.search,
          hideSelected: true,
          validation: (value) => {
            if (isNameInData(value?.name, presentingComplaintsList.value)) {
              return "Presenting complaint already added";
            }
            return StandardValidations.required(value);
          },
          options: complaints.value,
          grid: { s: "6" }
        },
        {
          componentType: "inputField",
          header: "Duration",
          name: "duration",
          icon: icons.time,
          validation: (value) => {
            return StandardValidations.isNotEmptyandNumber(value);
          },
          grid: { s: "6" },
          unitOptions: [
            { label: "Hours", value: "Hours" },
            { label: "Days", value: "Days" },
            { label: "Weeks", value: "Weeks" },
            { label: "Months", value: "Months" },
            { label: "Years", value: "Years" }
          ],
          unitValidation: (unitValue) => {
            if (!unitValue || unitValue === "") {
              return "Please select a unit.";
            }
            return null;
          }
        },
        {
          componentType: "inputField",
          header: "Specify the presenting complaint(s)",
          name: "Other (specify)",
          icon: icons.editPen,
          validation: (value) => {
            if (isNameInData(value, presentingComplaintsList.value)) {
              return "Presenting complaint already added";
            }
            return StandardValidations.required(value);
          },
          condition: (data) => {
            return data?.PresentingComplaints?.name === "Other";
          }
        },
        {
          componentType: "Alert",
          condition: (allFormValues) => {
            return !!(StandardValidations.required(allFormValues?.PresentingComplaints?.name) != null);
          },
          backgroundColor: "lightyellow",
          textColor: "black",
          value: "Please search thoroughly for the complaint. If it is not listed, search and select the 'Other' option to specify the complaint.",
          name: "noMatchAlert"
        }
      ];
    });
    const { formRef } = useExposeFromStandardForm();
    const getPresentingDataLIst = async () => {
      complaints.value = await PatientComplaintsService.getComplaintsList("Presenting complaint");
      modifyFieldValue(presentingComplaints.value, "PresentingComplaints", "multiSelectData", complaints.value);
    };
    const displayInputFields = () => {
      no_item.value = false;
      show_btn.value = false;
      search_item.value = true;
    };
    const addNewRow = async () => {
      const data = formRef.value?.getFormValues();
      const validate = formRef.value?.validateForm();
      if (validate != null) return;
      buildPresentingComplaintsList(data);
      search_item.value = false;
      show_btn.value = true;
    };
    const buildPresentingComplaintsList = (data) => {
      const duration = data.duration + " " + data.duration_unit;
      const presentingComplainData = data.PresentingComplaints;
      const complaintName = presentingComplainData.name === "Other" ? data["Other (specify)"] : presentingComplainData.name;
      presentingComplaintsList.value.push({
        actionBtn: true,
        btn: ["delete"],
        name: complaintName,
        concept_id: presentingComplainData.concept_id,
        duration: presentingComplainData.duration,
        durationUnits: presentingComplainData.duration_unit,
        display: [complaintName, duration],
        data: [
          {
            concept_id: 8578,
            value_coded: presentingComplainData.concept_id,
            obs_datetime: Service.getSessionDate(),
            child: [
              {
                concept_id: presentingComplainData.concept_id,
                value_text: duration,
                obs_datetime: Service.getSessionDate()
              }
            ]
          }
        ]
      });
      formRef.value?.resetForm();
      display_item.value = true;
    };
    const isNameInData = (name, dataArray) => {
      return dataArray.some((item) => item.name === name);
    };
    const deletePresentingComplaintsList = (presentingComplaintsItem) => {
      presentingComplaintsList.value = presentingComplaintsList.value.filter((item) => item.display[0] !== presentingComplaintsItem.name);
    };
    const onSubmit = async () => {
      const latestObs = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.PRESENTING_COMPLAINTS);
      const presentingComplaints2 = presentingComplaintsList.value.flatMap((item) => item.data);
      if (presentingComplaints2.length <= 0 && latestObs.length <= 0) return toastWarning("Presenting complaints is required");
      if (presentingComplaints2.length <= 0) return;
      await ObservationService.addObsToEncounterPatient(presentingComplaints2, EncounterTypeId.PRESENTING_COMPLAINTS);
      toastSuccess("Presenting complaints saved successful");
      presentingComplaintsList.value = [];
    };
    onMounted(async () => {
      await getPresentingDataLIst();
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_label = resolveComponent("ion-label");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), null, {
          default: withCtx(() => [
            createVNode(unref(IonCardContent), null, {
              default: withCtx(() => [
                createVNode(DashBox, {
                  status: no_item.value,
                  content: "No presenting complaints added"
                }, null, 8, ["status"]),
                display_item.value ? (openBlock(), createElementBlock("span", _hoisted_1, [
                  createVNode(List, {
                    listData: presentingComplaintsList.value,
                    "onClicked:delete": deletePresentingComplaintsList
                  }, null, 8, ["listData"])
                ])) : createCommentVNode("", true),
                search_item.value ? (openBlock(), createBlock(unref(IonRow), { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(StandardForm, {
                      formData: presentingComplaintsForm.value,
                      ref_key: "formRef",
                      ref: formRef
                    }, null, 8, ["formData"]),
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(DynamicButton, {
                        fill: "clear",
                        icon: iconsContent.value.plus,
                        iconSlot: "icon-only",
                        "onClicked:btn": _cache[0] || (_cache[0] = ($event) => addNewRow()),
                        name: "Save"
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                show_btn.value ? (openBlock(), createBlock(unref(IonRow), {
                  key: 2,
                  style: { "margin-top": "10px" }
                }, {
                  default: withCtx(() => [
                    createVNode(DynamicButton, {
                      fill: "clear",
                      icon: iconsContent.value.plus,
                      iconSlot: "icon-only",
                      "onClicked:btn": _cache[1] || (_cache[1] = ($event) => displayInputFields()),
                      name: "Add new presenting complaints"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonAccordionGroup), {
              ref_key: "accordionGroup",
              ref: accordionGroup,
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonAccordion), {
                  value: "first",
                  "toggle-icon-slot": "start",
                  style: { "border-radius": "10px", "background-color": "#fff" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonItem), {
                      slot: "header",
                      color: "light"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ion_label, { class: "previousLabel" }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode("Previous presenting complaints", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_3, [
                      createVNode(previousComplaints)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const PresentingComplaints = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57f85a4c"]]);

export { PresentingComplaints as P };
