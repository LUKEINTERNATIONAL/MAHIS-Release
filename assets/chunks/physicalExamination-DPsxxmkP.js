import { s as defineComponent, y as openBlock, O as createBlock, f as ref, c as computed, a2 as onMounted, z as createElementBlock, A as createVNode, B as withCtx, F as unref, bL as IonCard, J as Fragment, bG as IonModal, I as IonHeader, aD as IonToolbar, aE as IonTitle, C as createBaseVNode, L as IonIcon, eP as eggOutline, a5 as createTextVNode, D as toDisplayString, be as IonButtons, N as IonButton, G as closeCircleOutline, a7 as IonLabel, aG as IonContent, H as createCommentVNode, bf as IonFooter, bI as saveOutline, aq as IonItem, bO as IonSelect, R as renderList, bN as IonSelectOption, a4 as normalizeClass, aL as useRouter, bY as chevronBackOutline, S as withDirectives, T as vShow, bu as IonPage } from './vendor-DlXvc2CI.js';
import { z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, t as toastWarning, n as icons, _ as _export_sfc, F as DynamicButton, C as useExposeFromStandardForm, y as StandardValidations, u as useDemographicsStore, T as Toolbar, J as savePatientRecord } from '../index-6vvaor6U.js';
import { D as DemographicBar } from './DemographicBar-BSxZALOQ.js';
import { _ as _sfc_main$i } from './Wizard.vue_vue_type_script_setup_true_lang-seo70Tyl.js';
import { u as useFormWizard } from './useFormWizard-CAqg5uX9.js';
import { V as Vitals } from './Vitals-UrtW7t3d.js';
import { d as defineStore, s as storeToRefs } from './pinia-DxIh5T-z.js';
import { _ as _sfc_main$h } from './LevelOfConsciousness.vue_vue_type_script_setup_true_lang-Bz4he-Up.js';

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "breastExaminationsResults",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const breastExaminationsResults = computed(() => {
      return [
        {
          name: "No breast exam conducted",
          label: "No breast exam conducted",
          type: "single",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Normal breast exam result",
          label: "Normal breast exam result",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Bleeding",
          label: "Bleeding",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Nodule",
          label: "Nodule",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Rapid breathing",
          label: "Rapid breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Discharge",
          label: "Discharge",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Flushing",
          label: "Flushing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Local pain",
          label: "Local pain",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Increased temperature",
          label: "Increased temperature",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Breast",
          label: "Breast",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Tenderness",
          label: "Tenderness",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Other findings",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Other findings",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Other general exam findings": "" };
            }
          }
        },
        {
          header: "Other general exam findings",
          name: "Other general exam findings",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["No breast exam conducted"] || formValues["Normal breast exam result"] || formValues["Bleeding"] || formValues["Nodule"] || formValues["Rapid breathing"] || formValues["Discharge"] || formValues["Flushing"] || formValues["Local pain"] || formValues["Increased temperature"] || formValues["Breast"] || formValues["Tenderness"] || formValues["Other findings"] || formValues["Other general exam findings"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Breast examinations results saved successfully");
      } else {
        toastWarning("Breast examinations results data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Breast examinations results",
        formData: breastExaminationsResults.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "vaginalInspection",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const vaginalInspection = computed(() => {
      return [
        {
          name: "No vaginal inspection done",
          label: "No vaginal inspection done",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Nothing abnormal observed",
          label: "Nothing abnormal observed",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Abnormal discharge",
          label: "Abnormal discharge",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Papules",
          label: "Papules",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Ulcers",
          label: "Ulcers",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Warts",
          label: "Warts",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Vesicles",
          label: "Vesicles",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Bleeding",
          label: "Bleeding",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Genital pain",
          label: "Genital pain",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Other findings",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Other findings",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Other general exam findings": "" };
            }
          }
        },
        {
          header: "Other general exam findings",
          name: "Other general exam findings",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true
        },
        {
          name: "Amniotic fluid level",
          label: "Amniotic fluid level",
          header: "Amniotic fluid level",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["No vaginal inspection done"] || formValues["Nothing abnormal observed"] || formValues["Abnormal discharge"] || formValues["Papules"] || formValues["Ulcers"] || formValues["Warts"] || formValues["Vesicles"] || formValues["Bleeding"] || formValues["Genital pain"] || formValues["Other findings"] || formValues["Other general exam findings"] || formValues["Amniotic fluid level"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.VAGINAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Vaginal inspection saved successfully");
      } else {
        toastWarning("Vaginal inspection data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Vaginal inspection",
        formData: vaginalInspection.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "vaginalExaminationDone",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const isPallorPresent = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Is vaginal examination done?",
          header: "Is vaginal examination done?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Digital": "", "Speculum": "" };
            }
          }
        },
        //     name: "Type of vaginal examination done?",
        {
          name: "Digital",
          label: "Digital",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Is vaginal examination done?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Digital examination findings notes": "" };
            }
          }
        },
        {
          header: "Digital examination findings notes",
          name: "Digital examination findings notes",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Digital"] === true && allFormValues["Is vaginal examination done?"] === "Yes"
        },
        {
          name: "Speculum",
          label: "Speculum",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Is vaginal examination done?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "peculum examination findings notes": "" };
            }
          }
        },
        {
          header: "peculum examination findings notes",
          name: "peculum examination findings notes",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Speculum"] === true && allFormValues["Is vaginal examination done?"] === "Yes"
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["Is vaginal examination done?"] || formValues["Digital"] || formValues["Digital examination findings notes"] || formValues["Speculum"] || formValues["peculum examination findings notes"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.VAGINAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Vaginal inspection saved successfully");
      } else {
        toastWarning("Vaginal inspection data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Is vaginal examination done",
        formData: isPallorPresent.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MaternalExam",
  setup(__props, { expose: __expose }) {
    onMounted(() => {
    });
    const onSubmit = async () => {
      return true;
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
      // resetForm: () => {
      //     formKey.value++;
      //     nextTick(() => {
      //         heightWeightForm.loadHeight();
      //     });
      // },
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$g)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$f)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$e)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const MaternalExam = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-f6adadd7"]]);

const isOpen = ref(false);
const selectedFetusNumber = ref(null);
function useFetalDetails() {
  const openFetalModal = (fetusNum) => {
    selectedFetusNumber.value = fetusNum;
    isOpen.value = true;
  };
  const closeFetalModal = () => {
    isOpen.value = false;
    selectedFetusNumber.value = null;
  };
  return {
    isOpen,
    selectedFetusNumber,
    openFetalModal,
    closeFetalModal
  };
}

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "addFeatus",
  props: {
    featus_number: {}
  },
  setup(__props) {
    const formRef = ref(null);
    const props = __props;
    const subtitle = computed(() => {
      return `Capturing clinical data for Fetus #${props.featus_number}`;
    });
    const featusDataForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Fetal heartbeat present?",
          name: "Fetal heartbeat present?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return {
                "Fetal rate": "",
                "Repeated fetal rate": "",
                "specify the Fetal presentation": "",
                "Select fetal presentation": ""
              };
            }
          }
        },
        {
          name: "Fetal rate",
          header: "Fetal rate",
          label: "Fetal rate",
          componentType: "inputField",
          icon: icons.pulse,
          unit: "BMP",
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes"
        },
        {
          name: "Repeated fetal rate",
          header: "Repeated fetal rate",
          label: "Repeated fetal rate",
          componentType: "inputField",
          unit: "BMP",
          icon: icons.pulse,
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes"
        },
        {
          componentType: "radioButtonField",
          header: "Fetal heart rate regularity",
          name: "Fetal heart rate regularity",
          options: [
            { label: "Regular", value: "Regular" },
            { label: "Irregular", value: "Irregular" }
          ]
        },
        {
          componentType: "radioButtonField",
          header: "Select fetal presentation",
          name: "Select fetal presentation",
          grid: { s: "5" },
          options: [
            { label: "Unknown presentation", value: "Unknown presentation" },
            { label: "Cephalic", value: "Cephalic" },
            { label: "Pelvic", value: "Pelvic" },
            { label: "Transverse", value: "Transverse" },
            { label: "Breech", value: "Breech" },
            { label: "Other", value: "Other" }
          ],
          condition: (allFormValues) => allFormValues["Fetal heartbeat present?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Other") {
              return { "specify the Fetal presentation": "" };
            }
          }
        },
        {
          name: "specify the Fetal presentation",
          header: "specify the Fetal presentation",
          label: "specify the Fetal presentation",
          componentType: "inputField",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Select fetal presentation"] === "Other" && allFormValues["Fetal heartbeat present?"] === "Yes"
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: subtitle.value,
        formData: featusDataForm.value,
        key: __props.featus_number,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["subtitle", "formData"]);
    };
  }
});

const _hoisted_1$6 = { class: "header-content" };
const _hoisted_2$3 = { class: "header-text" };
const _hoisted_3$1 = {
  key: 0,
  class: "details-container"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "FeatusModal",
  setup(__props) {
    const { isOpen, selectedFetusNumber, closeFetalModal } = useFetalDetails();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonModal), {
        "is-open": unref(isOpen),
        "show-backdrop": true,
        onDidDismiss: unref(closeFetalModal),
        "keyboard-close": false,
        class: "fetal-details-modal"
      }, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), { color: "light" }, {
                default: withCtx(() => [
                  createVNode(unref(IonTitle), { slot: "start" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1$6, [
                        createVNode(unref(IonIcon), {
                          icon: unref(eggOutline),
                          class: "header-icon"
                        }, null, 8, ["icon"]),
                        createBaseVNode("span", _hoisted_2$3, [
                          _cache[0] || (_cache[0] = createTextVNode("Fetal Details: ", -1)),
                          createBaseVNode("b", null, "Fetus " + toDisplayString(unref(selectedFetusNumber)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonButtons), {
                    slot: "end",
                    style: { "margin-right": "18px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        onClick: unref(closeFetalModal),
                        color: "danger",
                        fill: "solid"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(closeCircleOutline),
                            slot: "start"
                          }, null, 8, ["icon"]),
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [..._cache[1] || (_cache[1] = [
                              createTextVNode("Close", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              unref(selectedFetusNumber) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createVNode(_sfc_main$c, { featus_number: unref(selectedFetusNumber) }, null, 8, ["featus_number"])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), { class: "ion-no-border" }, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonButtons), {
                    slot: "end",
                    style: { "margin-right": "18px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        expand: "block",
                        onClick: unref(closeFetalModal),
                        color: "primary",
                        fill: "solid"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            icon: unref(saveOutline),
                            slot: "start"
                          }, null, 8, ["icon"]),
                          _cache[2] || (_cache[2] = createTextVNode(" Save Details ", -1))
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["is-open", "onDidDismiss"]);
    };
  }
});

const FetusModal = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-62089c71"]]);

const _hoisted_1$5 = {
  key: 0,
  class: "selector-wrapper"
};
const _hoisted_2$2 = { class: "select-box-container" };
const _hoisted_3 = {
  key: 0,
  class: "button-list-wrap"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FetusSelector",
  props: {
    showSelector: { type: Boolean, default: false }
  },
  setup(__props) {
    const numFetuses = ref(null);
    const { openFetalModal } = useFetalDetails();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.showSelector ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$2, [
            createVNode(unref(IonItem), {
              lines: "outline",
              class: "narrow-select-item"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonLabel), { position: "stacked" }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Number of Fetuses", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonSelect), {
                  modelValue: numFetuses.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => numFetuses.value = $event),
                  interface: "popover",
                  placeholder: "Select",
                  class: "custom-select"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(8, (num) => {
                      return createVNode(unref(IonSelectOption), {
                        key: num,
                        value: num
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(num), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          numFetuses.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(numFetuses.value, (fetusNum) => {
              return openBlock(), createBlock(DynamicButton, {
                key: fetusNum,
                name: "add Fetus " + fetusNum,
                size: "small",
                fill: "solid",
                color: "primary",
                "onClicked:btn": ($event) => unref(openFetalModal)(fetusNum),
                class: "small-wrap-button"
              }, null, 8, ["name", "onClicked:btn"]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(FetusModal)
      ], 64);
    };
  }
});

const FetusSelector = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-e532bb2c"]]);

const _hoisted_1$4 = { style: { "padding": "20px" } };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FetalAssessmentResults",
  setup(__props) {
    const formKey = ref(0);
    const { formRef } = useExposeFromStandardForm();
    const NumberOfFetusesKnown = (allFormValues) => {
      return allFormValues?.["Is number of fetuses known?"] === "Yes";
    };
    const showFetusSelector = () => {
      if (!formRef.value) return false;
      const x = formRef.value?.getFormValues();
      if (!x) return false;
      return NumberOfFetusesKnown(x);
    };
    const showSelector = computed(() => showFetusSelector());
    const isPallorPresent = computed(() => {
      return [
        {
          name: "Symphysis-fundal height (SFH) *",
          header: "Symphysis-fundal height (SFH) *",
          componentType: "inputField",
          icon: icons.height,
          unit: "cm"
        },
        {
          name: "Is number of fetuses known?",
          header: "Is number of fetuses known?",
          componentType: "radioButtonField",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Number of fetuses": "" };
            }
          }
          // condition: (allFormValues: any) => {
          //     return NumberOfFetusesKnown(allFormValues);
          // },
        }
        // {
        //     name: "Number of fetuses",
        //     header: "Number of fetuses",
        //     componentType: "inputField",
        //     icon: icons.editPen,
        // },
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        (openBlock(), createBlock(StandardForm, {
          subtitle: "Fetal assessment results",
          formData: isPallorPresent.value,
          key: formKey.value,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])),
        createVNode(FetusSelector, {
          showSelector: showSelector.value,
          style: { "margin-top": "20px" }
        }, null, 8, ["showSelector"])
      ]);
    };
  }
});

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AbdominalExamination",
  setup(__props, { expose: __expose }) {
    onMounted(() => {
    });
    const onSubmit = async () => {
      return true;
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
      // resetForm: () => {
      //     formKey.value++;
      //     nextTick(() => {
      //         heightWeightForm.loadHeight();
      //     });
      // },
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), { class: "m-card" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$9)
        ]),
        _: 1
      });
    };
  }
});

const useIPVStore = defineStore("ipvStore", {
  state: () => ({
    // Stores all form field values
    formData: {}
  }),
  actions: {
    /**
     * Updates specific fields in the store without overwriting
     * existing unrelated fields.
     */
    setFormData(data) {
      this.formData = { ...this.formData, ...data };
    },
    /**
     * Clears all stored IPV data (useful after successful submission)
     */
    resetFormData() {
      this.formData = {};
    },
    /**
     * Returns the current form data
     */
    getFormData() {
      return this.formData;
    }
  },
  // Enables automatic persistence (LocalStorage) similar to your UserStore
  persist: true
});

const _hoisted_1$3 = { style: { "padding": "20px" } };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PresentingSigns",
  setup(__props, { expose: __expose }) {
    const ipvStore = useIPVStore();
    const formKey = ref(0);
    const formRef = ref(null);
    const handleFieldChange = (event) => {
      ipvStore.setFormData({ [event.fieldName]: event.value });
    };
    const presentingSignsOrConditionsForIPV = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Is the abdomen shiny?",
          name: "Is the abdomen shiny?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Is there traumatic injury to abdomen": "" };
            }
          }
        },
        {
          componentType: "radioButtonField",
          header: "Is there traumatic injury to abdomen?",
          name: "Is there traumatic injury to abdomen",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Is the abdomen shiny?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Specify the injury": "" };
            }
          }
        },
        {
          header: "Specify the injury",
          name: "Specify the injury",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Is there traumatic injury to abdomen"] === "Yes" && allFormValues["Is the abdomen shiny?"] === "Yes"
        },
        {
          name: "Any other clinical enquiry done?",
          componentType: "radioButtonField",
          header: "Any other clinical enquiry done?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Specify the clinical enquiry provided": "" };
            }
          }
        },
        {
          header: "Specify the clinical enquiry provided",
          name: "Specify the clinical enquiry provided",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any other clinical enquiry done?"] === "Yes"
        },
        {
          name: "Has the woman been subjected to any form of violence?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          header: "Has the woman been subjected to any form of violence?",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Physical violence (IPV)",
          name: "Physical violence",
          grid: { s: "5" },
          label: "Physical violence",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Sexual violence",
          name: "Sexual violence",
          grid: { s: "5" },
          label: "Sexual violence",
          obsValueType: "value_coded",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Psychological abuse",
          name: "Psychological/emotional abuse",
          grid: { s: "5" },
          label: "Psychological/emotional abuse",
          componentType: "checkboxField",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Physiological violence",
          name: "Physiological violence",
          grid: { s: "5" },
          label: "Physiological violence",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Stalking",
          name: "Stalking",
          grid: { s: "5" },
          label: "Stalking",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes"
        },
        {
          // value: "Other",
          name: "Other",
          grid: { s: "5" },
          label: "Other",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          type: "single",
          condition: (allFormValues) => allFormValues["Has the woman been subjected to any form of violence?"] === "Yes",
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Violence by other family members (specify)": "" };
            }
          }
        },
        {
          header: "Violence by other family members (specify)",
          name: "Violence by other family members (specify)",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other"] === true
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["Is the abdomen shiny?"] || formValues["Is there traumatic injury to abdomen"] || formValues["Specify the injury"] || formValues["Any other clinical enquiry done?"] || formValues["Specify the clinical enquiry provided"] || formValues["Has the woman been subjected to any form of violence?"] || formValues["Physical violence"] || formValues["Sexual violence"] || formValues["Psychological/emotional abuse"] || formValues["Physiological violence"] || formValues["Stalking"] || formValues["Other"] || formValues["Violence by other family members (specify)"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        ipvStore.resetFormData();
        toastSuccess("Presenting Signs saved successfully");
      } else {
        toastWarning("No Presenting Signs data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            (openBlock(), createBlock(StandardForm, {
              formData: presentingSignsOrConditionsForIPV.value,
              allFormValues: unref(ipvStore).formData,
              onFieldChanged: handleFieldChange,
              key: formKey.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData", "allFormValues"]))
          ])
        ]),
        _: 1
      });
    };
  }
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "IsPallorPresent",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const isPallorPresent = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Is pallor present?",
          header: "Is pallor present?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "ny action taken?": "" };
            }
          }
        },
        {
          name: "Any action taken?",
          componentType: "radioButtonField",
          header: "Any action taken?",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return { "Action on pallor": "" };
            }
          },
          condition: (allFormValues) => allFormValues["Is pallor present?"] === "Yes"
        },
        {
          header: "Specify the action taken",
          name: "Action on pallor",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any action taken?"] === "Yes"
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["Is pallor present?"] || formValues["Any action taken?"] || formValues["Action on pallor"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Is pallor present saved successfully");
      } else {
        toastWarning("No Is pallor present data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Is pallor present",
        formData: isPallorPresent.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "oedemaPresent",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const oedemaPresense = computed(() => {
      return [
        {
          name: "Is oedema present?",
          header: "Is oedema present?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Select the type of Oedema the woman has?",
          header: "Select the type of Oedema the woman has?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "pitting ankle oedema", value: "pitting ankle oedema" },
            { label: "leg swelling", value: "leg swelling" },
            { label: "oedema of the hands and feet", value: "oedema of the hands and feet" },
            { label: "pitting lower back oedema", value: "pitting lower back oedema" },
            { label: "Facial oedema", value: "Facial oedema" },
            { label: "General body oedema", value: "General body oedema" }
          ],
          condition: (allFormValues) => allFormValues["Is oedema present?"] === "Yes"
        },
        {
          name: "Severity of Oedema?",
          header: "Severity of Oedema?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            // { label: "Mild", value: "Mild" },
            // { label: "Moderate", value: "Moderate" },
            // { label: "Severe", value: "Severe" },
            { label: "+", value: "+" },
            { label: "++", value: "++" },
            { label: "+++", value: "+++" },
            { label: "++++", value: "++++" }
          ],
          condition: (allFormValues) => allFormValues["Is oedema present?"] === "Yes"
        },
        {
          name: "Varicose Veins Present",
          header: "Varicose Veins Present",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
          // condition: (allFormValues: any) => allFormValues["Is oedema present?"] === "Yes",
        },
        {
          name: "Any deformities present?",
          header: "Any deformities present?",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
          // condition: (allFormValues: any) => allFormValues["Is oedema present?"] === "Yes",
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Any deformities present?"] === "Yes"
        },
        {
          name: "Specify the deformity",
          header: "Specify the deformity",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Any deformities present?"] === "Yes"
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["Is oedema present?"] || formValues["Select the type of Oedema the woman has?"] || formValues["Severity of Oedema?"] || formValues["Varicose Veins Present"] || formValues["Any deformities present?"] || formValues["Specify the deformity"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Oedema Presence saved successfully");
      } else {
        toastWarning("No Oedema Presence data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Extremities",
        formData: oedemaPresense.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$2 = { class: "tb-button-container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "respiratoryExamFindings",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const handleTBTesting = (values) => {
      console.log("Patient referred for TB testing with values:", values);
      alert("Referral for TB Testing has been recorded.");
    };
    const respiatoryExamFindings = computed(() => {
      return [
        {
          name: "Cough",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Cough",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value, allFormValues) => {
            if (value === "Yes") {
              return {
                "Fever": "",
                "Cough type:": "",
                "Duration of cough:": "",
                "Weight loss": "",
                "Night sweats": ""
              };
            }
          }
        },
        {
          name: "Rapid breathing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Rapid breathing",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Slow breathing",
          type: "single",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          label: "Slow breathing",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Wheezing",
          type: "single",
          componentType: "checkboxField",
          grid: { s: "5" },
          label: "Wheezing",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Rales",
          type: "single",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          label: "Rales",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Respiratory distress",
          type: "single",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          label: "Respiratory distress",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Other findings",
          type: "single",
          componentType: "checkboxField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          label: "Other findings",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          onChange: (value) => {
            if (value === "Yes") {
              return { "Specify other respiratory findings": "" };
            }
          }
        },
        {
          header: "Specify other respiratory findings",
          name: "Specify other respiratory findings",
          componentType: "inputField",
          obsValueType: "value_text",
          icon: icons.editPen,
          condition: (allFormValues) => allFormValues["Other findings"] === true
        },
        {
          "componentType": "Dashes",
          "grid": { "s": "12" },
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "TB Screening",
          header: "TB Screening",
          componentType: "Heading",
          obsValueType: "value_coded",
          grid: { s: "12" },
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          componentType: "inputField",
          name: "Duration of cough",
          header: "Duration of cough",
          obsValueType: "value_coded",
          icon: icons.edit,
          // grid: { s: "6" },
          unitOptions: [
            { label: "Days", value: "Days" },
            { label: "Weeks", value: "Weeks" },
            { label: "Months", value: "Months" },
            { label: "Years", value: "Years" }
          ],
          validation: (value) => {
            return StandardValidations.isNotEmptyandNumber(value);
          },
          condition: (allFormValues) => allFormValues["Cough"] === true,
          onChange: (value) => {
            const val = Number(value);
            if (val) {
              toastWarning("please select a unit", 1500);
            }
          }
        },
        {
          name: "Weight loss",
          label: "Weight loss",
          header: "Weight loss",
          obsValueType: "value_coded",
          componentType: "radioButtonField",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "Fever",
          label: "Fever",
          header: "Fever",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "Cough type",
          label: "Dry or productive",
          header: "Cough type",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [
            { label: "Dry", value: "Dry" },
            { label: "Productive", value: "Productive" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          name: "Night sweats",
          label: "Night sweats",
          header: "Night sweats",
          componentType: "radioButtonField",
          obsValueType: "value_coded",
          grid: { s: "5" },
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          condition: (allFormValues) => allFormValues["Cough"] === true
        },
        {
          componentType: "Dashes",
          // Optional: add a condition if you only want the line to appear 
          // when the TB button is about to appear
          condition: (vals) => {
            return vals["Weight loss"] === "Yes" || vals["Fever"] === "Yes" || vals["Night sweats"] === "Yes";
          }
        },
        // --- THE SLOT CONFIGURATION ---
        {
          name: "tb_referral_slot",
          componentType: "Slot",
          slotName: "tb_button_slot",
          grid: { s: "12" },
          // Button takes full width of the row
          condition: (vals) => {
            return vals["Weight loss"] === "Yes" || vals["Fever"] === "Yes" || vals["Night sweats"] === "Yes" || vals["Cough"] === "Yes";
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["Cough"] || formValues["Rapid breathing"] || formValues["Slow breathing"] || formValues["Wheezing"] || formValues["Rales"] || formValues["Respiratory distress"] || formValues["Other findings"] || formValues["Specify other respiratory findings"] || formValues["TB Screening"] || formValues["Duration of cough"] || formValues["Weight loss"] || formValues["Fever"] || formValues["Cough type"] || formValues["Night sweats"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Respiratory Exam Findings saved successfully");
      } else {
        toastWarning("No Respiratory Exam Findings data to save");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Respiratory exam findings",
        formData: respiatoryExamFindings.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, {
        tb_button_slot: withCtx(({ formValues }) => [
          createBaseVNode("div", _hoisted_1$2, [
            createVNode(unref(IonButton), {
              expand: "block",
              color: "warning",
              onClick: ($event) => handleTBTesting(formValues)
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode(" Send for TB testing ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      }, 8, ["formData"]);
    };
  }
});

const respiratoryExamFindings = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b112f80a"]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Appearance",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const appearanceDataForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Kempt",
          header: "Kempt",
          required: true,
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          name: "Gait",
          componentType: "radioButtonField",
          header: "Gait",
          required: true,
          obsValueType: "value_coded",
          options: [
            { label: "Normal", value: "Normal" },
            { label: "Abnormal", value: "Abnormal" }
          ]
        },
        {
          name: "Nutritional status",
          componentType: "radioButtonField",
          header: "Nutritional status",
          obsValueType: "value_coded",
          required: true,
          options: [
            { label: "Well Nourished", value: "Well Nourished" },
            { label: "Malnourished", value: "Malnourished" }
          ]
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      formRef.value?.validateForm();
      if (formValues["Kempt"] || formValues["Gait"] || formValues["Nutritional status"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        formRef.value.resetForm();
        toastSuccess("Appearance saved successfully");
      } else toastWarning("No appearance data to save");
    };
    __expose({
      onSubmit,
      validateForm: () => formRef.value?.validateForm()
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Appearance",
        formData: appearanceDataForm.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$1 = { class: "warning-title" };
const _hoisted_2$1 = { class: "warning-message" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MUAC",
  setup(__props, { expose: __expose }) {
    const formKey = ref(0);
    const formRef = ref(null);
    const getMuacStatus = (value) => {
      const muac = parseFloat(value);
      if (!muac || isNaN(muac)) return { class: "", label: "", color: "", message: "" };
      if (muac < 18) {
        return {
          class: "status-red",
          label: "Severe (Red)",
          color: "#ffcdd2",
          message: "Refer for nutritional management"
        };
      } else if (muac >= 18 && muac <= 21) {
        return {
          class: "status-yellow",
          label: "Moderate (Yellow)",
          color: "#fff9c4",
          message: "Refer for nutritional management"
        };
      } else {
        return {
          class: "status-green",
          label: "Normal (Green)",
          color: "#c8e6c9",
          message: "Patient is well nourished"
        };
      }
    };
    const MUACFormData = computed(() => {
      return [
        {
          name: "MUAC",
          header: "MUAC - Number",
          componentType: "inputField",
          icon: icons.height,
          obsValueType: "value_numeric",
          unit: "cm",
          eventType: "number",
          onChange: (value) => {
            if (value && isNaN(Number(value))) {
              toastWarning("Invalid input: Please enter a numeric value only", 1500);
              return {
                "MUAC": "",
                backgroundColor: ""
              };
            }
            const status = getMuacStatus(value);
            return { backgroundColor: status.color };
          }
        },
        {
          name: "muac_alert_container",
          componentType: "Slot",
          slotName: "muac_warning_slot",
          grid: { s: "12" },
          condition: (vals) => {
            const muac = parseFloat(vals["MUAC"]);
            return !isNaN(muac) && muac > 0;
          }
        }
      ];
    });
    const onSubmit = async () => {
      if (!formRef.value) return;
      const formValues = formRef.value.getFormValues();
      formRef.value?.validateForm();
      if (formValues["MUAC"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.PHYSICAL_EXAMINATION);
        toastSuccess("MUAC assessment saved successfully");
        formRef.value.resetForm();
      } else {
        toastWarning("Please enter a MUAC value before saving");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        subtitle: "Mid-Upper Arm Circumference (MUAC)",
        formData: MUACFormData.value,
        key: formKey.value,
        ref_key: "formRef",
        ref: formRef
      }, {
        muac_warning_slot: withCtx(({ formValues }) => [
          createBaseVNode("div", {
            class: normalizeClass(["muac-warning-box", getMuacStatus(formValues["MUAC"]).class])
          }, [
            createBaseVNode("div", _hoisted_1$1, " Nutritional Status: " + toDisplayString(getMuacStatus(formValues["MUAC"]).label), 1),
            createBaseVNode("div", _hoisted_2$1, toDisplayString(getMuacStatus(formValues["MUAC"]).message), 1)
          ], 2)
        ]),
        _: 1
      }, 8, ["formData"]);
    };
  }
});

const MUAC = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9f5986d8"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeneralExamination",
  setup(__props, { expose: __expose }) {
    const levelOfConsciousnessRef = ref(null);
    const MUACref = ref(null);
    const apperanceRef = ref(null);
    const respiratoryExamFindingsRef = ref(null);
    const isPallorPresentRef = ref(null);
    const oedemaPresentRef = ref(null);
    onMounted(() => {
    });
    const onSubmit = () => {
      try {
        const results = [
          levelOfConsciousnessRef.value?.onSubmit?.(),
          MUACref.value?.onSubmit?.(),
          apperanceRef.value?.onSubmit?.(),
          respiratoryExamFindingsRef.value?.onSubmit?.(),
          isPallorPresentRef.value?.onSubmit?.(),
          oedemaPresentRef.value?.onSubmit?.()
        ].filter((result) => result !== void 0);
        return results.length === 0 || results.every((result) => result === true);
      } catch (error) {
        console.error("Error in GeneralExamination onSubmit:", error);
        return false;
      }
    };
    __expose({
      validateForm: () => {
      },
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$h, {
              ref_key: "levelOfConsciousnessRef",
              ref: levelOfConsciousnessRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              ref_key: "MUACref",
              ref: MUACref
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(MUAC, {
              ref_key: "apperanceRef",
              ref: apperanceRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(respiratoryExamFindings, {
              ref_key: "respiratoryExamFindingsRef",
              ref: respiratoryExamFindingsRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6, {
              ref_key: "isPallorPresentRef",
              ref: isPallorPresentRef
            }, null, 512)
          ]),
          _: 1
        }),
        createVNode(unref(IonCard), { class: "m-card" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$5, {
              ref_key: "oedemaPresentRef",
              ref: oedemaPresentRef
            }, null, 512)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const GeneralExamination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-536cbcf7"]]);

const _hoisted_1 = {
  style: { "width": "90vw", "margin": "0 auto", "margin-top": "10px" },
  class: "p-container"
};
const _hoisted_2 = { class: "back_profile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "physicalExamination",
  setup(__props) {
    const router = useRouter();
    const { onTabBeforeChange, currentTabIndex } = useFormWizard();
    const vitalsRef = ref(null);
    const MaternalExamRef = ref(null);
    const AbdominalExaminationRef = ref(null);
    const PresentingSignsRef = ref(null);
    const GeneralExaminationRef = ref(null);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const getActiveComponent = () => {
      if (!tabs.value || tabs.value.length === 0) {
        return null;
      }
      const index = currentTabIndex.value >= 0 && currentTabIndex.value < tabs.value.length ? currentTabIndex.value : 0;
      const currentTab = tabs.value[index]?.title;
      switch (currentTab) {
        case "Vital Signs":
          return "Vitals";
        case "General Examination":
          return "GeneralExamination";
        case "Maternal Exam":
          return "MaternalExam";
        case "Abdominal examination":
          return "AbdominalExamination";
        case "Presenting signs for IPV":
          return "PresentingSigns";
        default:
          return null;
      }
    };
    const showWizard = ref(true);
    const isDoneButtonDisabled = ref(false);
    const isSaving = ref(false);
    const doneButtonOptions = computed(() => {
      return {
        text: isSaving.value ? "Saving..." : "Finish",
        icon: isSaving.value ? "hourglassOutline" : "checkmark",
        hideText: false,
        hideIcon: false,
        disabled: isDoneButtonDisabled.value || isSaving.value
      };
    });
    const getActiveTabs = () => {
      return [
        {
          title: "Vital Signs",
          icon: ""
        },
        {
          title: "General Examination",
          icon: ""
        },
        {
          title: "Maternal Exam",
          icon: ""
        },
        {
          title: "Abdominal examination",
          icon: ""
        },
        {
          title: "Presenting signs for IPV",
          icon: ""
        }
      ];
    };
    const tabs = ref(getActiveTabs());
    const openBackController = () => {
      router.push("/anc/home");
    };
    const handleDoneButtonChange = (changeData) => {
      console.log("Done button change received from wizard:", changeData);
      if (changeData.newOptions.disabled) {
        console.log("Done button has been disabled");
      }
      if (changeData.isLastStep) {
        console.log("User is on the last step, done button should be visible");
      }
    };
    const onChangeCurrentTab = async (index, _oldIndex) => {
      const value = tabs.value[_oldIndex]?.title;
      if (index % 1 === 0) currentTabIndex.value = index;
      if (value == "Vital Signs") {
        vitalsRef.value?.onSubmit();
      }
      if (value == "General Examination") {
        console.log("General Examination: ", GeneralExaminationRef.value);
        GeneralExaminationRef.value?.onSubmit();
      }
      if (value == "Maternal Exam") {
        MaternalExamRef.value?.onSubmit();
      }
      if (value == "Abdominal examination") {
        AbdominalExaminationRef.value?.onSubmit();
      }
      if (value == "Presenting signs for IPV") {
        PresentingSignsRef.value?.onSubmit();
      }
      await savePatientRecord(patient.value);
    };
    onMounted(async () => {
      tabs.value = getActiveTabs();
      if (currentTabIndex.value === void 0 || currentTabIndex.value < 0) {
        currentTabIndex.value = 0;
        console.log("Setting initial tab index to 0");
      }
      isDoneButtonDisabled.value = false;
      isSaving.value = false;
      validateDoneButtonState();
    });
    const validateDoneButtonState = () => {
      let shouldDisable = false;
      getActiveComponent();
      if (isSaving.value) {
        shouldDisable = true;
      }
      isDoneButtonDisabled.value = shouldDisable;
      return !shouldDisable;
    };
    const saveData = async () => {
      isSaving.value = true;
      try {
        await savePatientRecord(patient.value);
        openBackController();
      } catch (error) {
        console.error("Error saving data:", error);
        toastWarning("Error occurred while saving data. Please try again.");
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createBaseVNode("div", _hoisted_1, [
                showWizard.value ? (openBlock(), createBlock(_sfc_main$i, {
                  key: 0,
                  ref: "wizard",
                  headingTitle: "Physical examination",
                  "vertical-tabs": "",
                  "navigable-tabs": "",
                  "scrollable-tabs": "",
                  startIndex: 0,
                  doneButton: doneButtonOptions.value,
                  "custom-tabs": tabs.value,
                  beforeChange: unref(onTabBeforeChange),
                  onChange: onChangeCurrentTab,
                  "onComplete:wizard": _cache[1] || (_cache[1] = ($event) => saveData()),
                  onDoneButtonChanged: handleDoneButtonChange
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(DynamicButton, {
                          name: "Back to Contact",
                          iconSlot: "start",
                          fill: "clear",
                          icon: unref(chevronBackOutline),
                          "font-weight": "600",
                          onClick: _cache[0] || (_cache[0] = ($event) => openBackController())
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(Vitals, {
                        ref_key: "vitalsRef",
                        ref: vitalsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "Vitals"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(MaternalExam, {
                        ref_key: "MaternalExamRef",
                        ref: MaternalExamRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "MaternalExam"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$8, {
                        ref_key: "AbdominalExaminationRef",
                        ref: AbdominalExaminationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "AbdominalExamination"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(_sfc_main$7, {
                        ref_key: "PresentingSignsRef",
                        ref: PresentingSignsRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "PresentingSigns"]
                    ]),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(GeneralExamination, {
                        ref_key: "GeneralExaminationRef",
                        ref: GeneralExaminationRef
                      }, null, 512)
                    ], 512), [
                      [vShow, getActiveComponent() == "GeneralExamination"]
                    ])
                  ]),
                  _: 1
                }, 8, ["doneButton", "custom-tabs", "beforeChange"])) : createCommentVNode("", true)
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

const physicalExamination = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d0d3615"]]);

export { physicalExamination as default };
